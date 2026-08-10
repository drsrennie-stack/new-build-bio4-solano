/* ============================================================
   BIO 004 Human Anatomy, Fall 2026, Solano Community College
   Vacaville Center. Schedule reference for the three sections.

   REPLACES the earlier version of this file, which described four
   lecture exams plus five lab practicals. That structure was wrong.
   The real structure is FIVE exams per section, each with a lecture
   part and a lab practical part.

   ------------------------------------------------------------
   READ THIS BEFORE WIRING THIS FILE INTO A PAGE
   ------------------------------------------------------------
   This file deliberately does NOT define window.BIO004_SCHEDULE.

   Mastery OS USED TO resolve its schedule in this order:

     store.get('mos-schedule')
       || window.BIO004_SCHEDULE          <-- global, no section
       || FALL_SECTIONS[store.get('mos-section')]

   Defining window.BIO004_SCHEDULE would therefore have overridden the
   section-aware lookup and forced all three sections onto one
   schedule. Two of the three would have silently shown the wrong exam
   dates. That has been fixed at the consumer end: Mastery OS now
   resolves per-section data FIRST and only accepts a generic global
   when the global names the matching section. This file still avoids
   defining that global, as belt and braces.

   Use this file as the human-readable source of truth and for any
   tool that wants the dates without loading Mastery OS. Read it as
   window.BIO004_SECTIONS.
   ------------------------------------------------------------

   SOURCES, in authority order:
     LAB sessions and LAB PRACTICAL dates
       "Fall 2026 Vacaville Anatomy and Physiology Lab Schedule
        (Updated)", department master, Anatomy columns only.
        Mon/Wed column drives Class 1. Tues/Thurs column drives
        Classes 2 and 3. The Mon/Wed/Fri column is another
        instructor's section and does not apply here.
     LECTURE sessions and LECTURE EXAM dates
       "Schedule Fall 2026 Lecture check", instructor's own
        lecture schedule.

   Solano Fall 2026 calendar:
     First day of instruction .... Mon Aug 17
     Labor Day .................. Mon Sep 7        campus closed
     Professional Development ... Tue Oct 13       no class
     Veterans Day ............... Wed Nov 11       campus closed
     Travel Day ................. Wed Nov 25       no class
     Thanksgiving ............... Thu Nov 26 to Fri Nov 27
     Last day of instruction .... Fri Dec 11

   >>> THE ONE ODD DATE IN THE WHOLE TERM <<<
   Class 1 Exam 4 is Mon Nov 16, not a Wednesday like its other four.
   The department sets lab practical dates for the whole Vacaville lab
   and put it there; the lecture exam was moved onto the same day so
   both parts sit together. Every exam in every section now has both
   parts on one day. Do not "correct" Nov 16 to a Wednesday.
   ============================================================ */

window.BIO004_SECTIONS = {

  course: 'BIO 004 Human Anatomy',
  term:   'Fall 2026',
  college:'Solano Community College, Vacaville Center',
  start:  '2026-08-17',
  end:    '2026-12-11',

  closures: [
    { date:'2026-09-07', day:'Mon', name:'Labor Day',           affects:['class1'] },
    { date:'2026-10-13', day:'Tue', name:'Professional Development', affects:['class2','class3'] },
    { date:'2026-11-11', day:'Wed', name:'Veterans Day',        affects:['class1'] },
    { date:'2026-11-25', day:'Wed', name:'Travel Day',          affects:['class1'] },
    { date:'2026-11-26', day:'Thu', name:'Thanksgiving',        affects:['class2','class3'] }
  ],

  sections: {

    class1: {
      name:'Class 1', crn:'80650', days:'Mon / Wed', when:'Afternoon',
      lecture:'12:30 to 1:50 pm, VC 118',
      lab:'2:00 to 4:50 pm, VC 1137',
      masterColumn:'Mon. / Wed.',
      exams: [
        { n:1, lecture:'2026-09-09', practical:'2026-09-09', sameDay:true,
          practicalCovers:'6 lab sessions, 1.0 through 1.7' },
        { n:2, lecture:'2026-09-30', practical:'2026-09-30', sameDay:true,
          practicalCovers:'5 lab sessions, 2.1 through 2.6' },
        { n:3, lecture:'2026-10-21', practical:'2026-10-21', sameDay:true,
          practicalCovers:'5 lab sessions, 3.1 through 3.5' },
        { n:4, lecture:'2026-11-16', practical:'2026-11-16', sameDay:true,
          practicalCovers:'5 lab sessions, 4.1 through 4.6',
          note:'MONDAY. Every other Class 1 exam is a Wednesday. This one sits '
             + 'Mon Nov 16 because that is the department lab practical date, and '
             + 'the lecture exam was moved to join it so both parts stay on one day.' },
        { n:5, lecture:'2026-12-09', practical:'2026-12-09', sameDay:true,
          practicalCovers:'5 lab sessions, 5.1 through 5.5' }
      ]
    },

    class2: {
      name:'Class 2', crn:'80654', days:'Tue / Thu', when:'Early',
      lecture:'9:30 to 10:45 am, VC 212',
      lab:'11:00 am to 1:50 pm, VC 1137',
      masterColumn:'Tues. / Thurs',
      exams: [
        { n:1, lecture:'2026-09-08', practical:'2026-09-08', sameDay:true,
          practicalCovers:'6 lab sessions, 1.0 through 1.7' },
        { n:2, lecture:'2026-09-29', practical:'2026-09-29', sameDay:true,
          practicalCovers:'5 lab sessions, 2.1 through 2.6' },
        { n:3, lecture:'2026-10-22', practical:'2026-10-22', sameDay:true,
          practicalCovers:'5 lab sessions, 3.1 through 3.5' },
        { n:4, lecture:'2026-11-17', practical:'2026-11-17', sameDay:true,
          practicalCovers:'6 lab sessions, 4.1 through 4.6' },
        { n:5, lecture:'2026-12-10', practical:'2026-12-10', sameDay:true,
          practicalCovers:'5 lab sessions, 5.1 through 5.5' }
      ]
    },

    class3: {
      name:'Class 3', crn:'80655', days:'Tue / Thu', when:'Evening',
      lecture:'5:30 to 6:45 pm, VC 118',
      lab:'7:00 to 9:50 pm, VC 1137',
      masterColumn:'Tues. / Thurs',
      /* Identical dates to Class 2. Only the time of day differs. */
      exams: [
        { n:1, lecture:'2026-09-08', practical:'2026-09-08', sameDay:true,
          practicalCovers:'6 lab sessions, 1.0 through 1.7' },
        { n:2, lecture:'2026-09-29', practical:'2026-09-29', sameDay:true,
          practicalCovers:'5 lab sessions, 2.1 through 2.6' },
        { n:3, lecture:'2026-10-22', practical:'2026-10-22', sameDay:true,
          practicalCovers:'5 lab sessions, 3.1 through 3.5' },
        { n:4, lecture:'2026-11-17', practical:'2026-11-17', sameDay:true,
          practicalCovers:'6 lab sessions, 4.1 through 4.6' },
        { n:5, lecture:'2026-12-10', practical:'2026-12-10', sameDay:true,
          practicalCovers:'5 lab sessions, 5.1 through 5.5' }
      ]
    }
  },

  /* Department duty roster, from the header block of the lab master.
     Read as: who sets the lab room up, who breaks it down, and which
     sitting each instructor covers. Confirm with Jim before Aug 17. */
  duties: [
    { exam:1, setup:'Sharilyn or Moe', takedown:'Sharilyn',
      sittings:[ {track:'M/W', who:'Jim',      at:'9:00 am',  tentative:true },
                 {track:'T/R', who:'Moe',      at:'8:00 am',  tentative:true } ] },
    { exam:2, setup:'Sharilyn or Moe', takedown:'Sharilyn',
      sittings:[ {track:'M/W', who:'Jim',      at:'12:00 pm', tentative:true },
                 {track:'T/R', who:'Sharilyn', at:'11:00 am', tentative:false } ] },
    { exam:3, setup:'Jim', takedown:'Sharilyn',
      sittings:[ {track:'M/W', who:'Sharilyn', at:'2:00 pm',  tentative:false },
                 {track:'T/R', who:'Moe',      at:'2:00 pm',  tentative:true } ] },
    { exam:4, setup:'Sharilyn or Moe', takedown:'Sharilyn',
      sittings:[ {track:'T/R', who:'Sharilyn', at:'7:00 pm',  tentative:false } ] },
    { exam:5, setup:'Jim', takedown:'Jim', sittings:[] }
  ]
};

/* ============================================================
   SESSION-LEVEL SCHEDULE
   ------------------------------------------------------------
   Added so the week pages stop hardcoding their own dates.
   This is now the ONE place a session date is written down.
   Change a date here and every wired page follows.

   Two tracks, because content follows the day-of-week pattern:
     mw  drives Class 1 (Mon / Wed)
     tr  drives Class 2 and Class 3 (Tue / Thu)

   kind:
     'class'  normal session; lines[] are [label, text] pairs
     'exam'   exam day; text[] is one entry per paragraph
     'off'    closure or no-class day; text[] same

   date is ISO. The label a student sees ("Mon Sep 14") is
   DERIVED at render time, never stored, so a weekday can no
   longer drift out of sync with its date. The comment on each
   row is generated for readability, not authoritative.
   ============================================================ */

window.BIO004_SESSIONS = {

  mw: [
    /* Mon Aug 17 */ { wk:1,   date:'2026-08-17', kind:'class',
      lines:[['In class', 'Intro to Anatomy, team formation &amp; Canvas setup'],
             ['Lab', 'Intro to Anatomy Lab, Lab Safety &amp; Introduction to Histology']] },
    /* Wed Aug 19 */ { wk:1,   date:'2026-08-19', kind:'class',
      lines:[['In class', 'Guided Cell Activity (Brain dump)'],
             ['Lab', 'Epithelial Tissues']] },
    /* Mon Aug 24 */ { wk:2,   date:'2026-08-24', kind:'class',
      lines:[['In class', '<strong>TBL 1</strong> &middot; Cell Anatomy'],
             ['Lab', 'Connective Tissue I']] },
    /* Wed Aug 26 */ { wk:2,   date:'2026-08-26', kind:'class',
      lines:[['In class', 'Interactive Histology Lecture (Brain dump)'],
             ['Lab', 'Connective Tissue II']] },
    /* Mon Aug 31 */ { wk:3,   date:'2026-08-31', kind:'class',
      lines:[['In class', '<strong>TBL 2</strong> &middot; Histology'],
             ['Lab', 'Muscle Tissue &amp; Nervous Tissue']] },
    /* Wed Sep 2  */ { wk:3,   date:'2026-09-02', kind:'class',
      lines:[['In class', 'Exam 1 Review Game'],
             ['Lab', 'Integumentary']] },
    /* Mon Sep 7  */ { wk:4,   date:'2026-09-07', kind:'off',   tag:'No class',
      text:['Labor Day, campus closed'] },
    /* Wed Sep 9  */ { wk:4,   date:'2026-09-09', kind:'exam',  tag:'Exam day',
      text:['<strong>Exam 1</strong>, lecture exam + lab practical. Doors lock at start.'] },
    /* Mon Sep 14 */ { wk:5,   date:'2026-09-14', kind:'class',
      lines:[['In class', 'Exam 1 rebuttals + Long Bone &amp; Bone Microanatomy (Brain dump)'],
             ['Lab', 'Bone Tissue, Long Bone &amp; Microanatomy']] },
    /* Wed Sep 16 */ { wk:5,   date:'2026-09-16', kind:'class',
      lines:[['In class', 'Skull Walk-Through (Brain dump)'],
             ['Lab', 'Axial Skeleton: Skull']] },
    /* Mon Sep 21 */ { wk:6,   date:'2026-09-21', kind:'class',
      lines:[['In class', 'Spine Walk-Through (Brain dump)'],
             ['Lab', 'Upper Extremity']] },
    /* Wed Sep 23 */ { wk:6,   date:'2026-09-23', kind:'class',
      lines:[['In class', '<strong>TBL 3</strong> &middot; Bone Tissue, Cartilage &amp; Microanatomy'],
             ['Lab', 'Lower Extremity']] },
    /* Mon Sep 28 */ { wk:7,   date:'2026-09-28', kind:'class',
      lines:[['In class', 'Kahoot Review: Bone'],
             ['Lab', 'Lower Extremity']] },
    /* Wed Sep 30 */ { wk:7,   date:'2026-09-30', kind:'exam',  tag:'Exam day',
      text:['<strong>Exam 2</strong>, lecture exam + lab practical. Doors lock at start.'] },
    /* Mon Oct 5  */ { wk:8,   date:'2026-10-05', kind:'class',
      lines:[['In class', 'Exam 2 rebuttals + Heart Lecture &amp; Cardiac Conduction (Brain dump)'],
             ['Lab', 'Thoracic Anatomy (Heart); Blood Vessel Histology']] },
    /* Wed Oct 7  */ { wk:8,   date:'2026-10-07', kind:'class',
      lines:[['In class', 'Muscle Microanatomy &amp; Sarcomere (Brain dump)'],
             ['Lab', 'Muscle Microanatomy &amp; Sarcomere']] },
    /* Mon Oct 12 */ { wk:9,   date:'2026-10-12', kind:'class',
      lines:[['In class', '<strong>TBL 4</strong> &middot; Heart Anatomy'],
             ['Lab', 'Muscles of the Face, Chest &amp; Back']] },
    /* Wed Oct 14 */ { wk:9,   date:'2026-10-14', kind:'class',
      lines:[['In class', 'Blood Cell Interactive Lecture (Brain dump)'],
             ['Lab', 'Upper Arm &amp; Anterior Forearm (NAV)']] },
    /* Mon Oct 19 */ { wk:10,  date:'2026-10-19', kind:'class',
      lines:[['In class', '<strong>TBL 5</strong> &middot; Blood'],
             ['Lab', 'Posterior Forearm (NAV)']] },
    /* Wed Oct 21 */ { wk:10,  date:'2026-10-21', kind:'exam',  tag:'Exam day',
      text:['<strong>Exam 3</strong>, lecture exam + lab practical. Doors lock at start.'] },
    /* Mon Oct 26 */ { wk:11,  date:'2026-10-26', kind:'class',
      lines:[['In class', 'Respiratory Anatomy &amp; Histology Walk-Through (Brain dump)'],
             ['Lab', 'Respiratory Anatomy &amp; Histology']] },
    /* Wed Oct 28 */ { wk:11,  date:'2026-10-28', kind:'class',
      lines:[['In class', 'Endocrine Walk-Through (Brain dump)'],
             ['Lab', 'Anterior Lower-Extremity Muscles &amp; NAV']] },
    /* Mon Nov 2  */ { wk:12,  date:'2026-11-02', kind:'class',
      lines:[['In class', '<strong>TBL 6</strong> &middot; Respiratory'],
             ['Lab', 'Posterior Thigh Muscle &amp; NAV']] },
    /* Wed Nov 4  */ { wk:12,  date:'2026-11-04', kind:'class',
      lines:[['In class', 'GI Map Activity I and II (Brain dump)'],
             ['Lab', 'Anterior/Posterior Lower-Leg Muscles']] },
    /* Mon Nov 9  */ { wk:13,  date:'2026-11-09', kind:'class',
      lines:[['In class', '<strong>TBL 7</strong> &middot; GI System'],
             ['Lab', 'GI Organs (Primary and Accessory)']] },
    /* Wed Nov 11 */ { wk:13,  date:'2026-11-11', kind:'off',   tag:'No class',
      text:['Veterans Day, campus closed'] },
    /* Mon Nov 16 */ { wk:14,  date:'2026-11-16', kind:'exam',  tag:'Exam day',
      text:['<strong>Exam 4</strong>, lecture exam + lab practical. Doors lock at start.',
            '<span class="day-k">Heads up</span> this exam is on a Monday, not the usual Wednesday.'] },
    /* Wed Nov 18 */ { wk:14,  date:'2026-11-18', kind:'class',
      lines:[['In class', 'Exam 4 rebuttals + Guided Renal Map'],
             ['Lab', 'Renal Anatomy']] },
    /* Mon Nov 23 */ { wk:15,  date:'2026-11-23', kind:'class',
      lines:[['In class', 'Kahoot: Renal'],
             ['Lab', 'Male &amp; Female Reproductive Anatomy']] },
    /* Wed Nov 25 */ { wk:15,  date:'2026-11-25', kind:'off',   tag:'No class',
      text:['Travel Day, no class'] },
    /* Mon Nov 30 */ { wk:16,  date:'2026-11-30', kind:'class',
      lines:[['In class', '<strong>TBL 8</strong> &middot; Renal'],
             ['Lab', 'CNS: Brain, Meninges &amp; CSF']] },
    /* Wed Dec 2  */ { wk:16,  date:'2026-12-02', kind:'class',
      lines:[['In class', 'Clinical: Cranial Nerve Stations (Brain dump)'],
             ['Lab', 'Brain Stem (CNS) &amp; Cranial Nerves (PNS)']] },
    /* Mon Dec 7  */ { wk:17,  date:'2026-12-07', kind:'class',
      lines:[['In class', '<strong>TBL 9</strong> &middot; Cranial Nerves'],
             ['Lab', 'CNS: Spinal Cord &amp; Spinal Nerves']] },
    /* Wed Dec 9  */ { wk:17,  date:'2026-12-09', kind:'exam',  tag:'Exam day',
      text:['<strong>Exam 5</strong>, lecture exam + lab practical. Doors lock at start.'] }
  ],

  tr: [
    /* Tue Aug 18 */ { wk:1,   date:'2026-08-18', kind:'class',
      lines:[['In class', 'Intro to Anatomy &amp; team formation'],
             ['Lab', 'Intro to Anatomy Lab, Lab Safety &amp; Introduction to Histology']] },
    /* Thu Aug 20 */ { wk:1,   date:'2026-08-20', kind:'class',
      lines:[['In class', 'Guided Cell Activity (Brain dump)'],
             ['Lab', 'Epithelial Tissues']] },
    /* Tue Aug 25 */ { wk:2,   date:'2026-08-25', kind:'class',
      lines:[['In class', '<strong>TBL 1</strong> &middot; Cell Anatomy'],
             ['Lab', 'Connective Tissue I']] },
    /* Thu Aug 27 */ { wk:2,   date:'2026-08-27', kind:'class',
      lines:[['In class', 'Interactive Histology Lecture (Brain dump)'],
             ['Lab', 'Connective Tissue II']] },
    /* Tue Sep 1  */ { wk:3,   date:'2026-09-01', kind:'class',
      lines:[['In class', '<strong>TBL 2</strong> &middot; Histology'],
             ['Lab', 'Muscle &amp; Nervous Tissue']] },
    /* Thu Sep 3  */ { wk:3,   date:'2026-09-03', kind:'class',
      lines:[['In class', 'Exam 1 Review Game'],
             ['Lab', 'Integumentary']] },
    /* Tue Sep 8  */ { wk:4,   date:'2026-09-08', kind:'exam',  tag:'Exam day',
      text:['<strong>Exam 1</strong>, lecture exam + lab practical. Doors lock at start.'] },
    /* Thu Sep 10 */ { wk:4,   date:'2026-09-10', kind:'class',
      lines:[['In class', 'Exam 1 rebuttals + Long Bone &amp; Bone Microanatomy (Brain dump)'],
             ['Lab', 'Bone Tissue, Long Bone &amp; Microanatomy']] },
    /* Tue Sep 15 */ { wk:5,   date:'2026-09-15', kind:'class',
      lines:[['In class', 'Skull Walk-Through (Brain dump)'],
             ['Lab', 'Axial Skeleton: Skull']] },
    /* Thu Sep 17 */ { wk:5,   date:'2026-09-17', kind:'class',
      lines:[['In class', 'Spine Walk-Through (Brain dump)'],
             ['Lab', 'Axial Skeleton: Vertebrae &amp; Ribs']] },
    /* Tue Sep 22 */ { wk:6,   date:'2026-09-22', kind:'class',
      lines:[['In class', '<strong>TBL 3</strong> &middot; Bone Tissue, Cartilage &amp; Microanatomy'],
             ['Lab', 'Upper Extremity']] },
    /* Thu Sep 24 */ { wk:6,   date:'2026-09-24', kind:'class',
      lines:[['In class', 'Kahoot Review: Bone'],
             ['Lab', 'Lower Extremity']] },
    /* Tue Sep 29 */ { wk:7,   date:'2026-09-29', kind:'exam',  tag:'Exam day',
      text:['<strong>Exam 2</strong>, lecture exam + lab practical. Doors lock at start.'] },
    /* Thu Oct 1  */ { wk:7,   date:'2026-10-01', kind:'class',
      lines:[['In class', 'Exam 2 rebuttals + Heart Lecture &amp; Cardiac Conduction (Brain dump)'],
             ['Lab', 'Thoracic Anatomy (Heart); Blood Vessel Histology']] },
    /* Tue Oct 6  */ { wk:8,   date:'2026-10-06', kind:'class',
      lines:[['In class', 'Muscle Microanatomy &amp; Sarcomere (Brain dump)'],
             ['Lab', 'Muscle Microanatomy &amp; Sarcomere']] },
    /* Thu Oct 8  */ { wk:8,   date:'2026-10-08', kind:'class',
      lines:[['In class', '<strong>TBL 4</strong> &middot; Heart Anatomy'],
             ['Lab', 'Muscles of the Face, Chest &amp; Back']] },
    /* Tue Oct 13 */ { wk:9,   date:'2026-10-13', kind:'off',   tag:'No class',
      text:['Professional Development, no class'] },
    /* Thu Oct 15 */ { wk:9,   date:'2026-10-15', kind:'class',
      lines:[['In class', 'Blood Cell Interactive Lecture (Brain dump)'],
             ['Lab', 'Upper Arm &amp; Anterior Forearm (NAV)']] },
    /* Tue Oct 20 */ { wk:10,  date:'2026-10-20', kind:'class',
      lines:[['In class', '<strong>TBL 5</strong> &middot; Blood'],
             ['Lab', 'Posterior Forearm (NAV)']] },
    /* Thu Oct 22 */ { wk:10,  date:'2026-10-22', kind:'exam',  tag:'Exam day',
      text:['<strong>Exam 3</strong>, lecture exam + lab practical. Doors lock at start.'] },
    /* Tue Oct 27 */ { wk:11,  date:'2026-10-27', kind:'class',
      lines:[['In class', 'Respiratory Anatomy &amp; Histology Walk-Through (Brain dump)'],
             ['Lab', 'Respiratory Anatomy &amp; Histology']] },
    /* Thu Oct 29 */ { wk:11,  date:'2026-10-29', kind:'class',
      lines:[['In class', 'Endocrine Walk-Through (Brain dump)'],
             ['Lab', 'Anterior Thigh Muscles &amp; NAV']] },
    /* Tue Nov 3  */ { wk:12,  date:'2026-11-03', kind:'class',
      lines:[['In class', '<strong>TBL 6</strong> &middot; Respiratory'],
             ['Lab', 'Posterior Thigh Muscle &amp; NAV']] },
    /* Thu Nov 5  */ { wk:12,  date:'2026-11-05', kind:'class',
      lines:[['In class', 'GI Map Activity I (Brain dump)'],
             ['Lab', 'Anterior/Posterior Lower-Leg Muscles']] },
    /* Tue Nov 10 */ { wk:13,  date:'2026-11-10', kind:'class',
      lines:[['In class', 'GI Map Activity II (Brain dump)'],
             ['Lab', 'GI Organs (Primary)']] },
    /* Thu Nov 12 */ { wk:13,  date:'2026-11-12', kind:'class',
      lines:[['In class', '<strong>TBL 7</strong> &middot; GI System'],
             ['Lab', 'GI Organs (Accessory)']] },
    /* Tue Nov 17 */ { wk:14,  date:'2026-11-17', kind:'exam',  tag:'Exam day',
      text:['<strong>Exam 4</strong>, lecture exam + lab practical. Doors lock at start.'] },
    /* Thu Nov 19 */ { wk:14,  date:'2026-11-19', kind:'class',
      lines:[['In class', 'Renal Map Walk-Through (Brain dump)'],
             ['Lab', 'Renal Anatomy']] },
    /* Tue Nov 24 */ { wk:15,  date:'2026-11-24', kind:'class',
      lines:[['In class', 'Kahoot Review: Renal'],
             ['Lab', 'Male &amp; Female Reproductive Anatomy']] },
    /* Thu Nov 26 */ { wk:15,  date:'2026-11-26', kind:'off',   tag:'No class',
      text:['Thanksgiving, campus closed'] },
    /* Tue Dec 1  */ { wk:16,  date:'2026-12-01', kind:'class',
      lines:[['In class', '<strong>TBL 8</strong> &middot; Renal'],
             ['Lab', 'CNS: Brain, Meninges &amp; CSF']] },
    /* Thu Dec 3  */ { wk:16,  date:'2026-12-03', kind:'class',
      lines:[['In class', 'Clinical: Cranial Nerve Stations (Brain dump)'],
             ['Lab', 'Brain Stem (CNS) &amp; Cranial Nerves (PNS)']] },
    /* Tue Dec 8  */ { wk:17,  date:'2026-12-08', kind:'class',
      lines:[['In class', '<strong>TBL 9</strong> &middot; Cranial Nerves'],
             ['Lab', 'CNS: Spinal Cord &amp; Spinal Nerves']] },
    /* Thu Dec 10 */ { wk:17,  date:'2026-12-10', kind:'exam',  tag:'Exam day',
      text:['<strong>Exam 5</strong>, lecture exam + lab practical. Doors lock at start.'] }
  ]
};

/* ============================================================
   MODULES
   ------------------------------------------------------------
   Five modules. A week can belong to two of them, and which
   weeks those are is DERIVED, not guessed.

   THE RULE
   --------
   A week is shared with the next module when all three hold:

     1. it is the closing module's last week,
     2. that module's exam sits in it, and
     3. at least one class session comes AFTER the exam that week.

   Condition 3 is the one that does the work. An exam on the last
   teaching day of a week ends the module cleanly and shares
   nothing. An exam mid-week is followed by sessions that are
   already the next module's material, so the week genuinely
   belongs to both.

   RUN AGAINST THE SESSION DATA, THE RULE GIVES:

     Week 4  SHARED, Module 1 into Module 2
             Exam 1, then Thu Sep 10 is Exam 1 rebuttals plus
             Long Bone and Bone Microanatomy. That is Module 2.
     Week 7  SHARED, Module 2 into Module 3
             Exam 2, then Thu Oct 1 is Exam 2 rebuttals plus the
             Heart lecture. That is Module 3.
     Week 10 NOT shared. Exam 3 is the last session of the week
             on both tracks. Module 4 opens in week 11.
     Week 14 SHARED, Module 4 into Module 5
             Exam 4, then Wed Nov 18 (Thu Nov 19 on the Tue/Thu
             track) is Exam 4 rebuttals plus the Guided Renal Map,
             with Renal Anatomy in lab. That is Module 5.
     Week 17 NOT shared. Exam 5 is the last session of the term.

   WHY RENAL AND REPRODUCTIVE SIT IN MODULE 5
   ------------------------------------------
   Every renal and reproductive session in the term falls AFTER
   Exam 4: renal lab Nov 18/19, reproductive lab Nov 23/24, TBL 8
   Renal Nov 30/Dec 1. Nothing about them can be assessed on an
   exam that has already been sat. They are taught in Module 5 and
   assessed on Exam 5, which carries 64 competencies: Urinary 8,
   Reproductive 13, Nervous System 43. Exam 4 carries 34.

   Note that this makes Module 3 start at week 7, where the
   syllabus module table says week 8. The syllabus table is a
   summary and does not carry the mid-week changeover. The
   sessions do, and they are what students actually sit in.

   A shared week is drawn in BOTH module tabs: annotated as the
   exam in the module it closes, and as the opening week in the
   module it starts, carrying that module's information.

   exam is the exam number belonging to the module. Its dates are
   per section in sections[].exams above, because the three
   sections do not share exam dates.
   ============================================================ */

window.BIO004_MODULES = [
  { n:1, weeks:[1,2,3,4], exam:1,
    title:'Foundations, cells, tissues and skin',
    detail:'Cells, tissues (histology), and the integument. TBL 1 Cells, TBL 2 Histology.' },

  { n:2, weeks:[4,5,6,7], exam:2,
    title:'Skeletal system',
    detail:'Bone tissue, axial and appendicular skeleton, joints. TBL 3 Bone tissue, cartilage and microanatomy.' },

  { n:3, weeks:[7,8,9,10], exam:3,
    title:'Cardiovascular, muscle and blood',
    detail:'Heart, blood vessels, muscle microanatomy, blood. TBL 4 Heart, TBL 5 Blood.' },

  { n:4, weeks:[11,12,13,14], exam:4,
    title:'Respiratory, endocrine and GI',
    detail:'Respiratory, endocrine, lymphatic and immune, GI primary and accessory. TBL 6 Respiratory, TBL 7 GI.' },

  { n:5, weeks:[14,15,16,17], exam:5,
    title:'Renal, reproductive and nervous system',
    detail:'Urinary and renal, reproductive, brain, brainstem, cranial nerves, spinal cord, PNS and ANS. TBL 8 Renal, TBL 9 Cranial nerves.' }
];
