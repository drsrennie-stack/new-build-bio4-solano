/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   dock-coachmark.js

   One entry point, and it is the Course tools button in the bottom
   left corner. This points at it.

   Why a pointer and not another button: a button on the welcome page
   is a second door. A student who learns to press it has learned a
   habit that only works on that one page. The corner button is on all
   411 pages, so the corner button is the thing worth teaching, and the
   way to teach a location is to point at it, not to duplicate it.

   Behaviour
     - Shows on the first few page loads, then stops on its own.
     - Stops immediately and permanently once the student opens the
       dock, because at that point they have learned it.
     - Dismissable by hand, and dismissing counts as learned.
     - Never appears while the dock is open.

   Accessibility
     - The pointer is decorative and aria-hidden. The message is a
       real region with a real dismiss button, reachable by keyboard.
     - role="status" and aria-live="polite", so it is announced without
       interrupting whatever a screen reader is already saying.
     - Honours prefers-reduced-motion: the bounce stops, the pointer
       stays. The animation is emphasis, never the message itself.
     - Escape dismisses it.

   Wire it on any page that carries the dock, after bio004-dock.js:
     <script src="dock-coachmark.js"></script>
   ============================================================ */

(function () {
  'use strict';

  var KEY   = 'bio004-dock-taught';   // {seen: n, learned: bool}
  var TIMES = 3;                      // how many visits show the pointer
  var DELAY = 900;                    // let the page settle first

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function write(v) {
    try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {}
  }

  var CSS = ''
  + '.dcm{position:fixed;left:14px;bottom:74px;z-index:2147482000;max-width:min(330px,calc(100vw - 28px));'
  +   'display:flex;flex-direction:column;align-items:flex-start;gap:6px;}'
  + '.dcm-bubble{background:#08101F;color:#F4EFE8;border:1px solid #C9A14A;border-radius:12px;'
  +   'padding:13px 15px;box-shadow:0 18px 40px -16px rgba(0,0,0,.6);line-height:1.5;font-size:14.5px;}'
  + '.dcm-bubble b{color:#DCB45C;}'
  + '.dcm-actions{margin-top:10px;display:flex;gap:10px;align-items:center;flex-wrap:wrap;}'
  + '.dcm-got{font:inherit;font-size:13.5px;font-weight:700;color:#08101F;background:#DCB45C;'
  +   'border:1px solid #DCB45C;border-radius:999px;padding:8px 15px;min-height:36px;cursor:pointer;}'
  + '.dcm-got:hover{background:#C9A14A;border-color:#C9A14A;}'
  + '.dcm-got:focus-visible{outline:3px solid #F4EFE8;outline-offset:2px;}'
  + '.dcm-never{font:inherit;font-size:13px;color:#F4EFE8;opacity:.8;background:none;border:0;'
  +   'padding:8px 2px;min-height:36px;cursor:pointer;text-decoration:underline;}'
  + '.dcm-never:hover{opacity:1;}'
  + '.dcm-never:focus-visible{outline:3px solid #DCB45C;outline-offset:2px;border-radius:4px;}'
  + '.dcm-point{margin-left:18px;color:#DCB45C;line-height:0;animation:dcmBob 1.5s ease-in-out infinite;}'
  + '@keyframes dcmBob{0%,100%{transform:translateY(0)}50%{transform:translateY(7px)}}'
  + '@media (prefers-reduced-motion: reduce){.dcm-point{animation:none;}}'
  + '@media (max-width:520px){.dcm{bottom:70px;}.dcm-bubble{font-size:14px;}}';

  function styles() {
    if (document.getElementById('dcm-styles')) return;
    var s = document.createElement('style');
    s.id = 'dcm-styles';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  var node = null;

  function learned() {
    var v = read(); v.learned = true; write(v);
    remove();
  }
  function remove() {
    if (node && node.parentNode) node.parentNode.removeChild(node);
    node = null;
    document.removeEventListener('keydown', onKey);
  }
  function onKey(e) {
    if (e.key === 'Escape' && node) { remove(); }
  }

  function show() {
    if (node) return;
    var launcher = document.querySelector('.bd-launch');
    if (!launcher) return;               // no dock on this page, nothing to point at

    styles();
    node = document.createElement('div');
    node.className = 'dcm';
    node.innerHTML =
      '<div class="dcm-bubble" role="status" aria-live="polite">' +
        'Everything in this course is in <b>Course tools</b>, down in the corner. ' +
        'It is on every page, so it is the only place you need to remember.' +
        '<div class="dcm-actions">' +
          '<button type="button" class="dcm-got">Show me</button>' +
          '<button type="button" class="dcm-never">I know where it is</button>' +
        '</div>' +
      '</div>' +
      '<div class="dcm-point" aria-hidden="true">' +
        '<svg width="30" height="40" viewBox="0 0 30 40" fill="none" stroke="currentColor" ' +
        'stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M15 3v30"/><path d="M6 25l9 10 9-10"/></svg>' +
      '</div>';
    document.body.appendChild(node);

    node.querySelector('.dcm-got').addEventListener('click', function () {
      learned();
      launcher.click();
      launcher.focus();
    });
    node.querySelector('.dcm-never').addEventListener('click', learned);
    document.addEventListener('keydown', onKey);

    /* Opening the dock any other way also counts as learned. */
    launcher.addEventListener('click', learned, { once: true });
  }

  /* The dock builds itself, and on a heavy page it can appear a second or
     more after DOMContentLoaded. Firing once on a timer meant that on those
     pages the launcher did not exist yet, show() returned early, and the
     pointer silently never appeared. Wait for it, and give up rather than
     poll forever if the page has no dock. */
  function whenLauncherReady(cb) {
    var waited = 0, STEP = 150, LIMIT = 8000;
    (function tick() {
      if (document.querySelector('.bd-launch')) return cb();
      waited += STEP;
      if (waited >= LIMIT) return;
      window.setTimeout(tick, STEP);
    })();
  }

  function run() {
    var v = read();
    if (v.learned) return;
    var seen = (v.seen || 0) + 1;
    v.seen = seen;
    write(v);
    if (seen > TIMES) return;
    window.setTimeout(function () { whenLauncherReady(show); }, DELAY);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
