# Home now goes to the welcome hub, not the section picker

Repo root, overwriting. Nothing deleted.

## The change you asked for

Every "course home" affordance pointed at `index.html`, the one-time section
chooser. A student deep in a notes page or a worksheet who tapped the logo
landed back on "Pick your class" instead of their week.

**705 links across 367 files** now point at `welcome.html`.

That is the right target because welcome decides for itself: a student who
has already picked a section gets the welcome-back hub with their week, the
module tabs and the gold arrow on the current week. A student who has not
picked yet still gets the picker. Nobody has to choose twice, and nobody
lands somewhere useless.

Repointed: header logos, footer logos, breadcrumbs, "Course home" buttons,
"Back to course resources" links, hub cards.

**Deliberately left alone:** `index.html` itself, `welcome.html`,
`welcome.html`, `welcome.html` and `404.html`. Repointing those
would either make a page link to itself or break the picker.

Verified across notes pages, worksheets, hubs, week pages, the calendar,
video pages, class pages and syllabi: home resolves to `welcome.html`
everywhere, and **zero `index.html` links remain** in the patched files.

## Also in this zip, from earlier in the session

- All 17 week hubs, the 17 week pages, the calendar
- 38 video pages with topic HTML notes buttons (51 of them)
- `session-links.js`, `week-links.js` with modules 4 and 5 wired
- `loops-index.js`, `mastery-evidence.js`, `card-competency-map.js`,
  `competenciesfall2026.js`

## The six large pages ship separately

`integumentary-concept-videos.html` (24 MB), `joints`, `tissues`, `cell`,
`week1` and `appendicular` carry embedded base64 images. They are in the
second zip so this one stays quick to download. **Both zips are needed.**
