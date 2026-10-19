# Compliance Notes: TBL Study Group

## 1. Project, files covered, date

- **Project:** TBL Study Group, BIO 004 Human Anatomy (Solano Community College, Fall 2026)
- **Files covered:**
  - bio004-tbl-study.html (the tool)
  - bio004-tbl-apps.js (application questions)
  - bio004-tbl-lab-data.js (lab image questions, generated from the digital atlas)
  - bio004-qrcode.js (QR code library, qrcode-generator 1.4.4, MIT license)
  - tools/build_tbl_lab_data.js and tools/validate_tbl_apps.js (build and check scripts, not student facing)
- **Date:** October 15, 2026

## 2. WCAG version and level achieved per criterion

Target: WCAG 2.2 AA, AAA where achievable.

| Criterion | Level | Result | How it is met |
|---|---|---|---|
| 1.1.1 Non-text content | A | Pass | QR code has an accessible name. Atlas images have a text label naming the figure and what the marker shows. Decorative letter circles are aria-hidden with a screen reader text equivalent. |
| 1.3.1 Info and relationships | A | Pass | Landmarks (header, nav, main), one h1, h2 per screen, h3 inside sections. Topic checkboxes in a fieldset with a legend. Point inputs, team score inputs and textareas all have labels tied by for and id. Application choices are a radio group with a legend. Answer key uses details and summary. Printed tRAT sheet uses a table with column headers. |
| 1.3.2 Meaningful sequence | A | Pass | Reading order matches visual order on every screen. |
| 1.4.1 Use of color | A | Pass | Correct and incorrect choices are marked with text ("Correct", "Your team's pick", rank words), not color alone. Step states say "Done", "Later" or the next action in text. |
| 1.4.3 Contrast (minimum) | AA | Pass | See section 3. Lowest text pair is 4.72:1. |
| 1.4.6 Contrast (enhanced) | AAA | Partial | Body text, buttons and question text pass at 10:1 or higher. Terra-dark headings and eyebrows (5.4 to 5.6:1), gray secondary text (5.3 to 5.5:1) and the small "Coming up" tag (4.7:1) meet AA but not AAA. |
| 1.4.10 Reflow | AA | Pass | Works at 320 px wide with no horizontal scroll. Point rows restack on small phones. |
| 1.4.11 Non-text contrast | AA | Pass | Inputs, option borders and focus rings are 5.6:1 or higher. The gold and dashed gray step borders are below 3:1, but each step also states its state in text, so the border is not the only cue. |
| 1.4.12 Text spacing | AA | Pass | No fixed-height text containers. |
| 2.1.1 Keyboard | A | Pass | Every control is a native button, input, select, textarea, checkbox, radio or summary. Module tabs and the Lecture/Lab switch support arrow keys. |
| 2.1.2 No keyboard trap | A | Pass | Verified in a full keyboard pass. |
| 2.4.1 Bypass blocks | A | Pass | Skip link to main content. |
| 2.4.3 Focus order | A | Pass | Focus moves to the new screen heading on every screen change and to the breakdown after a lock. |
| 2.4.6 Headings and labels | AA | Pass | Plain, descriptive headings and labels. |
| 2.4.7 Focus visible | AA | Pass | 3 px terra-dark outline on every focusable element. |
| 2.4.11 Focus not obscured | AA | Pass | The sticky submit bar on the iRAT screen scrolls focused point inputs into view. |
| 2.5.3 Label in name | A | Pass | Visible text is part of every accessible name. |
| 2.5.8 Target size (minimum) | AA | Pass | Buttons and inputs are 38 to 52 px tall. |
| 3.2.2 On input | A | Pass | Changing an input never moves the page or changes context. |
| 3.3.1 Error identification | A | Pass | iRAT totals, team score entry and application lock all name the problem in text. |
| 3.3.2 Labels or instructions | A | Pass | Each screen starts with short instructions. Score fields state their range. |
| 4.1.2 Name, role, value | A | Pass | aria-current on the active step, aria-checked on the mode switch, aria-selected on module tabs, aria-disabled on steps and buttons that are not ready yet. |
| 4.1.3 Status messages | AA | Pass | A single polite live region announces point totals, ranks, locks, scores and copy results. |
| Motion | | Pass | prefers-reduced-motion turns off all transitions. |

Automated check: axe-core (WCAG 2.0, 2.1 and 2.2 A and AA rules plus best practice) reported 0 violations on the Build, Share, iRAT, iRAT submitted, tRAT, tRAT locked and Scores and key screens.

## 3. Color contrast audit

| Pair | Colors | Ratio | Result |
|---|---|---|---|
| Body and question text | #1E3D4C on #FFFFFF | 11.49:1 | AAA pass |
| Body text on page | #1E3D4C on #FAFAF9 | 11.01:1 | AAA pass |
| Headings, eyebrow, labels | #A0522D on #FFFFFF | 5.62:1 | AA pass |
| Headings on page | #A0522D on #FAFAF9 | 5.38:1 | AA pass |
| Secondary text | #5F6B70 on #FFFFFF | 5.49:1 | AA pass |
| Secondary text on page | #5F6B70 on #FAFAF9 | 5.26:1 | AA pass |
| Button text | #FFFFFF on #1E3D4C | 11.49:1 | AAA pass |
| Button hover | #FFFFFF on #142a36 | 14.85:1 | AAA pass |
| Tags and completed states | #1E3D4C on #EDF1F3 | 10.11:1 | AAA pass |
| "Coming up" and "Your team's pick" tags | #A0522D on #F6E9E1 | 4.72:1 | AA pass |
| Option and input borders (non-text) | #1E3D4C on #FFFFFF | 11.49:1 | Pass |
| Focus ring (non-text) | #A0522D on #FFFFFF | 5.62:1 | Pass |
| Open step border, gold (non-text) | #B8924A on #FFFFFF | 2.90:1 | Below 3:1; state also given in text |
| Locked step border, dashed gray (non-text) | #9AA3A7 on #FFFFFF | 2.57:1 | Below 3:1; state also given in text |

Completed states use navy on navy-tint, never green. No sage or cream. No italics anywhere (em, i and similar are reset to normal). No Lora.

## 4. Keyboard navigation flow verified

- Build: skip link, Lecture/Lab switch (arrow keys), module tabs (arrow keys, Home, End), Whole module, Clear, each topic checkbox, iRAT length, application count, Build, join link field, Join.
- Share: Copy link, Take my iRAT, Start the team test, Paper version.
- iRAT: for each question, minus, points input, plus for each choice, then the Submit button in the sticky bar.
- tRAT: choices in order (Enter or Space ranks them), Undo last, Clear, Lock, then the breakdown receives focus, then Next.
- Application: radio group (arrow keys), reasoning box, Lock, then the breakdown receives focus, then Next.
- Scores and key: team score fields, each "We went over this" checkbox, each answer key summary (Enter opens it), Copy my results, Paper version.

## 5. Screen reader testing

- Not yet tested with a live screen reader. Structure was checked with the Chromium accessibility tree and axe-core.
- Recommended before first class use: VoiceOver with Safari on iPhone (most students will use phones) and NVDA with Chrome on Windows.
- What to confirm:
  - Point totals and ranks are announced.
  - Choice letters are read with each choice.
  - The answer key details open and close.

## 6. Known limitations and remediation plan

- **Lab image questions are visual by nature.** A screen reader user hears the figure name and that a marker points to a structure, but cannot see the marker. Plan: offer the lecture mode or the text lab cards to a student who needs it, and talk with DSPS about a tactile or described alternative for lab practicals.
- **Atlas images load from drsrennie-stack.github.io/new-digital-atlas.** If that site is down, lab image questions show without the picture. Lecture mode is unaffected.
- **The card bank file is large (about 6.5 MB).** On a slow phone connection the first load can take several seconds. The page shows a loading message until it is ready.
- **Progress is saved in each device's browser only.** Clearing browser data clears a student's iRAT. No student names or IDs are asked for or stored anywhere.
- **Group links point to specific questions.** If a card used in a link is later removed from the bank, that link stops working and the group builds a new TBL. The tool says this plainly.
- **AAA contrast is not met** for headings, secondary text and the two small tags (section 3). They are left at the PRIMARY palette values, which meet AA.

## 7. Reviewer

Built and checked with Claude (automated axe-core pass, keyboard pass, contrast calculation, end-to-end browser test of the group flow). Awaiting review by Dr. Sharilyn Rennie.
