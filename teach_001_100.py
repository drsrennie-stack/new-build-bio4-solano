import csv, os
CARDS="/sessions/zealous-peaceful-feynman/mnt/Spaced Recall Prototype BIOL 004/week-1/cards"
NEWCOLS=["Card ID","Week","System","Module","Topic","Subtopic","Learning Objective","Difficulty","Depth of Knowledge","Question","Answer","Explanation","Common Misconception","Tags"]
T={
"W1-001":("Atoms bond into molecules such as water and proteins, the building blocks every higher level is made from.","Skipping the chemical level and starting at the cell, forgetting cells are built from molecules."),
"W1-002":("The cell is the smallest unit that is still alive; nothing below it survives on its own.","Thinking tissues, not cells, are the smallest living unit."),
"W1-003":("A tissue is defined by cells sharing both a structure and a job, not just cells sitting together.","Assuming any cluster of cells is a tissue even when they do different jobs."),
"W1-004":("An organ needs at least two tissue types working toward one function, like the stomach's muscle and epithelium.","Thinking an organ is made of a single tissue type."),
"W1-005":("A system links organs that cooperate on one broad function, like the digestive tract from mouth to anus.","Confusing an organ system with a single organ."),
"W1-006":("All systems functioning together make the living person, the highest level of organization.","Thinking one system alone can represent the whole organism."),
"W1-007":("Each level is built from the one below it, so the sequence runs only one way, simple to complex.","Reversing the order or placing organ before tissue."),
"W1-008":("Palms forward is the detail students miss; it sets the forearm bones parallel, the reference for every arm term.","Forgetting the palms face forward, which changes forearm terminology."),
"W1-009":("Supine, face up, is the position for CPR and most abdominal exams.","Mixing up supine and prone."),
"W1-010":("Prone, face down, is used to access the back and spine.","Confusing prone with supine."),
"W1-011":("Fixing one standard position means 'anterior' means the same thing no matter how the patient lies.","Assuming directional terms change when the body moves."),
"W1-012":("Any vertical cut separating right from left is sagittal, whether or not the halves are equal.","Thinking every sagittal cut makes equal halves."),
"W1-013":("The midsagittal (median) plane runs on the midline, giving mirror-image halves.","Calling any right-left cut midsagittal."),
"W1-014":("Para- means beside, so a parasagittal plane sits off the midline and yields unequal parts.","Confusing parasagittal with midsagittal."),
"W1-015":("The frontal (coronal) plane splits front from back, the view of an MRI read face-on.","Mixing the frontal plane up with the sagittal plane."),
"W1-016":("A transverse cut is horizontal, producing the cross sections seen on a CT scan.","Thinking transverse divides right from left."),
"W1-017":("An oblique plane is any angled cut that is neither purely vertical nor horizontal.","Assuming oblique is a fixed standard plane rather than any angle."),
"W1-018":("Both are vertical right-left cuts; only their distance from the midline differs.","Treating them as unrelated instead of midline versus off-midline."),
"W1-019":("CT slices are transverse because the scanner images the body in horizontal cross sections.","Guessing the frontal plane for a CT cross section."),
"W1-020":("Superior and inferior run along the vertical, head-to-foot axis.","Swapping superior and inferior."),
"W1-021":("Anterior and posterior run along the front-to-back axis; ventral and dorsal are synonyms.","Forgetting that ventral equals anterior and dorsal equals posterior."),
"W1-022":("Medial and lateral are always judged relative to the body's midline.","Judging medial and lateral from the limb instead of the midline."),
"W1-023":("Proximal and distal describe position along a limb, from its attachment outward.","Using proximal and distal for the trunk."),
"W1-024":("Superficial and deep describe distance from the body surface.","Confusing deep with inferior."),
"W1-025":("Cranial points toward the head, caudal toward the tailbone, along the trunk's long axis.","Treating caudal as the same as posterior."),
"W1-026":("These matter in neurology, where a brain lesion often shows effects on the contralateral side.","Mixing ipsilateral (same side) with contralateral (opposite side)."),
"W1-027":("Superior means toward the head end, not simply 'up' in space.","Equating superior with 'up' regardless of body position."),
"W1-028":("Inferior means toward the feet along the body's long axis.","Reading inferior as 'lower quality' rather than a position."),
"W1-029":("Anterior, or ventral, is the front of the body in anatomical position.","Reversing anterior and posterior."),
"W1-030":("Posterior, or dorsal, is the back of the body.","Forgetting posterior and dorsal are the same."),
"W1-031":("Medial means closer to the midline, like the nose relative to the eye.","Confusing medial with the middle of a structure."),
"W1-032":("Lateral means farther from the midline, like the ears relative to the nose.","Swapping lateral and medial."),
"W1-033":("Proximal is nearer the trunk or attachment, so the elbow is proximal to the wrist.","Applying proximal to the trunk instead of a limb."),
"W1-034":("Distal is farther from attachment, so the fingertips are distal to the wrist.","Reversing proximal and distal on a limb."),
"W1-035":("Superficial structures lie closer to the skin, like the epidermis over muscle.","Confusing superficial with superior."),
"W1-036":("Deep structures lie farther beneath the surface, like bone under muscle.","Confusing deep with inferior."),
"W1-037":("Ipsilateral means on the same side of the body's midline.","Reading ipsilateral as 'internal'."),
"W1-038":("Contralateral means the opposite side, key to tracing crossed nerve pathways.","Confusing contralateral with 'the far end' of a structure."),
"W1-039":("Proximal and distal only make sense measured along a limb from its trunk attachment.","Describing the trunk itself as proximal or distal."),
"W1-040":("Reading anterior and distal together places the wound on the front of the forearm near the wrist.","Reading distal as toward the elbow instead of away from the trunk."),
"W1-041":("A structure between a medial and a lateral one is intermediate, like the middle of three parallel muscles.","Forcing an intermediate structure into either medial or lateral."),
"W1-042":("Cephalic refers to the whole head region.","Confusing cephalic (head) with cervical (neck)."),
"W1-043":("The frontal region overlies the frontal bone of the forehead.","Confusing the frontal region with the frontal plane."),
"W1-044":("The orbit is the bony socket that houses the eye.","Mixing orbital (eye) with otic (ear)."),
"W1-045":("The nasal region covers the external nose.","Confusing nasal with oral."),
"W1-046":("The oral region is the mouth and its opening.","Confusing oral (mouth) with buccal (cheek)."),
"W1-047":("Buccal refers to the cheek, the same root used for the cheek-side of teeth.","Using buccal for the mouth instead of the cheek."),
"W1-048":("Mental comes from the Latin for chin, not for mind.","Reading mental as relating to the brain."),
"W1-049":("Otic refers to the ear, as in otitis, an ear infection.","Confusing otic (ear) with oral (mouth)."),
"W1-050":("The occipital region overlies the occipital bone at the back of the skull.","Placing occipital at the front of the head."),
"W1-051":("Cervical means neck, as in the cervical vertebrae.","Confusing the cervical neck region with the cervix of the uterus."),
"W1-052":("The thoracic region is the chest, walled by the rib cage.","Confusing thoracic (chest) with abdominal (belly)."),
"W1-053":("The sternal region overlies the sternum in the center of the chest.","Confusing sternal with mammary."),
"W1-054":("The mammary region is the breast.","Confusing mammary with sternal."),
"W1-055":("The abdominal region is the belly, between chest and pelvis.","Confusing abdominal with pelvic."),
"W1-056":("The umbilical region centers on the navel.","Confusing the umbilical region with the whole abdomen."),
"W1-057":("The vertebral region runs along the spinal column.","Confusing vertebral with lumbar."),
"W1-058":("The lumbar region is the lower back, above the sacrum.","Confusing lumbar with sacral."),
"W1-059":("The sacral region lies between the hips over the sacrum.","Confusing sacral with gluteal."),
"W1-060":("The gluteal region is the buttock, named for the gluteus muscles.","Confusing gluteal with sacral."),
"W1-061":("The inguinal region is the groin where thigh meets trunk, a common hernia site.","Confusing inguinal with coxal (hip)."),
"W1-062":("The acromial region is the point of the shoulder over the acromion.","Confusing acromial with axillary."),
"W1-063":("The axillary region is the armpit, dense with lymph nodes.","Confusing axillary with brachial."),
"W1-064":("Brachial refers to the arm between shoulder and elbow, not the whole upper limb.","Using brachial for the forearm."),
"W1-065":("The antecubital region is the front of the elbow, the usual blood-draw site.","Confusing antecubital (front) with olecranal (back)."),
"W1-066":("The olecranal region is the back of the elbow over the olecranon.","Confusing olecranal with antecubital."),
"W1-067":("Antebrachial means forearm, ante- (before) the brachium.","Confusing antebrachial (forearm) with brachial (arm)."),
"W1-068":("Carpal refers to the wrist, as in carpal tunnel.","Confusing carpal (wrist) with tarsal (ankle)."),
"W1-069":("Palmar is the palm side of the hand, also called volar.","Confusing palmar (palm) with plantar (sole)."),
"W1-070":("Pollex is the anatomical term for the thumb.","Confusing pollex (thumb) with hallux (great toe)."),
"W1-071":("Coxal refers to the hip, as in the coxal bone.","Confusing coxal (hip) with inguinal (groin)."),
"W1-072":("Femoral means thigh, over the femur.","Confusing femoral (thigh) with crural (leg)."),
"W1-073":("Patellar is the front of the knee over the patella.","Confusing patellar (front) with popliteal (back)."),
"W1-074":("The popliteal region is the back of the knee, where a pulse can be felt.","Confusing popliteal with patellar."),
"W1-075":("Crural refers to the leg between knee and ankle, not the whole lower limb.","Using crural for the thigh."),
"W1-076":("Sural means the calf, the back of the leg.","Confusing sural (calf) with crural (leg)."),
"W1-077":("Fibular, or peroneal, refers to the lateral side of the leg over the fibula.","Placing the fibular region on the medial leg."),
"W1-078":("Tarsal refers to the ankle, as in the tarsal bones.","Confusing tarsal (ankle) with carpal (wrist)."),
"W1-079":("The calcaneal region is the heel, over the calcaneus.","Confusing calcaneal with plantar."),
"W1-080":("Plantar is the sole of the foot, as in plantar fasciitis.","Confusing plantar (sole) with palmar (palm)."),
"W1-081":("Hallux is the great toe, the pedal counterpart of the thumb.","Confusing hallux (great toe) with pollex (thumb)."),
"W1-082":("The dorsal cavity has two continuous parts, cranial and vertebral, both lined by meninges.","Naming only the cranial cavity and forgetting the vertebral cavity."),
"W1-083":("The cranial cavity is formed by the cranial bones and encloses the brain.","Thinking the cranial cavity holds the spinal cord."),
"W1-084":("The vertebral cavity runs through the vertebral foramina around the spinal cord.","Confusing the vertebral cavity with the vertebral region on the back."),
"W1-085":("The ventral cavity splits into thoracic and abdominopelvic, divided by the diaphragm.","Listing the dorsal cavities as part of the ventral cavity."),
"W1-086":("The thoracic cavity sits above the diaphragm, walled by the rib cage.","Placing the thoracic cavity below the diaphragm."),
"W1-087":("There are two pleural cavities, one wrapping each lung.","Thinking a single pleural cavity holds both lungs."),
"W1-088":("The pericardial cavity surrounds the heart within the mediastinum.","Confusing the pericardial cavity with the pleural cavity."),
"W1-089":("The mediastinum is the median partition between the pleural cavities, packed with the heart and great vessels.","Thinking the mediastinum is an empty space rather than full of organs."),
"W1-090":("The abdominopelvic cavity is the body's largest, spanning abdomen and pelvis as one continuous space.","Guessing the thoracic cavity is the largest."),
"W1-091":("The abdominal cavity holds the stomach, intestines, liver, spleen, pancreas, and kidneys.","Placing the bladder in the abdominal rather than the pelvic cavity."),
"W1-092":("The pelvic cavity, cradled by the bony pelvis, holds the bladder, rectum, and reproductive organs.","Putting the stomach in the pelvic cavity."),
"W1-093":("The diaphragm is the muscular floor of the thoracic cavity and the boundary with the abdominopelvic cavity.","Thinking the ribs, not the diaphragm, divide the two cavities."),
"W1-094":("A serous membrane is a thin, double-layered sheet lining a ventral cavity and secreting lubricating fluid.","Thinking a serous membrane is a single layer."),
"W1-095":("The parietal layer always lines the cavity wall; pariet- means wall.","Swapping the parietal and visceral layers."),
"W1-096":("The visceral layer always covers the organ surface; viscera means organs.","Confusing the visceral layer with the parietal layer."),
"W1-097":("Serous fluid fills the narrow space so organs glide without friction as they move.","Thinking the serous space is dry or empty."),
"W1-098":("The same two-layer plan repeats in every serous membrane: wall-lining parietal, organ-hugging visceral.","Assuming each membrane has a different layering scheme."),
"W1-099":("Pleura, pericardium, and peritoneum are the same design applied to lungs, heart, and abdominopelvic organs.","Treating the three membranes as structurally unrelated."),
"W1-100":("Thoracentesis drains fluid from the pleural cavity with a needle, guided by knowing where that cavity sits.","Confusing thoracentesis (pleural) with paracentesis (peritoneal)."),
}
f=os.path.join(CARDS,"Week1_Spaced_Recall_Cards_001-100_FULL.csv")
rows=list(csv.DictReader(open(f,encoding="utf-8")))
filled=0
for r in rows:
    t=T.get(r["Card ID"])
    if t:
        r["Explanation"],r["Common Misconception"]=t; filled+=1
os.chmod(f,0o644)
with open(f,"w",newline="",encoding="utf-8") as o:
    w=csv.DictWriter(o,fieldnames=NEWCOLS); w.writeheader(); w.writerows(rows)
print("filled teaching fields:",filled,"of",len(rows))
assert filled==100 and len(T)==100

# rebuild master from all 5 files
order=["001-100","101-200","201-300","301-400","401-500"]
master=[]
for tag in order:
    fn=os.path.join(CARDS,f"Week1_Spaced_Recall_Cards_{tag}_FULL.csv")
    master+=list(csv.DictReader(open(fn,encoding="utf-8")))
mp=os.path.join(CARDS,"Week1_MASTER_001-500_14col.csv")
os.chmod(mp,0o644)
with open(mp,"w",newline="",encoding="utf-8") as o:
    w=csv.DictWriter(o,fieldnames=NEWCOLS); w.writeheader(); w.writerows(master)
done=sum(1 for r in master if r["Explanation"].strip())
print("master rows:",len(master),"| teaching authored:",done,"| remaining:",len(master)-done)
# quick quality checks: no blanks in the 100 just filled, no dup misconception text overload
uniq=len(set((r["Explanation"],r["Common Misconception"]) for r in rows))
print("unique expl/misc pairs in 001-100:",uniq)
