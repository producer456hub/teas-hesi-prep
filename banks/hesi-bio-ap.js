window.BANKS = window.BANKS || {};
window.BANKS["hesi-bio-ap"] = {
  exam: "hesi",
  section: "bio-ap",
  questions: [

  /* ---------- BIOLOGY: macromolecules (6) ---------- */
  {
    id: "HBA-001", sub: "macromolecules", type: "mc",
    q: "Proteins are polymers assembled from which of the following monomers?",
    choices: ["Amino acids", "Monosaccharides", "Nucleotides", "Fatty acids"],
    answer: 0,
    rationale: {
      correct: "Proteins are chains of amino acids linked by peptide bonds; every amino acid carries an amine group, a carboxyl group, and a variable R-group.",
      wrong: [null,
        "Monosaccharides such as glucose are the monomers of carbohydrates.",
        "Nucleotides are the monomers of the nucleic acids DNA and RNA.",
        "Fatty acids join with glycerol to form triglycerides, a type of lipid."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HBA-002", sub: "macromolecules", type: "mc",
    q: "Triglycerides, steroids, and phospholipids are all classified as which type of biological molecule?",
    choices: ["Proteins", "Carbohydrates", "Lipids", "Nucleic acids"],
    answer: 2,
    rationale: {
      correct: "Lipids are the nonpolar, water-insoluble class that includes fats (triglycerides), steroids such as cholesterol, and the phospholipids that build the cell membrane.",
      wrong: ["Proteins are polymers of amino acids and include enzymes, antibodies, and structural fibers.",
        "Carbohydrates are sugars and their polymers, used mainly for quick energy and structure.",
        null,
        "Nucleic acids are DNA and RNA, the molecules that store and carry genetic information."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HBA-003", sub: "macromolecules", type: "mc",
    q: "Which polysaccharide do animals use to store excess glucose in the liver and skeletal muscle?",
    choices: ["Starch", "Glycogen", "Cellulose", "Chitin"],
    answer: 1,
    rationale: {
      correct: "Glycogen is the branched storage polysaccharide of animals, stockpiled in liver and muscle and broken down to release glucose when blood sugar falls.",
      wrong: ["Starch is the glucose storage polysaccharide of plants, not of animals.",
        null,
        "Cellulose is the structural polysaccharide of plant cell walls and is indigestible to humans.",
        "Chitin is the structural polysaccharide of arthropod exoskeletons and fungal cell walls."]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBA-004", sub: "macromolecules", type: "mc",
    q: "Every amino acid contains a central carbon bonded to an R-group and which two functional groups?",
    choices: ["A hydroxyl group and a phosphate group", "A carboxyl group and a phosphate group", "An amine group and a hydroxyl group", "An amine group and a carboxyl group"],
    answer: 3,
    rationale: {
      correct: "Each amino acid has an amine group (-NH2) at one end and a carboxyl group (-COOH) at the other; a peptide bond forms between the carboxyl of one amino acid and the amine of the next.",
      wrong: ["Hydroxyl groups appear in sugars and alcohols, and phosphate groups belong to nucleotides and ATP.",
        "The carboxyl group is correct, but phosphate groups are found in nucleotides and phospholipids, not amino acids.",
        "The amine group is correct, but the second group on an amino acid is a carboxyl, not a hydroxyl.",
        null]
    },
    diff: 3, secs: 55
  },
  {
    id: "HBA-005", sub: "macromolecules", type: "mc",
    q: "Which reaction splits a polymer into its individual monomers by adding a molecule of water?",
    choices: ["Hydrolysis", "Dehydration synthesis", "Denaturation", "Oxidation"],
    answer: 0,
    rationale: {
      correct: "Hydrolysis uses a water molecule to break the bond between two monomers, which is how digestive enzymes reduce starch, protein, and fat to absorbable units.",
      wrong: [null,
        "Dehydration synthesis is the reverse reaction: it joins two monomers and releases a water molecule.",
        "Denaturation is the loss of a protein's functional three-dimensional shape from heat or a pH change.",
        "Oxidation is the loss of electrons from a molecule, as occurs when glucose is broken down for energy."]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBA-006", sub: "macromolecules", type: "mc",
    q: "A single nucleotide consists of a nitrogenous base, a phosphate group, and which third component?",
    choices: ["An amine group", "A fatty acid chain", "A five-carbon sugar", "A glycerol backbone"],
    answer: 2,
    rationale: {
      correct: "Each nucleotide is built from a five-carbon sugar (deoxyribose in DNA, ribose in RNA) bonded to a phosphate group and one nitrogenous base.",
      wrong: ["Amine groups are part of amino acids, the monomers of proteins.",
        "Fatty acid chains are components of triglycerides and phospholipids, not of nucleotides.",
        null,
        "Glycerol is the three-carbon backbone that anchors fatty acids in a fat molecule."]
    },
    diff: 2, secs: 50
  },

  /* ---------- BIOLOGY: cell structure (6) ---------- */
  {
    id: "HBA-007", sub: "cell structure", type: "mc",
    q: "Which organelle modifies, sorts, and packages proteins into vesicles for transport out of the cell?",
    choices: ["Rough endoplasmic reticulum", "Golgi apparatus", "Lysosome", "Nucleolus"],
    answer: 1,
    rationale: {
      correct: "The Golgi apparatus receives proteins from the endoplasmic reticulum, chemically modifies them, and packages them into vesicles for secretion or delivery elsewhere in the cell.",
      wrong: ["The rough ER synthesizes proteins on its ribosomes and ships them to the Golgi, but it does not do the final packaging.",
        null,
        "Lysosomes hold digestive enzymes that break down worn organelles and engulfed material.",
        "The nucleolus is the region inside the nucleus where ribosomal subunits are assembled."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HBA-008", sub: "cell structure", type: "mc",
    q: "Which of the following is found in eukaryotic cells but not in prokaryotic cells?",
    choices: ["A membrane-bound nucleus", "A plasma membrane", "Ribosomes", "Genetic material in the form of DNA"],
    answer: 0,
    rationale: {
      correct: "Eukaryotic cells enclose their DNA inside a membrane-bound nucleus and also contain other membrane-bound organelles, while prokaryotic cells have neither.",
      wrong: [null,
        "Every living cell, prokaryotic or eukaryotic, is bounded by a plasma membrane.",
        "Both cell types build protein on ribosomes, although prokaryotic ribosomes are smaller.",
        "Both store hereditary information in DNA; in prokaryotes it is a single circular chromosome lying free in the cytoplasm."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HBA-009", sub: "cell structure", type: "mc",
    q: "The movement of water across a selectively permeable membrane toward the side with the higher solute concentration is called:",
    choices: ["Active transport", "Facilitated diffusion", "Phagocytosis", "Osmosis"],
    answer: 3,
    rationale: {
      correct: "Osmosis is the passive diffusion of water across a selectively permeable membrane from a region of lower solute concentration to a region of higher solute concentration.",
      wrong: ["Active transport pumps solutes against their concentration gradient and requires ATP.",
        "Facilitated diffusion moves solutes such as glucose down a gradient through a membrane protein.",
        "Phagocytosis is the engulfing of large particles by an infolding of the cell membrane.",
        null]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBA-010", sub: "cell structure", type: "mc",
    q: "A red blood cell placed in a hypertonic solution will most likely:",
    choices: ["Swell and rupture as water enters the cell", "Shrivel as water leaves the cell", "Stay the same size, with no net movement of water", "Swell slightly and then return to its original volume"],
    answer: 1,
    rationale: {
      correct: "A hypertonic solution holds a higher solute concentration than the cell, so water moves out of the cell by osmosis and the cell shrinks, or crenates.",
      wrong: ["Swelling and rupture (lysis) occurs in a hypotonic solution, where water moves into the cell.",
        null,
        "No net water movement occurs in an isotonic solution, where the concentrations are equal.",
        "A cell does not self-correct its volume this way; the direction of water movement is set by the solute gradient."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HBA-011", sub: "cell structure", type: "mc",
    q: "Which form of membrane transport moves a substance against its concentration gradient using cellular energy?",
    choices: ["Simple diffusion", "Osmosis", "Active transport", "Facilitated diffusion"],
    answer: 2,
    rationale: {
      correct: "Active transport spends ATP to pump a substance from an area of lower concentration to an area of higher concentration, as the sodium-potassium pump does.",
      wrong: ["Simple diffusion is passive and moves substances down their concentration gradient.",
        "Osmosis is the passive movement of water down its own concentration gradient.",
        null,
        "Facilitated diffusion uses a membrane protein but is still passive and requires no ATP."]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBA-012", sub: "cell structure", type: "mc",
    q: "Which organelle is the primary site of lipid synthesis and drug detoxification in a liver cell?",
    choices: ["Rough endoplasmic reticulum", "Golgi apparatus", "Mitochondrion", "Smooth endoplasmic reticulum"],
    answer: 3,
    rationale: {
      correct: "The smooth ER lacks ribosomes and specializes in synthesizing lipids and steroids and in detoxifying drugs and alcohol, which is why liver cells contain so much of it.",
      wrong: ["The rough ER is studded with ribosomes and synthesizes proteins destined for secretion or for membranes.",
        "The Golgi apparatus modifies and packages molecules the ER has already produced.",
        "The mitochondrion generates ATP through cellular respiration and has no role in detoxification.",
        null]
    },
    diff: 3, secs: 55
  },

  /* ---------- BIOLOGY: cellular respiration / photosynthesis (5) ---------- */
  {
    id: "HBA-013", sub: "cellular respiration/photosynthesis", type: "mc",
    q: "Which stage of cellular respiration takes place in the cytoplasm rather than inside the mitochondrion?",
    choices: ["Glycolysis", "The Krebs cycle", "The electron transport chain", "Oxidative phosphorylation"],
    answer: 0,
    rationale: {
      correct: "Glycolysis splits one glucose into two pyruvate molecules in the cytoplasm, yielding a net of 2 ATP and 2 NADH without requiring oxygen.",
      wrong: [null,
        "The Krebs (citric acid) cycle runs in the mitochondrial matrix.",
        "The electron transport chain is embedded in the inner mitochondrial membrane.",
        "Oxidative phosphorylation is the ATP-generating step coupled to the electron transport chain at the inner mitochondrial membrane."]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBA-014", sub: "cellular respiration/photosynthesis", type: "mc",
    q: "During aerobic respiration, which molecule serves as the final electron acceptor at the end of the electron transport chain?",
    choices: ["Carbon dioxide", "Oxygen", "Glucose", "Pyruvate"],
    answer: 1,
    rationale: {
      correct: "Oxygen accepts the spent electrons at the end of the chain and combines with hydrogen ions to form water, which is why this pathway cannot run without oxygen.",
      wrong: ["Carbon dioxide is a waste product released by the Krebs cycle, not an electron acceptor.",
        null,
        "Glucose is the starting fuel that donates electrons rather than accepting them.",
        "Pyruvate is the product of glycolysis and is fed into the Krebs cycle."]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBA-015", sub: "cellular respiration/photosynthesis", type: "mc",
    q: "When a skeletal muscle cell runs short of oxygen during intense exercise, pyruvate is converted into which product?",
    choices: ["Ethanol", "Acetyl-CoA", "Lactic acid", "Carbon dioxide"],
    answer: 2,
    rationale: {
      correct: "Without adequate oxygen the muscle cell carries out lactic acid fermentation, converting pyruvate to lactic acid so that glycolysis can keep producing a small amount of ATP.",
      wrong: ["Ethanol is the product of alcoholic fermentation in yeast, not of human muscle metabolism.",
        "Pyruvate becomes acetyl-CoA only when oxygen is available and the Krebs cycle can proceed.",
        null,
        "Carbon dioxide is released during aerobic respiration and alcoholic fermentation, not lactic acid fermentation."]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBA-016", sub: "cellular respiration/photosynthesis", type: "mc",
    q: "The oxygen gas released during photosynthesis is produced by the splitting of which molecule?",
    choices: ["Carbon dioxide", "Glucose", "ATP", "Water"],
    answer: 3,
    rationale: {
      correct: "In the light-dependent reactions water is split, supplying electrons to chlorophyll, and the leftover oxygen atoms are released as O2 gas.",
      wrong: ["Carbon dioxide is taken in and fixed into sugar during the Calvin cycle; its oxygen is not released as gas.",
        "Glucose is a product of photosynthesis, not the source of the released oxygen.",
        "ATP is an energy carrier made during the light reactions and spent in the Calvin cycle.",
        null]
    },
    diff: 3, secs: 55
  },
  {
    id: "HBA-017", sub: "cellular respiration/photosynthesis", type: "mc",
    q: "In which region of the chloroplast does the Calvin cycle use ATP and NADPH to build sugar from carbon dioxide?",
    choices: ["The thylakoid membrane", "The stroma", "The outer chloroplast membrane", "The intermembrane space"],
    answer: 1,
    rationale: {
      correct: "The Calvin cycle, or light-independent reactions, occurs in the stroma, the fluid surrounding the thylakoids, where carbon dioxide is fixed into carbohydrate.",
      wrong: ["The thylakoid membrane houses the light-dependent reactions that generate the ATP and NADPH the Calvin cycle spends.",
        null,
        "The outer membrane is a boundary layer and is not a site of photosynthetic reactions.",
        "The intermembrane space lies between the two envelope membranes and holds no Calvin cycle enzymes."]
    },
    diff: 2, secs: 50
  },

  /* ---------- BIOLOGY: genetics (6) ---------- */
  {
    id: "HBA-018", sub: "genetics", type: "mc",
    q: "The observable physical traits that an organism displays are collectively known as its:",
    choices: ["Phenotype", "Genotype", "Karyotype", "Genome"],
    answer: 0,
    rationale: {
      correct: "The phenotype is the set of physical characteristics actually expressed, such as height or coat color, produced by the genotype interacting with the environment.",
      wrong: [null,
        "The genotype is the combination of alleles an organism carries, which may or may not be visible.",
        "A karyotype is a photographic display of an individual's chromosomes arranged by size and shape.",
        "The genome is the complete set of genetic material an organism possesses."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HBA-019", sub: "genetics", type: "mc",
    q: "An organism whose genotype for a given trait is Tt is described as:",
    choices: ["Homozygous dominant", "Homozygous recessive", "Heterozygous", "Codominant"],
    answer: 2,
    rationale: {
      correct: "Heterozygous means the two alleles for a gene are different, as in Tt; the dominant allele determines the phenotype while the recessive allele is carried but masked.",
      wrong: ["Homozygous dominant describes two identical dominant alleles, written TT.",
        "Homozygous recessive describes two identical recessive alleles, written tt.",
        null,
        "Codominance is a pattern in which both alleles are fully expressed at once, as in AB blood type."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HBA-020", sub: "genetics", type: "mc",
    q: "In guinea pigs, black coat color (B) is dominant over white (b). If a homozygous black guinea pig is crossed with a white guinea pig, what percentage of the offspring is expected to be white?",
    choices: ["0%", "25%", "50%", "100%"],
    answer: 0,
    rationale: {
      correct: "A BB parent can donate only B and a bb parent can donate only b, so every offspring is Bb and black; none receives the two recessive alleles a white coat requires.",
      wrong: [null,
        "25% is the recessive result of a cross between two heterozygotes (Bb x Bb).",
        "50% is the recessive result when a heterozygote is crossed with a homozygous recessive (Bb x bb).",
        "100% white would require both parents to be homozygous recessive (bb x bb)."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HBA-021", sub: "genetics", type: "mc",
    q: "In mice, black fur (B) is dominant over brown fur (b). What percentage of the offspring of a Bb x bb cross is expected to have brown fur?",
    choices: ["0%", "25%", "75%", "50%"],
    answer: 3,
    rationale: {
      correct: "The Bb parent contributes B or b with equal probability and the bb parent always contributes b, so half the offspring are Bb (black) and half are bb (brown).",
      wrong: ["0% recessive offspring would require one parent to be homozygous dominant (BB).",
        "25% is the recessive fraction produced by a Bb x Bb cross.",
        "75% is the fraction showing the dominant phenotype in a Bb x Bb cross, not the recessive fraction.",
        null]
    },
    diff: 2, secs: 55
  },
  {
    id: "HBA-022", sub: "genetics", type: "mc",
    q: "Red-green color blindness is a recessive X-linked trait. Why does it appear far more often in males than in females?",
    choices: ["Males inherit two X chromosomes, so recessive alleles pair together", "Males have only one X chromosome, so one recessive allele is expressed", "The allele is carried on the Y chromosome and passed from father to son", "Males inherit the allele from their father rather than from their mother"],
    answer: 1,
    rationale: {
      correct: "A male has one X and one Y, so a single recessive allele on his X has no matching dominant allele to mask it and the trait is expressed.",
      wrong: ["Females, not males, carry two X chromosomes, which is why females are usually unaffected carriers.",
        null,
        "The allele lies on the X chromosome; a father passes his Y, not his X, to a son.",
        "A male receives his only X chromosome from his mother, so the allele comes from the maternal side."]
    },
    diff: 3, secs: 60
  },
  {
    id: "HBA-023", sub: "genetics", type: "mc",
    q: "Compared with the original parent cell, meiosis produces daughter cells with which characteristics?",
    choices: ["Four cells, each with half the parent's chromosome number", "Two cells, each with half the parent's chromosome number", "Four cells, each with the same chromosome number as the parent", "Two cells, each with the same chromosome number as the parent"],
    answer: 0,
    rationale: {
      correct: "Meiosis carries out two consecutive divisions and yields four genetically distinct haploid gametes, each with half the chromosome number of the original diploid cell.",
      wrong: [null,
        "Two divisions occur, so four cells result; two haploid cells would be the product of meiosis I alone.",
        "Meiosis halves the chromosome number, which is what allows fertilization to restore the diploid count.",
        "Two cells retaining the parent's chromosome number is the product of mitosis, not meiosis."]
    },
    diff: 2, secs: 55
  },

  /* ---------- BIOLOGY: DNA/RNA-protein synthesis (4) ---------- */
  {
    id: "HBA-024", sub: "DNA/RNA-protein synthesis", type: "mc",
    q: "In a double-stranded DNA molecule, adenine always pairs with which nitrogenous base?",
    choices: ["Guanine", "Cytosine", "Thymine", "Uracil"],
    answer: 2,
    rationale: {
      correct: "DNA base pairing is complementary and fixed: adenine bonds with thymine through two hydrogen bonds, and guanine bonds with cytosine through three.",
      wrong: ["Guanine pairs with cytosine, not with adenine.",
        "Cytosine is the partner of guanine in a DNA molecule.",
        null,
        "Uracil replaces thymine in RNA, so it does not appear in DNA at all."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HBA-025", sub: "DNA/RNA-protein synthesis", type: "mc",
    q: "The process in which a DNA sequence is copied into a strand of messenger RNA is called:",
    choices: ["Transcription", "Translation", "Replication", "Transduction"],
    answer: 0,
    rationale: {
      correct: "Transcription takes place in the nucleus, where RNA polymerase reads a DNA template and builds a complementary mRNA strand that then exits to the cytoplasm.",
      wrong: [null,
        "Translation is the later step in which a ribosome reads mRNA and assembles a polypeptide.",
        "Replication is the copying of DNA into two identical DNA molecules before cell division.",
        "Transduction is the transfer of bacterial DNA from one cell to another by a virus."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HBA-026", sub: "DNA/RNA-protein synthesis", type: "mc",
    q: "A sequence of three consecutive bases on an mRNA molecule that specifies one amino acid is called a:",
    choices: ["Gene", "Anticodon", "Nucleotide", "Codon"],
    answer: 3,
    rationale: {
      correct: "A codon is a triplet of mRNA bases that the ribosome reads as the instruction for one amino acid or as a start or stop signal.",
      wrong: ["A gene is an entire DNA segment coding for a protein, far longer than three bases.",
        "An anticodon is the complementary base triplet carried by a tRNA molecule, not by mRNA.",
        "A nucleotide is a single base-sugar-phosphate unit, one third of a codon.",
        null]
    },
    diff: 2, secs: 50
  },
  {
    id: "HBA-027", sub: "DNA/RNA-protein synthesis", type: "mc",
    q: "During translation, the joining of amino acids into a polypeptide chain occurs at which structure?",
    choices: ["The nucleolus", "The ribosome", "The Golgi apparatus", "The nuclear pore"],
    answer: 1,
    rationale: {
      correct: "The ribosome binds mRNA and advances along it codon by codon while tRNA molecules deliver the matching amino acids, which are bonded into a growing polypeptide.",
      wrong: ["The nucleolus is where ribosomal subunits are manufactured, not where translation happens.",
        null,
        "The Golgi apparatus modifies and packages proteins after they have already been synthesized.",
        "Nuclear pores are openings that let mRNA leave the nucleus; no protein assembly occurs there."]
    },
    diff: 2, secs: 50
  },

  /* ---------- BIOLOGY: scientific method / taxonomy (3) ---------- */
  {
    id: "HBA-028", sub: "scientific method/taxonomy", type: "mc",
    q: "Which sequence lists the classification categories from the most inclusive to the least inclusive?",
    choices: ["Kingdom, Class, Phylum, Order, Family, Genus, Species", "Species, Genus, Family, Order, Class, Phylum, Kingdom", "Kingdom, Phylum, Class, Order, Family, Genus, Species", "Phylum, Kingdom, Class, Order, Family, Species, Genus"],
    answer: 2,
    rationale: {
      correct: "The Linnaean hierarchy runs Kingdom, Phylum, Class, Order, Family, Genus, Species, with kingdom the broadest grouping and species the narrowest.",
      wrong: ["This list reverses phylum and class; phylum is the broader of the two.",
        "This is the correct hierarchy listed backward, from narrowest to broadest.",
        null,
        "This list places kingdom below phylum and also reverses genus and species."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HBA-029", sub: "scientific method/taxonomy", type: "mc",
    q: "A scientific name written in the binomial system, such as Homo sapiens, is made up of which two categories?",
    choices: ["Kingdom and phylum", "Class and order", "Family and genus", "Genus and species"],
    answer: 3,
    rationale: {
      correct: "Binomial nomenclature names an organism by its genus, capitalized, followed by its species, lowercase, with both parts italicized or underlined.",
      wrong: ["Kingdom and phylum are the two broadest ranks and never appear in a scientific name.",
        "Class and order are intermediate ranks and are not part of a binomial name.",
        "The genus is correct, but the second word of the name is the species, not the family.",
        null]
    },
    diff: 1, secs: 45
  },
  {
    id: "HBA-030", sub: "scientific method/taxonomy", type: "mc",
    q: "A researcher tests whether different amounts of fertilizer affect plant growth. The amount of fertilizer applied is which type of variable?",
    choices: ["The dependent variable", "The independent variable", "The controlled variable", "The confounding variable"],
    answer: 1,
    rationale: {
      correct: "The independent variable is the factor the researcher deliberately manipulates in order to observe what effect it produces.",
      wrong: ["The dependent variable is the outcome that is measured, which here would be plant growth.",
        null,
        "Controlled variables are the conditions held constant, such as light, water, and soil type.",
        "A confounding variable is an uncontrolled outside factor that could distort the results."]
    },
    diff: 2, secs: 50
  },

  /* ---------- A&P: general terminology and orientation (2) ---------- */
  {
    id: "HBA-031", sub: "A&P", type: "mc",
    q: "In standard anatomical position, the wrist is described as being in what relationship to the elbow?",
    choices: ["Distal", "Proximal", "Superficial", "Medial"],
    answer: 0,
    rationale: {
      correct: "Distal means farther from the point of attachment to the trunk, and the wrist lies farther down the limb than the elbow does.",
      wrong: [null,
        "Proximal means nearer the trunk, which describes the elbow relative to the wrist.",
        "Superficial means closer to the body surface and compares depth, not position along a limb.",
        "Medial means nearer the midline of the body, which is not the comparison being made."]
    },
    diff: 1, secs: 55
  },
  {
    id: "HBA-032", sub: "A&P", type: "mc",
    q: "A cut that divides the body into equal right and left halves is made along which plane?",
    choices: ["The transverse plane", "The frontal (coronal) plane", "The midsagittal plane", "The oblique plane"],
    answer: 2,
    rationale: {
      correct: "The midsagittal, or median, plane runs vertically through the midline and separates the body into equal right and left portions.",
      wrong: ["The transverse plane cuts horizontally and separates superior from inferior portions.",
        "The frontal or coronal plane separates the body into anterior and posterior portions.",
        null,
        "An oblique plane cuts at an angle and does not produce equal right and left halves."]
    },
    diff: 2, secs: 60
  },

  /* ---------- A&P: homeostasis (1) ---------- */
  {
    id: "HBA-033", sub: "A&P", type: "mc",
    q: "Which term refers to the body's maintenance of a stable internal environment despite changes outside the body?",
    choices: ["Metabolism", "Hemostasis", "Anabolism", "Homeostasis"],
    answer: 3,
    rationale: {
      correct: "Homeostasis is the regulated constancy of internal conditions such as temperature, pH, and blood glucose, maintained mainly by negative feedback loops.",
      wrong: ["Metabolism is the sum of all the chemical reactions occurring in the body.",
        "Hemostasis, spelled without the o, is the stopping of bleeding through clotting.",
        "Anabolism is the building of larger molecules from smaller ones and is one half of metabolism.",
        null]
    },
    diff: 1, secs: 55
  },

  /* ---------- A&P: integumentary (2) ---------- */
  {
    id: "HBA-034", sub: "A&P", type: "mc",
    q: "New epidermal cells are produced by mitosis in which layer of the epidermis?",
    choices: ["The stratum corneum", "The stratum germinativum", "The stratum granulosum", "The stratum lucidum"],
    answer: 1,
    rationale: {
      correct: "The stratum germinativum, also called the stratum basale, is the deepest epidermal layer and the only one where mitosis continually generates replacement cells that migrate toward the surface.",
      wrong: ["The stratum corneum is the outermost layer of dead, keratinized cells that are shed.",
        null,
        "The stratum granulosum lies above the basal layer and is where cells fill with keratin and die.",
        "The stratum lucidum is a thin clear layer present only in thick skin such as the palms and soles."]
    },
    diff: 3, secs: 60
  },
  {
    id: "HBA-035", sub: "A&P", type: "mc",
    q: "Which layer of the skin contains the blood vessels, hair follicles, sweat glands, and sensory nerve endings?",
    choices: ["The epidermis", "The stratum corneum", "The dermis", "The hypodermis"],
    answer: 2,
    rationale: {
      correct: "The dermis is the fibrous connective tissue layer beneath the epidermis, and it houses blood vessels, sensory nerve endings, hair follicles, and both sweat and sebaceous glands.",
      wrong: ["The epidermis is avascular epithelium; it contains no blood vessels and is nourished by diffusion.",
        "The stratum corneum is the outermost sheet of dead keratinized cells within the epidermis.",
        null,
        "The hypodermis, or subcutaneous layer, is mostly adipose tissue and anchors the skin to muscle."]
    },
    diff: 2, secs: 60
  },

  /* ---------- A&P: skeletal (2) ---------- */
  {
    id: "HBA-036", sub: "A&P", type: "mc",
    q: "Which bone cell breaks down bone matrix and releases stored calcium into the bloodstream?",
    choices: ["The osteoclast", "The osteoblast", "The osteocyte", "The chondrocyte"],
    answer: 0,
    rationale: {
      correct: "Osteoclasts are large multinucleated cells that resorb bone matrix and free calcium into the blood; parathyroid hormone stimulates their activity.",
      wrong: [null,
        "Osteoblasts build new bone matrix and deposit calcium rather than releasing it.",
        "Osteocytes are mature bone cells sitting in lacunae that maintain the existing matrix.",
        "Chondrocytes are cartilage cells and are not found within bone matrix."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBA-037", sub: "A&P", type: "mc",
    q: "Which of the following bones belongs to the appendicular skeleton rather than the axial skeleton?",
    choices: ["The sternum", "The occipital bone", "The sacrum", "The radius"],
    answer: 3,
    rationale: {
      correct: "The appendicular portion of the 206-bone adult skeleton consists of the limbs plus the pectoral and pelvic girdles, so the radius of the forearm is appendicular.",
      wrong: ["The sternum is part of the thoracic cage and therefore belongs to the axial skeleton.",
        "The occipital bone forms part of the skull, which is axial.",
        "The sacrum is a fused portion of the vertebral column and is axial.",
        null]
    },
    diff: 3, secs: 60
  },

  /* ---------- A&P: muscular (2) ---------- */
  {
    id: "HBA-038", sub: "A&P", type: "mc",
    q: "Which type of muscle tissue is striated in appearance yet functions under involuntary control?",
    choices: ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "Visceral muscle"],
    answer: 1,
    rationale: {
      correct: "Cardiac muscle is found only in the heart wall; it shows striations like skeletal muscle but contracts involuntarily, and its cells are joined end to end by intercalated discs.",
      wrong: ["Skeletal muscle is striated but is under voluntary control.",
        null,
        "Smooth muscle is involuntary but has no striations.",
        "Visceral muscle is another name for smooth muscle, which is involuntary but not striated."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBA-039", sub: "A&P", type: "mc",
    q: "Which structure is the basic contractile unit of a skeletal muscle fiber?",
    choices: ["The fascicle", "The myofibril", "The sarcomere", "The muscle fiber"],
    answer: 2,
    rationale: {
      correct: "A sarcomere is the repeating segment between two Z lines in which actin and myosin filaments slide past one another to shorten the muscle.",
      wrong: ["A fascicle is a bundle of whole muscle fibers wrapped in connective tissue.",
        "A myofibril is a long strand made of many sarcomeres linked end to end, not the unit itself.",
        null,
        "The muscle fiber is the entire muscle cell, and it contains many myofibrils."]
    },
    diff: 3, secs: 60
  },

  /* ---------- A&P: nervous (3) ---------- */
  {
    id: "HBA-040", sub: "A&P", type: "mc",
    q: "How many pairs of spinal nerves branch from the human spinal cord?",
    choices: ["12 pairs", "24 pairs", "33 pairs", "31 pairs"],
    answer: 3,
    rationale: {
      correct: "Thirty-one pairs of spinal nerves emerge from the cord: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral, and 1 coccygeal.",
      wrong: ["Twelve is the number of cranial nerve pairs, which attach to the brain rather than to the cord.",
        "Twenty-four is the number of movable, unfused vertebrae, not the number of spinal nerve pairs.",
        "Thirty-three is the total number of vertebrae, counting the fused sacral and coccygeal bones.",
        null]
    },
    diff: 3, secs: 60
  },
  {
    id: "HBA-041", sub: "A&P", type: "mc",
    q: "Which region of the brain coordinates balance, posture, and the smooth execution of voluntary movement?",
    choices: ["The cerebellum", "The cerebrum", "The medulla oblongata", "The thalamus"],
    answer: 0,
    rationale: {
      correct: "The cerebellum sits beneath the posterior cerebrum and fine-tunes motor commands, maintaining equilibrium and coordinating muscle activity.",
      wrong: [null,
        "The cerebrum initiates voluntary movement and interprets sensation but does not fine-tune coordination.",
        "The medulla oblongata controls involuntary vital functions such as heart rate and breathing.",
        "The thalamus is the relay station that routes sensory information up to the cerebral cortex."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBA-042", sub: "A&P", type: "mc",
    q: "Which division of the nervous system raises heart rate, dilates the pupils, and slows digestion during a perceived threat?",
    choices: ["The parasympathetic division", "The sympathetic division", "The somatic division", "The enteric division"],
    answer: 1,
    rationale: {
      correct: "The sympathetic division of the autonomic nervous system produces the fight-or-flight response, shifting blood and energy toward the heart, lungs, and skeletal muscle.",
      wrong: ["The parasympathetic division produces the opposite rest-and-digest effects, slowing the heart and stimulating digestion.",
        null,
        "The somatic division carries voluntary motor commands to skeletal muscle.",
        "The enteric division is the nerve network embedded in the wall of the digestive tract itself."]
    },
    diff: 2, secs: 60
  },

  /* ---------- A&P: endocrine (3) ---------- */
  {
    id: "HBA-043", sub: "A&P", type: "mc",
    q: "Thyroid-stimulating hormone (TSH) and adrenocorticotropic hormone (ACTH) are secreted by which structure?",
    choices: ["The hypothalamus", "The posterior pituitary (neurohypophysis)", "The anterior pituitary (adenohypophysis)", "The pineal gland"],
    answer: 2,
    rationale: {
      correct: "The anterior pituitary, or adenohypophysis, secretes the tropic hormones TSH, ACTH, FSH, LH, growth hormone, and prolactin, each of which stimulates another gland or tissue.",
      wrong: ["The hypothalamus produces the releasing hormones that direct the anterior pituitary, but it does not secrete TSH or ACTH itself.",
        "The posterior pituitary, or neurohypophysis, stores and releases only antidiuretic hormone and oxytocin.",
        null,
        "The pineal gland secretes melatonin, which helps regulate the sleep-wake cycle."]
    },
    diff: 3, secs: 60
  },
  {
    id: "HBA-044", sub: "A&P", type: "mc",
    q: "Insulin and glucagon are secreted by which part of the pancreas?",
    choices: ["The islets of Langerhans", "The acinar cells", "The pancreatic duct", "The chief cells"],
    answer: 0,
    rationale: {
      correct: "The islets of Langerhans are scattered clusters of endocrine cells within the pancreas; their beta cells release insulin to lower blood glucose and their alpha cells release glucagon to raise it.",
      wrong: [null,
        "Acinar cells make up the exocrine pancreas and secrete digestive enzymes into the duct system.",
        "The pancreatic duct carries enzymes and bicarbonate to the duodenum; it secretes no hormones.",
        "Chief cells are located in the gastric glands of the stomach, where they secrete pepsinogen."]
    },
    diff: 3, secs: 60
  },
  {
    id: "HBA-045", sub: "A&P", type: "mc",
    q: "Which hormone raises the concentration of calcium in the blood?",
    choices: ["Calcitonin, from the thyroid gland", "Aldosterone, from the adrenal cortex", "Thyroxine, from the thyroid gland", "Parathyroid hormone, from the parathyroid glands"],
    answer: 3,
    rationale: {
      correct: "Parathyroid hormone raises blood calcium by stimulating osteoclasts to resorb bone, increasing calcium reabsorption in the kidney, and promoting activation of vitamin D.",
      wrong: ["Calcitonin does the opposite: it lowers blood calcium by inhibiting osteoclast activity.",
        "Aldosterone regulates sodium and potassium balance rather than calcium.",
        "Thyroxine sets the body's metabolic rate and has no direct role in calcium regulation.",
        null]
    },
    diff: 2, secs: 60
  },

  /* ---------- A&P: cardiovascular (5) ---------- */
  {
    id: "HBA-046", sub: "A&P", type: "mc",
    q: "Blood passes from the right atrium into the right ventricle through which valve?",
    choices: ["The pulmonary semilunar valve", "The tricuspid valve", "The mitral (bicuspid) valve", "The aortic semilunar valve"],
    answer: 1,
    rationale: {
      correct: "The tricuspid valve is the right atrioventricular valve; it opens to let blood pass from the right atrium into the right ventricle and closes to block backflow during contraction.",
      wrong: ["The pulmonary semilunar valve lies beyond the right ventricle, at the entrance to the pulmonary trunk.",
        null,
        "The mitral or bicuspid valve is the left atrioventricular valve, between the left atrium and left ventricle.",
        "The aortic semilunar valve guards the exit from the left ventricle into the aorta."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBA-047", sub: "A&P", type: "mc",
    q: "Which chamber of the heart has the thickest muscular wall?",
    choices: ["The right atrium", "The right ventricle", "The left ventricle", "The left atrium"],
    answer: 2,
    rationale: {
      correct: "The left ventricle must generate enough pressure to drive blood through the entire systemic circuit, so its myocardium is far thicker than that of any other chamber.",
      wrong: ["The right atrium is a thin-walled receiving chamber for blood returning from the body.",
        "The right ventricle pumps only to the nearby low-pressure lungs, so its wall is much thinner.",
        null,
        "The left atrium is a thin-walled chamber that receives blood from the pulmonary veins."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBA-048", sub: "A&P", type: "mc",
    q: "Venous blood that has supplied the heart muscle itself empties directly into which chamber by way of the coronary sinus?",
    choices: ["The left atrium", "The left ventricle", "The right ventricle", "The right atrium"],
    answer: 3,
    rationale: {
      correct: "The coronary sinus is the large vein on the posterior surface of the heart that collects blood drained from the myocardium and empties it straight into the right atrium.",
      wrong: ["The left atrium receives oxygenated blood arriving from the lungs through the pulmonary veins.",
        "The left ventricle receives blood from the left atrium and pumps it out into the aorta.",
        "The right ventricle receives blood from the right atrium, not directly from the coronary sinus.",
        null]
    },
    diff: 3, secs: 65
  },
  {
    id: "HBA-049", sub: "A&P", type: "mc",
    q: "Which structure normally generates the electrical impulse that sets the rhythm of the heartbeat?",
    choices: ["The sinoatrial (SA) node", "The atrioventricular (AV) node", "The bundle of His", "The Purkinje fibers"],
    answer: 0,
    rationale: {
      correct: "The sinoatrial node in the wall of the right atrium depolarizes spontaneously and faster than any other tissue, making it the natural pacemaker of the heart.",
      wrong: [null,
        "The atrioventricular node relays the impulse from the atria to the ventricles and paces the heart only if the SA node fails.",
        "The bundle of His conducts the impulse from the AV node down the interventricular septum.",
        "The Purkinje fibers spread the impulse through the ventricular walls to trigger contraction."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBA-050", sub: "A&P", type: "mc",
    q: "Which vessel carries oxygen-poor blood away from the heart toward the lungs?",
    choices: ["The pulmonary vein", "The pulmonary artery", "The superior vena cava", "The aorta"],
    answer: 1,
    rationale: {
      correct: "The pulmonary artery leaves the right ventricle carrying deoxygenated blood to the lungs, and it is the only artery in the body that carries oxygen-poor blood.",
      wrong: ["The pulmonary vein returns freshly oxygenated blood from the lungs to the left atrium.",
        null,
        "The superior vena cava carries oxygen-poor blood toward the heart rather than away from it.",
        "The aorta carries oxygen-rich blood from the left ventricle out to the systemic circulation."]
    },
    diff: 2, secs: 60
  },

  /* ---------- A&P: lymphatic / immune (2) ---------- */
  {
    id: "HBA-051", sub: "A&P", type: "mc",
    q: "Most digested fats leaving the small intestine are absorbed into which structures?",
    choices: ["The blood capillaries of the villi", "The branches of the hepatic portal vein", "The lacteals of the villi", "The bile ducts of the liver"],
    answer: 2,
    rationale: {
      correct: "A lacteal is the lymphatic capillary at the core of each intestinal villus; it takes up fatty acids repackaged as chylomicrons and delivers them into the lymphatic system.",
      wrong: ["Blood capillaries in the villi absorb amino acids and simple sugars, not most fats.",
        "The hepatic portal vein carries water-soluble nutrients from the intestine to the liver.",
        null,
        "Bile ducts carry bile toward the intestine to emulsify fat; they do not absorb nutrients."]
    },
    diff: 3, secs: 65
  },
  {
    id: "HBA-052", sub: "A&P", type: "mc",
    q: "Which cells of the immune system produce antibodies directed against a specific antigen?",
    choices: ["B lymphocytes", "Natural killer cells", "Macrophages", "Neutrophils"],
    answer: 0,
    rationale: {
      correct: "B lymphocytes recognize one specific antigen, proliferate, and differentiate into plasma cells that secrete antibodies against it, making this a specific or adaptive defense.",
      wrong: [null,
        "Natural killer cells destroy infected and tumor cells without antigen specificity, a nonspecific defense.",
        "Macrophages engulf pathogens and present antigen, but they do not manufacture antibodies.",
        "Neutrophils are phagocytes that arrive first at bacterial infections and act nonspecifically."]
    },
    diff: 2, secs: 60
  },

  /* ---------- A&P: respiratory (2) ---------- */
  {
    id: "HBA-053", sub: "A&P", type: "mc",
    q: "Exchange of oxygen and carbon dioxide between the air and the blood occurs at which structures?",
    choices: ["The bronchioles", "The alveoli", "The trachea", "The pleural membranes"],
    answer: 1,
    rationale: {
      correct: "The alveoli are thin-walled air sacs wrapped in pulmonary capillaries, and gases diffuse in both directions across this respiratory membrane.",
      wrong: ["The bronchioles are conducting airways that deliver air to the alveoli but exchange no gas.",
        null,
        "The trachea is a rigid conducting tube running from the larynx to the primary bronchi.",
        "The pleural membranes are serous coverings that reduce friction as the lungs expand and recoil."]
    },
    diff: 1, secs: 55
  },
  {
    id: "HBA-054", sub: "A&P", type: "mc",
    q: "What happens to the diaphragm and the thoracic cavity during normal, quiet inspiration?",
    choices: ["The diaphragm relaxes and the thoracic volume increases", "The diaphragm contracts and the thoracic volume decreases", "The diaphragm relaxes and the thoracic volume decreases", "The diaphragm contracts and the thoracic volume increases"],
    answer: 3,
    rationale: {
      correct: "The diaphragm contracts and flattens downward, enlarging the thoracic cavity; the resulting drop in intrapulmonary pressure draws air into the lungs.",
      wrong: ["Relaxation lets the diaphragm dome upward, which shrinks rather than enlarges the thorax.",
        "Contraction does occur, but it enlarges the thoracic cavity rather than reducing it.",
        "This describes quiet expiration, when the diaphragm relaxes and the lungs passively recoil.",
        null]
    },
    diff: 3, secs: 65
  },

  /* ---------- A&P: digestive (2) ---------- */
  {
    id: "HBA-055", sub: "A&P", type: "mc",
    q: "Which structures of the small intestine greatly increase the surface area available for nutrient absorption?",
    choices: ["The rugae", "The haustra", "The villi", "The taeniae coli"],
    answer: 2,
    rationale: {
      correct: "Villi are the finger-like projections of the intestinal lining, each covered with microvilli, and together they expand the absorptive surface enormously.",
      wrong: ["Rugae are the folds of the stomach lining that let the stomach expand when it fills.",
        "Haustra are the pouches of the large intestine formed by its muscular bands.",
        null,
        "The taeniae coli are the three longitudinal muscle bands running along the large intestine."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBA-056", sub: "A&P", type: "mc",
    q: "The chemical digestion of protein begins in which organ?",
    choices: ["The stomach", "The mouth", "The duodenum", "The large intestine"],
    answer: 0,
    rationale: {
      correct: "Gastric glands secrete hydrochloric acid and pepsin, and pepsin begins splitting proteins into shorter peptide chains while food is churned into chyme.",
      wrong: [null,
        "Salivary amylase in the mouth begins carbohydrate digestion, not protein digestion.",
        "The duodenum continues protein digestion with pancreatic trypsin and chymotrypsin but does not begin it.",
        "The large intestine reabsorbs water and salts; almost no enzymatic digestion occurs there."]
    },
    diff: 2, secs: 60
  },

  /* ---------- A&P: urinary (2) ---------- */
  {
    id: "HBA-057", sub: "A&P", type: "mc",
    q: "Within a nephron, filtration of the blood plasma takes place at which structure?",
    choices: ["The loop of Henle", "The collecting duct", "The distal convoluted tubule", "The glomerulus"],
    answer: 3,
    rationale: {
      correct: "The glomerulus is a high-pressure capillary tuft sitting inside Bowman's capsule, and blood pressure forces water and small solutes out of the blood to form filtrate.",
      wrong: ["The loop of Henle concentrates the filtrate by establishing a salt gradient in the medulla.",
        "The collecting duct performs the final water reabsorption under the influence of ADH.",
        "The distal convoluted tubule fine-tunes sodium, potassium, and acid-base balance by secretion and reabsorption.",
        null]
    },
    diff: 3, secs: 60
  },
  {
    id: "HBA-058", sub: "A&P", type: "mc",
    q: "Each kidney contains roughly one million microscopic units that filter blood and form urine. These units are called:",
    choices: ["Renal pyramids", "Nephrons", "Ureters", "Renal calyces"],
    answer: 1,
    rationale: {
      correct: "The nephron is the functional unit of the kidney and includes the glomerulus, Bowman's capsule, the proximal and distal convoluted tubules, the loop of Henle, and the collecting duct.",
      wrong: ["Renal pyramids are cone-shaped regions of the medulla that contain portions of many nephrons.",
        null,
        "The ureter is the tube that drains urine from the kidney to the bladder, not a filtering unit.",
        "Renal calyces are cup-shaped chambers that collect urine already formed and funnel it to the renal pelvis."]
    },
    diff: 2, secs: 60
  },

  /* ---------- A&P: reproductive (2) ---------- */
  {
    id: "HBA-059", sub: "A&P", type: "mc",
    q: "After leaving the testes, sperm are stored and complete their maturation in which structure?",
    choices: ["The seminal vesicle", "The vas deferens", "The epididymis", "The prostate gland"],
    answer: 2,
    rationale: {
      correct: "The epididymis is the coiled tube on the posterior surface of each testis where sperm gain motility and are stored until ejaculation.",
      wrong: ["The seminal vesicle contributes fructose-rich fluid to semen but stores no sperm.",
        "The vas deferens transports sperm from the epididymis toward the ejaculatory duct.",
        null,
        "The prostate gland adds an alkaline secretion to semen; it neither stores nor matures sperm."]
    },
    diff: 2, secs: 60
  },
  {
    id: "HBA-060", sub: "A&P", type: "mc",
    q: "Fertilization of an ovum by a sperm normally occurs in which structure?",
    choices: ["The uterine cavity", "The ovarian follicle", "The cervical canal", "The fallopian tube"],
    answer: 3,
    rationale: {
      correct: "After ovulation the ovum is swept into the fallopian tube, and sperm normally meet and fertilize it in the outer third of that tube before the zygote travels on to the uterus.",
      wrong: ["The uterine cavity is where the resulting blastocyst implants several days after fertilization.",
        "The ovarian follicle is where the ovum matures before it is released at ovulation.",
        "The cervical canal is the passage sperm travel through on the way from the vagina into the uterus.",
        null]
    },
    diff: 2, secs: 60
  }

] };
