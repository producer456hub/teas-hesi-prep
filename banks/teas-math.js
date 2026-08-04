window.BANKS = window.BANKS || {};
window.BANKS["teas-math"] = {
  exam: "teas",
  section: "math",
  questions: [

    // ---------- Numbers and Algebra (21) ----------

    {
      id: "TMA-001",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "Which of the following is 0.85 written as a fraction in lowest terms?",
      choices: ["85/100", "17/20", "17/25", "8/5"],
      answer: 1,
      rationale: {
        correct: "0.85 means 85 hundredths, or 85/100. Dividing numerator and denominator by their common factor 5 gives 17/20.",
        wrong: [
          "85/100 equals 0.85 but is not in lowest terms - numerator and denominator still share the factor 5.",
          null,
          "17/25 reduces the numerator by 5 but the denominator by 4; both must be divided by the same number.",
          "8/5 treats the digits as separate whole numbers; 8/5 equals 1.6, not 0.85."
        ]
      },
      diff: 1,
      secs: 90
    },

    {
      id: "TMA-002",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "What is 3/8 + 1/6?",
      choices: ["13/24", "2/7", "1/6", "5/12"],
      answer: 0,
      rationale: {
        correct: "The least common denominator of 8 and 6 is 24: 3/8 = 9/24 and 1/6 = 4/24, so the sum is 13/24.",
        wrong: [
          null,
          "2/7 adds straight across (3+1 over 8+6); numerators and denominators cannot be added separately.",
          "1/6 (4/24) adds the original numerators over the LCD without first rescaling each numerator.",
          "5/12 (10/24) rescales only 3/8 to 9/24 and then adds the unconverted numerator 1."
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMA-003",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "What is 2 1/2 ÷ 5/6?",
      choices: ["1/3", "1 4/5", "2 1/12", "3"],
      answer: 3,
      rationale: {
        correct: "Convert 2 1/2 to 5/2, then multiply by the reciprocal of 5/6: 5/2 × 6/5 = 30/10 = 3.",
        wrong: [
          "1/3 flips the dividend (2 1/2 became 2/5) instead of flipping the divisor.",
          "1 4/5 converts the mixed number incorrectly to 3/2 before multiplying by 6/5.",
          "2 1/12 multiplies by 5/6 without flipping it; division requires multiplying by the reciprocal.",
          null
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMA-004",
      sub: "Numbers and Algebra",
      type: "ms",
      q: "Which of the following are equivalent to 3/4? Select all that apply.",
      choices: ["0.75", "75%", "9/12", "0.34", "7.5%"],
      answer: [0, 1, 2],
      rationale: {
        correct: "The fraction bar means 3 divided by 4, which is 0.75, and 0.75 equals 75%. The fraction 9/12 reduces to 3/4, so all three name the same value.",
        wrong: [
          null,
          null,
          null,
          "0.34 strings the digits 3 and 4 together as decimal places; 3/4 means 3 divided by 4, which is 0.75.",
          "7.5% misplaces the decimal one position; 0.75 is 75%, not 7.5%."
        ]
      },
      diff: 1,
      secs: 90
    },

    {
      id: "TMA-005",
      sub: "Numbers and Algebra",
      type: "fill",
      q: "A liquid medication is labeled 125 mg per 5 mL. The provider orders a 300 mg dose. How many milliliters should be given? Record your answer as a whole number.",
      answer: { accept: ["12", "12.0"] },
      rationale: {
        correct: "Set up the proportion 125 mg / 5 mL = 300 mg / x mL and cross-multiply: x = (300 × 5) / 125 = 12 mL. Equivalently, the concentration is 25 mg per mL, and 300 / 25 = 12. Dividing 300 by 5 (60) or by 125 without multiplying by 5 (2.4) are the classic setup errors."
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMA-006",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "Simplify: 5 + 12 ÷ (9 - 5) × 2 - 3.",
      choices: ["3.5", "5.5", "8", "13"],
      answer: 2,
      rationale: {
        correct: "Parentheses first (9 - 5 = 4), then multiply and divide left to right (12 ÷ 4 = 3, then 3 × 2 = 6), then add and subtract: 5 + 6 - 3 = 8.",
        wrong: [
          "3.5 performs the multiplication before the division; the two have equal rank and proceed left to right, so 12 ÷ 4 comes first.",
          "5.5 works strictly left to right - the result a four-function calculator gives if the expression is keyed straight through - ignoring the order of operations.",
          null,
          "13 adds 5 + 3 before multiplying by 2; addition must wait until all multiplication and division are done."
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMA-007",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "At 5 a.m. the outdoor temperature was -8°F. By 1 p.m. the temperature had risen 23 degrees. What was the temperature at 1 p.m.?",
      choices: ["-31°F", "-15°F", "15°F", "31°F"],
      answer: 2,
      rationale: {
        correct: "A rise adds to the starting temperature: -8 + 23 = 15°F.",
        wrong: [
          "-31°F subtracts the 23-degree rise instead of adding it.",
          "-15°F adds the values but keeps a negative sign; 23 is larger than 8, so the result is above zero.",
          null,
          "31°F drops the negative sign and adds 8 + 23."
        ]
      },
      diff: 1,
      secs: 90
    },

    {
      id: "TMA-008",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "Which of the following lists 33%, 0.35, 3/8, and 2/5 in order from least to greatest?",
      choices: [
        "33%, 0.35, 3/8, 2/5",
        "0.35, 33%, 3/8, 2/5",
        "33%, 0.35, 2/5, 3/8",
        "2/5, 3/8, 0.35, 33%"
      ],
      answer: 0,
      rationale: {
        correct: "Convert everything to decimals: 33% = 0.33, 0.35 stays 0.35, 3/8 = 0.375, 2/5 = 0.40. Least to greatest is 33%, 0.35, 3/8, 2/5.",
        wrong: [
          null,
          "This order compares 33 with 0.35 without converting the percent; 33% = 0.33, which is LESS than 0.35.",
          "This order assumes 2/5 is smaller than 3/8 because 2 is less than 3; converting shows 2/5 = 0.40 is larger than 3/8 = 0.375.",
          "This is the correct comparison listed in the wrong direction - greatest to least."
        ]
      },
      diff: 3,
      secs: 90
    },

    {
      id: "TMA-009",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "A hospital unit has 60 beds. On Monday night, 85% of the beds were occupied. How many beds were occupied?",
      choices: ["5.1", "9", "51", "70.6"],
      answer: 2,
      rationale: {
        correct: "85% of 60 is 0.85 × 60 = 51 occupied beds.",
        wrong: [
          "5.1 misplaces the decimal, multiplying by 0.085 instead of 0.85.",
          "9 is the number of UNOCCUPIED beds (15% of 60) - the complement of what was asked.",
          null,
          "70.6 divides 60 by 0.85 instead of multiplying."
        ]
      },
      diff: 1,
      secs: 90
    },

    {
      id: "TMA-010",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "Forty percent of the students in a nursing cohort passed a certification practice test on the first attempt. If 34 students passed on the first attempt, how many students are in the cohort?",
      choices: ["13.6", "47.6", "74", "85"],
      answer: 3,
      rationale: {
        correct: "The part (34) is 40% of the whole: 0.40 × n = 34, so n = 34 ÷ 0.40 = 85 students.",
        wrong: [
          "13.6 multiplies 34 by 0.40 instead of dividing - it treats 34 as the whole rather than the part.",
          "47.6 increases 34 by 40%, which answers a different question.",
          "74 adds 40 to 34; a percent is a proportion, not an amount that can be added.",
          null
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMA-011",
      sub: "Numbers and Algebra",
      type: "fill",
      q: "A patient's weight decreased from 180 lb to 153 lb. What was the percent decrease in weight? Record your answer as a number without the percent sign.",
      answer: { accept: ["15", "15.0"] },
      rationale: {
        correct: "Percent change = (change ÷ original) × 100. The change is 180 - 153 = 27, so 27 / 180 = 0.15, which is 15%. The classic errors are dividing by the NEW weight (27 / 153 = 17.6%) instead of the original, and forgetting to multiply by 100 (0.15)."
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMA-012",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "A pair of nursing shoes priced at $90.00 is on sale for 30% off. A 10% sales tax is applied to the sale price. What is the total cost of the shoes?",
      choices: ["$63.00", "$69.30", "$70.00", "$72.00"],
      answer: 1,
      rationale: {
        correct: "Take the discount first: 90 × 0.70 = $63.00. Then apply the tax to the sale price: 63 × 1.10 = $69.30.",
        wrong: [
          "$63.00 is the sale price before the 10% sales tax is added.",
          null,
          "$70.00 treats the percents as dollar amounts (90 - 30 + 10); 30% of $90 is $27, not $30.",
          "$72.00 nets the two percents (30% - 10% = 20% off); the tax is applied to the discounted price, not subtracted from the discount."
        ]
      },
      diff: 3,
      secs: 90
    },

    {
      id: "TMA-013",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "On a map, 1 inch represents 40 miles. Two towns are 2.75 inches apart on the map. What is the actual distance between the towns?",
      choices: ["14.5 miles", "42.75 miles", "80 miles", "110 miles"],
      answer: 3,
      rationale: {
        correct: "Each inch represents 40 miles, so 2.75 inches represents 2.75 × 40 = 110 miles.",
        wrong: [
          "14.5 divides 40 by 2.75 instead of multiplying.",
          "42.75 adds the map distance to the scale factor; a scale multiplies.",
          "80 uses only the whole 2 inches and drops the remaining 0.75 inch.",
          null
        ]
      },
      diff: 1,
      secs: 90
    },

    {
      id: "TMA-014",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "On a medical-surgical floor, the ratio of registered nurses to nursing assistants is 5:3. If 15 registered nurses are on duty, how many nursing assistants are on duty?",
      choices: ["6", "9", "18", "25"],
      answer: 1,
      rationale: {
        correct: "15 RNs is 3 groups of 5 (15 ÷ 5 = 3), so the assistants number 3 × 3 = 9.",
        wrong: [
          "6 is the difference between 15 and 9, not the count of assistants.",
          null,
          "18 adds the ratio number 3 to 15; ratio parts must be scaled, not added.",
          "25 inverts the ratio, computing 15 × 5/3 as though assistants outnumbered RNs."
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMA-015",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "A pharmacy sells the same acetaminophen tablets in four package sizes. Which package is the best buy per tablet?",
      choices: [
        "50 tablets for $4.50",
        "100 tablets for $8.00",
        "24 tablets for $2.64",
        "200 tablets for $17.00"
      ],
      answer: 1,
      rationale: {
        correct: "Divide price by count to get the unit price: $8.00 ÷ 100 = $0.08 per tablet, the lowest of the four.",
        wrong: [
          "$4.50 ÷ 50 = $0.09 per tablet - a penny more per tablet than the 100-count.",
          null,
          "$2.64 ÷ 24 = $0.11 per tablet, the most expensive option.",
          "$17.00 ÷ 200 = $0.085 per tablet; the biggest package is not automatically the cheapest per unit."
        ]
      },
      diff: 3,
      secs: 90
    },

    {
      id: "TMA-016",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "Solve for x: 3(x - 4) = x + 10.",
      choices: ["-1", "5.5", "7", "11"],
      answer: 3,
      rationale: {
        correct: "Distribute: 3x - 12 = x + 10. Subtract x and add 12 to both sides: 2x = 22, so x = 11.",
        wrong: [
          "-1 comes from a sign error, computing 2x = 10 - 12 instead of 10 + 12.",
          "5.5 adds x to the left side (4x = 22) instead of subtracting it.",
          "7 forgets to distribute the 3 across -4, solving 3x - 4 = x + 10.",
          null
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMA-017",
      sub: "Numbers and Algebra",
      type: "fill",
      q: "Solve for x: (3/4)x - 6 = 9. Record your answer as a whole number.",
      answer: { accept: ["20", "20.0"] },
      rationale: {
        correct: "Add 6 to both sides: (3/4)x = 15. Multiply both sides by the reciprocal 4/3: x = 15 × 4/3 = 20. Check: (3/4)(20) - 6 = 15 - 6 = 9. Multiplying by 3/4 instead of 4/3 (11.25) and subtracting 6 instead of adding it (x = 4) are the common slips."
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMA-018",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "Which of the following is the solution to the inequality -4x + 3 > 19?",
      choices: ["x < -4", "x > -4", "x < 4", "x > 4"],
      answer: 0,
      rationale: {
        correct: "Subtract 3 from both sides to get -4x > 16, then divide by -4: x < -4. Dividing an inequality by a negative number reverses the inequality sign.",
        wrong: [
          null,
          "x > -4 divides by -4 without reversing the inequality sign.",
          "x < 4 drops the negative coefficient and then flips anyway; the boundary value is -4, not 4.",
          "x > 4 solves 4x > 16, ignoring the negative sign on the coefficient entirely."
        ]
      },
      diff: 3,
      secs: 90
    },

    {
      id: "TMA-019",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "Which of the following equations represents the statement 'six less than three times a number is 21'?",
      choices: ["3n - 6 = 21", "6 - 3n = 21", "3(n - 6) = 21", "3n + 6 = 21"],
      answer: 0,
      rationale: {
        correct: "'Three times a number' is 3n, and 'six less than' that quantity subtracts 6 from it: 3n - 6 = 21.",
        wrong: [
          null,
          "6 - 3n reverses the subtraction; 'six less than X' means X - 6, not 6 - X.",
          "3(n - 6) subtracts 6 from the number before tripling; the statement subtracts 6 after tripling.",
          "3n + 6 adds instead of subtracts; 'less than' signals subtraction."
        ]
      },
      diff: 1,
      secs: 90
    },

    {
      id: "TMA-020",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "A student earns $1,650.00 per month at a part-time job. Each month she pays $580.00 for rent, $310.50 for food, $142.25 for utilities, and $96.75 for her phone. How much money remains for other expenses?",
      choices: ["$520.50", "$521.50", "$617.25", "$1,129.50"],
      answer: 0,
      rationale: {
        correct: "Total the expenses: 580.00 + 310.50 + 142.25 + 96.75 = $1,129.50. Subtract from income: 1,650.00 - 1,129.50 = $520.50.",
        wrong: [
          null,
          "$521.50 subtracts the whole dollars (1,650 - 1,129 = 521) and then appends the 50 cents instead of subtracting them.",
          "$617.25 omits the $96.75 phone bill from the expense total.",
          "$1,129.50 is the total of the expenses; the question asks what is LEFT after paying them."
        ]
      },
      diff: 3,
      secs: 90
    },

    {
      id: "TMA-021",
      sub: "Numbers and Algebra",
      type: "mc",
      q: "A single-use vial holds 0.8 mL of a medication. A procedure requires 3 mL. How many vials must be opened to supply the full amount?",
      choices: ["2.4", "3", "3.75", "4"],
      answer: 3,
      rationale: {
        correct: "3 ÷ 0.8 = 3.75 vials' worth of medication. A partial vial still has to be opened, so round UP to 4 vials.",
        wrong: [
          "2.4 multiplies 3 by 0.8 instead of dividing the amount needed by the vial size.",
          "3 rounds down, which leaves the procedure 0.6 mL short.",
          "3.75 is the exact quotient, but vials can only be opened in whole numbers.",
          null
        ]
      },
      diff: 2,
      secs: 90
    },

    // ---------- Measurement and Data (17) ----------

    {
      id: "TMA-022",
      sub: "Measurement and Data",
      type: "hotspot",
      q: "The bar graph shows the number of patients seen at a clinic over four days. Click the bar representing the day on which the patient count decreased from the previous day.",
      svg: "<svg viewBox='0 0 400 260' xmlns='http://www.w3.org/2000/svg'><rect class='hs-bg' x='0' y='0' width='400' height='260'/><text class='hs-label' x='200' y='18' text-anchor='middle' font-size='13'>Patients Seen per Day</text><rect class='hs-part' x='53' y='40' width='2' height='182'/><rect class='hs-part' x='53' y='220' width='332' height='2'/><rect class='hs-part' x='48' y='183' width='5' height='2'/><rect class='hs-part' x='48' y='147' width='5' height='2'/><rect class='hs-part' x='48' y='111' width='5' height='2'/><rect class='hs-part' x='48' y='75' width='5' height='2'/><rect class='hs-part' x='48' y='39' width='5' height='2'/><text class='hs-label' x='45' y='224' text-anchor='end' font-size='10'>0</text><text class='hs-label' x='45' y='188' text-anchor='end' font-size='10'>10</text><text class='hs-label' x='45' y='152' text-anchor='end' font-size='10'>20</text><text class='hs-label' x='45' y='116' text-anchor='end' font-size='10'>30</text><text class='hs-label' x='45' y='80' text-anchor='end' font-size='10'>40</text><text class='hs-label' x='45' y='44' text-anchor='end' font-size='10'>50</text><rect class='hs-part' x='75' y='112' width='55' height='108'/><rect class='hs-part' x='150' y='58' width='55' height='162'/><rect class='hs-part' x='225' y='130' width='55' height='90'/><rect class='hs-part' x='300' y='76' width='55' height='144'/><text class='hs-label' x='102' y='106' text-anchor='middle' font-size='11'>30</text><text class='hs-label' x='177' y='52' text-anchor='middle' font-size='11'>45</text><text class='hs-label' x='252' y='124' text-anchor='middle' font-size='11'>25</text><text class='hs-label' x='327' y='70' text-anchor='middle' font-size='11'>40</text><text class='hs-label' x='102' y='238' text-anchor='middle' font-size='11'>Mon</text><text class='hs-label' x='177' y='238' text-anchor='middle' font-size='11'>Tue</text><text class='hs-label' x='252' y='238' text-anchor='middle' font-size='11'>Wed</text><text class='hs-label' x='327' y='238' text-anchor='middle' font-size='11'>Thu</text></svg>",
      regions: [
        { id: "mon", label: "Monday", shape: "rect", x: 70, y: 30, w: 65, h: 196 },
        { id: "tue", label: "Tuesday", shape: "rect", x: 145, y: 30, w: 65, h: 196 },
        { id: "wed", label: "Wednesday", shape: "rect", x: 220, y: 30, w: 65, h: 196 },
        { id: "thu", label: "Thursday", shape: "rect", x: 295, y: 30, w: 65, h: 196 }
      ],
      answer: "wed",
      rationale: {
        correct: "The bar heights read Mon 30, Tue 45, Wed 25, Thu 40. Wednesday is the only day whose count is LOWER than the day before it (45 down to 25). Tuesday rose from 30 to 45, Thursday rose from 25 to 40, and Monday has no previous day shown to compare against."
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMA-023",
      sub: "Measurement and Data",
      type: "mc",
      q: "A clinic recorded flu cases by month: October 18, November 34, December 61, January 47. How many more cases were recorded in December than in October?",
      choices: ["14", "27", "43", "79"],
      answer: 2,
      rationale: {
        correct: "December had 61 cases and October had 18, so the difference is 61 - 18 = 43.",
        wrong: [
          "14 subtracts January (47) from December instead of October.",
          "27 subtracts November (34) from December instead of October.",
          null,
          "79 adds the two months instead of subtracting to find how many more."
        ]
      },
      diff: 1,
      secs: 90
    },

    {
      id: "TMA-024",
      sub: "Measurement and Data",
      type: "mc",
      q: "A circle graph shows how a clinic divides its $2,400 monthly supply budget: gloves 35%, syringes 25%, gauze 20%, masks 20%. How much money is budgeted for gloves?",
      choices: ["$480", "$600", "$840", "$1,560"],
      answer: 2,
      rationale: {
        correct: "Gloves take 35% of the total: 0.35 × 2,400 = $840.",
        wrong: [
          "$480 applies a 20% sector (gauze or masks) instead of the gloves sector.",
          "$600 applies the syringes sector (25%) instead of gloves.",
          null,
          "$1,560 is the remaining 65% of the budget - everything EXCEPT gloves."
        ]
      },
      diff: 1,
      secs: 90
    },

    {
      id: "TMA-025",
      sub: "Measurement and Data",
      type: "mc",
      q: "What is the slope of the line that passes through the points (3, 4) and (7, 16) on the coordinate plane?",
      choices: ["3", "4", "12", "48"],
      answer: 0,
      rationale: {
        correct: "Slope = rise over run = (16 - 4) / (7 - 3) = 12 / 4 = 3.",
        wrong: [
          null,
          "4 is the run (7 - 3) alone - the change in x, not the slope.",
          "12 is the rise (16 - 4) alone; it must still be divided by the run.",
          "48 multiplies the rise by the run instead of dividing rise by run."
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMA-026",
      sub: "Measurement and Data",
      type: "mc",
      q: "An emergency department logged patient wait times: 0-9 minutes, 6 patients; 10-19 minutes, 11 patients; 20-29 minutes, 8 patients; 30-39 minutes, 5 patients. How many patients waited 20 minutes or longer?",
      choices: ["5", "13", "17", "30"],
      answer: 1,
      rationale: {
        correct: "'20 minutes or longer' covers the 20-29 and 30-39 intervals: 8 + 5 = 13 patients.",
        wrong: [
          "5 counts only the 30-39 minute interval and misses the 20-29 interval.",
          null,
          "17 counts the patients who waited UNDER 20 minutes (6 + 11) - the complement of the group asked about.",
          "30 is the total of all four intervals, not just the waits of 20 minutes or more."
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMA-027",
      sub: "Measurement and Data",
      type: "fill",
      q: "A patient's fasting blood glucose readings for five mornings were 92, 88, 105, 96, and 85 mg/dL. What is the mean reading? Round to the nearest tenth.",
      answer: { accept: ["93.2", "93.20"] },
      rationale: {
        correct: "Add the five readings (92 + 88 + 105 + 96 + 85 = 466) and divide by how many there are: 466 ÷ 5 = 93.2 mg/dL. Dividing by 4 instead of 5, or dropping one reading from the sum, are the common slips."
      },
      diff: 1,
      secs: 90
    },

    {
      id: "TMA-028",
      sub: "Measurement and Data",
      type: "mc",
      q: "What is the median of the data set 22, 7, 15, 30, 9, 12?",
      choices: ["12", "13.5", "15.8", "22.5"],
      answer: 1,
      rationale: {
        correct: "Sort first: 7, 9, 12, 15, 22, 30. With six values, the median is the mean of the middle two: (12 + 15) ÷ 2 = 13.5.",
        wrong: [
          "12 takes the lower middle value alone instead of averaging the two middle values.",
          null,
          "15.8 is approximately the mean of the data set (95 ÷ 6), not the median.",
          "22.5 averages the middle two values of the UNSORTED list (15 and 30); the data must be ordered first."
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMA-029",
      sub: "Measurement and Data",
      type: "mc",
      q: "A student scored 78, 85, and 91 on three exams. What must she score on the fourth exam to have a mean score of exactly 85 for all four exams?",
      choices: ["1", "84.7", "85", "86"],
      answer: 3,
      rationale: {
        correct: "Four scores with a mean of 85 must total 4 × 85 = 340. The first three total 254, so the fourth must be 340 - 254 = 86.",
        wrong: [
          "1 keeps 3 in the denominator, solving (254 + x) ÷ 3 = 85 as if the fourth exam did not count.",
          "84.7 is the mean of the first three exams, not the score needed on the fourth.",
          "85 is not enough: the current mean (84.7) is below the target, so the fourth score must sit above 85 to pull the average up.",
          null
        ]
      },
      diff: 3,
      secs: 90
    },

    {
      id: "TMA-030",
      sub: "Measurement and Data",
      type: "mc",
      q: "A home-health nurse made the following numbers of visits on seven days: 5, 9, 4, 9, 7, 12, 9. What is the range of the data set?",
      choices: ["8", "9", "12", "16"],
      answer: 0,
      rationale: {
        correct: "Range measures spread: maximum minus minimum, or 12 - 4 = 8.",
        wrong: [
          null,
          "9 is the mode (and also the median) of the data set, not the range.",
          "12 is the maximum value alone; the minimum must be subtracted from it.",
          "16 adds the maximum and minimum instead of subtracting them."
        ]
      },
      diff: 1,
      secs: 90
    },

    {
      id: "TMA-031",
      sub: "Measurement and Data",
      type: "mc",
      q: "A rectangular garden has an area of 180 square feet and a width of 12 feet. How many feet of fencing are needed to enclose the garden?",
      choices: ["15 feet", "27 feet", "54 feet", "192 feet"],
      answer: 2,
      rationale: {
        correct: "First find the length: 180 ÷ 12 = 15 ft. Fencing is the perimeter: 2(15) + 2(12) = 30 + 24 = 54 ft.",
        wrong: [
          "15 is the missing length - the first step, not the fencing total.",
          "27 is length plus width; the perimeter needs two of each side, 2L + 2W.",
          null,
          "192 adds the area to the width; square feet and feet measure different things and cannot be added."
        ]
      },
      diff: 3,
      secs: 90
    },

    {
      id: "TMA-032",
      sub: "Measurement and Data",
      type: "mc",
      q: "A circular therapy pool has a diameter of 10 feet. Which of the following is the area of the pool's surface, in terms of π?",
      choices: ["5π square feet", "10π square feet", "25π square feet", "100π square feet"],
      answer: 2,
      rationale: {
        correct: "The radius is half the diameter: r = 5 ft. Area = π × r × r = π × 25 = 25π square feet.",
        wrong: [
          "5π multiplies π by the radius only once; area uses the radius squared.",
          "10π is the circumference (π × diameter), not the area.",
          null,
          "100π squares the diameter instead of the radius."
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMA-033",
      sub: "Measurement and Data",
      type: "mc",
      q: "A rectangular storage bin measures 20 inches long, 10 inches wide, and 12 inches high. What is the volume of the bin in cubic inches?",
      choices: ["42", "200", "1,120", "2,400"],
      answer: 3,
      rationale: {
        correct: "Volume of a rectangular prism = length × width × height = 20 × 10 × 12 = 2,400 cubic inches.",
        wrong: [
          "42 adds the three dimensions instead of multiplying them.",
          "200 multiplies only length and width - the area of the base, not the volume.",
          "1,120 is the surface area, 2(200 + 240 + 120), not the volume.",
          null
        ]
      },
      diff: 1,
      secs: 90
    },

    {
      id: "TMA-034",
      sub: "Measurement and Data",
      type: "mc",
      q: "A newborn measures 20 inches in length. What is the newborn's length in centimeters? Use 1 in = 2.54 cm.",
      choices: ["508", "50.8", "22.54", "7.9"],
      answer: 1,
      rationale: {
        correct: "Multiply by the conversion factor: 20 × 2.54 = 50.8 cm. Centimeters are smaller than inches, so the number must come out larger.",
        wrong: [
          "508 misplaces the decimal point one position when multiplying.",
          null,
          "22.54 adds the conversion factor to 20 instead of multiplying by it.",
          "7.9 divides by 2.54 - the conversion factor upside down - making the length shrink when expressed in a smaller unit."
        ]
      },
      diff: 1,
      secs: 90
    },

    {
      id: "TMA-035",
      sub: "Measurement and Data",
      type: "fill",
      q: "A patient weighs 132 pounds. What is the patient's weight in kilograms? Use 1 kg = 2.2 lb. Record your answer as a whole number.",
      answer: { accept: ["60", "60.0"] },
      rationale: {
        correct: "A kilogram is the larger unit, so divide: 132 ÷ 2.2 = 60 kg. Check: 60 × 2.2 = 132. Multiplying instead (132 × 2.2 = 290.4) is the classic wrong-direction error - a weight in kilograms must come out SMALLER than the same weight in pounds."
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMA-036",
      sub: "Measurement and Data",
      type: "mc",
      q: "A patient's intake log shows 2 1/2 cups of juice consumed during a shift. How many fluid ounces is this? Use 1 cup = 8 fl oz.",
      choices: ["5", "10.5", "16", "20"],
      answer: 3,
      rationale: {
        correct: "Multiply cups by ounces per cup: 2.5 × 8 = 20 fluid ounces.",
        wrong: [
          "5 multiplies by 2 - the cups-per-pint factor - instead of by the 8 fluid ounces per cup.",
          "10.5 adds the conversion factor to 2.5 instead of multiplying.",
          "16 converts only the 2 whole cups and drops the half cup.",
          null
        ]
      },
      diff: 1,
      secs: 90
    },

    {
      id: "TMA-037",
      sub: "Measurement and Data",
      type: "mc",
      q: "A patient's temperature is 39.5°C. What is this temperature in degrees Fahrenheit? Use F = 1.8C + 32.",
      choices: ["71.1°F", "71.5°F", "103.1°F", "128.7°F"],
      answer: 2,
      rationale: {
        correct: "Multiply first, then add: 1.8 × 39.5 = 71.1, and 71.1 + 32 = 103.1°F.",
        wrong: [
          "71.1°F stops after multiplying by 1.8 and never adds the 32.",
          "71.5°F adds 32 to the Celsius reading without multiplying by 1.8 first.",
          null,
          "128.7°F adds the 32 BEFORE multiplying; the formula multiplies by 1.8 first."
        ]
      },
      diff: 2,
      secs: 90
    },

    {
      id: "TMA-038",
      sub: "Measurement and Data",
      type: "mc",
      q: "An IV pump delivers fluid at a rate of 125 mL per hour. How many hours will it take to infuse a full 1-liter bag?",
      choices: ["80", "8", "0.8", "0.008"],
      answer: 1,
      rationale: {
        correct: "Convert the bag to milliliters: 1 L = 1,000 mL. Time = volume ÷ rate = 1,000 ÷ 125 = 8 hours.",
        wrong: [
          "80 treats 1 L as 10,000 mL - a four-place decimal shift.",
          null,
          "0.8 treats 1 L as 100 mL - a two-place decimal shift.",
          "0.008 divides 1 by 125 without converting liters to milliliters at all."
        ]
      },
      diff: 2,
      secs: 90
    }

  ]
};
