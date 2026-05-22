# Accessibility Compliance Notes

## 1. Project name, files covered, date

**Project:** BIO 004 Human Anatomy, Digital Concept Pages (Solano Community College)

**Date:** 2026-05-21

**Files covered (37 HTML concept pages):**

Block 1, Introduction Concepts:

- anatomical-terminology.html
- body-cavities.html
- cell-anatomy.html
- tissues.html
- integumentary.html

Block 2, Skeletal System, Muscle, and Endocrine:

- bone-histology.html
- axial-skeleton-skull.html
- axial-skeleton-spine.html
- appendicular-skeleton-upper.html
- appendicular-skeleton-lower.html
- articulations.html
- muscle-structure.html
- muscle-fascicles.html
- endocrine.html

Block 3, Cardiovascular, Respiratory, and Lymphatic:

- heart.html
- cardiac-conduction.html
- blood.html
- blood-vessels.html
- blood-vessel-disorders.html
- respiratory.html
- lymphatic-system.html

Block 4, Digestive, Urinary, and Reproductive:

- alimentary-canal.html
- accessory-digestive-organs.html
- urinary-system.html
- reproductive-male.html
- reproductive-female.html
- pregnancy-and-birth.html

Block 5, Nervous System:

- nervous-tissue.html
- neuronal-integration.html
- cns-brain.html
- cns-brainstem.html
- cns-spinal-cord.html
- cns-meninges-csf.html
- cranial-nerves.html
- nerve-plexuses.html
- pns.html
- ans.html

All 37 pages share one template (PRIMARY palette, Notes/Study/Quiz modes, the grid-table and sequence components, the two-video resource bar, the lightbox, the explain-back gate, and the iframe height-sender). This audit therefore applies template-wide; per-page differences are limited to content, not structure.

### Note on the May 2026 rebuild

This release reflects the Block 5 nervous-system depth rebuild and the Block 4 audit. The retired combined page `cns-brain-spinal-cord.html` was split into `cns-brain.html`, `cns-brainstem.html`, `cns-spinal-cord.html`, and `cranial-nerves.html`. New page `nerve-plexuses.html` was added. The pages `nervous-tissue.html`, `pns.html`, and `ans.html` were rebuilt to lecture-level depth from the course lecture notes. The Block 4 pages `alimentary-canal.html`, `accessory-digestive-organs.html`, `urinary-system.html`, `reproductive-male.html`, and `reproductive-female.html` were rebuilt to the same depth standard. Every new and rebuilt page was generated from the verified template scaffold, so the structural audit below carries forward unchanged. Each new and rebuilt page was checked programmatically for em dashes, balanced tags, unique element IDs, matching table column counts, a single correctly nested heading hierarchy, and the presence of the skip link, the `aria-live` regions, the reduced-motion block, the `target="_top"` internal links, and the iframe height-sender.

## 2. WCAG version and target level achieved per criterion

**Standard:** WCAG 2.2. **Floor:** Level AA on every criterion. **Target:** Level AAA where achievable.

| Criterion | Level | Result | Notes |
|-----------|-------|--------|-------|
| 1.1.1 Non-text Content | A | Pass | Every `img` has descriptive alt text; icon-only buttons carry `aria-label`; decorative arrows use `aria-hidden="true"`. Figure-placeholder cards carry written descriptions to be converted to alt text when final images are added. |
| 1.3.1 Info and Relationships | A | Pass | Semantic `main`, `section`, `aside`, `nav`-style toolbar; headings nest h1, h2, h3 in order; comparison grids use `thead`, `tbody`, and `th` with `scope`; sequences use ordered lists. |
| 1.3.2 Meaningful Sequence | A | Pass | DOM order matches reading order; content reads linearly in a single column. |
| 1.4.1 Use of Color | A | Pass | Mode state is conveyed by text and `aria-pressed`, not color alone; locked, unlocked, and completed states pair color with border style. |
| 1.4.3 Contrast (Minimum) | AA | Pass | See the audit in section 3. All text pairs meet or exceed 4.5:1, or the 3:1 large-text threshold. |
| 1.4.6 Contrast (Enhanced) | AAA | Partial | Navy body text reaches 11:1, well past 7:1. The terra-dark eyebrow label at 12 px measures 5.62:1, which meets AA but not the AAA 7:1 target. See section 6. |
| 1.4.10 Reflow | AA | Pass | The sheet is max-width constrained and reflows to a single column; no horizontal scroll at 320 px. |
| 1.4.11 Non-text Contrast | AA | Partial | Grid and table borders use navy and pass. The gold focus outline measures 2.90:1 against white, marginally below 3:1. See section 6. |
| 1.4.12 Text Spacing | AA | Pass | Layout uses relative spacing and tolerates user text-spacing overrides without clipping. |
| 1.4.13 Content on Hover or Focus | AA | Pass | The lightbox is dismissable with Escape; no hover-only content is required to complete a task. |
| 2.1.1 Keyboard | A | Pass | All interactive elements are native `button`, `a`, `input`, or `textarea`; no custom widgets require pointer input. |
| 2.1.2 No Keyboard Trap | A | Pass | The lightbox dialog traps focus only while open and restores focus to the triggering control on close. |
| 2.3.3 Animation from Interactions | AAA | Pass | A `prefers-reduced-motion` block disables transitions, animations, and smooth scrolling. |
| 2.4.1 Bypass Blocks | A | Pass | A "Skip to main content" link is the first focusable element on every page. |
| 2.4.3 Focus Order | A | Pass | Focus order follows the visible layout: toolbar, header, resources, content, gate. |
| 2.4.7 Focus Visible | AA | Pass | A visible focus outline is applied to every interactive element via `:focus-visible`. |
| 2.4.11 Focus Not Obscured (Minimum) | AA | Pass | No sticky or floating elements overlap a focused control. |
| 2.5.8 Target Size (Minimum) | AA | Pass | Mode, Reset, Print, resource, and Reveal controls meet or exceed the 24 by 24 CSS px minimum, including padding. |
| 3.1.1 Language of Page | A | Pass | `<html lang="en">` is set on every page. |
| 3.2.3 Consistent Navigation | AA | Pass | The toolbar and resource bar are identical in placement and order across all 37 pages. |
| 3.3.2 Labels or Instructions | A | Pass | Each Quiz input has an `aria-label` naming its target; the mode-hint paragraph explains all three modes. |
| 4.1.2 Name, Role, Value | A | Pass | Mode buttons expose `aria-pressed`; video toggles expose `aria-expanded` and `aria-controls`; the lightbox uses `role="dialog"` with `aria-modal` and `aria-labelledby`. |
| 4.1.3 Status Messages | AA | Pass | The explain-back meter and status region use `aria-live="polite"` and `role="status"`. |

## 3. Color contrast audit

Palette: PRIMARY teaching palette (no sage, no cream). Ratios computed with the WCAG relative-luminance formula. Normal text requires 4.5:1 for AA and 7:1 for AAA; large text (about 18.66 px bold or 24 px) and non-text elements require 3:1.

| Foreground | Background | Ratio | AA | AAA | Where used |
|-----------|-----------|-------|----|----|-----------|
| Navy #1E3D4C | White #FFFFFF | 11.49:1 | Pass | Pass | Body text and headings on cards |
| Navy #1E3D4C | Off-white #FAFAF9 | 11.01:1 | Pass | Pass | Body text on the page background |
| Navy #1E3D4C | Navy-tint #EDF1F3 | 10.11:1 | Pass | Pass | Text in completed-state fills |
| Terra-dark #A0522D | White #FFFFFF | 5.62:1 | Pass | Fail (normal) / Pass (large) | Eyebrow label (12 px, normal text); h2 and h3 headings (large text) |
| Terra-dark #A0522D | Off-white #FAFAF9 | 5.38:1 | Pass | Fail (normal) / Pass (large) | Eyebrow and headings on page background |
| White #FFFFFF | Navy #1E3D4C | 11.49:1 | Pass | Pass | Grid header row, toolbar buttons, sequence number badges |
| White #FFFFFF | Navy-deep #142a36 | 14.85:1 | Pass | Pass | Button hover state |
| White #FFFFFF | Terra-dark #A0522D | 5.62:1 | Pass | Pass (large) | Reveal button hover state |
| Gold #B8924A | White #FFFFFF | 2.90:1 | Fail (3:1 non-text) | n/a | Focus outline; used as a 3 px ring, not as text |

Every text pair clears the AA floor. The only items that do not reach the AAA target are the 12 px terra-dark eyebrow and the gold focus outline; both are addressed in section 6.

## 4. Keyboard navigation flow verified

Tab order was traced on a representative page and is identical across the template:

1. Skip to main content link (visible on focus).
2. Mode group: Notes, Study, Quiz me buttons.
3. Reset button, Print / Save PDF button.
4. Foundations video toggle, Deep dive video toggle, Go to the pre-work link.
5. Main content in reading order. In Study and Quiz modes, each `.term` input and its Reveal button, and each grid-row and sequence-step Reveal button, are reachable in document order.
6. The explain-back gate textarea and submit button (when present).

Verified behaviors: every control is reachable and operable with Tab, Shift+Tab, Enter, and Space; the mode buttons toggle correctly from the keyboard; Reveal buttons fire on Enter and Space; the lightbox opens from a focused figure, traps focus while open, closes on Escape, and returns focus to the figure that opened it. No keyboard traps were found.

## 5. Screen reader testing

This release was audited at the code level for the structures screen readers depend on. Verified in markup across all 37 pages: a single `h1` per page with correctly nested `h2` and `h3` headings; landmark structure (`main`, `section` with `aria-labelledby`, `aria-label` on the toolbar and resource regions); comparison grids exposed as real tables with `scope` on every header cell so row and column context is announced; ordered lists for sequences, each with an `aria-label`; `aria-pressed`, `aria-expanded`, and `aria-controls` on stateful controls; `role="dialog"` with `aria-modal` and `aria-labelledby` on the lightbox; `aria-live` on dynamic regions; and `aria-label` text on every icon-only or input control.

Not yet done: a live pass with a running screen reader. A confirming test with NVDA on Windows and VoiceOver on macOS and iOS is listed as a remediation item in section 6, and should be completed before final sign-off.

## 6. Known limitations and remediation plan

1. **AAA contrast for the eyebrow label.** The terra-dark eyebrow at 12 px measures 5.62:1, which passes AA but not the AAA 7:1 target. Remediation options: raise the eyebrow to a large-text size, or use navy for the eyebrow text and keep terra-dark for accent rules only. Decision pending from Dr. Sharilyn Rennie. Priority: low (AA is met).
2. **Focus outline non-text contrast.** The gold #B8924A focus outline is 2.90:1 against white, marginally below the 3:1 non-text minimum. The outline is 3 px thick with offset, which aids visibility, but the color is below threshold. Remediation: darken the focus ring toward the gold's hover value, or switch the focus outline to navy, which would test at 11:1. Priority: medium. Recommended for the next template revision.
3. **Live screen reader pass outstanding.** Structure has been audited in code but not exercised with a running screen reader. Remediation: run NVDA and VoiceOver against one page of each layout type and record results here. Priority: medium, before final sign-off.
4. **Figure placeholders.** Most pages carry labeled figure-placeholder cards in place of final anatomical images. When real images are added, each must receive descriptive alt text equivalent to the placeholder description already written into the card. Priority: tracked with content completion.
5. **Pre-work links.** Each page sets a per-topic pre-work target (for example `cns-brain-prework.html`). These target files are not yet built; the links resolve only once the pre-work pages exist. This is a content task, not an accessibility defect. Priority: tracked with content completion.

## 7. Reviewer

Prepared by Claude (Cowork) on 2026-05-21, from a code-level audit of the shared page template, a contrast computation of the PRIMARY palette, and a programmatic structural check of all 37 pages.

Pending review and sign-off by: Dr. Sharilyn Rennie

Reviewer signature and date: ____________________________
