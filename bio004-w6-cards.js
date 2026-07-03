/* bio004-w6-cards.js  —  BIO 004 competency-tagged recall + practice pool (Week 6: Urinary, Reproductive, Endocrine)
   card-maker-brief.md. Additive: appends to window.BIO004_COURSE_CONTENT and
   window.BIO004_PRACTICE_POOL; never edits existing multiple-choice cards. */
(function (w) {
  "use strict";
  var MODULE = {
  "id": "m-w6",
  "week": 6,
  "title": "Week 6: Urinary, Reproductive, Endocrine",
  "topics": [
    {
      "id": "t-w6-kidney-gross",
      "title": "Kidney gross anatomy and layers",
      "competencyId": "w6-kidney-gross",
      "summary": "Kidney gross anatomy and layers (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-kidney-gross-r1",
          "competencyId": "w6-kidney-gross",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the four organs of the urinary system.",
          "a": "The kidneys, ureters, urinary bladder, and urethra.",
          "tags": [
            "w6-kidney-gross"
          ]
        },
        {
          "id": "w6-kidney-gross-r2",
          "competencyId": "w6-kidney-gross",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the renal hilum?",
          "a": "The notch on the medial border where the ureter, vessels, and nerves enter and leave.",
          "tags": [
            "w6-kidney-gross"
          ]
        },
        {
          "id": "w6-kidney-gross-r3",
          "competencyId": "w6-kidney-gross",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three tissue layers around the kidney, from inner to outer.",
          "a": "The renal capsule, the adipose capsule, and the renal fascia.",
          "tags": [
            "w6-kidney-gross"
          ]
        },
        {
          "id": "w6-kidney-gross-r4",
          "competencyId": "w6-kidney-gross",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Compare the renal cortex and renal medulla by position.",
          "a": "The cortex is the outer region just beneath the capsule; the medulla is the inner region, containing the renal pyramids.",
          "tags": [
            "w6-kidney-gross"
          ]
        },
        {
          "id": "w6-kidney-gross-r5",
          "competencyId": "w6-kidney-gross",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "A kidney drops from its normal position and kinks the ureter. Which supporting layer was lost?",
          "a": "The adipose capsule, the fat that cushions and holds the kidney in place.",
          "tags": [
            "w6-kidney-gross"
          ]
        }
      ]
    },
    {
      "id": "t-w6-kidney-internal",
      "title": "Internal kidney regions",
      "competencyId": "w6-kidney-internal",
      "summary": "Internal kidney regions (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-kidney-internal-r1",
          "competencyId": "w6-kidney-internal",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What are the renal pyramids, and where are their bases?",
          "a": "The cone-shaped masses of the medulla, with their bases toward the cortex.",
          "tags": [
            "w6-kidney-internal"
          ]
        },
        {
          "id": "w6-kidney-internal-r2",
          "competencyId": "w6-kidney-internal",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is a renal papilla, and where does it drain?",
          "a": "The tip of a renal pyramid, which drains urine into a minor calyx.",
          "tags": [
            "w6-kidney-internal"
          ]
        },
        {
          "id": "w6-kidney-internal-r3",
          "competencyId": "w6-kidney-internal",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What are renal columns?",
          "a": "Extensions of the cortex that dip down between the renal pyramids.",
          "tags": [
            "w6-kidney-internal"
          ]
        },
        {
          "id": "w6-kidney-internal-r4",
          "competencyId": "w6-kidney-internal",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What is the renal pelvis, and what does it do?",
          "a": "The funnel-shaped cavity that collects urine and passes it into the ureter.",
          "tags": [
            "w6-kidney-internal"
          ]
        },
        {
          "id": "w6-kidney-internal-r5",
          "competencyId": "w6-kidney-internal",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Order the urine-collecting spaces from the papilla to the ureter.",
          "a": "Minor calyx, major calyx, renal pelvis, then the ureter.",
          "tags": [
            "w6-kidney-internal"
          ]
        }
      ]
    },
    {
      "id": "t-w6-nephron-parts",
      "title": "Nephron structure",
      "competencyId": "w6-nephron-parts",
      "summary": "Nephron structure (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-nephron-parts-r1",
          "competencyId": "w6-nephron-parts",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the nephron?",
          "a": "The microscopic functional unit of the kidney that makes urine.",
          "tags": [
            "w6-nephron-parts"
          ]
        },
        {
          "id": "w6-nephron-parts-r2",
          "competencyId": "w6-nephron-parts",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What are the two main parts of a nephron?",
          "a": "The renal corpuscle and the renal tubule.",
          "tags": [
            "w6-nephron-parts"
          ]
        },
        {
          "id": "w6-nephron-parts-r3",
          "competencyId": "w6-nephron-parts",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the glomerulus?",
          "a": "The tuft of leaky, fenestrated capillaries where the blood is filtered.",
          "tags": [
            "w6-nephron-parts"
          ]
        },
        {
          "id": "w6-nephron-parts-r4",
          "competencyId": "w6-nephron-parts",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Order the renal tubule segments after the glomerular capsule.",
          "a": "Proximal convoluted tubule, nephron loop, distal convoluted tubule, then the collecting duct.",
          "tags": [
            "w6-nephron-parts"
          ]
        },
        {
          "id": "w6-nephron-parts-r5",
          "competencyId": "w6-nephron-parts",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Trace filtrate from the glomerulus to the collecting duct, naming each segment.",
          "a": "Glomerular capsule, proximal convoluted tubule, nephron loop, distal convoluted tubule, collecting duct.",
          "tags": [
            "w6-nephron-parts"
          ]
        }
      ]
    },
    {
      "id": "t-w6-urine-path",
      "title": "Ureters, bladder, urethra, urine path",
      "competencyId": "w6-urine-path",
      "summary": "Ureters, bladder, urethra, urine path (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-urine-path-r1",
          "competencyId": "w6-urine-path",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What does the ureter do, and how does it move urine?",
          "a": "It carries urine from the kidney to the bladder by peristalsis.",
          "tags": [
            "w6-urine-path"
          ]
        },
        {
          "id": "w6-urine-path-r2",
          "competencyId": "w6-urine-path",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the trigone of the bladder?",
          "a": "The smooth triangular area at the base, marked by the two ureter openings and the urethral opening.",
          "tags": [
            "w6-urine-path"
          ]
        },
        {
          "id": "w6-urine-path-r3",
          "competencyId": "w6-urine-path",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the detrusor muscle?",
          "a": "The smooth muscle layer of the bladder wall that contracts to empty it.",
          "tags": [
            "w6-urine-path"
          ]
        },
        {
          "id": "w6-urine-path-r4",
          "competencyId": "w6-urine-path",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Compare the internal and external urethral sphincters.",
          "a": "The internal is involuntary smooth muscle at the bladder outlet; the external is voluntary skeletal muscle.",
          "tags": [
            "w6-urine-path"
          ]
        },
        {
          "id": "w6-urine-path-r5",
          "competencyId": "w6-urine-path",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Trace urine from the collecting duct to outside the body.",
          "a": "Collecting duct, minor and major calyces, renal pelvis, ureter, bladder, urethra.",
          "tags": [
            "w6-urine-path"
          ]
        }
      ]
    },
    {
      "id": "t-w6-scrotum-testes",
      "title": "Scrotum and testis",
      "competencyId": "w6-scrotum-testes",
      "summary": "Scrotum and testis (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-scrotum-testes-r1",
          "competencyId": "w6-scrotum-testes",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What are the testes, and what do they produce?",
          "a": "The male gonads; they produce sperm and secrete hormones.",
          "tags": [
            "w6-scrotum-testes"
          ]
        },
        {
          "id": "w6-scrotum-testes-r2",
          "competencyId": "w6-scrotum-testes",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the tunica albuginea of the testis?",
          "a": "The white fibrous capsule that divides each testis into 200 to 300 lobules.",
          "tags": [
            "w6-scrotum-testes"
          ]
        },
        {
          "id": "w6-scrotum-testes-r3",
          "competencyId": "w6-scrotum-testes",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Where are sperm produced within the testis?",
          "a": "In the seminiferous tubules.",
          "tags": [
            "w6-scrotum-testes"
          ]
        },
        {
          "id": "w6-scrotum-testes-r4",
          "competencyId": "w6-scrotum-testes",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Compare the sustentacular (Sertoli) and interstitial (Leydig) cells.",
          "a": "Sertoli cells line the seminiferous tubules and nourish sperm; Leydig cells lie between tubules and make testosterone.",
          "tags": [
            "w6-scrotum-testes"
          ]
        },
        {
          "id": "w6-scrotum-testes-r5",
          "competencyId": "w6-scrotum-testes",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Why do the testes hang outside the body in the scrotum?",
          "a": "Sperm production needs a temperature a few degrees below the body core.",
          "tags": [
            "w6-scrotum-testes"
          ]
        }
      ]
    },
    {
      "id": "t-w6-sperm-path",
      "title": "Sperm duct system and pathway",
      "competencyId": "w6-sperm-path",
      "summary": "Sperm duct system and pathway (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-sperm-path-r1",
          "competencyId": "w6-sperm-path",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What does the epididymis do?",
          "a": "It stores sperm and lets them gain motility.",
          "tags": [
            "w6-sperm-path"
          ]
        },
        {
          "id": "w6-sperm-path-r2",
          "competencyId": "w6-sperm-path",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the ductus (vas) deferens?",
          "a": "The duct that carries sperm from the epididymis up toward the urethra.",
          "tags": [
            "w6-sperm-path"
          ]
        },
        {
          "id": "w6-sperm-path-r3",
          "competencyId": "w6-sperm-path",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the spermatic cord?",
          "a": "The bundle containing the ductus deferens, blood vessels, nerves, and the cremaster muscle.",
          "tags": [
            "w6-sperm-path"
          ]
        },
        {
          "id": "w6-sperm-path-r4",
          "competencyId": "w6-sperm-path",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "How is the ejaculatory duct formed, and where does it empty?",
          "a": "Where the ductus deferens meets the seminal vesicle duct; it empties into the prostatic urethra.",
          "tags": [
            "w6-sperm-path"
          ]
        },
        {
          "id": "w6-sperm-path-r5",
          "competencyId": "w6-sperm-path",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Trace sperm from where they are made to the outside, naming each duct.",
          "a": "Seminiferous tubules, epididymis, ductus deferens, ejaculatory duct, urethra.",
          "tags": [
            "w6-sperm-path"
          ]
        }
      ]
    },
    {
      "id": "t-w6-ovary",
      "title": "Ovary structure and follicles",
      "competencyId": "w6-ovary",
      "summary": "Ovary structure and follicles (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-ovary-r1",
          "competencyId": "w6-ovary",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What are the ovaries, and what do they produce?",
          "a": "The paired female gonads; they produce oocytes and secrete hormones.",
          "tags": [
            "w6-ovary"
          ]
        },
        {
          "id": "w6-ovary-r2",
          "competencyId": "w6-ovary",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What are ovarian follicles?",
          "a": "Structures in the ovarian cortex, each holding an oocyte at a stage of development.",
          "tags": [
            "w6-ovary"
          ]
        },
        {
          "id": "w6-ovary-r3",
          "competencyId": "w6-ovary",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Order the ovarian follicle stages.",
          "a": "Primordial, primary, secondary, then the vesicular (Graafian) follicle.",
          "tags": [
            "w6-ovary"
          ]
        },
        {
          "id": "w6-ovary-r4",
          "competencyId": "w6-ovary",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What is the corpus luteum, and what does it become?",
          "a": "The yellow body left after ovulation, which later degenerates into a scar, the corpus albicans.",
          "tags": [
            "w6-ovary"
          ]
        },
        {
          "id": "w6-ovary-r5",
          "competencyId": "w6-ovary",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Which ligament anchors the ovary to the uterus, and which to the pelvic wall?",
          "a": "The ovarian ligament anchors it to the uterus; the suspensory ligament attaches it to the pelvic wall.",
          "tags": [
            "w6-ovary"
          ]
        }
      ]
    },
    {
      "id": "t-w6-ovum-path",
      "title": "Uterine tubes and ovum pathway",
      "competencyId": "w6-ovum-path",
      "summary": "Uterine tubes and ovum pathway (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-ovum-path-r1",
          "competencyId": "w6-ovum-path",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What do the fimbriae do?",
          "a": "They sweep the released oocyte into the funnel of the uterine tube.",
          "tags": [
            "w6-ovum-path"
          ]
        },
        {
          "id": "w6-ovum-path-r2",
          "competencyId": "w6-ovum-path",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Where does fertilization usually occur?",
          "a": "In the ampulla, the widest part of the uterine tube.",
          "tags": [
            "w6-ovum-path"
          ]
        },
        {
          "id": "w6-ovum-path-r3",
          "competencyId": "w6-ovum-path",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the regions of the uterine tube from the ovary to the uterus.",
          "a": "Infundibulum, ampulla, isthmus.",
          "tags": [
            "w6-ovum-path"
          ]
        },
        {
          "id": "w6-ovum-path-r4",
          "competencyId": "w6-ovum-path",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "How does the oocyte move along the uterine tube?",
          "a": "Ciliated cells and fluid in the lining move it toward the uterus.",
          "tags": [
            "w6-ovum-path"
          ]
        },
        {
          "id": "w6-ovum-path-r5",
          "competencyId": "w6-ovum-path",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "Trace an oocyte from the ovary to the uterus, naming each structure.",
          "a": "Ovary, fimbriae and infundibulum, ampulla, isthmus, uterus.",
          "tags": [
            "w6-ovum-path"
          ]
        }
      ]
    },
    {
      "id": "t-w6-uterus",
      "title": "Uterus regions, ligaments, wall",
      "competencyId": "w6-uterus",
      "summary": "Uterus regions, ligaments, wall (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-uterus-r1",
          "competencyId": "w6-uterus",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three regions of the uterus.",
          "a": "The fundus, body, and cervix.",
          "tags": [
            "w6-uterus"
          ]
        },
        {
          "id": "w6-uterus-r2",
          "competencyId": "w6-uterus",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three layers of the uterine wall.",
          "a": "Perimetrium, myometrium, endometrium.",
          "tags": [
            "w6-uterus"
          ]
        },
        {
          "id": "w6-uterus-r3",
          "competencyId": "w6-uterus",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Which uterine layer contracts during childbirth?",
          "a": "The myometrium.",
          "tags": [
            "w6-uterus"
          ]
        },
        {
          "id": "w6-uterus-r4",
          "competencyId": "w6-uterus",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "How is the endometrium built in two layers, and why?",
          "a": "The stratum functionalis sheds and is rebuilt each cycle from the permanent stratum basalis.",
          "tags": [
            "w6-uterus"
          ]
        },
        {
          "id": "w6-uterus-r5",
          "competencyId": "w6-uterus",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "A fertilized ovum lodges in the uterine tube instead of the uterus. What is this, and why is the tube's anatomy the danger?",
          "a": "An ectopic pregnancy; the narrow tube was never built to hold a growing embryo.",
          "tags": [
            "w6-uterus"
          ]
        }
      ]
    },
    {
      "id": "t-w6-endocrine-locate",
      "title": "Major endocrine glands and locations",
      "competencyId": "w6-endocrine-locate",
      "summary": "Major endocrine glands and locations (core)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-endocrine-locate-r1",
          "competencyId": "w6-endocrine-locate",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Where is the pituitary gland?",
          "a": "In the sella turcica of the sphenoid bone, hanging below the hypothalamus.",
          "tags": [
            "w6-endocrine-locate"
          ]
        },
        {
          "id": "w6-endocrine-locate-r2",
          "competencyId": "w6-endocrine-locate",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Where is the thyroid gland?",
          "a": "In the anterior neck, just below the larynx, wrapped around the trachea.",
          "tags": [
            "w6-endocrine-locate"
          ]
        },
        {
          "id": "w6-endocrine-locate-r3",
          "competencyId": "w6-endocrine-locate",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Where are the adrenal glands?",
          "a": "One capping the superior pole of each kidney.",
          "tags": [
            "w6-endocrine-locate"
          ]
        },
        {
          "id": "w6-endocrine-locate-r4",
          "competencyId": "w6-endocrine-locate",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which is the largest purely endocrine gland, and where is it?",
          "a": "The thyroid gland, in the anterior neck.",
          "tags": [
            "w6-endocrine-locate"
          ]
        },
        {
          "id": "w6-endocrine-locate-r5",
          "competencyId": "w6-endocrine-locate",
          "type": "recall",
          "dok": 3,
          "facet": "lab",
          "q": "A pituitary tumor first causes loss of peripheral vision. Why, given its location?",
          "a": "Boxed in the bony sella turcica, it can only expand upward, pressing on the optic chiasm.",
          "tags": [
            "w6-endocrine-locate"
          ]
        }
      ]
    },
    {
      "id": "t-w6-jga-filtration",
      "title": "JGA and filtration membrane",
      "competencyId": "w6-jga-filtration",
      "summary": "JGA and filtration membrane (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-jga-filtration-r1",
          "competencyId": "w6-jga-filtration",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the juxtaglomerular apparatus?",
          "a": "The structure where the distal convoluted tubule contacts the arterioles of its own renal corpuscle.",
          "tags": [
            "w6-jga-filtration"
          ]
        },
        {
          "id": "w6-jga-filtration-r2",
          "competencyId": "w6-jga-filtration",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three layers of the filtration membrane.",
          "a": "The fenestrated endothelium, the basement membrane, and the slit membranes between the podocytes.",
          "tags": [
            "w6-jga-filtration"
          ]
        },
        {
          "id": "w6-jga-filtration-r3",
          "competencyId": "w6-jga-filtration",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What do the macula densa and the juxtaglomerular cells each do?",
          "a": "The macula densa senses sodium and chloride; the juxtaglomerular cells release renin when blood pressure is low.",
          "tags": [
            "w6-jga-filtration"
          ]
        }
      ]
    },
    {
      "id": "t-w6-kidney-bloodsupply",
      "title": "Kidney blood supply",
      "competencyId": "w6-kidney-bloodsupply",
      "summary": "Kidney blood supply (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-kidney-bloodsupply-r1",
          "competencyId": "w6-kidney-bloodsupply",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Which vessel delivers blood into the glomerulus, and which carries it out?",
          "a": "The afferent arteriole delivers it in; the efferent arteriole carries it out.",
          "tags": [
            "w6-kidney-bloodsupply"
          ]
        },
        {
          "id": "w6-kidney-bloodsupply-r2",
          "competencyId": "w6-kidney-bloodsupply",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Trace blood from the renal artery to the glomerulus.",
          "a": "Renal artery, segmental and interlobar arteries, arcuate arteries, interlobular arteries, afferent arteriole, glomerulus.",
          "tags": [
            "w6-kidney-bloodsupply"
          ]
        },
        {
          "id": "w6-kidney-bloodsupply-r3",
          "competencyId": "w6-kidney-bloodsupply",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "What are the vasa recta, and which nephrons do they serve?",
          "a": "Long capillaries that follow the loops of the juxtamedullary nephrons deep into the medulla.",
          "tags": [
            "w6-kidney-bloodsupply"
          ]
        }
      ]
    },
    {
      "id": "t-w6-male-glands-penis",
      "title": "Accessory glands and penis",
      "competencyId": "w6-male-glands-penis",
      "summary": "Accessory glands and penis (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-male-glands-penis-r1",
          "competencyId": "w6-male-glands-penis",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the three accessory glands of the male reproductive system.",
          "a": "The seminal vesicles, the prostate, and the bulbourethral glands.",
          "tags": [
            "w6-male-glands-penis"
          ]
        },
        {
          "id": "w6-male-glands-penis-r2",
          "competencyId": "w6-male-glands-penis",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What does each male accessory gland add to semen?",
          "a": "Seminal vesicles add alkaline fructose-rich fluid, the prostate a milky fluid, and the bulbourethral glands a lubricating alkaline mucus.",
          "tags": [
            "w6-male-glands-penis"
          ]
        },
        {
          "id": "w6-male-glands-penis-r3",
          "competencyId": "w6-male-glands-penis",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Name the columns of erectile tissue in the penis.",
          "a": "Two dorsal corpora cavernosa and one ventral corpus spongiosum around the urethra.",
          "tags": [
            "w6-male-glands-penis"
          ]
        }
      ]
    },
    {
      "id": "t-w6-vagina-vulva",
      "title": "Vagina and external genitalia",
      "competencyId": "w6-vagina-vulva",
      "summary": "Vagina and external genitalia (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-vagina-vulva-r1",
          "competencyId": "w6-vagina-vulva",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the vagina?",
          "a": "The fibromuscular canal from the cervix to the exterior; the birth canal.",
          "tags": [
            "w6-vagina-vulva"
          ]
        },
        {
          "id": "w6-vagina-vulva-r2",
          "competencyId": "w6-vagina-vulva",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the parts of the vulva.",
          "a": "The mons pubis, labia majora, labia minora, clitoris, and vestibule.",
          "tags": [
            "w6-vagina-vulva"
          ]
        },
        {
          "id": "w6-vagina-vulva-r3",
          "competencyId": "w6-vagina-vulva",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Which vulvar structures are homologous to the scrotum and the penis?",
          "a": "The labia majora are homologous to the scrotum; the clitoris is homologous to the penis.",
          "tags": [
            "w6-vagina-vulva"
          ]
        }
      ]
    },
    {
      "id": "t-w6-fertilization-implant",
      "title": "Fertilization and implantation",
      "competencyId": "w6-fertilization-implant",
      "summary": "Fertilization and implantation (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-fertilization-implant-r1",
          "competencyId": "w6-fertilization-implant",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Where does fertilization normally occur, and what forms?",
          "a": "In the ampulla of the uterine tube; a zygote forms.",
          "tags": [
            "w6-fertilization-implant"
          ]
        },
        {
          "id": "w6-fertilization-implant-r2",
          "competencyId": "w6-fertilization-implant",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What is the blastocyst, and what are its two parts?",
          "a": "The hollow ball of cells that reaches the uterus, with an inner cell mass and an outer trophoblast.",
          "tags": [
            "w6-fertilization-implant"
          ]
        },
        {
          "id": "w6-fertilization-implant-r3",
          "competencyId": "w6-fertilization-implant",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "What becomes of the inner cell mass and the trophoblast?",
          "a": "The inner cell mass becomes the embryo; the trophoblast becomes the fetal part of the placenta.",
          "tags": [
            "w6-fertilization-implant"
          ]
        }
      ]
    },
    {
      "id": "t-w6-placenta-membranes",
      "title": "Placenta and fetal membranes",
      "competencyId": "w6-placenta-membranes",
      "summary": "Placenta and fetal membranes (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-placenta-membranes-r1",
          "competencyId": "w6-placenta-membranes",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What does the placenta do?",
          "a": "It exchanges oxygen, nutrients, and wastes between the mother's blood and the fetus's blood.",
          "tags": [
            "w6-placenta-membranes"
          ]
        },
        {
          "id": "w6-placenta-membranes-r2",
          "competencyId": "w6-placenta-membranes",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "What does the umbilical cord carry?",
          "a": "Two umbilical arteries and one umbilical vein.",
          "tags": [
            "w6-placenta-membranes"
          ]
        },
        {
          "id": "w6-placenta-membranes-r3",
          "competencyId": "w6-placenta-membranes",
          "type": "recall",
          "dok": 2,
          "facet": "lecture",
          "q": "Compare the amnion and the chorion.",
          "a": "The amnion is the inner membrane forming the fluid-filled sac; the chorion is the outer membrane contributing the fetal placenta.",
          "tags": [
            "w6-placenta-membranes"
          ]
        }
      ]
    },
    {
      "id": "t-w6-pituitary",
      "title": "Pituitary gross anatomy",
      "competencyId": "w6-pituitary",
      "summary": "Pituitary gross anatomy (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-pituitary-r1",
          "competencyId": "w6-pituitary",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What connects the pituitary to the hypothalamus?",
          "a": "The infundibulum, a slender stalk.",
          "tags": [
            "w6-pituitary"
          ]
        },
        {
          "id": "w6-pituitary-r2",
          "competencyId": "w6-pituitary",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "Compare the anterior and posterior pituitary by tissue type.",
          "a": "The anterior lobe (adenohypophysis) is glandular epithelial tissue; the posterior lobe (neurohypophysis) is nervous tissue.",
          "tags": [
            "w6-pituitary"
          ]
        },
        {
          "id": "w6-pituitary-r3",
          "competencyId": "w6-pituitary",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "How does the hypothalamus signal each pituitary lobe?",
          "a": "The anterior lobe by the hypophyseal portal blood vessels; the posterior lobe by a tract of nerve fibers.",
          "tags": [
            "w6-pituitary"
          ]
        }
      ]
    },
    {
      "id": "t-w6-thyroid-parathyroid",
      "title": "Thyroid and parathyroid",
      "competencyId": "w6-thyroid-parathyroid",
      "summary": "Thyroid and parathyroid (high)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-thyroid-parathyroid-r1",
          "competencyId": "w6-thyroid-parathyroid",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What is the isthmus of the thyroid?",
          "a": "The bridge of thyroid tissue crossing the front of the trachea that connects the two lobes.",
          "tags": [
            "w6-thyroid-parathyroid"
          ]
        },
        {
          "id": "w6-thyroid-parathyroid-r2",
          "competencyId": "w6-thyroid-parathyroid",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Where are the parathyroid glands, and how many usually?",
          "a": "On the posterior surface of the thyroid lobes, usually four.",
          "tags": [
            "w6-thyroid-parathyroid"
          ]
        },
        {
          "id": "w6-thyroid-parathyroid-r3",
          "competencyId": "w6-thyroid-parathyroid",
          "type": "recall",
          "dok": 2,
          "facet": "lab",
          "q": "What are thyroid follicles and colloid?",
          "a": "Hollow spheres that make up the gland; colloid is the protein-rich fluid stored in each follicle's center.",
          "tags": [
            "w6-thyroid-parathyroid"
          ]
        }
      ]
    },
    {
      "id": "t-w6-nephron-types",
      "title": "Cortical vs juxtamedullary nephrons",
      "competencyId": "w6-nephron-types",
      "summary": "Cortical vs juxtamedullary nephrons (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-nephron-types-r1",
          "competencyId": "w6-nephron-types",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Compare cortical and juxtamedullary nephrons.",
          "a": "Cortical nephrons (about 85 percent) have short loops; juxtamedullary nephrons (about 15 percent) have long loops that concentrate urine.",
          "tags": [
            "w6-nephron-types"
          ]
        }
      ]
    },
    {
      "id": "t-w6-urinary-disorders",
      "title": "Urinary disorders",
      "competencyId": "w6-urinary-disorders",
      "summary": "Urinary disorders (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-urinary-disorders-r1",
          "competencyId": "w6-urinary-disorders",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Why are urinary tract infections more common in women?",
          "a": "The female urethra is short, giving bacteria a shorter climb to the bladder.",
          "tags": [
            "w6-urinary-disorders"
          ]
        }
      ]
    },
    {
      "id": "t-w6-sperm-cell",
      "title": "Sperm cell structure",
      "competencyId": "w6-sperm-cell",
      "summary": "Sperm cell structure (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-sperm-cell-r1",
          "competencyId": "w6-sperm-cell",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the parts of a sperm cell and what powers its movement.",
          "a": "A head with the nucleus and acrosome, and a tail whose middle piece is packed with mitochondria for movement.",
          "tags": [
            "w6-sperm-cell"
          ]
        }
      ]
    },
    {
      "id": "t-w6-male-disorders",
      "title": "Male reproductive disorders",
      "competencyId": "w6-male-disorders",
      "summary": "Male reproductive disorders (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-male-disorders-r1",
          "competencyId": "w6-male-disorders",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Why can an enlarged prostate cause difficulty urinating?",
          "a": "The urethra passes straight through the prostate, so an enlarged prostate squeezes it.",
          "tags": [
            "w6-male-disorders"
          ]
        }
      ]
    },
    {
      "id": "t-w6-mammary",
      "title": "Mammary gland structure",
      "competencyId": "w6-mammary",
      "summary": "Mammary gland structure (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-mammary-r1",
          "competencyId": "w6-mammary",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "What are the mammary glands, and what carries their milk to the nipple?",
          "a": "Modified sweat glands of the breast; lactiferous ducts carry milk toward the nipple.",
          "tags": [
            "w6-mammary"
          ]
        }
      ]
    },
    {
      "id": "t-w6-gravid-labor",
      "title": "Gravid uterus and labor",
      "competencyId": "w6-gravid-labor",
      "summary": "Gravid uterus and labor (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-gravid-labor-r1",
          "competencyId": "w6-gravid-labor",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Name the three stages of labor in order.",
          "a": "The dilation stage, the expulsion stage, and the placental stage.",
          "tags": [
            "w6-gravid-labor"
          ]
        }
      ]
    },
    {
      "id": "t-w6-adrenal",
      "title": "Adrenal gland zones",
      "competencyId": "w6-adrenal",
      "summary": "Adrenal gland zones (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-adrenal-r1",
          "competencyId": "w6-adrenal",
          "type": "recall",
          "dok": 1,
          "facet": "lab",
          "q": "Name the two regions of an adrenal gland and the tissue of each.",
          "a": "The outer cortex (glandular tissue) and the inner medulla (modified nervous tissue).",
          "tags": [
            "w6-adrenal"
          ]
        }
      ]
    },
    {
      "id": "t-w6-endocrine-tissue-organs",
      "title": "Organs with endocrine tissue",
      "competencyId": "w6-endocrine-tissue-organs",
      "summary": "Organs with endocrine tissue (support)",
      "gateKeywords": [],
      "cards": [
        {
          "id": "w6-endocrine-tissue-organs-r1",
          "competencyId": "w6-endocrine-tissue-organs",
          "type": "recall",
          "dok": 1,
          "facet": "lecture",
          "q": "Name three organs that are not endocrine glands but contain endocrine tissue.",
          "a": "The heart, the kidneys, and the stomach and small intestine (also the liver, skin, adipose, and placenta).",
          "tags": [
            "w6-endocrine-tissue-organs"
          ]
        }
      ]
    }
  ]
};
  var POOL = {
  "mcq": [
    {
      "id": "w6-nephron-parts-q1",
      "competencyId": "w6-nephron-parts",
      "type": "mcq",
      "dok": 1,
      "q": "What is the filtering tuft of capillaries in a nephron called?",
      "options": [
        "Glomerulus",
        "Loop of Henle",
        "Collecting duct",
        "Renal pelvis"
      ],
      "correctIndex": 0,
      "explanation": "The glomerulus is the fenestrated capillary tuft where blood is filtered. The loop and collecting duct are tubule segments, and the renal pelvis collects finished urine.",
      "tags": [
        "w6-nephron-parts"
      ]
    },
    {
      "id": "w6-urine-path-q1",
      "competencyId": "w6-urine-path",
      "type": "mcq",
      "dok": 2,
      "q": "Which structure stores urine before it leaves the body?",
      "options": [
        "Ureter",
        "Renal pelvis",
        "Urinary bladder",
        "Urethra"
      ],
      "correctIndex": 2,
      "explanation": "The bladder stores urine. The ureter carries it down, the renal pelvis funnels it from the kidney, and the urethra carries it out.",
      "tags": [
        "w6-urine-path"
      ]
    },
    {
      "id": "w6-sperm-path-q1",
      "competencyId": "w6-sperm-path",
      "type": "mcq",
      "dok": 2,
      "q": "Where do sperm gain motility and get stored?",
      "options": [
        "Seminiferous tubules",
        "Epididymis",
        "Ductus deferens",
        "Prostate"
      ],
      "correctIndex": 1,
      "explanation": "Sperm mature and are stored in the epididymis. They are made in the seminiferous tubules, carried by the ductus deferens, and the prostate adds fluid.",
      "tags": [
        "w6-sperm-path"
      ]
    },
    {
      "id": "w6-ovum-path-q1",
      "competencyId": "w6-ovum-path",
      "type": "mcq",
      "dok": 1,
      "q": "Where does fertilization usually occur?",
      "options": [
        "The uterus",
        "The ampulla of the uterine tube",
        "The ovary",
        "The cervix"
      ],
      "correctIndex": 1,
      "explanation": "Fertilization usually happens in the ampulla of the uterine tube. The oocyte is released from the ovary and travels toward the uterus.",
      "tags": [
        "w6-ovum-path"
      ]
    },
    {
      "id": "w6-uterus-q1",
      "competencyId": "w6-uterus",
      "type": "mcq",
      "dok": 1,
      "q": "Which uterine wall layer contracts during childbirth?",
      "options": [
        "Perimetrium",
        "Myometrium",
        "Endometrium",
        "Peritoneum"
      ],
      "correctIndex": 1,
      "explanation": "The myometrium is the thick smooth-muscle layer that contracts in labor. The endometrium is the shedding lining and the perimetrium is the outer serosa.",
      "tags": [
        "w6-uterus"
      ]
    },
    {
      "id": "w6-endocrine-locate-q1",
      "competencyId": "w6-endocrine-locate",
      "type": "mcq",
      "dok": 1,
      "q": "Which gland sits in the sella turcica below the hypothalamus?",
      "options": [
        "Thyroid",
        "Pituitary",
        "Adrenal",
        "Pineal"
      ],
      "correctIndex": 1,
      "explanation": "The pituitary sits in the sella turcica of the sphenoid bone. The thyroid is in the neck, the adrenals cap the kidneys, and the pineal is in the brain roof.",
      "tags": [
        "w6-endocrine-locate"
      ]
    },
    {
      "id": "w6-pituitary-q1",
      "competencyId": "w6-pituitary",
      "type": "mcq",
      "dok": 2,
      "q": "The posterior pituitary is made of which tissue?",
      "options": [
        "Glandular epithelium",
        "Nervous tissue",
        "Cartilage",
        "Smooth muscle"
      ],
      "correctIndex": 1,
      "explanation": "The posterior lobe (neurohypophysis) is nervous tissue, an extension of the hypothalamus. The anterior lobe is glandular epithelial tissue.",
      "tags": [
        "w6-pituitary"
      ]
    },
    {
      "id": "w6-thyroid-parathyroid-q1",
      "competencyId": "w6-thyroid-parathyroid",
      "type": "mcq",
      "dok": 2,
      "q": "Where are the parathyroid glands located?",
      "options": [
        "In front of the trachea",
        "On the posterior surface of the thyroid",
        "In the mediastinum",
        "On top of each kidney"
      ],
      "correctIndex": 1,
      "explanation": "The four parathyroid glands sit on the back of the thyroid lobes. The thymus is in the mediastinum and the adrenals cap the kidneys.",
      "tags": [
        "w6-thyroid-parathyroid"
      ]
    }
  ],
  "stretch": [
    {
      "id": "w6-urine-path-s1",
      "competencyId": "w6-urine-path",
      "type": "stretch",
      "dok": 3,
      "q": "Follow a drop of fluid from the glomerulus all the way out of the body, naming the nephron segments and then the drainage path.",
      "a": "Glomerular capsule, proximal convoluted tubule, nephron loop, distal convoluted tubule, collecting duct, minor and major calyces, renal pelvis, ureter, bladder, urethra.",
      "tags": [
        "w6-urine-path",
        "w6-nephron-parts"
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
