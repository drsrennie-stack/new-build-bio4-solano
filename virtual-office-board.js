/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   virtual-office-board.js

   THE VIRTUAL OFFICE IS THREE DISCUSSION BOARDS, NOT ONE.

   Each section is its own Canvas course, so the question board is
   its own discussion topic in each. A single hard-coded link sends
   two thirds of the class to a course they cannot open, which is
   the same bug the device policy submit link had.

   HOW IT DECIDES, in order:
     1. ?sec=mw | tr-am | tr-eve on the URL
     2. localStorage 'bio004-section', which section-pick.js, the
        calendar, the Start here dialog and Mastery OS all read and
        write. A student who has chosen a section anywhere on the
        site has already answered this.
     3. Neither: it renders one button per section rather than
        guessing. Clicking one also saves the choice, so nothing
        else on the site has to ask again.

   WHERE IT WRITES
   Any element carrying data-vo-board. The element's inner HTML is
   replaced, so this file carries no styling of its own and inherits
   whatever page it lands on. data-vo-class is the class list put on
   the generated links.

     <span data-vo-board data-vo-class="cta-button"></span>

   Deliberately the same shape as device-policy-submit.js. Two files
   solving the same problem should not be read two different ways.
   ============================================================ */

(function () {
  'use strict';

  /* ---- the only thing that needs editing ---- */
  var BOARD = {
    'mw':     'https://solano.instructure.com/courses/1395730/discussion_topics/5035902',
    'tr-am':  'https://solano.instructure.com/courses/1395734/discussion_topics/5035599',
    'tr-eve': 'https://solano.instructure.com/courses/1395735/discussion_topics/5035913'
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
    return BOARD.hasOwnProperty(v) ? v : null;
  }
  function fromStore() {
    try {
      var v = localStorage.getItem(KEY);
      return BOARD.hasOwnProperty(v) ? v : null;
    } catch (e) { return null; }
  }
  function remember(sec) {
    try { localStorage.setItem(KEY, sec); } catch (e) {}
    try { if (window.BIO004_SECTION && window.BIO004_SECTION.set) window.BIO004_SECTION.set(sec); } catch (e) {}
  }

  function render() {
    var hosts = document.querySelectorAll('[data-vo-board]');
    if (!hosts.length) return;

    var sec = fromUrl() || fromStore();

    hosts.forEach(function (host) {
      var cls = host.getAttribute('data-vo-class') || '';

      if (sec) {
        host.innerHTML =
          '<a class="' + esc(cls) + '" href="' + esc(BOARD[sec]) + '" target="_blank" rel="noopener">'
          + 'Open the question board'
          + '<span class="sr-only"> for ' + esc(LABEL[sec]) + ', opens in a new tab</span></a>';
        return;
      }

      /* No section known. Three buttons beats one wrong guess. */
      var h = '<span class="vo-pick">';
      ORDER.forEach(function (k) {
        h += '<a class="' + esc(cls) + '" data-vo-sec="' + k + '" href="' + esc(BOARD[k]) + '" '
           + 'target="_blank" rel="noopener">' + esc(LABEL[k])
           + '<span class="sr-only">, opens the question board in a new tab</span></a>';
      });
      h += '</span>';
      host.innerHTML = h;
    });

    if (!sec) {
      document.addEventListener('click', function (e) {
        var a = e.target.closest ? e.target.closest('[data-vo-sec]') : null;
        if (!a) return;
        remember(a.getAttribute('data-vo-sec'));
      });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
