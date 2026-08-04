window.BANKS = window.BANKS || {};
window.BANKS["hesi-grammar"] = {
  exam: "hesi",
  section: "grammar",
  questions: [
    {
      id: "HGA-001",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The hospital updated ___ visitor policy at the beginning of flu season.\"",
      choices: ["it's", "its", "its'", "their"],
      answer: 1,
      rationale: {
        correct: "\"Its\" is the possessive form of \"it\"; possessive personal pronouns never take an apostrophe.",
        wrong: [
          "\"It's\" is the contraction of \"it is,\" and \"the hospital updated it is visitor policy\" makes no sense.",
          null,
          "\"Its'\" is not a word in English.",
          "\"Their\" is plural, but the antecedent \"hospital\" is singular."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-002",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The box of sterile gloves ___ on the bottom shelf of the supply cart.\"",
      choices: ["is", "are", "were", "be"],
      answer: 0,
      rationale: {
        correct: "The subject is the singular noun \"box,\" so it takes the singular verb \"is\"; the intervening prepositional phrase \"of sterile gloves\" does not change the subject.",
        wrong: [
          null,
          "\"Are\" agrees with \"gloves,\" but \"gloves\" is the object of the preposition, not the subject.",
          "\"Were\" is plural and also shifts the sentence into the past; the subject \"box\" is singular.",
          "\"Be\" is the bare infinitive and cannot serve as the main verb of the sentence."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-003",
      sub: "punctuation",
      type: "mc",
      q: "Which of the following sentences is punctuated correctly?",
      choices: [
        "The patient pressed the call light, the nurse answered within a minute.",
        "The patient pressed the call light the nurse answered within a minute.",
        "The patient pressed the call light; the nurse answered within a minute.",
        "The patient pressed the call light; and the nurse answered within a minute."
      ],
      answer: 2,
      rationale: {
        correct: "A semicolon may join two closely related independent clauses without a conjunction.",
        wrong: [
          "Comma splice — two independent clauses cannot be joined by a comma alone.",
          "Fused run-on — two independent clauses with no punctuation or conjunction between them.",
          null,
          "A semicolon should not be paired with the coordinating conjunction \"and\"; use one or the other."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-004",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The night nurse handed the updated chart to Dr. Reyes and ___.\"",
      choices: ["I", "myself", "my", "me"],
      answer: 3,
      rationale: {
        correct: "\"Me\" is the objective case required for the object of the preposition \"to\"; test it by dropping \"Dr. Reyes and\" — \"handed the chart to me.\"",
        wrong: [
          "\"I\" is subject case and cannot serve as the object of a preposition.",
          "\"Myself\" is reflexive and cannot be an object unless \"I\" is the subject of the sentence.",
          "\"My\" is a possessive modifier, not an object pronoun.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-005",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "Which of the following is a complete sentence?",
      choices: [
        "Because the lab results were delayed until Monday.",
        "Walking to the pharmacy after the morning rounds.",
        "The outpatient clinic opens at seven.",
        "Although the patient felt much better by evening."
      ],
      answer: 2,
      rationale: {
        correct: "A complete sentence needs a subject and a verb and must express a complete thought; \"The outpatient clinic opens at seven\" does all three.",
        wrong: [
          "Fragment — \"because\" makes this a dependent clause with no main clause attached.",
          "Fragment — a participial phrase with no subject and no main verb.",
          null,
          "Fragment — \"although\" leaves this dependent clause unattached to a main clause."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-006",
      sub: "verb tense/form",
      type: "mc",
      q: "Which of the following sentences maintains a consistent verb tense?",
      choices: [
        "The nurse checked the incision and changed the dressing.",
        "The nurse checks the incision and changed the dressing.",
        "The nurse checked the incision and changes the dressing.",
        "The nurse checking the incision and changed the dressing."
      ],
      answer: 0,
      rationale: {
        correct: "Both verbs, \"checked\" and \"changed,\" are past tense, keeping the sentence in a single time frame.",
        wrong: [
          null,
          "Shifts from present (\"checks\") to past (\"changed\") for no reason.",
          "Shifts from past (\"checked\") to present (\"changes\") for no reason.",
          "\"Checking\" is a participle, not a finite verb, so the first half has no complete verb."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-007",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"___ waiting in the lobby until visiting hours begin.\"",
      choices: ["Their", "They're", "There", "There're"],
      answer: 1,
      rationale: {
        correct: "\"They're\" is the contraction of \"they are,\" which fits: \"They are waiting in the lobby.\"",
        wrong: [
          "\"Their\" is a possessive pronoun and cannot replace \"they are.\"",
          null,
          "\"There\" points to a place and leaves the sentence without a subject and verb.",
          "\"There're\" means \"there are,\" producing \"There are waiting in the lobby,\" which is ungrammatical."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-008",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Select the word or phrase that correctly completes the sentence: \"Each of the patients ___ a call light within easy reach.\"",
      choices: ["have", "are having", "were having", "has"],
      answer: 3,
      rationale: {
        correct: "The indefinite pronoun \"each\" is always singular and takes the singular verb \"has\"; \"of the patients\" is only a prepositional phrase.",
        wrong: [
          "\"Have\" is plural and wrongly agrees with \"patients,\" the object of the preposition.",
          "\"Are having\" is plural, and the progressive does not fit a statement of standing fact.",
          "\"Were having\" is plural and shifts the sentence into the past progressive.",
          null
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-009",
      sub: "punctuation",
      type: "mc",
      q: "Which sentence uses the comma correctly?",
      choices: [
        "After the medication was administered, the patient fell asleep.",
        "After the medication was administered the patient, fell asleep.",
        "After, the medication was administered the patient fell asleep.",
        "After the medication was administered the patient fell asleep."
      ],
      answer: 0,
      rationale: {
        correct: "An introductory dependent clause is followed by a comma before the main clause begins.",
        wrong: [
          null,
          "The comma wrongly separates the subject \"the patient\" from its verb \"fell.\"",
          "A comma never follows the subordinating conjunction \"after\" by itself.",
          "Omits the comma required after the introductory dependent clause."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-010",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"Just between you and ___, the new scheduling system is confusing.\"",
      choices: ["I", "myself", "me", "we"],
      answer: 2,
      rationale: {
        correct: "\"Between\" is a preposition, and objects of prepositions take the objective case: \"between you and me.\"",
        wrong: [
          "\"I\" is subject case; \"between you and I\" is a common hypercorrection.",
          "\"Myself\" is reflexive and needs \"I\" as the sentence subject to refer back to.",
          null,
          "\"We\" is subject case and cannot serve as the object of a preposition."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-011",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "Which of the following is a run-on sentence?",
      choices: [
        "The IV pump alarmed, so the nurse checked the line.",
        "The IV pump alarmed the nurse checked the line.",
        "When the IV pump alarmed, the nurse checked the line.",
        "The IV pump alarmed; the nurse checked the line."
      ],
      answer: 1,
      rationale: {
        correct: "A run-on fuses two independent clauses with no punctuation or conjunction: \"The IV pump alarmed\" and \"the nurse checked the line\" collide with nothing between them.",
        wrong: [
          "Correct sentence — a comma plus the coordinating conjunction \"so\" joins the clauses properly.",
          null,
          "Correct sentence — \"when\" subordinates the first clause, so only one independent clause remains.",
          "Correct sentence — a semicolon may join two related independent clauses."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-012",
      sub: "verb tense/form",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"Feeling dizzy after the blood draw, the donor ___ down for ten minutes yesterday.\"",
      choices: ["lay", "laid", "lain", "lied"],
      answer: 0,
      rationale: {
        correct: "The past tense of \"lie\" (to recline) is \"lay\": lie, lay, lain.",
        wrong: [
          null,
          "\"Laid\" is the past tense of \"lay\" (to place) and requires a direct object.",
          "\"Lain\" is the past participle and needs a helping verb, as in \"had lain.\"",
          "\"Lied\" is the past tense of \"lie\" meaning to tell an untruth."
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGA-013",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"Please confirm that ___ immunization records are current before clinical orientation.\"",
      choices: ["you're", "yours", "you", "your"],
      answer: 3,
      rationale: {
        correct: "\"Your\" is the possessive form of \"you\" and correctly modifies \"immunization records.\"",
        wrong: [
          "\"You're\" means \"you are,\" producing \"you are immunization records.\"",
          "\"Yours\" is an absolute possessive that stands alone and cannot modify a noun.",
          "\"You\" is a personal pronoun, not a possessive modifier.",
          null
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-014",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"Neither the aides nor the charge nurse ___ able to reach the on-call physician.\"",
      choices: ["were", "was", "are", "have been"],
      answer: 1,
      rationale: {
        correct: "With \"neither...nor,\" the verb agrees with the nearer subject; \"charge nurse\" is singular, so \"was\" is correct.",
        wrong: [
          "\"Were\" agrees with the farther subject \"aides,\" but the verb must match the subject closer to it.",
          null,
          "\"Are\" is plural; the nearer subject \"charge nurse\" requires a singular verb.",
          "\"Have been\" is plural; the singular nearer subject would take \"has been.\""
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGA-015",
      sub: "punctuation",
      type: "mc",
      q: "Which of the following sentences uses commas correctly?",
      choices: [
        "The crash cart was stocked with gauze tape, and saline.",
        "The crash cart was stocked, with gauze, tape and saline.",
        "The crash cart was stocked with gauze, tape, and saline.",
        "The crash cart, was stocked with gauze, tape, and saline."
      ],
      answer: 2,
      rationale: {
        correct: "Items in a series are separated by commas, with the final comma placed before the conjunction \"and.\"",
        wrong: [
          "Missing the comma between the first two items, \"gauze\" and \"tape.\"",
          "A comma should not separate the verb \"stocked\" from its prepositional phrase.",
          null,
          "A comma should never separate the subject \"crash cart\" from its verb \"was stocked.\""
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-016",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "Which of the following sentences uses pronouns correctly?",
      choices: [
        "The director asked Priya and me to lead the fire drill.",
        "The director asked Priya and I to lead the fire drill.",
        "The director asked Priya and myself to lead the fire drill.",
        "The director asked myself and Priya to lead the fire drill."
      ],
      answer: 0,
      rationale: {
        correct: "\"Me\" is correct as the object of \"asked\"; removing \"Priya and\" leaves the natural \"asked me to lead.\"",
        wrong: [
          null,
          "\"I\" is subject case and cannot function as the object of the verb \"asked.\"",
          "\"Myself\" is reflexive and cannot be an object unless \"I\" is the subject of the sentence.",
          "Same reflexive error, and convention also places the other person before the pronoun."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-017",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "Which of the following sentences is written correctly?",
      choices: [
        "Hurrying down the hallway, the medication cart tipped over.",
        "The medication cart tipped over hurrying down the hallway.",
        "Hurrying down the hallway, the medication cart was tipped over by the aide.",
        "Hurrying down the hallway, the aide tipped over the medication cart."
      ],
      answer: 3,
      rationale: {
        correct: "An opening participial phrase must describe the subject that follows the comma; the aide, not the cart, was hurrying.",
        wrong: [
          "Dangling modifier — the sentence says the medication cart was hurrying.",
          "Misplaced modifier — the phrase still attaches to \"cart,\" which cannot hurry.",
          "Dangling modifier — the passive voice keeps \"cart\" as the subject, so the cart is still doing the hurrying.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-018",
      sub: "verb tense/form",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The patient had ___ two liters of water before the ultrasound.\"",
      choices: ["drank", "drunk", "drink", "drinked"],
      answer: 1,
      rationale: {
        correct: "After the helping verb \"had,\" the past participle \"drunk\" is required: drink, drank, drunk.",
        wrong: [
          "\"Drank\" is the simple past and is not used with a helping verb.",
          null,
          "\"Drink\" is the base present form, not a participle.",
          "\"Drinked\" is not a standard English form; \"drink\" is irregular."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-019",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the pair of words that correctly completes the sentence: \"The patient walked ___ the nurses' station but became ___ short of breath to continue.\"",
      choices: ["to; too", "too; to", "to; two", "two; too"],
      answer: 0,
      rationale: {
        correct: "\"To\" is the preposition showing direction, and \"too\" means \"excessively,\" as in \"too short of breath.\"",
        wrong: [
          null,
          "Reverses the pair — \"too\" cannot show direction, and \"to\" cannot mean \"excessively.\"",
          "\"Two\" is the number 2 and cannot modify \"short of breath.\"",
          "\"Two\" is the number 2 and cannot serve as a preposition of direction."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-020",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Which of the following sentences is grammatically correct?",
      choices: [
        "The wheelchair and the walker is stored in the equipment room.",
        "The wheelchair and the walker was stored in the equipment room.",
        "The wheelchair and the walker are stored in the equipment room.",
        "The wheelchair and the walker has been stored in the equipment room."
      ],
      answer: 2,
      rationale: {
        correct: "Two subjects joined by \"and\" form a compound plural subject, which takes the plural verb \"are.\"",
        wrong: [
          "\"Is\" is singular, but subjects joined by \"and\" are plural.",
          "\"Was\" is singular; the compound subject would require \"were\" or \"are.\"",
          null,
          "\"Has been\" is singular; the compound subject would need \"have been.\""
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-021",
      sub: "punctuation",
      type: "mc",
      q: "Which sentence is punctuated correctly?",
      choices: [
        "Mrs. Okafor who had knee surgery yesterday walked to the doorway.",
        "Mrs. Okafor, who had knee surgery yesterday walked to the doorway.",
        "Mrs. Okafor who had knee surgery yesterday, walked to the doorway.",
        "Mrs. Okafor, who had knee surgery yesterday, walked to the doorway."
      ],
      answer: 3,
      rationale: {
        correct: "A nonrestrictive clause — extra information about an already-identified person — is set off by a pair of commas.",
        wrong: [
          "The clause is nonessential after a named person, so it needs commas on both sides.",
          "Opens the nonrestrictive clause with a comma but never closes it.",
          "Closes the nonrestrictive clause with a comma but never opens it.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-022",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"___ and the respiratory therapist adjusted the ventilator settings together.\"",
      choices: ["She", "Her", "Herself", "Hers"],
      answer: 0,
      rationale: {
        correct: "The pronoun is part of the compound subject, so subject case is required: \"She adjusted the settings.\"",
        wrong: [
          null,
          "\"Her\" is objective case and cannot act as a subject.",
          "\"Herself\" is reflexive and cannot stand alone as a subject.",
          "\"Hers\" is possessive and cannot act as a subject."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-023",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "Which sentence is written most clearly?",
      choices: [
        "The aide handed the tray to the patient covered with plastic wrap.",
        "The aide handed the tray covered with plastic wrap to the patient.",
        "Covered with plastic wrap, the aide handed the tray to the patient.",
        "The aide covered with plastic wrap handed the tray to the patient."
      ],
      answer: 1,
      rationale: {
        correct: "The modifier \"covered with plastic wrap\" sits directly beside \"tray,\" the noun it actually describes.",
        wrong: [
          "Misplaced modifier — it reads as if the patient is covered with plastic wrap.",
          null,
          "Dangling placement — the opening phrase attaches to \"the aide.\"",
          "Misplaced modifier — it describes the aide as covered with plastic wrap."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-024",
      sub: "verb tense/form",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The patient's temperature has ___ steadily since midnight.\"",
      choices: ["rose", "raised", "risen", "rised"],
      answer: 2,
      rationale: {
        correct: "With the helping verb \"has,\" the past participle \"risen\" is required: rise, rose, risen.",
        wrong: [
          "\"Rose\" is the simple past and does not follow a helping verb.",
          "\"Raised\" is from \"raise,\" a transitive verb that needs a direct object.",
          null,
          "\"Rised\" is not a standard English form; \"rise\" is irregular."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-025",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The new diuretic had an immediate ___ on the patient's blood pressure.\"",
      choices: ["affect", "affects", "effected", "effect"],
      answer: 3,
      rationale: {
        correct: "\"Effect\" is the noun meaning \"a result,\" and the article \"an\" signals that a noun is needed.",
        wrong: [
          "\"Affect\" is a verb meaning \"to influence,\" but the article \"an\" calls for a noun.",
          "\"Affects\" is a present-tense verb form, not a noun.",
          "\"Effected\" is a verb form meaning \"brought about,\" not the noun the article requires.",
          null
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-026",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Which sentence is grammatically correct?",
      choices: [
        "The surgical team are scrubbing in for the next procedure.",
        "The surgical team is scrubbing in for the next procedure.",
        "The surgical team were scrubbing in for the next procedure.",
        "The surgical team have been scrubbing in for the next procedure."
      ],
      answer: 1,
      rationale: {
        correct: "A collective noun like \"team\" acting as a single unit takes a singular verb.",
        wrong: [
          "\"Are\" is plural; the team acts as one unit here.",
          null,
          "\"Were\" is plural and needlessly shifts the sentence into the past.",
          "\"Have been\" is plural; a unified collective would take \"has been.\""
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-027",
      sub: "punctuation",
      type: "mc",
      q: "Which sentence uses the semicolon correctly?",
      choices: [
        "The clinic was short-staffed; however, every patient was seen by noon.",
        "The clinic was short-staffed, however, every patient was seen by noon.",
        "The clinic was short-staffed; however every patient was seen by noon.",
        "The clinic was short-staffed however; every patient was seen by noon."
      ],
      answer: 0,
      rationale: {
        correct: "Two independent clauses joined by the conjunctive adverb \"however\" take a semicolon before it and a comma after it.",
        wrong: [
          null,
          "Comma splice — a comma alone cannot join two independent clauses across \"however.\"",
          "Missing the comma that must follow the conjunctive adverb \"however.\"",
          "The semicolon must sit at the clause boundary, before \"however,\" not after it."
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGA-028",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The student ___ scored highest on the dosage exam was offered a tutoring position.\"",
      choices: ["whom", "which", "who", "whose"],
      answer: 2,
      rationale: {
        correct: "\"Who\" is subject case and performs the verb \"scored\" inside the relative clause.",
        wrong: [
          "\"Whom\" is objective case, but the pronoun is the subject of \"scored.\"",
          "\"Which\" refers to things, not people.",
          null,
          "\"Whose\" is possessive and would need a noun to modify."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-029",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "Which sentence demonstrates correct parallel structure?",
      choices: [
        "The patient was advised not only to rest but also drinking more fluids.",
        "The patient was advised not only resting but also to drink more fluids.",
        "The patient was advised not only to rest but also more fluids.",
        "The patient was advised not only to rest but also to drink more fluids."
      ],
      answer: 3,
      rationale: {
        correct: "With \"not only...but also,\" the elements after each part must match in form: \"to rest...to drink.\"",
        wrong: [
          "Pairs the infinitive \"to rest\" with the gerund \"drinking,\" breaking the parallel.",
          "Pairs the gerund \"resting\" with the infinitive \"to drink,\" breaking the parallel.",
          "Pairs the infinitive \"to rest\" with the bare noun phrase \"more fluids,\" breaking the parallel.",
          null
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGA-030",
      sub: "verb tense/form",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"If I ___ you, I would schedule the follow-up appointment before leaving the clinic.\"",
      choices: ["were", "was", "am", "will be"],
      answer: 0,
      rationale: {
        correct: "Contrary-to-fact conditions take the subjunctive \"were\" for every person: \"If I were you.\"",
        wrong: [
          null,
          "\"Was\" is indicative; hypothetical \"if\" clauses require the subjunctive \"were.\"",
          "\"Am\" states a fact, but the sentence describes an unreal condition.",
          "\"Will be\" is future tense; an \"if\" clause stating an unreal condition never takes \"will.\""
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-031",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The nurse asked the patient to ___ down on the examination table.\"",
      choices: ["lay", "laid", "lie", "lain"],
      answer: 2,
      rationale: {
        correct: "\"Lie\" means \"to recline\" and takes no object; the patient is reclining, not placing something.",
        wrong: [
          "\"Lay\" means \"to place\" and requires a direct object, as in \"lay the chart down.\"",
          "\"Laid\" is the past tense of \"lay\" and also requires an object.",
          null,
          "\"Lain\" is the past participle of \"lie\" and needs a helping verb such as \"had.\""
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-032",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"There ___ three patients waiting in the triage area.\"",
      choices: ["is", "are", "was", "be"],
      answer: 1,
      rationale: {
        correct: "In sentences beginning with \"there,\" the verb agrees with the subject that follows it — the plural \"three patients.\"",
        wrong: [
          "\"Is\" is singular, but the true subject, \"three patients,\" is plural.",
          null,
          "\"Was\" is singular and shifts the sentence into the past for no reason.",
          "\"Be\" is the bare form and cannot serve as the main verb."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-033",
      sub: "punctuation",
      type: "mc",
      q: "Which sentence uses the colon correctly?",
      choices: [
        "Please bring: a photo ID, an insurance card, and a current medication list.",
        "Please bring a photo ID: an insurance card, and a current medication list.",
        "The admission packet includes; an ID, an insurance card, and a medication list.",
        "The admission packet includes the following: an ID, an insurance card, and a medication list."
      ],
      answer: 3,
      rationale: {
        correct: "A colon introduces a list only after a complete independent clause, such as \"The admission packet includes the following.\"",
        wrong: [
          "The colon wrongly separates the verb \"bring\" from its objects; the words before it cannot stand alone.",
          "The colon interrupts mid-list; the words before it are not a complete clause.",
          "Uses a semicolon where a colon belongs, and it also splits the verb from its objects.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-034",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"Neither of the male residents remembered to bring ___ badge to the simulation lab.\"",
      choices: ["his", "their", "there", "him"],
      answer: 0,
      rationale: {
        correct: "\"Neither\" is a singular indefinite pronoun, so its possessive must also be singular: \"his\" agrees with the male antecedents.",
        wrong: [
          null,
          "\"Their\" is plural and does not agree with the singular antecedent \"neither.\"",
          "\"There\" indicates place and is not a possessive pronoun.",
          "\"Him\" is an object pronoun, not a possessive."
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGA-035",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "Which of the following is a simple sentence?",
      choices: [
        "The nurse charted while the aide bathed the patient.",
        "The nurse charted, and the aide bathed the patient.",
        "The nurse and the aide finished the morning tasks early.",
        "Although the unit was busy, everyone finished on time."
      ],
      answer: 2,
      rationale: {
        correct: "A simple sentence contains exactly one independent clause; a compound subject (\"the nurse and the aide\") does not add a second clause.",
        wrong: [
          "Complex sentence — \"while\" introduces a dependent clause.",
          "Compound sentence — two independent clauses joined by \", and.\"",
          null,
          "Complex sentence — \"although\" introduces a dependent clause."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-036",
      sub: "verb tense/form",
      type: "mc",
      q: "Select the phrase that correctly completes the sentence: \"By the time the paramedics arrived, a bystander ___ CPR.\"",
      choices: ["has started", "had started", "will have started", "starts"],
      answer: 1,
      rationale: {
        correct: "The past perfect \"had started\" marks the earlier of two past events — the CPR began before the paramedics arrived.",
        wrong: [
          "\"Has started\" is present perfect and cannot describe an action completed before a past event.",
          null,
          "\"Will have started\" is future perfect and clashes with the past-tense \"arrived.\"",
          "\"Starts\" is present tense and clashes with the past-tense \"arrived.\""
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGA-037",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"___ should the unit clerk contact if the pharmacy is closed?\"",
      choices: ["Who's", "Whose", "Who", "Whom"],
      answer: 3,
      rationale: {
        correct: "\"Whom\" is objective case and receives the action of \"contact\": the clerk should contact him or her — whom.",
        wrong: [
          "\"Who's\" is the contraction of \"who is,\" which does not fit the sentence.",
          "\"Whose\" is possessive and would need a noun to modify.",
          "\"Who\" is subject case, but this pronoun is the object of the verb \"contact.\"",
          null
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGA-038",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Select the sentence that is grammatically correct.",
      choices: [
        "Everyone on the night shift were required to attend the safety briefing.",
        "Everyone on the night shift have been required to attend the safety briefing.",
        "Everyone on the night shift was required to attend the safety briefing.",
        "Everyone on the night shift are required to attend the safety briefing."
      ],
      answer: 2,
      rationale: {
        correct: "\"Everyone\" is a singular indefinite pronoun and takes the singular verb \"was,\" regardless of the phrase \"on the night shift.\"",
        wrong: [
          "\"Were\" is plural; \"everyone\" is grammatically singular.",
          "\"Have been\" is plural; singular \"everyone\" would take \"has been.\"",
          null,
          "\"Are\" is plural; \"everyone\" takes \"is\" or \"was.\""
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-039",
      sub: "punctuation",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"All four ___ charts were updated before the shift change.\"",
      choices: ["patients'", "patient's", "patients", "patients's"],
      answer: 0,
      rationale: {
        correct: "A plural noun ending in -s forms its possessive with an apostrophe after the s: the charts belong to all four patients — patients'.",
        wrong: [
          null,
          "\"Patient's\" is singular possessive, but the sentence names four patients.",
          "\"Patients\" is a plain plural with no apostrophe, showing no possession.",
          "\"Patients's\" is not a standard form; plurals ending in -s add only the apostrophe."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-040",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "Which sentence makes it clearest who updated the chart?",
      choices: [
        "When the nurse met with the aide, she updated the chart.",
        "After meeting with the aide, the nurse updated the chart.",
        "The nurse met with the aide, and she updated the chart.",
        "The nurse met with the aide, and the chart was updated by her."
      ],
      answer: 1,
      rationale: {
        correct: "Making \"the nurse\" the stated subject of \"updated\" removes the ambiguous pronoun, so the actor is unmistakable.",
        wrong: [
          "\"She\" could refer to either the nurse or the aide — an ambiguous antecedent.",
          null,
          "\"She\" still has two possible antecedents.",
          "\"Her\" is ambiguous, and the passive voice further hides the actor."
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGA-041",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The care plan includes bathing the patient, monitoring intake, and ___ the wound dressing.\"",
      choices: ["to change", "changed", "having changed", "changing"],
      answer: 3,
      rationale: {
        correct: "Items in a series must share one grammatical form; \"changing\" matches the gerunds \"bathing\" and \"monitoring.\"",
        wrong: [
          "\"To change\" is an infinitive and breaks the gerund series.",
          "\"Changed\" is a past-tense form, not a gerund.",
          "\"Having changed\" is a perfect participle and does not match the simple gerunds.",
          null
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-042",
      sub: "verb tense/form",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The physician has ___ new orders for the evening medications.\"",
      choices: ["written", "wrote", "write", "writed"],
      answer: 0,
      rationale: {
        correct: "After the helping verb \"has,\" the past participle \"written\" is required: write, wrote, written.",
        wrong: [
          null,
          "\"Wrote\" is the simple past and does not follow a helping verb.",
          "\"Write\" is the base present form, not a participle.",
          "\"Writed\" is not a standard English form; \"write\" is irregular."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-043",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"Patients on the revised protocol reported ___ episodes of nausea than before.\"",
      choices: ["less", "fewer", "least", "lesser"],
      answer: 1,
      rationale: {
        correct: "\"Fewer\" is used with countable nouns such as \"episodes\"; \"less\" is reserved for uncountable quantities.",
        wrong: [
          "\"Less\" is for uncountable amounts, such as \"less nausea,\" not counted episodes.",
          null,
          "\"Least\" is superlative and cannot pair with \"than.\"",
          "\"Lesser\" describes rank or degree, not a count of episodes."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-044",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"Either the tablets or the liquid suspension ___ appropriate for this patient.\"",
      choices: ["were", "have been", "is", "are"],
      answer: 2,
      rationale: {
        correct: "With \"either...or,\" the verb agrees with the nearer subject — the singular \"liquid suspension\" — so \"is\" is correct.",
        wrong: [
          "\"Were\" agrees with the farther subject \"tablets\"; the nearer subject controls the verb.",
          "\"Have been\" is plural; the nearer subject \"suspension\" is singular.",
          null,
          "\"Are\" is plural; the verb must match the nearer singular subject."
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGA-045",
      sub: "punctuation",
      type: "mc",
      q: "Which sentence uses quotation marks correctly?",
      choices: [
        "The patient said \"I feel much better today\".",
        "The patient said, \"I feel much better today\".",
        "The patient said \"I feel much better today.\"",
        "The patient said, \"I feel much better today.\""
      ],
      answer: 3,
      rationale: {
        correct: "A comma introduces the quotation after \"said,\" and the period falls inside the closing quotation mark.",
        wrong: [
          "Missing the comma after \"said,\" and the period belongs inside the quotation marks.",
          "The period belongs inside the closing quotation mark in American usage.",
          "Missing the comma that introduces a direct quotation after \"said.\"",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-046",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The nurse who called the rapid response was ___.\"",
      choices: ["her", "she", "herself", "hers"],
      answer: 1,
      rationale: {
        correct: "After a linking verb such as \"was,\" a predicate nominative takes subject case: \"It was she.\"",
        wrong: [
          "\"Her\" is objective case; linking verbs take subject-case pronouns, not objects.",
          null,
          "\"Herself\" is reflexive and needs \"she\" earlier in the clause to refer back to.",
          "\"Hers\" is possessive and would claim ownership rather than identity."
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGA-047",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "Which sentence is written correctly?",
      choices: [
        "To pass the dosage calculation exam, students must review unit conversions.",
        "To pass the dosage calculation exam, unit conversions must be reviewed.",
        "To pass the dosage calculation exam, reviewing unit conversions is necessary.",
        "Unit conversions, to pass the dosage calculation exam, must be reviewed."
      ],
      answer: 0,
      rationale: {
        correct: "The opening infinitive phrase must attach to a subject who can perform it; \"students\" can pass the exam.",
        wrong: [
          null,
          "Dangling modifier — \"unit conversions\" cannot pass an exam.",
          "Dangling modifier — the gerund \"reviewing\" cannot take the exam.",
          "Misplaced modifier — the interrupting phrase still describes \"unit conversions.\""
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGA-048",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the pair of words that correctly completes the sentence: \"Recovery took longer ___ expected; first came bed rest, and ___ came physical therapy.\"",
      choices: ["then; than", "than; than", "than; then", "then; then"],
      answer: 2,
      rationale: {
        correct: "\"Than\" makes the comparison after \"longer,\" and \"then\" marks the next step in time.",
        wrong: [
          "Reverses the pair — \"then\" cannot complete a comparison, and \"than\" cannot mark sequence.",
          "The second blank needs the time word \"then,\" not the comparative \"than.\"",
          null,
          "The first blank needs the comparative \"than\" after \"longer,\" not the time word \"then.\""
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-049",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The data from the quarterly audit ___ reviewed by the quality committee.\"",
      choices: ["was", "is", "has been", "were"],
      answer: 3,
      rationale: {
        correct: "\"Data\" is the plural of \"datum\" and takes a plural verb in formal usage; the phrase \"from the quarterly audit\" does not change the subject.",
        wrong: [
          "\"Was\" is singular; formal usage treats \"data\" as plural.",
          "\"Is\" is singular; plural \"data\" would take \"are.\"",
          "\"Has been\" is singular; the plural subject would take \"have been.\"",
          null
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGA-050",
      sub: "punctuation",
      type: "mc",
      q: "Which sentence uses the apostrophe correctly?",
      choices: [
        "The clinic ordered new thermometer's for every exam room.",
        "The doctors' lounge is down the hall from the elevator.",
        "Three nurse's called in sick before the holiday weekend.",
        "The X-ray's are ready for the radiologist to review."
      ],
      answer: 1,
      rationale: {
        correct: "\"Doctors'\" is a correct plural possessive — the lounge belongs to the doctors, so the apostrophe follows the plural -s.",
        wrong: [
          "\"Thermometer's\" wrongly uses an apostrophe to form a simple plural.",
          null,
          "\"Nurse's\" wrongly uses a possessive form for the plural subject \"nurses.\"",
          "\"X-ray's\" wrongly uses an apostrophe for the simple plural \"X-rays.\""
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-051",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The instructor scheduled an extra review session for ___ before the final exam.\"",
      choices: ["us", "we", "ourselves", "ours"],
      answer: 0,
      rationale: {
        correct: "\"Us\" is objective case, required as the object of the preposition \"for.\"",
        wrong: [
          null,
          "\"We\" is subject case and cannot follow a preposition.",
          "\"Ourselves\" is reflexive and requires \"we\" as the sentence subject; the instructor is the subject here.",
          "\"Ours\" is possessive and cannot serve as the object of \"for.\""
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-052",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "Which sentence states that the patient drank water and nothing else?",
      choices: [
        "Only the patient drank water.",
        "The patient only drank water.",
        "The patient drank only water.",
        "The only patient drank water."
      ],
      answer: 2,
      rationale: {
        correct: "A limiting modifier applies to the word it precedes; placing \"only\" directly before \"water\" limits what was drunk.",
        wrong: [
          "Placing \"only\" before \"the patient\" means no one else drank water.",
          "Placing \"only\" before \"drank\" suggests drinking was the only action taken.",
          null,
          "\"The only patient\" means there was just one patient present."
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGA-053",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"All of the volunteers ___ Marco have completed the TB screening.\"",
      choices: ["accept", "expect", "excepted", "except"],
      answer: 3,
      rationale: {
        correct: "\"Except\" is a preposition meaning \"other than,\" which fits: everyone other than Marco.",
        wrong: [
          "\"Accept\" is a verb meaning \"to receive willingly,\" not a preposition.",
          "\"Expect\" means \"to anticipate\" and does not express exclusion.",
          "\"Excepted\" is a verb form and cannot serve as the simple preposition needed here.",
          null
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGA-054",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"Hand hygiene is the guiding ___ of infection control.\"",
      choices: ["principle", "principal", "principals", "principled"],
      answer: 0,
      rationale: {
        correct: "\"Principle\" is a noun meaning \"a fundamental rule or truth,\" which the article \"the\" and the adjective \"guiding\" call for.",
        wrong: [
          null,
          "\"Principal\" means \"main\" as an adjective or \"head of a school\" as a noun, not a rule.",
          "\"Principals\" is the plural of the school-leader noun and does not fit.",
          "\"Principled\" is an adjective describing a person's ethics, but a noun is needed."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGA-055",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The patient reported that she slept ___ after the evening pain medication.\"",
      choices: ["good", "goodly", "well", "best"],
      answer: 2,
      rationale: {
        correct: "\"Well\" is the adverb that describes how the action \"slept\" was performed.",
        wrong: [
          "\"Good\" is an adjective and cannot modify the verb \"slept.\"",
          "\"Goodly\" is an archaic adjective meaning \"considerable,\" not an adverb of manner.",
          null,
          "\"Best\" is superlative and requires a comparison group."
        ]
      },
      diff: 2,
      secs: 55
    }
  ]
};
