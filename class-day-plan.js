/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   class-day-plan.js

   One link, on every page that shows the schedule, to the Class day
   plan (bio004-course-calendar-alt.html): lecture and lab, before
   class and in class, for the student's own section.

   Put a placeholder where the link should sit, then load this file:
     <div data-day-plan></div>              uses the student's section
     <div data-day-plan data-sec="mw"></div> a course page fixes it
   Section order: data-sec, then ?sec= in the address, then the
   section the student picked (localStorage 'bio004-section').
   With a section, the plan opens locked to it. Without one, it opens
   with the section buttons showing.
   ============================================================ */
(function(){
  'use strict';
  var URL = 'https://drsrennie-stack.github.io/new-build-bio4-solano/bio004-course-calendar-alt.html';
  var OK = { 'mw':1, 'tr-am':1, 'tr-eve':1 };
  var CSS = '.cdp{margin:16px 0;}'
    + '.cdp a{display:flex;align-items:center;gap:12px;background:#fff;color:#08101F;text-decoration:none;'
    + 'border-radius:10px;box-shadow:0 1px 3px rgba(0,0,0,.08),0 6px 16px rgba(8,16,31,.08);padding:12px 16px;'
    + 'font-family:"Plus Jakarta Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.3;max-width:640px;}'
    + '.cdp a:hover{box-shadow:0 8px 20px rgba(8,16,31,.14);}'
    + '.cdp a:focus-visible{outline:3px solid #6B1616;outline-offset:2px;}'
    + '.cdp .cdp-ic{flex:none;width:34px;height:34px;border-radius:8px;background:#08101F;color:#DCB45C;display:grid;place-items:center;font-weight:800;font-size:15px;}'
    + '.cdp .cdp-t{display:block;font-weight:800;font-size:15px;}'
    + '.cdp .cdp-s{display:block;font-weight:500;font-size:13px;color:#4F5D66;}'
    + '.cdp .cdp-go{margin-left:auto;font-weight:800;color:#6B1616;}'
    + '@media print{.cdp{display:none!important;}}';
  function section(el){
    var s = el.getAttribute('data-sec');
    if(OK[s]) return s;
    try{ var m = location.search.match(/[?&]sec=([a-z\-]+)/); if(m && OK[m[1]]) return m[1]; }catch(e){}
    try{ s = localStorage.getItem('bio004-section'); if(OK[s]) return s; }catch(e){}
    return null;
  }
  function paint(){
    var els = document.querySelectorAll('[data-day-plan]');
    if(!els.length) return;
    if(!document.getElementById('cdp-css')){
      var st = document.createElement('style'); st.id = 'cdp-css'; st.textContent = CSS;
      (document.head || document.documentElement).appendChild(st);
    }
    Array.prototype.forEach.call(els, function(el){
      var s = section(el);
      el.className = (el.className ? el.className + ' ' : '') + 'cdp';
      el.innerHTML = '<a href="' + URL + (s ? '?sec=' + s : '') + '" target="_top">'
        + '<span class="cdp-ic" aria-hidden="true">&#9638;</span>'
        + '<span><span class="cdp-t">Class day plan</span>'
        + '<span class="cdp-s">What to do before class and in class, lecture and lab, every class day</span></span>'
        + '<span class="cdp-go" aria-hidden="true">&rarr;</span></a>';
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', paint); else paint();
  /* a student who switches section on the page gets the matching plan */
  window.addEventListener('storage', function(e){ if(e.key === 'bio004-section') paint(); });
  document.addEventListener('click', function(e){
    if(e.target && e.target.closest && e.target.closest('[data-sec]') && !e.target.closest('[data-day-plan]')) setTimeout(paint, 50);
  });
})();
