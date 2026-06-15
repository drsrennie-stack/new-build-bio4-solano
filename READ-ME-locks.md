# BIO 004 — Week locks + scholar-points note

Date: June 15, 2026

## What changed

1. **Syllabus scholar-points box.** Added a line to the Path B "Community hosting" card:
   hosting a session earns the host **3 hours** (set up and hosting); attendees earn **1 hour per hour attended (1 for 1)**.

2. **Week date locks.** Each week opens at **12:01 AM Pacific on the Sunday before its Monday**:

   | Week | Opens |
   |------|-------|
   | 1 | Open now |
   | 2 | Sun Jun 21 |
   | 3 | Sun Jun 28 |
   | 4 | Sun Jul 5 |
   | 5 | Sun Jul 12 |
   | 6 | Sun Jul 19 |
   | 7 | Sun Jul 26 |
   | 8 | Sun Aug 2 |

   - **index.html**: future-week cards show a locked state (gray dashed border, lock flag, "Opens Sun, Jun 21" instead of a working link). If a student is bounced from a locked week, a banner explains when it opens.
   - **course-lock.js**: the gate. Pasted into every weekly page, it reads the week number from the file name and, if that week is not open yet, sends the visitor to the course home before the page renders.

## Files in this bundle (drop into the repo root and push)

- `index.html`
- `bio004-summer-2026-syllabus.html`
- `course-lock.js` (new file)
- `week-2.html` … `week-8.html`
- `week-2-lab-sprints.html` … `week-8-lab-sprints.html`

## To finish the lock on the hub pages

The gate is already in the 14 week landing and lab-sprint pages. When you push the
`week-N-hub.html` pages (currently in your other working session, not yet in the repo),
add this **one line as the first tag inside `<head>`** of each so they lock too:

```html
<script src="course-lock.js"></script>
```

The script keys off the file name, so `week-2-hub.html` is locked automatically once that line is in it.

## Honest limit on "back doors"

This is a static GitHub Pages site, so the lock is client-side. It stops normal navigation,
the index cards, and direct URL visits for anyone using a browser normally. It cannot stop a
determined person who disables JavaScript or reads the page source.

Also note: the individual **topic pages** (for example `bone-histology.html`) are named by topic,
not by week, so the file-name gate does not cover them. A student who already knows a specific
topic-page URL could still open it directly. If you want those locked too, I can derive a
week-by-week page map from your week pages and extend the gate, but that needs your confirmation
first so we do not accidentally lock a page a current week still needs.

True, unbypassable gating requires sign-in (for example, delivering through Canvas).

## Note
`index.html` still references `course-tour.js` and links to `week-1-hub.html` … `week-8-hub.html`.
Make sure those files are also in the repo, or those links/scripts will 404.
