/* ============================================================
   THE COURSE ENTRY ("Welcome to Anatomy").
   A navy full-screen curtain with white cards that appears when a
   student ARRIVES at the course (from Canvas, a phone link or a
   fresh tab). Every card has its own colored icon so no two read
   alike. One wide card goes to this week, four cards answer the
   questions students ask most, three small rows open Lecture, Lab
   and the study steps, and one line shows the newest announcement.
   Details (help contacts, lecture and lab tools, announcements)
   stay hidden until a card is chosen.

   Nothing is remembered on purpose, so a student who picked Lab
   once is not funneled to Lab forever. Escape closes it. On the
   calendar page the curtain simply lifts to show the calendar.

   To put it on a page: <script src="bio004-launchpad-overlay.js">
   after the page's content. bio004-launchpad.html shows the same
   screen on its own (set window.BIO004_LAUNCHPAD_STANDALONE first).
   ============================================================ */
(function () {
  'use strict';
  if (window.__BIO004_LAUNCHPAD__) return;
  window.__BIO004_LAUNCHPAD__ = true;
  var STANDALONE = !!window.BIO004_LAUNCHPAD_STANDALONE;
  /* Canvas shows the calendar inside an iframe, and the curtain is
     MEANT to appear there first. The only opt-out is explicit: add
     ?nolaunch=1 for an embed that should skip straight to the page. */
  if (!STANDALONE && /[?&]nolaunch=1/.test(window.location.search)) return;

  /* The curtain is for students ARRIVING at the course. If the click
     came from another page on this same site, it stays down, so
     "Go to the calendar" never loops back to the curtain. */
  if (!STANDALONE) {
    try {
      if (document.referrer) {
        var from = document.createElement('a');
        from.href = document.referrer;
        if (from.host === window.location.host) return;
      }
    } catch (e) {}
  }

  var css = ''
  + '.lpov{position:fixed;inset:0;z-index:2147482998;background:#08101F;overflow:auto;'
  + 'font-family:"Plus Jakarta Sans",system-ui,-apple-system,"Segoe UI",Arial,sans-serif;color:#F4EFE8;line-height:1.45}'
  + '.lpov,.lpov *{box-sizing:border-box}'
  + '.lpov.lp-standalone{position:static;min-height:100vh}'
  + '.lpov .lp-wrap{max-width:860px;margin:0 auto;padding:40px 18px 56px}'
  + '.lpov .lp-eyebrow{font-family:"DM Sans",system-ui,sans-serif;font-size:clamp(15px,2.2vw,18px);font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#E3C27D;margin:0}'
  + '.lpov h2.lp-h{font-size:clamp(28px,5vw,40px);font-weight:800;letter-spacing:-.02em;line-height:1.1;margin:10px 0 4px;color:#fff}'
  + '.lpov h2.lp-h:focus{outline:none}'
  + '.lpov .lp-sub{font-size:17px;color:#C8D2DA;margin:0 0 24px}'
  /* cards */
  + '.lpov .lp-grid{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}'
  + '@media (max-width:820px){.lpov .lp-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}'
  + '@media (max-width:560px){.lpov .lp-grid{grid-template-columns:minmax(0,1fr);gap:10px}}'
  + '.lpov .lp-card{display:grid;grid-template-columns:48px minmax(0,1fr);gap:14px;align-items:center;width:100%;height:100%;text-align:left;'
  + 'background:#fff;color:#0B1530;border:0;border-radius:16px;padding:18px;text-decoration:none;cursor:pointer;font:inherit;'
  + 'box-shadow:0 14px 34px -14px rgba(0,0,0,.65);transition:transform 200ms ease,box-shadow 200ms ease}'
  + '.lpov .lp-card:hover{transform:translateY(-2px);box-shadow:0 22px 44px -16px rgba(0,0,0,.75)}'
  + '.lpov .lp-wide{grid-column:1/-1}'
  + '.lpov .lp-wide .lp-card{grid-template-columns:48px minmax(0,1fr) auto;padding:20px}'
  /* the study door stands out: gold outline and a larger title, so the way to the study steps is obvious */
  + '.lpov .lp-card.lp-study{box-shadow:0 0 0 3px #E3C27D,0 14px 34px -14px rgba(0,0,0,.65)}'
  + '.lpov .lp-card.lp-study .lp-t{font-size:21px}'
  + '.lpov .lp-go{font-size:22px;color:#7A2E24;font-weight:700}'
  + '.lpov .lp-ic{width:48px;height:48px;border-radius:14px;display:grid;place-items:center;color:#fff}'
  + '.lpov .lp-ic svg{width:24px;height:24px}'
  + '.lpov .ic-navy{background:#0B1530}.lpov .ic-terra{background:#7A2E24}.lpov .ic-gold{background:#B8924A;color:#0B1530}'
  + '.lpov .lp-t{display:block;font-size:18px;font-weight:800;line-height:1.25}'
  + '.lpov .lp-s{display:block;margin-top:3px;font-size:14px;color:#454B5C}'
  /* small rows */
  + '.lpov .lp-rows{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:14px}'
  + '@media (max-width:720px){.lpov .lp-rows{grid-template-columns:minmax(0,1fr);gap:10px}}'
  + '.lpov .lp-row{display:flex;align-items:center;gap:12px;width:100%;background:rgba(255,255,255,.07);color:#fff;border:1px solid rgba(255,255,255,.22);'
  + 'border-radius:14px;padding:12px 14px;cursor:pointer;font:inherit;text-align:left;text-decoration:none;min-height:56px;transition:background 150ms ease,border-color 150ms ease}'
  + '.lpov .lp-row:hover{background:rgba(255,255,255,.13);border-color:#E3C27D}'
  + '.lpov .lp-row .lp-ic{width:34px;height:34px;border-radius:10px}.lpov .lp-row .lp-ic svg{width:18px;height:18px}'
  + '.lpov .lp-row b{display:block;font-size:15.5px;font-weight:800}'
  + '.lpov .lp-row small{display:block;font-size:12.5px;color:#C8D2DA}'
  + '.lpov .lp-row .lp-chev{margin-left:auto;color:#E3C27D;font-size:18px}'
  /* announcement line */
  + '.lpov .lp-annline{display:flex;flex-wrap:wrap;align-items:center;gap:6px 12px;width:100%;margin-top:18px;background:none;color:#fff;font:inherit;text-align:left;'
  + 'border:0;border-top:1px solid rgba(255,255,255,.18);border-bottom:1px solid rgba(255,255,255,.18);padding:14px 4px;cursor:pointer;min-height:56px}'
  + '.lpov .lp-annline:hover .lp-at{text-decoration:underline;text-underline-offset:4px}'
  + '.lpov .lp-annline svg{width:22px;height:22px;color:#E3C27D;flex:none}'
  + '.lpov .lp-ad{font-family:"DM Sans",system-ui,sans-serif;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#C8D2DA}'
  + '.lpov .lp-at{flex:1 1 180px;font-weight:700}'
  + '@media (max-width:560px){.lpov .lp-hsm{display:none}.lpov .lp-at{flex-basis:0}}'
  + '.lpov .lp-new{font-size:11.5px;font-weight:800;color:#0B1530;background:#E3C27D;border-radius:999px;padding:3px 9px}'
  /* footer links */
  + '.lpov .lp-foot{display:flex;flex-wrap:wrap;gap:10px 22px;justify-content:center;align-items:center;margin-top:20px;font-size:14.5px;color:#C8D2DA}'
  + '.lpov .lp-foot a,.lpov .lp-foot button{color:#fff;font:inherit;font-weight:700;background:none;border:0;padding:6px 0;cursor:pointer;'
  + 'text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:4px;min-height:40px}'
  + '.lpov .lp-foot a:hover,.lpov .lp-foot button:hover{color:#E3C27D}'
  /* opened panel */
  + '.lpov .lp-panel{background:#fff;color:#0B1530;border-radius:16px;padding:22px;box-shadow:0 14px 34px -14px rgba(0,0,0,.65)}'
  + '.lpov .lp-back{font:inherit;font-size:14px;font-weight:700;color:#0B1530;background:#ECEEF3;border:0;border-radius:999px;padding:8px 16px;min-height:44px;cursor:pointer}'
  + '.lpov .lp-back:hover{background:#E1E4EB}'
  + '.lpov .lp-phead{display:flex;align-items:center;gap:12px;margin:16px 0 8px}'
  + '.lpov .lp-phead h3{margin:0;font-size:22px;font-weight:800}'
  + '.lpov .lp-grp{margin:16px 0 4px;font-family:"DM Sans",system-ui,sans-serif;font-size:11.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#7A2E24}'
  + '.lpov .lp-res{list-style:none;margin:0;padding:0}'
  + '.lpov .lp-res li{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 12px;padding:11px 0;border-bottom:1px solid #E3E4E8}'
  + '.lpov .lp-res li:last-child{border-bottom:0}'
  + '.lpov .lp-res .lp-n{font-weight:800;color:#0B1530;text-decoration:none}'
  + '.lpov .lp-res a.lp-n:hover{text-decoration:underline;text-underline-offset:4px}'
  + '.lpov .lp-res .lp-w{font-size:14px;color:#454B5C}'
  + '.lpov .lp-mods{display:flex;flex-wrap:wrap;gap:6px;width:100%;margin-top:6px}'
  + '.lpov .lp-mods a{display:inline-flex;align-items:center;min-height:34px;padding:0 12px;border-radius:999px;font-size:13px;font-weight:700;'
  + 'color:#0B1530;background:#ECEEF3;text-decoration:none}'
  + '.lpov .lp-mods a.now{background:#0B1530;color:#fff}'
  + '.lpov .lp-dqrw{width:100%}'
  + '.lpov .lp-dqr{display:inline-block;background:#fff;border:1px solid #E3E4E8;border-radius:10px;padding:6px;line-height:0;margin-top:6px}'
  + '.lpov .lp-dqr svg{width:92px;height:92px;display:block}'
  + '.lpov .lp-ai{padding:14px 0;border-bottom:1px solid #E3E4E8;display:grid;gap:4px}'
  + '.lpov .lp-ai .lp-ad{color:#454B5C}'
  + '.lpov .lp-ai b{font-size:16px}'
  + '.lpov .lp-ai p{margin:0;font-size:14.5px;color:#454B5C}'
  + '.lpov .lp-ai a{font-weight:700;color:#7A2E24;font-size:14px}'
  + '.lpov .lp-note{margin:12px 0 0;font-size:13px;color:#454B5C}'
  + '.lpov .lp-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}'
  + '.lpov a:focus-visible,.lpov button:focus-visible,.lpov h3:focus-visible{outline:3px solid #E3C27D;outline-offset:3px;border-radius:8px}'
  + '.lpov .lp-panel a:focus-visible,.lpov .lp-panel button:focus-visible{outline-color:#0B1530}'
  + '@media (prefers-reduced-motion:reduce){.lpov *{transition:none!important}.lpov .lp-card:hover{transform:none}}'
  + '@media print{.lpov{display:none}}';

  function icon(path, cls) {
    return '<span class="lp-ic ' + (cls || '') + '" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + path + '</svg></span>';
  }
  var I = {
    flag: '<path d="M5 3v18"/><path d="M5 4h11l-2 4 2 4H5"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.4V14"/><path d="M12 17.2v.3"/>',
    exam: '<rect x="5.5" y="5" width="13" height="16" rx="2"/><path d="M9 5V3.5h6V5"/><path d="M9.5 13.5l2 2 3.5-4"/>',
    cal: '<rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.1-4.6A8 8 0 1 1 21 12z"/>',
    book: '<path d="M3 5.5c2.8-1 5.8-1 9 1v13c-3.2-2-6.2-2-9-1z"/><path d="M21 5.5c-2.8-1-5.8-1-9 1v13c3.2-2 6.2-2 9-1z"/>',
    flask: '<path d="M10 2v7.5L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9.5V2"/><path d="M8 2h8"/>',
    steps: '<path d="M4 20h4v-4h4v-4h4V8h4"/>',
    mega: '<path d="m3 11 18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    doc: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M10 13h6M10 17h6"/>'
  };
  var SYLLABUS = { 'mw': ['syllabus-class1.html', 'Mon / Wed afternoon'], 'tr-am': ['syllabus-class2.html', 'Tue / Thu morning'], 'tr-eve': ['syllabus-class3.html', 'Tue / Thu evening'] };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* ---------- the student's section, week and module ---------- */
  var sec = null;
  try {
    var m = window.location.search.match(/[?&]sec=(mw|tr-am|tr-eve)/);
    sec = m ? m[1] : (localStorage.getItem('bio004-section') || null);
  } catch (e) {}
  if (sec !== 'mw' && sec !== 'tr-am' && sec !== 'tr-eve') sec = null;
  function u(page) {
    var bits = page.split('#'), base = bits[0];
    if (sec) base += (base.indexOf('?') > -1 ? '&' : '?') + 'sec=' + sec;
    return base + (bits[1] ? '#' + bits[1] : '');
  }
  function go(page) { return 'href="' + u(page) + '" target="_top"'; }
  function ext(url) { return 'href="' + url + '" target="_blank" rel="noopener"'; }
  var NOWD = new Date();
  var WEEK = Math.floor((NOWD - new Date(2026, 7, 17)) / 604800000) + 1;
  var IN_TERM = WEEK >= 1 && WEEK <= 17;
  var EXAMS = { mw: ['2026-09-09', '2026-09-30', '2026-10-21', '2026-11-16', '2026-12-09'],
                tr: ['2026-09-08', '2026-09-29', '2026-10-22', '2026-11-17', '2026-12-10'] };
  var p2 = function (n) { return (n < 10 ? '0' : '') + n; };
  var TODAY = NOWD.getFullYear() + '-' + p2(NOWD.getMonth() + 1) + '-' + p2(NOWD.getDate());
  var MOD = 5, EL = EXAMS[sec === 'mw' ? 'mw' : 'tr'];
  for (var i = 0; i < EL.length; i++) { if (TODAY <= EL[i]) { MOD = i + 1; break; } }

  var here = (window.location.pathname.split('/').pop() || '').toLowerCase();
  var ON_CALENDAR = !STANDALONE && (here === 'bio004-course-calendar.html' || here === '');

  /* class Discord servers, one per section; the picked section wins */
  var DISCORD = {
    'mw':     { label: '80650 &middot; MW 12:30 to 4:50', url: 'https://discord.gg/8kr8b27ePE', qr: '<svg viewBox="0 0 33 33" class="segno"><path class="qrline" stroke="#0b1530" d="M2 2.5h7m1 0h2m1 0h3m2 0h1m5 0h7m-29 1h1m5 0h1m2 0h2m2 0h3m4 0h1m1 0h1m5 0h1m-29 1h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h2m2 0h2m2 0h1m1 0h1m1 0h3m1 0h1m-29 1h1m1 0h3m1 0h1m1 0h1m1 0h2m3 0h1m2 0h3m1 0h1m1 0h3m1 0h1m-29 1h1m1 0h3m1 0h1m2 0h3m1 0h2m3 0h1m3 0h1m1 0h3m1 0h1m-29 1h1m5 0h1m1 0h2m1 0h1m2 0h2m3 0h1m2 0h1m5 0h1m-29 1h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7m-21 1h2m1 0h4m2 0h1m-17 1h1m1 0h1m1 0h4m1 0h1m2 0h2m1 0h2m1 0h1m1 0h3m1 0h2m1 0h1m-29 1h2m1 0h1m3 0h1m1 0h3m3 0h1m1 0h1m2 0h1m1 0h2m4 0h1m-28 1h1m1 0h1m2 0h2m1 0h1m3 0h1m3 0h3m2 0h1m4 0h1m-28 1h2m1 0h1m1 0h1m4 0h1m1 0h1m5 0h1m2 0h2m2 0h3m-27 1h1m2 0h5m1 0h1m5 0h2m2 0h1m1 0h2m-23 1h1m3 0h1m1 0h3m2 0h2m3 0h1m1 0h3m1 0h1m1 0h1m1 0h1m-28 1h1m1 0h1m3 0h6m1 0h2m1 0h2m9 0h2m-29 1h1m4 0h1m1 0h2m1 0h1m1 0h1m1 0h1m2 0h5m1 0h1m4 0h1m-29 1h1m1 0h1m2 0h2m2 0h1m2 0h3m1 0h1m1 0h2m1 0h1m1 0h1m3 0h1m-27 1h5m3 0h1m2 0h1m2 0h1m1 0h1m2 0h4m3 0h2m-29 1h1m1 0h1m2 0h2m2 0h2m1 0h1m4 0h1m2 0h2m1 0h1m1 0h1m1 0h2m-20 1h1m2 0h8m3 0h2m3 0h1m-29 1h1m3 0h1m1 0h5m1 0h1m3 0h1m3 0h8m-20 1h1m2 0h2m4 0h4m3 0h1m2 0h2m-29 1h7m1 0h1m4 0h1m4 0h1m1 0h1m1 0h1m1 0h4m-28 1h1m5 0h1m1 0h1m1 0h2m1 0h4m3 0h1m3 0h1m1 0h3m-29 1h1m1 0h3m1 0h1m2 0h5m2 0h1m1 0h1m1 0h6m1 0h1m-28 1h1m1 0h3m1 0h1m1 0h2m2 0h1m2 0h1m1 0h1m1 0h4m1 0h1m1 0h1m1 0h1m-29 1h1m1 0h3m1 0h1m2 0h3m3 0h2m1 0h3m3 0h1m3 0h1m-29 1h1m5 0h1m1 0h3m1 0h1m3 0h2m2 0h2m1 0h1m3 0h1m-28 1h7m2 0h3m2 0h2m1 0h1m1 0h2m1 0h1m1 0h2m1 0h1"/></svg>' },
    'tr-am':  { label: '80654 &middot; TR 9:30 to 1:50',  url: 'https://discord.gg/XxhERvqf3N', qr: '<svg viewBox="0 0 33 33" class="segno"><path class="qrline" stroke="#0b1530" d="M2 2.5h7m2 0h1m2 0h1m1 0h2m4 0h1m1 0h7m-29 1h1m5 0h1m9 0h5m1 0h1m5 0h1m-29 1h1m1 0h3m1 0h1m1 0h3m2 0h1m1 0h1m1 0h4m1 0h1m1 0h3m1 0h1m-29 1h1m1 0h3m1 0h1m6 0h1m1 0h2m1 0h1m1 0h1m1 0h1m1 0h3m1 0h1m-29 1h1m1 0h3m1 0h1m1 0h1m1 0h2m1 0h2m3 0h1m3 0h1m1 0h3m1 0h1m-29 1h1m5 0h1m1 0h1m1 0h3m1 0h1m2 0h3m2 0h1m5 0h1m-29 1h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7m-19 1h3m1 0h1m2 0h2m-18 1h1m2 0h1m1 0h1m1 0h2m1 0h2m1 0h1m5 0h2m1 0h2m1 0h1m-24 1h1m1 0h1m1 0h1m7 0h2m1 0h1m4 0h2m1 0h3m-29 1h1m1 0h1m1 0h3m1 0h1m1 0h2m2 0h1m5 0h2m1 0h1m1 0h2m1 0h1m-29 1h1m1 0h3m3 0h1m2 0h1m1 0h2m1 0h3m2 0h1m1 0h2m2 0h2m-24 1h2m1 0h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h2m2 0h1m1 0h1m2 0h1m-29 1h1m1 0h3m4 0h3m1 0h6m3 0h1m1 0h1m1 0h1m1 0h1m-28 1h3m1 0h12m1 0h1m3 0h1m1 0h1m3 0h1m-28 1h1m2 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h2m2 0h1m1 0h2m1 0h1m-26 1h3m2 0h2m5 0h3m1 0h1m1 0h2m1 0h1m5 0h1m-28 1h1m3 0h1m5 0h1m1 0h1m1 0h1m2 0h2m2 0h1m1 0h2m3 0h1m-26 1h1m2 0h1m3 0h2m2 0h2m2 0h1m4 0h1m1 0h2m1 0h1m-22 1h1m1 0h1m1 0h10m2 0h3m2 0h1m-29 1h3m2 0h3m1 0h1m2 0h3m2 0h1m1 0h6m1 0h3m-21 1h2m4 0h2m3 0h2m3 0h1m1 0h1m1 0h1m-29 1h7m3 0h4m1 0h3m1 0h2m1 0h1m1 0h1m3 0h1m-29 1h1m5 0h1m6 0h1m1 0h1m1 0h1m1 0h2m3 0h2m1 0h1m-28 1h1m1 0h3m1 0h1m1 0h4m1 0h2m3 0h7m2 0h2m-29 1h1m1 0h3m1 0h1m3 0h2m1 0h1m2 0h1m1 0h1m4 0h1m1 0h1m1 0h1m-28 1h1m1 0h3m1 0h1m3 0h1m1 0h1m3 0h1m2 0h3m5 0h2m-29 1h1m5 0h1m1 0h2m3 0h1m3 0h1m1 0h5m1 0h1m1 0h2m-29 1h7m2 0h2m3 0h2m1 0h1m2 0h1m1 0h1m1 0h1m2 0h1"/></svg>' },
    'tr-eve': { label: '80655 &middot; TR 5:30 to 9:50',  url: 'https://discord.gg/7Z2k7DePJ6', qr: '<svg viewBox="0 0 33 33" class="segno"><path class="qrline" stroke="#0b1530" d="M2 2.5h7m2 0h1m1 0h1m4 0h1m1 0h2m2 0h7m-29 1h1m5 0h1m4 0h1m3 0h1m1 0h4m1 0h1m5 0h1m-29 1h1m1 0h3m1 0h1m1 0h3m2 0h1m1 0h1m1 0h2m3 0h1m1 0h3m1 0h1m-29 1h1m1 0h3m1 0h1m4 0h1m1 0h1m1 0h2m1 0h1m1 0h1m1 0h1m1 0h3m1 0h1m-29 1h1m1 0h3m1 0h1m1 0h4m1 0h2m2 0h2m3 0h1m1 0h3m1 0h1m-29 1h1m5 0h1m1 0h1m1 0h3m4 0h3m2 0h1m5 0h1m-29 1h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7m-19 1h4m3 0h1m-17 1h1m2 0h1m1 0h1m1 0h2m1 0h1m2 0h1m2 0h2m2 0h1m1 0h2m1 0h1m-25 1h2m1 0h1m1 0h2m6 0h2m2 0h1m2 0h3m1 0h3m-29 1h1m3 0h3m1 0h1m1 0h1m1 0h1m1 0h2m4 0h2m1 0h4m1 0h1m-29 1h1m1 0h1m1 0h1m3 0h1m2 0h1m1 0h2m1 0h3m1 0h2m1 0h1m3 0h2m-27 1h1m2 0h4m4 0h1m3 0h1m1 0h2m2 0h1m1 0h1m2 0h1m-27 1h3m4 0h3m1 0h4m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m-28 1h3m2 0h3m2 0h6m1 0h1m2 0h1m2 0h1m3 0h1m-25 1h2m2 0h2m2 0h3m1 0h2m2 0h1m2 0h1m1 0h1m-26 1h1m1 0h1m3 0h1m3 0h1m1 0h1m3 0h1m1 0h3m2 0h1m3 0h1m-28 1h2m2 0h2m1 0h2m3 0h1m1 0h1m2 0h2m2 0h2m1 0h1m3 0h1m-27 1h2m2 0h1m3 0h1m3 0h2m2 0h1m4 0h4m1 0h1m-27 1h1m4 0h3m3 0h6m1 0h1m2 0h2m3 0h1m-29 1h3m2 0h3m1 0h1m1 0h4m2 0h1m1 0h6m2 0h2m-21 1h2m3 0h3m3 0h2m3 0h1m1 0h1m1 0h1m-29 1h7m2 0h4m1 0h4m1 0h2m1 0h1m1 0h1m3 0h1m-29 1h1m5 0h1m3 0h1m2 0h3m1 0h1m1 0h2m3 0h2m1 0h1m-28 1h1m1 0h3m1 0h1m1 0h2m1 0h1m1 0h2m3 0h7m2 0h2m-29 1h1m1 0h3m1 0h1m3 0h1m2 0h2m1 0h1m1 0h1m4 0h1m2 0h2m-28 1h1m1 0h3m1 0h1m3 0h1m5 0h1m2 0h3m3 0h4m-29 1h1m5 0h1m1 0h2m1 0h1m1 0h1m3 0h1m4 0h2m1 0h1m1 0h2m-29 1h7m2 0h2m3 0h2m1 0h1m2 0h3m1 0h1m1 0h2"/></svg>' }
  };

  /* ---------- the panels behind the cards ---------- */
  function row(r) {
    var name = r.href
      ? '<a class="lp-n" ' + r.href + '>' + esc(r.name) + ' <span aria-hidden="true">' + (/_blank/.test(r.href) ? '&#8599;' : '&#8594;') + '</span>'
        + (/_blank/.test(r.href) ? '<span class="lp-sr"> (opens in a new tab)</span>' : '') + '</a>'
      : '<span class="lp-n">' + esc(r.name) + '</span>';
    return '<li>' + name + (r.what ? '<span class="lp-w">' + r.what + '</span>' : '') + (r.extra || '') + '</li>';
  }
  function list(rows) { return '<ul class="lp-res">' + rows.map(row).join('') + '</ul>'; }
  function mods() {
    var h = '<span class="lp-mods" role="group" aria-label="Lab structure list by module">';
    for (var n = 1; n <= 5; n++) h += '<a ' + go('module-' + n + '-structure-list.html') + (n === MOD ? ' class="now" aria-current="true"' : '') + '>Module ' + n + '</a>';
    return h + '</span>';
  }
  function discordRows() {
    var keys = sec ? [sec] : ['mw', 'tr-am', 'tr-eve'];
    return keys.map(function (k) {
      var d = DISCORD[k];
      return { name: 'Class Discord', href: ext(d.url), what: d.label + (sec ? ', click or scan' : ''),
               extra: sec ? '<span class="lp-dqrw"><span class="lp-dqr" aria-hidden="true">' + d.qr + '</span></span>' : '' };
    });
  }
  var PANELS = {
    help: { title: 'Need help?', icon: icon(I.chat, 'ic-gold'), body: function () {
      return '<p class="lp-grp">Talk to Dr. Rennie</p>' + list([
          { name: 'Office hours', what: 'Mondays 10:30 am to 12:30 pm in the conference room, and 30 minutes before every class' },
          { name: 'Open lab', what: 'Fridays 2:00 to 3:00 pm' },
          { name: 'Email', href: 'href="mailto:srennie@solano.edu"', what: 'srennie@solano.edu' }
        ])
        + '<p class="lp-grp">Study with others</p>' + list(discordRows().concat([
          { name: 'Study With Me', href: go('study-session-signup.html'), what: 'Join or host a study session' }
        ]))
        + '<p class="lp-grp">Tutoring</p>' + list([
          { name: 'ASTC tutoring', href: ext('https://welcome.solano.edu/astc-homepage'), what: 'Free, in person or on Zoom' },
          { name: 'Tutor Josh Roy', what: '' }
        ]);
    } },
    syllabus: { title: 'Syllabus and course information', icon: icon(I.doc, 'ic-navy'), body: function () {
      var syl = sec ? [{ name: 'Your syllabus', href: go(SYLLABUS[sec][0]), what: SYLLABUS[sec][1] }]
        : ['mw', 'tr-am', 'tr-eve'].map(function (k) { return { name: 'Syllabus', href: go(SYLLABUS[k][0]), what: SYLLABUS[k][1] }; });
      return '<p class="lp-grp">The course</p>' + list(syl.concat([
          { name: 'Device policy', href: go('digital-device-policy-agreement.html'), what: 'Sign it, then save the PDF for Canvas' }
        ]))
        + '<p class="lp-grp">The schedule</p>' + list([
          { name: 'Semester schedule', href: go('bio004-master-schedule-fall2026.html'), what: 'Every week of the semester on one page' },
          { name: 'Course calendar', href: ON_CALENDAR ? 'href="#" data-lpclose="1"' : go('bio004-course-calendar.html?nolaunch=1'), what: 'Every class day and what to prepare for it' },
          { name: 'Class day plan', href: go('bio004-course-calendar-alt.html'), what: 'Lecture and lab, before class and in class' }
        ]);
    } },
    news: { title: 'Announcements', icon: icon(I.mega, 'ic-terra'), body: function () {
      var A = sortedAnn();
      if (!A.length) return '<p class="lp-note">No announcements yet.</p>';
      return A.slice(0, 15).map(function (a) {
        var x = /^https?:/i.test(a.link || '');
        return '<div class="lp-ai"><span class="lp-ad">' + dlabel(a.date) + '</span><b>' + esc(a.title) + '</b><p>' + esc(a.body) + '</p>'
          + (a.link ? '<a href="' + esc(a.link) + '"' + (x ? ' target="_blank" rel="noopener"' : ' target="_top"') + '>' + esc(a.linkLabel || 'Read it') + ' &#8594;</a>' : '') + '</div>';
      }).join('') + '<p class="lp-note">Announcements also go out by email through Canvas.</p>';
    } }
  };

  /* ---------- announcements data, loaded on demand ---------- */
  var MO = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function dlabel(iso) { var d = new Date(iso + 'T00:00:00'); return MO[d.getMonth()] + ' ' + d.getDate(); }
  function sortedAnn() {
    return (window.BIO004_ANNOUNCEMENTS || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; });
  }
  function unreadCount() {
    var r = ''; try { r = localStorage.getItem('bio004-ann-read') || ''; } catch (e) {}
    return sortedAnn().filter(function (a) { return a.date > r; }).length;
  }
  function markRead() {
    var A = sortedAnn(); if (!A.length) return;
    try { localStorage.setItem('bio004-ann-read', A[0].date); } catch (e) {}
  }

  /* ---------- the first screen ---------- */
  function card(href, ic, title, sub, wide, extra) {
    var tag = /^data-/.test(href) ? 'button type="button"' : 'a';
    var close = tag === 'a' ? 'a' : 'button';
    return '<li' + (wide ? ' class="lp-wide"' : '') + '><' + tag + ' class="lp-card' + (extra ? ' ' + extra : '') + '" ' + href + '>' + ic
      + '<span><span class="lp-t">' + title + '</span><span class="lp-s">' + sub + '</span></span>'
      + (wide ? '<span class="lp-go" aria-hidden="true">&#8594;</span>' : '') + '</' + close + '></li>';
  }
  function home() {
    /* five questions, in the order students ask them */
    var A = sortedAnn(), latest = A[0], unread = unreadCount();
    var weekHref = IN_TERM ? go('week-' + WEEK + '-hub.html') : go('bio004-course-calendar-alt.html');
    return '<ul class="lp-grid" aria-label="Where are you headed">'
      + card(weekHref, icon(I.flag, 'ic-gold'), 'What do I do this week?', IN_TERM ? 'Week ' + WEEK + ' &middot; Module ' + MOD : 'Your class schedule', true)
      + card(go('bio004-study-process.html'), icon(I.steps, 'ic-terra'), 'How do I study for this class?', 'Every study tool, step by step, for lecture and lab', true, 'lp-study')
      + card(go('bio004-study-process.html#prepare'), icon(I.exam, 'ic-navy'), 'What is on the exam?', 'Competencies &middot; Structure lists')
      + card('data-lpopen="syllabus"', icon(I.doc, 'ic-gold'), 'Do you want to review the syllabus and course information?', 'Syllabus &middot; Semester schedule')
      + card('data-lpopen="help"', icon(I.chat, 'ic-terra'), 'Who can I ask for help?', 'Office hours &middot; Discord &middot; Tutoring')
      + '</ul>'
      + (latest ? '<button type="button" class="lp-annline" data-lpopen="news" aria-label="Announcements' + (unread ? ', ' + unread + ' new' : '') + '. Latest: ' + esc(latest.title) + '">'
          + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + I.mega + '</svg>'
          + '<span class="lp-ad lp-hsm">' + dlabel(latest.date) + '</span><span class="lp-at">' + esc(latest.title) + '</span>'
          + (unread ? '<span class="lp-new">' + (unread > 9 ? '9+' : unread) + ' new</span>' : '') + '<span aria-hidden="true">&#8250;</span></button>' : '')
      + '<div class="lp-foot">'
      +   '<span>Hard week? <a ' + go('bio004-blog.html') + '>Short reads from Dr. Rennie</a></span>'
      +   (STANDALONE ? '' : ON_CALENDAR
            ? '<button type="button" data-lpclose="1">See the full course calendar &#8594;</button>'
            : '<a ' + go('bio004-course-calendar.html?nolaunch=1') + '>See the full course calendar &#8594;</a><button type="button" data-lpclose="1">Close this and stay here</button>')
      + '</div>';
  }
  function panel(key) {
    var c = PANELS[key];
    return '<div class="lp-panel" role="region" aria-labelledby="lp-ph">'
      + '<button type="button" class="lp-back" data-lpback="1">&#8592; Back</button>'
      + '<div class="lp-phead">' + c.icon + '<h3 id="lp-ph" tabindex="-1">' + c.title + '</h3></div>'
      + c.body() + '</div>';
  }

  var ov = document.createElement('div');
  ov.className = 'lpov' + (STANDALONE ? ' lp-standalone' : '');
  if (!STANDALONE) { ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); }
  ov.setAttribute('aria-labelledby', 'lp-title');
  ov.innerHTML = '<div class="lp-wrap">'
    + '<p class="lp-eyebrow">BIO 004 &middot; Human Anatomy &middot; Fall 2026</p>'
    + '<h2 class="lp-h" id="lp-title" tabindex="-1">Welcome to Anatomy</h2>'
    + '<p class="lp-sub">Where are you headed?</p>'
    + '<div id="lpView" aria-live="polite"></div>'
    + '</div>';

  function boot() {
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
    document.body.appendChild(ov);
    var prevOverflow = document.body.style.overflow;
    if (!STANDALONE) document.body.style.overflow = 'hidden';
    var lastFocus = document.activeElement;
    var view = ov.querySelector('#lpView'), CURRENT = null;

    function show(key, focusBack, quiet) {
      CURRENT = PANELS[key] ? key : null;
      view.innerHTML = CURRENT ? panel(key) : home();
      if (CURRENT === 'news') markRead();
      if (quiet) return;
      /* on arrival focus lands on the title, not a card, so only the study
         door carries a gold outline and nothing looks pre-selected */
      var f = CURRENT ? view.querySelector('#lp-ph')
        : (focusBack && view.querySelector('[data-lpopen="' + focusBack + '"]')) || ov.querySelector('#lp-title');
      if (f) f.focus();
    }
    function close() {
      if (STANDALONE) return;
      if (ov.parentNode) ov.parentNode.removeChild(ov);
      document.body.style.overflow = prevOverflow;
      if (lastFocus && lastFocus.focus) lastFocus.focus();
      document.removeEventListener('keydown', onKey);
    }
    function onKey(e) {
      if (e.key !== 'Escape') return;
      if (CURRENT) { var prev = CURRENT; show(null, prev); } else close();
    }
    ov.addEventListener('click', function (e) {
      var o = e.target.closest('[data-lpopen]');
      if (o) { show(o.getAttribute('data-lpopen')); return; }
      if (e.target.closest('[data-lpback]')) { var prev = CURRENT; show(null, prev); return; }
      if (e.target.closest('[data-lpclose]')) { e.preventDefault(); close(); }
    });
    document.addEventListener('keydown', onKey);
    show(null);

    /* the newest announcement fills in once its file arrives */
    if (!window.BIO004_ANNOUNCEMENTS) {
      var tag = document.createElement('script');
      tag.src = 'bio004-announcements.js';
      /* redraw quietly so a student who has already started tabbing keeps their place */
      tag.onload = function () {
        if (CURRENT) return;
        var a = document.activeElement, sel = a && a.getAttribute && (a.getAttribute('href') || a.getAttribute('data-lpopen'));
        show(null, null, true);
        if (sel) { var b = view.querySelector('[href="' + sel + '"],[data-lpopen="' + sel + '"]'); if (b) b.focus(); }
      };
      document.head.appendChild(tag);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
