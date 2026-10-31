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

  idea:
    'Technical drawing is done with instruments because a drawing is a '
    + 'measurement, not a picture. '
    + 'The drawing board holds the paper square. '
    + 'The tee square slides along its edge and draws horizontal lines. '
    + 'A set square stood on the tee square draws verticals, '
    + 'and its own angles give 30, 45, 60 and 90 degrees. '
    + 'The compasses draw circles and arcs, '
    + 'the dividers step off equal distances, '
    + 'the protractor measures any angle, '
    + 'and the scale rule measures length. '
    + 'The line types carry information. '
    + 'A thick continuous line is a visible outline. '
    + 'A thin continuous line is a construction, projection or dimension '
    + 'line. '
    + 'A thin dashed line is a hidden edge. '
    + 'A thin chain of long and short dashes is a centre line.',

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
    'You have drawn shapes with a ruler and measured angles before. '
    + 'This replaces free drawing with instruments, '
    + 'and gives each kind of line a meaning the reader can rely on.',

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

  idea:
    'The marking tools come first: '
    + 'the rule measures, the try square marks a right angle and tests one, '
    + 'the marking gauge lines parallel to an edge, '
    + 'the scriber marks metal. '
    + 'For cutting: the tenon saw cuts across wood, '
    + 'the hacksaw cuts metal, the chisel pares and cuts waste, '
    + 'the file smooths metal, the plane smooths wood. '
    + 'For holding: the vice and the clamp. '
    + 'For driving: the hammer, the mallet for a chisel handle, '
    + 'and the screwdriver that fits the screw. '
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
    'You have used scissors, a knife and a ruler at home. '
    + 'The workshop uses the same idea with tools that cut harder material, '
    + 'so the holding and the direction of cut now matter.',

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

  idea:
    'A balanced meal contains a carbohydrate for energy, '
    + 'a protein for growth and repair, '
    + 'a vegetable or fruit for vitamins, minerals and fibre, '
    + 'and a small amount of fat or oil. '
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
    'You learned the food groups and why each one is needed in primary '
    + 'school. '
    + 'This asks you to plan a real meal from them, '
    + 'to a price, and to cook it safely.',

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

  idea:
    'A temporary stitch holds cloth in place while you work: '
    + 'tacking, which is a long running stitch meant to be removed. '
    + 'The joining stitches are the running stitch, '
    + 'which is quick and weak, '
    + 'and the backstitch, '
    + 'where the needle goes back over the previous stitch each time, '
    + 'making an unbroken line of thread and a strong seam. '
    + 'The finishing stitches close an edge: '
    + 'hemming, slip stitch and blanket stitch. '
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
    'You have threaded a needle and sewn a button before. '
    + 'This names the stitches, says which is strong and why, '
    + 'and adds the finishing that stops a seam from fraying apart.',

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
