/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   team-survey-nudge.js

   Small pop-up on each section home page (class1/2/3.html)
   that sends new students to the team survey. Shows until the
   student finishes the survey (team-survey.html sets the flag)
   or dismisses it, in which case it comes back after two days.
   Reads the section from <body data-is-sec="..."> so the survey
   opens already knowing which class they are in.

   To retire it after teams are formed, delete the script tag.
   ============================================================ */
(function(){
  var DONE_KEY = 'bio004-team-survey-done', SNOOZE_KEY = 'bio004-team-survey-snooze';
  try {
    if (localStorage.getItem(DONE_KEY) === '1') return;
    var s = parseInt(localStorage.getItem(SNOOZE_KEY) || '0', 10);
    if (s && Date.now() < s) return;
  } catch(e){}

  var sec = (document.body.getAttribute('data-is-sec') || '').trim();
  var href = 'team-survey.html' + (sec ? '?sec=' + encodeURIComponent(sec) : '');

  var css = document.createElement('style');
  css.textContent =
    '.tsn{position:fixed;right:18px;bottom:18px;z-index:120;max-width:340px;background:#101A30;color:#FFFFFF;border:1px solid #2C3A5C;border-radius:16px;box-shadow:0 16px 40px rgba(0,0,0,.45);padding:18px 18px 16px;font-family:"Plus Jakarta Sans",-apple-system,BlinkMacSystemFont,system-ui,sans-serif;animation:tsn-in 320ms ease}' +
    '@keyframes tsn-in{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}' +
    '.tsn .k{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#DCB45C;margin:0 0 5px}' +
    '.tsn h4{font-size:17px;font-weight:800;margin:0 0 6px;line-height:1.25;color:#FFFFFF}' +
    '.tsn h4 b{color:#C9553A}' +
    '.tsn p{font-size:13.5px;color:#D9DEE8;line-height:1.55;margin:0 0 12px}' +
    '.tsn .r{display:flex;gap:10px;align-items:center}' +
    '.tsn a.go{background:#8B1D1D;color:#fff;text-decoration:none;font-weight:800;font-size:14px;border-radius:999px;padding:10px 18px;box-shadow:0 4px 14px rgba(139,29,29,.4)}' +
    '.tsn button{background:transparent;border:0;color:#8A96AC;font-family:inherit;font-weight:700;font-size:13px;cursor:pointer;padding:8px 6px}' +
    '@media (max-width:480px){.tsn{left:12px;right:12px;bottom:12px;max-width:none}}';
  document.head.appendChild(css);

  var box = document.createElement('aside');
  box.className = 'tsn'; box.setAttribute('role','dialog'); box.setAttribute('aria-label','Team survey');
  box.innerHTML =
    '<p class="k">Before your first class</p>' +
    '<h4>Three minutes to help me build <b>your team</b></h4>' +
    '<p>Twelve quick questions, no wrong answers. Used only to form teams, then deleted once teams are final.</p>' +
    '<div class="r"><a class="go" href="' + href + '">Take the team survey</a><button type="button" id="tsnLater">Later</button></div>';
  document.body.appendChild(box);
  document.getElementById('tsnLater').addEventListener('click', function(){
    try { localStorage.setItem(SNOOZE_KEY, String(Date.now() + 2*24*60*60*1000)); } catch(e){}
    box.remove();
  });
})();
