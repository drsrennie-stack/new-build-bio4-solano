# Accessibility compliance notes: Module 4 and 5 packets

1. **Project:** BIO 004 Human Anatomy, Solano Community College, Fall 2026.
   - Files:
     - Course notes: BIO004-Module4-Packet.html and .pdf, BIO004-Module5-Packet.html and .pdf.
     - Lab packets: BIO004-M4-Lab-Packet.html and .pdf, BIO004-M5-Lab-Packet.html and .pdf.
     - Note sheets: BIO004-M4-Note-Sheet-Packet.html and .pdf, BIO004-M5-Note-Sheet-Packet.html and .pdf (the drawing sheets only).
     - Note sheet keys (online only): BIO004-M4-Note-Sheet-Key.html, BIO004-M5-Note-Sheet-Key.html (both prompts and the drawing checklist for every competency).
     - Structure lists: module-4-structure-list.html, module-5-structure-list.html.
   - Date: October 17, 2026 (updated the same day for the rebuilt course notes, the new lab packets and the note sheet checklists).
2. **Standard:** WCAG 2.2 AA met. These pages reuse the templates of the Module 3 lab packet, the Module 3 note sheet packet and the October course notes packets, which were already reviewed. New parts: competency sections in the course notes (numbered tag, heading, goal box), numbered flow charts, an A to Z index, chart tables and question cards in the lab packets, and the online note sheet keys, reached by a QR code on every printed sheet.
   - 1.3.1 Info and relationships:
     - Course notes: one h1, an h2 per chapter, an h3 per competency, h4 for sub-topics. Each competency section is labelled by its heading. Flow charts are ordered lists, so the step order is announced.
     - Lab packets: an h2 per part and per structure chapter, an h3 per chart or question group. Chart tables have column headers (scope="col") and row headers (scope="row") and are labelled by their h3.
     - Note sheet keys: an h2 per topic and an h3 per competency; each checklist is a real list. Every printed sheet has a QR code (with an accessible name) that opens that competency's key, and the key is also linked from the note sheet page and from each topic's notes page, so students who cannot scan can still reach it.
   - 1.3.2 Meaningful sequence: reading order matches the visual order. Prompt letters are visual only (aria-hidden), and each prompt starts with a hidden "Prompt A." or "Option A." label.
   - 2.4.1 Bypass blocks: skip link to the packet on every page.
   - 2.4.5 Multiple ways: the course notes have a contents list (chapters and every competency, with print page numbers) and an A to Z index that links each term to its competency.
   - 2.4.7 Focus visible: 3px terra outline.
   - 1.4.4 Resize text and 1.4.10 Reflow: layouts reflow to one column under 900px. Checked at 375px wide: no horizontal page scroll on any of the six packets. Wide chart tables scroll inside their own card on small screens.
3. **Contrast:**
   - Navy #08101F on white: 19.0:1. Pass AAA.
   - White on navy (competency tags, flow chart step numbers, table headers): 19.0:1. Pass AAA.
   - Terra #7A2A22 on white: 9.6:1. Pass AAA.
   - Terra #7A2A22 on the off-white box fill (memory tips, clinical boxes): above 9:1. Pass AAA.
   - Terra dark #5E201A on white: 12.4:1. Pass AAA.
   - Gray #414B5C on white: 8.8:1. Pass AAA.
   - Print: single ink, black on white.
4. **Keyboard:** skip link, header links, print button, PDF and companion packet links, jump links, then the content. Contents, index and question links are normal links. No traps. Checked with Tab and Shift+Tab in Chromium.
5. **Screen reader:** checked in Chromium on all six packets: no skipped heading levels, every id unique (sub-topic headings now get their own ids so the in-page search cannot create duplicates), no script errors. A full pass with VoiceOver or NVDA is still to do.
6. **Known limitations:**
   - The PDFs are print copies made from the HTML. They are not tagged PDFs. The HTML is the accessible version.
   - The empty drawing boxes and write-in lines have no text alternative. They are blank work space by design.
   - Print page numbers in the contents and index are filled in when the packet is built. If the HTML is edited by hand, rebuild the PDF so the numbers stay right.
7. **Reviewer:** Claude, for Dr. Sharilyn Rennie. The course notes, lab charts and questions, drawing prompts and checklists each had a separate accuracy review by a reviewer who did not write them. Instructor review is pending.
