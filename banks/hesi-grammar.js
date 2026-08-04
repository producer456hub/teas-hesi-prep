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
    }
  ]
};
