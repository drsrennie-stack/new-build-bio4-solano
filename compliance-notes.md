# Accessibility compliance notes

## 1. Project

**Project:** BIO 004 Human Anatomy, Module Exams 1 through 5, Fall 2026
**Files covered:**

- bio004-module-1-exam.html
- bio004-module-2-exam.html
- bio004-module-3-exam.html
- bio004-module-4-exam.html
- bio004-module-5-exam.html

**Date reviewed:** August 15, 2026
**Reviewer:** Dr. Sharilyn Rennie

All five files share one engine, one stylesheet and the live course site chrome, so every result below applies identically to all five.

## 2. WCAG version and level achieved

Target is WCAG 2.2 Level AA as the floor, with Level AAA where it was achievable.

| Criterion | Level | Result |
|---|---|---|
| 1.1.1 Non-text Content | A | Pass. The three-figure logo mark is decorative inside a labeled link, so it carries aria-hidden and the link carries the name. Icon-only controls (the plus and minus confidence steppers) carry aria-label naming the option letter and the question number. |
| 1.3.1 Info and Relationships | A | Pass. Semantic header, main, footer. Every input has a label tied by for and id, or an aria-label, or aria-labelledby pointing at the term it belongs to. Answer banks are ordered lists. The topic report is a real table with scoped column headers. True and False buttons sit in a labeled role="group". |
| 1.3.2 Meaningful Sequence | A | Pass. DOM order matches reading order. |
| 1.4.1 Use of Color | A | Pass. Correct and incorrect carry a check mark or a times sign plus a text label. In the topic report, every bar is accompanied by the numeric share and a worded state, so the bar color is never the only signal. |
| 1.4.3 Contrast (Minimum) | AA | Pass. See section 3. |
| 1.4.6 Contrast (Enhanced) | AAA | Pass on all body text, headings, tags, labels, hero text, footer text and review text. Two exceptions, noted in section 6. |
| 1.4.4 Resize Text | AA | Pass. Reflows at 200 percent zoom with no loss. |
| 1.4.10 Reflow | AA | Pass. Single column at 320 px. Media queries at 720, 560 and 520 px stack the footer grid, the site header, the matching rows and the option rows. |
| 1.4.11 Non-text Contrast | AA | Pass. Interactive borders are #767E8C at 4.09:1 on white. Hero pill borders raised to #6B7794 at 4.41:1 on ink. Focus indicator is 18.6:1. |
| 1.4.12 Text Spacing | AA | Pass. No fixed heights on text containers. |
| 2.1.1 Keyboard | A | Pass. See section 4. |
| 2.1.2 No Keyboard Trap | A | Pass. No modals, nothing captures focus. |
| 2.4.1 Bypass Blocks | A | Pass. Skip link is the first focusable element and jumps past the site chrome to the exam. |
| 2.4.3 Focus Order | A | Pass. Focus follows visual order from the site header through every part to the footer. |
| 2.4.4 Link Purpose (In Context) | A | Pass. Every header and footer link names its destination. Internal links carry target="_top" so they break out of the Kajabi or Canvas iframe. |
| 2.4.6 Headings and Labels | AA | Pass. h1 for the exam, h2 for each part and each review block including the topic report, h3 for each brain dump scoring checklist. No skipped levels. |
| 2.4.7 Focus Visible | AA | Pass. 3 px ink outline at 2 px offset with a gold halo, visible on white, on the warm paper panels and on the ink hero and footer. |
| 2.4.11 Focus Not Obscured (Minimum) | AA | Pass. Nothing is sticky or overlaid. |
| 2.5.3 Label in Name | A | Pass. Visible text starts every accessible name. |
| 2.5.8 Target Size (Minimum) | AA | Pass. Steppers are 30 by 30 px with spacing, True and False buttons are about 100 by 38 px, checkboxes and radios are 18 px with a full-width clickable label. |
| 3.1.1 Language of Page | A | Pass. lang="en". |
| 3.2.2 On Input | A | Pass. Choosing False reveals a short reminder line below the buttons. That is an addition in place, not a change of context. |
| 3.3.1 Error Identification | A | Pass. Submitting without choosing a brain dump prompt shows a role="alert" message naming the part to fix. |
| 3.3.2 Labels or Instructions | A | Pass. Every part opens with a plain-language instruction, and the panel at the top explains the whole scoring model, including how the grade is produced, before the first question. |
| 4.1.2 Name, Role, Value | A | Pass. Toggle buttons use aria-pressed. Native controls throughout. |
| 4.1.3 Status Messages | AA | Pass. The confidence point counter under each question and the results panel are aria-live regions, so a screen reader hears the running total and the score without moving focus. |

## 3. Color contrast audit

Palette is the live BIO 004 course site: ink #060A18, rust #8B3A2E, gold #C9A14A, gold-soft #E4C77E, paper-warm #F7F5F1, line #E3E0DA, muted #5A6273.

| Foreground | Background | Ratio | Used for | AA | AAA |
|---|---|---|---|---|---|
| Ink #060A18 | White #FFFFFF | 19.73:1 | Body text, headings, terms | Pass | Pass |
| Ink-2 #1A2231 | White #FFFFFF | 15.94:1 | Instruction paragraphs, rationales | Pass | Pass |
| Rust #8B3A2E | White #FFFFFF | 7.66:1 | Topic tags, question numbers, section point values, checklist headings | Pass | Pass |
| Rust #8B3A2E | Paper-warm #F7F5F1 | 7.03:1 | Bonus and bank panel accents | Pass | Pass |
| Gold-ink #6E5018 | White #FFFFFF | 7.44:1 | Option letters, bonus label | Pass | Pass |
| Gold-ink #6E5018 | Paper-warm #F7F5F1 | 6.83:1 | Bonus checkbox label on its warm panel | Pass | See limitation 1 |
| Teal-text #2C5F66 | White #FFFFFF | 7.15:1 | Field labels, confidence counter | Pass | Pass |
| Plum-text #5C2A66 | White #FFFFFF | 10.62:1 | Depth of knowledge badge in the review | Pass | Pass |
| Muted #5A6273 | White #FFFFFF | 6.12:1 | Logo sub line, table column headers | Pass | See limitation 2 |
| Done #1E3D4C | White #FFFFFF | 9.71:1 | Correct answer text and badges | Pass | Pass |
| Done #1E3D4C | Tint #ECEFF4 | 9.97:1 | Selected answer, correct option row | Pass | Pass |
| White #FFFFFF | Ink #060A18 | 19.73:1 | Hero heading, footer logo | Pass | Pass |
| Gold #C9A14A | Ink #060A18 | 8.16:1 | Hero eyebrow, footer column headers | Pass | Pass |
| Ink #060A18 | Gold #C9A14A | 8.16:1 | Primary button text on the gold fill | Pass | Pass |
| Gold-soft #E4C77E | Ink #060A18 | 12.00:1 | Letter grade, hero accent, footer logo accent | Pass | Pass |
| #C9CEDA | Ink #060A18 | 12.52:1 | Hero subhead, footer links | Pass | Pass |
| #9AA2B4 | Ink #060A18 | 7.71:1 | Footer tagline and bottom bar | Pass | Pass |
| Control #767E8C | White #FFFFFF | 4.09:1 | Inputs, selects, steppers, choice buttons | Pass, 3:1 rule | n/a |
| Hero pill #6B7794 | Ink #060A18 | 4.41:1 | Hero pill borders | Pass, 3:1 rule | n/a |
| Focus ink #060A18 | White #FFFFFF | 19.73:1 | Focus indicator | Pass, 3:1 rule | n/a |

One change was made against the live site rather than copied from it. On the live site the footer logo renders the word "Anatomy" in rust on the ink footer, which measures 2.58:1 and fails AA for text. These files use gold-soft there instead, at 12:1. Worth applying to the site the next time that footer is touched.

## 4. Keyboard navigation flow verified

Verified in headless Chromium with a scripted tab walk and by hand.

1. Tab 1 is the skip link, hidden until focused, then visible at the top left. Enter jumps past the site chrome to the exam.
2. Tab 2 and 3 are the logo link and the module exams link in the site header.
3. Tab order then runs down the page: True, then False, for each of the twenty statements. There is no correction field to tab through, since the correction is claimed after submit.
4. Each multiple choice question exposes eight stops, a minus and a plus for each of the four options. Enter or Space adds or removes a confidence point, and the counter beneath announces the new total through aria-live.
5. Matching rows are native selects, so arrow keys, type-ahead and Enter all work.
6. Brain dump prompts expose a radio for "count this one" and a textarea. The radio group moves with arrow keys.
7. Submit and Clear are reachable at the end. After submitting, focus order continues into the results panel, and the scoring checklists and the True and False bonus boxes become reachable checkboxes.
8. Footer links close the tab order.
9. Between 383 and 393 tabbable elements per file, all named, nothing reachable but unusable, no traps.

## 5. Screen reader testing

Verified with the Chromium accessibility tree, which is what VoiceOver and NVDA both consume, checking every control for a computed accessible name and role. Result: 431 to 445 controls per file, zero without an accessible name.

- Landmarks announce as banner, main and contentinfo.
- Heading hierarchy reads h1, then h2 per part, then h3 for each scoring checklist, with no skipped levels.
- True and False announce as toggle buttons with a pressed state.
- Steppers announce as, for example, "Add a confidence point to option C, question 14".
- Matching selects announce with the term they belong to, through aria-labelledby.
- The topic report reads as a table, so a screen reader user can navigate it by row and hear the topic, the item count, the points, and the worded state.
- The confidence counter and the results panel announce as live regions.

Recommended before the first live term: one pass with VoiceOver on Safari and one with NVDA on Firefox, since automated tools cannot judge whether the announcements are pleasant to listen to across sixty questions.

## 6. Known limitations and remediation plan

1. **Bonus checkbox label sits at 6.83:1.** Just under AAA, because that panel uses the warm paper fill rather than white. The same color on white elsewhere is 7.44:1. Moving that panel to a white fill would clear it.
2. **Muted text sits at 6.12:1.** Used for the logo sub line and the topic table column headers. AA passes comfortably, AAA does not. Darkening the token to #4C5466 reaches 7.1:1 and is nearly indistinguishable, but it would drift from the live site, so it was left matching the site.
3. **Self-scored sections depend on honesty.** The brain dump checklist and the True and False correction bonus are student-scored by design, so the total is a close estimate of exam performance rather than a graded result. This is stated in the instructions at the top of every file. The base True or False call, the multiple choice, and the matching are all machine-scored, so 80 of the 100 points on a full exam are objective.
4. **The True and False correction is not typed.** By design there is no blank. The student decides the replacement term, and after submitting sees the correct term and claims the quarter point if they had it. This matches how the section is corrected on paper, and it removes the mismatch where a correct answer typed in an unexpected form would have been marked wrong.
5. **Answers persist in browser storage.** Work is saved to localStorage under a per-exam key so a refresh does not lose it. Nothing leaves the browser, no names or identifiers are collected, and no network request is made. A shared computer will show the previous user's answers until Clear all answers is pressed, which is worth mentioning to students who work in the open lab.
6. **No timer.** These run untimed on purpose so students can practice the confidence allocation without pressure. A timed version would need the countdown region set to aria-live off with a periodic polite announcement, so it does not interrupt reading.

## 7. Reviewer

Dr. Sharilyn Rennie
Professor of Anatomy and Physiology
BIO 004 Human Anatomy, Solano Community College
