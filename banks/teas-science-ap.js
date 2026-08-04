window.BANKS = window.BANKS || {};
window.BANKS["teas-science-ap"] = {
  exam: "teas",
  section: "science",
  questions: [

    {
      id: "TSA-001",
      sub: "Human Anatomy & Physiology",
      type: "ms",
      q: "Select all that apply. Which of the following statements about body planes and body cavities are correct?",
      choices: [
        "A transverse plane divides the body into superior and inferior portions.",
        "A sagittal plane divides the body into anterior and posterior portions.",
        "The brain and the spinal cord lie within the dorsal body cavity.",
        "The heart lies within the mediastinum of the thoracic cavity.",
        "The diaphragm separates the abdominal cavity from the pelvic cavity.",
        "The urinary bladder lies within the thoracic cavity."
      ],
      answer: [0, 2, 3],
      rationale: {
        correct: "A transverse (horizontal) cut separates superior from inferior; the dorsal cavity is made up of the cranial cavity (brain) and the vertebral cavity (spinal cord); and the heart sits in the mediastinum, the region of the thoracic cavity between the lungs.",
        wrong: [
          null,
          "A sagittal plane divides the body into left and right portions. The plane that separates anterior from posterior is the frontal (coronal) plane.",
          null,
          null,
          "The diaphragm is the muscular floor of the thoracic cavity, so it separates thoracic from abdominal. The abdominal and pelvic cavities are continuous with each other and are named together as the abdominopelvic cavity.",
          "The urinary bladder lies in the pelvic cavity, the inferior portion of the abdominopelvic cavity. The thoracic cavity holds the lungs, heart, esophagus, and trachea."
        ]
      },
      diff: 3,
      secs: 100
    },

    {
      id: "TSA-002",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "During labor, stretching of the cervix triggers oxytocin release, and oxytocin strengthens uterine contractions, which stretch the cervix still further. Which statement best describes this control mechanism?",
      choices: [
        "Negative feedback, because the response reverses the original stimulus",
        "Positive feedback, because the response intensifies the original stimulus",
        "Negative feedback, because a hormone carries the signal to the effector",
        "Positive feedback, because a receptor detects the change before responding"
      ],
      answer: 1,
      rationale: {
        correct: "In positive feedback the response pushes the variable further in the same direction as the stimulus; cervical stretch causes oxytocin release, which increases contraction strength and therefore increases stretch, escalating the loop until delivery ends it.",
        wrong: [
          "Negative feedback opposes and reverses a change, as in thermoregulation or blood glucose control. Here the change is amplified, not reversed.",
          null,
          "Whether a hormone is involved does not determine feedback type. Many negative feedback loops are hormonal (insulin, calcitonin), and this loop is hormonal but positive.",
          "Every feedback loop, positive or negative, begins with a receptor detecting a change. That step does not distinguish the two, so the reasoning is wrong even though the label is right."
        ]
      },
      diff: 2,
      secs: 70
    },

    {
      id: "TSA-003",
      sub: "Human Anatomy & Physiology",
      type: "order",
      q: "Place the following events in the order that a drop of blood travels through the heart and lungs, beginning as it returns from the body.",
      items: [
        "Oxygen-rich blood returns through the pulmonary veins into the left atrium",
        "Blood passes the tricuspid valve into the right ventricle",
        "Blood passes the mitral valve into the left ventricle and leaves through the aorta",
        "Blood enters the right atrium from the superior and inferior venae cavae",
        "Blood is pumped through the pulmonary valve into the pulmonary arteries and on to the lungs"
      ],
      answer: [3, 1, 4, 0, 2],
      rationale: {
        correct: "Oxygen-poor blood returns from the body to the right atrium, crosses the tricuspid valve into the right ventricle, and is pumped through the pulmonary valve into the pulmonary arteries to the lungs; oxygenated blood returns by the pulmonary veins to the left atrium, crosses the mitral valve into the left ventricle, and is ejected into the aorta. The short version is body, right, lungs, left, body: the right side always handles oxygen-poor blood and the left side oxygen-rich blood."
      },
      diff: 1,
      secs: 90
    },

    {
      id: "TSA-004",
      sub: "Human Anatomy & Physiology",
      type: "hotspot",
      q: "The diagram shows an anterior view of the four chambers of the heart. Click the chamber that contains the sinoatrial (SA) node, the heart's natural pacemaker.",
      svg: "<svg viewBox='0 0 400 260' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Schematic anterior view of the four chambers of the heart'><rect class='hs-bg' x='0' y='0' width='400' height='260'/><text class='hs-label' x='12' y='22'>Anterior (front) view of the heart</text><text class='hs-label' x='12' y='52'>Patient's right</text><text class='hs-label' x='286' y='52'>Patient's left</text><text class='hs-label' x='12' y='104'>Atria</text><text class='hs-label' x='12' y='190'>Ventricles</text><rect class='hs-part' x='120' y='66' width='76' height='62'/><rect class='hs-part' x='204' y='66' width='76' height='62'/><rect class='hs-part' x='120' y='140' width='76' height='86'/><rect class='hs-part' x='204' y='140' width='76' height='86'/></svg>",
      regions: [
        { id: "r1", label: "Right atrium", shape: "rect", x: 120, y: 66, w: 76, h: 62 },
        { id: "r2", label: "Left atrium", shape: "rect", x: 204, y: 66, w: 76, h: 62 },
        { id: "r3", label: "Right ventricle", shape: "rect", x: 120, y: 140, w: 76, h: 86 },
        { id: "r4", label: "Left ventricle", shape: "rect", x: 204, y: 140, w: 76, h: 86 }
      ],
      answer: "r1",
      rationale: {
        correct: "The SA node sits in the wall of the right atrium near the opening of the superior vena cava; it depolarizes spontaneously about 60 to 100 times per minute and sets the intrinsic heart rate, then passes the impulse to the AV node, bundle of His, bundle branches, and Purkinje fibers. Remember that in an anterior view the patient's right side appears on your left, so the right atrium is the upper chamber on the left of the image; the left atrium receives blood from the lungs, and both ventricles are pumping chambers that receive the impulse only after the atria contract."
      },
      diff: 2,
      secs: 75
    },

    {
      id: "TSA-005",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "Which vessel carries oxygen-poor blood away from the heart?",
      choices: [
        "Aorta",
        "Pulmonary artery",
        "Pulmonary vein",
        "Superior vena cava"
      ],
      answer: 1,
      rationale: {
        correct: "Arteries are defined by direction, not oxygen content: they carry blood away from the heart. The pulmonary artery is the one exception to the usual oxygen pattern, carrying oxygen-poor blood from the right ventricle to the lungs.",
        wrong: [
          "The aorta also carries blood away from the heart, but it leaves the left ventricle carrying oxygen-rich blood to the systemic circuit.",
          null,
          "The pulmonary vein is the mirror-image exception: it is the only vein that carries oxygen-rich blood, and it moves that blood toward the heart, not away from it.",
          "The superior vena cava does carry oxygen-poor blood, but it returns that blood toward the heart into the right atrium rather than carrying it away."
        ]
      },
      diff: 1,
      secs: 60
    },

    {
      id: "TSA-006",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "Oxygen moves from inhaled air into the bloodstream across the wall of which structure?",
      choices: [
        "Alveolus",
        "Bronchiole",
        "Trachea",
        "Visceral pleura"
      ],
      answer: 0,
      rationale: {
        correct: "Alveoli are thin-walled air sacs wrapped in pulmonary capillaries, and this one-cell-thick barrier plus their enormous combined surface area makes them the site of external respiration, where oxygen diffuses into blood and carbon dioxide diffuses out.",
        wrong: [
          null,
          "Bronchioles are small conducting airways that deliver air to the alveolar ducts. They move air but are too thick-walled and lack the capillary network for gas exchange.",
          "The trachea is a cartilage-reinforced conducting tube that warms, filters, and moistens air on its way to the bronchi; no exchange occurs there.",
          "The visceral pleura is the serous membrane covering the lung surface. It reduces friction during breathing but is not an exchange surface."
        ]
      },
      diff: 1,
      secs: 50
    },

    {
      id: "TSA-007",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "A patient having a panic attack hyperventilates for several minutes and exhales far more carbon dioxide than normal. Given the buffer reaction CO2 + H2O <-> H2CO3 <-> HCO3- + H+, which change is expected?",
      choices: [
        "Carbonic acid falls, hydrogen ions fall, and respiratory alkalosis develops",
        "Carbonic acid rises, hydrogen ions rise, and respiratory acidosis develops",
        "Carbonic acid falls, hydrogen ions rise, and respiratory acidosis develops",
        "Carbonic acid rises, hydrogen ions fall, and respiratory alkalosis develops"
      ],
      answer: 0,
      rationale: {
        correct: "Blowing off carbon dioxide removes a reactant, so the equilibrium shifts to the left: bicarbonate combines with free hydrogen ions to re-form carbonic acid, hydrogen ion concentration falls, and blood pH rises above 7.45, which is respiratory alkalosis.",
        wrong: [
          null,
          "This is the pattern for hypoventilation or CO2 retention, which drives the reaction right, raises hydrogen ions, and lowers pH below 7.35 (respiratory acidosis). Hyperventilation does the opposite.",
          "Carbonic acid and hydrogen ions move together in this buffer, because H2CO3 dissociates into HCO3- and H+. They cannot fall and rise at the same time.",
          "Same coupling problem in reverse: if carbonic acid rose, hydrogen ions would rise with it and pH would fall, producing acidosis rather than alkalosis."
        ]
      },
      diff: 3,
      secs: 90
    },

    {
      id: "TSA-008",
      sub: "Human Anatomy & Physiology",
      type: "order",
      q: "Place the following nephron structures in the order that filtrate passes through them.",
      items: [
        "Loop of Henle",
        "Collecting duct",
        "Glomerular (Bowman's) capsule",
        "Distal convoluted tubule",
        "Proximal convoluted tubule"
      ],
      answer: [2, 4, 0, 3, 1],
      rationale: {
        correct: "Blood pressure forces filtrate out of the glomerulus into the glomerular (Bowman's) capsule, which empties into the proximal convoluted tubule, the site of most reabsorption. The filtrate then descends and ascends the loop of Henle, which builds the medullary salt gradient, passes the distal convoluted tubule where aldosterone fine-tunes sodium and potassium, and finally enters the collecting duct, where ADH controls how much water is reclaimed before the fluid drains to the renal pelvis and ureter."
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TSA-009",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "A healthy adult's urine contains no glucose, but a patient's urinalysis is positive for glucose. Which explanation is most likely?",
      choices: [
        "The glomerulus has stopped filtering glucose out of the blood plasma",
        "The filtered glucose load exceeded the reabsorption capacity of the tubules",
        "The loop of Henle reabsorbed water but left the glucose behind",
        "Tubular secretion added glucose to the filtrate in the distal tubule"
      ],
      answer: 1,
      rationale: {
        correct: "Glucose is small enough to be filtered freely at the glomerulus, and normally 100 percent of it is reabsorbed by carriers in the proximal convoluted tubule; those carriers have a transport maximum, so when blood glucose is high enough the excess stays in the filtrate and appears in the urine, the classic finding in uncontrolled diabetes.",
        wrong: [
          "Failing to filter glucose would keep it in the blood and out of the urine, the opposite of the finding. Glucose in the filtrate is normal; glucose in the final urine is not.",
          null,
          "Water reabsorption in the descending limb concentrates the filtrate but does not by itself cause glucose to appear, because glucose was already removed upstream in the proximal tubule.",
          "Secretion moves hydrogen ions, potassium, ammonia, and drugs from blood into the tubule. Glucose is a nutrient the kidney works to keep, so it is reabsorbed rather than secreted."
        ]
      },
      diff: 3,
      secs: 85
    },

    {
      id: "TSA-010",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "Which part of a neuron conducts the nerve impulse away from the cell body toward the synapse?",
      choices: [
        "Dendrite",
        "Cell body",
        "Axon",
        "Myelin sheath"
      ],
      answer: 2,
      rationale: {
        correct: "The axon is the single long process that carries the action potential away from the soma to the axon terminals, where neurotransmitter is released into the synaptic cleft.",
        wrong: [
          "Dendrites are the branched receiving processes; they carry graded signals toward the cell body, which is the opposite direction.",
          "The cell body (soma) contains the nucleus and integrates incoming signals, but it is the origin of the impulse rather than the structure that conducts it onward.",
          null,
          "The myelin sheath is an insulating wrapping formed by Schwann cells or oligodendrocytes. It speeds conduction by forcing saltatory jumps between nodes of Ranvier, but the axon underneath does the conducting."
        ]
      },
      diff: 1,
      secs: 50
    },

    {
      id: "TSA-011",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "A stimulus depolarizes a neuron from its resting potential. At approximately which membrane potential is threshold reached, so that an action potential fires?",
      choices: [
        "-90 mV",
        "-70 mV",
        "-55 mV",
        "+30 mV"
      ],
      answer: 2,
      rationale: {
        correct: "Threshold for a typical mammalian neuron is about -55 mV; once depolarization reaches that value, voltage-gated sodium channels open all at once and the all-or-none action potential fires.",
        wrong: [
          "About -90 mV is a hyperpolarized value, more negative than rest. A membrane moving toward -90 mV is becoming less likely to fire, not more.",
          "About -70 mV is the resting membrane potential maintained by the sodium-potassium pump. It is the starting point, not the firing point.",
          null,
          "About +30 mV is the peak of the action potential, reached after threshold is crossed and sodium rushes in. It is the result of firing rather than the trigger for it."
        ]
      },
      diff: 3,
      secs: 60
    },

    {
      id: "TSA-012",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "A nurse touches a hot instrument and jerks her hand back before she consciously feels pain. Which neurons carry the signal from the spinal cord out to the muscles of her arm?",
      choices: [
        "Afferent neurons of the peripheral nervous system",
        "Efferent neurons of the peripheral nervous system",
        "Interneurons within the central nervous system",
        "Autonomic motor neurons of the sympathetic division"
      ],
      answer: 1,
      rationale: {
        correct: "Efferent (motor) neurons exit the CNS and travel in peripheral nerves to effectors; in a withdrawal reflex the somatic motor neurons leave the ventral horn of the spinal cord and command the skeletal muscle to contract. Afferent arrives, efferent exits.",
        wrong: [
          "Afferent (sensory) neurons carry the heat and pain information in the opposite direction, from the skin receptors toward the spinal cord.",
          null,
          "Interneurons do participate, but they sit entirely inside the spinal cord connecting the sensory input to the motor output. They never leave the CNS to reach the arm.",
          "The sympathetic division is autonomic and targets smooth muscle, cardiac muscle, and glands. Skeletal muscle is controlled by the somatic division, so this pathway is not involved in the withdrawal."
        ]
      },
      diff: 3,
      secs: 75
    },

    {
      id: "TSA-013",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "Blood glucose rises sharply after a meal. Which hormone is secreted, and by which pancreatic cells?",
      choices: [
        "Glucagon, from the alpha cells",
        "Glucagon, from the beta cells",
        "Insulin, from the alpha cells",
        "Insulin, from the beta cells"
      ],
      answer: 3,
      rationale: {
        correct: "Beta cells of the pancreatic islets release insulin when blood glucose rises; insulin drives glucose into body cells and promotes glycogen storage in the liver, lowering blood glucose back toward the set point in a negative feedback loop.",
        wrong: [
          "Alpha cells and glucagon are the correct pairing, but glucagon is the fasting hormone: it raises blood glucose by breaking glycogen down. It is released when glucose falls, not when it rises.",
          "Both halves are wrong. Glucagon comes from alpha cells, and it is released in response to low blood glucose.",
          "Insulin is the right hormone for this stimulus, but it is produced by beta cells; alpha cells make glucagon.",
          null
        ]
      },
      diff: 1,
      secs: 60
    },

    {
      id: "TSA-014",
      sub: "Human Anatomy & Physiology",
      type: "ms",
      q: "Select all that apply. Which hormones are produced by the anterior pituitary gland?",
      choices: [
        "Thyroid-stimulating hormone (TSH)",
        "Adrenocorticotropic hormone (ACTH)",
        "Antidiuretic hormone (ADH)",
        "Oxytocin",
        "Thyroxine (T4)",
        "Aldosterone"
      ],
      answer: [0, 1],
      rationale: {
        correct: "The anterior pituitary manufactures the tropic hormones that command other glands, including TSH, which stimulates the thyroid, and ACTH, which stimulates the adrenal cortex to release cortisol. Its other products are GH, FSH, LH, and prolactin.",
        wrong: [
          null,
          null,
          "ADH is synthesized in the hypothalamus and travels down neuron axons to the posterior pituitary, which only stores and releases it. The posterior lobe manufactures no hormones of its own.",
          "Oxytocin, like ADH, is made in the hypothalamus and merely stored and released by the posterior pituitary.",
          "Thyroxine is made by the thyroid gland itself. Confusing a tropic hormone (TSH) with the target gland's hormone (T4) is the single most common endocrine error.",
          "Aldosterone is a mineralocorticoid produced by the adrenal cortex. The anterior pituitary's role is upstream: ACTH stimulates that cortex."
        ]
      },
      diff: 3,
      secs: 95
    },

    {
      id: "TSA-015",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "Which substance is released by one immune cell to signal and activate another immune cell?",
      choices: [
        "Antibody",
        "Antigen",
        "Cytokine",
        "Histamine"
      ],
      answer: 2,
      rationale: {
        correct: "Cytokines are the chemical messengers of the immune system: interleukins and interferons released by one leukocyte bind receptors on another and switch on its activity, which is how helper T cells recruit B cells and cytotoxic T cells.",
        wrong: [
          "Antibodies are immunoglobulins secreted by plasma B cells. They bind antigens on pathogens rather than delivering activating signals between immune cells.",
          "An antigen is a foreign marker that provokes an immune response. It comes from the pathogen, not from one immune cell signaling another.",
          null,
          "Histamine is released by basophils and mast cells, but it acts on blood vessels, causing vasodilation and increased permeability that produce redness and swelling, rather than activating another immune cell."
        ]
      },
      diff: 1,
      secs: 55
    },

    {
      id: "TSA-016",
      sub: "Human Anatomy & Physiology",
      type: "ms",
      q: "Select all that apply. Which characteristics describe adaptive (specific) immunity?",
      choices: [
        "It is directed at specific antigens on specific pathogens",
        "It produces memory cells that make a second exposure faster and stronger",
        "It depends on lymphocytes such as B cells and T cells",
        "It responds identically to every pathogen and acts within minutes",
        "It consists of physical barriers such as intact skin and mucous membranes",
        "It is fully functional at birth and requires no prior exposure"
      ],
      answer: [0, 1, 2],
      rationale: {
        correct: "Adaptive immunity is antigen-specific, lymphocyte-based, and has memory: B cells become antibody-secreting plasma cells while T cells mature in the thymus, and the memory cells left behind are what make vaccination work.",
        wrong: [
          null,
          null,
          null,
          "Reacting the same way to everything, and doing it within minutes, describes innate immunity. Adaptive immunity is slower on first exposure precisely because it must select and clone the matching lymphocytes.",
          "Skin, mucous membranes, stomach acid, and lysozyme are the first line of innate defense. They are nonspecific barriers, not adaptive responses.",
          "Innate immunity is the part that is fully functional at birth. Adaptive immunity must be built through exposure to antigens or through vaccination."
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TSA-017",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "Which statement correctly identifies the source of bile and its action on dietary fat?",
      choices: [
        "The gallbladder produces bile, which emulsifies fat into smaller droplets",
        "The pancreas produces bile, which chemically digests fat into fatty acids",
        "The liver produces bile, which chemically digests fat into fatty acids and glycerol",
        "The liver produces bile, which emulsifies fat into smaller droplets"
      ],
      answer: 3,
      rationale: {
        correct: "Bile is made by the liver and released into the duodenum, where its salts emulsify fat, physically breaking large globules into many small droplets so that lipase has far more surface area to work on.",
        wrong: [
          "The gallbladder only stores and concentrates bile between meals and squeezes it out when fatty chyme arrives; it does not manufacture it.",
          "The pancreas supplies lipase, protease, amylase, and bicarbonate, but not bile. Its lipase performs the chemical step that follows emulsification.",
          "The organ is right but the action is wrong: emulsification is mechanical. Bile contains no digestive enzymes, so it cannot break the chemical bonds in a triglyceride.",
          null
        ]
      },
      diff: 3,
      secs: 75
    },

    {
      id: "TSA-018",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "Shortening of a sarcomere during skeletal muscle contraction results directly from which event?",
      choices: [
        "Actin and myosin filaments each become shorter",
        "Myosin cross-bridges pull actin filaments toward the center of the sarcomere",
        "The sarcoplasmic reticulum reabsorbs calcium and the cross-bridges release",
        "The Z discs break down so that adjacent sarcomeres fuse together"
      ],
      answer: 1,
      rationale: {
        correct: "In the sliding filament model, calcium exposes binding sites on actin, myosin heads attach and pivot using ATP, and the thin filaments are dragged toward the middle of the sarcomere, pulling the Z discs closer together.",
        wrong: [
          "Neither filament changes length. The sarcomere shortens only because the filaments slide past one another, which is exactly why the model carries that name.",
          null,
          "Pumping calcium back into the sarcoplasmic reticulum ends cross-bridge cycling and causes relaxation, the opposite of contraction.",
          "Z discs define the boundaries of each sarcomere and stay intact; they are drawn closer together, not destroyed."
        ]
      },
      diff: 1,
      secs: 60
    },

    {
      id: "TSA-019",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "In osteoporosis, bone mass is lost faster than it is replaced. Which cellular imbalance produces this loss?",
      choices: [
        "Osteoblasts deposit bone matrix faster than osteoclasts resorb it",
        "Osteoclasts resorb bone matrix faster than osteoblasts deposit it",
        "Osteocytes divide rapidly and crowd out the mineralized matrix",
        "Chondrocytes replace the mineralized matrix with flexible cartilage"
      ],
      answer: 1,
      rationale: {
        correct: "The suffixes carry the meaning: -blast means building, so osteoblasts deposit new matrix, and -clast means breaking, so osteoclasts carve bone away. Osteoporosis is net resorption, typically because osteoblast activity declines with age or falling estrogen while osteoclast activity continues at its usual rate.",
        wrong: [
          "This is the balance of normal growth and healing, in which deposition outpaces resorption and bone mass increases rather than falls.",
          null,
          "Osteocytes are mature bone cells trapped in lacunae that maintain the matrix; they do not divide and multiply through the bone.",
          "Chondrocytes build cartilage, and during development the process runs the other direction, with cartilage models being replaced by bone."
        ]
      },
      diff: 2,
      secs: 70
    },

    {
      id: "TSA-020",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "A shallow scrape removes only the outermost layer of a patient's skin, and the area does not bleed. Which statement explains this?",
      choices: [
        "The epidermis contains no blood vessels; the vessels lie in the dermis beneath it",
        "The dermis contains no blood vessels; the vessels lie in the epidermis above it",
        "Blood vessels in the epidermis constrict instantly and seal the injury",
        "Skin is avascular throughout and receives oxygen only by diffusion from the air"
      ],
      answer: 0,
      rationale: {
        correct: "The epidermis is avascular stratified squamous epithelium nourished by diffusion from below, so an injury confined to it cannot bleed; bleeding begins only when the wound reaches the vascular connective tissue of the dermis.",
        wrong: [
          null,
          "This reverses the layers. The dermis is the vascular layer, holding blood vessels, sensory nerve endings, hair follicles, and glands.",
          "There are no vessels in the epidermis to constrict. Vasoconstriction and vasodilation occur in dermal vessels and are used for thermoregulation.",
          "Only the epidermis is avascular. The dermis and hypodermis are richly supplied, which is why deeper wounds bleed freely."
        ]
      },
      diff: 2,
      secs: 65
    },

    {
      id: "TSA-021",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "A surge of which hormone triggers ovulation at about day 14 of the menstrual cycle?",
      choices: [
        "Estrogen",
        "Follicle-stimulating hormone",
        "Luteinizing hormone",
        "Progesterone"
      ],
      answer: 2,
      rationale: {
        correct: "A sharp mid-cycle surge of luteinizing hormone from the anterior pituitary ruptures the mature follicle and releases the oocyte, then converts the remaining follicle into the corpus luteum.",
        wrong: [
          "Rising estrogen from the growing follicle rebuilds the endometrium and is what provokes the LH surge, but estrogen itself does not rupture the follicle.",
          "FSH stimulates follicle development earlier in the cycle. Assuming FSH triggers ovulation is the most common error on this item; its job ends before the release of the egg.",
          null,
          "Progesterone is secreted by the corpus luteum after ovulation to maintain the endometrium. It rises in the luteal phase, following ovulation rather than causing it."
        ]
      },
      diff: 1,
      secs: 55
    },

    {
      id: "TSA-022",
      sub: "Biology",
      type: "mc",
      q: "Which class of biological macromolecules is built from monomers that each contain an amine group and a carboxyl group?",
      choices: [
        "Carbohydrates",
        "Lipids",
        "Nucleic acids",
        "Proteins"
      ],
      answer: 3,
      rationale: {
        correct: "Proteins are polymers of amino acids, and every amino acid has the same backbone: a central carbon bonded to an amine group (-NH2), a carboxyl group (-COOH), a hydrogen, and a variable R group. This is also why proteins contain nitrogen while carbohydrates and lipids do not.",
        wrong: [
          "Carbohydrates are built from monosaccharides such as glucose and contain only carbon, hydrogen, and oxygen in roughly a 1:2:1 ratio, with no nitrogen and no amine group.",
          "Lipids are assembled from glycerol and fatty acids. Fatty acids do carry a carboxyl group, but they have no amine group and lipids are not built from repeating monomers in the same way.",
          "Nucleic acids are polymers of nucleotides, each made of a five-carbon sugar, a phosphate group, and a nitrogenous base. They contain nitrogen and phosphorus but not the amine-plus-carboxyl pairing.",
          null
        ]
      },
      diff: 1,
      secs: 55
    },

    {
      id: "TSA-023",
      sub: "Biology",
      type: "mc",
      q: "Which organelle assembles amino acids into a protein by reading a messenger RNA transcript?",
      choices: [
        "Golgi apparatus",
        "Lysosome",
        "Nucleus",
        "Ribosome"
      ],
      answer: 3,
      rationale: {
        correct: "Translation happens at the ribosome, which reads mRNA three bases at a time as codons while tRNA molecules deliver the matching amino acids and join them with peptide bonds. Ribosomes float free in the cytoplasm or stud the rough endoplasmic reticulum.",
        wrong: [
          "The Golgi apparatus receives finished proteins and modifies, sorts, and packages them for shipping. It works after translation, not during it.",
          "Lysosomes contain hydrolytic enzymes that digest worn organelles and engulfed material. They break proteins down rather than building them.",
          "The nucleus houses the DNA and is where transcription produces the mRNA, but the mRNA must exit to a ribosome before any amino acids are linked.",
          null
        ]
      },
      diff: 1,
      secs: 50
    },

    {
      id: "TSA-024",
      sub: "Biology",
      type: "mc",
      q: "Which group of structures makes up the cytoskeleton of a eukaryotic cell?",
      choices: [
        "Microtubules, microfilaments, and intermediate filaments",
        "Phospholipids, cholesterol, and membrane glycoproteins",
        "Cellulose, pectin, and lignin",
        "Ribosomes, transfer RNA, and messenger RNA"
      ],
      answer: 0,
      rationale: {
        correct: "The cytoskeleton is a protein scaffold of microtubules, microfilaments (actin), and intermediate filaments that gives the cell its shape, anchors organelles, moves materials internally, and pulls chromosomes apart during cell division.",
        wrong: [
          null,
          "These are the components of the plasma membrane, the selectively permeable boundary of the cell, not the internal protein framework.",
          "These are rigid cell wall materials found in plants. Animal cells have no cell wall, and a wall is external support rather than an internal cytoskeleton.",
          "These are the machinery of protein synthesis. They build the proteins the cell needs but are not the structural filaments themselves."
        ]
      },
      diff: 2,
      secs: 60
    },

    {
      id: "TSA-025",
      sub: "Biology",
      type: "mc",
      q: "A red blood cell is placed in a solution with a higher solute concentration than its cytoplasm. Which process occurs, and what happens to the cell?",
      choices: [
        "Osmosis moves water out of the cell, and the cell shrinks",
        "Osmosis moves water into the cell, and the cell swells",
        "Active transport moves solute out of the cell, and the cell swells",
        "Facilitated diffusion moves solute into the cell, and the cell shrinks"
      ],
      answer: 0,
      rationale: {
        correct: "The surrounding fluid is hypertonic, so water moves by osmosis from the higher water concentration inside the cell to the lower water concentration outside, and the cell shrivels (crenates).",
        wrong: [
          null,
          "Water entering and swelling the cell is what happens in a hypotonic solution, where the outside solute concentration is lower. Here the gradient runs the other way.",
          "Active transport requires ATP to push solute against its gradient, and it is not what drives this change; osmosis of water, which is passive, is responsible.",
          "Facilitated diffusion carries solutes such as glucose through membrane proteins down their gradient. The cell membrane is not freely permeable to most solutes here, and water movement, not solute movement, causes the shrinking."
        ]
      },
      diff: 2,
      secs: 70
    },

    {
      id: "TSA-026",
      sub: "Biology",
      type: "mc",
      q: "A human cell containing 46 chromosomes completes meiosis. How many daughter cells result, and how many chromosomes does each contain?",
      choices: [
        "Two cells, each with 46 chromosomes",
        "Two cells, each with 23 chromosomes",
        "Four cells, each with 46 chromosomes",
        "Four cells, each with 23 chromosomes"
      ],
      answer: 3,
      rationale: {
        correct: "Meiosis is two consecutive divisions after a single round of DNA replication, so one diploid cell (2n = 46) yields four haploid gametes with 23 chromosomes each, and crossing over in prophase I makes them genetically unique.",
        wrong: [
          "Two identical diploid cells is the outcome of mitosis, which produces clones for growth and repair rather than gametes.",
          "Halving the chromosome number is correct for meiosis, but stopping at two cells accounts for only meiosis I; meiosis II divides both cells again.",
          "Producing four cells is correct, but the chromosome number cannot stay at 46. If gametes were diploid, fertilization would double the count in every generation.",
          null
        ]
      },
      diff: 1,
      secs: 65
    },

    {
      id: "TSA-027",
      sub: "Biology",
      type: "mc",
      q: "Two parents are each heterozygous (Bb) for a recessive genetic condition. What is the probability that a child of theirs will express the condition?",
      choices: [
        "0%",
        "25%",
        "50%",
        "75%"
      ],
      answer: 1,
      rationale: {
        correct: "A Bb by Bb Punnett square gives BB, Bb, Bb, and bb, so one of the four boxes is homozygous recessive; a recessive trait is expressed only when both alleles are recessive, giving a 25 percent chance and the familiar 3:1 phenotype ratio.",
        wrong: [
          "Zero percent would be correct only if at least one parent were homozygous dominant (BB). Two carriers can each pass the recessive allele.",
          null,
          "Fifty percent is the fraction of offspring that are heterozygous carriers (Bb), and it is also the recessive-phenotype result of a Bb by bb cross. Carriers do not express a recessive condition.",
          "Seventy-five percent is the share showing the dominant phenotype (BB plus Bb), which is the complement of the answer being asked for."
        ]
      },
      diff: 2,
      secs: 70
    },

    {
      id: "TSA-028",
      sub: "Biology",
      type: "mc",
      q: "One strand of a DNA molecule has the base sequence A-T-G-C-C-A. What is the sequence of the complementary DNA strand?",
      choices: [
        "T-A-C-G-G-T",
        "U-A-C-G-G-U",
        "A-T-G-C-C-A",
        "T-A-G-C-C-T"
      ],
      answer: 0,
      rationale: {
        correct: "In DNA, adenine pairs with thymine and guanine pairs with cytosine, so reading A-T-G-C-C-A base by base gives T-A-C-G-G-T. If this strand were transcribed instead, the mRNA would read U-A-C-G-G-U because RNA substitutes uracil for thymine.",
        wrong: [
          null,
          "Uracil belongs to RNA, not DNA. This is the correct pairing pattern but with the wrong base, which is the classic DNA-versus-RNA slip.",
          "This simply repeats the original strand. A complementary strand must pair each base with its partner, not copy it.",
          "The A-T pairs here are right, but guanine has been paired with guanine and cytosine with cytosine. Purines pair only with pyrimidines: A with T, G with C."
        ]
      },
      diff: 2,
      secs: 70
    },

    {
      id: "TSA-029",
      sub: "Biology",
      type: "mc",
      q: "Which stage of aerobic cellular respiration requires oxygen, and where in the cell does that stage occur?",
      choices: [
        "Glycolysis, in the cytoplasm",
        "The Krebs cycle, in the mitochondrial matrix",
        "The electron transport chain, on the inner mitochondrial membrane",
        "The light reactions, in the thylakoid membrane of a chloroplast"
      ],
      answer: 2,
      rationale: {
        correct: "The electron transport chain is embedded in the inner mitochondrial membrane, and oxygen serves as the final electron acceptor there, combining with electrons and hydrogen ions to form water while the chain generates the bulk of the roughly 36 ATP per glucose.",
        wrong: [
          "Glycolysis does occur in the cytoplasm, but it is anaerobic: it splits glucose into two pyruvate molecules for a net 2 ATP without any oxygen.",
          "The Krebs cycle does run in the mitochondrial matrix, but it does not consume oxygen directly; it strips electrons onto NADH and FADH2 and releases carbon dioxide.",
          null,
          "The light reactions belong to photosynthesis, not respiration, and they release oxygen rather than requiring it."
        ]
      },
      diff: 3,
      secs: 80
    },

    {
      id: "TSA-030",
      sub: "Biology",
      type: "mc",
      q: "In the taxonomic hierarchy used to classify living organisms, which of the following categories is the broadest?",
      choices: [
        "Class",
        "Family",
        "Kingdom",
        "Order"
      ],
      answer: 2,
      rationale: {
        correct: "The hierarchy runs domain, kingdom, phylum, class, order, family, genus, species, from most inclusive to most specific, so of the four categories listed, kingdom sits highest and contains the largest and most varied group of organisms.",
        wrong: [
          "Class sits below phylum and above order, so it is narrower than kingdom.",
          "Family is one of the more specific levels, just above genus, and holds far fewer organisms than a kingdom.",
          null,
          "Order sits between class and family, making it narrower than both class and kingdom."
        ]
      },
      diff: 1,
      secs: 50
    },

    {
      id: "TSA-031",
      sub: "Biology",
      type: "mc",
      q: "An embryonic stem cell can differentiate into cells of all three germ layers but cannot form placental tissue. Which term describes this cell?",
      choices: [
        "Multipotent",
        "Pluripotent",
        "Totipotent",
        "Unipotent"
      ],
      answer: 1,
      rationale: {
        correct: "A pluripotent cell can become any cell of the body by way of the three germ layers (ectoderm, which forms skin and the nervous system; mesoderm, which forms muscle, bone, blood, and kidneys; and endoderm, which forms the linings of the digestive and respiratory tracts), but it has lost the ability to form extraembryonic tissue such as the placenta.",
        wrong: [
          "A multipotent cell is more restricted still, giving rise only to a related family of cell types, as a hematopoietic stem cell produces the various blood cells.",
          null,
          "A totipotent cell, such as the zygote and its earliest divisions, can form every cell type including the placenta. The inability to form placental tissue is exactly what rules this out.",
          "A unipotent cell can produce only one cell type, such as a skin stem cell in the stratum basale generating more keratinocytes."
        ]
      },
      diff: 3,
      secs: 80
    }

  ]
};
