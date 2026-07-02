#!/usr/bin/env python3
"""Week 1 Batch 5 (cards 401-500): Integumentary System.
Comprehensive 14-field schema (competency tag deferred by request):
Card ID, Week, System, Module, Topic, Subtopic, Learning Objective,
Difficulty, Depth of Knowledge, Question, Answer, Explanation,
Common Misconception, Tags.
"""
import csv, html, os, collections

WEEK, SYSTEM, MODULE = "Week 1", "Integumentary", "Integumentary"

LO = {
 "OV":"Name the two layers of the skin and the hypodermis beneath them.",
 "EP":"List the five strata of the epidermis in order and identify the cell types of the epidermis.",
 "DE":"Distinguish the papillary and reticular layers of the dermis and the structures each contains.",
 "AC":"Identify the accessory structures of the skin: hair, nails, and glands.",
 "CL":"Relate the anatomy of the skin layers to clinical scenarios such as burns, injections, and healing.",
}

# (id, topic, subtopic, lo, dok, qtype, question, answer, explanation, misconception, tags)
cards = [
# ---------- INTEGUMENT OVERVIEW (401-413) ----------
("W1-401","Integument Overview","Integument definition","OV",1,"Definition",
 "What is the integumentary system?",
 "The skin together with its accessory structures: hair, nails, and glands.",
 "The system is more than skin; the accessory structures all grow from it.",
 "Students think the integumentary system is only the skin and forget hair, nails, and glands.",
 "integumentary; overview"),
("W1-402","Integument Overview","Skin layers","OV",1,"Identification",
 "What are the two layers of the skin?",
 "The epidermis and the dermis.",
 "The hypodermis lies beneath but is not counted as skin.",
 "Students count the hypodermis as a third layer of skin.",
 "integumentary; skin layers; epidermis; dermis"),
("W1-403","Integument Overview","Hypodermis","OV",2,"Structure-function",
 "Why is the hypodermis not considered part of the skin proper?",
 "It is a subcutaneous layer of mostly adipose that anchors the skin, but it is not one of the skin's two layers.",
 "It anchors skin to underlying structures and insulates the body.",
 "Calling the hypodermis the third layer of skin.",
 "integumentary; hypodermis"),
("W1-404","Integument Overview","Skin layers","OV",2,"Comparison",
 "Compare the epidermis and dermis by tissue type.",
 "The epidermis is keratinized stratified squamous epithelium; the dermis is mostly connective tissue.",
 "Epithelium above, connective tissue below, a recurring skin pattern.",
 "Thinking both layers are epithelium.",
 "integumentary; epidermis; dermis"),
("W1-405","Integument Overview","Epidermis","OV",1,"Identification",
 "Which layer of the skin is avascular?",
 "The epidermis.",
 "It has no blood vessels and is fed by diffusion from the dermis.",
 "Assuming the epidermis has its own blood supply.",
 "integumentary; epidermis; avascular"),
("W1-406","Integument Overview","Epidermis","OV",2,"Structure-function",
 "Why must the epidermis rely on the dermis for nutrients?",
 "The epidermis is avascular, so nutrients diffuse up from vessels in the dermis.",
 "This is why the deeper vascular dermis keeps the surface alive.",
 "Believing epidermal cells receive blood directly.",
 "integumentary; epidermis; dermis"),
("W1-407","Integument Overview","Dermis","OV",2,"Identification",
 "Which skin layer holds the blood vessels, nerves, and glands?",
 "The dermis.",
 "The dermis is the working connective-tissue layer of the skin.",
 "Placing glands and vessels in the epidermis.",
 "integumentary; dermis"),
("W1-408","Integument Overview","Hypodermis","OV",2,"Definition",
 "What is the hypodermis made of, and what does it do?",
 "Mostly adipose tissue; it anchors the skin to underlying structures and insulates.",
 "Also called the subcutaneous layer; it is the site of subcutaneous injections.",
 "Thinking the hypodermis is muscle.",
 "integumentary; hypodermis"),
("W1-409","Integument Overview","Skin layers","OV",2,"Comparison",
 "Compare the epidermis and dermis by blood supply.",
 "The epidermis is avascular; the dermis is vascular and carries the blood vessels.",
 "The vascular dermis feeds the avascular epidermis.",
 "Thinking both layers are vascular.",
 "integumentary; epidermis; dermis; vascularity"),
("W1-410","Integument Overview","Skin layers","OV",2,"Ordering",
 "List the skin from superficial to deep, including the layer beneath it.",
 "Epidermis, then dermis, then the hypodermis beneath.",
 "Only the first two are skin proper; the hypodermis is subcutaneous.",
 "Ordering the dermis above the epidermis.",
 "integumentary; skin layers; ordering"),
("W1-411","Integument Overview","Clinical","CL",3,"Classification",
 "A subcutaneous injection is placed in the fatty layer beneath the skin. Which layer is that?",
 "The hypodermis.",
 "'Subcutaneous' literally means below the skin.",
 "Confusing subcutaneous (hypodermis) with intradermal (dermis).",
 "integumentary; hypodermis; clinical; injection"),
("W1-412","Integument Overview","Epidermis","OV",3,"Board-style",
 "The skin's surface stays alive despite having no blood vessels of its own. Explain how.",
 "The avascular epidermis receives nutrients by diffusion from the vascular dermis beneath it.",
 "The short diffusion distance is one reason the epidermis stays thin.",
 "Thinking the epidermis is nourished by sweat or by air.",
 "integumentary; epidermis; dermis; board"),
("W1-413","Integument Overview","Dermis","CL",3,"Application",
 "A burn destroys the epidermis but spares the dermis. Which functions of the deeper layer remain intact?",
 "The dermis still holds its blood vessels, nerves, glands, and hair follicles.",
 "Sparing the dermis preserves the sources of regeneration and sensation.",
 "Assuming that losing the epidermis destroys the glands and follicles.",
 "integumentary; dermis; clinical; burns"),

# ---------- EPIDERMIS STRATA (414-430) ----------
("W1-414","Epidermis","Strata order","EP",2,"Ordering",
 "List the five strata of the epidermis from deep to superficial.",
 "Stratum basale, stratum spinosum, stratum granulosum, stratum lucidum, stratum corneum.",
 "New cells are born deep and are pushed up through each layer.",
 "Reversing the order and starting from the corneum.",
 "integumentary; epidermis; strata; ordering"),
("W1-415","Epidermis","Stratum basale","EP",1,"Identification",
 "Which epidermal stratum is the deepest?",
 "The stratum basale.",
 "It sits directly on the basement membrane.",
 "Naming the corneum as the deepest layer.",
 "integumentary; epidermis; stratum basale"),
("W1-416","Epidermis","Stratum basale","EP",2,"Structure-function",
 "Why is the stratum basale critical for skin renewal?",
 "It is a single row of dividing cells that continually produces new keratinocytes.",
 "The new cells are pushed toward the surface as more form beneath them.",
 "Thinking the surface layer is the one that divides.",
 "integumentary; epidermis; stratum basale"),
("W1-417","Epidermis","Stratum corneum","EP",1,"Identification",
 "Which stratum is the surface layer of flat, dead, keratinized cells?",
 "The stratum corneum.",
 "It is the tough, water-resistant barrier of the skin.",
 "Calling the corneum a living layer.",
 "integumentary; epidermis; stratum corneum"),
("W1-418","Epidermis","Stratum granulosum","EP",2,"Identification",
 "In which stratum does keratinization begin?",
 "The stratum granulosum.",
 "Cells here fill with keratohyalin granules.",
 "Thinking keratin first appears in the stratum basale.",
 "integumentary; epidermis; stratum granulosum; keratinization"),
("W1-419","Epidermis","Stratum granulosum","EP",2,"Structure-function",
 "What waterproofs the epidermis, and where is it released?",
 "Lamellar granules of lipid, released by keratinocytes in the stratum granulosum.",
 "This lipid seals the layers against water loss.",
 "Thinking keratin alone waterproofs the skin.",
 "integumentary; epidermis; stratum granulosum; waterproofing"),
("W1-420","Epidermis","Stratum lucidum","EP",2,"Identification",
 "Which stratum is present only in thick skin?",
 "The stratum lucidum.",
 "It is a clear, thin layer found in the palms and soles.",
 "Thinking the lucidum is present in all skin.",
 "integumentary; epidermis; stratum lucidum; thick skin"),
("W1-421","Epidermis","Thick vs thin skin","EP",2,"Comparison",
 "Compare thick and thin skin by their strata.",
 "Thick skin of the palms and soles has all five strata; thin skin lacks the stratum lucidum.",
 "Thick versus thin refers to epidermal thickness, not the whole skin.",
 "Thinking thick skin simply has a thicker dermis.",
 "integumentary; epidermis; thick skin; thin skin"),
("W1-422","Epidermis","Stratum spinosum","EP",1,"Identification",
 "Which stratum has a spiny appearance and several cell layers?",
 "The stratum spinosum.",
 "The 'spines' are shrinkage artifacts at the desmosomes.",
 "Confusing the spinosum with the granulosum.",
 "integumentary; epidermis; stratum spinosum"),
("W1-423","Epidermis","Keratinocyte journey","EP",2,"Tracing",
 "Trace a keratinocyte's journey through the epidermis.",
 "Born in the stratum basale, it is pushed up through the spinosum, granulosum, (lucidum in thick skin), and corneum, where it is shed.",
 "The cell dies and flattens as it rises.",
 "Thinking keratinocytes stay in one layer.",
 "integumentary; epidermis; keratinocyte"),
("W1-424","Epidermis","Thick vs thin skin","EP",3,"Classification",
 "A biopsy shows a clear, thin band just above the granulosum. From which body region is the skin most likely?",
 "Thick skin of the palm or sole, because the band is the stratum lucidum.",
 "Only thick skin contains a stratum lucidum.",
 "Assuming any skin sample can show a lucidum.",
 "integumentary; epidermis; stratum lucidum; thick skin"),
("W1-425","Epidermis","Stratum corneum","EP",2,"Structure-function",
 "Why is the stratum corneum well suited to be the body's barrier?",
 "It is many layers of flat, dead, keratin-filled cells that resist abrasion and water loss.",
 "Dead, keratinized cells make a durable shield.",
 "Thinking the barrier layer is living tissue.",
 "integumentary; epidermis; stratum corneum"),
("W1-426","Epidermis","Strata comparison","EP",2,"Comparison",
 "Compare the stratum basale and stratum corneum by cell activity.",
 "The basale is living and dividing; the corneum is dead and keratinized.",
 "Life at the bottom, protection at the top.",
 "Thinking corneum cells still divide.",
 "integumentary; epidermis; stratum basale; stratum corneum"),
("W1-427","Epidermis","Strata order","EP",3,"Ordering",
 "In thick skin, through which strata, in order, must a keratinocyte pass from dividing to shed?",
 "Basale, spinosum, granulosum, lucidum, corneum.",
 "The lucidum step occurs only in thick skin.",
 "Skipping the lucidum when describing thick skin.",
 "integumentary; epidermis; strata; ordering; thick skin"),
("W1-428","Epidermis","Stratum basale","EP",1,"Identification",
 "On what structure does the stratum basale rest?",
 "The basement membrane.",
 "The basement membrane anchors the epidermis to the dermis.",
 "Thinking the basale rests directly on adipose tissue.",
 "integumentary; epidermis; stratum basale; basement membrane"),
("W1-429","Epidermis","Clinical","CL",3,"Board-style",
 "A wound spares the stratum basale. Why can the epidermis still regenerate?",
 "The basale is the dividing layer, so intact basal cells regrow the epidermis.",
 "If the basale is destroyed, a graft is needed.",
 "Thinking any epidermal layer can regenerate the skin.",
 "integumentary; epidermis; stratum basale; clinical; healing"),
("W1-430","Epidermis","Keratinization","EP",3,"Structure-function",
 "Why does keratinization make the outer epidermis both tough and water-resistant?",
 "As cells rise they fill with keratin and are sealed by lamellar lipid, forming a dead, hardened, waterproof surface.",
 "Structural protein plus a lipid barrier work together.",
 "Thinking keratin alone, without the lipid, does the job.",
 "integumentary; epidermis; keratinization"),

# ---------- EPIDERMAL CELLS (431-441) ----------
("W1-431","Epidermis","Epidermal cells","EP",1,"Identification",
 "What is the main cell of the epidermis?",
 "The keratinocyte.",
 "It produces keratin, the protective protein of the epidermis.",
 "Thinking melanocytes are the most numerous epidermal cell.",
 "integumentary; epidermis; keratinocyte"),
("W1-432","Epidermis","Epidermal cells","EP",2,"Structure-function",
 "What do keratinocytes produce, and why does it matter?",
 "Keratin, the tough protein that protects the epidermis.",
 "Keratin gives the skin its durability.",
 "Confusing keratin with melanin.",
 "integumentary; epidermis; keratinocyte; keratin"),
("W1-433","Epidermis","Epidermal cells","EP",1,"Identification",
 "Which epidermal cell produces melanin?",
 "The melanocyte.",
 "Melanin colors the skin and shields it against UV light.",
 "Thinking keratinocytes make the pigment.",
 "integumentary; epidermis; melanocyte; melanin"),
("W1-434","Epidermis","Epidermal cells","EP",2,"Structure-function",
 "How does melanin protect the skin?",
 "It shields the skin against UV light while also giving it color.",
 "Melanocytes pass the pigment to nearby keratinocytes.",
 "Thinking melanin's only role is color.",
 "integumentary; epidermis; melanocyte; melanin; UV"),
("W1-435","Epidermis","Epidermal cells","EP",2,"Comparison",
 "Compare keratinocytes and melanocytes by product and role.",
 "Keratinocytes make keratin for protection; melanocytes make melanin for color and UV shielding.",
 "Two different products, two different jobs.",
 "Thinking one cell type does both jobs.",
 "integumentary; epidermis; keratinocyte; melanocyte"),
("W1-436","Epidermis","Epidermal cells","EP",2,"Identification",
 "What is another name for tactile cells, and what do they sense?",
 "Merkel cells; paired with a nerve ending, they sense touch.",
 "They lie in the deep epidermis.",
 "Thinking Merkel cells are immune cells.",
 "integumentary; epidermis; tactile cells; Merkel cells"),
("W1-437","Epidermis","Epidermal cells","EP",2,"Identification",
 "What is another name for dendritic cells, and what is their role?",
 "Langerhans cells; they are immune cells that patrol the epidermis.",
 "They detect pathogens breaching the surface.",
 "Confusing Langerhans cells of the skin with the islet cells of the pancreas.",
 "integumentary; epidermis; dendritic cells; Langerhans cells"),
("W1-438","Epidermis","Epidermal cells","EP",2,"Comparison",
 "Compare tactile cells and dendritic cells by function.",
 "Tactile (Merkel) cells sense touch; dendritic (Langerhans) cells provide immune defense.",
 "One senses, one defends.",
 "Swapping the roles of the two cells.",
 "integumentary; epidermis; Merkel cells; Langerhans cells"),
("W1-439","Epidermis","Epidermal cells","EP",3,"Classification",
 "An epidermal cell partners with a sensory nerve ending. Which cell type is it?",
 "A tactile (Merkel) cell.",
 "Its job is touch reception.",
 "Guessing melanocyte because it is also a specialized cell.",
 "integumentary; epidermis; Merkel cells; classification"),
("W1-440","Epidermis","Epidermal cells","EP",3,"Application",
 "A person's melanocytes make very little melanin. Which protection is most reduced?",
 "Protection against UV light.",
 "Less melanin means less UV shielding and a higher risk of burns and damage.",
 "Thinking low melanin mainly affects touch or immunity.",
 "integumentary; epidermis; melanocyte; UV; application"),
("W1-441","Epidermis","Epidermal cells","EP",3,"Board-style",
 "Name the four epidermal cell types and pair each with its one-word job.",
 "Keratinocyte (protection), melanocyte (pigment), tactile/Merkel cell (touch), dendritic/Langerhans cell (immunity).",
 "Four cells, four jobs, one epithelium.",
 "Forgetting the immune and touch cells and listing only keratinocytes and melanocytes.",
 "integumentary; epidermis; epidermal cells; board"),

# ---------- DERMIS (442-458) ----------
("W1-442","Dermis","Dermal layers","DE",1,"Identification",
 "What are the two layers of the dermis?",
 "The papillary layer and the reticular layer.",
 "The papillary layer is superficial; the reticular layer is deep.",
 "Confusing the dermal layers with the epidermal strata.",
 "integumentary; dermis; papillary layer; reticular layer"),
("W1-443","Dermis","Dermal layers","DE",2,"Comparison",
 "Compare the papillary and reticular dermis by connective tissue type.",
 "The papillary layer is areolar connective tissue; the reticular layer is dense irregular connective tissue.",
 "Loose tissue above, dense tissue below.",
 "Thinking both dermal layers are dense.",
 "integumentary; dermis; papillary layer; reticular layer"),
("W1-444","Dermis","Dermal papillae","DE",2,"Definition",
 "What are dermal papillae?",
 "Finger-like projections of the papillary layer that push up into the epidermis.",
 "They interlock dermis and epidermis and can raise friction ridges.",
 "Thinking the papillae are part of the epidermis.",
 "integumentary; dermis; dermal papillae"),
("W1-445","Dermis","Dermal papillae","DE",2,"Structure-function",
 "How do dermal papillae produce fingerprints?",
 "On the palms and soles they raise the epidermis into friction ridges, the basis of fingerprints.",
 "The ridges improve grip and leave prints.",
 "Thinking fingerprints are formed in the epidermis alone.",
 "integumentary; dermis; dermal papillae; fingerprints"),
("W1-446","Dermis","Sensory receptors","DE",2,"Identification",
 "Which corpuscles sit in the dermal papillae, and what do they sense?",
 "Tactile (Meissner) corpuscles; they sense light touch.",
 "Their shallow position suits fine touch.",
 "Placing Pacinian corpuscles in the papillae.",
 "integumentary; dermis; Meissner corpuscles; light touch"),
("W1-447","Dermis","Sensory receptors","DE",2,"Identification",
 "Which corpuscles lie in the deep reticular layer, and what do they sense?",
 "Lamellated (Pacinian) corpuscles; they sense deep pressure.",
 "Their deep location suits deep-pressure detection.",
 "Thinking Pacinian corpuscles sense light touch.",
 "integumentary; dermis; Pacinian corpuscles; deep pressure"),
("W1-448","Dermis","Sensory receptors","DE",3,"Comparison",
 "Compare tactile (Meissner) and lamellated (Pacinian) corpuscles by location and stimulus.",
 "Meissner corpuscles are in the papillary layer for light touch; Pacinian corpuscles are in the deep reticular layer for deep pressure.",
 "Depth matches the stimulus each receptor detects.",
 "Swapping their depths or their stimuli.",
 "integumentary; dermis; Meissner corpuscles; Pacinian corpuscles"),
("W1-449","Dermis","Reticular layer","DE",2,"Identification",
 "What tissue makes up the bulk of the dermis, and in which layer?",
 "Dense irregular connective tissue, in the reticular layer.",
 "This is the strong, stretch-resistant core of the skin.",
 "Thinking areolar tissue makes up the bulk of the dermis.",
 "integumentary; dermis; reticular layer; dense irregular"),
("W1-450","Dermis","Reticular layer","DE",2,"Structure-function",
 "How do collagen and elastic fibers in the reticular layer serve the skin?",
 "Collagen gives strength and elastic fibers give stretch and recoil.",
 "Together they let skin resist tearing yet spring back.",
 "Thinking one fiber type provides both strength and recoil.",
 "integumentary; dermis; reticular layer; collagen; elastic fibers"),
("W1-451","Dermis","Reticular layer","DE",2,"Identification",
 "Which dermal layer holds the blood vessels, nerve endings, glands, and hair follicles?",
 "The reticular layer.",
 "The deep dermis houses the working structures of the skin.",
 "Putting hair follicles in the papillary layer.",
 "integumentary; dermis; reticular layer"),
("W1-452","Dermis","Dermal cells","DE",1,"Identification",
 "What is the main cell of the dermis?",
 "The fibroblast.",
 "It builds the collagen and elastic fibers of the dermal matrix.",
 "Thinking keratinocytes are found in the dermis.",
 "integumentary; dermis; fibroblast"),
("W1-453","Dermis","Dermal cells","DE",2,"Comparison",
 "Compare the roles of dermal macrophages and mast cells.",
 "Macrophages are wandering phagocytes that engulf debris and pathogens; mast cells release chemicals during injury and allergy.",
 "One engulfs invaders, the other triggers responses.",
 "Thinking both cells are phagocytes.",
 "integumentary; dermis; macrophages; mast cells"),
("W1-454","Dermis","Papillary layer","DE",3,"Classification",
 "A biopsy of the superficial dermis shows loose areolar tissue thrown into papillae. Which dermal layer is it?",
 "The papillary layer.",
 "Areolar tissue and papillae mark the papillary layer.",
 "Guessing the reticular layer.",
 "integumentary; dermis; papillary layer; classification"),
("W1-455","Dermis","Dermal papillae","DE",3,"Structure-function",
 "Why are fingerprints unique to the palms and soles rather than all skin?",
 "Only there do dermal papillae raise the epidermis into friction ridges.",
 "These ridges form the fingerprint pattern.",
 "Thinking all skin has friction ridges.",
 "integumentary; dermis; dermal papillae; fingerprints"),
("W1-456","Dermis","Dermal cells","DE",1,"Identification",
 "Which dermal cell releases chemicals during injury and allergy?",
 "The mast cell.",
 "It drives inflammation and allergic responses.",
 "Confusing mast cells with macrophages.",
 "integumentary; dermis; mast cells"),
("W1-457","Dermis","Clinical","CL",3,"Application",
 "A splinter reaches a layer rich in blood vessels and nerve endings; it bleeds and hurts. Which skin layer did it reach?",
 "The dermis, specifically the reticular layer.",
 "The vascular, innervated dermis bleeds and signals pain.",
 "Thinking the avascular epidermis is what bleeds.",
 "integumentary; dermis; clinical"),
("W1-458","Dermis","Sensory receptors","DE",3,"Board-style",
 "Light touch and deep pressure on the same fingertip are detected by different receptors. Name each and its dermal location.",
 "Light touch by Meissner corpuscles in the papillary layer; deep pressure by Pacinian corpuscles in the deep reticular layer.",
 "Receptor depth matches the stimulus.",
 "Assuming a single receptor detects both.",
 "integumentary; dermis; Meissner corpuscles; Pacinian corpuscles; board"),

# ---------- HAIR (459-471) ----------
("W1-459","Hair","Hair structure","AC",1,"Definition",
 "What is hair?",
 "A strand of keratinized cells produced by a hair follicle.",
 "Hair is dead keratinized tissue, like the outer epidermis.",
 "Thinking hair is living tissue along its length.",
 "integumentary; hair"),
("W1-460","Hair","Hair structure","AC",2,"Comparison",
 "Compare the hair shaft and hair root by location.",
 "The shaft is the part above the skin surface; the root is the part within the follicle.",
 "Surface versus embedded.",
 "Swapping shaft and root.",
 "integumentary; hair; hair shaft; hair root"),
("W1-461","Hair","Hair follicle","AC",2,"Definition",
 "What is a hair follicle?",
 "A tube of epidermal and dermal tissue that surrounds the hair root.",
 "It combines both skin layers around the root.",
 "Thinking the follicle is purely epidermal.",
 "integumentary; hair; hair follicle"),
("W1-462","Hair","Hair bulb","AC",2,"Identification",
 "Where in the follicle does the hair actually grow?",
 "In the hair bulb, the expanded base of the follicle.",
 "New cells form here and are pushed upward.",
 "Thinking hair grows from its tip.",
 "integumentary; hair; hair bulb"),
("W1-463","Hair","Hair color","AC",2,"Structure-function",
 "What sets hair color, and which cells are responsible?",
 "Melanocytes deposit pigment into the cortex and medulla of the hair.",
 "Loss of this pigment turns hair gray.",
 "Thinking the follicle wall colors the hair.",
 "integumentary; hair; melanocytes; hair color"),
("W1-464","Hair","Arrector pili","AC",2,"Identification",
 "What is the arrector pili, and what does it do?",
 "A small smooth muscle that pulls the hair upright.",
 "Its contraction produces goose bumps.",
 "Thinking the arrector pili is skeletal muscle.",
 "integumentary; hair; arrector pili"),
("W1-465","Hair","Hair root plexus","AC",1,"Identification",
 "What does the hair root plexus detect?",
 "Movement of the hair, through sensory nerve endings around the follicle.",
 "This makes hairs sensitive touch detectors.",
 "Thinking the plexus supplies blood rather than sensation.",
 "integumentary; hair; hair root plexus"),
("W1-466","Hair","Root sheaths","AC",2,"Comparison",
 "Compare the epithelial and dermal root sheaths of a hair.",
 "The epithelial root sheath is the epidermal tube wrapping the root; the dermal root sheath is the connective tissue layer around the follicle.",
 "Epithelial inside, connective tissue outside.",
 "Swapping the two sheaths.",
 "integumentary; hair; root sheaths"),
("W1-467","Hair","Arrector pili","AC",3,"Structure-function",
 "Why does contraction of the arrector pili produce goose bumps?",
 "The smooth muscle pulls the hair upright, dimpling the skin at the follicle.",
 "It is a vestigial response that once fluffed fur for warmth.",
 "Thinking goose bumps come from the hair itself contracting.",
 "integumentary; hair; arrector pili"),
("W1-468","Hair","Hair bulb","AC",3,"Classification",
 "A structure is the expanded base of a follicle where new hair cells form. What is it?",
 "The hair bulb.",
 "It is the growth zone of the hair.",
 "Confusing the bulb with the hair root plexus.",
 "integumentary; hair; hair bulb; classification"),
("W1-469","Hair","Hair color","AC",3,"Application",
 "Someone's hair turns gray with age. What has changed at the cellular level?",
 "Melanocytes are depositing little or no pigment into the cortex and medulla.",
 "No pigment means no color.",
 "Thinking gray hair means the follicle has died.",
 "integumentary; hair; melanocytes; application"),
("W1-470","Hair","Hair structure","AC",1,"Identification",
 "What is the part of the hair within the follicle called?",
 "The hair root.",
 "The shaft is the visible part above the surface.",
 "Calling the visible hair the root.",
 "integumentary; hair; hair root"),
("W1-471","Hair","Hair structure","AC",3,"Board-style",
 "Trace a hair from where it grows to where you see it, naming each part.",
 "New cells form in the hair bulb, become the root within the follicle, and emerge as the shaft above the skin.",
 "Growth at the base, visibility at the top.",
 "Thinking hair grows from the shaft downward.",
 "integumentary; hair; board"),

# ---------- NAILS (472-479) ----------
("W1-472","Nails","Nail structure","AC",1,"Definition",
 "What is a nail?",
 "A plate of hard keratin on the dorsal tip of a finger or toe.",
 "Nails are a keratinized accessory structure of the skin.",
 "Thinking nails are made of bone.",
 "integumentary; nails"),
("W1-473","Nails","Nail matrix","AC",2,"Identification",
 "What is the nail matrix, and why does it matter?",
 "The growth region at the proximal end of the nail; new nail forms here.",
 "Damage to the matrix deforms nail growth.",
 "Thinking the nail grows from its tip.",
 "integumentary; nails; nail matrix"),
("W1-474","Nails","Nail structure","AC",2,"Comparison",
 "Compare the nail plate and the nail bed.",
 "The nail plate is the visible body of the nail; the nail bed is the skin beneath it.",
 "Plate on top, bed underneath.",
 "Swapping the plate and the bed.",
 "integumentary; nails; nail plate; nail bed"),
("W1-475","Nails","Lunule","AC",2,"Identification",
 "What is the lunule?",
 "The pale crescent at the base of the nail.",
 "It overlies the thick nail matrix.",
 "Thinking the lunule is dead tissue lying on top of the nail.",
 "integumentary; nails; lunule"),
("W1-476","Nails","Cuticle","AC",2,"Identification",
 "What is another name for the cuticle, and what is it?",
 "The eponychium; a fold of skin over the proximal nail.",
 "It seals the base of the nail.",
 "Confusing the cuticle with the lunule.",
 "integumentary; nails; cuticle; eponychium"),
("W1-477","Nails","Nail matrix","AC",2,"Structure-function",
 "Why does injury to the nail matrix affect the whole nail?",
 "The matrix is where new nail is produced, so damage there disrupts all subsequent growth.",
 "The growth zone controls the plate that follows.",
 "Thinking the visible plate regrows itself.",
 "integumentary; nails; nail matrix"),
("W1-478","Nails","Lunule","AC",3,"Classification",
 "A pale crescent shows at the base of a nail. What structure is it, and what lies beneath it?",
 "The lunule, which overlies the nail matrix.",
 "Its paleness comes from the thick underlying matrix.",
 "Thinking the lunule is separate from the matrix.",
 "integumentary; nails; lunule; nail matrix"),
("W1-479","Nails","Nail matrix","AC",3,"Board-style",
 "A nail grows out over months from one region. Name that region and where you would find it.",
 "The nail matrix, at the proximal end of the nail beneath the lunule.",
 "All nail length originates here.",
 "Believing the free edge generates new nail.",
 "integumentary; nails; nail matrix; board"),

# ---------- GLANDS (480-491) ----------
("W1-480","Glands","Sebaceous glands","AC",1,"Identification",
 "Which skin gland produces sebum, and where does it release it?",
 "The sebaceous gland; it releases oily sebum into hair follicles.",
 "Sebum softens the hair and skin.",
 "Thinking sebaceous glands open directly onto the skin surface.",
 "integumentary; glands; sebaceous glands; sebum"),
("W1-481","Glands","Eccrine glands","AC",2,"Identification",
 "Which sweat gland is the most numerous, and where does it open?",
 "The eccrine sweat gland; it opens directly onto the skin surface.",
 "It makes watery sweat for cooling.",
 "Confusing eccrine glands with apocrine glands.",
 "integumentary; glands; eccrine glands"),
("W1-482","Glands","Sweat glands","AC",2,"Comparison",
 "Compare eccrine and apocrine sweat glands by secretion and where they open.",
 "Eccrine glands make watery sweat onto the skin surface; apocrine glands make richer, thicker sweat into hair follicles of the axillary and genital regions.",
 "Different secretions and different outlets.",
 "Thinking both open onto the skin surface.",
 "integumentary; glands; eccrine glands; apocrine glands"),
("W1-483","Glands","Ceruminous glands","AC",2,"Identification",
 "What do ceruminous glands produce, and where?",
 "Cerumen, or earwax, released into the ear canal.",
 "They are modified sweat glands.",
 "Thinking earwax comes only from sebaceous glands.",
 "integumentary; glands; ceruminous glands; cerumen"),
("W1-484","Glands","Mammary glands","AC",2,"Identification",
 "Which gland is a modified sweat gland that produces milk?",
 "The mammary gland.",
 "It delivers milk through ducts to the nipple.",
 "Thinking mammary glands are modified sebaceous glands.",
 "integumentary; glands; mammary glands"),
("W1-485","Glands","Sebaceous glands","AC",2,"Structure-function",
 "Why does sebum reach the skin surface through hair follicles rather than its own pore?",
 "Sebaceous glands empty into hair follicles, and the sebum travels up along the hair.",
 "This lubricates both the hair and the skin.",
 "Thinking sebaceous glands have surface pores like eccrine glands.",
 "integumentary; glands; sebaceous glands; sebum"),
("W1-486","Glands","Gland comparison","AC",2,"Comparison",
 "Compare sebaceous and eccrine glands by secretion and outlet.",
 "Sebaceous glands release oily sebum into follicles; eccrine glands release watery sweat onto the skin surface.",
 "Oil versus water, follicle versus surface.",
 "Thinking both glands secrete sweat.",
 "integumentary; glands; sebaceous glands; eccrine glands"),
("W1-487","Glands","Apocrine glands","AC",3,"Classification",
 "A gland empties a rich, thick secretion into hair follicles of the armpit. Which gland is it?",
 "An apocrine sweat gland.",
 "Apocrine glands localize to the axillary and genital regions.",
 "Guessing eccrine because it is also a sweat gland.",
 "integumentary; glands; apocrine glands; classification"),
("W1-488","Glands","Ceruminous glands","AC",3,"Classification",
 "A modified sweat gland empties earwax into the ear canal. Which gland is it?",
 "A ceruminous gland.",
 "Cerumen protects the ear canal.",
 "Thinking it is a sebaceous gland.",
 "integumentary; glands; ceruminous glands; classification"),
("W1-489","Glands","Sebaceous glands","AC",1,"Identification",
 "What does the sebaceous gland's secretion do for hair and skin?",
 "Sebum softens the hair and skin.",
 "It acts as an oily conditioner and mild water repellent.",
 "Thinking sebum's main role is cooling.",
 "integumentary; glands; sebaceous glands; sebum"),
("W1-490","Glands","Clinical","CL",3,"Application",
 "A blocked sebaceous gland traps oily secretion in a follicle. Which secretion and outlet are involved?",
 "Sebum, which normally drains into the hair follicle.",
 "This backup underlies common acne lesions.",
 "Thinking the blockage involves watery sweat.",
 "integumentary; glands; sebaceous glands; clinical; acne"),
("W1-491","Glands","Modified sweat glands","AC",3,"Board-style",
 "Name the two sweat-derived 'modified' glands and what each secretes.",
 "Ceruminous glands (earwax) and mammary glands (milk).",
 "Both are modified sweat glands.",
 "Listing sebaceous glands as modified sweat glands.",
 "integumentary; glands; ceruminous glands; mammary glands; board"),

# ---------- SECRETION MODES (492-495) ----------
("W1-492","Glands","Secretion modes","AC",1,"Identification",
 "Name the three modes by which exocrine glands release their product.",
 "Merocrine (eccrine), apocrine, and holocrine.",
 "They differ in how much of the cell is lost during secretion.",
 "Confusing the secretion mode with the gland's name.",
 "integumentary; glands; secretion modes"),
("W1-493","Glands","Secretion modes","AC",2,"Comparison",
 "Compare merocrine and holocrine secretion.",
 "Merocrine cells stay intact and release product by exocytosis; holocrine cells fill with product and rupture, becoming the secretion.",
 "No cell lost versus the whole cell lost.",
 "Thinking holocrine glands survive each release.",
 "integumentary; glands; secretion modes; merocrine; holocrine"),
("W1-494","Glands","Secretion modes","AC",2,"Classification",
 "Sebaceous glands release product by the whole cell rupturing. Which secretion mode is this?",
 "Holocrine.",
 "The ruptured cell becomes the sebum.",
 "Calling it apocrine secretion.",
 "integumentary; glands; secretion modes; holocrine; sebaceous glands"),
("W1-495","Glands","Secretion modes","AC",3,"Board-style",
 "A gland loses only the apical tip of each cell during secretion. Which mode is it, and name a gland that uses it.",
 "Apocrine secretion; apocrine sweat glands (and mammary glands) use it.",
 "It falls between merocrine and holocrine in how much cell is lost.",
 "Confusing the apocrine mode with the apocrine gland's location.",
 "integumentary; glands; secretion modes; apocrine"),

# ---------- CLINICAL INTEGRATION (496-500) ----------
("W1-496","Clinical","Burns","CL",1,"Identification",
 "A first-degree burn damages which skin layer only?",
 "The epidermis.",
 "Like a mild sunburn, it heals without scarring.",
 "Thinking a first-degree burn reaches the dermis.",
 "integumentary; clinical; burns"),
("W1-497","Clinical","Burns","CL",3,"Comparison",
 "Compare a second-degree and a third-degree burn by the layers they reach and by pain.",
 "Second-degree reaches into the dermis and blisters; third-degree destroys the full thickness of epidermis and dermis and can be painless because the dermal nerve endings are gone.",
 "A deeper burn can hurt less, yet it is more serious.",
 "Assuming the deepest burn is always the most painful.",
 "integumentary; clinical; burns"),
("W1-498","Clinical","Burns","CL",3,"Application",
 "Why can a full-thickness (third-degree) burn be painless?",
 "It destroys the dermis, including the nerve endings that sense pain.",
 "No nerves means no pain signal from that area.",
 "Thinking painlessness means the burn is minor.",
 "integumentary; clinical; burns"),
("W1-499","Clinical","Injections","CL",3,"Classification",
 "An injection is placed into the dermis for a skin test. What is this route called, and how does it differ from subcutaneous?",
 "Intradermal, into the dermis; subcutaneous is deeper, into the hypodermis.",
 "Depth defines the injection route.",
 "Using 'subcutaneous' and 'intradermal' interchangeably.",
 "integumentary; clinical; injections"),
("W1-500","Clinical","Healing","CL",3,"Board-style",
 "Two burns both remove the epidermis, but one heals on its own and one needs a graft. What structural difference explains this?",
 "If the stratum basale, the dividing layer, survives, the skin regenerates; if it is destroyed, a graft is needed.",
 "Regeneration depends on the basal layer.",
 "Thinking any surviving skin can regrow the epidermis.",
 "integumentary; clinical; healing; stratum basale; board"),
]

# ---- integrity checks ----
assert len(cards) == 100, f"expected 100, got {len(cards)}"
ids = [c[0] for c in cards]
assert ids == [f"W1-{n}" for n in range(401,501)], "IDs must be W1-401..W1-500 in order"
assert len(set(ids)) == 100
qs = [c[6].strip().lower() for c in cards]
assert len(set(qs)) == 100, "duplicate questions within batch"
run_t, run_n = None, 0
for c in cards:
    run_n = run_n + 1 if c[5] == run_t else 1
    run_t = c[5]
    assert run_n <= 3, f"too many {c[5]} in a row at {c[0]}"
dok = collections.Counter(c[4] for c in cards)
print("DOK:", dict(sorted(dok.items())), "-> D1 %d / D2 %d / D3 %d" % (dok[1],dok[2],dok[3]))
print("Distinct card styles:", len(set(c[5] for c in cards)))

# difficulty 1-10, DOK-based with gradual rise across the batch
def difficulty(dok_v, idx):
    base = {1:2, 2:4, 3:6}[dok_v]
    return min(10, base + round(idx/(len(cards)-1)*2))  # +0..+2 across batch

OUT = os.path.dirname(os.path.abspath(__file__))
COLS = ["Card ID","Week","System","Module","Topic","Subtopic","Learning Objective",
        "Difficulty","Depth of Knowledge","Question","Answer","Explanation",
        "Common Misconception","Tags"]

rows = []
for idx,(cid,topic,subtopic,lokey,dokv,qtype,q,a,expl,misc,tags) in enumerate(cards):
    rows.append({
        "Card ID":cid,"Week":WEEK,"System":SYSTEM,"Module":MODULE,"Topic":topic,
        "Subtopic":subtopic,"Learning Objective":LO[lokey],
        "Difficulty":difficulty(dokv,idx),"Depth of Knowledge":dokv,
        "Question":q,"Answer":a,"Explanation":expl,"Common Misconception":misc,"Tags":tags,
        "_qtype":qtype,
    })

import json as _json
_json.dump(rows, open(os.path.join(OUT,"_rows5.json"),"w"), ensure_ascii=False)
csv_path = os.path.join(OUT,"Week1_Spaced_Recall_Cards_401-500_FULL.csv")
with open(csv_path,"w",newline="",encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=COLS)
    w.writeheader()
    for r in rows:
        w.writerow({k:r[k] for k in COLS})
print("Wrote", csv_path)

# ---- HTML viewer (comprehensive fields) ----
def esc(s): return html.escape(str(s), quote=True)
topics = []
for r in rows:
    if r["Topic"] not in topics: topics.append(r["Topic"])

card_html=[]
for r in rows:
    card_html.append(f'''      <article class="card" data-topic="{esc(r['Topic'])}" data-dok="{r['Depth of Knowledge']}" tabindex="0" aria-label="Card {esc(r['Card ID'])}">
        <header class="card-head">
          <span class="cid">{esc(r['Card ID'])}</span>
          <span class="chips">
            <span class="chip chip-topic">{esc(r['Topic'])}</span>
            <span class="chip chip-type">{esc(r['_qtype'])}</span>
            <span class="chip chip-dok">DOK {r['Depth of Knowledge']}</span>
            <span class="chip chip-diff" title="Difficulty 1-10">Diff {r['Difficulty']}</span>
          </span>
        </header>
        <p class="sub">{esc(r['Subtopic'])}</p>
        <p class="q">{esc(r['Question'])}</p>
        <details>
          <summary>Show answer &amp; teaching notes</summary>
          <p class="a"><span class="lbl">Answer.</span> {esc(r['Answer'])}</p>
          <p class="ex"><span class="lbl">Why it matters.</span> {esc(r['Explanation'])}</p>
          <p class="mc"><span class="lbl">Common misconception.</span> {esc(r['Common Misconception'])}</p>
          <p class="lo"><span class="lbl">Objective.</span> {esc(r['Learning Objective'])}</p>
        </details>
        <p class="tags">{esc(r['Tags'])}</p>
      </article>''')
cards_joined="\n".join(card_html)
topic_options="\n".join(f'          <option value="{esc(t)}">{esc(t)}</option>' for t in topics)
d1,d2,d3 = dok[1],dok[2],dok[3]

html_doc = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>BIO 004 Week 1 Spaced Recall, Cards 401 to 500 (Integumentary)</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&family=Plus+Jakarta+Sans:wght@600;700;800&family=Lora:ital@1&display=swap" rel="stylesheet">
<style>
  :root {{
    --navy:#1E3D4C; --navy-deep:#142a36; --navy-tint:#EDF1F3;
    --gold:#B8924A; --terra:#C2734D; --terra-dark:#A0522D;
    --white:#FFFFFF; --offwhite:#FAFAF9;
    --rest-shadow:0 1px 3px rgba(0,0,0,0.08);
    --hover-shadow:0 8px 16px rgba(0,0,0,0.10);
  }}
  * {{ box-sizing:border-box; }}
  body {{ margin:0; background:var(--offwhite); color:var(--navy);
    font-family:"Plus Jakarta Sans",system-ui,sans-serif; line-height:1.55; }}
  a.skip {{ position:absolute; left:-999px; top:0; background:var(--navy); color:#fff; padding:.6rem 1rem; z-index:20; }}
  a.skip:focus {{ left:.5rem; top:.5rem; }}
  .wrap {{ max-width:1080px; margin:0 auto; padding:1.5rem 1.25rem 3rem; }}
  header.page .eyebrow {{ font-family:"DM Sans",sans-serif; font-weight:700; font-size:12px;
    letter-spacing:.09em; text-transform:uppercase; color:var(--terra-dark); margin:0 0 .4rem; }}
  header.page h1 {{ font-weight:800; font-size:clamp(1.5rem,3.4vw,2.2rem); margin:0 0 .25rem; }}
  header.page .subhead {{ font-weight:600; color:var(--terra-dark); font-size:clamp(1rem,2vw,1.25rem); margin:0 0 .4rem; }}
  header.page .usage {{ font-family:"Lora",Georgia,serif; font-style:italic; margin:.2rem 0 0; }}
  .meta {{ display:flex; flex-wrap:wrap; gap:.5rem; margin:1rem 0 0; font-family:"DM Sans",sans-serif; font-weight:500; }}
  .stat {{ background:var(--white); border:1px solid var(--navy-tint); border-radius:8px; padding:.4rem .7rem; font-size:.85rem; box-shadow:var(--rest-shadow); }}
  .stat b {{ color:var(--terra-dark); }}
  .controls {{ display:flex; flex-wrap:wrap; gap:1rem; align-items:flex-end; margin:1.5rem 0 .5rem;
    background:var(--white); border:1px solid var(--navy-tint); border-radius:10px; padding:1rem; box-shadow:var(--rest-shadow); }}
  .field {{ display:flex; flex-direction:column; gap:.3rem; }}
  .field label {{ font-family:"DM Sans",sans-serif; font-weight:700; font-size:12px; text-transform:uppercase; letter-spacing:.06em; color:var(--terra-dark); }}
  select {{ font:inherit; padding:.5rem .6rem; border:1px solid var(--navy); border-radius:8px; background:var(--white); color:var(--navy); min-width:200px; }}
  .count {{ font-family:"DM Sans",sans-serif; font-weight:500; font-size:.9rem; }}
  #cards {{ display:grid; grid-template-columns:repeat(auto-fill,minmax(330px,1fr)); gap:1rem; margin-top:1rem; }}
  .card {{ background:var(--white); border:1px solid var(--navy-tint); border-radius:12px; padding:1rem 1.1rem;
    box-shadow:var(--rest-shadow); transition:transform 200ms ease, box-shadow 200ms ease; display:flex; flex-direction:column; gap:.45rem; }}
  .card:hover, .card:focus-within {{ transform:translateY(-2px); box-shadow:var(--hover-shadow); }}
  .card:focus {{ outline:3px solid var(--gold); outline-offset:2px; }}
  .card-head {{ display:flex; justify-content:space-between; align-items:flex-start; gap:.5rem; flex-wrap:wrap; }}
  .cid {{ font-family:"DM Sans",sans-serif; font-weight:700; font-size:.85rem; }}
  .chips {{ display:flex; flex-wrap:wrap; gap:.3rem; }}
  .chip {{ font-family:"DM Sans",sans-serif; font-weight:700; font-size:11px; letter-spacing:.03em;
    padding:.15rem .5rem; border-radius:999px; border:1px solid var(--navy); color:var(--navy); }}
  .chip-topic {{ border-color:var(--terra); color:var(--terra-dark); }}
  .chip-type {{ border-color:var(--navy-tint); color:var(--navy); background:var(--navy-tint); }}
  .chip-dok {{ border-color:var(--gold); color:var(--terra-dark); }}
  .sub {{ font-family:"DM Sans",sans-serif; font-size:.72rem; letter-spacing:.05em; text-transform:uppercase; color:#5a6b73; margin:0; }}
  .q {{ font-weight:700; font-size:1.02rem; margin:.05rem 0 0; }}
  details {{ border-top:1px solid var(--navy-tint); padding-top:.5rem; }}
  summary {{ cursor:pointer; font-family:"DM Sans",sans-serif; font-weight:700; color:var(--gold); font-size:.9rem; }}
  summary:focus-visible {{ outline:3px solid var(--gold); outline-offset:2px; }}
  details p {{ margin:.5rem 0 0; }}
  .lbl {{ font-family:"DM Sans",sans-serif; font-weight:700; font-size:.78rem; text-transform:uppercase; letter-spacing:.04em; color:var(--terra-dark); }}
  .lo {{ font-family:"Lora",Georgia,serif; font-style:italic; color:var(--navy-deep); }}
  .tags {{ font-family:"DM Sans",sans-serif; font-size:.75rem; color:#5a6b73; margin:.2rem 0 0; }}
  footer.page {{ margin-top:2.5rem; padding-top:1rem; border-top:1px solid var(--navy-tint);
    font-family:"DM Sans",sans-serif; font-size:.85rem; color:#5a6b73; }}
  footer.page b {{ color:var(--navy); }}
  @media (prefers-reduced-motion: reduce) {{ .card {{ transition:none; }} }}
</style>
</head>
<body>
<a class="skip" href="#cards">Skip to cards</a>
<div class="wrap">
  <header class="page">
    <p class="eyebrow">BIO 004 &middot; Human Anatomy &middot; MedMasters Collaborative</p>
    <h1>Digital Spaced Recall Bank</h1>
    <p class="subhead">Week 1 &middot; Integumentary System &middot; Cards 401 to 500 (Batch 5)</p>
    <p class="usage">Read the question, answer it yourself, then reveal the answer and teaching notes. Filter by topic or Depth of Knowledge to drill a weak area.</p>
    <div class="meta" aria-label="Batch summary">
      <span class="stat"><b>100</b> cards (W1-401 to W1-500)</span>
      <span class="stat">DOK 1: <b>{d1}</b></span>
      <span class="stat">DOK 2: <b>{d2}</b></span>
      <span class="stat">DOK 3: <b>{d3}</b></span>
      <span class="stat"><b>{len(topics)}</b> topics</span>
    </div>
  </header>

  <section class="controls" aria-label="Filters">
    <div class="field">
      <label for="topic">Topic</label>
      <select id="topic" aria-controls="cards">
        <option value="all">All topics</option>
{topic_options}
      </select>
    </div>
    <div class="field">
      <label for="dok">Depth of Knowledge</label>
      <select id="dok" aria-controls="cards">
        <option value="all">All levels</option>
        <option value="1">DOK 1 (recall)</option>
        <option value="2">DOK 2 (concept)</option>
        <option value="3">DOK 3 (reasoning)</option>
      </select>
    </div>
    <p class="count" id="count" role="status" aria-live="polite">Showing 100 of 100 cards</p>
  </section>

  <main id="cards" aria-live="polite">
{cards_joined}
  </main>

  <footer class="page">
    <p><b>BIO 004 Human Anatomy</b> &middot; Week 1 Spaced Recall, Batch 5 &middot; Dr. Sharilyn Rennie</p>
    <p>Comprehensive fields: Card ID, Week, System, Module, Topic, Subtopic, Learning Objective, Difficulty, Depth of Knowledge, Question, Answer, Explanation, Common Misconception, Tags. Continues directly from cards 1 to 400; no card is repeated. Competency tag reserved for a later pass.</p>
  </footer>
</div>

<script>
  (function () {{
    var topicSel=document.getElementById('topic'), dokSel=document.getElementById('dok'),
        count=document.getElementById('count'),
        cards=Array.prototype.slice.call(document.querySelectorAll('.card'));
    function apply() {{
      var t=topicSel.value, d=dokSel.value, shown=0;
      cards.forEach(function(c){{
        var ok=(t==='all'||c.dataset.topic===t)&&(d==='all'||c.dataset.dok===d);
        c.style.display=ok?'':'none'; if(ok) shown++;
      }});
      count.textContent='Showing '+shown+' of '+cards.length+' cards';
    }}
    topicSel.addEventListener('change',apply); dokSel.addEventListener('change',apply);
  }})();
  (function () {{
    function sendHeight(){{ parent.postMessage({{id:'bio004-week1-batch5',height:document.documentElement.scrollHeight}}, '*'); }}
    window.addEventListener('load',sendHeight); window.addEventListener('resize',sendHeight);
    if(window.ResizeObserver){{ new ResizeObserver(sendHeight).observe(document.body); }}
  }})();
</script>
</body>
</html>'''

html_path=os.path.join(OUT,"Week1_Spaced_Recall_Cards_401-500.html")
with open(html_path,"w",encoding="utf-8") as f: f.write(html_doc)
print("Wrote", html_path)
print("difficulty range:", min(r['Difficulty'] for r in rows), "to", max(r['Difficulty'] for r in rows))
print("All checks passed.")
