# The Enter Course card, rebuilt

`welcome.html`. One file, one card, one button. This is the front door
you had before, with one change: **the button opens in a new tab**, so Canvas
stays where the student left it instead of being replaced.

## How a plain link actually works, since you asked

There is no trick to it. A link out of Canvas is just a URL. Two ways:

**A. External URL module item, no HTML at all.** In the Canvas module click
**+**, choose **External URL**, paste the address, name it "Enter Course",
tick **Load in a new tab**, save. Canvas renders it as a normal module item.

**B. This card, embedded on the home page.** One snippet, and the card does
the rest:

```html
<p><iframe src="https://drsrennie-stack.github.io/new-build-bio4-solano/welcome.html?sec=tr-eve"
  width="100%" height="760" style="border:0;width:100%"
  title="Enter BIO 004 Human Anatomy"></iframe></p>
```

Change `?sec=` per course shell:

| Shell | sec |
|---|---|
| Class 1 &middot; Mon/Wed afternoon &middot; CRN 80650 | `mw` |
| Class 2 &middot; Tue/Thu morning &middot; CRN 80654 | `tr-am` |
| Class 3 &middot; Tue/Thu evening &middot; CRN 80655 | `tr-eve` |

Renders at 740px, so **760** never clips. Leave `?sec=` off entirely and the
card still works; the student picks their section on the far side.

## Why the section parameter is worth keeping

It bakes the section into the link. `welcome.html` remembers a section in
`localStorage`, but inside a Canvas iframe that is *third-party* storage and
Safari blocks it. Those students were being asked to pick every single visit.
The parameter sidesteps storage completely.

That is also the whole reason "everything lives in the browser" is the better
setup, and why your instinct was right the first time. Outside the frame,
storage is first-party and it just works.

## One detail I fixed while building it

"Not your section? Change it" pointed at `welcome.html`, which would have
read the saved section and shown the student the exact same thing again. It
points at `welcome.html?tour=1` now, which reopens the chooser.

## Verified

- All three sections resolve, and the pill names the right CRN
- No `?sec=` at all still works, and the "Change it" link hides itself
- Both links open `target="_blank"`, so Canvas is never replaced
- 10 text nodes, all pass WCAG AAA
- First tab stop is the Enter Course button

`canvas-links.md` in this zip has every plain URL, all three sections and all
17 weeks, if you would rather skip the card in some places.
