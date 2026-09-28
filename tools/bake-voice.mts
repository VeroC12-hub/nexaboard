/**
 * Baking every line the games can say into audio files.
 *
 * ── Why bake at all ──────────────────────────────────────────────────────────
 *
 * The games speak through the browser's own speech synthesis. That is free and
 * needs nothing installed, and it has two faults that matter for children:
 * the voice belongs to the device, so the app sounds different on every phone
 * and flat or American on most cheap ones, and a fair number of Android
 * browsers have no English voice at all and say nothing. For a child who
 * cannot read, saying nothing is the whole product failing.
 *
 * So the lines are rendered once, here, with Piper, and shipped as audio. One
 * voice everywhere, works with no network, and costs nothing per use. The
 * device voice stays as the fallback for anything not baked, which is what
 * makes it safe to bake only part of the language.
 *
 * ── Why whole sentences ──────────────────────────────────────────────────────
 *
 * The obvious saving is to bake words and glue them: "Put" + "four" +
 * "apples in the basket". It is also the obvious mistake. Speech carries its
 * meaning in the shape of the whole phrase, and three clips joined end to end
 * have three separate shapes: it comes out as a ransom note, and a four year
 * old who is already struggling to follow gets less from it than from a flat
 * robot reading it properly.
 *
 * Whole sentences cost more files. Sentences are the unit.
 *
 * ── Why the list comes from the costumes ─────────────────────────────────────
 *
 * "Put N mangoes in the basket" over every object and every number is a few
 * thousand files. But a game only ever names the objects its own costume put
 * in it, so the set is enumerated from the costume registry and the small
 * shared pool, and it grows with the games that exist rather than with the
 * games that could exist. Anything missed falls back to the device voice.
 *
 * ── Running it ───────────────────────────────────────────────────────────────
 *
 *   npm run voice:bake -- --dry               what it would cost, changes nothing
 *   npm run voice:bake -- --voices            who is available on the account
 *   npm run voice:bake -- --scope=ananse      one game only, about 1,700 characters
 *   npm run voice:bake                        everything, about 19,000 characters
 *
 * Settings come from the environment, or from a git-ignored `.env`:
 *
 *   ELEVENLABS_API_KEY=...     turns on the paid voice. Never committed.
 *   ELEVENLABS_VOICE_ID=...    which voice. Find one with --voices.
 *   PIPER_BIN=...              the free fallback, used when no key is set.
 *   PIPER_VOICE=...
 *
 * Content addressed, and the *voice* is part of the address. A line already
 * rendered is skipped; change the voice and every line is rendered again,
 * which is the only correct behaviour: without it, switching provider would
 * report six hundred lines already done while the app kept playing the old
 * voice.
 *
 * A scoped run merges into the existing index and never sweeps, so rebuilding
 * one game cannot delete the rest of the bank. Only a full run sweeps.
 *
 * Committing the output is deliberate: a build should not need any of this.
 */

import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import ffmpeg from 'ffmpeg-static'

import { allCostumes } from '../src/lib/education/costumes'
import { THINGS } from '../src/lib/education/games'
import '../src/lib/education/library/games'

/**
 * Read `.env` if there is one, without a dependency.
 *
 * So the API key can live in a git-ignored file rather than being typed into
 * a shell every time, and so it never has to be pasted anywhere it might be
 * seen. Existing environment variables always win, which is what makes a
 * one-off override possible.
 */
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

const HERE = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(HERE, '..')
const OUT = path.join(ROOT, 'public', 'games', 'voice')

loadEnv(path.join(ROOT, '.env'))

const PIPER = process.env.PIPER_BIN
const VOICE = process.env.PIPER_VOICE

/**
 * Who does the speaking.
 *
 * ── Why there are two ─────────────────────────────────────────────────────
 *
 * Piper is free, offline and open source, and it is a text-to-speech engine.
 * It pronounces things. It does not act, and the difference matters more here
 * than anywhere else in the product: children were shown the game with a Piper
 * voice and disliked it specifically. A character read aloud by a synthesiser
 * is not a character.
 *
 * ElevenLabs performs. It costs money, so it is not the default and it is not
 * required: a machine without a key still bakes with Piper and the game still
 * speaks.
 *
 * ── Why the key is only ever an environment variable ──────────────────────
 *
 * It is never asked for, never written down here and never printed. Put it in
 * a `.env` that git ignores, or export it for one command. Nothing in this
 * repository should ever contain it.
 */
const ELEVEN_KEY = process.env.ELEVENLABS_API_KEY
const ELEVEN_VOICE = process.env.ELEVENLABS_VOICE_ID
const PROVIDER = process.env.EDU_VOICE
  || (ELEVEN_KEY && ELEVEN_VOICE ? 'elevenlabs' : 'piper')

/**
 * Which lines to bake.
 *
 * `--scope=ananse` does the one game and nothing else. That is what makes it
 * possible to try a paid voice inside a free allowance: the whole bank is
 * about twenty five thousand characters and the game alone is about two
 * thousand.
 */
const SCOPE = (process.argv.find(a => a.startsWith('--scope=')) || '').split('=')[1] || 'all'

/** Print what it would cost and change nothing. */
const DRY = process.argv.includes('--dry')

/**
 * Stop, without Windows printing an assertion failure over the output.
 *
 * `process.exit` while Node's HTTP agent still holds a keep-alive socket
 * trips a libuv assertion on Windows, so a successful run ends with what
 * looks like a crash underneath its own results. Letting the event loop turn
 * once lets the socket close first. Nothing after this resolves, because the
 * promise never settles: this is the end of the program.
 */
function quit(): Promise<never> {
  return new Promise<never>(() => {
    setTimeout(() => process.exit(0), 60)
  })
}

/**
 * The voice is part of a clip's identity.
 *
 * Without this, switching provider leaves every file exactly where it was:
 * the text has not changed, so the content hash has not changed, and the
 * script cheerfully reports that all six hundred lines are already done while
 * the app keeps playing the old voice. Changing who is speaking has to
 * invalidate everything, and it does.
 */
const VOICE_TAG = PROVIDER === 'elevenlabs'
  ? 'eleven:' + (ELEVEN_VOICE || '')
  : 'piper:' + (VOICE || '').split(/[\/]/).pop()

/**
 * Two ceilings, because the two kinds of line cost very differently.
 *
 * A line that only names a number is one file per number, so reaching 20
 * costs twenty files and covers every stage that plays these games.
 *
 * A line that names a number *and* an object is one file per number per
 * object, so the same reach costs hundreds. It does not need the reach: these
 * are counting games where the things are drawn on screen, and nobody lays out
 * fifty mangoes for a five year old to count. Twelve is past what fits and
 * past what the verb generates.
 *
 * Anything above either ceiling still speaks, in the device voice.
 */
const MAX_NUM = 20
const MAX_THINGS = 12

/** Written out, because "Tap the number 7" should say seven, not "seven dot". */
const phrases = new Set<string>()
let scope = 'shared'
/** Everything added from here on belongs to this scope, until it changes. */
const inScope = (name: string) => { scope = name }
const add = (line: string) => {
  const t = line.trim().replace(/\s+/g, ' ')
  if (!t) return
  /**
   * A scoped run bakes that scope and nothing else.
   *
   * It used to include the shared lines too, on the reasoning that every game
   * needs them. Every *generated* game does; the hand built one says only its
   * own script. Including them made a scoped run nineteen thousand characters
   * instead of two, which is the difference between fitting in a free
   * allowance and not.
   */
  if (SCOPE === 'all' || scope === SCOPE) phrases.add(t)
}

/* ── the fixed lines ───────────────────────────────────────────────────────── */

for (const p of [
  'Yes. Well done.', 'That is right.', 'Good one.', 'Lovely.',
  'You got it.', 'Clever.', 'That is the one.',
]) add(p)

/* Said on their own now, with the explanation as a second sentence, so three
   openers cost three files rather than three times every explanation. */
for (const p of ['Not quite.', 'Nearly.', 'Almost.']) add(p)

add('Three in a row. You are on fire.')
add('Five in a row. Nobody can stop you.')
for (let n = 6; n <= 24; n += 3) add(n + ' in a row.')

for (const p of [
  'Tap the side with more.', 'Tap the side with fewer.',
  'Tap the biggest one.', 'Tap the smallest one.',
  'Put each shape in its own box.', 'Put the big ones and the small ones apart.',
  'Put each one under the sound it starts with.',
  'Find the same shape.', 'How many? Tap the number.',
  'Look at the corners.', 'Big on one side, small on the other.',
  'Count them again.', 'Say the word out loud first.',
  'The biggest was the other one.', 'The smallest was the other one.',
]) add(p)

/* ── the lines that name a number ──────────────────────────────────────────── */

for (let n = 1; n <= MAX_NUM; n++) {
  add(`Tap the number ${n}.`)
  add(`Put the number ${n} in the basket.`)
  add(`That was not ${n}.`)
  add(`It was ${n}.`)
  add(`It needed to be ${n}.`)
  add(`There were ${n}.`)
  add(`It was the one with ${n}.`)
  add(`It was the group with ${n}.`)
  add(`Fewer than ${n} on one side, ${n} or more on the other.`)
  /* "Make it five" when some are already in the basket. Only the counts below
     the target can occur, which halves it, and only up to what fits on a
     board. */
  for (let have = 1; have < Math.min(n, MAX_THINGS); have++) {
    add(have === 1
      ? `There is already 1. Make it ${n}.`
      : `There are already ${have}. Make it ${n}.`)
  }
}

/* ── the lines that name an object ─────────────────────────────────────────── */

/**
 * Every object a game can put on screen: the shared pool the grammar draws
 * from, plus whatever each costume brought with it.
 */
const objects = new Map<string, { one: string, many: string }>()
for (const t of THINGS) objects.set(t.one, { one: t.one, many: t.many })
for (const c of allCostumes()) {
  for (const t of c.things) objects.set(t.one, { one: t.one, many: t.many })
}

for (const o of objects.values()) {
  add(`It was the ${o.one}.`)
  add(`Which letter does ${o.one} start with?`)
  for (let n = 1; n <= MAX_THINGS; n++) {
    const word = n === 1 ? o.one : o.many
    add(`Put ${n} ${word} in the basket.`)
    add(`Tap the group with ${n} ${word}.`)
  }
}

inScope('ananse')

/* ── Feed Ananse ───────────────────────────────────────────────────────────── */

/**
 * The script of the one hand built game.
 *
 * Listed here rather than generated from the costume registry, because this
 * game is not a costume. It has its own script, because it has a story, and a
 * story is the thing the generated games were missing.
 *
 * ── Why these lines and not the last ones ─────────────────────────────────
 *
 * The first version said "Ananse ate the mangoes! Put four mangoes back,
 * quick!". Every word of that is an adult explaining a premise: a child has to
 * work out who ate what, why they are going back, and who is going to mind.
 * It was shown to children and it did not land.
 *
 * These are short, greedy and silly, because he is. The instruction sits
 * inside the joke instead of being announced before it, and the reward for
 * getting it right is him with his mouth full.
 *
 * They matter more than any other lines in the bank. Everywhere else the voice
 * reads an instruction aloud; here it is a character talking, and a character
 * in a phone's default robot voice is not a character.
 */
for (const line of [
  'Yum!', 'Mmm!', 'Tasty!', 'More!', 'Nice!',
  'Yum yum! My tummy is happy!',
  'I am full! Thank you, my friend!',
  'That was delicious!',
  'Oops! I dropped one!',
  'Hee hee! That tickles!',
  'Feed me first! I am starving!',
  'What a feast! Thank you, my friend!',
]) add(line)

for (let n = 1; n <= MAX_THINGS; n++) {
  const word = n === 1 ? 'mango' : 'mangoes'
  add(`Ananse is so hungry! Feed him ${n} ${word}!`)
  add(`Oh! Too many! I only wanted ${n}!`)
  add(`I am still hungry! I wanted ${n}!`)
}

inScope('lesson')

/* ── the lesson videos ─────────────────────────────────────────────────────── */

/**
 * Every line every lesson video says.
 *
 * ── Why the numbers are baked one at a time ───────────────────────────────
 *
 * Everywhere else in this bank the rule is whole sentences, because speech
 * carries its meaning in the shape of the phrase and three clips glued
 * together come out as a ransom note.
 *
 * Counting is the exception, and it is a real one. A counting chant is already
 * discrete: a child says one, pauses, touches the next thing, says two. The
 * pause is not a seam to be hidden, it is the beat the whole exercise runs on,
 * and separate clips are the only way each number can land on the frame its
 * own object arrives.
 *
 * ── Why the lines come from the lesson folders ────────────────────────────
 *
 * Each lesson owns a `lines.json`. Nothing lists them centrally, so two people
 * writing two lessons at once never touch the same file.
 */
{
  const dir = path.join(HERE, '..', 'video', 'ananse', 'lessons')
  if (fs.existsSync(dir)) {
    for (const name of fs.readdirSync(dir)) {
      const file = path.join(dir, name, 'lines.json')
      if (!fs.existsSync(file)) continue
      for (const line of JSON.parse(fs.readFileSync(file, 'utf8')) as string[]) {
        add(line)
      }
    }
  }
}

inScope('shared')

/* ── what each costume says when it opens ──────────────────────────────────── */

for (const c of allCostumes()) add(c.intro)

/* ── render ────────────────────────────────────────────────────────────────── */

/** The file a line lives in. Content addressed, so rewording makes a new file. */
const keyOf = (line: string) =>
  createHash('sha1').update(VOICE_TAG + '::' + line, 'utf8').digest('hex').slice(0, 16)

const lines = [...phrases].sort()
const index: Record<string, string> = {}
for (const line of lines) index[line] = keyOf(line)

/**
 * List the voices on the account, so one can be chosen by ear rather than by
 * guessing an id. Costs nothing: it is a read.
 */
if (process.argv.includes('--voices')) {
  if (!ELEVEN_KEY) { console.error('ELEVENLABS_API_KEY is not set.'); process.exit(1) }
  const res = await fetch('https://api.elevenlabs.io/v1/voices', {
    headers: { 'xi-api-key': ELEVEN_KEY },
  })
  if (!res.ok) {
    console.error(`ElevenLabs ${res.status}: ${(await res.text()).slice(0, 200)}`)
    process.exit(1)
  }
  const data = await res.json() as { voices: Array<Record<string, any>> }
  for (const v of data.voices) {
    const labels = Object.values(v.labels || {}).join(', ')
    console.log(`${String(v.voice_id).padEnd(24)} ${String(v.name).padEnd(18)} ${labels}`)
    if (v.preview_url) console.log(`${' '.repeat(24)} ${v.preview_url}`)
  }
  console.log(`
${data.voices.length} voices. Set ELEVENLABS_VOICE_ID to one of the ids.`)
  await quit()
}

const chars = lines.reduce((n, l) => n + l.length, 0)
console.log(`${lines.length} lines, ${chars} characters, scope "${SCOPE}", via ${PROVIDER}`)

if (PROVIDER === 'elevenlabs') {
  /* Credits are roughly one per character, so this is what the run costs.
     Printed before anything is sent, because finding out afterwards is not
     useful. */
  console.log(`ElevenLabs: about ${chars} credits for a full re-render`)
}

if (DRY) { console.log('Dry run. Nothing written.'); await quit() }

/**
 * Say what is actually wrong.
 *
 * Provider selection falls back to Piper when the ElevenLabs settings are
 * incomplete, which meant somebody who had pasted their key but not yet chosen
 * a voice was told "PIPER_BIN and PIPER_VOICE must be set". That is true and
 * useless: it sends them to configure the thing they were trying not to use.
 * A half configured provider is a mistake to report, not a reason to switch.
 *
 * It tests `EDU_VOICE` rather than `PROVIDER`, because `PROVIDER` is already
 * 'piper' by the time this runs: the missing voice id is the very thing that
 * caused the fallback, so a check against it could never fire. Only somebody
 * who asked for Piper by name should be spared this.
 */
if (ELEVEN_KEY && !ELEVEN_VOICE && process.env.EDU_VOICE !== 'piper') {
  console.error('ELEVENLABS_API_KEY is set but ELEVENLABS_VOICE_ID is empty.')
  console.error('Pick a voice first:')
  console.error('  npm run voice:audition          hear the shortlist')
  console.error('  npm run voice:bake -- --voices  list every voice and its id')
  console.error('then put the id in .env as ELEVENLABS_VOICE_ID.')
  process.exit(1)
}
if (PROVIDER === 'elevenlabs' && !ELEVEN_KEY) {
  console.error('ELEVENLABS_API_KEY is not set.')
  process.exit(1)
}
if (PROVIDER === 'piper' && (!PIPER || !VOICE)) {
  console.error('No voice is configured.')
  console.error('Either set ELEVENLABS_API_KEY and ELEVENLABS_VOICE_ID in .env,')
  console.error('or set PIPER_BIN and PIPER_VOICE to use the free offline voice.')
  process.exit(1)
}

fs.mkdirSync(OUT, { recursive: true })

const tmp = path.join(OUT, '_tmp.wav')

/**
 * One line, spoken, straight to an MP3.
 *
 * ElevenLabs returns MP3 already, so there is nothing to convert: the file
 * goes to disk as it arrives. Piper writes a WAV, which has to be squeezed
 * down or a sentence costs forty kilobytes.
 */
async function render(line: string, mp3: string): Promise<void> {
  if (PROVIDER === 'elevenlabs') {
    const res = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${ELEVEN_VOICE}?output_format=mp3_22050_32`,
      {
        method: 'POST',
        headers: { 'xi-api-key': ELEVEN_KEY!, 'content-type': 'application/json' },
        body: JSON.stringify({
          text: line,
          model_id: process.env.ELEVENLABS_MODEL || 'eleven_multilingual_v2',
          voice_settings: {
            /* Steady enough to be the same character every line, loose enough
               to still be a performance. A trickster read flat is not a
               trickster. */
            stability: 0.42,
            similarity_boost: 0.8,
            style: 0.35,
            use_speaker_boost: true,
          },
        }),
      })
    if (!res.ok) {
      throw new Error(`ElevenLabs ${res.status}: ${(await res.text()).slice(0, 160)}`)
    }
    fs.writeFileSync(mp3, Buffer.from(await res.arrayBuffer()))
    return
  }

  execFileSync(PIPER!, ['--model', VOICE!, '--output_file', tmp], {
    input: line,
    stdio: ['pipe', 'ignore', 'ignore'],
  })
  /**
   * Mono, 22 kHz, 32 kbit. Speech, not music: above this the file grows and
   * nothing about a spoken sentence improves. MP3 rather than Opus because
   * every phone plays MP3 and this has to work on the oldest one in the class.
   */
  execFileSync(ffmpeg as unknown as string, [
    '-y', '-loglevel', 'error', '-i', tmp,
    '-ac', '1', '-ar', '22050', '-b:a', '32k', mp3,
  ], { stdio: 'ignore' })
}

let made = 0
let kept = 0

for (let i = 0; i < lines.length; i++) {
  const line = lines[i]
  const mp3 = path.join(OUT, index[line] + '.mp3')
  if (fs.existsSync(mp3) && fs.statSync(mp3).size > 400) { kept++; continue }

  await render(line, mp3)
  made++
  if (made % 25 === 0) console.log(`  ${made} rendered, ${i + 1}/${lines.length}`)
}
if (fs.existsSync(tmp)) fs.unlinkSync(tmp)

/* Sweep clips whose line no longer exists, so a reworded sentence does not
   leave its old recording shipping forever. */
/**
 * Sweeping, but only after a full run.
 *
 * A scoped run knows about a fraction of the lines, so treating everything
 * else as dead would delete the rest of the bank every time somebody rebuilt
 * one game. The index is merged for the same reason: a scoped run adds its
 * lines to what is already there rather than replacing it.
 */
const indexPath = path.join(OUT, 'index.json')
let merged: Record<string, string> = {}
if (SCOPE !== 'all' && fs.existsSync(indexPath)) {
  try { merged = JSON.parse(fs.readFileSync(indexPath, 'utf8')) } catch { merged = {} }
}
Object.assign(merged, index)

let swept = 0
if (SCOPE === 'all') {
  const wanted = new Set(Object.values(merged).map(k => k + '.mp3'))
  for (const f of fs.readdirSync(OUT)) {
    if (f.endsWith('.mp3') && !wanted.has(f)) { fs.unlinkSync(path.join(OUT, f)); swept++ }
  }
}

fs.writeFileSync(indexPath, JSON.stringify(merged), 'utf8')

/**
 * Two numbers, and they measure different things.
 *
 * `mine` is what this run is responsible for; `all` is the whole bank. The
 * first version divided the whole folder by this run's line count, so a
 * scoped bake of forty three lines cheerfully reported a hundred and forty
 * kilobytes per clip.
 */
const sizeOf = (f: string) => fs.existsSync(f) ? fs.statSync(f).size : 0
const mine = lines.reduce((n, l) => n + sizeOf(path.join(OUT, index[l] + '.mp3')), 0)
const all = fs.readdirSync(OUT)
  .filter(f => f.endsWith('.mp3'))
  .reduce((n, f) => n + fs.statSync(path.join(OUT, f)).size, 0)

console.log(`\n${lines.length} lines: ${made} rendered, ${kept} already there, ${swept} swept`)
console.log(`scope "${SCOPE}": ${(mine / 1024).toFixed(0)} KB, ${Math.round(mine / lines.length)} bytes a line`)
console.log(`whole bank: ${(all / 1024 / 1024).toFixed(2)} MB across ${Object.keys(merged).length} lines`)
