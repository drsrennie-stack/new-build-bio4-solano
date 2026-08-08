# Fall 2026 updates, ready to push

**Repo:** drsrennie-stack/Fall-2026-Anatomy · August 8, 2026

```bash
cd /path/to/Fall-2026-Anatomy
cp /path/to/fall2026-updates/*.html .
cp /path/to/fall2026-updates/*.js .
cp /path/to/fall2026-updates/compliance-notes.md .
git add -A && git commit -m "Front door, pick-once, shared weeks, Hootie" && git push
```

Do not copy `PUSH-ME.md`, `REUSE-INVENTORY.md`, `all-changes.diff` or `schedule-audit-report.md` into the repo.

---

## The front door is `welcome.html`

**Point the Canvas iframe at `welcome.html`.** It already has the greeting, the aurora, the section picker, the walkthrough, the welcome-back screen and the module and week hubgate, all designed as one piece.

`canvas-home.html` is now a redirect to it. It briefly had its own front door; yours is better. Kept as a redirect rather than deleted so any existing link survives. Safe to delete if nothing points at it.

## Pick once, never asked again

This was genuinely broken. `index.html` showed three class cards, each a plain link to `class1/2/3.html`. Clicking "Open my class" navigated but **saved nothing**, so a student was then asked again by welcome, again by a week page, and again by Mastery OS.

`section-pick.js` closes it with two attributes:

- `data-pick-sec="mw"` on anything clickable that means "this is my section". Writes before navigating.
- `data-is-sec="tr-eve"` on the body of a page that IS one section's page. Stamps on arrival, so a direct link or bookmark to `class3.html` records Class 3.

Verified end to end: pick any card on `index.html`, then welcome, a week page, Mastery OS and the calendar all know the section and none of them ask again.

Also restored the lecture rooms on `index.html`, which listed no lecture room at all for any section. VC 118 and VC 212 are back.

## Shared weeks, derived not guessed

A week is shared with the next module when it is the closing module's last week, that module's exam sits in it, **and at least one class session comes after the exam that week**.

That third condition is what makes it right. Run against your sessions:

| Week | Verdict | Why |
|---|---|---|
| 4 | **Shared**, M1 into M2 | Exam 1, then Thu Sep 10 is rebuttals plus Long Bone. That is Module 2. |
| 7 | **Shared**, M2 into M3 | Exam 2, then Thu Oct 1 is rebuttals plus the Heart lecture. That is Module 3. |
| 10 | Not shared | Exam 3 is the last session of the week on both tracks. |
| 14 | Not shared | Exam 4 does not close Module 4, which runs to week 15, and the sessions after it are still renal. |
| 17 | Not shared | Exam 5 is the last session of the term. |

**One consequence to check:** Module 3 now starts at week 7, where your syllabus module table says week 8. The table is a summary and cannot express a mid-week changeover. If you want the syllabus to match, that cell needs updating.

A shared week is drawn on **both** module tabs and reads differently on each: "Exam 1" in the module it closes, "Starts here" in the module it opens, with a line underneath explaining why it is there. Same in the welcome page hubgate and in `module-nav.js`, from the same ranges, so they cannot drift.

## Hootie, merged

There were two. `welcome.html` knew the course, the week pages knew the schedule. Now one weighted intent matcher over one answer bank, using your matcher and your copy with live dates folded in.

The gain: **the `struggle` intent**. "I am drowning and so far behind" used to get a refusal about anatomy content. It now gets the Gap Finder, a 3-Day Cram, Study With Me, and the Success Sprint after Exam 1, ending with their actual next exam date.

## Still open

1. **Sage and cream are live on all three section home pages.** `.week-head{background:#8FA98A}` is a sage band on every week block; `#FBF4E4`, `#FDF6E9` and `#f7ecd3` are cream tints on today, holidays and hover. Both are on your no-list, as are pastel tints and shaded row backgrounds. Not fixed yet.
2. `welcome.html` still has its own inline Hootie. One duplicate left.
3. `icon.svg` favicon 404 on both Mastery OS pages.
4. `week-1-mw.html` looks like an orphan.
