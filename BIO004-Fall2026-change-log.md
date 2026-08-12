# BIO 004 Fall 2026, change log for the digital course

Everything that changed while building the Fall 2026 syllabus set, written so
`drsrennie-stack/new-build-bio4-solano` and the Mastery OS can be brought into
line with the printed documents.

**Part 1** is the competency data, which drives the Mastery OS.
**Part 2** is the syllabus content, which drives `syllabus-class1/2/3.html`.

---

# Part 1. Competency data

Source of truth in the repo: `competenciesfall2026.js`.

## 1.1 Summary

| | Before | After |
|---|---|---|
| Total competencies | 196 | **193** |
| Tagged lecture | 145 | **180** |
| Tagged lab | 145 | **153** |
| Tagged both | 94 | **140** |

| Module | Total | Lecture | Lab |
|---|---|---|---|
| 1. Foundations to Integumentary | 25 | 25 | 15 |
| 2. Skeletal System and Joints | 30 | 30 | 28 |
| 3. Cardiovascular, Muscle and Blood | 41 | 31 | 32 |
| 4. Respiratory, Lymphatic, Digestive and Endocrine | 36 | 34 | 28 |
| 5. Urinary, Reproductive and the Nervous System | 61 | 60 | 50 |

## 1.2 Three competencies removed

Pregnancy and birth is not taught or assessed in BIO 004. Delete these three,
and the `Pregnancy and Birth` system tag with them.

| Competency id | Competency |
|---|---|
| `w6-fertilization-implant` | Fertilization and implantation |
| `w6-placenta-membranes` | Placenta and fetal membranes |
| `w6-gravid-labor` | Gravid uterus and stages of labor |

**Knock-on:** any card, Loop, quiz item or weakness-dashboard entry mapped to
these three ids needs remapping or removing. Check `card-competency-map.js`
first.

## 1.3 Two competencies moved to Module 1

Muscle tissue identification and nervous tissue identification are taught in the
Module 1 tissues block, in the Week 3 lab, and assessed on Exam 1. The source
data files each competency by the week its system is revisited, which had pushed
them out to Modules 3 and 5.

| Competency id | Was | Now |
|---|---|---|
| `w1-muscle-tissue-id` | Module 3 | **Module 1**, Tissues and Histology |
| `w1-nervous-tissue-id` | Module 5 | **Module 1**, Tissues and Histology |

This brings Module 1 to 25 competencies, which is exactly what
`bio004-exam-modules.html` already claims for Module 1. The two files now agree.

**Fix at source:** the `week` field on these two entries reads 8 and 16. If the
Mastery OS derives module from week, change them to 3, or add an explicit
`module` field.

## 1.4 How lecture and lab are now decided

The printed documents do not read `facets` directly. They derive two flags:

- **Lecture**: examinable on the written lecture exam for that module.
- **Lab**: the student has to produce it in the practical, on a slide, a model,
  a chart, or prosected material.

Baseline from `facets`: lab if the entry carries `cadaver`, `histology`, `label`
or `imaging`; lecture if it carries `lecture`, `draw` or `clinical`, or has no
lab facet. The rules below sit on top of that baseline, and are where all
61 tag changes come from.

**Recommendation.** Rather than re-deriving from facets in the Mastery OS, add
two explicit booleans, `lecture` and `lab`, to each entry. Facets stay useful
for filtering by evidence type. The booleans become the single answer to "is
this on the lecture exam or the practical," and will then agree with the
syllabus by construction rather than by coincidence.

### The rules, in application order

1. **Whole topic, both modes.** Every competency in *Alimentary Canal*,
   *Accessory Organs*, *Urinary*, *Male Reproductive* and *Female Reproductive*
   is lecture **and** lab, **except** the clinical-disorder competencies, which
   are lecture only. Four hit that exception: canal disorders, accessory-organ
   disorders, urinary disorders, male disorders.
2. **Whole module, lecture.** Every Module 2 competency is lectured. All
   skeletal content is taught in lecture as well as identified in lab.
3. **Whole topic, lecture.** Every *Endocrine* competency is lectured.
4. **Named additions**, in 1.5 below.
5. **Lab only.** Three upper-extremity items lose their lecture tag.
6. **Cell anatomy is lecture only, always.** Applied last so nothing overrides
   it. Solano's lab does not do cell anatomy, so these four carry no lab tag
   despite carrying the `histology` facet.

## 1.5 Named additions

**Added lecture:** `w1-epithelial-id`, `w1-connective-id`,
`w1-muscle-tissue-id`, `w1-nervous-tissue-id`, `w2-skull-markings`,
`w2-skull-cavities`, `w2-regional-vertebrae`, `w2-pectoral-girdle`,
`w2-pelvic-girdle`, `w2-leg-bones`, `w2-foot-bones`, `w7-lab-neck`,
`w7-lab-extraocular`, `w5-peritoneum-folds`, `w6-kidney-internal`,
`w7-cerebrum-surface`, `w7-basal-ganglia`, `w7-diencephalon`, `w7-cerebellum`,
`w7-brainstem-regions`, `w7-midbrain`, `w7-pons`, `w7-cranial-meninges`,
`w7-spinal-meninges-spaces`, `w7-ventricles`

**Added lab:** `w2-joint-classification`, `w2-fibrous-cartilaginous`,
`w2-joint-movements`, `cv-blood-pathway`, `cv-conduction-anat`,
`bvn-fetal-remnants`, `w4-ct-coverings`, `resp-zones`, `w7-csf-circulation`,
`w8-cord-internal`, `w8-nerve-plexuses`

**Lecture removed, lab only:** `w4-lab-chest-anterior-arm`,
`w4-lab-posterior-shoulder-cuff`, `w4-lab-ue-nerves`

## 1.6 Every tag change, 61 of them

| Mod | Competency id | Topic | Competency | Was | Now |
|---|---|---|---|---|---|
| 1 | `w1-generalized-cell` | Cell Anatomy | Generalized cell regions | lecture+lab | **lecture** |
| 1 | `w1-nucleus` | Cell Anatomy | Nucleus structure | lecture+lab | **lecture** |
| 1 | `w1-organelles` | Cell Anatomy | Organelle identification | lecture+lab | **lecture** |
| 1 | `w1-plasma-membrane` | Cell Anatomy | Plasma membrane structure | lecture+lab | **lecture** |
| 1 | `w1-connective-id` | Tissues and Histology | Connective tissue identification | +lab | **lecture+lab** |
| 1 | `w1-epithelial-id` | Tissues and Histology | Epithelial tissue identification | +lab | **lecture+lab** |
| 1 | `w1-muscle-tissue-id` | Tissues and Histology | Muscle tissue identification | +lab | **lecture+lab** |
| 1 | `w1-nervous-tissue-id` | Tissues and Histology | Nervous tissue identification | +lab | **lecture+lab** |
| 2 | `w2-foot-bones` | Appendicular, Lower Extremity | Bones and arches of the foot | +lab | **lecture+lab** |
| 2 | `w2-pelvic-girdle` | Appendicular, Lower Extremity | Hip bone and pelvis | +lab | **lecture+lab** |
| 2 | `w2-leg-bones` | Appendicular, Lower Extremity | Tibia and fibula markings | +lab | **lecture+lab** |
| 2 | `w2-pectoral-girdle` | Appendicular, Upper Extremity | Pectoral girdle and its markings | +lab | **lecture+lab** |
| 2 | `w2-fibrous-cartilaginous` | Articulations and Joints | Fibrous and cartilaginous joints | lecture | **lecture+lab** |
| 2 | `w2-joint-movements` | Articulations and Joints | Movements at synovial joints | lecture | **lecture+lab** |
| 2 | `w2-joint-classification` | Articulations and Joints | Structural and functional joint classification | lecture | **lecture+lab** |
| 2 | `w2-skull-cavities` | Axial Skeleton, Skull | Orbit, nasal cavity, palate, and sinuses | +lab | **lecture+lab** |
| 2 | `w2-skull-markings` | Axial Skeleton, Skull | Significant skull bone markings | +lab | **lecture+lab** |
| 2 | `w2-regional-vertebrae` | Axial Skeleton, Spine | Regional and specialized vertebrae | +lab | **lecture+lab** |
| 3 | `cv-conduction-anat` | Cardiovascular | Conduction system components and pathway | lecture | **lecture+lab** |
| 3 | `bvn-fetal-remnants` | Cardiovascular | Fetal circulation, shunts, and adult remnants | lecture | **lecture+lab** |
| 3 | `cv-blood-pathway` | Cardiovascular | Pathway of blood through the heart | lecture | **lecture+lab** |
| 3 | `w7-lab-extraocular` | Head and Neck Lab Muscles | Extraocular muscles | +lab | **lecture+lab** |
| 3 | `w7-lab-neck` | Head and Neck Lab Muscles | Muscles of the neck | +lab | **lecture+lab** |
| 3 | `w4-lab-chest-anterior-arm` | Lab: Upper Extremity Muscles | Chest and anterior arm muscles | lecture+lab | **+lab** |
| 3 | `w4-lab-posterior-shoulder-cuff` | Lab: Upper Extremity Muscles | Posterior shoulder and rotator cuff | lecture+lab | **+lab** |
| 3 | `w4-lab-ue-nerves` | Lab: Upper Extremity Nerves | Upper-extremity nerves | lecture+lab | **+lab** |
| 3 | `w4-ct-coverings` | Muscle Structure | Connective tissue coverings | lecture | **lecture+lab** |
| 4 | `w5-liver-gross-lobule` | Accessory Organs | Liver gross and lobule anatomy | +lab | **lecture+lab** |
| 4 | `w5-pancreas` | Accessory Organs | Pancreas structure | +lab | **lecture+lab** |
| 4 | `w5-teeth-tongue` | Accessory Organs | Teeth and tongue | +lab | **lecture+lab** |
| 4 | `w5-large-intestine` | Alimentary Canal | Large intestine features | +lab | **lecture+lab** |
| 4 | `w5-mouth-pharynx-esophagus` | Alimentary Canal | Mouth, pharynx, esophagus | +lab | **lecture+lab** |
| 4 | `w5-peritoneum-folds` | Alimentary Canal | Peritoneum and folds | +lab | **lecture+lab** |
| 4 | `w5-small-intestine` | Alimentary Canal | Small intestine and surface area | +lab | **lecture+lab** |
| 4 | `w5-stomach` | Alimentary Canal | Stomach regions and features | +lab | **lecture+lab** |
| 4 | `w5-food-pathway` | Alimentary Canal | Trace the pathway of food | lecture | **lecture+lab** |
| 4 | `w6-adrenal` | Endocrine | Adrenal gland zones | +lab | **lecture+lab** |
| 4 | `w6-thyroid-parathyroid` | Endocrine | Thyroid and parathyroid anatomy | +lab | **lecture+lab** |
| 4 | `resp-zones` | Respiratory | Upper and lower tracts, conducting and respiratory zones | lecture | **lecture+lab** |
| 5 | `w7-basal-ganglia` | Brain | Basal ganglia | +lab | **lecture+lab** |
| 5 | `w7-cerebellum` | Brain | Cerebellum | +lab | **lecture+lab** |
| 5 | `w7-cerebrum-surface` | Brain | Cerebral surface and lobes | +lab | **lecture+lab** |
| 5 | `w7-diencephalon` | Brain | Diencephalon | +lab | **lecture+lab** |
| 5 | `w7-brainstem-regions` | Brainstem | Brainstem regions | +lab | **lecture+lab** |
| 5 | `w7-midbrain` | Brainstem | Midbrain structures | +lab | **lecture+lab** |
| 5 | `w7-pons` | Brainstem | Pons structures | +lab | **lecture+lab** |
| 5 | `w6-mammary` | Female Reproductive | Mammary gland structure | +lab | **lecture+lab** |
| 5 | `w6-ovary` | Female Reproductive | Ovary structure and follicle stages | +lab | **lecture+lab** |
| 5 | `w6-uterus` | Female Reproductive | Uterus regions, ligaments, and wall | +lab | **lecture+lab** |
| 5 | `w6-vagina-vulva` | Female Reproductive | Vagina and external genitalia | +lab | **lecture+lab** |
| 5 | `w6-male-glands-penis` | Male Reproductive | Accessory glands and penis | +lab | **lecture+lab** |
| 5 | `w6-scrotum-testes` | Male Reproductive | Scrotum and testis structure | +lab | **lecture+lab** |
| 5 | `w6-sperm-cell` | Male Reproductive | Sperm cell structure | +lab | **lecture+lab** |
| 5 | `w7-csf-circulation` | Meninges and CSF | CSF production and circulation | lecture | **lecture+lab** |
| 5 | `w7-cranial-meninges` | Meninges and CSF | Cranial meninges and dural reflections | +lab | **lecture+lab** |
| 5 | `w7-spinal-meninges-spaces` | Meninges and CSF | Spinal meninges and meningeal spaces | +lab | **lecture+lab** |
| 5 | `w7-ventricles` | Meninges and CSF | Ventricular system | +lab | **lecture+lab** |
| 5 | `w8-nerve-plexuses` | The Nerve Plexuses | Nerve plexuses | lecture | **lecture+lab** |
| 5 | `w6-nephron-types` | Urinary | Cortical vs juxtamedullary nephrons | lecture | **lecture+lab** |
| 5 | `w6-kidney-internal` | Urinary | Internal kidney regions | +lab | **lecture+lab** |
| 5 | `w6-kidney-bloodsupply` | Urinary | Kidney blood supply pathway | lecture | **lecture+lab** |

## 1.7 The thirteen that are lab only

No lecture tag, on purpose. All find-it-on-the-body competencies.

`w4-lab-chest-anterior-arm`, `w4-lab-forearm-compartments`,
`w4-lab-posterior-shoulder-cuff`, `w4-lab-ue-vessels`, `w4-lab-ue-nerves`,
`w5-lab-abdominal-wall`, `w5-lab-gluteal-thigh`, `w5-lab-leg`,
`w7-lab-facial-expression`, `w7-lab-mastication`, `w5-lab-abdominal-aorta`,
`w5-lab-lower-limb-vessels`, `w8-cord-internal`

## 1.8 One boundary still to settle

`bio004-exam-modules.html` puts the two *Lab: BV/N 3* competencies, abdominal
aorta and portal system, and lower limb vessels and nerves, in Module 3. The
printed documents put them in Module 4, because the week they are taught falls
in Module 4. That is the only remaining disagreement between the two files:
Module 3 reads 41 here and 43 there, Module 4 reads 36 here and 34 there.
Decide which is right and make both match.

## 1.9 What to update in the digital course

- **`competenciesfall2026.js`.** Add the two booleans. Remove the three
  pregnancy entries. Fix the `week` field on the two tissue-ID entries.
- **Mastery OS.** Competency filters, the weakness dashboard and exam-prep views
  should filter by lecture and by lab separately, because revising for a
  practical is different work from revising for the written exam. Any progress
  count changes from 196 to 193.
- **`card-competency-map.js`.** Remap or drop anything pointing at the three
  removed ids.
- **`bio004-exam-modules.html`.** Per-module counts move from 25 / 30 / 43 / 34
  / 64 to **25 / 30 / 41 / 36 / 61**. Module 1 already agreed.
- **Module packets.** Module 1 chapter competency lines: 23 becomes **25**.
  Module 5 drops from 65 to **61**.

---

# Part 2. Syllabus content

For `syllabus-class1.html`, `syllabus-class2.html`, `syllabus-class3.html`, and
any page repeating the same policy.

## 2.1 Removed

- **InteDashboard.** The requirement, the proctoring download and the 14-day
  trial language all come out of required materials. There is no required
  publisher platform, no access code and no proctoring software. The materials
  section now says so, and says the only cost is the lab coat and gloves.
- **The Exam 5 explanation.** The paragraph justifying why renal and
  reproductive sit on Exam 5 rather than Exam 4 is deleted. The module map
  states the scope; no justification is offered.
- **The Exam 4 date explanation.** "Note the day, this one is a Monday" is
  deleted from the schedule table, the key-dates table and the module map.
- **The stale-printout caveat.** "Check with your team before you trust an old
  printout" is gone, replaced with one line: if a date has to move I will
  announce it in class and in Canvas.

## 2.2 Added

### The cadaver requirement, load-bearing

Direct work with human donors is a required, graded part of the course
**including the examinations**. Half of every lab practical is set on the donors
themselves, not on photographs or models. No alternative assignment, substitute
examination or model-only option exists, because it is a program requirement. A
student who cannot participate should decide before the add deadline. Followed
by a paragraph saying unease is normal, that the instructor will walk them in,
and naming the Wellness Center.

Stated a second time in the grading section where the practicals are described,
and a third time in the articulation reference for evaluating institutions.

### Donor conduct

Careful, deliberate handling with tissue kept covered and moist. No joking,
nicknames, horseplay or careless language. No discussion of donors outside the
lab, including on social media. A breach handled as a conduct matter under Board
Policy 5300, not as a classroom disagreement.

### Lab practical composition

50 percent of each practical is cadaver-based. Exam 1 is the exception, where
that 50 percent is microscopy of tissues on the microscopes.

### Instructional format, for articulation

Three rows in course identification:

- **Format.** In person. A face-to-face course, not online, hybrid, or
  web-enhanced in the sense of reduced seat time.
- **Lecture instruction.** Scheduled, in person, faculty-led guided lecture
  instruction on both meeting days, for the full published lecture hours. Every
  session taught live by the instructor of record in the assigned classroom.
  Concept lecture videos are assigned in addition, as preparation, and do not
  replace, shorten or substitute for any scheduled in-person lecture session.
- **Laboratory instruction.** Scheduled, in person, faculty-supervised.

This matters for receiving institutions whose equivalency rules require
in-person lecture. It should appear on the digital syllabus too.

### The flipped classroom, named

Named and explained in three parts: what it flips, why it is used in anatomy
(the hard minutes are finding the sphenoid on a crowded skull, not hearing that
it has a greater wing, so those minutes go where the help is), and the honest
trade, that it front-loads work and there is no in-class delivery to fall back
on.

### Transfer and articulation

C-ID **BIOL 110B**. Cal-GETC 2026 to 2027 **Area 5B with the laboratory
designation**, satisfying the Area 5 lab requirement on its own. Legacy IGETC
Area 5B with lab. Legacy CSU GE Breadth Area B2 with B3. CSU and UC
transferable, with the credit-limitation flag explained. Prerequisite for the
Solano RN program at a grade of C or better.

### College policy

Nondiscrimination. Title IX and BP 4270, including what mandatory reporting
means for a disclosure to the instructor. Academic freedom. Student conduct and
the appeal route under BP/AP 5300. BP 5390 on recording. Grading symbols, Pass /
No Pass, incompletes, course repetition. Academic renewal under BP/AP 5110.
Probation and dismissal under BP/AP 5100. BP 5020 on attendance.

### Real Fall 2026 college deadlines

August 28 refund. September 7 add, and drop with no academic record. **November
20 withdrawal.** December 11 Pass / No Pass filing. December 12 to 18 finals.
The withdrawal date was not in the digital syllabus at all.

### Verified support contacts

ASTC tutoring, Accessibility Services Center, counselling, Wellness Center and
crisis lines, Basic Needs Center and food pantry, library, EOPS, veterans,
financial aid, Admissions and Records, Canvas support, campus Public Safety and
RAVE Alert enrolment.

## 2.3 Corrected

- **Loops videos are not concept lectures.** Lecture videos are the concept
  lectures, where content is taught and what the pre-work worksheet is worked
  against. Loops videos are practice and interactive lab videos, used after
  class for rehearsal. The digital syllabus currently describes Loops as concept
  walkthroughs and needs the same correction.
- **The pre-work sequence.** Work the worksheet with the notes packet and the
  reading open, then watch the online concept lecture, then pre-study the lab
  structures.

## 2.4 Still unverified

1. **Prerequisite and advisory.** The BIO 016 and BIO 016L advisory in the old
   syllabus was wrong, BIO 016 has nothing to do with this course, and it has
   been removed. The documents now say the prerequisite and advisory are as
   published in the current catalog and Course Outline of Record. Two new rows
   were added to course identification: a **Level** row stating majors-level
   human anatomy, transfer-level laboratory science for nursing, allied health,
   kinesiology and the biological sciences, and a **Prerequisite and advisory**
   row pointing at the catalog. Delete the BIO 016 advisory from the digital
   syllabus too if it appears there.
2. **Lecture and laboratory contact hours.** Not stated numerically anywhere,
   because they could not be verified. An articulation officer will want them.
   Pull the COR from `solano.elumenapp.com/public/` and add the figures to the
   course identification table and to the articulation reference.
