/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   recall-view.js   (Recall Rx, v3, October 2026)

   Spaced recall, running inside Mastery OS on the one bank in
   bio004-card-bank.js.

   WHAT CHANGED IN v3
   ------------------
   Students said the recall cards stopped teaching after the first
   module: from the heart onward most cards had no answer choices
   and no explanation. The bank was rebuilt (see the header of
   bio004-card-bank.js) so every card now has four choices, a
   teaching explanation of the right answer (why), and a note on
   every choice (notes) saying what it actually is and when it
   would be the right answer. This file shows all of that after a
   student answers.

   The bank is now organized by Module 1 to 5, with topics in the
   order they are taught. Students choose a module, then check the
   topics they want in the session. Each topic carries its first
   class date for the Mon/Wed and Tue/Thu sections, so the picker
   marks what has been taught and pre-selects it.

   KEYS, so nobody's history is lost
   ---------------------------------
   Cards carried over from the old bank keep their old topic and
   card ids as lt and lid. Spacing progress, the odometer and the
   Mastery OS feed are all keyed on lt:lid, exactly as before.
   New cards use their own topic and id.

   Deep links:
     #s-recall            open recall
     #s-recall?comp=ID    open recall filtered to one competency
     ?comp=ID             same, from an external link
     ?module=3 or #s-recall?module=3   open on a module

   Nothing here runs on a timer. A student sets the pace.
   ============================================================ */

(function () {
  'use strict';

  var MOUNT = 'recallMount';
  var SKEY  = 'bio004-recall-progress';   // this engine's own spacing state
  var VKEY  = 'bio004-recall-v2';         // the feed Mastery OS already reads
  var OKEY  = 'bio004-card-odometer';     // lifetime rep counter
  var TKEY  = 'bio004-recall-topics';     // the student's topic checkboxes
  var SECKEY = 'bio004-section';          // site-wide section choice (raw string)

  /* ---------- the odometer ---------- */
  var RANKS = [
    [100,'First Incision'],[500,'Dissector'],[1000,'Prosector'],
    [2500,'Anatomist'],[5000,'Master Anatomist'],[10000,'Cadaver Whisperer'],
    [20000,'Vesalius Tier'],[50000,'Legend of the Lab']
  ];
  function odRead() {
    try { return JSON.parse(localStorage.getItem(OKEY)) || { total: 0, cards: {}, days: {} }; }
    catch (e) { return { total: 0, cards: {}, days: {} }; }
  }
  function odBump(entry) {
    try {
      var od = odRead();
      od.total++;
      od.cards[entry.key] = (od.cards[entry.key] || 0) + 1;
      var d = today();
      od.days[d] = (od.days[d] || 0) + 1;
      var ks = Object.keys(od.days);
      if (ks.length > 400) { ks.sort(); delete od.days[ks[0]]; }
      localStorage.setItem(OKEY, JSON.stringify(od));
    } catch (e) {}
  }
  function fmtNum(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  function odRank(total) {
    var cur = null, next = null;
    for (var i = 0; i < RANKS.length; i++) {
      if (total >= RANKS[i][0]) cur = RANKS[i];
      else { next = RANKS[i]; break; }
    }
    return { cur: cur, next: next };
  }

  /* Leitner-style spacing, in days. Right moves a card out a box,
     wrong sends it back to the start so it returns tomorrow. */
  var BOX_DAYS = [0, 1, 3, 7, 16, 35];
  var GAP_PER_TOPIC = 2;

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }
  function today() {
    var d = new Date(), p = function (n) { return (n < 10 ? '0' : '') + n; };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }
  function addDays(iso, n) {
    var p = iso.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2]);
    d.setDate(d.getDate() + n);
    var q = function (x) { return (x < 10 ? '0' : '') + x; };
    return d.getFullYear() + '-' + q(d.getMonth() + 1) + '-' + q(d.getDate());
  }
  var MON = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  function fmtDate(iso) { if (!iso) return ''; var p = iso.split('-'); return MON[+p[1] - 1] + ' ' + (+p[2]); }

  function load() { try { return JSON.parse(localStorage.getItem(SKEY)) || {}; } catch (e) { return {}; } }
  function save(p) { try { localStorage.setItem(SKEY, JSON.stringify(p)); } catch (e) {} }

  /* ---------- section, for "taught yet" ---------- */
  function track() {
    var s = null;
    try { s = localStorage.getItem(SECKEY); } catch (e) {}
    if (s === 'mw') return 'mw';
    if (s === 'tr-am' || s === 'tr-eve' || s === 'tr') return 'tr';
    return null;
  }
  function setTrack(t) {
    try { localStorage.setItem(SECKEY, t === 'mw' ? 'mw' : 'tr-am'); } catch (e) {}
  }
  function topicDate(t) {
    var tr = track();
    if (tr) return t[tr] || '';
    /* No section chosen yet: use the earlier of the two dates so a
       topic counts as taught as soon as any section has had it. */
    var a = t.mw || '', b = t.tr || '';
    if (!a) return b; if (!b) return a;
    return a < b ? a : b;
  }
  function topicStatus(t) {
    var d = topicDate(t);
    if (!d) return 'extra';
    var now = today();
    if (d < now) return 'done';
    if (d === now) return 'now';
    return 'soon';
  }

  /* ---------- feeding Mastery OS ----------
     Shape, exactly as the OS expects it:
       { topics: { <topicId>: { cards: { <cardId>: { history:[{correct,at}] } } } } }
     Written under the card's legacy topic and id when it has them, so
     the competency map and earlier history keep working. */
  function feedMasteryOS(entry, right) {
    var st;
    try { st = JSON.parse(localStorage.getItem(VKEY)) || {}; } catch (e) { st = {}; }
    if (!st.topics) st.topics = {};
    var t = st.topics[entry.feedTopic] || (st.topics[entry.feedTopic] = { cards: {} });
    if (!t.cards) t.cards = {};
    var card = t.cards[entry.feedCard] || (t.cards[entry.feedCard] = { history: [] });
    if (!card.history) card.history = [];
    card.history.push({ correct: !!right, at: today() });
    if (card.history.length > 20) card.history = card.history.slice(-20);
    try { localStorage.setItem(VKEY, JSON.stringify(st)); } catch (e) {}
    try {
      var ev;
      try { ev = new StorageEvent('storage', { key: 'bio004-progress', storageArea: localStorage }); }
      catch (e) { ev = document.createEvent('Event'); ev.initEvent('storage', false, false); ev.key = 'bio004-progress'; }
      window.dispatchEvent(ev);
    } catch (e) {}
  }

  /* ---------- the deck ---------- */
  var BANK = null;
  var MODS = [];       // bank modules, in order
  var TOPIC = {};      // topic id -> { t, m }
  var ALL = [];        // every card, flattened
  var progress = load();
  var queue = [], pos = 0, stage = 'conf', confidence = null, shown = null, picked = null;
  var runLog = [];
  var started = false;  // false shows the picker, true shows the session
  var filter = { comp: null, mode: 'due' };
  var NO_CARDS_FOR = null;
  var curMod = 0;
  var NOW_MOD = 0;        // the module class is in now
  var modsOpen = false;   // tabs view: other modules shown only on request
  var selected = {};    // topic id -> true

  function flatten() {
    BANK = window.BIO004_CARD_BANK || null;
    var out = [];
    MODS = []; TOPIC = {};
    if (!BANK || !BANK.modules) return out;
    BANK.modules.forEach(function (m) {
      MODS.push(m);
      (m.topics || []).forEach(function (t) {
        TOPIC[t.id] = { t: t, m: m };
        (t.cards || []).forEach(function (c, i) {
          var cid = c.id || String(i);
          out.push({
            key: c.lt ? c.lt + ':' + c.lid : t.id + ':' + cid,
            feedTopic: c.lt || t.id,
            feedCard: c.lt ? c.lid : cid,
            card: c, topicId: t.id, topicTitle: t.title,
            moduleId: m.id, moduleTitle: m.title, moduleN: m.n,
            mcq: Array.isArray(c.options) && typeof c.correctIndex === 'number'
          });
        });
      });
    });
    return out;
  }

  function compOf(entry) {
    var map = window.CARD_COMPETENCY_MAP || window.BIO004_CARD_COMPETENCY_MAP;
    if (entry.card.competencyId) return entry.card.competencyId;
    if (map) {
      var e = map[entry.key] || map[entry.feedTopic] || map[entry.topicId];
      if (e) return (e && e.comps) ? e.comps : e;
    }
    return null;
  }
  function isComp(entry, want) {
    var c = compOf(entry);
    if (!c) return false;
    return Array.isArray(c) ? c.indexOf(want) > -1 : c === want;
  }
  function due(entry) {
    var p = progress[entry.key];
    if (!p) return true;
    return !p.next || p.next <= today();
  }

  /* ---------- topic selection ---------- */
  function loadSel() {
    try { var s = JSON.parse(localStorage.getItem(TKEY)); if (s && typeof s === 'object') return s; } catch (e) {}
    return null;
  }
  function saveSel() { try { localStorage.setItem(TKEY, JSON.stringify(selected)); } catch (e) {} }
  function moduleNow() {
    var best = 0;
    MODS.forEach(function (m, i) {
      if (m.extra) return;
      if ((m.topics || []).some(function (t) { var s = topicStatus(t); return s === 'done' || s === 'now'; })) best = i;
    });
    return best;
  }
  function taughtIn(m) {
    return (m.topics || []).filter(function (t) { var s = topicStatus(t); return s === 'done' || s === 'now'; });
  }
  function selectTaughtIn(m) {
    (m.topics || []).forEach(function (t) { delete selected[t.id]; });
    taughtIn(m).forEach(function (t) { selected[t.id] = true; });
  }
  function selCount() { return Object.keys(selected).filter(function (k) { return selected[k] && TOPIC[k]; }).length; }
  function cardCount(ids) {
    var want = {}; ids.forEach(function (i) { want[i] = 1; });
    var n = 0; ALL.forEach(function (e) { if (want[e.topicId]) n++; }); return n;
  }
  function selectedIds() { return Object.keys(selected).filter(function (k) { return selected[k] && TOPIC[k]; }); }

  function build() {
    var ids = {}; selectedIds().forEach(function (k) { ids[k] = 1; });
    var pool = ALL.filter(function (e) {
      if (filter.comp) return isComp(e, filter.comp);
      return !!ids[e.topicId];
    });
    if (filter.mode === 'due') pool = pool.filter(due);
    if (filter.mode === 'missed') pool = pool.filter(function (e) {
      var p = progress[e.key]; return p && p.wrong > 0 && (p.box || 0) < 3;
    });
    if (filter.mode === 'gaps') pool = sampleAcross(pool, GAP_PER_TOPIC);
    shuffle(pool);
    return pool;
  }
  function sampleAcross(pool, perTopic) {
    var byTopic = {};
    pool.forEach(function (e) { (byTopic[e.topicId] = byTopic[e.topicId] || []).push(e); });
    var out = [];
    Object.keys(byTopic).forEach(function (id) {
      var cards = byTopic[id].slice();
      var unproven = cards.filter(function (e) { var p = progress[e.key]; return !p || (p.box || 0) < 3; });
      var rest     = cards.filter(function (e) { var p = progress[e.key]; return p && (p.box || 0) >= 3; });
      shuffle(unproven); shuffle(rest);
      out = out.concat(unproven.concat(rest).slice(0, perTopic));
    });
    return out;
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  /* Choices are shuffled every time a card is shown. Each choice keeps
     its own note, so the breakdown always matches what is on screen. */
  function presentOptions(card) {
    var pairs = card.options.map(function (text, i) {
      return { text: text, right: i === card.correctIndex, note: (card.notes && card.notes[i]) || '' };
    });
    shuffle(pairs);
    return pairs;
  }

  /* ---------- grading ---------- */
  function grade(entry, right) {
    var p = progress[entry.key] || { box: 0, right: 0, wrong: 0 };
    if (right) { p.right++; p.box = Math.min((p.box || 0) + 1, BOX_DAYS.length - 1); }
    else       { p.wrong++; p.box = 0; }
    p.conf = confidence;
    p.last = today();
    p.next = addDays(today(), BOX_DAYS[p.box]);
    if (!right && confidence === 'sure') p.blindspot = true;
    progress[entry.key] = p;
    save(progress);
    odBump(entry);
    feedMasteryOS(entry, right);
    runLog.push({ topicId: entry.topicId, topicTitle: entry.topicTitle, moduleTitle: entry.moduleTitle, right: !!right });
  }

  /* ---------- render: header ---------- */
  function stats() {
    var seen = 0, mastered = 0, shaky = 0, blind = 0;
    ALL.forEach(function (e) {
      var p = progress[e.key];
      if (!p) return;
      seen++;
      if ((p.box || 0) >= 3) mastered++;
      if (p.wrong > 0 && (p.box || 0) < 3) shaky++;
      if (p.blindspot) blind++;
    });
    return { seen: seen, mastered: mastered, shaky: shaky, blind: blind, total: ALL.length };
  }
  function head() {
    var s = stats(), od = odRead();
    var rk = odRank(od.total);
    var todayN = od.days[today()] || 0;
    return ''
      + '<div class="rv-odo" role="group" aria-label="Your card count">'
      +   '<span class="rv-odo-big">' + fmtNum(od.total) + '</span>'
      +   '<span>cards answered</span>'
      +   '<span><b>' + fmtNum(todayN) + '</b> today</span>'
      +   (s.shaky ? '<span><b>' + fmtNum(s.shaky) + '</b> still shaky</span>' : '')
      +   (s.blind ? '<span title="Cards you were sure of and got wrong. Give these extra time."><b>' + fmtNum(s.blind) + '</b> sure and wrong</span>' : '')
      +   (rk.next ? '<span class="rv-odo-sub">' + fmtNum(rk.next[0] - od.total) + ' to ' + esc(rk.next[1]) + '</span>' : '')
      +   '<span class="rv-odo-links"><a href="#s-weak" target="_top">My weak spots</a>'
      +   '<a href="bio004-card-leaderboard.html" target="_top">Leaderboard</a>'
      +   '<button type="button" class="rv-odo-disp" id="rv-disp-btn" aria-expanded="' + dispOpen + '" aria-controls="rv-disp">Display</button></span>'
      + '</div>';
  }

  /* ---------- display preferences ----------
     Students choose how recall looks: the topic list layout, how the
     answer explanations appear, and a light or dark theme. Saved in
     this browser only. */
  var DKEY = 'bio004-recall-display';
  var PICKERS = [['tabs', 'Tabs, one module at a time'], ['stack', 'All modules on one page'], ['timeline', 'Class-by-class timeline']];
  var THEMES = [['light', 'Light'], ['navy', 'Navy with white cards'], ['dark', 'Dark']];
  var CARDS = [['panel', 'Explanation panel below the choices'], ['inline', 'Explanation under each choice'],
               ['explore', 'Tap a choice to read about it'], ['flip', 'Flip the card over']];
  function loadDisp() {
    var d = null;
    try { d = JSON.parse(localStorage.getItem(DKEY)); } catch (e) {}
    d = d && typeof d === 'object' ? d : {};
    function pick(v, list, dflt) { for (var i = 0; i < list.length; i++) if (list[i][0] === v) return v; return dflt; }
    return { theme: pick(d.theme, THEMES, 'light'), picker: pick(d.picker, PICKERS, 'tabs'), card: pick(d.card, CARDS, 'panel') };
  }
  function saveDisp() { try { localStorage.setItem(DKEY, JSON.stringify(disp)); } catch (e) {} }
  var disp = loadDisp();
  var dispOpen = false;
  var openMods = null;   // stacked view: which modules are expanded
  var exploreAt = null;  // explore view: which choice is being read
  var flipped = false;   // flip view: showing the back

  function radios(name, list, cur, legend) {
    return '<fieldset class="rv-fs"><legend>' + esc(legend) + '</legend>' + list.map(function (o) {
      var id = 'rv-' + name + '-' + o[0];
      return '<label class="rv-radio" for="' + id + '"><input type="radio" id="' + id + '" name="rv-' + name + '" value="' + o[0] + '" data-disp="' + name + '"'
        + (cur === o[0] ? ' checked' : '') + '><span>' + esc(o[1]) + '</span></label>';
    }).join('') + '</fieldset>';
  }
  function secButtons() {
    var tr = track();
    return '<span class="rv-sec">'
      + '<button type="button" data-sec="mw" aria-pressed="' + (tr === 'mw') + '">Mon / Wed</button>'
      + '<button type="button" data-sec="tr" aria-pressed="' + (tr === 'tr') + '">Tue / Thu</button></span>';
  }
  function displayBar() {
    return ''
      + '<div class="rv-disp" id="rv-disp"' + (dispOpen ? '' : ' hidden') + '>'
      +   (track() ? '<fieldset class="rv-fs"><legend>My class days</legend>' + secButtons() + '</fieldset>' : '')
      +   radios('picker', PICKERS, disp.picker, 'How topics are listed')
      +   radios('card', CARDS, disp.card, 'How answers are explained')
      +   radios('theme', THEMES, disp.theme, 'Theme')
      + '</div>';
  }

  /* ---------- render: the topic picker ---------- */
  function chip(t) {
    var s = topicStatus(t), d = topicDate(t);
    if (s === 'done') return '<span class="rv-chip rv-done-chip">Taught ' + esc(fmtDate(d)) + '</span>';
    if (s === 'now')  return '<span class="rv-chip rv-now-chip">Today</span>';
    if (s === 'soon') return '<span class="rv-chip rv-soon-chip">Coming ' + esc(fmtDate(d)) + '</span>';
    return '<span class="rv-chip rv-soon-chip">Extra practice</span>';
  }
  function topicRow(t) {
    var s = topicStatus(t);
    return '<li><label class="rv-check' + (s === 'soon' ? ' is-soon' : '') + '" for="rv-t-' + esc(t.id) + '">'
      + '<input type="checkbox" id="rv-t-' + esc(t.id) + '" data-topic="' + esc(t.id) + '"' + (selected[t.id] ? ' checked' : '') + '>'
      + '<span class="rv-check-t">' + esc(t.title) + '<small>' + fmtNum((t.cards || []).length) + ' cards</small></span>'
      + chip(t) + '</label></li>';
  }
  function modLabel(mm) { return mm.extra ? 'More practice' : 'Module ' + mm.n; }
  function modCount(mm) { return (mm.topics || []).filter(function (t) { return selected[t.id]; }).length; }
  function quickRow(scope) {
    if (scope === 'all') {
      return '<div class="rv-quick"><span>Select:</span>'
        + '<button type="button" class="rv-link" data-quick="taught-all">Everything taught so far</button>'
        + '<button type="button" class="rv-link" data-quick="none-all">Clear everything</button></div>';
    }
    return '<div class="rv-quick"><span>Select:</span>'
      + '<button type="button" class="rv-link" data-quick="taught">Everything taught so far</button>'
      + '<button type="button" class="rv-link" data-quick="all">Whole module</button>'
      + '<button type="button" class="rv-link" data-quick="none">Clear this module</button></div>';
  }
  function pickTabs() {
    var m = MODS[curMod] || MODS[0];
    var tabs = MODS.map(function (mm, i) {
      var n = modCount(mm);
      return '<button type="button" class="rv-tab" role="tab" id="rv-tab-' + i + '" aria-selected="' + (i === curMod) + '"'
        + ' aria-controls="rv-topics" tabindex="' + (i === curMod ? '0' : '-1') + '" data-mod="' + i + '">'
        + esc(modLabel(mm)) + (n ? ' <span class="rv-tab-n">' + n + '</span>' : '') + '</button>';
    }).join('');
    /* Opens on this week's module. The other modules wait behind one
       button, so the first thing a student sees is what class is on. */
    var other = '<button type="button" class="rv-link rv-othermods" data-othermods="1" aria-expanded="' + modsOpen + '">'
      + (modsOpen ? 'Back to this week\'s module' : 'Study a different module') + '</button>';
    if (!modsOpen) {
      return '<div class="rv-tabpanel" id="rv-topics">'
        +   '<p class="rv-mod-title">' + esc(m.title) + (m.exam ? ' <span>· ' + esc(m.exam) + '</span>' : '')
        +     (curMod === NOW_MOD ? ' <span class="rv-chip rv-now-chip">This week</span>' : '') + '</p>'
        +   other + quickRow('mod')
        +   '<ul class="rv-list">' + (m.topics || []).map(topicRow).join('') + '</ul>'
        + '</div>';
    }
    return other + '<div class="rv-tabs" role="tablist" aria-label="Modules">' + tabs + '</div>'
      + '<div class="rv-tabpanel" id="rv-topics" role="tabpanel" aria-labelledby="rv-tab-' + curMod + '">'
      +   '<p class="rv-mod-title">' + esc(m.title) + (m.exam ? ' <span>· ' + esc(m.exam) + '</span>' : '') + '</p>'
      +   quickRow('mod')
      +   '<ul class="rv-list">' + (m.topics || []).map(topicRow).join('') + '</ul>'
      + '</div>';
  }
  function pickStack() {
    if (!openMods) { openMods = {}; openMods[curMod] = true; }
    return quickRow('all') + '<div class="rv-acc">' + MODS.map(function (mm, i) {
      var n = modCount(mm), all = (mm.topics || []).length;
      return '<div class="rv-accm' + (openMods[i] ? ' is-open' : '') + '">'
        + '<div class="rv-acch">'
        +   '<input type="checkbox" id="rv-m-' + i + '" data-modall="' + i + '"' + (n === all && all ? ' checked' : '')
        +     ' aria-label="Select every topic in ' + esc(mm.title) + '">'
        +   '<button type="button" class="rv-accbtn" data-open="' + i + '" aria-expanded="' + !!openMods[i] + '" aria-controls="rv-accp-' + i + '">'
        +     '<span class="rv-acct">' + esc(mm.title) + '<small>' + n + ' of ' + all + ' topics checked' + (mm.exam ? ' · ' + esc(mm.exam) : '') + '</small></span>'
        +     '<span class="rv-caret" aria-hidden="true">&#9656;</span></button>'
        + '</div>'
        + '<ul class="rv-list rv-accp" id="rv-accp-' + i + '"' + (openMods[i] ? '' : ' hidden') + '>' + (mm.topics || []).map(topicRow).join('') + '</ul>'
        + '</div>';
    }).join('') + '</div>';
  }
  function pickTimeline() {
    var m = MODS[curMod] || MODS[0];
    var opts = MODS.map(function (mm, i) {
      return '<option value="' + i + '"' + (i === curMod ? ' selected' : '') + '>' + esc(mm.title) + '</option>';
    }).join('');
    var rows = (m.topics || []).map(function (t) {
      var s = topicStatus(t), d = topicDate(t);
      var word = s === 'done' ? 'Taught' : s === 'now' ? 'Today' : s === 'soon' ? 'Coming up' : 'Extra practice';
      return '<li class="rv-tl-' + s + '"><span class="rv-tl-date">' + esc(d ? fmtDate(d) : '') + '</span>'
        + '<span class="rv-tl-rail" aria-hidden="true"><span class="rv-tl-dot"></span></span>'
        + '<label class="rv-tl-node" for="rv-t-' + esc(t.id) + '"><input type="checkbox" id="rv-t-' + esc(t.id) + '" data-topic="' + esc(t.id) + '"'
        + (selected[t.id] ? ' checked' : '') + '><span class="rv-check-t">' + esc(t.title)
        + '<small>' + word + ' · ' + fmtNum((t.cards || []).length) + ' cards</small></span></label></li>';
    }).join('');
    return '<span class="rv-field"><label for="rv-modsel">Module</label><select id="rv-modsel">' + opts + '</select></span>'
      + quickRow('mod') + '<ol class="rv-tl">' + rows + '</ol>';
  }
  function picker() {
    var tr = track();
    var ids = selectedIds();
    var nCards = cardCount(ids);
    var nMods = {}; ids.forEach(function (k) { nMods[TOPIC[k].m.id] = 1; });
    var body = disp.picker === 'stack' ? pickStack() : disp.picker === 'timeline' ? pickTimeline() : pickTabs();
    return ''
      + '<div class="rv-picker">'
      + '<div class="rv-pick-head">'
      +   '<h3 class="rv-h">Choose what to study</h3>'
      /* asked once; after that it lives under Display */
      +   (tr ? '' : '<div class="rv-sec" role="group" aria-label="Your class days"><span>My class days:</span>' + secButtons() + '</div>')
      + '</div>'
      + body
      + '<div class="rv-startbar">'
      +   '<p class="rv-count" id="rv-count" aria-live="polite">'
      +     (ids.length ? fmtNum(ids.length) + ' topic' + (ids.length === 1 ? '' : 's') + ' from ' + Object.keys(nMods).length
              + ' module' + (Object.keys(nMods).length === 1 ? '' : 's') + ', ' + fmtNum(nCards) + ' cards'
            : 'No topics checked yet. Check at least one topic to start.') + '</p>'
      +   '<span class="rv-field"><label for="rv-mode">Show me</label>'
      +     '<select id="rv-mode">'
      +       '<option value="due"' + (filter.mode === 'due' ? ' selected' : '') + '>Cards due today</option>'
      +       '<option value="all"' + (filter.mode === 'all' ? ' selected' : '') + '>Every card in these topics</option>'
      +       '<option value="gaps"' + (filter.mode === 'gaps' ? ' selected' : '') + '>Find my gaps (2 per topic)</option>'
      +       '<option value="missed"' + (filter.mode === 'missed' ? ' selected' : '') + '>Ones I keep missing</option>'
      +     '</select></span>'
      +   '<button type="button" class="rv-btn rv-primary" id="rv-start"' + (ids.length ? '' : ' disabled') + '>Start session</button>'
      + '</div>'
      + '</div>';
  }

  /* ---------- render: a card ---------- */
  var DOKN = { 1: 'Recall', 2: 'Apply', 3: 'Reason' };
  var LET = 'ABCD';
  function rightIndex() { for (var i = 0; i < shown.length; i++) if (shown[i].right) return i; return -1; }
  function verdictHtml(c) {
    var ri = rightIndex(), right = picked === ri;
    return '<p class="rv-verdict">' + (right ? 'Correct.' : 'Not quite. The correct answer is “' + esc(ri > -1 ? shown[ri].text : c.a) + '.”')
      + (!right && confidence === 'sure' ? ' You were sure on this one, so it will come back tomorrow.' : '') + '</p>';
  }
  function whyHtml(c) {
    return '<div class="rv-why"><p class="rv-why-h">Why this answer is right</p><p>' + esc(c.why || c.explanation || '') + '</p></div>';
  }
  function optionsHtml(withNotes) {
    var answered = picked !== null;
    return '<ol class="rv-opts" aria-label="Answer choices">' + shown.map(function (o, i) {
      var cls = 'rv-opt', tag = '';
      if (answered) {
        if (o.right) { cls += ' is-right'; tag = '<span class="rv-tag">Correct answer</span>'; }
        else if (i === picked) { cls += ' is-wrong'; tag = '<span class="rv-tag">Your answer</span>'; }
      }
      var note = withNotes && answered ? '<p class="rv-inline-note">' + esc(o.right ? 'Correct. ' + (o.note.replace(/^correct\.?\s*/i, '')) : o.note) + '</p>' : '';
      return '<li><button type="button" class="' + cls + '" data-pick="' + i + '"' + (answered ? ' disabled' : '') + '>'
           + '<span class="rv-ltr" aria-hidden="true">' + LET[i] + '</span><span class="rv-opt-t">' + esc(o.text) + tag + '</span></button>' + note + '</li>';
    }).join('') + '</ol>';
  }
  function whyNotHtml() {
    var others = [];
    shown.forEach(function (o, i) { if (!o.right) others.push({ o: o, i: i }); });
    if (!others.some(function (x) { return x.o.note; })) return '';
    others.sort(function (a, b) { return (b.i === picked) - (a.i === picked); });
    return '<div class="rv-whynot"><p class="rv-whynot-h">Why not the others</p>' + others.map(function (x) {
      return '<div class="rv-wn"><p class="rv-wn-h">' + esc(x.o.text) + (x.i === picked ? ' <span class="rv-tag">Your answer</span>' : '') + '</p>'
           + '<p>' + esc(x.o.note) + '</p></div>';
    }).join('') + '</div>';
  }
  function exploreHtml(c) {
    var ri = rightIndex();
    var at = exploreAt == null ? (picked !== ri && picked > -1 ? picked : ri) : exploreAt;
    var o = shown[at];
    return '<div class="rv-explore"><p class="rv-whynot-h" id="rv-ex-h">Read about any choice</p>'
      + '<div class="rv-ptabs" role="tablist" aria-labelledby="rv-ex-h">' + shown.map(function (x, i) {
          return '<button type="button" class="rv-ptab" role="tab" id="rv-ptab-' + i + '" data-explore="' + i + '" aria-selected="' + (i === at) + '"'
            + ' aria-controls="rv-ppanel">' + LET[i]
            + (x.right ? ' <span class="rv-ptab-k">correct</span>' : i === picked ? ' <span class="rv-ptab-k">yours</span>' : '') + '</button>';
        }).join('') + '</div>'
      + '<div class="rv-ppanel" id="rv-ppanel" role="tabpanel" aria-labelledby="rv-ptab-' + at + '">'
      +   '<p class="rv-wn-h">' + esc(o.text) + '</p>'
      +   '<p>' + esc(o.right ? c.why || c.explanation || '' : o.note) + '</p></div></div>';
  }
  function flipBackHtml(c) {
    var ri = rightIndex();
    var order = [ri].concat(shown.map(function (x, i) { return i; }).filter(function (i) { return i !== ri; }));
    return '<div class="rv-flipback">' + verdictHtml(c) + '<div class="rv-minis">' + order.map(function (i) {
      var x = shown[i], r = i === ri;
      return '<div class="rv-mini' + (r ? ' is-right' : '') + '"><p class="rv-wn-h">'
        + (r ? 'Right answer: ' : i === picked ? 'Your answer: ' : 'Not this one: ') + esc(x.text) + '</p>'
        + '<p>' + esc(r ? c.why || c.explanation || '' : x.note) + '</p></div>';
    }).join('') + '</div>'
      + '<button type="button" class="rv-link" id="rv-flip">Show the question again</button></div>';
  }
  function cardHtml(e) {
    var c = e.card;
    var dok = c.dok ? Math.max(1, Math.min(3, +c.dok)) : 1;
    var body = '', isBack = false;
    if (stage === 'conf') {
      body = '<div class="rv-conf" role="group" aria-labelledby="rv-conf-h">'
           + '<p id="rv-conf-h" class="rv-conf-h">Before you see the choices, how sure are you?</p>'
           + '<div class="rv-conf-row">'
           +   '<button type="button" class="rv-btn rv-gold" data-conf="sure">I know this</button>'
           +   '<button type="button" class="rv-btn" data-conf="think">I think so</button>'
           +   '<button type="button" class="rv-btn" data-conf="no">Not yet</button>'
           + '</div></div>';
    } else if (e.mcq) {
      if (!shown) shown = presentOptions(c);
      var answered = picked !== null;
      if (!answered) body = optionsHtml(false);
      else if (disp.card === 'inline') body = optionsHtml(true) + verdictHtml(c) + whyHtml(c);
      else if (disp.card === 'explore') body = optionsHtml(false) + verdictHtml(c) + exploreHtml(c);
      else if (disp.card === 'flip') {
        if (flipped) { body = flipBackHtml(c); isBack = true; }
        else body = optionsHtml(false) + '<button type="button" class="rv-btn rv-gold" id="rv-flip">Flip to see why</button>';
      }
      else body = optionsHtml(false) + '<div class="rv-breakdown">' + verdictHtml(c) + whyHtml(c) + whyNotHtml() + '</div>';
    } else {
      body = '<div class="rv-why"><p class="rv-why-h">The answer</p><p>' + esc(c.a) + '</p>'
           + (c.explanation ? '<p>' + esc(c.explanation) + '</p>' : '') + '</div>'
           + '<div class="rv-conf-row"><button type="button" class="rv-btn rv-primary" data-self="1">I had it</button>'
           + '<button type="button" class="rv-btn" data-self="0">I did not</button></div>';
    }
    return ''
      + '<div class="rv-stage">'
      + '<article class="rv-card' + (isBack ? ' is-back' : '') + '" aria-labelledby="rv-q">'
      +   '<div class="rv-meta"><span class="rv-chip rv-done-chip">' + esc(e.moduleN ? 'Module ' + e.moduleN : 'More practice') + '</span>'
      +     '<span>' + esc(e.topicTitle || '') + '</span>'
      +     '<span class="rv-dok rv-d' + dok + '">' + esc(DOKN[dok]) + '</span>'
      +     '<span class="rv-of">Card ' + (pos + 1) + ' of ' + queue.length + '</span></div>'
      +   '<h3 class="rv-q" id="rv-q">' + esc(c.q) + '</h3>'
      +   body
      +   '<p class="rv-live" id="rv-live" role="status" aria-live="polite"></p>'
      +   (picked !== null || stage === 'self' ? '<div class="rv-nextrow"><button type="button" class="rv-btn rv-primary" id="rv-next">'
              + (pos + 1 >= queue.length ? 'Finish the session' : 'Next card') + '</button></div>' : '')
      + '</article>'
      + '<p class="rv-back"><button type="button" class="rv-link" id="rv-topicsbtn">Change topics</button></p>'
      + '</div>';
  }

  /* ---------- render: whole view ---------- */
  function render(focusSel) {
    var host = $(MOUNT);
    if (!host) return;
    if (!ALL.length) {
      host.innerHTML = '<p class="note">The card bank did not load. Check that bio004-card-bank.js is on the page before this script.</p>';
      return;
    }
    host.setAttribute('data-rv-theme', disp.theme);
    var inner = head() + displayBar();
    if (NO_CARDS_FOR) {
      var cs = window.BIO004_COMPETENCIES || [], hit = null;
      for (var ci = 0; ci < cs.length; ci++) { if (cs[ci].id === NO_CARDS_FOR) { hit = cs[ci]; break; } }
      inner += '<div class="rv-note"><h3>' + esc(hit ? hit.name : 'That one') + ' is not a card topic</h3>'
             + '<p>It is a specimen identification, so it is practiced at the cadaver or the microscope instead of by multiple choice. Choose topics below instead.</p></div>';
    }
    if (!started) {
      inner += picker();
    } else if (!queue.length) {
      inner += '<div class="rv-note"><h3>Nothing due in these topics right now</h3>'
             + '<p>That means the spacing is working. Cards come back just as they start to fade. To keep going anyway, change "Show me" to every card in these topics.</p>'
             + '<button type="button" class="rv-btn rv-primary" id="rv-topicsbtn">Back to topics</button></div>';
    } else if (pos >= queue.length) {
      inner += '<div class="rv-note"><h3>Session finished</h3>'
             + '<p>' + queue.length + ' card' + (queue.length === 1 ? '' : 's') + ' done. The ones you missed or found hard come back tomorrow.</p>'
             + report()
             + '<div class="rv-conf-row"><button type="button" class="rv-btn rv-primary" id="rv-again">Run these topics again</button>'
             + '<button type="button" class="rv-btn" id="rv-topicsbtn">Choose different topics</button></div>'
             + '<p>Your results also feed your <a href="#s-weak" target="_top">weakness dashboard</a>, which ranks the competencies you are missing.</p></div>';
    } else {
      inner += cardHtml(queue[pos]);
    }
    host.innerHTML = inner;
    MODS.forEach(function (mm, i) {
      var cb = host.querySelector('[data-modall="' + i + '"]');
      if (cb) { var n = modCount(mm); cb.indeterminate = n > 0 && n < (mm.topics || []).length; }
    });
    if (focusSel) { var f = host.querySelector(focusSel); if (f) f.focus(); }
  }

  function report() {
    if (runLog.length < 4) return '';
    var by = {};
    runLog.forEach(function (r) {
      var t = by[r.topicId] = by[r.topicId] || { title: r.topicTitle, mod: r.moduleTitle, n: 0, ok: 0 };
      t.n++; if (r.right) t.ok++;
    });
    var rows = Object.keys(by).map(function (id) { var t = by[id]; return { title: t.title, mod: t.mod, n: t.n, ok: t.ok, pct: t.ok / t.n }; });
    var weak = rows.filter(function (r) { return r.pct < 1; }).sort(function (a, b) { return a.pct - b.pct || b.n - a.n; });
    if (!weak.length) return '<div class="rv-report"><h4>Every topic came back clean</h4><p>Run it again and you will get different cards.</p></div>';
    return '<div class="rv-report"><h4>Topics to spend more time on</h4>'
      + '<ol class="rv-weak">' + weak.slice(0, 12).map(function (r) {
          return '<li><span class="rv-weak-t">' + esc(r.title) + '</span><span class="rv-weak-m">' + esc(r.mod || '') + '</span>'
               + '<span class="rv-weak-n">' + r.ok + ' of ' + r.n + '</span></li>';
        }).join('') + '</ol></div>';
  }

  function say(msg) { var l = $('rv-live'); if (l) l.textContent = msg; }

  function startRun() {
    queue = build(); pos = 0; stage = 'conf'; confidence = null; shown = null; picked = null; runLog = []; exploreAt = null; flipped = false;
    started = true;
    render('#rv-q');
    var sec = document.getElementById('s-recall') || $(MOUNT);
    if (sec && sec.scrollIntoView) { try { sec.scrollIntoView({ block: 'start' }); } catch (e) {} }
  }
  function next() { pos++; stage = 'conf'; confidence = null; shown = null; picked = null; exploreAt = null; flipped = false; render('#rv-q'); }

  /* ---------- events ---------- */
  function inMount(t) { var h = $(MOUNT); return h && h.contains(t); }

  function onClick(ev) {
    var t = ev.target.closest ? ev.target.closest('button') : null;
    if (!t || !inMount(t)) return;

    if (t.id === 'rv-disp-btn') { dispOpen = !dispOpen; render('#rv-disp-btn'); return; }
    if (t.hasAttribute('data-theme-set')) { disp.theme = t.getAttribute('data-theme-set'); saveDisp(); render('[data-theme-set="' + disp.theme + '"]'); return; }
    if (t.hasAttribute('data-open')) { var oi = +t.getAttribute('data-open'); openMods = openMods || {}; openMods[oi] = !openMods[oi]; render('[data-open="' + oi + '"]'); return; }
    if (t.hasAttribute('data-explore')) { exploreAt = +t.getAttribute('data-explore'); render('#rv-ptab-' + exploreAt); return; }
    if (t.id === 'rv-flip') { flipped = !flipped; render(flipped ? '.rv-verdict' : '#rv-flip'); return; }
    if (t.hasAttribute('data-othermods')) {
      modsOpen = !modsOpen; if (!modsOpen) curMod = NOW_MOD;
      render(modsOpen ? '#rv-tab-' + curMod : '[data-othermods]'); return;
    }
    if (t.hasAttribute('data-mod')) { curMod = +t.getAttribute('data-mod'); render('#rv-tab-' + curMod); return; }
    if (t.hasAttribute('data-sec')) { setTrack(t.getAttribute('data-sec')); render(); return; }
    if (t.hasAttribute('data-quick')) {
      var m = MODS[curMod], q = t.getAttribute('data-quick');
      (m.topics || []).forEach(function (x) { delete selected[x.id]; });
      if (q === 'all') (m.topics || []).forEach(function (x) { selected[x.id] = true; });
      if (q === 'taught') taughtIn(m).forEach(function (x) { selected[x.id] = true; });
      if (q === 'taught-all' || q === 'none-all') {
        selected = {};
        if (q === 'taught-all') MODS.forEach(function (mm) { if (!mm.extra) taughtIn(mm).forEach(function (x) { selected[x.id] = true; }); });
      }
      saveSel(); render('[data-quick="' + q + '"]'); return;
    }
    if (t.id === 'rv-start' || t.id === 'rv-again') { filter.comp = null; NO_CARDS_FOR = null; startRun(); return; }
    if (t.id === 'rv-topicsbtn') { started = false; filter.comp = null; render('#rv-tab-' + curMod); return; }
    if (t.id === 'rv-next') { next(); return; }

    var e = queue[pos];
    if (!e) return;
    if (t.hasAttribute('data-conf')) {
      confidence = t.getAttribute('data-conf');
      stage = e.mcq ? 'answer' : 'self';
      render('.rv-opt, [data-self]');
      say('Now choose your answer.');
      return;
    }
    if (t.hasAttribute('data-pick')) {
      if (picked !== null) return;
      picked = +t.getAttribute('data-pick');
      var right = !!shown[picked].right;
      grade(e, right);
      render(disp.card === 'flip' ? '#rv-flip' : '#rv-next');
      var rightOpt = null; shown.forEach(function (o) { if (o.right) rightOpt = o; });
      say((right ? 'Correct. ' : 'Not quite. The correct answer is ' + (rightOpt ? rightOpt.text : '') + '. ')
          + (disp.card === 'flip' ? 'Flip the card to read why.' : 'The explanation for every choice is below.'));
      return;
    }
    if (t.hasAttribute('data-self')) {
      grade(e, t.getAttribute('data-self') === '1');
      picked = -1; stage = 'self';
      render('#rv-next');
      return;
    }
  }

  function onChange(ev) {
    var t = ev.target;
    if (!inMount(t)) return;
    if (t.hasAttribute && t.hasAttribute('data-topic')) {
      var id = t.getAttribute('data-topic');
      if (t.checked) selected[id] = true; else delete selected[id];
      saveSel(); render('#rv-t-' + id); return;
    }
    if (t.id === 'rv-mode') { filter.mode = t.value; render('#rv-mode'); return; }
    if (t.id === 'rv-modsel') { curMod = +t.value; render('#rv-modsel'); return; }
    if (t.hasAttribute && t.hasAttribute('data-disp')) {
      disp[t.getAttribute('data-disp')] = t.value; saveDisp();
      render('#' + t.id); return;
    }
    if (t.hasAttribute && t.hasAttribute('data-modall')) {
      var mm = MODS[+t.getAttribute('data-modall')];
      (mm.topics || []).forEach(function (x) { if (t.checked) selected[x.id] = true; else delete selected[x.id]; });
      saveSel(); render('#' + t.id); return;
    }
  }

  /* arrow keys move between module tabs */
  function onKey(ev) {
    var t = ev.target;
    if (!t.classList || !t.classList.contains('rv-tab') || !inMount(t)) return;
    var k = ev.key, n = MODS.length;
    if (k !== 'ArrowRight' && k !== 'ArrowLeft' && k !== 'Home' && k !== 'End') return;
    ev.preventDefault();
    if (k === 'ArrowRight') curMod = (curMod + 1) % n;
    if (k === 'ArrowLeft') curMod = (curMod - 1 + n) % n;
    if (k === 'Home') curMod = 0;
    if (k === 'End') curMod = n - 1;
    render('#rv-tab-' + curMod);
  }

  /* ---------- styles ----------
     Brand: deep navy, dark terra cotta (almost maroon), brushed gold.
     No teal anywhere; the grays lean navy. Three themes:
       light  off-white page, white cards
       navy   navy page, white cards
       dark   navy-black page, dark navy cards                       */
  var R = '#' + MOUNT;
  var T = function (name, v) {
    return R + '[data-rv-theme="' + name + '"]{' + v + '}';
  };
  var CSS = ''
  + T('light', '--rv-bg:transparent;--rv-pad:0;--rv-on-bg:#0B1530;--rv-on-bg-soft:#454B5C;--rv-on-bg-link:#7A2E24;'
      + '--rv-card:#FFFFFF;--rv-text:#0B1530;--rv-ink:#0B1530;--rv-on-ink:#FFFFFF;--rv-soft:#454B5C;--rv-line:#D8DBE3;'
      + '--rv-tint:#ECEEF3;--rv-gold:#B8924A;--rv-gold-text:#6F5316;--rv-terra:#8B3A2E;--rv-terra-text:#7A2E24;'
      + '--rv-lock:#6B7080;--rv-bad:#F7EDEB;--rv-odo-bg:#0B1530;--rv-odo-line:transparent;--rv-shadow:rgba(11,21,48,.10);color-scheme:light')
  + T('navy', '--rv-bg:#0B1530;--rv-pad:18px;--rv-on-bg:#FFFFFF;--rv-on-bg-soft:#D8DBE3;--rv-on-bg-link:#E2C281;'
      + '--rv-card:#FFFFFF;--rv-text:#0B1530;--rv-ink:#0B1530;--rv-on-ink:#FFFFFF;--rv-soft:#454B5C;--rv-line:#D8DBE3;'
      + '--rv-tint:#ECEEF3;--rv-gold:#B8924A;--rv-gold-text:#6F5316;--rv-terra:#8B3A2E;--rv-terra-text:#7A2E24;'
      + '--rv-lock:#6B7080;--rv-bad:#F7EDEB;--rv-odo-bg:#16224A;--rv-odo-line:rgba(255,255,255,.18);--rv-shadow:rgba(0,0,0,.30);color-scheme:light')
  + T('dark', '--rv-bg:#070C18;--rv-pad:18px;--rv-on-bg:#ECEEF3;--rv-on-bg-soft:#B3B8C8;--rv-on-bg-link:#E2C281;'
      + '--rv-card:#111A30;--rv-text:#ECEEF3;--rv-ink:#E8EAF2;--rv-on-ink:#0B1530;--rv-soft:#B3B8C8;--rv-line:#2A3352;'
      + '--rv-tint:#1C2642;--rv-gold:#CFA95F;--rv-gold-text:#E2C281;--rv-terra:#E09485;--rv-terra-text:#E9A397;'
      + '--rv-lock:#9097A8;--rv-bad:#3A1F1C;--rv-odo-bg:#111A30;--rv-odo-line:#2A3352;--rv-shadow:rgba(0,0,0,.45);color-scheme:dark')
  + R + '{background:var(--rv-bg);color:var(--rv-on-bg);padding:var(--rv-pad);border-radius:18px}'
  /* The count band is dark terra cotta in every theme, with light gold
     numbers (7.4:1) and white text (9.4:1), so it stands apart from a
     navy page as well as a light one. */
  + R + ' .rv-odo{display:flex;flex-wrap:wrap;gap:8px 20px;align-items:baseline;background:#7A2E24;color:#FFFFFF;border-radius:12px;padding:14px 18px;margin:0 0 14px;font-size:13px;box-shadow:0 1px 3px var(--rv-shadow)}'
  + R + ' .rv-odo-big{font-size:30px;font-weight:800;letter-spacing:-.02em;color:#F3E3BC}'
  + R + ' .rv-odo b{color:#F3E3BC}'
  + R + ' .rv-odo-rank{color:#F3E3BC;font-weight:800}'
  + R + ' .rv-odo-sub{opacity:.85}'
  + R + ' .rv-odo-links{margin-left:auto;display:flex;flex-wrap:wrap;gap:6px 16px}'
  + R + ' .rv-odo a{color:inherit;font-weight:700}'
  + R + ' .rv-odo-disp{font:inherit;font-weight:700;color:inherit;background:none;border:1px solid rgba(255,255,255,.55);border-radius:999px;padding:4px 12px;cursor:pointer;min-height:32px}'
  + R + ' .rv-odo-disp:hover,' + R + ' .rv-odo-disp[aria-expanded="true"]{background:rgba(255,255,255,.14)}'
  + R + ' .rv-odo-disp:focus-visible{outline:3px solid #F3E3BC;outline-offset:2px}'
  + R + ' .rv-odo-links{align-items:center}'
  + R + ' .rv-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:0 0 14px}'
  + '@media (max-width:640px){' + R + ' .rv-stats{grid-template-columns:repeat(2,minmax(0,1fr))}}'
  + R + ' .rv-stat{margin:0;padding:12px 14px;border-radius:10px;background:var(--rv-card);box-shadow:0 1px 3px var(--rv-shadow)}'
  + R + ' .rv-stat strong{display:block;font-size:1.6rem;line-height:1.1;color:var(--rv-terra-text);font-variant-numeric:tabular-nums}'
  + R + ' .rv-stat span{font-size:.82rem;color:var(--rv-soft)}'
  + R + ' .rv-blind{margin:0 0 14px;padding:12px 14px;background:var(--rv-card);color:var(--rv-text);border-radius:10px;box-shadow:0 1px 3px var(--rv-shadow)}'
  + R + ' .rv-dispbar{display:flex;flex-wrap:wrap;gap:8px;justify-content:flex-end;margin:0 0 10px}'
  + R + ' .rv-themes{display:flex;gap:6px}'
  + R + ' .rv-small{min-height:40px;padding:8px 14px;font-size:14px;background:var(--rv-card);color:var(--rv-text);border-color:var(--rv-line)}'
  + R + ' .rv-small[aria-expanded="true"],' + R + ' .rv-small[aria-pressed="true"]{border-color:var(--rv-gold);box-shadow:inset 0 0 0 1px var(--rv-gold)}'
  + R + ' .rv-disp{background:var(--rv-card);color:var(--rv-text);border-radius:14px;box-shadow:0 1px 3px var(--rv-shadow);padding:14px 18px;margin:0 0 14px;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px 20px}'
  + R + ' .rv-fs{border:0;margin:0;padding:0;display:grid;gap:4px}'
  + R + ' .rv-fs legend{font-weight:800;margin:0 0 4px;padding:0}'
  + R + ' .rv-radio{display:flex;gap:8px;align-items:flex-start;padding:6px 4px;border-radius:8px;cursor:pointer}'
  + R + ' .rv-radio input{width:18px;height:18px;margin-top:2px;accent-color:var(--rv-terra);flex:none}'
  + R + ' .rv-note{background:var(--rv-card);color:var(--rv-text);box-shadow:0 1px 3px var(--rv-shadow);border-radius:12px;padding:18px 20px;margin:0 0 14px;display:grid;gap:10px}'
  + R + ' .rv-note h3{margin:0;font-size:17px;color:var(--rv-text)}'
  + R + ' .rv-note p{margin:0}'
  + R + ' .rv-picker{background:var(--rv-card);color:var(--rv-text);border-radius:14px;box-shadow:0 1px 3px var(--rv-shadow);padding:18px 20px;display:grid;gap:12px}'
  + R + ' .rv-pick-head{display:flex;flex-wrap:wrap;gap:10px 16px;align-items:center;justify-content:space-between}'
  + R + ' .rv-h{margin:0;font-size:18px;font-weight:800;color:var(--rv-text)}'
  + R + ' .rv-sec{display:flex;flex-wrap:wrap;gap:6px;align-items:center;font-size:13px;color:var(--rv-soft)}'
  + R + ' .rv-sec button{font:inherit;font-weight:700;color:var(--rv-ink);background:var(--rv-card);border:1px solid var(--rv-ink);border-radius:999px;padding:6px 12px;cursor:pointer;min-height:36px}'
  + R + ' .rv-sec button[aria-pressed="true"]{background:var(--rv-ink);color:var(--rv-on-ink)}'
  + R + ' .rv-tabs{display:flex;gap:2px;overflow-x:auto;border-bottom:1px solid var(--rv-line)}'
  + R + ' .rv-tab{font:inherit;font-weight:700;font-size:14px;background:none;border:0;border-bottom:3px solid transparent;color:var(--rv-soft);padding:10px 12px;cursor:pointer;white-space:nowrap;min-height:44px}'
  + R + ' .rv-tab[aria-selected="true"]{color:var(--rv-text);border-bottom-color:var(--rv-gold)}'
  + R + ' .rv-tab-n{display:inline-block;min-width:20px;padding:0 6px;border-radius:999px;background:var(--rv-tint);color:var(--rv-text);font-size:12px;margin-left:4px}'
  + R + ' .rv-mod-title{margin:4px 0 0;font-weight:700;color:var(--rv-terra-text)}'
  + R + ' .rv-othermods{display:inline-block;margin:6px 0 8px;padding-left:0}'
  + R + ' .rv-mod-title span{font-weight:500;color:var(--rv-soft)}'
  + R + ' .rv-quick{display:flex;flex-wrap:wrap;gap:4px 14px;align-items:center;font-size:13px;color:var(--rv-soft)}'
  + R + ' .rv-link{font:inherit;font-weight:700;font-size:13px;background:none;border:0;color:var(--rv-terra-text);cursor:pointer;padding:6px 2px;text-decoration:underline;text-underline-offset:3px}'
  + R + ' .rv-back .rv-link{color:var(--rv-on-bg-link)}'
  + R + ' .rv-list{list-style:none;margin:0;padding:0;display:grid;gap:2px}'
  + R + ' .rv-check{display:flex;gap:10px;align-items:flex-start;padding:9px 10px;border-radius:10px;cursor:pointer}'
  + R + ' .rv-check:hover{background:var(--rv-tint)}'
  + R + ' .rv-check input,' + R + ' .rv-acch input,' + R + ' .rv-tl-node input{width:20px;height:20px;margin-top:1px;accent-color:var(--rv-terra);flex:none}'
  + R + ' .rv-check-t{flex:1;min-width:0;color:var(--rv-text);font-weight:600}'
  + R + ' .rv-check-t small{display:block;font-weight:500;color:var(--rv-soft);font-size:12.5px}'
  + R + ' .rv-check.is-soon .rv-check-t{color:var(--rv-soft)}'
  + R + ' .rv-chip{display:inline-flex;align-items:center;font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;border-radius:999px;padding:3px 9px;white-space:nowrap}'
  + R + ' .rv-done-chip{background:var(--rv-tint);color:var(--rv-text);border:1px solid var(--rv-ink)}'
  + R + ' .rv-now-chip{background:var(--rv-card);color:var(--rv-gold-text);border:1px solid var(--rv-gold)}'
  + R + ' .rv-soon-chip{background:var(--rv-card);color:var(--rv-lock);border:1px dashed var(--rv-lock)}'
  /* stacked modules */
  + R + ' .rv-acc{display:grid;gap:8px}'
  + R + ' .rv-accm{border:1px solid var(--rv-line);border-radius:12px}'
  + R + ' .rv-accm.is-open{border-color:var(--rv-ink)}'
  + R + ' .rv-acch{display:flex;gap:10px;align-items:center;padding:6px 10px}'
  + R + ' .rv-accbtn{flex:1;min-width:0;display:flex;gap:10px;align-items:center;font:inherit;text-align:left;background:none;border:0;color:var(--rv-text);cursor:pointer;padding:6px 0;min-height:44px}'
  + R + ' .rv-acct{flex:1;min-width:0;font-weight:700}'
  + R + ' .rv-acct small{display:block;font-weight:500;color:var(--rv-soft);font-size:12.5px}'
  + R + ' .rv-caret{color:var(--rv-soft);transition:transform 200ms ease}'
  + R + ' .is-open .rv-caret{transform:rotate(90deg)}'
  + R + ' .rv-accp{padding:0 8px 10px 30px}'
  /* timeline */
  + R + ' .rv-tl{list-style:none;margin:0;padding:0;display:grid}'
  + R + ' .rv-tl li{display:grid;grid-template-columns:56px 24px minmax(0,1fr);gap:8px;align-items:start}'
  + R + ' .rv-tl-date{font-size:12px;font-weight:700;color:var(--rv-soft);text-align:right;padding-top:13px;font-variant-numeric:tabular-nums}'
  + R + ' .rv-tl-rail{position:relative;align-self:stretch}'
  + R + ' .rv-tl-rail::before{content:"";position:absolute;left:11px;top:0;bottom:0;width:2px;background:var(--rv-line)}'
  + R + ' .rv-tl-dot{position:relative;display:block;width:16px;height:16px;border-radius:50%;margin:14px 0 0 4px;background:var(--rv-card);border:2px dashed var(--rv-lock)}'
  + R + ' .rv-tl-done .rv-tl-dot{background:var(--rv-ink);border:2px solid var(--rv-ink)}'
  + R + ' .rv-tl-now .rv-tl-dot{background:var(--rv-gold);border:2px solid var(--rv-gold)}'
  + R + ' .rv-tl-node{display:flex;gap:10px;align-items:flex-start;margin:4px 0;border-radius:10px;padding:9px 10px;cursor:pointer;border:1px dashed var(--rv-lock)}'
  + R + ' .rv-tl-done .rv-tl-node{border:1px solid var(--rv-ink);background:var(--rv-tint)}'
  + R + ' .rv-tl-now .rv-tl-node{border:1px solid var(--rv-gold)}'
  + R + ' .rv-startbar{display:flex;flex-wrap:wrap;gap:12px;align-items:flex-end;justify-content:space-between;border-top:1px solid var(--rv-line);padding-top:12px}'
  + R + ' .rv-count{margin:0;font-weight:600;color:var(--rv-text);flex:1 1 220px}'
  + R + ' .rv-field{display:flex;flex-direction:column;gap:4px}'
  + R + ' .rv-field label{font-size:.78rem;font-weight:700;color:var(--rv-soft)}'
  + R + ' .rv-field select{padding:8px 10px;border:1px solid var(--rv-ink);border-radius:8px;background:var(--rv-card);font:inherit;min-height:44px;color:var(--rv-text);max-width:100%}'
  + R + ' .rv-btn{font:inherit;font-weight:700;border-radius:10px;padding:10px 16px;min-height:44px;cursor:pointer;border:1px solid var(--rv-ink);background:var(--rv-card);color:var(--rv-text);transition:transform 200ms ease,box-shadow 200ms ease}'
  + R + ' .rv-btn:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 8px 16px var(--rv-shadow)}'
  + R + ' .rv-btn:disabled{opacity:.5;cursor:not-allowed}'
  + R + ' .rv-primary{background:var(--rv-ink);color:var(--rv-on-ink)}'
  + R + ' .rv-gold{border-color:var(--rv-gold);background:var(--rv-gold);color:#0B1530}'
  + R + ' .rv-stage{display:grid;justify-items:center;gap:8px;padding:16px 0 6px}'
  + R + ' .rv-card{width:100%;max-width:680px;padding:24px 26px;border-radius:16px;background:var(--rv-card);color:var(--rv-text);box-shadow:0 1px 3px var(--rv-shadow),0 18px 36px -18px var(--rv-shadow);display:grid;gap:14px}'
  + R + ' .rv-card.is-back{background:var(--rv-tint)}'
  + R + ' .rv-meta{display:flex;flex-wrap:wrap;gap:6px 10px;align-items:center;font-size:12.5px;color:var(--rv-soft)}'
  + R + ' .rv-of{margin-left:auto;font-variant-numeric:tabular-nums}'
  + R + ' .rv-dok{font-weight:700;font-size:11px;letter-spacing:.08em;text-transform:uppercase}'
  + R + ' .rv-d1{color:var(--rv-soft)}' + R + ' .rv-d2{color:var(--rv-gold-text)}' + R + ' .rv-d3{color:var(--rv-terra-text)}'
  + R + ' .rv-q{margin:0;font-size:1.22rem;line-height:1.4;font-weight:700;color:var(--rv-text)}'
  + R + ' .rv-conf-h{margin:0 0 8px;font-weight:600}'
  + R + ' .rv-conf-row{display:flex;flex-wrap:wrap;gap:8px}'
  + R + ' .rv-opts{list-style:none;margin:0;padding:0;display:grid;gap:8px}'
  + R + ' .rv-opt{display:flex;gap:10px;align-items:flex-start;width:100%;text-align:left;padding:12px 14px;min-height:44px;border:1px solid var(--rv-line);border-radius:10px;background:var(--rv-card);font:inherit;color:var(--rv-text);cursor:pointer}'
  + R + ' .rv-opt:hover:not(:disabled){border-color:var(--rv-ink)}'
  + R + ' .rv-opt:disabled{cursor:default;color:var(--rv-text)}'
  + R + ' .rv-ltr{flex:none;width:24px;height:24px;border-radius:50%;border:1px solid currentColor;display:inline-grid;place-items:center;font-size:13px;font-weight:700}'
  + R + ' .rv-opt-t{flex:1;min-width:0}'
  + R + ' .rv-opt.is-right{border:2px solid var(--rv-ink);background:var(--rv-tint)}'
  + R + ' .rv-opt.is-wrong{border:2px solid var(--rv-terra);background:var(--rv-bad)}'
  + R + ' .rv-tag{display:inline-block;margin-left:8px;font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--rv-terra-text)}'
  + R + ' .is-right .rv-tag{color:var(--rv-text)}'
  + R + ' .rv-inline-note{margin:6px 0 4px 36px;font-size:14.5px;color:var(--rv-text)}'
  + R + ' .rv-breakdown{display:grid;gap:12px}'
  + R + ' .rv-verdict{margin:0;font-weight:800;color:var(--rv-text)}'
  + R + ' .rv-why{background:var(--rv-tint);border-radius:10px;padding:12px 14px}'
  + R + ' .is-back .rv-why{background:var(--rv-card)}'
  + R + ' .rv-why p{margin:0}'
  + R + ' .rv-why-h,' + R + ' .rv-whynot-h{font-weight:800;color:var(--rv-text);margin:0 0 4px}'
  + R + ' .rv-whynot{display:grid;gap:8px}'
  + R + ' .rv-whynot-h{margin:0}'
  + R + ' .rv-wn,' + R + ' .rv-ppanel{border:1px solid var(--rv-line);border-radius:10px;padding:10px 12px}'
  + R + ' .rv-wn p,' + R + ' .rv-ppanel p,' + R + ' .rv-mini p{margin:0}'
  + R + ' .rv-wn-h{font-weight:700;color:var(--rv-text);margin:0 0 3px !important}'
  + R + ' .rv-explore{display:grid;gap:8px}'
  + R + ' .rv-ptabs{display:flex;flex-wrap:wrap;gap:6px}'
  + R + ' .rv-ptab{font:inherit;font-weight:700;font-size:14px;border:1px solid var(--rv-line);background:var(--rv-card);color:var(--rv-text);border-radius:8px;padding:8px 12px;min-height:44px;cursor:pointer}'
  + R + ' .rv-ptab[aria-selected="true"]{background:var(--rv-ink);color:var(--rv-on-ink);border-color:var(--rv-ink)}'
  + R + ' .rv-ptab-k{font-size:11px;text-transform:uppercase;letter-spacing:.06em;font-weight:800}'
  + R + ' .rv-flipback{display:grid;gap:10px}'
  + R + ' .rv-minis{display:grid;gap:8px}'
  + R + ' .rv-mini{background:var(--rv-card);border-radius:10px;padding:10px 12px;box-shadow:0 1px 3px var(--rv-shadow)}'
  + R + ' .rv-mini.is-right{border:2px solid var(--rv-ink)}'
  + R + ' .rv-live{margin:0;position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}'
  + R + ' .rv-nextrow{display:flex;justify-content:flex-end}'
  + R + ' .rv-back{margin:0}'
  + R + ' .rv-report{display:grid;gap:8px}'
  + R + ' .rv-report h4{margin:0;font-size:1rem}'
  + R + ' .rv-report p{margin:0}'
  + R + ' .rv-weak{list-style:none;margin:0;padding:0;display:grid;gap:6px}'
  + R + ' .rv-weak li{display:grid;grid-template-columns:1fr auto;gap:2px 12px;padding:8px 10px;border:1px solid var(--rv-line);border-radius:8px}'
  + R + ' .rv-weak-t{font-weight:600}'
  + R + ' .rv-weak-m{grid-column:1;font-size:.8rem;color:var(--rv-soft)}'
  + R + ' .rv-weak-n{grid-row:1/3;align-self:center;font-variant-numeric:tabular-nums;font-weight:700}'
  + R + ' [hidden]{display:none!important}'
  + R + ' :focus-visible{outline:3px solid var(--rv-gold);outline-offset:2px}'
  + '@media (max-width:520px){' + R + '{--rv-pad:10px}' + R + ' .rv-card{padding:18px 16px}' + R + ' .rv-picker{padding:14px}'
  +   R + ' .rv-check{flex-wrap:wrap}' + R + ' .rv-check-t{flex:1 1 calc(100% - 40px)}' + R + ' .rv-check .rv-chip{margin-left:30px}'
  +   R + ' .rv-inline-note{margin-left:0}' + R + ' .rv-tl li{grid-template-columns:44px 24px minmax(0,1fr)}}'
  + '@media (prefers-reduced-motion: reduce){' + R + ' *{transition:none!important;animation:none!important}}';

  function styles() {
    if ($('rv-styles')) return;
    var s = document.createElement('style');
    s.id = 'rv-styles'; s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* ---------- boot ---------- */
  function readParam(name) {
    try {
      var m = (location.hash + location.search).match(new RegExp('[?&#]' + name + '=([^&#]+)'));
      return m ? decodeURIComponent(m[1]) : null;
    } catch (e) { return null; }
  }

  function run() {
    if (!$(MOUNT)) return;
    styles();
    ALL = flatten();
    curMod = moduleNow(); NOW_MOD = curMod;
    var wantMod = readParam('module');
    if (wantMod) MODS.forEach(function (m, i) { if (String(m.n) === wantMod) curMod = i; });
    var saved = loadSel();
    /* Each new sitting opens on this week's module, as asked. A
       different choice holds for the rest of the sitting. */
    var fresh = true;
    try { fresh = !sessionStorage.getItem('bio004-recall-sitting'); sessionStorage.setItem('bio004-recall-sitting', '1'); } catch (e) {}
    if (fresh && !wantMod) saved = null;
    if (saved) { selected = saved; }
    else if (MODS[curMod]) { selected = {}; selectTaughtIn(MODS[curMod]); saveSel(); }

    filter.comp = readParam('comp');
    if (filter.comp) { filter.mode = 'all'; startRun(); }
    else render();

    document.addEventListener('click', onClick);
    document.addEventListener('change', onChange);
    document.addEventListener('keydown', onKey);

    /* Mastery OS opens a run on one competency without a page load. */
    window.BIO004_RECALL_OPEN = function (compId) {
      filter.comp = compId || null;
      filter.mode = 'all';
      NO_CARDS_FOR = null;
      if (!compId) { filter.comp = null; started = false; render(); return 0; }
      queue = build();
      if (!queue.length) { NO_CARDS_FOR = compId; filter.comp = null; started = false; render(); return 0; }
      startRun();
      return queue.length;
    };
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
