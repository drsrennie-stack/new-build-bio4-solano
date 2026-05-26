# Course Site Design System

The complete palette and build preferences behind the BIO 004 Human Anatomy site. Hand this to Claude at the start of a new course and it has everything needed to build the same look: colors, type, components, accessibility floor, and HTML rules. Swap in the new course's name and code; keep everything else.

## 1. Color palette

| Token | Hex | Use |
|-------|-----|-----|
| Navy | `#0B1530` | Primary text and headings on light backgrounds; navy card fills on light backgrounds |
| Card navy | `#1C2E4F` | Card fills that sit on a dark band (lifts off the near-black so it does not read navy-on-navy) |
| Near-black | `#060A18` | Dark section band backgrounds |
| Rust | `#8B3A2E` | Accents on light backgrounds; primary button fill; focus ring on light bands |
| Rust hover | `#A0452F` | Hover state for rust buttons |
| Terra cotta | `#C2734D` | Accent words and numbers on dark backgrounds |
| Soft clay | `#CE8166` | Warm header or accent on a navy or dark surface (used where rust itself fails contrast) |
| Gold | `#C9A14A` | Eyebrow labels on dark backgrounds; focus ring on dark bands |
| Cream | `#F5F1E8` | Body text on dark backgrounds |
| White | `#FFFFFF` | Light band backgrounds; card fills on light backgrounds |
| Border slate | `#8C90A0` | 1px borders on white cards |

Warm-accent rule of thumb: light background uses rust `#8B3A2E`; dark background uses terra cotta `#C2734D` for accent words, or soft clay `#CE8166` for a header on a navy card. Gold `#C9A14A` is the eyebrow color on dark; rust is the eyebrow color on light. Rust never appears as text on a dark background, it fails contrast there.

## 2. Typography

Font: Plus Jakarta Sans (variable). Load with `<link href="https://cdn.jsdelivr.net/npm/@fontsource-variable/plus-jakarta-sans/index.css" rel="stylesheet">`. Weights used: 700 and 800.

| Element | Size | Weight | Notes |
|---------|------|--------|-------|
| Eyebrow | 11px | 700 | uppercase, letter-spacing 0.26em. Rust on light, gold on dark |
| h1 | clamp(32px, 5vw, 46px) | 800 | letter-spacing -0.025em, navy |
| h2 | clamp(23px, 3vw, 30px) | 800 | letter-spacing -0.02em. Navy on light, cream on dark |
| h3 / card title | 16 to 17px | 800 | |
| Lead / body | 15px | 400 | line-height 1.65 |
| Small / card body | 13 to 14px | 400 | |

Accent words inside a heading go in a span: rust on light, terra cotta on dark. Sentence case everywhere; the only uppercase is the small eyebrow and button labels.

## 3. Layout and bands

The page alternates light and dark bands: white `#FFFFFF` and near-black `#060A18`. Band padding is `60px max(40px, 5vw)`. Inner content is max-width 1080px, centered.

## 4. Components

White study card, on a light band: white fill, 1px `#8C90A0` border, radius 12px, padding 22px. Rest shadow `0 1px 3px rgba(11,21,48,0.06)`; on hover it lifts `translateY(-3px)` with shadow `0 10px 22px rgba(11,21,48,0.12)` and the border turns rust.

Navy feature card, used to flag a non-lecture item inside a light card grid (this is the Lab Sprint card): navy `#0B1530` fill, radius 12px, padding 22px. Gold eyebrow, soft-clay `#CE8166` title at 20px weight 800, cream body text and call-to-action.

Day card, on a dark band: card-navy `#1C2E4F` fill, 1px `rgba(245,241,232,0.28)` border, radius 12px. Gold label, cream heading and body.

Primary button: rust `#8B3A2E` fill, white text, 11px weight 700 uppercase, letter-spacing 0.16em, padding 14px 26px, radius 4px. Hover `#A0452F`.

Card hover transition: `transform 200ms ease, box-shadow 200ms ease`.

## 5. Accessibility floor (non-negotiable)

WCAG 2.2 AA is the minimum; reach AAA where achievable. Required: semantic HTML (header, nav, main, section, footer), one h1 per page with no skipped heading levels, a skip link to `#main` as the first focusable element, a 3px focus ring offset 3px (rust on light, gold on dark), labels tied to inputs, accessible names on icon-only buttons, and `prefers-reduced-motion` disabling all transitions and smooth scroll. Every project ships a `compliance-notes.md` with a contrast audit, keyboard flow, and screen-reader notes.

Verified contrast pairs, safe to reuse:

| Pair | Ratio | Level |
|------|-------|-------|
| Navy on white | 18:1 | AAA |
| Cream on near-black | 17.5:1 | AAA |
| Rust on white | 7.7:1 | AAA |
| Gold on near-black | 8.2:1 | AAA |
| Gold on navy `#0B1530` | 7.5:1 | AAA |
| Soft clay on navy `#0B1530` | 6.0:1 | AAA large / AA normal |
| Gold on card-navy `#1C2E4F` | 5.6:1 | AA |
| Terra cotta on near-black | 5.5:1 | AA large |

Watch-outs: rust `#8B3A2E` on any dark background fails at 2.4:1, use soft clay or terra cotta instead. White small text on terra cotta `#C2734D` fails at 3.6:1. Navy text on terra cotta passes for large text only. Two near-but-different shades of one hue should never sit next to each other; make them clearly the same or clearly different.

## 6. HTML build rules

Each page is a single self-contained file with inline CSS and JS, no external build step. Bake the iframe height-sender script before the closing body tag (postMessage with a unique frame id, ResizeObserver, load and resize listeners) so the page sizes correctly when embedded in Canvas or Kajabi. Every internal or same-domain link gets `target="_top"` so it breaks out of the iframe; external links get `target="_blank" rel="noopener"`. The only external resource is the Plus Jakarta Sans font from jsDelivr.

## 7. Writing and voice

No em dashes anywhere; use commas, periods, parentheses, or rewrite the sentence. The student-facing byline and signature is "Dr. Sharilyn Rennie" with no credential suffix. Language is plain and direct, no filler. Pedagogy runs on "Given not Googled": drawing-based synthesis as an integrity mechanism, with clinical context threaded through the anatomy.
