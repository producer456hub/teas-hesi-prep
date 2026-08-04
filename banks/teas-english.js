/* TEAS 7 English & Language Usage — Form A — 37 items
   Conventions of Standard English 13 | Knowledge of Language 12 | Vocabulary Acquisition 12
   3 multiple-select, 34 multiple-choice. All items original. */
window.BANKS = window.BANKS || {};
window.BANKS["teas-english"] = {
  exam: "teas",
  section: "english",
  questions: [

  /* ===================== CONVENTIONS OF STANDARD ENGLISH (13) ===================== */

  {
    id: "TEA-001",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following sentences uses \"affect\" or \"effect\" correctly?",
    choices: [
      "The medication had a calming affect on the patient.",
      "The medication did not effect the patient's appetite.",
      "The medication had a calming effect on the patient.",
      "The medication's affects were carefully recorded."
    ],
    answer: 2,
    rationale: {
      correct: "Effect is the noun meaning result; after \"a calming,\" a noun is required. Affect is almost always a verb meaning to influence.",
      wrong: [
        "The article and adjective (\"a calming ___\") call for the noun effect; affect is the verb form.",
        "After \"did not,\" a verb meaning to influence is needed: affect. To effect means to bring about, as in \"effect a change.\"",
        null,
        "The recorded results are effects; affect serves as a noun only in psychology, where it names visible emotion."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-002",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "When \"-ed\" is added to the word \"occur,\" which of the following is the correct spelling?",
    choices: ["Occured", "Occurred", "Ocurred", "Occurd"],
    answer: 1,
    rationale: {
      correct: "Occur ends in a stressed consonant-vowel-consonant syllable, so the final r doubles before the vowel suffix -ed: occurred.",
      wrong: [
        "This fails to double the final r; doubling is required because the final syllable of occur is stressed.",
        null,
        "This drops one c from the base word occur.",
        "This omits the e of the -ed ending, so the suffix is not added correctly."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-003",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following is the correct plural of the word \"diagnosis\"?",
    choices: ["Diagnoses", "Diagnosises", "Diagnosis's", "Diagnosi"],
    answer: 0,
    rationale: {
      correct: "Greek-derived nouns ending in -is form the plural by changing -is to -es: diagnosis becomes diagnoses, just as crisis becomes crises.",
      wrong: [
        null,
        "This tacks a regular ending onto a word that requires the irregular -is to -es change.",
        "An apostrophe plus s shows possession; it does not form a plural.",
        "Dropping the final s is not an English plural pattern; it wrongly treats the word like a Latin -us noun."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-004",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following sentences uses \"its\" or \"it's\" correctly?",
    choices: [
      "The clinic updated it's privacy policy last month.",
      "Its important to review the privacy policy each year.",
      "The policy has it's own section on records.",
      "The clinic updated its privacy policy last month."
    ],
    answer: 3,
    rationale: {
      correct: "Its without an apostrophe is the possessive pronoun; the policy belongs to the clinic. It's is reserved for the contraction of it is or it has.",
      wrong: [
        "It's means it is; \"the clinic updated it is privacy policy\" makes no sense, so the possessive its is needed.",
        "This sentence needs the contraction it's, because the meaning is \"it is important.\"",
        "The possessive its takes no apostrophe; as written, the sentence reads \"the policy has it is own section.\"",
        null
      ]
    },
    diff: 1,
    secs: 45
  },
  {
    id: "TEA-005",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following sentences is punctuated correctly?",
    choices: [
      "Before the clinic opened the staff restocked gloves, gauze, and thermometers.",
      "Before the clinic opened, the staff restocked gloves, gauze, and thermometers.",
      "Before the clinic opened, the staff restocked, gloves, gauze, and thermometers.",
      "Before the clinic opened, the staff restocked gloves gauze and thermometers."
    ],
    answer: 1,
    rationale: {
      correct: "An introductory dependent clause is followed by a comma, and the three items in the series are separated by commas, including one before and.",
      wrong: [
        "This omits the comma required after the introductory clause \"Before the clinic opened.\"",
        null,
        "The comma after restocked wrongly separates the verb from its objects.",
        "The items in the series must be separated by commas: gloves, gauze, and thermometers."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-006",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following sentences uses the semicolon correctly?",
    choices: [
      "The waiting room was full; however, the line moved quickly.",
      "The waiting room was full; because walk-ins kept arriving.",
      "The waiting room was full however; the line moved quickly.",
      "The clinic restocked; bandages, splints, and ice packs."
    ],
    answer: 0,
    rationale: {
      correct: "A semicolon joins two independent clauses; when the second begins with the conjunctive adverb however, a comma follows however.",
      wrong: [
        null,
        "\"Because walk-ins kept arriving\" is a dependent clause; a semicolon must have an independent clause on each side.",
        "The semicolon is misplaced after however, stranding the adverb in the first clause instead of introducing the second.",
        "A semicolon does not introduce a list; that job belongs to a colon after a complete clause."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-007",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following sentences uses the colon correctly?",
    choices: [
      "The items to pack are: a badge, a stethoscope, and comfortable shoes.",
      "Pack: a badge, a stethoscope, and comfortable shoes for the overnight shift.",
      "Bring your badge: and your stethoscope for the overnight shift.",
      "Pack the following items for the overnight shift: a badge, a stethoscope, and comfortable shoes."
    ],
    answer: 3,
    rationale: {
      correct: "A colon introducing a list must follow a complete independent clause; \"Pack the following items for the overnight shift\" stands alone.",
      wrong: [
        "A colon may not follow the verb are; the words before a list-introducing colon must form a complete sentence.",
        "The colon interrupts the verb Pack and its objects; \"Pack\" alone is not a complete clause.",
        "The colon splits a compound object (badge and stethoscope) mid-sentence, where no colon belongs.",
        null
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-008",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following correctly shows the break room shared by the nurses?",
    choices: [
      "the nurse's break room",
      "the nurses's break room",
      "the nurses' break room",
      "the nurses break room"
    ],
    answer: 2,
    rationale: {
      correct: "A plural noun that already ends in s takes only an apostrophe to show possession: the nurses' break room.",
      wrong: [
        "Nurse's is the possessive of one nurse; the room is shared by several nurses.",
        "A plural noun ending in s does not add another s after the apostrophe.",
        null,
        "With no apostrophe, nurses is just a plural; possession requires an apostrophe."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-009",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following sentences punctuates the dialogue correctly?",
    choices: [
      "The pharmacist said, \"Take one tablet with food each morning.\"",
      "The pharmacist said, \"Take one tablet with food each morning\".",
      "The pharmacist said \"Take one tablet with food each morning.\"",
      "The pharmacist said, \"take one tablet with food each morning.\""
    ],
    answer: 0,
    rationale: {
      correct: "A comma follows the speech tag (said), the quoted sentence opens with a capital letter, and the period sits inside the closing quotation marks in American usage.",
      wrong: [
        null,
        "In American English the period belongs inside the closing quotation marks, not after them.",
        "A comma is required between the speech tag said and the opening quotation mark.",
        "A quoted complete sentence begins with a capital letter: \"Take one tablet...\""
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-010",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following is a complex sentence?",
    choices: [
      "The transport team reached the lab with several minutes to spare.",
      "The elevator was crowded, so the transport team took the stairs.",
      "Although the elevator was crowded, the transport team reached the lab on time.",
      "When the elevator stalled, the team took the stairs, and they still arrived on time."
    ],
    answer: 2,
    rationale: {
      correct: "A complex sentence pairs one independent clause with at least one dependent clause; \"Although the elevator was crowded\" cannot stand alone.",
      wrong: [
        "This is a simple sentence: one independent clause; prepositional phrases are not clauses.",
        "This is a compound sentence: two independent clauses joined by a comma and the coordinating conjunction so.",
        null,
        "This is compound-complex: a dependent clause (When the elevator stalled) plus two independent clauses."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-011",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following corrects the comma splice? \"The fire alarm sounded, the staff evacuated the building.\"",
    choices: [
      "The fire alarm sounded, the staff, evacuated the building.",
      "The fire alarm sounded; the staff evacuated the building.",
      "The fire alarm sounded the staff evacuated the building.",
      "The fire alarm sounded, then the staff evacuated the building."
    ],
    answer: 1,
    rationale: {
      correct: "A semicolon may join two closely related independent clauses; a period, or a comma plus a coordinating conjunction, would also fix the splice.",
      wrong: [
        "This keeps the comma splice and adds an unneeded comma between the subject and its verb.",
        null,
        "Removing all punctuation creates a fused sentence, another form of run-on.",
        "Then is an adverb, not a coordinating conjunction, so a comma before it still leaves a comma splice."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-012",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following sentences is capitalized correctly?",
    choices: [
      "Last Summer, Dr. Alvarez taught an anatomy course at Riverside Community College.",
      "Last summer, Dr. Alvarez taught an Anatomy course at Riverside community college.",
      "Last summer, dr. Alvarez taught an anatomy course at Riverside Community College.",
      "Last summer, Dr. Alvarez taught an anatomy course at Riverside Community College."
    ],
    answer: 3,
    rationale: {
      correct: "Seasons (summer) and general school subjects (anatomy) stay lowercase, while a title before a name (Dr.) and the full name of an institution are capitalized.",
      wrong: [
        "Summer should be lowercase; seasons are not capitalized unless they begin a sentence or appear in a title.",
        "Anatomy is a general subject, not a specific course title, so it stays lowercase; Community College is part of the school's proper name and needs capitals.",
        "Dr. is a title appearing directly before a name and must be capitalized.",
        null
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-013",
    sub: "Conventions of Standard English",
    type: "ms",
    q: "Select all that apply. Which of the following sentences are complete and written correctly?",
    choices: [
      "The intern reviewed the chart before rounds began.",
      "Checked the vitals and recorded them in the chart.",
      "The monitor beeped, the aide silenced the alarm.",
      "The clinic closes at noon on holidays; emergencies go to the main hospital.",
      "The visitors left they're umbrellas by the door.",
      "The visitor asked where the gift shop was."
    ],
    answer: [0, 3, 5],
    rationale: {
      correct: "Each correct sentence contains a subject and verb in at least one independent clause with proper punctuation. An indirect question ends with a period, and a semicolon may join two related independent clauses.",
      wrong: [
        null,
        "This is a fragment: it lists verbs (checked, recorded) but has no subject.",
        "This is a comma splice: two independent clauses joined by only a comma need a semicolon, a period, or a comma plus a coordinating conjunction.",
        null,
        "They're means they are; the sentence needs the possessive their before umbrellas.",
        null
      ]
    },
    diff: 3,
    secs: 90
  },

  /* ===================== KNOWLEDGE OF LANGUAGE (12) ===================== */

  {
    id: "TEA-014",
    sub: "Knowledge of Language",
    type: "mc",
    q: "Which of the following correctly completes the sentence? \"The folder of lab results ___ missing from the front desk.\"",
    choices: ["was", "were", "are", "have been"],
    answer: 0,
    rationale: {
      correct: "The subject is the singular noun folder; the intervening prepositional phrase \"of lab results\" does not control agreement, so the singular verb was is correct.",
      wrong: [
        null,
        "Were wrongly agrees with results, the object of the preposition, instead of the subject folder.",
        "Are is plural; the singular subject folder requires a singular verb.",
        "Have been is plural; the singular subject would need has been."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-015",
    sub: "Knowledge of Language",
    type: "mc",
    q: "Which of the following correctly completes the sentence? \"___ should visitors ask for directions to the radiology wing?\"",
    choices: ["Who", "Whom", "Whose", "Who's"],
    answer: 1,
    rationale: {
      correct: "The pronoun is the object of the verb ask (visitors should ask whom), so the objective form whom is required; test it by substituting \"ask him.\"",
      wrong: [
        "Who is the subjective form, used only when the pronoun performs the action, as in \"Who is asking?\"",
        null,
        "Whose shows possession, which the sentence does not express.",
        "Who's is the contraction of who is, which produces \"who is should visitors ask.\""
      ]
    },
    diff: 3,
    secs: 75
  },
  {
    id: "TEA-016",
    sub: "Knowledge of Language",
    type: "mc",
    q: "Which of the following correctly completes the sentence? \"The instructor asked Jordan and ___ to demonstrate proper handwashing.\"",
    choices: ["I", "myself", "me", "my"],
    answer: 2,
    rationale: {
      correct: "The pronoun is an object of asked, so the objective case me is required; drop \"Jordan and\" to test it: the instructor asked me.",
      wrong: [
        "I is the subjective case and cannot serve as the object of asked.",
        "Myself is reflexive and belongs only in a sentence whose subject is I, as in \"I taught myself.\"",
        null,
        "My is a possessive and must be followed by a noun."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-017",
    sub: "Knowledge of Language",
    type: "mc",
    q: "\"When Rosa called Ms. Patel about the schedule, she sounded relieved.\" Which revision fixes the unclear pronoun reference?",
    choices: [
      "When Rosa called Ms. Patel about the schedule, she sounded relieved to her.",
      "When Rosa called her about the schedule, she sounded relieved.",
      "When Rosa called Ms. Patel about the schedule, they sounded relieved.",
      "When Rosa called Ms. Patel about the schedule, Ms. Patel sounded relieved."
    ],
    answer: 3,
    rationale: {
      correct: "Repeating the specific name makes the meaning unmistakable; every pronoun needs a single clear antecedent, and the original she could point to either woman.",
      wrong: [
        "She and her could each refer to either woman, so the reference is still unclear.",
        "Replacing Ms. Patel's name with her adds a second vague pronoun instead of resolving the first.",
        "They is plural, fails to agree with a singular antecedent, and still hides who felt relieved.",
        null
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-018",
    sub: "Knowledge of Language",
    type: "mc",
    q: "Which of the following sentences maintains consistent verb tense?",
    choices: [
      "Yesterday the volunteer sorted donations and labels each box.",
      "Yesterday the volunteer sorts donations and labeled each box.",
      "Yesterday the volunteer sorted donations and labeled each box.",
      "Yesterday the volunteer will sort donations and labeled each box."
    ],
    answer: 2,
    rationale: {
      correct: "Sorted and labeled are both past tense, matching the time cue Yesterday.",
      wrong: [
        "Sorted is past tense but labels shifts to present, an inconsistent pair.",
        "Sorts is present tense while labeled is past; the tenses disagree.",
        null,
        "Will sort is future tense, which contradicts Yesterday and clashes with the past-tense labeled."
      ]
    },
    diff: 1,
    secs: 45
  },
  {
    id: "TEA-019",
    sub: "Knowledge of Language",
    type: "mc",
    q: "Which revision corrects the dangling modifier? \"Rushing to answer the phone, the coffee spilled across the desk.\"",
    choices: [
      "Rushing to answer the phone, the receptionist spilled coffee across the desk.",
      "Rushing to answer the phone, the desk was covered in spilled coffee.",
      "The coffee, rushing to answer the phone, spilled across the desk.",
      "Rushing to answer the phone, coffee spilled across the desk."
    ],
    answer: 0,
    rationale: {
      correct: "An introductory participial phrase modifies the subject that follows it, so the doer, the receptionist, must come immediately after the comma.",
      wrong: [
        null,
        "The desk was not rushing to answer the phone; the modifier still dangles.",
        "Placing the phrase beside coffee states outright that the coffee was rushing to answer the phone.",
        "There is still no person for the phrase to describe; coffee cannot rush to answer a phone."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-020",
    sub: "Knowledge of Language",
    type: "mc",
    q: "Which of the following correctly completes the sentence? \"The new aides learn to take vital signs, transfer patients safely, and ___.\"",
    choices: [
      "documenting their care accurately",
      "document their care accurately",
      "to be documenting care accurately",
      "accurate documentation of care"
    ],
    answer: 1,
    rationale: {
      correct: "Items in a series must share one grammatical form; take, transfer, and document are matching base verbs completing \"learn to.\"",
      wrong: [
        "Documenting is a gerund, breaking the base-verb pattern set by take and transfer.",
        null,
        "To be documenting shifts into a progressive infinitive that does not match the other items.",
        "Accurate documentation of care is a noun phrase, not a verb, so the series loses its parallel form."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-021",
    sub: "Knowledge of Language",
    type: "mc",
    q: "Which of the following sentences is most appropriate for a printed discharge instruction sheet given to patients?",
    choices: [
      "Maintain asepsis of the surgical site pending epithelialization.",
      "Don't let your cut get gross, or you'll be back here in no time.",
      "It might be a good idea to sort of keep the area clean, if you can.",
      "Keep the incision clean and dry for seven days."
    ],
    answer: 3,
    rationale: {
      correct: "Instructions for a lay patient audience call for plain, specific, professional language; this version is direct and free of jargon and slang.",
      wrong: [
        "Asepsis and epithelialization are medical jargon unsuited to a general patient audience.",
        "Gross and \"back here in no time\" are slang, too informal for printed medical instructions.",
        "Hedges such as might, sort of, and if you can make the instruction vague and optional-sounding.",
        null
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-022",
    sub: "Knowledge of Language",
    type: "mc",
    q: "A paragraph explains that walking improves circulation, lifts mood, and requires no special equipment. Which of the following would be the best topic sentence?",
    choices: [
      "Walking is an accessible exercise with several health benefits.",
      "Walking improves circulation more than swimming does.",
      "Exercise has been studied by scientists for many years.",
      "Comfortable shoes are the most important purchase for a new walker."
    ],
    answer: 0,
    rationale: {
      correct: "A topic sentence states the controlling idea that every detail supports; accessibility plus health benefits covers circulation, mood, and equipment-free exercise.",
      wrong: [
        null,
        "This narrows the paragraph to one detail and adds a comparison with swimming that the details do not support.",
        "This is so broad it could introduce any exercise paragraph, and it does not mention walking.",
        "This focuses on buying shoes, which conflicts with the detail that walking needs no special equipment."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-023",
    sub: "Knowledge of Language",
    type: "mc",
    q: "Which of the following correctly completes the sentence? \"Requests for evening appointments kept increasing; ___, the clinic extended its hours until 8 p.m.\"",
    choices: ["however", "as a result", "for example", "meanwhile"],
    answer: 1,
    rationale: {
      correct: "Extending hours is the outcome of the growing demand, so the cause-and-effect transition \"as a result\" connects the clauses.",
      wrong: [
        "However signals contrast, but the second clause follows from the first rather than opposing it.",
        null,
        "For example introduces an illustration, not a consequence.",
        "Meanwhile marks simultaneous events, not a cause leading to an effect."
      ]
    },
    diff: 1,
    secs: 45
  },
  {
    id: "TEA-024",
    sub: "Knowledge of Language",
    type: "mc",
    q: "A writer moves two paragraphs so that the essay's ideas build logically. During which stage of the writing process does this occur?",
    choices: ["Editing", "Prewriting", "Revising", "Publishing"],
    answer: 2,
    rationale: {
      correct: "Revising is the big-picture stage that reworks content and organization, such as reordering paragraphs; it comes after drafting and before editing.",
      wrong: [
        "Editing polishes surface mechanics such as grammar, spelling, and punctuation, not paragraph order.",
        "Prewriting is the planning done before any draft exists, such as brainstorming and outlining.",
        null,
        "Publishing is sharing the finished piece after all changes are complete."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-025",
    sub: "Knowledge of Language",
    type: "ms",
    q: "Select all that apply. Which of the following sentences are grammatically correct?",
    choices: [
      "The aide told the patient to lay down and rest.",
      "Each of the trainees has completed the safety module.",
      "The list of approved visitors were posted at the desk.",
      "Please return the badge to Marcus or myself by Friday.",
      "Neither the aides nor the charge nurse was aware of the change.",
      "There were less complications after the new checklist was adopted."
    ],
    answer: [1, 4],
    rationale: {
      correct: "Each is a singular indefinite pronoun that takes has, and with neither...nor the verb agrees with the nearer subject, the singular charge nurse.",
      wrong: [
        "Lay is a transitive verb that needs an object (lay the chart down); a person resting should lie down.",
        null,
        "The subject is the singular list, so was posted is required; visitors is only the object of the preposition of.",
        "Myself is reflexive; the object of \"return to\" should be the plain objective pronoun me.",
        null,
        "Complications can be counted, so fewer is required; less is reserved for uncountable amounts."
      ]
    },
    diff: 3,
    secs: 90
  },

  /* ===================== VOCABULARY ACQUISITION (12) ===================== */

  {
    id: "TEA-026",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "Based on its word parts, the term \"hyperglycemia\" most nearly means which of the following?",
    choices: [
      "Excess sugar in the blood",
      "Low sugar in the blood",
      "Sugar in the urine",
      "Rapid breakdown of sugar"
    ],
    answer: 0,
    rationale: {
      correct: "Hyper- means excessive, glyc means sugar, and -emia means a blood condition, so hyperglycemia is excess sugar in the blood.",
      wrong: [
        null,
        "Low blood sugar is hypoglycemia; hypo- means below or deficient, the opposite of hyper-.",
        "Sugar in the urine would be glycosuria; -uria, not -emia, refers to urine.",
        "Breakdown is expressed by -lysis, as in glycolysis, the breakdown of sugar."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-027",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "Which of the following is the meaning of the prefix \"intra-\"?",
    choices: ["Between", "Against", "Within", "Beyond"],
    answer: 2,
    rationale: {
      correct: "Intra- means within or inside, as in intravenous (within a vein) and intramuscular (within a muscle).",
      wrong: [
        "Between is the meaning of inter-, as in international and intercostal (between the ribs).",
        "Against is expressed by anti- or contra-, as in antibiotic and contraindicated.",
        null,
        "Beyond is expressed by extra- or ultra-, as in extracellular."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-028",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "Which of the following words means \"inflammation of a joint\"?",
    choices: ["Arthralgia", "Arthritis", "Arthroscopy", "Arthropathy"],
    answer: 1,
    rationale: {
      correct: "Arthr- means joint and the suffix -itis means inflammation, so arthritis is inflammation of a joint.",
      wrong: [
        "The suffix -algia means pain, so arthralgia is joint pain, which can occur without inflammation.",
        null,
        "The suffix -scopy means visual examination, so arthroscopy is a procedure for looking inside a joint.",
        "The suffix -pathy means disease in general, so arthropathy is any joint disease, not specifically inflammation."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-029",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "A surgeon performs a tonsillectomy. Based on word parts, which of the following occurred?",
    choices: [
      "The tonsils became inflamed",
      "The tonsils were visually examined",
      "The tonsils were surgically repaired",
      "The tonsils were surgically removed"
    ],
    answer: 3,
    rationale: {
      correct: "The suffix -ectomy means surgical removal, so a tonsillectomy is the removal of the tonsils.",
      wrong: [
        "Inflammation is -itis; inflamed tonsils would be tonsillitis, a condition rather than an operation.",
        "Visual examination is -scopy, as in endoscopy.",
        "Surgical repair is -plasty, as in rhinoplasty.",
        null
      ]
    },
    diff: 1,
    secs: 45
  },
  {
    id: "TEA-030",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "Which of the following words means \"the study of the skin\"?",
    choices: ["Dermatology", "Dermatitis", "Dermatologist", "Epidermis"],
    answer: 0,
    rationale: {
      correct: "Dermat- means skin and -ology means the study of, so dermatology is the study of the skin.",
      wrong: [
        null,
        "Dermatitis is inflammation of the skin; -itis means inflammation, not study.",
        "A dermatologist is the person who practices in the field; -ist means one who.",
        "The epidermis is the outer layer of the skin itself (epi- means upon), not a field of study."
      ]
    },
    diff: 1,
    secs: 45
  },
  {
    id: "TEA-031",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "After hours in the cold river, the hiker was treated for hypothermia. Based on word parts, \"hypothermia\" means which of the following?",
    choices: [
      "Abnormally high body temperature",
      "Abnormally low body temperature",
      "A normal body temperature",
      "A fear of cold water"
    ],
    answer: 1,
    rationale: {
      correct: "Hypo- means below or deficient and therm means heat, so hypothermia is abnormally low body temperature, which fits the cold-river context.",
      wrong: [
        "Abnormally high temperature would be hyperthermia; hyper-, not hypo-, means excessive.",
        null,
        "Hypo- signals an abnormal deficiency, not a normal state.",
        "Fear is expressed by -phobia, and no part of the word means water."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-032",
    sub: "Vocabulary Acquisition",
    type: "ms",
    q: "Select all that apply. Which of the following words begin with a prefix meaning \"not\"?",
    choices: ["Intake", "Unstable", "Misread", "Nonverbal", "Redo", "Disagree"],
    answer: [1, 3, 5],
    rationale: {
      correct: "Un- (not stable), non- (not verbal), and dis- (not in agreement) are all prefixes of negation.",
      wrong: [
        "In intake, in- means in or into, describing what is taken in; it is not the negative in- of incomplete.",
        null,
        "Mis- means wrongly: to misread is to read incorrectly, not to fail to read.",
        null,
        "Re- means again: to redo is to do over.",
        null
      ]
    },
    diff: 3,
    secs: 90
  },
  {
    id: "TEA-033",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "\"Unlike her brother, who spends every paycheck the day it arrives, Lena is frugal.\" As used in the sentence, \"frugal\" most nearly means which of the following?",
    choices: ["Wasteful", "Wealthy", "Generous", "Thrifty"],
    answer: 3,
    rationale: {
      correct: "The contrast clue Unlike sets Lena against a brother who spends everything at once, so frugal means thrifty, careful with money.",
      wrong: [
        "Wasteful describes the brother; the sentence presents Lena as his opposite.",
        "The sentence describes spending habits, not how much money Lena has.",
        "Generous concerns giving to others, which the sentence never addresses.",
        null
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-034",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "\"The lecturer's monotone voice was so soporific that several students struggled to stay awake.\" As used in the sentence, \"soporific\" most nearly means which of the following?",
    choices: ["Sleep-inducing", "Fascinating", "Extremely loud", "Hard to understand"],
    answer: 0,
    rationale: {
      correct: "The result clue, students struggling to stay awake, shows that soporific means causing sleepiness.",
      wrong: [
        null,
        "A fascinating voice would keep listeners alert, the opposite of the stated effect.",
        "A loud voice would make dozing off harder, not easier.",
        "The students' problem is drowsiness, not confusion, so this ignores the context clue."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-035",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "\"The physician signed the discharge orders before noon.\" In this sentence, \"discharge\" refers to which of the following?",
    choices: [
      "A flow of fluid from a wound",
      "The firing of an employee",
      "A patient's release from care",
      "The release of an electrical current"
    ],
    answer: 2,
    rationale: {
      correct: "Discharge is a multiple-meaning word; paired with a physician signing orders, it means the formal release of a patient from care.",
      wrong: [
        "The fluid meaning of discharge fits a wound description, not signed orders.",
        "The employment meaning does not fit; the orders concern a patient, not a staffing decision.",
        null,
        "The electrical meaning belongs to circuits and batteries, not hospital paperwork."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEA-036",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "Which of the following words has the most negative connotation?",
    choices: ["Curious", "Inquisitive", "Interested", "Nosy"],
    answer: 3,
    rationale: {
      correct: "All four words share the denotation of wanting to know more, but nosy adds the judgment of prying into others' business, the most negative connotation.",
      wrong: [
        "Curious is neutral to positive, suggesting an open desire to learn.",
        "Inquisitive is largely neutral, suggesting active questioning.",
        "Interested is mildly positive, suggesting engagement.",
        null
      ]
    },
    diff: 1,
    secs: 45
  },
  {
    id: "TEA-037",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "A reference letter describes a candidate as \"pushy.\" Which replacement keeps the basic meaning but creates a positive connotation?",
    choices: ["Assertive", "Aggressive", "Timid", "Arrogant"],
    answer: 0,
    rationale: {
      correct: "Assertive keeps the denotation of confidently pressing one's views while carrying approval instead of criticism.",
      wrong: [
        null,
        "Aggressive keeps the meaning but is at least as negative as pushy, implying hostility.",
        "Timid reverses the denotation, describing someone who holds back.",
        "Arrogant is negative and shifts the meaning toward self-importance rather than persistence."
      ]
    },
    diff: 2,
    secs: 60
  }

  ]
};
