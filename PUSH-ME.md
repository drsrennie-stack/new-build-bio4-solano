# Fall 2026 updates, ready to push

**Repo:** drsrennie-stack/Fall-2026-Anatomy
**Date:** August 8, 2026

Every file here is complete and ready to drop in. Nothing needs stitching.

---

## How to push

```bash
cd /path/to/Fall-2026-Anatomy
cp /path/to/fall2026-updates/*.html .
cp /path/to/fall2026-updates/*.js .
cp /path/to/fall2026-updates/compliance-notes.md .

git add -A
git commit -m "Schedule single source, module navigator, Canvas front door, Hootie"
git push
```

**Do not copy** `PUSH-ME.md`, `REUSE-INVENTORY.md`, `all-changes.diff`, or `schedule-audit-report.md` into the repo.

---

## Nine new files

| File | What it does |
|---|---|
| `canvas-home.html` | The Canvas iframe front door. Set up, then Enter Course. |
| `week-schedule.js` | Renders each week page's class-days block from the schedule data. |
| `module-nav.js` | Module and week navigator. |
| `hootie.js` | Hootie the Knowfish, one merged version. |
| `course-links.js` | Every course URL, in one place. |
| `section-sync.js` | Carries the section choice into Mastery OS. |
| `week-links.js`, `resources.js`, `rubrics.js` | Referenced but missing from the repo. Documented stubs. |

---

## 1. Schedule lives in one place

68 hardcoded dates across the week pages became one `BIO004_SESSIONS` block in `schedule-fall2026.js`. **To change a session, edit that one entry.** The day name is calculated from the date, so a date can no longer disagree with its own day name.

## 2. Exam 4 fixed in the Class 1 syllabus

Module overview and key dates both said **Wed Nov 18**. It is **Mon Nov 16**. The weekly table was already right. Classes 2 and 3 clean.

## 3. Module and week navigator

Five module tabs, weeks underneath marked Week, Exam N, or Changeover, and a gold ring on the week the course is actually in, from the real date.

**One thing to check.** Module ranges come from your syllabus. Week 7 has the same shape as week 4 for your Tue/Thu sections (Exam 2 Tuesday, Heart on Thursday, which is Module 3 content), but your syllabus does not list week 7 under Module 3, so I left it in Module 2. To change it, set Module 3's `weeks` to `[7,8,9,10]`.

## 4. Canvas front door

`canvas-home.html`. First visit gets "Let's set up your course" with the three section cards. Every visit after gets Enter Course, with their section stamped on it, going to their own hub.

The choice writes the same `bio004-section` key everything reads, so it settles the schedule, syllabus links, calendar and Mastery OS at once. Enter Course carries `target="_top"`. Height sender posts on load, resize and content change.

`localStorage` in a Canvas iframe is third-party storage and some browsers block it. Reads and writes are guarded and `?sec=mw` is an escape hatch, so a blocked browser shows setup again rather than breaking.

**To embed:** point the Canvas iframe at `canvas-home.html`. Optionally pass `?frameId=something` if your theme filters resize messages by id.

## 5. Hootie, merged

There were two Hooties. `welcome.html` knew the course (grading, TBLs, contacts, what to do when you are drowning). The week-page version knew the schedule (dates, modules, exam scope, rooms). Neither could do the other's job.

Now one weighted intent matcher over one answer bank, using your matcher and your copy, with live dates folded in.

The big gain: **the `struggle` intent**. A student typing "I am drowning and so far behind" used to get a refusal about anatomy content. They now get the Gap Finder, a 3-Day Cram, Study With Me, and the Success Sprint after Exam 1, ending with their actual next exam date.

He still refuses anatomy content and points at your notes packet, the Loops and the Atlas.

**`welcome.html` still has its own inline Hootie.** It works, so I left it. The shared one is now a superset of it. See `REUSE-INVENTORY.md`.

## 6. Mastery OS was running on zero competencies

Both pages loaded `competencies.js`, which does not exist. They now load `competenciesfall2026.js`. **196 competencies, 16 body systems.** Nothing deleted. `resources.js` and `rubrics.js` added as documented empty maps.

## 7. One section choice across the site

`section-sync.js` seeds Mastery OS from `bio004-section` and drops its cached `mos-schedule` when the section changes, because that cache outranks the section. The onboarding step arrives pre-answered.

---

## Verified before packaging

- All 17 week pages rendered and compared element by element against the pre-change files. Identical.
- Module navigator checked at simulated dates through the term, before it and after it, keyboard only.
- Hootie checked on 16 questions across all intents, both tie-break behaviour and refusals, for all three sections.
- Canvas front door checked in both states, on return visits, with storage blocked, and inside a real iframe for resize messages.
- Contrast measured with opacity folded in on the navigator, Hootie and the front door. All AAA.
- Console errors and failed requests captured on every page.

---

## Still open

1. `welcome.html` keeps its own inline Hootie. One duplicate left, and the swap is described in `REUSE-INVENTORY.md`.
2. `icon.svg` is referenced as the favicon by both Mastery OS pages and does not exist. Cosmetic 404. No artwork invented.
3. `week-1-mw.html` looks like an orphan, same family as the indexMW and indexTTH pages you flagged.
4. `week-links.js`, `resources.js` and `rubrics.js` are stubs waiting on your URLs and rubric text.
