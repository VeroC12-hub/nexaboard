/**
 * Measure the lesson's narration and write the cue sheet the video reads.
 *
 * ── Why the video does not just guess how long a line takes ──────────────────
 *
 * A scene whose length was picked by hand either cuts the voice off or leaves
 * silence at the end, and both are obvious. Worse, the counting scene has ten
 * beats that each have to land on the frame their own mango arrives: if "seven"
 * is a tenth of a second longer than "six", every beat after it drifts.
 *
 * So the audio is made first, measured here, and the video is built around the
 * measurements. That is the same rule the storyboard renderer already follows
 * and it is the only order that cannot go out of sync.
 *
 * Run after `npm run voice:bake -- --scope=lesson`:
 *
 *   node tools/lesson-narration.mjs
 */

import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import ffmpeg from 'ffmpeg-static'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const voiceDir = path.join(root, 'public', 'games', 'voice')
const indexPath = path.join(voiceDir, 'index.json')

/**
 * Every line every lesson says.
 *
 * ── Why they are globbed and not listed ───────────────────────────────────
 *
 * Each lesson owns a `lines.json` inside its own folder. Nothing lists them
 * centrally, on purpose: a central list is a file every lesson has to be added
 * to, which is a file two people writing two lessons at once both edit. There
 * is no such file, so there is nothing to collide on.
 */
function lessonLines() {
  const dir = path.join(root, 'video', 'ananse', 'lessons')
  if (!fs.existsSync(dir)) return []
  const out = []
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name, 'lines.json')
    if (!fs.existsSync(file)) continue
    const lines = JSON.parse(fs.readFileSync(file, 'utf8'))
    if (!Array.isArray(lines)) throw new Error(`${name}/lines.json is not an array`)
    for (const line of lines) out.push(line)
  }
  return [...new Set(out)]
}

const LINES = lessonLines()

/**
 * How long an mp3 is, in seconds.
 *
 * Read out of ffmpeg's own report rather than with ffprobe, which is not a
 * dependency here. ffmpeg writes the duration to stderr and exits non zero
 * because no output was asked for, so both are expected and neither is an
 * error.
 */
function seconds(file) {
  let out = ''
  try {
    execFileSync(ffmpeg, ['-i', file], { stdio: ['ignore', 'ignore', 'pipe'] })
  } catch (e) {
    out = String(e.stderr || '')
  }
  const m = out.match(/Duration:\s*(\d+):(\d+):(\d+\.\d+)/)
  if (!m) throw new Error(`no duration in ffmpeg output for ${path.basename(file)}`)
  return Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])
}

if (!fs.existsSync(indexPath)) {
  console.error('No voice index. Run: npm run voice:bake -- --scope=lesson')
  process.exit(1)
}
const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'))

const cues = {}
const missing = []
for (const line of LINES) {
  const key = index[line]
  if (!key) { missing.push(line); continue }
  const file = path.join(voiceDir, `${key}.mp3`)
  if (!fs.existsSync(file)) { missing.push(line); continue }
  cues[line] = { key, seconds: Math.round(seconds(file) * 1000) / 1000 }
}

if (missing.length) {
  console.error(`${missing.length} line(s) are not baked:`)
  for (const m of missing) console.error(`  ${m}`)
  process.exit(1)
}

const outPath = path.join(root, 'video', 'ananse', 'narration.json')
fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, JSON.stringify(cues, null, 2) + '\n')

const total = Object.values(cues).reduce((n, c) => n + c.seconds, 0)
console.log(`${LINES.length} cues, ${total.toFixed(1)}s of speech`)
console.log(`written to ${path.relative(root, outPath)}`)
