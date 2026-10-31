# Lesson video

Claude writes a storyboard. Remotion renders it. Every word on screen is real
DOM, so the numbers, labels and equations are exactly what was meant.

That last sentence is the whole point. Wan, Kling and Pika cannot write: ask any
of them for "count the mangoes, one, two, three" and you get pleasant footage
with nonsense glyphs where the numbers should be. That disqualifies them from
precisely the things a school wants — animated diagrams, worked examples,
anything counted or labelled.

It also renders on a **CPU**. The machine this was built on has Intel UHD 620
and no CUDA, and it produced a 637 kB MP4 in 56 seconds.

---

## Why not Canva and CapCut

The instinct behind that chain was right: build from designed frames with real
text, not from a diffusion model. One link does not exist.

**CapCut has no public render API.** Its Open Platform builds plugins that run
inside the editor; there is no endpoint that takes a timeline and returns an
MP4. So it cannot sit in an automated pipeline at all, and any chain containing
it is a person doing manual work.

**Canva can** do frames, through the Brand Template Autofill and Export APIs,
and there is a Canva connector available. That is worth doing when brand
consistency matters, but it still needs something to assemble the frames into
video, which brings you back to Remotion or ffmpeg. So Remotion first, Canva
later as a source of frames rather than as a replacement.

**Remotion's licence** is free for individuals and companies of three or fewer
employees, and $100/month above that. It is not MIT, so it should not be
described as MIT.

---

## The five films

A four year old and a university student do not need the same video, and the
difference is not decoration. `STYLES` in `src/lib/education/storyboard.ts` is
the table, and `api/prompt.js` hands the model the one that applies, so a KG
storyboard cannot come back looking like a lecture.

| Style | Stage | What it is |
|---|---|---|
| `early` | creche, nursery, KG | One idea. Enormous type. Objects arriving one at a time and counted aloud. Ends by handing over to a game. Four scenes. |
| `child` | primary | One idea, as an animated diagram with parts named as they appear. Six scenes. |
| `school` | JHS, SHS | An explainer: the question, the method worked line by line, then the trap. Eight scenes. |
| `trade` | TVET | The same, with every quantity a real workshop quantity. |
| `advanced` | university | Technical and dense, derivation on screen. Ten scenes. |

A scene is never shorter than its narration needs, at a deliberately slow
reading speed, because the commonest fault in generated video is text vanishing
before a child has finished reading it.

---

## The scene fields

| Field | What it does |
|---|---|
| `say` | Spoken over the scene and shown as a subtitle. Written to be said aloud. The audio is made before rendering and the scene is stretched to fit it, so a line is never cut off. See `docs/sound.md`. |
| `title` | The big line. May be a number, a word or an equation. |
| `items` | Things arriving one at a time. For the early style this is how counting is shown: the third mango and the numeral 3 land together. |
| `maths` | One LaTeX expression, set by KaTeX. |
| `steps` | Lines of working, revealed one at a time, last one highlighted. |
| `note` | A small caption underneath. |

---

## Two bugs worth recording

Both were found by looking at rendered frames rather than at green test output.

### KaTeX rendered every equation twice

KaTeX emits the equation as HTML for sighted readers and again as MathML for
screen readers, and its stylesheet is what hides the second copy. The app gets
that stylesheet through `index.css`; the video bundle is separate and had its
own, missing. So every equation appeared twice, one under the other, on the
finished video. `video/Lesson.tsx` now imports `katex/dist/katex.min.css`.

### JSON ate the backslashes, twice over

`\frac` written with a single backslash is not a backslash and an f. In JSON it
is one character: a form feed. So the first worked example this rendered showed
a red arrow and the literal text `rac{240}{8} = 30`.

It arrives two ways and only one is obvious:

1. **As invalid JSON**, with the control character raw in the source. `JSON.parse`
   throws, so nothing survives unless the source is repaired first.
2. **As perfectly valid JSON**, when whatever produced it escaped the control
   character properly. The parse succeeds and the damage is already inside the
   value, silent, with everything downstream looking healthy.

The second is the dangerous one, and it is the one that actually broke the
video. `readStoryboard` now repairs both: the source before parsing, and the
value after. Five cases are tested, including legal tabs between JSON tokens,
which must not be touched.

---

## Running it

```bash
npm run video:studio                      # the Remotion editor
npm run video:render -- out.mp4 --props=board.json
node tools/video-render.mjs board.json    # what the worker calls
```

Finished videos go to `.renders/`, which is git ignored: they are large and
regenerable.

Rendering happens on the **worker machine**, next to the tutor, because it needs
a headless browser and ffmpeg and Vercel is the wrong place for either. That is
also why it is possible at all.

---

## How it reaches a learner

The lesson page asks for a video along with the diagram and the pictures, so a
lesson arrives complete. The chain, all verified end to end:

```
learner opens a topic
        │
        ▼
  lesson written  ──▶  storyboard written from that lesson text
                              │
                              ▼
                    worker renders it with Remotion  (about a minute)
                              │
                              ▼
                    /renders/lesson-<job>.mp4  ──▶  <video> on the page
```

The worker does the rendering because it needs a headless browser and ffmpeg,
and it hands back the url rather than the scenes, so the page has nothing to do
but play it. Range requests are served, without which seeking does not work and
Safari refuses to play at all.

`.renders/` is served by the dev server only. **In production these belong in
Supabase Storage**: a Vercel function has no disk to keep them on, and the
machine that made them is somebody's laptop.

## Not done yet

- **The narration voice is dated.** `say` is now spoken as well as subtitled,
  through Windows' own speech synthesis, which is free and offline and needs
  nothing installed. It is intelligible and it is not pleasant, and there is no
  Ghanaian-accented voice in either layer. See `docs/sound.md`.
- **No caching, and now it costs more.** A render is about a minute of the
  worker's time on top of writing the storyboard, and every lesson opened asks
  for one. On the free route, where one worker answers one job at a time, a
  complete lesson with diagram, picture, clip and video is now **five to eight
  minutes**. Nothing is stored, so the next learner on the same topic waits
  again. A storyboard for counting to five is not personal at all and would
  cache perfectly across every learner in the country, which makes this the
  single highest value thing left to build.
- **Storage in production.** As above.
