# Accessibility compliance notes: Module 4 and 5 packets

1. **Project:** BIO 004 Human Anatomy, Solano Community College, Fall 2026.
   - Files: BIO004-M4-Note-Sheet-Packet.html and .pdf, BIO004-M5-Note-Sheet-Packet.html and .pdf, BIO004-Module4-Packet.html and .pdf, BIO004-Module5-Packet.html and .pdf, module-4-structure-list.html, module-5-structure-list.html.
   - Date: October 17, 2026.
2. **Standard:** WCAG 2.2 AA met. These pages reuse the templates of the Module 3 note sheet packet and the October course notes packets, which were already reviewed. Nothing in the template changed except the content and one small label style (the competency line under each chapter heading).
   - 1.3.1 Info and relationships: one h1, an h2 per part or chapter, an h3 per topic or sheet, an h4 per competency card. Each sheet and card is labelled by its heading.
   - 1.3.2 Meaningful sequence: the reading order matches the visual order. Prompt letters are visual only (aria-hidden), and each prompt starts with a hidden "Prompt A." or "Option A." so screen readers announce it.
   - 2.4.1 Bypass blocks: skip link to the packet.
   - 2.4.7 Focus visible: 3px terra outline.
   - 1.4.4 Resize text: layouts reflow to one column under 900px.
3. **Contrast:**
   - Navy #08101F on white: 19.0:1. Pass AAA.
   - Terra #7A2A22 on white: 9.6:1. Pass AAA.
   - Terra dark #5E201A on white: 12.4:1. Pass AAA.
   - Gray #414B5C on white: 8.8:1. Pass AAA.
   - The new competency line is navy on white: 19.0:1. Pass AAA.
   - Print: single ink, black on white.
4. **Keyboard:** skip link, header links, print button, PDF and notes links, jump links, then the content. No traps. Checked with Tab and Shift+Tab in Chromium.
5. **Screen reader:** checked in Chromium: the heading outline has no skipped levels on all six pages, every id is unique, and the hidden prompt labels are in place. A full pass with VoiceOver or NVDA is still to do.
6. **Known limitations:**
   - The PDFs are print copies made from the HTML. They are not tagged PDFs. The HTML is the accessible version.
   - The empty drawing boxes have no text alternative. They are blank work space by design.
7. **Reviewer:** Claude, for Dr. Sharilyn Rennie. The drawing prompts had a separate accuracy review by a reviewer who did not write them. Instructor review is pending.
