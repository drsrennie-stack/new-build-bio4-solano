# Accessibility Compliance Notes

## 1. Project

**Project:** BIO 004 Brain Dump system, Fall 2026
**Files covered:**

- `bio004-braindump-bank-fall2026.html`, instructor master list, single self-contained file, data inlined
- `bio004-braindump-selector-fall2026.html`, projector selector wheel, single self-contained file, same data inlined

**Date:** August 8, 2026
**Reviewer:** Dr. Sharilyn Rennie

Both files carry 279 questions in 28 pools: 27 anatomy pools of ten, plus a ten-question team charter pool for day one.

**Timing model.** Pre-work is done the night before a class day, that class day teaches it, and the next dump day retrieves it. No dump runs on an exam day or a TBL day, since a TBL is already a retrieval event, so the chain reaches past a TBL to the last teaching day. Day one runs the team charter dump, because there is no class day behind it.

**Coverage.** Class 1 has 17 dump days, Classes 2 and 3 have 18 each. Ten pools are never scheduled: nine belong to TBL days and duplicate the topic beside them, and the brainstem day plus the cranial nerve TBL fall after the last dump day of the term. All ten are listed in a reserve card at the foot of the master list and stay available for review, make-ups, or swaps.

Sections 2 through 6 cover the master list. Section 6A covers the selector, which shares the palette and type stack and is audited only where it differs.

## 2. Type and color system

Both files run on the tokens from the live course chrome (`class1.html`) rather than a separate palette.

| Token | Value | Source |
|---|---|---|
| navy | `#08101F` | course chrome |
| terra | `#8B1D1D` | course chrome |
| terra-dark | `#6B1616` | course chrome |
| gold | `#DCB45C` | course chrome |
| offwhite | `#FAFAF9` | course chrome |
| navy-tint | `#ECEFF4` | course chrome |
| radius | `8px` | course chrome |
| gray | `#4A515C` | darkened from the chrome's `#6B7280`, see 6.1 |
| gold-ink | `#6B5214` | darkened gold, for gold-toned text on white |

**One font family throughout: Plus Jakarta Sans.** Display, body, and eyebrow tokens all resolve to it, following the Mastery OS pattern where `--mono` and `--serif` are also mapped to Plus Jakarta Sans. No DM Sans, no monospace face, no italics anywhere in either file.

## 3. WCAG version and level achieved

Target: WCAG 2.2 AA minimum, AAA where achievable.

| Criterion | Level | Status |
|---|---|---|
| 1.3.1 Info and Relationships | A | Pass. Semantic `header`, `main`, `footer`, `article`, `section`, `fieldset`/`legend`, `dl`, `ul`. |
| 1.3.2 Meaningful Sequence | A | Pass. Reading order matches visual order; grid columns follow DOM order. |
| 1.4.1 Use of Color | A | Pass. Which section owns a question is stated in text, never by color alone. |
| 1.4.3 Contrast (Minimum) | AA | Pass, see section 4. |
| 1.4.6 Contrast (Enhanced) | AAA | Pass on every text pair in both files. |
| 1.4.4 Resize Text | AA | Pass. Relative units, no maximum-scale lock. |
| 1.4.10 Reflow | AA | Pass. Single column at 320px, no horizontal scroll. |
| 1.4.12 Text Spacing | AA | Pass. No fixed heights on text containers. |
| 2.1.1 Keyboard | A | Pass, see section 5. |
| 2.4.1 Bypass Blocks | A | Pass. Skip link on both files. |
| 2.4.3 Focus Order | A | Pass. DOM order only, no tabindex above 0. |
| 2.4.6 Headings and Labels | AA | Pass. One `h1`, `h2` per region, `h3` per class day, `h4` per question. |
| 2.4.7 Focus Visible | AA | Pass. 3px outline, 3px offset, on every interactive element. |
| 2.4.11 Focus Not Obscured | AA (2.2) | Pass. No sticky or overlay elements. |
| 2.5.3 Label in Name | A | Pass. Visible button text is the accessible name. |
| 2.5.8 Target Size (Minimum) | AA (2.2) | Pass. Smallest target is the copy button at 36px high, above the 24px floor. |
| 3.3.2 Labels or Instructions | A | Pass. Every `select` and `input` has a visible `label` bound by `for` and `id`. |
| 4.1.2 Name, Role, Value | A | Pass. Filter and section buttons expose `aria-pressed`, updated on click. |
| 4.1.3 Status Messages | AA | Pass. Counts and selector status are `role="status"`, `aria-live="polite"`. |

## 4. Color contrast audit

### Master list, light surfaces

| Text | Foreground | Background | Ratio | Level |
|---|---|---|---|---|
| Body copy | `#131A24` | `#FFFFFF` | 16.9:1 | AAA |
| Body copy | `#131A24` | `#FAFAF9` | 16.5:1 | AAA |
| Secondary copy | `#4A515C` | `#FFFFFF` | 7.9:1 | AAA |
| Secondary copy | `#4A515C` | `#FCFBF7` | 7.7:1 | AAA |
| Headings | `#08101F` | `#FFFFFF` | 19.1:1 | AAA |
| Eyebrow and micro-labels | `#8B1D1D` | `#FFFFFF` | 9.2:1 | AAA |
| Gold-toned text | `#6B5214` | `#FFFFFF` | 7.3:1 | AAA |
| Masthead eyebrow | `#DCB45C` | `#08101F` | 9.7:1 | AAA |
| Masthead h1 | `#FFFFFF` | `#08101F` | 19.1:1 | AAA |
| Masthead subhead | `#E7D6AC` | `#08101F` | 13.7:1 | AAA |
| Masthead standfirst | `#D6DBE4` | `#08101F` | 12.9:1 | AAA |
| Pressed filter button | `#FFFFFF` | `#08101F` | 19.1:1 | AAA |
| Print button | `#FFFFFF` | `#8B1D1D` | 9.2:1 | AAA |
| Question number, assigned | `#FFFFFF` | `#8B1D1D` | 9.2:1 | AAA |
| Question number, alternate | `#FFFFFF` | `#4A515C` | 7.9:1 | AAA |
| Note panel copy | `#2C2413` | `#ECEFF4` | 13.4:1 | AAA |
| Focus outline vs white | `#6B5214` | `#FFFFFF` | 7.3:1 | Pass, non-text 3:1 floor |
| Card border | `#D1D5DB` | `#FFFFFF` | 1.5:1 | Decorative only, carries no information |

### Selector, dark surfaces

| Text | Foreground | Background | Ratio | Level |
|---|---|---|---|---|
| Question title | `#FFFFFF` | `#08101F` | 19.1:1 | AAA |
| Question body | `#EEF1F6` | `#08101F` | 17.4:1 | AAA |
| Labels and legends | `#DCB45C` | `#08101F` | 9.7:1 | AAA |
| Countdown clock | `#DCB45C` | `#08101F` | 9.7:1 | AAA |
| Clock, final thirty seconds | `#E09A8C` | `#08101F` | 8.3:1 | AAA |
| Helper text | `#B6C0D0` | `#08101F` | 10.4:1 | AAA |
| Section chip | `#FFFFFF` | `#8B1D1D` | 9.2:1 | AAA |
| Alternate chip | `#08101F` | `#DCB45C` | 9.7:1 | AAA |
| Pressed section button | `#08101F` | `#DCB45C` | 9.7:1 | AAA |
| Start button | `#08101F` | `#DCB45C` | 9.7:1 | AAA |
| Pencils down banner | `#FFFFFF` | `#8B1D1D` | 9.2:1 | AAA |
| Wheel segment labels | `#B6C0D0` | `#0E1A2E` and `#16243B` | 9.8:1 and 8.5:1 | AAA |
| Select control text | `#EEF1F6` | `#16243B` | 13.7:1 | AAA |
| Wheel rim and pointer | `#DCB45C` | `#08101F` | 9.7:1 | Pass, non-text 3:1 floor |

## 5. Keyboard navigation flow verified

### Master list

1. Tab 1 reaches the skip link, off-screen until focused, then jumps to the list.
2. Tabs 2 to 5 walk the section filters, then 6 and 7 the question-view filters. Space or Enter activates and flips `aria-pressed`.
3. Next tab reaches the search input, then the print button.
4. Remaining tabs walk the copy buttons in reading order. Activating one swaps its label to "Copied" for 1.6 seconds.
5. No keyboard trap. Card hover lift is decorative and gates nothing.

### Selector

1. Skip link, then the three section buttons, the day select, the duration select.
2. The wheel hub is a real button, so spin is reachable by Tab and fires on Enter or Space.
3. After a result: start or pause, minus 30 seconds, plus 30 seconds, reset, the full-credit disclosure, then spin for an alternate, back to the wheel, next class day.
4. Shortcuts: `S` spin, `Space` start or pause, `R` reset, `+` and `-` adjust the clock, `P` present mode. The handler exits early when focus is in a `select`, and lets `Space` fall through when a button has focus so it does not double-fire.
5. Present mode hides chrome with CSS only, so focus order stays intact and nothing becomes unreachable.

## 6. Screen reader testing

**Reader:** VoiceOver on Safari (macOS), rotor and sequential read-through.

Verified on both files:

- Landmarks announce as banner, main, and content info.
- Heading tree reads without skipped levels.
- Filter groups announce as named groups with each button's pressed state.
- Search and select controls announce their visible labels.
- Status lines announce after each change without stealing focus.
- Question lists read as lists with a correct item count.

Selector specifics:

- The wheel is `role="img"` with a `title`. It is decorative to the outcome: the chosen question is announced in the live status line and rendered as real text, so nothing depends on seeing the wheel land.
- The status line announces "Selecting", then the section and date on landing, then the new value whenever the clock is nudged, then "Time. Collect them." at zero.
- The countdown carries `aria-live="off"` deliberately. A per-second live region would flood a screen reader for five solid minutes.
- The full-credit list is a disclosure with `aria-expanded` on the trigger and a label that flips between show and hide.

## 7. Behavior verification

- **Rig test:** 18 spins across all three sections, nine class days, primary and alternate. The pointer landed on the assigned question every time. Ten segments at 36 degrees each, worst-case landing offset well inside a segment.
- **Reduced motion:** `prefers-reduced-motion: reduce` removes the spin and the fade. The wheel snaps to the result and the question appears immediately. Verified the pointer still lands correctly.
- **Alternate isolation:** programmatic check across all 27 class days and all three sections, eight spins deep. Zero cases where a section's alternate matched another section's assigned question, and zero repeats within the first eight spins.
- **Clock:** defaults to five minutes. Verified plus and minus 30 second buttons work while stopped and while running, and that the preset select resets cleanly.
- **Retrieval chain:** programmatic validation across all 27 class days and all three sections. Every scheduled dump resolves to a pool that has a question assigned for that section, no dump resolves to an empty slot, and no pool is retrieved twice. Verified by hand at the two asymmetric points: Class 1 on November 18 retrieves November 4, and Class 2 on November 19 retrieves November 10.
- **TBL and exam exclusion:** no TBL day or exam day appears in the selector's day list for any section, and both render as no-dump cards in the master list. November 10 is correctly a TBL for Class 1 only and remains a dump day for Classes 2 and 3.
- **Per-section labels:** the two class days that carry a different lecture per track show only the half belonging to the section on screen.
- **Date integrity:** all 26 Class 1 dates and all 27 Class 2 and Class 3 dates match the reconciled master schedule exactly, including Exam 4 sitting Monday November 16 for Class 1.
- **Topic placement:** pulmonary circulation appears in the heart day and again in the respiratory day. Circle of Willis appears in the brain and meninges day and again in the brainstem and cranial nerve day. CSF flow sits in the brain, meninges and CSF day. Long bone microanatomy sits in the bone tissue day. 25 of 27 class days carry at least one labeled mind map question.

## 8. Known limitations and remediation plan

**8.1 Gray token darkened.** The course chrome uses `--gray:#6B7280`, which reaches only 4.8:1 on white and fails the AAA target for body-weight text. Darkened to `#4A515C` here, 7.9:1. Worth pushing back into the chrome so the whole site clears AAA rather than only these two files.

**8.2 Focus loss on re-render, master list.** Filtering or searching rebuilds the list with `innerHTML`, so focus on a copy button inside the list is lost. The filter and search controls sit outside the list and keep focus, so the common path is unaffected. Remediation: targeted DOM updates or focus restoration by index.

**8.3 Skip links have no `target="_top"`.** The house rule adds `target="_top"` to every internal link. Deliberately omitted on same-page fragment links, since it would navigate the host page instead of moving focus within the frame when embedded. The header logo link does carry `target="_top"`.

**8.4 Wheel labels rotate with the wheel.** After it stops, some labels sit upside down, the way a physical prize wheel behaves. The winning label at the pointer is always upright, since labels in the top half are authored to read outward. No information is lost, because the result is also printed as large text.

**8.5 Ten pools go unretrieved.** Nine are TBL-day pools whose topic is already covered by the pool beside them, so nothing unique is lost. Two, the brainstem day and the cranial nerve TBL, sit after the final dump day and genuinely never get a retrieval pass before Exam 5. Remediation if that matters: run one of them as an untimed review at the start of the Exam 5 review, or move a dump onto the exam review day.

**8.6 Wheel shows all ten titles, including the other sections' assigned questions.** Titles are topic labels with no answer content, and a student cannot tell which of the ten another section received. If that exposure ever matters, the fix is to seed the wheel from alternates only and place the assigned question in a hidden slot.

**8.7 The clock is not announced as it runs.** A screen reader user tracking the countdown must poll the element. The zero point and every manual adjustment are announced through the status line.

**8.8 No audio cue.** Time expiry is visual only, a color change plus a "Pencils down" banner. Deliberate for a room where the instructor calls time out loud. Add a short tone if the room is large.

**8.9 Web font dependency.** Plus Jakarta Sans loads from Google Fonts. System sans-serif fallbacks are declared in every stack, so a blocked font request degrades the look but not readability.

**8.10 Print path, master list.** The print stylesheet hides the controls, so a printed copy is always the unfiltered view with all ten questions per day. Intended for an instructor copy. Filter first and print to PDF if a narrower copy is wanted.

## 9. Reviewer

Dr. Sharilyn Rennie, August 8, 2026.
