# Accessibility compliance notes

**Project:** Anatomy Games hub and Anatomy Taboo
**Files covered:** games.html, anatomy-taboo.html
**Date:** August 28, 2026, revised September 1, 2026 for multi-topic play, practice mode, present mode, the two colour schemes and the full-course card set
**Reviewer:** Dr. Sharilyn Rennie (build and audit prepared for review)

---

## 1. WCAG version and level achieved

Target: WCAG 2.2 Level AA minimum, AAA where achievable.

| Criterion | Level | Result |
|---|---|---|
| 1.1.1 Non-text content | A | Pass. All decorative SVG icons carry `aria-hidden="true"`. Icon-only controls have accessible names. |
| 1.3.1 Info and relationships | A | Pass. Semantic `header`, `main`, `section`, `footer`, `table` with `caption` and `th scope`, every section labelled with `aria-labelledby`. |
| 1.3.2 Meaningful sequence | A | Pass. DOM order matches visual order in both single and two-column layouts. |
| 1.4.3 Contrast (minimum) | AA | Pass. See section 7. |
| 1.4.6 Contrast (enhanced) | AAA | Pass on every text pair. Lowest is 7.49:1. |
| 1.4.4 Resize text | AA | Pass. All type in rem, layout reflows to one column below 900px. |
| 1.4.10 Reflow | AA | Pass. No horizontal scroll at 320px width. |
| 1.4.11 Non-text contrast | AA | Pass for all controls. See the note at the end of section 6. |
| 1.4.12 Text spacing | AA | Pass. No fixed heights on text containers. |
| 2.1.1 Keyboard | A | Pass. Every control reachable and operable. See section 6. |
| 2.1.2 No keyboard trap | A | Pass. |
| 2.2.1 Timing adjustable | A | Pass. The countdown is optional (No timer setting), defaults to 90 seconds, and can be paused, resumed and reset at any point. Nothing is lost when it expires: the unanswered card returns to the deck and comes around again, and every point already scored stands. |
| 2.4.1 Bypass blocks | A | Pass. Skip link to `#main` on both pages. |
| 2.4.3 Focus order | A | Pass. |
| 2.4.6 Headings and labels | AA | Pass. One h1 per page, h2 for sections, no skipped levels. |
| 2.4.7 Focus visible | AA | Pass. 3px navy outline plus a 6px gold ring, visible on white, navy and maroon surfaces. |
| 2.4.11 Focus not obscured | AA (2.2) | Pass. Present mode covers the page but hides what is underneath, so no focused control is ever behind it. |
| 2.5.3 Label in name | A | Pass. Visible button text matches accessible name. |
| 2.5.8 Target size (minimum) | AA (2.2) | Pass. Measured in Chromium with the topic picker open: no interactive target falls below 24 by 24 CSS pixels. Smallest are the score adjust buttons at 36 by 28 and 42 by 28, and every checkbox at 24 by 24. Every other control exceeds 44px in its long dimension. |
| 3.2.2 On input | A | Pass. Changing mode, topics, team count or timer resets the round and updates the board, but moves no focus and opens nothing unexpected. Each change is announced in the live region. |
| 3.3.1 Error identification | A | Pass. Missing target term or forbidden word in the card builder produces a message in the live region and moves focus to the offending field. |
| 3.3.2 Labels or instructions | A | Pass. Every input has a `label` with `for`, visible or visually hidden. |
| 4.1.2 Name, role, value | A | Pass. `aria-expanded` on every disclosure control, `role="timer"`, `role="status"`. |
| 4.1.3 Status messages | AA | Pass. `#status` is `role="status"` with `aria-live="polite"`. |

Not applicable: audio and video criteria (no media), 3.3.7 redundant entry, 3.3.8 accessible authentication (no login).

---

## 2. Modes and the two answer paths

The game runs in two modes and the controls change with them, so both were walked separately.

- **Teams:** the clock runs for the whole turn. Correct and Skip pull the next card onto the screen without stopping it, so a team clears as many as it can. Next round ends the turn and passes to the next team. The cover screen appears once per turn, at the start, where the guesser needs it.
- **Challenge:** at the end of a turn, an optional recall question for the whole team, drawn from the last card they got right, so it never interrupts a running clock. The question is revealed first, the answer only when the instructor asks for it, so the reveal is a deliberate act rather than something the screen does on its own. Both appear on the projector as well as the panel.
- **One team practising:** Correct becomes "Got it", Skip is removed, and "Missed it" appears. Both pull the next card the same way. A missed card returns to the deck, so the tally reads Got it, Came back around, and a first-try percentage. Nothing rotates.

Mode is a `select`, not a pair of tabs, so it is reachable and changeable from the keyboard with no custom key handling. Changing it resets the round and announces the change in the live region. The M shortcut is bound only in practice mode and S only in team mode, so a key never silently does nothing the visible controls would do.

## 3. Present mode

Present mode replaces the page with a projector view: card, clock, scores and the status line, plus a control bar. It is the same state rendered twice, not a second copy of the game, so the two views cannot drift apart.

- Entering it hides the instructor panel with the `hidden` attribute, so the panel leaves the tab order entirely and focus lands on Start turn.
- Escape exits, and so does leaving fullscreen by any route, so the room never ends up looking at a stuck screen.
- Type scales with the viewport (`clamp`), with the target term reaching 5.2rem, so the back row can read it. Contrast is the same set of pairs audited in section 6, since it reuses the same tokens.
- The stage buttons call the same functions as the panel buttons and mirror their disabled and hidden state, so nothing is operable on the projector that is not operable on the panel.

## 4. The two colours

The game ships in two colour schemes, switched by a button in Game setup and mirrored on the projector. Dusk moves four tokens and nothing else: the page ground to #1A3E59, the nested band to #123047, and the two on-ground text colours to #BFDCEF and #A8D2EC. Cards, ink, gold and the buzzer are unchanged, so every other pair in section 5 holds in both schemes.

| Dusk pair | Ratio | Level |
|---|---|---|
| Page ground, white heading #FFFFFF / #1A3E59 | 11.19:1 | AAA |
| Eyebrow and subhead #BFDCEF / #1A3E59 | 7.83:1 | AAA |
| Footer credit #F4EFE8 / #1A3E59 | 9.78:1 | AAA |
| Gold focus ring against the ground #DCB45C / #1A3E59 | 5.71:1 | Pass, over the 3:1 non-text minimum |
| White card against the ground | 11.19:1 | The card edge is carried by value, not by a border |

The choice is stored in localStorage under one key shared with the games hub, so the hub and the game agree, and it is applied by a small script before first paint so the room never sees the colour change on load.

## 5. Sound

The buzzer, the correct chime and the bonus chime are generated with the Web Audio API. Sound is never the only signal:

- Buzzer: status region reads "Buzzed. That clue does not count." or "Time is up."
- Correct: status region names the team and the score, the card gains a gold ring, and the score number updates on screen.
- Time expiring: the clock turns gold and the progress track empties.

Sound can be switched off entirely. Nothing autoplays before a user gesture, so no browser audio policy is violated.

---

## 6. Color contrast audit

| Text / background | Ratio | Level |
|---|---|---|
| White on maroon page ground #FFFFFF / #7A2A22 | 9.63:1 | AAA |
| Eyebrow and subhead #F2E2B8 / #7A2A22 | 7.49:1 | AAA |
| Body and target term #08101F / #FFFFFF | 19.02:1 | AAA |
| Forbidden words and section labels #6B1616 / #FFFFFF | 11.99:1 | AAA |
| Hint text #3D4860 / #FFFFFF | 9.15:1 | AAA |
| Text on navy card #FFFFFF / #08101F | 19.02:1 | AAA |
| Gold labels and clock on navy #DCB45C / #08101F | 9.71:1 | AAA |
| Hint on navy card #ECEFF4 / #08101F | 16.50:1 | AAA |
| Navy on gold button #08101F / #DCB45C | 9.71:1 | AAA |
| White on buzzer #FFFFFF / #8B1D1D | 9.17:1 | AAA |
| Status bar #08101F / #ECEFF4 | 16.50:1 | AAA |
| Disabled ghost button text #FFFFFF / #1E2A47 | 14.21:1 | AAA (disabled controls are exempt) |
| Focus ring gold against maroon #DCB45C / #7A2A22 | 4.92:1 | Pass, exceeds the 3:1 non-text minimum |
| Focus ring navy against white #08101F / #FFFFFF | 19.02:1 | Pass |
| Forbidden chip border #8B1D1D / #FFFFFF | 9.17:1 | Pass |

Note on card dividers: the hairline `#DCE0E6` used between table rows and above the QR panel measures 1.33:1 against white. It is decorative. No control or boundary depends on it, since every card is defined by its white fill against the maroon ground (9.63:1) and every control carries its own 2px navy border.

---

## 7. Keyboard navigation flow verified

**games.html:** skip link, then each tile in reading order (Play link, then QR button), then nothing further. QR panels expand in place and the button reports `aria-expanded`.

**anatomy-taboo.html:** skip link, Start / Pause / Reset timer, Correct / Missed it / Skip / Next card, Buzzer, mode select, the Topics in play disclosure button and, when open, one checkbox per topic plus Select all and Clear, team count, timer length, challenge and sound checkboxes, Reset game, Print card sheets, one text input per team in the Team names panel, the four name-set fill buttons, per-team +1 and -1 buttons, then the instructor builder disclosure with its deck select, full form and card table.

The Topics in play control is a button with `aria-expanded` and `aria-controls` onto a `role="group"` labelled by the same "Topics in play" text, so the checkbox set announces as one named group rather than five loose checkboxes. Controls that do not apply to the current mode are removed with the `hidden` attribute rather than visually hidden, so they leave the tab order and the accessibility tree together.

Each team name input carries a visually hidden label reading "Name for team 3". The number chip beside it is `aria-hidden`, so a screen reader hears the label rather than a bare digit.

Shortcuts, which are suppressed while focus is in any input, textarea or select so typing is never intercepted:

- Escape leaves present mode
- Space starts the turn, or pauses and resumes the clock
- C marks correct, in both modes
- S skips, team mode only
- M marks missed, practice mode only
- N ends the turn and passes to the next team
- B sounds the buzzer

---

## 8. Screen reader testing

**Status: automated only. A human screen reader pass is still outstanding.**

What was actually verified: the accessibility tree exported from headless Chromium, plus a code review of every name, role and live region. Every control below came back with the intended role and accessible name.

- Landmarks resolve as banner, main, contentinfo.
- The status region carries `role="status"` with `aria-live="polite"` and is written once per turn event: whose turn it is, correct with the team name and score, skip, buzz, time up, and deck reshuffle.
- The clock is `role="timer"` with `aria-live="off"` on purpose, so the countdown does not interrupt the announcement of game events every second.
- The card face is hidden with the `hidden` attribute until the turn starts, so it is absent from the accessibility tree rather than merely invisible.
- Score buttons announce as "Add a point to Team 3" rather than "plus one".
- Table rows in the builder announce the target term as the row context before the Edit and Delete buttons.

---

## 9. Known limitations and remediation plan

1. **QR code library on the hub page.** games.html loads qrcodejs from cdnjs for the QR panel. With no network the panel shows the plain URL instead, which is the accessible fallback and the printable one. Remediation if a fully offline hub is wanted: drop the QR button, or inline a QR encoder.
2. **Browser storage.** Custom decks save to localStorage. In a private window or with site data blocked the save fails silently and the session still plays normally. Export all decks produces a text copy she can keep. No student information is ever written to storage.
3. **Team names are session only.** Renaming teams is deliberately not persisted, so nothing a student is identified by can survive the class. This is a FERPA decision, not an oversight.
4. **Print card sheets** uses the browser print dialog. Sheet layout is verified in Chromium at Letter size; other browsers may paginate slightly differently.
5. **Screen reader coverage is the open item.** Roles, names and live regions were confirmed from the accessibility tree, but no human pass with VoiceOver, NVDA or JAWS has been run. Worth doing before the tool is assigned for independent student use. It is currently an instructor-run classroom tool projected at the front of the room, which lowers, but does not remove, the risk.

---

## 10. Reviewer

Prepared August 28, 2026. Sign-off pending review by Dr. Sharilyn Rennie.
