/* ============================================================
   BIO 004 · COURSE SETUP WALKTHROUGH  (course-tour.js)
   A first-run, cross-page guided tour. Like setting up a new Mac:
   it spotlights one real button at a time, points an arrow at it,
   and will not advance until the student does the thing.

   Spans two pages:
     index.html      -> orient + open Week 1
     week-1-hub.html -> find Concept videos, Recall Rx cards,
                        and the Thursday InteDashboard TBL button

   Drop into any page with one line before </body>:
     <script src="course-tour.js" defer></script>
   State is shared across pages via sessionStorage, so the tour
   resumes wherever the student lands next.

   Palette: navy #0B1530, gold #C9A14A, rust #8B3A2E, white.
   Accessibility: role=dialog, aria-live step announcements,
   keyboard operable, focus management, prefers-reduced-motion.
   Author: Dr. Sharilyn Rennie
   ============================================================ */
(function () {
  "use strict";

  var BASE = "https://drsrennie-stack.github.io/new-build-bio4-solano/";
  var K_IDX = "bio4tour.idx";        // sessionStorage: current step index
  var K_ACTIVE = "bio4tour.active";  // sessionStorage: tour running this visit
  var K_DONE = "bio4tour.completed"; // localStorage: finished at least once
  var REDUCED = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- which page are we on ---------- */
  function pageId() {
    var p = location.pathname;
    if (/week-1-hub/.test(p)) return "hub";
    if (/week-1(?!-hub)/.test(p) || /week-1\.html/.test(p)) return "week";
    return "index"; // index.html or site root
  }

  /* ---------- helpers to find dynamic targets ---------- */
  function pillByText(rx) {
    var pills = document.querySelectorAll(".dp-pill, .wl-pill, a");
    for (var i = 0; i < pills.length; i++) {
      if (rx.test((pills[i].textContent || "").trim())) return pills[i];
    }
    return null;
  }

  /* ============================================================
     STEP LIST  (the whole walkthrough, in order)
     Each step:
       page    : which page it belongs to (index | hub | week)
       find    : () => element  OR  selector string  (null = centered card)
       eyebrow : small label above the title
       title   : heading
       body    : HTML string
       mode    : 'next'         a Next button advances
                 'go'           Next navigates to step.nav, then resumes
                 'click'        student must click the real target; it
                                navigates on its own and the tour resumes
                 'click-stay'   student must click the real target; we
                                intercept it, mark it found, stay on page
       nav     : url for mode:'go'
     ============================================================ */
  var STEPS = [
    /* 0 · welcome (centered, after the loader) */
    {
      page: "index", find: null, mode: "next",
      eyebrow: "Welcome to BIO 004",
      title: "Let's set up your course · 60 seconds",
      body: "New here? This quick walkthrough shows you <strong>exactly where everything lives</strong> and walks you all the way into your first week. " +
            "I'll point at each button. You click it. That's the whole thing."
    },

    /* 1 · syllabus, with the specific things to check */
    {
      page: "index", find: ".cta-primary", mode: "next",
      eyebrow: "Stop 1 of 7 · The syllabus",
      title: "Start here, then check three things",
      body: "Your syllabus holds everything official. The first time you open it, find these three: " +
            "<strong>your exam dates</strong>, the <strong>grade split</strong> (lab exams 45%, weekly TBL 45%, final 5%, lab quizzes 5%), " +
            "and the <strong>Monday lab-exam</strong> schedule. You can always come back to this button."
    },

    /* 2 · weekly rhythm */
    {
      page: "index", find: ".hw-section", mode: "next",
      eyebrow: "Stop 2 of 7 · How a week works",
      title: "Same rhythm every week",
      body: "Every week runs <strong>Monday through Thursday</strong> with one TBL. Learn one week and you know them all. " +
            "Now let's open your first one."
    },

    /* 3 · GATED: open Week 1 (real navigation to the hub) */
    {
      page: "index", find: '.mod-card[data-week="1"]', mode: "click",
      eyebrow: "Stop 3 of 7 · Open your first week",
      title: "Click the Week 1 card",
      body: "This is how you step inside a week. Everything you study lives in here: your <strong>videos</strong>, your <strong>Recall Rx study cards</strong>, and your <strong>TBL</strong>. " +
            "Go ahead, click <strong>Week 1</strong> to walk in."
    },

    /* 4 · hub: concept videos (intercept, stay) */
    {
      page: "hub", find: function () { return pillByText(/concept video/i); }, mode: "click-stay",
      eyebrow: "Stop 4 of 7 · You're inside Week 1",
      title: "Find your concept videos",
      body: "See the daily path on each day card? Each day links <strong>Notes → Concept videos → Recall Rx</strong>. " +
            "The <strong>Concept videos</strong> are your short explainers for each topic. Click one to show me you found it."
    },

    /* 5 · hub: Recall Rx spaced-recall cards (intercept, stay) */
    {
      page: "hub", find: function () { return pillByText(/recall/i); }, mode: "click-stay",
      eyebrow: "Stop 5 of 7 · Study cards",
      title: "This is Recall Rx, your study cards",
      body: "<strong>Recall Rx</strong> is your spaced-recall deck. Do a few cards every day and you will not have to cram for the lab exam. " +
            "Click it to mark it found."
    },

    /* 6 · hub: blue lab card */
    {
      page: "hub", find: function () { return document.querySelector(".weeklab") || document.querySelector("[data-weeklab]"); }, mode: "next",
      eyebrow: "Stop 6 of 7 · Your weekly lab",
      title: "The blue Lab card sets up your week",
      body: "Lab Sprint, Atlas Canvas, and the Digital Atlas live here. Set these up on Monday. " +
            "One last stop: the button that runs your <strong>TBL</strong>."
    },

    /* 7 · hub: InteDashboard TBL button (intercept, stay) */
    {
      page: "hub", find: "a.inted-btn", mode: "click-stay",
      eyebrow: "Stop 7 of 7 · The Thursday TBL",
      title: "This button runs every TBL",
      body: "Your Team-Based Learning happens on <strong>InteDashboard</strong> every Thursday. This is the same button you click for it, week after week. " +
            "Click it to finish your setup."
    },

    /* 8 · completion (centered) */
    {
      page: "hub", find: null, mode: "done",
      eyebrow: "You're all set",
      title: "Setup complete 🎉",
      body: "You found your <strong>syllabus</strong>, learned how to <strong>open a week</strong>, and located your <strong>concept videos</strong>, " +
            "your <strong>Recall Rx cards</strong>, and the <strong>InteDashboard TBL</strong> button. " +
            "Replay this anytime with the <strong>Course setup</strong> button in the corner."
    }
  ];

  /* ============================================================
     STATE
     ============================================================ */
  function getIdx() { var v = sessionStorage.getItem(K_IDX); return v === null ? -1 : parseInt(v, 10); }
  function setIdx(i) { sessionStorage.setItem(K_IDX, String(i)); }
  function isActive() { return sessionStorage.getItem(K_ACTIVE) === "1"; }
  function setActive(b) { sessionStorage.setItem(K_ACTIVE, b ? "1" : "0"); }
  function isDone() { return localStorage.getItem(K_DONE) === "1"; }
  function markDone() { try { localStorage.setItem(K_DONE, "1"); } catch (e) {} }

  /* ============================================================
     STYLES
     ============================================================ */
  function injectCSS() {
    if (document.getElementById("tour-css")) return;
    var FONT = "'Plus Jakarta Sans Variable','Plus Jakarta Sans',system-ui,-apple-system,Segoe UI,Roboto,sans-serif";
    var anim = REDUCED ? "none" : "";
    var s = document.createElement("style");
    s.id = "tour-css";
    s.textContent = [
      ".tour-mask{position:fixed;background:rgba(11,21,48,.62);z-index:99990;pointer-events:auto}",
      ".tour-ring{position:fixed;z-index:99991;border-radius:12px;box-shadow:0 0 0 3px #C9A14A,0 0 0 7px rgba(201,161,74,.35);pointer-events:none;transition:" + (REDUCED ? "none" : "all .18s ease") + "}",
      ".tour-arrow{position:fixed;z-index:99993;color:#C9A14A;font-size:34px;line-height:1;pointer-events:none;filter:drop-shadow(0 2px 4px rgba(0,0,0,.4))}",
      REDUCED ? "" : "@keyframes tourbob{0%,100%{transform:translateY(0)}50%{transform:translateY(8px)}}",
      ".tour-arrow.bob{animation:" + (REDUCED ? "none" : "tourbob 1s ease-in-out infinite") + "}",
      ".tour-card{position:fixed;z-index:99994;max-width:360px;width:calc(100vw - 32px);background:#fff;color:#0B1530;border-radius:16px;",
      "  box-shadow:0 18px 50px rgba(0,0,0,.38);font-family:" + FONT + ";padding:20px 22px 18px;border:1px solid #e4e6ee}",
      ".tour-card.centered{left:50%;top:50%;transform:translate(-50%,-50%);max-width:440px;text-align:left}",
      ".tour-eyebrow{font:700 11px/1.2 " + FONT + ";letter-spacing:.16em;text-transform:uppercase;color:#8B3A2E;margin:0 0 8px}",
      ".tour-title{font:800 21px/1.25 " + FONT + ";color:#0B1530;margin:0 0 8px;letter-spacing:-.01em}",
      ".tour-body{font:400 14.5px/1.6 " + FONT + ";color:#28304a;margin:0 0 16px}",
      ".tour-body strong{color:#0B1530}",
      ".tour-foot{display:flex;align-items:center;gap:10px;flex-wrap:wrap}",
      ".tour-progress{font:700 12px/1 " + FONT + ";color:#6b7390;margin-right:auto}",
      ".tour-btn{font:800 14px/1 " + FONT + ";border-radius:9px;padding:11px 18px;cursor:pointer;border:1px solid #0B1530;background:#0B1530;color:#fff;transition:" + (REDUCED ? "none" : "transform .14s ease,background .14s ease") + "}",
      ".tour-btn:hover{background:#1b2747}",
      REDUCED ? "" : ".tour-btn:hover{transform:translateY(-1px)}",
      ".tour-btn.ghost{background:#fff;color:#0B1530}",
      ".tour-btn.ghost:hover{background:#f3f4f8}",
      ".tour-link{background:none;border:none;cursor:pointer;font:700 13px/1 " + FONT + ";color:#6b7390;text-decoration:underline;padding:6px 2px}",
      ".tour-link:hover{color:#8B3A2E}",
      ".tour-hint{display:inline-flex;align-items:center;gap:7px;font:800 13px/1.3 " + FONT + ";color:#8B3A2E}",
      ".tour-hint .pt{font-size:16px}",
      ".tour-btn:focus-visible,.tour-link:focus-visible{outline:3px solid #8B3A2E;outline-offset:2px}",
      ".tour-x{position:absolute;top:10px;right:12px;background:none;border:none;font-size:20px;line-height:1;color:#9aa1b6;cursor:pointer;padding:4px;border-radius:6px}",
      ".tour-x:hover{color:#0B1530}",
      ".tour-x:focus-visible{outline:3px solid #8B3A2E;outline-offset:2px}",
      /* launcher button */
      ".tour-launch{position:fixed;right:18px;bottom:18px;z-index:99980;display:inline-flex;align-items:center;gap:9px;",
      "  background:#0B1530;color:#fff;border:none;border-radius:999px;padding:12px 18px;cursor:pointer;",
      "  font:800 13.5px/1 " + FONT + ";box-shadow:0 8px 22px rgba(11,21,48,.3)}",
      ".tour-launch:hover{background:#1b2747}",
      ".tour-launch:focus-visible{outline:3px solid #C9A14A;outline-offset:3px}",
      ".tour-launch svg{width:18px;height:18px;display:block}",
      /* loader */
      ".tour-loader{position:fixed;inset:0;z-index:99995;background:#0B1530;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:" + FONT + "}",
      ".tour-loader .mascot{display:flex;gap:6px;margin-bottom:26px}",
      ".tour-loader .mascot span{display:block;width:18px;height:46px;border-radius:9px 9px 7px 7px;position:relative}",
      REDUCED ? "" : "@keyframes tourhop{0%,100%{transform:translateY(0)}40%{transform:translateY(-16px)}}",
      ".tour-loader .mascot span::before{content:'';position:absolute;top:-13px;left:50%;transform:translateX(-50%);width:13px;height:13px;border-radius:50%;background:inherit}",
      ".tour-loader .mascot .a{background:#fff;" + (REDUCED ? "" : "animation:tourhop 1s ease-in-out infinite") + "}",
      ".tour-loader .mascot .b{background:#8B3A2E;" + (REDUCED ? "" : "animation:tourhop 1s ease-in-out .15s infinite") + "}",
      ".tour-loader .mascot .c{background:#C9A14A;" + (REDUCED ? "" : "animation:tourhop 1s ease-in-out .3s infinite") + "}",
      ".tour-loader .lhead{font:800 22px/1.3 " + FONT + ";color:#fff;margin:0 0 6px;letter-spacing:-.01em}",
      ".tour-loader .lsub{font:600 13.5px/1.4 " + FONT + ";color:#C9A14A;margin:0 0 22px;min-height:18px}",
      ".tour-loader .bar{width:240px;max-width:70vw;height:6px;border-radius:99px;background:rgba(255,255,255,.16);overflow:hidden}",
      ".tour-loader .bar i{display:block;height:100%;width:0;background:#C9A14A;border-radius:99px;transition:width .25s linear}",
      ".tour-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}"
    ].join("\n");
    document.head.appendChild(s);
  }

  /* ============================================================
     OVERLAY ELEMENTS (built once)
     ============================================================ */
  var maskT, maskR, maskB, maskL, ring, arrow, card, liveRegion, launcher;

  function buildChrome() {
    if (card) return;
    function mk(cls) { var d = document.createElement("div"); d.className = cls; d.style.display = "none"; document.body.appendChild(d); return d; }
    maskT = mk("tour-mask"); maskR = mk("tour-mask"); maskB = mk("tour-mask"); maskL = mk("tour-mask");
    [maskT, maskR, maskB, maskL].forEach(function (m) {
      m.addEventListener("click", function () { nudge(); });
    });
    ring = mk("tour-ring");
    arrow = document.createElement("div"); arrow.className = "tour-arrow bob"; arrow.style.display = "none";
    arrow.setAttribute("aria-hidden", "true"); arrow.innerHTML = "☟"; document.body.appendChild(arrow);

    card = document.createElement("div");
    card.className = "tour-card"; card.style.display = "none";
    card.setAttribute("role", "dialog"); card.setAttribute("aria-modal", "false");
    card.setAttribute("aria-labelledby", "tourTitle"); card.setAttribute("aria-describedby", "tourBody");
    document.body.appendChild(card);

    liveRegion = document.createElement("div");
    liveRegion.className = "tour-sr"; liveRegion.setAttribute("aria-live", "polite");
    document.body.appendChild(liveRegion);
  }

  function buildLauncher() {
    if (launcher) return;
    launcher = document.createElement("button");
    launcher.type = "button"; launcher.className = "tour-launch";
    launcher.setAttribute("aria-label", "Start the course setup walkthrough");
    launcher.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="#C9A14A" stroke-width="2"/><path d="M10 8.5l5 3.5-5 3.5z" fill="#C9A14A"/></svg>' +
      "<span>Course setup</span>";
    launcher.addEventListener("click", function () { restart(); });
    document.body.appendChild(launcher);
  }

  /* ============================================================
     POSITIONING
     ============================================================ */
  var PAD = 8;
  function placeMask(r) {
    [maskT, maskR, maskB, maskL].forEach(function (m) { m.style.display = "block"; });
    var W = window.innerWidth, H = window.innerHeight;
    var top = Math.max(0, r.top - PAD), bottom = Math.min(H, r.bottom + PAD);
    var left = Math.max(0, r.left - PAD), right = Math.min(W, r.right + PAD);
    maskT.style.cssText += ";left:0;top:0;width:" + W + "px;height:" + top + "px";
    maskB.style.cssText += ";left:0;top:" + bottom + "px;width:" + W + "px;height:" + (H - bottom) + "px";
    maskL.style.cssText += ";left:0;top:" + top + "px;width:" + left + "px;height:" + (bottom - top) + "px";
    maskR.style.cssText += ";left:" + right + "px;top:" + top + "px;width:" + (W - right) + "px;height:" + (bottom - top) + "px";
  }
  function fullMask() {
    maskT.style.display = "block"; maskT.style.cssText += ";inset:0;width:100vw;height:100vh;left:0;top:0";
    [maskR, maskB, maskL].forEach(function (m) { m.style.display = "none"; });
  }
  function placeRing(r) {
    ring.style.display = "block";
    ring.style.left = (r.left - PAD) + "px"; ring.style.top = (r.top - PAD) + "px";
    ring.style.width = (r.width + PAD * 2) + "px"; ring.style.height = (r.height + PAD * 2) + "px";
  }
  function placeArrow(r) {
    arrow.style.display = "block";
    var ax = r.left + r.width / 2 - 10;
    var ay = r.top - 44;
    if (ay < 6) { ay = r.bottom + 8; arrow.innerHTML = "☝"; } else { arrow.innerHTML = "☟"; }
    arrow.style.left = ax + "px"; arrow.style.top = ay + "px";
  }
  function placeCard(r) {
    card.style.display = "block";
    var cw = card.offsetWidth, ch = card.offsetHeight, W = window.innerWidth, H = window.innerHeight;
    var left, top;
    if (r.bottom + 14 + ch < H) { top = r.bottom + 14; }       // below
    else if (r.top - 14 - ch > 0) { top = r.top - 14 - ch; }   // above
    else { top = Math.max(12, (H - ch) / 2); }
    left = r.left + r.width / 2 - cw / 2;
    left = Math.max(12, Math.min(left, W - cw - 12));
    top = Math.max(12, Math.min(top, H - ch - 12));
    card.style.left = left + "px"; card.style.top = top + "px";
    card.classList.remove("centered"); card.style.transform = "none";
  }
  function centerCard() {
    card.style.display = "block"; card.classList.add("centered");
    card.style.left = "50%"; card.style.top = "50%"; card.style.transform = "translate(-50%,-50%)";
    fullMask();
    ring.style.display = "none"; arrow.style.display = "none";
  }

  /* ============================================================
     RENDER A STEP
     ============================================================ */
  var currentTarget = null, clickHandler = null, repositionRAF = null;

  function clearTargetHandler() {
    if (currentTarget) {
      if (clickHandler) currentTarget.removeEventListener("click", clickHandler, true);
      currentTarget.removeAttribute("data-tour-target");
    }
    currentTarget = null; clickHandler = null;
  }

  function cardHTML(step, idx) {
    var interactive = STEPS.filter(function (s) { return s.find !== null || s.mode === "done"; });
    var foot;
    if (step.mode === "click" || step.mode === "click-stay") {
      foot =
        '<span class="tour-hint"><span class="pt" aria-hidden="true">☜</span> Click the highlighted button to continue</span>';
    } else if (step.mode === "go") {
      foot = '<button class="tour-btn" data-act="go" type="button">Next →</button>';
    } else if (step.mode === "done") {
      foot = '<button class="tour-btn" data-act="finish" type="button">Finish</button>';
    } else { // next / welcome
      foot = '<button class="tour-btn" data-act="next" type="button">' +
             (idx === 0 ? "Start the walkthrough" : "Next →") + "</button>";
    }
    var back = (idx > 0 && step.mode !== "done")
      ? '<button class="tour-link" data-act="back" type="button">Back</button>' : "";
    var skip = '<button class="tour-link" data-act="skip" type="button">' +
               (step.mode === "done" ? "Close" : "Skip setup") + "</button>";
    return '' +
      '<button class="tour-x" data-act="skip" type="button" aria-label="Close the walkthrough">×</button>' +
      '<p class="tour-eyebrow">' + step.eyebrow + "</p>" +
      '<h2 class="tour-title" id="tourTitle">' + step.title + "</h2>" +
      '<p class="tour-body" id="tourBody">' + step.body + "</p>" +
      '<div class="tour-foot">' + back + skip + '<span style="margin-left:auto"></span>' + foot + "</div>";
  }

  function wireCard(step, idx) {
    card.querySelectorAll("[data-act]").forEach(function (b) {
      b.addEventListener("click", function () {
        var a = b.getAttribute("data-act");
        if (a === "next") go(idx + 1);
        else if (a === "back") go(prevInteractive(idx));
        else if (a === "skip") endTour(true);
        else if (a === "finish") { markDone(); endTour(false); }
        else if (a === "go") { setIdx(idx + 1); setActive(true); location.assign(step.nav); }
      });
    });
  }

  function prevInteractive(idx) {
    for (var i = idx - 1; i >= 0; i--) { if (STEPS[i].page === pageId()) return i; }
    return idx;
  }

  function announce(step, idx) {
    liveRegion.textContent = "Step " + (idx + 1) + " of " + STEPS.length + ". " +
      step.title + ". " + step.body.replace(/<[^>]+>/g, "");
  }

  function showCentered(step, idx) {
    clearTargetHandler();
    card.innerHTML = cardHTML(step, idx);
    centerCard();
    wireCard(step, idx);
    focusCard();
    announce(step, idx);
  }

  function showTargeted(step, idx, el) {
    clearTargetHandler();
    currentTarget = el;
    try { el.scrollIntoView({ block: "center", behavior: REDUCED ? "auto" : "smooth" }); } catch (e) { el.scrollIntoView(); }
    card.innerHTML = cardHTML(step, idx);
    wireCard(step, idx);

    function reposition() {
      var r = el.getBoundingClientRect();
      placeMask(r); placeRing(r); placeArrow(r); placeCard(r);
    }
    reposition();
    // keep aligned briefly while smooth-scroll settles + on scroll/resize
    var t0 = Date.now();
    (function settle() {
      reposition();
      if (Date.now() - t0 < 700) repositionRAF = requestAnimationFrame(settle);
    })();
    window.addEventListener("scroll", reposition, true);
    window.addEventListener("resize", reposition);
    card._reposition = reposition;

    // gating: clicking the real element advances
    if (step.mode === "click" || step.mode === "click-stay") {
      el.setAttribute("data-tour-target", "1");
      clickHandler = function (ev) {
        if (step.mode === "click-stay") { ev.preventDefault(); ev.stopPropagation(); go(idx + 1); }
        else { setIdx(idx + 1); setActive(true); /* allow real navigation */ }
      };
      el.addEventListener("click", clickHandler, true);
      // keyboard: make sure it can be focused and reached
      try { el.focus({ preventScroll: true }); } catch (e) {}
    } else {
      focusCard();
    }
    announce(step, idx);
  }

  function focusCard() {
    var btn = card.querySelector(".tour-btn") || card.querySelector(".tour-x");
    if (btn) { try { btn.focus(); } catch (e) {} }
  }

  function nudge() {
    if (!arrow || arrow.style.display === "none") return;
    if (REDUCED) return;
    arrow.style.transition = "transform .12s ease";
    arrow.style.transform = "scale(1.25)";
    setTimeout(function () { arrow.style.transform = ""; }, 160);
  }

  /* find a target with a short poll (hub pills render async) */
  function resolveTarget(step, cb, tries) {
    tries = tries || 0;
    var el = typeof step.find === "function" ? step.find()
           : (step.find ? document.querySelector(step.find) : null);
    if (el) return cb(el);
    if (tries > 40) return cb(null); // ~6s
    setTimeout(function () { resolveTarget(step, cb, tries + 1); }, 150);
  }

  /* ============================================================
     NAVIGATION BETWEEN STEPS
     ============================================================ */
  function teardownReposition() {
    if (card && card._reposition) {
      window.removeEventListener("scroll", card._reposition, true);
      window.removeEventListener("resize", card._reposition);
      card._reposition = null;
    }
    if (repositionRAF) cancelAnimationFrame(repositionRAF);
  }

  function go(idx) {
    if (idx >= STEPS.length) { markDone(); return endTour(false); }
    teardownReposition();
    setIdx(idx); setActive(true);
    var step = STEPS[idx];
    if (step.page !== pageId()) {
      // step belongs to another page; if it has a nav we shouldn't be here.
      // Find the next step for THIS page, else just wait (will resume on nav).
      return;
    }
    if (step.find === null) { showCentered(step, idx); }
    else {
      // dim immediately while we locate the (possibly async) target
      fullMask(); card.style.display = "none"; ring.style.display = "none"; arrow.style.display = "none";
      resolveTarget(step, function (el) {
        if (!el) { // graceful fallback: show as centered note
          showCentered(step, idx);
        } else { showTargeted(step, idx, el); }
      });
    }
  }

  function endTour(pause) {
    teardownReposition();
    clearTargetHandler();
    [maskT, maskR, maskB, maskL].forEach(function (m) { if (m) m.style.display = "none"; });
    if (ring) ring.style.display = "none";
    if (arrow) arrow.style.display = "none";
    if (card) card.style.display = "none";
    setActive(false);
    if (pause) { /* keep idx so the launcher can resume nothing special; we restart fresh */ }
  }

  function restart() {
    setIdx(0); setActive(true);
    if (pageId() !== "index") { location.assign(BASE + "index.html"); return; }
    startWithLoader(true);
  }

  /* ============================================================
     APPLE-STYLE LOADER
     ============================================================ */
  function startWithLoader(force) {
    if (REDUCED) { go(0); return; }
    var loader = document.createElement("div");
    loader.className = "tour-loader";
    loader.setAttribute("role", "status"); loader.setAttribute("aria-live", "polite");
    loader.innerHTML =
      '<div class="mascot" aria-hidden="true"><span class="a"></span><span class="b"></span><span class="c"></span></div>' +
      '<p class="lhead">Setting up your course</p>' +
      '<p class="lsub" id="tourLsub">Getting things ready…</p>' +
      '<div class="bar"><i id="tourBar"></i></div>';
    document.body.appendChild(loader);
    var bar = loader.querySelector("#tourBar"), sub = loader.querySelector("#tourLsub");
    var msgs = ["Getting things ready…", "Finding your videos…", "Loading your study cards…", "Almost there…"];
    var pct = 0, mi = 0;
    var iv = setInterval(function () {
      pct += 14 + Math.random() * 12; if (pct > 100) pct = 100;
      bar.style.width = pct + "%";
      if (pct > (mi + 1) * 25 && mi < msgs.length - 1) { mi++; sub.textContent = msgs[mi]; }
      if (pct >= 100) {
        clearInterval(iv);
        setTimeout(function () { loader.remove(); go(0); }, 320);
      }
    }, 260);
  }

  /* ============================================================
     KEYBOARD: Esc closes; basic focus trap inside the card
     ============================================================ */
  function onKey(e) {
    if (!isActive()) return;
    if (e.key === "Escape") { e.preventDefault(); endTour(true); return; }
    if (e.key === "Tab" && card && card.style.display !== "none") {
      var focusables = card.querySelectorAll("button");
      if (currentTarget) { /* allow tabbing to the real target too */ }
      if (!focusables.length) return;
      var first = focusables[0], last = focusables[focusables.length - 1];
      var active = document.activeElement;
      // simple trap: if focus would leave the card and there's no live target, wrap
      if (!currentTarget) {
        if (e.shiftKey && active === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
      }
    }
    if ((e.key === "Enter" || e.key === " ") && currentTarget && document.activeElement === currentTarget) {
      var idx = getIdx(), step = STEPS[idx];
      if (step && step.mode === "click-stay") { e.preventDefault(); go(idx + 1); }
    }
  }

  /* ============================================================
     BOOT
     ============================================================ */
  function boot() {
    injectCSS();
    buildChrome();
    buildLauncher();
    document.addEventListener("keydown", onKey, true);

    var pid = pageId();
    if (isActive()) {
      var idx = getIdx();
      if (idx >= 0 && idx < STEPS.length && STEPS[idx].page === pid) {
        // resume on this page (small delay lets async content render)
        setTimeout(function () { go(idx); }, 250);
        return;
      }
    }
    // fresh first visit on the home page -> auto start
    if (pid === "index" && !isDone() && !isActive()) {
      setTimeout(function () { restartFresh(); }, 400);
    }
  }

  function restartFresh() { setIdx(0); setActive(true); startWithLoader(false); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else { boot(); }

  // expose a tiny API for testing / manual launch
  window.CourseTour = { start: restart, reset: function () { localStorage.removeItem(K_DONE); sessionStorage.removeItem(K_IDX); sessionStorage.removeItem(K_ACTIVE); } };
})();
