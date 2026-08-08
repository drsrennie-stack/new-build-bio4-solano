/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   week-links.js

   All 17 week pages load this file. It was missing from the
   repo, so every week page was firing a 404 on load and the
   "Concept lecture" and "Guided worksheet" buttons fell through
   to their disabled "Coming soon" state.

   This is a STUB. The structure is right, the URLs are not
   filled in. Nothing here is invented: every week is left empty
   so the pages behave exactly as they did before, minus the 404.

   TO FILL IN
   ----------
   Per week, add either or both keys:

     lecture    URL of the concept video for that week
                (these live in the new-build-bio4-solano repo)
     worksheet  URL of the guided worksheet for that week
                (these live in the A-P-lecture-core repo)

   Example:

     3: { lecture:   'https://drsrennie-stack.github.io/new-build-bio4-solano/w3-histology.html',
          worksheet: 'https://drsrennie-stack.github.io/A-P-lecture-core/w3-worksheet.html' },

   A week with no entry, or an entry missing one of the two keys,
   renders that button as "Coming soon" and disables it. That is
   the intended fallback, so partial fill-in is safe.
   ============================================================ */

window.BIO004_WEEK_LINKS = {
   1: {},   /* Intro to Anatomy, cells, histology            */
   2: {},   /* TBL 1 Cell Anatomy, connective tissue         */
   3: {},   /* TBL 2 Histology, integumentary                */
   4: {},   /* Exam 1                                        */
   5: {},   /* Bone tissue, skull                            */
   6: {},   /* Spine, upper and lower extremity, TBL 3       */
   7: {},   /* Exam 2                                        */
   8: {},   /* Heart, muscle microanatomy                    */
   9: {},   /* TBL 4 Heart, blood                            */
  10: {},   /* TBL 5 Blood, Exam 3                           */
  11: {},   /* Respiratory, endocrine                        */
  12: {},   /* TBL 6 Respiratory, GI map                     */
  13: {},   /* TBL 7 GI System                               */
  14: {},   /* Exam 4, renal                                 */
  15: {},   /* Renal, reproductive                           */
  16: {},   /* TBL 8 Renal, CNS                              */
  17: {}    /* TBL 9 Cranial nerves, Exam 5                  */
};
