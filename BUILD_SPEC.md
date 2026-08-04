# TEAS 7 + HESI A2 Practice Simulator — Build Spec

Mission: a free, faithful practice-test web app for one applicant preparing for (a) ATI TEAS 7 at Evergreen Valley College (62% floor, 85%+ = max 25 admission points, FIRST passing score locks forever) and (b) HESI A2 at De Anza College (six sections, 75% each independently, two sittings lifetime, best sections combine). Stakes are one-shot: the app must be honest, blueprint-exact, and calibrated faithful-to-real (not artificially hard, not soft).

Authoritative research lives in `research/` — read the parts relevant to your assignment:
- `research/teas7-structure.md` — TEAS structure, blueprint, scoring bands
- `research/hesi-a2-structure.md` — HESI structure, De Anza rules, section mechanics
- `research/content-inventory.md` — per-topic inventory with FREQ/OCC/RARE emphasis tags (3,261 lines; READ ONLY YOUR SECTION — grep the headers first)
- `research/question-style-and-pedagogy.md` — house style, distractor patterns, calibration samples, pedagogy (Part 2, 3, 4, 8 matter most for authors)

## Fidelity decisions (locked)

- TEAS sim: 4 sections, separate clocks — Reading 45q/55min, Math 38q/57min, Science 50q/60min, English 37q/37min. Optional 10-min break after Math. Back-navigation and flagging WITHIN a section; a submitted section locks. Four-function on-screen calculator in Math only.
- TEAS item types: ~15% alternate (multiple-select, supply-answer fill-in, ordered response, hot spot), rest 4-option MC. All alternate types scored all-or-nothing, no partial credit.
- HESI sim: 6 De Anza sections in this order: Math 55q/50min, Reading 55q/60min, Vocabulary 55q/50min, Grammar 55q/50min, Biology 30q/25min, A&P 30q/30min. FORWARD-ONLY: no skip, no back, answer locks on Next. Per-section clocks; unanswered = wrong (engine nags before section close). Nearly all 4-option MC; a handful of numeric fill-ins in Math only. On-screen calculator in Math only. NO drag-order/hot-spot on HESI — adding them would reduce realism.
- HESI difficulty: real exam reported EASIER than third-party prep. Calibrate faithful. ~20-25% of items tagged difficulty 3 (multi-step math chains, subtle vocab, two-hop A&P). TEAS: faithful-to-slightly-firm; never gratuitously hard.
- Scoring displays: TEAS → % + ATI preparedness band (Exemplary 90.7+, Advanced 78–90, Proficient 58.7–77.3, Basic 41.3–58, Developmental below) + EVC point band (85–100 = 25pts, 78–84.9 = 20, 71–77.9 = 15, 64–70.9 = 10, 62–63.9 = 5, below 62 = not eligible). HESI → per-section % against the 75% bar with margin; NO composite average (De Anza doesn't average). Wrong vs never-answered distinguished in reports.
- Readiness rule (the only defensible one): ready = at/above target on two different full-length forms, under real clocks, on non-overlapping banks. Practice skews hard vs real TEAS → practice score is more likely a floor than a ceiling. Never display a predicted real score.

## Repo layout

```
teas-hesi-prep/
  index.html          # entire app: styles + engine (banks load as separate scripts)
  banks/
    teas-reading.js   teas-math.js   teas-science-ap.js  teas-science-cr.js  teas-english.js
    hesi-math.js      hesi-reading.js  hesi-vocab.js     hesi-grammar.js     hesi-bio-ap.js
  tools/validate.js   # node validator — MUST pass before an author finishes
  research/           # NOT committed (gitignored) — local reference only
  BUILD_SPEC.md
```

## Bank file format

Each bank file is plain browser JS (`node --check` clean, ASCII quotes, no template literals needed):

```js
window.BANKS = window.BANKS || {};
window.BANKS["teas-reading"] = {
  exam: "teas",              // "teas" | "hesi"
  section: "reading",        // key below
  passages: {                // reading banks only; omit otherwise
    "p1": { title: "…", kind: "prose", text: "…" }   // kind: prose|label|schedule|table|recipe|index|chart
  },
  questions: [ /* see item schema */ ]
};
```

### Item schema

```js
{
  id: "TRA-001",           // prefix per file (below) + zero-padded serial
  sub: "Key Ideas and Details",   // EXACT sub-content name from the assignment table
  type: "mc",              // mc | ms | fill | order | hotspot
  passage: "p1",           // optional passage ref (reading banks)
  q: "Which of the following…?",
  choices: ["…","…","…","…"],       // mc: exactly 4. ms: 5–6. omit for fill/order/hotspot
  answer: 2,               // mc: index. ms: sorted index array [1,3]. fill: {accept:["2.5","2.50"]}.
                           // order: array = correct sequence of item indices. hotspot: region id string.
  items: ["…","…","…","…"],         // order type only: 4–5 steps, listed SCRAMBLED
  svg: "<svg …>…</svg>",   // hotspot only — simple viewBox SVG, class-styled (see engine notes)
  regions: [{id:"r1", label:"Left ventricle", shape:"rect", x:0, y:0, w:10, h:10}], // hotspot only, 2–5 regions
  rationale: {
    correct: "One-to-two-sentence mechanism for why the key is right.",
    wrong: ["why A wrong", null, "why C wrong", "why D wrong"]   // mc/ms: parallel to choices, null at key(s). others: omit
  },
  diff: 2,                 // 1 easy, 2 medium, 3 challenging
  secs: 73                 // target seconds (per pacing table for the section)
}
```

### ID prefixes

TRA teas-reading · TMA teas-math · TSA teas-science-ap · TSC teas-science-cr · TEA teas-english · HMA hesi-math · HRA hesi-reading · HVA hesi-vocab · HGA hesi-grammar · HBA hesi-bio-ap

## Assignments — Form A (counts are exact; validator enforces)

| File | Total | Sub-content breakdown | Alternate items |
|---|---|---|---|
| teas-reading.js | 45 | Key Ideas and Details 17 · Craft and Structure 11 · Integration of Knowledge and Ideas 17 | 2 order (following directions / sequence) + 2 ms |
| teas-math.js | 38 | Numbers and Algebra 21 · Measurement and Data 17 | 5 fill + 1 hotspot (graph reading) + 1 ms |
| teas-science-ap.js | 31 | Human Anatomy & Physiology 21 · Biology 10 | 2 order + 3 ms + 1 hotspot |
| teas-science-cr.js | 19 | Chemistry 9 · Scientific Reasoning 10 | 1 order + 1 ms + 1 hotspot + 1 fill |
| teas-english.js | 37 | Conventions of Standard English 13 · Knowledge of Language 12 · Vocabulary Acquisition 12 | 3 ms |
| hesi-math.js | 55 | fractions 8 · decimals-percents 8 · ratio-proportion 8 · conversions (household/metric) 9 · military time 3 · roman numerals 3 · dosage word problems 9 · basic algebra 7 | 7 fill (numeric), rest mc |
| hesi-reading.js | 55 | main idea 12 · supporting detail 10 · inference 13 · author's purpose/tone 10 · vocabulary in context 10 — across ~11 passages of 150–250 words, 4–6 q each | mc only |
| hesi-vocab.js | 55 | clinical-flavored 22 · general academic 25 · word parts/context 8 — draw from the 341-word list in content-inventory.md; both stem frames ("underlined word in sentence" / "best synonym for X") | mc only |
| hesi-grammar.js | 55 | subject-verb agreement 9 · pronoun case/agreement 9 · punctuation 9 · commonly confused words (its/it's, their/there, lie/lay, affect/effect, who/whom) 12 · sentence structure/modifiers 9 · verb tense/form 7 | mc only |
| hesi-bio-ap.js | 60 | Biology 30: macromolecules 6 · cell structure 6 · cellular respiration/photosynthesis 5 · genetics 6 · DNA/RNA-protein synthesis 4 · scientific method/taxonomy 3. A&P 30: spread across all 11 systems, ≥2 each, definitional-first | mc only |

Passage guidance (teas-reading): ~5 long prose 300–400 words × 3 q; ~3 medium 200 words × 2 q; ~3 short ~100 words × 1–2 q; ~4 non-prose stimuli (medication label, bus schedule, table, recipe or index) carrying ~8 q; remainder standalone. Sum to exactly 45.

## Item-writing checklist (apply to EVERY item — from research Part 8)

1. Stem is a complete question answerable before reading the options (cover-the-options test).
2. Options homogeneous: same category, same grammatical form, same rough length. Key NOT systematically longest.
3. Every distractor traceable to a named wrong path: adjacent structure, common misconception, specific arithmetic slip, or passage over-reach. No throwaway options.
4. FORBIDDEN: "all of the above", "none of the above", "both A and B", absolutes ("always"/"never") in reading keys — reserve absolutes for distractors.
5. Key positions balanced across A/B/C/D in every 20-item block (validator warns).
6. Rationale: one mechanism sentence for the key + one short "why not" per distractor. This is the product's most-valued feature — write them well.
7. Tag exam/section/sub exactly as assigned; diff mix per section: TEAS Science ~40% recall / 30% application / 30% analysis; HESI recall-heavy with 20–25% diff-3.
8. Stems: TEAS science recall 1–2 sentences; scientific-reasoning vignettes 100–150 words; math word problems 20–45 words (four-function-calculator-friendly numbers — fraction work doable by hand); English ≤1 sentence; HESI one sentence nearly everywhere.
9. ORIGINAL items only. The research files contain verbatim third-party samples for STYLE calibration — never copy or lightly paraphrase one into the bank.
10. Content accuracy beats cleverness. If unsure a fact is exam-canonical, check your section of content-inventory.md; prefer FREQ-tagged topics, sprinkle OCC, skip RARE.
11. fill items: stem must state the formatting rule ("Use a leading zero…"); accept-set covers equivalent forms ("2.5","2.50").
12. ms items: state "Select all that apply."; randomize key count (2–3) so it can't be inferred.
13. hotspot: 2–5 regions, simple inline SVG, viewBox="0 0 400 260", styles via classes only: `.hs-bg` (fill), `.hs-part` (shapes), `.hs-label` (text) — engine themes them. Regions are transparent rects the engine overlays from `regions`.

## Validator

`node tools/validate.js banks/<file>.js` — structural checks + count enforcement + key-balance audit + duplicate detection. Authors: run it, fix, repeat until PASS. It is the exit gate.

## Engine notes (context for authors; built separately)

Single-page app in index.html. Modes: Full Simulation (real clocks + mechanics per exam), Section Practice (untimed, rationale after each answer, immediate), Missed-Questions Requiz, Weakest-Area Drill (lowest-accuracy subs first). Review screen after any run: every item, your answer, key, full rationale, filter to missed/flagged. localStorage autosave + JSON export/import (same pattern as the nursing-planner site). Per-sub accuracy tracked cumulatively to drive drills and the readiness panel.
