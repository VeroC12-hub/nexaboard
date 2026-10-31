# Sound and narration

Two different problems that look like one.

A **game** needs to speak out loud, on the device, the instant a round appears.
A **video** needs its narration baked into the MP4 file. The browser's own
speech synthesis does the first and cannot do the second, because it speaks
rather than producing a file. So there are two implementations, and neither is
a fallback for the other.

Both follow the rule the rest of the platform follows: sound is an addition and
never the only way through. Every line spoken is also on screen, so a muted
phone, a device with no voices, and a deaf learner all lose nothing they had.

---

## The games speak in the browser

`src/lib/education/speak.ts`, using `speechSynthesis`. No key, no network, no
cost, no download, and it works on any phone made in the last decade.

This is what lets a child who cannot read use the platform **without an adult
beside them**. Before it, every instruction was written text and the design
quietly assumed a parent was reading it out.

What is spoken:

- the instruction, when a round appears
- the verdict, and the right answer named aloud when they miss it, because a
  child who cannot read cannot be told in writing

Two controls, both deliberately prominent rather than buried in a setting:

| | |
|---|---|
| 🔊 **Say it again** | A child wants the instruction repeated constantly and should not have to wait for an adult. |
| 🔔 / 🔕 **Voice on, voice off** | Thirty phones talking at once in a classroom is the reason this is one tap from the game and not three menus down. |

The preference is remembered per device, and on by default, because the learner
who needs it most cannot read the switch.

### What it cannot promise

The voices belong to the device. A cheap Android may have one flat en-US voice;
an old browser may have none. So a voice is chosen on a preference order,
**en-GH, en-GB, en-NG, en-ZA, then any English**, and degrades to whatever
exists, then to silence.

Ghanaian English follows British convention, which is why en-GB outranks en-US.
On the machine this was built on Chrome offered 22 voices and the order picked
*Microsoft George, en-GB*.

One trap worth knowing: **Chrome's `getVoices()` is empty on first call.** The
list arrives asynchronously with a `voiceschanged` event, so the first line
spoken on a page load would otherwise come out in the wrong voice or not at
all. `whenVoicesReady` waits for that event, with a half second cap for the
browsers that never fire it.

---

## The videos are narrated into the file

`tools/tts.mjs`, on the machine that renders. Three providers, chosen with
`EDU_TTS`, and the default needs nothing installed:

| `EDU_TTS` | What it is |
|---|---|
| `sapi` | Windows' own speech synthesis, through PowerShell. Free, offline, on every Windows machine, and it has an **en-GB** voice. The quality is dated. Default on Windows because it works today with no download and no key. |
| `piper` | Open source, MIT, runs on a CPU, and markedly better. Set `PIPER_BIN` and `PIPER_VOICE`. About 60 MB of voice model, which is why it is not the default. |
| `none` | No narration. The video still renders with the line on screen as a subtitle. Default off Windows. |

`EDU_TTS_VOICE` and `EDU_TTS_RATE` tune the SAPI voice. The rate is **slower
than default**, because a child following a count needs the pauses and the
default reads a list of numbers as one word.

### Scene length now comes from the audio

This is the part worth keeping. `sceneSeconds` used to estimate from the word
count, which was wrong by a second or more either way: it either cut the voice
off mid sentence or left the scene sitting in silence.

Now every line is spoken to a WAV **before** rendering, the real duration is
read from the file's own header, and the scene is made at least that long plus
a short tail. Measured on a KG storyboard:

| Scene | Asked for | Actually spoken | Rendered as |
|---|---|---|---|
| 0 | 4s | 5.5s | 5.5s + tail |
| 1 | 5s | 6.1s | 6.1s + tail |
| 2 | 8s | 8.9s | 8.9s + tail |
| 3 | 5s | 5.1s | 5.1s + tail |

The WAV header is walked chunk by chunk rather than assuming the canonical
44 byte header, because SAPI writes a `fact` chunk on some formats and the
offsets move.

### Where the audio lives

`public/narration/`, git ignored, because Remotion's `staticFile()` can only
reach the public folder. Each file is named from the job and the scene index, so
re-rendering a topic overwrites rather than filling the folder with near
identical takes.

`<Audio>` sits **inside** each scene's `Sequence` rather than being laid over
the whole film, so a line always starts with the scene it belongs to however
the timings shift.

The narration path is set by the worker after the storyboard is written, never
by the model, so a storyboard cannot ask for an arbitrary file to be played.

Verified in Chrome: a narrated KG video came back at 1538 kB against 635 kB
silent, 28.5 seconds, and the browser decoded **125 kB of audio**.

---

## Not done

- **The SAPI voice is dated.** It is intelligible and it is not pleasant. Piper
  is the upgrade and needs a 60 MB model downloaded to the worker machine.
- **No Ghanaian voice anywhere.** en-GB is the closest either layer can get.
  A Ghanaian-accented voice would need a trained model, and for a platform
  teaching Ghanaian children it is worth wanting.
- **The games are English only**, where a KG child may be taught in a Ghanaian
  language first. The syllabus layer knows Ghanaian Language as a subject; the
  games and the narration do not. See issue 19.
- **No sound effects.** Deliberate: there is no chime on a right answer and no
  buzz on a wrong one. A child counting mangoes should be counting mangoes, and
  a reward noise teaches them to want the noise.
