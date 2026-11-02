/**
 * Stored lessons for JHS 2 Career Technology.
 *
 * Written at about grade 7, with a `brief` form on every topic.
 *
 * ── Four trades and one habit ──────────────────────────────────────────────
 *
 * Drawing, workshop, food and textiles again, plus the first business
 * lesson. The habit running through all five is working to a stated
 * standard instead of to the eye: a construction is exact, a joint is cut to
 * a tolerance, a preservation method must stop a named process, a garment is
 * washed according to its fibre, and a business idea is tested against a
 * need somebody will actually pay for.
 *
 * `business-idea` is written to refuse the thing learners always write,
 * which is a list of businesses they have seen. A need that is already met
 * by four shops on the same road is not an opportunity, and saying so is the
 * lesson.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── geometric construction ────────────────────────────────────────────── */

teach({
  topicId: 'geometric-drawing',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Plane figures are constructed from given information, '
      + 'not measured into place. '
      + 'An arc marks every point at one distance from a centre, '
      + 'so arcs are how you fix a point that must be two distances from '
      + 'two others. '
      + 'Three sides fix a triangle completely.',
    method: [
      'Draw the longest given line first, as the base.',
      'Use arcs to place each remaining point.',
      'Leave the arcs, and check the figure against the given sizes.',
    ],
  },

  idea:
    'Geometric construction builds a figure from the sizes you are given, '
    + 'using compasses and a straight edge, and measuring nothing. '
    + 'The constructions in the syllabus are few, '
    + 'and every one of them works the same way: '
    + 'an arc marks all the points a given distance from somewhere, '
    + 'and a corner is where two such arcs cross.',

  mechanism:
    'Every construction in the syllabus comes from one fact about arcs, '
    + 'and seeing it once removes the need to remember procedures. '
    + 'An arc of radius r from a point marks all the places r away from '
    + 'it. '
    + 'So if a corner of a triangle must be 5 cm from A and 7 cm from B, '
    + 'it lies somewhere on the 5 cm arc from A '
    + 'and somewhere on the 7 cm arc from B, '
    + 'which means it is where those two arcs cross. '
    + 'There is no measuring, no guessing, '
    + 'and the point is exact because it satisfies both conditions by '
    + 'construction. '
    + 'This is also why three sides fix a triangle completely '
    + 'while three angles do not. '
    + 'Given three sides there is only one crossing point, '
    + 'so only one triangle can be built. '
    + 'Given three angles you can build any size you like, '
    + 'which is what similar triangles are. '
    + 'The hexagon is the prettiest case. '
    + 'Six equilateral triangles fit round a point, '
    + 'because each has a 60 degree angle and six sixties make 360. '
    + 'So the side of a regular hexagon equals the radius of its circle, '
    + 'and stepping the compasses round at that setting '
    + 'lands exactly back where it started. '
    + 'If it does not, your radius changed, and the drawing tells you so.',

  recap:
    'You have constructed 60 and 90 degrees and their bisectors. '
    + 'This uses the same arcs to build whole figures '
    + 'from the measurements you are given.',

  method: [
    'Read the given sizes and list them.',
    'Draw the longest side as the base, slightly longer than needed.',
    'For each unknown point, ask which two distances fix it.',
    'Draw an arc for each of those distances.',
    'Mark the crossing and join the lines.',
    'Keep the compasses at one setting for each step.',
    'Leave the arcs on the paper.',
    'Measure the finished figure against the given sizes as a check.',
    'Label every vertex and dimension.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How do you construct a triangle of sides 6, 5 and 4 cm?',
      steps: [
        'Draw the 6 cm side as the base.',
        'Arc 5 cm from one end.',
        'Arc 4 cm from the other.',
        'Join the crossing to both ends.',
      ],
      answer: 'The crossing of the two arcs is the third vertex, '
        + 'because it is 5 cm from one end and 4 cm from the other.',
    },
    {
      level: 4,
      ask: 'Why does the side of a regular hexagon equal the radius of its '
        + 'circle?',
      steps: [
        'A hexagon divides into six triangles from its centre.',
        'Each central angle is 360 divided by 6, which is 60.',
        'A triangle with a 60 degree angle and two equal sides is '
          + 'equilateral.',
        'So its third side equals the radius.',
      ],
      answer: 'Because the six triangles from the centre are equilateral, '
        + 'so each side equals the radius. '
        + 'That is why stepping the radius round the circle marks the '
        + 'corners.',
    },
    {
      level: 5,
      ask: 'Why do three given sides fix a triangle '
        + 'when three given angles do not?',
      steps: [
        'Three sides give two arcs with one crossing point.',
        'So exactly one triangle can be constructed.',
        'Three angles give a shape but no size.',
        'Any enlargement of it has the same three angles.',
      ],
      answer: 'Three sides allow only one crossing point, so one triangle. '
        + 'Three angles fix the shape but not the size, '
        + 'so infinitely many similar triangles satisfy them.',
    },
  ],

  traps: [
    {
      mistake: 'Measuring a point into place with a ruler.',
      why: 'The question says construct. '
        + 'Arcs give an exact point; a ruler gives an approximate one.',
    },
    {
      mistake: 'Changing the compass radius during a step.',
      why: 'The arc then no longer marks the distance you meant.',
    },
    {
      mistake: 'Rubbing out the arcs.',
      why: 'They are the evidence and they carry marks.',
    },
    {
      mistake: 'Starting from the shortest side.',
      why: 'Working from the longest base makes the arcs cross at a clear '
        + 'angle, so the point is easy to read.',
    },
  ],

  extension:
    'Dividing a line into five equal parts uses no measurement at all: '
    + 'draw any line from one end, '
    + 'step five equal arcs along it, '
    + 'join the last to the far end, '
    + 'and draw parallels back. '
    + 'It works for any number, including ones a ruler cannot divide '
    + 'neatly.',

  figure: {
    alt: 'On the left, a triangle built from three given sides: an arc of 5 '
      + 'cm swung from A and an arc of 7 cm swung from B cross at C, which '
      + 'is marked as the only point that is both distances at once. On '
      + 'the right, a regular hexagon inside its circle, with all six '
      + 'radii drawn, because the side of the hexagon equals the radius '
      + 'and the compasses step round it exactly six times.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">an arc marks every point that far from the centre</text>'
      + '<path d="M 176 224 A 130 130 0 0 0 39 128" stroke-width="1.5"/>'
      + '<path d="M 192 98 A 170 170 0 0 0 90 200" stroke-width="1.5"/>'
      + '<path d="M 50 258 H 250" stroke-width="4"/>'
      + '<path d="M 50 258 L 120 148" stroke-width="4"/>'
      + '<path d="M 250 258 L 120 148" stroke-width="4"/>'
      + '<text x="40" y="278" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">A</text>'
      + '<text x="262" y="278" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">B</text>'
      + '<text x="120" y="136" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">C</text>'
      + '<circle cx="120" cy="148" r="5" fill="#0f8a4d" stroke="none"/>'
      + '<text x="16" y="116" font-size="12" text-anchor="start" fill="currentColor" stroke="none">5 cm from A</text>'
      + '<text x="200" y="88" font-size="12" text-anchor="start" fill="currentColor" stroke="none">7 cm from B</text>'
      + '<text x="150" y="292" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">C is the only point that is both</text>'
      + '<circle cx="480" cy="168" r="88" stroke-width="1.5"/>'
      + '<path d="M 568 168 L 524 92 L 436 92 L 392 168 L 436 244 L 524 244 Z" stroke-width="4"/>'
      + '<path d="M 480 168 L 568 168" stroke-width="1.5"/>'
      + '<circle cx="568" cy="168" r="4" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 480 168 L 524 92" stroke-width="1.5"/>'
      + '<circle cx="524" cy="92" r="4" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 480 168 L 436 92" stroke-width="1.5"/>'
      + '<circle cx="436" cy="92" r="4" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 480 168 L 392 168" stroke-width="1.5"/>'
      + '<circle cx="392" cy="168" r="4" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 480 168 L 436 244" stroke-width="1.5"/>'
      + '<circle cx="436" cy="244" r="4" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 480 168 L 524 244" stroke-width="1.5"/>'
      + '<circle cx="524" cy="244" r="4" fill="#0f8a4d" stroke="none"/>'
      + '<text x="480" y="292" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">the side equals the radius, so step</text>'
      + '<text x="480" y="310" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">the compasses six times round</text>'
      + '<text x="320" y="352" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so nothing is measured: each point is fixed</text>'
      + '<text x="320" y="378" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">by the two distances it has to satisfy</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each construction, and what fixes the points in it',
      columns: ['To construct', 'Given', 'How each point is fixed'],
      rows: [
        ['A triangle', 'Three sides', 'The apex is where the two arcs cross'],
        [
          'A triangle',
          'Two sides and the angle between them',
          'Construct the angle first, then step off the two sides',
        ],
        [
          'A square',
          'One side',
          'A perpendicular at each end, then equal arcs',
        ],
        [
          'A regular hexagon',
          'The side',
          'Its circle has that radius, so step it six times round',
        ],
        [
          'Equal parts of a line',
          'How many parts',
          'Parallel lines across it, and never by measuring',
        ],
      ],
      note: 'Three sides fix a triangle completely, because there is only '
        + 'one crossing point. Three angles do not, because you may then '
        + 'build it any size you like, which is what similar triangles '
        + 'are.',
    },
  ],
  questions: [
    {
      id: 'gdr-1',
      ask: 'What fixes the third vertex of a triangle given three sides?',
      kind: 'choice',
      options: [
        'Where two arcs cross',
        'Where a protractor is placed',
        'The midpoint of the base',
      ],
      answer: 'Where two arcs cross',
      teach: 'Each arc marks one of the two required distances.',
      level: 3,
    },
    {
      id: 'gdr-2',
      ask: 'In a regular hexagon, the side length equals:',
      kind: 'choice',
      options: [
        'the radius of its circumscribed circle',
        'half the radius',
        'the diameter',
      ],
      answer: 'the radius of its circumscribed circle',
      teach: 'The six triangles from the centre are equilateral.',
      level: 4,
    },
    {
      id: 'gdr-3',
      ask: 'Why do three angles not fix a triangle?',
      kind: 'choice',
      options: [
        'They fix the shape but not the size',
        'Angles cannot be constructed',
        'Three angles are never given',
      ],
      answer: 'They fix the shape but not the size',
      teach: 'Any enlargement has the same three angles.',
      level: 5,
    },
  ],
})

/* ── working with wood and metal ──────────────────────────────────────── */

teach({
  topicId: 'wood-metal',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Measure twice and cut once, because material cannot be put back. '
      + 'Mark with a knife or scriber, not a pencil, when accuracy matters. '
      + 'Cut on the waste side of your line. '
      + 'A tolerance is how far out a piece may be and still fit.',
    method: [
      'Mark from one face and one edge throughout.',
      'Cut on the waste side of the line.',
      'Test the fit dry before any glue or fixing.',
    ],
  },

  idea:
    'Marking out comes first: '
    + 'choose a face and an edge as your reference, '
    + 'and measure everything from those two. '
    + 'Mark with a marking knife on wood or a scriber on metal, '
    + 'because a pencil line has width and a knife line does not. '
    + 'Use a try square to carry a line round, '
    + 'and a marking gauge for lines parallel to an edge. '
    + 'Cut on the waste side of the line, '
    + 'so the line itself survives for you to work down to. '
    + 'Wood and metal are each joined in several ways, '
    + 'and the choice turns on how much strength the job needs '
    + 'and whether it must ever come apart again. '
    + 'A tolerance is the allowed difference from the stated size.',

  mechanism:
    'Everything in this topic exists because material is one way. '
    + 'You can take wood off and you cannot put it back, '
    + 'so every rule here is about spending time before the cut '
    + 'rather than after it. '
    + 'Marking from one face and one edge is the clearest example. '
    + 'No piece of timber is perfectly square, '
    + 'so if you measure some things from one side and some from the other, '
    + 'the errors in the timber add into your work '
    + 'and nothing lines up at the end. '
    + 'Choose one face and one edge, mark them, '
    + 'and take every measurement from those, '
    + 'and the piece can be out of square without your work being out. '
    + 'The waste side rule is the same thinking. '
    + 'A saw cut removes a slot of material about a millimetre wide. '
    + 'Cut on the line and you lose half of that from your piece '
    + 'and the line with it, '
    + 'so you have nothing left to check against. '
    + 'Cut beside it, on the side you are throwing away, '
    + 'and the line survives for you to pare down to. '
    + 'Tolerance is the idea that makes all of this finite. '
    + 'Nothing is made exactly, '
    + 'so what matters is whether it is close enough for the job: '
    + 'a shelf may be two millimetres out and nobody will know, '
    + 'and a mortise two millimetres wide will never hold. '
    + 'Knowing which is which is most of the skill.',

  recap:
    'You can name the tools and use them safely. '
    + 'This is about accuracy: '
    + 'getting a piece to the size you intended '
    + 'and to a joint that fits.',

  method: [
    'Choose and mark a face side and a face edge.',
    'Measure everything from those two.',
    'Mark with a knife or scriber where accuracy matters.',
    'Carry lines round with a try square.',
    'Shade the waste so you cannot forget which side it is.',
    'Cut on the waste side of the line.',
    'Pare down to the line with a chisel or file.',
    'Test the joint dry before gluing or fixing.',
    'Check against the drawing, not against the previous piece.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Why mark with a knife rather than a pencil?',
      steps: [
        'A pencil line has width.',
        'A knife line has none.',
      ],
      answer: 'Because a pencil line is a millimetre wide, '
        + 'and you cannot tell which part of it you meant.',
    },
    {
      level: 4,
      ask: 'Why should every measurement be taken from one face and one '
        + 'edge?',
      steps: [
        'Timber is not perfectly square.',
        'Measuring from different sides lets its errors into your work.',
        'Measuring from one reference keeps those errors out.',
      ],
      answer: 'Because the timber itself is not square. '
        + 'Measuring from a single face and edge '
        + 'means the wood can be out without your work being out.',
    },
    {
      level: 5,
      ask: 'A learner saws exactly on his line and the joint is loose. '
        + 'Explain.',
      steps: [
        'A saw removes a slot about a millimetre wide.',
        'Cutting on the line removes half of that from the piece he is '
          + 'keeping.',
        'So the piece is undersized.',
        'And the line is gone, so he cannot see by how much.',
      ],
      answer: 'The saw cut removed material from the piece he was keeping, '
        + 'because the cut itself has width. '
        + 'He should have cut on the waste side and pared down to the line.',
    },
  ],

  traps: [
    {
      mistake: 'Cutting on the line.',
      why: 'The cut has width, so the piece comes out undersized '
        + 'and the line you needed is gone.',
    },
    {
      mistake: 'Measuring one piece from another instead of from the '
        + 'drawing.',
      why: 'Errors then accumulate down the whole job.',
    },
    {
      mistake: 'Gluing before testing the fit dry.',
      why: 'Glue sets. '
        + 'A dry test costs a minute and is the only chance to correct it.',
    },
    {
      mistake: 'Treating every dimension as equally critical.',
      why: 'A shelf length can be two millimetres out. '
        + 'A mortise cannot. Know which is which.',
    },
  ],

  extension:
    'A mortise and tenon is strong because it gives a large glue area '
    + 'and because the tenon is held on four faces, '
    + 'so the joint resists twisting as well as pulling. '
    + 'A butt joint has neither, which is why it needs a nail or a screw.',

  figure: {
    alt: 'The same marked board drawn twice, with the waste shaded on both. '
      + 'On the left the saw cut sits on the marked line, so half the slot '
      + 'is taken out of the piece and the line goes with it. On the right '
      + 'the cut sits beside the line on the waste side, so the line '
      + 'survives and the last of the waste can be pared down to it.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">the saw takes out a slot about a millimetre wide</text>'
      + '<text x="165" y="60" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">cut on the line</text>'
      + '<path d="M 40 78 H 290 V 176 H 40 Z" stroke-width="3"/>'
      + '<path d="M 206 90 L 218 78" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 206 102 L 230 78" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 206 114 L 242 78" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 206 126 L 254 78" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 206 138 L 266 78" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 206 150 L 278 78" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 206 162 L 290 78" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 206 174 L 290 90" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 216 176 L 290 102" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 228 176 L 290 114" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 240 176 L 290 126" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 252 176 L 290 138" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 264 176 L 290 150" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 276 176 L 290 162" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 288 176 L 290 174" stroke="currentColor" stroke-width="1.5"/>'
      + '<text x="248" y="196" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">waste</text>'
      + '<path d="M 196 78 V 176" stroke="#c8433a" stroke-width="9"/>'
      + '<path d="M 196 70 V 184" stroke="currentColor" stroke-width="1.5"/>'
      + '<text x="120" y="216" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">half the slot comes out of</text>'
      + '<text x="120" y="234" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">your piece, and the line</text>'
      + '<text x="120" y="252" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">goes with it</text>'
      + '<text x="475" y="60" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">cut beside it, on the waste</text>'
      + '<path d="M 350 78 H 600 V 176 H 350 Z" stroke-width="3"/>'
      + '<path d="M 512 90 L 524 78" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 512 102 L 536 78" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 512 114 L 548 78" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 512 126 L 560 78" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 512 138 L 572 78" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 512 150 L 584 78" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 512 162 L 596 78" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 512 174 L 600 86" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 522 176 L 600 98" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 534 176 L 600 110" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 546 176 L 600 122" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 558 176 L 600 134" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 570 176 L 600 146" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 582 176 L 600 158" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M 594 176 L 600 170" stroke="currentColor" stroke-width="1.5"/>'
      + '<text x="556" y="196" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">waste</text>'
      + '<path d="M 512 78 V 176" stroke="#0f8a4d" stroke-width="9"/>'
      + '<path d="M 506 70 V 184" stroke="currentColor" stroke-width="1.5"/>'
      + '<text x="430" y="216" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">the line survives, and you</text>'
      + '<text x="430" y="234" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">pare the last of the waste</text>'
      + '<text x="430" y="252" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">down to it</text>'
      + '<text x="320" y="306" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">you can take wood off and you cannot put it back,</text>'
      + '<text x="320" y="332" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so the time is spent before the cut, not after it</text>'
      + '<text x="320" y="368" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">shade the waste first, so you cannot forget which side it is</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The wood joints, and the work each one suits',
      columns: ['Joint', 'What it is', 'Where it suits'],
      rows: [
        [
          'Butt',
          'Two square ends simply meeting',
          'Quickest and weakest: it needs nails, screws or glue',
        ],
        [
          'Lap',
          'Each piece cut half away so they overlap',
          'Stronger, because there is far more gluing area',
        ],
        [
          'Housing',
          'A trench cut across one piece for the other',
          'A shelf into an upright',
        ],
        [
          'Mortise and tenon',
          'A tongue on one piece into a hole in the other',
          'A frame: a table, a stool, a door',
        ],
        [
          'Dovetail',
          'Splayed pins that cannot be pulled straight out',
          'A drawer front, which is pulled every day',
        ],
      ],
      note: 'The strength of a joint is mostly the area of the surfaces '
        + 'being held together, which is why the butt joint is the weak '
        + 'one.',
    },
    {
      caption: 'How metal is joined, and when each is used',
      columns: ['Method', 'What it does', 'When it is used'],
      rows: [
        [
          'Rivets',
          'A pin spread at both ends to clamp the pieces',
          'A permanent joint without heat',
        ],
        [
          'Nuts and bolts',
          'Clamps the pieces, and undoes again',
          'Anything you may need to take apart',
        ],
        [
          'Soldering',
          'Joins with a softer metal melted between',
          'Light work, and electrical joints',
        ],
        [
          'Welding',
          'Melts the two pieces so they run together',
          'The strongest, where nothing must ever move',
        ],
      ],
      note: 'Only welding makes the two pieces into one. The rest hold two '
        + 'pieces against each other, which is why a bolt can be undone.',
    },
  ],
  questions: [
    {
      id: 'wmt-1',
      ask: 'On which side of your line should you cut?',
      kind: 'choice',
      options: ['The waste side', 'Exactly on it', 'Either side'],
      answer: 'The waste side',
      teach: 'The cut has width, so cutting on the line makes the piece '
        + 'undersized.',
      level: 3,
    },
    {
      id: 'wmt-2',
      ask: 'What is a tolerance?',
      kind: 'choice',
      options: [
        'How far from the stated size a piece may be and still work',
        'The thickness of a saw cut',
        'The strength of a joint',
      ],
      answer: 'How far from the stated size a piece may be and still work',
      teach: 'Nothing is made exactly, so what matters is close enough for '
        + 'the job.',
      level: 4,
    },
    {
      id: 'wmt-3',
      ask: 'Why mark from one face and one edge only?',
      kind: 'choice',
      options: [
        'The timber is not square, and this keeps its errors out of your '
          + 'work',
        'It is faster',
        'The try square only works one way',
      ],
      answer: 'The timber is not square, and this keeps its errors out of '
        + 'your work',
      teach: 'Measuring from both sides lets the material’s faults into '
        + 'your measurements.',
      level: 5,
    },
  ],
})

/* ── food preservation ─────────────────────────────────────────────────── */

teach({
  topicId: 'food-preservation',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Food spoils because micro-organisms and enzymes work on it. '
      + 'Every preservation method removes one of the things they need: '
      + 'water, warmth, air, or a mild acidity. '
      + 'Drying removes water, '
      + 'cooling removes warmth, '
      + 'smoking and salting remove water and add substances they dislike.',
    method: [
      'Name what the method takes away or adds.',
      'Say which organism or process is stopped.',
      'Say what the method does not stop.',
    ],
  },

  idea:
    'Food spoils because bacteria, yeasts and moulds grow on it, '
    + 'and because the food’s own enzymes keep working. '
    + 'Those organisms need particular conditions to grow: '
    + 'water, warmth, food, usually air, '
    + 'and a range of acidity they can live in. '
    + 'Every method of preserving food takes one of those away.',

  mechanism:
    'Preservation looks like a list of unrelated traditions '
    + 'and is one idea applied several ways. '
    + 'Spoilage is caused by living things, '
    + 'and living things need particular conditions: '
    + 'water, warmth, food, and usually air, within a range of acidity. '
    + 'Take any one of those away and growth stops. '
    + 'That is the whole topic, '
    + 'and it lets you work out a method you were never taught '
    + 'and judge one you were. '
    + 'Dried fish keeps because there is no water for bacteria to live in, '
    + 'which is also why it spoils as soon as it is left out in the rain. '
    + 'Salted meat keeps because salt pulls the water out of the bacteria '
    + 'themselves. '
    + 'A refrigerator does not kill anything, '
    + 'which is why its food still spoils, only slowly, '
    + 'and why a power cut for a day matters. '
    + 'Canning is the only common method that kills first and then '
    + 'excludes, '
    + 'which is why a dented or swollen tin is dangerous: '
    + 'the seal has failed and the exclusion was the second half of the '
    + 'method. '
    + 'Knowing what a method does NOT stop is as useful as knowing what it '
    + 'does. '
    + 'Drying does not kill bacteria, it only stops them growing, '
    + 'so dried food re-wetted can spoil quickly. '
    + 'Freezing does not kill them either, '
    + 'so thawed food must be treated as fresh and not refrozen.',

  recap:
    'You know food goes bad and that a refrigerator slows it. '
    + 'This explains why each traditional method works, '
    + 'in terms of what it takes away from the organisms.',

  method: [
    'Name the method.',
    'Say what it removes: water, warmth, air.',
    'Or say what it adds: salt, sugar, smoke, acid.',
    'Name what is stopped: bacteria, moulds, yeasts, enzymes.',
    'Say what the method does not stop.',
    'Give one food it suits and one it does not.',
    'State one hygiene point for the method.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What does drying remove from food?',
      steps: [
        'Micro-organisms need water.',
      ],
      answer: 'Water, so micro-organisms cannot grow.',
    },
    {
      level: 4,
      ask: 'Why does food in a refrigerator still go bad eventually?',
      steps: [
        'Cooling does not kill micro-organisms.',
        'It only slows their growth.',
        'Slow growth is still growth.',
      ],
      answer: 'Because cooling only slows the organisms down. '
        + 'They are still alive and still growing, just more slowly.',
    },
    {
      level: 5,
      ask: 'Why is a swollen tin of food dangerous?',
      steps: [
        'Canning kills the organisms and then seals them out.',
        'Swelling means gas is being produced inside.',
        'Gas means something living is growing in there.',
        'So the seal failed, and the second half of the method is gone.',
      ],
      answer: 'Because the swelling is gas from organisms growing inside, '
        + 'which means the seal has failed. '
        + 'Canning works by killing and then excluding, '
        + 'and the exclusion has been lost.',
    },
  ],

  traps: [
    {
      mistake: 'Saying drying or freezing kills bacteria.',
      why: 'Neither does. '
        + 'They stop growth, which is why re-wetted or thawed food spoils '
        + 'fast.',
    },
    {
      mistake: 'Naming a method without saying what it removes.',
      why: 'The mark is for the mechanism. '
        + 'Salting removes water from the organisms.',
    },
    {
      mistake: 'Refreezing thawed food.',
      why: 'Thawed food has been at a temperature where organisms grow. '
        + 'Treat it as fresh.',
    },
    {
      mistake: 'Thinking a bad smell is the first sign of danger.',
      why: 'Some organisms produce no smell at all. '
        + 'Judge by the method and the time, not by the nose.',
    },
  ],

  extension:
    'Pasteurising milk is a compromise. '
    + 'The heat is high enough to kill the dangerous organisms. '
    + 'It is not high enough to spoil the taste. '
    + 'So the milk keeps for days rather than months, '
    + 'and it still has to be kept cold.',

  figure: {
    alt: 'Bacteria, yeasts and moulds drawn in the middle, with four things '
      + 'they need pointing in at them: water, warmth, air, and an acidity '
      + 'they can live in. The arrow from water is crossed out in red and '
      + 'labelled with the methods that remove it, dry it, salt it, smoke '
      + 'it, to show that taking away any one of the four is enough.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">they need all of these, and you only have to remove one</text>'
      + '<ellipse cx="320" cy="208" rx="86" ry="54"/>'
      + '<text x="320" y="196" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">bacteria, yeasts</text>'
      + '<text x="320" y="218" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">and moulds</text>'
      + '<path d="M 30 62 H 170 V 110 H 30 Z" stroke="#c8433a"/>'
      + '<text x="100" y="92" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">water</text>'
      + '<path d="M 170 110 L 244 172" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 252 178 L 232 174 L 242 162 Z" fill="#c8433a" stroke="none"/>'
      + '<path d="M 192 128 L 220 156" stroke="#c8433a" stroke-width="5"/>'
      + '<path d="M 220 128 L 192 156" stroke="#c8433a" stroke-width="5"/>'
      + '<text x="150" y="150" font-size="13" text-anchor="end" fill="#c8433a" stroke="none">dry it, salt it,</text>'
      + '<text x="150" y="168" font-size="13" text-anchor="end" fill="#c8433a" stroke="none">smoke it</text>'
      + '<path d="M 470 62 H 610 V 110 H 470 Z"/>'
      + '<text x="540" y="92" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">warmth</text>'
      + '<path d="M 470 110 L 396 172" stroke-width="2"/>'
      + '<path d="M 388 178 L 398 162 L 408 174 Z" fill="currentColor" stroke="none"/>'
      + '<text x="490" y="150" font-size="13" text-anchor="start" fill="currentColor" stroke="none">cool it,</text>'
      + '<text x="490" y="168" font-size="13" text-anchor="start" fill="currentColor" stroke="none">freeze it</text>'
      + '<path d="M 30 300 H 170 V 348 H 30 Z"/>'
      + '<text x="100" y="330" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">air</text>'
      + '<path d="M 170 300 L 244 244" stroke-width="2"/>'
      + '<path d="M 252 238 L 242 254 L 232 242 Z" fill="currentColor" stroke="none"/>'
      + '<text x="150" y="268" font-size="13" text-anchor="end" fill="currentColor" stroke="none">seal it, or cover</text>'
      + '<text x="150" y="286" font-size="13" text-anchor="end" fill="currentColor" stroke="none">it with oil</text>'
      + '<path d="M 450 300 H 610 V 348 H 450 Z"/>'
      + '<text x="530" y="324" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">acidity they</text>'
      + '<text x="530" y="344" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">can live in</text>'
      + '<path d="M 450 300 L 396 244" stroke-width="2"/>'
      + '<path d="M 388 238 L 406 244 L 396 256 Z" fill="currentColor" stroke="none"/>'
      + '<text x="490" y="268" font-size="13" text-anchor="start" fill="currentColor" stroke="none">ferment it, so the</text>'
      + '<text x="490" y="286" font-size="13" text-anchor="start" fill="currentColor" stroke="none">harmless ones win</text>'
      + '<text x="320" y="374" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">canning is the one that kills first and then seals,</text>'
      + '<text x="320" y="394" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">which is why a dented or swollen tin is dangerous</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What each method takes away, and what it leaves untouched',
      columns: ['Method', 'What it takes away', 'What it does not do'],
      rows: [
        [
          'Drying',
          'The water they need',
          'It kills nothing, so re-wetted food spoils quickly',
        ],
        [
          'Salting or sugaring',
          'Water, pulled out of the organisms themselves',
          'It kills nothing either',
        ],
        [
          'Smoking',
          'Surface water, and it leaves substances they dislike',
          'It does not reach far inside the food',
        ],
        [
          'Cooling',
          'Warmth, so everything slows',
          'It kills nothing, which is why a day without power matters',
        ],
        [
          'Freezing',
          'Warmth, so growth almost stops',
          'Thawed food is fresh food again, and must not be refrozen',
        ],
        [
          'Canning and bottling',
          'The organisms by heat, then the air by a seal',
          'It fails completely if the seal fails',
        ],
        [
          'Fermenting',
          'The acidity harmful organisms need',
          'It depends on the harmless ones winning first',
        ],
        [
          'Frying, or covering with oil',
          'The air',
          'It does not kill what is already inside',
        ],
      ],
      note: 'Knowing what a method does not stop is as useful as knowing '
        + 'what it does. That is why a dented or swollen tin is '
        + 'dangerous: the seal was the second half of the method.',
    },
  ],
  questions: [
    {
      id: 'fpr-1',
      ask: 'Why does salting preserve meat?',
      kind: 'choice',
      options: [
        'It draws water out of the organisms',
        'It makes the meat too hard to eat',
        'It adds nutrients',
      ],
      answer: 'It draws water out of the organisms',
      teach: 'Without water they cannot grow.',
      level: 3,
    },
    {
      id: 'fpr-2',
      ask: 'What does cooling do to micro-organisms?',
      kind: 'choice',
      options: [
        'Slows their growth without killing them',
        'Kills them',
        'Removes them',
      ],
      answer: 'Slows their growth without killing them',
      teach: 'Which is why refrigerated food still spoils, only slowly.',
      level: 4,
    },
    {
      id: 'fpr-3',
      ask: 'What do all preservation methods have in common?',
      kind: 'choice',
      options: [
        'Each removes something the organisms need',
        'Each uses heat',
        'Each adds a chemical',
      ],
      answer: 'Each removes something the organisms need',
      teach: 'Water, warmth, air, or a tolerable acidity.',
      level: 5,
    },
  ],
})

/* ── care of clothing ─────────────────────────────────────────────────── */

teach({
  topicId: 'care-of-clothing',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'How a garment is washed depends on its fibre. '
      + 'Cotton takes hot water and hard treatment. '
      + 'Wool shrinks and felts in hot water and with rubbing. '
      + 'Synthetics melt under a hot iron. '
      + 'Mend a small tear at once, because it grows every wash.',
    method: [
      'Identify the fibre before choosing water, soap or iron setting.',
      'Sort by colour and by fibre, not just by how dirty things are.',
      'Mend before washing, not after.',
    ],
  },

  idea:
    'Clothes last longer when they are treated according to their fibre, '
    + 'because the fibres are different materials '
    + 'and each is ruined by a different thing. '
    + 'Clothes should be sorted by colour and fibre before washing, '
    + 'stains treated before the main wash, '
    + 'and garments mended before they are washed again. '
    + 'Store clean, dry, and loosely, '
    + 'with hanging for things that crease '
    + 'and folding for knitted things that stretch.',

  mechanism:
    'The reason the rules differ by fibre is that the fibres are different '
    + 'materials, '
    + 'and knowing one thing about each explains all its rules. '
    + 'Wool is a protein fibre with tiny scales on its surface. '
    + 'In hot water with rubbing those scales open, catch on each other, '
    + 'and lock, '
    + 'so the garment becomes smaller and denser and does not come back. '
    + 'That is felting, and it is a one way change, '
    + 'which is why wool is the fibre people ruin. '
    + 'Synthetics are plastic, drawn into threads. '
    + 'Plastic softens with heat, '
    + 'so a hot iron does not scorch a synthetic the way it scorches '
    + 'cotton, '
    + 'it melts it, leaving a shiny patch or a hole that cannot be mended. '
    + 'Cotton is cellulose, which tolerates heat and water well, '
    + 'and that is why cotton gets treated as the normal case '
    + 'and everything else looks like an exception. '
    + 'Mending early has a mechanical reason too. '
    + 'Cloth is threads under tension. '
    + 'A small tear concentrates all the pull at its two ends, '
    + 'so each wash lengthens it, '
    + 'and a tear that takes two stitches today takes a patch next month. '
    + 'None of this is about tidiness. '
    + 'It is about which changes can be undone and which cannot.',

  recap:
    'You can sew a seam and finish an edge. '
    + 'This is about keeping a garment serviceable: '
    + 'washing it according to its fibre and mending it in time.',

  method: [
    'Read the label, or identify the fibre by feel and by burn test '
      + 'if taught.',
    'Sort by colour and by fibre.',
    'Treat stains before the main wash.',
    'Choose the water temperature from the fibre.',
    'Squeeze wool; do not rub or wring it.',
    'Dry wool flat and out of direct sun.',
    'Test the iron on a hidden part first.',
    'Iron synthetics cool and cotton hot.',
    'Mend small damage before the next wash.',
    'Store clean, dry and loose, hanging or folded as the fibre needs.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How should a woollen jumper be dried?',
      steps: [
        'Hanging stretches it while wet.',
        'Heat and sun damage the fibre.',
      ],
      answer: 'Flat, out of direct sun.',
    },
    {
      level: 4,
      ask: 'Why does a hot iron ruin a polyester shirt differently '
        + 'from a cotton one?',
      steps: [
        'Cotton is cellulose and scorches.',
        'Polyester is a plastic and softens with heat.',
        'Softened plastic sticks and deforms.',
      ],
      answer: 'Because polyester is a plastic, so it melts rather than '
        + 'scorching, leaving a shiny patch or a hole that cannot be '
        + 'repaired.',
    },
    {
      level: 5,
      ask: 'Why does a woollen garment shrink and never come back?',
      steps: [
        'Wool fibres have scales on their surface.',
        'Hot water and rubbing make the scales lift.',
        'Lifted scales catch and lock together.',
        'The locking cannot be undone by washing again.',
      ],
      answer: 'Because heat and rubbing make the scales on the fibres lock '
        + 'together, which is felting. '
        + 'It is a one way change, so no later washing reverses it.',
    },
  ],

  traps: [
    {
      mistake: 'Washing everything at the same temperature.',
      why: 'Hot water felts wool and sets some stains. '
        + 'The fibre decides.',
    },
    {
      mistake: 'Rubbing or wringing wool.',
      why: 'Rubbing is half of what causes felting. Squeeze instead.',
    },
    {
      mistake: 'Ironing a synthetic at a cotton setting.',
      why: 'It melts rather than scorching, and cannot be repaired.',
    },
    {
      mistake: 'Leaving a small tear until later.',
      why: 'The pull concentrates at its ends, so every wash lengthens it.',
    },
    {
      mistake: 'Storing clothes damp or dirty.',
      why: 'Mould and insects need exactly that, '
        + 'and both damage the fibre itself.',
    },
  ],

  extension:
    'A burn test identifies an unlabelled fibre: '
    + 'cotton burns to a soft grey ash and smells of paper, '
    + 'wool smells of burnt hair and leaves a crushable bead, '
    + 'and a synthetic melts into a hard bead. '
    + 'It is done on a loose thread, never on the garment.',

  figure: {
    alt: 'Two wool fibres drawn twice. In green, after cool water and '
      + 'squeezing, their scales lie flat and the fibres slide past each '
      + 'other at their full length. In red, after hot water and rubbing, '
      + 'the scales have opened and meshed into each other, and an arrow '
      + 'underneath shows the pair is now markedly shorter.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">a wool fibre has scales, and they only lock one way</text>'
      + '<text x="160" y="62" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">cool water, squeezed</text>'
      + '<text x="160" y="82" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">the scales lie flat and slide past each other</text>'
      + '<path d="M 40 130 L 56 118 L 72 130 L 88 118 L 104 130 L 120 118 L 136 130 L 152 118 L 168 130 L 184 118 L 200 130 L 216 118 L 232 130 L 248 118 L 264 130 L 280 118" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 40 130 H 280" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 40 176 L 56 164 L 72 176 L 88 164 L 104 176 L 120 164 L 136 176 L 152 164 L 168 176 L 184 164 L 200 176 L 216 164 L 232 176 L 248 164 L 264 176 L 280 164" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 40 176 H 280" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 40 208 H 272" stroke="#0f8a4d" stroke-width="1.5"/>'
      + '<path d="M 40 208 L 54 203 L 54 213 Z" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 280 208 L 266 203 L 266 213 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="160" y="232" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">the length you bought</text>'
      + '<text x="480" y="62" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">hot water, rubbed</text>'
      + '<text x="480" y="82" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">the scales open, catch on each other and lock</text>'
      + '<path d="M 400 130 L 406 152 L 412 130 L 418 152 L 424 130 L 430 152 L 436 130 L 442 152 L 448 130 L 454 152 L 460 130 L 466 152 L 472 130 L 478 152 L 484 130 L 490 152 L 496 130 L 502 152 L 508 130 L 514 152 L 520 130" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 400 130 H 520" stroke="#c8433a" stroke-width="3"/>'
      + '<path d="M 406 178 L 412 156 L 418 178 L 424 156 L 430 178 L 436 156 L 442 178 L 448 156 L 454 178 L 460 156 L 466 178 L 472 156 L 478 178 L 484 156 L 490 178 L 496 156 L 502 178 L 508 156 L 514 178" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 400 178 H 520" stroke="#c8433a" stroke-width="3"/>'
      + '<path d="M 400 208 H 512" stroke="#c8433a" stroke-width="1.5"/>'
      + '<path d="M 400 208 L 414 203 L 414 213 Z" fill="#c8433a" stroke="none"/>'
      + '<path d="M 520 208 L 506 203 L 506 213 Z" fill="#c8433a" stroke="none"/>'
      + '<text x="460" y="232" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">and the length afterwards</text>'
      + '<path d="M 300 150 H 360" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 372 150 L 352 141 L 352 159 Z" fill="#c8433a" stroke="none"/>'
      + '<text x="334" y="138" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">heat and</text>'
      + '<text x="334" y="178" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">rubbing</text>'
      + '<text x="320" y="294" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">the garment becomes smaller and denser,</text>'
      + '<text x="320" y="320" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">and it does not come back: that is felting</text>'
      + '<text x="320" y="358" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">synthetics are plastic, so a hot iron does not scorch them,</text>'
      + '<text x="320" y="378" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">it melts them, and the shiny patch cannot be mended either</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each fibre, what it is made of, and the one thing that '
        + 'ruins it',
      columns: ['Fibre', 'What it is', 'How to treat it', 'What ruins it'],
      rows: [
        [
          'Cotton and linen',
          'Cellulose, from plants',
          'Hot water, strong soap, a hot iron',
          'Very little, which is why it is treated as the normal case',
        ],
        [
          'Wool',
          'Protein, with tiny scales on every fibre',
          'Cool water, squeeze rather than rub, dry flat',
          'Heat and rubbing: the scales lock, and it felts',
        ],
        [
          'Silk',
          'Protein, and smooth',
          'Mild soap, a cool iron',
          'Strong soap, and a hot iron',
        ],
        [
          'Polyester and other synthetics',
          'Plastic, drawn out into threads',
          'Washes easily, a warm iron at most',
          'A hot iron melts it, leaving a shiny patch or a hole',
        ],
      ],
      note: 'None of this is about tidiness. It is about which changes can '
        + 'be undone and which cannot, and felting and melting are both '
        + 'the second kind.',
    },
  ],
  questions: [
    {
      id: 'clo-1',
      ask: 'Which fibre must be washed in cool water?',
      kind: 'choice',
      options: ['Wool', 'Cotton', 'Linen'],
      answer: 'Wool',
      teach: 'Hot water and rubbing make it felt, and felting is '
        + 'permanent.',
      level: 3,
    },
    {
      id: 'clo-2',
      ask: 'Why mend a small tear immediately?',
      kind: 'choice',
      options: [
        'The pull concentrates at its ends, so it grows',
        'It looks untidy',
        'Thread is cheaper now',
      ],
      answer: 'The pull concentrates at its ends, so it grows',
      teach: 'Two stitches today, a patch next month.',
      level: 4,
    },
    {
      id: 'clo-3',
      ask: 'Why does a hot iron damage polyester?',
      kind: 'choice',
      options: [
        'It is a plastic and melts',
        'It is too thin',
        'It holds water',
      ],
      answer: 'It is a plastic and melts',
      teach: 'Cotton scorches; a synthetic melts, which cannot be mended.',
      level: 5,
    },
  ],
})

/* ── finding a business idea ──────────────────────────────────────────── */

teach({
  topicId: 'business-idea',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A business idea is not a kind of shop. '
      + 'It is an unmet need that somebody will pay to have met. '
      + 'So you find one by looking for what people in your area complain '
      + 'about, travel far for, or wait too long for, '
      + 'and then checking that you could actually supply it.',
    method: [
      'Look for a need, not a trade.',
      'Check whether it is already met, and how well.',
      'Ask what it would take to supply it and whether you could.',
    ],
  },

  idea:
    'An opportunity is a need somebody will pay to have met. '
    + 'You find one by observing: '
    + 'what people in your community complain about, '
    + 'what they travel a long way to buy, '
    + 'what they queue or wait for, '
    + 'what spoils or is wasted, '
    + 'and what is only available at certain times. '
    + 'Then you test the idea with a handful of hard questions, '
    + 'and a real answer to each of them is what turns it from '
    + 'a thought into a plan. '
    + 'A good idea is one where the need is real, '
    + 'the supply is poor, '
    + 'and the starting requirement is within reach.',

  mechanism:
    'Asked for a business idea, almost every learner writes a list of '
    + 'businesses they have seen: '
    + 'a provision shop, a hairdresser, a mobile money stand. '
    + 'That is not an idea, it is a trade, '
    + 'and it is usually the trade that already has four of them on the '
    + 'same road. '
    + 'Opening a fifth is not an opportunity, '
    + 'because the need is already met, '
    + 'and the only way in is to be cheaper, which nobody new can afford to '
    + 'be. '
    + 'An idea starts at the other end, with the need. '
    + 'So the question to carry around is not "what business could I do" '
    + 'but "what do people here find difficult". '
    + 'The answers are specific and local and much more promising: '
    + 'tomatoes spoil before market day, '
    + 'the nearest person who repairs phone screens is two towns away, '
    + 'schoolchildren have nowhere to print, '
    + 'the water seller comes at a time when people are at work. '
    + 'Each of those names a need and a reason nobody has met it yet, '
    + 'which is what an opportunity is. '
    + 'Then comes the test that keeps it honest. '
    + 'A need you cannot supply is not your opportunity. '
    + 'Repairing screens needs a skill and a stock of parts, '
    + 'so if you have neither, '
    + 'the idea is a reason to learn rather than a business to start. '
    + 'That is not a failure of the idea. '
    + 'It is the difference between an idea and a plan, '
    + 'and knowing which you have is the point of the lesson.',

  recap:
    'You know what the factors of production are '
    + 'and that an entrepreneur carries the risk. '
    + 'This is the step before any of that: '
    + 'finding something worth producing.',

  method: [
    'Walk your community and write down what people find difficult.',
    'Note what they travel for, wait for, or waste.',
    'Pick one and state the need in one sentence.',
    'Say who exactly would pay, and roughly how many.',
    'Find out what they pay now and to whom.',
    'Count the existing suppliers and judge how well they do it.',
    'List what you would need: skill, tools, space, materials, money.',
    'Decide whether it is within reach now, or needs a step first.',
    'Say what the first small test of the idea would be.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which is a business idea, and which is only a trade? '
        + '(a) "A provision shop." '
        + '(b) "Tomatoes spoil before market day, '
        + 'so a cold store box could be rented by the basket."',
      steps: [
        'An idea names a need.',
        'A trade only names a kind of business.',
      ],
      answer: '(b) is an idea. (a) is a trade.',
    },
    {
      level: 4,
      ask: 'There are already four provision shops on your road. '
        + 'Why is opening a fifth a poor idea?',
      steps: [
        'The need is already being met.',
        'Customers have no reason to change.',
        'The only way in is a lower price.',
        'A new business has the least ability to be cheapest.',
      ],
      answer: 'Because the need is already met, '
        + 'so the only way to win customers is price, '
        + 'and a new small business is the least able to compete on price.',
    },
    {
      level: 5,
      ask: 'You notice nobody nearby repairs phone screens, '
        + 'and you cannot do it. Is this your opportunity?',
      steps: [
        'The need is real and unmet.',
        'But supplying it needs a skill and parts.',
        'You have neither at present.',
        'So it is an idea, not yet a plan.',
      ],
      answer: 'It is a real opportunity and not yet yours. '
        + 'The need is unmet, '
        + 'but supplying it needs a skill and a stock of parts, '
        + 'so the next step is learning the skill, not opening a shop.',
    },
  ],

  traps: [
    {
      mistake: 'Naming a trade instead of a need.',
      why: '"A hairdressing salon" says nothing about whether anybody '
        + 'needs another one.',
    },
    {
      mistake: 'Entering a market that is already well supplied.',
      why: 'The only way in is price, '
        + 'and that is the one thing a new business cannot win on.',
    },
    {
      mistake: 'Skipping the question of who would pay.',
      why: 'A need nobody will pay for is a problem, not a business.',
    },
    {
      mistake: 'Treating "I cannot do it yet" as the end of the idea.',
      why: 'It means the first step is a skill. '
        + 'The idea is still good.',
    },
  ],

  extension:
    'The cheapest way to test an idea is to sell a little of it before '
    + 'building anything: '
    + 'take ten orders, borrow the equipment, deliver, and see what '
    + 'happened. '
    + 'Most ideas fail on something nobody could have predicted, '
    + 'and a small test finds it before the money is spent.',

  figure: {
    alt: 'Two chains of reasoning side by side. The red one starts from '
      + 'what business could I do, reaches a provision shop, a hairdresser '
      + 'or a mobile money stand, and ends with four of them already on '
      + 'that road and the need already met. The green one starts from '
      + 'what do people here find difficult, reaches tomatoes spoiling '
      + 'before market day and nobody repairing phone screens, and ends '
      + 'with a real need nobody has met, which is what an opportunity is.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">start at the need, not at the list of businesses</text>'
      + '<path d="M 16 44 H 306 V 92 H 16 Z" stroke="#c8433a"/>'
      + '<text x="161" y="64" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">what business</text>'
      + '<text x="161" y="82" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">could I do?</text>'
      + '<path d="M 161 92 V 110" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 161 120 L 153 102 L 169 102 Z" fill="#c8433a" stroke="none"/>'
      + '<path d="M 16 122 H 306 V 194 H 16 Z" stroke="#c8433a"/>'
      + '<text x="161" y="146" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">a provision shop,</text>'
      + '<text x="161" y="166" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">a hairdresser, a</text>'
      + '<text x="161" y="186" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">mobile money stand</text>'
      + '<path d="M 161 194 V 212" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 161 222 L 153 204 L 169 204 Z" fill="#c8433a" stroke="none"/>'
      + '<path d="M 16 224 H 306 V 296 H 16 Z" stroke="#c8433a"/>'
      + '<text x="161" y="248" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">four of them are on</text>'
      + '<text x="161" y="268" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">that road already, and</text>'
      + '<text x="161" y="288" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">the need is already met</text>'
      + '<path d="M 334 44 H 624 V 92 H 334 Z" stroke="#0f8a4d"/>'
      + '<text x="479" y="64" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">what do people here</text>'
      + '<text x="479" y="82" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">find difficult?</text>'
      + '<path d="M 479 92 V 110" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 479 120 L 471 102 L 487 102 Z" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 334 122 H 624 V 194 H 334 Z" stroke="#0f8a4d"/>'
      + '<text x="479" y="146" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">tomatoes spoil before</text>'
      + '<text x="479" y="166" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">market day; nobody here</text>'
      + '<text x="479" y="186" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">repairs a phone screen</text>'
      + '<path d="M 479 194 V 212" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 479 222 L 471 204 L 487 204 Z" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 334 224 H 624 V 296 H 334 Z" stroke="#0f8a4d"/>'
      + '<text x="479" y="248" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">a real need, and a reason</text>'
      + '<text x="479" y="268" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">nobody has met it yet:</text>'
      + '<text x="479" y="288" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">that is an opportunity</text>'
      + '<text x="320" y="334" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">then the honest test: a need you cannot supply is not yours,</text>'
      + '<text x="320" y="356" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">and that is not a failure of the idea.</text>'
      + '<text x="320" y="382" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">It is a reason to learn rather than a business to start today</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The questions that test an idea before you spend anything '
        + 'on it',
      columns: ['The question', 'Why it is asked', 'A bad answer'],
      rows: [
        [
          'Who exactly would buy it?',
          'A real buyer has a name and a place',
          'Everybody',
        ],
        [
          'How many of them are there?',
          'It decides whether the thing is worth doing at all',
          'Not knowing, and not finding out',
        ],
        [
          'What do they pay now, and to whom?',
          'It gives you both the price and the rival',
          'Nothing, because there is no such thing yet',
        ],
        [
          'Who else supplies it, and how well?',
          'Poor supply is the opening; good supply is a wall',
          'Four of them on the same road',
        ],
        [
          'What would you need to start?',
          'Skill, equipment, space, materials, money',
          'Something you have none of and no way to get',
        ],
      ],
      note: 'If only the last question fails, the idea is still sound. It '
        + 'is then a reason to learn a skill rather than a business to '
        + 'start this month.',
    },
  ],
  questions: [
    {
      id: 'biz-1',
      ask: 'What is a business idea?',
      kind: 'choice',
      options: [
        'A need somebody will pay to have met',
        'A kind of shop',
        'An amount of money to start with',
      ],
      answer: 'A need somebody will pay to have met',
      teach: 'A trade is not an idea. The need is the idea.',
      level: 3,
    },
    {
      id: 'biz-2',
      ask: 'Where should you look for an opportunity?',
      kind: 'choice',
      options: [
        'What people complain about, travel for, or waste',
        'What businesses are most common',
        'What is easiest to start',
      ],
      answer: 'What people complain about, travel for, or waste',
      teach: 'Each of those names an unmet need.',
      level: 4,
    },
    {
      id: 'biz-3',
      ask: 'You find a real unmet need but have none of the skills. '
        + 'What is the next step?',
      kind: 'choice',
      options: [
        'Learn the skill; the idea is still good',
        'Abandon the idea',
        'Start anyway and learn later',
      ],
      answer: 'Learn the skill; the idea is still good',
      teach: 'It is an idea rather than a plan, '
        + 'and the gap tells you exactly what to do first.',
      level: 5,
    },
  ],
})
