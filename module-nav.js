/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   module-nav.js

   Module-and-week navigator. Tabs across the five modules, the
   weeks of the selected module underneath, and a marker showing
   which module and week the course is actually in today.

   WHY
   ---
   The week pages carried a flat strip of 17 numbers. A student
   looking at "11" had no way to know which module it belonged to,
   which exam it counted toward, or whether it was near. The
   section home pages had no week links at all.

   HOW TO MOUNT
   ------------
   Put an empty element where it should appear:

       <div data-module-nav></div>

   Optionally tell it which week the page is about, so that week is
   marked as the one being viewed and its module opens first:

       <div data-module-nav data-week="5"></div>

   Then load, in this order:

       <script src="schedule-fall2026.js"></script>
       <script src="module-nav.js"></script>

   It reads BIO004_MODULES and BIO004_SESSIONS. If either is
   missing it removes itself rather than rendering an empty shell.

   TODAY
   -----
   The "you are here" marker is computed from the real date against
   the session data, so it follows the term with no maintenance.
   Before the term it points at Week 1, after it points at Week 17,
   and it says so rather than pretending the course is running.
   Override for testing with ?today=YYYY-MM-DD, the same parameter
   Mastery OS uses.

   WEEK 4 APPEARS TWICE, ON PURPOSE
   --------------------------------
   See the note above BIO004_MODULES in schedule-fall2026.js. Week
   4 closes Module 1 with Exam 1 and opens Module 2 in the same
   week. It is drawn as a changeover week in both tabs rather than
   forced into one.

   STYLING
   -------
   The stylesheet is injected once, and every colour comes from the
   CSS custom properties the pages already define (--navy, --terra,
   --terra-dark, --gold, --offwhite, --line). Nothing is hardcoded,
   so this inherits whatever palette the host page is using and
   does not need 21 stylesheets edited.
   ============================================================ */

(function () {
  'use strict';

  var CSS = [
    '.mnav{margin:10px 0 18px}',
    '.mnav-hd{display:flex;align-items:baseline;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:9px}',
    '.mnav-eb{font-family:var(--eb,inherit);font-size:12px;letter-spacing:.09em;text-transform:uppercase;color:var(--terra-dark,#7A2A22);font-weight:700}',
    '.mnav-here{font-size:12.5px;color:var(--navy,#08101F);opacity:.78}',
    '.mnav-here b{opacity:1}',
    '.mnav-tabs{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 10px;padding:0;list-style:none}',
    '.mnav-tab{appearance:none;font:inherit;font-size:.8rem;font-weight:700;cursor:pointer;',
    '  padding:7px 12px;border-radius:9px;background:#fff;color:var(--navy,#08101F);',
    '  border:1px solid var(--line,rgba(11,21,48,.12));transition:background var(--t,180ms ease),color var(--t,180ms ease),border-color var(--t,180ms ease)}',
    '.mnav-tab:hover{border-color:var(--terra-dark,#7A2A22)}',
    '.mnav-tab[aria-selected="true"]{background:var(--navy,#08101F);color:#fff;border-color:var(--navy,#08101F)}',
    '.mnav-tab .mnav-tn{opacity:.78;font-weight:600;margin-right:6px}',  /* .78 keeps the module number at AAA on white; .62 was AA only */
    '.mnav-tab[aria-selected="true"] .mnav-tn{opacity:.8}',
    '.mnav-tab.is-now{box-shadow:0 0 0 2px var(--gold,#DCB45C)}',
    '.mnav-panel{border:1px solid var(--line,rgba(11,21,48,.12));border-radius:var(--radius,16px);background:#fff;padding:13px 14px}',
    '.mnav-title{margin:0 0 3px;font-size:1rem;font-weight:700;color:var(--navy,#08101F)}',
    '.mnav-detail{margin:0 0 11px;font-size:.85rem;line-height:1.5;color:var(--navy,#08101F);opacity:.75}',
    '.mnav-weeks{display:flex;flex-wrap:wrap;gap:7px;margin:0;padding:0;list-style:none}',
    '.mnav-wk{display:flex;flex-direction:column;align-items:center;gap:2px;min-width:56px;padding:8px 9px;',
    '  border-radius:10px;text-decoration:none;background:#fff;color:var(--navy,#08101F);',
    '  border:1px solid var(--line,rgba(11,21,48,.12));transition:transform var(--t,180ms ease),box-shadow var(--t,180ms ease),border-color var(--t,180ms ease)}',
    '.mnav-wk:hover{transform:translateY(-2px);box-shadow:0 8px 16px rgba(0,0,0,.10);border-color:var(--terra-dark,#7A2A22)}',
    '.mnav-wk .n{font-weight:800;font-size:.95rem;line-height:1.1}',
    '.mnav-wk .l{font-family:var(--eb,inherit);font-size:10px;letter-spacing:.05em;text-transform:uppercase;opacity:.7;white-space:nowrap}',
    '.mnav-wk.is-view{background:var(--navy,#08101F);color:#fff;border-color:var(--navy,#08101F)}',
    '.mnav-wk.is-view .l{opacity:.85}',
    '.mnav-wk.is-now{border-color:var(--gold,#DCB45C);box-shadow:0 0 0 2px var(--gold,#DCB45C)}',
    '.mnav-wk.is-exam .l{color:var(--terra-dark,#7A2A22);opacity:1;font-weight:700}',
    '.mnav-wk.is-view.is-exam .l{color:var(--gold,#DCB45C)}',
    '.mnav-wk:focus-visible,.mnav-tab:focus-visible{outline:3px solid var(--gold,#DCB45C);outline-offset:2px}',
    '.mnav-now{display:inline-flex;align-items:center;gap:5px;margin-top:10px;font-size:12px;',
    '  color:var(--terra-dark,#7A2A22);font-weight:700}',
    '.mnav-now .dot{width:7px;height:7px;border-radius:50%;background:var(--gold,#DCB45C);box-shadow:0 0 0 2px rgba(220,180,92,.32)}',
    '@media (prefers-reduced-motion:reduce){.mnav-wk,.mnav-tab{transition:none}.mnav-wk:hover{transform:none}}'
  ].join('');

  function injectCSS() {
    if (document.getElementById('mnav-css')) return;
    var st = document.createElement('style');
    st.id = 'mnav-css';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  /* Local-time parse. new Date('2026-09-14') is midnight UTC and
     renders as the previous day for everyone in California. */
  function parseISO(iso) {
    var p = String(iso).split('-');
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }

  function todayISO() {
    try {
      var m = location.search.match(/[?&]today=(\d{4}-\d{2}-\d{2})/);
      if (m) return m[1];
    } catch (e) {}
    var d = new Date();
    function p(n) { return (n < 10 ? '0' : '') + n; }
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }

  /* Which week is the course in? Uses the mw track for the week
     boundaries: both tracks share week numbering, and Monday is
     the earliest a given week can start. Returns a week number
     plus a state, so callers can say "not started" honestly
     rather than silently clamping to week 1. */
  function currentWeek(sessions) {
    var rows = (sessions && sessions.mw) || [];
    if (!rows.length) return null;
    var t = parseISO(todayISO());

    var first = parseISO(rows[0].date);
    var last = parseISO(rows[rows.length - 1].date);
    if (t < first) return { wk: rows[0].wk, state: 'before' };
    if (t > last)  return { wk: rows[rows.length - 1].wk, state: 'after' };

    /* The week of the latest session on or before today. */
    var wk = rows[0].wk;
    for (var i = 0; i < rows.length; i++) {
      if (parseISO(rows[i].date) <= t) wk = rows[i].wk; else break;
    }
    return { wk: wk, state: 'during' };
  }

  function modulesFor(wk, modules) {
    return modules.filter(function (m) { return m.weeks.indexOf(wk) > -1; });
  }

  /* Week number -> the exam number that actually sits in that week,
     read out of the session text. Taken from the sessions rather
     than from the module's own exam field, because a changeover
     week belongs to two modules and must not be labelled with the
     later module's exam. Week 4 holds Exam 1 even when it is being
     drawn inside the Module 2 tab. */
  function examWeeks(sessions) {
    var out = {};
    ['mw', 'tr'].forEach(function (tr) {
      (sessions[tr] || []).forEach(function (s) {
        if (s.kind !== 'exam') return;
        var txt = [].concat(s.text || []).join(' ');
        var m = txt.match(/Exam\s*(\d+)/);
        out[s.wk] = m ? parseInt(m[1], 10) : true;
      });
    });
    return out;
  }

  function build(host) {
    var modules = window.BIO004_MODULES;
    var sessions = window.BIO004_SESSIONS;
    if (!modules || !modules.length || !sessions) { host.remove(); return; }

    injectCSS();

    var exams = examWeeks(sessions);
    var now = currentWeek(sessions);
    var viewWk = parseInt(host.getAttribute('data-week'), 10) || null;

    /* Open the module of the week being viewed, else the module the
       course is in today, else the first. */
    var openOn = viewWk || (now && now.wk) || modules[0].weeks[0];
    /* First module containing that week wins. A changeover week sits
       in two modules, and the earlier one is the right place to land:
       on week 4 the salient thing is Exam 1 closing Module 1, not
       Module 2 opening. */
    var openIdx = 0, found = false;
    modules.forEach(function (m, i) {
      if (!found && m.weeks.indexOf(openOn) > -1) { openIdx = i; found = true; }
    });

    var wrap = document.createElement('div');
    wrap.className = 'mnav';

    /* Header, with the you-are-here line. */
    var hd = document.createElement('div');
    hd.className = 'mnav-hd';
    var eb = document.createElement('span');
    eb.className = 'mnav-eb';
    eb.textContent = 'Modules and weeks';
    hd.appendChild(eb);

    if (now) {
      var here = document.createElement('span');
      here.className = 'mnav-here';
      var mods = modulesFor(now.wk, modules);
      var modTxt = mods.map(function (m) { return 'Module ' + m.n; }).join(' into ');
      if (now.state === 'before') {
        here.innerHTML = 'The term starts <b>Monday August 17</b>.';
      } else if (now.state === 'after') {
        here.innerHTML = 'The term has ended. <b>Week ' + now.wk + '</b> was the last.';
      } else {
        here.innerHTML = 'Right now: <b>' + modTxt + ', Week ' + now.wk + '</b>';
      }
      hd.appendChild(here);
    }
    wrap.appendChild(hd);

    /* Tabs. */
    var tablist = document.createElement('ul');
    tablist.className = 'mnav-tabs';
    tablist.setAttribute('role', 'tablist');
    tablist.setAttribute('aria-label', 'Course modules');

    var panel = document.createElement('div');
    panel.className = 'mnav-panel';
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '0');

    var tabs = [];

    function renderPanel(i) {
      var m = modules[i];
      panel.setAttribute('aria-labelledby', 'mnav-tab-' + m.n);
      panel.innerHTML = '';

      var h = document.createElement('p');
      h.className = 'mnav-title';
      h.textContent = 'Module ' + m.n + '. ' + m.title;
      panel.appendChild(h);

      var d = document.createElement('p');
      d.className = 'mnav-detail';
      d.textContent = m.detail;
      panel.appendChild(d);

      var ul = document.createElement('ul');
      ul.className = 'mnav-weeks';

      m.weeks.forEach(function (wk) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.className = 'mnav-wk';
        a.href = 'week-' + wk + '.html';
        a.setAttribute('target', '_top');

        var shared = modulesFor(wk, modules).length > 1;
        var exN = exams[wk];
        var label = exN ? ('Exam ' + (exN === true ? m.exam : exN))
                  : shared ? 'Changeover'
                  : 'Week';

        a.innerHTML = '<span class="n">' + wk + '</span><span class="l">' + label + '</span>';

        var bits = ['Week ' + wk];
        if (exN) bits.push('Exam ' + (exN === true ? m.exam : exN) + ' week');
        if (shared) bits.push('shared between Module '
          + modulesFor(wk, modules).map(function (x) { return x.n; }).join(' and Module '));
        if (now && now.state === 'during' && wk === now.wk) bits.push('this week');
        if (viewWk === wk) bits.push('you are viewing this week');
        a.setAttribute('aria-label', bits.join(', '));

        if (exN) a.classList.add('is-exam');
        if (viewWk === wk) { a.classList.add('is-view'); a.setAttribute('aria-current', 'page'); }
        if (now && now.state === 'during' && wk === now.wk) {
          a.classList.add('is-now');
          if (viewWk !== wk) a.setAttribute('aria-current', 'date');
        }

        li.appendChild(a);
        ul.appendChild(li);
      });
      panel.appendChild(ul);

      if (now && now.state === 'during' && m.weeks.indexOf(now.wk) > -1) {
        var flag = document.createElement('p');
        flag.className = 'mnav-now';
        flag.innerHTML = '<span class="dot" aria-hidden="true"></span>You are in Week ' + now.wk + ' of this module';
        panel.appendChild(flag);
      }
    }

    function select(i, focus) {
      tabs.forEach(function (t, j) {
        var on = i === j;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.setAttribute('tabindex', on ? '0' : '-1');
      });
      renderPanel(i);
      if (focus) tabs[i].focus();
    }

    modules.forEach(function (m, i) {
      var li = document.createElement('li');
      li.setAttribute('role', 'presentation');
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'mnav-tab';
      b.id = 'mnav-tab-' + m.n;
      b.setAttribute('role', 'tab');
      b.innerHTML = '<span class="mnav-tn">' + m.n + '</span>' + m.title;
      b.setAttribute('aria-label', 'Module ' + m.n + ', ' + m.title
        + ', weeks ' + m.weeks.join(', ') + ', ends in Exam ' + m.exam);
      if (now && now.state === 'during' && m.weeks.indexOf(now.wk) > -1) b.classList.add('is-now');

      b.addEventListener('click', function () { select(i, false); });
      b.addEventListener('keydown', function (e) {
        var k = e.key, next = null;
        if (k === 'ArrowRight') next = (i + 1) % modules.length;
        else if (k === 'ArrowLeft') next = (i - 1 + modules.length) % modules.length;
        else if (k === 'Home') next = 0;
        else if (k === 'End') next = modules.length - 1;
        if (next !== null) { e.preventDefault(); select(next, true); }
      });

      tabs.push(b);
      li.appendChild(b);
      tablist.appendChild(li);
    });

    wrap.appendChild(tablist);
    wrap.appendChild(panel);

    host.innerHTML = '';
    host.appendChild(wrap);
    select(openIdx, false);
  }

  function init() {
    var hosts = document.querySelectorAll('[data-module-nav]');
    for (var i = 0; i < hosts.length; i++) build(hosts[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
