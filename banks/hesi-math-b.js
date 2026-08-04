window.BANKS = window.BANKS || {};
window.BANKS["hesi-math-b"] = {
  exam: "hesi",
  section: "math",
  form: "B",
  questions: [

    /* ============ FRACTIONS (8) ============ */

    {
      id: "HMB-001",
      sub: "fractions",
      type: "mc",
      q: "What is 2/5 + 1/4?",
      choices: ["3/9", "13/20", "1/10", "9/20"],
      answer: 1,
      rationale: {
        correct: "The LCD of 5 and 4 is 20: 2/5 = 8/20 and 1/4 = 5/20, so 8/20 + 5/20 = 13/20.",
        wrong: [
          "3/9 adds straight across (2+1 over 5+4) — numerators and denominators can never both be added.",
          null,
          "1/10 is the product 2/5 x 1/4 = 2/20 reduced, not the sum.",
          "9/20 rescales 2/5 to 8/20 but leaves 1/4 as 1/20 — both fractions must be rewritten over the LCD."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-002",
      sub: "fractions",
      type: "mc",
      q: "What is 5 1/3 - 2 3/4?",
      choices: ["2 7/12", "3 5/12", "2 5/12", "3 7/12"],
      answer: 0,
      rationale: {
        correct: "With LCD 12: 5 4/12 - 2 9/12. Borrow one whole from the 5 to get 4 16/12, then 16/12 - 9/12 = 7/12 and 4 - 2 = 2, giving 2 7/12.",
        wrong: [
          null,
          "3 5/12 subtracts the smaller fraction from the larger regardless of order (9/12 - 4/12) and never borrows.",
          "2 5/12 borrows only 10/12 instead of 12/12 — one whole is twelve twelfths, not ten.",
          "3 7/12 borrows correctly but forgets to drop the whole number from 5 to 4 after the borrow."
        ]
      },
      diff: 3,
      secs: 75
    },
    {
      id: "HMB-003",
      sub: "fractions",
      type: "mc",
      q: "What is the product of 3/4 and 8/9?",
      choices: ["27/32", "11/13", "2/3", "59/36"],
      answer: 2,
      rationale: {
        correct: "Multiply straight across: (3x8)/(4x9) = 24/36, which reduces to 2/3.",
        wrong: [
          "27/32 is the quotient 3/4 divided by 8/9 (3/4 x 9/8) — the second fraction was flipped as if dividing.",
          "11/13 adds numerators and adds denominators, an operation that is never valid.",
          null,
          "59/36 is the sum 3/4 + 8/9 (27/36 + 32/36), not the product."
        ]
      },
      diff: 1,
      secs: 40
    },
    {
      id: "HMB-004",
      sub: "fractions",
      type: "mc",
      q: "What is 4 2/3 divided by 1 1/6?",
      choices: ["5 4/9", "1/4", "5 5/6", "4"],
      answer: 3,
      rationale: {
        correct: "Convert to improper fractions and multiply by the reciprocal: 14/3 divided by 7/6 = 14/3 x 6/7 = 84/21 = 4.",
        wrong: [
          "5 4/9 multiplies 14/3 x 7/6 = 98/18 — the divisor was never inverted.",
          "1/4 flips the wrong fraction (3/14 x 7/6) — only the divisor is turned upside down.",
          "5 5/6 is the sum 4 2/3 + 1 1/6, not the quotient.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-005",
      sub: "fractions",
      type: "mc",
      q: "Which of the following expresses 30/48 in simplest form?",
      choices: ["15/24", "5/8", "10/16", "8/5"],
      answer: 1,
      rationale: {
        correct: "The greatest common factor of 30 and 48 is 6, and 30/6 over 48/6 gives 5/8.",
        wrong: [
          "15/24 is equal in value but was divided only by 2 — it still reduces further to 5/8.",
          null,
          "10/16 is equal in value but was divided only by 3 — it is not yet in lowest terms.",
          "8/5 is the fraction inverted; 30/48 is less than 1, so its simplest form cannot exceed 1."
        ]
      },
      diff: 1,
      secs: 40
    },
    {
      id: "HMB-006",
      sub: "fractions",
      type: "mc",
      q: "Which of the following fractions has the least value?",
      choices: ["5/12", "2/5", "4/9", "3/8"],
      answer: 3,
      rationale: {
        correct: "Convert each to a decimal: 3/8 = 0.375, which is smaller than 2/5 = 0.400, 5/12 = 0.417, and 4/9 = 0.444.",
        wrong: [
          "5/12 = 0.417 — the largest denominator does not make the smallest fraction; the numerator matters too.",
          "2/5 = 0.400 — second smallest, chosen when 3/8 is misread as 0.38 or larger.",
          "4/9 = 0.444 is actually the greatest value in the set, not the least.",
          null
        ]
      },
      diff: 3,
      secs: 75
    },
    {
      id: "HMB-007",
      sub: "fractions",
      type: "mc",
      q: "Express 9/25 as a percent.",
      choices: ["3.6%", "18%", "36%", "90%"],
      answer: 2,
      rationale: {
        correct: "9 divided by 25 = 0.36, and 0.36 x 100 = 36%.",
        wrong: [
          "3.6% moves the decimal only one place — a decimal becomes a percent by moving it two places.",
          "18% doubles the numerator (9 x 2); reaching a denominator of 100 from 25 requires scaling by 4, not 2.",
          null,
          "90% treats the fraction as 9/10 — the denominator is 25, so each 1/25 is 4%, not 10%."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-008",
      sub: "fractions",
      type: "fill",
      q: "Convert 3/16 to a decimal. Enter your answer as a decimal with a leading zero (for example, 0.125).",
      answer: { accept: ["0.1875", "0.18750"] },
      rationale: {
        correct: "Divide the numerator by the denominator: 3 divided by 16 = 0.1875. Two common slips are 0.19 (rounding when no rounding was asked for) and 5.333 (dividing 16 by 3 — the numerator always goes inside the division)."
      },
      diff: 1,
      secs: 40
    },

    /* ============ DECIMALS-PERCENTS (8) ============ */

    {
      id: "HMB-009",
      sub: "decimals-percents",
      type: "mc",
      q: "What is 45% of 60?",
      choices: ["2.7", "15", "27", "270"],
      answer: 2,
      rationale: {
        correct: "Convert the percent to a decimal and multiply: 0.45 x 60 = 27.",
        wrong: [
          "2.7 uses 0.045 — the decimal was moved three places instead of two.",
          "15 subtracts 45 from 60; the word 'of' signals multiplication, not subtraction.",
          null,
          "270 uses 4.5 — moving the decimal only one place makes the answer ten times too large."
        ]
      },
      diff: 1,
      secs: 40
    },
    {
      id: "HMB-010",
      sub: "decimals-percents",
      type: "mc",
      q: "A patient's recorded daily fluid intake rose from 1,200 mL to 1,500 mL. What is the percent increase?",
      choices: ["25%", "20%", "2.5%", "80%"],
      answer: 0,
      rationale: {
        correct: "Percent increase = (new - old) / old x 100: (1,500 - 1,200) / 1,200 = 300/1,200 = 0.25 = 25%.",
        wrong: [
          null,
          "20% divides the change by the NEW volume (300/1,500); percent change always divides by the original value.",
          "2.5% is a misplaced decimal — 300/1,200 = 0.25, which is 25%, not 2.5%.",
          "80% is the old intake as a fraction of the new (1,200/1,500), not the size of the increase."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-011",
      sub: "decimals-percents",
      type: "mc",
      q: "A daily medication dose is reduced from 250 mg to 200 mg. By what percent was the dose decreased?",
      choices: ["25%", "80%", "50%", "20%"],
      answer: 3,
      rationale: {
        correct: "Percent decrease = (old - new) / old x 100: (250 - 200) / 250 = 50/250 = 0.20 = 20%.",
        wrong: [
          "25% divides the change by the new dose (50/200) instead of by the original 250.",
          "80% is the portion of the dose that REMAINS (200/250), not the portion removed.",
          "50% reports the raw 50-mg difference as a percent without dividing by the original dose.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-012",
      sub: "decimals-percents",
      type: "mc",
      q: "A nurse has given 96 mg of a drug, which is 80% of the total dose ordered for the day. What is the total ordered dose?",
      choices: ["76.8 mg", "120 mg", "176 mg", "12 mg"],
      answer: 1,
      rationale: {
        correct: "Part divided by percent gives the whole: 96 / 0.80 = 120 mg. Check: 0.80 x 120 = 96.",
        wrong: [
          "76.8 mg multiplies 96 x 0.80 — finding the whole from a part requires dividing by the percent, which must make the number larger.",
          null,
          "176 mg adds 96 + 80, mixing a dose in milligrams with a percent; the two cannot be added.",
          "12 mg divides by 8 instead of 0.8 — a one-place decimal slip, and the whole can never be smaller than the part."
        ]
      },
      diff: 3,
      secs: 70
    },
    {
      id: "HMB-013",
      sub: "decimals-percents",
      type: "mc",
      q: "What is the product of 0.6 and 0.07?",
      choices: ["0.42", "0.0042", "0.67", "0.042"],
      answer: 3,
      rationale: {
        correct: "6 x 7 = 42, and the two factors carry three decimal places in total (one plus two), so the product is 0.042.",
        wrong: [
          "0.42 keeps only two decimal places; tenths times hundredths gives thousandths.",
          "0.0042 places four decimal places when the factors carry only three.",
          "0.67 is the sum 0.6 + 0.07, not the product.",
          null
        ]
      },
      diff: 1,
      secs: 40
    },
    {
      id: "HMB-014",
      sub: "decimals-percents",
      type: "mc",
      q: "A dose calculation yields 6.752 mL. Rounded to the nearest tenth, how many milliliters is this?",
      choices: ["6.8 mL", "6.7 mL", "6.75 mL", "7 mL"],
      answer: 0,
      rationale: {
        correct: "The digit in the hundredths place is 5, which is 5 or more, so the tenths digit rounds up from 7 to 8: 6.8 mL.",
        wrong: [
          null,
          "6.7 mL simply drops the extra digits instead of rounding; a hundredths digit of 5 rounds the tenths place up.",
          "6.75 mL is rounded to the nearest hundredth, not the nearest tenth.",
          "7 mL is rounded to the nearest whole number, discarding a clinically meaningful 0.2 mL."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-015",
      sub: "decimals-percents",
      type: "mc",
      q: "A uniform set is priced at $90.00 and marked 30% off, and a student coupon then takes an additional 20% off the sale price. What is the final price?",
      choices: ["$63.00", "$72.00", "$50.40", "$45.00"],
      answer: 2,
      rationale: {
        correct: "Apply the discounts in sequence: 90 x 0.70 = $63.00, then 63 x 0.80 = $50.40.",
        wrong: [
          "$63.00 applies only the 30% markdown and stops before the coupon.",
          "$72.00 applies only the 20% coupon and skips the 30% markdown.",
          null,
          "$45.00 adds the two discounts into a single 50% cut (90 x 0.50); successive discounts multiply, because the 20% acts on the already-reduced $63."
        ]
      },
      diff: 3,
      secs: 80
    },
    {
      id: "HMB-016",
      sub: "decimals-percents",
      type: "fill",
      q: "What is 12.5% of 480? Enter a whole number.",
      answer: { accept: ["60"] },
      rationale: {
        correct: "Convert 12.5% to the decimal 0.125 and multiply: 0.125 x 480 = 60. The classic slip is using 1.25 (which gives 600) — a percent that already contains a decimal point still moves exactly two places."
      },
      diff: 2,
      secs: 55
    },

    /* ============ RATIO-PROPORTION (8) ============ */

    {
      id: "HMB-017",
      sub: "ratio-proportion",
      type: "mc",
      q: "Solve for x: 4/9 = x/54",
      choices: ["121.5", "6", "24", "216"],
      answer: 2,
      rationale: {
        correct: "Cross-multiply: 9x = 4 x 54 = 216, so x = 216/9 = 24. Check: 24/54 reduces to 4/9.",
        wrong: [
          "121.5 inverts the proportion (9 x 54 / 4), solving 9/4 = x/54 instead.",
          "6 is only the scale factor (54 is 6 times 9); it still must be multiplied by the 4 on top.",
          null,
          "216 is the cross-product 4 x 54 left undivided; the final step divides by 9."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HMB-018",
      sub: "ratio-proportion",
      type: "mc",
      q: "A sanitizing solution is mixed using 5 milliliters of concentrate for every 8 liters of water. How many milliliters of concentrate are needed for 20 liters of water?",
      choices: ["12.5 mL", "32 mL", "100 mL", "2 mL"],
      answer: 0,
      rationale: {
        correct: "Set up 5/8 = x/20 and cross-multiply: x = (5 x 20) / 8 = 100/8 = 12.5 mL.",
        wrong: [
          null,
          "32 mL inverts the ratio (8 x 20 / 5), scaling water per concentrate instead of concentrate per water.",
          "100 mL multiplies 5 x 20 but never divides by the 8 liters in the base ratio.",
          "2 mL pairs the terms wrong (5 x 8 / 20), shrinking the amount when more water requires more concentrate."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-019",
      sub: "ratio-proportion",
      type: "mc",
      q: "A box of 24 disposable syringes costs $10.08. What is the cost per syringe?",
      choices: ["$2.38", "$0.42", "$4.20", "$241.92"],
      answer: 1,
      rationale: {
        correct: "Unit rate = total cost divided by number of units: 10.08 / 24 = $0.42 per syringe.",
        wrong: [
          "$2.38 divides 24 by 10.08 — that is syringes per dollar, the inverted rate.",
          null,
          "$4.20 is a misplaced decimal (10.08 / 2.4); dividing by 24 must make the number much smaller than $1.",
          "$241.92 multiplies 10.08 x 24, the price of two dozen boxes rather than one syringe."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-020",
      sub: "ratio-proportion",
      type: "mc",
      q: "A clinic staffs 3 medical assistants for every 8 exam rooms. If 40 exam rooms are in use, how many medical assistants are needed?",
      choices: ["106.7", "5", "120", "15"],
      answer: 3,
      rationale: {
        correct: "3/8 = x/40; cross-multiply: x = (3 x 40) / 8 = 120/8 = 15 medical assistants.",
        wrong: [
          "106.7 inverts the proportion (8 x 40 / 3) — more staff than rooms contradicts the 3-to-8 ratio.",
          "5 is only the scale factor (40 / 8); it still must be multiplied by the 3 assistants in the ratio.",
          "120 multiplies 3 x 40 but never divides by the 8 rooms in the base ratio.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-021",
      sub: "ratio-proportion",
      type: "mc",
      q: "A disinfectant is mixed as 2 parts concentrate to 5 parts water. How many milliliters of concentrate are needed to prepare 630 mL of solution?",
      choices: ["252 mL", "450 mL", "180 mL", "90 mL"],
      answer: 2,
      rationale: {
        correct: "2 parts concentrate + 5 parts water = 7 parts total, so one part is 630/7 = 90 mL, and the concentrate is 2 parts = 180 mL.",
        wrong: [
          "252 mL divides 630 by the 5 WATER parts (126) and doubles it; the denominator must be the 7 total parts.",
          "450 mL is the water portion (5 parts x 90), not the concentrate.",
          null,
          "90 mL is a single part; the concentrate is 2 of the 7 parts, so one part must still be doubled."
        ]
      },
      diff: 3,
      secs: 75
    },
    {
      id: "HMB-022",
      sub: "ratio-proportion",
      type: "mc",
      q: "An oral suspension contains 80 mg of drug in every 2 mL. How many milligrams are in 7 mL?",
      choices: ["40 mg", "280 mg", "560 mg", "22.9 mg"],
      answer: 1,
      rationale: {
        correct: "80 mg / 2 mL = 40 mg per mL, and 40 x 7 = 280 mg. (Proportion: 80/2 = x/7.)",
        wrong: [
          "40 mg is the strength of ONE milliliter; the question asks about 7 mL.",
          null,
          "560 mg multiplies 80 x 7 without dividing by the 2-mL base volume.",
          "22.9 mg pairs the terms wrong (80 x 2 / 7, treating 7 mL as the base); scaling up from 2 mL to 7 mL must give MORE than 80 mg, not less."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-023",
      sub: "ratio-proportion",
      type: "mc",
      q: "Solve for x: 15 : 25 :: 42 : x",
      choices: ["70", "25.2", "52", "84"],
      answer: 0,
      rationale: {
        correct: "15/25 = 42/x; cross-multiply: 15x = 25 x 42 = 1,050, so x = 1,050/15 = 70.",
        wrong: [
          null,
          "25.2 inverts the proportion (15 x 42 / 25), solving 25/15 = 42/x instead.",
          "52 uses the additive difference (25 is 10 more than 15, so 42 + 10) — proportions scale by multiplying, not by adding.",
          "84 rounds the scale factor 25/15 = 1.67 up to 2 and doubles 42; the exact factor must be kept."
        ]
      },
      diff: 3,
      secs: 70
    },
    {
      id: "HMB-024",
      sub: "ratio-proportion",
      type: "fill",
      q: "Solve for x: x/18 = 20/24. Enter a whole number.",
      answer: { accept: ["15"] },
      rationale: {
        correct: "Cross-multiply: 24x = 18 x 20 = 360, so x = 360/24 = 15. Check: 15/18 = 0.833 and 20/24 = 0.833. The common error is multiplying 18 x 24 and dividing by 20 (giving 21.6) — x pairs diagonally with 24, not with 18."
      },
      diff: 2,
      secs: 55
    },

    /* ============ CONVERSIONS (9) ============ */

    {
      id: "HMB-025",
      sub: "conversions",
      type: "mc",
      q: "A child is to receive 4 teaspoons of an oral suspension. How many milliliters is this?",
      choices: ["12 mL", "20 mL", "60 mL", "0.8 mL"],
      answer: 1,
      rationale: {
        correct: "1 teaspoon = 5 mL, so 4 tsp x 5 = 20 mL.",
        wrong: [
          "12 mL uses 3 mL per teaspoon — 3 is the number of teaspoons in a tablespoon, not the milliliters in a teaspoon.",
          null,
          "60 mL uses the TABLESPOON factor (1 tbsp = 15 mL); a teaspoon is only one-third that size.",
          "0.8 mL divides 4 by 5 — converting to the smaller unit (mL) requires multiplying."
        ]
      },
      diff: 1,
      secs: 35
    },
    {
      id: "HMB-026",
      sub: "conversions",
      type: "mc",
      q: "A patient drank 180 mL of broth. How many fluid ounces should the nurse record?",
      choices: ["6 fluid ounces", "12 fluid ounces", "0.75 fluid ounces", "5,400 fluid ounces"],
      answer: 0,
      rationale: {
        correct: "1 fluid ounce = 30 mL, and milliliters convert to the larger ounce by dividing: 180 / 30 = 6 fl oz.",
        wrong: [
          null,
          "12 fluid ounces divides by 15, the TABLESPOON factor; a fluid ounce is 30 mL, or 2 tablespoons.",
          "0.75 fluid ounces divides by 240, the factor for a CUP (8 fl oz), not for a single fluid ounce.",
          "5,400 fluid ounces multiplies by 30 — converting to a larger unit must make the number smaller."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-027",
      sub: "conversions",
      type: "mc",
      q: "An order reads 45 mL of a liquid antacid. How many tablespoons should the patient measure?",
      choices: ["9 tablespoons", "1.5 tablespoons", "675 tablespoons", "3 tablespoons"],
      answer: 3,
      rationale: {
        correct: "1 tablespoon = 15 mL (which is also 3 teaspoons), so 45 / 15 = 3 tablespoons. Equivalently, 45 mL is 9 teaspoons, and 9 teaspoons divided by 3 gives 3 tablespoons.",
        wrong: [
          "9 tablespoons divides by 5, the TEASPOON factor; 9 is the number of teaspoons, not tablespoons.",
          "1.5 tablespoons divides by 30, the FLUID-OUNCE factor; 45 mL is 1.5 fluid ounces but 3 tablespoons.",
          "675 tablespoons multiplies by 15 — converting to a larger unit must shrink the number.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-028",
      sub: "conversions",
      type: "mc",
      q: "A patient drank one and a half cups of broth. How many milliliters of intake should be recorded?",
      choices: ["180 mL", "45 mL", "360 mL", "720 mL"],
      answer: 2,
      rationale: {
        correct: "1 cup = 8 fluid ounces = 240 mL, so 1.5 x 240 = 360 mL.",
        wrong: [
          "180 mL uses 120 mL per cup — half the true value; a cup is 240 mL, not 120 mL.",
          "45 mL uses 30 mL per cup, which is the factor for a single FLUID OUNCE; a cup holds 8 of them.",
          null,
          "720 mL uses 480 mL per cup, which is the factor for a PINT (2 cups)."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-029",
      sub: "conversions",
      type: "mc",
      q: "A bowel-prep order calls for the patient to drink 2 quarts of solution. Approximately how many milliliters is this?",
      choices: ["500 mL", "200 mL", "20,000 mL", "2,000 mL"],
      answer: 3,
      rationale: {
        correct: "1 quart = 2 pints = 4 cups, which is approximately 1 liter, and 1 L = 1,000 mL; so 2 quarts is about 2,000 mL.",
        wrong: [
          "500 mL treats a quart as 250 mL, which is roughly one CUP, not a quart.",
          "200 mL multiplies by 100 instead of 1,000 — the liter-to-milliliter step is three decimal places.",
          "20,000 mL multiplies by 10,000, one decimal place too many.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-030",
      sub: "conversions",
      type: "mc",
      q: "A tablet is labeled 0.25 mg. How many micrograms is this?",
      choices: ["250 mcg", "0.00025 mcg", "25 mcg", "2,500 mcg"],
      answer: 0,
      rationale: {
        correct: "1 mg = 1,000 mcg, and milligrams convert to the smaller microgram by multiplying: 0.25 x 1,000 = 250 mcg.",
        wrong: [
          null,
          "0.00025 mcg divides by 1,000 — converting to a SMALLER unit must make the number larger.",
          "25 mcg multiplies by only 100; the mg-to-mcg ladder is a full three decimal places.",
          "2,500 mcg multiplies by 10,000 — one decimal place too many, a tenfold error on a label check."
        ]
      },
      diff: 1,
      secs: 40
    },
    {
      id: "HMB-031",
      sub: "conversions",
      type: "mc",
      q: "A wound dressing weighs 2 ounces. What is its mass in grams?",
      choices: ["32 g", "56.7 g", "0.07 g", "4.4 g"],
      answer: 1,
      rationale: {
        correct: "1 ounce is approximately 28.35 g, so 2 x 28.35 = 56.7 g.",
        wrong: [
          "32 g uses 16 g per ounce — 16 is the number of OUNCES in a pound, not the grams in an ounce.",
          null,
          "0.07 g divides 2 by 28.35 — a gram is smaller than an ounce, so the gram count must be larger.",
          "4.4 g uses 2.2, which is the POUNDS-per-kilogram factor borrowed from the wrong conversion pair."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-032",
      sub: "conversions",
      type: "fill",
      q: "A laceration measures 8.89 centimeters. How many inches long is it? Round to the nearest tenth (for example, 4.5).",
      answer: { accept: ["3.5", "3.50"] },
      rationale: {
        correct: "1 inch = 2.54 cm, and centimeters convert to the larger inch by dividing: 8.89 / 2.54 = 3.5 inches. Multiplying instead (8.89 x 2.54 = 22.6) is the wrong-direction error — an inch is bigger than a centimeter, so the inch count must be smaller."
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-033",
      sub: "conversions",
      type: "mc",
      q: "A patient's temperature is 101.3 degrees Fahrenheit. Using the formula C = (F - 32) x 5/9, what is the temperature in degrees Celsius?",
      choices: ["69.3", "124.7", "38.5", "24.3"],
      answer: 2,
      rationale: {
        correct: "Subtract first, then multiply: 101.3 - 32 = 69.3, and 69.3 x 5/9 = 38.5 degrees Celsius.",
        wrong: [
          "69.3 stops after subtracting 32 and never multiplies by 5/9.",
          "124.7 multiplies by 9/5 instead of 5/9; 9/5 belongs to the reverse formula, F = (1.8 x C) + 32.",
          null,
          "24.3 multiplies by 5/9 BEFORE subtracting 32 (101.3 x 5/9 = 56.3, then - 32) — the subtraction inside the parentheses comes first."
        ]
      },
      diff: 3,
      secs: 75
    },

    /* ============ MILITARY TIME (3) ============ */

    {
      id: "HMB-034",
      sub: "military time",
      type: "mc",
      q: "A dressing change is charted at 1750. What time is this on a standard 12-hour clock?",
      choices: ["5:50 AM", "7:50 PM", "5:50 PM", "4:50 PM"],
      answer: 2,
      rationale: {
        correct: "For military hours of 1300 or later, subtract 12 from the hour: 17 - 12 = 5, so 1750 = 5:50 PM.",
        wrong: [
          "5:50 AM subtracts correctly but keeps AM — hours of 1300 and later are always afternoon or evening.",
          "7:50 PM subtracts only 10 from the hour instead of 12.",
          null,
          "4:50 PM subtracts 13 — an off-by-one slip; exactly 12 is removed."
        ]
      },
      diff: 1,
      secs: 35
    },
    {
      id: "HMB-035",
      sub: "military time",
      type: "mc",
      q: "A patient's surgery is scheduled for 1:20 PM. How is this time written on the 24-hour (military) clock?",
      choices: ["0120", "1320", "1120", "1420"],
      answer: 1,
      rationale: {
        correct: "For PM times other than 12 PM, add 12 to the hour: 1 + 12 = 13, so 1:20 PM = 1320.",
        wrong: [
          "0120 is 1:20 AM — the middle-of-the-night form; PM requires adding 12.",
          null,
          "1120 adds only 10 to the hour; 1120 is 11:20 AM, still morning.",
          "1420 adds 13 — an off-by-one slip; 1420 is 2:20 PM."
        ]
      },
      diff: 1,
      secs: 35
    },
    {
      id: "HMB-036",
      sub: "military time",
      type: "mc",
      q: "A nurse hangs an IV at 2330 that will infuse for 6 hours and 45 minutes. In military time, when will the infusion finish?",
      choices: ["0530", "0715", "3015", "0615"],
      answer: 3,
      rationale: {
        correct: "From 2330, 30 minutes reaches midnight (0000); the remaining 6 hours 15 minutes of the interval lands at 0615.",
        wrong: [
          "0530 adds the 6 hours but drops the extra 45 minutes.",
          "0715 adds 7 hours 45 minutes instead of 6 hours 45 minutes.",
          "3015 adds 6:45 on paper (23:30 + 6:45 = 30:15) but never wraps at 2400 — the clock restarts at 0000 at midnight.",
          null
        ]
      },
      diff: 3,
      secs: 75
    },

    /* ============ ROMAN NUMERALS (3) ============ */

    {
      id: "HMB-037",
      sub: "roman numerals",
      type: "mc",
      q: "A prescription is written for gr XXIX of a medication. How many grains is this?",
      choices: ["31", "29", "39", "30"],
      answer: 1,
      rationale: {
        correct: "XX = 20 and IX = 9 (I placed before X subtracts), so XXIX = 20 + 9 = 29 grains.",
        wrong: [
          "31 adds every symbol left to right (10 + 10 + 1 + 10), ignoring that I before X subtracts.",
          null,
          "39 counts the X inside the subtractive IX pair as a separate ten, reading the numeral as if it were XXXIX.",
          "30 drops the I entirely and reads only XXX."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-038",
      sub: "roman numerals",
      type: "mc",
      q: "Which Roman numeral correctly represents the number 94?",
      choices: ["XCIV", "IVC", "LXXXXIV", "CIV"],
      answer: 0,
      rationale: {
        correct: "94 = 90 + 4, written XC (10 before 100) followed by IV (1 before 5): XCIV.",
        wrong: [
          null,
          "IVC is invalid — V is never used subtractively, and I may only be placed before V or X.",
          "LXXXXIV repeats X four times; a numeral may appear at most three times in a row, so 90 must be written XC.",
          "CIV is 104 (100 + 4) — the value is 6 too high because C stands alone instead of being reduced to XC."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-039",
      sub: "roman numerals",
      type: "mc",
      q: "A medication administration record lists dose number XLII. What number is this?",
      choices: ["62", "52", "42", "40"],
      answer: 2,
      rationale: {
        correct: "XL = 40 (X before L subtracts) and II = 2, so XLII = 40 + 2 = 42.",
        wrong: [
          "62 adds the X to the L (10 + 50) instead of subtracting it, then adds the II.",
          "52 keeps L as 50 but drops the leading X rather than subtracting it.",
          null,
          "40 reads XL correctly but ignores the II at the end."
        ]
      },
      diff: 2,
      secs: 55
    },

    /* ============ DOSAGE WORD PROBLEMS (9) ============ */

    {
      id: "HMB-040",
      sub: "dosage word problems",
      type: "mc",
      q: "A provider orders 200 mg of a liquid medication. The bottle is labeled 80 mg per 2 mL. How many milliliters should the nurse administer?",
      choices: ["0.8 mL", "5 mL", "2.5 mL", "100 mL"],
      answer: 1,
      rationale: {
        correct: "Desired divided by on-hand, times quantity: (200 mg / 80 mg) x 2 mL = 2.5 x 2 = 5 mL.",
        wrong: [
          "0.8 mL inverts the formula (80 / 200 x 2), dividing on-hand by ordered and underdosing the patient.",
          null,
          "2.5 mL stops at the ratio 200/80; that 2.5 must still be multiplied by the 2-mL supply volume.",
          "100 mL divides the order by the 2-mL volume (200 / 2) and never uses the 80-mg strength."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-041",
      sub: "dosage word problems",
      type: "mc",
      q: "A provider orders 1.5 g of a medication. The tablets on hand are 500 mg each. How many tablets should the nurse give?",
      choices: ["1/3 tablet", "2 tablets", "3 tablets", "30 tablets"],
      answer: 2,
      rationale: {
        correct: "Convert to a common unit first: 1.5 g x 1,000 = 1,500 mg; then 1,500 / 500 = 3 tablets.",
        wrong: [
          "1/3 tablet inverts the formula (500 / 1,500), dividing on-hand by ordered.",
          "2 tablets converts 1.5 g as a flat 1,000 mg — the 1,000 factor must be multiplied by the full 1.5.",
          null,
          "30 tablets misplaces the decimal in the conversion (1.5 g read as 15,000 mg), a tenfold overdose."
        ]
      },
      diff: 3,
      secs: 75
    },
    {
      id: "HMB-042",
      sub: "dosage word problems",
      type: "mc",
      q: "A child weighing 88 pounds is prescribed a medication at 6 mg/kg per day, divided into 4 equal doses. How many milligrams are in each dose?",
      choices: ["60 mg", "132 mg", "240 mg", "528 mg"],
      answer: 0,
      rationale: {
        correct: "Convert the weight: 88 / 2.2 = 40 kg. Daily total: 40 x 6 = 240 mg. Per dose: 240 / 4 = 60 mg.",
        wrong: [
          null,
          "132 mg uses the pound weight directly (88 x 6 / 4) and skips the lb-to-kg step, more than doubling the dose.",
          "240 mg is the full DAILY total; the order divides it into 4 doses.",
          "528 mg makes both errors — pounds never converted (88 x 6) and the daily total never divided into doses."
        ]
      },
      diff: 3,
      secs: 80
    },
    {
      id: "HMB-043",
      sub: "dosage word problems",
      type: "mc",
      q: "An IV bag containing 0.9 L of fluid is ordered to infuse over 6 hours. What is the flow rate in milliliters per hour?",
      choices: ["15 mL/hr", "1,500 mL/hr", "5,400 mL/hr", "150 mL/hr"],
      answer: 3,
      rationale: {
        correct: "Convert 0.9 L to 900 mL (1 L = 1,000 mL), then divide volume by time: 900 / 6 = 150 mL/hr.",
        wrong: [
          "15 mL/hr treats 0.9 L as 90 mL — a one-place decimal slip in the liter conversion.",
          "1,500 mL/hr treats 0.9 L as 9,000 mL — a decimal slip in the other direction.",
          "5,400 mL/hr multiplies volume by time (900 x 6) instead of dividing.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-044",
      sub: "dosage word problems",
      type: "mc",
      q: "An IV order calls for 750 mL to infuse over 5 hours using tubing with a drop factor of 10 gtt/mL. What is the drip rate in drops per minute?",
      choices: ["150 gtt/min", "1,500 gtt/min", "25 gtt/min", "2.5 gtt/min"],
      answer: 2,
      rationale: {
        correct: "(Volume x drop factor) divided by minutes: 750 x 10 = 7,500 gtt, and 5 hr = 300 min, so 7,500 / 300 = 25 gtt/min.",
        wrong: [
          "150 gtt/min is 750/5, the mL-per-HOUR rate; the 10 gtt/mL drop factor was never applied.",
          "1,500 gtt/min divides 7,500 by 5 HOURS instead of 300 minutes — drops per minute needs time in minutes.",
          null,
          "2.5 gtt/min divides 750 by 300 minutes but skips the drop factor entirely — that result is mL/min, not gtt/min."
        ]
      },
      diff: 3,
      secs: 80
    },
    {
      id: "HMB-045",
      sub: "dosage word problems",
      type: "mc",
      q: "A patient receives 250 mg of a medication every 6 hours. How many milligrams does the patient receive in 24 hours?",
      choices: ["1,500 mg", "750 mg", "500 mg", "1,000 mg"],
      answer: 3,
      rationale: {
        correct: "Every 6 hours means 24 / 6 = 4 doses per day, so 250 x 4 = 1,000 mg.",
        wrong: [
          "1,500 mg multiplies 250 by the 6-hour interval instead of by the number of doses per day.",
          "750 mg counts only 3 doses; 24 / 6 is 4, and dropping one dose undercounts the daily total.",
          "500 mg counts only 2 doses, as if the drug were given every 12 hours.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-046",
      sub: "dosage word problems",
      type: "mc",
      q: "A patient is told to take 22.5 mL of a liquid supplement at home but has only a standard tablespoon. How many tablespoons equal the ordered dose?",
      choices: ["1.5 tablespoons", "4.5 tablespoons", "0.75 tablespoons", "2.25 tablespoons"],
      answer: 0,
      rationale: {
        correct: "1 tablespoon = 15 mL, so 22.5 / 15 = 1.5 tablespoons.",
        wrong: [
          null,
          "4.5 tablespoons uses the TEASPOON factor (5 mL); 4.5 is the number of teaspoons, and a tablespoon holds 3 of them.",
          "0.75 tablespoons uses 30 mL, the FLUID-OUNCE factor; 22.5 mL is 0.75 fl oz but 1.5 tablespoons.",
          "2.25 tablespoons uses 10 mL per tablespoon, splitting the difference between the teaspoon (5 mL) and the true 15 mL."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-047",
      sub: "dosage word problems",
      type: "fill",
      q: "A provider orders 15 mg of a medication. The vial on hand is labeled 25 mg per 1 mL. How many milliliters should the nurse draw up? Enter your answer as a decimal with a leading zero (for example, 0.25).",
      answer: { accept: ["0.6", "0.60"] },
      rationale: {
        correct: "Desired divided by on-hand, times quantity: (15 mg / 25 mg) x 1 mL = 0.6 mL. Inverting the formula (25 / 15 = 1.67 mL) would nearly triple the dose, and the leading zero (0.6, never .6) is standard practice so the decimal point is never missed."
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-048",
      sub: "dosage word problems",
      type: "fill",
      q: "A patient weighing 176 pounds is ordered a medication at 0.5 mg per kilogram of body weight. How many milligrams should be administered? Enter a whole number.",
      answer: { accept: ["40"] },
      rationale: {
        correct: "Convert pounds to kilograms first: 176 / 2.2 = 80 kg; then 80 x 0.5 = 40 mg. Skipping the conversion (176 x 0.5 = 88 mg) more than doubles the dose — weight-based orders are always written per KILOGRAM."
      },
      diff: 3,
      secs: 75
    },

    /* ============ BASIC ALGEBRA (7) ============ */

    {
      id: "HMB-049",
      sub: "basic algebra",
      type: "mc",
      q: "Solve for x: x/6 = 9",
      choices: ["1.5", "54", "15", "3"],
      answer: 1,
      rationale: {
        correct: "Multiply both sides by 6: x = 9 x 6 = 54. Check: 54/6 = 9.",
        wrong: [
          "1.5 divides 9 by 6 — since x is already being divided by 6, undoing that step requires multiplication.",
          null,
          "15 adds 6 to 9 instead of multiplying.",
          "3 subtracts 6 from 9; subtraction undoes addition, not division."
        ]
      },
      diff: 1,
      secs: 40
    },
    {
      id: "HMB-050",
      sub: "basic algebra",
      type: "mc",
      q: "Solve for x: 4x + 9 = 41",
      choices: ["12.5", "32", "8", "128"],
      answer: 2,
      rationale: {
        correct: "Subtract 9 from both sides: 4x = 32; divide by 4: x = 8. Check: 4(8) + 9 = 41.",
        wrong: [
          "12.5 adds 9 to 41 first ((41 + 9)/4) — a +9 on the left moves across by SUBTRACTING 9 from both sides.",
          "32 finds 4x = 32 correctly but never divides by the coefficient 4.",
          null,
          "128 multiplies 32 by 4 in the last step instead of dividing."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-051",
      sub: "basic algebra",
      type: "mc",
      q: "Solve for x: 4(x + 3) = 32",
      choices: ["5", "8", "7.25", "11"],
      answer: 0,
      rationale: {
        correct: "Divide both sides by 4: x + 3 = 8; subtract 3: x = 5. Check: 4(5 + 3) = 4 x 8 = 32.",
        wrong: [
          null,
          "8 stops at x + 3 = 8; the 3 must still be subtracted to isolate x.",
          "7.25 distributes the 4 to x but not to the 3 (4x + 3 = 32) — the 4 multiplies BOTH terms inside the parentheses.",
          "11 adds 3 to 8 instead of subtracting it — a sign error when moving the constant."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-052",
      sub: "basic algebra",
      type: "mc",
      q: "If m = 5 and n = 6, what is the value of 3m^2 - n?",
      choices: ["219", "24", "57", "69"],
      answer: 3,
      rationale: {
        correct: "Exponent first, then multiply, then subtract: m^2 = 25, 3 x 25 = 75, and 75 - 6 = 69.",
        wrong: [
          "219 squares 3m as a unit ((15)^2 - 6) — the exponent applies only to m, not to the coefficient.",
          "24 treats the square as doubling (m^2 read as 5 x 2 = 10, then 3 x 10 - 6) — squaring means m times m.",
          "57 subtracts n before multiplying (3 x (25 - 6)) — multiplication comes before subtraction in PEMDAS.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-053",
      sub: "basic algebra",
      type: "mc",
      q: "Six times a number, decreased by 9, equals 45. What is the number?",
      choices: ["6", "9", "54", "7.5"],
      answer: 1,
      rationale: {
        correct: "Translate: 6x - 9 = 45. Add 9: 6x = 54; divide by 6: x = 9.",
        wrong: [
          "6 subtracts the 9 instead of adding it ((45 - 9)/6) — 'decreased by 9' means 9 was already removed, so it must be added back.",
          null,
          "54 is the value of 6x, one step short of the number itself.",
          "7.5 divides 45 by 6 immediately, ignoring the '- 9' in the translation."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-054",
      sub: "basic algebra",
      type: "mc",
      q: "Solve for x: 5x - 3 = 2x + 18",
      choices: ["5", "3", "7", "21"],
      answer: 2,
      rationale: {
        correct: "Subtract 2x from both sides: 3x - 3 = 18; add 3: 3x = 21; divide by 3: x = 7. Check: 5(7) - 3 = 32 = 2(7) + 18.",
        wrong: [
          "5 subtracts 3 from 18 instead of adding it (3x = 15) — the -3 crosses the equals sign as +3.",
          "3 ADDS the x-coefficients (5 + 2 = 7, then 21/7) — like terms on opposite sides are subtracted, not added.",
          null,
          "21 finds 3x = 21 correctly but never divides by 3."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMB-055",
      sub: "basic algebra",
      type: "fill",
      q: "Solve for x: (x - 5)/4 = 3. Enter a whole number.",
      answer: { accept: ["17"] },
      rationale: {
        correct: "Multiply both sides by 4: x - 5 = 12; add 5: x = 17. Check: (17 - 5)/4 = 12/4 = 3. The common slip is dividing only x by 4 (x/4 - 5 = 3, giving 32) — the whole numerator x - 5 sits over the 4."
      },
      diff: 2,
      secs: 55
    }
  ]
};
