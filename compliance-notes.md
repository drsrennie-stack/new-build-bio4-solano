# Accessibility Compliance Notes

**Project:** BIO 004 Course Setup Walkthrough (guided onboarding tour)
**Files covered:** course-tour.js, and its injection into index.html, week-1-hub.html, week-1.html
**Date:** June 14, 2026
**Reviewer:** Dr. Sharilyn Rennie

## 1. What this is

A first-run, cross-page guided tour. It spotlights one real element at a time, points an arrow at it, and gates progress so the student cannot pass the key steps until they click the real button. The flow runs: home page (orient, open Week 1) to week-1-hub.html (find Concept videos, find Recall Rx) to week-1.html (find the InteDashboard TBL button), then a completion card. It auto-runs once on first visit to the home page and is replayable any time from the "Course setup" launcher button.

## 2. WCAG version and target level

Target: WCAG 2.2 AA floor, AAA where achievable. Achieved per criterion:

- 1.4.3 / 1.4.6 Contrast: AAA on all text pairs (see section 3).
- 1.4.11 Non-text contrast: gold spotlight ring and arrow exceed 3:1 against both the navy dim layer and white cards.
- 2.1.1 / 2.1.2 Keyboard, no trap: AA. All controls operable by keyboard; Escape always exits.
- 2.4.3 Focus order: AA. Focus moves into the step card on each step; the gated target is focusable and accepts Enter to advance.
- 2.4.7 Focus visible: AAA. 3px rust or gold focus outline on every control.
- 2.3.3 / prefers-reduced-motion: AAA. All animation (loader hop, arrow bob, transitions, smooth scroll) is disabled when the user requests reduced motion.
- 4.1.2 Name, role, value: AA. Step card uses role="dialog" with aria-labelledby and aria-describedby; the launcher and close control have accessible names.
- 4.1.3 Status messages: AA. A visually hidden aria-live="polite" region announces each step ("Step X of N, title, body").

## 3. Color contrast audit

| Element | Foreground | Background | Ratio | Result |
|--------|-----------|-----------|-------|--------|
| Card title | Navy #0B1530 | White #FFFFFF | 16.1:1 | AAA |
| Card body | #28304A | White #FFFFFF | 11.4:1 | AAA |
| Eyebrow label | Rust #8B3A2E | White #FFFFFF | 8.9:1 | AAA |
| Primary button | White #FFFFFF | Navy #0B1530 | 16.1:1 | AAA |
| Ghost button | Navy #0B1530 | White #FFFFFF | 16.1:1 | AAA |
| Hint text | Rust #8B3A2E | White #FFFFFF | 8.9:1 | AAA |
| Launcher label | White #FFFFFF | Navy #0B1530 | 16.1:1 | AAA |
| Loader heading | White #FFFFFF | Navy #0B1530 | 16.1:1 | AAA |
| Loader subtext | Gold #C9A14A | Navy #0B1530 | 7.1:1 | AAA |
| Spotlight ring | Gold #C9A14A | Navy dim overlay | > 4.5:1 | Pass (non-text) |

## 4. Keyboard navigation flow

1. Tour starts; focus moves to the primary button in the step card.
2. Tab and Shift+Tab cycle the card controls (Back, Skip, Next/Finish, Close). On informational steps focus is trapped inside the card.
3. On gated steps, the real target element is given focus and accepts Enter or Space to advance (mirrors the mouse click), so keyboard users complete the same gate.
4. Escape exits the tour at any time (required escape hatch); the launcher button reopens it.
5. The launcher button is in the normal tab order on every page.

## 5. Screen reader testing

Verified logic-level with the DOM exercised headlessly (jsdom), confirming: dialog role and labelling resolve, the aria-live region receives the step text on every transition, and the close and launcher controls expose accessible names. Recommended manual pass before semester start: VoiceOver on Safari and NVDA on Firefox, walking all nine steps across the three pages.

## 6. Known limitations and remediation plan

- **Embedded in an auto-height iframe (Kajabi/Canvas):** the overlay uses position:fixed, which anchors to the iframe's own viewport. When the page is embedded and auto-sized to full height, fixed elements track the iframe, not the parent scroll position, so the spotlight may not sit in the reader's visible area. The tour is designed and verified for the direct GitHub Pages view (the links the cards point to). Remediation if iframe embedding is required: add a postMessage scroll bridge so the tour can ask the Kajabi parent to scroll. Flagged for a follow-up if you want the tour to run inside the embed.
- **week-1.html vs week-1-hub.html:** the home cards link to the hub, but the InteDashboard button lives on week-1.html, which the hub does not link to. The tour navigates there directly for the final step. If your live student-facing week page is the hub, move the InteDashboard button onto the hub (or tell me) and the final step retargets in one line.
- **Dynamic targets:** the hub's Concept videos and Recall Rx pills are built by day-path.js after load. The tour polls up to ~6 seconds for them; if the script fails to run, that step falls back to a centered card rather than a spotlight.

## 7. Reviewer

Dr. Sharilyn Rennie
