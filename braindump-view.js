/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   braindump-view.js

   Brain dumps inside Mastery OS (#s-dumps, mounted in #dumpMount).

   Data: bio004-braindump-practice-data.js (window.BIO004_DUMP_PRACTICE)
     modules[] -> topics[] -> prompts[]
     prompt = { id, lv (1 Name it, 2 Explain it, 3 Apply it), comps
                (competency packet numbers), cids (Mastery OS competency
                ids), t, p, k: [ { pt: key point, why: why it belongs } ] }

   Levels work like recall: in each topic Level 1 is open, Level 2
   opens once the student has checked two or more Level 1 dumps there
   and averaged about 80 percent, and Level 3 opens the same way from
   Level 2. A switch shows every level.

   Scores: each "Check your answer" save writes one entry per
   competency into the shared evidence store (mastery-evidence.js,
   source 'dump'), which is what My weak areas reads. This file also
   keeps its own small history for the level rule:
     localStorage['bio004-dump-levels-v1'] = { runs: { promptId: [ {at, got, of, conf} ] }, prefs: {...} }
   Nothing leaves the browser.

   Links: #s-dumps?comp=<Mastery OS id> opens the dumps for one
   competency. window.BIO004_DUMP_HAS(id) tells My weak areas whether
   a competency has any dumps; window.BIO004_DUMP_OPEN(id) opens them.
   ============================================================ */
(function () {
  'use strict';
  var KEY = 'bio004-dump-levels-v1';
  var D = window.BIO004_DUMP_PRACTICE;
  var LV = { 1: 'Level 1, Name it', 2: 'Level 2, Explain it', 3: 'Level 3, Apply it' };
  var PASS = 0.8, MIN_RUNS = 2;

  /* ---------- index ---------- */
  var ALL = [], BYID = {}, BYCID = {};
  if (D && D.modules) {
    D.modules.forEach(function (m) {
      (m.topics || []).forEach(function (t) {
        (t.prompts || []).forEach(function (p) {
          var e = { p: p, t: t, m: m };
          ALL.push(e); BYID[p.id] = e;
          (p.cids || []).forEach(function (c) { (BYCID[c] = BYCID[c] || []).push(e); });
        });
      });
    });
  }
  window.BIO004_DUMP_HAS = function (cid) { return !!(BYCID[cid] && BYCID[cid].length); };

  /* ---------- storage ---------- */
  function load() {
    try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && s.runs) return s; } catch (e) {}
    return { runs: {}, prefs: {} };
  }
  var ST = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(ST)); } catch (e) {} }
  function pref(k, d) { return (ST.prefs && ST.prefs[k] != null) ? ST.prefs[k] : d; }
  function setPref(k, v) { ST.prefs = ST.prefs || {}; ST.prefs[k] = v; save(); }

  /* ---------- level rule ---------- */
  function topicLevelStats(t, lv) {
    var runs = 0, got = 0, of = 0;
    (t.prompts || []).forEach(function (p) {
      if (p.lv !== lv) return;
      (ST.runs[p.id] || []).forEach(function (r) { runs++; got += r.got; of += r.of; });
    });
    return { runs: runs, pct: of ? got / of : 0 };
  }
  function isOpen(t, lv) {
    if (pref('mode', 'levelup') === 'all' || lv <= 1) return true;
    var s = topicLevelStats(t, lv - 1);
    return isOpen(t, lv - 1) && s.runs >= MIN_RUNS && s.pct >= PASS;
  }
  function prompts(t, lv) { return (t.prompts || []).filter(function (p) { return p.lv === lv; }); }

  /* ---------- helpers ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function todayISO() { var d = new Date(); function p(n) { return (n < 10 ? '0' : '') + n; } return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); }
  function secKey() { var s = null; try { s = localStorage.getItem('bio004-section'); } catch (e) {} return s === 'mw' ? 'mw' : (s ? 'tr' : 'mw'); }
  function taught(t) { var d = t[secKey()]; return d && d <= todayISO(); }
  function moduleNow() {
    var n = D && D.modules && D.modules[0] ? D.modules[0].n : 1;
    (D && D.modules || []).forEach(function (m) { if ((m.topics || []).some(taught)) n = Math.max(n, m.n); });
    return n;
  }
  function hashParam(k) { var q = (location.hash || '').split('?')[1] || ''; var m = q.match(new RegExp('(?:^|&)' + k + '=([^&]+)')); return m ? decodeURIComponent(m[1]) : null; }
  function compLine(p) { var c = p.comps || []; return c.length ? (c.length > 1 ? 'Competencies ' : 'Competency ') + c.join(', ') : ''; }

  /* ---------- styles ---------- */
  var CSS = ''
    + '.bd-bar{display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center;margin:6px 0 14px}'
    + '.bd-tabs{display:flex;flex-wrap:wrap;gap:6px}'
    + '.bd-tabs button[aria-pressed="true"]{background:var(--navy);color:#fff;border-color:var(--navy)}'
    + '.bd-opt{display:flex;gap:6px;align-items:center;font-size:13.5px;color:var(--ink-soft)}'
    + '.bd-opt select{font:inherit;padding:5px 8px;border:1px solid var(--line);border-radius:8px;background:#fff;color:var(--navy)}'
    + '.bd-topic{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;padding:12px 14px;border-bottom:1px solid var(--line-soft)}'
    + '.bd-topic:last-child{border-bottom:0}'
    + '.bd-topic h3{font-size:15px;margin:0 0 4px;color:var(--navy)}'
    + '.bd-lvls{display:flex;flex-wrap:wrap;gap:6px;font-size:12.5px}'
    + '.bd-lv{padding:3px 9px;border-radius:999px;border:1px solid var(--line);color:var(--ink-soft)}'
    + '.bd-lv.open{border-color:var(--navy);color:var(--navy);font-weight:700}'
    + '.bd-lv.done{background:#EDF1F3;border-color:var(--navy);color:var(--navy)}'
    + '.bd-run{padding:18px 20px}'
    + '.bd-meta{font:700 11px var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--terra-dark);margin:0 0 6px}'
    + '.bd-prompt{font-size:17px;line-height:1.5;color:var(--navy);margin:4px 0 12px}'
    + '.bd-timer{display:flex;gap:10px;align-items:center;margin:0 0 12px;font-size:14px}'
    + '.bd-timer b{font-variant-numeric:tabular-nums;font-size:18px;color:var(--navy);min-width:52px}'
    + '.bd-run textarea{width:100%;min-height:150px;font:inherit;font-size:15px;padding:10px 12px;border:1px solid var(--line);border-radius:10px;box-sizing:border-box}'
    + '.bd-conf{border:0;padding:0;margin:12px 0}'
    + '.bd-conf legend{font-weight:700;color:var(--navy);margin-bottom:6px}'
    + '.bd-conf label{display:inline-flex;gap:6px;align-items:center;margin:0 14px 6px 0;font-size:14.5px}'
    + '.bd-keys{list-style:none;margin:10px 0;padding:0}'
    + '.bd-keys li{padding:9px 0;border-bottom:1px dotted var(--line)}'
    + '.bd-keys label{display:flex;gap:10px;align-items:flex-start;font-weight:700;color:var(--navy);font-size:15px}'
    + '.bd-keys input{margin-top:4px;width:18px;height:18px;flex:none}'
    + '.bd-keys .why{margin:3px 0 0 28px;font-size:14px;color:var(--ink-soft);line-height:1.45}'
    + '.bd-acts{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}'
    + '.bd-result{margin-top:12px;font-size:15px;color:var(--navy)}'
    + '.bd-vh{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}';
  function css() { if ($('#bd-css')) return; var st = document.createElement('style'); st.id = 'bd-css'; st.textContent = CSS; document.head.appendChild(st); }

  /* ---------- state ---------- */
  var view = 'topics', mod = null, cur = null, compFilter = null, timer = null, left = 0;
  function host() { return $('#dumpMount'); }
  function say(msg) { var l = $('#bd-live'); if (l) { l.textContent = ''; setTimeout(function () { l.textContent = msg; }, 30); } }

  /* ---------- topic list ---------- */
  function bar() {
    var tabs = (D.modules || []).map(function (m) {
      return '<button type="button" class="btn" data-bdmod="' + m.n + '" aria-pressed="' + (m.n === mod && !compFilter) + '">Module ' + m.n + '</button>';
    }).join('');
    return '<div class="bd-bar"><div class="bd-tabs" role="group" aria-label="Module">' + tabs + '</div>'
      + '<label class="bd-opt" for="bd-mode">Levels <select id="bd-mode"><option value="levelup"' + (pref('mode', 'levelup') === 'levelup' ? ' selected' : '') + '>Level up</option>'
      + '<option value="all"' + (pref('mode', 'levelup') === 'all' ? ' selected' : '') + '>Show all levels</option></select></label>'
      + '<label class="bd-opt" for="bd-mins">Timer <select id="bd-mins">' + [0, 3, 5, 8].map(function (n) {
          return '<option value="' + n + '"' + (pref('mins', 5) === n ? ' selected' : '') + '>' + (n ? n + ' minutes' : 'No timer') + '</option>';
        }).join('') + '</select></label></div>';
  }
  function lvChip(t, lv) {
    var n = prompts(t, lv).length; if (!n) return '';
    var open = isOpen(t, lv), s = topicLevelStats(t, lv);
    var done = s.runs >= MIN_RUNS && s.pct >= PASS;
    var label = LV[lv].split(', ')[0] + (open ? (done ? ' done' : ' open') : ' locked');
    return '<span class="bd-lv' + (open ? ' open' : '') + (done ? ' done' : '') + '">' + label + ' (' + n + ')</span>';
  }
  function topicRows(list) {
    return list.map(function (t) {
      return '<div class="bd-topic"><div><h3>' + esc(t.title) + (taught(t) ? '' : ' <span class="bd-lv">Coming up</span>') + '</h3>'
        + '<div class="bd-lvls">' + lvChip(t, 1) + lvChip(t, 2) + lvChip(t, 3) + '</div></div>'
        + '<button type="button" class="btn rust" data-bdstart="' + esc(t.id) + '">Start</button></div>';
    }).join('');
  }
  function renderTopics() {
    view = 'topics';
    var M = (D.modules || []).filter(function (m) { return m.n === mod; })[0] || D.modules[0];
    var body;
    if (compFilter) {
      var list = BYCID[compFilter] || [], tops = [], seen = {};
      list.forEach(function (e) { if (!seen[e.t.id]) { seen[e.t.id] = 1; tops.push(e.t); } });
      var name = compFilter;
      (window.BIO004_COMPETENCIES || []).forEach(function (c) { if (c.id === compFilter) name = c.name; });
      body = '<p class="note">Brain dumps for <b>' + esc(name) + '</b>. <button type="button" class="btn" data-bdclear>Show every topic</button></p>'
        + '<div class="card">' + (tops.length ? topicRows(tops) : '<p class="note" style="padding:14px">No brain dumps for this one yet.</p>') + '</div>';
    } else {
      body = '<div class="card">' + topicRows(M.topics || []) + '</div>';
    }
    host().innerHTML = bar() + body + '<p class="bd-vh" id="bd-live" aria-live="polite"></p>';
  }

  /* ---------- picking a prompt ---------- */
  function pick(t) {
    var mine = compFilter ? (BYCID[compFilter] || []).filter(function (e) { return e.t.id === t.id; }).map(function (e) { return e.p; }) : (t.prompts || []);
    var open = mine.filter(function (p) { return isOpen(t, p.lv); });
    if (!open.length) open = mine.filter(function (p) { return p.lv === 1; });
    if (!open.length) return null;
    /* the highest open level not yet done, then prompts never tried, then the oldest */
    var levels = [1, 2, 3].filter(function (lv) { return open.some(function (p) { return p.lv === lv; }); });
    var top = levels[levels.length - 1];
    for (var i = 0; i < levels.length; i++) {
      var s = topicLevelStats(t, levels[i]);
      if (!(s.runs >= MIN_RUNS && s.pct >= PASS)) { top = levels[i]; break; }
    }
    var pool = open.filter(function (p) { return p.lv === top; });
    pool.sort(function (a, b) {
      var ra = ST.runs[a.id] || [], rb = ST.runs[b.id] || [];
      if (!ra.length !== !rb.length) return ra.length ? 1 : -1;
      var la = ra.length ? ra[ra.length - 1].at : '', lb = rb.length ? rb[rb.length - 1].at : '';
      return la < lb ? -1 : la > lb ? 1 : 0;
    });
    return pool[0];
  }

  /* ---------- run ---------- */
  function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }
  function fmt(s) { var m = Math.floor(s / 60), r = s % 60; return m + ':' + (r < 10 ? '0' : '') + r; }
  function renderRun(e) {
    view = 'run'; cur = e; stopTimer();
    var p = e.p, mins = pref('mins', 5);
    left = mins * 60;
    host().innerHTML = '<div class="card bd-run">'
      + '<p class="bd-meta">' + esc(LV[p.lv]) + '</p>'
      + '<p class="note note-short" style="margin:0 0 6px">' + esc(e.t.title) + ' &middot; ' + esc(compLine(p)) + '</p>'
      + '<h3 id="bd-h" tabindex="-1" style="margin:0;font-size:18px;color:var(--navy)">' + esc(p.t) + '</h3>'
      + '<p class="bd-prompt">' + esc(p.p) + '</p>'
      + (mins ? '<div class="bd-timer"><b id="bd-clock" aria-hidden="true">' + fmt(left) + '</b><button type="button" class="btn" id="bd-go">Start the clock</button></div>' : '')
      + '<label for="bd-text" style="font-weight:700;color:var(--navy)">Write it here, or on paper with your notes closed</label>'
      + '<textarea id="bd-text" autocomplete="off"></textarea>'
      + '<fieldset class="bd-conf"><legend>Before you check: how sure are you?</legend>'
      + '<label><input type="radio" name="bd-conf" value="high"> Sure</label>'
      + '<label><input type="radio" name="bd-conf" value="med"> Mostly</label>'
      + '<label><input type="radio" name="bd-conf" value="low"> Not really</label></fieldset>'
      + '<div class="bd-acts"><button type="button" class="btn rust" id="bd-check">Check your answer</button>'
      + '<button type="button" class="btn" data-bdback>Back to topics</button></div>'
      + '<div id="bd-key"></div></div><p class="bd-vh" id="bd-live" aria-live="polite"></p>';
    var h = $('#bd-h'); if (h) h.focus();
  }
  function renderKey() {
    var p = cur.p; stopTimer();
    var conf = (document.querySelector('input[name="bd-conf"]:checked') || {}).value;
    if (!conf) { say('Pick how sure you are first. It is part of your score.'); var f = document.querySelector('input[name="bd-conf"]'); if (f) f.focus(); return; }
    var items = (p.k || []).map(function (k, i) {
      return '<li><label for="bd-k' + i + '"><input type="checkbox" id="bd-k' + i + '" data-bdk="' + i + '">' + esc(k.pt) + '</label>'
        + (k.why ? '<p class="why">' + esc(k.why) + '</p>' : '') + '</li>';
    }).join('');
    $('#bd-key').innerHTML = '<h4 id="bd-kh" tabindex="-1" style="margin:16px 0 4px;color:var(--navy)">Check your answer</h4>'
      + '<p class="note note-short">Tick every point your dump has. Count it only if a classmate could see it in what you wrote or drew.</p>'
      + '<ul class="bd-keys">' + items + '</ul>'
      + '<div class="bd-acts"><button type="button" class="btn rust" id="bd-save">Save my score</button></div>'
      + '<div class="bd-result" id="bd-result" aria-live="polite"></div>';
    $('#bd-key').setAttribute('data-conf', conf);
    $('#bd-check').disabled = true;
    var kh = $('#bd-kh'); if (kh) kh.focus();
  }
  function saveScore() {
    var p = cur.p, t = cur.t, of = (p.k || []).length;
    var got = document.querySelectorAll('[data-bdk]:checked').length;
    var conf = $('#bd-key').getAttribute('data-conf') || null;
    var before = { 2: isOpen(t, 2), 3: isOpen(t, 3) };
    (ST.runs[p.id] = ST.runs[p.id] || []).push({ at: new Date().toISOString(), got: got, of: of, conf: conf });
    save();
    try { if (window.BIO004_EVIDENCE && p.cids && p.cids.length) window.BIO004_EVIDENCE.record(p.cids, 'dump', got, of, conf); } catch (e) {}
    var msg = 'You got ' + got + ' of ' + of + '. ';
    msg += got === of ? 'Every point is there.' : 'Add the missing points in a second color, then try it again tomorrow.';
    [2, 3].forEach(function (lv) { if (!before[lv] && isOpen(t, lv) && prompts(t, lv).length) msg += ' ' + LV[lv].split(', ')[0] + ' is now open for ' + t.title + '.'; });
    $('#bd-result').innerHTML = esc(msg) + '<div class="bd-acts"><button type="button" class="btn rust" id="bd-next">Next brain dump</button>'
      + '<button type="button" class="btn" data-bdback>Back to topics</button>'
      + '<a class="btn" href="#s-weak">My weak areas</a></div>';
    $('#bd-save').disabled = true;
    if (window.renderWeakness) { try { window.renderWeakness(); } catch (e) {} }
  }

  /* ---------- events ---------- */
  function onClick(ev) {
    var h = host(); if (!h || !h.contains(ev.target)) return;
    var b = ev.target.closest('button,a'); if (!b) return;
    if (b.hasAttribute('data-bdmod')) { mod = +b.getAttribute('data-bdmod'); compFilter = null; setPref('module', mod); renderTopics(); return; }
    if (b.hasAttribute('data-bdclear')) { compFilter = null; try { history.replaceState(null, '', '#s-dumps'); } catch (e) {} renderTopics(); return; }
    if (b.hasAttribute('data-bdstart')) {
      var id = b.getAttribute('data-bdstart'), t = null;
      ALL.some(function (e) { if (e.t.id === id) { t = e.t; return true; } return false; });
      var p = t && pick(t);
      if (p) renderRun(BYID[p.id]); else say('No brain dump is open in this topic yet.');
      return;
    }
    if (b.hasAttribute('data-bdback')) { stopTimer(); renderTopics(); return; }
    if (b.id === 'bd-go') {
      if (timer) { stopTimer(); b.textContent = 'Start the clock'; say('Clock paused.'); return; }
      b.textContent = 'Pause'; say('Clock started.');
      timer = setInterval(function () {
        left = Math.max(0, left - 1);
        var c = $('#bd-clock'); if (c) c.textContent = fmt(left);
        if (left === 60) say('One minute left.');
        if (!left) { stopTimer(); var g = $('#bd-go'); if (g) g.textContent = 'Time'; say('Time. Now check your answer.'); }
      }, 1000);
      return;
    }
    if (b.id === 'bd-check') { renderKey(); return; }
    if (b.id === 'bd-save') { saveScore(); return; }
    if (b.id === 'bd-next') { var n = pick(cur.t); if (n) renderRun(BYID[n.id]); else renderTopics(); return; }
  }
  function onChange(ev) {
    if (ev.target.id === 'bd-mode') { setPref('mode', ev.target.value); renderTopics(); }
    if (ev.target.id === 'bd-mins') { setPref('mins', +ev.target.value); }
  }
  function route() {
    var id = (location.hash || '').replace('#', '').split('?')[0];
    if (id !== 's-dumps' || !host()) return;
    var c = hashParam('comp');
    if (c) { compFilter = c; renderTopics(); }
    else if (view !== 'run') { renderTopics(); }
  }
  window.BIO004_DUMP_OPEN = function (cid) { compFilter = cid || null; location.hash = 's-dumps' + (cid ? '?comp=' + encodeURIComponent(cid) : ''); renderTopics(); };

  function init() {
    if (!host()) return;
    if (!D || !D.modules || !ALL.length) { host().innerHTML = '<p class="note">The brain dumps did not load. Check that bio004-braindump-practice-data.js is on the page before this script.</p>'; return; }
    css();
    mod = pref('module', null) || moduleNow();
    document.addEventListener('click', onClick);
    document.addEventListener('change', onChange);
    window.addEventListener('hashchange', route);
    var c = hashParam('comp');
    if ((location.hash || '').indexOf('#s-dumps') === 0 && c) compFilter = c;
    renderTopics();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
