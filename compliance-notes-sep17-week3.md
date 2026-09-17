# Accessibility compliance notes

**Project:** BIO 005 Week 3, catch up week wording
**Files covered:** week-03.html, week-03-competencies.html
**Date:** September 17, 2026

## 1. What changed

Three inaccurate competency counts replaced with a plain statement that Week 3
adds nothing new, an empty progress bar replaced with a link to the Week 2 list,
and a null guard added to the script that the removal had broken.

## 2. WCAG version and target level

WCAG 2.2. AA met, with three criteria improved.

| Criterion | Level achieved | How |
|---|---|---|
| 3.3.2 Labels or instructions | AA, improved | The page stated a number of competencies that did not exist, then rendered an empty list. It now states what the week is for and where the work actually lives |
| 1.3.1 Info and relationships | AA, improved | The progress bar carried `role="progressbar"` with `aria-valuemax="0"`, which announces as a meaningless control. It is gone, replaced by a link |
| 4.1.1 / 4.1.2 | AA, improved | A script error stopped execution partway, so the tick behaviour below it never bound. Both element lookups are guarded and the page runs clean |
| 2.4.4 Link purpose | AA | The new button says "Open the Week 2 competencies", which is exactly where it goes |
| 1.4.3 Contrast | AAA | The button is #FFFFFF on #8B3A2E, 7.66:1, the same pair used by every primary button on the site |
| 2.5.8 Target size | AA | The button is 11px padding on 15.5px text, comfortably over 44px tall |

## 3. Color contrast audit

No new colour. The one new element reuses the site's primary button pair,
#FFFFFF on #8B3A2E at 7.66:1, AAA for its size and weight.

## 4. Keyboard navigation flow verified

The removed progress bar was not focusable, so nothing left the tab order. The
new button adds one stop, in reading order, with the standard focus ring.

## 5. Screen reader testing

Checked in the rendered page. The heading announces "Week 3 adds nothing new",
followed by the explanation, then the button with its destination. Previously a
screen reader user heard a progressbar with a maximum of zero and then an empty
list, with no indication that this was intended.

## 6. Known limitations and remediation

1. Week 3 is gated until Monday September 21, so the page is only reachable with
   `?preview=1` before then. That is the gate working as designed.
2. The Week 2 list is now doing double duty for two weeks. If Week 3 ever gains
   competencies of its own, both of these pages need rebuilding from the
   generator rather than edited by hand.
3. Screen reader coverage is VoiceOver only. NVDA on Windows has not been run.

## 7. Reviewer

Dr. Sharilyn Rennie
