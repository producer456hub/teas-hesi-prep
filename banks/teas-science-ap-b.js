window.BANKS = window.BANKS || {};
window.BANKS["teas-science-ap-b"] = {
  exam: "teas",
  section: "science",
  form: "B",
  questions: [

    {
      id: "TSB-001",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "In standard anatomical position, which term correctly completes this sentence: 'The elbow is ______ to the wrist.'",
      choices: [
        "Distal",
        "Proximal",
        "Superficial",
        "Medial"
      ],
      answer: 1,
      rationale: {
        correct: "Proximal means nearer to the point where a limb attaches to the trunk, so the elbow, being closer to the shoulder, is proximal to the wrist; read the other direction, the wrist is distal to the elbow.",
        wrong: [
          "Distal means farther from the trunk attachment. That term describes the wrist relative to the elbow, which is the reverse of the sentence given.",
          null,
          "Superficial means nearer the body surface, and its partner term is deep. Both the elbow and the wrist are superficial structures, so this pair does not distinguish them.",
          "Medial means nearer the midline of the body, and its partner is lateral. Medial and lateral describe side-to-side position, not position along the length of a limb."
        ]
      },
      diff: 1,
      secs: 45
    },

    {
      id: "TSB-002",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "A patient's circulating thyroid hormone (T4) level rises well above normal. What happens to TSH secretion by the anterior pituitary, and what kind of feedback is this?",
      choices: [
        "TSH secretion decreases, an example of negative feedback",
        "TSH secretion increases, an example of negative feedback",
        "TSH secretion decreases, an example of positive feedback",
        "TSH secretion increases, an example of positive feedback"
      ],
      answer: 0,
      rationale: {
        correct: "Rising T4 inhibits both the hypothalamus and the anterior pituitary, so less TSH is released, the thyroid is stimulated less, and T4 drifts back down toward the set point; a loop whose response reverses the original change is by definition negative feedback.",
        wrong: [
          null,
          "Raising TSH would push the thyroid to make even more T4, driving the level further from normal. That direction is incompatible with the label 'negative.'",
          "The direction is right but the label is wrong. Positive feedback amplifies a change, as oxytocin does during labor; reversing a change is negative feedback.",
          "Both halves are wrong. Rising TSH alongside rising T4 would be a runaway loop, and it would be amplification rather than the correction that actually occurs."
        ]
      },
      diff: 3,
      secs: 80
    },

    {
      id: "TSB-003",
      sub: "Human Anatomy & Physiology",
      type: "order",
      q: "Place the following structures in the order that one electrical impulse travels through the heart's conduction system during a single heartbeat.",
      items: [
        "Bundle branches carry the impulse down both sides of the interventricular septum",
        "The sinoatrial (SA) node fires and the atria depolarize",
        "Purkinje fibers spread the impulse through the walls of the ventricles",
        "The atrioventricular (AV) node briefly delays the impulse",
        "The bundle of His conducts the impulse into the interventricular septum"
      ],
      answer: [1, 3, 4, 0, 2],
      rationale: {
        correct: "The SA node in the wall of the right atrium is the pacemaker, and its impulse spreads across both atria and makes them contract. The impulse then reaches the AV node, which holds it for about a tenth of a second so the atria can finish emptying into the ventricles, and passes into the bundle of His, which splits into the right and left bundle branches and finally into the Purkinje fibers. The Purkinje network delivers the impulse throughout the ventricular myocardium so the ventricles contract from the apex upward, squeezing blood toward the outflow valves."
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TSB-004",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "Which chamber of the heart has the thickest muscular wall, and what accounts for that thickness?",
      choices: [
        "The right ventricle, because it pumps blood through the entire systemic circuit",
        "The right atrium, because it receives blood returning from the entire body",
        "The left ventricle, because it pumps blood through the entire systemic circuit",
        "The left atrium, because it receives blood returning under pressure from the lungs"
      ],
      answer: 2,
      rationale: {
        correct: "The left ventricle ejects blood into the aorta against the high resistance of the whole systemic circulation, so its myocardium is roughly three times thicker than the right ventricle's, which only has to push blood through the short, low-resistance pulmonary circuit.",
        wrong: [
          "The right ventricle pumps into the pulmonary circuit, a short low-pressure loop to the lungs and back, so its wall is comparatively thin.",
          "Atria are receiving chambers with thin walls. The right atrium only has to move blood a few centimeters through the tricuspid valve into the ventricle below it.",
          null,
          "The left atrium is also a thin-walled receiving chamber, and blood arriving from the lungs through the pulmonary veins is at low pressure, not high pressure."
        ]
      },
      diff: 1,
      secs: 60
    },

    {
      id: "TSB-005",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "Most of the oxygen carried in the blood is transported bound to which substance?",
      choices: [
        "Albumin dissolved in the plasma",
        "Bicarbonate ions dissolved in the plasma",
        "Hemoglobin inside red blood cells",
        "Fibrinogen circulating in the plasma"
      ],
      answer: 2,
      rationale: {
        correct: "About 98 percent of the oxygen in blood is bound to the iron-containing heme groups of hemoglobin inside erythrocytes; only a small fraction travels dissolved directly in the plasma, which is why anemia lowers oxygen delivery even when the lungs work perfectly.",
        wrong: [
          "Albumin is the most abundant plasma protein, but it maintains blood osmotic pressure and ferries fatty acids, hormones, and drugs rather than oxygen.",
          "Bicarbonate is the main transport form of carbon dioxide, not oxygen. Swapping the two gases is the most common error on this item.",
          null,
          "Fibrinogen is a plasma clotting protein made by the liver and converted to fibrin during clot formation; it has no role in gas transport."
        ]
      },
      diff: 1,
      secs: 50
    },

    {
      id: "TSB-006",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "During quiet inhalation, what happens to the diaphragm, and what happens to the pressure inside the lungs?",
      choices: [
        "The diaphragm relaxes and domes upward, and lung pressure falls below atmospheric pressure",
        "The diaphragm relaxes and domes upward, and lung pressure rises above atmospheric pressure",
        "The diaphragm contracts and flattens, and lung pressure falls below atmospheric pressure",
        "The diaphragm contracts and flattens, and lung pressure rises above atmospheric pressure"
      ],
      answer: 2,
      rationale: {
        correct: "Inhalation is the active phase: the diaphragm contracts, flattens, and drops while the external intercostals lift the ribs, thoracic volume increases, and the pressure inside the lungs falls below atmospheric pressure so air flows in down the pressure gradient.",
        wrong: [
          "A relaxing, doming diaphragm shrinks the thoracic cavity, and shrinking a container raises the pressure inside it rather than lowering it.",
          "This is the description of quiet exhalation: the diaphragm relaxes upward, the lungs recoil, volume falls, pressure rises, and air flows out passively.",
          null,
          "The muscle action is correct, but expanding the thorax lowers intrapulmonary pressure. Rising pressure would push air out rather than draw it in."
        ]
      },
      diff: 2,
      secs: 70
    },

    {
      id: "TSB-007",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "Which change in the blood is the primary stimulus that increases the rate and depth of breathing, and which structure detects it?",
      choices: [
        "A rise in carbon dioxide, detected by the medulla oblongata",
        "A fall in oxygen, detected by the medulla oblongata",
        "A rise in carbon dioxide, detected by the cerebellum",
        "A fall in oxygen, detected by the hypothalamus"
      ],
      answer: 0,
      rationale: {
        correct: "Central chemoreceptors in the medulla oblongata sense the rise in carbon dioxide, and the fall in cerebrospinal fluid pH that comes with it, and respond by driving faster, deeper breathing; carbon dioxide, not oxygen, is the moment-to-moment regulator of ventilation.",
        wrong: [
          null,
          "The structure is right but the stimulus is not. Falling oxygen is only a weak backup stimulus, sensed by peripheral chemoreceptors in the carotid and aortic bodies, and it matters only in severe hypoxia.",
          "The stimulus is right but the structure is not. The cerebellum coordinates balance and smooth movement and contains no respiratory center.",
          "Both halves are wrong. The hypothalamus regulates temperature, hunger, thirst, and the pituitary, and low oxygen is not the primary respiratory drive."
        ]
      },
      diff: 3,
      secs: 80
    },

    {
      id: "TSB-008",
      sub: "Human Anatomy & Physiology",
      type: "ms",
      q: "Select all that apply. Which of the following are functions of the kidneys?",
      choices: [
        "Regulating blood pressure by releasing renin",
        "Maintaining acid-base balance by excreting hydrogen ions",
        "Secreting erythropoietin, which stimulates red blood cell production",
        "Producing bile to emulsify dietary fats",
        "Producing insulin to lower blood glucose",
        "Storing glucose as glycogen for release between meals"
      ],
      answer: [0, 1, 2],
      rationale: {
        correct: "Beyond forming urine, the kidneys release renin to raise blood pressure and volume through the renin-angiotensin-aldosterone system, defend blood pH by excreting hydrogen ions and reclaiming bicarbonate, and secrete erythropoietin, the hormone that tells red bone marrow to make more erythrocytes. They also activate vitamin D.",
        wrong: [
          null,
          null,
          null,
          "Bile is produced by the liver and stored and concentrated by the gallbladder. The liver is the organ most often confused with the kidney here because both are described as filters.",
          "Insulin comes from the beta cells of the pancreatic islets. The kidney secretes renin and erythropoietin, but no glucose-lowering hormone.",
          "Glycogen storage is a function of the liver and skeletal muscle. The kidney handles water, electrolytes, pH, and nitrogenous waste, not fuel storage."
        ]
      },
      diff: 3,
      secs: 95
    },

    {
      id: "TSB-009",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "A sample of glomerular filtrate is taken from the glomerular (Bowman's) capsule of a healthy person. Which substance would normally be absent from it?",
      choices: [
        "Glucose molecules",
        "Sodium ions",
        "Albumin, a plasma protein",
        "Urea from protein breakdown"
      ],
      answer: 2,
      rationale: {
        correct: "Glomerular filtration is driven by blood pressure and sorts strictly by size: water, glucose, amino acids, ions, and urea pass through the filtration membrane, while blood cells and large plasma proteins such as albumin are too big to cross. Protein appearing in filtrate or urine signals damage to the glomerular membrane.",
        wrong: [
          "Glucose is filtered freely. It is absent from the final urine only because the proximal convoluted tubule reabsorbs all of it before the filtrate moves on.",
          "Sodium is filtered in enormous amounts and then reabsorbed along the tubule, with aldosterone fine-tuning the last of it in the distal tubule and collecting duct.",
          null,
          "Urea is a small nitrogenous waste from amino acid breakdown, and clearing it is one of the kidney's main jobs, so it belongs in the filtrate."
        ]
      },
      diff: 3,
      secs: 75
    },

    {
      id: "TSB-010",
      sub: "Human Anatomy & Physiology",
      type: "ms",
      q: "Select all that apply. Which of the following structures produce hormones?",
      choices: [
        "Pituitary gland",
        "Pancreas",
        "Adrenal gland",
        "Pons",
        "Prostate gland",
        "Pericardium"
      ],
      answer: [0, 1, 2],
      rationale: {
        correct: "The pituitary secretes tropic hormones such as TSH, ACTH, FSH, and LH; the islet cells of the pancreas secrete insulin and glucagon; and the adrenal gland secretes aldosterone and cortisol from its cortex plus epinephrine from its medulla.",
        wrong: [
          null,
          null,
          null,
          "The pons is part of the brainstem and relays signals between the medulla and higher centers. The hormone-releasing region of the brain is the hypothalamus.",
          "The prostate is an exocrine gland that adds alkaline fluid to semen through ducts. Making a secretion is not the same as making a hormone, which is released into the blood.",
          "The pericardium is the double-layered serous membrane sac surrounding the heart. It is a membrane, not a gland."
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TSB-011",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "A hiker becomes dehydrated and antidiuretic hormone (ADH) is released. Which structure releases ADH, and what does the hormone do?",
      choices: [
        "The posterior pituitary; it increases water reabsorption in the collecting ducts",
        "The anterior pituitary; it increases water reabsorption in the collecting ducts",
        "The posterior pituitary; it increases sodium reabsorption in the distal tubules",
        "The adrenal cortex; it increases sodium reabsorption in the distal tubules"
      ],
      answer: 0,
      rationale: {
        correct: "ADH is manufactured in the hypothalamus, travels down axons to be stored in the posterior pituitary, and is released from there; at the kidney it makes the collecting ducts more permeable to water, so more water returns to the blood and the hiker passes a small volume of concentrated urine.",
        wrong: [
          null,
          "The anterior pituitary manufactures its own hormones (GH, TSH, ACTH, FSH, LH, prolactin). ADH and oxytocin are made in the hypothalamus, and the posterior lobe only stores and releases them.",
          "The gland is right but the action belongs to aldosterone. ADH moves water directly; aldosterone moves sodium, with water following it.",
          "Both halves describe aldosterone, a mineralocorticoid from the adrenal cortex that promotes sodium reabsorption and potassium excretion."
        ]
      },
      diff: 3,
      secs: 85
    },

    {
      id: "TSB-012",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "A driver slams on the brakes to avoid a collision. Which combination of responses does the sympathetic division produce?",
      choices: [
        "Decreased heart rate, constricted pupils, and decreased digestive activity",
        "Decreased heart rate, dilated pupils, and increased digestive activity",
        "Increased heart rate, constricted pupils, and increased digestive activity",
        "Increased heart rate, dilated pupils, and decreased digestive activity"
      ],
      answer: 3,
      rationale: {
        correct: "Sympathetic 'fight or flight' output speeds the heart, dilates the pupils and the bronchioles, shunts blood toward skeletal muscle, and suspends non-urgent housekeeping such as digestion and salivation.",
        wrong: [
          "This mixes a parasympathetic heart and pupil response with a sympathetic gut response. The two divisions generally act as opposites on any single organ.",
          "Slowing the heart and speeding digestion are parasympathetic 'rest and digest' effects, the opposite of what a near-collision produces.",
          "Pupil constriction and increased digestive activity are both parasympathetic. Sympathetic activation dilates the pupils to let in more light and shuts digestion down.",
          null
        ]
      },
      diff: 2,
      secs: 70
    },

    {
      id: "TSB-013",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "After a stroke, a patient has normal muscle strength but walks unsteadily and cannot make smooth, coordinated movements. Which brain region is most likely damaged?",
      choices: [
        "Cerebellum",
        "Occipital lobe",
        "Medulla oblongata",
        "Temporal lobe"
      ],
      answer: 0,
      rationale: {
        correct: "The cerebellum fine-tunes motor activity, maintaining balance, posture, and the timing of movement, so damage there produces clumsy, uncoordinated movement even though strength and sensation remain intact.",
        wrong: [
          null,
          "The occipital lobe processes vision. Damage there causes visual field loss or cortical blindness, not incoordination.",
          "The medulla oblongata houses the vital centers for heart rate, breathing, and blood pressure. Significant damage there is life-threatening rather than merely clumsy.",
          "The temporal lobe handles hearing, language comprehension, and memory formation. Damage causes trouble understanding speech or forming new memories."
        ]
      },
      diff: 2,
      secs: 70
    },

    {
      id: "TSB-014",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "A breastfed newborn is protected from several infections by antibodies received in the mother's milk. Which type of immunity is this?",
      choices: [
        "Naturally acquired active immunity",
        "Artificially acquired active immunity",
        "Artificially acquired passive immunity",
        "Naturally acquired passive immunity"
      ],
      answer: 3,
      rationale: {
        correct: "The antibodies were handed over ready-made rather than produced by the infant, which makes the immunity passive, and they arrived by a natural route (breast milk, like placental transfer), which makes it naturally acquired; such protection works immediately but fades, because no memory cells are formed.",
        wrong: [
          "Active immunity means the person's own lymphocytes made the antibodies, as happens after actually having an infection. The newborn's immune system did not mount this response.",
          "Artificially acquired active immunity is what a vaccine produces: an antigen is deliberately introduced and the body builds its own antibodies and memory cells.",
          "Artificially acquired passive immunity is an injection of ready-made antibodies, such as antivenom or immune globulin. The antibodies here arrived naturally, not by injection.",
          null
        ]
      },
      diff: 2,
      secs: 70
    },

    {
      id: "TSB-015",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "Which cell secretes the antibodies that circulate in the blood during an infection?",
      choices: [
        "A plasma cell formed from an activated B lymphocyte",
        "A cytotoxic T lymphocyte activated by a helper T cell",
        "A macrophage that has engulfed the invading pathogen",
        "A neutrophil recruited to the site of the infection"
      ],
      answer: 0,
      rationale: {
        correct: "A B lymphocyte that binds its matching antigen proliferates and differentiates into plasma cells, which are dedicated antibody factories; the memory B cells left behind are what make the second exposure faster and stronger.",
        wrong: [
          null,
          "Cytotoxic T cells destroy infected and cancerous cells by direct contact. They belong to cell-mediated immunity and secrete no antibodies.",
          "Macrophages phagocytose pathogens and present antigen fragments to helper T cells, which starts the adaptive response but does not produce antibodies.",
          "Neutrophils are the most numerous white cells and the first phagocytes to arrive, but they are innate responders with no antibody production."
        ]
      },
      diff: 1,
      secs: 55
    },

    {
      id: "TSB-016",
      sub: "Human Anatomy & Physiology",
      type: "order",
      q: "Place the following structures in the order that a swallowed bite of food passes through them.",
      items: [
        "Stomach, where churning and acid turn the bolus into chyme",
        "Esophagus, where peristalsis moves the bolus downward",
        "Large intestine, where water and electrolytes are reabsorbed",
        "Small intestine, where nearly all nutrient absorption occurs",
        "Pharynx, which the bolus enters as the epiglottis closes the airway"
      ],
      answer: [4, 1, 0, 3, 2],
      rationale: {
        correct: "After chewing and swallowing, the bolus passes from the mouth into the pharynx while the epiglottis covers the larynx, travels down the esophagus by peristalsis, and enters the stomach, where acid and churning produce chyme. The pyloric sphincter releases chyme into the small intestine (duodenum, jejunum, then ileum), where most chemical digestion and nearly all absorption occur, and the residue moves into the large intestine, which reclaims water and electrolytes before feces are stored and eliminated."
      },
      diff: 1,
      secs: 85
    },

    {
      id: "TSB-017",
      sub: "Human Anatomy & Physiology",
      type: "hotspot",
      q: "The diagram shows four organs of the digestive system. Click the organ in which the chemical digestion of protein begins.",
      svg: "<svg viewBox='0 0 400 260' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Schematic diagram showing four labeled organs of the digestive system'><rect class='hs-bg' x='0' y='0' width='400' height='260'/><text class='hs-label' x='14' y='26'>Selected organs of the digestive system</text><rect class='hs-part' x='30' y='52' width='150' height='62'/><text class='hs-label' x='46' y='90'>Mouth</text><rect class='hs-part' x='220' y='52' width='150' height='62'/><text class='hs-label' x='236' y='90'>Stomach</text><rect class='hs-part' x='30' y='160' width='150' height='62'/><text class='hs-label' x='46' y='198'>Small intestine</text><rect class='hs-part' x='220' y='160' width='150' height='62'/><text class='hs-label' x='236' y='198'>Large intestine</text></svg>",
      regions: [
        { id: "r1", label: "Mouth", shape: "rect", x: 30, y: 52, w: 150, h: 62 },
        { id: "r2", label: "Stomach", shape: "rect", x: 220, y: 52, w: 150, h: 62 },
        { id: "r3", label: "Small intestine", shape: "rect", x: 30, y: 160, w: 150, h: 62 },
        { id: "r4", label: "Large intestine", shape: "rect", x: 220, y: 160, w: 150, h: 62 }
      ],
      answer: "r2",
      rationale: {
        correct: "Protein digestion begins in the stomach, where hydrochloric acid denatures proteins and converts pepsinogen into the active enzyme pepsin, which starts cutting peptide bonds. The mouth begins carbohydrate digestion with salivary amylase and performs mechanical breakdown by chewing; the small intestine finishes protein digestion with pancreatic proteases and absorbs nearly all nutrients; and the large intestine performs no enzymatic digestion at all, mainly reabsorbing water and electrolytes while intestinal flora make vitamin K."
      },
      diff: 3,
      secs: 75
    },

    {
      id: "TSB-018",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "Which statement correctly pairs a muscle type with its structure and its type of control?",
      choices: [
        "Skeletal muscle is non-striated and under involuntary control",
        "Cardiac muscle is striated and under involuntary control",
        "Smooth muscle is striated and under voluntary control",
        "Cardiac muscle is non-striated and under voluntary control"
      ],
      answer: 1,
      rationale: {
        correct: "Cardiac muscle is the discriminating case: it shows the banded striations of skeletal muscle but contracts involuntarily like smooth muscle, and its cells are joined end to end by intercalated discs so the heart contracts as a single unit.",
        wrong: [
          "Skeletal muscle is striated and voluntary. It is the only muscle type you consciously command, and its fibers are multinucleate.",
          null,
          "Smooth muscle, found in the walls of hollow organs and blood vessels, is non-striated and involuntary, so both descriptors are reversed here.",
          "The tissue named is right, but both descriptors are wrong: cardiac muscle is striated, and no one chooses to beat their own heart."
        ]
      },
      diff: 3,
      secs: 70
    },

    {
      id: "TSB-019",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "Which structure attaches a skeletal muscle to a bone?",
      choices: [
        "Ligament",
        "Tendon",
        "Articular cartilage",
        "Synovial membrane"
      ],
      answer: 1,
      rationale: {
        correct: "A tendon is a cord of dense regular connective tissue running from the end of a skeletal muscle to the periosteum of a bone, transferring the pull of the contraction to the skeleton so the bone moves as a lever.",
        wrong: [
          "A ligament is the same kind of dense connective tissue, but it connects bone to bone and stabilizes a joint. Swapping tendon and ligament is the classic error here.",
          null,
          "Articular cartilage is the smooth hyaline cartilage capping the bone ends inside a joint; it reduces friction and absorbs shock rather than anchoring anything.",
          "The synovial membrane lines the joint capsule and secretes lubricating synovial fluid. It attaches no muscle to any bone."
        ]
      },
      diff: 1,
      secs: 50
    },

    {
      id: "TSB-020",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "Which skin gland releases an oily secretion into a hair follicle to lubricate the hair and the skin surface?",
      choices: [
        "Apocrine sweat gland",
        "Ceruminous gland",
        "Eccrine sweat gland",
        "Sebaceous gland"
      ],
      answer: 3,
      rationale: {
        correct: "Sebaceous glands empty sebum, an oily lipid secretion, into hair follicles; sebum softens hair and skin and slows water loss, and a blocked sebaceous duct is the starting point of acne.",
        wrong: [
          "Apocrine sweat glands also open into hair follicles, but only in the axillae and groin, and they release a protein-rich sweat that produces body odor once skin bacteria break it down.",
          "Ceruminous glands are modified sweat glands confined to the external ear canal, where they produce cerumen (earwax).",
          "Eccrine sweat glands open directly onto the skin surface rather than into follicles, and their watery sweat evaporates to cool the body.",
          null
        ]
      },
      diff: 3,
      secs: 65
    },

    {
      id: "TSB-021",
      sub: "Human Anatomy & Physiology",
      type: "mc",
      q: "In the female reproductive tract, where does fertilization of an oocyte normally take place?",
      choices: [
        "The ovarian follicle",
        "The fallopian tube",
        "The uterine cavity",
        "The cervical canal"
      ],
      answer: 1,
      rationale: {
        correct: "After ovulation the oocyte is swept into the fallopian tube (uterine tube), and sperm normally meet it in the outer third of that tube; the resulting zygote then takes several days to travel down to the uterus and implant.",
        wrong: [
          "The follicle inside the ovary is where the oocyte matures and from which it is released at ovulation, but the egg must leave the ovary before sperm can reach it.",
          null,
          "The uterine cavity is where the blastocyst implants and the embryo develops, which happens several days after fertilization has already occurred.",
          "The cervical canal is the passage sperm swim through on their way from the vagina into the uterus. It is a route, not the meeting point."
        ]
      },
      diff: 1,
      secs: 55
    },

    {
      id: "TSB-022",
      sub: "Biology",
      type: "mc",
      q: "Which class of macromolecule is the body's primary and most immediately available source of energy?",
      choices: [
        "Carbohydrates",
        "Lipids",
        "Proteins",
        "Nucleic acids"
      ],
      answer: 0,
      rationale: {
        correct: "Carbohydrates are broken down to glucose, which cells feed straight into glycolysis and then cellular respiration, making them the quickest and preferred fuel; the brain in particular runs almost entirely on glucose.",
        wrong: [
          null,
          "Lipids pack more energy per gram than any other macromolecule, but they are the long-term storage form and are mobilized only after carbohydrate supplies fall. Confusing energy density with immediate availability is the trap in this item.",
          "Proteins are spent on enzymes, structure, transport, and defense. The body burns them for fuel only when carbohydrate and fat stores are inadequate.",
          "Nucleic acids store and transmit genetic information. ATP is built on a nucleotide, but DNA and RNA themselves are not fuel molecules."
        ]
      },
      diff: 1,
      secs: 55
    },

    {
      id: "TSB-023",
      sub: "Biology",
      type: "mc",
      q: "The rate of an enzyme-catalyzed reaction rises steadily as temperature climbs to 40 degrees Celsius, then falls sharply above 45 degrees Celsius. What best explains the drop?",
      choices: [
        "The enzyme is used up by the reaction once the temperature is high enough",
        "The substrate molecules move too quickly to enter the active site",
        "The higher temperature raises the activation energy of the reaction",
        "Heat denatures the enzyme, changing the shape of its active site"
      ],
      answer: 3,
      rationale: {
        correct: "Enzymes are proteins whose function depends on a precisely folded active site; above the optimum temperature the weak bonds holding that shape break, the enzyme denatures, the substrate no longer fits, and the reaction rate collapses.",
        wrong: [
          "Catalysts, including enzymes, are not consumed by the reactions they speed up. One enzyme molecule processes substrate over and over.",
          "Faster molecular motion is exactly why the rate rises up to the optimum, because collisions become more frequent. Speed alone cannot explain the fall.",
          "Temperature does not change a reaction's activation energy. Enzymes lower activation energy, and losing enzyme function simply returns the reaction to its slow uncatalyzed rate.",
          null
        ]
      },
      diff: 3,
      secs: 80
    },

    {
      id: "TSB-024",
      sub: "Biology",
      type: "ms",
      q: "Select all that apply. Which structures are found in plant cells but not in animal cells?",
      choices: [
        "Cell wall",
        "Chloroplast",
        "Large central vacuole",
        "Cell membrane",
        "Mitochondrion",
        "Ribosome"
      ],
      answer: [0, 1, 2],
      rationale: {
        correct: "A rigid cellulose cell wall outside the membrane, chloroplasts containing chlorophyll for photosynthesis, and one large central vacuole that stores water and holds the cell turgid are the three structures that separate a plant cell from an animal cell.",
        wrong: [
          null,
          null,
          null,
          "Every cell is bounded by a phospholipid cell membrane, including animal cells and even prokaryotes, so it cannot be a distinguishing feature.",
          "Plant cells contain mitochondria too and carry out cellular respiration just as animal cells do; they simply have the extra photosynthetic organelle.",
          "Ribosomes assemble proteins in all cells, bacteria included, which is precisely why they are never the answer to a plant-versus-animal question."
        ]
      },
      diff: 2,
      secs: 85
    },

    {
      id: "TSB-025",
      sub: "Biology",
      type: "mc",
      q: "A protein made on the rough endoplasmic reticulum must be modified, sorted, and packaged for secretion. Which organelle carries out that step?",
      choices: [
        "Lysosome",
        "Smooth endoplasmic reticulum",
        "Golgi apparatus",
        "Nucleolus"
      ],
      answer: 2,
      rationale: {
        correct: "The Golgi apparatus receives transport vesicles from the rough ER, chemically finishes the proteins, tags them for their destinations, and buds off secretory vesicles, which is why it is described as the cell's shipping department.",
        wrong: [
          "Lysosomes are sacs of hydrolytic enzymes that digest worn-out organelles and engulfed material. The Golgi actually produces them, so they come after this step, not during it.",
          "The smooth ER carries no ribosomes and specializes in lipid and steroid synthesis, detoxification, and calcium storage rather than protein packaging.",
          null,
          "The nucleolus, inside the nucleus, assembles ribosomal subunits. It works upstream of protein synthesis rather than downstream of it."
        ]
      },
      diff: 1,
      secs: 55
    },

    {
      id: "TSB-026",
      sub: "Biology",
      type: "mc",
      q: "A cell continuously pumps sodium ions out into fluid that already holds far more sodium than its cytoplasm does. Which process is the cell using?",
      choices: [
        "Osmosis",
        "Simple diffusion",
        "Facilitated diffusion",
        "Active transport"
      ],
      answer: 3,
      rationale: {
        correct: "Moving a solute against its concentration gradient, from lower to higher concentration, requires a carrier protein plus energy from ATP; the sodium-potassium pump does exactly this, exporting three sodium ions for every two potassium ions it brings in.",
        wrong: [
          "Osmosis is the passive movement of water, not of solutes, across a selectively permeable membrane.",
          "Simple diffusion carries small nonpolar molecules such as oxygen and carbon dioxide straight through the bilayer, and it always runs down the gradient.",
          "Facilitated diffusion also uses a membrane protein, but it is passive and can only move solutes down their gradient, never against it.",
          null
        ]
      },
      diff: 2,
      secs: 70
    },

    {
      id: "TSB-027",
      sub: "Biology",
      type: "mc",
      q: "During which phase of mitosis do the chromosomes line up along the middle of the cell?",
      choices: [
        "Prophase",
        "Metaphase",
        "Anaphase",
        "Telophase"
      ],
      answer: 1,
      rationale: {
        correct: "In metaphase the spindle fibers have attached to the centromeres and pull the duplicated chromosomes into a single line on the metaphase plate at the cell's equator, which sets up an even split; the shared m in metaphase and middle is the standard memory hook.",
        wrong: [
          "In prophase the chromatin condenses into visible chromosomes, the nuclear envelope starts to break down, and the spindle forms, but the chromosomes are still scattered.",
          null,
          "In anaphase the sister chromatids are pulled apart and travel toward opposite poles, which happens after the alignment rather than during it.",
          "In telophase the separated chromosomes arrive at the poles and new nuclear envelopes form, with cytokinesis dividing the cytoplasm."
        ]
      },
      diff: 1,
      secs: 55
    },

    {
      id: "TSB-028",
      sub: "Biology",
      type: "mc",
      q: "In pea plants, purple flower color (P) is dominant to white (p). A heterozygous purple plant (Pp) is crossed with a white plant (pp). What percentage of the offspring is expected to have white flowers?",
      choices: [
        "0%",
        "25%",
        "50%",
        "75%"
      ],
      answer: 2,
      rationale: {
        correct: "The Punnett square for Pp crossed with pp gives Pp, Pp, pp, and pp, so half the offspring are heterozygous and purple and half are homozygous recessive and white, the standard 1:1 ratio of a test cross.",
        wrong: [
          "Zero percent white would require the purple parent to be homozygous dominant (PP), which would make every offspring Pp and therefore purple.",
          "Twenty-five percent is the recessive share when two heterozygotes (Pp by Pp) are crossed. Here one parent can only donate a recessive allele, which doubles the recessive share.",
          null,
          "Seventy-five percent is the dominant share of a Pp by Pp cross. No cross of these two genotypes produces three-quarters white."
        ]
      },
      diff: 2,
      secs: 75
    },

    {
      id: "TSB-029",
      sub: "Biology",
      type: "mc",
      q: "In a eukaryotic cell, where does transcription occur and what molecule does it produce?",
      choices: [
        "In the nucleus, producing messenger RNA",
        "In the nucleus, producing a polypeptide",
        "At the ribosome, producing messenger RNA",
        "At the ribosome, producing a polypeptide"
      ],
      answer: 0,
      rationale: {
        correct: "Transcription copies a gene's DNA sequence into messenger RNA, and because eukaryotic DNA never leaves the nucleus, that step happens there; the finished mRNA then exits to a ribosome, where translation builds the protein.",
        wrong: [
          null,
          "Polypeptides are assembled during translation, not transcription. DNA is never read directly into protein, which is the whole point of the mRNA intermediate.",
          "The ribosome reads messenger RNA rather than making it. Placing transcription at the ribosome reverses the two halves of the central dogma.",
          "This describes translation: the ribosome reads mRNA codons while tRNA delivers the matching amino acids to build a polypeptide."
        ]
      },
      diff: 1,
      secs: 60
    },

    {
      id: "TSB-030",
      sub: "Biology",
      type: "mc",
      q: "Which statement correctly describes photosynthesis?",
      choices: [
        "Mitochondria use light energy to convert carbon dioxide and water into glucose and oxygen",
        "Mitochondria use light energy to convert glucose and oxygen into carbon dioxide and water",
        "Chloroplasts use light energy to convert glucose and oxygen into carbon dioxide and water",
        "Chloroplasts use light energy to convert carbon dioxide and water into glucose and oxygen"
      ],
      answer: 3,
      rationale: {
        correct: "Photosynthesis runs inside the chloroplast: the light reactions in the thylakoid membranes capture light energy and split water, releasing oxygen, and the Calvin cycle in the stroma uses that captured energy to build glucose from carbon dioxide.",
        wrong: [
          "The reaction is written correctly but the organelle is wrong. Mitochondria perform cellular respiration; only chloroplasts hold the chlorophyll that captures light.",
          "This is cellular respiration placed in the correct organelle, but respiration releases energy stored in glucose rather than using light to build glucose.",
          "The organelle is right but the reaction is reversed. Photosynthesis consumes carbon dioxide and water and produces glucose and oxygen, which is essentially the opposite of respiration.",
          null
        ]
      },
      diff: 2,
      secs: 70
    },

    {
      id: "TSB-031",
      sub: "Biology",
      type: "mc",
      q: "In the scientific name Canis lupus, which taxonomic level does the first word identify?",
      choices: [
        "Family",
        "Genus",
        "Species",
        "Order"
      ],
      answer: 1,
      rationale: {
        correct: "Binomial nomenclature names an organism with its genus first, capitalized, followed by the species name in lowercase, both italicized; Canis is the genus that also contains the coyote, Canis latrans.",
        wrong: [
          "Family sits one level above genus (wolves belong to the family Canidae) and never appears in the two-part scientific name.",
          null,
          "The species name is the second word, lupus. The two words together identify the species, but the first word by itself is the genus.",
          "Order is three levels above genus (Carnivora for wolves) and, like family, is not part of the binomial name."
        ]
      },
      diff: 1,
      secs: 55
    }

  ]
};
