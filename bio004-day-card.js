/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   bio004-day-card.js

   ONE DAY CARD, USED BY EVERY PAGE THAT SHOWS A DAY.

   WHY THIS FILE EXISTS
   --------------------
   The course calendar and the Today page were each drawing their own
   version of the same thing: what happens in class, what the pre-work
   is, what to open in what order. Two renderers over the same day is
   two chances to disagree, and the student is the one who finds out.
   The day data, the styling and the markup now live here, and both
   pages call in.

   THE PRE-WORK ORDER IS LOAD-BEARING
   ----------------------------------
   Worksheet with the notes and the reading open FIRST, then the
   concept video, then spaced retrieval later in the week. Not
   video-first. The notes packet sits WITH the worksheet, not before
   it and not as a separate step.

   HOW TO USE IT
   -------------
     <script src="session-links.js"></script>
     <script src="bio004-day-card.js"></script>
     ...
     BIO004_DAY_CARD.styles();                       // once per page
     el.innerHTML = BIO004_DAY_CARD.render(isoDate, sectionKey);

   sectionKey is 'mw', 'tr-am' or 'tr-eve', the same keys the rest of
   the course uses. It also accepts the calendar's older 'class1',
   'class2', 'class3'.

   Returns '' when that date is not a class day for that section, so a
   caller can test the return value rather than the calendar.
   ============================================================ */
(function () {
  'use strict';
  if (window.BIO004_DAY_CARD) return;

  var SESS_MW = [
  {d:"2026-08-17", lec:"Intro to Course; Team Formation & Canvas Resources", lm:"orientation", tag:"Welcome", lab:"Intro to Anatomy Lab, Lab Safety & Introduction to Histology", pw:{t:"Course orientation video, syllabus & Canvas setup", l:""}}, {d:"2026-08-19", lec:"Guided DITKI Cell Activity Lecture", lm:"interactive", tag:"Brain dump", lab:"Epithelial Tissues", pw:{t:"Cell anatomy concept lecture + guided notes", l:""}}, {d:"2026-08-24", lec:"TBL 1: Cell Anatomy", lm:"tbl", tag:"TBL 1", lab:"Connective Tissue I", pw:{t:"Finish cell anatomy lectures, come ready for TBL 1", l:""}}, {d:"2026-08-26", lec:"Interactive Histology Lecture", lm:"interactive", tag:"Brain dump", lab:"Connective Tissue II", pw:{t:"Histology (epithelium) concept lecture + guided notes", l:""}}, {d:"2026-08-31", lec:"TBL 2: Histology", lm:"tbl", tag:"TBL 2", lab:"Muscle Tissue & Nervous Tissue", pw:{t:"Finish histology lectures, come ready for TBL 2", l:""}}, {d:"2026-09-02", lec:"Exam 1 Review Game", lm:"game", tag:"Review", lab:"Integumentary", pw:{t:"Review Units 1–2 for the Exam 1 review game", l:""}}, {d:"2026-09-07", lec:"Labor Day, No Class", lm:"holiday", tag:"Labor Day", lab:null, pw:null}, {d:"2026-09-09", lec:"Exam 1", lm:"exam", tag:"Exam 1", lab:"Exam 1", pw:{t:"Study for Exam 1 (Cell + Histology)", l:""}}, {d:"2026-09-14", lec:"Exam 1 Rebuttals; Guided DITKI Long Bone Anatomy & Bone Microanatomy", lm:"interactive", tag:"Brain dump", lab:"Bone Tissue, Long Bone & Microanatomy", pw:{t:"Long bone anatomy & bone microanatomy concept lecture + notes", l:""}}, {d:"2026-09-16", lec:"Skull Walk-Through Lecture", lm:"interactive", tag:"Brain dump", lab:"Axial Skeleton: Skull", pw:{t:"Axial skeleton, skull concept lecture + notes", l:""}}, {d:"2026-09-21", lec:"Spine Walk-Through Lecture", lm:"interactive", tag:"Brain dump", lab:"Axial Skeleton: Vertebrae & Ribs", pw:{t:"Axial skeleton, spine concept lecture + notes", l:""}}, {d:"2026-09-23", lec:"TBL 3: Bone Tissue, Cartilage & Microanatomy", lm:"tbl", tag:"TBL 3", lab:"Upper Extremity", pw:{t:"Bone tissue & cartilage, come ready for TBL 3", l:""}}, {d:"2026-09-28", lec:"Kahoot Review: Bone & Bone Details", lm:"game", tag:"Kahoot", lab:"Lower Extremity", pw:{t:"Review bone & skeletal details for the Kahoot", l:""}}, {d:"2026-09-30", lec:"Exam 2", lm:"exam", tag:"Exam 2", lab:"Exam 2", pw:{t:"Study for Exam 2 (Skeletal)", l:""}}, {d:"2026-10-05", lec:"Exam 2 Rebuttals; Interactive Heart Lecture; Cardiac Conduction", lm:"interactive", tag:"Brain dump", lab:"Thoracic Anatomy (Heart); BV Histology & Anatomy", pw:{t:"Heart anatomy + cardiac conduction concept lecture + notes", l:""}}, {d:"2026-10-07", lec:"DITKI Guided Interactive Muscle Microanatomy & Sarcomere Lecture", lm:"interactive", tag:"Brain dump", lab:"Muscle Microanatomy & Sarcomere", pw:{t:"Muscle microanatomy & sarcomere concept lecture + notes", l:""}}, {d:"2026-10-12", lec:"TBL 4: Heart Anatomy", lm:"tbl", tag:"TBL 4", lab:"Muscles of the Face, Chest & Back", pw:{t:"Finish heart anatomy lectures, come ready for TBL 4", l:""}}, {d:"2026-10-14", lec:"Blood Cell Interactive Lecture", lm:"interactive", tag:"Brain dump", lab:"Muscles & NAV of the Upper Arm; Anterior Forearm", pw:{t:"Blood cells concept lecture + notes", l:""}}, {d:"2026-10-19", lec:"TBL 5: Blood", lm:"tbl", tag:"TBL 5", lab:"Muscles & NAV of Posterior Forearm", pw:{t:"Finish blood lectures, come ready for TBL 5", l:""}}, {d:"2026-10-21", lec:"Exam 3", lm:"exam", tag:"Exam 3", lab:"Exam 3", pw:{t:"Study for Exam 3 (Heart, Muscle micro, Blood)", l:""}}, {d:"2026-10-26", lec:"Guided Walk-Through: Thoracic (Respiratory) Anatomy & Respiratory Histology", lm:"interactive", tag:"Brain dump", lab:"Thoracic Anatomy (Respiratory) & Respiratory Histology", pw:{t:"Respiratory anatomy & histology concept lecture + notes", l:""}}, {d:"2026-10-28", lec:"Endocrine Guided Walk-Through Activity", lm:"interactive", tag:"Brain dump", lab:"(Anterior) Thigh Muscles & NAV", pw:{t:"Endocrine concept lecture + notes", l:""}}, {d:"2026-11-02", lec:"TBL 6: Respiratory", lm:"tbl", tag:"TBL 6", lab:"(Posterior) Thigh Muscle & NAV", pw:{t:"Finish respiratory lectures, come ready for TBL 6", l:""}}, {d:"2026-11-04", lec:"Guided DITKI GI Map Activity I and II", lm:"interactive", tag:"Brain dump", lab:"Anterior/Posterior Lower Leg Muscles", pw:{t:"GI tract (primary organs) concept lecture + notes", l:""}}, {d:"2026-11-09", lec:"TBL 7: GI System", lm:"tbl", tag:"TBL 7", lab:"GI Organs (Primary and Accessory)", pw:{t:"GI accessory organs concept lecture + notes", l:""}}, {d:"2026-11-11", lec:"Veteran's Day, No Class", lm:"holiday", tag:"Veterans", lab:null, pw:null}, {d:"2026-11-16", lec:"Exam 4", lm:"exam", tag:"Exam 4", lab:"Exam 4", pw:{t:"Study for Exam 4. Both parts today, lecture exam and lab practical. Note the Monday.", l:""}}, {d:"2026-11-18", lec:"Exam 4 Rebuttal; Guided Renal Map", lm:"interactive", tag:"Brain dump", lab:"Renal Anatomy", pw:{t:"Renal anatomy concept lecture + notes", l:""}}, {d:"2026-11-23", lec:"Kahoot: Renal", lm:"game", tag:"Kahoot", lab:"Male & Female Reproductive Anatomy", pw:{t:"Male and female reproductive anatomy concept lecture + notes", l:""}}, {d:"2026-11-25", lec:"Travel Day, No Class", lm:"holiday", tag:"Travel Day", lab:null, pw:null}, {d:"2026-11-30", lec:"TBL 8: Renal", lm:"tbl", tag:"TBL 8", lab:"CNS Brain, Meninges & CSF", pw:{t:"Finish renal lectures, come ready for TBL 8", l:""}}, {d:"2026-12-02", lec:"Clinical: Cranial Nerve Exam Stations", lm:"interactive", tag:"Brain dump", lab:"Brain Stem (CNS) & Cranial Nerves (PNS)", pw:{t:"Cranial nerves + brain stem concept lecture + notes", l:""}}, {d:"2026-12-07", lec:"TBL 9: Cranial Nerves", lm:"tbl", tag:"TBL 9", lab:"CNS Spinal Cord, Spinal Nerves", pw:{t:"Finish cranial nerve lectures, come ready for TBL 9", l:""}}, {d:"2026-12-09", lec:"Exam 5", lm:"exam", tag:"Exam 5", lab:"Exam 5", pw:{t:"Study for Exam 5 (Renal, Repro, Neuro)", l:""}}, ];
  var SESS_TR = [
  {d:"2026-08-18", lec:"Intro to Course; Team Formation & Canvas Resources", lm:"orientation", tag:"Welcome", lab:"Intro to Anatomy Lab, Lab Safety & Introduction to Histology", pw:{t:"Course orientation video, syllabus & Canvas setup", l:""}}, {d:"2026-08-20", lec:"Guided DITKI Cell Activity Lecture", lm:"interactive", tag:"Brain dump", lab:"Epithelial Tissues", pw:{t:"Cell anatomy concept lecture + guided notes", l:""}}, {d:"2026-08-25", lec:"TBL 1: Cell Anatomy", lm:"tbl", tag:"TBL 1", lab:"Connective Tissue I", pw:{t:"Finish cell anatomy lectures, come ready for TBL 1", l:""}}, {d:"2026-08-27", lec:"Interactive Histology Lecture", lm:"interactive", tag:"Brain dump", lab:"Connective Tissue II", pw:{t:"Histology (epithelium) concept lecture + guided notes", l:""}}, {d:"2026-09-01", lec:"TBL 2: Histology", lm:"tbl", tag:"TBL 2", lab:"Muscle & Nervous Tissue", pw:{t:"Finish histology lectures, come ready for TBL 2", l:""}}, {d:"2026-09-03", lec:"Exam 1 Review Game", lm:"game", tag:"Review", lab:"Integumentary", pw:{t:"Review Units 1–2 for the Exam 1 review game", l:""}}, {d:"2026-09-08", lec:"Exam 1", lm:"exam", tag:"Exam 1", lab:"Exam 1", pw:{t:"Study for Exam 1 (Cell + Histology)", l:""}}, {d:"2026-09-10", lec:"Exam 1 Rebuttals; Guided DITKI Long Bone Anatomy & Bone Microanatomy", lm:"interactive", tag:"Brain dump", lab:"Bone Tissue, Long Bone & Microanatomy", pw:{t:"Long bone anatomy & bone microanatomy concept lecture + notes", l:""}}, {d:"2026-09-15", lec:"Skull Walk-Through Lecture", lm:"interactive", tag:"Brain dump", lab:"Axial Skeleton: Skull", pw:{t:"Axial skeleton, skull concept lecture + notes", l:""}}, {d:"2026-09-17", lec:"Spine Walk-Through Lecture", lm:"interactive", tag:"Brain dump", lab:"Axial Skeleton: Vertebrae & Ribs", pw:{t:"Axial skeleton, spine concept lecture + notes", l:""}}, {d:"2026-09-22", lec:"TBL 3: Bone Tissue, Cartilage & Microanatomy", lm:"tbl", tag:"TBL 3", lab:"Upper Extremity", pw:{t:"Bone tissue & cartilage, come ready for TBL 3", l:""}}, {d:"2026-09-24", lec:"Kahoot Review: Bone & Bone Details", lm:"game", tag:"Kahoot", lab:"Lower Extremity", pw:{t:"Review bone & skeletal details for the Kahoot", l:""}}, {d:"2026-09-29", lec:"Exam 2", lm:"exam", tag:"Exam 2", lab:"Exam 2", pw:{t:"Study for Exam 2 (Skeletal)", l:""}}, {d:"2026-10-01", lec:"Exam 2 Rebuttals; Interactive Heart Lecture; Cardiac Conduction", lm:"interactive", tag:"Brain dump", lab:"Thoracic Anatomy (Heart); BV Histology & Anatomy", pw:{t:"Heart anatomy + cardiac conduction concept lecture + notes", l:""}}, {d:"2026-10-06", lec:"DITKI Guided Interactive Muscle Microanatomy & Sarcomere Lecture", lm:"interactive", tag:"Brain dump", lab:"Muscle Microanatomy & Sarcomere", pw:{t:"Muscle microanatomy & sarcomere concept lecture + notes", l:""}}, {d:"2026-10-08", lec:"TBL 4: Heart Anatomy", lm:"tbl", tag:"TBL 4", lab:"Muscles of the Face, Chest & Back", pw:{t:"Finish heart anatomy lectures, come ready for TBL 4", l:""}}, {d:"2026-10-13", lec:"Professional Development, No Class", lm:"holiday", tag:"Prof Dev", lab:null, pw:null}, {d:"2026-10-15", lec:"Blood Cell Interactive Lecture", lm:"interactive", tag:"Brain dump", lab:"Muscles & NAV of the Upper Arm; Anterior Forearm", pw:{t:"Blood cells concept lecture + notes", l:""}}, {d:"2026-10-20", lec:"TBL 5: Blood", lm:"tbl", tag:"TBL 5", lab:"Muscles & NAV of Posterior Forearm", pw:{t:"Finish blood lectures, come ready for TBL 5", l:""}}, {d:"2026-10-22", lec:"Exam 3", lm:"exam", tag:"Exam 3", lab:"Exam 3", pw:{t:"Study for Exam 3 (Heart, Muscle micro, Blood)", l:""}}, {d:"2026-10-27", lec:"Guided Walk-Through: Thoracic (Respiratory) Anatomy & Respiratory Histology", lm:"interactive", tag:"Brain dump", lab:"Thoracic Anatomy (Respiratory) & Respiratory Histology", pw:{t:"Respiratory anatomy & histology concept lecture + notes", l:""}}, {d:"2026-10-29", lec:"Endocrine Guided Walk-Through Activity", lm:"interactive", tag:"Brain dump", lab:"(Anterior) Thigh Muscles & NAV", pw:{t:"Endocrine concept lecture + notes", l:""}}, {d:"2026-11-03", lec:"TBL 6: Respiratory", lm:"tbl", tag:"TBL 6", lab:"(Posterior) Thigh Muscle & NAV", pw:{t:"Finish respiratory lectures, come ready for TBL 6", l:""}}, {d:"2026-11-05", lec:"Guided DITKI GI Map Activity I", lm:"interactive", tag:"Brain dump", lab:"Anterior/Posterior Lower Leg Muscles", pw:{t:"GI tract (primary organs) concept lecture + notes", l:""}}, {d:"2026-11-10", lec:"Guided DITKI GI Map Activity II", lm:"interactive", tag:"Brain dump", lab:"GI Organs (Primary)", pw:{t:"GI accessory organs concept lecture + notes", l:""}}, {d:"2026-11-12", lec:"TBL 7: GI System", lm:"tbl", tag:"TBL 7", lab:"GI Organs (Accessory)", pw:{t:"Finish GI lectures, come ready for TBL 7", l:""}}, {d:"2026-11-17", lec:"Exam 4", lm:"exam", tag:"Exam 4", lab:"Exam 4", pw:{t:"Study for Exam 4 (Respiratory, Endocrine, GI)", l:""}}, {d:"2026-11-19", lec:"Guided Renal Map", lm:"interactive", tag:"Brain dump", lab:"Renal Anatomy", pw:{t:"Renal anatomy concept lecture + notes", l:""}}, {d:"2026-11-24", lec:"Kahoot Review: Renal", lm:"game", tag:"Kahoot", lab:"M & F Reproductive Anatomy", pw:{t:"Review renal for the Kahoot", l:""}}, {d:"2026-11-26", lec:"Thanksgiving, No Class", lm:"holiday", tag:"Thanksgiving", lab:null, pw:null}, {d:"2026-12-01", lec:"TBL 8: Renal", lm:"tbl", tag:"TBL 8", lab:"CNS Brain, Meninges & CSF", pw:{t:"Finish renal lectures, come ready for TBL 8", l:""}}, {d:"2026-12-03", lec:"Clinical: Cranial Nerve Exam Stations", lm:"interactive", tag:"Brain dump", lab:"Brain Stem (CNS) & Cranial Nerves (PNS)", pw:{t:"Cranial nerves + brain stem concept lecture + notes", l:""}}, {d:"2026-12-08", lec:"TBL 9: Cranial Nerves", lm:"tbl", tag:"TBL 9", lab:"CNS Spinal Cord, Spinal Nerves", pw:{t:"Finish cranial nerve lectures, come ready for TBL 9", l:""}}, {d:"2026-12-10", lec:"Exam 5", lm:"exam", tag:"Exam 5", lab:"Exam 5", pw:{t:"Study for Exam 5 (Renal, Repro, Neuro)", l:""}}, ];
  var SECTIONS = {
  class1:{lecT:"12:30–1:50 pm · VC 118", labT:"2:00–4:50 pm · VC 1137", sess:SESS_MW}, class2:{lecT:"9:30–10:45 am · VC 212", labT:"11:00 am–1:50 pm · VC 1137", sess:SESS_TR}, class3:{lecT:"5:30–6:45 pm · VC 118", labT:"7:00–9:50 pm · VC 1137", sess:SESS_TR}, };

  /* The rest of the course says mw / tr-am / tr-eve. The calendar grew up
     saying class1 / class2 / class3. Accept both rather than make every
     caller remember which page it is on. */
  var ALIAS = { 'mw':'class1', 'tr-am':'class2', 'tr-eve':'class3',
                'class1':'class1', 'class2':'class2', 'class3':'class3' };

  var DOWL = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var MON3 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  function parse(s){ var p=String(s).split('-'); return new Date(+p[0], +p[1]-1, +p[2]); }
  function esc(s){ return String(s==null?'':s); }

  function sessionFor(iso, key){
    var sec = SECTIONS[ALIAS[key]];
    if(!sec) return null;
    for(var i=0;i<sec.sess.length;i++){ if(sec.sess[i].d===iso) return sec.sess[i]; }
    return null;
  }

  function matLink(o, icon, kind){
    if(!o) return '';
    return '<a href="'+esc(o.u)+'" target="_top"><span class="mi" aria-hidden="true">'+icon+'</span>'+
           '<span>'+esc(o.t)+'</span><span class="mk">'+kind+'</span></a>';
  }
  function many(list, icon, kind){
    return (list||[]).map(function(o){ return matLink(o, icon, kind); }).join('');
  }

  function render(iso, key, opts){
    opts = opts || {};
    var s = sessionFor(iso, key);
    if(!s) return '';
    var sec = SECTIONS[ALIAS[key]];
    var dt = parse(s.d);
    var html = '';

    /* heading:false is for a caller that already says the date and the room
       times in its own header, the Today page being the one that does. The
       exam and holiday titles still render, because those are the content,
       not a repeat of the page heading. */
    var withHead = opts.heading !== false;
    if(withHead){
      html += '<p class="d-date">'+DOWL[dt.getDay()]+' &middot; '+MONTHS[dt.getMonth()]+' '+dt.getDate()+'</p>';
    }

    if(s.lm==='holiday'){
      html += '<h3 class="d-title">No Class</h3>';
      html += '<div class="d-holiday"><p class="dh-emoji">'+esc(s.lec).replace(/, No Class/,'')+'</p>'+
              '<p class="d-empty" style="text-align:center;">Campus holiday, no lecture or lab. Enjoy the day off.</p></div>';
      return html;
    }

    var nb = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()-1);
    var nbLabel = DOWL[nb.getDay()].slice(0,3)+' '+MON3[nb.getMonth()]+' '+nb.getDate();
    var isExam = s.lm==='exam';

    if(withHead || isExam) html += '<h3 class="d-title">'+(isExam?esc(s.lec):'Class Day')+'</h3>';
    if(withHead) html += '<p class="d-meet">Lecture '+sec.lecT+' &nbsp;&middot;&nbsp; Lab '+sec.labT+'</p>';

    var M = (window.BIO004_SESSION_LINKS||{})[s.d] || {};

    if(s.pw){
      html += '<div class="d-card prework"><div class="dc-k">Pre-work<span class="dc-when">by '+nbLabel+' night</span></div>';
      html += '<div class="dc-t">'+esc(s.pw.t)+'</div>';
      /* WORKBOOKS ARE DELIBERATELY NOT RENDERED. session-links.js carries
         M.workbooks and this card does not read it: the pre-work sheet is
         what students work, and the workbook layer stays unlinked on
         purpose. This exclusion has been reverted once by accident on the
         Today page, so leave the array unread here too. */
      var step1 = many(M.sheets,'&#9998;','Pre-work') + many(M.notes,'&#9776;','Notes');
      var step2 = many(M.videos,'&#9658;','Video');
      var pw = '';
      if(step1) pw += '<div class="stephead"><span class="step-n">1</span>Work the sheet with these notes and the reading open</div>'+step1;
      if(step2) pw += '<div class="stephead"><span class="step-n">2</span>Then watch the video</div>'+step2;
      if(step1||step2) pw += '<div class="stephead"><span class="step-n">3</span>Then spaced retrieval, later in the week</div>'+
        '<a href="mastery-os-fall-2026.html#s-recall" target="_top"><span class="mi" aria-hidden="true">&#9673;</span>'+
        '<span>Mastery OS, spaced recall for this topic</span><span class="mk">Recall</span></a>';
      if(pw){ html += '<div class="mat">'+pw+'</div>'; }
      else if(s.pw.l){ html += '<a class="pw-link" href="'+esc(s.pw.l)+'" target="_blank" rel="noopener">Open pre-work &#8599;</a>'; }
      /* The only days that reach here are the exam-prep days, whose pre-work
         is "Study for Exam N". There is no new material to link, so promising
         a link that is coming is a lie. Send them to the pages that are
         actually the right answer for that night instead. */
      else if(/^Study for Exam/i.test(s.pw.t||'')){
        html += '<div class="mat">'+
          '<a href="bio004-exam-modules.html" target="_top"><span class="mi" aria-hidden="true">&#9636;</span><span>What this exam covers</span><span class="mk">Scope</span></a>'+
          '<a href="mastery-os-fall-2026.html#s-recall" target="_top"><span class="mi" aria-hidden="true">&#9673;</span><span>Mastery OS, spaced recall</span><span class="mk">Recall</span></a>'+
          '<a href="mastery-os-fall-2026.html#s-weak" target="_top"><span class="mi" aria-hidden="true">&#9678;</span><span>Your weakest topics first</span><span class="mk">Weak spots</span></a>'+
          '</div>';
      }
      else{ html += '<span class="pw-link pending">Link coming soon</span>'; }
      html += '</div>';
    }

    if(isExam){
      html += '<div class="d-card lecture"><div class="dc-k">Exam</div><div class="dc-t">'+esc(s.lec)+'</div>'+
              '<div class="dc-sub">Covers the unit since the last exam. Lecture and lab time both used for the exam.</div>'+
              '<span class="checkbadge cb-exam">Exam</span>';
      html += '<div class="mat"><a href="mastery-os-fall-2026.html" target="_top"><span class="mi" aria-hidden="true">&#9673;</span><span>Mastery OS, build a cram plan</span><span class="mk">Study</span></a>'+
              '<a href="bio004-exam-modules.html" target="_top"><span class="mi" aria-hidden="true">&#9636;</span><span>What this exam covers</span><span class="mk">Scope</span></a></div>';
      html += '</div>';
      return html;
    }

    var badge = {interactive:['cb-icheck','Brain dump'], tbl:['cb-tbl','IRAT &rarr; TRAT &middot; TBL'],
                 game:['cb-game','Review game'], orientation:['cb-orient','Welcome &amp; setup']}[s.lm] || ['cb-orient',''];
    html += '<div class="d-card lecture"><div class="dc-k">Lecture<span class="dc-when">'+sec.lecT.split(' \u00b7 ')[0]+'</span></div>';
    html += '<div class="dc-t">'+esc(s.lec)+'</div>';
    if(badge[1]) html += '<span class="checkbadge '+badge[0]+'">'+badge[1]+'</span>';
    var lec = matLink(M.slides,'&#9635;','Slides');
    if(lec) html += '<div class="mat">'+lec+'</div>';
    html += '</div>';

    if(s.lab){
      html += '<div class="d-card lab"><div class="dc-k">Lab<span class="dc-when">'+sec.labT.split(' \u00b7 ')[0]+'</span></div>';
      html += '<div class="dc-t">'+esc(s.lab)+'</div>';
      var labs = many(M.lab,'&#9679;','Lab sprint');
      if(labs) html += '<div class="mat">'+labs+'</div>';
      html += '</div>';
    }

    html += '<div class="mat" style="margin-top:14px;">'+
      '<a href="'+((window.BIO004_LINKS&&window.BIO004_LINKS.loops)?window.BIO004_LINKS.loops.url:'https://drsrennie-stack.github.io/loops/')+'" '+
      'target="_blank" rel="noopener"><span class="mi" aria-hidden="true">&#8635;</span>'+
      '<span>Loops, quick visual practice</span><span class="mk">Practice</span></a></div>';

    return html;
  }

  /* Every custom property carries its own fallback, so this file styles
     itself correctly on a page that does not define the course variables.
     The Today page does not define all nine. */
  var CSS = "  .detail .d-date{font-family:var(--font-eyebrow, 'Plus Jakarta Sans',-apple-system,sans-serif);font-weight:700;font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;color:var(--terra-dark, #6B1616);}\n  .detail .d-title{font-family:var(--font-display, 'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,sans-serif);font-weight:800;font-size:1.5rem;color:var(--navy, #08101F);margin:4px 0 2px;line-height:1.1;}\n  .detail .d-meet{font-size:.86rem;color:var(--navy, #08101F);opacity:.7;}\n  .d-card{border:1px solid var(--navy-tint, #ECEFF4);border-radius:8px;padding:13px 14px;margin-top:12px;}\n  .d-card.prework{background:#7A2A22;border-color:#7A2A22;}\n  .d-card.prework .dc-k{color:#F2E2B8;} .d-card.prework .dc-t{color:#F4EFE8;} .d-card.prework .dc-when{color:#F4EFE8;opacity:1;}\n  .d-card.prework .pw-link{color:#F4EFE8;border-color:rgba(244,239,232,.6);} .d-card.prework .pw-link:hover{background:#fff;color:#7A2A22;}\n  .d-card.prework .pw-link.pending{color:#F4EFE8;opacity:1;border-color:rgba(244,239,232,.65);}\n  .d-card.lecture .dc-k{color:var(--navy, #08101F);}\n  .d-card.lab .dc-k{color:var(--terra-dark, #6B1616);}\n  .d-card .dc-k{font-family:var(--font-eyebrow, 'Plus Jakarta Sans',-apple-system,sans-serif);font-weight:700;font-size:.62rem;letter-spacing:.09em;text-transform:uppercase;color:var(--terra-dark, #6B1616);display:flex;align-items:center;gap:8px;}\n  .d-card .dc-when{font-weight:600;font-size:.72rem;color:var(--navy, #08101F);opacity:.7;margin-left:auto;text-transform:none;letter-spacing:0;}\n  .d-card .dc-t{font-family:var(--font-display, 'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,sans-serif);font-weight:700;font-size:1.02rem;color:var(--navy, #08101F);margin:5px 0 0;line-height:1.25;}\n  .d-card .dc-sub{font-size:.83rem;color:var(--navy, #08101F);opacity:.72;margin-top:3px;}\n  .checkbadge{display:inline-block;margin-top:8px;font-family:var(--font-eyebrow, 'Plus Jakarta Sans',-apple-system,sans-serif);font-weight:700;font-size:.6rem;letter-spacing:.05em;text-transform:uppercase;padding:4px 10px;border-radius:999px;}\n  .cb-icheck{background:var(--terra, #8B1D1D);color:#fff;}\n  .cb-tbl{background:var(--navy, #08101F);color:#fff;}\n  .cb-exam{background:var(--terra-dark, #6B1616);color:#fff;}\n  .cb-game{background:#4A545C;color:#fff;}\n  .cb-orient{background:var(--navy-tint, #ECEFF4);color:var(--navy, #08101F);}\n  .pw-link{display:inline-flex;align-items:center;gap:6px;margin-top:8px;font-family:var(--font-display, 'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,sans-serif);font-weight:700;font-size:.88rem;color:var(--terra-dark, #6B1616);text-decoration:none;border:1.5px solid var(--terra-dark, #6B1616);border-radius:7px;padding:6px 12px;transition:var(--t, transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease);}\n  .pw-link:hover{background:var(--terra-dark, #6B1616);color:#fff;}\n  .mat{display:flex;flex-direction:column;gap:6px;margin-top:9px;}\n  .step-n{display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;width:19px;height:19px;border-radius:50%;font-family:var(--font-display, 'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,sans-serif);font-weight:800;font-size:.66rem;background:#F2E2B8;color:#7A2A22;}\n  .mat .stephead{display:flex;align-items:center;gap:7px;font-family:var(--font-eyebrow, 'Plus Jakarta Sans',-apple-system,sans-serif);font-weight:700;font-size:.6rem;letter-spacing:.08em;text-transform:uppercase;color:#F2E2B8;margin-top:4px;}\n  .mat .stephead:first-child{margin-top:0;}\n  .mat a{display:flex;align-items:center;gap:8px;font-size:.86rem;font-weight:600;color:var(--navy, #08101F);text-decoration:none;background:#fff;border:1px solid var(--navy-tint, #ECEFF4);border-radius:7px;padding:8px 11px;transition:var(--t, transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease);}\n  .mat a:hover{border-color:var(--terra-dark, #6B1616);transform:translateY(-1px);box-shadow:var(--shadow-rest, 0 1px 3px rgba(0,0,0,0.08));}\n  .mat a .mi{flex:0 0 auto;font-size:.9rem;color:var(--terra-dark, #6B1616);}\n  .mat a .mk{font-family:var(--font-eyebrow, 'Plus Jakarta Sans',-apple-system,sans-serif);font-weight:700;font-size:.58rem;letter-spacing:.08em;text-transform:uppercase;color:var(--terra-dark, #6B1616);margin-left:auto;white-space:nowrap;}\n  .d-card.prework .mat a{background:rgba(0,0,0,.18);border-color:rgba(244,239,232,.5);color:#F4EFE8;}\n  .d-card.prework .mat a:hover{background:#fff;color:#7A2A22;}\n  .d-card.prework .mat a .mi,.d-card.prework .mat a .mk{color:#F2E2B8;}\n  .d-card.prework .mat a:hover .mi,.d-card.prework .mat a:hover .mk{color:#7A2A22;}\n  .pw-link.pending{border-style:dashed;color:var(--navy, #08101F);opacity:.6;border-color:var(--gray-light, #D1D5DB);pointer-events:none;}\n  .d-holiday{text-align:center;padding:24px 8px;}\n  .d-holiday .dh-emoji{font-family:var(--font-display, 'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,sans-serif);font-weight:800;font-size:1.3rem;color:var(--navy, #08101F);}\n  .d-empty{color:var(--navy, #08101F);opacity:.75;font-size:.92rem;padding:12px 2px;}";

  function styles(){
    if(document.getElementById('bio004-day-card-css')) return;
    var st = document.createElement('style');
    st.id = 'bio004-day-card-css';
    st.textContent = CSS;
    (document.head || document.documentElement).appendChild(st);
  }

  window.BIO004_DAY_CARD = {
    render: render,
    styles: styles,
    sessionFor: sessionFor,
    sessions: function(key){ var s = SECTIONS[ALIAS[key]]; return s ? s.sess.slice() : []; },
    times: function(key){ var s = SECTIONS[ALIAS[key]]; return s ? {lecT:s.lecT, labT:s.labT} : null; }
  };
})();
