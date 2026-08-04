window.BANKS = window.BANKS || {};
window.BANKS["hesi-math"] = {
  exam: "hesi",
  section: "math",
  questions: [

    /* ============ FRACTIONS (8) ============ */

    {
      id: "HMA-001",
      sub: "fractions",
      type: "mc",
      q: "What is 3/8 + 1/6?",
      choices: ["2/7", "1/16", "13/24", "5/12"],
      answer: 2,
      rationale: {
        correct: "The LCD of 8 and 6 is 24: 3/8 = 9/24 and 1/6 = 4/24, so 9/24 + 4/24 = 13/24.",
        wrong: [
          "2/7 comes from adding straight across (3+1 over 8+6) — numerators and denominators cannot both be added.",
          "1/16 is the result of multiplying the fractions (3x1 over 8x6, reduced) instead of adding them.",
          null,
          "5/12 comes from converting 3/8 to 9/24 but leaving 1/6 as 1/24 — both fractions must be rescaled to the LCD."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-002",
      sub: "fractions",
      type: "mc",
      q: "What is 4 1/4 - 2 2/3?",
      choices: ["1 7/12", "2 5/12", "1 5/12", "2 7/12"],
      answer: 0,
      rationale: {
        correct: "With LCD 12: 4 3/12 - 2 8/12. Borrow 1 from the 4 to get 3 15/12, then 15/12 - 8/12 = 7/12 and 3 - 2 = 1, giving 1 7/12.",
        wrong: [
          null,
          "2 5/12 comes from subtracting the smaller fraction from the larger regardless of order (8/12 - 3/12) and never borrowing.",
          "1 5/12 comes from borrowing 10/12 instead of 12/12 — a whole is 12 twelfths, not 10.",
          "2 7/12 comes from borrowing correctly but forgetting to reduce the whole number 4 to 3 after the borrow."
        ]
      },
      diff: 3,
      secs: 70
    },
    {
      id: "HMA-003",
      sub: "fractions",
      type: "mc",
      q: "What is the product of 2/3 and 3/5?",
      choices: ["10/9", "2/5", "19/15", "5/8"],
      answer: 1,
      rationale: {
        correct: "Multiply straight across: (2x3)/(3x5) = 6/15, which reduces to 2/5.",
        wrong: [
          "10/9 is the quotient 2/3 divided by 3/5 — the reciprocal was flipped as if dividing.",
          null,
          "19/15 is the sum 2/3 + 3/5 (10/15 + 9/15), not the product.",
          "5/8 comes from adding numerators and adding denominators — an operation that is never valid."
        ]
      },
      diff: 1,
      secs: 40
    },
    {
      id: "HMA-004",
      sub: "fractions",
      type: "mc",
      q: "What is 3 1/2 divided by 1 3/4?",
      choices: ["6 1/8", "1/2", "5 1/4", "2"],
      answer: 3,
      rationale: {
        correct: "Convert to improper fractions and multiply by the reciprocal: 7/2 divided by 7/4 = 7/2 x 4/7 = 28/14 = 2.",
        wrong: [
          "6 1/8 comes from multiplying 7/2 x 7/4 = 49/8 — the divisor was never flipped.",
          "1/2 comes from flipping the wrong fraction (2/7 x 7/4) — only the divisor is inverted.",
          "5 1/4 is the sum 3 1/2 + 1 3/4, not the quotient.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-005",
      sub: "fractions",
      type: "mc",
      q: "Which of the following expresses 36/48 in simplest form?",
      choices: ["3/4", "6/8", "12/16", "4/3"],
      answer: 0,
      rationale: {
        correct: "The greatest common factor of 36 and 48 is 12, and 36/12 over 48/12 gives 3/4.",
        wrong: [
          null,
          "6/8 is equivalent in value but was only divided by 6 — it still reduces further to 3/4.",
          "12/16 is equivalent in value but was only divided by 3 — it is not in lowest terms.",
          "4/3 is the fraction inverted; 36/48 is less than 1, so its simplest form cannot be greater than 1."
        ]
      },
      diff: 1,
      secs: 40
    },
    {
      id: "HMA-006",
      sub: "fractions",
      type: "mc",
      q: "Which of the following fractions has the greatest value?",
      choices: ["5/8", "2/3", "7/12", "3/5"],
      answer: 1,
      rationale: {
        correct: "Convert each to a decimal: 2/3 = 0.667, which is larger than 5/8 = 0.625, 3/5 = 0.600, and 7/12 = 0.583.",
        wrong: [
          "5/8 = 0.625 — second largest, chosen when 2/3 is rounded down to 0.66 carelessly.",
          null,
          "7/12 = 0.583 — the largest numerator does not make the largest fraction; the denominator matters.",
          "3/5 = 0.600 — smaller than both 5/8 and 2/3 once all are written as decimals."
        ]
      },
      diff: 3,
      secs: 75
    },
    {
      id: "HMA-007",
      sub: "fractions",
      type: "mc",
      q: "Express 7/20 as a percent.",
      choices: ["3.5%", "14%", "35%", "70%"],
      answer: 2,
      rationale: {
        correct: "7 divided by 20 = 0.35, and 0.35 x 100 = 35%.",
        wrong: [
          "3.5% moves the decimal only one place — converting a decimal to a percent moves it two places.",
          "14% comes from doubling the numerator (7 x 2); the denominator 20 must be scaled by 5, not 2, to reach 100.",
          null,
          "70% treats the fraction as 7/10 — the denominator is 20, so each 1/20 is 5%, not 10%."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-008",
      sub: "fractions",
      type: "fill",
      q: "Convert 3/8 to a decimal. Enter your answer as a decimal with a leading zero (for example, 0.125).",
      answer: { accept: ["0.375", "0.3750"] },
      rationale: {
        correct: "Divide the numerator by the denominator: 3 divided by 8 = 0.375. Common slips are 0.38 (rounding when no rounding was requested) and 2.667 (dividing 8 by 3 — the numerator always goes inside the division)."
      },
      diff: 1,
      secs: 40
    },

    /* ============ DECIMALS-PERCENTS (8) ============ */

    {
      id: "HMA-009",
      sub: "decimals-percents",
      type: "mc",
      q: "What is 35% of 80?",
      choices: ["2.8", "28", "45", "280"],
      answer: 1,
      rationale: {
        correct: "Convert the percent to a decimal and multiply: 0.35 x 80 = 28.",
        wrong: [
          "2.8 uses 0.035 — the decimal point was moved three places instead of two.",
          null,
          "45 subtracts 35 from 80; 'of' signals multiplication, not subtraction.",
          "280 uses 3.5 — moving the decimal only one place makes the answer ten times too large."
        ]
      },
      diff: 1,
      secs: 40
    },
    {
      id: "HMA-010",
      sub: "decimals-percents",
      type: "mc",
      q: "A patient's weight increased from 150 pounds to 162 pounds. What is the percent increase?",
      choices: ["8%", "7.4%", "12%", "0.8%"],
      answer: 0,
      rationale: {
        correct: "Percent increase = (new - old) / old x 100: (162 - 150) / 150 = 12/150 = 0.08 = 8%.",
        wrong: [
          null,
          "7.4% divides the change by the NEW weight (12/162); percent change always divides by the original value.",
          "12% reports the raw 12-pound difference as a percent without dividing by 150.",
          "0.8% is a misplaced decimal — 12/150 = 0.08, which is 8%, not 0.8%."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-011",
      sub: "decimals-percents",
      type: "mc",
      q: "A daily medication dose is reduced from 200 mg to 150 mg. By what percent was the dose decreased?",
      choices: ["33.3%", "50%", "25%", "75%"],
      answer: 2,
      rationale: {
        correct: "Percent decrease = (old - new) / old x 100: (200 - 150) / 200 = 50/200 = 25%.",
        wrong: [
          "33.3% divides the change by the new dose (50/150) instead of the original 200.",
          "50% reports the raw 50-mg difference as a percent without dividing by the original.",
          null,
          "75% is the portion of the dose that REMAINS (150/200), not the portion removed."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-012",
      sub: "decimals-percents",
      type: "mc",
      q: "An infusion has delivered 45 mL of fluid, which is 60% of the ordered volume. What is the total ordered volume?",
      choices: ["27 mL", "105 mL", "7.5 mL", "75 mL"],
      answer: 3,
      rationale: {
        correct: "Part / percent = whole: 45 / 0.60 = 75 mL. Check: 0.60 x 75 = 45.",
        wrong: [
          "27 mL multiplies 45 x 0.60 — finding the whole from a part requires dividing by the percent.",
          "105 mL adds 45 + 60, mixing a volume with a percent — the two cannot be added.",
          "7.5 mL divides by 6 instead of 0.6 — a one-place decimal slip, and the whole can never be smaller than the part.",
          null
        ]
      },
      diff: 3,
      secs: 70
    },
    {
      id: "HMA-013",
      sub: "decimals-percents",
      type: "mc",
      q: "What is the product of 0.9 and 0.4?",
      choices: ["0.36", "3.6", "0.036", "1.3"],
      answer: 0,
      rationale: {
        correct: "9 x 4 = 36, and the factors carry two decimal places total, so the product is 0.36.",
        wrong: [
          null,
          "3.6 keeps only one decimal place; tenths times tenths gives hundredths.",
          "0.036 places three decimal places when the factors carry only two.",
          "1.3 is the sum 0.9 + 0.4, not the product."
        ]
      },
      diff: 1,
      secs: 35
    },
    {
      id: "HMA-014",
      sub: "decimals-percents",
      type: "mc",
      q: "A dose calculation yields 2.348 mL. Rounded to the nearest tenth, how many milliliters is this?",
      choices: ["2.4 mL", "2.3 mL", "2.35 mL", "2 mL"],
      answer: 1,
      rationale: {
        correct: "The digit in the hundredths place is 4, which is less than 5, so the tenths digit stays: 2.3 mL.",
        wrong: [
          "2.4 mL comes from chain-rounding (2.348 to 2.35 to 2.4) — round once, using only the digit immediately to the right.",
          null,
          "2.35 mL is rounded to the nearest hundredth, not the nearest tenth.",
          "2 mL is rounded to the nearest whole number, dropping a clinically meaningful 0.3 mL."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-015",
      sub: "decimals-percents",
      type: "mc",
      q: "A pair of scrubs is priced at $48.00 and marked 25% off, and a coupon then takes an additional 10% off the sale price. What is the final price?",
      choices: ["$36.00", "$43.20", "$32.40", "$31.20"],
      answer: 2,
      rationale: {
        correct: "Apply the discounts in sequence: 48 x 0.75 = $36.00, then 36 x 0.90 = $32.40.",
        wrong: [
          "$36.00 applies only the 25% discount and stops before the coupon.",
          "$43.20 applies only the 10% coupon and skips the 25% markdown.",
          null,
          "$31.20 adds the discounts into one 35% cut (48 x 0.65); successive discounts multiply — the 10% acts on the already-reduced $36."
        ]
      },
      diff: 3,
      secs: 80
    },
    {
      id: "HMA-016",
      sub: "decimals-percents",
      type: "fill",
      q: "What is 7.5% of 240? Enter a whole number.",
      answer: { accept: ["18"] },
      rationale: {
        correct: "Convert 7.5% to the decimal 0.075 and multiply: 0.075 x 240 = 18. The classic slip is using 0.75 (which gives 180) — a percent with a decimal point still moves exactly two places."
      },
      diff: 2,
      secs: 55
    },

    /* ============ RATIO-PROPORTION (8) ============ */

    {
      id: "HMA-017",
      sub: "ratio-proportion",
      type: "mc",
      q: "Solve for x: 5/7 = 35/x",
      choices: ["25", "7", "245", "49"],
      answer: 3,
      rationale: {
        correct: "Cross-multiply: 5x = 7 x 35 = 245, so x = 245/5 = 49. Check: 35/49 reduces to 5/7.",
        wrong: [
          "25 comes from setting the proportion up backward (x = 35 x 5 / 7), pairing the wrong terms.",
          "7 is the scale factor (35 is 7 times 5) — the question asks for x, which is 7 times 7.",
          "245 is the cross-product 7 x 35 left undivided; the final step divides by 5.",
          null
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HMA-018",
      sub: "ratio-proportion",
      type: "mc",
      q: "A disinfectant is mixed using 3 ounces of concentrate for every 4 quarts of water. How many ounces of concentrate are needed for 10 quarts of water?",
      choices: ["7.5 oz", "13.3 oz", "30 oz", "1.2 oz"],
      answer: 0,
      rationale: {
        correct: "Set up 3/4 = x/10 and cross-multiply: x = (3 x 10) / 4 = 7.5 oz.",
        wrong: [
          null,
          "13.3 oz inverts the ratio (4 x 10 / 3), scaling water per concentrate instead of concentrate per water.",
          "30 oz multiplies 3 x 10 but never divides by the 4 quarts in the base ratio.",
          "1.2 oz pairs the terms wrong (3 x 4 / 10), shrinking the amount when more water demands more concentrate."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-019",
      sub: "ratio-proportion",
      type: "mc",
      q: "A package of 12 rolls of gauze costs $5.76. What is the cost per roll?",
      choices: ["$2.08", "$0.48", "$4.80", "$69.12"],
      answer: 1,
      rationale: {
        correct: "Unit rate = total cost / number of units: 5.76 / 12 = $0.48 per roll.",
        wrong: [
          "$2.08 divides 12 by 5.76 — that is rolls per dollar, the inverted rate.",
          null,
          "$4.80 is a misplaced decimal (5.76 / 1.2); dividing by 12 must make the number much smaller.",
          "$69.12 multiplies 5.76 x 12, the price of a dozen packages rather than one roll."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-020",
      sub: "ratio-proportion",
      type: "mc",
      q: "A hospital unit staffs 2 nurses for every 7 patients. If the unit has 28 patients, how many nurses are needed?",
      choices: ["98", "14", "8", "4"],
      answer: 2,
      rationale: {
        correct: "2/7 = x/28; cross-multiply: x = (2 x 28) / 7 = 8 nurses.",
        wrong: [
          "98 inverts the proportion (7 x 28 / 2) — more nurses than patients contradicts the 2:7 ratio.",
          "14 divides the patients by 2, ignoring the 7 in the ratio entirely.",
          null,
          "4 is only the scale factor (28 / 7); it still must be multiplied by the 2 nurses in the ratio."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-021",
      sub: "ratio-proportion",
      type: "mc",
      q: "A cleaning solution is mixed as 1 part bleach to 9 parts water. How many milliliters of bleach are needed to prepare 400 mL of solution?",
      choices: ["40 mL", "44.4 mL", "360 mL", "4 mL"],
      answer: 0,
      rationale: {
        correct: "1 part bleach + 9 parts water = 10 parts total, so each part is 400/10 = 40 mL, and bleach is 1 part = 40 mL.",
        wrong: [
          null,
          "44.4 mL divides by 9, treating 1:9 as bleach-to-TOTAL; the total has 10 parts, not 9.",
          "360 mL is the water portion (9 parts), not the bleach.",
          "4 mL is a misplaced decimal — 400/10 is 40, not 4."
        ]
      },
      diff: 3,
      secs: 70
    },
    {
      id: "HMA-022",
      sub: "ratio-proportion",
      type: "mc",
      q: "A liquid medication contains 125 mg of drug in every 5 mL. How many milligrams are in 8 mL?",
      choices: ["25 mg", "1,000 mg", "78.1 mg", "200 mg"],
      answer: 3,
      rationale: {
        correct: "125 mg / 5 mL = 25 mg per mL, and 25 x 8 = 200 mg. (Proportion: 125/5 = x/8.)",
        wrong: [
          "25 mg is the strength of ONE milliliter; the question asks about 8 mL.",
          "1,000 mg multiplies 125 x 8 without dividing by the 5-mL base volume.",
          "78.1 mg pairs the terms wrong (125 x 5 / 8, treating 8 mL as the base volume); scaling UP from 5 mL to 8 mL must give MORE than 125 mg, not less.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-023",
      sub: "ratio-proportion",
      type: "mc",
      q: "Solve for x: 8 : 12 :: x : 39",
      choices: ["58.5", "26", "35", "24"],
      answer: 1,
      rationale: {
        correct: "8/12 = x/39; cross-multiply: x = (8 x 39) / 12 = 312/12 = 26.",
        wrong: [
          "58.5 inverts the proportion (12 x 39 / 8), solving 12/8 = x/39 instead.",
          null,
          "35 uses the additive difference (12 is 4 more than 8, so 39 - 4) — proportions scale by multiplication, not by adding.",
          "24 rounds the scale factor 39/12 = 3.25 down to 3 and multiplies 8 x 3; the exact factor must be kept."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-024",
      sub: "ratio-proportion",
      type: "fill",
      q: "Solve for x: 6/x = 9/24. Enter a whole number.",
      answer: { accept: ["16"] },
      rationale: {
        correct: "Cross-multiply: 9x = 6 x 24 = 144, so x = 144/9 = 16. Check: 6/16 = 0.375 and 9/24 = 0.375. The common error is multiplying 9 x 24 and dividing by 6 (giving 36) — the x-term pairs diagonally with 6 and 24."
      },
      diff: 2,
      secs: 55
    },

    /* ============ CONVERSIONS (9) ============ */

    {
      id: "HMA-025",
      sub: "conversions",
      type: "mc",
      q: "A patient is instructed to take 2 teaspoons of cough syrup. How many milliliters is this?",
      choices: ["30 mL", "6 mL", "10 mL", "0.4 mL"],
      answer: 2,
      rationale: {
        correct: "1 teaspoon = 5 mL, so 2 tsp x 5 = 10 mL.",
        wrong: [
          "30 mL uses the TABLESPOON factor (1 tbsp = 15 mL); a teaspoon is only 5 mL.",
          "6 mL uses 3 mL per teaspoon — 3 is the number of teaspoons in a tablespoon, not mL in a teaspoon.",
          null,
          "0.4 mL divides 2 by 5 — converting to the smaller unit (mL) requires multiplying."
        ]
      },
      diff: 1,
      secs: 35
    },
    {
      id: "HMA-026",
      sub: "conversions",
      type: "mc",
      q: "A patient drinks 1 cup of juice. How many milliliters of fluid intake should the nurse record?",
      choices: ["30 mL", "120 mL", "480 mL", "240 mL"],
      answer: 3,
      rationale: {
        correct: "1 cup = 8 fluid ounces, and 1 fl oz = 30 mL, so 8 x 30 = 240 mL.",
        wrong: [
          "30 mL is ONE fluid ounce; a cup contains 8 of them.",
          "120 mL uses 15 mL per ounce — 15 mL is the tablespoon factor, not the fluid-ounce factor.",
          "480 mL is 2 cups (1 pint), double the intake actually consumed.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-027",
      sub: "conversions",
      type: "mc",
      q: "A care plan calls for a patient to drink 2 quarts of water per day. How many 1-cup servings is this?",
      choices: ["8", "4", "16", "6"],
      answer: 0,
      rationale: {
        correct: "1 quart = 2 pints and 1 pint = 2 cups, so 1 quart = 4 cups and 2 quarts = 8 cups.",
        wrong: [
          null,
          "4 treats a quart as 2 cups, skipping the pint step — 2 cups make a PINT, and 2 pints make a quart.",
          "16 is the number of fluid ounces in a pint, not the number of cups in 2 quarts (fluid ounces measure volume; the 16 weight-ounces in a pound are a different unit entirely).",
          "6 adds 2 quarts + 4 pints — mixed units can never simply be added."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-028",
      sub: "conversions",
      type: "mc",
      q: "A patient weighs 154 pounds. What is the patient's weight in kilograms?",
      choices: ["338.8 kg", "70 kg", "77 kg", "7 kg"],
      answer: 1,
      rationale: {
        correct: "1 kg = 2.2 lb, and pounds convert to the larger kilogram by dividing: 154 / 2.2 = 70 kg.",
        wrong: [
          "338.8 kg multiplies by 2.2 — going from pounds to kilograms must make the number smaller, so divide.",
          null,
          "77 kg divides by 2 instead of 2.2; the 0.2 matters, especially in weight-based dosing.",
          "7 kg is a misplaced decimal — 154/2.2 is 70, and 7 kg would be an infant, not a 154-lb adult."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-029",
      sub: "conversions",
      type: "fill",
      q: "A patient weighs 61 kilograms. What is the patient's weight in pounds? Enter your answer as a decimal (for example, 120.5).",
      answer: { accept: ["134.2", "134.20"] },
      rationale: {
        correct: "1 kg = 2.2 lb, and kilograms convert to the smaller pound by multiplying: 61 x 2.2 = 134.2 lb. Dividing instead (61 / 2.2 = 27.7) is the wrong-direction error — a pound is smaller than a kilogram, so the pound count must be larger."
      },
      diff: 1,
      secs: 40
    },
    {
      id: "HMA-030",
      sub: "conversions",
      type: "mc",
      q: "An infant measures 21 inches in length. This is closest to how many centimeters?",
      choices: ["8.3 cm", "42 cm", "53.3 cm", "210 cm"],
      answer: 2,
      rationale: {
        correct: "1 inch = 2.54 cm, so 21 x 2.54 = 53.34, or about 53.3 cm.",
        wrong: [
          "8.3 cm divides 21 by 2.54 — inches convert to the smaller centimeter by multiplying.",
          "42 cm multiplies by 2, dropping the 0.54 and understating the length by more than 11 cm.",
          null,
          "210 cm multiplies by 10 — that is the millimeter ladder, not the inch-to-centimeter factor."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-031",
      sub: "conversions",
      type: "mc",
      q: "One ounce of weight is approximately equal to which of the following?",
      choices: ["16 g", "2.2 g", "454 g", "28.35 g"],
      answer: 3,
      rationale: {
        correct: "1 oz is approximately 28.35 g — the standard ounce-to-gram conversion.",
        wrong: [
          "16 is the number of OUNCES in a pound, not the grams in an ounce.",
          "2.2 is the number of POUNDS in a kilogram, borrowed from the wrong conversion pair.",
          "454 g is approximately one POUND (16 x 28.35), not one ounce.",
          null
        ]
      },
      diff: 1,
      secs: 35
    },
    {
      id: "HMA-032",
      sub: "conversions",
      type: "mc",
      q: "A medication label lists a strength of 600 micrograms. How many milligrams is this?",
      choices: ["0.6 mg", "600,000 mg", "6 mg", "0.06 mg"],
      answer: 0,
      rationale: {
        correct: "1 mg = 1,000 mcg, and micrograms convert to the larger milligram by dividing: 600 / 1,000 = 0.6 mg.",
        wrong: [
          null,
          "600,000 mg multiplies by 1,000 — converting to a LARGER unit must shrink the number.",
          "6 mg divides by only 100; the mcg-to-mg ladder is a full three decimal places.",
          "0.06 mg divides by 10,000 — one decimal place too many, a tenfold underdose on a label check."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-033",
      sub: "conversions",
      type: "mc",
      q: "A child's temperature is 39.5 degrees Celsius. Using the formula F = (1.8 x C) + 32, what is the temperature in degrees Fahrenheit?",
      choices: ["71.1", "103.1", "128.7", "53.9"],
      answer: 1,
      rationale: {
        correct: "Multiply first, then add: 39.5 x 1.8 = 71.1, and 71.1 + 32 = 103.1 degrees Fahrenheit.",
        wrong: [
          "71.1 stops after multiplying by 1.8 and never adds the 32.",
          null,
          "128.7 adds the 32 BEFORE multiplying ((39.5 + 32) x 1.8) — order of operations puts multiplication first.",
          "53.9 multiplies by 5/9 instead of 9/5; 5/9 belongs to the reverse formula, C = (F - 32) x 5/9."
        ]
      },
      diff: 3,
      secs: 75
    },

    /* ============ MILITARY TIME (3) ============ */

    {
      id: "HMA-034",
      sub: "military time",
      type: "mc",
      q: "A procedure is scheduled for 2115. What time is this on a standard 12-hour clock?",
      choices: ["9:15 AM", "11:15 PM", "8:15 PM", "9:15 PM"],
      answer: 3,
      rationale: {
        correct: "For military hours of 1300 or later, subtract 12: 21 - 12 = 9, so 2115 = 9:15 PM.",
        wrong: [
          "9:15 AM subtracts correctly but keeps AM — hours 1300 and later are always afternoon or evening (PM).",
          "11:15 PM subtracts only 10 from the hour instead of 12.",
          "8:15 PM subtracts 13 — an off-by-one slip; exactly 12 is removed.",
          null
        ]
      },
      diff: 1,
      secs: 35
    },
    {
      id: "HMA-035",
      sub: "military time",
      type: "mc",
      q: "A visitor arrives at 7:40 PM. How is this time written on the 24-hour (military) clock?",
      choices: ["1940", "0740", "1740", "2040"],
      answer: 0,
      rationale: {
        correct: "For PM times (except 12 PM), add 12 to the hour: 7 + 12 = 19, so 7:40 PM = 1940.",
        wrong: [
          null,
          "0740 is 7:40 AM — the morning form; PM requires adding 12.",
          "1740 adds only 10 to the hour; 1740 is 5:40 PM.",
          "2040 adds 13 — an off-by-one slip; 2040 is 8:40 PM."
        ]
      },
      diff: 1,
      secs: 35
    },
    {
      id: "HMA-036",
      sub: "military time",
      type: "mc",
      q: "A nurse begins a shift at 2245 and works 8 hours. In military time, when does the shift end?",
      choices: ["0545", "0745", "0645", "3045"],
      answer: 2,
      rationale: {
        correct: "From 2245, 1 hour 15 minutes reaches midnight (0000); the remaining 6 hours 45 minutes lands at 0645.",
        wrong: [
          "0545 adds only 7 hours to the start time.",
          "0745 adds 9 hours instead of 8.",
          null,
          "3045 adds 8 hours on paper (2245 + 800) but never wraps at 2400 — the clock restarts at 0000 at midnight."
        ]
      },
      diff: 3,
      secs: 70
    },

    /* ============ ROMAN NUMERALS (3) ============ */

    {
      id: "HMA-037",
      sub: "roman numerals",
      type: "mc",
      q: "A prescription specifies gr XIV of a medication. How many grains is this?",
      choices: ["16", "14", "15", "4"],
      answer: 1,
      rationale: {
        correct: "X = 10 and IV = 4 (I before V subtracts), so XIV = 10 + 4 = 14 grains.",
        wrong: [
          "16 adds every symbol (10 + 5 + 1), ignoring that I placed BEFORE V subtracts.",
          null,
          "15 reads only X + V and drops the I entirely.",
          "4 reads only the IV pair and ignores the leading X."
        ]
      },
      diff: 1,
      secs: 35
    },
    {
      id: "HMA-038",
      sub: "roman numerals",
      type: "mc",
      q: "Which Roman numeral correctly represents the number 49?",
      choices: ["XLIX", "IL", "XLVIIII", "LIX"],
      answer: 0,
      rationale: {
        correct: "49 = 40 + 9, written XL (10 before 50) plus IX (1 before 10): XLIX.",
        wrong: [
          null,
          "IL is invalid — I may only be subtracted from V or X, never from L or C.",
          "XLVIIII repeats I four times; a numeral may appear at most three times in a row, so 9 must be IX.",
          "LIX is 59 (50 + 9) — the tens digit calls for XL (40), not L (50)."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-039",
      sub: "roman numerals",
      type: "mc",
      q: "What number does the Roman numeral XCVII represent?",
      choices: ["117", "107", "92", "97"],
      answer: 3,
      rationale: {
        correct: "XC = 90 (10 before 100 subtracts) and VII = 7, so XCVII = 97.",
        wrong: [
          "117 adds every symbol left to right (10 + 100 + 5 + 1 + 1), ignoring the subtractive XC pair.",
          "107 keeps the C as 100 but drops the leading X instead of subtracting it.",
          "92 misreads VII as II, dropping the V.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },

    /* ============ DOSAGE WORD PROBLEMS (9) ============ */

    {
      id: "HMA-040",
      sub: "dosage word problems",
      type: "mc",
      q: "A provider orders 375 mg of a liquid antibiotic. The bottle is labeled 125 mg per 5 mL. How many milliliters should the nurse administer?",
      choices: ["1.7 mL", "75 mL", "15 mL", "3 mL"],
      answer: 2,
      rationale: {
        correct: "Desired / on-hand x quantity: (375 / 125) x 5 mL = 3 x 5 = 15 mL.",
        wrong: [
          "1.7 mL inverts the formula (125 / 375 x 5), dividing on-hand by ordered.",
          "75 mL divides the order by the 5-mL volume (375 / 5) and never uses the 125-mg strength.",
          null,
          "3 mL stops at the ratio 375/125 = 3 — that 3 must still be multiplied by the 5-mL supply volume."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-041",
      sub: "dosage word problems",
      type: "mc",
      q: "A provider orders 0.5 g of a medication. The tablets on hand are 250 mg each. How many tablets should the nurse give?",
      choices: ["1/2 tablet", "2 tablets", "4 tablets", "20 tablets"],
      answer: 1,
      rationale: {
        correct: "Convert first: 0.5 g x 1,000 = 500 mg; then 500 / 250 = 2 tablets.",
        wrong: [
          "1/2 tablet inverts the formula (250 / 500), dividing on-hand by ordered.",
          null,
          "4 tablets converts 0.5 g as a full 1,000 mg — the 1,000 factor still has to be multiplied by 0.5.",
          "20 tablets misplaces the decimal in the conversion (0.5 g as 5,000 mg), a tenfold overdose."
        ]
      },
      diff: 3,
      secs: 75
    },
    {
      id: "HMA-042",
      sub: "dosage word problems",
      type: "mc",
      q: "A child weighing 44 pounds is prescribed a medication at 5 mg/kg per day, divided into 2 equal doses. How many milligrams are in each dose?",
      choices: ["50 mg", "100 mg", "110 mg", "220 mg"],
      answer: 0,
      rationale: {
        correct: "Convert the weight: 44 / 2.2 = 20 kg. Daily total: 20 x 5 = 100 mg. Per dose: 100 / 2 = 50 mg.",
        wrong: [
          null,
          "100 mg is the full DAILY total; the order divides it into 2 doses.",
          "110 mg uses the pound weight directly (44 x 5 / 2) without converting to kilograms.",
          "220 mg makes both errors — pounds never converted (44 x 5) and the total never divided into doses."
        ]
      },
      diff: 3,
      secs: 80
    },
    {
      id: "HMA-043",
      sub: "dosage word problems",
      type: "mc",
      q: "A 1-liter bag of IV fluid is ordered to infuse over 8 hours. What is the flow rate in milliliters per hour?",
      choices: ["12.5 mL/hr", "1,250 mL/hr", "8,000 mL/hr", "125 mL/hr"],
      answer: 3,
      rationale: {
        correct: "Convert 1 L = 1,000 mL, then divide volume by time: 1,000 / 8 = 125 mL/hr.",
        wrong: [
          "12.5 mL/hr treats 1 L as 100 mL — a one-decimal slip in the liter conversion.",
          "1,250 mL/hr treats 1 L as 10,000 mL — a decimal slip in the other direction.",
          "8,000 mL/hr multiplies volume by time instead of dividing.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-044",
      sub: "dosage word problems",
      type: "mc",
      q: "An IV order calls for 600 mL to infuse over 5 hours using tubing with a drop factor of 15 gtt/mL. What is the flow rate in drops per minute?",
      choices: ["1,800 gtt/min", "120 gtt/min", "30 gtt/min", "2 gtt/min"],
      answer: 2,
      rationale: {
        correct: "(Volume x drop factor) / minutes: 600 x 15 = 9,000 gtt, and 5 hr = 300 min, so 9,000 / 300 = 30 gtt/min.",
        wrong: [
          "1,800 divides by 5 HOURS instead of 300 minutes — gtt/min requires time in minutes.",
          "120 is 600/5, the mL-per-HOUR rate; the drop factor was never applied.",
          null,
          "2 divides 600 by 300 minutes but skips the 15 gtt/mL drop factor — that is mL/min, not drops/min."
        ]
      },
      diff: 3,
      secs: 80
    },
    {
      id: "HMA-045",
      sub: "dosage word problems",
      type: "mc",
      q: "A patient takes 375 mg of a medication every 8 hours. How many milligrams does the patient receive in 24 hours?",
      choices: ["3,000 mg", "1,125 mg", "750 mg", "1,500 mg"],
      answer: 1,
      rationale: {
        correct: "Every 8 hours means 24 / 8 = 3 doses per day, so 375 x 3 = 1,125 mg.",
        wrong: [
          "3,000 mg multiplies 375 by the 8-hour interval instead of by the number of doses.",
          null,
          "750 mg counts only 2 doses — 24 / 8 is 3, and dropping the overnight dose undercounts.",
          "1,500 mg counts 4 doses, as if the drug were given every 6 hours."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-046",
      sub: "dosage word problems",
      type: "mc",
      q: "A patient is told to take 30 mL of an antacid, but only a standard tablespoon is available. How many tablespoons equal the ordered dose?",
      choices: ["6 tablespoons", "1 tablespoon", "3 tablespoons", "2 tablespoons"],
      answer: 3,
      rationale: {
        correct: "1 tablespoon = 15 mL (which is also 3 teaspoons), so 30 / 15 = 2 tablespoons.",
        wrong: [
          "6 uses the TEASPOON factor (5 mL); a tablespoon is three times that size.",
          "1 treats a tablespoon as 30 mL — 30 mL is a fluid OUNCE, which is 2 tablespoons.",
          "3 treats a tablespoon as 10 mL, splitting the difference between the teaspoon (5) and the true 15.",
          null
        ]
      },
      diff: 1,
      secs: 40
    },
    {
      id: "HMA-047",
      sub: "dosage word problems",
      type: "fill",
      q: "A provider orders 30 mg of a liquid medication. The concentration on hand is 40 mg per 1 mL. How many milliliters should the nurse draw up? Enter your answer as a decimal with a leading zero (for example, 0.25).",
      answer: { accept: ["0.75", "0.750"] },
      rationale: {
        correct: "Desired / on-hand x quantity: (30 / 40) x 1 mL = 0.75 mL. Inverting the formula (40 / 30 = 1.33 mL) overdoses the patient; and the leading zero (0.75, never .75) is standard practice so the decimal point is not missed."
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-048",
      sub: "dosage word problems",
      type: "fill",
      q: "A patient weighing 66 pounds is ordered a medication at 2 mg per kilogram of body weight. How many milligrams should be administered? Enter a whole number.",
      answer: { accept: ["60"] },
      rationale: {
        correct: "Convert pounds to kilograms first: 66 / 2.2 = 30 kg; then 30 x 2 = 60 mg. Skipping the conversion (66 x 2 = 132 mg) more than doubles the dose — weight-based orders are always per KILOGRAM."
      },
      diff: 3,
      secs: 75
    },

    /* ============ BASIC ALGEBRA (7) ============ */

    {
      id: "HMA-049",
      sub: "basic algebra",
      type: "mc",
      q: "Solve for x: x/4 = 12",
      choices: ["48", "3", "16", "8"],
      answer: 0,
      rationale: {
        correct: "Multiply both sides by 4: x = 12 x 4 = 48. Check: 48/4 = 12.",
        wrong: [
          null,
          "3 divides 12 by 4 — since x is already being divided by 4, undoing it requires multiplication.",
          "16 adds 4 to 12 instead of multiplying.",
          "8 subtracts 4 from 12; subtraction undoes addition, not division."
        ]
      },
      diff: 1,
      secs: 40
    },
    {
      id: "HMA-050",
      sub: "basic algebra",
      type: "mc",
      q: "Solve for x: 3x - 7 = 20",
      choices: ["4.3", "27", "9", "81"],
      answer: 2,
      rationale: {
        correct: "Add 7 to both sides: 3x = 27; divide by 3: x = 9. Check: 3(9) - 7 = 20.",
        wrong: [
          "4.3 subtracts 7 from 20 first ((20 - 7)/3) — the -7 moves across by ADDING 7 to both sides.",
          "27 finds 3x = 27 correctly but never divides by the coefficient 3.",
          null,
          "81 multiplies 27 by 3 in the last step instead of dividing."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-051",
      sub: "basic algebra",
      type: "mc",
      q: "Solve for x: 2(x + 5) = 26",
      choices: ["10.5", "8", "18", "3"],
      answer: 1,
      rationale: {
        correct: "Divide both sides by 2: x + 5 = 13; subtract 5: x = 8. Check: 2(8 + 5) = 26.",
        wrong: [
          "10.5 distributes the 2 to x but not to the 5 (2x + 5 = 26) — the 2 multiplies BOTH terms inside the parentheses.",
          null,
          "18 adds 10 instead of subtracting ((26 + 10)/2) — a sign error moving the constant.",
          "3 subtracts 10 from 13 after already dividing by 2; once divided, only 5 is subtracted."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-052",
      sub: "basic algebra",
      type: "mc",
      q: "If a = 4 and b = 3, what is the value of 2a^2 - b?",
      choices: ["61", "13", "26", "29"],
      answer: 3,
      rationale: {
        correct: "Exponent first, then multiply, then subtract: a^2 = 16, 2 x 16 = 32, and 32 - 3 = 29.",
        wrong: [
          "61 squares 2a as a unit ((8)^2 - 3 = 61) — the exponent applies only to a, not to 2a.",
          "13 treats the square as doubling (a^2 as 4 x 2 = 8, then 2 x 8 - 3) — squaring means a x a.",
          "26 subtracts b before multiplying by 2 (2 x (16 - 3)) — multiplication precedes subtraction.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-053",
      sub: "basic algebra",
      type: "mc",
      q: "Four times a number, increased by 7, equals 55. What is the number?",
      choices: ["12", "15.5", "48", "13.75"],
      answer: 0,
      rationale: {
        correct: "Translate: 4x + 7 = 55. Subtract 7: 4x = 48; divide by 4: x = 12.",
        wrong: [
          null,
          "15.5 adds the 7 instead of subtracting ((55 + 7)/4) — 'increased by 7' means 7 was already added, so it must be removed.",
          "48 is the value of 4x, one step short of the number itself.",
          "13.75 divides 55 by 4 immediately, ignoring the '+7' in the translation."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-054",
      sub: "basic algebra",
      type: "mc",
      q: "Solve for x: 6x - 5 = 2x + 19",
      choices: ["3.5", "3", "6", "24"],
      answer: 2,
      rationale: {
        correct: "Subtract 2x from both sides: 4x - 5 = 19; add 5: 4x = 24; divide: x = 6. Check: 6(6) - 5 = 31 = 2(6) + 19.",
        wrong: [
          "3.5 subtracts 5 from 19 instead of adding it (4x = 14) — the -5 crosses over as +5.",
          "3 ADDS the x-coefficients (6 + 2 = 8, then 24/8) — like terms on opposite sides are subtracted.",
          null,
          "24 finds 4x = 24 correctly but never divides by 4."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HMA-055",
      sub: "basic algebra",
      type: "fill",
      q: "Solve for x: 5(x - 3) = 30. Enter a whole number.",
      answer: { accept: ["9"] },
      rationale: {
        correct: "Divide both sides by 5: x - 3 = 6; add 3: x = 9. Check: 5(9 - 3) = 5 x 6 = 30. The common slip is distributing to x only (5x - 3 = 30, giving 6.6) — the 5 multiplies both terms inside the parentheses."
      },
      diff: 2,
      secs: 55
    }
  ]
};
