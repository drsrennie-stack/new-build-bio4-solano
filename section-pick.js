/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   section-pick.js

   Pick once. Never get asked again.

   THE BUG THIS FIXES
   ------------------
   index.html shows three class cards and each one is a plain link
   straight to class1/2/3.html. Clicking "Open my class" navigated
   the student but SAVED NOTHING. So a student who picked their
   class on the front page got asked for it again by welcome.html,
   again by a week page, and again by Mastery OS.

   Same gap on the section home pages: landing directly on
   class3.html is itself a statement that you are Class 3, and
   nothing recorded it.

   TWO ATTRIBUTES
   --------------
   1. On anything clickable that means "this is my section":

        <a href="class1.html" data-pick-sec="mw"> ... </a>

      Clicking it writes the choice before the browser navigates.

   2. On a page that IS one section's page:

        <body data-is-sec="tr-eve">

      Arriving stamps that section. This covers a student who was
      sent a direct link to their own hub, or who bookmarked it,
      and never passed through a picker at all.

   Both write the same 'bio004-section' key every other page reads,
   and both push the choice through to Mastery OS via
   section-sync.js when it is loaded, so nothing asks twice.

   ORDERING
   --------
   Load AFTER section-sync.js so the Mastery OS bridge exists:

       <script src="section-sync.js"></script>
       <script src="section-pick.js"></script>

   It works without section-sync.js too, it just writes the one key
   and leaves Mastery OS to catch up on its own next load.

   WHY THE WRITE IS SAFE ON A LINK CLICK
   -------------------------------------
   localStorage.setItem is synchronous, so it completes before the
   browser starts unloading the page. No preventDefault, no delay,
   no interception of the navigation. If storage is blocked the
   click still navigates, it just does not remember, which is the
   behavior we already had.
   ============================================================ */

(function () {
  'use strict';

  var KEY = 'bio004-section';
  var VALID = { 'mw': 1, 'tr-am': 1, 'tr-eve': 1 };

  function save(sec) {
    if (!VALID[sec]) return;
    try { localStorage.setItem(KEY, sec); } catch (e) {}
    /* Push it through to Mastery OS as well, so its onboarding
       arrives pre-answered instead of asking a second time. */
    try {
      if (window.BIO004_SECTION && window.BIO004_SECTION.set) {
        window.BIO004_SECTION.set(sec);
      }
    } catch (e) {}
  }

  function current() {
    try {
      var v = localStorage.getItem(KEY);
      return VALID[v] ? v : null;
    } catch (e) { return null; }
  }

  function init() {
    /* 1. Anything that declares which section it leads to. */
    var picks = document.querySelectorAll('[data-pick-sec]');
    for (var i = 0; i < picks.length; i++) {
      (function (el) {
        var sec = el.getAttribute('data-pick-sec');
        if (!VALID[sec]) return;

        el.addEventListener('click', function () { save(sec); });
        /* Keyboard activation on a link fires click too, so this
           covers Enter without a second handler. */

        /* Mark the one already chosen, so a student returning to the
           chooser can see which card is theirs rather than guessing. */
        if (current() === sec) {
          el.setAttribute('data-sec-current', 'true');
          var lbl = el.getAttribute('aria-label') || (el.textContent || '').replace(/\s+/g, ' ').trim();
          el.setAttribute('aria-label', lbl + '. This is your saved section.');
        }
      })(picks[i]);
    }

    /* 2. A page that is itself one section's page. */
    var owner = document.body && document.body.getAttribute('data-is-sec');
    if (owner && VALID[owner] && current() !== owner) save(owner);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
