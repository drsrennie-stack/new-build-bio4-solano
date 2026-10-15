# Accessibility Compliance Notes: Study Help ("What do you need help with?")

## 1. Project, files, date

- Project: BIO 004 Human Anatomy, problem-based study dashboard
- Files covered: bio004-study-help.html (new); bio004-launchpad.html and bio004-launchpad-overlay.js (Study door now opens the dashboard, Study panel and the Study Protocol tile removed); bio004-dock.js (Study Protocol entry replaced by "What do you need help with?"); welcome.html (one new link)
- Date: October 14, 2026

## 2. WCAG version and target level

WCAG 2.2 AA minimum, AAA where achievable.

| Criterion | Level | Notes |
|---|---|---|
| 1.3.1 Info and relationships | AA | Cards are a list of buttons; the opened card is a labeled region with a heading; resources are lists of links; the four steps are an ordered list |
| 1.4.3 / 1.4.6 Contrast | AAA for all text except the small gray tags (AA) | See section 3 |
| 1.4.10 Reflow | AA | 3 columns, then 2, then 1; no horizontal scroll at 390 px |
| 2.1.1 Keyboard | AA | Native buttons and links; Escape closes an open card |
| 2.4.1 Bypass blocks | AA | Skip link to the study options |
| 2.4.3 Focus order | AA | Opening a card moves focus to its heading; going back returns focus to the card that was open |
| 2.4.7 Focus visible | AA | 3 px gold outline, 3 px offset |
| 2.5.8 Target size | AA | Cards, back button and text links are at least 44 px tall; module chips 36 px tall with 6 px spacing |
| 4.1.2 Name, role, value | AA | aria-expanded on "What am I responsible for learning?"; aria-current on the current module chip; new-tab links announce "(opens in a new tab)" |
| 4.1.3 Status messages | AA | The swap between the card grid and an open card happens in an aria-live region |
| 2.3.3 Animation | AAA | The 2 px hover lift switches off under prefers-reduced-motion |

## 3. Color contrast audit

| Pair | Ratio | AA | AAA |
|---|---|---|---|
| Navy #0B1530 text on white card #FFFFFF | 18.0:1 | Pass | Pass |
| Navy #0B1530 text on page #FAFAF9 | 17.3:1 | Pass | Pass |
| Body text #454B5C on white | 8.7:1 | Pass | Pass |
| Terra cotta links #7A2E24 on page #FAFAF9 | 9.0:1 | Pass | Pass |
| Terra cotta "Show resources" #7A2E24 on white | 9.4:1 | Pass | Pass |
| Step numbers #6F5316 on white | 7.2:1 | Pass | Pass |
| Gray tags #6B7080 on white | 4.9:1 | Pass | Below 7:1 |
| White on navy current-module chip | 18.0:1 | Pass | Pass |

Icon tiles are decorative (aria-hidden) and carry no information.

## 4. Keyboard navigation flow

Skip link, then "What am I responsible for learning?", "What are we doing this week?", the six cards in reading order, then the page end. In an open card: "All study options", then each resource link and its module chips in order. Escape returns to the six cards.

## 5. Screen reader testing

Checked by inspecting the rendered accessibility tree in Chromium. Each card button reads its problem and its tags ("I keep forgetting things, Spaced practice · Weak spots"). Not yet tested with VoiceOver or NVDA by a person.

## 6. Known limitations and remediation plan

- Gray tag text meets AA, not AAA. Darken to #4A4F5E if AAA is required.
- Digital copies of the printed packets exist for Modules 1 to 5 (module packets), Modules 1 to 3 (note sheets) and Module 3 (lab packet). New packets need one line added to bio004-study-help.html when they are posted.
- The "current module" chip is worked out from the exam dates in schedule-fall2026.js. If an exam date moves, update the EXAMS list in the page.
- Plan: one VoiceOver pass on iPhone before Exam 4.

## 7. Reviewer

Claude, at Dr. Rennie's request, October 14, 2026.
