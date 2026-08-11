/* ============================================================
   BIO 004 Human Anatomy
   missing-figure.js

   Four image folders have not been pushed yet: blood-img,
   musc-img, musc-tissue-img, and most of lym-img. Until they
   are, 104 figure slots across six pages have nothing to load.

   This file hides those figure columns completely, so a student
   sees a clean single-column slide instead of a broken image
   icon or a "coming soon" box. A promise of a picture that is
   not there is worse than no picture, so we simply do not
   mention it.

   IMPORTANT, and the reason nothing was deleted from the HTML:
   every <img> tag is still in place. Push the image folders and
   the figures come back on their own, with no edits to any page.
   Then delete this file and its six script tags.

   What it does to a slide whose figure is missing:
     - hides the .figcol wrapper, which takes the image and its
       caption with it
     - collapses the parent .split from two columns to one, so
       the text fills the slide rather than leaving a gap
   ============================================================ */

(function () {
  'use strict';

  /* Walk up to the figure wrapper. Falls back to the image's own
     parent if a page ever uses different markup. */
  function wrapper(img) {
    var n = img;
    for (var i = 0; i < 4 && n && n.parentNode; i++) {
      n = n.parentNode;
      if (!n.classList) break;
      if (n.classList.contains('figcol')) return n;
      if (n.tagName === 'FIGURE') return n;
    }
    return img.parentNode || img;
  }

  function hide(img) {
    if (img.getAttribute('data-mf-done')) return;
    img.setAttribute('data-mf-done', '1');

    var box = wrapper(img);
    box.hidden = true;
    box.style.display = 'none';

    /* Give the remaining column the full width. */
    var split = box.parentNode;
    if (split && split.classList && split.classList.contains('split')) {
      split.style.gridTemplateColumns = '1fr';
    }
  }

  function run() {
    var imgs = document.getElementsByTagName('img');
    for (var i = imgs.length - 1; i >= 0; i--) {
      var img = imgs[i];
      img.addEventListener('error', function () { hide(this); });
      if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) hide(img);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
