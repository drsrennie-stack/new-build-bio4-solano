/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   bio004-library.js

   Draws the two simple library pages:
     bio004-videos.html   every concept video, by module and topic
     bio004-notes.html    every notes page, by module and topic

   The page sets window.BIO004_LIBRARY = 'videos' or 'notes' before
   loading this file. Everything comes from session-links.js (the
   same file the calendar and week pages read) and the module list in
   schedule-fall2026.js, so a new video or notes page added there
   shows up here on its own. Nothing is typed in twice.

   The current module is marked Now and the page opens on it.
   ============================================================ */
(function () {
  'use strict';
  var KIND = window.BIO004_LIBRARY === 'notes' ? 'notes' : 'videos';
  var SL = window.BIO004_SESSION_LINKS || {};
  var MODS = window.BIO004_MODULES || [];

  var sec = null;
  try {
    var m = location.search.match(/[?&]sec=(mw|tr-am|tr-eve)/);
    sec = m ? m[1] : localStorage.getItem('bio004-section');
  } catch (e) {}
  if (sec !== 'mw' && sec !== 'tr-am' && sec !== 'tr-eve') sec = null;
  function go(u) { return u + (sec ? (u.indexOf('?') > -1 ? '&' : '?') + 'sec=' + sec : ''); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* which module each week belongs to; a week shared by two modules
     belongs to the later one, the same rule Quick Access uses */
  var wkMod = {};
  MODS.forEach(function (md) { (md.weeks || []).forEach(function (w) { wkMod[w] = md.n; }); });

  /* the current module: the next exam that has not happened yet */
  var NOW = new Date(), p2 = function (n) { return (n < 10 ? '0' : '') + n; };
  var TODAY = NOW.getFullYear() + '-' + p2(NOW.getMonth() + 1) + '-' + p2(NOW.getDate());
  var EXAMS = sec === 'mw' ? ['2026-09-09', '2026-09-30', '2026-10-21', '2026-11-16', '2026-12-09']
                           : ['2026-09-08', '2026-09-29', '2026-10-22', '2026-11-17', '2026-12-10'];
  var CUR = 5;
  for (var i = 0; i < EXAMS.length; i++) { if (TODAY <= EXAMS[i]) { CUR = i + 1; break; } }

  /* collect each topic once, in course order */
  var byMod = {}, seen = {};
  /* A class day belongs to the module of the next exam after it. That
     follows the real schedule better than week numbers, since the week
     of an exam holds the end of one module and the start of the next.
     The later of the two tracks' dates is used, because both tracks
     teach the same material. */
  var EXALL = ['2026-09-09', '2026-09-30', '2026-10-22', '2026-11-17', '2026-12-10'];
  function modOf(d) { for (var k = 0; k < EXALL.length; k++) { if (d <= EXALL[k]) return k + 1; } return 5; }
  Object.keys(SL).sort().forEach(function (d) {
    var e = SL[d], mod = modOf(d);
    if (!mod) return;
    (e[KIND] || []).forEach(function (it) {
      /* once per module: a video taught again in a later module (muscle
         tissue in Module 1 and Module 3) shows in both */
      if (!it || !it.u || seen[mod + '|' + it.u]) return;
      seen[mod + '|' + it.u] = 1;
      (byMod[mod] = byMod[mod] || []).push({ u: it.u, t: it.t || it.u });
    });
  });

  var IC = KIND === 'videos'
    ? '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9l5 3-5 3z"/>'
    : '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h7M9 17h5"/>';
  function icon() { return '<span class="lb-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + IC + '</svg></span>'; }

  var css = ''
  + '*{box-sizing:border-box}'
  + 'html,body{margin:0;background:#FAFAF9;color:#060B1A;font-family:"Plus Jakarta Sans",system-ui,-apple-system,"Segoe UI",Arial,sans-serif;line-height:1.45}'
  + '.lb-skip{position:absolute;left:12px;top:-60px;background:#060B1A;color:#fff;padding:10px 14px;border-radius:8px;z-index:10}.lb-skip:focus{top:12px}'
  + '.lb-band{background:linear-gradient(120deg,#060B1A 0%,#0E1A33 60%,#1B2A4A 100%);color:#fff;padding:28px 0 26px}'
  + '.lb-in{max-width:980px;margin:0 auto;padding:0 22px}'
  + '.lb-eye{margin:0;font-family:"DM Sans",system-ui,sans-serif;font-size:12.5px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#E3C27D}'
  + '.lb-band h1{margin:6px 0 4px;font-size:clamp(32px,5.5vw,48px);font-weight:800;letter-spacing:-.025em;line-height:1.05}'
  + '.lb-band h1 .hl{color:#E3C27D}'
  + '.lb-band p.lb-sub{margin:0;font-size:16px;color:#C8D2DA}'
  + '.lb-jump{list-style:none;margin:16px 0 0;padding:0;display:flex;flex-wrap:wrap;gap:8px}'
  + '.lb-jump a{display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:6px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.28);color:#fff;font-size:14px;font-weight:700;text-decoration:none}'
  + '.lb-jump a:hover{border-color:#E3C27D}'
  + '.lb-jump a.now{background:#E3C27D;border-color:#E3C27D;color:#060B1A}'
  + 'main{max-width:980px;margin:0 auto;padding:22px 22px 60px;display:grid;gap:14px}'
  + '.lb-mod{background:#fff;border:1px solid #E3E4E8;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.06);scroll-margin-top:12px}'
  + '.lb-head{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:4px 16px;align-items:center;padding:16px 22px;background:linear-gradient(135deg,#E1E5ED,#F3F4F7);cursor:pointer;list-style:none}'
  + '.lb-head::-webkit-details-marker{display:none}'
  + '.lb-head:focus-visible{outline:3px solid #B8924A;outline-offset:-3px}'
  + '.lb-chev{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;background:#fff;border:1px solid #D2D6DE;color:#7A2E24;font-weight:800;transition:transform 200ms ease}'
  + '.lb-mod[open] .lb-chev{transform:rotate(180deg)}'
  + '.lb-count{font-family:"DM Sans",system-ui,sans-serif;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#454B5C}'
  + '.lb-mod:nth-child(2) .lb-head{background:linear-gradient(135deg,#F3E8D2,#FBF6EC)}'
  + '.lb-mod:nth-child(3) .lb-head{background:linear-gradient(135deg,#DCE3EE,#F1F4F8)}'
  + '.lb-mod:nth-child(4) .lb-head{background:linear-gradient(135deg,#EFDCD6,#F9F1EE)}'
  + '.lb-mod:nth-child(5) .lb-head{background:linear-gradient(135deg,#DFE6E2,#F2F5F3)}'
  + '.lb-num{font-size:clamp(56px,7vw,76px);font-weight:800;line-height:.85;letter-spacing:-.05em;color:#7A2E24}'
  + '.lb-h2{margin:0;font-size:22px;font-weight:800;color:#060B1A;line-height:1.2}'
  + '.lb-mt{display:block;margin-top:2px;font-size:13.5px;font-weight:500;color:#2A3949}'
  + '.lb-count{display:block;margin-top:4px}'
  + '.lb-now{display:inline-block;margin-left:8px;vertical-align:middle;font-family:"DM Sans",system-ui,sans-serif;font-size:10.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;border-radius:999px;padding:3px 9px;background:#060B1A;color:#E3C27D}'
  + '.lb-list{list-style:none;margin:0;padding:14px 16px 16px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-auto-rows:1fr;gap:8px;align-content:center}'
  + '@media (max-width:760px){.lb-list{grid-template-columns:repeat(2,minmax(0,1fr))}}'
  + '@media (max-width:480px){.lb-list{grid-template-columns:minmax(0,1fr)}}'
  + '.lb-list a{display:flex;align-items:center;gap:10px;height:100%;min-height:46px;padding:6px 12px 6px 6px;background:#fff;border:1px solid #E1E3E8;border-radius:10px;color:#060B1A;font-size:14.5px;font-weight:700;line-height:1.25;text-decoration:none;transition:border-color 150ms ease,transform 150ms ease}'
  + '.lb-list a:hover{border-color:#060B1A;transform:translateY(-1px)}'
  + '.lb-ic{width:30px;height:30px;border-radius:8px;display:grid;place-items:center;flex:none;color:#fff;background:' + (KIND === 'videos' ? '#7A2E24' : '#060B1A') + '}'
  + '.lb-ic svg{width:16px;height:16px}'
  + '.lb-ar{margin-left:auto;color:#B8924A;font-weight:800;padding-left:6px}'
  + '.lb-empty{padding:16px 18px;margin:0;font-size:14px;color:#454B5C;align-self:center}'
  + '.lb-other{margin:4px 0 0;font-size:14px;color:#454B5C;text-align:center}'
  + '.lb-other a{color:#7A2E24;font-weight:800}'
  + 'a:focus-visible{outline:3px solid #B8924A;outline-offset:2px;border-radius:8px}'
  + '@media (prefers-reduced-motion:reduce){.lb-list a,.lb-chev{transition:none}.lb-list a:hover{transform:none}}'
  + '@media print{.lb-mod{break-inside:avoid}}'
  + '@media print{.lb-band{background:none;color:#060B1A}.lb-jump{display:none}}';

  var T = KIND === 'videos'
    ? { h: 'Concept <span class="hl">Videos</span>', sub: 'Pick your module, then the topic. Watch after you work the pre-work sheet.', other: '<a href="' + go('bio004-notes.html') + '" target="_top">Looking for the notes?</a>', empty: 'Videos for this module are coming.' }
    : { h: 'Course <span class="hl">Notes</span>', sub: 'Pick your module, then the topic. Open them while you work the pre-work sheet.', other: '<a href="' + go('bio004-videos.html') + '" target="_top">Looking for the videos?</a>', empty: 'Notes for this module are coming.' };

  var jump = '', body = '';
  MODS.forEach(function (md) {
    var n = md.n, list = byMod[n] || [];
    jump += '<li><a href="#mod-' + n + '"' + (n === CUR ? ' class="now" aria-current="true"' : '') + '>Module ' + n + (n === CUR ? ' &middot; Now' : '') + '</a></li>';
    body += '<details class="lb-mod" id="mod-' + n + '"' + (n === CUR ? ' open' : '') + '>'
      + '<summary class="lb-head"><span class="lb-num" aria-hidden="true">' + n + '</span>'
      + '<h2 id="mh' + n + '" class="lb-h2">Module ' + n + (n === CUR ? '<span class="lb-now">Now</span>' : '')
      + '<span class="lb-mt">' + esc(md.title || '') + '</span>'
      + '<span class="lb-count">' + list.length + ' ' + (KIND === 'videos' ? (list.length === 1 ? 'video' : 'videos') : (list.length === 1 ? 'notes page' : 'notes pages')) + '</span></h2>'
      + '<span class="lb-chev" aria-hidden="true">&#8964;</span></summary>'
      + (list.length
          ? '<ul class="lb-list">' + list.map(function (it) {
              return '<li><a href="' + esc(go(it.u)) + '" target="_top">' + icon() + '<span>' + esc(it.t) + '</span><span class="lb-ar" aria-hidden="true">&#8594;</span></a></li>';
            }).join('') + '</ul>'
          : '<p class="lb-empty">' + T.empty + '</p>')
      + '</details>';
  });

  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var root = document.getElementById('lib');
  root.innerHTML = '<a class="lb-skip" href="#main">Skip to the list</a>'
    + '<header class="lb-band"><div class="lb-in"><p class="lb-eye">BIO 004 &middot; Human Anatomy &middot; Fall 2026</p>'
    + '<h1>' + T.h + '</h1><p class="lb-sub">' + T.sub + '</p>'
    + '<ul class="lb-jump" aria-label="Jump to a module">' + jump + '</ul></div></header>'
    + '<main id="main" tabindex="-1">' + body + '<p class="lb-other">' + T.other + '</p></main>';

  /* The current module is open and the others are folded. A module
     pill, or a link ending in #mod-4, opens that module and goes to it. */
  function openMod(id) {
    var d = document.getElementById(id); if (!d) return;
    d.open = true;
    setTimeout(function () { d.scrollIntoView({ block: 'start' }); var s = d.querySelector('summary'); if (s) s.focus({ preventScroll: true }); }, 30);
  }
  root.querySelectorAll('.lb-jump a').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); openMod(a.getAttribute('href').slice(1)); });
  });
  if (/^#mod-[1-5]$/.test(location.hash)) openMod(location.hash.slice(1));

  /* iframe height sender */
  function send() {
    var h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    try { parent.postMessage({ type: 'resize', id: 'bio004-' + KIND, frameId: 'bio004-' + KIND, height: h }, '*'); } catch (e) {}
  }
  window.addEventListener('load', send); window.addEventListener('resize', send);
  if (window.ResizeObserver) { try { new ResizeObserver(send).observe(document.body); } catch (e) {} }
})();
