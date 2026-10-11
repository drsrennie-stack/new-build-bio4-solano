/* ============================================================
   TEACHING NOTES for the Cadaver Video Library
   (bio004-bluelink-videos.html)

   One entry per section of the library. The key is the system key
   and the section name exactly as they appear in the page data,
   joined by a bar: 'muscle|Upper limb muscles'.

   Fields
     lead    one or two sentences that frame the section
     points  [label, text] pairs; the label prints in bold
     tables  optional list of { cap, cols, rows }
     tip     optional lab or study tip

   Plain text only. No double quotes inside strings.
   ============================================================ */
window.BLUELINK_NOTES = {

/* ---------------- START HERE ---------------- */

"start|Body terms and tissues": {
  lead: "Anatomy has its own address system. Every direction is described from anatomical position, so learn that first and the rest of the words follow.",
  points: [
    ["Anatomical position", "Standing upright, facing forward, feet flat, arms at the sides, palms facing forward with the thumbs pointing away from the body."],
    ["Planes", "Sagittal divides left and right (midsagittal makes equal halves). Frontal, also called coronal, divides front and back. Transverse, also called horizontal, divides top and bottom."],
    ["Quadrants", "Two lines through the umbilicus split the abdomen into the right upper, left upper, right lower and left lower quadrants (RUQ, LUQ, RLQ, LLQ). Right and left are always the patient's, not yours."],
    ["Four basic tissues", "Epithelial, connective, muscle and nervous. Every organ is built from some mix of these four."],
    ["Epithelium", "Covers surfaces and lines cavities. It has no blood vessels of its own and sits on a basement membrane. It is named by layers (simple, stratified, pseudostratified) and by cell shape (squamous, cuboidal, columnar)."],
    ["Connective tissue", "Cells scattered in an extracellular matrix of fibers and ground substance. Loose and dense connective tissue, cartilage, bone and blood are all connective tissues."]
  ],
  tables: [{
    cap: "Directional terms",
    cols: ["Term", "Means", "Example"],
    rows: [
      ["Superior / inferior", "toward the head / toward the feet", "The nose is superior to the mouth."],
      ["Anterior (ventral) / posterior (dorsal)", "toward the front / toward the back", "The sternum is anterior to the heart."],
      ["Medial / lateral", "toward the midline / away from the midline", "The ulna is medial to the radius."],
      ["Proximal / distal", "closer to / farther from where a limb attaches", "The elbow is proximal to the wrist."],
      ["Superficial / deep", "toward the surface / away from the surface", "Skin is superficial to muscle."]
    ]
  }],
  tip: "Every direction assumes anatomical position, even when the donor in a video is lying face down."
},

"start|Quick system overviews": {
  lead: "Three minute previews of whole systems. Watch one before a new unit starts so the details have somewhere to land.",
  points: [
    ["Musculoskeletal", "Bones, joints and skeletal muscles. Support, movement, protection, mineral storage and blood cell formation in red marrow."],
    ["Nervous", "The central nervous system (brain and spinal cord) and the peripheral nervous system (cranial nerves, spinal nerves and ganglia)."],
    ["Respiratory", "The conducting zone moves and conditions air. The respiratory zone (respiratory bronchioles, alveolar ducts, alveoli) is where gas exchange happens."],
    ["Digestive", "The alimentary canal from mouth to anus, plus accessory organs that add secretions: teeth, tongue, salivary glands, liver, gallbladder and pancreas."],
    ["Lymphatic", "Returns leaked fluid to the blood, absorbs dietary fat in the small intestine, and houses immune cells."],
    ["Integumentary", "Skin plus its derivatives: hair, nails, and sweat and oil glands."]
  ],
  tip: "When a preview ends, list every organ it named from memory before you move on."
},

"start|How cadaver dissection works": {
  lead: "These short clips show how a dissection is done. They explain what you are looking at in every other cadaver video on this page.",
  points: [
    ["Layers come off in order", "Skin, then superficial fascia (fat with cutaneous nerves and superficial veins), then deep fascia, then muscle."],
    ["Reflecting", "Cutting a muscle and folding it back to show what lies underneath. It stays attached at one end, so you can fold it back into place."],
    ["Retracting", "Holding a structure out of the way without cutting it."],
    ["Embalmed tissue", "Firmer and grayer than living tissue. Colors will not match a textbook drawing, so learn structures by shape, position and what they connect to."],
    ["The donors", "Every person in these videos chose to donate their body for teaching. Treat the videos with the same respect you bring to our lab."]
  ],
  tip: "When a later video says a muscle was reflected, look for the cut edge to see where it really sits."
},

/* ---------------- SKELETAL ---------------- */

"skeletal|Bone tissue and bone basics": {
  lead: "Bone is living tissue that is built and torn down all the time. Learn the parts of a long bone and the four bone cells first, because everything else builds on them.",
  points: [
    ["Two divisions", "The adult skeleton has 206 bones. The axial skeleton (80) is the skull, ear ossicles, hyoid, vertebral column and thoracic cage. The appendicular skeleton (126) is the girdles and limbs."],
    ["Bone shapes", "Long (femur), short (carpals), flat (sternum, parietal), irregular (vertebrae) and sesamoid (patella)."],
    ["Long bone parts", "Diaphysis (shaft with the medullary cavity), epiphyses (ends of spongy bone capped with articular cartilage), epiphyseal plate in children or epiphyseal line in adults, periosteum covering the outside, endosteum lining the inside."],
    ["Compact bone", "Built from osteons. Each osteon has a central canal surrounded by rings of lamellae, with osteocytes sitting in lacunae and talking through tiny canaliculi. Perforating canals run sideways and connect the central canals."],
    ["Spongy bone", "A lattice of trabeculae with no osteons. Red marrow fills the spaces."],
    ["Matrix", "About one third organic (mostly collagen, gives flexibility) and two thirds mineral (calcium phosphate as hydroxyapatite, gives hardness)."],
    ["Ossification", "Intramembranous ossification builds flat skull bones and the clavicle directly from mesenchyme. Endochondral ossification replaces a hyaline cartilage model and builds most other bones."],
    ["Growth", "Bones grow in length at the epiphyseal plate and in width by adding bone to the outer surface (appositional growth)."],
    ["Remodeling", "Osteoclasts remove bone and osteoblasts lay it down. Parathyroid hormone raises blood calcium; calcitonin lowers it. Vitamin D is needed to absorb calcium from the gut."],
    ["Osteoporosis", "Bone removal outpaces bone building, so bones become porous and break easily. Risk rises after menopause as estrogen falls."],
    ["Fracture repair", "Hematoma forms, then a soft fibrocartilage callus, then a hard bony callus, then remodeling back to normal shape."]
  ],
  tables: [{
    cap: "Bone cells",
    cols: ["Cell", "Job"],
    rows: [
      ["Osteogenic (osteoprogenitor) cell", "Stem cell that becomes an osteoblast"],
      ["Osteoblast", "Builds new matrix"],
      ["Osteocyte", "Mature bone cell trapped in a lacuna; maintains the matrix and senses stress"],
      ["Osteoclast", "Large cell with many nuclei; dissolves bone (resorption)"]
    ]
  }]
},

"skeletal|Skull and face": {
  lead: "The skull has 22 bones: 8 cranial bones that surround the brain and 14 facial bones. Sutures lock almost all of them together. The mandible is the only one that moves.",
  tables: [{
    cap: "Skull bones and landmarks",
    cols: ["Bone", "How many", "Landmarks to know"],
    rows: [
      ["Frontal", "1", "Supraorbital foramen, frontal sinus"],
      ["Parietal", "2", "Form the roof and upper sides"],
      ["Temporal", "2", "External acoustic meatus, mastoid process, styloid process, zygomatic process, mandibular fossa"],
      ["Occipital", "1", "Foramen magnum, occipital condyles, external occipital protuberance"],
      ["Sphenoid", "1", "Sella turcica (holds the pituitary), greater and lesser wings, pterygoid processes, optic canal"],
      ["Ethmoid", "1", "Crista galli, cribriform plate, perpendicular plate, superior and middle nasal conchae"],
      ["Maxilla", "2", "Upper teeth, front of the hard palate, infraorbital foramen, maxillary sinus"],
      ["Zygomatic", "2", "Cheekbone; with the temporal bone it forms the zygomatic arch"],
      ["Nasal", "2", "Bridge of the nose"],
      ["Lacrimal", "2", "Medial orbit wall; groove for the tear duct"],
      ["Palatine", "2", "Back of the hard palate"],
      ["Inferior nasal concha", "2", "Lowest shelf on the lateral nasal wall"],
      ["Vomer", "1", "Lower part of the nasal septum"],
      ["Mandible", "1", "Body, ramus, angle, condylar process, coronoid process, mental foramen, mandibular foramen"]
    ]
  }],
  points: [
    ["Sutures", "Coronal (frontal and parietals), sagittal (between the parietals), lambdoid (parietals and occipital), squamous (parietal and temporal)."],
    ["Cranial fossae", "Anterior holds the frontal lobes. Middle holds the temporal lobes and the pituitary. Posterior holds the cerebellum and brainstem."],
    ["Orbit", "Seven bones make the orbit: frontal, sphenoid, zygomatic, maxilla, ethmoid, lacrimal and palatine."],
    ["Hyoid", "Not part of the skull and touches no other bone. Muscles and ligaments hang it in the neck, and it anchors the tongue."],
    ["Two words in the videos", "Neurocranium means the cranial bones. Viscerocranium means the facial bones."]
  ]
},

"skeletal|Vertebral column, neck, and thorax": {
  lead: "The adult vertebral column has 26 bones: 7 cervical, 12 thoracic, 5 lumbar, the sacrum and the coccyx. Each region has a shape you can recognize on sight.",
  tables: [{
    cap: "Telling the vertebrae apart",
    cols: ["Region", "Count", "How to recognize it"],
    rows: [
      ["Cervical", "7", "Transverse foramina, small body, often a split (bifid) spinous process. C1 atlas has no body; C2 axis has the dens; C7 has a long spinous process you can feel."],
      ["Thoracic", "12", "Facets for the ribs, heart-shaped body, long spinous process that points down"],
      ["Lumbar", "5", "Largest body (kidney-shaped), short thick spinous process"],
      ["Sacrum", "5 fused", "Sacral foramina, auricular surface that joins the ilium, sacral promontory"],
      ["Coccyx", "3 to 5 fused", "Small tail at the bottom"]
    ]
  }],
  points: [
    ["Parts of a typical vertebra", "Body, vertebral arch (pedicles and laminae), vertebral foramen, spinous process, transverse processes, superior and inferior articular processes. Spinal nerves exit through intervertebral foramina."],
    ["Curves", "Thoracic and sacral curves are present at birth (primary). Cervical and lumbar curves develop as a baby holds up its head and walks (secondary)."],
    ["Intervertebral disc", "A gel center (nucleus pulposus) inside rings of fibrocartilage (annulus fibrosus). A herniated disc is the nucleus pushing through the annulus."],
    ["Sternum", "Manubrium, body and xiphoid process. The sternal angle, where the manubrium meets the body, lines up with the second rib."],
    ["Ribs", "12 pairs. True ribs 1 to 7 attach to the sternum by their own costal cartilage. False ribs 8 to 12 do not; 8 to 10 attach through the cartilage of rib 7, and 11 and 12 float free."]
  ],
  tip: "Start counting ribs at the sternal angle. Rib 2 attaches there."
},

"skeletal|Upper limb bones": {
  lead: "The pectoral girdle (clavicle and scapula) connects the arm to the trunk. The clavicle is the only bone that ties the upper limb to the axial skeleton.",
  tables: [{
    cap: "Upper limb landmarks",
    cols: ["Bone", "Landmarks to know"],
    rows: [
      ["Clavicle", "Sternal end, acromial end, S-shaped body"],
      ["Scapula", "Spine, acromion, coracoid process, glenoid cavity, supraspinous and infraspinous fossae, subscapular fossa, medial and lateral borders, inferior angle"],
      ["Humerus", "Head, anatomical and surgical necks, greater and lesser tubercles, intertubercular sulcus, deltoid tuberosity, radial groove, medial and lateral epicondyles, trochlea, capitulum, olecranon fossa, coronoid fossa"],
      ["Ulna (pinky side)", "Olecranon, trochlear notch, coronoid process, radial notch, styloid process"],
      ["Radius (thumb side)", "Head, radial tuberosity, ulnar notch, styloid process"],
      ["Hand", "8 carpals, 5 metacarpals, 14 phalanges"]
    ]
  }],
  points: [
    ["Carpals", "Proximal row, lateral to medial: scaphoid, lunate, triquetrum, pisiform. Distal row, lateral to medial: trapezium, trapezoid, capitate, hamate."],
    ["Phalanges", "The thumb (pollex) has two phalanges. Each finger has three: proximal, middle and distal."],
    ["Who does what", "The ulna forms the main hinge at the elbow. The radius forms most of the wrist joint."]
  ],
  tip: "Surgical neck fractures of the humerus are common in falls. The axillary nerve wraps around this spot."
},

"skeletal|Pelvis and lower limb bones": {
  lead: "Each coxal (hip) bone is three bones fused together: ilium, ischium and pubis. All three meet at the acetabulum, the socket for the femur.",
  tables: [{
    cap: "Pelvis and lower limb landmarks",
    cols: ["Bone", "Landmarks to know"],
    rows: [
      ["Ilium", "Iliac crest, anterior superior iliac spine (ASIS), anterior inferior iliac spine, posterior superior iliac spine, iliac fossa, greater sciatic notch, auricular surface"],
      ["Ischium", "Ischial tuberosity (what you sit on), ischial spine, lesser sciatic notch"],
      ["Pubis", "Pubic symphysis, superior and inferior pubic rami; the obturator foramen is shared with the ischium"],
      ["Femur", "Head, fovea capitis, neck, greater and lesser trochanters, linea aspera, medial and lateral condyles and epicondyles, patellar surface"],
      ["Patella", "Sesamoid bone inside the quadriceps tendon"],
      ["Tibia (medial, carries weight)", "Medial and lateral condyles, tibial tuberosity, anterior border, medial malleolus"],
      ["Fibula (lateral)", "Head, lateral malleolus"],
      ["Foot", "7 tarsals (talus, calcaneus, navicular, cuboid, three cuneiforms), 5 metatarsals, 14 phalanges"]
    ]
  }],
  points: [
    ["Pelvis", "The two coxal bones, the sacrum and the coccyx together. A typical female pelvis is wider and shallower with a rounder inlet and a pubic arch wider than 90 degrees, which makes room for childbirth."],
    ["Arches of the foot", "Medial longitudinal, lateral longitudinal and transverse arches spread body weight and add spring to each step."]
  ],
  tip: "Medial malleolus belongs to the tibia, lateral malleolus to the fibula."
},

/* ---------------- JOINTS ---------------- */

"joints|Joint basics": {
  lead: "Joints are classified two ways: by what holds the bones together (structure) and by how much they move (function).",
  tables: [{
    cap: "Structural classes",
    cols: ["Class", "Held together by", "Movement", "Examples"],
    rows: [
      ["Fibrous", "Dense connective tissue, no cavity", "None or slight", "Sutures; syndesmosis (distal tibia and fibula); gomphosis (tooth in its socket)"],
      ["Cartilaginous", "Cartilage, no cavity", "None or slight", "Synchondrosis (epiphyseal plate, first rib to sternum); symphysis (pubic symphysis, intervertebral discs)"],
      ["Synovial", "Joint capsule around a fluid-filled cavity", "Free", "Shoulder, elbow, hip, knee"]
    ]
  }, {
    cap: "Types of synovial joints",
    cols: ["Type", "Movement", "Example"],
    rows: [
      ["Plane", "Gliding", "Intercarpal joints"],
      ["Hinge", "Flexion and extension", "Elbow, interphalangeal joints"],
      ["Pivot", "Rotation", "Atlas on axis, proximal radioulnar joint"],
      ["Condylar (ellipsoid)", "Flex and extend, abduct and adduct", "Wrist, knuckles (metacarpophalangeal)"],
      ["Saddle", "Same as condylar, plus opposition", "Thumb carpometacarpal joint"],
      ["Ball and socket", "All directions, including rotation", "Shoulder, hip"]
    ]
  }],
  points: [
    ["Parts of every synovial joint", "Articular (hyaline) cartilage on the bone ends, a joint capsule (fibrous outer layer and synovial membrane inside), a joint cavity filled with synovial fluid, and reinforcing ligaments."],
    ["Extras some joints have", "Bursae and tendon sheaths cut friction. Menisci and articular discs improve fit. Fat pads cushion."],
    ["Function words", "Synarthrosis is immovable, amphiarthrosis slightly movable, diarthrosis freely movable."],
    ["Arthritis", "Osteoarthritis is wear of the articular cartilage. Rheumatoid arthritis is the immune system attacking the synovial membrane."]
  ]
},

"joints|Joints by region": {
  lead: "For each major joint, know the bones that meet, the joint type, and what holds it together.",
  tables: [{
    cap: "Major synovial joints",
    cols: ["Joint", "Bones", "Type", "What holds it"],
    rows: [
      ["Temporomandibular (TMJ)", "Condylar process of the mandible and mandibular fossa of the temporal bone", "Modified hinge with gliding", "Articular disc, lateral ligament"],
      ["Shoulder (glenohumeral)", "Head of the humerus and glenoid cavity", "Ball and socket", "Glenoid labrum, rotator cuff tendons, glenohumeral and coracohumeral ligaments. Most mobile, least stable."],
      ["Elbow", "Humerus with ulna (trochlea in trochlear notch) and radius (capitulum and radial head)", "Hinge", "Ulnar and radial collateral ligaments; annular ligament holds the radial head"],
      ["Wrist (radiocarpal)", "Radius with scaphoid and lunate", "Condylar", "Radial and ulnar collateral ligaments, palmar and dorsal ligaments"],
      ["Hip", "Head of the femur and acetabulum", "Ball and socket", "Acetabular labrum; iliofemoral, pubofemoral and ischiofemoral ligaments; ligament of the head of the femur"],
      ["Knee", "Femur, tibia and patella", "Modified hinge", "ACL, PCL, tibial (medial) and fibular (lateral) collateral ligaments, medial and lateral menisci, patellar ligament"],
      ["Ankle (talocrural)", "Tibia and fibula with the talus", "Hinge", "Deltoid ligament (medial); anterior talofibular, calcaneofibular and posterior talofibular ligaments (lateral)"]
    ]
  }],
  points: [
    ["Cruciate ligaments", "The ACL stops the tibia sliding forward on the femur. The PCL stops it sliding backward."],
    ["Common injuries", "The shoulder usually dislocates forward and down. The most common ankle sprain tears the anterior talofibular ligament when the foot rolls in (inversion)."]
  ],
  tip: "Lab station videos show these joints on models. Dissection videos show the real ligaments, which look like white bands."
},

"joints|Movement clips (under 1 minute)": {
  lead: "Each clip shows one movement. Do the movement yourself while it plays and say its name out loud.",
  tables: [{
    cap: "Movement words",
    cols: ["Movement", "What happens"],
    rows: [
      ["Flexion / extension", "Decreases / increases the angle between bones"],
      ["Hyperextension", "Extension past anatomical position"],
      ["Abduction / adduction", "Away from / toward the midline"],
      ["Circumduction", "Moving the limb in a cone; flexion, abduction, extension and adduction in sequence"],
      ["Medial / lateral rotation", "Turning around the long axis toward / away from the midline"],
      ["Pronation / supination", "Forearm turns palm down (back) / palm up (forward)"],
      ["Dorsiflexion / plantarflexion", "Toes up toward the shin / toes pointed down"],
      ["Inversion / eversion", "Sole turns inward / outward"],
      ["Opposition / reposition", "Thumb moves across the palm to touch a fingertip / returns"],
      ["Protraction / retraction", "Forward / backward (mandible, scapula)"],
      ["Elevation / depression", "Up / down (mandible, scapula)"]
    ]
  }],
  points: [
    ["Fingers and toes", "Fingers abduct and adduct relative to the middle finger. Toes do so relative to the second toe."],
    ["The thumb is turned", "The thumb sits rotated 90 degrees from the fingers, so thumb flexion moves it across the palm rather than forward."]
  ]
},

/* ---------------- MUSCULAR ---------------- */

"muscle|Muscle tissue basics": {
  lead: "Skeletal muscle is organized like a cable: bundles inside bundles, each wrapped in its own connective tissue sheath.",
  tables: [{
    cap: "Three kinds of muscle tissue",
    cols: ["Type", "Look", "Control", "Where"],
    rows: [
      ["Skeletal", "Long cylinders, striated, many nuclei at the edge", "Voluntary", "Attached to bones and skin"],
      ["Cardiac", "Branched, striated, one or two central nuclei, intercalated discs", "Involuntary", "Heart wall"],
      ["Smooth", "Spindle-shaped, no striations, one central nucleus", "Involuntary", "Walls of hollow organs and blood vessels"]
    ]
  }],
  points: [
    ["Wrappings", "Epimysium surrounds the whole muscle, perimysium surrounds each fascicle, endomysium surrounds each fiber. All three continue into the tendon."],
    ["Inside a fiber", "Myofibrils made of sarcomeres lined up end to end, Z disc to Z disc. Thick filaments are myosin, thin filaments are actin. T tubules carry the signal inward, and the sarcoplasmic reticulum stores calcium."],
    ["Neuromuscular junction", "A motor neuron releases acetylcholine onto the fiber. A motor unit is one motor neuron plus every fiber it controls."],
    ["Sliding filaments", "Calcium binds troponin, tropomyosin moves off the binding sites, and myosin heads pull the thin filaments toward the center. The sarcomere shortens; the filaments themselves do not."],
    ["Attachments", "The origin is the attachment that stays put, usually proximal. The insertion is the one that moves."],
    ["Teamwork", "The prime mover (agonist) does most of the work, the antagonist does the opposite, synergists help, and fixators hold the origin steady."],
    ["Contraction types", "Concentric (muscle shortens), eccentric (muscle lengthens while working, like lowering a weight), isometric (tension without length change)."]
  ],
  link: { href: "https://www.medmasterscollaborative.com/muscle-charts-i-o-a-inn", text: "Drill origins, insertions, actions and nerves in Muscle charts, I O A" }
},

"muscle|Head and neck muscles": {
  lead: "Head muscles fall into two working groups. Facial expression muscles pull on skin and are all supplied by the facial nerve (CN VII). Chewing muscles move the mandible and are supplied by the mandibular branch of the trigeminal nerve (CN V3).",
  tables: [{
    cap: "Major head and neck muscles",
    cols: ["Muscle", "Origin", "Insertion", "Action", "Nerve"],
    rows: [
      ["Frontalis", "Epicranial aponeurosis", "Skin of the eyebrows", "Raises eyebrows, wrinkles forehead", "Facial (CN VII)"],
      ["Orbicularis oculi", "Medial wall of the orbit", "Skin around the eye", "Closes the eye", "Facial (CN VII)"],
      ["Orbicularis oris", "Maxilla, mandible and nearby facial muscles", "Lips", "Closes and purses the lips", "Facial (CN VII)"],
      ["Zygomaticus major", "Zygomatic bone", "Corner of the mouth", "Pulls the corner up and out (smile)", "Facial (CN VII)"],
      ["Buccinator", "Maxilla and mandible near the molars", "Corner of the mouth", "Presses cheek in, keeps food between the teeth", "Facial (CN VII)"],
      ["Platysma", "Fascia over the chest and shoulder", "Mandible and skin of the lower face", "Tenses neck skin, pulls the lower lip down", "Facial (CN VII)"],
      ["Masseter", "Zygomatic arch", "Angle and ramus of the mandible", "Elevates the mandible (closes jaw)", "Trigeminal (CN V3)"],
      ["Temporalis", "Temporal fossa", "Coronoid process of the mandible", "Elevates and retracts the mandible", "Trigeminal (CN V3)"],
      ["Medial pterygoid", "Lateral pterygoid plate (medial side)", "Inner surface of the ramus near the angle", "Elevates mandible, side-to-side grinding", "Trigeminal (CN V3)"],
      ["Lateral pterygoid", "Sphenoid and lateral pterygoid plate (lateral side)", "Neck of the condylar process and TMJ disc", "Protracts mandible, opens jaw, side-to-side grinding", "Trigeminal (CN V3)"],
      ["Sternocleidomastoid", "Manubrium and medial clavicle", "Mastoid process", "One side: tilts head to that side and turns face to the other. Both: flex the neck.", "Accessory (CN XI)"]
    ]
  }],
  points: [
    ["Eye muscles", "Lateral rectus is supplied by CN VI and superior oblique by CN IV. Every other extraocular muscle, plus the levator that lifts the eyelid, is supplied by CN III."],
    ["Tongue", "Tongue muscles are supplied by the hypoglossal nerve (CN XII), except palatoglossus, which is supplied by the vagus (CN X)."],
    ["Hyoid muscles", "Suprahyoid muscles raise the hyoid during swallowing. Infrahyoid (strap) muscles pull it down and are supplied by the ansa cervicalis (C1 to C3)."],
    ["Throat", "Pharyngeal constrictors and almost all laryngeal muscles are supplied by the vagus (CN X)."],
    ["Reading a muscle name", "Names describe location, shape, size, fiber direction, attachments, action or number of heads. Sternocleidomastoid tells you all three of its attachments."]
  ],
  link: { href: "https://www.medmasterscollaborative.com/muscle-charts-i-o-a-inn", text: "Drill origins, insertions, actions and nerves in Muscle charts, I O A" }
},

"muscle|Back, thorax, abdomen, and pelvis": {
  lead: "Trunk muscles hold you upright, move the vertebral column, power breathing, and form the walls of the abdomen and the floor of the pelvis.",
  tables: [{
    cap: "Major trunk muscles",
    cols: ["Muscle", "Origin", "Insertion", "Action", "Nerve"],
    rows: [
      ["Trapezius", "Occipital bone, ligamentum nuchae, spinous processes C7 to T12", "Lateral clavicle, acromion, spine of the scapula", "Elevates, retracts, depresses and upwardly rotates the scapula", "Accessory (CN XI)"],
      ["Latissimus dorsi", "Spinous processes T7 to L5, thoracolumbar fascia, iliac crest, lower ribs", "Intertubercular sulcus of the humerus", "Extends, adducts and medially rotates the arm", "Thoracodorsal"],
      ["Erector spinae (iliocostalis, longissimus, spinalis)", "Iliac crest, sacrum, ribs, vertebrae", "Ribs, vertebrae, mastoid process", "Extends and laterally flexes the vertebral column", "Dorsal rami of spinal nerves"],
      ["Diaphragm", "Xiphoid process, lower six costal cartilages, lumbar vertebrae", "Central tendon", "Flattens to enlarge the thorax; main muscle of inspiration", "Phrenic (C3 to C5)"],
      ["External intercostals", "Lower border of the rib above", "Upper border of the rib below", "Elevate the ribs during inspiration", "Intercostal nerves"],
      ["Internal intercostals", "Upper border of the rib below", "Lower border of the rib above", "Depress the ribs during forced expiration", "Intercostal nerves"],
      ["Rectus abdominis", "Pubic crest and symphysis", "Xiphoid process, costal cartilages 5 to 7", "Flexes the trunk, compresses the abdomen", "Ventral rami T7 to T12"],
      ["External oblique", "Outer surfaces of the lower eight ribs", "Linea alba, pubic tubercle, iliac crest", "Compresses abdomen, flexes trunk, rotates trunk to the opposite side", "Ventral rami T7 to T12"],
      ["Internal oblique", "Thoracolumbar fascia, iliac crest, inguinal ligament", "Linea alba, pubic crest, lower ribs", "Compresses abdomen, flexes trunk, rotates trunk to the same side", "Ventral rami T7 to L1"],
      ["Transversus abdominis", "Inguinal ligament, iliac crest, thoracolumbar fascia, lower costal cartilages", "Linea alba, pubic crest", "Compresses the abdomen", "Ventral rami T7 to L1"],
      ["Levator ani", "Pubis, ischial spine, fascia between them", "Coccyx, perineal body, anococcygeal ligament", "Holds up the pelvic organs, resists pressure when you cough or strain", "Nerve to levator ani (S4), pudendal"]
    ]
  }],
  points: [
    ["Abdominal wall layers", "Superficial to deep: external oblique, internal oblique, transversus abdominis. Their fibers run in three different directions, like plywood. Rectus abdominis runs vertically inside the rectus sheath, and the linea alba is the midline seam."],
    ["Pelvic floor", "Levator ani plus coccygeus form the pelvic diaphragm."],
    ["Inguinal canal", "A passage through the lower abdominal wall that carries the spermatic cord or the round ligament of the uterus. It is a weak spot where hernias form."]
  ],
  link: { href: "https://www.medmasterscollaborative.com/muscle-charts-i-o-a-inn", text: "Drill origins, insertions, actions and nerves in Muscle charts, I O A" }
},

"muscle|Upper limb muscles": {
  lead: "Learn upper limb muscles by compartment. Muscles in the same compartment usually share an action and a nerve, which cuts the memorizing down a lot.",
  tables: [{
    cap: "Major upper limb muscles",
    cols: ["Muscle", "Origin", "Insertion", "Action", "Nerve"],
    rows: [
      ["Pectoralis major", "Clavicle, sternum, costal cartilages 1 to 6", "Lateral lip of the intertubercular sulcus", "Flexes, adducts and medially rotates the arm", "Medial and lateral pectoral"],
      ["Serratus anterior", "Ribs 1 to 8 or 9", "Anterior surface of the medial border of the scapula", "Protracts and upwardly rotates the scapula; holds it to the chest wall", "Long thoracic"],
      ["Deltoid", "Lateral clavicle, acromion, spine of the scapula", "Deltoid tuberosity", "Abducts the arm; front fibers flex, back fibers extend", "Axillary"],
      ["Supraspinatus", "Supraspinous fossa", "Greater tubercle", "Starts abduction", "Suprascapular"],
      ["Infraspinatus", "Infraspinous fossa", "Greater tubercle", "Laterally rotates the arm", "Suprascapular"],
      ["Teres minor", "Lateral border of the scapula", "Greater tubercle", "Laterally rotates the arm", "Axillary"],
      ["Subscapularis", "Subscapular fossa", "Lesser tubercle", "Medially rotates the arm", "Upper and lower subscapular"],
      ["Biceps brachii", "Short head: coracoid process. Long head: supraglenoid tubercle", "Radial tuberosity", "Flexes the elbow, supinates the forearm", "Musculocutaneous"],
      ["Brachialis", "Front of the distal humerus", "Coronoid process and ulnar tuberosity", "Main flexor of the elbow", "Musculocutaneous"],
      ["Brachioradialis", "Lateral supracondylar ridge of the humerus", "Styloid process of the radius", "Flexes the elbow", "Radial"],
      ["Triceps brachii", "Long head: infraglenoid tubercle. Lateral and medial heads: back of the humerus", "Olecranon", "Extends the elbow", "Radial"],
      ["Superficial forearm flexors (flexor carpi radialis, palmaris longus, flexor carpi ulnaris, flexor digitorum superficialis)", "Medial epicondyle (common flexor origin)", "Carpals, metacarpals or phalanges", "Flex the wrist and fingers", "Median; flexor carpi ulnaris is ulnar"],
      ["Forearm extensors", "Mostly the lateral epicondyle (common extensor origin)", "Metacarpals and phalanges", "Extend the wrist and fingers", "Radial"]
    ]
  }],
  points: [
    ["Rotator cuff", "Supraspinatus, infraspinatus, teres minor and subscapularis (SITS). Their tendons hold the humeral head in the shallow glenoid cavity."],
    ["Arm compartments", "Anterior compartment flexes the elbow (musculocutaneous nerve). Posterior compartment extends it (radial nerve)."],
    ["Forearm compartments", "Anterior flexes wrist and fingers and pronates (mostly median nerve). Posterior extends wrist and fingers and supinates (radial nerve)."],
    ["Hand", "Thenar muscles move the thumb, hypothenar muscles move the little finger, lumbricals flex the knuckles while straightening the fingers, and interossei spread (dorsal) and close (palmar) the fingers. Most are ulnar nerve; the thenar group and the two lateral lumbricals are median."]
  ],
  link: { href: "https://www.medmasterscollaborative.com/muscle-charts-i-o-a-inn", text: "Drill origins, insertions, actions and nerves in Muscle charts, I O A" }
},

"muscle|Lower limb muscles": {
  lead: "Same trick as the arm: learn by compartment. Each compartment has one main job and one nerve.",
  tables: [{
    cap: "Major lower limb muscles",
    cols: ["Muscle", "Origin", "Insertion", "Action", "Nerve"],
    rows: [
      ["Iliopsoas (psoas major and iliacus)", "Lumbar vertebrae (psoas), iliac fossa (iliacus)", "Lesser trochanter", "Main flexor of the hip", "Femoral (iliacus); lumbar ventral rami (psoas)"],
      ["Gluteus maximus", "Back of the ilium, sacrum, coccyx", "Gluteal tuberosity and iliotibial tract", "Extends and laterally rotates the hip (climbing, rising from a chair)", "Inferior gluteal"],
      ["Gluteus medius", "Outer surface of the ilium", "Greater trochanter", "Abducts and medially rotates the hip; keeps the pelvis level when you walk", "Superior gluteal"],
      ["Gluteus minimus", "Outer surface of the ilium, deep to medius", "Greater trochanter", "Same as gluteus medius", "Superior gluteal"],
      ["Piriformis", "Front of the sacrum", "Greater trochanter", "Laterally rotates the hip", "Nerve to piriformis (S1, S2)"],
      ["Sartorius", "ASIS", "Medial surface of the upper tibia", "Flexes, abducts and laterally rotates the hip; flexes the knee", "Femoral"],
      ["Quadriceps femoris (rectus femoris, vastus lateralis, vastus medialis, vastus intermedius)", "Rectus femoris: AIIS. Vasti: femur", "Tibial tuberosity by way of the patellar ligament", "Extends the knee; rectus femoris also flexes the hip", "Femoral"],
      ["Adductors (adductor longus, brevis, magnus, gracilis, pectineus)", "Pubis; adductor magnus also from the ischial tuberosity", "Linea aspera; gracilis on the medial tibia", "Adduct the thigh", "Obturator; pectineus: femoral; hamstring part of adductor magnus: tibial"],
      ["Hamstrings (biceps femoris, semitendinosus, semimembranosus)", "Ischial tuberosity; biceps short head from the linea aspera", "Head of the fibula (biceps); medial tibia (semis)", "Extend the hip, flex the knee", "Tibial part of the sciatic; biceps short head: common fibular part"],
      ["Tibialis anterior", "Lateral tibia", "Medial cuneiform and first metatarsal", "Dorsiflexes and inverts the foot", "Deep fibular"],
      ["Fibularis longus and brevis", "Fibula", "First metatarsal and medial cuneiform (longus); base of the fifth metatarsal (brevis)", "Evert the foot", "Superficial fibular"],
      ["Gastrocnemius", "Medial and lateral femoral condyles", "Calcaneus by way of the calcaneal tendon", "Plantarflexes the foot, flexes the knee", "Tibial"],
      ["Soleus", "Upper tibia and fibula", "Calcaneus by way of the calcaneal tendon", "Plantarflexes the foot", "Tibial"]
    ]
  }],
  points: [
    ["Thigh compartments", "Anterior extends the knee (femoral nerve). Medial adducts (obturator nerve). Posterior is the hamstrings (sciatic nerve)."],
    ["Leg compartments", "Anterior dorsiflexes (deep fibular nerve). Lateral everts (superficial fibular nerve). Posterior plantarflexes (tibial nerve)."],
    ["Foot", "The plantar aponeurosis is the thick sheet under the sole. Under it, the intrinsic foot muscles sit in four layers."]
  ],
  link: { href: "https://www.medmasterscollaborative.com/muscle-charts-i-o-a-inn", text: "Drill origins, insertions, actions and nerves in Muscle charts, I O A" }
},

"muscle|Anatomy through yoga": {
  lead: "Short lectures tie familiar poses to the muscles doing the work, then flows let you feel it. Moving through a pose is a strong way to remember which muscle makes which action.",
  points: [
    ["What to notice", "In each pose, name the muscle that is contracting and the one being stretched. A forward fold stretches the hamstrings. A low lunge stretches the hip flexors of the back leg (iliopsoas and rectus femoris)."],
    ["Connect to the charts", "When the instructor names a muscle, say its action out loud before she explains it."]
  ],
  tip: "Stay in a comfortable range and stop if anything hurts."
},

/* ---------------- NERVOUS ---------------- */

"nervous|Nervous system basics": {
  lead: "The nervous system is divided two ways: by location (central or peripheral) and by direction of the signal (sensory or motor).",
  points: [
    ["Central and peripheral", "The CNS is the brain and spinal cord. The PNS is 12 pairs of cranial nerves, 31 pairs of spinal nerves and their ganglia."],
    ["Sensory and motor", "Afferent (sensory) fibers carry signals toward the CNS. Efferent (motor) fibers carry signals away from it."],
    ["Two motor systems", "The somatic system controls skeletal muscle and is voluntary. The autonomic system controls smooth muscle, cardiac muscle and glands and has sympathetic and parasympathetic divisions."],
    ["Neuron", "Cell body, dendrites that receive signals, and one axon that sends them."],
    ["Gray and white matter", "Gray matter is mostly cell bodies. White matter is mostly myelinated axons, and the myelin makes it look white."],
    ["Glial cells", "CNS: astrocytes, microglia, ependymal cells, oligodendrocytes. PNS: Schwann cells and satellite cells."]
  ],
  tables: [{
    cap: "Same idea, different name",
    cols: ["", "In the CNS", "In the PNS"],
    rows: [
      ["Cluster of cell bodies", "Nucleus", "Ganglion"],
      ["Bundle of axons", "Tract", "Nerve"],
      ["Cell that makes myelin", "Oligodendrocyte", "Schwann cell"]
    ]
  }]
},

"nervous|Brain": {
  lead: "The brain has four main parts: cerebrum, diencephalon, brainstem and cerebellum.",
  tables: [{
    cap: "Parts of the brain",
    cols: ["Part", "Pieces", "Main jobs"],
    rows: [
      ["Cerebrum", "Two hemispheres; frontal, parietal, temporal and occipital lobes plus the insula; cortex, white matter, basal nuclei", "Thinking, voluntary movement, sensation, language, memory"],
      ["Diencephalon", "Thalamus, hypothalamus, epithalamus (pineal gland)", "Thalamus relays sensory signals to the cortex. Hypothalamus controls the autonomic system, body temperature, hunger, thirst and the pituitary."],
      ["Brainstem", "Midbrain, pons, medulla oblongata", "Pathways between brain and cord; nuclei of cranial nerves III to XII. The medulla controls heart rate, breathing and blood pressure."],
      ["Cerebellum", "Two hemispheres joined by the vermis; white matter arbor vitae", "Coordinates movement, balance and posture"]
    ]
  }],
  points: [
    ["Landmarks", "The longitudinal fissure separates the hemispheres. The central sulcus separates frontal and parietal lobes. The lateral sulcus sets off the temporal lobe. The corpus callosum connects the two hemispheres."],
    ["Two gyri to know", "Precentral gyrus (frontal lobe) is the primary motor cortex. Postcentral gyrus (parietal lobe) is the primary somatosensory cortex."],
    ["Other cortex areas", "Vision in the occipital lobe, hearing in the temporal lobe. Broca area (speech production) and Wernicke area (understanding language) are usually in the left hemisphere."],
    ["Limbic structures", "The hippocampus forms new memories. The amygdala handles emotion, especially fear."],
    ["Reticular formation", "A network through the brainstem that keeps the cortex awake and alert."]
  ]
},

"nervous|Meninges, ventricles, and CSF": {
  lead: "Three membranes wrap the brain and spinal cord, and cerebrospinal fluid cushions them inside and out.",
  points: [
    ["Meninges, outside in", "Dura mater (tough; two layers around the brain), arachnoid mater (web-like), pia mater (clings to the brain surface)."],
    ["Spaces", "Epidural space (real around the spinal cord, filled with fat), subdural space, and subarachnoid space, which holds CSF and the large surface blood vessels."],
    ["Dural folds", "Falx cerebri between the hemispheres, tentorium cerebelli between the cerebrum and cerebellum, falx cerebelli between the cerebellar hemispheres."],
    ["Dural venous sinuses", "Channels between the dura layers that drain blood from the brain. Superior sagittal sinus to transverse sinus to sigmoid sinus to internal jugular vein."],
    ["Ventricles and CSF flow", "Lateral ventricles → interventricular foramen → third ventricle → cerebral aqueduct → fourth ventricle → subarachnoid space and central canal."],
    ["Making and draining CSF", "Choroid plexus in the ventricles makes CSF. Arachnoid granulations return it to the blood in the superior sagittal sinus."],
    ["Bleeds", "An epidural hematoma is usually arterial (middle meningeal artery after a skull fracture). A subdural hematoma comes from torn bridging veins."],
    ["Lumbar puncture", "The needle goes in below the end of the spinal cord, usually between L3 and L4 or L4 and L5, so the cord is out of the way."]
  ]
},

"nervous|Spinal cord and spinal nerves": {
  lead: "The spinal cord runs from the foramen magnum to about L1 or L2, where it tapers into the conus medullaris. The bundle of nerve roots below that is the cauda equina.",
  points: [
    ["Cross section", "Gray matter forms an H or butterfly. Posterior (dorsal) horns are sensory, anterior (ventral) horns are motor, and lateral horns (T1 to L2) hold sympathetic neurons. White matter columns carry the long tracts."],
    ["Roots and nerves", "A dorsal root (sensory, with a dorsal root ganglion) and a ventral root (motor) join to form a spinal nerve, so every spinal nerve is mixed."],
    ["31 pairs", "8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal. C1 to C7 exit above the vertebra with the same number. C8 exits below C7, and from T1 down each nerve exits below the vertebra with the same number."],
    ["Rami", "Each spinal nerve splits. The dorsal ramus goes to the deep back muscles and skin of the back. The ventral ramus goes to the front of the trunk and the limbs, and forms the plexuses."],
    ["Reflex arc", "Receptor → sensory neuron → integration center in the cord → motor neuron → effector. The knee jerk is a stretch reflex with a single synapse (L2 to L4)."],
    ["Dermatome", "The strip of skin supplied by one spinal nerve. Mapping numbness to a dermatome tells a clinician which level is injured."]
  ]
},

"nervous|Plexuses and nerves of the limbs": {
  lead: "Ventral rami weave together into plexuses, so each limb nerve carries fibers from several spinal levels.",
  tables: [{
    cap: "The four plexuses",
    cols: ["Plexus", "Roots", "Key nerves and what they supply"],
    rows: [
      ["Cervical", "C1 to C4", "Phrenic nerve (C3 to C5) to the diaphragm; ansa cervicalis to the infrahyoid muscles; skin of the neck"],
      ["Brachial", "C5 to T1", "Musculocutaneous (front of the arm), median (most forearm flexors, thenar muscles), ulnar (flexor carpi ulnaris, most hand muscles), radial (all extensors of arm and forearm), axillary (deltoid, teres minor)"],
      ["Lumbar", "L1 to L4", "Femoral (front of the thigh), obturator (medial thigh adductors)"],
      ["Sacral", "L4 to S4", "Sciatic, which splits into tibial and common fibular (back of the thigh, all of the leg and foot); superior and inferior gluteal; pudendal (perineum)"]
    ]
  }],
  points: [
    ["Brachial plexus layout", "Roots → trunks (upper, middle, lower) → divisions (anterior, posterior) → cords (lateral, posterior, medial) → terminal branches."],
    ["Nerve injuries", "Radial nerve: wrist drop. Ulnar nerve at the medial epicondyle (funny bone): weak grip and clawed ring and little fingers. Median nerve in the carpal tunnel: numb thumb, index and middle fingers. Common fibular at the head of the fibula: foot drop."],
    ["Neurovascular bundle", "Nerves usually travel with an artery and vein in a shared sheath, so finding one helps you find the others."]
  ]
},

"nervous|Cranial nerves": {
  lead: "Twelve pairs leave the brain and brainstem. Learn number, name, type and main job, and test yourself in both directions.",
  tables: [{
    cap: "The 12 cranial nerves (S = sensory, M = motor, B = both)",
    cols: ["#", "Name", "Type", "Main job"],
    rows: [
      ["I", "Olfactory", "S", "Smell"],
      ["II", "Optic", "S", "Vision"],
      ["III", "Oculomotor", "M", "Four eye muscles and the eyelid lifter; constricts the pupil and focuses the lens"],
      ["IV", "Trochlear", "M", "Superior oblique"],
      ["V", "Trigeminal", "B", "Sensation of the face (V1 ophthalmic, V2 maxillary, V3 mandibular); chewing muscles (V3)"],
      ["VI", "Abducens", "M", "Lateral rectus"],
      ["VII", "Facial", "B", "Facial expression; taste on the front two thirds of the tongue; tears and saliva from the submandibular and sublingual glands"],
      ["VIII", "Vestibulocochlear", "S", "Hearing and balance"],
      ["IX", "Glossopharyngeal", "B", "Taste and sensation on the back third of the tongue; parotid saliva; one swallowing muscle; carotid body and sinus"],
      ["X", "Vagus", "B", "Muscles of the pharynx and larynx; parasympathetic supply to the heart, lungs and most of the gut"],
      ["XI", "Accessory", "M", "Sternocleidomastoid and trapezius"],
      ["XII", "Hypoglossal", "M", "Tongue muscles"]
    ]
  }],
  points: [
    ["Parasympathetic riders", "Parasympathetic fibers travel in III, VII, IX and X."],
    ["Where they exit", "I cribriform plate; II optic canal; III, IV, V1, VI superior orbital fissure; V2 foramen rotundum; V3 foramen ovale; VII and VIII internal acoustic meatus; IX, X, XI jugular foramen; XII hypoglossal canal."],
    ["Tongue summary", "Movement: XII. Touch, front two thirds: V3. Taste, front two thirds: VII. Back third, taste and touch: IX."],
    ["Bell palsy", "A facial nerve problem. One whole side of the face droops, including the forehead, and the eye on that side cannot close."]
  ]
},

"nervous|Autonomic nervous system": {
  lead: "The autonomic system runs smooth muscle, cardiac muscle and glands without conscious control. It always uses a two-neuron chain: a preganglionic neuron in the CNS and a postganglionic neuron in a ganglion.",
  tables: [{
    cap: "Sympathetic and parasympathetic side by side",
    cols: ["", "Sympathetic", "Parasympathetic"],
    rows: [
      ["Known as", "Fight or flight", "Rest and digest"],
      ["Comes out of", "Thoracolumbar cord (T1 to L2)", "Brainstem (CN III, VII, IX, X) and sacral cord (S2 to S4)"],
      ["Ganglia", "Close to the cord: sympathetic trunk and collateral ganglia", "In or next to the target organ"],
      ["Preganglionic fiber", "Short", "Long"],
      ["Postganglionic fiber", "Long", "Short"],
      ["Postganglionic transmitter", "Mostly norepinephrine", "Acetylcholine"],
      ["Effects", "Heart rate up, airways open, pupils dilate, digestion slows, glucose released", "Heart rate down, digestion speeds up, pupils constrict, airways narrow"]
    ]
  }],
  points: [
    ["Splanchnic nerves", "Carry preganglionic sympathetic fibers past the trunk to collateral ganglia (celiac, superior and inferior mesenteric) that serve the abdominal organs."],
    ["Adrenal medulla", "Works like a sympathetic ganglion that releases epinephrine and norepinephrine into the blood."],
    ["Vagus nerve", "Carries most of the body's parasympathetic output: heart, lungs and the gut down to the transverse colon."],
    ["Horner syndrome", "Loss of sympathetic supply to one side of the face: drooping upper eyelid, small pupil, and less sweating on that side."]
  ]
},

"nervous|Sensory and motor pathways": {
  lead: "Pathways are chains of neurons between the body and the cortex. Most cross to the other side somewhere along the way, which is why the left brain handles the right side of the body.",
  tables: [{
    cap: "Main pathways",
    cols: ["Pathway", "Carries", "Crosses over"],
    rows: [
      ["Dorsal column (medial lemniscus)", "Fine touch, vibration, conscious position sense", "In the medulla"],
      ["Spinothalamic (anterolateral)", "Pain, temperature, crude touch", "In the spinal cord, near where it enters"],
      ["Lateral corticospinal", "Voluntary movement of the limbs", "In the medulla (pyramids)"],
      ["Spinocerebellar", "Position sense the cerebellum uses without your awareness", "Ends on the same side of the cerebellum"]
    ]
  }],
  points: [
    ["Sensory chain", "First neuron: receptor to cord or brainstem. Second: to the thalamus. Third: thalamus to the somatosensory cortex."],
    ["Motor chain", "Upper motor neuron in the cortex → lower motor neuron in the anterior horn or a cranial nerve nucleus → muscle."],
    ["Basal nuclei", "Help start, stop and smooth movement. Parkinson disease is the loss of dopamine neurons in the substantia nigra."],
    ["Cerebellum", "Compares the movement you meant with the movement you made and corrects the difference."]
  ]
},

/* ---------------- SPECIAL SENSES ---------------- */

"senses|Special senses lectures": {
  lead: "The special senses are smell, vision, taste, hearing and balance. Each has its own receptor organ in the head and its own cranial nerve.",
  tables: [{
    cap: "Special senses",
    cols: ["Sense", "Receptors", "Cranial nerve"],
    rows: [
      ["Smell", "Olfactory receptor cells in the roof of the nasal cavity", "I"],
      ["Vision", "Rods (dim light) and cones (color, detail) in the retina", "II"],
      ["Taste", "Taste buds, mostly on tongue papillae", "VII (front two thirds), IX (back third), X (throat)"],
      ["Hearing", "Hair cells of the spiral organ in the cochlea", "VIII, cochlear part"],
      ["Balance", "Hair cells in the vestibule (head position) and semicircular canals (head rotation)", "VIII, vestibular part"]
    ]
  }],
  points: [
    ["Smell is different", "Smell is the only sense that reaches the cortex without passing through the thalamus first."]
  ]
},

"senses|Orbit and eye": {
  lead: "The orbit holds the eyeball, six extraocular muscles, the eyelid lifter, nerves, vessels, fat and the lacrimal gland.",
  points: [
    ["Three layers of the eyeball", "Fibrous layer (sclera and cornea), vascular layer (choroid, ciliary body, iris), inner layer (retina)."],
    ["Chambers", "In front of the lens is aqueous humor, which drains into the scleral venous sinus. Behind the lens is jelly-like vitreous humor."],
    ["Retina landmarks", "The optic disc is the blind spot where the optic nerve leaves. The fovea centralis, in the macula, gives the sharpest vision and has only cones."],
    ["Tear path", "Lacrimal gland (upper outer orbit) → across the eye → lacrimal puncta → canaliculi → lacrimal sac → nasolacrimal duct → inferior nasal meatus."],
    ["Eyelids", "Each lid has a tarsal plate and tarsal glands. Conjunctiva lines the lids and covers the white of the eye but not the cornea."],
    ["Blood supply", "Ophthalmic artery from the internal carotid. Ophthalmic veins drain to the cavernous sinus."]
  ],
  tables: [{
    cap: "Extraocular muscles",
    cols: ["Muscle", "Main movement", "Nerve"],
    rows: [
      ["Superior rectus", "Up", "III"],
      ["Inferior rectus", "Down", "III"],
      ["Medial rectus", "Toward the nose", "III"],
      ["Lateral rectus", "Away from the nose", "VI"],
      ["Superior oblique", "Down and out", "IV"],
      ["Inferior oblique", "Up and out", "III"],
      ["Levator palpebrae superioris", "Raises the upper eyelid", "III"]
    ]
  }]
},

"senses|Ear and nasal cavity": {
  lead: "The ear has three parts: external (collects sound), middle (amplifies it) and inner (turns it into nerve signals and senses balance).",
  tables: [{
    cap: "Parts of the ear",
    cols: ["Part", "Structures"],
    rows: [
      ["External", "Auricle, external acoustic meatus; ends at the tympanic membrane"],
      ["Middle", "Air-filled cavity in the temporal bone; ossicles malleus, incus and stapes; pharyngotympanic (auditory) tube to the nasopharynx; oval window (stapes sits here) and round window"],
      ["Inner", "Bony labyrinth filled with perilymph around a membranous labyrinth filled with endolymph; cochlea (hearing), vestibule (head position), semicircular canals (head rotation)"]
    ]
  }],
  points: [
    ["Nasal septum", "Perpendicular plate of the ethmoid above, vomer below, septal cartilage in front."],
    ["Lateral wall", "Superior and middle conchae (part of the ethmoid) and the inferior concha (its own bone). Each has a meatus underneath."],
    ["Paranasal sinuses", "Frontal, ethmoidal, sphenoidal and maxillary. They lighten the skull, warm and moisten air, and drain into the nasal cavity."],
    ["Drainage", "The nasolacrimal duct opens into the inferior meatus, which is why your nose runs when you cry."],
    ["Nosebleeds", "Most come from a cluster of small arteries on the front of the septum."]
  ]
},

/* ---------------- HEART AND VESSELS ---------------- */

"cardio|Heart": {
  lead: "The heart is two pumps side by side. The right side sends blood to the lungs; the left side sends it to the body.",
  points: [
    ["Location", "In the middle mediastinum. The apex points down and to the left, near the fifth intercostal space at the midclavicular line."],
    ["Pericardium", "Tough fibrous pericardium outside. Inside it, serous pericardium has a parietal layer and a visceral layer (epicardium), with fluid in the pericardial cavity between them."],
    ["Wall", "Epicardium, myocardium (cardiac muscle), endocardium."],
    ["Blood flow", "Venae cavae and coronary sinus → right atrium → tricuspid valve → right ventricle → pulmonary valve → pulmonary trunk → lungs → pulmonary veins → left atrium → mitral valve → left ventricle → aortic valve → aorta."],
    ["Inside the chambers", "Pectinate muscles in the atria; fossa ovalis (the closed fetal foramen ovale) on the interatrial septum; trabeculae carneae, papillary muscles and chordae tendineae in the ventricles."],
    ["Coronary arteries", "Left coronary splits into the anterior interventricular (LAD) and circumflex. Right coronary gives the marginal and usually the posterior interventricular artery."],
    ["Cardiac veins", "Great, middle and small cardiac veins drain into the coronary sinus, which empties into the right atrium."],
    ["Conduction", "SA node (pacemaker) → AV node → AV bundle → right and left bundle branches → subendocardial conducting network (Purkinje fibers)."],
    ["Heart sounds", "S1 (lub) is the AV valves closing. S2 (dub) is the semilunar valves closing."],
    ["Listening points", "Aortic: second right intercostal space beside the sternum. Pulmonary: second left. Tricuspid: lower left sternal border. Mitral: fifth left intercostal space at the midclavicular line."]
  ],
  tables: [{
    cap: "Heart valves",
    cols: ["Valve", "Between", "Cusps"],
    rows: [
      ["Tricuspid", "Right atrium and right ventricle", "3"],
      ["Pulmonary", "Right ventricle and pulmonary trunk", "3"],
      ["Mitral (bicuspid)", "Left atrium and left ventricle", "2"],
      ["Aortic", "Left ventricle and aorta", "3"]
    ]
  }]
},

"cardio|Blood vessel basics and major pathways": {
  lead: "Arteries carry blood away from the heart, veins bring it back, and capillaries are where exchange happens.",
  points: [
    ["Wall layers", "Tunica intima (endothelium), tunica media (smooth muscle, thickest in arteries), tunica externa (connective tissue, thickest in veins). Veins have thinner walls, wider lumens, and valves in the limbs."],
    ["Aorta", "Ascending aorta (gives the coronary arteries) → aortic arch → descending thoracic aorta → abdominal aorta → splits at about L4 into the common iliac arteries."],
    ["Arch branches", "Brachiocephalic trunk (becomes the right common carotid and right subclavian), left common carotid, left subclavian."],
    ["To the arm", "Subclavian → axillary → brachial → radial and ulnar."],
    ["To the leg", "Common iliac → external iliac → femoral → popliteal → anterior and posterior tibial."],
    ["Big veins", "The superior vena cava drains everything above the diaphragm; each brachiocephalic vein is an internal jugular plus a subclavian. The inferior vena cava drains everything below. The azygos system drains the chest wall into the SVC."],
    ["Hepatic portal system", "Splenic and superior mesenteric veins (the inferior mesenteric joins the splenic) form the hepatic portal vein. Gut blood goes through the liver before reaching the IVC by the hepatic veins."],
    ["Pulmonary circulation", "Pulmonary arteries carry oxygen-poor blood to the lungs. Pulmonary veins bring oxygen-rich blood back. It is the one place the usual color coding flips."],
    ["Cerebral arterial circle", "The two internal carotids and the basilar artery (two vertebrals joined) link up at the base of the brain, so blood has a backup route."]
  ]
},

"cardio|Vessels of the head and neck": {
  lead: "Two routes bring blood to the head: the carotid arteries in front and the vertebral arteries through the holes in the cervical transverse processes.",
  tables: [{
    cap: "Head and neck arteries",
    cols: ["Artery", "Comes from", "Supplies"],
    rows: [
      ["Common carotid", "Brachiocephalic trunk (right), aortic arch (left)", "Splits at the upper border of the thyroid cartilage into internal and external carotids"],
      ["Internal carotid", "Common carotid", "Brain and eye (ophthalmic artery); no branches in the neck"],
      ["External carotid", "Common carotid", "Face, scalp, neck: superior thyroid, lingual, facial, occipital, posterior auricular, ascending pharyngeal, maxillary, superficial temporal"],
      ["Maxillary", "External carotid", "Deep face, teeth, nasal cavity, and the middle meningeal artery to the dura"],
      ["Vertebral", "Subclavian", "Climbs through C6 to C1, joins its partner as the basilar artery; brainstem, cerebellum, back of the brain"]
    ]
  }],
  points: [
    ["Carotid sheath", "Holds the common and internal carotid artery, the internal jugular vein and the vagus nerve."],
    ["Neck veins", "The internal jugular drains the brain by way of the dural sinuses. The external jugular drains the scalp and face on the surface."],
    ["Cavernous sinus", "Beside the sella turcica. The internal carotid and CN VI run through it; CN III, IV, V1 and V2 run in its wall."],
    ["Infection route", "Facial veins and the pterygoid venous plexus connect to the cavernous sinus, so infection in the face can reach it."]
  ]
},

"cardio|Vessels of the trunk": {
  lead: "Learn the abdominal aorta as three unpaired branches to the gut, then paired branches to the kidneys, adrenals and gonads.",
  tables: [{
    cap: "Abdominal aorta branches",
    cols: ["Branch", "Level (about)", "Supplies"],
    rows: [
      ["Celiac trunk (left gastric, splenic, common hepatic)", "T12", "Foregut: stomach, liver, gallbladder, spleen, part of the pancreas and duodenum"],
      ["Superior mesenteric", "L1", "Midgut: small intestine, cecum, ascending and most of the transverse colon"],
      ["Inferior mesenteric", "L3", "Hindgut: end of the transverse colon, descending and sigmoid colon, upper rectum"],
      ["Renal (paired)", "L1 to L2", "Kidneys"],
      ["Gonadal (paired)", "L2", "Testes or ovaries"],
      ["Common iliacs", "L4", "Pelvis and lower limbs"]
    ]
  }],
  points: [
    ["Thoracic aorta", "Gives posterior intercostal, bronchial and esophageal arteries."],
    ["Internal iliac", "Supplies the pelvic organs, gluteal region and perineum (internal pudendal artery)."],
    ["IVC tributaries", "Common iliac, renal and hepatic veins. The left gonadal and left suprarenal veins drain into the left renal vein; the right ones go straight into the IVC."],
    ["Azygos system", "Azygos vein on the right, hemiazygos on the left; together they drain the chest wall."],
    ["Cystic artery", "Usually a branch of the right hepatic artery; it feeds the gallbladder."]
  ]
},

"cardio|Vessels of the limbs": {
  lead: "Each limb has one main artery that changes its name as it crosses a landmark. Learn the landmark where each name changes.",
  tables: [{
    cap: "Main limb arteries and pulse points",
    cols: ["Artery", "Name changes at", "Pulse you can feel"],
    rows: [
      ["Subclavian → axillary", "Outer border of the first rib", ""],
      ["Axillary → brachial", "Lower border of teres major", "Brachial: inside of the elbow"],
      ["Brachial → radial and ulnar", "Cubital fossa", "Radial: thumb side of the wrist"],
      ["External iliac → femoral", "Inguinal ligament", "Femoral: femoral triangle"],
      ["Femoral → popliteal", "Adductor hiatus", "Popliteal: behind the knee"],
      ["Popliteal → anterior and posterior tibial", "Below the knee", "Posterior tibial: behind the medial malleolus"],
      ["Anterior tibial → dorsalis pedis", "Ankle", "Dorsalis pedis: top of the foot"]
    ]
  }],
  points: [
    ["Superficial arm veins", "Cephalic vein runs up the lateral side, basilic vein up the medial side, and the median cubital vein connects them across the front of the elbow. That connection is the usual blood draw site."],
    ["Superficial leg veins", "Great saphenous vein runs up the medial leg and thigh into the femoral vein; it is the longest vein in the body. Small saphenous runs up the back of the calf into the popliteal vein."],
    ["Hand arches", "Radial and ulnar arteries join in the superficial and deep palmar arches."]
  ]
},

/* ---------------- BLOOD ---------------- */

"blood|Blood lectures": {
  lead: "Blood is a connective tissue: formed elements suspended in a liquid matrix called plasma.",
  points: [
    ["Parts", "Plasma is about 55% of a blood sample, mostly water with proteins (albumin, globulins, fibrinogen). Red cells are about 45% (the hematocrit). White cells and platelets form a thin buffy coat under 1%."],
    ["Hemoglobin", "Four protein chains, each holding an iron-containing heme that binds oxygen."],
    ["Red cell life", "About 120 days. The spleen and liver remove old cells and recycle the iron."],
    ["Where blood is made", "Red bone marrow (hematopoiesis)."]
  ],
  tables: [{
    cap: "Formed elements, most common white cell first",
    cols: ["Element", "What it looks like", "Job"],
    rows: [
      ["Erythrocyte", "Biconcave disc, no nucleus", "Carries oxygen and some carbon dioxide"],
      ["Neutrophil", "Nucleus with 3 to 5 lobes, pale granules", "Eats bacteria; first to arrive"],
      ["Lymphocyte", "Large round nucleus, thin rim of cytoplasm", "B cells make antibodies; T cells attack infected cells"],
      ["Monocyte", "Largest; kidney or U-shaped nucleus", "Leaves the blood and becomes a macrophage"],
      ["Eosinophil", "Two-lobed nucleus, red-orange granules", "Fights parasites; involved in allergies"],
      ["Basophil", "Dark purple granules hide the nucleus; rarest", "Releases histamine and heparin"],
      ["Platelet", "Small cell fragment", "Plugs and clots"]
    ]
  }, {
    cap: "ABO blood types",
    cols: ["Type", "Antigen on red cells", "Antibodies in plasma"],
    rows: [
      ["A", "A", "Anti-B"],
      ["B", "B", "Anti-A"],
      ["AB", "A and B", "Neither (universal recipient)"],
      ["O", "Neither", "Anti-A and anti-B (universal donor)"]
    ]
  }],
  tip: "Rh positive means the red cells carry the D antigen."
},

/* ---------------- LYMPHATIC ---------------- */

"lymph|Lymphatic system": {
  lead: "Lymphatic vessels collect the fluid that leaks out of capillaries, filter it through lymph nodes, and return it to the blood.",
  points: [
    ["Path", "Lymphatic capillaries → collecting vessels → lymph nodes → trunks → ducts → veins at the base of the neck."],
    ["Two ducts", "The right lymphatic duct drains the right arm and right side of the head and chest. The thoracic duct drains everything else; it starts at the cisterna chyli and empties where the left subclavian and left internal jugular veins meet."],
    ["Lacteals", "Lymphatic capillaries in the small intestine that absorb dietary fat."],
    ["Primary organs", "Red bone marrow (B cells mature) and thymus (T cells mature)."],
    ["Secondary organs", "Lymph nodes, spleen, tonsils and MALT, such as Peyer patches in the ileum and the appendix."],
    ["Node clusters you can feel", "Cervical, axillary and inguinal."],
    ["Spleen", "In the left upper quadrant behind the stomach. White pulp holds immune cells; red pulp removes old red cells."],
    ["Tonsil ring", "Pharyngeal (adenoid), tubal, palatine and lingual tonsils ring the throat to catch what you breathe and swallow."]
  ]
},

/* ---------------- RESPIRATORY ---------------- */

"resp|Respiratory lectures": {
  lead: "Air path: nose → nasal cavity → pharynx → larynx → trachea → bronchi → bronchioles → alveoli. The conducting zone moves and conditions air; the respiratory zone exchanges gas.",
  points: [
    ["Pharynx", "Nasopharynx (air only), oropharynx and laryngopharynx (air and food)."],
    ["Larynx cartilages", "Thyroid (laryngeal prominence), cricoid (the only complete ring), epiglottis (covers the airway when you swallow), plus paired arytenoid, corniculate and cuneiform."],
    ["Folds", "Vocal folds (true cords) make sound. Vestibular folds (false cords) sit above them."],
    ["Laryngeal nerves", "The recurrent laryngeal nerve supplies almost all the intrinsic muscles; cricothyroid gets the external branch of the superior laryngeal. Both come from the vagus."],
    ["Trachea", "C-shaped hyaline cartilage rings, open at the back where the trachealis muscle sits against the esophagus. It splits at the carina."],
    ["Right main bronchus", "Wider, shorter and more vertical than the left, so inhaled objects usually lodge on the right."],
    ["Bronchial tree", "Main → lobar → segmental bronchi → bronchioles → terminal bronchioles → respiratory bronchioles → alveolar ducts → alveoli."],
    ["Alveoli", "Type I cells are thin for gas exchange. Type II cells make surfactant. Alveolar macrophages clean up."],
    ["Lungs", "Right lung has 3 lobes (horizontal and oblique fissures). Left lung has 2 lobes (oblique fissure) and a cardiac notch."],
    ["Pleura", "Visceral pleura on the lung, parietal pleura on the chest wall, a thin film of fluid between them."],
    ["Two circulations", "Pulmonary arteries bring blood to pick up oxygen. Bronchial arteries from the aorta feed the lung tissue itself."],
    ["Breathing muscles", "Quiet inspiration: diaphragm and external intercostals. Forced expiration adds internal intercostals and abdominal muscles."]
  ]
},

"resp|Larynx and pharynx in the lab": {
  lead: "These dissection and station videos show the throat structures you name on the models.",
  points: [
    ["Pharyngeal constrictors", "Superior, middle and inferior. They squeeze food down and are supplied by the vagus through the pharyngeal plexus."],
    ["Laryngeal cavity", "Vestibule above the vestibular folds, glottis at the vocal folds, infraglottic cavity below."],
    ["Membranes", "Thyrohyoid membrane from hyoid to thyroid cartilage. Cricothyroid membrane between thyroid and cricoid; it is the emergency airway site."],
    ["Spotting cartilages", "Thyroid is the largest and has the prominence. Cricoid is shaped like a signet ring, wide at the back. Epiglottis is a leaf of elastic cartilage."]
  ]
},

"resp|Trachea and lungs in the lab": {
  lead: "On a real specimen, identify each lung by its lobes and fissures, then find what enters and leaves at the hilum.",
  points: [
    ["Hilum", "Where the main bronchus, pulmonary artery, pulmonary veins, bronchial vessels, nerves and lymphatics enter and leave the lung."],
    ["Surfaces", "Costal, mediastinal and diaphragmatic. The apex rises just above the clavicle."],
    ["Left lung clues", "Two lobes, a cardiac notch, a tongue-like lingula, and a groove from the aortic arch."],
    ["Right lung clues", "Three lobes, a horizontal fissure, and a groove from the azygos vein."],
    ["Smoking", "Dark carbon deposits through the lung tissue. Emphysema destroys alveolar walls, leaving large air spaces."]
  ]
},

/* ---------------- DIGESTIVE ---------------- */

"digestive|Digestive lectures": {
  lead: "Food travels through the alimentary canal from mouth to anus. Accessory organs add secretions, but food never passes through them.",
  points: [
    ["Wall layers, inside out", "Mucosa, submucosa, muscularis externa (inner circular and outer longitudinal; the stomach adds an oblique layer), serosa or adventitia."],
    ["Peritoneum", "Parietal peritoneum lines the abdominal wall, visceral peritoneum covers the organs, and mesenteries hold organs in place and carry their vessels."],
    ["Inside or behind", "Intraperitoneal: stomach, jejunum, ileum, transverse and sigmoid colon, liver, spleen. Retroperitoneal: most of the duodenum, pancreas, ascending and descending colon, kidneys, aorta, IVC."],
    ["Omenta", "Greater omentum hangs like an apron from the greater curvature of the stomach. Lesser omentum runs from the liver to the lesser curvature."],
    ["Gut regions", "Foregut (to the middle of the duodenum) is fed by the celiac trunk, midgut (to most of the transverse colon) by the superior mesenteric artery, hindgut by the inferior mesenteric artery."],
    ["Stomach", "Cardia, fundus, body, pylorus. Inner folds are rugae."],
    ["Small intestine", "Duodenum (C-shaped; bile and pancreatic juice enter at the major duodenal papilla), jejunum, ileum (ends at the ileocecal valve)."],
    ["Large intestine", "Cecum and appendix, ascending, transverse, descending and sigmoid colon, rectum, anal canal. Look for teniae coli, haustra and fatty epiploic appendages."],
    ["Liver", "Right, left, caudate and quadrate lobes; falciform ligament on the front."],
    ["Bile path", "Right and left hepatic ducts → common hepatic duct; joins the cystic duct from the gallbladder → common bile duct; joins the pancreatic duct → hepatopancreatic ampulla → duodenum."],
    ["Pancreas", "Head in the curve of the duodenum, tail near the spleen. Makes digestive juice (exocrine) and insulin and glucagon (endocrine)."]
  ]
},

"digestive|Mouth and salivary glands": {
  lead: "The mouth starts mechanical digestion with the teeth and chemical digestion with saliva.",
  tables: [{
    cap: "Salivary glands",
    cols: ["Gland", "Where", "Duct opens", "Nerve for secretion"],
    rows: [
      ["Parotid", "In front of the ear, over the masseter", "Inside the cheek next to the upper second molar", "Glossopharyngeal (CN IX)"],
      ["Submandibular", "Under the body of the mandible", "Beside the lingual frenulum", "Facial (CN VII)"],
      ["Sublingual", "Floor of the mouth under the tongue", "Many small ducts in the floor of the mouth", "Facial (CN VII)"]
    ]
  }],
  points: [
    ["Palate", "Hard palate in front (maxillae and palatine bones). Soft palate and uvula behind; they rise to close off the nasopharynx when you swallow."],
    ["Tongue papillae", "Filiform (no taste buds, give grip), fungiform, vallate (large, in a V at the back) and foliate."],
    ["Teeth", "32 permanent teeth in adults, 20 baby (deciduous) teeth in children."],
    ["Facial nerve and parotid", "The facial nerve runs through the parotid gland and branches there, but it does not control the gland."],
    ["Tongue nerves", "Movement XII. Touch, front two thirds: V3. Taste, front two thirds: VII. Back third, taste and touch: IX."]
  ]
},

"digestive|Abdominal organs in the lab": {
  lead: "In the cadaver the organs are packed tight. Work from the surface in and use landmarks to tell similar-looking organs apart.",
  points: [
    ["First view", "The greater omentum covers everything. Lift it to see the transverse colon and the coils of small intestine."],
    ["Liver", "Falciform ligament on the front, with the round ligament (the closed fetal umbilical vein) in its free edge. Gallbladder under the right lobe."],
    ["Stomach", "Lesser curvature faces the liver; greater curvature faces left and down."],
    ["Duodenum and pancreas", "The C-shaped duodenum wraps the head of the pancreas. The spleen sits up in the left upper quadrant behind the stomach."],
    ["Jejunum or ileum", "Jejunum is wider, thicker-walled and redder, with fewer vessel loops and long straight vessels. Ileum has more fat in its mesentery, more loops and shorter straight vessels."],
    ["Large intestine", "Teniae coli (three muscle bands), haustra (pouches) and fatty epiploic appendages."],
    ["Umbilical folds", "On the inside of the front wall: median (remnant of the urachus), medial (closed umbilical arteries), lateral (inferior epigastric vessels)."]
  ]
},

/* ---------------- URINARY ---------------- */

"urinary|Urinary system": {
  lead: "The kidneys filter blood and make urine; the ureters, bladder and urethra carry it out.",
  points: [
    ["Kidney position", "Retroperitoneal, from about T12 to L3. The right kidney sits a little lower because the liver is above it."],
    ["Wrappings, inside out", "Fibrous capsule, perirenal fat, renal fascia, pararenal fat."],
    ["Inside the kidney", "Cortex, medulla (renal pyramids separated by renal columns), minor calyces → major calyces → renal pelvis → ureter."],
    ["Nephron", "Renal corpuscle (glomerulus inside the glomerular capsule) → proximal convoluted tubule → nephron loop → distal convoluted tubule → collecting duct."],
    ["Blood path", "Renal artery → segmental → interlobar → arcuate → cortical radiate → afferent arteriole → glomerulus → efferent arteriole → peritubular capillaries and vasa recta → back out through matching veins."],
    ["Bladder", "Wall of detrusor muscle. The trigone is the smooth triangle between the two ureter openings and the urethral opening."],
    ["Urethra", "About 3 to 4 cm long in females. About 20 cm in males, with prostatic, membranous and spongy parts."],
    ["Sphincters", "Internal urethral sphincter is smooth muscle and involuntary. External urethral sphincter is skeletal muscle and voluntary."],
    ["Kidney jobs", "Filter blood, balance water and salts, help set blood pressure (renin), signal red cell production (erythropoietin), and activate vitamin D."]
  ]
},

/* ---------------- REPRODUCTIVE ---------------- */

"repro|Reproductive system": {
  lead: "Male and female systems start from the same embryonic tissues and then follow different paths. Learn each as a route the gametes travel.",
  points: [
    ["Testes", "Sit in the scrotum, which keeps them about 2 to 3 °C (3.6 to 5.4 °F) cooler than body temperature for sperm production."],
    ["Sperm route", "Seminiferous tubules → rete testis → epididymis → ductus deferens → ejaculatory duct (joined by the seminal vesicle duct) → urethra."],
    ["Male glands", "Seminal vesicles, prostate and bulbourethral glands add fluid to make semen."],
    ["Spermatic cord", "Runs through the inguinal canal with the ductus deferens, testicular artery, pampiniform venous plexus and nerves."],
    ["Penis", "Two corpora cavernosa and one corpus spongiosum, which surrounds the urethra and forms the glans."],
    ["Ovary", "Held by the ovarian ligament (to the uterus) and the suspensory ligament (carries the ovarian vessels)."],
    ["Uterine tube", "Infundibulum with fimbriae, ampulla (where fertilization usually happens), isthmus."],
    ["Uterus", "Fundus, body, cervix. Wall layers: perimetrium, myometrium, endometrium. Held by the broad ligament and the round ligament, which passes through the inguinal canal."],
    ["External genitalia", "Mons pubis, labia majora, labia minora, clitoris and vestibule."],
    ["Embryology", "Mesonephric ducts become the male duct system. Paramesonephric ducts become the uterine tubes, uterus and upper vagina."],
    ["Perineum", "Diamond-shaped region between the pubic symphysis, ischial tuberosities and coccyx. The front half is the urogenital triangle; the back half is the anal triangle with the ischioanal fossae."],
    ["Nerve", "The pudendal nerve supplies the perineum."]
  ]
},

/* ---------------- ENDOCRINE ---------------- */

"endocrine|Endocrine system": {
  lead: "Endocrine glands release hormones into the blood. Learn each gland with its main hormones and what they do.",
  tables: [{
    cap: "Major glands and hormones",
    cols: ["Gland", "Main hormones", "What they do"],
    rows: [
      ["Hypothalamus", "Releasing and inhibiting hormones; makes ADH and oxytocin", "Controls the pituitary"],
      ["Anterior pituitary", "GH, TSH, ACTH, FSH, LH, prolactin", "Growth; directs the thyroid, adrenal cortex and gonads; milk production"],
      ["Posterior pituitary", "Releases ADH and oxytocin", "Kidneys keep water; uterine contraction and milk letdown"],
      ["Pineal", "Melatonin", "Sleep and wake rhythm"],
      ["Thyroid", "T3 and T4; calcitonin", "Set metabolic rate; calcitonin lowers blood calcium"],
      ["Parathyroids", "PTH", "Raises blood calcium"],
      ["Adrenal cortex", "Aldosterone, cortisol, androgens", "Keep sodium and water; stress response, raise blood glucose"],
      ["Adrenal medulla", "Epinephrine, norepinephrine", "Fight or flight"],
      ["Pancreatic islets", "Insulin (beta cells), glucagon (alpha cells)", "Lower / raise blood glucose"],
      ["Ovaries", "Estrogen, progesterone", "Female characteristics, uterine cycle"],
      ["Testes", "Testosterone", "Sperm production, male characteristics"]
    ]
  }],
  points: [
    ["Pituitary", "Sits in the sella turcica of the sphenoid, connected to the hypothalamus by the infundibulum."],
    ["Thyroid", "Two lobes joined by an isthmus, wrapped around the trachea just below the larynx. Usually four parathyroid glands sit on its back."],
    ["Other hormone makers", "Kidneys (erythropoietin, renin), heart (atrial natriuretic peptide), fat tissue (leptin), stomach and intestine (gastrin, secretin, CCK), placenta (hCG), thymus (thymosin)."]
  ]
},

/* ---------------- INTEGUMENTARY ---------------- */

"integ|Skin": {
  lead: "Skin is two layers, epidermis and dermis, sitting on the hypodermis.",
  tables: [{
    cap: "Layers",
    cols: ["Layer", "What is there"],
    rows: [
      ["Epidermis", "Keratinized stratified squamous epithelium with no blood vessels. Deep to superficial: stratum basale, spinosum, granulosum, lucidum (thick skin only), corneum. Cells: keratinocytes, melanocytes, tactile cells, dendritic cells."],
      ["Dermis, papillary layer", "Loose areolar tissue, dermal papillae (fingerprints), capillary loops, tactile corpuscles for light touch"],
      ["Dermis, reticular layer", "Dense irregular connective tissue; most of the dermis; hair follicles and glands"],
      ["Hypodermis (not part of skin)", "Fat and areolar tissue; anchors skin, stores energy, insulates; lamellated corpuscles for deep pressure"]
    ]
  }],
  points: [
    ["Thick and thin skin", "Thick skin (palms, soles) has all five epidermal layers and no hair. Thin skin covers everywhere else."],
    ["Glands", "Sebaceous glands release oil into hair follicles. Eccrine (merocrine) sweat glands cover most of the body and cool you. Apocrine sweat glands are in the armpits and groin and open into hair follicles."],
    ["Hair", "Shaft, root, follicle and bulb. The arrector pili is a smooth muscle that makes goose bumps."],
    ["Nails", "Plates of hard keratin grown by the nail matrix. The lunula is the white half-moon."],
    ["Melanin", "Made by melanocytes and handed to keratinocytes, where it shields the nucleus from UV light."],
    ["Skin jobs", "Protection, temperature control, sensation, vitamin D production and a small amount of excretion."]
  ]
},

/* ---------------- REGIONS ---------------- */

"regions|Thorax and mediastinum": {
  lead: "The thoracic cavity holds two pleural cavities with the mediastinum between them.",
  points: [
    ["Dividing the mediastinum", "A plane through the sternal angle and the T4 to T5 disc splits it into superior and inferior parts. The inferior part has anterior, middle and posterior sections."],
    ["Superior mediastinum", "Thymus, aortic arch and its branches, brachiocephalic veins, upper SVC, trachea, esophagus, thoracic duct, vagus and phrenic nerves."],
    ["Middle mediastinum", "Heart and pericardium."],
    ["Posterior mediastinum", "Descending aorta, esophagus, azygos veins, thoracic duct, sympathetic trunks."],
    ["Intercostal space", "External, internal and innermost intercostal muscles. The vein, artery and nerve run in the groove under each rib in that order from top to bottom."],
    ["Root of the neck", "Where the neck meets the thorax: subclavian vessels, top of the lung, brachial plexus roots and the end of the thoracic duct."]
  ],
  tip: "A chest needle goes in just above a rib so it misses the vessels and nerve under the rib above."
},

"regions|Head and neck spaces and fascia": {
  lead: "The sternocleidomastoid divides the neck into two big triangles, and layers of fascia divide it into compartments.",
  points: [
    ["Anterior triangle", "Bounded by the midline, the sternocleidomastoid and the mandible. Holds the hyoid muscles, thyroid, and much of the carotid sheath."],
    ["Posterior triangle", "Bounded by the sternocleidomastoid, trapezius and clavicle. Holds the accessory nerve, brachial plexus trunks and external jugular vein."],
    ["Neck fascia", "Superficial fascia holds the platysma. Deep fascia has an investing layer around the sternocleidomastoid and trapezius, a pretracheal layer, a prevertebral layer and the carotid sheath."],
    ["Retropharyngeal space", "Behind the pharynx. Infection here can track down into the chest."],
    ["Temporal fossa", "Holds the temporalis muscle."],
    ["Infratemporal fossa", "Below the zygomatic arch, deep to the ramus. Holds the pterygoid muscles, maxillary artery, mandibular nerve (V3) and pterygoid venous plexus."],
    ["Pterygopalatine fossa", "A small space behind the maxilla. Holds the maxillary nerve (V2), the pterygopalatine ganglion and the end of the maxillary artery."],
    ["Parotid region", "The facial nerve splits inside the parotid gland into temporal, zygomatic, buccal, marginal mandibular and cervical branches."]
  ]
},

"regions|Limb regions": {
  lead: "Clinicians use a few small regions of the limbs over and over. For each, learn its borders and what passes through it.",
  tables: [{
    cap: "Limb regions",
    cols: ["Region", "Borders", "Contents"],
    rows: [
      ["Cubital fossa", "Brachioradialis (lateral), pronator teres (medial), line between the epicondyles (top)", "Lateral to medial: biceps tendon, brachial artery, median nerve"],
      ["Carpal tunnel", "Carpal bones and the flexor retinaculum", "Median nerve and the long finger and thumb flexor tendons"],
      ["Anatomical snuffbox", "Extensor pollicis longus (medial), abductor pollicis longus and extensor pollicis brevis (lateral)", "Radial artery; the scaphoid forms the floor and hurts here when fractured"],
      ["Femoral triangle", "Inguinal ligament (top), sartorius (lateral), adductor longus (medial)", "Lateral to medial: femoral nerve, artery, vein, then lymphatics"],
      ["Popliteal fossa", "Biceps femoris (upper lateral), semitendinosus and semimembranosus (upper medial), two heads of gastrocnemius (lower)", "Popliteal artery and vein, tibial and common fibular nerves"]
    ]
  }],
  tip: "Carpal tunnel syndrome is the median nerve being squeezed. The ulnar nerve does not run through the carpal tunnel."
}

};
