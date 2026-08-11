# BIO 004 Fall 2026, course walkthrough audit

Repo: `drsrennie-stack/new-build-bio4-solano`
Audited: August 10, 2026. Term opens August 17. **Seven days.**

Three passes: a student walking the real entry path, a structural inventory of all 474 pages, and a WCAG 2.2 audit of the 14 pages students actually use, plus a programmatic sweep of every HTML file in the repo.

---

## The one-sentence version

The material is excellent and there is far too much of it in front of the student at once. A first-week student takes five clicks to reach tonight's task and is given five different answers to what it is, two of the pages that answer it are last term's, and the page named after their own class does not link to their homework at all.

---

## What a student actually experiences

I had an agent walk the path as a student and answer one question: *it is Sunday night, what do I do before class tomorrow and where is it?*

Path: Canvas → Enter Course → pick section → skip the tour → Week 1 pill. Five clicks. At the end of them:

| Page | Says tonight's work is |
|---|---|
| `week-1.html` | Worksheet, then video. Then three lines later: "This is not a night-before task." |
| `week-1-hub.html` | Intro to Anatomy: 2 notes pages, worksheet, video, **4 lab sprints**, Recall Rx |
| `bio004-course-calendar.html` | "Course orientation video, syllabus and Canvas setup" (no orientation video exists on the site) |
| `how-this-course-works.html` | Videos, notes, RecallRx cards, packet drawings, on a **Monday-night-for-Tuesday** rhythm |
| `prework.html` | **June 15** |

And if the student follows the strongest instinct, clicking their own class, `class1.html` gives them a lab schedule with no pre-work link anywhere on it, tomorrow's row expanding to three "Coming soon," and an instruction to bring a structure list that nothing on the site links to.

### The nine things to fix before August 17

Ranked by how many students each one stops.

1. **`prework.html` is the Summer course, whole page.** Weeks run June 15 to August 3, days are Mon to Thu. It is called "Pre-Work," it is linked from `course-schedule.html` and about 20 concept pages, and every date on it is two months in the past.

2. **`how-this-course-works.html` is also the Summer build.** "Read this page once and the rhythm will make sense for all eight weeks." Night cards say Monday night prepare for Tuesday. A Mon/Wed student reading the page literally titled *How this course works* is told to prepare for a class they do not have, in a 17-week term the page calls eight weeks.

3. **`class1.html` / `class2.html` / `class3.html` have no pre-work, no week link, no "what to do."** They are 34-row lab calendars. The only exit is an injected module-nav block at the very bottom, and it renders **unstyled with two words fused**: "Where we areModules & weeks". The class pages define no `.card` and no `.n{display:block}` rule, both of which exist in `week-1.html`. That block is the student's only route to the week pages.

4. **`week-1.html` contradicts itself in three lines.** Heading: "Before class, do the pre-work." Note directly below: "This is not a night-before task." The "this" is meant to be retrieval. No student reads it that way.

5. **Structure lists are promised on the front door and linked from nowhere.** `canvas-enter.html` says "your weekly pages, study tools, lab structure lists, and schedule. You are never left hunting." Day one on `class1.html` says "Bring the Part C lab structure list." All five `module-N-structure-list.html` files exist. The only link to any of them in the entire repo is one line inside `m3-limb-vessels-worksheet.html`.

6. **"Not your section? Change it" cannot change your section.** `canvas-enter.html` sends the student to `welcome.html?tour=1`. That sets `tourDone=false` but never clears the saved pick, so `resolveSection()` reads localStorage, the picker stays hidden, and the student gets the same wrong section plus a tour they did not ask for. The file's own comment says the link "has to clear the saved pick." It does not.

7. **27 of 34 lab days on the class pages expand to three "Coming soon."** Only Aug 17, Nov 9, Nov 16 and Nov 18 have real text. A student clicking their second lab ever gets three empty fields and learns to stop clicking.

8. **`start-here.html` item 5 tells them to sign the device policy and never says where.** It links the syllabus anchor. The actual instruction ("the link is in the Week 1 module in Canvas") lives on `digital-device-policy.html`, which `start-here.html` does not link. No signature, no lab entry.

9. **`index.html` ships instructor tooling and a broken link to students.** "Instructor: Mastery OS test build · master schedule." `fall-2026-schedule.html` does not exist in the repo. `index.html` is the Pages root, so anyone who trims the URL lands there.

### Naming drift, which is cheap to fix and costs students real time

| Thing | Called |
|---|---|
| `bio004-spaced-recall.html` | Recall Rx, RecallRx, Spaced Recall, spaced retrieval |
| Section 2 | Morning (welcome, index, canvas-enter, dock, Mastery OS), Early (`start-here.html`, calendar switcher) |
| Loops | Three different URLs, one of them on a different domain, labelled "39 image loops" |
| Mastery OS | `mastery-os-fall-2026.html` everywhere except `week-1-hub.html`, which sends them to `mastery-os-redesign.html`, badged "Beta, in the build" |
| Hootie | "Hootie, the Know Fish" and "Hootie the Knowfish" |
| "Hub" | `week-N.html`, `week-N-hub.html`, and `class1.html` are all called the hub, by different pages |

Two "Week 1" pages exist, they are not linked to each other, and they disagree about Wednesday: the hub says Cell Anatomy, the schedule and calendar say Epithelial Tissues.

### Jargon fired before it is defined

On the pages students hit first, with no gloss anywhere on the page: **brain dump**, **InteDashboard** (twice on `start-here.html`), **iRAT / tRAT** (rendered on the calendar as the literal string `IRAT → TRAT · TBL`), **Mastery OS**, **Loops**, **Scholar Points**, **Success Sprint**, **structure list**, **lab sprint**, **DOK**. Only Hootie ever expands iRAT, and only if the student happens to type "TBL" at it.

---

## Redundancy

**474 HTML files. 122 of them (26%) cannot be reached from any live entry point. 81 have zero inbound links from any HTML or JS in the repo.**

| Metric | Value |
|---|---|
| Topic content pages | 299 across 21 topics, **14.2 pages per topic** |
| Unreachable pages | 122 (26%) |
| True orphans | 81 |
| Orphaned JS | 10 of 41 files, 244 KB, including **7 question banks holding 591 questions that nothing loads** |
| Unreferenced images, PDFs and CSVs | **678 of 1,057, 140.6 MB, 34% of the 409 MB repo** |
| Pages saying "Summer 2026" | 73, of which **56 are live and reachable from Fall pages** |
| Distinct student-facing tools | 44, in **12 redundant sets** |

### "The heart" is 19 pages

`heart.html` (2.0 MB) · `the-heart.html` · `heart-workbook` · `heart-study-guide` · `heart-lab-sprint` · `heart-concept-videos` · `heart-preview` · `m3-heart-notes` · `m3-heart-worksheet` · `slides-heart-anatomy` · `cardiac-conduction` · `cardiac-conduction-system` · `cardiac-conduction-workbook` · `cardiac-conduction-lab-sprint` · `cardiac-conduction-concept-videos` · `slides-cardiac-conduction` · `m3-conduction-notes` · `cardiac-electrophysiology` · `cardiac-electrophysiology-study-guide`

`heart.html` and `slides-heart-anatomy.html` are **byte-identical**, 2 MB stored twice. Muscle and bone are the same story at 33 pages each. Bone histology alone has six pages.

This is not an argument for deleting content. It is an argument that the student should never be shown the raw list. They should be handed the one page that is right for tonight, which is what `session-links.js` already knows and what the new Today page now does.

### Four Mastery OS builds, two of them fighting

`mastery-os-fall-2026.html` (dock, 70 inbound links) and `mastery-os-redesign.html` (linked from all 17 week hubs) **write the same localStorage keys**. They overwrite each other's progress. Plus `mastery-os-loop.html` and `mastery-os-hub-card.html`, both self-labelled beta, both orphaned.

Four spaced-recall apps: `bio004-spaced-recall.html`, `recall-rx-exam-prep.html` (identical app, different bank), `spaced-recall.html`, `spaced-recall-heart.html`, plus `recall-cards.html`.

**Eight JS files assign the same global**, `window.BIO004_COURSE_CONTENT`: `course-content.js` (1110 questions), `course-content-tagged.js` (2020), `recall-rx-cards.js` (594), `gap-cards.js` (35), `heart-cards.js` (319), and seven orphaned week banks. Whichever loads last wins.

### The Summer schedule is the fallback inside the Fall Mastery OS

`mastery-os-fall-2026.html:879`, the instructor build, and `mastery-os-redesign.html` all carry:

```js
var SCHEDULE = mosResolveSchedule() || {
  term:'Summer 2026', start:'2026-06-15', end:'2026-08-06', weeks:[ ...8 weeks... ]
```

If `schedule-fall2026.js` ever fails to resolve, a 17-week Fall course silently becomes an 8-week Summer one.

### All 26 lab sprints are Summer-branded and wired into the Fall hubs

Every `*-lab-sprint.html` carries `BIO 004 Human Anatomy, Summer 2026` in its hero, and every one is linked from `session-links.js` and a Fall `week-N-hub.html`. `lab-safety.html` too, which is week 1 day 1.

---

## Accessibility

Programmatic sweep, all 472 HTML files:

| Check | Result |
|---|---|
| Missing the iframe height-sender | **109 files (23%)** |
| Internal links without `target="_top"` | **241 of 3,076** |
| No skip link to `#main` | 297 (63%) |
| Inputs with no label | **439 of 811** |
| No `prefers-reduced-motion` guard | 71 (15%) |
| No focus style at all | 50 (11%) |
| Skipped heading level | 25 (5%) |
| `<html>` without `lang` | 6 |
| Images without `alt` | **0 of 848** |

Images are clean, which is the hard one. The rest are mechanical.

### The five that matter most

1. **The gold focus ring fails, globally, on the two biggest pages.** `#C9A14A` on white is **2.32:1** against a 3:1 floor. It is set with a global `:focus-visible` selector in `mastery-os-fall-2026.html` and `bio004-spaced-recall.html`, so it is the ring on every focusable element on both, plus `bio004-draw.html`, `week-1-hub.html`, and the dock launcher on all 13 light pages. `#6B1616` (11.5:1) and `#8B3A2E` (7.7:1) are already in use elsewhere in the repo. Keep gold only on navy, where it clears AAA. **One-line fix, six files.**

2. **Mastery OS runs a 12-second timer with no way to extend, pause or turn it off.** `DUR=12` per quiz question, auto-scoring wrong at zero. The escape room runs a 300-second version that calls `lose()` at expiry. This is a WCAG 2.2.1 Level A failure and it is the single most exclusionary thing on the site: a student with a motor or processing disability cannot pass a 12-second question. The Pomodoro on the same page already has a `paused` state. Copy it.

3. **`start-here.html`'s six checkboxes announce identically whether checked or not.** They are `<button aria-label="Mark done">` with no `aria-pressed`, and the done state lives only in CSS. A screen reader user cannot tell what they have completed, which is the entire purpose of that page. The progress counter is not a live region either.

4. **The `<h1>` accent colour is 2.08:1 on four pages.** `--terra:#8B1D1D` on `--navy-darkest:#08101F` in `.cover-title span`, on `index.html`, `start-here.html`, `class1.html` and `bio004-exam-modules.html`. `bio004-course-calendar.html` already solved this with `--terra-on-navy:#D98E77` at 7.32:1. Copy that variable across.

5. **Right and wrong are signalled by colour alone in both quiz engines.** Mastery OS marks correct with a green outline and wrong with `opacity:.4`. Spaced recall does it with border colour, and the fallback text says "The correct answer is highlighted above" while every option has already been set `disabled`, so most screen readers skip them entirely. The verdict block is injected into a container with no `aria-live`, so a student answers and hears silence.

### Two pages worth copying rather than fixing

- **`bio004-course-calendar.html` is the reference implementation.** Roving tabindex, Enter and Space, arrows plus Home/End/PageUp/PageDown, a real focus trap, Escape, focus return, `aria-current`, and the colour-only lab dot deliberately `aria-hidden` with the fact moved into the accessible name. There is a code comment explaining why. Nothing else on the site reaches that bar. Make it the template.
- **`canvas-enter.html` is the best-designed page cognitively.** One heading, one primary action, everything above AAA. It is the only page in the set with exactly one thing to do.

### Cognitive load, counted

The dock adds about 23 focusable elements to every page. On top of that:

| Page | Equal-weight choices | Primary action |
|---|---|---|
| `mastery-os-fall-2026.html` | **186 buttons**, 9-section sticky sub-nav | none |
| `week-1-hub.html` | 21 destinations | none |
| `week-1.html` | 13 links, 7 buttons | none |
| `start-here.html` | 12 links, 6 toggles | none |
| `index.html` | 10 destinations | none, and `.card.primary` is defined in CSS and used on zero elements |
| `canvas-enter.html` | 1 | yes |

The `welcome.html` guided tour is seven equal cards headed "The 7 things that carry you through this course," with a "0 of 7 explored" counter. A completion meter on orientation, before the course has started.

---

## What I built

**`today.html`.** One screen that answers "what do I do now," driven by the real date and the saved section. It holds no schedule data of its own: it reads `schedule-fall2026.js` and `session-links.js`, so changing a date or a link in those two files changes this page too.

It has seven states, all tested: before the term, the night before a class day, a class day, a gap day, an exam day, after the last day, and no section picked yet. It resolves per track, so Mon/Wed and Tue/Thu students see their own days.

The night-before state is the one that matters, and it enforces the order that has been getting lost:

1. Open the notes and the reading. They stay open.
2. Work the pre-work sheet against them.
3. **Now** watch the video. "It is the check, not the source."
4. Put the written sheet in your bag. Class opens with a brain dump on it.

One step is open at a time. The others are folded away, showing only a title and a one-line preview, so there is never a wall of cards. Every step says **Now**, **Later** or **Done** in words, so no state is carried by colour. Progress persists per date. Marking a step done moves focus to the next one.

Gap days do not show new intake. They show blind redraw first, then spaced recall, then the weakness dashboard, and rereading last, with a line saying why it is last.

First visit runs a four-line walkthrough that fades in one line at a time, then never appears again. `prefers-reduced-motion` shows all four at once.

An always-open word list defines the eight terms that were being fired before definition: pre-work, brain dump, Loops, TBL, structure list, lab sprint, spaced recall, lab practical.

Accessibility built in rather than retrofitted: skip link into a real `<main>`, one `<h1>`, real buttons throughout, `aria-expanded` on every disclosure, `aria-current="step"` on the live step, a polite live region announcing step changes, focus ring at 11.5:1 on light and 8.9:1 on navy, 44px targets, `scroll-padding-top`, no timers anywhere, and the height-sender posting all four message shapes already in use across this repo so it resizes whatever listener Canvas is running. Every internal link carries `target="_top"`. Verified with a headless browser across all seven states, at desktop and at 390px, with zero page errors and zero nested buttons.

### To wire it in

Put `today.html` beside `schedule-fall2026.js` and `session-links.js`, then point three things at it:

- `canvas-enter.html`'s Enter Course button
- the dock's first tile
- the three class hubs, at the top

That single change collapses the five-click path to one.

---

## Recommended order of work

### Before August 17, these are the ones that stop students

1. Point the front door at `today.html`.
2. Retire or rebuild `prework.html` and `how-this-course-works.html`. They are last term's course and they are currently the most authoritative-sounding pages on the site.
3. Add the missing `.card` and `.n{display:block}` rules to the three class pages so the module nav renders. Four lines of CSS.
4. Link the five structure lists from the week pages and the class hubs.
5. Fix "Not your section? Change it" so it clears the saved pick.
6. Fill or remove the 27 "Coming soon" lab days. Removing the caret is better than an empty disclosure.
7. Point `start-here.html` item 5 at `digital-device-policy.html`.
8. Remove the instructor row from `index.html` and delete the dead `fall-2026-schedule.html` link.

### Also before the term, cheap and high value

9. Change the gold focus ring to `#6B1616` on light backgrounds. Six files, one line each.
10. Copy `--terra-on-navy:#D98E77` into the four pages whose `<h1>` accent is at 2.08:1.
11. Give the Mastery OS timers a pause and an extend. This is a Level A failure and it is the one that excludes people outright.
12. Add `aria-pressed` to the `start-here.html` checkboxes and `role="status"` to the counter.
13. Settle the names: one spelling of Recall Rx, one name for section 2, one Loops URL, one Mastery OS.
14. Point `week-1-hub.html` at `mastery-os-fall-2026.html` instead of the beta redesign, and stop the two builds sharing localStorage keys.

### After the term opens, when there is time

15. Rebrand the 26 lab sprints and `lab-safety.html` from Summer 2026 to Fall 2026. They are wired into the Fall hubs already, only the hero line is wrong.
16. Replace the Summer 8-week fallback schedule inside the three Mastery OS builds with the Fall one.
17. Consolidate the four spaced-recall apps to one, and the four draw surfaces to one.
18. Resolve the eight-file collision on `window.BIO004_COURSE_CONTENT`.
19. Archive the 81 orphans and the 678 unreferenced assets into an `_archive/` folder rather than deleting. That is 140 MB and it makes every future search faster.
20. Give each of the 21 topics one canonical page and let the other artifacts be reached only from it. The content stays. The choosing stops being the student's job.

### Leave alone

- The depth of the notes, worksheets and structure lists. None of the above is an argument for less rigour. Every recommendation is about what is put in front of the student at any one moment, not what exists behind it.
- `bio004-course-calendar.html`. It is the best-built page in the repo. Use it as the template for everything else.

---

## Reviewer

Dr. Sharilyn Rennie
Professor of Anatomy and Physiology
Solano Community College
