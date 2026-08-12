# What changed, and what to check before you push

Three files. Drop them into new-build-bio4-solano, overwriting in place.

- `today.html`          replaces the existing file
- `bio004-dock.js`      replaces the existing file
- `bio004-reading-mode.js`  new file, must sit beside the dock

Nothing else in the repo is touched. No content was edited, moved or deleted.

---

## 1. today.html now opens on today, and lets students move

- A day strip sits at the top showing your class days for that week, with today already selected. No choice to make on arrival.
- Clicking Wednesday shows Wednesday laid out the same way, framed as getting ahead rather than as work that is due. "Back to today" is always one click.
- Earlier week and Later week browse the strip without changing the day being shown, so a student can look without losing their place.
- The day is written into the address as `?day=2026-08-19`, so a day can be linked or reloaded. It is never stored, so tomorrow still opens on tomorrow.

## 2. Everything for this day

A panel underneath the guided steps lists the complete material for whichever day is showing: what happens in class, the pre-work sheet, notes, workbooks, concept videos, lab sprints and slides.

It comes straight from `session-links.js`, keyed by date, which is the same source the schedule page reads. If a page is not on the schedule for that day it does not appear.

**Worth confirming:** you said today.html was pulling in pages that should not have been there. I read that as the day's material needing to come from the schedule, so that is what this panel does. The guided steps above it still offer the structure list, the atlas and Mastery OS, because those are your own day-type sequence rather than day-specific material. If those were the pages you meant, say so and I will move them out of the steps into a separate tools row.

## 3. today.html now has the dock

It did not before. A student who landed there could reach the day's material but could not get back to anything else.

## 4. Today is now the first tile in the dock

Reachable from 460 pages. It was previously linked from nowhere in the repo.

## 5. The reading format, on by default

Long pages now open as sections rather than one continuous document, with a contents list, a per-section time estimate and a page search.

Measured, on the real pages:

| Page | Before | After |
|---|---|---|
| Module 4 packet | 111,241px | 8,075px |
| Module 5 packet | 108,999px | 7,955px |
| Module 1 packet | 80,114px | 6,302px |
| Your syllabus | 22,259px | 5,786px |
| Week 1 notes | 20,161px | 4,517px |
| Module 4 structure list | 16,253px | 4,010px |

It runs on long content pages and leaves slide decks, timers, drawing tools, Mastery OS, the escape room and today.html alone.

### Nothing is hidden. This was the design constraint, and it is tested.

- The contents list names **every** section, open or closed, with the time each one takes.
- "Open everything" is always visible, and the choice sticks on every page from then on.
- A page search opens every section that matches, so a closed section can never keep a student from finding something.
- Find in page still reaches closed sections in browsers that support `hidden="until-found"`.
- Any existing `#anchor` opens the section it points at, so your packet contents lists still work.
- Printing opens everything automatically.

The wording never names a condition or a category. It says "Reading format" and "Show everything, always", and the contents list says in plain text: "Every section on the page is listed here, open or not. Nothing on this page is hidden from you."

---

## Two pre-existing bugs, unrelated to this change

Both were already broken before I touched anything:

- `atlas-coloring-book.html` throws `SyntaxError: missing ) after argument list` on load
- `bio004-room-map-timer.html` throws the same

Their JavaScript does not run at all. Worth fixing before the term starts.

---

## To take the reading format back off

Delete the `loadReadingMode` block at the bottom of `bio004-dock.js`. The course returns to exactly what it was.

To exclude one page, add `data-no-reading-mode` to its `<body>` tag.
