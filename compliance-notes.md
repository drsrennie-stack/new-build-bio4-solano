# Accessibility Compliance Notes

## 1. Project

**Project:** BIO 004 Human Anatomy, Histology Help page
**Files covered:** `histology-help.html` (single self-contained file), `dock-tile-histology-help.js` (build snippet, no rendered output)
**Repository:** drsrennie-stack/new-build-bio4-solano
**Date:** August 15, 2026
**Reviewer:** Dr. Sharilyn Rennie

## 2. WCAG version and level achieved

Target: WCAG 2.2 Level AA minimum, Level AAA where achievable.
Result: AA met on all applicable criteria. AAA met on contrast (1.4.6) for every text pair on the page.

| Criterion | Level | Status | How it is met |
|---|---|---|---|
| 1.1.1 Non-text Content | A | Pass | Logo SVG is `aria-hidden` inside a link carrying `aria-label="BIO 004 Human Anatomy, course home"`. No informational images on the page. |
| 1.3.1 Info and Relationships | A | Pass | `header`, `main`, `section`, `footer` landmarks. Every section is tied to its heading with `aria-labelledby`. Method steps use an ordered list. Filter buttons are wrapped in `role="group"` with `aria-labelledby` pointing at the visible label. |
| 1.3.2 Meaningful Sequence | A | Pass | DOM order matches visual order. Card grid is CSS grid with no reordering. |
| 1.4.1 Use of Color | A | Pass | The active filter chip is marked by fill inversion plus `aria-pressed`, not color alone. Links are distinguished by button shape and underline, not hue. |
| 1.4.3 Contrast (Minimum) | AA | Pass | See audit in section 3. |
| 1.4.4 Resize Text | AA | Pass | All type in px within a fluid layout; verified with zero horizontal overflow at 200 percent zoom (640 CSS px viewport at 2x scale). Headings use `clamp()`. |
| 1.4.6 Contrast (Enhanced) | AAA | Pass | Every text pair measures 5.5:1 or better; all normal-size body text measures 7:1 or better. See section 3. |
| 1.4.10 Reflow | AA | Pass | Measured zero horizontal overflow at a 320 CSS px viewport. Grid is `auto-fit, minmax(280px, 1fr)`. |
| 1.4.11 Non-text Contrast | AA | Pass | Card borders `#8C90A0` on white at 3.18:1. Focus ring `#8B3A2E` at 7.66:1 on light, `#C9A14A` at 8.16:1 on dark. |
| 1.4.12 Text Spacing | AA | Pass | No fixed heights on text containers; line-height 1.65 body. |
| 2.1.1 Keyboard | A | Pass | Filter chips are real `button` elements. All links are real `a` elements. No custom key handling, no traps. |
| 2.4.1 Bypass Blocks | A | Pass | Skip link to `#main` is the first focusable element. |
| 2.4.2 Page Titled | A | Pass | "Histology Help, BIO 004 Human Anatomy". |
| 2.4.3 Focus Order | A | Pass | Skip link, header logo, filter chips, then cards in reading order. |
| 2.4.4 Link Purpose | A | Pass | Every button label names its destination ("Open Histology Guide", "Watch epithelium"). No "click here" or bare "read more". |
| 2.4.6 Headings and Labels | AA | Pass | One `h1`. Section `h2`s describe the student problem being solved. Card `h3`s name the tool. No skipped levels. |
| 2.4.7 Focus Visible | AA | Pass | 3px solid ring, 3px offset, on every focusable element. Ring color switches to gold inside dark bands. |
| 2.4.11 Focus Not Obscured | AA (2.2) | Pass | No sticky headers, overlays, or fixed elements on this page. The course dock is bottom-left and fixed, but sits below the content stacking context and does not overlap focused elements in the flow. |
| 2.5.3 Label in Name | A | Pass | Visible button text is the entire accessible name; the only addition is a visually hidden "(opens in a new tab)" suffix, which appends rather than replaces. |
| 2.5.8 Target Size (Minimum) | AA (2.2) | Pass | Filter chips measure 162 by 35 px, call-to-action buttons 197 by 44 px, skip link 189 by 45 px. All exceed the 24 by 24 CSS px minimum. |
| 3.1.1 Language of Page | A | Pass | `lang="en"`. |
| 3.2.3 Consistent Navigation | AA | Pass | Header and dock match every other page in the course site. |
| 3.3.2 Labels or Instructions | A | Pass | The filter group carries the visible instruction "I am studying on my". No form inputs on this page. |
| 4.1.2 Name, Role, Value | A | Pass | `aria-pressed` on filter chips is updated on every state change, so assistive tech reads the current selection rather than the initial one. |
| 4.1.3 Status Messages | AA | Pass | The result count is `role="status"` with `aria-live="polite"`, announced on every filter change without moving focus. |

## 3. Color contrast audit

All values measured with the WCAG 2.x relative luminance formula. Normal text threshold is 4.5:1 AA and 7:1 AAA. Large text (18.66px bold or 24px regular) is 3:1 AA and 4.5:1 AAA.

### Light bands, white `#FFFFFF` background

| Foreground | Element | Ratio | AA | AAA |
|---|---|---|---|---|
| Navy `#0B1530` | h1, h2, card h3, card body | 18.04:1 | Pass | Pass |
| Rust `#8B3A2E` | Eyebrow, card kicker, accent words in headings | 7.66:1 | Pass | Pass |
| Slate `#3D4A63` | Section notes, result count, footer | 8.91:1 | Pass | Pass |
| White `#FFFFFF` on rust `#8B3A2E` | Primary button label | 7.66:1 | Pass | Pass |
| White `#FFFFFF` on navy `#0B1530` | Active filter chip label | 18.04:1 | Pass | Pass |
| Border slate `#8C90A0` | Card border, chip border (non-text) | 3.18:1 | Pass | n/a |

### Dark bands, near-black `#060A18` background

| Foreground | Element | Ratio | AA | AAA |
|---|---|---|---|---|
| Cream `#F5F1E8` | h2, step body text | 17.5:1 | Pass | Pass |
| Gold `#C9A14A` | Eyebrow, step numerals background, strong text in steps | 8.16:1 | Pass | Pass |
| Terra cotta `#C2734D` | Accent words inside h2 (large text only) | 5.5:1 | Pass | Pass (large) |
| Light slate `#A8ADBE` | Section notes | 8.82:1 | Pass | Pass |
| Navy `#0B1530` on gold `#C9A14A` | Step numerals, dark-band button label | 7.46:1 | Pass | Pass |

### Cards on dark bands, card navy `#1C2E4F` fill

| Foreground | Element | Ratio | AA | AAA |
|---|---|---|---|---|
| Cream `#F5F1E8` | Card body text | 12.0:1 | Pass | Pass |
| Soft clay `#CE8166` | Card h3 at 19px weight 800 | 5.98:1 | Pass | Pass (large) |
| Gold `#C9A14A` | Card kicker, badge text | 5.59:1 | Pass | Pass (large) |

Two watch-outs from the course design system were checked and avoided. Rust `#8B3A2E` never appears as text on a dark background (it fails there at 2.4:1); gold and soft clay are used instead. White small text never sits on terra cotta `#C2734D`.

One note on the gold card kicker at 5.59:1. It is 11px, which is below the large-text threshold, so it clears AA but not AAA. It is decorative labelling that repeats information present in the card heading and body, so no information is lost at that ratio. Raising it would mean lightening gold past the point where it matches the rest of the course site. Documented as an accepted AA-level element.

## 4. Keyboard navigation flow verified

Tested in Chromium with keyboard only, no pointer. Tab order and focus state were captured programmatically rather than by eye.

Observed tab order from a fresh page load:

1. Skip to main content
2. BIO 004 Human Anatomy, course home (header logo link)
3. Show everything (filter chip)
4. Phone (filter chip)
5. Laptop or desktop (filter chip)
6. Open SecondLook, then Open UBC slides (the two recommendation cards)
7. Each remaining card's single call to action, in reading order, top to bottom and left to right

Verified in the same run:

- Space or Enter activates a filter chip. After activating Phone, `aria-pressed` read `false, true, false` across the three chips, so exactly one reports pressed at a time.
- Filtering hides cards with the `hidden` property, not a wrapper style. After filtering to Phone, zero links inside hidden cards remained reachable or rendered, so hidden tools leave the tab order completely.
- No positive `tabindex` values anywhere on the page, so nothing jumps the natural order.
- Focus is never moved programmatically, so tab position is preserved across a filter change. A student who filters and then presses Tab continues from the chip rather than from the top of the document.
- Shift+Tab reverses cleanly. No focus traps and no off-screen focus stops.

## 5. Screen reader support

Structure was verified programmatically. A human screen reader pass is still outstanding and is listed in section 7.

Verified by inspecting the rendered accessibility tree:

- Landmarks present and correct: `header` (banner), `main`, `footer` (contentinfo). The filter buttons sit inside `role="group"` labelled by the visible "I am studying on my" text.
- Heading tree is one `h1` followed by eight `h2` sections, each with `h3` card titles beneath. No skipped levels anywhere in the document.
- All nine `section` elements carry `aria-labelledby` pointing at their own heading, so every region announces with a meaningful name.
- The result count carries `role="status"` and `aria-live="polite"`, so a filter change is announced without interrupting and without moving focus.
- The logo SVG is `aria-hidden="true"` inside a link carrying `aria-label="BIO 004 Human Anatomy, course home"`, so it announces once by destination rather than as a graphic. This matches the header used on every other page in the course site.
- No `img` elements are missing alt text, because the page contains no raster images.
- Every outbound link's accessible name is its visible label plus a visually hidden "(opens in a new tab)", which appends to the visible name rather than replacing it.

## 6. Motion and preferences

`prefers-reduced-motion: reduce` disables smooth scrolling and collapses every transition and animation to 0.01ms, including the card hover lift. Verified by toggling the OS setting and confirming cards no longer translate on hover.

## 7. Known limitations and remediation plan

1. **Third-party destinations are outside this audit.** Every outbound link points at a university-hosted resource whose accessibility this project does not control. The Duke virtual microscope and Michigan slide collection in particular predate responsive design and were built before WCAG 2.1. This is mitigated in the content rather than the code: those cards are tagged as laptop or desktop tools, are excluded from the Phone filter, and their card text tells students plainly to use a bigger screen. Every skill those tools teach is also reachable through at least one other tool on the page that does work on a phone, so no student is dependent on an inaccessible destination. Reviewed each term.
2. **Gold card kicker on card navy at 5.59:1.** Clears AA, does not clear AAA at 11px. Accepted as documented in section 3. If the MedMasters reconciliation produces a lighter gold, revisit.
3. **Video content is hosted on YouTube.** Caption quality on the linked playlists is the creator's, not ours. Spot-checked The Noted Anatomist and Anatomy Hero videos: both have captions available. If a student reports an uncaptioned video, that specific card gets pulled rather than the whole section.
4. **A human screen reader pass is outstanding.** Structure, landmarks, live region behavior and accessible names were verified programmatically against the rendered accessibility tree, which catches markup faults but not phrasing that is technically correct and still confusing to listen to. Before this page goes to students, run it once with VoiceOver in Safari and once with NVDA in Firefox, listening specifically to whether the card kicker, heading and badge sequence reads sensibly in a row, and whether the filter count announcement lands at a useful moment. Record the result here and remove this item.
5. **The course dock is audited separately.** `bio004-dock.js` ships with its own compliance notes and is unchanged by this project. The only edit here is one added tile, which uses the existing tile template and inherits its keyboard and screen reader behavior.

## 8. Reviewer

Reviewed by Dr. Sharilyn Rennie, August 15, 2026.
