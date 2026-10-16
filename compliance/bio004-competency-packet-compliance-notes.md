# Compliance notes: Online Competency Packet

1. **Project and files.** BIO 004 Human Anatomy, Solano Community College, Fall 2026. Files: `bio004-competency-packet.html`, `bio004-competency-packet-data.js`. Date: October 16, 2026.

2. **Standard.** WCAG 2.2, target AA minimum with AAA where achievable.

| Criterion | Level reached | How |
| --- | --- | --- |
| 1.3.1 Info and relationships | A | Landmarks (main, nav, search region), one h1, h2 per module, h3 per topic, real ordered lists, table with scoped headers |
| 1.4.3 / 1.4.6 Contrast | AAA | Every text pair is 7:1 or higher (table below) |
| 1.4.11 Non-text contrast | AA | Search box border 4.6:1, focus ring maroon on white 9.6:1 |
| 1.4.10 Reflow | AA | No horizontal scroll at 390px; the load table scrolls inside its own region |
| 2.1.1 Keyboard | A | Every control reachable and operable by keyboard |
| 2.4.1 Bypass blocks | A | "Skip to the competency list" link |
| 2.4.7 Focus visible | AA | 3px maroon outline on links, buttons and inputs |
| 3.3.2 Labels | A | Search has a visible label; radios and checkboxes are wrapped in labels; each competency checkbox has an accessible name with its number and title |
| 4.1.3 Status messages | AA | Result count is a live region ("Showing 41 of 193") |
| 2.3.3 Animation | AAA | Smooth scroll and hover lift turn off under prefers-reduced-motion |

3. **Color contrast audit.**

| Pair | Text | Background | Ratio | Result |
| --- | --- | --- | --- | --- |
| Body text, navy on off-white page | #08101F | #FAFAF9 | 18.2:1 | AAA pass |
| Body text, navy on white card | #08101F | #FFFFFF | 19.0:1 | AAA pass |
| Eyebrows, numbers and topic labels, maroon on off-white | #7A2A22 | #FAFAF9 | 9.2:1 | AAA pass |
| Competency numbers, maroon on white | #7A2A22 | #FFFFFF | 9.6:1 | AAA pass |
| Secondary text, slate on white | #3D4A57 | #FFFFFF | 9.1:1 | AAA pass |
| Secondary text, slate on off-white | #3D4A57 | #FAFAF9 | 8.7:1 | AAA pass |
| Ticked item text, slate on ticked fill | #3D4A57 | #EDF1F3 | 8.0:1 | AAA pass |
| Module header text, white on navy | #FFFFFF | #08101F | 19.0:1 | AAA pass |
| Module header subtitle, gold on navy | #DCB45C | #08101F | 9.7:1 | AAA pass |
| Exam dates, pale gray on navy | #E8EDF2 | #08101F | 16.1:1 | AAA pass |
| LECTURE tag, navy on mist | #08101F | #E7EBF0 | 15.9:1 | AAA pass |
| LAB tag, navy on straw | #08101F | #F3E3B5 | 14.9:1 | AAA pass |
| Table header, white on navy | #FFFFFF | #08101F | 19.0:1 | AAA pass |
| Primary button, white on navy | #FFFFFF | #08101F | 19.0:1 | AAA pass |
| Links, maroon on white | #7A2A22 | #FFFFFF | 9.6:1 | AAA pass |

4. **Keyboard navigation verified.** Skip link, the shared course-tools controls, the PDF and Study Protocol buttons, module jump links, search, Show filters, then each competency checkbox in number order. Tested in headless Chromium.

5. **Screen reader testing.** Structure checked in the accessibility tree (headings, landmarks, labels, live region) in headless Chromium. Not yet tested with VoiceOver or NVDA; do a quick VoiceOver pass on one module before announcing the page.

6. **Known limitations and remediation.** Ticks are saved in the student's browser only, so they do not follow a student to another device; the page says so in its footer. Students who ticked items on the old page start fresh, because the old page used different item ids. Mastery OS still reads the older competency file (192 items, August numbering) until it is moved to the new data file.

7. **Reviewer.** Built and checked by Claude for Dr. Sharilyn Rennie. Final review: Dr. Sharilyn Rennie.
