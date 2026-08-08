# BIO 004 Fall 2026, schedule audit and extraction

**Repo:** drsrennie-stack/Fall-2026-Anatomy
**Branch:** `schedule-extraction` (4 commits, nothing pushed)
**Date:** August 8, 2026

---

## The short version

Your repo was in better shape than it felt. I audited every date in every file against the exam dates in `schedule-fall2026.js` and against the 2026 calendar. Out of roughly 500 date strings, **there were three real defects**, and one of them was only cosmetic.

The reason fall feels like a rebuild is not that the content is wrong. It is that the schedule was written down in 30 places, so any change to it is a 30-file change. That is now fixed for the week pages.

---

## What I found

### 1. Exam 4 wrong in the Class 1 syllabus, two places (fixed)

`syllabus-class1.html` listed Exam 4 as **Wed Nov 18** in both the module overview table and the key dates table. The correct date is **Mon Nov 16**. Nov 18 is the rebuttals session.

The weekly schedule table on the same page had it right. So the two summary tables are the ones that missed the Monday anomaly, which is exactly the failure mode you would predict: the anomaly got recorded once, in the detailed table, and the summaries were written from the normal pattern.

Classes 2 and 3 were audited the same way and are correct in every table.

### 2. Closure name disagreed with itself (fixed)

`schedule-fall2026.js` called Oct 13 "Faculty Development". The week pages called it "Professional Development". Your wording is Professional Development, so the schedule file was changed to match.

### 3. Four JavaScript files referenced but not in the repo

| File | Loaded by | Effect |
|---|---|---|
| `week-links.js` | all 17 week pages | 404 on every week page. Concept lecture and Guided worksheet buttons fall through to "Coming soon". |
| `competencies.js` | both Mastery OS pages | 404. Mastery OS is running with no competency data. |
| `resources.js` | both Mastery OS pages | 404. |
| `rubrics.js` | both Mastery OS pages | 404. |

I added `week-links.js` as a documented stub with all 17 weeks empty, so the 404s stop and there is an obvious place to paste the URLs. Behaviour is otherwise unchanged. I did **not** stub the other three, because they hold real data and guessing at it would be worse than the 404.

### 4. Two competencies files, neither named what the pages ask for

You have `competencies-fall2026.js` and `competenciesfall2026.js`. Both define `window.BIO004_COMPETENCIES`. The pages load `competencies.js`, which is neither.

I diffed them. They are **identical in every one of their 196 entries except one thing**: the non-hyphenated file adds a `general` field to every entry. `competenciesfall2026.js` is the superset.

Recommendation: rename `competenciesfall2026.js` to `competencies.js` and delete the hyphenated one. I left this for you because it deletes a file.

### 5. What was already correct

Worth saying, because it is most of the repo:

- All 68 day entries across the 17 week pages: every date, every weekday name, every closure, every exam placement. Zero errors.
- Every Mon/Wed and Tue/Thu in the term from Aug 17 to Dec 11 is accounted for. No gaps, no duplicates.
- The Nov 16 Monday anomaly is correct on the week pages, the master schedule, the exam-modules page, `class1.html`, the prep sequence page and Mastery OS.
- Class 2 and Class 3 syllabi: clean throughout.
- The section picker works. See below.

---

## Your question about the section popup

You already built it, and it works. I tested it in a browser.

`welcome.html` is the chooser. It writes `localStorage['bio004-section']` as `mw`, `tr-am` or `tr-eve`. Every week page reads that key, shows the matching day blocks, and repoints the syllabus and hub links to the right section. There is also a `?sec=` URL override and a reset flow.

Verified working: switching sections, the choice persisting across pages, the URL override beating the saved choice.

**Three places it is not wired**, which is probably what made it feel absent:

1. `bio004-course-calendar.html` has the picker buttons and reads the key, but the page has no `data-track` elements at all. The buttons render and do nothing.
2. `fall-2026-schedule-mw.html` and `fall-2026-schedule-tr.html` have `data-track` blocks but never read the saved key, so they ignore the student's choice.
3. Mastery OS uses a separate key, `mos-section`, and never reads `bio004-section`. A student picks their section on welcome, then Mastery OS asks again.

Unifying on the key you already have is the fix. I have not touched these; say the word and it is a small change.

---

## What changed

Four commits on `schedule-extraction`. Nothing pushed.

### `aeb0569` One source of truth for the week page dates

- `schedule-fall2026.js` gains `BIO004_SESSIONS`: all 68 sessions across both tracks, each with an ISO date, a kind (`class`, `exam`, `off`) and its content.
- New `week-schedule.js` renders the class-days block from that data.
- All 17 week pages now carry `data-week-days="N"` and load the two scripts. Their hardcoded day blocks are gone.

Hardcoded dates in the week pages: **68 before, 1 after**. The one remaining is a prose sentence in `week-14.html` explaining the Monday, which reads better as prose.

Two things this buys beyond the edit cost:

- **Weekday labels are derived, not stored.** "Mon Sep 14" is computed from the date at render time. A date can no longer disagree with its own day name. I proved this by setting one session to a Tuesday and watching the label follow.
- **Dates parse as local time.** `new Date('2026-09-14')` is midnight UTC, which renders as Sep 13 for everyone in California. The renderer avoids this.

### `da312d4` Exam 4 fix in the Class 1 syllabus

### `ff83c19` `week-links.js` stub

### `97eb42b` Compliance notes

Added a section 11 covering this pass, including one criterion that is **newly satisfied**: 4.1.3 Status Messages. Pressing a section button used to swap the schedule silently, giving a screen reader user no confirmation that their class days had changed. The days container is now `aria-live="polite"`, set after first render so it does not read aloud on page load.

Also added a `<noscript>` fallback. Previously a visitor without JavaScript saw the Mon/Wed schedule, silently wrong for two of three sections. Now they get links to all three syllabi.

---

## How it was verified

- All 17 week pages rendered in headless Chromium and compared **element by element** against the pre-change files: day classes, date labels, body text, order. 17 of 17 identical.
- Section picker exercised across all three sections, with persistence across navigation and `?sec=` override.
- Non-JS render confirmed.
- Console errors and failed requests captured on every page.
- Every date in every file checked against the 2026 calendar for weekday correctness, against the closure list, and against the canonical exam dates per section.

---

## What I did not touch, and why

| Item | Why |
|---|---|
| The three syllabi's weekly tables | They are correct. Wiring them to the data file is a bigger change and you asked to review first. |
| `bio004-master-schedule-fall2026.html`, `schedule-reconciliation.html` | These are schedule documents. Being date-dense is their job. |
| `competencies.js` / `resources.js` / `rubrics.js` | Real data I do not have. Guessing would be worse than the 404. |
| The two competencies files | Resolving them deletes a file. Your call. |
| `week-1-mw.html` | An orphan. No `data-week-days`, no section picker wiring, superseded by `week-1.html`. Probably deletable, same family as the indexMW/indexTTH orphans you already flagged. |
| The three unwired picker pages | Described above. Small change, but a separate one. |

---

## Answering the original question

Reconstructing the course from summer would cost more than it saves. Summer was one section, 8 weeks, Mon through Thu. Fall is three sections on two day-tracks across 16 weeks, reorganized into modules, on a department-governed lab schedule. That is a different course shape, not a schedule variant, and the fall repo already contains all of that work.

The thing that made it feel like a rebuild was the duplication, and for the week pages that is now gone. Next term, changing the schedule means editing one file.
