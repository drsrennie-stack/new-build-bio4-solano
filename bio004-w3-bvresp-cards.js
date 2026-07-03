/* bio004-w3-bvresp-cards.js  —  PROOF batch (Week 3 blood vessels + respiratory)
   Text recall cards, tagged to competency IDs (card-maker-brief.md).
   Drop-in: appends a module to window.BIO004_COURSE_CONTENT if present, same
   pattern as heart-cards.js. Does NOT touch existing multiple-choice cards.
   Practice-test MCQ and stretch cards are exposed separately for the games. */
(function (w) {
  "use strict";
  var MODULE = {
  "id": "m-w3-bvresp",
  "week": 3,
  "title": "Week 3: Blood Vessels & Respiratory (recall)",
  "topics": [
    {
      "id": "t-bvn-great-vessels",
      "title": "Great vessels",
      "competencyId": "bvn-great-vessels",
      "summary": "Great vessels (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "bvn-great-vessels-r1",
          "competencyId": "bvn-great-vessels",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the aorta?",
          "a": "The largest artery, carrying oxygen-rich blood from the left ventricle to the body.",
          "tags": [
            "bvn-great-vessels"
          ]
        },
        {
          "id": "bvn-great-vessels-r2",
          "competencyId": "bvn-great-vessels",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What does the pulmonary trunk carry, and to where?",
          "a": "Oxygen-poor blood from the right ventricle to the lungs, through the right and left pulmonary arteries.",
          "tags": [
            "bvn-great-vessels"
          ]
        },
        {
          "id": "bvn-great-vessels-r3",
          "competencyId": "bvn-great-vessels",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "How many pulmonary veins are there, and what do they return, and to where?",
          "a": "Four; they return oxygen-rich blood from the lungs to the left atrium.",
          "tags": [
            "bvn-great-vessels"
          ]
        },
        {
          "id": "bvn-great-vessels-r4",
          "competencyId": "bvn-great-vessels",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "The pulmonary arteries carry oxygen-poor blood and the pulmonary veins carry oxygen-rich blood. Why is this the reverse of the usual rule?",
          "a": "Vessel names come from the direction of flow, not oxygen content, and the pulmonary circuit reverses the usual oxygen pattern.",
          "tags": [
            "bvn-great-vessels"
          ]
        },
        {
          "id": "bvn-great-vessels-r5",
          "competencyId": "bvn-great-vessels",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Trace, in order, the great vessels a drop of blood passes as it goes from the right ventricle to the left atrium.",
          "a": "Pulmonary trunk, pulmonary arteries, the lungs, pulmonary veins, then the left atrium.",
          "tags": [
            "bvn-great-vessels"
          ]
        }
      ]
    },
    {
      "id": "t-bvn-vessel-tunics",
      "title": "Vessel wall tunics",
      "competencyId": "bvn-vessel-tunics",
      "summary": "Vessel wall tunics (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "bvn-vessel-tunics-r1",
          "competencyId": "bvn-vessel-tunics",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three tunics of a blood vessel wall, from inner to outer.",
          "a": "Tunica intima, tunica media, tunica externa.",
          "tags": [
            "bvn-vessel-tunics"
          ]
        },
        {
          "id": "bvn-vessel-tunics-r2",
          "competencyId": "bvn-vessel-tunics",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What tissue forms the tunica intima?",
          "a": "A lining of simple squamous endothelium on a basement membrane.",
          "tags": [
            "bvn-vessel-tunics"
          ]
        },
        {
          "id": "bvn-vessel-tunics-r3",
          "competencyId": "bvn-vessel-tunics",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What does the tunica media contain, and what does it control?",
          "a": "Smooth muscle and elastic fibers; its smooth muscle sets the vessel's diameter.",
          "tags": [
            "bvn-vessel-tunics"
          ]
        },
        {
          "id": "bvn-vessel-tunics-r4",
          "competencyId": "bvn-vessel-tunics",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "A capillary wall is made of only one tunic. Which one, and why only that layer?",
          "a": "The tunica intima only, because exchange needs the thinnest possible wall.",
          "tags": [
            "bvn-vessel-tunics"
          ]
        },
        {
          "id": "bvn-vessel-tunics-r5",
          "competencyId": "bvn-vessel-tunics",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "A vessel sample shows a thick middle layer packed with smooth muscle and elastic fibers. Is it more likely an artery or a vein, and why?",
          "a": "An artery, because arteries carry high-pressure blood and have a thick tunica media.",
          "tags": [
            "bvn-vessel-tunics"
          ]
        }
      ]
    },
    {
      "id": "t-bvn-vessel-types",
      "title": "The five vessel types",
      "competencyId": "bvn-vessel-types",
      "summary": "The five vessel types (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "bvn-vessel-types-r1",
          "competencyId": "bvn-vessel-types",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "List the five vessel types in the order blood passes through them, artery to vein.",
          "a": "Arteries, arterioles, capillaries, venules, veins.",
          "tags": [
            "bvn-vessel-types"
          ]
        },
        {
          "id": "bvn-vessel-types-r2",
          "competencyId": "bvn-vessel-types",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which vessels carry blood away from the heart, and which carry it toward the heart?",
          "a": "Arteries carry blood away from the heart; veins carry blood toward the heart.",
          "tags": [
            "bvn-vessel-types"
          ]
        },
        {
          "id": "bvn-vessel-types-r3",
          "competencyId": "bvn-vessel-types",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the job of a capillary?",
          "a": "It is the exchange vessel, where gases and nutrients cross between blood and tissue.",
          "tags": [
            "bvn-vessel-types"
          ]
        },
        {
          "id": "bvn-vessel-types-r4",
          "competencyId": "bvn-vessel-types",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Arterioles have walls of mostly smooth muscle. What does that let them do?",
          "a": "Adjust how much blood enters a capillary bed.",
          "tags": [
            "bvn-vessel-types"
          ]
        },
        {
          "id": "bvn-vessel-types-r5",
          "competencyId": "bvn-vessel-types",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Blood is drawn from a vein, not an artery. Give two structural reasons a vein is the safer choice.",
          "a": "A vein lies closer to the surface with a thinner wall, and it runs at low pressure, so it is easy to enter and slow to bleed.",
          "tags": [
            "bvn-vessel-types"
          ]
        }
      ]
    },
    {
      "id": "t-resp-zones",
      "title": "Respiratory tracts and zones",
      "competencyId": "resp-zones",
      "summary": "Respiratory tracts and zones (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "resp-zones-r1",
          "competencyId": "resp-zones",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What does the upper respiratory tract include?",
          "a": "The nose, nasal cavity, paranasal sinuses, and pharynx.",
          "tags": [
            "resp-zones"
          ]
        },
        {
          "id": "resp-zones-r2",
          "competencyId": "resp-zones",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What does the lower respiratory tract include?",
          "a": "The larynx, trachea, bronchi, and lungs.",
          "tags": [
            "resp-zones"
          ]
        },
        {
          "id": "resp-zones-r3",
          "competencyId": "resp-zones",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is the conducting zone?",
          "a": "The passages that only carry air, from the nose to the terminal bronchioles.",
          "tags": [
            "resp-zones"
          ]
        },
        {
          "id": "resp-zones-r4",
          "competencyId": "resp-zones",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "What is the respiratory zone, and where does it begin?",
          "a": "The structures where gas exchange happens, the respiratory bronchioles, alveolar ducts, and alveoli; it begins just past the terminal bronchioles.",
          "tags": [
            "resp-zones"
          ]
        },
        {
          "id": "resp-zones-r5",
          "competencyId": "resp-zones",
          "type": "recall",
          "dok": 3,
          "facet": "lecture",
          "q": "A structure carries air but has no alveoli in its walls. Is it in the conducting or respiratory zone?",
          "a": "The conducting zone, which only carries air and has no alveoli.",
          "tags": [
            "resp-zones"
          ]
        }
      ]
    },
    {
      "id": "t-resp-larynx",
      "title": "The larynx",
      "competencyId": "resp-larynx",
      "summary": "The larynx (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "resp-larynx-r1",
          "competencyId": "resp-larynx",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the larynx?",
          "a": "The voice box, the airway between the pharynx and the trachea.",
          "tags": [
            "resp-larynx"
          ]
        },
        {
          "id": "resp-larynx-r2",
          "competencyId": "resp-larynx",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which laryngeal cartilage forms the Adam's apple?",
          "a": "The thyroid cartilage.",
          "tags": [
            "resp-larynx"
          ]
        },
        {
          "id": "resp-larynx-r3",
          "competencyId": "resp-larynx",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the epiglottis, and what does it do?",
          "a": "The flexible flap that folds down over the laryngeal opening during swallowing to keep food and drink out of the airway.",
          "tags": [
            "resp-larynx"
          ]
        },
        {
          "id": "resp-larynx-r4",
          "competencyId": "resp-larynx",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What is the glottis?",
          "a": "The opening between the vocal cords.",
          "tags": [
            "resp-larynx"
          ]
        },
        {
          "id": "resp-larynx-r5",
          "competencyId": "resp-larynx",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Food 'went down the wrong pipe.' Which laryngeal structure normally prevents this, and how?",
          "a": "The epiglottis, which folds down over the laryngeal opening during swallowing.",
          "tags": [
            "resp-larynx"
          ]
        }
      ]
    },
    {
      "id": "t-resp-tree",
      "title": "Trachea and bronchial tree",
      "competencyId": "resp-tree",
      "summary": "Trachea and bronchial tree (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "resp-tree-r1",
          "competencyId": "resp-tree",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What holds the trachea permanently open?",
          "a": "C-shaped rings of cartilage.",
          "tags": [
            "resp-tree"
          ]
        },
        {
          "id": "resp-tree-r2",
          "competencyId": "resp-tree",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the carina?",
          "a": "The internal ridge where the trachea forks into the two main bronchi.",
          "tags": [
            "resp-tree"
          ]
        },
        {
          "id": "resp-tree-r3",
          "competencyId": "resp-tree",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Order the bronchial tree from the trachea to the terminal bronchioles.",
          "a": "Trachea, main (primary) bronchi, lobar (secondary) bronchi, segmental (tertiary) bronchi, bronchioles, terminal bronchioles.",
          "tags": [
            "resp-tree"
          ]
        },
        {
          "id": "resp-tree-r4",
          "competencyId": "resp-tree",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "How do bronchioles differ from bronchi in their walls?",
          "a": "Bronchioles have smooth muscle walls and no cartilage.",
          "tags": [
            "resp-tree"
          ]
        },
        {
          "id": "resp-tree-r5",
          "competencyId": "resp-tree",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "A tumor blocks a tertiary bronchus. Which unit of the lung loses its air supply?",
          "a": "One bronchopulmonary segment, since a segmental (tertiary) bronchus supplies one segment.",
          "tags": [
            "resp-tree"
          ]
        }
      ]
    },
    {
      "id": "t-resp-lungs-pleura",
      "title": "Lungs and pleurae",
      "competencyId": "resp-lungs-pleura",
      "summary": "Lungs and pleurae (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "resp-lungs-pleura-r1",
          "competencyId": "resp-lungs-pleura",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "How many lobes does the right lung have, and the left?",
          "a": "The right lung has three lobes; the left has two.",
          "tags": [
            "resp-lungs-pleura"
          ]
        },
        {
          "id": "resp-lungs-pleura-r2",
          "competencyId": "resp-lungs-pleura",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the cardiac notch, and which lung has it?",
          "a": "An indentation in the left lung that makes room for the heart.",
          "tags": [
            "resp-lungs-pleura"
          ]
        },
        {
          "id": "resp-lungs-pleura-r3",
          "competencyId": "resp-lungs-pleura",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the hilum of the lung?",
          "a": "The indentation on the medial surface where the bronchus and vessels enter and leave.",
          "tags": [
            "resp-lungs-pleura"
          ]
        },
        {
          "id": "resp-lungs-pleura-r4",
          "competencyId": "resp-lungs-pleura",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Compare the parietal and visceral pleura.",
          "a": "The parietal pleura lines the thoracic wall; the visceral pleura covers the outer surface of the lung.",
          "tags": [
            "resp-lungs-pleura"
          ]
        },
        {
          "id": "resp-lungs-pleura-r5",
          "competencyId": "resp-lungs-pleura",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Why does the left lung have two lobes and a cardiac notch while the right has three?",
          "a": "The left lung gives up room for the heart, which sits to the left of the midline.",
          "tags": [
            "resp-lungs-pleura"
          ]
        }
      ]
    },
    {
      "id": "t-bvn-artery-cap-vein-kinds",
      "title": "Kinds of artery, capillary, vein",
      "competencyId": "bvn-artery-cap-vein-kinds",
      "summary": "Kinds of artery, capillary, vein (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "bvn-artery-cap-vein-kinds-r1",
          "competencyId": "bvn-artery-cap-vein-kinds",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three kinds of artery by size.",
          "a": "Elastic arteries, muscular arteries, and arterioles.",
          "tags": [
            "bvn-artery-cap-vein-kinds"
          ]
        },
        {
          "id": "bvn-artery-cap-vein-kinds-r2",
          "competencyId": "bvn-artery-cap-vein-kinds",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three kinds of capillary.",
          "a": "Continuous, fenestrated, and sinusoid capillaries.",
          "tags": [
            "bvn-artery-cap-vein-kinds"
          ]
        },
        {
          "id": "bvn-artery-cap-vein-kinds-r3",
          "competencyId": "bvn-artery-cap-vein-kinds",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which capillary type is the leakiest, and where is it found?",
          "a": "The sinusoid, a wide vessel with large gaps between cells, found in the liver, spleen, and bone marrow where whole cells must cross.",
          "tags": [
            "bvn-artery-cap-vein-kinds"
          ]
        }
      ]
    },
    {
      "id": "t-bvn-circulatory-routes",
      "title": "Circulatory routes",
      "competencyId": "bvn-circulatory-routes",
      "summary": "Circulatory routes (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "bvn-circulatory-routes-r1",
          "competencyId": "bvn-circulatory-routes",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is a portal system?",
          "a": "An arrangement where blood passes through two capillary beds in series before returning to the heart, as in the hepatic portal system.",
          "tags": [
            "bvn-circulatory-routes"
          ]
        },
        {
          "id": "bvn-circulatory-routes-r2",
          "competencyId": "bvn-circulatory-routes",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is an anastomosis?",
          "a": "A place where two vessels join, giving blood an alternate route if one path is blocked.",
          "tags": [
            "bvn-circulatory-routes"
          ]
        },
        {
          "id": "bvn-circulatory-routes-r3",
          "competencyId": "bvn-circulatory-routes",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Compare the pulmonary and systemic circuits by what each carries blood to.",
          "a": "The pulmonary circuit carries blood to the lungs; the systemic circuit carries blood to the body.",
          "tags": [
            "bvn-circulatory-routes"
          ]
        }
      ]
    },
    {
      "id": "t-bvn-vessel-disorders",
      "title": "Vessel disorders",
      "competencyId": "bvn-vessel-disorders",
      "summary": "Vessel disorders (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "bvn-vessel-disorders-r1",
          "competencyId": "bvn-vessel-disorders",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is atherosclerosis?",
          "a": "A disease in which fatty plaques (atheromas) build up within the walls of arteries, narrowing the lumen.",
          "tags": [
            "bvn-vessel-disorders"
          ]
        },
        {
          "id": "bvn-vessel-disorders-r2",
          "competencyId": "bvn-vessel-disorders",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "How do arterial disorders differ from venous disorders in what tends to go wrong?",
          "a": "Arterial disorders tend to narrow the channel or weaken the wall; venous disorders tend to involve failed valves and pooled or clotted blood.",
          "tags": [
            "bvn-vessel-disorders"
          ]
        },
        {
          "id": "bvn-vessel-disorders-r3",
          "competencyId": "bvn-vessel-disorders",
          "type": "recall",
          "dok": 3,
          "facet": "lecture",
          "q": "Explain anatomically why a deep vein thrombosis in the leg can become a pulmonary embolism.",
          "a": "If the clot breaks free it travels up the venae cavae, through the right heart, and lodges in a lung artery, following the normal venous return.",
          "tags": [
            "bvn-vessel-disorders"
          ]
        }
      ]
    },
    {
      "id": "t-bvn-fetal-remnants",
      "title": "Fetal shunts and remnants",
      "competencyId": "bvn-fetal-remnants",
      "summary": "Fetal shunts and remnants (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "bvn-fetal-remnants-r1",
          "competencyId": "bvn-fetal-remnants",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Name the three fetal shunts.",
          "a": "The ductus venosus, the foramen ovale, and the ductus arteriosus.",
          "tags": [
            "bvn-fetal-remnants"
          ]
        },
        {
          "id": "bvn-fetal-remnants-r2",
          "competencyId": "bvn-fetal-remnants",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Match each fetal shunt to what it bypasses.",
          "a": "The ductus venosus bypasses the liver; the foramen ovale and ductus arteriosus bypass the lungs.",
          "tags": [
            "bvn-fetal-remnants"
          ]
        },
        {
          "id": "bvn-fetal-remnants-r3",
          "competencyId": "bvn-fetal-remnants",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "What adult remnant does the ductus arteriosus become, and the foramen ovale?",
          "a": "The ductus arteriosus becomes the ligamentum arteriosum; the foramen ovale becomes the fossa ovalis.",
          "tags": [
            "bvn-fetal-remnants"
          ]
        }
      ]
    },
    {
      "id": "t-resp-upper-tract",
      "title": "Upper respiratory tract",
      "competencyId": "resp-upper-tract",
      "summary": "Upper respiratory tract (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "resp-upper-tract-r1",
          "competencyId": "resp-upper-tract",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three regions of the pharynx from top to bottom.",
          "a": "Nasopharynx, oropharynx, laryngopharynx.",
          "tags": [
            "resp-upper-tract"
          ]
        },
        {
          "id": "resp-upper-tract-r2",
          "competencyId": "resp-upper-tract",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which part of the pharynx is air-only, and which are shared by air and food?",
          "a": "The nasopharynx is air-only; the oropharynx and laryngopharynx are shared by air and food.",
          "tags": [
            "resp-upper-tract"
          ]
        },
        {
          "id": "resp-upper-tract-r3",
          "competencyId": "resp-upper-tract",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What do the nasal conchae and meatuses do to inhaled air?",
          "a": "They swirl the air over the warm, moist lining to warm, moisten, and filter it.",
          "tags": [
            "resp-upper-tract"
          ]
        }
      ]
    },
    {
      "id": "t-resp-histo",
      "title": "Alveolar structure",
      "competencyId": "resp-histo",
      "summary": "Alveolar structure (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "resp-histo-r1",
          "competencyId": "resp-histo",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What are alveoli?",
          "a": "The tiny air sacs that are the site of gas exchange.",
          "tags": [
            "resp-histo"
          ]
        },
        {
          "id": "resp-histo-r2",
          "competencyId": "resp-histo",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Compare type I and type II alveolar cells.",
          "a": "Type I cells are thin and flat and form most of the wall where gases cross; type II cells secrete surfactant that keeps the alveoli from collapsing.",
          "tags": [
            "resp-histo"
          ]
        },
        {
          "id": "resp-histo-r3",
          "competencyId": "resp-histo",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What is the respiratory membrane?",
          "a": "The thin barrier between the alveolar air and the blood, across which gases cross.",
          "tags": [
            "resp-histo"
          ]
        }
      ]
    },
    {
      "id": "t-resp-thoracic-diaphragm",
      "title": "Lung surfaces and pleura",
      "competencyId": "resp-thoracic-diaphragm",
      "summary": "Lung surfaces and pleura (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "resp-thoracic-diaphragm-r1",
          "competencyId": "resp-thoracic-diaphragm",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the apex of a lung, and where does it sit?",
          "a": "The narrow superior tip, rising just above the clavicle.",
          "tags": [
            "resp-thoracic-diaphragm"
          ]
        },
        {
          "id": "resp-thoracic-diaphragm-r2",
          "competencyId": "resp-thoracic-diaphragm",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the base of a lung, and what does it rest on?",
          "a": "The broad inferior surface, resting on the diaphragm.",
          "tags": [
            "resp-thoracic-diaphragm"
          ]
        },
        {
          "id": "resp-thoracic-diaphragm-r3",
          "competencyId": "resp-thoracic-diaphragm",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What does the pleural cavity contain, and what does that allow?",
          "a": "A thin film of fluid that lets the lung glide as it expands.",
          "tags": [
            "resp-thoracic-diaphragm"
          ]
        }
      ]
    },
    {
      "id": "t-resp-disorders",
      "title": "Respiratory disorders",
      "competencyId": "resp-disorders",
      "summary": "Respiratory disorders (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "resp-disorders-r1",
          "competencyId": "resp-disorders",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Which respiratory disorder is an inflammation and narrowing of the bronchioles?",
          "a": "Asthma.",
          "tags": [
            "resp-disorders"
          ]
        }
      ]
    }
  ]
};
  var POOL = {
  "mcq": [
    {
      "id": "bvn-vessel-tunics-q1",
      "competencyId": "bvn-vessel-tunics",
      "type": "mcq",
      "dok": 1,
      "q": "Which tunic is the only layer a capillary has?",
      "options": [
        "Tunica intima",
        "Tunica media",
        "Tunica externa",
        "Tunica adventitia"
      ],
      "correctIndex": 0,
      "explanation": "Capillaries have only the tunica intima, the thin endothelial layer, because exchange needs the thinnest wall. The media and externa are present only in arteries and veins.",
      "tags": [
        "bvn-vessel-tunics"
      ]
    },
    {
      "id": "bvn-vessel-types-q1",
      "competencyId": "bvn-vessel-types",
      "type": "mcq",
      "dok": 2,
      "q": "Which vessel adjusts how much blood enters a capillary bed?",
      "options": [
        "An elastic artery",
        "An arteriole",
        "A venule",
        "A large vein"
      ],
      "correctIndex": 1,
      "explanation": "Arterioles have walls of mostly smooth muscle and act as gatekeepers to the capillary beds. Elastic arteries cushion pressure, and venules and veins return blood.",
      "tags": [
        "bvn-vessel-types"
      ]
    },
    {
      "id": "bvn-great-vessels-q1",
      "competencyId": "bvn-great-vessels",
      "type": "mcq",
      "dok": 1,
      "q": "The pulmonary veins carry blood to which heart chamber?",
      "options": [
        "Right atrium",
        "Right ventricle",
        "Left atrium",
        "Left ventricle"
      ],
      "correctIndex": 2,
      "explanation": "The four pulmonary veins return oxygen-rich blood from the lungs to the left atrium. The venae cavae feed the right atrium, and the ventricles are pumping chambers.",
      "tags": [
        "bvn-great-vessels"
      ]
    },
    {
      "id": "bvn-vessel-disorders-q1",
      "competencyId": "bvn-vessel-disorders",
      "type": "mcq",
      "dok": 2,
      "q": "A clot from a deep leg vein lodges in a lung artery. What is this called?",
      "options": [
        "Aneurysm",
        "Pulmonary embolism",
        "Atherosclerosis",
        "Varicose vein"
      ],
      "correctIndex": 1,
      "explanation": "A pulmonary embolism is a clot, often from a deep vein thrombosis, that lodges in a lung artery. An aneurysm is a wall bulge, atherosclerosis is plaque, and varicose veins are failed venous valves.",
      "tags": [
        "bvn-vessel-disorders"
      ]
    },
    {
      "id": "resp-zones-q1",
      "competencyId": "resp-zones",
      "type": "mcq",
      "dok": 2,
      "q": "Which structure is the last part of the conducting zone, just before gas exchange?",
      "options": [
        "Terminal bronchiole",
        "Respiratory bronchiole",
        "Alveolar duct",
        "Alveolus"
      ],
      "correctIndex": 0,
      "explanation": "The terminal bronchiole is the last conducting airway. The respiratory bronchiole, alveolar duct, and alveolus belong to the respiratory zone where gases cross.",
      "tags": [
        "resp-zones"
      ]
    },
    {
      "id": "resp-larynx-q1",
      "competencyId": "resp-larynx",
      "type": "mcq",
      "dok": 1,
      "q": "Which structure folds over the airway during swallowing?",
      "options": [
        "Epiglottis",
        "Thyroid cartilage",
        "Cricoid cartilage",
        "Arytenoid cartilage"
      ],
      "correctIndex": 0,
      "explanation": "The epiglottis folds down to keep food out of the airway. The thyroid and cricoid cartilages form the laryngeal framework, and the arytenoids move the vocal cords.",
      "tags": [
        "resp-larynx"
      ]
    },
    {
      "id": "resp-tree-q1",
      "competencyId": "resp-tree",
      "type": "mcq",
      "dok": 1,
      "q": "What keeps the trachea permanently open?",
      "options": [
        "Smooth muscle alone",
        "C-shaped cartilage rings",
        "Bony rings",
        "Elastic ligaments"
      ],
      "correctIndex": 1,
      "explanation": "C-shaped cartilage rings hold the trachea open while letting the esophagus expand behind it. Bronchioles, by contrast, rely on smooth muscle and have no cartilage.",
      "tags": [
        "resp-tree"
      ]
    },
    {
      "id": "resp-histo-q1",
      "competencyId": "resp-histo",
      "type": "mcq",
      "dok": 2,
      "q": "Which alveolar cell secretes surfactant?",
      "options": [
        "Type I alveolar cell",
        "Alveolar macrophage",
        "Type II alveolar cell",
        "Endothelial cell"
      ],
      "correctIndex": 2,
      "explanation": "Type II alveolar cells secrete surfactant, which lowers surface tension so alveoli do not collapse. Type I cells form the thin gas-exchange wall, and macrophages clear debris.",
      "tags": [
        "resp-histo"
      ]
    }
  ],
  "stretch": [
    {
      "id": "bvn-vessel-disorders-s1",
      "competencyId": "bvn-vessel-disorders",
      "type": "stretch",
      "dok": 3,
      "q": "One patient has crushing chest pain, another has calf pain when walking, a third has sudden one-sided weakness. Name the single artery-wall change behind all three, and the disease it causes in each vessel.",
      "a": "Atherosclerosis. In a coronary artery it causes a heart attack, in a leg artery peripheral artery disease, and in a brain artery a stroke.",
      "tags": [
        "bvn-vessel-disorders",
        "cv-coronary"
      ]
    }
  ]
};
  w.BIO004_COURSE_CONTENT = w.BIO004_COURSE_CONTENT || { courseLabel: "BIO 004 Human Anatomy", modules: [] };
  if (!w.BIO004_COURSE_CONTENT.modules) w.BIO004_COURSE_CONTENT.modules = [];
  // additive only: never edits existing modules/cards
  w.BIO004_COURSE_CONTENT.modules.push(MODULE);
  w.BIO004_PRACTICE_POOL = w.BIO004_PRACTICE_POOL || { mcq: [], stretch: [] };
  Array.prototype.push.apply(w.BIO004_PRACTICE_POOL.mcq, POOL.mcq);
  Array.prototype.push.apply(w.BIO004_PRACTICE_POOL.stretch, POOL.stretch);
})(typeof window !== "undefined" ? window : this);
