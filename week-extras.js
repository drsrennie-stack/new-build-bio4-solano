/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   week-extras.js

   Adds the lab block and the study block to a week page.

   These used to live only on the week hub pages, which were a
   second, older set of seventeen pages with their dates typed in
   by hand. The hubs are gone. This rebuilds what they carried, on
   the page students actually use, and it reads the same two files
   everything else reads, so it cannot drift.

   Sources
     window.BIO004_SESSIONS      schedule-fall2026.js, the dates
     window.BIO004_SESSION_LINKS session-links.js, what belongs to
                                 each date

   Wire a page like this, after schedule-fall2026.js and
   session-links.js, and give the placeholder the week number:

     <section class="card" data-week-extras="5"></section>
     <script src="session-links.js"></script>
     <script src="week-extras.js"></script>

   If either source is missing, or the week has nothing in lab,
   the placeholder is left empty and nothing else on the page
   changes.
   ============================================================ */

(function () {
  'use strict';

  var KEY = 'bio004-section';
  var TRACK = { 'mw': 'mw', 'tr-am': 'tr', 'tr-eve': 'tr' };

  function section() {
    var s = null;
    try {
      var m = location.search.match(/[?&]sec=([^&#]+)/);
      if (m) s = decodeURIComponent(m[1]);
    } catch (e) {}
    if (!TRACK[s]) { try { s = localStorage.getItem(KEY); } catch (e) { s = null; } }
    return TRACK[s] ? s : null;
  }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* One deduplicated list per kind across the week's class days,
     in the order the days fall. */
  function gather(week, track) {
    var sessions = (window.BIO004_SESSIONS || {})[track] || [];
    var links = window.BIO004_SESSION_LINKS || {};
    var out = { lab: [], notes: [], workbooks: [], slides: [] };
    var seen = {};
    sessions.forEach(function (s) {
      if (s.wk !== week) return;
      var day = links[s.date];
      if (!day) return;
      ['lab', 'notes', 'workbooks'].forEach(function (k) {
        (day[k] || []).forEach(function (item) {
          var id = k + '|' + item.u;
          if (seen[id]) return;
          seen[id] = 1;
          out[k].push(item);
        });
      });
      if (day.slides && !seen['slides|' + day.slides.u]) {
        seen['slides|' + day.slides.u] = 1;
        out.slides.push(day.slides);
      }
    });
    return out;
  }

  function linkRow(item, sub) {
    var a = el('a', 'lk');
    a.href = item.u;
    a.setAttribute('target', '_top');
    var ic = el('span', 'lk-ic', '&#9656;');
    ic.setAttribute('aria-hidden', 'true');
    a.appendChild(ic);
    var w = el('span', 'lk-w');
    w.appendChild(el('span', 'lk-t', item.t));
    if (sub) w.appendChild(el('span', 'lk-s', sub));
    a.appendChild(w);
    return a;
  }

  function build(host, week) {
    var track = TRACK[section()] || 'mw';
    var data = gather(week, track);

    if (!data.lab.length && !data.notes.length && !data.workbooks.length) return;

    host.innerHTML = '';
    host.appendChild(el('h2', null,
      '<span class="n">In lab this week</span>What you will be tested on at the bench'));

    host.appendChild(el('p', 'note',
      'Each lab sprint lists every structure you are responsible for at that station, along with '
      + 'the kind of question I am likely to ask about it. Read through the sprint before lab so '
      + 'the names are already familiar, then use it again afterward to find the ones you could '
      + 'not name without looking.'));

    var wrap = el('div', 'prework');
    data.lab.forEach(function (i) { wrap.appendChild(linkRow(i, 'Lab sprint')); });
    data.notes.forEach(function (i) { wrap.appendChild(linkRow(i, 'Notes')); });
    data.workbooks.forEach(function (i) { wrap.appendChild(linkRow(i, 'Practice questions')); });
    data.slides.forEach(function (i) { wrap.appendChild(linkRow(i, 'Slides')); });
    host.appendChild(wrap);

    host.appendChild(el('p', 'note',
      'Working through a lab list goes faster with other people. '
      + '<a href="study-session-signup.html" target="_top">Join a study session</a> or start one '
      + 'of your own, and bring this list with you.'));
  }

  function run() {
    var hosts = document.querySelectorAll('[data-week-extras]');
    for (var i = 0; i < hosts.length; i++) {
      var w = parseInt(hosts[i].getAttribute('data-week-extras'), 10);
      if (w) { try { build(hosts[i], w); } catch (e) {} }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
