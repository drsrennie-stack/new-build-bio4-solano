/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   syllabus-schedule.js

   Builds the two schedule tables in a section syllabus, the
   module map and the day-by-day, from schedule-fall2026.js.

   Before this file existed, each syllabus carried its own
   hand-typed copy of the calendar. That made five copies of the
   same 34 dates, and every one of them could drift on its own.
   Two of them already had. Now there is one calendar, and the
   syllabus reads it.

   Wire a syllabus like this, after schedule-fall2026.js:

     <div data-syl-modules="class1"></div>
     <div data-syl-days="class1"></div>
     <script src="syllabus-schedule.js"></script>

   The value is the section key from BIO004_SECTIONS.sections,
   so class1, class2, or class3. If the schedule file has not
   loaded, whatever markup is already inside the placeholder is
   left alone, which means a static fallback table still shows.
   ============================================================ */

(function () {
  'use strict';

  var TRACK = { class1: 'mw', class2: 'tr', class3: 'tr' };

  var DAYS   = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  /* The weekday a student reads is derived from the ISO date,
     never stored, so a label cannot drift away from its date. */
  function label(iso) {
    var p = iso.split('-');
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    return DAYS[d.getDay()] + ' ' + MONTHS[d.getMonth()] + ' ' + d.getDate();
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function line(session, want) {
    var ls = session.lines || [];
    for (var i = 0; i < ls.length; i++) {
      if (ls[i][0] === want) return ls[i][1];
    }
    return '';
  }

  /* ---------- module map ---------- */

  function modules(host, key) {
    var cfg = (window.BIO004_SECTIONS || {}).sections || {};
    var sec = cfg[key];
    var mods = window.BIO004_MODULES;
    if (!sec || !mods) return;

    var byExam = {};
    (sec.exams || []).forEach(function (e) { byExam[e.n] = e; });

    var rows = mods.map(function (m) {
      var e = byExam[m.exam] || {};
      var wks = m.weeks;
      var span = wks.length ? ('Wk ' + wks[0] + '&ndash;' + wks[wks.length - 1]) : '';
      var when = e.lecture ? '<strong>' + label(e.lecture) + '</strong>' : '';
      return '<tr><td class="wk-cell">' + m.n + '</td>'
           + '<td>' + span + '</td>'
           + '<td>' + esc(m.title) + '. '
           + esc(m.detail).replace(/TBL (\d+)/g, '<strong>TBL $1</strong>') + '</td>'
           + '<td>' + when + '</td></tr>';
    }).join('');

    host.innerHTML =
      '<div class="tbl-wrap"><table class="tbl">'
      + '<caption>Module map and your exam dates</caption>'
      + '<thead><tr><th scope="col">Module</th><th scope="col">Weeks</th>'
      + '<th scope="col">What you cover, and the TBLs</th>'
      + '<th scope="col">Exam</th></tr></thead>'
      + '<tbody>' + rows + '</tbody></table></div>';
  }

  /* ---------- day by day ---------- */

  function days(host, key) {
    var cfg = (window.BIO004_SECTIONS || {}).sections || {};
    var sec = cfg[key];
    var all = (window.BIO004_SESSIONS || {})[TRACK[key]];
    if (!sec || !all || !all.length) return;

    /* Group by week so the week number can span its rows. */
    var weeks = [];
    var index = {};
    all.forEach(function (s) {
      if (!index[s.wk]) { index[s.wk] = { wk: s.wk, rows: [] }; weeks.push(index[s.wk]); }
      index[s.wk].rows.push(s);
    });

    var out = '';
    weeks.forEach(function (w) {
      w.rows.forEach(function (s, i) {
        var tone = s.kind === 'exam' ? ' style="background:#F6ECD3;"'
                 : s.kind === 'off'  ? ' style="background:#F1EFEA;color:#08101F;"'
                 : '';
        var wkCell = i === 0
          ? '<td class="wk-cell" rowspan="' + w.rows.length + '">' + w.wk + '</td>'
          : '';
        var dim = s.kind === 'off' ? ' style="opacity:.75;"' : '';
        var body;
        if (s.kind === 'class') {
          body = '<td>' + (line(s, 'In class') || '') + '</td>'
               + '<td>' + (line(s, 'Lab') || '') + '</td>';
        } else {
          var txt = (s.text || []).join(' ');
          body = '<td colspan="2"' + (s.kind === 'off' ? ' style="opacity:.72;"' : '') + '>'
               + txt + '</td>';
        }
        out += '<tr' + tone + '>' + wkCell
             + '<td class="wk-cell"' + dim + '>' + label(s.date) + '</td>'
             + body + '</tr>';
      });
    });

    host.innerHTML =
      '<div class="tbl-wrap"><table class="tbl">'
      + '<caption>' + esc(sec.days + ' ' + sec.when) + ', day by day, in class and in lab</caption>'
      + '<thead><tr><th scope="col">Wk</th><th scope="col">Date</th>'
      + '<th scope="col">In class</th><th scope="col">Lab</th></tr></thead>'
      + '<tbody>' + out + '</tbody></table></div>';
  }

  function run() {
    var m = document.querySelectorAll('[data-syl-modules]');
    for (var i = 0; i < m.length; i++) {
      try { modules(m[i], m[i].getAttribute('data-syl-modules')); } catch (e) {}
    }
    var d = document.querySelectorAll('[data-syl-days]');
    for (var j = 0; j < d.length; j++) {
      try { days(d[j], d[j].getAttribute('data-syl-days')); } catch (e) {}
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
