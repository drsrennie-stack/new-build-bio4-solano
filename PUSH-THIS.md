# Syllabus audit and fixes, plus course home

Repo root, overwriting. Nothing deleted.

`syllabus-class1.html`, `syllabus-class2.html`, `syllabus-class3.html`,
`course-links.js`, `bio004-dock.js`.

---

## The audit: what the syllabus said versus the rest of the course

**Checked and CORRECT, no change needed:**

- All 15 exam dates across the three sections match `schedule-fall2026.js`
  exactly, including Class 1's Monday Nov 16 Exam 4 and both Tue/Thu variants.
- 9 TBLs claimed, 9 TBLs in the schedule for both tracks.
- Grade weights total 100%.
- Rooms: VC 118 for sections 1 and 3, VC 212 for section 2, VC 1137 lab.

**Four real contradictions, all fixed:**

**1. Module 3 started in the wrong week.** Syllabus said `Wk 8–10`. The
schedule and the module navigator say `Wk 7–10`. Week 7 is a shared week:
Exam 2 sits in it *and* module 3 content begins the same week. Corrected to
Wk 7–10, so the syllabus and the navigator now agree.

**2. Module 4 scope was out of date.** It read "Respiratory, endocrine, GI,
urinary & renal, reproductive." You moved urinary and reproductive off Exam 4
onto the cumulative final, because both are taught after Exam 4 sits on Nov 16
and 17. Now reads: "Respiratory, endocrine, GI. Urinary, renal and
reproductive are taught in this module but are assessed on the cumulative
final, not on Exam 4."

**3. Finals week said there was no final.** It read "Finals week, no
additional exam unless posted in Canvas." There *is* one: the cumulative
lecture final. Now reads "Finals week · cumulative lecture final."

**4. iChecks and tChecks, everywhere.** See below.

---

## iCheck and tCheck are gone. Brain dumps replace them.

**Zero `iCheck` or `tCheck` tokens remain in any of the three syllabi.**
Replaced in every place they appeared, not just the obvious one:

- 12 to 14 day-table labels per section, `(iCheck)` to `(Brain dump)`
- The grade table row name and its description
- The plain-text grade summary block
- The prose line describing the five components
- The **accessible name on the weight bar**, which a screen reader announces
- The attendance line about earning a zero
- Two bare chips in the legend

New grade row, 5%:

> **Brain dumps** — Start of every class day that is not an exam or a TBL.
> Blind retrieval, on paper, of the pre-work you did the night before. You
> will not know in advance which part you are asked for. Reasonable effort
> earns full credit; a few words or a disorganised scribble earns nothing.

The weight is unchanged at 5%, same as the iChecks it replaces. Say the word
if it should be worth more.

---

## Course home no longer goes to the calendar

`course-links.js` had this:

```js
hub: s ? s.hub : window.BIO004_LINKS.calendar.url
```

A student with no section saved got the **calendar** when they clicked course
home. That is the list of dates you described, not home. The fallback is
`welcome.html` now, which shows the week hub to a student who has picked a
section and the picker to one who has not. Right answer either way.

`home` also pointed at `canvas-home.html`, a redirect file. It points straight
at welcome now; the old key is kept as `homeLegacy` so nothing that referenced
it breaks.

## And the dock drops its own Course home tile on the homepage

Standing on welcome.html, a "Course home" tile is a dead click. The dock now
shows 13 tiles there and 14 everywhere else.
