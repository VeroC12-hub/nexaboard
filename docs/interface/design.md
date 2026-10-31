# The look

One palette, one art language, four densities. Written after somebody opened
every page in a browser and said it looked bad, which it did.

---

## One palette

The four interfaces were built one after another and each invented its own
colour: the youngest were violet on lilac, Basic 3 to JHS were blue on cool
grey, senior high was charcoal and amber, and the parent's page was a third
blue. Moving from a child's screen to their parent's felt like changing
product.

The app already had a palette before any of them, in `nexaedu.css`: deep navy
ink on cream, with gold, green and a warm red. The games use it. The landing
page uses it. So the fix was not a fifth scheme but adopting the one that was
already here, now in `tokens.css`.

**The tiers differ by density and temperature, never by hue.**

| Tier | Paper | Solid | Accent |
|---|---|---|---|
| Creche to Basic 2 | Warm cream, most tint | Green | Gold, generously |
| Basic 3 to JHS | Near white | Green, sparingly | Gold on the counters |
| SHS to university | Cool cream | Navy ink, as the rail | Gold |
| Parents, schools | Light cream | Navy ink, as the band | Gold, green, red for status |

The senior tier's dark rail is literally `--nx-ink`, the same value as body
text everywhere else. That is the join: the darkest surface in the platform is
the same colour as its writing.

Green and gold are also simply the right two colours for a Ghanaian school
product, which is worth more than neutrality.

---

## One art language

The first version mixed drawn SVG with platform emoji in the same forty pixels:
a drawn star beside 🔊, 🔥 and 👋, and `‹`, `›`, `☰`, `▦`, `▤`, `◴`, `⏻` as
text glyphs in the chrome. Emoji are somebody else's illustrations and render
differently on every device; a `›` at 22px came out as a small malformed mark
that read as a typo. **Nothing in the interface is a character from a font any
more.** Every mark is in `art.tsx`.

### A cast, not a mascot

There was one star. One character on an otherwise white page is not a world,
and a four year old reads the difference. There are six now: star, mango, goat,
bird, drum, sun, sharing one face so they read as a family rather than as clip
art. In a list they are chosen **by position**, so the row above and below are
never the same friend; hashing the topic id put two goats next to each other,
which reads as a bug.

None of them is a child. No skin tone, no hair, no clothing. A platform for
Ghanaian children that draws one specific child excludes every child who does
not look like the drawing.

### A scene, not a tint

There is a drawn sky behind the youngest tier: clouds, a few stars, hills. It
shares the vocabulary the game engine draws its scenes from, so the home screen
and the games look like one world.

It fades out. The first version ended in a hard band of hills, and because the
cards sit over it the green edge cut straight through a white card and read as a
rendering fault. Everything below the halfway point now dissolves into the page.

---

## Five tabs became two

Home and Play. `Learn` only repeated the subject tiles already on Home, so
tapping a tile opens the subject in place. `Profile` is a grown up's screen and
was taking a fifth of a four year old's navigation, so it moved to the header
with the other adult controls.

**Rewards is reached by tapping your own stars**, which is a more natural
gesture for a child than reading a tab label.

### The counters used to do nothing

The points and the days were inert chips shaped exactly like buttons: a number
on screen that looks pressable and is not. Neither said what it counted, so
"4" answered nothing. They are buttons now, they open Rewards where both are
written out in words, and the flame reads "4 days".

---

## A lesson is not one page

It used to render whole: everything the tutor wrote, in one scroll, with the
questions and the game at the bottom. Nobody is taught that way, and the length
of the whole thing was the first thing a learner saw.

A lesson is now read a few paragraphs at a time, with Back, dots and Next, and
the actions appear only on the last page. The one number that changes with age
is how much a page holds: **one paragraph for a five year old, three for JHS,
five for university.** A five year old given five would stop; a university
student given one would be insulted.

Progress is dots rather than "3 of 7", because a count tells a child how much
is left, which is the thing that makes them stop.

### And you can just type

The only way to ask a question in words was to select some text and find the
box inside the menu that appeared. Anybody who did not know to do that had no
way to say anything at all. There is a plain "Ask about this lesson" field
under every lesson now, and what comes back is the same answer card, with the
same "Did that help?".

---

## Hover and focus

There were none. Schools have laptops, and on a laptop a card with no hover is
indistinguishable from a picture. Every clickable thing now lifts, tints or
outlines on hover, and everything shows a visible focus ring for a keyboard.

Rows that only report something carry `is-flat`, so they do not pretend to be
pressable.

---

## Faults found by looking

Every one of these came from opening the page, not from reading the code.

| Fault | Cause |
|---|---|
| The mute button did nothing | It wrote the preference to storage and the shell held no state, so it never re-rendered |
| Every progress bar rendered empty, one measuring 44.8px instead of 10px | All five tracks are `<span>`, because they sit inside a `<button>` where a `<div>` is illegal, and none set `display: block` |
| The kid score read `2/3` with a tiny 2 | `.kid-score p` is more specific than `.kid-score-n`, so my own later rule beat my earlier one |
| The mascot sat hard left in a centred card | The app sets `svg { display: block }` globally, and `text-align` cannot move a block |
| A hill band cut through a white card | The sky ended in a hard edge behind content that sits over it |
| A cloud sat behind the greeting like a smudge | Cloud positions were not kept clear of the text |
| The week ticks poked out and clipped on the card edge | A pseudo-element hanging off the corner of a 34px box. Now the box fills and keeps its letter |
| "Four Days" was a water drop | A rounded, symmetrical flame is a drop. A flame leans and tapers |
| Two flames on one screen | The header and the week strip said the same thing twice |
| The goat vanished beside the mango | A near-white character on a cream card. Warmed, and every character now sits on a white disc |
| "Yaw MensahSHS 2" | The name and the year were inline spans |
| Rings at zero drew a grey dot | A round line cap paints a dot even on a zero-length arc |
| Two empty panels filled half a 1280px screen with apologies | Both "In progress" and "Recent work" render their own empty state. Now one invitation |
| The kid lesson title was a high-contrast serif | `nx-display` is the house display face, which is right for the landing page and wrong for a child still learning letterforms |
| The kid failure state was adult copy | Two sentences about the tutor not being switched on, in a tier where the learner cannot read either. Now a sleeping friend and a way out |

---

## The measured pass

Everything above came from opening pages and looking. This section came from
measuring them, which found things looking could not.

### Contrast

Every text colour in the four tiers was checked against the background it
actually computes to, in the browser, at the size and weight it renders at,
against 4.5:1 for body text and 3:1 for large text. Fourteen pairs were under
the floor.

The cause was one mistake made repeatedly: **a colour bright enough to fill a
shape is almost never dark enough to be read on light paper**, and the palette
used one value for both jobs.

| Was | Measured | Now |
|---|---|---|
| White on gold | 1.84 | Gold never carries white text; on gold the writing is `--nx-ink`, 8.49 |
| White on the warm banner's light end | 1.93 | A darker warm ramp, 4.84 at its lightest |
| Gold `#d99413` as a counter | 2.56 | `--nx-gold-text`, 4.98 |
| `--nx-warm` as the flame count | 2.55 | `--nx-warm-text`, 4.80 |
| White on the green card's light end | 3.05 | A darker green stop, 4.63 |
| `--nx-ink-3` `#8792a6` on 11px labels | 3.14 | `#697282`, 4.53 on the warmest paper |
| `--grow` `#4e9f2e` under a white button | 3.32 | The palette green, 4.82 |
| Sky blue as a link | 3.81 | `--nx-sky-text`, 4.53 |
| Status chips on their own tint | 3.9 to 4.1 | The `-text` variants, 4.5 and over |
| White on `--nx-green`, and green on white | 4.41 | `#0e8348`, 4.82 both ways |

Two lessons worth keeping:

- **A gradient has to clear the floor at its lightest stop**, not on average,
  because that is where a line of text can land. Three banners were built by
  eye and all three failed at one end.
- **Each meaning now has two values.** The plain token fills, the `-text` token
  is written, and every `-text` value clears 4.5:1 against the *hardest*
  background it appears on, which is its own soft tint rather than white. One
  token is then safe everywhere it is used.

After the fixes the sweep reports **zero failures** on every screen of all four
tiers, plus the lesson and question pages, at 360px and at 1280px.

### A fifth palette nobody had noticed

`study.css`, which paints the lesson and question pages, had its own complete
scheme: cool grey-green paper, a grey ruled line, its own green and its own
red. The one-palette work had converted the four dashboards and missed the
surface a learner spends the most time on, so moving from a dashboard into a
lesson changed product.

It now draws from the same tokens. The exercise-book idea survives intact: the
ruled paper, the red margin and the ticks accumulating down it are all still
there, in the platform's colours instead of their own.

### All caps, everywhere

Eleven rules set labels in tracked uppercase, and two places uppercased text in
the markup with `toUpperCase()`. That is the commonest tell of a generated
page, and here it was also plainly wrong: the class doing it most often carries
a **topic title from the syllabus**, so a sentence somebody wrote came out as
`LETTERS STANDING FOR NUMBERS`, harder to read and louder than the heading
under it. All of them are sentence case now, told apart by size, weight and
colour instead.

### Phone widths

The previous pass was done in a browser window that would not go below 502px.
At a real 360px:

| Fault | Fix |
|---|---|
| The teen week strip ran off the right edge and cut "this week" in half | The day boxes flex; the label drops below the strip |
| Those boxes then rendered as 25x40 ovals | `aspect-ratio: 1`, because a 50% radius on a box that is not square is not a circle |
| A parent with four children got four full screens of ring card, one each | Two across |
| The parent table scrolled sideways, and squeezing it clipped "today" to "toda" | Topics, Answered and the repeated Open button come off on a phone. Four columns fit |
| The lesson page's margin count sat on top of the heading beside it | The margin narrowed on a phone but kept its desktop left offset, so it ended *past* where the body began |
| "Change subject" and "Sign out" each broke onto two lines | The header wraps to two rows |

One CSS lesson: a media-query override placed *above* the rule it overrides
does nothing when the selectors have equal specificity. `.teen-days` inside
`@media` lost to `.teen-days` fifty lines later until the block was moved.

### Touch targets

`.nx-link`, which is "Change subject", "Sign out", "Back" and "Reset",
measured 26px tall, and two of them sit side by side in the header. The hit
area is grown to 44px with a pseudo-element rather than with padding, so the
underline stays on the words it belongs to. Verified by hit-testing eight
pixels above and below each link, and by checking that no two links' areas
overlap.

---

## Voice, not just colour

Unifying the palette removed the one thing that had been distinguishing the
four tiers: they became the same grotesque at the same weights, four times
over.

So the house serif now carries **headings and reading** in the two older
tiers, and the grotesque keeps the chrome: navigation, buttons, counters,
labels. A serif reads as a document, which is what a syllabus is; a grotesque
reads as a control, which is what a button is.

| Tier | Headings | Reading |
|---|---|---|
| Creche to Basic 2 | Sans | Sans |
| Basic 3 to JHS | Sans | Sans, 58ch |
| SHS to university | Serif | Serif, 17px on 1.78, 66ch |
| Parents, schools | Serif | n/a |

The youngest tier deliberately does not get it. A child still learning
letterforms needs a single-storey `a` and unbracketed strokes, and a
high-contrast display serif is the wrong shape to be learning to read from.

The teen measure was also **38ch**, which is a caption width: a paragraph set
that narrow breaks every second line and reads as a column of fragments. It is
58ch now.

---

## One accent, one celebration

**Gold was the background noise rather than the accent.** The senior dashboard
had five identical solid gold buttons on one screen, one per subject card plus
the recommended action. Four subject cards are things you chose to look at and
get an outline; the one recommendation keeps the gold. Gold now appears twice
on that page, which is what an accent is.

**The greeting emphasised one word**: "What do you want to *learn* today?",
bold on the only word in the sentence carrying no information. The line says
what it says.

**There is now exactly one piece of decorative motion in the platform**, and
it fires when a badge is earned: marks that fall once and stop. An interface
where every card fades and slides in has spent its attention budget before the
child has earned anything, so all of it is saved for the one moment that is
genuinely an event. It is off entirely under `prefers-reduced-motion`, and the
banner still says what was won in words.

What is stored for it is only *whether the confetti has been seen*, never the
award. The badges are still derived from attempts and cannot be lost; the worst
case if that key is cleared is one celebration replayed.

**Pressing now does something in every tier.** Hover was added everywhere
after the laptop pass and pressing was left out, which leaves a phone with no
feedback at all: there is no hover on touch, so a tap on a card produced
nothing until the next screen arrived. On a slow connection that is
indistinguishable from a dead control, and the second tap is the one that
double-fires.

---

## More faults found by looking

| Fault | Cause |
|---|---|
| Two speaker buttons side by side, one of which turned the other on | A "read this page" action and a voice on/off preference, drawn with the same speaker at the same size. With the voice off the pair read as one control rendered twice. The action stays in the header; the preference moved to the grown up's screen |
| Pressing "read this page" with the voice off did nothing at all | `say()` checked the preference before speaking, so it refused a direct request. A tap is not a preference, so `asked: true` speaks regardless |
| Five of nine JHS subjects drew the same book | `artFor` had no case for Computing, Career Technology, French or Ghanaian Language, so they fell through to the fallback. Three new drawings, and the two copies of that function that had already drifted apart are now one file |
| The crossed spanner and screwdriver were a grey smudge at 40px | One tool with a strong silhouette beats two that are individually correct and jointly illegible. It is a hammer |
| The grown up's icon read as a scribble | Two thick stroked arcs merged with the two heads. Filled silhouettes instead |
| A parent with four children got a page blank from the middle down | "Worth a look" is short by design, and the table sat inside the right column. It spans both now |
| The senior drawer could only be closed by tapping the page it was covering | The rail covered the burger and the scrim covered everything else. A close button inside it, and Escape |
| Adding that button spread `NEXA EDU` across the whole drawer | Making the brand row a flex container turned the wordmark's three pieces into three separate flex items |
| The celebration banner's own text was invisible | I lightened `.kid-banner`'s background for the won state and left its `color: #fff`, so "You got First Steps" sat white on pale gold at about 1.3:1. The one sentence saying what the child had won was the least readable thing on the screen. The contrast sweep skips gradients, so this came from looking |

---

---

## The fifth interface

The school console was the last page in the old language, and it had never been
looked at. It imported `nexaedu.css` and used `ne-` classes, so unifying the
four tiers had left it out: fifteen of its text colours measured around 3.1:1,
three of its labels were tracked capitals, nothing used the serif voice, three
controls were 27px tall, and every class card carried a blue rail in a palette
where blue means information and never brand.

It is on `tokens.css` now, sharing the parent tier's language. A head teacher
and a parent are reading the same kind of page about the same children: several
learners, checked between other things, where the useful answer is what to do
rather than what the average is. `school-console.css` adds only what a school
has that a family does not.

### Who is actually reading it

This was the thing that took three attempts, and the answer came from the
person who knows Ghanaian schools rather than from the code.

**A head teacher has already delegated the students.** A school with twenty
classes has hired somebody to know how Kofi Mensah is doing, and it is not the
head. Their questions are which classes are struggling and who is accountable
for them.

The first version listed every student inline: eight hundred rows for a real
school, where the four children who need something disappear into the other
seven hundred and ninety six. The second capped each class at three, which was
better and still wrong: the page was eleven screens, and most of it was detail
the reader had deliberately handed to somebody else.

The front page is now **one row per class** and carries no student names at
all: the class, its year, its teacher, how big it is, and one sentence about
how it is going. A whole school, 293 students across KG to SHS, is one screen.
Opening a class is where the students are, because that is the teacher's level.

That also removed a panel. "Worth a look" had sat above the list, and once a
class row carried its own status it was the same twenty sentences printed
twice, and it was the longer of the two. The one list is sorted so the classes
needing something are at the top.

### The line it exists for was a lie

Every class was read against `MATHS_JHS2`, the one course written out in full,
whatever the class was actually studying. So a Basic 5 class was told it had a
student stuck on "Ratio and proportion", a JHS 2 objective ten year olds have
never been taught, and nothing on the page told the reader it was nonsense.

This is the same bug that had already been fixed on the parent page, in the
second copy of the same function. The subject-art lookup had gone the same way.
The reading now lives in `roll.ts` and both pages call it, and the rule that
came out of it is written at the top of that file: **a thing two screens both
need to know is a module, not a function each of them happens to have.**

`roll.ts` also fixes the shape of the question. A class has no work of its own:
everything said about "JHS 2 A" is an aggregate of what its students did
individually, and a student may be sitting at a year that is not their class's
level. So the unit is the learner, always, and a class only aggregates.

### One sentence per class

"4 stuck on Adding and subtracting fractions" is something a head can act on
this week: reteach it, or ask the teacher why. A class average of 71% is
something nobody can do anything with.

A class where only one student is struggling does not get a shared difficulty,
because one student is a conversation rather than a change to the week's
teaching. It says "1 needs help" instead. A class with nothing wrong says
"Going fine" rather than nothing, because a row with no sentence in it reads as
a row that failed to load.

The flagged rows carry a mark as well as a tint, so they are still findable in
a grey print-out or by a colour blind head.

### Moving a student

New, and the reason it is worth naming: it changes the class and never the
student. Removed from every class, then added to the target, so a student who
had somehow ended up in two comes out of both. Verified end to end: moved
between classes, moved out entirely, and their six attempts and their year were
untouched throughout.

The control reads **Move** rather than the class it is already in. Showing the
current value printed the class name once per row, inside a page headed with
that same class name.

### Setup is not the front page

About sixty per cent of the old page was "Add a class" and "Add a teacher",
both permanently expanded. Adding a class happens twice a term. Both are behind
**Manage** now, and a student is no longer a name chip with their internal id
under it: `S1` is the one fact on that page that meant nothing to anybody
reading it.

### Faults found by looking, again

| Fault | Cause |
|---|---|
| "1 days" | No plural on the day count |
| Every row's move control said the class it was already in | The select showed its current value |
| A card said "nothing flagged" above a student whose row named a failing topic | One student never reached the two-student floor for a shared difficulty, and nothing else was said |
| "Open Manage" was bold text on nothing | `gd-bar-btn is-solid` is drawn white-on-dark for the top bar, so on a white card it disappeared |
| The Add a class panel grew a column of empty tint | A grid stretches its cells; the teacher panel is taller because it lists staff under it |
| The expander vanished once expanded, with no way back | The remaining count was computed from what was shown, so it hit zero the moment the card opened |
| "Needs a teacher" sat directly above "No teacher" on a phone | The status column and the teacher column saying the same thing, stacked |
| "KG 2" printed twice, one under the other | The year is printed under the class name, and a school that names a class exactly its year has already said it |

### And two more palette values

`--nx-ink-3` had been solved against the three papers and quietly failed on all
four soft tints, between 4.24 and 4.39. Then the same thing happened to
`--nx-green-text`, at 4.43:1, the first time a green control sat inside a red
warning card.

That is one mistake made twice, and the rule in `tokens.css` is now explicit:
**a colour does not stay in the family it was named for.** Every `-text` value
is solved against the hardest surface in the whole file rather than against its
own tint, with headroom so a rounding difference between two tools is never
what decides it.

The console reports **zero contrast failures**, no uppercase labels, no control
under 40px and no overflow, at 360px and 1280px, on both the school view and a
class, with Manage open and closed.

---

## Still not done

- **The cast is the ceiling.** This pass gave it one light source, radial
  volume, a specular highlight and cast shadows, and redrew the goat properly.
  That is most of the gap to the reference renders closed. The rest wants an
  illustrator, and swapping these for supplied files is one file rather than
  forty.
- **No screen reader pass.** The contrast and target work is measured; the
  announcement order is not.
- **The teen and scholar tiers still have no voice control**, which is right
  for a reader and wrong for a learner in those years with a reading
  difficulty.
- **The senior lesson leaves the dashboard** rather than reading inside it.
  It looks right and it is not a nested layout.
- **No dark mode.** The senior rail is dark; the product is not.
