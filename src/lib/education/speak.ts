/**
 * Reading the games out loud, in the browser.
 *
 * Every game instruction was written text, which assumed an adult was sitting
 * with the child to read it. That is fine for homework with a parent and wrong
 * for a child using the platform alone, which is most of the time.
 *
 * The browser's own speech synthesis does this: no key, no network, no cost,
 * no file to download, and it works on any phone made in the last decade. It
 * cannot be used for the lesson videos, because it speaks out loud rather than
 * producing a file, which is why `tools/tts.mjs` exists separately.
 *
 * ── What it cannot promise ──────────────────────────────────────────────────
 *
 * The voices belong to the device, not to us. A cheap Android may have one
 * flat en-US voice and an old browser may have none at all. So this is chosen
 * on a preference order, degrades to whatever exists, and degrades again to
 * silence with the text still on screen. Nothing here is ever the only way a
 * child can understand what to do.
 */

/** Preferred first. Ghanaian English follows British convention. */
const WANTED = [/en[-_]GH/i, /en[-_]GB/i, /en[-_]NG/i, /en[-_]ZA/i, /^en/i]

const KEY = 'nexaedu_voice_on'

/** Whether the platform has a voice at all. */
export function canSpeak(): boolean {
  return typeof window !== 'undefined'
    && 'speechSynthesis' in window
    && typeof window.SpeechSynthesisUtterance === 'function'
}

/**
 * Whether to speak, remembered per device.
 *
 * On by default, because a child who cannot read needs it and an adult who
 * does not want it can turn it off in one press. A classroom of thirty
 * phones all talking is the reason the switch is prominent.
 */
export function voiceOn(): boolean {
  try {
    return localStorage.getItem(KEY) !== 'off'
  } catch {
    /* Private window, blocked storage. Speaking is the better default. */
    return true
  }
}

export function setVoiceOn(on: boolean): void {
  try {
    localStorage.setItem(KEY, on ? 'on' : 'off')
  } catch {
    /* Losing the preference is survivable; throwing mid game is not. */
  }
  if (!on) stop()
}

/**
 * The best voice this device has.
 *
 * `getVoices` is famously empty on the first call in Chrome, because the list
 * loads asynchronously, so this is read fresh each time rather than cached at
 * module load when it would reliably be empty.
 */
function bestVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices()
  if (!voices.length) return null
  for (const want of WANTED) {
    const found = voices.find(v => want.test(v.lang))
    if (found) return found
  }
  return voices[0] ?? null
}

export function stop(): void {
  if (!canSpeak()) return
  try {
    window.speechSynthesis.cancel()
  } catch {
    /* Some browsers throw when cancelling nothing. */
  }
}

/**
 * Say one line.
 *
 * Cancels whatever was being said first: a child who taps twice should hear
 * the new instruction, not the old one finishing over it.
 *
 * Slower than default on purpose. A four year old following a count needs the
 * pauses, and the default rate reads a number list as one word.
 *
 * ── Asked for, versus offered ───────────────────────────────────────────────
 *
 * The voice preference gates narration the app decided to do on its own. It
 * does **not** gate a tap on a speaker, and it used to: with the preference
 * off, pressing "read this page" silently did nothing, which is the worst
 * possible answer to a direct request. `asked` says the person pressed the
 * button, and then it speaks regardless.
 */
export function say(text: string, opts: {
  rate?: number
  /** True when a person pressed something, rather than the app deciding to. */
  asked?: boolean
  /** Called when it finishes or gives up, so a button can stop showing stop. */
  onEnd?: () => void
} | number = {}): void {
  /* A number still works, because several callers pass a rate positionally. */
  const o = typeof opts === 'number' ? { rate: opts } : opts
  const rate = o.rate ?? 0.85

  const line = String(text || '').trim()
  if (!line || !canSpeak() || (!o.asked && !voiceOn())) { o.onEnd?.(); return }

  stop()
  try {
    const utter = new SpeechSynthesisUtterance(line)
    const voice = bestVoice()
    if (voice) {
      utter.voice = voice
      utter.lang = voice.lang
    }
    utter.rate = rate
    if (o.onEnd) {
      utter.onend = () => o.onEnd?.()
      utter.onerror = () => o.onEnd?.()
    }
    /* Very slightly higher than natural, which reads as friendlier to a young
       child without tipping into the cartoon register. */
    utter.pitch = 1.05
    window.speechSynthesis.speak(utter)
  } catch {
    /* A device that refuses to speak leaves the text on screen, which is
       where it already was. */
    o.onEnd?.()
  }
}

/**
 * Wait for the voice list, then run something.
 *
 * Chrome populates `getVoices` after a `voiceschanged` event, so the very
 * first thing said on a page load would otherwise use the wrong voice or none.
 * Resolves either way, so nothing waits on a browser that never fires it.
 */
export function whenVoicesReady(then: () => void): void {
  if (!canSpeak()) { then(); return }
  if (window.speechSynthesis.getVoices().length) { then(); return }

  let done = false
  const go = () => {
    if (done) return
    done = true
    then()
  }
  window.speechSynthesis.addEventListener('voiceschanged', go, { once: true })
  /* Some browsers never fire it. Half a second is imperceptible and is far
     better than a game that never speaks. */
  setTimeout(go, 500)
}
