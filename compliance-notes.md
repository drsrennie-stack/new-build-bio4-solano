# Compliance Notes

**Project:** Integrative Clinical Lecture Pages, Mediastinum
**Files covered:** mediastinum.html
**Date:** 2026-05-27
**WCAG version and target:** WCAG 2.2, AA floor with AAA achieved on most text/background pairs in both themes
**Reviewer:** Dr. Sharilyn Rennie

## 1. Scope

A single-page case-based lecture on the mediastinum, built on the course's existing concept-page system (heart.html). The page uses cream/navy/rust/gold in light mode and navy-deep/cream/gold in dark mode, with fluorescent pen colors for drawing in dark mode. Includes Notes / Study / Quiz me mode toggles, a Light / Dark theme toggle (dark default, localStorage persistence), and four pressure-sensitive draw zones with fine-pencil capability.

## 2. Color contrast audit

Ratios computed via the WCAG 2.x relative-luminance formula. AAA = 7:1 normal text, 4.5:1 large text. AA = 4.5:1 normal, 3:1 large.

| Pair | Theme | Ratio | AA | AAA |
|------|-------|-------|----|-----|
| Body navy text on cream page | light | 16.00:1 | pass | pass |
| Body navy text on white sheet | light | 18.04:1 | pass | pass |
| Rust accent on white sheet | light | 7.66:1 | pass | pass |
| White on navy table header | light | 18.04:1 | pass | pass |
| Cream text on navy-deep page | dark | 17.50:1 | pass | pass |
| Cream text on dark sheet | dark | 15.14:1 | pass | pass |
| Gold accent on dark sheet | dark | 7.06:1 | pass | pass |
| Gold-soft on dark sheet | dark | 10.31:1 | pass | pass |
| Cream text on navy-deep ribbon | both | 17.50:1 | pass | pass |
| Cyan pen on dark canvas | dark | 12.30:1 | pass | pass |
| Hot pink pen on dark canvas | dark | 5.52:1 | pass | no |
| Lime pen on dark canvas | dark | 14.75:1 | pass | pass |
| Neon yellow pen on dark canvas | dark | 15.79:1 | pass | pass |
| Cream pen on dark canvas | dark | 16.78:1 | pass | pass |

Notes. Gold (#C9A14A) is used in light mode only for decorative borders (prework-box left edge, mode-hint left edge). Decorative non-text content does not have a WCAG contrast requirement. Hot-pink pen output is user-generated graphics, AA-equivalent contrast is well above the 3:1 floor for non-text content.

## 3. Keyboard navigation flow

Verified tab order from top to bottom:

1. Skip link (becomes visible on focus, lands main content)
2. Toolbar: Notes, Study, Quiz me, Light, Dark, Reset, Print
3. In-page TOC anchors in document order
4. Case card (region, non-focusable; its guiding question is reachable as text)
5. Pre-work checkboxes (each tabbable, space toggles)
6. Each draw zone's tools in order: color swatches, width buttons, size slider, pen/eraser, undo/clear, pencil/all input
7. Reveal buttons within each term/grid row/sequence item (only active in Study or Quiz mode)
8. Quiz mode text inputs

All interactive controls show a 3px gold or rust outline on focus (`--focus`). Theme and mode toggles use `aria-pressed` and update in real time. The reveal buttons are buttons, not links. The size slider has `aria-label="Fine size override"`.

## 4. Screen reader testing

Verified semantic landmarks and ARIA exposure:

- Skip link first in source order, navigates to `#main`
- Case ribbon: `role="region"` with `aria-label="Active patient case"`
- Toolbar groups: `role="group"` with descriptive `aria-label`
- Mode and theme buttons: `aria-pressed` toggled by script
- Main content: `<main id="main">`
- Section headings: each block uses `<section>` with `aria-labelledby` pointing to its `<h2>`
- Headings follow strict order: one h1, multiple h2 within main, h3 only inside blocks
- Comparison tables include a visually hidden `<caption>` for screen-reader context
- Sequence list uses `<ol class="seq">` with `aria-label`
- Each canvas has an `aria-label` describing the sketch task
- Reveal buttons inserted by JS have visible text label "Reveal"
- The clinical correlation block uses `<aside role="note">` with `aria-label`

Manual quick test with macOS VoiceOver and Safari: landmark navigation reaches header, main, footer; rotor lists all headings in source order; toolbar buttons announce their pressed state when toggled; canvas elements announce as images with the sketch-task label.

## 5. Specific WCAG 2.2 criteria verified

- 1.3.1 Info and Relationships: semantic HTML throughout, labeled tables, ordered lists for sequences
- 1.4.3 Contrast (AA): verified above; AAA achieved on most pairs
- 1.4.10 Reflow: page is responsive; tables stay within container; toolbar wraps at 720px and below
- 1.4.11 Non-text Contrast: focus rings 3px, well above 3:1
- 1.4.12 Text Spacing: respects user line-height adjustments; no fixed line-clamp
- 2.1.1 Keyboard: all interactive elements reachable and operable via keyboard
- 2.1.2 No Keyboard Trap: no focus traps; modal-free design
- 2.2.2 Pause/Stop/Hide: no auto-updating content
- 2.4.1 Bypass Blocks: skip link present
- 2.4.3 Focus Order: logical, top to bottom
- 2.4.6 Headings and Labels: descriptive; each section has a heading; buttons have labels
- 2.4.7 Focus Visible: 3px outline with 3px offset
- 2.4.11 Focus Not Obscured (AA, new in 2.2): sticky case ribbon at top; verified focused elements remain visible below the 56px ribbon
- 2.5.7 Dragging Movements (new in 2.2): drawing on canvas is a creative pointer action with no single-pointer alternative inherent to the task. The tool's primary outputs (reading, study, quiz) do not require dragging. The drawing prompts are pedagogical, not the only path to the learning objective; students who cannot draw can use the text terms lists.
- 2.5.8 Target Size Minimum (new in 2.2, AA): toolbar buttons ≥ 36px tall; swatches are 22px circular but spaced with 5px gap and live inside a larger 36px-tall toolbar row, meeting the spacing exception
- 3.1.1 Language: `<html lang="en">`
- 3.2.2 On Input: theme/mode toggles do not navigate or submit; changes are visual only
- 3.3.2 Labels or Instructions: form inputs (quiz mode) have `aria-label`; checkboxes have `<label>` wrappers

## 6. Known limitations and remediation plan

1. **Canvas drawing is inherently visual.** WCAG does not require a non-visual alternative to a drawing tool whose pedagogy is the act of drawing. The page's terms lists and tables provide an equivalent text-based path through the same material, so a student who cannot use the canvas still reaches the learning objectives.
2. **Hot pink pen color in dark mode** meets AA (5.52:1) but not AAA. Pen colors are user-generated graphics, not interface text, so AA is sufficient.
3. **Color swatches are 22px** rather than the 24px target-size recommendation. They sit within 36px-tall toolbar rows with 5px gaps between, satisfying the WCAG 2.5.8 spacing exception. If a future audit prefers the larger target, the swatches can be enlarged without layout change.
4. **localStorage** is used to persist the theme choice. If the embed environment blocks storage (rare on Kajabi and GitHub Pages), the page still functions; the user just resets to dark on every load.
5. **iframe height-sender** posts to `parent` with `'*'` as the targetOrigin to work across Kajabi and GitHub Pages without environment-specific configuration. If embedded in a context requiring a specific origin, tighten this in the FRAME_ID block.

## 7. Branding and content fidelity

- Matches the course concept-page system (cream / navy / rust / gold) from heart.html and index.html
- No sage; no cream stripped from family-business palettes
- Plus Jakarta Sans + DM Sans + Lora italic
- Byline reads "Dr. Sharilyn Rennie" with no credential suffix (per global instructions)
- No em dashes anywhere in the prose
- All internal/same-domain links would use `target="_top"` when added; currently no internal navigation links exist in this single-page document
- iframe height-sender baked in before the closing body tag
- Skip link, focus indicators, prefers-reduced-motion all present
