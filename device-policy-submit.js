/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   device-policy-submit.js

   THE THREE SECTIONS SUBMIT IN THREE DIFFERENT CANVAS COURSES.

   Each section is its own Canvas course, not three assignments in
   one course, so a single hard-coded submit link sends two thirds
   of the students to a course they cannot open. This picks the
   right one.

   HOW IT DECIDES, in order:
     1. ?sec=mw | tr-am | tr-eve on the URL
     2. localStorage 'bio004-section', which is what section-pick.js,
        week-schedule.js, week-extras.js and Mastery OS all read and
        write. A student who has chosen a section anywhere on the
        site has already answered this.
     3. Neither: it renders one button per section instead of
        guessing. Clicking one also saves the choice, so the rest of
        the site stops asking.

   WHERE IT WRITES
   ---------------
   Any element with data-ddp-submit. The element's inner HTML is
   replaced. Put it where the submit button belongs:

     <p class="cta-actions" data-ddp-submit
        data-ddp-class="cta-button"></p>

   data-ddp-class is the class list put on the generated links, so
   this file carries no styling of its own and inherits whatever
   page it lands on.

   ADDING THE REMAINING LINKS
   --------------------------
   Fill in SUBMIT below. A null means "not given yet", and the
   button degrades to an instruction to find the assignment in
   Canvas rather than sending anyone to the wrong course.
   ============================================================ */

(function () {
  'use strict';

  /* ---- the only thing that needs editing ---- */
  var SUBMIT = {
    'mw':     'https://solano.instructure.com/courses/1395730/assignments/6736069?module_item_id=16645147',
    'tr-am':  'https://solano.instructure.com/courses/1395734/assignments/6734628?module_item_id=16643335',
    'tr-eve': 'https://solano.instructure.com/courses/1395735/assignments/6736101'
  };

  var LABEL = {
    'mw':     'Mon / Wed, CRN 80650',
    'tr-am':  'Tue / Thu morning, CRN 80654',
    'tr-eve': 'Tue / Thu evening, CRN 80655'
  };
  var ORDER = ['mw', 'tr-am', 'tr-eve'];
  var KEY = 'bio004-section';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function fromUrl() {
    var m = (location.search + location.hash).match(/[?&#]sec=([a-z\-]+)/i);
    var v = m ? m[1].toLowerCase() : null;
    return SUBMIT.hasOwnProperty(v) ? v : null;
  }
  function fromStore() {
    try {
      var v = localStorage.getItem(KEY);
      return SUBMIT.hasOwnProperty(v) ? v : null;
    } catch (e) { return null; }
  }
  function remember(sec) {
    try { localStorage.setItem(KEY, sec); } catch (e) {}
    try { if (window.BIO004_SECTION && window.BIO004_SECTION.set) window.BIO004_SECTION.set(sec); } catch (e) {}
  }

  function linkFor(sec, cls, text) {
    var href = SUBMIT[sec];
    if (!href) {
      /* No link yet. Say what to look for rather than sending them
         somewhere wrong, which is worse than sending them nowhere. */
      return '<span class="ddp-nolink">Open your own Canvas course for this class and submit it to the '
           + '<strong>Digital Device Policy Agreement</strong> assignment in Week 1. '
           + '(' + esc(LABEL[sec]) + ')</span>';
    }
    return '<a href="' + esc(href) + '" class="' + esc(cls) + '" target="_blank" rel="noopener" '
         + 'data-ddp-sec="' + esc(sec) + '">' + esc(text)
         + '<span class="ag-sr sr-only"> (opens in a new tab)</span></a>';
  }

  function render(host) {
    var cls = host.getAttribute('data-ddp-class') || 'cta-button';
    var sec = fromUrl() || fromStore();

    if (sec) {
      host.innerHTML = linkFor(sec, cls, 'Submit it in Canvas: ' + LABEL[sec])
        + ' <button type="button" class="ddp-switch" data-ddp-clear>Not my section</button>';
    } else {
      /* Three buttons beats one wrong guess. */
      host.innerHTML = '<span class="ddp-ask">Which class are you in?</span>'
        + ORDER.map(function (k) { return linkFor(k, cls, LABEL[k]); }).join(' ');
    }

    /* Clicking a section link is also an answer to "which section",
       so the rest of the site stops asking. */
    Array.prototype.forEach.call(host.querySelectorAll('[data-ddp-sec]'), function (a) {
      a.addEventListener('click', function () { remember(a.getAttribute('data-ddp-sec')); });
    });
    var clr = host.querySelector('[data-ddp-clear]');
    if (clr) clr.addEventListener('click', function () {
      try { localStorage.removeItem(KEY); } catch (e) {}
      host.innerHTML = '';
      render(host);
      var f = host.querySelector('a, span');
      if (f && f.focus) f.focus();
    });
  }

  function run() {
    var hosts = document.querySelectorAll('[data-ddp-submit]');
    Array.prototype.forEach.call(hosts, render);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
