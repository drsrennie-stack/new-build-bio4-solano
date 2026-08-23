/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   bio004-faculty-dock.js

   THE FACULTY TOOLS BUTTON. The faculty twin of the student
   "Course tools" dock: a floating pill on every faculty page that
   opens the full set of faculty tools, arranged by where the work
   happens: Lecture, Lab, Grades and attendance, Teams and TBL,
   and the student view.

   This file is ALSO the single source of truth for the tool list.
   faculty.html (the Faculty Hub) reads window.BIO004_FACULTY_TOOLS
   from here, so adding a tool below adds it to the hub AND to the
   pop-up on every wired page at once.

   The pill sits bottom RIGHT, because three faculty pages carry
   the student dock bottom left. It skips faculty.html itself (the
   hub IS the list) and hides in the night slide's Present mode.
   Opt out per page with data-no-faculty-dock on <body>.
   ============================================================ */
(function () {
  'use strict';

  var TOOLS = window.BIO004_FACULTY_TOOLS = {
    groups: [
      { label: 'Lecture', apps: [
        { name: 'Course Page', sub: 'follows your class pick', href: 'SECTION', icon: 'home', color: 'gold' },
        { name: 'Day One Run Sheet', sub: 'setup + run of show', href: 'day-one-run-sheet.html', icon: 'sheet', color: 'terra' },
        { name: 'Intro Slides', sub: 'day one deck', href: 'slides-course-introduction.html', icon: 'slides', color: 'teal' },
        { name: 'Brain Dump Selector', sub: 'spin, present, clock', href: 'bio004-braindump-selector-fall2026.html', icon: 'wheel', color: 'terra' },
        { name: 'Brain Dump Bank', sub: 'the master list', href: 'bio004-braindump-bank-fall2026.html', icon: 'bank', color: 'teal' },
        { name: 'Course Calendar', sub: 'all three sections', href: 'bio004-course-calendar.html', icon: 'calendar', color: 'light' },
      ]},
      { label: 'Lab', apps: [
        { name: 'Lab Question of the Night', sub: 'project it, spin the picker', href: 'bio004-lab-question-tonight.html', icon: 'night', color: 'gold' },
        { name: 'Lab Sprints', sub: 'structure checklists', href: 'lab-sprints.html', icon: 'clock', color: 'terra' },
        { name: 'Histology Help', sub: 'every slide tool', href: 'histology-help.html', icon: 'scope', color: 'teal' },
        { name: 'Digital Atlas', sub: 'opens in its own tab', href: 'https://share.articulate.com/UOHEe3p6DmTC4nXuUTE02', icon: 'globe', color: 'light' },
      ]},
      { label: 'Grades and attendance', apps: [
        /* Course Engine is THE attendance tool (her words, Aug 23):
           attendance, teams and roster in one app. attendance-engine.html
           still exists in the repo but is not the one she runs. */
        { name: 'Course Engine', sub: 'attendance, teams, roster', href: 'Course_Engine.html', icon: 'clipboard', color: 'gold' },
        { name: 'Attendance Engine', sub: 'links to Course Engine', href: 'attendance-engine.html', icon: 'clipboard', color: 'terra' },
        { name: 'Grade Engine', sub: 'weighted gradebook', href: 'grade-engine.html', icon: 'calc', color: 'teal' },
        { name: 'Grade Calculator', sub: 'the student one', href: 'grade-calculator.html', icon: 'calc', color: 'light' },
      ]},
      { label: 'Teams and TBL', apps: [
        { name: 'Team Formation Engine', sub: 'quick deal or survey', href: 'team-engine.html', icon: 'users', color: 'terra' },
        { name: 'Team Survey Setup', sub: 'form, QRs, paper copy', href: 'team-survey-setup.html', icon: 'sheet', color: 'gold' },
        { name: 'Team Survey (student)', sub: 'what they see', href: 'team-survey.html', icon: 'clipboard', color: 'light' },
        { name: 'Team Formation Plan', sub: 'methods + survey', href: 'team-formation-plan.html', icon: 'sheet', color: 'teal' },
        { name: 'TBL Teams', sub: 'rosters and parks', href: 'tbl-team.html', icon: 'flag', color: 'terra' },
        { name: 'Charter Worksheet', sub: 'print for day one', href: 'bio004-team-charter-worksheet.html', icon: 'sheet', color: 'gold' },
      ]},
      { label: 'Student view', apps: [
        { name: 'Welcome / Start Here', sub: 'the front door', href: 'welcome.html', icon: 'door', color: 'terra' },
        { name: 'Mastery OS', sub: 'the study app', href: 'mastery-os-fall-2026.html', icon: 'layers', color: 'gold' },
        { name: 'Mastery OS, instructor', sub: 'your side of it', href: 'mastery-os-fall-2026-instructor.html', icon: 'layers', color: 'teal' },
        { name: 'Tools and Links', sub: 'everything else', href: 'tools-and-links.html', icon: 'gridic', color: 'light' },
        { name: 'Section Chooser', sub: 'index.html', href: 'index.html', icon: 'switch', color: 'light' },
      ]},
    ],
    icons: {
      clipboard: '<rect x="6" y="5" width="20" height="24" rx="2" fill="none" stroke-width="2.4"/><rect x="11" y="3" width="10" height="5" rx="1.5" fill="none" stroke-width="2.2"/><path d="M11 15 l3 3 l7 -7" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
      sheet:   '<rect x="6" y="3" width="20" height="26" rx="2" fill="none" stroke-width="2.4"/><path d="M10 10 h12 M10 15 h12 M10 20 h12 M10 25 h7" stroke-width="2" stroke-linecap="round"/>',
      home:    '<path d="M4 13 L16 4 L28 13 M7 12 v13 h18 v-13" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
      wheel:   '<circle cx="16" cy="16" r="11" fill="none" stroke-width="2.4"/><circle cx="16" cy="16" r="2.5" fill="none" stroke-width="2.2"/><path d="M16 5 v6 M16 21 v6 M5 16 h6 M21 16 h6" stroke-width="2.2" stroke-linecap="round"/>',
      slides:  '<rect x="4" y="6" width="24" height="15" rx="2" fill="none" stroke-width="2.4"/><path d="M16 21 v5 M11 28 h10 M11 13 h7" stroke-width="2.2" stroke-linecap="round"/>',
      calendar:'<rect x="4" y="6" width="24" height="21" rx="2" fill="none" stroke-width="2.4"/><path d="M4 12 h24 M10 3 v6 M22 3 v6" stroke-width="2.2" stroke-linecap="round"/>',
      layers:  '<path d="M16 4 L28 10 L16 16 L4 10 Z M4 16 L16 22 L28 16 M4 22 L16 28 L28 22" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
      calc:    '<rect x="6" y="4" width="20" height="24" rx="2" fill="none" stroke-width="2.4"/><path d="M10 9 h12 M10 16 h3 M15 16 h3 M20 16 h2 M10 21 h3 M15 21 h3 M20 21 h2" stroke-width="2" stroke-linecap="round"/>',
      door:    '<path d="M12 4 h14 v24 h-14 M12 4 L5 7 v20 l7 3 Z" fill="none" stroke-width="2.2" stroke-linejoin="round"/><circle cx="9.5" cy="17" r="1.4" fill="currentColor" stroke="none"/>',
      gridic:  '<rect x="5" y="5" width="9" height="9" rx="2" fill="none" stroke-width="2.2"/><rect x="18" y="5" width="9" height="9" rx="2" fill="none" stroke-width="2.2"/><rect x="5" y="18" width="9" height="9" rx="2" fill="none" stroke-width="2.2"/><rect x="18" y="18" width="9" height="9" rx="2" fill="none" stroke-width="2.2"/>',
      bank:    '<path d="M5 12 L16 5 L27 12 M7 12 v11 M12 12 v11 M20 12 v11 M25 12 v11 M4 26 h24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
      users:   '<circle cx="11" cy="11" r="4.2" fill="none" stroke-width="2.2"/><path d="M3.5 26 c0-5 4-8 7.5-8 s7.5 3 7.5 8" fill="none" stroke-width="2.2" stroke-linecap="round"/><circle cx="23" cy="12" r="3.4" fill="none" stroke-width="2.2"/><path d="M21 18.5 c4.5 0 7.5 3 7.5 7" fill="none" stroke-width="2.2" stroke-linecap="round"/>',
      flag:    '<path d="M8 28 V5 M8 6 h16 l-4 5 l4 5 h-16" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
      switch:  '<path d="M9 8 h14 m0 0 l-4 -4 m4 4 l-4 4 M23 24 h-14 m0 0 l4 -4 m-4 4 l4 4" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
      night:   '<path d="M27 19 A11.5 11.5 0 1 1 13 4.5 A9.5 9.5 0 0 0 27 19 Z" fill="none" stroke-width="2.4" stroke-linejoin="round"/><path d="M21 8 l1.2 2.4 L24.6 11.6 l-2.4 1.2 L21 15.2 l-1.2-2.4 L17.4 11.6 l2.4-1.2 Z" fill="currentColor" stroke="none"/>',
      clock:   '<circle cx="16" cy="16" r="11" fill="none" stroke-width="2.4"/><path d="M16 9 v7 l5 4" fill="none" stroke-width="2.4" stroke-linecap="round"/>',
      scope:   '<path d="M9 24 h10 M5 29 h20 M18 29 a8.5 8.5 0 0 0 0-17 h-1.5" fill="none" stroke-width="2.2" stroke-linecap="round"/><path d="M12 19 a3 3 0 0 1-3-3 V9 h8 v7 a3 3 0 0 1-3 3 z M15 9 V5 a1.5 1.5 0 0 0-1.5-1.5 h-1 A1.5 1.5 0 0 0 11 5 v4" fill="none" stroke-width="2.2" stroke-linejoin="round"/>',
      globe:   '<circle cx="16" cy="16" r="11.5" fill="none" stroke-width="2.4"/><path d="M4.5 16 h23 M16 4.5 a17 17 0 0 1 0 23 a17 17 0 0 1 0-23" fill="none" stroke-width="2.2"/>',
    },
    sectionPage: { 'mw': 'class1.html', 'tr-am': 'class2.html', 'tr-eve': 'class3.html' }
  };

  /* ---------- the floating pill + pop-up. Not on the hub itself. ---------- */
  if (/(^|\/)faculty\.html$/.test(window.location.pathname)) return;
  function boot() {
    try {
      if (document.body.hasAttribute('data-no-faculty-dock')) return;
      if (window.parent && window.parent !== window) return; /* not inside Canvas embeds */
      if (document.querySelector('.fd-pill')) return;

      var css = ''
        + '.fd-pill{position:fixed;right:18px;bottom:18px;z-index:2147482900;display:inline-flex;align-items:center;gap:9px;'
        + 'background:#08101F;color:#F4EFE8;border:2px solid #DCB45C;border-radius:999px;padding:11px 18px 11px 14px;cursor:pointer;'
        + 'font:800 13.5px/1 "Plus Jakarta Sans",system-ui,-apple-system,Segoe UI,Roboto,sans-serif;'
        + 'box-shadow:0 6px 18px -6px rgba(0,0,0,.5)}'
        + '.fd-pill:hover{color:#fff;border-color:#E8CE85}'
        + '.fd-pill:focus-visible{outline:3px solid #DCB45C;outline-offset:3px}'
        + '.fd-pill svg{width:16px;height:16px;stroke:#DCB45C}'
        + 'body.present .fd-pill{display:none}'
        + '.fdov{position:fixed;inset:0;z-index:2147482901;background:rgba(4,8,18,.96);display:none;overflow:auto;'
        + 'font-family:"Plus Jakarta Sans",system-ui,sans-serif;color:#fff}'
        + '.fdov.on{display:block}'
        + '.fd-wrap{max-width:1020px;margin:0 auto;padding:34px 22px 60px}'
        + '.fd-head{display:flex;align-items:flex-start;gap:16px}'
        + '.fd-head .t{flex:1}'
        + '.fd-eyebrow{font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#DCB45C;margin:0 0 6px}'
        + '.fd-head h2{font-size:clamp(22px,3.5vw,30px);font-weight:800;margin:0;color:#fff}'
        + '.fd-close{background:none;border:1.5px solid rgba(244,239,232,.45);color:#F4EFE8;cursor:pointer;'
        + 'font:800 13.5px/1 "Plus Jakarta Sans",system-ui,sans-serif;border-radius:999px;padding:9px 16px}'
        + '.fd-close:hover{border-color:#DCB45C;color:#fff}'
        + '.fd-close:focus-visible{outline:3px solid #DCB45C;outline-offset:2px}'
        + '.fd-group{margin-top:28px}'
        + '.fd-gl{font-size:12px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#8A96AC;margin:0 0 12px}'
        + '.fd-grid{display:grid;gap:13px;grid-template-columns:repeat(auto-fill,minmax(156px,1fr))}'
        + 'a.fd-tile{display:flex;flex-direction:column;align-items:center;text-align:center;gap:9px;'
        + 'background:#1E2A47;border:1px solid #2C3A5C;border-radius:16px;padding:16px 12px 13px;text-decoration:none;color:#fff;'
        + 'transition:transform 160ms ease,border-color 160ms ease}'
        + 'a.fd-tile:hover{transform:translateY(-3px);border-color:#DCB45C}'
        + 'a.fd-tile:focus-visible{outline:3px solid #DCB45C;outline-offset:2px}'
        + '.fd-ic{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,.35)}'
        + '.fd-ic svg{width:26px;height:26px}'
        + '.fd-gold{background:#DCB45C}.fd-gold svg{stroke:#08101F;color:#08101F}'
        + '.fd-terra{background:#8B1D1D}.fd-terra svg{stroke:#fff;color:#fff}'
        + '.fd-teal{background:#2C5F66}.fd-teal svg{stroke:#fff;color:#fff}'
        + '.fd-light{background:#fff}.fd-light svg{stroke:#08101F;color:#08101F}'
        + '.fd-name{font-size:13px;font-weight:700;line-height:1.25}'
        + '.fd-sub{font-size:10.5px;color:#8A96AC;line-height:1.3;margin-top:-3px}'
        + '@media (prefers-reduced-motion:reduce){a.fd-tile{transition:none}a.fd-tile:hover{transform:none}}'
        + '@media print{.fd-pill,.fdov{display:none !important}}';
      var st = document.createElement('style');
      st.textContent = css;
      document.head.appendChild(st);

      var sec = null;
      try { sec = localStorage.getItem('bio004-section'); } catch (e) {}
      function href(a) {
        if (a.href === 'SECTION') return TOOLS.sectionPage[sec] || 'index.html';
        return a.href;
      }

      var ov = document.createElement('div');
      ov.className = 'fdov';
      ov.setAttribute('role', 'dialog');
      ov.setAttribute('aria-modal', 'true');
      ov.setAttribute('aria-label', 'Faculty tools');
      var inner = '<div class="fd-wrap"><div class="fd-head"><div class="t">'
        + '<p class="fd-eyebrow">BIO 004 &middot; Human Anatomy &middot; Fall 2026</p>'
        + '<h2>Faculty tools</h2></div>'
        + '<button type="button" class="fd-close" data-fdclose>Close &#10005;</button></div>';
      TOOLS.groups.forEach(function (g) {
        inner += '<div class="fd-group"><p class="fd-gl">' + g.label + '</p><div class="fd-grid">';
        g.apps.forEach(function (a) {
          var h = href(a);
          inner += '<a class="fd-tile" href="' + h + '"'
            + (/^https?:/.test(h) ? ' target="_blank" rel="noopener"' : '') + '>'
            + '<span class="fd-ic fd-' + a.color + '" aria-hidden="true"><svg viewBox="0 0 32 32" stroke="currentColor">' + TOOLS.icons[a.icon] + '</svg></span>'
            + '<span class="fd-name">' + a.name + '</span>'
            + '<span class="fd-sub">' + a.sub + '</span></a>';
        });
        inner += '</div></div>';
      });
      inner += '</div>';
      ov.innerHTML = inner;
      document.body.appendChild(ov);

      var pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'fd-pill';
      pill.innerHTML = '<svg viewBox="0 0 32 32" fill="none" stroke-width="2.2" aria-hidden="true">' + TOOLS.icons.gridic + '</svg>Faculty tools';
      pill.setAttribute('aria-haspopup', 'dialog');
      document.body.appendChild(pill);

      var lastFocus = null;
      function open() {
        lastFocus = document.activeElement;
        ov.classList.add('on');
        var first = ov.querySelector('.fd-close');
        if (first) first.focus();
      }
      function close() {
        ov.classList.remove('on');
        if (lastFocus && lastFocus.focus) lastFocus.focus();
      }
      pill.addEventListener('click', open);
      ov.addEventListener('click', function (e) {
        if (e.target === ov || e.target.closest('[data-fdclose]')) close();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && ov.classList.contains('on')) close();
      });
    } catch (e) {}
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
