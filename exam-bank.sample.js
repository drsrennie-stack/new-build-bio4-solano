/* =====================================================================
   exam-bank.sample.js
   BIO 004 Human Anatomy, Solano College
   Sample question bank for exam-simulator.html

   HOW TO USE
   1. Rename this file to exam-bank.js and put it beside exam-simulator.html.
      The simulator loads it automatically. Nothing else to configure.
   2. Or host it somewhere and set CONFIG.BANK_URL near the top of the
      simulator script to its address.
   3. Or open the simulator, paste a bank into the loader, and press
      Download normalized exam-bank.js to get this shape back out.

   EVERY FIELD
   competency    every item carries the ID from the competency CSV, which is
                 how the simulator ties a question to a competency and
                 reports coverage. Items with no competency still work,
                 they just group under their topic instead.
   tf[]          statement, term (the one term under test), isTrue,
                 correct[] (accepted replacements, only needed when
                 isTrue is false), why, module, competency, topic, dok
   mc[]          stem, options[4], answer (index into options),
                 rationales[4] (why each option is right or wrong),
                 module, competency, topic, dok
   matching[]    title, pairs[{left,right}], module
   braindump[]   prompt, checklist[{text,keywords[]}], module, topic
   cards[]       term, definition, module, competency, topic, dok,
                 unique (set false when the definition could describe
                 more than one term, which stops the simulator from
                 building items out of it)

   The simulator only builds extra items from cards when the authored
   pool runs short, and only in ways the bank can support without
   guessing. Authored items always come first.
   ===================================================================== */

window.EXAM_BANK = {

  meta: {
    course: "BIO 004 Human Anatomy",
    institution: "Solano College",
    updated: "2026-08-25",
    discipline: "anatomy",
    note: "Sample bank. Replace with the full bank built from the notes and competencies."
  },


  /* ---------------------------------------------------------------
     TRUE OR FALSE
     One term per statement is under test. Mark it with **asterisks**
     or set the term field, or both. When isTrue is false, the
     statement is false because of that term and nothing else.
     --------------------------------------------------------------- */
  tf: [
    { module:"m1", competency:"a-4", topic:"Foundations", dok:1,
      statement:"The elbow is **proximal** to the wrist.",
      term:"proximal", isTrue:true, correct:[],
      why:"Proximal means nearer to the point of attachment to the trunk, and the elbow sits nearer the shoulder than the wrist does." },

    { module:"m1", competency:"a-2", topic:"Foundations", dok:1,
      statement:"In anatomical position the palms face **posteriorly**.",
      term:"posteriorly", isTrue:false, correct:["anteriorly","anterior","forward","ventrally"],
      why:"Anatomical position has the body erect, feet slightly apart, head and toes forward, with the arms at the sides and the palms turned forward." },

    { module:"m1", competency:"a-6", topic:"Body Cavities and Regions", dok:2,
      statement:"The heart sits within the **mediastinum**.",
      term:"mediastinum", isTrue:true, correct:[],
      why:"The mediastinum is the central compartment of the thoracic cavity between the two pleural cavities, and it contains the heart, great vessels, trachea, and esophagus." },

    { module:"m1", competency:"a-6", topic:"Body Cavities and Regions", dok:2,
      statement:"The kidneys are **retroperitoneal**.",
      term:"retroperitoneal", isTrue:true, correct:[],
      why:"The kidneys lie behind the parietal peritoneum against the posterior abdominal wall, which is what retroperitoneal means." },

    { module:"m1", competency:"a-16", topic:"Tissues and Histology", dok:2,
      statement:"Transitional epithelium lines the **esophagus**.",
      term:"esophagus", isTrue:false, correct:["urinary bladder","bladder","ureter","ureters","renal pelvis"],
      why:"Transitional epithelium stretches and lines the urinary tract. The esophagus is lined by stratified squamous epithelium, which handles abrasion from swallowed food." },

    { module:"m1", competency:"a-18", topic:"Tissues and Histology", dok:2,
      statement:"Dense regular connective tissue is the tissue of **tendons**.",
      term:"tendons", isTrue:true, correct:[],
      why:"Its collagen fibers run in parallel along one line of pull, which is exactly what a tendon does." },

    { module:"m1", competency:"a-23", topic:"Integumentary", dok:1,
      statement:"The stratum **lucidum** is found only in thick skin.",
      term:"lucidum", isTrue:true, correct:[],
      why:"Thick skin of the palms and soles has all five epidermal layers. Thin skin has no stratum lucidum." },

    { module:"m1", competency:"a-25", topic:"Integumentary", dok:2,
      statement:"Sebaceous glands secrete by the **merocrine** method.",
      term:"merocrine", isTrue:false, correct:["holocrine"],
      why:"Sebaceous glands are holocrine. The whole cell fills with product and ruptures, which is why HOL equals WHOLE cell." },

    { module:"m1", competency:"a-23", topic:"Integumentary", dok:2,
      statement:"The cell in the epidermis that carries out immune surveillance is the **melanocyte**.",
      term:"melanocyte", isTrue:false, correct:["langerhans cell","dendritic cell","epidermal dendritic cell","langerhans"],
      why:"Melanocytes make pigment. The Langerhans cell, also called the epidermal dendritic cell, is the immune cell of the epidermis." },

    { module:"m2", competency:"a-31", topic:"Bone Histology", dok:1,
      statement:"**Osteoclasts** break down bone matrix.",
      term:"Osteoclasts", isTrue:true, correct:[],
      why:"Osteoclasts are the large multinucleate cells that resorb matrix. Osteoblasts build it." },

    { module:"m2", competency:"a-29", topic:"Bone Histology", dok:1,
      statement:"The **diaphysis** is the shaft of a long bone.",
      term:"diaphysis", isTrue:true, correct:[],
      why:"The diaphysis is the tubular shaft. The epiphyses are the expanded ends." },

    { module:"m2", competency:"a-30", topic:"Bone Histology", dok:2,
      statement:"The structural unit of compact bone is the **trabecula**.",
      term:"trabecula", isTrue:false, correct:["osteon","haversian system","osteon (haversian system)"],
      why:"Compact bone is built from osteons, also called Haversian systems. Trabeculae are the struts of spongy bone." },

    { module:"m2", competency:"a-35", topic:"Axial Skeleton, Skull", dok:1,
      statement:"The **coronal** suture joins the frontal bone to the parietal bones.",
      term:"coronal", isTrue:true, correct:[],
      why:"The coronal suture runs side to side across the top of the skull between frontal and parietal bones." },

    { module:"m2", competency:"a-43", topic:"Appendicular, Upper Extremity", dok:1,
      statement:"In anatomical position the **radius** lies on the medial side of the forearm.",
      term:"radius", isTrue:false, correct:["ulna"],
      why:"The ulna is medial, on the little finger side. The radius is lateral, on the thumb side." },

    { module:"m2", competency:"a-43", topic:"Appendicular, Upper Extremity", dok:2,
      statement:"The head of the humerus articulates with the **glenoid cavity** of the scapula.",
      term:"glenoid cavity", isTrue:true, correct:[],
      why:"The glenoid cavity is the shallow socket on the lateral scapula that receives the humeral head." },

    { module:"m2", competency:"a-54", topic:"Articulations and Joints", dok:2,
      statement:"A suture of the skull is a **synovial** joint.",
      term:"synovial", isTrue:false, correct:["fibrous","synarthrosis","fibrous joint"],
      why:"Sutures are fibrous joints held by dense connective tissue with no joint cavity. Synovial joints have a cavity and free movement." }
  ],

  /* ---------------------------------------------------------------
     MULTIPLE CHOICE
     answer is the index into options. The simulator reshuffles the
     options onto a balanced A, B, C, D key every time it builds a
     form, and it carries the rationales along with them.
     --------------------------------------------------------------- */
  mc: [
    { module:"m1", competency:"a-7", topic:"Body Cavities and Regions", dok:2,
      stem:"Which membrane lies directly against the internal surface of the thoracic wall?",
      options:["Parietal pleura","Visceral pleura","Parietal pericardium","Visceral peritoneum"],
      answer:0,
      rationales:[
        "the parietal layer of any serous membrane is the one lining the wall of the cavity, and the pleural cavity surrounds the lung.",
        "the visceral pleura is the layer stuck to the lung surface itself, not the wall.",
        "the parietal pericardium lines the fibrous sac around the heart, not the thoracic wall.",
        "the visceral peritoneum covers abdominal organs and is not in the thoracic cavity at all."
      ] },

    { module:"m1", competency:"a-16", topic:"Tissues and Histology", dok:2,
      stem:"Which epithelium lines the trachea?",
      options:["Pseudostratified ciliated columnar","Simple squamous","Stratified squamous, keratinized","Transitional"],
      answer:0,
      rationales:[
        "every cell touches the basement membrane but the nuclei sit at different heights, and the cilia sweep mucus up out of the airway.",
        "simple squamous is built for diffusion and lines alveoli and vessels, not the conducting airway.",
        "keratinized stratified squamous is the epidermis, built for abrasion and water loss, not for moving mucus.",
        "transitional epithelium stretches and belongs to the urinary tract."
      ] },

    { module:"m1", competency:"a-23", topic:"Integumentary", dok:2,
      stem:"Which layer of the epidermis contains the actively dividing cells that replace the ones lost at the surface?",
      options:["Stratum basale","Stratum corneum","Stratum granulosum","Stratum lucidum"],
      answer:0,
      rationales:[
        "the stratum basale sits on the basement membrane and its keratinocytes divide, pushing daughter cells toward the surface.",
        "the stratum corneum is the dead, flattened, keratin filled outer layer. Nothing divides there.",
        "the stratum granulosum is where keratinocytes are already filling with keratohyalin granules and dying.",
        "the stratum lucidum is a thin clear layer of dead cells found only in thick skin."
      ] },

    { module:"m1", competency:"a-3", topic:"Foundations", dok:1,
      stem:"A cut that divides the body into anterior and posterior portions is made along which plane?",
      options:["Frontal plane","Sagittal plane","Transverse plane","Oblique plane"],
      answer:0,
      rationales:[
        "the frontal plane, also called the coronal plane, runs side to side and front to back separation is exactly what it produces.",
        "a sagittal plane divides left from right.",
        "a transverse plane divides superior from inferior.",
        "an oblique plane is any cut at an angle, so it does not produce a clean anterior and posterior split."
      ] },

    { module:"m1", competency:"a-18", topic:"Tissues and Histology", dok:2,
      stem:"Which connective tissue has a matrix of chondroitin sulfate and collagen fibers with cells sitting in lacunae, and no blood supply of its own?",
      options:["Hyaline cartilage","Areolar connective tissue","Compact bone","Dense irregular connective tissue"],
      answer:0,
      rationales:[
        "cartilage is avascular, its chondrocytes sit in lacunae, and hyaline is the most common type.",
        "areolar tissue is loose, well vascularized, and has a soft gel matrix with scattered fibers.",
        "compact bone also has cells in lacunae, but it has a calcified matrix and a rich blood supply through central canals.",
        "dense irregular connective tissue is fiber dense and vascularized, and its fibroblasts do not sit in lacunae."
      ] },

    { module:"m2", competency:"a-31", topic:"Bone Histology", dok:2,
      stem:"Which bone cell sits in a lacuna and maintains the surrounding matrix?",
      options:["Osteocyte","Osteoblast","Osteoclast","Osteogenic cell"],
      answer:0,
      rationales:[
        "once an osteoblast is walled into the matrix it becomes an osteocyte, keeping contact with its neighbors through canaliculi.",
        "osteoblasts sit on bone surfaces and lay down new matrix. They are not yet enclosed.",
        "osteoclasts are large and multinucleate and they break matrix down.",
        "osteogenic cells are the stem cells that divide to produce osteoblasts."
      ] },

    { module:"m2", competency:"a-29", topic:"Bone Histology", dok:2,
      stem:"Where does a long bone grow in length during childhood?",
      options:["Epiphyseal plate","Periosteum","Medullary cavity","Endosteum"],
      answer:0,
      rationales:[
        "the epiphyseal plate is the hyaline cartilage disc between epiphysis and diaphysis, and cartilage added there is replaced by bone.",
        "the periosteum adds width through appositional growth, not length.",
        "the medullary cavity is the marrow space inside the shaft.",
        "the endosteum lines internal surfaces and takes part in remodeling, not in length growth."
      ] },

    { module:"m2", competency:"a-38", topic:"Axial Skeleton, Spine", dok:1,
      stem:"How many cervical vertebrae are there?",
      options:["Seven","Five","Twelve","Four"],
      answer:0,
      rationales:[
        "there are seven cervical vertebrae in nearly every mammal, including the giraffe.",
        "five is the count for the lumbar region.",
        "twelve is the count for the thoracic region, one for each rib pair.",
        "four is the number of fused coccygeal vertebrae, not cervical."
      ] },

    { module:"m2", competency:"a-54", topic:"Articulations and Joints", dok:2,
      stem:"Which structural and functional classification fits the hip joint?",
      options:["Synovial ball and socket","Fibrous syndesmosis","Cartilaginous symphysis","Synovial hinge"],
      answer:0,
      rationales:[
        "the head of the femur sits in the acetabulum inside a joint cavity, giving movement in all three planes.",
        "a syndesmosis joins bones with a ligament or interosseous membrane, like the distal tibia and fibula.",
        "a symphysis joins bones with fibrocartilage, like the pubic symphysis and the intervertebral discs.",
        "a hinge joint moves in one plane only, like the elbow."
      ] }
  ],

  /* ---------------------------------------------------------------
     MATCHING
     One authored set per module topic. The simulator shuffles the
     right hand column and letters them A onward.
     --------------------------------------------------------------- */
  matching: [
    { module:"m1", title:"Body regions to layman's terms", pairs:[
      { left:"Antebrachial", right:"Forearm" },
      { left:"Brachial", right:"Arm, shoulder to elbow" },
      { left:"Sural", right:"Calf" },
      { left:"Popliteal", right:"Back of the knee" },
      { left:"Axillary", right:"Armpit" },
      { left:"Buccal", right:"Cheek" },
      { left:"Cervical", right:"Neck" },
      { left:"Carpal", right:"Wrist" },
      { left:"Inguinal", right:"Groin" },
      { left:"Tarsal", right:"Ankle" }
    ] },

    { module:"m2", title:"Bone detail to the bone it belongs to", pairs:[
      { left:"Greater trochanter", right:"Femur" },
      { left:"Olecranon", right:"Ulna" },
      { left:"Acromion", right:"Scapula" },
      { left:"Medial malleolus", right:"Tibia" },
      { left:"Lateral malleolus", right:"Fibula" },
      { left:"Sella turcica", right:"Sphenoid" },
      { left:"Mastoid process", right:"Temporal" },
      { left:"Xiphoid process", right:"Sternum" },
      { left:"Iliac crest", right:"Ilium" },
      { left:"Radial tuberosity", right:"Radius" }
    ] }
  ],

  /* ---------------------------------------------------------------
     BRAIN DUMP
     Four are offered on a full exam and the student picks one. The
     checklist is what a complete answer contains. Keywords are what
     the page scans for. The student corrects the ticks afterward.
     --------------------------------------------------------------- */
  braindump: [
    { module:"m1", topic:"Integumentary",
      prompt:"Draw and describe the layers of thick skin from the surface down to the hypodermis. Name every layer and say what is happening to the cells in it.",
      checklist:[
        { text:"Named the stratum corneum", keywords:["stratum corneum","corneum"] },
        { text:"Named the stratum lucidum and tied it to thick skin", keywords:["stratum lucidum","lucidum"] },
        { text:"Named the stratum granulosum", keywords:["stratum granulosum","granulosum"] },
        { text:"Named the stratum spinosum", keywords:["stratum spinosum","spinosum"] },
        { text:"Named the stratum basale as the dividing layer", keywords:["stratum basale","basale","germinativum"] },
        { text:"Named the papillary layer of the dermis", keywords:["papillary"] },
        { text:"Named the reticular layer of the dermis", keywords:["reticular"] },
        { text:"Named the hypodermis or subcutaneous layer", keywords:["hypodermis","subcutaneous","superficial fascia"] },
        { text:"Named keratinocytes", keywords:["keratinocyte","keratinocytes"] },
        { text:"Named melanocytes", keywords:["melanocyte","melanocytes"] }
      ] },

    { module:"m1", topic:"Epithelium",
      prompt:"Lay out the epithelial tissue types. For each one give the shape, the layering, and one place in the body it is found.",
      checklist:[
        { text:"Simple squamous with a location", keywords:["simple squamous"] },
        { text:"Simple cuboidal with a location", keywords:["simple cuboidal"] },
        { text:"Simple columnar with a location", keywords:["simple columnar"] },
        { text:"Pseudostratified columnar with a location", keywords:["pseudostratified"] },
        { text:"Stratified squamous with a location", keywords:["stratified squamous"] },
        { text:"Transitional with a location", keywords:["transitional"] },
        { text:"Mentioned the basement membrane", keywords:["basement membrane","basal lamina"] },
        { text:"Mentioned that epithelium is avascular", keywords:["avascular","no blood supply"] },
        { text:"Mentioned apical and basal surfaces", keywords:["apical","basal surface","polarity"] },
        { text:"Mentioned cilia, microvilli, or goblet cells as surface specializations", keywords:["cilia","microvilli","goblet"] }
      ] },

    { module:"m2", topic:"Bone tissue",
      prompt:"Draw a section through compact bone and label everything you can. Then say how a nutrient reaches an osteocyte buried in the matrix.",
      checklist:[
        { text:"Named the osteon or Haversian system", keywords:["osteon","haversian system","haversian"] },
        { text:"Named the central canal", keywords:["central canal","haversian canal"] },
        { text:"Named the perforating canal", keywords:["perforating canal","volkmann"] },
        { text:"Named lamellae", keywords:["lamella","lamellae"] },
        { text:"Named lacunae", keywords:["lacuna","lacunae"] },
        { text:"Named canaliculi and their role in getting nutrients across", keywords:["canaliculi","canaliculus"] },
        { text:"Named osteocytes", keywords:["osteocyte","osteocytes"] },
        { text:"Named the periosteum", keywords:["periosteum"] },
        { text:"Named the endosteum", keywords:["endosteum"] },
        { text:"Contrasted compact with spongy bone or trabeculae", keywords:["spongy","trabecula","trabeculae","cancellous"] }
      ] },

    { module:"m2", topic:"Joints",
      prompt:"Work through the classification of joints. Give the structural categories, the functional categories, and an example of each.",
      checklist:[
        { text:"Named fibrous joints", keywords:["fibrous"] },
        { text:"Named cartilaginous joints", keywords:["cartilaginous"] },
        { text:"Named synovial joints", keywords:["synovial"] },
        { text:"Named synarthrosis", keywords:["synarthrosis","synarthroses","immovable"] },
        { text:"Named amphiarthrosis", keywords:["amphiarthrosis","amphiarthroses","slightly movable"] },
        { text:"Named diarthrosis", keywords:["diarthrosis","diarthroses","freely movable"] },
        { text:"Gave a suture, gomphosis, or syndesmosis example", keywords:["suture","gomphosis","syndesmosis"] },
        { text:"Gave a synchondrosis or symphysis example", keywords:["synchondrosis","symphysis"] },
        { text:"Named the articular capsule or joint cavity", keywords:["articular capsule","joint cavity","synovial cavity"] },
        { text:"Named articular cartilage or synovial fluid", keywords:["articular cartilage","synovial fluid"] }
      ] }
  ],

  /* ---------------------------------------------------------------
     CARDS
     Term and definition pairs. The simulator builds extra multiple
     choice, true or false, matching, and brain dump checklists from
     these when the authored pool runs short. Set unique to false on
     any card whose definition could describe more than one term, and
     the simulator will leave it out of item building.
     --------------------------------------------------------------- */
  cards: [
    { module:"m1", competency:"a-4", topic:"Foundations", dok:1, term:"Superficial", definition:"toward or at the body surface" },
    { module:"m1", competency:"a-4", topic:"Foundations", dok:1, term:"Deep", definition:"away from the body surface, more internal" },
    { module:"m1", competency:"a-4", topic:"Foundations", dok:1, term:"Ipsilateral", definition:"on the same side of the body" },
    { module:"m1", competency:"a-4", topic:"Foundations", dok:1, term:"Contralateral", definition:"on opposite sides of the body" },
    { module:"m1", competency:"a-4", topic:"Foundations", dok:1, term:"Distal", definition:"farther from the origin of a body part or the point of attachment of a limb" },
    { module:"m1", competency:"a-4", topic:"Foundations", dok:1, term:"Superior", definition:"toward the head end or the upper part of a structure" },

    { module:"m1", competency:"a-14", topic:"Cell Anatomy", dok:1, term:"Rough endoplasmic reticulum", definition:"the membrane network studded with ribosomes where proteins destined for secretion or membranes are made and folded" },
    { module:"m1", competency:"a-14", topic:"Cell Anatomy", dok:1, term:"Golgi apparatus", definition:"the stack of flattened membrane sacs that sorts, modifies, and packages proteins into vesicles for shipping" },
    { module:"m1", competency:"a-14", topic:"Cell Anatomy", dok:1, term:"Lysosome", definition:"the membrane bound sac of digestive enzymes that breaks down worn organelles and engulfed material" },
    { module:"m1", competency:"a-14", topic:"Cell Anatomy", dok:1, term:"Nucleolus", definition:"the dense region inside the nucleus where ribosomal subunits are assembled" },
    { module:"m1", competency:"a-14", topic:"Cell Anatomy", dok:1, term:"Peroxisome", definition:"the organelle holding oxidase and catalase that neutralizes free radicals and detoxifies harmful substances" },
    { module:"m1", competency:"a-14", topic:"Cell Anatomy", dok:1, term:"Centriole", definition:"the paired barrel of microtubule triplets that organizes the mitotic spindle" },

    { module:"m2", competency:"a-44", topic:"Appendicular, Upper Extremity", dok:1, term:"Scaphoid", definition:"the carpal bone in the lateral proximal row that is the most commonly fractured carpal" },
    { module:"m2", competency:"a-44", topic:"Appendicular, Upper Extremity", dok:1, term:"Pisiform", definition:"the small pea shaped carpal sitting on the anterior surface of the triquetrum" },
    { module:"m2", competency:"a-44", topic:"Appendicular, Upper Extremity", dok:1, term:"Capitate", definition:"the largest carpal bone, sitting in the center of the distal row" },
    { module:"m2", competency:"a-44", topic:"Appendicular, Upper Extremity", dok:1, term:"Hamate", definition:"the carpal in the distal row carrying a hook shaped process on its anterior surface" },
    { module:"m2", competency:"a-44", topic:"Appendicular, Upper Extremity", dok:1, term:"Lunate", definition:"the crescent shaped carpal in the proximal row that articulates with the radius beside the scaphoid" },
    { module:"m2", competency:"a-44", topic:"Appendicular, Upper Extremity", dok:1, term:"Trapezium", definition:"the distal row carpal that articulates with the first metacarpal at the saddle joint of the thumb" },

    { module:"m2", competency:"a-33", topic:"Axial Skeleton, Skull", dok:1, term:"Ethmoid", definition:"the skull bone forming the roof of the nasal cavity and carrying the crista galli and cribriform plate" },
    { module:"m2", competency:"a-33", topic:"Axial Skeleton, Skull", dok:1, term:"Sphenoid", definition:"the butterfly shaped skull bone that spans the floor of the cranium and holds the pituitary in its saddle" },
    { module:"m2", competency:"a-33", topic:"Axial Skeleton, Skull", dok:1, term:"Zygomatic", definition:"the facial bone forming the prominence of the cheek and the lateral wall of the orbit" },
    { module:"m2", competency:"a-33", topic:"Axial Skeleton, Skull", dok:1, term:"Vomer", definition:"the single plough shaped bone forming the inferior part of the nasal septum" },
    { module:"m2", competency:"a-33", topic:"Axial Skeleton, Skull", dok:1, term:"Lacrimal", definition:"the small facial bone in the medial orbital wall carrying the groove for the tear duct" },
    { module:"m2", competency:"a-33", topic:"Axial Skeleton, Skull", dok:1, term:"Occipital", definition:"the skull bone forming the posterior cranium and containing the foramen magnum" }
  ],

  /* ---------------------------------------------------------------
     PHYSIOLOGY ITEMS
     The competency IDs here come from bio005-competencies.csv. The
     simulator reads that file, matches on the ID, and files these
     under physiology automatically. Nothing else marks them.
     --------------------------------------------------------------- */
  physiologyNote: "Items below are keyed to the BIO 005 competency CSV.",

  tfPhysiology: [
    { module:"1", competency:"p-3", topic:"Foundations of Physiology", dok:2,
      statement:"The condition in which a variable is held near a setpoint by active regulation is called **equilibrium**.",
      term:"equilibrium", isTrue:false, correct:["homeostasis"],
      why:"Chemical equilibrium is a state with no net movement and no energy input. Homeostasis costs energy and holds a variable near a setpoint against a gradient." },

    { module:"1", competency:"p-5", topic:"Foundations of Physiology", dok:2,
      statement:"A **negative** feedback loop moves the regulated variable back toward its setpoint.",
      term:"negative", isTrue:true, correct:[],
      why:"Negative feedback opposes the change. Positive feedback amplifies it and needs an outside event to stop it." },

    { module:"1", competency:"p-9", topic:"Foundations of Physiology", dok:2,
      statement:"In a 70 kg adult roughly two thirds of total body water sits in the **intracellular** compartment.",
      term:"intracellular", isTrue:true, correct:[],
      why:"Of about 42 litres of total body water, roughly 28 litres is intracellular and about 14 litres is extracellular." },

    { module:"1", competency:"p-16", topic:"Chemical Foundations", dok:1,
      statement:"The normal pH of arterial blood is about **7.4**.",
      term:"7.4", isTrue:true, correct:[],
      why:"The accepted range is 7.35 to 7.45, so 7.4 is the midpoint value used as normal." },

    { module:"2", competency:"p-56", topic:"Electrical Signaling", dok:2,
      statement:"The rising phase of a neuronal action potential is produced by **potassium** entering the cell.",
      term:"potassium", isTrue:false, correct:["sodium","na","na+"],
      why:"Voltage gated sodium channels open first and sodium rushes in, which is depolarization. Potassium leaving the cell produces the falling phase." }
  ],

  mcPhysiology: [
    { module:"1", competency:"p-4", topic:"Foundations of Physiology", dok:2,
      stem:"In a negative feedback loop, which component compares the sensed value against the setpoint and decides on a response?",
      options:["The integrating center","The sensor","The effector","The afferent pathway"],
      answer:0,
      rationales:[
        "the integrating center holds the setpoint and issues the output signal once it has compared the two.",
        "the sensor detects the value of the regulated variable but does no comparing.",
        "the effector carries out the response after the decision has already been made.",
        "the afferent pathway is only the route the sensor's signal travels along."
      ] },

    { module:"1", competency:"p-10", topic:"Foundations of Physiology", dok:3,
      stem:"A patient's extracellular osmolarity rises after several hours without water. Which way does water move, and what happens to cell volume?",
      options:["Out of the cells into the extracellular fluid, so cells shrink",
               "Into the cells from the extracellular fluid, so cells swell",
               "No net movement, because the compartments are separated by a barrier",
               "Into the cells first, then back out once the pumps respond"],
      answer:0,
      rationales:[
        "water follows its own concentration gradient toward the higher solute concentration, which is now the extracellular fluid.",
        "that is the response to a fall in extracellular osmolarity, not a rise.",
        "cell membranes are freely permeable to water, so osmotic differences are corrected by water movement.",
        "pumps move solutes, not water, and the initial osmotic movement is out of the cell rather than into it."
      ] },

    { module:"1", competency:"p-18", topic:"Chemical Foundations", dok:3,
      stem:"A competitive inhibitor is added to an enzyme reaction. Which change would most directly overcome its effect?",
      options:["Raising the substrate concentration",
               "Lowering the temperature below the optimum",
               "Raising the pH well above the optimum",
               "Adding a second competitive inhibitor"],
      answer:0,
      rationales:[
        "a competitive inhibitor competes for the active site, so more substrate outcompetes it and the reaction can still reach its maximum rate.",
        "cooling slows every collision and lowers the rate further rather than relieving the inhibition.",
        "moving pH away from the optimum changes the shape of the active site and lowers activity further.",
        "more inhibitor makes the competition worse, not better."
      ] },

    { module:"2", competency:"p-81", topic:"Skeletal Muscle Physiology", dok:3,
      stem:"Calcium released into the cytosol of a skeletal muscle fiber allows cross bridges to form. What does it bind to in order to do that?",
      options:["Troponin","Myosin heads","Tropomyosin","The sarcoplasmic reticulum membrane"],
      answer:0,
      rationales:[
        "calcium binds troponin, which drags tropomyosin off the myosin binding sites on actin.",
        "myosin heads bind ATP and actin, not calcium.",
        "tropomyosin is moved by troponin rather than binding calcium itself.",
        "calcium is released from the sarcoplasmic reticulum, so binding back to it would undo the signal."
      ] }
  ],

  braindumpPhysiology: [
    { module:"1", competency:"p-4", topic:"Foundations of Physiology",
      prompt:"Draw a negative feedback loop for body temperature. Label every component and trace what happens when someone walks into the cold.",
      checklist:[
        { text:"Named the regulated variable", keywords:["regulated variable","body temperature","core temperature"] },
        { text:"Named the setpoint", keywords:["setpoint","set point"] },
        { text:"Named the stimulus", keywords:["stimulus"] },
        { text:"Named the sensor or receptor", keywords:["sensor","receptor","thermoreceptor"] },
        { text:"Named the afferent pathway", keywords:["afferent"] },
        { text:"Named the integrating center", keywords:["integrating center","integrating centre","hypothalamus","control center"] },
        { text:"Named the efferent pathway", keywords:["efferent"] },
        { text:"Named the effector", keywords:["effector","skeletal muscle","blood vessel","shiver"] },
        { text:"Named the response", keywords:["response","shivering","vasoconstriction"] },
        { text:"Explained that the response opposes the change", keywords:["opposes","back toward","counteract","negative feedback"] }
      ] }
  ],

  cardsPhysiology: [
    { module:"1", competency:"p-9", topic:"Foundations of Physiology", dok:1, term:"Interstitial fluid", definition:"the extracellular fluid that surrounds cells and lies outside the blood vessels" },
    { module:"1", competency:"p-9", topic:"Foundations of Physiology", dok:1, term:"Plasma", definition:"the extracellular fluid held inside the blood vessels" },
    { module:"1", competency:"p-9", topic:"Foundations of Physiology", dok:1, term:"Intracellular fluid", definition:"the fluid inside cells, the largest single body water compartment, dominated by potassium" },
    { module:"1", competency:"p-16", topic:"Chemical Foundations", dok:1, term:"Buffer", definition:"a weak acid and its conjugate base working as a pair to resist a change in pH when acid or base is added" },
    { module:"1", competency:"p-19", topic:"Chemical Foundations", dok:1, term:"Endergonic reaction", definition:"a reaction that requires an input of free energy to proceed, commonly coupled to ATP hydrolysis" },
    { module:"2", competency:"p-59", topic:"Electrical Signaling", dok:2, term:"Absolute refractory period", definition:"the interval during which no stimulus of any strength can trigger a second action potential because the sodium channels are inactivated" },
    { module:"2", competency:"p-59", topic:"Electrical Signaling", dok:2, term:"Relative refractory period", definition:"the interval during which a stronger than normal stimulus can trigger an action potential because the membrane is hyperpolarized" },
    { module:"2", competency:"p-82", topic:"Skeletal Muscle Physiology", dok:2, term:"A band", definition:"the sarcomere band that holds the thick filaments and does not change length during contraction" },
    { module:"2", competency:"p-82", topic:"Skeletal Muscle Physiology", dok:2, term:"I band", definition:"the sarcomere band holding only thin filaments, which shortens during contraction" },
    { module:"2", competency:"p-82", topic:"Skeletal Muscle Physiology", dok:2, term:"H zone", definition:"the central region of the A band holding thick filaments only, which narrows during contraction" }
  ]
};
