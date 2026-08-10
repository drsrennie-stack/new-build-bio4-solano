# Compliance notes, Fall 2026 consistency sweep

## 1. Project

BIO 004 Human Anatomy, Fall 2026, Solano Community College, Vacaville Center.
Repo: `drsrennie-stack/new-build-bio4-solano`.
Sweep date: August 10, 2026. Term starts August 17, 2026.

Files covered, 25 changed:

`bio004-exam-modules.html`, `bio004-master-schedule-fall2026.html`,
`bio004-summer-2026-syllabus.html`, `canvas-enter.html`, `class1.html`,
`communication-office-hours.html`, `course-information.html`,
`fall-2026-schedule-mw.html`, `fall-2026-schedule-tr.html`,
`fall-2026-syllabus.html`, `faq.html`, `mastery-os-fall-2026.html`,
`mastery-os-fall-2026-instructor.html`, `schedule-fall2026.js`,
`syllabus-class1.html`, `syllabus-class2.html`, `syllabus-class3.html`,
`tools-and-links.html`, `week-11.html` through `week-17.html`.

## 2. WCAG version and level

WCAG 2.2. Target AA as the floor, AAA where the change touched color.
This sweep is a content-accuracy pass, so only `canvas-enter.html` changed
anything with a rendered appearance. Everything else is text and data.

## 3. Color contrast audit

Only `canvas-enter.html` changed color. Page background moved from `#0B1530`
to `#08101F`, the value `canvas-home.html` already uses, so the two front-door
screens now match. Every pair got better, none got worse.

| Foreground | Background | Ratio | Result |
|---|---|---|---|
| White `#FFFFFF` body and lead text | `#08101F` | 19.02:1 | AAA |
| Gold eyebrow and signature `#C9A14A` | `#08101F` | 7.86:1 | AAA normal text |
| Navy pill text `#08101F` | Gold pill `#C9A14A` | 7.86:1 | AAA normal text |
| Terra headline accent `#C2734D` | `#08101F` | 5.30:1 | AAA large text (44px, 800 weight) |
| Cream change-section link `#F2E2B8` | `#08101F` | 14.80:1 | AAA |
| White button label `#FFFFFF` | Oxblood button `#7E2E1C` | 9.15:1 | AAA |

Focus ring on the Enter Course button is gold `#C9A14A` at 3px with 4px offset,
sitting against `#08101F` at 7.86:1, well past the 3:1 non-text minimum.

## 4. Keyboard navigation

No interactive elements were added, removed, or reordered. Tab order on
`canvas-enter.html` is unchanged: Enter Course button, then the change-section
link. `.enter:focus-visible` retains its visible gold outline. The syllabus and
week pages had text content edited inside existing `li`, `td`, and `p`
elements only, so no focus order changed anywhere.

## 5. Screen reader

Structural check rather than a full reader pass, because no landmark, heading,
or control changed. All 25 files were parsed with html5lib and came back clean,
and `div`, `section`, and `tr` open and close counts balance in every file.
`schedule-fall2026.js` passes `node --check`.

The one element with a changed accessible name is the week 14 page heading,
now "Week 14 · Exam 4, then Renal begins". It stays a single `h1` in the same
position.

## 6. Content defects found and fixed

| Defect | Scope | Fix |
|---|---|---|
| **Renal and reproductive were assessed on an exam that sits before they are taught.** Exam 4 is Mon Nov 16 (class 1) and Tue Nov 17 (classes 2 and 3). Renal lab is Nov 18/19, reproductive lab is Nov 23/24, TBL 8 Renal is Nov 30/Dec 1. Every one of them falls after the exam | Module data, exam modules page, all four syllabi, master schedule, both Mastery OS builds, week pages 11 to 17, class 1 hub | Urinary (8 competencies) and Reproductive (13) moved out of Module 4 and into Module 5. Exam 4 now carries 34 competencies, Exam 5 carries 64 |
| **Week 14 was marked as not shared** in the module derivation, on the reasoning that the sessions after Exam 4 that week were "still Module 4" | `schedule-fall2026.js` | Week 14 is now correctly a shared week, Module 4 into Module 5, under the file's own three-part rule. It appears in both module tabs |
| **Attendance policy contradicted itself.** "Present for at least 90% of a session" and "20 minutes late or leaving 20 minutes early counts as an absence" cannot both hold: 90% of an 80-minute lecture is 8 minutes | `syllabus-class1/2/3.html`, `fall-2026-syllabus.html` | The 90% clause struck. The 20-minute rule stands alone |
| **Two instructor email addresses were live.** `sharilyn.rennie@solano.edu` appeared in 9 places against `srennie@solano.edu` elsewhere | `faq.html`, `course-information.html`, `communication-office-hours.html`, `bio004-summer-2026-syllabus.html`, `tools-and-links.html` | All standardized to `srennie@solano.edu`, including `mailto:` targets |
| **A "team check" assessment was named in the grading section but existed nowhere else in the course.** No team check appears in the brain dump bank, the schedule, the rubrics, or any week page | `syllabus-class1/2/3.html` | Line deleted. Replaced with the brain dump grading rule that the bank actually implements: full credit for a reasonable effort, no credit for a scattered or unorganized scribble |
| **A syllabus callout papered over the renal conflict** with "exact exam coverage is always confirmed in Canvas", which puts the burden on the student to find out what is on an exam | All four syllabi | Replaced with a plain statement that renal and reproductive are assessed on Exam 5, never Exam 4 |
| Week 14 and 15 topic labels in the printable schedules read "Exam 4, GI System" and "Renal" | `fall-2026-schedule-mw.html`, `fall-2026-schedule-tr.html` | Corrected to "Exam 4, Renal" and "Renal, Reproductive" against the session data |

## 7. Known limitations and remediation plan

| Limitation | Impact | Plan |
|---|---|---|
| The Summer 2026 pages still carry the 90% attendance contradiction: `bio004-summer-2026-syllabus.html`, `faq.html`, `course-information.html` | Low. That term has run | Left deliberately rather than retroactively editing a delivered syllabus. One word and they get the same fix |
| `faq.html` states a hard cap of 3 absences with a drop on the third. The Fall syllabi say only that excessive absence may lead to a drop at instructor discretion | Moderate, if the FAQ is ever reused for Fall | `faq.html` is a Summer 2026 page and links to the Summer syllabus, so it is not currently student-facing for Fall. If a Fall FAQ is built, pick one rule and carry it into both |
| `course-information.html` carries no term marker in its title or body but links to the Summer syllabus | Low | Decide whether it is a Summer page or an evergreen one, and stamp it |
| Competency records in `competenciesfall2026.js` are tagged by content week, not by module or exam | None today. Module scope is derived from week ranges and is now correct | Leave as is. Adding an exam tag per competency would create a second source of truth for the same fact |
| Screen reader verification for this sweep is structural, not a live reader pass | Low. No landmark, heading level, control, or focus order changed | Run a full NVDA or VoiceOver pass on `canvas-enter.html` and one section syllabus before the term opens |

## 8. Reviewer

Dr. Sharilyn Rennie
Professor of Anatomy and Physiology
Solano Community College
