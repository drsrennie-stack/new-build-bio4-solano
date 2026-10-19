# TBL Study Group: how it works and what to know

BIO 004 Human Anatomy, Fall 2026. Built October 15, 2026.
Page: bio004-tbl-study.html

## What students do

1. One student opens the page, picks **Lecture** or **Lab**, picks a module, checks topics, picks how many iRAT questions (5, 8, 10 or 12) and how many application questions, then taps **Build our TBL**.
2. The page shows a **QR code**. Everyone scans it and takes the **iRAT alone on their own phone**, spreading 4 points across the choices on each question.
3. When everyone has submitted, the team runs the **tRAT** on one screen. For each question they tap their 1st, 2nd, 3rd and 4th choice, then lock it. Scoring is 1 point if the 1st choice is right, 0.5 for the 2nd, 0.25 for the 3rd and 0 for the 4th.
4. The team answers the **application questions**: one answer each, 3 points, all or none.
5. The team screen shows the team scores. Each student types those into their own phone and sees:
   - **Grade out of 40:** iRAT counts 30 and tRAT counts 10.
   - **Application percentage**, shown separately.
   - **Fix it now:** the concepts they missed, with a prompt to work through each one with a teammate right then.
   - **Full answer key:** why the right answer is right, and a note on every choice.
6. **Paper version (PDF)** prints the same TBL: iRAT sheet, tRAT ranking sheet, application sheet, and the full answer key on its own pages. Students can print it or save it as a PDF.

## Where the questions come from

- **Lecture iRAT and tRAT:** the Recall card bank (bio004-card-bank.js). Only DOK 2 and 3 cards are used, weighted toward DOK 3 (about 60 percent), and only cards tied to a competency.
  - Each build draws a fresh random set, so practice is effectively unlimited.
  - No competency is tested twice in one set. A single topic with only a few competencies gives a shorter test, and the page tells students to add a topic.
- **Lab iRAT and tRAT:**
  - **Atlas images:** about 1,600 labeled structures in bio004-tbl-lab-data.js, built from the digital atlas. Each question shows your image with one marker and four names from the same figure. After the answer, an answer figure labels where each wrong choice actually sits.
  - **Lab cards:** about 30 percent of each lab draw comes from the lab card topics.
  - No structure is tested twice in one set.
- **Application questions:** 404 new questions in bio004-tbl-apps.js, written for this tool from your cards, notes and the atlas.
  - Split: 276 lecture and 128 lab, covering every topic.
  - Depth: 333 at DOK 3 and 71 at DOK 4.
  - Types: 171 Trigger, 98 Priority, 72 Sequence and 63 Ranking.
  - Every question was then checked by a separate reviewer for wrong keys, second defensible answers, false statements, scope and honest DOK labels. Most sets had several items fixed. None of the 404 had a wrong key, and none were cut.
- **Answer letters:** reshuffled for every group so the key is balanced, with no repeats in a row, no ABAB patterns and no ABC runs.

## Editing

- **Application questions:** edit bio004-tbl-apps.js directly, then check it with `node tools/validate_tbl_apps.js bio004-tbl-apps.js`.
- **Lab images:** after you change atlas pages, rebuild with `node tools/build_tbl_lab_data.js ../new-digital-atlas`.
- **Recall cards:** edits in bio004-card-bank.js show up here automatically.
- **Scoring weights:** the 30/10 split, the 1/0.5/0.25/0 tRAT points and the 3 application points are at the top of the script in bio004-tbl-study.html, under SETTINGS.

## Things in your own materials worth fixing

The questions were written so none depend on these points, but students may run into them elsewhere.

**Likely errors**
- **Mediastinum vs. diaphragm:** module-1-structure-list.html and body-cavities-lab-sprint.html give "Mediastinum" as what separates the thoracic and abdominopelvic cavities. It is the diaphragm, and your cards say diaphragm.
- **Wrong prompt in the atlas:** on repro.html (male), one figure asks "Name this muscle." for the ductus (vas) deferens. The TBL tool now asks "Name this structure." The atlas page itself still needs the fix.
- **Hemidesmosomes:** the junction table in m1-tissues-notes.html lists "Skin, heart muscle" for them. Heart muscle uses desmosomes and gap junctions.
- **Sacrum marking:** the Module 2 structure list says "Articular surface" where your notes and cards say "Auricular surface".
- **Reticular dermis:** m1-integumentary-notes.html says "regular net-like collagen" for it, which looks like a slip for irregular.
- **Laryngeal cartilages:** your notes say every laryngeal cartilage except the epiglottis is hyaline. Standard texts count the corniculate and cuneiform as elastic.
- **Spinal cord levels:** cns-spinal-cord.html gives the lumbar enlargement as "T11 to S2", which mixes vertebral levels and cord segments.
- **Temperature:** m3-blood-notes.html gives blood temperature in Celsius only. Your cards write 38 C (100.4 F).

**Places your own pages disagree**
- **Duodenum in SADPUCKER:** card says parts 2 and 3; the body-cavities table says 2, 3 and 4.
- **Mediastinum lateral boundary:** card says the lungs; body-cavities.html says the mediastinal pleura.
- **Tonsils:** one card says three; your table lists four, including the tubal tonsils.
- **Bladder wall layers:** listed differently on the-urinary-system.html and urinary-system.html.
- **Lateral gray horn:** notes say "thoracic and lumbar"; cards say T1 to L2.
- **Kidney vessels:** m4-urinary-notes.html says "Interlobular"; cards say "cortical radiate (interlobular)".
- **Cranial nerve III:** the workbook lists it as motor with parasympathetic fibers; cards say motor.
- **Lab sprint lists vs. the atlas:** the leg, thigh and accessory organ lists don't match the atlas pins.
- **Atlas name variants:** "Cricothyroid membrane" and "Cricothyroid ligament" both appear, and "Pyloric sphincter (pylorus)" merges two of your terms.

**Scope and wording**
- **Contraction chemistry:** muscle-structure-sarcomeres.html teaches acetylcholine, troponin and action potentials, while m3-muscle-notes.html says the contraction mechanism is not covered.
- **Accessory organ cards:** a few go into enzyme and bile chemistry.
- **Proximal and distal:** one card says these are used only on the limbs. Standard texts also use them for the kidney tubule and gut, so strong students may argue it.
- **Aquaporins:** m1-cell-notes.html lists water through aquaporins as an example of "permeable"; it fits your "semipermeable" definition better.
- **Interstitial growth:** your bone notes say "the bone grows longer" by interstitial growth. Strictly, it is the plate's cartilage that grows, and bone replaces it.

## Known limits

- Lab image questions are visual by nature. See compliance-notes-tbl-study.md for the plan.
- Atlas images load from the atlas site. If that site is down, lab questions show without pictures.
- Progress lives in each phone's browser. No names or student IDs are collected or stored.
