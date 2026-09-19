# Pictures and video in a lesson

Claude decides what needs to be shown and writes the brief. An open source model
renders it. Claude is the teacher, the renderer is the illustrator, and neither
does the other's job.

---

## Three kinds, and why the distinction is not negotiable

A diffusion model cannot write. Ask Wan or FLUX for "the water cycle with each
stage labelled" and you get a beautiful picture with WATFR CYLCE across the top
and arrows pointing at nothing. It also cannot be trusted with a quantity: a
triangle it draws is not the triangle in the question, and a beaker it fills is
not filled to 250 ml.

Fatal for teaching, harmless for atmosphere. So the kind decides the renderer:

| Kind | Made by | May carry facts | Cost |
|---|---|---|---|
| `figure` | Claude, as SVG | **yes**, every label is written deliberately | nothing |
| `illustration` | FLUX.1 schnell | no words, no quantities | fractions of a penny |
| `clip` | Wan 2.2 | no words, no quantities | a few cents |

`carriesFacts()` in `src/lib/education/visuals.ts` is the one line that enforces
it, and the prompts for the two rendered kinds say in as many words that the
model rendering them cannot spell, so never to ask for a label.

A lesson on the water cycle gets a **figure** with the stages labelled, and may
also get a **clip** of rain falling on a hillside. The figure teaches; the clip
makes the page feel alive. Confusing the two is how a platform ends up teaching
children misspelt labels.

---

## Why figures are the default

A figure is finished the moment Claude writes it. No renderer, no key, no GPU,
no wait, no cost, and the labels say exactly what was meant. It is asked for
automatically once a lesson is written, and drawn **from the lesson text** so it
illustrates what was actually taught rather than what the topic title suggests.

The other two are asked for by the learner pressing a button, because each one
spends money. `likelyKind()` decides which button to offer: something that only
makes sense moving gets "Show me this happening", something to be recognised in
the world gets "Show me a picture".

Both prompts are told that declining is the right answer more often than not,
and a decline shows one honest line rather than a bad picture.

---

## Testing it without a GPU or a bill

```
EDU_RENDERER=local
```

A test double. It makes no pictures and it is not a video model: it produces a
placeholder that says TEST RENDER on its face and prints the prompt it was
given, in the shape and timing the real thing would produce. So the whole path
runs for free, offline, as often as you like: the brief Claude writes, the
submit, the poll, the url, the element landing on the page, the caption, the
attribution, and every way each of those fails.

Printing the prompt on the placeholder turns out to be the useful part. Whether
the brief Claude wrote is any good is visible without spending a penny to find
out.

It is chosen explicitly and never by default, because a deployment quietly
serving placeholders to real learners would be worse than one serving nothing
and saying so. `EDU_RENDER_DELAY` sets how many polls it waits before answering,
so the waiting copy on the page gets exercised rather than skipped past.

## Why the prompts are short

Worth recording, because the test caught it and then nearly hid it.

Asked for a video brief, the model wrote a complete 5,971 character lesson on
the water cycle and appended the JSON at the end. The tolerant parser found the
JSON, so the test passed, the picture appeared, and every request quietly paid
for six thousand characters of prose nobody would ever read.

Two causes, both fixed:

1. `COMMON` opens with "you are this learner's tutor, you teach them a topic".
   Right for teaching, wrong for producing one artefact, and it dominated. The
   three visual tasks now get `VISUAL_COMMON`, which opens with "you are the
   illustrator for a lesson that has already been written", and a final line
   repeating that the entire reply is the artefact.
2. The `clip` instruction was long and discursive where `illustration` was
   short. `illustration` obeyed every time; `clip` did not. Length and
   philosophy in a task invite an essay in reply.

Measured across the same three topics afterwards: 771, 608, and 7 characters,
the last being `NO CLIP` for circle theorems, correctly, because nothing in it
moves.

## The models

Both are open weight and commercially usable, and both are **served rather than
self hosted**, because serving them needs a GPU. Measured on the machine this
was built on, an Intel UHD 620 with no CUDA: unusable. A single clip would take
hours, if it ran at all.

```
EDU_IMAGE_MODEL   default fal-ai/flux/schnell            FLUX.1 [schnell], Apache 2.0
EDU_VIDEO_MODEL   default fal-ai/wan/v2.2-5b/text-to-video   Wan 2.2, Apache 2.0
FAL_KEY           required for either; without it only figures appear
```

Both are overridable, because model names move faster than this file will.

### What it costs

Roughly, at the time of writing: **about 4 cents per second of 480p video**, so
a five second clip is about 20 cents. Images are a fraction of a penny.

That is the number that matters for a school. Forty learners each asking for one
clip on one topic is about 8 dollars. Figures, which are the ones that actually
teach, cost nothing. The design leans on that deliberately: video is opt in,
per learner, per topic, and never automatic.

---

## Safety: no people in generated pictures

Generated images and clips contain no people at all. Not a person, a child, a
figure, or hands, and no scene that implies one.

This is not caution in the abstract. The first real image rendered for a lesson,
asked for two patches of farm soil, came back as a young girl crouching in
shallow water in a wet dress, and went onto the page under a caption about soil
types. Nothing caught it.

The rule is stated in three places, because one instruction between a child and
a bad picture is not enough: in the briefs Claude writes, in the negative prompt
`api/render.js` sends, and appended to the prompt in `api/render-free.js` for the
free service that accepts no negative prompt.

An empty scene teaches the same thing and risks nothing: the soil, the crop, the
apparatus, the landscape. Where a topic genuinely cannot be shown without a
person, the right answer is no picture, and the brief is told that declining is
always available.

This removes the worst class of risk. It does not make generated pictures safe:
see issue 15, which is blocking for exactly that reason.

## Safety: the SVG is code

A figure goes into the page as markup, not as an image file. The model writing
it is ours and the prompt asks for a plain diagram, but "the model would not do
that" is not a security boundary. The SVG travels through a queue, a database
and a worker, and anything on that path that is ever compromised would otherwise
put a script tag straight into a child's browser.

`cleanSvg()` refuses outright on `script`, `foreignObject`, `iframe`, `object`,
`embed`, `link`, `style`, `use`, `image`, `set` and any `animate*`, and strips
every `on*` handler, every `href`, and every external `url()`. It requires a
`viewBox`, removes fixed `width` and `height` so the drawing scales to its
column, and refuses anything over 120 KB.

One bug worth recording, because it was live and it was real: `FORBIDDEN_TAGS`
was a `/g` regex used with `.test()`. A `/g` regex carries `lastIndex` between
calls, so a refusal that returned early left the next check starting from the
middle of a different string, and a `<foreignObject>` at the front sailed
through. `foreignObject` embeds arbitrary HTML. The regex is not global any
more. Fifteen attack shapes now run in one process, in order, specifically so
that kind of carried state shows up.

---

## The flow

```
lesson written
      │
      ▼
askVisual(task: 'figure')  ──▶  Claude writes SVG + caption + alt
      │                                    │
      │                              cleanSvg()  ──▶  refused: no picture
      ▼                                    ▼
  on the page                         on the page

learner presses "Show me a picture"
      │
      ▼
askVisual(task: 'illustration')  ──▶  Claude writes a render prompt
      │
      ▼
POST /api/render  ──▶  fal queue  ──▶  poll  ──▶  url  ──▶  on the page
```

`/api/render` holds the key, allowlists the two model ids so a crafted id cannot
spend on anything else, and answers 501 with a readable sentence when there is
no key. Everything degrades to no picture: a lesson without a diagram is still a
lesson, and a broken image where a diagram should be is worse than nothing.

---

## What is attributed

Every picture prints who made it, under it, never hidden. The two rendered kinds
also carry the plain warning: *"A generated picture: look at it, do not read it
for detail."* A learner who can see that a photograph came from a machine is
better placed to judge it.
