/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   bio004-mastery-exam.js

   The exam-format parts of the Mastery Check, laid out like the
   lecture exams: true or false with a fix for the bold term,
   matching, and a brain dump chosen from three. Multiple choice
   comes from the recall bank and bio004-mastery-items.js.

   B.exam[n] = { tf:[...], match:[...], dumps:[...] } per module.
   Module 1 reuses the hand-written Exam 1 Gap Check items.
   Module 2 is written for the skeletal system. A module with no
   block here runs its checks as multiple choice only.
   ============================================================ */
(function(){
var B = window.BIO004_MASTERY = window.BIO004_MASTERY || {};
B.exam = B.exam || {};

B.exam[1] = {
 "source": "Exam 1 Gap Check items, moved here unchanged",
 "tf": [
  {
   "id": "m1tf-1",
   "comp": "w1-serous-membranes",
   "st": "During thoracic surgery, the first serous layer an instrument meets after passing through the body wall is the [[visceral]] pleura.",
   "ans": false,
   "accept": [
    "parietal"
   ]
  },
  {
   "id": "m1tf-2",
   "comp": "w1-epidermal-strata",
   "st": "A scrape that removes only the stratum corneum still leaves the dividing cells of the stratum [[basale]] untouched.",
   "ans": true,
   "accept": []
  },
  {
   "id": "m1tf-3",
   "comp": "w1-planes-sections",
   "st": "A cut that separates a patient's anterior chest wall from their back follows a [[transverse]] plane.",
   "ans": false,
   "accept": [
    "frontal",
    "coronal"
   ]
  },
  {
   "id": "m1tf-4",
   "comp": "w1-mediastinum",
   "st": "A mass in the [[mediastinum]] can press on both the heart and the esophagus without entering either pleural cavity.",
   "ans": true,
   "accept": []
  },
  {
   "id": "m1tf-5",
   "comp": "w1-organelles",
   "st": "In a protein-exporting cell, the vesicles that finally carry finished product to the cell surface bud from the [[rough ER]].",
   "ans": false,
   "accept": [
    "golgi",
    "golgiapparatus",
    "thegolgi"
   ]
  },
  {
   "id": "m1tf-6",
   "comp": "w1-epithelial-id",
   "st": "An epithelium built to survive constant abrasion, like the lining of the mouth, is stratified [[squamous]].",
   "ans": true,
   "accept": []
  },
  {
   "id": "m1tf-7",
   "comp": "w1-dermis-layers",
   "st": "The blood that beads up at a shallow cut comes from vessels running through the [[epidermis]].",
   "ans": false,
   "accept": [
    "dermis"
   ]
  },
  {
   "id": "m1tf-8",
   "comp": "w1-connective-id",
   "st": "A firm tissue whose cells sit in lacunae within an avascular matrix is [[bone]].",
   "ans": false,
   "accept": [
    "cartilage"
   ]
  },
  {
   "id": "m1tf-9",
   "comp": "w1-cell-junctions",
   "st": "Because of [[tight]] junctions, a swallowed substance cannot slip between the cells lining the intestine.",
   "ans": true,
   "accept": []
  },
  {
   "id": "m1tf-10",
   "comp": "w1-regional-terms",
   "st": "A routine blood draw at the anterior surface of the elbow is taken from the [[antecubital]] region.",
   "ans": true,
   "accept": []
  }
 ],
 "match": [
  {
   "id": "m1m-regions",
   "title": "Body regions",
   "pairs": [
    [
     "Popliteal",
     "The back of the knee",
     "w1-regional-terms"
    ],
    [
     "Axillary",
     "The armpit",
     "w1-regional-terms"
    ],
    [
     "Lumbar",
     "The lower back, between the ribs and the hip",
     "w1-regional-terms"
    ],
    [
     "Carpal",
     "The wrist",
     "w1-regional-terms"
    ],
    [
     "Cervical",
     "The neck",
     "w1-regional-terms"
    ]
   ]
  },
  {
   "id": "m1m-organelles",
   "title": "Cell organelles",
   "pairs": [
    [
     "Mitochondrion",
     "Makes most of the cell's ATP",
     "w1-organelles"
    ],
    [
     "Lysosome",
     "A sac of digestive enzymes that breaks down worn-out parts",
     "w1-organelles"
    ],
    [
     "Golgi apparatus",
     "Modifies, packages, and ships proteins",
     "w1-organelles"
    ],
    [
     "Nucleolus",
     "Assembles ribosomal subunits",
     "w1-organelles"
    ],
    [
     "Smooth ER",
     "Builds lipids and detoxifies drugs",
     "w1-organelles"
    ]
   ]
  }
 ],
 "dumps": [
  {
   "id": "m1d-A",
   "area": "cavities",
   "title": "Abdominopelvic regions",
   "prompt": "List the nine abdominopelvic regions in their three-by-three grid positions, top row first.",
   "key": [
    "Right hypochondriac",
    "Epigastric",
    "Left hypochondriac",
    "Right lumbar",
    "Umbilical",
    "Left lumbar",
    "Right iliac (inguinal)",
    "Hypogastric (pubic)",
    "Left iliac (inguinal)"
   ],
   "comps": [
    "w1-abdominopelvic-map"
   ]
  },
  {
   "id": "m1d-B",
   "area": "cell",
   "title": "Cell structures",
   "prompt": "List as many organelles and cell structures as you can, each with its one-line job. Target: ten.",
   "key": [
    "Nucleus",
    "Nucleolus",
    "Rough ER",
    "Smooth ER",
    "Golgi apparatus",
    "Mitochondrion",
    "Lysosome",
    "Peroxisome",
    "Ribosome",
    "Centrosome and centrioles",
    "Cytoskeleton",
    "Plasma membrane"
   ],
   "comps": [
    "w1-organelles",
    "w1-nucleus",
    "w1-generalized-cell"
   ]
  },
  {
   "id": "m1d-C",
   "area": "skin",
   "title": "Skin layers",
   "prompt": "List the five epidermal strata from deep to superficial, then the two layers of the dermis.",
   "key": [
    "Stratum basale",
    "Stratum spinosum",
    "Stratum granulosum",
    "Stratum lucidum",
    "Stratum corneum",
    "Papillary dermis",
    "Reticular dermis"
   ],
   "comps": [
    "w1-skin-layers",
    "w1-epidermal-strata",
    "w1-dermis-layers"
   ]
  }
 ]
};

/* ------------------------------------------------------------
   MODULE 2. Skeletal system. True or false with a fix, matching
   sets, and brain dump prompts, in the format of the lecture exams.

   True or false: [[ ]] marks the bold key term. A false statement is
   false because of that term, and accept lists what the student may
   write to fix it (compared with case, spaces and punctuation
   removed). About half are true.
   Matching: each set holds more pairs than an exam uses; an exam
   draws five. Every description fits only one term in its set.
   Brain dumps: area keeps the three prompts on an exam in three
   different parts of the module.
   ------------------------------------------------------------ */
B.exam[2] = {
tf: [
 {id:'m2tf-01', comp:'w2-cartilage-types', st:'The external ear and the epiglottis are made of [[elastic]] cartilage.', ans:true, accept:[], why:'Elastic fibers in the matrix let both structures bend and spring back.'},
 {id:'m2tf-02', comp:'w2-cartilage-types', st:'The intervertebral discs and the knee menisci are made of [[hyaline]] cartilage.', ans:false, accept:['fibrocartilage','fibrocartilaginous','fibro','fibrouscartilage'], why:'Both are fibrocartilage, with thick collagen bundles that absorb shock. Hyaline cartilage caps the ends of long bones and forms the costal cartilages.'},
 {id:'m2tf-03', comp:'w2-cartilage-growth', st:'In [[appositional]] growth, cartilage expands from within as chondrocytes divide inside the matrix.', ans:false, accept:['interstitial'], why:'Growth from within is interstitial. Appositional growth adds new cartilage at the outer surface, from the perichondrium.'},
 {id:'m2tf-04', comp:'w2-bone-shapes', st:'The patella is the classic example of a [[sesamoid]] bone, a bone that forms within a tendon.', ans:true, accept:[], why:'The patella forms within the quadriceps tendon.'},
 {id:'m2tf-05', comp:'w2-bone-shapes', st:'Carpals and tarsals are classified as [[flat]] bones.', ans:false, accept:['short'], why:'Carpals and tarsals are roughly cube-shaped short bones. Flat bones include the sternum, ribs and most skull bones.'},
 {id:'m2tf-06', comp:'w2-long-bone-gross', st:'In an adult long bone, yellow marrow fills the [[medullary cavity]] of the shaft.', ans:true, accept:[], why:'The medullary cavity is the hollow core of the diaphysis, and in the adult shaft it stores fat as yellow marrow.'},
 {id:'m2tf-07', comp:'w2-long-bone-gross', st:'The thin membrane that lines the internal surfaces of a bone, including the medullary cavity, is the [[periosteum]].', ans:false, accept:['endosteum'], why:'The endosteum lines internal surfaces. The periosteum covers the outer surface.'},
 {id:'m2tf-08', comp:'w2-long-bone-gross', st:'Perforating fibers anchor the [[periosteum]] into the underlying bone.', ans:true, accept:[], why:'Perforating (Sharpey) fibers are collagen bundles that tie the periosteum to the bone beneath it.'},
 {id:'m2tf-09', comp:'w2-compact-spongy', st:'Osteocytes in neighboring lacunae stay connected through tiny channels called [[perforating canals]].', ans:false, accept:['canaliculi','canaliculus'], why:'Canaliculi connect lacunae. Perforating canals are larger channels that run crosswise and link central canals.'},
 {id:'m2tf-10', comp:'w2-compact-spongy', st:'Spongy bone is built from [[trabeculae]], and it has no osteons.', ans:true, accept:[], why:'Spongy bone is a lattice of trabeculae with red marrow in the spaces and no osteons.'},
 {id:'m2tf-11', comp:'w2-compact-spongy', st:'The central canal of an osteon is also called the [[Volkmann]] canal.', ans:false, accept:['haversian','haversiancanal'], why:'The central canal is the Haversian canal. The Volkmann canal is the perforating canal that runs crosswise.'},
 {id:'m2tf-12', comp:'w2-bone-cells', st:'The bone cell that breaks down and resorbs bone matrix is the [[osteoblast]].', ans:false, accept:['osteoclast','osteoclasts'], why:'The osteoclast resorbs bone. The osteoblast builds new matrix.'},
 {id:'m2tf-13', comp:'w2-bone-cells', st:'An osteocyte is a mature [[osteoblast]] that has become surrounded by the matrix it made.', ans:true, accept:[], why:'Osteogenic cell, then osteoblast, then osteocyte in a lacuna.'},
 {id:'m2tf-14', comp:'w2-ossification-growth', st:'The flat bones of the skull form by [[endochondral]] ossification.', ans:false, accept:['intramembranous'], why:'Flat skull bones form by intramembranous ossification, directly within a connective tissue membrane. Endochondral ossification replaces a hyaline cartilage model.'},
 {id:'m2tf-15', comp:'w2-ossification-growth', st:'In the growth plate, chondrocytes divide and stack into columns in the zone of [[hypertrophy]].', ans:false, accept:['proliferation','proliferative','proliferating'], why:'Dividing and stacking happens in the zone of proliferation. In the zone of hypertrophy the chondrocytes enlarge.'},
 {id:'m2tf-16', comp:'w2-ossification-growth', st:'The zone of the growth plate closest to the epiphysis is the zone of [[resting]] cartilage.', ans:true, accept:[], why:'The resting zone anchors the growth plate to the epiphysis.'},
 {id:'m2tf-17', comp:'w2-ossification-growth', st:'A bone grows wider by [[interstitial]] growth beneath the periosteum.', ans:false, accept:['appositional'], why:'Growth in width is appositional, at the outer surface beneath the periosteum. Interstitial growth lengthens the bone at the epiphyseal plate.'},
 {id:'m2tf-18', comp:'w2-skull-bones', st:'The [[sphenoid]] bone articulates with every other cranial bone.', ans:true, accept:[], why:'The sphenoid is the central wedge of the cranial base.'},
 {id:'m2tf-19', comp:'w2-skull-bones', st:'The [[maxilla]] is the only freely movable bone of the skull.', ans:false, accept:['mandible','lowerjaw','mandibula'], why:'The mandible, the lower jaw, is the only freely movable skull bone. The maxillae form the upper jaw.'},
 {id:'m2tf-20', comp:'w2-skull-markings', st:'The pituitary gland sits in the [[sella turcica]] of the sphenoid bone.', ans:true, accept:[], why:'The sella turcica is the saddle on the body of the sphenoid.'},
 {id:'m2tf-21', comp:'w2-skull-markings', st:'The mastoid process is a marking of the [[occipital]] bone.', ans:false, accept:['temporal'], why:'The mastoid process is the bump behind the ear on the temporal bone.'},
 {id:'m2tf-22', comp:'w2-sutures-fontanelles', st:'The [[sagittal]] suture joins the two parietal bones.', ans:true, accept:[], why:'The sagittal suture runs along the midline of the skull roof.'},
 {id:'m2tf-23', comp:'w2-sutures-fontanelles', st:'The [[coronal]] suture joins the parietal bones to the occipital bone.', ans:false, accept:['lambdoid','lambdoidal'], why:'The lambdoid suture joins the parietals to the occipital. The coronal suture joins the frontal bone to the parietals.'},
 {id:'m2tf-24', comp:'w2-sutures-fontanelles', st:'The [[posterior]] fontanelle is the largest fontanelle and the last to close.', ans:false, accept:['anterior'], why:'The anterior fontanelle is the largest and closes at about 18 to 24 months. The posterior fontanelle closes at about 2 months.'},
 {id:'m2tf-25', comp:'w2-skull-cavities', st:'The hard palate is formed by the maxillae in front and the [[palatine]] bones behind.', ans:true, accept:[], why:'The palatine processes of the maxillae form the front of the hard palate and the palatine bones form the back.'},
 {id:'m2tf-26', comp:'w2-skull-cavities', st:'The bony nasal septum is formed by the vomer and the perpendicular plate of the [[sphenoid]].', ans:false, accept:['ethmoid'], why:'The perpendicular plate belongs to the ethmoid bone.'},
 {id:'m2tf-27', comp:'w2-skull-foramina', st:'The medulla oblongata and the vertebral arteries pass through the [[foramen magnum]].', ans:true, accept:[], why:'The foramen magnum is the large opening in the occipital bone, where the brainstem continues into the spinal cord.'},
 {id:'m2tf-28', comp:'w2-skull-foramina', st:'The internal carotid artery passes through the [[jugular foramen]].', ans:false, accept:['carotidcanal','carotid'], why:'The internal carotid artery passes through the carotid canal of the temporal bone. The internal jugular vein passes through the jugular foramen.'},
 {id:'m2tf-29', comp:'w2-spine-regions', st:'The lumbar region of the vertebral column has [[five]] vertebrae.', ans:true, accept:[], why:'L1 to L5. Cervical has 7 and thoracic has 12.'},
 {id:'m2tf-30', comp:'w2-spine-regions', st:'The thoracic and sacral curvatures are [[secondary]] curvatures.', ans:false, accept:['primary'], why:'The thoracic and sacral curvatures are present at birth, so they are primary. The cervical and lumbar curvatures are secondary.'},
 {id:'m2tf-31', comp:'w2-typical-vertebra', st:'The soft, gel-like core of an intervertebral disc is the [[anulus fibrosus]].', ans:false, accept:['nucleuspulposus','nucleus'], why:'The core is the nucleus pulposus. The anulus fibrosus is the tough outer ring.'},
 {id:'m2tf-32', comp:'w2-regional-vertebrae', st:'Transverse foramina are found only in [[cervical]] vertebrae.', ans:true, accept:[], why:'Transverse foramina pass the vertebral arteries and are the giveaway for a cervical vertebra.'},
 {id:'m2tf-33', comp:'w2-regional-vertebrae', st:'The [[axis]] is a ring with no body and no spinous process.', ans:false, accept:['atlas','c1'], why:'That describes the atlas, C1. The axis, C2, bears the dens.'},
 {id:'m2tf-34', comp:'w2-thoracic-cage', st:'Ribs 11 and 12 are called [[floating]] ribs because they have no anterior attachment.', ans:true, accept:[], why:'They are a subset of the false ribs.'},
 {id:'m2tf-35', comp:'w2-thoracic-cage', st:'The sternal angle is where the manubrium meets the [[xiphoid process]].', ans:false, accept:['body','bodyofthesternum','bodyofsternum','sternalbody','gladiolus'], why:'The sternal angle is where the manubrium meets the body of the sternum, level with the second rib.'},
 {id:'m2tf-36', comp:'w2-pectoral-girdle', st:'The [[clavicle]] is the only bony link between the upper limb and the axial skeleton.', ans:true, accept:[], why:'The clavicle meets the manubrium at the sternoclavicular joint.'},
 {id:'m2tf-37', comp:'w2-pectoral-girdle', st:'The head of the humerus fits into the [[acromion]] of the scapula.', ans:false, accept:['glenoidcavity','glenoid','glenoidfossa'], why:'The humeral head fits into the glenoid cavity. The acromion is the point of the shoulder.'},
 {id:'m2tf-38', comp:'w2-arm-forearm', st:'The [[trochlea]] of the humerus articulates with the head of the radius.', ans:false, accept:['capitulum','capitellum'], why:'The capitulum is lateral and meets the radius. The trochlea is medial and meets the ulna.'},
 {id:'m2tf-39', comp:'w2-arm-forearm', st:'The [[radius]] is the lateral bone of the forearm, on the thumb side.', ans:true, accept:[], why:'In anatomical position the radius is lateral and the ulna is medial.'},
 {id:'m2tf-40', comp:'w2-hand-bones', st:'The [[scaphoid]] is the carpal bone most often fractured.', ans:true, accept:[], why:'Usually from a fall on an outstretched hand. Tenderness in the anatomical snuffbox is the clue.'},
 {id:'m2tf-41', comp:'w2-hand-bones', st:'The thumb has [[three]] phalanges.', ans:false, accept:['two','2'], why:'The thumb, the pollex, has two phalanges. Each of the other fingers has three.'},
 {id:'m2tf-42', comp:'w2-bone-markings-vocab', st:'A [[fossa]] is a shallow basin in a bone, such as the olecranon fossa.', ans:true, accept:[], why:'A fossa is a depression.'},
 {id:'m2tf-43', comp:'w2-bone-markings-vocab', st:'A groove on a bone, such as the one between the humeral tubercles, is called a [[tubercle]].', ans:false, accept:['sulcus','groove'], why:'A groove is a sulcus, as in the intertubercular sulcus. A tubercle is a small rounded bump.'},
 {id:'m2tf-44', comp:'w2-pelvic-girdle', st:'When you sit, your weight rests on the [[ischial tuberosities]].', ans:true, accept:[], why:'The ischial tuberosity is the strong, roughened knob of the ischium.'},
 {id:'m2tf-45', comp:'w2-pelvic-girdle', st:'The obturator foramen is framed by the ischium and the [[ilium]].', ans:false, accept:['pubis','pubicbone','pubic'], why:'The obturator foramen is framed by the ischium and the pubis.'},
 {id:'m2tf-46', comp:'w2-thigh-knee', st:'The [[greater trochanter]] is the large lateral projection near the proximal end of the femur.', ans:true, accept:[], why:'The lesser trochanter is the smaller projection on the medial side.'},
 {id:'m2tf-47', comp:'w2-thigh-knee', st:'The linea aspera is a rough ridge running down the [[anterior]] shaft of the femur.', ans:false, accept:['posterior'], why:'The linea aspera runs down the posterior shaft.'},
 {id:'m2tf-48', comp:'w2-leg-bones', st:'The [[fibula]] is the weight-bearing bone of the leg.', ans:false, accept:['tibia'], why:'The tibia bears the weight. The fibula is slender and does not.'},
 {id:'m2tf-49', comp:'w2-leg-bones', st:'The lateral malleolus is part of the [[fibula]].', ans:true, accept:[], why:'The medial malleolus belongs to the tibia.'},
 {id:'m2tf-50', comp:'w2-foot-bones', st:'The [[talus]] is the heel bone, the largest tarsal.', ans:false, accept:['calcaneus','calcaneum','heelbone'], why:'The calcaneus is the heel bone. The talus articulates with the tibia and fibula.'},
 {id:'m2tf-51', comp:'w2-foot-bones', st:'Each foot has [[seven]] tarsal bones.', ans:true, accept:[], why:'Talus, calcaneus, navicular, cuboid and three cuneiforms.'},
 {id:'m2tf-52', comp:'w2-joint-classification', st:'All synovial joints are functionally classified as [[diarthroses]].', ans:true, accept:[], why:'Every synovial joint is freely movable.'},
 {id:'m2tf-53', comp:'w2-joint-classification', st:'A suture between adult skull bones is an [[amphiarthrosis]].', ans:false, accept:['synarthrosis','synarthroses','synarthrotic'], why:'An adult suture is immovable, a synarthrosis.'},
 {id:'m2tf-54', comp:'w2-fibrous-cartilaginous', st:'The epiphyseal plate is a [[symphysis]], a joint joined by hyaline cartilage.', ans:false, accept:['synchondrosis'], why:'A hyaline cartilage joint is a synchondrosis. A symphysis is joined by fibrocartilage.'},
 {id:'m2tf-55', comp:'w2-fibrous-cartilaginous', st:'A tooth held in its socket by the periodontal ligament is a [[gomphosis]].', ans:true, accept:[], why:'A gomphosis is a peg in a socket.'},
 {id:'m2tf-56', comp:'w2-synovial-structure', st:'Synovial fluid is secreted by the [[synovial membrane]], the inner layer of the articular capsule.', ans:true, accept:[], why:'The fibrous membrane is the outer layer.'},
 {id:'m2tf-57', comp:'w2-synovial-structure', st:'The articular cartilage covering the bone ends in a synovial joint is [[fibrocartilage]].', ans:false, accept:['hyaline','hyalinecartilage'], why:'Articular cartilage is hyaline cartilage.'},
 {id:'m2tf-58', comp:'w2-joint-movements', st:'Moving a limb away from the midline of the body is [[adduction]].', ans:false, accept:['abduction'], why:'Away from the midline is abduction. Adduction is toward the midline.'},
 {id:'m2tf-59', comp:'w2-joint-movements', st:'Turning the sole of the foot inward is [[inversion]].', ans:true, accept:[], why:'Turning it outward is eversion.'},
 {id:'m2tf-60', comp:'w2-synovial-types', st:'The shoulder and hip are [[hinge]] joints.', ans:false, accept:['ballandsocket','ballsocket','balljoint','spheroidal'], why:'They are ball-and-socket joints, which move around three axes.'},
 {id:'m2tf-61', comp:'w2-synovial-types', st:'The carpometacarpal joint of the thumb is a [[saddle]] joint.', ans:true, accept:[], why:'Each surface is both concave and convex.'},
 {id:'m2tf-62', comp:'w2-shoulder-knee', st:'The [[posterior cruciate]] ligament stops the tibia from sliding forward on the femur.', ans:false, accept:['anteriorcruciate','anteriorcruciateligament','acl','anterior'], why:'The anterior cruciate ligament stops forward sliding. The posterior cruciate stops backward sliding.'},
 {id:'m2tf-63', comp:'w2-shoulder-knee', st:'Most of the stability of the [[shoulder]] joint comes from the rotator cuff muscles.', ans:true, accept:[], why:'The shoulder ligaments add little strength.'}
],
match: [
 {id:'m2m-cells', title:'Bone and cartilage cells', pairs:[
  ['Osteogenic cell','The stem cell that divides to make osteoblasts','w2-bone-cells'],
  ['Osteoblast','Builds and secretes new bone matrix','w2-bone-cells'],
  ['Osteocyte','Maintains bone matrix from inside a lacuna','w2-bone-cells'],
  ['Osteoclast','Large multinucleated cell that resorbs bone','w2-bone-cells'],
  ['Chondrocyte','The cartilage cell','w2-cartilage-types']]},
 {id:'m2m-zones', title:'Growth plate zones', pairs:[
  ['Zone of resting cartilage','Anchors the growth plate to the epiphysis','w2-ossification-growth'],
  ['Zone of proliferation','Chondrocytes divide and stack into columns','w2-ossification-growth'],
  ['Zone of hypertrophy','Chondrocytes enlarge','w2-ossification-growth'],
  ['Zone of calcification','The cartilage matrix calcifies','w2-ossification-growth'],
  ['Zone of ossification','Cartilage is replaced by bone next to the diaphysis','w2-ossification-growth']]},
 {id:'m2m-longbone', title:'Parts of a long bone', pairs:[
  ['Diaphysis','The shaft','w2-long-bone-gross'],
  ['Epiphysis','An expanded end of the bone','w2-long-bone-gross'],
  ['Metaphysis','The region between the shaft and an end, where the growth plate sits','w2-long-bone-gross'],
  ['Medullary cavity','The hollow core of the shaft that holds marrow','w2-long-bone-gross'],
  ['Articular cartilage','Hyaline cartilage capping the end where the bone meets another bone','w2-long-bone-gross'],
  ['Periosteum','The membrane covering the outer surface','w2-long-bone-gross'],
  ['Endosteum','The membrane lining the internal surfaces','w2-long-bone-gross'],
  ['Epiphyseal line','The remnant of the growth plate after growth in length ends','w2-long-bone-gross']]},
 {id:'m2m-osteon', title:'Compact and spongy bone', pairs:[
  ['Central canal','Carries blood vessels and nerves at the core of an osteon','w2-compact-spongy'],
  ['Perforating canal','Runs crosswise and links central canals','w2-compact-spongy'],
  ['Lamellae','Concentric rings of bony matrix','w2-compact-spongy'],
  ['Lacunae','Small cavities that each hold one osteocyte','w2-compact-spongy'],
  ['Canaliculi','Tiny channels that connect lacunae','w2-compact-spongy'],
  ['Trabeculae','The bony struts of spongy bone','w2-compact-spongy']]},
 {id:'m2m-foramina', title:'Skull openings and what passes through', pairs:[
  ['Foramen magnum','The spinal cord and the vertebral arteries','w2-skull-foramina'],
  ['Optic canal','The optic nerve','w2-skull-foramina'],
  ['Cribriform foramina','The olfactory nerve filaments','w2-skull-foramina'],
  ['Foramen ovale','The mandibular branch of the trigeminal nerve, leaving the cranium','w2-skull-foramina'],
  ['Carotid canal','The internal carotid artery','w2-skull-foramina'],
  ['Jugular foramen','The internal jugular vein','w2-skull-foramina'],
  ['Mental foramen','The nerve and vessels to the chin and lower lip','w2-skull-foramina'],
  ['Internal acoustic meatus','The nerves for hearing and facial movement','w2-skull-foramina']]},
 {id:'m2m-sutures', title:'Sutures and the pterion', pairs:[
  ['Coronal suture','Joins the frontal bone and the two parietal bones','w2-sutures-fontanelles'],
  ['Sagittal suture','Joins the two parietal bones','w2-sutures-fontanelles'],
  ['Lambdoid suture','Joins the parietal bones and the occipital bone','w2-sutures-fontanelles'],
  ['Squamous suture','Joins a parietal bone and a temporal bone','w2-sutures-fontanelles'],
  ['Pterion','Where the frontal, parietal, temporal and sphenoid bones meet','w2-sutures-fontanelles']]},
 {id:'m2m-skullmarks', title:'Skull markings', pairs:[
  ['Sella turcica','Saddle on the sphenoid that cradles the pituitary gland','w2-skull-markings'],
  ['Crista galli','Upright ridge on the ethmoid where the falx cerebri attaches','w2-skull-markings'],
  ['Mastoid process','Bump behind the ear on the temporal bone','w2-skull-markings'],
  ['Occipital condyles','Paired knobs that articulate with the atlas','w2-skull-markings'],
  ['Mandibular fossa','Socket on the temporal bone that receives the mandible','w2-skull-markings'],
  ['Coronoid process','Anterior process of the mandible where the temporalis attaches','w2-skull-markings'],
  ['Glabella','Smooth area between the eyebrow ridges','w2-skull-markings']]},
 {id:'m2m-vertebrae', title:'The vertebral column', pairs:[
  ['Atlas','C1, a ring with no body and no spinous process','w2-regional-vertebrae'],
  ['Axis','C2, bears the dens','w2-regional-vertebrae'],
  ['Vertebra prominens','C7, with a long spinous process felt at the base of the neck','w2-regional-vertebrae'],
  ['Thoracic vertebra','Has costal facets where the ribs articulate','w2-regional-vertebrae'],
  ['Lumbar vertebra','Thick, kidney-shaped body with no costal facets and no transverse foramina','w2-regional-vertebrae'],
  ['Sacrum','Five fused vertebrae wedged between the hip bones','w2-regional-vertebrae'],
  ['Coccyx','Four fused vertebrae, the tailbone','w2-regional-vertebrae']]},
 {id:'m2m-upper', title:'Upper limb markings', pairs:[
  ['Acromion','Flat process at the tip of the scapular spine, the point of the shoulder','w2-pectoral-girdle'],
  ['Coracoid process','Hook-like anterior process of the scapula','w2-pectoral-girdle'],
  ['Glenoid cavity','Shallow socket that receives the head of the humerus','w2-pectoral-girdle'],
  ['Surgical neck','Narrowing below the humeral tubercles, a common fracture site','w2-arm-forearm'],
  ['Deltoid tuberosity','Roughened ridge on the humeral shaft where the deltoid attaches','w2-arm-forearm'],
  ['Capitulum','Lateral knob of the distal humerus that meets the radius','w2-arm-forearm'],
  ['Trochlea','Medial spool of the distal humerus that meets the ulna','w2-arm-forearm'],
  ['Olecranon','The point of the elbow, on the ulna','w2-arm-forearm']]},
 {id:'m2m-lower', title:'Lower limb markings', pairs:[
  ['Acetabulum','Cup where the ilium, ischium and pubis meet','w2-pelvic-girdle'],
  ['Iliac crest','Curved upper ridge of the ilium','w2-pelvic-girdle'],
  ['Ischial tuberosity','Roughened knob you sit on','w2-pelvic-girdle'],
  ['Greater trochanter','Large lateral projection near the proximal femur','w2-thigh-knee'],
  ['Linea aspera','Rough ridge down the posterior shaft of the femur','w2-thigh-knee'],
  ['Tibial tuberosity','Anchors the patellar ligament on the front of the tibia','w2-leg-bones'],
  ['Medial malleolus','The medial bump of the ankle, on the tibia','w2-leg-bones'],
  ['Calcaneus','The heel bone, the largest tarsal','w2-foot-bones']]},
 {id:'m2m-fibcart', title:'Fibrous and cartilaginous joints', pairs:[
  ['Suture','Fibrous joint found only between skull bones','w2-fibrous-cartilaginous'],
  ['Gomphosis','A peg held in a socket by the periodontal ligament','w2-fibrous-cartilaginous'],
  ['Syndesmosis','Bones united by a ligament, as at the distal tibia and fibula','w2-fibrous-cartilaginous'],
  ['Synchondrosis','Bones joined by hyaline cartilage, as at the epiphyseal plate','w2-fibrous-cartilaginous'],
  ['Symphysis','Bones joined by a disc of fibrocartilage in the midline','w2-fibrous-cartilaginous']]},
 {id:'m2m-syntypes', title:'Synovial joint types', pairs:[
  ['Plane joint','The intercarpal joints, which glide','w2-synovial-types'],
  ['Hinge joint','The elbow and the interphalangeal joints','w2-synovial-types'],
  ['Pivot joint','The atlantoaxial joint','w2-synovial-types'],
  ['Condyloid joint','The radiocarpal joint','w2-synovial-types'],
  ['Saddle joint','The carpometacarpal joint of the thumb','w2-synovial-types'],
  ['Ball-and-socket joint','The shoulder and the hip','w2-synovial-types']]},
 {id:'m2m-moves', title:'Movements at synovial joints', pairs:[
  ['Flexion','Decreases the angle between bones','w2-joint-movements'],
  ['Extension','Increases the angle between bones','w2-joint-movements'],
  ['Abduction','Movement away from the midline','w2-joint-movements'],
  ['Adduction','Movement toward the midline','w2-joint-movements'],
  ['Rotation','A bone turns around its own long axis','w2-joint-movements'],
  ['Circumduction','The distal end of a part moves in a circle','w2-joint-movements'],
  ['Pronation','Turning the palm to face posteriorly','w2-joint-movements'],
  ['Opposition','Moving the thumb across the palm to touch the fingertips','w2-joint-movements']]},
 {id:'m2m-shoulderknee', title:'The shoulder and the knee', pairs:[
  ['Anterior cruciate ligament','Stops the tibia from sliding forward on the femur','w2-shoulder-knee'],
  ['Posterior cruciate ligament','Stops the tibia from sliding backward on the femur','w2-shoulder-knee'],
  ['Medial meniscus','C-shaped fibrocartilage disc on the medial side of the knee','w2-shoulder-knee'],
  ['Lateral meniscus','More circular, O-shaped disc on the lateral side of the knee','w2-shoulder-knee'],
  ['Glenoid labrum','Fibrocartilage rim that slightly deepens the glenoid cavity','w2-shoulder-knee'],
  ['Rotator cuff','Muscles that hold the humeral head in the glenoid cavity','w2-shoulder-knee'],
  ['Patellar ligament','Runs from the patella to the tibial tuberosity','w2-shoulder-knee']]}
],
dumps: [
 {id:'m2d-osteon', area:'bone', title:'Compact bone and the bone cells', comps:['w2-compact-spongy','w2-bone-cells'],
  prompt:'Draw an osteon in cross section and label its parts. Then name the four bone cells with the job of each, and say which one comes from a different cell line.',
  key:['Central canal carrying vessels and nerves','Perforating canal running crosswise','Concentric lamellae','Lacunae holding osteocytes','Canaliculi connecting the lacunae','Osteogenic cell divides to make osteoblasts','Osteoblast builds new matrix','Osteocyte maintains the matrix','Osteoclast resorbs bone and comes from a blood-cell line']},
 {id:'m2d-growth', area:'bone', title:'How bone forms and grows', comps:['w2-ossification-growth','w2-cartilage-growth'],
  prompt:'Explain how bones form and how a long bone grows. Name both ossification routes with an example of each, then list the five growth plate zones in order from the epiphysis.',
  key:['Intramembranous: flat skull bones form within a membrane','Endochondral: most bones, such as the femur, where bone replaces a hyaline cartilage model','Zone of resting cartilage','Zone of proliferation','Zone of hypertrophy','Zone of calcification','Zone of ossification','Interstitial growth lengthens the bone at the epiphyseal plate; appositional growth widens it beneath the periosteum','The plate closes to leave the epiphyseal line']},
 {id:'m2d-skull', area:'axial', title:'The skull', comps:['w2-skull-bones','w2-sutures-fontanelles'],
  prompt:'List the eight cranial bones and the fourteen facial bones, then the four major sutures with the bones each one joins.',
  key:['Frontal, occipital, sphenoid, ethmoid','Two parietals and two temporals','Maxillae, palatine, zygomatic, nasal and lacrimal bones, all paired','Inferior nasal conchae, paired','Vomer and mandible, single','Coronal: frontal and parietals','Sagittal: the two parietals','Lambdoid: parietals and occipital','Squamous: parietal and temporal']},
 {id:'m2d-spine', area:'axial', title:'The vertebral column and thoracic cage', comps:['w2-spine-regions','w2-regional-vertebrae','w2-thoracic-cage'],
  prompt:'Describe the vertebral column: each region with its number of vertebrae, the four curvatures as primary or secondary, and the feature that identifies a cervical, a thoracic and a lumbar vertebra. Finish with the true, false and floating ribs.',
  key:['Cervical 7, thoracic 12, lumbar 5','Sacrum 5 fused, coccyx 4 fused','Thoracic and sacral curvatures are primary','Cervical and lumbar curvatures are secondary','Cervical: transverse foramina for the vertebral arteries','Thoracic: costal facets for the ribs','Lumbar: massive kidney-shaped body','True ribs 1 to 7, false ribs 8 to 12, floating ribs 11 and 12']},
 {id:'m2d-upper', area:'appendicular', title:'The upper limb', comps:['w2-pectoral-girdle','w2-arm-forearm','w2-hand-bones'],
  prompt:'Trace the upper limb from the clavicle to the fingertips. Name each bone and at least one marking on it, say which forearm bone is lateral, and list the carpals in their two rows.',
  key:['Clavicle with its sternal and acromial ends','Scapula with acromion, coracoid process and glenoid cavity','Humerus with head, surgical neck, tubercles, capitulum and trochlea','Radius is lateral, with its head, radial tuberosity and styloid process','Ulna is medial, with the olecranon and trochlear notch','Proximal carpals: scaphoid, lunate, triquetrum, pisiform','Distal carpals: trapezium, trapezoid, capitate, hamate','Five metacarpals and fourteen phalanges, two in the thumb']},
 {id:'m2d-lower', area:'appendicular', title:'The hip bone and lower limb', comps:['w2-pelvic-girdle','w2-thigh-knee','w2-leg-bones','w2-foot-bones'],
  prompt:'Describe the hip bone and the lower limb: the three bones that fuse at the acetabulum and key markings of the hip bone, the key markings of the femur, how to tell the tibia from the fibula, and the tarsals.',
  key:['Ilium, ischium and pubis fuse at the acetabulum','Iliac crest and ischial tuberosity','Femur head, neck, greater and lesser trochanters','Linea aspera and the femoral condyles','Tibia is medial, bears weight, ends in the medial malleolus','Fibula is lateral, does not bear weight, ends in the lateral malleolus','Talus meets the tibia and fibula, calcaneus is the heel','Navicular, cuboid and three cuneiforms, seven tarsals in all']},
 {id:'m2d-classify', area:'joints', title:'Classifying joints', comps:['w2-joint-classification','w2-fibrous-cartilaginous'],
  prompt:'Classify joints two ways, by structure and by function. Give each fibrous and cartilaginous subtype with an example and its functional class, and say how synovial joints are classified functionally.',
  key:['Structural: fibrous, cartilaginous, synovial','Functional: synarthrosis, amphiarthrosis, diarthrosis','Suture: skull bones, synarthrosis in adults','Gomphosis: tooth in socket, synarthrosis','Syndesmosis: distal tibia and fibula, amphiarthrosis','Synchondrosis: epiphyseal plate, hyaline cartilage, synarthrosis','Symphysis: pubic symphysis, fibrocartilage, amphiarthrosis','Synovial joints are all diarthroses']},
 {id:'m2d-synovial', area:'joints', title:'Synovial joints, the shoulder and the knee', comps:['w2-synovial-types','w2-shoulder-knee'],
  prompt:'Name the six synovial joint types with their axes and an example of each. Then describe the knee: its menisci, its two cruciate and two collateral ligaments, and what the ACL does.',
  key:['Plane: gliding, biaxial or triaxial, intercarpal joints','Hinge: uniaxial, elbow','Pivot: uniaxial rotation, atlantoaxial','Condyloid: biaxial, radiocarpal','Saddle: biaxial, thumb carpometacarpal','Ball-and-socket: triaxial, shoulder and hip','Medial and lateral menisci of fibrocartilage','Anterior and posterior cruciate, tibial and fibular collateral ligaments','ACL stops the tibia sliding forward']}
]
};
})();
