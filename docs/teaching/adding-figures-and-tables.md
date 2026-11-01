# Adding figures and tables to lessons that have neither

A working brief for anybody, person or agent, picking up the backfill. It is
self contained: a session starts from the repository alone with no memory of
the last one.

## The problem this fixes

When this was written, 462 of 508 finished lessons were paragraphs and
nothing else. 46 figures in the whole library, and no tables at all. Every
creche, nursery and KG lesson, written for children who cannot read a word of
it, had no picture of any kind.

The machinery was never the problem. `Taught.figure` and `Taught.tables`
exist, `Illustration.tsx` and `Learn.tsx` render them, `cleanSvg` sanitises.
The lessons simply do not carry them. So this job adds content to lessons
that are otherwise finished, and changes nothing else about them.

## Scope, and the one hard boundary

Stages in this order:

1. `creche` (creche, nursery, KG 1, KG 2): 66 lessons, all at zero, and the
   only readers who cannot read. Highest value in the library.
2. `primary` (Basic 1 to 6): the Basic 4 to 6 files are the bare ones.
3. `jhs`.

**Do not touch SHS.** Another cloud routine is writing new SHS lessons on
this same branch, and it is under instruction to include figures and tables
in everything it writes. Editing SHS files here would collide with it. SHS
comes back into scope only when this brief says so.

Do not touch TVET or university: they are outlined and untaught by the
owner's decision.

Find what is left with:

    npx tsx scripts/coverage/visual-coverage.mts
    npx tsx scripts/coverage/visual-coverage.mts creche

The second form breaks a stage down by subject, so you can see which subject
is at zero. Take the subject with the most bare lessons first.

## Sharing the branch with another agent

Both routines commit to `nexaedu`. Before you start, and before every commit:

    git checkout nexaedu && git pull --rebase

If a rebase conflicts, the other agent's new lesson file wins: take theirs,
redo your edit on top, and carry on. Never force push. Commit and push each
block as you finish it so a run that is cut off loses only the block it was
inside.

Work in blocks of one file, or of eight to twelve lessons, whichever is
smaller.

## What to add

Open the lesson. Read its `idea` and `mechanism`. Ask two questions.

**Is any part of this describing a shape, a position, a layout, or a process
with stages?** That part wants a `figure`.

**Does any part list values, properties, differences, or forms?** That part
wants a table, and it should come OUT of the prose when it goes in. A table
that repeats a paragraph is worse than either alone, so delete the sentences
it replaces and leave the prose reading naturally without them.

A lesson may end up with both, one, or, rarely, neither. Neither is a real
answer for a topic that is genuinely all argument, for example a lesson on
why honesty matters. Do not invent a table of nothing to satisfy a counter.

### Figures

    figure: {
      alt: 'A full sentence saying what the drawing shows.',
      svg: '<svg viewBox="0 0 640 400">...</svg>',
    }

- Hand written SVG. No external images, no scripts, no fonts that may not be
  installed. The renderer strips anything executable, so a clever SVG simply
  does not appear.
- `viewBox="0 0 640 400"`, and no `width` or `height`, so it scales.
- `currentColor` for lines and text. One accent only where it earns it:
  `#0f8a4d` for the thing being taught, `#c8433a` for the thing warned
  against.
- Label the parts inside the drawing, in `<text>` elements. A diagram whose
  labels live in the prose is two things the learner has to join up.
- `alt` is a sentence, not a name. It is what a blind learner is given
  instead of the picture, so "A triangle with the base 8 cm and the
  perpendicular height 5 cm marked with a right angle" and never "triangle
  diagram".
- Keep it plain: lines, rectangles, circles, arrows, text. A drawing nobody
  can read at phone width has failed.

### For the youngest learners

Creche through KG is the one stage where the picture is the lesson. Those
children are read to while they look at something, so the figure has to carry
what a reader would take from the words: five mangoes to count, two shapes to
sort, a big circle beside a small one. Large, few lines, no small text, and
no detail that a four year old has to squint at. One idea per drawing.

### Tables

    tables: [{
      caption: 'What each soil type does with water',
      columns: ['Soil', 'Drainage', 'Holds nutrients', 'Best for'],
      rows: [
        ['Sandy', 'Very fast', 'Poorly', 'Cassava, groundnut'],
        ['Clay', 'Very slow', 'Well', 'Rice in valley bottoms'],
        ['Loam', 'Moderate', 'Well', 'Maize, vegetables'],
      ],
      note: 'Loam is the mixture, which is why it is the one farmers want.',
    }]

- At least two columns and two rows. One row is a sentence written sideways.
- Every row exactly as long as `columns`.
- The first column is what the row is about; it is rendered as the row
  heading.
- `caption` is required and is a sentence saying what the table shows. It is
  read aloud in place of the table to a learner who cannot see it, so never
  "Table 1".
- Cells are short, plain text. No markup.
- Four to six rows is usually right. Twenty rows is a reference sheet and
  belongs in `extension` or nowhere.

## House style

Unchanged from the lesson brief, and it still applies to anything you write,
including a caption and an `alt`:

- Never an em dash or an en dash. Commas, colons, or the word "to" for a
  range.
- Apostrophes are the typographic character, written directly inside single
  quoted strings. No escapes.
- Mathematics in words and plain ASCII, never LaTeX.
- Ghanaian context wherever it is natural.

## Checks that must pass before every commit

From the repository root:

1. `npx tsc -b` clean.
2. `npx eslint src/lib/education/library/lessons/` clean. Errors naming
   `scripts/coverage/*.mts` are expected and harmless.
3. `npx tsx scripts/coverage/address-check.mts` passing all four.
4. `npx tsx scripts/coverage/reading-level.mts` reporting zero year groups
   above expectation. Captions and alt text count as lesson text, so a long
   caption can push a stage over.
5. `npx tsx scripts/coverage/taught-coverage.mts` unchanged. This job adds
   nothing and removes nothing: if the count moves, you have broken a lesson.
6. `npx tsx scripts/coverage/visual-coverage.mts` to see your block land.

Never commit a secret. Check `git diff --cached` before each commit.

## Committing

One commit per block, on `nexaedu`, never on master. Plain prose naming what
was done, for example `KG 2 numeracy: figures for the counting lessons, nine
lessons`. Push after every commit.

No pull request, no merge to master, no deployment. Those belong to the
owner.

## Environment notes

Many source files are CRLF. A patch script must detect the line ending rather
than assume, `nl = '\r\n' if '\r\n' in s else '\n'`. Helper scripts stay
outside the repository.
