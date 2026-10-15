# Drop, October 14 2026: Study Help page, study-tool links, drawing canvas

Upload everything in this zip to the root of new-build-bio4-solano. Everything overwrites in place.

## New
- bio004-study-help.html: the "What do you need help with?" page. The Study door opens it.
- compliance-notes-study-help.md: accessibility notes for it.

## The four doors
- bio004-launchpad.html and bio004-launchpad-overlay.js: the Study door now opens the new page. The old Study list of eight tools and the Study Protocol tile are gone. Lecture, Lab, the schedule tile, Need motivation and announcements are unchanged.
- bio004-dock.js: "Study Protocol" is replaced by "What do you need help with?". Study tools now open in their own tab when the dock is inside a Kajabi frame.
- welcome.html: one new link, "What do you need help with?", above Quick Access. The tour now opens Mastery OS in its own tab.

## Study tools always open as their own page
So that recall, Loops, brain dumps and drawings all save where the weakness dashboard can see them:
- bio004-spaced-recall.html, bio004-spaced-recall-weakness-dashboard.html, spaced-recall.html, spaced-recall-heart.html, recall-cards.html, recall-rx-exam-prep.html, card-gap-finder.html, bio004-draw.html: inside a Canvas or Kajabi frame they now take the whole window instead of loading inside the frame.
- start-here.html, brain-dump-practice.html: target="_top" added to three links.
- today.html: its pop-up viewer no longer opens study tools inside itself.

## Restored
- mastery-canvas.html: a BIO 005 copy had overwritten the BIO 004 drawing canvas on September 16, so BIO 004 drawings were not reaching the weakness dashboard. This is the BIO 004 version from that morning.

## By hand, outside GitHub
- Kajabi: anywhere a Kajabi page frames Loops, Mastery OS, recall cards, weak spots, brain dump, the practice exam, the drawing canvas or day review, replace the frame with a plain link button. Work done inside a Kajabi frame never reaches the weakness dashboard.
- Canvas: delete any old frames that load those same tools directly. Use canvas-enter.html as the Canvas home card, as before.
- Loops repo: its kajabi-embed.html frames Loops. Replace that with a link button to https://drsrennie-stack.github.io/loops/.
