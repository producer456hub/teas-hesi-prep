window.BANKS = window.BANKS || {};
window.BANKS["teas-science-cr-b"] = {
  exam: "teas",
  section: "science",
  form: "B",
  questions: [

    /* ---------------- CHEMISTRY (9) ---------------- */

    {
      id: "TCB-001",
      sub: "Chemistry",
      type: "mc",
      q: "Chlorine-35 and chlorine-37 both occur naturally. Which statement correctly describes how an atom of chlorine-35 compares with an atom of chlorine-37?",
      choices: [
        "It contains fewer protons, which is why its mass number is lower.",
        "It contains the same number of neutrons but fewer electrons.",
        "It contains the same number of protons but fewer neutrons.",
        "It contains fewer electrons, which gives it a negative charge."
      ],
      answer: 2,
      rationale: {
        correct: "These two atoms are isotopes of one element. Every chlorine atom has 17 protons, because the proton count is the atomic number that defines the element; chlorine-35 carries 18 neutrons and chlorine-37 carries 20, and that difference alone produces the different mass numbers.",
        wrong: [
          "A change in proton number would change the element itself, so an atom with fewer than 17 protons would no longer be chlorine.",
          "The neutron count is exactly what differs between isotopes, and neutral atoms of both isotopes hold 17 electrons.",
          null,
          "Gaining or losing electrons produces an ion, not an isotope, and electron count has no effect on the mass number."
        ]
      },
      diff: 1,
      secs: 50
    },

    {
      id: "TCB-002",
      sub: "Chemistry",
      type: "mc",
      q: "Lithium is in Group 1 and fluorine is in Group 17, and both elements sit in period 2 of the periodic table. Which statement correctly compares a fluorine atom with a lithium atom?",
      choices: [
        "Fluorine has a larger atomic radius and a higher electronegativity.",
        "Fluorine has a smaller atomic radius and a higher electronegativity.",
        "Fluorine has a larger atomic radius and a lower electronegativity.",
        "Fluorine has a smaller atomic radius and a lower electronegativity."
      ],
      answer: 1,
      rationale: {
        correct: "Moving left to right across a period, protons are added to the nucleus while the new electrons enter the same shell, so the nucleus pulls that shell in tighter: atomic radius shrinks and the atom's pull on shared electrons rises. Fluorine sits at the right end of period 2 and is in fact the most electronegative element.",
        wrong: [
          "The electronegativity half is right, but the radius half is reversed; atoms get smaller, not larger, as you move right across a period.",
          null,
          "This treats a period like a group. Both halves are backward: radius grows down a group, but it shrinks across a period, and electronegativity rises toward the upper right.",
          "The radius half is right, but electronegativity increases toward the upper right of the table, so fluorine pulls electrons far harder than lithium does."
        ]
      },
      diff: 3,
      secs: 65
    },

    {
      id: "TCB-003",
      sub: "Chemistry",
      type: "mc",
      q: "Magnesium, a metal in Group 2, reacts with oxygen, a nonmetal in Group 16, to form magnesium oxide (MgO). Which statement best describes the bonding in this compound?",
      choices: [
        "Magnesium transfers two electrons to oxygen, and the oppositely charged ions attract.",
        "Magnesium and oxygen share two pairs of electrons equally between the two atoms.",
        "Magnesium and oxygen share two pairs of electrons unequally, creating partial charges.",
        "Magnesium and oxygen both release valence electrons into a pool of mobile electrons."
      ],
      answer: 0,
      rationale: {
        correct: "A metal bonding with a nonmetal forms an ionic bond by electron transfer: magnesium gives up its two valence electrons to become Mg2+, oxygen accepts them to become O2-, and the electrostatic attraction between the two opposite charges holds the compound together.",
        wrong: [
          null,
          "Equal sharing is a nonpolar covalent bond, which occurs between identical or nearly identical nonmetal atoms such as the two atoms in O2, not between a metal and a nonmetal.",
          "Unequal sharing is a polar covalent bond, as in water; it still requires two nonmetals, and the large electronegativity gap between magnesium and oxygen pushes past sharing into full transfer.",
          "A shared pool of mobile electrons describes metallic bonding, which requires metal atoms on both sides; oxygen is a nonmetal and gains electrons rather than releasing them."
        ]
      },
      diff: 2,
      secs: 60
    },

    {
      id: "TCB-004",
      sub: "Chemistry",
      type: "hotspot",
      q: "The graph shows a heating curve for a pure substance that is heated at a constant rate, beginning as a solid below its melting point. Click the numbered segment during which the substance is changing from a liquid to a gas.",
      svg: '<svg viewBox="0 0 400 260" role="img" aria-label="Heating curve of a pure substance with five numbered segments">' +
           '<rect class="hs-bg" x="0" y="0" width="400" height="260"/>' +
           '<line class="hs-part" x1="58" y1="24" x2="58" y2="212"/>' +
           '<line class="hs-part" x1="58" y1="212" x2="378" y2="212"/>' +
           '<line class="hs-part" x1="52" y1="160" x2="58" y2="160"/>' +
           '<line class="hs-part" x1="52" y1="95" x2="58" y2="95"/>' +
           '<line class="hs-part" x1="70" y1="195" x2="92" y2="160"/>' +
           '<line class="hs-part" x1="92" y1="160" x2="128" y2="160"/>' +
           '<line class="hs-part" x1="128" y1="160" x2="196" y2="95"/>' +
           '<line class="hs-part" x1="196" y1="95" x2="320" y2="95"/>' +
           '<line class="hs-part" x1="320" y1="95" x2="365" y2="62"/>' +
           '<text class="hs-label" x="6" y="18">Temperature (C)</text>' +
           '<text class="hs-label" x="36" y="164">0</text>' +
           '<text class="hs-label" x="26" y="99">100</text>' +
           '<text class="hs-label" x="76" y="200">1</text>' +
           '<text class="hs-label" x="112" y="172">2</text>' +
           '<text class="hs-label" x="160" y="140">3</text>' +
           '<text class="hs-label" x="254" y="108">4</text>' +
           '<text class="hs-label" x="340" y="88">5</text>' +
           '<text class="hs-label" x="130" y="240">Energy added at a constant rate</text>' +
           '</svg>',
      regions: [
        { id: "r1", label: "Segment 1: solid warming toward 0 C", shape: "rect", x: 66, y: 152, w: 32, h: 52 },
        { id: "r2", label: "Segment 2: temperature holds at 0 C", shape: "rect", x: 100, y: 146, w: 32, h: 28 },
        { id: "r3", label: "Segment 3: liquid warming from 0 C to 100 C", shape: "rect", x: 134, y: 88, w: 60, h: 78 },
        { id: "r4", label: "Segment 4: temperature holds at 100 C", shape: "rect", x: 196, y: 82, w: 124, h: 28 },
        { id: "r5", label: "Segment 5: gas warming above 100 C", shape: "rect", x: 322, y: 54, w: 46, h: 48 }
      ],
      answer: "r4",
      rationale: {
        correct: "Temperature stays flat during a phase change because the added energy goes into pulling particles apart rather than speeding them up. Segment 4 is the upper plateau, at the boiling point, where the liquid is vaporizing; segment 2 is the lower plateau, where the solid is melting. The vaporization plateau is the longer of the two because separating particles completely takes far more energy than merely loosening them."
      },
      diff: 2,
      secs: 70
    },

    {
      id: "TCB-005",
      sub: "Chemistry",
      type: "mc",
      q: "On a hot afternoon the sand at the edge of a lake becomes too hot to stand on, while the lake water a few steps away stays cool. Which property of water best explains this difference?",
      choices: [
        "Water is a polar molecule, so it dissolves a wide range of substances.",
        "Water molecules cling to one another, giving the lake surface high surface tension.",
        "Water is less dense as a solid than as a liquid, so ice floats rather than sinking.",
        "Water has a high specific heat, so absorbing energy raises its temperature only slightly."
      ],
      answer: 3,
      rationale: {
        correct: "Specific heat is the energy required to raise one gram of a substance by one degree Celsius, and water's is unusually high because much of the absorbed energy goes into disrupting hydrogen bonds instead of speeding molecules up. The same sunlight therefore warms sand quickly and water slowly, which is also why water stabilizes body temperature.",
        wrong: [
          "Polarity explains why water is called the universal solvent, but dissolving substances does not govern how fast a substance heats up.",
          "Cohesion and the surface tension it creates let insects rest on a pond surface; neither affects how much energy the water must absorb to warm.",
          "The lower density of ice explains why lakes freeze from the top down, a property of the solid phase that is irrelevant to liquid water on a hot day.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },

    {
      id: "TCB-006",
      sub: "Chemistry",
      type: "fill",
      q: "The pH scale is logarithmic, so each whole-number step represents a tenfold change in hydrogen ion concentration. A sample of gastric fluid has a pH of 2 and a sample of urine has a pH of 5. The hydrogen ion concentration of the gastric fluid is how many times greater than that of the urine? Enter your answer as a whole number, with no commas, units, or spaces.",
      answer: { accept: ["1000", "1,000"] },
      rationale: {
        correct: "The two samples are three whole pH units apart, and each unit is a factor of 10, so the difference is 10 x 10 x 10 = 1,000. Because a lower pH means a higher hydrogen ion concentration, the pH 2 gastric fluid holds 1,000 times as much H+ as the pH 5 urine. A common error is subtracting the pH values and answering 3, which treats the scale as if it were linear."
      },
      diff: 3,
      secs: 70
    },

    {
      id: "TCB-007",
      sub: "Chemistry",
      type: "mc",
      q: "A student stirs sugar into 100 mL of water held at a constant 25 degrees Celsius. Eventually no more sugar will dissolve, and a small amount of undissolved sugar settles on the bottom of the beaker. Which term best describes the solution at this point?",
      choices: [
        "Saturated",
        "Unsaturated",
        "Supersaturated",
        "Dilute"
      ],
      answer: 0,
      rationale: {
        correct: "A saturated solution holds the maximum mass of solute that will dissolve at that temperature, and the undissolved sugar resting on the bottom in equilibrium with the dissolved sugar is the visible sign that the limit has been reached. Warming the water would raise the solubility of this solid and allow more to dissolve.",
        wrong: [
          null,
          "An unsaturated solution can still take up more solute, so no solid would remain sitting undissolved at the bottom of the beaker.",
          "A supersaturated solution holds more solute than the limit, which is achieved by cooling a hot saturated solution carefully; it is unstable, and the excess crystallizes out as soon as it is disturbed.",
          "Dilute describes a small amount of solute relative to solvent. It compares concentrations rather than stating whether the dissolving limit has been reached."
        ]
      },
      diff: 1,
      secs: 45
    },

    {
      id: "TCB-008",
      sub: "Chemistry",
      type: "mc",
      q: "Each of the following equations is balanced. Which one represents a synthesis reaction?",
      choices: [
        "CaCO3 -> CaO + CO2",
        "Zn + 2HCl -> ZnCl2 + H2",
        "2Na + Cl2 -> 2NaCl",
        "AgNO3 + NaCl -> AgCl + NaNO3"
      ],
      answer: 2,
      rationale: {
        correct: "A synthesis, or combination, reaction follows the pattern A + B -> AB: two or more simpler reactants join to form a single more complex product. Sodium and chlorine gas combine into one product, sodium chloride, and the coefficients confirm that atoms are conserved on both sides.",
        wrong: [
          "One reactant breaking apart into two products (AB -> A + B) is decomposition, the reverse of synthesis.",
          "A free element displacing another element from its compound (A + BC -> AC + B) is single replacement; zinc takes the place of hydrogen.",
          null,
          "Two compounds exchanging partners (AB + CD -> AD + CB) is double replacement, and here it produces the insoluble precipitate silver chloride."
        ]
      },
      diff: 2,
      secs: 60
    },

    {
      id: "TCB-009",
      sub: "Chemistry",
      type: "mc",
      q: "A technician measures the activity of a human digestive enzyme at several temperatures. Activity rises steadily from 20 degrees Celsius to 37 degrees Celsius, then falls sharply, and no activity remains at 60 degrees Celsius. Which statement best explains the sharp decline above 37 degrees Celsius?",
      choices: [
        "The added heat lowered the kinetic energy of the molecules, so fewer collisions occurred.",
        "The added heat changed the shape of the active site, so the substrate no longer fit.",
        "The enzyme was gradually consumed by the reaction and had to be replaced.",
        "The enzyme began raising the activation energy once its optimum was passed."
      ],
      answer: 1,
      rationale: {
        correct: "Enzymes are proteins whose function depends on the precise three-dimensional shape of the active site. Above the optimum temperature, which is near 37 degrees Celsius for human enzymes, heat disrupts the bonds holding that shape, and the denatured enzyme can no longer bind its substrate. Extreme pH denatures enzymes the same way.",
        wrong: [
          "Raising the temperature increases kinetic energy, which is why activity climbs on the way up to 37 degrees Celsius; this option reverses the relationship.",
          null,
          "A catalyst is regenerated and reused rather than consumed, so being used up cannot explain any part of the curve.",
          "A catalyst lowers activation energy and never raises it; nothing about passing an optimum reverses that role."
        ]
      },
      diff: 2,
      secs: 60
    },

    /* ---------------- SCIENTIFIC REASONING (10) ---------------- */

    {
      id: "TCB-010",
      sub: "Scientific Reasoning",
      type: "mc",
      q: "A public health class tested how well household filters remove bacteria from well water. Students drew 40 L of water from a single well on one morning and stirred it in one large container so that every sample began identically. They then measured out 40 samples of 500 mL each and divided them into four groups of ten. Group 1 samples were poured through no filter at all, group 2 through a cloth filter, group 3 through a sand filter, and group 4 through a ceramic filter. Every filter was new, every sample was poured at the same rate into a sterile flask, and all flasks were cultured for 48 hours at 35 degrees Celsius before the bacterial colonies on each plate were counted. Which of the following is the independent variable in this investigation?",
      choices: [
        "The number of bacterial colonies counted after 48 hours",
        "The volume of water contained in each sample",
        "The temperature at which the cultures were incubated",
        "The type of filter each water sample was poured through"
      ],
      answer: 3,
      rationale: {
        correct: "The independent variable is the single condition the investigators deliberately change from group to group. Every sample here came from the same stirred source and was handled identically except for which filter, or no filter, it passed through.",
        wrong: [
          "Colony count is the outcome the students measured at the end, which makes it the dependent variable; swapping these two is the most common error on this item type.",
          "Sample volume was fixed at 500 mL for every sample, so it is a controlled variable held constant to keep the comparison fair.",
          "Incubation temperature was the same 35 degrees Celsius for every plate, which again makes it a controlled variable rather than the manipulated one.",
          null
        ]
      },
      diff: 2,
      secs: 85
    },

    {
      id: "TCB-011",
      sub: "Scientific Reasoning",
      type: "ms",
      q: "A physical therapy clinic wants to know whether a heated wrap reduces knee pain. Ten patients with knee pain wore the wrap for 20 minutes and then rated their pain on a 0-to-10 scale, and the therapist who applied the wrap recorded each rating. The mean rating after treatment was lower than the mean rating the same patients gave on arrival. Which of the following changes would improve the design of this study? Select all that apply.",
      choices: [
        "Assign a comparable group of patients to an unheated wrap of identical appearance.",
        "Have someone who does not know which patients wore the heated wrap collect the ratings.",
        "Enroll a larger number of patients and repeat the measurements on more than one day.",
        "Ask each patient how much relief they expect before the wrap is applied.",
        "Report the ratings only for the patients whose pain scores dropped after treatment.",
        "Let each patient decide how many minutes to leave the wrap in place."
      ],
      answer: [0, 1, 2],
      rationale: {
        correct: "The study has no comparison group, no blinding, and very few participants. A matched group given an identical-looking unheated wrap supplies the baseline needed to separate the heat itself from rest, time, and expectation; a rater who does not know the group assignment removes observer bias; and enrolling more patients with repeated measurement improves reliability.",
        wrong: [
          null,
          null,
          null,
          "Telling patients to state their expectations before treatment primes them and strengthens the placebo response rather than controlling for it.",
          "Dropping the patients who did not improve is selective reporting; it guarantees a favorable result no matter what the wrap does.",
          "Letting patients choose their own treatment time turns a controlled condition into an uncontrolled variable that differs from person to person."
        ]
      },
      diff: 3,
      secs: 90
    },

    {
      id: "TCB-012",
      sub: "Scientific Reasoning",
      type: "mc",
      q: "A food scientist proposes this hypothesis: If ground beef is stored at 4 degrees Celsius rather than at 20 degrees Celsius, then it will take longer for its bacterial count to reach an unsafe level. Which experimental result would support this hypothesis?",
      choices: [
        "Samples at 4 degrees reached an unsafe count after 6 days; samples at 20 degrees reached it after 1 day.",
        "Samples at 4 degrees reached an unsafe count after 1 day; samples at 20 degrees reached it after 6 days.",
        "Samples at both storage temperatures reached an unsafe count after the same 3 days.",
        "Samples at 4 degrees darkened in color sooner, but no bacterial counts were taken."
      ],
      answer: 0,
      rationale: {
        correct: "A hypothesis predicts a direction, and this one predicts that colder storage lengthens the time to an unsafe count. Six days at 4 degrees versus one day at 20 degrees matches that prediction, which supports the hypothesis without proving it; the hypothesis has simply survived one test.",
        wrong: [
          null,
          "This is the opposite of the prediction, so it refutes rather than supports the hypothesis.",
          "Identical results at both temperatures indicate that storage temperature made no measurable difference, which fails to support the predicted effect.",
          "Color is not the variable the hypothesis is about. Without bacterial counts, this result cannot test a prediction stated in terms of bacterial counts."
        ]
      },
      diff: 2,
      secs: 65
    },

    {
      id: "TCB-013",
      sub: "Scientific Reasoning",
      type: "mc",
      q: "An infection control team wanted to know whether posting new hand hygiene reminder signs above every sink would increase the use of hand sanitizer on a medical unit. In March the team mounted the signs throughout the unit. Every sanitizer dispenser on the unit contains an electronic counter that logs each dose released, so no observer had to be present and the staff did not know the counts were being reviewed. Over the four weeks after the signs went up, the dispensers logged an average of 640 doses per day on the unit. The team reported that the signs had increased hand hygiene compliance and recommended posting the same signs in every unit in the hospital. Which of the following is the most serious flaw in this study?",
      choices: [
        "The team gathered data for only four weeks rather than for a full year.",
        "No dispenser data were collected before the signs went up, so there is nothing to compare.",
        "The counters logged doses used by every person on the unit, not only by nursing staff.",
        "The team did not convert the daily total into an average number of doses per patient."
      ],
      answer: 1,
      rationale: {
        correct: "A before-and-after claim requires a before measurement. Without dispenser counts from the weeks preceding the signs, or from a comparable unit that received no signs, 640 doses per day could be higher than, lower than, or identical to the unit's usual rate, so these data cannot show that the signs changed anything.",
        wrong: [
          "Four weeks is a reasonable observation window; the defect is that there is no earlier window to measure it against.",
          null,
          "Counting everyone who uses a dispenser makes the measure slightly broader, but it does not create the missing comparison that the conclusion depends on.",
          "A per-patient rate would be a useful refinement, yet with no baseline data that refined rate would still have nothing to be compared with."
        ]
      },
      diff: 3,
      secs: 90
    },

    {
      id: "TCB-014",
      sub: "Scientific Reasoning",
      type: "mc",
      q: "In a study of 200 adults, participants were sorted by the minutes of moderate exercise they reported each week, and the mean resting heart rate of each group was recorded: 0 minutes, 78 beats per minute; 60 minutes, 74 beats per minute; 120 minutes, 71 beats per minute; 180 minutes, 68 beats per minute. Which statement best describes the relationship between the two variables in these data?",
      choices: [
        "It is a direct relationship: as weekly exercise time rose, mean resting heart rate rose.",
        "There is no consistent relationship between weekly exercise time and mean resting heart rate.",
        "It is an inverse relationship: as weekly exercise time rose, mean resting heart rate fell.",
        "Mean resting heart rate fell at first and then rose again at the highest exercise times."
      ],
      answer: 2,
      rationale: {
        correct: "Each step up in reported weekly exercise time is paired with a lower mean resting heart rate, 78 to 74 to 71 to 68 beats per minute. When one variable rises steadily while the other falls, the relationship is inverse. Note that describing this relationship is not the same as claiming exercise caused it, because participants reported their own activity rather than being assigned to it.",
        wrong: [
          "In a direct relationship both variables move the same way; here heart rate moves opposite to exercise time.",
          "The pattern is consistent, not absent: every increase in exercise time is matched by a decrease in mean heart rate.",
          null,
          "No reversal appears in the data. The lowest mean heart rate, 68 beats per minute, occurs in the group reporting the most exercise."
        ]
      },
      diff: 2,
      secs: 60
    },

    {
      id: "TCB-015",
      sub: "Scientific Reasoning",
      type: "mc",
      q: "A student must determine the mass of a small sample of powder to the nearest 0.01 g. Which instrument is designed to make that measurement?",
      choices: [
        "A graduated cylinder",
        "A spring scale",
        "A vernier caliper",
        "An electronic balance"
      ],
      answer: 3,
      rationale: {
        correct: "An electronic balance compares an unknown sample against a calibrated internal standard and reports mass directly, routinely to 0.01 g or finer. Mass is the amount of matter in the sample and does not change with location.",
        wrong: [
          "A graduated cylinder measures the volume of a liquid, read at eye level from the bottom of the meniscus, and reports nothing about mass.",
          "A spring scale measures weight, the force gravity exerts on an object, in newtons; weight changes with gravitational field strength while mass does not.",
          "A caliper measures small lengths and thicknesses to a fraction of a millimeter, which is a dimension rather than a quantity of matter.",
          null
        ]
      },
      diff: 1,
      secs: 45
    },

    {
      id: "TCB-016",
      sub: "Scientific Reasoning",
      type: "mc",
      q: "Four students each used the same ruler to measure one metal rod whose accepted length is 12.00 cm. Their recorded values were 13.9 cm, 16.8 cm, 14.3 cm, and 15.2 cm. Which statement best describes this set of measurements?",
      choices: [
        "They are accurate but not precise.",
        "They are precise but not accurate.",
        "They are both accurate and precise.",
        "They are neither accurate nor precise."
      ],
      answer: 3,
      rationale: {
        correct: "Precision is how closely repeated measurements agree with one another, and these four spread across 2.9 cm; accuracy is how close a measurement lies to the accepted value, and every reading sits at least 1.9 cm above 12.00 cm. The set fails both tests, which points to students reading the ruler inconsistently rather than to a single miscalibration.",
        wrong: [
          "Accuracy would require the values to cluster near 12.00 cm, but even the closest reading is nearly 2 cm too long.",
          "Precision would require the four readings to agree closely with one another, yet they differ by almost 3 cm.",
          "A set that is both would sit tightly grouped right at 12.00 cm, which matches neither the spread nor the position of these readings.",
          null
        ]
      },
      diff: 2,
      secs: 60
    },

    {
      id: "TCB-017",
      sub: "Scientific Reasoning",
      type: "mc",
      q: "A nursing student is writing a paper about a new type of wound dressing. Which of the following would be a primary source for that paper?",
      choices: [
        "A journal article in which researchers report the dressing trial they ran",
        "A review article summarizing the findings of twelve published dressing trials",
        "A textbook chapter describing current approaches to caring for wounds",
        "A news report quoting what the trial's authors said about their findings"
      ],
      answer: 0,
      rationale: {
        correct: "A primary source is the original, firsthand report written by the people who did the work, including their methods and their own results, which lets a reader judge the study rather than someone else's summary of it.",
        wrong: [
          null,
          "A review article is a secondary source: it synthesizes studies other people conducted and reports no new data of its own.",
          "A textbook chapter is a secondary source, and it usually lags several years behind the current research literature.",
          "A news report is a secondary source at one further remove, filtered through a writer who took no part in the study."
        ]
      },
      diff: 1,
      secs: 50
    },

    {
      id: "TCB-018",
      sub: "Scientific Reasoning",
      type: "mc",
      q: "A research team reviewed the records of 12,000 adults enrolled in a large health system, each of whom completes an annual questionnaire. One questionnaire item asks how many mornings per week the person eats breakfast. The team compared those self-reported answers with the body mass index (BMI) recorded at each adult's yearly visit. Adults who reported eating breakfast at least five mornings a week had a mean BMI 1.8 units lower than adults who reported eating breakfast fewer than two mornings a week, and the difference was statistically significant. No one was assigned to eat or skip breakfast, and no information was collected on total daily calories, physical activity, or income. Which conclusion is best supported by these results?",
      choices: [
        "Eating breakfast at least five mornings a week causes a person's BMI to fall.",
        "Adults who want a lower BMI should be advised to start eating breakfast every morning.",
        "In this group, more frequent breakfast eating was associated with a lower mean BMI.",
        "Skipping breakfast is the leading cause of elevated BMI among adults."
      ],
      answer: 2,
      rationale: {
        correct: "The team observed what people already did instead of assigning the behavior, so the design supports a statement of association and nothing stronger; the wording also limits the finding to the adults actually studied.",
        wrong: [
          "Establishing causation requires the researchers to control the variable, usually through random assignment. An observational comparison cannot rule out confounding factors such as diet quality or activity level.",
          "This converts an association into a treatment recommendation. Nothing in the study tested what happens when a person who skips breakfast starts eating it.",
          null,
          "The study measured neither the other contributors to elevated BMI nor their relative size, so calling breakfast skipping the leading cause reaches far past the data collected."
        ]
      },
      diff: 3,
      secs: 95
    },

    {
      id: "TCB-019",
      sub: "Scientific Reasoning",
      type: "order",
      q: "A laboratory technician records four volumes of solution plus one measured in cubic centimeters (cm3). Place the five volumes in order from smallest to largest, beginning with the smallest.",
      items: [
        "1.2 L",
        "90 cm3",
        "2,500 mL",
        "0.4 L",
        "600 mL"
      ],
      answer: [1, 3, 4, 0, 2],
      rationale: {
        correct: "Convert everything to one unit before comparing. Because 1 cm3 equals 1 mL, 90 cm3 is 90 mL; because 1 L equals 1,000 mL, 0.4 L is 400 mL and 1.2 L is 1,200 mL. In milliliters the five values are 90, 400, 600, 1,200, and 2,500, which gives the order 90 cm3, 0.4 L, 600 mL, 1.2 L, 2,500 mL."
      },
      diff: 2,
      secs: 70
    }

  ]
};
