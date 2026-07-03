/* bio004-w8-cards.js  —  BIO 004 competency-tagged recall + practice pool (Week 8: Spinal Cord, PNS, Cranial Nerves, ANS)
   card-maker-brief.md. Additive: appends to window.BIO004_COURSE_CONTENT and
   window.BIO004_PRACTICE_POOL; never edits existing multiple-choice cards. */
(function (w) {
  "use strict";
  var MODULE = {
  "id": "m-w8",
  "week": 8,
  "title": "Week 8: Spinal Cord, PNS, Cranial Nerves, ANS",
  "topics": [
    {
      "id": "t-w8-ns-organization",
      "title": "Nervous system divisions",
      "competencyId": "w8-ns-organization",
      "summary": "Nervous system divisions (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-ns-organization-r1",
          "competencyId": "w8-ns-organization",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Name the two main divisions of the nervous system.",
          "a": "The central nervous system (CNS) and the peripheral nervous system (PNS).",
          "tags": [
            "w8-ns-organization"
          ]
        },
        {
          "id": "w8-ns-organization-r2",
          "competencyId": "w8-ns-organization",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What makes up the CNS?",
          "a": "The brain and the spinal cord.",
          "tags": [
            "w8-ns-organization"
          ]
        },
        {
          "id": "w8-ns-organization-r3",
          "competencyId": "w8-ns-organization",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Name the three functions of the nervous system.",
          "a": "Sensory function, integrative function, and motor function.",
          "tags": [
            "w8-ns-organization"
          ]
        },
        {
          "id": "w8-ns-organization-r4",
          "competencyId": "w8-ns-organization",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Compare the somatic and autonomic nervous systems by what each controls.",
          "a": "The somatic system controls skeletal muscle (voluntary); the autonomic system controls smooth muscle, cardiac muscle, and glands (involuntary).",
          "tags": [
            "w8-ns-organization"
          ]
        },
        {
          "id": "w8-ns-organization-r5",
          "competencyId": "w8-ns-organization",
          "type": "recall",
          "dok": 3,
          "facet": "lecture",
          "q": "Which ANS division supports fight or flight, and which rest and digest?",
          "a": "The sympathetic division supports fight or flight; the parasympathetic division supports rest and digest.",
          "tags": [
            "w8-ns-organization"
          ]
        }
      ]
    },
    {
      "id": "t-w8-neuron-parts",
      "title": "Neuron structure",
      "competencyId": "w8-neuron-parts",
      "summary": "Neuron structure (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-neuron-parts-r1",
          "competencyId": "w8-neuron-parts",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three basic parts of a neuron.",
          "a": "The cell body (soma), the dendrites, and the axon.",
          "tags": [
            "w8-neuron-parts"
          ]
        },
        {
          "id": "w8-neuron-parts-r2",
          "competencyId": "w8-neuron-parts",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What do dendrites do?",
          "a": "They receive incoming signals.",
          "tags": [
            "w8-neuron-parts"
          ]
        },
        {
          "id": "w8-neuron-parts-r3",
          "competencyId": "w8-neuron-parts",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What does the axon do?",
          "a": "It carries the nerve impulse away toward other cells.",
          "tags": [
            "w8-neuron-parts"
          ]
        },
        {
          "id": "w8-neuron-parts-r4",
          "competencyId": "w8-neuron-parts",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What is the axon hillock?",
          "a": "The cone-shaped region where the cell body joins the axon.",
          "tags": [
            "w8-neuron-parts"
          ]
        },
        {
          "id": "w8-neuron-parts-r5",
          "competencyId": "w8-neuron-parts",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Why does an injury that separates an axon from its cell body kill the axon beyond the cut?",
          "a": "The axon depends on the cell body for proteins, so it dies when cut off from it.",
          "tags": [
            "w8-neuron-parts"
          ]
        }
      ]
    },
    {
      "id": "t-w8-neuron-classification",
      "title": "Neuron classification",
      "competencyId": "w8-neuron-classification",
      "summary": "Neuron classification (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-neuron-classification-r1",
          "competencyId": "w8-neuron-classification",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three structural classes of neurons by shape.",
          "a": "Multipolar, bipolar, and unipolar neurons.",
          "tags": [
            "w8-neuron-classification"
          ]
        },
        {
          "id": "w8-neuron-classification-r2",
          "competencyId": "w8-neuron-classification",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which structural type is most common, and where is it found?",
          "a": "The multipolar neuron, in the brain and cord and as motor neurons.",
          "tags": [
            "w8-neuron-classification"
          ]
        },
        {
          "id": "w8-neuron-classification-r3",
          "competencyId": "w8-neuron-classification",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which shape is typical of a sensory neuron?",
          "a": "Unipolar.",
          "tags": [
            "w8-neuron-classification"
          ]
        },
        {
          "id": "w8-neuron-classification-r4",
          "competencyId": "w8-neuron-classification",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Name the three functional classes of neurons.",
          "a": "Sensory (afferent), motor (efferent), and interneurons.",
          "tags": [
            "w8-neuron-classification"
          ]
        },
        {
          "id": "w8-neuron-classification-r5",
          "competencyId": "w8-neuron-classification",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "A neuron carries input toward the CNS and is unipolar. Classify it both ways.",
          "a": "Functionally sensory (afferent), structurally unipolar.",
          "tags": [
            "w8-neuron-classification"
          ]
        }
      ]
    },
    {
      "id": "t-w8-neuroglia",
      "title": "Neuroglia",
      "competencyId": "w8-neuroglia",
      "summary": "Neuroglia (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-neuroglia-r1",
          "competencyId": "w8-neuroglia",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What are neuroglia, and how do they differ from neurons in dividing?",
          "a": "The support cells of nervous tissue; unlike neurons, they can still divide.",
          "tags": [
            "w8-neuroglia"
          ]
        },
        {
          "id": "w8-neuroglia-r2",
          "competencyId": "w8-neuroglia",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which CNS glia form myelin, and which PNS glia form myelin?",
          "a": "Oligodendrocytes in the CNS; Schwann cells in the PNS.",
          "tags": [
            "w8-neuroglia"
          ]
        },
        {
          "id": "w8-neuroglia-r3",
          "competencyId": "w8-neuroglia",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which glia are the small phagocytes that remove debris and microbes?",
          "a": "Microglia.",
          "tags": [
            "w8-neuroglia"
          ]
        },
        {
          "id": "w8-neuroglia-r4",
          "competencyId": "w8-neuroglia",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What do astrocytes do?",
          "a": "They give structural support, help form the blood-brain barrier, guide neuron growth, and maintain the chemical environment.",
          "tags": [
            "w8-neuroglia"
          ]
        },
        {
          "id": "w8-neuroglia-r5",
          "competencyId": "w8-neuroglia",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "A brain tumor almost never arises from neurons. Which cells does it usually come from, and why?",
          "a": "Glial cells, because they can still divide while neurons cannot; a glioma is the common brain tumor.",
          "tags": [
            "w8-neuroglia"
          ]
        }
      ]
    },
    {
      "id": "t-w8-tissue-collections",
      "title": "CNS and PNS tissue terms",
      "competencyId": "w8-tissue-collections",
      "summary": "CNS and PNS tissue terms (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-tissue-collections-r1",
          "competencyId": "w8-tissue-collections",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "In the CNS, what is a cluster of cell bodies called, and a bundle of axons?",
          "a": "A nucleus and a tract.",
          "tags": [
            "w8-tissue-collections"
          ]
        },
        {
          "id": "w8-tissue-collections-r2",
          "competencyId": "w8-tissue-collections",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "In the PNS, what is a cluster of cell bodies called, and a bundle of axons?",
          "a": "A ganglion and a nerve.",
          "tags": [
            "w8-tissue-collections"
          ]
        },
        {
          "id": "w8-tissue-collections-r3",
          "competencyId": "w8-tissue-collections",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is white matter made of?",
          "a": "Myelinated axons.",
          "tags": [
            "w8-tissue-collections"
          ]
        },
        {
          "id": "w8-tissue-collections-r4",
          "competencyId": "w8-tissue-collections",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "What is gray matter made of?",
          "a": "Neuron cell bodies, dendrites, unmyelinated axons, and neuroglia.",
          "tags": [
            "w8-tissue-collections"
          ]
        },
        {
          "id": "w8-tissue-collections-r5",
          "competencyId": "w8-tissue-collections",
          "type": "recall",
          "dok": 3,
          "facet": "lecture",
          "q": "Match the four terms: which pair is CNS and which is PNS?",
          "a": "Nucleus and tract are CNS; ganglion and nerve are PNS.",
          "tags": [
            "w8-tissue-collections"
          ]
        }
      ]
    },
    {
      "id": "t-w8-gray-white-matter",
      "title": "Gray and white matter",
      "competencyId": "w8-gray-white-matter",
      "summary": "Gray and white matter (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-gray-white-matter-r1",
          "competencyId": "w8-gray-white-matter",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "In the spinal cord, where is gray matter and where is white matter?",
          "a": "Gray matter is on the inside; white matter is on the outside.",
          "tags": [
            "w8-gray-white-matter"
          ]
        },
        {
          "id": "w8-gray-white-matter-r2",
          "competencyId": "w8-gray-white-matter",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "In the brain, where is gray matter and where is white matter?",
          "a": "Gray matter is on the outside; white matter is on the inside.",
          "tags": [
            "w8-gray-white-matter"
          ]
        },
        {
          "id": "w8-gray-white-matter-r3",
          "competencyId": "w8-gray-white-matter",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What shape does the gray matter form in a cord cross-section?",
          "a": "A butterfly (or H) shape.",
          "tags": [
            "w8-gray-white-matter"
          ]
        },
        {
          "id": "w8-gray-white-matter-r4",
          "competencyId": "w8-gray-white-matter",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Compare the arrangement of gray and white matter in the brain versus the spinal cord.",
          "a": "In the brain gray is outside and white inside; in the cord this is reversed.",
          "tags": [
            "w8-gray-white-matter"
          ]
        },
        {
          "id": "w8-gray-white-matter-r5",
          "competencyId": "w8-gray-white-matter",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "A cord cross-section shows gray on the inside. Why does this suit the cord's job as a relay and reflex center?",
          "a": "The central gray processes signals while the surrounding white tracts carry them up and down.",
          "tags": [
            "w8-gray-white-matter"
          ]
        }
      ]
    },
    {
      "id": "t-w8-reflex-arc",
      "title": "Reflex arc components",
      "competencyId": "w8-reflex-arc",
      "summary": "Reflex arc components (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-reflex-arc-r1",
          "competencyId": "w8-reflex-arc",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Name the five components of a reflex arc in order.",
          "a": "Receptor, sensory neuron, integration center, motor neuron, effector.",
          "tags": [
            "w8-reflex-arc"
          ]
        },
        {
          "id": "w8-reflex-arc-r2",
          "competencyId": "w8-reflex-arc",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is a reflex?",
          "a": "A fast, automatic, predictable response to a stimulus.",
          "tags": [
            "w8-reflex-arc"
          ]
        },
        {
          "id": "w8-reflex-arc-r3",
          "competencyId": "w8-reflex-arc",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is the effector in a reflex arc?",
          "a": "The muscle or gland that carries out the response.",
          "tags": [
            "w8-reflex-arc"
          ]
        },
        {
          "id": "w8-reflex-arc-r4",
          "competencyId": "w8-reflex-arc",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Why can a reflex happen without involving the brain?",
          "a": "The reflex arc is completed in the spinal cord, so it needs no brain input.",
          "tags": [
            "w8-reflex-arc"
          ]
        },
        {
          "id": "w8-reflex-arc-r5",
          "competencyId": "w8-reflex-arc",
          "type": "recall",
          "dok": 3,
          "facet": "lecture",
          "q": "A tap below the kneecap makes the leg kick. Which single pathway does this check, and what does a missing response mean?",
          "a": "It checks the whole reflex arc; a missing reflex points to a break along that pathway.",
          "tags": [
            "w8-reflex-arc"
          ]
        }
      ]
    },
    {
      "id": "t-w8-cord-external",
      "title": "Spinal cord external anatomy",
      "competencyId": "w8-cord-external",
      "summary": "Spinal cord external anatomy (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-cord-external-r1",
          "competencyId": "w8-cord-external",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Where does the spinal cord run, and where does it end?",
          "a": "From the medulla down the vertebral canal, ending at the conus medullaris near the L1 to L2 disc.",
          "tags": [
            "w8-cord-external"
          ]
        },
        {
          "id": "w8-cord-external-r2",
          "competencyId": "w8-cord-external",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the two enlargements of the spinal cord.",
          "a": "The cervical enlargement and the lumbar enlargement.",
          "tags": [
            "w8-cord-external"
          ]
        },
        {
          "id": "w8-cord-external-r3",
          "competencyId": "w8-cord-external",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the cauda equina?",
          "a": "The hair-like bundle of nerve roots that descends past the conus medullaris.",
          "tags": [
            "w8-cord-external"
          ]
        },
        {
          "id": "w8-cord-external-r4",
          "competencyId": "w8-cord-external",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What are the anterior median fissure and posterior median sulcus?",
          "a": "The deep front groove and the shallow back groove that divide the cord into right and left halves.",
          "tags": [
            "w8-cord-external"
          ]
        },
        {
          "id": "w8-cord-external-r5",
          "competencyId": "w8-cord-external",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Why does the cord end near L1 to L2 while the vertebral column runs lower?",
          "a": "The cord stops lengthening around age 4 to 5 while the column keeps growing.",
          "tags": [
            "w8-cord-external"
          ]
        }
      ]
    },
    {
      "id": "t-w8-cord-roots",
      "title": "Roots, rootlets, root ganglion",
      "competencyId": "w8-cord-roots",
      "summary": "Roots, rootlets, root ganglion (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-cord-roots-r1",
          "competencyId": "w8-cord-roots",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What are the two roots of a spinal nerve?",
          "a": "The posterior (dorsal) sensory root and the anterior (ventral) motor root.",
          "tags": [
            "w8-cord-roots"
          ]
        },
        {
          "id": "w8-cord-roots-r2",
          "competencyId": "w8-cord-roots",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What does the posterior (dorsal) root carry?",
          "a": "Sensory axons from receptors into the cord.",
          "tags": [
            "w8-cord-roots"
          ]
        },
        {
          "id": "w8-cord-roots-r3",
          "competencyId": "w8-cord-roots",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What does the posterior root ganglion hold?",
          "a": "The cell bodies of the sensory neurons.",
          "tags": [
            "w8-cord-roots"
          ]
        },
        {
          "id": "w8-cord-roots-r4",
          "competencyId": "w8-cord-roots",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "How is a mixed spinal nerve formed?",
          "a": "Where the posterior and anterior roots join, carrying both sensory and motor axons.",
          "tags": [
            "w8-cord-roots"
          ]
        },
        {
          "id": "w8-cord-roots-r5",
          "competencyId": "w8-cord-roots",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Shingles follows one strip of skin. Which structure harbors the virus, and why the strip?",
          "a": "The posterior root ganglion, home to that segment's sensory cell bodies, so the rash follows that segment's skin.",
          "tags": [
            "w8-cord-roots"
          ]
        }
      ]
    },
    {
      "id": "t-w8-cord-internal",
      "title": "Spinal cord internal anatomy",
      "competencyId": "w8-cord-internal",
      "summary": "Spinal cord internal anatomy (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-cord-internal-r1",
          "competencyId": "w8-cord-internal",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three gray horns of the spinal cord.",
          "a": "The posterior (dorsal), lateral, and anterior (ventral) horns.",
          "tags": [
            "w8-cord-internal"
          ]
        },
        {
          "id": "w8-cord-internal-r2",
          "competencyId": "w8-cord-internal",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What does the anterior (ventral) horn contain?",
          "a": "Somatic motor nuclei that drive skeletal muscle.",
          "tags": [
            "w8-cord-internal"
          ]
        },
        {
          "id": "w8-cord-internal-r3",
          "competencyId": "w8-cord-internal",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "In which segments is the lateral horn present?",
          "a": "Only in the thoracic and lumbar segments.",
          "tags": [
            "w8-cord-internal"
          ]
        },
        {
          "id": "w8-cord-internal-r4",
          "competencyId": "w8-cord-internal",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What is the central canal, and what is it continuous with?",
          "a": "The small CSF channel at the center of the cord, continuous with the fourth ventricle.",
          "tags": [
            "w8-cord-internal"
          ]
        },
        {
          "id": "w8-cord-internal-r5",
          "competencyId": "w8-cord-internal",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Compare ascending and descending tracts by direction and function.",
          "a": "Ascending (sensory) tracts carry signals up to the brain; descending (motor) tracts carry commands down from the brain.",
          "tags": [
            "w8-cord-internal"
          ]
        }
      ]
    },
    {
      "id": "t-w8-nerve-structure",
      "title": "Nerve connective tissue wrappings",
      "competencyId": "w8-nerve-structure",
      "summary": "Nerve connective tissue wrappings (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-nerve-structure-r1",
          "competencyId": "w8-nerve-structure",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is a nerve?",
          "a": "A cordlike PNS organ, a bundle of peripheral axons wrapped in connective tissue.",
          "tags": [
            "w8-nerve-structure"
          ]
        },
        {
          "id": "w8-nerve-structure-r2",
          "competencyId": "w8-nerve-structure",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three connective tissue wrappings of a nerve, from inner to outer.",
          "a": "Endoneurium (each axon), perineurium (each fascicle), epineurium (whole nerve).",
          "tags": [
            "w8-nerve-structure"
          ]
        },
        {
          "id": "w8-nerve-structure-r3",
          "competencyId": "w8-nerve-structure",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is a fascicle in a nerve?",
          "a": "A bundle of axons grouped together.",
          "tags": [
            "w8-nerve-structure"
          ]
        },
        {
          "id": "w8-nerve-structure-r4",
          "competencyId": "w8-nerve-structure",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Compare the endoneurium and the epineurium.",
          "a": "The endoneurium wraps each axon; the epineurium wraps the entire nerve.",
          "tags": [
            "w8-nerve-structure"
          ]
        },
        {
          "id": "w8-nerve-structure-r5",
          "competencyId": "w8-nerve-structure",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "The three nerve wrappings echo the three muscle wrappings. Match each nerve layer to what it wraps.",
          "a": "Endoneurium wraps one axon, perineurium wraps a fascicle, epineurium wraps the whole nerve.",
          "tags": [
            "w8-nerve-structure"
          ]
        }
      ]
    },
    {
      "id": "t-w8-spinal-nerves-rami",
      "title": "Spinal nerves and rami",
      "competencyId": "w8-spinal-nerves-rami",
      "summary": "Spinal nerves and rami (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-spinal-nerves-rami-r1",
          "competencyId": "w8-spinal-nerves-rami",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "How many pairs of spinal nerves are there, and are they mixed?",
          "a": "Thirty-one pairs, all mixed nerves carrying sensory and motor axons.",
          "tags": [
            "w8-spinal-nerves-rami"
          ]
        },
        {
          "id": "w8-spinal-nerves-rami-r2",
          "competencyId": "w8-spinal-nerves-rami",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Give the count of spinal nerve pairs by region.",
          "a": "8 cervical, 12 thoracic, 5 lumbar, 5 sacral, and 1 coccygeal.",
          "tags": [
            "w8-spinal-nerves-rami"
          ]
        },
        {
          "id": "w8-spinal-nerves-rami-r3",
          "competencyId": "w8-spinal-nerves-rami",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What does the posterior (dorsal) ramus supply?",
          "a": "The deep muscles and skin of the posterior trunk.",
          "tags": [
            "w8-spinal-nerves-rami"
          ]
        },
        {
          "id": "w8-spinal-nerves-rami-r4",
          "competencyId": "w8-spinal-nerves-rami",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What does the anterior (ventral) ramus supply, and what do these rami form?",
          "a": "The limbs and the lateral and anterior trunk; they form the plexuses.",
          "tags": [
            "w8-spinal-nerves-rami"
          ]
        },
        {
          "id": "w8-spinal-nerves-rami-r5",
          "competencyId": "w8-spinal-nerves-rami",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Through which opening does a spinal nerve exit the vertebral canal?",
          "a": "The intervertebral foramen.",
          "tags": [
            "w8-spinal-nerves-rami"
          ]
        }
      ]
    },
    {
      "id": "t-w8-cranial-nerves",
      "title": "Cranial nerves",
      "competencyId": "w8-cranial-nerves",
      "summary": "Cranial nerves (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-cranial-nerves-r1",
          "competencyId": "w8-cranial-nerves",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "How many pairs of cranial nerves are there, and where do they arise?",
          "a": "Twelve pairs, arising from the brain.",
          "tags": [
            "w8-cranial-nerves"
          ]
        },
        {
          "id": "w8-cranial-nerves-r2",
          "competencyId": "w8-cranial-nerves",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which cranial nerve is the vagus, and what is special about its reach?",
          "a": "CN X, the vagus, which reaches into the thorax and abdomen.",
          "tags": [
            "w8-cranial-nerves"
          ]
        },
        {
          "id": "w8-cranial-nerves-r3",
          "competencyId": "w8-cranial-nerves",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which cranial nerve carries vision, and which carries smell?",
          "a": "The optic nerve (CN II) carries vision; the olfactory nerve (CN I) carries smell.",
          "tags": [
            "w8-cranial-nerves"
          ]
        },
        {
          "id": "w8-cranial-nerves-r4",
          "competencyId": "w8-cranial-nerves",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which cranial nerve supplies the muscles of facial expression, and which the muscles of mastication?",
          "a": "The facial nerve (CN VII) for expression; the trigeminal nerve (CN V) for mastication.",
          "tags": [
            "w8-cranial-nerves"
          ]
        },
        {
          "id": "w8-cranial-nerves-r5",
          "competencyId": "w8-cranial-nerves",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "A patient cannot shrug the shoulders or turn the head against resistance. Which cranial nerve is affected?",
          "a": "The accessory nerve (CN XI).",
          "tags": [
            "w8-cranial-nerves"
          ]
        }
      ]
    },
    {
      "id": "t-w8-nerve-plexuses",
      "title": "Nerve plexuses",
      "competencyId": "w8-nerve-plexuses",
      "summary": "Nerve plexuses (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-nerve-plexuses-r1",
          "competencyId": "w8-nerve-plexuses",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the four major nerve plexuses.",
          "a": "The cervical, brachial, lumbar, and sacral plexuses.",
          "tags": [
            "w8-nerve-plexuses"
          ]
        },
        {
          "id": "w8-nerve-plexuses-r2",
          "competencyId": "w8-nerve-plexuses",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which plexus gives off the phrenic nerve to the diaphragm, and from which levels?",
          "a": "The cervical plexus, from C1 to C4.",
          "tags": [
            "w8-nerve-plexuses"
          ]
        },
        {
          "id": "w8-nerve-plexuses-r3",
          "competencyId": "w8-nerve-plexuses",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which plexus serves the upper limb, and from which levels?",
          "a": "The brachial plexus, from C5 to T1.",
          "tags": [
            "w8-nerve-plexuses"
          ]
        },
        {
          "id": "w8-nerve-plexuses-r4",
          "competencyId": "w8-nerve-plexuses",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which plexus gives off the sciatic nerve?",
          "a": "The sacral plexus.",
          "tags": [
            "w8-nerve-plexuses"
          ]
        },
        {
          "id": "w8-nerve-plexuses-r5",
          "competencyId": "w8-nerve-plexuses",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Which spinal nerves do not form plexuses, and where do they run instead?",
          "a": "The thoracic anterior rami; they run straight as the intercostal nerves.",
          "tags": [
            "w8-nerve-plexuses"
          ]
        }
      ]
    },
    {
      "id": "t-w8-ans-pathway",
      "title": "Autonomic two-neuron pathway",
      "competencyId": "w8-ans-pathway",
      "summary": "Autonomic two-neuron pathway (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-ans-pathway-r1",
          "competencyId": "w8-ans-pathway",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What does the autonomic nervous system control?",
          "a": "Smooth muscle, cardiac muscle, and glands, involuntarily.",
          "tags": [
            "w8-ans-pathway"
          ]
        },
        {
          "id": "w8-ans-pathway-r2",
          "competencyId": "w8-ans-pathway",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "How many neurons are in an autonomic motor pathway, and what connects them?",
          "a": "Two neurons, a preganglionic and a postganglionic, connected at an autonomic ganglion.",
          "tags": [
            "w8-ans-pathway"
          ]
        },
        {
          "id": "w8-ans-pathway-r3",
          "competencyId": "w8-ans-pathway",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Name the two divisions of the ANS.",
          "a": "The sympathetic and parasympathetic divisions.",
          "tags": [
            "w8-ans-pathway"
          ]
        },
        {
          "id": "w8-ans-pathway-r4",
          "competencyId": "w8-ans-pathway",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Compare the general effects of the sympathetic and parasympathetic divisions.",
          "a": "Sympathetic prepares for fight or flight; parasympathetic supports rest and digest.",
          "tags": [
            "w8-ans-pathway"
          ]
        },
        {
          "id": "w8-ans-pathway-r5",
          "competencyId": "w8-ans-pathway",
          "type": "recall",
          "dok": 3,
          "facet": "lecture",
          "q": "Why does the autonomic pathway use two neurons in series rather than one?",
          "a": "The preganglionic neuron synapses in a ganglion on the postganglionic neuron, which then reaches the effector.",
          "tags": [
            "w8-ans-pathway"
          ]
        }
      ]
    },
    {
      "id": "t-w8-synapse-parts",
      "title": "Synapse structures",
      "competencyId": "w8-synapse-parts",
      "summary": "Synapse structures (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-synapse-parts-r1",
          "competencyId": "w8-synapse-parts",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is a synapse?",
          "a": "The site where a neuron communicates with another neuron, a muscle, or a gland.",
          "tags": [
            "w8-synapse-parts"
          ]
        },
        {
          "id": "w8-synapse-parts-r2",
          "competencyId": "w8-synapse-parts",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the synaptic cleft?",
          "a": "The narrow gap the neurotransmitter diffuses across between the two cells.",
          "tags": [
            "w8-synapse-parts"
          ]
        },
        {
          "id": "w8-synapse-parts-r3",
          "competencyId": "w8-synapse-parts",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What do synaptic vesicles store, and where are they?",
          "a": "Neurotransmitter, stored in the synaptic end bulbs of the axon terminal.",
          "tags": [
            "w8-synapse-parts"
          ]
        }
      ]
    },
    {
      "id": "t-w8-myelination",
      "title": "Myelination and regeneration",
      "competencyId": "w8-myelination",
      "summary": "Myelination and regeneration (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-myelination-r1",
          "competencyId": "w8-myelination",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the myelin sheath, and what does it do?",
          "a": "A fatty wrapping around an axon that insulates it and speeds the nerve impulse.",
          "tags": [
            "w8-myelination"
          ]
        },
        {
          "id": "w8-myelination-r2",
          "competencyId": "w8-myelination",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What are the nodes of Ranvier?",
          "a": "The gaps in the myelin sheath along the axon.",
          "tags": [
            "w8-myelination"
          ]
        },
        {
          "id": "w8-myelination-r3",
          "competencyId": "w8-myelination",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Why can a cut nerve in the arm regrow but a cut tract in the cord usually cannot?",
          "a": "PNS Schwann cells have a neurolemma that guides regrowth; CNS oligodendrocytes lack one.",
          "tags": [
            "w8-myelination"
          ]
        }
      ]
    },
    {
      "id": "t-w8-sensory-receptors",
      "title": "Sensory receptor classification",
      "competencyId": "w8-sensory-receptors",
      "summary": "Sensory receptor classification (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-sensory-receptors-r1",
          "competencyId": "w8-sensory-receptors",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name three types of sensory receptor by what they detect.",
          "a": "Mechanoreceptors, thermoreceptors, and photoreceptors (also chemoreceptors and nociceptors).",
          "tags": [
            "w8-sensory-receptors"
          ]
        },
        {
          "id": "w8-sensory-receptors-r2",
          "competencyId": "w8-sensory-receptors",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What do nociceptors detect?",
          "a": "Pain.",
          "tags": [
            "w8-sensory-receptors"
          ]
        },
        {
          "id": "w8-sensory-receptors-r3",
          "competencyId": "w8-sensory-receptors",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What is the general job of a sensory receptor?",
          "a": "To detect a stimulus and trigger a signal in a sensory neuron.",
          "tags": [
            "w8-sensory-receptors"
          ]
        }
      ]
    },
    {
      "id": "t-w8-ans-ganglia-divisions",
      "title": "Autonomic ganglia and divisions",
      "competencyId": "w8-ans-ganglia-divisions",
      "summary": "Autonomic ganglia and divisions (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-ans-ganglia-divisions-r1",
          "competencyId": "w8-ans-ganglia-divisions",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Name the two divisions of the autonomic nervous system.",
          "a": "The sympathetic and parasympathetic divisions.",
          "tags": [
            "w8-ans-ganglia-divisions"
          ]
        },
        {
          "id": "w8-ans-ganglia-divisions-r2",
          "competencyId": "w8-ans-ganglia-divisions",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Where do the preganglionic neurons of each ANS division arise?",
          "a": "Sympathetic from the thoracolumbar cord; parasympathetic from the brainstem and sacral cord.",
          "tags": [
            "w8-ans-ganglia-divisions"
          ]
        },
        {
          "id": "w8-ans-ganglia-divisions-r3",
          "competencyId": "w8-ans-ganglia-divisions",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Which division uses ganglia in the sympathetic trunk near the cord?",
          "a": "The sympathetic division.",
          "tags": [
            "w8-ans-ganglia-divisions"
          ]
        }
      ]
    },
    {
      "id": "t-w8-reflex-types",
      "title": "Types of reflexes",
      "competencyId": "w8-reflex-types",
      "summary": "Types of reflexes (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-reflex-types-r1",
          "competencyId": "w8-reflex-types",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Compare a somatic and an autonomic reflex by their effector.",
          "a": "A somatic reflex acts on skeletal muscle (like the knee-jerk); an autonomic reflex acts on smooth muscle, cardiac muscle, or a gland (like the pupillary light reflex).",
          "tags": [
            "w8-reflex-types"
          ]
        }
      ]
    },
    {
      "id": "t-w8-neuronal-pools",
      "title": "Neuronal pools and pathways",
      "competencyId": "w8-neuronal-pools",
      "summary": "Neuronal pools and pathways (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w8-neuronal-pools-r1",
          "competencyId": "w8-neuronal-pools",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Compare convergence and divergence in a neuronal pool.",
          "a": "In convergence many neurons feed onto one; in divergence one neuron spreads its signal to many.",
          "tags": [
            "w8-neuronal-pools"
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
