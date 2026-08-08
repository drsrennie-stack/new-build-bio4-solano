# Accessibility Compliance Notes

## 1. Project

**Project:** BIO 004 Human Anatomy, Fall 2026 schedule reconciliation and master schedule
**Date:** August 8, 2026 (revised)
**Repo:** drsrennie-stack/Fall-2026-Anatomy

**New files covered:**

| File | What it is |
|---|---|
| `bio004-master-schedule-fall2026.html` | Master schedule. All three sections, lecture beside lab, every meeting day. |
| `schedule-reconciliation.html` | Audit trail. Every change, why, and what was deliberately left alone. |
| `schedule-fall2026.js` | Data reference. Rewritten; no rendered output, so no WCAG surface. |

**Existing files modified** (schedule data and style-rule cleanup only, no structural or interactive change, so their prior accessibility posture is unchanged):
`class1.html`, `class2.html`, `class3.html`, `syllabus-class1.html`, `syllabus-class2.html`, `syllabus-class3.html`, `fall-2026-syllabus.html`, `mastery-os-fall-2026.html`, `mastery-os-fall-2026-instructor.html`

Target: WCAG 2.2 AA minimum, AAA where achievable.

## 2. WCAG criteria achieved

Applies to both new HTML files unless noted.

| Criterion | Level | Achieved | Note |
|---|---|---|---|
| 1.1.1 Non-text Content | A | Pass | No informational images. Colour-block chips carry text. |
| 1.3.1 Info and Relationships | A | Pass | `banner` / `main` / `contentinfo` landmarks. Every data table has `<caption>`, `<thead>`, `scope="col"` and `scope="row"`. Week band rows use `scope="colgroup"`. |
| 1.3.2 Meaningful Sequence | A | Pass | Reading order is chronological. The Exam 4 callout precedes the tables it qualifies. |
| 1.4.1 Use of Color | A | Pass | Critical. The split exam is never signalled by the pink row alone. It also carries the literal words "Exam 4 lab practical" and "Exam 4 lecture exam", a "different day" text chip, and a sentence in the callout. A user who cannot see the tint loses nothing. |
| 1.4.3 Contrast (Minimum) | AA | Pass | See section 3. |
| 1.4.6 Contrast (Enhanced) | AAA | Pass | Every measured pair is at or above 7.21:1 for normal text, including all four tinted row states. |
| 1.4.4 Resize Text | AA | Pass | Relative and clamped units throughout. |
| 1.4.10 Reflow | AA | Pass | Wide schedule tables scroll horizontally inside a bounded container rather than forcing the page to scroll. Verified at 320px equivalent. |
| 1.4.11 Non-text Contrast | AA | Pass | Table borders and chip outlines at or above 3:1 against their backgrounds. |
| 2.1.1 Keyboard | A | Pass | Reconciliation section switcher is a native button tablist. Master schedule has one button (print). |
| 2.1.2 No Keyboard Trap | A | Pass | No modals, no focus capture. |
| 2.4.1 Bypass Blocks | A | Pass | Skip link on both files, visible on focus. |
| 2.4.3 Focus Order | A | Pass | Skip link, then tabs (reconciliation), then controls. |
| 2.4.6 Headings and Labels | AA | Pass | Verified programmatically. Master schedule: 1, 2, 2, 2, 2, 2. Reconciliation: 1, 2, 2, then 3s inside each panel, then 2s. No skipped levels. |
| 2.4.7 Focus Visible | AA | Pass | 3px terra outline, 3px offset, on `:focus-visible`. |
| 2.4.11 Focus Not Obscured | AA (2.2) | Pass | `thead` is sticky but `z-index` is below the focus ring and header cells contain no focusable elements. |
| 2.5.8 Target Size | AA (2.2) | Pass | Tabs measure 62px tall. Print button 45px. |
| 3.2.2 On Input | A | Pass | Switching sections changes only panel visibility. |
| 4.1.2 Name, Role, Value | A | Pass | Tabs expose `role="tab"`, `aria-selected`, `aria-controls`, and roving `tabindex`. Panels are `role="tabpanel"` with `aria-labelledby`. |

### Tablist keyboard behaviour, verified

Arrow Right and Arrow Left move between sections and switch the panel. Home and End jump to first and last. Only the selected tab is in the tab order (roving tabindex), so Tab exits the tablist rather than walking three tabs. Tested in headless Chromium: focusing Class 2 and pressing Arrow Right moved focus to `tab-class3` and revealed `panel-class3`.

## 3. Color contrast audit

WCAG 2.x relative luminance. AAA for normal text is 7:1.

| Foreground | Background | Ratio | Level |
|---|---|---|---|
| Navy `#08101F` | White | 19.02 | AAA |
| Navy `#08101F` | Off-white `#FAFAF9` | 18.21 | AAA |
| Navy `#08101F` | Exam tint `#FBF4E4` | 17.35 | AAA |
| Navy `#08101F` | Split tint `#FAECEA` | 16.53 | AAA |
| Navy `#08101F` | Week band `#ECEFF4` | 16.50 | AAA |
| Lede `#DDE2EA` | Navy | 14.62 | AAA |
| Terra-dark `#6B1616` | White | 11.99 | AAA |
| Terra-dark `#6B1616` | Split tint `#FAECEA` | 10.42 | AAA |
| Terra-dark `#6B1616` | Week band `#ECEFF4` | 10.40 | AAA |
| Stat key `#B9C2CF` | Navy | 10.58 | AAA |
| Gold `#DCB45C` | Navy | 9.71 | AAA |
| Body ink `#3F4854` | White | 9.27 | AAA |
| White | Terra `#8B1D1D` chip | 9.17 | AAA |
| Body ink `#3F4854` | Exam tint `#FBF4E4` | 8.46 | AAA |
| Body ink `#3F4854` | Split tint `#FAECEA` | 8.05 | AAA |
| Body ink `#3F4854` | Week band `#ECEFF4` | 8.04 | AAA |
| Gold-ink `#634B12` | Exam tint `#FBF4E4` | 7.53 | AAA |
| Gold-ink `#634B12` | White | 8.25 | AAA |
| White | Gold-ink `#634B12` chip | 7.21 | AAA |

The two row tints (`#FBF4E4` exam, `#FAECEA` split) were chosen so that navy body text, grey body text and terra flag text all clear 7:1 on top of them. Both tints also clear 3:1 against the adjacent white rows, so the banding is perceivable as a boundary and not only as a hue.

## 4. Keyboard navigation flow verified

**Master schedule:** skip link, print button. Tables are static content and are reachable by screen reader table navigation.

**Reconciliation:** skip link, then the three section tabs as a single tab stop with arrow-key traversal, then the print button. All 34 rows per section are in the accessibility tree at all times for the visible panel; hidden panels use the `hidden` attribute so they are correctly removed from the tree rather than merely visually clipped.

## 5. Screen reader testing

Verified against the Chromium accessibility tree, with the announced strings inspected manually.

- Landmarks present and named on both files.
- Every table announces its caption, then column headers, then row header on each row. Example: "Full term schedule, all three sections, lecture and lab per day. Date, Class 1, Class 2, Class 3. Nov 16, Mon. Lecture TBL 7: GI System. Lab, Exam 4 Lab Practical."
- Week band rows announce as column group headers, so "Week 14" is heard once rather than repeated per cell.
- Tabs announce as "Class 1, tab, selected, 1 of 3".
- The Exam 4 callout is plain prose in `main`, read before the exam table.

Not yet run on VoiceOver or NVDA on physical hardware. See section 6.

## 6. Known limitations and remediation plan

| Limitation | Impact | Plan |
|---|---|---|
| No VoiceOver or NVDA pass on real hardware. | The Chromium accessibility tree is a proxy. | Run a VoiceOver pass before the master schedule is linked from a student-facing page. Both files are currently instructor-facing. |
| Wide schedule tables scroll horizontally on narrow viewports. | A phone user must scroll sideways to compare all three sections. | Accepted for an instructor tool. If this becomes student-facing, add a per-section stacked view below 700px. The reconciliation file already offers one section at a time and is the better mobile read. |
| Sticky `thead` reduces usable height on short viewports. | Minor on a laptop in landscape. | Accepted. It is what makes a 68-row table readable at all. |
| Google Fonts from a CDN. | Falls back to the system sans stack offline. | Accepted. Fallbacks declared on every font token; contrast and layout unaffected. |
| Time estimates and lab-number chips are transcribed from the department master. | Three number typos in the source were silently normalised for display (see below). | The typos are listed for the department in the reconciliation file rather than corrected in place, so the correction is visible rather than hidden. |
| Only internal link is a same-page fragment. | None. | Intentional. Any future cross-page link must carry `target="_top"` per project standard. |

## 7. Standing style rules, verified programmatically

Checked across all nine files touched plus the three new ones:

- Em dashes: **0** in every file.
- `<em>` and `<i>` tags: **0**. 106 `<em>` tags were removed from the four syllabus files, which were using them for the `(iCheck)` labels.
- `font-style: italic`: **0**. The `.detail-note` rule in `class1/2/3.html` was italic and is now upright.
- Lora: **0**. The font link and the `--font-serif` token were removed from `class1/2/3.html`.
- The phrase "Given not Googled": **0**.
- Sage and cream: not introduced. Palette is the Fall 2026 site chrome (navy `#08101F`, terra `#8B1D1D`, gold `#DCB45C`).
- No bookend decorative bars. Separation comes from row banding, white cards on off-white, and a single left rule on the callout.

## 8. Data correctness verification

Accessibility is not the only failure mode for a schedule. A schedule that is beautiful and wrong is worse than plain and right, so the data was asserted programmatically as well:

- All five lab practical dates in each of the three class pages compared cell by cell against the department master. 15 of 15 match.
- Mastery OS `FALL_MW` and `FALL_TR` practical dates compared against the same. 20 of 20 match across both the student and instructor builds.
- Class 1 syllabus asserted to contain both the Nov 16 practical and the Nov 18 lecture exam, and asserted no longer to claim both parts fall on the same day.
- Nov 25 asserted to read Travel Day and Nov 26 Thanksgiving, in every file, with no reversal.
- Zero duplicate lab titles and zero placeholder "Open Lab" slots remaining in any section.
- Total failures across the whole assertion suite: **0**.

## 9. Late revisions after instructor review

Three changes landed after the first audit pass. All were re-verified with the full assertion suite.

1. **Day one lab retitled.** `Intro to Anatomy LAB; Cell Anatomy & Microscopy` became `Intro to Anatomy Lab, Lab Safety & Introduction to Histology` in all three class pages, all three section syllabi, and both Mastery OS builds. Cell anatomy is a lecture topic in this course, and there is no separate microscope lab; the scope is taught inside the histology work. Exam 1 still covers 6 lab sessions in every section, so no exam coverage changed. A student-facing `details` note explains it on the class pages.

2. **Mastery OS schedule resolution hardened.** The resolution chain previously read `store` then `window.BIO004_SCHEDULE` then `FALL_SECTIONS[section]`. Because the three sections do not share exam dates, any file defining that global would have pinned all three to one calendar and shown two of them the wrong Exam 4 practical date, silently and with no error. The chain is now `store`, then `FALL_SECTIONS[section]`, then `window.BIO004_SECTIONS[section]`, then `window.BIO004_SCHEDULE` and only when its own `section` field matches the selected section. A `console.warn` fires when a generic global is rejected.

   Verified behaviourally: injecting a hostile `window.BIO004_SCHEDULE` that declares Exam 4 on the wrong date and names a foreign section does not reach the UI. Forcing an unknown section key so the guard path executes produces the expected warning and no page error.

3. **Nov 25 label reverted.** The department master lumps Nov 25 to 27 as THANKSGIVING. The Solano board approved calendar labels Nov 25 to 29 as "No Classes" with no named holiday, and the instructor's own term for Nov 25 is Travel Day. Her wording was restored in every file. Nov 26 remains Thanksgiving for the Tue/Thu sections.

## 10. Final revision: Exam 4 unified to one day

After the instructor confirmed she controls both halves of the exam and must stay on the department lab schedule because of her setup and takedown duty, Class 1 Exam 4 was moved so both parts sit on **Monday November 16**, the department lab practical date. The split is gone. All five exams in all three sections now have the lecture exam and the lab practical on the same day.

Knock-on changes, all instructor-approved:

- **TBL 7 (GI System)** lost its Nov 16 slot to the exam. Moved to **Mon Nov 9**, making it the last GI session before the exam.
- **GI Map Activity II** was displaced by TBL 7 and folded into Nov 4 alongside Activity I.
- **Wed Nov 18** became a normal class day: Exam 4 rebuttals plus the Guided Renal Map in lecture, Renal Anatomy in lab.
- **Mon Nov 23** lecture became Kahoot: Renal. This also closed a section asymmetry, since Class 1 was the only section not receiving that activity.

Accessibility consequences:

- The split-exam callout, the "different day" text chip, and the pink split row styling were all removed from the master schedule, because the condition they signalled no longer exists. Signalling a distinction that is not real is itself an accessibility failure, not a neutral leftover.
- What replaced them is a single text warning on the Exam 4 row reading "Monday, not the usual Wednesday", which is the one thing about that date that is genuinely unusual. It is text, not colour, so criterion 1.4.1 still holds without the tint.
- The exam table was restructured from four date columns (lecture and practical per track) to two, plus a coverage column and a department duty column. Fewer columns means less horizontal scroll on narrow viewports, which improves 1.4.10 Reflow.
- One rendering bug was caught in verification: the Exam 4 warning chip was firing on the Exam 1 row because a non-empty data field was being read as a boolean flag. Fixed and re-verified; exactly one chip renders, on Exam 4.

## 11. Revision: week page dates moved to a single source

The 17 week pages each hardcoded their own two dates per track, 68 date strings in total. They now render the class-days block from `BIO004_SESSIONS` in `schedule-fall2026.js` via a new `week-schedule.js`.

**Files added:** `week-schedule.js` (renderer, no rendered chrome of its own), `week-links.js` (data stub, no rendered output, no WCAG surface).

**Files modified:** `week-1.html` through `week-17.html`, `schedule-fall2026.js`, `syllabus-class1.html`.

Accessibility consequences:

- **Rendered output is unchanged.** All 17 pages were rendered in headless Chromium and compared element by element against the pre-change files: same day classes, same date labels, same body text, same order. No heading, landmark, contrast or focus surface moved, so the prior posture on those criteria carries over unmodified.
- **4.1.3 Status Messages (AA), newly satisfied.** Pressing a section button swaps the visible schedule. Previously that swap happened silently, so a screen reader user pressing "Tue / Thu AM" got no confirmation that the class days had changed under them. The days container is now `aria-live="polite"`. The attribute is set after the first render, deliberately, so the block is not read aloud on page load.
- **Weekday labels are now derived, not stored.** A label like "Mon Sep 14" is computed from the ISO date at render time. A date can no longer disagree with its own day name, which was a live risk while 68 of them were maintained by hand. Verified by setting one session to a Tuesday date and confirming the rendered label followed.
- **Dates are parsed as local time.** `new Date('2026-09-14')` parses as midnight UTC and renders as the previous day for any viewer west of Greenwich, which is every student in this course. The renderer splits the ISO string and constructs a local date instead.
- **Non-JS fallback added.** The days block previously showed the Mon/Wed schedule to a visitor without JavaScript, silently wrong for two of the three sections. It now carries a `<noscript>` block linking all three syllabi, each of which contains the full weekly table.
- **17 console 404s removed.** Every week page was requesting a `week-links.js` that did not exist. The stub resolves this. `competencies.js`, `resources.js` and `rubrics.js` remain missing and still 404 on the two Mastery OS pages; those hold real data and were left for the instructor rather than guessed at.

Data defect corrected in the same pass: the Class 1 syllabus module-overview table and key-dates table both listed Exam 4 as Wed Nov 18. The correct date is Mon Nov 16; Nov 18 is the rebuttals session. The weekly table on the same page was already correct, so the error was confined to the two summaries. Classes 2 and 3 were audited identically and are correct throughout.

## 12. Revision: module navigator, Hootie, Mastery OS data

**Files added:** `module-nav.js`, `hootie.js`, `section-sync.js`, `resources.js`, `rubrics.js`.
**Files modified:** `week-1.html` to `week-17.html`, `class1/2/3.html`, `bio004-course-calendar.html`, both `mastery-os-fall-2026*.html`.

### Module and week navigator

Replaces the flat strip of 17 week numbers, and adds week navigation to the section home pages, which previously had none.

| Criterion | Level | Achieved | Note |
|---|---|---|---|
| 1.4.1 Use of Color | A | Pass | Current week carries a gold ring AND an `aria-current`, AND a text line reading "You are in Week N of this module". Exam weeks are labelled "Exam N" in text, not signalled by colour. |
| 1.4.3 / 1.4.6 Contrast | AA / AAA | Pass | Every text pair measured with opacity folded in. All at or above 7:1. The module number chip was 5.37:1 at .62 opacity, AA only, and was raised to .78 for 9.70:1. |
| 2.1.1 Keyboard | A | Pass | Tablist with roving tabindex. Arrow Left and Right cycle, Home and End jump to the ends, focus follows selection. |
| 2.4.7 Focus Visible | AA | Pass | 3px gold outline with 2px offset on tabs and week links. |
| 4.1.2 Name, Role, Value | A | Pass | `role="tablist"` with `aria-label`, `role="tab"` with `aria-selected`, panel `role="tabpanel"` labelled by its tab. Each week link carries its own `aria-label` naming the exam and the changeover. |
| 2.3.3 Animation from Interactions | AAA | Pass | Hover lift and transitions disabled under `prefers-reduced-motion`. |

Week 4 belongs to two modules and is announced as "shared between Module 1 and Module 2" rather than being silently duplicated.

### Hootie the Knowfish

A grounded question answerer on the week pages, section home pages and calendar. It is not a language model. It answers only from the schedule, module and exam data on the page, and states plainly when a question is outside that scope rather than guessing at anatomy.

| Criterion | Level | Achieved | Note |
|---|---|---|---|
| 4.1.3 Status Messages | AA | Pass | Transcript is `role="log"` with `aria-live="polite"`, so replies are announced without moving focus. |
| 1.3.1 Info and Relationships | A | Pass | Panel is `role="dialog"` with `aria-label`. Text input has a visually hidden `<label for>`. Close button has an accessible name. |
| 2.1.1 Keyboard, 2.1.2 No Trap | A | Pass | Launcher is a real button with `aria-expanded`. Focus moves to the input on open and returns to the launcher on close. Escape closes. The panel is non-modal and does not trap focus. |
| 1.4.3 / 1.4.6 Contrast | AA / AAA | Pass | Nine text pairs measured. Lowest is 9.63:1. |
| 1.4.10 Reflow | AA | Pass | Panel width is `min(390px, 100vw - 36px)` and height is capped against the viewport, so it does not overflow small screens. |

Known limitation, recorded deliberately: Hootie cannot answer anatomy content questions. This is a scope decision, not a defect. The fallback names the notes packet, the week's Loops video and the Atlas, and suggests class or office hours. The entire answering surface is one function so it can be replaced later without touching the pages.

### Mastery OS

Both pages were loading `competencies.js`, which does not exist in the repo, so the app ran with zero competencies on every visit. They now load `competenciesfall2026.js`, the file that is present and the only one carrying the `general` body-system tag the grouping logic requires. `resources.js` and `rubrics.js` added as documented empty maps, removing three console 404s per page. No file was deleted.

`section-sync.js` makes the section chosen on `welcome.html` carry into Mastery OS, so a student is not asked the same question twice and cannot end up with two disagreeing schedules in one browser.

Outstanding: `icon.svg` is referenced as a favicon by both Mastery OS pages and does not exist. Cosmetic 404, no WCAG surface. No artwork was invented to close it.

## 11. Reviewer

Reviewed by: Dr. Sharilyn Rennie
Built and audited: August 8, 2026
Verification method (August 8 revision): headless Chromium render of all 17 week pages compared element by element against the pre-change files, section picker exercised across all three sections with persistence and `?sec=` override checked, non-JS render confirmed, console and network error capture on every page. Earlier method: headless Chromium render, computed WCAG relative luminance contrast audit across 19 text and background pairs, sequential Tab traversal, arrow-key tablist traversal, accessibility tree inspection, heading level extraction, and a data assertion suite comparing every exam date and session against the department lab master and the course lecture schedule.
