/* ============================================================
   THE LAUNCHPAD OVERLAY.
   The four doors (Lecture, Lab, Study, Calendar) as a dark
   full-screen popup that appears EVERY time the page loads.
   Nothing is remembered on purpose: Scrubs' call, so a student
   who picked Lab once is not funneled to Lab forever. Choosing
   Calendar just closes the curtain, because the page behind it
   IS the calendar. Escape also closes it.

   To put it on a page: <script src="bio004-launchpad-overlay.js">
   after the page's content. Built for bio004-course-calendar.html.
   The standalone version lives at bio004-launchpad.html for
   Canvas embeds.
   ============================================================ */
(function () {
  'use strict';
  if (window.__BIO004_LAUNCHPAD__) return;
  window.__BIO004_LAUNCHPAD__ = true;
  /* Canvas shows the calendar inside an iframe, and the doors are
     MEANT to appear there first: that is the whole point. The only
     opt-out is explicit: add ?nolaunch=1 to the address for an embed
     that should skip straight to the calendar. */
  if (/[?&]nolaunch=1/.test(window.location.search)) return;

  var css = ''
  + '.lpov{position:fixed;inset:0;z-index:2147482998;background:#08101F;overflow:auto;'
  + 'font-family:"Plus Jakarta Sans",system-ui,sans-serif;color:#F4EFE8}'
  + '.lpov .lp-wrap{max-width:900px;margin:0 auto;padding:44px 20px 60px;text-align:center}'
  + '.lpov h2{font-size:clamp(24px,5vw,34px);font-weight:800;letter-spacing:-.02em;margin:10px 0 4px;color:#fff}'
  + '.lpov .lp-sub{font-size:15px;color:#C8D2DA;margin:0 0 30px}'
  + '.lpov .lp-eyebrow{font-family:"DM Sans",system-ui,sans-serif;font-size:11px;font-weight:700;'
  + 'letter-spacing:.18em;text-transform:uppercase;color:#CFA95F;margin:0}'
  + '.lpov .lp-deck{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;max-width:640px;margin:0 auto}'
  + '@media (max-width:430px){.lpov .lp-deck{grid-template-columns:1fr}}'
  + '.lpov .lp-door{background:#fff;color:#08101F;border:0;border-radius:18px;padding:20px 16px 18px;'
  + 'text-align:center;text-decoration:none;display:block;cursor:pointer;font-family:inherit;'
  + 'box-shadow:0 14px 34px -12px rgba(0,0,0,.6);transition:transform .18s ease,box-shadow .18s ease}'
  + '.lpov .lp-door:hover{transform:translateY(-4px);box-shadow:0 22px 44px -14px rgba(0,0,0,.7)}'
  + '@media (prefers-reduced-motion:reduce){.lpov .lp-door{transition:none}.lpov .lp-door:hover{transform:none}}'
  + '.lpov .lp-ic{width:52px;height:52px;border-radius:15px;margin:0 auto 11px;display:flex;align-items:center;justify-content:center}'
  + '.lpov .lp-ic svg{width:26px;height:26px;color:#fff}'
  + '.lpov .ic-gold{background:linear-gradient(135deg,#B8924A,#8a6a2e)}'
  + '.lpov .ic-terra{background:linear-gradient(135deg,#C2734D,#8a4526)}'
  + '.lpov .ic-navy{background:linear-gradient(135deg,#1E2A47,#08101F)}'
  + '.lpov .ic-blue{background:linear-gradient(135deg,#33507e,#1E2A47)}'
  + '.lpov .lp-door b{display:block;font-size:17px;font-weight:800;color:#08101F}'
  + '.lpov .lp-door span{display:block;font-size:12.5px;color:#2A3949;margin-top:3px}'
  + '.lpov .lp-panel{display:none}'
  + '.lpov .lp-panel.on{display:block}'
  + '.lpov .lp-backrow{margin:0 0 16px;text-align:left}'
  + '.lpov .lp-ghost{background:none;border:1.5px solid rgba(244,239,232,.45);color:#F4EFE8;cursor:pointer;'
  + 'font-family:inherit;font-weight:700;font-size:13.5px;border-radius:999px;padding:8px 16px}'
  + '.lpov .lp-ghost:hover{border-color:#CFA95F;color:#fff}'
  + '.lpov .lp-calrow{margin-top:20px;text-align:center}'
  + '.lpov .lp-subdeck{display:grid;grid-template-columns:repeat(auto-fit,minmax(175px,1fr));gap:14px}'
  + '.lpov .lp-subdeck .lp-door{padding:15px 13px}'
  + '.lpov .lp-subdeck .lp-ic{width:42px;height:42px;border-radius:12px;margin-bottom:8px}'
  + '.lpov .lp-subdeck .lp-ic svg{width:21px;height:21px}'
  + '.lpov .lp-subdeck .lp-door b{font-size:15px}'
  + '.lpov a:focus-visible,.lpov button:focus-visible{outline:3px solid #CFA95F;outline-offset:3px;border-radius:8px}'
  + '@media print{.lpov{display:none}}';

  function ic(cls, path) {
    return '<span class="lp-ic ' + cls + '" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + path + '</svg></span>';
  }
  var I = {
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    flask: '<path d="M10 2v7.5L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9.5V2"/><path d="M8 2h8"/>',
    bulb: '<path d="M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.2-2.6 5.6-.8.8-1.4 1.9-1.4 3v.4H9v-.4c0-1.1-.6-2.2-1.4-3C6.2 13.2 5 11.4 5 9a7 7 0 0 1 7-7z"/><path d="M9 21h6"/>',
    cal: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    grid: '<path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    play: '<polygon points="10 8 16 12 10 16 10 8"/><rect x="3" y="4" width="18" height="16" rx="2"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    check: '<path d="M9 11l3 3 8-8"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
    loop: '<path d="M17 2l4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18"/>',
    scope: '<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
    brain: '<path d="M12 2a4 4 0 0 1 4 4c2 0 4 2 4 4s-1 3-2 4c1 1 1 3 0 4a4 4 0 0 1-4 4 4 4 0 0 1-4-2 4 4 0 0 1-4 2 4 4 0 0 1-4-4c-1-1-1-3 0-4-1-1-2-2-2-4s2-4 4-4a4 4 0 0 1 4-4z"/>',
    cards: '<rect x="3" y="6" width="14" height="12" rx="2"/><path d="M7 6V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>',
    flow: '<path d="M12 3v4M12 11v4M12 19v2"/><rect x="8" y="7" width="8" height="4" rx="1"/><rect x="8" y="15" width="8" height="4" rx="1"/>'
  };
  function door(cls, icon, title, sub, attrs) {
    var tag = /href=/.test(attrs) ? 'a' : 'button';
    return '<' + tag + ' class="lp-door" ' + attrs + '>' + ic(cls, icon)
      + '<b>' + title + '</b><span>' + sub + '</span></' + tag + '>';
  }

  var sec = null;
  try {
    var m = window.location.search.match(/[?&]sec=(mw|tr-am|tr-eve)/);
    sec = m ? m[1] : (localStorage.getItem('bio004-section') || null);
  } catch (e) {}
  function u(page) {
    var bits = page.split('#');
    var base = bits[0];
    if (sec) base += (base.indexOf('?') > -1 ? '&' : '?') + 'sec=' + sec;
    return base + (bits[1] ? '#' + bits[1] : '');
  }
  function go(page) { return 'href="' + u(page) + '" target="_top"'; }
  function ext(url) { return 'href="' + url + '" target="_blank" rel="noopener"'; }

  var ov = document.createElement('div');
  ov.className = 'lpov';
  ov.setAttribute('role', 'dialog');
  ov.setAttribute('aria-modal', 'true');
  ov.setAttribute('aria-label', 'Where are you headed?');
  ov.innerHTML = '<div class="lp-wrap">'
    + '<p class="lp-eyebrow">BIO 004 &middot; Human Anatomy &middot; Fall 2026</p>'
    + '<h2>Where are you headed?</h2>'
    + '<p class="lp-sub">Four doors. Everything in the course is behind one of them.</p>'

    + '<div class="lp-panel on" data-lp="home"><div class="lp-deck">'
    + door('ic-terra', I.book, 'Lecture', 'Notes, videos, pre-work, course materials', 'data-lpopen="lecture"')
    + door('ic-navy', I.flask, 'Lab', 'Loops, lab sprints, the Digital Atlas', 'data-lpopen="lab"')
    + door('ic-gold', I.bulb, 'Study', 'Mastery OS, recall cards, loops, brain dump', 'data-lpopen="study"')
    + door('ic-blue', I.flow, 'Study Protocol', 'The flow chart for this week', go('bio004-study-protocol.html'))
    + '</div>'
    + '<div class="lp-calrow"><button class="lp-ghost" data-lpclose="1">Go to the calendar &#8594;</button></div>'
    + '</div>'

    + '<div class="lp-panel" data-lp="lecture">'
    + '<div class="lp-backrow"><button class="lp-ghost" data-lpback="1">&#8592; Back to the four doors</button></div>'
    + '<div class="lp-subdeck">'
    + door('ic-terra', I.grid, 'Course materials', 'Everything, organized by module', go('course-materials.html'))
    + door('ic-gold', I.play, 'Videos', 'Just the videos, by module', go('bio004-quick-access.html?cat=videos'))
    + door('ic-navy', I.pen, 'Notes', 'Just the notes, by module', go('bio004-quick-access.html?cat=notes'))
    + door('ic-blue', I.check, 'Pre-work', 'Just what is due before class', go('bio004-quick-access.html?cat=prework'))
    + '</div></div>'

    + '<div class="lp-panel" data-lp="lab">'
    + '<div class="lp-backrow"><button class="lp-ghost" data-lpback="1">&#8592; Back to the four doors</button></div>'
    + '<div class="lp-subdeck">'
    + door('ic-terra', I.loop, 'Loops', 'Fast visual practice', ext('https://drsrennie-stack.github.io/loops/'))
    + door('ic-navy', I.clock, 'Lab sprints', 'Structure checklists by station', go('lab-sprints.html'))
    /* Articulate refuses to be framed (X-Frame-Options), so the Atlas
       opens in its own tab and the course tab stays behind it. */
    + door('ic-gold', I.globe, 'Digital Atlas', 'Opens in its own tab', ext('https://share.articulate.com/UOHEe3p6DmTC4nXuUTE02'))
    + door('ic-blue', I.scope, 'Histology help', 'Every slide tool, sorted', go('histology-help.html'))
    + '</div></div>'

    + '<div class="lp-panel" data-lp="study">'
    + '<div class="lp-backrow"><button class="lp-ghost" data-lpback="1">&#8592; Back to the four doors</button></div>'
    + '<div class="lp-subdeck">'
    + door('ic-gold', I.brain, 'Mastery OS', 'Your plan, dials, and session', go('mastery-os-fall-2026.html'))
    + door('ic-blue', I.cards, 'Recall cards', 'Straight into what is due', go('mastery-os-fall-2026.html#s-recall'))
    + door('ic-terra', I.loop, 'Loops', 'Fast visual practice, any topic', ext('https://drsrennie-stack.github.io/loops/'))
    + door('ic-navy', I.pen, 'Brain dump', 'Blank page, timer, check yourself', go('brain-dump-practice.html'))
    + door('ic-gold', I.flow, 'Study Protocol', 'The flow chart for this week', go('bio004-study-protocol.html'))
    + '</div></div>'

    + '</div>';

  function boot() {
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
    document.body.appendChild(ov);
    var prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    var lastFocus = document.activeElement;

    function show(key) {
      ov.querySelectorAll('.lp-panel').forEach(function (p) {
        p.classList.toggle('on', p.getAttribute('data-lp') === key);
      });
      var f = ov.querySelector('.lp-panel.on .lp-door, .lp-panel.on button');
      if (f) f.focus();
    }
    function close() {
      ov.parentNode.removeChild(ov);
      document.body.style.overflow = prevOverflow;
      if (lastFocus && lastFocus.focus) lastFocus.focus();
      document.removeEventListener('keydown', onKey);
    }
    function onKey(e) { if (e.key === 'Escape') close(); }
    ov.addEventListener('click', function (e) {
      var o = e.target.closest('[data-lpopen]');
      if (o) { show(o.getAttribute('data-lpopen')); return; }
      if (e.target.closest('[data-lpback]')) { show('home'); return; }
      if (e.target.closest('[data-lpclose]')) close();
    });
    document.addEventListener('keydown', onKey);
    var f0 = ov.querySelector('.lp-door');
    if (f0) f0.focus();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
