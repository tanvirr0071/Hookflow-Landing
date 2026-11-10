# HP's Ex-CEO Called Some Customers "a Bad Investment"

- **Title:** HP's Ex-CEO Called Some Customers "a Bad Investment"
- **Hook text (frame 0):** SKIP HP INK? “A BAD INVESTMENT”
- **Series:** Markup
- **Runtime:** 114 spoken words, about 41 seconds at 165 words per minute
- **Version:** v2 (rewritten Nov 10 for retention; v1 is in git history)

## What changed and why

- **Hook:** kept the quote, which is the strongest opening of the seven, and fixed it: Lores left HP in February 2026, so he is now "HP's former CEO". Frame 0 shows the quote coming out of the printer.
- **Seconds 3 to 15:** the second quote ("We lose money on the hardware") moves up to second 7, straight after the hook. In v1 it sat behind three revenue figures.
- **Middle and end:** one question at about 20 seconds ("So what does ink really cost?") and two answers. Cut the "one in four customers" line and the PC-profit comparison, which was a second topic. 114 words instead of 144.

## Voiceover

| # | VO line | In-world text |
|---|---------|---------------|
| 01 | HP's former CEO called some customers "a bad investment." | `SKIP HP INK?` · `“A BAD INVESTMENT”` · `— ENRIQUE LORES, THEN HP CEO, CNBC, JAN 2024` |
| 02 | Which ones? The ones who skip HP ink. | `HP INK` · `OTHER INK` |
| 03 | He explained the business himself. | `HP CEO · 2024` |
| 04 | "We lose money on the hardware, | `“WE LOSE MONEY ON THE HARDWARE,` |
| 05 | we make money on the supplies." | `WE MAKE MONEY ON THE SUPPLIES.”` · `— ENRIQUE LORES, 2024, VIA THE REGISTER` |
| 06 | Last year HP sold ink and toner | `INK & TONER` · `HP SUPPLIES · FISCAL 2025` |
| 07 | worth $10.9 billion. | `$10.9 BILLION` |
| 08 | Home printers? $1.15 billion. | `$1.15 BILLION` · `HOME PRINTERS` |
| 09 | So what does ink really cost? | `PER OUNCE?` |
| 10 | In 2018, Consumer Reports priced one HP cartridge | `CONSUMER REPORTS · 2018` |
| 11 | at $93 an ounce. | `$93 / OUNCE` · `HP 64XL BLACK` |
| 12 | A British test found one Epson ink set | `EPSON INK SET` · `WHICH? · UK · 2022` |
| 13 | cost over seven times Dom Pérignon. | `DOM PÉRIGNON` · `7× PER MILLILITRE` · `UK PRICES` |
| 14 | Print rarely, and half may never reach the page. | `HALF OR LESS ON THE PAGE` · `CONSUMER REPORTS, 2018 · OCCASIONAL PRINTING` |
| 15 | The long-term goal? "Make printing a subscription." | `“MAKE PRINTING A SUBSCRIPTION”` · `— ENRIQUE LORES, CNBC, JAN 2024` |
| 16 | The printer is the bait. The ink is the business. | `BAIT` · `THE BUSINESS` · `SKIP HP INK?` · `“A BAD INVESTMENT”` |

## ElevenLabs script

```text
HP's former CEO called some customers "a bad investment." Which ones? The ones who skip HP ink.

He explained the business himself. "We lose money on the hardware, we make money on the supplies."

Last year HP sold ink and toner worth ten point nine billion dollars. Home printers? One point one five billion.

So what does ink really cost? In twenty eighteen, Consumer Reports priced one HP cartridge at ninety-three dollars an ounce. A British test found one Epson ink set cost over seven times Dom Pérignon. Print rarely, and half may never reach the page.

The long-term goal? "Make printing a subscription." The printer is the bait. The ink is the business.
```

Pronunciation: Dom Pérignon = dom PEH-ree-nyon · Epson = EP-son.

## Edit notes (Premiere)

- **Music:** Dry, slightly mischievous, around 100 BPM. Leave a gap of silence for the single drop in shot 09.
- **Sound effects:** inkjet carriage and page feed, status-light beep, spotlight clunk, microphone tap, scale creak, coins leaking and pouring, conveyor hum, LED counter locking, single drop into glass, magazine slide, price tag flick, bottle set down on wood, drip onto a pad, calendar click. Exact frames are in `out/printer-ink/sfx-cues.csv` after the build.
- **Start and end:** the voice starts on frame 0 with no lead-in. End the export on the last word with no outro, so it loops into the first line.
- **Cover:** use `out/printer-ink/cover.png` (frame 0).
- **Re-check before posting:** HP's fiscal 2026 results are due in late November 2026 and will replace the $10.9 billion and $1.15 billion figures. HP named Emma Walmsley as its next CEO on Nov 4, 2026, so "former CEO" for Enrique Lores is right.

## Sources

- HP FY2025 Form 10-K (printing and supplies revenue, segment profit, "high margin" cartridges): https://www.sec.gov/Archives/edgar/data/47217/000004721725000071/hpq-20251031.htm
- Which? (Sept 2022), ink up to seven times Dom Pérignon: https://www.which.co.uk/policy-and-insight/article/which-calls-for-action-over-printer-inks-costing-up-to-seven-times-more-than-dom-perignon-champagne-aeHrW6g7B3vb
- Consumer Reports (2018), the high cost of wasted printer ink: https://www.consumerreports.org/printers/the-high-cost-of-wasted-printer-ink
- The Register (Jan 2024), Lores on CNBC ("a bad investment"): https://www.theregister.com/2024/01/19/hps_ceo_spells_it_out/
- PCWorld (Jan 2024), "make printing a subscription": https://www.pcworld.com/article/2216875/hp-ceo-says-the-quiet-part-out-loud-make-printing-a-subscription.html
- The Register (Mar 2025), "We lose money on the hardware": https://www.theregister.com/2025/03/19/hp_printer_lawsuit_settled/
- The Recycler (Dec 2020), losing money on about 25% of customers: https://archive.therecycler.com/?p=402613
- The Register (June 2022), "close to 25 percent of our customers": https://www.theregister.com/2022/06/09/hp_pilots_paper_delivery_service/
