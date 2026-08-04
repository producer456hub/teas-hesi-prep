/* HESI A2 — Reading Comprehension, Form A
   55 items, all 4-option MC, across 11 short expository passages (150-250 words each).
   Blueprint: main idea 12 | supporting detail 10 | inference 13 | author's purpose/tone 10 | vocabulary in context 10
   Calibration: faithful-to-real HESI (recall-heavy, 13/55 = 24% at diff 3). Inference is the reported trap:
   inference distractors are topic-plausible statements the passage never actually supports. */

window.BANKS = window.BANKS || {};
window.BANKS["hesi-reading"] = {
  exam: "hesi",
  section: "reading",

  passages: {
    p1: {
      title: "The Quiet Discipline of Hand Hygiene",
      kind: "prose",
      text: "Of all the routines that shape a hospital day, hand hygiene is the least dramatic and among the most consequential. Microorganisms travel readily on skin, and a single pair of unwashed hands can carry organisms from one patient's bedside to the next in seconds. Decades of surveillance data show that consistent hand hygiene lowers the rate of hospital-acquired infection, and the practice costs a small fraction of what treating a single bloodstream infection costs.\n\nYet observational studies repeatedly find that health care workers clean their hands during only about half of the moments when guidelines call for it. The reasons are ordinary rather than careless: sinks placed far from the bedside, dispensers that run dry, gloves worn as a substitute for washing, and shifts busy enough that a five-second omission feels invisible. Hospitals that have improved their rates rarely credit a single intervention. They describe a combination of alcohol-based rub placed within arm's reach of every bed, feedback shared with units rather than individuals, and senior clinicians who wash visibly in front of trainees.\n\nThe lesson is uncomfortable. Knowledge is not the barrier; nearly every clinician can recite the guideline. What arrests transmission is a system arranged so that the correct action is also the easiest one. Where hand hygiene is left to memory and good intentions, rates drift downward as soon as the unit becomes busy."
    },
    p2: {
      title: "Fluoride in the Public Water Supply",
      kind: "prose",
      text: "In 1945, Grand Rapids, Michigan, became the first city in the world to add fluoride to its municipal water supply. Public health officials had noticed that children in a few communities whose groundwater naturally contained fluoride had markedly fewer cavities than children elsewhere. The experiment was straightforward: raise fluoride in the drinking water to a similar low concentration and watch what happened to children's teeth over the following decade. Cavity rates fell.\n\nFluoridation spread quickly after that, and by the end of the century most Americans served by public water systems received fluoridated water. The measure is unusual among public health programs because it asks nothing of the individual. A resident does not have to buy a product, keep an appointment, or remember a daily task; the benefit arrives through the tap.\n\nThat same feature is what critics object to. Because the water supply reaches everyone, no one is asked for consent, and the dose a person receives depends on how much water that person happens to drink. Supporters answer that the concentration used is low, that it has been studied for decades, and that dental decay falls hardest on families who can least afford treatment. What is not in dispute is that the argument is only partly scientific. It is also a question about how much a community may decide on behalf of its members."
    },
    p3: {
      title: "What the Sleeping Brain Does with the Day",
      kind: "prose",
      text: "Sleep was long described as a period of rest, a pause in which the brain simply idled until morning. Recordings of electrical activity overturned that picture. The sleeping brain moves through repeating cycles, and in some of those stages it is nearly as active as it is during waking life.\n\nOne line of research concerns memory. In laboratory studies, volunteers who learn a list of word pairs and then sleep for a night recall more of the pairs the next day than volunteers who learn the same list in the morning and stay awake for an equivalent number of hours. Researchers describe the intervening sleep as a period in which the brain consolidates what was learned, replaying patterns of activity recorded earlier and moving them into storage that survives the passage of time. Slow-wave sleep, concentrated in the first half of the night, appears to matter most for factual material; the later, dream-heavy stages have been linked in some studies to skills and procedures.\n\nThe findings are not uniform, and the exact mechanism remains under investigation. Still, the practical implication is modest and consistent across experiments: a student who trades sleep for additional study hours may be dismantling the very process that makes the studying durable. Time awake with the book is not automatically time gained."
    },
    p4: {
      title: "The Pump on Broad Street",
      kind: "prose",
      text: "In the late summer of 1854, cholera swept through a crowded district of London. Within days, hundreds of residents of a few short streets were dead. The prevailing explanation held that the disease traveled through foul air rising from the river and the drains, an idea that fit both the neighborhood's smell and the era's understanding of illness.\n\nA physician named John Snow doubted it. He obtained the addresses of the dead and plotted each one on a street map of the district. The marks clustered, and the cluster had a center: a public water pump on Broad Street. Households a few streets away, drawing water from other pumps, were largely spared. A workhouse with its own well stood inside the outbreak zone and lost almost no one. A brewery whose workers drank the beer they made lost no one at all.\n\nSnow persuaded the local board to remove the pump handle. The outbreak was already declining by then, and his map did not convince the medical establishment; the air theory held on for years afterward. What survived was the method. Snow had treated the pattern of cases as evidence in its own right, and the practice of mapping disease against place and exposure became a foundation of the science now called epidemiology."
    },
    p5: {
      title: "Distance and the Grocery Cart",
      kind: "prose",
      text: "Researchers use the term food desert for a neighborhood where residents live more than about a mile from a full-service grocery store in a city, or more than ten miles in a rural county, and where many households do not own a car. In such places the nearest food outlet is often a convenience store or a gas station, where shelf space goes to items that keep well: chips, candy, soda, canned goods. Fresh produce, when it appears at all, is limited and priced above supermarket rates.\n\nSurveys in these neighborhoods find diets lower in fruits and vegetables, and higher rates of diet-related disease, than in otherwise similar neighborhoods with a supermarket nearby. For years the obvious remedy seemed to be a store. Several cities offered grants and tax incentives to bring supermarkets into underserved areas.\n\nThe results have been mixed. When new stores opened, residents welcomed them, but researchers who tracked purchases found only small changes in what families actually bought. Price, cooking time, kitchen equipment, and long-established preference all continued to shape the cart. The evidence now suggests that distance is one barrier among several rather than the single cause of poor diet. A store within walking distance may be necessary for change without being sufficient to produce it."
    },
    p6: {
      title: "Reading the Panel on the Package",
      kind: "prose",
      text: "The Nutrition Facts panel on packaged food in the United States is arranged to be compared, not simply read. Every number on it -- calories, fat, sodium, sugars -- refers to a single serving, and the serving size printed at the top is the key that unlocks the rest of the panel. A bottle of juice that lists 120 calories may contain two and a half servings, which makes the bottle a 300-calorie drink for anyone who finishes it in one sitting.\n\nThe percentages in the right-hand column answer a different question. They express how much of a day's recommended intake one serving supplies, calculated for a 2,000-calorie diet. A shopper who eats considerably more or less than that amount should treat the percentages as a rough guide rather than a personal figure. As a quick rule, 5 percent or less of the daily value is a modest amount of a nutrient, and 20 percent or more is a lot.\n\nIngredients appear in a separate list, ordered by weight from most to least. That ordering is often more revealing than the panel itself. When a sweetener sits among the first three ingredients, the product is largely sweetener, whatever the front of the box announces."
    },
    p7: {
      title: "How Antibiotics Lose Their Edge",
      kind: "prose",
      text: "An antibiotic does not weaken over time; the bacteria it targets change. In any large bacterial population, a few cells happen to carry a trait that lets them survive the drug. Treatment kills the susceptible majority and leaves those survivors a cleared field in which to multiply. Because bacteria divide in minutes and can pass resistance genes to unrelated neighbors on small loops of DNA, a trait that was rare can become common within a few years.\n\nEvery use of an antibiotic applies this pressure, which is why unnecessary use matters. A course prescribed for a viral sore throat cannot help the patient, but it still selects for resistance among the bacteria that patient already carries. Hospitals watch the problem most closely, because a ward concentrates both antibiotics and vulnerable patients, and because the human gut serves as a reservoir from which resistant organisms spread to others.\n\nPrograms known as antibiotic stewardship try to slow the process without withholding treatment from people who need it: narrowing a broad drug once a laboratory identifies the organism, shortening courses that evidence shows can be shortened, and reviewing prescriptions after two days. None of this reverses resistance that is already established. The aim is narrower and more urgent than that, which is to preserve the drugs that still work."
    },
    p8: {
      title: "Why Trials Hide the Treatment",
      kind: "prose",
      text: "When a person takes a pill believing it may help, measurable things happen. Reported pain drops, nausea eases, sleep improves. The same effects appear when the pill contains nothing active at all, a result documented so often that researchers treat it as a baseline rather than a curiosity. Expectation, the ritual of receiving care, and the natural tendency of many symptoms to improve on their own all contribute to it.\n\nThis creates a problem for anyone testing a new drug. Improvement in a treated group proves little by itself, because part of that improvement would have occurred anyway. The standard solution is to divide volunteers into groups, or arms, and give one arm the drug under study and another an inactive substance prepared to look and taste identical. Neither the volunteers nor the clinicians assessing them are told who received which, an arrangement described as double-blind. The comparison between arms, rather than the change within one of them, is what the trial is designed to produce.\n\nThe design has limits. Some treatments, such as surgery or physical therapy, are difficult to disguise. And a placebo response is not imaginary; it can be strong enough to obscure a genuine but small benefit. Trials are built to separate the two, which is a narrower task than proving a drug useless."
    },
    p9: {
      title: "Sound That Does Not Heal",
      kind: "prose",
      text: "Inside the inner ear, thousands of tiny hair cells convert vibration into the nerve signals the brain reads as sound. Loud noise can bend and break these cells, and in humans they do not grow back. Hearing loss from noise is therefore cumulative: each damaging exposure adds to the last, and the total is carried for life.\n\nThe damage depends on both loudness and time. Ordinary conversation, around 60 decibels, is harmless for as long as it lasts. Heavy city traffic near 85 decibels becomes a concern over a full workday. A rock concert or a chain saw, above 100 decibels, can injure hair cells within minutes. Because the decibel scale is not linear, a jump of 10 decibels represents a tenfold increase in sound energy, which is why small-looking numbers matter.\n\nEarly loss is easy to miss. It usually begins with the high frequencies, so speech still sounds present while consonants blur, and a listener notices trouble in a noisy restaurant before noticing it anywhere else. A temporary shift in the hearing threshold after a concert -- the muffled quiet that lifts by morning -- is a warning rather than a reprieve.\n\nNothing restores a lost hair cell. What does work is unglamorous: distance from the source, lower volume, and inexpensive plugs worn before the ringing starts."
    },
    p10: {
      title: "The Same Molecule, a Different Price",
      kind: "prose",
      text: "A new medication arrives on the market under patent, which gives the company that developed it a period of years in which no one else may sell the same drug. The price during that period reflects the absence of competition as much as the cost of production. When the patent expires, other manufacturers may apply to sell the identical active ingredient, and the price usually falls sharply. Generic versions of common drugs often cost a small fraction of what the brand cost the month before.\n\nRegulators require a generic to contain the same active ingredient in the same amount, and to deliver it into the bloodstream at a comparable rate. What may differ are the inactive parts: the dye, the binder, the coating, the shape of the tablet. These rarely change how a drug works, though a patient with a specific dye allergy has reason to check.\n\nBecause the margin on a generic is thin, several manufacturers may make the same product and any of them may stop. Shortages of old, cheap, essential drugs are common for exactly this reason, and they surprise people who assume that a low price signals low importance. The number on a pharmacy shelf reflects patents, competition, and contracts negotiated out of view. It is a poor guide to what a drug does."
    },
    p11: {
      title: "The Nurse Who Counted",
      kind: "prose",
      text: "Florence Nightingale is remembered for the lamp and the night rounds, an image fixed by newspapers during the Crimean War of the 1850s. The image is accurate and incomplete. When she arrived at the British military hospital at Scutari, wounded soldiers were dying at a rate that alarmed even a public accustomed to wartime loss, and most were dying not of their wounds but of typhus, cholera, and dysentery contracted after admission. The wards were crowded, the drains were blocked, and there was little clean linen.\n\nNightingale organized cleaning, laundry, ventilation, and food. She also kept records. Month by month she tabulated admissions and deaths by cause, and after the war she presented those figures in diagrams designed so that a member of Parliament could grasp them without training in mathematics. A wedge shaded for preventable disease dwarfed the wedge for battle wounds, and the argument was difficult to answer.\n\nThe reforms that followed owed as much to the diagrams as to the lamp. Nightingale spent the remaining decades of her life largely as a writer and adviser rather than a bedside nurse, pressing for sanitary reform in barracks and civilian hospitals and for nursing training organized as a profession. Her most durable contribution may be the habit of measuring what a hospital does to the people inside it."
    }
  },

  questions: [

    /* ===== p1 — hand hygiene (6): MI, MI, SD, INF, APT, VOC ===== */
    {
      id: "HRA-001", sub: "main idea", type: "mc", passage: "p1",
      q: "Which statement best expresses the main idea of the passage?",
      choices: [
        "Treating one bloodstream infection costs far more than a unit's supply of hand rub.",
        "Hospitals should adopt evidence-based routines in every area of patient care.",
        "Hand hygiene reliably lowers infection, yet rates rise mainly where the unit is arranged to make washing easy.",
        "Health care workers clean their hands during about half of the moments guidelines require."
      ],
      answer: 2,
      rationale: {
        correct: "The passage pairs the benefit ('consistent hand hygiene lowers the rate of hospital-acquired infection') with the closing claim that 'what arrests transmission is a system arranged so that the correct action is also the easiest one.' Both halves are needed for the main idea.",
        wrong: [
          "A true supporting detail from paragraph 1 used to support the point, not the point itself.",
          "Overly broad: the passage argues about one specific routine and never generalizes to all of patient care.",
          null,
          "Too narrow: this statistic sets up the problem in paragraph 2 but is not what the passage as a whole asserts."
        ]
      },
      diff: 2, secs: 62
    },
    {
      id: "HRA-002", sub: "main idea", type: "mc", passage: "p1",
      q: "Which of the following would be the most appropriate title for this passage?",
      choices: [
        "Sinks, Dispensers, and Dryers: Equipping the Modern Ward",
        "Why Knowing Is Not Enough: Hand Hygiene as a System Problem",
        "A Complete History of Infection Control in Hospitals",
        "Eliminating Hospital Infection Once and for All"
      ],
      answer: 1,
      rationale: {
        correct: "The passage states plainly that 'knowledge is not the barrier' and then attributes improvement to how a unit is arranged, so a title naming both the knowledge gap and the system framing covers the whole passage.",
        wrong: [
          "Equipment appears only as examples inside paragraph 2; a title built on it is too narrow.",
          null,
          "Overly broad: no history is given beyond a reference to 'decades of surveillance data.'",
          "Overreaches. The passage claims hand hygiene lowers infection rates, never that infection can be eliminated."
        ]
      },
      diff: 2, secs: 65
    },
    {
      id: "HRA-003", sub: "supporting detail", type: "mc", passage: "p1",
      q: "The passage names all of the following as reasons hand-hygiene moments are missed EXCEPT which one?",
      choices: [
        "sinks placed far from the patient's bedside",
        "dispensers that have run empty",
        "gloves worn instead of washing hands",
        "written guidelines missing from the unit"
      ],
      answer: 3,
      rationale: {
        correct: "Paragraph 2 lists distant sinks, dry dispensers, gloves used as a substitute, and busy shifts. Missing guidelines is not on that list, and paragraph 3 says the opposite: 'nearly every clinician can recite the guideline.'",
        wrong: [
          "Stated: 'sinks placed far from the bedside.'",
          "Stated: 'dispensers that run dry.'",
          "Stated: 'gloves worn as a substitute for washing.'",
          null
        ]
      },
      diff: 1, secs: 48
    },
    {
      id: "HRA-004", sub: "inference", type: "mc", passage: "p1",
      q: "Based on the passage, what is the most likely result if a hospital responds to poor hand-hygiene rates only by adding an online training module?",
      choices: [
        "Rates improve briefly and then slip once the unit becomes busy.",
        "Rates fall because staff resent being tested on familiar material.",
        "Infection rates climb above where they stood before the training.",
        "Compliance matches that of hospitals that moved rub to the bedside."
      ],
      answer: 0,
      rationale: {
        correct: "Training addresses knowledge, and the passage says 'knowledge is not the barrier'; it also warns that where hygiene 'is left to memory and good intentions, rates drift downward as soon as the unit becomes busy.' A knowledge-only fix therefore predicts a short-lived gain.",
        wrong: [
          null,
          "Plausible-sounding but unsupported. The passage never mentions staff resentment or attitudes toward training.",
          "Overreaches. Nothing in the passage predicts infection rates rising above baseline.",
          "The passage credits bedside placement plus feedback plus visible modeling, so it gives no basis for expecting training alone to match those results."
        ]
      },
      diff: 3, secs: 80
    },
    {
      id: "HRA-005", sub: "author's purpose/tone", type: "mc", passage: "p1",
      q: "The author's attitude toward the hand-hygiene problem is best described as which of the following?",
      choices: [
        "amused by the excuses that busy clinicians offer",
        "indifferent to whether hand-hygiene rates improve",
        "candid about the gap between knowing and doing",
        "outraged at individual health care workers"
      ],
      answer: 2,
      rationale: {
        correct: "The author calls the lesson 'uncomfortable' and states directly that knowledge is not the barrier, naming the gap between what clinicians know and what they do without softening it. That is candor, not blame.",
        wrong: [
          "No humor appears anywhere; the reasons are presented as legitimate, not as excuses.",
          "The passage recommends specific arrangements, which shows investment rather than indifference.",
          null,
          "Directly contradicted: the reasons are 'ordinary rather than careless,' which shifts blame away from individuals."
        ]
      },
      diff: 2, secs: 62
    },
    {
      id: "HRA-006", sub: "vocabulary in context", type: "mc", passage: "p1",
      q: "As used in the last paragraph, the word 'arrests' most nearly means which of the following?",
      choices: [
        "takes into legal custody",
        "brings to a stop",
        "records for later review",
        "punishes after the fact"
      ],
      answer: 1,
      rationale: {
        correct: "The sentence is 'What arrests transmission is a system arranged so that the correct action is also the easiest one.' What a system does to transmission is halt it, so 'arrests' means stops.",
        wrong: [
          "The common everyday meaning, but transmission is not a person and cannot be detained.",
          null,
          "The passage does mention feedback and data, but 'arrests' modifies transmission, not information.",
          "Nothing in the sentence involves penalty; the object of the verb is a biological process."
        ]
      },
      diff: 2, secs: 58
    },

    /* ===== p2 — fluoridation (5): MI, SD, INF, APT, VOC ===== */
    {
      id: "HRA-007", sub: "main idea", type: "mc", passage: "p2",
      q: "What is the central idea of this passage?",
      choices: [
        "Grand Rapids, Michigan, added fluoride to its water supply in 1945.",
        "Public health programs succeed best when they ask nothing of individuals.",
        "Communities should suspend fluoridation until residents can consent.",
        "Fluoridation cut cavity rates, and the dispute it raises turns partly on consent, not evidence."
      ],
      answer: 3,
      rationale: {
        correct: "The passage reports that 'cavity rates fell' and then closes by stating that 'the argument is only partly scientific. It is also a question about how much a community may decide on behalf of its members.' The main idea joins the result and the values dispute.",
        wrong: [
          "A true opening detail, but the passage moves well past this single fact.",
          "Overly broad: the passage calls this feature 'unusual' for one program and does not rank public health programs generally.",
          "The author reports the consent objection without endorsing a policy change, so this overstates the passage's position.",
          null
        ]
      },
      diff: 2, secs: 64
    },
    {
      id: "HRA-008", sub: "supporting detail", type: "mc", passage: "p2",
      q: "According to the passage, what first suggested to public health officials that fluoride might reduce cavities?",
      choices: [
        "Children in communities with naturally fluoridated groundwater had fewer cavities.",
        "Dentists in Grand Rapids reported fewer fillings after the program began.",
        "Laboratory work had shown that fluoride hardens tooth enamel.",
        "Families who purchased fluoride supplements had healthier teeth."
      ],
      answer: 0,
      rationale: {
        correct: "Paragraph 1 states that officials 'had noticed that children in a few communities whose groundwater naturally contained fluoride had markedly fewer cavities than children elsewhere.' That observation preceded the experiment.",
        wrong: [
          null,
          "This is the result of the Grand Rapids program, not the clue that prompted it. The passage keeps the order clear.",
          "Enamel chemistry is never mentioned; the passage stays at the level of population observation.",
          "Supplements are never discussed. The passage contrasts water delivery with products a resident must buy."
        ]
      },
      diff: 1, secs: 50
    },
    {
      id: "HRA-009", sub: "inference", type: "mc", passage: "p2",
      q: "The passage suggests that critics of fluoridation object most strongly to which feature of the program?",
      choices: [
        "that it reaches residents without asking their individual agreement",
        "the cost of the chemical to municipal water budgets",
        "evidence that the concentration used damages children's teeth",
        "the difficulty of measuring cavity rates in young children"
      ],
      answer: 0,
      rationale: {
        correct: "Paragraph 3 says the very feature supporters praise is what critics object to: 'Because the water supply reaches everyone, no one is asked for consent.' The objection is about consent, not about efficacy.",
        wrong: [
          null,
          "Plausible for a municipal program, but the passage never mentions cost to cities at all.",
          "Unsupported and close to reversed: supporters note the concentration is low and long studied, and no harm claim appears.",
          "Measurement difficulty is never raised; the passage treats the drop in cavity rates as settled."
        ]
      },
      diff: 3, secs: 78
    },
    {
      id: "HRA-010", sub: "author's purpose/tone", type: "mc", passage: "p2",
      q: "Which of the following best describes the author's purpose in the final paragraph?",
      choices: [
        "to entertain readers with an unusual episode from dental history",
        "to argue that fluoridation programs should be discontinued",
        "to show that the disagreement rests partly on values, not only evidence",
        "to describe the chemistry by which fluoride strengthens enamel"
      ],
      answer: 2,
      rationale: {
        correct: "The paragraph presents both objections and answers and then states the point outright: the argument 'is only partly scientific' and is also about what a community may decide for its members.",
        wrong: [
          "The register is expository throughout; no anecdote or humor is offered.",
          "The author gives the supporters' answers as well as the critics' objection and takes no side.",
          null,
          "No chemistry appears anywhere in the passage."
        ]
      },
      diff: 2, secs: 64
    },
    {
      id: "HRA-011", sub: "vocabulary in context", type: "mc", passage: "p2",
      q: "In the second paragraph, the word 'measure' most nearly means which of the following?",
      choices: [
        "a unit used to determine size or amount",
        "an action taken to accomplish a purpose",
        "a standard against which results are judged",
        "a quantity held by a particular container"
      ],
      answer: 1,
      rationale: {
        correct: "The sentence reads 'The measure is unusual among public health programs because it asks nothing of the individual.' Only a policy or action can be a public health program, so 'measure' names an official action.",
        wrong: [
          "The most common everyday sense, but a unit of size cannot be compared to public health programs.",
          null,
          "A real sense of the word, yet the sentence puts 'measure' in the category of programs, not criteria.",
          "This sense would require a physical amount; the subject of the sentence is fluoridation itself."
        ]
      },
      diff: 2, secs: 60
    },

    /* ===== p3 — sleep and memory (5): MI, SD, INF, APT, VOC ===== */
    {
      id: "HRA-012", sub: "main idea", type: "mc", passage: "p3",
      q: "The passage as a whole is mainly concerned with which of the following?",
      choices: [
        "the discovery that brain activity can be recorded during sleep",
        "the reasons students should plan their study time carefully",
        "the difference between slow-wave and dream-heavy sleep stages",
        "evidence that sleep actively strengthens newly learned material"
      ],
      answer: 3,
      rationale: {
        correct: "The passage replaces the idea of sleep as idling with the finding that the sleeping brain 'consolidates what was learned,' and every paragraph serves that claim.",
        wrong: [
          "Electrical recordings are mentioned once, as the evidence that overturned an old view, not as the subject.",
          "Overly broad and off-center: study planning appears only in the last sentences as an implication.",
          "Too narrow: this contrast occupies one sentence inside paragraph 2.",
          null
        ]
      },
      diff: 2, secs: 63
    },
    {
      id: "HRA-013", sub: "supporting detail", type: "mc", passage: "p3",
      q: "According to the passage, slow-wave sleep appears to matter most for which of the following?",
      choices: [
        "physical skills and practiced procedures",
        "factual material such as lists of word pairs",
        "the dreams that a sleeper is able to recall",
        "the total number of hours a person sleeps"
      ],
      answer: 1,
      rationale: {
        correct: "Paragraph 2 states that 'slow-wave sleep... appears to matter most for factual material,' and the factual task described in the studies is the list of word pairs.",
        wrong: [
          "The passage assigns skills and procedures to 'the later, dream-heavy stages,' not slow-wave sleep.",
          null,
          "Dream recall is never discussed; only the dream-heavy stages are named, and for a different function.",
          "Total sleep time is part of the study design, not something slow-wave sleep is said to serve."
        ]
      },
      diff: 2, secs: 58
    },
    {
      id: "HRA-014", sub: "inference", type: "mc", passage: "p3",
      q: "Based on the passage, which of the following can be inferred about the word-pair experiments?",
      choices: [
        "The two groups were compared after equal amounts of time had passed.",
        "Volunteers who slept were more motivated than those who stayed awake.",
        "Volunteers who stayed awake forgot the entire list by the next day.",
        "The result has been reproduced in every laboratory that has tried it."
      ],
      answer: 0,
      rationale: {
        correct: "The passage specifies that the waking group stayed awake 'for an equivalent number of hours,' which means elapsed time was matched and sleep, not time, is the variable being compared.",
        wrong: [
          null,
          "Motivation is never measured or mentioned; a careless reader supplies it to explain the difference.",
          "Overreaches. The sleep group 'recall more of the pairs,' which implies the waking group recalled fewer, not none.",
          "Contradicted by 'the findings are not uniform,' and the absolute 'every' is a warning sign in itself."
        ]
      },
      diff: 3, secs: 80
    },
    {
      id: "HRA-015", sub: "author's purpose/tone", type: "mc", passage: "p3",
      q: "The tone of the final paragraph is best described as which of the following?",
      choices: [
        "enthusiastic about a fully settled scientific breakthrough",
        "critical of students who choose to study late at night",
        "measured, acknowledging uncertainty while drawing a lesson",
        "alarmed at the long-term health effects of lost sleep"
      ],
      answer: 2,
      rationale: {
        correct: "The paragraph concedes that 'the findings are not uniform, and the exact mechanism remains under investigation' and then offers an implication the author calls 'modest.' Hedged claim plus practical takeaway is a measured tone.",
        wrong: [
          "Reversed: the author explicitly withholds certainty about the mechanism.",
          "The author describes a tradeoff without judging students; the word 'may' keeps the claim neutral.",
          null,
          "Health consequences of sleep loss are never raised; the discussion stays on memory."
        ]
      },
      diff: 2, secs: 62
    },
    {
      id: "HRA-016", sub: "vocabulary in context", type: "mc", passage: "p3",
      q: "As used in the passage, the word 'consolidates' most nearly means which of the following?",
      choices: [
        "merges several separate accounts into one",
        "compresses material into a smaller space",
        "repeats information aloud in order to practice",
        "makes more stable and long-lasting"
      ],
      answer: 3,
      rationale: {
        correct: "The clause explains itself: the brain consolidates learning by 'moving them into storage that survives the passage of time.' Surviving over time is durability, so 'consolidates' means makes lasting.",
        wrong: [
          "The familiar financial sense of the word, but nothing in the sentence involves combining separate items.",
          "Physical compression is not described; the passage describes replay and storage, not squeezing.",
          "Rehearsal is a waking activity, and the sentence describes what happens during sleep.",
          null
        ]
      },
      diff: 2, secs: 58
    },

    /* ===== p4 — Broad Street (4): MI, INF, APT, VOC ===== */
    {
      id: "HRA-017", sub: "main idea", type: "mc", passage: "p4",
      q: "Which statement best captures the main point of the passage?",
      choices: [
        "Snow's mapping of cholera deaths introduced a method that outlasted the argument over his conclusion.",
        "A public water pump on Broad Street was the source of London's 1854 cholera outbreak.",
        "Physicians of the nineteenth century misunderstood nearly every disease they treated.",
        "Removing the pump handle brought the 1854 outbreak to an end."
      ],
      answer: 0,
      rationale: {
        correct: "The passage says his map 'did not convince the medical establishment' but that 'what survived was the method,' which became 'a foundation of the science now called epidemiology.' The lasting method is the point.",
        wrong: [
          null,
          "True within the passage, but it is the finding Snow reached rather than what the passage is about.",
          "Overly broad: only one disease and one theory are discussed.",
          "Contradicted: 'the outbreak was already declining by then.'"
        ]
      },
      diff: 2, secs: 66
    },
    {
      id: "HRA-018", sub: "inference", type: "mc", passage: "p4",
      q: "The passage suggests that Snow included the workhouse and the brewery in his account for which reason?",
      choices: [
        "to show that wealthy households were spared while poor ones were not",
        "because both stood inside the outbreak zone but drew water elsewhere",
        "because they proved that beer protects drinkers from cholera",
        "because their records were the only ones available to him"
      ],
      answer: 1,
      rationale: {
        correct: "Both sites sit inside the outbreak area yet had their own water: the workhouse 'with its own well' and the brewery whose workers 'drank the beer they made.' Same location, different water, almost no deaths, which is exactly the comparison that implicates the pump.",
        wrong: [
          "The passage gives no information about the wealth of any household, so this reads a social claim into it.",
          null,
          "The careless-reader trap. Avoiding the pump water explains the outcome; the passage makes no claim about beer being protective.",
          "The passage says Snow obtained 'the addresses of the dead' across the district, so his data were not limited to these two sites."
        ]
      },
      diff: 3, secs: 82
    },
    {
      id: "HRA-019", sub: "author's purpose/tone", type: "mc", passage: "p4",
      q: "The author's primary purpose in this passage is to do which of the following?",
      choices: [
        "persuade readers that the air theory of disease was deliberately dishonest",
        "describe the sights and smells of a London neighborhood in 1854",
        "explain how one investigation established a lasting method of inquiry",
        "warn readers that untreated water still spreads cholera today"
      ],
      answer: 2,
      rationale: {
        correct: "The passage narrates the investigation and then names its legacy: treating 'the pattern of cases as evidence in its own right' became a foundation of epidemiology. Explanation of a method is the purpose.",
        wrong: [
          "The air theory is presented sympathetically, as an idea that 'fit... the era's understanding of illness,' not as dishonesty.",
          "Neighborhood detail appears in a single clause about the smell and is used to explain why the air theory was credible.",
          null,
          "The passage stays in 1854 and makes no claim about present-day conditions."
        ]
      },
      diff: 2, secs: 62
    },
    {
      id: "HRA-020", sub: "vocabulary in context", type: "mc", passage: "p4",
      q: "As used in the second paragraph, the word 'plotted' most nearly means which of the following?",
      choices: [
        "schemed in secret with others",
        "outlined the events of a story",
        "measured the depth of something",
        "marked at a specific location"
      ],
      answer: 3,
      rationale: {
        correct: "Snow 'plotted each one on a street map of the district,' and the next sentence says 'the marks clustered.' Placing marks at addresses on a map is the meaning.",
        wrong: [
          "The common sense of conspiring, which cannot take 'on a street map' as its object.",
          "Also a familiar sense, but the objects being plotted are addresses of the dead, not narrative events.",
          "Depth is never involved; the map records place, not measurement of a shaft or body of water.",
          null
        ]
      },
      diff: 2, secs: 56
    },

    /* ===== p5 — food deserts (6): MI, SD, INF, INF, APT, VOC ===== */
    {
      id: "HRA-021", sub: "main idea", type: "mc", passage: "p5",
      q: "Which of the following best states the main idea of the passage?",
      choices: [
        "Distance from a grocery store contributes to poor diet but does not by itself explain it.",
        "Convenience stores stock items that keep well instead of stocking fresh produce.",
        "Cities are wasting public money on tax incentives offered to supermarkets.",
        "Poverty shapes every health outcome in American urban neighborhoods."
      ],
      answer: 0,
      rationale: {
        correct: "The passage states the conclusion directly: 'distance is one barrier among several rather than the single cause of poor diet,' and adds that a nearby store 'may be necessary... without being sufficient.'",
        wrong: [
          null,
          "A true detail from paragraph 1 that illustrates the problem rather than stating the passage's point.",
          "Overreaches. The passage reports 'mixed' results and 'small changes,' not wasted money.",
          "Overly broad, and the absolute 'every' goes far past a passage focused on food access."
        ]
      },
      diff: 2, secs: 64
    },
    {
      id: "HRA-022", sub: "supporting detail", type: "mc", passage: "p5",
      q: "According to the passage, how do researchers define a food desert in a rural county?",
      choices: [
        "a county in which no household owns an automobile",
        "a county whose only stores are gas stations or pharmacies",
        "a place more than about ten miles from a full-service grocery",
        "a place where fresh produce costs more than it does in a nearby city"
      ],
      answer: 2,
      rationale: {
        correct: "Paragraph 1 gives the rural threshold explicitly: 'more than ten miles in a rural county.' The one-mile figure in the same sentence applies to cities.",
        wrong: [
          "The definition says 'many households do not own a car,' which is not the same as none owning one.",
          "Convenience stores and gas stations describe what is typically nearby, not the definition itself.",
          null,
          "Higher produce prices are a described consequence, not part of how researchers define the term."
        ]
      },
      diff: 1, secs: 50
    },
    {
      id: "HRA-023", sub: "inference", type: "mc", passage: "p5",
      q: "Based on the passage, which conclusion about the new supermarkets is best supported?",
      choices: [
        "Residents avoided the new stores because prices there were too high.",
        "Opening a store removed one barrier while leaving other barriers in place.",
        "The grants and tax incentives were awarded to the wrong neighborhoods.",
        "Diet-related disease disappeared once a supermarket opened nearby."
      ],
      answer: 1,
      rationale: {
        correct: "Residents 'welcomed them,' yet purchases changed only slightly because 'price, cooking time, kitchen equipment, and long-established preference all continued to shape the cart.' Distance was addressed; the other barriers were not.",
        wrong: [
          "Contradicted in part: the passage says residents welcomed the stores, and it never reports supermarket prices as a deterrent.",
          null,
          "Never suggested. The passage evaluates the effect of the stores, not the choice of neighborhoods.",
          "Overreaches to an absolute. The passage reports 'only small changes' in purchasing and no change in disease rates."
        ]
      },
      diff: 3, secs: 78
    },
    {
      id: "HRA-024", sub: "inference", type: "mc", passage: "p5",
      q: "The passage implies that a program hoping to change what families in a food desert eat would most likely need to address which additional factor?",
      choices: [
        "the number of parking spaces available at the new store",
        "the distance from the new store to the nearest public school",
        "the amount of shelf space that is devoted to canned goods",
        "the price of food and the time required to cook it"
      ],
      answer: 3,
      rationale: {
        correct: "The passage names what kept purchases from changing: 'price, cooking time, kitchen equipment, and long-established preference.' Price and cooking time come straight from that list.",
        wrong: [
          "Parking is never mentioned, though it sounds like a reasonable retail concern.",
          "Schools play no part in the passage; distance is discussed only between homes and grocery stores.",
          "Shelf space describes convenience stores in paragraph 1 and is not offered as a lever for change.",
          null
        ]
      },
      diff: 2, secs: 66
    },
    {
      id: "HRA-025", sub: "author's purpose/tone", type: "mc", passage: "p5",
      q: "Which of the following best describes the author's stance toward supermarket incentive programs?",
      choices: [
        "cautious, treating them as helpful but incomplete",
        "enthusiastic, presenting them as the remedy that worked",
        "dismissive, calling them a waste of public money",
        "neutral, declining to report any results at all"
      ],
      answer: 0,
      rationale: {
        correct: "The author reports that results 'have been mixed' and that a nearby store 'may be necessary for change without being sufficient to produce it.' That is measured support with reservations.",
        wrong: [
          null,
          "Reversed: the author says purchases changed only slightly after the stores opened.",
          "Too strong. The passage credits the stores with removing a real barrier and never calls the spending wasteful.",
          "The author does report results, including welcomed stores and small purchasing changes."
        ]
      },
      diff: 2, secs: 62
    },
    {
      id: "HRA-026", sub: "vocabulary in context", type: "mc", passage: "p5",
      q: "As used in the first paragraph, the word 'outlet' most nearly means which of the following?",
      choices: [
        "an electrical socket set into a wall",
        "an opening through which water escapes",
        "a business establishment that sells goods",
        "a way of releasing strong emotion"
      ],
      answer: 2,
      rationale: {
        correct: "The sentence reads 'the nearest food outlet is often a convenience store or a gas station,' and both examples are places that sell food. 'Outlet' names a retail establishment.",
        wrong: [
          "The most common household sense of the word, but a socket cannot be a convenience store.",
          "A legitimate sense in geography, yet the sentence is about buying food, not drainage.",
          null,
          "A figurative sense the passage never uses; the object described is a physical store."
        ]
      },
      diff: 2, secs: 58
    },

    /* ===== p6 — nutrition label (5): MI, SD, INF, APT, VOC ===== */
    {
      id: "HRA-027", sub: "main idea", type: "mc", passage: "p6",
      q: "What is the main focus of this passage?",
      choices: [
        "Serving sizes on beverage bottles are often smaller than the container.",
        "Reading the panel accurately depends on the serving size and on the ingredient list beside it.",
        "Food manufacturers mislead shoppers about what their products contain.",
        "Percent daily values on the panel are calculated for a 2,000-calorie diet."
      ],
      answer: 1,
      rationale: {
        correct: "The passage calls the serving size 'the key that unlocks the rest of the panel' and then says the ingredient ordering 'is often more revealing than the panel itself.' Both are needed to read a label correctly.",
        wrong: [
          "A true supporting example used to demonstrate the serving-size point, not the point itself.",
          null,
          "Overreaches. The passage cautions about front-of-box marketing but never accuses manufacturers of misleading claims about contents.",
          "Too narrow: one fact from paragraph 2."
        ]
      },
      diff: 2, secs: 64
    },
    {
      id: "HRA-028", sub: "supporting detail", type: "mc", passage: "p6",
      q: "According to the passage, the percentages in the right-hand column of the panel are calculated for which diet?",
      choices: [
        "a diet of about 1,500 calories per day",
        "a diet matched to each shopper's own calorie needs",
        "a diet of about 2,500 calories per day",
        "a diet of about 2,000 calories per day"
      ],
      answer: 3,
      rationale: {
        correct: "Paragraph 2 states that the percentages are 'calculated for a 2,000-calorie diet.'",
        wrong: [
          "Not a figure the passage gives; it is a plausible-sounding number.",
          "The opposite of what the passage says. Because the percentages use a fixed reference, a shopper who eats more or less should treat them as 'a rough guide rather than a personal figure.'",
          "Not stated anywhere in the passage.",
          null
        ]
      },
      diff: 1, secs: 46
    },
    {
      id: "HRA-029", sub: "inference", type: "mc", passage: "p6",
      q: "Based on the passage, a shopper comparing two boxes of cereal should be most cautious about which comparison?",
      choices: [
        "reading the two ingredient lists in their printed order",
        "comparing calories per serving when the serving sizes differ",
        "comparing where sugar falls in each ingredient list",
        "comparing the net weight printed on the two boxes"
      ],
      answer: 1,
      rationale: {
        correct: "Every number on the panel 'refers to a single serving,' and the juice example shows how a per-serving figure understates a container. If the serving sizes differ, the per-serving calorie numbers are not comparable as printed.",
        wrong: [
          "The passage recommends this, noting that ingredients are 'ordered by weight from most to least.'",
          null,
          "Also endorsed: a sweetener among the first three ingredients tells the shopper something reliable.",
          "Net weight is not a panel figure the passage warns about, and it does not depend on serving size."
        ]
      },
      diff: 3, secs: 80
    },
    {
      id: "HRA-030", sub: "author's purpose/tone", type: "mc", passage: "p6",
      q: "Why did the author most likely write this passage?",
      choices: [
        "to teach shoppers how to interpret information printed on packaged food",
        "to persuade shoppers to avoid all packaged food entirely",
        "to criticize the agency that designed the Nutrition Facts panel",
        "to entertain readers with surprising facts about sweeteners"
      ],
      answer: 0,
      rationale: {
        correct: "The passage explains what each part of the panel means and supplies working rules, such as 5 percent or less being small and 20 percent or more being a lot. That is instruction.",
        wrong: [
          null,
          "The absolute 'all... entirely' has no support; the passage helps shoppers read packages, not abandon them.",
          "The panel's design is described as useful when read correctly, and no agency is criticized.",
          "The register is practical and expository, not entertaining."
        ]
      },
      diff: 2, secs: 60
    },
    {
      id: "HRA-031", sub: "vocabulary in context", type: "mc", passage: "p6",
      q: "As used in the second paragraph, the word 'modest' most nearly means which of the following?",
      choices: [
        "humble about one's own achievements",
        "plainly and simply dressed",
        "small in quantity",
        "reasonable in price"
      ],
      answer: 2,
      rationale: {
        correct: "The sentence contrasts two amounts: '5 percent or less of the daily value is a modest amount of a nutrient, and 20 percent or more is a lot.' Set against 'a lot,' 'modest' means small.",
        wrong: [
          "The common sense applied to people, which cannot describe a percentage of a nutrient.",
          "Another sense used of people and clothing, not of quantities.",
          null,
          "Price is not discussed in this passage at all."
        ]
      },
      diff: 2, secs: 56
    },

    /* ===== p7 — antibiotic resistance (5): MI, SD, INF, APT, VOC ===== */
    {
      id: "HRA-032", sub: "main idea", type: "mc", passage: "p7",
      q: "Which statement best summarizes the passage as a whole?",
      choices: [
        "Antibiotics gradually lose their chemical strength as they are stored and used.",
        "Hospital wards are the only places where drug resistance is able to develop.",
        "Bacteria can pass resistance genes to neighbors on small loops of DNA.",
        "Antibiotic use selects for resistant survivors, so stewardship tries to protect the drugs that still work."
      ],
      answer: 3,
      rationale: {
        correct: "The passage opens by locating the change in the bacteria rather than the drug, explains that treatment 'leaves those survivors a cleared field,' and ends with the stated aim of stewardship: 'to preserve the drugs that still work.'",
        wrong: [
          "Directly contradicted by the first clause: 'An antibiotic does not weaken over time.'",
          "Overreaches with 'only.' Hospitals 'watch the problem most closely,' but resistance is described as arising wherever antibiotics are used.",
          "A true mechanism detail from paragraph 1, offered as support rather than as the overall point.",
          null
        ]
      },
      diff: 2, secs: 66
    },
    {
      id: "HRA-033", sub: "supporting detail", type: "mc", passage: "p7",
      q: "According to the passage, why does prescribing an antibiotic for a viral sore throat still matter?",
      choices: [
        "It selects for resistance among bacteria the patient already carries.",
        "It shortens the duration of the viral illness only slightly.",
        "It permanently removes the patient's protective gut bacteria.",
        "It keeps the patient contagious for a longer period of time."
      ],
      answer: 0,
      rationale: {
        correct: "Paragraph 2 says such a course 'cannot help the patient, but it still selects for resistance among the bacteria that patient already carries.'",
        wrong: [
          null,
          "Contradicted: the passage says the course 'cannot help the patient,' with no partial benefit claimed.",
          "Unsupported, and absolute. The gut is named as a reservoir for resistant organisms, not as something wiped out.",
          "Contagiousness is never discussed in the passage."
        ]
      },
      diff: 2, secs: 62
    },
    {
      id: "HRA-034", sub: "inference", type: "mc", passage: "p7",
      q: "Based on the passage, it can be inferred that stewardship programs are described as urgent for which reason?",
      choices: [
        "Resistant organisms cause more severe illness than susceptible ones do.",
        "Resistance already established cannot be undone, so remaining drugs must be protected.",
        "New antibiotics can no longer be developed by manufacturers.",
        "Hospitals will soon be required by law to review every prescription."
      ],
      answer: 1,
      rationale: {
        correct: "The last paragraph states that 'none of this reverses resistance that is already established' and then calls the aim 'narrower and more urgent... to preserve the drugs that still work.' Irreversibility is what makes protection urgent.",
        wrong: [
          "Plausible and widely assumed, but the passage never compares the severity of infections caused by resistant and susceptible organisms.",
          null,
          "Overreaches. Drug development is not mentioned anywhere in the passage.",
          "The two-day prescription review is described as a stewardship practice, not as a coming legal requirement."
        ]
      },
      diff: 3, secs: 80
    },
    {
      id: "HRA-035", sub: "author's purpose/tone", type: "mc", passage: "p7",
      q: "The passage is most appropriately described as which of the following?",
      choices: [
        "a persuasive argument that antibiotics should be withheld from most patients",
        "a personal account of one clinician's prescribing habits over a career",
        "an explanation of a mechanism with a cautionary conclusion",
        "a neutral summary that reaches no conclusion of any kind"
      ],
      answer: 2,
      rationale: {
        correct: "Most of the passage explains how selection produces resistance, and the final paragraph closes on a warning framed as urgent, which makes it explanation plus caution.",
        wrong: [
          "Contradicted: stewardship is defined as slowing resistance 'without withholding treatment from people who need it.'",
          "No individual clinician appears; the passage is impersonal throughout.",
          null,
          "The passage does reach a conclusion, namely that the remaining effective drugs must be preserved."
        ]
      },
      diff: 2, secs: 62
    },
    {
      id: "HRA-036", sub: "vocabulary in context", type: "mc", passage: "p7",
      q: "As used in the second paragraph, the word 'reservoir' most nearly means which of the following?",
      choices: [
        "a lake built to store a city's drinking water",
        "a container attached to a medical device",
        "a stored supply of unused medication",
        "a population in which organisms persist"
      ],
      answer: 3,
      rationale: {
        correct: "The sentence says 'the human gut serves as a reservoir from which resistant organisms spread to others.' The gut holds living bacteria that can move on, so 'reservoir' names a persisting source population.",
        wrong: [
          "The most common sense of the word, but the gut is not a constructed body of water.",
          "A real clinical use of 'reservoir,' yet the sentence names the human gut, not equipment.",
          "Stored drugs are never discussed; what is stored here is bacteria.",
          null
        ]
      },
      diff: 3, secs: 72
    },

    /* ===== p8 — placebo and blinding (4): MI, SD, INF, VOC ===== */
    {
      id: "HRA-037", sub: "main idea", type: "mc", passage: "p8",
      q: "Which of the following best expresses the central idea of this passage?",
      choices: [
        "Placebo responses demonstrate that many reported symptoms are imaginary.",
        "Because expectation alone can ease symptoms, a trial compares arms rather than change within one.",
        "Surgery and physical therapy cannot be evaluated in clinical trials.",
        "Inactive pills are prepared to look and taste like the drug under study."
      ],
      answer: 1,
      rationale: {
        correct: "The passage establishes that improvement occurs even with an inactive pill, then states the design consequence directly: 'the comparison between arms, rather than the change within one of them, is what the trial is designed to produce.'",
        wrong: [
          "Directly contradicted: 'a placebo response is not imaginary.'",
          null,
          "Overreaches a limitation. The passage says such treatments are 'difficult to disguise,' not impossible to test.",
          "A true supporting detail about how blinding is achieved, not the passage's overall point."
        ]
      },
      diff: 2, secs: 66
    },
    {
      id: "HRA-038", sub: "supporting detail", type: "mc", passage: "p8",
      q: "According to the passage, in a double-blind trial, who is kept unaware of which treatment a volunteer received?",
      choices: [
        "the volunteers and the clinicians who assess them",
        "the volunteers but not the treating clinicians",
        "the clinicians but not the enrolled volunteers",
        "the statisticians who later analyze the results"
      ],
      answer: 0,
      rationale: {
        correct: "Paragraph 2 states that 'neither the volunteers nor the clinicians assessing them are told who received which, an arrangement described as double-blind.'",
        wrong: [
          null,
          "This describes a single-blind design; the passage specifies that both parties are kept unaware.",
          "The reverse arrangement, and again only one of the two groups.",
          "Statisticians are never mentioned in the passage."
        ]
      },
      diff: 1, secs: 48
    },
    {
      id: "HRA-039", sub: "inference", type: "mc", passage: "p8",
      q: "The passage suggests that a placebo response can create which difficulty for researchers?",
      choices: [
        "It leads volunteers to report symptoms they never actually had.",
        "It prevents any useful comparison between the two study arms.",
        "It shows that the drug being studied has no real effect.",
        "It can hide a benefit that is genuine but small."
      ],
      answer: 3,
      rationale: {
        correct: "The last paragraph says a placebo response 'can be strong enough to obscure a genuine but small benefit,' which is precisely a difficulty for detecting real effects.",
        wrong: [
          "Unsupported. The passage says reported symptoms improve, and it explicitly denies that the response is imaginary.",
          "Reversed: the comparison between arms is the tool the design uses to handle the placebo response.",
          "Contradicted by the closing sentence, which distinguishes separating the two effects from 'proving a drug useless.'",
          null
        ]
      },
      diff: 3, secs: 76
    },
    {
      id: "HRA-040", sub: "vocabulary in context", type: "mc", passage: "p8",
      q: "As used in the passage, the word 'arms' most nearly means which of the following?",
      choices: [
        "the upper limbs of the volunteers being studied",
        "the regional branches of a hospital organization",
        "the groups being compared within a study",
        "the instruments used to measure symptoms"
      ],
      answer: 2,
      rationale: {
        correct: "The passage defines the term as it introduces it: 'divide volunteers into groups, or arms, and give one arm the drug under study and another an inactive substance.'",
        wrong: [
          "The common anatomical sense, but the passage says arms are what volunteers are divided into.",
          "A figurative sense used of institutions, which does not fit a division of participants.",
          null,
          "No measuring instruments are described; assessment is done by clinicians."
        ]
      },
      diff: 2, secs: 58
    },

    /* ===== p9 — noise and hearing (6): MI, SD, INF, INF, APT, VOC ===== */
    {
      id: "HRA-041", sub: "main idea", type: "mc", passage: "p9",
      q: "Which sentence best summarizes the passage?",
      choices: [
        "Noise permanently damages hair cells, so prevention is the practical response.",
        "A jump of 10 decibels represents a tenfold increase in sound energy.",
        "Hearing loss makes conversation hard to follow in noisy restaurants.",
        "Modern life has simply become too loud for the human ear to tolerate."
      ],
      answer: 0,
      rationale: {
        correct: "The passage says damaged hair cells 'do not grow back' and that 'nothing restores a lost hair cell,' then lists what does work: distance, lower volume, and plugs. Irreversible damage plus prevention is the whole passage.",
        wrong: [
          null,
          "A true detail that explains why decibel numbers matter; it supports the argument rather than summarizing it.",
          "Too narrow: an example used to show why early loss goes unnoticed.",
          "Overly broad and not claimed. The passage grades risk by loudness and duration rather than condemning modern life."
        ]
      },
      diff: 2, secs: 64
    },
    {
      id: "HRA-042", sub: "supporting detail", type: "mc", passage: "p9",
      q: "According to the passage, sound above 100 decibels can injure hair cells within what span of time?",
      choices: [
        "over the course of a full workday",
        "within a few minutes",
        "after several weeks of daily exposure",
        "after about one hour of listening"
      ],
      answer: 1,
      rationale: {
        correct: "Paragraph 2 states that a rock concert or chain saw 'above 100 decibels, can injure hair cells within minutes.'",
        wrong: [
          "This is the span given for traffic near 85 decibels, not for sound above 100 decibels.",
          null,
          "No multi-week figure appears; cumulative damage is a separate idea from the time to injury.",
          "Not a figure the passage supplies."
        ]
      },
      diff: 1, secs: 46
    },
    {
      id: "HRA-043", sub: "inference", type: "mc", passage: "p9",
      q: "Based on the passage, why might a person with early noise-induced hearing loss believe that hearing is normal?",
      choices: [
        "Hearing loss caused by noise reverses itself during sleep.",
        "Noise damage affects only one ear during the early stages.",
        "Speech still sounds present even though consonants are blurred.",
        "Ringing in the ears masks the sounds that have been lost."
      ],
      answer: 2,
      rationale: {
        correct: "Paragraph 3 explains that loss 'usually begins with the high frequencies, so speech still sounds present while consonants blur.' Speech that seems audible is what makes the loss easy to miss.",
        wrong: [
          "Contradicted: hair cells 'do not grow back,' and only the temporary threshold shift lifts by morning.",
          "The passage never says one ear is affected before the other; it distinguishes frequencies, not sides.",
          null,
          "The passage mentions ringing once, as a signal to act before, and never links it to masking or concealment."
        ]
      },
      diff: 3, secs: 80
    },
    {
      id: "HRA-044", sub: "inference", type: "mc", passage: "p9",
      q: "The passage suggests that the muffled quiet a listener notices after a loud concert should be treated as which of the following?",
      choices: [
        "evidence that the ear has adapted safely to the noise",
        "a harmless side effect that requires no further attention",
        "proof that permanent hearing loss has already occurred",
        "a signal that the exposure was strong enough to matter"
      ],
      answer: 3,
      rationale: {
        correct: "The passage calls the temporary threshold shift 'a warning rather than a reprieve,' which frames it as a signal about the exposure that produced it.",
        wrong: [
          "Reversed: the word 'warning' rules out reading the shift as safe adaptation.",
          "Also reversed, and the passage explicitly contrasts a warning with a reprieve.",
          "Overreaches in the other direction. The shift 'lifts by morning,' so the passage does not present it as proof of permanent loss.",
          null
        ]
      },
      diff: 2, secs: 66
    },
    {
      id: "HRA-045", sub: "author's purpose/tone", type: "mc", passage: "p9",
      q: "In the final paragraph, the author's tone is best characterized as which of the following?",
      choices: [
        "resigned, treating hearing loss as something unavoidable",
        "practical, recommending simple protective habits",
        "nostalgic for a quieter era that has passed",
        "impatient with people who attend loud concerts"
      ],
      answer: 1,
      rationale: {
        correct: "The paragraph calls what works 'unglamorous' and then lists concrete, low-cost steps: distance, lower volume, and inexpensive plugs. That is a practical closing.",
        wrong: [
          "Only the damage is treated as permanent; the paragraph insists that prevention works, which is the opposite of resignation.",
          null,
          "No earlier era is invoked anywhere in the passage.",
          "Concerts appear as an example of loudness, and the author offers protection rather than reproach."
        ]
      },
      diff: 2, secs: 60
    },
    {
      id: "HRA-046", sub: "vocabulary in context", type: "mc", passage: "p9",
      q: "As used in the third paragraph, the word 'threshold' most nearly means which of the following?",
      choices: [
        "the faintest level at which a sound is detected",
        "the strip of wood beneath a doorway",
        "the loudest sound the ear is able to tolerate",
        "the point at which damage becomes permanent"
      ],
      answer: 0,
      rationale: {
        correct: "The phrase is 'a temporary shift in the hearing threshold,' described as 'the muffled quiet that lifts by morning.' Sounds becoming harder to detect is a shift in the faintest detectable level.",
        wrong: [
          null,
          "The common household meaning, which has nothing to do with a shift in hearing.",
          "An upper limit of tolerance, whereas a muffled quiet describes a change at the quiet end.",
          "Tempting because the passage discusses permanence, but the threshold shift being described is explicitly temporary."
        ]
      },
      diff: 2, secs: 58
    },

    /* ===== p10 — generic drugs (5): MI, SD, INF, APT, VOC ===== */
    {
      id: "HRA-047", sub: "main idea", type: "mc", passage: "p10",
      q: "Which of the following best identifies the main point of the passage?",
      choices: [
        "Generic tablets may differ from brand tablets in dye, binder, and coating.",
        "Patients should request a generic version of every prescription they receive.",
        "A drug's price reflects patents and competition more than how well it works.",
        "Drug shortages are the most serious problem in American health care today."
      ],
      answer: 2,
      rationale: {
        correct: "The passage closes with its thesis: price 'reflects patents, competition, and contracts negotiated out of view. It is a poor guide to what a drug does.'",
        wrong: [
          "A true supporting detail from paragraph 2 rather than the overall point.",
          "Advice the passage never gives; it explains pricing instead of recommending a purchase.",
          null,
          "Overly broad superlative. Shortages are one consequence discussed in the last paragraph, not ranked against all other problems."
        ]
      },
      diff: 2, secs: 64
    },
    {
      id: "HRA-048", sub: "supporting detail", type: "mc", passage: "p10",
      q: "According to the passage, what must a generic drug match in the brand-name product?",
      choices: [
        "the color and shape of the tablet",
        "the inactive binder used to form it",
        "the retail price set by the pharmacy",
        "the active ingredient, amount, and delivery rate"
      ],
      answer: 3,
      rationale: {
        correct: "Paragraph 2 says regulators require 'the same active ingredient in the same amount, and to deliver it into the bloodstream at a comparable rate.'",
        wrong: [
          "The passage lists shape and dye among the parts that 'may differ.'",
          "Binders are also named as inactive parts that may differ.",
          "Price is what changes most, since generics 'often cost a small fraction' of the brand price.",
          null
        ]
      },
      diff: 1, secs: 48
    },
    {
      id: "HRA-049", sub: "inference", type: "mc", passage: "p10",
      q: "Based on the passage, which of the following best explains why an old, inexpensive drug may become hard to obtain?",
      choices: [
        "Thin profits give manufacturers little reason to keep producing it.",
        "Its patent has been renewed by the company that developed it.",
        "Regulators withdraw approval once a drug is several decades old.",
        "Patients stop requesting it because they doubt that it is strong."
      ],
      answer: 0,
      rationale: {
        correct: "The passage links the two directly: 'Because the margin on a generic is thin, several manufacturers may make the same product and any of them may stop. Shortages... are common for exactly this reason.'",
        wrong: [
          null,
          "Contradicted by paragraph 1, where patent expiration is what allows generics in the first place.",
          "Never stated. Regulators appear only as the body setting equivalence requirements.",
          "Plausible and echoes the passage's remark that people assume low price signals low importance, but patient demand is never given as the cause of shortages."
        ]
      },
      diff: 3, secs: 78
    },
    {
      id: "HRA-050", sub: "author's purpose/tone", type: "mc", passage: "p10",
      q: "What is the author's primary purpose in writing this passage?",
      choices: [
        "to warn readers that generic drugs are less reliable than brand-name drugs",
        "to explain what does and does not account for the price of a medication",
        "to praise regulators for the standards they apply to generic manufacturers",
        "to argue that the length of drug patents should be shortened by law"
      ],
      answer: 1,
      rationale: {
        correct: "The passage traces price through patent, competition, and contracts, and states that price 'is a poor guide to what a drug does.' Explaining the sources of price is the purpose.",
        wrong: [
          "Contradicted: generics must match the active ingredient, amount, and delivery rate, and inactive differences 'rarely change how a drug works.'",
          null,
          "Regulators are described neutrally as setting requirements; no praise is offered.",
          "Patents are explained, not criticized, and no legal change is proposed."
        ]
      },
      diff: 2, secs: 62
    },
    {
      id: "HRA-051", sub: "vocabulary in context", type: "mc", passage: "p10",
      q: "As used in the last paragraph, the word 'margin' most nearly means which of the following?",
      choices: [
        "the blank border along the edge of a printed page",
        "the amount by which one total exceeds another",
        "the profit that remains after costs are paid",
        "the outer edge of a wound or an opening"
      ],
      answer: 2,
      rationale: {
        correct: "The sentence explains that because 'the margin on a generic is thin,' manufacturers may stop making it. Only a profit margin would give a maker a reason to leave the market.",
        wrong: [
          "The most familiar everyday sense, but a page border cannot be thin in a way that halts production.",
          "A real sense of the word, as in a margin of victory, yet nothing here is being compared or exceeded.",
          null,
          "An anatomical sense that does not fit a sentence about manufacturers and supply."
        ]
      },
      diff: 3, secs: 70
    },

    /* ===== p11 — Nightingale (4): MI, SD, INF, APT ===== */
    {
      id: "HRA-052", sub: "main idea", type: "mc", passage: "p11",
      q: "The passage is primarily about which of the following?",
      choices: [
        "the conditions inside the wards at Scutari during the Crimean War",
        "the reasons newspapers of the 1850s admired Florence Nightingale",
        "the history of infectious disease within the British army",
        "Nightingale's use of records and diagrams to press for sanitary reform"
      ],
      answer: 3,
      rationale: {
        correct: "The passage calls the lamp image 'accurate and incomplete,' emphasizes that 'she also kept records' presented in persuasive diagrams, and concludes that her most durable contribution may be 'the habit of measuring what a hospital does to the people inside it.'",
        wrong: [
          "A supporting detail from paragraph 1 that establishes why reform was needed.",
          "Too narrow, and the newspapers are mentioned only to introduce the image the passage then complicates.",
          "Overly broad: the passage covers one hospital and one reformer, not army disease history.",
          null
        ]
      },
      diff: 2, secs: 64
    },
    {
      id: "HRA-053", sub: "supporting detail", type: "mc", passage: "p11",
      q: "According to the passage, most of the soldiers who died at Scutari died of what cause?",
      choices: [
        "wounds received in battle",
        "starvation caused by a shortage of food",
        "diseases contracted after they were admitted",
        "injuries sustained during transport to the hospital"
      ],
      answer: 2,
      rationale: {
        correct: "Paragraph 1 states that 'most were dying not of their wounds but of typhus, cholera, and dysentery contracted after admission.'",
        wrong: [
          "Explicitly ruled out by the phrase 'not of their wounds,' and the diagram wedge for battle wounds was the smaller one.",
          "Food is listed among what Nightingale organized, but starvation is never given as a cause of death.",
          null,
          "Transport is never mentioned in the passage."
        ]
      },
      diff: 2, secs: 56
    },
    {
      id: "HRA-054", sub: "inference", type: "mc", passage: "p11",
      q: "Based on the passage, Nightingale most likely designed her diagrams for which audience?",
      choices: [
        "officials who had no training in mathematics",
        "nurses enrolled in her new training program",
        "physicians who disputed the germ theory of disease",
        "newspaper readers who were following the war"
      ],
      answer: 0,
      rationale: {
        correct: "The passage says she presented her figures 'in diagrams designed so that a member of Parliament could grasp them without training in mathematics,' which names both the audience and the reason for the visual form.",
        wrong: [
          null,
          "Nursing training is mentioned as a later cause she pressed for, never as the audience for the diagrams.",
          "Germ theory is not discussed anywhere in this passage.",
          "Newspapers appear only as the source of the lamp image, and the passage never links them to the diagrams."
        ]
      },
      diff: 3, secs: 78
    },
    {
      id: "HRA-055", sub: "author's purpose/tone", type: "mc", passage: "p11",
      q: "Which of the following best describes the author's attitude toward the familiar image of Nightingale with her lamp?",
      choices: [
        "dismissive, treating the image as an invention of the press",
        "respectful, while treating the image as an incomplete account",
        "indifferent, mentioning it only to fill out the opening",
        "critical, blaming it for delaying sanitary reform"
      ],
      answer: 1,
      rationale: {
        correct: "The author writes that 'the image is accurate and incomplete' and later that the reforms 'owed as much to the diagrams as to the lamp,' which credits the image while adding to it.",
        wrong: [
          "Ruled out by the word 'accurate'; the author does not call the image false.",
          null,
          "The image is not filler; the whole passage is organized as a correction and expansion of it.",
          "The passage never blames the image for any delay in reform."
        ]
      },
      diff: 2, secs: 64
    }

  ]
};
