/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   bio004-pretest.js

   THE DAY-ONE PLACEMENT CHECK.

   WHY IT EXISTS
   -------------
   Step 1 of the mastery cycle is Diagnose, and on day one it asked a
   student to "name what you cannot yet do". A student who has not had
   a class yet is the least reliable possible judge of that: they do
   not know what they do not know, so what gets flagged is whatever
   they happen to feel unsure about rather than what they will actually
   miss. The weakness list read "0 flagged" and the step looked broken.

   A short scored pretest fixes both. It sorts the student repeating
   the course from the one who has never seen a tissue slide, it stops
   anyone re-studying what they already know, and getting it wrong is
   the mechanism rather than a failure. It is the same move step 1 of
   pre-work already makes: first two minutes, notes shut.

   HOW IT PACES ITSELF
   -------------------
   Ten items, then it asks. Ten more, then it asks again. It stops at
   fifty. A student who stops early is not pushed toward new items,
   they are offered the ones they have already seen a second time,
   because a second pass over twenty items beats abandoning at twenty
   and never coming back.

   WHERE THE ITEMS COME FROM
   -------------------------
   Every multiple-choice item in the course:
     BIO004_CARD_BANK       ~2,900 items, 212 topics
     BIO004_COURSE_CONTENT  ~340 items
     BIO004_LOOP_STATIONS   973 stations, turned into "which of these
                            is identified in the X loop" items with
                            distractors pulled from other loops

   Loops are image identification in the real app. A text pretest
   cannot show the image, so what it can honestly test is whether a
   student knows which structures belong to which region. That is what
   the generated items ask.

   VARYING EVERY TIME
   ------------------
   Item ids already served are kept in localStorage and deprioritised,
   so a second run draws different questions. When the pool is
   exhausted the record resets rather than blocking.

   NO STUDENT IDENTIFIERS ARE STORED. Only item ids and tallies.
   ============================================================ */
(function () {
  'use strict';
  if (window.BIO004_PRETEST) return;

  var BLOCK = 10;     /* items between checkpoints */
  var CAP   = 50;     /* hard stop */
  var SEEN_KEY = 'bio004-pretest-seen';
  var RESULT_KEY = 'bio004-pretest-result';

  /* ---------- pool ---------- */
  var POOL = null;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function pushBank(bank, out, srcLabel) {
    if (!bank || !bank.modules) return;
    bank.modules.forEach(function (m) {
      (m.topics || []).forEach(function (t) {
        var cards = t.cards || t.questions || t.items || [];
        cards.forEach(function (c) {
          if (!c || !c.q) return;
          var opts = c.options || c.choices;
          if (!opts || opts.length < 2) return;
          var ci = (typeof c.correctIndex === 'number') ? c.correctIndex : -1;
          if (ci < 0 || ci >= opts.length) return;
          out.push({
            id: srcLabel + ':' + (m.id || '?') + ':' + (t.id || '?') + ':' + (c.id || out.length),
            q: c.q,
            options: opts.slice(),
            correct: ci,
            why: c.explanation || c.a || '',
            topic: t.title || '',
            topicId: t.id || '',
            module: m.title || '',
            moduleId: m.id || '',
            dok: c.dok || 1
          });
        });
      });
    });
  }

  /* Loops carry structure names, not question text. What can honestly be
     asked without the image is which region a structure belongs to, so
     the correct answer is a station from this loop and the three
     distractors are stations from other loops. */
  function pushLoops(out) {
    var L = window.BIO004_LOOP_STATIONS;
    if (!L) return;
    var ids = Object.keys(L);
    if (ids.length < 2) return;
    var all = [];
    ids.forEach(function (k) {
      (L[k].st || []).forEach(function (n) { all.push({ loop: k, name: n }); });
    });
    if (all.length < 8) return;

    ids.forEach(function (k) {
      var loop = L[k], st = loop.st || [];
      var others = all.filter(function (x) { return x.loop !== k; });
      if (!st.length || others.length < 3) return;
      /* one item per loop keeps loops from swamping the pool: 39 items
         beside roughly 3,300, which is the right weight for a question
         type this indirect */
      var pick = st[Math.floor(Math.random() * st.length)];
      var d = shuffle(others.slice()).slice(0, 3).map(function (x) { return x.name; });
      var opts = shuffle([pick].concat(d));
      out.push({
        id: 'loop:' + k + ':' + pick,
        q: 'Which of these is identified in the ' + (loop.title || k) + '?',
        options: opts,
        correct: opts.indexOf(pick),
        why: pick + ' is a station in the ' + (loop.title || k) +
             (loop.unit ? ', which covers ' + loop.unit + '.' : '.'),
        topic: loop.title || k,
        topicId: 'loop-' + k,
        module: 'Loops',
        moduleId: 'loops',
        dok: 1
      });
    });
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function pool() {
    if (POOL) return POOL;
    var out = [];
    pushBank(window.BIO004_CARD_BANK, out, 'cb');
    pushBank(window.BIO004_COURSE_CONTENT, out, 'cc');
    pushLoops(out);
    POOL = out;
    return POOL;
  }

  /* ---------- what has been served before ---------- */
  function seenSet() {
    try { return JSON.parse(localStorage.getItem(SEEN_KEY) || '{}') || {}; }
    catch (e) { return {}; }
  }
  function rememberServed(items) {
    var m = seenSet();
    items.forEach(function (it) { m[it.id] = 1; });
    try { localStorage.setItem(SEEN_KEY, JSON.stringify(m)); } catch (e) {}
  }

  /* Prefer items this student has never been served. When the unseen
     pile runs out the record resets rather than refusing to draw. */
  function draw(n, exclude) {
    var p = pool();
    if (!p.length) return [];
    var used = {};
    (exclude || []).forEach(function (it) { used[it.id] = 1; });
    var served = seenSet();

    var fresh = p.filter(function (it) { return !used[it.id] && !served[it.id]; });
    if (fresh.length < n) {
      try { localStorage.removeItem(SEEN_KEY); } catch (e) {}
      fresh = p.filter(function (it) { return !used[it.id]; });
    }
    var picked = shuffle(fresh.slice()).slice(0, n);
    rememberServed(picked);
    return picked;
  }

  /* ---------- run state ---------- */
  var PT = null;

  function styles() {
    if (document.getElementById('bio004-pretest-css')) return;
    var st = document.createElement('style');
    st.id = 'bio004-pretest-css';
    st.textContent = [
      '.pt-back{position:fixed;inset:0;z-index:9000;background:rgba(8,16,31,.62);display:flex;',
      'align-items:center;justify-content:center;padding:18px;}',
      '.pt-box{background:#fff;border-radius:16px;max-width:640px;width:100%;max-height:92vh;',
      'overflow:auto;box-shadow:0 40px 90px -20px rgba(0,0,0,.5);}',
      '.pt-hd{padding:20px 24px 0;}',
      '.pt-k{font-family:var(--font-eyebrow,"Plus Jakarta Sans",sans-serif);font-weight:700;font-size:11px;',
      'letter-spacing:.16em;text-transform:uppercase;color:#6B1616;margin:0 0 4px;}',
      '.pt-t{font-family:var(--font-display,"Plus Jakarta Sans",sans-serif);font-weight:800;font-size:22px;',
      'color:#08101F;margin:0;line-height:1.15;}',
      '.pt-meter{display:flex;gap:4px;padding:16px 24px 0;}',
      '.pt-meter span{flex:1 1 0;height:5px;border-radius:99px;background:#E7EAF0;}',
      '.pt-meter span.on{background:#DCB45C;}',
      '.pt-bd{padding:18px 24px 22px;}',
      '.pt-q{font-family:var(--font-display,"Plus Jakarta Sans",sans-serif);font-weight:700;font-size:18px;',
      'color:#08101F;margin:0 0 4px;line-height:1.35;}',
      '.pt-where{font-size:12.5px;color:#5A6B74;margin:0 0 14px;}',
      '.pt-opts{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px;}',
      '.pt-opt{width:100%;text-align:left;font:inherit;font-size:15px;background:#fff;border:1.5px solid #D8DDE5;',
      'border-radius:10px;padding:13px 15px;cursor:pointer;color:#08101F;min-height:44px;',
      'transition:border-color 140ms ease,background 140ms ease;}',
      '.pt-opt:hover:not(:disabled){border-color:#6B1616;}',
      '.pt-opt:focus-visible{outline:3px solid #6B1616;outline-offset:2px;}',
      '.pt-opt:disabled{cursor:default;}',
      '.pt-opt.right{border-color:#1F6B3A;background:#EAF5EE;font-weight:700;}',
      '.pt-opt.wrong{border-color:#6B1616;background:#FBEEEE;}',
      '.pt-why{margin:14px 0 0;font-size:14px;line-height:1.55;color:#3D4757;background:#FAFAF9;',
      'border-left:3px solid #DCB45C;border-radius:0 8px 8px 0;padding:12px 14px;}',
      '.pt-ft{display:flex;flex-wrap:wrap;gap:10px;align-items:center;',
      'padding:16px 24px 22px;border-top:1px solid #ECEFF4;}',
      '.pt-count{font-size:12.5px;color:#5A6B74;margin-right:auto;}',
      '.pt-btn{font:inherit;font-weight:700;font-size:14.5px;border-radius:11px;padding:12px 20px;',
      'min-height:44px;cursor:pointer;border:1.5px solid #D8DDE5;background:#fff;color:#08101F;}',
      '.pt-btn:hover{border-color:#6B1616;}',
      '.pt-btn.go{background:#DCB45C;border-color:#DCB45C;color:#08101F;}',
      '.pt-btn.go:hover{background:#C9A24A;border-color:#C9A24A;}',
      '.pt-btn:focus-visible{outline:3px solid #6B1616;outline-offset:3px;}',
      '.pt-lead{font-size:15px;line-height:1.6;color:#3D4757;margin:0 0 14px;}',
      '.pt-lead b{color:#08101F;}',
      '.pt-score{font-family:var(--font-display,"Plus Jakarta Sans",sans-serif);font-weight:800;',
      'font-size:30px;color:#08101F;margin:0 0 2px;}',
      '.pt-list{margin:14px 0 0;padding:0;list-style:none;font-size:14px;color:#3D4757;}',
      '.pt-list li{padding:7px 0;border-top:1px solid #ECEFF4;display:flex;gap:10px;}',
      '.pt-list li b{color:#08101F;margin-left:auto;white-space:nowrap;}',
      '.pt-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;}',
      '@media (prefers-reduced-motion:reduce){.pt-opt{transition:none}}'
    ].join('');
    (document.head || document.documentElement).appendChild(st);
  }

  function el(id) { return document.getElementById(id); }

  function shell(inner) {
    var b = el('pt-back');
    if (!b) {
      b = document.createElement('div');
      b.id = 'pt-back';
      b.className = 'pt-back';
      b.setAttribute('role', 'dialog');
      b.setAttribute('aria-modal', 'true');
      b.setAttribute('aria-labelledby', 'pt-title');
      document.body.appendChild(b);
    }
    b.innerHTML = '<div class="pt-box">' + inner + '</div>';
    return b;
  }

  function meter() {
    var out = [];
    var blocks = CAP / BLOCK;
    var doneBlocks = Math.floor(PT.answered.length / BLOCK);
    for (var i = 0; i < blocks; i++) {
      out.push('<span class="' + (i < doneBlocks ? 'on' : '') + '"></span>');
    }
    return '<div class="pt-meter" aria-hidden="true">' + out.join('') + '</div>';
  }

  /* ---------- screens ---------- */

  function renderIntro() {
    shell(
      '<div class="pt-hd"><p class="pt-k">Step 1 &middot; Diagnose</p>' +
      '<h2 class="pt-t" id="pt-title">Let us find out what you already know</h2></div>' +
      '<div class="pt-bd">' +
      '<p class="pt-lead">Some of this you will have met before. Some of it you have not met yet. ' +
      'This sorts one from the other so you are not spending evenings on what you already have.</p>' +
      '<p class="pt-lead"><b>It is OK to miss most of them.</b> You are learning. You do not know ' +
      'everything right away, and you will learn as you miss them. Missing a question now is what ' +
      'makes the right answer stick later, so answer even when you are guessing.</p>' +
      '<p class="pt-lead">Ten questions, then it asks whether you want to keep going.</p>' +
      '</div>' +
      '<div class="pt-ft"><span class="pt-count">Nothing here is graded.</span>' +
      '<button class="pt-btn" type="button" data-pt="close">Not now</button>' +
      '<button class="pt-btn go" type="button" data-pt="start">Start</button></div>'
    );
    focusFirst();
  }

  function renderQ() {
    var it = PT.items[PT.i];
    if (!it) { return PT.answered.length >= CAP ? renderDone() : renderCheck(); }
    var chosen = PT.pick;
    var opts = it.options.map(function (o, i) {
      var cls = 'pt-opt';
      if (chosen != null) {
        if (i === it.correct) cls += ' right';
        else if (i === chosen) cls += ' wrong';
      }
      return '<li><button class="' + cls + '" type="button" data-pt="ans" data-i="' + i + '"' +
             (chosen != null ? ' disabled' : '') + '>' + esc(o) + '</button></li>';
    }).join('');

    shell(
      '<div class="pt-hd"><p class="pt-k">Question ' + (PT.answered.length + 1) + ' of ' + CAP + '</p>' +
      '<h2 class="pt-t pt-sr" id="pt-title">Placement check</h2></div>' +
      meter() +
      '<div class="pt-bd">' +
      '<p class="pt-q">' + esc(it.q) + '</p>' +
      '<p class="pt-where">' + esc(it.topic) + '</p>' +
      '<ul class="pt-opts">' + opts + '</ul>' +
      (chosen != null && it.why ? '<p class="pt-why">' + esc(it.why) + '</p>' : '') +
      '</div>' +
      '<div class="pt-ft"><span class="pt-count">' +
      (chosen != null
        ? (chosen === it.correct ? 'Right.' : 'Not this time. That is the point of doing this now.')
        : 'Guess if you are not sure.') +
      '</span>' +
      '<button class="pt-btn" type="button" data-pt="close">Stop here</button>' +
      (chosen != null ? '<button class="pt-btn go" type="button" data-pt="next">Next</button>' : '') +
      '</div>'
    );
    focusFirst();
  }

  function renderCheck() {
    var n = PT.answered.length;
    var right = PT.correct;
    var left = CAP - n;
    shell(
      '<div class="pt-hd"><p class="pt-k">' + n + ' answered</p>' +
      '<h2 class="pt-t" id="pt-title">Keep going?</h2></div>' +
      meter() +
      '<div class="pt-bd">' +
      '<p class="pt-lead">You have answered <b>' + n + '</b> and got <b>' + right + '</b> of them. ' +
      'Every ten more makes the picture sharper about where to put your evenings.</p>' +
      '<p class="pt-lead">There are <b>' + left + '</b> left before it stops on its own.</p>' +
      '</div>' +
      '<div class="pt-ft"><span class="pt-count">You can stop whenever you like.</span>' +
      '<button class="pt-btn" type="button" data-pt="finish">I am done for now</button>' +
      '<button class="pt-btn go" type="button" data-pt="more">Ten more</button></div>'
    );
    focusFirst();
  }

  function renderDone() {
    var n = PT.answered.length, right = PT.correct;
    var pct = n ? Math.round(right / n * 100) : 0;

    /* weakest topics first: that is the whole output of this thing */
    var byTopic = {};
    PT.answered.forEach(function (r) {
      var t = byTopic[r.topic] = byTopic[r.topic] || { n: 0, ok: 0 };
      t.n++; if (r.ok) t.ok++;
    });
    var rows = Object.keys(byTopic).map(function (k) {
      return { name: k, n: byTopic[k].n, ok: byTopic[k].ok, pct: byTopic[k].ok / byTopic[k].n };
    }).sort(function (a, b) { return a.pct - b.pct; }).slice(0, 6);

    var list = rows.map(function (r) {
      return '<li><span>' + esc(r.name) + '</span><b>' + r.ok + ' of ' + r.n + '</b></li>';
    }).join('');

    var short = n < CAP;
    shell(
      '<div class="pt-hd"><p class="pt-k">Placement check</p>' +
      '<h2 class="pt-t" id="pt-title">That is your starting point</h2></div>' +
      '<div class="pt-bd">' +
      '<p class="pt-score">' + right + ' of ' + n + '</p>' +
      '<p class="pt-lead">' + (pct < 50
        ? 'That is what a starting point looks like. Nothing here has been taught yet, and the ones you missed are now on your board.'
        : 'A good deal of this is already with you. The board below is where the rest is.') +
      '</p>' +
      (list ? '<ul class="pt-list">' + list + '</ul>' : '') +
      (short
        ? '<p class="pt-lead" style="margin-top:16px">You stopped at ' + n + '. Running those same ' + n +
          ' again is worth more than adding new ones, because the second pass is where they start to stick.</p>'
        : '') +
      '</div>' +
      '<div class="pt-ft"><span class="pt-count">Saved to your weak spot board.</span>' +
      (short ? '<button class="pt-btn" type="button" data-pt="again">Run those ' + n + ' again</button>' : '') +
      '<button class="pt-btn go" type="button" data-pt="close">Done</button></div>'
    );
    commit();
    focusFirst();
  }

  /* ---------- result ---------- */
  function commit() {
    var byTopic = {}, byModule = {};
    PT.answered.forEach(function (r) {
      var t = byTopic[r.topicId] = byTopic[r.topicId] || { name: r.topic, n: 0, ok: 0 };
      t.n++; if (r.ok) t.ok++;
      var m = byModule[r.moduleId] = byModule[r.moduleId] || { name: r.module, n: 0, ok: 0 };
      m.n++; if (r.ok) m.ok++;
    });
    var res = {
      answered: PT.answered.length,
      correct: PT.correct,
      byTopic: byTopic,
      byModule: byModule,
      complete: PT.answered.length >= CAP
    };
    try { localStorage.setItem(RESULT_KEY, JSON.stringify(res)); } catch (e) {}
    if (typeof PT.onFinish === 'function') { try { PT.onFinish(res); } catch (e) {} }
  }

  /* ---------- wiring ---------- */
  function focusFirst() {
    var b = el('pt-back');
    if (!b) return;
    var f = b.querySelector('.pt-btn.go, .pt-opt, .pt-btn');
    if (f && f.focus) f.focus();
  }

  function close() {
    if (PT && PT.answered.length && !PT.committed) { commit(); PT.committed = true; }
    var b = el('pt-back');
    if (b && b.parentNode) b.parentNode.removeChild(b);
    if (PT && PT.returnTo && PT.returnTo.focus) { try { PT.returnTo.focus(); } catch (e) {} }
    PT = null;
    document.removeEventListener('keydown', onKey, true);
  }

  function onKey(e) {
    if (!PT) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab') return;
    var b = el('pt-back'); if (!b) return;
    var f = b.querySelectorAll('button:not([disabled])');
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-pt]') : null;
    if (!t || !PT) return;
    var k = t.getAttribute('data-pt');

    if (k === 'close') { close(); return; }

    if (k === 'start') {
      PT.items = draw(BLOCK, []);
      PT.i = 0; PT.pick = null;
      renderQ(); return;
    }

    if (k === 'ans') {
      if (PT.pick != null) return;
      var i = +t.getAttribute('data-i');
      var it = PT.items[PT.i];
      PT.pick = i;
      var ok = (i === it.correct);
      if (ok) PT.correct++;
      PT.answered.push({ id: it.id, ok: ok, topic: it.topic, topicId: it.topicId,
                         module: it.module, moduleId: it.moduleId });
      renderQ(); return;
    }

    if (k === 'next') {
      PT.pick = null;
      PT.i++;
      if (PT.answered.length >= CAP) { renderDone(); return; }
      if (PT.i >= PT.items.length) { renderCheck(); return; }
      renderQ(); return;
    }

    if (k === 'more') {
      var room = CAP - PT.answered.length;
      var more = draw(Math.min(BLOCK, room), PT.items);
      if (!more.length) { renderDone(); return; }
      PT.items = PT.items.concat(more);
      PT.pick = null;
      renderQ(); return;
    }

    if (k === 'finish') { renderDone(); return; }

    /* A second pass over what they have already seen. Shuffled, so it is
       recall rather than remembering the position of the button. */
    if (k === 'again') {
      var seenIds = {};
      PT.answered.forEach(function (r) { seenIds[r.id] = 1; });
      var repeat = PT.items.filter(function (x) { return seenIds[x.id]; });
      if (!repeat.length) { close(); return; }
      PT.items = shuffle(repeat.slice());
      PT.i = 0; PT.pick = null; PT.answered = []; PT.correct = 0; PT.committed = false;
      renderQ(); return;
    }
  }, false);

  /* ---------- public ---------- */
  window.BIO004_PRETEST = {
    /* enough items to be worth offering */
    available: function () { return pool().length >= BLOCK; },
    poolSize: function () { return pool().length; },
    block: BLOCK,
    cap: CAP,
    lastResult: function () {
      try { return JSON.parse(localStorage.getItem(RESULT_KEY) || 'null'); }
      catch (e) { return null; }
    },
    taken: function () {
      var r = null;
      try { r = JSON.parse(localStorage.getItem(RESULT_KEY) || 'null'); } catch (e) {}
      return !!(r && r.answered);
    },
    open: function (opts) {
      opts = opts || {};
      if (!this.available()) return false;
      styles();
      PT = { items: [], i: 0, pick: null, answered: [], correct: 0,
             committed: false, onFinish: opts.onFinish,
             returnTo: document.activeElement };
      document.addEventListener('keydown', onKey, true);
      renderIntro();
      return true;
    }
  };
})();
