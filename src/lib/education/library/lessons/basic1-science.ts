/**
 * Stored lessons for Basic 1 Science.
 *
 * Written to be spoken to a six or seven year old. See `basic1-maths.ts` for
 * why these read as short spoken lines rather than paragraphs.
 *
 * Both topics here are ones a child can test in the room they are sitting in,
 * which is the point: at this age science is a habit of checking, not a body
 * of facts to be remembered.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── living and non-living ────────────────────────────────────────────────── */

teach({
  topicId: 'living-or-not',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Some things are alive and some are not. A goat is alive. A stone is not. '
    + 'A mango tree is alive, and so is the mango on it. To know which, you do '
    + 'not look at it, you ask it questions: does it grow, does it need food '
    + 'and water, does it make young ones?',

  mechanism:
    'Looking is not enough, because living things do not all look alike. A '
    + 'tree does not move about and a goat does, yet both are alive. A toy '
    + 'goat moves when you push it and is not. So the test is not movement or '
    + 'shape, it is whether the thing feeds, grows and makes more of itself. '
    + 'Those three go together: nothing does one without the others.',

  recap:
    'You know many animals and many plants already. Name three animals and '
    + 'three plants near your house before you start, and keep them in mind.',

  method: [
    'Ask: does it grow bigger by itself?',
    'Ask: does it need food or water?',
    'Ask: does it make young ones, or seeds?',
    'All three yes means it is living.',
    'If it never did any of them, it is non-living.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Is a stone living or non-living?',
      steps: [
        'Does it grow by itself? No.',
        'Does it need food or water? No.',
        'Does it make young ones? No.',
      ],
      answer: 'Non-living.',
    },
    {
      level: 2,
      ask: 'A car moves and it drinks fuel. Is it living?',
      steps: [
        'It moves, but moving is not the test.',
        'Does it grow bigger by itself? No, it stays the size it was built.',
        'Does it make young cars? No. People build more in a factory.',
      ],
      answer: 'Non-living. Moving and being filled up are not enough.',
    },
    {
      level: 3,
      ask: 'Is a seed in your hand living or non-living? It is not growing.',
      steps: [
        'It is not growing right now, that is true.',
        'But put it in soil and give it water, and it grows into a plant.',
        'It came from a plant, and it will make a plant that makes more seeds.',
        'So the ability is there, it is only waiting.',
      ],
      answer: 'Living. It is resting, not dead.',
    },
  ],

  traps: [
    {
      mistake: 'Saying anything that moves is alive.',
      why: 'A car, a ball and a river all move and none of them is alive. A '
        + 'mango tree does not move and it is.',
    },
    {
      mistake: 'Saying a plant is not alive because it cannot walk.',
      why: 'Plants grow, drink water and make seeds. That is all three tests '
        + 'passed.',
    },
    {
      mistake: 'Calling something non-living because it is still.',
      why: 'A sleeping goat and a resting seed are both alive. Ask the three '
        + 'questions instead of watching.',
    },
  ],

  extension:
    'Things that were once alive, like a wooden stool or a leather sandal, are '
    + 'in between. They are not alive now, but they came from something that '
    + 'was. Older classes call these "once living", and it is a useful third '
    + 'box when the two do not fit.',

  figure: {
    alt: 'Three questions used to test whether something is living, with a '
      + 'goat and a mango tree passing all three and a stone and a car failing',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="320" y="40" text-anchor="middle" font-size="17" fill="currentColor">Ask all three. Do not just look.</text>'
      /* the three questions down the left */
      + '<g font-size="15" fill="currentColor">'
      + '<text x="30" y="110">Does it grow by itself?</text>'
      + '<text x="30" y="180">Does it need food or water?</text>'
      + '<text x="30" y="250">Does it make young ones?</text>'
      + '</g>'
      /* column headings */
      + '<g font-size="16" font-weight="700" fill="currentColor">'
      + '<text x="330" y="78" text-anchor="middle">goat</text>'
      + '<text x="410" y="78" text-anchor="middle">tree</text>'
      + '<text x="495" y="78" text-anchor="middle">stone</text>'
      + '<text x="575" y="78" text-anchor="middle">car</text>'
      + '</g>'
      /* ticks and crosses */
      + '<g stroke-width="3" fill="none" stroke-linecap="round">'
      + '<path d="M322 102 l 6 8 l 14 -18" stroke="#0f8a4d"/><path d="M402 102 l 6 8 l 14 -18" stroke="#0f8a4d"/>'
      + '<path d="M487 94 l 16 16 M503 94 l -16 16" stroke="#c8433a"/><path d="M567 94 l 16 16 M583 94 l -16 16" stroke="#c8433a"/>'
      + '<path d="M322 172 l 6 8 l 14 -18" stroke="#0f8a4d"/><path d="M402 172 l 6 8 l 14 -18" stroke="#0f8a4d"/>'
      + '<path d="M487 164 l 16 16 M503 164 l -16 16" stroke="#c8433a"/>'
      + '<path d="M559 164 l 16 16 M575 164 l -16 16" stroke="#c8433a"/>'
      + '<path d="M322 242 l 6 8 l 14 -18" stroke="#0f8a4d"/><path d="M402 242 l 6 8 l 14 -18" stroke="#0f8a4d"/>'
      + '<path d="M487 234 l 16 16 M503 234 l -16 16" stroke="#c8433a"/><path d="M567 234 l 16 16 M583 234 l -16 16" stroke="#c8433a"/>'
      + '</g>'
      + '<path d="M30 286h580" stroke="currentColor" stroke-width="1.5"/>'
      + '<text x="330" y="318" text-anchor="middle" font-size="16" fill="#0f8a4d">living</text>'
      + '<text x="410" y="318" text-anchor="middle" font-size="16" fill="#0f8a4d">living</text>'
      + '<text x="495" y="318" text-anchor="middle" font-size="16" fill="#c8433a">not</text>'
      + '<text x="575" y="318" text-anchor="middle" font-size="16" fill="#c8433a">not</text>'
      + '<text x="320" y="366" text-anchor="middle" font-size="15" fill="#c8433a">The car moves and drinks fuel, and is still not alive.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'lnl-1',
      ask: 'Which of these is living?',
      kind: 'choice',
      options: ['A stone', 'A mango tree', 'A cup'],
      answer: 'A mango tree',
      teach: 'It grows, it drinks water and it makes seeds. All three tests '
        + 'passed, even though it never moves from its place.',
      level: 1,
    },
    {
      id: 'lnl-2',
      ask: 'A car moves. Does that make it living?',
      kind: 'choice',
      options: ['Yes, it moves', 'No, moving is not the test'],
      answer: 'No, moving is not the test',
      teach: 'Rivers and balls move too. The tests are growing by itself, '
        + 'needing food or water, and making young ones. A car does none.',
      level: 2,
    },
    {
      id: 'lnl-3',
      ask: 'How many of the three tests must something pass to be living?',
      kind: 'numeric',
      answer: '3',
      accept: ['three', 'all'],
      teach: 'All three. They go together: nothing grows and feeds without '
        + 'also being able to make more of itself.',
      level: 2,
    },
  ],
})

/* ── keeping clean and well ───────────────────────────────────────────────── */

teach({
  topicId: 'hygiene-primary',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Germs are too small to see. They sit on your hands after you touch '
    + 'things, and they go into you when your hand touches your food or your '
    + 'mouth. Washing your hands with soap takes them off before they can '
    + 'make that journey.',

  mechanism:
    'Think of the path a germ takes: from a thing you touched, onto your hand, '
    + 'onto your food, into your mouth, and then you are ill. Washing breaks '
    + 'that path in the middle. Soap matters because germs cling to the oil on '
    + 'your skin, and water alone slides over it. Soap lifts the oil, and the '
    + 'germs leave with it.',

  recap:
    'You cannot tell by looking whether your hands are dirty. Hands that look '
    + 'clean can still carry germs, which is why the rule is about when you '
    + 'wash, not about how dirty they look.',

  method: [
    'Wet your hands.',
    'Rub soap all over: palms, backs, between the fingers and the thumbs.',
    'Keep rubbing while you sing a short song, so it is long enough.',
    'Rinse the soap off with clean water.',
    'Dry them on something clean, or let the air dry them.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Name two times you must wash your hands.',
      steps: [
        'Think about when germs could get in: before food goes near your mouth.',
        'Think about where germs come from: after the toilet.',
      ],
      answer: 'Before eating, and after using the toilet.',
    },
    {
      level: 2,
      ask: 'Why is soap better than water alone?',
      steps: [
        'Germs cling to the oil on your skin.',
        'Water runs over the oil and leaves it there.',
        'Soap lifts the oil off, and the germs come away with it.',
      ],
      answer: 'Because soap removes the oil the germs are holding on to.',
    },
    {
      level: 3,
      ask: 'Your friend washes his hands, then dries them on his dirty shirt. '
        + 'Has he broken the germ path?',
      steps: [
        'Washing took the germs off his hands.',
        'The shirt has germs on it.',
        'Drying on it puts germs straight back on the clean hands.',
      ],
      answer: 'No. The path is joined up again at the end. Dry on something '
        + 'clean, or in the air.',
    },
  ],

  traps: [
    {
      mistake: 'Washing only when hands look dirty.',
      why: 'Germs are too small to see, so clean looking hands can still '
        + 'carry them. Wash at the times, not by the look.',
    },
    {
      mistake: 'A quick splash with no soap.',
      why: 'Water alone slides over the oil the germs cling to. Use soap and '
        + 'keep rubbing long enough.',
    },
    {
      mistake: 'Forgetting between the fingers and the thumbs.',
      why: 'Those are the parts most often missed, and germs stay exactly '
        + 'where the soap did not reach.',
    },
  ],

  extension:
    'The same idea of breaking a path explains much more than handwashing. '
    + 'Covering food keeps flies from carrying germs onto it, and covering '
    + 'your mouth when you cough stops the path starting at all. Find the '
    + 'path, then break it anywhere along its length.',

  figure: {
    alt: 'The path a germ takes from a touched object to the hand to the food '
      + 'to the mouth, with washing with soap shown cutting the path in the '
      + 'middle',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="320" y="40" text-anchor="middle" font-size="17" fill="currentColor">The path a germ takes</text>'
      + '<g fill="none" stroke="currentColor" stroke-width="2.5">'
      + '<rect x="30" y="80" width="112" height="70" rx="10"/>'
      + '<rect x="196" y="80" width="112" height="70" rx="10"/>'
      + '<rect x="362" y="80" width="112" height="70" rx="10"/>'
      + '<rect x="510" y="80" width="100" height="70" rx="10"/>'
      + '</g>'
      + '<g font-size="15" fill="currentColor" text-anchor="middle">'
      + '<text x="86" y="112">a thing you</text><text x="86" y="132">touched</text>'
      + '<text x="252" y="112">your</text><text x="252" y="132">hand</text>'
      + '<text x="418" y="112">your</text><text x="418" y="132">food</text>'
      + '<text x="560" y="112">your</text><text x="560" y="132">mouth</text>'
      + '</g>'
      + '<g stroke="currentColor" stroke-width="2.5" fill="none">'
      + '<path d="M142 115h46"/><path d="M308 115h46"/><path d="M474 115h28"/>'
      + '</g>'
      + '<g fill="currentColor">'
      + '<path d="M188 115 l -11 -6 l 0 12 z"/><path d="M354 115 l -11 -6 l 0 12 z"/><path d="M502 115 l -11 -6 l 0 12 z"/>'
      + '</g>'
      /* the cut */
      + '<path d="M316 66 L 346 164" stroke="#c8433a" stroke-width="4"/>'
      + '<path d="M346 66 L 316 164" stroke="#c8433a" stroke-width="4"/>'
      + '<rect x="212" y="206" width="236" height="58" rx="12" fill="none" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="330" y="242" text-anchor="middle" font-size="18" fill="#0f8a4d">wash with soap here</text>'
      + '<path d="M330 200 L330 168" stroke="#0f8a4d" stroke-width="2.5"/>'
      + '<path d="M330 164 l -6 11 l 12 0 z" fill="#0f8a4d"/>'
      + '<text x="320" y="310" text-anchor="middle" font-size="16" fill="currentColor">Break the path anywhere and the germ does not arrive.</text>'
      + '<text x="320" y="344" text-anchor="middle" font-size="15" fill="#c8433a">Soap, not just water: germs hold on to the oil on your skin.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'hyg-1',
      ask: 'When must you always wash your hands?',
      kind: 'choice',
      options: ['Only when they look dirty', 'Before eating', 'Once a day'],
      answer: 'Before eating',
      teach: 'Germs are too small to see, so looking is no guide. Before food '
        + 'is the moment the path would reach your mouth.',
      level: 1,
    },
    {
      id: 'hyg-2',
      ask: 'Why use soap and not water alone?',
      kind: 'choice',
      options: [
        'Soap smells nice',
        'Soap lifts the oil the germs cling to',
        'Water is dirty',
      ],
      answer: 'Soap lifts the oil the germs cling to',
      teach: 'Water on its own runs over the oil on your skin and leaves the '
        + 'germs behind. Soap takes the oil away and they go with it.',
      level: 2,
    },
    {
      id: 'hyg-3',
      ask: 'Where on your hands do people most often miss?',
      kind: 'choice',
      options: ['The palms', 'Between the fingers', 'The wrists'],
      answer: 'Between the fingers',
      teach: 'Palms get rubbed without thinking. Between the fingers and '
        + 'around the thumbs are the places soap does not reach unless you '
        + 'aim for them.',
      level: 2,
    },
  ],
})
