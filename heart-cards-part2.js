/* ============================================================
   BIO 004 Human Anatomy - Week 3 recall deck, part 2
   Batch 5 (vessel types & routes), Batch 6 (fetal circulation +
   blood-vessel disorders), Batch 7 (respiratory system).
   Free-recall flip cards. Loads AFTER heart-cards.js.
   Also assigns competency IDs across ALL loaded cards.
   ============================================================ */
(function(){
  "use strict";

  var B5_VESSEL_TYPES = [
    { id:"W3-401", dok:1, q:"What are elastic arteries?", a:"The largest arteries, such as the aorta, rich in elastic fibers.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-403", dok:1, q:"What are muscular arteries?", a:"Medium-sized arteries that deliver blood to specific organs.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-404", dok:1, q:"What layer dominates the wall of muscular arteries?", a:"Tunica media, mostly smooth muscle.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-405", dok:1, q:"What are arterioles?", a:"The smallest arteries that control blood flow into capillary beds.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-408", dok:1, q:"Why are capillaries thin?", a:"To allow exchange between blood and tissues.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-409", dok:1, q:"Name the three capillary types.", a:"Continuous, fenestrated, and sinusoid.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-410", dok:1, q:"What is a continuous capillary?", a:"A capillary with an unbroken endothelial lining.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-411", dok:1, q:"Where are continuous capillaries common?", a:"Muscle, skin, and lungs.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-412", dok:1, q:"What is a fenestrated capillary?", a:"A capillary with small pores called fenestrations.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-413", dok:1, q:"Where are fenestrated capillaries found?", a:"Kidney and small intestine.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-414", dok:1, q:"What is a sinusoid?", a:"A wide, leaky capillary with large gaps between cells.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-415", dok:1, q:"Where are sinusoids found?", a:"Liver, spleen, and bone marrow.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-416", dok:1, q:"What is a capillary bed?", a:"A network of capillaries supplied by a single arteriole.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-417", dok:1, q:"What is a precapillary sphincter?", a:"A ring of smooth muscle that opens or closes capillary entrance.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-418", dok:1, q:"What is a vascular shunt?", a:"A direct channel allowing blood to bypass capillaries.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-419", dok:1, q:"What is a venule?", a:"The smallest vein, collecting blood from capillary beds.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-420", dok:1, q:"What structural features distinguish veins from matching arteries?", a:"Thinner walls, wider lumens, and valves.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-421", dok:1, q:"What are venous valves?", a:"Flaps of tunica intima that prevent backward blood flow.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-422", dok:1, q:"Where are venous valves common?", a:"Limb veins.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-431", dok:2, q:"Compare elastic and muscular arteries.", a:"Elastic arteries stretch and recoil; muscular arteries distribute blood to organs.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-438", dok:2, q:"Compare continuous and fenestrated capillaries.", a:"Continuous capillaries have unbroken lining; fenestrated capillaries have pores.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-439", dok:2, q:"Compare fenestrated capillaries and sinusoids.", a:"Fenestrated have small pores; sinusoids have large gaps and are leakier.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-440", dok:2, q:"Rank capillaries from least leaky to most leaky.", a:"Continuous to fenestrated to sinusoid.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-441", dok:2, q:"Why are fenestrated capillaries useful in kidneys?", a:"They allow rapid filtration.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-442", dok:2, q:"Why are fenestrated capillaries useful in small intestine?", a:"They allow rapid absorption.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-443", dok:2, q:"Why are sinusoids useful in liver, spleen, and bone marrow?", a:"They allow large substances or cells to cross.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-444", dok:2, q:"Why are continuous capillaries common in muscle and skin?", a:"They allow controlled exchange while limiting leakage.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-447", dok:2, q:"Compare venules and capillaries.", a:"Venules collect blood from capillaries; capillaries perform exchange.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-460", dok:2, q:"What visible feature may mark valves in a superficial vein?", a:"Small bumps along the vein.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-467", dok:3, q:"A tissue requires rapid filtration. Which capillary type fits best?", a:"Fenestrated capillary.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-468", dok:3, q:"A tissue allows whole cells to cross the vessel wall. Which capillary type fits best?", a:"Sinusoid.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-469", dok:3, q:"A tissue needs a tighter exchange barrier. Which capillary type fits best?", a:"Continuous capillary.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-470", dok:3, q:"Why would brain capillaries need to be especially tight?", a:"To keep most substances out and protect neural tissue.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-471", dok:3, q:"Why would liver sinusoids be leaky?", a:"The liver processes blood contents and permits large materials to pass.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-472", dok:3, q:"If precapillary sphincters close, where does blood go?", a:"Through a vascular shunt or bypass route.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-473", dok:3, q:"If venous valves fail in the legs, what condition can develop?", a:"Blood pooling and varicose veins.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-476", dok:3, q:"If a limb vein valve allows backflow, what happens locally?", a:"Blood pools below the failed valve.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-477", dok:3, q:"Why is a vein more likely than an artery to collapse when cut?", a:"Its wall is thinner and pressure is lower.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-479", dok:3, q:"A clot forms in a deep leg vein. Which vessel category is involved?", a:"A vein, specifically a deep vein.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-486", dok:3, q:"A student says all vessels have three tunics. Correct them.", a:"Arteries and veins have three tunics; capillaries have only tunica intima.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-487", dok:3, q:"A student says capillaries are strong pressure vessels. Correct them.", a:"Capillaries are thin exchange vessels, not high-pressure vessels.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-488", dok:3, q:"A student says veins push blood with thick muscular walls. Correct them.", a:"Veins rely more on valves and skeletal muscle pump under low pressure.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-489", dok:3, q:"A student says arterioles mainly collect blood from capillaries. Correct them.", a:"Arterioles deliver and regulate blood flow into capillaries.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-490", dok:3, q:"A student says venules regulate capillary entry. Correct them.", a:"Venules collect blood leaving capillary beds.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-494", dok:3, q:"Why is the same vessel name not always the same permeability?", a:"Capillaries vary structurally as continuous, fenestrated, or sinusoid.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-497", dok:3, q:"Why are venous valves especially important below the heart?", a:"They oppose gravity and prevent backward flow.", tags:["cardiovascular","vessel-types"] },
    { id:"W3-498", dok:3, q:"How does vessel structure support pressure differences?", a:"Arteries have thick media for high pressure; veins have thin walls for low pressure.", tags:["cardiovascular","vessel-types"] }
  ];
  var B5_VASCULAR_ROUTES = [
    { id:"W3-425", dok:1, q:"What is the pulmonary circuit?", a:"Route from right heart to lungs and back to left heart.", tags:["cardiovascular","vascular-routes"] },
    { id:"W3-426", dok:1, q:"What is the systemic circuit?", a:"Route from left heart to body and back to right heart.", tags:["cardiovascular","vascular-routes"] },
    { id:"W3-427", dok:1, q:"What is a portal system?", a:"Blood passes through two capillary beds in series before returning to the heart.", tags:["cardiovascular","vascular-routes"] },
    { id:"W3-428", dok:1, q:"What is an example of a portal system?", a:"Hepatic portal system.", tags:["cardiovascular","vascular-routes"] },
    { id:"W3-429", dok:1, q:"What is an anastomosis?", a:"A place where two vessels join, giving alternate blood routes.", tags:["cardiovascular","vascular-routes"] },
    { id:"W3-430", dok:1, q:"What is an arteriovenous anastomosis?", a:"A direct artery-to-vein connection that bypasses capillaries.", tags:["cardiovascular","vascular-routes"] },
    { id:"W3-453", dok:2, q:"Compare pulmonary and systemic circuits by starting chamber.", a:"Pulmonary starts at right ventricle; systemic starts at left ventricle.", tags:["cardiovascular","vascular-routes"] },
    { id:"W3-454", dok:2, q:"Compare pulmonary and systemic circuits by return chamber.", a:"Pulmonary returns to left atrium; systemic returns to right atrium.", tags:["cardiovascular","vascular-routes"] },
    { id:"W3-455", dok:2, q:"Why does a portal system have two capillary beds?", a:"It allows blood from one organ region to be processed by another before returning.", tags:["cardiovascular","vascular-routes"] },
    { id:"W3-456", dok:2, q:"What does an anastomosis provide if one vessel path is blocked?", a:"An alternate route for blood flow.", tags:["cardiovascular","vascular-routes"] },
    { id:"W3-457", dok:2, q:"How does an arteriovenous anastomosis differ from a capillary bed?", a:"It bypasses exchange by connecting artery directly to vein.", tags:["cardiovascular","vascular-routes"] },
    { id:"W3-458", dok:2, q:"Why are capillary beds positioned between arterioles and venules?", a:"They allow exchange before venous return begins.", tags:["cardiovascular","vascular-routes"] },
    { id:"W3-480", dok:3, q:"If blood bypasses capillaries through an arteriovenous anastomosis, what function is skipped?", a:"Exchange with tissue.", tags:["cardiovascular","vascular-routes"] },
    { id:"W3-481", dok:3, q:"Why can anastomoses reduce tissue damage during blockage?", a:"They provide collateral routes for blood flow.", tags:["cardiovascular","vascular-routes"] },
    { id:"W3-482", dok:3, q:"If no anastomosis exists and a vessel is blocked, what is more likely?", a:"Tissue downstream may lose blood supply.", tags:["cardiovascular","vascular-routes"] },
    { id:"W3-483", dok:3, q:"Trace systemic blood from the left ventricle to a tissue capillary.", a:"Left ventricle to aorta/artery to arteriole to capillary bed.", tags:["cardiovascular","vascular-routes"] },
    { id:"W3-484", dok:3, q:"Trace systemic blood from a tissue capillary back to the right atrium.", a:"Capillary to venule to vein to vena cava to right atrium.", tags:["cardiovascular","vascular-routes"] },
    { id:"W3-485", dok:3, q:"Why does the hepatic portal system send blood through the liver before the heart?", a:"The liver processes absorbed materials before blood returns to general circulation.", tags:["cardiovascular","vascular-routes"] }
  ];
  var B6_FETAL = [
    { id:"W3-531", dok:1, difficulty:2, q:"What is fetal circulation?", a:"The fetal circulatory plan that gets oxygen from the placenta instead of the lungs.", tags:["cardiovascular","fetal-circulation","fetal circulation","placenta"] },
    { id:"W3-532", dok:1, difficulty:2, q:"What is the placenta?", a:"The organ where fetal blood gets oxygen and nutrients and gives up wastes.", tags:["cardiovascular","fetal-circulation","placenta","oxygen","nutrients"] },
    { id:"W3-533", dok:1, difficulty:2, q:"What is the umbilical cord?", a:"The cord connecting fetus to placenta and carrying umbilical vessels.", tags:["cardiovascular","fetal-circulation","umbilical cord","placenta"] },
    { id:"W3-534", dok:1, difficulty:2, q:"Why are fetal lungs bypassed?", a:"They are collapsed and not used for gas exchange before birth.", tags:["cardiovascular","fetal-circulation","fetal lungs","bypass"] },
    { id:"W3-535", dok:1, difficulty:2, q:"Why is the fetal liver largely bypassed?", a:"The placenta handles much of the filtering before birth.", tags:["cardiovascular","fetal-circulation","ductus venosus","liver"] },
    { id:"W3-536", dok:1, difficulty:2, q:"What is a fetal shunt?", a:"A special vessel or opening that routes blood around an organ.", tags:["cardiovascular","fetal-circulation","shunt","fetal circulation"] },
    { id:"W3-537", dok:1, difficulty:2, q:"Name the three fetal shunts.", a:"Ductus venosus, foramen ovale, and ductus arteriosus.", tags:["cardiovascular","fetal-circulation","fetal shunts"] },
    { id:"W3-538", dok:1, difficulty:2, q:"What does the umbilical vein carry?", a:"Oxygen-rich blood from placenta to fetus.", tags:["cardiovascular","fetal-circulation","umbilical vein"] },
    { id:"W3-539", dok:1, difficulty:2, q:"What is the ductus venosus?", a:"A shunt through the fetal liver.", tags:["cardiovascular","fetal-circulation","ductus venosus"] },
    { id:"W3-540", dok:1, difficulty:2, q:"What does the ductus venosus do?", a:"Lets most blood bypass the liver and flow toward the inferior vena cava.", tags:["cardiovascular","fetal-circulation","ductus venosus","ivc"] },
    { id:"W3-541", dok:1, difficulty:2, q:"What is the foramen ovale?", a:"An opening in the interatrial septum.", tags:["cardiovascular","fetal-circulation","foramen ovale"] },
    { id:"W3-542", dok:1, difficulty:2, q:"What does the foramen ovale do?", a:"Lets blood pass from right atrium to left atrium, bypassing lungs.", tags:["cardiovascular","fetal-circulation","foramen ovale","atria"] },
    { id:"W3-543", dok:1, difficulty:2, q:"What is the ductus arteriosus?", a:"A short vessel between pulmonary trunk and aorta.", tags:["cardiovascular","fetal-circulation","ductus arteriosus"] },
    { id:"W3-544", dok:1, difficulty:2, q:"What does the ductus arteriosus do?", a:"Shunts blood from pulmonary trunk into the aorta, bypassing lungs.", tags:["cardiovascular","fetal-circulation","ductus arteriosus","aorta"] },
    { id:"W3-545", dok:1, difficulty:2, q:"What do the umbilical arteries carry?", a:"Oxygen-poor blood from fetus back to placenta.", tags:["cardiovascular","fetal-circulation","umbilical arteries"] },
    { id:"W3-546", dok:1, difficulty:2, q:"What does the umbilical vein become after birth?", a:"Ligamentum teres, the round ligament of the liver.", tags:["cardiovascular","fetal-circulation","ligamentum teres"] },
    { id:"W3-547", dok:1, difficulty:2, q:"What does the ductus venosus become after birth?", a:"Ligamentum venosum.", tags:["cardiovascular","fetal-circulation","ligamentum venosum"] },
    { id:"W3-548", dok:1, difficulty:2, q:"What does the foramen ovale become after birth?", a:"Fossa ovalis.", tags:["cardiovascular","fetal-circulation","fossa ovalis"] },
    { id:"W3-549", dok:1, difficulty:2, q:"What does the ductus arteriosus become after birth?", a:"Ligamentum arteriosum.", tags:["cardiovascular","fetal-circulation","ligamentum arteriosum"] },
    { id:"W3-550", dok:1, difficulty:2, q:"What do the umbilical arteries become after birth?", a:"Medial umbilical ligaments.", tags:["cardiovascular","fetal-circulation","medial umbilical ligaments"] },
    { id:"W3-566", dok:2, difficulty:3, q:"Why does fetal circulation differ from adult circulation?", a:"The fetus uses the placenta for oxygen, not the lungs.", tags:["cardiovascular","fetal-circulation","fetal vs adult"] },
    { id:"W3-567", dok:2, difficulty:3, q:"Compare the ductus venosus and ductus arteriosus.", a:"Ductus venosus bypasses liver; ductus arteriosus bypasses lungs.", tags:["cardiovascular","fetal-circulation","fetal shunts"] },
    { id:"W3-568", dok:2, difficulty:3, q:"Compare foramen ovale and ductus arteriosus.", a:"Both bypass lungs; foramen ovale connects atria, ductus arteriosus connects pulmonary trunk to aorta.", tags:["cardiovascular","fetal-circulation","fetal shunts"] },
    { id:"W3-569", dok:2, difficulty:3, q:"Why is the umbilical vein unusual compared with most veins?", a:"It carries oxygen-rich blood.", tags:["cardiovascular","fetal-circulation","umbilical vein","oxygen"] },
    { id:"W3-570", dok:2, difficulty:3, q:"Why are the umbilical arteries unusual compared with most arteries?", a:"They carry oxygen-poor blood.", tags:["cardiovascular","fetal-circulation","umbilical arteries","oxygen"] },
    { id:"W3-571", dok:2, difficulty:3, q:"Why does the foramen ovale move blood from right atrium to left atrium?", a:"It bypasses the nonfunctional fetal lungs.", tags:["cardiovascular","fetal-circulation","foramen ovale","lungs"] },
    { id:"W3-572", dok:2, difficulty:3, q:"Why does the ductus arteriosus connect pulmonary trunk to aorta?", a:"It diverts blood away from the collapsed fetal lungs.", tags:["cardiovascular","fetal-circulation","ductus arteriosus"] },
    { id:"W3-573", dok:2, difficulty:3, q:"Why does the ductus venosus send blood toward the inferior vena cava?", a:"It lets placental blood bypass most of the liver and enter systemic return.", tags:["cardiovascular","fetal-circulation","ductus venosus","ivc"] },
    { id:"W3-574", dok:2, difficulty:3, q:"Match fetal shunt to adult remnant: foramen ovale.", a:"Foramen ovale to fossa ovalis.", tags:["cardiovascular","fetal-circulation","matching","fetal remnant"] },
    { id:"W3-575", dok:2, difficulty:3, q:"Match fetal shunt to adult remnant: ductus arteriosus.", a:"Ductus arteriosus to ligamentum arteriosum.", tags:["cardiovascular","fetal-circulation","matching","fetal remnant"] },
    { id:"W3-576", dok:2, difficulty:3, q:"Match fetal vessel to adult remnant: umbilical vein.", a:"Umbilical vein to ligamentum teres.", tags:["cardiovascular","fetal-circulation","matching","fetal remnant"] },
    { id:"W3-577", dok:2, difficulty:3, q:"Match fetal shunt to adult remnant: ductus venosus.", a:"Ductus venosus to ligamentum venosum.", tags:["cardiovascular","fetal-circulation","matching","fetal remnant"] },
    { id:"W3-578", dok:2, difficulty:3, q:"Match fetal vessels to adult remnants: umbilical arteries.", a:"Umbilical arteries to medial umbilical ligaments.", tags:["cardiovascular","fetal-circulation","matching","fetal remnant"] },
    { id:"W3-579", dok:2, difficulty:3, q:"What major changes at birth make fetal shunts unnecessary?", a:"Lungs inflate and placental circulation is cut off.", tags:["cardiovascular","fetal-circulation","birth","shunt closure"] },
    { id:"W3-580", dok:2, difficulty:3, q:"What is a patent ductus arteriosus?", a:"A ductus arteriosus that remains open after birth.", tags:["cardiovascular","fetal-circulation","pda","fetal shunt"] },
    { id:"W3-581", dok:2, difficulty:3, q:"What is a patent foramen ovale?", a:"A foramen ovale that remains open after birth.", tags:["cardiovascular","fetal-circulation","pfo","fetal shunt"] },
    { id:"W3-582", dok:2, difficulty:3, q:"Why are patent fetal shunts abnormal after birth?", a:"They leave abnormal connections between circulatory pathways.", tags:["cardiovascular","fetal-circulation","patent shunts"] },
    { id:"W3-593", dok:3, difficulty:4, q:"A newborn has blood still moving from pulmonary trunk to aorta. Which fetal structure stayed open?", a:"Ductus arteriosus.", tags:["cardiovascular","fetal-circulation","patent ductus arteriosus"] },
    { id:"W3-594", dok:3, difficulty:4, q:"A newborn has persistent communication between atria. Which fetal structure stayed open?", a:"Foramen ovale.", tags:["cardiovascular","fetal-circulation","patent foramen ovale"] },
    { id:"W3-595", dok:3, difficulty:4, q:"If the ductus venosus failed to form, which organ would fetal blood not bypass efficiently?", a:"Liver.", tags:["cardiovascular","fetal-circulation","ductus venosus","liver bypass"] },
    { id:"W3-596", dok:3, difficulty:4, q:"If the foramen ovale failed to form, which organ bypass would be reduced?", a:"Lung bypass through the atria.", tags:["cardiovascular","fetal-circulation","foramen ovale","lungs"] },
    { id:"W3-597", dok:3, difficulty:4, q:"If the ductus arteriosus failed to form, what fetal bypass route would be reduced?", a:"Pulmonary trunk to aorta lung bypass.", tags:["cardiovascular","fetal-circulation","ductus arteriosus","lungs"] },
    { id:"W3-598", dok:3, difficulty:4, q:"Why does the umbilical vein carry the most oxygen-rich fetal blood?", a:"It comes directly from the placenta.", tags:["cardiovascular","fetal-circulation","umbilical vein","placenta"] },
    { id:"W3-599", dok:3, difficulty:4, q:"Why do umbilical arteries carry oxygen-poor blood away from the fetus?", a:"They return fetal blood to the placenta for gas and waste exchange.", tags:["cardiovascular","fetal-circulation","umbilical arteries","placenta"] },
    { id:"W3-600", dok:3, difficulty:4, q:"Explain the fetal circulation strategy in one sentence.", a:"Placental oxygenated blood enters the fetus and shunts route much of it around the liver and lungs until birth.", tags:["cardiovascular","fetal-circulation","fetal circulation","integration"] }
  ];
  var B6_VESSEL_DISORDERS = [
    { id:"W3-501", dok:1, difficulty:2, q:"What is a healthy vessel?", a:"A vessel with a smooth endothelial lining and a wall that can stretch and recoil.", tags:["cardiovascular","vessel-disorder","clinical","vascular disorders","endothelium","vessel wall"] },
    { id:"W3-502", dok:1, difficulty:2, q:"What is a vascular disorder?", a:"A disease of a blood vessel that narrows the lumen, weakens the wall, or lets blood pool.", tags:["cardiovascular","vessel-disorder","clinical","vascular disorder","lumen","pooling"] },
    { id:"W3-503", dok:1, difficulty:2, q:"What is atherosclerosis?", a:"A disease in which fatty plaques build up within artery walls.", tags:["cardiovascular","vessel-disorder","clinical","atherosclerosis","plaque","artery"] },
    { id:"W3-504", dok:1, difficulty:2, q:"What vessel layer is damaged at the start of plaque formation?", a:"Tunica intima, specifically the endothelial lining.", tags:["cardiovascular","vessel-disorder","clinical","endothelial injury","tunica intima"] },
    { id:"W3-505", dok:1, difficulty:2, q:"What is an atheroma?", a:"A plaque made of fatty material, cells, and debris within an artery wall.", tags:["cardiovascular","vessel-disorder","clinical","atheroma","plaque"] },
    { id:"W3-506", dok:1, difficulty:2, q:"What happens to the lumen as an atheroma grows?", a:"It narrows as the plaque bulges inward.", tags:["cardiovascular","vessel-disorder","clinical","narrowed lumen","plaque"] },
    { id:"W3-507", dok:1, difficulty:2, q:"What is arteriosclerosis?", a:"General stiffening and thickening of artery walls.", tags:["cardiovascular","vessel-disorder","clinical","arteriosclerosis","stiffening"] },
    { id:"W3-508", dok:1, difficulty:2, q:"How is atherosclerosis related to arteriosclerosis?", a:"Atherosclerosis is the most common form of arteriosclerosis.", tags:["cardiovascular","vessel-disorder","clinical","atherosclerosis","arteriosclerosis"] },
    { id:"W3-509", dok:1, difficulty:2, q:"What is a thrombus?", a:"A clot that can form on a roughened plaque and block a vessel.", tags:["cardiovascular","vessel-disorder","clinical","thrombus","clot","plaque"] },
    { id:"W3-510", dok:1, difficulty:2, q:"What is an aneurysm?", a:"A balloon-like bulge in a weakened artery wall.", tags:["cardiovascular","vessel-disorder","clinical","aneurysm","artery wall"] },
    { id:"W3-511", dok:1, difficulty:2, q:"Where are aneurysms common?", a:"In the aorta and arteries of the brain.", tags:["cardiovascular","vessel-disorder","clinical","aneurysm","aorta","brain"] },
    { id:"W3-512", dok:1, difficulty:2, q:"Why does an aneurysm matter clinically?", a:"It can rupture.", tags:["cardiovascular","vessel-disorder","clinical","aneurysm","rupture"] },
    { id:"W3-513", dok:1, difficulty:2, q:"What is coronary artery disease?", a:"Narrowing of coronary arteries that supply the heart wall.", tags:["cardiovascular","coronary-circulation","clinical","cad","coronary arteries"] },
    { id:"W3-514", dok:1, difficulty:2, q:"What can coronary artery disease cause?", a:"Myocardial ischemia and heart attack.", tags:["cardiovascular","coronary-circulation","clinical","cad","myocardial infarction"] },
    { id:"W3-515", dok:1, difficulty:2, q:"What is peripheral artery disease?", a:"Narrowing of arteries of the limbs, usually the legs.", tags:["cardiovascular","vessel-disorder","clinical","pad","limb arteries"] },
    { id:"W3-516", dok:1, difficulty:2, q:"What symptom is associated with peripheral artery disease?", a:"Pain on walking due to reduced blood supply to muscles.", tags:["cardiovascular","vessel-disorder","clinical","pad","claudication"] },
    { id:"W3-517", dok:1, difficulty:2, q:"What is hypertension?", a:"Chronically high pressure within the arteries.", tags:["cardiovascular","vessel-disorder","clinical","hypertension","arteries"] },
    { id:"W3-518", dok:1, difficulty:2, q:"Why does hypertension matter?", a:"It strains the heart and damages vessel walls over time.", tags:["cardiovascular","vessel-disorder","clinical","hypertension","wall damage"] },
    { id:"W3-519", dok:1, difficulty:2, q:"What is a stroke?", a:"Loss of blood supply to part of the brain from a blocked or burst artery.", tags:["cardiovascular","vessel-disorder","clinical","stroke","brain","artery"] },
    { id:"W3-520", dok:1, difficulty:2, q:"Why is stroke an emergency?", a:"Brain tissue begins to die within minutes.", tags:["cardiovascular","vessel-disorder","clinical","stroke","brain death"] },
    { id:"W3-521", dok:1, difficulty:2, q:"What are varicose veins?", a:"Superficial veins that become twisted and swollen when valves fail.", tags:["cardiovascular","vessel-disorder","clinical","varicose veins","valves"] },
    { id:"W3-522", dok:1, difficulty:2, q:"Where do varicose veins most often occur?", a:"In the legs.", tags:["cardiovascular","vessel-disorder","clinical","varicose veins","legs"] },
    { id:"W3-523", dok:1, difficulty:2, q:"What is deep vein thrombosis?", a:"A blood clot in a deep vein, usually of the leg.", tags:["cardiovascular","vessel-disorder","clinical","dvt","clot","deep vein"] },
    { id:"W3-524", dok:1, difficulty:2, q:"What is a pulmonary embolism?", a:"A clot, often from a deep vein, that lodges in an artery of the lung.", tags:["cardiovascular","vessel-disorder","clinical","pulmonary embolism","dvt"] },
    { id:"W3-525", dok:1, difficulty:2, q:"Why is a pulmonary embolism dangerous?", a:"It blocks blood flow to the lung and can be life-threatening.", tags:["cardiovascular","vessel-disorder","clinical","pulmonary embolism","lung"] },
    { id:"W3-526", dok:1, difficulty:2, q:"What is phlebitis?", a:"Inflammation of a vein.", tags:["cardiovascular","vessel-disorder","clinical","phlebitis","vein inflammation"] },
    { id:"W3-527", dok:1, difficulty:2, q:"What symptoms can phlebitis cause?", a:"Pain, redness, and tenderness along the vein.", tags:["cardiovascular","vessel-disorder","clinical","phlebitis","symptoms"] },
    { id:"W3-528", dok:1, difficulty:2, q:"What are hemorrhoids?", a:"Varicose veins of the rectal and anal region.", tags:["cardiovascular","vessel-disorder","clinical","hemorrhoids","varicose veins"] },
    { id:"W3-529", dok:1, difficulty:2, q:"What is chronic venous insufficiency?", a:"Long-term failure of leg vein valves.", tags:["cardiovascular","vessel-disorder","clinical","chronic venous insufficiency"] },
    { id:"W3-530", dok:1, difficulty:2, q:"What can chronic venous insufficiency cause?", a:"Persistent lower-leg swelling and skin changes.", tags:["cardiovascular","vessel-disorder","clinical","venous insufficiency","edema"] },
    { id:"W3-551", dok:2, difficulty:3, q:"Compare atherosclerosis and arteriosclerosis.", a:"Arteriosclerosis is general artery stiffening; atherosclerosis is plaque buildup and is the most common form.", tags:["cardiovascular","vessel-disorder","clinical","compare","artery disease"] },
    { id:"W3-552", dok:2, difficulty:3, q:"How does endothelial injury contribute to plaque formation?", a:"Damage to the smooth intima creates the starting point for plaque buildup.", tags:["cardiovascular","vessel-disorder","clinical","endothelial injury"] },
    { id:"W3-553", dok:2, difficulty:3, q:"Why does a plaque reduce blood flow?", a:"It bulges inward and narrows the lumen.", tags:["cardiovascular","vessel-disorder","clinical","plaque","blood flow"] },
    { id:"W3-554", dok:2, difficulty:3, q:"Why can a roughened plaque suddenly worsen blood flow?", a:"A thrombus can form on it and block the vessel.", tags:["cardiovascular","vessel-disorder","clinical","thrombus","plaque"] },
    { id:"W3-555", dok:2, difficulty:3, q:"Compare an aneurysm and atherosclerosis.", a:"An aneurysm weakens and bulges the wall; atherosclerosis builds plaque and narrows the lumen.", tags:["cardiovascular","vessel-disorder","clinical","aneurysm","atherosclerosis"] },
    { id:"W3-556", dok:2, difficulty:3, q:"Why do arterial disorders often involve narrowing or wall weakening?", a:"Arteries carry blood under high pressure.", tags:["cardiovascular","vessel-disorder","clinical","arterial disorders","pressure"] },
    { id:"W3-557", dok:2, difficulty:3, q:"Why do venous disorders often involve pooling?", a:"Veins are low-pressure vessels that depend on valves and muscle pumps.", tags:["cardiovascular","vessel-disorder","clinical","venous disorders","pooling"] },
    { id:"W3-558", dok:2, difficulty:3, q:"Why are varicose veins related to valve failure?", a:"Failed valves allow backward flow, causing blood to pool and veins to bulge.", tags:["cardiovascular","vessel-disorder","clinical","varicose veins","valves"] },
    { id:"W3-559", dok:2, difficulty:3, q:"Trace the path of a clot from a leg DVT to the lung.", a:"Deep leg vein to venae cavae to right heart to pulmonary artery.", tags:["cardiovascular","vessel-disorder","clinical","dvt","pulmonary embolism"] },
    { id:"W3-560", dok:2, difficulty:3, q:"Compare deep vein thrombosis and pulmonary embolism.", a:"DVT is a clot in a deep vein; PE is a clot lodged in a lung artery.", tags:["cardiovascular","vessel-disorder","clinical","dvt","pe"] },
    { id:"W3-561", dok:2, difficulty:3, q:"How can the same atherosclerotic process cause different diseases?", a:"Its location determines whether it causes CAD, stroke, or PAD.", tags:["cardiovascular","coronary-circulation","clinical","atherosclerosis","location"] },
    { id:"W3-562", dok:2, difficulty:3, q:"How does coronary artery disease lead to myocardial infarction?", a:"Narrowed coronary arteries starve myocardium of oxygen.", tags:["cardiovascular","coronary-circulation","clinical","cad","mi"] },
    { id:"W3-563", dok:2, difficulty:3, q:"How does peripheral artery disease cause walking pain?", a:"Leg muscles receive too little blood during activity.", tags:["cardiovascular","vessel-disorder","clinical","pad","muscle ischemia"] },
    { id:"W3-564", dok:2, difficulty:3, q:"How can hypertension damage vessels over time?", a:"High pressure chronically strains and injures vessel walls.", tags:["cardiovascular","vessel-disorder","clinical","hypertension","damage"] },
    { id:"W3-565", dok:2, difficulty:3, q:"Compare blocked-artery stroke and burst-artery stroke.", a:"Both cut off brain blood supply; one blocks flow, the other ruptures and bleeds.", tags:["cardiovascular","vessel-disorder","clinical","stroke","ischemic","hemorrhagic"] },
    { id:"W3-583", dok:3, difficulty:4, q:"A plaque narrows a coronary artery. What disease process can result?", a:"Coronary artery disease leading to myocardial infarction.", tags:["cardiovascular","coronary-circulation","clinical","cad","atherosclerosis"] },
    { id:"W3-584", dok:3, difficulty:4, q:"A plaque narrows an artery in the leg. What disorder does this suggest?", a:"Peripheral artery disease.", tags:["cardiovascular","vessel-disorder","clinical","pad","atherosclerosis"] },
    { id:"W3-585", dok:3, difficulty:4, q:"A plaque affects a brain artery and blood supply is lost. What event can occur?", a:"Stroke.", tags:["cardiovascular","vessel-disorder","clinical","stroke","atherosclerosis"] },
    { id:"W3-586", dok:3, difficulty:4, q:"Why can an aortic aneurysm be catastrophic?", a:"The aorta carries high-pressure blood, and rupture can cause massive bleeding.", tags:["cardiovascular","vessel-disorder","clinical","aneurysm","aorta"] },
    { id:"W3-587", dok:3, difficulty:4, q:"Why can a brain aneurysm cause sudden neurologic damage?", a:"Rupture can disrupt blood supply and bleed into brain tissue.", tags:["cardiovascular","vessel-disorder","clinical","brain aneurysm"] },
    { id:"W3-588", dok:3, difficulty:4, q:"A superficial leg vein is swollen and twisted. What valve problem explains this?", a:"Failed venous valves allow blood to pool.", tags:["cardiovascular","vessel-disorder","clinical","varicose veins"] },
    { id:"W3-589", dok:3, difficulty:4, q:"A clot breaks loose from a deep leg vein. Which heart side does it pass through before the lung?", a:"Right side of the heart.", tags:["cardiovascular","vessel-disorder","clinical","dvt","right heart"] },
    { id:"W3-590", dok:3, difficulty:4, q:"Why does a DVT become dangerous when it travels instead of staying local?", a:"It can lodge in a pulmonary artery as a pulmonary embolism.", tags:["cardiovascular","vessel-disorder","clinical","dvt","pe"] },
    { id:"W3-591", dok:3, difficulty:4, q:"Why are hemorrhoids structurally classified with varicose veins?", a:"They are swollen varicose veins in the rectal and anal region.", tags:["cardiovascular","vessel-disorder","clinical","hemorrhoids"] },
    { id:"W3-592", dok:3, difficulty:4, q:"Why would chronic venous insufficiency produce lower-leg swelling?", a:"Failed valves impair venous return and allow persistent pooling.", tags:["cardiovascular","vessel-disorder","clinical","venous insufficiency"] }
  ];
  var B7_RESP_ANAT = [
    { id:"W3-601", dok:1, difficulty:2, q:"What is the respiratory system?", a:"Organs that move air and bring it close to blood for gas exchange.", tags:["respiratory","nose-pharynx","respiratory system","gas exchange"] },
    { id:"W3-602", dok:1, difficulty:2, q:"What structures make up the upper respiratory tract?", a:"Nose, nasal cavity, paranasal sinuses, and pharynx.", tags:["respiratory","nose-pharynx","upper respiratory tract"] },
    { id:"W3-603", dok:1, difficulty:2, q:"What structures make up the lower respiratory tract?", a:"Larynx, trachea, bronchi, and lungs.", tags:["respiratory","nose-pharynx","lower respiratory tract"] },
    { id:"W3-604", dok:1, difficulty:2, q:"What is the conducting zone?", a:"Air passages that only carry air, from nose to terminal bronchioles.", tags:["respiratory","nose-pharynx","conducting zone"] },
    { id:"W3-605", dok:1, difficulty:2, q:"What is the respiratory zone?", a:"Respiratory bronchioles, alveolar ducts, and alveoli where gas exchange occurs.", tags:["respiratory","nose-pharynx","respiratory zone"] },
    { id:"W3-606", dok:1, difficulty:2, q:"What is the main entry point for air?", a:"The nose and nasal cavity.", tags:["respiratory","nose-pharynx","nose","nasal cavity"] },
    { id:"W3-607", dok:1, difficulty:2, q:"What is the nasal cavity?", a:"The space behind the nose divided by the nasal septum.", tags:["respiratory","nose-pharynx","nasal cavity","nasal septum"] },
    { id:"W3-608", dok:1, difficulty:2, q:"What is the nasal vestibule?", a:"The entrance just inside the nostrils.", tags:["respiratory","nose-pharynx","nasal vestibule"] },
    { id:"W3-609", dok:1, difficulty:2, q:"What are vibrissae?", a:"Coarse hairs in the nasal vestibule that filter large particles.", tags:["respiratory","nose-pharynx","vibrissae","filtration"] },
    { id:"W3-610", dok:1, difficulty:2, q:"What are nasal conchae?", a:"Scroll-shaped structures on lateral nasal cavity walls that swirl air.", tags:["respiratory","nose-pharynx","nasal conchae"] },
    { id:"W3-611", dok:1, difficulty:2, q:"What are meatuses?", a:"Air passages beneath the nasal conchae.", tags:["respiratory","nose-pharynx","meatuses"] },
    { id:"W3-612", dok:1, difficulty:2, q:"What do nasal conchae and meatuses do?", a:"Swirl air over warm, moist lining.", tags:["respiratory","nose-pharynx","conchae","meatuses","air conditioning"] },
    { id:"W3-613", dok:1, difficulty:2, q:"What are paranasal sinuses?", a:"Air-filled cavities in frontal, ethmoid, sphenoid, and maxillary bones.", tags:["respiratory","nose-pharynx","paranasal sinuses"] },
    { id:"W3-614", dok:1, difficulty:2, q:"Where do paranasal sinuses drain?", a:"Into the nasal cavity.", tags:["respiratory","nose-pharynx","sinus drainage"] },
    { id:"W3-615", dok:1, difficulty:2, q:"What is the pharynx?", a:"The throat; a muscular passage shared by air and food.", tags:["respiratory","nose-pharynx","pharynx"] },
    { id:"W3-616", dok:1, difficulty:2, q:"What is the nasopharynx?", a:"Upper pharynx behind nasal cavity; air-only passage.", tags:["respiratory","nose-pharynx","nasopharynx"] },
    { id:"W3-617", dok:1, difficulty:2, q:"What is the oropharynx?", a:"Middle pharynx behind the mouth; shared by air and food.", tags:["respiratory","nose-pharynx","oropharynx"] },
    { id:"W3-618", dok:1, difficulty:2, q:"What is the laryngopharynx?", a:"Lower pharynx opening into both larynx and esophagus.", tags:["respiratory","nose-pharynx","laryngopharynx"] },
    { id:"W3-619", dok:1, difficulty:2, q:"What is the larynx?", a:"The voice box between the pharynx and trachea.", tags:["respiratory","larynx","larynx"] },
    { id:"W3-620", dok:1, difficulty:2, q:"What are the two main functions of the larynx?", a:"Keeps food out of airway and houses vocal cords.", tags:["respiratory","larynx","larynx","function"] },
    { id:"W3-621", dok:1, difficulty:2, q:"What is the thyroid cartilage?", a:"Large shield-shaped cartilage forming the laryngeal prominence.", tags:["respiratory","larynx","thyroid cartilage"] },
    { id:"W3-622", dok:1, difficulty:2, q:"What is the cricoid cartilage?", a:"Ring-shaped cartilage just below the thyroid cartilage.", tags:["respiratory","larynx","cricoid cartilage"] },
    { id:"W3-623", dok:1, difficulty:2, q:"What is the epiglottis?", a:"Flexible flap that folds over the laryngeal opening during swallowing.", tags:["respiratory","larynx","epiglottis"] },
    { id:"W3-624", dok:1, difficulty:2, q:"What do arytenoid cartilages do?", a:"Anchor and move the vocal cords.", tags:["respiratory","larynx","arytenoid cartilages"] },
    { id:"W3-625", dok:1, difficulty:2, q:"What are vocal cords also called?", a:"Vocal folds.", tags:["respiratory","larynx","vocal cords"] },
    { id:"W3-626", dok:1, difficulty:2, q:"What do vocal cords do?", a:"Vibrate as air passes to produce sound.", tags:["respiratory","larynx","vocal cords","sound"] },
    { id:"W3-627", dok:1, difficulty:2, q:"What is the glottis?", a:"The opening between the vocal cords.", tags:["respiratory","larynx","glottis"] },
    { id:"W3-628", dok:1, difficulty:2, q:"What is the trachea?", a:"The windpipe held open by C-shaped rings of cartilage.", tags:["respiratory","bronchial-tree","trachea"] },
    { id:"W3-629", dok:1, difficulty:2, q:"What is the carina?", a:"Internal ridge where the trachea forks into main bronchi.", tags:["respiratory","bronchial-tree","carina"] },
    { id:"W3-630", dok:1, difficulty:2, q:"What are main bronchi?", a:"Primary bronchi, one entering each lung.", tags:["respiratory","bronchial-tree","main bronchi"] },
    { id:"W3-631", dok:1, difficulty:2, q:"What are lobar bronchi?", a:"Secondary bronchi, one to each lung lobe.", tags:["respiratory","bronchial-tree","lobar bronchi"] },
    { id:"W3-632", dok:1, difficulty:2, q:"What are segmental bronchi?", a:"Tertiary bronchi, one to each bronchopulmonary segment.", tags:["respiratory","bronchial-tree","segmental bronchi"] },
    { id:"W3-633", dok:1, difficulty:2, q:"What are bronchioles?", a:"Smallest conducting airways with smooth muscle walls and no cartilage.", tags:["respiratory","bronchial-tree","bronchioles"] },
    { id:"W3-634", dok:1, difficulty:2, q:"What are terminal bronchioles?", a:"Last airways of the conducting zone before gas exchange begins.", tags:["respiratory","bronchial-tree","terminal bronchioles"] },
    { id:"W3-635", dok:1, difficulty:2, q:"How many lobes does the right lung have?", a:"Three: superior, middle, and inferior.", tags:["respiratory","lungs-pleura","right lung","lobes"] },
    { id:"W3-636", dok:1, difficulty:2, q:"How many lobes does the left lung have?", a:"Two: superior and inferior.", tags:["respiratory","lungs-pleura","left lung","lobes"] },
    { id:"W3-637", dok:1, difficulty:2, q:"What fissures does the right lung have?", a:"Horizontal fissure and oblique fissure.", tags:["respiratory","lungs-pleura","right lung","fissures"] },
    { id:"W3-638", dok:1, difficulty:2, q:"What fissure does the left lung have?", a:"Oblique fissure only.", tags:["respiratory","lungs-pleura","left lung","fissure"] },
    { id:"W3-639", dok:1, difficulty:2, q:"Which lung is larger?", a:"Right lung.", tags:["respiratory","lungs-pleura","right lung"] },
    { id:"W3-640", dok:1, difficulty:2, q:"What is the cardiac notch?", a:"Indentation in the left lung that makes room for the heart.", tags:["respiratory","lungs-pleura","cardiac notch"] },
    { id:"W3-641", dok:1, difficulty:2, q:"What is the apex of a lung?", a:"Narrow superior tip rising just above the clavicle.", tags:["respiratory","lungs-pleura","lung apex"] },
    { id:"W3-642", dok:1, difficulty:2, q:"What is the base of a lung?", a:"Broad inferior surface resting on the diaphragm.", tags:["respiratory","lungs-pleura","lung base"] },
    { id:"W3-643", dok:1, difficulty:2, q:"What is the hilum of the lung?", a:"Medial indentation where bronchus and vessels enter and leave.", tags:["respiratory","lungs-pleura","hilum"] },
    { id:"W3-644", dok:1, difficulty:2, q:"What is the parietal pleura?", a:"Serous membrane lining the thoracic wall.", tags:["respiratory","lungs-pleura","parietal pleura"] },
    { id:"W3-645", dok:1, difficulty:2, q:"What is the visceral pleura?", a:"Serous membrane covering the outer lung surface.", tags:["respiratory","lungs-pleura","visceral pleura"] },
    { id:"W3-646", dok:1, difficulty:2, q:"What is the pleural cavity?", a:"Thin fluid-filled space between the parietal and visceral pleurae.", tags:["respiratory","lungs-pleura","pleural cavity"] },
    { id:"W3-647", dok:1, difficulty:2, q:"What are respiratory bronchioles?", a:"First airways of the respiratory zone with a few alveoli budding from walls.", tags:["respiratory","bronchial-tree","respiratory bronchioles"] },
    { id:"W3-648", dok:1, difficulty:2, q:"What are alveolar ducts?", a:"Passages whose walls are lined entirely with alveoli.", tags:["respiratory","alveoli-histo","alveolar ducts"] },
    { id:"W3-649", dok:1, difficulty:2, q:"What are alveoli?", a:"Tiny air sacs that are the site of gas exchange.", tags:["respiratory","alveoli-histo","alveoli"] },
    { id:"W3-650", dok:1, difficulty:2, q:"What is an alveolar sac?", a:"A cluster of alveoli sharing a common space.", tags:["respiratory","alveoli-histo","alveolar sac"] },
    { id:"W3-651", dok:1, difficulty:2, q:"What are Type I alveolar cells?", a:"Thin, flat cells forming most of the alveolar wall where gases cross.", tags:["respiratory","alveoli-histo","type i alveolar cells"] },
    { id:"W3-652", dok:1, difficulty:2, q:"What are Type II alveolar cells?", a:"Cells that secrete surfactant.", tags:["respiratory","alveoli-histo","type ii alveolar cells"] },
    { id:"W3-653", dok:1, difficulty:2, q:"What does surfactant do?", a:"Lowers surface tension and helps keep alveoli from collapsing.", tags:["respiratory","alveoli-histo","surfactant"] },
    { id:"W3-654", dok:1, difficulty:2, q:"What are alveolar macrophages?", a:"Dust cells that engulf inhaled debris and microbes.", tags:["respiratory","alveoli-histo","alveolar macrophages"] },
    { id:"W3-655", dok:1, difficulty:2, q:"What is the respiratory membrane?", a:"Thin barrier between alveolar air and blood where gases cross.", tags:["respiratory","alveoli-histo","respiratory membrane"] },
    { id:"W3-656", dok:1, difficulty:2, q:"What wraps each alveolus?", a:"A dense net of pulmonary capillaries.", tags:["respiratory","alveoli-histo","pulmonary capillaries"] },
    { id:"W3-670", dok:2, difficulty:3, q:"Compare the conducting zone and respiratory zone.", a:"Conducting zone carries air only; respiratory zone contains structures where gas exchange occurs.", tags:["respiratory","nose-pharynx","conducting vs respiratory zone"] },
    { id:"W3-671", dok:2, difficulty:3, q:"How does the upper respiratory tract condition incoming air?", a:"It warms, moistens, and filters the air.", tags:["respiratory","nose-pharynx","upper tract","air conditioning"] },
    { id:"W3-672", dok:2, difficulty:3, q:"Compare nasopharynx, oropharynx, and laryngopharynx.", a:"Nasopharynx is air-only; oropharynx and laryngopharynx are shared by air and food.", tags:["respiratory","nose-pharynx","pharynx regions"] },
    { id:"W3-673", dok:2, difficulty:3, q:"Why is the epiglottis important during swallowing?", a:"It folds over the laryngeal opening to keep food and drink out of the airway.", tags:["respiratory","larynx","epiglottis","swallowing"] },
    { id:"W3-674", dok:2, difficulty:3, q:"How do arytenoid cartilages relate to voice production?", a:"They anchor and move the vocal cords.", tags:["respiratory","larynx","arytenoids","vocal cords"] },
    { id:"W3-675", dok:2, difficulty:3, q:"Trace air from the trachea to terminal bronchioles.", a:"Trachea to carina to main bronchi to lobar bronchi to segmental bronchi to bronchioles to terminal bronchioles.", tags:["respiratory","bronchial-tree","air pathway"] },
    { id:"W3-676", dok:2, difficulty:3, q:"Why do bronchioles lack cartilage but contain smooth muscle?", a:"They can regulate airflow by changing diameter.", tags:["respiratory","bronchial-tree","bronchioles","smooth muscle"] },
    { id:"W3-677", dok:2, difficulty:3, q:"Compare the right and left lungs by lobes.", a:"Right lung has three lobes; left lung has two lobes.", tags:["respiratory","lungs-pleura","right vs left lung"] },
    { id:"W3-678", dok:2, difficulty:3, q:"Why is the left lung smaller than the right?", a:"It has a cardiac notch that makes room for the heart.", tags:["respiratory","lungs-pleura","left lung","cardiac notch"] },
    { id:"W3-679", dok:2, difficulty:3, q:"Compare parietal and visceral pleura.", a:"Parietal pleura lines thoracic wall; visceral pleura covers lung surface.", tags:["respiratory","lungs-pleura","pleurae"] },
    { id:"W3-680", dok:2, difficulty:3, q:"Why does the pleural cavity contain fluid?", a:"It allows the lung to glide as it expands.", tags:["respiratory","lungs-pleura","pleural fluid"] },
    { id:"W3-681", dok:2, difficulty:3, q:"Trace air from terminal bronchiole to alveolus.", a:"Terminal bronchiole to respiratory bronchiole to alveolar duct to alveolar sac/alveolus.", tags:["respiratory","bronchial-tree","respiratory zone pathway"] },
    { id:"W3-682", dok:2, difficulty:3, q:"Why are Type I alveolar cells thin and flat?", a:"They form a short diffusion distance for gas exchange.", tags:["respiratory","alveoli-histo","type i cells","exchange"] },
    { id:"W3-683", dok:2, difficulty:3, q:"Why are Type II alveolar cells essential?", a:"They secrete surfactant that helps prevent alveolar collapse.", tags:["respiratory","alveoli-histo","type ii cells","surfactant"] },
    { id:"W3-684", dok:2, difficulty:3, q:"Why are alveolar macrophages located on alveolar surfaces?", a:"They remove inhaled debris and microbes.", tags:["respiratory","alveoli-histo","alveolar macrophages"] },
    { id:"W3-685", dok:2, difficulty:3, q:"Why are pulmonary capillaries wrapped around alveoli?", a:"They bring blood close to air for gas exchange.", tags:["respiratory","alveoli-histo","pulmonary capillaries"] },
    { id:"W3-691", dok:3, difficulty:4, q:"An inhaled object is more likely to enter the right lung. Why?", a:"The right main bronchus is wider and more vertical than the left.", tags:["respiratory","bronchial-tree","aspiration","right bronchus"] },
    { id:"W3-692", dok:3, difficulty:4, q:"Food enters the laryngeal opening during swallowing. Which structure failed to protect the airway?", a:"Epiglottis.", tags:["respiratory","larynx","epiglottis","aspiration"] },
    { id:"W3-693", dok:3, difficulty:4, q:"If bronchioles constrict, which respiratory zone function is affected first?", a:"Air movement through the conducting zone is restricted before gas reaches alveoli.", tags:["respiratory","bronchial-tree","bronchioles","airflow"] },
    { id:"W3-694", dok:3, difficulty:4, q:"If surfactant is deficient, what happens to alveoli?", a:"They are more likely to collapse due to surface tension.", tags:["respiratory","alveoli-histo","surfactant","alveolar collapse"] },
    { id:"W3-695", dok:3, difficulty:4, q:"If Type I alveolar cells are damaged, what process is most directly impaired?", a:"Gas diffusion across the alveolar wall.", tags:["respiratory","alveoli-histo","type i cells","diffusion"] },
    { id:"W3-700", dok:3, difficulty:4, q:"Explain why alveolar design is ideal but vulnerable.", a:"Thin, highly vascular walls maximize gas exchange, but damage or fluid quickly reduces exchange efficiency.", tags:["respiratory","alveoli-histo","alveoli","integration"] }
  ];
  var B7_RESP_DISORDERS = [
    { id:"W3-657", dok:1, difficulty:2, q:"What do most respiratory disorders do structurally?", a:"Block airflow or damage the surface where gases cross.", tags:["respiratory","resp-overview","clinical","respiratory disorders"] },
    { id:"W3-658", dok:1, difficulty:2, q:"What structure is affected in asthma?", a:"Bronchioles.", tags:["respiratory","bronchial-tree","clinical","asthma"] },
    { id:"W3-659", dok:1, difficulty:2, q:"What is asthma?", a:"Inflammation and narrowing of bronchioles causing wheezing and breathlessness.", tags:["respiratory","bronchial-tree","clinical","asthma","bronchioles"] },
    { id:"W3-660", dok:1, difficulty:2, q:"What structures are affected in COPD?", a:"Airways and alveoli.", tags:["respiratory","bronchial-tree","clinical","copd"] },
    { id:"W3-661", dok:1, difficulty:2, q:"What is COPD?", a:"Long-term airflow blockage that includes emphysema and chronic bronchitis.", tags:["respiratory","bronchial-tree","clinical","copd"] },
    { id:"W3-662", dok:1, difficulty:2, q:"What structure is affected in emphysema?", a:"Alveoli.", tags:["respiratory","alveoli-histo","clinical","emphysema"] },
    { id:"W3-663", dok:1, difficulty:2, q:"What happens in emphysema?", a:"Alveolar walls are destroyed, reducing gas exchange surface area.", tags:["respiratory","alveoli-histo","clinical","emphysema","alveoli"] },
    { id:"W3-664", dok:1, difficulty:2, q:"What structure is affected in pneumonia?", a:"Alveoli.", tags:["respiratory","alveoli-histo","clinical","pneumonia"] },
    { id:"W3-665", dok:1, difficulty:2, q:"What is pneumonia?", a:"An infection that inflames alveoli and fills them with fluid.", tags:["respiratory","alveoli-histo","clinical","pneumonia","alveoli"] },
    { id:"W3-666", dok:1, difficulty:2, q:"What structure is affected in pneumothorax?", a:"Pleural cavity.", tags:["respiratory","lungs-pleura","clinical","pneumothorax"] },
    { id:"W3-667", dok:1, difficulty:2, q:"What is pneumothorax?", a:"Air in the pleural cavity that breaks the seal and allows lung collapse.", tags:["respiratory","lungs-pleura","clinical","pneumothorax","pleural cavity"] },
    { id:"W3-668", dok:1, difficulty:2, q:"What structure is affected in lung cancer?", a:"Lung tissue.", tags:["respiratory","lungs-pleura","clinical","lung cancer"] },
    { id:"W3-669", dok:1, difficulty:2, q:"What is lung cancer?", a:"A malignant tumor of lung tissue strongly linked to smoking.", tags:["respiratory","lungs-pleura","clinical","lung cancer","smoking"] },
    { id:"W3-686", dok:2, difficulty:3, q:"Compare asthma and emphysema by affected structure.", a:"Asthma narrows bronchioles; emphysema destroys alveolar walls.", tags:["respiratory","bronchial-tree","clinical","asthma","emphysema"] },
    { id:"W3-687", dok:2, difficulty:3, q:"Compare pneumonia and emphysema by alveolar problem.", a:"Pneumonia fills alveoli with fluid; emphysema destroys alveolar walls.", tags:["respiratory","alveoli-histo","clinical","pneumonia","emphysema"] },
    { id:"W3-688", dok:2, difficulty:3, q:"Compare pneumothorax and pneumonia by affected space.", a:"Pneumothorax affects pleural cavity; pneumonia affects alveoli.", tags:["respiratory","alveoli-histo","clinical","pneumothorax","pneumonia"] },
    { id:"W3-689", dok:2, difficulty:3, q:"Why does emphysema reduce gas exchange?", a:"It destroys alveolar walls and reduces surface area.", tags:["respiratory","alveoli-histo","clinical","emphysema","surface area"] },
    { id:"W3-690", dok:2, difficulty:3, q:"Why does air in the pleural cavity collapse a lung?", a:"It breaks the sealed pleural space that helps keep the lung expanded.", tags:["respiratory","lungs-pleura","clinical","pneumothorax","lung collapse"] },
    { id:"W3-696", dok:3, difficulty:4, q:"A patient has wheezing due to narrowed bronchioles. Which disorder best matches?", a:"Asthma.", tags:["respiratory","bronchial-tree","clinical","asthma","bronchioles"] },
    { id:"W3-697", dok:3, difficulty:4, q:"A patient has permanent loss of alveolar surface area. Which disorder best matches?", a:"Emphysema.", tags:["respiratory","alveoli-histo","clinical","emphysema","alveoli"] },
    { id:"W3-698", dok:3, difficulty:4, q:"A patient has alveoli inflamed and filled with fluid. Which disorder best matches?", a:"Pneumonia.", tags:["respiratory","alveoli-histo","clinical","pneumonia","alveoli"] },
    { id:"W3-699", dok:3, difficulty:4, q:"A puncture lets air enter the pleural cavity. What condition can result?", a:"Pneumothorax with possible lung collapse.", tags:["respiratory","lungs-pleura","clinical","pneumothorax"] }
  ];
  var B7_RESP_ANAT_AIRWAYS = B7_RESP_ANAT.filter(function(c){var s=c.tags[1];return s==="nose-pharynx"||s==="larynx"||s==="bronchial-tree";});
  var B7_RESP_ANAT_LUNGS = B7_RESP_ANAT.filter(function(c){var s=c.tags[1];return s==="lungs-pleura"||s==="alveoli-histo";});

  var VT_TOPIC = { id:"t-vessel-types", title:"Vessel Types (Arteries, Capillaries, Veins)", summary:"Elastic and muscular arteries, arterioles, capillary types (continuous, fenestrated, sinusoid), venules, and veins.", dayInCourse:13, gateKeywords:[], notes:[], cards:B5_VESSEL_TYPES };
  var VR_TOPIC = { id:"t-vascular-routes", title:"Vascular Routes & Circuits", summary:"Pulmonary and systemic circuits, portal systems, anastomoses, and systemic blood-flow routes.", dayInCourse:14, gateKeywords:[], notes:[], cards:B5_VASCULAR_ROUTES };
  var FE_TOPIC = { id:"t-fetal-circulation", title:"Fetal Circulation", summary:"Fetal shunts (ductus venosus, foramen ovale, ductus arteriosus), umbilical vessels, and their adult remnants.", dayInCourse:15, gateKeywords:[], notes:[], cards:B6_FETAL };
  var VD_TOPIC = { id:"t-vessel-disorders", title:"Blood Vessel Disorders (clinical anatomy)", summary:"Atherosclerosis, aneurysm, coronary and peripheral artery disease, hypertension, stroke, varicose veins, DVT, and pulmonary embolism, anchored to vessel anatomy.", dayInCourse:16, gateKeywords:[], notes:[], cards:B6_VESSEL_DISORDERS };
  var RA1_TOPIC = { id:"t-resp-airways", title:"Airways: Nose to Bronchial Tree", summary:"Upper respiratory tract, pharynx, larynx, trachea, and the bronchial tree down to terminal bronchioles.", dayInCourse:17, gateKeywords:[], notes:[], cards:B7_RESP_ANAT_AIRWAYS };
  var RA2_TOPIC = { id:"t-resp-lungs", title:"Lungs, Pleurae & Alveoli", summary:"Lung lobes and fissures, pleurae, the respiratory zone, alveoli, and the respiratory membrane.", dayInCourse:18, gateKeywords:[], notes:[], cards:B7_RESP_ANAT_LUNGS };
  var RD_TOPIC = { id:"t-resp-disorders", title:"Respiratory Disorders (clinical anatomy)", summary:"Asthma, COPD, emphysema, pneumonia, pneumothorax, and lung cancer, anchored to respiratory anatomy.", dayInCourse:19, gateKeywords:[], notes:[], cards:B7_RESP_DISORDERS };
  var root = (typeof window !== "undefined") ? window : this;
  root.BIO004_COURSE_CONTENT = root.BIO004_COURSE_CONTENT || { courseLabel: "BIO 004 Human Anatomy", modules: [] };
  root.BIO004_COURSE_CONTENT.modules = root.BIO004_COURSE_CONTENT.modules || [];

  function addModule(mod){
    if(!root.BIO004_COURSE_CONTENT.modules.some(function(m){return m&&m.id===mod.id;})){
      root.BIO004_COURSE_CONTENT.modules.push(mod);
    }
  }
  addModule({ id:"m-vessels", title:"Cardiovascular System: Vessels, Fetal & Disorders", week:4,
    topics:[VT_TOPIC, VR_TOPIC, FE_TOPIC, VD_TOPIC] });
  addModule({ id:"m-respiratory", title:"Respiratory System", week:5,
    topics:[RA1_TOPIC, RA2_TOPIC, RD_TOPIC] });

  /* -------- Competency assignment across ALL loaded cards -------- */
  var SUBTOPIC_TO_COMPETENCY = {
    "chambers":"cv-chambers", "septa":"cv-chambers",
    "valves":"cv-valves",
    "coronary-circulation":"cv-coronary",
    "pericardium":"cv-surfaces", "heart-wall":"cv-surfaces",
    "cardiac-muscle":"cv-surfaces", "internal-features":"cv-surfaces",
    "conduction-system":"cv-conduction-anat",
    "great-vessels":"bvn-great-vessels",
    "blood-vessels":"bvn-vessel-tunics", "vessel-types":"bvn-vessel-tunics",
    "vascular-routes":"bvn-vessel-tunics", "vessel-disorder":"bvn-vessel-tunics",
    "fetal-circulation":"bvn-fetal-remnants",
    "larynx":"resp-larynx", "bronchial-tree":"resp-tree",
    "lungs-pleura":"resp-lungs-pleura", "alveoli-histo":"resp-histo"
    // intentionally no competency: circuits, orientation, overview,
    // blood-flow, nose-pharynx, resp-overview, vessel-physiology
  };
  var ID_OVERRIDES = {
    "W3-040":["cv-surfaces","bvn-fetal-remnants"],
    "W3-041":["cv-surfaces","bvn-fetal-remnants"],
    "W3-067":["cv-surfaces","bvn-fetal-remnants"],
    "W3-099":["cv-surfaces","bvn-fetal-remnants"],
    "W3-513":["cv-coronary"], "W3-514":["cv-coronary"],
    "W3-562":["cv-coronary"], "W3-583":["cv-coronary"]
  };
  function deriveCompetencies(card){
    if(ID_OVERRIDES[card.id]) return ID_OVERRIDES[card.id].slice();
    var out=[];
    (card.tags||[]).forEach(function(t){
      var comp=SUBTOPIC_TO_COMPETENCY[t];
      if(comp && out.indexOf(comp)<0) out.push(comp);
    });
    return out;
  }
  // Scope the competency pass to ONLY the three Week 3 modules this deck
  // adds. This makes the file safe to drop into the full course repo: it
  // never reads or overwrites competencies on any of your other cards.
  var WEEK3_MODULE_IDS = { "m-heart":1, "m-vessels":1, "m-respiratory":1 };
  (root.BIO004_COURSE_CONTENT.modules||[]).forEach(function(m){
    if(!WEEK3_MODULE_IDS[m.id]) return;
    (m.topics||[]).forEach(function(t){
      (t.cards||[]).forEach(function(c){
        var derived = deriveCompetencies(c);
        if (derived.length) { c.competencies = derived; }
        else if (!Array.isArray(c.competencies)) { c.competencies = []; }
      });
    });
  });
})();
