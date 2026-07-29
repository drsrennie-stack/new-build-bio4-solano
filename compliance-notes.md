# Accessibility Compliance Notes

**Project:** BIO 004 · Foundations: The Language of Anatomy and Body Organization
**Files covered:** foundations-human-anatomy.html
**Date:** June 13, 2026
**Reviewer:** Dr. Sharilyn Rennie

## 1. Scope of this review

This pass covers the lecture-video block added at the top of the deck: the embedded Loom player, the clickable chapter navigation, and the per-chapter progress tracking (auto-visit highlight, "mark watched" checkboxes, a progress bar, and a reset control). Progress is saved in the student's own browser via localStorage and restored on return visits. The existing slide deck, present mode, lightbox, and print logic were already in place and were not altered.

## 2. WCAG version and target level

Target: WCAG 2.2 AA (floor), AAA where achievable.

- 1.1.1 Non-text content: AA. The Loom iframe has a descriptive `title`. Chapter controls use real text, no icon-only buttons.
- 1.3.1 Info and relationships: AA. Chapters are a `nav` landmark labeled "Video chapters" with a real heading; each chapter is a `button`.
- 1.4.3 / 1.4.6 Contrast: AAA on all text pairs except the active-chapter timecode, which is AA (see section 3).
- 2.1.1 Keyboard: AA. Every chapter is a native `button`, reachable and operable by keyboard.
- 2.4.7 Focus visible: AA. Global `:focus-visible` rule (3px terra outline) applies to chapters and the iframe.
- 2.5.8 Target size: AA. Chapter buttons are full-width rows with ~38px height.
- 4.1.2 Name, role, value: AA. Active chapter exposes state via `aria-current`; the JS keeps it in sync on click. Each "mark watched" control is a native checkbox with an `aria-label` naming its concept, so its checked state and name are exposed without relying on color.
- 1.4.1 Use of color: AA. Watched/completion status is carried by the checkbox state and the "X of 10 concepts marked done" text, not by color alone. The gold visited bar and navy "done" fill are reinforcement, not the sole signal.
- 4.1.3 Status messages: AA. The progress count uses `aria-live="polite"` so screen readers announce updates as chapters are marked.

## 3. Color contrast audit

| Text / background | Ratio | Result |
|---|---|---|
| Terra #8B3A2E on white #FFFFFF (eyebrow, timecode) | 7.66:1 | AAA |
| Terra #8B3A2E on off-white #FAFAF9 (header) | 7.33:1 | AAA |
| Navy #0B1530 on white (chapter labels) | 18.04:1 | AAA |
| Navy #0B1530 on navy-tint #EDF1F3 (active chapter) | 15.87:1 | AAA |
| Terra timecode #8B3A2E on navy-tint #EDF1F3 (active) | 6.74:1 | AA (AAA for large/bold) |
| Hint italic #060A18 on white | 19.7:1 | AAA |
| Navy label #0B1530 on hover #EAEEF4 | 15.49:1 | AAA |

## 4. Keyboard navigation flow verified

Tab order: skip link, header buttons (Present, Print), then chapter buttons in document order (0:00 through 39:47), then into the slide deck. Enter or Space on any chapter reloads the player at that timestamp and updates the active state. No keyboard traps. The Loom player itself is operated by Loom's own controls inside the iframe.

## 5. Screen reader testing

Verified the structure programmatically (landmark and heading order, button roles, `aria-current` toggling, iframe `title`). The chapter region is announced as a navigation landmark named "Video chapters." Recommend a quick VoiceOver pass on the live Kajabi page to confirm the iframe title is read as expected, since hosted players occasionally inject their own labels.

## 6. Known limitations and remediation plan

- Active-chapter timecode against the navy-tint fill is AA, not AAA. The label text beside it is AAA, so meaning is not carried by the timecode alone. No action required; can be lifted to AAA later by darkening the timecode on the active row if desired.
- Jumping to a chapter reloads the Loom iframe with `?t=<seconds>s&autoplay=1`. Autoplay is triggered by the user's click (a user gesture), so browsers should allow it; if a browser blocks autoplay, the video still lands at the correct timestamp and the student presses play.
- The player requires a network connection (hosted Loom). The rest of the page remains self-contained and works offline.
- Progress is stored only in the student's browser (localStorage), keyed to this page. No names, IDs, grades, or any student data are collected or sent anywhere, which keeps it within the student-privacy rule. Progress is per-device and per-browser: a student switching computers or clearing browser data starts fresh. All storage calls are wrapped in try/catch, so a browser that blocks storage inside a cross-origin Kajabi iframe (Safari can) simply stops remembering rather than erroring; the page and chapter jumps still work. Verified with jsdom that marking chapters persists across a reload and that Reset clears it.

## 7. Reviewer

Dr. Sharilyn Rennie

---

# Part B: Nervous System concept-video pages

**Files covered:** nervous-tissue-concept-videos.html, brain-meninges-concept-videos.html
**Date:** July 28, 2026
**Reviewer:** Dr. Sharilyn Rennie

## B1. Scope

Two standalone lecture-video companion pages built to the same design and component set documented above (header, embedded Loom player, "Video chapters" navigation with jump-to-timestamp, "mark watched" checkboxes, progress bar, and reset). These pages carry the video block only; they do not include the slide deck or present mode. The reused component code is identical to the reviewed foundations block, so sections 2 through 6 above apply unchanged, with the differences noted here.

- nervous-tissue-concept-videos.html: 10 chapters, 0:00 through 1:03:05. Loom c19eeb650b3a4b28b5fb51d05d89dcb6.
- brain-meninges-concept-videos.html: 8 chapters, 0:00 through 1:03:59. Loom d9a1a81c31ec4f77bc47cce7cfd3d623.

## B2. Differences from the foundations review

- Header actions: these pages expose a single Print / Save PDF button. The Present control was removed because there is no slide deck to present, so no non-functional control is exposed.
- Tab order: skip link ("Skip to the lecture video"), Print button, then chapter buttons in document order, then the three resource buttons (Open the slides, Workbook, Recall Rx). No keyboard traps.
- Each page uses a unique localStorage key (bio004-nervous-tissue-concept-videos-progress, bio004-brain-meninges-concept-videos-progress), so progress on one page does not overwrite another.
- The iframe height-sender posts a page-specific id (the filename stem) for Kajabi / GitHub Pages embedding.
- Heading order is clean: one H1 (page title), one H2 (lecture title), one H3 (Chapters).

## B3. Color contrast audit (new pairs on these pages)

| Text / background | Ratio | Result |
|---|---|---|
| White #FFFFFF on terra button #A0452F (Slides, Workbook) | 6.20:1 | AA (AAA for large/bold) |
| White #FFFFFF on navy button #0B1530 (Recall Rx) | 18.04:1 | AAA |
| Muted #5A6573 tip text on off-white #FAFAF9 | 4.98:1 | AA |

All other text pairs match the foundations audit in section 3 and pass at the same ratios (the CSS and palette are identical). No sage or cream is used anywhere.

## B4. Verification performed

Rendered both pages in headless Chromium: no console or page errors. Confirmed a chapter click rewrites the player src to `?t=<seconds>s&autoplay=1` with the correct timestamp, and that marking a chapter updates the aria-live progress count. HTML parsed cleanly (lxml). Checked: zero em dashes, all `target="_blank"` links carry `rel="noopener"`, skip link present, aria-live present.

## B5. Known limitations

Same as section 6 above. Additionally, the three resource buttons link to existing course pages (slides, workbook, Recall Rx). If any of those target pages is renamed, update the hrefs. Resource links open in a new tab (`target="_blank"`) by design so the lecture keeps playing; top-level navigation would use `target="_top"`.

## B6. Reviewer

Dr. Sharilyn Rennie
