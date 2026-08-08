/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   week-schedule.js

   Renders the "Your two class days" block on a week page from
   window.BIO004_SESSIONS (defined in schedule-fall2026.js).

   WHY THIS EXISTS
   ---------------
   Every week page used to hardcode its own two dates per track,
   68 date strings across 17 files. Changing the term schedule
   meant editing all of them by hand and hoping none drifted.
   Now the dates live in one file and the pages read them.

   HOW TO WIRE A PAGE
   ------------------
   1. Give the wrapper the week number:

        <section class="card" data-week-days="5">

   2. Load, in this order, before the page's own inline script:

        <script src="schedule-fall2026.js"></script>
        <script src="week-schedule.js"></script>

   That is all. This script builds the two <div class="days">
   containers itself, with exactly the markup the pages used
   before, so the existing CSS and the existing section-picker
   script keep working untouched. The picker still toggles
   [data-track] the same way it always did.

   FAILURE BEHAVIOUR
   -----------------
   If the schedule file is missing or the week has no sessions,
   this leaves whatever static markup is already inside the
   wrapper alone. A page that ships with its old hardcoded block
   as a fallback therefore degrades to that block rather than
   rendering empty.
   ============================================================ */

(function () {
  'use strict';

  var DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  /* Parse as local time, not UTC. new Date('2026-09-14') is
     parsed as midnight UTC and renders as the previous day for
     anyone west of Greenwich, which is everyone here. */
  function parseISO(iso) {
    var p = String(iso).split('-');
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }

  function label(iso) {
    var d = parseISO(iso);
    return DOW[d.getDay()] + ' ' + MON[d.getMonth()] + ' ' + d.getDate();
  }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function dayNode(s) {
    var cls = 'day' + (s.kind === 'exam' ? ' day-exam'
                     : s.kind === 'off'  ? ' day-off' : '');
    var day = el('div', cls);
    day.appendChild(el('div', 'day-date', label(s.date)));

    var body = el('div', 'day-body');

    if (s.kind === 'exam' || s.kind === 'off') {
      var tagCls = s.kind === 'exam' ? 'day-tag tag-exam' : 'day-tag tag-off';
      body.appendChild(el('span', tagCls, s.tag || (s.kind === 'exam' ? 'Exam day' : 'No class')));
      /* text is an array, one entry per paragraph. Week 14's exam
         row carries a second paragraph flagging the Monday. */
      var paras = Array.isArray(s.text) ? s.text : (s.text ? [s.text] : []);
      paras.forEach(function (t) { body.appendChild(el('p', 'day-line', t)); });
    } else {
      (s.lines || []).forEach(function (pair) {
        var p = el('p', 'day-line');
        p.appendChild(el('span', 'day-k', pair[0]));
        p.insertAdjacentHTML('beforeend', ' ' + pair[1]);
        body.appendChild(p);
      });
    }

    day.appendChild(body);
    return day;
  }

  /* Section to track. Must stay in step with the picker script
     on the week pages, which uses the same key and the same
     three section ids. mw is Class 1, both tr-* are Classes 2
     and 3, which share a schedule and differ only by time. */
  var KEY = 'bio004-section';
  var SEC_TRACK = { 'mw': 'mw', 'tr-am': 'tr', 'tr-eve': 'tr' };

  function currentTrack() {
    var sec = null;
    try {
      var m = location.search.match(/[?&]sec=([^&#]+)/);
      if (m) sec = decodeURIComponent(m[1]);
    } catch (e) {}
    if (!SEC_TRACK[sec]) {
      try { sec = localStorage.getItem(KEY); } catch (e) { sec = null; }
    }
    return SEC_TRACK[sec] || 'mw';
  }

  function render() {
    var host = document.querySelector('[data-week-days]');
    if (!host) return;

    var sessions = window.BIO004_SESSIONS;
    if (!sessions) return;                    /* leave fallback markup in place */

    var wk = parseInt(host.getAttribute('data-week-days'), 10);
    if (!wk) return;

    /* Build both tracks first. Only replace the existing markup
       once we know we have something real to put there. */
    var built = [];
    ['mw', 'tr'].forEach(function (track) {
      var rows = (sessions[track] || []).filter(function (s) { return s.wk === wk; });
      if (!rows.length) return;

      var box = el('div', 'days');
      box.setAttribute('data-track', track);
      rows.forEach(function (s) { box.appendChild(dayNode(s)); });
      built.push(box);
    });

    if (!built.length) return;                /* leave fallback markup in place */

    /* Work out which track to show. The page's own picker script
       does this too, but it runs at parse time, before these
       blocks exist, so its first apply() cannot reach them. The
       renderer therefore resolves the section itself. Same key,
       same ?sec= override, same default, so the two agree. */
    var showing = currentTrack();

    host.querySelectorAll('.days[data-track]').forEach(function (n) { n.remove(); });

    built.forEach(function (box) {
      box.hidden = box.getAttribute('data-track') !== showing;
      host.appendChild(box);
    });

    /* Switching section swaps the visible schedule with no visual
       transition and, until now, no announcement. Marking the
       block polite means a screen reader reads the new class days
       after the student presses a section button.

       Set AFTER the first render on purpose. A live region that
       already contains content when it is populated announces the
       whole block on page load, which is noise. */
    if (!host.hasAttribute('aria-live')) {
      window.setTimeout(function () { host.setAttribute('aria-live', 'polite'); }, 0);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
