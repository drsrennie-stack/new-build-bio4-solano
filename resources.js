/* ============================================================
   BIO 004 Resource Map, the connective layer for Mastery OS.

   Maps each competency (competencies.js) to your REAL, live
   resources on GitHub Pages, and starts each concept video at
   the exact chapter for that competency, using the chapter
   timestamps set on your Loom videos (data-s seconds in the
   *-concept-videos.html pages).

   Loom start-time links use the ?t=SECONDS parameter on the
   share URL, so "Watch concept video" opens at the topic, not 0:00.

   Base sites:
     course = https://drsrennie-stack.github.io/new-build-bio4-solano/
     loops  = https://drsrennie-stack.github.io/loops/

   Slots per competency: notes, loom, labSprint, workbook,
   studyGuide, slides, recall, loops. Blank means it does not
   exist yet and the OS falls back to a generic active move.

   STATUS: Week 3 mapped to live URLs with per-competency chapter
   start times. Later weeks light up as their videos gain chapters.
   ============================================================ */
(function(){
var C = 'https://drsrennie-stack.github.io/new-build-bio4-solano/';
var recall = C + 'bio004-spaced-recall.html';
/* Lab-ID loops app (by topic: heart, respiratory, tissues, skin, bone, skull, appendicular, muscles-*). No URL deep-link yet, so this opens the topic picker. */
var loopsHub = 'https://drsrennie-stack.github.io/loops/';

/* Loom video ids */
var HEART  = '7da62b7ed696474b8de9e3f18603d706';
var RESP   = '69f53b5f9da4407e8c6fb844eef9b878';
var VESSEL = '3ec215800381455b91ad481c223a001b';

/* Build a Loom share URL that starts at t seconds (t optional). */
function L(id, t){ return 'https://www.loom.com/share/' + id + (t != null ? '?t=' + t : ''); }

/* Per-topic page resources (shared by the competencies in that topic) */
var heartPages  = { notes:C+'heart.html',         labSprint:C+'heart-lab-sprint.html',         workbook:C+'heart-workbook.html',         studyGuide:C+'heart-study-guide.html',        slides:C+'slides-heart-anatomy.html',       recall:recall, loops:loopsHub };
var respPages   = { notes:C+'respiratory.html',   labSprint:C+'respiratory-lab-sprint.html',   workbook:C+'respiratory-workbook.html',   studyGuide:C+'respiratory-study-guide.html',  slides:C+'slides-respiratory-anatomy.html', recall:recall, loops:loopsHub };
var vesselPages = { notes:C+'blood-vessels.html', labSprint:C+'blood-vessels-lab-sprint.html', workbook:C+'blood-vessels-workbook.html', studyGuide:C+'blood-vessels-study-guide.html',slides:C+'slides-blood-vessels.html',       recall:recall, loops:loopsHub };

function mk(pages, loomUrl){ var o={}; for(var k in pages) o[k]=pages[k]; o.loom=loomUrl; return o; }

window.BIO004_RESOURCES = {
  /* Heart video chapters: surfaces/wall 1:58, chambers 12:33, septum+fetal 16:01, valves 26:56, conduction 32:38, coronary 41:20 */
  'cv-surfaces':            mk(heartPages,  L(HEART, 118)),
  'cv-chambers':            mk(heartPages,  L(HEART, 753)),
  'cv-valves':              mk(heartPages,  L(HEART, 1616)),
  'cv-conduction-anat':     mk(heartPages,  L(HEART, 1958)),
  'cv-coronary':            mk(heartPages,  L(HEART, 2480)),
  'bvn-fetal-remnants':     mk(heartPages,  L(HEART, 961)),
  'bvn-great-vessels':      mk(heartPages,  L(HEART)),

  /* Respiratory chapters: lungs/diaphragm 4:10, alveoli 30:02, larynx 15:53, trachea 22:46, lung sections 34:04, breathing muscles 39:59 */
  'resp-larynx':            mk(respPages,   L(RESP, 953)),
  'resp-tree':              mk(respPages,   L(RESP, 1366)),
  'resp-lungs-pleura':      mk(respPages,   L(RESP, 2044)),
  'resp-thoracic-diaphragm':mk(respPages,   L(RESP, 2399)),
  'resp-histo':             mk(respPages,   L(RESP, 1802)),

  /* Blood-vessel chapters: three layers 3:57 */
  'bvn-vessel-tunics':      mk(vesselPages, L(VESSEL, 237))
};
})();
