window.BANKS = window.BANKS || {};
window.BANKS["hesi-bio-ap-b"] = {
  exam: "hesi",
  section: "bio-ap",
  form: "B",
  questions: [

  /* ---------- BIOLOGY: macromolecules (6) ---------- */
  {
    id: "HBB-001", sub: "macromolecules", type: "mc",
    q: "Which reaction joins two monomers together and releases a molecule of water as a byproduct?",
    choices: ["Hydrolysis", "Dehydration synthesis", "Protein denaturation", "Oxidative phosphorylation"],
    answer: 1,
    rationale: {
      correct: "Dehydration synthesis links monomers into a polymer by removing a hydroxyl group from one unit and a hydrogen from the next, which combine to form water.",
      wrong: ["Hydrolysis is the reverse reaction, using a water molecule to split a polymer into monomers.",
        null,
        "Protein denaturation is the loss of a protein's functional shape from heat or a change in pH.",
        "Oxidative phosphorylation is the ATP-producing step of cellular respiration, not a way to link monomers."]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBB-002", sub: "macromolecules", type: "mc",
    q: "Enzymes, antibodies, and hemoglobin are all examples of which class of biological molecule?",
    choices: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"],
    answer: 2,
    rationale: {
      correct: "Proteins are polymers of amino acids whose folded shapes let them act as enzymes, antibodies, transport molecules such as hemoglobin, and structural fibers.",
      wrong: ["Carbohydrates are sugars and their polymers, used mainly for energy and structural support.",
        "Lipids are the nonpolar class that includes fats, oils, steroids, and phospholipids.",
        null,
        "Nucleic acids are DNA and RNA, the molecules that store and transmit genetic instructions."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HBB-003", sub: "macromolecules", type: "mc",
    q: "A phospholipid has a water-attracting head and two water-repelling tails. A molecule with both properties is described as:",
    choices: ["Amphipathic", "Hydrophobic", "Hydrophilic", "Nonpolar"],
    answer: 0,
    rationale: {
      correct: "An amphipathic molecule carries both a hydrophilic region and a hydrophobic region, which is why phospholipids spontaneously arrange themselves into a bilayer in water.",
      wrong: [null,
        "Hydrophobic describes only the water-repelling portion, such as the fatty acid tails.",
        "Hydrophilic describes only the water-attracting portion, such as the phosphate head.",
        "Nonpolar describes a molecule with an even charge distribution, which does not mix with water at all."]
    },
    diff: 3, secs: 55
  },
  {
    id: "HBB-004", sub: "macromolecules", type: "mc",
    q: "Compared with unsaturated fats, saturated fats contain:",
    choices: ["No carbon-to-carbon double bonds and are liquid at room temperature", "Many carbon-to-carbon double bonds and are solid at room temperature", "Many carbon-to-carbon double bonds and are liquid at room temperature", "No carbon-to-carbon double bonds and are solid at room temperature"],
    answer: 3,
    rationale: {
      correct: "A saturated fatty acid chain is filled, or saturated, with hydrogen and has no double bonds, so the straight chains pack tightly and the fat is solid at room temperature.",
      wrong: ["Saturated fats do lack double bonds, but their tight packing makes them solid rather than liquid.",
        "Double bonds are the feature of unsaturated fats, and the kinks they create prevent tight packing.",
        "This describes unsaturated fats such as most plant oils, not saturated fats.",
        null]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBB-005", sub: "macromolecules", type: "mc",
    q: "In an organic molecule, the functional group written as -COOH is known as the:",
    choices: ["Hydroxyl group", "Carboxyl group", "Amine group", "Phosphate group"],
    answer: 1,
    rationale: {
      correct: "The -COOH group is the carboxyl group; it behaves as an acid by donating a hydrogen ion and appears on every amino acid and every fatty acid.",
      wrong: ["The hydroxyl group is written -OH and is found in alcohols and sugars.",
        null,
        "The amine group is written -NH2 and forms the basic, nitrogen-containing end of an amino acid.",
        "The phosphate group is written -PO4 and appears in nucleotides, ATP, and phospholipids."]
    },
    diff: 3, secs: 55
  },
  {
    id: "HBB-006", sub: "macromolecules", type: "mc",
    q: "Glucose, fructose, and galactose are all examples of which type of molecule?",
    choices: ["Monosaccharides", "Disaccharides", "Polysaccharides", "Fatty acids"],
    answer: 0,
    rationale: {
      correct: "Monosaccharides are single sugar units and the monomers from which every larger carbohydrate is built; glucose, fructose, and galactose are the three common dietary examples.",
      wrong: [null,
        "Disaccharides are two sugars bonded together, such as sucrose, lactose, and maltose.",
        "Polysaccharides are long chains of many sugars, such as starch, glycogen, and cellulose.",
        "Fatty acids are long hydrocarbon chains that combine with glycerol to build a fat molecule."]
    },
    diff: 1, secs: 45
  },

  /* ---------- BIOLOGY: cell structure (6) ---------- */
  {
    id: "HBB-007", sub: "cell structure", type: "mc",
    q: "Which organelle contains digestive enzymes that break down worn-out organelles and engulfed bacteria?",
    choices: ["Ribosome", "Centriole", "Lysosome", "Peroxisome"],
    answer: 2,
    rationale: {
      correct: "A lysosome is a membrane-bound sac of hydrolytic enzymes that digests proteins, fats, sugars, and nucleic acids, recycling damaged organelles and destroying engulfed material.",
      wrong: ["A ribosome assembles amino acids into protein and holds no digestive enzymes.",
        "Centrioles organize the spindle fibers that pull chromosomes apart during cell division.",
        null,
        "Peroxisomes break down fatty acids and neutralize hydrogen peroxide, but they do not digest whole organelles."]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBB-008", sub: "cell structure", type: "mc",
    q: "Which statement correctly describes the genetic material of a prokaryotic cell?",
    choices: ["It is a single circular chromosome lying free in the cytoplasm", "It is several linear chromosomes enclosed within a nucleus", "It is a single linear chromosome enclosed within a nucleus", "It is several circular chromosomes stored inside the mitochondria"],
    answer: 0,
    rationale: {
      correct: "A prokaryote has no nucleus, so its DNA is one circular chromosome coiled in a cytoplasmic region called the nucleoid.",
      wrong: [null,
        "Several linear chromosomes inside a nucleus describes a eukaryotic cell, such as a human cell.",
        "Prokaryotes have neither a nucleus nor linear chromosomes.",
        "Prokaryotes contain no mitochondria, and their single chromosome is not housed in an organelle."]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBB-009", sub: "cell structure", type: "mc",
    q: "A solution that causes a cell to gain water, swell, and possibly burst is described as:",
    choices: ["Isotonic", "Hypertonic", "Saturated", "Hypotonic"],
    answer: 3,
    rationale: {
      correct: "A hypotonic solution holds a lower solute concentration than the cell, so water moves inward by osmosis and the cell swells and may lyse.",
      wrong: ["An isotonic solution has the same solute concentration as the cell, so there is no net water movement.",
        "A hypertonic solution has a higher solute concentration, so water leaves and the cell shrinks.",
        "Saturated describes a solution holding all the solute it can dissolve; it says nothing about a cell's water balance.",
        null]
    },
    diff: 2, secs: 55
  },
  {
    id: "HBB-010", sub: "cell structure", type: "mc",
    q: "Glucose crosses the plasma membrane down its concentration gradient through a protein channel and without any use of ATP. This is:",
    choices: ["Active transport", "Simple diffusion", "Endocytosis", "Facilitated diffusion"],
    answer: 3,
    rationale: {
      correct: "Facilitated diffusion is passive movement down a concentration gradient with the help of a carrier or channel protein, so no cellular energy is spent.",
      wrong: ["Active transport moves a substance against its gradient and consumes ATP.",
        "Simple diffusion passes small nonpolar molecules straight through the lipid bilayer with no protein involved.",
        "Endocytosis brings material into the cell by wrapping the membrane around it to form a vesicle.",
        null]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBB-011", sub: "cell structure", type: "mc",
    q: "According to the fluid mosaic model, the basic framework of the plasma membrane is formed by:",
    choices: ["A double layer of phospholipid molecules", "A single layer of cholesterol molecules", "A rigid network of protein filaments", "A double layer of carbohydrate chains"],
    answer: 0,
    rationale: {
      correct: "The membrane is a phospholipid bilayer whose hydrophobic tails face inward and hydrophilic heads face the watery surroundings, with proteins drifting through it like tiles in a mosaic.",
      wrong: [null,
        "Cholesterol is scattered among the phospholipids to stabilize fluidity, but it forms no layer of its own.",
        "Proteins are embedded in or attached to the bilayer, and the membrane is fluid rather than rigid.",
        "Carbohydrates attach to the outer surface as recognition markers and do not form a layer."]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBB-012", sub: "cell structure", type: "mc",
    q: "Which pair of structures is present in a plant cell but absent from an animal cell?",
    choices: ["Cell wall and chloroplast", "Nucleus and ribosome", "Mitochondrion and Golgi apparatus", "Plasma membrane and cytoplasm"],
    answer: 0,
    rationale: {
      correct: "Plant cells are enclosed by a rigid cellulose cell wall and contain chloroplasts that carry out photosynthesis; animal cells have neither.",
      wrong: [null,
        "Both plant and animal cells are eukaryotic and contain a nucleus and ribosomes.",
        "Both cell types use mitochondria to make ATP and a Golgi apparatus to package materials.",
        "Every cell, plant or animal, is bounded by a plasma membrane and filled with cytoplasm."]
    },
    diff: 1, secs: 45
  },

  /* ---------- BIOLOGY: cellular respiration / photosynthesis (5) ---------- */
  {
    id: "HBB-013", sub: "cellular respiration/photosynthesis", type: "mc",
    q: "Most of the ATP generated during aerobic cellular respiration is produced by which process?",
    choices: ["Glycolysis", "The Krebs cycle", "The conversion of pyruvate to acetyl-CoA", "The electron transport chain"],
    answer: 3,
    rationale: {
      correct: "The electron transport chain on the inner mitochondrial membrane uses the energy carried by NADH and FADH2 to drive oxidative phosphorylation, which supplies most of the roughly 32 to 36 ATP made per glucose.",
      wrong: ["Glycolysis yields only a net gain of 2 ATP per glucose molecule.",
        "The Krebs cycle yields only about 2 ATP per glucose, along with NADH and FADH2.",
        "The conversion of pyruvate to acetyl-CoA produces NADH but no ATP directly.",
        null]
    },
    diff: 3, secs: 55
  },
  {
    id: "HBB-014", sub: "cellular respiration/photosynthesis", type: "mc",
    q: "The breakdown of one glucose molecule during glycolysis produces a net gain of how many ATP molecules?",
    choices: ["2 ATP", "4 ATP", "18 ATP", "36 ATP"],
    answer: 0,
    rationale: {
      correct: "Glycolysis invests 2 ATP to begin and generates 4, so the net gain is 2 ATP, along with 2 NADH and 2 molecules of pyruvate.",
      wrong: [null,
        "Four ATP are made, but two were spent to start the pathway, leaving a net of 2.",
        "Eighteen is not a standard yield for any stage of cellular respiration.",
        "Roughly 36 is the total yield from the complete aerobic breakdown of one glucose, not from glycolysis alone."]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBB-015", sub: "cellular respiration/photosynthesis", type: "mc",
    q: "Which two raw materials does a plant take in to carry out photosynthesis?",
    choices: ["Oxygen and glucose", "Carbon dioxide and water", "Carbon dioxide and glucose", "Oxygen and water"],
    answer: 1,
    rationale: {
      correct: "Photosynthesis combines carbon dioxide and water in the presence of light energy to build glucose and release oxygen gas.",
      wrong: ["Oxygen and glucose are the products of photosynthesis and the reactants of cellular respiration.",
        null,
        "Carbon dioxide is a reactant, but glucose is the sugar the plant produces rather than a raw material.",
        "Water is a reactant, but oxygen is released as a product rather than taken in."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HBB-016", sub: "cellular respiration/photosynthesis", type: "mc",
    q: "The light-dependent reactions of photosynthesis take place in which part of the chloroplast?",
    choices: ["The stroma", "The outer membrane", "The intermembrane space", "The thylakoid membrane"],
    answer: 3,
    rationale: {
      correct: "The light-dependent reactions occur in the thylakoid membranes, where chlorophyll absorbs light, water is split, and ATP and NADPH are generated.",
      wrong: ["The stroma is the surrounding fluid where the light-independent Calvin cycle occurs.",
        "The outer membrane is only a boundary layer and holds no photosynthetic pigments.",
        "The intermembrane space lies between the two envelope membranes and hosts no light reactions.",
        null]
    },
    diff: 3, secs: 55
  },
  {
    id: "HBB-017", sub: "cellular respiration/photosynthesis", type: "mc",
    q: "When yeast cells ferment sugar in the absence of oxygen, which two products are formed?",
    choices: ["Lactic acid and water", "Ethanol and carbon dioxide", "Lactic acid and carbon dioxide", "Ethanol and oxygen"],
    answer: 1,
    rationale: {
      correct: "Alcoholic fermentation converts pyruvate into ethanol and carbon dioxide, which is why yeast both leavens bread and brews alcohol.",
      wrong: ["Lactic acid fermentation is the pathway used by animal muscle cells, and it releases no water as a named product.",
        null,
        "Yeast do release carbon dioxide, but their other product is ethanol rather than lactic acid.",
        "Fermentation is anaerobic and releases no oxygen; oxygen is a product of photosynthesis."]
    },
    diff: 2, secs: 50
  },

  /* ---------- BIOLOGY: genetics (6) ---------- */
  {
    id: "HBB-018", sub: "genetics", type: "mc",
    q: "The particular combination of alleles that an organism carries for a given trait is called its:",
    choices: ["Phenotype", "Pedigree", "Genotype", "Chromosome"],
    answer: 2,
    rationale: {
      correct: "The genotype is the pair of alleles present at a gene locus, written as TT, Tt, or tt, and it may or may not be visible in the organism's appearance.",
      wrong: ["The phenotype is the physical trait actually expressed, such as tall or short.",
        "A pedigree is a family diagram used to trace how a trait passes through generations.",
        null,
        "A chromosome is a whole strand of DNA carrying many genes, not the allele pair for one trait."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HBB-019", sub: "genetics", type: "mc",
    q: "In pea plants, tall (T) is dominant over short (t). If two heterozygous tall plants are crossed, what percentage of the offspring is expected to be short?",
    choices: ["0%", "25%", "50%", "75%"],
    answer: 1,
    rationale: {
      correct: "A Tt x Tt cross gives a 1 TT : 2 Tt : 1 tt genotype ratio, so one quarter of the offspring receive two recessive alleles and are short.",
      wrong: ["A result of 0% short would require at least one parent to be homozygous dominant (TT).",
        null,
        "50% short is the result of crossing a heterozygote with a short plant (Tt x tt).",
        "75% is the fraction expected to be tall in this cross, not the fraction expected to be short."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HBB-020", sub: "genetics", type: "mc",
    q: "A recessive trait appears in an individual only when that individual:",
    choices: ["Carries one recessive and one dominant allele", "Carries two copies of the dominant allele", "Inherits the allele from the mother only", "Carries two copies of the recessive allele"],
    answer: 3,
    rationale: {
      correct: "A recessive allele is masked whenever a dominant allele is present, so the recessive phenotype shows up only in a homozygous recessive individual.",
      wrong: ["One of each allele makes the individual a heterozygous carrier who displays the dominant trait.",
        "Two dominant alleles produce the dominant phenotype and make the individual homozygous dominant.",
        "For an autosomal trait either parent can contribute the recessive allele.",
        null]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBB-021", sub: "genetics", type: "mc",
    q: "A red-flowered snapdragon crossed with a white-flowered snapdragon produces offspring that are all pink. This pattern of inheritance is called:",
    choices: ["Incomplete dominance", "Complete dominance", "Codominance", "Sex-linked inheritance"],
    answer: 0,
    rationale: {
      correct: "In incomplete dominance neither allele fully masks the other, so the heterozygote shows a blended, intermediate phenotype such as pink.",
      wrong: [null,
        "In complete dominance the heterozygote looks identical to the homozygous dominant parent.",
        "In codominance both alleles appear fully and separately, as in AB blood type.",
        "Sex-linked inheritance involves genes carried on the X or Y chromosome, which does not explain a blended flower color."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HBB-022", sub: "genetics", type: "mc",
    q: "During which phase of mitosis do the chromosomes line up along the equator, or center, of the cell?",
    choices: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
    answer: 1,
    rationale: {
      correct: "In metaphase the spindle fibers pull the duplicated chromosomes into a single line across the middle of the cell before the sister chromatids are separated.",
      wrong: ["In prophase the chromatin condenses into visible chromosomes and the nuclear membrane breaks down.",
        null,
        "In anaphase the sister chromatids are pulled apart toward opposite poles of the cell.",
        "In telophase new nuclear membranes form around the two separated sets of chromosomes."]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBB-023", sub: "genetics", type: "mc",
    q: "Hemophilia is an X-linked recessive disorder. If a carrier mother and an unaffected father have children, what fraction of their sons is expected to have hemophilia?",
    choices: ["None", "One quarter", "One half", "All"],
    answer: 2,
    rationale: {
      correct: "The carrier mother passes either her normal X or her affected X with equal probability, and because a son receives his only X chromosome from his mother, half of the sons are expected to be affected.",
      wrong: ["Some sons will be affected, because the mother carries the allele on one of her X chromosomes.",
        "One quarter is the fraction of all her children affected, counting daughters, not the fraction of her sons.",
        null,
        "All sons would be affected only if the mother carried the recessive allele on both of her X chromosomes."]
    },
    diff: 3, secs: 60
  },

  /* ---------- BIOLOGY: DNA/RNA-protein synthesis (4) ---------- */
  {
    id: "HBB-024", sub: "DNA/RNA-protein synthesis", type: "mc",
    q: "Which nitrogenous base is present in RNA but never in DNA?",
    choices: ["Thymine", "Cytosine", "Uracil", "Guanine"],
    answer: 2,
    rationale: {
      correct: "RNA substitutes uracil for thymine, so in RNA it is uracil that pairs with adenine.",
      wrong: ["Thymine is the DNA base that uracil replaces in RNA.",
        "Cytosine appears in both DNA and RNA, where it pairs with guanine.",
        null,
        "Guanine appears in both DNA and RNA, where it pairs with cytosine."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HBB-025", sub: "DNA/RNA-protein synthesis", type: "mc",
    q: "The three-base sequence on a transfer RNA molecule that pairs with a messenger RNA codon is called the:",
    choices: ["Anticodon", "Codon", "Nucleotide", "Gene"],
    answer: 0,
    rationale: {
      correct: "Each tRNA carries an anticodon that base-pairs with the complementary mRNA codon, which is how the correct amino acid is delivered to the growing polypeptide.",
      wrong: [null,
        "A codon is the three-base sequence on the mRNA itself rather than on tRNA.",
        "A nucleotide is a single base-sugar-phosphate unit, one third of a triplet.",
        "A gene is an entire DNA segment coding for a protein, far longer than three bases."]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBB-026", sub: "DNA/RNA-protein synthesis", type: "mc",
    q: "During which phase of the cell cycle is a cell's DNA replicated?",
    choices: ["G1 phase", "S phase", "G2 phase", "M phase"],
    answer: 1,
    rationale: {
      correct: "DNA synthesis occurs during the S phase of interphase, so every chromosome ends up as two identical sister chromatids before division begins.",
      wrong: ["G1 is the growth phase before replication, when the cell enlarges and makes proteins.",
        null,
        "G2 is the phase after replication, when the cell builds the structures needed for division.",
        "M phase is mitosis and cytokinesis, when the already-copied chromosomes are separated."]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBB-027", sub: "DNA/RNA-protein synthesis", type: "mc",
    q: "A segment of a DNA template strand reads A-G-C-T. What is the base sequence of the messenger RNA transcribed from it?",
    choices: ["T-C-G-A", "U-C-G-A", "A-G-C-U", "U-G-C-A"],
    answer: 1,
    rationale: {
      correct: "Transcription builds a complementary strand in which guanine pairs with cytosine and adenine pairs with uracil, so the template A-G-C-T is copied as U-C-G-A.",
      wrong: ["This is the correct complement but uses thymine, the base RNA replaces with uracil.",
        null,
        "This simply repeats the DNA sequence with uracil substituted for thymine instead of pairing the bases.",
        "This complements the first and last bases correctly but copies the middle two directly instead of pairing them."]
    },
    diff: 3, secs: 60
  },

  /* ---------- BIOLOGY: scientific method / taxonomy (3) ---------- */
  {
    id: "HBB-028", sub: "scientific method/taxonomy", type: "mc",
    q: "A student measures how long ice takes to melt at three different room temperatures. Which of the following is the dependent variable?",
    choices: ["The room temperature", "The size of each ice cube used", "The type of container used", "The time required for the ice to melt"],
    answer: 3,
    rationale: {
      correct: "The dependent variable is the outcome the researcher measures, and here the melting time is what changes in response to the temperature.",
      wrong: ["Room temperature is the factor the student deliberately changes, making it the independent variable.",
        "Ice cube size is held constant so that it cannot distort the comparison.",
        "Container type is another condition kept the same across all three trials.",
        null]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBB-029", sub: "scientific method/taxonomy", type: "mc",
    q: "In the scientific method, a hypothesis is best described as:",
    choices: ["A conclusion drawn after the data have been analyzed", "A statement of fact that has been proven beyond doubt", "A testable explanation proposed before an experiment", "A summary of the measurements collected in a trial"],
    answer: 2,
    rationale: {
      correct: "A hypothesis is a tentative, testable explanation or prediction that the experiment is designed to support or refute.",
      wrong: ["A conclusion is what the researcher states after examining the results, not before.",
        "Experiments support or refute ideas but do not prove them beyond doubt; a well-supported explanation is a theory.",
        null,
        "A summary of measurements is the data, which is what the hypothesis is tested against."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HBB-030", sub: "scientific method/taxonomy", type: "mc",
    q: "All organisms whose cells contain a true nucleus are placed in which domain?",
    choices: ["Bacteria", "Archaea", "Eukarya", "Protista"],
    answer: 2,
    rationale: {
      correct: "The three domains are Bacteria, Archaea, and Eukarya, and Eukarya contains every organism built from eukaryotic cells, including animals, plants, fungi, and protists.",
      wrong: ["Bacteria is a domain of prokaryotes, whose cells contain no nucleus.",
        "Archaea is the second domain of prokaryotes, often found in extreme environments.",
        null,
        "Protista is a kingdom of simple eukaryotes, not one of the three domains."]
    },
    diff: 2, secs: 50
  },

  /* ---------- A&P: general terminology and orientation (2) ---------- */
  {
    id: "HBB-031", sub: "A&P", type: "mc",
    q: "A patient who is lying face down on the examination table is in which position?",
    choices: ["Supine", "Lateral", "Anatomical", "Prone"],
    answer: 3,
    rationale: {
      correct: "Prone means lying horizontally with the face and abdomen turned downward.",
      wrong: ["Supine is the opposite position, lying horizontally on the back with the face upward.",
        "The lateral position means lying on one side, either right or left.",
        "Anatomical position is standing erect and facing forward with the palms turned forward.",
        null]
    },
    diff: 1, secs: 55
  },
  {
    id: "HBB-032", sub: "A&P", type: "mc",
    q: "A cut that divides the body into superior and inferior portions is made along which plane?",
    choices: ["The transverse plane", "The midsagittal plane", "The frontal (coronal) plane", "The parasagittal plane"],
    answer: 0,
    rationale: {
      correct: "The transverse, or horizontal, plane runs perpendicular to the long axis of the body and separates it into upper and lower portions; a cross section is cut this way.",
      wrong: [null,
        "The midsagittal plane runs vertically through the midline and produces equal right and left halves.",
        "The frontal or coronal plane separates the body into anterior and posterior portions.",
        "A parasagittal plane runs vertically off the midline and yields unequal right and left portions."]
    },
    diff: 2, secs: 60
  },

  /* ---------- A&P: homeostasis (1) ---------- */
  {
    id: "HBB-033", sub: "A&P", type: "mc",
    q: "When body temperature rises, sweating begins and cools the body back toward normal. This control mechanism is:",
    choices: ["Positive feedback, because the response amplifies the original change", "Positive feedback, because the response reverses the original change", "Negative feedback, because the response amplifies the original change", "Negative feedback, because the response reverses the original change"],
    answer: 3,
    rationale: {
      correct: "Negative feedback opposes the initial change, so a rise in temperature triggers sweating that pushes temperature back toward the set point; most homeostatic systems work this way.",
      wrong: ["Positive feedback does amplify a change, but sweating reverses the temperature rise rather than intensifying it.",
        "The description is wrong: a mechanism that reverses a change is called negative feedback, not positive.",
        "The name is right but the description is wrong, since negative feedback reverses rather than amplifies.",
        null]
    },
    diff: 2, secs: 60
  },

  /* ---------- A&P: integumentary (2) ---------- */
  {
    id: "HBB-034", sub: "A&P", type: "mc",
    q: "Which layer of the skin lies deepest and consists largely of adipose tissue that anchors the skin to the muscle beneath?",
    choices: ["The epidermis", "The dermis", "The hypodermis", "The stratum basale"],
    answer: 2,
    rationale: {
      correct: "The hypodermis, or subcutaneous layer, is the fatty connective tissue beneath the dermis; it insulates and cushions the body and binds the skin to underlying muscle.",
      wrong: ["The epidermis is the thin, avascular outer sheet of epithelium.",
        "The dermis is the fibrous middle layer holding vessels, nerves, follicles, and glands.",
        null,
        "The stratum basale is the deepest layer of the epidermis, not a layer of the skin as a whole."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBB-035", sub: "A&P", type: "mc",
    q: "Which pigment produced in the skin absorbs ultraviolet radiation and shields the deeper cells from sun damage?",
    choices: ["Keratin", "Melanin", "Sebum", "Collagen"],
    answer: 1,
    rationale: {
      correct: "Melanin is the brown-black pigment made by melanocytes in the deep epidermis, and it protects dividing cells from ultraviolet radiation.",
      wrong: ["Keratin is the tough waterproofing protein of skin, hair, and nails, not a pigment.",
        null,
        "Sebum is the oily secretion of the sebaceous glands that lubricates skin and hair.",
        "Collagen is the structural protein that gives the dermis its tensile strength."]
    },
    diff: 2, secs: 60
  },

  /* ---------- A&P: skeletal (2) ---------- */
  {
    id: "HBB-036", sub: "A&P", type: "mc",
    q: "Which tissue is responsible for producing red blood cells, white blood cells, and platelets?",
    choices: ["Red bone marrow", "Yellow bone marrow", "The periosteum", "Compact bone"],
    answer: 0,
    rationale: {
      correct: "Hematopoiesis takes place in red bone marrow, found in spongy bone of the sternum, ribs, vertebrae, pelvis, and the ends of long bones.",
      wrong: [null,
        "Yellow bone marrow fills the medullary cavity of adult long bones and stores fat.",
        "The periosteum is the fibrous membrane covering the outside of a bone and supplying it with vessels.",
        "Compact bone is the dense outer bone tissue that provides strength but forms no blood cells."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBB-037", sub: "A&P", type: "mc",
    q: "The elbow and the knee, which permit movement in only one plane, are examples of which type of joint?",
    choices: ["Ball-and-socket joint", "Pivot joint", "Gliding joint", "Hinge joint"],
    answer: 3,
    rationale: {
      correct: "A hinge joint allows flexion and extension in a single plane, like the hinge of a door, which is exactly how the elbow and knee move.",
      wrong: ["A ball-and-socket joint such as the hip or shoulder allows movement in every direction.",
        "A pivot joint allows rotation around one axis, as when the head turns from side to side.",
        "A gliding joint lets flat bone surfaces slide over one another, as in the wrist and ankle.",
        null]
    },
    diff: 2, secs: 60
  },

  /* ---------- A&P: muscular (2) ---------- */
  {
    id: "HBB-038", sub: "A&P", type: "mc",
    q: "Which type of muscle tissue forms the walls of the stomach and intestines and produces peristalsis?",
    choices: ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "Striated muscle"],
    answer: 2,
    rationale: {
      correct: "Smooth muscle is involuntary and non-striated, and its rhythmic waves of contraction in the walls of hollow organs move contents along as peristalsis.",
      wrong: ["Skeletal muscle is voluntary, striated, and attached to bone.",
        "Cardiac muscle is involuntary and striated but exists only in the wall of the heart.",
        null,
        "Striated muscle refers to skeletal and cardiac muscle, neither of which lines the digestive organs."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBB-039", sub: "A&P", type: "mc",
    q: "According to the sliding filament theory, a muscle shortens when which two protein filaments slide past one another?",
    choices: ["Actin and myosin", "Actin and troponin", "Myosin and collagen", "Keratin and elastin"],
    answer: 0,
    rationale: {
      correct: "The thin actin filaments are pulled toward the center of the sarcomere by the heads of the thick myosin filaments, a process that requires both calcium and ATP.",
      wrong: [null,
        "Troponin helps regulate the thin filament, but it does not slide; actin slides against myosin.",
        "Myosin is correct, but collagen is a connective tissue fiber of tendons rather than a filament inside the sarcomere.",
        "Keratin and elastin are structural proteins of skin and connective tissue, not contractile filaments."]
    },
    diff: 3, secs: 60
  },

  /* ---------- A&P: nervous (3) ---------- */
  {
    id: "HBB-040", sub: "A&P", type: "mc",
    q: "Which part of a neuron conducts the nerve impulse away from the cell body?",
    choices: ["The dendrite", "The synapse", "The myelin sheath", "The axon"],
    answer: 3,
    rationale: {
      correct: "The axon is the single long process that carries the action potential away from the cell body toward the axon terminals and the next cell.",
      wrong: ["Dendrites are the branched extensions that receive signals and carry them toward the cell body.",
        "A synapse is the junction between two neurons rather than a conducting part of one neuron.",
        "The myelin sheath is fatty insulation wrapped around an axon; it speeds conduction but does not itself conduct.",
        null]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBB-041", sub: "A&P", type: "mc",
    q: "Which part of the brain contains the vital centers that regulate heart rate, breathing, and blood pressure?",
    choices: ["The cerebrum", "The cerebellum", "The medulla oblongata", "The hypothalamus"],
    answer: 2,
    rationale: {
      correct: "The medulla oblongata is the lowest part of the brainstem, and its cardiac, vasomotor, and respiratory centers govern these involuntary functions.",
      wrong: ["The cerebrum handles conscious thought, voluntary movement, and interpretation of sensation.",
        "The cerebellum coordinates balance, posture, and smooth voluntary movement.",
        null,
        "The hypothalamus regulates temperature, hunger, thirst, and the activity of the pituitary gland."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBB-042", sub: "A&P", type: "mc",
    q: "Pulling a hand away from a hot stove before the pain is even felt is possible because a simple reflex is processed by:",
    choices: ["The spinal cord", "The cerebral cortex", "The thalamus", "The cerebellum"],
    answer: 0,
    rationale: {
      correct: "A simple reflex arc runs from a sensory neuron into the spinal cord and straight back out through a motor neuron, so the response occurs before the signal ever reaches the brain.",
      wrong: [null,
        "The cerebral cortex registers the pain a moment later, after the withdrawal has already happened.",
        "The thalamus relays sensory information upward to the cortex and is not part of a reflex arc.",
        "The cerebellum refines voluntary movement and plays no role in a simple withdrawal reflex."]
    },
    diff: 3, secs: 60
  },

  /* ---------- A&P: endocrine (3) ---------- */
  {
    id: "HBB-043", sub: "A&P", type: "mc",
    q: "Which hormone released from the posterior pituitary causes the kidneys to reabsorb more water?",
    choices: ["Oxytocin", "Aldosterone", "Growth hormone (somatotropin)", "Antidiuretic hormone"],
    answer: 3,
    rationale: {
      correct: "Antidiuretic hormone, stored in and released from the posterior pituitary, makes the collecting ducts of the nephron more permeable to water so that less urine is produced.",
      wrong: ["Oxytocin is the other posterior pituitary hormone; it triggers uterine contraction and milk ejection.",
        "Aldosterone comes from the adrenal cortex and causes sodium reabsorption, with water following passively.",
        "Growth hormone is an anterior pituitary hormone that stimulates growth of bone and soft tissue.",
        null]
    },
    diff: 3, secs: 60
  },
  {
    id: "HBB-044", sub: "A&P", type: "mc",
    q: "Which structure links the nervous system to the endocrine system by controlling the release of pituitary hormones?",
    choices: ["The thalamus", "The hypothalamus", "The pineal gland", "The thyroid gland"],
    answer: 1,
    rationale: {
      correct: "The hypothalamus sits directly above the pituitary and connects to it by the infundibulum, sending releasing hormones and nerve signals that govern pituitary secretion.",
      wrong: ["The thalamus is a sensory relay center and exerts no endocrine control over the pituitary.",
        null,
        "The pineal gland secretes melatonin and helps set the sleep-wake cycle.",
        "The thyroid gland responds to pituitary TSH rather than controlling the pituitary."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBB-045", sub: "A&P", type: "mc",
    q: "Which hormone lowers blood glucose by promoting the uptake of glucose into body cells?",
    choices: ["Glucagon", "Cortisol", "Epinephrine", "Insulin"],
    answer: 3,
    rationale: {
      correct: "Insulin, secreted by the beta cells of the pancreas, drives glucose out of the blood and into muscle, liver, and fat cells, lowering the blood glucose level.",
      wrong: ["Glucagon does the opposite, raising blood glucose by triggering breakdown of liver glycogen.",
        "Cortisol from the adrenal cortex raises blood glucose during prolonged stress.",
        "Epinephrine from the adrenal medulla raises blood glucose as part of the fight-or-flight response.",
        null]
    },
    diff: 2, secs: 60
  },

  /* ---------- A&P: cardiovascular (5) ---------- */
  {
    id: "HBB-046", sub: "A&P", type: "mc",
    q: "Freshly oxygenated blood returning from the lungs enters which chamber of the heart?",
    choices: ["The right atrium", "The right ventricle", "The left atrium", "The left ventricle"],
    answer: 2,
    rationale: {
      correct: "The pulmonary veins deliver oxygenated blood from the lungs into the left atrium, which then passes it through the mitral valve into the left ventricle.",
      wrong: ["The right atrium receives oxygen-poor blood returning from the body through the venae cavae.",
        "The right ventricle receives blood from the right atrium and pumps it out to the lungs.",
        null,
        "The left ventricle receives blood from the left atrium rather than directly from the lungs."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBB-047", sub: "A&P", type: "mc",
    q: "Exchange of oxygen, nutrients, and wastes between the blood and the body tissues occurs across the walls of which vessels?",
    choices: ["Arteries", "Arterioles", "Capillaries", "Veins"],
    answer: 2,
    rationale: {
      correct: "Capillary walls are only one cell thick, which lets gases, nutrients, and wastes diffuse freely between the blood and the surrounding tissue fluid.",
      wrong: ["Arteries have thick muscular walls built to carry blood away from the heart under high pressure.",
        "Arterioles are small arteries that regulate flow into capillary beds, but their walls are still too thick for exchange.",
        null,
        "Veins return blood to the heart and contain valves; their walls are also too thick for exchange."]
    },
    diff: 1, secs: 55
  },
  {
    id: "HBB-048", sub: "A&P", type: "mc",
    q: "Which formed element of the blood carries oxygen by binding it to hemoglobin?",
    choices: ["Erythrocytes", "Leukocytes", "Thrombocytes", "Lymphocytes"],
    answer: 0,
    rationale: {
      correct: "Erythrocytes, or red blood cells, are packed with hemoglobin, the iron-containing protein that binds oxygen in the lungs and releases it in the tissues.",
      wrong: [null,
        "Leukocytes, or white blood cells, defend the body against infection and carry no oxygen.",
        "Thrombocytes, or platelets, are cell fragments that begin the clotting process.",
        "Lymphocytes are a class of white blood cell responsible for specific immune responses."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBB-049", sub: "A&P", type: "mc",
    q: "The muscular wall of the heart receives its own supply of oxygenated blood from which vessels?",
    choices: ["The pulmonary arteries", "The carotid arteries", "The pulmonary veins", "The coronary arteries"],
    answer: 3,
    rationale: {
      correct: "The coronary arteries branch off the base of the aorta and run across the surface of the heart to supply the myocardium itself; blockage of one causes a heart attack.",
      wrong: ["The pulmonary arteries carry oxygen-poor blood from the right ventricle to the lungs.",
        "The carotid arteries ascend the neck to supply the head and the brain.",
        "The pulmonary veins return oxygen-rich blood from the lungs to the left atrium.",
        null]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBB-050", sub: "A&P", type: "mc",
    q: "The pH of normal arterial blood is held within which narrow range?",
    choices: ["6.85 to 6.95", "7.00 to 7.10", "7.35 to 7.45", "7.60 to 7.70"],
    answer: 2,
    rationale: {
      correct: "Arterial blood is kept slightly alkaline at about 7.35 to 7.45, and chemical buffers, the lungs, and the kidneys work together to hold it there.",
      wrong: ["A pH below 7.0 represents profound acidosis and is not survivable for long.",
        "A pH of 7.00 to 7.10 represents severe acidosis, well below the normal range.",
        null,
        "A pH of 7.60 to 7.70 represents severe alkalosis, well above the normal range."]
    },
    diff: 3, secs: 60
  },

  /* ---------- A&P: lymphatic / immune (2) ---------- */
  {
    id: "HBB-051", sub: "A&P", type: "mc",
    q: "Which of the following is a primary function of the lymphatic system?",
    choices: ["Returning excess tissue fluid to the bloodstream", "Pumping oxygenated blood to the body tissues", "Producing digestive enzymes for the small intestine", "Regulating the concentration of blood glucose"],
    answer: 0,
    rationale: {
      correct: "Lymphatic capillaries collect the fluid that leaks out of blood capillaries into the tissues and return it to the venous circulation, which prevents edema.",
      wrong: [null,
        "Pumping oxygenated blood is the work of the heart and the arterial side of the cardiovascular system.",
        "Digestive enzymes for the small intestine come from the pancreas and the intestinal lining.",
        "Blood glucose is regulated by insulin and glucagon from the pancreas."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBB-052", sub: "A&P", type: "mc",
    q: "Intact skin, mucous membranes, fever, and phagocytosis are all examples of which kind of body defense?",
    choices: ["Specific (adaptive) immunity", "Nonspecific (innate) immunity", "Passive artificial immunity", "Active artificial immunity"],
    answer: 1,
    rationale: {
      correct: "Nonspecific, or innate, defenses act the same way against any invader and need no prior exposure; barriers, inflammation, fever, and phagocytes all belong to this category.",
      wrong: ["Specific immunity is the targeted response of B and T lymphocytes against one particular antigen.",
        null,
        "Passive artificial immunity is borrowed protection given by injecting ready-made antibodies.",
        "Active artificial immunity is protection developed after a vaccine prompts the body to make its own antibodies."]
    },
    diff: 2, secs: 60
  },

  /* ---------- A&P: respiratory (2) ---------- */
  {
    id: "HBB-053", sub: "A&P", type: "mc",
    q: "The vocal cords, which produce sound as air passes over them, are located within which structure?",
    choices: ["The pharynx", "The larynx", "The trachea", "The epiglottis"],
    answer: 1,
    rationale: {
      correct: "The larynx, or voice box, is the cartilaginous structure between the pharynx and the trachea, and the vocal cords stretch across its interior.",
      wrong: ["The pharynx is the shared throat passage above the larynx, used by both air and food.",
        null,
        "The trachea is the cartilage-ringed windpipe below the larynx that carries air toward the bronchi.",
        "The epiglottis is the cartilage flap that folds over the larynx to keep food out of the airway."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBB-054", sub: "A&P", type: "mc",
    q: "In the neck, the trachea is located in which position relative to the esophagus?",
    choices: ["Anterior to the esophagus", "Posterior to the esophagus", "Lateral to the esophagus", "Inferior to the esophagus"],
    answer: 0,
    rationale: {
      correct: "The trachea lies directly in front of, or anterior to, the esophagus, which is why the windpipe can be felt at the front of the neck.",
      wrong: [null,
        "Posterior would place the trachea behind the esophagus, the reverse of the true arrangement.",
        "The two tubes are stacked front to back in the midline rather than sitting side by side.",
        "The trachea runs alongside the esophagus down the neck rather than beneath it."]
    },
    diff: 3, secs: 60
  },

  /* ---------- A&P: digestive (2) ---------- */
  {
    id: "HBB-055", sub: "A&P", type: "mc",
    q: "Which enzyme found in saliva begins the chemical digestion of starch in the mouth?",
    choices: ["Pepsin", "Lipase", "Amylase", "Trypsin"],
    answer: 2,
    rationale: {
      correct: "Salivary amylase starts breaking complex carbohydrates into shorter sugar chains while the food is still being chewed.",
      wrong: ["Pepsin is the gastric enzyme that begins protein digestion in the acidic stomach.",
        "Lipase, mainly from the pancreas, splits triglycerides into fatty acids and glycerol.",
        null,
        "Trypsin is a pancreatic enzyme that continues protein digestion in the small intestine."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBB-056", sub: "A&P", type: "mc",
    q: "Bile, which emulsifies fats, is produced by the liver and then stored in which organ?",
    choices: ["The gallbladder", "The pancreas", "The duodenum", "The spleen"],
    answer: 0,
    rationale: {
      correct: "The gallbladder is a small sac tucked under the liver that concentrates and stores bile, releasing it into the duodenum when fatty food arrives.",
      wrong: [null,
        "The pancreas secretes digestive enzymes and bicarbonate, not bile.",
        "The duodenum is where bile is delivered to act on fat, but it does not store it.",
        "The spleen filters blood and recycles worn red blood cells; it has no digestive role."]
    },
    diff: 2, secs: 60
  },

  /* ---------- A&P: urinary (2) ---------- */
  {
    id: "HBB-057", sub: "A&P", type: "mc",
    q: "Urine formed in the kidney travels to the urinary bladder through which structure?",
    choices: ["The urethra", "The ureter", "The renal pelvis", "The collecting duct"],
    answer: 1,
    rationale: {
      correct: "Each ureter is a muscular tube that carries urine from the renal pelvis of one kidney down to the urinary bladder.",
      wrong: ["The urethra is the single tube that drains urine from the bladder to the outside of the body.",
        null,
        "The renal pelvis is the funnel inside the kidney that gathers urine before it enters the ureter.",
        "The collecting duct is a microscopic tubule inside the kidney that empties into the renal pelvis."]
    },
    diff: 1, secs: 55
  },
  {
    id: "HBB-058", sub: "A&P", type: "mc",
    q: "Which portion of the nephron dips into the renal medulla and builds the salt gradient that allows urine to be concentrated?",
    choices: ["Bowman's capsule", "The proximal convoluted tubule", "The loop of Henle", "The distal convoluted tubule"],
    answer: 2,
    rationale: {
      correct: "The loop of Henle descends into the medulla and reabsorbs water on the way down and salt on the way up, creating the concentration gradient that lets the collecting duct concentrate urine.",
      wrong: ["Bowman's capsule is the cup that surrounds the glomerulus and collects the filtrate.",
        "The proximal convoluted tubule reabsorbs most of the water, glucose, and sodium from the filtrate.",
        null,
        "The distal convoluted tubule fine-tunes sodium, potassium, and acid-base balance near the end of the nephron."]
    },
    diff: 3, secs: 60
  },

  /* ---------- A&P: reproductive (2) ---------- */
  {
    id: "HBB-059", sub: "A&P", type: "mc",
    q: "Within the male testis, sperm cells are produced inside which structures?",
    choices: ["The seminiferous tubules", "The interstitial cells", "The seminal vesicles", "The ejaculatory ducts"],
    answer: 0,
    rationale: {
      correct: "Spermatogenesis takes place in the tightly coiled seminiferous tubules that fill each testis; the sperm then travel to the epididymis to mature.",
      wrong: [null,
        "The interstitial cells lie between the tubules and secrete testosterone rather than producing sperm.",
        "The seminal vesicles are accessory glands that add fructose-rich fluid to semen.",
        "The ejaculatory duct is the short passage carrying sperm and seminal fluid into the urethra."]
    },
    diff: 3, secs: 60
  },
  {
    id: "HBB-060", sub: "A&P", type: "mc",
    q: "In a typical 28-day menstrual cycle, ovulation occurs at approximately which day?",
    choices: ["Day 1", "Day 7", "Day 14", "Day 21"],
    answer: 2,
    rationale: {
      correct: "A surge of luteinizing hormone near the midpoint of the cycle, about day 14, causes the mature follicle to rupture and release the ovum.",
      wrong: ["Day 1 marks the start of menstruation, when the endometrium is shed.",
        "Day 7 falls within the follicular phase, while the follicle is still maturing.",
        null,
        "Day 21 falls in the luteal phase after ovulation, when progesterone from the corpus luteum peaks."]
    },
    diff: 2, secs: 60
  }

] };
