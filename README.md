# Nursing Entrance Exam Practice — ATI TEAS 7 & HESI A2

A free, blueprint-exact practice simulator for the two nursing-school entrance exams, built for a De Anza / Evergreen Valley applicant.

**Live:** https://producer456hub.github.io/teas-hesi-prep/

## Why it exists

Both exams have rules that make a bad first attempt expensive:

- **ATI TEAS 7 (Evergreen Valley College)** — EVC locks in your **first passing score permanently**. 62% is the eligibility floor; 85%+ earns the maximum 25 admission points. A rushed 63% costs 20 points forever.
- **HESI A2 (De Anza College)** — six required sections, each needing **75% independently** (no averaging). **Two attempts, lifetime.** Miss twice and you are barred from every De Anza nursing program permanently.

So the goal here is not to feel prepared — it's to be reliably above the bar before booking either exam.

Companion to the [nursing school planner](https://producer456hub.github.io/nursing-planner/). Both sites are served from the same origin, so the planner reads your practice results here and turns them into a projected Evergreen Valley point score and per-section HESI warnings.

## What it does

- **Full simulation** with the real mechanics: TEAS runs four separately-timed sections (Reading 45q/55min, Math 38q/57min, Science 50q/60min, English 37q/37min) with back-navigation, flagging, a 10-minute break after Math, and a four-function calculator in Math only. HESI runs six sections **forward-only** — no skipping, no going back, answers lock on Next, exactly as the real test behaves.
- **Two non-overlapping forms per exam** (ATI's own A/B design). 900 original questions in total: TEAS 170 × 2, HESI 280 × 2. Forms A and B share no question, so a second sitting measures what you have learned rather than what you remember — and readiness is defined as clearing your target on *both*.
- **Blueprint-exact question distribution.** Every item is tagged to a published sub-content area and the counts match ATI's and Elsevier's official allocations.
- **All four TEAS alternate item types** — multiple-select, supply-answer fill-in, ordered response, and hot-spot — scored all-or-nothing with no partial credit, as ATI specifies. HESI is multiple-choice plus numeric entry only, because adding the others would make it *less* realistic.
- **A rationale on every question** explaining why the key is right and why each distractor is wrong.
- **Section practice, missed-questions requiz, and weakest-area drills** driven by cumulative per-content-area accuracy.
- **Honest scoring.** TEAS reports the ATI preparedness band and the projected EVC point band. HESI reports each section against its own 75% bar and never averages them. Unanswered questions are counted wrong and reported separately.
- Progress autosaves in the browser, with JSON export/import to move between devices.

## Readiness rule

The app deliberately does not predict your real score — no third-party practice test has published validation data for that. The defensible standard it uses instead:

> **Ready = at or above your program's target on two *different* full-length simulations, under real time limits.**

Third-party practice generally runs *harder* than the real TEAS, so treat a practice score as a floor rather than a ceiling. Before booking, confirm with an official ATI practice test (Forms A/B) or the Evolve HESI practice exams — use this to get there cheaply, use theirs to confirm you've arrived.

## Structure

```
index.html          the whole app — exam engine, scoring, review, dashboard
banks/*.js          question banks, one per exam section
tools/validate.js   structural validator: blueprint counts, schema, key balance
BUILD_SPEC.md       the authoring spec the banks were written against
```

Validate the banks with `node tools/validate.js`.

## Disclaimer

Not affiliated with or endorsed by ATI (Assessment Technologies Institute) or Elsevier. All questions are original, written to publicly published content blueprints. No real exam questions appear here.
