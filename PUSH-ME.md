# Fall 2026 updates, ready to push

**Repo:** drsrennie-stack/Fall-2026-Anatomy · August 8, 2026

```bash
cd /path/to/Fall-2026-Anatomy
cp /path/to/fall2026-updates/*.html .
cp /path/to/fall2026-updates/*.js .
cp /path/to/fall2026-updates/compliance-notes.md .
git add -A && git commit -m "Front door, pick-once, shared weeks, one navy, Hootie" && git push
```

Do not copy `PUSH-ME.md`, `all-changes.diff` or `schedule-audit-report.md` into the repo.

---

## The front door is `welcome.html`

**Point the Canvas iframe at `welcome.html`.** `canvas-home.html` is now a redirect to it, kept so any existing link survives. Safe to delete if nothing points at it.

## One very dark navy

The site had two structural darks: `--navy` at `#08101F` and a second token `--dark` at `#060A18` used for footers in 21 files. Side by side the footer read as black and the body read as navy.

Two gradients on the welcome page made it worse: the header band was flat `#08101F` while the panel under it was a gradient ending at `#152139`, and the tour panel ended at `#1E2A47`. That is the black-over-navy you spotted.

Now: both gradients are flat `var(--navy)`, and `--dark` resolves to `#08101F`. The token name is kept so anything referencing `var(--dark)` still works. **43 occurrences across 21 files.** Verified that welcome, index, class1, start-here and syllabus-class1 each report exactly one dark structural background.

Deliberately left alone: `#1E2A47` on chips and the 4px divider, which are meant to read as separate from the surface behind them; the tour modal scrim, since a scrim matching its surface would not dim anything; and the Mastery OS `.mode-top` colours, where purple, red, teal, gold and green are mode identities rather than structural navy.

## Pick once, never asked again

`index.html`'s class cards were plain links that **saved nothing**, so a student who picked their class was asked again by welcome, again by a week page, and again by Mastery OS.

`section-pick.js` fixes it with `data-pick-sec` on anything clickable that means "this is my section", and `data-is-sec` on a page that IS one section's page so a direct link or bookmark records it too. Verified end to end.

Also restored the lecture rooms on `index.html`, which named no lecture room for any section.

## Shared weeks, derived not guessed

A week is shared with the next module when it is the closing module's last week, that module's exam sits in it, **and at least one session comes after the exam that week**.

| Week | Verdict | Why |
|---|---|---|
| 4 | **Shared**, M1 into M2 | Exam 1, then Thu Sep 10 is rebuttals plus Long Bone |
| 7 | **Shared**, M2 into M3 | Exam 2, then Thu Oct 1 is rebuttals plus the Heart lecture |
| 10 | Not shared | Exam 3 is the last session of the week on both tracks |
| 14 | Not shared | Exam 4 does not close Module 4, which runs to week 15 |
| 17 | Not shared | Exam 5 is the last session of the term |

A shared week appears on **both** tabs: "Exam 1" in the module it closes, "Starts here" in the module it opens.

**Check this:** Module 3 now starts at week 7, where your syllabus module table says week 8. The table cannot express a mid-week changeover. That cell needs updating to match.

## Hootie, merged

One weighted intent matcher over one answer bank: your matcher and copy, with live dates folded in. The gain is the `struggle` intent — "I am drowning and so far behind" now gets the Gap Finder, a 3-Day Cram, Study With Me and the Success Sprint, ending with their real next exam date.

## Mastery OS was running on zero competencies

Both pages loaded `competencies.js`, which does not exist. They now load `competenciesfall2026.js`. 196 competencies, 16 body systems. Nothing deleted.

---

## Parked, at your call

1. **Sage and cream on the three section home pages.** `.week-head{background:#8FA98A}` and cream tints `#FBF4E4`, `#FDF6E9`, `#f7ecd3`.
2. `welcome.html` still has its own inline Hootie, the last duplicate.
3. Module 3's start week in the syllabus table.
4. `icon.svg` favicon 404 on both Mastery OS pages.
5. `week-1-mw.html` orphan.
