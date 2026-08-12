# Compliance notes: Today page and reading format

**Project:** BIO 004 Human Anatomy, Fall 2026 (new-build-bio4-solano)
**Files covered:** `today.html`, `bio004-reading-mode.js`, `bio004-dock.js`
**Date:** August 12, 2026
**Reviewer:** Dr. Sharilyn Rennie

---

## 1. What changed

Three files. Two edited, one new.

| File | Change |
|---|---|
| `today.html` | Added a day strip (the week's class days, today preselected, any day clickable), a complete "Everything for this day" panel sourced from the schedule, and the course dock, which this page did not have. |
| `bio004-reading-mode.js` | New. Turns long pages into sections with a full contents list, a per-section time estimate and a page search. |
| `bio004-dock.js` | Added a "Today" tile as the first tile in the dock, and a loader for the reading format. |

---

## 2. WCAG version and target level achieved

Target: WCAG 2.2 AA minimum, AAA where achievable. Assessed per criterion for the changed files only.

| Criterion | Level | Result |
|---|---|---|
| 1.3.1 Info and Relationships | A | Pass. The accordion control sits inside a real `h2`, so the heading map is preserved. Each panel is a `region` with `aria-labelledby` pointing at its control. |
| 1.4.3 Contrast (Minimum) | AA | Pass, at AAA. See section 3. |
| 1.4.11 Non-text Contrast | AA | Pass. Focus rings use terra `#6B1616` at 8.9:1 on white, not the gold that fails elsewhere in the repo. |
| 1.4.12 Text Spacing | AA | Pass. No fixed heights on text containers. |
| 2.1.1 Keyboard | A | Pass. Every control is a real `button` or `a`. No `div` with `onclick`. |
| 2.4.3 Focus Order | A | Pass. Contents list, then bar, then sections in document order. |
| 2.4.6 Headings and Labels | AA | Pass. Section titles are taken verbatim from the page's own headings. |
| 2.4.7 Focus Visible | AA | Pass. `:focus-visible` defined on every control, 3px, offset 2px. |
| 2.4.11 Focus Not Obscured | AA (2.2) | Pass. No sticky element is added by these files. |
| 2.5.8 Target Size (Minimum) | AA (2.2) | Pass. All controls are at least 44px in the smaller dimension. |
| 3.2.3 Consistent Navigation | AA | Pass. The bar and contents list render in the same position on every qualifying page. |
| 4.1.2 Name, Role, Value | A | Pass. `aria-expanded` on section controls, `aria-pressed` on the mode toggle, `role="status"` with `aria-live="polite"` for search results and mode changes. |

**Not applicable:** 1.2.x (no new media), 2.2.1 (no timers added), 3.3.x (no form input beyond a search field with a visible label).

---

## 3. Colour contrast audit

Every pair measured against WCAG relative luminance.

| Foreground | Background | Ratio | AA | AAA |
|---|---|---|---|---|
| `#08101F` section title | `#FFFFFF` card | 19.02:1 | Pass | Pass |
| `#3D4757` minutes and helper text | `#FFFFFF` | 8.42:1 | Pass | Pass |
| `#6B1616` terra labels and numerals | `#FFFFFF` | 8.91:1 | Pass | Pass |
| `#F2E2B8` bar statistic | `#08101F` bar | 14.77:1 | Pass | Pass |
| `#C6CFDC` bar explanation | `#08101F` bar | 10.42:1 | Pass | Pass |
| `#FFFFFF` bar buttons | `#08101F` bar | 19.02:1 | Pass | Pass |
| `#08101F` search input text | `#FAFAF9` field | 18.20:1 | Pass | Pass |
| `#6B1616` focus ring | `#FFFFFF` page | 8.91:1 | Pass (3:1 needed) | Pass |
| `#DCB45C` focus ring on the dark bar | `#08101F` bar | 9.71:1 | Pass | Pass |
| `#DCB45C` search-hit border | `#FFFFFF` | 2.42:1 | Decorative only, see note |

**Note on the gold hit border.** Gold at 2.42:1 on white does not meet 3:1, so it is never the only signal. A matched section is also opened, scrolled to, and counted in an `aria-live` message. The border is redundant reinforcement.

---

## 4. Keyboard navigation flow verified

Verified in Chromium with the pointer unused.

**today.html:** Skip link, then day strip buttons in date order, then Earlier week, Later week, Back to today, then the headline card, then each step control, then the complete-day links, then the footer, then the dock launcher. Choosing a day moves focus to the day headline, and the change is announced.

**Reading format:** Skip link, then Open everything, then the mode toggle, then the search field, then each contents entry, then each section control in page order. Enter or Space toggles a section. A contents entry opens its target and moves focus to that section's control.

No keyboard trap. No positive `tabindex`. Nothing reachable by pointer only.

---

## 5. Screen reader testing

Verified against the accessibility tree in Chromium DevTools, plus automated assertions in the test suite.

- Section controls expose `button`, expanded state, and their accessible name from the heading text.
- Section panels expose `region` named by their control.
- The original heading is left in the flow with `aria-hidden="true"` so it is not announced twice.
- Search results and mode changes announce through `role="status"`.
- The day strip is a `nav` with an accessible name, and day buttons carry `aria-pressed`.

Not yet run against JAWS, NVDA or VoiceOver. See section 6.

---

## 6. Known limitations and remediation plan

| Limitation | Impact | Plan |
|---|---|---|
| No testing with JAWS, NVDA or VoiceOver yet | The accessibility tree is correct but real screen reader behaviour is unverified | Run one pass with VoiceOver and one with NVDA before the term opens |
| `hidden="until-found"` is not supported in every browser | Find in page may not reach a closed section in older Safari and Firefox | Mitigated already: the built-in page search opens any matching section in every browser, and the contents list always names every section |
| The reading format does not run on slide decks, timers or tool pages | Those pages keep their current length | Intended. They paginate themselves and chunking them would break them |
| `m5-cranial-notes.html` and similar sit just under the size threshold | They stay as continuous pages | Acceptable at roughly 5 screens. Revisit if students report otherwise |
| Two pages have pre-existing JavaScript syntax errors | `atlas-coloring-book.html` and `bio004-room-map-timer.html` throw on load. Unrelated to this change, present before it | Fix separately |

---

## 7. Design constraint verified by test

The requirement was that nothing may be hidden, gated or made to feel withheld. Ten assertions run against `BIO004-Module1-Packet.html` and `cns-brain.html`, all passing:

1. The contents list names every section, 34 of 34.
2. All page text remains in the DOM when sections are closed, 128,659 characters.
3. The page opens in reading format with the first section already open.
4. "Open everything" opens all 34 sections.
5. Page search opens every matching section, including ones that were closed.
6. Closed panels carry `hidden="until-found"`, 28 of 28.
7. An existing `#anchor` opens the section containing it.
8. The control sits inside a real heading, 34 of 34.
9. The mode choice carries to the next page.
10. No clinical or category wording appears anywhere in the interface.

A repository sweep of 70 distinct page types recorded zero cases of text loss and zero cases of an incomplete contents list.

---

## 8. Wording

The interface describes a reading preference, never a person. It says "Reading format", "Show everything, always", and "Nothing on this page is hidden from you." It does not name any condition, category or group, and no student has to identify themselves to use it.

---

## Reviewer

Dr. Sharilyn Rennie
