/* ============================================================
   BIO 004 Human Anatomy, Fall 2026
   bio004-m3-sheet-data.js

   MODULE 3 NOTE SHEET DATA. The Module 3 competencies from
   competenciesfall2026.js (weeks 7, 8 and 9), grouped by the
   concept video that teaches them, each carrying the two brain
   dump prompts that print beside the drawing box on the note
   sheet and in the brain dump packet. The extraocular muscles
   (w7-lab-extraocular) are held for a later module and are not
   in this set, so there are 38 sheets.

   Pages that load it:
     BIO004-M3-Note-Sheet-Packet.html   the prompts list and the sheets

   SHAPE
     items[] = { n, id, week, system, name, can, lab, lecture,
                 a:{form, text, push}, b:{form, text, push} }

   A and B are never the same question twice. Every prompt asks
   for something drawn. None can be answered with a paragraph.
   ============================================================ */
window.BIO004_M3_SHEET = {
 "module": 3,
 "title": "Muscle, Heart, Blood Vessels, and Blood",
 "sets": [
  {
   "key": "muscle",
   "title": "Muscle structure and sarcomeres",
   "video": "muscle-structure-concept-videos.html",
   "items": [
    1,
    2,
    3,
    4,
    5,
    6,
    7
   ]
  },
  {
   "key": "fascicle",
   "title": "Fascicle arrangement and lever systems",
   "video": "muscle-fascicles-concept-videos.html",
   "items": [
    8,
    9,
    10
   ]
  },
  {
   "key": "limb",
   "title": "Muscles of the head, neck, trunk, and upper limb, and the nerves of the arm",
   "video": "muscular-system-concept-videos.html",
   "items": [
    11,
    12,
    13,
    14,
    15,
    16,
    17
   ]
  },
  {
   "key": "heart",
   "title": "The heart",
   "video": "heart-concept-videos.html",
   "items": [
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25
   ]
  },
  {
   "key": "conduction",
   "title": "The cardiac conduction system",
   "video": "cardiac-conduction-concept-videos.html",
   "items": [
    26,
    27
   ]
  },
  {
   "key": "vessels",
   "title": "Blood vessels, structure, routes, and disorders",
   "video": "blood-vessels-concept-videos.html",
   "items": [
    28,
    29,
    30,
    31,
    32,
    33,
    34
   ]
  },
  {
   "key": "blood",
   "title": "Blood",
   "video": "blood-concept-videos.html",
   "items": [
    35,
    36,
    37,
    38
   ]
  }
 ],
 "weeks": {
  "7": "The Heart and Cardiac Conduction",
  "8": "Muscle Structure, Fascicles and Levers, Blood Vessels, and Head and Neck Muscles",
  "9": "Blood, and the Muscles, Vessels, and Nerves of the Upper Limb"
 },
 "items": [
  {
   "n": 1,
   "id": "w1-muscle-tissue-id",
   "week": 8,
   "system": "Tissues and Histology",
   "name": "Muscle tissue identification",
   "can": "Recognize the three muscle tissue types, skeletal, cardiac, and smooth, by striations, cell shape, and number of nuclei.",
   "lab": true,
   "lecture": false,
   "a": {
    "form": "Three slide views",
    "text": "Divide the box into three panels, one per muscle tissue, and draw each one the way it looks through the microscope. Show the cell shape, where the nuclei sit and how many there are, and whether you can see striations. In the cardiac panel, draw the branching and the intercalated discs.",
    "push": "Under each panel, write the one feature you would look for first to name that tissue on a lab slide."
   },
   "b": {
    "form": "Identification key",
    "text": "Draw a yes or no key that starts with one question, \"Can I see striations?\", and branches until it lands on skeletal, cardiac, or smooth muscle. Put a tiny sketch of the cells at each of the three endpoints.",
    "push": "Add one more branch that separates cardiac from skeletal muscle if the slide shows only a single nucleus in view."
   }
  },
  {
   "n": 2,
   "id": "w4-muscle-tissue-types",
   "week": 8,
   "system": "Muscle Structure",
   "name": "Three muscle tissue types",
   "can": "Compare skeletal, cardiac, and smooth muscle by location, striations, control, and cell features including intercalated discs.",
   "lab": true,
   "lecture": true,
   "a": {
    "form": "Comparison table",
    "text": "Draw a table with skeletal, cardiac, and smooth muscle across the top. Rows: where it is found, cell shape, number and position of nuclei, striations, voluntary or involuntary control, and special cell features such as intercalated discs. Use a word or a tiny sketch in each cell, not a sentence.",
    "push": "Circle every cell in the cardiac column that is different from both skeletal and smooth muscle."
   },
   "b": {
    "form": "Body map",
    "text": "Draw a simple body outline. Place one skeletal muscle, the heart, and two organs with smooth muscle in their walls, and label each with the muscle tissue it contains. Beside each label, draw a small sketch of what that tissue's cells look like.",
    "push": "Mark with a star one location where you would find two different muscle tissues close together, such as the esophagus, and name both."
   }
  },
  {
   "n": 3,
   "id": "w4-ct-coverings",
   "week": 8,
   "system": "Muscle Structure",
   "name": "Connective tissue coverings",
   "can": "Name the epimysium, perimysium, and endomysium and trace how the three sheaths merge into the tendon that anchors muscle to bone.",
   "lab": false,
   "lecture": true,
   "a": {
    "form": "Labeled cross section",
    "text": "Draw a whole skeletal muscle cut across. Label the epimysium around the whole muscle, the perimysium around each fascicle, and the endomysium around a single fiber. Then draw the muscle's end and show all three sheaths running together into the tendon, and the tendon attaching to bone.",
    "push": "Color the three sheaths in three different shades so the layers are easy to follow into the tendon."
   },
   "b": {
    "form": "Nesting diagram",
    "text": "Draw three nested boxes, one inside the other, labeled whole muscle, fascicle, and muscle fiber. Write the name of the connective tissue sheath on the border of each box. Draw arrows from all three borders converging into one tendon at the end, then into bone.",
    "push": "Name one clinical problem, such as a strain or tendon rupture, and mark on your diagram where it happens."
   }
  },
  {
   "n": 4,
   "id": "w4-muscle-organization",
   "week": 8,
   "system": "Muscle Structure",
   "name": "Levels of organization",
   "can": "Order the nested levels of skeletal muscle from whole muscle through fascicle, fiber, and myofibril down to the myofilament.",
   "lab": false,
   "lecture": true,
   "a": {
    "form": "Zoom sequence",
    "text": "Draw a row of five pictures, each one a zoom into the one before it: whole muscle, fascicle, muscle fiber, myofibril, and myofilaments. Label each level and draw a dashed box on each picture showing the part that the next picture enlarges.",
    "push": "Under each picture, write the name of the connective tissue sheath or membrane that wraps that level, or write none."
   },
   "b": {
    "form": "Size ladder",
    "text": "Draw a ladder with the largest level at the top and the smallest at the bottom: whole muscle, fascicle, fiber, myofibril, sarcomere, myofilament. Beside each rung, draw a tiny sketch of that level and note whether it is an organ, a bundle of cells, one cell, a part inside a cell, or a protein.",
    "push": "Circle the rung where one structure becomes one cell."
   }
  },
  {
   "n": 5,
   "id": "w4-muscle-fiber-parts",
   "week": 8,
   "system": "Muscle Structure",
   "name": "Muscle fiber internal structure",
   "can": "Identify the sarcolemma, sarcoplasm, myonuclei, myofibrils, sarcoplasmic reticulum, terminal cisternae, T tubules, and triad of a muscle fiber.",
   "lab": true,
   "lecture": true,
   "a": {
    "form": "Cutaway fiber",
    "text": "Draw one skeletal muscle fiber with a wedge cut out so the inside shows. Label the sarcolemma, sarcoplasm, myonuclei at the edge, myofibrils, sarcoplasmic reticulum wrapping the myofibrils, terminal cisternae, T tubules diving in from the surface, and one triad.",
    "push": "Draw a zoomed box of the triad and label the two terminal cisternae and the one T tubule that make it up."
   },
   "b": {
    "form": "Part-to-meaning grid",
    "text": "Draw a grid with each fiber part down the side: sarcolemma, sarcoplasm, myonuclei, myofibril, sarcoplasmic reticulum, terminal cisternae, T tubule, triad. Across the top: what it is, where it sits in the fiber, and a tiny sketch. Keep each cell to a word or a picture.",
    "push": "Put a star beside the two parts that are the same plasma membrane, one on the surface of the fiber and one reaching inward, and name the pair."
   }
  },
  {
   "n": 6,
   "id": "w4-sarcomere",
   "week": 8,
   "system": "Muscle Structure",
   "name": "Sarcomere bands and filaments",
   "can": "Diagram a sarcomere and name the Z disc, A band, I band, H zone, M line, and zone of overlap, stating which filaments occupy each region.",
   "lab": true,
   "lecture": false,
   "a": {
    "form": "Labeled sarcomere",
    "text": "Draw one sarcomere from Z disc to Z disc with thick and thin filaments in place. Label the Z discs, M line, A band, I band, H zone, and the zone of overlap. Draw the thick filaments and thin filaments differently so a reader can tell them apart.",
    "push": "Under the drawing, draw the same sarcomere shortened and mark which bands got narrower and which stayed the same."
   },
   "b": {
    "form": "Region table",
    "text": "Draw a table with the Z disc, M line, A band, I band, H zone, and zone of overlap down the side. Across the top: light or dark on a slide, thick filaments present, thin filaments present, and a tiny sketch of that region. Answer with yes, no, or a mark.",
    "push": "Circle the one band that keeps the same length when the muscle contracts."
   }
  },
  {
   "n": 7,
   "id": "w4-myofilament-proteins",
   "week": 8,
   "system": "Muscle Structure",
   "name": "Myofilament and structural proteins",
   "can": "Distinguish thick from thin filaments by protein and anchor point and identify the roles of titin, nebulin, alpha-actinin, myomesin, and dystrophin.",
   "lab": false,
   "lecture": true,
   "a": {
    "form": "Filament close-up",
    "text": "Draw a close-up of half a sarcomere. Show a thick filament anchored at the M line and a thin filament anchored at the Z disc. Label myosin with its heads, actin, titin running from the Z disc to the M line, nebulin along the thin filament, alpha-actinin in the Z disc, and myomesin at the M line.",
    "push": "Draw a small outline of the fiber's edge and place dystrophin where it links the inside of the fiber to the sarcolemma."
   },
   "b": {
    "form": "Protein sort",
    "text": "Draw two columns headed thick filament side and thin filament side, and a third headed structural and anchoring proteins. Sort myosin, actin, titin, nebulin, alpha-actinin, myomesin, and dystrophin into the columns. Next to each, sketch where it sits in the sarcomere.",
    "push": "Mark the protein that is missing or defective in Duchenne muscular dystrophy and draw where it would normally be."
   }
  },
  {
   "n": 8,
   "id": "w4-fascicle-patterns",
   "week": 8,
   "system": "Fascicle Arrangement",
   "name": "Fascicle arrangement patterns",
   "can": "Identify parallel, fusiform, circular, convergent, and pennate fascicle patterns and give an example muscle for each, relating architecture to power versus range of motion.",
   "lab": false,
   "lecture": true,
   "a": {
    "form": "Pattern gallery",
    "text": "Draw one small muscle for each pattern: parallel, fusiform, circular, convergent, unipennate, bipennate, and multipennate. Draw the fascicles as lines so each pattern's direction shows. Label each with its pattern name and one example muscle.",
    "push": "Mark the pattern that packs in the most fibers and the pattern that shortens the farthest."
   },
   "b": {
    "form": "Pattern sorting table",
    "text": "Draw a table with the seven fascicle patterns down the side. Across the top: a tiny sketch of the fascicle direction, one example muscle, and whether the design favors power or range of motion. Keep each cell to a word or a sketch.",
    "push": "Draw an arrow from the pennate rows to a note that says where the tendon runs relative to the fascicles."
   }
  },
  {
   "n": 9,
   "id": "w4-muscle-roles-naming",
   "week": 8,
   "system": "Fascicle Arrangement",
   "name": "Muscle roles and naming",
   "can": "Classify agonist, antagonist, synergist, and fixator roles in a movement and decode a muscle name from its direction, size, shape, location, action, origins, or attachments.",
   "lab": false,
   "lecture": true,
   "a": {
    "form": "Movement scene",
    "text": "Draw an arm bending at the elbow while holding a cup. Label the agonist, the antagonist, one synergist, and one fixator that steadies the shoulder. Draw arrows showing which way each muscle pulls.",
    "push": "Under the drawing, write the same four roles for straightening the elbow and show which muscles switch jobs."
   },
   "b": {
    "form": "Name decoder",
    "text": "Pick six muscle names from this module, such as pectoralis major, extensor carpi radialis longus, and sternocleidomastoid. Draw a table with each name broken into its parts. Across the top: the naming clue used (direction, size, shape, location, action, number of origins, or attachments) and what each part tells you.",
    "push": "Circle every name in your table that tells you where the muscle attaches, then add sternocleidomastoid if it is not already there."
   }
  },
  {
   "n": 10,
   "id": "w4-lever-systems",
   "week": 8,
   "system": "Fascicle Arrangement",
   "name": "Lever systems",
   "can": "Identify the fulcrum, effort, and load of a lever and classify first-, second-, and third-class levers with a body example of each.",
   "lab": false,
   "lecture": true,
   "a": {
    "form": "Three levers",
    "text": "Draw a first class, a second class, and a third class lever as seesaw sketches. Label the fulcrum, effort, and load on each. Under each seesaw, draw the body example: the head nodding on the atlas, standing on tiptoe, and the elbow flexing.",
    "push": "On each body example, label which structure is the fulcrum, which muscle supplies the effort, and where the load sits."
   },
   "b": {
    "form": "Order table",
    "text": "Draw a table with first, second, and third class levers down the side. Across the top: what sits in the middle, a tiny seesaw sketch, one body example, and whether it favors force or speed and range. Fill each cell with a word or a sketch.",
    "push": "Put a star beside the class that is most common in the body."
   }
  },
  {
   "n": 11,
   "id": "w7-lab-facial-expression",
   "week": 8,
   "system": "Head and Neck Lab Muscles",
   "name": "Muscles of facial expression",
   "can": "Identify the muscles of facial expression including occipitofrontalis, orbicularis oculi, orbicularis oris, buccinator, zygomaticus, and platysma on a specimen or model.",
   "lab": true,
   "lecture": false,
   "a": {
    "form": "Face map",
    "text": "Draw a face from the front, with a small side view of the head for the occipital belly and the galea aponeurotica. Draw in the muscles of facial expression: frontal and occipital bellies of the occipitofrontalis with the galea aponeurotica, orbicularis oculi, procerus, nasalis, orbicularis oris, zygomaticus major and minor, levator labii superioris, levator anguli oris, risorius, buccinator, depressor anguli oris, depressor labii inferioris, mentalis, and platysma. Label each one.",
    "push": "Draw arrows on four of the muscles showing which way each one pulls the skin."
   },
   "b": {
    "form": "Expression table",
    "text": "Draw a table with four expressions down the side: raising the eyebrows, smiling, frowning with the corners of the mouth down, and puckering the lips. Across the top: the muscles that produce it, where each sits on the face, and a tiny sketch of the face making that expression.",
    "push": "Name the one cranial nerve that supplies every muscle in your table."
   }
  },
  {
   "n": 12,
   "id": "w7-lab-mastication",
   "week": 8,
   "system": "Head and Neck Lab Muscles",
   "name": "Muscles of mastication",
   "can": "Identify the muscles of mastication masseter, temporalis, and the medial and lateral pterygoids on a specimen or model.",
   "lab": true,
   "lecture": false,
   "a": {
    "form": "Side view of the jaw",
    "text": "Draw the skull from the side. Draw the temporalis fanning over the temporal fossa and the masseter from the zygomatic arch to the angle of the mandible. Then draw a deeper view with the zygomatic arch and ramus cut away to show the medial and lateral pterygoids. Label all four.",
    "push": "Draw an arrow on each muscle showing which way it moves the mandible."
   },
   "b": {
    "form": "Attachment table",
    "text": "Draw a table with temporalis, masseter, medial pterygoid, and lateral pterygoid down the side. Across the top: where it starts, where it ends on the mandible, how you find it on a skull or model, and a tiny sketch. Keep each cell short.",
    "push": "Circle the one muscle that opens the jaw instead of closing it, and name the nerve that supplies all four."
   }
  },
  {
   "n": 13,
   "id": "w7-lab-neck",
   "week": 8,
   "system": "Head and Neck Lab Muscles",
   "name": "Muscles of the neck",
   "can": "Identify the sternocleidomastoid, the scalenes, and the suprahyoid and infrahyoid muscles of the neck on a specimen or model.",
   "lab": true,
   "lecture": false,
   "a": {
    "form": "Anterior neck map",
    "text": "Draw the neck from the front with the hyoid bone and thyroid cartilage as landmarks. Draw and label the sternocleidomastoid, the three scalenes, the suprahyoid muscles above the hyoid, and the infrahyoid muscles below it: sternohyoid, omohyoid, sternothyroid, and thyrohyoid.",
    "push": "Shade the anterior and posterior triangles of the neck and label the muscle that divides them."
   },
   "b": {
    "form": "Above or below the hyoid",
    "text": "Draw a large hyoid bone in the middle of the box. Sort every neck muscle in this module into groups around it: above the hyoid, below the hyoid, and lateral neck. For each muscle, sketch a line showing its two attachments.",
    "push": "Mark the one infrahyoid muscle that has two bellies and write where its middle tendon sits."
   }
  },
  {
   "n": 14,
   "id": "w4-lab-posterior-shoulder-cuff",
   "week": 9,
   "system": "Lab: Upper Extremity Muscles",
   "name": "Posterior shoulder and rotator cuff",
   "can": "Identify the trapezius, latissimus dorsi, rhomboids, levator scapulae, and the four rotator cuff muscles supraspinatus, infraspinatus, teres minor, and subscapularis with their actions.",
   "lab": true,
   "lecture": false,
   "a": {
    "form": "Posterior view",
    "text": "Draw the back of the shoulder and upper trunk. Draw the trapezius and latissimus dorsi in the superficial layer. In a second view with those removed, draw the levator scapulae, rhomboid major and minor, supraspinatus, infraspinatus, and teres minor. Label all of them.",
    "push": "Draw a small anterior view of the scapula and add the subscapularis so all four rotator cuff muscles are shown."
   },
   "b": {
    "form": "Rotator cuff grid",
    "text": "Draw a grid with supraspinatus, infraspinatus, teres minor, and subscapularis down the side. Across the top: the fossa or border it starts from, the tubercle of the humerus it reaches, the movement it produces, and a tiny sketch. Add rows for trapezius, latissimus dorsi, rhomboids, and levator scapulae.",
    "push": "Circle the one cuff muscle that attaches to the lesser tubercle instead of the greater tubercle."
   }
  },
  {
   "n": 15,
   "id": "w4-lab-chest-anterior-arm",
   "week": 9,
   "system": "Lab: Upper Extremity Muscles",
   "name": "Chest and anterior arm muscles",
   "can": "Identify on the cadaver or model the pectoralis major, pectoralis minor, serratus anterior, deltoid, biceps brachii, brachialis, and coracobrachialis with their actions.",
   "lab": true,
   "lecture": false,
   "a": {
    "form": "Anterior view",
    "text": "Draw the chest and arm from the front. Draw and label the pectoralis major, the pectoralis minor beneath it, the serratus anterior on the side of the chest, the deltoid capping the shoulder, and the biceps brachii, brachialis, and coracobrachialis in the arm.",
    "push": "Draw an arrow on each muscle showing the direction it pulls the bone it moves."
   },
   "b": {
    "form": "Origin to insertion lines",
    "text": "Draw a simple skeleton of the chest wall, scapula, humerus, radius, and ulna. For each of the seven muscles in this competency, draw one line from where it starts to where it ends. Label each line with the muscle name and its main action.",
    "push": "Circle the coracoid process and list the three muscles that attach to it."
   }
  },
  {
   "n": 16,
   "id": "w4-lab-forearm-compartments",
   "week": 9,
   "system": "Lab: Upper Extremity Muscles",
   "name": "Forearm compartments",
   "can": "Identify the anterior flexor and posterior extensor forearm muscles including flexor carpi radialis, palmaris longus, pronator teres, and extensor digitorum and state each compartment action.",
   "lab": true,
   "lecture": false,
   "a": {
    "form": "Two compartments",
    "text": "Draw the forearm twice, the anterior view and the posterior view. In the anterior view, draw and label pronator teres, flexor carpi radialis, palmaris longus, flexor carpi ulnaris, and flexor digitorum superficialis. In the posterior view, draw and label extensor carpi radialis longus and brevis, extensor digitorum, and extensor carpi ulnaris.",
    "push": "Mark the medial epicondyle and the lateral epicondyle and draw where the common flexor and common extensor origins sit."
   },
   "b": {
    "form": "Compartment sort",
    "text": "Draw two columns headed anterior compartment and posterior compartment. Sort the forearm muscles into them. Under each heading, write the common origin, the main action of the compartment, and the nerve that supplies most of it.",
    "push": "Put a star beside the one muscle that lies in the posterior group but flexes the elbow."
   }
  },
  {
   "n": 17,
   "id": "w4-lab-ue-nerves",
   "week": 9,
   "system": "Lab: Upper Extremity Nerves",
   "name": "Upper-extremity nerves",
   "can": "Identify the major nerves of the upper limb including the musculocutaneous, median, ulnar, radial, and axillary nerves and the brachial plexus they arise from.",
   "lab": true,
   "lecture": true,
   "a": {
    "form": "Plexus map",
    "text": "Draw the brachial plexus from roots to terminal branches: five roots, three trunks, six divisions, three cords, and five terminal nerves. Label every level, and draw the axillary artery so the cords are named by where they sit around it.",
    "push": "Trace each of the five terminal nerves back to its cord in a different color."
   },
   "b": {
    "form": "Nerve table",
    "text": "Draw a table with the musculocutaneous, median, ulnar, radial, and axillary nerves down the side. Across the top: the cord it comes from, the compartment or muscles it supplies, where it is most easily injured, and a tiny sketch of the hand or arm sign after that injury.",
    "push": "Circle the nerve that runs behind the medial epicondyle, the spot people call the funny bone."
   }
  },
  {
   "n": 18,
   "id": "cv-surfaces",
   "week": 7,
   "system": "Cardiovascular",
   "name": "Heart wall layers, pericardium, and internal features",
   "can": "Name the three heart wall layers and the pericardial membranes, and locate internal features such as auricles, pectinate muscles, fossa ovalis, and trabeculae carneae.",
   "lab": true,
   "lecture": true,
   "a": {
    "form": "Wall and sac cross section",
    "text": "Draw a wedge of the heart wall with its coverings, from the outside in: fibrous pericardium, parietal serous pericardium, pericardial cavity, visceral serous pericardium (epicardium), myocardium, and endocardium. Then draw the inside of the right atrium and right ventricle and label the auricle, pectinate muscles, fossa ovalis, and trabeculae carneae.",
    "push": "Mark the one space in your wedge that holds serous fluid."
   },
   "b": {
    "form": "Layer ladder",
    "text": "Draw a ladder from outside the heart to the blood inside a chamber. Put each layer on a rung: fibrous pericardium, parietal layer, pericardial cavity, visceral layer, myocardium, endocardium. Beside each rung, write the tissue it is made of and draw a tiny sketch. Add a second list of internal features and the chamber where each is found.",
    "push": "Put a star on the rung that is both part of the pericardium and part of the heart wall."
   }
  },
  {
   "n": 19,
   "id": "cv-chambers",
   "week": 7,
   "system": "Cardiovascular",
   "name": "Heart chambers and septa",
   "can": "Identify the four heart chambers and the interatrial and interventricular septa, and state what blood each chamber receives and where it sends it.",
   "lab": true,
   "lecture": true,
   "a": {
    "form": "Frontal section",
    "text": "Draw the heart cut in a frontal section so all four chambers show. Label the right atrium, right ventricle, left atrium, left ventricle, interatrial septum, and interventricular septum. Draw the left ventricle wall at its true thickness compared with the right.",
    "push": "Label the vessels that bring blood into each atrium and the vessel that leaves each ventricle."
   },
   "b": {
    "form": "Chamber table",
    "text": "Draw a table with the four chambers down the side. Across the top: where it receives blood from, where it sends blood to, oxygen-rich or oxygen-poor, relative wall thickness, and a tiny sketch of its shape. Keep each cell to a word or a sketch.",
    "push": "Circle the chamber with the thickest wall."
   }
  },
  {
   "n": 20,
   "id": "cv-valves",
   "week": 7,
   "system": "Cardiovascular",
   "name": "Heart valves and what each separates",
   "can": "Identify the four heart valves by type and location, and state which two chambers or vessels each one separates and where it prevents backflow.",
   "lab": true,
   "lecture": true,
   "a": {
    "form": "Valve plane view",
    "text": "Draw the heart from above with the atria removed so the four valves show in one plane. Label the tricuspid, mitral (bicuspid), pulmonary semilunar, and aortic semilunar valves. Draw the correct number of cusps on each.",
    "push": "Beside each valve, write the two chambers or the chamber and vessel it sits between."
   },
   "b": {
    "form": "Valve sort",
    "text": "Draw two columns headed atrioventricular valves and semilunar valves. Put each of the four valves in its column. For each valve, sketch its cusps, name what it separates, and draw an arrow for the direction of backflow it prevents.",
    "push": "Mark the valve with only two cusps and name the valve disorder a stethoscope might pick up if it leaks."
   }
  },
  {
   "n": 21,
   "id": "cv-valve-support",
   "week": 7,
   "system": "Cardiovascular",
   "name": "Chordae tendineae and papillary muscles",
   "can": "Identify the chordae tendineae and papillary muscles and describe how they anchor and hold the atrioventricular valves shut.",
   "lab": true,
   "lecture": true,
   "a": {
    "form": "Ventricle cutaway",
    "text": "Draw an opened right or left ventricle. Draw an atrioventricular valve at the top, the chordae tendineae as cords hanging from its cusps, and the papillary muscles rising from the ventricle wall. Label all three and the trabeculae carneae.",
    "push": "Draw a second small sketch showing what a cusp would do if its chordae tendineae snapped."
   },
   "b": {
    "form": "Anchor chain",
    "text": "Draw a chain of boxes from the valve cusp to the ventricle wall: cusp, chordae tendineae, papillary muscle, ventricle wall. Under each box, draw a tiny sketch and write what tissue it is. Then draw a semilunar valve beside it with no chain.",
    "push": "Write one line explaining in structure terms why the semilunar valves do not need this chain."
   }
  },
  {
   "n": 22,
   "id": "cv-cardiac-muscle",
   "week": 7,
   "system": "Cardiovascular",
   "name": "Cardiac muscle tissue and the intercalated disc",
   "can": "Describe cardiac muscle tissue and identify the cardiomyocyte, striations, and intercalated disc with its desmosomes and gap junctions.",
   "lab": true,
   "lecture": true,
   "a": {
    "form": "Slide and zoom",
    "text": "Draw cardiac muscle as it looks on a slide: branching cells, one or two central nuclei, striations, and intercalated discs. Then draw a zoomed box of one intercalated disc and label the desmosomes and the gap junctions.",
    "push": "Label one cardiomyocyte from end to end so its boundaries are clear."
   },
   "b": {
    "form": "Side-by-side comparison",
    "text": "Draw a small patch of cardiac muscle next to a small patch of skeletal muscle. Under them, draw a table with rows for cell shape, nuclei, branching, striations, and cell junctions, and one column for each tissue.",
    "push": "Circle the row that lets you name cardiac muscle on a slide in one look."
   }
  },
  {
   "n": 23,
   "id": "cv-blood-pathway",
   "week": 7,
   "system": "Cardiovascular",
   "name": "Pathway of blood through the heart",
   "can": "Trace one drop of blood through the four chambers and four valves of the heart in correct order.",
   "lab": false,
   "lecture": true,
   "a": {
    "form": "Traced heart",
    "text": "Draw a frontal view of the heart with the great vessels. Trace one drop of blood with numbered arrows from the venae cavae through every chamber and valve, out to the lungs, back through the pulmonary veins, and out the aorta. Color oxygen-poor and oxygen-rich blood differently.",
    "push": "Circle the two places where the blood leaves the heart."
   },
   "b": {
    "form": "Flow chart",
    "text": "Draw a loop of boxes and arrows: venae cavae, right atrium, tricuspid valve, right ventricle, pulmonary valve, pulmonary trunk, lungs, pulmonary veins, left atrium, mitral valve, left ventricle, aortic valve, aorta, body. Draw a tiny sketch of each valve on its arrow.",
    "push": "Divide the loop into the pulmonary circuit and the systemic circuit with two colors."
   }
  },
  {
   "n": 24,
   "id": "bvn-great-vessels",
   "week": 7,
   "system": "Cardiovascular",
   "name": "Great vessels and aortic arch",
   "can": "Identify the great vessels attached to the base of the heart and state which circuit each one serves.",
   "lab": true,
   "lecture": true,
   "a": {
    "form": "Base of the heart",
    "text": "Draw the heart from the front with its great vessels. Label the superior vena cava, inferior vena cava, pulmonary trunk with its right and left pulmonary arteries, pulmonary veins, ascending aorta, aortic arch, and descending thoracic aorta. Label the ligamentum arteriosum between the pulmonary trunk and the arch.",
    "push": "Mark the three branches that leave the top of the aortic arch."
   },
   "b": {
    "form": "Vessel table",
    "text": "Draw a table with each great vessel down the side. Across the top: artery or vein, the chamber it attaches to, pulmonary or systemic circuit, oxygen-rich or oxygen-poor, and a tiny sketch of where it sits. Keep cells short.",
    "push": "Circle the arteries that carry oxygen-poor blood and the veins that carry oxygen-rich blood."
   }
  },
  {
   "n": 25,
   "id": "cv-coronary",
   "week": 7,
   "system": "Cardiovascular",
   "name": "Coronary circulation",
   "can": "Trace coronary circulation from the aorta through the coronary arteries, myocardial capillaries, cardiac veins, and coronary sinus to the right atrium, and identify the major coronary vessels.",
   "lab": true,
   "lecture": true,
   "a": {
    "form": "Anterior and posterior views",
    "text": "Draw the heart from the front and from the back. On the front, draw and label the right coronary artery, the left coronary artery, the anterior interventricular artery (LAD), the circumflex artery, the great cardiac vein, and the small cardiac vein. On the back, add the posterior interventricular artery, the middle cardiac vein, and the coronary sinus.",
    "push": "Draw an arrow showing where the coronary sinus empties."
   },
   "b": {
    "form": "Route map",
    "text": "Draw a flow of boxes from the aorta to the right atrium: aorta, coronary arteries and their branches, myocardial capillaries, cardiac veins, coronary sinus, right atrium. Under the artery box, list the branches and sketch which part of the heart each one feeds.",
    "push": "Put a star beside the artery most often blocked in a heart attack and mark the wall it feeds."
   }
  },
  {
   "n": 26,
   "id": "cv-conduction-anat",
   "week": 7,
   "system": "Cardiovascular",
   "name": "Conduction system components and pathway",
   "can": "Locate each component of the conduction system and trace the pathway in order from the SA node to the Purkinje fibers.",
   "lab": false,
   "lecture": true,
   "a": {
    "form": "Conduction map",
    "text": "Draw a frontal section of the heart. Place and label the SA node, the AV node, the AV bundle (bundle of His), the right and left bundle branches, and the Purkinje fibers. Draw numbered arrows showing the order the signal travels.",
    "push": "Label the chamber wall or septum where each part of the system sits."
   },
   "b": {
    "form": "Pathway chain",
    "text": "Draw a chain of boxes in order from the SA node to the Purkinje fibers. Under each box, write where in the heart it is located and draw a tiny heart outline with a dot at that spot.",
    "push": "Circle the part that crosses the fibrous skeleton, the only electrical link between the atria and the ventricles."
   }
  },
  {
   "n": 27,
   "id": "cv-cardiac-nerves",
   "week": 7,
   "system": "Cardiovascular",
   "name": "Nerve supply to the heart",
   "can": "Describe the autonomic nerve supply reaching the heart through the cardiac plexus and name the sympathetic and vagal parasympathetic sources.",
   "lab": false,
   "lecture": true,
   "a": {
    "form": "Nerve supply diagram",
    "text": "Draw the heart with the cardiac plexus above it. Draw the vagus nerves coming down from the brainstem and the sympathetic fibers coming from the sympathetic trunk. Label both sources, the cardiac plexus, and the SA and AV nodes the fibers reach.",
    "push": "Color the parasympathetic pathway and the sympathetic pathway in two different colors."
   },
   "b": {
    "form": "Two-source table",
    "text": "Draw a table with sympathetic and parasympathetic across the top. Rows: where the fibers come from, the named nerve or trunk they travel in, the plexus they pass through, and the parts of the heart they reach. Add a tiny sketch in each column.",
    "push": "Name the cranial nerve number for the parasympathetic supply."
   }
  },
  {
   "n": 28,
   "id": "bvn-vessel-tunics",
   "week": 8,
   "system": "Cardiovascular",
   "name": "Three tunics of a vessel wall",
   "can": "Name the three tunics of a vessel wall, state the tissue each contains, and explain which layer forms a capillary wall.",
   "lab": true,
   "lecture": true,
   "a": {
    "form": "Labeled vessel wall",
    "text": "Draw an artery cut across. Label the tunica intima with its endothelium and basement membrane, the internal elastic lamina, the tunica media with its smooth muscle, the external elastic lamina, the tunica externa, the vasa vasorum, and the lumen.",
    "push": "Draw a capillary beside it and label the only layer it has."
   },
   "b": {
    "form": "Tunic table",
    "text": "Draw a table with the three tunics down the side. Across the top: what tissue it is made of, where it sits relative to the lumen, one named feature inside it, and a tiny sketch. Add a row for a capillary wall.",
    "push": "Circle the tunic that is thickest in an artery and the tunic that is thickest in a large vein."
   }
  },
  {
   "n": 29,
   "id": "bvn-vessel-types",
   "week": 8,
   "system": "Cardiovascular",
   "name": "The five vessel types",
   "can": "Compare arteries, arterioles, capillaries, venules, and veins by wall structure, direction of flow, and role.",
   "lab": true,
   "lecture": true,
   "a": {
    "form": "Five cross sections",
    "text": "Draw five vessels cut across, in the order blood reaches them: artery, arteriole, capillary, venule, vein. Draw each wall at its true thickness compared with its lumen. Label the tunics present in each.",
    "push": "Draw an arrow under the row showing the direction blood flows."
   },
   "b": {
    "form": "Vessel type table",
    "text": "Draw a table with the five vessel types down the side. Across the top: wall thickness, lumen size, tunics present, direction of flow (toward or away from the heart), and a tiny sketch. Keep each cell to a word or a sketch.",
    "push": "Put a star on the one vessel type where exchange with the tissues happens."
   }
  },
  {
   "n": 30,
   "id": "bvn-artery-cap-vein-kinds",
   "week": 8,
   "system": "Cardiovascular",
   "name": "Kinds of artery, capillary, and vein",
   "can": "Distinguish elastic and muscular arteries, continuous, fenestrated, and sinusoid capillaries, and identify venous valves and their supporting features.",
   "lab": true,
   "lecture": false,
   "a": {
    "form": "Slide gallery",
    "text": "Draw an elastic artery wall and a muscular artery wall side by side. Below them, draw a continuous capillary, a fenestrated capillary, and a sinusoid in cross section. Then draw a vein opened lengthwise with a venous valve. Label the features that tell each one apart.",
    "push": "Under each capillary, name one organ where you would find it."
   },
   "b": {
    "form": "Kind table",
    "text": "Draw a table with elastic artery, muscular artery, continuous capillary, fenestrated capillary, sinusoid, and vein down the side. Across the top: the wall feature that identifies it, one named example or location, and a tiny sketch.",
    "push": "Draw a leg vein with its valves and the muscles around it, and mark what helps push blood upward."
   }
  },
  {
   "n": 31,
   "id": "bvn-circulatory-routes",
   "week": 8,
   "system": "Cardiovascular",
   "name": "Circulatory routes, portal systems, and anastomoses",
   "can": "Describe the pulmonary and systemic circuits and identify portal systems and anastomoses as alternate circulatory arrangements.",
   "lab": false,
   "lecture": true,
   "a": {
    "form": "Circuit diagram",
    "text": "Draw the heart in the center with the pulmonary circuit on one side and the systemic circuit on the other. Then draw the hepatic portal system: intestine capillaries, hepatic portal vein, liver capillaries. Draw one anastomosis, such as the palmar arches, as two arteries joining.",
    "push": "Label each capillary bed in the portal system and number them 1 and 2."
   },
   "b": {
    "form": "Route comparison",
    "text": "Draw three small maps side by side: the usual route (artery, one capillary bed, vein), a portal system (two capillary beds in a row), and an anastomosis (two vessels joining). Label each map with a named example from the body.",
    "push": "Circle the arrangement that protects a region if one artery is blocked."
   }
  },
  {
   "n": 32,
   "id": "bvn-vessel-disorders",
   "week": 8,
   "system": "Cardiovascular",
   "name": "Vessel wall disorders, arterial and venous",
   "can": "Describe atherosclerosis and how it changes an artery wall, and name common arterial and venous disorders by the structure each affects.",
   "lab": false,
   "lecture": true,
   "a": {
    "form": "Healthy and diseased wall",
    "text": "Draw a healthy artery in cross section and the same artery with atherosclerosis. In the diseased one, draw the plaque under the endothelium and label the narrowed lumen and the layer where the plaque builds up. Then draw a leg vein with a failed valve for a varicose vein.",
    "push": "Label which tunic is affected in each drawing."
   },
   "b": {
    "form": "Disorder table",
    "text": "Draw a table with atherosclerosis, aneurysm, varicose veins, and deep vein thrombosis down the side. Across the top: artery or vein, the wall structure affected, where in the body it is common, and a tiny sketch of the change.",
    "push": "Put a star on the disorder that can send a clot to the lungs."
   }
  },
  {
   "n": 33,
   "id": "bvn-fetal-remnants",
   "week": 8,
   "system": "Cardiovascular",
   "name": "Fetal circulation, shunts, and adult remnants",
   "can": "Identify the fetal vessels and three shunts, state how each reroutes blood, and name the adult remnant each becomes.",
   "lab": false,
   "lecture": true,
   "a": {
    "form": "Fetal circulation map",
    "text": "Draw a fetus with the placenta, umbilical vein, ductus venosus, heart with foramen ovale, ductus arteriosus, and the two umbilical arteries. Draw arrows showing the route blood takes, and draw each of the three shunts larger than the surrounding vessels so they stand out.",
    "push": "Beside each fetal structure, write the name of its adult remnant."
   },
   "b": {
    "form": "Before and after table",
    "text": "Draw a table with the fetal structures down the side: umbilical vein, ductus venosus, foramen ovale, ductus arteriosus, umbilical arteries. Across the top: what it bypasses, the adult remnant, and a tiny sketch of where you find the remnant.",
    "push": "Circle the remnant you can see on the interatrial septum."
   }
  },
  {
   "n": 34,
   "id": "w4-lab-ue-arteries-veins",
   "week": 9,
   "system": "Lab: Upper Extremity Vessels",
   "name": "Upper-extremity arteries and veins",
   "can": "Trace and identify the subclavian, axillary, brachial, radial, and ulnar arteries and the cephalic, basilic, and median cubital veins on the upper limb.",
   "lab": true,
   "lecture": true,
   "a": {
    "form": "Arm arteries and veins",
    "text": "Draw an upper limb from the front, twice. On the first, trace the arteries from the subclavian to the axillary, brachial, radial, and ulnar arteries and the palmar arches. On the second, draw the superficial veins: cephalic, basilic, median cubital, and the dorsal venous network of the hand.",
    "push": "Mark the landmarks where the subclavian becomes axillary and where the axillary becomes brachial."
   },
   "b": {
    "form": "Route chain",
    "text": "Draw two chains of boxes. The first follows the arteries from the aortic arch to the fingers. The second follows the veins from the hand back to the superior vena cava. Under each box, sketch where along the limb it sits.",
    "push": "Put a star on the vein most often used for a blood draw and draw where it lies in the cubital fossa."
   }
  },
  {
   "n": 35,
   "id": "w4-blood-composition",
   "week": 9,
   "system": "Blood",
   "name": "Blood composition and plasma",
   "can": "Describe blood as a fluid connective tissue and identify plasma, formed elements, hematocrit, buffy coat, and the plasma proteins albumin, globulins, and fibrinogen.",
   "lab": true,
   "lecture": true,
   "a": {
    "form": "Spun tube",
    "text": "Draw a centrifuged tube of blood. Label the plasma layer, the buffy coat, and the red cell layer, and write the approximate percent of each. Beside the plasma layer, draw a pie chart of what plasma holds: water, the plasma proteins albumin, globulins, and fibrinogen, and other solutes.",
    "push": "Mark the layer you measure to get the hematocrit."
   },
   "b": {
    "form": "Composition tree",
    "text": "Draw a tree with blood at the top, splitting into plasma and formed elements. Under plasma, branch to water, proteins (albumin, globulins, fibrinogen), and solutes. Under formed elements, branch to erythrocytes, leukocytes, and platelets. Sketch each formed element.",
    "push": "Circle the one plasma protein that is used up when blood clots."
   }
  },
  {
   "n": 36,
   "id": "w4-formed-elements",
   "week": 9,
   "system": "Blood",
   "name": "Formed elements and leukocytes",
   "can": "Identify erythrocytes, platelets, and the five leukocytes on a smear and describe erythrocyte structure and the granulocyte and agranulocyte groups.",
   "lab": true,
   "lecture": false,
   "a": {
    "form": "Blood smear",
    "text": "Draw a blood smear with many red cells and one of each: neutrophil, eosinophil, basophil, lymphocyte, monocyte, and a few platelets. Draw each nucleus shape carefully. Label every cell and draw one red cell from the side to show the biconcave shape.",
    "push": "Group the five white cells into granulocytes and agranulocytes with a bracket."
   },
   "b": {
    "form": "Identification table",
    "text": "Draw a table with the five leukocytes down the side. Across the top: nucleus shape, granules and their color, granulocyte or agranulocyte, how common it is, and a tiny sketch. Add rows for erythrocyte and platelet.",
    "push": "Number the five white cells from most to least common."
   }
  },
  {
   "n": 37,
   "id": "w4-hematopoiesis",
   "week": 9,
   "system": "Blood",
   "name": "Hematopoiesis",
   "can": "Explain where blood cells form and identify the hemocytoblast, megakaryocyte, and the myeloid and lymphoid lines of hematopoiesis.",
   "lab": true,
   "lecture": true,
   "a": {
    "form": "Family tree",
    "text": "Draw a family tree starting at the hemocytoblast in the red bone marrow. Split it into the myeloid line and the lymphoid line. Draw each line ending in its mature cells, including the megakaryocyte breaking into platelets and the reticulocyte becoming an erythrocyte.",
    "push": "Circle the only mature cell type that comes from the lymphoid line."
   },
   "b": {
    "form": "Where and what",
    "text": "Draw a skeleton outline and shade where red bone marrow is found in an adult. Then draw two columns beside it, myeloid line and lymphoid line, and sketch the mature cells that belong in each.",
    "push": "Draw the megakaryocyte large and label the fragments that come off it."
   }
  },
  {
   "n": 38,
   "id": "w4-blood-disorders",
   "week": 9,
   "system": "Blood",
   "name": "Blood disorders",
   "can": "Name anemia, sickle cell disease, polycythemia, leukemia, leukopenia, thrombocytopenia, and hemophilia and identify the component each one affects.",
   "lab": false,
   "lecture": true,
   "a": {
    "form": "Disorder map",
    "text": "Draw a large circle for blood and divide it into three wedges: red cells, white cells, and platelets and clotting. Place each disorder in the wedge it affects: anemia, sickle cell disease, polycythemia, leukemia, leukopenia, thrombocytopenia, and hemophilia. Draw a tiny sketch of what changes in each.",
    "push": "Draw a sickled red cell next to a normal one."
   },
   "b": {
    "form": "Too much or too little",
    "text": "Draw a table with red cells, white cells, platelets, and clotting factors down the side. Across the top: too many, too few, and abnormal. Place each of the seven disorders in the right cell and add a tiny sketch.",
    "push": "Circle the disorder that is inherited and affects clotting rather than cells."
   }
  }
 ]
};
