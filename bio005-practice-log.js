/* ============================================================
   BIO 005 Human Physiology, Fall 2026
   bio005-practice-log.js

   The shared store behind the weekly practice log.

   WHAT THIS IS FOR
   Scrubs is building a practice exam generator. Every time a student
   runs it, this file records what they ran, when, and how they did.
   The student prints the log as a PDF once a week and uploads it.
   The upload carries no points and the scores are never graded. It
   exists so she can see, before a midterm rather than after it, who is
   practicing and whether their scores are moving.

   HOW THE GENERATOR PLUGS IN
   Load this file, then call record() once when an attempt finishes:

       <script src="bio005-practice-log.js"></script>
       ...
       BIO005_PRACTICE_LOG.record({
         week:  4,             // 1 to 15, or omit for a cumulative run
         mode:  'weekly',      // 'weekly' | 'gapfinder' | 'cumulative'
         score: 14,            // number correct
         total: 20,            // number asked
         topic: 'Membrane transport'   // optional, free text
       });

   That is the whole integration. record() timestamps the entry, works
   out the percentage, stores it, and returns the saved entry. It never
   throws: a browser with storage disabled gets a no-op and the
   generator carries on, because a broken log must never break a
   student's practice session.

   STORAGE
       localStorage['bio005-practice-log-v1']

   NAMESPACED ON PURPOSE. BIO 004 Human Anatomy is served from the same
   drsrennie-stack.github.io origin, and localStorage is scoped to the
   origin and not the path. An unprefixed key is how anatomy
   competencies once turned up inside the physiology Mastery OS. Every
   key this course writes starts with 'bio005-'.

   WHAT THIS IS NOT
   Not a gradebook and not a proof of anything. The data lives in one
   browser on one device, a student can edit or clear it, and entries
   can be added by hand. That is fine. Nobody is graded on it, so
   there is nothing to defend against. A student who studies on a
   laptop and a phone will have two partial logs, and the log page
   says so in plain language.
   ============================================================ */
(function (root) {
  'use strict';

  var KEY = 'bio005-practice-log-v1';
  var MAX = 500;               /* a term of heavy use is nowhere near this */
  var MODES = {
    weekly:     'Weekly practice exam',
    gapfinder:  'Gap finder',
    cumulative: 'Cumulative review'
  };

  function safe(fn, dflt) {
    try { return fn(); } catch (e) { return dflt; }
  }

  function load() {
    var raw = safe(function () { return root.localStorage.getItem(KEY); }, null);
    if (!raw) return [];
    var list = safe(function () { return JSON.parse(raw); }, null);
    return (list && list.length !== undefined) ? list : [];
  }

  function save(list) {
    return safe(function () {
      root.localStorage.setItem(KEY, JSON.stringify(list.slice(-MAX)));
      return true;
    }, false);
  }

  function pct(score, total) {
    if (!total || total <= 0) return null;
    return Math.round((score / total) * 1000) / 10;   /* one decimal */
  }

  /* An id that survives a merge of two devices' logs without collisions. */
  function newId() {
    return 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  function normalizeMode(m) {
    m = String(m || '').toLowerCase().replace(/[\s_-]/g, '');
    if (m === 'gapfinder' || m === 'gap') return 'gapfinder';
    if (m === 'cumulative' || m === 'cume' || m === 'final') return 'cumulative';
    return 'weekly';
  }

  function record(entry) {
    entry = entry || {};
    var total = Number(entry.total) || 0;
    var score = Number(entry.score) || 0;
    if (total > 0 && score > total) score = total;   /* never over 100% */

    var wk = parseInt(entry.week, 10);
    var row = {
      id:    entry.id || newId(),
      at:    entry.at || new Date().toISOString(),
      week:  (wk >= 1 && wk <= 15) ? wk : null,
      mode:  normalizeMode(entry.mode),
      score: score,
      total: total,
      pct:   pct(score, total),
      topic: String(entry.topic || '').slice(0, 120),
      hand:  !!entry.hand            /* true when typed in by the student */
    };

    var list = load();
    list.push(row);
    save(list);
    return row;
  }

  function all() {
    return load().slice().sort(function (a, b) {
      return String(a.at) < String(b.at) ? -1 : 1;
    });
  }

  function remove(id) {
    var list = load().filter(function (r) { return r.id !== id; });
    return save(list);
  }

  function clear() {
    return safe(function () { root.localStorage.removeItem(KEY); return true; }, false);
  }

  /* Merge a log exported from another device. Same id wins once, so
     importing the same file twice does not double the entries. */
  function merge(rows) {
    if (!rows || !rows.length) return 0;
    var list = load();
    var seen = {};
    list.forEach(function (r) { seen[r.id] = true; });
    var added = 0;
    rows.forEach(function (r) {
      if (r && r.id && !seen[r.id]) { list.push(r); seen[r.id] = true; added++; }
    });
    if (added) save(list);
    return added;
  }

  root.BIO005_PRACTICE_LOG = {
    KEY: KEY,
    MODES: MODES,
    record: record,
    all: all,
    remove: remove,
    clear: clear,
    merge: merge
  };
})(window);
