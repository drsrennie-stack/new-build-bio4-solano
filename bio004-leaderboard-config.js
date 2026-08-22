/* ============================================================
   CARD LEADERBOARD CONFIG. One file, edited once by Dr. Rennie.
   bio004-card-leaderboard.html and the Sunday recap popup in
   Mastery OS both read this. Until it is filled in, both show a
   friendly "opens soon" state and nothing breaks.

   FOUR CATEGORIES, all volume, none accuracy (on purpose, so it
   stays authentic): Cards seen, Loop reps, Overall progress,
   Activity minutes (method minutes completed, not wall clock).

   SETUP, about five minutes:
   1. Create a Google Form with SIX short-answer questions IN THIS
      EXACT ORDER (order matters, the published CSV columns follow it):
        1. Code name
        2. Class            (make this a dropdown: Mon/Wed,
                             Tue/Thu morning, Tue/Thu evening)
        3. Cards seen
        4. Loop reps
        5. Overall progress
        6. Activity minutes
   2. Open the form preview, right click, View Page Source, search
      for "entry." and match each entry number to its question.
      Paste them below.
   3. Responses tab > Sheets icon > creates the linked sheet. In the
      sheet: File > Share > Publish to web > pick the responses tab
      and CSV > Publish. Paste that link as CSV_URL.
   4. FORM_URL is the form's ordinary share link ending in /viewform.

   Students opt in by choosing to post. Only a self-invented code
   name and numbers ever leave their device. No names, no IDs, no
   emails. Only the top five per category are ever displayed.
   ============================================================ */
window.BIO004_LEADERBOARD = {
  FORM_URL: '',        /* https://docs.google.com/forms/d/e/XXXX/viewform */
  ENTRY_NICK: '',      /* entry.XXXXXXXX for Code name */
  ENTRY_SECTION: '',   /* entry.XXXXXXXX for Class */
  ENTRY_CARDS: '',     /* entry.XXXXXXXX for Cards seen */
  ENTRY_LOOPS: '',     /* entry.XXXXXXXX for Loop reps */
  ENTRY_PROGRESS: '',  /* entry.XXXXXXXX for Overall progress */
  ENTRY_ACTMIN: '',    /* entry.XXXXXXXX for Activity minutes */
  CSV_URL: '',         /* published-to-web CSV of the responses sheet */

  /* ---- Study With Me host board. SECOND form, student-led
     sessions only. Attendees rate the session; the HOST earns the
     points: every rating's 1-10 score adds to their weekly total,
     so a great session with six people beats a great session with
     two. The board shows the last 7 days and resets by moving on.
     Question order for this form, exactly:
       1. Host code name          (short answer)
       2. Overall, 1 to 10        (linear scale 1-10:
                                   1 = waste of time, not organized,
                                   10 = made an impact on my grade)
       3. What was it like        (checkboxes: Effective, Fun,
                                   Got a lot done, Unique format,
                                   Good variety, Helped my grade,
                                   Not organized, Not for me)
       4. Anything else           (paragraph, optional)
     Same publish-to-web CSV steps as above for its sheet. ---- */
  RATE_FORM_URL: '',   /* the rating form's /viewform link */
  RATE_CSV_URL: ''     /* published CSV of the rating form's sheet */
};
