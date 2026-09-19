# The youngest learners' interface

Creche, KG and Basic 1 to 2 get their own set of screens rather than a
restyled version of the adult ones. Same syllabus, same attempts, same plan,
same lessons and games underneath.

One of four. `docs/interfaces.md` covers all of them and what they share; this
is the detail of this one.

---

## Why a separate interface and not a theme

The adult screens are a list of subjects, a lesson and some questions. They
assume the person using them can read the navigation, knows what a syllabus
strand is, and will scroll to find things. None of that is true of a five year
old, and no amount of restyling makes it true.

What is actually different:

| | Adult screens | Kid screens |
|---|---|---|
| Navigation | Links and headings, read | Five tabs along the bottom, thumb height |
| Meaning carried by | Words | Pictures. The words are for the adult beside them |
| Targets | 44px | 56px, and the whole row is the target, not the arrow on the end |
| Progress | "68%" | "8 of 10", which a child can be told out loud and check |
| Opens on | A choice of subject | Something to carry on with |

That last one matters more than it looks. A child asked to pick from four
subjects picks the one with the nicest picture. The subjects are still there,
above the fold, but the first thing offered is the topic they were last
working on.

---

## Nothing here is a second source of truth

Progress comes from the attempts the mastery model already records. Points and
badges are derived from those same attempts. Topics come from the syllabus.
There is no kid database and nothing to drift.

Measured on a seeded KG 2 learner with 72 attempts over four days: 517 XP,
4 days learned, 4 topics, 3 badges earned, weekly challenge 20 of 20, and
"Carry on" pointing at "The sound each letter makes", which is a real topic
from the real KG 2 syllabus.

---

## Points, days and badges

`rewards.ts`. **Everything is computed from attempts and nothing is stored.**

That is deliberate and it buys three things:

1. **It cannot drift.** A stored counter and a real record disagree eventually,
   and when they do a child is either cheated of points they earned or
   credited with points they did not.
2. **It cannot be lost.** Clearing a rewards store would wipe a child's badges
   while their learning history sat there untouched.
3. **It cannot be gamed by the app.** Nothing can quietly hand out points to
   lift engagement, because there is nowhere to put them.

### The streak does not reset

Both reference designs show a consecutive-day streak, and the convention is
that missing a day sends it to zero.

This counts **days learned this week** instead. A child in Ghana with no data
for two days, or a fever, or a family funeral, has not failed at anything, and
an app that greets them on their return by deleting three weeks of work has
taught them that the safest thing is not to come back. The flame still grows,
it just never punishes.

This is the one place the references were not followed, and it is a decision
about children rather than about taste.

### A wrong answer still earns

Ten points for right, three for tried. A child who attempted eight questions
and got three right has done more work than one who attempted three and got
three right, and a scheme paying nothing for a wrong answer teaches them to
stop when they are unsure.

### Badges are for work, never for turning up

Seven, each with a rule over the real attempts: first answer, ten right, five
topics, fifty right, four days in a week, twenty topics, a hundred right.
Nothing is awarded for opening the app or coming back, because a badge for
turning up is a badge for nothing and children work that out quickly.

Unearned badges are drawn in outline rather than hidden or blurred. A child
should be able to see what is coming: a locked shape they cannot make out is
not an incentive, it is a shut door.

---

## The artwork

`src/components/kid/art.tsx`. Hand-written SVG: the star mascot with three
moods, six subject tiles, seven badge designs, and the tab icons.

The references lean on 3D character renders, which would have to come from a
paid pack with a licence to read, an artist, or an image model. The last is the
one to avoid hardest, because **issue 15 is BLOCKING** and nothing reviews a
generated picture before a child sees it.

So these are drawn in code. Flatter than a 3D render, and honest about that.
What it buys is worth more here than the gloss:

- **Nothing to download.** A couple of kilobytes inside the bundle, which on a
  Ghanaian phone on mobile data is the difference between a home screen that
  appears and one that loads.
- **No licence, ever.** Nobody has to check whether this may ship to a school.
- **It cannot be unsuitable.** A drawn shape is exactly what it was written to be.
- **It takes the theme**, so the same mascot works on purple and on white.

Everything is behind that one module, so swapping in supplied files later is
one file rather than forty.

### The characters are not children

No skin tone, no hair, no clothing: a star with a face. A platform for
Ghanaian children that draws a specific child excludes every child who does
not look like the drawing, and picking a tone is a decision no code should
make on a school's behalf.

---

## The lesson and the questions

These two are **shared with the adult interface and restyled**, not rebuilt.
The logic that streams a lesson, orders it by the plan, asks for pictures and
marks answers is the same whoever is reading it, and forking it would leave two
of everything with one of them quietly rotting. So a `Page` component swaps the
frame and `kid-pages.css` restyles what is inside it.

What changes for a kid:

| | Adult | Kid |
|---|---|---|
| Back | "Back to Numeracy" | A chevron, which they already know from every other app |
| Type | 16px, 60ch lines | 18.5px, 30ch lines, because a child reading with a finger needs the line to end before their attention does |
| Buttons | A row of three | A stacked column of full width pills |
| Choices | Lines of text | Cards 64px tall, with a tick or cross as well as a colour |
| Score | `2/3` in the margin | A card with the mascot, the number, and one sentence |
| Reading it | Assumed | "Read it to me", "Say the question", "Read that to me" |

Buttons are stacked rather than in a row because two 44px targets within a
thumb of each other on a phone is a layout that presses the wrong one for a
five year old. That is the layout's fault, not the child's.

### It reads itself out

Three buttons, all using the same voice and the same mute switch as the games:

- **Read it to me** on a lesson, which reads the topic and the lesson text.
- **Say the question**, because a child who cannot read the question cannot
  answer it however well they know the answer.
- **Read that to me** on the explanation after a wrong answer, which is the
  most useful text on the page.

Nothing speaks on arrival. A page that starts talking by itself is startling,
and the games already do the automatic speaking where it belongs.

### The mascot never pulls a face at them

It is pleased for any score above nought and merely calm for nought. A star
looking disappointed at a child who got none right is the app telling them
they are bad at this, and the copy says the opposite: that it usually means the
idea has not landed yet.

---

## How it joins the rest

`Study.tsx` renders `KidApp` instead of the subject chooser when `isYoung` is
true, which is creche plus Basic 1 to 2. That is the same line the platform
already draws between a learner taught by prose and one who cannot yet read
it.

Tapping a topic hands off to the real `Learn` page with `startTopicId`, so the
lesson or the game opens directly. Landing them on an outline they cannot read
would undo the point of the screen.

**Three faults found in Chrome and fixed:**

- Pressing Back from a deep-linked lesson went to `Learn`'s own topic outline,
  stranding a KG learner in the adult interface. When a caller deep-links,
  "back" now belongs to the caller.
- The score read `2/3` with the 2 smaller than the /3, because `.kid-score p`
  is more specific than `.kid-score-n` and my own later rule beat my earlier
  one.
- The mascot sat against the left edge of a centred card, because the app sets
  `svg { display: block }` globally and a block element does not answer to
  `text-align`.

---

## Not done

- **Only this tier exists.** Primary 3 to JHS (the clean XP look) and SHS to
  university (the dark sidebar dashboard) are still the plain adult interface.
  The parent and school view, which `Learners.tsx` already is, has not had the
  dashboard treatment either.
- **The Games tab lists topics, it does not preview them.** The reference shows
  game cards with art; these are rows.
- ~~The home screen still says nothing out loud.~~ **Done.** One control on the
  chrome reads whatever screen you are on, and nothing speaks on arrival.
- **"Try something new" is the first untouched topic per subject**, not a
  recommendation. The mastery model could choose better.
- **The subject page progress is answers, not lesson completion.** There is no
  notion of finishing a topic, so a row shows right answers against a round
  number rather than real progress through it.
