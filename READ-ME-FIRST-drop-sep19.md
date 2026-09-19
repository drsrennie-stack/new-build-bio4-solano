# BIO 005 drop, September 19 2026

Five files. Drop them in over the top of the ones in the repo root and push.
Built against commit 13ad269, which is still what origin has, so nothing you
uploaded is at risk of being overwritten.

- `bio005-discussions.js`
- `assignment-discussion-metacognition.html`
- `bio005-patient-chart.js`
- `canvas-steps.html`
- `bio005-preview.js`   (new file)

Weeks 1, 2 and 3 are already released and nothing in this drop changes what
students have, apart from one removal you asked for.

## 1. The two discussions your students were seeing

Two topics are live in Canvas. **712810** is the real Week 2 discussion and stays
exactly as it is. **712811** is the orphan. It was wired as a Week 3 discussion,
its title read "Membrane potential, neurons and synapses", which is Week 4
material, and the prompt underneath it was about tonicity. No wonder nobody could
identify it.

`bio005-discussions.js` now retires it. The prompt is parked at the bottom of the
file under `retired-week3-tonicity`, unread by any week, so nothing is lost.

**You still have to take 712811 down by hand.** If nobody has posted in it,
unpublish or delete. If anyone has, do not delete or the posts go with it.
Rename it so it cannot be mistaken for required work, close it for comments, and
move it out of the Week 3 module.

The same file also gives Week 8 no discussion, since it is Midterm 1, and moves
the old Weeks 8 through 14 up one to 9 through 15. The last post of the term used
to point students back at Week 3, which no longer has one, so it now says Week 4.

A small confirmation that the shift is right rather than merely plausible: the
digestion prompt contains a line about the week sitting on the holiday. At Week
11 that was false. At Week 12 it lands on the week of November 23, and
Thanksgiving is the 26th.

## 2. The Reflect discussion questions

`assignment-discussion-metacognition.html`, only the `Q4` map at the bottom.
Weeks 1, 2 and 3 untouched.

Week 5 asked about synapses, which belong to Week 4 now, so it asks about
reflexes. Week 7 absorbed the reproductive cycle question. Week 8 says plainly
that there is no Reflect discussion during the midterm week, and stays in the map
rather than being deleted, because a missing key would have quietly served the
Week 1 question to anyone who opened `?week=8`.

## 3. The patient chart

`bio005-patient-chart.js`, one question changed, in Week 4.

You did not want to lose the tonicity and red cell teaching when the Week 3
discussion came down. Week 4 is her potassium entry, which makes this a real
connection rather than review tacked on: when a cell takes on water it dilutes
the potassium already inside it, without a single potassium ion crossing the
membrane, so the water she shifted on the field is part of why her arrival
potassium reads the way it does. Question 1 now sends them back to the Week 2
microscopy slides and the Week 3 compartment work.

Still five questions, so no wording anywhere else needed changing.

## 4. Weeks 4 and 5, and one gate rule

`canvas-steps.html` was still running the retired week map: Week 3 Neurons, Week
7 Midterm 1, everything after that one week out. Its turn-in block had Week 2
marked as having no discussion while Week 3 carried one, which is backwards, and
the Week 3 topic it pointed at was the orphan above. It also still linked
`assignment-discussion-01-metacognition.html`, which your compliance notes record
as retired.

It now runs the record map, and Weeks 4 and 5 are wired and testable. Week 4 is
Membrane potential, neurons and synapses, 29 competencies, patient entry her
potassium hour by hour. Week 5 is Reflexes and sensing, 25 competencies, with the
sensory and reflex lab attached.

Canvas assignment IDs for Weeks 4 and 5 are blank on purpose. Create the four
items per week, paste the URLs into the `TURNIN` block, and the buttons appear. A
blank one renders as a line saying it is not posted yet rather than a dead
button, so you can test today before the assignments exist.

**The gate.** One rule replacing three. A week opens at 08:00 Pacific on its
Monday and stays open for the rest of the term. The three it replaces were
`bio005-gate.js`, which nothing ever loaded, `unlockAt()` in
`week-navigator.html`, and `hgUnlock()` in `welcome.html`. They said Saturday
noon, Saturday 8 pm and Monday, so the site could give one student three
different answers about the same week. Point those two remaining files at
`weekIsOpen()` when you next touch them, or delete their local copies.

Daylight saving is handled. Weeks 1 to 9 open at UTC-7 and Week 10 onward at
UTC-8 after November 1, so 08:00 Pacific stays 08:00 Pacific on both sides of the
change. The closed card shows the student their own local time next to Pacific.

This is a courtesy gate, not a lock. Anything in a browser can be worked around.
The enforceable lock is the Canvas module availability date.

## 5. Instructor preview

`bio005-preview.js` is new. Add `?preview=medic` to any page URL once and it
sticks across the whole site, including pages you open later, because it saves in
your browser rather than in the link. Leave it with the button in the banner or
with `?preview=off`.

The banner names exactly which weeks it is unlocking and cannot be dismissed
except by leaving preview. That is aimed at you, not students. The expensive
mistake is seeing Week 9 render perfectly on a Tuesday and believing it is live.

Passcode is one line at the top of the file. To use it on anything new, load the
script and guard with `if (BIO005_PREVIEW.on())`.

## Canvas module availability dates

Set each module available from 8:00 am Pacific:

Week 1 Tue Sep 8, Week 2 Mon Sep 14, Week 3 Mon Sep 21, Week 4 Mon Sep 28,
Week 5 Mon Oct 5, Week 6 Mon Oct 12, Week 7 Mon Oct 19, Week 8 Mon Oct 26,
Week 9 Mon Nov 2, Week 10 Mon Nov 9, Week 11 Mon Nov 16, Week 12 Mon Nov 23,
Week 13 Mon Nov 30, Week 14 Mon Dec 7, Week 15 Mon Dec 14.

Week 1 is the only non-Monday, because the term started on a Tuesday. Leave
prerequisites and sequential unlocking off. The availability date is the lock and
the Next button gives the order.

## Housekeeping worth doing, not in this drop

There is a stale duplicate at `bio005-sheet-data.js` in the repo root, still on
the old week map. Nothing loads it. Every page that matters, including
`note-sheet.html` which is what students print, loads `assets/bio005-sheet-data.js`,
and that copy is already correct on every week. Delete the root copy so nobody
ever wires a page to it by mistake.

I audited the root copy earlier today and reported the note sheets as being a
week out. That was wrong, and the note sheets are fine.

## After you push, before Week 4 opens

Open `canvas-steps.html?week=4&step=ov&preview=medic` and walk all ten steps with
the Next button, clicking every button. Then run `site-check.html?preview=medic`,
which already crawls for broken links. Canvas links it cannot check, because
browsers block a page on your domain from reading responses from
yccd.instructure.com, so those stay a manual click.

Then the check a crawler cannot do: open `note-sheet.html?week=4` beside
`week-04-competencies.html` and confirm the box headers describe the same
physiology. A page that loads the wrong week looks perfectly healthy from the
outside, and that has now been the real problem twice.

## Next

The Week 7 merge carrying both the endocrine workup and the reproductive
follow-up, Marian Cobb's Weeks 9 to 14, the simulator registry keyed to topics,
and the postural challenge that closes out your blood pressure competency.
