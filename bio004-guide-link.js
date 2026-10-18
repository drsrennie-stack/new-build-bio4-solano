/* ============================================================
   bio004-guide-link.js
   The "Learning Guide" button for pages that do not load
   bio004-dock.js (the week pages, cadaver videos, the study steps).
   Same button the dock adds everywhere else. If the dock already
   added one, this does nothing.
   ============================================================ */
(function () {
  'use strict';
  function guidePill(raised) {
    function inject() {
      try {
        if (window.parent && window.parent !== window) return;
        if (document.body.hasAttribute('data-no-back')) return;
        if (/(^|\/)(bio004-launchpad|learning-guide)\.html$/.test(window.location.pathname)) return;
        if (document.querySelector('.bd-back')) return;
        var sc = null;
        try { var m = window.location.search.match(/[?&]sec=(mw|tr-am|tr-eve)/); sc = m ? m[1] : localStorage.getItem('bio004-section'); } catch (e) {}
        if (sc !== 'mw' && sc !== 'tr-am' && sc !== 'tr-eve') sc = null;
        var st = document.createElement('style');
        st.textContent =
          '.bd-back{position:fixed;left:18px;bottom:' + (raised ? '76px' : '18px') + ';z-index:2147482999;' +
          'display:inline-flex;align-items:center;gap:8px;background:#7A2E24;color:#FAFAF9;' +
          'border:0;border-radius:999px;padding:9px 16px 9px 12px;text-decoration:none;' +
          'font:800 13.5px/1 "Plus Jakarta Sans",system-ui,-apple-system,Segoe UI,Roboto,sans-serif;' +
          'box-shadow:0 2px 4px rgba(6,11,26,.14),0 8px 18px -8px rgba(6,11,26,.45);transform:translateY(-1px);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}' +
          '.bd-back:hover{background:#5E2219;color:#FAFAF9;transform:translateY(-3px);box-shadow:0 4px 8px rgba(6,11,26,.16),0 14px 26px -10px rgba(6,11,26,.55)}' +
          '.bd-back:focus-visible{outline:3px solid #B8924A;outline-offset:3px}' +
          '.bd-back svg{width:15px;height:15px}' +
          '@media(max-width:520px){.bd-back{padding:10px 13px 10px 10px;font-size:12.5px}}' +
          '.bd-back,.bd-back:visited{color:#FAFAF9}' +
          '@media(prefers-reduced-motion:reduce){.bd-back{transition:none}.bd-back:hover{transform:none}}' +
          '@media print{.bd-back{display:none !important}}';
        document.head.appendChild(st);
        var el = document.createElement('a');
        el.className = 'bd-back';
        el.href = 'learning-guide.html' + (sc ? '?sec=' + sc : '');
        el.target = '_top';
        el.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg><span class="bb-t">Learning Guide</span>';
        el.setAttribute('aria-label', 'Back to the Learning Guide, every course resource on one page');
        document.body.appendChild(el);
      } catch (e) {}
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
    else inject();
  }  guidePill(false);
})();
