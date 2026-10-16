# Compliance notes: course entry, study help and study steps

1. Project: BIO 004 course entry and study navigation, Fall 2026.
   Files: bio004-launchpad-overlay.js (the "Welcome to Anatomy" curtain on the calendar and Canvas entry), bio004-launchpad.html (the same screen as a page), bio004-study-process.html ("How to study for this class", web and one-page print, now the one study page), bio004-study-help.html (forwards old links to the matching step). Date: October 16, 2026.

2. WCAG 2.2, target AA, AAA where the palette allows.
   - Semantic structure: one h1 or dialog title per screen, h2/h3 for panels, lists for cards, steps and tools.
   - The entry curtain is a dialog (role="dialog", aria-modal, aria-labelledby). On its own page it is plain content.
   - Cards that open a panel are buttons. Cards that go somewhere are links. Panels move focus to their heading, Back and Escape return focus to the card that opened them, and Escape on the first screen closes the curtain (calendar and Canvas entry only).
   - Dynamic regions use aria-live="polite". "What am I responsible for learning?" carries aria-expanded.
   - Links that open a new tab say so to screen readers. Same-site links use target="_top".
   - Decorative icons are aria-hidden. Color is never the only signal: every card and step has a written title.
   - prefers-reduced-motion turns off the hover lift. Skip links on both pages.
   - Iframe height sender on every page.

3. Contrast (measured):
   - Navy #0B1530 on white 18.0:1 (AAA). Body gray #454B5C on white 8.7:1 (AAA).
   - Terra #7A2E24 on white 9.4:1 and on the page #FAFAF9 9.0:1 (AAA). White on terra 9.4:1 (AAA).
   - Gold step text #6F5316 on white 7.2:1 (AAA); on the faint gold wash 6.5:1 (AA, small bold labels only).
   - Study steps page background #08101F: white headline 19.0:1, gray lede #C8D2DA 12.4:1, gold eyebrow and arrows #E3C27D 11.1:1 (all AAA). The printed copy stays on white paper.
   - Navy on gold #B8924A tiles and number circles 6.2:1 (AAA for the large numerals, icons are decorative).
   - Curtain: white on #08101F 19.0:1, #C8D2DA on #08101F 12.4:1, gold #E3C27D on #08101F 11.1:1 (all AAA). Navy on the gold "new" chip 10.5:1.
   - Washes: gray on navy wash 7.9:1, terra on terra wash 8.3:1, gray on terra wash 7.7:1 (AAA).

4. Keyboard flow:
   - Curtain: focus starts on the title. Then "What do I do this week?", "How do I study for this class?" (gold outline), "What is on the exam?", "Do you want to review the syllabus and course information?", "Who can I ask for help?", the announcement line, the footer links. Escape steps back, then closes.
   - Old study help links forward to the matching step (#paper and #understand to Learn, #memory and #lab to Retrieve, #exam to Check, #forget to Revisit, #expect and #resp to Prepare). Each step has an id, so the entry page links straight to step 1.
   - Study steps: skip link, then each step's tools in reading order.

5. Screen reader: checked through the Chromium accessibility tree and keyboard runs in Playwright. Not yet checked with VoiceOver or NVDA by a person.

6. Known limitations and plan:
   - The gold step label on the gold wash is AA, not AAA. Darken #6F5316 to about #5E450F if AAA is needed there.
   - "This week" uses the device date (week 1 starts Aug 17, 2026). Outside the term it falls back to the class schedule.
   - The current module comes from the exam dates in schedule-fall2026.js. If an exam date moves, update EXAMS in the overlay, the study help page and the study steps page.
   - Tutor Josh Roy is listed without contact details until they are provided.
   - The Practice TBL in step 5 is a placeholder marked Coming soon. Replace it when the page exists (see the comment in the file).
   - The floating Course tools and Ask Hootie buttons still sit above the curtain on phones, as before.
   - Plan: one VoiceOver pass on iPhone before Exam 4.

7. Reviewer: Claude, at Dr. Rennie's request.
