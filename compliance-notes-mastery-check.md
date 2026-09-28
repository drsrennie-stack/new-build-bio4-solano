# Accessibility compliance notes: Mastery Check (check, find the gap, fix it, prove it)

**Project:** BIO 004 Human Anatomy, Fall 2026, Solano Community College
**Files covered:** `bio004-mastery-check.html` (the walk-through page, built to sit in a Canvas iframe), `bio004-mastery-items.js` (Module 2 exam-style items, notes links, related-competency map, group repair problems, brain dump prompts), and the new entry in `bio004-readiness.html`
**Date:** September 28, 2026
**Reviewer:** Dr. Sharilyn Rennie (build, automated checks and an independent accuracy review of all 36 authored items by Claude)

## 1. What this is

One page runs the whole class routine, and students can repeat it on any day. First they pick their class, which sets their exam dates. Then they pick a module. Modules open on the course schedule (`schedule-fall2026.js`) and stay open all semester, and a module that has not opened yet shows as locked. The five steps are:

1. **Check.** A closed-notes check of 10, 15, 20 or 30 questions, built fresh on every run. Students can build as many as they like, and questions they have already seen are used last. Each answer is marked Sure, Unsure or Guess. Results show accuracy, calibration by confidence, and red flags (sure and wrong), plus the reasoning for every question.
2. **Find the gap.** A ranked table covers every competency tested today, with each one tagged Red flag, Gap, Fragile or Solid. The page preselects the student's three weakest competencies, and the student can change them. The student then writes each gap as an "I cannot..." sentence, and sentences that name a question number instead of an idea are turned back. Feedback for each gap covers what the gap type means, the competency statement, the question that exposed it, the related competencies that usually break with it (each marked as confirmed, not tested, or ruled out by today's results), and numbered repair steps with links to the matching notes section, drawing sheet, worksheet, concept video and recall cards. When two or more gaps fall in one region, the page names that pattern.
3. **Fix it.** Students first choose how they are doing this step: with a group in class, or on their own at home or anywhere outside class (a labeled radio pair; the choice is remembered). The group path tells students to get into their groups. The page shows the whiteboard repair problems that match the student's gaps (build, draw, explain, point), each with a "you are done when" criterion, and gives a box to write the corrected idea for each gap. The on-your-own path gives a six-step routine using the notes, concept videos, drawing sheets and worksheets, a card of links for each of the student's gaps, and the same repair problems done on paper. In Prove It, students working alone get a self-explanation step in place of the team answers, and their results and repair plan leave out the team score.
4. **Prove it.** A new set of questions targets the three gaps and the competencies next to them, skipping questions already seen when new ones remain. Students answer alone, lock their answers, agree on team answers, and then reveal. A before-and-after table gives a verdict for each gap.
5. **Retrieval finish.** Students write a brain dump by area. Then the module's competency checklist opens, grouped by system, and they tick what they could do from memory.

A progress table shows one row per day for the module. The repair plan opens in a new tab, ready to print or save as a PDF. It lists the checks, calibration, every red flag with the correct answer and the reason, the three gaps with repair steps and full links, the Prove It result, what is left unticked on the checklist, and progress across days.

The questions come from the course recall bank (`course-content.js`), joined to the fall competencies through `card-competency-map.js` and `card-competency-fine.js`. Only cards tied to exactly one competency are used, so a miss is always charged to the right competency. The 36 authored Module 2 items in `bio004-mastery-items.js` are added to that. Module 2 therefore has 175 questions across its 30 competencies, all skeletal: bone tissue, axial, appendicular and joints. Modules 1, 3, 4 and 5 work too. They use the recall bank for questions and each topic's lecture page for notes links, and they get a generic repair problem for each gap.

## 2. WCAG version and target level

WCAG 2.2 Level AA is met on every criterion tested. Every text pair also meets AAA contrast (7:1 or better), except locked module text, which is a disabled control and is exempt.

## 3. Color contrast audit

| Text / background | Ratio | Result |
|---|---|---|
| Navy #0B1530 on white | 18.04:1 | AAA |
| Navy on off-white #FAFAF9 | 17.27:1 | AAA |
| Muted #4E5464 on white | 7.56:1 | AAA |
| Rust-dark #6B2A20 headings on white | 10.62:1 | AAA |
| Rust #8B3A2E links on white | 7.66:1 | AAA |
| White on rust buttons | 7.66:1 | AAA |
| Navy on gold buttons | 7.46:1 | AAA |
| White on navy method panel | 18.04:1 | AAA |
| Straw #E9D6A6 eyebrow on navy | 12.57:1 | AAA |
| Gold-text #6E5018 Fragile tag on white | 7.44:1 | AAA |
| Navy on navy tint (completed step) | 15.65:1 | AAA |
| Rust-dark and navy on red-flag tint #F7EEEC | 9.3:1 and 15.8:1 | AAA |
| Locked gray #5F6473 on #F3F3F2 | about 5.3:1 | AA (disabled, exempt) |

State is never shown by color alone. Steps carry a text status (Ready, Done today, Opens after the step before it). Interactive state colors follow the course system: locked is gray with a dashed border, open is brushed gold, and completed is navy on navy tint, never green. Right and wrong answers carry text labels ("correct answer", "your answer") along with solid or dashed outlines. Status tags are words.

## 4. Keyboard navigation

Everything can be reached and operated by keyboard. The tab order runs: skip link, class select, module radios, step buttons, length pills, then each question's answer radios and confidence radios. After that come submit, the reasoning disclosures (native `details`/`summary`), the gap checkboxes and textareas, the team answer selects, the reveal button, the checklist checkboxes, and finally the repair plan and clear buttons. Focus moves to the new heading whenever a step or results view opens. A 3px rust focus ring is visible on every control. The clear-data button uses a two-press confirm instead of a browser dialog.

## 5. Screen reader and structure

The page has a single h1 and h2 and h3 headings in order. The header, main and nav landmarks are present, and the nav is labeled "Mastery check steps". A skip link goes to main. Each question is a `fieldset` with a legend ("Question n of N"). Answers are real radio inputs in labels, and confidence is a second radio group with its own legend ("How sure are you?"). Every textarea and select has a `label for`. The step view, the module info line and all status messages are `aria-live`, and validation messages use `role="alert"` and name the unanswered questions. Links that open a new tab say so to screen readers. Automated check: axe-core 4.x (wcag2a, wcag2aa, wcag21aa, wcag22aa) found 0 violations on each of the eight views (setup, exam, results, gap, fix, team lock, prove results, retrieval finish) and on the on-your-own Fix it view. Tables that scroll sideways on phones are keyboard-focusable regions with an accessible name. A full scripted run at 390px and 900px widths checked the whole flow, persistence across reload, Module 1 fallback, and the repair plan window. No console errors came up, apart from Google Fonts being unreachable in the test sandbox. The page falls back to system fonts.

## 6. Known limitations and remediation plan

- Answers are in the page source, as with every self-grading tool in the course. This is practice, not a graded assessment.
- Work saves only in the student's browser (localStorage key `bio004-mastery-v1`), so a different device starts fresh. The repair plan PDF is the record that travels. Names are typed only for the printed plan and are never stored.
- Inside the Canvas iframe, the repair plan opens in a new tab. If the browser blocks that, the plan downloads as an HTML file, and the page tells the student to open it and print.
- Links to notes, drawing sheets, worksheets and videos open in a new tab (`target="_blank" rel="noopener"`), so a student in the middle of the walk-through does not lose their place in the iframe. The logo link uses `target="_top"`.
- Module 2 has the full depth: authored items with a reason for every wrong option, a map of related gaps, and whiteboard repair problems. Other modules use recall-card questions, which carry one explanation instead of a reason for each option, and they get generic repair problems. To give another module the same depth, add a `B.modules[n]` block to `bio004-mastery-items.js`.
- Recall cards tagged to more than one competency are left out of the pool, so each miss is charged to one competency.
- Several Module 3 to 5 competencies have no single-competency card yet (11, 10 and 12 respectively). They show as "Not tested yet" until items are added.
- Reduced motion is respected. The card lift and transitions are removed under `prefers-reduced-motion`.

## 7. Reviewer

Dr. Sharilyn Rennie. The build, the automated accessibility checks and an independent accuracy review of the Module 2 items were done by Claude. The review found 0 wrong keys and fixed 3 explanations, 5 related-gap notes and 3 repair-problem instructions.
