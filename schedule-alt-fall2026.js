/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   schedule-alt-fall2026.js

   THE WEEKLY PATTERN SCHEDULE. LIVE FROM OCT 7 (Mon/Wed) AND OCT 8 (Tue/Thu).

   On Oct 7, 2026 every class day from those dates on was copied from
   this file into the live schedule: bio004-day-card.js (calendar and
   Today), session-links.js (pre-work links), schedule-fall2026.js
   (syllabus, weekly schedule), class1/2/3.html (each course's own
   schedule), the three Mastery OS pages, week-8 to week-17 hubs and
   bio004-master-schedule-fall2026.html. If a date changes here, change
   it in those files too, or ask for the copy to be run again.

   Nothing on the site loads this file except the two preview
   pages built for it:
     bio004-course-calendar-alt.html   the term, week by week
     bio004-preread.html               the pre-read for one class day

   The live schedule (bio004-day-card.js, session-links.js,
   bio004-course-calendar.html) is untouched. When this version is
   approved, see CONNECTING IT at the bottom of this comment.

   ------------------------------------------------------------
   THE PATTERN, EVERY WEEK
   ------------------------------------------------------------
   Day 1 (Mon for Class 1, Tue for Classes 2 and 3)
     Lecture ............ LECTURE TBL on the week's lecture topic
                          (iRAT, tRAT, appeals), then the TBL
                          application activity for the rest of lecture
     End of class ....... LAB BRAIN DUMP on the lab done that day

   Day 2 (Wed for Class 1, Thu for Classes 2 and 3)
     First 1.5 hours of lab  LAB TBL on the current lab block (iRAT,
                          tRAT, application)
     End of class ....... LECTURE BRAIN DUMP on the week's lecture
                          topic

   LABS, EVERY MODULE
     Each lab block runs as a pair of class days: models first, with
     many (not all) of the structures tagged for students, then the cadaver the next
     class, where students tag the structures themselves. The last
     lab day or two before each exam is review: students tag and work
     on whatever they need.

   Students come to every class day having already started the
   material through the pre-read, including the first class day
   after an exam.

   Only holidays, professional development days and exam days come
   from the college. Everything else is the instructor's to set.

   ------------------------------------------------------------
   CHANGES FROM THE LIVE SCHEDULE (decisions to confirm)
   ------------------------------------------------------------
   1. Starts Mon Oct 12 (Class 1) and Thu Oct 15 (Classes 2 and 3).
      Everything before that stays exactly as it is now, including
      TBL 4 on Thu Oct 8 for Classes 2 and 3.
   2. Lecture TBLs 6 to 11 renumber. Two TBLs are new:
        TBL 7 Endocrine, TBL 10 Reproductive Anatomy.
      Live numbering for comparison: 6 Resp, 7 GI, 8 Renal, 9 CN.
   3. The renal Kahoot (Nov 23 / Nov 24) becomes Lecture TBL 9.
   4. Labs regroup into six blocks: trunk and upper limb muscles,
      respiratory, lower limb muscles, GI organs, urinary and
      reproductive organs, and the CNS with cranial nerves. Class 1
      gets one GI lab (models then cadaver the same day) because Wed
      Nov 11 is Veterans Day. Lab TBLs: Class 1 runs 1 to 5, Classes
      2 and 3 run 1 to 6 (they get a Lab TBL on the GI cadaver day).
   5. Review labs: one before Exam 3 (Class 1; Classes 2 and 3 fold it
      into the cadaver day) and one before Exam 5. No review lab
      before Exam 4.
   6. Classes 2 and 3: GI Map Activity II moves to Thu Nov 12.

   ------------------------------------------------------------
   CONNECTING IT (later, once approved)
   ------------------------------------------------------------
   The live calendar and Today page read their days from
   SESS_MW and SESS_TR inside bio004-day-card.js. BIO004_ALT.toDayCard()
   returns this schedule in exactly that row shape (d, lec, lm, tag,
   lab, pw), so the rows from START onward can replace the matching
   rows there. The day card will also need a new branch for a day
   that has a TBL AND a brain dump, which it does not draw today.
   ============================================================ */

window.BIO004_ALT = (function () {
  'use strict';

  var START = { mw: '2026-10-07', tr: '2026-10-08' };

  /* ---------- material, by topic ----------
     Every file name was checked against the repo. They are the
     same files session-links.js already points at, grouped by
     topic instead of by date. */
  var LECTURE = {
    heart: {
      name: 'The Heart and Cardiac Conduction',
      notes:  [['m3-heart-notes.html','The Heart'],['m3-conduction-notes.html','Cardiac Conduction']],
      sheets: [['m3-heart-worksheet.html','Heart pre-work sheet']],
      videos: [['heart-concept-videos.html','The Heart'],['cardiac-conduction-concept-videos.html','Cardiac Conduction']],
      slides: [['slides-heart-anatomy.html','Heart Anatomy slides']],
      guide:  [['heart-study-guide.html','Heart study guide'],['cardiac-electrophysiology-study-guide.html','Cardiac conduction study guide']]
    },
    muscle: {
      name: 'Muscle Microanatomy and the Sarcomere',
      notes:  [['m3-muscle-notes.html','Muscle Tissue'],['m3-fascicles-notes.html','Fascicle Arrangement']],
      sheets: [['m3-muscle-worksheet.html','Muscle pre-work sheet']],
      videos: [['muscle-tissue-concept-videos.html','Muscle Tissue and Microanatomy']],
      slides: [['slides-muscle-microanatomy.html','Muscle Microanatomy slides']],
      guide:  [['muscle-tissue-study-guide.html','Muscle tissue study guide']]
    },
    blood: {
      name: 'Blood',
      notes:  [['m3-blood-notes.html','Blood']],
      sheets: [['m3-vessels-blood-worksheet.html','Blood Vessels and Blood pre-work sheet']],
      videos: [['blood-concept-videos.html','Blood']],
      slides: [['slides-blood.html','Blood slides']],
      guide:  []
    },
    vessels: {
      name: 'Blood Vessel Anatomy',
      notes:  [['m3-vessels-notes.html','Blood Vessels'],['m3-limb-vessels-notes.html','Upper Limb Vessels and Nerves'],['m3-vessel-disorders-notes.html','Vessel Disorders and Fetal Circulation']],
      sheets: [['m3-vessels-blood-worksheet.html','Blood Vessels and Blood pre-work sheet'],['m3-limb-vessels-worksheet.html','Upper Limb Vessels and Nerves pre-work sheet']],
      videos: [['blood-vessels-concept-videos.html','Blood Vessels']],
      slides: [['slides-blood-vessels.html','Blood Vessels slides']],
      guide:  [['blood-vessels-study-guide.html','Blood vessels study guide']]
    },
    resp: {
      name: 'Respiratory Anatomy and Histology',
      notes:  [['m4-respiratory-notes.html','The Respiratory System']],
      sheets: [['m4-resp-worksheet.html','Respiratory and Lymphatic pre-work sheet']],
      /* Respiratory is Module 4 only. The old m3-respiratory pages now forward here. */
      videos: [['respiratory-concept-videos.html','The Respiratory System']],
      slides: [['slides-respiratory-anatomy.html','Respiratory Anatomy slides']],
      guide:  [['respiratory-study-guide.html','Respiratory study guide']]
    },
    endocrine: {
      name: 'The Endocrine System',
      notes:  [['m4-endocrine-notes.html','The Endocrine System']],
      sheets: [['m4-urinary-worksheet.html','Urinary and Endocrine pre-work sheet (endocrine parts)']],
      videos: [['endocrine-concept-videos.html','The Endocrine System']],
      slides: [['slides-endocrine.html','Endocrine slides']],
      guide:  []
    },
    gi: {
      name: 'The Digestive System',
      notes:  [['m4-alimentary-notes.html','The Alimentary Canal'],['m4-accessory-notes.html','Accessory Digestive Organs']],
      sheets: [['m4-digest-worksheet.html','Digestive System pre-work sheet']],
      videos: [['alimentary-concept-videos.html','The Alimentary Canal'],['accessory-digestive-concept-videos.html','Accessory Digestive Organs'],['gi-concept-videos.html','GI Overview']],
      slides: [['slides-gi-alimentary-canal.html','Alimentary Canal slides'],['slides-gi-accessory-structures.html','Accessory Structures slides']],
      guide:  [['gi-anatomy-study-guide.html','Digestive anatomy study guide']]
    },
    renal: {
      name: 'Renal Anatomy',
      notes:  [['m4-urinary-notes.html','The Urinary System']],
      sheets: [['m4-urinary-worksheet.html','Urinary and Endocrine pre-work sheet (urinary parts)']],
      videos: [['urinary-concept-videos.html','The Urinary System']],
      slides: [['slides-renal-anatomy.html','Renal Anatomy slides']],
      guide:  [['renal-anatomy-study-guide.html','Renal anatomy study guide']]
    },
    repro: {
      name: 'Reproductive Anatomy',
      notes:  [['m4-male-repro-notes.html','Male Reproductive System'],['m4-female-repro-notes.html','Female Reproductive System']],
      sheets: [['m4-repro-worksheet.html','Reproductive System pre-work sheet']],
      videos: [['reproductive-male-concept-videos.html','Male Reproductive System'],['reproductive-female-concept-videos.html','Female Reproductive System']],
      slides: [['slides-reproductive-systems.html','Reproductive Systems slides']],
      guide:  [['reproductive-anatomy-study-guide.html','Reproductive anatomy study guide']]
    },
    cranial: {
      name: 'The Brainstem and Cranial Nerves',
      notes:  [['m5-brainstem-notes.html','The Brainstem'],['m5-cranial-notes.html','Cranial Nerves']],
      sheets: [['m5-brain-worksheet.html','Brain and Brainstem pre-work sheet']],
      videos: [['cranial-nerves-concept-videos.html','Cranial Nerves']],
      slides: [['slides-cranial-nerves.html','Cranial Nerves slides']],
      guide:  [['cranial-nerves-study-guide.html','Cranial nerves study guide']]
    }
  };

  /* Lecture topics added for the alternate schedule. */
  LECTURE.lymph = {
    name: 'The Lymphatic System',
    notes:  [['m4-lymphatic-notes.html','The Lymphatic System']],
    sheets: [['BIO004-M4-Lymphatic-Note-Sheets.html','Lymphatic System note sheets']],
    videos: [['lymphatic-concept-videos.html','The Lymphatic System']],
    slides: [['slides-lymphatic-innate-immunity.html','Lymphatic System and Innate Immunity slides']],
    guide:  [['lymphatic-system-study-guide.html','Lymphatic system study guide']]
  };
  LECTURE.cnsBrain = {
    name: 'The Brain, Brainstem, Meninges and CSF',
    notes:  [['m5-brain-notes.html','The Brain'],['m5-brainstem-notes.html','The Brainstem'],['m5-meninges-notes.html','Meninges and CSF']],
    sheets: [['m5-brain-worksheet.html','Brain and Brainstem pre-work sheet'],['m5-cord-worksheet.html','Meninges, CSF and Spinal Cord pre-work sheet (meninges and CSF parts)']],
    videos: [['brain-concept-videos.html','The Brain'],['brainstem-concept-videos.html','The Brainstem'],['brain-meninges-concept-videos.html','Brain and Meninges']],
    slides: [['slides-cns.html','CNS slides']],
    guide:  [['brain-meninges-study-guide.html','Brain, CSF and meninges study guide']]
  };
  LECTURE.cnCord = {
    name: 'Cranial Nerves and the Spinal Cord',
    notes:  [['m5-cranial-notes.html','Cranial Nerves'],['m5-cord-notes.html','The Spinal Cord'],['m5-plexus-notes.html','Nerve Plexuses']],
    sheets: [['m5-cord-worksheet.html','Meninges, CSF and Spinal Cord pre-work sheet (spinal cord parts)'],['m5-pns-worksheet.html','Peripheral and Autonomic pre-work sheet (cranial and spinal nerve parts)']],
    videos: [['cranial-nerves-concept-videos.html','Cranial Nerves'],['spinal-cord-concept-videos.html','The Spinal Cord'],['spinal-pns-concept-videos.html','Spinal Nerves and PNS']],
    slides: [['slides-cranial-nerves.html','Cranial Nerves slides'],['slides-spinal-pns.html','Spinal Cord and PNS slides']],
    guide:  [['cranial-nerves-study-guide.html','Cranial nerves study guide'],['spinal-cord-study-guide.html','Spinal cord study guide']]
  };
  LECTURE.ans = {
    name: 'The Autonomic Nervous System',
    notes:  [['m5-ans-notes.html','The Autonomic Nervous System']],
    sheets: [['m5-pns-worksheet.html','Peripheral and Autonomic pre-work sheet (autonomic parts)']],
    videos: [['ans-concept-videos.html','The Autonomic Nervous System']],
    slides: [['slides-ans.html','ANS slides']],
    guide:  [['ans-study-guide.html','Autonomic nervous system study guide']]
  };

  var MUSCLE_CHART = ['https://www.medmasterscollaborative.com/muscle-charts-i-o-a-inn','Muscle charts: origin, insertion, action, innervation'];

  var LAB = {
    faceChestBack: {
      name: 'Muscles of the Face, Chest and Back',
      list:    [['module-3-structure-list.html#h-back-thorax-lab','Module 3 list: Muscles of the Back and Thorax']],
      sprints: [['head-neck-muscles-lab-sprint.html','Head and Neck Muscles'],['chest-anterior-brachium-muscles-lab-sprint.html','Chest and Anterior Brachium Muscles'],['posterior-thorax-shoulder-muscles-lab-sprint.html','Posterior Thorax, Shoulder and Posterior Brachium']],
      notes:   [['m3-back-thorax-notes.html','Back and Thorax Muscles']],
      muscle:  true
    },
    upperArm: {
      name: 'Muscles and NAV of the Upper Arm; Anterior Forearm',
      list:    [['module-3-structure-list.html#h-upper-limb-lab','Module 3 list: Muscles of the Upper Extremity'],['module-3-structure-list.html#h-thorax-limb-arteries','Module 3 list: Arteries and Veins of the Upper Limb'],['module-3-structure-list.html#h-upper-limb-nerves','Module 3 list: Nerves of the Upper Limb']],
      sprints: [['chest-anterior-brachium-muscles-lab-sprint.html','Chest and Anterior Brachium Muscles'],['antebrachium-muscles-lab-sprint.html','Antebrachium (Forearm) Muscles']],
      notes:   [['m3-arm-muscles-notes.html','Arm Muscles']],
      muscle:  true
    },
    postForearm: {
      name: 'Muscles and NAV of the Posterior Forearm',
      list:    [['module-3-structure-list.html#h-upper-limb-lab','Module 3 list: Muscles of the Upper Extremity'],['module-3-structure-list.html#h-thorax-limb-arteries','Module 3 list: Arteries and Veins of the Upper Limb'],['module-3-structure-list.html#h-upper-limb-nerves','Module 3 list: Nerves of the Upper Limb']],
      sprints: [['antebrachium-muscles-lab-sprint.html','Antebrachium (Forearm) Muscles']],
      notes:   [['m3-arm-muscles-notes.html','Arm Muscles'],['m3-limb-vessels-notes.html','Upper Limb Vessels and Nerves']],
      sheets:  [['m3-limb-vessels-worksheet.html','Upper Limb Vessels and Nerves pre-work sheet']],
      muscle:  true
    },
    resp: {
      name: 'Thoracic Anatomy (Respiratory) and Respiratory Histology',
      list:    [['module-4-structure-list.html#h-respiratory-lab','Module 4 list: The Respiratory System']],
      sprints: [['respiratory-lab-sprint.html','Respiratory System']],
      notes:   [['m4-respiratory-notes.html','The Respiratory System']]
    },
    antThigh: {
      name: 'Anterior Thigh Muscles and NAV',
      list:    [['BIO004-Structure-List.html#h-unit-4','Lab structure list: Limb Muscles, Respiratory and Digestive']],
      sprints: [['thigh-muscles-lab-sprint.html','Thigh Muscles']],
      notes:   [],
      muscle:  true
    },
    postThigh: {
      name: 'Posterior Thigh Muscles and NAV',
      list:    [['BIO004-Structure-List.html#h-unit-4','Lab structure list: Limb Muscles, Respiratory and Digestive']],
      sprints: [['thigh-muscles-lab-sprint.html','Thigh Muscles']],
      notes:   [],
      muscle:  true
    },
    leg: {
      name: 'Anterior and Posterior Lower Leg Muscles',
      list:    [['BIO004-Structure-List.html#h-unit-4','Lab structure list: Limb Muscles, Respiratory and Digestive']],
      sprints: [['leg-muscles-lab-sprint.html','Leg Muscles']],
      notes:   [],
      muscle:  true
    },
    giAll: {
      name: 'GI Organs, Primary and Accessory',
      list:    [['module-4-structure-list.html#h-alimentary-lab','Module 4 list: The Alimentary Canal'],['module-4-structure-list.html#h-accessory-lab','Module 4 list: The Accessory Digestive Organs']],
      sprints: [['alimentary-canal-lab-sprint.html','Alimentary Canal'],['accessory-digestive-organs-lab-sprint.html','Accessory Digestive Organs'],['abdominal-wall-lab-sprint.html','Abdominal Wall and Peritoneal Cavity']],
      notes:   [['m4-alimentary-notes.html','The Alimentary Canal'],['m4-accessory-notes.html','Accessory Digestive Organs']]
    },
    giPrimary: {
      name: 'GI Organs (Primary)',
      list:    [['module-4-structure-list.html#h-alimentary-lab','Module 4 list: The Alimentary Canal']],
      sprints: [['alimentary-canal-lab-sprint.html','Alimentary Canal'],['abdominal-wall-lab-sprint.html','Abdominal Wall and Peritoneal Cavity']],
      notes:   [['m4-alimentary-notes.html','The Alimentary Canal']]
    },
    giAccessory: {
      name: 'GI Organs (Accessory)',
      list:    [['module-4-structure-list.html#h-accessory-lab','Module 4 list: The Accessory Digestive Organs']],
      sprints: [['accessory-digestive-organs-lab-sprint.html','Accessory Digestive Organs']],
      notes:   [['m4-accessory-notes.html','Accessory Digestive Organs']]
    },
    renal: {
      name: 'Renal Anatomy',
      list:    [['module-4-structure-list.html#h-urinary-lab','Module 4 list: The Urinary System']],
      sprints: [['urinary-system-lab-sprint.html','Urinary System']],
      notes:   [['m4-urinary-notes.html','The Urinary System']]
    },
    repro: {
      name: 'Male and Female Reproductive Anatomy',
      list:    [['module-4-structure-list.html#h-male-repro-lab','Module 4 list: The Male Reproductive System'],['module-4-structure-list.html#h-female-repro-lab','Module 4 list: The Female Reproductive System']],
      sprints: [['reproductive-male-lab-sprint.html','Male Reproductive System'],['reproductive-female-lab-sprint.html','Female Reproductive System']],
      notes:   [['m4-male-repro-notes.html','Male Reproductive System'],['m4-female-repro-notes.html','Female Reproductive System']]
    },
    brain: {
      name: 'CNS Brain, Meninges and CSF',
      list:    [['module-5-structure-list.html#h-brain-lab','Module 5 list: The Brain'],['module-5-structure-list.html#h-meninges-csf-lab','Module 5 list: Meninges, Ventricles and CSF']],
      sprints: [['cns-meninges-csf-lab-sprint.html','Meninges, Ventricles and CSF']],
      notes:   [['m5-brain-notes.html','The Brain'],['m5-meninges-notes.html','Meninges and CSF']]
    },
    brainstemCN: {
      name: 'Brainstem (CNS) and Cranial Nerves (PNS)',
      list:    [['module-5-structure-list.html#h-brainstem-cerebellum-lab','Module 5 list: The Brainstem and Cerebellum'],['module-5-structure-list.html#h-cranial-nerves-lab','Module 5 list: The Cranial Nerves']],
      sprints: [['cns-brainstem-lab-sprint.html','The Brainstem'],['cranial-nerves-lab-sprint.html','Cranial Nerves']],
      notes:   [['m5-brainstem-notes.html','The Brainstem'],['m5-cranial-notes.html','Cranial Nerves']]
    },
    cord: {
      name: 'CNS Spinal Cord and Spinal Nerves',
      list:    [['module-5-structure-list.html#h-spinal-cord-lab','Module 5 list: The Spinal Cord'],['module-5-structure-list.html#h-peripheral-nerves-lab','Module 5 list: Peripheral Nerves and Plexuses']],
      sprints: [['cns-spinal-cord-lab-sprint.html','Spinal Cord'],['nerve-plexuses-lab-sprint.html','Spinal Nerves and Plexuses']],
      notes:   [['m5-cord-notes.html','The Spinal Cord'],['m5-plexus-notes.html','Nerve Plexuses']]
    }
  };

  /* ---------- lab blocks ----------
     Each lab topic runs as a pair: models first (many structures tagged
     for students), then the cadaver the next class (students tag the
     structures themselves). The last lab before each exam is review:
     students tag and work on whatever they need. */
  function merge(name, keys, extra){
    var o = { name:name, list:[], sprints:[], notes:[], sheets:[], muscle:false }, seen = {};
    keys.forEach(function(k){
      var L = LAB[k];
      ['list','sprints','notes','sheets'].forEach(function(f){
        (L[f]||[]).forEach(function(pr){ var key=f+'|'+pr[0]; if(!seen[key]){ seen[key]=1; o[f].push(pr); } });
      });
      if(L.muscle) o.muscle = true;
    });
    if(extra) for(var x in extra) o[x] = extra[x];
    return o;
  }
  LAB.muscleMicro = { name:'Muscle Microanatomy and the Sarcomere',
    list:[['module-3-structure-list.html#h-muscle-histo','Module 3 list: Muscle Tissue and Microanatomy']],
    sprints:[['muscle-structure-lab-sprint.html','Muscle Microanatomy']], notes:[['m3-muscle-notes.html','Muscle Tissue']] };
  LAB.heartLab = { name:'The Heart',
    list:[['module-3-structure-list.html#h-heart-lab','Module 3 list: The Heart']],
    sprints:[['heart-lab-sprint.html','The Heart'],['cardiac-conduction-lab-sprint.html','Cardiac Conduction']],
    notes:[['m3-heart-notes.html','The Heart'],['m3-conduction-notes.html','Cardiac Conduction']] };
  LAB.antForearm = { name:'Muscles and NAV of the Anterior Forearm',
    list:[['module-3-structure-list.html#h-upper-limb-lab','Module 3 list: Muscles of the Upper Extremity'],['module-3-structure-list.html#h-thorax-limb-arteries','Module 3 list: Arteries and Veins of the Upper Limb'],['module-3-structure-list.html#h-upper-limb-nerves','Module 3 list: Nerves of the Upper Limb']],
    sprints:[['antebrachium-muscles-lab-sprint.html','Antebrachium (Forearm) Muscles']],
    notes:[['m3-arm-muscles-notes.html#the-forearm','Forearm muscles']], muscle:true };
  LAB.upperBody = merge('Muscles, Nerves and Vessels of the Trunk and Upper Limb', ['faceChestBack','upperArm','postForearm']);
  LAB.microTrunkArm = merge('Muscle Microanatomy, and Muscles of the Upper Trunk and Arm', ['muscleMicro','faceChestBack','upperArm']);
  LAB.lowerLimb = merge('Muscles, Nerves and Vessels of the Lower Limb', ['antThigh','postThigh','leg']);
  LAB.uroRepro  = merge('Urinary and Reproductive Organs', ['renal','repro']);
  LAB.cns       = merge('Brain, Brainstem, Spinal Cord and Cranial Nerves', ['brain','brainstemCN','cord']);
  LAB.bloodCells = { name:'Blood Cells (the smear)',
    list:[['module-3-structure-list.html#h-blood-lab','Module 3 list: Blood']],
    notes:[['m3-blood-notes.html','Blood']] };
  LAB.heartBlood = merge('The Heart and Blood Cells', ['heartLab','bloodCells']);
  LAB.ulTrunkHeart    = merge('Muscles, Nerves and Vessels of the Trunk and Upper Limb, and the Heart', ['faceChestBack','upperArm','heartLab']);
  LAB.ulTrunkHeartAnt = merge('Trunk, Upper Limb, Heart and Anterior Forearm', ['faceChestBack','upperArm','heartLab','antForearm']);
  LAB.review3   = merge('Module 3 lab review (everything)', ['muscleMicro','faceChestBack','upperArm','heartLab','antForearm','postForearm'], { list:[['module-3-structure-list.html','Module 3 lab structure list (all of it)']],
                    sprints:[['muscle-structure-lab-sprint.html','Muscle Microanatomy'],['heart-lab-sprint.html','The Heart'],['blood-vessels-lab-sprint.html','Blood Vessels'],['cardiac-conduction-lab-sprint.html','Cardiac Conduction']].concat(LAB.upperBody.sprints), review:true });
  LAB.review5   = merge('Module 5 lab review', ['uroRepro','cns'], { list:[['module-4-structure-list.html#h-urinary-lab','Module 4 list: urinary and reproductive sections'],['module-5-structure-list.html','Module 5 lab structure list (all of it)']], review:true });

  /* short names for the chart */
  var SHORT = {
    lymph:'Lymphatic system', cnsBrain:'Brain, brainstem, meninges and CSF', cnCord:'Cranial nerves and spinal cord', ans:'Autonomic nervous system', heart:'Heart and conduction', muscle:'Muscle microanatomy', blood:'Blood', vessels:'Blood vessels', resp:'Respiratory',
    endocrine:'Endocrine', gi:'GI', renal:'Renal', repro:'Reproductive', cranial:'Brainstem and cranial nerves',
    muscleMicro:'Muscle microanatomy', microTrunkArm:'Muscle micro + upper trunk and arm muscles', heartLab:'Heart', bloodCells:'Blood cells', heartBlood:'Heart and blood cells', antForearm:'Anterior forearm', postForearm:'Posterior forearm', upperBody:'Trunk and upper limb muscles', ulTrunkHeart:'Upper limb, trunk and heart', ulTrunkHeartAnt:'Upper limb, trunk, heart and anterior forearm', lowerLimb:'Lower limb muscles, nerves and vessels', giAll:'GI organs',
    uroRepro:'Urinary and reproductive', cns:'Brain, spinal cord and cranial nerves',
    review3:'Module 3 review, everything', review5:'Module 5 review'
  };

  var MODE = {
    model:   'Models. Many structures are tagged for you. For the ones that are not, you find them, identify them and make your own study materials.',
    cadaver: 'Cadaver. You tag the structures.',
    lab:     '',
    both:    'Models first, with many of the structures tagged for you, then the cadaver, where you tag them yourself.',
    review:  'Review. You tag the structures, then work on what you need.',
    split:   ''
  };
  /* the application activity, when it has a name */
  function APP(day, txt){ day.app = txt; return day; }
  /* the Lab TBL covers a set of blocks wider than today's lab */
  function LABTBL(day, keys){ if(day.tbl) day.tbl.topics = keys.slice(); return day; }
  /* one lab, two stations: some blocks on the cadaver, others on the models */
  function SPLIT(day, cad, mod){
    var nm = function(ks){ return ks.map(function(k){ return SHORT[k] || LAB[k].name; }).join(' + '); };
    day.labTopic = cad.concat(mod);
    day.lab = { key:cad[0], mode:'split', cadaver:cad, model:mod,
      text:'Cadaver, you tag: ' + nm(cad) + '. Models, many tagged: ' + nm(mod) + '.' };
    if(day.kind==='d1') day.bd.topics = day.labTopic.slice();
    if(day.tbl && day.tbl.kind==='lab') day.tbl.topics = cad.slice();
    return day;
  }

  /* ---------- the days ----------
     kind     'd1' lecture TBL + lab brain dump
              'd2' lab TBL (when there is one) + lecture brain dump
              'exam', 'holiday'
     lab      { key, mode } today's lab block and how it runs
     tbl      { kind, n, topics } or null on a review Thursday
     bd       { kind, topics }    end-of-class brain dump        */
  function D1(d, n, lecTopics, lec, labKey, mode, note){
    return { d:d, kind:'d1', lec:lec, lecTopic:lecTopics, labTopic:[labKey], lab:{ key:labKey, mode:mode },
      tbl:{ kind:'lecture', n:n, topics:lecTopics },
      bd:{ kind:'lab', topics:[labKey] }, note:note||'' };
  }
  function D2(d, n, labKey, mode, lec, lecTopics, bdTopics, note){
    return { d:d, kind:'d2', lec:lec, lecTopic:lecTopics, labTopic:[labKey], lab:{ key:labKey, mode:mode },
      tbl: n ? { kind:'lab', n:n, topics:[labKey] } : null,
      bd:{ kind:'lecture', topics:bdTopics }, note:note||'' };
  }
  function EX(d, n){ return { d:d, kind:'exam', exam:n, lec:'Exam ' + n, labTopic:[], lecTopic:[] }; }
  function OFF(d, name){ return { d:d, kind:'holiday', lec:name + ', No Class', labTopic:[], lecTopic:[] }; }

  var AFTER3 = 'First class after Exam 3. The TBL runs on the pre-read, so the respiratory reading is due before class.';
  var AFTER4 = 'First class after Exam 4. The Lab TBL runs on the pre-read, before you have seen these organs in lab.';

  var MW = [
    D1('2026-10-07', 4, ['muscle'], 'Lecture TBL 4: Muscle Microanatomy and the Sarcomere', 'microTrunkArm', 'lab',
       'A Wednesday, but it runs like a Monday this one time: lecture TBL, then lab, then the lab brain dump.'),
    D1('2026-10-12', 5, ['heart'], 'Lecture TBL 5: Heart Anatomy and Cardiac Conduction', 'heartBlood', 'lab'),
    D2('2026-10-14', 1, 'antForearm', 'lab', 'Blood Vessel Anatomy Lecture', ['vessels'], ['heart','muscle']),
    APP(D1('2026-10-19', 6, ['blood'], 'Lecture TBL 6: Blood', 'postForearm', 'lab'), 'Application: Blood Cell Interactive'),
    EX('2026-10-21', 3),
    D1('2026-10-26', 7, ['resp'], 'Lecture TBL 7: Respiratory Anatomy and Histology', 'resp', 'model', AFTER3),
    D2('2026-10-28', 2, 'resp', 'cadaver', 'Lymphatic System Lecture', ['lymph'], ['resp']),
    APP(D1('2026-11-02', 8, ['endocrine'], 'Lecture TBL 8: Endocrine System', 'lowerLimb', 'model'), 'Application: Endocrine Mind Map'),
    D2('2026-11-04', 3, 'lowerLimb', 'cadaver', 'Guided DITKI GI Map Activity I and II', ['gi'], ['lymph','endocrine']),
    D1('2026-11-09', 9, ['gi'], 'Lecture TBL 9: GI System', 'giAll', 'both',
       'GI gets one lab, since Wednesday is Veterans Day: models first, then the cadaver, in the same lab. This is the last lab before Exam 4.'),
    OFF('2026-11-11', "Veteran's Day"),
    EX('2026-11-16', 4),
    D2('2026-11-18', 4, 'uroRepro', 'model', 'Exam 4 Rebuttals; Guided Renal Map', ['renal'], ['renal'], AFTER4),
    D1('2026-11-23', 10, ['repro'], 'Lecture TBL 10: Reproductive Anatomy', 'uroRepro', 'cadaver',
       'No Wednesday class this week (Travel Day).'),
    OFF('2026-11-25', 'Travel Day'),
    D1('2026-11-30', 11, ['cnsBrain'], 'Lecture TBL 11: Brain, Brainstem, Meninges and CSF', 'cns', 'model'),
    D2('2026-12-02', 5, 'cns', 'cadaver', 'Cranial Nerves and Spinal Cord, with Cranial Nerve Exam Stations', ['cnCord'], ['cnsBrain']),
    D1('2026-12-07', 12, ['ans'], 'Lecture TBL 12: Autonomic Nervous System', 'review5', 'review',
       'Last lab before Exam 5. Bring your structure list marked with what you still cannot find.'),
    EX('2026-12-09', 5)
  ];

  var TR = [
    SPLIT(D1('2026-10-08', 4, ['heart','muscle'], 'Lecture TBL 4: Heart, Cardiac Conduction and Muscle Microanatomy', 'ulTrunkHeart', 'split',
       'A Thursday, but it runs like a Tuesday this one time: lecture TBL, then lab, then the lab brain dump.'), ['ulTrunkHeart'], ['antForearm']),
    LABTBL(SPLIT(D2('2026-10-15', 1, 'ulTrunkHeartAnt', 'split', 'Blood Vessel Anatomy Lecture', ['vessels'], ['heart','muscle'],
       'Tuesday Oct 13 is Professional Development.'), ['ulTrunkHeartAnt'], ['postForearm']), ['muscleMicro','ulTrunkHeartAnt']),
    APP(D1('2026-10-20', 5, ['blood'], 'Lecture TBL 5: Blood', 'review3', 'review',
       'Last lab before Exam 3. Everything from Module 3 lab is set out. Bring your structure list marked with what you still cannot find.'), 'Application: Blood Cell Interactive'),
    EX('2026-10-22', 3),
    D1('2026-10-27', 6, ['resp'], 'Lecture TBL 6: Respiratory Anatomy and Histology', 'resp', 'model', AFTER3),
    D2('2026-10-29', 2, 'resp', 'cadaver', 'Lymphatic System Lecture', ['lymph'], ['resp']),
    D1('2026-11-03', 7, ['endocrine'], 'Lecture TBL 7: Endocrine System', 'lowerLimb', 'model'),
    D2('2026-11-05', 3, 'lowerLimb', 'cadaver', 'Endocrine Mind Map Activity', ['endocrine'], ['lymph']),
    APP(D1('2026-11-10', 8, ['gi'], 'Lecture TBL 8: GI System', 'giAll', 'model'), 'Application: Guided DITKI GI Map Activity I'),
    D2('2026-11-12', 4, 'giAll', 'cadaver', 'Guided DITKI GI Map Activity II', ['gi'], ['endocrine'],
       'Last lab before Exam 4.'),
    EX('2026-11-17', 4),
    D2('2026-11-19', 5, 'uroRepro', 'model', 'Guided Renal Map', ['renal'], ['renal'], AFTER4),
    D1('2026-11-24', 9, ['repro'], 'Lecture TBL 9: Reproductive Anatomy', 'uroRepro', 'cadaver',
       'No Thursday class this week (Thanksgiving).'),
    OFF('2026-11-26', 'Thanksgiving'),
    D1('2026-12-01', 10, ['cnsBrain'], 'Lecture TBL 10: Brain, Brainstem, Meninges and CSF', 'cns', 'model'),
    D2('2026-12-03', 6, 'cns', 'cadaver', 'Cranial Nerves and Spinal Cord, with Cranial Nerve Exam Stations', ['cnCord'], ['cnsBrain']),
    D1('2026-12-08', 11, ['ans'], 'Lecture TBL 11: Autonomic Nervous System', 'review5', 'review',
       'Last lab before Exam 5. Bring your structure list marked with what you still cannot find.'),
    EX('2026-12-10', 5)
  ];

  var SECTIONS = {
    mw: { label:'Mon / Wed, CRN 80650', d1:'Monday', d2:'Wednesday',
          lecT:'12:30 to 1:50 pm, VC 118', labT:'2:00 to 4:50 pm, VC 1137', sess:MW },
    tr: { label:'Tue / Thu', d1:'Tuesday', d2:'Thursday',
          lecT:null, labT:null, sess:TR }
  };
  var TIMES = {
    'tr-am':  { label:'Tue / Thu morning, CRN 80654', lecT:'9:30 to 10:45 am, VC 212', labT:'11:00 am to 1:50 pm, VC 1137' },
    'tr-eve': { label:'Tue / Thu evening, CRN 80655', lecT:'5:30 to 6:45 pm, VC 118',  labT:'7:00 to 9:50 pm, VC 1137' },
    'mw':     { label:'Mon / Wed, CRN 80650',         lecT:'12:30 to 1:50 pm, VC 118', labT:'2:00 to 4:50 pm, VC 1137' }
  };
  var ALIAS = { 'mw':'mw','class1':'mw','tr-am':'tr','tr-eve':'tr','class2':'tr','class3':'tr' };

  function labName(k){ return LAB[k] ? LAB[k].name : ''; }
  function lecName(k){ return LECTURE[k] ? LECTURE[k].name : ''; }
  function names(keys, fn){ return (keys||[]).map(fn).join(' and '); }

  /* the live day-card row shape, for connecting later */
  function toDayCard(sec){
    return (SECTIONS[ALIAS[sec]] || {sess:[]}).sess.map(function(s){
      if(s.kind === 'holiday') return { d:s.d, lec:s.lec, lm:'holiday', tag:'No class', lab:null, pw:null };
      if(s.kind === 'exam') return { d:s.d, lec:s.lec, lm:'exam', tag:'Exam ' + s.exam, lab:'Exam ' + s.exam,
        pw:{ t:'Study for Exam ' + s.exam, l:'' } };
      var tag = s.kind === 'd1' ? 'TBL ' + s.tbl.n : (s.tbl ? 'Lab TBL ' + s.tbl.n : 'Lab review');
      return { d:s.d, lec:s.lec, lm:'tbl', tag:tag, lab:names(s.labTopic, labName),
        pw:{ t:'Pre-read for ' + tag,
             l:'bio004-preread.html?day=' + s.d } };
    });
  }

  return {
    START: START, MODE: MODE, short: function(k){ return SHORT[k] || (LECTURE[k]||LAB[k]||{}).name || k; }, labName: labName, lecName: lecName, toDayCard: toDayCard, LECTURE: LECTURE, LAB: LAB, MUSCLE_CHART: MUSCLE_CHART, TIMES: TIMES,
    track: function(sec){ return ALIAS[sec] || null; },
    sessions: function(sec){ var t = SECTIONS[ALIAS[sec]]; return t ? t.sess.slice() : []; },
    days: function(sec){ var t = SECTIONS[ALIAS[sec]]; return t ? { d1:t.d1, d2:t.d2 } : null; },
    day: function(sec, iso){
      var s = this.sessions(sec);
      for(var i=0;i<s.length;i++){ if(s[i].d === iso) return s[i]; }
      return null;
    }
  };
})();
