/* TEAS 7 English & Language Usage — Form B — 37 items
   Conventions of Standard English 13 | Knowledge of Language 12 | Vocabulary Acquisition 12
   3 multiple-select, 34 multiple-choice. All items original and non-overlapping with Form A:
   same rule families, different rules-under-test, different sentences, different target words. */
window.BANKS = window.BANKS || {};
window.BANKS["teas-english-b"] = {
  exam: "teas",
  section: "english",
  form: "B",
  questions: [

  /* ===================== CONVENTIONS OF STANDARD ENGLISH (13) ===================== */

  {
    id: "TEB-001",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following words is spelled incorrectly?",
    choices: ["Seperate", "Accommodate", "Occurrence", "Embarrass"],
    answer: 0,
    rationale: {
      correct: "The correct spelling is separate; the vowel in the middle syllable is an a, not an e, which is why the memory hook \"there is a rat in separate\" works.",
      wrong: [
        null,
        "Accommodate is correct as written, with both a double c and a double m.",
        "Occurrence is correct as written: the r doubles before the suffix, and the ending is -ence, not -ance.",
        "Embarrass is correct as written, with a double r and a double s."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-002",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following is the correct plural of the word \"vertebra\"?",
    choices: ["Vertebrae", "Vertebras", "Vertebri", "Vertebra's"],
    answer: 0,
    rationale: {
      correct: "Latin nouns that end in -a form the plural by changing -a to -ae, so one vertebra becomes several vertebrae, just as one larva becomes larvae.",
      wrong: [
        null,
        "Adding a regular -s ignores the Latin -a to -ae pattern that this anatomical term follows.",
        "The -i ending belongs to Latin nouns that end in -us, such as nucleus and nuclei.",
        "An apostrophe plus s marks possession; it never forms a plural."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-003",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following sentences uses \"their,\" \"there,\" or \"they're\" correctly?",
    choices: [
      "The residents left there stethoscopes in the break room.",
      "Their are two openings on the night shift.",
      "The residents left they're stethoscopes in the break room.",
      "The residents said they're reviewing the charts before rounds."
    ],
    answer: 3,
    rationale: {
      correct: "They're is the contraction of they are, and the sentence means exactly that: the residents said they are reviewing the charts.",
      wrong: [
        "There names a place or opens a sentence about existence; ownership of the stethoscopes requires the possessive their.",
        "The sentence states that two openings exist, so it needs there, not the possessive their.",
        "They're means they are, so the sentence reads \"the residents left they are stethoscopes.\"",
        null
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-004",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following sentences is punctuated correctly?",
    choices: [
      "Ms. Okafor the charge nurse on nights, approved the schedule change.",
      "Ms. Okafor, the charge nurse on nights approved the schedule change.",
      "Ms. Okafor, the charge nurse on nights, approved the schedule change.",
      "Ms. Okafor the charge nurse on nights approved the schedule change."
    ],
    answer: 2,
    rationale: {
      correct: "A nonessential appositive that renames the subject is set off by commas on BOTH sides; \"the charge nurse on nights\" is extra information that can be lifted out without changing the sentence.",
      wrong: [
        "Only the closing comma appears; an appositive also needs a comma in front of it.",
        "Only the opening comma appears; the appositive must be closed with a second comma before the verb.",
        null,
        "With no commas at all, the appositive collides with the subject and the verb, so the reader cannot tell where the subject ends."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-005",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following sentences uses the comma correctly?",
    choices: [
      "The lab called with the results, but the physician had already left.",
      "The lab called with the results but the physician had already left.",
      "The lab called with the results, and left a message for the physician.",
      "The lab called with the results but, the physician had already left."
    ],
    answer: 0,
    rationale: {
      correct: "When a coordinating conjunction such as but joins two independent clauses, the comma goes before the conjunction.",
      wrong: [
        null,
        "Two independent clauses joined by but must have a comma before the conjunction.",
        "\"And left a message\" is a second verb for the same subject, a compound predicate, so no comma belongs before and.",
        "The comma is placed after the conjunction instead of before it; the comma always precedes the coordinating conjunction."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-006",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following sentences uses the colon correctly?",
    choices: [
      "One symptom worried the team most: the patient's blood pressure kept falling.",
      "One symptom worried the team most, the patient's blood pressure kept falling.",
      "One symptom: worried the team most was the falling blood pressure.",
      "The symptom that worried the team was: the patient's falling blood pressure."
    ],
    answer: 0,
    rationale: {
      correct: "A colon may follow a complete independent clause to introduce the explanation of what came before; \"One symptom worried the team most\" stands alone as a sentence.",
      wrong: [
        null,
        "A comma cannot join two independent clauses; because the second clause explains the first, a colon is the mark the sentence needs.",
        "The colon separates the subject from its verb, and the words before it do not form a complete clause.",
        "A colon should not follow the linking verb was; the words before a colon must be a complete sentence."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-007",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following correctly shows the play area that belongs to the children?",
    choices: [
      "the childrens' play area",
      "the children's play area",
      "the childrens play area",
      "the childrens's play area"
    ],
    answer: 1,
    rationale: {
      correct: "Children is already plural without an s, so it forms the possessive the regular way, with an apostrophe plus s: the children's play area.",
      wrong: [
        "A bare apostrophe after the s is for plurals that end in s; children is already plural, and childrens is not a word.",
        null,
        "With no apostrophe there is no possessive at all, and childrens is not a correct plural form.",
        "This adds a plural s to a word that is already plural and then adds a possessive ending on top of it."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-008",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following sentences uses hyphens correctly?",
    choices: [
      "The unit switched to twelve hour shifts last spring.",
      "The unit switched to twelve-hour-shifts last spring.",
      "The unit switched to twelve hour-shifts last spring.",
      "The unit switched to twelve-hour shifts last spring."
    ],
    answer: 3,
    rationale: {
      correct: "Two or more words acting as a single adjective before a noun are joined with a hyphen: twelve-hour describes shifts.",
      wrong: [
        "Without the hyphen the words are read separately, so the sentence appears to count twelve shifts rather than describe their length.",
        "The hyphen belongs only inside the compound modifier; the noun being described, shifts, is never attached to it.",
        "This hyphenates the wrong pair; the words working together as one adjective are twelve and hour.",
        null
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-009",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following sentences uses end punctuation correctly?",
    choices: [
      "Did the pharmacist verify the dose.",
      "The pharmacist asked whether the dose had been verified.",
      "The pharmacist asked whether the dose had been verified?",
      "Verify the dose before you leave the unit?"
    ],
    answer: 1,
    rationale: {
      correct: "A sentence that reports a question instead of asking one is an indirect question; it is a declarative statement and ends with a period.",
      wrong: [
        "This is a direct question and must end with a question mark.",
        null,
        "This only reports that a question was asked, so a question mark is wrong; indirect questions take a period.",
        "This is an imperative sentence giving a command, so it ends with a period, not a question mark."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-010",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following is a compound sentence?",
    choices: [
      "After the last patient left, the team restocked the supply cart.",
      "The team restocked the supply cart and mopped the exam rooms.",
      "The last patient left, so the team restocked the supply cart.",
      "Because the shift ended early, the team restocked the cart, and everyone went home."
    ],
    answer: 2,
    rationale: {
      correct: "A compound sentence joins two independent clauses with a comma plus a coordinating conjunction; both \"The last patient left\" and \"the team restocked the supply cart\" could stand alone.",
      wrong: [
        "This is a complex sentence: \"After the last patient left\" is a dependent clause that cannot stand alone.",
        "This is a simple sentence with a compound predicate; one subject performs two verbs, and there is no second independent clause.",
        null,
        "This is compound-complex: one dependent clause plus two independent clauses."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-011",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following corrects the run-on sentence? \"The IV pump alarmed the nurse silenced it and checked the line.\"",
    choices: [
      "The IV pump alarmed, the nurse silenced it and checked the line.",
      "The IV pump alarmed; the nurse silenced it and checked the line.",
      "The IV pump alarmed the nurse, silenced it and checked the line.",
      "The IV pump alarmed and the nurse silenced it and checked the line."
    ],
    answer: 1,
    rationale: {
      correct: "Two fused independent clauses must be separated; a semicolon links closely related independent clauses, and a period or a comma plus a coordinating conjunction would work equally well.",
      wrong: [
        "Replacing the fusion with a lone comma produces a comma splice, which is still a run-on error.",
        null,
        "This makes the nurse the object of alarmed, changing the meaning, and still leaves the clauses tangled.",
        "When and joins two independent clauses it needs a comma in front of it; without one the sentence remains a run-on."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-012",
    sub: "Conventions of Standard English",
    type: "mc",
    q: "Which of the following sentences is capitalized correctly?",
    choices: [
      "In March, Aunt Rita drove North to a Clinic in the Midwest.",
      "In march, aunt Rita drove north to a clinic in the Midwest.",
      "In March, Aunt Rita drove north to a clinic in the Midwest.",
      "In March, aunt Rita drove north to a clinic in the midwest."
    ],
    answer: 2,
    rationale: {
      correct: "Months (March) and a family title used as part of a name (Aunt Rita) are capitalized; a compass direction (north) and a common noun (clinic) are not, while Midwest names a specific region and is a proper noun.",
      wrong: [
        "North here is a direction of travel rather than a named region, and clinic is a common noun, so neither takes a capital.",
        "March is a month and must be capitalized, and Aunt is capitalized because it is used as part of her name.",
        null,
        "Aunt is part of the name Aunt Rita and needs a capital, and Midwest is the name of a region, not a direction."
      ]
    },
    diff: 3,
    secs: 75
  },
  {
    id: "TEB-013",
    sub: "Conventions of Standard English",
    type: "ms",
    q: "Select all that apply. Which of the following groups of words are dependent clauses?",
    choices: [
      "Because the monitor kept alarming",
      "The monitor kept alarming",
      "Until the physician returns from surgery",
      "The physician returned from surgery",
      "Although the dressing looked clean",
      "The dressing looked clean"
    ],
    answer: [0, 2, 4],
    rationale: {
      correct: "A dependent clause has a subject and a verb but opens with a subordinating conjunction (because, until, although), so it cannot stand alone; punctuated as a sentence it becomes a fragment.",
      wrong: [
        null,
        "This is an independent clause: subject (monitor) plus verb (kept alarming) with no subordinator, so it is a complete sentence.",
        null,
        "This is an independent clause and stands alone as a complete sentence.",
        null,
        "This is an independent clause; no subordinating conjunction makes it depend on another clause."
      ]
    },
    diff: 3,
    secs: 90
  },

  /* ===================== KNOWLEDGE OF LANGUAGE (12) ===================== */

  {
    id: "TEB-014",
    sub: "Knowledge of Language",
    type: "mc",
    q: "Which of the following correctly completes the sentence? \"There ___ three empty beds on the medical-surgical unit.\"",
    choices: ["is", "was", "has been", "are"],
    answer: 3,
    rationale: {
      correct: "In a sentence that opens with There, the true subject comes after the verb; the plural subject beds requires the plural verb are.",
      wrong: [
        "Is is singular and cannot agree with the plural subject beds.",
        "Was is singular, so it disagrees with the plural subject beds.",
        "Has been is singular; a plural subject would require have been.",
        null
      ]
    },
    diff: 1,
    secs: 45
  },
  {
    id: "TEB-015",
    sub: "Knowledge of Language",
    type: "mc",
    q: "Which of the following sentences demonstrates correct subject-verb agreement?",
    choices: [
      "The stack of consent forms were left on the counter.",
      "Neither the aides nor the supervisor were told about the change.",
      "Everyone on the night shift has completed the fire-safety module.",
      "The committee of nurses meet in the conference room at noon."
    ],
    answer: 2,
    rationale: {
      correct: "Everyone is a singular indefinite pronoun, so it takes the singular verb has completed no matter how many people work the night shift.",
      wrong: [
        "The subject is the singular noun stack, so the verb should be was left; forms is only the object of the preposition of.",
        "With neither...nor, the verb agrees with the nearer subject, the singular supervisor, so it should be was told.",
        null,
        "Committee is a collective noun treated as singular in American usage, so the verb should be meets."
      ]
    },
    diff: 3,
    secs: 75
  },
  {
    id: "TEB-016",
    sub: "Knowledge of Language",
    type: "mc",
    q: "Which of the following correctly completes the sentence? \"The supervisor confirmed that Amir and ___ would present the in-service.\"",
    choices: ["me", "I", "myself", "him and I"],
    answer: 1,
    rationale: {
      correct: "The pronoun is part of the subject of the clause \"Amir and I would present,\" so the subjective form I is required; drop \"Amir and\" to test it: I would present.",
      wrong: [
        "Me is the objective form and cannot serve as the subject of would present.",
        null,
        "Myself is reflexive and works only when the same person is also the subject, as in \"I taught myself.\"",
        "This replaces the name Amir, which the sentence keeps, and pairs an objective pronoun with a subjective one."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-017",
    sub: "Knowledge of Language",
    type: "mc",
    q: "Which of the following sentences uses pronouns consistently?",
    choices: [
      "A phlebotomist should label each tube before you leave the room.",
      "Phlebotomists should label each tube before he or she leaves the room.",
      "A phlebotomist should label each tube before we leave the room.",
      "Phlebotomists should label each tube before they leave the room."
    ],
    answer: 3,
    rationale: {
      correct: "A pronoun must match its antecedent in both number and person; the plural third-person antecedent phlebotomists takes the plural third-person pronoun they.",
      wrong: [
        "The sentence shifts from third person (a phlebotomist) to second person (you).",
        "The antecedent phlebotomists is plural, so the singular he or she does not agree with it.",
        "The sentence shifts from third person to first person (we), so the pronoun no longer matches its antecedent.",
        null
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-018",
    sub: "Knowledge of Language",
    type: "mc",
    q: "Which of the following correctly completes the sentence? \"By the time the physician arrived, the technician had ___ the samples to the lab.\"",
    choices: ["took", "take", "had took", "taken"],
    answer: 3,
    rationale: {
      correct: "After the helping verb had, an irregular verb must appear in its past participle form; take, took, taken means the participle is taken.",
      wrong: [
        "Took is the simple past form and never follows the helping verb had.",
        "Take is the base form and cannot combine with had to make the past perfect.",
        "This repeats the helping verb and still uses the simple past instead of the participle.",
        null
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-019",
    sub: "Knowledge of Language",
    type: "mc",
    q: "Which revision corrects the misplaced modifier? \"The aide gave a blanket to the patient that had just come out of the dryer.\"",
    choices: [
      "The aide gave a blanket that had just come out of the dryer to the patient.",
      "The aide gave a blanket to the patient, that had just come out of the dryer.",
      "That had just come out of the dryer, the aide gave a blanket to the patient.",
      "The aide, that had just come out of the dryer, gave a blanket to the patient."
    ],
    answer: 0,
    rationale: {
      correct: "A modifying phrase belongs next to the word it describes; placing \"that had just come out of the dryer\" directly after blanket makes clear what was warm.",
      wrong: [
        null,
        "Adding a comma does not move the modifier; it still sits beside patient and describes the wrong noun.",
        "Moving the clause to the front leaves it with nothing to modify and still points to the aide as the thing from the dryer.",
        "This now states that the aide came out of the dryer, and it uses that for a person where who is required."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-020",
    sub: "Knowledge of Language",
    type: "mc",
    q: "Which of the following sentences maintains parallel structure?",
    choices: [
      "Orientation covers hand hygiene, protecting patient privacy, and how to use a fire extinguisher.",
      "Orientation covers hand hygiene, patient privacy, and fire safety.",
      "Orientation covers washing your hands, patient privacy, and to use a fire extinguisher.",
      "Orientation covers hand hygiene, how privacy is protected, and fire safety."
    ],
    answer: 1,
    rationale: {
      correct: "Items in a series must share one grammatical form; hand hygiene, patient privacy, and fire safety are all noun phrases.",
      wrong: [
        "The series mixes a noun phrase, a gerund phrase, and a noun clause instead of keeping a single form.",
        null,
        "The series mixes a gerund phrase, a noun phrase, and an infinitive phrase.",
        "The middle item is a clause while the other two items are noun phrases."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-021",
    sub: "Knowledge of Language",
    type: "mc",
    q: "A student is emailing an instructor about a missed lab. Which of the following openings is most appropriate?",
    choices: [
      "Hey, so I totally spaced on lab yesterday. What'd I miss?",
      "Professor, you never posted anything about lab, so I had no idea it was happening.",
      "Yo prof, lab was a bust for me, hit me back when you get a sec.",
      "Dear Professor Lin, I was absent from Tuesday's lab and would like to make up the work."
    ],
    answer: 3,
    rationale: {
      correct: "Writing to an instructor calls for a formal register: a proper greeting, complete sentences, no slang, and a clear, polite request.",
      wrong: [
        "Hey and \"totally spaced\" are slang, and the clipped question is far too casual for academic correspondence.",
        "The tone is accusatory rather than formal; blaming the reader is inappropriate in a professional request.",
        "Yo, prof, and \"hit me back\" are slang expressions that do not belong in an email to an instructor.",
        null
      ]
    },
    diff: 1,
    secs: 45
  },
  {
    id: "TEB-022",
    sub: "Knowledge of Language",
    type: "mc",
    q: "(1) Handwashing is still the single most effective way to prevent the spread of infection. (2) Soap and water loosen germs so that they can be rinsed away. (3) Alcohol-based gel works well when hands are not visibly soiled. (4) The cafeteria recently added a salad bar. Which sentence should be removed to improve the paragraph's focus?",
    choices: ["Sentence 1", "Sentence 2", "Sentence 3", "Sentence 4"],
    answer: 3,
    rationale: {
      correct: "Every sentence in a paragraph must develop its controlling idea; the salad bar has nothing to do with handwashing or infection control, so it breaks the paragraph's unity.",
      wrong: [
        "Sentence 1 is the topic sentence that states the controlling idea the rest of the paragraph supports.",
        "Sentence 2 supports the topic sentence by explaining how soap and water work.",
        "Sentence 3 supports the topic sentence by naming a second effective method.",
        null
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-023",
    sub: "Knowledge of Language",
    type: "mc",
    q: "Which of the following correctly completes the sentence? \"Most patients tolerate the medication well; ___, a small number report dizziness.\"",
    choices: ["therefore", "however", "for instance", "in addition"],
    answer: 1,
    rationale: {
      correct: "The second clause states an exception to the first, so the sentence needs the contrast transition however.",
      wrong: [
        "Therefore signals a result, but dizziness in a few patients is not a consequence of good tolerance.",
        null,
        "For instance introduces an example of the previous statement rather than an exception to it.",
        "In addition signals another point of the same kind, but the two clauses point in opposite directions."
      ]
    },
    diff: 1,
    secs: 45
  },
  {
    id: "TEB-024",
    sub: "Knowledge of Language",
    type: "mc",
    q: "A writer reads a finished draft line by line to fix comma errors and misspellings. This work belongs to which stage of the writing process?",
    choices: ["Drafting", "Prewriting", "Editing", "Revising"],
    answer: 2,
    rationale: {
      correct: "Editing, also called proofreading, is the late stage that corrects surface mechanics such as spelling, punctuation, capitalization, and grammar.",
      wrong: [
        "Drafting is the stage of getting a first full version of the ideas onto the page.",
        "Prewriting is the planning stage of brainstorming, researching, and outlining before any draft exists.",
        null,
        "Revising reworks big-picture content and organization, such as adding evidence or reordering paragraphs."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-025",
    sub: "Knowledge of Language",
    type: "ms",
    q: "Select all that apply. Which of the following sentences are written in the active voice?",
    choices: [
      "The charge nurse posted the new schedule.",
      "The new schedule was posted by the charge nurse.",
      "A volunteer delivered the flowers to room 412.",
      "The flowers were delivered to room 412.",
      "The pharmacist double-checked the dose.",
      "The dose was double-checked before administration."
    ],
    answer: [0, 2, 4],
    rationale: {
      correct: "In the active voice the subject performs the action: the charge nurse posts, a volunteer delivers, and the pharmacist double-checks.",
      wrong: [
        null,
        "The subject (schedule) receives the action and the doer appears in a by-phrase, the signature of the passive voice.",
        null,
        "The subject (flowers) receives the action and no doer is named, a common passive construction.",
        null,
        "The subject (dose) receives the action of being checked, so the sentence is passive."
      ]
    },
    diff: 3,
    secs: 90
  },

  /* ===================== VOCABULARY ACQUISITION (12) ===================== */

  {
    id: "TEB-026",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "Which of the following is the meaning of the prefix \"circum-\"?",
    choices: ["After", "Around", "Across", "Bad"],
    answer: 1,
    rationale: {
      correct: "Circum- means around, as in circumference, the distance around a circle, and circumnavigate, to travel around something.",
      wrong: [
        "After is the meaning of post-, as in postoperative.",
        null,
        "Across or through is the meaning of trans-, as in transdermal and transfusion.",
        "Bad or faulty is the meaning of mal-, as in malnutrition and malformation."
      ]
    },
    diff: 1,
    secs: 45
  },
  {
    id: "TEB-027",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "Based on its word parts, the term \"bradycardia\" most nearly means which of the following?",
    choices: [
      "A slow heart rate",
      "A rapid heart rate",
      "An enlarged heart",
      "Pain in the region of the heart"
    ],
    answer: 0,
    rationale: {
      correct: "Brady- means slow and cardi means heart, so bradycardia is an abnormally slow heart rate.",
      wrong: [
        null,
        "A rapid heart rate is tachycardia; tachy-, not brady-, means fast.",
        "An enlarged heart is cardiomegaly; -megaly means enlargement.",
        "Pain near the heart is cardialgia; -algia means pain, not slowness."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-028",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "A chart refers to postoperative care. Based on word parts, this care is given at which of the following times?",
    choices: ["Before surgery", "During surgery", "After surgery", "Instead of surgery"],
    answer: 2,
    rationale: {
      correct: "Post- means after and operative refers to the operation, so postoperative care is the care given after surgery.",
      wrong: [
        "Care given before surgery is preoperative; pre- means before.",
        "Care given during the operation is intraoperative; intra- means within or during.",
        null,
        "No part of the word signals a substitute; post- fixes the timing as after the operation."
      ]
    },
    diff: 1,
    secs: 45
  },
  {
    id: "TEB-029",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "Based on its word parts, the term \"hemolysis\" most nearly means which of the following?",
    choices: [
      "The formation of new blood cells",
      "The stopping of blood flow",
      "The presence of blood in the urine",
      "The breakdown of red blood cells"
    ],
    answer: 3,
    rationale: {
      correct: "Hem/o means blood and the suffix -lysis means breakdown or destruction, so hemolysis is the destruction of red blood cells.",
      wrong: [
        "Formation is expressed by -genesis or -poiesis, as in hematopoiesis, the formation of blood cells.",
        "Stopping or holding in place is expressed by -stasis, as in hemostasis, the stopping of bleeding.",
        "Blood in the urine is hematuria; -uria refers to urine and has nothing to do with breakdown.",
        null
      ]
    },
    diff: 3,
    secs: 75
  },
  {
    id: "TEB-030",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "A patient with a migraine reports photophobia. Based on word parts, the patient is bothered by which of the following?",
    choices: ["Sound", "Light", "Motion", "Touch"],
    answer: 1,
    rationale: {
      correct: "Photo- means light and -phobia means fear of or extreme sensitivity to, so photophobia is a painful sensitivity to light.",
      wrong: [
        "Sensitivity to sound is phonophobia; phon/o, not photo-, means sound.",
        null,
        "Sensitivity to movement would use kinesi/o, the root for motion.",
        "No part of photophobia refers to touch; photo- names light specifically."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-031",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "A medication is ordered as a transdermal patch. Based on word parts, the medication enters the body in which of the following ways?",
    choices: [
      "Through the skin",
      "Under the tongue",
      "Into a vein",
      "Around the wound"
    ],
    answer: 0,
    rationale: {
      correct: "Trans- means across or through and derm means skin, so a transdermal patch delivers medication through the skin.",
      wrong: [
        null,
        "Under the tongue is sublingual; sub- means under and lingual refers to the tongue.",
        "Into a vein is intravenous; intra- means within and ven refers to a vein.",
        "Around a structure is peri-, as in pericardial; no part of transdermal means around."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-032",
    sub: "Vocabulary Acquisition",
    type: "ms",
    q: "Select all that apply. Which of the following words begin with a prefix meaning \"against\"?",
    choices: [
      "Antiseptic",
      "Prenatal",
      "Contraindicated",
      "Interdepartmental",
      "Antibacterial",
      "Proactive"
    ],
    answer: [0, 2, 4],
    rationale: {
      correct: "Anti- and contra- both mean against: an antiseptic works against infection, a contraindicated drug has a reason standing against its use, and an antibacterial agent acts against bacteria.",
      wrong: [
        null,
        "Pre- means before, so prenatal means before birth.",
        null,
        "Inter- means between, so interdepartmental means between departments.",
        null,
        "Pro- means forward or in favor of, which is the opposite of against."
      ]
    },
    diff: 3,
    secs: 90
  },
  {
    id: "TEB-033",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "\"The new supervisor was known for her candor; she told the staff exactly what she thought, even when the news was unwelcome.\" As used in the sentence, \"candor\" most nearly means which of the following?",
    choices: ["Honesty", "Cruelty", "Patience", "Humor"],
    answer: 0,
    rationale: {
      correct: "The clause after the semicolon restates the word: telling people exactly what she thought, even when it is unwelcome, is straightforward honesty.",
      wrong: [
        null,
        "Nothing suggests she meant to wound anyone; delivering unwelcome news plainly is not the same as cruelty.",
        "Patience concerns waiting calmly, which the restatement clue never mentions.",
        "Humor would require some sign of joking, but the sentence describes blunt truth-telling."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-034",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "\"Elena's meticulous notes recorded every dose, every time, and every reaction the patient had.\" As used in the sentence, \"meticulous\" most nearly means which of the following?",
    choices: ["Lengthy", "Careless", "Very careful", "Difficult to read"],
    answer: 2,
    rationale: {
      correct: "The examples that follow, every dose, every time, and every reaction, show that the notes were made with exacting attention to detail.",
      wrong: [
        "Length is not the point; the examples describe completeness and precision, not how many words were written.",
        "Careless is the opposite of what recording every detail demonstrates.",
        null,
        "The sentence describes what the notes contain, not how the handwriting looked."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-035",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "\"The laboratory will culture the wound drainage overnight.\" In this sentence, \"culture\" means which of the following?",
    choices: [
      "The shared customs of a group",
      "To grow microorganisms for testing",
      "Appreciation of art and music",
      "To improve one's manners"
    ],
    answer: 1,
    rationale: {
      correct: "Culture is a multiple-meaning word; used as a verb in a laboratory, it means to grow microorganisms in a controlled medium so they can be identified.",
      wrong: [
        "The customs meaning is a noun used in sociology, but here culture is a verb performed on a specimen.",
        null,
        "The arts meaning is also a noun and does not fit a laboratory running a test on drainage.",
        "This meaning applies to refining a person, not to processing a wound specimen."
      ]
    },
    diff: 2,
    secs: 60
  },
  {
    id: "TEB-036",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "Which of the following words has the most positive connotation?",
    choices: ["Scrawny", "Skinny", "Gaunt", "Slender"],
    answer: 3,
    rationale: {
      correct: "All four words share the denotation of thinness, but slender carries approval, suggesting a graceful, healthy build.",
      wrong: [
        "Scrawny is negative, suggesting an underfed, bony thinness.",
        "Skinny is mildly negative, often implying too little weight.",
        "Gaunt is strongly negative, suggesting thinness caused by illness or hunger.",
        null
      ]
    },
    diff: 2,
    secs: 45
  },
  {
    id: "TEB-037",
    sub: "Vocabulary Acquisition",
    type: "mc",
    q: "A nurse is documenting that a patient did not take a prescribed dose. Which of the following best maintains an objective tone?",
    choices: [
      "The patient was being difficult about the morning dose.",
      "The patient stubbornly refused the morning dose.",
      "The patient declined the morning dose.",
      "The patient threw a fit over the morning dose."
    ],
    answer: 2,
    rationale: {
      correct: "Objective documentation reports the observable fact and nothing more; declined states what happened and carries no judgment about the patient.",
      wrong: [
        "Difficult judges the patient's character instead of recording what occurred.",
        "Stubbornly adds a negative interpretation of the patient's motive to an otherwise factual statement.",
        null,
        "Threw a fit is informal and heavily loaded, reporting an opinion about the behavior rather than the behavior itself."
      ]
    },
    diff: 2,
    secs: 60
  }

  ]
};
