# Compliance notes: BIO 004 Weekly Schedule

## 1. Project, files, date
- Project: BIO 004 Human Anatomy, Fall 2026 (new-build-bio4-solano)
- Files: bio004-weekly-schedule.html (new), bio004-dock.js (one tile added)
- Date: September 17, 2026 (revised: week calendar, side list, month view, color coding; restyled to the BIO 004 site branding with site header, dock, and Hootie)

## 2. WCAG version and level
WCAG 2.2, AA met throughout; AAA met for contrast on body text.
- 1.4.1 Use of color: every color is paired with a text label (Class, TBL 3, Exam 2, No class), a legend, and a border style (solid, thick gold, dashed). A
- 1.3.1 Info and relationships: month grid is a table with column headers and a caption; landmarks (main), h1 > h2 (week) > h3 (day) > h4 (part), ordered lists for pre-work order. AA
- 1.4.3 / 1.4.6 Contrast: see audit. AA on all text, AAA on body text
- 1.4.10 Reflow: single column at 390px, no horizontal scroll. AA
- 2.1.1 Keyboard: every control is a native button, link, or details/summary. AA
- 2.4.1 Bypass blocks: skip link to the schedule. A
- 2.4.3 Focus order: follows visual order; week change moves focus to the schedule region. A
- 2.4.7 / 2.4.13 Focus visible: 3px terra-dark outline with offset. AA
- 2.5.8 Target size: controls are at least 40px tall. AA
- 3.3.2 / 4.1.2 Name, role, value: section and view toggles use aria-pressed, current week uses aria-current, cases use native details/summary (expanded state exposed natively). AA
- 4.1.3 Status messages: a role="status" region announces the day, week, month, or section after each change, without reading the whole schedule. AA
- 2.3.3 Motion: card lift disabled under prefers-reduced-motion. AAA

## 3. Color contrast audit
| Text / background | Ratio | Result |
|---|---|---|
| Ink #08101F on white | 19.9:1 | AAA pass |
| Maroon #6B1616 on white (labels, class-day text) | 11.99:1 | AAA pass |
| White on maroon #6B1616 (step numbers, Today badge) | 11.99:1 | AAA pass |
| Gold text #6F5316 on white (TBL labels) | 7.18:1 | AAA pass |
| Review gray #3C454C on white | 9.78:1 | AAA pass |
| Muted #4A5763 on white (small text) | 7.41:1 | AAA pass |
| Gold #DCB45C on ink #08101F (cover title, exam labels) | 9.71:1 | AAA pass |
| Ink on gold #DCB45C ("This week" chip) | 9.71:1 | AAA pass |
| #C9D2DE on ink (exam day topic) | 12.46:1 | AAA pass |
| Ink on no-class stripes #ECEFF4 | 16.5:1 | AAA pass |
| Maroon #8B1D1D and gold #DCB45C borders | non-text, 3:1 against white met by maroon; gold border paired with a text label | 1.4.11 relies on the label for gold |

## 4. Keyboard navigation flow
Skip link, section buttons (3), view buttons (Week, Month, Whole term list), Previous, This week, Next, Print, then the Monday to Friday day buttons, the selected day's links and case, then the side list. Choosing a day keeps focus on the pressed button and announces "Showing <day>" through a status region. Choosing a month cell switches to week view and moves focus to that day. Enter and Space operate all controls. Verified in headless Chromium.

## 5. Screen reader testing
Structure verified through the accessibility tree in Chromium (headings, landmarks, pressed and current states, live region, "opens in a new tab" text on Loops links). Hands-on VoiceOver and NVDA passes are still to be done.

## 6. Known limitations and remediation
- The gold border on TBL days is under 3:1 against white; every TBL cell also carries a "TBL" text label, so color is never the only cue.
- The site dock and Launchpad overlay are shared site scripts and were not re-audited here.
- Eyebrow and h4 labels in terra-dark do not reach 7:1 at small sizes. Palette color; kept at AA.
- Page depends on JavaScript. A noscript fallback links all three syllabi.
- Manual screen reader pass pending (see 5).

## 7. Reviewer
Dr. Sharilyn Rennie (build checked by Claude)
