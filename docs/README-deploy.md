# Week hubs: Lab / Other tools / Spaced Recall blocks

Updated all 8 week hubs so the recall tools are clearly separated and the week-level pills are grouped into blocks.

## What changed in each `week-N-hub.html`

The single blue "lab" pill card was replaced with three labeled blocks:

1. **Lab** (navy card): Lab Sprint, Atlas Canvas, Digital Atlas. The Lab Sprint link is week-specific (`week-N-lab-sprints.html`).
2. **Other tools**: Loops.
3. **Spaced Recall** (gold-accented card): two deck cards, side by side.
   - **Course Deck** -> `bio004-spaced-recall.html` (your premade cards). Labeled as the same "Recall Rx" link students see on each day.
   - **Your Deck** -> `recall-cards.html` (build your own from scratch).

Also: the intro line "from the blue card below" now reads "from the blocks below," and the needed CSS was baked into each file's `<style>`.

The daily Notes -> Concept videos -> Recall Rx path on each day card was left untouched.

## Why "Your Deck" lands in their existing deck

`recall-cards.html` stores everything in the student's own browser. The link opens the app's home with no parameters, so it drops them back into the bank they have been building, never a new one (as long as it is the same browser on the same device).

## Deploy

These files are drop-in replacements. In the `new-build-bio4-solano` repo, replace the 8 `week-N-hub.html` files at the repo root with these, commit, and push. GitHub Pages serves the rest:

- `recall-cards.html` is already in the repo (byte-identical to the current build), so **Your Deck** works immediately.
- `bio004-spaced-recall.html` is already in the repo, so **Course Deck** works immediately.

No other files need to change.

## Note on week 1

Week 1 still builds its daily paths from `course-map.js` + `day-path.js` (the older approach); weeks 2-8 are baked. The new recall/lab blocks are baked into all 8 the same way, so they look identical regardless. If you later convert weeks 2-8 back to the JS approach, tell me and I will move the blocks into `day-path.js` so it is one shared source again.

Prepared for Dr. Sharilyn Rennie.
