/* HESI A2 — Reading Comprehension, Form B
   55 items, all 4-option MC, across 11 short expository passages (150-250 words each).
   Blueprint: main idea 12 | supporting detail 10 | inference 13 | author's purpose/tone 10 | vocabulary in context 10
   Form B is fully non-overlapping with Form A: 11 new passages on 11 new topics (cold chain, presbyopia,
   protective equipment, root nodules, amygdala, insurance cost terms, seat belts, anesthesia, pain scales,
   urban tree canopy, standard time). No passage, stem, or option is shared with Form A.
   Calibration: faithful-to-real HESI (recall-heavy, 13/55 = 24% at diff 3). Inference is the reported trap:
   inference distractors are topic-plausible statements the passage never actually supports. */

window.BANKS = window.BANKS || {};
window.BANKS["hesi-reading-b"] = {
  exam: "hesi",
  section: "reading",
  form: "B",

  passages: {
    p1: {
      title: "The Cold Chain",
      kind: "prose",
      text: "A vaccine is a biological product, and most vaccines lose potency if they grow too warm or if they freeze. The unbroken sequence of refrigerated storage and transport that carries a dose from the factory to the arm is called the cold chain, and it is one of the least visible requirements of an immunization program.\n\nThe chain has many links. A vial may sit in a manufacturer's freezer, ride in an insulated truck, wait in a regional depot, travel by boat or motorcycle to a village clinic, and rest in a small refrigerator until a nurse draws it up. A failure anywhere along that route can spoil the dose, and spoiled vaccine looks exactly like good vaccine. Nothing about the vial announces the problem. The failure appears weeks later, as illness among children who were counted as protected.\n\nFor that reason the chain is monitored rather than trusted. Small indicators fixed to the vial change color as heat accumulates, so a health worker can read the history of a dose before giving it. Data loggers record the temperature inside a cooler and flag the hours it drifted out of range.\n\nThe engineering is not the hard part. Where cold-chain programs struggle, the reasons are usually electricity that fails for hours at a time, refrigerators that nobody on staff is trained to repair, and clinics far from the road. A vaccine that works in a laboratory still has to survive the trip."
    },
    p2: {
      title: "Why the Menu Moves Farther Away",
      kind: "prose",
      text: "Around the age of forty, most people begin to hold a menu farther from the face. The change is not a disease, and it is not the same condition as nearsightedness, although the two are often confused. It is presbyopia, and it follows from the mechanics of the lens.\n\nTo focus on something close, the eye must increase the curvature of its lens. A ring of muscle around the lens contracts, tension on the lens slackens, and the elastic lens rounds up. Reading depends on this adjustment, which is called accommodation. Over the decades the lens grows denser and stiffer, so the same muscular effort produces less change in shape. Near objects blur first, because they demand the most curvature.\n\nThe remedy is straightforward: added lens power for close work, supplied by reading glasses, bifocals, or progressive lenses. A person who was already nearsighted may find that simply removing distance glasses makes reading comfortable, which sometimes leads to the belief that the eyes have improved. They have not. A nearsighted eye focuses close objects without help, so it can borrow that advantage, but its lens has stiffened all the same.\n\nPresbyopia advances for about twenty years and then settles. Nothing prevents it, and no exercise restores the lens. It is one of the few visual changes that arrive for nearly everyone who lives long enough."
    },
    p3: {
      title: "From the Beaked Mask to the Surgical Mask",
      kind: "prose",
      text: "The beaked mask worn by seventeenth-century plague doctors is now a costume, but it was designed as equipment. Physicians who believed that disease traveled in foul air packed the beak with dried flowers and herbs, wore a waxed overgarment, and carried a cane so that a patient could be examined without touching. The theory behind the outfit was wrong. The practice it produced -- covering the face, covering the body, keeping a distance -- happened to reduce contact with the things that actually spread infection.\n\nProtective clothing entered the operating room by a different route. Once surgeons accepted that invisible organisms cause wound infection, the goal shifted from protecting the surgeon to protecting the patient. Gowns, caps, and gloves appeared in the late nineteenth century, and the surgical mask followed after researchers showed that droplets from a talking surgeon settled on the wound below.\n\nModern protective equipment serves both directions at once. A gown and gloves keep a nurse's skin clear of a patient's blood, and they keep organisms on the nurse from reaching the next room. What changed across three centuries is less the shape of the garment than the reason for wearing it. The plague doctor dressed against a smell. The nurse dresses against an organism whose behavior has been studied, and each item is put on and taken off in an order designed to keep the contaminated surface away from skin."
    },
    p4: {
      title: "The Bargain Under a Clover Field",
      kind: "prose",
      text: "Nitrogen makes up most of the air, yet plants cannot use it in that form. The two atoms in a molecule of nitrogen gas are joined so tightly that ordinary chemistry inside a leaf cannot pull them apart. Plants take nitrogen from the soil instead, as nitrate or ammonium, and soil runs short of it quickly.\n\nLegumes -- clover, alfalfa, beans, peas -- get around the shortage through a partnership. Bacteria of a group called rhizobia live in the soil, and when a legume root releases certain chemical signals, the bacteria respond and enter the root. The root grows a small swelling, a nodule, around them. Inside the nodule the bacteria convert nitrogen gas into a form the plant can absorb. In exchange the plant supplies sugars made in its leaves and maintains the low-oxygen conditions that the conversion requires.\n\nNeither partner is doing the other a favor. A nodule costs the plant sugar, and a legume growing in nitrogen-rich soil forms fewer nodules, as though the arrangement were being priced.\n\nFarmers used the relationship for centuries without knowing the mechanism. A field planted in clover and then plowed under leaves nitrogen behind for the crop that follows. The practice was recorded long before anyone had seen a rhizobium, which is a reminder that a useful observation can precede its explanation by generations."
    },
    p5: {
      title: "The Almond in the Temporal Lobe",
      kind: "prose",
      text: "Deep in each temporal lobe of the brain sits a small almond-shaped cluster of cells called the amygdala. It has been studied for decades, largely because of what happens when it is stimulated or removed. In animals, electrical stimulation of certain parts of the amygdala produces the whole apparatus of fear at once: the heart accelerates, the animal freezes or flees, and stress hormones rise. Damage to the same region has the opposite effect. An animal that once avoided a threatening object approaches it without hesitation.\n\nIn people, the amygdala responds within a fraction of a second to a fearful face or a sudden loud noise, faster than conscious recognition of what the thing is. Researchers describe two routes for such information: a fast, coarse path that reaches the amygdala almost immediately, and a slower path through the cortex that supplies detail. The first path explains the jump before a person knows what caused it. The second explains why the jump subsides when the shape on the trail turns out to be a stick.\n\nThe structure is often labeled the brain's fear center, and the label is convenient rather than exact. The amygdala also responds to reward and to novelty, and fear responses involve many other regions. What the evidence supports is narrower: this small structure is required for a set of rapid responses that appear before deliberation has begun."
    },
    p6: {
      title: "Four Numbers on an Insurance Card",
      kind: "prose",
      text: "A health insurance plan is usually described by its monthly premium, but the premium is only the cost of holding the plan. What a patient pays when care is actually used depends on three other terms.\n\nThe deductible is the amount the patient pays each year before the plan begins to share most costs. A plan with a $2,000 deductible pays little toward covered services until the patient's own spending reaches that figure. A copayment is a flat charge collected at the time of service -- thirty dollars for an office visit, for instance -- and it may apply whether or not the deductible has been met. Coinsurance is a percentage: after the deductible, the plan may pay eighty percent of a bill and leave twenty percent to the patient.\n\nThe fourth number is the one worth finding. The out-of-pocket maximum caps what a patient can be required to pay in a year for covered care. Once spending reaches that ceiling, the plan pays the full cost of covered services for the rest of the year. Premiums do not count toward it, and neither does care the plan does not cover.\n\nThe arithmetic rewards attention. A plan with a low premium and a high deductible can cost less over a year of good health and considerably more over a year that includes surgery."
    },
    p7: {
      title: "The Long Road to a Buckled Belt",
      kind: "prose",
      text: "Lap belts were available in American cars in the 1950s, mostly as an extra that a buyer could request. Few did. Engineers had shown that a restrained occupant strikes the inside of a car with far less force than an unrestrained one, and crash investigators had documented what happens to a body thrown against a windshield, but the evidence did not move sales.\n\nFederal rules required belts in new cars beginning in the late 1960s. Ownership, however, is not use. Surveys through the 1970s found that fewer than one driver in five buckled up. Manufacturers tried buzzers, then a system that would not let the engine start until the belt was fastened. Drivers responded by cutting the belts or buckling them behind the seat, and the requirement was withdrawn.\n\nWhat eventually changed behavior was law aimed at the driver rather than at the car. New York required belt use in 1984, other states followed, and use climbed. It climbed furthest in states where an officer could stop a vehicle for the belt violation by itself rather than only after stopping it for something else. Publicity campaigns run alongside enforcement raised the numbers further.\n\nThe sequence is worth noting. Evidence came first and had little effect. Availability followed and had modest effect. Use rose when the requirement attached to the person and someone was checking."
    },
    p8: {
      title: "The Morning Surgery Went Quiet",
      kind: "prose",
      text: "Before the middle of the nineteenth century, surgery was performed on patients who were awake. Speed was the surgeon's principal virtue; a leg could be removed in under a minute, and a short operation was survivable in a way that a long one was not. Assistants held the patient down. Alcohol and opium dulled the experience without abolishing it.\n\nEther and nitrous oxide had been known for decades and were used mainly for entertainment at public demonstrations, where volunteers inhaled them and staggered about to the amusement of an audience. Several observers noticed that a person under the influence could strike a limb and feel nothing. Acting on that observation took longer.\n\nIn October 1846, at a hospital in Boston, a dentist named William Morton administered ether to a patient while a surgeon removed a tumor from the man's neck. The patient did not cry out. The news traveled to Europe within weeks, and within a year ether was in use in hospitals across the continent.\n\nThe consequences reached beyond comfort. Surgeons who no longer had to hurry could attempt procedures that took an hour, and the interior of the body became reachable. Infection remained. The longer operations that anesthesia made possible killed many patients until antiseptic technique arrived a generation later. One obstacle had been removed, and the next became visible."
    },
    p9: {
      title: "Rate Your Pain from Zero to Ten",
      kind: "prose",
      text: "Pain cannot be measured from outside the person who has it. A clinician can note a raised heart rate or a guarded posture, but neither tracks pain closely enough to be trusted. Someone in severe chronic pain may sit calmly, and someone frightened by a minor injury may not. So clinical practice relies on what the patient reports.\n\nThe most common instrument is a numeric scale: rate the pain from zero to ten, where zero is no pain and ten is the worst pain imaginable. For patients who cannot use numbers -- young children, people with dementia, patients who do not share a language with the staff -- there are drawn faces, and there are observational tools that score grimacing, restlessness, and breathing.\n\nThe numeric scale has known weaknesses. The anchor at ten is imaginary and personal, so the same number means different things from one patient to another. What the scale does well is track a single patient over time. A drop from eight to four after a dose says something useful even when the absolute values cannot be compared across a ward.\n\nThe instrument matters less than the practice it enforces. A scale requires that someone ask, record the answer, and ask again after treatment. Where pain is not documented, it is undertreated, and the patients least able to press their case are the ones most often overlooked."
    },
    p10: {
      title: "Shade as Public Health",
      kind: "prose",
      text: "A city is warmer than the countryside around it. Asphalt and roofing absorb sunlight and release it slowly through the evening, while buildings block the wind that would carry heat away. The difference between a dense district and nearby open land can exceed ten degrees on a summer night, and heat at night is what makes a heat wave dangerous, because a body that does not cool has no chance to recover before the next day.\n\nTrees moderate the effect in two ways. Shade keeps pavement and walls from taking on heat in the first place, and water evaporating from leaves cools the surrounding air directly, in the way that sweat cools skin. Measurements taken beneath a mature street canopy commonly find air several degrees cooler than on an unshaded block a short walk away.\n\nTree cover is not distributed evenly. Surveys of American cities repeatedly find fewer trees in lower-income neighborhoods, which are also the neighborhoods with more pavement and less air conditioning. The same blocks record more emergency visits during heat waves.\n\nPlanting is slow work. A sapling delivers little shade for fifteen years, needs water through its first summers, and competes for sidewalk space with utilities and parking. Cities that have expanded their canopy describe maintenance budgets and the consent of property owners as harder problems than the cost of the trees themselves."
    },
    p11: {
      title: "The Day the Clocks Agreed",
      kind: "prose",
      text: "For most of human history, noon was a local observation. A town set its clocks so that twelve o'clock fell when the sun stood highest over that town, which meant that a clock in one city disagreed with a clock fifty miles west by several minutes. Nobody minded, because nobody could travel fast enough for the difference to matter.\n\nRailroads made it matter. A train covered in an hour a distance that had taken a day, and it ran on a schedule printed in advance. A line passing through dozens of towns, each keeping its own noon, produced timetables that no clerk could reconcile and near collisions that no dispatcher could prevent. Some companies solved the problem privately by running every station on the time kept at company headquarters, so a traveler changing lines had to change watches as well.\n\nIn November 1883, the North American railroads adopted a common scheme of time zones, each an hour apart. Cities followed, not always willingly. Some passed resolutions defending sun time, and a few kept two clocks in the town square for years. Federal law did not ratify the arrangement until 1918.\n\nThe change is easy to overlook because the result feels natural now. What the railroads imposed was not a discovery about time but an agreement about it, adopted because coordination had become more valuable than local accuracy."
    }
  },

  questions: [

    /* ===== p1 — the cold chain (6): MI, MI, SD, INF, APT, VOC ===== */
    {
      id: "HRB-001", sub: "main idea", type: "mc", passage: "p1",
      q: "Which statement best expresses the main idea of the passage?",
      choices: [
        "Indicators fixed to a vial change color as heat accumulates during shipping.",
        "Vaccines protect children only when an immunization program is well funded.",
        "A vaccine must stay cold from the factory to the arm, and the chain usually fails for practical reasons.",
        "Refrigerators in village clinics are often difficult for the staff to repair."
      ],
      answer: 2,
      rationale: {
        correct: "The passage defines the cold chain as the unbroken refrigerated route 'from the factory to the arm' and then names what actually breaks it: 'electricity that fails for hours at a time, refrigerators that nobody on staff is trained to repair, and clinics far from the road.'",
        wrong: [
          "A true supporting detail from paragraph 3, given as evidence for monitoring rather than as the passage's point.",
          "Overly broad, and funding is never mentioned; the obstacles named are power, training, and roads.",
          null,
          "Too narrow: one item on the list in the final paragraph."
        ]
      },
      diff: 2, secs: 64
    },
    {
      id: "HRB-002", sub: "main idea", type: "mc", passage: "p1",
      q: "Which of the following would make the most appropriate title for this passage?",
      choices: [
        "A History of Vaccine Development in the Twentieth Century",
        "The Cold Chain: Why a Dose Must Survive the Trip",
        "Reading a Vial: How Heat Indicators Change Color",
        "Ending Childhood Disease Through Better Refrigeration"
      ],
      answer: 1,
      rationale: {
        correct: "The passage names the cold chain, follows a dose through every link, and closes with the sentence 'A vaccine that works in a laboratory still has to survive the trip.' A title naming the chain and the journey covers the whole passage.",
        wrong: [
          "Overly broad: no vaccine development history appears anywhere in the passage.",
          null,
          "Too narrow: the color indicator occupies one sentence in paragraph 3.",
          "Overreaches. The passage explains how doses are protected, never that refrigeration can end childhood disease."
        ]
      },
      diff: 2, secs: 62
    },
    {
      id: "HRB-003", sub: "supporting detail", type: "mc", passage: "p1",
      q: "The passage names all of the following as reasons cold-chain programs struggle EXCEPT which one?",
      choices: [
        "electricity that fails for hours at a time",
        "refrigerators that nobody on staff is trained to repair",
        "clinics located far from the road",
        "manufacturers that ship vials without insulation"
      ],
      answer: 3,
      rationale: {
        correct: "The final paragraph lists power failures, unrepaired refrigerators, and remote clinics. Insulation at the manufacturer is not on that list, and paragraph 2 describes the vial riding in 'an insulated truck.'",
        wrong: [
          "Stated: 'electricity that fails for hours at a time.'",
          "Stated: 'refrigerators that nobody on staff is trained to repair.'",
          "Stated: 'clinics far from the road.'",
          null
        ]
      },
      diff: 1, secs: 48
    },
    {
      id: "HRB-004", sub: "inference", type: "mc", passage: "p1",
      q: "Based on the passage, why is a spoiled dose especially dangerous?",
      choices: [
        "It causes an immediate reaction in the child who receives it.",
        "It resembles a good dose, so the failure is discovered only later.",
        "It spreads the disease that it was intended to prevent.",
        "It cannot be detected by any monitoring device now available."
      ],
      answer: 1,
      rationale: {
        correct: "Paragraph 2 says 'spoiled vaccine looks exactly like good vaccine' and that the failure 'appears weeks later, as illness among children who were counted as protected.' The hidden failure is the danger.",
        wrong: [
          "Plausible if a reader assumes bad vaccine harms the recipient, but the passage describes a delayed loss of protection, not a reaction.",
          null,
          "A common misconception the passage never supports; a spoiled dose is described as losing potency, not as transmitting disease.",
          "Contradicted by paragraph 3, which describes color indicators and data loggers built to detect exactly this."
        ]
      },
      diff: 3, secs: 78
    },
    {
      id: "HRB-005", sub: "author's purpose/tone", type: "mc", passage: "p1",
      q: "The author's purpose in the final paragraph is best described as which of the following?",
      choices: [
        "to warn readers that vaccines are unsafe in warm climates",
        "to praise the engineers who designed cold-chain equipment",
        "to locate the difficulty in ordinary conditions rather than in technology",
        "to recommend that governments purchase additional refrigerators"
      ],
      answer: 2,
      rationale: {
        correct: "The paragraph opens 'The engineering is not the hard part' and then lists power, training, and distance, which places the obstacle in everyday conditions rather than in the equipment.",
        wrong: [
          "The passage says heat spoils doses, not that vaccines themselves become unsafe, and climate is never discussed.",
          "Engineering is mentioned only to set it aside as the easy part; no engineers are praised.",
          null,
          "Buying more refrigerators is not recommended; the passage notes that existing refrigerators go unrepaired."
        ]
      },
      diff: 2, secs: 62
    },
    {
      id: "HRB-006", sub: "vocabulary in context", type: "mc", passage: "p1",
      q: "As used in the third paragraph, the word 'flag' most nearly means which of the following?",
      choices: [
        "a piece of cloth used as a signal or emblem",
        "to grow tired and lose energy",
        "to mark something so that it draws attention",
        "to signal a passing vehicle to stop"
      ],
      answer: 2,
      rationale: {
        correct: "The sentence is 'Data loggers record the temperature inside a cooler and flag the hours it drifted out of range.' A recording device marks those hours so a worker notices them.",
        wrong: [
          "The most common noun sense, but the word here is a verb whose object is a span of hours.",
          "A real verb sense, yet a data logger cannot grow tired, and the object of the verb is the hours it recorded.",
          null,
          "This sense requires a vehicle and a person waving; the sentence involves a device and a temperature record."
        ]
      },
      diff: 2, secs: 58
    },

    /* ===== p2 — presbyopia (5): MI, SD, INF, APT, VOC ===== */
    {
      id: "HRB-007", sub: "main idea", type: "mc", passage: "p2",
      q: "What is the central idea of this passage?",
      choices: [
        "Nearsighted people can read without their distance glasses as they grow older.",
        "Presbyopia comes from a stiffening lens and is corrected rather than prevented.",
        "Vision changes with age in ways that medicine has not yet been able to explain.",
        "Reading glasses, bifocals, and progressive lenses each serve a different purpose."
      ],
      answer: 1,
      rationale: {
        correct: "The passage traces the cause -- 'the lens grows denser and stiffer' -- to the remedy of 'added lens power for close work,' and states that 'nothing prevents it, and no exercise restores the lens.'",
        wrong: [
          "A true detail from paragraph 3, used to correct a misunderstanding rather than to state the passage's point.",
          null,
          "Contradicted: the passage explains the mechanics of the lens in some detail.",
          "The three are listed as interchangeable ways to add lens power, and no difference among them is described."
        ]
      },
      diff: 2, secs: 64
    },
    {
      id: "HRB-008", sub: "supporting detail", type: "mc", passage: "p2",
      q: "According to the passage, what happens in the eye when it focuses on a nearby object?",
      choices: [
        "A ring of muscle contracts and the lens becomes more curved.",
        "The lens flattens as the muscle surrounding it relaxes.",
        "The pupil narrows so that less light reaches the retina.",
        "The eyeball itself lengthens from the front to the back."
      ],
      answer: 0,
      rationale: {
        correct: "Paragraph 2 states that 'a ring of muscle around the lens contracts, tension on the lens slackens, and the elastic lens rounds up.'",
        wrong: [
          null,
          "The reverse of the described sequence; the passage says the muscle contracts and the lens rounds up.",
          "The pupil is never mentioned; the passage attributes near focus to lens curvature.",
          "Eyeball length is not discussed at all in this passage."
        ]
      },
      diff: 2, secs: 58
    },
    {
      id: "HRB-009", sub: "inference", type: "mc", passage: "p2",
      q: "The passage suggests that a nearsighted person who reads comfortably after removing distance glasses has experienced which of the following?",
      choices: [
        "a genuine improvement in the health of the eye",
        "an unrelated condition that only resembles presbyopia",
        "presbyopia offset by an existing focusing advantage",
        "a delay in the onset of presbyopia by several years"
      ],
      answer: 2,
      rationale: {
        correct: "The passage says this observation 'sometimes leads to the belief that the eyes have improved. They have not,' and explains that the nearsighted eye 'can borrow that advantage, but its lens has stiffened all the same.' The condition is present and merely masked.",
        wrong: [
          "Explicitly denied by the two-word sentence 'They have not.'",
          "Tempting because the passage warns the two conditions are confused, but it says the lens has stiffened, which is presbyopia itself.",
          null,
          "Overreaches. The passage describes a workaround for the symptom, not a delay in the underlying change."
        ]
      },
      diff: 3, secs: 80
    },
    {
      id: "HRB-010", sub: "author's purpose/tone", type: "mc", passage: "p2",
      q: "The passage as a whole is best described as which of the following?",
      choices: [
        "an explanation of a normal change and of how it is corrected",
        "an argument that presbyopia is treated far too aggressively",
        "a personal account of one patient's loss of near vision",
        "a caution that untreated presbyopia will lead to blindness"
      ],
      answer: 0,
      rationale: {
        correct: "The passage states that the change 'is not a disease,' explains the lens mechanism behind it, and describes the corrective lenses that answer it. Explanation of a normal change is the whole shape of the passage.",
        wrong: [
          null,
          "No treatment is criticized; corrective lenses are presented as a straightforward remedy.",
          "No individual patient appears, and the register is impersonal throughout.",
          "Nothing about blindness is claimed; the passage says presbyopia advances for about twenty years and then settles."
        ]
      },
      diff: 2, secs: 60
    },
    {
      id: "HRB-011", sub: "vocabulary in context", type: "mc", passage: "p2",
      q: "In the second paragraph, the word 'accommodation' most nearly means which of the following?",
      choices: [
        "lodging arranged for a traveler",
        "a compromise reached between two parties",
        "a service provided to meet a special need",
        "an adjustment the lens makes in order to focus"
      ],
      answer: 3,
      rationale: {
        correct: "The passage defines the term as it introduces it: 'Reading depends on this adjustment, which is called accommodation,' and the adjustment described is the change in the curvature of the lens.",
        wrong: [
          "The most common everyday sense of the word, but a traveler's lodging cannot be what the lens does.",
          "A real sense of the word, yet no two parties are negotiating in this sentence.",
          "Another familiar sense, though the sentence names a physical change in shape, not a service.",
          null
        ]
      },
      diff: 2, secs: 58
    },

    /* ===== p3 — protective equipment (5): MI, SD, INF, APT, VOC ===== */
    {
      id: "HRB-012", sub: "main idea", type: "mc", passage: "p3",
      q: "Which statement best captures the main point of the passage?",
      choices: [
        "Plague doctors packed the beaks of their masks with dried flowers and herbs.",
        "The garments changed less across three centuries than the reasons for wearing them.",
        "Physicians of the seventeenth century understood how the plague was transmitted.",
        "Surgical masks were adopted after droplets were shown to fall onto open wounds."
      ],
      answer: 1,
      rationale: {
        correct: "The passage states the point directly in paragraph 3: 'What changed across three centuries is less the shape of the garment than the reason for wearing it,' and the whole passage is arranged around that contrast.",
        wrong: [
          "A true opening detail describing the costume, not the idea the passage builds toward.",
          null,
          "Contradicted: 'The theory behind the outfit was wrong,' since they believed disease traveled in foul air.",
          "A true supporting detail about one garment, offered as a step in the history rather than the point of it."
        ]
      },
      diff: 2, secs: 64
    },
    {
      id: "HRB-013", sub: "supporting detail", type: "mc", passage: "p3",
      q: "According to the passage, what shifted once surgeons accepted that organisms cause wound infection?",
      choices: [
        "The goal moved from protecting the surgeon to protecting the patient.",
        "Masks replaced gowns as the most important protective garment.",
        "Operating rooms were relocated away from the hospital wards.",
        "Surgeons stopped speaking during procedures on open wounds."
      ],
      answer: 0,
      rationale: {
        correct: "Paragraph 2 states that once organisms were accepted as the cause, 'the goal shifted from protecting the surgeon to protecting the patient.'",
        wrong: [
          null,
          "No ranking of garments appears; gowns, caps, gloves, and masks are listed in order of adoption.",
          "Room placement is never discussed in the passage.",
          "The droplet research led to masks, not to silence; the passage says nothing about surgeons ceasing to talk."
        ]
      },
      diff: 2, secs: 58
    },
    {
      id: "HRB-014", sub: "inference", type: "mc", passage: "p3",
      q: "The passage implies which of the following about the plague doctor's costume?",
      choices: [
        "It was more effective at preventing infection than a modern gown.",
        "It offered some protection for a reason its wearers misunderstood.",
        "It was designed by physicians who had studied contagion carefully.",
        "It was worn mainly to identify the physician to frightened patients."
      ],
      answer: 1,
      rationale: {
        correct: "The passage says 'the theory behind the outfit was wrong' and yet the practice 'happened to reduce contact with the things that actually spread infection.' Accidental benefit from a mistaken theory is exactly what is implied.",
        wrong: [
          "Overreaches. The passage never compares the effectiveness of the costume with that of modern equipment.",
          null,
          "Contradicted: the design rested on the belief that disease traveled in foul air, which the passage calls wrong.",
          "Plausible because the mask is now a costume, but the passage says it 'was designed as equipment' and never mentions identification."
        ]
      },
      diff: 3, secs: 80
    },
    {
      id: "HRB-015", sub: "author's purpose/tone", type: "mc", passage: "p3",
      q: "How would the author's tone in this passage best be characterized?",
      choices: [
        "mocking toward physicians who believed in foul air",
        "nostalgic for an era of simpler medical clothing",
        "alarmed by the risks that protective clothing misses",
        "detached, tracing a practice without ridiculing its origins"
      ],
      answer: 3,
      rationale: {
        correct: "The author reports flatly that 'the theory behind the outfit was wrong' and then credits the practice with real benefit. The account stays even and analytical rather than taking sides.",
        wrong: [
          "No humor at the physicians' expense appears; their error is stated and its accidental benefit is granted.",
          "No earlier era is presented as preferable; the passage describes change without longing.",
          "No current risk is raised; the closing sentences describe equipment as working in both directions.",
          null
        ]
      },
      diff: 2, secs: 62
    },
    {
      id: "HRB-016", sub: "vocabulary in context", type: "mc", passage: "p3",
      q: "As used in the second paragraph, the word 'route' most nearly means which of the following?",
      choices: [
        "a road traveled between two places",
        "a line of march followed by an army",
        "a course of development leading to a result",
        "a delivery circuit assigned to a worker"
      ],
      answer: 2,
      rationale: {
        correct: "The sentence reads 'Protective clothing entered the operating room by a different route,' and the paragraph then describes a different chain of reasoning and events, not a physical path.",
        wrong: [
          "The most common sense of the word, but clothing did not travel along a road into the operating room.",
          "A military sense that has no place in a paragraph about surgeons and germ theory.",
          null,
          "A familiar occupational sense; nothing is being delivered along a fixed circuit here."
        ]
      },
      diff: 2, secs: 58
    },

    /* ===== p4 — root nodules (4): MI, SD, INF, VOC ===== */
    {
      id: "HRB-017", sub: "main idea", type: "mc", passage: "p4",
      q: "The passage is primarily concerned with which of the following?",
      choices: [
        "the chemical bond that holds a molecule of nitrogen gas together",
        "the reasons farmers plow a field of clover under before planting",
        "a trade between legumes and soil bacteria that supplies usable nitrogen",
        "the discovery of rhizobia by scientists of the nineteenth century"
      ],
      answer: 2,
      rationale: {
        correct: "The passage sets up a nitrogen shortage, then describes the nodule as a partnership in which 'the bacteria convert nitrogen gas into a form the plant can absorb' while 'the plant supplies sugars.' The exchange is the subject.",
        wrong: [
          "Too narrow: one sentence explaining why plants cannot use nitrogen gas directly.",
          "A true application in the last paragraph that illustrates the relationship rather than stating it.",
          null,
          "Unsupported. The passage says the practice preceded seeing a rhizobium but never narrates a discovery."
        ]
      },
      diff: 2, secs: 64
    },
    {
      id: "HRB-018", sub: "supporting detail", type: "mc", passage: "p4",
      q: "According to the passage, what does the legume supply to the bacteria in a nodule?",
      choices: [
        "nitrate that the root has absorbed from the soil",
        "sugars and a set of low-oxygen conditions",
        "ammonium that has been produced in the leaves",
        "extra oxygen carried down from the leaves"
      ],
      answer: 1,
      rationale: {
        correct: "Paragraph 2 states that 'the plant supplies sugars made in its leaves and maintains the low-oxygen conditions that the conversion requires.'",
        wrong: [
          "Nitrate is a soil form of nitrogen the plant takes up, not something it gives to the bacteria.",
          null,
          "Ammonium is named as a soil form of nitrogen, and leaves are said to make sugars, not ammonium.",
          "The reverse of the passage: the conversion requires low oxygen, so extra oxygen would defeat it."
        ]
      },
      diff: 2, secs: 56
    },
    {
      id: "HRB-019", sub: "inference", type: "mc", passage: "p4",
      q: "The passage notes that a legume in nitrogen-rich soil forms fewer nodules. What does this most likely suggest?",
      choices: [
        "Nodules form only when bacteria are scarce in the surrounding soil.",
        "Rhizobia avoid the roots of plants that have absorbed nitrate.",
        "The plant builds nodules when the sugar they cost is worth the return.",
        "Soil that is rich in nitrogen is harmful to the growth of legumes."
      ],
      answer: 2,
      rationale: {
        correct: "The passage says 'a nodule costs the plant sugar' and then reports fewer nodules in nitrogen-rich soil, 'as though the arrangement were being priced.' Fewer nodules where nitrogen is already available fits a cost-and-benefit reading.",
        wrong: [
          "The absolute 'only' goes beyond the text, and the passage ties nodule number to soil nitrogen, not to how many bacteria are present.",
          "Plausible-sounding, but the passage describes the root releasing signals that the bacteria answer, not bacteria avoiding roots.",
          null,
          "Overreaches. Fewer nodules is described as an adjustment, never as harm to the plant."
        ]
      },
      diff: 3, secs: 80
    },
    {
      id: "HRB-020", sub: "vocabulary in context", type: "mc", passage: "p4",
      q: "As used in the third paragraph, the word 'arrangement' most nearly means which of the following?",
      choices: [
        "the placement of objects in a deliberate pattern",
        "a version of a piece of music adapted for other instruments",
        "a formal ceremony that marks an agreement",
        "a relationship that two parties maintain for mutual benefit"
      ],
      answer: 3,
      rationale: {
        correct: "The sentence caps a paragraph insisting that 'neither partner is doing the other a favor,' and calls the exchange of sugar for nitrogen an arrangement 'being priced.' The word names the working partnership itself.",
        wrong: [
          "The common everyday sense, but nothing in the paragraph is being positioned in a pattern.",
          "A musical sense that has no bearing on plants and bacteria.",
          "No ceremony occurs; the paragraph describes an ongoing exchange with costs on both sides.",
          null
        ]
      },
      diff: 2, secs: 58
    },

    /* ===== p5 — the amygdala (5): MI, SD, INF, APT, VOC ===== */
    {
      id: "HRB-021", sub: "main idea", type: "mc", passage: "p5",
      q: "Which of the following best states the main idea of the passage?",
      choices: [
        "The amygdala is required for rapid threat responses, though 'fear center' is a loose label.",
        "Electrical stimulation of the amygdala makes an animal's heart accelerate.",
        "The brain processes all emotional information through two separate pathways.",
        "Damage to the amygdala leaves an animal unable to recognize any danger."
      ],
      answer: 0,
      rationale: {
        correct: "The passage builds the evidence for fast amygdala responses and then narrows the claim: the fear-center label 'is convenient rather than exact,' while 'this small structure is required for a set of rapid responses.'",
        wrong: [
          null,
          "A true supporting detail from paragraph 1 that demonstrates the point rather than stating it.",
          "Overly broad, and the absolute 'all' goes past a passage that describes two routes for one kind of information.",
          "Overreaches. The passage says a damaged animal approaches an object it once avoided, not that recognition of danger is lost."
        ]
      },
      diff: 2, secs: 66
    },
    {
      id: "HRB-022", sub: "supporting detail", type: "mc", passage: "p5",
      q: "According to the passage, what happens to an animal whose amygdala has been damaged?",
      choices: [
        "It freezes in place whenever a threatening object appears.",
        "It produces stress hormones at a higher rate than before.",
        "It approaches an object that it previously avoided.",
        "It loses the ability to hear a sudden loud noise."
      ],
      answer: 2,
      rationale: {
        correct: "Paragraph 1 says that damage 'has the opposite effect. An animal that once avoided a threatening object approaches it without hesitation.'",
        wrong: [
          "Freezing is listed among the responses produced by stimulation, not by damage.",
          "Rising stress hormones also belong to the stimulation result, and damage is said to reverse it.",
          null,
          "Hearing is never discussed as something the amygdala provides; loud noise appears only as a trigger."
        ]
      },
      diff: 1, secs: 48
    },
    {
      id: "HRB-023", sub: "inference", type: "mc", passage: "p5",
      q: "Based on the passage, what best explains why a hiker jumps at a shape on the trail and then relaxes?",
      choices: [
        "The fast pathway reacts before the slower, detailed one identifies the object.",
        "The amygdala shuts down as soon as the cortex has taken over.",
        "The startle response fades because stress hormones are quickly reabsorbed.",
        "Repeated walks on the same trail teach a hiker to ignore sticks."
      ],
      answer: 0,
      rationale: {
        correct: "Paragraph 2 assigns each half of the experience to a route: the fast path 'explains the jump before a person knows what caused it,' and the slower cortical path 'explains why the jump subsides when the shape on the trail turns out to be a stick.'",
        wrong: [
          null,
          "Plausible-sounding, but the passage never says the amygdala shuts down; the slower path supplies detail rather than switching the structure off.",
          "Reabsorption of hormones is never mentioned; hormones are only described as rising.",
          "Learning from repetition is not discussed anywhere in the passage."
        ]
      },
      diff: 3, secs: 80
    },
    {
      id: "HRB-024", sub: "author's purpose/tone", type: "mc", passage: "p5",
      q: "In the final paragraph, the author's attitude toward the label 'the brain's fear center' is best described as which of the following?",
      choices: [
        "enthusiastic, since the label captures the research well",
        "scornful toward the researchers who introduced the label",
        "uncertain, because the evidence has not yet been examined",
        "reserved, accepting the label as convenient but imprecise"
      ],
      answer: 3,
      rationale: {
        correct: "The author calls the label 'convenient rather than exact,' lists what it leaves out, and then states the narrower claim the evidence supports. That is acceptance with reservations.",
        wrong: [
          "Reversed: the paragraph exists in order to qualify the label, not to endorse it.",
          "No researcher is criticized; the objection is to a shorthand term, not to the people using it.",
          "The author describes decades of evidence and says plainly what it supports, so uncertainty about the evidence is not the stance.",
          null
        ]
      },
      diff: 2, secs: 64
    },
    {
      id: "HRB-025", sub: "vocabulary in context", type: "mc", passage: "p5",
      q: "As used in the second paragraph, the word 'coarse' most nearly means which of the following?",
      choices: [
        "rough to the touch",
        "lacking in fine detail",
        "rude or offensive in speech",
        "made up of large particles"
      ],
      answer: 1,
      rationale: {
        correct: "The passage contrasts 'a fast, coarse path' with 'a slower path through the cortex that supplies detail.' Set against a path that supplies detail, 'coarse' means without detail.",
        wrong: [
          "The most common sense of the word, but a nerve pathway is not being described by texture.",
          null,
          "A familiar sense applied to language, which does not fit a route carrying sensory information.",
          "A sense used of sand or ground material, not of the resolution of a signal."
        ]
      },
      diff: 2, secs: 60
    },

    /* ===== p6 — insurance cost terms (5): MI, SD, INF, APT, VOC ===== */
    {
      id: "HRB-026", sub: "main idea", type: "mc", passage: "p6",
      q: "What is the main focus of this passage?",
      choices: [
        "The premium is the largest expense associated with any health plan.",
        "Insurance companies design plans that are difficult to compare.",
        "What a plan costs in practice depends on the deductible, copay, coinsurance, and spending cap.",
        "An out-of-pocket maximum caps what a patient pays for covered care in a year."
      ],
      answer: 2,
      rationale: {
        correct: "The passage opens by saying the premium 'is only the cost of holding the plan' and then defines the deductible, copayment, coinsurance, and out-of-pocket maximum as the terms that determine what care actually costs.",
        wrong: [
          "Contradicted: the premium is described as only the cost of holding the plan, not as the largest expense.",
          "Overreaches. The passage explains the terms and never accuses insurers of making comparison hard.",
          null,
          "Too narrow: one of the four terms the passage explains."
        ]
      },
      diff: 2, secs: 64
    },
    {
      id: "HRB-027", sub: "supporting detail", type: "mc", passage: "p6",
      q: "According to the passage, which payment is a flat charge collected at the time of service?",
      choices: [
        "the premium",
        "the deductible",
        "the copayment",
        "the coinsurance"
      ],
      answer: 2,
      rationale: {
        correct: "Paragraph 2 states that 'a copayment is a flat charge collected at the time of service.'",
        wrong: [
          "The premium is the monthly cost of holding the plan, paid whether or not care is used.",
          "The deductible is an annual total the patient must reach, not a charge at each visit.",
          null,
          "Coinsurance is defined as a percentage of a bill rather than a flat charge."
        ]
      },
      diff: 1, secs: 46
    },
    {
      id: "HRB-028", sub: "inference", type: "mc", passage: "p6",
      q: "Based on the passage, which patient would benefit most from a plan with a low premium and a high deductible?",
      choices: [
        "a patient who expects to have surgery within the year",
        "a patient who uses very little care during the year",
        "a patient whose plan excludes most ordinary services",
        "a patient who reaches the out-of-pocket maximum early"
      ],
      answer: 1,
      rationale: {
        correct: "The last paragraph says such a plan 'can cost less over a year of good health and considerably more over a year that includes surgery.' Low use is the case in which the low premium wins.",
        wrong: [
          "Reversed: surgery is the example the passage gives of the year in which this design costs more.",
          null,
          "Excluded care never counts toward the maximum under any plan, so exclusions do not favor this design.",
          "Reaching the cap early means heavy spending, which is precisely what a high deductible makes expensive."
        ]
      },
      diff: 3, secs: 78
    },
    {
      id: "HRB-029", sub: "author's purpose/tone", type: "mc", passage: "p6",
      q: "Why did the author most likely write this passage?",
      choices: [
        "to help a reader work out what a plan will cost when care is used",
        "to persuade readers to choose the plan with the lowest premium",
        "to criticize insurers for the wording of their policy documents",
        "to describe how an insurance company calculates its own costs"
      ],
      answer: 0,
      rationale: {
        correct: "The passage defines each term, gives worked figures such as a $2,000 deductible and an eighty-twenty split, and closes by saying 'the arithmetic rewards attention.' That is practical instruction.",
        wrong: [
          null,
          "The opposite of the closing point, which warns that a low premium can cost more in a year that includes surgery.",
          "No insurer is criticized; the terms are explained as they stand.",
          "The passage stays on the patient's side of the ledger and never describes company accounting."
        ]
      },
      diff: 2, secs: 62
    },
    {
      id: "HRB-030", sub: "vocabulary in context", type: "mc", passage: "p6",
      q: "As used in the third paragraph, the word 'ceiling' most nearly means which of the following?",
      choices: [
        "the overhead surface of a room",
        "the highest altitude an aircraft can reach",
        "a fixed rate charged for a routine service",
        "an upper limit that is not exceeded"
      ],
      answer: 3,
      rationale: {
        correct: "The sentence follows the definition of the out-of-pocket maximum, which 'caps what a patient can be required to pay,' so reaching 'that ceiling' means reaching that upper limit.",
        wrong: [
          "The most common household sense, but a room's surface cannot be reached by a year of spending.",
          "A real aviation sense, which does not fit a paragraph about annual payments.",
          "This describes a copayment, defined earlier in the passage, not the maximum being discussed here.",
          null
        ]
      },
      diff: 2, secs: 58
    },

    /* ===== p7 — seat belts (5): MI, SD, INF, INF, APT ===== */
    {
      id: "HRB-031", sub: "main idea", type: "mc", passage: "p7",
      q: "Which statement best summarizes the passage?",
      choices: [
        "Use rose when the requirement fell on the driver and was enforced, not when evidence arrived.",
        "Federal rules required seat belts in all new American cars by the late 1960s.",
        "Automakers resisted safety equipment until the government compelled them.",
        "New York became the first state to require the use of seat belts in 1984."
      ],
      answer: 0,
      rationale: {
        correct: "The closing paragraph states the sequence outright: evidence 'had little effect,' availability 'had modest effect,' and 'use rose when the requirement attached to the person and someone was checking.'",
        wrong: [
          null,
          "A true supporting fact from paragraph 2 that marks one stage in the story rather than summarizing it.",
          "Never claimed. The passage describes manufacturers trying buzzers and interlocks, which is the opposite of resistance.",
          "Too narrow: one dated example inside the paragraph about state law."
        ]
      },
      diff: 2, secs: 66
    },
    {
      id: "HRB-032", sub: "supporting detail", type: "mc", passage: "p7",
      q: "According to the passage, how did drivers respond to the system that prevented the engine from starting until the belt was fastened?",
      choices: [
        "They complained to state legislatures until the rule was repealed.",
        "They cut the belts or buckled them behind the seat.",
        "They began wearing belts at rates above fifty percent.",
        "They asked manufacturers to install louder warning buzzers."
      ],
      answer: 1,
      rationale: {
        correct: "Paragraph 2 states that 'drivers responded by cutting the belts or buckling them behind the seat, and the requirement was withdrawn.'",
        wrong: [
          "The requirement was withdrawn, but the passage credits driver defeat of the device, not lobbying of legislatures.",
          null,
          "Contradicted by the surveys of the 1970s, which found fewer than one driver in five buckling up.",
          "Buzzers are named as an earlier attempt manufacturers made, not as something drivers requested."
        ]
      },
      diff: 1, secs: 50
    },
    {
      id: "HRB-033", sub: "inference", type: "mc", passage: "p7",
      q: "The passage suggests that belt use climbed highest in states with which feature?",
      choices: [
        "an officer could stop a driver for the belt violation by itself",
        "the fine for a violation was larger than in neighboring states",
        "seat belts had been required in new cars for the longest time",
        "publicity campaigns were run without any enforcement at all"
      ],
      answer: 0,
      rationale: {
        correct: "Paragraph 3 says use 'climbed furthest in states where an officer could stop a vehicle for the belt violation by itself rather than only after stopping it for something else.'",
        wrong: [
          null,
          "Plausible as a substitute for enforcement, but the passage never mentions the size of any fine.",
          "Contradicted by the passage's own sequence: availability in cars produced only a modest effect.",
          "Reversed: campaigns are described as running 'alongside enforcement,' not instead of it."
        ]
      },
      diff: 3, secs: 78
    },
    {
      id: "HRB-034", sub: "inference", type: "mc", passage: "p7",
      q: "Based on the passage, what can be concluded about the crash evidence gathered before the 1960s?",
      choices: [
        "It was disputed by the engineers who had collected it.",
        "It was sound but did not by itself change behavior.",
        "It was withheld from the public by the manufacturers.",
        "It underestimated the force involved in a typical crash."
      ],
      answer: 1,
      rationale: {
        correct: "The passage reports that engineers had shown the force difference and investigators had documented the injuries, yet 'the evidence did not move sales,' and the final paragraph repeats that evidence 'came first and had little effect.'",
        wrong: [
          "No dispute among engineers is described; the findings are presented as established.",
          null,
          "Plausible-sounding, but nothing in the passage says the evidence was concealed; it simply did not persuade buyers.",
          "The passage treats the measurements as accurate and never suggests they were too low."
        ]
      },
      diff: 2, secs: 68
    },
    {
      id: "HRB-035", sub: "author's purpose/tone", type: "mc", passage: "p7",
      q: "In the last paragraph, the author is chiefly doing which of the following?",
      choices: [
        "assigning blame to drivers who refused to buckle up",
        "predicting that belt use will continue to rise each year",
        "drawing a lesson from the order in which the changes came",
        "recommending that engine-interlock systems be reinstated"
      ],
      answer: 2,
      rationale: {
        correct: "The paragraph opens 'The sequence is worth noting' and then restates the three stages in order, which makes it a lesson drawn from the chronology.",
        wrong: [
          "The paragraph describes behavior without condemning drivers; the earlier account of cut belts is reported flatly.",
          "No prediction about the future is offered anywhere in the passage.",
          null,
          "The interlock is described as withdrawn after drivers defeated it, and no revival is proposed."
        ]
      },
      diff: 2, secs: 62
    },

    /* ===== p8 — surgical anesthesia (4): MI, INF, APT, VOC ===== */
    {
      id: "HRB-036", sub: "main idea", type: "mc", passage: "p8",
      q: "The passage is mainly about which of the following?",
      choices: [
        "the public demonstrations at which ether was inhaled for amusement",
        "the reasons early surgeons valued speed above every other skill",
        "the antiseptic techniques that reduced deaths after an operation",
        "the arrival of surgical anesthesia and what it made possible"
      ],
      answer: 3,
      rationale: {
        correct: "The passage moves from surgery on waking patients, to the 1846 ether operation, to the consequence that 'surgeons who no longer had to hurry could attempt procedures that took an hour.'",
        wrong: [
          "A true detail from paragraph 2, included to explain why the gases were already familiar.",
          "Too narrow: one sentence establishing what surgery was like before anesthesia.",
          "Antisepsis appears only in the last sentence as the obstacle that came next.",
          null
        ]
      },
      diff: 2, secs: 64
    },
    {
      id: "HRB-037", sub: "inference", type: "mc", passage: "p8",
      q: "The passage suggests that the delay between the first recreational use of ether and its use in surgery is best explained by which of the following?",
      choices: [
        "Ether was too expensive for hospitals to obtain before 1846.",
        "The insensibility ether produced was observed but not acted upon.",
        "Surgeons doubted that a patient could survive an hour of surgery.",
        "Nitrous oxide had already been shown to be safer than ether."
      ],
      answer: 1,
      rationale: {
        correct: "Paragraph 2 says several observers noticed 'that a person under the influence could strike a limb and feel nothing,' and then adds the key sentence: 'Acting on that observation took longer.'",
        wrong: [
          "Cost is never mentioned anywhere in the passage.",
          null,
          "Reverses the chronology: hour-long procedures became conceivable only after anesthesia arrived.",
          "Both gases are named, but the passage makes no comparison of their safety."
        ]
      },
      diff: 3, secs: 80
    },
    {
      id: "HRB-038", sub: "author's purpose/tone", type: "mc", passage: "p8",
      q: "Which of the following best describes the tone of the final paragraph?",
      choices: [
        "triumphant, presenting anesthesia as the end of surgical danger",
        "measured, crediting a gain while naming what still remained",
        "sorrowful, dwelling on the patients who had suffered earlier",
        "skeptical, doubting that ether worked as it was reported to"
      ],
      answer: 1,
      rationale: {
        correct: "The paragraph credits anesthesia with making the interior of the body reachable and then states that 'infection remained' and killed many patients, ending with 'one obstacle had been removed, and the next became visible.'",
        wrong: [
          "Ruled out by the sentence about infection killing many patients for a generation afterward.",
          null,
          "Earlier suffering is described in paragraph 1 without lament, and the final paragraph looks forward instead.",
          "The account treats the 1846 operation as successful; no doubt about ether is expressed."
        ]
      },
      diff: 2, secs: 62
    },
    {
      id: "HRB-039", sub: "vocabulary in context", type: "mc", passage: "p8",
      q: "As used in the first paragraph, the word 'virtue' most nearly means which of the following?",
      choices: [
        "moral goodness in a person's conduct",
        "a reward given in return for service",
        "restraint exercised in the face of temptation",
        "a quality that gives a particular advantage"
      ],
      answer: 3,
      rationale: {
        correct: "The sentence is 'Speed was the surgeon's principal virtue,' and the clause that follows explains why: a short operation was survivable when a long one was not. Speed is an advantage, not a moral trait.",
        wrong: [
          "The most common sense of the word, but the passage is ranking surgical skills rather than character.",
          "A reward would be something the surgeon received, whereas speed is something the surgeon had.",
          "Another moral sense, and nothing in the paragraph involves temptation.",
          null
        ]
      },
      diff: 2, secs: 58
    },

    /* ===== p9 — pain scales (6): MI, SD, INF, INF, APT, VOC ===== */
    {
      id: "HRB-040", sub: "main idea", type: "mc", passage: "p9",
      q: "Which of the following best expresses the central idea of the passage?",
      choices: [
        "Numeric pain scales produce values that can be compared across patients.",
        "Children and patients with dementia require observational pain tools.",
        "Heart rate and posture are unreliable indicators of a patient's pain.",
        "Pain must be self-reported, and the scale matters less than the routine of asking."
      ],
      answer: 3,
      rationale: {
        correct: "The passage establishes that 'clinical practice relies on what the patient reports' and closes with the claim that 'the instrument matters less than the practice it enforces,' namely asking, recording, and asking again.",
        wrong: [
          "Contradicted: the passage says 'the absolute values cannot be compared across a ward.'",
          "A true detail about alternative tools, narrower than the passage's point.",
          "A true supporting detail from paragraph 1 that sets up the need for self-report.",
          null
        ]
      },
      diff: 2, secs: 66
    },
    {
      id: "HRB-041", sub: "supporting detail", type: "mc", passage: "p9",
      q: "According to the passage, what does the numeric pain scale do well?",
      choices: [
        "It tracks change in a single patient over time.",
        "It lets one patient's score be compared with another's.",
        "It removes the need to question patients about pain.",
        "It predicts which patients will need the strongest drugs."
      ],
      answer: 0,
      rationale: {
        correct: "Paragraph 3 states it directly: 'What the scale does well is track a single patient over time,' illustrated by a drop from eight to four after a dose.",
        wrong: [
          null,
          "The passage names this as the scale's weakness, since the anchor at ten 'is imaginary and personal.'",
          "The reverse: the scale is valued because it 'requires that someone ask.'",
          "Prediction of drug requirements is never mentioned."
        ]
      },
      diff: 1, secs: 48
    },
    {
      id: "HRB-042", sub: "inference", type: "mc", passage: "p9",
      q: "Based on the passage, what should a clinician conclude when two different patients each rate their pain as an eight?",
      choices: [
        "that the two patients are feeling pain of the same intensity",
        "that the two ratings cannot be assumed to mean the same thing",
        "that neither of the two ratings can be used to guide treatment",
        "that both patients require an immediate change in treatment"
      ],
      answer: 1,
      rationale: {
        correct: "Paragraph 3 says 'the anchor at ten is imaginary and personal, so the same number means different things from one patient to another.' Matching numbers therefore do not establish matching pain.",
        wrong: [
          "This is precisely the assumption the passage rules out.",
          null,
          "Overreaches. The scale is described as useful for following one patient over time, not as unusable.",
          "The passage never ties any particular score to a treatment decision."
        ]
      },
      diff: 3, secs: 78
    },
    {
      id: "HRB-043", sub: "inference", type: "mc", passage: "p9",
      q: "Based on the passage, which patients are most at risk of having their pain undertreated?",
      choices: [
        "patients who report the highest numbers on the scale",
        "patients whose vital signs remain within normal limits",
        "patients least able to press their case for treatment",
        "patients who are offered a drawn set of faces to choose from"
      ],
      answer: 2,
      rationale: {
        correct: "The final sentence states that where pain is not documented 'it is undertreated, and the patients least able to press their case are the ones most often overlooked.'",
        wrong: [
          "Reversed: a high reported number is the situation in which pain has been asked about and recorded.",
          "Tempting, since the passage says heart rate and posture are not trusted, but it never links normal vital signs to undertreatment.",
          null,
          "Face scales are presented as an accommodation for patients who cannot use numbers, not as a source of risk."
        ]
      },
      diff: 3, secs: 80
    },
    {
      id: "HRB-044", sub: "author's purpose/tone", type: "mc", passage: "p9",
      q: "The final paragraph is best described as which of the following?",
      choices: [
        "an argument that the routine of asking matters most",
        "a warning that pain scales are now used too often",
        "a defense of numeric scoring against its critics",
        "a summary of the tools available for scoring pain"
      ],
      answer: 0,
      rationale: {
        correct: "The paragraph subordinates the tool to the habit -- 'the instrument matters less than the practice it enforces' -- and then lists that practice: ask, record, ask again.",
        wrong: [
          null,
          "No overuse is alleged; the concern is pain that goes undocumented.",
          "The paragraph sets the numeric scale aside rather than defending it, and its weaknesses were granted a paragraph earlier.",
          "The tools were listed in paragraph 2; this paragraph makes a claim rather than cataloging them."
        ]
      },
      diff: 2, secs: 62
    },
    {
      id: "HRB-045", sub: "vocabulary in context", type: "mc", passage: "p9",
      q: "As used in the third paragraph, the word 'anchor' most nearly means which of the following?",
      choices: [
        "a heavy weight that holds a boat in place",
        "a person who presents a news broadcast",
        "a fixed point that defines one end of a scale",
        "a firm support to which a rope is tied"
      ],
      answer: 2,
      rationale: {
        correct: "The sentence reads 'the anchor at ten is imaginary and personal,' and ten was defined earlier as 'the worst pain imaginable,' which is the endpoint the whole scale is measured against.",
        wrong: [
          "The most common sense of the word, but nothing nautical is under discussion.",
          "A familiar broadcasting sense that cannot be located 'at ten' on a rating scale.",
          null,
          "A physical support sense; the thing being held fixed here is a numeric endpoint, not a rope."
        ]
      },
      diff: 3, secs: 72
    },

    /* ===== p10 — urban tree canopy (5): MI, SD, INF, APT, VOC ===== */
    {
      id: "HRB-046", sub: "main idea", type: "mc", passage: "p10",
      q: "Which of the following best states the main point of this passage?",
      choices: [
        "Trees are the least expensive method of reducing heat in a city.",
        "Nighttime temperatures in cities exceed those in the countryside.",
        "Lower-income neighborhoods contain more pavement than other neighborhoods.",
        "Trees cool city blocks, but the canopy is unevenly spread and slow to grow."
      ],
      answer: 3,
      rationale: {
        correct: "The passage explains how shade and evaporation cool a block, reports that 'tree cover is not distributed evenly,' and closes on how long planting takes and what makes it hard.",
        wrong: [
          "Overreaches. The passage says the cost of the trees is not the hard part but never ranks methods by expense.",
          "A true detail from paragraph 1 that establishes the problem the trees address.",
          "A true detail from paragraph 3, one strand of the distribution point rather than the whole passage.",
          null
        ]
      },
      diff: 2, secs: 64
    },
    {
      id: "HRB-047", sub: "supporting detail", type: "mc", passage: "p10",
      q: "According to the passage, in what two ways do trees reduce the heat of a city block?",
      choices: [
        "by shading surfaces and by evaporating water from their leaves",
        "by blocking wind and by absorbing sunlight into their bark",
        "by shading surfaces and by holding rainwater in the soil",
        "by releasing oxygen and by lowering the humidity of the air"
      ],
      answer: 0,
      rationale: {
        correct: "Paragraph 2 names both: shade 'keeps pavement and walls from taking on heat in the first place,' and 'water evaporating from leaves cools the surrounding air directly.'",
        wrong: [
          null,
          "Blocked wind is named in paragraph 1 as something buildings do that makes cities hotter, not as a cooling effect of trees.",
          "Shade is correct, but soil water storage is never mentioned; the passage describes water leaving the leaves.",
          "Oxygen and humidity are not discussed, and evaporation would add water to the air rather than remove it."
        ]
      },
      diff: 2, secs: 58
    },
    {
      id: "HRB-048", sub: "inference", type: "mc", passage: "p10",
      q: "Based on the passage, why is nighttime heat treated as the dangerous part of a heat wave?",
      choices: [
        "Emergency departments are staffed by fewer clinicians overnight.",
        "Pavement releases more heat at night than it absorbs during the day.",
        "Air conditioning is used less often after residents have fallen asleep.",
        "A body that does not cool has no chance to recover before morning."
      ],
      answer: 3,
      rationale: {
        correct: "Paragraph 1 gives the reason directly: heat at night is dangerous 'because a body that does not cool has no chance to recover before the next day.'",
        wrong: [
          "Plausible as an explanation for worse outcomes, but staffing is never mentioned in the passage.",
          "Distorts the text: surfaces absorb sunlight and release it slowly through the evening, and no such comparison is made.",
          "Air conditioning appears only as something lower-income neighborhoods have less of, never in connection with sleep.",
          null
        ]
      },
      diff: 3, secs: 78
    },
    {
      id: "HRB-049", sub: "author's purpose/tone", type: "mc", passage: "p10",
      q: "Which of the following best describes the author's stance toward tree-planting programs?",
      choices: [
        "enthusiastic, offering planting as a quick remedy for urban heat",
        "supportive but realistic about how long the results take",
        "doubtful that trees lower temperatures by a measurable amount",
        "critical of the cities that have spent money on new plantings"
      ],
      answer: 1,
      rationale: {
        correct: "The author credits measured cooling beneath a mature canopy and then states that 'planting is slow work,' naming the fifteen-year wait, the watering, and the competing uses of sidewalk space.",
        wrong: [
          "Reversed: the final paragraph is built on how slow the remedy is.",
          null,
          "Contradicted by the measurements 'several degrees cooler than on an unshaded block a short walk away.'",
          "No spending is criticized; the passage says the trees themselves are not the hard part."
        ]
      },
      diff: 2, secs: 62
    },
    {
      id: "HRB-050", sub: "vocabulary in context", type: "mc", passage: "p10",
      q: "As used in the second paragraph, the word 'canopy' most nearly means which of the following?",
      choices: [
        "a cloth cover suspended above a bed or a doorway",
        "the clear cover fitted over an aircraft cockpit",
        "a fabric shelter raised over an outdoor table",
        "the cover formed overhead by the crowns of trees"
      ],
      answer: 3,
      rationale: {
        correct: "The phrase is 'beneath a mature street canopy,' and the paragraph has just described shade cast by trees, so the canopy is the layer of foliage overhead.",
        wrong: [
          "The most familiar household sense, but the passage measures air temperature beneath street trees.",
          "A real technical sense that has nothing to do with shade on a city block.",
          "A temporary outdoor shelter would not be described as mature.",
          null
        ]
      },
      diff: 2, secs: 58
    },

    /* ===== p11 — standard time (5): MI, SD, INF, APT, VOC ===== */
    {
      id: "HRB-051", sub: "main idea", type: "mc", passage: "p11",
      q: "Which statement best expresses the main idea of this passage?",
      choices: [
        "Clocks in neighboring towns once differed from one another by several minutes.",
        "Federal law recognized the railroad time zones in the year 1918.",
        "Railroad companies were the most powerful businesses of the century.",
        "Standard time was adopted as an agreement that coordination required."
      ],
      answer: 3,
      rationale: {
        correct: "The final paragraph states the point: what the railroads imposed 'was not a discovery about time but an agreement about it, adopted because coordination had become more valuable than local accuracy.'",
        wrong: [
          "A true opening detail that sets up the problem rather than stating the passage's point.",
          "A true supporting detail from paragraph 3, one date within the story.",
          "Overly broad and never claimed; the passage describes what railroads needed, not their rank among businesses.",
          null
        ]
      },
      diff: 2, secs: 64
    },
    {
      id: "HRB-052", sub: "supporting detail", type: "mc", passage: "p11",
      q: "According to the passage, how did some railroad companies handle conflicting local times before 1883?",
      choices: [
        "They printed a separate timetable for every town on the line.",
        "They asked each town to reset its clocks to match the sun.",
        "They ran every station on the time kept at company headquarters.",
        "They delayed departures until each station's clock agreed."
      ],
      answer: 2,
      rationale: {
        correct: "Paragraph 2 says some companies 'solved the problem privately by running every station on the time kept at company headquarters, so a traveler changing lines had to change watches as well.'",
        wrong: [
          "The passage says the towns' own noons produced timetables 'that no clerk could reconcile,' not that separate timetables were printed.",
          "Sun time was already what the towns kept; the companies overrode it rather than asking for it.",
          null,
          "Delayed departures are never mentioned; the danger described is near collisions, not waiting."
        ]
      },
      diff: 2, secs: 58
    },
    {
      id: "HRB-053", sub: "inference", type: "mc", passage: "p11",
      q: "The passage suggests that local sun time went unquestioned for so long primarily because of which of the following?",
      choices: [
        "Most people did not own a clock accurate enough to notice a difference.",
        "Astronomers had not yet worked out a way to define the hour of noon.",
        "Town governments defended the practice against pressure from outside.",
        "No one traveled fast enough for the differences to cause any trouble."
      ],
      answer: 3,
      rationale: {
        correct: "Paragraph 1 supplies the reason directly: 'Nobody minded, because nobody could travel fast enough for the difference to matter.'",
        wrong: [
          "Plausible-sounding, but clock ownership and accuracy are never discussed in the passage.",
          "Reversed: noon was defined by the sun's height, an observation the passage treats as settled and easy.",
          "Resolutions defending sun time came after 1883, so this reverses the order of events."
        , null]
      },
      diff: 3, secs: 78
    },
    {
      id: "HRB-054", sub: "author's purpose/tone", type: "mc", passage: "p11",
      q: "What is the author's primary purpose in this passage?",
      choices: [
        "to explain why a shared system of time replaced local time",
        "to criticize the railroads for imposing schedules on towns",
        "to describe daily life in a nineteenth-century American town",
        "to argue that the present time zones should be redrawn"
      ],
      answer: 0,
      rationale: {
        correct: "The passage moves from why local noon was workable, to why railroads made it unworkable, to the 1883 agreement, and then names the reason for the change. That structure is explanation.",
        wrong: [
          null,
          "The imposition is reported, including the towns that resisted, but the author passes no judgment on the railroads.",
          "Daily life appears only as the observation that nobody minded the differences.",
          "No change to present arrangements is proposed anywhere in the passage."
        ]
      },
      diff: 2, secs: 62
    },
    {
      id: "HRB-055", sub: "vocabulary in context", type: "mc", passage: "p11",
      q: "As used in the second paragraph, the word 'reconcile' most nearly means which of the following?",
      choices: [
        "to restore a friendship after a quarrel",
        "to accept an outcome that cannot be changed",
        "to settle a dispute through a formal hearing",
        "to bring separate records into agreement"
      ],
      answer: 3,
      rationale: {
        correct: "The phrase is 'timetables that no clerk could reconcile,' and the problem described is dozens of towns each keeping a different noon, so the clerk cannot make the schedules agree with one another.",
        wrong: [
          "The most common everyday sense, but timetables are not parties to a quarrel.",
          "A real sense of the word, usually reflexive, and the sentence names a task the clerk cannot perform on documents.",
          "No hearing or dispute resolution appears; the obstacle is arithmetic, not legal.",
          null
        ]
      },
      diff: 2, secs: 60
    }

  ]
};
