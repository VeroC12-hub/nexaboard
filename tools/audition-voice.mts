/**
 * Hearing several voices say the same lines, before committing to one.
 *
 * ── Why this exists ──────────────────────────────────────────────────────────
 *
 * Choosing a voice from a name and a list of adjectives is guessing. "Husky
 * Trickster" and "Warm, Captivating Storyteller" both sound right for Ananse
 * on paper, and only one of them will sound right coming out of a phone to a
 * five year old who is being told to put four mangoes back.
 *
 * So it renders the same three lines in each candidate and builds a page to
 * play them side by side. The lines are chosen to cover his range: an
 * instruction, a joke, and being told off.
 *
 * It is cheap on purpose. Three short lines across four voices is a few
 * hundred characters, against a free allowance of ten thousand a month, so
 * auditioning costs effectively nothing and can be repeated whenever the
 * shortlist changes.
 *
 *   npm run voice:audition
 *
 * Then open /ananse/audition/index.html, listen, and put the winning id
 * into ELEVENLABS_VOICE_ID.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(HERE, '..')
const OUT = path.join(ROOT, 'public', 'ananse', 'audition')

function loadEnv(file: string): void {
  if (!fs.existsSync(file)) return
  for (const raw of fs.readFileSync(file, 'utf8').split('\n')) {
    const line = raw.trim()
    if (!line || line.startsWith('#')) continue
    const at = line.indexOf('=')
    if (at < 1) continue
    const key = line.slice(0, at).trim()
    let value = line.slice(at + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"'))
      || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1)
    if (process.env[key] === undefined) process.env[key] = value
  }
}
loadEnv(path.join(ROOT, '.env'))

const KEY = process.env.ELEVENLABS_API_KEY
if (!KEY) { console.error('ELEVENLABS_API_KEY is not set.'); process.exit(1) }

/**
 * The shortlist.
 *
 * Drawn from the stock voices on the account. Two things were weighed: whether
 * the voice can play a trickster, and whether it sounds plausible to a
 * Ghanaian ear. Ghanaian English follows British convention, so the British
 * voices start with an advantage that the character tags do not show.
 *
 * None of these is Ghanaian. That is the honest limit of the stock library and
 * the reason to listen rather than to read the labels.
 */
const CANDIDATES = [
  { id: 'N2lVS1w4EtoT3dr4eOWO', name: 'Callum', note: 'Husky trickster, built for animation. American.' },
  { id: 'JBFqnCBsd6RMkjVDRZzb', name: 'George', note: 'Warm storyteller. British, which matches Ghanaian convention.' },
  { id: 'IKne3meq5aSn9XLyUdCD', name: 'Charlie', note: 'Energetic and hyped. Australian.' },
  { id: 'cgSgspJ2msm6clMCkdW9', name: 'Jessica', note: 'Playful, bright, warm. Young female, American.' },
]

/** His range: an instruction, a joke, and being caught. */
const LINES = [
  { slug: 'ask', text: 'Ananse ate the mangoes! Put 4 mangoes back, quick!' },
  { slug: 'greedy', text: 'Sorry! I am so hungry.' },
  { slug: 'caught', text: 'That is not enough. She wanted 3 mangoes.' },
]

fs.mkdirSync(OUT, { recursive: true })

const chars = LINES.reduce((n, l) => n + l.text.length, 0) * CANDIDATES.length
console.log(`${CANDIDATES.length} voices x ${LINES.length} lines = about ${chars} credits`)

for (const voice of CANDIDATES) {
  for (const line of LINES) {
    const file = path.join(OUT, `${voice.name.toLowerCase()}-${line.slug}.mp3`)
    if (fs.existsSync(file) && fs.statSync(file).size > 400) { continue }
    const res = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voice.id}?output_format=mp3_22050_32`,
      {
        method: 'POST',
        headers: { 'xi-api-key': KEY, 'content-type': 'application/json' },
        body: JSON.stringify({
          text: line.text,
          model_id: 'eleven_multilingual_v2',
          /* The same settings the real bake uses, or the audition is not an
             audition: a voice judged on different settings than it will ship
             with tells you nothing. */
          voice_settings: {
            stability: 0.42,
            similarity_boost: 0.8,
            style: 0.35,
            use_speaker_boost: true,
          },
        }),
      })
    if (!res.ok) {
      console.error(`  ${voice.name}/${line.slug}: ${res.status} ${(await res.text()).slice(0, 140)}`)
      continue
    }
    fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()))
    console.log(`  ${voice.name.padEnd(9)} ${line.slug.padEnd(7)} ${(fs.statSync(file).size / 1024).toFixed(1)} KB`)
  }
}

/* A page to play them from, because comparing four voices by opening twelve
   files in a media player is how you end up choosing the last one you heard. */
const rows = CANDIDATES.map(v => `
    <section>
      <h2>${v.name}</h2>
      <p class="note">${v.note}</p>
      <code>${v.id}</code>
      ${LINES.map(l => `
      <div class="line">
        <span>${l.text}</span>
        <audio controls preload="none" src="${v.name.toLowerCase()}-${l.slug}.mp3"></audio>
      </div>`).join('')}
    </section>`).join('')

fs.writeFileSync(path.join(OUT, 'index.html'), `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Which voice is Ananse?</title>
<style>
  body { margin:0; padding:24px; background:#fff3dc; color:#2b1c0e;
         font-family: ui-rounded, 'Segoe UI', system-ui, sans-serif; }
  h1 { font-size:22px; margin:0 0 4px; }
  .lede { opacity:.65; margin:0 0 24px; max-width:60ch; line-height:1.5; }
  section { background:#fff; border-radius:16px; padding:16px 18px; margin-bottom:16px;
            box-shadow:0 1px 0 rgba(43,28,14,.12); max-width:70ch; }
  h2 { margin:0 0 2px; font-size:19px; }
  .note { margin:0 0 6px; opacity:.6; font-size:14px; }
  code { font-size:12px; opacity:.45; }
  .line { display:flex; flex-direction:column; gap:6px; margin-top:14px; }
  .line span { font-size:15px; }
  audio { width:100%; max-width:420px; }
</style></head>
<body>
  <h1>Which voice is Ananse?</h1>
  <p class="lede">The same three lines in every voice: an instruction, a joke,
  and being caught out. Play them to the children rather than deciding by ear
  yourself. Put the winning id into <code>ELEVENLABS_VOICE_ID</code>.</p>
  ${rows}
</body></html>`, 'utf8')

/* The explicit file, not the directory: the dev server hands a bare
   directory path to the app's router, which spins for ever. */
console.log('\nListen at http://localhost:5173/ananse/audition/index.html')
