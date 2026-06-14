# Course Setup Walkthrough: how to deploy and edit

## What it does

A guided, "set up your new Mac" style tour for BIO 004. It runs once automatically the first time a student lands on the home page, points an arrow at one real button at a time, and will not let them pass the key steps until they click the real thing. It carries them across pages:

1. **Home page:** check the syllabus, learn the weekly rhythm, then click the real **Week 1** card to go in.
2. **Week 1 hub:** find the **Concept videos**, find the **Recall Rx** study cards.
3. **Week 1 TBL page:** find the **InteDashboard** button, then a "Setup complete" finish.

A little **Course setup** button stays in the bottom-right corner so anyone can replay it. It starts with an Apple-style "Setting up your course" loader and a small bouncing anatomy mascot.

## To make it live (4 files to push)

Push these to `drsrennie-stack/new-build-bio4-solano`, replacing the existing pages:

- `course-tour.js` (new)
- `index.html` (now has one new line before `</body>`)
- `week-1-hub.html` (same one line added)
- `week-1.html` (same one line added)

The one line added to each page is just:

```html
<script src="course-tour.js" defer></script>
```

The tour only fully works once all four are live on the site, because it walks students between real pages.

## To add the tour to weeks 2 through 8

Each of those pages only needs the same single line before `</body>`:

```html
<script src="course-tour.js" defer></script>
```

The home-page part of the tour already works for every week (the Week 1 gate is the teaching moment). If you want the hub and TBL steps to fire on weeks 2 to 8 as well, tell me and I will make the step list week-aware so it follows whichever week the student opened.

## To change the words, stops, or order

Open `course-tour.js` and edit the `STEPS` array near the top. Each stop is one block with a title and body. Add, remove, or reword freely. To change which button a stop points at, change its `find` value (a CSS selector).

## To reset it while testing

Open the page, then in the browser console run:

```js
CourseTour.reset();   // clears "already completed" so it auto-runs again
CourseTour.start();   // launches it immediately
```

## One thing to confirm

The InteDashboard button is on `week-1.html`, but your home cards link to `week-1-hub.html`, and the hub does not link onward to `week-1.html`. The tour jumps there on its own for the last step. If the hub is your real student page, the cleaner fix is to put the InteDashboard button on the hub. Say the word and I will move it.
