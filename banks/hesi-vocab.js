/* HESI A2 Vocabulary & General Knowledge — Form A — 55 items, all mc.
   Subs: clinical-flavored 22 | general academic 25 | word parts/context 8.
   Calibrated faithful: weighted toward everyday academic English; clinical block
   limited to real charting vocabulary. Every rationale defines all four words. */
window.BANKS = window.BANKS || {};
window.BANKS["hesi-vocab"] = {
  exam: "hesi",
  section: "vocabulary",
  questions: [
  {
    id: "HVA-001", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The nurse charted that the patient's abdomen appeared <u>distended</u> during the morning assessment.",
    choices: ["rigid", "swollen", "shrunken", "tender"],
    answer: 1,
    rationale: {
      correct: "Distended means enlarged or expanded from internal pressure - a distended abdomen is bloated and swollen.",
      wrong: ["Rigid means stiff and hard; it describes firmness, not enlargement.", null, "Shrunken means reduced in size - the opposite of distended.", "Tender means painful to the touch; an abdomen can be tender without being enlarged."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-002", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The pump alarm indicated that the IV line was <u>occluded</u>.",
    choices: ["widened", "leaking", "flattened", "blocked"],
    answer: 3,
    rationale: {
      correct: "Occluded means closed off or obstructed so that nothing can pass through.",
      wrong: ["Widened means made broader - closer to dilated, the opposite of occluded.", "Leaking means allowing fluid to escape; an occluded line lets nothing through at all.", "Flattened means pressed flat; a line can be blocked without changing shape.", null]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-003", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: On admission the child was <u>febrile</u> and refusing fluids.",
    choices: ["feverish", "chilled", "drowsy", "restless"],
    answer: 0,
    rationale: {
      correct: "Febrile means having a fever or an elevated body temperature.",
      wrong: [null, "Chilled means cold - the opposite of running a fever.", "Drowsy means sleepy; it describes alertness, not temperature.", "Restless means unable to stay still; it describes activity, not temperature."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-004", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The chart described the patient's mood as <u>labile</u> throughout the shift.",
    choices: ["steadily improving", "deeply depressed", "rapidly shifting", "completely flat"],
    answer: 2,
    rationale: {
      correct: "Labile means unstable and changing rapidly - a labile mood swings quickly between states.",
      wrong: ["Steadily improving describes one consistent direction of change, not quick swings.", "Deeply depressed describes one fixed low mood, not constant change.", null, "Completely flat describes an absence of emotional expression - the opposite of swinging moods."]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVA-005", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The wound showed <u>overt</u> signs of infection.",
    choices: ["hidden", "obvious", "harmful", "early"],
    answer: 1,
    rationale: {
      correct: "Overt means open, obvious, and easily observed.",
      wrong: ["Hidden is the opposite of overt; concealed signs are called covert or occult.", null, "Harmful means causing damage; a sign can be obvious without being harmful in itself.", "Early means near the beginning; overt describes visibility, not timing."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-006", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The ultrasound revealed a <u>tortuous</u> vein in the patient's left leg.",
    choices: ["painful", "swollen", "blocked", "winding"],
    answer: 3,
    rationale: {
      correct: "Tortuous means full of twists and turns - a tortuous vessel winds back and forth.",
      wrong: ["Painful confuses tortuous with torturous, which means causing agony.", "Swollen means enlarged with fluid or pressure, which says nothing about shape.", "Blocked means obstructed - that would be occluded, not tortuous.", null]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVA-007", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The respiratory therapist confirmed that the patient's airway remained <u>patent</u>.",
    choices: ["open", "blocked", "swollen", "noisy"],
    answer: 0,
    rationale: {
      correct: "In health care, patent means open and unobstructed, allowing free passage.",
      wrong: [null, "Blocked is the opposite of patent; an obstructed airway would be occluded.", "Swollen means enlarged with fluid; swelling can threaten an airway, but patent refers to openness.", "Noisy describes the sound of breathing, not whether the passage is open."]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVA-008", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: After running a fever all night, the patient looked <u>flushed</u>.",
    choices: ["pale", "clammy", "reddened", "puffy"],
    answer: 2,
    rationale: {
      correct: "Flushed means having a red or ruddy skin color, often from fever or exertion.",
      wrong: ["Pale means unusually light in color - the opposite condition, called pallor.", "Clammy means cool and damp to the touch; it describes moisture, not color.", null, "Puffy means swollen; it describes shape, not color."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-009", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: Drops were placed in each eye to <u>dilate</u> the pupils before the exam.",
    choices: ["narrow", "widen", "moisten", "cloud"],
    answer: 1,
    rationale: {
      correct: "To dilate means to enlarge, widen, or expand an opening.",
      wrong: ["To narrow means to make smaller - the opposite action, called constricting.", null, "To moisten means to make damp; drops add moisture, but dilate refers to size.", "To cloud means to make hazy; dilation changes size, not clarity."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-010", sub: "clinical-flavored", type: "mc",
    q: "What is the best synonym for the word 'contusion'?",
    choices: ["cut", "scrape", "burn", "bruise"],
    answer: 3,
    rationale: {
      correct: "A contusion is a bruise - an injury that discolors the skin without breaking it.",
      wrong: ["A deep, ragged cut is a laceration.", "A scrape on the skin surface is an abrasion.", "A burn is tissue damage from heat, chemicals, or radiation - not a bruise.", null]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-011", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: Following the procedure, the patient was <u>lethargic</u> and answered questions slowly.",
    choices: ["drowsy", "confused", "anxious", "aggressive"],
    answer: 0,
    rationale: {
      correct: "Lethargic means sluggish, drowsy, and difficult to rouse.",
      wrong: [null, "Confused means unable to think clearly; a lethargic patient may answer correctly, just slowly.", "Anxious means worried and uneasy; it describes mood, not energy level.", "Aggressive means hostile or combative - not sluggish."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-012", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The infant's lips appeared <u>cyanotic</u> during the feeding.",
    choices: ["yellowish", "reddened", "bluish", "blotchy"],
    answer: 2,
    rationale: {
      correct: "Cyanotic means having a bluish discoloration caused by low oxygen in the blood.",
      wrong: ["Yellowish coloring is called jaundice and points to liver problems, not low oxygen.", "Reddened skin is described as flushed and usually reflects fever or exertion.", null, "Blotchy means irregularly patched in color, with no link to oxygen level."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-013", sub: "clinical-flavored", type: "mc",
    q: "What is the best synonym for the word 'abate'?",
    choices: ["worsen", "subside", "return", "spread"],
    answer: 1,
    rationale: {
      correct: "To abate means to lessen in amount or intensity - a fever that abates is coming down.",
      wrong: ["To worsen means to become more severe - the opposite of abate.", null, "To return means to come back after going away, which says nothing about lessening.", "To spread means to extend over a wider area; abating symptoms shrink rather than extend."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-014", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The patient reported an <u>acute</u> pain in the lower back that began this morning.",
    choices: ["mild", "lingering", "throbbing", "sudden"],
    answer: 3,
    rationale: {
      correct: "Acute means sudden in onset, sharp, and short in duration - the opposite of chronic.",
      wrong: ["Mild means slight in degree; acute pain is typically severe.", "Lingering means lasting a long time, which describes chronic rather than acute pain.", "Throbbing describes a pulsing quality of pain, not its sudden onset.", null]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-015", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The patient was unable to <u>void</u> despite drinking fluids all afternoon.",
    choices: ["urinate", "defecate", "vomit", "sweat"],
    answer: 0,
    rationale: {
      correct: "To void means to empty the bladder - to urinate.",
      wrong: [null, "To defecate means to have a bowel movement, not to pass urine.", "To vomit means to expel stomach contents through the mouth.", "To sweat means to release moisture through the skin."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-016", sub: "clinical-flavored", type: "mc",
    q: "What is the best synonym for the word 'ambulate'?",
    choices: ["stand", "rest", "walk", "eat"],
    answer: 2,
    rationale: {
      correct: "To ambulate means to walk or move about.",
      wrong: ["To stand is to be upright in place; ambulating requires moving.", "To rest is to remain inactive - the opposite of moving about.", null, "To eat is to take in food and has no connection to movement."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-017", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The nurse noted that the surgical dressing was <u>intact</u>.",
    choices: ["soaked", "unbroken", "loosened", "discolored"],
    answer: 1,
    rationale: {
      correct: "Intact means whole, undamaged, and in place.",
      wrong: ["Soaked means saturated with fluid - a soaked dressing would need changing.", null, "Loosened means no longer securely attached - not whole and in place.", "Discolored means changed in color, often from drainage; intact refers to condition, not color."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-018", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: For two days before the rash appeared, the patient reported a general <u>malaise</u>.",
    choices: ["a sharp pain", "a burst of energy", "a loss of appetite", "a sense of unwellness"],
    answer: 3,
    rationale: {
      correct: "Malaise is a vague, general feeling of discomfort or being unwell.",
      wrong: ["A sharp pain is a specific, localized complaint; malaise is vague and general.", "A burst of energy is the opposite of the run-down feeling of malaise.", "A loss of appetite, called anorexia, is one specific symptom - malaise is an overall feeling.", null]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-019", sub: "clinical-flavored", type: "mc",
    q: "What is the best description for the term 'prognosis'?",
    choices: ["the expected course of a disease", "the identification of a disease", "the cause of a disease", "the treatment plan for a disease"],
    answer: 0,
    rationale: {
      correct: "A prognosis is the predicted outcome - how a disease is expected to progress or resolve.",
      wrong: [null, "Identifying a disease from its signs and tests is the diagnosis.", "The cause or origin of a disease is its etiology.", "A plan of care describes treatment; prognosis predicts outcome."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-020", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The patient was positioned <u>supine</u> for the abdominal examination.",
    choices: ["lying on the stomach", "lying on the side", "lying on the back", "sitting upright"],
    answer: 2,
    rationale: {
      correct: "Supine means lying flat on the back, face up.",
      wrong: ["Lying face down on the stomach is the prone position.", "Lying on the side is the lateral position.", null, "Sitting upright describes a seated position such as Fowler's position."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-021", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The infection can remain <u>latent</u> in the body for years before causing symptoms.",
    choices: ["worsening", "contagious", "obvious", "dormant"],
    answer: 3,
    rationale: {
      correct: "Latent means present but inactive and hidden - there, but not yet producing effects.",
      wrong: ["Worsening means actively becoming more severe; a latent infection is not active at all.", "Contagious means able to spread to others, which is separate from being active or inactive.", "Obvious means easily seen - the opposite of hidden.", null]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVA-022", sub: "clinical-flavored", type: "mc",
    q: "What is the best description for the term 'triage'?",
    choices: ["cleansing a wound to prevent infection", "sorting patients by urgency of treatment", "recording a patient's vital signs", "moving a patient between departments"],
    answer: 1,
    rationale: {
      correct: "Triage is the process of ranking patients so the most urgent needs are treated first.",
      wrong: ["Cleansing a wound describes irrigation, not setting treatment order.", null, "Recording vital signs is routine assessment, not deciding treatment order.", "Moving a patient between departments is a transfer."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-023", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The monitor showed an <u>abrupt</u> change in the patient's heart rhythm.",
    choices: ["gradual", "rude", "sudden", "mild"],
    answer: 2,
    rationale: {
      correct: "Abrupt means sudden and unexpected.",
      wrong: ["Gradual means happening slowly over time - the opposite of abrupt.", "Rude is another sense of abrupt that fits a curt person, not a change in rhythm.", null, "Mild means slight in degree; abrupt describes how fast, not how strong."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-024", sub: "general academic", type: "mc",
    q: "What is the best synonym for the word 'concise'?",
    choices: ["brief", "thorough", "vague", "formal"],
    answer: 0,
    rationale: {
      correct: "Concise means brief and to the point, using no unnecessary words.",
      wrong: [null, "Thorough means complete and detailed - often the opposite of brief.", "Vague means unclear; a concise statement is short but still clear.", "Formal describes tone and style, not length."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-025", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: Patients must <u>abstain</u> from eating after midnight before the procedure.",
    choices: ["indulge", "rest", "recover", "refrain"],
    answer: 3,
    rationale: {
      correct: "To abstain means to voluntarily hold back from doing something - to refrain.",
      wrong: ["To indulge means to freely allow oneself something - the opposite of abstaining.", "To rest means to relax or sleep; abstaining is about not doing a specific thing.", "To recover means to return to health, not to hold back from an activity.", null]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-026", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: Without treatment, the patient's eyesight will <u>deteriorate</u>.",
    choices: ["improve", "worsen", "stabilize", "fluctuate"],
    answer: 1,
    rationale: {
      correct: "To deteriorate means to become progressively worse.",
      wrong: ["To improve means to get better - the opposite of deteriorate.", null, "To stabilize means to stop changing and hold steady.", "To fluctuate means to shift back and forth, not to steadily decline."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-027", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The charge nurse warned staff that a shortage of beds was <u>imminent</u>.",
    choices: ["already resolved", "highly unlikely", "hard to measure", "close at hand"],
    answer: 3,
    rationale: {
      correct: "Imminent means about to happen very soon.",
      wrong: ["Already resolved means finished and fixed; an imminent problem has not happened yet.", "Highly unlikely means probably not going to occur; imminent events are expected.", "Hard to measure describes difficulty in assessment, not nearness in time.", null]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-028", sub: "general academic", type: "mc",
    q: "What is the best synonym for the word 'mitigate'?",
    choices: ["lessen", "eliminate", "measure", "conceal"],
    answer: 0,
    rationale: {
      correct: "To mitigate means to make something less severe or less harmful.",
      wrong: [null, "To eliminate means to remove completely - mitigation only reduces, never erases.", "To measure means to determine the size or amount of something.", "To conceal means to hide; mitigating reduces harm rather than hiding it."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-029", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The normally <u>docile</u> resident became combative during the night shift.",
    choices: ["drowsy", "cheerful", "cooperative", "fragile"],
    answer: 2,
    rationale: {
      correct: "Docile means calm, compliant, and easily managed.",
      wrong: ["Drowsy means sleepy; a person can be wide awake and still docile.", "Cheerful means visibly happy; docile is about compliance, not mood.", null, "Fragile means easily broken or physically delicate, not easygoing."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-030", sub: "general academic", type: "mc",
    q: "What is the best synonym for the word 'ravenous'?",
    choices: ["furious", "starving", "exhausted", "thirsty"],
    answer: 1,
    rationale: {
      correct: "Ravenous means extremely hungry.",
      wrong: ["Furious means extremely angry - a raging mood, not an appetite.", null, "Exhausted means extremely tired; ravenous is about hunger, not energy.", "Thirsty refers to needing fluids; ravenous refers to food."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-031", sub: "general academic", type: "mc",
    q: "The phrase 'passed away' is often used instead of 'died.' This phrase is an example of a euphemism, which is best described as:",
    choices: ["a word that imitates a sound", "a greatly exaggerated statement", "a comparison using like or as", "a gentle substitute for a harsh expression"],
    answer: 3,
    rationale: {
      correct: "A euphemism is a mild or agreeable expression used in place of one that is blunt or offensive.",
      wrong: ["A word that imitates a sound is onomatopoeia, such as buzz or hiss.", "A greatly exaggerated statement is hyperbole.", "A comparison using like or as is a simile.", null]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVA-032", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The pharmacist <u>scrutinized</u> the handwritten order before filling it.",
    choices: ["inspected", "rejected", "copied", "filed"],
    answer: 0,
    rationale: {
      correct: "To scrutinize means to examine something closely and carefully.",
      wrong: [null, "To reject means to refuse; scrutinizing an order may lead to filling it anyway.", "To copy means to duplicate, not to study closely.", "To file means to store in order; scrutiny is examination, not storage."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-033", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: She was <u>meticulous</u> about recording every dose she administered.",
    choices: ["hurried", "casual", "precise", "anxious"],
    answer: 2,
    rationale: {
      correct: "Meticulous means extremely careful and precise about details.",
      wrong: ["Hurried means rushed - careful attention to detail takes time.", "Casual means relaxed and unconcerned, close to the opposite of meticulous.", null, "Anxious means worried; a person can be precise without being nervous."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-034", sub: "general academic", type: "mc",
    q: "What is the best synonym for the word 'pragmatic'?",
    choices: ["idealistic", "practical", "stubborn", "emotional"],
    answer: 1,
    rationale: {
      correct: "Pragmatic means dealing with problems in a practical, realistic way.",
      wrong: ["Idealistic means guided by ideals over practicality - the usual contrast to pragmatic.", null, "Stubborn means refusing to change; a pragmatic person changes course when it works better.", "Emotional means driven by feelings; pragmatism is driven by results."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-035", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: Patient safety is <u>paramount</u> during every transfer.",
    choices: ["secondary", "optional", "obvious", "supreme"],
    answer: 3,
    rationale: {
      correct: "Paramount means most important - ranking above everything else.",
      wrong: ["Secondary means of lesser importance - the opposite of paramount.", "Optional means left to choice; a paramount concern can never be skipped.", "Obvious means easily seen; paramount describes importance, not visibility.", null]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-036", sub: "general academic", type: "mc",
    q: "What is the best synonym for the word 'frugal'?",
    choices: ["thrifty", "wasteful", "generous", "careless"],
    answer: 0,
    rationale: {
      correct: "Frugal means economical - careful not to waste money or resources.",
      wrong: [null, "Wasteful means using more than needed - the opposite of frugal.", "Generous means giving freely; frugality is about spending little, not giving much.", "Careless means lacking attention; frugal people are deliberate with resources."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-037", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: Some soreness is <u>inevitable</u> after this type of surgery.",
    choices: ["unbearable", "unexpected", "unavoidable", "unusual"],
    answer: 2,
    rationale: {
      correct: "Inevitable means certain to happen - impossible to avoid.",
      wrong: ["Unbearable means too severe to endure; inevitable soreness may still be mild.", "Unexpected means surprising; an inevitable outcome is fully expected.", null, "Unusual means rare; inevitable soreness happens in nearly every case."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-038", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The audit found a <u>discrepancy</u> between the two medication counts.",
    choices: ["an agreement", "an inconsistency", "a shortage", "a summary"],
    answer: 1,
    rationale: {
      correct: "A discrepancy is a difference between things that should match.",
      wrong: ["An agreement means the counts match - the opposite of a discrepancy.", null, "A shortage is a lack of supply; two counts can disagree even with plenty on hand.", "A summary is a brief restatement, not a mismatch."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-039", sub: "general academic", type: "mc",
    q: "What is the best synonym for the word 'zealous'?",
    choices: ["jealous", "cautious", "skillful", "enthusiastic"],
    answer: 3,
    rationale: {
      correct: "Zealous means filled with eager enthusiasm and devotion to a cause.",
      wrong: ["Jealous means resentfully envious - a sound-alike word, not a synonym.", "Cautious means careful to avoid risk; zeal is eager energy, not restraint.", "Skillful means capable and adept - competence, not eagerness.", null]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVA-040", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The student nurse appeared <u>contrite</u> after arriving late for the third time.",
    choices: ["remorseful", "defiant", "indifferent", "exhausted"],
    answer: 0,
    rationale: {
      correct: "Contrite means feeling sincere regret for having done wrong.",
      wrong: [null, "Defiant means openly resisting - the opposite of showing regret.", "Indifferent means not caring either way; a contrite person clearly cares.", "Exhausted means extremely tired; it describes energy, not remorse."]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVA-041", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: He filled the awkward silence with <u>banal</u> remarks about the weather.",
    choices: ["offensive", "clever", "unoriginal", "harmful"],
    answer: 2,
    rationale: {
      correct: "Banal means ordinary, unoriginal, and boring from overuse.",
      wrong: ["Offensive means insulting; banal remarks are dull, not rude.", "Clever means original and witty - the opposite of banal.", null, "Harmful confuses banal with baneful, which means causing harm."]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVA-042", sub: "general academic", type: "mc",
    q: "What is the best synonym for the word 'coerce'?",
    choices: ["persuade", "compel", "forbid", "deceive"],
    answer: 1,
    rationale: {
      correct: "To coerce means to force someone to act through pressure or threats.",
      wrong: ["To persuade means to win someone over by reasoning - willing agreement, not force.", null, "To forbid means to prohibit an action, not to force one.", "To deceive means to mislead by lying; coercion is open pressure, not trickery."]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVA-043", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The clinic replaced its <u>obsolete</u> paper filing system last year.",
    choices: ["broken", "expensive", "temporary", "outdated"],
    answer: 3,
    rationale: {
      correct: "Obsolete means no longer in use because something better has replaced it.",
      wrong: ["Broken means not working; an obsolete system can still work perfectly.", "Expensive means costly; obsolescence is about age, not price.", "Temporary means meant to last a short time; the old system was simply out of date.", null]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-044", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The weekend program gives family caregivers a brief <u>respite</u>.",
    choices: ["rest", "chore", "relapse", "reward"],
    answer: 0,
    rationale: {
      correct: "A respite is a short period of rest or relief from something demanding.",
      wrong: [null, "A chore is a routine task - more work, not relief from it.", "A relapse is a return of illness after improvement.", "A reward is something given for merit; a respite is a break, earned or not."]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVA-045", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: Before surgery, the team verified that the consent form was still <u>valid</u>.",
    choices: ["expired", "optional", "legitimate", "valuable"],
    answer: 2,
    rationale: {
      correct: "Valid means well-grounded and legally or logically acceptable.",
      wrong: ["Expired means no longer in effect - the opposite of valid.", "Optional means left to choice; consent is required, and valid describes soundness anyway.", null, "Valuable means worth a great deal - a sound-alike, not a synonym."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-046", sub: "general academic", type: "mc",
    q: "What is the best synonym for the word 'trepidation'?",
    choices: ["enthusiasm", "apprehension", "confidence", "indifference"],
    answer: 1,
    rationale: {
      correct: "Trepidation is fearful uncertainty - nervous dread about what is coming.",
      wrong: ["Enthusiasm is eager excitement - welcoming what is coming rather than dreading it.", null, "Confidence is assurance of success - the opposite of nervous dread.", "Indifference is a lack of interest or concern either way."]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVA-047", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The discharge instructions were <u>ambiguous</u>, so the patient called the clinic to clarify.",
    choices: ["detailed", "strict", "outdated", "unclear"],
    answer: 3,
    rationale: {
      correct: "Ambiguous means open to more than one interpretation - unclear in meaning.",
      wrong: ["Detailed means thorough; detailed instructions would need less clarifying, not more.", "Strict means rigid and demanding; the problem here is meaning, not rigor.", "Outdated means no longer current; the instructions were confusing, not old.", null]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-048", sub: "word parts/context", type: "mc",
    q: "In the term 'bradycardia,' the prefix brady- means:",
    choices: ["slow", "fast", "irregular", "weak"],
    answer: 0,
    rationale: {
      correct: "Brady- means slow, so bradycardia is an abnormally slow heart rate.",
      wrong: [null, "Fast is the prefix tachy-, as in tachycardia.", "Irregular rhythm is described by terms like arrhythmia, not by brady-.", "Weak is not carried by any part of bradycardia; brady- concerns speed."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-049", sub: "word parts/context", type: "mc",
    q: "A patient with hypoglycemia has a blood sugar level that is:",
    choices: ["above normal", "equal to normal", "below normal", "returning to normal"],
    answer: 2,
    rationale: {
      correct: "The prefix hypo- means deficient or below normal, so hypoglycemia is low blood sugar.",
      wrong: ["Above normal would be hyper-, as in hyperglycemia.", "Equal to normal would use the prefix eu-, meaning good or normal.", null, "No word part in hypoglycemia indicates change back toward normal."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVA-050", sub: "word parts/context", type: "mc",
    q: "In terms such as 'arthritis' and 'hepatitis,' the suffix -itis means:",
    choices: ["inflammation", "infection", "removal", "enlargement"],
    answer: 0,
    rationale: {
      correct: "The suffix -itis means inflammation - arthritis is inflammation of a joint.",
      wrong: [null, "Infection is a common cause of inflammation, but -itis itself means only inflammation.", "Surgical removal is the suffix -ectomy.", "Enlargement is the suffix -megaly, as in cardiomegaly."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-051", sub: "word parts/context", type: "mc",
    q: "A patient scheduled for an appendectomy will have the appendix:",
    choices: ["surgically repaired", "surgically removed", "viewed with a scope", "opened by incision"],
    answer: 1,
    rationale: {
      correct: "The suffix -ectomy means surgical removal, so an appendectomy takes the appendix out.",
      wrong: ["Surgical repair is the suffix -plasty, as in rhinoplasty.", null, "Visual examination with an instrument is the suffix -scopy, as in colonoscopy.", "Cutting into an organ is the suffix -otomy, as in tracheotomy."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-052", sub: "word parts/context", type: "mc",
    q: "The suffix -emia, as in 'anemia,' refers to a condition of the:",
    choices: ["urine", "joints", "blood", "skin"],
    answer: 2,
    rationale: {
      correct: "The suffix -emia means a blood condition - anemia is a lack of healthy red blood cells.",
      wrong: ["Urine conditions use the suffix -uria, as in hematuria.", "Joint conditions use the root arthr-, as in arthritis.", null, "Skin conditions use the root derm-, as in dermatitis."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-053", sub: "word parts/context", type: "mc",
    q: "In the word 'pericardium,' the prefix peri- means:",
    choices: ["around", "within", "above", "through"],
    answer: 0,
    rationale: {
      correct: "Peri- means around - the pericardium is the sac surrounding the heart.",
      wrong: [null, "Within is the prefix endo- or intra-, as in endoscopy and intravenous.", "Above is the prefix supra- or super-.", "Through or across is the prefix trans-, as in transdermal."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVA-054", sub: "word parts/context", type: "mc",
    q: "Using word parts, a patient with 'oliguria' is producing:",
    choices: ["an excessive amount of urine", "urine containing blood", "a scanty amount of urine", "urine produced at night"],
    answer: 2,
    rationale: {
      correct: "Olig- means few or scanty and -uria means a urine condition, so oliguria is low urine output.",
      wrong: ["Excessive urine output uses the prefix poly-, as in polyuria.", "Blood in the urine uses the root hemat-, as in hematuria.", null, "Nighttime urination uses the root noct-, as in nocturia."]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVA-055", sub: "word parts/context", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The first responder used firm pressure to <u>staunch</u> the bleeding from the laceration.",
    choices: ["hide", "stop", "clean", "measure"],
    answer: 1,
    rationale: {
      correct: "To staunch means to stop or check the flow of something, especially blood - the sentence context of applying pressure signals it.",
      wrong: ["To hide means to conceal from view; pressure controls bleeding rather than covering it.", null, "To clean means to remove dirt or germs, which pressure alone does not do.", "To measure means to determine an amount; the responder is controlling flow, not gauging it."]
    },
    diff: 3, secs: 65
  }
  ]
};
