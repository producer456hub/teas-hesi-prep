/* HESI A2 Vocabulary & General Knowledge — Form B — 55 items, all mc.
   Subs: clinical-flavored 22 | general academic 25 | word parts/context 8.
   ZERO target-word overlap with Form A (hesi-vocab.js): every tested word and
   every tested affix here is different. Affixes: -megaly, -plasty, -scopy,
   poly-, dys-, -penia, ante-, retro- (Form A used brady-, hypo-, -itis,
   -ectomy, -emia, peri-, olig-).
   Calibrated faithful: weighted toward everyday academic English; clinical block
   limited to real charting vocabulary. Every rationale defines all four words. */
window.BANKS = window.BANKS || {};
window.BANKS["hesi-vocab-b"] = {
  exam: "hesi",
  section: "vocab",
  form: "B",
  questions: [
  {
    id: "HVB-001", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The physician asked whether the patient had been able to <u>adhere</u> to the new medication schedule.",
    choices: ["stick to", "object to", "pay for", "understand"],
    answer: 0,
    rationale: {
      correct: "To adhere means to hold fast or follow closely, so adhering to a schedule means sticking to it as directed.",
      wrong: [null, "To object to means to voice opposition, which is refusing the plan rather than following it.", "To pay for means to cover the cost; adherence is about following the plan, not funding it.", "To understand means to grasp the meaning; a patient can understand a schedule perfectly and still not follow it."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-002", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The nurse watched for any <u>adverse</u> reaction after the first dose.",
    choices: ["expected", "delayed", "harmful", "allergic"],
    answer: 2,
    rationale: {
      correct: "Adverse means undesired and possibly harmful.",
      wrong: ["Expected means anticipated; an adverse reaction is unwanted whether or not anyone anticipated it.", "Delayed means late in appearing; adverse describes the nature of a reaction, not its timing.", null, "Allergic names one specific kind of harmful reaction, while adverse covers any undesired effect."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVB-003", sub: "clinical-flavored", type: "mc",
    q: "What is the best synonym for the word 'alleviate'?",
    choices: ["prevent", "relieve", "diagnose", "worsen"],
    answer: 1,
    rationale: {
      correct: "To alleviate means to lessen or relieve something such as pain or distress.",
      wrong: ["To prevent means to keep something from happening at all; alleviating eases a problem that is already present.", null, "To diagnose means to identify a disease, not to ease it.", "To worsen means to make more severe, which is the opposite of alleviate."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVB-004", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The dressing change must be performed using <u>aseptic</u> technique.",
    choices: ["painless", "rapid", "gentle", "sterile"],
    answer: 3,
    rationale: {
      correct: "Aseptic means free of disease-causing organisms, in other words sterile.",
      wrong: ["Painless means causing no pain; a germ-free procedure can still hurt.", "Rapid means fast, and speed has nothing to do with freedom from germs.", "Gentle means done with care and light pressure, which is not the same as germ-free.", null]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-005", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The biopsy showed that the growth was <u>benign</u>.",
    choices: ["cancerous", "harmless", "infected", "enlarging"],
    answer: 1,
    rationale: {
      correct: "Benign means not harmful and not cancerous.",
      wrong: ["Cancerous describes a malignant growth, the opposite of benign.", null, "Infected means invaded by germs; a benign growth is simply not cancerous.", "Enlarging means growing bigger, which a benign growth may or may not do."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVB-006", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The chart noted <u>bilateral</u> swelling of the ankles.",
    choices: ["on both sides", "on one side", "below the knee", "around the joint"],
    answer: 0,
    rationale: {
      correct: "Bilateral means occurring on both sides, since bi- means two.",
      wrong: [null, "Affecting only one side is unilateral, from uni- meaning one.", "Below the knee describes a location on the leg rather than a number of sides.", "Around a joint is periarticular; bilateral counts sides instead."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVB-007", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The patient has a <u>chronic</u> cough that has lasted more than a year.",
    choices: ["short-lived", "intermittent", "unpredictable", "long-lasting"],
    answer: 3,
    rationale: {
      correct: "Chronic means persisting for a long time or recurring repeatedly.",
      wrong: ["Short-lived means lasting only a brief time, which describes an acute problem instead.", "Intermittent means starting and stopping; a chronic cough persists rather than comes and goes.", "Unpredictable means occurring without a pattern, which says nothing about how long it lasts.", null]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVB-008", sub: "clinical-flavored", type: "mc",
    q: "What is the best synonym for the word 'constrict'?",
    choices: ["lengthen", "soften", "narrow", "thicken"],
    answer: 2,
    rationale: {
      correct: "To constrict means to draw together so that a passage becomes smaller or narrower.",
      wrong: ["To lengthen means to make longer; constricting changes width, not length.", "To soften means to make less firm, which says nothing about the size of an opening.", null, "To thicken means to make denser, not to draw a passage smaller."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVB-009", sub: "clinical-flavored", type: "mc",
    q: "What is the best description for the term 'contraindication'?",
    choices: ["a reason a treatment should not be used", "a sign that a disease is present", "an unwanted effect of a drug", "a rule for storing a medication"],
    answer: 0,
    rationale: {
      correct: "A contraindication is a specific reason that makes a treatment inadvisable or unsafe for a particular patient.",
      wrong: [null, "A sign that a disease is present is a symptom or clinical manifestation.", "An unwanted effect of a drug is an adverse effect or side effect.", "A rule for storing a medication is a handling instruction, not a reason to withhold the drug."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-010", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The nurse checked the pulse <u>distal</u> to the new cast.",
    choices: ["closer to the trunk", "farther from the trunk", "toward the back", "toward the midline"],
    answer: 1,
    rationale: {
      correct: "Distal means farther from the center of the body or from the point of attachment, so the pulse is checked beyond the cast.",
      wrong: ["Closer to the trunk or to the point of attachment is proximal.", null, "Toward the back of the body is posterior.", "Toward the midline of the body is medial."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-011", sub: "clinical-flavored", type: "mc",
    q: "What is the best synonym for the word 'edema'?",
    choices: ["bruising", "bleeding", "stiffness", "swelling"],
    answer: 3,
    rationale: {
      correct: "Edema is swelling caused by excess fluid trapped in the body's tissues.",
      wrong: ["Bruising is discoloration from blood pooling under unbroken skin, called a contusion.", "Bleeding is the escape of blood from a vessel; heavy bleeding is called hemorrhage.", "Stiffness is reduced flexibility in a joint or muscle, not a buildup of fluid.", null]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVB-012", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The <u>emaciated</u> patient weighed only ninety pounds on admission.",
    choices: ["extremely pale", "extremely weak", "extremely thin", "extremely restless"],
    answer: 2,
    rationale: {
      correct: "Emaciated means abnormally thin and wasted, usually from malnutrition or long illness.",
      wrong: ["Extreme paleness of the skin is called pallor.", "Extreme weakness is called debility; a very thin patient may still have strength.", null, "Extreme restlessness is agitation, which describes activity rather than body mass."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-013", sub: "clinical-flavored", type: "mc",
    q: "What is the best synonym for the word 'exacerbate'?",
    choices: ["aggravate", "soothe", "postpone", "disguise"],
    answer: 0,
    rationale: {
      correct: "To exacerbate means to make a condition worse or more severe.",
      wrong: [null, "To soothe means to calm or relieve, the opposite of making something worse.", "To postpone means to put off until later; exacerbating changes severity, not timing.", "To disguise means to hide the appearance of something rather than intensify it."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-014", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: After the stroke, the patient's right arm remained <u>flaccid</u>.",
    choices: ["rigid", "swollen", "limp", "numb"],
    answer: 2,
    rationale: {
      correct: "Flaccid means soft and limp, lacking normal muscle tone.",
      wrong: ["Rigid means stiff and unbending, which in muscle is described as spastic.", "Swollen means enlarged with fluid, which is unrelated to muscle tone.", null, "Numb means without sensation; a limb can be numb and still have firm tone."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-015", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The onset of this disease is <u>insidious</u>, so patients often seek care late.",
    choices: ["sudden and severe", "gradual and subtle", "painful and constant", "brief and mild"],
    answer: 1,
    rationale: {
      correct: "Insidious means developing so gradually and quietly that it goes unnoticed until well advanced.",
      wrong: ["Sudden, severe onset describes an acute or precipitous condition.", null, "Painful and constant describes the quality of symptoms, not how quietly a disease begins.", "Brief and mild describes a short, minor illness, while insidious disease is slow but often serious."]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVB-016", sub: "clinical-flavored", type: "mc",
    q: "What is the best synonym for the word 'laceration'?",
    choices: ["a bruise", "a scrape", "a blister", "a deep cut"],
    answer: 3,
    rationale: {
      correct: "A laceration is a deep, ragged cut or tear in the skin.",
      wrong: ["A bruise, also called a contusion, discolors the skin without breaking it.", "A scrape of the skin surface is an abrasion.", "A fluid-filled bubble raised on the skin is a blister.", null]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVB-017", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The nurse documented <u>pallor</u> of the lips and nail beds.",
    choices: ["paleness", "blueness", "yellowing", "redness"],
    answer: 0,
    rationale: {
      correct: "Pallor is an unusual paleness or loss of normal color in the skin.",
      wrong: [null, "A bluish discoloration caused by low oxygen is cyanosis.", "A yellow tint of the skin and eyes is jaundice.", "A reddened, ruddy appearance is described as flushed."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-018", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The patient was turned to the <u>prone</u> position to relieve pressure on the back.",
    choices: ["lying on the back", "lying face down", "lying on the side", "sitting upright"],
    answer: 1,
    rationale: {
      correct: "Prone means lying flat on the stomach, face down.",
      wrong: ["Lying flat on the back, face up, is the supine position.", null, "Lying on the side is the lateral position.", "Sitting upright in bed is Fowler's position."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-019", sub: "clinical-flavored", type: "mc",
    q: "What is the best description for the term 'remission'?",
    choices: ["a return of disease after improvement", "the first appearance of a disease", "a period when disease signs fade", "the spread of disease to new tissue"],
    answer: 2,
    rationale: {
      correct: "Remission is a period during which the signs and symptoms of a disease decrease or disappear.",
      wrong: ["A return of disease after a period of improvement is a relapse.", "The first appearance of a disease is its onset.", null, "The spread of disease to distant tissue is metastasis."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-020", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: Warm soaks were ordered for their <u>therapeutic</u> effect on the joint.",
    choices: ["cooling", "cleansing", "numbing", "healing"],
    answer: 3,
    rationale: {
      correct: "Therapeutic means relating to the treatment or healing of a condition.",
      wrong: ["Cooling means lowering temperature; a therapeutic measure can just as easily be warm.", "Cleansing means removing dirt or germs, which is hygiene rather than treatment.", "Numbing means removing sensation, one specific drug effect rather than healing in general.", null]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVB-021", sub: "clinical-flavored", type: "mc",
    q: "What is the best synonym for the word 'viscosity'?",
    choices: ["thickness", "clarity", "volume", "temperature"],
    answer: 0,
    rationale: {
      correct: "Viscosity is a liquid's resistance to flowing, in everyday terms its thickness.",
      wrong: [null, "Clarity is how clear or transparent a liquid is, not how easily it flows.", "Volume is the amount of space a liquid occupies.", "Temperature is how hot or cold a liquid is; it can change viscosity but is not the same property."]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVB-022", sub: "clinical-flavored", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The team met to review the <u>untoward</u> events of the previous shift.",
    choices: ["unplanned", "unfavorable", "unreported", "uncommon"],
    answer: 1,
    rationale: {
      correct: "Untoward means unfavorable, adverse, or troublesome.",
      wrong: ["Unplanned means not arranged in advance; a harmful event can be anticipated and still occur.", null, "Unreported means not documented, which describes record-keeping rather than the event itself.", "Uncommon means rare, yet untoward events can unfortunately be common."]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVB-023", sub: "general academic", type: "mc",
    q: "What is the best synonym for the word 'augment'?",
    choices: ["replace", "increase", "estimate", "restrict"],
    answer: 1,
    rationale: {
      correct: "To augment means to add to something in order to make it greater.",
      wrong: ["To replace means to put something new in place of the old, while augmenting keeps the original and adds to it.", null, "To estimate means to judge an approximate amount, not to enlarge it.", "To restrict means to limit or hold back, the opposite of augment."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-024", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The pharmacy alerted staff that <u>counterfeit</u> pills were circulating in the area.",
    choices: ["expired", "stolen", "unlabeled", "fake"],
    answer: 3,
    rationale: {
      correct: "Counterfeit means made in imitation of something genuine in order to deceive.",
      wrong: ["Expired means past the usable date; an expired pill is still a genuine product.", "Stolen means taken without permission, which says nothing about authenticity.", "Unlabeled means missing its identifying information rather than being an imitation.", null]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVB-025", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: Blood work showed that the patient was <u>deficient</u> in iron.",
    choices: ["lacking", "excessive", "unstable", "average"],
    answer: 0,
    rationale: {
      correct: "Deficient means lacking, or falling short of the amount that is needed.",
      wrong: [null, "Excessive means more than is needed, the opposite of deficient.", "Unstable means changing unpredictably; a deficiency is a shortage, not a fluctuation.", "Average means at the usual expected level, which a deficient level is not."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVB-026", sub: "general academic", type: "mc",
    q: "What is the best synonym for the word 'depict'?",
    choices: ["conceal", "measure", "portray", "improve"],
    answer: 2,
    rationale: {
      correct: "To depict means to show or represent something, whether in words or in a picture.",
      wrong: ["To conceal means to hide from view, the opposite of showing.", "To measure means to determine size or amount, not to represent.", null, "To improve means to make better, which has nothing to do with representation."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVB-027", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The migraines were so <u>debilitating</u> that she missed three days of clinical.",
    choices: ["weakening", "irritating", "puzzling", "embarrassing"],
    answer: 0,
    rationale: {
      correct: "Debilitating means severely weakening, robbing a person of strength or the ability to function.",
      wrong: [null, "Irritating means annoying, and debilitating symptoms go far beyond annoyance.", "Puzzling means hard to explain, which describes a mystery rather than a loss of strength.", "Embarrassing means causing shame, a social effect rather than a physical one."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-028", sub: "general academic", type: "mc",
    q: "What is the best synonym for the word 'disseminate'?",
    choices: ["collect", "distribute", "translate", "summarize"],
    answer: 1,
    rationale: {
      correct: "To disseminate means to spread or scatter something widely, especially information.",
      wrong: ["To collect means to gather in, the opposite direction from spreading out.", null, "To translate means to convert into another language, not to spread.", "To summarize means to shorten into main points, which changes form rather than reach."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-029", sub: "general academic", type: "mc",
    q: "What is the best synonym for the word 'efficacy'?",
    choices: ["urgency", "efficiency", "eagerness", "effectiveness"],
    answer: 3,
    rationale: {
      correct: "Efficacy is the power to produce a desired result, in plain terms how well something works.",
      wrong: ["Urgency is the need for immediate action, not the ability to produce a result.", "Efficiency is producing a result with the least waste of time or resources; a treatment can be efficient and still not work.", "Eagerness is enthusiasm, an attitude rather than a capability.", null]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-030", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The nurse showed <u>empathy</u> by acknowledging how frightening the diagnosis must feel.",
    choices: ["professional distance", "cheerful reassurance", "shared understanding", "practical advice"],
    answer: 2,
    rationale: {
      correct: "Empathy is the ability to understand and share another person's feelings from that person's point of view.",
      wrong: ["Professional distance is deliberate emotional separation, close to the opposite of empathy.", "Cheerful reassurance tells a patient not to worry, which does not require understanding the feeling.", null, "Practical advice offers solutions rather than shared understanding."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVB-031", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: Her attendance record over two years was <u>exemplary</u>.",
    choices: ["adequate", "outstanding", "inconsistent", "improving"],
    answer: 1,
    rationale: {
      correct: "Exemplary means so good that it serves as a model for others to follow.",
      wrong: ["Adequate means just good enough to meet the minimum, far short of a model.", null, "Inconsistent means uneven and unreliable, the opposite of a model record.", "Improving means getting better over time, which does not mean the record is already excellent."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-032", sub: "general academic", type: "mc",
    q: "What is the best synonym for the word 'altruistic'?",
    choices: ["selfless", "wealthy", "cautious", "ambitious"],
    answer: 0,
    rationale: {
      correct: "Altruistic means unselfishly concerned for the welfare of other people.",
      wrong: [null, "Wealthy means having a great deal of money, and giving to others does not require riches.", "Cautious means careful to avoid risk, which is unrelated to generosity.", "Ambitious means strongly determined to succeed, usually for oneself rather than for others."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-033", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: From the patient's guarded posture, the nurse could <u>infer</u> that movement was painful.",
    choices: ["confirm", "announce", "conclude", "guess blindly"],
    answer: 2,
    rationale: {
      correct: "To infer means to reach a conclusion from evidence and reasoning rather than from a direct statement.",
      wrong: ["To confirm means to establish as certain; an inference is a reasoned conclusion, not proof.", "To announce means to state something openly, the opposite of drawing an unstated conclusion.", null, "To guess blindly means to choose without evidence, while inferring rests on observed clues."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-034", sub: "general academic", type: "mc",
    q: "What is the best synonym for the word 'instigate'?",
    choices: ["conclude", "prevent", "observe", "provoke"],
    answer: 3,
    rationale: {
      correct: "To instigate means to bring something about by urging or provoking it into action.",
      wrong: ["To conclude means to bring to an end, the opposite of setting something in motion.", "To prevent means to keep something from happening at all.", "To observe means to watch without taking part.", null]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-035", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The retiring director's <u>legacy</u> was a training program still used today.",
    choices: ["a lasting contribution", "a punishment", "a temporary fix", "a formal complaint"],
    answer: 0,
    rationale: {
      correct: "A legacy is something handed down from a predecessor, a contribution that outlasts the person who made it.",
      wrong: [null, "A punishment is a penalty imposed for wrongdoing, not something valuable left behind.", "A temporary fix lasts only a short time, while a legacy endures.", "A formal complaint is an objection filed against something rather than an inheritance."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVB-036", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: His description of the pain was so <u>nebulous</u> that the nurse asked him to point to it.",
    choices: ["detailed", "dramatic", "vague", "brief"],
    answer: 2,
    rationale: {
      correct: "Nebulous means hazy and vague, lacking any definite form or outline.",
      wrong: ["Detailed means full of specifics, the opposite of vague.", "Dramatic means exaggerated or theatrical, and a vivid account can still be precise.", null, "Brief means short in length, yet a short description can be perfectly clear."]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVB-037", sub: "general academic", type: "mc",
    q: "What is the best synonym for the word 'onerous'?",
    choices: ["optional", "burdensome", "honorable", "urgent"],
    answer: 1,
    rationale: {
      correct: "Onerous means involving a heavy, troublesome burden of effort or responsibility.",
      wrong: ["Optional means left to personal choice, while an onerous duty is usually required.", null, "Honorable is a sound-alike built on honor and means worthy of respect.", "Urgent means requiring immediate attention, which concerns timing rather than weight."]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVB-038", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The group began to <u>ostracize</u> the one member who reported the error.",
    choices: ["promote", "question", "imitate", "exclude"],
    answer: 3,
    rationale: {
      correct: "To ostracize means to shut someone out of a group, to exclude or shun that person.",
      wrong: ["To promote means to raise to a higher position, the opposite of pushing someone out.", "To question means to ask for information, which is not the same as shutting someone out.", "To imitate means to copy someone's behavior rather than reject the person.", null]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-039", sub: "general academic", type: "mc",
    q: "What is the best synonym for the word 'panacea'?",
    choices: ["placebo", "antidote", "cure-all", "vaccine"],
    answer: 2,
    rationale: {
      correct: "A panacea is a remedy claimed to cure every disease and solve every problem.",
      wrong: ["A placebo is an inactive substance given in place of real medicine.", "An antidote counteracts one specific poison rather than every ailment.", null, "A vaccine prepares the immune system against one particular disease."]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVB-040", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The unit seemed to be in a state of <u>perpetual</u> shortage.",
    choices: ["unending", "occasional", "worsening", "predictable"],
    answer: 0,
    rationale: {
      correct: "Perpetual means continuing without interruption or end.",
      wrong: [null, "Occasional means happening now and then, the opposite of continuous.", "Worsening means becoming more severe, yet a constant shortage need not be growing.", "Predictable means able to be foreseen, which is not the same as never stopping."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-041", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The rumors had a <u>pernicious</u> effect on morale in the unit.",
    choices: ["puzzling", "lasting", "amusing", "harmful"],
    answer: 3,
    rationale: {
      correct: "Pernicious means causing harm, especially in a gradual and hard-to-notice way.",
      wrong: ["Puzzling means confusing or hard to explain, not damaging.", "Lasting means continuing a long time, while harm is about damage rather than duration.", "Amusing means entertaining, close to the opposite of destructive.", null]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVB-042", sub: "general academic", type: "mc",
    q: "In an election with three candidates, the winner received a plurality of the votes. This means the winner received:",
    choices: ["more than half of all votes cast", "the most votes but less than half", "exactly one third of the votes", "the fewest votes of the three"],
    answer: 1,
    rationale: {
      correct: "A plurality is the largest share of the votes when no candidate has more than half.",
      wrong: ["More than half of all votes cast is a majority, which is a stronger result than a plurality.", null, "Exactly one third is a fixed fraction, while a plurality only has to be the largest share.", "The fewest votes would make a candidate the loser rather than the winner."]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVB-043", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The committee discussed the <u>ramifications</u> of changing the visiting hours.",
    choices: ["expenses", "objections", "consequences", "alternatives"],
    answer: 2,
    rationale: {
      correct: "Ramifications are the consequences that branch out from a decision.",
      wrong: ["Expenses are costs in money, which are only one possible consequence.", "Objections are stated disagreements, not the effects that follow a change.", null, "Alternatives are other options that could be chosen instead of the change."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-044", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The instructor marked the <u>redundancy</u> in the phrase 'return back to the room.'",
    choices: ["an unneeded repetition", "a misspelled word", "an incomplete thought", "a misplaced modifier"],
    answer: 0,
    rationale: {
      correct: "A redundancy is unnecessary repetition, since 'return' already carries the idea of going back.",
      wrong: [null, "A misspelled word is an error in letters, and every word in the phrase is spelled correctly.", "An incomplete thought is a sentence fragment, which is a different kind of error.", "A misplaced modifier sits next to the wrong word, while the problem here is saying one idea twice."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-045", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The patient was discharged with a strict exercise <u>regimen</u>.",
    choices: ["goal", "plan", "limit", "record"],
    answer: 1,
    rationale: {
      correct: "A regimen is a prescribed plan or routine to be followed, such as a course of diet, exercise, or medication.",
      wrong: ["A goal is a desired end result, while a regimen is the routine used to reach it.", null, "A limit is a boundary that must not be crossed, not a set of steps to follow.", "A record is documentation of what happened, not a plan for what to do."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVB-046", sub: "general academic", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The report carefully separated documented findings from mere <u>supposition</u>.",
    choices: ["exaggeration", "observation", "accusation", "assumption"],
    answer: 3,
    rationale: {
      correct: "A supposition is something believed to be true without proof, in other words an assumption.",
      wrong: ["An exaggeration overstates something real, while a supposition may rest on no facts at all.", "An observation is something actually seen or measured, which is the documented side of the contrast.", "An accusation is a claim that someone did wrong, not an unproven belief in general.", null]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVB-047", sub: "general academic", type: "mc",
    q: "What is the best synonym for the word 'querulous'?",
    choices: ["inquisitive", "good-natured", "complaining", "openhearted"],
    answer: 2,
    rationale: {
      correct: "Querulous means habitually complaining in a whining, fretful way.",
      wrong: ["Inquisitive means eager to ask questions; querulous only sounds like the word query.", "Good-natured describes a pleasant, easygoing manner, the opposite of fretful complaining.", null, "Openhearted means warm and generous, which has nothing to do with complaining."]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVB-048", sub: "word parts/context", type: "mc",
    q: "In the term 'cardiomegaly,' the suffix -megaly means:",
    choices: ["hardening", "inflammation", "weakness", "enlargement"],
    answer: 3,
    rationale: {
      correct: "The suffix -megaly means enlargement, so cardiomegaly is an abnormally enlarged heart.",
      wrong: ["Hardening is the suffix -sclerosis, as in atherosclerosis.", "Inflammation is the suffix -itis, as in myocarditis.", "Weakness is not carried by any part of cardiomegaly, which describes size only.", null]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-049", sub: "word parts/context", type: "mc",
    q: "A patient scheduled for a rhinoplasty will have the nose:",
    choices: ["removed entirely", "surgically repaired", "examined with a scope", "measured for swelling"],
    answer: 1,
    rationale: {
      correct: "The suffix -plasty means surgical repair or reshaping, so a rhinoplasty reshapes the nose.",
      wrong: ["Complete surgical removal is the suffix -ectomy, as in tonsillectomy.", null, "Visual examination with an instrument is the suffix -scopy, as in bronchoscopy.", "Measuring is the suffix -metry, as in spirometry, while -plasty means a repair."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-050", sub: "word parts/context", type: "mc",
    q: "In the word 'colonoscopy,' the suffix -scopy means:",
    choices: ["visual examination", "surgical removal", "abnormal narrowing", "recorded tracing"],
    answer: 0,
    rationale: {
      correct: "The suffix -scopy means looking inside with an instrument, so a colonoscopy is a visual examination of the colon.",
      wrong: [null, "Surgical removal is the suffix -ectomy, as in hysterectomy.", "Abnormal narrowing is the suffix -stenosis, as in spinal stenosis.", "A recorded tracing or image is the suffix -gram or -graphy, as in electrocardiogram."]
    },
    diff: 1, secs: 45
  },
  {
    id: "HVB-051", sub: "word parts/context", type: "mc",
    q: "In terms such as 'polyuria' and 'polydipsia,' the prefix poly- means:",
    choices: ["few or scanty", "without or absent", "many or excessive", "painful or difficult"],
    answer: 2,
    rationale: {
      correct: "Poly- means many or excessive, so polyuria is excessive urine output and polydipsia is excessive thirst.",
      wrong: ["Few or scanty is the prefix olig-, the opposite of poly-.", "Without or absent is the prefix a- or an-, as in anuria.", null, "Painful or difficult is the prefix dys-, as in dysuria."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-052", sub: "word parts/context", type: "mc",
    q: "In the term 'dysphagia,' the prefix dys- means:",
    choices: ["difficult", "rapid", "excessive", "temporary"],
    answer: 0,
    rationale: {
      correct: "Dys- means difficult, painful, or abnormal, so dysphagia is difficulty swallowing.",
      wrong: [null, "Rapid or fast is the prefix tachy-, as in tachypnea.", "Excessive or above normal is the prefix hyper-, as in hypertension.", "Temporary is not a meaning carried by any word part in dysphagia."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-053", sub: "word parts/context", type: "mc",
    q: "Using word parts, a patient with leukopenia has:",
    choices: ["too many white blood cells", "an infection of the blood", "abnormally shaped red cells", "too few white blood cells"],
    answer: 3,
    rationale: {
      correct: "Leuk- means white and -penia means deficiency, so leukopenia is an abnormally low white blood cell count.",
      wrong: ["An excess of white cells is leukocytosis; -penia points in the opposite direction.", "An infection carried in the bloodstream is septicemia.", "Abnormally shaped red cells involve the root erythr-, not leuk- or -penia.", null]
    },
    diff: 3, secs: 65
  },
  {
    id: "HVB-054", sub: "word parts/context", type: "mc",
    q: "In the term 'antepartum,' the prefix ante- means:",
    choices: ["after", "before", "against", "around"],
    answer: 1,
    rationale: {
      correct: "Ante- means before, so the antepartum period is the time before childbirth.",
      wrong: ["After is the prefix post-, as in postpartum.", null, "Against is the prefix anti- or contra-, as in antibiotic.", "Around is the prefix peri-, as in perinatal."]
    },
    diff: 2, secs: 55
  },
  {
    id: "HVB-055", sub: "word parts/context", type: "mc",
    q: "Select the meaning of the underlined word in the following sentence: The surgeon described the mass as <u>retrosternal</u>.",
    choices: ["beneath the sternum", "in front of the sternum", "behind the sternum", "attached to the sternum"],
    answer: 2,
    rationale: {
      correct: "Retro- means behind or backward, so a retrosternal mass lies behind the sternum.",
      wrong: ["Beneath or under the sternum would use the prefix sub-, as in substernal.", "In front of the sternum would use the prefix pre- or ante-, as in presternal.", null, "Attachment is not indicated by retro-, which describes position only."]
    },
    diff: 3, secs: 65
  }
  ]
};
