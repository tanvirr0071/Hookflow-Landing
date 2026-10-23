# Markup — 10 Shorts progress

Steps: facts → baseline → arena → polished → checked → build prompt → reviewed → done

| # | id | series | step reached | note |
|---|----|--------|--------------|------|
| 1 | costco | Markup | build prompt | arena done (winner 86 vs baseline 51); polished; build prompt written and self-reviewed; independent fact-check and reviewer pass not run |
| 2 | delta | Markup | build prompt | arena stopped after R2 by request; used the higher-scoring R2 finalist (a008, 92–87.5), polished; build prompt written and self-reviewed |
| 3 | popcorn | Markup | build prompt | written directly from facts (no arena, by request); build prompt self-reviewed |
| 4 | card-rewards | Markup | build prompt | written directly from facts (no arena, by request); build prompt self-reviewed |
| 5 | mcdonalds | Markup | polished | written directly from facts (no arena, by request); build prompt in progress |
| 6 | blockbuster | Billion-Dollar Mistakes, ep 6 | polished | written directly from facts (no arena, by request); build prompt in progress |
| 7 | diamonds | Markup | polished | written directly from facts (no arena, by request); build prompt in progress |
| 8 | gyms | Markup | polished | written directly from facts (no arena, by request); build prompt in progress |
| 9 | eyeglasses | Markup | polished | written directly from facts (no arena, by request); build prompt in progress |
| 10 | printer-ink | Markup | polished | written directly from facts (no arena, by request); build prompt in progress |

## Session log
- Session started 2026-10-23 on branch claude/serene-faraday-lavdgr. Web search, web fetch and sub-agents available. Arena skill found (bracket.py), used as ARENA.

## Assumptions and readings
- Repo is the user's landing-page repo; episodes/ lives at its root alongside the site files, which are untouched.
- Step 1 done: all 10 facts.md written, each with at least 10 labelled facts and URLs. Costco: FY2026 results (Sept 24, 2026) used instead of FY2025.
- yt-script skill loaded, but its hookscore.py and hooks.json are missing from the skill folder; its five-hooks method is applied by hand.
- Arena runs share .arena/LATEST, so episodes run strictly one at a time.
- User asked to end the arena during Delta round 2 (after the R2 verdicts). Work stopped there: episodes 3-10 have fact sheets only.
- User then asked for all scripts and prompts in a doc. Readings: the arena stays ended; Delta uses the R2 finalist with the higher score; episodes 3-10 are written directly from their fact sheets and polished by hand (timing, spoken, in-world passes). Build prompts are written by one sub-agent each, which also runs the reviewer checklist on its own file; the separate fact-check wave (Step 3) and reviewer wave were skipped to deliver sooner.
- Doc: https://claude.ai/artifact/2d3fTM6EkGcBxCDq3DtbkT (scripts in; build prompts copied in as each finishes).
- A usage limit stopped 8 build-prompt writers at about 08:52 UTC; they were resumed after it reset at 10:50 UTC.
