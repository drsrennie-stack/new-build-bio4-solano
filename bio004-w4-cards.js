/* bio004-w4-cards.js  —  BIO 004 competency-tagged recall + practice pool (Week 4: Muscle, Upper Limb, Lymphatic, Blood)
   card-maker-brief.md. Additive: appends to window.BIO004_COURSE_CONTENT and
   window.BIO004_PRACTICE_POOL; never edits existing multiple-choice cards. */
(function (w) {
  "use strict";
  var MODULE = {
  "id": "m-w4",
  "week": 4,
  "title": "Week 4: Muscle, Upper Limb, Lymphatic, Blood",
  "topics": [
    {
      "id": "t-w4-ct-coverings",
      "title": "Muscle connective tissue coverings",
      "competencyId": "w4-ct-coverings",
      "summary": "Muscle connective tissue coverings (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-ct-coverings-r1",
          "competencyId": "w4-ct-coverings",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three connective tissue coverings of a skeletal muscle, from the whole muscle in to the single fiber.",
          "a": "Epimysium (whole muscle), perimysium (each fascicle), endomysium (each fiber).",
          "tags": [
            "w4-ct-coverings"
          ]
        },
        {
          "id": "w4-ct-coverings-r2",
          "competencyId": "w4-ct-coverings",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What does the epimysium wrap, and what tissue is it?",
          "a": "The entire muscle; dense irregular connective tissue.",
          "tags": [
            "w4-ct-coverings"
          ]
        },
        {
          "id": "w4-ct-coverings-r3",
          "competencyId": "w4-ct-coverings",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What does the endomysium wrap, and what tissue is it?",
          "a": "Each individual muscle fiber; a fine areolar connective tissue with reticular fibers.",
          "tags": [
            "w4-ct-coverings"
          ]
        },
        {
          "id": "w4-ct-coverings-r4",
          "competencyId": "w4-ct-coverings",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "How do the three muscle sheaths connect a fiber's pull to the bone?",
          "a": "They are continuous with one another and merge into the tendon, so the pull reaches the bone.",
          "tags": [
            "w4-ct-coverings"
          ]
        },
        {
          "id": "w4-ct-coverings-r5",
          "competencyId": "w4-ct-coverings",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "A muscle strain tears fibers within the belly while a tendon rupture separates muscle from bone. Which connective tissue continuity explains why one pull can injure either site?",
          "a": "The endomysium, perimysium, and epimysium are continuous with the tendon, so force runs from fiber to bone along one connected sheath.",
          "tags": [
            "w4-ct-coverings"
          ]
        }
      ]
    },
    {
      "id": "t-w4-muscle-organization",
      "title": "Levels of muscle organization",
      "competencyId": "w4-muscle-organization",
      "summary": "Levels of muscle organization (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-muscle-organization-r1",
          "competencyId": "w4-muscle-organization",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Order the levels of skeletal muscle organization from the whole organ to the protein strands.",
          "a": "Muscle, fascicle, muscle fiber, myofibril, myofilament.",
          "tags": [
            "w4-muscle-organization"
          ]
        },
        {
          "id": "w4-muscle-organization-r2",
          "competencyId": "w4-muscle-organization",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is a fascicle?",
          "a": "A visible bundle of muscle fibers wrapped in perimysium.",
          "tags": [
            "w4-muscle-organization"
          ]
        },
        {
          "id": "w4-muscle-organization-r3",
          "competencyId": "w4-muscle-organization",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is a myofibril?",
          "a": "A long contractile rod running the length of the fiber; hundreds to thousands fill each fiber.",
          "tags": [
            "w4-muscle-organization"
          ]
        },
        {
          "id": "w4-muscle-organization-r4",
          "competencyId": "w4-muscle-organization",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What are myofilaments, and how do they relate to the sarcomere?",
          "a": "The thick and thin protein strands within a myofibril; their ordered overlap forms the sarcomere.",
          "tags": [
            "w4-muscle-organization"
          ]
        },
        {
          "id": "w4-muscle-organization-r5",
          "competencyId": "w4-muscle-organization",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Moving inward from the whole muscle, which structure is the first single cell you reach?",
          "a": "The muscle fiber, since the muscle and fascicle are groups of cells.",
          "tags": [
            "w4-muscle-organization"
          ]
        }
      ]
    },
    {
      "id": "t-w4-muscle-fiber-parts",
      "title": "Muscle fiber internal structure",
      "competencyId": "w4-muscle-fiber-parts",
      "summary": "Muscle fiber internal structure (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-muscle-fiber-parts-r1",
          "competencyId": "w4-muscle-fiber-parts",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the sarcolemma?",
          "a": "The plasma membrane of the muscle fiber.",
          "tags": [
            "w4-muscle-fiber-parts"
          ]
        },
        {
          "id": "w4-muscle-fiber-parts-r2",
          "competencyId": "w4-muscle-fiber-parts",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the sarcoplasmic reticulum, and what does it store?",
          "a": "The smooth endoplasmic reticulum of the muscle fiber; it stores calcium ions.",
          "tags": [
            "w4-muscle-fiber-parts"
          ]
        },
        {
          "id": "w4-muscle-fiber-parts-r3",
          "competencyId": "w4-muscle-fiber-parts",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is a triad?",
          "a": "One T tubule flanked by two terminal cisternae of the sarcoplasmic reticulum.",
          "tags": [
            "w4-muscle-fiber-parts"
          ]
        },
        {
          "id": "w4-muscle-fiber-parts-r4",
          "competencyId": "w4-muscle-fiber-parts",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What do the transverse (T) tubules do?",
          "a": "They are inward tunnels of the sarcolemma that carry the surface signal deep into the fiber.",
          "tags": [
            "w4-muscle-fiber-parts"
          ]
        },
        {
          "id": "w4-muscle-fiber-parts-r5",
          "competencyId": "w4-muscle-fiber-parts",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Why does a muscle fiber have many nuclei pressed against its membrane?",
          "a": "It forms from many fused cells, so it is multinucleated, with nuclei flattened against the inner sarcolemma.",
          "tags": [
            "w4-muscle-fiber-parts"
          ]
        }
      ]
    },
    {
      "id": "t-w4-sarcomere",
      "title": "Sarcomere bands and filaments",
      "competencyId": "w4-sarcomere",
      "summary": "Sarcomere bands and filaments (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-sarcomere-r1",
          "competencyId": "w4-sarcomere",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What marks the boundaries of a sarcomere?",
          "a": "The Z discs, one at each end.",
          "tags": [
            "w4-sarcomere"
          ]
        },
        {
          "id": "w4-sarcomere-r2",
          "competencyId": "w4-sarcomere",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which filaments are found in the I band?",
          "a": "Thin filaments only.",
          "tags": [
            "w4-sarcomere"
          ]
        },
        {
          "id": "w4-sarcomere-r3",
          "competencyId": "w4-sarcomere",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which filaments are found in the H zone?",
          "a": "Thick filaments only.",
          "tags": [
            "w4-sarcomere"
          ]
        },
        {
          "id": "w4-sarcomere-r4",
          "competencyId": "w4-sarcomere",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What is the A band, and what does it contain?",
          "a": "The dark band, as wide as the thick filaments are long, with thin filaments overlapping at each edge.",
          "tags": [
            "w4-sarcomere"
          ]
        },
        {
          "id": "w4-sarcomere-r5",
          "competencyId": "w4-sarcomere",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "The striations of skeletal muscle are alternating dark and light bands. Which bands produce them?",
          "a": "The dark A bands and the light I bands of thousands of aligned sarcomeres.",
          "tags": [
            "w4-sarcomere"
          ]
        }
      ]
    },
    {
      "id": "t-w4-muscle-roles-naming",
      "title": "Muscle roles and naming",
      "competencyId": "w4-muscle-roles-naming",
      "summary": "Muscle roles and naming (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-muscle-roles-naming-r1",
          "competencyId": "w4-muscle-roles-naming",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is the agonist (prime mover) in a movement?",
          "a": "The muscle chiefly responsible for producing the movement.",
          "tags": [
            "w4-muscle-roles-naming"
          ]
        },
        {
          "id": "w4-muscle-roles-naming-r2",
          "competencyId": "w4-muscle-roles-naming",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is the antagonist?",
          "a": "The muscle that opposes the agonist, relaxing and lengthening as the agonist contracts.",
          "tags": [
            "w4-muscle-roles-naming"
          ]
        },
        {
          "id": "w4-muscle-roles-naming-r3",
          "competencyId": "w4-muscle-roles-naming",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is a fixator?",
          "a": "A synergist that holds the origin bone steady so the agonist can act efficiently.",
          "tags": [
            "w4-muscle-roles-naming"
          ]
        },
        {
          "id": "w4-muscle-roles-naming-r4",
          "competencyId": "w4-muscle-roles-naming",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Distinguish a synergist from a fixator.",
          "a": "A synergist assists the agonist or prevents unwanted movement; a fixator specifically steadies the origin bone.",
          "tags": [
            "w4-muscle-roles-naming"
          ]
        },
        {
          "id": "w4-muscle-roles-naming-r5",
          "competencyId": "w4-muscle-roles-naming",
          "type": "recall",
          "dok": 3,
          "facet": "lecture",
          "q": "The name flexor carpi radialis encodes three facts. What are they?",
          "a": "The action (flexor), the region (carpi, the wrist), and the position (radialis, the radial side).",
          "tags": [
            "w4-muscle-roles-naming"
          ]
        }
      ]
    },
    {
      "id": "t-w4-lymph-pathway",
      "title": "Lymph and its pathway",
      "competencyId": "w4-lymph-pathway",
      "summary": "Lymph and its pathway (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-lymph-pathway-r1",
          "competencyId": "w4-lymph-pathway",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is lymph?",
          "a": "Interstitial fluid once it has entered the lymphatic vessels; a clear, watery fluid.",
          "tags": [
            "w4-lymph-pathway"
          ]
        },
        {
          "id": "w4-lymph-pathway-r2",
          "competencyId": "w4-lymph-pathway",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Trace the pathway of lymph from the tissues back to the blood.",
          "a": "Lymphatic capillaries, collecting vessels, lymph nodes, lymphatic trunks, lymphatic ducts, then the subclavian veins.",
          "tags": [
            "w4-lymph-pathway"
          ]
        },
        {
          "id": "w4-lymph-pathway-r3",
          "competencyId": "w4-lymph-pathway",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Which two ducts return lymph to the blood, and where do they empty?",
          "a": "The right lymphatic duct and the thoracic duct, at the junction of the subclavian and internal jugular veins.",
          "tags": [
            "w4-lymph-pathway"
          ]
        },
        {
          "id": "w4-lymph-pathway-r4",
          "competencyId": "w4-lymph-pathway",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Compare the drainage areas of the right lymphatic duct and the thoracic duct.",
          "a": "The right lymphatic duct drains the upper right quadrant; the thoracic duct drains the rest of the body.",
          "tags": [
            "w4-lymph-pathway"
          ]
        },
        {
          "id": "w4-lymph-pathway-r5",
          "competencyId": "w4-lymph-pathway",
          "type": "recall",
          "dok": 3,
          "facet": "lecture",
          "q": "The lymphatic system has no pump, yet lymph still moves toward the heart. How, and what keeps it one-way?",
          "a": "Nearby skeletal muscle squeeze and breathing push it along, and valves keep it flowing in one direction.",
          "tags": [
            "w4-lymph-pathway"
          ]
        }
      ]
    },
    {
      "id": "t-w4-lymphatic-organs",
      "title": "Primary and secondary lymphatic organs",
      "competencyId": "w4-lymphatic-organs",
      "summary": "Primary and secondary lymphatic organs (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-lymphatic-organs-r1",
          "competencyId": "w4-lymphatic-organs",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which lymphatic organs are primary, and what happens there?",
          "a": "Red bone marrow and the thymus; lymphocytes form and mature there.",
          "tags": [
            "w4-lymphatic-organs"
          ]
        },
        {
          "id": "w4-lymphatic-organs-r2",
          "competencyId": "w4-lymphatic-organs",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Where do T cells mature?",
          "a": "In the thymus.",
          "tags": [
            "w4-lymphatic-organs"
          ]
        },
        {
          "id": "w4-lymphatic-organs-r3",
          "competencyId": "w4-lymphatic-organs",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What does the spleen filter, and where is it?",
          "a": "It filters the blood, in the upper left abdomen behind the stomach.",
          "tags": [
            "w4-lymphatic-organs"
          ]
        },
        {
          "id": "w4-lymphatic-organs-r4",
          "competencyId": "w4-lymphatic-organs",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Compare a lymph node and the spleen by what each filters.",
          "a": "A lymph node filters lymph; the spleen filters blood.",
          "tags": [
            "w4-lymphatic-organs"
          ]
        },
        {
          "id": "w4-lymphatic-organs-r5",
          "competencyId": "w4-lymphatic-organs",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "A blow to the lower left ribs risks heavy internal bleeding. Which lymphatic organ is at risk, and why?",
          "a": "The spleen, because its soft tissue tears easily and it filters a large volume of blood.",
          "tags": [
            "w4-lymphatic-organs"
          ]
        }
      ]
    },
    {
      "id": "t-w4-blood-composition",
      "title": "Blood composition and plasma",
      "competencyId": "w4-blood-composition",
      "summary": "Blood composition and plasma (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-blood-composition-r1",
          "competencyId": "w4-blood-composition",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What are the two main components of blood, and their rough proportions?",
          "a": "Plasma (about 55 percent) and the formed elements (about 45 percent).",
          "tags": [
            "w4-blood-composition"
          ]
        },
        {
          "id": "w4-blood-composition-r2",
          "competencyId": "w4-blood-composition",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is hematocrit?",
          "a": "The percentage of blood volume made up of erythrocytes.",
          "tags": [
            "w4-blood-composition"
          ]
        },
        {
          "id": "w4-blood-composition-r3",
          "competencyId": "w4-blood-composition",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three main plasma proteins.",
          "a": "Albumin, globulins, and fibrinogen.",
          "tags": [
            "w4-blood-composition"
          ]
        },
        {
          "id": "w4-blood-composition-r4",
          "competencyId": "w4-blood-composition",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which plasma protein is most abundant, and what does it do?",
          "a": "Albumin; it maintains the osmotic pressure that holds water in the blood.",
          "tags": [
            "w4-blood-composition"
          ]
        },
        {
          "id": "w4-blood-composition-r5",
          "competencyId": "w4-blood-composition",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "After blood clots, the fluid left behind is serum, not plasma. What is missing from serum?",
          "a": "The clotting proteins, such as fibrinogen, which were used up in the clot.",
          "tags": [
            "w4-blood-composition"
          ]
        }
      ]
    },
    {
      "id": "t-w4-formed-elements",
      "title": "Formed elements and leukocytes",
      "competencyId": "w4-formed-elements",
      "summary": "Formed elements and leukocytes (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-formed-elements-r1",
          "competencyId": "w4-formed-elements",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three formed elements of blood.",
          "a": "Erythrocytes, leukocytes, and platelets.",
          "tags": [
            "w4-formed-elements"
          ]
        },
        {
          "id": "w4-formed-elements-r2",
          "competencyId": "w4-formed-elements",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the shape of an erythrocyte, and what does it lack?",
          "a": "A biconcave disc; it lacks a nucleus.",
          "tags": [
            "w4-formed-elements"
          ]
        },
        {
          "id": "w4-formed-elements-r3",
          "competencyId": "w4-formed-elements",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the five leukocytes.",
          "a": "Neutrophil, lymphocyte, monocyte, eosinophil, and basophil.",
          "tags": [
            "w4-formed-elements"
          ]
        },
        {
          "id": "w4-formed-elements-r4",
          "competencyId": "w4-formed-elements",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which formed element is most numerous, and which is least?",
          "a": "Erythrocytes are by far the most numerous; leukocytes are the least numerous.",
          "tags": [
            "w4-formed-elements"
          ]
        },
        {
          "id": "w4-formed-elements-r5",
          "competencyId": "w4-formed-elements",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "A platelet is not a whole cell. What is it, and what does it do?",
          "a": "A small cell fragment, a thrombocyte, that acts in clotting.",
          "tags": [
            "w4-formed-elements"
          ]
        }
      ]
    },
    {
      "id": "t-w4-lab-chest-anterior-arm",
      "title": "Chest and anterior arm muscles",
      "competencyId": "w4-lab-chest-anterior-arm",
      "summary": "Chest and anterior arm muscles (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-lab-chest-anterior-arm-r1",
          "competencyId": "w4-lab-chest-anterior-arm",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which large chest muscle adducts and medially rotates the arm?",
          "a": "Pectoralis major.",
          "tags": [
            "w4-lab-chest-anterior-arm"
          ]
        },
        {
          "id": "w4-lab-chest-anterior-arm-r2",
          "competencyId": "w4-lab-chest-anterior-arm",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which muscle holds the scapula against the thoracic wall, the boxer's muscle?",
          "a": "Serratus anterior.",
          "tags": [
            "w4-lab-chest-anterior-arm"
          ]
        },
        {
          "id": "w4-lab-chest-anterior-arm-r3",
          "competencyId": "w4-lab-chest-anterior-arm",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which anterior arm muscle is the prime elbow flexor and also supinates the forearm?",
          "a": "Biceps brachii.",
          "tags": [
            "w4-lab-chest-anterior-arm"
          ]
        },
        {
          "id": "w4-lab-chest-anterior-arm-r4",
          "competencyId": "w4-lab-chest-anterior-arm",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which deep anterior arm muscle lies under the biceps and is a pure elbow flexor?",
          "a": "Brachialis.",
          "tags": [
            "w4-lab-chest-anterior-arm"
          ]
        },
        {
          "id": "w4-lab-chest-anterior-arm-r5",
          "competencyId": "w4-lab-chest-anterior-arm",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Lifting a grocery bag by bending the elbow uses which two anterior arm flexors together?",
          "a": "Biceps brachii and brachialis.",
          "tags": [
            "w4-lab-chest-anterior-arm"
          ]
        }
      ]
    },
    {
      "id": "t-w4-lab-posterior-shoulder-cuff",
      "title": "Posterior shoulder and rotator cuff",
      "competencyId": "w4-lab-posterior-shoulder-cuff",
      "summary": "Posterior shoulder and rotator cuff (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-lab-posterior-shoulder-cuff-r1",
          "competencyId": "w4-lab-posterior-shoulder-cuff",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the four rotator cuff muscles (SITS).",
          "a": "Supraspinatus, infraspinatus, teres minor, subscapularis.",
          "tags": [
            "w4-lab-posterior-shoulder-cuff"
          ]
        },
        {
          "id": "w4-lab-posterior-shoulder-cuff-r2",
          "competencyId": "w4-lab-posterior-shoulder-cuff",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which large superficial back muscle extends, adducts, and medially rotates the arm, the swimmer's muscle?",
          "a": "Latissimus dorsi.",
          "tags": [
            "w4-lab-posterior-shoulder-cuff"
          ]
        },
        {
          "id": "w4-lab-posterior-shoulder-cuff-r3",
          "competencyId": "w4-lab-posterior-shoulder-cuff",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which rotator cuff muscle begins abduction of the arm?",
          "a": "Supraspinatus.",
          "tags": [
            "w4-lab-posterior-shoulder-cuff"
          ]
        },
        {
          "id": "w4-lab-posterior-shoulder-cuff-r4",
          "competencyId": "w4-lab-posterior-shoulder-cuff",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What is the shared job of the rotator cuff muscles?",
          "a": "They hold the humeral head in the glenoid cavity, stabilizing the shoulder.",
          "tags": [
            "w4-lab-posterior-shoulder-cuff"
          ]
        },
        {
          "id": "w4-lab-posterior-shoulder-cuff-r5",
          "competencyId": "w4-lab-posterior-shoulder-cuff",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "A torn cuff most often involves the muscle that initiates abduction and passes under the acromion. Which one?",
          "a": "Supraspinatus.",
          "tags": [
            "w4-lab-posterior-shoulder-cuff"
          ]
        }
      ]
    },
    {
      "id": "t-w4-myofilament-proteins",
      "title": "Myofilament and structural proteins",
      "competencyId": "w4-myofilament-proteins",
      "summary": "Myofilament and structural proteins (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-myofilament-proteins-r1",
          "competencyId": "w4-myofilament-proteins",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is the main protein of the thick filament, and where is it anchored?",
          "a": "Myosin, anchored at the M line.",
          "tags": [
            "w4-myofilament-proteins"
          ]
        },
        {
          "id": "w4-myofilament-proteins-r2",
          "competencyId": "w4-myofilament-proteins",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is the main protein of the thin filament, and where is it anchored?",
          "a": "Actin, anchored at the Z disc.",
          "tags": [
            "w4-myofilament-proteins"
          ]
        },
        {
          "id": "w4-myofilament-proteins-r3",
          "competencyId": "w4-myofilament-proteins",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "What do titin and dystrophin each do?",
          "a": "Titin anchors the thick filament and gives elastic recoil; dystrophin links the thin filaments to the sarcolemma and is faulty in muscular dystrophy.",
          "tags": [
            "w4-myofilament-proteins"
          ]
        }
      ]
    },
    {
      "id": "t-w4-muscle-tissue-types",
      "title": "Three muscle tissue types",
      "competencyId": "w4-muscle-tissue-types",
      "summary": "Three muscle tissue types (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-muscle-tissue-types-r1",
          "competencyId": "w4-muscle-tissue-types",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three muscle tissue types.",
          "a": "Skeletal, cardiac, and smooth.",
          "tags": [
            "w4-muscle-tissue-types"
          ]
        },
        {
          "id": "w4-muscle-tissue-types-r2",
          "competencyId": "w4-muscle-tissue-types",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Compare skeletal and cardiac muscle by striations, control, and nuclei.",
          "a": "Both are striated; skeletal is voluntary with many nuclei, cardiac is involuntary with one or two central nuclei and intercalated discs.",
          "tags": [
            "w4-muscle-tissue-types"
          ]
        },
        {
          "id": "w4-muscle-tissue-types-r3",
          "competencyId": "w4-muscle-tissue-types",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What joins cardiac muscle cells, and which two junctions does it contain?",
          "a": "Intercalated discs, with desmosomes for adhesion and gap junctions for electrical coupling.",
          "tags": [
            "w4-muscle-tissue-types"
          ]
        }
      ]
    },
    {
      "id": "t-w4-fascicle-patterns",
      "title": "Fascicle arrangement patterns",
      "competencyId": "w4-fascicle-patterns",
      "summary": "Fascicle arrangement patterns (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-fascicle-patterns-r1",
          "competencyId": "w4-fascicle-patterns",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Name the fascicle arrangement patterns.",
          "a": "Parallel, fusiform, circular, convergent, and pennate.",
          "tags": [
            "w4-fascicle-patterns"
          ]
        },
        {
          "id": "w4-fascicle-patterns-r2",
          "competencyId": "w4-fascicle-patterns",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Give an example muscle for a circular and for a convergent arrangement.",
          "a": "Circular: orbicularis oris; convergent: pectoralis major.",
          "tags": [
            "w4-fascicle-patterns"
          ]
        },
        {
          "id": "w4-fascicle-patterns-r3",
          "competencyId": "w4-fascicle-patterns",
          "type": "recall",
          "dok": 3,
          "facet": "lecture",
          "q": "Two muscles are the same size, one pennate and one parallel. Which produces more power, and why?",
          "a": "The pennate one, because its many short angled fascicles pack more fibers pulling on the tendon.",
          "tags": [
            "w4-fascicle-patterns"
          ]
        }
      ]
    },
    {
      "id": "t-w4-lever-systems",
      "title": "Lever systems",
      "competencyId": "w4-lever-systems",
      "summary": "Lever systems (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-lever-systems-r1",
          "competencyId": "w4-lever-systems",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Name the parts of a lever in the body.",
          "a": "The bone is the lever, the joint is the fulcrum, the muscle pull is the effort, and the body part is the load.",
          "tags": [
            "w4-lever-systems"
          ]
        },
        {
          "id": "w4-lever-systems-r2",
          "competencyId": "w4-lever-systems",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Which lever class is most common in the body, and what is its arrangement?",
          "a": "Third-class, with the effort between the fulcrum and the load.",
          "tags": [
            "w4-lever-systems"
          ]
        },
        {
          "id": "w4-lever-systems-r3",
          "competencyId": "w4-lever-systems",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Flexing the elbow with a weight in the hand is which lever class?",
          "a": "A third-class lever.",
          "tags": [
            "w4-lever-systems"
          ]
        }
      ]
    },
    {
      "id": "t-w4-lymph-vessels-node",
      "title": "Lymphatic vessels and node structure",
      "competencyId": "w4-lymph-vessels-node",
      "summary": "Lymphatic vessels and node structure (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-lymph-vessels-node-r1",
          "competencyId": "w4-lymph-vessels-node",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is a lacteal?",
          "a": "A specialized lymphatic capillary in the small intestine lining that absorbs dietary fat.",
          "tags": [
            "w4-lymph-vessels-node"
          ]
        },
        {
          "id": "w4-lymph-vessels-node-r2",
          "competencyId": "w4-lymph-vessels-node",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "How does a lymphatic capillary act as a one-way valve?",
          "a": "Its endothelial cells overlap as flaps that let fluid in but not back out.",
          "tags": [
            "w4-lymph-vessels-node"
          ]
        },
        {
          "id": "w4-lymph-vessels-node-r3",
          "competencyId": "w4-lymph-vessels-node",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Name the regions of a lymph node and where lymph enters and leaves.",
          "a": "A capsule around a cortex and medulla; lymph enters by afferent vessels and leaves by efferent vessels at the hilum.",
          "tags": [
            "w4-lymph-vessels-node"
          ]
        }
      ]
    },
    {
      "id": "t-w4-hematopoiesis",
      "title": "Hematopoiesis",
      "competencyId": "w4-hematopoiesis",
      "summary": "Hematopoiesis (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-hematopoiesis-r1",
          "competencyId": "w4-hematopoiesis",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Where does hematopoiesis occur in the adult?",
          "a": "In red bone marrow.",
          "tags": [
            "w4-hematopoiesis"
          ]
        },
        {
          "id": "w4-hematopoiesis-r2",
          "competencyId": "w4-hematopoiesis",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the stem cell that gives rise to all blood cells?",
          "a": "The hemocytoblast, the hematopoietic stem cell.",
          "tags": [
            "w4-hematopoiesis"
          ]
        },
        {
          "id": "w4-hematopoiesis-r3",
          "competencyId": "w4-hematopoiesis",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which lymphatic primary organ is also where all lymphocytes originate?",
          "a": "Red bone marrow.",
          "tags": [
            "w4-hematopoiesis"
          ]
        }
      ]
    },
    {
      "id": "t-w4-lab-forearm-compartments",
      "title": "Forearm compartments",
      "competencyId": "w4-lab-forearm-compartments",
      "summary": "Forearm compartments (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-lab-forearm-compartments-r1",
          "competencyId": "w4-lab-forearm-compartments",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the general action of the anterior forearm compartment?",
          "a": "Flexion of the wrist and fingers, with pronation.",
          "tags": [
            "w4-lab-forearm-compartments"
          ]
        },
        {
          "id": "w4-lab-forearm-compartments-r2",
          "competencyId": "w4-lab-forearm-compartments",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the general action of the posterior forearm compartment?",
          "a": "Extension of the wrist and fingers, with supination.",
          "tags": [
            "w4-lab-forearm-compartments"
          ]
        },
        {
          "id": "w4-lab-forearm-compartments-r3",
          "competencyId": "w4-lab-forearm-compartments",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "A muscle named extensor carpi ulnaris lies in which forearm compartment, and what does it do?",
          "a": "The posterior compartment; it extends the wrist toward the ulnar side.",
          "tags": [
            "w4-lab-forearm-compartments"
          ]
        }
      ]
    },
    {
      "id": "t-w4-lab-ue-arteries-veins",
      "title": "Upper-extremity arteries and veins",
      "competencyId": "w4-lab-ue-arteries-veins",
      "summary": "Upper-extremity arteries and veins (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-lab-ue-arteries-veins-r1",
          "competencyId": "w4-lab-ue-arteries-veins",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Trace the main artery of the upper limb from the axilla to the forearm.",
          "a": "Axillary artery, brachial artery, then the radial and ulnar arteries.",
          "tags": [
            "w4-lab-ue-arteries-veins"
          ]
        },
        {
          "id": "w4-lab-ue-arteries-veins-r2",
          "competencyId": "w4-lab-ue-arteries-veins",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the superficial veins of the upper limb used for blood draws.",
          "a": "The cephalic, basilic, and median cubital veins.",
          "tags": [
            "w4-lab-ue-arteries-veins"
          ]
        },
        {
          "id": "w4-lab-ue-arteries-veins-r3",
          "competencyId": "w4-lab-ue-arteries-veins",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which superficial vein at the elbow is the usual blood-draw site, and what does it connect?",
          "a": "The median cubital vein, connecting the cephalic and basilic veins.",
          "tags": [
            "w4-lab-ue-arteries-veins"
          ]
        }
      ]
    },
    {
      "id": "t-w4-lab-ue-nerves",
      "title": "Upper-extremity nerves",
      "competencyId": "w4-lab-ue-nerves",
      "summary": "Upper-extremity nerves (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-lab-ue-nerves-r1",
          "competencyId": "w4-lab-ue-nerves",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the five terminal nerves of the brachial plexus.",
          "a": "Musculocutaneous, median, ulnar, radial, and axillary nerves.",
          "tags": [
            "w4-lab-ue-nerves"
          ]
        },
        {
          "id": "w4-lab-ue-nerves-r2",
          "competencyId": "w4-lab-ue-nerves",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which nerve supplies the anterior arm flexors such as the biceps?",
          "a": "The musculocutaneous nerve.",
          "tags": [
            "w4-lab-ue-nerves"
          ]
        },
        {
          "id": "w4-lab-ue-nerves-r3",
          "competencyId": "w4-lab-ue-nerves",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which nerve runs behind the medial epicondyle and serves the little-finger side of the hand?",
          "a": "The ulnar nerve.",
          "tags": [
            "w4-lab-ue-nerves"
          ]
        }
      ]
    },
    {
      "id": "t-w4-lymphatic-disorders",
      "title": "Lymphatic disorders",
      "competencyId": "w4-lymphatic-disorders",
      "summary": "Lymphatic disorders (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-lymphatic-disorders-r1",
          "competencyId": "w4-lymphatic-disorders",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is lymphedema?",
          "a": "Long-term tissue swelling from blocked or missing lymphatic vessels, sometimes after lymph node removal.",
          "tags": [
            "w4-lymphatic-disorders"
          ]
        }
      ]
    },
    {
      "id": "t-w4-blood-disorders",
      "title": "Blood disorders",
      "competencyId": "w4-blood-disorders",
      "summary": "Blood disorders (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w4-blood-disorders-r1",
          "competencyId": "w4-blood-disorders",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is anemia?",
          "a": "A condition of too few erythrocytes or too little hemoglobin, reducing the blood's oxygen-carrying capacity.",
          "tags": [
            "w4-blood-disorders"
          ]
        }
      ]
    }
  ]
};
  var POOL = {
  "mcq": [
    {
      "id": "w4-ct-coverings-q1",
      "competencyId": "w4-ct-coverings",
      "type": "mcq",
      "dok": 1,
      "q": "Which connective tissue sheath wraps the entire muscle?",
      "options": [
        "Endomysium",
        "Perimysium",
        "Epimysium",
        "Tendon"
      ],
      "correctIndex": 2,
      "explanation": "Epimysium wraps the whole muscle; perimysium wraps each fascicle and endomysium each fiber. The tendon is the merged continuation that attaches to bone.",
      "tags": [
        "w4-ct-coverings"
      ]
    },
    {
      "id": "w4-muscle-organization-q1",
      "competencyId": "w4-muscle-organization",
      "type": "mcq",
      "dok": 1,
      "q": "Which order runs from largest to smallest?",
      "options": [
        "Muscle, fascicle, fiber, myofibril, myofilament",
        "Fiber, muscle, fascicle, myofibril, myofilament",
        "Muscle, fiber, fascicle, myofilament, myofibril",
        "Fascicle, muscle, fiber, myofibril, myofilament"
      ],
      "correctIndex": 0,
      "explanation": "The nesting is muscle, fascicle, fiber, myofibril, myofilament. A fiber is a single cell; a fascicle is a bundle of fibers within the whole muscle.",
      "tags": [
        "w4-muscle-organization"
      ]
    },
    {
      "id": "w4-sarcomere-q1",
      "competencyId": "w4-sarcomere",
      "type": "mcq",
      "dok": 2,
      "q": "Which region of the sarcomere contains only thin filaments?",
      "options": [
        "A band",
        "H zone",
        "I band",
        "M line"
      ],
      "correctIndex": 2,
      "explanation": "The I band holds thin filaments only, the H zone thick only, the A band both, and the M line anchors thick filaments.",
      "tags": [
        "w4-sarcomere"
      ]
    },
    {
      "id": "w4-formed-elements-q1",
      "competencyId": "w4-formed-elements",
      "type": "mcq",
      "dok": 1,
      "q": "Which leukocyte is most numerous and the first responder to infection?",
      "options": [
        "Neutrophil",
        "Lymphocyte",
        "Basophil",
        "Monocyte"
      ],
      "correctIndex": 0,
      "explanation": "Neutrophils are most numerous and first to engulf bacteria. Lymphocytes are next, basophils least, and monocytes become macrophages.",
      "tags": [
        "w4-formed-elements"
      ]
    },
    {
      "id": "w4-lymph-pathway-q1",
      "competencyId": "w4-lymph-pathway",
      "type": "mcq",
      "dok": 2,
      "q": "Where does lymph re-enter the bloodstream?",
      "options": [
        "At the spleen",
        "At the subclavian veins",
        "At the aorta",
        "At the thymus"
      ],
      "correctIndex": 1,
      "explanation": "Lymph returns where the ducts empty at the subclavian and internal jugular vein junction. The spleen and thymus are lymphatic organs, not the return point.",
      "tags": [
        "w4-lymph-pathway"
      ]
    },
    {
      "id": "w4-lab-posterior-shoulder-cuff-q1",
      "competencyId": "w4-lab-posterior-shoulder-cuff",
      "type": "mcq",
      "dok": 1,
      "q": "Which rotator cuff muscle begins abduction of the arm?",
      "options": [
        "Subscapularis",
        "Supraspinatus",
        "Teres minor",
        "Infraspinatus"
      ],
      "correctIndex": 1,
      "explanation": "Supraspinatus initiates abduction and is the most commonly torn cuff muscle. The others mainly rotate the humerus.",
      "tags": [
        "w4-lab-posterior-shoulder-cuff"
      ]
    },
    {
      "id": "w4-muscle-tissue-types-q1",
      "competencyId": "w4-muscle-tissue-types",
      "type": "mcq",
      "dok": 2,
      "q": "Which feature is unique to cardiac muscle?",
      "options": [
        "Striations",
        "Voluntary control",
        "Intercalated discs",
        "A single nucleus"
      ],
      "correctIndex": 2,
      "explanation": "Intercalated discs join cardiac cells. Striations are shared with skeletal muscle, smooth muscle also has one nucleus, and cardiac muscle is involuntary.",
      "tags": [
        "w4-muscle-tissue-types"
      ]
    },
    {
      "id": "w4-lab-ue-nerves-q1",
      "competencyId": "w4-lab-ue-nerves",
      "type": "mcq",
      "dok": 2,
      "q": "Which nerve, injured behind the medial epicondyle, causes little-finger numbness?",
      "options": [
        "Radial nerve",
        "Median nerve",
        "Ulnar nerve",
        "Musculocutaneous nerve"
      ],
      "correctIndex": 2,
      "explanation": "The ulnar nerve passes behind the medial epicondyle, the funny bone, and serves the little-finger side. The others take different paths.",
      "tags": [
        "w4-lab-ue-nerves"
      ]
    }
  ],
  "stretch": [
    {
      "id": "w4-lever-systems-s1",
      "competencyId": "w4-lever-systems",
      "type": "stretch",
      "dok": 3,
      "q": "You do a biceps curl, then rise onto your tiptoes. Name the lever class of each and one feature that distinguishes them.",
      "a": "The biceps curl is a third-class lever (effort between fulcrum and load); the tiptoe rise is a second-class lever (load between fulcrum and effort).",
      "tags": [
        "w4-lever-systems",
        "w4-muscle-roles-naming"
      ]
    }
  ]
};
  w.BIO004_COURSE_CONTENT = w.BIO004_COURSE_CONTENT || { courseLabel: "BIO 004 Human Anatomy", modules: [] };
  if (!w.BIO004_COURSE_CONTENT.modules) w.BIO004_COURSE_CONTENT.modules = [];
  w.BIO004_COURSE_CONTENT.modules.push(MODULE);
  w.BIO004_PRACTICE_POOL = w.BIO004_PRACTICE_POOL || { mcq: [], stretch: [] };
  Array.prototype.push.apply(w.BIO004_PRACTICE_POOL.mcq, POOL.mcq);
  Array.prototype.push.apply(w.BIO004_PRACTICE_POOL.stretch, POOL.stretch);
})(typeof window !== "undefined" ? window : this);
