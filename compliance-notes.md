# Accessibility compliance notes

**Project:** BIO 004 Human Anatomy, Fall 2026 course calendar
**Files covered:** `bio004-course-calendar.html`, `session-links.js`, `week-links.js`
**Repo:** drsrennie-stack/new-build-bio4-solano
**Date:** August 9, 2026
**Reviewer:** Dr. Sharilyn Rennie

---

## 1. WCAG version and level achieved

Target: WCAG 2.2 AA minimum, AAA where achievable.

**Result: AAA on every measured criterion below.**

| Criterion | Level | Status |
|---|---|---|
| 1.3.1 Info and relationships | A | Pass. Semantic landmarks, headings, `role="group"` on the grid and legend |
| 1.4.1 Use of color | A | Pass after fix. "Lab meets" was a colored dot only; it is now in the cell's accessible name |
| 1.4.3 Contrast (minimum) | AA | Pass, 169 of 169 text nodes |
| 1.4.6 Contrast (enhanced) | AAA | Pass, 169 of 169 text nodes |
| 1.4.11 Non-text contrast | AA | Pass. Focus ring 3px terra-dark, borders on cards and chips |
| 1.4.12 Text spacing | AA | Pass. No fixed line-height traps, no clipped chips at 200% |
| 2.1.1 Keyboard | A | Pass after fix. Arrow, Home, End, PageUp, PageDown added to the grid |
| 2.1.2 No keyboard trap | A | Pass after fix. Reset dialog closes on Escape |
| 2.4.1 Bypass blocks | A | Pass. Skip link present |
| 2.4.3 Focus order | A | Pass after fix. Roving tabindex, focus returns from the dialog |
| 2.4.6 Headings and labels | AA | Pass after fix. Cell names carried the wrong weekday |
| 2.4.7 Focus visible | AA | Pass. `:focus-visible` 3px outline, 2px offset |
| 2.4.11 Focus not obscured | AA | Pass. Sticky detail panel does not overlap the grid |
| 2.5.8 Target size (minimum) | AA | Pass. Cells 52px minimum, buttons 38px, link rows 37px |
| 3.2.3 Consistent navigation | AA | Pass. Header and footer match the rest of the site |
| 4.1.2 Name, role, value | A | Pass after fix. Grid and detail panel now have names |
| 4.1.3 Status messages | AA | Pass. Detail panel is `aria-live="polite"` |

---

## 2. Color contrast audit

Measured on the rendered page in headless Chromium at 1200px, compositing every
`opacity` in the ancestor chain and every `rgba` background layer. Measuring the
declared hex alone was giving false passes, so the numbers below come from the
composited pixel values.

### Failures found and fixed

| Pair | Before | After | Fix |
|---|---:|---:|---|
| `.how-note b` bold on the maroon callout | **1.25** | 9.63 | A duplicate rule set bold text to terra-dark, cancelling `color:#fff` one line above. Deleted |
| "Your section" label on navy | **1.59** | 7.32 | terra-dark → `--terra-on-navy` |
| Pre-work pending link on maroon | **1.64** | 8.41 | Removed the `.6` opacity |
| "day by day" title accent on navy | **2.08** | 7.32 | terra → `--terra-on-navy` |
| Footer brand line on navy | **2.08** | 7.32 | terra → `--terra-on-navy` |
| Calendar date numerals | **3.55** | 9.45 | opacity `.5` → `.78` |
| Day-of-week column heads | **4.22** | 9.45 | opacity `.55` → `.78` |
| Review-game chip and legend swatch | 5.47 | 7.74 | `#5F6B73` → `#4A545C` |
| Pre-work due-date line | 6.53 | 8.41 | opacity `.85` → `1` |
| Pre-work eyebrow | 6.23 | 7.49 | `#E8CE85` → `#F2E2B8` |
| Pre-work material tiles | 6.53 | 8.9 | Tile background darkened instead of lightened |

`--terra-on-navy: #D98E77` is a new token. Terra `#8B1D1D` is 2.08:1 on navy
`#08101F`, which is unreadable at any size. The tint holds the terra character
and measures 7.32:1, AAA for body text.

### Exempt

`.navbtn:disabled` renders at 2.29:1 at `opacity:.35`. WCAG 1.4.3 exempts
inactive controls. Raising it would make a disabled month arrow look enabled,
which is a worse outcome, so it is left as is.

---

## 3. Keyboard navigation flow verified

Walked with Tab from a cold load. Order:

1. Skip to content
2. Logo, course home
3. Section chip
4. "How this class works" disclosure
5. Next month
6. **The calendar grid, one stop**
7. onward into the day's material links

**Fixed:** every session cell carried `tabIndex=0`, putting 34 tab stops between
the month buttons and the day plan. The grid now uses a roving tabindex, one
stop, with arrow keys inside it.

Inside the grid: Left/Up and Right/Down move a day, Home and End jump to the
first and last class day of the month, PageUp and PageDown change month and land
on its first class day, Enter and Space open the day.

Reset dialog: focus moves to Cancel on open, Tab cycles inside it, Escape closes,
focus returns to whatever opened it. None of that existed before.

---

## 4. Screen reader testing

Verified programmatically against the accessibility tree, not with a live reader.
Stated plainly so it is not mistaken for a NVDA or VoiceOver pass.

- **Landmarks:** `banner`, `main`, `contentinfo`, plus `complementary` for the day plan.
- **Cell names:** were `"Monday Aug 19, iCheck"` for **every** cell in the month.
  The weekday came from `first.getDay()`, the 1st of the month, not the cell's own
  date. Now reads `"Wednesday Aug 19, Brain dump, lab meets, today, selected"`.
- **Lab dot:** was a colored dot with a `title`. `title` is not reliably announced.
  The fact is now in the cell name and the dot is `aria-hidden`.
- **Live region:** the day plan is `aria-live="polite"`, so picking a day announces
  the new plan without moving focus.
- **Grid:** `role="group"` with usage instructions in its label.

---

## 5. Design changes made alongside

Per the standing rule against bookend and ceiling borders:

- Hero `border-top:3px solid #1E2A47` → shadow
- The three "How this class works" cards, `border-top:3px` in three colors → shadow, white cards on off-white
- Footer `border-top:2px` → shadow
- Header `border-bottom:.5px` → shadow

Font: the page loaded DM Sans for eyebrow text. Switched to Plus Jakarta Sans
throughout, per the no-DM-Sans rule. One fewer font request as a side effect.

iCheck → Brain dump: 27 calendar chips, the legend, the badge in the day plan,
and the "How this class works" card that described the checks. Exam days and TBL
days untouched.

---

## 6. Known limitations and remediation plan

1. **No live screen reader pass.** Verified against the accessibility tree only.
   A VoiceOver or NVDA run on the published page is still worth doing.
2. **Google Fonts is a third-party request.** If it fails the page falls back to
   system sans. Contrast is unaffected; metrics shift slightly.
3. **Iframe height.** A height sender is now in the page, but Canvas strips
   `<script>` from page *content*, so nothing in a Canvas page can listen unless
   the institution's Canvas theme has an admin-level listener. Until then the
   embed height stays fixed at whatever the snippet sets.
4. **`cns-brain-lab-sprint.html` does not exist.** The Nov 30 / Dec 1 lab, "CNS
   Brain, Meninges & CSF", currently links only to the meninges and CSF sprint.
   Every other lab day in the term has full sprint coverage.
5. **Modules 4 and 5 have no pre-work sheets or notes packets yet.** The m1, m2
   and m3 pages cover 36 of the 63 class days. The remaining days fall back to
   the older summer workbooks, which work but are not the new format. Endocrine,
   GI, renal, reproductive and the nervous system are the topics affected.

---

## 7. Reviewer

Dr. Sharilyn Rennie
