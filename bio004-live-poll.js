/* ============================================================
   BIO 004 LIVE POLL, the engine
   ------------------------------------------------------------
   The one place the polling logic lives. Two pages use it and
   neither carries its own copy:

     slides-histology-look-alikes.html   poll slides inside the deck
     live-poll.html                      the student view, and a
                                         standalone presenter when
                                         you are not running a deck

   Set the endpoint once, on the page, before this runs:

     window.BIO004_POLL_CONFIG = {
       endpoint: 'https://script.google.com/macros/s/..../exec',
       room: 'BIO4',
       classSize: 32
     };

   Backend is bio004-live-poll.gs. Setup steps are in
   live-poll-setup.md.

   WHY EVERYTHING IS A GET
   -----------------------
   A JSON POST from a browser triggers a CORS preflight, and an
   Apps Script web app cannot answer a preflight. Every call here
   is a GET, which is a simple request and skips it. If CORS still
   misbehaves, the call falls back to JSONP, which Apps Script has
   always been able to serve.
   ============================================================ */

(function(){
  'use strict';

  var CFG = window.BIO004_POLL_CONFIG || {};
  var ENDPOINT  = CFG.endpoint || '';
  var ROOM      = (CFG.room || 'BIO4').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,6);
  var CLASS_SIZE = CFG.classSize || 32;
  var LETTERS   = ['A','B','C','D','E','F'];

  /* ---------- transport ---------- */
  var seq = 0;
  function call(args){
    if(!ENDPOINT) return Promise.reject(new Error('no endpoint'));
    var qs = Object.keys(args).map(function(k){
      return encodeURIComponent(k) + '=' + encodeURIComponent(args[k]);
    }).join('&');
    var url = ENDPOINT + '?' + qs;
    return fetch(url, { method:'GET' })
      .then(function(r){ return r.json(); })
      .catch(function(){ return jsonp(url); });
  }
  function jsonp(url){
    return new Promise(function(resolve, reject){
      var name = 'bio004cb' + (++seq);
      var s = document.createElement('script');
      var done = false;
      window[name] = function(d){ done = true; cleanup(); resolve(d); };
      function cleanup(){
        try{ delete window[name]; }catch(e){ window[name] = undefined; }
        if(s.parentNode) s.parentNode.removeChild(s);
      }
      s.onerror = function(){ cleanup(); reject(new Error('network')); };
      s.src = url + '&callback=' + name;
      document.head.appendChild(s);
      setTimeout(function(){ if(!done){ cleanup(); reject(new Error('timeout')); } }, 9000);
    });
  }

  /* ---------- device token ----------
     Random, made up by the student's own browser, stored only there.
     It exists so a student can change an answer before the lock without
     leaving two rows behind. It is not an identifier for a person and it
     means nothing outside the sheet. */
  var token = (function(){
    var k = 'bio004-poll-token';
    try{
      var t = window.localStorage.getItem(k);
      if(!t){
        t = Math.random().toString(36).slice(2,12) + Math.random().toString(36).slice(2,6);
        window.localStorage.setItem(k, t);
      }
      return t;
    }catch(e){ return 'x' + Math.random().toString(36).slice(2,14); }
  })();

  /* ---------- presenter key ---------- */
  var pKey = '';
  function presenterKey(){
    if(pKey) return pKey;
    try{ pKey = window.localStorage.getItem('bio004-poll-key') || ''; }catch(e){}
    if(!pKey){
      pKey = window.prompt('Presenter key (the PRESENTER_KEY you set in the Apps Script)') || '';
      try{ window.localStorage.setItem('bio004-poll-key', pKey); }catch(e){}
    }
    return pKey;
  }
  function forgetKey(){
    pKey = '';
    try{ window.localStorage.removeItem('bio004-poll-key'); }catch(e){}
  }

  function el(t,c,x){ var n=document.createElement(t); if(c)n.className=c; if(x!=null)n.textContent=x; return n; }

  /* ---------- the component's own styling ----------
     Injected once, so a page that uses the poll does not have to carry a
     copy of these rules and the two surfaces cannot drift apart. Every
     colour here was checked against the surface it can land on: a bar
     grows underneath the text, so each pair was measured on the fill and
     on the card both. */
  (function injectCss(){
    if(document.getElementById('bio004-poll-css')) return;
    var css = [
      '.lp{--lp-card:#142235;--lp-bar:#1C2A40;--lp-bar-ok:#38290C;--lp-gold:#DCB45C;',
      '  --lp-gold-soft:#F2E2B8;--lp-ink:#E7EAF0;--lp-muted:#A9B4C4;--lp-terra:#EDB19A;',
      '  display:flex;flex-direction:column;gap:clamp(10px,1.6vh,20px)}',
      '.lp-live{display:flex;flex-wrap:wrap;align-items:baseline;gap:10px 18px}',
      '.lp-counter{display:flex;align-items:baseline;gap:12px}',
      '.lp-big{font-size:clamp(34px,4.6vw,72px);font-weight:800;color:var(--lp-gold);line-height:.9;font-variant-numeric:tabular-nums}',
      '.lp-of{font-size:clamp(13px,1.2vw,20px);color:var(--lp-muted);font-weight:600}',
      '.lp-dots{display:flex;flex-wrap:wrap;gap:clamp(5px,.5vw,9px);flex:1 1 200px}',
      /* Ornament. The number beside them is the real reading, which is why
         they are aria-hidden and why the empty state can sit quiet. */
      '.lp-dot{width:clamp(10px,1vw,18px);height:clamp(10px,1vw,18px);border-radius:50%;background:#405672;',
      '  transition:background 260ms ease,transform 260ms ease}',
      '.lp-dot.on{background:var(--lp-gold);transform:scale(1.12)}',
      '.lp-dot.on.five{background:#D9695A}',
      '.lp-results{display:flex;flex-direction:column;gap:clamp(7px,1vh,13px)}',
      '.lp-results.quiet .lp-num{opacity:0}',
      '.lp-res{position:relative;background:var(--lp-card);border-radius:12px;overflow:hidden;',
      '  padding:clamp(10px,1.4vh,17px) clamp(13px,1.2vw,20px);box-shadow:0 6px 18px rgba(0,0,0,.28)}',
      '.lp-fill{position:absolute;left:0;top:0;bottom:0;width:0;background:var(--lp-bar);',
      '  transition:width 700ms cubic-bezier(.22,1,.36,1)}',
      '.lp-res.correct .lp-fill{background:var(--lp-bar-ok)}',
      '.lp-rowin{position:relative;display:flex;align-items:center;gap:clamp(9px,.9vw,16px)}',
      '.lp-letter{flex:0 0 auto;width:clamp(28px,2.4vw,42px);height:clamp(28px,2.4vw,42px);border-radius:9px;',
      '  background:#20304A;color:var(--lp-ink);font-weight:800;display:flex;align-items:center;',
      '  justify-content:center;font-size:clamp(13px,1.2vw,20px)}',
      '.lp-res.correct .lp-letter{background:var(--lp-gold);color:#08101F}',
      '.lp-otext{flex:1 1 auto;font-size:clamp(13px,1.25vw,21px);font-weight:600;color:var(--lp-ink);line-height:1.3;min-width:0}',
      '.lp-num{flex:0 0 auto;font-size:clamp(15px,1.5vw,27px);font-weight:800;color:var(--lp-ink);font-variant-numeric:tabular-nums}',
      '.lp-res.correct .lp-otext,.lp-res.correct .lp-num{color:var(--lp-gold-soft)}',
      '.lp-verdict{position:relative;margin:7px 0 0;font-size:clamp(11px,1vw,16px);font-weight:600;',
      '  color:var(--lp-terra);display:flex;align-items:center;gap:8px}',
      '.lp-res.correct .lp-verdict{color:var(--lp-gold)}',
      '.lp-mark{font-weight:800}',
      '.lp-status{margin:0;color:var(--lp-muted);font-size:clamp(11px,.9vw,14px)}',
      '.lp-join{display:flex;gap:clamp(12px,1.3vw,22px);align-items:center;background:#142235;',
      '  border-radius:16px;padding:clamp(12px,1.5vh,20px) clamp(14px,1.3vw,24px);box-shadow:0 10px 30px rgba(0,0,0,.35)}',
      '.lp-qr{background:#fff;border-radius:10px;padding:8px;line-height:0}',
      '.lp-qr img,.lp-qr canvas{display:block;width:clamp(80px,7vw,120px);height:auto}',
      '.lp-jlabel{font-size:clamp(10px,.8vw,12px);letter-spacing:.14em;text-transform:uppercase;color:#A9B4C4;font-weight:700;margin:0 0 2px}',
      '.lp-jurl{font-size:clamp(11px,.9vw,15px);color:#E7EAF0;margin:0 0 10px;font-weight:500;overflow-wrap:anywhere;max-width:26ch;line-height:1.35}',
      '.lp-code{font-size:clamp(26px,3vw,50px);font-weight:800;letter-spacing:.14em;color:#DCB45C;line-height:1;margin:0}',
      '@media (prefers-reduced-motion:reduce){.lp *{transition:none !important}.lp-dot.on{transform:none}}'
    ].join('');
    var st = document.createElement('style');
    st.id = 'bio004-poll-css';
    st.textContent = css;
    document.head.appendChild(st);
  })();


  function baseUrl(){ return window.location.href.split('?')[0]; }
  function studentBase(){ return CFG.studentPage || 'live-poll.html'; }
  function studentUrl(){
    var here = baseUrl().replace(/[^/]*$/, '');
    return here + studentBase() + '?room=' + ROOM;
  }
  function typedUrl(){ return studentUrl().replace(/^https?:\/\//,'').replace(/\?room=.*$/,''); }

  /* ============================================================
     PRESENTER PANEL
     ------------------------------------------------------------
     Renders one question into a host element and returns a small
     controller. A deck slide makes one of these; so does the
     standalone presenter page.

       var panel = BIO004Poll.panel(hostEl, {
         id: 'la-3', question: '...', options: [{t,ok,why}, ...]
       });
       panel.open(); panel.lock(); panel.reveal(); panel.clear();
       panel.destroy();

     The options are on screen from the moment the question opens so
     the room can read and argue about them. What is withheld until
     the lock is how many people picked each one, because a bar
     growing in front of a class that has not answered yet just tells
     the undecided which way to go.
     ============================================================ */
  function panel(host, q){
    var counts = [], total = 0, open = false, revealed = false, timer = null;
    var resultsEl, countEl, ofEl, dotsEl;

    host.innerHTML = '';
    host.classList.add('lp');

    var live = el('div','lp-live');
    var counter = el('div','lp-counter');
    countEl = el('span','lp-big','0');
    ofEl = el('span','lp-of','answers in');
    counter.appendChild(countEl); counter.appendChild(ofEl);
    dotsEl = el('div','lp-dots');
    dotsEl.setAttribute('aria-hidden','true');
    live.appendChild(counter); live.appendChild(dotsEl);
    host.appendChild(live);

    resultsEl = el('div','lp-results');
    host.appendChild(resultsEl);

    var status = el('p','lp-status');
    status.setAttribute('role','status');
    status.setAttribute('aria-live','polite');
    host.appendChild(status);

    buildDots();
    paintOptions();

    function buildDots(){
      dotsEl.innerHTML = '';
      for(var i=0;i<CLASS_SIZE;i++) dotsEl.appendChild(el('span','lp-dot'));
    }

    function push(extra){
      var args = { action:'set', room:ROOM, question:q.id, key:presenterKey() };
      Object.keys(extra).forEach(function(k){ args[k] = extra[k]; });
      return call(args).then(function(r){
        if(r && r.ok === false && /key/i.test(r.error||'')){
          forgetKey();
          say('That presenter key was refused. Reload and it will ask again.');
        }
        return r;
      }).catch(function(){ say('Could not reach the poll.'); });
    }

    function refresh(){
      return call({ action:'tally', room:ROOM, question:q.id }).then(function(r){
        if(!r || !r.ok) return;
        counts = r.counts || []; total = r.total || 0;
        paintLive();
        if(!open) paintOptions();
      }).catch(function(){});
    }

    function paintLive(){
      countEl.textContent = String(total);
      ofEl.textContent = total > CLASS_SIZE
        ? ('answers in, more than the ' + CLASS_SIZE + ' expected')
        : 'answers in';
      /* Every fifth filled dot is terra, so the row can be counted in fives
         from the back of the room instead of estimated. */
      var d = dotsEl.children;
      for(var i=0;i<d.length;i++){
        d[i].className = 'lp-dot' + (i < total ? ' on' : '') + (((i+1) % 5 === 0) ? ' five' : '');
      }
    }

    function paintOptions(){
      resultsEl.className = 'lp-results' + (open ? ' quiet' : '');
      resultsEl.innerHTML = '';
      var max = Math.max(1, total);
      q.options.forEach(function(o, j){
        var n = counts[j] || 0;
        var pct = open ? 0 : Math.round((n / max) * 100);
        var row = el('div','lp-res' + (revealed && o.ok ? ' correct' : ''));
        var fill = el('span','lp-fill');
        row.appendChild(fill);

        var inner = el('div','lp-rowin');
        var ltr = el('span','lp-letter', LETTERS[j]);
        ltr.setAttribute('aria-hidden','true');
        inner.appendChild(ltr);
        inner.appendChild(el('span','lp-otext', o.t));
        inner.appendChild(el('span','lp-num', open ? '' : (n + '  ' + pct + '%')));
        row.appendChild(inner);

        if(revealed){
          var line = el('p','lp-verdict');
          var mark = el('span','lp-mark', o.ok ? '✓' : '✕');
          mark.setAttribute('aria-hidden','true');
          line.appendChild(mark);
          line.appendChild(el('span', null, o.ok
            ? 'This is the deciding feature.'
            : (o.why || 'True, but it does not decide it.')));
          row.appendChild(line);
        }
        resultsEl.appendChild(row);
        window.setTimeout(function(){ fill.style.width = pct + '%'; }, 30);
      });
    }

    function say(t){ status.textContent = t; }

    var api = {
      id: q.id,
      open: function(){
        open = true; revealed = false; counts = []; total = 0;
        buildDots(); paintLive(); paintOptions();
        push({ open:'1', reveal:'0' });
        if(!timer) timer = setInterval(refresh, 2000);
        say('Open. Students can answer.');
        return api;
      },
      lock: function(){
        if(!open) return api;
        open = false;
        push({ open:'0', reveal:'0' });
        refresh().then(function(){ paintOptions(); say('Locked. ' + total + ' answers counted.'); });
        paintOptions();
        return api;
      },
      reveal: function(){
        if(open) api.lock();
        revealed = true;
        push({ open:'0', reveal:'1' });
        paintOptions();
        say('Revealed.');
        return api;
      },
      clear: function(){
        return call({ action:'clear', room:ROOM, question:q.id, key:presenterKey() })
          .then(function(){ api.open(); say('Cleared. Open again with no answers.'); })
          .catch(function(){ say('Could not clear it.'); });
      },
      isOpen: function(){ return open; },
      isRevealed: function(){ return revealed; },
      destroy: function(){ if(timer){ clearInterval(timer); timer = null; } }
    };
    return api;
  }

  /* ============================================================
     JOIN CARD
     Draws the QR, the typed address and the room code into a host.
     ============================================================ */
  function joinCard(host){
    host.innerHTML = '';
    host.classList.add('lp-join');
    var qr = el('div','lp-qr');
    qr.setAttribute('aria-hidden','true');
    host.appendChild(qr);
    var side = el('div');
    side.appendChild(el('p','lp-jlabel','Join at'));
    side.appendChild(el('p','lp-jurl', typedUrl()));
    side.appendChild(el('p','lp-jlabel','Room code'));
    side.appendChild(el('p','lp-code', ROOM));
    host.appendChild(side);
    try{
      if(window.QRCode){
        new window.QRCode(qr, { text:studentUrl(), width:120, height:120,
          colorDark:'#8B1D1D', colorLight:'#FFFFFF' });
        return;
      }
    }catch(e){}
    /* No QR library, no problem. The room code and the typed address on the
       card are enough to join, so the card just loses a picture. */
    qr.parentNode.removeChild(qr);
  }

  /* ============================================================
     STUDENT APP
     Follows whatever the presenter has open, so a phone never has to
     be told which question is live.
     ============================================================ */
  function student(host, questions){
    var currentId = null, choice = null, locked = false;

    function find(id){
      for(var i=0;i<questions.length;i++){ if(questions[i].id === id) return questions[i]; }
      return null;
    }
    function waiting(msg){
      host.innerHTML = '';
      var card = el('div','pcard');
      card.appendChild(el('h2','pq','Nothing to answer yet'));
      var p = el('p','pstat', msg);
      p.setAttribute('role','status'); p.setAttribute('aria-live','polite');
      card.appendChild(p);
      host.appendChild(card);
    }
    function draw(q){
      host.innerHTML = '';
      var card = el('div','pcard');
      card.appendChild(el('h2','pq', q.question || q.q));
      if(locked){
        var m = el('p','pstat', choice == null
          ? 'This one is closed. Nothing was recorded for you.'
          : 'Closed. Your answer was ' + LETTERS[choice] + '. Look up at the screen.');
        m.setAttribute('role','status'); m.setAttribute('aria-live','polite');
        card.appendChild(m);
        host.appendChild(card);
        return;
      }
      var wrap = el('div','choices');
      q.options.forEach(function(o, j){
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'choice';
        b.setAttribute('aria-pressed', choice === j ? 'true' : 'false');
        var l = el('span','ltr', LETTERS[j]);
        l.setAttribute('aria-hidden','true');
        b.appendChild(l);
        b.appendChild(el('span', null, o.t));
        b.addEventListener('click', function(){ vote(q, j); });
        wrap.appendChild(b);
      });
      card.appendChild(wrap);
      var stat = el('p','pstat', choice == null
        ? 'Tap one. You can change it until the poll closes.'
        : 'Sent. ' + LETTERS[choice] + ' is your answer. Tap another to change it.');
      stat.setAttribute('role','status'); stat.setAttribute('aria-live','polite');
      stat.style.marginTop = '16px';
      card.appendChild(stat);
      host.appendChild(card);
      host.appendChild(el('p','pmuted','Room ' + ROOM + '. No names are stored, only which option was tapped.'));
    }
    function vote(q, j){
      choice = j;
      draw(q);
      call({ action:'vote', room:ROOM, question:q.id, option:j, token:token })
        .then(function(r){ if(r && r.locked){ locked = true; draw(q); } })
        .catch(function(){});
    }
    function tick(){
      call({ action:'current', room:ROOM }).then(function(r){
        if(!r || !r.ok) return waiting('Waiting for the room to open.');
        var q = find(r.question);
        if(!q) return waiting('Waiting for the next question.');
        if(q.id !== currentId){ currentId = q.id; choice = null; }
        locked = !r.open;
        draw(q);
      }).catch(function(){ waiting('Cannot reach the poll right now. It will keep trying.'); });
    }
    tick();
    return setInterval(tick, 2500);
  }

  window.BIO004Poll = {
    room: ROOM,
    endpoint: ENDPOINT,
    classSize: CLASS_SIZE,
    letters: LETTERS,
    call: call,
    panel: panel,
    joinCard: joinCard,
    student: student,
    studentUrl: studentUrl,
    typedUrl: typedUrl,
    setEndpoint: function(u){ ENDPOINT = u; window.BIO004Poll.endpoint = u; }
  };
})();
