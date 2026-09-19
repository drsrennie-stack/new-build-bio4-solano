/* ============================================================
   BIO 005 Human Physiology, Fall 2026
   bio005-preview.js

   INSTRUCTOR PREVIEW. Lets Scrubs look at a week that has not opened
   yet without editing any dates and putting them back afterwards.

   HOW TO TURN IT ON
     Add ?preview=medic to the end of any page URL, once. It sticks
     across the whole site from then on, including pages you open
     later, because it is saved in this browser.

   HOW TO TURN IT OFF
     Press the "Leave preview" button in the banner, or add
     ?preview=off to any URL.

   WHY THE BANNER IS SO LOUD
     The risk here is not a student guessing the word. If one did,
     they would find an unfinished week, which is the truth anyway.
     The risk is opening the site on a Tuesday, seeing Week 9 render
     perfectly, and believing it is live when students cannot reach
     it. So the banner is unmissable, it names every week it is
     unlocking, and it does not go away until you dismiss it.

   THIS IS NOT SECURITY
     The passcode is in this file in plain text, deliberately, so it
     is easy to change. Anything running in a browser can be read.
     The enforceable lock on student work is the Canvas module
     availability date, which runs on Canvas's servers. This only
     governs what the course website chooses to draw.

   TO USE IT ON A NEW PAGE
     <script src="bio005-preview.js"></script>
     then guard whatever you gate with BIO005_PREVIEW.on()
   ============================================================ */
(function (global) {
  "use strict";

  var PASSCODE = "medic";          /* change it here, nowhere else */
  var KEY = "bio005-preview";

  function qs(name) {
    var m = new RegExp("[?&]" + name + "=([^&#]*)").exec(global.location.search);
    return m ? decodeURIComponent(m[1]) : null;
  }

  var asked = qs("preview");
  if (asked !== null) {
    try {
      if (asked.toLowerCase() === "off") {
        global.localStorage.removeItem(KEY);
      } else if (asked.toLowerCase() === PASSCODE.toLowerCase()) {
        global.localStorage.setItem(KEY, PASSCODE);
      }
    } catch (e) { /* private browsing, fall through to off */ }
  }

  var active = false;
  try { active = global.localStorage.getItem(KEY) === PASSCODE; } catch (e) { active = false; }

  function leave() {
    try { global.localStorage.removeItem(KEY); } catch (e) {}
    var url = global.location.href.split("?")[0].split("#")[0];
    global.location.replace(url);
  }

  function banner(weeksText) {
    if (!active || document.getElementById("bio005-preview-bar")) return;
    var bar = document.createElement("div");
    bar.id = "bio005-preview-bar";
    bar.setAttribute("role", "status");
    bar.style.cssText = [
      "position:sticky", "top:0", "z-index:99999",
      "background:#8B3A2E", "color:#FFFFFF",
      "font:700 15px/1.45 system-ui,-apple-system,'Segoe UI',Arial,sans-serif",
      "padding:.7rem .9rem", "display:flex", "flex-wrap:wrap",
      "gap:.6rem", "align-items:center", "justify-content:space-between",
      "box-shadow:0 2px 6px rgba(0,0,0,.25)"
    ].join(";");

    var msg = document.createElement("span");
    msg.textContent = "INSTRUCTOR PREVIEW. You are seeing weeks students cannot reach yet."
      + (weeksText ? " Unlocked here: " + weeksText + "." : "");
    msg.style.cssText = "font-weight:700";

    var btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "Leave preview";
    btn.style.cssText = [
      "font:600 14px system-ui,-apple-system,'Segoe UI',Arial,sans-serif",
      "border:0", "border-radius:8px", "padding:.45rem .8rem",
      "background:#0B1530", "color:#FFFFFF", "cursor:pointer",
      "box-shadow:0 1px 3px rgba(0,0,0,.3)"
    ].join(";");
    btn.addEventListener("click", leave);
    btn.addEventListener("focus", function () {
      btn.style.outline = "3px solid #C9A14A"; btn.style.outlineOffset = "2px";
    });
    btn.addEventListener("blur", function () { btn.style.outline = "none"; });

    bar.appendChild(msg);
    bar.appendChild(btn);
    if (document.body.firstChild) document.body.insertBefore(bar, document.body.firstChild);
    else document.body.appendChild(bar);
  }

  global.BIO005_PREVIEW = {
    on: function () { return active; },
    passcode: PASSCODE,
    leave: leave,
    /* Call with a short list of what is being unlocked, e.g. "Weeks 4 to 15" */
    banner: banner
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { banner(""); });
  } else {
    banner("");
  }
})(window);
