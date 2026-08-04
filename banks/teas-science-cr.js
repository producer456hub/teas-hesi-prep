window.BANKS = window.BANKS || {};
window.BANKS["teas-science-cr"] = {
  exam: "teas",
  section: "science",
  questions: [

    /* ---------------- CHEMISTRY (9) ---------------- */

    {
      id: "TSC-001",
      sub: "Chemistry",
      type: "mc",
      q: "An atom of potassium has an atomic number of 19 and a mass number of 39. How many neutrons are in the nucleus of this atom?",
      choices: ["19", "20", "39", "58"],
      answer: 1,
      rationale: {
        correct: "The mass number counts protons plus neutrons, so the neutron count is the mass number minus the atomic number: 39 - 19 = 20.",
        wrong: [
          "19 is the atomic number, which gives the number of protons (and, in a neutral atom, the number of electrons) rather than neutrons.",
          null,
          "39 is the mass number itself, the combined total of protons and neutrons in the nucleus.",
          "58 comes from adding the atomic number to the mass number instead of subtracting it."
        ]
      },
      diff: 1,
      secs: 50
    },

    {
      id: "TSC-002",
      sub: "Chemistry",
      type: "mc",
      q: "Two elements are located in the same group (vertical column) of the periodic table. Which characteristic are these two elements most likely to share?",
      choices: [
        "The number of occupied electron shells",
        "The total number of protons",
        "The number of valence electrons",
        "The number of neutrons in the nucleus"
      ],
      answer: 2,
      rationale: {
        correct: "Groups are the vertical columns, and elements within a group carry the same number of valence electrons in their outermost shell, which is why they show similar chemical behavior.",
        wrong: [
          "Elements in the same period (horizontal row) share the number of occupied electron shells; that is the group-versus-period mix-up this item targets.",
          "Proton number is unique to each element and changes from one element to the next, so two different elements can never share it.",
          null,
          "Neutron number varies between elements and even between isotopes of a single element, so it is not fixed by position in a group."
        ]
      },
      diff: 2,
      secs: 55
    },

    {
      id: "TSC-003",
      sub: "Chemistry",
      type: "mc",
      q: "The two strands of a DNA double helix are held together by weak attractions between a hydrogen atom on one strand and a nitrogen or oxygen atom on the opposite strand. Which type of bond is described?",
      choices: [
        "Ionic bond",
        "Polar covalent bond",
        "Nonpolar covalent bond",
        "Hydrogen bond"
      ],
      answer: 3,
      rationale: {
        correct: "A hydrogen bond is a weak attraction between a hydrogen already covalently bonded to a highly electronegative atom (F, O, or N) and another electronegative atom nearby; many of these attractions together hold the complementary bases of the two DNA strands to each other.",
        wrong: [
          "Ionic bonds form when electrons are transferred between a metal and a nonmetal to make charged ions; no ions are produced between the paired bases.",
          "A polar covalent bond shares electrons unequally between two atoms inside one molecule, whereas the attraction described here acts between two separate strands.",
          "Nonpolar covalent bonds share electrons equally, as in O2 or N2, so they create no partial charges that could attract a neighboring strand.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },

    {
      id: "TSC-004",
      sub: "Chemistry",
      type: "ms",
      q: "A chemistry class is reviewing the states of matter and the changes between them. Which of the following statements are accurate? Select all that apply.",
      choices: [
        "Plasma is an ionized gas and is regarded as a fourth state of matter.",
        "Condensation is an endothermic change, because a gas must absorb energy to become a liquid.",
        "At the triple point of a substance, its solid, liquid, and gas phases coexist in equilibrium.",
        "A liquid has a definite shape but takes the volume of whatever container holds it.",
        "Sublimation is the change of a solid directly to a gas, without a liquid stage.",
        "Above its critical temperature, a gas can still be liquefied by pressure alone."
      ],
      answer: [0, 2, 4],
      rationale: {
        correct: "Plasma is a gas whose particles have been ionized, and it is counted as a fourth state of matter (stars and lightning). The triple point is the single temperature-and-pressure combination at which solid, liquid, and gas coexist in equilibrium. Sublimation is the direct solid-to-gas change, as when dry ice vanishes without puddling.",
        wrong: [
          null,
          "Condensation is exothermic: the gas must release energy for its particles to slow down and cluster into a liquid. Melting, vaporization, and sublimation are the endothermic changes.",
          null,
          "This reverses the definition. A liquid has a definite volume but an indefinite shape, so it takes the shape, not the volume, of its container.",
          null,
          "Above the critical temperature a substance cannot be liquefied by pressure alone; liquid and gas become indistinguishable as a supercritical fluid."
        ]
      },
      diff: 3,
      secs: 85
    },

    {
      id: "TSC-005",
      sub: "Chemistry",
      type: "mc",
      q: "A student stands a very narrow glass tube upright in a beaker of water, and the water climbs higher inside the tube than the water level in the beaker. Which property of water best explains this rise?",
      choices: [
        "Cohesion among the water molecules themselves",
        "Adhesion between the water molecules and the glass",
        "The high specific heat capacity of water",
        "The lower density of ice compared with liquid water"
      ],
      answer: 1,
      rationale: {
        correct: "Capillary action occurs because polar water molecules are attracted to the polar glass surface more strongly than they are attracted to one another, so adhesion drags the column upward; the same imbalance produces the concave meniscus read at eye level in lab glassware.",
        wrong: [
          "Cohesion is water sticking to water. When cohesion exceeds adhesion, as with mercury in glass, the liquid beads up and its surface domes rather than climbing.",
          null,
          "High specific heat means water resists temperature change; it explains why sweat cools the body, not how far a liquid travels up a tube.",
          "Ice floating is a density effect of hydrogen bonds locking molecules farther apart in the solid, which has nothing to do with liquid water moving up glass."
        ]
      },
      diff: 2,
      secs: 60
    },

    {
      id: "TSC-006",
      sub: "Chemistry",
      type: "mc",
      q: "Blood pH is stabilized by the buffer system CO2 + H2O <=> H2CO3 <=> HCO3- + H+. During intense exercise, extra H+ ions are released into the blood. Which change in this system most directly limits the resulting drop in blood pH?",
      choices: [
        "Carbonic acid dissociates, releasing still more H+ into the blood.",
        "More carbon dioxide dissolves into the blood, shifting the reaction to the right.",
        "Bicarbonate ions bind the excess H+ to form carbonic acid.",
        "Water molecules accept the excess H+ and become hydroxide ions."
      ],
      answer: 2,
      rationale: {
        correct: "Bicarbonate is the base half of the buffer pair: HCO3- + H+ forms H2CO3, pulling free hydrogen ions out of solution so the H+ concentration, and therefore the pH, barely moves and blood stays near 7.35 to 7.45.",
        wrong: [
          "That is the equilibrium running the other way. Adding more H+ to blood that already has an excess would deepen the acidosis rather than buffer it.",
          "Dissolving more CO2 drives the reaction toward H2CO3 and then toward more HCO3- and H+, lowering pH further; this is why CO2 retention causes respiratory acidosis.",
          null,
          "A water molecule that accepts a proton becomes hydronium (H3O+). Hydroxide forms when water donates a proton, so this option reverses the chemistry."
        ]
      },
      diff: 3,
      secs: 75
    },

    {
      id: "TSC-007",
      sub: "Chemistry",
      type: "mc",
      q: "A sealed bottle of carbonated water is left in a warm car all afternoon. When it is opened it fizzes over, while an identical bottle taken from the refrigerator does not. Which statement best explains the difference?",
      choices: [
        "Gases become more soluble in water as the temperature of the water rises.",
        "Warm water holds more solute of every kind, so the warm solution is unsaturated.",
        "Solids dissolve better when heated, and a dissolved gas follows the same rule.",
        "Gases become less soluble in water as the temperature of the water rises."
      ],
      answer: 3,
      rationale: {
        correct: "Gas solubility falls as temperature rises: warming gives the dissolved carbon dioxide enough kinetic energy to escape the solvent, so the warm bottle holds more gas above the liquid and releases it violently when the pressure is relieved.",
        wrong: [
          "This is the reverse of the real relationship. If it were true, the warm bottle would have held its carbonation better than the cold one.",
          "Solubility limits are specific to each solute. Heating raises the capacity of water for most solids but lowers it for gases, so no blanket statement holds.",
          "The temperature rule for solids does not extend to gases; gas solubility moves in the opposite direction, which is exactly what this scenario shows.",
          null
        ]
      },
      diff: 3,
      secs: 65
    },

    {
      id: "TSC-008",
      sub: "Chemistry",
      type: "fill",
      q: "Consider the unbalanced equation for the combustion of methane: CH4 + O2 -> CO2 + H2O. When this equation is balanced using the smallest possible whole-number coefficients, what coefficient appears in front of O2? Enter your answer as a whole number, with no units or spaces.",
      answer: { accept: ["2", "2.0"] },
      rationale: {
        correct: "Balance carbon first (1 CO2), then hydrogen (2 H2O to hold the 4 hydrogen atoms). That places 4 oxygen atoms on the product side, and supplying 4 oxygen atoms from diatomic O2 requires a coefficient of 2, giving CH4 + 2O2 -> CO2 + 2H2O. Only coefficients may be changed, never subscripts, because changing a subscript would change the substance itself."
      },
      diff: 2,
      secs: 70
    },

    {
      id: "TSC-009",
      sub: "Chemistry",
      type: "mc",
      q: "A catalyst is added to a chemical reaction. Which statement describes what the catalyst does?",
      choices: [
        "It lowers the activation energy and is not consumed by the reaction.",
        "It raises the activation energy so that the reaction releases more heat.",
        "It is gradually used up as the reaction proceeds and must be replaced.",
        "It increases the amount of product the reaction is able to form."
      ],
      answer: 0,
      rationale: {
        correct: "A catalyst offers the reaction an alternate pathway with a lower activation energy, so a larger share of collisions succeeds and the rate increases; the catalyst is regenerated and can act again, which is how enzymes serve as biological catalysts.",
        wrong: [
          null,
          "Raising activation energy would slow the reaction, and a catalyst does not change how much energy the reaction absorbs or releases overall.",
          "Remaining unchanged and reusable is the defining feature of a catalyst; a substance that is consumed during the reaction is a reactant.",
          "A catalyst changes only how quickly the products form, not the maximum quantity of product the reaction can yield."
        ]
      },
      diff: 1,
      secs: 50
    },

    /* ---------------- SCIENTIFIC REASONING (10) ---------------- */

    {
      id: "TSC-010",
      sub: "Scientific Reasoning",
      type: "mc",
      q: "A horticulture student wanted to know whether the concentration of a liquid fertilizer affects how tall pea seedlings grow. She filled 40 identical pots with the same potting mix and planted one pea seed in each pot. The pots were divided into four groups of ten. Group 1 received plain tap water only; groups 2, 3, and 4 received 5 mL, 10 mL, and 20 mL of fertilizer dissolved in the same volume of tap water, once per week. All 40 pots sat on one bench under identical grow lights at the same room temperature and received liquid on the same schedule. After six weeks the student measured every seedling in centimeters and calculated the mean height of each group. Which of the following is the dependent variable in this study?",
      choices: [
        "The mean height of the seedlings after six weeks",
        "The concentration of fertilizer given to each group",
        "The number of pots assigned to each group",
        "The type of potting mix used in every pot"
      ],
      answer: 0,
      rationale: {
        correct: "The dependent variable is the outcome the researcher measures because it is expected to depend on the treatment, and here that outcome is seedling height in centimeters after six weeks.",
        wrong: [
          null,
          "Fertilizer concentration is what the student deliberately changed from group to group, which makes it the independent variable; swapping these two is the most common error on this item type.",
          "Group size is a feature of the design, not an outcome that was measured at the end of the study.",
          "The potting mix was deliberately kept identical in every pot, so it is a controlled variable rather than a measured result."
        ]
      },
      diff: 2,
      secs: 80
    },

    {
      id: "TSC-011",
      sub: "Scientific Reasoning",
      type: "mc",
      q: "A researcher testing whether a new hand lotion reduces skin dryness applies the lotion to one group of volunteers. A second group receives an identical-looking lotion that contains no active ingredient. What is the primary purpose of including that second group?",
      choices: [
        "To increase the total number of participants enrolled in the study",
        "To confirm that the active ingredient is safe before the study begins",
        "To give the researcher a second chance to observe the treatment effect",
        "To show what happens without the active ingredient, as a baseline"
      ],
      answer: 3,
      rationale: {
        correct: "A control group receiving a placebo isolates the effect of the active ingredient: any change that appears in both groups must be caused by something else, such as the lotion base, the weather, or the participants' expectations.",
        wrong: [
          "Enrolling more people can improve reliability, but a control group is defined by the treatment it does not receive, not by adding to the head count.",
          "Safety screening takes place before a trial is approved; a concurrent control group exists for comparison, not for safety testing.",
          "Observing the same treatment again would be replication. A control group deliberately does not receive the treatment at all.",
          null
        ]
      },
      diff: 2,
      secs: 60
    },

    {
      id: "TSC-012",
      sub: "Scientific Reasoning",
      type: "mc",
      q: "A student notices that a loaf of bread kept in the refrigerator grows visible mold more slowly than an identical loaf kept on the kitchen counter. Which of the following is the best hypothesis to guide the student's next experiment?",
      choices: [
        "Mold on bread is unpleasant and should be prevented whenever possible.",
        "If bread is stored at a lower temperature, then mold will take longer to appear.",
        "Does storage temperature affect the rate at which mold grows on bread?",
        "Bread stored in the refrigerator grew mold more slowly than bread on the counter."
      ],
      answer: 1,
      rationale: {
        correct: "A usable hypothesis is a testable, falsifiable prediction that links a variable the researcher manipulates to a variable the researcher measures, and the if-then form here predicts how changing storage temperature will change the time until mold appears.",
        wrong: [
          "This is a value judgment about what is desirable. No measurement could ever show it to be false, so it cannot be tested.",
          null,
          "This is the research question that a hypothesis answers. A hypothesis must propose an expected outcome rather than ask for one.",
          "This restates the observation that prompted the investigation; it predicts nothing new and so gives the next experiment nothing to test."
        ]
      },
      diff: 2,
      secs: 60
    },

    {
      id: "TSC-013",
      sub: "Scientific Reasoning",
      type: "mc",
      q: "A wellness company wanted to know whether adults in a large city get enough sleep. Researchers set up a table in the lobby of a downtown gym between 6 a.m. and 8 a.m. on three weekday mornings and asked everyone who walked past to complete a one-page questionnaire. Of the 220 people who stopped, 78 percent reported sleeping at least seven hours on a typical night. The company then issued a press release announcing that most adults in the city sleep enough. No other locations, times, or groups were sampled, and the questionnaire never asked whether respondents worked night shifts or had young children at home. Which of the following is the most serious flaw in the design of this study?",
      choices: [
        "The researchers collected only 220 responses, too few for any conclusion.",
        "The questionnaire was only one page long, so respondents could not explain their answers.",
        "Everyone surveyed was an early-morning gym user, so the sample is not representative.",
        "The survey ran on weekdays rather than on both weekdays and weekend days."
      ],
      answer: 2,
      rationale: {
        correct: "Every respondent was drawn from one narrow, self-selected population, namely people who choose to be at a downtown gym before 8 a.m., so the results describe that group rather than the city's adults; this is sampling bias, and it invalidates the generalization no matter how the numbers come out.",
        wrong: [
          "220 responses is a workable number. The problem is who was sampled rather than how many, and enlarging a biased sample only produces a larger biased sample.",
          "A short questionnaire limits detail, but it does not distort which people ended up in the sample, which is the fatal defect here.",
          null,
          "Adding weekend days would broaden the timing a little, yet every respondent would still be a gym-goer at that single location."
        ]
      },
      diff: 3,
      secs: 90
    },

    {
      id: "TSC-014",
      sub: "Scientific Reasoning",
      type: "hotspot",
      q: "The bar graph shows the mean height of pea seedlings after six weeks at four weekly fertilizer concentrations. Click the bar for the concentration at which mean height first declined compared with the concentration immediately to its left.",
      svg: '<svg viewBox="0 0 400 260" role="img" aria-label="Bar graph of mean seedling height at four fertilizer concentrations">' +
           '<rect class="hs-bg" x="0" y="0" width="400" height="260"/>' +
           '<rect class="hs-part" x="58" y="30" width="2" height="182"/>' +
           '<rect class="hs-part" x="58" y="210" width="314" height="2"/>' +
           '<rect class="hs-part" x="80" y="138" width="46" height="72"/>' +
           '<rect class="hs-part" x="150" y="102" width="46" height="108"/>' +
           '<rect class="hs-part" x="220" y="66" width="46" height="144"/>' +
           '<rect class="hs-part" x="290" y="120" width="46" height="90"/>' +
           '<text class="hs-label" x="8" y="22">Mean height (cm)</text>' +
           '<text class="hs-label" x="94" y="132">12</text>' +
           '<text class="hs-label" x="164" y="96">18</text>' +
           '<text class="hs-label" x="234" y="60">24</text>' +
           '<text class="hs-label" x="304" y="114">15</text>' +
           '<text class="hs-label" x="88" y="228">0 mL</text>' +
           '<text class="hs-label" x="158" y="228">5 mL</text>' +
           '<text class="hs-label" x="224" y="228">10 mL</text>' +
           '<text class="hs-label" x="294" y="228">20 mL</text>' +
           '<text class="hs-label" x="120" y="250">Fertilizer added per week</text>' +
           '</svg>',
      regions: [
        { id: "r1", label: "0 mL, mean height 12 cm", shape: "rect", x: 80, y: 138, w: 46, h: 72 },
        { id: "r2", label: "5 mL, mean height 18 cm", shape: "rect", x: 150, y: 102, w: 46, h: 108 },
        { id: "r3", label: "10 mL, mean height 24 cm", shape: "rect", x: 220, y: 66, w: 46, h: 144 },
        { id: "r4", label: "20 mL, mean height 15 cm", shape: "rect", x: 290, y: 120, w: 46, h: 90 }
      ],
      answer: "r4",
      rationale: {
        correct: "Mean height climbs from 12 cm to 18 cm to 24 cm as the weekly dose rises from 0 mL to 10 mL, then drops to 15 cm at 20 mL. The 20 mL bar is the only bar shorter than the bar to its left, so it marks the first decline and shows that more fertilizer is not automatically better."
      },
      diff: 2,
      secs: 70
    },

    {
      id: "TSC-015",
      sub: "Scientific Reasoning",
      type: "mc",
      q: "A student needs to transfer exactly 25 mL of a solution into a reaction vessel. Which piece of laboratory equipment should the student use to measure that volume most accurately?",
      choices: [
        "A 100 mL graduated cylinder",
        "A 250 mL beaker",
        "A 250 mL Erlenmeyer flask",
        "A large glass test tube"
      ],
      answer: 0,
      rationale: {
        correct: "A graduated cylinder is marked in small, evenly spaced increments and is the standard tool for measuring a specific liquid volume; the value is read at eye level from the bottom of the meniscus.",
        wrong: [
          null,
          "Beaker graduations are coarse approximations meant for holding and mixing, and a 250 mL beaker is far too large to read 25 mL closely.",
          "The markings on an Erlenmeyer flask are estimates; the flask is designed for swirling a sample without splashing, not for measuring one.",
          "Test tube markings, when they exist at all, are rough estimates intended for very small quantities."
        ]
      },
      diff: 1,
      secs: 45
    },

    {
      id: "TSC-016",
      sub: "Scientific Reasoning",
      type: "mc",
      q: "A standard object with a known mass of 50.00 g is weighed four times on the same balance, giving readings of 47.21 g, 47.19 g, 47.22 g, and 47.20 g. Which statement best describes this set of measurements?",
      choices: [
        "They are accurate but not precise.",
        "They are precise but not accurate.",
        "They are both accurate and precise.",
        "They are neither accurate nor precise."
      ],
      answer: 1,
      rationale: {
        correct: "Precision is the agreement of repeated measurements with one another, and these four span only 0.03 g; accuracy is closeness to the true value, and every reading falls about 2.8 g below the known 50.00 g, which is the signature of a balance that needs recalibration.",
        wrong: [
          "Accuracy would require the readings to center on 50.00 g, but they center on roughly 47.20 g instead.",
          null,
          "The readings cannot be accurate when all four miss the known value by nearly 3 g in the same direction.",
          "Readings grouped this tightly are precise by definition, whatever their relationship to the true value."
        ]
      },
      diff: 2,
      secs: 60
    },

    {
      id: "TSC-017",
      sub: "Scientific Reasoning",
      type: "mc",
      q: "A student is gathering evidence about whether a dietary supplement lowers blood pressure. Which source provides the most credible evidence for that claim?",
      choices: [
        "A peer-reviewed clinical trial published in a medical journal",
        "A magazine article summarizing several studies for general readers",
        "A brochure produced by the company that sells the supplement",
        "A page of customer testimonials posted on a retail website"
      ],
      answer: 0,
      rationale: {
        correct: "A peer-reviewed clinical trial is a primary source whose methods, data, and conclusions were examined by independent experts before publication, which is the strongest safeguard against bias and error available to a student.",
        wrong: [
          null,
          "A magazine summary is a secondary source; it can orient a reader but adds a layer of interpretation and usually omits the methods needed to judge the work.",
          "The manufacturer profits from a favorable conclusion, and that conflict of interest undermines the credibility of its own promotional material.",
          "Testimonials are uncontrolled anecdotes with no comparison group and no standard measurement, and only satisfied customers tend to post them."
        ]
      },
      diff: 2,
      secs: 50
    },

    {
      id: "TSC-018",
      sub: "Scientific Reasoning",
      type: "mc",
      q: "Researchers tested a new medication intended to lower resting heart rate. They enrolled 600 adults aged 40 to 65 with no diagnosed heart disease and randomly assigned each person to one of two groups. For eight weeks, 300 participants took the medication daily and 300 took an identical-looking placebo. Neither the participants nor the staff measuring heart rate knew who received which pill. Resting heart rate was recorded at the start and again after eight weeks by the same trained staff using the same monitors. Mean resting heart rate fell by 8 beats per minute in the medication group and by 1 beat per minute in the placebo group, and the difference between the groups was statistically significant. Which conclusion is best supported by these results?",
      choices: [
        "The medication is safe and effective for anyone who wants a lower heart rate.",
        "The medication lowers heart rate by improving overall cardiovascular fitness.",
        "The medication lowered mean resting heart rate more than the placebo did.",
        "The medication would produce the same effect in children and in adults over 65."
      ],
      answer: 2,
      rationale: {
        correct: "The design supports exactly what it measured: in a randomized, placebo-controlled, double-blind sample of adults aged 40 to 65, mean resting heart rate fell further with the medication than with the placebo over eight weeks.",
        wrong: [
          "Safety was never measured, and the word anyone stretches the finding past the enrolled population, which was healthy adults in a single age band.",
          "The trial measured an outcome, not a mechanism. Nothing in the design assessed cardiovascular fitness, so this explanation goes beyond the data.",
          null,
          "Children and adults over 65 were excluded from the study, so the results provide no basis for predicting what would happen in those groups."
        ]
      },
      diff: 3,
      secs: 95
    },

    {
      id: "TSC-019",
      sub: "Scientific Reasoning",
      type: "order",
      q: "A student is planning a laboratory investigation. Place the steps of the scientific method in the order in which they should be carried out, beginning with the first step.",
      items: [
        "Analyze the collected data.",
        "State a testable hypothesis.",
        "Draw a conclusion and communicate the results.",
        "Ask a question based on an observation.",
        "Carry out a controlled experiment."
      ],
      answer: [3, 1, 4, 0, 2],
      rationale: {
        correct: "An investigation begins with an observation that raises a question, narrows to a testable hypothesis, and is then tested by a controlled experiment. Only after the experiment produces data can those data be analyzed, and the conclusion comes last, once the analysis shows whether the hypothesis was supported."
      },
      diff: 1,
      secs: 70
    }

  ]
};
