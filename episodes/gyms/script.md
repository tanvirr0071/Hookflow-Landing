# Why Your Gym Has 7,200 Members and Room for 300

- **Title:** Why Your Gym Has 7,200 Members and Room for 300
- **Hook text (frame 0):** 7,200 MEMBERS. ROOM FOR 300.
- **Series:** Markup
- **Runtime:** 107 spoken words, about 39 seconds at 165 words per minute
- **Version:** v2 (rewritten Nov 10 for retention; v1 is in git history)

## What changed and why

- **Hook:** v1 opened on half the conflict ("averages about 7,200 members a gym"). v2 puts both halves in the first three seconds, 7,200 members against room for 300, the same "X versus Y" shape as your best opener (Juicero).
- **Seconds 3 to 15:** the question ("what if everybody showed up?") comes at second 5, then the manager's line. In v1 the question came after two source-heavy sentences.
- **Middle and end:** cut the $15 starting price, the $49 fee and the 90% recurring-revenue line, which were a list. Kept the two facts that explain the trick: people keep paying after they stop going, and most are on the dearer plan. The NPR line is the payoff and the last thing said. 107 words instead of 141.

## Voiceover

| # | VO line | In-world text |
|---|---------|---------------|
| 01 | 7,200 members. Room for about 300. | `7,200 MEMBERS.` · `ROOM FOR 300.` · `AVERAGE · 20.8M MEMBERS ÷ 2,896 CLUBS · 2025` · `NPR, 2014` |
| 02 | That's Planet Fitness, on average. | `PLANET FITNESS` · `AVERAGE PER GYM` |
| 03 | So what if everybody showed up? | `EVERYBODY?` |
| 04 | One manager told NPR, | `CLUB MANAGER · MANHATTAN` |
| 05 | "Thank goodness they all don't show up at one time." | `“THANK GOODNESS THEY ALL` · `DON’T SHOW UP AT ONE TIME.”` · `— CHRYSANTHI LASKARIS, TO NPR, 2014` |
| 06 | And mostly, they don't. | `NO ONE` |
| 07 | CNN reported about 60% | `≈ 60%` · `CNN, 2022` |
| 08 | skip the gym for a whole month. | `NO VISIT IN 30 DAYS` |
| 09 | An analyst explained the low price. | `$10 A MONTH` · `THE CLASSIC PRICE, 1998–2024` |
| 10 | It's too cheap to bother cancelling. | `CANCEL?` · `PER A BMO ANALYST, VIA CNN, 2022` |
| 11 | One study tracked 7,000 gym members. | `7,752 GYM MEMBERS` · `DELLAVIGNA & MALMENDIER · AER, 2006 · OTHER U.S. CLUBS` |
| 12 | They kept paying two months after their last workout. | `DUES PAID` · `2.31 MONTHS AFTER LAST VISIT` |
| 13 | And most don't even pay the cheap price. | `66.5% OF MEMBERS` |
| 14 | Two-thirds pay about $25 a month. | `$24.99 / MONTH` |
| 15 | As NPR put it, the people who don't go | `DON’T GO` |
| 16 | pay for the people who do. | `PAY FOR THOSE WHO DO` · `NPR PLANET MONEY, 2014` · `7,200 MEMBERS.` · `ROOM FOR 300.` |

## ElevenLabs script

```text
Seventy-two hundred members. Room for about three hundred. That's Planet Fitness, on average. So what if everybody showed up?

One manager told NPR, "Thank goodness they all don't show up at one time." And mostly, they don't. CNN reported about sixty percent skip the gym for a whole month.

An analyst explained the low price. It's too cheap to bother cancelling. One study tracked seven thousand gym members. They kept paying two months after their last workout.

And most don't even pay the cheap price. Two-thirds pay about twenty-five dollars a month.

As NPR put it, the people who don't go pay for the people who do.
```

Pronunciation: NPR = N-P-R · CNN = C-N-N.

## Edit notes (Premiere)

- **Music:** Bright, bouncy and a little ironic, around 110 BPM. Drop to just a beat under the manager's quote (shot 05).
- **Sound effects:** LED counter ticking and locking, crowd shuffle, turnstile clunk, treadmill belt hum, lightbox bulbs warming up, marker crosses on paper, poster flip, pen rolling off a desk, receipt printer, card stack tap, coins sliding on a table. Exact frames are in `out/gyms/sfx-cues.csv` after the build.
- **Start and end:** the voice starts on frame 0 with no lead-in. End the export on the last word with no outro, so it loops into the first line.
- **Cover:** use `out/gyms/cover.png` (frame 0).
- **Re-check before posting:** Member and club counts are year-end 2025. Planet Fitness prices and member totals may have moved in its latest quarterly results; the on-screen tags already carry their years.

## Sources

- Planet Fitness FY2025 Form 10-K (members, clubs, prices, Black Card share, recurring revenue, EFT): https://www.sec.gov/Archives/edgar/data/1637207/000163720726000011/plnt-20251231.htm
- Planet Fitness Q4 and FY2025 results: https://www.sec.gov/Archives/edgar/data/1637207/000163720726000009/plntq42025pressreleaseex991.htm
- NPR Planet Money, Why We Sign Up For Gym Memberships (2014), text version: https://text.npr.org/373996649 · original: https://www.npr.org/sections/money/2014/12/30/373996649/why-we-sign-up-for-gym-memberships
- CNN (2022) via WTOP, why Planet Fitness kept $10: https://wtop.com/business-finance/2022/11/why-planet-fitness-hasnt-raised-its-10-monthly-gym-price-in-30-years/
- CNN (2024) via ABC17, first price rise to $15: https://abc17news.com/money/cnn-business-consumer/2024/05/09/planet-fitness-will-raise-its-10-membership-plan-for-the-first-time-in-26-years/
- DellaVigna and Malmendier, Paying Not to Go to the Gym (AER, 2006): https://eml.berkeley.edu/~ulrike/Papers/gym.pdf
