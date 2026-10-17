# Accessibility compliance notes

**Project:** BIO 004 syllabus pages, Fall 2026 (MedMasters site language)
**Files:** bio004-syllabus-update.html, bio004-how-tbls-work.html, bio004-exam-scope.html, bio004-why-before-class.html, bio004-required-optional.html, bio004-anatomy-feels-hard.html, bio004-canvas-pages-setup.html
**Date:** October 17, 2026

## WCAG version and target

WCAG 2.2. Level AA met on every criterion checked below; AAA met for all body text and headings.

## Color contrast audit

| Pair | Ratio | Normal text | Large text |
|---|---|---|---|
| Ink #0B1530 on white | 17.4:1 | AAA | AAA |
| Soft gray #46555F on white | 7.7:1 | AAA | AAA |
| Maroon #7A2A22 on white (eyebrows, h2 highlight, links, numerals) | 9.6:1 | AAA | AAA |
| Muted #6B7682 on white (citations, past table rows) | 4.6:1 | AA | AAA |
| White on navy #060B1A | 19.5:1 | AAA | AAA |
| #C9CFD9 on navy #060B1A (band body text) | 12.4:1 | AAA | AAA |
| Gold #B8924A on navy #060B1A (band eyebrows, 13px bold uppercase) | 6.5:1 | AA | AAA |
| Terra-light #C2734D on navy (highlighted headline words, 28px+) | 5.5:1 | AA | AAA |
| Terra #A0522D on navy (01/02/03 numerals, 72px decorative) | 3.1:1 | n/a | AA (large) |
| White on maroon #7A2A22 (buttons, badges) | 9.6:1 | AAA | AAA |

Note: the big maroon-on-navy numerals in the dark bands sit at the large-text AA line, the same treatment your MedMasters site uses. They are decorative section numbers, and each column also carries a white title, so nothing depends on reading them.

## Keyboard navigation

Skip link on every page. Top nav, buttons, text links, accordion summaries and copy buttons are all in the tab order with a 3px maroon focus outline. Accordions are native details/summary, so Enter and Space open them and screen readers announce the state. A link to a question inside a closed accordion opens it on arrival. prefers-reduced-motion turns off smooth scrolling.

## Screen reader

Landmarks: header, nav (labelled), main, section with aria-labelledby, footer. One h1 per page, h2 per section, h3 on exam cards. Tables use th with scope. The course mark is an inline SVG marked decorative, with the course name as live text beside it; the mark link carries an aria-label. Copy buttons have visible text; textareas have for+id labels. No italics anywhere.

## Known limitations and remediation

- The TBL list on the setup sheet depends on schedule-fall2026.js; a fallback sentence appears if it does not load.
- Iframe heights in the embed codes are first-paint estimates; the height-sender script corrects them live, including when an accordion opens.

## Reviewer

Dr. Sharilyn Rennie
