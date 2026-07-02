#!/usr/bin/env python3
"""Build Week 1 Batch 4 (cards 301-400): CSV + HTML.
Schema matches the established 8-column database: ID,Module,Topic,DOK,Difficulty,Question,Answer,Tags.
'qtype' is used only for HTML display and style-variety verification, not written to CSV.
"""
import csv, html, os, collections

# (id, module, topic, dok, difficulty, qtype, question, answer, tags)
cards = [
# ---------- CELL JUNCTIONS (301-313) : 3 D1 / 6 D2 / 4 D3 ----------
("W1-301","Tissues","Cell Junctions",1,2,"Definition","What is a tight junction?","A junction that fuses adjacent cell membranes to seal the gap between cells so nothing leaks between them.","cell junctions; tight junction"),
("W1-302","Tissues","Cell Junctions",1,2,"Identification","Which proteins form tight junctions?","Claudins and occludins.","cell junctions; tight junction"),
("W1-303","Tissues","Cell Junctions",2,3,"Structure-function","Why does the blood-brain barrier depend on tight junctions?","Tight junctions seal the spaces between cells, so substances cannot slip between them into the brain.","cell junctions; tight junction; blood-brain barrier"),
("W1-304","Tissues","Cell Junctions",1,2,"Definition","What is a desmosome?","A plaque-like junction that rivets neighboring cells together to resist pulling forces.","cell junctions; desmosome"),
("W1-305","Tissues","Cell Junctions",2,3,"Structure-function","To which cytoskeletal element does a desmosome anchor, and why does that suit its job?","Intermediate filaments, the tension-resisting fibers, which lets desmosomes hold cells together against pulling forces.","cell junctions; desmosome; intermediate filaments"),
("W1-306","Tissues","Cell Junctions",2,4,"Comparison","Compare a desmosome and a hemidesmosome by what each one anchors.","A desmosome rivets one cell to an adjacent cell; a hemidesmosome anchors a cell to the basement membrane beneath it.","cell junctions; desmosome; hemidesmosome"),
("W1-307","Tissues","Cell Junctions",1,2,"Definition","What is a gap junction?","Protein channels that let ions and small molecules pass directly between neighboring cells for communication.","cell junctions; gap junction"),
("W1-308","Tissues","Cell Junctions",2,3,"Structure-function","What protein forms the channels of a gap junction, and what passes through them?","Connexins form the channels, which pass ions and small molecules between cells.","cell junctions; gap junction; connexins"),
("W1-309","Tissues","Cell Junctions",2,4,"Comparison","Compare tight junctions and gap junctions by function.","Tight junctions seal the space between cells so nothing passes; gap junctions open channels so cells can communicate.","cell junctions; tight junction; gap junction"),
("W1-310","Tissues","Cell Junctions",2,3,"Structure-function","What does an adherens junction do, and to which cytoskeletal element does it attach?","It forms an adhesion belt that helps surfaces resist separation during contraction, attaching to microfilaments.","cell junctions; adherens junction; microfilaments"),
("W1-311","Tissues","Cell Junctions",3,5,"Classification","A junction attaches to intermediate filaments and is abundant in the epidermis and cardiac muscle. Which junction is it?","A desmosome.","cell junctions; desmosome; classification"),
("W1-312","Tissues","Cell Junctions",3,5,"Clinical anatomy","In the skin, which junction keeps the epidermis anchored to the basement membrane so it does not shear away?","The hemidesmosome.","cell junctions; hemidesmosome; clinical"),
("W1-313","Tissues","Cell Junctions",3,6,"Board-style","Cardiac muscle must both stay physically bound and communicate cell to cell. Which two junctions provide each need?","Desmosomes rivet the cells together against pulling forces, and gap junctions let them communicate.","cell junctions; cardiac muscle; desmosome; gap junction"),

# ---------- GLANDULAR EPITHELIUM (314-320) : 2 D1 / 4 D2 / 1 D3 ----------
("W1-314","Tissues","Glandular Epithelium",1,2,"Definition","What is glandular epithelium?","Epithelium specialized to produce and release a secretion, forming the body's glands.","glandular epithelium"),
("W1-315","Tissues","Glandular Epithelium",2,3,"Comparison","Compare exocrine and endocrine glands by whether they have a duct.","Exocrine glands have a duct and secrete onto a surface; endocrine glands are ductless and release hormones into the blood.","glandular epithelium; exocrine; endocrine"),
("W1-316","Tissues","Glandular Epithelium",1,2,"Identification","Name two exocrine glands.","Sweat glands and salivary glands.","glandular epithelium; exocrine"),
("W1-317","Tissues","Glandular Epithelium",2,3,"Classification","A gland releases its product through a duct onto the skin surface. Is it exocrine or endocrine?","Exocrine.","glandular epithelium; exocrine; classification"),
("W1-318","Tissues","Glandular Epithelium",2,3,"Classification","A ductless gland releases its product straight into the bloodstream. Is it exocrine or endocrine?","Endocrine.","glandular epithelium; endocrine; classification"),
("W1-319","Tissues","Glandular Epithelium",2,4,"Structure-function","Why does an endocrine gland not need a duct?","It releases hormones directly into the blood rather than onto a surface, so no duct is required.","glandular epithelium; endocrine"),
("W1-320","Tissues","Glandular Epithelium",3,5,"Board-style","The thyroid has no duct; a salivary gland has one. What does the presence or absence of a duct tell you about where each product goes?","The ducted salivary gland delivers onto a surface (exocrine); the ductless thyroid releases into the blood (endocrine).","glandular epithelium; exocrine; endocrine"),

# ---------- CONNECTIVE TISSUE: general plan (321-334) : 3 D1 / 7 D2 / 4 D3 ----------
("W1-321","Tissues","Connective Tissue",1,2,"Identification","What are the three ingredients found in every connective tissue?","Cells, fibers, and ground substance.","connective tissue; composition"),
("W1-322","Tissues","Connective Tissue",1,2,"Definition","What is the extracellular matrix of a connective tissue?","The fibers and ground substance together, where most of the tissue volume sits.","connective tissue; extracellular matrix"),
("W1-323","Tissues","Connective Tissue",2,4,"Structure-function","Why is connective tissue described as mostly extracellular matrix rather than cells?","Its cells are spread far apart, and fibers plus ground substance make up most of the tissue volume.","connective tissue; extracellular matrix"),
("W1-324","Tissues","Connective Tissue",1,2,"Definition","What is ground substance?","The gel that fills the space between cells and fibers and holds tissue fluid.","connective tissue; ground substance"),
("W1-325","Tissues","Connective Tissue",2,3,"Identification","Which cell builds the fibers and matrix of connective tissue proper?","The fibroblast.","connective tissue; fibroblast"),
("W1-326","Tissues","Connective Tissue Fibers",2,4,"Comparison","Compare the three connective tissue fiber types by their defining property.","Collagen fibers are strong and ropelike, elastic fibers stretch and recoil, and reticular fibers form fine branching networks.","connective tissue; fibers"),
("W1-327","Tissues","Connective Tissue Fibers",1,2,"Identification","Which connective tissue fiber is the most abundant in the body?","Collagen.","connective tissue; collagen"),
("W1-328","Tissues","Connective Tissue Fibers",2,4,"Structure-function","Why do skin and artery walls rely on elastic fibers?","Elastic fibers stretch and then recoil to their original shape, letting these tissues spring back.","connective tissue; elastic fibers"),
("W1-329","Tissues","Connective Tissue Fibers",2,3,"Structure-function","Why are reticular fibers well suited to supporting the spleen and lymph nodes?","They form fine branching networks that create a soft supportive scaffold.","connective tissue; reticular fibers"),
("W1-330","Tissues","Connective Tissue Fibers",2,3,"Comparison","Compare collagen and reticular fibers by structure.","Collagen fibers are thick and ropelike; reticular fibers are fine and branching.","connective tissue; collagen; reticular fibers"),
("W1-331","Tissues","Connective Tissue Fibers",3,5,"Application","Skin that no longer recoils after being stretched has most likely lost which fiber type?","Elastic fibers.","connective tissue; elastic fibers; application"),
("W1-332","Tissues","Connective Tissue Fibers",3,5,"Board-style","A tissue must resist strong straight-line pulling yet still spring back after stretch. Which two fibers combine to do this?","Collagen for tensile strength and elastic fibers for recoil.","connective tissue; collagen; elastic fibers"),
("W1-333","Tissues","Connective Tissue",3,5,"Board-style","A biopsy shows widely spaced cells surrounded by abundant fibers and gel. Which of the four tissue types is this, and how do you know?","Connective tissue, because it is mostly extracellular matrix with cells spread apart.","connective tissue; identification; board"),
("W1-334","Tissues","Connective Tissue",3,6,"Structure-function","Explain how the same three ingredients can build tissues as different as fat and tendon.","By varying the cells, the fiber type and arrangement, and the amount of ground substance, connective tissue can range from soft fat to a strong tendon.","connective tissue; composition; synthesis"),

# ---------- CONNECTIVE TISSUE PROPER + BLOOD (335-347) : 3 D1 / 7 D2 / 3 D3 ----------
("W1-335","Tissues","Connective Tissue Proper",1,2,"Identification","Into what two categories does connective tissue proper divide?","Loose and dense.","connective tissue proper; classification"),
("W1-336","Tissues","Connective Tissue Proper",2,3,"Comparison","Compare areolar and adipose tissue by their main role.","Areolar tissue is soft packing that cushions organs and holds tissue fluid; adipose tissue stores energy, insulates, and cushions.","connective tissue proper; areolar; adipose"),
("W1-337","Tissues","Connective Tissue Proper",1,2,"Definition","What is adipose tissue?","A loose connective tissue of fat that stores energy, insulates, and cushions.","connective tissue proper; adipose"),
("W1-338","Tissues","Connective Tissue Proper",2,3,"Identification","Which loose connective tissue forms the framework of lymph nodes, the spleen, and bone marrow?","Reticular connective tissue.","connective tissue proper; reticular"),
("W1-339","Tissues","Connective Tissue Proper",2,4,"Structure-function","Why is dense regular connective tissue strong in only one direction?","Its collagen fibers run parallel, so it resists pulling only along that single line.","connective tissue proper; dense regular"),
("W1-340","Tissues","Connective Tissue Proper",1,2,"Identification","What two structures are built from dense regular connective tissue?","Tendons and ligaments.","connective tissue proper; dense regular"),
("W1-341","Tissues","Connective Tissue Proper",2,4,"Comparison","Compare dense regular and dense irregular connective tissue by fiber arrangement.","Dense regular has parallel collagen; dense irregular has collagen running in all directions.","connective tissue proper; dense regular; dense irregular"),
("W1-342","Tissues","Connective Tissue Proper",3,5,"Classification","The dermis and organ capsules must resist stress from many directions. Which connective tissue forms them?","Dense irregular connective tissue.","connective tissue proper; dense irregular; classification"),
("W1-343","Tissues","Connective Tissue Proper",2,4,"Identification","Which connective tissue, rich in elastic fibers, forms the walls of large arteries?","Dense elastic connective tissue.","connective tissue proper; dense elastic"),
("W1-344","Tissues","Connective Tissue",2,4,"Classification","Why is blood classified as a connective tissue?","Because it is cells and cell fragments suspended in an extracellular fluid matrix called plasma.","connective tissue; blood"),
("W1-345","Tissues","Connective Tissue",1,2,"Identification","What is the fluid matrix of blood called?","Plasma.","connective tissue; blood; plasma"),
("W1-346","Tissues","Connective Tissue Proper",3,6,"Board-style","A tendon must transmit force in one line, while the dermis must resist tearing from any angle. Which connective tissue fits each?","Dense regular connective tissue for the tendon, dense irregular for the dermis.","connective tissue proper; dense regular; dense irregular; board"),
("W1-347","Tissues","Connective Tissue Proper",3,5,"Application","A ligament is easily overstretched when force is applied across its length rather than along it. Which structural fact explains this?","Its parallel collagen makes dense regular tissue strong only along the fiber direction.","connective tissue proper; dense regular; application"),

# ---------- CARTILAGE (348-357) : 2 D1 / 5 D2 / 3 D3 ----------
("W1-348","Tissues","Cartilage",1,2,"Definition","What is the general function of cartilage?","To provide firm but flexible support and a smooth, low-friction surface for movement.","cartilage; function"),
("W1-349","Tissues","Cartilage",2,3,"Structure-function","Why does cartilage heal slowly?","It is avascular, with no blood vessels to deliver the materials needed for repair.","cartilage; avascular"),
("W1-350","Tissues","Cartilage",1,2,"Identification","Which cartilage is the most common type and has fine collagen in a glassy matrix?","Hyaline cartilage.","cartilage; hyaline"),
("W1-351","Tissues","Cartilage",2,3,"Structure-function","Why is hyaline cartilage well suited to the ends of bones?","Its smooth, glassy matrix provides a low-friction surface for joint movement.","cartilage; hyaline"),
("W1-352","Tissues","Cartilage",1,2,"Identification","Which cartilage forms the external ear and the epiglottis?","Elastic cartilage.","cartilage; elastic cartilage"),
("W1-353","Tissues","Cartilage",2,4,"Comparison","Compare hyaline and elastic cartilage by the fibers in their matrix.","Hyaline cartilage has fine collagen and a glassy matrix; elastic cartilage is packed with elastic fibers.","cartilage; hyaline; elastic cartilage"),
("W1-354","Tissues","Cartilage",2,3,"Identification","Which cartilage is tough and shock-absorbing, built from thick collagen bundles?","Fibrocartilage.","cartilage; fibrocartilage"),
("W1-355","Tissues","Cartilage",3,5,"Classification","The intervertebral discs and the knee menisci absorb heavy shock. Which cartilage forms them?","Fibrocartilage.","cartilage; fibrocartilage; classification"),
("W1-356","Tissues","Cartilage",2,4,"Comparison","Compare elastic cartilage and fibrocartilage by their defining fiber.","Elastic cartilage is dominated by elastic fibers; fibrocartilage is dominated by thick collagen bundles.","cartilage; elastic cartilage; fibrocartilage"),
("W1-357","Tissues","Cartilage",3,6,"Board-style","A torn knee meniscus barely repairs itself. Which single property of cartilage best explains this?","Cartilage is avascular, so it heals slowly.","cartilage; avascular; clinical; board"),

# ---------- BONE (358-366) : 2 D1 / 5 D2 / 2 D3 ----------
("W1-358","Tissues","Bone",1,2,"Identification","List the functions of bone tissue.","It supports the body, protects organs, provides levers for movement, and stores minerals.","bone; function"),
("W1-359","Tissues","Bone",2,4,"Comparison","Compare bone and cartilage by blood supply and healing.","Bone is well vascularized and heals well; cartilage is avascular and heals slowly.","bone; cartilage; vascularity"),
("W1-360","Tissues","Bone",1,2,"Definition","What is compact bone?","The dense outer layer of bone, built around repeating units called osteons.","bone; compact bone"),
("W1-361","Tissues","Bone",2,3,"Identification","What are the repeating structural units of compact bone called?","Osteons.","bone; compact bone; osteon"),
("W1-362","Tissues","Bone",2,3,"Definition","What is spongy bone?","An open lattice of trabeculae that is lighter than compact bone and houses bone marrow.","bone; spongy bone"),
("W1-363","Tissues","Bone",2,4,"Comparison","Compare compact and spongy bone by structure.","Compact bone is dense and built of osteons; spongy bone is an open lattice of trabeculae.","bone; compact bone; spongy bone"),
("W1-364","Tissues","Bone",2,4,"Structure-function","Why does compact bone suit the outer surface of a bone?","Its dense osteon structure resists stress and gives the bone surface its strength.","bone; compact bone"),
("W1-365","Tissues","Bone",3,5,"Structure-function","Why does spongy bone lighten the skeleton without leaving it weak?","Its open trabecular lattice uses less solid material while still bracing the bone along lines of stress.","bone; spongy bone"),
("W1-366","Tissues","Bone",3,5,"Classification","A region of bone is an open lattice of trabeculae that cradles marrow. Which bone tissue is it?","Spongy bone.","bone; spongy bone; classification"),

# ---------- MUSCLE TISSUE (367-378) : 2 D1 / 7 D2 / 3 D3 ----------
("W1-367","Tissues","Muscle Tissue",1,2,"Identification","Name the three types of muscle tissue.","Skeletal, cardiac, and smooth muscle.","muscle tissue; types"),
("W1-368","Tissues","Muscle Tissue",2,3,"Identification","How are skeletal muscle cells described structurally?","As long cylindrical cells with many nuclei.","muscle tissue; skeletal muscle"),
("W1-369","Tissues","Muscle Tissue",2,4,"Comparison","Compare skeletal and smooth muscle by striations and control.","Skeletal muscle is striated and voluntary; smooth muscle is non-striated and involuntary.","muscle tissue; skeletal muscle; smooth muscle"),
("W1-370","Tissues","Muscle Tissue",1,2,"Identification","Which muscle type has branching cells joined by intercalated discs?","Cardiac muscle.","muscle tissue; cardiac muscle; intercalated discs"),
("W1-371","Tissues","Muscle Tissue",2,3,"Comparison","Compare cardiac and smooth muscle by striations.","Cardiac muscle is striated; smooth muscle has no striations.","muscle tissue; cardiac muscle; smooth muscle"),
("W1-372","Tissues","Muscle Tissue",2,3,"Identification","How are smooth muscle cells described structurally?","As spindle-shaped cells with a single nucleus.","muscle tissue; smooth muscle"),
("W1-373","Tissues","Muscle Tissue",2,4,"Structure-function","Cardiac muscle is described as branching cells joined by intercalated discs. Why does that structure fit the heart?","The branches and intercalated discs bind the cells so the heart wall works as one connected unit.","muscle tissue; cardiac muscle; intercalated discs"),
("W1-374","Tissues","Muscle Tissue",2,3,"Spatial reasoning","The walls of hollow organs such as the intestine are lined with which muscle type?","Smooth muscle.","muscle tissue; smooth muscle; spatial"),
("W1-375","Tissues","Muscle Tissue",3,5,"Classification","A muscle is striated, voluntary, and attached to bone. Which type is it?","Skeletal muscle.","muscle tissue; skeletal muscle; classification"),
("W1-376","Tissues","Muscle Tissue",3,5,"Classification","A muscle in a blood vessel wall is non-striated and involuntary with spindle-shaped, single-nucleus cells. Which type is it?","Smooth muscle.","muscle tissue; smooth muscle; classification"),
("W1-377","Tissues","Muscle Tissue",3,6,"Board-style","Two muscle types are striated. How do control and location tell them apart?","Skeletal muscle is voluntary and attached to bone; cardiac muscle is involuntary and found only in the heart wall.","muscle tissue; skeletal muscle; cardiac muscle; board"),
("W1-378","Tissues","Muscle Tissue",2,4,"Comparison","Compare the number of nuclei in skeletal, cardiac, and smooth muscle cells.","Skeletal cells have many nuclei; smooth cells have one; cardiac cells characteristically have one or two.","muscle tissue; nuclei; comparison"),

# ---------- NERVOUS TISSUE (379-384) : 1 D1 / 3 D2 / 2 D3 ----------
("W1-379","Tissues","Nervous Tissue",1,2,"Identification","What are the two cell types of nervous tissue?","Neurons and neuroglia.","nervous tissue; neurons; neuroglia"),
("W1-380","Tissues","Nervous Tissue",2,3,"Comparison","Compare neurons and neuroglia by role.","Neurons are the signaling cells that carry electrical impulses; neuroglia are supporting cells that protect and assist neurons.","nervous tissue; neurons; neuroglia"),
("W1-381","Tissues","Nervous Tissue",2,3,"Identification","Which nervous tissue cell carries the electrical impulses?","The neuron.","nervous tissue; neurons"),
("W1-382","Tissues","Nervous Tissue",2,4,"Structure-function","Neuroglia are named as supporting cells. What does that tell you neurons are free to specialize in?","Carrying and processing signals, while neuroglia handle protection and support.","nervous tissue; neurons; neuroglia"),
("W1-383","Tissues","Nervous Tissue",3,5,"Board-style","A slide of brain tissue shows large signaling cells surrounded by many smaller helper cells. Name each population.","The large signaling cells are neurons; the smaller helper cells are neuroglia.","nervous tissue; neurons; neuroglia; board"),
("W1-384","Tissues","Nervous Tissue",3,5,"Application","If a disease selectively destroyed neuroglia, which cells would lose their support and protection?","The neurons.","nervous tissue; neuroglia; application"),

# ---------- BODY MEMBRANES (385-393) : 1 D1 / 5 D2 / 3 D3 ----------
("W1-385","Tissues","Body Membranes",1,2,"Definition","What is a body membrane?","A thin sheet that combines an epithelium with an underlying connective tissue.","body membranes; definition"),
("W1-386","Tissues","Body Membranes",2,3,"Identification","Which body membrane has no epithelium?","The synovial membrane.","body membranes; synovial membrane"),
("W1-387","Tissues","Body Membranes",2,3,"Definition","What is the cutaneous membrane?","The skin: a keratinized epithelium over dense connective tissue, forming a dry membrane.","body membranes; cutaneous membrane"),
("W1-388","Tissues","Body Membranes",2,4,"Comparison","Compare cutaneous and mucous membranes by moisture and location.","The cutaneous membrane is dry and covers the body surface; mucous membranes are moist and line cavities open to the outside.","body membranes; cutaneous membrane; mucous membrane"),
("W1-389","Tissues","Body Membranes",2,3,"Identification","What kind of cavity does a mucous membrane line?","Cavities that open to the outside, such as the digestive and respiratory tracts.","body membranes; mucous membrane"),
("W1-390","Tissues","Body Membranes",2,4,"Structure-function","Why is the synovial membrane different from every other body membrane?","It is built of connective tissue only, with no epithelium, and it secretes lubricating fluid into joints.","body membranes; synovial membrane"),
("W1-391","Tissues","Body Membranes",3,5,"Classification","A membrane lines the closed ventral cavities and is a simple squamous epithelium over thin connective tissue. Which membrane is it?","A serous membrane.","body membranes; serous membrane; classification"),
("W1-392","Tissues","Body Membranes",3,5,"Comparison","Compare serous and mucous membranes by the cavities they line.","Serous membranes line closed ventral cavities; mucous membranes line cavities that open to the outside.","body membranes; serous membrane; mucous membrane"),
("W1-393","Tissues","Body Membranes",3,6,"Board-style","A joint cavity needs a lubricated, low-friction lining but no barrier epithelium. Which membrane fits, and why?","The synovial membrane, because it is connective tissue only and secretes lubricating fluid.","body membranes; synovial membrane; board"),

# ---------- TISSUE INTEGRATION / CLINICAL (394-400) : 1 D1 / 1 D2 / 5 D3 ----------
("W1-394","Tissues","Tissue Clinical",1,2,"Identification","From which tissue type do most cancers, called carcinomas, arise?","Epithelium.","tissue clinical; carcinoma; epithelium"),
("W1-395","Tissues","Tissue Clinical",2,4,"Structure-function","Why do carcinomas arise most often from epithelium?","Epithelium divides and turns over constantly, and rapidly dividing tissue is where carcinomas develop.","tissue clinical; carcinoma; epithelium"),
("W1-396","Tissues","Tissue Clinical",3,6,"Comparison","Why does a small skin cut hurt and heal quickly, while a torn meniscus does neither?","Epithelium has a rich nerve supply and dividing cells, so it hurts and heals fast; cartilage is avascular, so it barely repairs.","tissue clinical; epithelium; cartilage; comparison"),
("W1-397","Tissues","Tissue Clinical",3,5,"Application","A tendon tears when a joint is twisted rather than pulled straight. Which tissue property explains this?","Dense regular connective tissue is strong only along its parallel collagen, so off-axis force tears it.","tissue clinical; dense regular; application"),
("W1-398","Tissues","Tissue Clinical",3,4,"Common misconception","A student says connective tissue is mostly cells packed tightly together. Why is that wrong?","Connective tissue is mostly extracellular matrix, fibers and ground substance, with the cells spread far apart.","tissue clinical; connective tissue; misconception"),
("W1-399","Tissues","Tissue Clinical",3,6,"Tracing","Trace how the wall of the gut can contain all four tissue types.","Epithelium lines the inner surface, connective tissue supports it beneath, smooth muscle in the wall moves the contents, and nervous tissue controls that movement.","tissue clinical; four tissue types; synthesis"),
("W1-400","Tissues","Tissue Clinical",3,7,"Board-style","A slide shows tightly packed cells with a free apical surface resting on a basement membrane and little matrix between them. Which tissue type is it, and what job can you predict?","Epithelial tissue; it covers or lines a surface, so it likely serves protection, absorption, or secretion.","tissue clinical; epithelium; identification; board"),
]

# --- integrity checks ---
assert len(cards) == 100, f"expected 100 cards, got {len(cards)}"
ids = [c[0] for c in cards]
assert ids == [f"W1-{n}" for n in range(301,401)], "IDs must be W1-301..W1-400 in order"
assert len(set(ids)) == 100, "duplicate IDs"
qs = [c[6].strip().lower() for c in cards]
assert len(set(qs)) == 100, "duplicate questions"

# no more than 3 of the same qtype in a row
run_type, run_len = None, 0
for c in cards:
    t = c[5]
    run_len = run_len + 1 if t == run_type else 1
    run_type = t
    assert run_len <= 3, f"too many {t} in a row at {c[0]}"

dok_counts = collections.Counter(c[3] for c in cards)
print("DOK distribution:", dict(sorted(dok_counts.items())))
print("Style variety:", len(set(c[5] for c in cards)), "distinct card types")

OUT = os.path.dirname(os.path.abspath(__file__))

# --- CSV (8-column schema, matches cards 1-300) ---
csv_path = os.path.join(OUT, "Week1_Spaced_Recall_Cards_301-400_FULL.csv")
with open(csv_path, "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["ID","Module","Topic","DOK","Difficulty","Question","Answer","Tags"])
    for cid, mod, topic, dok, diff, qtype, q, a, tags in cards:
        w.writerow([cid, mod, topic, dok, diff, q, a, tags])
print("Wrote", csv_path)

# --- HTML study viewer ---
topics = []
for c in cards:
    if c[2] not in topics:
        topics.append(c[2])

def esc(s): return html.escape(str(s), quote=True)

card_html = []
for cid, mod, topic, dok, diff, qtype, q, a, tags in cards:
    card_html.append(f'''      <article class="card" data-topic="{esc(topic)}" data-dok="{dok}" tabindex="0" aria-label="Card {esc(cid)}">
        <header class="card-head">
          <span class="cid">{esc(cid)}</span>
          <span class="chips">
            <span class="chip chip-topic">{esc(topic)}</span>
            <span class="chip chip-type">{esc(qtype)}</span>
            <span class="chip chip-dok">DOK {dok}</span>
            <span class="chip chip-diff" title="Difficulty 1-10">Diff {diff}</span>
          </span>
        </header>
        <p class="q">{esc(q)}</p>
        <details>
          <summary>Show answer</summary>
          <p class="a">{esc(a)}</p>
        </details>
        <p class="tags">{esc(tags)}</p>
      </article>''')
cards_joined = "\n".join(card_html)

topic_options = "\n".join(f'          <option value="{esc(t)}">{esc(t)}</option>' for t in topics)
d1 = dok_counts[1]; d2 = dok_counts[2]; d3 = dok_counts[3]

html_doc = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>BIO 004 Week 1 Spaced Recall, Cards 301 to 400</title>
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
  header.page h1 {{ font-weight:800; font-size:clamp(1.5rem,3.4vw,2.2rem); color:var(--navy); margin:0 0 .25rem; }}
  header.page .subhead {{ font-weight:600; color:var(--terra-dark); font-size:clamp(1rem,2vw,1.25rem); margin:0 0 .4rem; }}
  header.page .usage {{ font-family:"Lora",Georgia,serif; font-style:italic; color:var(--navy); margin:.2rem 0 0; }}
  .meta {{ display:flex; flex-wrap:wrap; gap:.5rem; margin:1rem 0 0; font-family:"DM Sans",sans-serif; font-weight:500; }}
  .stat {{ background:var(--white); border:1px solid var(--navy-tint); border-radius:8px; padding:.4rem .7rem; font-size:.85rem; box-shadow:var(--rest-shadow); }}
  .stat b {{ color:var(--terra-dark); }}
  .controls {{ display:flex; flex-wrap:wrap; gap:1rem; align-items:flex-end; margin:1.5rem 0 .5rem;
    background:var(--white); border:1px solid var(--navy-tint); border-radius:10px; padding:1rem; box-shadow:var(--rest-shadow); }}
  .field {{ display:flex; flex-direction:column; gap:.3rem; }}
  .field label {{ font-family:"DM Sans",sans-serif; font-weight:700; font-size:12px; text-transform:uppercase; letter-spacing:.06em; color:var(--terra-dark); }}
  select {{ font:inherit; padding:.5rem .6rem; border:1px solid var(--navy); border-radius:8px; background:var(--white); color:var(--navy); min-width:190px; }}
  .count {{ font-family:"DM Sans",sans-serif; font-weight:500; color:var(--navy); font-size:.9rem; }}
  #cards {{ display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:1rem; margin-top:1rem; }}
  .card {{ background:var(--white); border:1px solid var(--navy-tint); border-radius:12px; padding:1rem 1.1rem;
    box-shadow:var(--rest-shadow); transition:transform 200ms ease, box-shadow 200ms ease; display:flex; flex-direction:column; gap:.55rem; }}
  .card:hover, .card:focus-within {{ transform:translateY(-2px); box-shadow:var(--hover-shadow); }}
  .card:focus {{ outline:3px solid var(--gold); outline-offset:2px; }}
  .card-head {{ display:flex; justify-content:space-between; align-items:flex-start; gap:.5rem; flex-wrap:wrap; }}
  .cid {{ font-family:"DM Sans",sans-serif; font-weight:700; color:var(--navy); font-size:.85rem; }}
  .chips {{ display:flex; flex-wrap:wrap; gap:.3rem; }}
  .chip {{ font-family:"DM Sans",sans-serif; font-weight:700; font-size:11px; letter-spacing:.03em;
    padding:.15rem .5rem; border-radius:999px; border:1px solid var(--navy); color:var(--navy); }}
  .chip-topic {{ border-color:var(--terra); color:var(--terra-dark); }}
  .chip-type {{ border-color:var(--navy-tint); color:var(--navy); background:var(--navy-tint); }}
  .chip-dok {{ border-color:var(--gold); color:var(--terra-dark); }}
  .chip-diff {{ border-color:var(--navy); color:var(--navy); }}
  .q {{ font-weight:700; font-size:1.02rem; margin:.15rem 0 0; }}
  details {{ border-top:1px solid var(--navy-tint); padding-top:.5rem; }}
  summary {{ cursor:pointer; font-family:"DM Sans",sans-serif; font-weight:700; color:var(--gold); font-size:.9rem; }}
  summary:focus-visible {{ outline:3px solid var(--gold); outline-offset:2px; }}
  .a {{ margin:.5rem 0 0; }}
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
    <p class="subhead">Week 1 &middot; Tissues &middot; Cards 301 to 400 (Batch 4)</p>
    <p class="usage">Read the question, answer aloud or in writing, then reveal the answer to check yourself. Filter by topic or Depth of Knowledge to target a weak area.</p>
    <div class="meta" aria-label="Batch summary">
      <span class="stat"><b>100</b> cards (W1-301 to W1-400)</span>
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
    <p><b>BIO 004 Human Anatomy</b> &middot; Week 1 Spaced Recall, Batch 4 &middot; Dr. Sharilyn Rennie</p>
    <p>Schema matches the course database: ID, Module, Topic, DOK, Difficulty, Question, Answer, Tags. Continues directly from cards 1 to 300; no card is repeated.</p>
  </footer>
</div>

<script>
  (function () {{
    var topicSel = document.getElementById('topic');
    var dokSel = document.getElementById('dok');
    var count = document.getElementById('count');
    var cards = Array.prototype.slice.call(document.querySelectorAll('.card'));
    function apply() {{
      var t = topicSel.value, d = dokSel.value, shown = 0;
      cards.forEach(function (c) {{
        var ok = (t === 'all' || c.dataset.topic === t) && (d === 'all' || c.dataset.dok === d);
        c.style.display = ok ? '' : 'none';
        if (ok) shown++;
      }});
      count.textContent = 'Showing ' + shown + ' of ' + cards.length + ' cards';
    }}
    topicSel.addEventListener('change', apply);
    dokSel.addEventListener('change', apply);
  }})();

  /* iframe height-sender for Kajabi / GitHub Pages embeds */
  (function () {{
    function sendHeight() {{
      var h = document.documentElement.scrollHeight;
      parent.postMessage({{ id: 'bio004-week1-batch4', height: h }}, '*');
    }}
    window.addEventListener('load', sendHeight);
    window.addEventListener('resize', sendHeight);
    if (window.ResizeObserver) {{ new ResizeObserver(sendHeight).observe(document.body); }}
  }})();
</script>
</body>
</html>'''

html_path = os.path.join(OUT, "Week1_Spaced_Recall_Cards_301-400.html")
with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_doc)
print("Wrote", html_path)
print("All checks passed.")
