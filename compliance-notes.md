# Compliance Notes — BIO 004 Branding + Readability Pass

Project: BIO 004 Human Anatomy (new-build-bio4-solano)
Files covered: all 228 HTML pages (STAT grade-recovery embed in index.html excluded by request)
Date: June 12, 2026
Reviewer: Dr. Sharilyn Rennie

## What changed in this pass

1. Cream removed. Every #F5F1E8 cream value replaced with white #FFFFFF to match the primary palette. 131 pages. The one exception is the STAT Grade Recovery section in index.html, left untouched per request.
2. Course identity corrected. 24 slide decks were mis-branded "BIO 304 / American River College"; all now read "BIO 004 / Solano Community College."
3. Logo added to bare pages. 42 lecture, case, and reference pages had no logo lockup. Each now opens with the standard navy/rust/gold three-figure "Human Anatomy / BIO 004 / Solano Community College" header, linked home with target="_top".
4. Font sizes increased 12%. All px/rem/pt font sizes scaled by 1.12. Relative units (vw, em, %) left to inherit so nothing compounds or overflows.

## Color contrast audit (pairs touched)

| Pair | Ratio | Level |
|------|-------|-------|
| Navy #0B1530 on white #FFFFFF | 18:1 | AAA |
| White #FFFFFF on near-black #060A18 (was cream) | 19:1 | AAA |
| Rust #8B3A2E on white #FFFFFF | 7.7:1 | AAA |
| Gold #C9A14A on near-black #060A18 | 8.2:1 | AAA |

Replacing cream text on dark bands with white raises contrast (cream 17.5:1, white 19:1). No pair regressed.

## Keyboard + screen reader

Injected logo headers are a single focusable link (visible focus ring, first interactive element, target="_top"). Link carries aria-label="BIO 004 Human Anatomy, course home"; decorative SVG is aria-hidden="true". Matches the pattern on the 155 standard pages.

## Known limitations

- STAT Grade Recovery section in index.html still uses a cream background by request.
- Injected headers on immersive case pages sit above the existing sticky case ribbon (intentional; eyeball once live).
- Font scaling was mechanical (x1.12); spot-check dense pages in browser for awkward wraps.
