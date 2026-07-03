/* bio004-w7-cards.js  —  BIO 004 competency-tagged recall + practice pool (Week 7: Brain, Brainstem, Meninges and CSF)
   card-maker-brief.md. Additive: appends to window.BIO004_COURSE_CONTENT and
   window.BIO004_PRACTICE_POOL; never edits existing multiple-choice cards. */
(function (w) {
  "use strict";
  var MODULE = {
  "id": "m-w7",
  "week": 7,
  "title": "Week 7: Brain, Brainstem, Meninges and CSF",
  "topics": [
    {
      "id": "t-w7-brain-organization",
      "title": "Brain gross organization",
      "competencyId": "w7-brain-organization",
      "summary": "Brain gross organization (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-brain-organization-r1",
          "competencyId": "w7-brain-organization",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Name the four major parts of the brain.",
          "a": "The cerebrum, diencephalon, brainstem, and cerebellum.",
          "tags": [
            "w7-brain-organization"
          ]
        },
        {
          "id": "w7-brain-organization-r2",
          "competencyId": "w7-brain-organization",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Where is gray matter versus white matter in the brain?",
          "a": "Gray matter (cell bodies) is on the outside; white matter (myelinated axons) is on the inside.",
          "tags": [
            "w7-brain-organization"
          ]
        },
        {
          "id": "w7-brain-organization-r3",
          "competencyId": "w7-brain-organization",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is the cerebrum?",
          "a": "The largest brain part, the seat of conscious thought, sensation, and voluntary movement.",
          "tags": [
            "w7-brain-organization"
          ]
        },
        {
          "id": "w7-brain-organization-r4",
          "competencyId": "w7-brain-organization",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Compare the roles of the cerebrum and the cerebellum.",
          "a": "The cerebrum handles conscious thought and voluntary movement; the cerebellum coordinates movement, posture, and balance.",
          "tags": [
            "w7-brain-organization"
          ]
        },
        {
          "id": "w7-brain-organization-r5",
          "competencyId": "w7-brain-organization",
          "type": "recall",
          "dok": 3,
          "facet": "lecture",
          "q": "Cortex is gray matter on the brain's surface. Why is the surface folded into gyri and sulci?",
          "a": "Folding packs more cortex into the limited space of the skull.",
          "tags": [
            "w7-brain-organization"
          ]
        }
      ]
    },
    {
      "id": "t-w7-cerebrum-surface",
      "title": "Cerebral surface and lobes",
      "competencyId": "w7-cerebrum-surface",
      "summary": "Cerebral surface and lobes (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-cerebrum-surface-r1",
          "competencyId": "w7-cerebrum-surface",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the five lobes of a cerebral hemisphere.",
          "a": "Frontal, parietal, temporal, occipital, and insula.",
          "tags": [
            "w7-cerebrum-surface"
          ]
        },
        {
          "id": "w7-cerebrum-surface-r2",
          "competencyId": "w7-cerebrum-surface",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What does the central sulcus separate?",
          "a": "The frontal lobe from the parietal lobe.",
          "tags": [
            "w7-cerebrum-surface"
          ]
        },
        {
          "id": "w7-cerebrum-surface-r3",
          "competencyId": "w7-cerebrum-surface",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What joins the two cerebral hemispheres?",
          "a": "The corpus callosum.",
          "tags": [
            "w7-cerebrum-surface"
          ]
        },
        {
          "id": "w7-cerebrum-surface-r4",
          "competencyId": "w7-cerebrum-surface",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Compare gyri, sulci, and fissures.",
          "a": "Gyri are the raised ridges, sulci the shallow grooves between them, and fissures the deepest grooves dividing major regions.",
          "tags": [
            "w7-cerebrum-surface"
          ]
        },
        {
          "id": "w7-cerebrum-surface-r5",
          "competencyId": "w7-cerebrum-surface",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Which lobe's damage takes vision, and which takes fluent speech production?",
          "a": "Occipital lobe damage takes vision; Broca's area in the frontal lobe takes fluent speech.",
          "tags": [
            "w7-cerebrum-surface"
          ]
        }
      ]
    },
    {
      "id": "t-w7-cortex-functional-areas",
      "title": "Functional cortical areas",
      "competencyId": "w7-cortex-functional-areas",
      "summary": "Functional cortical areas (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-cortex-functional-areas-r1",
          "competencyId": "w7-cortex-functional-areas",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Where is the primary motor cortex?",
          "a": "The precentral gyrus of the frontal lobe.",
          "tags": [
            "w7-cortex-functional-areas"
          ]
        },
        {
          "id": "w7-cortex-functional-areas-r2",
          "competencyId": "w7-cortex-functional-areas",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Where is the primary somatosensory cortex?",
          "a": "The postcentral gyrus of the parietal lobe.",
          "tags": [
            "w7-cortex-functional-areas"
          ]
        },
        {
          "id": "w7-cortex-functional-areas-r3",
          "competencyId": "w7-cortex-functional-areas",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What does Broca's area do, and where is it?",
          "a": "It controls the motor production of speech, in the inferior frontal gyrus, usually on the left.",
          "tags": [
            "w7-cortex-functional-areas"
          ]
        },
        {
          "id": "w7-cortex-functional-areas-r4",
          "competencyId": "w7-cortex-functional-areas",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Compare Broca's and Wernicke's areas.",
          "a": "Broca's area produces speech; Wernicke's area comprehends spoken and written language.",
          "tags": [
            "w7-cortex-functional-areas"
          ]
        },
        {
          "id": "w7-cortex-functional-areas-r5",
          "competencyId": "w7-cortex-functional-areas",
          "type": "recall",
          "dok": 3,
          "facet": "lecture",
          "q": "A patient understands speech but cannot speak fluently. Which area was struck?",
          "a": "Broca's area.",
          "tags": [
            "w7-cortex-functional-areas"
          ]
        }
      ]
    },
    {
      "id": "t-w7-diencephalon",
      "title": "Diencephalon",
      "competencyId": "w7-diencephalon",
      "summary": "Diencephalon (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-diencephalon-r1",
          "competencyId": "w7-diencephalon",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three parts of the diencephalon.",
          "a": "The thalamus, hypothalamus, and epithalamus.",
          "tags": [
            "w7-diencephalon"
          ]
        },
        {
          "id": "w7-diencephalon-r2",
          "competencyId": "w7-diencephalon",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the thalamus, and its main role?",
          "a": "Paired gray-matter masses forming most of the diencephalon; the main sensory relay station to the cortex.",
          "tags": [
            "w7-diencephalon"
          ]
        },
        {
          "id": "w7-diencephalon-r3",
          "competencyId": "w7-diencephalon",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which gland is part of the epithalamus?",
          "a": "The pineal gland.",
          "tags": [
            "w7-diencephalon"
          ]
        },
        {
          "id": "w7-diencephalon-r4",
          "competencyId": "w7-diencephalon",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What does the hypothalamus control?",
          "a": "Homeostasis: the autonomic nervous system, the pituitary, temperature, hunger and thirst, and sleep-wake rhythms.",
          "tags": [
            "w7-diencephalon"
          ]
        },
        {
          "id": "w7-diencephalon-r5",
          "competencyId": "w7-diencephalon",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Which diencephalic structure links the nervous and endocrine systems, and how?",
          "a": "The hypothalamus, which controls the pituitary gland.",
          "tags": [
            "w7-diencephalon"
          ]
        }
      ]
    },
    {
      "id": "t-w7-cerebellum",
      "title": "Cerebellum",
      "competencyId": "w7-cerebellum",
      "summary": "Cerebellum (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-cerebellum-r1",
          "competencyId": "w7-cerebellum",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What does the cerebellum do?",
          "a": "It coordinates movement, posture, and balance.",
          "tags": [
            "w7-cerebellum"
          ]
        },
        {
          "id": "w7-cerebellum-r2",
          "competencyId": "w7-cerebellum",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the vermis?",
          "a": "The narrow midline band connecting the two cerebellar hemispheres.",
          "tags": [
            "w7-cerebellum"
          ]
        },
        {
          "id": "w7-cerebellum-r3",
          "competencyId": "w7-cerebellum",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the arbor vitae?",
          "a": "The branching, tree-like pattern of cerebellar white matter.",
          "tags": [
            "w7-cerebellum"
          ]
        },
        {
          "id": "w7-cerebellum-r4",
          "competencyId": "w7-cerebellum",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "How many pairs of cerebellar peduncles connect it to the brainstem, and what are they?",
          "a": "Three pairs: superior, middle, and inferior cerebellar peduncles.",
          "tags": [
            "w7-cerebellum"
          ]
        },
        {
          "id": "w7-cerebellum-r5",
          "competencyId": "w7-cerebellum",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Which cerebellar peduncle carries mostly output, and to where?",
          "a": "The superior cerebellar peduncle, connecting to the midbrain.",
          "tags": [
            "w7-cerebellum"
          ]
        }
      ]
    },
    {
      "id": "t-w7-circle-of-willis",
      "title": "Cerebral arterial supply",
      "competencyId": "w7-circle-of-willis",
      "summary": "Cerebral arterial supply (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-circle-of-willis-r1",
          "competencyId": "w7-circle-of-willis",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the Circle of Willis?",
          "a": "The ring of arteries at the base of the brain joining the anterior and posterior circulations.",
          "tags": [
            "w7-circle-of-willis"
          ]
        },
        {
          "id": "w7-circle-of-willis-r2",
          "competencyId": "w7-circle-of-willis",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which arteries feed the anterior circulation, and which the posterior?",
          "a": "The internal carotid arteries feed the anterior; the vertebral and basilar arteries feed the posterior.",
          "tags": [
            "w7-circle-of-willis"
          ]
        },
        {
          "id": "w7-circle-of-willis-r3",
          "competencyId": "w7-circle-of-willis",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What forms the basilar artery?",
          "a": "The union of the two vertebral arteries.",
          "tags": [
            "w7-circle-of-willis"
          ]
        },
        {
          "id": "w7-circle-of-willis-r4",
          "competencyId": "w7-circle-of-willis",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What does the middle cerebral artery supply?",
          "a": "The lateral surface of the cerebrum, including the motor and sensory cortex for the body.",
          "tags": [
            "w7-circle-of-willis"
          ]
        },
        {
          "id": "w7-circle-of-willis-r5",
          "competencyId": "w7-circle-of-willis",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "How does the Circle of Willis act as the brain's insurance policy?",
          "a": "Its ring lets blood cross from one source to another if a vessel slowly narrows or is blocked.",
          "tags": [
            "w7-circle-of-willis"
          ]
        }
      ]
    },
    {
      "id": "t-w7-brainstem-regions",
      "title": "Brainstem regions",
      "competencyId": "w7-brainstem-regions",
      "summary": "Brainstem regions (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-brainstem-regions-r1",
          "competencyId": "w7-brainstem-regions",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three regions of the brainstem, superior to inferior.",
          "a": "Midbrain, pons, medulla oblongata.",
          "tags": [
            "w7-brainstem-regions"
          ]
        },
        {
          "id": "w7-brainstem-regions-r2",
          "competencyId": "w7-brainstem-regions",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "The brainstem holds the nuclei for how many cranial nerves?",
          "a": "Ten of the twelve (CN III through XII).",
          "tags": [
            "w7-brainstem-regions"
          ]
        },
        {
          "id": "w7-brainstem-regions-r3",
          "competencyId": "w7-brainstem-regions",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which brainstem region is continuous with the spinal cord?",
          "a": "The medulla oblongata.",
          "tags": [
            "w7-brainstem-regions"
          ]
        },
        {
          "id": "w7-brainstem-regions-r4",
          "competencyId": "w7-brainstem-regions",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What passes through the brainstem between the brain and the cord?",
          "a": "Every ascending sensory tract and descending motor tract.",
          "tags": [
            "w7-brainstem-regions"
          ]
        },
        {
          "id": "w7-brainstem-regions-r5",
          "competencyId": "w7-brainstem-regions",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Why is brainstem damage far more dangerous than damage to a single cerebral lobe?",
          "a": "The medulla holds the vital cardiac, respiratory, and vasomotor centers that keep the body alive.",
          "tags": [
            "w7-brainstem-regions"
          ]
        }
      ]
    },
    {
      "id": "t-w7-cranial-meninges",
      "title": "Cranial meninges",
      "competencyId": "w7-cranial-meninges",
      "summary": "Cranial meninges (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-cranial-meninges-r1",
          "competencyId": "w7-cranial-meninges",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three meninges from outer to inner.",
          "a": "Dura mater, arachnoid mater, pia mater.",
          "tags": [
            "w7-cranial-meninges"
          ]
        },
        {
          "id": "w7-cranial-meninges-r2",
          "competencyId": "w7-cranial-meninges",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which meninx is tough and outermost, and how many layers in the cranium?",
          "a": "The dura mater, with two layers in the cranium: periosteal and meningeal.",
          "tags": [
            "w7-cranial-meninges"
          ]
        },
        {
          "id": "w7-cranial-meninges-r3",
          "competencyId": "w7-cranial-meninges",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which meninx clings to the brain surface and is rich in blood vessels?",
          "a": "The pia mater.",
          "tags": [
            "w7-cranial-meninges"
          ]
        },
        {
          "id": "w7-cranial-meninges-r4",
          "competencyId": "w7-cranial-meninges",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What are dural reflections, and name two.",
          "a": "Inward folds of meningeal dura that partition the cranial cavity, such as the falx cerebri and the tentorium cerebelli.",
          "tags": [
            "w7-cranial-meninges"
          ]
        },
        {
          "id": "w7-cranial-meninges-r5",
          "competencyId": "w7-cranial-meninges",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Why is there no epidural space inside the cranium?",
          "a": "The periosteal dura is attached directly to the skull, unlike in the vertebral canal.",
          "tags": [
            "w7-cranial-meninges"
          ]
        }
      ]
    },
    {
      "id": "t-w7-spinal-meninges-spaces",
      "title": "Spinal meninges and spaces",
      "competencyId": "w7-spinal-meninges-spaces",
      "summary": "Spinal meninges and spaces (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-spinal-meninges-spaces-r1",
          "competencyId": "w7-spinal-meninges-spaces",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "How does the spinal dura differ from the cranial dura?",
          "a": "The spinal dura is a single layer, not fused to bone, unlike the two-layered cranial dura.",
          "tags": [
            "w7-spinal-meninges-spaces"
          ]
        },
        {
          "id": "w7-spinal-meninges-spaces-r2",
          "competencyId": "w7-spinal-meninges-spaces",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the epidural space, and what fills it?",
          "a": "The space between the spinal dura and the vertebral bone, filled with fat and veins; the site of an epidural injection.",
          "tags": [
            "w7-spinal-meninges-spaces"
          ]
        },
        {
          "id": "w7-spinal-meninges-spaces-r3",
          "competencyId": "w7-spinal-meninges-spaces",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which space contains cerebrospinal fluid?",
          "a": "The subarachnoid space, between the arachnoid and pia mater.",
          "tags": [
            "w7-spinal-meninges-spaces"
          ]
        },
        {
          "id": "w7-spinal-meninges-spaces-r4",
          "competencyId": "w7-spinal-meninges-spaces",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Compare the subdural and subarachnoid spaces.",
          "a": "The subdural space is a potential space with a thin film of fluid; the subarachnoid space holds cerebrospinal fluid.",
          "tags": [
            "w7-spinal-meninges-spaces"
          ]
        },
        {
          "id": "w7-spinal-meninges-spaces-r5",
          "competencyId": "w7-spinal-meninges-spaces",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "What are the denticulate ligaments and the filum terminale?",
          "a": "Denticulate ligaments are pial extensions anchoring the cord to the dura; the filum terminale is a pial thread anchoring the cord's end to the coccyx.",
          "tags": [
            "w7-spinal-meninges-spaces"
          ]
        }
      ]
    },
    {
      "id": "t-w7-ventricles",
      "title": "Ventricular system",
      "competencyId": "w7-ventricles",
      "summary": "Ventricular system (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-ventricles-r1",
          "competencyId": "w7-ventricles",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the four ventricles of the brain.",
          "a": "The two lateral ventricles, the third ventricle, and the fourth ventricle.",
          "tags": [
            "w7-ventricles"
          ]
        },
        {
          "id": "w7-ventricles-r2",
          "competencyId": "w7-ventricles",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Where is the third ventricle?",
          "a": "The midline cavity enclosed by the diencephalon.",
          "tags": [
            "w7-ventricles"
          ]
        },
        {
          "id": "w7-ventricles-r3",
          "competencyId": "w7-ventricles",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Where is the fourth ventricle?",
          "a": "Behind the pons and the upper medulla.",
          "tags": [
            "w7-ventricles"
          ]
        },
        {
          "id": "w7-ventricles-r4",
          "competencyId": "w7-ventricles",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What connects the third and fourth ventricles?",
          "a": "The cerebral aqueduct, running through the midbrain.",
          "tags": [
            "w7-ventricles"
          ]
        },
        {
          "id": "w7-ventricles-r5",
          "competencyId": "w7-ventricles",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Which ventricles sit in the cerebral hemispheres, and what connects each to the third ventricle?",
          "a": "The lateral ventricles, each connected to the third ventricle by an interventricular foramen.",
          "tags": [
            "w7-ventricles"
          ]
        }
      ]
    },
    {
      "id": "t-w7-csf-circulation",
      "title": "CSF production and circulation",
      "competencyId": "w7-csf-circulation",
      "summary": "CSF production and circulation (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-csf-circulation-r1",
          "competencyId": "w7-csf-circulation",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is cerebrospinal fluid?",
          "a": "The clear fluid that surrounds, cushions, and floats the central nervous system.",
          "tags": [
            "w7-csf-circulation"
          ]
        },
        {
          "id": "w7-csf-circulation-r2",
          "competencyId": "w7-csf-circulation",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Where is CSF produced?",
          "a": "By the choroid plexus in the ventricles.",
          "tags": [
            "w7-csf-circulation"
          ]
        },
        {
          "id": "w7-csf-circulation-r3",
          "competencyId": "w7-csf-circulation",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Where is CSF found around the brain and cord?",
          "a": "In the subarachnoid space.",
          "tags": [
            "w7-csf-circulation"
          ]
        },
        {
          "id": "w7-csf-circulation-r4",
          "competencyId": "w7-csf-circulation",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "How is CSF returned to the blood?",
          "a": "Through the arachnoid granulations into the dural venous sinuses, such as the superior sagittal sinus.",
          "tags": [
            "w7-csf-circulation"
          ]
        },
        {
          "id": "w7-csf-circulation-r5",
          "competencyId": "w7-csf-circulation",
          "type": "recall",
          "dok": 3,
          "facet": "lecture",
          "q": "Trace CSF from the lateral ventricles to its return to the blood.",
          "a": "Lateral ventricles, third ventricle, cerebral aqueduct, fourth ventricle, subarachnoid space, arachnoid granulations, dural venous sinuses.",
          "tags": [
            "w7-csf-circulation"
          ]
        }
      ]
    },
    {
      "id": "t-w7-lab-facial-expression",
      "title": "Muscles of facial expression",
      "competencyId": "w7-lab-facial-expression",
      "summary": "Muscles of facial expression (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-lab-facial-expression-r1",
          "competencyId": "w7-lab-facial-expression",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which nerve supplies the muscles of facial expression?",
          "a": "The facial nerve (CN VII).",
          "tags": [
            "w7-lab-facial-expression"
          ]
        },
        {
          "id": "w7-lab-facial-expression-r2",
          "competencyId": "w7-lab-facial-expression",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which muscle closes the eye for blinking?",
          "a": "Orbicularis oculi.",
          "tags": [
            "w7-lab-facial-expression"
          ]
        },
        {
          "id": "w7-lab-facial-expression-r3",
          "competencyId": "w7-lab-facial-expression",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which muscle closes and purses the lips?",
          "a": "Orbicularis oris.",
          "tags": [
            "w7-lab-facial-expression"
          ]
        },
        {
          "id": "w7-lab-facial-expression-r4",
          "competencyId": "w7-lab-facial-expression",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which facial muscle raises the eyebrows and wrinkles the forehead?",
          "a": "Frontalis, part of the occipitofrontalis.",
          "tags": [
            "w7-lab-facial-expression"
          ]
        },
        {
          "id": "w7-lab-facial-expression-r5",
          "competencyId": "w7-lab-facial-expression",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "A patient cannot close one eye or smile on that side. Which nerve is affected?",
          "a": "The facial nerve (CN VII), as in Bell's palsy.",
          "tags": [
            "w7-lab-facial-expression"
          ]
        }
      ]
    },
    {
      "id": "t-w7-lab-mastication",
      "title": "Muscles of mastication",
      "competencyId": "w7-lab-mastication",
      "summary": "Muscles of mastication (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-lab-mastication-r1",
          "competencyId": "w7-lab-mastication",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which nerve supplies the muscles of mastication?",
          "a": "The trigeminal nerve (CN V).",
          "tags": [
            "w7-lab-mastication"
          ]
        },
        {
          "id": "w7-lab-mastication-r2",
          "competencyId": "w7-lab-mastication",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which chewing muscle elevates the mandible and bulges at the angle of the jaw?",
          "a": "Masseter.",
          "tags": [
            "w7-lab-mastication"
          ]
        },
        {
          "id": "w7-lab-mastication-r3",
          "competencyId": "w7-lab-mastication",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which fan-shaped muscle over the temporal bone elevates and retracts the mandible?",
          "a": "Temporalis.",
          "tags": [
            "w7-lab-mastication"
          ]
        },
        {
          "id": "w7-lab-mastication-r4",
          "competencyId": "w7-lab-mastication",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which deep muscles of mastication move the jaw side to side?",
          "a": "The medial and lateral pterygoids.",
          "tags": [
            "w7-lab-mastication"
          ]
        },
        {
          "id": "w7-lab-mastication-r5",
          "competencyId": "w7-lab-mastication",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Clenching the jaw hardens a muscle over the cheek and one over the temple. Name both.",
          "a": "The masseter and the temporalis.",
          "tags": [
            "w7-lab-mastication"
          ]
        }
      ]
    },
    {
      "id": "t-w7-white-matter-tracts",
      "title": "Cerebral white matter tracts",
      "competencyId": "w7-white-matter-tracts",
      "summary": "Cerebral white matter tracts (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-white-matter-tracts-r1",
          "competencyId": "w7-white-matter-tracts",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three classes of cerebral white matter fibers.",
          "a": "Association, commissural, and projection fibers.",
          "tags": [
            "w7-white-matter-tracts"
          ]
        },
        {
          "id": "w7-white-matter-tracts-r2",
          "competencyId": "w7-white-matter-tracts",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Compare association and commissural fibers.",
          "a": "Association fibers connect gyri within one hemisphere; commissural fibers connect matching gyri between the hemispheres.",
          "tags": [
            "w7-white-matter-tracts"
          ]
        },
        {
          "id": "w7-white-matter-tracts-r3",
          "competencyId": "w7-white-matter-tracts",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What is the largest commissure, and what does the internal capsule carry?",
          "a": "The corpus callosum is the largest commissure; the internal capsule is the main projection pathway between cortex and lower regions.",
          "tags": [
            "w7-white-matter-tracts"
          ]
        }
      ]
    },
    {
      "id": "t-w7-basal-ganglia",
      "title": "Basal ganglia",
      "competencyId": "w7-basal-ganglia",
      "summary": "Basal ganglia (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-basal-ganglia-r1",
          "competencyId": "w7-basal-ganglia",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What do the basal ganglia (cerebral nuclei) regulate?",
          "a": "Semi-voluntary movement, such as the arm swing of walking.",
          "tags": [
            "w7-basal-ganglia"
          ]
        },
        {
          "id": "w7-basal-ganglia-r2",
          "competencyId": "w7-basal-ganglia",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the core nuclei of the basal ganglia.",
          "a": "The caudate nucleus, putamen, and globus pallidus.",
          "tags": [
            "w7-basal-ganglia"
          ]
        },
        {
          "id": "w7-basal-ganglia-r3",
          "competencyId": "w7-basal-ganglia",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which midbrain nucleus is grouped with the basal ganglia, and its loss causes which disease?",
          "a": "The substantia nigra; its loss causes Parkinson disease.",
          "tags": [
            "w7-basal-ganglia"
          ]
        }
      ]
    },
    {
      "id": "t-w7-midbrain",
      "title": "Midbrain",
      "competencyId": "w7-midbrain",
      "summary": "Midbrain (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-midbrain-r1",
          "competencyId": "w7-midbrain",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What are the superior and inferior colliculi?",
          "a": "The superior colliculi are centers for visual reflexes; the inferior colliculi for auditory reflexes.",
          "tags": [
            "w7-midbrain"
          ]
        },
        {
          "id": "w7-midbrain-r2",
          "competencyId": "w7-midbrain",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What channel runs through the midbrain?",
          "a": "The cerebral aqueduct, carrying CSF from the third to the fourth ventricle.",
          "tags": [
            "w7-midbrain"
          ]
        },
        {
          "id": "w7-midbrain-r3",
          "competencyId": "w7-midbrain",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which cranial nerve nuclei are in the midbrain?",
          "a": "CN III (oculomotor) and CN IV (trochlear).",
          "tags": [
            "w7-midbrain"
          ]
        }
      ]
    },
    {
      "id": "t-w7-pons",
      "title": "Pons",
      "competencyId": "w7-pons",
      "summary": "Pons (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-pons-r1",
          "competencyId": "w7-pons",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What does the pons's name mean, and what does it bridge?",
          "a": "Bridge; it connects the medulla, midbrain, and cerebellum.",
          "tags": [
            "w7-pons"
          ]
        },
        {
          "id": "w7-pons-r2",
          "competencyId": "w7-pons",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What do the pontine nuclei relay?",
          "a": "Motor information from the cerebral cortex to the cerebellum.",
          "tags": [
            "w7-pons"
          ]
        },
        {
          "id": "w7-pons-r3",
          "competencyId": "w7-pons",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which cranial nerve nuclei are in the pons?",
          "a": "CN V, VI, VII, and VIII.",
          "tags": [
            "w7-pons"
          ]
        }
      ]
    },
    {
      "id": "t-w7-medulla",
      "title": "Medulla oblongata",
      "competencyId": "w7-medulla",
      "summary": "Medulla oblongata (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-medulla-r1",
          "competencyId": "w7-medulla",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What are the pyramids of the medulla?",
          "a": "A pair of ridges on the front formed by the descending corticospinal motor tracts.",
          "tags": [
            "w7-medulla"
          ]
        },
        {
          "id": "w7-medulla-r2",
          "competencyId": "w7-medulla",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three vital centers of the medulla.",
          "a": "The cardiac, respiratory, and vasomotor centers.",
          "tags": [
            "w7-medulla"
          ]
        },
        {
          "id": "w7-medulla-r3",
          "competencyId": "w7-medulla",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What is the decussation of the pyramids, and what does it explain?",
          "a": "The crossover of corticospinal fibers to the opposite side; it is why one hemisphere controls the opposite side of the body.",
          "tags": [
            "w7-medulla"
          ]
        }
      ]
    },
    {
      "id": "t-w7-cord-termination-lp",
      "title": "Cord termination and lumbar puncture",
      "competencyId": "w7-cord-termination-lp",
      "summary": "Cord termination and lumbar puncture (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-cord-termination-lp-r1",
          "competencyId": "w7-cord-termination-lp",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the conus medullaris?",
          "a": "The tapered end of the spinal cord in the lumbar region.",
          "tags": [
            "w7-cord-termination-lp"
          ]
        },
        {
          "id": "w7-cord-termination-lp-r2",
          "competencyId": "w7-cord-termination-lp",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Why is a lumbar puncture done low in the lumbar region?",
          "a": "The cord ends high, so the needle enters the CSF-filled subarachnoid space below it without hitting the cord.",
          "tags": [
            "w7-cord-termination-lp"
          ]
        },
        {
          "id": "w7-cord-termination-lp-r3",
          "competencyId": "w7-cord-termination-lp",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What is the cauda equina?",
          "a": "The bundle of nerve roots descending below the conus medullaris.",
          "tags": [
            "w7-cord-termination-lp"
          ]
        }
      ]
    },
    {
      "id": "t-w7-lab-neck",
      "title": "Muscles of the neck",
      "competencyId": "w7-lab-neck",
      "summary": "Muscles of the neck (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-lab-neck-r1",
          "competencyId": "w7-lab-neck",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which muscle, from sternum and clavicle to the mastoid, flexes the neck and turns the head?",
          "a": "Sternocleidomastoid.",
          "tags": [
            "w7-lab-neck"
          ]
        },
        {
          "id": "w7-lab-neck-r2",
          "competencyId": "w7-lab-neck",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which broad muscle of the upper back and neck elevates and retracts the scapula?",
          "a": "Trapezius.",
          "tags": [
            "w7-lab-neck"
          ]
        },
        {
          "id": "w7-lab-neck-r3",
          "competencyId": "w7-lab-neck",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Contracting one sternocleidomastoid turns the face which way?",
          "a": "Toward the opposite side.",
          "tags": [
            "w7-lab-neck"
          ]
        }
      ]
    },
    {
      "id": "t-w7-lab-extraocular",
      "title": "Extraocular muscles",
      "competencyId": "w7-lab-extraocular",
      "summary": "Extraocular muscles (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-lab-extraocular-r1",
          "competencyId": "w7-lab-extraocular",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "How many extraocular muscles move each eye?",
          "a": "Six: four recti and two obliques.",
          "tags": [
            "w7-lab-extraocular"
          ]
        },
        {
          "id": "w7-lab-extraocular-r2",
          "competencyId": "w7-lab-extraocular",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which nerve supplies most extraocular muscles, and the exceptions?",
          "a": "The oculomotor nerve (CN III), except the lateral rectus (CN VI) and superior oblique (CN IV).",
          "tags": [
            "w7-lab-extraocular"
          ]
        },
        {
          "id": "w7-lab-extraocular-r3",
          "competencyId": "w7-lab-extraocular",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which extraocular muscle turns the eye laterally, and its nerve?",
          "a": "The lateral rectus, supplied by the abducens nerve (CN VI).",
          "tags": [
            "w7-lab-extraocular"
          ]
        }
      ]
    },
    {
      "id": "t-w7-brain-development",
      "title": "Neural tube brain development",
      "competencyId": "w7-brain-development",
      "summary": "Neural tube brain development (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-brain-development-r1",
          "competencyId": "w7-brain-development",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Name the three primary brain vesicles.",
          "a": "The prosencephalon (forebrain), mesencephalon (midbrain), and rhombencephalon (hindbrain).",
          "tags": [
            "w7-brain-development"
          ]
        }
      ]
    },
    {
      "id": "t-w7-limbic-system",
      "title": "Limbic system",
      "competencyId": "w7-limbic-system",
      "summary": "Limbic system (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-limbic-system-r1",
          "competencyId": "w7-limbic-system",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name two structures of the limbic system and their roles.",
          "a": "The amygdala (fear and aggression) and the hippocampus (forming new long-term memories).",
          "tags": [
            "w7-limbic-system"
          ]
        }
      ]
    },
    {
      "id": "t-w7-cranial-nerve-nuclei",
      "title": "Cranial nerve nuclei",
      "competencyId": "w7-cranial-nerve-nuclei",
      "summary": "Cranial nerve nuclei (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-cranial-nerve-nuclei-r1",
          "competencyId": "w7-cranial-nerve-nuclei",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "The brainstem holds the nuclei for which cranial nerves?",
          "a": "CN III through XII.",
          "tags": [
            "w7-cranial-nerve-nuclei"
          ]
        }
      ]
    },
    {
      "id": "t-w7-reticular-formation",
      "title": "Reticular formation",
      "competencyId": "w7-reticular-formation",
      "summary": "Reticular formation (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-reticular-formation-r1",
          "competencyId": "w7-reticular-formation",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What does the reticular activating system (RAS) do?",
          "a": "It keeps the cortex awake, alert, and attentive; its shutdown causes sleep or coma.",
          "tags": [
            "w7-reticular-formation"
          ]
        }
      ]
    },
    {
      "id": "t-w7-bbb",
      "title": "Blood-brain barrier",
      "competencyId": "w7-bbb",
      "summary": "Blood-brain barrier (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w7-bbb-r1",
          "competencyId": "w7-bbb",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the blood-brain barrier?",
          "a": "The barrier that controls what passes from the blood into the brain tissue.",
          "tags": [
            "w7-bbb"
          ]
        }
      ]
    }
  ]
};
  var POOL = {
  "mcq": [],
  "stretch": []
};
  w.BIO004_COURSE_CONTENT = w.BIO004_COURSE_CONTENT || { courseLabel: "BIO 004 Human Anatomy", modules: [] };
  if (!w.BIO004_COURSE_CONTENT.modules) w.BIO004_COURSE_CONTENT.modules = [];
  w.BIO004_COURSE_CONTENT.modules.push(MODULE);
  w.BIO004_PRACTICE_POOL = w.BIO004_PRACTICE_POOL || { mcq: [], stretch: [] };
  Array.prototype.push.apply(w.BIO004_PRACTICE_POOL.mcq, POOL.mcq);
  Array.prototype.push.apply(w.BIO004_PRACTICE_POOL.stretch, POOL.stretch);
})(typeof window !== "undefined" ? window : this);
