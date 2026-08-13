# Major adjustments batch, August 13

68 files. Every one is an edit to the file already in new-build-bio4-solano, so drop them at the repo root and overwrite in place. Nothing was added or removed from the repo.

## 1. The workbook leak is closed, in all three places

Your evolved today.html was built from my first version, from before we decided workbooks stay unreachable, so the exclusion came back out. It was showing workbooks in the pre-work step, in the Everything panel, and in the new shared day card, which also put them on the course calendar.

All three now skip the workbooks array, and each spot carries a comment saying the exclusion has already been reverted once by accident, so it does not happen a third time. Verified in a browser: zero workbook links on today.html with every step expanded, zero on the calendar.

Files: today.html, bio004-day-card.js

## 2. The legacy cluster is fixed, one pass

The 31 pages where keyboard focus was invisible (the "the-" deep dives, guided maps, and friends) each gained one appended style block: a visible terra focus ring at 8.9:1 contrast. Nothing in their existing CSS was rewritten, the block just wins. The 3 pages with real animation and no reduced-motion guard (myology, guided GI map, guided renal map) gained the guard.

One correction to my earlier audit: it claimed 115 pages had weak reduced-motion guards. Rechecked against the actual media blocks, those guards were fine. Only these 3 needed it.

Files: 34 pages, each with a small appended style block

## 3. Skip links now come from the dock

About 70 pages had no skip link. Instead of editing 70 files, bio004-dock.js now prepends one on any page that lacks its own, pointing at the page's main content. Pages that already have a skip link are left alone, and any page you build in the future gets one for free.

File: bio004-dock.js

## 4. Lab sprint breadcrumbs now tell the truth

28 of 31 sprints carried summer 8-week numbers while the Fall schedule runs 17 weeks, so "back to my week" landed students on the wrong week. Each sprint's real Fall week was derived from session-links.js, the same source the calendar reads, and the title, description, breadcrumb and back link all now agree. The old "Week N Lab Sprints" hub crumbs pointed at pages that only exist for weeks 1 to 8, so those now point at the real week page instead.

Cranial nerves, for example: was Week 8 everywhere, is now Week 16 everywhere, matching when you actually teach it.

Files: 31 lab sprints

## Verified

16 browser checks pass: workbooks unreachable across day types, day strip and steps working, skip link injected and resolving, focus visible on first Tab, keyframes stopped under reduced motion, corrected breadcrumbs resolving, reading format still active on the packets. A 13-page regression sample shows zero JavaScript errors.

## Not touched, on purpose

The 72 pages still saying "Summer 2026" need your eye before a sweep, because some may genuinely be summer material. The coloring book and room timer stay as they are, per your call. Workbook files themselves are untouched and still unreachable.
