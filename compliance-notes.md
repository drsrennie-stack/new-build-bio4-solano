# Accessibility compliance notes: TBL Team Generator

**1. Project**

TBL Team Generator. Files covered: team-generator.html (the app), google-form-setup.md, sample-responses.csv. Date: June 14, 2026. Reviewer: Dr. Sharilyn Rennie.

**2. WCAG version and target level**

Target: WCAG 2.2 AA across the board, AAA where achievable.

- 1.3.1 Info and relationships: AA met. Semantic landmarks (header, main, footer), section/aria-labelledby, real labels tied to inputs with for/id, a data table with th scope for the transparency report.
- 1.4.3 Contrast (minimum): AA met, most pairs AAA (see audit below).
- 1.4.11 Non-text contrast: AA met. Focus indicator and control borders clear 3:1.
- 2.1.1 Keyboard: AA met. Every control is a native button, input, select, file input, anchor, or details/summary; all keyboard operable.
- 2.4.1 Bypass blocks: AA met. Skip link to main content.
- 2.4.7 Focus visible: AA met. 3px navy outline with 2px offset on all focusable elements.
- 2.4.11 Focus not obscured: AA met. Offset outline, no sticky overlays.
- 3.3.2 Labels or instructions: AA met. Every field labeled; hints via aria-describedby on the file input.
- 4.1.3 Status messages: AA met. File-load status and results region use aria-live="polite".
- 2.3.3 Animation from interactions (AAA): met. prefers-reduced-motion disables transforms and transitions.

**3. Color contrast audit**

Palette: PRIMARY (navy #1E3D4C, navy-deep #142a36, gold #B8924A, terra-dark #A0522D, gray #5E6970, white, off-white #FAFAF9). Computed ratios:

| Text / element | Background | Ratio | Level |
|---|---|---|---|
| Navy body text | Off-white page | 11.0:1 | AAA |
| Navy body text | White card | 11.5:1 | AAA |
| Terra-dark eyebrow and step labels | White / off-white | 5.6:1 / 5.4:1 | AA |
| Gray hint text | Off-white page | 5.4:1 | AA |
| White text | Navy buttons | 11.5:1 | AAA |
| Navy-deep text | Gold buttons (rest) | 5.1:1 | AA |
| Navy-deep text | Gold buttons (hover #C7A05A) | 6.1:1 | AA |
| Navy-deep text | Gold "Organizer/Leader" badge | 5.1:1 | AA |
| Navy text | Gold-bordered "Tech" badge (white fill) | 11.5:1 | AAA |
| White text | Terra-dark "Licensed" badge | 5.6:1 | AA |
| Navy focus outline | Off-white / white | 11.0:1 / 11.5:1 | AAA (UI) |

Two failures found in first pass and remediated before sign-off: white-on-gold text (was 2.9:1) replaced with navy-deep-on-gold; gold-as-text labels recolored to terra-dark/navy; gray darkened from #6B7780 to #5E6970; focus ring moved from gold to navy. No remaining pair below 4.5:1 for text or 3:1 for UI components. No green used for status, per the teaching palette rule.

**4. Keyboard navigation flow verified**

Tab order: skip link, Choose CSV, Load sample, then (after data loads) column-mapping selects in order, team-size input, team-count input, tier-order toggle pair, Generate, Re-roll, then results actions (Download CSV, Print), then the transparency details disclosure. All selects open with Enter/Space and arrow keys. The details/summary expands with Enter. No keyboard trap. File input is a real input styled as a button, focusable and operable.

**5. Screen reader testing**

Verified structure with VoiceOver (macOS). Landmarks announce as banner, main, contentinfo. Headings nest h1 to h2 to h3 with no skips. File status and the results section announce on update via aria-live. The tier toggle exposes aria-pressed state. Icon-only controls: none; all buttons have text labels.

**6. Known limitations and remediation plan**

- "Shared meeting window" flags a team only when all members are free in the same block; with six members and four blocks this is often unmet and is surfaced as an informational note, not an error. Intended behavior. Remediation: none needed; copy already explains members may meet in subgroups.
- The app runs fully client-side, so it depends on the browser's own zoom and reflow. Verified usable to 400 percent zoom and at 320px width via responsive grid collapse.
- Print stylesheet hides interactive controls; verified team cards do not break across pages.

**7. Reviewer**

Dr. Sharilyn Rennie.
