# Accessibility Compliance Notes

**Project:** BIO 004 Human Anatomy — week date locks + scholar-points note
**Files covered:** index.html, course-lock.js, bio004-summer-2026-syllabus.html, week-2.html…week-8.html, week-2-lab-sprints.html…week-8-lab-sprints.html
**Date:** June 15, 2026

## 1. WCAG version and target

WCAG 2.2. Target level AA across all new and changed UI; AAA where achievable. Only the locking UI was added; the rest of each page is unchanged.

## 2. Color contrast audit (new elements)

| Element | Foreground | Background | Ratio | Result |
|---------|-----------|-----------|-------|--------|
| Lock corner flag text (11.2px bold) | #FFFFFF | #6B7180 | 5.0:1 | Pass AA |
| Locked CTA text ("Opens Sun, Jun 21", 11.8px bold) | #6B7180 | #FFFFFF | 5.0:1 | Pass AA |
| Locked-notice banner body (15.7px) | #FFFFFF | #060A18 | ~18:1 | Pass AAA |
| Locked-notice banner emphasis | #C9A14A | #060A18 | ~9:1 | Pass AAA |
| Locked card title (19px bold, large text) | #0B1530 @ 0.55 over #FFFFFF | #FFFFFF | ~4.7:1 | Pass AA (large text needs 3:1) |

The authoritative lock information (locked state and unlock date) is carried in the card's
`aria-label` and in the visible lock flag and CTA, all of which pass AA, so the intentionally
muted card body text is not the only channel for that information.

## 3. Keyboard navigation

- Locked cards have their `href` removed and `aria-disabled="true"` set, so they are announced as disabled and do not navigate.
- Click and Enter/Space activation on locked cards is suppressed (no dead-link traversal).
- Open week cards keep their normal link behavior and visible focus outline (3px solid, unchanged).
- No keyboard trap introduced; tab order is unchanged.

## 4. Screen reader

Verified logic against VoiceOver semantics:
- Locked card announces: "Week N is locked. Opens [weekday, month day] at 12:01 AM Pacific." via `aria-label`, with `role="group"`.
- The bounce banner is `role="status" aria-live="polite"`, so when a student is redirected from a locked week the explanation is announced without moving focus.
- `.sr-only` utility added for any visually hidden text.

## 5. Known limitations and remediation plan

- **Client-side enforcement only.** On static GitHub Pages the gate cannot stop a user who disables JavaScript or reads source. Remediation: deliver through a signed-in platform (Canvas) if hard enforcement is required.
- **Topic pages not yet gated.** Pages named by topic (not by week) are not covered by the file-name gate. Remediation: derive a week-to-page map from the week pages and extend the gate, pending instructor confirmation to avoid locking current-week material.
- **Reduced motion:** no new animation introduced; existing `prefers-reduced-motion` block still applies.

## 6. Reviewer

Dr. Sharilyn Rennie
