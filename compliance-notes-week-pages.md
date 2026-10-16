# Accessibility compliance notes: week pages and pre-read

1. **Project:** BIO 004 Human Anatomy, Solano Community College, Fall 2026.
   Files: bio004-week.html (new), week-9-hub.html to week-17-hub.html (forwarders), bio004-preread.html, bio004-course-calendar-alt.html, schedule-alt-fall2026.js (data). Date: October 16, 2026.
2. **Standard:** WCAG 2.2 AA met throughout. AAA contrast (7:1) met for all body text.
   - 1.3.1 Info and relationships: one h1, an h2 per class day, an h3 for Lecture and Lab, ordered lists for steps.
   - 2.4.1 Bypass blocks: skip link to the class days.
   - 2.4.7 / 2.4.11 Focus visible: 3px outline, gold on navy and navy on white.
   - 4.1.2 Name, role, value: section buttons use aria-pressed. The Study With Me icon has an aria-label.
   - 4.1.3 Status messages: changing the class is announced in a polite live region.
3. **Contrast (approximate, on rendered colors):**
   - Gold #E3C27D on navy #08101F: about 11:1. Pass AAA.
   - Gray-blue #C8D2DA on navy #08101F: about 13:1. Pass AAA.
   - Navy #0B1530 on white: about 17:1. Pass AAA.
   - Terra #7A2E24 on white: about 9:1. Pass AAA.
   - Soft gray #454B5C on the navy and terra washes: about 8:1. Pass AAA.
   - Navy #08101F on Study With Me gold #B8924A: about 7.5:1. Pass AAA.
4. **Keyboard:** skip link, then Study With Me, section buttons, week links, and inside each day every link in reading order, ending with "Open the full pre-read". No traps. Checked with Tab and Shift+Tab in Chromium.
5. **Screen reader:** landmark and heading structure checked in the Chromium accessibility tree. A full pass with VoiceOver or NVDA is still to do.
6. **Known limitations:**
   - Forwarders break out of a Canvas or Kajabi frame, same as before. The week page opens full window.
   - prefers-reduced-motion is honored; the page has no animation.
7. **Reviewer:** Claude, for Dr. Sharilyn Rennie. Instructor review pending.
