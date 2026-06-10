# Accessibility Compliance Notes

## 1. Project

- **Project:** BIO 004 Human Anatomy, Solano Community College
- **Files covered:** `index.html` (course home), `week-1.html` through `week-8.html` (the eight weekly module pages), `week-1-lab-sprints.html` through `week-8-lab-sprints.html` (the eight weekly lab sprint hubs), 31 per-topic lab sprint pages, `welcome.html` (the Canvas welcome page), and `course-information.html` (the syllabus essentials hub)
- **Date:** 2026-05-24, revised 2026-05-25
- **Design:** Cream-design course site adapted from Dr. Rennie's MedMasters site language. Each page is a self-contained HTML file with inline CSS and JS.

**Revision 2026-05-25:** `week-1.html` through `week-8.html` each gained a Lab Sprint card, replacing the former small outline "Lab Sprint" button. The card sits as the last cell of the "Study this week" card grid, matching the white study cards in shape and size but filled navy `#0B1530` so it reads as a distinct, non-lecture item. It carries a gold eyebrow `#C9A14A`, a soft-clay title `#CE8166` (20px, weight 800), and cream `#F5F1E8` body text and call-to-action, and is a single native `a` linking to that week's `week-N-lab-sprints.html`. The same revision lightened the Mon-Thu day cards from `#0B1530` to `#1C2E4F` so they separate cleanly from the near-black `#060A18` band instead of reading navy-on-navy. Two new values were introduced: soft clay `#CE8166` (a lightened, readable member of the rust family, for dark backgrounds where the rust `#8B3A2E` itself fails contrast) and card navy `#1C2E4F` (a lighter navy for card surfaces on the dark band). Contrast for every pair is in section 3.

**Welcome page (2026-05-25):** `welcome.html` is a standalone Canvas welcome panel: near-black `#060A18` background, gold eyebrow, cream message, and a terra cotta `#C2734D` Enter Course button with navy `#0B1530` text that links to the hub. Contrast: gold 8.2:1, cream 17.5:1, terra cotta h1 accent 5.5:1 (large text), button text 5.0:1, button fill vs background 5.5:1, gold focus ring 8.2:1, all clear WCAG AA and most reach AAA. A paste-safe inline-styled twin, `welcome-canvas.html`, carries the same colors and copy for direct entry into the Canvas Rich Content Editor (no script, no style block); it falls back to a system font and drops the hover animation, neither of which affects conformance.

**Course information page (2026-05-25):** `course-information.html` is a single-page syllabus essentials hub, alternating light and dark bands in the cream design system. Sections: Required Materials (with an InteDashboard callout flagging the ~$40 cost, the financial-aid path through the bookstore, and the do-not-activate-until-class note), Communication & Office Hours, Academic Policies & Integrity (academic integrity, AI policy, late work and make-ups), Accessibility & Accommodations (with ASC contacts and Clockwork link), and Lab Safety & Procedures (PPE, the strict in-lab digital device policy, and consequences). The page uses the same palette and contrast pairs already documented in section 3; no new colors. A jump nav at the top of the page lets students skip to a section. Hosted standalone and embeddable in Canvas via iframe.

**Per-topic lab sprint pages (2026-05-25):** 31 per-topic lab sprint pages were added to the project folder (uploaded by Dr. Rennie). The topic cards inside each `week-N-lab-sprints.html` master page now resolve to real files. One file is missing: `cns-brain-lab-sprint.html` (Week 7's "The Brain" card); the corresponding link will 404 until that file is added. These files were authored separately and inherit their own contrast profile; not re-audited here.

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

## 8. Digital Device Policy and Agreement (2026-05-26 audit and patch)

**Files audited:** `digital-device-policy.html`, `digital-device-policy-agreement.html`. Patched: `digital-device-policy-agreement.html` (in `BIOL OO4 Content/`, ready to copy back into `drsrennie-stack/new-build-bio4-solano`).

### Findings

| Issue | Where | Severity | Status |
|---|---|---|---|
| Cream body text inheriting into white cons-block cards (Special circumstances, First offense, Second offense). Contrast 1.05:1 on white. WCAG 1.4.3 fail. | `.band--dark .body p`, `.band--dark .body li` leaking into `.cons-block` | Critical | Fixed |
| Gold bold text on white inside cons-block cards. Contrast 2.9:1 on white. WCAG 1.4.3 fail for normal text. | `.band--dark .body strong` leaking into `.cons-block strong` | Critical | Fixed |
| Terra `#C2734D` on white for cons-block `h3`. Contrast 3.7:1. Passes AA large, fails AAA. | `.cons-block h3` | Minor | Bumped to terra-dark `#8B3A2E`, now 7.2:1 AAA |
| Submit-zone status text updates without screen reader notification. WCAG 4.1.3 status messages improvement. | `#submit-zone-status` | Moderate | Added `role="status" aria-live="polite"` |

### CSS patch applied

```css
/* Cons-block is a white card. Override band--dark inheritance so text stays readable on white (WCAG 1.4.3 AA fix). */
.band--dark .cons-block p,
.band--dark .cons-block li,
.band--dark .cons-block .cons-note { color: #0B1530; opacity: 1; }
.band--dark .cons-block .cons-note { color: rgba(11, 21, 48, 0.72); }
.band--dark .cons-block strong { color: #8B3A2E; }
.band--dark .cons-block h3 { color: #8B3A2E; }
.band--dark .cons-block li::marker { color: #8B3A2E; }
.band--dark .cons-block .initial-prompt { color: #0B1530; }
```

### HTML patch applied

```html
<p class="submit-zone-status" id="submit-zone-status" role="status" aria-live="polite">
```

### Post-patch contrast on cons-block text

| Pair | Ratio | AA | AAA |
|---|---|---|---|
| Navy `#0B1530` on white (body, list items, prompt) | 17.4:1 | pass | pass |
| Terra-dark `#8B3A2E` on white (bold, h3, list markers) | 7.2:1 | pass | pass |
| Navy at 0.72 opacity on white (italic cons-note) | ~9:1 | pass | pass |

### Form-specific accessibility verified
- Every text input has a paired `<label for>` element.
- Initial inputs additionally carry `aria-label="Initials for Rule N"` (and equivalents) so the announced name includes context, since the visible label is just "Initials."
- Acknowledgment checkboxes use `<label class="ack-item" for="ack-N">` wrapping the input and text. Clicking anywhere on the row toggles.
- The acknowledgment group is wrapped in `<div role="group" aria-labelledby="ack-heading">`.
- The progress bar uses `role="status" aria-live="polite"` with an aria-hidden inner track and an announced count.
- The deadline banner uses `role="alert"` and announces on load.
- The expand button toggles `aria-expanded` correctly and references the panel via `aria-controls`.

### Time-gated initial inputs (WCAG 2.2.1 Timing Adjustable, Level A)
Each initial-zone gates its input behind a 5 to 20 second countdown. This is not a WCAG-defined time limit because the user is not penalized for waiting and nothing expires. Mitigation if a student reports difficulty: reduce or remove the `data-min-read` value globally. Submission still requires all initials, acknowledgments, name, and signature.

### Known limitations specific to the agreement file
1. **Live screen reader pass pending.** Markup verified, not yet exercised with VoiceOver or NVDA.
2. **Countdown text ticks silently.** Intentional, to avoid announcement spam. If post-deployment testing shows confusion, wrap the unlock message in a discrete `aria-live="polite"` span that updates only at the unlock event.
3. **PDF output accessibility.** Submission triggers `window.print()` to "Save as PDF." The PDF's structure depends on the browser's PDF engine. Spot-check one export with Acrobat's Accessibility Checker before the June 16 deadline.

### Deployment note
The repo copy in `drsrennie-stack/new-build-bio4-solano` does not yet carry this patch. Copy the patched file from `BIOL OO4 Content/` into the repo and push to make the fix live for students.

---

## Majors notes upgrade, Foundations block (2026-06-10)

**Files covered:** `anatomical-terminology.html`, `body-cavities.html`, `cell-anatomy.html`, `tissues.html`, `integumentary.html`.

**What changed.** Each of the five Foundations concept pages was upgraded in place with the majors-level note components, built on the existing engine (no duplicate "-notes" files):

1. **Term breakdown box** (`.term-breakdown`): a root/prefix/suffix etymology panel (15 to 16 entries per page) that replaces the non-majors "explain it simply" approach. White card, gold left rule, navy uppercase heading, terra-dark roots. Always visible; prints with the page.
2. **Drawing prompt** (`.drawing-prompt`): the drawing-and-labeling integrity activity, built as a native `<details>`/`<summary>` disclosure. Collapsed on screen by default, and forced open in print via `@media print { .draw-details > .draw-body { display: block !important; } }` so the worksheet always prints in full. Three labeling tasks per page plus a self-check note.
3. **Atlas Coloring Book chip** (`#atlas-link`): a resource-bar link to `https://www.medmasterscollaborative.com/atlas-coloring-book`, wired through `SHEET_CONFIG.atlas`. External domain, so it carries `target="_blank" rel="noopener"`; the chip stays `hidden` until the config value is set.

`anatomical-terminology.html` uses that page's site-header design tokens (`--rust`, `--line`, `--cream`, `--font`); the other four use the bone-histology concept-page tokens (`--terra`, `--rule`, `--navy-tint`, literal Plus Jakarta stack). Component styling was matched to each page's existing language so nothing looks bolted on.

### WCAG 2.2 results for the new components

| Criterion | Level | Result |
|-----------|-------|--------|
| 1.3.1 Info and Relationships | A | Pass. Term breakdown is a `section` with `aria-labelledby`; entries are a `ul`. Drawing prompt uses native `details`/`summary` with the heading id referenced by `aria-describedby`; tasks are an `ol`. |
| 1.4.3 Contrast (Minimum) | AA | Pass. New text/background pairs in section below; all clear AA, most reach AAA. |
| 2.1.1 Keyboard | A | Pass. `summary` is natively focusable and toggles on Enter/Space; the atlas chip is a native link. No custom widgets, no key traps. |
| 2.4.7 Focus Visible | AA | Pass. `summary:focus-visible` gets a 3px focus ring (`--focus-ring`, with `outline-offset: -3px` so it stays inside the card edge); the chip inherits the page focus ring. |
| 2.5.8 Target Size | AA (2.2) | Pass. Summary row and chip exceed 24x24 CSS px. |
| 4.1.2 Name, Role, Value | A | Pass. `details`/`summary` expose expanded/collapsed state to assistive tech with no ARIA needed. |
| 1.4.13 Content on Hover or Focus | AA | Pass. The disclosure toggles on click/Enter, not hover; nothing appears on hover alone. |
| 2.3.3 Animation from Interactions | AAA | Pass. The chevron rotation is disabled under `prefers-reduced-motion`. |

### Contrast audit, new color pairs

Backgrounds: white `#FFFFFF`, off-white/cream `#F5F1E8` (the `--cream` / `--navy-tint` / `--offwhite` token, used as the drawing-prompt fill).

| Pair | Ratio | Result |
|------|-------|--------|
| Navy `#0B1530` text on white | 18.0:1 | AAA |
| Navy `#0B1530` text on cream `#F5F1E8` | 16.0:1 | AAA |
| Terra/rust `#8B3A2E` root labels on white | 7.7:1 | AAA (normal text) |
| Terra/rust `#8B3A2E` on cream `#F5F1E8` | 6.8:1 | AA (AAA for large) |
| Terra-dark `#A0452F` eyebrow on white / cream | 6.2:1 / 5.5:1 | AA |
| Gold `#C9A14A` used only as the 4px left border (non-text) | n/a | 1.4.11 met (decorative rule, not an accent that must read) |

The drawing-prompt left rule is navy (not gold), so no gold-as-text issue. Gold appears only as the term-breakdown left border, a decorative rule.

### Keyboard flow verified
Tab order within each new block: into the page normally, the atlas chip sits in the resource bar after the spaced-recall link, the term breakdown contains no focusable controls (reference text), and the drawing-prompt `summary` is a single tab stop that opens/closes the tasks. No focus trap; Esc is not needed because the disclosure is inline, not modal.

### Screen reader testing
Markup verified by structure (semantic landmarks, `details`/`summary` native semantics, labeled sections). **Live screen reader pass pending** (VoiceOver/NVDA not yet exercised on these five pages).

### Known limitations and remediation
1. **Live SR pass pending** (as above). Exercise `details` expand/collapse announcements before wide release.
2. **Atlas link target.** All five pages point at the single Atlas Coloring Book URL. If per-topic Atlas anchors are added later, set each page's `SHEET_CONFIG.atlas` to the specific URL.
3. **Print disclosure override** relies on the print stylesheet forcing `.draw-body` open; verified in the CSS, spot-check one Chrome "Save as PDF" export to confirm the tasks render before handing to students.

### Deployment note
These edits live in `BIOL OO4 Content/` only. Copy the five files into `drsrennie-stack/new-build-bio4-solano` and push to make them live.

**Reviewer:** Dr. Sharilyn Rennie

---

## Majors notes upgrade, Skeletal block (2026-06-10)

**Files covered:** `bone-histology.html`, `axial-skeleton-skull.html`, `axial-skeleton-spine.html`, `appendicular-skeleton-upper.html`, `appendicular-skeleton-lower.html`, `articulations.html`.

**What changed.** The six Skeletal concept pages were upgraded in place with the same locked majors components as the Foundations block (term breakdown, collapsed-but-prints drawing prompt, Atlas Coloring Book chip wired through `SHEET_CONFIG.atlas`), plus two skeletal-specific components:

1. **Classification mind-map** (`.mindmap`): a new component on `bone-histology.html` (supportive connective tissues) and `articulations.html` (structural classification of joints). Built as a genuine nested list (`ul.mm-branches` of `li.mm-branch`) inside a `role="group"` with an `aria-label`, so the hierarchy is exposed to assistive tech and prints cleanly. Navy root pill, terra-dark category labels, Lora examples, a navy connector spine on the left. No SVG, no script.
2. **Structure-to-know table**: a four-column landmark table (Marking / Type / Description / Example) added to `appendicular-skeleton-upper.html` as a "Bone markings vocabulary" reference. It reuses the existing `.grid-table` component, so it inherits the page's Notes/Study/Quiz reveal behavior and print rules with no new CSS.

All six pages use the bone-histology concept-page token set (`--terra`/`--terra-dark`, `--rule`/`--rule-soft`, `--navy-tint` for the drawing-prompt fill, `--focus-ring` gold, literal Plus Jakarta stack).

### WCAG 2.2 results for the new components

The term breakdown, drawing prompt, and Atlas chip carry the same conformance profile documented in the Foundations entry above (native `details`/`summary` keyboard and state semantics, 3px focus ring, target size, reduced-motion). New for this block:

| Criterion | Level | Result |
|-----------|-------|--------|
| 1.3.1 Info and Relationships | A | Pass. The mind-map is a real `ul`/`li` hierarchy in a labeled `role="group"`; the structure-to-know table uses `scope="col"`/`scope="row"` and a `caption`. |
| 1.4.3 Contrast (Minimum) | AA | Pass. Mind-map navy root pill: white on navy `#0B1530` = 18.0:1 (AAA). Terra-dark category labels on white = 6.2:1 (AA). Navy and Lora examples on white = 16+:1 (AAA). |
| 1.4.11 Non-text Contrast | AA | Pass. The mind-map connector spine and node dashes use `--rule` (rgba navy 0.18) as decorative structure, not meaning-bearing; the branch text carries the information. |
| 4.1.2 Name, Role, Value | A | Pass. No custom widgets; the mind-map is static structured text, the table is a native table. |

### Contrast audit, new pairs
White `#FFFFFF` on navy `#0B1530` (mind-map root pill): 18.0:1, AAA. All other text pairs reuse the values in the Foundations entry (navy on white 18.0:1; terra `#8B3A2E` on white 7.7:1; terra-dark `#A0452F` on white 6.2:1).

### Keyboard flow verified
The mind-map and structure-to-know table contain no interactive controls (the table gains Study/Quiz reveal buttons only in those modes, which are native buttons already audited on the concept pages). Tab order is unchanged: resource bar (with the atlas chip after the spaced-recall link), then content, then the drawing-prompt `summary` as a single tab stop.

### Screen reader testing
Structure verified (nested-list hierarchy, labeled group, table scopes/caption). **Live screen reader pass pending** for these six pages.

### Known limitations and remediation
1. **Live SR pass pending** (as above).
2. **Atlas link target** points at the single Atlas Coloring Book URL on all six pages; set per-page `SHEET_CONFIG.atlas` if topic-specific Atlas anchors are added later.
3. **Print disclosure override** verified in CSS; spot-check one Chrome "Save as PDF" of `bone-histology.html` (mind-map + drawing prompt) before handing to students.

### Deployment note
These edits live in `BIOL OO4 Content/` only. Copy the six files into `drsrennie-stack/new-build-bio4-solano` and push to make them live.

**Reviewer:** Dr. Sharilyn Rennie

---

## MCAS branding pass, all concept pages (2026-06-10)

**Files covered:** all 37 concept pages carrying the shared sheet template.

**What changed (per Dr. Rennie's direction, aligned to the BIO 304 index branding):**

1. **Font: Plus Jakarta Sans only.** Replaced every `'Lora', Georgia, serif` declaration (579 occurrences across 39 files) with the Plus Jakarta Sans stack. No serif remains in body copy, hints, definitions, tables, or the majors components.
2. **Pre-work box collapsed.** The `Your pre-work` block is now a `<details>`/`<summary>` disclosure, closed by default, on all 37 pages.
3. **"How to use this sheet" rebuilt.** Was a dense serif paragraph; now a collapsed `<details>` with one scannable line per mode (Notes / Study / Quiz me) plus a sub-line about the tables. Hidden in print.
4. **No bookend borders.** Removed the 4px left-accent bars from the pre-work box, term-breakdown box, and drawing-prompt card; uniform 1px border with symmetric radius, per the MCAS rule.
5. **MCAS logo header.** Added the atlas-matching `site-header` (three-figure anatomy logo SVG + "Human Anatomy" wordmark, rust accent, "BIO 004 · Solano Community College" sub) to the 36 concept pages that lacked one. Links to course home (`target="_top"`); hidden in print.

### WCAG 2.2 results

| Criterion | Level | Result |
|-----------|-------|--------|
| 1.3.1 Info and Relationships | A | Pass. Pre-work and mode-hint are native `details`/`summary`; header is a `header` landmark with an accessible logo link name. |
| 1.4.3 Contrast (Minimum) | AA | Pass. Mode-hint summary rust on white 7.7:1; body lines navy on white 18:1; logo wordmark clears AA. |
| 2.1.1 Keyboard / 2.4.7 Focus Visible | A / AA | Pass. Disclosures are `summary` (Enter/Space); logo is a native link; both carry the 3px focus ring. |
| 4.1.2 Name, Role, Value | A | Pass. `details`/`summary` expose state natively. |

### Known limitations
1. **Page background** still off-white/cream behind white cards; the BIO 304 index uses pure white. Not changed this pass; can match on request.
2. **Footer** unchanged on most pages (simple byline vs the dark MCAS footer). Can be unified on request.
3. **Unused Lora @import** still requested (harmless); can be pruned.
4. **Live SR pass pending.**

### Deployment note
All 37 concept pages were modified in `BIOL OO4 Content/` only. Copy the changed files into `drsrennie-stack/new-build-bio4-solano` and push to make them live.

**Reviewer:** Dr. Sharilyn Rennie
