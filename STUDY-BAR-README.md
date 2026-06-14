# "One topic, every door" — Study Bar system (Week 1 pilot)

A small app layer that links every modality of a topic (video, HTML slides, PowerPoint, notes, lab sprint, workbook, Recall Rx) so they all point to each other. Built for Week 1 to review before scaling.

## The three pieces

1. **course-map.js** — the single source of truth. Each topic lists its resource URLs. Edit a link here once and every Study Bar updates. Slots accept multiple links (Foundations has two notes pages) and a `pending:true` flag for resources not built yet (the Tissues and Integumentary PowerPoints render as "coming soon").

2. **study-bar.js** — the reusable component. Drop a placeholder on any page and it fills in the bar:
   ```html
   <nav data-studybar="integumentary" data-current="videos"></nav>
   <script src="course-map.js"></script>
   <script src="study-bar.js"></script>
   ```
   `data-current` is optional and marks the page you are on (`aria-current="page"`). The bar is a real `<nav>` landmark of text links in a list, keyboard operable, with visible focus and reduced-motion support. No image buttons, so it is fully screen-reader navigable.

3. **week-1-hub.html** — the student's weekly home base. One card per topic, each with its Study Bar, plus the week's lab sprints, the spaced-recall deck, and the video overview. Link the course index to this page.

## What is wired now (pilot)

- `week-1-hub.html` renders Study Bars for Foundations, The Cell, Tissues, and Integumentary.
- `integumentary-concept-videos.html` carries the in-page Study Bar (marked on "videos") as a live demo.

## Rolling it out (after you approve)

- **Add the bar to a topic page:** paste the placeholder `<nav>` plus the two script tags, set `data-current` to that page's modality.
- **Add a new topic or week:** add an entry to `course-map.js`. Nothing else changes.
- **Cross-repo note:** the decks live in `A-P-lecture-core` and everything else in `new-build-bio4-solano`, both on `drsrennie-stack.github.io`. Links use `target="_top"`. Deck-repo links are tinted gold in the bar; hub links are navy. To put the bar inside a deck, reference the hub-hosted scripts by absolute URL.

## Mapping choices to confirm

- **Foundations** spans two hub topics (Language of Anatomy, Body Cavities). I kept one Foundations card and listed both pages in the notes, lab, and workbook slots. Tell me if you would rather split it into two cards.
- **The Cell** has no lab sprint, so that slot is omitted for the Cell.
- **PowerPoints** for Tissues and Integumentary are not built yet, so they show "coming soon" until you add them.
