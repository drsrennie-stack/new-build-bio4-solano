# Compliance notes: BIO 004 Canvas week links

## 1. Project, files, date
- Project: BIO 004 Human Anatomy, Fall 2026 (new-build-bio4-solano)
- File: bio004-canvas-week-links.html (new, instructor tool, not linked from student pages)
- Date: September 20, 2026

## 2. WCAG version and level
WCAG 2.2, AA met. Instructor-facing, single reader, so the bar here is the same floor as the student pages.
- 1.3.1 Info and relationships: one main landmark, h1 to h3 in order, a real table with a caption and column headers. AA
- 1.4.3 / 1.4.6 Contrast: see audit. AA everywhere, AAA on all text.
- 1.4.10 Reflow: at phone width the Tue / Thu column drops and nothing scrolls sideways. AA
- 2.1.1 Keyboard: every copy control is a real button. AA
- 2.4.1 Bypass blocks: skip link to the week links. A
- 2.4.7 Focus visible: 3px maroon outline with offset. AA
- 2.5.8 Target size: buttons are 40px tall. AA
- 4.1.3 Status messages: a role="status" region says "Copied" after each copy, and says so in words rather than by color alone. AA

## 3. Color contrast audit
| Text / background | Ratio | Result |
|---|---|---|
| Ink #08101F on white | 19.9:1 | AAA pass |
| Ink on page #FAFAF9 | 19.2:1 | AAA pass |
| Maroon #6B1616 on white (eyebrows) | 11.99:1 | AAA pass |
| Muted #4A5763 on white (dates, small print) | 7.41:1 | AAA pass |
| Gold #DCB45C on ink (cover word) | 9.71:1 | AAA pass |
| White on ink (exam chip, copied state) | 19.9:1 | AAA pass |
| Ink on #ECEFF4 (code blocks) | 16.5:1 | AAA pass |

## 4. Keyboard navigation flow
Skip link, the home page copy button, then each week's copy button in table order, then the two extra links. Enter and Space copy. Verified in headless Chromium.

## 5. Screen reader testing
Checked through the Chromium accessibility tree: table caption and headers, the status region, and the hidden label on the last column header. Hands-on VoiceOver and NVDA passes still to be done.

## 6. Known limitations and remediation
- Copy uses the clipboard API with an older fallback. If a browser blocks both, the page says so and the link is still on screen to copy by hand.
- The week dates come from the schedule file. If that file fails to load, the page says so and lists the 17 links on their own.
- Manual screen reader pass pending (see 5).

## 7. Reviewer
Dr. Sharilyn Rennie (build checked by Claude)
