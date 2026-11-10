# Markup — 10 Shorts progress

Steps: facts → baseline → arena → polished → checked → build prompt → reviewed → done

| # | id | series | step reached | note |
|---|----|--------|--------------|------|
| 1 | costco | Markup | build prompt | arena done (winner 86 vs baseline 51); polished; build prompt written and self-reviewed; independent fact-check and reviewer pass not run |
| 2 | delta | Markup | build prompt | arena stopped after R2 by request; used the higher-scoring R2 finalist (a008, 92–87.5), polished; build prompt written and self-reviewed |
| 3 | popcorn | Markup | build prompt | written directly from facts (no arena, by request); build prompt self-reviewed |
| 4 | card-rewards | Markup | v2 script + v2 build prompt | rewritten Nov 10 from retention data; v1 in git history; not independently fact-checked |
| 5 | mcdonalds | Markup | v2 script + v2 build prompt | rewritten Nov 10 from retention data; v1 in git history; not independently fact-checked |
| 6 | blockbuster | Billion-Dollar Mistakes, ep 6 | v2 script + v2 build prompt | rewritten Nov 10 from retention data; v1 in git history; not independently fact-checked |
| 7 | diamonds | Markup | v2 script + v2 build prompt | rewritten Nov 10 from retention data; v1 in git history; not independently fact-checked |
| 8 | gyms | Markup | v2 script + v2 build prompt | rewritten Nov 10 from retention data; v1 in git history; not independently fact-checked |
| 9 | eyeglasses | Markup | v2 script + v2 build prompt | rewritten Nov 10 from retention data; v1 in git history; not independently fact-checked |
| 10 | printer-ink | Markup | v2 script + v2 build prompt | rewritten Nov 10 from retention data; v1 in git history; not independently fact-checked |

## Session log
- Session started 2026-10-23 on branch claude/serene-faraday-lavdgr. Web search, web fetch and sub-agents available. Arena skill found (bracket.py), used as ARENA.

## Assumptions and readings
- Repo is the user's landing-page repo; episodes/ lives at its root alongside the site files, which are untouched.
- Step 1 done: all 10 facts.md written, each with at least 10 labelled facts and URLs. Costco: FY2026 results (Sept 24, 2026) used instead of FY2025.
- yt-script skill loaded, but its hookscore.py and hooks.json are missing from the skill folder; its five-hooks method is applied by hand.
- Arena runs share .arena/LATEST, so episodes run strictly one at a time.
- User asked to end the arena during Delta round 2 (after the R2 verdicts). Work stopped there: episodes 3-10 have fact sheets only.
- User then asked for all scripts and prompts in a doc. Readings: the arena stays ended; Delta uses the R2 finalist with the higher score; episodes 3-10 are written directly from their fact sheets and polished by hand (timing, spoken, in-world passes). Build prompts are written by one sub-agent each, which also runs the reviewer checklist on its own file; the separate fact-check wave (Step 3) and reviewer wave were skipped to deliver sooner.
- Doc: https://claude.ai/artifact/2d3fTM6EkGcBxCDq3DtbkT now holds all 10 scripts, ElevenLabs text, sources and full build prompts (each prompt split into 4-5 parts because of the doc's size limit).
- A usage limit stopped 8 build-prompt writers at about 08:52 UTC; they were resumed after it reset at 10:50 UTC.
- A second usage limit paused the doc copy until 15:50 UTC; all 10 build prompts were then copied in and read back.
- Not run: Step 3 independent fact-check wave and the separate Step 4 reviewer wave.
- Nov 10: user reported weak results after posting and asked for better retention and better animation prompts for the remaining scripts, in doc tabs. Pulled channel analytics through vidIQ (6 Shorts, 2,590 views) and had two Shorts reviewed frame by frame.
- Findings: 54-66% swipe before an engaged view; engaged viewers drop mostly between seconds 5 and 15, then hold; long endings leak; about 33 s average view duration at any length; human puppet rigs, small text and flat scenes are the visual faults. The upload titled as popcorn (fi1eUIt-_8I) plays the Quibi video.
- v2 decisions: scripts 4-10 cut to 105-122 words, conflict-first hook, a story or mechanism instead of stacked statistics in seconds 3-15, short endings. Animation moves to a shared house style (tabletop miniature, real 3D with @remotion/three, no articulated humans, large type) in episodes/_house-style-v2-prompt.txt, with short per-episode prompts generated from one data file each so the in-world copy matches the script by construction.
- Readings: "remaining" means episodes 4-10 (1-3 are already built). v2 runs 38-45 s, below the old 45-55 s target, because average view duration is about 33 s whatever the length. The v2 look has not been test-rendered here; card-rewards is the test episode.
- Fact refresh on Nov 10: De Beers still unsold; HP named Emma Walmsley CEO from Jan 4, 2027 (Lores is "former CEO"); the Bend Blockbuster had no closure report.
- Doc restructured on Nov 10: main tab holds the findings and episodes 1-3 (v1); a 'v2 · House style' tab holds the shared prompt; episodes 4-10 each have their own sub-tab with script, ElevenLabs text, edit notes, sources and v2 build prompt. The v1 sections for 4-10 were removed from the main tab (kept in git and doc history).
