/**
 * Stored lessons for JHS 3 Career Technology, Religious and Moral
 * Education, Ghanaian Language and French.
 *
 * Written at about grade 8, with a `brief` form on every topic.
 *
 * ── Career Technology: the year the project is actually made ──────────────
 *
 * Five topics that between them take an article from a brief to a price.
 * `make-a-project` and `garment-jhs` are the practical ones and are written
 * so the sequence can be learned and examined without a workshop, because
 * the order of operations is the examinable part and it does not change when
 * the tools are better.
 *
 * `costing-pricing` and `records-jhs` are the two that decide whether
 * somebody's trade survives, and both are written against the mistake
 * learners and real traders make: counting the materials and forgetting the
 * labour, and knowing the takings without knowing the profit.
 *
 * ── RME and GHL: the rules from JHS 1 and 2 hold ──────────────────────────
 *
 * Each faith reported as its own followers state it, nothing ranked, and
 * Ghanaian Language written across the written languages of Ghana.
 * `peace-tolerance` is deliberately argued from INSIDE each tradition,
 * because an argument for tolerance made from outside religion persuades
 * nobody who is religious.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── orthographic and pictorial drawing ────────────────────────────────── */

teach({
  topicId: 'orthographic-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An orthographic drawing shows an object in separate flat views: '
      + 'front, plan and end. '
      + 'A pictorial drawing shows it in one view that looks solid. '
      + 'The flat views are used to make the thing, '
      + 'because every length in them is true.',
    method: [
      'Choose the front view first: the one showing the most detail.',
      'Project the other views from it, lined up.',
      'Keep every length true; never shorten a line to make it look '
        + 'right.',
    ],
  },

  idea:
    'An orthographic drawing gives separate views '
    + 'looking straight at the object from different directions: '
    + 'the front elevation, the plan from above, '
    + 'and the end elevation from the side. '
    + 'The views are lined up with each other, '
    + 'so a feature in one can be followed into the next by projection '
    + 'lines. '
    + 'In first angle projection the plan is placed below the front view; '
    + 'in third angle it is placed above. '
    + 'A pictorial drawing shows the object as it looks: '
    + 'isometric, with vertical lines upright and the others at 30 '
    + 'degrees, '
    + 'or oblique, with the front face true and the depth at an angle. '
    + 'Hidden edges are shown with thin dashed lines in both.',

  mechanism:
    'The two kinds of drawing do opposite jobs, '
    + 'and knowing which is which decides when to use each. '
    + 'A pictorial drawing is for understanding. '
    + 'One look tells you what the object is, '
    + 'which is why it goes at the front of an instruction sheet. '
    + 'What it cannot do is give you a true measurement, '
    + 'because in order to look solid '
    + 'it has drawn some lines at an angle and foreshortened others. '
    + 'An orthographic drawing is for making. '
    + 'Each view looks straight at one face, '
    + 'so every length in that view is the real length '
    + 'and can be measured or dimensioned. '
    + 'The cost is that no single view tells you what the object is, '
    + 'and you have to read three together. '
    + 'So the pair is a trade: understandable but unmeasurable, '
    + 'or measurable but needing to be read. '
    + 'Workshops use the orthographic drawing '
    + 'and that is not a convention, it is the only one you can work from. '
    + 'The projection lines are the other thing worth taking seriously. '
    + 'The views are lined up so that a height in the front view '
    + 'is at the same level as the same height in the end view, '
    + 'and a width in the front view '
    + 'is the same width in the plan. '
    + 'So you do not measure the same length twice. '
    + 'You project it, '
    + 'and the drawing stays consistent even if your first measurement was '
    + 'slightly out.',

  recap:
    'You can use the instruments and draw the standard line types. '
    + 'This arranges views of a solid object on the paper, '
    + 'so that somebody else can build it.',

  method: [
    'Decide the front view: the one showing the most about the object.',
    'Draw the border and title block.',
    'Draw the front view first, thin and light.',
    'Project the plan directly below or above it.',
    'Project the end elevation to the side, at the same heights.',
    'Use thin projection lines between the views.',
    'Show hidden edges with thin dashed lines.',
    'Add centre lines for holes and round features.',
    'Thicken the visible outlines only when the drawing is correct.',
    'Dimension each length once, and state the projection used.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which view looks at the object from above?',
      steps: [
        'Name the three views.',
      ],
      answer: 'The plan.',
    },
    {
      level: 4,
      ask: 'Why are the three views lined up with each other?',
      steps: [
        'A height in one view is the same height in another.',
        'So it can be carried across with a line.',
        'That avoids measuring the same length twice.',
      ],
      answer: 'So that lengths can be projected between views '
        + 'instead of being measured again, '
        + 'which keeps the whole drawing consistent.',
    },
    {
      level: 5,
      ask: 'Why does a workshop work from the orthographic drawing '
        + 'rather than the pictorial one?',
      steps: [
        'A pictorial drawing angles and shortens lines to look solid.',
        'So its lengths are not true.',
        'An orthographic view looks straight at one face.',
        'So every length in it is the real length.',
      ],
      answer: 'Because each orthographic view looks straight at a face, '
        + 'so its lengths are true and can be measured. '
        + 'A pictorial drawing distorts lengths in order to look solid.',
    },
  ],

  traps: [
    {
      mistake: 'Taking a measurement off a pictorial drawing.',
      why: 'Its lengths are foreshortened. '
        + 'Use the orthographic views.',
    },
    {
      mistake: 'Drawing the views out of line with each other.',
      why: 'The projection between them is the whole method, '
        + 'and marks are given for it.',
    },
    {
      mistake: 'Not saying which projection you used.',
      why: 'First and third angle put the plan in opposite places, '
        + 'so the drawing can be misread.',
    },
    {
      mistake: 'Dimensioning the same length in two views.',
      why: 'Two figures can disagree, '
        + 'and the maker cannot tell which to trust.',
    },
  ],

  extension:
    'A sectional view cuts the object open. '
    + 'The cut surface is then shown hatched. '
    + 'It is how a drawing shows the inside of a casting or a pipe, '
    + 'without a tangle of dashed lines.',

  questions: [
    {
      id: 'ort-1',
      ask: 'An isometric drawing has its non vertical lines at:',
      kind: 'choice',
      options: ['30 degrees', '45 degrees', '60 degrees'],
      answer: '30 degrees',
      teach: 'Vertical lines stay upright.',
      level: 3,
    },
    {
      id: 'ort-2',
      ask: 'Which drawing would you give to somebody making the article?',
      kind: 'choice',
      options: [
        'The orthographic views',
        'The isometric view',
        'Either one',
      ],
      answer: 'The orthographic views',
      teach: 'Only there are the lengths true.',
      level: 4,
    },
    {
      id: 'ort-3',
      ask: 'What are projection lines for?',
      kind: 'choice',
      options: [
        'Carrying a length from one view to another',
        'Showing hidden edges',
        'Marking the centre of a hole',
      ],
      answer: 'Carrying a length from one view to another',
      teach: 'So the same length is never measured twice.',
      level: 5,
    },
  ],
})

/* ── making a designed article ───────────────────────────────────────── */

teach({
  topicId: 'make-a-project',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A project runs in order. '
      + 'Brief, research, ideas, chosen design, working drawing, '
      + 'materials list, making, finishing, testing, evaluation. '
      + 'The order matters, because each step decides the next. '
      + 'The evaluation is marked on honesty, not on success.',
    method: [
      'Write the brief as what the article must do, not what it looks '
        + 'like.',
      'Produce more than one idea before choosing.',
      'Evaluate against the brief, and say what you would change.',
    ],
  },

  idea:
    'A design brief states what is needed and for whom. '
    + 'Research finds out what exists already and what the user needs. '
    + 'Several ideas are sketched, '
    + 'then one is chosen with reasons. '
    + 'A working drawing gives the dimensions and the materials. '
    + 'A materials list and a cutting list say what to buy and in what '
    + 'sizes. '
    + 'A plan of work puts the operations in order. '
    + 'The article is made, '
    + 'then finished: smoothed, painted, oiled or varnished. '
    + 'It is tested against the brief, '
    + 'and the evaluation says how far it met it '
    + 'and what would be done differently.',

  mechanism:
    'The brief is the part learners write badly '
    + 'and everything downstream depends on it. '
    + 'A brief that says "make a wooden stool" '
    + 'has decided the answer before asking the question, '
    + 'and it cannot be used to judge the finished article. '
    + 'A brief that says "a seat for a trader who sits for six hours '
    + 'and must carry it home" '
    + 'states what the thing must DO, '
    + 'and now every later decision has something to be checked against: '
    + 'it has to be comfortable for hours, and light enough to carry. '
    + 'So the brief is written in terms of function and user, '
    + 'and the design follows from it rather than preceding it. '
    + 'The second thing worth insisting on is more than one idea. '
    + 'A learner who sketches one design and builds it '
    + 'has not designed anything, '
    + 'and cannot say why that shape rather than another. '
    + 'Three rough sketches cost ten minutes '
    + 'and the choice between them is where the marks are, '
    + 'because the choice has reasons in it. '
    + 'The evaluation is the part that is most often wasted '
    + 'and is the easiest to do well. '
    + 'It is marked on honesty, not on how good the article is. '
    + '"The joints were loose because I cut on the line instead of the '
    + 'waste side, '
    + 'and next time I would mark with a knife" '
    + 'earns more than "my project came out very well", '
    + 'because the first shows that the maker learned something '
    + 'and the second shows nothing at all.',

  recap:
    'You can draw, measure, mark, cut and join, '
    + 'and you can work to a tolerance. '
    + 'This puts all of it in order and adds the thinking at each end.',

  method: [
    'Write the brief in terms of what the article must do and for whom.',
    'Research: what exists, what the user needs, what materials suit.',
    'Sketch at least three ideas.',
    'Choose one and give your reasons.',
    'Draw a working drawing with dimensions.',
    'Write a materials and cutting list.',
    'Write a plan of work in order.',
    'Make it, testing the fit as you go.',
    'Finish the surfaces.',
    'Test against the brief.',
    'Evaluate honestly, and say what you would change.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What comes before making?',
      steps: [
        'List the design stages in order.',
      ],
      answer: 'The brief, research, ideas, the chosen design, '
        + 'the working drawing, and the plan of work.',
    },
    {
      level: 4,
      ask: 'Improve this brief: "Make a wooden stool."',
      steps: [
        'It names the answer rather than the need.',
        'Say what it must do, and for whom.',
      ],
      answer: 'Something like: "A seat for a market trader '
        + 'who sits for six hours and must carry it home each evening." '
        + 'Now the design can be judged.',
    },
    {
      level: 5,
      ask: 'Which evaluation earns more, and why? '
        + '(a) "My project came out very well." '
        + '(b) "The joints were loose because I sawed on the line '
        + 'instead of the waste side."',
      steps: [
        'An evaluation is marked on honesty and on learning.',
        '(a) states a feeling and no evidence.',
        '(b) names a fault, its cause and the remedy.',
      ],
      answer: '(b). '
        + 'It names the fault, its cause and what would be done '
        + 'differently, '
        + 'which is what the evaluation is for.',
    },
  ],

  traps: [
    {
      mistake: 'A brief that names the article instead of the need.',
      why: 'Then nothing can be judged against it.',
    },
    {
      mistake: 'One idea only.',
      why: 'A choice with no alternatives is not a design decision.',
    },
    {
      mistake: 'Making before the working drawing is finished.',
      why: 'Every change afterwards wastes material.',
    },
    {
      mistake: 'An evaluation that says everything went well.',
      why: 'It is marked on honesty. '
        + 'A named fault with its cause earns more.',
    },
  ],

  extension:
    'A prototype made in cheap material '
    + 'tests the design before the good timber is cut. '
    + 'It is how a designer finds the mistake '
    + 'that no amount of drawing would have shown.',

  questions: [
    {
      id: 'prj-1',
      ask: 'A design brief should state:',
      kind: 'choice',
      options: [
        'what the article must do and for whom',
        'what the article looks like',
        'which materials to use',
      ],
      answer: 'what the article must do and for whom',
      teach: 'Then the finished article can be judged against it.',
      level: 3,
    },
    {
      id: 'prj-2',
      ask: 'How many ideas should you sketch before choosing?',
      kind: 'choice',
      options: ['Several', 'One', 'None, start making'],
      answer: 'Several',
      teach: 'The choice between them is where the design work is.',
      level: 4,
    },
    {
      id: 'prj-3',
      ask: 'What is an evaluation marked on?',
      kind: 'choice',
      options: [
        'Honesty about what went wrong and why',
        'How good the article is',
        'Its length',
      ],
      answer: 'Honesty about what went wrong and why',
      teach: 'A named fault with its cause shows you learned something.',
      level: 5,
    },
  ],
})

/* ── making a simple article ──────────────────────────────────────── */

teach({
  topicId: 'garment-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Measure the person, not the cloth. '
      + 'Add seam and hem allowances to every measurement '
      + 'before cutting. '
      + 'Lay the pattern with the grain of the fabric. '
      + 'Tack, fit, then stitch, in that order.',
    method: [
      'Take and write down every measurement before buying cloth.',
      'Add allowances, then cut.',
      'Tack and try it on before any permanent stitching.',
    ],
  },

  idea:
    'Making a simple article starts with measurements: '
    + 'length, width or bust, waist, hip, and any others the article '
    + 'needs, '
    + 'taken over the clothes it will be worn with '
    + 'and written down. '
    + 'The pattern is laid on the fabric with the grain, '
    + 'that is along the woven threads, '
    + 'and pinned. '
    + 'Seam allowances, usually one and a half centimetres, '
    + 'and a hem allowance, are added before cutting. '
    + 'The pieces are tacked together and fitted on the wearer, '
    + 'then stitched, '
    + 'then the raw edges are neatened and the hem is finished. '
    + 'The article is pressed at each stage, not only at the end.',

  mechanism:
    'Two things in this topic cannot be put right afterwards, '
    + 'and both happen before any stitching. '
    + 'The first is the allowance. '
    + 'Cloth cut to the exact measurement '
    + 'has nothing left to make a seam with, '
    + 'so the finished article is smaller than the person by two seams on '
    + 'every side. '
    + 'The allowance is not a safety margin; '
    + 'it is the material the seam is made from, '
    + 'and it has to be on the cloth before the scissors. '
    + 'The second is the grain. '
    + 'Woven fabric has threads running two ways, '
    + 'and it hardly stretches along them '
    + 'while it stretches noticeably across the diagonal. '
    + 'So a piece cut off the grain '
    + 'will stretch unevenly as it is worn and washed, '
    + 'and the garment twists on the body. '
    + 'Nothing can fix that, '
    + 'because the fault is in the direction the cloth was cut. '
    + 'The order of tacking, fitting and stitching '
    + 'exists for the same reason as a dry fit in woodwork: '
    + 'it is the last point at which a mistake is cheap. '
    + 'A tacked garment can be taken apart in a minute. '
    + 'A stitched and neatened one has to be unpicked, '
    + 'and unpicking marks the cloth. '
    + 'Pressing as you go is the step most often skipped '
    + 'and it is why home made articles look home made: '
    + 'a seam pressed open lies flat and takes the next seam accurately, '
    + 'and one left unpressed builds a bulge that every later seam adds '
    + 'to.',

  recap:
    'You can work the basic stitches and neaten a seam. '
    + 'This makes a whole article, '
    + 'where the measuring and cutting decide whether the sewing can '
    + 'succeed.',

  method: [
    'Take every measurement and write it down.',
    'Choose a fabric suited to the article and the wearer.',
    'Lay the pattern along the grain and pin it.',
    'Mark the cutting lines, including seam and hem allowances.',
    'Cut with sharp shears, in long strokes.',
    'Transfer any marks to the fabric.',
    'Tack the pieces together.',
    'Fit on the wearer and adjust.',
    'Stitch, using backstitch or machine stitch where it will be pulled.',
    'Press each seam as you finish it.',
    'Neaten the raw edges and finish the hem.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is a seam allowance for?',
      steps: [
        'A seam needs cloth to be made from.',
      ],
      answer: 'It is the extra cloth the seam is sewn from, '
        + 'added before cutting.',
    },
    {
      level: 4,
      ask: 'Why must the pattern be laid along the grain?',
      steps: [
        'Fabric barely stretches along the threads.',
        'It stretches on the diagonal.',
        'Cut off grain, it will stretch unevenly in wear.',
      ],
      answer: 'Because fabric stretches differently along the threads and '
        + 'across the diagonal. '
        + 'Cut off the grain, the garment stretches unevenly and twists '
        + 'on the body.',
    },
    {
      level: 5,
      ask: 'A learner cuts exactly to the measurements '
        + 'and the finished garment is too small. Explain.',
      steps: [
        'Every seam uses cloth from both pieces it joins.',
        'With no allowance, that cloth comes out of the measurement.',
        'So the finished article is smaller by two allowances per seam.',
      ],
      answer: 'Because no seam allowance was added. '
        + 'The cloth the seams are made from '
        + 'was taken out of the body measurement.',
    },
  ],

  traps: [
    {
      mistake: 'Cutting to the exact measurement.',
      why: 'The seams are made from cloth. '
        + 'Allowances go on before cutting.',
    },
    {
      mistake: 'Laying the pattern off the grain to save fabric.',
      why: 'The garment will twist in wear, '
        + 'and nothing can correct it afterwards.',
    },
    {
      mistake: 'Stitching before a fitting.',
      why: 'Tacking can be undone in a minute. '
        + 'Unpicking marks the cloth.',
    },
    {
      mistake: 'Leaving all the pressing to the end.',
      why: 'An unpressed seam builds a bulge '
        + 'that every later seam adds to.',
    },
  ],

  extension:
    'A pattern can be drafted from measurements rather than bought. '
    + 'The first one is always tried out in cheap cloth. '
    + 'The corrections made at that fitting '
    + 'are what turn a draft into a pattern you can use again.',

  questions: [
    {
      id: 'grm-1',
      ask: 'When are seam allowances added?',
      kind: 'choice',
      options: [
        'Before cutting',
        'After stitching',
        'At the fitting',
      ],
      answer: 'Before cutting',
      teach: 'They are the cloth the seam is made from.',
      level: 3,
    },
    {
      id: 'grm-2',
      ask: 'What comes immediately before stitching?',
      kind: 'choice',
      options: [
        'Tacking and a fitting',
        'Pressing the hem',
        'Neatening the edges',
      ],
      answer: 'Tacking and a fitting',
      teach: 'It is the last point at which a mistake is cheap.',
      level: 4,
    },
    {
      id: 'grm-3',
      ask: 'Why press each seam as you go?',
      kind: 'choice',
      options: [
        'An unpressed seam builds a bulge the next seams add to',
        'It saves time at the end',
        'It makes the cloth softer',
      ],
      answer: 'An unpressed seam builds a bulge the next seams add to',
      teach: 'It is why unpressed work looks home made.',
      level: 5,
    },
  ],
})

/* ── costing and pricing ───────────────────────────────────────── */

teach({
  topicId: 'costing-pricing',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The cost of an article is materials plus labour plus a share of '
      + 'overheads. '
      + 'Labour is a real cost even when you did the work yourself. '
      + 'The price is the cost plus the profit you intend, '
      + 'and it must also be a price somebody will pay.',
    method: [
      'List materials actually used, including waste.',
      'Cost your own time at a rate you would accept.',
      'Add a share of rent, power and tools, then add the profit.',
    ],
  },

  idea:
    'Costing an article means adding up what it took to make. '
    + 'Direct materials are what went into it, '
    + 'including the offcuts you had to buy and could not use. '
    + 'Direct labour is the time spent, '
    + 'valued at a rate per hour. '
    + 'Overheads are the costs that are not for one article: '
    + 'rent, electricity, transport, tools wearing out. '
    + 'Each article carries a share of them. '
    + 'Total cost is materials plus labour plus that share. '
    + 'The selling price is the cost plus the profit you intend, '
    + 'and it has to be a price customers will actually pay, '
    + 'which is found by looking at what similar things sell for.',

  mechanism:
    'There is one mistake that closes small businesses, '
    + 'and it is costing the materials and forgetting the labour. '
    + 'A learner makes a stool, '
    + 'spends 40 cedis on timber and nails, '
    + 'works a day and a half on it, '
    + 'and prices it at 60 cedis because that feels like a good profit. '
    + 'It is not a profit of 20 cedis. '
    + 'The day and a half was worth something, '
    + 'and if a day’s work is worth 30 cedis '
    + 'then the stool cost 85 cedis to make '
    + 'and has been sold at a loss of 25. '
    + 'The money in hand hides it, '
    + 'because cash came in and nobody counted the time going out. '
    + 'So labour is costed even when you did it yourself, '
    + 'at a rate you would accept from somebody else, '
    + 'and that single habit is the difference between a trade and a '
    + 'hobby. '
    + 'Overheads are the second thing forgotten, for the same reason: '
    + 'rent and electricity are paid monthly '
    + 'and do not feel attached to any one article. '
    + 'The method is to total them for a month, '
    + 'divide by the number of articles you expect to make, '
    + 'and add that share to each. '
    + 'Pricing is then a separate decision from costing, '
    + 'and both have to be satisfied. '
    + 'Cost tells you the floor: '
    + 'below it you are losing money however busy you are. '
    + 'The market tells you the ceiling: '
    + 'above it nobody buys however fair your arithmetic. '
    + 'If the floor is above the ceiling, '
    + 'the answer is not to work for nothing '
    + 'but to change the article, the method, or the customer.',

  recap:
    'You know the factors of production and that the entrepreneur bears '
    + 'the risk. '
    + 'This is the arithmetic that tells you whether the risk is paying.',

  method: [
    'List every material used, with its cost, including waste.',
    'Record the hours actually spent.',
    'Choose an hourly rate you would accept from somebody else.',
    'Multiply to get the labour cost.',
    'Total your monthly overheads.',
    'Divide by the articles you expect to make to get the share.',
    'Add materials, labour and overhead share for the total cost.',
    'Add the profit you intend to get the price.',
    'Compare with what similar articles sell for.',
    'If the market price is below your cost, change something.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the three parts of the cost of an article.',
      steps: [
        'Two are direct, one is shared.',
      ],
      answer: 'Materials, labour, and a share of the overheads.',
    },
    {
      level: 4,
      ask: 'Materials cost 40 cedis, labour 45, '
        + 'and the overhead share is 10. '
        + 'You want 20 per cent profit. Find the price.',
      steps: [
        'Total cost: 40 + 45 + 10 = 95.',
        '20 per cent of 95 is 19.',
        'Add it.',
      ],
      answer: '114 cedis.',
    },
    {
      level: 5,
      ask: 'A learner spends 40 cedis on materials, works a day and a '
        + 'half, '
        + 'and sells for 60. '
        + 'He says he made 20 cedis. Is he right?',
      steps: [
        'He has counted materials only.',
        'The day and a half of work was a real cost.',
        'At 30 cedis a day that is 45.',
        'So the article cost 85 and sold for 60.',
      ],
      answer: 'No. '
        + 'He has not costed his own labour. '
        + 'At 30 cedis a day the article cost about 85 cedis, '
        + 'so he sold it at a loss of about 25.',
    },
  ],

  traps: [
    {
      mistake: 'Not costing your own labour.',
      why: 'It is the mistake that closes small businesses, '
        + 'because cash coming in hides time going out.',
    },
    {
      mistake: 'Leaving out overheads.',
      why: 'Rent and power are paid whether or not you sell anything, '
        + 'so each article must carry a share.',
    },
    {
      mistake: 'Forgetting waste and offcuts.',
      why: 'You paid for the whole board, not the part you used.',
    },
    {
      mistake: 'Setting a price only from the cost.',
      why: 'The customer decides whether it sells. '
        + 'Check what similar articles fetch.',
    },
  ],

  extension:
    'The break even point is the number of articles you must sell '
    + 'to cover your overheads for the month. '
    + 'Below it you are losing money however good each sale is, '
    + 'which is why a trader needs to know the number '
    + 'rather than a general feeling about how business is going.',

  questions: [
    {
      id: 'cst-1',
      ask: 'Overheads are:',
      kind: 'choice',
      options: [
        'costs not attached to one article, such as rent',
        'the materials used',
        'the profit',
      ],
      answer: 'costs not attached to one article, such as rent',
      teach: 'Each article carries a share of them.',
      level: 3,
    },
    {
      id: 'cst-2',
      ask: 'Should you cost your own labour?',
      kind: 'choice',
      options: [
        'Yes, at a rate you would accept from somebody else',
        'No, it is free',
        'Only if you employ somebody',
      ],
      answer: 'Yes, at a rate you would accept from somebody else',
      teach: 'Not doing so is the commonest reason a small trade fails.',
      level: 4,
    },
    {
      id: 'cst-3',
      ask: 'What should you do if your cost is higher than the market '
        + 'price?',
      kind: 'choice',
      options: [
        'Change the article, the method or the customer',
        'Sell at a loss and hope',
        'Ignore the cost',
      ],
      answer: 'Change the article, the method or the customer',
      teach: 'Working for nothing is not a business decision.',
      level: 5,
    },
  ],
})

/* ── keeping simple records ───────────────────────────────────── */

teach({
  topicId: 'records-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Write down every sale and every expense on the day it happens. '
      + 'At the end of the month, total both. '
      + 'Sales minus expenses is the profit, '
      + 'and money in the box is not profit, '
      + 'because some of it is the cost of the next stock.',
    method: [
      'Record on the day, with the date, what it was, and how much.',
      'Keep money for the business separate from your own money.',
      'At month end, total both columns and subtract.',
    ],
  },

  idea:
    'A simple record has a date, a description and an amount, '
    + 'in two columns: money received and money paid out. '
    + 'Sales are recorded as they happen. '
    + 'Expenses include stock, materials, transport, rent, power, '
    + 'repairs and wages. '
    + 'At the end of the month both columns are totalled, '
    + 'and sales minus expenses is the profit or loss. '
    + 'A stock record lists what is held, so shortages are noticed. '
    + 'Receipts are kept as evidence of what was spent. '
    + 'Money belonging to the business is kept apart '
    + 'from the owner’s personal money.',

  mechanism:
    'The reason a trader can work hard for a year and be poorer '
    + 'is that money in hand feels like profit and is not. '
    + 'Some of what is in the box is the cost of the stock '
    + 'you will have to buy tomorrow to keep trading, '
    + 'and spending it is not taking a profit, '
    + 'it is eating the business. '
    + 'Records are what tell the difference. '
    + 'With two columns written up daily, '
    + 'the month tells you a number you could not otherwise guess: '
    + 'whether the work was worth doing. '
    + 'Without them there is only a feeling about how busy it has been, '
    + 'and busy and profitable are different things. '
    + 'Recording on the day matters more than it looks. '
    + 'Nobody remembers a week of small expenses, '
    + 'and small expenses are where the money goes: '
    + 'transport, a repair, a cheap tool, a little waste. '
    + 'A record written up from memory on Friday '
    + 'is always too kind to the week. '
    + 'Keeping the money separate is the other habit worth building, '
    + 'and it is the hardest. '
    + 'If the business money and the household money are in one pocket, '
    + 'the records cannot be right, '
    + 'and the first sign of trouble is stock that cannot be replaced. '
    + 'There is also a second use for records that traders discover late. '
    + 'Six months of them is evidence. '
    + 'They are what lets you ask a bank or a credit union for a loan, '
    + 'because they show somebody else what you already know, '
    + 'and a trader with no records has no way of proving a good business '
    + 'is good.',

  recap:
    'You can cost an article and set a price. '
    + 'Records are how you find out whether the prices you set '
    + 'are actually leaving you better off.',

  method: [
    'Rule two columns: money in, money out.',
    'Record every transaction on the day, with its date and description.',
    'Keep every receipt.',
    'Keep business money separate from personal money.',
    'Record stock bought and stock sold.',
    'At month end, total both columns.',
    'Subtract expenses from sales to get the profit or loss.',
    'Set aside the cost of replacing the stock before taking any profit.',
    'Compare with last month and say what changed.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What three things does each record entry need?',
      steps: [
        'Enough to identify it later.',
      ],
      answer: 'The date, what it was for, and the amount.',
    },
    {
      level: 4,
      ask: 'Sales for the month were 900 cedis '
        + 'and expenses 640. Did the month make money?',
      steps: [
        'Subtract expenses from sales.',
      ],
      answer: 'Yes, a profit of 260 cedis.',
    },
    {
      level: 5,
      ask: 'A trader has 500 cedis in her box '
        + 'and says she has made 500 cedis. Why might she be wrong?',
      steps: [
        'Some of that money is for replacing the stock she sold.',
        'If she spends it, she cannot restock.',
        'Profit is sales minus all the expenses, including stock.',
      ],
      answer: 'Because part of that money is the cost of replacing the '
        + 'stock. '
        + 'Profit is what is left after every expense, '
        + 'and money in hand is not the same thing.',
    },
  ],

  traps: [
    {
      mistake: 'Treating cash in hand as profit.',
      why: 'Some of it is the cost of the next stock. '
        + 'Spending it eats the business.',
    },
    {
      mistake: 'Writing up the week from memory.',
      why: 'Small expenses are forgotten, '
        + 'and that is where the money goes.',
    },
    {
      mistake: 'Mixing business and personal money.',
      why: 'The records then cannot be correct, '
        + 'and the first sign is stock you cannot replace.',
    },
    {
      mistake: 'Judging a month by how busy it felt.',
      why: 'Busy and profitable are different. '
        + 'Only the totals say which it was.',
    },
  ],

  extension:
    'Six months of honest records are what a bank or a credit union '
    + 'asks for before lending, '
    + 'which means record keeping is also how a small trade grows. '
    + 'A good business with no records cannot prove it is good.',

  questions: [
    {
      id: 'rec-1',
      ask: 'Profit is:',
      kind: 'choice',
      options: [
        'sales minus all expenses',
        'the cash in the box',
        'the total of sales',
      ],
      answer: 'sales minus all expenses',
      teach: 'Cash in hand includes the cost of replacing stock.',
      level: 3,
    },
    {
      id: 'rec-2',
      ask: 'When should a transaction be recorded?',
      kind: 'choice',
      options: [
        'On the day it happens',
        'At the end of the week',
        'At the end of the month',
      ],
      answer: 'On the day it happens',
      teach: 'Small expenses are forgotten, and they add up.',
      level: 4,
    },
    {
      id: 'rec-3',
      ask: 'Why keep business money separate from personal money?',
      kind: 'choice',
      options: [
        'Otherwise the records cannot be correct',
        'It looks more professional',
        'Banks require two accounts',
      ],
      answer: 'Otherwise the records cannot be correct',
      teach: 'And the first sign of trouble is stock you cannot replace.',
      level: 5,
    },
  ],
})

/* ── translation ─────────────────────────────────────────────── */

teach({
  topicId: 'translation-ghl-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Translate the meaning, not the words. '
      + 'Read the whole passage first, '
      + 'then render each sentence in the natural order of the target '
      + 'language. '
      + 'An idiom or proverb is replaced by one that means the same, '
      + 'or by its meaning plainly stated.',
    method: [
      'Read the whole passage before translating any of it.',
      'Translate sentence by sentence, not word by word.',
      'Read the result aloud in the target language and fix what sounds '
        + 'wrong.',
    ],
  },

  idea:
    'Translation carries the meaning of a passage '
    + 'from one language into another. '
    + 'The result must read naturally in the target language, '
    + 'which means its own word order, its own idiom, '
    + 'and its own level of formality. '
    + 'A word for word rendering is not a translation. '
    + 'Idioms and proverbs are the hardest part: '
    + 'you look for an equivalent that means the same thing, '
    + 'and where there is none you give the meaning plainly '
    + 'and say what the original image was if it matters. '
    + 'Names of people and places are kept. '
    + 'Tone marks and special letters are written in full '
    + 'when translating into a Ghanaian language.',

  mechanism:
    'The reason word for word translation fails '
    + 'is that languages do not divide meaning the same way. '
    + 'A single English word may need a phrase in your language, '
    + 'and a single word in your language may need a whole clause in '
    + 'English, '
    + 'because the concept is packaged differently. '
    + 'Several Ghanaian languages use two or three verbs in a row '
    + 'where English needs a preposition and a clause, '
    + 'and there is no way to match them one for one. '
    + 'So the unit of translation is the sentence, '
    + 'and sometimes the paragraph, never the word. '
    + 'The method follows: '
    + 'read the sentence until you have its meaning without looking at it, '
    + 'then say that meaning in the other language as a speaker of it '
    + 'would, '
    + 'then check nothing has been added or lost. '
    + 'Idiom is where the discipline is tested. '
    + 'An English idiom translated literally into a Ghanaian language '
    + 'produces a sentence about something nobody said, '
    + 'and the same is true in reverse. '
    + 'So you ask what the idiom MEANS, '
    + 'then look for an idiom in the target language that means it. '
    + 'If one exists, use it, '
    + 'because an idiom is best matched by an idiom. '
    + 'If none exists, give the meaning in plain words rather than '
    + 'inventing one. '
    + 'The final check is the one that catches everything: '
    + 'read your translation aloud to somebody who does not know the '
    + 'original. '
    + 'If they find a sentence strange, '
    + 'you have carried across the structure instead of the meaning.',

  recap:
    'You can read a passage in your language and answer on it, '
    + 'and you know that proverbs are explained by meaning rather than '
    + 'words. '
    + 'Translation applies that to a whole passage, in both directions.',

  method: [
    'Read the whole passage and get its sense.',
    'Note the register: formal, casual, a speech, a story.',
    'Translate sentence by sentence.',
    'Use the natural word order of the target language.',
    'Match an idiom with an idiom where one exists.',
    'Where none exists, state the meaning plainly.',
    'Keep names of people and places.',
    'Write all tone marks and special letters.',
    'Read the result aloud and correct what sounds unnatural.',
    'Check that nothing was added and nothing lost.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is the unit of translation?',
      steps: [
        'Not the word.',
      ],
      answer: 'The sentence, and sometimes the paragraph.',
    },
    {
      level: 4,
      ask: 'How should an idiom be translated?',
      steps: [
        'A literal version says something nobody meant.',
        'So work from the meaning.',
      ],
      answer: 'With an idiom in the other language that means the same, '
        + 'and if there is none, with the meaning stated plainly.',
    },
    {
      level: 5,
      ask: 'Why does a word for word translation read strangely '
        + 'even when every word is correct?',
      steps: [
        'Languages package meaning differently.',
        'One word here may be a phrase there.',
        'And the word order is not the same.',
        'So matching words carries the structure, not the meaning.',
      ],
      answer: 'Because languages do not divide meaning the same way, '
        + 'and their word orders differ. '
        + 'Matching words carries the original’s structure '
        + 'instead of its meaning.',
    },
  ],

  traps: [
    {
      mistake: 'Translating word by word.',
      why: 'It carries the structure of the original '
        + 'and not its meaning.',
    },
    {
      mistake: 'Translating an idiom literally.',
      why: 'The result says something nobody meant. '
        + 'Work from what the idiom means.',
    },
    {
      mistake: 'Translating names of people and places.',
      why: 'They are kept as they are.',
    },
    {
      mistake: 'Adding an explanation into the translation.',
      why: 'A translation carries what was there. '
        + 'Explanation belongs in a note.',
    },
  ],

  figure: {
    alt: 'A small flow chart for an idiom. At the top, a box reading an '
      + 'idiom in the passage leads down to a question: is there an idiom '
      + 'in the other language that means the same? Two arrows lead to two '
      + 'green boxes. Yes: use it, because an idiom is best matched by an '
      + 'idiom. No: state the meaning in plain words. A line in red at the '
      + 'bottom warns against going word for word and against inventing an '
      + 'idiom that does not exist.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="28" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">what to do with an idiom</text>'
      + '<rect x="200" y="48" width="240" height="50" rx="6"/>'
      + '<text x="320" y="79" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">an idiom in the passage</text>'
      + '<line x1="320" y1="98" x2="320" y2="112"/>'
      + '<path d="M 312 110 L 320 124 L 328 110 Z" fill="currentColor" stroke="none"/>'
      + '<rect x="130" y="126" width="380" height="66" rx="6"/>'
      + '<text x="320" y="154" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">is there an idiom in the other</text>'
      + '<text x="320" y="176" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">language that means the same?</text>'
      + '<path d="M 230 192 L 150 232" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 144 226 L 138 242 L 154 242 Z" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 410 192 L 490 232" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 486 242 L 502 242 L 496 226 Z" fill="#0f8a4d" stroke="none"/>'
      + '<rect x="20" y="246" width="250" height="86" rx="6" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="145" y="272" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">yes: use it</text>'
      + '<text x="145" y="296" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">an idiom is best</text>'
      + '<text x="145" y="316" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">matched by an idiom</text>'
      + '<rect x="370" y="246" width="250" height="86" rx="6" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="495" y="272" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">no: give the meaning</text>'
      + '<text x="495" y="296" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">in plain words, and say</text>'
      + '<text x="495" y="316" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">what the image was</text>'
      + '<text x="320" y="372" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">never word for word, and never invent one that does not exist</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What a translation changes, and what it keeps',
      columns: [
        'Part of the passage',
        'What a translation does with it',
      ],
      rows: [
        [
          'Word order',
          'Changed, to the natural order of the language you are '
            + 'translating into',
        ],
        [
          'Idiom and proverb',
          'Replaced by one in the other language that means the same; '
            + 'where none exists, the meaning stated plainly',
        ],
        [
          'Names of people and places',
          'Kept unchanged',
        ],
        [
          'Register, whether formal or casual',
          'Kept: a speech stays a speech and a story stays a story',
        ],
        [
          'Tone marks and special letters',
          'Written in full, when translating into a Ghanaian language',
        ],
        [
          'The meaning',
          'Kept exactly, with nothing added and nothing lost',
        ],
      ],
      note: 'Only one row keeps the words themselves, '
        + 'and it is the row about names.',
    },
  ],

  extension:
    'Interpreting is translation done aloud and at once, '
    + 'and it is harder for one reason: '
    + 'there is no time to read ahead. '
    + 'Interpreters therefore work a sentence behind the speaker, '
    + 'which is a practical version of the same rule: '
    + 'never start before you have the meaning.',

  questions: [
    {
      id: 'tra-1',
      ask: 'A good translation reads naturally in:',
      kind: 'choice',
      options: [
        'the language it is translated into',
        'the original language',
        'both equally',
      ],
      answer: 'the language it is translated into',
      teach: 'Its own word order and its own idiom.',
      level: 3,
    },
    {
      id: 'tra-2',
      ask: 'What is kept unchanged in a translation?',
      kind: 'choice',
      options: [
        'Names of people and places',
        'Idioms',
        'Word order',
      ],
      answer: 'Names of people and places',
      teach: 'Idioms are matched by meaning and the word order is the '
        + 'target language’s.',
      level: 4,
    },
    {
      id: 'tra-3',
      ask: 'What is the best final check on a translation?',
      kind: 'choice',
      options: [
        'Read it aloud to somebody who has not seen the original',
        'Count the words in both',
        'Compare the first lines',
      ],
      answer: 'Read it aloud to somebody who has not seen the original',
      teach: 'A sentence they find strange is one where structure was '
        + 'carried instead of meaning.',
      level: 5,
    },
  ],
})

/* ── chastity and responsible living ────────────────────────── */

teach({
  topicId: 'chastity-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'All three faiths teach that sex belongs within marriage. '
      + 'Each gives reasons from its own teaching. '
      + 'The consequences they guard against are concrete. '
      + 'Pregnancy before anybody is ready. '
      + 'Infection. '
      + 'Schooling cut short. '
      + 'And children without support.',
    method: [
      'State the teaching, with the faith it comes from.',
      'Name the consequence it is guarding against.',
      'Say what a young person decides in advance.',
    ],
  },

  idea:
    'Chastity means keeping sexual conduct within the limits '
    + 'that a person’s faith and community set. '
    + 'In all three traditions taught in Ghana that means two things: '
    + 'abstaining before marriage, and faithfulness within it. '
    + 'Each tradition gives its own reasons for that, '
    + 'in its own words, '
    + 'and each is guarding against consequences '
    + 'that are concrete rather than abstract.',

  mechanism:
    'The honest way to teach this is to give the teaching '
    + 'and then give the reasons, '
    + 'and to let both stand on their own, '
    + 'because a young person who is only told a rule '
    + 'has nothing to use when somebody argues with them. '
    + 'The religious reason is a claim about what sex is for '
    + 'and what it creates: '
    + 'each tradition treats it as belonging inside a permanent commitment '
    + 'because it can produce a person who will need one. '
    + 'The practical reasons point the same way '
    + 'and can be stated without appealing to any faith at all. '
    + 'They are not threats; they are arithmetic. '
    + 'And the arithmetic falls hardest on the girl, '
    + 'whatever anybody says about fairness. '
    + 'There is one more thing worth saying plainly, '
    + 'because the lesson is useless without it. '
    + 'A decision of this kind is not made at the moment it appears to be '
    + 'made. '
    + 'It is made beforehand, or it is made by circumstances, '
    + 'and the practical skill is deciding in advance '
    + 'and then avoiding the situations where the decision would be taken '
    + 'out of your hands. '
    + 'That is not timidity and it is not innocence. '
    + 'It is how anybody of any age keeps a decision they meant to keep.',

  recap:
    'You described the changes of adolescence in Social Studies '
    + 'and the reproductive system in Science. '
    + 'This is what the three faiths teach about conduct, '
    + 'and the reasons behind it.',

  method: [
    'State the teaching of each faith, in its own terms.',
    'Give one reason that faith offers for it.',
    'Name the practical consequences being guarded against.',
    'Be accurate: abstinence has no failure rate.',
    'Say that the decision is made in advance.',
    'Name who a young person can talk to.',
    'Describe each tradition fairly, and do not rank them.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What does chastity mean for an unmarried person '
        + 'in all three traditions?',
      steps: [
        'The common teaching.',
      ],
      answer: 'Abstaining from sexual relations.',
    },
    {
      level: 4,
      ask: 'Name two consequences the teachings are guarding against.',
      steps: [
        'Give concrete ones.',
      ],
      answer: 'Pregnancy before anybody can support a child, '
        + 'and sexually transmitted infection, including HIV. '
        + 'Schooling cut short is a third.',
    },
    {
      level: 5,
      ask: 'Why is it said that this decision is made in advance?',
      steps: [
        'In the moment there is pressure and little time.',
        'Somebody who has not decided will be decided for.',
        'A decision already made does not have to be worked out then.',
        'And the situation can be avoided rather than argued in.',
      ],
      answer: 'Because in the moment there is pressure and no time to '
        + 'reason. '
        + 'A person who has decided beforehand does not have to work it '
        + 'out then, '
        + 'and can avoid the situation rather than win the argument inside '
        + 'it.',
    },
  ],

  traps: [
    {
      mistake: 'Giving the rule with no reasons.',
      why: 'A young person who is only given a rule '
        + 'has nothing to use when it is argued with.',
    },
    {
      mistake: 'Using fear instead of fact.',
      why: 'The real consequences are serious enough to state plainly, '
        + 'and exaggeration destroys trust in everything else said.',
    },
    {
      mistake: 'Pretending the consequences fall equally.',
      why: 'They fall hardest on the girl. '
        + 'Saying so is part of an honest answer.',
    },
    {
      mistake: 'Ranking the faiths while comparing their teachings.',
      why: 'The question asks what each teaches.',
    },
  ],

  figure: {
    alt: 'A line running left to right for time. Early on it, a green '
      + 'marker reads you decide here, in advance, quietly, with nobody '
      + 'asking. Much later a second marker reads the moment it looks like '
      + 'it is being decided, with a note that by then there is no time to '
      + 'decide. A red arrow leads down from that second marker to a box '
      + 'reading or the circumstances decide for you.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="28" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">when the decision is actually made</text>'
      + '<line x1="30" y1="160" x2="602" y2="160"/>'
      + '<path d="M 600 152 L 616 160 L 600 168 Z" fill="currentColor" stroke="none"/>'
      + '<text x="616" y="190" font-size="14" text-anchor="end" fill="currentColor" stroke="none">time</text>'
      + '<circle cx="140" cy="160" r="11" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="140" y="112" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">you decide here,</text>'
      + '<text x="140" y="132" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">in advance</text>'
      + '<text x="140" y="198" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">quietly, with</text>'
      + '<text x="140" y="216" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">nobody asking</text>'
      + '<circle cx="430" cy="160" r="11"/>'
      + '<text x="430" y="112" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the moment it looks</text>'
      + '<text x="430" y="132" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">like it is being decided</text>'
      + '<line x1="430" y1="172" x2="430" y2="240" stroke="#c8433a" stroke-width="3"/>'
      + '<path d="M 422 238 L 430 254 L 438 238 Z" fill="#c8433a" stroke="none"/>'
      + '<rect x="286" y="258" width="288" height="66" rx="6" stroke="#c8433a" stroke-width="3"/>'
      + '<text x="430" y="286" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">or the circumstances</text>'
      + '<text x="430" y="308" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">decide for you</text>'
      + '<text x="320" y="372" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">decide first, then stay out of the places where the choice is taken</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What each tradition teaches about sexual conduct, '
        + 'and where it teaches it',
      columns: ['Tradition', 'What it teaches', 'Its own term or practice'],
      rows: [
        [
          'Christianity',
          'The body is to be honoured, '
            + 'and sexual union belongs in marriage',
          'Taught as honouring the body',
        ],
        [
          'Islam',
          'Modesty is commanded, '
            + 'and zina, sexual relations outside marriage, is forbidden',
          'Zina, and the command to modesty',
        ],
        [
          'African Traditional Religion',
          'Sexual conduct is tied to the family line '
            + 'and to obligations between families',
          'Puberty rites, where the young are instructed in what is '
            + 'expected',
        ],
      ],
      note: 'All three arrive at the same two requirements. '
        + 'The differences are in the reasons given, '
        + 'and a question asking you to compare wants the reasons.',
    },
    {
      caption: 'What the teachings are guarding against, '
        + 'and what each one leads to',
      columns: ['The consequence', 'What follows from it'],
      rows: [
        [
          'A pregnancy before anybody can support a child',
          'Schooling commonly ends, and the end of schooling decides '
            + 'work and income for decades',
        ],
        [
          'A child born without the support of two families',
          'The child’s first years are decided by two people who were '
            + 'not ready',
        ],
        [
          'An infection passed on by sex, including HIV',
          'It may be carried for years with no symptoms, '
            + 'and some of them cannot be cured',
        ],
      ],
      note: 'Abstinence is the one course with no failure rate. '
        + 'That is a fact about it, not a teaching about it.',
    },
  ],

  extension:
    'Each faith also teaches about marriage itself. '
    + 'The teachings on chastity belong to that teaching. '
    + 'They are about what a permanent commitment is for, '
    + 'and not only about what is forbidden before it.',

  questions: [
    {
      id: 'chs-1',
      ask: 'In Islam, sexual relations outside marriage are called:',
      kind: 'choice',
      options: ['zina', 'nikah', 'zakat'],
      answer: 'zina',
      teach: 'Nikah is marriage and zakat is charity.',
      level: 3,
    },
    {
      id: 'chs-2',
      ask: 'Which method of avoiding pregnancy has no failure rate?',
      kind: 'choice',
      options: ['Abstinence', 'All methods fail sometimes', 'None'],
      answer: 'Abstinence',
      teach: 'It is the only one of which that can accurately be said.',
      level: 4,
    },
    {
      id: 'chs-3',
      ask: 'When is this decision actually made?',
      kind: 'choice',
      options: [
        'In advance, before the situation arises',
        'At the time',
        'After discussing it',
      ],
      answer: 'In advance, before the situation arises',
      teach: 'A decision not made beforehand is made by circumstances.',
      level: 5,
    },
  ],
})

/* ── work, honesty and corruption ──────────────────────────── */

teach({
  topicId: 'work-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'All three faiths honour honest work and condemn taking what is not '
      + 'earned. '
      + 'Corruption is condemned because it is theft from people who '
      + 'cannot see it happening. '
      + 'Its cost is that services paid for are not delivered.',
    method: [
      'State the teaching on work and on honesty, by faith.',
      'Define corruption as taking what was meant for somebody else.',
      'Trace the cost to a named service and a named person.',
    ],
  },

  idea:
    'All three faiths taught in Ghana honour honest work '
    + 'and condemn taking what is not earned, '
    + 'each in its own words. '
    + 'Corruption is using a public position for private gain, '
    + 'and it takes several forms. '
    + 'Its costs are large, '
    + 'and the largest of them is not the money that was taken.',

  mechanism:
    'Corruption is usually condemned as greed, '
    + 'which is true and does not explain why it is as damaging as it is. '
    + 'The sharper account is that corruption is theft '
    + 'from people who never see it happen. '
    + 'When a road is built for twice its price '
    + 'and the difference is taken, '
    + 'nobody is visibly robbed, '
    + 'and the second road that money would have built is simply not '
    + 'there. '
    + 'The victims are the people in the village with no road, '
    + 'and they do not know they are victims, '
    + 'which is exactly what makes it durable. '
    + 'Religiously that is why it is condemned as a serious wrong '
    + 'rather than a technical fault: '
    + 'all three traditions treat taking what belongs to others as theft, '
    + 'and all three take particular account of wrongs '
    + 'against people who cannot defend themselves. '
    + 'The practical cost is worth tracing in an answer, '
    + 'because the examination asks what it costs the country. '
    + 'It is not only the money taken. '
    + 'Every form of it has somebody who pays and never knows it. '
    + 'And the citizen who no longer believes '
    + 'any institution will do its job is the most expensive of all, '
    + 'because once people expect corruption they plan around it, '
    + 'and then honest behaviour starts to look foolish. '
    + 'Which is the reason the teaching aims at the individual: '
    + 'a system that nobody inside it will refuse '
    + 'cannot be reformed from outside it.',

  recap:
    'You know what the three faiths teach about honesty, '
    + 'and you can argue a duty from a religious teaching. '
    + 'This applies that to work and to public office.',

  method: [
    'State the teaching on honest work, with the faith.',
    'State the teaching against theft and bribery.',
    'Define corruption as using a position for private gain.',
    'Give examples: bribery, embezzlement, nepotism.',
    'Trace the cost to a named service.',
    'Name the people who lose, including those who never know.',
    'Say what the teaching requires of an individual in that position.',
    'Name one institution that exists to check it.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give one example of corruption.',
      steps: [
        'Private gain from a public position.',
      ],
      answer: 'Demanding a bribe for a service that should be free. '
        + 'Embezzlement and awarding contracts to friends also count.',
    },
    {
      level: 4,
      ask: 'What does a faith teaching on just weights and measures '
        + 'condemn in business?',
      steps: [
        'A short measure takes money for goods not given.',
      ],
      answer: 'Cheating a customer by giving less than was paid for, '
        + 'which is theft even though the customer agreed the price.',
    },
    {
      level: 5,
      ask: 'Why is corruption described as theft from people who cannot '
        + 'see it?',
      steps: [
        'Money meant for a public purpose is taken.',
        'Nobody is visibly robbed on the day.',
        'The thing it would have paid for is simply absent.',
        'The people who needed it do not know what they lost.',
      ],
      answer: 'Because the money taken was meant for a service, '
        + 'so the loss appears as a clinic or a road that does not exist. '
        + 'The people who needed it never know they were robbed.',
    },
  ],

  traps: [
    {
      mistake: 'Condemning corruption only as greed.',
      why: 'True and thin. '
        + 'Say who loses and what they lose.',
    },
    {
      mistake: 'Counting only the money taken.',
      why: 'The service not delivered, '
        + 'and the loss of confidence in institutions, cost more.',
    },
    {
      mistake: 'Treating a small bribe as a different kind of thing.',
      why: 'All three teachings condemn taking what is not yours, '
        + 'whatever the amount.',
    },
    {
      mistake: 'Blaming only those at the top.',
      why: 'The teaching aims at the individual, '
        + 'because a system nobody inside it will refuse '
        + 'cannot be reformed from outside.',
    },
  ],

  figure: {
    alt: 'Money for two roads splits into two outcomes. One road is built '
      + 'at twice the price, and a red box beside it shows that the '
      + 'difference is taken. The second road, drawn as a red dashed box, '
      + 'is simply not there, and beside it a red box names who pays: a '
      + 'village with no road, who never learn they were robbed.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="28" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">theft that nobody sees happen</text>'
      + '<rect x="14" y="150" width="140" height="74" rx="6"/>'
      + '<text x="84" y="182" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">money for</text>'
      + '<text x="84" y="204" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">two roads</text>'
      + '<path d="M 154 172 L 192 112"/>'
      + '<path d="M 186 106 L 200 100 L 196 116 Z" fill="currentColor" stroke="none"/>'
      + '<rect x="200" y="66" width="230" height="74" rx="6"/>'
      + '<text x="315" y="98" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">one road, built at</text>'
      + '<text x="315" y="120" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">twice the price</text>'
      + '<line x1="430" y1="103" x2="444" y2="103" stroke="#c8433a" stroke-width="3"/>'
      + '<path d="M 442 95 L 458 103 L 442 111 Z" fill="#c8433a" stroke="none"/>'
      + '<rect x="460" y="66" width="170" height="74" rx="6" stroke="#c8433a" stroke-width="3"/>'
      + '<text x="545" y="98" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">the difference</text>'
      + '<text x="545" y="120" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">is taken</text>'
      + '<path d="M 154 202 L 190 254" stroke="#c8433a"/>'
      + '<path d="M 182 252 L 198 262 L 184 268 Z" fill="#c8433a" stroke="none"/>'
      + '<rect x="200" y="234" width="230" height="74" rx="6" stroke="#c8433a" stroke-width="3" stroke-dasharray="7 5"/>'
      + '<text x="315" y="266" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">the second road,</text>'
      + '<text x="315" y="288" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">simply not there</text>'
      + '<line x1="430" y1="271" x2="444" y2="271" stroke="#c8433a" stroke-width="3"/>'
      + '<path d="M 442 263 L 458 271 L 442 279 Z" fill="#c8433a" stroke="none"/>'
      + '<rect x="460" y="234" width="170" height="74" rx="6" stroke="#c8433a" stroke-width="3"/>'
      + '<text x="545" y="258" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">a village with</text>'
      + '<text x="545" y="276" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">no road, who</text>'
      + '<text x="545" y="294" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">never learn</text>'
      + '<text x="320" y="360" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">nobody is visibly robbed, and that is what makes it durable</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What each faith teaches about work and about dishonesty',
      columns: ['Faith', 'On work', 'On dishonesty'],
      rows: [
        [
          'Christianity',
          'Work is honourable, and a worker deserves his wages',
          'Stealing and bearing false witness are forbidden',
        ],
        [
          'Islam',
          'Lawful earning is honoured, '
            + 'and weights and measures must be just',
          'Bribery, cheating and taking what is not yours are forbidden',
        ],
        [
          'African Traditional Religion',
          'A person works as a member of a family '
            + 'and answers to the whole of it for their conduct',
          'Dishonesty is an offence against the community '
            + 'and the ancestors',
        ],
      ],
      note: 'Three different sets of words for one position: '
        + 'what is earned is yours, and what is not earned is not.',
    },
    {
      caption: 'The forms corruption takes, and who pays for each',
      columns: ['Form', 'What it is', 'Who pays'],
      rows: [
        [
          'Bribery',
          'Paying, or being paid, for what should be decided on merit',
          'Everybody who met the requirement and still lost',
        ],
        [
          'Embezzlement',
          'Taking money that was allocated to a public purpose',
          'The village with no road, who never learn they were robbed',
        ],
        [
          'Nepotism',
          'Giving contracts or postings to oneself or to friends',
          'The honest contractor who stopped bidding, '
            + 'and the teacher who could not pay',
        ],
        [
          'Charging for what should be free',
          'Taking a fee for a service the taxes already paid for',
          'The person who went without it because they could not pay '
            + 'twice',
        ],
      ],
      note: 'The third column is where the marks are. '
        + 'An answer that names the forms and not the people who pay '
        + 'has given half of it.',
    },
  ],

  extension:
    'Ghana has institutions meant to check this: '
    + 'the Auditor General, '
    + 'the Commission on Human Rights and Administrative Justice, '
    + 'and the courts. '
    + 'They work only if people report what they see, '
    + 'which is why the religious teaching and the institution '
    + 'depend on each other.',

  questions: [
    {
      id: 'wrk-1',
      ask: 'Corruption is:',
      kind: 'choice',
      options: [
        'using a public position for private gain',
        'working for low wages',
        'any mistake by an official',
      ],
      answer: 'using a public position for private gain',
      teach: 'Bribery, embezzlement and nepotism are forms of it.',
      level: 3,
    },
    {
      id: 'wrk-2',
      ask: 'Which is the largest cost of corruption?',
      kind: 'choice',
      options: [
        'Services that are never delivered, and lost confidence',
        'The money taken',
        'The time of investigations',
      ],
      answer: 'Services that are never delivered, and lost confidence',
      teach: 'Once people expect corruption, honest behaviour looks '
        + 'foolish.',
      level: 4,
    },
    {
      id: 'wrk-3',
      ask: 'Why do all three faiths treat corruption as a serious wrong?',
      kind: 'choice',
      options: [
        'It is theft, and from people who cannot defend themselves',
        'It is against the law',
        'It wastes time',
      ],
      answer: 'It is theft, and from people who cannot defend themselves',
      teach: 'Each tradition takes particular account of wrongs against '
        + 'the defenceless.',
      level: 5,
    },
  ],
})

/* ── tolerance and living together ────────────────────────── */

teach({
  topicId: 'peace-tolerance',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Tolerance is not agreeing that all beliefs are the same. '
      + 'It is treating somebody well while believing they are wrong. '
      + 'Each faith has its own reasons for it from inside its own '
      + 'teaching, '
      + 'which is what makes the argument usable.',
    method: [
      'Define tolerance without requiring agreement.',
      'Argue from inside your own tradition, naming the teaching.',
      'Give one practical thing it requires of you.',
    ],
  },

  idea:
    'Tolerance means respecting the right of others '
    + 'to hold and practise a different faith, '
    + 'while you keep your own. '
    + 'It is not agreeing that all faiths are the same. '
    + 'Each tradition taught in Ghana has its own reason for it, '
    + 'drawn from inside its own teaching. '
    + 'In Ghana people of different faiths share families and schools, '
    + 'markets and funerals, '
    + 'so the duties are practical ones. '
    + 'Attend the ceremonies of others. '
    + 'Do not insult what they hold sacred. '
    + 'Do not use a position to press a faith on anybody. '
    + 'And keep any disagreement in words.',

  mechanism:
    'There are two bad arguments for tolerance '
    + 'and it is worth putting them aside before giving a good one. '
    + 'Both of them ask a believer to give something up, '
    + 'which is exactly why neither persuades anybody religious. '
    + 'Tolerance does not need either. '
    + 'It only needs this: '
    + 'that you may believe somebody is wrong '
    + 'and still owe them good treatment. '
    + 'And every tradition has its own route to that, from inside. '
    + 'This is why the lesson asks you to argue from inside your own '
    + 'tradition. '
    + 'An argument from outside religion '
    + 'cannot reach the person it needs to reach. '
    + 'An argument from inside is one they already accept. '
    + 'And the practical test of tolerance is specific: '
    + 'it is what you do at the funeral, the wedding and the naming '
    + 'ceremony '
    + 'of somebody whose beliefs you think mistaken. '
    + 'Going, and behaving properly, '
    + 'is tolerance. '
    + 'Agreeing with them was never required.',

  recap:
    'You have compared what the three faiths teach '
    + 'about creation, worship, God and conduct, '
    + 'and reported each fairly without ranking them. '
    + 'This asks why that discipline matters outside an examination.',

  method: [
    'Define tolerance as good treatment without agreement.',
    'Say what it is not: it is not believing all faiths are the same.',
    'Name a teaching from your own tradition that requires it.',
    'Name teachings from the others.',
    'Give practical duties: attending, not insulting, not compelling.',
    'Name a real Ghanaian setting where faiths live together.',
    'Say what you would do in a named situation.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Does tolerance mean believing all religions are the same?',
      steps: [
        'Tolerance is about treatment.',
      ],
      answer: 'No. '
        + 'It means treating somebody well '
        + 'even while believing they are mistaken.',
    },
    {
      level: 4,
      ask: 'Give one teaching from each faith that supports tolerance.',
      steps: [
        'Take each in turn, in its own words.',
      ],
      answer: 'Christianity: love your neighbour, '
        + 'and judgement belongs to God. '
        + 'Islam: there is no compulsion in religion. '
        + 'African Traditional Religion: family and community obligations '
        + 'are owed regardless of belief.',
    },
    {
      level: 5,
      ask: 'Why is an argument for tolerance from inside a tradition '
        + 'stronger than one from outside it?',
      steps: [
        'An outside argument asks a believer to loosen their belief '
          + 'first.',
        'That is a price they have no reason to pay.',
        'An inside argument uses something they already hold.',
        'So it obliges them without asking them to give anything up.',
      ],
      answer: 'Because an argument from outside asks a believer '
        + 'to hold their faith less firmly as the price of decency, '
        + 'which persuades nobody. '
        + 'An argument from inside rests on what they already accept.',
    },
  ],

  traps: [
    {
      mistake: 'Defining tolerance as agreeing with everybody.',
      why: 'Then it would require nobody to believe anything, '
        + 'and no believer could practise it.',
    },
    {
      mistake: 'Arguing for tolerance from outside religion.',
      why: 'It cannot reach the person it needs to reach. '
        + 'Argue from inside the tradition.',
    },
    {
      mistake: 'Treating tolerance as a feeling.',
      why: 'It is conduct: going to the funeral, '
        + 'not insulting what others hold sacred.',
    },
    {
      mistake: 'Confusing tolerance with having no convictions.',
      why: 'The whole point is that it works while convictions differ.',
    },
  ],

  tables: [
    {
      caption: 'Two bad arguments for tolerance, and the one that works',
      columns: ['The argument', 'What it asks you to accept', 'How it ends'],
      rows: [
        [
          'All religions are really the same',
          'That the differences between them do not matter',
          'It fails. They make different claims and their followers know '
            + 'it, so it is false and it insults everybody',
        ],
        [
          'Nobody can know what is true',
          'That no belief should be held with confidence',
          'It fails. It asks a believer to stop believing as the price of '
            + 'being decent, so it persuades nobody religious',
        ],
        [
          'You may believe somebody is wrong '
            + 'and still owe them good treatment',
          'That good treatment and agreement are separate things',
          'It holds. It asks nothing of anybody’s beliefs, '
            + 'and every tradition reaches it from inside',
        ],
      ],
      note: 'Only the third can be accepted without giving anything up, '
        + 'which is why it is the only one worth making.',
    },
    {
      caption: 'Each faith’s own route to tolerance, '
        + 'argued from inside its own teaching',
      columns: ['Faith', 'The teaching it argues from', 'What that settles'],
      rows: [
        [
          'Christianity',
          'Love of neighbour, including those outside the community, '
            + 'and judgement belongs to God',
          'Good treatment is not conditional on the neighbour agreeing, '
            + 'and the judging was never yours to do',
        ],
        [
          'Islam',
          'There is no compulsion in religion, '
            + 'and People of the Book are to be treated justly',
          'The matter is settled without appeal to anything outside the '
            + 'faith itself',
        ],
        [
          'African Traditional Religion',
          'The obligations of family and town, '
            + 'which cross religious lines',
          'Those duties were never owed on the basis of religion, '
            + 'so religion cannot cancel them',
        ],
      ],
      note: 'Every route here begins from something the believer already '
        + 'holds, which is what makes it an argument and not an appeal.',
    },
  ],

  extension:
    'Ghana’s record of religious coexistence is unusual. '
    + 'It is also not automatic. '
    + 'The things that maintain it can be named. '
    + 'Mixed families. '
    + 'Shared schooling. '
    + 'And public figures of each faith '
    + 'attending the ceremonies of the others. '
    + 'Those are practices, and a practice can be lost.',

  questions: [
    {
      id: 'tol-1',
      ask: 'Tolerance means:',
      kind: 'choice',
      options: [
        'treating somebody well without agreeing with them',
        'believing all faiths teach the same',
        'keeping your beliefs private',
      ],
      answer: 'treating somebody well without agreeing with them',
      teach: 'Agreement was never required.',
      level: 3,
    },
    {
      id: 'tol-2',
      ask: 'Which Islamic teaching supports religious tolerance directly?',
      kind: 'choice',
      options: [
        'There is no compulsion in religion',
        'Give zakat annually',
        'Pray five times daily',
      ],
      answer: 'There is no compulsion in religion',
      teach: 'It settles the matter from inside the tradition.',
      level: 4,
    },
    {
      id: 'tol-3',
      ask: 'What is the practical test of tolerance?',
      kind: 'choice',
      options: [
        'How you behave at the ceremonies of people you think mistaken',
        'Whether you feel positive about other faiths',
        'Whether you can explain their beliefs',
      ],
      answer: 'How you behave at the ceremonies of people you think '
        + 'mistaken',
      teach: 'It is conduct, not feeling.',
      level: 5,
    },
  ],
})

/* ── everyday conversation ─────────────────────────────── */

teach({
  topicId: 'conversation-french',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'For shopping: Je voudrais, C’est combien?, C’est trop cher. '
      + 'For directions: Où est ...?, à gauche, à droite, tout droit. '
      + 'For food: Je prends, l’addition s’il vous plaît. '
      + 'Vous, and s’il vous plaît, in every one.',
    method: [
      'Use Je voudrais rather than Je veux: it is the polite form.',
      'Learn the whole phrase, not the separate words.',
      'Use vous with anybody serving you.',
    ],
  },

  idea:
    'Three situations come up, in the examination and in life: '
    + 'a shop, asking the way, and a restaurant. '
    + 'Each has a small set of fixed phrases, '
    + 'and they are learned whole '
    + 'rather than built out of grammar you have not covered yet. '
    + 'Two rules hold across all three. '
    + 'Use vous with anybody serving you, '
    + 'and attach s’il vous plaît to whatever you ask for.',

  mechanism:
    'Everyday French is learned as whole phrases rather than as grammar, '
    + 'and that is not laziness, it is how the phrases are used. '
    + 'Je voudrais is a conditional form of vouloir '
    + 'that a JHS learner has not studied, '
    + 'and waiting until the grammar is covered '
    + 'would mean three more years of not being able to buy bread. '
    + 'So learn it whole, use it correctly, '
    + 'and let the grammar explain it later. '
    + 'There is one distinction worth understanding rather than memorising, '
    + 'because it is the difference between sounding polite and sounding '
    + 'rude. '
    + 'Je veux means I want. '
    + 'Je voudrais means I would like. '
    + 'In French the direct form is much blunter than it sounds in English, '
    + 'and a child who says je veux to a shopkeeper '
    + 'has said something closer to "give me". '
    + 'So je voudrais is the form to learn first, '
    + 'and s’il vous plaît is attached to it as part of the phrase. '
    + 'The other practical point is about listening, '
    + 'which is harder than speaking in this topic. '
    + 'You can prepare your own sentence '
    + 'and you cannot prepare the answer. '
    + 'So the preparation that works is not more phrases but fewer: '
    + 'learn the handful of words that any answer has to contain, '
    + 'and let the rest of the sentence go past you. '
    + 'Listening for the one word that carries the answer '
    + 'is how anybody manages in a language they are still learning.',

  recap:
    'You can greet, introduce yourself, describe things, '
    + 'and use numbers and prices. '
    + 'This puts them to work in three situations '
    + 'you would actually meet.',

  method: [
    'Greet first: bonjour, with monsieur or madame.',
    'Use Je voudrais for what you want, never Je veux.',
    'Add s’il vous plaît.',
    'Ask the price with C’est combien?',
    'For directions, ask Où est ..., s’il vous plaît?',
    'Listen for gauche, droite, tout droit and a number.',
    'In a restaurant, order with Je prends and ask for l’addition.',
    'Thank and leave: merci, au revoir.',
    'Use vous throughout.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How do you ask the price of something?',
      steps: [
        'Short fixed phrase.',
      ],
      answer: 'C’est combien?',
    },
    {
      level: 4,
      ask: 'Ask politely for two loaves of bread.',
      steps: [
        'Use the polite form for wanting.',
        'Add the quantity and please.',
      ],
      answer: 'Je voudrais deux pains, s’il vous plaît.',
    },
    {
      level: 5,
      ask: 'Why should a learner say Je voudrais rather than Je veux?',
      steps: [
        'Je veux means I want.',
        'The direct form is much blunter in French than in English.',
        'To a shopkeeper it sounds like a demand.',
      ],
      answer: 'Because Je veux is blunt in French, '
        + 'closer to "give me" than to "I want". '
        + 'Je voudrais is the polite form and is what is actually said.',
    },
  ],

  traps: [
    {
      mistake: 'Using Je veux in a shop.',
      why: 'It is much blunter in French than I want is in English.',
    },
    {
      mistake: 'Leaving out bonjour.',
      why: 'In French it is close to compulsory, '
        + 'and leaving it out is noticed.',
    },
    {
      mistake: 'Using tu with somebody serving you.',
      why: 'Vous, always, with anybody you do not know.',
    },
    {
      mistake: 'Trying to understand every word of the reply.',
      why: 'Listen for the one word that carries the answer: '
        + 'gauche, droite, tout droit, or a number.',
    },
  ],

  figure: {
    alt: 'A simple street map. A dot low on a vertical street is marked '
      + 'vous êtes ici, you are here. A green arrow runs straight up that '
      + 'street labelled tout droit. Where it meets a crossing street, one '
      + 'green arrow runs left labelled à gauche and another runs right '
      + 'labelled à droite, ending at a box marked la gare, the station.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="28" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">the words that answer où est la gare?</text>'
      + '<line x1="200" y1="370" x2="200" y2="170" stroke-width="3"/>'
      + '<line x1="60" y1="170" x2="600" y2="170" stroke-width="3"/>'
      + '<circle cx="200" cy="344" r="8" fill="currentColor" stroke="none"/>'
      + '<text x="216" y="350" font-size="15" fill="currentColor" stroke="none">vous êtes ici</text>'
      + '<line x1="186" y1="330" x2="186" y2="202" stroke="#0f8a4d" stroke-width="4"/>'
      + '<path d="M 178 204 L 186 188 L 194 204 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="176" y="268" font-size="16" text-anchor="end" fill="#0f8a4d" stroke="none">tout droit</text>'
      + '<line x1="186" y1="156" x2="96" y2="156" stroke="#0f8a4d" stroke-width="4"/>'
      + '<path d="M 98 148 L 82 156 L 98 164 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="138" y="140" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">à gauche</text>'
      + '<line x1="214" y1="156" x2="424" y2="156" stroke="#0f8a4d" stroke-width="4"/>'
      + '<path d="M 422 148 L 438 156 L 422 164 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="320" y="140" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">à droite</text>'
      + '<rect x="452" y="128" width="120" height="56" rx="6"/>'
      + '<text x="512" y="162" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">la gare</text>'
      + '<text x="512" y="206" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">the station</text>'
      + '<text x="320" y="392" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">catch one of the three green words and you have the way</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What to say in a shop and in a restaurant',
      columns: ['What you say', 'What it means', 'Where'],
      rows: [
        [
          'Je voudrais ... s’il vous plaît',
          'I would like ..., please',
          'A shop, for whatever you want',
        ],
        [
          'C’est combien?',
          'How much is it?',
          'A shop or a market',
        ],
        [
          'C’est trop cher',
          'That is too expensive',
          'A market, where the price can still move',
        ],
        [
          'Je prends celui-ci',
          'I will take this one',
          'A shop, once you have chosen',
        ],
        [
          'Je prends le riz',
          'I will take the rice',
          'A restaurant, to order',
        ],
        [
          'L’addition, s’il vous plaît',
          'The bill, please',
          'A restaurant, to pay',
        ],
      ],
      note: 'Bonjour, with monsieur or madame, belongs at the start of '
        + 'every one of these, and merci, au revoir at the end. '
        + 'So does vous: never tu to somebody serving you.',
    },
    {
      caption: 'Asking the way, and the words the answer will be carried '
        + 'in',
      columns: ['The French', 'What it means'],
      rows: [
        ['Où est la gare, s’il vous plaît?', 'Where is the station, please?'],
        ['tout droit', 'Straight on'],
        ['à gauche', 'On the left'],
        ['à droite', 'On the right'],
        ['près de', 'Near to'],
        ['loin de', 'Far from'],
      ],
      note: 'A number usually comes with one of these: '
        + 'deux cents mètres, or la deuxième rue. '
        + 'Catch the direction word and the number '
        + 'and you have the whole answer.',
    },
  ],

  extension:
    'A conversation needs a repair phrase more than it needs vocabulary: '
    + 'Pardon?, Pouvez-vous répéter, s’il vous plaît?, '
    + 'and Je ne comprends pas. '
    + 'Those three keep a conversation alive '
    + 'when everything else has run out.',

  questions: [
    {
      id: 'cnv-1',
      ask: 'How do you say "to the left"?',
      kind: 'choice',
      options: ['à gauche', 'à droite', 'tout droit'],
      answer: 'à gauche',
      teach: 'à droite is right and tout droit is straight on.',
      level: 3,
    },
    {
      id: 'cnv-2',
      ask: 'How do you ask for the bill in a restaurant?',
      kind: 'choice',
      options: [
        'L’addition, s’il vous plaît',
        'C’est combien?',
        'Je voudrais',
      ],
      answer: 'L’addition, s’il vous plaît',
      teach: 'C’est combien asks the price of one thing.',
      level: 4,
    },
    {
      id: 'cnv-3',
      ask: 'What is the best preparation for understanding directions?',
      kind: 'choice',
      options: [
        'Know the few words that carry the answer',
        'Learn the whole reply by heart',
        'Ask in English',
      ],
      answer: 'Know the few words that carry the answer',
      teach: 'Gauche, droite, tout droit and a number are enough.',
      level: 5,
    },
  ],
})

/* ── past and future tenses ──────────────────────────── */

teach({
  topicId: 'past-future-french',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The passé composé needs two parts: '
      + 'avoir or être in the present, then the past participle. '
      + 'J’ai mangé. Je suis allé. '
      + 'The near future needs aller in the present plus an infinitive: '
      + 'Je vais manger.',
    method: [
      'Decide whether the verb takes avoir or être.',
      'Put that verb in the present, then add the participle.',
      'For être verbs, make the participle agree with the subject.',
    ],
  },

  idea:
    'The passé composé reports a completed past action, '
    + 'and it is built from two words: '
    + 'the present tense of avoir or être, '
    + 'followed by the past participle. '
    + 'For -er verbs the participle ends in é, '
    + 'so parler gives parlé. '
    + 'Most verbs take avoir. '
    + 'A small group of verbs of movement and change of state take être: '
    + 'aller, venir, arriver, partir, entrer, sortir, '
    + 'monter, descendre, rester, tomber, naître, mourir, devenir. '
    + 'With être the participle also agrees with the subject, '
    + 'the way an adjective would. '
    + 'The near future is simpler: '
    + 'aller in the present plus the infinitive.',

  mechanism:
    'The thing to understand first '
    + 'is that the passé composé is two words and not one, '
    + 'because learners try to find a single past form of the verb '
    + 'and there is not one. '
    + 'You build it. '
    + 'One part says who and when, '
    + 'and that is avoir or être in the present. '
    + 'The other part says what happened, '
    + 'and that is the participle, which does not change for person. '
    + 'So the conjugation work is all in the first word, '
    + 'which you already know, '
    + 'and the second word is one form to learn per verb. '
    + 'That is why this tense is reachable at JHS 3 '
    + 'when it looks harder than the present. '
    + 'The être group is the part that has to be learned deliberately, '
    + 'and there is a pattern that helps: '
    + 'they are nearly all verbs of going somewhere or becoming '
    + 'something. '
    + 'Arriving, leaving, going up, going down, being born, dying. '
    + 'The agreement with être follows from the same idea: '
    + 'those verbs describe a change in the subject, '
    + 'so the participle behaves like an adjective describing the subject, '
    + 'and adds -e or -s exactly as an adjective would. '
    + 'The near future is the easiest tense in French '
    + 'and is worth using as much as possible, '
    + 'because it needs nothing new: '
    + 'aller, which you learned in JHS 1, plus the infinitive from the '
    + 'dictionary. '
    + 'That is the second payment on the hour spent learning aller.',

  recap:
    'You can conjugate regular -er verbs, '
    + 'and you know être, avoir and aller in the present. '
    + 'This builds the past and the future out of those three.',

  method: [
    'Decide whether the verb takes avoir or être.',
    'If it is a verb of movement or change of state, consider être.',
    'Put avoir or être into the present tense for your subject.',
    'Add the past participle.',
    'For -er verbs the participle ends in é.',
    'With être, make the participle agree with the subject.',
    'For the near future, use aller in the present plus the infinitive.',
    'Do not conjugate the infinitive in the near future.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Put into the passé composé: Je mange.',
      steps: [
        'Manger takes avoir.',
        'j’ai plus the participle mangé.',
      ],
      answer: 'J’ai mangé.',
    },
    {
      level: 4,
      ask: 'A girl says she went to school. Write it in French.',
      steps: [
        'Aller takes être.',
        'je suis plus allé.',
        'A girl, so the participle agrees: allée.',
      ],
      answer: 'Je suis allée à l’école.',
    },
    {
      level: 5,
      ask: 'Why does the participle agree with the subject after être '
        + 'but not after avoir?',
      steps: [
        'The être verbs describe a change in the subject itself.',
        'So the participle describes the subject, like an adjective.',
        'Adjectives agree with what they describe.',
        'With avoir the participle is not describing the subject.',
      ],
      answer: 'Because the être verbs describe a change in the subject, '
        + 'so the participle works like an adjective describing them '
        + 'and agrees as an adjective would.',
    },
  ],

  traps: [
    {
      mistake: 'Looking for a single past form of the verb.',
      why: 'The passé composé is two words: a helper plus a participle.',
    },
    {
      mistake: 'Using avoir with aller or venir.',
      why: 'Those are in the être group, '
        + 'which is mostly verbs of movement and change of state.',
    },
    {
      mistake: 'Forgetting the agreement after être.',
      why: 'Je suis allée for a girl. '
        + 'The participle behaves like an adjective.',
    },
    {
      mistake: 'Conjugating the second verb in the near future.',
      why: 'It stays as the infinitive: je vais manger, not je vais mange.',
    },
  ],

  figure: {
    alt: 'Two rows, each showing a tense built out of two boxes joined by '
      + 'a plus sign. The first row, the passé composé, is avoir or être '
      + 'in the present, labelled as saying who and when, plus the past '
      + 'participle such as parlé or allé, labelled as saying what '
      + 'happened. The second row, the near future, is aller in the '
      + 'present plus the infinitive such as partir or manger. A note says '
      + 'the conjugation is all in the first box, and that the first box '
      + 'is one you already know.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="26" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">both tenses are two words, not one</text>'
      + '<text x="20" y="62" font-size="17" fill="currentColor" stroke="none">the passé composé</text>'
      + '<rect x="20" y="72" width="250" height="66" rx="6"/>'
      + '<text x="145" y="100" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">avoir or être,</text>'
      + '<text x="145" y="122" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">in the present</text>'
      + '<text x="290" y="114" font-size="26" text-anchor="middle" fill="currentColor" stroke="none">+</text>'
      + '<rect x="310" y="72" width="250" height="66" rx="6"/>'
      + '<text x="435" y="100" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the past participle</text>'
      + '<text x="435" y="122" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">parlé, allé</text>'
      + '<text x="145" y="160" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">says who, and when</text>'
      + '<text x="435" y="160" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">says what happened</text>'
      + '<text x="20" y="222" font-size="17" fill="currentColor" stroke="none">the near future</text>'
      + '<rect x="20" y="232" width="250" height="66" rx="6"/>'
      + '<text x="145" y="260" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">aller,</text>'
      + '<text x="145" y="282" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">in the present</text>'
      + '<text x="290" y="274" font-size="26" text-anchor="middle" fill="currentColor" stroke="none">+</text>'
      + '<rect x="310" y="232" width="250" height="66" rx="6"/>'
      + '<text x="435" y="260" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the infinitive</text>'
      + '<text x="435" y="282" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">partir, manger</text>'
      + '<path d="M 20 312 V 324 H 270 V 312" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="320" y="352" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">the conjugating is all in the left box,</text>'
      + '<text x="320" y="376" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">and the left box is one you already know</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The two tenses, each built out of two words',
      columns: ['Tense', 'First word', 'Second word', 'Example'],
      rows: [
        [
          'Passé composé, with avoir',
          'avoir in the present',
          'The past participle, which does not change',
          'j’ai parlé, I spoke',
        ],
        [
          'Passé composé, with être',
          'être in the present',
          'The past participle, agreeing with the subject',
          'je suis allé, I went',
        ],
        [
          'Near future',
          'aller in the present',
          'The infinitive, straight from the dictionary',
          'je vais partir, I am going to leave',
        ],
      ],
      note: 'Only the first word is conjugated. '
        + 'In the être row the second word still changes, '
        + 'but for gender and number, the way an adjective does, '
        + 'and never for person.',
    },
    {
      caption: 'How the participle agrees with the subject after être',
      columns: ['Who the subject is', 'The participle', 'The whole thing'],
      rows: [
        ['A boy, or a man', 'allé', 'je suis allé'],
        ['A girl, or a woman', 'allée', 'je suis allée'],
        ['A group, with at least one male', 'allés', 'nous sommes allés'],
        ['A group of girls or women only', 'allées', 'nous sommes allées'],
      ],
      note: 'The être verbs describe a change in the subject, '
        + 'so the participle behaves like an adjective describing them, '
        + 'and adds e or s exactly as an adjective would.',
    },
  ],

  extension:
    'The imperfect tense describes what used to happen or was happening, '
    + 'as against the passé composé, which reports what happened once. '
    + 'French keeps the two apart more strictly than English does, '
    + 'which is why a story in French uses both.',

  questions: [
    {
      id: 'pfr-1',
      ask: 'Which two parts make the passé composé?',
      kind: 'choice',
      options: [
        'avoir or être, plus the past participle',
        'the infinitive plus an ending',
        'aller plus the infinitive',
      ],
      answer: 'avoir or être, plus the past participle',
      teach: 'The last one is the near future.',
      level: 3,
    },
    {
      id: 'pfr-2',
      ask: 'Which verb takes être in the passé composé?',
      kind: 'choice',
      options: ['aller', 'manger', 'parler'],
      answer: 'aller',
      teach: 'The être group is mostly verbs of movement and change of '
        + 'state.',
      level: 4,
    },
    {
      id: 'pfr-3',
      ask: 'How do you say "I am going to leave"?',
      kind: 'choice',
      options: [
        'Je vais partir',
        'Je vais parti',
        'J’ai parti',
      ],
      answer: 'Je vais partir',
      teach: 'The second verb stays as the infinitive.',
      level: 5,
    },
  ],
})

/* ── writing ──────────────────────────────────────── */

teach({
  topicId: 'write-french',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Write short correct sentences rather than long guessed ones. '
      + 'Plan in French with the words you actually know. '
      + 'Check three things at the end: '
      + 'verb agreement with the subject, '
      + 'adjective agreement with the noun, '
      + 'and every accent.',
    method: [
      'Plan using only words you are sure of.',
      'Write short sentences.',
      'Check verbs, adjectives and accents as three separate passes.',
    ],
  },

  idea:
    'Two forms are set: a letter and a short composition. '
    + 'A French letter has a layout that is fixed, '
    + 'and a greeting and a closing that change with who will read it. '
    + 'A composition needs a plan, one idea in each paragraph, '
    + 'and one tense kept from start to finish. '
    + 'In both, the marks go to accuracy: '
    + 'correct agreement, correct verb forms, '
    + 'accents written in full, '
    + 'and words used in the sense they actually have.',

  mechanism:
    'The temptation in a French composition '
    + 'is to write what you would write in English '
    + 'and reach for words you half remember, '
    + 'and it is always a bad trade. '
    + 'A long sentence with two guessed words and a wrong tense '
    + 'earns less than a short sentence that is entirely correct, '
    + 'because the marks are for accuracy '
    + 'and a guessed word often means something else. '
    + 'So the planning rule is to plan with the words you have. '
    + 'Decide what you can say, in French, '
    + 'and write that, '
    + 'rather than deciding what you want to say in English '
    + 'and then failing to translate it. '
    + 'This feels like writing less and scores more. '
    + 'The checking at the end is where the easiest marks in the paper '
    + 'are, '
    + 'and it works best as three separate passes '
    + 'rather than one general reading. '
    + 'Accents belong in the last of the three, '
    + 'and one thing about them is worth saying plainly: '
    + 'an accent is part of the spelling, '
    + 'so a missing one is a spelling error '
    + 'even where the word is still readable.',

  recap:
    'You can conjugate verbs in three tenses, '
    + 'make adjectives agree, '
    + 'and read a short French text. '
    + 'This produces French of your own, '
    + 'where accuracy is what is marked.',

  method: [
    'Read the question and note the form: letter or composition.',
    'Plan in French, using only words you are sure of.',
    'Decide the tense and keep it.',
    'For a letter, write the town and date, then the greeting.',
    'Write one idea per paragraph.',
    'Keep sentences short.',
    'Close the letter appropriately for the reader.',
    'First check: every verb against its subject.',
    'Second check: every adjective against its noun.',
    'Third check: every accent.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How do you begin a letter to a female friend?',
      steps: [
        'Cher changes for a feminine reader.',
      ],
      answer: 'Chère Ama.',
    },
    {
      level: 4,
      ask: 'Which scores more, and why? '
        + '(a) A long sentence with two guessed words. '
        + '(b) A short sentence that is entirely correct.',
      steps: [
        'The marks are for accuracy.',
        'A guessed word often means something else.',
      ],
      answer: '(b). '
        + 'Accuracy is marked, '
        + 'and a wrong word can change the meaning completely.',
    },
    {
      level: 5,
      ask: 'Why check verbs, adjectives and accents as three separate '
        + 'passes?',
      steps: [
        'Reading for everything at once finds little.',
        'Each pass looks for one kind of thing.',
        'So it is easier to see what is wrong.',
      ],
      answer: 'Because each pass looks for one kind of error, '
        + 'which is far more effective than one general reading '
        + 'where you are watching for everything at once.',
    },
  ],

  traps: [
    {
      mistake: 'Planning in English and translating.',
      why: 'It produces sentences you cannot write correctly, '
        + 'and guessed words.',
    },
    {
      mistake: 'Writing long sentences to seem fluent.',
      why: 'Accuracy is marked. '
        + 'A short correct sentence scores more.',
    },
    {
      mistake: 'Leaving off accents.',
      why: 'They are part of the spelling, '
        + 'and a missing one is an error.',
    },
    {
      mistake: 'Checking everything in one reading.',
      why: 'Three focused passes find far more.',
    },
  ],

  figure: {
    alt: 'The layout of a French letter, drawn as a page. The town and the '
      + 'date sit at the top right. Below them on the left is the '
      + 'greeting, Cher Kofi. Below that are ruled lines standing for two '
      + 'paragraphs. Below those, on the left, is the closing, Amitiés, '
      + 'and under it a name. Green labels down the right hand side name '
      + 'each part.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="28" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">the layout of a French letter</text>'
      + '<rect x="110" y="44" width="380" height="300" rx="4"/>'
      + '<text x="470" y="82" font-size="15" text-anchor="end" fill="currentColor" stroke="none">Accra, le 3 novembre</text>'
      + '<text x="128" y="130" font-size="16" fill="currentColor" stroke="none">Cher Kofi,</text>'
      + '<line x1="128" y1="162" x2="450" y2="162" stroke-width="1"/>'
      + '<line x1="128" y1="180" x2="450" y2="180" stroke-width="1"/>'
      + '<line x1="128" y1="198" x2="380" y2="198" stroke-width="1"/>'
      + '<line x1="128" y1="228" x2="450" y2="228" stroke-width="1"/>'
      + '<line x1="128" y1="246" x2="412" y2="246" stroke-width="1"/>'
      + '<text x="128" y="292" font-size="16" fill="currentColor" stroke="none">Amitiés,</text>'
      + '<text x="128" y="322" font-size="16" fill="currentColor" stroke="none">Ama</text>'
      + '<text x="500" y="76" font-size="13" fill="#0f8a4d" stroke="none">the town</text>'
      + '<text x="500" y="92" font-size="13" fill="#0f8a4d" stroke="none">and the date</text>'
      + '<text x="500" y="134" font-size="13" fill="#0f8a4d" stroke="none">the greeting</text>'
      + '<text x="500" y="186" font-size="13" fill="#0f8a4d" stroke="none">one idea per</text>'
      + '<text x="500" y="202" font-size="13" fill="#0f8a4d" stroke="none">paragraph</text>'
      + '<text x="500" y="296" font-size="13" fill="#0f8a4d" stroke="none">the closing</text>'
      + '<text x="320" y="382" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">the layout is marked, so settle it before you write a word</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The greeting and the closing of a French letter, '
        + 'by who will read it',
      columns: ['Who you are writing to', 'Greeting', 'Closing'],
      rows: [
        ['A male friend', 'Cher Kofi,', 'Amitiés, or À bientôt'],
        ['A female friend', 'Chère Ama,', 'Amitiés, or À bientôt'],
        [
          'A man you do not know',
          'Monsieur,',
          'A formal phrase, such as Cordialement',
        ],
        [
          'A woman you do not know',
          'Madame,',
          'A formal phrase, such as Cordialement',
        ],
      ],
      note: 'Cher is the masculine form and Chère the feminine, '
        + 'and the difference is marked. '
        + 'The town and the date go above the greeting in every case.',
    },
    {
      caption: 'The three checks at the end, one pass each',
      columns: ['Pass', 'What you look for', 'What you check it against'],
      rows: [
        [
          'First',
          'Every verb',
          'Its subject: does the ending match the person?',
        ],
        [
          'Second',
          'Every adjective',
          'Its noun: the gender and the number',
        ],
        [
          'Third',
          'Every accent',
          'The spelling of the word, which the accent is part of',
        ],
      ],
      note: 'Three focused passes find far more than one careful reading, '
        + 'because each time you are looking for one kind of thing '
        + 'instead of everything at once.',
    },
  ],

  extension:
    'A dozen linking words improve a composition '
    + 'more than a hundred nouns would. '
    + 'Learn d’abord, ensuite, parce que, mais and enfin. '
    + 'They turn separate correct sentences '
    + 'into writing that holds together.',

  questions: [
    {
      id: 'wfr-1',
      ask: 'How do you address a male friend in a letter?',
      kind: 'choice',
      options: ['Cher Kofi', 'Chère Kofi', 'Monsieur Kofi'],
      answer: 'Cher Kofi',
      teach: 'Chère is the feminine form, and Monsieur is formal.',
      level: 3,
    },
    {
      id: 'wfr-2',
      ask: 'What should you plan a French composition with?',
      kind: 'choice',
      options: [
        'Only words you are sure of',
        'What you would write in English',
        'As many new words as possible',
      ],
      answer: 'Only words you are sure of',
      teach: 'A guessed word often means something else entirely.',
      level: 4,
    },
    {
      id: 'wfr-3',
      ask: 'What are the three checks at the end?',
      kind: 'choice',
      options: [
        'Verbs, adjectives, accents',
        'Length, spelling, neatness',
        'Nouns, verbs, punctuation',
      ],
      answer: 'Verbs, adjectives, accents',
      teach: 'Three focused passes find more than one general reading.',
      level: 5,
    },
  ],
})
