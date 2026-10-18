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
  /* THE LEARNING GUIDE, infographic style: a dark navy band with the
     week at a glance, then numbered cards, a study cycle drawn as three
     linked circles, and a paper-or-screen split. White cards with a
     hairline border on off-white. No accent bars. */
  + '.lpov.lp-guide{background:#FAFAF9;color:#060B1A}'
  + '.lpov .lp-band{background:#060B1A;color:#fff;padding:34px 22px 30px}'
  + '.lpov .lp-bin{max-width:1060px;margin:0 auto}'
  + '.lpov.lp-guide .lp-eyebrow{font-size:12.5px;letter-spacing:.16em;color:#E3C27D}'
  + '.lpov.lp-guide h2.lp-h{color:#fff;font-size:clamp(30px,5vw,46px);margin:8px 0 4px}'
  + '.lpov .lp-h .hl{color:#E3C27D}'
  + '.lpov.lp-guide .lp-sub{color:#C8D2DA;font-size:17px;margin:0}'
  + '.lpov .lp-stats{list-style:none;margin:22px 0 0;padding:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}'
  + '@media (max-width:760px){.lpov .lp-stats{grid-template-columns:repeat(2,minmax(0,1fr))}}'
  + '.lpov .lp-stat{border:1px solid rgba(255,255,255,.18);border-radius:14px;padding:12px 14px;background:rgba(255,255,255,.04)}'
  + '.lpov .lp-stat b{display:block;font-size:clamp(26px,4vw,36px);font-weight:800;line-height:1.05;color:#fff;letter-spacing:-.02em}'
  + '.lpov .lp-stat span{display:block;margin-top:4px;font-family:"DM Sans",system-ui,sans-serif;font-size:11.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#E3C27D}'
  + '.lpov .lp-stat a{display:block;height:100%;color:inherit;text-decoration:none}'
  + '.lpov .lp-stat:hover{border-color:#E3C27D}'
  + '.lpov.lp-guide .lp-wrap{max-width:1060px;padding:26px 22px 46px}'
  + '.lpov .lp-grid2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}'
  + '@media (max-width:760px){.lpov .lp-grid2{grid-template-columns:minmax(0,1fr)}}'
  + '.lpov .lp-c{background:#fff;border:1px solid #E3E4E8;border-radius:16px;padding:20px 22px;box-shadow:0 1px 3px rgba(0,0,0,.06);min-width:0}'
  + '.lpov .lp-c.full{grid-column:1/-1}'
  + '.lpov .lp-ch{display:grid;grid-template-columns:auto minmax(0,1fr);gap:4px 14px;align-items:center;margin-bottom:12px}'
  + '.lpov .lp-num{grid-row:span 2;font-size:44px;font-weight:800;line-height:.9;color:#7A2E24;letter-spacing:-.03em}'
  + '.lpov .lp-c h3{margin:0;font-size:20px;font-weight:800;line-height:1.2;color:#060B1A}'
  + '.lpov .lp-c h3 .hl{color:#7A2E24}'
  + '.lpov .lp-why{margin:0;font-size:14px;color:#454B5C}'
  + '.lpov .lp-tags{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 10px}'
  + '.lpov .lp-tag{font-family:"DM Sans",system-ui,sans-serif;font-size:10.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;border:1px solid #C9CDD5;border-radius:999px;padding:3px 9px;color:#2A3949}'
  /* link rows with a colored icon */
  + '.lpov .lp-ls{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px 14px}'
  + '.lpov .lp-ls.one{grid-template-columns:minmax(0,1fr)}'
  + '@media (max-width:480px){.lpov .lp-ls{grid-template-columns:minmax(0,1fr)}}'
  + '.lpov .lp-ls>li>a{display:flex;align-items:center;gap:10px;padding:6px 8px;margin:0 -8px;border-radius:10px;font-size:15px;font-weight:700;line-height:1.3;color:#060B1A;text-decoration:none;min-height:44px}'
  + '.lpov .lp-ls>li>a:hover{background:#F2F3F6}'
  + '.lpov .lp-ls>li>a:hover .tx{text-decoration:underline;text-decoration-color:#B8924A;text-decoration-thickness:2px;text-underline-offset:3px}'
  + '.lpov .lp-li{width:30px;height:30px;border-radius:9px;display:grid;place-items:center;flex:none;color:#fff;background:#060B1A}'
  + '.lpov .lp-li svg{width:16px;height:16px}'
  + '.lpov .lp-li.g{background:#B8924A;color:#060B1A}.lpov .lp-li.t{background:#7A2E24}.lpov .lp-li.b{background:#3D5A80}'
  + '.lpov .lp-ls .ar{margin-left:auto;color:#B8924A;font-weight:800}'
  + '.lpov .lp-txt{font-size:14px;color:#454B5C;margin:0 0 8px}'
  + '.lpov .lp-txt b{color:#060B1A}'
  + '.lpov.lp-guide .lp-mods{margin:6px 0 0}'
  + '.lpov.lp-guide .lp-mods a{background:#fff;border:1px solid #C9CDD5;padding:0 12px;font-size:13px}'
  + '.lpov.lp-guide .lp-mods a.now{background:#060B1A;color:#fff;border-color:#060B1A}'
  + '.lpov .lp-sub2{font-family:"DM Sans",system-ui,sans-serif;font-size:11.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#7A2E24;margin:12px 0 4px}'
  /* the study cycle */
  + '.lpov .lp-cycle{list-style:none;margin:6px 0 0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;position:relative}'
  + '@media (max-width:760px){.lpov .lp-cycle{grid-template-columns:minmax(0,1fr)}}'
  + '.lpov .lp-step{position:relative;min-width:0}'
  + '.lpov .lp-step .dot{width:58px;height:58px;border-radius:50%;display:grid;place-items:center;color:#fff;font-size:24px;font-weight:800;margin-bottom:10px;position:relative;z-index:1}'
  + '.lpov .lp-step:nth-child(1) .dot{background:#060B1A}.lpov .lp-step:nth-child(2) .dot{background:#7A2E24}.lpov .lp-step:nth-child(3) .dot{background:#B8924A;color:#060B1A}'
  + '.lpov .lp-step:not(:last-child):after{content:"";position:absolute;top:28px;left:66px;right:-10px;border-top:2px dashed #B8924A}'
  + '@media (max-width:760px){.lpov .lp-step:not(:last-child):after{display:none}}'
  + '.lpov .lp-step h4{margin:0 0 2px;font-size:17px;font-weight:800}'
  + '.lpov .lp-step p{margin:0 0 6px;font-size:13.5px;color:#454B5C}'
  /* paper or screen */
  + '.lpov .lp-split{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);gap:18px;align-items:start}'
  + '@media (max-width:760px){.lpov .lp-split{grid-template-columns:minmax(0,1fr)}}'
  + '.lpov .lp-or{align-self:center;width:44px;height:44px;border-radius:50%;display:grid;place-items:center;background:#060B1A;color:#E3C27D;font-weight:800;font-size:13px;letter-spacing:.06em}'
  + '@media (max-width:760px){.lpov .lp-or{justify-self:center}}'
  + '.lpov .lp-side h4{display:flex;align-items:center;gap:8px;margin:0 0 6px;font-size:16px;font-weight:800}'
  + '.lpov .lp-side p{margin:0 0 8px;font-size:13.5px;color:#454B5C}'
  + '.lpov.lp-guide .lp-dqr svg{width:70px;height:70px}'
  /* announcement and footer on the light page */
  + '.lpov.lp-guide .lp-annline{color:#060B1A;border-color:#D9DCE2;margin-top:18px}'
  + '.lpov.lp-guide .lp-annline svg{color:#7A2E24}'
  + '.lpov.lp-guide .lp-ad{color:#454B5C}'
  + '.lpov.lp-guide .lp-new{background:#7A2E24;color:#fff}'
  + '.lpov.lp-guide .lp-foot{color:#454B5C}'
  + '.lpov.lp-guide .lp-foot a,.lpov.lp-guide .lp-foot button{color:#060B1A}'
  + '.lpov.lp-guide .lp-foot a:hover,.lpov.lp-guide .lp-foot button:hover{color:#7A2E24}'
  + '.lpov.lp-guide .lp-panel{border:1px solid #D9DCE2;box-shadow:0 1px 3px rgba(0,0,0,.08)}'
  + '.lpov.lp-guide .lp-wrap a:focus-visible,.lpov.lp-guide .lp-wrap button:focus-visible{outline:3px solid #060B1A;outline-offset:2px;border-radius:8px}'
  /* "I want to..." rows: numeral, question, then a few link pills */
  + '.lpov .lp-list{list-style:none;margin:0;padding:0;background:#fff;border:1px solid #E3E4E8;border-radius:18px;box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden}'
  + '.lpov .lp-row2{display:grid;grid-template-columns:64px minmax(0,4fr) minmax(0,6fr);gap:6px 22px;align-items:center;padding:18px 24px;border-top:1px solid #ECEDF0}'
  + '.lpov .lp-row2:first-child{border-top:0}'
  + '@media (max-width:760px){.lpov .lp-row2{grid-template-columns:52px minmax(0,1fr);padding:16px 18px}.lpov .lp-row2 .lp-pills{grid-column:1/-1}}'
  + '.lpov .lp-row2 .lp-num{font-size:40px}'
  + '.lpov .lp-row2 h3{margin:0;font-size:18.5px;font-weight:800;line-height:1.25;color:#060B1A}'
  + '.lpov .lp-row2 h3 .hl{color:#7A2E24}'
  + '.lpov .lp-row2 .lp-why{margin:3px 0 0;font-size:13.5px;color:#454B5C}'
  + '.lpov .lp-step-pill{display:inline-block;margin:0 0 5px;font-family:"DM Sans",system-ui,sans-serif;font-size:10.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;border-radius:999px;padding:3px 9px;background:#060B1A;color:#E3C27D}'
  + '.lpov .lp-pills{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:1fr;gap:8px 10px}'
  + '@media (max-width:480px){.lpov .lp-pills{grid-template-columns:minmax(0,1fr)}}'
  + '.lpov .lp-pills a{display:flex;width:100%;align-items:center;gap:10px;min-height:44px;padding:6px 14px 6px 6px;border:1px solid #D2D6DE;border-radius:999px;background:#fff;color:#060B1A;font-size:14.5px;font-weight:700;text-decoration:none;transition:border-color 150ms ease,transform 150ms ease}'
  + '.lpov .lp-pills a:hover{border-color:#060B1A;transform:translateY(-1px)}'
  + '.lpov .lp-pills .lp-li{width:30px;height:30px;border-radius:50%}'
  + '.lpov .lp-pills .ar{margin-left:auto;color:#B8924A;font-weight:800}'
  + '.lpov .lp-hrs{grid-column:1/-1;grid-row:auto;margin:0 0 2px;font-size:13.5px;color:#454B5C}'
  + '.lpov .lp-hrs b{color:#060B1A}'
  /* class picker in the band */
  + '.lpov .lp-pick{margin:18px 0 0;display:flex;flex-wrap:wrap;align-items:center;gap:8px 10px}'
  + '.lpov .lp-pick p{margin:0 6px 0 0;font-weight:700;color:#fff}'
  + '.lpov .lp-pick button{font:inherit;font-size:14px;font-weight:700;min-height:42px;padding:6px 16px;border-radius:999px;border:1px solid #E3C27D;background:transparent;color:#fff;cursor:pointer}'
  + '.lpov .lp-pick button:hover{background:#E3C27D;color:#060B1A}'
  + '.lpov .lp-mine{margin:14px 0 0;font-size:14px;color:#C8D2DA}'
  + '.lpov .lp-mine b{color:#fff}'
  + '.lpov .lp-mine button{font:inherit;font-size:13px;font-weight:700;background:none;border:0;color:#E3C27D;text-decoration:underline;text-underline-offset:3px;cursor:pointer;padding:6px 4px;min-height:36px}'
  + '.lpov .lp-pick button:focus-visible,.lpov .lp-mine button:focus-visible{outline:3px solid #E3C27D;outline-offset:3px}'
  + '.lpov.lp-guide .lp-band a:focus-visible{outline:3px solid #E3C27D;outline-offset:3px;border-radius:12px}'
  /* VERSION 3: banner, five shaded "Want to..." rows with big numbers,
     and a side menu (this week, quick links, modules, more help). */
  + '.lpov .v3-band{background:linear-gradient(120deg,#060B1A 0%,#0E1A33 60%,#1B2A4A 100%);color:#fff;padding:30px 0 24px}'
  + '.lpov .v3-bin{max-width:1180px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px 24px;align-items:center}'
  + '.lpov .v3-logo{grid-row:span 2;opacity:.95}'
  + '@media (max-width:640px){.lpov .v3-bin{grid-template-columns:minmax(0,1fr)}.lpov .v3-logo{display:none}}'
  + '.lpov .v3-band .lp-eyebrow{color:#E3C27D;font-size:12.5px;letter-spacing:.18em}'
  + '.lpov .v3-band h2.lp-h{color:#fff;font-size:clamp(40px,7vw,68px);line-height:1;margin:6px 0 2px;letter-spacing:-.03em}'
  + '.lpov .v3-band h2 .sm{display:block;font-size:clamp(20px,3vw,28px);font-weight:700;letter-spacing:-.01em;color:#E3C27D;margin-top:6px}'
  + '.lpov .v3-words{grid-column:1/-1;margin:10px 0 0;font-family:"DM Sans",system-ui,sans-serif;font-size:12.5px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:#C8D2DA}'
  + '.lpov .v3-words b{color:#E3C27D;font-weight:700}'
  + '.lpov .v3-band .lp-stats{grid-column:1/-1;grid-template-columns:repeat(5,minmax(0,1fr));margin-top:16px}'
  + '@media (max-width:900px){.lpov .v3-band .lp-stats{grid-template-columns:repeat(3,minmax(0,1fr))}}'
  + '@media (max-width:520px){.lpov .v3-band .lp-stats{grid-template-columns:repeat(2,minmax(0,1fr))}}'
  + '.lpov .v3-band .lp-stat b{font-size:clamp(22px,3vw,30px)}'
  + '.lpov .v3-band .lp-mine,.lpov .v3-band .lp-pick{grid-column:1/-1}'
  /* layout */
  + '.lpov.lp-guide .lp-wrap.v3-wrap{max-width:1180px;padding:22px 22px 40px}'
  + '.lpov .v3{display:grid;grid-template-columns:minmax(0,1fr) 270px;gap:18px;align-items:start}'
  + '@media (max-width:900px){.lpov .v3{grid-template-columns:minmax(0,1fr)}}'
  + '.lpov .v3-main{display:grid;gap:12px;min-width:0}'
  /* one row */
  + '.lpov .v3-row{display:grid;grid-template-columns:minmax(0,11fr) minmax(0,9fr);border-radius:16px;overflow:hidden;border:1px solid #E3E4E8;box-shadow:0 1px 3px rgba(0,0,0,.06);background:#F7F6F3}'
  + '@media (max-width:680px){.lpov .v3-row{grid-template-columns:minmax(0,1fr)}}'
  + '.lpov .v3-q{display:grid;grid-template-columns:auto minmax(0,1fr);gap:4px 16px;align-items:center;padding:20px 22px}'
  + '.lpov .v3-n{font-size:clamp(64px,8vw,88px);font-weight:800;line-height:.85;letter-spacing:-.05em;color:#7A2E24}'
  + '.lpov .v3-want{margin:0;font-size:17px;font-weight:600;color:#2A3949}'
  + '.lpov .v3-q h3{margin:0;font-size:clamp(19px,2.2vw,23px);font-weight:700;line-height:1.15;color:#060B1A}'
  + '.lpov .v3-q h3 .big{display:block;font-size:clamp(26px,3.2vw,34px);font-weight:800;letter-spacing:.01em;text-transform:uppercase;color:#7A2E24;line-height:1.05}'
  + '.lpov .v3-q p.v3-d{grid-column:1/-1;margin:8px 0 0;font-size:14px;color:#2A3949;max-width:46ch}'
  + '.lpov .v3-q .lp-step-pill{grid-column:1/-1;justify-self:start;margin:0 0 4px}'
  /* shading, one tint per row */
  + '.lpov .v3-row.t1 .v3-q{background:linear-gradient(135deg,#E1E5ED,#F3F4F7)}'
  + '.lpov .v3-row.t2 .v3-q{background:linear-gradient(135deg,#F3E8D2,#FBF6EC)}'
  + '.lpov .v3-row.t3 .v3-q{background:linear-gradient(135deg,#DCE3EE,#F1F4F8)}'
  + '.lpov .v3-row.t4 .v3-q{background:linear-gradient(135deg,#EFDCD6,#F9F1EE)}'
  + '.lpov .v3-row.t5 .v3-q{background:linear-gradient(135deg,#E6E3DA,#F5F3EE)}'
  + '.lpov .v3-row.t6 .v3-q{background:linear-gradient(135deg,#DFE6E2,#F2F5F3)}'
  /* the link list in each row */
  + '.lpov .v3-ls{list-style:none;margin:0;padding:14px 16px;display:grid;gap:8px;align-content:center}'
  + '.lpov .v3-ls a{display:flex;align-items:center;gap:10px;min-height:44px;padding:6px 12px 6px 6px;background:#fff;border:1px solid #E1E3E8;border-radius:10px;color:#060B1A;font-size:14.5px;font-weight:700;text-decoration:none;transition:border-color 150ms ease,transform 150ms ease}'
  + '.lpov .v3-ls a:hover{border-color:#060B1A;transform:translateY(-1px)}'
  + '.lpov .v3-ls .lp-li{width:30px;height:30px;border-radius:8px}'
  + '.lpov .v3-ls .ar{margin-left:auto;color:#B8924A;font-weight:800}'
  + '.lpov .v3-ls .lp-hrs{font-size:13px;color:#454B5C;margin:0 0 2px}'
  /* side menu */
  + '.lpov .v3-side{display:grid;gap:14px;min-width:0}'
  + '.lpov .v3-box{background:#fff;border:1px solid #E3E4E8;border-radius:14px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.06)}'
  + '.lpov .v3-box h3{margin:0;padding:11px 16px;background:#060B1A;color:#E3C27D;font-family:"DM Sans",system-ui,sans-serif;font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}'
  + '.lpov .v3-box ul{list-style:none;margin:0;padding:8px}'
  + '.lpov .v3-box li a,.lpov .v3-box li button{display:flex;align-items:center;gap:10px;width:100%;min-height:42px;padding:6px 10px;border:0;border-radius:8px;background:none;color:#060B1A;font:inherit;font-size:14px;font-weight:700;text-align:left;text-decoration:none;cursor:pointer}'
  + '.lpov .v3-box li a:hover,.lpov .v3-box li button:hover{background:#F2F3F6}'
  + '.lpov .v3-box .lp-li{width:28px;height:28px;border-radius:8px}'
  + '.lpov .v3-box .ch{margin-left:auto;color:#7A2E24;font-weight:800}'
  + '.lpov .v3-box li a.now{background:#060B1A;color:#fff}.lpov .v3-box li a.now .ch{color:#E3C27D}'
  + '.lpov .v3-box .v3-tag{margin-left:auto;font-family:"DM Sans",system-ui,sans-serif;font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#E3C27D}'
  + '.lpov .v3-box .lp-new{margin-left:auto}'
  + '.lpov .v3-sig{text-align:center;font-family:"DM Sans",system-ui,sans-serif;font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#454B5C;padding:6px 0}'
  + '.lpov .v3-wrap .lp-foot{margin-top:18px}'
  /* while this page is up, the course tools dock and Hootie stay out of the way */
  + 'body.lp-open .bd-launch,body.lp-open .bd-back,body.lp-open .bd-scrim,body.lp-open .bd-panel,body.lp-open .dcm,body.lp-open .hoo-btn,body.lp-open .hoo-panel,body.lp-open .hoo-nudge{display:none!important}'
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
  /* a link from a class's Canvas page carries ?sec=, so remember it */
  try { if (sec && /[?&]sec=/.test(window.location.search)) localStorage.setItem('bio004-section', sec); } catch (e) {}
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
          { name: 'Office hours', what: 'Mondays and Wednesdays 10:30 am to 12:30 pm in the conference room across from Biotech Lab 1127, and 30 minutes before every class' },
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
  /* ---------- the first screen: the learning guide ---------- */
  var LI = {
    video: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9l5 3-5 3z"/>',
    note: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h7M9 17h5"/>',
    pen: '<path d="M4 20l4-1 11-11-3-3L5 16z"/>',
    cards: '<rect x="4" y="7" width="12" height="13" rx="2"/><path d="M8 3h11a1 1 0 0 1 1 1v12"/>',
    brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h1V4z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h-1V4z"/>',
    loop: '<path d="M4 12a8 8 0 0 1 14-5l2 2"/><path d="M20 4v5h-5"/><path d="M20 12a8 8 0 0 1-14 5l-2-2"/><path d="M4 20v-5h5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>',
    print: '<path d="M7 8V3h10v5"/><rect x="3" y="8" width="18" height="9" rx="2"/><path d="M7 14h10v7H7z"/>',
    cal: I.cal, flag: I.flag, chat: I.chat, doc: I.doc, exam: I.exam, steps: I.steps,
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    people: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.5c2.5 0 5 1.5 5 4.5"/>',
    screen: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'
  };
  function svg(n) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (LI[n] || LI.doc) + '</svg>'; }
  function Lk(href, name, ic, col) {
    var x = /_blank/.test(href);
    return '<li><a ' + href + '><span class="lp-li ' + (col || '') + '">' + svg(ic) + '</span><span class="tx">' + esc(name) + '</span><span class="ar" aria-hidden="true">' + (x ? '&#8599;' : '&#8594;') + '</span>'
      + (x ? '<span class="lp-sr"> (opens in a new tab)</span>' : '') + '</a></li>';
  }
  function P(href, name, ic, col) {
    var x = /_blank/.test(href);
    return '<li><a ' + href + '><span class="lp-li ' + (col || '') + '">' + svg(ic) + '</span><span>' + esc(name) + '</span><span class="ar" aria-hidden="true">' + (x ? '&#8599;' : '&#8594;') + '</span>'
      + (x ? '<span class="lp-sr"> (opens in a new tab)</span>' : '') + '</a></li>';
  }
  function W(num, title, why, pills, step) {
    return '<li class="lp-row2"><span class="lp-num" aria-hidden="true">' + num + '</span><div>' + (step ? '<span class="lp-step-pill">' + step + '</span>' : '')
      + '<h3>' + title + '</h3><p class="lp-why">' + esc(why) + '</p></div><ul class="lp-pills">' + pills + '</ul></li>';
  }
  var SECNAME = { 'mw': 'Mon / Wed', 'tr-am': 'Tue / Thu morning', 'tr-eve': 'Tue / Thu evening' };
  function C(num, title, why, body, full) {
    return '<section class="lp-c' + (full ? ' full' : '') + '" aria-labelledby="lpq' + num + '"><div class="lp-ch"><span class="lp-num" aria-hidden="true">' + num + '</span>'
      + '<h3 id="lpq' + num + '">' + title + '</h3><p class="lp-why">' + esc(why) + '</p></div>' + body + '</section>';
  }
  function examDate(short) {
    var d = EL[MOD - 1]; if (!d) return '';
    var x = new Date(d + 'T00:00:00');
    return short ? MO[x.getMonth()] + ' ' + x.getDate() : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][x.getDay()] + ', ' + MO[x.getMonth()] + ' ' + x.getDate();
  }
  function daysToExam() {
    var d = EL[MOD - 1]; if (!d) return null;
    var t = new Date(NOWD.getFullYear(), NOWD.getMonth(), NOWD.getDate());
    return Math.round((new Date(d + 'T00:00:00') - t) / 864e5);
  }
  var LOGO = '<svg viewBox="40 10 125 148" width="70" height="84" role="img" aria-hidden="true" focusable="false"><g transform="translate(0,18)"><g transform="translate(60,0) rotate(8 0 130)"><circle cx="0" cy="20" r="10" fill="#FFFFFF"/><path d="M 0,32 C -10,32 -16,36 -16,42 C -16,55 -13,68 -11,82 C -10,100 -12,118 -14,130 L 14,130 C 12,118 10,100 11,82 C 13,68 16,55 16,42 C 16,36 10,32 0,32 Z" fill="#FFFFFF"/></g><g transform="translate(100,0)"><circle cx="0" cy="10" r="11" fill="#8B3A2E"/><path d="M 0,22 C -11,22 -17,26 -17,34 C -17,52 -14,70 -12,86 C -11,108 -13,122 -15,132 L 15,132 C 13,122 11,108 12,86 C 14,70 17,52 17,34 C 17,26 11,22 0,22 Z" fill="#8B3A2E"/></g><g transform="translate(140,0) rotate(-8 0 130)"><circle cx="0" cy="20" r="10" fill="#C9A14A"/><path d="M 0,32 C -10,32 -16,36 -16,42 C -16,55 -13,68 -11,82 C -10,100 -12,118 -14,130 L 14,130 C 12,118 10,100 11,82 C 13,68 16,55 16,42 C 16,36 10,32 0,32 Z" fill="#C9A14A"/></g></g></svg>';
  function todayLabel() { return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][NOWD.getDay()] + ', ' + MO[NOWD.getMonth()] + ' ' + NOWD.getDate(); }
  function band() {
    var dte = daysToExam(), weekHref = IN_TERM ? go('week-' + WEEK + '-hub.html') : go('bio004-course-calendar-alt.html');
    return '<div class="v3-band"><div class="v3-bin"><div>'
      + '<p class="lp-eyebrow">Dr. Rennie &middot; Solano College &middot; Fall 2026</p>'
      + '<h2 class="lp-h" id="lp-title" tabindex="-1">BIO 004<span class="sm">Human Anatomy Learning Guide</span></h2></div>'
      + '<span class="v3-logo">' + LOGO + '</span>'
      + '<p class="v3-words">Prepare <b>&middot;</b> Recall <b>&middot;</b> Identify <b>&middot;</b> Check <b>&middot;</b> Master</p>'
      + (IN_TERM ? '<ul class="lp-stats" aria-label="Today at a glance">'
          + '<li class="lp-stat"><b>' + MO[NOWD.getMonth()] + ' ' + NOWD.getDate() + '</b><span>Today &middot; ' + ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][NOWD.getDay()] + '</span></li>'
          + '<li class="lp-stat"><a ' + weekHref + '><b>Week ' + WEEK + '</b><span>Open this week &#8594;</span></a></li>'
          + '<li class="lp-stat"><b>Module ' + MOD + '</b><span>What we are on now</span></li>'
          + (dte != null ? '<li class="lp-stat"><b>' + esc(examDate(true)) + '</b><span>Exam ' + MOD + '</span></li>'
            + '<li class="lp-stat"><b>' + (dte <= 0 ? 'Today' : dte + ' day' + (dte === 1 ? '' : 's')) + '</b><span>' + (dte <= 0 ? 'Exam day' : 'Until Exam ' + MOD) + '</span></li>' : '')
          + '</ul>' : '')
      + (sec ? '<p class="lp-mine">Your class: <b>' + SECNAME[sec] + '</b> <button type="button" data-lpsec="">Not your class?</button></p>'
          : '<div class="lp-pick" role="group" aria-label="Which class are you in?"><p>Which class are you in?</p>'
            + ['mw', 'tr-am', 'tr-eve'].map(function (k) { return '<button type="button" data-lpsec="' + k + '">' + SECNAME[k] + '</button>'; }).join('') + '</div>')
      + '</div></div>';
  }
  function V(n, tint, want, big, rest, desc, links, step) {
    return '<section class="v3-row ' + tint + '" aria-labelledby="v3q' + n + '"><div class="v3-q"><span class="v3-n" aria-hidden="true">' + n + '</span>'
      + '<div><p class="v3-want">' + want + '</p><h3 id="v3q' + n + '"><span class="big">' + big + '</span>' + rest + '</h3></div>'
      + '<p class="v3-d">' + esc(desc) + '</p></div><ul class="v3-ls">' + links + '</ul></section>';
  }
  function S(href, name, ic, col, extra) {
    var x = /_blank/.test(href);
    return '<li><a ' + href + (extra || '') + '><span class="lp-li ' + (col || '') + '">' + svg(ic) + '</span><span>' + esc(name) + '</span><span class="ch" aria-hidden="true">' + (x ? '&#8599;' : '&#8250;') + '</span>'
      + (x ? '<span class="lp-sr"> (opens in a new tab)</span>' : '') + '</a></li>';
  }
  function home() {
    var Ann = sortedAnn(), latest = Ann[0], unread = unreadCount();
    var weekHref = IN_TERM ? go('week-' + WEEK + '-hub.html') : go('bio004-course-calendar-alt.html');
    var calHref = ON_CALENDAR ? 'href="#" data-lpclose="1"' : go('bio004-course-calendar.html?nolaunch=1');
    var WB = { 'mw': 'BIO004-Learning-Workbook-Class1.pdf', 'tr-am': 'BIO004-Learning-Workbook-Class2.pdf', 'tr-eve': 'BIO004-Learning-Workbook-Class3.pdf' };
    var mine = function (one) { return sec ? one : ''; };
    var main = '<div class="v3-main">'
      + V('1', 't1', 'Want to', 'Prepare', ' for class?', 'Learn the material before lecture or lab so you are ready to take part.',
          P(go('bio004-quick-access.html?cat=videos'), 'Lecture videos', 'video') + P(go('bio004-quick-access.html?cat=notes'), 'Course notes', 'note')
          + P(go('bio004-quick-access.html?cat=prework'), 'Pre-work', 'pen') + P(go('bio004-bluelink-videos.html'), 'Cadaver videos', 'video'))
      + V('2', 't2', 'Want to', 'Practice', ' recall?', 'See what you can remember without looking. Pulling it from memory is what makes it stick.',
          P(go('mastery-os-fall-2026.html#s-recall'), 'Recall cards', 'cards', 't') + P(go('mastery-os-fall-2026.html#s-dumps'), 'Brain dumps', 'brain', 't')
          + P(go('bio004-mastery-check.html'), 'Mastery Check', 'target', 't') + P(go('mastery-os-fall-2026.html'), 'Mastery OS', 'steps', 't'))
      + V('3', 't3', 'Want to practice', 'Lab ID?', '', 'Name the structure before you check the answer.',
          P(go('module-' + MOD + '-structure-list.html'), 'Structure list, M' + MOD, 'note', 'b') + P(ext('https://drsrennie-stack.github.io/new-digital-atlas/'), 'Digital Atlas', 'globe', 'b')
          + P(go('mastery-os-fall-2026.html#s-loops'), 'Loops', 'loop', 'b') + P(go('histology-help.html'), 'Histology help', 'target', 'b'))
      + V('4', 't4', 'Want to prepare for', 'The exam?', '', 'Find your gaps and spend your study time where you need it most.',
          P(go('bio004-competency-packet.html'), 'Competency list', 'target', 't') + P(go('practice-lecture-exam.html'), 'Practice exam', 'exam', 't')
          + P(go('mastery-os-fall-2026.html#s-weak'), 'My weak areas', 'steps', 't') + P(go('bio004-study-process.html'), 'How to study', 'doc', 't'))
      + V('5', 't5', 'Want to study', 'On paper?', '', 'Everything Dr. Rennie printed for you, ready to print again.',
          P(go('BIO004-Fall2026-Competency-Packet.pdf'), 'Competency packet', 'print', 'g') + P(go('BIO004-M' + MOD + '-Note-Sheet-Packet.pdf'), 'Note sheets, M' + MOD, 'print', 'g')
          + (MOD >= 3 ? P(go('BIO004-M' + MOD + '-Lab-Packet.pdf'), 'Lab packet, M' + MOD, 'print', 'g') : P(go('BIO004-Anatomy-Structure-List.pdf'), 'Lab structure list', 'print', 'g'))
          + (sec ? P(go(WB[sec]), 'My workbook', 'print', 'g') : P(go('BIO004-Anatomy-Structure-List.pdf'), 'Lab structure list', 'print', 'g')))
      + V('6', 't6', 'Need', 'Help', ' with something?', 'Office hours: Mon and Wed 10:30 am to 12:30 pm across from Biotech Lab 1127, and 30 minutes before class. Open lab: Fri 2 to 3 pm.',
          P('href="mailto:srennie@solano.edu"', 'Email Dr. Rennie', 'mail', 't') + mine(P(ext(DISCORD[sec] ? DISCORD[sec].url : ''), 'Class Discord', 'chat', 'b'))
          + P(go('study-session-signup.html'), 'Study With Me', 'people', 'g') + P(ext('https://welcome.solano.edu/astc-homepage'), 'Free tutoring', 'people'))
      + '</div>';
    var mods = '';
    for (var n = 1; n <= 5; n++) mods += '<li><a ' + go('course-materials.html#mod-' + n) + (n === MOD ? ' class="now" aria-current="true"' : '') + '><span>Module ' + n + '</span>'
      + (n === MOD ? '<span class="v3-tag">Now</span>' : '') + '<span class="ch" aria-hidden="true">&#8250;</span></a></li>';
    var side = '<aside class="v3-side" aria-label="More options">'
      + '<div class="v3-box"><h3>Quick links</h3><ul>'
      + S(weekHref, IN_TERM ? 'Week ' + WEEK + ' page' : 'Class schedule', 'flag', 'g') + S(calHref, 'Course calendar', 'cal') + S(go('bio004-master-schedule-fall2026.html'), 'Semester schedule', 'cal', 't')
      + mine(S(go(SYLLABUS[sec] ? SYLLABUS[sec][0] : ''), 'My syllabus', 'doc'))
      + (latest ? '<li><button type="button" data-lpopen="news"><span class="lp-li t">' + svg('chat') + '</span><span>Announcements</span>' + (unread ? '<span class="lp-new">' + (unread > 9 ? '9+' : unread) + ' new</span>' : '<span class="ch" aria-hidden="true">&#8250;</span>') + '</button></li>' : '')
      + S('href="mailto:srennie@solano.edu"', 'Contact Dr. Rennie', 'mail', 'b')
      + '</ul></div>'
      + '<div class="v3-box"><h3>Modules</h3><ul>' + mods + '</ul></div>'
      + '<div class="v3-box"><h3>More help</h3><ul>'
      + S(go('bio004-study-process.html'), 'How to study, step by step', 'steps', 'g') + S(go('course-materials.html'), 'All course materials', 'doc') + S(go('bio004-blog.html'), 'Short reads from Dr. Rennie', 'note', 't')
      + S(go('digital-device-policy-agreement.html'), 'Device policy', 'doc', 'b')
      + '</ul></div>'
      + '<p class="v3-sig">Dr. Rennie &middot; BIO 004 &middot; Solano College</p>'
      + '</aside>';
    return '<div class="v3">' + main + side + '</div>'
      + (STANDALONE ? '' : '<div class="lp-foot"><button type="button" data-lpclose="1">' + (ON_CALENDAR ? 'See the full course calendar &#8594;' : 'Close this and stay here') + '</button></div>');
  }
  function panel(key) {
    var c = PANELS[key];
    return '<div class="lp-panel" role="region" aria-labelledby="lp-ph">'
      + '<button type="button" class="lp-back" data-lpback="1">&#8592; Back</button>'
      + '<div class="lp-phead">' + c.icon + '<h3 id="lp-ph" tabindex="-1">' + c.title + '</h3></div>'
      + c.body() + '</div>';
  }

  var ov = document.createElement('div');
  ov.className = 'lpov lp-guide' + (STANDALONE ? ' lp-standalone' : '');
  if (!STANDALONE) { ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); }
  ov.setAttribute('aria-labelledby', 'lp-title');
  ov.innerHTML = '<div id="lpBand">' + band() + '</div><div class="lp-wrap v3-wrap"><div id="lpView" aria-live="polite"></div></div>';

  function boot() {
    /* load the course fonts here too, so the page looks the same on any page that opens it */
    if (!document.querySelector('link[href*="Plus+Jakarta+Sans"][href*="DM+Sans"]')) {
      var fl = document.createElement('link'); fl.rel = 'stylesheet';
      fl.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@500;700&display=swap';
      document.head.appendChild(fl);
    }
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
    document.body.appendChild(ov);
    document.body.classList.add('lp-open');
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
      document.body.classList.remove('lp-open');
      document.body.style.overflow = prevOverflow;
      if (lastFocus && lastFocus.focus) lastFocus.focus();
      document.removeEventListener('keydown', onKey);
    }
    function onKey(e) {
      if (e.key !== 'Escape') return;
      if (CURRENT) { var prev = CURRENT; show(null, prev); } else close();
    }
    ov.addEventListener('click', function (e) {
      var sp = e.target.closest('[data-lpsec]');
      if (sp) {
        var v = sp.getAttribute('data-lpsec');
        sec = SECNAME[v] ? v : null;
        try { if (sec) localStorage.setItem('bio004-section', sec); else localStorage.removeItem('bio004-section'); } catch (x) {}
        ov.querySelector('#lpBand').innerHTML = band(); show(null, null, true);
        var f = ov.querySelector(sec ? '.lp-mine button' : '.lp-pick button'); if (f) f.focus();
        return;
      }
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
