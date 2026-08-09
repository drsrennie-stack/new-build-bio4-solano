# Accessibility compliance notes

**Project:** BIO 004 Human Anatomy, Fall 2026 study tools
**Files covered:** `bio004-draw.html`, `bio004-day-review.html`, `mastery-os-fall-2026.html` (changed sections), `mastery-evidence.js`, `draw-checklists.js`, `loops-index.js`, `bio004-dock.js` (two new tiles)
**Repo:** drsrennie-stack/new-build-bio4-solano
**Date:** August 9, 2026
**Reviewer:** Dr. Sharilyn Rennie

This is a second notes file, separate from the calendar's. Merge or keep alongside.

---

## 1. WCAG version and level achieved

Target: WCAG 2.2 AA minimum, AAA where achievable.

**Result: AAA on every text node measured on both new pages.**

| Criterion | Level | Status |
|---|---|---|
| 1.3.1 Info and relationships | A | Pass. `main`, `banner`, `contentinfo`, `h1` then `h2`, `role="list"` / `role="listitem"` on both result lists |
| 1.4.1 Use of color | A | Pass. Every pill carries its own words. Source is never colour alone |
| 1.4.3 Contrast (minimum) | AA | Pass, 40 of 40 nodes on the drawing page, 77 of 77 on the day review |
| 1.4.6 Contrast (enhanced) | AAA | Pass, same counts |
| 1.4.11 Non-text contrast | AA | Pass. 3px focus ring, 1px borders on cards and pills |
| 2.1.1 Keyboard | A | Pass. Confidence buttons are real buttons, Enter and Space activate them and reveal the checklist |
| 2.4.1 Bypass blocks | A | Pass after fix. Skip link added to both pages |
| 2.4.3 Focus order | A | Pass. Skip, breadcrumb, topic picker, three confidence buttons, then the checklist |
| 2.4.6 Headings and labels | AA | Pass after fix. Section headings were `<p>` on the day review, now `<h2>` |
| 2.4.7 Focus visible | AA | Pass. 3px outline, 2px offset |
| 2.5.8 Target size (minimum) | AA | Pass. Confidence buttons are full-width cards, checklist rows 44px+ |
| 4.1.2 Name, role, value | A | Pass after fix. Every result row carries an `aria-label` that reads as one sentence |
| 4.1.3 Status messages | AA | Pass. `role="status" aria-live="polite"` on the save confirmation |

---

## 2. Color contrast audit

Measured on the rendered DOM in headless Chromium at 1200px, compositing every
`opacity` in the ancestor chain and every `rgba` background layer. Elements that
are on the page but not on screen (the closed tool dock) are excluded, not
counted as passes.

### Failures found and fixed

| Pair | Before | After | Fix |
|---|---:|---:|---|
| Competency system line on the tinted "not touched" rows | 6.68 | 7.4 | opacity `.7` to `.82` |
| Competency system line on white rows | 6.76 | 7.5 | same rule |
| "0 of 4 ticked" under the score on the drawing page | 6.76 | 7.5 | opacity `.7` to `.82` |

All three passed AA before the change and missed AAA. Fixed anyway.

### Palette note

The drawing source pill was `#2f7d64`, a green. Green is not in the palette and,
worse, green reads as "done and fine", which is the opposite of what a source tag
means. Replaced with slate `#4A545C`.

The overconfidence flag was originally a white-on-maroon panel reading "you would
have walked into the exam believing you knew it". It is now brushed gold on dark
text, headed "Worth knowing, and not a bad thing", and says the bar sits higher
than they pitched for and to aim a bit past what feels like enough. The pill reads
"Aim higher here" rather than "Thought you knew it". This is not only a tone
change: a student who is scolded for rating themselves honestly learns to hedge
the confidence rating, and the moment they hedge, the signal the whole mechanism
depends on is gone.

---

## 3. Keyboard navigation flow verified

Drawing page, from a cold load:

1. Skip to the drawing
2. Course home
3. Topic picker
4. **I know this cold**
5. **Partly**
6. **Not really**
7. the tool dock launcher

Choosing a confidence with Enter reveals the checklist and moves it into view.
Verified: `checklist revealed by keyboard: true`. The checklist cannot be reached
before a confidence is chosen, which is the whole point of the sequence.

Day review has no controls of its own. Skip link, breadcrumb, dock.

---

## 4. Screen reader testing

Verified against the accessibility tree, not with a live reader. Stated plainly
so it is not mistaken for an NVDA or VoiceOver pass.

- **Landmarks:** `banner`, `main`, `contentinfo` on both pages.
- **Result rows:** the visible layout is name, system, pills, percent, which a
  reader would announce as four disconnected fragments. Each row now carries one
  `aria-label` and the visual parts are `aria-hidden`. It reads:
  *"Levels of structural organization, Foundations, scored 58 percent, cards,
  drawing, you went in confident and scored under 60 percent."*
- **Empty states:** a list with no items is not announced as a list. The
  container swaps `role="list"` for `role="note"` when it holds a sentence.
- **Save confirmation:** `role="status"`, announced without moving focus.

---

## 5. Known limitations and remediation plan

1. **No live screen reader pass.** Accessibility tree only.
2. **Checklist wording is derived from your notes, not reviewed by you.** All 845
   items were written against your m1 to m5 notes pages, using your terminology
   and your ordering. 20 items are flagged in `checklist-review-flags.md` where a
   competency's standard asked for something the matching notes page does not
   name. Those are the ones to read first.
3. **Loops deep links land on the hub, not the loop.** The Loops app has no URL
   routing, so a "Loop: Cadaver UE" button opens the hub and the student picks
   from 39 tiles. The button names the right one and the tooltip repeats it.
   Adding `?loop=<id>` support to the Loops index is about six lines if you want
   one-click.
4. **Mixed Loop reviews count for nothing here.** Loops stores review sessions
   under `review-weak` and `review-mixed`, which carry no record of which loops
   went into them. Those are skipped rather than attributed to a guess.
5. **Third-party storage.** Loops read is same-origin, so it works on GitHub
   Pages. If a student runs Loops inside a Kajabi iframe, Safari's storage
   partitioning can isolate it, the same limitation Canvas has.
6. **Time on the day review is derived, not measured.** Sittings are inferred from
   evidence timestamps with a 25 minute gap rule and a 3 minute floor per sitting.
   It under-counts thinking time and over-counts a tab left open. Labelled "about"
   everywhere it appears.
7. **Old Recall Rx entries with no per-attempt timestamps** count toward the term
   total but never toward a single day. There is nothing to date them with.

---

## 6. Reviewer

Dr. Sharilyn Rennie
