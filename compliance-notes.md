# Accessibility Compliance Notes

## 1. Project and files covered

**Project:** Course Schedule Architect, the Course Schedule Engine.

**Date:** May 21, 2026. Covers schema 3.0, the Lecture and Lab day model with
weekend cards, split-color headings, numbered week headers, and the today ribbon.

**Primary file audited:** `course-schedule.html`, the student-facing interactive
course schedule. This is the only deliverable subject to WCAG, since it is the
web page students use.

**Other deliverables, not WCAG-scoped but noted:**

`course-schedule.pdf` is a generated print document. It carries a logical
reading order, real text (not images), a document title and author, and
sufficient color contrast. It is not a tagged PDF. If a fully tagged,
screen-reader-optimized PDF is needed, that is listed under remediation below.

`schedule-data.xlsx`, `schedule-data.json`, `build_schedule.py`, and the files
in `exports/` are author tools and data files. They are not student-facing web
content and are out of WCAG scope.

## 2. WCAG version and target level

Standard applied: **WCAG 2.2**. Floor target: **Level AA**. Reach target:
**Level AAA** where the brand palette allows it.

Result by area:

Text contrast reaches AAA for all navy text, which is the bulk of the page.
Brand accent colors (terra cotta and brushed gold) reach AA. Structure,
keyboard operation, focus visibility, and non-text criteria are met at AA, and
several at AAA. No criterion falls below AA.

Criteria specifically verified: 1.3.1 Info and Relationships, 1.4.3 Contrast
Minimum, 1.4.6 Contrast Enhanced (partial, navy text only), 1.4.10 Reflow,
1.4.11 Non-text Contrast, 1.4.12 Text Spacing, 2.1.1 Keyboard, 2.1.2 No
Keyboard Trap, 2.4.1 Bypass Blocks, 2.4.3 Focus Order, 2.4.6 Headings and
Labels, 2.4.7 Focus Visible, 2.4.11 Focus Not Obscured, 2.5.8 Target Size
Minimum, 3.2.2 On Input, 3.3.2 Labels or Instructions, 4.1.2 Name Role Value,
4.1.3 Status Messages.

## 3. Color contrast audit

All ratios computed with the WCAG relative luminance formula. Normal text must
reach 4.5:1 for AA and 7:1 for AAA. Large text and non-text UI must reach 3:1.

| Text or element | Foreground | Background | Ratio | AA | AAA |
|---|---|---|---|---|---|
| Body text | Navy #1E3D4C | Off-white #FAFAF9 | 11.01:1 | Pass | Pass |
| Card text | Navy #1E3D4C | White #FFFFFF | 11.49:1 | Pass | Pass |
| Text on completed-day card | Navy #1E3D4C | Navy-tint #EDF1F3 | 10.11:1 | Pass | Pass |
| Button and header text | White #FFFFFF | Navy #1E3D4C | 11.49:1 | Pass | Pass |
| Eyebrow text, 12px | Terra-dark #A0522D | Off-white #FAFAF9 | 5.38:1 | Pass | Not met |
| Section labels, headings | Terra-dark #A0522D | White #FFFFFF | 5.62:1 | Pass | Not met |
| Exam and today badge text | Navy-deep #142a36 | Brushed gold #B8924A | 5.13:1 | Pass | Not met |
| Secondary text | Gray #565E62 | Off-white #FAFAF9 | 6.34:1 | Pass | Not met |
| Secondary text | Gray #565E62 | White #FFFFFF | 6.62:1 | Pass | Not met |
| Secondary text | Gray #565E62 | Navy-tint #EDF1F3 | 5.82:1 | Pass | Not met |
| This Week banner body and labels | Navy #1E3D4C | Light gold #EFDFA3 | 8.62:1 | Pass | Pass |
| This Week banner title and stat numbers, large text | Terra-dark #A0522D | Light gold #EFDFA3 | 4.21:1 | Pass | Not met |

The This Week banner is a light gold panel. Its body text and labels are navy
and reach AAA. Its title and large stat numbers are terra cotta; these are large
text, for which the AA floor is 3:1, so 4.21:1 passes. Terra cotta is not placed
as small text on the light gold.

Lowest normal-text pair: 5.13:1, comfortably above the 4.5:1 AA floor. The
lowest large-text pair, 4.21:1, is above its 3:1 floor.

Non-text contrast (1.4.11): the focus indicator is a 3px solid navy outline set
2px outside each control. Against the off-white page it measures about 11:1,
well above the 3:1 requirement of WCAG 2.2 Focus Appearance. A brushed-gold
halo sits outside the navy outline as a non-essential accent; the navy outline
alone satisfies the criterion, including on navy-filled controls where the
2px offset places the outline on the page background. Interactive borders that
carry meaning use navy or gold, not the light hairline gray.

## 4. Keyboard navigation

Verified that every interactive element is reachable and operable by keyboard
with no mouse, and that the focus order matches the visual order.

Flow: the skip link appears first on Tab and jumps to the schedule. The four
view choices are a native radio group, so arrow keys move between them and the
selection applies immediately. The daily prep checklist control is a native
checkbox styled as a switch, toggled with Space. The Save as PDF button, the
Export disclosure, every export button, and the import-help disclosure all take
focus in order and activate with Enter or Space. The lecture material and
spaced recall links inside each day card are native links, reachable by Tab and
with a visible focus outline. In the Weekly view, the Previous
week and Next week buttons and the week dropdown are all keyboard operable.
There is no keyboard trap. Focus is visible on every element. Disabled state on
the Previous and Next buttons at the first and last week is conveyed natively.
Target sizes meet the 24 by 24 CSS pixel minimum.

When a view changes, focus is moved to the new view heading, which is
programmatically focusable, so keyboard and screen reader users land on the new
content rather than losing their place.

## 5. Screen reader and structure verification

Verification method: structural and ARIA inspection of the rendered DOM, plus
an automated functional test of 31 checks covering page boot, all four view
toggles, the daily prep checklist toggle, the numbered week headers, the
Lecture and Lab tracks, the weekend cards, and every export generator. All 27
checks pass.

Confirmed present and correct:

Semantic landmarks are a single `header`, a `nav` labeled "Schedule view and
options", a `main`, and a `footer`. The heading hierarchy runs h1 for the page
title, h2 for the active view, h3 for week headers, and h4 for day cards, with no
skipped levels. The split-color headings are pure styling: each heading is one
heading element with two colored `span` segments, so a screen reader reads it as
one continuous title. The big week numerals are decorative and marked
`aria-hidden`, since the adjacent "Week N" text already names the week. The view
switch uses `fieldset` and `legend`. The daily prep checklist switch uses a
`label` tied to its input by `for` and `id`, with an `aria-describedby` note
clarifying that the prep checklist is recommended and not graded. Each day card
is an `article` with an accessible name that includes its session type and, on
the current day, the word "today"; the today ribbon's arrow glyph is decorative
and `aria-hidden`, with the ribbon's white-on-navy text carrying the meaning.
The Lecture and Lab tracks use real `ul` and `li` markup with native links. The
graded-items table uses a `caption` and column headers with `scope`. Two status
regions, the view status line and the export status line, use `role="status"`
with `aria-live="polite"` so view changes and export results are announced
without stealing focus. The Export and import-help panels are native `details`
and `summary` elements. The daily prep checklist uses real `ul` and `li` markup,
with the gated prework item as plain text so it is clear it is not yet a link.

A live pass with VoiceOver on macOS is recommended as a final check before the
first student cohort. See remediation below.

## 6. Known limitations and remediation plan

Terra cotta and brushed gold accent text reaches AA at roughly 5.1 to 5.6:1 but
not AAA. These are fixed brand colors from the primary teaching palette, and
the affected text is small in volume (eyebrow lines, short section labels, and
badge text). Raising them to 7:1 would require changing the brand palette.
Decision: hold at AA for brand-colored accent text, since the body of the page,
all reading content, reaches AAA. Revisit only if the palette is revised.

Secondary gray text reaches AA at 5.8 to 6.6:1, just under the 7:1 AAA mark. It
was already darkened once during this build, from the original token to
#565E62, to gain margin. Darkening further would erode the visual hierarchy
that separates secondary text from primary navy text. Decision: hold at AA.

Screen reader testing was done by DOM and ARIA inspection and automated
functional testing, not by a live assistive-technology pass. Remediation: run
one pass with VoiceOver, and ideally one with NVDA on Windows, before the
schedule is published to students. Budget about 30 minutes.

The PDF is readable with good contrast and correct reading order but is not a
tagged PDF. Remediation, only if required by the institution: produce a tagged
version, or direct students who use assistive technology to the HTML page,
which is the fully accessible format.

The HTML carries the iframe height-sender script and is built for Canvas embed.
When embedded, confirm in the live Canvas page that the host sizes the iframe
from the posted height and that focus is not obscured by any sticky Canvas
chrome (WCAG 2.2, 2.4.11). This can only be checked in the real Canvas shell.

## 7. Reviewer

Prepared by the Course Schedule Engine build process and reviewed against
WCAG 2.2. Final sign-off pending review by Dr. Sharilyn Rennie.
