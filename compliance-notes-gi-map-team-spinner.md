# Compliance notes: GI Map Team Spinner

Project: BIO 004 Human Anatomy, GI Map team project (assignment slide)
Files covered: bio004-gi-map-team-spinner.html, bio004-gi-map-helpers-print.html, BIO004-GI-Map-Helper-01 to 05 PDFs and BIO004-GI-Map-Helpers-ALL.pdf
Date: November 9, 2026

## WCAG target

WCAG 2.2 AA met across the page. AAA contrast met for all body text pairs listed below.

## Color contrast audit

| Text | Background | Ratio | Result |
|------|------------|-------|--------|
| Navy text #0B1530 | White #FFFFFF | 17.4:1 | AAA |
| Navy text #0B1530 | Off-white #FAFAF9 | 16.7:1 | AAA |
| Maroon eyebrow and numerals #7A2A22 | White #FFFFFF | 9.3:1 | AAA |
| Muted text #4E5566 | White #FFFFFF | 7.3:1 | AAA |
| Cream text #F5F1E8 | Near-black band #060B1A | 17.5:1 | AAA |
| Gold eyebrow #DCB45C | Near-black band #060B1A | 9.6:1 | AAA |
| Highlight word #C0473C (large, 28px+ bold) | Near-black band #060B1A | 4.9:1 | AA large text |
| White wheel numerals (72px bold) | Wheel slices #0B1530, #7A2A22, #1C2E4F, #5E1F19, #060B1A | 9.3:1 or better | AAA |
| Taken slice numerals #4E5566 | Gray slice #D9DDE3 | 5.9:1 | AA (decorative state, result is also announced in text) |
| White button label | Maroon #7A2A22 | 9.3:1 | AAA |

## Keyboard navigation

Tab order: skip link, header buttons (prompt toggle, print), day tabs (Enter or Space selects, the name field is editable in place), add day, spin, undo, five team-name fields, reset. All buttons are native buttons with visible 3px focus rings (rust on light, gold on the dark band). The wheel itself is not interactive; the spin button operates it.

## Screen reader

Landmarks: header, nav (labeled "Class days"), main, sections with aria-label. One h1. Spin results land in an aria-live polite region, so the assigned section is announced after each spin. Team-name inputs have visually hidden labels naming their section. The canvas carries role="img" with an accessible name. The prompt toggle exposes aria-pressed.

## Motion

prefers-reduced-motion: the wheel skips the animation and lands immediately; card hover transitions are disabled.

## Print

Print stylesheet hides the spinner and header band and prints the project prompt in black on white with hairline borders, letter size, two cards per row.

## Helper sheets

The five one-page helpers are print documents (black on white, Helvetica, hairline borders). The print source page uses semantic headings and real tables, so the PDFs carry a reading order and a tagged structure for screen readers.

## Known limitations

- Assignments and team names live in the browser's localStorage, so they are tied to the computer and browser used in class. They do not sync between devices.
- Reset and remove-day use native confirm dialogs.

Reviewer: Dr. Sharilyn Rennie
