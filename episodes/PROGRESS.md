# Markup — 10 Shorts progress

Steps: facts → baseline → arena → polished → checked → build prompt → reviewed → done

| # | id | series | step reached | note |
|---|----|--------|--------------|------|
| 1 | costco | Markup | arena | round 1 done: 4 of 8 left; round 2 done: 2 left |
| 2 | delta | Markup | facts | |
| 3 | popcorn | Markup | facts | |
| 4 | card-rewards | Markup | facts | |
| 5 | mcdonalds | Markup | facts | |
| 6 | blockbuster | Billion-Dollar Mistakes, ep 6 | facts | |
| 7 | diamonds | Markup | facts | |
| 8 | gyms | Markup | facts | |
| 9 | eyeglasses | Markup | facts | |
| 10 | printer-ink | Markup | facts | |

## Session log
- Session started 2026-10-23 on branch claude/serene-faraday-lavdgr. Web search, web fetch and sub-agents available. Arena skill found (bracket.py), used as ARENA.

## Assumptions and readings
- Repo is the user's landing-page repo; episodes/ lives at its root alongside the site files, which are untouched.
- Step 1 done: all 10 facts.md written, each with at least 10 labelled facts and URLs. Costco: FY2026 results (Sept 24, 2026) used instead of FY2025.
- yt-script skill loaded, but its hookscore.py and hooks.json are missing from the skill folder; its five-hooks method is applied by hand.
- Arena runs share .arena/LATEST, so episodes run strictly one at a time.
