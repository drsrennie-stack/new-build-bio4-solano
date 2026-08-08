/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   resources.js

   Per-competency study resources for Mastery OS. Both Mastery OS
   pages load this file and it was missing from the repo, so every
   visit fired a 404.

   This is a STUB. The map is empty. Nothing is invented.

   HOW MASTERY OS READS IT
   -----------------------
       function resFor(comp){
         var R = window.BIO004_RESOURCES;
         return (R && comp && R[comp.id]) ? R[comp.id] : null;
       }

   A competency with no entry falls back to the app's generic
   button, exactly as it does today with the file missing. An empty
   map therefore changes nothing except the 404, and partial
   fill-in is safe: add the competencies you have links for and
   leave the rest out.

   SHAPE
   -----
   Keyed by competency id, the same ids used in
   competenciesfall2026.js, for example 'w1-directional-terms'.

     window.BIO004_RESOURCES = {
       'w1-directional-terms': {
         loom:      'https://...',   // button: Watch concept video
         labSprint: 'https://...',   // button: Lab sprint
         loops:     'https://...',   // button: Lab ID loops
         recall:    'https://...',   // button: Spaced recall
         notes:     'https://...'    // button: Notes
       }
     };

   Each key present draws its own button; keys you omit draw
   nothing. The 'loom' key name is internal and predates the
   rename, the button it draws reads "Watch concept video".

   Where the URLs live: concept videos in the new-build-bio4-solano
   repo, guided lecture pages in A-P-lecture-core.
   ============================================================ */

window.BIO004_RESOURCES = {};
