/**
 * The recorded voice: lines that were baked rather than synthesised on the phone.
 *
 * ── What this is for ─────────────────────────────────────────────────────────
 *
 * `speak.ts` reads the games out loud using the browser's own speech
 * synthesis. That works on most phones and it has two problems that matter for
 * a child who cannot read. The voice belongs to the device, so the app sounds
 * like a different person on every phone and like an American robot on most
 * cheap ones. And a good number of Android browsers have no English voice
 * installed at all, in which case the game says nothing, which for a
 * non-reader is the whole product failing silently.
 *
 * So the lines the games actually say are recorded once, at build time, by
 * `tools/bake-voice.mts`, and shipped as small MP3 files. This looks a line up
 * and hands back a URL.
 *
 * ── Why it is only a lookup ──────────────────────────────────────────────────
 *
 * It deliberately does not know how to speak, queue or stop. Everything that
 * decides *whether* to make a noise lives in `speak.ts`, so there is one mute
 * switch and one queue rather than two of each drifting apart. This answers
 * one question: is there a recording of this exact sentence.
 *
 * ── Why a miss is normal ─────────────────────────────────────────────────────
 *
 * The bank covers the sentences the games generate today, and the games can
 * generate sentences nobody enumerated: a new costume, a number past the baked
 * ceiling, a verb somebody adds next month. A miss is not a fault, it is the
 * device voice taking over, and that is what makes it safe to ship a bank that
 * is not complete. Nothing here ever throws.
 */

/** Where the baker writes. Same origin, so no CORS and no key. */
const BASE = '/games/voice/'

type Index = Record<string, string>

let index: Index | null = null
let loading: Promise<Index | null> | null = null

/**
 * The same tidy-up the baker applies before hashing.
 *
 * The two have to agree exactly or every lookup misses, so it is one line in
 * both places and nothing more clever than that.
 */
const normalise = (text: string) => String(text || '').trim().replace(/\s+/g, ' ')

/**
 * Fetch the list of recordings, once.
 *
 * Called on import rather than on the first line spoken, because the first
 * line is spoken the instant a game opens and waiting for a fetch then would
 * hand that line to the device voice every time.
 */
export function loadBank(): Promise<Index | null> {
  if (index) return Promise.resolve(index)
  if (loading) return loading
  loading = fetch(BASE + 'index.json')
    .then(r => (r.ok ? r.json() : null))
    .then((got: Index | null) => {
      index = got && typeof got === 'object' ? got : {}
      return index
    })
    .catch(() => {
      /* No bank deployed, or offline before it was cached. The device voice
         covers everything, which is exactly where this started. */
      index = {}
      return index
    })
  return loading
}

/** Whether any recordings exist. False until the list has arrived. */
export function bankReady(): boolean {
  return !!index && Object.keys(index).length > 0
}

/** The recording of this exact line, or null to let the device say it. */
export function clipFor(text: string): string | null {
  if (!index) return null
  const key = index[normalise(text)]
  return key ? BASE + key + '.mp3' : null
}

/**
 * Pull some lines into the browser cache before they are needed.
 *
 * A clip fetched at the moment it is wanted arrives a beat late, and a beat
 * late on "Put four apples in the basket" is a child already reaching for the
 * apples. A game knows roughly what it will say, so it asks for those first
 * and the rest of the round is instant.
 *
 * Deliberately fire and forget: a warm cache is an optimisation, and nothing
 * should wait on it or fail because of it.
 */
export function warm(lines: string[]): void {
  if (!index) return
  for (const line of lines) {
    const url = clipFor(line)
    if (url) void fetch(url, { cache: 'force-cache' }).catch(() => {})
  }
}

void loadBank()
