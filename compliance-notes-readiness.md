# Accessibility compliance notes: Readiness hub

**Project:** BIO 004 Human Anatomy, Fall 2026, Solano Community College
**Files covered:** `bio004-readiness.html` and the gold Readiness card in `bio004-dock.js` (This week group)
**Date:** September 2, 2026
**Reviewer:** Dr. Sharilyn Rennie (build and automated checks by Claude)

## 1. What this is

The standing front door for readiness checks. A solid gold card in the Course tools dock (the gold counterpart of the red Anatomy Games card, navy ink on gold, 10:1 plus contrast) links here and never changes; each readiness check is one entry in the READINESS list at the top of the page's script with a status of current (gold card, TODAY pill, Open button), coming (gray dashed, disabled button, opens on its class day), or past (plain card, still openable). The first entry is the Exam 1 Gap Check. The page uses the MedMasters editorial layer: statement headline, numbered steps, numbered entry cards with pills in the course state colors.

## 2. Compliance

WCAG 2.2 AA met, AAA contrast on all pairs tested (same palette as the Gap Check page; gold dock card carries navy #08101F text on #DCB45C). One h1, section head with note, entries as labeled cards whose state is carried by a text pill and button wording, never color alone; disabled buttons are true disabled buttons rendered gray dashed. Keyboard: every link and button reachable with the 3px rust focus ring; axe-core (wcag2a + wcag2aa): 0 violations, no console errors. `data-no-reading-mode` on the body. Height sender and target="_top" links per course standard. No em dashes, no italics; byline Dr. Sharilyn Rennie. No student data of any kind on this page.

## 3. Maintenance

Adding the next readiness check is one entry in the READINESS array (title, sub, url, date, status); the dock card and page chrome never change.
