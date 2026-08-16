# Accessibility compliance notes

**Project:** BIO 004 Human Anatomy, Fall 2026 site sweep
**Repo:** drsrennie-stack/new-build-bio4-solano, branch `fall-2026-sweep`
**Date:** August 11, 2026
**Reviewer:** Dr. Sharilyn Rennie

---

## 1. Files covered

This pass covered the files touched during the Fall 2026 audit sweep. Pages that were not edited
keep whatever compliance state they already had, and they are noted as still owing a review in
section 6.

**Created**

- `syllabus-schedule.js`, the module map and day-by-day tables in the three section syllabi
- `week-extras.js`, the lab and study block that now renders on all seventeen week pages
- `missing-figure.js`, the placeholder for figures whose image folders were never pushed
- `index.html`, rebuilt as a redirect to the single course home

**Edited**

- `week-1.html` through `week-17.html`
- `syllabus-class1.html`, `syllabus-class2.html`, `syllabus-class3.html`, `fall-2026-syllabus.html`
- `bio004-master-schedule-fall2026.html`, `bio004-course-calendar.html`
- `mastery-os-fall-2026.html`, `mastery-os-fall-2026-instructor.html`
- `bio004-dock.js`, `schedule-fall2026.js`, `session-links.js`, `slide-modal.js`,
  `course-content-tagged.js`, `loops-index.js`
- `404.html`, `histology-escape-room-lab-kit.html`, `histology-escape-room_1.html`
- 310 files modified in total, including the em dash and italics sweeps
- Second pass, August 11: the three section syllabi rewritten for voice and policy;
  `fall-2026-syllabus.html` retired to a section-aware redirect

---

## 2. WCAG version and level achieved

Target is WCAG 2.2 Level AA as the floor, Level AAA wherever it was reachable without changing
the palette.

| Criterion | Level | Status on the changed files |
|---|---|---|
| 1.1.1 Non-text content | A | Pass. `missing-figure.js` carries the original `alt` text into the placeholder as an `aria-label` on a `role="img"` element, so a screen reader still hears what the figure was meant to show. |
| 1.3.1 Info and relationships | A | Pass. The lab block renders a real `h2` inside the existing card, and its entries are `a` elements with text, not click handlers on divs. |
| 1.3.2 Meaningful sequence | A | Pass. The lab block sits between the class days card and the graded card, which is the order a student works in. |
| 1.4.3 Contrast, minimum | AA | Pass, see section 3. |
| 1.4.6 Contrast, enhanced | AAA | Pass on every measured pair. |
| 1.4.10 Reflow | AA | **Fixed.** `mastery-os-fall-2026.html` had `.g2.g3.g4` where it needed `.g2,.g3,.g4`. The mobile breakpoint matched nothing, so two, three, and four column grids never collapsed on a narrow screen. Repaired in the student build and the instructor build. |
| 1.4.11 Non-text contrast | AA | **Fixed.** The brushed gold focus ring measured 2.77:1 against off-white, below the 3:1 floor. On the rebuilt `index.html` it is now `#8B3A2E` at 7.33:1. |
| 1.4.12 Text spacing | AA | Pass. All new copy sits in flowed paragraphs with no fixed heights. |
| 2.1.1 Keyboard | A | Pass, see section 4. |
| 2.4.1 Bypass blocks | A | Pass. Skip links on the worksheet and week pages were not disturbed. |
| 2.4.7 Focus visible | AA | Pass. New links inherit the page focus style. The redirect page has its own visible ring. |
| 2.4.11 Focus not obscured, minimum | AA (2.2) | Pass. The dock is fixed bottom left and does not cover the new lab block. |
| 2.4.13 Focus appearance | AAA (2.2) | Pass on the redirect page, 3px solid ring with offset. |
| 3.2.3 Consistent navigation | AA | **Improved.** One week system instead of two, one front door instead of five, one Mastery OS instead of two, and the dock is now identical on every page. |
| 3.2.4 Consistent identification | AA | **Fixed.** The same content was labelled Module 4 in one place and Module 5 in another after the exam-scope decision. Module labels now agree across the syllabi, the exam-module page, seven week pages, and five study pages. |
| 3.3.1 Error identification, policy clarity | A | **Fixed.** Attendance stated two incompatible rules (90% of a session, and a 20-minute threshold). One rule now stands. |
| 3.3.2 Labels or instructions | A | **Improved.** The week page now tells a student when it is guessing at their class instead of silently showing Class 1. The retired generic syllabus now names all three sections with their CRNs rather than sending everyone to one document. |
| 1.3.1 Info and relationships, schedule tables | A | Pass. The generated tables keep `caption`, `th scope="col"`, and the `rowspan` week cell, so a screen reader still announces which week a row belongs to. Verified on all three sections under jsdom. |
| 2.4.6 Headings and labels | AA | **Improved.** Section headings no longer end in a full stop, which a screen reader reads aloud as a sentence break in the middle of a navigation list. |
| 4.1.1 Parsing, progressive enhancement | n/a | The generated tables replace a static table that is valid on its own. If the script fails or is blocked, a student still sees a complete schedule rather than an empty box. |
| 4.1.2 Name, role, value | A | Pass. `role="status"` on the section notice, `role="img"` with an accessible name on the figure placeholder, `aria-hidden` on the decorative arrow in each lab block link. |
| 4.1.3 Status messages | AA | Pass. `role="status"` is polite, so the notice is announced without interrupting. |

A second selector bug was repaired in the same pass: `.field input.field textarea` should have
been `.field input,.field textarea`. Every form field in Mastery OS was rendering unstyled,
including its focus treatment, which is a 2.4.7 failure as well as a visual one.

---

## 3. Colour contrast audit

Measured with the WCAG relative luminance formula. Backgrounds are off-white `#FAFAF9`, card
white `#FFFFFF`, and the week page hero navy `#08101F`.

| Text or element | Foreground | Background | Ratio | Level |
|---|---|---|---|---|
| Body copy, notes, lab block links | `#1E3D4C` | `#FAFAF9` | 11.01:1 | AAA |
| Body copy on cards | `#1E3D4C` | `#FFFFFF` | 11.49:1 | AAA |
| Missing-figure placeholder text | `#1E3D4C` | `#FAFAF9` | 11.01:1 | AAA |
| Section notice text on the hero | `#FFFFFF` | `#08101F` | 19.02:1 | AAA |
| Section notice gold left border, non-text | `#DCB45C` | `#08101F` | 9.71:1 | Pass, needs 3:1 |
| Redirect page link | `#8B3A2E` | `#FAFAF9` | 7.33:1 | AAA |
| Redirect page focus ring, non-text | `#8B3A2E` | `#FAFAF9` | 7.33:1 | Pass |
| Redirect page heading and body | `#1E3D4C` | `#FAFAF9` | 11.01:1 | AAA |

One pair failed and was changed rather than accepted: brushed gold `#B8924A` on off-white at
2.77:1. Gold is still used for focus and accent on dark backgrounds, where it measures 9.71:1.

---

## 4. Keyboard navigation verified

Walked with Tab, Shift Tab, Enter, and Escape.

- **Week page:** skip link, then the three section buttons, then the three pre-work links, then
  the day cards, then the new lab block links in reading order, then the graded chips, then the
  quick links, then the dock launcher. No trap. Nothing reachable by mouse only.
- **Lab block:** every entry is a real anchor. Focus order matches visual order, which is lab
  sprints, then notes, then practice questions, then slides, then the study session link.
- **Section notice:** not focusable, correct for a status message. It is announced rather than
  being something a student has to go and find.
- **Dock:** re-verified after the tile changes. Escape closes, focus returns to the launcher, Tab
  is trapped while open, arrow keys walk the tiles, `aria-expanded` tracks state.
- **Redirect page:** the single link is reachable with a visible ring. The page also redirects by
  script and by meta refresh, so a keyboard user never has to interact with it.
- **Missing-figure placeholder:** not focusable, correct for a non-interactive substitute.

---

## 5. Screen reader testing

Verified by DOM inspection under jsdom and by reading the accessibility tree for the changed
regions. All seventeen week pages were rendered and inspected programmatically.

Confirmed:

- Landmarks intact on the week pages: `main#main`, the `nav` labelled "Week navigation", and the
  footer.
- The lab block heading is a real `h2` in sequence under the page `h1`, so heading navigation
  lands on it.
- `role="status"` on the section notice.
- `role="img"` with `aria-label` on the figure placeholder.
- `aria-hidden="true"` on the decorative arrow glyph in each lab block link, so the accessible
  name is the structure name rather than the name of the triangle character.

**Owed:** a listening pass with VoiceOver on Safari and with NVDA on Windows, on one week page
and one worksheet. Nothing here is expected to fail, but these notes should not claim a
verification that has not happened.

---

## 6. Known limitations and remediation plan

| Limitation | Impact | Plan |
|---|---|---|
| Four image folders were never pushed: `blood-img`, `musc-img`, `musc-tissue-img`, and part of `lym-img`. 104 figures across six pages. | Students see a labelled placeholder instead of the figure. The alt text still describes it, so nothing is silently missing, but the teaching image is absent. | Push the four folders. Then delete `missing-figure.js` and its six script tags. |
| Screen reader listening pass not yet done. | Unverified claim risk only. | One VoiceOver pass and one NVDA pass before the term opens. |
| The em dash and italics sweeps touched files that had no other review. | Those pages now follow the house style rules but have not had a full accessibility review. | Review each as it is next touched. |
| Summer 2026 pages still carry the old contradictory attendance rule. | Those pages are not Fall-facing, but they are still reachable. | One edit each, if the instructor wants them matched to the Fall rule. |
| 63 pages still have no inbound link from anywhere. | Not an accessibility failure, but content a student cannot reach is content a student cannot use. | The case deep dives now have a dock route. The study guides and the workbook family still do not, and that is a curriculum decision rather than a technical one. |
| `font-style: italic` was globally neutralised to satisfy the no-italics rule. | Some captions and citations that relied on italics for emphasis now rely on position and wording alone. | Spot check captions on the image-heavy pages and add a non-italic emphasis treatment where one is genuinely needed. |

---

## 7. Reviewer

Dr. Sharilyn Rennie
BIO 004 Human Anatomy, Solano Community College
