/* ============================================================
   BIO 004 LOOK-ALIKES, the content
   ------------------------------------------------------------
   The one place the nineteen pairs are written down. Three files
   read this and none of them carry their own copy:

     histology-look-alikes.html        the student activity
     slides-histology-look-alikes.html the deck you project
     live-poll.html                    the standalone poll

   Edit a pair here and all three follow. This is the same move
   as schedule-fall2026.js: one file, no drift.

   PER OPTION
     t      the full wording, used on the activity page
     short  a projector-length version, used on slides and in the
            poll. Falls back to t when it is not set.
     ok     true on the one option that decides the pair
     fail   why a wrong option fails, which is what students have
            to name in step 2
              shared  true of both, and the very feature that
                      makes the two look alike
              broad   true of a much wider group, so it does not
                      even get you to this pair
              field   true, but not visible in the field in front
                      of you
     note   what is shown once the option is chosen

   AUTHOR THE CORRECT OPTION FIRST in each list. SPREAD moves it
   into a different slot on screen, so the answer is not always in
   position one. Do not shuffle by hand here.
   ============================================================ */

(function(){
  'use strict';

  var PAIRS = [

  /* ---------- EPITHELIUM ---------- */
  { group:'Epithelium',
    a:'Pseudostratified ciliated columnar', b:'Stratified columnar',
    why:'Both look layered, because in both of them the nuclei sit at more than one level.',
    options:[
      { t:'Every cell reaches the basement membrane, even the ones whose nuclei sit high up.', ok:true,
        note:'That is the definition of pseudostratified, and it is the only feature here that separates the two. In stratified columnar, only the deepest layer touches the basement membrane. Free tell for this course: pseudostratified almost always arrives with cilia and goblet cells, because you are looking at airway.' },
      { t:'The nuclei sit at several different levels.', ok:false, fail:'shared',
        note:'True of both, and it is the exact reason students call pseudostratified layered when it is not. This is the confusion itself, so it can never be the way out of it.' },
      { t:'It lines a tube and has a free apical surface.', ok:false, fail:'broad',
        note:'True of both and of most epithelium you will meet all term, so it does not even narrow you down to this pair.' },
      { t:'It sits on a basement membrane.', ok:false, fail:'broad',
        note:'True of all epithelium without exception. A feature shared by an entire tissue class can never decide anything inside that class.' }
    ]},

  { group:'Epithelium',
    a:'Simple cuboidal', b:'Simple columnar',
    why:'One layer each, same organs, and a tangential cut can make either one look like the other.',
    options:[
      { t:'Height against width, read with the nucleus: cuboidal is about as tall as it is wide with a round central nucleus, columnar is clearly taller than wide with an oval nucleus in the basal third.', short:'Height against width, read with the nucleus.', ok:true,
        note:'Use the nucleus, not the cell outline. Outlines blur in a poor section, and the shape and position of the nucleus survive it far better.' },
      { t:'There is a single layer of cells.', ok:false, fail:'shared',
        note:'True of both, and it is the word simple doing that work rather than your eyes. It is what puts these two in the same bucket.' },
      { t:'The cells are alive and have visible nuclei.', ok:false, fail:'broad',
        note:'True of very nearly everything on the slide, so it carries no information at all.' },
      { t:'It forms the lining of a duct or a tubule.', ok:false, fail:'shared',
        note:'True of both. Location narrows the field before you look, it does not decide the call once you are looking.' }
    ]},

  { group:'Epithelium',
    a:'Transitional (urothelium)', b:'Stratified squamous, non-keratinized',
    why:'Both are thick and multilayered, and at low power the two read almost the same.',
    options:[
      { t:'The surface cells are large and dome shaped and bulge into the lumen, and some carry two nuclei.', short:'Large dome-shaped umbrella cells at the surface.', ok:true,
        note:'Those are the umbrella cells, and nothing else in your set has them. Stratified squamous does the opposite: its cells get flatter and flatter toward the surface.' },
      { t:'There are many layers of cells.', ok:false, fail:'shared',
        note:'True of both. This is the shared feature that creates the problem in the first place.' },
      { t:'The deepest layer of cells is roughly cuboidal.', ok:false, fail:'shared',
        note:'True of both, and the basal layer is the hardest part of the slide to read anyway.' },
      { t:'It can stretch.', ok:false, fail:'field',
        note:'True of transitional, and you cannot see it. A slide is a fixed moment, so anything the tissue does over time is invisible to you at the scope.' }
    ]},

  { group:'Epithelium',
    a:'Stratified squamous, keratinized', b:'Stratified squamous, non-keratinized',
    why:'Same tissue, same layers, same everything until you get to the top.',
    options:[
      { t:'The surface layer has no nuclei in it.', ok:true,
        note:'Keratinized means the surface cells died and left the keratin behind, so the top band stains solid and empty. If you can still count nuclei at the surface, it is non-keratinized. One of the cleanest calls in the whole set, so bank it.' },
      { t:'The cells flatten as they approach the surface.', ok:false, fail:'shared',
        note:'True of both. That flattening is what makes it stratified squamous, not what makes it keratinized.' },
      { t:'It sits on a connective tissue layer underneath.', ok:false, fail:'broad',
        note:'True of both and of every epithelium in the course.' },
      { t:'It is thick.', ok:false, fail:'shared',
        note:'True of both, and thickness varies enough by body site that it will actively mislead you.' }
    ]},

  { group:'Epithelium',
    a:'Simple squamous', b:'Adipose',
    why:'At high power, the rim of a fat cell with its squashed nucleus looks exactly like a flat squamous cell. This one catches people every year.',
    options:[
      { t:'What is on the other side: squamous is one layer of flat cells with tissue on one side and open space on the other, adipose is a whole field of large empty cells packed against each other.', short:'What is on the other side: one lining layer, or a whole packed field.', ok:true,
        note:'The fix is to zoom out. At high power the two are genuinely similar. At low power a squamous lining is a line and adipose is a honeycomb, and you will never confuse them again.' },
      { t:'The nuclei are flattened and pushed to one edge of the cell.', ok:false, fail:'shared',
        note:'True of both, and it is the reason for the confusion rather than the way out of it.' },
      { t:'The cytoplasm looks thin and pale.', ok:false, fail:'shared',
        note:'True of both, for two completely different reasons, which is what makes it so convincing.' },
      { t:'It is found throughout the body.', ok:false, fail:'field',
        note:'True of both, and it is a fact about the body rather than about the field in front of you. Nothing in this square of glass changes based on it.' }
    ]},

  { group:'Epithelium',
    a:'Endothelium', b:'Mesothelium',
    why:'This one is not a look-alike, it is a naming trap, and it costs points on written questions rather than at the scope.',
    options:[
      { t:'Neither is a separate tissue. Both are simple squamous epithelium, named for where it sits: endothelium lines vessels and the heart, mesothelium lines serous membranes.', short:'Neither is a separate tissue. Both are simple squamous, named for where they sit.', ok:true,
        note:'Say the tissue first and the location second and this never costs you anything. On a practical, if the pointer is on a vessel lining, simple squamous and endothelium are the same answer, so read what the question is asking for.' },
      { t:'Both are made of flat cells.', ok:false, fail:'shared',
        note:'True, and it is the same fact stated twice, because they are the same tissue. Every feature of one is a shared feature.' },
      { t:'Both sit on a basement membrane.', ok:false, fail:'shared',
        note:'True, and shared for the same reason. When two names describe one tissue, no visible feature can ever separate them.' },
      { t:'Both are hard to see at low power.', ok:false, fail:'shared',
        note:'True and shared. Notice that in this pair every single distractor is shared, which is the tell that you are not looking at two things at all.' }
    ]},

  /* ---------- CONNECTIVE TISSUE ---------- */
  { group:'Connective tissue',
    a:'Dense regular', b:'Dense irregular',
    why:'Same fiber, same cell, same density. Students learn dense and stop there.',
    options:[
      { t:'Fiber direction in one field: regular runs as parallel bundles all going one way, irregular runs in several directions at once with some bundles cut across.', short:'Fiber direction in one field: one way, or several at once.', ok:true,
        note:'Look at the whole field, not one corner. Irregular gives itself away with the bundles cut in cross section, which show up as pale swirls among the long ones.' },
      { t:'Collagen bundles fill most of the field.', ok:false, fail:'shared',
        note:'True of both, and it is the word dense doing the work.' },
      { t:'Fibroblast nuclei are flattened between the bundles.', ok:false, fail:'shared',
        note:'True of both. It is a good feature for telling dense connective tissue from something else, just not for telling these two apart.' },
      { t:'It resists pulling force.', ok:false, fail:'field',
        note:'True of both, and not visible. What a tissue does under load is not in the picture.' }
    ]},

  { group:'Connective tissue',
    a:'Smooth muscle', b:'Dense regular connective tissue',
    why:'Both are pink, both run in long parallel bundles, and both have elongated nuclei lying along the grain.',
    options:[
      { t:'Where the nucleus sits relative to the pink: in smooth muscle the nucleus sits inside its own cell, cigar shaped and centered in its own block of cytoplasm. In dense regular the flattened nuclei are squeezed between the collagen bundles, never inside them.', short:'The nucleus sits inside its own cell, not squeezed between the bundles.', ok:true,
        note:'The follow-up that seals it: smooth muscle cells sit shoulder to shoulder with nothing running between them. Cut across, smooth muscle becomes a field of round profiles where only some contain a nucleus, because you only catch the nucleus when you cut through the middle of the spindle.' },
      { t:'The nuclei are elongated and lie parallel to the long axis.', ok:false, fail:'shared',
        note:'True of both, and it is exactly why this pair is on the list. Shared features are the ones that feel most like answers.' },
      { t:'The tissue stains pink in a routine stain.', ok:false, fail:'broad',
        note:'True of both and of a great deal else on the slide. Stain colour alone almost never decides anything.' },
      { t:'The structures run in the same direction across the field.', ok:false, fail:'shared',
        note:'True of both. Direction separates dense regular from dense irregular, not from muscle.' }
    ]},

  { group:'Connective tissue',
    a:'Fibrocartilage', b:'Dense regular connective tissue',
    why:'Both show heavy parallel collagen with cells lined up in rows between the bundles. This is the pair that decides who studied.',
    options:[
      { t:'The cells sit in lacunae, a clear space carved out of the matrix around each cell.', ok:true,
        note:'Cartilage cells live in a hole. Fibroblasts do not, they are pressed flat directly against the collagen with no space around them. Once you look for the space instead of the cell, this pair stops being hard.' },
      { t:'Thick collagen bundles run through the field.', ok:false, fail:'shared',
        note:'True of both. It is the shared feature that creates the problem.' },
      { t:'The cells are arranged in rows.', ok:false, fail:'shared',
        note:'True of both, and the rows in fibrocartilage are the reason it gets called tendon.' },
      { t:'It is found where tissue takes compression and tension together.', ok:false, fail:'field',
        note:'True, and it is a fact about mechanics rather than about the field. You cannot read load off a slide.' }
    ]},

  { group:'Connective tissue',
    a:'Areolar (loose)', b:'Reticular',
    why:'Both are loose, both are packed with wandering cells, and both turn up as the background of an organ rather than as the point of the slide.',
    options:[
      { t:'What you can see between the cells: areolar shows discrete collagen and elastic fibers wandering in all directions through open space, reticular shows almost no fibers in a routine stain and reads as a crowd of dark nuclei.', short:'Whether you can see discrete fibers between the cells.', ok:true,
        note:'Reticular fibers are thin and only show properly with a silver stain, so in a routine section you identify reticular by the company it keeps: lymph node, spleen, red marrow. If the field is a sea of small dark nuclei with no fiber structure, that is your answer.' },
      { t:'The tissue is loosely packed with visible open space.', ok:false, fail:'shared',
        note:'True of both. It is why they share the loose label.' },
      { t:'There are several different cell types present.', ok:false, fail:'shared',
        note:'True of both, and counting cell types at the scope is slower than any practical allows.' },
      { t:'It supports and cushions the structures around it.', ok:false, fail:'field',
        note:'True of both, and not visible. A job description is not a feature.' }
    ]},

  { group:'Connective tissue',
    a:'Elastic connective tissue', b:'Dense regular connective tissue',
    why:'Both are fiber-dominated and both run in one direction, so the low-power picture is nearly the same.',
    options:[
      { t:'How the fibers behave: elastin fibers are dark, thin, wavy and they branch and rejoin. Collagen bundles are pink, thick, gently wavy and they never branch.', short:'Elastin branches and rejoins. Collagen never branches.', ok:true,
        note:'Branching is the giveaway. Follow one fiber across the field and see whether it splits. In an elastic artery wall the elastin also forms whole wavy sheets, which nothing made of collagen ever does.' },
      { t:'The fibers run mostly in one direction.', ok:false, fail:'shared',
        note:'True of both, and it is why neither of them reads as irregular.' },
      { t:'Fibroblasts are present between the fibers.', ok:false, fail:'broad',
        note:'True of both and of nearly every connective tissue in the course.' },
      { t:'The tissue stretches and recoils.', ok:false, fail:'field',
        note:'True of elastic tissue, and invisible. Students say it out loud for both anyway, which is how it earns its place here.' }
    ]},

  /* ---------- CARTILAGE AND BONE ---------- */
  { group:'Cartilage and bone',
    a:'Hyaline cartilage', b:'Fibrocartilage',
    why:'Same cells, same lacunae, same matrix chemistry. The difference is what you can see in the matrix.',
    options:[
      { t:'Whether you can see fibers in the matrix at all: hyaline matrix is smooth and glassy with nothing running through it, fibrocartilage has obvious collagen bundles crossing the field.', short:'Whether you can see fibers in the matrix at all.', ok:true,
        note:'Second tell if the section is poor: hyaline has a perichondrium wrapped around it and fibrocartilage has none. Your structure list already calls that out, so it is fair game on the practical.' },
      { t:'The cells sit in lacunae.', ok:false, fail:'broad',
        note:'True of both and of elastic cartilage as well. Lacunae tell you cartilage, which you already knew, and nothing more.' },
      { t:'The cells are chondrocytes.', ok:false, fail:'broad',
        note:'True of all three cartilages, so it lands you in the group rather than on the answer.' },
      { t:'It is avascular.', ok:false, fail:'field',
        note:'True of all cartilage, and not something you read off the slide.' }
    ]},

  { group:'Cartilage and bone',
    a:'Hyaline cartilage', b:'Elastic cartilage',
    why:'Elastic cartilage is hyaline with something added, so a thin or pale section can hide the difference completely.',
    options:[
      { t:'Dark branching elastin threads running through the matrix between the lacunae.', ok:true,
        note:'That is the elastin, and it is the only structural difference. A supporting tell: elastic cartilage packs its chondrocytes more densely, so there is less clear matrix between them. Location backs it up, ear and epiglottis.' },
      { t:'There is a perichondrium around the outside.', ok:false, fail:'shared',
        note:'True of both. This one separates them from fibrocartilage, not from each other.' },
      { t:'Chondrocytes sit in lacunae, sometimes in pairs.', ok:false, fail:'broad',
        note:'True of all cartilage.' },
      { t:'It holds a shape while staying flexible.', ok:false, fail:'field',
        note:'True of both, and it describes behaviour rather than anything in the picture.' }
    ]},

  { group:'Cartilage and bone',
    a:'Compact bone', b:'Cartilage',
    why:'Both are cells sitting in lacunae inside a solid matrix, which is enough for a fast reader to call the wrong one.',
    options:[
      { t:'Rings and a canal: compact bone is built as concentric lamellae around a central canal, with fine canaliculi joining the lacunae. Cartilage has no canals and no rings.', short:'Rings and a canal.', ok:true,
        note:'Look for the bullseye. If you can find one central canal with rings around it, you are done. Cartilage instead often shows lacunae holding two or four cells together, which bone never does.' },
      { t:'The cells sit in lacunae.', ok:false, fail:'shared',
        note:'True of both, and it is the single fact that causes this mix-up.' },
      { t:'The matrix is solid rather than fluid.', ok:false, fail:'shared',
        note:'True of both, and it is what makes them both supporting tissues.' },
      { t:'It is a supporting connective tissue.', ok:false, fail:'field',
        note:'True of both, and it is a classification rather than an observation. Nothing in the eyepiece tells you a category name.' }
    ]},

  /* ---------- MUSCLE ---------- */
  { group:'Muscle',
    a:'Skeletal muscle', b:'Cardiac muscle',
    why:'Both are striated, and the striations are the first thing you see, so both get called skeletal.',
    options:[
      { t:'Branching fibers meeting at dark transverse lines, the intercalated discs.', ok:true,
        note:'Skeletal fibers run long, straight and separate, and they never branch or join. Nucleus count backs it up: skeletal carries many nuclei pushed to the edge of the fiber, cardiac carries one or two sitting in the center.' },
      { t:'The fibers are striated across their width.', ok:false, fail:'shared',
        note:'True of both, and it is the shared feature that starts the trouble.' },
      { t:'The cytoplasm stains strongly pink.', ok:false, fail:'broad',
        note:'True of both and of smooth muscle as well.' },
      { t:'It contracts.', ok:false, fail:'field',
        note:'True of all three muscle types, and invisible on a fixed slide.' }
    ]},

  { group:'Muscle',
    a:'Cardiac muscle', b:'Smooth muscle',
    why:'Both put a single nucleus in the middle of the cell, which is the feature students reach for first.',
    options:[
      { t:'Striations. Cardiac has them, smooth does not.', ok:true,
        note:'Central nucleus is the shared feature, so it can never be your discriminator here. Go to the striations first and the nucleus second, and add intercalated discs as your confirmation.' },
      { t:'The nucleus sits centrally in the cell.', ok:false, fail:'shared',
        note:'True of both, which is precisely the trap, and it is the first thing most students say out loud.' },
      { t:'It is not under conscious control.', ok:false, fail:'field',
        note:'True of both, and control is not something a slide can show you.' },
      { t:'The cells are held together by connective tissue.', ok:false, fail:'broad',
        note:'True of both and of skeletal muscle too, so it does not even get you into this pair.' }
    ]},

  /* ---------- BLOOD AND VESSELS ---------- */
  { group:'Blood and vessels',
    a:'Neutrophil', b:'Eosinophil',
    why:'Both are granulocytes with a lobed nucleus, and on a thin or overstained smear the granules are what you have to go on.',
    options:[
      { t:'Granule colour and lobe count together: neutrophil has pale, barely-there granules and a nucleus of three to five lobes, eosinophil has bright red-orange granules and a nucleus of two.', short:'Granule colour and lobe count together.', ok:true,
        note:'Take both halves. Lobe count alone fails on a cell caught at an angle, and colour alone fails on a bad stain, but the two together are reliable. Basophil is the third of the set and it is easy once you know it: granules so dark and dense they hide the nucleus.' },
      { t:'The nucleus is lobed rather than round.', ok:false, fail:'broad',
        note:'True of all three granulocytes. It tells you granulocyte and stops there.' },
      { t:'The cell is larger than a red blood cell.', ok:false, fail:'broad',
        note:'True of every white cell on the smear.' },
      { t:'The cytoplasm contains granules.', ok:false, fail:'shared',
        note:'True of both, and it is what the word granulocyte already told you.' }
    ]},

  { group:'Blood and vessels',
    a:'Monocyte', b:'Large lymphocyte',
    why:'Both are agranulocytes, both are big, and a large lymphocyte is close enough in size to a monocyte to make size useless.',
    options:[
      { t:'Nucleus shape: the monocyte nucleus is indented into a kidney or horseshoe, the lymphocyte nucleus stays round.', short:'Nucleus shape: kidney or horseshoe against round.', ok:true,
        note:'Cytoplasm rim supports it, generous and grey-blue in the monocyte, a thin blue collar in the lymphocyte. But lead with the shape, because the rim is the part a thick smear ruins.' },
      { t:'There are no obvious granules in the cytoplasm.', ok:false, fail:'shared',
        note:'True of both, which is what makes them agranulocytes.' },
      { t:'The cell is noticeably larger than the red cells around it.', ok:false, fail:'broad',
        note:'True of every white cell, and size is the feature that created this confusion in the first place.' },
      { t:'The nucleus takes up much of the cell.', ok:false, fail:'shared',
        note:'True of both, and most of all of the lymphocyte.' }
    ]},

  { group:'Blood and vessels',
    a:'Artery', b:'Vein',
    why:'Both are tubes with three tunics, and on a slide showing them side by side students go by size, which is the one thing that will not work.',
    options:[
      { t:'The tunica media: thick and muscular in the artery with a distinct internal elastic lamina, and thin in the vein where the externa is the thicker layer instead.', short:'The tunica media: thick and muscular, or thin.', ok:true,
        note:'Lumen shape backs it up. An artery holds its round shape because the media is stiff, while a vein collapses into an irregular flattened lumen. Do not go by which is bigger, because a vein is usually the bigger of a pair.' },
      { t:'It has three tunics.', ok:false, fail:'shared',
        note:'True of both, and naming the tunics is a different question from telling the vessels apart.' },
      { t:'The lumen is lined with endothelium.', ok:false, fail:'broad',
        note:'True of both and of capillaries, so it does not narrow anything.' },
      { t:'Red blood cells are visible in the lumen.', ok:false, fail:'shared',
        note:'True of both, and it depends on how the specimen was handled rather than on what the vessel is.' }
    ]}
];

/* Which slot the correct answer lands in, per pair. Fixed rather than
   random so saved progress still lines up after a reload. Spread evenly
   across the four slots and deliberately not patterned. */;

  var SPREAD = [2,0,3,1,0,2,1,3,2,0,1,3,0,2,3,1,2,0,3];

var REASONS = [
  { code:'shared', label:'True of both, and it is the feature that makes them look alike.' },
  { code:'broad',  label:'True of a much wider group of tissues, so it does not even get you to this pair.' },
  { code:'field',  label:'True, but not something you can see in the field in front of you.' }
];

var HINTS = {
  shared:'Ask whether this is the very thing that makes these two look the same under the scope.',
  broad:'Ask how many other tissues in this course it is also true of.',
  field:'Ask whether you could actually see this through the eyepiece.'
};

/* ------------------------------------------------------------
   ROUND 2 IMAGE RUN
   Files go in img/histology/ under the names below. Order is
   interleaved on purpose, never two of the same group back to back.
   ------------------------------------------------------------ */
var FIELDS = [
  { src:'img/histology/simple-columnar.jpg', answer:'Simple columnar',
    feature:'Clearly taller than wide, oval nuclei lined up in the basal third. Suggested specimen: small intestine.' },
  { src:'img/histology/dense-regular.jpg', answer:'Dense regular connective tissue',
    feature:'Parallel collagen bundles all running one way, flattened nuclei squeezed between them, no lacunae anywhere. Suggested specimen: tendon.' },
  { src:'img/histology/hyaline-cartilage.jpg', answer:'Hyaline cartilage',
    feature:'Smooth glassy matrix with nothing running through it, chondrocytes in lacunae, perichondrium at the edge. Suggested specimen: trachea.' },
  { src:'img/histology/cardiac-muscle.jpg', answer:'Cardiac muscle',
    feature:'Striated, fibers branch and meet at dark intercalated discs, one central nucleus per cell.' },
  { src:'img/histology/neutrophil.jpg', answer:'Neutrophil',
    feature:'Pale, barely-there granules and a nucleus of three to five lobes. Suggested specimen: blood smear.' },
  { src:'img/histology/transitional.jpg', answer:'Transitional (urothelium)',
    feature:'Large dome-shaped umbrella cells bulging into the lumen, some with two nuclei. Suggested specimen: relaxed bladder.' },
  { src:'img/histology/adipose.jpg', answer:'Adipose',
    feature:'A whole field of large empty cells packed against each other, each nucleus squeezed to the rim.' },
  { src:'img/histology/fibrocartilage.jpg', answer:'Fibrocartilage',
    feature:'Heavy collagen bundles crossing the field, and the cells sit in lacunae. No perichondrium. Suggested specimen: intervertebral disc.' },
  { src:'img/histology/smooth-muscle-longitudinal.jpg', answer:'Smooth muscle',
    feature:'No striations. Cigar-shaped nucleus centered inside its own cell, cells shoulder to shoulder. Suggested specimen: gut wall, longitudinal.' },
  { src:'img/histology/stratified-squamous-nonkeratinized.jpg', answer:'Stratified squamous, non-keratinized',
    feature:'Layers flattening toward the surface, and nuclei still countable at the top. Suggested specimen: esophagus.' },
  { src:'img/histology/compact-bone.jpg', answer:'Compact bone',
    feature:'Concentric lamellae around a central canal, canaliculi joining the lacunae. Suggested specimen: ground bone.' },
  { src:'img/histology/eosinophil.jpg', answer:'Eosinophil',
    feature:'Bright red-orange granules and a nucleus of two lobes. Suggested specimen: blood smear.' },
  { src:'img/histology/pseudostratified-ciliated-columnar.jpg', answer:'Pseudostratified ciliated columnar',
    feature:'Nuclei at several levels but every cell reaches the basement membrane, with cilia and goblet cells at the top. Suggested specimen: trachea.' },
  { src:'img/histology/areolar.jpg', answer:'Areolar (loose)',
    feature:'Discrete collagen and elastic fibers wandering in all directions through open ground substance.' },
  { src:'img/histology/skeletal-muscle.jpg', answer:'Skeletal muscle',
    feature:'Striated, long straight unbranched fibers, many nuclei pushed to the edge. Suggested specimen: longitudinal section.' },
  { src:'img/histology/simple-squamous.jpg', answer:'Simple squamous',
    feature:'One layer of flat cells lining a surface, tissue on one side and open space on the other. Suggested specimen: lung alveoli or a serous membrane.' },
  { src:'img/histology/dense-irregular.jpg', answer:'Dense irregular connective tissue',
    feature:'Collagen bundles running several directions at once, with some cut across as pale swirls. Suggested specimen: dermis.' },
  { src:'img/histology/elastic-cartilage.jpg', answer:'Elastic cartilage',
    feature:'Dark branching elastin threads through the matrix between densely packed lacunae. Suggested specimen: epiglottis or ear.' },
  { src:'img/histology/monocyte.jpg', answer:'Monocyte',
    feature:'Kidney or horseshoe shaped nucleus with a generous rim of pale cytoplasm. Suggested specimen: blood smear.' },
  { src:'img/histology/simple-cuboidal.jpg', answer:'Simple cuboidal',
    feature:'About as tall as it is wide, round central nucleus. Suggested specimen: kidney tubules.' },
  { src:'img/histology/reticular.jpg', answer:'Reticular',
    feature:'A crowd of small dark nuclei on a fine branching mesh, with no discrete fibers in a routine stain. Suggested specimen: lymph node.' },
  { src:'img/histology/smooth-muscle-cross.jpg', answer:'Smooth muscle',
    feature:'A field of round profiles where only some contain a nucleus, because you only catch it through the middle of the spindle. Suggested specimen: gut wall, cross section.' },
  { src:'img/histology/stratified-squamous-keratinized.jpg', answer:'Stratified squamous, keratinized',
    feature:'A solid surface band with no nuclei in it at all. Suggested specimen: thick skin.' },
  { src:'img/histology/lymphocyte.jpg', answer:'Large lymphocyte',
    feature:'Round nucleus filling the cell, with only a thin collar of cytoplasm. Suggested specimen: blood smear.' },
  { src:'img/histology/artery.jpg', answer:'Artery',
    feature:'Thick muscular tunica media with a distinct internal elastic lamina, lumen holding its round shape.' },
  { src:'img/histology/elastic-connective.jpg', answer:'Elastic connective tissue',
    feature:'Dark wavy fibers that branch and rejoin, often in whole sheets. Suggested specimen: elastic artery wall.' },
  { src:'img/histology/vein.jpg', answer:'Vein',
    feature:'Thin tunica media, relatively thicker externa, large irregular collapsed lumen.' },
  { src:'img/histology/stratified-columnar.jpg', answer:'Stratified columnar',
    feature:'Several layers with a columnar top layer, only the deepest layer touching the basement membrane, and no cilia. Suggested specimen: a large duct or the male urethra.' }
];;

  window.BIO004_LOOKALIKES = {
    pairs: PAIRS,
    spread: SPREAD,
    reasons: REASONS,
    hints: HINTS,
    fields: FIELDS,

    /* The options in the order they appear on screen, correct answer moved
       into its SPREAD slot. Every consumer calls this rather than reading
       pairs[i].options directly, so the activity, the deck and the poll all
       agree on which option is B. */
    rendered: function(i){
      var p = PAIRS[i];
      var correct = p.options[0];
      var rest = p.options.slice(1);
      var slot = SPREAD[i % SPREAD.length];
      var out = [];
      for(var k = 0; k < 4; k++){ out.push(k === slot ? correct : rest.shift()); }
      return { group:p.group, a:p.a, b:p.b, why:p.why, options:out, correctIndex:slot };
    },

    /* What a poll or a slide asks. */
    question: function(i){
      var p = PAIRS[i];
      var b = p.b.charAt(0).toLowerCase() + p.b.slice(1);
      return p.a + ' against ' + b + '. Which one feature decides it?';
    },

    /* Projector wording, falling back to the full wording. */
    label: function(o){ return o.short || o.t; },

    /* Short form of a fail code, for a bar on a projector. The long form in
       REASONS is what students choose from on the activity page. */
    reasonShort: function(code){
      return code === 'shared' ? 'True of both, and it is what makes them look alike.'
           : code === 'broad'  ? 'True of far more tissues than these two.'
           : code === 'field'  ? 'True, but you cannot see it in the field.'
           : 'True, but it does not decide it.';
    },
    reasonLabel: function(code){
      for(var i=0;i<REASONS.length;i++){ if(REASONS[i].code === code) return REASONS[i].label; }
      return '';
    },

    /* ---- what a poll or a slide asks ----
       Both the deck and the student page build their question list from
       these, so the ids always match and a phone can follow the projector. */
    pollQuestion: function(i){
      var self = window.BIO004_LOOKALIKES;
      var r = self.rendered(i);
      return {
        id: 'la-' + i,
        group: r.group,
        pair: r.a + ' against ' + r.b,
        question: self.question(i),
        options: r.options.map(function(o){
          return { t: self.label(o), ok: !!o.ok, why: o.ok ? null : self.reasonShort(o.fail) };
        })
      };
    },
    pollWhyQuestion: function(i, optIndex){
      var self = window.BIO004_LOOKALIKES;
      var r = self.rendered(i);
      var wrong = [];
      r.options.forEach(function(o, j){ if(!o.ok) wrong.push(j); });
      var j = (optIndex == null) ? wrong[0] : optIndex;
      var o = r.options[j];
      return {
        id: 'la-' + i + '-why-' + j,
        group: r.group,
        pair: r.a + ' against ' + r.b,
        statement: self.label(o),
        question: 'This is true. So why does it not decide the pair?',
        options: REASONS.map(function(rr){
          return { t: rr.label, ok: rr.code === o.fail,
                   why: rr.code === 'shared' ? 'Ask whether it is the very thing making them look alike.'
                      : rr.code === 'broad'  ? 'Ask how many other tissues it is also true of.'
                      : 'Ask whether you could see it through the eyepiece.' };
        })
      };
    },

    /* Every question a student phone might be shown, so it can follow the
       projector whichever slide you are on. */
    allPollQuestions: function(){
      var self = window.BIO004_LOOKALIKES, out = [];
      for(var i = 0; i < PAIRS.length; i++){
        out.push(self.pollQuestion(i));
        var r = self.rendered(i);
        r.options.forEach(function(o, j){ if(!o.ok) out.push(self.pollWhyQuestion(i, j)); });
      }
      return out;
    },

    count: function(){ return PAIRS.length; }
  };
})();
