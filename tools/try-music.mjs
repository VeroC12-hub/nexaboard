/**
 * Can this account make music, and what does it cost?
 *
 * A capability check, not a feature. ElevenLabs has a music endpoint as well
 * as a speech one, and the key in `.env` may or may not reach it depending on
 * the plan. Guessing either way wastes an afternoon, so this asks.
 *
 * It prints what the plan allows, and only generates audio when asked to:
 *
 *   node tools/try-music.mjs            what the account can do, costs nothing
 *   node tools/try-music.mjs --make     render one short test clip
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

/** Read `.env` without a dependency. Existing environment variables win. */
function loadEnv() {
  const file = path.join(root, '.env')
  if (!fs.existsSync(file)) return
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/)
    if (!m) continue
    if (process.env[m[1]] === undefined) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
    }
  }
}
loadEnv()

const KEY = process.env.ELEVENLABS_API_KEY
if (!KEY) {
  console.error('ELEVENLABS_API_KEY is not set.')
  process.exit(1)
}

const head = { 'xi-api-key': KEY }

/* ── what the plan allows ───────────────────────────────────────────────── */

const sub = await fetch('https://api.elevenlabs.io/v1/user/subscription', { headers: head })
if (!sub.ok) {
  console.error(`subscription: ${sub.status} ${(await sub.text()).slice(0, 200)}`)
  process.exit(1)
}
const plan = await sub.json()
console.log(`plan: ${plan.tier}`)
console.log(`credits: ${plan.character_count} used of ${plan.character_limit}`)
console.log(`left: ${plan.character_limit - plan.character_count}`)

/* ── does the music endpoint answer at all ──────────────────────────────── */

if (!process.argv.includes('--make')) {
  console.log('\nRun with --make to try generating ten seconds of music.')
  process.exit(0)
}

const PROMPT = [
  'An upbeat, bouncy nursery counting song for four year olds.',
  'Bright marimba and xylophone melody, a simple kick and clap beat,',
  'warm bass, happy and playful, major key, about 110 beats per minute.',
  'Cheerful and simple enough to count along to. No vocals.',
].join(' ')

const res = await fetch('https://api.elevenlabs.io/v1/music', {
  method: 'POST',
  headers: { ...head, 'content-type': 'application/json' },
  body: JSON.stringify({ prompt: PROMPT, music_length_ms: 10000 }),
})

if (!res.ok) {
  console.error(`\nmusic: ${res.status}`)
  console.error((await res.text()).slice(0, 600))
  process.exit(2)
}

const dir = path.join(root, 'public', 'ananse', 'music')
fs.mkdirSync(dir, { recursive: true })
const file = path.join(dir, 'test-clip.mp3')
fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()))
console.log(`\nwrote ${path.relative(root, file)}, ${(fs.statSync(file).size / 1024).toFixed(0)} KB`)
