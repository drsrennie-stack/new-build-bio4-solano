# Compliance notes: Alternate weekly schedule and pre-read

1. Project: BIO 004 Human Anatomy, Fall 2026. Files: bio004-course-calendar-alt.html, bio004-preread.html, schedule-alt-fall2026.js. Date: October 6, 2026.

2. WCAG 2.2 AA met throughout. Semantic landmarks (main, section, article, footer), one h1 per page, no skipped heading levels, skip link, visible 3px focus ring, every select and checkbox has a label, section buttons use aria-pressed, the content region is aria-live, collapsible outlines use native details/summary, prefers-reduced-motion respected.

3. Contrast (site tokens):
   - Navy #08101F on white: 19.0:1, pass AAA
   - Navy on off-white #FAFAF9: 18.2:1, pass AAA
   - Maroon #6B1616 on white: 12.0:1, pass AAA
   - Gray #4F5D66 on white: 6.8:1, pass AA (AAA for large text)
   - Gold text #6F5316 on white: 7.2:1, pass AAA
   - Gold #DCB45C on navy: 9.7:1, pass AAA
   - White on navy: 19.0:1, pass AAA

4. Keyboard: tab order runs skip link, section picker, day picker, then each material link and its checkbox in reading order. Checkboxes toggle with Space, outlines open with Enter. No traps.

5. Screen reader: verified structure in headless Chromium (heading order, label association, no unlabeled inputs). Not yet checked by ear in VoiceOver or NVDA.

6. Known limitations: the notes outline reads the notes pages live, so it appears only when the page is served from the site (not when opened from a local file); links still work without it. Google Fonts fall back to system sans-serif if blocked.

7. Reviewer: Dr. Sharilyn Rennie (pending).
