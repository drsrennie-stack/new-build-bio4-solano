/* ============================================================
   ADD HISTOLOGY HELP TO THE DOCK
   bio004-dock.js

   Two edits. Both are copy and paste, nothing else changes.
   ============================================================ */


/* ---- EDIT 1 of 2 ----------------------------------------
   Add the QR entry. Paste this line inside the QR object that
   starts at "var QR = {", alongside mastery, recall, loops and
   atlas. Order does not matter. Keep the trailing comma.
   --------------------------------------------------------- */

    histology: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 35 35\" class=\"segno\"><path class=\"qrline\" stroke=\"#0b1530\" d=\"M1 1.5h7m2 0h1m2 0h1m1 0h1m1 0h4m3 0h1m2 0h7m-33 1h1m5 0h1m1 0h2m2 0h1m1 0h3m4 0h1m2 0h1m1 0h1m5 0h1m-33 1h1m1 0h3m1 0h1m2 0h1m10 0h2m4 0h1m1 0h3m1 0h1m-33 1h1m1 0h3m1 0h1m1 0h2m1 0h7m4 0h1m3 0h1m1 0h3m1 0h1m-33 1h1m1 0h3m1 0h1m4 0h1m1 0h1m2 0h1m1 0h6m2 0h1m1 0h3m1 0h1m-33 1h1m5 0h1m1 0h1m1 0h1m2 0h6m2 0h2m3 0h1m5 0h1m-33 1h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7m-19 1h2m2 0h1m1 0h3m1 0h1m-25 1h5m1 0h9m2 0h1m1 0h1m2 0h4m1 0h1m1 0h1m1 0h1m-32 1h4m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h6m1 0h1m2 0h1m3 0h3m-32 1h1m1 0h4m1 0h2m2 0h1m1 0h2m2 0h1m1 0h1m5 0h4m1 0h1m-32 1h3m1 0h1m2 0h1m1 0h2m4 0h1m5 0h1m1 0h1m1 0h1m2 0h1m1 0h1m-30 1h1m2 0h4m1 0h1m3 0h2m2 0h1m1 0h1m4 0h2m1 0h3m-29 1h2m2 0h1m2 0h1m1 0h2m1 0h1m2 0h5m2 0h1m2 0h1m4 0h2m-33 1h2m4 0h2m2 0h1m1 0h6m2 0h1m1 0h1m1 0h2m1 0h2m2 0h1m-32 1h2m1 0h3m1 0h3m2 0h1m1 0h1m1 0h1m3 0h2m1 0h1m1 0h1m2 0h1m1 0h1m-30 1h1m1 0h1m2 0h2m3 0h4m2 0h2m1 0h1m1 0h3m2 0h2m2 0h1m-32 1h1m2 0h3m5 0h1m7 0h2m2 0h2m1 0h1m2 0h1m1 0h2m-29 1h4m1 0h1m2 0h5m4 0h1m3 0h2m2 0h1m1 0h1m-31 1h2m5 0h1m2 0h1m2 0h1m1 0h1m1 0h2m1 0h5m4 0h1m-30 1h1m1 0h2m1 0h2m1 0h6m2 0h2m3 0h4m1 0h2m2 0h1m-32 1h6m5 0h4m1 0h5m2 0h1m1 0h2m2 0h1m1 0h2m-33 1h1m5 0h3m3 0h1m2 0h1m4 0h1m1 0h1m4 0h3m1 0h1m-32 1h1m3 0h1m2 0h1m2 0h1m1 0h1m1 0h1m1 0h1m3 0h8m1 0h2m-31 1h1m3 0h1m1 0h1m1 0h1m1 0h1m2 0h1m3 0h1m1 0h1m4 0h5m3 0h1m-25 1h1m1 0h2m1 0h1m2 0h1m2 0h1m4 0h1m3 0h3m1 0h1m-33 1h7m1 0h1m3 0h1m1 0h5m1 0h1m1 0h3m1 0h1m1 0h1m1 0h2m-32 1h1m5 0h1m2 0h1m4 0h2m3 0h6m3 0h5m-33 1h1m1 0h3m1 0h1m1 0h2m1 0h5m1 0h1m2 0h1m1 0h1m1 0h6m2 0h1m-33 1h1m1 0h3m1 0h1m1 0h4m1 0h1m2 0h5m2 0h3m2 0h1m1 0h1m-31 1h1m1 0h3m1 0h1m1 0h1m6 0h1m1 0h1m2 0h1m1 0h1m1 0h3m4 0h1m-32 1h1m5 0h1m1 0h3m4 0h2m3 0h2m3 0h1m2 0h3m-31 1h7m1 0h1m1 0h1m1 0h3m2 0h1m4 0h3m2 0h1m1 0h1m1 0h1\"/></svg>",


/* ---- EDIT 2 of 2 ----------------------------------------
   Add the tile. Paste this block into the Study tools group,
   directly after the "Loops" t.push so the two visual practice
   tools sit next to each other.
   --------------------------------------------------------- */

    t.push({ g: 'Study tools', name: 'Histology help', sub: 'Every free slide tool, sorted by the kind of help you need',
             url: BASE + 'histology-help.html', icon: 'flask', tone: 'terra', qr: 'histology',
             kw: 'histology tissue tissues slide slides microscope epithelium epithelia connective cartilage bone blood leukocytes secondlook atlas quiz unknowns video' });


/* ---- NOTES ----------------------------------------------
   The QR above encodes:
   https://drsrennie-stack.github.io/new-build-bio4-solano/histology-help.html
   It was generated with segno at the same settings as the
   existing codes (error level L, border 1, stroke #0b1530,
   class segno, line class qrline), so it renders identically.

   If you rename the file, the QR has to be regenerated. The
   tile still works without it: the dock guards on
   "t.qr && QR[t.qr]", so a missing QR just drops the QR button
   and leaves the tile intact.
   --------------------------------------------------------- */
