# Accessibility compliance notes: BIO 004 Module 4 lecture slides

Files: BIO004-M4-Slides-Respiratory.html, -Digestive.html, -LowerLimb.html, -Lymphatic.html. Date: October 25, 2026.

## WCAG 2.2 target
AA met on every criterion checked; AAA contrast met for text.

## Color contrast (text on white or off-white #FAFAF9)
- Navy #08101F headings and body: 18.4:1, pass AAA
- Maroon #7A2A22 eyebrow, answers, group headings: 8.9:1, pass AAA
- Gray #444 competency line (13px, 600): 9.7:1, pass AAA
- Gray #555 captions and footer (12px): 7.5:1, pass AAA
- White on maroon pin markers and box numbers: 8.9:1, pass AAA
- Navy on gold #DCB45C (lit marker): 9.4:1, pass AAA
- Hidden "click to reveal" placeholder #999 (12px): 2.8:1, decorative state hint only; the same instruction is in the slide caption at 7.5:1.

## Keyboard
- Every reveal works from the keyboard: right arrow, space, Enter = next; left arrow, Backspace = undo; N, A, R, Home, End, ? as documented in README.
- Every callout box and card has tabindex="0" and a visible 3px gold focus ring; Enter on a focused box reveals it.
- Toolbar buttons are real buttons with accessible names; the mode button carries aria-pressed.

## Screen reader
- Slides are sections with aria-label (box title); the deck is a main landmark with aria-live="polite".
- A hidden live region announces the structure name on each reveal; the slide counter is aria-live.
- Leader-line SVG is aria-hidden; structure names and facts are real text in the boxes, not in the image.
- Photo alt text is the caption (view and specimen). Pin positions are conveyed by the numbered text boxes.

## Motion
- Reveal transitions are 250 ms and disabled under prefers-reduced-motion.

## Known limitations and plan
- Facts are hidden by default in "students fill in" mode; a screen reader user can press A (reveal all) or switch the mode button to "show facts" to read everything at once.
- Leader lines are drawn by script from live box positions; without JavaScript the boxes and image still render (static, all shown).
- Pin placement on the photo is visual only; add the Digital Atlas page link in Canvas for the per-structure descriptions if a text alternative to the photo is required.

Reviewer: Dr. Sharilyn Rennie
