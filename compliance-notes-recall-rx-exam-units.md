# Accessibility Compliance Notes: Recall Rx (Muscle, Lymphatic, Blood)

## 1. Project, files, date

- Project: BIO 004 Human Anatomy, Recall Rx spaced-recall system
- Deliverable: three exam-unit decks (Muscle, Lymphatic, Blood) plus the study app
- Files covered:
  - `recall-rx-exam-prep.html` (the study app)
  - `recall-rx-cards.js` (the 594-card bank, `window.BIO004_COURSE_CONTENT`)
- Date: July 7, 2026
- Scope note: anatomy (structures) only. No physiological process or mechanism content. Sage and cream are not used.

## 2. WCAG version and target level

Target: WCAG 2.2 AA minimum, AAA where achievable. The app reuses the shipped Recall Rx engine; the new work is the card content and the wiring (content source, first-run activation, title). Results below reflect inspection of the delivered files.

Achieved:

- Text contrast: AA met on every text pair; AAA met on all primary navy text, terra eyebrows, and button text (see section 3).
- Semantic structure, keyboard operability, labels, live regions, reduced-motion: present (sections 4 to 5).

## 3. Color contrast audit

Computed from the app's actual CSS custom properties (not the reference palette, which the engine overrides with darker tokens).

| Pair | Ratio | AA normal | AAA |
|------|-------|-----------|-----|
| Navy text `#0B1530` on off-white `#FAFAF9` | 17.27:1 | Pass | Pass |
| Navy text `#0B1530` on white card `#FFFFFF` | 18.04:1 | Pass | Pass |
| Gray-soft sub-text `#5c6970` on white `#FFFFFF` | 5.66:1 | Pass | Below 7:1 |
| Gray-soft sub-text `#5c6970` on off-white `#FAFAF9` | 5.42:1 | Pass | Below 7:1 |
| Terra eyebrow `#8B3A2E` on off-white `#FAFAF9` | 7.33:1 | Pass | Pass |
| Terra eyebrow `#8B3A2E` on white `#FFFFFF` | 7.66:1 | Pass | Pass |
| White button text `#FFFFFF` on navy `#0B1530` | 18.04:1 | Pass | Pass |
| Navy text on navy-tint completed state `#ECEEF2` | 15.53:1 | Pass | Pass |
| Gold accent `#C9A14A` on white (border/accent, not text) | 2.42:1 | n/a text | n/a |
| Gold-deep `#B08B3A` on white (border/accent, not text) | 3.18:1 | n/a text | n/a |

Gold is used only for accents and unlocked-state borders, never for text. See known limitations for the one border-contrast follow-up.

## 4. Keyboard navigation flow

Verified by inspection of the markup and interaction handlers:

- Skip link present (10 skip references) so keyboard users bypass the header.
- All primary controls are native buttons, links, checkboxes, radios, and a textarea, so they are in the tab order and operable by Enter/Space.
- Collapsible unit groups use native `<details>`/`<summary>`, which are keyboard-operable and expose expand state without needing `aria-expanded`.
- Answer choices render as real buttons in a labeled group; the written-recall answer is a labeled textarea.
- Visible focus styles are defined (`:focus` rules present) so the focused element is identifiable.
- Internal and same-domain links carry `target="_top"` (5 instances) for correct behavior when embedded.

## 5. Screen reader support

Present in the delivered markup (verified by inspection):

- `lang` set on the document.
- 16 `aria-label` accessible names, including on icon-only and grouped controls.
- 7 `aria-live` regions for dynamic updates (session progress, reveal, feedback).
- 6 `aria-pressed` states on toggle-style controls.
- 8 ARIA `role` assignments, including grouped answer choices.
- `prefers-reduced-motion` respected (3 rules) so animation is reduced for users who ask for it.

Pending: a live pass with VoiceOver or NVDA on the running page to confirm reading order and that each live-region update is announced once. This has not been run in this build and should be done before wide release.

## 6. Known limitations and remediation

1. Live screen-reader pass not yet performed (see section 5). Remediation: run VoiceOver (Safari) and NVDA (Firefox) through one study session per card type (multiple-choice and written recall) and the weakness view; confirm announcements and reading order.
2. Gold border contrast: `#C9A14A` on white is 2.42:1, below the 3:1 non-text UI-component threshold if it is ever the sole indicator of a boundary or state. Remediation: use `#B08B3A` (3.18:1) for gold borders, or pair gold with a shape or label so color is not the only cue. Locked/unlocked/completed states already differ by border style and fill, not color alone.
3. Voice-to-text (written-recall mic) depends on the browser Speech Recognition API and is unavailable in some browsers. It is an optional aid; typing and self-grading work without it. No remediation required; it degrades gracefully.
4. Service worker (`sw.js`) and app icons are referenced for install/offline use. If the app is hosted without those files, registration fails silently (wrapped in try/catch) and the app still runs. Provide those files at the host path for full PWA/offline behavior.

## 7. Reviewer

Prepared by Claude (Cowork) for Dr. Sharilyn Rennie. Contrast ratios computed programmatically from the delivered file's tokens. Structural and keyboard findings verified by markup inspection. Live screen-reader verification is pending sign-off by Dr. Sharilyn Rennie.
