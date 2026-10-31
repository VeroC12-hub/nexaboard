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
    'To construct a triangle given three sides, '
    + 'draw one side as a base, '
    + 'then draw an arc of the second length from one end '
    + 'and an arc of the third from the other, '
    + 'and join the crossing point to both ends. '
    + 'A triangle given two sides and the included angle '
    + 'needs that angle constructed first. '
    + 'A square is constructed from one side, '
    + 'using perpendiculars and equal arcs. '
    + 'A regular hexagon fits inside a circle '
    + 'whose radius equals the side, '
    + 'so stepping the radius round the circumference marks all six '
    + 'corners. '
    + 'Dividing a line into equal parts is done with parallel lines, '
    + 'never by measuring.',

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
    + 'Wood joints include the butt, lap, housing, '
    + 'mortise and tenon, and dovetail. '
    + 'Metal is joined by rivets, nuts and bolts, soldering or welding. '
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
    + 'Drying in the sun or over a fire removes the water they need. '
    + 'Salting and sugaring draw water out of the food and out of the '
    + 'organisms. '
    + 'Smoking dries the surface and leaves substances that discourage '
    + 'growth. '
    + 'Cooling slows everything down; freezing stops most of it. '
    + 'Canning and bottling heat the food to kill organisms '
    + 'and then seal it so none can get back in. '
    + 'Fermenting encourages harmless organisms '
    + 'which make the food too acidic for harmful ones. '
    + 'Frying and covering with oil keep air away.',

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
    'Clothes last longer when they are treated according to their fibre. '
    + 'Cotton and linen take hot water, strong soap and a hot iron. '
    + 'Wool must be washed in cool water, squeezed rather than rubbed, '
    + 'and dried flat, '
    + 'because heat and rubbing make it shrink and felt. '
    + 'Silk needs mild soap and a cool iron. '
    + 'Synthetics such as polyester wash easily '
    + 'but melt or glaze under a hot iron. '
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
    + 'Then you test the idea by asking '
    + 'who exactly would buy, '
    + 'how many of them there are, '
    + 'what they pay now, '
    + 'who else supplies it, '
    + 'and what you would need to start: '
    + 'skill, equipment, space, materials, money. '
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
