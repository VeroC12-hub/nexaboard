/**
 * Stored lessons for JHS 1 Career Technology.
 *
 * Written at about grade 6 to 7, with a `brief` form on every topic.
 *
 * ── A practical subject taught where the practical may not happen ──────────
 *
 * Career Technology is four trades in one subject: technical drawing, the
 * workshop, food, and textiles. A JHS 1 class may have no set of instruments,
 * no vice, no cooker and no sewing machine, and the examination still comes.
 *
 * So each lesson here teaches the rule that holds whether or not the tool is
 * in the room, and says plainly what it is standing in for. A learner can
 * read why a construction line is thin before ever holding a pencil, and the
 * knowledge still transfers the day the instruments arrive.
 *
 * The safety lines are not decoration. Every tool rule here is paired with
 * the injury it prevents, because a rule without its reason is the first
 * thing a hurrying learner drops.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── drawing instruments and line types ─────────────────────────────────── */

teach({
  topicId: 'drawing-instruments',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Each instrument does one job: '
      + 'the tee square draws horizontals, the set squares verticals and '
      + 'fixed angles, the compasses circles. '
      + 'Line thickness carries meaning. '
      + 'Outlines are thick, construction lines thin, '
      + 'hidden edges dashed, centre lines long and short dashes.',
    method: [
      'Fix the paper, then draw all horizontals with the tee square.',
      'Stand the set square on the tee square for verticals.',
      'Draw thin and light first, then thicken only the real outline.',
    ],
  },

  why:
    'Two pupils are told to draw a rectangle '
    + '80 mm by 50 mm, with square corners. '
    + 'The first draws it freehand '
    + 'against the edge of an exercise book. '
    + 'His corner comes out at about 85 degrees '
    + 'and his two long sides measure 80 and 83. '
    + 'The second uses a tee square and a set square. '
    + 'Her corner is 90 degrees '
    + 'and both long sides are 80. '
    + 'Neither of them is the better artist. '
    + 'So what is the instrument doing '
    + 'that a steady hand cannot?',

  notation:
    'The instruments have names a question will use. '
    + 'A tee square is shaped like the letter T, '
    + 'and its head slides along the edge of the board. '
    + 'A set square is a flat plastic triangle, '
    + 'and there are two of them: '
    + 'a 45 and a 30 by 60. '
    + 'A pencil grade is a letter and a number, '
    + 'so 2H is hard and HB is softer. '
    + 'Thick lines come from a soft pencil '
    + 'and thin lines from a hard one, '
    + 'never from pressing harder. '
    + 'Drawing every line at the same thickness '
    + 'is the commonest mistake, '
    + 'because then a reader cannot tell an outline '
    + 'from a construction line.',

  idea:
    'Technical drawing is done with instruments because a drawing is a '
    + 'measurement, not a picture. '
    + 'Each instrument does one job that free drawing cannot do at all. '
    + 'The lines carry information too. '
    + 'A reader who is not in the room has to be able to tell '
    + 'your working from the object itself, '
    + 'so the two are drawn differently.',

  mechanism:
    'Everything in this topic follows from one fact: '
    + 'the drawing has to be read by somebody who is not in the room. '
    + 'That is why the instruments exist and why the lines differ. '
    + 'Take the tee square. '
    + 'It does not draw a straighter line than a ruler. '
    + 'It draws a line that is parallel to every other line it drew, '
    + 'because it is registered against the edge of the board. '
    + 'So the whole drawing stays square without you measuring anything, '
    + 'and that is lost the moment you lift the tee square off the edge. '
    + 'The same reasoning gives the line types. '
    + 'A reader cannot ask you which of your lines is the real edge of the '
    + 'object, '
    + 'so the drawing tells them: thick is the object, thin is your working. '
    + 'A dashed line says the edge is there but behind something. '
    + 'A centre line says this is not an edge at all, it is a position. '
    + 'This is also why you draw everything thin and light first, '
    + 'then thicken only the outline at the end. '
    + 'A thin line can be corrected and can be left in place honestly. '
    + 'A thick line pressed in early cannot be erased cleanly, '
    + 'and it lies about what it is.',

  recap:
    'A drawing can be a picture, '
    + 'or it can be an instruction. '
    + 'Draw a bowl to hang on your wall '
    + 'and only you have to like it. '
    + 'Draw a bowl so that a potter you will never meet '
    + 'can make exactly that bowl, '
    + 'and it has to carry sizes, '
    + 'and every line in it has to mean one thing '
    + 'and not another. '
    + 'That second kind is technical drawing, '
    + 'and it is what this subject is. '
    + 'This lesson is the instruments it needs, '
    + 'and what each line is allowed to mean.',

  method: [
    'Tape the paper square on the board.',
    'Draw the border and the title block first.',
    'Draw every horizontal with the tee square, '
      + 'keeping it against the board edge.',
    'Stand a set square on the tee square for every vertical.',
    'Use the compasses for all circles and arcs, never freehand.',
    'Keep the pencil sharp and lean it along the line, not into it.',
    'Work thin and light throughout.',
    'Thicken only the visible outline when the drawing is correct.',
    'Dimension in thin lines, and write each figure once.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which instrument draws a vertical line, and how?',
      steps: [
        'The tee square draws horizontals along the board edge.',
        'A vertical is at right angles to that.',
        'A set square has a 90 degree corner.',
      ],
      answer: 'A set square, stood with its lower edge on the tee square.',
    },
    {
      level: 4,
      ask: 'An edge of a block cannot be seen from the front. '
        + 'How is it drawn?',
      steps: [
        'The edge exists, so it must appear.',
        'It is behind the material, so it is not a visible outline.',
        'The line type for a hidden edge is a thin dashed line.',
      ],
      answer: 'As a thin dashed line.',
    },
    {
      level: 5,
      ask: 'A learner draws every line thick from the start. '
        + 'Give two things that go wrong.',
      steps: [
        'Thick lines cannot be erased without marking the paper.',
        'And a reader cannot tell the outline from the working.',
      ],
      answer: 'Mistakes cannot be cleaned off, '
        + 'and the drawing no longer tells the reader which lines are the '
        + 'real edges of the object.',
    },
  ],

  traps: [
    {
      mistake: 'Lifting the tee square off the edge of the board.',
      why: 'The tee square is only square while it is registered against '
        + 'the edge. '
        + 'Off the edge it is a long ruler.',
    },
    {
      mistake: 'Treating line thickness as decoration.',
      why: 'Thickness is information. '
        + 'Thick is the object and thin is your working, '
        + 'and marks are awarded for the difference.',
    },
    {
      mistake: 'Drawing circles freehand because they are small.',
      why: 'A drawing is a measurement. '
        + 'A freehand circle has no radius anybody can read.',
    },
    {
      mistake: 'Dimensioning the same length twice.',
      why: 'Two figures for one length can disagree, '
        + 'and the person making the part cannot tell which to trust.',
    },
  ],

  extension:
    'Orthographic projection comes next: '
    + 'the front, plan and end views of one object, lined up so that each '
    + 'view feeds the next. '
    + 'It only works if the whole drawing is square, '
    + 'which is what the tee square was for all along.',

  figure: {
    alt: 'A block with a hole through it, drawn with all four line types: a '
      + 'thick continuous outline for the block, thin dashed lines for the '
      + 'hidden edges of the hole, a thin chain of long and short dashes '
      + 'for the centre line through it, and thin continuous lines with '
      + 'arrows dimensioning the width as 60. A legend beside it names '
      + 'each of the four.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">the lines tell a reader who is not in the room</text>'
      + '<path d="M 170 56 V 214" stroke-width="1.5" stroke-dasharray="20 5 4 5"/>'
      + '<path d="M 60 76 H 280 V 196 H 60 Z" stroke-width="5"/>'
      + '<path d="M 150 76 V 196" stroke-width="1.5" stroke-dasharray="9 7"/>'
      + '<path d="M 190 76 V 196" stroke-width="1.5" stroke-dasharray="9 7"/>'
      + '<path d="M 60 202 V 252" stroke-width="1.5"/>'
      + '<path d="M 280 202 V 252" stroke-width="1.5"/>'
      + '<path d="M 68 244 H 272" stroke-width="1.5"/>'
      + '<path d="M 60 244 L 76 239 L 76 249 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 280 244 L 264 239 L 264 249 Z" fill="currentColor" stroke="none"/>'
      + '<text x="170" y="236" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">60</text>'
      + '<text x="170" y="282" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">a block with a hole through it</text>'
      + '<path d="M 340 86 H 440" stroke-width="5"/>'
      + '<text x="452" y="91" font-size="13" text-anchor="start" fill="currentColor" stroke="none">a visible outline</text>'
      + '<path d="M 340 136 H 440" stroke-width="1.5"/>'
      + '<text x="452" y="133" font-size="13" text-anchor="start" fill="currentColor" stroke="none">construction, projection</text>'
      + '<text x="452" y="151" font-size="13" text-anchor="start" fill="currentColor" stroke="none">or dimension</text>'
      + '<path d="M 340 186 H 440" stroke-width="1.5" stroke-dasharray="9 7"/>'
      + '<text x="452" y="191" font-size="13" text-anchor="start" fill="currentColor" stroke="none">a hidden edge</text>'
      + '<path d="M 340 236 H 440" stroke-width="1.5" stroke-dasharray="20 5 4 5"/>'
      + '<text x="452" y="233" font-size="13" text-anchor="start" fill="currentColor" stroke="none">a centre line: a position,</text>'
      + '<text x="452" y="251" font-size="13" text-anchor="start" fill="currentColor" stroke="none">not an edge at all</text>'
      + '<text x="320" y="330" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">thick is the object, thin is your working</text>'
      + '<text x="320" y="360" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">so draw everything thin and light, and thicken</text>'
      + '<text x="320" y="382" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">the outline only once the drawing is right</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each instrument, and the job that only it can do',
      columns: ['Instrument', 'What it does', 'What it gives you'],
      rows: [
        [
          'Drawing board',
          'Holds the paper square',
          'The edge that everything else is registered against',
        ],
        [
          'Tee square',
          'Draws horizontal lines',
          'Every line parallel to every other, without measuring',
        ],
        [
          'Set square',
          'Draws verticals, and 30, 45, 60 and 90 degrees',
          'Angles taken from the board, not from your hand',
        ],
        [
          'Compasses',
          'Draws circles and arcs',
          'A curve that is a measurement',
        ],
        [
          'Dividers',
          'Steps off equal distances',
          'The same distance repeated without reading it off',
        ],
        [
          'Protractor',
          'Measures any angle',
          'The angles the set square does not have',
        ],
        [
          'Scale rule',
          'Measures length',
          'Lengths read off at the drawing’s own scale',
        ],
      ],
      note: 'The tee square does not draw a straighter line than a ruler. '
        + 'It draws one parallel to every line it drew before, and that '
        + 'is lost the moment it leaves the edge of the board.',
    },
    {
      caption: 'What each kind of line means to the person reading the '
        + 'drawing',
      columns: ['Line', 'What it means', 'Drawn how'],
      rows: [
        [
          'Visible outline',
          'A real edge of the object',
          'Thick and continuous',
        ],
        [
          'Construction or dimension',
          'Your working, and the sizes',
          'Thin and continuous',
        ],
        [
          'Hidden edge',
          'An edge that is there, behind something',
          'Thin and dashed',
        ],
        [
          'Centre line',
          'A position, and not an edge at all',
          'Thin, long and short dashes',
        ],
      ],
      note: 'Thick is the object and thin is your working, which is why you '
        + 'draw thin and light throughout and thicken the outline only '
        + 'when the drawing is right.',
    },
  ],
  questions: [
    {
      id: 'dri-1',
      ask: 'Which line type shows a hidden edge?',
      kind: 'choice',
      options: [
        'A thin dashed line',
        'A thick continuous line',
        'A long and short chain line',
      ],
      answer: 'A thin dashed line',
      teach: 'Thick continuous is a visible outline, '
        + 'and the long and short chain is a centre line.',
      level: 3,
    },
    {
      id: 'dri-2',
      ask: 'Why must the tee square stay against the edge of the board?',
      kind: 'choice',
      options: [
        'That is what keeps every line parallel to the others',
        'It stops the paper moving',
        'It makes the line darker',
      ],
      answer: 'That is what keeps every line parallel to the others',
      teach: 'Off the edge it is only a long ruler, '
        + 'and the drawing stops being square.',
      level: 4,
    },
    {
      id: 'dri-3',
      ask: 'Why are construction lines drawn thin?',
      kind: 'choice',
      options: [
        'So the reader can tell them from the real outline',
        'To save pencil',
        'Because they are shorter',
      ],
      answer: 'So the reader can tell them from the real outline',
      teach: 'Thickness carries meaning: '
        + 'thick is the object, thin is your working.',
      level: 5,
    },
  ],
})

/* ── hand tools and workshop safety ─────────────────────────────────────── */

teach({
  topicId: 'tools-safety',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Each tool has one purpose. '
      + 'Used for anything else it slips, and a slipping tool is what '
      + 'injures you. '
      + 'Hold the work in a vice, cut away from your body, '
      + 'and keep edges sharp.',
    method: [
      'Name the job, then choose the tool made for it.',
      'Hold the work in a vice before you cut.',
      'Keep both hands behind the cutting edge.',
    ],
  },

  why:
    'A pupil needs to cut 30 mm off a wooden strip. '
    + 'He has no vice, '
    + 'so he holds the strip in his left hand '
    + 'and saws with his right. '
    + 'The saw jumps out of the cut on the second stroke. '
    + 'It lands on his left thumb. '
    + 'He was not being careless '
    + 'and he was not rushing. '
    + 'The way he held it is what made the jump possible. '
    + 'So what setup would not have let the saw reach him?',

  notation:
    'A vice is the clamp on the bench '
    + 'that holds work still. '
    + 'The part of a tool you hold is the handle, '
    + 'and the part that cuts is the blade, or the edge. '
    + 'The waste is the part of the material '
    + 'you are going to throw away. '
    + 'You always cut on the waste side of your line, '
    + 'so that the piece you are keeping stays full size. '
    + 'Holding work in your hand instead of a vice '
    + 'is the commonest mistake, '
    + 'because a tool in one hand '
    + 'against work in the other '
    + 'has nowhere safe to slip to.',

  idea:
    'Workshop tools are sorted by the job they do: '
    + 'marking, cutting, smoothing, holding and driving. '
    + 'Each one is made for its own job and is dangerous in another. '
    + 'The safety rules are not a separate list. '
    + 'Each one belongs to a tool and to the injury that tool causes.',

  mechanism:
    'Almost every workshop injury has the same shape, '
    + 'and seeing that shape is worth more than memorising twenty rules. '
    + 'A tool slips, and the hand that was holding the work is where the '
    + 'tool lands. '
    + 'So every real safety rule is about one of two things: '
    + 'stopping the slip, or moving the hand. '
    + 'Holding the work in a vice does both, '
    + 'because the work cannot shift and your hand is no longer on it. '
    + 'Cutting away from your body moves the hand out of the path. '
    + 'Keeping a tool sharp stops the slip, '
    + 'which is why a blunt chisel is more dangerous than a sharp one: '
    + 'a blunt one has to be forced, and force is what makes it jump. '
    + 'Using a tool for its own job is the same rule again. '
    + 'A chisel used as a screwdriver is being turned by a handle made for '
    + 'pushing, '
    + 'so it twists out of the slot and into your palm. '
    + 'A mallet on a chisel handle, rather than a steel hammer, '
    + 'is there because steel on wood splits the handle, '
    + 'and a split handle lets go while the blade is moving.',

  recap:
    'A cutting tool only cuts '
    + 'when it is held against something that will not move. '
    + 'Try cutting a sheet of paper '
    + 'while holding it up in the air. '
    + 'It folds away from the blade '
    + 'and tears instead of cutting. '
    + 'Lay the same sheet flat on a table, '
    + 'hold it down, '
    + 'and the blade goes through it cleanly. '
    + 'Nothing about the blade changed. '
    + 'What changed is that the work '
    + 'could no longer move away. '
    + 'This lesson is that same idea '
    + 'with tools that cut harder material, '
    + 'where a slip costs more.',

  method: [
    'Say what the job is: measure, mark, cut, hold, smooth or drive.',
    'Choose the tool made for that job and nothing else.',
    'Put the work in a vice or a clamp before you cut.',
    'Keep both hands behind the cutting edge.',
    'Cut away from your body.',
    'Check that the handle is sound and the edge is sharp.',
    'Put each tool down with its edge away from you.',
    'Clear and sweep the bench before you leave it.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which saw cuts metal, and which cuts across wood?',
      steps: [
        'Metal needs fine hard teeth in a frame.',
        'Wood across the grain needs a stiff backed blade.',
      ],
      answer: 'The hacksaw cuts metal. The tenon saw cuts across wood.',
    },
    {
      level: 4,
      ask: 'Why is a mallet used on a chisel rather than a steel hammer?',
      steps: [
        'The chisel handle is wood.',
        'Steel striking wood splits it.',
        'A split handle can let go while the blade is moving.',
      ],
      answer: 'Because a steel hammer splits the wooden handle, '
        + 'and a split handle can give way with the blade in motion.',
    },
    {
      level: 5,
      ask: 'A learner says a blunt chisel is safer because it cuts less '
        + 'easily. Answer him.',
      steps: [
        'A blunt chisel will not cut under normal pressure.',
        'So the learner pushes harder.',
        'When it finally releases, it moves fast and without control.',
        'That is a slip, and a slip is what injures the hand.',
      ],
      answer: 'A blunt chisel has to be forced, '
        + 'and forcing it makes it jump when it does release. '
        + 'A sharp chisel cuts under control, '
        + 'so it is the safer of the two.',
    },
  ],

  traps: [
    {
      mistake: 'Holding the work with one hand while cutting with the '
        + 'other.',
      why: 'The hand holding the work is exactly where the tool lands when '
        + 'it slips. '
        + 'Use a vice.',
    },
    {
      mistake: 'Using a chisel or a file as a screwdriver or a lever.',
      why: 'The handle is made for pushing, not twisting, '
        + 'so it turns out of the slot. A file also snaps, being brittle.',
    },
    {
      mistake: 'Thinking safety is a list learned separately from the '
        + 'tools.',
      why: 'Every rule belongs to a tool and to one injury. '
        + 'A rule without its reason is the first thing dropped when you '
        + 'are hurrying.',
    },
    {
      mistake: 'Leaving a tool edge up on the bench.',
      why: 'The next person reaches across it without looking.',
    },
  ],

  extension:
    'Machine tools follow the same two rules with less margin: '
    + 'the work must be held, and the hand must be out of the path. '
    + 'What changes is that a machine does not stop when you let go, '
    + 'so guards and a known stop switch replace your reactions.',

  figure: {
    alt: 'A tool slips, drawn in red at the top, with the note that the '
      + 'only question left is where your hand was. Two boxes follow. In '
      + 'the red one your hand was on the work, so the tool lands on it. '
      + 'In the green one the work was in a vice, so the tool lands on the '
      + 'bench. Below, the rules are sorted into the two things they do: '
      + 'stop the slip, or move the hand.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">every workshop injury has the same shape</text>'
      + '<path d="M 220 46 H 420 V 86 H 220 Z" stroke="#c8433a"/>'
      + '<text x="320" y="71" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">a tool slips</text>'
      + '<text x="320" y="106" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">and the only question left is where your hand was</text>'
      + '<path d="M 300 86 L 180 126" stroke-width="2"/>'
      + '<path d="M 170 130 L 186 118 L 192 132 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 340 86 L 460 126" stroke-width="2"/>'
      + '<path d="M 470 130 L 448 132 L 454 118 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 20 136 H 300 V 232 H 20 Z" stroke="#c8433a"/>'
      + '<text x="160" y="162" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">your hand was on the work</text>'
      + '<text x="160" y="190" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">so the tool lands on it</text>'
      + '<text x="160" y="216" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">this is nearly every injury</text>'
      + '<path d="M 340 136 H 620 V 232 H 340 Z" stroke="#0f8a4d"/>'
      + '<text x="480" y="162" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">the work was in a vice</text>'
      + '<text x="480" y="190" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">so the tool lands on the bench</text>'
      + '<text x="480" y="216" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">and the slip costs you nothing</text>'
      + '<text x="320" y="272" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so every real rule does one of two things</text>'
      + '<path d="M 20 288 H 300 V 376 H 20 Z" stroke-dasharray="7 6" stroke-width="2"/>'
      + '<text x="160" y="312" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">stop the slip</text>'
      + '<text x="160" y="336" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">keep the edge sharp, because a blunt</text>'
      + '<text x="160" y="353" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">one must be forced; use the tool made</text>'
      + '<text x="160" y="370" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">for the job; check the handle is sound</text>'
      + '<path d="M 340 288 H 620 V 376 H 340 Z" stroke-dasharray="7 6" stroke-width="2"/>'
      + '<text x="480" y="312" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">move the hand</text>'
      + '<text x="480" y="336" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">hold the work in a vice or a clamp;</text>'
      + '<text x="480" y="353" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">cut away from your body; keep both</text>'
      + '<text x="480" y="370" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">hands behind the cutting edge</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The tools grouped by their job, and what the wrong one does',
      columns: ['The job', 'The tools for it', 'What the wrong tool does'],
      rows: [
        [
          'Mark out',
          'Rule, try square, marking gauge, scriber for metal',
          'A line that is not square, and everything after it is wrong',
        ],
        [
          'Cut',
          'Tenon saw across wood, hacksaw for metal, chisel to pare',
          'A wood saw blunts on metal; a hacksaw tears the wood',
        ],
        [
          'Smooth',
          'Plane for wood, file for metal',
          'A file clogs on wood; a plane is ruined on metal',
        ],
        [
          'Hold',
          'Vice and clamp',
          'Your hand holds it instead, which is where the tool lands',
        ],
        [
          'Drive',
          'Hammer for nails, mallet on a chisel, the screwdriver that fits',
          'A steel hammer splits the chisel handle, and it lets go',
        ],
      ],
      note: 'A blunt chisel is more dangerous than a sharp one, because a '
        + 'blunt one has to be forced, and force is what makes it jump.',
    },
  ],
  questions: [
    {
      id: 'too-1',
      ask: 'What should hold the work while you cut it?',
      kind: 'choice',
      options: ['A vice or clamp', 'Your other hand', 'A friend'],
      answer: 'A vice or clamp',
      teach: 'It stops the work shifting and takes your hand out of the '
        + 'path of the tool.',
      level: 3,
    },
    {
      id: 'too-2',
      ask: 'Why is a file never used as a lever?',
      kind: 'choice',
      options: [
        'It is brittle and snaps',
        'It is too short',
        'It would lose its handle',
      ],
      answer: 'It is brittle and snaps',
      teach: 'A file is hardened to cut metal, '
        + 'and hardened steel breaks rather than bends.',
      level: 4,
    },
    {
      id: 'too-3',
      ask: 'What do nearly all workshop injuries have in common?',
      kind: 'choice',
      options: [
        'A tool slipped onto the hand holding the work',
        'A tool was too sharp',
        'The bench was too high',
      ],
      answer: 'A tool slipped onto the hand holding the work',
      teach: 'Every real safety rule either stops the slip '
        + 'or moves the hand out of its path.',
      level: 5,
    },
  ],
})

/* ── planning and cooking a meal ────────────────────────────────────────── */

teach({
  topicId: 'meal-planning',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A balanced meal has a carbohydrate, a protein, a vegetable or '
      + 'fruit, and a little fat. '
      + 'Plan to a budget by choosing the cheapest food in each group, '
      + 'not by leaving a group out. '
      + 'Hygiene is about keeping raw food and cooked food apart.',
    method: [
      'List the four groups, then fill each from what is cheap and in '
        + 'season.',
      'Price the list before you cook.',
      'Wash hands, keep raw meat separate, and cook it through.',
    ],
  },

  why:
    'A mother has 20 cedis to feed four people. '
    + 'She buys a big bowl of gari and some sugar, '
    + 'and everybody goes to bed full. '
    + 'She does that every day for a month, '
    + 'and the youngest child starts falling ill often. '
    + 'Nobody in the house went hungry. '
    + 'Being full and being fed '
    + 'are not the same thing. '
    + 'So how do you plan a meal that does both, '
    + 'on money that does not stretch?',

  notation:
    'Food is sorted into groups '
    + 'by what the body uses it for. '
    + 'Carbohydrates give energy: '
    + 'gari, rice, yam, kenkey. '
    + 'Proteins build the body: '
    + 'fish, beans, eggs, groundnut. '
    + 'Vitamins and minerals come '
    + 'from vegetables and fruit, '
    + 'and they keep the body working. '
    + 'A balanced meal has something from each group, '
    + 'in one meal, on one plate. '
    + 'Leaving a group out to save money '
    + 'is the commonest mistake, '
    + 'because the cheapest food in a group still counts '
    + 'and an empty group counts for nothing.',

  idea:
    'A balanced meal takes one food from each of four groups, '
    + 'and each group is there for a different reason. '
    + 'Planning means choosing one food from each group, '
    + 'checking what it costs, and checking you can cook it in the time '
    + 'you have. '
    + 'Hygiene while cooking means clean hands, clean surfaces, '
    + 'raw food kept away from cooked food, '
    + 'and meat and fish cooked all the way through. '
    + 'Store what is left cold, and reheat it once only.',

  mechanism:
    'The mistake in planning to a budget is to drop a group, '
    + 'and it happens because protein and vegetables look like the '
    + 'expensive parts. '
    + 'They are not expensive by group. '
    + 'They are expensive in one form. '
    + 'Beans, groundnuts, eggs, dried fish and kontomire are all cheap, '
    + 'and each sits in the group people drop. '
    + 'So a budget is met by moving within a group, not by deleting one, '
    + 'and the plan you write is a grid: four groups down the side, '
    + 'the cheapest food in each beside it, and the prices added at the '
    + 'bottom. '
    + 'The hygiene rules have a single idea behind them too. '
    + 'Raw meat, fish and eggs carry bacteria, '
    + 'and cooking kills them. '
    + 'So every rule is about keeping what is still raw away from what is '
    + 'already cooked. '
    + 'The knife that cut raw chicken carries the bacteria to the salad. '
    + 'The hand that touched raw fish carries them to the bread. '
    + 'The chicken itself is safe once it is cooked through, '
    + 'and the salad was never going to be cooked at all, '
    + 'which is exactly why the order you work in matters.',

  recap:
    'Different foods do different jobs in the body, '
    + 'and a body needs all the jobs done. '
    + 'Gari and rice give you the energy '
    + 'to walk and to work. '
    + 'Fish, beans and eggs build you: '
    + 'muscle, blood, the mending of a cut. '
    + 'Vegetables and fruit keep the whole thing running, '
    + 'and without them a person falls ill easily. '
    + 'A plate of gari on its own '
    + 'gives you one of those three. '
    + 'You can eat it until you are full '
    + 'and still be missing the other two. '
    + 'This lesson plans a real meal '
    + 'with all three on it, to a price.',

  method: [
    'Write the four groups down the side of a page.',
    'Beside each, write the cheapest food in it that is in season.',
    'Price each item and add the total.',
    'If it is over budget, swap within a group. Never remove a group.',
    'List the order of work, starting with what takes longest.',
    'Wash your hands, then the vegetables, then prepare.',
    'Cut raw meat and fish last, or on a separate board.',
    'Cook meat and fish right through.',
    'Serve hot, and cool leftovers quickly before storing them cold.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which group is missing from rice, oil and tomato stew?',
      steps: [
        'Rice is the carbohydrate.',
        'Oil is the fat. Tomato gives some vitamins.',
        'Nothing there is for growth and repair.',
      ],
      answer: 'Protein. Add beans, egg, fish or meat.',
    },
    {
      level: 4,
      ask: 'You have 20 cedis for a meal for four '
        + 'and cannot afford chicken. What do you do?',
      steps: [
        'The group that needs filling is protein.',
        'Do not remove the group.',
        'Look for the cheapest protein instead.',
      ],
      answer: 'Swap within the group: beans, groundnut, egg or dried fish. '
        + 'The meal stays balanced at a lower price.',
    },
    {
      level: 5,
      ask: 'A cook prepares salad and raw chicken on the same board, '
        + 'then cooks the chicken thoroughly. '
        + 'Three people fall ill. Explain.',
      steps: [
        'Raw chicken carries bacteria.',
        'Cooking it through killed the bacteria in the chicken.',
        'But the board passed them to the salad.',
        'The salad was never cooked, so nothing killed them there.',
      ],
      answer: 'The chicken was safe, '
        + 'but the board carried bacteria from it to the salad, '
        + 'and the salad was eaten raw, '
        + 'so nothing destroyed them.',
    },
  ],

  traps: [
    {
      mistake: 'Leaving out protein or vegetables to save money.',
      why: 'Those groups are not expensive. '
        + 'One form of them is. Move within the group instead.',
    },
    {
      mistake: 'Thinking cooking the meat properly is the whole of hygiene.',
      why: 'It protects the meat. '
        + 'What the raw meat touched on the way is still carrying bacteria.',
    },
    {
      mistake: 'Leaving cooked food standing warm for hours.',
      why: 'Warm is the temperature bacteria grow at. '
        + 'Serve hot or cool it quickly and store it cold.',
    },
    {
      mistake: 'Reheating the same food again and again.',
      why: 'Each cooling period is another chance for bacteria to grow. '
        + 'Reheat once, right through.',
    },
  ],

  extension:
    'The same grid plans a week instead of a meal. '
    + 'Buying one cheap protein in quantity and using it across three days '
    + 'costs less than buying three different ones, '
    + 'and in season produce is cheapest at exactly the time it is best.',

  figure: {
    alt: 'Raw chicken, the knife and board it was cut on, and the salad '
      + 'drawn in a row, with the path from the board to the salad crossed '
      + 'out in red. Below, the safe order of work in three steps: prepare '
      + 'the salad first while everything is clean, wash hands, knife and '
      + 'board, and only then handle the raw chicken, which is cooked all '
      + 'the way through.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">the knife that cut raw chicken carries it to the salad</text>'
      + '<path d="M 20 60 H 170 V 124 H 20 Z" stroke="#c8433a"/>'
      + '<text x="95" y="88" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">raw chicken</text>'
      + '<text x="95" y="110" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">carries bacteria</text>'
      + '<path d="M 178 92 H 222" stroke="#c8433a"/>'
      + '<path d="M 232 92 L 214 83 L 214 101 Z" fill="#c8433a" stroke="none"/>'
      + '<path d="M 242 60 H 398 V 124 H 242 Z"/>'
      + '<text x="320" y="88" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">the same knife,</text>'
      + '<text x="320" y="110" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">board and hand</text>'
      + '<path d="M 406 92 H 450" stroke="#c8433a"/>'
      + '<path d="M 460 92 L 442 83 L 442 101 Z" fill="#c8433a" stroke="none"/>'
      + '<path d="M 416 74 L 450 110" stroke="#c8433a" stroke-width="4"/>'
      + '<path d="M 450 74 L 416 110" stroke="#c8433a" stroke-width="4"/>'
      + '<path d="M 470 60 H 620 V 124 H 470 Z" stroke="#0f8a4d"/>'
      + '<text x="545" y="88" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">the salad</text>'
      + '<text x="545" y="110" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">never cooked at all</text>'
      + '<text x="320" y="162" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">cooking kills the bacteria, so the order you work in matters</text>'
      + '<path d="M 20 184 H 200 V 262 H 20 Z" stroke="#0f8a4d"/>'
      + '<text x="110" y="212" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">1</text>'
      + '<text x="110" y="236" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">prepare the salad</text>'
      + '<text x="110" y="254" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">first, while all is clean</text>'
      + '<path d="M 208 222 H 242" stroke-width="2"/>'
      + '<path d="M 252 222 L 234 213 L 234 231 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 260 184 H 380 V 262 H 260 Z"/>'
      + '<text x="320" y="212" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">2</text>'
      + '<text x="320" y="236" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">wash hands, knife</text>'
      + '<text x="320" y="254" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">and board</text>'
      + '<path d="M 388 222 H 422" stroke-width="2"/>'
      + '<path d="M 432 222 L 414 213 L 414 231 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 440 184 H 620 V 262 H 440 Z" stroke="#c8433a"/>'
      + '<text x="530" y="212" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">3</text>'
      + '<text x="530" y="236" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">then the raw chicken,</text>'
      + '<text x="530" y="254" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">cooked all the way through</text>'
      + '<text x="320" y="316" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">the chicken is safe once it is cooked,</text>'
      + '<text x="320" y="342" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">and the salad was never going to be cooked,</text>'
      + '<text x="320" y="368" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">which is why the salad is done first</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The four groups, what each is for, and a cheap food in it',
      columns: ['Group', 'What it is for', 'A cheap food in that group'],
      rows: [
        ['Carbohydrate', 'Energy', 'Rice, yam, kenkey, gari'],
        [
          'Protein',
          'Growth and repair',
          'Beans, groundnuts, eggs, dried fish',
        ],
        [
          'Vegetable or fruit',
          'Vitamins, minerals and fibre',
          'Kontomire, garden eggs, pawpaw',
        ],
        [
          'Fat or oil',
          'Energy, and a small amount is enough',
          'Palm oil, groundnut oil',
        ],
      ],
      note: 'A budget is met by moving within a group, never by deleting '
        + 'one. Every food in the last column is cheap, and two of them '
        + 'sit in the group people drop first.',
    },
  ],
  questions: [
    {
      id: 'mea-1',
      ask: 'Which group does beans belong to?',
      kind: 'choice',
      options: ['Protein', 'Carbohydrate', 'Fat'],
      answer: 'Protein',
      teach: 'Beans, groundnuts, eggs and dried fish are all cheap '
        + 'proteins.',
      level: 3,
    },
    {
      id: 'mea-2',
      ask: 'Your plan is over budget. What should you do?',
      kind: 'choice',
      options: [
        'Swap for a cheaper food in the same group',
        'Remove the vegetable',
        'Remove the protein',
      ],
      answer: 'Swap for a cheaper food in the same group',
      teach: 'A budget is met by moving within a group, '
        + 'not by deleting one.',
      level: 4,
    },
    {
      id: 'mea-3',
      ask: 'Why must raw meat be kept away from food that will be eaten '
        + 'uncooked?',
      kind: 'choice',
      options: [
        'Nothing will kill the bacteria it passes on',
        'It makes the food taste wrong',
        'It takes up space',
      ],
      answer: 'Nothing will kill the bacteria it passes on',
      teach: 'Cooking protects the meat itself. '
        + 'Whatever the raw meat touched is never cooked at all.',
      level: 5,
    },
  ],
})

/* ── basic stitches and seams ───────────────────────────────────────────── */

teach({
  topicId: 'stitches',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Tacking holds cloth temporarily. '
      + 'Running stitch and backstitch join it. '
      + 'Hemming and slip stitch finish an edge. '
      + 'Backstitch is the strong one because each stitch returns over the '
      + 'last.',
    method: [
      'Tack first, then stitch, then take the tacking out.',
      'Use backstitch where the seam will be pulled.',
      'Finish the raw edge, or the seam will fray apart.',
    ],
  },

  why:
    'A seam on a uniform is sewn with a running stitch: '
    + 'in, out, in, out. '
    + 'It holds for a week. '
    + 'Then the thread breaks at one point, '
    + 'the stitching pulls loose along its whole length, '
    + 'and the seam opens from the hem to the armpit. '
    + 'A seam sewn with backstitch, '
    + 'broken in the same one place, '
    + 'loses one stitch. '
    + 'Same cloth, same thread, same needle. '
    + 'So what is different about the way '
    + 'the thread goes in?',

  notation:
    'A stitch is one pass of the needle, '
    + 'and a run of them along a join is a seam. '
    + 'Tacking is temporary: '
    + 'big loose stitches '
    + 'that hold the cloth while you sew the real seam, '
    + 'and they are pulled out afterwards. '
    + 'Running stitch goes forward every time. '
    + 'Backstitch goes forward, '
    + 'then back over the last one, '
    + 'which is what makes it strong. '
    + 'Hemming and slip stitch finish an edge '
    + 'so that it does not fray. '
    + 'Calling tacking a seam is the commonest mistake, '
    + 'because tacking is meant to come out again.',

  idea:
    'Stitches do three different jobs. '
    + 'A temporary stitch holds cloth in place while you work. '
    + 'A joining stitch makes the seam itself. '
    + 'A finishing stitch closes or neatens an edge. '
    + 'A seam is where two pieces are joined. '
    + 'A plain seam is stitched then pressed open, '
    + 'and its raw edges must be neatened, '
    + 'by overcasting or by a French seam that encloses them.',

  mechanism:
    'Two ideas explain every choice in this topic. '
    + 'The first is why backstitch is strong and running stitch is not. '
    + 'In a running stitch the thread is on the surface for one stitch, '
    + 'then underneath for the next, '
    + 'so the line of thread is broken into separate pieces, '
    + 'and when one piece breaks the seam opens beside it. '
    + 'In a backstitch the needle comes up ahead and goes back into the end '
    + 'of the last stitch, '
    + 'so the thread on the surface is continuous. '
    + 'A pull is shared along the whole line instead of landing on one '
    + 'stitch. '
    + 'The second idea is why a raw edge has to be finished. '
    + 'Woven cloth is threads crossing each other, '
    + 'held in place only by the threads around them. '
    + 'At a cut edge the crossing threads have nothing beyond them, '
    + 'so they work loose with every wash and the cloth frays inwards '
    + 'towards your stitching. '
    + 'Neatening the edge gives those threads something to hold. '
    + 'This is also why tacking exists. '
    + 'Cloth slides while you sew, '
    + 'and a seam sewn on sliding cloth comes out crooked and has to be '
    + 'unpicked. '
    + 'Two minutes of tacking is cheaper than unpicking a seam.',

  recap:
    'Sewing holds two pieces of cloth together '
    + 'with a thread that passes through both of them. '
    + 'Push a needle down through both pieces '
    + 'and up again, '
    + 'and you have made one stitch. '
    + 'Do that in a line '
    + 'and the two pieces are joined along the line. '
    + 'One thread is holding all of it, '
    + 'which is the useful part '
    + 'and also the dangerous part. '
    + 'If that thread breaks in the wrong way, '
    + 'the whole line can come undone. '
    + 'This lesson names the stitches, '
    + 'says which one survives a break, and says why.',

  method: [
    'Measure and mark, then cut with the grain of the cloth.',
    'Pin the pieces with right sides together.',
    'Tack along the seam line and take out the pins.',
    'Stitch the seam, using backstitch where it will be pulled.',
    'Remove the tacking.',
    'Press the seam open.',
    'Neaten both raw edges by overcasting, or work a French seam.',
    'Finish the garment edge by hemming or slip stitch.',
    'Fasten off with two small stitches over each other, not a knot alone.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which stitch is used to hold cloth temporarily?',
      steps: [
        'The stitch must be quick and easy to remove.',
        'That is a long running stitch.',
      ],
      answer: 'Tacking.',
    },
    {
      level: 4,
      ask: 'Why is backstitch used on the seam of a trouser leg?',
      steps: [
        'That seam is pulled every time somebody sits or walks.',
        'Running stitch leaves the surface thread in separate pieces.',
        'Backstitch returns over the last stitch, '
          + 'so the thread is continuous.',
      ],
      answer: 'Because backstitch makes a continuous line of thread, '
        + 'so a pull is shared along the seam instead of landing on one '
        + 'stitch.',
    },
    {
      level: 5,
      ask: 'A learner sews a neat plain seam and leaves the raw edges '
        + 'unneatened. '
        + 'After three washes the seam has opened. Explain.',
      steps: [
        'Woven cloth is threads crossing, held by the threads around them.',
        'At a cut edge nothing holds the crossing threads.',
        'Each wash works them loose and the cloth frays inwards.',
        'The fraying reaches the stitching, and the stitches have nothing '
          + 'left to hold.',
      ],
      answer: 'The raw edges frayed inwards with each wash until the cloth '
        + 'at the stitching gave way. '
        + 'The stitching was sound; the edge was not finished.',
    },
  ],

  traps: [
    {
      mistake: 'Skipping the tacking to save time.',
      why: 'Cloth slides as you sew. '
        + 'Unpicking a crooked seam costs more than tacking it did.',
    },
    {
      mistake: 'Using running stitch on a seam that will be pulled.',
      why: 'Its surface thread is in separate pieces, '
        + 'so one break opens the seam beside it.',
    },
    {
      mistake: 'Leaving raw edges unneatened because the seam looks fine.',
      why: 'It looks fine until it is washed. '
        + 'A cut edge frays inwards towards the stitching.',
    },
    {
      mistake: 'Fastening off with a knot only.',
      why: 'A knot pulls through the weave. '
        + 'Two small stitches worked over each other hold.',
    },
  ],

  extension:
    'A machine straight stitch is built like a backstitch, '
    + 'with a continuous thread on both faces, '
    + 'which is why it is strong. '
    + 'Everything about tacking, pressing and neatening stays the same '
    + 'when you move to a machine. '
    + 'Only the joining gets faster.',

  figure: {
    alt: 'The two joining stitches drawn from the side, through the cloth. '
      + 'In the running stitch the thread on the surface is a row of '
      + 'separate pieces, with one marked in red because breaking it opens '
      + 'the seam beside it. In the backstitch the thread on the surface '
      + 'is one unbroken green line, because the needle comes up ahead and '
      + 'goes back into the end of the last stitch.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">seen from the side: where the thread actually runs</text>'
      + '<text x="20" y="62" font-size="16" text-anchor="start" fill="currentColor" stroke="none">running stitch</text>'
      + '<text x="20" y="82" font-size="13" text-anchor="start" fill="currentColor" stroke="none">the surface thread is in separate pieces</text>'
      + '<path d="M 60 104 H 580" stroke-width="2"/>'
      + '<path d="M 60 122 H 580" stroke-width="2"/>'
      + '<path d="M 70 96 H 130" stroke="currentColor" stroke-width="4"/>'
      + '<path d="M 70 96 V 130" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M 130 96 V 130" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M 130 130 H 190" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>'
      + '<path d="M 190 96 H 250" stroke="currentColor" stroke-width="4"/>'
      + '<path d="M 190 96 V 130" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M 250 96 V 130" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M 250 130 H 310" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>'
      + '<path d="M 310 96 H 370" stroke="#c8433a" stroke-width="4"/>'
      + '<path d="M 310 96 V 130" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M 370 96 V 130" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M 370 130 H 430" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>'
      + '<path d="M 430 96 H 490" stroke="currentColor" stroke-width="4"/>'
      + '<path d="M 430 96 V 130" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M 490 96 V 130" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M 490 130 H 550" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>'
      + '<path d="M 326 86 L 354 68" stroke="#c8433a" stroke-width="2"/>'
      + '<text x="360" y="66" font-size="13" text-anchor="start" fill="#c8433a" stroke="none">break this one piece and</text>'
      + '<text x="360" y="84" font-size="13" text-anchor="start" fill="#c8433a" stroke="none">the seam opens beside it</text>'
      + '<text x="320" y="156" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">dashed where the thread is underneath the cloth</text>'
      + '<text x="20" y="208" font-size="16" text-anchor="start" fill="#0f8a4d" stroke="none">backstitch</text>'
      + '<text x="20" y="228" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">the surface thread is one unbroken line</text>'
      + '<path d="M 60 252 H 580" stroke-width="2"/>'
      + '<path d="M 60 270 H 580" stroke-width="2"/>'
      + '<path d="M 70 244 H 550" stroke="#0f8a4d" stroke-width="5"/>'
      + '<path d="M 70 244 V 278" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M 70 278 H 190" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>'
      + '<path d="M 130 244 V 278" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M 130 278 H 250" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>'
      + '<path d="M 190 244 V 278" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M 190 278 H 310" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>'
      + '<path d="M 250 244 V 278" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M 250 278 H 370" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>'
      + '<path d="M 310 244 V 278" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M 310 278 H 430" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>'
      + '<path d="M 370 244 V 278" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M 370 278 H 490" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>'
      + '<path d="M 430 244 V 278" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M 430 278 H 550" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>'
      + '<path d="M 490 244 V 278" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M 490 278 H 610" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>'
      + '<path d="M 550 244 V 278" stroke="currentColor" stroke-width="2"/>'
      + '<text x="320" y="304" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">the needle comes up ahead and goes back into the last stitch</text>'
      + '<text x="320" y="348" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so a pull is shared along the whole seam</text>'
      + '<text x="320" y="374" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">instead of landing on one stitch</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each stitch, the job it does, and how much pull it will '
        + 'take',
      columns: ['Stitch', 'What it is for', 'How strong'],
      rows: [
        [
          'Tacking',
          'Holding cloth still while you sew',
          'None, and it is meant to come out',
        ],
        [
          'Running stitch',
          'Joining, quickly',
          'Weak: the surface thread is in pieces',
        ],
        [
          'Backstitch',
          'Joining anywhere it will be pulled',
          'Strong: the surface thread is unbroken',
        ],
        ['Hemming', 'Closing a folded edge', 'Enough for an edge'],
        [
          'Slip stitch',
          'Closing an edge almost invisibly',
          'Enough for an edge',
        ],
        [
          'Blanket stitch',
          'Finishing a raw edge',
          'It holds the cut threads from fraying',
        ],
      ],
      note: 'A cut edge is threads with nothing beyond them, so they work '
        + 'loose with every wash and the cloth frays inwards towards your '
        + 'stitching. Neatening gives them something to hold.',
    },
  ],
  questions: [
    {
      id: 'sti-1',
      ask: 'Which stitch is the strongest of these for joining?',
      kind: 'choice',
      options: ['Backstitch', 'Running stitch', 'Tacking'],
      answer: 'Backstitch',
      teach: 'Each stitch returns over the last, '
        + 'so the thread on the surface is continuous.',
      level: 3,
    },
    {
      id: 'sti-2',
      ask: 'Why must a raw edge be neatened?',
      kind: 'choice',
      options: [
        'A cut edge frays inwards towards the stitching',
        'It looks untidy',
        'It makes the seam thicker',
      ],
      answer: 'A cut edge frays inwards towards the stitching',
      teach: 'At a cut edge nothing holds the crossing threads, '
        + 'so each wash works them loose.',
      level: 4,
    },
    {
      id: 'sti-3',
      ask: 'What is tacking for?',
      kind: 'choice',
      options: [
        'Holding the cloth still while the real seam is sewn',
        'Decorating the hem',
        'Making the seam stronger',
      ],
      answer: 'Holding the cloth still while the real seam is sewn',
      teach: 'Cloth slides as you sew, '
        + 'and a seam sewn on sliding cloth comes out crooked.',
      level: 5,
    },
  ],
})
