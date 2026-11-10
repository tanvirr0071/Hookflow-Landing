# Oakley Sued Ray-Ban's Owner. Then It Got Bought.

- **Title:** Oakley Sued Ray-Ban's Owner. Then It Got Bought.
- **Hook text (frame 0):** OAKLEY VS. RAY-BAN’S OWNER
- **Series:** Markup
- **Runtime:** 105 spoken words, about 38 seconds at 165 words per minute
- **Version:** v2 (rewritten Nov 10 for retention; v1 is in git history)

## What changed and why

- **Hook:** v1 opened on a list ("Ray-Ban, Oakley and Sunglass Hut: one company"). v2 opens on the fight, which was v1's best material and was buried at second 25.
- **Seconds 3 to 15:** this is now the whole Oakley story in order: the store chain is bought, Oakley is cut back, Oakley sues, Oakley is bought. In v1 this stretch was a revenue figure and a list of acquisitions with dates.
- **Middle and end:** the brand list comes after the story and is three quick reveals. Cut the "20 times" markup claim (a 2012 TV line, the weakest fact in v1) and the AI-glasses figure. 105 words instead of 137.

## Voiceover

| # | VO line | In-world text |
|---|---------|---------------|
| 01 | Oakley once sued the company behind Ray-Ban. | `OAKLEY VS. RAY-BAN’S OWNER` · `OAKLEY` · `LUXOTTICA` |
| 02 | Six years later, that company owned Oakley. | `2001` · `2007` · `OWNED BY LUXOTTICA` |
| 03 | Here's how. | (no new text) |
| 04 | In 2001, Luxottica bought Sunglass Hut. | `SUNGLASS HUT` · `BOUGHT BY LUXOTTICA · 2001` |
| 05 | Then those stores cut back on Oakley. | `OAKLEY` |
| 06 | Oakley sued. The two settled. | `LAWSUIT · 2001` · `SETTLED` |
| 07 | In 2007, Luxottica bought Oakley. | `SOLD · 2007` |
| 08 | About $2.1 billion. | `≈ $2.1 BILLION` |
| 09 | Its CEO said they "understood that life was better together." | `“LIFE WAS BETTER TOGETHER.”` · `— ANDREA GUERRA, LUXOTTICA CEO, 60 MINUTES, 2012` |
| 10 | And it didn't stop at sunglasses. | (no new text) |
| 11 | The same group runs LensCrafters and Pearle Vision. | `LENSCRAFTERS` · `PEARLE VISION` |
| 12 | It runs Target Optical under a license. | `TARGET OPTICAL` · `UNDER LICENSE` |
| 13 | It even runs a vision plan, EyeMed. | `EYEMED · VISION PLAN` |
| 14 | Last year: about €28.5 billion. | `ESSILORLUXOTTICA` · `≈ €28.5 BILLION` · `2025 REVENUE · LUXOTTICA + ESSILOR SINCE 2018` |
| 15 | So the glasses, the store, even the insurance. | `SAME OWNER` |
| 16 | One company. | `OAKLEY VS. RAY-BAN’S OWNER` |

## ElevenLabs script

```text
Oakley once sued the company behind Ray-Ban. Six years later, that company owned Oakley. Here's how.

In two thousand one, Luxottica bought Sunglass Hut. Then those stores cut back on Oakley. Oakley sued. The two settled. In two thousand seven, Luxottica bought Oakley. About two point one billion dollars. Its CEO said they "understood that life was better together."

And it didn't stop at sunglasses. The same group runs LensCrafters and Pearle Vision. It runs Target Optical under a license. It even runs a vision plan, EyeMed.

Last year: about twenty-eight point five billion euros. So the glasses, the store, even the insurance. One company.
```

Pronunciation: Luxottica = lux-OTT-ih-kuh · Pearle = PURL · EyeMed = EYE-med.

## Edit notes (Premiere)

- **Music:** Tight, percussive, a courtroom-drama feel around 105 BPM. One hit on the gavel in shot 01 and again in shot 06.
- **Sound effects:** gavel hit, bulb scoreboard hum, calendar flip, tag string pulled tight, shop sign buzzing on, frames lifted off pegs, envelope slap, rubber stamp thud, price tag flick, card sliding on a desk, strings pulling taut. Exact frames are in `out/eyeglasses/sfx-cues.csv` after the build.
- **Start and end:** the voice starts on frame 0 with no lead-in. End the export on the last word with no outro, so it loops into the first line.
- **Cover:** use `out/eyeglasses/cover.png` (frame 0).
- **Re-check before posting:** Revenue is fiscal 2025; fiscal 2026 results are due around February 2027. The company's share price has been volatile, so do not add it.

## Sources

- EssilorLuxottica FY2025 results release (via Santé Log): https://www.santelog.com/actualites-sante-nasdaq/essilorluxottica-q4fy-2025-results-revenue-growing-184-q4-and-112-fy-adj
- BioSpace copy of the FY2025 release (7 million AI glasses): https://www.biospace.com/press-releases/essilorluxottica-q4-fy-2025-results-revenue-growing-18-4-in-q4-and-11-2-in-the-fy-adj-operating-margin-at-16-0-in-the-fy
- EssilorLuxottica release, Sept 9, 2026 (brands and retailers): https://www.webdisclosure.com/press-release/essilorluxottica-essilorluxottica-board-of-directors-unanimously-reaffirms-confidence-in-the-companys-leadership-and-strategy-oVfQnl9RHEZ
- Target Optical licence renewal (AMF archive): https://echanges.dila.gouv.fr/OPENDATA/AMF/MKW/2023/02/FCMKW114175_20230222.pdf
- Luxottica 2007 Form 20-F (LensCrafters 1995, Sunglass Hut 2001, Cole National with Pearle Vision and EyeMed 2004): https://www.sec.gov/Archives/edgar/data/0000857471/000110465908042281/a08-16211_120f.htm
- Luxottica–Oakley merger release, SEC 8-K exhibit (2007): https://www.sec.gov/Archives/edgar/data/0000946356/000095013407013866/a31406exv99w2.htm
- Orange County Business Journal, Oakley dispute and lawsuit: https://www.ocbj.com/news/onetime-rival-oakley-selling-for-21b-to-luxottica/
- CBS 60 Minutes, Sticker Shock (2012): https://www.cbsnews.com/news/luxottica-eyewear-why-are-glasses-expensive/
