/**
 * Stored lessons for Basic 1 Creative Arts.
 *
 * Written to be spoken to a six or seven year old. See `basic1-maths.ts`.
 *
 * ── Why these carry pictures now, when they used to carry none ─────────────
 *
 * This file used to say that drawing, singing and drama are done rather than
 * looked at, so a diagram of a child singing teaches nothing and four lessons
 * here had no figure at all. Half of that is still right: a picture of
 * somebody doing the activity would be decoration, and `taught.ts` makes
 * `figure` optional for exactly that reason.
 *
 * What it missed is that the thing worth drawing was never the activity. It
 * is the idea underneath: the remembered cup against the real one, how much
 * of the group you can still hear when you sing loudly against softly, where
 * two actors stand relative to the people watching, a pattern woven in
 * against a pattern stamped on. Those are shapes and positions, and they are
 * what each mechanism is actually about.
 *
 * Tables did not exist in the library when this file was written, which is
 * why it had none. The crafts lesson in particular was three different forms
 * described one after another inside a paragraph.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── drawing from observation ─────────────────────────────────────────────── */

teach({
  topicId: 'drawing-primary',
  source: 'WRITTEN',
  approved: true,

  why:
    'A friend asks you to draw the water pot by the door. '
    + 'You look at it once. Then you draw. '
    + 'What comes out is round and tall, like a pot in a picture book. '
    + 'The real pot is short and fat. '
    + 'Why did your hand draw the wrong pot?',

  idea:
    'When you draw something that is in front of you, you draw what you can '
    + 'see, not what you remember. Look at the thing, then look at your paper, '
    + 'then look at the thing again. Most of drawing is looking.',

  mechanism:
    'Your memory keeps a simple picture of things: a cup is a circle on a '
    + 'rectangle with a handle. The real cup in front of you is not that. It '
    + 'is wider than it is tall, or the handle is hidden behind it. Drawing '
    + 'from memory gives you the simple picture every time. Looking up again '
    + 'is what replaces the remembered shape with the real one.',

  recap:
    'A circle is round all the way round, like the top of a tin. '
    + 'A square has four sides and they are all the same length. '
    + 'A rectangle has four sides too, but two are long and two are short. '
    + 'A triangle has three sides. '
    + 'Those are the basic shapes. '
    + 'Look at a cup and you can see a circle at the top '
    + 'and a rectangle under it. '
    + 'Most things are a few of these shapes put together. '
    + 'Finding the shapes first makes the drawing easier.',

  method: [
    'Put the object where you can see all of it without moving.',
    'Look at it and ask: is it taller than it is wide, or wider than it is tall?',
    'Draw the big shape first, lightly, the whole size of it.',
    'Look again, then put in the parts inside that shape.',
    'Keep looking up. One look at the object for every line you draw.',
  ],

  worked: [
    {
      level: 1,
      ask: 'You are drawing a calabash. What do you do first?',
      steps: [
        'Look at it.',
        'It is wider than it is tall.',
        'So draw a wide round shape first, filling the paper.',
      ],
      answer: 'Draw the big wide shape before any detail.',
    },
    {
      level: 2,
      ask: 'Your drawing of a cup came out very tall and thin, but the cup is '
        + 'short and wide. What happened?',
      steps: [
        'You drew the cup you remember, not the cup on the table.',
        'The remembered cup is tall because most cups in pictures are.',
        'Measure by eye: is it taller than wide, or wider than tall?',
      ],
      answer: 'It was drawn from memory. Look again and compare the height to '
        + 'the width.',
    },
    {
      level: 3,
      ask: 'The handle of the cup is pointing away from you, so you can barely '
        + 'see it. Do you draw it big, the way it really is?',
      steps: [
        'The handle really is big. But you cannot see it from here.',
        'Drawing what is in your head instead of what you see is the mistake.',
        'Draw the small sliver you can actually see.',
      ],
      answer: 'No. Draw only what you can see from where you are sitting.',
    },
  ],

  traps: [
    {
      mistake: 'Drawing without looking up.',
      why: 'After the first glance you are drawing from memory, and memory '
        + 'gives the same simple shape every time.',
    },
    {
      mistake: 'Starting with the small details.',
      why: 'If the big shape is the wrong size, every detail inside it is '
        + 'wrong too. Big shape first, lightly.',
    },
    {
      mistake: 'Pressing hard at the start.',
      why: 'A heavy line cannot be corrected. Draw lightly until the shape is '
        + 'right, then go over it.',
    },
  ],

  extension:
    'Artists check proportion by holding a pencil at arm’s length and '
    + 'comparing lengths against it. You do not need that yet, but the habit '
    + 'behind it, comparing one part against another before drawing, is the '
    + 'same habit you are building now.',

  figure: {
    alt: 'Two drawings of a cup side by side. The remembered cup is tall '
      + 'and thin with a big round handle, and is marked as taller than it '
      + 'is wide. The real cup on the table is short and wide with only a '
      + 'sliver of handle showing, and is marked as wider than it is tall. '
      + 'Underneath, a note that memory gives the same shape every time, '
      + 'so look up again.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">The cup you remember, and the cup on the table</text>'
      + '<text x="160" y="66" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">from memory</text>'
      + '<rect x="120" y="86" width="80" height="140" stroke="#c8433a"/>'
      + '<path d="M 200 116 Q 248 156 200 196" stroke="#c8433a"/>'
      + '<line x1="120" y1="248" x2="200" y2="248" stroke="#c8433a" stroke-width="2"/>'
      + '<text x="160" y="272" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">taller than it is wide</text>'
      + '<text x="480" y="66" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">looking at it</text>'
      + '<rect x="396" y="150" width="168" height="76" stroke="#0f8a4d"/>'
      + '<path d="M 564 170 Q 578 188 564 206" stroke="#0f8a4d"/>'
      + '<line x1="396" y1="248" x2="564" y2="248" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="480" y="272" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">wider than it is tall</text>'
      + '<text x="320" y="326" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Memory gives the same simple shape every time.</text>'
      + '<text x="320" y="360" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">So look up again. Then again.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Drawing what you can see, instead of what you know is there',
    columns: ['What you know', 'What you can see from here', 'What you draw'],
    rows: [
      [
        'The cup has a big handle',
        'A thin sliver at the side',
        'The thin sliver',
      ],
      ['The cup is round at the top', 'A flat oval', 'The flat oval'],
      [
        'A plate is a circle',
        'A long thin shape, edge on',
        'The long thin shape',
      ],
      [
        'The table is a rectangle',
        'Wider at the front than the back',
        'Wider at the front',
      ],
    ],
    note: 'The middle column changes the moment you move your head. The '
      + 'first column never changes, which is exactly why it is no use to '
      + 'you.',
  }],

  questions: [
    {
      id: 'draw-1',
      ask: 'What should you draw first?',
      kind: 'choice',
      options: ['The small details', 'The big shape', 'The shadow'],
      answer: 'The big shape',
      teach: 'If the big shape is the wrong size, everything you put inside it '
        + 'is wrong too. Get the whole thing right first, lightly.',
      level: 1,
    },
    {
      id: 'draw-2',
      ask: 'Should you draw what you see, or what you know is there?',
      kind: 'choice',
      options: ['What I see', 'What I know is there'],
      answer: 'What I see',
      teach: 'A handle pointing away from you looks small from where you sit, '
        + 'so draw it small. Drawing what you know gives the remembered shape.',
      level: 2,
    },
    {
      id: 'draw-3',
      ask: 'Why draw lightly at the start?',
      kind: 'choice',
      options: [
        'So it can be corrected',
        'So it uses less pencil',
        'So it looks neat',
      ],
      answer: 'So it can be corrected',
      teach: 'The first shape is a guess you will adjust after looking again. '
        + 'A heavy line cannot be adjusted.',
      level: 2,
    },
  ],
})

/* ── colour ───────────────────────────────────────────────────────────────── */

teach({
  topicId: 'colour-primary',
  source: 'WRITTEN',
  approved: true,

  why:
    'You want to paint a green leaf. '
    + 'You open the paint box. '
    + 'There is red. There is yellow. There is blue. '
    + 'There is no green. '
    + 'What do you do?',

  idea:
    'Three colours cannot be made by mixing: red, yellow and blue. Everything '
    + 'else can. Mix red and yellow and you get orange. Yellow and blue gives '
    + 'green. Blue and red gives purple. The first three are called primary, '
    + 'and the ones you mix from them are called secondary.',

  mechanism:
    'Mixing takes colour away. '
    + 'It does not add it. '
    + 'Light falls on the paint. '
    + 'The paint keeps some of that light back. '
    + 'It lets the rest come back to your eye. '
    + 'Put two paints together and they keep back more '
    + 'than one did alone. '
    + 'So a mixture is always darker than the paints that went into it. '
    + 'Mix all of them and you get mud, not a bright new colour.',

  recap:
    'A colour is what you see when light comes back off a thing '
    + 'to your eye. '
    + 'The leaf is green. The sun is yellow. Blood is red. '
    + 'You can point at a colour and say its name. '
    + 'This lesson asks a new question. '
    + 'Which colours come from which?',

  method: [
    'Decide which colour you want.',
    'Ask which two primaries are closest to it.',
    'Start with the lighter paint and add the darker one a little at a time.',
    'Stir and look. Stop when it is right.',
    'To make it paler add white, not water.',
  ],

  worked: [
    {
      level: 1,
      ask: 'You need green and you have no green paint. What do you mix?',
      steps: [
        'Green is a secondary colour, so two primaries make it.',
        'Yellow and blue.',
      ],
      answer: 'Yellow and blue.',
    },
    {
      level: 2,
      ask: 'You mixed yellow and blue but it came out very dark. What went '
        + 'wrong?',
      steps: [
        'Blue is much stronger than yellow.',
        'Too much blue went in at once.',
        'Start with yellow and add blue a little at a time.',
      ],
      answer: 'Too much blue. Start with the lighter colour and add the '
        + 'darker one slowly.',
    },
    {
      level: 3,
      ask: 'A child mixes all three primaries together hoping for a bright '
        + 'colour. What will happen and why?',
      steps: [
        'Each paint keeps back part of the light.',
        'All three together keep back nearly all of it.',
        'So almost no light comes back to your eye.',
      ],
      answer: 'A dull brown or grey. Mixing takes light away, it does not add '
        + 'any.',
    },
  ],

  traps: [
    {
      mistake: 'Adding water to make a colour lighter.',
      why: 'Water makes it thin and runny, not pale. White paint makes it '
        + 'pale.',
    },
    {
      mistake: 'Putting the dark colour in first.',
      why: 'A little dark overpowers a lot of light. Start light, add dark '
        + 'slowly.',
    },
    {
      mistake: 'Expecting mixtures to get brighter.',
      why: 'Every mixture is duller than what went into it. If you need '
        + 'bright, use a colour straight from the tin.',
    },
  ],

  extension:
    'Colours opposite each other on the wheel, like blue and orange, are '
    + 'called complementary. Put side by side each one looks stronger, which '
    + 'is why kente and adinkra cloth often place them next to each other.',

  figure: {
    alt: 'A colour wheel showing red, yellow and blue as primary colours with '
      + 'orange, green and purple mixed between each pair',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="320" y="36" text-anchor="middle" font-size="17" fill="currentColor">Three you cannot mix, three you can</text>'
      /* primaries */
      + '<circle cx="320" cy="120" r="34" fill="#d62828"/>'
      + '<circle cx="222" cy="290" r="34" fill="#1d4ed8"/>'
      + '<circle cx="418" cy="290" r="34" fill="#f2c200"/>'
      /* secondaries, between each pair */
      + '<circle cx="271" cy="205" r="28" fill="#7b2d8f"/>'
      + '<circle cx="369" cy="205" r="28" fill="#f07818"/>'
      + '<circle cx="320" cy="290" r="28" fill="#2f9e44"/>'
      /* joining lines */
      + '<g stroke="currentColor" stroke-width="1.6" opacity="0.5">'
      + '<path d="M300 148 L288 180"/><path d="M243 262 L256 230"/>'
      + '<path d="M340 148 L352 180"/><path d="M397 262 L384 230"/>'
      + '<path d="M256 290 L292 290"/><path d="M384 290 L348 290"/>'
      + '</g>'
      + '<g font-size="15" fill="currentColor" text-anchor="middle">'
      + '<text x="320" y="72">red</text>'
      + '<text x="190" y="346">blue</text>'
      + '<text x="450" y="346">yellow</text>'
      + '</g>'
      + '<g font-size="14" fill="#0f8a4d" text-anchor="middle">'
      + '<text x="232" y="208">purple</text>'
      + '<text x="412" y="208">orange</text>'
      + '<text x="320" y="338">green</text>'
      + '</g>'
      + '<text x="320" y="382" text-anchor="middle" font-size="14" fill="#c8433a">Every mixture is duller than what went into it.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'col-1',
      ask: 'Which two colours make green?',
      kind: 'choice',
      options: ['Red and yellow', 'Yellow and blue', 'Red and blue'],
      answer: 'Yellow and blue',
      teach: 'Yellow and blue make green. Red and yellow give orange, and red '
        + 'and blue give purple.',
      level: 1,
    },
    {
      id: 'col-2',
      ask: 'How many primary colours are there?',
      kind: 'numeric',
      answer: '3',
      accept: ['three'],
      teach: 'Three: red, yellow and blue. They are the ones no mixing can '
        + 'produce, which is why everything starts from them.',
      level: 1,
    },
    {
      id: 'col-3',
      ask: 'What do you add to make a colour paler?',
      kind: 'choice',
      options: ['Water', 'White paint', 'More of the same colour'],
      answer: 'White paint',
      teach: 'Water makes paint thin and runny but not pale. White is what '
        + 'lightens it.',
      level: 2,
    },
  ],
})

/* ── Ghanaian crafts ──────────────────────────────────────────────────────── */

teach({
  topicId: 'ghanaian-crafts',
  source: 'WRITTEN',
  approved: true,

  why:
    'At a funeral everybody is in cloth. '
    + 'One woman wears cloth with black shapes stamped on it. '
    + 'The man beside her wears cloth '
    + 'where the pattern is in the weave. '
    + 'The two were not made the same way. '
    + 'How was each one made?',

  idea:
    'Ghana has crafts that have been made here for a very long time. Kente, '
    + 'adinkra cloth and pottery are three of them, and each one is made in '
    + 'a completely different way.',

  mechanism:
    'These are not only decoration. An adinkra symbol is a saying with a '
    + 'picture: it was made so that something could be said without words, on '
    + 'cloth anyone could read. A kente pattern can say which family or '
    + 'occasion the cloth is for. So the craft carries meaning, and that is '
    + 'why the patterns were kept and passed on rather than changed freely.',

  recap:
    'Cloth is made from thread. '
    + 'Thread can be woven. '
    + 'That means passing one thread over and under others '
    + 'until a sheet is made. '
    + 'Cloth can also be printed. '
    + 'That means pressing a pattern on top of it after it is woven. '
    + 'Pottery is different. '
    + 'It is clay shaped by hand, then put in heat until it is hard. '
    + 'Those three ways of making a thing '
    + 'are what this lesson is about.',

  method: [
    'Look at the piece and ask how it was made: woven, printed or shaped?',
    'Find the pattern, and ask whether it is part of the material or sitting '
      + 'on top of it.',
    'Then ask what it says, because most of these patterns mean something.',
  ],

  worked: [
    {
      level: 1,
      ask: 'How is kente made?',
      steps: [
        'Look for threads crossing over and under each other.',
        'It is woven, in narrow strips.',
        'The strips are then sewn edge to edge to make a wide cloth.',
      ],
      answer: 'It is woven in strips, then the strips are sewn together.',
    },
    {
      level: 2,
      ask: 'What is the difference between how kente and adinkra get their '
        + 'patterns?',
      steps: [
        'Kente’s pattern is made as the cloth is made, out of the threads '
          + 'themselves.',
        'Adinkra’s pattern is stamped onto cloth that already exists.',
      ],
      answer: 'Kente is patterned while it is woven. Adinkra is printed after.',
    },
    {
      level: 3,
      ask: 'Why do adinkra symbols have names and meanings?',
      steps: [
        'They were made to carry a saying, not just to look well.',
        'A person wearing the cloth is saying something by wearing it.',
        'So each stamp is a message anyone who knows it can read.',
      ],
      answer: 'Because the cloth is meant to say something without words.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking all patterned Ghanaian cloth is kente.',
      why: 'Kente is woven. Adinkra is printed. Looking at how the pattern got '
        + 'there tells you which.',
    },
    {
      mistake: 'Treating the symbols as decoration only.',
      why: 'Each adinkra symbol has a name and a saying behind it. Using one '
        + 'without knowing it can say something you did not mean.',
    },
    {
      mistake: 'Thinking these crafts are old and finished.',
      why: 'They are still made and still worn today, by weavers and printers '
        + 'working now.',
    },
  ],

  extension:
    'Different regions are known for different crafts, and the materials come '
    + 'from what is nearby: clay from the riverbank, dye from bark. Looking at '
    + 'what a craft is made of usually tells you where it came from.',

  figure: {
    alt: 'Two panels. The first, kente woven in, shows threads crossing '
      + 'over and under each other, with a note that the pattern is made '
      + 'of the threads themselves. The second, adinkra stamped on, shows '
      + 'a stamp above a piece of finished cloth that already carries '
      + 'marks, with an arrow pressing down, and a note that the stamp '
      + 'goes onto cloth that already exists. Underneath, a note that each '
      + 'adinkra stamp has a name and a saying behind it.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Woven in, or stamped on</text>'
      + '<rect x="20" y="48" width="290" height="226" stroke="#0f8a4d"/>'
      + '<text x="165" y="78" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">kente: woven in</text>'
      + '<line x1="60" y1="100" x2="60" y2="196" stroke-width="5"/>'
      + '<line x1="90" y1="100" x2="90" y2="196" stroke-width="5"/>'
      + '<line x1="120" y1="100" x2="120" y2="196" stroke-width="5"/>'
      + '<line x1="150" y1="100" x2="150" y2="196" stroke-width="5"/>'
      + '<line x1="180" y1="100" x2="180" y2="196" stroke-width="5"/>'
      + '<line x1="210" y1="100" x2="210" y2="196" stroke-width="5"/>'
      + '<line x1="240" y1="100" x2="240" y2="196" stroke-width="5"/>'
      + '<line x1="270" y1="100" x2="270" y2="196" stroke-width="5"/>'
      + '<line x1="46" y1="118" x2="284" y2="118" stroke="#0f8a4d" stroke-width="5"/>'
      + '<line x1="46" y1="142" x2="284" y2="142" stroke-width="5"/>'
      + '<line x1="46" y1="166" x2="284" y2="166" stroke="#0f8a4d" stroke-width="5"/>'
      + '<line x1="46" y1="190" x2="284" y2="190" stroke-width="5"/>'
      + '<text x="165" y="230" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">the pattern is made of</text>'
      + '<text x="165" y="254" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">the threads themselves</text>'
      + '<rect x="330" y="48" width="290" height="226" stroke="#0f8a4d"/>'
      + '<text x="475" y="78" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">adinkra: stamped on</text>'
      + '<rect x="440" y="94" width="70" height="32"/>'
      + '<text x="475" y="116" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">stamp</text>'
      + '<line x1="475" y1="130" x2="475" y2="140" stroke="#0f8a4d"/>'
      + '<polygon points="475,152 467,134 483,134" fill="#0f8a4d" stroke="none"/>'
      + '<rect x="360" y="158" width="230" height="58"/>'
      + '<circle cx="392" cy="187" r="11" stroke="#0f8a4d"/>'
      + '<rect x="424" y="176" width="22" height="22" stroke="#0f8a4d"/>'
      + '<circle cx="552" cy="187" r="11" stroke="#0f8a4d"/>'
      + '<text x="475" y="238" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">the stamp is pressed onto</text>'
      + '<text x="475" y="262" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">cloth that already exists</text>'
      + '<text x="320" y="320" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Each adinkra stamp has a name</text>'
      + '<text x="320" y="348" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">and a saying behind it.</text>'
      + '<text x="320" y="382" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">So the cloth speaks without words.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Three Ghanaian crafts, and where each one gets its pattern',
    columns: [
      'Craft',
      'Made from',
      'How it is made',
      'Where the pattern comes from',
    ],
    rows: [
      [
        'Kente',
        'Thread',
        'Woven in narrow strips, then sewn',
        'Woven in, as the cloth is made',
      ],
      [
        'Adinkra',
        'Cloth and dye',
        'Stamps pressed on finished cloth',
        'Stamped on afterwards',
      ],
      [
        'Pottery',
        'Clay',
        'Shaped by hand, then fired',
        'Pressed into the clay while it is wet',
      ],
    ],
  }],

  questions: [
    {
      id: 'craft-1',
      ask: 'How does kente get its pattern?',
      kind: 'choice',
      options: ['It is stamped on', 'It is woven in', 'It is painted on'],
      answer: 'It is woven in',
      teach: 'The pattern is made out of the threads as the cloth is woven. '
        + 'Stamping is how adinkra gets its pattern.',
      level: 1,
    },
    {
      id: 'craft-2',
      ask: 'What does an adinkra symbol carry besides its shape?',
      kind: 'choice',
      options: ['A meaning', 'A price', 'A date'],
      answer: 'A meaning',
      teach: 'Each symbol stands for a saying, so the cloth says something to '
        + 'anyone who knows the symbols.',
      level: 2,
    },
    {
      id: 'craft-3',
      ask: 'Pottery is made from what?',
      kind: 'choice',
      options: ['Clay', 'Thread', 'Paper'],
      answer: 'Clay',
      teach: 'Clay, shaped by hand and then fired to harden it. Thread is for '
        + 'weaving.',
      level: 1,
    },
  ],
})

/* ── weaving and modelling ────────────────────────────────────────────────── */

teach({
  topicId: 'weaving-modelling',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Weaving is making one thing out of many strips by passing them over and '
    + 'under each other. Modelling is making a shape out of clay with your '
    + 'hands. Both turn something floppy or soft into something that holds '
    + 'together.',

  mechanism:
    'In weaving, what holds it together is the over and under. Every strip is '
    + 'held by the ones crossing it, so none can slide out, and the whole '
    + 'sheet becomes stronger than any single strip. If you pass two strips '
    + 'over in a row the pattern loosens, because that crossing is missing. '
    + 'In clay, what holds it together is pressure: squeezing the air out so '
    + 'the piece does not crack when it dries.',

  recap:
    'Over and under is a pattern that repeats. If you can keep a repeating '
    + 'pattern going without losing your place, you can weave.',

  method: [
    'For weaving: lay your strips side by side going one way. These stay still.',
    'Take a new strip and pass it over one, under the next, over, under, to '
      + 'the end.',
    'The next strip starts the opposite way: under, over, under, over.',
    'Push each new strip up close against the last one.',
    'For clay: squeeze it well first to push the air out, then shape it.',
  ],

  worked: [
    {
      level: 1,
      ask: 'You are weaving paper. The first strip went over, under, over, '
        + 'under. How does the next one start?',
      steps: [
        'The next row must be the opposite.',
        'So it starts under instead of over.',
      ],
      answer: 'Under, over, under, over.',
    },
    {
      level: 2,
      ask: 'Your weaving has a loose gap in the middle. What went wrong?',
      steps: [
        'A gap means a strip is not being held.',
        'That happens when two strips were passed the same way in a row.',
        'Find where the over, under pattern breaks.',
      ],
      answer: 'The over and under pattern was broken, so nothing is holding '
        + 'that strip.',
    },
    {
      level: 3,
      ask: 'Your clay pot cracked while it was drying. Why?',
      steps: [
        'Air trapped inside has nowhere to go as the clay dries and shrinks.',
        'The clay pulls apart where the air pocket is.',
        'Squeezing the clay thoroughly before shaping pushes the air out.',
      ],
      answer: 'Air was trapped in the clay. Squeeze it out before shaping.',
    },
  ],

  traps: [
    {
      mistake: 'Losing the over and under pattern halfway.',
      why: 'The crossing is what holds the strips. Miss one and the weave '
        + 'goes loose there.',
    },
    {
      mistake: 'Leaving gaps between the strips.',
      why: 'Push each strip up against the last. Gaps make the sheet weak and '
        + 'untidy.',
    },
    {
      mistake: 'Shaping clay before squeezing the air out.',
      why: 'Trapped air cracks the piece as it dries. Squeeze first, shape '
        + 'second.',
    },
  ],

  extension:
    'The same over and under is what a kente weaver does on a loom, with '
    + 'thread instead of paper and a frame to hold the still strips tight. The '
    + 'loom is a tool for doing exactly what your fingers are doing now, only '
    + 'faster and more evenly.',

  figure: {
    alt: 'A woven grid showing strips passing over and under each other, with '
      + 'one row where the pattern is broken and a gap has opened',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="320" y="38" text-anchor="middle" font-size="17" fill="currentColor">Over, under, over, under</text>'
      /* upright strips */
      + '<g fill="none" stroke="currentColor" stroke-width="2.5">'
      + '<rect x="120" y="64" width="34" height="250"/>'
      + '<rect x="174" y="64" width="34" height="250"/>'
      + '<rect x="228" y="64" width="34" height="250"/>'
      + '<rect x="282" y="64" width="34" height="250"/>'
      + '<rect x="336" y="64" width="34" height="250"/>'
      + '</g>'
      /* horizontal strips, drawn in segments so they appear to pass over and under */
      + '<g fill="#0f8a4d">'
      /* row 1: over 1st, under 2nd, over 3rd, under 4th, over 5th */
      + '<rect x="120" y="92" width="34" height="30"/><rect x="228" y="92" width="34" height="30"/><rect x="336" y="92" width="34" height="30"/>'
      + '<rect x="154" y="92" width="20" height="30" opacity="0.25"/><rect x="208" y="92" width="20" height="30" opacity="0.25"/>'
      + '<rect x="262" y="92" width="20" height="30" opacity="0.25"/><rect x="316" y="92" width="20" height="30" opacity="0.25"/>'
      /* row 2: the opposite */
      + '<rect x="174" y="152" width="34" height="30"/><rect x="282" y="152" width="34" height="30"/>'
      + '<rect x="154" y="152" width="20" height="30" opacity="0.25"/><rect x="208" y="152" width="20" height="30" opacity="0.25"/>'
      + '<rect x="262" y="152" width="20" height="30" opacity="0.25"/><rect x="316" y="152" width="20" height="30" opacity="0.25"/>'
      + '</g>'
      /* row 3: broken pattern */
      + '<g fill="#c8433a">'
      + '<rect x="120" y="212" width="34" height="30"/><rect x="174" y="212" width="34" height="30"/>'
      + '<rect x="336" y="212" width="34" height="30"/>'
      + '</g>'
      + '<text x="420" y="112" font-size="15" fill="#0f8a4d">held on both sides</text>'
      + '<text x="420" y="172" font-size="15" fill="#0f8a4d">opposite of the row above</text>'
      + '<text x="420" y="232" font-size="15" fill="#c8433a">two the same: it goes loose</text>'
      + '<text x="320" y="362" text-anchor="middle" font-size="15" fill="currentColor">Each strip is held by the ones crossing it.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'weave-1',
      ask: 'If one row goes over, under, over, how does the next row start?',
      kind: 'choice',
      options: ['Over', 'Under', 'Either'],
      answer: 'Under',
      teach: 'Each row is the opposite of the one above, which is what locks '
        + 'the strips in place.',
      level: 1,
    },
    {
      id: 'weave-2',
      ask: 'What holds a weave together?',
      kind: 'choice',
      options: ['Glue', 'The strips crossing over and under', 'Knots'],
      answer: 'The strips crossing over and under',
      teach: 'Every strip is trapped by the ones crossing it. That is why '
        + 'breaking the pattern makes a loose patch.',
      level: 2,
    },
    {
      id: 'weave-3',
      ask: 'Why squeeze clay before shaping it?',
      kind: 'choice',
      options: ['To warm it', 'To push the air out', 'To make it wet'],
      answer: 'To push the air out',
      teach: 'Trapped air has nowhere to go as the clay dries and shrinks, so '
        + 'the piece cracks there.',
      level: 2,
    },
  ],
})

/* ── rhythm and beat ──────────────────────────────────────────────────────── */

teach({
  topicId: 'rhythm-primary',
  source: 'WRITTEN',
  approved: true,

  why:
    'Four people are drumming at a funeral. '
    + 'Each one is hitting a different pattern. '
    + 'It should sound like a mess. '
    + 'It does not. '
    + 'It sounds like one thing. '
    + 'What are all four of them holding on to?',

  notation:
    'Players count the beat out loud: one, two, three, four. '
    + 'Then they start again at one. '
    + 'One run of four counts is called a bar. '
    + 'A count where you clap is a beat you play. '
    + 'A count where you stay silent is called a rest. '
    + 'The commonest mistake is to stop counting on a rest. '
    + 'Keep the foot going right through it.',

  idea:
    'The beat is the steady pulse underneath music, like a heart. It does not '
    + 'change. The rhythm is the pattern of claps on top of it, and it can be '
    + 'fast or slow, long or short. You keep the beat with your feet and play '
    + 'the rhythm with your hands.',

  mechanism:
    'The beat is what lets many people play together. '
    + 'Each person can play a different rhythm. '
    + 'It all fits because everybody is counting '
    + 'the same steady pulse underneath. '
    + 'So a drummer who loses the beat breaks the whole group. '
    + 'A drummer who plays a different rhythm does not. '
    + 'The pulse is shared. '
    + 'The pattern is yours.',

  recap:
    'Clap once for every step you take while walking. That is you keeping a '
    + 'beat already, without being taught.',

  method: [
    'Find the beat first. Tap your foot and keep it steady.',
    'Count it out loud: one, two, three, four, over and over.',
    'Now clap only on the counts you want. That is your rhythm.',
    'Keep the foot going the whole time, even when your hands rest.',
    'To copy a rhythm, listen once for the beat and once for the pattern.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Your foot taps one, two, three, four. Clap on one and three.',
      steps: [
        'Keep the foot going on all four.',
        'Hands only on one and three.',
      ],
      answer: 'Clap, rest, clap, rest, over and over.',
    },
    {
      level: 2,
      ask: 'Somebody claps a pattern and you clap it back wrongly. What should '
        + 'you listen for the second time?',
      steps: [
        'First find the beat underneath, not the claps.',
        'Then count which beats the claps land on.',
        'Copy the positions, not the sound.',
      ],
      answer: 'Find the steady beat first, then which beats the claps fall on.',
    },
    {
      level: 3,
      ask: 'Two drummers play different patterns and it still sounds right. '
        + 'How?',
      steps: [
        'They are not playing the same rhythm.',
        'But they are counting the same beat underneath.',
        'So their patterns line up at the same points.',
      ],
      answer: 'They share the beat even though their rhythms differ.',
    },
  ],

  traps: [
    {
      mistake: 'Speeding up when the rhythm gets exciting.',
      why: 'The beat must stay steady. If it moves, nobody can play with you.',
    },
    {
      mistake: 'Stopping your foot when your hands rest.',
      why: 'The beat carries on through the rests. That is how you come back '
        + 'in at the right moment.',
    },
    {
      mistake: 'Copying the sound instead of the pattern.',
      why: 'Listen for which beats the claps land on, not for how loud they '
        + 'were.',
    },
  ],

  extension:
    'Ghanaian drumming often has several patterns at once, each on a different '
    + 'drum, all over one shared beat. That is called polyrhythm, and it is '
    + 'the same idea you are using when two of you clap different patterns '
    + 'together.',

  figure: {
    alt: 'Four steady beats shown as evenly spaced marks, with claps placed on '
      + 'the first and third, and the foot tapping on all four',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="320" y="42" text-anchor="middle" font-size="17" fill="currentColor">The beat stays. The rhythm sits on top.</text>'
      + '<text x="50" y="118" font-size="16" fill="currentColor">beat</text>'
      + '<g stroke="currentColor" stroke-width="3">'
      + '<path d="M150 90v40M270 90v40M390 90v40M510 90v40"/>'
      + '<path d="M140 110h380" stroke-width="1.5"/>'
      + '</g>'
      + '<g font-size="16" fill="currentColor" text-anchor="middle">'
      + '<text x="150" y="158">1</text><text x="270" y="158">2</text>'
      + '<text x="390" y="158">3</text><text x="510" y="158">4</text>'
      + '</g>'
      + '<text x="50" y="238" font-size="16" fill="#0f8a4d">claps</text>'
      + '<g fill="#0f8a4d">'
      + '<circle cx="150" cy="230" r="17"/><circle cx="390" cy="230" r="17"/>'
      + '</g>'
      + '<g fill="none" stroke="#0f8a4d" stroke-width="2.5" stroke-dasharray="5 5">'
      + '<circle cx="270" cy="230" r="17"/><circle cx="510" cy="230" r="17"/>'
      + '</g>'
      + '<text x="270" y="272" text-anchor="middle" font-size="14" fill="#0f8a4d">rest</text>'
      + '<text x="510" y="272" text-anchor="middle" font-size="14" fill="#0f8a4d">rest</text>'
      + '<text x="50" y="330" font-size="16" fill="currentColor">foot</text>'
      + '<g fill="currentColor">'
      + '<circle cx="150" cy="322" r="9"/><circle cx="270" cy="322" r="9"/>'
      + '<circle cx="390" cy="322" r="9"/><circle cx="510" cy="322" r="9"/>'
      + '</g>'
      + '<text x="320" y="372" text-anchor="middle" font-size="15" fill="#c8433a">The foot keeps going through the rests.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'rhy-1',
      ask: 'Which one stays steady and never changes?',
      kind: 'choice',
      options: ['The beat', 'The rhythm'],
      answer: 'The beat',
      teach: 'The beat is the pulse underneath. The rhythm is the pattern you '
        + 'clap on top of it, and that can change.',
      level: 1,
    },
    {
      id: 'rhy-2',
      ask: 'Should your foot stop when your hands rest?',
      kind: 'choice',
      options: ['Yes', 'No'],
      answer: 'No',
      teach: 'The beat carries on through the rests, and that is how you know '
        + 'when to come back in.',
      level: 2,
    },
    {
      id: 'rhy-3',
      ask: 'How can two drummers play different patterns and still fit?',
      kind: 'choice',
      options: [
        'They share the same beat',
        'They take turns',
        'They play very quietly',
      ],
      answer: 'They share the same beat',
      teach: 'Different rhythms over one shared pulse is exactly how Ghanaian '
        + 'drumming is built.',
      level: 3,
    },
  ],
})

/* ── singing together ─────────────────────────────────────────────────────── */

teach({
  topicId: 'singing-primary',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Singing together is not the same as singing loudly at the same time. You '
    + 'have to start together, keep the same speed, and sing the same notes. '
    + 'The most important thing is listening to the others while you sing.',

  mechanism:
    'When you sing you hear your own voice inside your head, much louder than '
    + 'you hear anyone else. So singing louder makes you hear the group less, '
    + 'and drift further from them. Singing a little softer lets you hear '
    + 'where everybody else is, which is the only way to match them. That is '
    + 'why good singers in a group are rarely the loudest.',

  recap:
    'You already keep a beat. A song has one too, and it is what stops the '
    + 'group drifting apart.',

  method: [
    'Listen to the starting note before you open your mouth.',
    'Breathe in at the same time as everyone else.',
    'Start on the same word.',
    'Sing a little softer than you can, so you can hear the others.',
    'Breathe where the others breathe, not in the middle of a word.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What should you do just before the group starts singing?',
      steps: [
        'Listen for the starting note.',
        'Breathe in with everyone else.',
      ],
      answer: 'Listen for the note and breathe in together.',
    },
    {
      level: 2,
      ask: 'You keep ending up ahead of everyone else. What should you change?',
      steps: [
        'Being ahead means you are not listening to them.',
        'Your own voice is drowning them out.',
        'Sing softer so you can hear where the group is.',
      ],
      answer: 'Sing more softly and listen to the others.',
    },
    {
      level: 3,
      ask: 'You are leading a verse and the others answer it. What is your job?',
      steps: [
        'Give them the speed and the note by how you sing yours.',
        'Finish your line cleanly so they know when to come in.',
        'Keep your speed the same for every verse.',
      ],
      answer: 'Set the note and the speed, and hand over clearly.',
    },
  ],

  traps: [
    {
      mistake: 'Singing as loudly as possible.',
      why: 'You stop hearing everybody else, and drift away from them.',
    },
    {
      mistake: 'Starting before the others.',
      why: 'Wait for the breath. Starting early pulls the whole group out of '
        + 'time.',
    },
    {
      mistake: 'Breathing in the middle of a word.',
      why: 'It breaks the word in half. Breathe at the end of a line, where '
        + 'the others do.',
    },
  ],

  extension:
    'Call and response, where one person sings a line and the group answers, '
    + 'is how a great many Ghanaian songs are built. It works because the '
    + 'leader hands the beat over at a fixed moment, so the group always knows '
    + 'exactly when to come in.',

  figure: {
    alt: 'Two panels, each with two bars showing how much you hear. When '
      + 'you sing loudly, the bar for your own voice is tall and the bar '
      + 'for the group is very short, and you cannot hear them. When you '
      + 'sing a little softer, the two bars are close to the same height, '
      + 'and now you can match them. Underneath, a note that your own '
      + 'voice is loudest inside your own head, so singing softer is the '
      + 'only way to hear where the group is.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Why the good singers are not the loudest</text>'
      + '<rect x="20" y="48" width="290" height="224" stroke="#c8433a"/>'
      + '<text x="165" y="78" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">you sing loudly</text>'
      + '<rect x="70" y="106" width="70" height="110" stroke="#c8433a"/>'
      + '<rect x="190" y="192" width="70" height="24"/>'
      + '<line x1="50" y1="216" x2="280" y2="216"/>'
      + '<text x="105" y="238" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">your voice</text>'
      + '<text x="225" y="238" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">the group</text>'
      + '<text x="165" y="262" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">you cannot hear them</text>'
      + '<rect x="330" y="48" width="290" height="224" stroke="#0f8a4d"/>'
      + '<text x="475" y="78" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">you sing a little softer</text>'
      + '<rect x="380" y="152" width="70" height="64" stroke="#0f8a4d"/>'
      + '<rect x="500" y="136" width="70" height="80"/>'
      + '<line x1="360" y1="216" x2="590" y2="216"/>'
      + '<text x="415" y="238" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">your voice</text>'
      + '<text x="535" y="238" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">the group</text>'
      + '<text x="475" y="262" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">now you can match them</text>'
      + '<text x="320" y="320" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Your own voice is loudest inside your own head.</text>'
      + '<text x="320" y="356" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">Softer is the only way to hear the group.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Five ways a group comes apart, and what each one sounds like',
    columns: ['What went wrong', 'What it sounds like', 'Who notices first'],
    rows: [
      [
        'One voice started early',
        'A single voice alone, then the rest',
        'Everybody',
      ],
      [
        'Somebody is too loud',
        'The group spreading out behind them',
        'Everybody but them',
      ],
      [
        'The starting note was missed',
        'Sour, with all the words right',
        'Anybody listening',
      ],
      [
        'Somebody breathed mid word',
        'A word broken in half',
        'The person beside them',
      ],
      [
        'The leader changed speed',
        'The answer coming in late',
        'The group answering',
      ],
    ],
    note: 'Read the last column. The one person who cannot hear the '
      + 'problem is usually the one causing it.',
  }],

  questions: [
    {
      id: 'sing-1',
      ask: 'Why sing a little softer in a group?',
      kind: 'choice',
      options: [
        'So you can hear the others',
        'To save your voice',
        'So nobody notices you',
      ],
      answer: 'So you can hear the others',
      teach: 'Your own voice is loudest inside your own head. Softer singing '
        + 'is how you hear the group and match it.',
      level: 2,
    },
    {
      id: 'sing-2',
      ask: 'When should you breathe?',
      kind: 'choice',
      options: ['Whenever you need to', 'At the end of a line', 'Never'],
      answer: 'At the end of a line',
      teach: 'Breathing mid word breaks the word. The end of a line is where '
        + 'the others breathe too.',
      level: 1,
    },
    {
      id: 'sing-3',
      ask: 'In call and response, what does the leader give the group?',
      kind: 'choice',
      options: ['The note and the speed', 'The words only', 'Nothing'],
      answer: 'The note and the speed',
      teach: 'The leader sets both by how they sing their line, and hands over '
        + 'at a fixed moment so the group knows when to answer.',
      level: 3,
    },
  ],
})

/* ── our instruments ──────────────────────────────────────────────────────── */

teach({
  topicId: 'local-instruments',
  source: 'WRITTEN',
  approved: true,

  why:
    'Somebody hits a drum and you hear it. '
    + 'Somebody shakes an axatse and you hear something else. '
    + 'Nobody touched your ears. '
    + 'The sound still got to them. '
    + 'What came across the room?',

  idea:
    'Instruments make sound in different ways. A drum is hit, and its skin '
    + 'shakes. A shaker like the axatse has seeds inside that knock against '
    + 'the shell. A flute is blown, and the air inside it shakes. A string is '
    + 'plucked. The way it makes the sound is how you group it.',

  mechanism:
    'Every sound is something shaking the air. What differs is what is doing '
    + 'the shaking: a skin, a seed, a column of air, or a string. That is why '
    + 'changing the thing that shakes changes the sound. Tightening a drum '
    + 'skin makes the note higher, because a tighter skin shakes faster, and '
    + 'the same is true of a tighter string.',

  recap:
    'A beat is a steady pulse, like the tick of a clock. '
    + 'Tap your foot at the same speed over and over. '
    + 'That is a beat. '
    + 'Clap along with your foot '
    + 'and you are playing to the beat. '
    + 'Most of these instruments are played to a beat. '
    + 'So keeping one is part of playing any of them.',

  method: [
    'Ask how the sound is made: hit, shaken, blown or plucked.',
    'Hit and shaken instruments mostly keep the rhythm.',
    'Blown and plucked ones mostly carry the tune.',
    'To change the note, change how tight the shaking part is.',
    'Listen before you play, so you come in on the beat.',
  ],

  worked: [
    {
      level: 1,
      ask: 'How does a drum make its sound?',
      steps: [
        'You hit the skin.',
        'The skin shakes, and the air around it shakes too.',
      ],
      answer: 'By being hit, which makes the skin shake.',
    },
    {
      level: 2,
      ask: 'Why does tightening a drum skin make a higher sound?',
      steps: [
        'A loose skin shakes slowly.',
        'A tight skin shakes faster.',
        'Faster shaking is a higher note.',
      ],
      answer: 'Because a tighter skin shakes faster, and faster is higher.',
    },
    {
      level: 3,
      ask: 'An axatse and a flute both make sound. What is shaking in each?',
      steps: [
        'In the axatse, the seeds knock the shell and the shell shakes.',
        'In the flute, nothing solid moves much. The air inside the tube '
          + 'shakes.',
      ],
      answer: 'A shell and seeds in one, a column of air in the other.',
    },
  ],

  traps: [
    {
      mistake: 'Hitting a drum as hard as possible.',
      why: 'Hard hitting gives a flat, dead sound and hurts your hands. The '
        + 'skin needs to be allowed to shake.',
    },
    {
      mistake: 'Grouping instruments by what they are made of.',
      why: 'Wood is used for drums and for flutes. Group them by how the '
        + 'sound is made instead.',
    },
    {
      mistake: 'Playing before you have found the beat.',
      why: 'Listen first. Coming in off the beat pulls the whole group out.',
    },
  ],

  extension:
    'The talking drum changes its note while it is being played, because '
    + 'squeezing the cords down its side tightens the skin. It can follow the '
    + 'rise and fall of speech closely enough to carry a message, which is '
    + 'where its name comes from.',

  figure: {
    alt: 'Four instruments grouped by how each makes its sound: hit, shaken, '
      + 'blown and plucked, with what shakes in each one named',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="320" y="38" text-anchor="middle" font-size="17" fill="currentColor">Grouped by how the sound is made</text>'
      + '<g fill="none" stroke="currentColor" stroke-width="3">'
      /* drum */
      + '<path d="M60 120h100l-14 130H74z"/><ellipse cx="110" cy="120" rx="50" ry="16"/>'
      /* shaker */
      + '<ellipse cx="250" cy="170" rx="34" ry="44"/><path d="M250 214v38"/>'
      /* flute */
      + '<rect x="360" y="150" width="130" height="26" rx="13"/>'
      + '<circle cx="396" cy="163" r="4"/><circle cx="420" cy="163" r="4"/><circle cx="444" cy="163" r="4"/>'
      /* string */
      + '<path d="M540 120v130"/><path d="M560 120v130"/><path d="M580 120v130"/>'
      + '<path d="M530 120h60M530 250h60"/>'
      + '</g>'
      + '<g fill="currentColor"><circle cx="242" cy="160" r="4"/><circle cx="256" cy="172" r="4"/><circle cx="248" cy="186" r="4"/></g>'
      + '<g font-size="16" fill="currentColor" text-anchor="middle">'
      + '<text x="110" y="286">drum</text><text x="250" y="286">axatse</text>'
      + '<text x="425" y="286">flute</text><text x="560" y="286">strings</text>'
      + '</g>'
      + '<g font-size="15" fill="#0f8a4d" text-anchor="middle">'
      + '<text x="110" y="314">hit</text><text x="250" y="314">shaken</text>'
      + '<text x="425" y="314">blown</text><text x="560" y="314">plucked</text>'
      + '<text x="110" y="340">the skin shakes</text><text x="250" y="340">seeds and shell</text>'
      + '<text x="425" y="340">the air inside</text><text x="560" y="340">the string</text>'
      + '</g>'
      + '<text x="320" y="382" text-anchor="middle" font-size="15" fill="currentColor">Tighter means faster shaking, which means a higher note.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'inst-1',
      ask: 'How is an axatse played?',
      kind: 'choice',
      options: ['It is blown', 'It is shaken', 'It is plucked'],
      answer: 'It is shaken',
      teach: 'Shaking makes the seeds knock against the shell, and the shell '
        + 'shakes the air.',
      level: 1,
    },
    {
      id: 'inst-2',
      ask: 'What makes the sound in a flute?',
      kind: 'choice',
      options: ['The wood', 'The air inside it', 'The holes'],
      answer: 'The air inside it',
      teach: 'Nothing solid moves much. It is the column of air inside the '
        + 'tube that shakes, which is why covering holes changes the note.',
      level: 2,
    },
    {
      id: 'inst-3',
      ask: 'Tightening a drum skin makes the note...',
      kind: 'choice',
      options: ['Higher', 'Lower', 'The same'],
      answer: 'Higher',
      teach: 'A tighter skin shakes faster, and faster shaking is a higher '
        + 'note. The same is true of a tighter string.',
      level: 2,
    },
  ],
})

/* ── drama ────────────────────────────────────────────────────────────────── */

teach({
  topicId: 'drama-primary',
  source: 'WRITTEN',
  approved: true,

  idea:
    'In a play you become somebody else for a little while. You say their '
    + 'words, you stand the way they would stand, and you do it loudly enough '
    + 'and clearly enough that people watching can follow the story.',

  mechanism:
    'A play is made for the people watching, not for the people in it. That '
    + 'single fact decides almost everything else about where you stand and '
    + 'how you speak. If the audience cannot hear or see it, it did not '
    + 'happen, however well you did it.',

  recap:
    'You already answer in full sentences and speak up so people can hear. A '
    + 'play asks for both, with more of each.',

  method: [
    'Learn what your character wants. That is what you are playing.',
    'Learn your words, and the word that comes just before yours, so you know '
      + 'when to speak.',
    'Face the audience, even when you talk to somebody on stage.',
    'Speak to the person furthest away.',
    'Stay in your part while others are speaking. You are still being watched.',
  ],

  worked: [
    {
      level: 1,
      ask: 'How do you know when it is your turn to speak?',
      steps: [
        'Learn the words that come just before yours.',
        'When you hear them, that is your signal.',
      ],
      answer: 'By the line that comes before yours.',
    },
    {
      level: 2,
      ask: 'You are talking to another character, so should you face them?',
      steps: [
        'Facing them completely turns your back on the audience.',
        'They cannot hear you or see your face.',
        'Turn partly towards them and partly outwards.',
      ],
      answer: 'Only partly. Stay open to the audience.',
    },
    {
      level: 3,
      ask: 'Somebody forgets their line. What do you do?',
      steps: [
        'Do not stop or laugh, because the play has not ended.',
        'Stay in your part.',
        'Say something your character would say to move it along, or quietly '
          + 'give them the first word.',
      ],
      answer: 'Stay in character and help the scene keep going.',
    },
  ],

  traps: [
    {
      mistake: 'Turning your back on the audience.',
      why: 'Stay partly facing out, even when you are speaking to somebody '
        + 'on stage with you.',
    },
    {
      mistake: 'Speaking at your normal volume.',
      why: 'Speak to the person furthest from you, and everybody in '
        + 'between will hear you as well.',
    },
    {
      mistake: 'Dropping out of your part when it is not your turn.',
      why: 'A moment of being yourself is the moment they stop believing '
        + 'the story.',
    },
  ],

  extension:
    'Many Ghanaian stories are told with the audience joining in, answering '
    + 'the storyteller or singing a line back. A play can invite that too, and '
    + 'when it does the audience stops being only watchers and becomes part of '
    + 'the telling.',

  figure: {
    alt: 'A stage seen from above, drawn twice, with the audience as a '
      + 'row of people along the bottom of each. In the first, two actors '
      + 'face each other directly, so both have their backs to the '
      + 'audience, and they cannot be heard. In the second, the two actors '
      + 'turn partly towards each other and partly out towards the '
      + 'audience, and they can be heard. Underneath, a note that if the '
      + 'audience cannot hear it or see it, it did not happen.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Where to stand, seen from above</text>'
      + '<rect x="20" y="46" width="290" height="222" stroke="#c8433a"/>'
      + '<text x="165" y="76" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">facing each other</text>'
      + '<circle cx="110" cy="136" r="24" stroke="#c8433a"/>'
      + '<line x1="134" y1="136" x2="154" y2="136" stroke="#c8433a"/>'
      + '<circle cx="220" cy="136" r="24" stroke="#c8433a"/>'
      + '<line x1="196" y1="136" x2="176" y2="136" stroke="#c8433a"/>'
      + '<line x1="46" y1="212" x2="284" y2="212" stroke-width="5"/>'
      + '<circle cx="100" cy="232" r="8"/>'
      + '<circle cx="165" cy="232" r="8"/>'
      + '<circle cx="230" cy="232" r="8"/>'
      + '<text x="165" y="258" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">the audience</text>'
      + '<rect x="330" y="46" width="290" height="222" stroke="#0f8a4d"/>'
      + '<text x="475" y="76" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">partly facing out</text>'
      + '<circle cx="420" cy="136" r="24" stroke="#0f8a4d"/>'
      + '<line x1="440" y1="150" x2="458" y2="162" stroke="#0f8a4d"/>'
      + '<circle cx="530" cy="136" r="24" stroke="#0f8a4d"/>'
      + '<line x1="510" y1="150" x2="492" y2="162" stroke="#0f8a4d"/>'
      + '<line x1="356" y1="212" x2="594" y2="212" stroke-width="5"/>'
      + '<circle cx="410" cy="232" r="8"/>'
      + '<circle cx="475" cy="232" r="8"/>'
      + '<circle cx="540" cy="232" r="8"/>'
      + '<text x="475" y="258" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">the audience</text>'
      + '<text x="165" y="296" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">they cannot hear you</text>'
      + '<text x="475" y="296" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">they can hear you</text>'
      + '<text x="320" y="344" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">If the audience cannot hear it or see it,</text>'
      + '<text x="320" y="374" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">it did not happen.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'One fact about a play, and the four rules that follow from it',
    columns: ['The rule', 'Why it follows', 'What happens if you break it'],
    rows: [
      [
        'Face partly outwards',
        'The audience is in front of you',
        'They cannot hear or see you',
      ],
      [
        'Speak to the person furthest away',
        'A room swallows a voice',
        'The back rows miss the story',
      ],
      [
        'Wait for the other person to finish',
        'Two voices at once are neither',
        'Both lines are lost',
      ],
      [
        'Stay in your part while silent',
        'They watch the whole stage',
        'They see a child, not your character',
      ],
    ],
    note: 'Every rule is the same fact in a different place. A play is '
      + 'made for the people watching, not the people in it.',
  }],

  questions: [
    {
      id: 'dra-1',
      ask: 'Who is a play made for?',
      kind: 'choice',
      options: ['The actors', 'The people watching', 'The teacher'],
      answer: 'The people watching',
      teach: 'That is why you face outwards and speak up. If the audience '
        + 'cannot hear it, it did not happen.',
      level: 1,
    },
    {
      id: 'dra-2',
      ask: 'How do you know when to say your line?',
      kind: 'choice',
      options: [
        'By the line before yours',
        'By counting',
        'When it feels right',
      ],
      answer: 'By the line before yours',
      teach: 'Learning the words just before yours is how you come in at the '
        + 'right moment every time.',
      level: 2,
    },
    {
      id: 'dra-3',
      ask: 'Another actor forgets their line. What should you do?',
      kind: 'choice',
      options: [
        'Laugh',
        'Stop the play',
        'Stay in character and keep it moving',
      ],
      answer: 'Stay in character and keep it moving',
      teach: 'The play has not ended. Staying in your part and helping the '
        + 'scene along is what keeps the story going for the audience.',
      level: 3,
    },
  ],
})
