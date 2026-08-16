/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   bio004-start-here.js

   THE START-OF-TERM WALKTHROUGH, AS A DIALOG ON THE CALENDAR.

   WHY IT EXISTS
   -------------
   The six things a student has to do before week one (syllabus,
   device policy, books, Canvas notifications, accommodations)
   only lived on today.html, and today.html is a page a student
   has to already know about. The calendar is where they land.
   So the walkthrough comes to them, once, on the page they were
   going to open anyway.

   IT IS NOT A SECOND COPY OF THE WORK. Every step here opens the
   same page today.html opens, so there is one syllabus, one device
   policy and one materials list, not two. The ticks are this
   dialog's own, under their own key, because today.html ticks are
   keyed by date and these six things are not tied to a day.

   WHEN IT OPENS
   -------------
     - automatically, on load, while any step is unfinished and
       the student has not said "later" in this browser session
     - never again once every step is done
     - any time, from the "Start here" button it puts in the cover

   SECTION AWARENESS
   -----------------
   The Canvas device-policy assignment is a different course per
   section, so the submit link is picked off 'bio004-section', the
   same key section-pick.js, week-schedule.js and Mastery OS use.
   Step one is the section itself, because everything under it is
   wrong if that is wrong.

   STORAGE
   -------
     bio004-start-steps   {"0":1,"2":1}   which steps are ticked
     bio004-start-later   "1"             sessionStorage, this tab only
   No names, no IDs, no anything about a person. Just ticks.
   ============================================================ */

(function () {
  'use strict';

  var KEY_STEPS   = 'bio004-start-steps';
  var KEY_SECTION = 'bio004-section';
  var KEY_LATER   = 'bio004-start-later';

  var SEC_LABEL = {
    'mw':     'Mon / Wed, CRN 80650',
    'tr-am':  'Tue / Thu morning, CRN 80654',
    'tr-eve': 'Tue / Thu evening, CRN 80655'
  };
  var SEC_ORDER = ['mw', 'tr-am', 'tr-eve'];

  var SYLLABUS = {
    'mw':     'syllabus-class1.html',
    'tr-am':  'syllabus-class2.html',
    'tr-eve': 'syllabus-class3.html'
  };

  /* Three Canvas courses, not three assignments in one course.
     Kept identical to device-policy-submit.js on purpose. */
  var CANVAS_DDP = {
    'mw':     'https://solano.instructure.com/courses/1395730/assignments/6736069?module_item_id=16645147',
    'tr-am':  'https://solano.instructure.com/courses/1395734/assignments/6734628?module_item_id=16643335',
    'tr-eve': 'https://solano.instructure.com/courses/1395735/assignments/6736101'
  };
  var CANVAS_COURSE = {
    'mw':     'https://solano.instructure.com/courses/1395730',
    'tr-am':  'https://solano.instructure.com/courses/1395734',
    'tr-eve': 'https://solano.instructure.com/courses/1395735'
  };

  /* ---------- small helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function ssGet(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
  function ssSet(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }

  /* ---------- section ---------- */
  function paramSec() {
    try {
      var m = (location.search + location.hash).match(/[?&#]sec=([a-z\-]+)/i);
      var v = m ? m[1].toLowerCase() : null;
      return SEC_LABEL[v] ? v : null;
    } catch (e) { return null; }
  }
  /* A section on the address means the student arrived from their own
     Canvas course, which is the authority on which section they are in.
     BIO 004 runs as three separate Canvas courses, so there is nothing
     for them to choose and asking looks like the site does not know. */
  var SEC_FROM_LINK = paramSec();
  var section = SEC_FROM_LINK || (SEC_LABEL[lsGet(KEY_SECTION)] ? lsGet(KEY_SECTION) : null) || 'mw';
  function setSection(sec) {
    if (!SEC_LABEL[sec]) return;
    section = sec;
    lsSet(KEY_SECTION, sec);
    try { if (window.BIO004_SECTION && window.BIO004_SECTION.set) window.BIO004_SECTION.set(sec); } catch (e) {}
  }

  /* ---------- ticks ---------- */
  function readTicks() {
    var raw = lsGet(KEY_STEPS);
    if (!raw) return {};
    try { var o = JSON.parse(raw); return (o && typeof o === 'object') ? o : {}; }
    catch (e) { return {}; }
  }
  function writeTicks(o) { lsSet(KEY_STEPS, JSON.stringify(o)); }
  var ticks = readTicks();

  /* ---------- the steps ----------
     Every link here is the page that already owns the thing. None
     of this text is a second copy of a policy, it is the sentence
     that gets a student to the policy. */
  function steps() {
    return [
      {
        id: 'section',
        title: SEC_FROM_LINK ? 'Your section' : 'Check you are in the right section',
        hint: SEC_FROM_LINK
          ? 'Set by the Canvas course you came from, so there is nothing to pick.'
          : 'Everything under this depends on it, including which Canvas course you submit to.',
        body: SEC_FROM_LINK
          ? '<p>You are in <b>' + esc(SEC_LABEL[SEC_FROM_LINK]) + '</b>. BIO 004 runs as three separate sections with three separate Canvas courses, and this link came from yours, so the whole site is already following it.</p>'
          : '<p>BIO 004 runs as three separate sections with three separate Canvas courses. Pick yours once and the whole site follows it.</p>',
        picker: !SEC_FROM_LINK,
        links: []
      },
      {
        id: 'syllabus',
        title: 'Read your syllabus once, all the way through',
        hint: 'Ten minutes. It answers most of what you will want to ask in week one.',
        body: '<p>Read it end to end now rather than looking things up in it later. Grading, attendance, late work and what happens if you miss an exam are all in there.</p>',
        links: [{ url: function () { return SYLLABUS[section]; }, cta: 'Open your syllabus' }]
      },
      {
        id: 'device',
        title: 'Read and sign the digital device policy',
        hint: 'Due by noon on Friday of the first week. You cannot enter lab without it.',
        body: '<p>Read the policy, complete the agreement, save it, then submit it to the Canvas assignment for your section. Both links are below.</p>',
        links: [
          { url: function () { return 'digital-device-policy.html'; }, cta: 'Read the device policy' },
          { url: function () { return 'digital-device-policy-agreement.html'; }, cta: 'Open the agreement' },
          { url: function () { return CANVAS_DDP[section]; }, cta: 'Submit it in Canvas', ext: true }
        ]
      },
      {
        id: 'materials',
        title: 'Get your books and your lab kit',
        hint: 'You need them in week one, not week three.',
        body: '<p>The list is short and it is specific. Order early enough that it arrives before the first lab.</p>',
        links: [{ url: function () { return 'required-materials.html'; }, cta: 'See what to buy' }]
      },
      {
        id: 'canvas',
        title: 'Turn on your Canvas notifications',
        hint: 'Announcements and assignments arrive there, not here.',
        body: '<p>Log in with your Solano account and switch announcement notifications on, then check Canvas at least three times a week. Anything that changes mid-term changes there first.</p>',
        links: [{ url: function () { return CANVAS_COURSE[section]; }, cta: 'Open your Canvas course', ext: true }]
      },
      {
        id: 'access',
        title: 'If you need accommodations, start now',
        hint: 'Week one, not the week of the first exam.',
        body: '<p>Get your paperwork in with Disability Services during week one. Accommodations cannot be applied backwards to an exam you have already sat, so the earlier it is set up, the more of the term it covers.</p>',
        links: []
      },
      {
        id: 'howto',
        title: 'How to use this calendar',
        hint: 'Two things, then you are done here.',
        body: '<p>Click any day to open what that day needs, in one place. Use the five exam buttons at the top to see everything an exam covers, grouped into pre-work, videos, labs and sprints.</p>'
            + '<p>The night before each class there is pre-work. Print the sheet and print the notes and work on paper. Class opens with a brain dump on it.</p>',
        links: [{ url: function () { return 'today.html'; }, cta: 'Open today' }]
      }
    ];
  }

  /* The course already answered step one, so tick it and remember the
     section. Without this the checklist stayed incomplete and the panel
     opened on every page asking a question with one possible answer. */
  if (SEC_FROM_LINK) {
    setSection(SEC_FROM_LINK);
    if (!ticks.section) { ticks.section = true; writeTicks(ticks); }
  }

  var STEPS = steps();

  function doneCount() {
    var n = 0;
    STEPS.forEach(function (s) { if (ticks[s.id]) n++; });
    return n;
  }
  function allDone() { return doneCount() >= STEPS.length; }

  /* ---------- styles ---------- */
  var CSS = ''
    + '.shx-backdrop{position:fixed;inset:0;background:rgba(8,16,31,.62);z-index:9000;'
    +   'display:flex;align-items:flex-start;justify-content:center;padding:24px 16px;overflow:auto;}'
    + '.shx-panel{background:#fff;border-radius:16px;max-width:660px;width:100%;margin:auto;'
    +   'box-shadow:0 34px 70px -18px rgba(8,16,31,.55);overflow:hidden;'
    +   'font-family:"Plus Jakarta Sans",-apple-system,BlinkMacSystemFont,sans-serif;color:#08101F;line-height:1.55;}'
    + '.shx-head{padding:26px 26px 18px;}'
    + '.shx-eyebrow{font-size:12px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:#6B1616;margin:0 0 8px;}'
    + '.shx-h{font-size:clamp(21px,3.4vw,27px);font-weight:800;letter-spacing:-.02em;margin:0 0 8px;line-height:1.15;}'
    + '.shx-lede{margin:0;color:#3D4757;font-size:15px;}'
    + '.shx-prog{margin:16px 0 0;font-size:13.5px;font-weight:700;color:#4A5763;}'
    + '.shx-bar{height:8px;border-radius:99px;background:#ECEFF4;margin-top:8px;overflow:hidden;}'
    + '.shx-bar i{display:block;height:100%;background:#DCB45C;border-radius:99px;'
    +   'transition:width 240ms ease;}'
    + '.shx-body{padding:0 26px 8px;max-height:min(58vh,560px);overflow:auto;}'
    + '.shx-step{background:#FAFAF9;border-radius:12px;padding:16px 16px 14px;margin:0 0 12px;'
    +   'display:grid;grid-template-columns:36px 1fr;gap:14px;align-items:start;'
    +   'box-shadow:0 1px 3px rgba(8,16,31,.07);transition:box-shadow 200ms ease;}'
    + '.shx-step.is-done{background:#fff;box-shadow:0 1px 2px rgba(8,16,31,.05);}'
    + '.shx-num{width:36px;height:36px;border-radius:50%;background:#08101F;color:#fff;'
    +   'display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;}'
    + '.shx-step.is-done .shx-num{background:#DCB45C;color:#08101F;font-size:18px;}'
    + '.shx-t{font-weight:800;font-size:16.5px;margin:6px 0 4px;letter-spacing:-.01em;}'
    + '.shx-step.is-done .shx-t{color:#3D4757;}'
    + '.shx-hint{font-size:13.5px;color:#6B1616;font-weight:600;margin:0 0 8px;}'
    + '.shx-text{font-size:14.5px;color:#3D4757;}'
    + '.shx-text p{margin:0 0 8px;}'
    + '.shx-acts{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;align-items:center;}'
    + '.shx-link{display:inline-flex;align-items:center;gap:7px;background:#fff;color:#08101F;'
    +   'text-decoration:none;font-weight:700;font-size:13.5px;padding:9px 14px;border-radius:8px;'
    +   'box-shadow:0 1px 3px rgba(8,16,31,.12);transition:transform 180ms ease,box-shadow 180ms ease;}'
    + '.shx-link:hover{transform:translateY(-2px);box-shadow:0 8px 16px rgba(8,16,31,.14);}'
    + '.shx-link .shx-ext{font-size:11px;color:#6F5316;font-weight:800;letter-spacing:.06em;}'
    + '.shx-done{background:#08101F;color:#fff;font-weight:700;font-size:13.5px;padding:9px 16px;'
    +   'border:0;border-radius:8px;cursor:pointer;transition:transform 180ms ease,box-shadow 180ms ease;}'
    + '.shx-done:hover{transform:translateY(-2px);box-shadow:0 8px 16px rgba(8,16,31,.2);}'
    + '.shx-undo{background:none;border:0;color:#4A5763;font-weight:700;font-size:13px;'
    +   'cursor:pointer;padding:9px 4px;text-decoration:underline;}'
    + '.shx-secs{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;}'
    + '.shx-sec{background:#fff;color:#08101F;font-weight:700;font-size:13px;padding:9px 13px;'
    +   'border:0;border-radius:8px;cursor:pointer;box-shadow:0 1px 3px rgba(8,16,31,.12);'
    +   'transition:transform 180ms ease,box-shadow 180ms ease;}'
    + '.shx-sec:hover{transform:translateY(-2px);box-shadow:0 8px 16px rgba(8,16,31,.14);}'
    + '.shx-sec[aria-pressed="true"]{background:#08101F;color:#fff;box-shadow:0 8px 16px rgba(8,16,31,.22);}'
    + '.shx-foot{padding:16px 26px 22px;background:#FAFAF9;display:flex;flex-wrap:wrap;gap:10px;'
    +   'align-items:center;justify-content:space-between;}'
    + '.shx-close{background:#08101F;color:#fff;font-weight:700;font-size:14px;padding:11px 20px;'
    +   'border:0;border-radius:8px;cursor:pointer;transition:transform 180ms ease,box-shadow 180ms ease;}'
    + '.shx-close:hover{transform:translateY(-2px);box-shadow:0 8px 16px rgba(8,16,31,.22);}'
    + '.shx-later{background:none;border:0;color:#4A5763;font-weight:700;font-size:13.5px;'
    +   'cursor:pointer;text-decoration:underline;padding:11px 2px;}'
    + '.shx-x{position:absolute;top:14px;right:14px;background:#fff;color:#08101F;border:0;'
    +   'width:36px;height:36px;border-radius:50%;font-size:18px;cursor:pointer;'
    +   'box-shadow:0 1px 3px rgba(8,16,31,.16);}'
    + '.shx-x:hover{transform:translateY(-2px);box-shadow:0 8px 16px rgba(8,16,31,.2);}'
    + '.shx-wrap{position:relative;width:100%;max-width:660px;margin:auto;}'
    + '.shx-open{display:inline-flex;align-items:center;gap:9px;background:#fff;color:#08101F;'
    +   'font-weight:800;font-size:14px;padding:11px 18px;border:0;border-radius:9px;cursor:pointer;'
    +   'box-shadow:0 1px 3px rgba(8,16,31,.12);transition:transform 180ms ease,box-shadow 180ms ease;'
    +   'margin-top:16px;}'
    + '.shx-open:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgba(8,16,31,.16);}'
    + '.shx-open b{color:#6B1616;}'
    + '.shx-sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;'
    +   'clip:rect(0 0 0 0);white-space:nowrap;border:0;}'
    + '.shx-lock{overflow:hidden;}'
    + '.shx-backdrop :focus-visible{outline:3px solid #6B1616;outline-offset:2px;border-radius:6px;}'
    + '.shx-step.is-done .shx-hint{color:#4A5763;font-weight:500;}'
    + '@media (prefers-reduced-motion:reduce){'
    +   '.shx-link,.shx-done,.shx-sec,.shx-close,.shx-x,.shx-open,.shx-bar i{transition:none;}'
    +   '.shx-link:hover,.shx-done:hover,.shx-sec:hover,.shx-close:hover,.shx-x:hover,.shx-open:hover{transform:none;}}'
    + '@media (max-width:520px){.shx-head,.shx-body,.shx-foot{padding-left:18px;padding-right:18px;}'
    +   '.shx-step{grid-template-columns:30px 1fr;gap:11px;padding:14px;}'
    +   '.shx-num{width:30px;height:30px;font-size:14px;}}'
    + '@media print{.shx-backdrop,.shx-open{display:none !important;}}';

  function injectCss() {
    if (document.getElementById('shx-css')) return;
    var st = document.createElement('style');
    st.id = 'shx-css';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  /* ---------- markup ---------- */
  function stepHtml(s, i) {
    var done = !!ticks[s.id];
    var h = '<div class="shx-step' + (done ? ' is-done' : '') + '" data-step="' + esc(s.id) + '">';

    h += '<span class="shx-num">';
    h += done
      ? '<span aria-hidden="true">&#10003;</span><span class="shx-sr">Step ' + (i + 1) + ' is done</span>'
      : '<span aria-hidden="true">' + (i + 1) + '</span><span class="shx-sr">Step ' + (i + 1) + '</span>';
    h += '</span>';

    h += '<div>';
    h += '<h3 class="shx-t">' + esc(s.title) + '</h3>';
    if (s.hint) h += '<p class="shx-hint">' + esc(s.hint) + '</p>';
    if (s.body) h += '<div class="shx-text">' + s.body + '</div>';

    if (s.picker) {
      h += '<div class="shx-secs" role="group" aria-label="Choose your section">';
      SEC_ORDER.forEach(function (k) {
        h += '<button type="button" class="shx-sec" data-sec="' + k + '" '
           + 'aria-pressed="' + (section === k ? 'true' : 'false') + '">'
           + esc(SEC_LABEL[k]) + '</button>';
      });
      h += '</div>';
    }

    h += '<div class="shx-acts">';
    (s.links || []).forEach(function (l) {
      var url = typeof l.url === 'function' ? l.url() : l.url;
      var ext = !!l.ext;
      h += '<a class="shx-link" href="' + esc(url) + '"'
         + (ext ? ' target="_blank" rel="noopener"' : ' target="bio004-ref"')
         + '>' + esc(l.cta)
         + (ext ? '<span class="shx-ext" aria-hidden="true">NEW TAB</span><span class="shx-sr"> (opens in a new tab)</span>'
                : '<span class="shx-sr"> (opens beside this page)</span>')
         + '</a>';
    });
    h += done
      ? '<button type="button" class="shx-undo" data-undo="' + esc(s.id) + '">Not done after all'
        + '<span class="shx-sr">, step ' + (i + 1) + ', ' + esc(s.title) + '</span></button>'
      : '<button type="button" class="shx-done" data-tick="' + esc(s.id) + '">Done'
        + '<span class="shx-sr"> with step ' + (i + 1) + ', ' + esc(s.title) + '</span></button>';
    h += '</div>';

    h += '</div></div>';
    return h;
  }

  function panelHtml() {
    var n = doneCount(), total = STEPS.length;
    var h = '<div class="shx-wrap">';
    h += '<div class="shx-panel" role="dialog" aria-modal="true" aria-labelledby="shx-h" id="shx-panel">';
    h += '<button type="button" class="shx-x" id="shx-x" aria-label="Close the start here checklist">'
       + '<span aria-hidden="true">&times;</span></button>';

    h += '<div class="shx-head">';
    h += '<p class="shx-eyebrow">BIO 004 &middot; Before week one</p>';
    h += '<h2 class="shx-h" id="shx-h">Start here</h2>';
    h += '<p class="shx-lede">Seven things to get out of the way before the first class. '
       + 'Work down the list, tick each one off, and the calendar behind this is yours.</p>';
    h += '<p class="shx-prog" id="shx-prog" role="status">' + n + ' of ' + total + ' done</p>';
    h += '<div class="shx-bar" aria-hidden="true"><i style="width:' + Math.round(n / total * 100) + '%"></i></div>';
    h += '</div>';

    h += '<div class="shx-body" id="shx-list">';
    STEPS.forEach(function (s, i) { h += stepHtml(s, i); });
    h += '</div>';

    h += '<div class="shx-foot">';
    h += '<button type="button" class="shx-close" id="shx-close">Go to the calendar</button>';
    h += '<button type="button" class="shx-later" id="shx-later">Remind me next time I open this page</button>';
    h += '</div>';

    h += '</div></div>';
    return h;
  }

  /* ---------- open / close ---------- */
  var backdrop = null, lastFocus = null;

  function focusables() {
    if (!backdrop) return [];
    return Array.prototype.filter.call(
      backdrop.querySelectorAll('a[href],button:not([disabled]),select,input,[tabindex]:not([tabindex="-1"])'),
      function (el) { return el.offsetParent !== null || el === document.activeElement; }
    );
  }

  function onKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab') return;
    var f = focusables();
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function refresh() {
    var list = document.getElementById('shx-list');
    if (!list) return;
    var active = document.activeElement;
    var keepId = (active && active.closest && active.closest('.shx-step'))
      ? active.closest('.shx-step').getAttribute('data-step') : null;

    var html = '';
    STEPS.forEach(function (s, i) { html += stepHtml(s, i); });
    list.innerHTML = html;

    var n = doneCount(), total = STEPS.length;
    var prog = document.getElementById('shx-prog');
    if (prog) prog.textContent = allDone()
      ? 'All ' + total + ' done. You are set for week one.'
      : n + ' of ' + total + ' done';
    var bar = backdrop.querySelector('.shx-bar i');
    if (bar) bar.style.width = Math.round(n / total * 100) + '%';

    /* Focus does not get dropped on the floor when a row redraws:
       it goes back to the row that was just ticked. */
    if (keepId) {
      var row = list.querySelector('.shx-step[data-step="' + keepId + '"]');
      if (row) {
        var btn = row.querySelector('.shx-done,.shx-undo');
        if (btn) btn.focus();
      }
    }
    syncLauncher();
  }

  function onClick(e) {
    var t = e.target.closest ? e.target.closest('button') : null;
    if (!t) return;

    if (t.hasAttribute('data-tick')) { ticks[t.getAttribute('data-tick')] = 1; writeTicks(ticks); refresh(); return; }
    if (t.hasAttribute('data-undo')) { delete ticks[t.getAttribute('data-undo')]; writeTicks(ticks); refresh(); return; }
    if (t.hasAttribute('data-sec'))  { setSection(t.getAttribute('data-sec')); refresh(); reflectSection(); return; }
    if (t.id === 'shx-close' || t.id === 'shx-x') { close(); return; }
    if (t.id === 'shx-later') { ssSet(KEY_LATER, '1'); close(); return; }
  }

  /* The calendar prints the section in its cover. If a student changes
     it in here, that line has to change with it or the page contradicts
     itself. */
  function reflectSection() {
    var el = document.getElementById('secName');
    if (el) el.textContent = SEC_LABEL[section];
    try {
      if (window.BIO004_CAL_RELOAD) window.BIO004_CAL_RELOAD(section);
    } catch (e) {}
  }

  function open() {
    if (backdrop) return;
    injectCss();
    lastFocus = document.activeElement;
    backdrop = document.createElement('div');
    backdrop.className = 'shx-backdrop';
    backdrop.innerHTML = panelHtml();
    document.body.appendChild(backdrop);
    document.documentElement.classList.add('shx-lock');
    document.body.classList.add('shx-lock');
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) close();
    });
    backdrop.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey, true);
    var h = document.getElementById('shx-h');
    if (h) { h.setAttribute('tabindex', '-1'); h.focus(); }
  }

  function close() {
    if (!backdrop) return;
    document.removeEventListener('keydown', onKey, true);
    backdrop.parentNode.removeChild(backdrop);
    backdrop = null;
    document.documentElement.classList.remove('shx-lock');
    document.body.classList.remove('shx-lock');
    syncLauncher();
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) {} }
  }

  /* ---------- the launcher in the cover ---------- */
  function syncLauncher() {
    var b = document.getElementById('shx-open');
    if (!b) return;
    var n = doneCount(), total = STEPS.length;
    b.innerHTML = allDone()
      ? 'Start here <b>all ' + total + ' done</b>'
      : 'Start here <b>' + (total - n) + ' left</b>';
  }

  function mountLauncher() {
    if (document.getElementById('shx-open')) return;
    var host = document.querySelector('[data-start-here]')
            || document.querySelector('.cover')
            || document.getElementById('main');
    if (!host) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.id = 'shx-open';
    b.className = 'shx-open';
    b.addEventListener('click', open);
    host.appendChild(b);
    syncLauncher();
  }

  function boot() {
    injectCss();
    mountLauncher();
    /* Auto-open only while there is something left to do, and only if
       they have not already said "later" in this tab. Once the list is
       finished it never opens itself again. */
    if (!allDone() && ssGet(KEY_LATER) !== '1') open();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.BIO004_START_HERE = { open: open, close: close, done: doneCount, total: STEPS.length };
})();
