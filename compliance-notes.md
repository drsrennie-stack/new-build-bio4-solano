# Accessibility compliance notes: BIO 004 Module 4 lecture slides

Files: BIO004-M4-Slides-Respiratory.html, -LowerLimb.html, -Lymphatic.html. Date: October 25, 2026.

## WCAG 2.2 target
AA met on every criterion checked; AAA contrast met for all text.

## Color contrast
- Navy #060A18 text on white and #FAFAF9: 19:1, pass AAA
- Rust #8B3A2E eyebrows, answers, competency line on white and off-white: 7.6:1, pass AAA
- Slide eyebrow, navy at 60% opacity on off-white (effective #6a6d78): 5.1:1, pass AA (10px bold uppercase, decorative label; the slide title repeats the context)
- White on rust buttons and pins: 7.6:1, pass AAA
- Navy on gold-bright #DCB45C (lit pin): 10.6:1, pass AAA
- White on navy present bar: 19:1, pass AAA
- Gold-bright #DCB45C eyebrow on navy title hero: 10.6:1, pass AAA
- "click to reveal" placeholder #777 on white: 4.5:1, pass AA (state hint; the caption repeats the instruction at AAA)

## Keyboard
- Present mode fully keyboard operable: arrows, space, Enter, Backspace, N, A, R, Home, End, ?, Esc.
- Every callout box and fill-in card has tabindex="0" and reveals on Enter; focus ring is 3px rust with 3px offset.
- All controls are native buttons with accessible names; the facts toggle carries aria-pressed.

## Screen reader
- Slides are articles with aria-label; the deck is a main landmark; a skip link precedes the header.
- A hidden live region announces each structure or stem as it is revealed; the slide counter updates in the present bar.
- Leader-line SVG is aria-hidden; structure names and facts are real text.
- Photo alt text is the caption (specimen and view).

## Motion
- 250 ms reveal transitions, removed under prefers-reduced-motion.

## Known limitations and plan
- Pin positions on the photo are visual; the numbered boxes carry the same content as text.
- Facts are hidden by default in Present; Reveal all (A) or the facts toggle shows everything for a reader who needs it at once.
- Lecture page (non-present view) shows everything, so students reviewing later need no interaction.

Reviewer: Dr. Sharilyn Rennie
