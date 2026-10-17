# Recall Rx Card Audit and Rebuild, October 2026

Course: BIO 004 Human Anatomy, Solano Community College, Fall 2026
Prepared for: Dr. Sharilyn Rennie
Date: October 14, 2026

## What students reported

Students said the recall cards stopped working the way they did at the start of the term. In the most recent module the cards did not give answer choices or explain the answers.

## What the audit found

The recall bank (bio004-card-bank.js) held 4,674 cards built from 14 separate decks.

- 1,700 cards (37 percent) had no answer choices and no explanation. Each was a question with a one-line answer that students graded themselves. These were the heart, vessels, blood-flow pathway, respiratory, image-free, clinical, and Week 3 to Week 8 decks, which is nearly all of Module 3 and everything after it. That is why the problem showed up in the current module.
- The 2,974 multiple-choice cards had explanations averaging about 250 characters. Most said why the right answer was right. Many mentioned the wrong answers only briefly, and none said when a wrong answer would be the right one.
- The bank was organized into 18 overlapping "blocks" and "weeks" that did not match the five course modules. Heart content alone appeared in four different places, and respiratory was split between Module 3 and Module 4.

## What was rebuilt

Every card was rewritten to the same standard:

1. One clear question with exactly four answer choices and one correct answer.
2. A teaching explanation of why the correct answer is right.
3. A note on every wrong choice that says what that choice actually is and when it would be the right answer, or names the mix-up that leads students to pick it.

The bank is now organized by Module 1 to 5, following the live Fall 2026 schedule (schedule-fall2026.js). Within each module the topics are listed in the order they are taught, and each topic carries its first class date for the Mon/Wed and Tue/Thu sections.

| Module | Topics | Cards |
|---|---|---|
| Module 1. Foundations, Cells, Tissues and Skin | 7 | 487 |
| Module 2. The Skeletal System | 6 | 530 |
| Module 3. Heart, Vessels, Muscle and Blood | 18 | 1,846 |
| Module 4. Respiratory, Lymphatic, Endocrine, Lower Limb and Digestive | 13 | 1,088 |
| Module 5. Urinary, Reproductive and Nervous Systems | 13 | 1,141 |
| More practice (head and neck muscles, abdominal wall) | 2 | 17 |
| Total | 59 | 5,109 |

- 4,372 cards were carried over and rewritten. 737 new cards were written for topics that were thin, mainly the Module 3 lab topics (back, thorax, arm, forearm and hand muscles, and the upper limb vessels and nerves), the Module 4 lower limb and abdominal vessels, and the Module 1 histology topics.
- 263 old cards were removed: near-exact duplicates, plus 34 cards the accuracy check cut as beyond an anatomy course (iron chemistry, ABO antigen sugars, platelet granule contents, anemia size classes, thalassemia, troponin subunits, and hormone action cards that your endocrine notes say are not covered).
- Depth of knowledge: 2,049 recall (DOK 1), 2,102 apply (DOK 2), 958 reason (DOK 3).
- The correct answer is spread evenly across the four positions (1,315 / 1,269 / 1,290 / 1,235). It is the single longest choice on 21 percent of cards, below the 25 percent you would expect by chance, so answer length gives nothing away. Choices are also reshuffled every time a card is shown.

## Accuracy

Accuracy was checked twice.

1. While rewriting, each card was checked against your notes, lab sprint pages and lab structure lists. 49 cards had a wrong answer key or a second defensible answer and were corrected (Appendix A). Examples: two cards called desmin the elastic filament (it is titin), one keyed actin as the golf-club-shaped protein (it is myosin), one put the common bile duct in the porta hepatis, and two gave the cervical plexus as C1 to C5 (your notes say C1 to C4).
2. A separate reviewer who had not written the cards then checked every card for a wrong key, a second defensible answer, a false statement in an explanation or note, and anything out of scope. That pass found 78 problems in 5,109 cards: 44 corrected, 34 cut (Appendix B).

A final automated check of the finished bank found 0 problems: every card has four distinct choices, a valid key, a teaching explanation and a note for every choice, and there are no em dashes, no italics, and no choices referred to by letter.

## Things in your own materials worth a look

These came up while checking cards against your notes. The cards avoid each disputed point, but you may want to settle them in the source materials.

- **Brachioradialis.** The Module 3 structure list puts it in the anterior forearm; the arm notes put it in the posterior compartment. No card depends on its compartment.
- **Main elbow flexor.** The fascicles notes name the biceps; the arm notes name the brachialis. No card depends on which is the prime mover.
- **Enteric nervous system.** The nervous tissue notes say about one million neurons. Standard texts give about 100 million or more. The cards leave the number out.
- **Module 4 lab structure list.** It still includes urinary and reproductive and leaves out the lower limb muscles. The live schedule puts urinary and reproductive in Module 5 and the lower limb in Module 4. The cards follow the schedule.
- **Larynx.** Your notes place it in the lower respiratory tract; some textbooks place it in the upper. The tract cards follow your notes and never offer the other grouping as a choice.
- **Nerve to muscle questions.** The Module 3 structure list asks which nerve supplies serratus anterior, and the Module 5 list asks about the eye muscles. Following your rule that students identify nerves by location, no card asks which nerve supplies a named muscle. Cranial nerve cards ask what a nerve does or which nerve is affected in a simple deficit.

## How students use it now

Recall still lives inside Mastery OS (the Recall section), on the same bank.

- **Choose topics by module.** Students pick a module and check the topics they want, or use "Everything taught so far," "Whole module," or "Clear." Topics already taught for their section are tagged and checked by default. Upcoming topics are shown but left unchecked. Choices are saved in the browser.
- **Display options.** Each student can choose how topics are listed (tabs, all modules on one page, or a class-by-class timeline), how answers are explained (a panel below the choices, an explanation under each choice, tap a choice to read about it, or flip the card), and a theme (light, navy page with white cards, or dark). All three themes use the course navy, dark terra cotta and gold.
- **Progress carries over.** Cards carried over from the old bank keep their old ids for spacing and for the Mastery OS feed, so no student loses their history, streak or odometer count.
- **Weakness dashboard.** Results still feed the Weakness Dashboard (Mastery OS, Section 4). This was tested: a run of missed cards produced ranked weak competencies on the next load. Recall now links to it from the header and from the end-of-session screen.

## Files changed

- bio004-card-bank.js: the rebuilt bank. This file is now where cards are edited.
- recall-view.js: the recall engine (topic picker, display options, answer breakdown).
- tools-regenerate-card-bank.js: retired, because running it would restore the old cards.
- spaced-recall.html, recall-cards.html, recall-rx-exam-prep.html, spaced-recall-heart.html: now redirect to the recall in Mastery OS, so no student lands on an old deck. recall-cards.html is still linked from week-1-mw.html.
- docs/recall-rx-card-audit.md: this report.
- compliance-notes-recall-rx.md: accessibility notes.

The old deck files (heart-cards*.js, bio004-w*-cards.js, course-content*.js and others) are no longer used by recall. They were left in place in case any other page reads them.

## October 17 update: Modules 4 and 5

Every Module 4 and 5 card was checked again against the rebuilt, independently reviewed course notes (BIO004-Module4-Packet.html and BIO004-Module5-Packet.html), and matched to a competency.

### What was done
- **Every card now has a competency.** Each Module 4 and 5 card carries `comp` (its number in the competency packet, 91, 92 and 97 to 193) and `competencyId` (the matching Mastery OS id). Recall already filters by `competencyId` first, so a weak competency now deals only the cards that teach it. Competency 152 (neural tube development) has no Mastery OS id yet, so its cards carry `comp` only.
- **2,229 cards checked**, in ten batches, each followed by an independent review by a reviewer who did not write the fixes.
- **491 cards corrected.** Most fixes made a wrong-answer note say why that choice is wrong, or brought a fact in line with the course notes (examples: duodenum about 25 cm (10 inches); stomach curvatures medial and lateral; mylohyoid as the floor of the mouth; lateral horn T1 to L2; lumbar enlargement about T9 to T12; CN XI nucleus in the upper cervical cord; the cranial epidural space as a potential space; prostate fluid no longer called acidic; the corniculate and cuneiform cartilages elastic too).
- **38 cards removed** as physiology, pregnancy and birth, or content on no competency or list (Appendix C).
- **50 new cards** for competencies that had only 2 to 6 cards: 103, 104 (rhinitis, sinusitis, laryngitis, chronic bronchitis, cystic fibrosis, tuberculosis, pleural effusion), 110, 112, 136, 143, 152, 159, 163, 166 and 172. All were independently reviewed; 11 were changed in review.
- Modules 4 and 5 now hold 2,241 cards. The bank holds 5,121.

### Her pages that now disagree with the cards and the course notes
The cards follow the reviewed course notes. These older notes pages still say otherwise, so students may see two versions until they are updated:
- m4-lymphatic-notes.html: palatine tonsils at the "sides of the back of the oral cavity" (course notes: lateral walls of the oropharynx).
- m4-alimentary-notes.html, alimentary-canal.html, gi-tract-journey.html: duodenum about 12 inches.
- m4-male-repro-notes.html: prostate fluid "slightly acidic"; "two hundred to three hundred" lobules.
- m4-urinary-notes.html: filtration slits hold back "medium-sized proteins".
- m5-brainstem-notes.html: nuclei for "ten of the twelve" cranial nerves; the medulla holding VIII through XII.
- m5-cranial-notes.html: the XI nucleus in the medulla and C1 to C5; the solitary nucleus in the pons.
- m5-cord-notes.html: lumbar enlargement T11 to S2; lateral horn in all thoracic and lumbar segments.
- m5-meninges-notes.html: "No cranial epidural space".
- m5-nervous-tissue-notes.html: about one million enteric neurons (standard texts: about 100 million).
- The brain, brainstem and cranial notes pages use a "Hold onto this" callout heading.

### Open choices
- The 147 course notes still have an ectopic pregnancy paragraph, and the 146 and 148 notes mention implantation. Five cards echo those phrases and were kept so cards and notes agree.
- Accurate cards on structures not on her lists were kept: gluteus minimus, fibularis tertius, the ankle retinacula, Billroth's cords and named thymic corpuscles. Cut them if the deck should match the lists exactly.
- Near-duplicate cards remain in several topics (meninges order, ventricle counts, lung lobes, parathyroid location). All are accurate.

## October 17 update, part 2: levels for every competency

- **Modules 1 to 3 matched too.** All 2,880 Module 1 to 3 cards now carry their competency number and Mastery OS id. 69 cards fit no competency (for example blood typing, muscle properties, the deep back muscles, joint disorders) and stay open to everyone. 536 cards had their level corrected; most were labelled Level 3 but were one-step questions. Six flagged cards were fixed (blood temperature, a rolled ankle that read as eversion, the interosseous membrane as a syndesmosis, the lamellated corpuscle's depth, and the apex of the heart).
- **Level up.** Recall now deals each competency's Level 1 cards first. Level 2 opens once a student has answered at least 4 Level 1 cards there (or all of them, if there are fewer) with about 80 percent right, and Level 3 opens the same way. A switch shows every level. Each card shows its level in words and its competency number.
- **New cards so the levels are complete.** Every competency now has at least 4 Level 1, 3 Level 2 and 3 Level 3 cards where her notes support them. 327 new cards were written across all five modules and independently reviewed (1 cut as a duplicate). Competency 27 (cartilage growth) has 3 Level 1 cards, because her notes give only two facts on it.
- **Precise weak areas.** A card answer now credits the one competency that card teaches instead of every competency in its topic, in both Mastery OS and the evidence store.

## Appendix C. Cards removed on October 17 (38)

| Card | Topic | Reason |
|---|---|---|
| L01825 | m4-lymph-vessels | Flag right; cut. Fat-soluble vitamins are nutrition, not in any competency or the notes. |
| L01912 | m4-lymph-organs | Flag right; cut. Tests the hormone product rather than a structure, and L01923 already covers thymic epithelial cells. |
| L01927 | m4-lymph-organs | Flag right; cut. Thymic selection and apoptosis (about 2 percent survive) is immune physiology found in neither the course notes nor the notes page. |
| L01931 | m4-lymph-organs | Flag right; cut. Dendritic cell function in the thymic cortex is immune physiology found in neither the course notes nor the notes page. |
| L01950 | m4-lymph-organs | Flag right; cut. Plasma and memory B cell formation is physiology, and L01946, L01949, and L01951 already test the anatomy (follicles of B cells in the outer cortex). |
| L01981 | m4-lymph-organs | Flag right; cut. Plasma cells secreting antibodies is immune physiology, and the stem's secondary nodule is not a course-notes term. |
| L01144 | m4-endocrine | Flag right. Tests a thymic hormone action (physiology). A location rewrite would duplicate L01160 and L01192, and the thymus's T cell role is already covered by 14 thymus cards in the lymphatic batch  |
| N-m4-leg-muscles-30 | m4-leg-muscles | Flag right. Foot arches fit no competency and are not on the Module 4 structure list or lab charts; comp null. Facts are accurate if she wants it back as enrichment. |
| N-m4-leg-muscles-31 | m4-leg-muscles | Flag right. Plantar aponeurosis fits no competency and is not on the list or charts; comp null. Accurate if kept as enrichment. |
| N-m4-leg-muscles-32 | m4-leg-muscles | Flag right. Intrinsic foot muscles are not leg muscles (competency 92) and are not on the list or charts; comp null. |
| N-m4-leg-muscles-33 | m4-leg-muscles | Flag right. Extensor digitorum brevis is an intrinsic foot muscle outside competency 92 and off the list and charts; comp null. |
| N-m4-leg-muscles-34 | m4-leg-muscles | Flag right. Flexor digitorum brevis is an intrinsic foot muscle outside competency 92 and off the list and charts; comp null. |
| L02277 | m4-gi-wall | Flag is right; cut. Epithelial turnover every few days is physiology and is not in the course notes or her notes pages. |
| L02281 | m4-accessory-organs | Flag is right; cut. The course notes say only that saliva starts starch breakdown; the enzyme name is physiology, and L02377 and L04373 already test what saliva does. |
| L02291 | m4-accessory-organs | Flag is right; cut. Plasma protein synthesis is liver physiology and is not in the course notes. |
| L02305 | m4-accessory-organs | Flag is right; cut. Emulsification is not in the course notes. |
| L02373 | m4-accessory-organs | Flag is right; cut. Emulsification is not in the notes, and its unchanged note on the third distractor says bile flows one way in the ducts, which contradicts the two-way cystic duct flow in the 123 c |
| L02374 | m4-accessory-organs | Flag is right; cut. Pancreatic bicarbonate neutralizing acid is physiology and not in the course notes. |
| L02376 | m4-accessory-organs | Flag is right; cut. Liver regeneration is physiology and not in the course notes. |
| N-m4-abdominal-vessels-9 | m4-abdominal-vessels | Flag is right; cut. The suprarenal arteries are not on the Module 4 structure list (only the suprarenal glands are) or in the 126 notes; they can stay as distractors elsewhere. |
| N-m4-abdominal-vessels-10 | m4-abdominal-vessels | Flag is right; cut. The lumbar arteries are not on the Module 4 structure list or in the 126 notes; they can stay as distractors elsewhere. |
| L02573 | m5-male-repro | Flag is right. The card tests a physiology mechanism (internal sphincter closing during ejaculation) that the course notes do not cover, and the auditor already removed the same claim from L02517; ure |
| L02628 | m5-female-repro | Cut. Tests ectopic pregnancy and uses placenta previa as a distractor; pregnancy is out of this course on purpose. Flag is right. |
| L02669 | m5-female-repro | Cut. Purpose of the endometrial build-up (implantation) is pregnancy and cycle physiology; a rewrite would only duplicate L02647, L02619, and L04467. Flag is right. |
| L02670 | m5-female-repro | Cut. Gamete numbers and fertilization odds; no competency and out of scope. Flag is right. |
| L02671 | m5-female-repro | Cut. Oocyte nutrient stores for the pre-implantation embryo; embryology, no competency. Flag is right. |
| L02675 | m5-female-repro | Cut. Lifetime gamete supply is gametogenesis physiology with no competency. Flag is right. |
| N-m5-female-repro-202 | m5-female-repro | Cut. Placenta previa and birth; out of scope. Flag is right. |
| N-m5-female-repro-203 | m5-female-repro | Cut. Fetal membranes and labor; out of scope. Flag is right. |
| N-m5-female-repro-204 | m5-female-repro | Cut. Fetal membranes and placenta; out of scope. Flag is right. |
| L04468 | m5-female-repro | Cut. Ectopic pregnancy and tubal rupture; pregnancy is out of scope. Flag is right. |
| L03210 | m5-diencephalon-brainstem | Flag is right. The cough, sneeze, swallow, and vomit reflex centers are not in the course notes for 164 or on her brainstem page, so students have nothing to study it from; cut it (or add the reflex c |
| L02925 | m5-meninges-csf | Flag is right; cut. Encephalitis is not in any competency or in the course notes or her notes pages. |
| L02965 | m5-meninges-csf | Flag is right; cut. It tests skull rigidity and raised intracranial pressure (clinical reasoning, not a Module 5 anatomy competency), and its foramen magnum note hints at herniation, which no notes co |
| L03127 | m5-ans | Cut. The keyed answer (preganglionic axons branching to many chain ganglia) is not in the course notes, and the why leans on adrenal hormone action; it is a physiology mechanism question. |
| L03130 | m5-ans | Cut. Explains why blood flow shifts from gut to muscle in fight or flight; physiology reasoning that is not in the notes. |
| L03131 | m5-ans | Cut. Asks why dilated pupils help in a stress response (light, scanning for danger); physiology reasoning not in the notes. |
| L03133 | m5-ans | Cut. Tests hormone action (adrenal medulla hormones lingering in the blood), which the brief puts out of scope. |

## Reviewer

Rewrite and audit performed by Claude at Dr. Rennie's request, with an independent second-reviewer accuracy pass on every card. No student information is stored in the bank. Each student's progress and display choices stay in their own browser.

## Appendix A. Answer-key and content errors fixed during the rewrite (49)

| Card | Topic | What was wrong |
|---|---|---|
| L00078 | m1-terminology | Old stem asked only for both lungs side by side, which a transverse slice also shows, so the keyed frontal plane was not the only defensible answer; stem now requires the full top-to-diaphragm view. |
| L00292 | m1-epithelial | The keyed order ranked simple squamous and pseudostratified from one layer to many, but both are a single true layer, so no order was defensible; rewritten as a sort by true layers. |
| L00360 | m1-integumentary | Stem was garbled; it called hair, nails, and glands a connective tissue framework. |
| L00374 | m1-integumentary | Stem placed hair follicles in palm skin, but the palm is hairless thick skin; now asks for the layer holding the sweat glands. |
| L00378 | m1-integumentary | Card listed five integumentary glands including mammary; the course notes compare four skin glands (sebaceous, eccrine, apocrine, ceruminous). |
| L00389 | m1-integumentary | Old explanation said there is no hair matrix; the hair matrix is the dividing layer in the hair bulb. |
| L00946 | m3-muscle-organization | Old key said a smooth muscle cell has one flat nucleus; instructor notes and standard texts describe one central nucleus, so the key was corrected. |
| L00963 | m3-muscle-organization | Old key claimed muscle fiber applies only to skeletal and smooth muscle, which conflicts with instructor notes that call cardiac cells branching fibers; rebuilt around cell shape. |
| L00973 | m3-muscle-organization | Old card taught that cardiac cells are not called muscle fibers, which conflicts with instructor notes that describe cardiac cells as branching fibers; rebuilt around cell shape and nuclei. |
| L01046 | m3-muscle-naming-levers | Old key said only the load's distance from the fulcrum decides mechanical advantage; it depends on comparing the effort's and the load's distances from the fulcrum. |
| L01051 | m3-muscle-naming-levers | Old scenario of forearm muscles steadying the elbow fit the synergist role as well as the fixator role; rebuilt around scapular muscles steadying the scapula, the instructor's fixator example. |
| L01106 | m3-muscle-microanatomy | Old key called desmin the elastic filament; the elastic filament is titin. Desmin links neighboring myofibrils at the Z discs. |
| L01134 | m3-muscle-microanatomy | Old key said golf-club subunits form the thin filament of actin; the golf-club shape describes myosin molecules of the thick filament. |
| L01135 | m3-muscle-microanatomy | Old key called desmin the elastic filament; the elastic filament is titin, and desmin links neighboring myofibrils. |
| L01305 | m3-muscle-organization | Old key claimed fusiform muscles balance force and range; the instructor notes group fusiform with parallel muscles as favoring range over power. |
| L01841 | m4-lymph-vessels | old key (thin walls, more valves, like small veins) describes lymphatic collecting vessels, not lymphatic capillaries |
| L01891 | m4-lymph-vessels | old stem placed the block near the cisterna chyli, which would also spare the left upper limb (its trunk joins the duct higher up), giving two defensible answers; block moved to the duct's end |
| L01902 | m4-lymph-vessels | old answer said only two mechanisms move lymph; the notes list four (skeletal muscle pump, respiratory pump, smooth muscle in vessel walls, arterial pulsing) |
| L01939 | m4-lymph-organs | Old card tested an uncertain claim (that thymic corpuscles cause T cell death); rebuilt around a confirmed fact from the notes. |
| L02023 | m4-lymph-organs | Old key said five tonsils in total, but the count varies by source and the instructor's notes add the tubal tonsils; rewritten around a tonsil location from the notes. |
| L02216 | m4-gi-wall | Stem said the serosa is called the adventitia; the adventitia is a fibrous layer that replaces the serosa on the esophagus, not another name for it. |
| L02224 | m4-gi-wall | Called the submucosa dense connective tissue with glands; the instructor's notes describe it as areolar connective tissue with vessels and the submucosal plexus. |
| L02283 | m4-accessory-organs | Old key put the common bile duct in the porta hepatis; the hepatic ducts pass through it, and the common bile duct forms below the liver. Ligament part covered on other cards. |
| L02296 | m4-accessory-organs | Old card counted five accessory organs including the appendix; the notes list six (teeth, tongue, salivary glands, liver, gallbladder, pancreas) and the appendix is part of the large intestine. |
| L02329 | m4-stomach-intestines | Old stem called the appendix an accessory organ; it is part of the large intestine, not one of the six accessory organs. |
| L02633 | m5-female-repro | Old key named the whole uterine tube as the next structure instead of the isthmus. |
| L02684 | m5-nervous-tissue | Interneuron distractor was also defensibly correct, since interneurons have many dendrites and one axon. |
| L02742 | m5-nervous-tissue | The distractor "a chemical synapse" was also defensibly correct for an axon ending on a cell body; replaced it. |
| L02787 | m5-spinal-cord | The distractor "somatic reflex" was also true for catching an object, since the effector is skeletal muscle; replaced it. |
| L02802 | m5-spinal-cord | The original size ordering of a neuronal pool versus a spinal pathway was not well defined; rebuilt around axon, tract, and white column. |
| L02867 | m5-cerebrum | Old stem said every lobe is named for a skull bone, but the insula is not; reworded to the four surface lobes. |
| L02889 | m5-cerebrum | Old key listed a gyrus as separate from and outside the cortex, and ranked the corpus callosum above the basal nuclei, which is not a clear depth order; rebuilt as cortex, white matter, basal nuclei. |
| L02931 | m5-meninges-csf | Old stem ordered the spaces from the skull, but the instructor's notes state there is no epidural space in the cranium; moved the question to the vertebral canal. |
| L02984 | m5-spinal-nerves | Old key gave C1 to C5; the course notes give the cervical plexus as C1 to C4, with only a small contribution from C5. |
| L03005 | m5-spinal-nerves | Old stem defined the cervical plexus as C1 to C5; the course notes give C1 to C4. Rewritten as a phrenic nerve scenario. |
| L03287 | m5-cranial-nerves | Old key said the olfactory and optic nerves both share the CNS's poor regeneration; olfactory receptor neurons are replaced throughout life, so the claim was inaccurate. Rewritten around the optic pathway from the notes. |
| L03426 | m3-heart-structure | Original key was a vague purpose claim (heart sits between lungs to pump efficiently); rewritten to test the heart's actual location. |
| L03473 | m3-heart-valves-flow | Original was a trick question whose key was that no valve fits; rewritten to ask which valve leads into the systemic arteries. |
| L03532 | m3-coronary-great-vessels | Old key answered with the anatomical name instead of what LAD stands for; rewritten to ask for the LAD's anatomical name. |
| L03741 | m3-vessel-routes | Original stem implied fetal-direction flow (pulmonary trunk to aorta) persists after birth; reworded to the open connection itself. |
| L03842 | m4-lower-respiratory | Stem called bronchiole narrowing a respiratory zone problem; bronchioles are conducting zone, so the stem was reworded. |
| L04084 | m3-vessel-wall | Original was a placeholder prompt with no specific structure and a non-answer key; rebuilt around venous valves. |
| L04085 | m3-heart-valves-flow | Original was a placeholder prompt with no specific structure and a non-answer key; rebuilt around semilunar valves lacking chordae. |
| L04086 | m4-lower-respiratory | Original was a placeholder prompt with no specific structure and a non-answer key; rebuilt around the respiratory membrane. |
| L04087 | m3-vessel-wall | Original was a placeholder prompt with no specific structure and a non-answer key; rebuilt as a capillary versus artery wall comparison. |
| L04088 | m3-heart-valves-flow | Original was a placeholder prompt with no specific structure and a non-answer key; rebuilt as a papillary muscle damage scenario. |
| L04089 | m4-lower-respiratory | Original was a placeholder prompt with no specific structure and a non-answer key; rebuilt as the airway pathway from trachea to alveoli. |
| L04288 | m4-lymph-vessels | Old answer said the right lymphatic duct drains the upper right quadrant; it drains the right arm and the right side of the head, neck, and thorax. |
| L04306 | m3-arm-muscles | Called biceps brachii the prime elbow flexor; the instructor's notes name brachialis as the prime mover of elbow flexion, so the stem now uses elbow flexion plus supination. |

## Appendix B. Findings from the independent accuracy check (78)

| Card | Action | Problem |
|---|---|---|
| L00035 | corrected | Cephalic (head) is a defensible answer for a finding on the back of the head; the card's own note admits it is not wrong. Replaced that distractor with Otic. |
| L00038 | corrected | Vertebral (spinal column) is defensible for a structure over the sacrum, since the sacrum is part of the vertebral column; the note only calls it broader. Replaced that distractor with Coxal. |
| L00151 | corrected | Note for the parietal/visceral option falsely says an organ is never covered by parietal peritoneum; retroperitoneal organs such as the kidneys are covered on their front by parietal peritoneum. |
| L00293 | corrected | Note for the last wrong option says it simply swaps the synovial membrane and the skin, but the option rotates all three compositions (skin gets the serous description, serous gets the synovial one). |
| L00478 | corrected | Note for the crosswise option makes an unsupported claim that crosswise osteons would resist twisting better than lengthwise loading. |
| L00532 | corrected | Note says wings belong only to the sphenoid, which is false (the ilium and sacrum each have an ala, and the ilium ala is on the lab list); only greater wings are unique to the sphenoid. |
| L00565 | corrected | Why text says the parietal bone sits near the orbit, which is false and contradicts the card's own note placing it well behind and above the orbit. |
| L00637 | corrected | Note implies the sternum and sacrum are the only two fused bones of the axial skeleton, which is false (the coccyx is fused too). |
| L00834 | corrected | Why text says the ankle's hinge design protects it from sprains, which is misleading because the ankle is one of the most commonly sprained joints. |
| L00862 | corrected | Note says only immovable joints have no axis of movement, which is false (slightly movable cartilaginous joints such as the pubic symphysis have no axis either). |
| L01509 | corrected | Why text says the left atrium is the only chamber receiving four separate veins; the right atrium also receives the two venae cavae, the coronary sinus, and the anterior cardiac veins (listed in her notes), so the claim is false. |
| L03395 | corrected | Note on the right atrium says it receives blood from exactly three vessels, but her notes also have the anterior cardiac veins draining straight into the right atrium. |
| L03419 | corrected | Note says the right atrium receives blood directly from exactly three vessels, which leaves out the anterior cardiac veins that her notes say drain directly into the right atrium. |
| L04203 | corrected | Why text says the right atrium receives blood from exactly three sources, which contradicts this card's own note (and her notes) that the anterior cardiac veins empty straight into the right atrium. |
| L01033 | corrected | Stem calls the brachialis a helper of the biceps prime mover; her arm notes name the brachialis as the prime mover of elbow flexion, so the example conflicts with her own materials. |
| L01297 | corrected | Stem states the brachialis is not the prime mover of elbow flexion and the agonist note cites the biceps; her arm notes say the brachialis is the prime mover, so the card hinges on the disputed point. |
| L01262 | corrected | Wrong-option note says neighboring sarcomeres pull in the same direction along the chain; each sarcomere pulls its shared Z disc toward its own center, so the statement is false. |
| N-m3-upper-limb-vessels-29 | corrected | Cephalic vein note says it receives blood from the median cubital vein; the median cubital vein normally carries blood from the cephalic toward the basilic vein, so the note is wrong. |
| L01113 | cut | Out of scope: asks which troponin subunit (TnI, TnT, TnC) binds what. Her notes describe troponin only as a three-part regulatory protein and leave the contraction mechanism to physiology. Cut. |
| L01120 | cut | Out of scope: asks which troponin subunit (TnI, TnT, TnC) binds what. Her notes describe troponin only as a three-part regulatory protein and leave the contraction mechanism to physiology. Cut. |
| L01121 | cut | Out of scope: asks which troponin subunit (TnI, TnT, TnC) binds what. Her notes describe troponin only as a three-part regulatory protein and leave the contraction mechanism to physiology. Cut. |
| L01130 | cut | Out of scope: asks which troponin subunit (TnI, TnT, TnC) binds what. Her notes describe troponin only as a three-part regulatory protein and leave the contraction mechanism to physiology. Cut. |
| L01439 | corrected | Why says monocytes leave through capillary walls; her notes name the venules as the site where white blood cells leave the bloodstream. |
| L02054 | corrected | Why says white cells squeeze out through the capillary wall; her notes name the venules (postcapillary venules) as the exit site. |
| L01362 | corrected | Keyed answer teaches methemoglobin and Fe3+ iron chemistry, which is beyond intro anatomy and not in her notes; swapped in carbaminohemoglobin (carbon dioxide bound), the OpenStax-level form. |
| L01363 | corrected | Stem and distractors rest on Fe2+ versus Fe3+ iron and methemoglobin, chemistry beyond intro anatomy and not in her notes; rewritten without the iron oxidation states. |
| L01454 | corrected | Stem uses platelet alpha and dense granules as a clue, a detail beyond intro anatomy and not in her notes; clue removed. |
| L01442 | corrected | Why adds major basic protein in eosinophil granules, a granule-chemistry detail beyond intro anatomy and not in her notes; sentence removed. |
| L01352 | cut | Out of scope for intro anatomy and not in her notes: tests the levels of protein structure (quaternary structure), a biochemistry point rather than blood anatomy. |
| L01356 | cut | Out of scope for intro anatomy and not in her notes: tests the Fe2+ versus Fe3+ oxidation state of heme iron. |
| L01361 | cut | Out of scope for intro anatomy and not in her notes: tests methemoglobin and Fe3+ iron chemistry. |
| L01426 | cut | Out of scope for intro anatomy and not in her notes: tests the named protein in eosinophil granules (major basic protein). |
| L01435 | cut | Out of scope for intro anatomy and not in her notes: tests perforin and granzymes, immune killing chemistry rather than blood cell structure. |
| L01448 | cut | Out of scope for intro anatomy and not in her notes: tests platelet granule subtypes (alpha and dense granules). |
| L01449 | cut | Out of scope for intro anatomy and not in her notes: tests platelet alpha granule contents (von Willebrand factor, platelet-derived growth factor). |
| L01450 | cut | Out of scope for intro anatomy and not in her notes: tests platelet dense granule contents (ADP, ATP, serotonin, calcium). |
| L01467 | cut | Out of scope for intro anatomy and not in her notes: tests the terminal sugar of the A antigen (N-acetylgalactosamine) and the H antigen. |
| L01468 | cut | Out of scope for intro anatomy and not in her notes: tests the terminal sugar of the B antigen (galactose) and the H antigen. |
| L01486 | cut | Out of scope for intro anatomy and not in her notes: tests the valine for glutamic acid swap in beta-globin; her notes describe sickle cell only as an inherited abnormal hemoglobin. |
| L01478 | cut | Out of scope for intro anatomy and not in her notes: names the microcytic, normocytic, macrocytic size classes of anemia. Her notes define anemia only as too few erythrocytes or too little hemoglobin; the size classification is clinical hematology. Accurate, so cut only if she agrees. |
| L01479 | cut | Out of scope for intro anatomy and not in her notes: defines microcytic anemia. Her notes define anemia only as too few erythrocytes or too little hemoglobin; the size classification is clinical hematology. Accurate, so cut only if she agrees. |
| L01480 | cut | Out of scope for intro anatomy and not in her notes: defines macrocytic anemia. Her notes define anemia only as too few erythrocytes or too little hemoglobin; the size classification is clinical hematology. Accurate, so cut only if she agrees. |
| L01481 | cut | Out of scope for intro anatomy and not in her notes: links microcytic anemia to iron deficiency and thalassemia. Her notes define anemia only as too few erythrocytes or too little hemoglobin; the size classification is clinical hematology. Accurate, so cut only if she agrees. |
| L01482 | cut | Out of scope for intro anatomy and not in her notes: links macrocytic anemia to B12 and folate deficiency. Her notes define anemia only as too few erythrocytes or too little hemoglobin; the size classification is clinical hematology. Accurate, so cut only if she agrees. |
| L01483 | cut | Out of scope for intro anatomy and not in her notes: links normocytic anemia to blood loss and chronic disease. Her notes define anemia only as too few erythrocytes or too little hemoglobin; the size classification is clinical hematology. Accurate, so cut only if she agrees. |
| L01494 | cut | Out of scope for intro anatomy and not in her notes: asks for the anemia size class and cause in a B12-deficient vegan. Her notes define anemia only as too few erythrocytes or too little hemoglobin; the size classification is clinical hematology. Accurate, so cut only if she agrees. |
| L01489 | cut | Out of scope for intro anatomy and not in her notes: defines the thalassemias. Thalassemia is not among the seven blood disorders in her notes. Accurate, so cut only if she agrees. |
| L01490 | cut | Out of scope for intro anatomy and not in her notes: tests alpha-thalassemia. Thalassemia is not among the seven blood disorders in her notes. Accurate, so cut only if she agrees. |
| L01491 | cut | Out of scope for intro anatomy and not in her notes: tests beta-thalassemia. Thalassemia is not among the seven blood disorders in her notes. Accurate, so cut only if she agrees. |
| L01493 | cut | Out of scope for intro anatomy and not in her notes: asks the student to diagnose alpha-thalassemia. Thalassemia is not among the seven blood disorders in her notes. Accurate, so cut only if she agrees. |
| L01142 | cut | Out of scope: quizzes hormone identity or action, which her endocrine notes explicitly exclude ('Hormone action belongs to physiology and is not covered here'; the notes name no hormones). Facts are accurate; cut, or keep only if she wants hormones taught. Asks which islet cell secretes insulin; alpha, beta, and delta cells are not in her notes. The islets vs acini point is already covered by L01149, L01172, L01207. |
| L01143 | cut | Out of scope: quizzes hormone identity or action, which her endocrine notes explicitly exclude ('Hormone action belongs to physiology and is not covered here'; the notes name no hormones). Facts are accurate; cut, or keep only if she wants hormones taught. Asks which hormone the pineal gland secretes (melatonin). Pineal location is already covered by L01161 and L01209. |
| L01145 | cut | Out of scope: quizzes hormone identity or action, which her endocrine notes explicitly exclude ('Hormone action belongs to physiology and is not covered here'; the notes name no hormones). Facts are accurate; cut, or keep only if she wants hormones taught. Asks where ADH and oxytocin are made. The posterior lobe as an extension of the hypothalamus is already covered by L01167, L01184, L01215. |
| L01146 | cut | Out of scope: quizzes hormone identity or action, which her endocrine notes explicitly exclude ('Hormone action belongs to physiology and is not covered here'; the notes name no hormones). Facts are accurate; cut, or keep only if she wants hormones taught. Pairs glands with hormones (testosterone, estrogen, progesterone, thymosin, melatonin). Gonads as mixed organs is already covered by L01174 and L02672. |
| L01148 | cut | Out of scope: quizzes hormone identity or action, which her endocrine notes explicitly exclude ('Hormone action belongs to physiology and is not covered here'; the notes name no hormones). Facts are accurate; cut, or keep only if she wants hormones taught. Asks what chromaffin cells secrete (epinephrine, norepinephrine, cortisol, aldosterone). The medulla as sympathetic tissue is already covered by L01170, L01183, L01214. |
| L01151 | cut | Out of scope: quizzes hormone identity or action, which her endocrine notes explicitly exclude ('Hormone action belongs to physiology and is not covered here'; the notes name no hormones). Facts are accurate; cut, or keep only if she wants hormones taught. Asks students to sort a list of anterior vs posterior pituitary hormones (GH, TSH, prolactin, ADH, oxytocin). Lobe tissue and links are already covered by L01137, L01180, L04486. |
| L01226 | cut | Out of scope: quizzes hormone identity or action, which her endocrine notes explicitly exclude ('Hormone action belongs to physiology and is not covered here'; the notes name no hormones). Facts are accurate; cut, or keep only if she wants hormones taught. Tests hormone action (TSH acts on the thyroid, ADH acts on the kidney, master gland). No structural point that other cards lack. |
| L01913 | cut | Out of scope: the 2 percent thymic survival figure is immunology detail that is not in her notes and is not anatomy. Thymic cortex and medulla structure are covered by many other cards; cut. |
| L02072 | corrected | Why text says the pharyngeal tonsil is called the adenoid only 'when it is enlarged', which contradicts her notes ('Pharyngeal tonsil (adenoid)') and the card's own keyed answer, and conflicts with L01988. |
| L03806 | corrected | Note for goblet cells says mucus traps particles 'chemically rather than physically'; that is false, since mucus traps particles physically by being sticky. |
| L03840 | corrected | Distractor 'The carina sits to the left of the midline' is called 'a made-up reason', but standard references (Gray's) place the carina slightly left of midline and some texts cite this as a contributing reason objects go right; the note is false and the option is arguably partly defensible. Replaced the distractor. |
| L02300 | corrected | Note for 'Anterior to the stomach' says only the abdominal wall and greater omentum lie there; the left lobe of the liver covers part of the anterior stomach, and the greater omentum hangs from the greater curvature rather than lying in front of the stomach. |
| L02358 | corrected | Wrong-option note says bile could not leave the liver by any route if the common bile duct were blocked; with the common bile duct blocked, bile can still leave the liver up the cystic duct into the gallbladder. |
| L04418 | corrected | Why text says a stone at the ampulla causes cholecystitis; cholecystitis comes from a stone blocking the cystic duct (as the card's own cystic duct note says). Her notes tie an ampulla stone to blocked bile plus pancreatitis. |
| N-m4-leg-muscles-20 | corrected | Stem asks which muscles make up the deep posterior compartment and the why says the deep layer holds only three muscles; standard texts (OpenStax) also place the popliteus there, so the keyed list is incomplete. Reworded to ask about the three whose tendons pass behind the medial malleolus. |
| N-m4-lower-limb-nav-16 | corrected | Stem and why lean on a nerve-specific motor deficit (cannot lift the foot, foot drop), which teaches which nerve supplies the dorsiflexors; her notes stop at plexus-level deficits and students identify nerves by location. Rewritten to rest on location only. |
| L02392 | corrected | Note for 'Prostatic, spongy, membranous' says the order skips the membranous region, but that option includes it (it only moves it to the end). |
| L02468 | corrected | Note for the kidney option says the right kidney sits lower 'in everyone'; it is lower in most people, not all (other cards correctly say 'usually'). |
| L02608 | corrected | Why text says the zygote travels down the tube and implants; per her pregnancy notes the zygote divides on the way and it is the blastocyst that implants. |
| L02867 | corrected | Wrong-option note says cranial nerves are named by where they emerge from the brain; they are numbered by order of emergence and named for function or path (vagus, trochlear, optic). |
| N-m5-meninges-csf-4 | corrected | Why says an epidural drug never enters the CSF; epidural anesthetic does diffuse across the dura. Only the needle stays out of the subarachnoid space. |
| L03170 | corrected | Why claims lateralization lets the arcuate fasciculus link the areas with short, direct connections; this is an unsupported causal claim and the arcuate fasciculus is a long association bundle. |
| L04525 | corrected | Wrong-option note says the middle cerebral artery does not form other named arteries; it has named branches (for example the lenticulostriate arteries). |
| L03144 | corrected | Distractor note flatly says the thalamus is not a limbic structure; many textbooks count the anterior thalamic nuclei in the limbic system and thalamic damage can impair new memory, so the distractor is disputable. Swapped for a clearly non-limbic distractor. |
| L02741 | corrected | Stem and why give the ENS as about one million neurons. This matches her nervous tissue notes, but standard texts give roughly 100 million or more, so the card drops the number. Her notes may need the same correction. |
| L02689 | corrected | Wrong-option note gives the ENS as about one million neurons (from her notes); standard texts give roughly 100 million or more, so the number is dropped. |
| L03054 | corrected | Note for the lower lumbar and coccygeal option says both sit in the gap between L2 and S2; the coccygeal segment lies below S4, not in that gap. |
| L03258 | corrected | Notes for the glossopharyngeal and vestibulocochlear options are swapped: the glossopharyngeal option shows 'Correct. CN VIII...' and the keyed vestibulocochlear option shows the glossopharyngeal explanation. |

## October 17 update, part 3 (Recall Lab Part II)

### Her pages brought in line with the reviewed course notes
- Palatine tonsils: lateral walls of the oropharynx (m4-lymphatic-notes).
- Duodenum: about 25 cm (10 inches) (m4-alimentary-notes, alimentary-canal, gi-tract-journey).
- Prostate: "milky fluid that helps the sperm stay active", with no pH named, matching the course notes (m4-male-repro-notes, reproductive-male, reproductive-male-workbook, reproductive-anatomy-study-guide, male-reproductive-system, the Module 5 exam rationale and the practice exam bank). Testis lobules now "a few hundred", as in the course notes.
- Filtration slits: hold back most of the smaller proteins that get past the basement membrane (m4-urinary-notes, urinary-system, m4-urinary-worksheet, Module 5 exam rationale, practice exam bank).
- Brainstem: nuclei of III through X and XII; the XI nucleus sits in the upper cervical cord (m5-brainstem-notes, cns-brainstem, the Module 5 note sheet key).
- Cranial nerves: the solitary nucleus is in the medulla; the spinal accessory nucleus is in the upper cervical cord, about C1 to C5 (m5-cranial-notes, cranial-nerves).
- Spinal cord: lumbar enlargement behind about T9 to T12; lateral horn T1 to L2 (m5-cord-notes, cns-spinal-cord, spinal-cord-study-guide).
- Meninges: the cranial epidural space is a potential space (m5-meninges-notes, cns-meninges-csf).
- Enteric nervous system: roughly 100 million neurons (m5-nervous-tissue-notes, nervous-tissue).
- "Hold onto this" callouts now read "Key point" on every BIO 004 notes page and in the Module 1 to 3 packets.

### Open flags settled
- Brachioradialis now sits in the posterior forearm block of the Module 3 list (and in the Module 3 lab packet and Module 3 packet), with a note that it flexes the elbow. That matches the arm notes, the antebrachium sprint and the muscle chart.
- Main elbow flexor: the fascicles notes and the Module 3 packet now use the brachialis as the agonist example and the biceps as the synergist, matching the arm notes.
- Extraocular muscles (competency 96) stay as a Module 3 Lecture and Lab competency. Dr. Rennie's rule: lab tag decisions apply to lab materials only. The eye muscles are identified in lab on the Module 5 list.
- Deep back muscles and joint disorders stay in the lecture notes and on cards with no competency (they are lecture content).

### Card bank
- Competency 152 (neural tube brain development) now has a Mastery OS id, w7-brain-development, added to competenciesfall2026.js. Loops already credited that id, which had never been defined, so Loops results for brain development now reach the weak areas dashboard too. Its 10 cards carry the id.
- 69 cards still have no competency (blood typing, muscle properties, deep back muscles, joint disorders and a few others). They stay open in Level up.
- Competency 27 still has 3 Level 1 cards, because her notes give only two facts on it.

### Not changed
- male-reproductive-system.pdf (a May case deep dive) still says "slightly acidic". Rebuilding it from the page changes its layout, so it was left alone.
- The old deck files (course-content.js, bio004-w7-cards.js and others) and w7-preview.html still carry the older wording. Recall no longer reads them.
