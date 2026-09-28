/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   bio004-mastery-items.js

   Companion data for bio004-mastery-check.html.

   The Mastery Check draws its questions from two places:
     1. The recall card bank (course-content.js), joined to the
        fall competencies by card-competency-map.js and
        card-competency-fine.js. That covers every module.
     2. The exam-style items in THIS file. Each one is written
        against the module notes, tagged to one competency, and
        carries a reason for the right answer AND a reason for
        every wrong one, so the distractors teach.

   This file also holds, per module, the things the recall bank
   cannot supply: where to go in the notes for each competency,
   which competencies travel together (so a gap in one points to
   the likely gap next to it), the group repair problems, and the
   brain dump prompts.

   Module 2 is filled in (skeletal system: bone tissue, axial and
   appendicular skeleton, joints). Modules 1, 3, 4 and 5 still
   work: the page falls back to the recall bank for questions and
   to each topic's lecture page for notes. Add a MODULES[n] block
   below to give a module the same depth as Module 2.

   Writing rules for items: anatomy only, no physiology; no em
   dashes; no italics or markup inside strings; one defensible
   answer; every whyNot says what the wrong option actually
   describes or when it would be right.
   ============================================================ */
(function(){
var B = window.BIO004_MASTERY = window.BIO004_MASTERY || {};
B.modules = B.modules || {};

B.recallUrl = 'bio004-spaced-recall.html';

/* ------------------------------------------------------------
   MODULE 2. Skeletal system
   ------------------------------------------------------------ */
var bone   = { notes:'m2-bone-notes.html',       draw:'m2-bone-drawing-sheet.html',         sheet:'m2-bone-worksheet.html',         video:'bone-concept-videos.html' };
var skull  = { notes:'m2-skull-notes.html',      draw:'m2-axial-drawing-sheet.html',        sheet:'m2-axial-worksheet.html',        video:'axial-concept-videos.html' };
var spine  = { notes:'m2-spine-notes.html',      draw:'m2-axial-drawing-sheet.html',        sheet:'m2-axial-worksheet.html',        video:'axial-concept-videos.html' };
var upper  = { notes:'m2-upper-limb-notes.html', draw:'m2-appendicular-drawing-sheet.html', sheet:'m2-appendicular-worksheet.html', video:'appendicular-concept-videos.html' };
var lower  = { notes:'m2-lower-limb-notes.html', draw:'m2-appendicular-drawing-sheet.html', sheet:'m2-appendicular-worksheet.html', video:'appendicular-concept-videos.html' };
var joints = { notes:'m2-joints-notes.html',     draw:'m2-joints-drawing-sheet.html',       sheet:'m2-joints-worksheet.html',       video:'joints-concept-videos.html' };
function R(base, anchor, section, station){ return { notes:base.notes+'#'+anchor, section:section, draw:base.draw, sheet:base.sheet, video:base.video, station:station }; }

B.modules[2] = {
  title: 'Skeletal system',

  /* competency id -> where to repair it */
  resources: {
    'w2-cartilage-types':        R(bone,'cartilage','Cartilage','bone'),
    'w2-cartilage-growth':       R(bone,'cartilage','Cartilage, how cartilage grows','growth'),
    'w2-bone-shapes':            R(bone,'bone-classification-and-the-long-bone','Bones by shape','bone'),
    'w2-long-bone-gross':        R(bone,'bone-classification-and-the-long-bone','Gross anatomy of a long bone','bone'),
    'w2-compact-spongy':         R(bone,'bone-microanatomy','Bone microanatomy','bone'),
    'w2-bone-cells':             R(bone,'bone-microanatomy','The four bone cells','bone'),
    'w2-ossification-growth':    R(bone,'bone-growth-and-formation','Bone growth and formation','growth'),
    'w2-skull-bones':            R(skull,'the-cranial-bones','The cranial bones and the facial bones','skull'),
    'w2-skull-markings':         R(skull,'the-cranial-bones','Markings of each cranial and facial bone','skull'),
    'w2-sutures-fontanelles':    R(skull,'sutures-and-fontanelles','Sutures and fontanelles','skull'),
    'w2-skull-cavities':         R(skull,'cavities-and-special-features','Cavities and special features','skull'),
    'w2-skull-foramina':         R(skull,'major-foramina','Major foramina','skull'),
    'w2-spine-regions':          R(spine,'the-vertebral-column-an-overview','The vertebral column and its curvatures','spine'),
    'w2-typical-vertebra':       R(spine,'a-typical-vertebra','A typical vertebra','spine'),
    'w2-regional-vertebrae':     R(spine,'regional-vertebrae','Regional vertebrae','spine'),
    'w2-thoracic-cage':          R(spine,'the-thoracic-cage','The thoracic cage','spine'),
    'w2-pectoral-girdle':        R(upper,'the-pectoral-girdle','The pectoral girdle','upper'),
    'w2-arm-forearm':            R(upper,'the-arm-and-forearm','The arm and forearm','upper'),
    'w2-hand-bones':             R(upper,'the-hand','The hand','upper'),
    'w2-bone-markings-vocab':    R(upper,'bone-markings-vocabulary','Bone markings vocabulary','upper'),
    'w2-pelvic-girdle':          R(lower,'the-pelvic-girdle','The pelvic girdle','lower'),
    'w2-thigh-knee':             R(lower,'the-thigh-and-knee','The thigh and knee','lower'),
    'w2-leg-bones':              R(lower,'the-leg','The leg','lower'),
    'w2-foot-bones':             R(lower,'the-foot','The foot','lower'),
    'w2-joint-classification':   R(joints,'classifying-joints','Classifying joints','joints'),
    'w2-fibrous-cartilaginous':  R(joints,'fibrous-joints','Fibrous and cartilaginous joints','joints'),
    'w2-synovial-structure':     R(joints,'synovial-joint-structure','Synovial joint structure and accessory structures','joints'),
    'w2-joint-movements':        R(joints,'movements-at-synovial-joints','Movements at synovial joints','joints'),
    'w2-synovial-types':         R(joints,'the-six-types-of-synovial-joints','The six types of synovial joints','joints'),
    'w2-shoulder-knee':          R(joints,'the-shoulder-joint','The shoulder joint and the knee joint','joints')
  },

  /* competency id -> competencies that usually break with it, and why */
  related: {
    'w2-cartilage-types':       [['w2-cartilage-growth','Both ask you to know what the perichondrium and the chondrocytes are doing.'],['w2-fibrous-cartilaginous','Hyaline versus fibrocartilage is exactly what separates a synchondrosis from a symphysis.']],
    'w2-cartilage-growth':      [['w2-ossification-growth','The same two words, interstitial and appositional, come back for bone growth, with different locations.'],['w2-cartilage-types','Growth happens from the perichondrium, so you need the parts of cartilage first.']],
    'w2-bone-shapes':           [['w2-long-bone-gross','The long bone is the shape every gross label is taught on.'],['w2-thigh-knee','The patella is the example sesamoid bone.']],
    'w2-long-bone-gross':       [['w2-ossification-growth','Plate versus line only makes sense once you know how the plate grows and closes.'],['w2-compact-spongy','The diaphysis is mostly compact bone, and the epiphysis is spongy bone inside a thin compact shell, so the gross and the microscopic views are one picture.']],
    'w2-compact-spongy':        [['w2-bone-cells','Lacunae and canaliculi exist to house and connect osteocytes.'],['w2-long-bone-gross','Where each tissue sits in a long bone is part of telling them apart.']],
    'w2-bone-cells':            [['w2-compact-spongy','The osteocyte is defined by where it lives, a lacuna in the matrix.'],['w2-ossification-growth','Osteoblasts and osteoclasts are the cells doing the building and reshaping during ossification.']],
    'w2-ossification-growth':   [['w2-cartilage-growth','The growth plate is hyaline cartilage, so cartilage growth is the first half of the story.'],['w2-sutures-fontanelles','Fontanelles are the membrane gaps left between the flat skull bones, which form by intramembranous ossification.'],['w2-long-bone-gross','The plate sits in the metaphysis and becomes the epiphyseal line.']],
    'w2-skull-bones':           [['w2-skull-markings','Every marking is asked by the bone it sits on.'],['w2-sutures-fontanelles','Sutures are named by the bones they join.'],['w2-skull-cavities','The orbit, septum and palate are built from specific bones.']],
    'w2-skull-markings':        [['w2-skull-foramina','Most foramina are markings of the sphenoid, temporal, ethmoid and occipital bones.'],['w2-skull-bones','A marking on the wrong bone is usually a bone identification problem underneath.']],
    'w2-sutures-fontanelles':   [['w2-skull-bones','You cannot place a suture without the bones on each side of it.'],['w2-fibrous-cartilaginous','A suture is a fibrous joint, classified structurally and functionally.']],
    'w2-skull-cavities':        [['w2-skull-bones','Each cavity is asked as a list of bones.'],['w2-skull-markings','The perpendicular plate, the palatine processes and the sinuses are markings of named bones.']],
    'w2-skull-foramina':        [['w2-skull-markings','Foramina are learned as markings on a specific bone.'],['w2-bone-markings-vocab','Foramen, canal, fissure and meatus are all openings, and the vocabulary tells you what kind.']],
    'w2-spine-regions':         [['w2-regional-vertebrae','Counting a region and recognizing its vertebra go together.'],['w2-typical-vertebra','The curvatures and regions sit on the same basic vertebra design.']],
    'w2-typical-vertebra':      [['w2-regional-vertebrae','Every regional feature is a modification of a typical part.'],['w2-fibrous-cartilaginous','The joints between vertebral bodies are symphyses, fibrocartilage discs.']],
    'w2-regional-vertebrae':    [['w2-typical-vertebra','Transverse foramina and costal facets sit on the transverse processes and body, so you need the parts first.'],['w2-thoracic-cage','Costal facets exist because the ribs articulate there.'],['w2-synovial-types','The atlas and axis form a pivot joint.']],
    'w2-thoracic-cage':         [['w2-regional-vertebrae','The posterior end of every rib meets a thoracic vertebra.'],['w2-cartilage-types','Costal cartilage is hyaline cartilage.']],
    'w2-pectoral-girdle':       [['w2-arm-forearm','The glenoid cavity and the humeral head are two halves of one joint.'],['w2-shoulder-knee','The coracoid process and glenoid cavity are where the coracohumeral and glenohumeral ligaments and the labrum attach.']],
    'w2-arm-forearm':           [['w2-bone-markings-vocab','Tubercle, tuberosity, epicondyle and fossa are how these markings are named.'],['w2-hand-bones','Radius on the thumb side is the same fact that sets up the carpal rows.'],['w2-joint-movements','In pronation the radius crosses over the ulna, and in supination it uncrosses.']],
    'w2-hand-bones':            [['w2-arm-forearm','The radius, not the ulna, meets the proximal carpals at the wrist.'],['w2-synovial-types','The thumb carpometacarpal joint is the example saddle joint.']],
    'w2-bone-markings-vocab':   [['w2-arm-forearm','The humerus is where most of the vocabulary gets its example.'],['w2-thigh-knee','Trochanter, condyle and fossa appear again on the femur.'],['w2-skull-foramina','Openings are a marking category too.']],
    'w2-pelvic-girdle':         [['w2-thigh-knee','The acetabulum and the femoral head are one joint.'],['w2-spine-regions','The sacrum sits between the hip bones but is axial, not part of the hip bone.']],
    'w2-thigh-knee':            [['w2-pelvic-girdle','The head of the femur is defined by the acetabulum it fits into.'],['w2-shoulder-knee','The femoral condyles and intercondylar fossa are where the cruciate ligaments sit.'],['w2-leg-bones','The femoral condyles meet the tibia, not the fibula.']],
    'w2-leg-bones':             [['w2-foot-bones','The tibia and fibula grip the talus at the ankle.'],['w2-thigh-knee','Only the tibia reaches the femur.'],['w2-fibrous-cartilaginous','The distal tibiofibular joint is a syndesmosis.']],
    'w2-foot-bones':            [['w2-leg-bones','The talus is the tarsal that meets the tibia and fibula.'],['w2-joint-movements','Inversion, eversion, dorsiflexion and plantar flexion all happen at the foot and ankle.']],
    'w2-joint-classification':  [['w2-fibrous-cartilaginous','Each structural class has named subtypes, and each subtype has a functional class.'],['w2-synovial-structure','The synovial cavity is the structural test.']],
    'w2-fibrous-cartilaginous': [['w2-joint-classification','Suture, syndesmosis and gomphosis are asked with their functional class.'],['w2-sutures-fontanelles','The sutures of the skull are the example fibrous joints.'],['w2-cartilage-types','Synchondrosis is hyaline cartilage, symphysis is fibrocartilage.']],
    'w2-synovial-structure':    [['w2-shoulder-knee','The labrum, menisci and bursae are accessory structures you have to place at real joints.'],['w2-synovial-types','Every synovial type shares this same basic structure.']],
    'w2-joint-movements':       [['w2-synovial-types','The shape of a joint decides which movements it allows.'],['w2-arm-forearm','Pronation and supination need the radius and ulna positions.']],
    'w2-synovial-types':        [['w2-joint-movements','The number of axes a joint type has decides which movements it can make.'],['w2-shoulder-knee','The shoulder is ball-and-socket and the knee is a modified hinge.']],
    'w2-shoulder-knee':         [['w2-synovial-structure','Capsule, ligaments, labrum and menisci are the vocabulary of both joints.'],['w2-pectoral-girdle','The glenoid cavity is on the scapula.'],['w2-thigh-knee','The cruciates attach between the femoral condyles.']]
  },

  /* group repair problems, keyed by station */
  stations: {
    bone: {
      title: 'Bone tissue: the osteon, spongy bone, and the four cells',
      tasks: [
        'Draw one osteon in cross section, big. Label the central canal, a perforating canal, the lamellae, a lacuna, and canaliculi.',
        'Next to it, draw a patch of spongy bone. Label the trabeculae and the red marrow in the spaces. Circle the one thing you look for to tell compact from spongy on a slide.',
        'Draw a long bone and shade where compact bone is and where spongy bone is. Label the diaphysis, epiphysis, metaphysis, medullary cavity, periosteum, endosteum and articular cartilage.',
        'Write the bone cell lineage as arrows: osteogenic cell, osteoblast, osteocyte. Put the osteoclast off to the side and write where it comes from and what it does.'
      ],
      done: 'Anyone in the group can point at the board and explain, without notes, why canaliculi are not perforating canals and why the osteoclast is the outsider.'
    },
    growth: {
      title: 'How bone forms and grows',
      tasks: [
        'Make a two-column table: intramembranous versus endochondral. For each, write what the bone forms in and two examples.',
        'Draw a child’s long bone and zoom in on the growth plate. Stack the five zones from the epiphysis side to the diaphysis side and give each one a one-line job.',
        'On the same drawing, draw an arrow for growth in length and an arrow for growth in width. Label each one interstitial or appositional and say where it happens.',
        'Draw the same bone as an adult. What replaced the plate, and what is it called now?'
      ],
      done: 'Someone can say the five zones in order from either end, and the group agrees which direction the question is asking.'
    },
    skull: {
      title: 'The skull: bones, sutures, foramina, cavities',
      tasks: [
        'Sketch the skull from the side and from above. Label the four major sutures and the pterion, and write the bones that meet at each.',
        'Make two lists without notes: the eight cranial bones and the fourteen facial bones (count the paired ones twice). Star the single bones.',
        'Sketch the floor of the cranium. Place the cribriform plate, optic canal, superior orbital fissure, foramen ovale, carotid canal, jugular foramen and foramen magnum, and write what passes through each and which bone it passes through, or which two bones it lies between.',
        'List the bones of the nasal septum and the hard palate, and the four paranasal sinuses by the bone each sits in.'
      ],
      done: 'Every foramen on the board has its bone and its contents, and the group has checked the sphenoid and ethmoid features are on the right bone.'
    },
    spine: {
      title: 'Vertebral column and thoracic cage',
      tasks: [
        'Draw a typical vertebra from above. Label the body, pedicles, laminae, vertebral foramen, spinous process, transverse processes and articular processes.',
        'Draw the one giveaway feature for a cervical, a thoracic and a lumbar vertebra. For cervical and thoracic, write what passes through or articulates at that feature. For lumbar, write what the feature is built for.',
        'Draw an intervertebral disc with its anulus fibrosus and nucleus pulposus. Show a herniation with an arrow and mark where it presses on a spinal nerve.',
        'Write the rib numbers for true, false and floating ribs, and one sentence on why ribs 8 to 10 are false.'
      ],
      done: 'The group can explain the difference between the vertebral foramen and an intervertebral foramen, and why floating ribs are also false ribs.'
    },
    upper: {
      title: 'Upper limb: girdle, arm, forearm, hand',
      tasks: [
        'Stand in anatomical position. A teammate points to and names on you: acromion, coracoid process area, humeral head, surgical neck, medial epicondyle, olecranon, both styloid processes. Swap roles.',
        'Draw the distal humerus from the front. Label the capitulum and trochlea, then draw which forearm bone meets each. Write lateral and medial on the correct sides.',
        'Write the eight carpals in their two rows, proximal row first, thumb side to little-finger side.',
        'Draw the carpal tunnel: the carpals as the floor, the flexor retinaculum as the roof, and what runs through it.'
      ],
      done: 'Someone turns their palm backward and the group can still say which bone is lateral, because the answer is always given in anatomical position.'
    },
    lower: {
      title: 'Lower limb: hip bone, femur, leg, foot',
      tasks: [
        'Draw a hip bone from the side. Divide it into ilium, ischium and pubis and mark the acetabulum where all three meet. Add the iliac crest, anterior superior iliac spine, ischial tuberosity, obturator foramen and greater sciatic notch.',
        'Draw the femur from the front and back. Label the head, neck, greater and lesser trochanters, linea aspera, condyles and intercondylar fossa.',
        'Draw the tibia and fibula side by side. Label which is medial, which bears weight, the tibial tuberosity and both malleoli.',
        'Name the seven tarsals. Circle the one that receives the body’s weight from the tibia and the one that forms the heel.'
      ],
      done: 'The group can explain why the sacrum is not part of the hip bone and why the fibula can be used as a graft.'
    },
    joints: {
      title: 'Joints: classification, types, movements, shoulder and knee',
      tasks: [
        'Build a table on the board: structural class down the side (fibrous, cartilaginous, synovial), functional class across the top (synarthrosis, amphiarthrosis, diarthrosis). Put suture, gomphosis, syndesmosis, synchondrosis, symphysis and one synovial joint in the right cells.',
        'One person calls a movement, everyone else does it: flexion, extension, abduction, adduction, rotation, pronation, supination, dorsiflexion, plantar flexion, inversion, eversion, elevation, depression, protraction, retraction, opposition.',
        'List the six synovial joint types with the number of axes and one body example each.',
        'Draw the knee from the front. Label the ACL, PCL, medial and lateral menisci, and the tibial and fibular collateral ligaments. Write which cruciate stops the tibia sliding forward.'
      ],
      done: 'Every cell of the table is filled or marked empty on purpose, and the group can say why a suture in an adult is a synarthrosis.'
    }
  },

  /* brain dump prompts for the retrieval finish, by area */
  dump: [
    'Bone microanatomy: the osteon, spongy bone, and the four bone cells.',
    'Ossification and growth: the two routes, the five growth plate zones, length versus width.',
    'Axial landmarks: skull bones, sutures, foramina, sinuses, vertebral regions, ribs.',
    'Appendicular landmarks: girdles, humerus, radius and ulna, carpals, hip bone, femur, tibia and fibula, tarsals.',
    'Joint relationships: structural and functional classes, synovial types, the shoulder and the knee.'
  ]
};

/* ------------------------------------------------------------
   Exam-style items. module, comp, stem, options, correct (index),
   why, whyNot (one per option).
   ------------------------------------------------------------ */
B.items = [
{ id:'m2x-01', module:2, comp:'w2-cartilage-types',
  stem:'A slide is labeled external ear. What should you expect to see under the microscope?',
  options:['A glassy matrix with collagen fibers too fine to see, like the costal cartilages.',
           'Chondrocytes in lacunae, surrounded by a matrix packed with dark, branching elastic fibers.',
           'Thick, parallel bundles of collagen with chondrocytes lined up in rows between them.',
           'Concentric rings of matrix around a central canal.'],
  correct:1,
  why:'The external ear is elastic cartilage. It has chondrocytes in lacunae like every cartilage, but its matrix is packed with elastic fibers. That is what lets the ear bend and spring back.',
  whyNot:['That describes hyaline cartilage, found at the costal cartilages, the nose, the airways and the ends of long bones.',
          'Correct.',
          'That is fibrocartilage, found in the intervertebral discs, the knee menisci and the pubic symphysis.',
          'Rings around a central canal make an osteon, the unit of compact bone. Cartilage has no central canals.'] },

{ id:'m2x-02', module:2, comp:'w2-long-bone-gross',
  stem:'An X-ray of a 40-year-old’s femur shows a thin line crossing the bone between the epiphysis and the diaphysis. What is it, and what does it tell you?',
  options:['The epiphyseal plate. The bone is still growing in length.',
           'Articular cartilage. It caps the end of the bone at the joint.',
           'The endosteum. It lines the medullary cavity.',
           'The epiphyseal line. Growth in length has ended.'],
  correct:3,
  why:'Once growth in length ends, the growth plate closes and is replaced by bone. What remains is the epiphyseal line, a thin line of bone between the epiphysis and the diaphysis. Its presence tells you the skeleton is mature.',
  whyNot:['The plate is hyaline cartilage and is present only while a bone is still growing, as in a child. On an X-ray it looks like a dark gap, not a thin line.',
          'Articular cartilage covers the joint surface at the very end of the epiphysis. It does not cross the bone.',
          'The endosteum is a thin membrane lining the internal bone surfaces. It does not form a line across the bone.',
          'Correct.'] },

{ id:'m2x-03', module:2, comp:'w2-compact-spongy',
  stem:'A slide shows rings of matrix around a central canal. Small cavities sit between the rings, joined by very thin channels. Which identification is correct?',
  options:['Compact bone. The unit is an osteon, and the thin channels are canaliculi.',
           'Compact bone. The thin channels are perforating canals.',
           'Spongy bone. The rings are trabeculae.',
           'Hyaline cartilage. The cavities are lacunae holding chondrocytes.'],
  correct:0,
  why:'Concentric lamellae around a central canal is an osteon, the structural unit of compact bone. The cavities are lacunae, each holding an osteocyte, and the thin channels that connect them are canaliculi.',
  whyNot:['Correct.',
          'Perforating canals are larger channels that run crosswise and link one central canal to another. They do not connect lacunae.',
          'Spongy bone is a lattice of trabeculae with no osteons and no central canals.',
          'Cartilage does have lacunae with cells in them, but it has no central canal and no canaliculi.'] },

{ id:'m2x-04', module:2, comp:'w2-bone-cells',
  stem:'Three of the four bone cells belong to one lineage. Which cell is the outsider, and what does it do?',
  options:['The osteocyte. It maintains the matrix from inside a lacuna.',
           'The osteoblast. It builds and secretes new matrix.',
           'The osteoclast. It comes from a blood-cell line and breaks down bone matrix.',
           'The osteogenic cell. It is the stem cell that divides to make osteoblasts.'],
  correct:2,
  why:'Osteogenic cells become osteoblasts, and osteoblasts become osteocytes once they are surrounded by matrix. The osteoclast is a large, multinucleated cell from a blood-cell line, and it is the only one of the four that takes bone away.',
  whyNot:['The osteocyte is the end of the lineage, a mature osteoblast sitting in a lacuna.',
          'The osteoblast is the middle of the lineage. It comes from the osteogenic cell and becomes the osteocyte.',
          'Correct.',
          'The osteogenic cell is the start of the lineage, not the outsider.'] },

{ id:'m2x-05', module:2, comp:'w2-ossification-growth',
  stem:'The parietal bone and the femur form by different routes. Which pairing is correct?',
  options:['Parietal bone: intramembranous, forming directly within a connective tissue membrane. Femur: endochondral, replacing a hyaline cartilage model.',
           'Parietal bone: endochondral, replacing a hyaline cartilage model. Femur: intramembranous, forming within a membrane.',
           'Both form by intramembranous ossification. The femur simply takes longer.',
           'Both form by endochondral ossification. Only the timing differs.'],
  correct:0,
  why:'The flat bones of the skull form by intramembranous ossification, where bone develops directly within a sheet of connective tissue. Most other bones, including the femur, form by endochondral ossification, where bone replaces a hyaline cartilage model.',
  whyNot:['Correct.',
          'This is the right pair of routes, swapped between the two bones.',
          'The femur starts as a hyaline cartilage model, and that model is the defining feature of endochondral ossification.',
          'The parietal bone never has a cartilage model. It forms inside a membrane.'] },

{ id:'m2x-06', module:2, comp:'w2-ossification-growth',
  stem:'Moving from the epiphysis toward the diaphysis, which is the correct order of the growth plate zones?',
  options:['Proliferation, resting, hypertrophy, ossification, calcification.',
           'Resting, proliferation, hypertrophy, calcification, ossification.',
           'Ossification, calcification, hypertrophy, proliferation, resting.',
           'Resting, hypertrophy, proliferation, calcification, ossification.'],
  correct:1,
  why:'The resting zone anchors the plate to the epiphysis. Then chondrocytes divide and stack (proliferation), enlarge (hypertrophy), their matrix calcifies (calcification), and the cartilage is replaced by bone next to the diaphysis (ossification). The order follows the life of one chondrocyte.',
  whyNot:['The resting zone comes first because it anchors the plate to the epiphysis, and calcification has to happen before ossification.',
          'Correct.',
          'This is the right order read backward, from the diaphysis to the epiphysis. The question starts at the epiphysis.',
          'Cells divide before they enlarge, so proliferation comes before hypertrophy.'] },

{ id:'m2x-07', module:2, comp:'w2-skull-bones',
  stem:'Which list contains only cranial bones?',
  options:['Frontal, maxilla, zygomatic, occipital.',
           'Parietal, vomer, lacrimal, sphenoid.',
           'Mandible, temporal, palatine, ethmoid.',
           'Frontal, sphenoid, ethmoid, temporal.'],
  correct:3,
  why:'The eight cranial bones are the frontal, occipital, sphenoid and ethmoid (single) and the parietals and temporals (paired). Every bone in this list is one of them.',
  whyNot:['The maxilla and zygomatic bones are facial bones.',
          'The vomer and lacrimal bones are facial bones.',
          'The mandible and palatine bones are facial bones.',
          'Correct.'] },

{ id:'m2x-08', module:2, comp:'w2-sutures-fontanelles',
  stem:'The pterion is the thinnest part of the skull, and the middle meningeal artery runs just beneath it. Which four bones meet there?',
  options:['Frontal, parietal, occipital, temporal.',
           'Parietal, temporal, occipital, sphenoid.',
           'Frontal, parietal, temporal, sphenoid.',
           'Frontal, ethmoid, sphenoid, zygomatic.'],
  correct:2,
  why:'The pterion is the H-shaped junction on the side of the skull where the frontal, parietal, temporal and sphenoid bones meet.',
  whyNot:['The occipital bone forms the back of the skull and does not reach the pterion. The sphenoid is missing.',
          'The occipital bone does not reach the pterion, and the frontal bone is missing.',
          'Correct.',
          'The ethmoid is the deepest cranial bone, between the orbits. It does not reach the side of the skull.'] },

{ id:'m2x-09', module:2, comp:'w2-skull-foramina',
  stem:'A tumor narrows the optic canal. Which bone is affected, and which structure is compressed?',
  options:['The ethmoid bone. The olfactory nerve filaments.',
           'The sphenoid bone. The optic nerve, cranial nerve II.',
           'The temporal bone. The nerves for hearing and facial movement.',
           'The sphenoid bone. The internal carotid artery.'],
  correct:1,
  why:'The optic canal passes through the sphenoid bone and carries the optic nerve from the eye.',
  whyNot:['The olfactory nerve filaments pass through the cribriform plate of the ethmoid bone.',
          'Correct.',
          'Those nerves pass through the internal acoustic meatus of the temporal bone.',
          'Right bone, wrong structure. The internal carotid artery passes through the carotid canal of the temporal bone.'] },

{ id:'m2x-10', module:2, comp:'w2-regional-vertebrae',
  stem:'A loose vertebra has a small oval body, a short forked spinous process, and a hole in each transverse process. Which region is it from, and what passes through those holes?',
  options:['Cervical. The vertebral arteries.',
           'Cervical. The spinal nerves.',
           'Thoracic. The heads of the ribs.',
           'Lumbar. The vertebral arteries.'],
  correct:0,
  why:'Transverse foramina are the giveaway for a cervical vertebra, and they pass the vertebral arteries. A small oval body and a short, often bifid spinous process fit too.',
  whyNot:['Correct.',
          'Right region, wrong contents. Spinal nerves leave through the intervertebral foramina, the gaps between stacked vertebrae.',
          'Thoracic vertebrae have costal facets, not holes, where the ribs articulate. Their bodies are heart-shaped and their spinous processes are long.',
          'Lumbar vertebrae have thick, kidney-shaped bodies and no transverse foramina.'] },

{ id:'m2x-11', module:2, comp:'w2-typical-vertebra',
  stem:'In a herniated disc, what pushes through what, and where can it press on a spinal nerve?',
  options:['The anulus fibrosus pushes through the nucleus pulposus, at the vertebral foramen.',
           'The vertebral body pushes into the vertebral canal, at the spinous process.',
           'The nucleus pulposus pushes through a torn anulus fibrosus, at an intervertebral foramen.',
           'The nucleus pulposus pushes through the lamina, at the transverse process.'],
  correct:2,
  why:'The nucleus pulposus is the soft, gel-like core of the disc and the anulus fibrosus is its tough outer ring. When the ring tears, the core pushes out and can press on a spinal nerve where it exits at an intervertebral foramen.',
  whyNot:['This is backward. The soft core pushes through the tough ring, not the other way around.',
          'A herniated disc involves the disc, not the vertebral body, and the spinous process points backward away from the nerves.',
          'Correct.',
          'The lamina is part of the vertebral arch, not the disc, and nerves do not exit at the transverse process.'] },

{ id:'m2x-12', module:2, comp:'w2-thoracic-cage',
  stem:'How is rib 9 classified, and why?',
  options:['A true rib, because it articulates with a thoracic vertebra.',
           'A true rib, because it has its own costal cartilage.',
           'A floating rib, because it has no anterior attachment.',
           'A false rib, because its costal cartilage joins the cartilage of the rib above instead of reaching the sternum.'],
  correct:3,
  why:'Ribs are classified by their anterior attachment. Ribs 1 to 7 reach the sternum directly (true), ribs 8 to 10 join the costal cartilage of the rib above (false), and ribs 11 and 12 have no anterior attachment (floating, a subset of the false ribs).',
  whyNot:['Every rib articulates with a thoracic vertebra behind, so that cannot separate true from false.',
          'Rib 9 has costal cartilage, but it does not reach the sternum on its own.',
          'Only ribs 11 and 12 float.',
          'Correct.'] },

{ id:'m2x-13', module:2, comp:'w2-arm-forearm',
  stem:'In anatomical position, which pairing at the elbow is correct?',
  options:['The capitulum is lateral and meets the radius. The trochlea is medial and meets the ulna.',
           'The capitulum is medial and meets the ulna. The trochlea is lateral and meets the radius.',
           'The radius and ulna both meet the trochlea. The capitulum is only a muscle attachment.',
           'The olecranon of the radius fits into the olecranon fossa when the elbow straightens.'],
  correct:0,
  why:'At the distal humerus, the capitulum sits lateral and meets the head of the radius, and the trochlea sits medial and is gripped by the trochlear notch of the ulna. Fix anatomical position first and the pairing follows.',
  whyNot:['Correct.',
          'Both sides are swapped. The radius is on the lateral, thumb side.',
          'The capitulum is an articular surface for the radial head, not a muscle attachment.',
          'The olecranon belongs to the ulna, not the radius.'] },

{ id:'m2x-14', module:2, comp:'w2-hand-bones',
  stem:'In carpal tunnel syndrome, which nerve is compressed, and what forms the roof of the tunnel?',
  options:['The ulnar nerve. The flexor retinaculum.',
           'The median nerve. The interosseous membrane.',
           'The median nerve. The flexor retinaculum.',
           'The radial nerve. The scaphoid and lunate.'],
  correct:2,
  why:'The carpal tunnel is the space between the carpal bones (the floor) and the flexor retinaculum (the roof). It carries the long flexor tendons and the median nerve, and narrowing it compresses the median nerve.',
  whyNot:['Right roof, wrong nerve. The ulnar nerve passes behind the medial epicondyle, the funny bone, not through the carpal tunnel.',
          'Right nerve, wrong roof. The interosseous membrane joins the shafts of the radius and ulna in the forearm.',
          'Correct.',
          'The carpals form the floor of the tunnel, not the roof, and the radial nerve does not run through it.'] },

{ id:'m2x-15', module:2, comp:'w2-pelvic-girdle',
  stem:'Which statement about the hip bone (os coxae) is correct?',
  options:['The ilium, ischium and sacrum fuse at the acetabulum.',
           'The ilium, ischium and pubis fuse at the acetabulum.',
           'The obturator foramen is framed by the ilium and the pubis.',
           'The greater sciatic notch is on the pubis.'],
  correct:1,
  why:'Each hip bone begins as three bones, the ilium, ischium and pubis, which fuse at the acetabulum, the socket for the head of the femur.',
  whyNot:['The sacrum is part of the axial skeleton. It meets the ilium at the sacroiliac joint but is not part of the hip bone.',
          'Correct.',
          'The obturator foramen is framed by the ischium and the pubis.',
          'The greater sciatic notch is on the posterior border of the ilium. Ligaments close it into the greater sciatic foramen, which the sciatic nerve passes through.'] },

{ id:'m2x-16', module:2, comp:'w2-leg-bones',
  stem:'Which statement correctly tells the tibia from the fibula?',
  options:['The tibia is lateral and ends in the lateral malleolus.',
           'The fibula bears most of the body’s weight and carries the tibial tuberosity.',
           'The fibula articulates directly with the condyles of the femur.',
           'The tibia is medial, bears the body’s weight, and ends in the medial malleolus.'],
  correct:3,
  why:'The tibia is the medial, weight-bearing bone of the leg. Its condyles meet the femur, the tibial tuberosity anchors the patellar ligament, and it ends in the medial malleolus. The fibula is lateral, slender, and ends in the lateral malleolus.',
  whyNot:['The tibia is medial. The lateral malleolus belongs to the fibula.',
          'The fibula does not bear body weight, and the tibial tuberosity is on the tibia, as its name says.',
          'Only the tibia meets the femur at the knee. The head of the fibula sits below the knee joint.',
          'Correct.'] },

{ id:'m2x-17', module:2, comp:'w2-joint-classification',
  stem:'How is the pubic symphysis classified by structure and by function?',
  options:['Fibrous. Synarthrosis.',
           'Cartilaginous, joined by fibrocartilage. Amphiarthrosis.',
           'Cartilaginous, joined by hyaline cartilage. Synarthrosis.',
           'Synovial. Diarthrosis.'],
  correct:1,
  why:'A symphysis is a cartilaginous joint joined by a broad disc of fibrocartilage, and it is slightly movable, an amphiarthrosis. All symphyses sit in the midline.',
  whyNot:['Fibrous joints, like sutures, are held by dense connective tissue, not cartilage.',
          'Correct.',
          'That describes a synchondrosis, like the epiphyseal plate or the joint between the first rib and the manubrium.',
          'The pubic symphysis has no synovial cavity.'] },

{ id:'m2x-18', module:2, comp:'w2-synovial-types',
  stem:'Which joint is correctly matched with its synovial joint type and axes of movement?',
  options:['Carpometacarpal joint of the thumb: saddle, biaxial.',
           'Knee: ball-and-socket, triaxial.',
           'Atlantoaxial joint: hinge, uniaxial flexion and extension.',
           'Intercarpal joints: condyloid, biaxial.'],
  correct:0,
  why:'At the thumb carpometacarpal joint, each surface is both concave and convex. That is a saddle joint, and it moves around two axes.',
  whyNot:['Correct.',
          'The knee is a modified hinge joint. The ball-and-socket joints are the shoulder and the hip.',
          'The atlantoaxial joint is a pivot joint. The atlas rotates around the dens.',
          'The intercarpal joints are plane joints that glide. Condyloid examples are the radiocarpal and metacarpophalangeal joints.'] },

{ id:'m2x-19', module:2, comp:'w2-joint-movements',
  stem:'Starting in anatomical position, a student turns the forearm so the palm faces posteriorly. Name the movement and the joint type at the proximal radioulnar joint that allows it.',
  options:['Supination. Hinge joint.',
           'Pronation. Hinge joint.',
           'Supination. Pivot joint.',
           'Pronation. Pivot joint.'],
  correct:3,
  why:'In anatomical position the palm faces anteriorly, which is supination. Turning it to face posteriorly is pronation. The head of the radius spins in the radial notch of the ulna, a pivot joint.',
  whyNot:['Supination turns the palm to face anteriorly, back toward anatomical position. A hinge joint only flexes and extends.',
          'Right movement, wrong joint type. A hinge cannot rotate.',
          'Right joint type, wrong movement.',
          'Correct.'] },

{ id:'m2x-20', module:2, comp:'w2-shoulder-knee',
  stem:'During a knee exam, the tibia slides too far forward on the femur. Which structure is most likely torn?',
  options:['The posterior cruciate ligament.',
           'The lateral meniscus.',
           'The anterior cruciate ligament.',
           'The fibular collateral ligament.'],
  correct:2,
  why:'The anterior cruciate ligament crosses inside the knee and stops the tibia from sliding forward on the femur.',
  whyNot:['The posterior cruciate ligament stops the tibia from sliding backward.',
          'The menisci are fibrocartilage pads that improve fit and absorb shock. The main restraint against forward sliding is the ACL.',
          'Correct.',
          'The collateral ligaments sit on the sides of the knee, outside the capsule, and resist sideways forces.'] },

/* ---- second set: same competencies, new contexts ---- */
{ id:'m2x-21', module:2, comp:'w2-compact-spongy',
  stem:'A biopsy from deep inside the head of the femur shows a lattice of thin bony struts with red marrow filling the spaces. There are no central canals. What is it?',
  options:['Compact bone. The osteons were cut lengthwise, so the canals do not show.',
           'Hyaline cartilage. The struts are rows of chondrocytes.',
           'Spongy bone. The struts are trabeculae, and the spaces hold red marrow.',
           'Compact bone. The struts are interstitial lamellae.'],
  correct:2,
  why:'Spongy bone fills the epiphyses. It has no osteons. Its trabeculae line up along lines of stress, and the spaces between them hold red marrow.',
  whyNot:['An osteon cut lengthwise still shows its central canal as a long channel. No canals at all means no osteons.',
          'Cartilage caps the head of the femur at the joint surface, not deep inside, and cartilage has no marrow.',
          'Correct.',
          'Interstitial lamellae are leftover fragments of old osteons found between intact osteons in compact bone.'] },

{ id:'m2x-22', module:2, comp:'w2-bone-cells',
  stem:'A cell sits alone in a lacuna, surrounded by hard matrix, and reaches its neighbors through canaliculi. What was this cell before, and what was it before that?',
  options:['An osteoblast, and before that an osteogenic cell.',
           'An osteoclast, and before that a blood-cell precursor.',
           'An osteogenic cell, and before that an osteoblast.',
           'Nothing different. This cell divides to make copies of itself inside the lacuna.'],
  correct:0,
  why:'The cell described is an osteocyte. It is a mature osteoblast that became surrounded by the matrix it made, and osteoblasts come from osteogenic cells.',
  whyNot:['Correct.',
          'The osteoclast is from a separate, blood-cell line. It resorbs bone and does not become an osteocyte.',
          'The order is reversed. The osteogenic cell is the stem cell at the start of the lineage.',
          'The osteocyte is the end of the lineage. The osteogenic cell is the one that divides.'] },

{ id:'m2x-23', module:2, comp:'w2-ossification-growth',
  stem:'A 10-year-old has a fracture through the growth plate, in the zone where the chondrocytes are enlarging. Which zone is that, and which zone lies right next to it on the diaphysis side?',
  options:['The zone of proliferation. Next is the zone of hypertrophy.',
           'The zone of calcification. Next is the zone of ossification.',
           'The zone of hypertrophy. Next is the zone of proliferation.',
           'The zone of hypertrophy. Next is the zone of calcification.'],
  correct:3,
  why:'Enlarging chondrocytes define the zone of hypertrophy. Moving toward the diaphysis, the next zone is calcification, then ossification.',
  whyNot:['In the zone of proliferation the chondrocytes divide and stack. They enlarge in the next zone.',
          'In the zone of calcification the matrix calcifies. The cells enlarge one zone earlier.',
          'Right zone, wrong direction. Proliferation is on the epiphysis side of hypertrophy.',
          'Correct.'] },

{ id:'m2x-24', module:2, comp:'w2-ossification-growth',
  stem:'A newborn’s skull bones are separated by soft fontanelles, while the long bones of the limbs have cartilage growth plates. Which statement explains the difference?',
  options:['The skull bones form by endochondral ossification, and the fontanelles are their growth plates.',
           'The flat skull bones form by intramembranous ossification inside membranes, so they never have a cartilage model. The limb bones form by endochondral ossification and lengthen at hyaline growth plates.',
           'Both form by intramembranous ossification. The limb growth plates are leftover membrane.',
           'Both form by endochondral ossification. The skull growth plates close before birth.'],
  correct:1,
  why:'Flat skull bones form directly within connective tissue membranes, and fontanelles are the membrane gaps still left between them at birth. Long bones form by replacing a hyaline cartilage model, and they keep a hyaline growth plate where lengthening happens.',
  whyNot:['Fontanelles are fibrous membrane, not cartilage, and the flat skull bones never had a cartilage model.',
          'Correct.',
          'Growth plates are hyaline cartilage, the remnant of a cartilage model. That is endochondral, not intramembranous.',
          'The flat bones of the skull are intramembranous, not endochondral.'] },

{ id:'m2x-25', module:2, comp:'w2-skull-foramina',
  stem:'After a hard blow to the face, a patient loses the sense of smell. The fracture runs through the roof of the nasal cavity. Which bone and which feature are damaged?',
  options:['The ethmoid bone. The cribriform plate.',
           'The sphenoid bone. The sella turcica.',
           'The ethmoid bone. The perpendicular plate.',
           'The frontal bone. The supraorbital foramen.'],
  correct:0,
  why:'The cribriform plate of the ethmoid is the perforated horizontal plate in the roof of the nasal cavity. The olfactory nerve filaments pass through its foramina.',
  whyNot:['Correct.',
          'The sella turcica is the saddle on the sphenoid body that holds the pituitary gland.',
          'Right bone, wrong feature. The perpendicular plate is vertical and forms the upper nasal septum.',
          'The supraorbital foramen is above the orbit and passes the supraorbital nerve and vessels.'] },

{ id:'m2x-26', module:2, comp:'w2-sutures-fontanelles',
  stem:'A pediatrician feels a small soft spot at the back of a newborn’s head, where the sagittal suture meets the lambdoid suture. Which fontanelle is it, and which bones border it?',
  options:['The anterior fontanelle. The frontal and parietal bones.',
           'The posterolateral (mastoid) fontanelle. The temporal and occipital bones.',
           'The posterior fontanelle. The two parietal bones and the occipital bone.',
           'The posterior fontanelle. The frontal and occipital bones.'],
  correct:2,
  why:'The sagittal suture runs between the two parietal bones, and the lambdoid suture joins the parietals to the occipital. Where they meet is the posterior fontanelle, bordered by both parietals and the occipital. It closes by about 2 months.',
  whyNot:['The anterior fontanelle is at the top of the head, where the frontal and parietal bones meet. It is the largest and closes last.',
          'The mastoid fontanelles are on the sides of the head behind the ears, not in the midline where the sagittal suture ends.',
          'Correct.',
          'Right fontanelle, wrong bones. The frontal bone is at the front of the skull.'] },

{ id:'m2x-27', module:2, comp:'w2-regional-vertebrae',
  stem:'A vertebra has a heart-shaped body, a long spinous process angled sharply downward, and smooth facets on its body and transverse processes. What attaches at those facets, and which region is it from?',
  options:['The vertebral arteries. Cervical.',
           'The ribs. Thoracic.',
           'The hip bones. Lumbar.',
           'The skull. It is the atlas.'],
  correct:1,
  why:'Costal facets on the body and transverse processes are the giveaway for a thoracic vertebra. The head of a rib meets the body, and the tubercle of the rib meets the transverse process.',
  whyNot:['Cervical vertebrae have transverse foramina for the vertebral arteries, and their bodies are small and oval.',
          'Correct.',
          'Lumbar vertebrae have no costal facets, and the hip bones meet the sacrum, not a lumbar vertebra.',
          'The atlas has no body and no spinous process. It meets the occipital condyles.'] },

{ id:'m2x-28', module:2, comp:'w2-typical-vertebra',
  stem:'The spinal cord runs through an opening bounded by the vertebral body in front and the vertebral arch behind. Which parts make up that arch, and what is the opening called?',
  options:['The transverse processes and the body. The intervertebral foramen.',
           'The pedicles and laminae. The intervertebral foramen.',
           'The spinous and articular processes. The transverse foramen.',
           'The pedicles and laminae. The vertebral foramen.'],
  correct:3,
  why:'The pedicles connect the arch to the body and the laminae complete it behind. The body and arch enclose the vertebral foramen, and the stacked foramina form the vertebral canal that holds the spinal cord.',
  whyNot:['The body is not part of the arch, and the intervertebral foramina are the gaps between vertebrae where spinal nerves exit.',
          'Right arch, wrong opening. The intervertebral foramina are where spinal nerves exit between vertebrae.',
          'The spinous and articular processes project from the arch but do not form it. Transverse foramina are only in cervical vertebrae.',
          'Correct.'] },

{ id:'m2x-29', module:2, comp:'w2-arm-forearm',
  stem:'At the wrist, you can feel a styloid process on the thumb side. Which bone does it belong to, and what notch on that bone receives the head of the ulna?',
  options:['The radius. The ulnar notch.',
           'The ulna. The radial notch.',
           'The radius. The radial notch.',
           'The ulna. The trochlear notch.'],
  correct:0,
  why:'The radius is the lateral, thumb-side bone of the forearm. Its styloid process is on the lateral side at the wrist, and the ulnar notch on its medial side receives the head of the ulna, forming the distal radioulnar joint.',
  whyNot:['Correct.',
          'The ulnar styloid is on the medial, little-finger side. The radial notch is at the proximal end of the ulna and receives the head of the radius.',
          'Right bone, wrong notch. The radial notch belongs to the ulna, at the elbow end.',
          'The trochlear notch is at the proximal ulna and grips the trochlea of the humerus.'] },

{ id:'m2x-30', module:2, comp:'w2-hand-bones',
  stem:'A skateboarder falls on an outstretched hand. The most tender spot is in the anatomical snuffbox at the base of the thumb. Which carpal is most likely fractured, and which row is it in?',
  options:['The hamate. Distal row.',
           'The lunate. Distal row.',
           'The trapezium. Proximal row.',
           'The scaphoid. Proximal row.'],
  correct:3,
  why:'The scaphoid is the carpal most often fractured, usually from a fall on an outstretched hand, and tenderness in the anatomical snuffbox is the clue. It is the thumb-side bone of the proximal row.',
  whyNot:['The hamate is in the distal row on the little-finger side.',
          'The lunate is in the proximal row, and it is the carpal most often dislocated, not fractured.',
          'The trapezium is in the distal row.',
          'Correct.'] },

{ id:'m2x-31', module:2, comp:'w2-pelvic-girdle',
  stem:'Which set of features fits a typical female pelvis compared with a male pelvis?',
  options:['A narrower pubic angle, a deeper pelvis, and a smaller outlet.',
           'Heavier bone with more prominent markings and a deeper pelvis.',
           'Wider and shallower, with a broader pubic angle and a larger outlet.',
           'The same shape and outlet. Only the overall size differs.'],
  correct:2,
  why:'The female pelvis is wider and shallower, with a broader pubic angle and a larger outlet, adapted for childbirth.',
  whyNot:['Those features describe a typical male pelvis.',
          'Heavier bone with more prominent markings is typical of the male pelvis.',
          'Correct.',
          'The shape differs, not just the size. That is why the pelvis is used to estimate sex.'] },

{ id:'m2x-32', module:2, comp:'w2-leg-bones',
  stem:'A surgeon removes a length of bone from a patient’s leg to use as a graft, and the patient can still bear weight normally. Which bone was used, and which ankle bump belongs to it?',
  options:['The tibia. The medial malleolus.',
           'The fibula. The lateral malleolus.',
           'The fibula. The medial malleolus.',
           'The tibia. The lateral malleolus.'],
  correct:1,
  why:'The fibula does not bear body weight, which is why a length of it can be taken as a graft. It is the lateral bone of the leg and ends in the lateral malleolus.',
  whyNot:['The tibia is the weight-bearing bone. Removing part of it would affect weight bearing.',
          'Correct.',
          'Right bone, wrong bump. The medial malleolus belongs to the tibia.',
          'The tibia bears weight and ends in the medial malleolus.'] },

{ id:'m2x-33', module:2, comp:'w2-joint-classification',
  stem:'A tooth in its socket and the distal tibiofibular joint are both fibrous joints. How is each classified more specifically?',
  options:['Tooth: syndesmosis, amphiarthrosis. Distal tibiofibular: gomphosis, synarthrosis.',
           'Tooth: suture, synarthrosis. Distal tibiofibular: symphysis, amphiarthrosis.',
           'Both are gomphoses and both are synarthroses.',
           'Tooth: gomphosis, synarthrosis. Distal tibiofibular: syndesmosis, amphiarthrosis.'],
  correct:3,
  why:'A tooth held in its socket by the periodontal ligament is a gomphosis, and it is immovable. The distal tibia and fibula are united by a ligament with more space between them, a syndesmosis, which is slightly movable.',
  whyNot:['The two joint names are swapped between the tooth and the ankle.',
          'Sutures exist only between skull bones, and a symphysis is a cartilaginous joint.',
          'A gomphosis is specifically a peg in a socket. The tibia and fibula are joined by a ligament.',
          'Correct.'] },

{ id:'m2x-34', module:2, comp:'w2-synovial-types',
  stem:'When you shake your head no, the atlas turns around the dens of the axis. What type of synovial joint is this, and how does it move?',
  options:['Pivot. Uniaxial, rotation.',
           'Hinge. Uniaxial, flexion and extension.',
           'Plane. Gliding.',
           'Condyloid. Biaxial.'],
  correct:0,
  why:'A rounded surface turning within a ring of bone and ligament is a pivot joint. It allows rotation around one axis.',
  whyNot:['Correct.',
          'A hinge only flexes and extends, like the elbow. Shaking the head no is rotation.',
          'Plane joints glide, like the intercarpal joints.',
          'Condyloid joints move around two axes, like the radiocarpal joint.'] },

{ id:'m2x-35', module:2, comp:'w2-shoulder-knee',
  stem:'The shoulder is the most freely movable joint in the body, and it also dislocates easily. Which statement explains both?',
  options:['The glenoid cavity is deep, and strong ligaments hold the humerus firmly in place.',
           'The capsule is tight, and the labrum makes the socket shallower.',
           'The glenoid cavity is shallow for the large humeral head and the capsule is loose, so most stability comes from the rotator cuff muscles.',
           'It is a hinge joint, so it can only fail in one direction.'],
  correct:2,
  why:'A shallow glenoid cavity and a loose capsule let the humeral head move freely, and they also let it slip out. The ligaments add little strength, so the rotator cuff (supraspinatus, infraspinatus, teres minor, subscapularis) holds the head in place.',
  whyNot:['The glenoid cavity is shallow, and the shoulder ligaments add little strength.',
          'The capsule is loose, and the glenoid labrum slightly deepens the socket.',
          'Correct.',
          'The shoulder is a ball-and-socket joint. The knee is the modified hinge.'] },

{ id:'m2x-36', module:2, comp:'w2-shoulder-knee',
  stem:'A player takes a hard blow to the lateral side of a planted knee. Which three structures make up the unhappy triad that can tear together?',
  options:['The fibular collateral ligament, the lateral meniscus and the posterior cruciate ligament.',
           'The tibial collateral ligament, the medial meniscus and the anterior cruciate ligament.',
           'The patellar ligament, the lateral meniscus and the anterior cruciate ligament.',
           'The tibial collateral ligament, the lateral meniscus and the posterior cruciate ligament.'],
  correct:1,
  why:'A blow from the lateral side pushes the knee inward and stretches the medial side. The tibial (medial) collateral ligament tears, the medial meniscus tears with it, and the twisting tears the anterior cruciate ligament.',
  whyNot:['These are the lateral-side and posterior structures. A lateral blow stretches the medial side.',
          'Correct.',
          'The patellar ligament is on the front of the knee and is not part of the triad.',
          'Right collateral ligament, but the triad is the medial meniscus and the ACL.'] }
];
})();
