window.BANKS = window.BANKS || {};
window.BANKS["teas-math-b"] = {
  exam: "teas",
  section: "math",
  form: "B",
  questions: [

    // ---------- Numbers and Algebra (21) ----------

    {
      id: "TMB-001",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "Which of the following is 7/8 written as a percent?",
      choices: ["0.875%", "8.75%", "78%", "87.5%"],
      answer: 3,
      rationale: {
        correct: "The fraction bar means 7 divided by 8, which is 0.875. Multiplying a decimal by 100 converts it to a percent: 0.875 becomes 87.5%.",
        wrong: [
          "0.875% attaches the percent sign to the decimal without multiplying by 100; a percent is hundredths, so the decimal must shift two places.",
          "8.75% shifts the decimal only one place instead of two.",
          "78% strings the digits 7 and 8 together as a percent; the fraction must be divided out first.",
          null
        ]
      },
      diff: 1,
      secs: 60
    },

    {
      id: "TMB-002",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "What is 5/6 - 1/4?",
      choices: ["7/12", "1/3", "3/4", "1 1/12"],
      answer: 0,
      rationale: {
        correct: "The least common denominator of 6 and 4 is 12: 5/6 = 10/12 and 1/4 = 3/12, so the difference is 10/12 - 3/12 = 7/12.",
        wrong: [
          null,
          "1/3 (4/12) subtracts the original numerators over the new denominator without first rescaling each numerator.",
          "3/4 (9/12) rescales only 5/6 to 10/12 and then subtracts the unconverted numerator 1.",
          "1 1/12 (13/12) adds the two rescaled fractions instead of subtracting them."
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMB-003",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "What is 1 1/3 × 2 1/4?",
      choices: ["1/2", "16/27", "2 1/12", "3"],
      answer: 3,
      rationale: {
        correct: "Convert to improper fractions: 1 1/3 = 4/3 and 2 1/4 = 9/4. Multiply straight across: (4 × 9) / (3 × 4) = 36/12 = 3.",
        wrong: [
          "1/2 converts each mixed number by adding the whole number to the numerator (1 1/3 becomes 2/3, 2 1/4 becomes 3/4); the whole number must first be multiplied by the denominator.",
          "16/27 flips the second fraction and multiplies by 4/9; the reciprocal is used for division, not multiplication.",
          "2 1/12 multiplies the whole numbers and the fraction parts separately (1 × 2 and 1/3 × 1/4) instead of converting to improper fractions first.",
          null
        ]
      },
      diff: 2,
      secs: 95
    },

    {
      id: "TMB-004",
      sub: "Numbers and Algebra",
      type: "ms",
      q: "Which of the following are equivalent to 3/5? Select all that apply.",
      choices: ["0.35", "0.6", "35%", "60%", "6/15"],
      answer: [1, 3],
      rationale: {
        correct: "The fraction bar means 3 divided by 5, which is 0.6, and 0.6 multiplied by 100 is 60%. Those two forms name the same value as 3/5.",
        wrong: [
          "0.35 strings the digits 3 and 5 together as decimal places; 3/5 means 3 divided by 5, which is 0.6.",
          null,
          "35% strings the same two digits together in percent form; 3/5 equals 0.6, which is 60%.",
          null,
          "6/15 doubles the numerator but triples the denominator; scaling 3/5 by 2 gives 6/10, not 6/15."
        ]
      },
      diff: 1,
      secs: 75
    },

    {
      id: "TMB-005",
      sub: "Numbers and Algebra",
      type: "fill",
      q: "An oral suspension is labeled 200 mg per 8 mL. The provider orders a 350 mg dose. How many milliliters should be given? Record your answer as a whole number.",
      answer: { accept: ["14", "14.0"] },
      rationale: {
        correct: "Set up the proportion 200 mg / 8 mL = 350 mg / x mL and cross-multiply: 200x = 2,800, so x = 14 mL. Equivalently, the concentration is 25 mg per mL (200 ÷ 8), and 350 ÷ 25 = 14. Dividing 350 by 8 (43.75) or by 200 without multiplying by 8 (1.75) are the classic setup errors."
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMB-006",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "Simplify: 8 + 4 × (12 - 9) - 6 ÷ 3.",
      choices: ["45", "22", "18", "10"],
      answer: 2,
      rationale: {
        correct: "Parentheses first (12 - 9 = 3), then multiply and divide (4 × 3 = 12 and 6 ÷ 3 = 2), then add and subtract left to right: 8 + 12 - 2 = 18.",
        wrong: [
          "45 drops the parentheses and multiplies 4 × 12 before subtracting the 9.",
          "22 adds the final quotient instead of subtracting it; the minus sign applies to the whole term 6 ÷ 3.",
          null,
          "10 works strictly left to right (8 + 4 = 12, × 3 = 36, - 6 = 30, ÷ 3 = 10) - the result a four-function calculator gives when the expression is keyed straight through."
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMB-007",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "At 4 p.m. the outdoor temperature was 6°C. By midnight the temperature had fallen 14 degrees. What was the temperature at midnight?",
      choices: ["-20°C", "-8°C", "8°C", "20°C"],
      answer: 1,
      rationale: {
        correct: "A fall subtracts from the starting temperature: 6 - 14 = -8°C.",
        wrong: [
          "-20°C adds the two values and attaches a negative sign; a 14-degree fall from 6 is a subtraction.",
          null,
          "8°C subtracts in the wrong order (14 - 6) and keeps the result positive; the drop passes below zero.",
          "20°C adds the 14-degree fall instead of subtracting it."
        ]
      },
      diff: 1,
      secs: 65
    },

    {
      id: "TMB-008",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "Which of the following lists 7/10, 0.68, 72%, and 3/4 in order from greatest to least?",
      choices: [
        "72%, 3/4, 7/10, 0.68",
        "3/4, 7/10, 0.68, 72%",
        "3/4, 72%, 7/10, 0.68",
        "0.68, 7/10, 72%, 3/4"
      ],
      answer: 2,
      rationale: {
        correct: "Convert everything to decimals: 3/4 = 0.75, 72% = 0.72, 7/10 = 0.70, and 0.68 stays 0.68. Greatest to least is 3/4, 72%, 7/10, 0.68.",
        wrong: [
          "This order compares the numeral 72 against the other values without converting the percent; 72% is 0.72, which is less than 3/4 = 0.75.",
          "This order treats 72% as 0.072, shifting the decimal the wrong direction and pushing the percent to the end of the list.",
          null,
          "This is the correct comparison listed in the wrong direction - least to greatest."
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMB-009",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "A nursing program admits 45 students each fall. Last fall, 60% of the admitted students had prior health-care experience. How many of them had prior experience?",
      choices: ["2.7", "18", "27", "75"],
      answer: 2,
      rationale: {
        correct: "60% of 45 is 0.60 × 45 = 27 students.",
        wrong: [
          "2.7 misplaces the decimal, multiplying by 0.06 instead of 0.60.",
          "18 is the number of students WITHOUT prior experience (40% of 45) - the complement of what was asked.",
          null,
          "75 divides 45 by 0.60 instead of multiplying; dividing by a percent finds a whole, not a part."
        ]
      },
      diff: 1,
      secs: 70
    },

    {
      id: "TMB-010",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "Twenty-five percent of the beds on a hospital floor are private rooms. If the floor has 14 private rooms, how many beds are on the floor?",
      choices: ["3.5", "17.5", "39", "56"],
      answer: 3,
      rationale: {
        correct: "The part (14) is 25% of the whole: 0.25 × n = 14, so n = 14 ÷ 0.25 = 56 beds.",
        wrong: [
          "3.5 multiplies 14 by 0.25 instead of dividing - it treats 14 as the whole rather than the part.",
          "17.5 increases 14 by 25%, which answers a different question.",
          "39 adds 25 to 14; a percent is a proportion, not an amount that can be added.",
          null
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMB-011",
      sub: "Numbers and Algebra",
      type: "fill",
      q: "Enrollment in a nursing program grew from 240 students to 288 students. What was the percent increase in enrollment? Record your answer as a number without the percent sign.",
      answer: { accept: ["20", "20.0", "20%"] },
      rationale: {
        correct: "Percent change = (change ÷ original) × 100. The change is 288 - 240 = 48, so 48 / 240 = 0.20, which is 20%. The classic errors are dividing by the NEW enrollment (48 / 288 = 16.7%) instead of the original, and forgetting to multiply by 100 (0.20)."
      },
      diff: 2,
      secs: 95
    },

    {
      id: "TMB-012",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "A textbook priced at $120.00 is on sale for 25% off. A 5% sales tax is then applied to the sale price. What is the total cost of the textbook?",
      choices: ["$90.00", "$94.50", "$96.00", "$100.00"],
      answer: 1,
      rationale: {
        correct: "Take the discount first: 120 × 0.75 = $90.00. Then apply the tax to the sale price: 90 × 1.05 = $94.50.",
        wrong: [
          "$90.00 is the sale price before the 5% sales tax is added.",
          null,
          "$96.00 nets the two percents (25% - 5% = 20% off); the tax is applied to the discounted price, not subtracted from the discount.",
          "$100.00 treats the percents as dollar amounts (120 - 25 + 5); 25% of $120 is $30, not $25."
        ]
      },
      diff: 3,
      secs: 110
    },

    {
      id: "TMB-013",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "A recipe that serves 6 people calls for 15 ounces of broth. How many ounces of broth are needed to serve 10 people?",
      choices: ["4", "19", "25", "150"],
      answer: 2,
      rationale: {
        correct: "Each serving uses 15 ÷ 6 = 2.5 ounces, so 10 servings need 2.5 × 10 = 25 ounces. The proportion 15/6 = x/10 gives the same result.",
        wrong: [
          "4 sets the proportion up inverted (6/15 = x/10), which makes the answer shrink even though more servings are needed.",
          "19 adds the 4 extra servings to the 15 ounces; a scaled recipe multiplies rather than adds.",
          null,
          "150 multiplies 15 by the 10 servings without dividing by the 6 servings the recipe already covers."
        ]
      },
      diff: 1,
      secs: 80
    },

    {
      id: "TMB-014",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "A pediatric unit staffs nurses and aides in a ratio of 4:3. If 24 aides are on duty, how many nurses are on duty?",
      choices: ["8", "18", "28", "32"],
      answer: 3,
      rationale: {
        correct: "24 aides is 8 groups of 3 (24 ÷ 3 = 8), so the nurses number 8 × 4 = 32.",
        wrong: [
          "8 is the number of ratio groups (24 ÷ 3) - the first step, not the count of nurses.",
          "18 inverts the ratio, computing 24 × 3/4 as though aides outnumbered nurses.",
          "28 adds the ratio number 4 to 24; ratio parts must be scaled, not added.",
          null
        ]
      },
      diff: 2,
      secs: 85
    },

    {
      id: "TMB-015",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "A supply catalog lists the same alcohol prep pads in four package sizes. Which package has the lowest price per pad?",
      choices: [
        "100 pads for $3.00",
        "60 pads for $2.10",
        "250 pads for $8.00",
        "40 pads for $1.60"
      ],
      answer: 0,
      rationale: {
        correct: "Divide price by count to get the unit price: $3.00 ÷ 100 = $0.030 per pad, the lowest of the four.",
        wrong: [
          null,
          "$2.10 ÷ 60 = $0.035 per pad - half a cent more per pad than the 100-count.",
          "$8.00 ÷ 250 = $0.032 per pad; the biggest package is not automatically the cheapest per unit.",
          "$1.60 ÷ 40 = $0.040 per pad, the highest unit price; the lowest total price is not the best buy."
        ]
      },
      diff: 2,
      secs: 95
    },

    {
      id: "TMB-016",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "Solve for x: 4(x - 3) = 2x + 6.",
      choices: ["-3", "3", "4.5", "9"],
      answer: 3,
      rationale: {
        correct: "Distribute: 4x - 12 = 2x + 6. Subtract 2x and add 12 to both sides: 2x = 18, so x = 9.",
        wrong: [
          "-3 comes from a sign error, computing 2x = 6 - 12 instead of 6 + 12.",
          "3 adds 2x to the left side (6x - 12 = 6) instead of subtracting it from both sides.",
          "4.5 forgets to distribute the 4 across -3, solving 4x - 3 = 2x + 6.",
          null
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMB-017",
      sub: "Numbers and Algebra",
      type: "fill",
      q: "Solve for x: (2/5)x + 7 = 19. Record your answer as a whole number.",
      answer: { accept: ["30", "30.0"] },
      rationale: {
        correct: "Subtract 7 from both sides: (2/5)x = 12. Multiply both sides by the reciprocal 5/2: x = 12 × 5/2 = 30. Check: (2/5)(30) + 7 = 12 + 7 = 19. Multiplying by 2/5 instead of 5/2 (4.8) and adding 7 instead of subtracting it (65) are the common slips."
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMB-018",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "Which of the following represents all values of x that satisfy 15 - 3x ≤ 6?",
      choices: ["x ≥ 3", "x ≤ 3", "x ≥ -3", "x ≤ -3"],
      answer: 0,
      rationale: {
        correct: "Subtract 15 from both sides to get -3x ≤ -9, then divide by -3: x ≥ 3. Dividing an inequality by a negative number reverses the inequality sign.",
        wrong: [
          null,
          "x ≤ 3 reaches -3x ≤ -9 correctly but divides by -3 without reversing the inequality sign.",
          "x ≥ -3 drops the negative sign on the coefficient (solving 3x ≤ -9) and then reverses the sign anyway; the boundary value is +3.",
          "x ≤ -3 drops the negative sign on the coefficient but keeps it on the constant, solving 3x ≤ -9."
        ]
      },
      diff: 2,
      secs: 85
    },

    {
      id: "TMB-019",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "A phone plan charges a $35 monthly fee plus $0.12 for each minute of international calling. Which of the following expressions gives the total monthly cost, in dollars, for m minutes of international calling?",
      choices: ["0.12m + 35", "0.12(m + 35)", "35 + 0.12 + m", "35m + 0.12"],
      answer: 0,
      rationale: {
        correct: "The per-minute charge scales with usage, so it is 0.12 times m, and the flat fee is added once: 0.12m + 35.",
        wrong: [
          null,
          "0.12(m + 35) applies the per-minute rate to the $35 fee as well; the fee is charged once, not multiplied by the rate.",
          "35 + 0.12 + m adds the per-minute rate a single time instead of multiplying it by the number of minutes.",
          "35m + 0.12 swaps the roles of the two numbers, charging the flat fee for every minute."
        ]
      },
      diff: 1,
      secs: 65
    },

    {
      id: "TMB-020",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "Tickets to a nursing-school fundraiser cost $14.00 for adults and $9.00 for students. A group buys 3 adult tickets and 5 student tickets and pays with a $100 bill. How much change does the group receive?",
      choices: ["$3.00", "$13.00", "$55.00", "$87.00"],
      answer: 1,
      rationale: {
        correct: "The adult tickets cost 3 × 14 = $42.00 and the student tickets 5 × 9 = $45.00, for $87.00 total. The change is 100.00 - 87.00 = $13.00.",
        wrong: [
          "$3.00 swaps the two counts, buying 5 adult and 3 student tickets for $97.00.",
          null,
          "$55.00 subtracts only the $45.00 of student tickets and omits the adult tickets entirely.",
          "$87.00 is the total cost of the tickets; the question asks for the change from $100.00."
        ]
      },
      diff: 3,
      secs: 110
    },

    {
      id: "TMB-021",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "A clinic uses 18 syringes each day. Syringes are sold only in boxes of 100. What is the least number of boxes the clinic must order to cover 30 days of use?",
      choices: ["5", "5.4", "6", "54"],
      answer: 2,
      rationale: {
        correct: "The clinic needs 18 × 30 = 540 syringes. Dividing by the box size gives 540 ÷ 100 = 5.4 boxes, and a partial box cannot be ordered, so round UP to 6 boxes.",
        wrong: [
          "5 rounds down, which leaves the clinic 40 syringes short of 30 days.",
          "5.4 is the exact quotient, but boxes can only be ordered in whole numbers.",
          null,
          "54 divides 540 by 10 instead of by the 100 syringes in a box."
        ]
      },
      diff: 3,
      secs: 100
    },

    // ---------- Measurement and Data (17) ----------

    {
      id: "TMB-022",
      sub: "Measurement and Data",
      type: "hotspot",
      q: "The line graph shows a patient's morning blood glucose reading on five consecutive days. The target range is 80 to 110 mg/dL. Select the day on which the reading first fell within the target range.",
      svg: "<svg viewBox='0 0 400 260' xmlns='http://www.w3.org/2000/svg'><rect class='hs-bg' x='0' y='0' width='400' height='260'/><text class='hs-label' x='200' y='18' text-anchor='middle' font-size='13'>Morning Blood Glucose (mg/dL)</text><rect class='hs-part' x='58' y='30' width='2' height='187'/><rect class='hs-part' x='58' y='215' width='322' height='2'/><rect class='hs-part' x='53' y='215' width='5' height='2'/><rect class='hs-part' x='53' y='164' width='5' height='2'/><rect class='hs-part' x='53' y='114' width='5' height='2'/><rect class='hs-part' x='53' y='64' width='5' height='2'/><text class='hs-label' x='50' y='219' text-anchor='end' font-size='10'>80</text><text class='hs-label' x='50' y='169' text-anchor='end' font-size='10'>100</text><text class='hs-label' x='50' y='119' text-anchor='end' font-size='10'>120</text><text class='hs-label' x='50' y='69' text-anchor='end' font-size='10'>140</text><polygon class='hs-part' points='90,68.5 155,103.5 155,106.5 90,71.5'/><polygon class='hs-part' points='155,103.5 220,118.5 220,121.5 155,106.5'/><polygon class='hs-part' points='220,118.5 285,153.5 285,156.5 220,121.5'/><polygon class='hs-part' points='285,153.5 350,173.5 350,176.5 285,156.5'/><rect class='hs-part' x='86' y='66' width='8' height='8'/><rect class='hs-part' x='151' y='101' width='8' height='8'/><rect class='hs-part' x='216' y='116' width='8' height='8'/><rect class='hs-part' x='281' y='151' width='8' height='8'/><rect class='hs-part' x='346' y='171' width='8' height='8'/><text class='hs-label' x='90' y='58' text-anchor='middle' font-size='11'>138</text><text class='hs-label' x='155' y='93' text-anchor='middle' font-size='11'>124</text><text class='hs-label' x='220' y='108' text-anchor='middle' font-size='11'>118</text><text class='hs-label' x='285' y='143' text-anchor='middle' font-size='11'>104</text><text class='hs-label' x='350' y='163' text-anchor='middle' font-size='11'>96</text><text class='hs-label' x='90' y='233' text-anchor='middle' font-size='11'>Day 1</text><text class='hs-label' x='155' y='233' text-anchor='middle' font-size='11'>Day 2</text><text class='hs-label' x='220' y='233' text-anchor='middle' font-size='11'>Day 3</text><text class='hs-label' x='285' y='233' text-anchor='middle' font-size='11'>Day 4</text><text class='hs-label' x='350' y='233' text-anchor='middle' font-size='11'>Day 5</text></svg>",
      regions: [
        { id: "d1", label: "Day 1", shape: "rect", x: 60, y: 30, w: 63, h: 190 },
        { id: "d2", label: "Day 2", shape: "rect", x: 123, y: 30, w: 63, h: 190 },
        { id: "d3", label: "Day 3", shape: "rect", x: 186, y: 30, w: 63, h: 190 },
        { id: "d4", label: "Day 4", shape: "rect", x: 249, y: 30, w: 63, h: 190 },
        { id: "d5", label: "Day 5", shape: "rect", x: 312, y: 30, w: 63, h: 190 }
      ],
      answer: "d4",
      rationale: {
        correct: "The plotted readings are Day 1: 138, Day 2: 124, Day 3: 118, Day 4: 104, and Day 5: 96 mg/dL. Day 4 is the first reading at or below the 110 mg/dL top of the target range. Days 1 and 2 sit well above the range, Day 3 (118) is closer but still above 110, and Day 5 is inside the range but is not the FIRST day inside it."
      },
      diff: 2,
      secs: 95
    },

    {
      id: "TMB-023",
      sub: "Measurement and Data",
      type: "mc",
      q: "A blood drive collected donations over four weeks: Week 1, 84 units; Week 2, 96 units; Week 3, 78 units; Week 4, 102 units. How many units were collected in all four weeks combined?",
      choices: ["360", "258", "90", "24"],
      answer: 0,
      rationale: {
        correct: "Add all four weekly totals: 84 + 96 + 78 + 102 = 360 units.",
        wrong: [
          null,
          "258 sums only the first three weeks and omits Week 4.",
          "90 is the mean number of units per week (360 ÷ 4), not the combined total.",
          "24 is the range of the four values (102 - 78), which answers a different question."
        ]
      },
      diff: 1,
      secs: 70
    },

    {
      id: "TMB-024",
      sub: "Measurement and Data",
      type: "mc",
      q: "A circle graph divides a nurse's 40-hour work week: direct patient care 45%, documentation 25%, medication administration 20%, meetings 10%. How many more hours are spent on direct patient care than on documentation?",
      choices: ["8", "10", "18", "20"],
      answer: 0,
      rationale: {
        correct: "Direct care is 0.45 × 40 = 18 hours and documentation is 0.25 × 40 = 10 hours, so the difference is 18 - 10 = 8 hours.",
        wrong: [
          null,
          "10 is the documentation total by itself, not the amount by which direct care exceeds it.",
          "18 is the direct-care total by itself; the question asks for the difference between the two sectors.",
          "20 is the difference in percentage points (45% - 25%) used as if it were hours; 20% of 40 hours is 8 hours."
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMB-025",
      sub: "Measurement and Data",
      type: "mc",
      q: "Which type of graph is most appropriate for displaying the portion of a clinic's total annual budget that each department receives?",
      choices: ["Circle graph", "Histogram", "Line graph", "Scatterplot"],
      answer: 0,
      rationale: {
        correct: "A circle graph divides one whole into sectors, so it shows at a glance what share of a single total each category takes.",
        wrong: [
          null,
          "A histogram shows how often values fall into numeric intervals, not how a total splits among named categories.",
          "A line graph tracks how one value changes across time; a budget share is a snapshot, not a trend.",
          "A scatterplot displays the relationship between two measured variables, not the parts of a single total."
        ]
      },
      diff: 1,
      secs: 60
    },

    {
      id: "TMB-026",
      sub: "Measurement and Data",
      type: "mc",
      q: "A hospital recorded newborn birth weights: 5.0-5.9 lb, 5 newborns; 6.0-6.9 lb, 11 newborns; 7.0-7.9 lb, 15 newborns; 8.0-8.9 lb, 6 newborns. How many newborns weighed less than 7.0 pounds?",
      choices: ["5", "16", "21", "37"],
      answer: 1,
      rationale: {
        correct: "'Less than 7.0 pounds' covers the 5.0-5.9 and 6.0-6.9 intervals: 5 + 11 = 16 newborns.",
        wrong: [
          "5 counts only the 5.0-5.9 interval and misses the 6.0-6.9 interval.",
          null,
          "21 counts the newborns weighing 7.0 lb or more (15 + 6) - the complement of the group asked about.",
          "37 is the total of all four intervals, not just the weights below 7.0 pounds."
        ]
      },
      diff: 2,
      secs: 85
    },

    {
      id: "TMB-027",
      sub: "Measurement and Data",
      type: "fill",
      q: "The systolic blood pressures recorded for six patients were 118, 132, 126, 148, 124, and 136 mm Hg. What is the median of these readings? Record your answer as a whole number.",
      answer: { accept: ["129", "129.0"] },
      rationale: {
        correct: "Sort the readings first: 118, 124, 126, 132, 136, 148. With six values the median is the mean of the middle two: (126 + 132) ÷ 2 = 129 mm Hg. Averaging the middle two of the UNSORTED list (126 and 148 = 137) and computing the mean instead (784 ÷ 6 = 130.7) are the two classic errors."
      },
      diff: 2,
      secs: 85
    },

    {
      id: "TMB-028",
      sub: "Measurement and Data",
      type: "mc",
      q: "What is the mode of the data set 6, 9, 4, 9, 12, 2?",
      choices: ["7", "7.5", "9", "10"],
      answer: 2,
      rationale: {
        correct: "The mode is the value that appears most often. Only 9 appears twice; every other value appears once, so the mode is 9.",
        wrong: [
          "7 is the mean of the data set (42 ÷ 6), not the most frequent value.",
          "7.5 is the median - the average of the middle two values (6 and 9) after sorting.",
          null,
          "10 is the range of the data set (12 - 2), a measure of spread rather than a measure of center."
        ]
      },
      diff: 2,
      secs: 75
    },

    {
      id: "TMB-029",
      sub: "Measurement and Data",
      type: "mc",
      q: "In a course, the final grade is 60% of the exam average plus 40% of the lab average. A student has an exam average of 82 and a lab average of 92. What is the student's final grade?",
      choices: ["49.2", "86", "87", "88"],
      answer: 1,
      rationale: {
        correct: "Weight each average and add: (0.60 × 82) + (0.40 × 92) = 49.2 + 36.8 = 86.",
        wrong: [
          "49.2 is only the weighted exam portion (0.60 × 82); the weighted lab portion still has to be added.",
          null,
          "87 averages 82 and 92 evenly, ignoring the 60/40 weighting entirely.",
          "88 swaps the weights, applying 40% to the exam average and 60% to the lab average."
        ]
      },
      diff: 3,
      secs: 110
    },

    {
      id: "TMB-030",
      sub: "Measurement and Data",
      type: "mc",
      q: "On a scatterplot of daily exercise minutes and resting heart rate, the points fall steadily from the upper left toward the lower right. Which statement best describes the relationship between the two variables?",
      choices: [
        "As exercise minutes increase, resting heart rate tends to increase.",
        "Resting heart rate stays about the same as exercise minutes increase.",
        "The data prove that exercising more causes resting heart rate to fall.",
        "As exercise minutes increase, resting heart rate tends to decrease."
      ],
      answer: 3,
      rationale: {
        correct: "Points that descend from the upper left to the lower right mean one variable rises while the other falls - a negative correlation between exercise minutes and resting heart rate.",
        wrong: [
          "Points rising from the lower left to the upper right would show this positive relationship; the described points fall.",
          "A flat, level band of points would show no relationship; these points move steadily downward.",
          "A scatterplot can show that two variables move together, but an observed association alone never proves that one causes the other.",
          null
        ]
      },
      diff: 1,
      secs: 65
    },

    {
      id: "TMB-031",
      sub: "Measurement and Data",
      type: "mc",
      q: "A student's savings account held $340 at the end of week 4 and $580 at the end of week 10. What was the average rate of change in the balance per week over that period?",
      choices: ["$24 per week", "$40 per week", "$58 per week", "$85 per week"],
      answer: 1,
      rationale: {
        correct: "Rate of change is the change in balance divided by the change in time: (580 - 340) ÷ (10 - 4) = 240 ÷ 6 = $40 per week.",
        wrong: [
          "$24 divides the $240 change by the ending week number (10) instead of by the 6 weeks that actually elapsed.",
          null,
          "$58 divides the ending balance by the ending week (580 ÷ 10), ignoring the balance the account started with.",
          "$85 divides the starting balance by the starting week (340 ÷ 4), which uses neither change."
        ]
      },
      diff: 3,
      secs: 100
    },

    {
      id: "TMB-032",
      sub: "Measurement and Data",
      type: "mc",
      q: "A rectangular exam room has a perimeter of 46 feet and a length of 14 feet. What is the area of the room, in square feet?",
      choices: ["9", "126", "322", "644"],
      answer: 1,
      rationale: {
        correct: "Perimeter is 2L + 2W, so 46 = 28 + 2W, giving W = 9 ft. Area = L × W = 14 × 9 = 126 square feet.",
        wrong: [
          "9 is the missing width in feet - the first step, not the area.",
          null,
          "322 multiplies the length by half the perimeter (23); half the perimeter is length PLUS width, not the width alone.",
          "644 multiplies the length by the entire perimeter instead of by the width."
        ]
      },
      diff: 3,
      secs: 110
    },

    {
      id: "TMB-033",
      sub: "Measurement and Data",
      type: "mc",
      q: "A circular gauze pad has a diameter of 8 centimeters. Which of the following is the circumference of the pad, in terms of π?",
      choices: ["4π centimeters", "8π centimeters", "16π centimeters", "64π centimeters"],
      answer: 1,
      rationale: {
        correct: "Circumference is π times the diameter: C = π × 8 = 8π centimeters.",
        wrong: [
          "4π uses the radius (4 cm) in place of the diameter in C = πd; with the radius the formula is C = 2πr.",
          null,
          "16π is the AREA of the pad (πr² = π × 16), a square measure rather than the distance around it.",
          "64π squares the diameter instead of using it directly."
        ]
      },
      diff: 2,
      secs: 85
    },

    {
      id: "TMB-034",
      sub: "Measurement and Data",
      type: "mc",
      q: "A cylindrical specimen container has a radius of 3 centimeters and a height of 10 centimeters. What is its volume in cubic centimeters? Use 3.14 for π.",
      choices: ["94.2", "188.4", "282.6", "1,130.4"],
      answer: 2,
      rationale: {
        correct: "Volume of a cylinder = πr²h = 3.14 × 3 × 3 × 10 = 3.14 × 90 = 282.6 cubic centimeters.",
        wrong: [
          "94.2 multiplies π by the radius only once (3.14 × 3 × 10); the radius must be squared.",
          "188.4 computes 2πrh, the lateral surface area of the cylinder, not the volume it holds.",
          null,
          "1,130.4 squares the diameter (6 cm) instead of the radius."
        ]
      },
      diff: 2,
      secs: 95
    },

    {
      id: "TMB-035",
      sub: "Measurement and Data",
      type: "mc",
      q: "A tablet contains 0.25 gram of medication. How many milligrams of medication does the tablet contain?",
      choices: ["0.00025", "25", "250", "2,500"],
      answer: 2,
      rationale: {
        correct: "Milli- means one thousandth, so 1 g = 1,000 mg: 0.25 × 1,000 = 250 mg.",
        wrong: [
          "0.00025 divides by 1,000; converting to a SMALLER unit must produce a LARGER number.",
          "25 shifts the decimal only two places (multiplying by 100).",
          null,
          "2,500 shifts the decimal four places (multiplying by 10,000) instead of three."
        ]
      },
      diff: 1,
      secs: 60
    },

    {
      id: "TMB-036",
      sub: "Measurement and Data",
      type: "mc",
      q: "A container holds 3 quarts of irrigation solution. How many cups of solution does it hold? Use 1 quart = 2 pints and 1 pint = 2 cups.",
      choices: ["0.75", "6", "12", "48"],
      answer: 2,
      rationale: {
        correct: "Chain the two conversions: 3 qt × 2 = 6 pints, and 6 pints × 2 = 12 cups.",
        wrong: [
          "0.75 divides by 4 instead of multiplying; a cup is smaller than a quart, so the count of cups must be larger.",
          "6 converts quarts to pints and stops one step short of cups.",
          null,
          "48 multiplies by 16, the number of cups in a GALLON, rather than the 4 cups in a quart."
        ]
      },
      diff: 2,
      secs: 85
    },

    {
      id: "TMB-037",
      sub: "Measurement and Data",
      type: "fill",
      q: "An infant measures 50 centimeters in length. What is that length in inches? Use 1 inch = 2.54 centimeters. Record your answer rounded to the nearest tenth.",
      answer: { accept: ["19.7", "19.70"] },
      rationale: {
        correct: "An inch is the larger unit, so divide: 50 ÷ 2.54 = 19.685, which rounds to 19.7 inches. Multiplying instead (50 × 2.54 = 127) is the classic wrong-direction error - a length in inches must come out SMALLER than the same length in centimeters."
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMB-038",
      sub: "Measurement and Data",
      type: "mc",
      q: "A patient's temperature is 102.2°F. What is this temperature in degrees Celsius? Use C = (F - 32) ÷ 1.8.",
      choices: ["24.8", "39", "70.2", "126.4"],
      answer: 1,
      rationale: {
        correct: "Subtract first, then divide: 102.2 - 32 = 70.2, and 70.2 ÷ 1.8 = 39°C.",
        wrong: [
          "24.8 divides 102.2 by 1.8 before subtracting the 32; the parentheses require the subtraction first.",
          null,
          "70.2 subtracts the 32 but never divides by 1.8.",
          "126.4 multiplies the difference by 1.8 instead of dividing by it; a Celsius reading is smaller than the matching Fahrenheit reading."
        ]
      },
      diff: 2,
      secs: 95
    }

  ]
};
