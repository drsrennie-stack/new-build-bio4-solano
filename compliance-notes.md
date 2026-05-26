# Accessibility Compliance Notes

## 1. Project

- **Project:** BIO 004 Human Anatomy, Solano Community College
- **Files covered:** `index.html` (course home), `week-1.html` through `week-8.html` (the eight weekly module pages), and `welcome.html` (the Canvas welcome page)
- **Date:** 2026-05-24, revised 2026-05-25
- **Design:** Cream-design course site adapted from Dr. Rennie's MedMasters site language. Each page is a self-contained HTML file with inline CSS and JS.

**Revision 2026-05-25:** `week-1.html` through `week-8.html` each gained a Lab Sprint card, replacing the former small outline "Lab Sprint" button. The card sits as the last cell of the "Study this week" card grid, matching the white study cards in shape and size but filled navy `#0B1530` so it reads as a distinct, non-lecture item. It carries a gold eyebrow `#C9A14A`, a soft-clay title `#CE8166` (20px, weight 800), and cream `#F5F1E8` body text and call-to-action, and is a single native `a` linking to that week's `week-N-lab-sprints.html`. The same revision lightened the Mon-Thu day cards from `#0B1530` to `#1C2E4F` so they separate cleanly from the near-black `#060A18` band instead of reading navy-on-navy. Two new values were introduced: soft clay `#CE8166` (a lightened, readable member of the rust family, for dark backgrounds where the rust `#8B3A2E` itself fails contrast) and card navy `#1C2E4F` (a lighter navy for card surfaces on the dark band). Contrast for every pair is in section 3.

**Welcome page (2026-05-25):** `welcome.html` is a standalone Canvas welcome panel: near-black `#060A18` background, gold eyebrow, cream message, and a terra cotta `#C2734D` Enter Course button with navy `#0B1530` text that links to the hub. Contrast: gold 8.2:1, cream 17.5:1, terra cotta h1 accent 5.5:1 (large text), button text 5.0:1, button fill vs background 5.5:1, gold focus ring 8.2:1, all clear WCAG AA and most reach AAA. A paste-safe inline-styled twin, `welcome-canvas.html`, carries the same colors and copy for direct entry into the Canvas Rich Content Editor (no script, no style block); it falls back to a system font and drops the hover animation, neither of which affects conformance.

**Palette exception on record:** These pages intentionally use cream (`#F5F1E8`) with near-black sections (`#060A18` / `#0B1530`), a deliberate exception to the standing "no cream in BIO 004" rule, confirmed by Dr. Rennie for this set of pages. The repo's existing concept pages remain on the PRIMARY palette.

**Accent rule:** rust `#8B3A2E` for accents on light sections; on dark sections, gold `#C9A14A` eyebrows with terra cotta `#C2734D` for accent words and large numbers. Terra cotta was Dr. Rennie's call; `#C2734D` reaches 5.5:1 on `#060A18`, where the darker brick rust would fail.

## 2. WCAG version and target level

Target: **WCAG 2.2 Level AA** (minimum), Level AAA where achievable. All nine pages share one design system and were audited together.

| Criterion | Level | Result |
|-----------|-------|--------|
| 1.1.1 Non-text Content | A | Pass. Logo SVGs are `aria-hidden` / `focusable="false"` with an accessible name on the parent link. The InteDashboard button image has `alt="InteDashboard"`. Decorative arrows carry `aria-hidden`. |
| 1.3.1 Info and Relationships | A | Pass. Semantic `header`, `nav`, `main`, `section`, `footer`; one `h1`, four section `h2` per page, `h3` for cards; study links are `ul`/`li`. |
| 1.4.3 Contrast (Minimum) | AA | Pass. Full audit in section 3. |
| 1.4.6 Contrast (Enhanced) | AAA | Mostly met. Body copy, headings, and the whole Lab Sprint card clear the AAA thresholds; the terra cotta dark-section accent (5.5:1) and the day-card gold label on the lightened card navy (5.6:1) are AA, brand-fixed values where AAA is not reachable on those hues. |
| 1.4.11 Non-text Contrast | AA | Pass. Study-card borders use `#8C90A0` (3.2:1); the Lab Sprint card's navy fill reads 18:1 against the white page; the lightened day cards carry a `rgba(245,241,232,0.28)` hairline on the dark band; focus rings clear 3:1 on both backgrounds. |
| 2.1.1 Keyboard | A | Pass. All controls are native links. See section 4. |
| 2.4.1 Bypass Blocks | A | Pass. A skip link to `#main` is the first focusable element on every page. |
| 2.4.7 Focus Visible | AA | Pass. 3px focus ring, rust on light sections, gold on dark sections (scoped so it always clears 3:1). |
| 2.5.8 Target Size (Minimum) | AA (2.2) | Pass. Cards, buttons, and nav links all exceed 24x24 CSS px. |
| 3.1.1 Language of Page | A | Pass. `<html lang="en">` on every page. |
| 4.1.2 Name, Role, Value | A | Pass. Native links and `details`/`summary` only; no custom widgets. |
| 2.3.3 Animation from Interactions | AAA | Pass. Transitions and smooth scroll are disabled under `prefers-reduced-motion`. |

## 3. Color contrast audit

Palette: navy `#0B1530`, card navy `#1C2E4F`, near-black `#060A18`, rust `#8B3A2E`, terra cotta `#C2734D`, soft clay `#CE8166`, gold `#C9A14A`, cream `#F5F1E8`, white `#FFFFFF`, border slate `#8C90A0`. Ratios use the WCAG relative-luminance formula; opacity values are alpha-composited over their background before measuring. All pages share this CSS, so one audit covers the set.

| Element | Colors | Ratio | Requirement | Result |
|---------|--------|-------|-------------|--------|
| Body text, navy on white | `#0B1530` / `#FFFFFF` | 18.0:1 | 4.5 | AAA |
| Body text, cream on near-black | `#F5F1E8` / `#060A18` | 17.5:1 | 4.5 | AAA |
| Rust eyebrows, numbers, CTAs (light) | `#8B3A2E` / `#FFFFFF` | 7.7:1 | 4.5 | AAA |
| Gold eyebrows (dark) | `#C9A14A` / `#060A18` | 8.2:1 | 4.5 | AAA |
| Terra cotta accent words and numbers (dark) | `#C2734D` / `#060A18` | 5.5:1 | 3.0 (large) | Pass |
| Lead text, navy at 82% (light) | composited / `#FFFFFF` | 10.5:1 | 4.5 | AAA |
| Lead text, cream at 84% (dark) | composited / `#060A18` | 12.3:1 | 4.5 | AAA |
| Day-card heading, cream on card navy | `#F5F1E8` / `#1C2E4F` | 11.9:1 | 4.5 | AAA |
| Day-card label, gold on card navy | `#C9A14A` / `#1C2E4F` | 5.6:1 | 4.5 | Pass |
| Day-card body, cream at 78% on card navy | composited / `#1C2E4F` | 7.9:1 | 4.5 | AAA |
| Button text, white on rust | `#FFFFFF` / `#8B3A2E` | 7.7:1 | 4.5 | AAA |
| InteDashboard note, cream at 62% (dark) | composited / `#060A18` | 7.0:1 | 4.5 | AAA |
| Study-card border | `#8C90A0` / `#FFFFFF` | 3.2:1 | 3.0 | Pass |
| Focus ring, light sections | `#8B3A2E` / `#FFFFFF` | 7.7:1 | 3.0 | Pass |
| Focus ring, dark sections | `#C9A14A` / `#060A18` | 8.2:1 | 3.0 | Pass |
| Lab Sprint card title, soft clay on navy | `#CE8166` / `#0B1530` | 6.0:1 | 3.0 (large) | AAA (large) |
| Lab Sprint card eyebrow, gold on navy | `#C9A14A` / `#0B1530` | 7.5:1 | 4.5 | AAA |
| Lab Sprint card body and CTA, cream on navy | `#F5F1E8` / `#0B1530` | 16.0:1 | 4.5 | AAA |
| Lab Sprint card fill vs white page (non-text) | `#0B1530` / `#FFFFFF` | 18.0:1 | 3.0 | Pass |
| Lab Sprint card focus ring, rust on white page | `#8B3A2E` / `#FFFFFF` | 7.7:1 | 3.0 | Pass |

No text or non-text pair falls below its threshold on any of the nine pages. The Lab Sprint card is a navy `#0B1530` surface and every element on it clears AAA: gold eyebrow 7.5:1, soft-clay title 6.0:1 as large text, cream body 16:1. The day cards were lightened to `#1C2E4F` so they read as distinct surfaces on the near-black band; their gold label sits at AA (5.6:1) rather than AAA, the one trade of the lighter card fill.

## 4. Keyboard navigation flow

Each page: skip link first, then the header logo and the two header nav links (Course Home, Full Schedule), then the in-page content links (study-page cards followed by the Lab Sprint card that closes the grid, the pre-work button, the InteDashboard link where present, the schedule link on Week 8), then the footer previous/next week links. Every interactive element is a native `a`, reachable and operable by keyboard with no traps. The InteDashboard link opens in a new tab (`target="_blank" rel="noopener"`); all internal links use `target="_top"` so they break out of the Canvas or Kajabi iframe cleanly. Focus is visible at every step.

## 5. Screen reader review

Structural and ARIA review completed against the markup of all nine pages: one `h1`, four `h2` section headings, and `h3` card titles per page, with no skipped levels. Landmarks (`header`, `nav` with `aria-label`, `main`, `footer`) are present. Decorative SVGs and arrows carry `aria-hidden`; each logo link has an `aria-label`; the week-navigation footer is a labelled `nav`. **Not yet performed:** a live VoiceOver / NVDA pass (see section 6).

## 6. Known limitations and remediation plan

1. **Live screen-reader test pending.** Markup verified; not yet exercised with VoiceOver or NVDA. Run one pass before the site goes live to students.
2. **Cross-page links resolve only on deploy.** The week pages link to the repo's concept pages, `prework.html`, `course-schedule.html`, the syllabus, and `Intedashboard.png`. These 404 in local preview and work once all files sit together in the `new-build-bio4-solano` repo.
3. **Mixed design system.** The home and week pages use the cream design; the repo's ~37 concept pages use the PRIMARY palette. Students cross a visual change moving from a week hub into a concept page. This is a known, accepted state pending any future restyle.
4. **InteDashboard logo is a raster PNG.** It will not scale as crisply as an SVG. Acceptable at the small button size used.
5. **Weeks 4 and 5 study sections are light.** Those weeks are regional and lab-heavy; the repo lacks concept pages for several regional muscle topics, so the pages link fewer cards. Not an accessibility issue.

## 7. Reviewer

Automated and structural audit performed by Claude (Cowork), 2026-05-24; Lab Sprint card addition audited 2026-05-25. Pending sign-off and a live screen-reader pass by Dr. Sharilyn Rennie.
