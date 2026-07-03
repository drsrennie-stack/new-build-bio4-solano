/* bio004-heart-cards.js  —  BIO 004 competency-tagged recall + practice pool (Week 3: Heart (cardiovascular))
   card-maker-brief.md. Additive: appends to window.BIO004_COURSE_CONTENT and
   window.BIO004_PRACTICE_POOL; never edits existing multiple-choice cards. */
(function (w) {
  "use strict";
  var MODULE = {
  "id": "m-w3",
  "week": 3,
  "title": "Week 3: Heart (cardiovascular)",
  "topics": [
    {
      "id": "t-cv-surfaces",
      "title": "Heart wall, pericardium, internal features",
      "competencyId": "cv-surfaces",
      "summary": "Heart wall, pericardium, internal features (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "cv-surfaces-r1",
          "competencyId": "cv-surfaces",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three layers of the heart wall, from outer to inner.",
          "a": "Epicardium, myocardium, endocardium.",
          "tags": [
            "cv-surfaces"
          ]
        },
        {
          "id": "cv-surfaces-r2",
          "competencyId": "cv-surfaces",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the myocardium, and what is its job?",
          "a": "The thick middle layer of cardiac muscle, the bulk of the heart, the layer that contracts.",
          "tags": [
            "cv-surfaces"
          ]
        },
        {
          "id": "cv-surfaces-r3",
          "competencyId": "cv-surfaces",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the pericardium?",
          "a": "The double-walled sac that encloses the heart.",
          "tags": [
            "cv-surfaces"
          ]
        },
        {
          "id": "cv-surfaces-r4",
          "competencyId": "cv-surfaces",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Compare the fibrous and serous pericardium.",
          "a": "The fibrous pericardium is the tough outer layer that anchors the heart; the serous pericardium is the inner double membrane with a parietal and a visceral layer.",
          "tags": [
            "cv-surfaces"
          ]
        },
        {
          "id": "cv-surfaces-r5",
          "competencyId": "cv-surfaces",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Fluid builds up in the pericardial cavity and squeezes the heart. What is this, and why does it impair filling?",
          "a": "Cardiac tamponade; the fluid compresses the heart from outside and limits how much it can fill.",
          "tags": [
            "cv-surfaces"
          ]
        }
      ]
    },
    {
      "id": "t-cv-chambers",
      "title": "Heart chambers and septa",
      "competencyId": "cv-chambers",
      "summary": "Heart chambers and septa (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "cv-chambers-r1",
          "competencyId": "cv-chambers",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the four chambers of the heart.",
          "a": "The right and left atria and the right and left ventricles.",
          "tags": [
            "cv-chambers"
          ]
        },
        {
          "id": "cv-chambers-r2",
          "competencyId": "cv-chambers",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which chamber has the thickest wall, and why?",
          "a": "The left ventricle, because it pumps blood to the whole body through the aorta.",
          "tags": [
            "cv-chambers"
          ]
        },
        {
          "id": "cv-chambers-r3",
          "competencyId": "cv-chambers",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the fossa ovalis, and what is it a remnant of?",
          "a": "The oval depression in the interatrial septum, the remnant of the fetal foramen ovale.",
          "tags": [
            "cv-chambers"
          ]
        },
        {
          "id": "cv-chambers-r4",
          "competencyId": "cv-chambers",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Compare the walls of the atria and the ventricles, and why they differ.",
          "a": "The atria are thin-walled receiving chambers; the ventricles are thick-walled pumping chambers.",
          "tags": [
            "cv-chambers"
          ]
        },
        {
          "id": "cv-chambers-r5",
          "competencyId": "cv-chambers",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Why must the interventricular septum be intact for the two circuits to stay separate?",
          "a": "It keeps oxygen-poor right-side blood from mixing with oxygen-rich left-side blood.",
          "tags": [
            "cv-chambers"
          ]
        }
      ]
    },
    {
      "id": "t-cv-valves",
      "title": "Heart valves",
      "competencyId": "cv-valves",
      "summary": "Heart valves (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "cv-valves-r1",
          "competencyId": "cv-valves",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the two atrioventricular valves and where each is.",
          "a": "The tricuspid valve (right atrium to right ventricle) and the mitral (bicuspid) valve (left atrium to left ventricle).",
          "tags": [
            "cv-valves"
          ]
        },
        {
          "id": "cv-valves-r2",
          "competencyId": "cv-valves",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the two semilunar valves and where each is.",
          "a": "The pulmonary valve (right ventricle to pulmonary trunk) and the aortic valve (left ventricle to aorta).",
          "tags": [
            "cv-valves"
          ]
        },
        {
          "id": "cv-valves-r3",
          "competencyId": "cv-valves",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "How many cusps does the tricuspid valve have, and the mitral valve?",
          "a": "The tricuspid has three cusps; the mitral has two.",
          "tags": [
            "cv-valves"
          ]
        },
        {
          "id": "cv-valves-r4",
          "competencyId": "cv-valves",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What do the AV valves prevent, and what do the semilunar valves prevent?",
          "a": "The AV valves prevent backflow into the atria; the semilunar valves prevent backflow into the ventricles.",
          "tags": [
            "cv-valves"
          ]
        },
        {
          "id": "cv-valves-r5",
          "competencyId": "cv-valves",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "A valve fails to close cleanly and blood slips backward, heard as a murmur. Which structural failure at an AV valve can cause this?",
          "a": "Damage to a papillary muscle or the chordae tendineae, which normally hold the valve shut.",
          "tags": [
            "cv-valves"
          ]
        }
      ]
    },
    {
      "id": "t-cv-blood-pathway",
      "title": "Pathway of blood through the heart",
      "competencyId": "cv-blood-pathway",
      "summary": "Pathway of blood through the heart (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "cv-blood-pathway-r1",
          "competencyId": "cv-blood-pathway",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "From where does the right atrium receive blood?",
          "a": "From the body through the superior and inferior venae cavae, and from the heart wall through the coronary sinus.",
          "tags": [
            "cv-blood-pathway"
          ]
        },
        {
          "id": "cv-blood-pathway-r2",
          "competencyId": "cv-blood-pathway",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Which circuit does the right side of the heart drive, and which does the left drive?",
          "a": "The right side drives the pulmonary circuit to the lungs; the left side drives the systemic circuit to the body.",
          "tags": [
            "cv-blood-pathway"
          ]
        },
        {
          "id": "cv-blood-pathway-r3",
          "competencyId": "cv-blood-pathway",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What returns oxygen-rich blood to the left atrium?",
          "a": "The four pulmonary veins.",
          "tags": [
            "cv-blood-pathway"
          ]
        },
        {
          "id": "cv-blood-pathway-r4",
          "competencyId": "cv-blood-pathway",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Going from the right atrium to the pulmonary trunk, which two valves does blood cross in order?",
          "a": "The tricuspid valve, then the pulmonary valve.",
          "tags": [
            "cv-blood-pathway"
          ]
        },
        {
          "id": "cv-blood-pathway-r5",
          "competencyId": "cv-blood-pathway",
          "type": "recall",
          "dok": 3,
          "facet": "lecture",
          "q": "Trace one drop of blood from the right atrium out to the body, naming chambers and valves in order.",
          "a": "Right atrium, tricuspid valve, right ventricle, pulmonary valve, lungs, left atrium, mitral valve, left ventricle, aortic valve, aorta.",
          "tags": [
            "cv-blood-pathway"
          ]
        }
      ]
    },
    {
      "id": "t-cv-coronary",
      "title": "Coronary circulation",
      "competencyId": "cv-coronary",
      "summary": "Coronary circulation (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "cv-coronary-r1",
          "competencyId": "cv-coronary",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Where do the coronary arteries arise?",
          "a": "From the base of the aorta.",
          "tags": [
            "cv-coronary"
          ]
        },
        {
          "id": "cv-coronary-r2",
          "competencyId": "cv-coronary",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the two coronary arteries.",
          "a": "The right coronary artery and the left coronary artery.",
          "tags": [
            "cv-coronary"
          ]
        },
        {
          "id": "cv-coronary-r3",
          "competencyId": "cv-coronary",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What does the coronary sinus do?",
          "a": "It collects the cardiac veins and empties into the right atrium.",
          "tags": [
            "cv-coronary"
          ]
        },
        {
          "id": "cv-coronary-r4",
          "competencyId": "cv-coronary",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Trace coronary flow from the aorta back to the right atrium.",
          "a": "Aorta, coronary arteries, capillaries of the myocardium, cardiac veins, coronary sinus, right atrium.",
          "tags": [
            "cv-coronary"
          ]
        },
        {
          "id": "cv-coronary-r5",
          "competencyId": "cv-coronary",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "A coronary artery is blocked. Why does the myocardium beyond it die, and what is this called?",
          "a": "It is starved of oxygen, so the muscle dies; this is a heart attack, a myocardial infarction.",
          "tags": [
            "cv-coronary"
          ]
        }
      ]
    },
    {
      "id": "t-cv-conduction-anat",
      "title": "Cardiac conduction system",
      "competencyId": "cv-conduction-anat",
      "summary": "Cardiac conduction system (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "cv-conduction-anat-r1",
          "competencyId": "cv-conduction-anat",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is the pacemaker of the heart, and where is it?",
          "a": "The SA (sinoatrial) node, in the wall of the right atrium near the superior vena cava.",
          "tags": [
            "cv-conduction-anat"
          ]
        },
        {
          "id": "cv-conduction-anat-r2",
          "competencyId": "cv-conduction-anat",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What does the AV node do?",
          "a": "It delays the signal briefly, then passes it on to the ventricles.",
          "tags": [
            "cv-conduction-anat"
          ]
        },
        {
          "id": "cv-conduction-anat-r3",
          "competencyId": "cv-conduction-anat",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is the only electrical bridge from the atria to the ventricles?",
          "a": "The AV bundle (bundle of His).",
          "tags": [
            "cv-conduction-anat"
          ]
        },
        {
          "id": "cv-conduction-anat-r4",
          "competencyId": "cv-conduction-anat",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Order the conduction pathway from the pacemaker to the ventricle walls.",
          "a": "SA node, across the atria, AV node, AV bundle, bundle branches, Purkinje fibers.",
          "tags": [
            "cv-conduction-anat"
          ]
        },
        {
          "id": "cv-conduction-anat-r5",
          "competencyId": "cv-conduction-anat",
          "type": "recall",
          "dok": 3,
          "facet": "lecture",
          "q": "Why is the brief pause at the AV node essential?",
          "a": "It holds the signal long enough for the atria to finish emptying into the ventricles before the ventricles contract.",
          "tags": [
            "cv-conduction-anat"
          ]
        }
      ]
    },
    {
      "id": "t-cv-valve-support",
      "title": "Chordae tendineae and papillary muscles",
      "competencyId": "cv-valve-support",
      "summary": "Chordae tendineae and papillary muscles (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "cv-valve-support-r1",
          "competencyId": "cv-valve-support",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What are the chordae tendineae?",
          "a": "Strong fibrous cords that tie the cusps of an atrioventricular valve to the ventricle wall.",
          "tags": [
            "cv-valve-support"
          ]
        },
        {
          "id": "cv-valve-support-r2",
          "competencyId": "cv-valve-support",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What are the papillary muscles?",
          "a": "Cone-shaped projections of the ventricle wall that anchor the chordae tendineae.",
          "tags": [
            "cv-valve-support"
          ]
        },
        {
          "id": "cv-valve-support-r3",
          "competencyId": "cv-valve-support",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "How do the chordae tendineae and papillary muscles keep an AV valve from failing?",
          "a": "They hold the valve cusps shut against the pressure of a contracting ventricle.",
          "tags": [
            "cv-valve-support"
          ]
        }
      ]
    },
    {
      "id": "t-cv-cardiac-muscle",
      "title": "Cardiac muscle and intercalated disc",
      "competencyId": "cv-cardiac-muscle",
      "summary": "Cardiac muscle and intercalated disc (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "cv-cardiac-muscle-r1",
          "competencyId": "cv-cardiac-muscle",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What are intercalated discs?",
          "a": "The specialized junctions where neighboring cardiac muscle cells meet end to end.",
          "tags": [
            "cv-cardiac-muscle"
          ]
        },
        {
          "id": "cv-cardiac-muscle-r2",
          "competencyId": "cv-cardiac-muscle",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which two junctions are in an intercalated disc, and what does each do?",
          "a": "Desmosomes anchor the cells so they do not pull apart; gap junctions let the contraction signal pass from cell to cell.",
          "tags": [
            "cv-cardiac-muscle"
          ]
        },
        {
          "id": "cv-cardiac-muscle-r3",
          "competencyId": "cv-cardiac-muscle",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "How is a cardiomyocyte described, and why is it packed with mitochondria?",
          "a": "A short, branching cell with usually one central nucleus, packed with mitochondria to fuel its constant, lifelong work.",
          "tags": [
            "cv-cardiac-muscle"
          ]
        }
      ]
    },
    {
      "id": "t-cv-cardiac-nerves",
      "title": "Nerve supply to the heart",
      "competencyId": "cv-cardiac-nerves",
      "summary": "Nerve supply to the heart (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "cv-cardiac-nerves-r1",
          "competencyId": "cv-cardiac-nerves",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "How do the sympathetic and parasympathetic nerves affect the heart rate?",
          "a": "Sympathetic nerves speed the heart rate; parasympathetic fibers in the vagus nerve slow it.",
          "tags": [
            "cv-cardiac-nerves"
          ]
        }
      ]
    }
  ]
};
  var POOL = {
  "mcq": [
    {
      "id": "cv-surfaces-q1",
      "competencyId": "cv-surfaces",
      "type": "mcq",
      "dok": 1,
      "q": "Which layer of the heart wall contracts?",
      "options": [
        "Epicardium",
        "Myocardium",
        "Endocardium",
        "Pericardium"
      ],
      "correctIndex": 1,
      "explanation": "The myocardium is the thick cardiac-muscle layer that contracts. The epicardium and endocardium are thin surface layers, and the pericardium is the surrounding sac.",
      "tags": [
        "cv-surfaces"
      ]
    },
    {
      "id": "cv-surfaces-q2",
      "competencyId": "cv-surfaces",
      "type": "mcq",
      "dok": 2,
      "q": "Excess fluid in the pericardial cavity that compresses the heart is called what?",
      "options": [
        "Cardiac tamponade",
        "Myocardial infarction",
        "Endocarditis",
        "Angina"
      ],
      "correctIndex": 0,
      "explanation": "Cardiac tamponade is fluid compressing the heart from outside, limiting filling. A myocardial infarction is dying muscle from a blocked artery.",
      "tags": [
        "cv-surfaces"
      ]
    },
    {
      "id": "cv-chambers-q1",
      "competencyId": "cv-chambers",
      "type": "mcq",
      "dok": 1,
      "q": "Which heart chamber has the thickest wall?",
      "options": [
        "Right atrium",
        "Left atrium",
        "Right ventricle",
        "Left ventricle"
      ],
      "correctIndex": 3,
      "explanation": "The left ventricle is thickest because it pumps to the whole body. The atria are thin receiving chambers and the right ventricle pumps only to the lungs.",
      "tags": [
        "cv-chambers"
      ]
    },
    {
      "id": "cv-chambers-q2",
      "competencyId": "cv-chambers",
      "type": "mcq",
      "dok": 2,
      "q": "The fossa ovalis is a remnant of which fetal structure?",
      "options": [
        "Ductus arteriosus",
        "Foramen ovale",
        "Ductus venosus",
        "Umbilical vein"
      ],
      "correctIndex": 1,
      "explanation": "The fossa ovalis marks the closed fetal foramen ovale in the interatrial septum. The other structures leave different adult remnants.",
      "tags": [
        "cv-chambers"
      ]
    },
    {
      "id": "cv-valves-q1",
      "competencyId": "cv-valves",
      "type": "mcq",
      "dok": 1,
      "q": "Which valve lies between the left atrium and left ventricle?",
      "options": [
        "Tricuspid valve",
        "Mitral valve",
        "Pulmonary valve",
        "Aortic valve"
      ],
      "correctIndex": 1,
      "explanation": "The mitral (bicuspid) valve is the left AV valve. The tricuspid is the right AV valve, and the semilunar valves guard the arteries.",
      "tags": [
        "cv-valves"
      ]
    },
    {
      "id": "cv-valves-q2",
      "competencyId": "cv-valves",
      "type": "mcq",
      "dok": 2,
      "q": "The semilunar valves prevent backflow into which chambers?",
      "options": [
        "The atria",
        "The ventricles",
        "The venae cavae",
        "The lungs"
      ],
      "correctIndex": 1,
      "explanation": "The semilunar (pulmonary and aortic) valves stop blood returning into the ventricles. The AV valves prevent backflow into the atria.",
      "tags": [
        "cv-valves"
      ]
    },
    {
      "id": "cv-blood-pathway-q1",
      "competencyId": "cv-blood-pathway",
      "type": "mcq",
      "dok": 1,
      "q": "What returns oxygen-rich blood to the left atrium?",
      "options": [
        "Venae cavae",
        "Pulmonary veins",
        "Coronary sinus",
        "Aorta"
      ],
      "correctIndex": 1,
      "explanation": "The four pulmonary veins return oxygen-rich blood from the lungs to the left atrium. The venae cavae and coronary sinus feed the right atrium.",
      "tags": [
        "cv-blood-pathway"
      ]
    },
    {
      "id": "cv-blood-pathway-q2",
      "competencyId": "cv-blood-pathway",
      "type": "mcq",
      "dok": 2,
      "q": "Leaving the right ventricle, which valve does blood cross next?",
      "options": [
        "Tricuspid valve",
        "Pulmonary valve",
        "Mitral valve",
        "Aortic valve"
      ],
      "correctIndex": 1,
      "explanation": "Blood leaves the right ventricle through the pulmonary valve into the pulmonary trunk. The tricuspid is upstream, and the mitral and aortic valves are on the left side.",
      "tags": [
        "cv-blood-pathway"
      ]
    },
    {
      "id": "cv-coronary-q1",
      "competencyId": "cv-coronary",
      "type": "mcq",
      "dok": 1,
      "q": "Where do the coronary arteries originate?",
      "options": [
        "The base of the aorta",
        "The right atrium",
        "The pulmonary trunk",
        "The coronary sinus"
      ],
      "correctIndex": 0,
      "explanation": "The coronary arteries arise from the base of the aorta. The coronary sinus is the vein that drains the heart wall into the right atrium.",
      "tags": [
        "cv-coronary"
      ]
    },
    {
      "id": "cv-coronary-q2",
      "competencyId": "cv-coronary",
      "type": "mcq",
      "dok": 2,
      "q": "A blocked coronary artery starving the myocardium causes what?",
      "options": [
        "A heart murmur",
        "A myocardial infarction",
        "Cardiac tamponade",
        "Bradycardia"
      ],
      "correctIndex": 1,
      "explanation": "A blocked coronary artery causes a myocardial infarction, a heart attack. A murmur is a valve sound and tamponade is external compression.",
      "tags": [
        "cv-coronary"
      ]
    },
    {
      "id": "cv-conduction-anat-q1",
      "competencyId": "cv-conduction-anat",
      "type": "mcq",
      "dok": 1,
      "q": "What is the natural pacemaker of the heart?",
      "options": [
        "AV node",
        "SA node",
        "AV bundle",
        "Purkinje fibers"
      ],
      "correctIndex": 1,
      "explanation": "The SA node fires fastest and sets the heart rate. The AV node delays the signal, and the bundle and Purkinje fibers distribute it.",
      "tags": [
        "cv-conduction-anat"
      ]
    },
    {
      "id": "cv-conduction-anat-q2",
      "competencyId": "cv-conduction-anat",
      "type": "mcq",
      "dok": 2,
      "q": "Why does the signal pause at the AV node?",
      "options": [
        "To speed the ventricles",
        "To let the atria finish emptying",
        "To relax the heart",
        "To start the heartbeat"
      ],
      "correctIndex": 1,
      "explanation": "The AV node delay lets the atria finish emptying into the ventricles before the ventricles contract. It does not start the beat, which the SA node does.",
      "tags": [
        "cv-conduction-anat"
      ]
    },
    {
      "id": "cv-valve-support-q1",
      "competencyId": "cv-valve-support",
      "type": "mcq",
      "dok": 2,
      "q": "What holds an atrioventricular valve shut against ventricular pressure?",
      "options": [
        "The semilunar cusps",
        "The chordae tendineae and papillary muscles",
        "The endocardium",
        "The interventricular septum"
      ],
      "correctIndex": 1,
      "explanation": "Chordae tendineae anchored by papillary muscles hold the AV valve cusps shut. The semilunar valves and septum are unrelated to this.",
      "tags": [
        "cv-valve-support"
      ]
    },
    {
      "id": "cv-cardiac-muscle-q1",
      "competencyId": "cv-cardiac-muscle",
      "type": "mcq",
      "dok": 2,
      "q": "Which junction in an intercalated disc passes the contraction signal cell to cell?",
      "options": [
        "Desmosome",
        "Gap junction",
        "Tight junction",
        "Hemidesmosome"
      ],
      "correctIndex": 1,
      "explanation": "Gap junctions let the signal pass between cardiac cells. Desmosomes anchor the cells, and the other junctions are not part of the intercalated disc.",
      "tags": [
        "cv-cardiac-muscle"
      ]
    }
  ],
  "stretch": [
    {
      "id": "cv-blood-pathway-s1",
      "competencyId": "cv-blood-pathway",
      "type": "stretch",
      "dok": 3,
      "q": "A patient's mitral valve leaks. Trace where blood abnormally goes during a left ventricular contraction, and name the valve and supports that failed.",
      "a": "It slips back from the left ventricle into the left atrium; the mitral valve failed, its cusps not held shut by the chordae tendineae and papillary muscles.",
      "tags": [
        "cv-blood-pathway",
        "cv-valves",
        "cv-valve-support"
      ]
    },
    {
      "id": "cv-coronary-s1",
      "competencyId": "cv-coronary",
      "type": "stretch",
      "dok": 3,
      "q": "The right coronary artery usually supplies the SA and AV nodes. Predict one rhythm problem if it is blocked, and why.",
      "a": "A conduction or rhythm disorder such as heart block or bradycardia, because the nodes lose their blood supply.",
      "tags": [
        "cv-coronary",
        "cv-conduction-anat"
      ]
    },
    {
      "id": "cv-surfaces-s1",
      "competencyId": "cv-surfaces",
      "type": "stretch",
      "dok": 3,
      "q": "Explain how the pericardium's normal friction-reducing fluid can, in excess, become life-threatening.",
      "a": "The serous fluid normally lets the heart glide, but too much fluid causes cardiac tamponade, compressing the heart and limiting its filling.",
      "tags": [
        "cv-surfaces",
        "cv-chambers"
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
