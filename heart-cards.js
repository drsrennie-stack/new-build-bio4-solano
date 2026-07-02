/* ============================================================
   BIO 004 Human Anatomy - Heart (Gross Anatomy) recall deck
   Week 3. 100 free-recall flip cards (W3-001..W3-100).

   Design intent (Dr. Sharilyn Rennie):
   - These are RECALL cards, not multiple choice. The student sees the
     question, retrieves the answer from memory (out loud or on paper),
     then reveals and self-rates. This trains retrieval, not recognition.
   - Every card carries tags for the mastery system: a "cardiovascular"
     system tag plus one or more subtopic tags. DOK level is already on
     each card. Mastery rolls up by tag inside the app's report view.

   Drop-in behavior: appends this module to window.BIO004_COURSE_CONTENT
   if the full course content is already loaded (same pattern as
   gap-cards.js), or creates the object if this file is loaded alone
   (standalone preview).
   ============================================================ */
(function () {
  "use strict";

  // Shorthand: every card is in the cardiovascular system.
  function cv() {
    return ["cardiovascular"].concat(Array.prototype.slice.call(arguments));
  }

  var HEART_CARDS = [
    /* ---------- DOK 1: recall ---------- */
    { id: "W3-001", dok: 1, q: "What is the heart?", a: "A hollow, muscular organ that pumps blood through blood vessels.", tags: cv("overview") },
    { id: "W3-002", dok: 1, q: "Where is the heart located?", a: "In the mediastinum, between the lungs, resting on the diaphragm.", tags: cv("orientation") },
    { id: "W3-003", dok: 1, q: "Which direction does the apex point?", a: "Down and to the left.", tags: cv("orientation") },
    { id: "W3-004", dok: 1, q: "What is the base of the heart?", a: "The broad superior surface where great vessels enter and leave.", tags: cv("orientation") },
    { id: "W3-005", dok: 1, q: "Which circuit is driven by the right side of the heart?", a: "Pulmonary circuit.", tags: cv("circuits") },
    { id: "W3-006", dok: 1, q: "Which circuit is driven by the left side of the heart?", a: "Systemic circuit.", tags: cv("circuits") },
    { id: "W3-007", dok: 1, q: "What does the pulmonary circuit carry blood to?", a: "The lungs.", tags: cv("circuits") },
    { id: "W3-008", dok: 1, q: "What does the systemic circuit carry blood to?", a: "The body.", tags: cv("circuits") },
    { id: "W3-009", dok: 1, q: "What sac encloses the heart?", a: "The pericardium.", tags: cv("pericardium") },
    { id: "W3-010", dok: 1, q: "What is the tough outer layer of the pericardium?", a: "Fibrous pericardium.", tags: cv("pericardium") },
    { id: "W3-011", dok: 1, q: "What does the fibrous pericardium do?", a: "Protects and anchors the heart in the mediastinum.", tags: cv("pericardium") },
    { id: "W3-012", dok: 1, q: "What are the two layers of the serous pericardium?", a: "Parietal layer and visceral layer.", tags: cv("pericardium") },
    { id: "W3-013", dok: 1, q: "Which serous pericardium layer lies on the heart surface?", a: "Visceral layer.", tags: cv("pericardium") },
    { id: "W3-014", dok: 1, q: "Which serous pericardium layer lines the fibrous pericardium?", a: "Parietal layer.", tags: cv("pericardium") },
    { id: "W3-015", dok: 1, q: "What is the pericardial cavity?", a: "The space between the serous pericardial layers.", tags: cv("pericardium") },
    { id: "W3-016", dok: 1, q: "What fluid reduces friction as the heart beats?", a: "Serous fluid in the pericardial cavity.", tags: cv("pericardium") },
    { id: "W3-017", dok: 1, q: "Name the three layers of the heart wall from outside to inside.", a: "Epicardium, myocardium, endocardium.", tags: cv("heart-wall") },
    { id: "W3-018", dok: 1, q: "What is the outer layer of the heart wall?", a: "Epicardium.", tags: cv("heart-wall") },
    { id: "W3-019", dok: 1, q: "What is the thick middle layer of the heart wall?", a: "Myocardium.", tags: cv("heart-wall") },
    { id: "W3-020", dok: 1, q: "What is the inner layer of the heart wall?", a: "Endocardium.", tags: cv("heart-wall") },
    { id: "W3-021", dok: 1, q: "Which heart wall layer is cardiac muscle?", a: "Myocardium.", tags: cv("heart-wall") },
    { id: "W3-022", dok: 1, q: "Which heart wall layer lines the chambers?", a: "Endocardium.", tags: cv("heart-wall") },
    { id: "W3-023", dok: 1, q: "Which heart wall layer covers the valves?", a: "Endocardium.", tags: cv("heart-wall") },
    { id: "W3-024", dok: 1, q: "The epicardium is the visceral layer of what membrane?", a: "Serous pericardium.", tags: cv("heart-wall", "pericardium") },
    { id: "W3-025", dok: 1, q: "How many chambers does the heart have?", a: "Four.", tags: cv("chambers") },
    { id: "W3-026", dok: 1, q: "What are the two receiving chambers of the heart?", a: "Right atrium and left atrium.", tags: cv("chambers") },
    { id: "W3-027", dok: 1, q: "What are the two pumping chambers of the heart?", a: "Right ventricle and left ventricle.", tags: cv("chambers") },
    { id: "W3-028", dok: 1, q: "Which chamber receives blood from the body?", a: "Right atrium.", tags: cv("chambers") },
    { id: "W3-029", dok: 1, q: "Which chamber receives blood from the lungs?", a: "Left atrium.", tags: cv("chambers") },
    { id: "W3-030", dok: 1, q: "Which chamber pumps blood to the lungs?", a: "Right ventricle.", tags: cv("chambers") },
    { id: "W3-031", dok: 1, q: "Which chamber pumps blood to the body?", a: "Left ventricle.", tags: cv("chambers") },
    { id: "W3-032", dok: 1, q: "Which chamber has the thickest wall?", a: "Left ventricle.", tags: cv("chambers") },
    { id: "W3-033", dok: 1, q: "What vessels return blood from the body to the right atrium?", a: "Superior and inferior venae cavae.", tags: cv("great-vessels") },
    { id: "W3-034", dok: 1, q: "What vessel returns blood from the heart wall to the right atrium?", a: "Coronary sinus.", tags: cv("great-vessels") },
    { id: "W3-035", dok: 1, q: "What vessels return blood from the lungs to the left atrium?", a: "Four pulmonary veins.", tags: cv("great-vessels") },
    { id: "W3-036", dok: 1, q: "What vessel carries blood from the right ventricle to the lungs?", a: "Pulmonary trunk.", tags: cv("great-vessels") },
    { id: "W3-037", dok: 1, q: "What vessel carries blood from the left ventricle to the body?", a: "Aorta.", tags: cv("great-vessels") },
    { id: "W3-038", dok: 1, q: "What wall separates the two atria?", a: "Interatrial septum.", tags: cv("septa") },
    { id: "W3-039", dok: 1, q: "What wall separates the two ventricles?", a: "Interventricular septum.", tags: cv("septa") },
    { id: "W3-040", dok: 1, q: "What is the fossa ovalis?", a: "Oval depression in the interatrial septum.", tags: cv("septa") },
    { id: "W3-041", dok: 1, q: "The fossa ovalis is the remnant of what fetal structure?", a: "Foramen ovale.", tags: cv("septa") },
    { id: "W3-042", dok: 1, q: "What is an auricle?", a: "A small wrinkled pouch on each atrium.", tags: cv("internal-features") },
    { id: "W3-043", dok: 1, q: "What do auricles do?", a: "Slightly increase atrial capacity.", tags: cv("internal-features") },
    { id: "W3-044", dok: 1, q: "What are pectinate muscles?", a: "Parallel muscular ridges in the atria and auricles.", tags: cv("internal-features") },
    { id: "W3-045", dok: 1, q: "What are trabeculae carneae?", a: "Irregular muscular ridges in the ventricles.", tags: cv("internal-features") },
    { id: "W3-046", dok: 1, q: "What is the moderator band?", a: "A muscular band in the right ventricle.", tags: cv("internal-features") },
    { id: "W3-047", dok: 1, q: "What does the moderator band carry?", a: "Part of the conduction system to the papillary muscle.", tags: cv("internal-features") },

    /* ---------- DOK 2: compare, relate, correct ---------- */
    { id: "W3-048", dok: 2, q: "Compare atria and ventricles by function.", a: "Atria receive blood; ventricles pump blood out.", tags: cv("chambers") },
    { id: "W3-049", dok: 2, q: "Compare the right and left sides of the heart by circuit.", a: "Right side drives pulmonary circuit; left side drives systemic circuit.", tags: cv("circuits") },
    { id: "W3-050", dok: 2, q: "Why is the left ventricle thicker than the right ventricle?", a: "It pumps blood through the systemic circuit to the whole body.", tags: cv("chambers") },
    { id: "W3-051", dok: 2, q: "Why does the right ventricle not need as thick a wall as the left?", a: "It only pumps blood to the nearby lungs.", tags: cv("chambers") },
    { id: "W3-052", dok: 2, q: "Compare the apex and base of the heart.", a: "Apex is inferior tip; base is superior surface with great vessels.", tags: cv("orientation") },
    { id: "W3-053", dok: 2, q: "Compare pulmonary and systemic circuits.", a: "Pulmonary goes heart-lungs-heart; systemic goes heart-body-heart.", tags: cv("circuits") },
    { id: "W3-054", dok: 2, q: "Which chamber connects pulmonary venous return to systemic pumping?", a: "Left atrium, then left ventricle.", tags: cv("chambers", "circuits") },
    { id: "W3-055", dok: 2, q: "Which chamber connects systemic venous return to pulmonary pumping?", a: "Right atrium, then right ventricle.", tags: cv("chambers", "circuits") },
    { id: "W3-056", dok: 2, q: "Why does the heart need a pericardial cavity?", a: "It reduces friction as the heart beats.", tags: cv("pericardium") },
    { id: "W3-057", dok: 2, q: "Compare fibrous and serous pericardium.", a: "Fibrous anchors/protects; serous forms friction-reducing membranes.", tags: cv("pericardium") },
    { id: "W3-058", dok: 2, q: "Compare epicardium and endocardium.", a: "Epicardium covers outside; endocardium lines inside chambers/valves.", tags: cv("heart-wall") },
    { id: "W3-059", dok: 2, q: "Compare myocardium and endocardium.", a: "Myocardium contracts; endocardium provides smooth internal lining.", tags: cv("heart-wall") },
    { id: "W3-060", dok: 2, q: "Why is smooth endocardium important?", a: "It lines chambers and valves, allowing blood to move over a smooth surface.", tags: cv("heart-wall") },
    { id: "W3-061", dok: 2, q: "Which heart wall layer would be most responsible for pumping failure?", a: "Myocardium.", tags: cv("heart-wall") },
    { id: "W3-062", dok: 2, q: "Which layer is continuous with the lining of the great vessels?", a: "Endocardium.", tags: cv("heart-wall", "great-vessels") },
    { id: "W3-063", dok: 2, q: "Why are atria thinner than ventricles?", a: "They receive blood and only pump it a short distance into ventricles.", tags: cv("chambers") },
    { id: "W3-064", dok: 2, q: "Why are ventricles thicker than atria?", a: "They must generate pressure to pump blood out of the heart.", tags: cv("chambers") },
    { id: "W3-065", dok: 2, q: "Compare pectinate muscles and trabeculae carneae.", a: "Pectinate muscles are atrial ridges; trabeculae carneae are ventricular ridges.", tags: cv("internal-features") },
    { id: "W3-066", dok: 2, q: "Compare interatrial and interventricular septa.", a: "Interatrial separates atria; interventricular separates ventricles.", tags: cv("septa") },
    { id: "W3-067", dok: 2, q: "Why is the fossa ovalis found in the interatrial septum?", a: "It is the adult remnant of the fetal opening between atria.", tags: cv("septa") },
    { id: "W3-068", dok: 2, q: "Which chamber receives blood from both venae cavae and the coronary sinus?", a: "Right atrium.", tags: cv("chambers", "great-vessels") },
    { id: "W3-069", dok: 2, q: "Which chamber receives oxygen-rich blood from four vessels?", a: "Left atrium.", tags: cv("chambers", "great-vessels") },
    { id: "W3-070", dok: 2, q: "Which chamber sends blood into the pulmonary trunk?", a: "Right ventricle.", tags: cv("chambers", "great-vessels") },
    { id: "W3-071", dok: 2, q: "Which chamber sends blood into the aorta?", a: "Left ventricle.", tags: cv("chambers", "great-vessels") },
    { id: "W3-072", dok: 2, q: "Why is the left ventricle associated with the aorta?", a: "It pumps oxygen-rich blood into systemic circulation.", tags: cv("great-vessels", "circuits") },
    { id: "W3-073", dok: 2, q: "Why is the right ventricle associated with the pulmonary trunk?", a: "It pumps oxygen-poor blood toward the lungs.", tags: cv("great-vessels", "circuits") },
    { id: "W3-074", dok: 2, q: "What sequence describes chamber flow only?", a: "Right atrium to right ventricle to left atrium to left ventricle is incomplete unless the lungs are included.", tags: cv("circuits") },
    { id: "W3-075", dok: 2, q: "Correct this: \"The left atrium pumps blood to the body.\"", a: "The left atrium pumps blood to the left ventricle; the left ventricle pumps to the body.", tags: cv("chambers") },
    { id: "W3-076", dok: 2, q: "Correct this: \"The right atrium pumps blood to the lungs.\"", a: "The right atrium sends blood to the right ventricle; the right ventricle pumps to lungs.", tags: cv("chambers") },
    { id: "W3-077", dok: 2, q: "Correct this: \"Pulmonary veins carry blood away from the heart.\"", a: "Pulmonary veins carry blood toward the heart, into the left atrium.", tags: cv("great-vessels") },
    { id: "W3-078", dok: 2, q: "Correct this: \"The pulmonary trunk leaves the left ventricle.\"", a: "The pulmonary trunk leaves the right ventricle.", tags: cv("great-vessels") },
    { id: "W3-079", dok: 2, q: "Correct this: \"The aorta leaves the right ventricle.\"", a: "The aorta leaves the left ventricle.", tags: cv("great-vessels") },
    { id: "W3-080", dok: 2, q: "Why is the heart described as a double pump?", a: "Right side pumps to lungs; left side pumps to body.", tags: cv("circuits") },

    /* ---------- DOK 3: apply / reason (clinical context) ---------- */
    { id: "W3-081", dok: 3, q: "Fluid accumulates in the pericardial cavity. What heart function is most directly limited?", a: "Filling, because external pressure squeezes the heart.", tags: cv("pericardium") },
    { id: "W3-082", dok: 3, q: "Why can excess pericardial fluid become dangerous?", a: "It can compress the heart and prevent adequate filling.", tags: cv("pericardium") },
    { id: "W3-083", dok: 3, q: "A stab wound penetrates the fibrous pericardium. Which protective structure was breached?", a: "The tough outer pericardial layer anchoring the heart.", tags: cv("pericardium") },
    { id: "W3-084", dok: 3, q: "Damage to myocardium would most directly reduce what ability?", a: "Contractile pumping force.", tags: cv("heart-wall") },
    { id: "W3-085", dok: 3, q: "If the endocardium covering a valve is damaged, what structure is involved?", a: "The smooth inner lining covering the valve surface.", tags: cv("heart-wall") },
    { id: "W3-086", dok: 3, q: "A clot blocks blood returning from the lower body. Which vessel and chamber are affected first?", a: "Inferior vena cava and right atrium.", tags: cv("great-vessels", "chambers") },
    { id: "W3-087", dok: 3, q: "A clot blocks blood returning from the head and arms. Which vessel is involved?", a: "Superior vena cava.", tags: cv("great-vessels") },
    { id: "W3-088", dok: 3, q: "If pulmonary veins are blocked, which chamber receives less blood?", a: "Left atrium.", tags: cv("great-vessels", "chambers") },
    { id: "W3-089", dok: 3, q: "If the pulmonary trunk is blocked, which chamber struggles to empty?", a: "Right ventricle.", tags: cv("great-vessels", "chambers") },
    { id: "W3-090", dok: 3, q: "If the aorta is blocked near its origin, which chamber faces increased resistance?", a: "Left ventricle.", tags: cv("great-vessels", "chambers") },
    { id: "W3-091", dok: 3, q: "Why would left ventricular failure affect systemic circulation?", a: "The left ventricle pumps blood into the aorta and body.", tags: cv("circuits") },
    { id: "W3-092", dok: 3, q: "Why would right ventricular failure affect pulmonary circulation?", a: "The right ventricle pumps blood into the pulmonary trunk and lungs.", tags: cv("circuits") },
    { id: "W3-093", dok: 3, q: "A student says oxygen-rich blood enters the right atrium. What is wrong?", a: "The right atrium receives oxygen-poor blood from systemic circulation.", tags: cv("chambers", "circuits") },
    { id: "W3-094", dok: 3, q: "A student says oxygen-poor blood enters the left atrium. What is wrong?", a: "The left atrium receives oxygen-rich blood from pulmonary veins.", tags: cv("chambers", "circuits") },
    { id: "W3-095", dok: 3, q: "Why does the systemic circuit require greater ventricular force than the pulmonary circuit?", a: "It sends blood through the entire body, not just to the lungs.", tags: cv("circuits") },
    { id: "W3-096", dok: 3, q: "If the interventricular septum is damaged, which chambers could abnormally communicate?", a: "Right and left ventricles.", tags: cv("septa") },
    { id: "W3-097", dok: 3, q: "If the interatrial septum is damaged, which chambers could abnormally communicate?", a: "Right and left atria.", tags: cv("septa") },
    { id: "W3-098", dok: 3, q: "Why does the moderator band matter structurally?", a: "It carries conduction tissue to papillary muscle in the right ventricle.", tags: cv("internal-features") },
    { id: "W3-099", dok: 3, q: "Why is the fossa ovalis clinically useful as a landmark?", a: "It marks where the fetal foramen ovale once allowed atrial blood flow.", tags: cv("septa") },
    { id: "W3-100", dok: 3, q: "Connect structure to function: why does the heart sit between the lungs?", a: "It is positioned to pump blood to the lungs and body efficiently.", tags: cv("orientation") }
  ];

  /* ============================================================
     Batch 3, part A: Great Vessels & Coronary Circulation
     (W3-201..227, 241..252, 271..278, 298, 300)
     ============================================================ */
  var VESSEL_CORONARY_CARDS = [
    /* ---- DOK 1 ---- */
    { id: "W3-201", dok: 1, q: "What are the great vessels?", a: "Large vessels attached to the base of the heart.", tags: cv("great-vessels") },
    { id: "W3-202", dok: 1, q: "What does the superior vena cava return blood from?", a: "Head, neck, and upper limbs.", tags: cv("great-vessels") },
    { id: "W3-203", dok: 1, q: "What does the inferior vena cava return blood from?", a: "Trunk and lower limbs.", tags: cv("great-vessels") },
    { id: "W3-204", dok: 1, q: "Which chamber receives blood from the superior vena cava?", a: "Right atrium.", tags: cv("great-vessels", "chambers") },
    { id: "W3-205", dok: 1, q: "Which chamber receives blood from the inferior vena cava?", a: "Right atrium.", tags: cv("great-vessels", "chambers") },
    { id: "W3-206", dok: 1, q: "What vessel carries blood from the right ventricle?", a: "Pulmonary trunk.", tags: cv("great-vessels") },
    { id: "W3-207", dok: 1, q: "What does the pulmonary trunk branch into?", a: "Right and left pulmonary arteries.", tags: cv("great-vessels") },
    { id: "W3-208", dok: 1, q: "What do pulmonary veins carry?", a: "Oxygen-rich blood from lungs to left atrium.", tags: cv("great-vessels") },
    { id: "W3-209", dok: 1, q: "How many pulmonary veins return blood to the left atrium?", a: "Four.", tags: cv("great-vessels") },
    { id: "W3-210", dok: 1, q: "What is the largest artery?", a: "Aorta.", tags: cv("great-vessels") },
    { id: "W3-211", dok: 1, q: "What does the aorta carry?", a: "Oxygen-rich blood from left ventricle to the body.", tags: cv("great-vessels") },
    { id: "W3-212", dok: 1, q: "What is coronary circulation?", a: "The blood supply of the heart wall.", tags: cv("coronary-circulation") },
    { id: "W3-213", dok: 1, q: "Where do coronary arteries originate?", a: "Base of the aorta.", tags: cv("coronary-circulation") },
    { id: "W3-214", dok: 1, q: "What do coronary arteries supply?", a: "Myocardium.", tags: cv("coronary-circulation") },
    { id: "W3-215", dok: 1, q: "What vessel collects cardiac veins?", a: "Coronary sinus.", tags: cv("coronary-circulation") },
    { id: "W3-216", dok: 1, q: "Where does the coronary sinus empty?", a: "Right atrium.", tags: cv("coronary-circulation") },
    { id: "W3-217", dok: 1, q: "Name the two main coronary arteries.", a: "Right coronary artery and left coronary artery.", tags: cv("coronary-circulation") },
    { id: "W3-218", dok: 1, q: "What are the main branches of the right coronary artery?", a: "Right marginal artery and posterior interventricular artery.", tags: cv("coronary-circulation") },
    { id: "W3-219", dok: 1, q: "What is another name for the posterior interventricular artery?", a: "Posterior descending artery, or PDA.", tags: cv("coronary-circulation") },
    { id: "W3-220", dok: 1, q: "What are the main branches of the left coronary artery?", a: "LAD, circumflex artery, and left marginal artery.", tags: cv("coronary-circulation") },
    { id: "W3-221", dok: 1, q: "What does LAD stand for?", a: "Anterior interventricular artery.", tags: cv("coronary-circulation") },
    { id: "W3-222", dok: 1, q: "Which coronary artery usually supplies the SA and AV nodes?", a: "Right coronary artery.", tags: cv("coronary-circulation", "conduction-system") },
    { id: "W3-223", dok: 1, q: "Which coronary artery supplies the apex?", a: "Left coronary artery.", tags: cv("coronary-circulation") },
    { id: "W3-224", dok: 1, q: "What vein runs with the LAD?", a: "Great cardiac vein.", tags: cv("coronary-circulation") },
    { id: "W3-225", dok: 1, q: "What vein runs with the PDA?", a: "Middle cardiac vein.", tags: cv("coronary-circulation") },
    { id: "W3-226", dok: 1, q: "What vein runs with the right marginal artery?", a: "Small cardiac vein.", tags: cv("coronary-circulation") },
    { id: "W3-227", dok: 1, q: "What is a myocardial infarction?", a: "Death of heart muscle from blocked blood supply.", tags: cv("coronary-circulation") },
    /* ---- DOK 2 ---- */
    { id: "W3-241", dok: 2, q: "Trace coronary blood flow in order.", a: "Aorta to coronary arteries to myocardial capillaries to cardiac veins to coronary sinus to right atrium.", tags: cv("coronary-circulation") },
    { id: "W3-242", dok: 2, q: "Why does the heart need coronary circulation?", a: "The myocardium needs its own oxygen and nutrient supply.", tags: cv("coronary-circulation") },
    { id: "W3-243", dok: 2, q: "Why can a blocked coronary artery cause a heart attack?", a: "Myocardium beyond the blockage loses oxygen and begins to die.", tags: cv("coronary-circulation") },
    { id: "W3-244", dok: 2, q: "Compare pulmonary veins and venae cavae.", a: "Pulmonary veins carry oxygen-rich blood to left atrium; venae cavae carry oxygen-poor blood to right atrium.", tags: cv("great-vessels") },
    { id: "W3-245", dok: 2, q: "Compare pulmonary trunk and aorta.", a: "Pulmonary trunk leaves right ventricle; aorta leaves left ventricle.", tags: cv("great-vessels") },
    { id: "W3-246", dok: 2, q: "Why are pulmonary arteries unusual?", a: "They carry oxygen-poor blood away from the heart.", tags: cv("great-vessels") },
    { id: "W3-247", dok: 2, q: "Why are pulmonary veins unusual?", a: "They carry oxygen-rich blood toward the heart.", tags: cv("great-vessels") },
    { id: "W3-248", dok: 2, q: "Compare right and left coronary artery supply.", a: "RCA supplies much of right heart and nodes; LCA supplies much of left heart, septum, and apex.", tags: cv("coronary-circulation") },
    { id: "W3-249", dok: 2, q: "Why is the LAD clinically important?", a: "It supplies the anterior septum, left ventricle, and apex.", tags: cv("coronary-circulation") },
    { id: "W3-250", dok: 2, q: "Which vessel drains the heart wall back to the right atrium?", a: "Coronary sinus.", tags: cv("coronary-circulation") },
    { id: "W3-251", dok: 2, q: "Why are coronary arteries small but critical?", a: "They supply the myocardium that powers the entire circulation.", tags: cv("coronary-circulation") },
    { id: "W3-252", dok: 2, q: "Compare great cardiac, middle cardiac, and small cardiac veins.", a: "Great runs with LAD; middle with PDA; small with right marginal artery.", tags: cv("coronary-circulation") },
    /* ---- DOK 3 ---- */
    { id: "W3-271", dok: 3, q: "A blockage in the RCA may affect rhythm because it often supplies what structures?", a: "SA and AV nodes.", tags: cv("coronary-circulation", "conduction-system") },
    { id: "W3-272", dok: 3, q: "A blockage in the LAD could damage which major regions?", a: "Left ventricle, anterior septum, and apex.", tags: cv("coronary-circulation") },
    { id: "W3-273", dok: 3, q: "Why can coronary artery disease cause pumping failure?", a: "It starves myocardium of oxygen, reducing contraction.", tags: cv("coronary-circulation") },
    { id: "W3-274", dok: 3, q: "If the coronary sinus is blocked, what flow is impaired?", a: "Venous drainage from the heart wall to the right atrium.", tags: cv("coronary-circulation") },
    { id: "W3-275", dok: 3, q: "If the left coronary artery is blocked, which chamber is most threatened?", a: "Left ventricle.", tags: cv("coronary-circulation") },
    { id: "W3-276", dok: 3, q: "If the right coronary artery is blocked, which chamber is most threatened?", a: "Right ventricle.", tags: cv("coronary-circulation") },
    { id: "W3-277", dok: 3, q: "Why does myocardial infarction damage more than just muscle tissue?", a: "It can impair pumping, conduction, and valve support depending on location.", tags: cv("coronary-circulation") },
    { id: "W3-278", dok: 3, q: "Why could papillary muscle damage follow coronary artery blockage?", a: "Papillary muscles are myocardium supplied by coronary arteries.", tags: cv("coronary-circulation", "internal-features") },
    { id: "W3-298", dok: 3, q: "Why is apex involvement serious in left coronary blockage?", a: "The apex participates in coordinated ventricular contraction.", tags: cv("coronary-circulation") },
    { id: "W3-300", dok: 3, q: "Explain why coronary circulation and conduction are linked clinically.", a: "Coronary arteries supply the myocardium and often conduction structures, so blockage can impair both rhythm and contraction.", tags: cv("coronary-circulation", "conduction-system") }
  ];

  /* ============================================================
     Batch 3, part B: Cardiac Conduction & Autonomic Control
     (W3-228..240, 253..270, 279..297, 299)
     ============================================================ */
  var CONDUCTION_CARDS = [
    /* ---- DOK 1 ---- */
    { id: "W3-228", dok: 1, q: "What is the cardiac conduction system?", a: "Specialized cardiac muscle cells that generate and spread each heartbeat.", tags: cv("conduction-system") },
    { id: "W3-229", dok: 1, q: "What is autorhythmicity?", a: "The heart's ability to generate its own rhythm.", tags: cv("conduction-system") },
    { id: "W3-230", dok: 1, q: "What are conducting cells?", a: "Specialized non-contractile cells that generate and carry electrical signals.", tags: cv("conduction-system") },
    { id: "W3-231", dok: 1, q: "What are contractile cells?", a: "Working cardiomyocytes that contract when signaled.", tags: cv("conduction-system") },
    { id: "W3-232", dok: 1, q: "What structure is the heart's natural pacemaker?", a: "SA node.", tags: cv("conduction-system") },
    { id: "W3-233", dok: 1, q: "What does SA node stand for?", a: "Sinoatrial node.", tags: cv("conduction-system") },
    { id: "W3-234", dok: 1, q: "Where is the SA node located?", a: "Wall of the right atrium near the superior vena cava.", tags: cv("conduction-system") },
    { id: "W3-235", dok: 1, q: "What does AV node stand for?", a: "Atrioventricular node.", tags: cv("conduction-system") },
    { id: "W3-236", dok: 1, q: "Where is the AV node located?", a: "Floor of the right atrium near the interatrial septum.", tags: cv("conduction-system") },
    { id: "W3-237", dok: 1, q: "What is the AV bundle also called?", a: "Bundle of His.", tags: cv("conduction-system") },
    { id: "W3-238", dok: 1, q: "Where is the AV bundle located?", a: "Superior interventricular septum.", tags: cv("conduction-system") },
    { id: "W3-239", dok: 1, q: "What do bundle branches carry the signal toward?", a: "Apex of the heart.", tags: cv("conduction-system") },
    { id: "W3-240", dok: 1, q: "What do Purkinje fibers do?", a: "Spread the signal through ventricular walls.", tags: cv("conduction-system") },
    /* ---- DOK 2 ---- */
    { id: "W3-253", dok: 2, q: "Trace the conduction pathway in order.", a: "SA node to atria to AV node to AV bundle to bundle branches to Purkinje fibers.", tags: cv("conduction-system") },
    { id: "W3-254", dok: 2, q: "Why does the SA node set the heart rate?", a: "It fires fastest and initiates each normal heartbeat.", tags: cv("conduction-system") },
    { id: "W3-255", dok: 2, q: "Why does the signal pause at the AV node?", a: "To let atria finish emptying before ventricles contract.", tags: cv("conduction-system") },
    { id: "W3-256", dok: 2, q: "Why is the AV bundle important?", a: "It is the only electrical bridge from atria to ventricles.", tags: cv("conduction-system") },
    { id: "W3-257", dok: 2, q: "Why do bundle branches travel toward the apex?", a: "They prepare ventricles to contract from the apex upward.", tags: cv("conduction-system") },
    { id: "W3-258", dok: 2, q: "Why do ventricles contract from apex upward?", a: "It pushes blood superiorly into the pulmonary trunk and aorta.", tags: cv("conduction-system") },
    { id: "W3-259", dok: 2, q: "Compare conducting cells and contractile cells.", a: "Conducting cells carry signals; contractile cells generate force.", tags: cv("conduction-system") },
    { id: "W3-260", dok: 2, q: "Compare SA node and AV node.", a: "SA node starts rhythm; AV node delays and passes signal onward.", tags: cv("conduction-system") },
    { id: "W3-261", dok: 2, q: "Which conduction structure connects atria electrically to ventricles?", a: "AV bundle.", tags: cv("conduction-system") },
    { id: "W3-262", dok: 2, q: "Which conduction structures spread the signal through ventricles?", a: "Bundle branches and Purkinje fibers.", tags: cv("conduction-system") },
    { id: "W3-263", dok: 2, q: "Why must atria contract before ventricles?", a: "Ventricles need to fill before ejecting blood.", tags: cv("conduction-system") },
    { id: "W3-264", dok: 2, q: "What would happen if ventricles contracted before atria?", a: "Ventricular filling would be inefficient.", tags: cv("conduction-system") },
    { id: "W3-265", dok: 2, q: "How does autorhythmicity differ from nervous control?", a: "Autorhythmicity starts rhythm; nerves only modify rate.", tags: cv("conduction-system", "autonomic-control") },
    /* ---- DOK 3 ---- */
    { id: "W3-279", dok: 3, q: "A patient has AV node damage. What timing problem may occur?", a: "Atria and ventricles may beat out of sequence.", tags: cv("conduction-system") },
    { id: "W3-280", dok: 3, q: "If the AV node delay disappears, what happens to filling?", a: "Ventricles may contract before atria finish emptying.", tags: cv("conduction-system") },
    { id: "W3-281", dok: 3, q: "If the AV bundle is blocked, what major conduction problem occurs?", a: "Signals may not pass normally from atria to ventricles.", tags: cv("conduction-system") },
    { id: "W3-282", dok: 3, q: "Damage to bundle branches would most affect which chambers?", a: "Ventricles.", tags: cv("conduction-system") },
    { id: "W3-283", dok: 3, q: "Damage to Purkinje fibers would impair what?", a: "Coordinated ventricular contraction.", tags: cv("conduction-system") },
    { id: "W3-284", dok: 3, q: "Why can the heart beat without nervous input?", a: "Autorhythmic conduction cells generate signals internally.", tags: cv("conduction-system") },
    { id: "W3-287", dok: 3, q: "If the SA node fails, what may take over?", a: "An ectopic pacemaker or artificial pacemaker.", tags: cv("conduction-system") },
    { id: "W3-288", dok: 3, q: "Why is an ectopic pacemaker abnormal?", a: "A site outside the SA node controls rhythm.", tags: cv("conduction-system") },
    { id: "W3-289", dok: 3, q: "Why would ventricular contraction from base downward be inefficient?", a: "It would push blood away from the outflow vessels.", tags: cv("conduction-system") },
    { id: "W3-290", dok: 3, q: "A conduction signal reaches atria but not ventricles. Where is the likely block?", a: "AV node or AV bundle.", tags: cv("conduction-system") },
    { id: "W3-291", dok: 3, q: "A student says nerves start each heartbeat. Correct them.", a: "The conduction system starts the heartbeat; nerves only modulate rate.", tags: cv("conduction-system", "autonomic-control") },
    { id: "W3-292", dok: 3, q: "Why is the AV bundle called the only electrical bridge?", a: "Fibrous tissue electrically separates atria and ventricles except at the AV bundle.", tags: cv("conduction-system") },
    { id: "W3-293", dok: 3, q: "Why is the SA node located in the right atrium useful?", a: "It allows atrial depolarization to begin before ventricular signaling.", tags: cv("conduction-system") },
    { id: "W3-294", dok: 3, q: "What happens if atrial contraction is lost but ventricular contraction remains?", a: "Ventricular filling becomes less efficient.", tags: cv("conduction-system") },
    { id: "W3-295", dok: 3, q: "What happens if ventricular contraction is disorganized?", a: "The heart cannot pump blood effectively.", tags: cv("conduction-system") },
    { id: "W3-296", dok: 3, q: "Connect conduction pathway to blood pathway.", a: "Electrical order ensures atria fill ventricles before ventricles eject blood.", tags: cv("conduction-system") },
    { id: "W3-297", dok: 3, q: "Why does damage near the interventricular septum threaten conduction?", a: "AV bundle and bundle branches run through the septum.", tags: cv("conduction-system", "septa") },
    { id: "W3-299", dok: 3, q: "Which is more immediately life-threatening: atrial or ventricular conduction failure?", a: "Ventricular failure, because ventricles pump blood out of the heart.", tags: cv("conduction-system") }
  ];

  var HEART_TOPIC = {
    id: "t-heart-gross-anatomy",
    title: "Heart: Gross Anatomy",
    summary: "External and internal gross anatomy of the heart: orientation, pericardium, heart wall, four chambers, great vessels, septa, and internal features.",
    videoLabel: "Video: Heart gross anatomy (add lecture URL)",
    dayInCourse: 9, // Week 3, Monday (day 1 of week 3)
    gateKeywords: ["heart", "pericardium", "myocardium", "atrium", "ventricle", "septum"],
    notes: [],
    cards: HEART_CARDS
  };

  var VESSEL_CORONARY_TOPIC = {
    id: "t-heart-vessels-coronary",
    title: "Great Vessels & Coronary Circulation",
    summary: "The great vessels at the base of the heart and the coronary arteries and cardiac veins that supply and drain the heart wall.",
    videoLabel: "Video: Great vessels and coronary circulation (add lecture URL)",
    dayInCourse: 10, // Week 3, Tuesday
    gateKeywords: ["aorta", "vena cava", "coronary", "pulmonary", "sinus"],
    notes: [],
    cards: VESSEL_CORONARY_CARDS
  };

  var CONDUCTION_TOPIC = {
    id: "t-heart-conduction",
    title: "Cardiac Conduction & Control",
    summary: "The conduction system that generates and spreads the heartbeat, and the autonomic control that adjusts heart rate.",
    videoLabel: "Video: Cardiac conduction and control (add lecture URL)",
    dayInCourse: 11, // Week 3, Thursday
    gateKeywords: ["conduction", "SA node", "AV node", "Purkinje", "autorhythmicity"],
    notes: [],
    cards: CONDUCTION_CARDS
  };

  /* ============================================================
     Batch 2, part A: Heart Valves (anatomy + flow-pathway kept)
     ============================================================ */
  var VALVE_CARDS = [
    { id: "W3-101", dok: 1, q: "How many valves are found in the heart?", a: "Four.", tags: cv("valves") },
    { id: "W3-102", dok: 1, q: "Name the four heart valves.", a: "Tricuspid, mitral (bicuspid), pulmonary, aortic.", tags: cv("valves") },
    { id: "W3-103", dok: 1, q: "Which valve lies between the right atrium and right ventricle?", a: "Tricuspid valve.", tags: cv("valves") },
    { id: "W3-104", dok: 1, q: "Which valve lies between the left atrium and left ventricle?", a: "Mitral (bicuspid) valve.", tags: cv("valves") },
    { id: "W3-105", dok: 1, q: "Which valve lies between the right ventricle and pulmonary trunk?", a: "Pulmonary valve.", tags: cv("valves") },
    { id: "W3-106", dok: 1, q: "Which valve lies between the left ventricle and aorta?", a: "Aortic valve.", tags: cv("valves") },
    { id: "W3-107", dok: 1, q: "Which valves are atrioventricular (AV) valves?", a: "Tricuspid and mitral.", tags: cv("valves") },
    { id: "W3-108", dok: 1, q: "Which valves are semilunar valves?", a: "Pulmonary and aortic.", tags: cv("valves") },
    { id: "W3-109", dok: 1, q: "How many cusps does the tricuspid valve have?", a: "Three.", tags: cv("valves") },
    { id: "W3-110", dok: 1, q: "How many cusps does the mitral valve have?", a: "Two.", tags: cv("valves") },
    { id: "W3-111", dok: 1, q: "Which valve is also called the bicuspid valve?", a: "Mitral valve.", tags: cv("valves") },
    { id: "W3-112", dok: 1, q: "Which valve prevents backflow into the right atrium?", a: "Tricuspid valve.", tags: cv("valves") },
    { id: "W3-113", dok: 1, q: "Which valve prevents backflow into the left atrium?", a: "Mitral valve.", tags: cv("valves") },
    { id: "W3-114", dok: 1, q: "Which valve prevents backflow into the right ventricle?", a: "Pulmonary valve.", tags: cv("valves") },
    { id: "W3-115", dok: 1, q: "Which valve prevents backflow into the left ventricle?", a: "Aortic valve.", tags: cv("valves") },
    { id: "W3-116", dok: 1, q: "What are chordae tendineae?", a: "Fibrous cords attaching AV valve cusps to papillary muscles.", tags: cv("valves", "internal-features") },
    { id: "W3-117", dok: 1, q: "What do papillary muscles anchor?", a: "Chordae tendineae.", tags: cv("valves", "internal-features") },
    { id: "W3-136", dok: 2, q: "Compare AV valves with semilunar valves.", a: "AV valves separate atria and ventricles; semilunar valves separate ventricles and arteries.", tags: cv("valves") },
    { id: "W3-137", dok: 2, q: "Compare the tricuspid and mitral valves.", a: "Tricuspid has three cusps on the right; mitral has two cusps on the left.", tags: cv("valves") },
    { id: "W3-138", dok: 2, q: "Compare pulmonary and aortic valves.", a: "Both are semilunar valves leaving the ventricles.", tags: cv("valves") },
    { id: "W3-139", dok: 2, q: "Why are chordae tendineae attached only to AV valves?", a: "They prevent AV valve prolapse during ventricular contraction.", tags: cv("valves", "internal-features") },
    { id: "W3-140", dok: 2, q: "Why don't semilunar valves need chordae tendineae?", a: "Their cup-shaped cusps close by arterial backflow.", tags: cv("valves") },
    { id: "W3-141", dok: 2, q: "Why are papillary muscles important?", a: "They prevent AV valve inversion during ventricular contraction.", tags: cv("valves", "internal-features") },
    { id: "W3-150", dok: 2, q: "Why must blood pass through four valves?", a: "To ensure one-way flow.", tags: cv("valves", "blood-flow") },
    { id: "W3-153", dok: 2, q: "Why is one-way blood flow important?", a: "It maintains efficient circulation.", tags: cv("valves", "blood-flow") },
    { id: "W3-161", dok: 3, q: "If the tricuspid valve fails, blood regurgitates into which chamber?", a: "Right atrium.", tags: cv("valves", "chambers") },
    { id: "W3-162", dok: 3, q: "If the mitral valve fails, blood regurgitates into which chamber?", a: "Left atrium.", tags: cv("valves", "chambers") },
    { id: "W3-163", dok: 3, q: "If the pulmonary valve fails, blood regurgitates into which chamber?", a: "Right ventricle.", tags: cv("valves", "chambers") },
    { id: "W3-164", dok: 3, q: "If the aortic valve fails, blood regurgitates into which chamber?", a: "Left ventricle.", tags: cv("valves", "chambers") },
    { id: "W3-165", dok: 3, q: "Ruptured chordae tendineae would most directly affect which valves?", a: "AV valves.", tags: cv("valves", "internal-features") },
    { id: "W3-166", dok: 3, q: "Papillary muscle infarction most threatens which valves?", a: "Tricuspid and mitral valves.", tags: cv("valves", "internal-features") },
    { id: "W3-168", dok: 3, q: "Why can papillary muscle damage produce severe valve dysfunction?", a: "The valve cusps lose support during contraction.", tags: cv("valves", "internal-features") },
    { id: "W3-172", dok: 3, q: "Predict the effect of complete aortic valve closure failure.", a: "Blood flows back into the left ventricle after ejection.", tags: cv("valves", "chambers") },
    { id: "W3-173", dok: 3, q: "Predict the effect of pulmonary valve incompetence.", a: "Blood returns from the pulmonary trunk into the right ventricle.", tags: cv("valves", "chambers") },
    { id: "W3-174", dok: 3, q: "Why does mitral valve prolapse involve chordae tendineae?", a: "They normally prevent valve inversion.", tags: cv("valves", "internal-features") },
    { id: "W3-175", dok: 3, q: "During ventricular contraction, why don't AV valves flip into the atria?", a: "Papillary muscles tighten chordae tendineae.", tags: cv("valves", "internal-features") },
    { id: "W3-176", dok: 3, q: "Which side of the heart would first be affected by pulmonary valve stenosis?", a: "Right ventricle.", tags: cv("valves", "chambers") },
    { id: "W3-177", dok: 3, q: "Which side would first be affected by aortic stenosis?", a: "Left ventricle.", tags: cv("valves", "chambers") },
    { id: "W3-178", dok: 3, q: "Why does blood never normally move from ventricle back into atrium?", a: "AV valves close during ventricular contraction.", tags: cv("valves", "blood-flow") },
    { id: "W3-179", dok: 3, q: "Which valve disease would directly reduce blood entering the aorta?", a: "Aortic valve stenosis.", tags: cv("valves", "great-vessels") },
    { id: "W3-180", dok: 3, q: "Which valve disease would reduce blood entering the pulmonary trunk?", a: "Pulmonary valve stenosis.", tags: cv("valves", "great-vessels") },
    { id: "W3-181", dok: 3, q: "Explain why AV valves require muscular support while semilunar valves do not.", a: "Ventricular pressure would invert AV valves without chordae and papillary muscles.", tags: cv("valves", "internal-features") },
    { id: "W3-183", dok: 3, q: "If blood bypassed the pulmonary valve, which circulation would fail?", a: "Pulmonary circulation.", tags: cv("valves", "circuits") },
    { id: "W3-184", dok: 3, q: "If blood bypassed the mitral valve, which chamber would not fill normally?", a: "Left ventricle.", tags: cv("valves", "chambers") },
    { id: "W3-189", dok: 3, q: "If the tricuspid valve were absent, what major problem would occur?", a: "Severe regurgitation into the right atrium.", tags: cv("valves", "chambers") },
    { id: "W3-190", dok: 3, q: "If the mitral valve were absent, what major problem would occur?", a: "Severe regurgitation into the left atrium.", tags: cv("valves", "chambers") },
    { id: "W3-191", dok: 3, q: "Why are heart valves passive rather than muscular?", a: "Pressure differences open and close them.", tags: cv("valves") },
    { id: "W3-195", dok: 3, q: "Which valve separates pulmonary from systemic circulation?", a: "None; the lungs separate the circuits, while the aortic valve begins systemic outflow.", tags: cv("valves", "circuits") }
  ];

  /* ============================================================
     Batch 2, part B: Cardiac Muscle Histology (anatomy kept)
     ============================================================ */
  var MUSCLE_CARDS = [
    { id: "W3-118", dok: 1, q: "What tissue forms the myocardium?", a: "Cardiac muscle tissue.", tags: cv("cardiac-muscle") },
    { id: "W3-119", dok: 1, q: "What is a cardiomyocyte?", a: "A cardiac muscle cell.", tags: cv("cardiac-muscle") },
    { id: "W3-120", dok: 1, q: "Cardiac muscle is voluntary or involuntary?", a: "Involuntary.", tags: cv("cardiac-muscle") },
    { id: "W3-121", dok: 1, q: "Cardiac muscle is striated or nonstriated?", a: "Striated.", tags: cv("cardiac-muscle") },
    { id: "W3-122", dok: 1, q: "What specialized junction connects cardiomyocytes?", a: "Intercalated discs.", tags: cv("cardiac-muscle") },
    { id: "W3-123", dok: 1, q: "Which junction prevents cardiomyocytes from pulling apart?", a: "Desmosomes.", tags: cv("cardiac-muscle") },
    { id: "W3-124", dok: 1, q: "Which junction allows electrical signals to pass cell to cell?", a: "Gap junctions.", tags: cv("cardiac-muscle") },
    { id: "W3-142", dok: 2, q: "How do gap junctions contribute to heart contraction?", a: "They rapidly spread electrical signals between cells.", tags: cv("cardiac-muscle") },
    { id: "W3-143", dok: 2, q: "Why are desmosomes necessary?", a: "They hold cells together during powerful contractions.", tags: cv("cardiac-muscle") },
    { id: "W3-144", dok: 2, q: "Why is cardiac muscle branched?", a: "Branching improves coordinated contraction.", tags: cv("cardiac-muscle") },
    { id: "W3-145", dok: 2, q: "Compare cardiac muscle with skeletal muscle.", a: "Both are striated; cardiac muscle is involuntary and branched.", tags: cv("cardiac-muscle") },
    { id: "W3-170", dok: 3, q: "If desmosomes fail, what happens to cardiomyocytes?", a: "They can separate during contraction.", tags: cv("cardiac-muscle") },
    { id: "W3-198", dok: 3, q: "Which structures ensure electrical and mechanical coordination between cardiomyocytes?", a: "Gap junctions and desmosomes within intercalated discs.", tags: cv("cardiac-muscle") },
    { id: "W3-199", dok: 3, q: "Which cardiac muscle feature allows the heart to function as a syncytium?", a: "Gap junctions within intercalated discs.", tags: cv("cardiac-muscle") }
  ];

  /* ============================================================
     Batch 2, part C: Blood-Flow Pathway (anatomy route kept)
     ============================================================ */
  var FLOW_CARDS = [
    { id: "W3-126", dok: 1, q: "Where does oxygen-poor blood enter the heart?", a: "Right atrium.", tags: cv("blood-flow", "chambers") },
    { id: "W3-127", dok: 1, q: "Through which valve does blood leave the right atrium?", a: "Tricuspid valve.", tags: cv("blood-flow", "valves") },
    { id: "W3-128", dok: 1, q: "Which chamber pumps blood into the pulmonary valve?", a: "Right ventricle.", tags: cv("blood-flow", "chambers") },
    { id: "W3-129", dok: 1, q: "Which vessel receives blood after the pulmonary valve?", a: "Pulmonary trunk.", tags: cv("blood-flow", "great-vessels") },
    { id: "W3-130", dok: 1, q: "Where does blood become oxygenated?", a: "Lungs.", tags: cv("blood-flow") },
    { id: "W3-131", dok: 1, q: "Which chamber receives oxygen-rich blood?", a: "Left atrium.", tags: cv("blood-flow", "chambers") },
    { id: "W3-132", dok: 1, q: "Through which valve does blood enter the left ventricle?", a: "Mitral valve.", tags: cv("blood-flow", "valves") },
    { id: "W3-133", dok: 1, q: "Which valve must blood pass before entering the aorta?", a: "Aortic valve.", tags: cv("blood-flow", "valves") },
    { id: "W3-134", dok: 1, q: "Which vessel completes systemic outflow?", a: "Aorta.", tags: cv("blood-flow", "great-vessels") },
    { id: "W3-147", dok: 2, q: "Sequence the first three structures blood encounters entering the heart.", a: "Right atrium to tricuspid valve to right ventricle.", tags: cv("blood-flow") },
    { id: "W3-148", dok: 2, q: "Sequence blood after leaving the pulmonary trunk.", a: "Lungs to pulmonary veins to left atrium.", tags: cv("blood-flow") },
    { id: "W3-149", dok: 2, q: "Sequence blood leaving the left atrium.", a: "Mitral valve to left ventricle to aortic valve.", tags: cv("blood-flow") },
    { id: "W3-154", dok: 2, q: "Compare the direction of flow through pulmonary and systemic circulation.", a: "Pulmonary goes to lungs; systemic goes to body.", tags: cv("blood-flow", "circuits") },
    { id: "W3-155", dok: 2, q: "What structure immediately follows the pulmonary valve?", a: "Pulmonary trunk.", tags: cv("blood-flow", "great-vessels") },
    { id: "W3-156", dok: 2, q: "What structure immediately precedes the mitral valve?", a: "Left atrium.", tags: cv("blood-flow", "chambers") },
    { id: "W3-157", dok: 2, q: "What immediately follows the aortic valve?", a: "Aorta.", tags: cv("blood-flow", "great-vessels") },
    { id: "W3-159", dok: 2, q: "Which chamber contracts immediately before blood enters the pulmonary trunk?", a: "Right ventricle.", tags: cv("blood-flow", "chambers") },
    { id: "W3-160", dok: 2, q: "Which chamber contracts immediately before blood enters the aorta?", a: "Left ventricle.", tags: cv("blood-flow", "chambers") },
    { id: "W3-185", dok: 3, q: "A student says pulmonary veins carry oxygen-poor blood. Correct them.", a: "Pulmonary veins carry oxygen-rich blood.", tags: cv("blood-flow", "great-vessels") },
    { id: "W3-186", dok: 3, q: "A student says arteries always carry oxygen-rich blood. Why is this incorrect?", a: "Pulmonary arteries carry oxygen-poor blood.", tags: cv("blood-flow", "great-vessels") },
    { id: "W3-187", dok: 3, q: "A student says veins always carry oxygen-poor blood. Correct the statement.", a: "Pulmonary veins carry oxygen-rich blood.", tags: cv("blood-flow", "great-vessels") },
    { id: "W3-188", dok: 3, q: "Why is the left ventricle the last chamber before systemic circulation?", a: "It pumps directly into the aorta.", tags: cv("blood-flow", "chambers") },
    { id: "W3-193", dok: 3, q: "Trace blood from the vena cava to the pulmonary trunk.", a: "RA to tricuspid to RV to pulmonary valve to pulmonary trunk.", tags: cv("blood-flow") },
    { id: "W3-194", dok: 3, q: "Trace blood from pulmonary veins to the aorta.", a: "LA to mitral to LV to aortic valve to aorta.", tags: cv("blood-flow") },
    { id: "W3-196", dok: 3, q: "Why is the pulmonary circuit completed before systemic circulation?", a: "Blood must be oxygenated before delivery to the body.", tags: cv("blood-flow", "circuits") }
  ];

  /* ============================================================
     Batch 4: Blood Vessels - Structure & Types (anatomy kept)
     ============================================================ */
  var VESSEL_STRUCTURE_CARDS = [
    { id: "W3-319", dok: 1, q: "What is a blood vessel?", a: "A tube that carries blood through the body.", tags: cv("blood-vessels") },
    { id: "W3-320", dok: 1, q: "What is an artery?", a: "A vessel that carries blood away from the heart.", tags: cv("blood-vessels") },
    { id: "W3-321", dok: 1, q: "What is a vein?", a: "A vessel that carries blood toward the heart.", tags: cv("blood-vessels") },
    { id: "W3-322", dok: 1, q: "What is a capillary?", a: "The smallest vessel, where exchange occurs between blood and tissues.", tags: cv("blood-vessels") },
    { id: "W3-323", dok: 1, q: "What is the lumen of a vessel?", a: "The hollow interior channel where blood flows.", tags: cv("blood-vessels") },
    { id: "W3-324", dok: 1, q: "What is the vascular sequence?", a: "Arteries to arterioles to capillaries to venules to veins.", tags: cv("blood-vessels") },
    { id: "W3-325", dok: 1, q: "Name the three tunics of an artery or vein wall.", a: "Tunica intima, tunica media, tunica externa.", tags: cv("blood-vessels") },
    { id: "W3-326", dok: 1, q: "Which tunic is innermost?", a: "Tunica intima.", tags: cv("blood-vessels") },
    { id: "W3-327", dok: 1, q: "Which tunic is middle?", a: "Tunica media.", tags: cv("blood-vessels") },
    { id: "W3-328", dok: 1, q: "Which tunic is outermost?", a: "Tunica externa.", tags: cv("blood-vessels") },
    { id: "W3-329", dok: 1, q: "What tissue lines the tunica intima?", a: "Simple squamous endothelium on a basement membrane.", tags: cv("blood-vessels") },
    { id: "W3-330", dok: 1, q: "Which tunic is the only layer of a capillary?", a: "Tunica intima.", tags: cv("blood-vessels") },
    { id: "W3-331", dok: 1, q: "What does the tunica media contain?", a: "Smooth muscle and elastic fibers.", tags: cv("blood-vessels") },
    { id: "W3-332", dok: 1, q: "Which tunic is thickest in arteries?", a: "Tunica media.", tags: cv("blood-vessels") },
    { id: "W3-333", dok: 1, q: "What does tunica media smooth muscle control?", a: "Vessel diameter.", tags: cv("blood-vessels") },
    { id: "W3-334", dok: 1, q: "What does the tunica externa mostly contain?", a: "Collagen fibers.", tags: cv("blood-vessels") },
    { id: "W3-335", dok: 1, q: "What does the tunica externa do?", a: "Anchors the vessel to surrounding tissue.", tags: cv("blood-vessels") },
    { id: "W3-349", dok: 2, q: "Compare arteries and veins by direction of flow.", a: "Arteries carry blood away from the heart; veins carry blood toward it.", tags: cv("blood-vessels") },
    { id: "W3-351", dok: 2, q: "Compare arteries and veins by wall structure.", a: "Arteries have thicker walls; veins have thinner walls and wider lumens.", tags: cv("blood-vessels") },
    { id: "W3-352", dok: 2, q: "Compare capillaries with arteries and veins.", a: "Capillaries are thin exchange vessels; arteries and veins are transport vessels.", tags: cv("blood-vessels") },
    { id: "W3-353", dok: 2, q: "Why do capillaries have only tunica intima?", a: "Their thin wall allows exchange between blood and tissues.", tags: cv("blood-vessels") },
    { id: "W3-356", dok: 2, q: "Why does the tunica externa contain collagen?", a: "Collagen anchors and supports the vessel.", tags: cv("blood-vessels") },
    { id: "W3-357", dok: 2, q: "Compare arterioles and arteries.", a: "Arterioles are smaller arteries that regulate entry into capillary beds.", tags: cv("blood-vessels") },
    { id: "W3-358", dok: 2, q: "Compare venules and veins.", a: "Venules collect capillary blood; veins return blood toward the heart.", tags: cv("blood-vessels") },
    { id: "W3-359", dok: 2, q: "Why are capillaries called exchange vessels?", a: "Gases and nutrients cross their thin walls.", tags: cv("blood-vessels") },
    { id: "W3-360", dok: 2, q: "Sequence blood through vessel types from heart back to heart.", a: "Artery to arteriole to capillary to venule to vein.", tags: cv("blood-vessels") },
    { id: "W3-362", dok: 2, q: "Which vessel type directly drains a capillary bed?", a: "Venules.", tags: cv("blood-vessels") },
    { id: "W3-363", dok: 2, q: "Which tunic would be most involved in vasoconstriction?", a: "Tunica media.", tags: cv("blood-vessels") },
    { id: "W3-364", dok: 2, q: "Which tunic would form venous valves?", a: "Tunica intima.", tags: cv("blood-vessels") },
    { id: "W3-365", dok: 2, q: "Which tunic would anchor a large vessel in place?", a: "Tunica externa.", tags: cv("blood-vessels") },
    { id: "W3-376", dok: 3, q: "A vessel has a thick tunica media and carries blood away from the heart. What is it?", a: "An artery.", tags: cv("blood-vessels") },
    { id: "W3-377", dok: 3, q: "A vessel has a thin wall, wide lumen, and valves. What is it?", a: "A vein.", tags: cv("blood-vessels") },
    { id: "W3-378", dok: 3, q: "A vessel wall is only simple squamous endothelium. What vessel type is it?", a: "Capillary.", tags: cv("blood-vessels") },
    { id: "W3-383", dok: 3, q: "If venous valves fail, what problem can occur?", a: "Backward flow and pooling of blood.", tags: cv("blood-vessels") },
    { id: "W3-389", dok: 3, q: "A student says veins always carry deoxygenated blood. Why is that wrong?", a: "Pulmonary veins carry oxygen-rich blood to the left atrium.", tags: cv("blood-vessels", "great-vessels") },
    { id: "W3-390", dok: 3, q: "A student says arteries always carry oxygenated blood. Why is that wrong?", a: "Pulmonary arteries carry oxygen-poor blood to the lungs.", tags: cv("blood-vessels", "great-vessels") },
    { id: "W3-394", dok: 3, q: "Why does the vascular sequence place capillaries between arterioles and venules?", a: "Capillaries perform exchange before blood returns through venous vessels.", tags: cv("blood-vessels") },
    { id: "W3-397", dok: 3, q: "Why is the tunica intima important in both large vessels and capillaries?", a: "It provides the endothelial blood-contacting surface.", tags: cv("blood-vessels") },
    { id: "W3-400", dok: 3, q: "Connect vessel wall anatomy to function.", a: "Tunica intima lines blood flow, tunica media regulates diameter, and tunica externa anchors/supports the vessel.", tags: cv("blood-vessels") }
  ];

  var VALVE_TOPIC = {
    id: "t-heart-valves",
    title: "Heart Valves",
    summary: "The four heart valves, their locations and cusps, the chordae tendineae and papillary muscles, and one-way flow.",
    videoLabel: "Video: Heart valves (add lecture URL)",
    dayInCourse: 9,
    gateKeywords: ["valve", "tricuspid", "mitral", "semilunar", "chordae"],
    notes: [],
    cards: VALVE_CARDS
  };

  var MUSCLE_TOPIC = {
    id: "t-cardiac-muscle",
    title: "Cardiac Muscle Histology",
    summary: "Cardiac muscle tissue: cardiomyocytes, intercalated discs, gap junctions, and desmosomes.",
    videoLabel: "Video: Cardiac muscle histology (add lecture URL)",
    dayInCourse: 10,
    gateKeywords: ["cardiac muscle", "cardiomyocyte", "intercalated", "gap junction", "desmosome"],
    notes: [],
    cards: MUSCLE_CARDS
  };

  var FLOW_TOPIC = {
    id: "t-heart-blood-flow",
    title: "Blood-Flow Pathway",
    summary: "The route of blood through the chambers, valves, and great vessels of the heart.",
    videoLabel: "Video: Blood-flow pathway (add lecture URL)",
    dayInCourse: 11,
    gateKeywords: ["blood flow", "pathway", "atrium", "ventricle", "valve"],
    notes: [],
    cards: FLOW_CARDS
  };

  var VESSEL_STRUCTURE_TOPIC = {
    id: "t-vessel-structure",
    title: "Blood Vessels: Structure & Types",
    summary: "Arteries, veins, and capillaries; the three tunics of the vessel wall; and the vascular sequence.",
    videoLabel: "Video: Blood vessel structure and types (add lecture URL)",
    dayInCourse: 12,
    gateKeywords: ["artery", "vein", "capillary", "tunica", "lumen"],
    notes: [],
    cards: VESSEL_STRUCTURE_CARDS
  };

  var HEART_MODULE = {
    id: "m-heart",
    title: "Cardiovascular System: The Heart",
    week: 3,
    topics: [
      HEART_TOPIC,
      VALVE_TOPIC,
      MUSCLE_TOPIC,
      FLOW_TOPIC,
      VESSEL_CORONARY_TOPIC,
      CONDUCTION_TOPIC,
      VESSEL_STRUCTURE_TOPIC
    ]
  };

  // Create the content object if loaded alone, or append if the full
  // course content is already present. Guard against duplicate insertion.
  var root = (typeof window !== "undefined") ? window : this;
  if (!root.BIO004_COURSE_CONTENT) {
    root.BIO004_COURSE_CONTENT = { courseLabel: "BIO 004 Human Anatomy", modules: [] };
  }
  if (!root.BIO004_COURSE_CONTENT.modules) {
    root.BIO004_COURSE_CONTENT.modules = [];
  }
  var exists = root.BIO004_COURSE_CONTENT.modules.some(function (m) { return m && m.id === HEART_MODULE.id; });
  if (!exists) {
    root.BIO004_COURSE_CONTENT.modules.push(HEART_MODULE);
  }

  // Also expose the raw deck for any external mastery-system tooling.
  root.BIO004_HEART_CARDS = HEART_CARDS.concat(VESSEL_CORONARY_CARDS, CONDUCTION_CARDS);
})();
