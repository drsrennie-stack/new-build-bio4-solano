# Accessibility compliance notes

**Project:** Memory Match (BIO 004 Human Anatomy, Module 1)
**Files covered:** `memory-match.html`, its present window, and the print card sheets it generates (`memory-match-print-histology.pdf`, `memory-match-print-regions.pdf`)
**Date:** August 26, 2026
**Reviewer:** Dr. Sharilyn Rennie

---

## 1. What the file contains

One HTML file with two subjects, three surfaces, and one shared engine.

- **Histology**, 48 items across six groups: epithelial tissue, connective tissue proper, cartilage and bone and blood, muscle and nervous, skin layers and structures, special cells. Match slide to tissue name, function, or location.
- **Body regions**, 56 regional terms across five groups: head and neck, trunk front, trunk back, upper limb, lower limb. Match region image to term, term to common name, or term to location.
- **Control surface**, the page itself, for setting up and playing at a bench.
- **Present window**, a separate browser window for projecting to the room.
- **Print view**, card sheets, card backs, an answer key, table rules, and a team score sheet.
- **Frame grabber**, opens a local video file, steps through it, and captures stills named for the repo folder.

Two ways to play, matching Anatomy Taboo: teams against each other, or one team practicing on its own. Practice mode hides the team panel and the turn indicator and swaps in a tally of cleared, still down, misses, and a first-try percentage. A pair counts as first try when neither of its cards had already been turned over and rejected.

Groups are picked through the same collapsed picker Anatomy Taboo uses: a button carrying `aria-expanded` and `aria-controls`, opening a labelled group of real checkboxes with per-group counts and Select all and Clear.

Images resolve in this order: anything loaded or captured this session, then the matched station slide in the Loops repo at `https://drsrennie-stack.github.io/loops/images/`, then this repo's own `images/` folder. The source preference is switchable and the unpicked source stays as the fallback. Both repos serve from the same drsrennie-stack.github.io address, so the cross-repo reads are same origin and nothing is copied or duplicated.

---

## 2. WCAG version and level achieved

Target: WCAG 2.2 Level AA minimum, Level AAA where achievable.

| Criterion | Level | Result | How it is met |
|---|---|---|---|
| 1.1.1 Non-text content | A | Pass | Meaningful SVGs carry `role="img"` and a label; decorative ones carry `aria-hidden="true"`. Card images use an alt that names the card code, never the answer. |
| 1.3.1 Info and relationships | A | Pass | Semantic landmarks. Setup uses real `fieldset`/`legend`/`input`. Team names use real labelled text inputs. Study sheet, answer key, and tournament board are real tables with `caption` and scoped headers. |
| 1.3.2 Meaningful sequence | A | Pass | DOM order matches visual order in one and two column layouts, and in the present window. |
| 1.4.1 Use of color | A | Pass | A flipped card is never signalled by color alone. Content changes from a face-down glyph to the image or the words, matched cards add a check icon, and the team that owns a matched card is named in the match log as well as marked by a color square. |
| 1.4.3 Contrast (minimum) | AA | Pass | See section 4. Lowest text ratio measured is 7.44:1. |
| 1.4.6 Contrast (enhanced) | AAA | Pass | Every text pair clears 7:1. |
| 1.4.10 Reflow | AA | Pass | Boards collapse to one column at 960px. No horizontal scroll at 320px. Wide tables scroll inside their own container. |
| 1.4.11 Non-text contrast | AA | Pass | Card borders and state rings clear 3:1 against both their fill and the surface behind them. Two remediations are recorded in section 4. |
| 1.4.12 Text spacing | AA | Pass | No fixed heights on text containers. Card text wraps. Present mode scales type from viewport height with a floor in pixels. |
| 2.1.1 Keyboard | A | Pass | Every card is a `button`. Setup is native radios and checkboxes. Team rows are text inputs with labelled remove buttons. |
| 2.1.2 No keyboard trap | A | Pass | No modal layers in the control window. The image library is a native `details`. The present window closes on Escape. |
| 2.4.1 Bypass blocks | A | Pass | Skip link to `#main`, visible on focus. |
| 2.4.3 Focus order | A | Pass | Source order only, no positive tabindex. |
| 2.4.7 Focus visible | AA | Pass | 3px gold outline at 3px offset on `:focus-visible`. On white that is remediated by the navy card edge beneath it; on navy and maroon it measures 9.71:1 and 4.92:1. |
| 2.4.11 Focus not obscured | AA | Pass | No sticky headers or overlays over focusable content. The end-of-round banner in the present window covers a finished board only, and dismisses on click. |
| 2.5.8 Target size | AA | Pass | Smallest control card is 116px wide. Choice chips are at least 36px by 44px. Team remove buttons are 32px with 10px of surrounding padding inside a 44px row. |
| 3.2.2 On input | A | Pass | Changing a setup option updates the summary line only. Typing a team name updates the scoreboard label only. Nothing deals, prints, or opens a window without a button press. |
| 3.3.2 Labels or instructions | A | Pass | Every group carries a legend, every team input a label. The summary line states what is being matched, from how many items, and how many of them already have a Loops slide. Placeholder text opens with "Examples:" and sits at #8C93A1 so it does not read as a filled field. |
| 1.2.x Time-based media | A | N/A with note | The frame grabber plays a local video the instructor supplies, as a source for still capture rather than as instructional content. It uses the native `video` element with its own controls, keyboard support, and whatever captions the file carries. Captioning the Loops videos themselves is governed by wherever those videos are published, not by this tool. |
| 4.1.2 Name, role, value | A | Pass | `aria-pressed` on the subject tiles, `aria-expanded` and `aria-controls` on the study sheet toggle and on the groups picker, `role="radiogroup"` with accessible names, `role="group"` on the picker's checkbox list labelled by its own label, boards labelled by their headings. |
| 2.4.5 Multiple ways | AA | Pass | The game is reachable from the games hub tile and from the course tools drawer, and carries a back link to the hub in its own header. |
| 4.1.3 Status messages | AA | Pass | `role="status"` with `aria-live="polite"` announces subject change, deal, match with the scoring team and points, miss, reveal, and the round result. |

---

## 3. Reduced motion

`prefers-reduced-motion: reduce` removes every transition and hover lift in both windows. Card state still changes instantly, so nothing depends on animation.

---

## 4. Color contrast audit

Measured against the live BIO 004 tokens.

### Text

| Foreground | Background | Ratio | Level |
|---|---|---|---|
| Navy `#08101F` | Card `#FFFFFF` | 19.02:1 | AAA |
| Navy `#08101F` | Page `#FAFAF9` | 18.21:1 | AAA |
| Muted ink `#3D4860` | Card `#FFFFFF` | 9.15:1 | AAA |
| Muted ink `#3D4860` | Navy-tint `#ECEFF4` | 7.94:1 | AAA |
| Terra-dark `#6B1616` | Card `#FFFFFF` | 11.99:1 | AAA |
| Maroon `#7A2A22` | Card `#FFFFFF` | 9.63:1 | AAA |
| Maroon `#7A2A22` | Page `#FAFAF9` | 9.22:1 | AAA |
| White `#FFFFFF` | Maroon surface `#7A2A22` | 9.63:1 | AAA |
| Off-white `#F4EFE8` | Maroon surface `#7A2A22` | 8.83:1 | AAA |
| White `#FFFFFF` | Navy `#08101F` | 19.02:1 | AAA |
| Straw `#E8CE85` | Navy `#08101F` | 12.31:1 | AAA |
| Gold `#DCB45C` | Navy `#08101F` | 9.71:1 | AAA |
| Navy `#08101F` | Gold chip `#DCB45C` | 9.71:1 | AAA |
| Navy `#08101F` | Navy-tint `#ECEFF4` | 16.50:1 | AAA |
| Gold-text `#6E5018` | Card `#FFFFFF` | 7.44:1 | AAA |

### Interface boundaries and state

| Element | Ratio | Note |
|---|---|---|
| Default card border `#8C90A0` on white | 3.18:1 | Pass |
| Wrong-state border `#8B1D1D` on white | 9.17:1 | Pass |
| Matched border `#08101F` on white | 19.02:1 | Pass |
| Gold `#DCB45C` on white | 1.96:1 | **Fails alone, remediated** |
| Navy `#08101F` on maroon `#7A2A22` | 1.98:1 | **Fails alone, remediated** |
| Gold `#DCB45C` on maroon `#7A2A22` | 4.92:1 | Pass |

**Gold on white remediation.** The gold selected-card border is kept for brand consistency but never carries the state alone. It sits inside a 2px navy outline at 19.02:1, and the card content changes at the same moment.

**Navy on maroon remediation.** In the present window the face-down cards are navy sitting on a maroon board. Navy against maroon is 1.98:1, so every present card carries a 2px gold border, which measures 4.92:1 against the maroon board and 9.71:1 against the card's own navy fill. Face-up cards switch to a near-white fill at 9.63:1 against the board, so they are identifiable without the border.

---

## 5. Keyboard navigation flow verified

1. Tab 1 reaches the skip link, Enter jumps to `main`.
2. Tab reaches the two subject tiles. Enter or Space switches subject; the announcement confirms it.
3. Tab through the five setup radio groups. Arrow keys move within each. Tab reaches the groups picker button; Enter or Space opens it, then Tab moves through the checkboxes, Select all and Clear. The button's label reports the current selection, so the state is readable without opening it.
4. Tab reaches Deal the boards, Present, Build print cards, Study sheet.
5. Tab through the team rows. Each name is an editable field with its own label; each remove button announces which team it removes. Tab continues to the theme fill buttons, Add a team, and Back to solo.
6. After dealing, Tab moves through the left board cards in grid order, then the right board cards.
7. Enter or Space flips a card. One card from each board resolves the pair.
8. Matched cards become `disabled` and drop out of the tab order, so the remaining set gets shorter each turn.
9. In the present window, Tab reaches every card, Enter or Space plays it, F toggles full screen, and Escape closes the window and returns focus to the control window.
10. Shift+Tab reverses cleanly throughout. No trap, no focus loss on re-render.

---

## 6. Screen reader testing

Verified with VoiceOver on macOS in Safari and Chrome.

- Landmarks announce as banner, main, and contentinfo.
- Heading order runs h1 to h2 to h3 with no skipped levels.
- Subject tiles announce as toggle buttons with their pressed state.
- Each card announces its accessible name, its button role, and its disabled state once matched.
- The live region announces "Boards dealt. 8 pairs.", then "Match. Simple squamous epithelium. Nebula scores 2." or "Not a match.", then the round result naming the winning team.
- Card images announce as "Unlabeled image C03", which does not give away the answer.
- The study sheet toggle announces its expanded and collapsed state.

---

## 7. Known limitations and remediation plan

1. **Visual identification cannot be made non-visual.** Matching a micrograph or a body diagram to a term is an inherently visual task, and no text alternative preserves the assessment. **Remediation:** both subjects ship an equivalent word-only mode. Histology gives tissue name to function and tissue name to location; body regions gives regional term to common name and regional term to location. Point any student who needs it at that mode, and assess visual identification for that student through the lab practical accommodation already on file.
2. **Color vision.** Stained micrographs can be hard to separate for students with color vision deficiency. **Remediation:** where you have a choice of image, pick the one with the clearest structural cue rather than the strongest color cue. Nothing in either interface depends on hue.
3. **Team color squares.** Team identity uses a color square in three places. **Remediation:** the team name appears in text beside every square, and the match log names the scoring team in words, so the color is decorative rather than load bearing.
4. **Present window and pop-up blockers.** Some browsers block the second window. **Remediation:** the page detects the block and tells you to allow pop-ups for the page, rather than failing silently.
5. **Print cards.** The printed set carries no text alternative. **Remediation:** the answer key sheet doubles as the accessible version of the deck, and the on-screen study sheet covers the same content.
6. **Image coverage.** 31 of the 48 histology items and 30 of the 56 regional terms are matched to a labelled station slide already in the Loops repo, so those boards work with nothing added. The rest display and print a coded placeholder until an image exists for them, either captured with the frame grabber or dropped into this repo's `images/` folder. This is a content gap, not an accessibility defect.
9. **Two items sharing one picture.** Mammary and pectoral both key to the same Loops station, `intro/s05`, because that station's answer covers both. Two identical pictures on one board with two different correct answers would be unsolvable. **Remediation:** the round picker treats a shared image as a collision and never deals both items into the same image round. They can still both appear when the left board holds words, where their names tell them apart. Verified over 200 generated rounds at maximum size.
7. **Frame grabber controls.** Video scrubbing is a fine motor task. **Remediation:** the four nudge buttons step by one frame and one second in each direction, so no dragging is required to land on a frame, and the native video controls remain available for anyone who prefers them.
8. **Bulk download.** The download button issues one download per captured file in sequence. Some browsers ask permission for multiple downloads on first use. **Remediation:** each file is named for its item, so an interrupted batch can be finished by capturing and downloading the remainder without any renaming.

---

## 8. Reviewer

Built and audited August 26, 2026. Re-audit when the image folders are populated, to confirm alt text and print output.
