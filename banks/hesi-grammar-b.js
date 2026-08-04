window.BANKS = window.BANKS || {};
window.BANKS["hesi-grammar-b"] = {
  exam: "hesi",
  section: "grammar",
  form: "B",
  questions: [
    {
      id: "HGB-001",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The nursing student had to choose ___ four different clinical rotations.\"",
      choices: ["among", "between", "beside", "besides"],
      answer: 0,
      rationale: {
        correct: "\"Among\" is used when a choice involves three or more things; four rotations are named here.",
        wrong: [
          null,
          "\"Between\" is used for exactly two items, but this sentence names four rotations.",
          "\"Beside\" means physically next to something and expresses no choice at all.",
          "\"Besides\" means \"in addition to\" and does not express selection from a group."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGB-002",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The list of approved abbreviations ___ posted beside every workstation.\"",
      choices: ["is", "are", "were", "have been"],
      answer: 0,
      rationale: {
        correct: "The subject is the singular noun \"list,\" so it takes the singular verb \"is\"; an intervening prepositional phrase never changes the number of the subject.",
        wrong: [
          null,
          "\"Are\" agrees with \"abbreviations,\" which is the object of the preposition, not the subject.",
          "\"Were\" is plural and also shifts the sentence into the past for no reason.",
          "\"Have been\" is plural; the singular subject \"list\" would take \"has been.\""
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGB-003",
      sub: "punctuation",
      type: "mc",
      q: "Which sentence correctly joins two independent clauses?",
      choices: [
        "The pharmacy delivered the antibiotic and the nurse hung it immediately.",
        "The pharmacy delivered the antibiotic, and the nurse hung it immediately.",
        "The pharmacy delivered the antibiotic, and, the nurse hung it immediately.",
        "The pharmacy delivered, the antibiotic and the nurse hung it immediately."
      ],
      answer: 1,
      rationale: {
        correct: "When a coordinating conjunction such as \"and\" joins two independent clauses, a comma is placed before the conjunction.",
        wrong: [
          "Two independent clauses joined by \"and\" require a comma before the conjunction; without it the sentence runs on.",
          null,
          "The extra comma after \"and\" wrongly cuts the conjunction off from the clause it introduces.",
          "The comma wrongly separates the verb \"delivered\" from its direct object \"the antibiotic.\""
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-004",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "In which sentence is the pronoun used correctly?",
      choices: [
        "Myself and the respiratory therapist reviewed the ventilator settings.",
        "Me and the respiratory therapist reviewed the ventilator settings.",
        "The respiratory therapist and me reviewed the ventilator settings.",
        "The respiratory therapist and I reviewed the ventilator settings."
      ],
      answer: 3,
      rationale: {
        correct: "The pronoun is part of the compound subject, so subject case is required; drop the other person and \"I reviewed the settings\" is what remains.",
        wrong: [
          "\"Myself\" is reflexive and cannot serve as a subject; it needs an earlier \"I\" to refer back to.",
          "\"Me\" is objective case and cannot be the subject of \"reviewed.\"",
          "\"Me\" is still objective case even when it follows the other person's name.",
          null
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGB-005",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "Which of the following is a sentence fragment?",
      choices: [
        "The triage nurse recorded the vital signs.",
        "Which the triage nurse recorded before the physician arrived.",
        "Record the vital signs before the physician arrives.",
        "The vital signs were recorded by the triage nurse."
      ],
      answer: 1,
      rationale: {
        correct: "A fragment has no independent clause; the relative pronoun \"which\" turns this word group into a dependent clause with no main clause attached.",
        wrong: [
          "Complete sentence — subject \"triage nurse\" plus the verb \"recorded.\"",
          null,
          "Complete sentence — an imperative whose subject \"you\" is understood.",
          "Complete sentence — subject \"vital signs\" plus the passive verb \"were recorded.\""
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGB-006",
      sub: "verb tense/form",
      type: "mc",
      q: "Which sentence keeps the verb tense consistent?",
      choices: [
        "The aide restocks the linen cart and emptied the hamper.",
        "The aide restocked the linen cart and empties the hamper.",
        "The aide restocks the linen cart and empties the hamper.",
        "The aide restocking the linen cart and empties the hamper."
      ],
      answer: 2,
      rationale: {
        correct: "Both verbs, \"restocks\" and \"empties,\" are present tense, so the sentence stays in a single time frame.",
        wrong: [
          "Shifts from the present \"restocks\" to the past \"emptied\" with nothing to justify the change.",
          "Shifts from the past \"restocked\" to the present \"empties\" with nothing to justify the change.",
          null,
          "\"Restocking\" is a participle, not a finite verb, so the first half of the sentence has no working verb."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGB-007",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"A brief hand-off report should ___ every shift change on the unit.\"",
      choices: ["proceed", "proceeds", "preceded", "precede"],
      answer: 3,
      rationale: {
        correct: "\"Precede\" means \"to come before,\" which is what the report does in relation to the shift change.",
        wrong: [
          "\"Proceed\" means \"to go forward\" or \"to continue,\" not \"to come before.\"",
          "\"Proceeds\" is the wrong word and also the wrong form after the modal \"should.\"",
          "\"Preceded\" is past tense; the modal \"should\" must be followed by the base form.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-008",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"Neither of the portable ventilators ___ available this afternoon.\"",
      choices: ["are", "were", "is", "have been"],
      answer: 2,
      rationale: {
        correct: "\"Neither\" is a singular indefinite pronoun and takes a singular verb; \"of the portable ventilators\" is only a prepositional phrase.",
        wrong: [
          "\"Are\" is plural and wrongly agrees with \"ventilators,\" the object of the preposition.",
          "\"Were\" is plural and also shifts the sentence into the past.",
          null,
          "\"Have been\" is plural; the singular subject \"neither\" would take \"has been.\""
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-009",
      sub: "punctuation",
      type: "mc",
      q: "Which sentence places the comma correctly?",
      choices: [
        "Reviewing the intake form the nurse noticed a drug allergy.",
        "Reviewing, the intake form the nurse noticed a drug allergy.",
        "Reviewing the intake form, the nurse noticed a drug allergy.",
        "Reviewing the intake form the nurse, noticed a drug allergy."
      ],
      answer: 2,
      rationale: {
        correct: "An introductory participial phrase is separated from the main clause that follows it by a comma.",
        wrong: [
          "Omits the comma that must follow an introductory participial phrase.",
          "The comma wrongly splits the participle \"reviewing\" from its object \"the intake form.\"",
          null,
          "The comma wrongly separates the subject \"the nurse\" from its verb \"noticed.\""
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGB-010",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"___ float nurses cover three different units during a single shift.\"",
      choices: ["Us", "We", "Ourselves", "Ours"],
      answer: 1,
      rationale: {
        correct: "Drop the noun and test the pronoun alone — \"We cover three units\" — so the subject-case \"We\" is required before \"float nurses.\"",
        wrong: [
          "\"Us\" is objective case and cannot serve as the subject of \"cover.\"",
          null,
          "\"Ourselves\" is reflexive and cannot stand alone as a subject.",
          "\"Ours\" is a possessive form and cannot act as a subject."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-011",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "Which revision repairs the run-on sentence \"The monitor alarmed the nurse silenced it\"?",
      choices: [
        "The monitor alarmed, the nurse silenced it.",
        "When the monitor alarmed, the nurse silenced it.",
        "The monitor alarmed the nurse silenced it, quickly.",
        "The monitor alarmed and the nurse, silenced it."
      ],
      answer: 1,
      rationale: {
        correct: "Subordinating the first clause with \"when\" leaves only one independent clause, which eliminates the fused sentence.",
        wrong: [
          "Trades the run-on for a comma splice; a comma alone still cannot join two independent clauses.",
          null,
          "Still a fused sentence — adding a comma before \"quickly\" does nothing to separate the two clauses.",
          "The comma belongs before the coordinating conjunction \"and,\" not after the subject of the second clause."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-012",
      sub: "verb tense/form",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The infusion had already ___ when the family arrived.\"",
      choices: ["began", "begin", "beginned", "begun"],
      answer: 3,
      rationale: {
        correct: "After the helping verb \"had,\" the past participle is required: begin, began, begun.",
        wrong: [
          "\"Began\" is the simple past and is never used after a helping verb.",
          "\"Begin\" is the base present form, not a past participle.",
          "\"Beginned\" is not a standard English form; \"begin\" is an irregular verb.",
          null
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGB-013",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"Scanning the armband helps ___ that the right patient receives the medication.\"",
      choices: ["assure", "insure", "ensure", "assured"],
      answer: 2,
      rationale: {
        correct: "\"Ensure\" means \"to make certain that a result happens\"; you ensure an outcome, assure a person, and insure property.",
        wrong: [
          "\"Assure\" means \"to remove someone's doubt\" and needs a human object, as in \"assure the family.\"",
          "\"Insure\" refers to financial protection against loss or damage.",
          null,
          "\"Assured\" is the wrong word and also the wrong form after \"helps.\""
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-014",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"Neither the pharmacist nor the technicians ___ available to verify the order.\"",
      choices: ["is", "was", "are", "has been"],
      answer: 2,
      rationale: {
        correct: "With \"neither...nor,\" the verb agrees with the subject nearer to it, and the nearer subject \"technicians\" is plural.",
        wrong: [
          "\"Is\" agrees with the farther subject \"pharmacist,\" but the nearer subject controls the verb.",
          "\"Was\" is singular and also shifts the sentence into the past.",
          null,
          "\"Has been\" is singular; the nearer plural subject would require \"have been.\""
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-015",
      sub: "punctuation",
      type: "mc",
      q: "In which sentence are the commas placed correctly?",
      choices: [
        "The patient presented with pale, clammy skin.",
        "The patient presented with pale clammy, skin.",
        "The patient presented with, pale clammy skin.",
        "The patient presented with pale, clammy, skin."
      ],
      answer: 0,
      rationale: {
        correct: "Coordinate adjectives, which modify the same noun independently, are separated by a comma, but no comma follows the last adjective.",
        wrong: [
          null,
          "The comma belongs between the two adjectives, not between the last adjective and the noun.",
          "A comma should never separate the preposition \"with\" from its object.",
          "The second comma wrongly separates the adjective \"clammy\" from the noun \"skin.\""
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGB-016",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The case manager with ___ I spoke will call the family this afternoon.\"",
      choices: ["who", "whose", "who's", "whom"],
      answer: 3,
      rationale: {
        correct: "\"Whom\" is objective case, and this pronoun is the object of the preposition \"with\": I spoke with her, so with whom.",
        wrong: [
          "\"Who\" is subject case and cannot serve as the object of a preposition.",
          "\"Whose\" is possessive and would have to modify a noun.",
          "\"Who's\" is the contraction of \"who is,\" which cannot follow the preposition \"with.\"",
          null
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGB-017",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "In which sentence is the opening phrase used correctly?",
      choices: [
        "After reviewing the chart, the allergy was noted by the nurse.",
        "After reviewing the chart, the allergy stood out immediately.",
        "After reviewing the chart, the nurse noted the allergy.",
        "The allergy, after reviewing the chart, was noted immediately."
      ],
      answer: 2,
      rationale: {
        correct: "An introductory phrase must describe the subject that follows it, and the nurse, not the allergy, did the reviewing.",
        wrong: [
          "Dangling modifier — the passive voice makes \"the allergy\" the subject, so the allergy appears to review the chart.",
          "Dangling modifier — an allergy cannot review a chart.",
          null,
          "Misplaced modifier — moving the phrase inside the sentence still attaches it to \"the allergy.\""
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-018",
      sub: "verb tense/form",
      type: "mc",
      q: "Select the phrase that correctly completes the sentence: \"Ms. Delgado ___ on the oncology unit since 2019.\"",
      choices: ["works", "worked", "has worked", "is working"],
      answer: 2,
      rationale: {
        correct: "An action that began in the past and continues into the present takes the present perfect, which \"since\" plus a starting year signals.",
        wrong: [
          "\"Works\" is simple present and cannot cover a span reaching back to 2019.",
          "\"Worked\" is simple past and implies she no longer works there.",
          null,
          "\"Is working\" is present progressive and describes only what is happening at this moment."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-019",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"A surprising ___ of visitors signed in at the front desk before noon.\"",
      choices: ["number", "amount", "quantity", "deal"],
      answer: 0,
      rationale: {
        correct: "\"Number\" is used with countable nouns such as \"visitors\"; \"amount\" is reserved for things that cannot be counted individually.",
        wrong: [
          null,
          "\"Amount\" applies to uncountable mass quantities, such as the amount of blood loss.",
          "\"Quantity\" also measures bulk rather than counting individual people.",
          "\"Deal\" appears in the idiom \"a great deal of\" and likewise pairs with uncountable nouns."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGB-020",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The ethics committee ___ its recommendation at the end of each quarter.\"",
      choices: ["submit", "submits", "have submitted", "are submitting"],
      answer: 1,
      rationale: {
        correct: "A collective noun such as \"committee\" acting as one unit takes a singular verb, and the singular possessive \"its\" confirms the singular reading.",
        wrong: [
          "\"Submit\" is the plural form, but the committee is acting here as a single body.",
          null,
          "\"Have submitted\" is plural; a unified collective noun takes \"has submitted.\"",
          "\"Are submitting\" is plural and also describes an action in progress rather than a routine event."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-021",
      sub: "punctuation",
      type: "mc",
      q: "Which sentence is correctly punctuated?",
      choices: [
        "The medication, that was recalled last week, is no longer stocked.",
        "The medication that was recalled last week, is no longer stocked.",
        "The medication, that was recalled last week is no longer stocked.",
        "The medication that was recalled last week is no longer stocked."
      ],
      answer: 3,
      rationale: {
        correct: "A restrictive clause tells the reader which medication is meant, so it is essential to the sentence and takes no commas.",
        wrong: [
          "The clause is essential for identifying the medication, so it must not be set off by commas.",
          "The single comma wrongly separates the subject \"medication\" from its verb \"is.\"",
          "Opens with a comma the essential clause should not have and then never closes it.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-022",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The surgeon and the anesthesiologist reviewed ___ notes before the case.\"",
      choices: ["his", "her", "their", "his or her"],
      answer: 2,
      rationale: {
        correct: "Two antecedents joined by \"and\" form a plural antecedent, so the plural possessive \"their\" refers back to both people.",
        wrong: [
          "\"His\" is singular and refers to only one of the two people named.",
          "\"Her\" is singular and likewise covers only one of the two.",
          null,
          "\"His or her\" is singular; two antecedents joined by \"and\" require a plural possessive."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGB-023",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "Which sentence is the clearest?",
      choices: [
        "The aide brought a warm blanket to the patient with a torn corner.",
        "The aide brought a warm blanket with a torn corner to the patient.",
        "With a torn corner, the aide brought a warm blanket to the patient.",
        "The aide with a torn corner brought a warm blanket to the patient."
      ],
      answer: 1,
      rationale: {
        correct: "A modifying phrase belongs next to the word it describes, and \"with a torn corner\" sits beside \"blanket,\" the thing that is torn.",
        wrong: [
          "Misplaced modifier — as written, the patient has the torn corner.",
          null,
          "Dangling placement — an opening phrase attaches to the subject, making the aide torn.",
          "Misplaced modifier — the phrase now describes the aide as having a torn corner."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-024",
      sub: "verb tense/form",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The resident should have ___ to the code as soon as the page went out.\"",
      choices: ["went", "go", "going", "gone"],
      answer: 3,
      rationale: {
        correct: "After \"should have,\" English requires the past participle, and the forms are go, went, gone.",
        wrong: [
          "\"Went\" is the simple past and cannot follow the helping verb \"have.\"",
          "\"Go\" is the base form and cannot complete a perfect construction after \"have.\"",
          "\"Going\" is the present participle and would need \"been\" in front of it.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-025",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The physical therapist asked the patient to walk ten feet ___ than yesterday.\"",
      choices: ["farther", "further", "farthest", "furthest"],
      answer: 0,
      rationale: {
        correct: "\"Farther\" refers to measurable physical distance, and ten feet is a measured distance.",
        wrong: [
          null,
          "\"Further\" refers to extent or degree, as in further discussion, not to measured distance.",
          "\"Farthest\" is superlative and cannot pair with \"than.\"",
          "\"Furthest\" is also superlative and cannot pair with \"than.\""
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-026",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"On the top shelf of the supply closet ___ the extra irrigation trays.\"",
      choices: ["is", "was", "are", "has been"],
      answer: 2,
      rationale: {
        correct: "When a sentence is inverted, the verb still agrees with the true subject, which here follows the verb: the plural \"trays.\"",
        wrong: [
          "\"Is\" is singular, but the true subject \"trays\" is plural.",
          "\"Was\" is singular and also shifts the sentence into the past.",
          null,
          "\"Has been\" is singular; the plural subject would require \"have been.\""
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-027",
      sub: "punctuation",
      type: "mc",
      q: "Which sentence separates the items in the list correctly?",
      choices: [
        "The conference drew nurses from Reno, Nevada, Boise, Idaho, and Salem, Oregon.",
        "The conference drew nurses from Reno, Nevada; Boise, Idaho; and Salem, Oregon.",
        "The conference drew nurses from Reno; Nevada, Boise; Idaho, and Salem; Oregon.",
        "The conference drew nurses from Reno, Nevada; Boise, Idaho, and Salem, Oregon."
      ],
      answer: 1,
      rationale: {
        correct: "When the items in a series already contain commas, semicolons separate the items so the reader can see where each one ends.",
        wrong: [
          "Commas alone leave six place names running together with no way to tell the three items apart.",
          null,
          "The semicolons fall inside each city-state pair instead of between the three items.",
          "Mixes the two systems, separating the first item with a semicolon and the rest with commas."
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGB-028",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "Which sentence uses the reflexive pronoun correctly?",
      choices: [
        "The charge nurse asked the aide and myself to restock the cart.",
        "Please return the completed form to Dr. Patel or myself.",
        "The patient transferred himself from the bed to the wheelchair.",
        "Myself and the therapist adjusted the height of the bed."
      ],
      answer: 2,
      rationale: {
        correct: "A reflexive pronoun is correct only when it refers back to the subject of its own clause, and \"the patient\" both performs and receives the action.",
        wrong: [
          "\"Myself\" cannot be an object here because \"I\" is not the subject; the sentence needs \"me.\"",
          "\"Myself\" again has no \"I\" to refer back to; the object of the preposition should be \"me.\"",
          null,
          "\"Myself\" cannot function as a subject; the sentence needs \"I.\""
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-029",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "Which sentence uses parallel structure correctly?",
      choices: [
        "The patient may either take the tablet with food or on an empty stomach.",
        "The patient may take either the tablet with food or on an empty stomach.",
        "The patient may either taking the tablet with food or on an empty stomach.",
        "The patient may either take the tablet with food or take it on an empty stomach."
      ],
      answer: 3,
      rationale: {
        correct: "With \"either...or,\" the elements following each half must match in form, and here the verb phrase \"take the tablet with food\" is matched by \"take it on an empty stomach.\"",
        wrong: [
          "Pairs the verb phrase \"take the tablet with food\" with the bare prepositional phrase \"on an empty stomach.\"",
          "Pairs the noun phrase \"the tablet with food\" with a prepositional phrase, so the two halves still do not match.",
          "\"Taking\" is a gerund and cannot follow the modal \"may,\" and the halves remain unmatched.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-030",
      sub: "verb tense/form",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The surgeon recommended that the patient ___ nothing by mouth after midnight.\"",
      choices: ["takes", "take", "took", "is taking"],
      answer: 1,
      rationale: {
        correct: "Verbs of recommendation or demand trigger the subjunctive in the \"that\" clause, and the subjunctive uses the base form for every subject.",
        wrong: [
          "\"Takes\" is the ordinary present indicative; a clause after \"recommended that\" requires the base form.",
          null,
          "\"Took\" is past indicative and does not express the required subjunctive.",
          "\"Is taking\" is present progressive and also fails the subjunctive requirement."
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGB-031",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The family paid the night nurse a sincere ___ for her patience.\"",
      choices: ["complement", "complementary", "complimented", "compliment"],
      answer: 3,
      rationale: {
        correct: "\"Compliment\" is a noun meaning an expression of praise, which is what the family offered.",
        wrong: [
          "\"Complement\" means something that completes or pairs well with something else.",
          "\"Complementary\" is an adjective, but the article \"a\" calls for a noun.",
          "\"Complimented\" is a verb form and cannot follow the article \"a.\"",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-032",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"There ___ only one isolation room available on the medical floor tonight.\"",
      choices: ["are", "is", "were", "have been"],
      answer: 1,
      rationale: {
        correct: "In a sentence beginning with \"there,\" the verb agrees with the subject that follows it, and \"one isolation room\" is singular.",
        wrong: [
          "\"Are\" is plural, but the true subject \"one isolation room\" is singular.",
          null,
          "\"Were\" is plural and also shifts the sentence into the past.",
          "\"Have been\" is plural; the singular subject would require \"has been.\""
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGB-033",
      sub: "punctuation",
      type: "mc",
      q: "In which sentence is the colon used correctly?",
      choices: [
        "The delay had one cause: the elevator was out of service.",
        "The delay had one: cause the elevator was out of service.",
        "The delay had one cause the elevator: was out of service.",
        "The delay had: one cause, the elevator was out of service."
      ],
      answer: 0,
      rationale: {
        correct: "A colon may follow a complete independent clause to introduce the explanation that follows it.",
        wrong: [
          null,
          "The colon splits the modifier \"one\" from the noun \"cause,\" and the words before it cannot stand alone.",
          "The colon wrongly separates the subject \"the elevator\" from its verb \"was.\"",
          "The colon follows the verb \"had,\" so the words before it do not form a complete clause."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-034",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "Which sentence avoids a vague pronoun reference?",
      choices: [
        "The elevator was slow and the unit was short-staffed, which made rounds run late.",
        "The elevator was slow and the unit was short-staffed, and it made rounds run late.",
        "The elevator was slow and the unit was short-staffed; this made rounds run late.",
        "Because the elevator was slow and the unit was short-staffed, rounds ran late."
      ],
      answer: 3,
      rationale: {
        correct: "Stating the cause with a subordinating conjunction removes the pronoun entirely, so nothing is left hunting for an antecedent.",
        wrong: [
          "\"Which\" has no single noun antecedent and vaguely points at the whole preceding statement.",
          "\"It\" has no noun antecedent and could stand for either of the two preceding clauses.",
          "\"This\" stands alone with no noun to attach to, leaving the reference vague.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-035",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "Which sentence makes a logical comparison?",
      choices: [
        "The recovery time for the new procedure is shorter than the old procedure.",
        "The recovery time for the new procedure is shorter than that for the old procedure.",
        "The recovery time for the new procedure is shorter than the old procedure is.",
        "The recovery time for the new procedure is more shorter than for the old procedure."
      ],
      answer: 1,
      rationale: {
        correct: "A comparison must place two like things side by side, and the pronoun \"that\" stands in for \"the recovery time,\" so one recovery time is compared with another.",
        wrong: [
          "Illogical comparison — it compares a recovery time with a procedure rather than with another recovery time.",
          null,
          "Illogical comparison — the added verb makes explicit that a time is being compared with a procedure.",
          "\"More shorter\" is a double comparative; \"shorter\" already carries the comparison."
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGB-036",
      sub: "verb tense/form",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The specimen had been ___ before it was sent to the reference lab.\"",
      choices: ["froze", "freezed", "freezing", "frozen"],
      answer: 3,
      rationale: {
        correct: "After the helping verbs \"had been,\" the past participle is required: freeze, froze, frozen.",
        wrong: [
          "\"Froze\" is the simple past and cannot follow the helping verbs \"had been.\"",
          "\"Freezed\" is not a standard English form; \"freeze\" is an irregular verb.",
          "\"Freezing\" is the present participle and would describe an action still under way.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-037",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"From the patient's grimace, the nurse was able to ___ that the pain had returned.\"",
      choices: ["imply", "infer", "implied", "inferring"],
      answer: 1,
      rationale: {
        correct: "\"Infer\" means to draw a conclusion from evidence; the observer infers while the speaker implies.",
        wrong: [
          "\"Imply\" means to suggest something without stating it, which is what the patient does, not the nurse.",
          null,
          "\"Implied\" is the wrong word and also the wrong form after the infinitive marker \"to.\"",
          "\"Inferring\" is a participle and cannot follow the infinitive marker \"to.\""
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGB-038",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The charge nurse, as well as the two float aides, ___ scheduled for the mandatory in-service.\"",
      choices: ["are", "were", "is", "have been"],
      answer: 2,
      rationale: {
        correct: "A phrase introduced by \"as well as\" is parenthetical and does not create a compound subject, so the verb agrees with the singular \"charge nurse.\"",
        wrong: [
          "\"Are\" is plural and wrongly counts the aides as part of the subject.",
          "\"Were\" is plural and also shifts the sentence into the past.",
          null,
          "\"Have been\" is plural; the singular subject would require \"has been.\""
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGB-039",
      sub: "punctuation",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The ___ ward was repainted in bright colors last summer.\"",
      choices: ["childrens", "children's", "childrens'", "childs'"],
      answer: 1,
      rationale: {
        correct: "\"Children\" is an irregular plural that does not end in -s, so its possessive adds an apostrophe plus s.",
        wrong: [
          "\"Childrens\" has no apostrophe at all and therefore shows no possession.",
          null,
          "\"Childrens'\" treats \"childrens\" as a plural ending in -s, but the plural is already \"children.\"",
          "\"Childs'\" is built on the nonexistent plural \"childs.\""
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-040",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The new resident charts far more quickly than ___.\"",
      choices: ["I", "me", "myself", "mine"],
      answer: 0,
      rationale: {
        correct: "In an elliptical comparison the verb is understood rather than written, so subject case is required: \"than I do.\"",
        wrong: [
          null,
          "\"Me\" is objective case, but the understood clause is \"than I chart.\"",
          "\"Myself\" is reflexive and needs an \"I\" earlier in the clause to refer back to.",
          "\"Mine\" is possessive and would compare charts rather than people."
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGB-041",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "Which of the following is a compound sentence?",
      choices: [
        "Because the pharmacy was closed, the dose was delayed.",
        "The pharmacy was closed, so the dose was delayed.",
        "The pharmacy and the lab were closed for the holiday.",
        "Closing early on holidays, the pharmacy delayed the dose."
      ],
      answer: 1,
      rationale: {
        correct: "A compound sentence joins two independent clauses with a comma plus a coordinating conjunction, which \"so\" does here.",
        wrong: [
          "Complex sentence — \"because\" makes the first clause dependent.",
          null,
          "Simple sentence — a compound subject does not create a second clause.",
          "Simple sentence with an introductory participial phrase, not a second clause."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGB-042",
      sub: "verb tense/form",
      type: "mc",
      q: "Select the phrase that correctly completes the sentence: \"If the family had arrived sooner, they ___ the surgeon before the operation.\"",
      choices: ["would meet", "will have met", "would have met", "had met"],
      answer: 2,
      rationale: {
        correct: "A past unreal condition uses \"had\" plus a past participle in the if-clause and \"would have\" plus a past participle in the result clause.",
        wrong: [
          "\"Would meet\" states a present or future unreal result, not a past one.",
          "\"Will have met\" is future perfect and clashes with the past condition \"had arrived.\"",
          null,
          "\"Had met\" repeats the if-clause form and leaves the result clause without \"would.\""
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-043",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The dietitian offered practical ___ about reducing sodium at home.\"",
      choices: ["advice", "advise", "advises", "advised"],
      answer: 0,
      rationale: {
        correct: "\"Advice\" is the noun meaning guidance, and the adjective \"practical\" signals that a noun is needed.",
        wrong: [
          null,
          "\"Advise\" is the verb meaning \"to give guidance,\" but this slot requires a noun.",
          "\"Advises\" is a present-tense verb form, not a noun.",
          "\"Advised\" is a past-tense verb form, not a noun."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGB-044",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"All of the sterile equipment ___ processed by central supply this morning.\"",
      choices: ["were", "was", "have been", "are"],
      answer: 1,
      rationale: {
        correct: "With \"all of,\" the verb takes its number from the object of \"of,\" and \"equipment\" is an uncountable singular noun.",
        wrong: [
          "\"Were\" is plural; it would be correct only with a plural object, as in \"all of the instruments were.\"",
          null,
          "\"Have been\" is plural and also shifts the sentence out of the simple past.",
          "\"Are\" is plural and shifts the sentence into the present."
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGB-045",
      sub: "punctuation",
      type: "mc",
      q: "In which sentence are the quotation marks used correctly?",
      choices: [
        "\"I feel much steadier today\", the patient told the therapist.",
        "\"I feel much steadier today,\" the patient told the therapist.",
        "\"I feel much steadier today\" the patient told the therapist.",
        "\"I feel much steadier today.\" the patient told the therapist."
      ],
      answer: 1,
      rationale: {
        correct: "When an attribution follows a quoted statement, the end punctuation becomes a comma and that comma goes inside the closing quotation mark.",
        wrong: [
          "In American usage the comma belongs inside the closing quotation mark, never after it.",
          null,
          "Omits the comma that must separate the quotation from the attribution that follows it.",
          "A period closes the sentence, so the attribution cannot continue it with a lowercase word."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-046",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"Each of the three units submitted ___ own staffing plan.\"",
      choices: ["their", "them", "its", "his or her"],
      answer: 2,
      rationale: {
        correct: "\"Each\" is a singular indefinite pronoun, so the possessive referring back to it is the singular \"its\"; \"of the three units\" is only a prepositional phrase.",
        wrong: [
          "\"Their\" is plural and wrongly agrees with \"units,\" the object of the preposition.",
          "\"Them\" is an object pronoun and cannot modify the noun \"plan.\"",
          null,
          "\"His or her\" refers to people, but the antecedent stands for units, not persons."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-047",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "Which sentence means that one aide restocked nearly all of the carts?",
      choices: [
        "Almost every aide restocked the carts.",
        "The aide almost restocked every cart.",
        "The aide restocked almost every cart.",
        "Every aide almost restocked the carts."
      ],
      answer: 2,
      rationale: {
        correct: "A limiting modifier applies to the word that directly follows it, so \"almost every cart\" limits how many carts were restocked.",
        wrong: [
          "Placing \"almost\" before \"every aide\" limits how many aides acted, not how many carts were done.",
          "Placing \"almost\" before the verb means the aide came close to restocking but did not do it.",
          null,
          "This also places \"almost\" before the verb and makes every aide the actor."
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGB-048",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The clinic ordered new ___ printed with the practice logo.\"",
      choices: ["stationary", "stationing", "station", "stationery"],
      answer: 3,
      rationale: {
        correct: "\"Stationery\" spelled with an e means writing paper and envelopes; the e in lettEr matches the e in stationEry.",
        wrong: [
          "\"Stationary\" spelled with an a means \"not moving,\" as in a stationary bike.",
          "\"Stationing\" is a verb form meaning \"assigning to a post.\"",
          "\"Station\" is a place or post, not printed writing paper.",
          null
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-049",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The nurse asked the visitors to be ___ when discussing the diagnosis in the hallway.\"",
      choices: ["discreet", "discrete", "discreetly", "discretion"],
      answer: 0,
      rationale: {
        correct: "\"Discreet\" is an adjective meaning careful not to reveal private information, which is what the nurse is requesting.",
        wrong: [
          null,
          "\"Discrete\" means separate or individually distinct, as in discrete data points.",
          "\"Discreetly\" is an adverb, but the linking verb \"be\" requires an adjective.",
          "\"Discretion\" is a noun and cannot describe the visitors after \"to be.\""
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGB-050",
      sub: "subject-verb agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"Marisol is one of the students who ___ regularly at the community health fair.\"",
      choices: ["volunteers", "is volunteering", "has volunteered", "volunteer"],
      answer: 3,
      rationale: {
        correct: "The relative pronoun \"who\" refers back to the plural \"students,\" so the verb inside the relative clause must be plural.",
        wrong: [
          "\"Volunteers\" is singular and wrongly agrees with \"Marisol\" instead of with \"students.\"",
          "\"Is volunteering\" is singular and also narrows the meaning to this moment.",
          "\"Has volunteered\" is singular and shifts the clause into the present perfect.",
          null
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGB-051",
      sub: "pronoun case/agreement",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The nurse manager praised Devon and ___ for the rapid response.\"",
      choices: ["he", "him", "himself", "his"],
      answer: 1,
      rationale: {
        correct: "\"Him\" is the objective case required for the object of the verb \"praised\"; drop \"Devon and\" and \"praised him\" is what remains.",
        wrong: [
          "\"He\" is subject case and cannot receive the action of \"praised.\"",
          null,
          "\"Himself\" is reflexive and needs \"he\" as the subject of the clause to refer back to.",
          "\"His\" is possessive and cannot serve as the object of a verb."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGB-052",
      sub: "punctuation",
      type: "mc",
      q: "Which of the following is punctuated correctly?",
      choices: [
        "The surgery is scheduled for Monday, March 3, 2026, at the outpatient center.",
        "The surgery is scheduled for Monday March 3, 2026 at the outpatient center.",
        "The surgery is scheduled for Monday, March 3 2026, at the outpatient center.",
        "The surgery is scheduled for Monday, March, 3, 2026 at the outpatient center."
      ],
      answer: 0,
      rationale: {
        correct: "In a full date a comma follows the weekday, another follows the day of the month, and one follows the year when the sentence continues.",
        wrong: [
          null,
          "Omits the comma after the weekday and the comma that must follow the year.",
          "Omits the comma required between the day of the month and the year.",
          "Adds a comma between the month and the day and omits the one after the year."
        ]
      },
      diff: 1,
      secs: 45
    },
    {
      id: "HGB-053",
      sub: "sentence structure/modifiers",
      type: "mc",
      q: "In the sentence \"Although the pharmacy was closed, the charge nurse located a backup dose,\" which group of words is the dependent clause?",
      choices: [
        "Although the pharmacy was closed",
        "the charge nurse located a backup dose",
        "located a backup dose",
        "the pharmacy was closed"
      ],
      answer: 0,
      rationale: {
        correct: "A dependent clause has a subject and a verb but opens with a subordinating conjunction such as \"although,\" so it cannot stand alone.",
        wrong: [
          null,
          "This is the independent clause; it has a subject and a verb and stands alone as a sentence.",
          "This is a verb phrase rather than a clause because it has no subject.",
          "This has a subject and a verb but drops the subordinator, which is what made the clause dependent."
        ]
      },
      diff: 2,
      secs: 55
    },
    {
      id: "HGB-054",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"A careful admission interview will ___ information the chart does not contain.\"",
      choices: ["elicit", "illicit", "elicits", "illicitly"],
      answer: 0,
      rationale: {
        correct: "\"Elicit\" is a verb meaning to draw out a response or information, which is what an interview does.",
        wrong: [
          null,
          "\"Illicit\" is an adjective meaning illegal and cannot follow the helping verb \"will.\"",
          "\"Elicits\" is third-person singular; \"will\" must be followed by the base form.",
          "\"Illicitly\" is an adverb meaning unlawfully and cannot serve as the main verb."
        ]
      },
      diff: 3,
      secs: 65
    },
    {
      id: "HGB-055",
      sub: "commonly confused words",
      type: "mc",
      q: "Select the word that correctly completes the sentence: \"The catheter was advanced ___ the femoral artery toward the heart.\"",
      choices: ["threw", "though", "through", "thorough"],
      answer: 2,
      rationale: {
        correct: "\"Through\" is the preposition meaning from one side to the other, which describes the catheter's path.",
        wrong: [
          "\"Threw\" is the past tense of the verb \"throw\" and cannot act as a preposition.",
          "\"Though\" is a conjunction meaning \"although\" and shows contrast, not direction.",
          null,
          "\"Thorough\" is an adjective meaning complete and cannot act as a preposition."
        ]
      },
      diff: 1,
      secs: 45
    }
  ]
};
