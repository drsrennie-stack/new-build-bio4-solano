/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   draw-checklists.js

   The 50 competencies you tagged with a draw facet, one drawing
   assignment each.

   WHY THE ITEM LISTS ARE EMPTY
   ----------------------------
   I tried three times to generate the checklist automatically by
   splitting your "can" statements on their commas and connectors.
   Every attempt produced items that read as mistakes:

       [ ] Marrow regions on a long bone
       [ ] Tendon sheaths
       [ ] Its nerve and blood supply
       [ ] entify the structures of a synovial joint

   Those are fragments of your sentences, not things a student can
   tick. Shipping them would have put words in your mouth that look
   like errors, on a page students score themselves against.

   So the standard below is your "can" statement, VERBATIM and
   untouched. The item list is yours to fill.

   HOW TO FILL ONE IN
   ------------------
   Put the structures a correct drawing must contain, one per
   string. Short is better; a student is ticking these with a pencil
   in hand.

       "w2-long-bone-gross": { items: [
         "Diaphysis",
         "Proximal and distal epiphysis",
         "Metaphysis with the epiphyseal line",
         "Medullary cavity",
         "Articular cartilage",
         "Periosteum and endosteum",
         "Red and yellow marrow in the right places"
       ]},

   WHAT HAPPENS WITH AN EMPTY LIST
   -------------------------------
   The page still works. It shows the standard and the four general
   drawing criteria, and the student scores against those. Filling
   the items in makes the score sharper, it is not required for the
   page to function.

   Score = items ticked / items shown. That fraction is written to
   the shared evidence store as a "draw" result for this competency,
   which is what puts drawing on the weak spot board beside cards
   and Loops.
   ============================================================ */

window.BIO004_DRAW = [
  { id:"w2-long-bone-gross", week:4, system:"Bone Histology",
    name:"Gross anatomy of a long bone",
    standard:"Label the diaphysis, epiphysis, metaphysis, medullary cavity, articular cartilage, periosteum, endosteum, epiphyseal line, and marrow regions on a long bone.",
    items: [] },
  { id:"w2-compact-spongy", week:4, system:"Bone Histology",
    name:"Compact and spongy bone microanatomy",
    standard:"Label the parts of an osteon and contrast compact bone with the trabeculae of spongy bone by structure and location.",
    items: [] },
  { id:"w2-ossification-growth", week:4, system:"Bone Histology",
    name:"Ossification and growth plate zones",
    standard:"Contrast intramembranous and endochondral ossification and list the five growth plate zones in order from epiphysis to diaphysis.",
    items: [] },
  { id:"w2-typical-vertebra", week:5, system:"Axial Skeleton, Spine",
    name:"Typical vertebra and intervertebral disc",
    standard:"Label the parts of a typical vertebra and the anulus fibrosus and nucleus pulposus of an intervertebral disc.",
    items: [] },
  { id:"w2-synovial-structure", week:6, system:"Articulations and Joints",
    name:"Synovial joint structure and accessory parts",
    standard:"Identify the structures of a synovial joint, its accessory structures such as menisci, labra, bursae, and tendon sheaths, and its nerve and blood supply.",
    items: [] },
  { id:"w2-joint-movements", week:6, system:"Articulations and Joints",
    name:"Movements at synovial joints",
    standard:"Demonstrate and name the gliding, angular, rotational, and special movements permitted at synovial joints.",
    items: [] },
  { id:"w2-shoulder-knee", week:6, system:"Articulations and Joints",
    name:"Shoulder and knee joint structure",
    standard:"Describe the articulating bones and supporting ligaments of the glenohumeral and tibiofemoral joints and identify the rotator cuff, menisci, and cruciate and collateral ligaments.",
    items: [] },
  { id:"cv-surfaces", week:7, system:"Cardiovascular",
    name:"Heart wall layers, pericardium, and internal features",
    standard:"Name the three heart wall layers and the pericardial membranes, and locate internal features such as auricles, pectinate muscles, fossa ovalis, and trabeculae carneae.",
    items: [] },
  { id:"cv-chambers", week:7, system:"Cardiovascular",
    name:"Heart chambers and septa",
    standard:"Identify the four heart chambers and the interatrial and interventricular septa, and state what blood each chamber receives and where it sends it.",
    items: [] },
  { id:"cv-valves", week:7, system:"Cardiovascular",
    name:"Heart valves and what each separates",
    standard:"Identify the four heart valves by type and location, and state which two chambers or vessels each one separates and where it prevents backflow.",
    items: [] },
  { id:"cv-valve-support", week:7, system:"Cardiovascular",
    name:"Chordae tendineae and papillary muscles",
    standard:"Identify the chordae tendineae and papillary muscles and describe how they anchor and hold the atrioventricular valves shut.",
    items: [] },
  { id:"cv-cardiac-muscle", week:7, system:"Cardiovascular",
    name:"Cardiac muscle tissue and the intercalated disc",
    standard:"Describe cardiac muscle tissue and identify the cardiomyocyte, striations, and intercalated disc with its desmosomes and gap junctions.",
    items: [] },
  { id:"cv-blood-pathway", week:7, system:"Cardiovascular",
    name:"Pathway of blood through the heart",
    standard:"Trace one drop of blood through the four chambers and four valves of the heart in correct order.",
    items: [] },
  { id:"bvn-great-vessels", week:7, system:"Cardiovascular",
    name:"Great vessels and aortic arch",
    standard:"Identify the great vessels attached to the base of the heart and state which circuit each one serves.",
    items: [] },
  { id:"cv-coronary", week:7, system:"Cardiovascular",
    name:"Coronary circulation",
    standard:"Trace coronary circulation from the aorta through the coronary arteries, myocardial capillaries, cardiac veins, and coronary sinus to the right atrium, and identify the major coronary vessels.",
    items: [] },
  { id:"cv-conduction-anat", week:7, system:"Cardiovascular",
    name:"Conduction system components and pathway",
    standard:"Locate each component of the conduction system and trace the pathway in order from the SA node to the Purkinje fibers.",
    items: [] },
  { id:"bvn-vessel-tunics", week:8, system:"Cardiovascular",
    name:"Three tunics of a vessel wall",
    standard:"Name the three tunics of a vessel wall, state the tissue each contains, and explain which layer forms a capillary wall.",
    items: [] },
  { id:"bvn-vessel-types", week:8, system:"Cardiovascular",
    name:"The five vessel types",
    standard:"Compare arteries, arterioles, capillaries, venules, and veins by wall structure, direction of flow, and role.",
    items: [] },
  { id:"bvn-circulatory-routes", week:8, system:"Cardiovascular",
    name:"Circulatory routes, portal systems, and anastomoses",
    standard:"Describe the pulmonary and systemic circuits and identify portal systems and anastomoses as alternate circulatory arrangements.",
    items: [] },
  { id:"bvn-fetal-remnants", week:8, system:"Cardiovascular",
    name:"Fetal circulation, shunts, and adult remnants",
    standard:"Identify the fetal vessels and three shunts, state how each reroutes blood, and name the adult remnant each becomes.",
    items: [] },
  { id:"w4-fascicle-patterns", week:8, system:"Fascicle Arrangement",
    name:"Fascicle arrangement patterns",
    standard:"Identify parallel, fusiform, circular, convergent, and pennate fascicle patterns and give an example muscle for each, relating architecture to power versus range of motion.",
    items: [] },
  { id:"w4-lever-systems", week:8, system:"Fascicle Arrangement",
    name:"Lever systems",
    standard:"Identify the fulcrum, effort, and load of a lever and classify first-, second-, and third-class levers with a body example of each.",
    items: [] },
  { id:"w4-ct-coverings", week:8, system:"Muscle Structure",
    name:"Connective tissue coverings",
    standard:"Name the epimysium, perimysium, and endomysium and trace how the three sheaths merge into the tendon that anchors muscle to bone.",
    items: [] },
  { id:"w4-muscle-organization", week:8, system:"Muscle Structure",
    name:"Levels of organization",
    standard:"Order the nested levels of skeletal muscle from whole muscle through fascicle, fiber, and myofibril down to the myofilament.",
    items: [] },
  { id:"w4-muscle-fiber-parts", week:8, system:"Muscle Structure",
    name:"Muscle fiber internal structure",
    standard:"Identify the sarcolemma, sarcoplasm, myonuclei, myofibrils, sarcoplasmic reticulum, terminal cisternae, T tubules, and triad of a muscle fiber.",
    items: [] },
  { id:"w4-sarcomere", week:8, system:"Muscle Structure",
    name:"Sarcomere bands and filaments",
    standard:"Diagram a sarcomere and name the Z disc, A band, I band, H zone, M line, and zone of overlap, stating which filaments occupy each region.",
    items: [] },
  { id:"w4-myofilament-proteins", week:8, system:"Muscle Structure",
    name:"Myofilament and structural proteins",
    standard:"Distinguish thick from thin filaments by protein and anchor point and identify the roles of titin, nebulin, alpha-actinin, myomesin, and dystrophin.",
    items: [] },
  { id:"w4-formed-elements", week:9, system:"Blood",
    name:"Formed elements and leukocytes",
    standard:"Identify erythrocytes, platelets, and the five leukocytes on a smear and describe erythrocyte structure and the granulocyte and agranulocyte groups.",
    items: [] },
  { id:"resp-zones", week:11, system:"Respiratory",
    name:"Upper and lower tracts, conducting and respiratory zones",
    standard:"Distinguish the upper and lower respiratory tracts and the conducting and respiratory zones, and assign the major airway structures to each.",
    items: [] },
  { id:"resp-upper-tract", week:11, system:"Respiratory",
    name:"Nose, nasal cavity, and pharynx",
    standard:"Identify the parts of the nasal cavity, paranasal sinuses, and the three regions of the pharynx.",
    items: [] },
  { id:"resp-larynx", week:11, system:"Respiratory",
    name:"Larynx",
    standard:"Identify the cartilages and folds of the larynx, including the thyroid and cricoid cartilages, epiglottis, arytenoids, vocal cords, and glottis.",
    items: [] },
  { id:"resp-tree", week:11, system:"Respiratory",
    name:"Trachea and bronchial tree",
    standard:"Trace air through the trachea and bronchial tree in order from the trachea and carina down to the terminal bronchioles.",
    items: [] },
  { id:"resp-lungs-pleura", week:11, system:"Respiratory",
    name:"Lungs and pleurae",
    standard:"Identify the lobes, fissures, and surfaces of each lung and the parietal and visceral pleurae with the pleural cavity.",
    items: [] },
  { id:"resp-histo", week:11, system:"Respiratory",
    name:"Respiratory zone and alveolar structure",
    standard:"Describe the structure of an alveolus and identify the type I and type II alveolar cells, alveolar macrophages, respiratory membrane, and pulmonary capillaries.",
    items: [] },
  { id:"w5-canal-wall", week:12, system:"Alimentary Canal",
    name:"Four-layer gut wall",
    standard:"Name the four layers of the alimentary canal wall from lumen outward and state the dominant tissue of each.",
    items: [] },
  { id:"w5-food-pathway", week:12, system:"Alimentary Canal",
    name:"Trace the pathway of food",
    standard:"Trace a bite of food through every named segment of the alimentary canal in order from mouth to anus.",
    items: [] },
  { id:"w5-bile-path", week:13, system:"Accessory Organs",
    name:"Gallbladder and bile pathway",
    standard:"Identify the gallbladder regions and trace bile from the canaliculi through the hepatic, cystic, and common bile ducts to the hepatopancreatic ampulla and duodenum.",
    items: [] },
  { id:"w4-lymph-pathway", week:13, system:"Lymphatic System",
    name:"Lymph pathway",
    standard:"Define lymph and trace its one-way route from lymphatic capillaries through collecting vessels, nodes, trunks, and ducts back to the subclavian veins.",
    items: [] },
  { id:"w4-lymph-vessels-node", week:13, system:"Lymphatic System",
    name:"Vessel and node structure",
    standard:"Describe the structure of lymphatic capillaries, valved collecting vessels, and a lymph node including capsule, cortex, medulla, hilum, and afferent and efferent vessels.",
    items: [] },
  { id:"w6-kidney-bloodsupply", week:14, system:"Urinary",
    name:"Kidney blood supply pathway",
    standard:"Trace blood through the kidney from the renal artery to the renal vein, naming each vessel in order.",
    items: [] },
  { id:"w6-urine-path", week:14, system:"Urinary",
    name:"Ureters, bladder, urethra and urine path",
    standard:"Trace urine from the collecting duct to the outside and identify the ureter, bladder wall layers, trigone, detrusor, sphincters, and male and female urethra.",
    items: [] },
  { id:"w6-ovum-path", week:15, system:"Female Reproductive",
    name:"Uterine tubes and ovum pathway",
    standard:"Trace the oocyte from the ovary to the uterus, naming the fimbriae, infundibulum, ampulla, and isthmus.",
    items: [] },
  { id:"w6-sperm-path", week:15, system:"Male Reproductive",
    name:"Sperm duct system and pathway",
    standard:"Trace the path of sperm from the seminiferous tubules to the outside, naming the epididymis, ductus deferens, ejaculatory duct, urethra, and spermatic cord contents.",
    items: [] },
  { id:"w6-fertilization-implant", week:15, system:"Pregnancy and Birth",
    name:"Fertilization and implantation",
    standard:"Order the events from zygote through cleavage, morula, and blastocyst to implantation, naming where each occurs.",
    items: [] },
  { id:"w7-brain-development", week:16, system:"Brain",
    name:"Neural tube brain development",
    standard:"Trace brain development from the neural tube through the primary and secondary vesicles and match each secondary vesicle to its adult structures and ventricle.",
    items: [] },
  { id:"w8-ns-organization", week:16, system:"Functional Organization and Nervous Tissue",
    name:"Nervous system divisions",
    standard:"Outline the organization of the nervous system into CNS and PNS and its somatic, autonomic, and enteric motor divisions.",
    items: [] },
  { id:"w8-neuron-parts", week:16, system:"Functional Organization and Nervous Tissue",
    name:"Neuron structure",
    standard:"Identify the cell body, dendrites, axon, axon hillock, Nissl bodies, and axon terminals of a neuron and state the direction a signal travels through them.",
    items: [] },
  { id:"w7-csf-circulation", week:16, system:"Meninges and CSF",
    name:"CSF production and circulation",
    standard:"Trace CSF from production at the choroid plexus through the ventricles and subarachnoid space to reabsorption at the arachnoid granulations.",
    items: [] },
  { id:"w8-reflex-arc", week:17, system:"Gross Anatomy and Neuronal Integration",
    name:"Reflex arc components",
    standard:"Name the five components of a reflex arc in order from receptor to effector and trace a signal through them.",
    items: [] },
  { id:"w8-ans-pathway", week:17, system:"The Autonomic Nervous System",
    name:"Autonomic two-neuron pathway",
    standard:"Contrast the somatic and autonomic motor systems and trace the two-neuron pathway through a preganglionic neuron, autonomic ganglion, and postganglionic neuron to an effector.",
    items: [] },
];

/* The four criteria every anatomical drawing is scored on, whatever
   the topic. These are about the ACT of reconstructing from memory,
   which is the thing drawing tests that a multiple-choice card
   cannot. They apply even when the item list above is empty. */
window.BIO004_DRAW_RUBRIC = [
  "I drew it from memory, with nothing open in front of me",
  "Every structure is labelled, spelled the way it is spelled in the notes",
  "The parts are in the right position relative to each other, not just present",
  "I can say out loud what each part does or why it is there"
];

window.BIO004_DRAW_BY_ID = function (id) {
  var all = window.BIO004_DRAW || [];
  for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
  return null;
};
