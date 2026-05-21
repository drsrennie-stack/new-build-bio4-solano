# BIO 004 Nervous System Rebuild, Handoff Notes

Date: May 21, 2026
Purpose: continue the Block 5 depth rebuild in a new session.

## Why this rebuild

The Block 5 (nervous system) concept pages were first built too shallow for a majors course. Dr. Rennie flagged this and is supplying her actual lecture notes as the depth specification. Every nervous system page is being rebuilt to lecture-level depth: every named structure, tract, nucleus, ganglion, cortical area, and foramen, each with a short functional role label. Pages stay anatomy-led; deep physiology mechanism (receptor pharmacology, blood-brain barrier transport) is held back. She also asked for a full audit of Blocks 3 and 4 against the same standard.

## Uploaded notes (the depth spec)

IMPORTANT: these were uploaded into a session-scoped folder. In a new conversation they will most likely need to be re-uploaded before work continues. The files:

- CNS Brain Notes, the brain
- ANS-Notes, the autonomic nervous system
- LECTURE- Spinal Cord & PNS, spinal cord and peripheral nervous system
- Nervous Tissue Notes, nervous tissue
- GI A&P Notes, Block 4 (digestive)
- NEW-NOTES Female Reproduction, Block 4
- Notes Male Reproduction Anatomy, Block 4
- Notes- Renal Anatomy, Block 4

## Project location

All pages: /Users/sharilynrennie/Documents/Claude/Projects/HTML Notes for BIOL OO4 Human Anatomy/

## What is done

cns-brain-spinal-cord.html, rebuilt to 14 sections (73 KB), verified clean. This page is slated to be split, so its content will be redistributed into new files.
Sections: overview, brain development, cerebrum, cerebral lobes, white matter tracts (association, commissural, projection), basal ganglia, functional cortical areas (15-row grid), diencephalon, brainstem, cerebellum, reticular formation and limbic system, spinal cord external anatomy, spinal cord internal anatomy, CNS disorders.

cns-meninges-csf.html, rebuilt to 12 sections (64 KB), verified clean. DONE, not part of the split.
Sections: overview, cranial meninges, dural reflections (with a dural venous sinus drainage sequence), spinal meninges, meningeal spaces, where the spinal cord ends, the lumbar puncture (9-step superficial-to-deep sequence), ventricles, cerebrospinal fluid, CSF circulation sequence, blood-brain barrier, disorders.

## Agreed structure change: split the CNS pages

The combined brain-and-cord page is too large. Module 3 becomes separate sheets. Planned new files:

- cns-brain.html, The Brain: cerebrum, lobes, white matter tracts, basal ganglia, functional cortical areas, diencephalon, cerebellum, limbic system, plus a new Cerebral Arterial Supply / Circle of Willis section.
- cns-brainstem.html, The Brainstem: midbrain, pons, medulla, reticular formation.
- cns-spinal-cord.html, The Spinal Cord: external anatomy (cervical and lumbar enlargements, conus medullaris, filum terminale, cauda equina) and internal anatomy (gray horns, dorsal and ventral roots, rootlets, dorsal root ganglion, white columns, ascending and descending tracts).
- cranial-nerves.html, The Cranial Nerves: the 12 nerves with number, classification, function, foramen, and nuclei. This content moves OFF pns.html.
- cns-brain-spinal-cord.html will be retired once its content is moved.

Most content already exists in cns-brain-spinal-cord.html and moves straight across. The roots (dorsal and ventral roots, rootlets, dorsal root ganglion) still need to be ADDED to the spinal cord sheet; they were dropped in the first rebuild.

## Awaiting Dr. Rennie's confirmation

1. The CNS split: four sheets (Brain, Brainstem, Spinal Cord, Cranial Nerves), OR three if the brainstem is folded into the brain sheet.
2. The Circle of Willis: she teaches 13 named arteries. Proposed standard 13, ordered anterior cerebral down to the spinal arteries, awaiting her confirmation or swaps: (1) anterior cerebral, (2) anterior communicating, (3) internal carotid, (4) middle cerebral, (5) posterior communicating, (6) posterior cerebral, (7) basilar, (8) superior cerebellar, (9) anterior inferior cerebellar (AICA), (10) vertebral, (11) posterior inferior cerebellar (PICA), (12) anterior spinal, (13) posterior spinal.

## Still to build

- Split the CNS pages into the four new files above (after the split is confirmed).
- Add the dorsal and ventral roots, rootlets, and dorsal root ganglion to the spinal cord sheet.
- Add the Circle of Willis / Cerebral Arterial Supply section to the brain sheet (after the 13 are confirmed).
- A brief, general nerve plexus page for the cervical, brachial, lumbar, and sacral plexuses. General level only: students should know what region of the body would be affected if a plexus were damaged. No need for specific named nerves.
- Rebuild nervous-tissue.html from Nervous Tissue Notes: neuron structure, synapses, neuron classification, neuroglia, myelination, collections of nervous tissue.
- Rebuild neuronal-integration.html: gross organization, gray and white matter, nuclei/ganglia/tracts/nerves, reflex structures.
- Rebuild pns.html from the Spinal Cord & PNS lecture: nerve structure, spinal nerves, rami, plexuses, sensory receptor classification. Cranial nerves move out to cranial-nerves.html.
- Rebuild ans.html from ANS Notes: somatic versus autonomic, two-neuron pathway, named ganglia, autonomic and enteric plexuses, the two divisions.
- Audit Blocks 3 and 4 against the depth standard using the GI, renal, and reproduction notes; rebuild thin pages.
- Refresh compliance-notes.md to cover all current pages.

## Standing rules

- Lecture-level depth. The uploaded notes are the spec; match every classification and named structure.
- Anatomy-led, with a short functional role label on each structure. Hold back deep physiology mechanism.
- Show flows as numbered sequences (the seq component): CSF circulation, venous drainage, lumbar puncture, autonomic pathways.
- No em dashes anywhere. Byline is "Dr. Sharilyn Rennie", no credential suffix.
- PRIMARY palette only (navy, gold, terra; no sage, no cream, no pastels).
- Every page: iframe height-sender, target="_top" on internal links, WCAG 2.2 AA.

## How the pages are built (technical)

Each page is a single self-contained HTML file copied from heart.html, the clean template. The body has a head block (eyebrow, title, subhead, usage, mode-hint), a resource bar with two videos, objectives, a figure plate, then content sections, a clinical tie-in, a see-also line, and a footer.

Content sections are `<section class="block" aria-labelledby="X-heading">` separated by `<hr class="rule" />`. Three content components:

- Term lists: `<ul class="terms wide">` with `<li class="term"><span class="name">..</span><span class="loc">..</span></li>`
- Comparison grids: `<table class="grid-table">` with `thead` `th scope="col"` and `tbody` rows starting `<tr><th scope="row">`
- Sequences: `<ol class="seq">` with `<li><div class="seq-body"><span class="seq-name">..</span><span class="seq-desc">..</span></div></li>`

Three modes (Notes, Study, Quiz) and the reveal controls work automatically on any number of sections. Each page sets `window.__SHEET_ID__` to `bio004-<topic>` (two places) and `SHEET_CONFIG.prework`.

Build workflow for a new page: copy heart.html, Read it to register it, edit the head metadata, replace the content sections, update SHEET_ID and prework, then verify with a script checking for em dashes, balanced tags, no duplicate IDs, and matching table column counts.
