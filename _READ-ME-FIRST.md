# BIO 004 Fall 2026, what changed and what still needs you

Three passes are in this bundle: the site sweep, the syllabus rewrite, and the
four course decisions you had already made in your other session. All of it is
applied. Nothing below is waiting on you except the two items at the end.

---

## Your four decisions, now live across the site

I found these recorded in the project and applied them everywhere, not just in
the syllabi.

**1. Renal and reproductive are assessed on Exam 5.**
Every session that teaches them falls after Exam 4: renal lab Nov 18 or 19,
reproductive lab Nov 23 or 24, TBL 8 on renal Nov 30 or Dec 1. So Module 4 is
now weeks 11 to 14 and closes with respiratory, lymphatic and immune, digestive
and endocrine, 34 competencies. Module 5 is weeks 14 to 17 and carries urinary,
reproductive and the nervous system, 64 competencies. Week 14 is a shared week,
the same way weeks 4 and 7 already were.

This changed `schedule-fall2026.js`, all three syllabi, `bio004-exam-modules.html`,
the module eyebrow on `week-11` through `week-17`, and the visible labels on five
renal and reproductive study pages. Those five files keep their `m4-` filenames,
because several hundred links point at them, but a student opening one now reads
Module 5.

The syllabus used to hedge this with "exact exam coverage is always confirmed in
Canvas," which made it the student's job to find out what was on an exam. It now
states the answer.

**2. Attendance is the 20-minute rule, alone.**
The 90% clause is struck from all three syllabi. Ninety per cent of an
80-minute lecture is eight minutes, so the two rules could never both be true.
The replacement adds one line: there is no partial credit for a partial session.

**3. srennie@solano.edu is the only address.**
Four occurrences of `sharilyn.rennie@solano.edu` standardised, on
`course-information.html` and `communication-office-hours.html`, including the
`mailto:` targets.

**4. "Team check" is gone.**
Nothing by that name existed in the brain dump bank, the schedule, the rubrics
or any week page. The brain dump section is now written out properly instead:
what it is, when it happens, and that honest effort earns the credit.

---

## The syllabi, what changed

**Scholar Points now matches what you told me.** Four activity types named:
Study With Me, community study sessions, tutoring, and open lab. No more than
20 of the 36 hours from any one type. No more than 3 hours a week of any one
type. Log sheet submitted at the end of every module, not in December. The extra
1% now requires an 80% exam average **and** at least 25 of the 36 hours, where
the page previously gated it on having earned the full 2%. And the page now says
plainly that you are welcome to keep studying past the caps, it just stops adding
to the point total.

**The calendar is one calendar now.** The module map and the day-by-day table in
each section syllabus are generated from `schedule-fall2026.js` by a new file,
`syllabus-schedule.js`. Before this, the same 34 dates were typed out by hand in
five separate places, and two of those copies had already drifted. The weekday a
student reads ("Mon Sep 14") is now derived from the ISO date at render time, so
a weekday can no longer come apart from its date. If the script ever fails to
load, the old static table is still underneath it, so a student sees a schedule
either way.

**One data error found and fixed.** The Oct 28 lab for Mon/Wed read "Anterior
Lower-Extremity Muscles". The Tue/Thu track, the paired posterior session, and
all three syllabi say Anterior Thigh. Corrected in the schedule file.

**Lymphatic added to Module 4.** It is taught (notes, workbook, and concept
videos on Oct 28 and Nov 2) but the module map never listed it.

**The generic syllabus is retired.** `fall-2026-syllabus.html` is now a redirect.
If the browser already knows the student's section it goes straight to that
section's syllabus. If not, it shows all three with their CRNs. The 62 pages
across the site that link to it did not need editing, because that one URL now
resolves to the right document for whoever clicks it.

**Small fixes.** The weight bar said "CHX", it now says "Brain dumps". The
orphan line "Team check = team, weighted 1x", which appeared nowhere else in the
course, is gone and the brain dump section is written out properly instead. The
footer "Course syllabus" link used to point at the generic syllabus from inside a
section syllabus; it now points at itself.

**Voice.** 27 blocks per syllabus rewritten. The semicolon-stacked and
telegraphic passages are gone. Nothing was made easier, the workload paragraph
still says 24 hours a week and the late-work policy still says no.

---

## The Success Sprint is gone

You asked whether it was set up. It was not. It appeared in five files and every
one said the same sentence, that it opens after Exam 1 with steps posted in
Canvas, and nothing anywhere defined those steps. You confirmed the content does
not exist, so it is out of the repo entirely. Zero mentions remain.

Removed from: the Scholar Points grid in all three syllabi (it no longer banks
hours), the "I am drowning" answer on `welcome.html`, the same answer in Hootie,
and two internal notes that described it as part of that answer.

The struggle answer did not just lose a step, it gained a real one. Where it used
to end by pointing at a program that did not exist, it now says: office hours,
30 minutes before every class, or free tutoring through the ASTC. Both are real,
both are available on day one, and both bank Scholar Points hours.

**Scholar Points is now three kinds:** Study With Me (which is what the community
study sessions are called, they are the same thing), tutoring, and open lab.

## Two tools that were computing the old rules

**`study-with-me-hours.html`,** the log sheet, was applying one overall 3 hour
weekly cap and a "maximum 2 hosted sessions" rule, against a 16-week term. Your
rule is per kind. It now applies both caps per kind, 3 hours a week and 20 of the
36 all term, over 17 weeks, and asks for a submission at the end of every module
instead of one upload in December. There is a fourth entry type for anything that
does not count, so students can keep their own record without it inflating the
total. Checked: 5 hours of Study With Me in one week banks 3; 5 hours of Study
With Me plus 5 of open lab in the same week banks 6, not 3; 30 hours of open lab
banks 20.

**`grade-calculator.html` was an entire Summer 2026 page.** Weights 45/45/5/5,
seven TBLs, seven labs, a cumulative final, and a rule that replaced a student's
lowest TBL with that final. It survived the earlier sweep because the only place
it says "Summer" is a code comment. It is reachable from `tbl-team.html`, so a
student could have used it and been told the wrong grade. Rebuilt on the Fall
model: 30/30/30/5/5, nine TBLs, five lecture exams, five practicals, quizzes and
brain dumps, the 102 exam cap, nothing dropped and nothing replaced, and Scholar
Points on the three-kind rule. Checked: straight 90s gives a base of exactly
90.0%; 36 hours from one kind banks 20; 12/12/12 gives the full +3.00%; and an
exam average of exactly 80 does **not** unlock the +1%, because your rule says
above 80.

**Confirmed: the +1% exam average is all ten exams combined**, the five lecture
exams and the five lab practicals together. The syllabi and the calculator now
say that in those words, so a student cannot read it as lecture exams only.
Checked both edges: lecture 90s with practical 70s averages exactly 80.0 and does
not unlock it, because the rule is above 80. Lecture 90s with practical 75s
averages 82.5 and does.

## Still open

**Summer 2026 pages** still carry the old 90% attendance contradiction:
`bio004-summer-2026-syllabus.html`, `faq.html`, `course-information.html`. That
term has run, so I left them. One word each if you want them matched.

---

## Before you push

1. Push the four image folders that were never uploaded: `blood-img/`,
   `musc-img/`, `musc-tissue-img/`, and the rest of `lym-img/`. 104 figures on
   six pages are showing a labelled placeholder until then.
2. Delete the files listed in `_DELETE-THESE-FILES.txt`.
3. Five files were too large for this zip and are unchanged except for house
   style. They are listed at the end of `_DELETE-THESE-FILES.txt`.

Print one syllabus before the term opens. The print stylesheet was broken and is
now fixed, and it is worth seeing on paper once.
