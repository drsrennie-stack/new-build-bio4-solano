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
 {id:'m2tf-01', dok:1, comp:'w2-cartilage-types', st:'The external ear and the epiglottis are made of [[elastic]] cartilage.', ans:true, accept:[], why:'Elastic fibers in the matrix let both structures bend and spring back.'},
 {id:'m2tf-02', dok:1, comp:'w2-cartilage-types', st:'The intervertebral discs and the knee menisci are made of [[hyaline]] cartilage.', ans:false, accept:['fibrocartilage','fibrocartilaginous','fibro','fibrouscartilage'], why:'Both are fibrocartilage, with thick collagen bundles that absorb shock. Hyaline cartilage caps the ends of long bones and forms the costal cartilages.'},
 {id:'m2tf-03', dok:1, comp:'w2-cartilage-growth', st:'In [[appositional]] growth, cartilage expands from within as chondrocytes divide inside the matrix.', ans:false, accept:['interstitial'], why:'Growth from within is interstitial. Appositional growth adds new cartilage at the outer surface, from the perichondrium.'},
 {id:'m2tf-04', dok:1, comp:'w2-bone-shapes', st:'The patella is the classic example of a [[sesamoid]] bone, a bone that forms within a tendon.', ans:true, accept:[], why:'The patella forms within the quadriceps tendon.'},
 {id:'m2tf-05', dok:1, comp:'w2-bone-shapes', st:'Carpals and tarsals are classified as [[flat]] bones.', ans:false, accept:['short'], why:'Carpals and tarsals are roughly cube-shaped short bones. Flat bones include the sternum, ribs and most skull bones.'},
 {id:'m2tf-06', dok:1, comp:'w2-long-bone-gross', st:'In an adult long bone, yellow marrow fills the [[medullary cavity]] of the shaft.', ans:true, accept:[], why:'The medullary cavity is the hollow core of the diaphysis, and in the adult shaft it stores fat as yellow marrow.'},
 {id:'m2tf-07', dok:1, comp:'w2-long-bone-gross', st:'The thin membrane that lines the internal surfaces of a bone, including the medullary cavity, is the [[periosteum]].', ans:false, accept:['endosteum'], why:'The endosteum lines internal surfaces. The periosteum covers the outer surface.'},
 {id:'m2tf-08', dok:1, comp:'w2-long-bone-gross', st:'Perforating fibers anchor the [[periosteum]] into the underlying bone.', ans:true, accept:[], why:'Perforating (Sharpey) fibers are collagen bundles that tie the periosteum to the bone beneath it.'},
 {id:'m2tf-09', dok:1, comp:'w2-compact-spongy', st:'Osteocytes in neighboring lacunae stay connected through tiny channels called [[perforating canals]].', ans:false, accept:['canaliculi','canaliculus'], why:'Canaliculi connect lacunae. Perforating canals are larger channels that run crosswise and link central canals.'},
 {id:'m2tf-10', dok:1, comp:'w2-compact-spongy', st:'Spongy bone is built from [[trabeculae]], and it has no osteons.', ans:true, accept:[], why:'Spongy bone is a lattice of trabeculae with red marrow in the spaces and no osteons.'},
 {id:'m2tf-11', dok:1, comp:'w2-compact-spongy', st:'The central canal of an osteon is also called the [[Volkmann]] canal.', ans:false, accept:['haversian','haversiancanal'], why:'The central canal is the Haversian canal. The Volkmann canal is the perforating canal that runs crosswise.'},
 {id:'m2tf-12', dok:1, comp:'w2-bone-cells', st:'The bone cell that breaks down and resorbs bone matrix is the [[osteoblast]].', ans:false, accept:['osteoclast','osteoclasts'], why:'The osteoclast resorbs bone. The osteoblast builds new matrix.'},
 {id:'m2tf-13', dok:1, comp:'w2-bone-cells', st:'An osteocyte is a mature [[osteoblast]] that has become surrounded by the matrix it made.', ans:true, accept:[], why:'Osteogenic cell, then osteoblast, then osteocyte in a lacuna.'},
 {id:'m2tf-14', dok:1, comp:'w2-ossification-growth', st:'The flat bones of the skull form by [[endochondral]] ossification.', ans:false, accept:['intramembranous'], why:'Flat skull bones form by intramembranous ossification, directly within a connective tissue membrane. Endochondral ossification replaces a hyaline cartilage model.'},
 {id:'m2tf-15', dok:1, comp:'w2-ossification-growth', st:'In the growth plate, chondrocytes divide and stack into columns in the zone of [[hypertrophy]].', ans:false, accept:['proliferation','proliferative','proliferating'], why:'Dividing and stacking happens in the zone of proliferation. In the zone of hypertrophy the chondrocytes enlarge.'},
 {id:'m2tf-16', dok:1, comp:'w2-ossification-growth', st:'The zone of the growth plate closest to the epiphysis is the zone of [[resting]] cartilage.', ans:true, accept:[], why:'The resting zone anchors the growth plate to the epiphysis.'},
 {id:'m2tf-17', dok:1, comp:'w2-ossification-growth', st:'A bone grows wider by [[interstitial]] growth beneath the periosteum.', ans:false, accept:['appositional'], why:'Growth in width is appositional, at the outer surface beneath the periosteum. Interstitial growth lengthens the bone at the epiphyseal plate.'},
 {id:'m2tf-18', dok:1, comp:'w2-skull-bones', st:'The [[sphenoid]] bone articulates with every other cranial bone.', ans:true, accept:[], why:'The sphenoid is the central wedge of the cranial base.'},
 {id:'m2tf-19', dok:1, comp:'w2-skull-bones', st:'The [[maxilla]] is the only freely movable bone of the skull.', ans:false, accept:['mandible','lowerjaw','mandibula'], why:'The mandible, the lower jaw, is the only freely movable skull bone. The maxillae form the upper jaw.'},
 {id:'m2tf-20', dok:1, comp:'w2-skull-markings', st:'The pituitary gland sits in the [[sella turcica]] of the sphenoid bone.', ans:true, accept:[], why:'The sella turcica is the saddle on the body of the sphenoid.'},
 {id:'m2tf-21', dok:1, comp:'w2-skull-markings', st:'The mastoid process is a marking of the [[occipital]] bone.', ans:false, accept:['temporal'], why:'The mastoid process is the bump behind the ear on the temporal bone.'},
 {id:'m2tf-22', dok:1, comp:'w2-sutures-fontanelles', st:'The [[sagittal]] suture joins the two parietal bones.', ans:true, accept:[], why:'The sagittal suture runs along the midline of the skull roof.'},
 {id:'m2tf-23', dok:1, comp:'w2-sutures-fontanelles', st:'The [[coronal]] suture joins the parietal bones to the occipital bone.', ans:false, accept:['lambdoid','lambdoidal'], why:'The lambdoid suture joins the parietals to the occipital. The coronal suture joins the frontal bone to the parietals.'},
 {id:'m2tf-24', dok:1, comp:'w2-sutures-fontanelles', st:'The [[posterior]] fontanelle is the largest fontanelle and the last to close.', ans:false, accept:['anterior'], why:'The anterior fontanelle is the largest and closes at about 18 to 24 months. The posterior fontanelle closes at about 2 months.'},
 {id:'m2tf-25', dok:1, comp:'w2-skull-cavities', st:'The hard palate is formed by the maxillae in front and the [[palatine]] bones behind.', ans:true, accept:[], why:'The palatine processes of the maxillae form the front of the hard palate and the palatine bones form the back.'},
 {id:'m2tf-26', dok:1, comp:'w2-skull-cavities', st:'The bony nasal septum is formed by the vomer and the perpendicular plate of the [[sphenoid]].', ans:false, accept:['ethmoid'], why:'The perpendicular plate belongs to the ethmoid bone.'},
 {id:'m2tf-27', dok:1, comp:'w2-skull-foramina', st:'The medulla oblongata and the vertebral arteries pass through the [[foramen magnum]].', ans:true, accept:[], why:'The foramen magnum is the large opening in the occipital bone, where the brainstem continues into the spinal cord.'},
 {id:'m2tf-28', dok:1, comp:'w2-skull-foramina', st:'The internal carotid artery passes through the [[jugular foramen]].', ans:false, accept:['carotidcanal','carotid'], why:'The internal carotid artery passes through the carotid canal of the temporal bone. The internal jugular vein passes through the jugular foramen.'},
 {id:'m2tf-29', dok:1, comp:'w2-spine-regions', st:'The lumbar region of the vertebral column has [[five]] vertebrae.', ans:true, accept:[], why:'L1 to L5. Cervical has 7 and thoracic has 12.'},
 {id:'m2tf-30', dok:1, comp:'w2-spine-regions', st:'The thoracic and sacral curvatures are [[secondary]] curvatures.', ans:false, accept:['primary'], why:'The thoracic and sacral curvatures are present at birth, so they are primary. The cervical and lumbar curvatures are secondary.'},
 {id:'m2tf-31', dok:1, comp:'w2-typical-vertebra', st:'The soft, gel-like core of an intervertebral disc is the [[anulus fibrosus]].', ans:false, accept:['nucleuspulposus','nucleus'], why:'The core is the nucleus pulposus. The anulus fibrosus is the tough outer ring.'},
 {id:'m2tf-32', dok:1, comp:'w2-regional-vertebrae', st:'Transverse foramina are found only in [[cervical]] vertebrae.', ans:true, accept:[], why:'Transverse foramina pass the vertebral arteries and are the giveaway for a cervical vertebra.'},
 {id:'m2tf-33', dok:1, comp:'w2-regional-vertebrae', st:'The [[axis]] is a ring with no body and no spinous process.', ans:false, accept:['atlas','c1'], why:'That describes the atlas, C1. The axis, C2, bears the dens.'},
 {id:'m2tf-34', dok:1, comp:'w2-thoracic-cage', st:'Ribs 11 and 12 are called [[floating]] ribs because they have no anterior attachment.', ans:true, accept:[], why:'They are a subset of the false ribs.'},
 {id:'m2tf-35', dok:1, comp:'w2-thoracic-cage', st:'The sternal angle is where the manubrium meets the [[xiphoid process]].', ans:false, accept:['body','bodyofthesternum','bodyofsternum','sternalbody','gladiolus'], why:'The sternal angle is where the manubrium meets the body of the sternum, level with the second rib.'},
 {id:'m2tf-36', dok:1, comp:'w2-pectoral-girdle', st:'The [[clavicle]] is the only bony link between the upper limb and the axial skeleton.', ans:true, accept:[], why:'The clavicle meets the manubrium at the sternoclavicular joint.'},
 {id:'m2tf-37', dok:1, comp:'w2-pectoral-girdle', st:'The head of the humerus fits into the [[acromion]] of the scapula.', ans:false, accept:['glenoidcavity','glenoid','glenoidfossa'], why:'The humeral head fits into the glenoid cavity. The acromion is the point of the shoulder.'},
 {id:'m2tf-38', dok:1, comp:'w2-arm-forearm', st:'The [[trochlea]] of the humerus articulates with the head of the radius.', ans:false, accept:['capitulum','capitellum'], why:'The capitulum is lateral and meets the radius. The trochlea is medial and meets the ulna.'},
 {id:'m2tf-39', dok:1, comp:'w2-arm-forearm', st:'The [[radius]] is the lateral bone of the forearm, on the thumb side.', ans:true, accept:[], why:'In anatomical position the radius is lateral and the ulna is medial.'},
 {id:'m2tf-40', dok:1, comp:'w2-hand-bones', st:'The [[scaphoid]] is the carpal bone most often fractured.', ans:true, accept:[], why:'Usually from a fall on an outstretched hand. Tenderness in the anatomical snuffbox is the clue.'},
 {id:'m2tf-41', dok:1, comp:'w2-hand-bones', st:'The thumb has [[three]] phalanges.', ans:false, accept:['two','2'], why:'The thumb, the pollex, has two phalanges. Each of the other fingers has three.'},
 {id:'m2tf-42', dok:1, comp:'w2-bone-markings-vocab', st:'A [[fossa]] is a shallow basin in a bone, such as the olecranon fossa.', ans:true, accept:[], why:'A fossa is a depression.'},
 {id:'m2tf-43', dok:1, comp:'w2-bone-markings-vocab', st:'A groove on a bone, such as the one between the humeral tubercles, is called a [[tubercle]].', ans:false, accept:['sulcus','groove'], why:'A groove is a sulcus, as in the intertubercular sulcus. A tubercle is a small rounded bump.'},
 {id:'m2tf-44', dok:1, comp:'w2-pelvic-girdle', st:'When you sit, your weight rests on the [[ischial tuberosities]].', ans:true, accept:[], why:'The ischial tuberosity is the strong, roughened knob of the ischium.'},
 {id:'m2tf-45', dok:1, comp:'w2-pelvic-girdle', st:'The obturator foramen is framed by the ischium and the [[ilium]].', ans:false, accept:['pubis','pubicbone','pubic'], why:'The obturator foramen is framed by the ischium and the pubis.'},
 {id:'m2tf-46', dok:1, comp:'w2-thigh-knee', st:'The [[greater trochanter]] is the large lateral projection near the proximal end of the femur.', ans:true, accept:[], why:'The lesser trochanter is the smaller projection on the medial side.'},
 {id:'m2tf-47', dok:1, comp:'w2-thigh-knee', st:'The linea aspera is a rough ridge running down the [[anterior]] shaft of the femur.', ans:false, accept:['posterior'], why:'The linea aspera runs down the posterior shaft.'},
 {id:'m2tf-48', dok:1, comp:'w2-leg-bones', st:'The [[fibula]] is the weight-bearing bone of the leg.', ans:false, accept:['tibia'], why:'The tibia bears the weight. The fibula is slender and does not.'},
 {id:'m2tf-49', dok:1, comp:'w2-leg-bones', st:'The lateral malleolus is part of the [[fibula]].', ans:true, accept:[], why:'The medial malleolus belongs to the tibia.'},
 {id:'m2tf-50', dok:1, comp:'w2-foot-bones', st:'The [[talus]] is the heel bone, the largest tarsal.', ans:false, accept:['calcaneus','calcaneum','heelbone'], why:'The calcaneus is the heel bone. The talus articulates with the tibia and fibula.'},
 {id:'m2tf-51', dok:1, comp:'w2-foot-bones', st:'Each foot has [[seven]] tarsal bones.', ans:true, accept:[], why:'Talus, calcaneus, navicular, cuboid and three cuneiforms.'},
 {id:'m2tf-52', dok:1, comp:'w2-joint-classification', st:'All synovial joints are functionally classified as [[diarthroses]].', ans:true, accept:[], why:'Every synovial joint is freely movable.'},
 {id:'m2tf-53', dok:1, comp:'w2-joint-classification', st:'A suture between adult skull bones is an [[amphiarthrosis]].', ans:false, accept:['synarthrosis','synarthroses','synarthrotic'], why:'An adult suture is immovable, a synarthrosis.'},
 {id:'m2tf-54', dok:1, comp:'w2-fibrous-cartilaginous', st:'The epiphyseal plate is a [[symphysis]], a joint joined by hyaline cartilage.', ans:false, accept:['synchondrosis'], why:'A hyaline cartilage joint is a synchondrosis. A symphysis is joined by fibrocartilage.'},
 {id:'m2tf-55', dok:1, comp:'w2-fibrous-cartilaginous', st:'A tooth held in its socket by the periodontal ligament is a [[gomphosis]].', ans:true, accept:[], why:'A gomphosis is a peg in a socket.'},
 {id:'m2tf-56', dok:1, comp:'w2-synovial-structure', st:'Synovial fluid is secreted by the [[synovial membrane]], the inner layer of the articular capsule.', ans:true, accept:[], why:'The fibrous membrane is the outer layer.'},
 {id:'m2tf-57', dok:1, comp:'w2-synovial-structure', st:'The articular cartilage covering the bone ends in a synovial joint is [[fibrocartilage]].', ans:false, accept:['hyaline','hyalinecartilage'], why:'Articular cartilage is hyaline cartilage.'},
 {id:'m2tf-58', dok:1, comp:'w2-joint-movements', st:'Moving a limb away from the midline of the body is [[adduction]].', ans:false, accept:['abduction'], why:'Away from the midline is abduction. Adduction is toward the midline.'},
 {id:'m2tf-59', dok:1, comp:'w2-joint-movements', st:'Turning the sole of the foot inward is [[inversion]].', ans:true, accept:[], why:'Turning it outward is eversion.'},
 {id:'m2tf-60', dok:1, comp:'w2-synovial-types', st:'The shoulder and hip are [[hinge]] joints.', ans:false, accept:['ballandsocket','ballsocket','balljoint','spheroidal'], why:'They are ball-and-socket joints, which move around three axes.'},
 {id:'m2tf-61', dok:1, comp:'w2-synovial-types', st:'The carpometacarpal joint of the thumb is a [[saddle]] joint.', ans:true, accept:[], why:'Each surface is both concave and convex.'},
 {id:'m2tf-62', dok:1, comp:'w2-shoulder-knee', st:'The [[posterior cruciate]] ligament stops the tibia from sliding forward on the femur.', ans:false, accept:['anteriorcruciate','anteriorcruciateligament','acl','anterior'], why:'The anterior cruciate ligament stops forward sliding. The posterior cruciate stops backward sliding.'},
 {id:'m2tf-63', dok:1, comp:'w2-shoulder-knee', st:'Most of the stability of the [[shoulder]] joint comes from the rotator cuff muscles.', ans:true, accept:[], why:'The shoulder ligaments add little strength.'}
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
/* Module 2 applied true or false, DOK 2 and 3, written unit by unit and
   independently checked. The definitional set above is tagged dok 1 and
   is not drawn for a check. */
B.exam[2].tf = B.exam[2].tf.concat([
{"id":"m2b-tf-01","comp":"w2-cartilage-types","dok":2,"st":"A runner tears a knee meniscus. Under a microscope, the torn tissue would be [[elastic]] cartilage, with thick bundles of collagen.","ans":false,"accept":["fibrocartilage","fibro","fibrous","fibrocartilaginous"],"why":"The knee menisci are fibrocartilage, built from thick bundles of collagen. Elastic cartilage is found in the external ear and the epiglottis."},
{"id":"m2b-tf-02","comp":"w2-cartilage-types","dok":1,"st":"A biopsy of the epiglottis shows each chondrocyte sitting in its own small cavity, a [[lacuna]], surrounded by matrix packed with elastic fibers.","ans":true,"accept":[],"why":"Chondrocytes sit in lacunae in every cartilage type, and the epiglottis is elastic cartilage, so its matrix is full of elastic fibers."},
{"id":"m2b-tf-03","comp":"w2-cartilage-growth","dok":2,"st":"When chondrocytes deep inside a piece of cartilage divide and make new matrix around themselves, the cartilage is growing by [[appositional]] growth.","ans":false,"accept":["interstitial"],"why":"Growth from chondrocytes dividing inside the matrix is interstitial growth. Appositional growth adds cartilage at the outer surface from the perichondrium."},
{"id":"m2b-tf-04","comp":"w2-cartilage-growth","dok":2,"st":"When cells of the perichondrium lay new cartilage onto the outside of an existing piece, the cartilage is growing by [[appositional]] growth.","ans":true,"accept":[],"why":"Appositional growth adds new cartilage at the outer surface, and it starts from the perichondrium."},
{"id":"m2b-tf-05","comp":"w2-bone-shapes","dok":2,"st":"A rib, which is thin and curves around the chest wall, is classified as a [[flat]] bone.","ans":true,"accept":[],"why":"Flat bones are thin and often curved. The ribs, the sternum, and most skull bones are flat bones."},
{"id":"m2b-tf-06","comp":"w2-bone-shapes","dok":2,"st":"A vertebra, with a body, an arch, and several processes pointing in different directions, is classified as a [[short]] bone.","ans":false,"accept":["irregular"],"why":"A vertebra has a complex shape that fits no other group, so it is an irregular bone. Short bones are roughly cube-shaped, like the carpals and tarsals."},
{"id":"m2b-tf-07","comp":"w2-long-bone-gross","dok":2,"st":"A needle placed into the spongy bone of the upper end (proximal epiphysis) of an adult humerus would draw out [[red]] marrow, the kind that forms blood cells.","ans":true,"accept":[],"why":"Red marrow fills the spongy bone of the epiphyses and is the site of blood cell formation. Yellow marrow is stored fat in the adult shaft."},
{"id":"m2b-tf-08","comp":"w2-long-bone-gross","dok":2,"st":"In an adult femur, the thin membrane lining the inner wall of the medullary cavity is the [[periosteum]].","ans":false,"accept":["endosteum"],"why":"The endosteum lines the internal bone surfaces. The periosteum covers the outer surface of the bone."},
{"id":"m2b-tf-09","comp":"w2-compact-spongy","dok":2,"st":"On an unlabeled bone slide, finding rings of lamellae around a central canal tells you the sample is [[spongy]] bone.","ans":false,"accept":["compact","dense","cortical"],"why":"Rings of lamellae around a central canal form an osteon, the unit of compact bone. Spongy bone is built from trabeculae and has no osteons."},
{"id":"m2b-tf-10","comp":"w2-compact-spongy","dok":2,"st":"In the wall of the femoral shaft, the rings of bone that wrap the entire outer surface just under the periosteum, rather than circling a single central canal, are the [[circumferential]] lamellae.","ans":true,"accept":[],"why":"Circumferential lamellae wrap the entire outer and inner surfaces of the shaft. Concentric lamellae circle the central canal of one osteon."},
{"id":"m2b-tf-11","comp":"w2-bone-cells","dok":3,"st":"A large cell with several nuclei, sitting in a pit on the bone surface and breaking down matrix, comes from the same stem cell line as the [[osteoblast]].","ans":false,"accept":["bloodcell","bloodcells","blood","bloodcellline","whitebloodcell","whitebloodcells","wbc","wbcs","leukocyte","leukocytes","monocyte","monocytes","macrophage","macrophages"],"why":"That cell is an osteoclast, which comes from a blood-cell line. Osteoblasts come from osteogenic cells, a separate lineage."},
{"id":"m2b-tf-12","comp":"w2-bone-cells","dok":2,"st":"When an osteoblast becomes completely surrounded by the matrix it secreted, it becomes an [[osteocyte]] and takes over maintaining that matrix.","ans":true,"accept":[],"why":"An osteocyte is a mature osteoblast sitting in a lacuna, and it maintains the bone matrix day to day."},
{"id":"m2b-tf-13","comp":"w2-ossification-growth","dok":2,"st":"A child’s X-ray shows a dark gap between the epiphysis and the diaphysis of the femur. That gap is the epiphyseal plate, which is made of [[hyaline]] cartilage.","ans":true,"accept":[],"why":"The epiphyseal plate is a disc of hyaline cartilage. Cartilage does not show up like bone on an X-ray, so the plate looks like a gap."},
{"id":"m2b-tf-14","comp":"w2-ossification-growth","dok":2,"st":"Moving through a growth plate from the epiphysis toward the diaphysis, the zone where chondrocytes enlarge comes just before the zone of [[proliferation]].","ans":false,"accept":["calcification"],"why":"The zone of hypertrophy comes just after proliferation and just before calcification, where the cartilage matrix calcifies."},
{"id":"m2a-tf-01","comp":"w2-skull-bones","dok":2,"st":"A fracture of the vomer, the bone that forms the inferior part of the nasal septum, is a fracture of a [[cranial]] bone.","ans":false,"accept":["facial"],"why":"The vomer is one of the fourteen facial bones. It is single and forms the inferior part of the nasal septum."},
{"id":"m2a-tf-02","comp":"w2-skull-bones","dok":2,"st":"A skull is missing one bone from the superior and lateral walls of the cranium, but the matching bone is still present on the other side. The missing bone is a [[parietal]] bone.","ans":true,"accept":[],"why":"The parietal bones are paired and form the superior and lateral walls of the cranium, so one can be missing while its partner remains."},
{"id":"m2a-tf-03","comp":"w2-skull-markings","dok":2,"st":"On a skull with the calvaria removed, the upright ridge where the falx cerebri attaches rises from the [[sphenoid]] bone.","ans":false,"accept":["ethmoid"],"why":"That ridge is the crista galli of the ethmoid bone."},
{"id":"m2a-tf-04","comp":"w2-skull-markings","dok":3,"st":"A pituitary tumor growing downward out of the sella turcica would press into the sinus inside the body of the [[sphenoid]] bone.","ans":true,"accept":[],"why":"The sella turcica sits on the body of the sphenoid, and that body contains the sphenoid sinus."},
{"id":"m2a-tf-05","comp":"w2-sutures-fontanelles","dok":1,"st":"The H-shaped junction on the side of the skull, the thinnest part of the skull, is where the frontal, parietal, temporal, and [[occipital]] bones meet.","ans":false,"accept":["sphenoid"],"why":"The pterion joins the frontal, parietal, temporal, and sphenoid bones. The occipital bone is at the back of the skull."},
{"id":"m2a-tf-06","comp":"w2-sutures-fontanelles","dok":1,"st":"The soft spot that stays open longest in an infant, closing at about 18 to 24 months, lies where the frontal bone meets the [[parietal]] bones.","ans":true,"accept":[],"why":"The anterior fontanelle is the largest and last to close, and it lies where the frontal and parietal bones meet."},
{"id":"m2a-tf-07","comp":"w2-skull-cavities","dok":1,"st":"A fracture in the medial wall of the orbit, right at the groove for the tear duct, has broken the [[lacrimal]] bone.","ans":true,"accept":[],"why":"The lacrimal bones form part of the medial wall of the orbit and are grooved for the tear duct."},
{"id":"m2a-tf-08","comp":"w2-skull-cavities","dok":1,"st":"The largest paranasal sinuses, found in the cheek region, sit inside the [[zygomatic]] bones.","ans":false,"accept":["maxillae","maxilla","maxillary"],"why":"The maxillary sinuses are the largest and sit in the maxillae. The zygomatic bones are the cheekbones but hold no sinus."},
{"id":"m2a-tf-09","comp":"w2-skull-foramina","dok":1,"st":"A fracture that damages the canal carrying the internal carotid artery has broken the [[temporal]] bone.","ans":true,"accept":[],"why":"The carotid canal passes the internal carotid artery and lies in the temporal bone."},
{"id":"m2a-tf-10","comp":"w2-skull-foramina","dok":1,"st":"A needle guided through the foramen ovale, toward the branch of the trigeminal nerve that serves the lower jaw, passes through the [[temporal]] bone.","ans":false,"accept":["sphenoid"],"why":"The foramen ovale pierces the sphenoid bone and passes a branch of the trigeminal nerve to the lower jaw."},
{"id":"m2a-tf-11","comp":"w2-spine-regions","dok":2,"st":"Counting down from the skull, the eighth vertebra in the column is the first [[thoracic]] vertebra.","ans":true,"accept":[],"why":"The seven cervical vertebrae come first, C1 to C7, so the eighth vertebra is T1."},
{"id":"m2a-tf-12","comp":"w2-spine-regions","dok":2,"st":"The lumbar curve, which develops as a child learns to stand and walk, is a [[primary]] curvature.","ans":false,"accept":["secondary"],"why":"Curves that develop after birth with milestones are secondary. Only the thoracic and sacral curves are primary."},
{"id":"m2a-tf-13","comp":"w2-typical-vertebra","dok":1,"st":"Spinal nerves leave the vertebral column through the gaps between two stacked vertebrae, called the [[vertebral]] foramina.","ans":false,"accept":["intervertebral"],"why":"Spinal nerves exit through the intervertebral foramina. The vertebral foramen is the opening in a single vertebra that the spinal cord runs through."},
{"id":"m2a-tf-14","comp":"w2-typical-vertebra","dok":1,"st":"A tear in the tough outer ring of an intervertebral disc is a tear in the [[nucleus pulposus]].","ans":false,"accept":["anulusfibrosus","annulusfibrosus","anulus","annulus"],"why":"The tough outer ring is the anulus fibrosus. The nucleus pulposus is the soft, gel-like core."},
{"id":"m2a-tf-15","comp":"w2-regional-vertebrae","dok":1,"st":"The bump you can feel at the base of the back of the neck is the spinous process of the [[seventh]] cervical vertebra.","ans":true,"accept":[],"why":"C7, the vertebra prominens, has a long spinous process you can feel at the base of the neck."},
{"id":"m2a-tf-16","comp":"w2-regional-vertebrae","dok":1,"st":"The median sacral crest, the ridge running down the posterior surface of the sacrum, is made of fused [[transverse]] processes.","ans":false,"accept":["spinous"],"why":"The median sacral crest is formed by the fused spinous processes of the sacral vertebrae."},
{"id":"m2a-tf-17","comp":"w2-thoracic-cage","dok":2,"st":"Rib 5 attaches directly to the sternum by its own costal cartilage, so it is classified as a [[false]] rib.","ans":false,"accept":["true"],"why":"Pairs 1 to 7 attach directly to the sternum by their own costal cartilage, which makes them true ribs."},
{"id":"m2a-tf-18","comp":"w2-thoracic-cage","dok":1,"st":"During CPR, a rescuer uses the small inferior tip of the sternum, which is cartilage that ossifies with age, to guide hand position. That tip is the [[xiphoid]] process.","ans":true,"accept":[],"why":"The xiphoid process is the small inferior tip of the sternum and guides hand position for chest compressions."},
{"id":"m2p-tf-01","comp":"w2-pectoral-girdle","dok":2,"st":"A patient points to the bony tip of her shoulder. The flat process under her finger, at the lateral end of the scapular spine, is the [[acromion]].","ans":true,"accept":[],"why":"The acromion is the flat process at the tip of the scapular spine, the point of the shoulder."},
{"id":"m2p-tf-02","comp":"w2-pectoral-girdle","dok":3,"st":"The upper limb is joined to the axial skeleton by only one joint, and that joint is the [[acromioclavicular]] joint.","ans":false,"accept":["sternoclavicular","sc"],"why":"The acromioclavicular joint joins the clavicle to the scapula, which is still part of the upper limb. The sternoclavicular joint, between the clavicle and the manubrium, is the only joint linking the upper limb to the axial skeleton."},
{"id":"m2p-tf-03","comp":"w2-arm-forearm","dok":2,"st":"A student bumps the back of the medial epicondyle on a desk and feels a jolt run to the little finger. The nerve that passes just behind that projection is the [[radial]] nerve.","ans":false,"accept":["ulnar"],"why":"The ulnar nerve passes just behind the medial epicondyle, the funny bone. The radial nerve runs in the radial groove on the posterior shaft of the humerus."},
{"id":"m2p-tf-04","comp":"w2-arm-forearm","dok":2,"st":"A fracture crosses the humeral shaft through the oblique groove on its posterior surface. The nerve lying in that groove, closest to the break, is the [[radial]] nerve.","ans":true,"accept":[],"why":"The radial groove is an oblique groove on the posterior shaft of the humerus, and the radial nerve runs in it."},
{"id":"m2p-tf-05","comp":"w2-hand-bones","dok":2,"st":"A student counting the phalanges of one hand gets fourteen, because the pollex has [[two]] phalanges and each of the other four digits has three.","ans":true,"accept":[],"why":"The thumb has two phalanges and each finger has three, so 2 plus 12 gives fourteen phalanges per hand."},
{"id":"m2p-tf-06","comp":"w2-hand-bones","dok":3,"st":"A skater falls on an outstretched hand and is most tender in the anatomical snuffbox. The carpal most likely broken sits in the [[distal]] row of the wrist.","ans":false,"accept":["proximal"],"why":"Snuffbox tenderness points to the scaphoid, the carpal most often fractured, and the scaphoid is in the proximal row."},
{"id":"m2p-tf-07","comp":"w2-bone-markings-vocab","dok":2,"st":"A nutrient foramen on the shaft of a long bone is a hole for vessels, so by the marking vocabulary it is classified as an [[opening]].","ans":true,"accept":[],"why":"A foramen is a hole for vessels or nerves, and the vocabulary classifies it as an opening."},
{"id":"m2p-tf-08","comp":"w2-bone-markings-vocab","dok":2,"st":"The intertubercular sulcus is a groove between the two tubercles of the humerus, so by the marking vocabulary it is classified as a [[projection]].","ans":false,"accept":["depression"],"why":"A sulcus is a groove, and grooves are classified as depressions, not projections."},
{"id":"m2p-tf-09","comp":"w2-pelvic-girdle","dok":2,"st":"At the sacroiliac joint, the part of the ilium that meets the sacrum is the [[iliac fossa]].","ans":false,"accept":["auricularsurface","auricular"],"why":"The iliac fossa is the smooth concave inner surface of the ilium. The ear-shaped auricular surface is what joins the sacrum at the sacroiliac joint."},
{"id":"m2p-tf-10","comp":"w2-pelvic-girdle","dok":2,"st":"When a person sits upright on a hard bench, the roughened knobs pressing into the seat belong to the [[ischium]].","ans":true,"accept":[],"why":"The ischial tuberosity is the strong roughened knob you sit on, and it is part of the ischium."},
{"id":"m2p-tf-11","comp":"w2-thigh-knee","dok":2,"st":"On a loose femur, the rough ridge that runs down the posterior shaft as a muscle attachment line is the [[intercondylar fossa]].","ans":false,"accept":["lineaaspera"],"why":"That ridge is the linea aspera. The intercondylar fossa is the notch between the condyles at the distal end."},
{"id":"m2p-tf-12","comp":"w2-thigh-knee","dok":2,"st":"Because the patella forms within the quadriceps tendon, it is classified as a [[sesamoid]] bone.","ans":true,"accept":[],"why":"The patella is a sesamoid bone formed within the quadriceps tendon."},
{"id":"m2p-tf-13","comp":"w2-leg-bones","dok":2,"st":"A clinician feels the knob at the proximal end of the lateral bone of the leg, just below the knee. That knob is the head of the [[tibia]].","ans":false,"accept":["fibula"],"why":"The lateral bone of the leg is the fibula, and its proximal knob is the head of the fibula."},
{"id":"m2p-tf-14","comp":"w2-leg-bones","dok":3,"st":"The ankle bump found at the lower end of the leg bone that carries the body’s weight is the [[medial]] malleolus.","ans":true,"accept":[],"why":"The tibia is the weight-bearing bone of the leg, and its distal bump is the medial malleolus. The lateral malleolus belongs to the fibula."},
{"id":"m2p-tf-15","comp":"w2-foot-bones","dok":2,"st":"When you rock back and stand on your heels, the tarsal pressing into the floor is the largest tarsal, the [[calcaneus]].","ans":true,"accept":[],"why":"The calcaneus is the heel bone and the largest tarsal."},
{"id":"m2p-tf-16","comp":"w2-foot-bones","dok":1,"st":"When the foot skeleton is rebuilt, the tarsal placed so it articulates with both the tibia and the fibula is the [[navicular]].","ans":false,"accept":["talus"],"why":"The talus is the tarsal that articulates with the tibia and fibula. The navicular is one of the other tarsals."},
{"id":"m2j-tf-01","comp":"w2-joint-classification","dok":2,"st":"During arthroscopy, a surgeon finds a fluid-filled cavity between two bones, so by function this joint is a [[diarthrosis]].","ans":true,"accept":[],"why":"A fluid-filled cavity means a synovial joint, and all synovial joints are diarthroses, or freely movable."},
{"id":"m2j-tf-02","comp":"w2-joint-classification","dok":2,"st":"The joint between two vertebral bodies has no cavity and allows slight bending, so by function it is a [[synarthrosis]].","ans":false,"accept":["amphiarthrosis","amphiarthroses","amphiarthrotic"],"why":"A slightly movable joint is an amphiarthrosis. A synarthrosis is immovable, like an adult suture."},
{"id":"m2j-tf-03","comp":"w2-fibrous-cartilaginous","dok":2,"st":"A dentist rocks a tooth and feels the periodontal ligament holding it firmly in its socket. This peg-in-socket joint is a [[syndesmosis]].","ans":false,"accept":["gomphosis","gomphoses"],"why":"A cone-shaped peg held in a socket by the periodontal ligament is a gomphosis. A syndesmosis joins bones by a ligament with more space, like the distal tibiofibular joint."},
{"id":"m2j-tf-04","comp":"w2-fibrous-cartilaginous","dok":2,"st":"An adult skull X-ray shows a metopic suture running down the middle of the frontal bone. Like all sutures, it is a [[fibrous]] joint.","ans":true,"accept":[],"why":"A metopic suture is a frontal suture that persists past about age six. Sutures are held by dense connective tissue, so they are fibrous joints."},
{"id":"m2j-tf-05","comp":"w2-synovial-structure","dok":1,"st":"Articular cartilage has no blood supply of its own, so it depends on the [[synovial]] fluid for its oxygen and nutrients.","ans":true,"accept":[],"why":"Arteries supply the capsule and ligaments, but the avascular articular cartilage is fed by the synovial fluid."},
{"id":"m2j-tf-06","comp":"w2-synovial-structure","dok":1,"st":"While repairing a knee, a surgeon sees that the capsule’s ligaments are thickened bundles of its [[synovial]] membrane.","ans":false,"accept":["fibrous"],"why":"Ligaments are thickened bundles of the fibrous membrane, the outer layer of the capsule. The synovial membrane is the inner layer of areolar connective tissue."},
{"id":"m2j-tf-07","comp":"w2-joint-movements","dok":2,"st":"A person holding a bowl of soup palm up turns the hand over so the palm faces down and the soup spills. That turning movement is [[pronation]].","ans":true,"accept":[],"why":"Turning the palm from facing up to facing down is pronation. The reverse, turning the palm back up, is supination."},
{"id":"m2j-tf-08","comp":"w2-joint-movements","dok":2,"st":"Shrugging the shoulders up toward the ears is [[abduction]] of the scapulae.","ans":false,"accept":["elevation"],"why":"Lifting a body part upward is elevation. Abduction moves a part away from the midline."},
{"id":"m2j-tf-09","comp":"w2-synovial-types","dok":2,"st":"At the radiocarpal joint, an oval projection fits into an oval depression, which makes it a [[saddle]] joint.","ans":false,"accept":["condyloid","condylar","ellipsoid","ellipsoidal"],"why":"An oval projection fitting an oval depression is a condyloid joint, and the radiocarpal joint is the example. A saddle joint has surfaces that are each both concave and convex."},
{"id":"m2j-tf-10","comp":"w2-synovial-types","dok":2,"st":"The small carpal bones slide past one another on nearly flat surfaces without changing the angle between them, so the intercarpal joints are [[plane]] joints.","ans":true,"accept":[],"why":"Flat or slightly curved surfaces that glide make a plane joint, and the intercarpal joints are the example."},
{"id":"m2j-tf-11","comp":"w2-shoulder-knee","dok":2,"st":"A shoulder MRI shows damage to the supraspinatus, infraspinatus, and subscapularis, so the only rotator cuff muscle left intact is the [[teres major]].","ans":false,"accept":["teresminor"],"why":"The rotator cuff is SITS: supraspinatus, infraspinatus, teres minor, and subscapularis. The teres major is not part of it."},
{"id":"m2j-tf-12","comp":"w2-shoulder-knee","dok":2,"st":"A surgeon taking a graft from the patellar ligament, which runs from the patella to the tibial tuberosity, is working on the [[anterior]] surface of the knee.","ans":true,"accept":[],"why":"The patellar ligament continues the quadriceps tendon from the patella to the tibial tuberosity and strengthens the anterior surface of the knee."}
]);
/* Module 1 multiple choice: the 45 hand-written DOK 2 and 3 questions from
   the Exam 1 Gap Check, moved here unchanged. They carry no written
   explanations, so the review sends students to the notes instead. */
B.items = (B.items||[]).concat([
{"id":"m1g-01","module":1,"dok":2,"comp":"w1-anatomical-position","stem":"A textbook claims a photo shows anatomical position: the person stands upright, faces forward, arms at the sides, palms resting against the thighs. What is wrong with the claim?","options":["Nothing; that is anatomical position","The palms must face anteriorly, not rest against the thighs","The arms must be raised to shoulder height","The person must be lying supine, not standing"],"correct":1,"why":"","whyNot":null},
{"id":"m1g-02","module":1,"dok":3,"comp":"w1-directional-terms","stem":"A fragment enters at the right shoulder and lodges near the left hip. Which pair of directional terms describes its path from entry to endpoint?","options":["Inferior and medial, crossing the midline","Superior and lateral, staying on the right","Inferior and lateral, staying on the right","Proximal and distal along the limb"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-03","module":1,"dok":3,"comp":"w1-planes-sections","stem":"One slice through the trunk shows both kidneys, the vertebral column at the back of the slice, and loops of intestine at the front of the same slice. Which plane produced it?","options":["Frontal","Midsagittal","Transverse","Parasagittal"],"correct":2,"why":"","whyNot":null},
{"id":"m1g-04","module":1,"dok":2,"comp":"w1-regional-terms","stem":"After a fall from a bike, a rider has abrasions in the olecranal, sural, and calcaneal regions. Where do you look?","options":["Posterior elbow, calf, and heel","Anterior elbow, shin, and toes","Wrist, thigh, and ankle","Posterior knee, forearm, and sole"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-05","module":1,"dok":2,"comp":"w1-levels-organization","stem":"The stomach wall contains epithelium, connective tissue, muscle tissue, and nervous tissue working as one structure. At which structural level does the stomach itself sit, and why?","options":["Tissue level, because it is made of tissues","Organ level, because two or more tissue types work together in one structure","Organ system level, because it digests food alongside other structures","Cellular level, because all tissues reduce to cells"],"correct":1,"why":"","whyNot":null},
{"id":"m1g-06","module":1,"dok":3,"comp":"w1-directional-terms","stem":"In anatomical position, which statement correctly relates the carpal region to the olecranal region?","options":["The carpal region is distal to the olecranal region","The carpal region is proximal to the olecranal region","The two regions are on opposite surfaces of the same joint","The carpal region is superior to the olecranal region"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-07","module":1,"dok":3,"comp":"w1-planes-sections","stem":"One cut separates the body into unequal left and right portions. A second cut separates a hand into anterior and posterior portions. Name the two planes, in order.","options":["Parasagittal, then frontal","Midsagittal, then frontal","Parasagittal, then transverse","Frontal, then parasagittal"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-08","module":1,"dok":2,"comp":"w1-body-cavities","stem":"A tumor is found in the cavity that houses the spinal cord. Name the cavity, and the larger division it belongs to.","options":["Vertebral cavity, in the ventral division","Vertebral cavity, in the dorsal division","Abdominal cavity, in the ventral division","Cranial cavity, in the dorsal division"],"correct":1,"why":"","whyNot":null},
{"id":"m1g-09","module":1,"dok":3,"comp":"w1-serous-membranes","stem":"An instrument passes through the thoracic body wall toward the surface of a lung. In what order does it cross the serous layers and space?","options":["Visceral pleura, pleural cavity, parietal pleura","Parietal pleura, pleural cavity, visceral pleura","Parietal pericardium, pericardial cavity, visceral pericardium","Visceral pleura, parietal pleura, then the pleural cavity"],"correct":1,"why":"","whyNot":null},
{"id":"m1g-10","module":1,"dok":3,"comp":"w1-mediastinum","stem":"A chest CT shows a mass between the two lungs, posterior to the heart and anterior to the thoracic vertebral bodies. Which compartment is it in, and does it sit inside a pleural cavity?","options":["The mediastinum; no, the mediastinum lies between the pleural cavities","The mediastinum; yes, it is inside the left pleural cavity","The left pleural cavity itself","The pericardial cavity, inside the right pleural cavity"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-11","module":1,"dok":3,"comp":"w1-peritoneum-relationships","stem":"A surgeon reaches an organ from the back, staying behind the peritoneum the whole time and never entering the peritoneal cavity. Which pair of organs could be reached this way?","options":["The kidneys and the pancreas","The stomach and the spleen","The liver and the gallbladder","The jejunum and the transverse colon"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-12","module":1,"dok":2,"comp":"w1-abdominopelvic-map","stem":"A patient points to pain immediately lateral to the umbilical region on the right, below the right hypochondriac region. Which of the nine regions are they pointing to?","options":["Right lumbar","Right iliac","Epigastric","Hypogastric"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-13","module":1,"dok":2,"comp":"w1-body-cavities","stem":"Fluid accumulates and compresses the heart from all sides. Which precise space holds the fluid?","options":["The pericardial cavity, between the parietal and visceral pericardium","The mediastinum, outside the pericardium entirely","A pleural cavity, deep to the visceral pleura","The thoracic cavity, superficial to all membranes"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-14","module":1,"dok":3,"comp":"w1-abdominopelvic-map","stem":"An organ spans the epigastric and left hypochondriac regions. Translating to the four-quadrant map, where does most of it lie?","options":["The left upper quadrant","The right upper quadrant","The left lower quadrant","The right lower quadrant"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-15","module":1,"dok":2,"comp":"w1-generalized-cell","stem":"A dye spreads through the fluid between the organelles but cannot enter any organelle or the nucleus. Which cell region is stained?","options":["The cytosol","The nucleoplasm","The lumen of the endoplasmic reticulum","The extracellular fluid"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-16","module":1,"dok":3,"comp":"w1-plasma-membrane","stem":"A molecule is anchored in the plasma membrane and faces only the outside of the cell, where it acts as an identity tag other cells can read. Which component fits this description?","options":["A glycoprotein of the glycocalyx","Cholesterol in the inner leaflet","A peripheral protein on the cytoplasmic face","A phospholipid tail in the bilayer core"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-17","module":1,"dok":3,"comp":"w1-organelles","stem":"A cell secretes large amounts of protein for export. Predict which structures would be unusually abundant, listed in the order the protein moves through them.","options":["Rough ER, then Golgi apparatus, then secretory vesicles","Smooth ER, then lysosomes, then peroxisomes","Golgi apparatus, then rough ER, then the nucleolus","Free ribosomes, then mitochondria, then the nucleus"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-18","module":1,"dok":2,"comp":"w1-nucleus","stem":"A slide shows one dense, dark sphere inside a nucleus, and a student calls it 'a second nucleus.' What is the structure, and what is it dense with?","options":["A nucleolus, dense with ribosomal RNA and protein","A lysosome that entered the nucleus","A clump of condensed chromatin only","A centriole caught in the nuclear envelope"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-19","module":1,"dok":2,"comp":"w1-organelles","stem":"An organelle in a micrograph is bounded by a double membrane, and the inner membrane is thrown into folds that reach into the interior. Which organelle is it?","options":["A mitochondrion","The Golgi apparatus","A lysosome","Smooth endoplasmic reticulum"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-20","module":1,"dok":3,"comp":"w1-nucleus","stem":"A toxin stops a cell from assembling ribosomal subunits. Which nuclear structure was most likely hit, and through what must finished subunits normally pass to leave the nucleus?","options":["The nucleolus; nuclear pores","The chromatin; the endoplasmic reticulum","The outer nuclear membrane; the Golgi apparatus","The nucleolus; the plasma membrane"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-21","module":1,"dok":3,"comp":"w1-plasma-membrane","stem":"An enzyme strips a cell's glycocalyx completely. Which membrane components were removed?","options":["The carbohydrate chains of glycoproteins and glycolipids on the outer surface","The phospholipid bilayer itself","The integral proteins spanning the membrane","The cholesterol in both leaflets"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-22","module":1,"dok":2,"comp":"w1-generalized-cell","stem":"A cross-section of a whip-like cell projection shows nine microtubule doublets arranged around a central pair (a 9+2 pattern). Which structure is it?","options":["A motile cilium or flagellum","A primary cilium","A microvillus","A centriole"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-23","module":1,"dok":3,"comp":"w1-generalized-cell","stem":"A kidney tubule cell carries one single, nonmotile projection whose core shows nine doublets and NO central pair (9+0). Name the structure, and what the missing central pair tells you.","options":["A primary cilium; without the central pair it senses rather than beats","A motile cilium; the central pair is only visible in longitudinal section","A flagellum; 9+0 is the standard motile arrangement","A microvillus; microvilli always show 9+0"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-24","module":1,"dok":2,"comp":"w1-generalized-cell","stem":"A dense fringe of short projections on an absorptive cell contains no microtubules at all; each is stiffened by a core of actin filaments. Which structure is it?","options":["Microvilli","Motile cilia","Primary cilia","Stereocilia made of microtubules"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-25","module":1,"dok":3,"comp":"w1-epithelial-id","stem":"In a section of an airway, every epithelial cell touches the basement membrane, but the nuclei sit at several heights so the sheet looks layered, and cilia line the free surface. Classify the epithelium.","options":["Pseudostratified ciliated columnar","Stratified columnar","Simple columnar","Transitional"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-26","module":1,"dok":2,"comp":"w1-epithelial-id","stem":"A surface must be as thin as an epithelium can be, a single layer of flattened cells. Which classification is it, and where would you expect it?","options":["Simple squamous, as in the air sacs of the lung","Simple cuboidal, as in the epidermis","Stratified squamous, as in kidney tubules","Simple columnar, as in the lining of blood vessels"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-27","module":1,"dok":2,"comp":"w1-connective-id","stem":"A slide shows scattered cells in a fluid matrix with no visible fibers until the sample clots. Which connective tissue is it?","options":["Blood","Areolar connective tissue","Dense regular connective tissue","Hyaline cartilage"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-28","module":1,"dok":3,"comp":"w1-connective-id","stem":"Two dense connective tissues are compared: in one, the collagen bundles all run the same direction; in the other, bundles run in many directions. Match each to where it belongs.","options":["Parallel bundles in a tendon; multidirectional bundles in the dermis","Parallel bundles in the dermis; multidirectional bundles in a tendon","Both patterns occur only in cartilage","Parallel bundles in blood; multidirectional bundles in bone"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-29","module":1,"dok":2,"comp":"w1-cell-junctions","stem":"Keratinocytes in the epidermis must resist being pulled apart by friction. Which junction does that job, and what does it look like?","options":["Desmosomes: button-like plaques linked by protein filaments","Tight junctions: membranes fused into a leakproof seal","Gap junctions: hollow channels between cells","The basement membrane alone holds them together"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-30","module":1,"dok":2,"comp":"w1-body-membranes","stem":"A membrane lines a passage that opens to the body exterior and is kept wet by its secretions. Classify the membrane and give a correct example.","options":["A mucous membrane, such as the lining of the nasal cavity","A serous membrane, such as the pleura","The cutaneous membrane, such as the lining of the mouth","A serous membrane, such as the lining of the stomach"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-31","module":1,"dok":3,"comp":"w1-epithelial-id","stem":"The bladder lining is examined twice: full, the surface cells are flattened; empty, the surface cells are dome-shaped and the sheet looks thicker. Classify the epithelium and explain the difference.","options":["Transitional epithelium; its cells change shape as the organ stretches","Stratified squamous; the surface cells are always flat","Simple cuboidal; the organ gained a layer when it emptied","Pseudostratified; the nuclei moved between examinations"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-32","module":1,"dok":2,"comp":"w1-cell-junctions","stem":"The hollow channels of a gap junction are built from rings of transmembrane proteins. Name the protein.","options":["Connexins","Cadherins","Claudins","Integrins"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-33","module":1,"dok":2,"comp":"w1-cell-junctions","stem":"The linker proteins that reach across the gap between two desmosome plaques and hook the cells together belong to which family?","options":["Cadherins","Connexins","Claudins and occludins","Actins"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-34","module":1,"dok":3,"comp":"w1-cell-junctions","stem":"A toxin destroys claudins and occludins. Which junction fails, and what happens in the intestinal lining as a result?","options":["Tight junctions fail, and material can now leak between the epithelial cells","Gap junctions fail, and cells can no longer pass signals","Desmosomes fail, and the cells tear apart under friction","Hemidesmosomes fail, and the sheet lifts off the basement membrane"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-35","module":1,"dok":3,"comp":"w1-skin-layers","stem":"A splinter passes through the entire epidermis and stops among blood vessels and collagen. Name the layer it stopped in, and the layer it would enter next if pushed deeper.","options":["The dermis, then the hypodermis","The hypodermis, then the dermis","The stratum basale, then the stratum corneum","The dermis, then the stratum basale"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-36","module":1,"dok":2,"comp":"w1-epidermal-strata","stem":"A slide of skin shows a thin, translucent band of dead cells between the granular layer and the thick cornified surface. Name the band, and what it tells you about the sample.","options":["The stratum lucidum, so this is thick skin from a palm or sole","The stratum spinosum, so this is thin skin","The stratum basale, so this is scalp skin","The stratum granulosum, so the sample is upside down"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-37","module":1,"dok":3,"comp":"w1-epidermal-strata","stem":"After a superficial scrape, cells that still contain keratohyalin granules survive at the wound surface. Which strata did the scrape remove?","options":["Only the strata superficial to the granulosum: the corneum, plus the lucidum if present","The basale and the spinosum","All five strata down to the dermis","Only the stratum basale"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-38","module":1,"dok":2,"comp":"w1-dermis-layers","stem":"The superficial dermal region is thrown into fingerlike projections that push up into the epidermis. Name the region and the projections.","options":["The papillary layer; dermal papillae","The reticular layer; dermal papillae","The papillary layer; lamellar corpuscles","The reticular layer; epidermal ridges"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-39","module":1,"dok":3,"comp":"w1-skin-accessory","stem":"A plucked hair comes out with its expanded deep end intact: living epithelial cells surrounding a small core of connective tissue with capillaries. Name the expanded end and the core.","options":["The hair bulb; the hair papilla","The hair shaft; the arrector pili","The hair root; a sebaceous gland","The hair follicle; the hair cuticle"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-40","module":1,"dok":2,"comp":"w1-skin-accessory","stem":"Nail growth comes from a region of rapidly dividing cells hidden under the fold of skin at the nail's base. Name that region.","options":["The nail matrix","The nail bed","The free edge","The hyponychium"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-41","module":1,"dok":3,"comp":"w1-skin-layers","stem":"Tattoo ink must be placed where it will never be shed. Into which layer must the needle deposit it, and why not shallower?","options":["The dermis, because epidermal cells are continuously shed and replaced","The stratum corneum, because it is the toughest layer","The hypodermis, because deepest lasts longest","The stratum basale, because its cells divide"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-42","module":1,"dok":2,"comp":"w1-epidermal-strata","stem":"One epidermal cell type makes two chemically different pigments: one brownish-black, one reddish-yellow. Name the pigments.","options":["Eumelanin (brownish-black) and pheomelanin (reddish-yellow)","Carotene (brownish-black) and hemoglobin (reddish-yellow)","Keratin (brownish-black) and melanin (reddish-yellow)","Eumelanin (reddish-yellow) and pheomelanin (brownish-black)"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-43","module":1,"dok":2,"comp":"w1-skin-layers","stem":"Three different pigments and colored molecules combine to produce normal skin color. Which set is it?","options":["Melanin, carotene, and hemoglobin","Melanin, keratin, and collagen","Carotene, keratin, and bilirubin","Hemoglobin, collagen, and eumelanin only"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-44","module":1,"dok":3,"comp":"w1-epidermal-strata","stem":"Melanin is made in one cell type but ends up as protective caps over the nuclei of a different cell type. Trace the path.","options":["Melanocytes package melanin in granules, pass it along their processes, and keratinocytes take it up and shield their nuclei","Keratinocytes make melanin and hand it down to melanocytes in the dermis","Melanocytes dissolve and their pigment diffuses evenly through all strata","Dermal cells inject melanin directly into the stratum corneum"],"correct":0,"why":"","whyNot":null},
{"id":"m1g-45","module":1,"dok":3,"comp":"w1-epidermal-strata","stem":"Cells of the stratum granulosum release the contents of their lamellar granules into the space between cells. What is released, and what does it accomplish?","options":["Lipid-rich material that waterproofs the epidermis by sealing the spaces between cells","Keratohyalin that hardens the nuclei of surface cells","Melanin that darkens the deepest stratum","Digestive enzymes that dissolve the basement membrane"],"correct":0,"why":"","whyNot":null}
]);
})();
