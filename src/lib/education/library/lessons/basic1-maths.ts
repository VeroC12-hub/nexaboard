/**
 * Stored lessons for Basic 1 Mathematics.
 *
 * ── Written differently from `jhs-science.ts`, on purpose ───────────────────
 *
 * A Basic 1 learner is six or seven and cannot read a paragraph. `skinFor`
 * puts them in the kid interface and `readingLevel` calls them a pre-reader,
 * which means every line here is SPOKEN to them while they look at something,
 * one block to a screen. So the prose is short spoken sentences, not the
 * explanatory paragraphs a JHS learner reads for themselves. The adult sitting
 * beside them reads the same words, which is why they still have to be exact.
 *
 * Everything is counted in things a child in Ghana has held: mangoes, cedis,
 * sticks, bottle tops. Nothing here needs a document to assert and nothing
 * claims an indicator code or a mark allocation, which is the line
 * `capability.ts` draws.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── numbers to 100 ───────────────────────────────────────────────────────── */

teach({
  topicId: 'numbers-to-100',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Numbers keep going after ten. We count them in tens, the way we tie '
    + 'things in bundles. Ten sticks make one bundle. Three bundles and four '
    + 'loose sticks is thirty four. The first number tells you the bundles. '
    + 'The second tells you the loose ones.',

  mechanism:
    'The place a number sits tells you what it is worth. In 34 the 3 is not '
    + 'three. It is three bundles, so it is thirty. That is why 34 and 43 are '
    + 'different numbers even though they use the same two digits. Move a digit '
    + 'and you change what it is worth.',

  recap:
    'Counting means one number for each thing, and no thing counted twice. '
    + 'Touch each one as you say its number. The last number you say is how '
    + 'many there are.',

  method: [
    'To read a number, say the tens first, then the ones. 56 is fifty, then six.',
    'To say which is bigger, look at the tens first.',
    'More tens wins. 40 is bigger than 39, because four bundles beat three.',
    'Only if the tens are the same do you look at the ones. 56 beats 53.',
  ],

  worked: [
    {
      level: 1,
      ask: 'You have 2 bundles of ten mangoes and 5 loose mangoes. How many?',
      steps: [
        '2 bundles is twenty.',
        'Then the 5 loose ones.',
        'Twenty, then five, is twenty five.',
      ],
      answer: '25 mangoes.',
    },
    {
      level: 2,
      ask: 'Which is bigger, 47 or 74?',
      steps: [
        'Look at the tens. 47 has 4 tens. 74 has 7 tens.',
        '7 bundles is more than 4 bundles.',
        'So 74 is bigger. The ones do not matter here.',
      ],
      answer: '74 is bigger.',
    },
    {
      level: 3,
      ask: 'Put these in order, smallest first: 38, 83, 30, 80.',
      steps: [
        'Sort by bundles first. 30 and 38 have 3 bundles. 80 and 83 have 8.',
        'So 30 and 38 both come before 80 and 83.',
        'Now the ones. 30 has no loose ones, 38 has eight, so 30 comes first.',
        'Same for the big ones: 80 has none, 83 has three.',
      ],
      answer: '30, 38, 80, 83.',
    },
  ],

  traps: [
    {
      mistake: 'Saying 19 is bigger than 20 because 9 is bigger than 0.',
      why: 'The 9 is only nine loose ones. The 2 in 20 is two whole bundles. '
        + 'Always count bundles before loose ones.',
    },
    {
      mistake: 'Reading 34 as "three four".',
      why: 'The 3 is not three. It is thirty, because it sits in the tens '
        + 'place. Say the tens first, then the ones.',
    },
    {
      mistake: 'Writing sixty one as 601.',
      why: 'Sixty is already written with the 6 in the tens place. You do not '
        + 'write the nought as well. Sixty one is 61.',
    },
  ],

  extension:
    'The same idea keeps working past a hundred. Ten bundles tied together '
    + 'make one big bundle of a hundred, and then 342 is three hundreds, four '
    + 'tens and two ones. Nothing new is learned, the places just keep going.',

  figure: {
    alt: 'Three bundles of ten sticks and four single sticks, labelled as '
      + 'thirty four, with the tens and ones shown under the number',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* three bundles of ten */
      + '<g stroke="currentColor" stroke-width="3" fill="none">'
      + '<g transform="translate(40,60)">'
      + '<path d="M0 0v110M12 0v110M24 0v110M36 0v110M48 0v110M60 0v110M72 0v110M84 0v110M96 0v110M108 0v110"/>'
      + '<rect x="-8" y="40" width="124" height="26" rx="6" stroke="#0f8a4d"/>'
      + '</g>'
      + '<g transform="translate(180,60)">'
      + '<path d="M0 0v110M12 0v110M24 0v110M36 0v110M48 0v110M60 0v110M72 0v110M84 0v110M96 0v110M108 0v110"/>'
      + '<rect x="-8" y="40" width="124" height="26" rx="6" stroke="#0f8a4d"/>'
      + '</g>'
      + '<g transform="translate(320,60)">'
      + '<path d="M0 0v110M12 0v110M24 0v110M36 0v110M48 0v110M60 0v110M72 0v110M84 0v110M96 0v110M108 0v110"/>'
      + '<rect x="-8" y="40" width="124" height="26" rx="6" stroke="#0f8a4d"/>'
      + '</g>'
      /* four loose ones */
      + '<g transform="translate(480,60)">'
      + '<path d="M0 0v110M20 0v110M40 0v110M60 0v110"/>'
      + '</g>'
      + '</g>'
      + '<text x="128" y="196" text-anchor="middle" font-size="15" fill="#0f8a4d">3 bundles of ten</text>'
      + '<text x="510" y="196" text-anchor="middle" font-size="15" fill="currentColor">4 ones</text>'
      + '<text x="128" y="222" text-anchor="middle" font-size="15" fill="#0f8a4d">= 30</text>'
      + '<text x="510" y="222" text-anchor="middle" font-size="15" fill="currentColor">= 4</text>'
      + '<text x="320" y="300" text-anchor="middle" font-size="46" font-weight="700" fill="currentColor">34</text>'
      + '<text x="252" y="340" text-anchor="middle" font-size="15" fill="#0f8a4d">tens</text>'
      + '<text x="352" y="340" text-anchor="middle" font-size="15" fill="currentColor">ones</text>'
      + '<path d="M262 312 L292 290" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M344 312 L324 290" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '</svg>',
  },

  questions: [
    {
      id: 'n100-1',
      ask: 'Which is bigger?',
      kind: 'choice',
      options: ['29', '31'],
      answer: '31',
      teach: '31 has three bundles of ten and 29 has only two. Bundles are '
        + 'counted first, so the 9 does not help. Three bundles beat two.',
      level: 1,
    },
    {
      id: 'n100-2',
      ask: 'How many is 4 bundles of ten and 2 loose ones?',
      kind: 'numeric',
      answer: '42',
      accept: ['forty two', 'forty-two'],
      teach: 'Four bundles is forty. Then the two loose ones. Say the tens '
        + 'first, then the ones: forty two.',
      level: 2,
    },
    {
      id: 'n100-3',
      ask: 'Which number comes between 68 and 70?',
      kind: 'numeric',
      answer: '69',
      accept: ['sixty nine', 'sixty-nine'],
      teach: 'Count on from 68. Sixty eight, sixty nine, seventy. The bundles '
        + 'stay at six until you pass sixty nine, then the next one makes seven.',
      level: 2,
    },
  ],
})

/* ── adding and taking away within 20 ─────────────────────────────────────── */

teach({
  topicId: 'add-within-20',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Adding is putting groups together and counting what you now have. Taking '
    + 'away is removing some and counting what is left. You do not have to '
    + 'count from one every time. Some answers you simply know, and the rest '
    + 'you work out from the ones you know.',

  mechanism:
    'Ten is the easy number, so we use it to get past it. To work out 8 and 5, '
    + 'take 2 from the 5 to fill the 8 up to ten. Ten and the 3 that is left '
    + 'is thirteen. That is why a child who knows the pairs that make ten can '
    + 'add anything up to twenty, and a child who counts on their fingers each '
    + 'time has to start again every time.',

  recap:
    'Counting on is adding. Start at the bigger number and count forward. For '
    + '9 and 2, start at nine and say ten, eleven. It is the same answer as '
    + 'counting all of them from one, and it is quicker.',

  method: [
    'Put the bigger number first. 3 and 9 is easier as 9 and 3.',
    'If one number is near ten, fill it up to ten first.',
    'Then add on what is left over.',
    'To take away, count back from the bigger number.',
    'Check it the other way round: if 8 and 5 is 13, then 13 take away 5 is 8.',
  ],

  worked: [
    {
      level: 1,
      ask: 'You had 6 bottle tops. Your friend gives you 3 more. How many now?',
      steps: [
        'Start at the bigger number, 6.',
        'Count on three: seven, eight, nine.',
      ],
      answer: '9 bottle tops.',
    },
    {
      level: 2,
      ask: 'What is 8 and 5?',
      steps: [
        '8 needs 2 more to make ten.',
        'Take 2 from the 5. That leaves 3.',
        'Ten and 3 is thirteen.',
      ],
      answer: '13.',
    },
    {
      level: 3,
      ask: 'You have 15 pesewas. You spend 7 pesewas. How much is left?',
      steps: [
        'Go down to ten first. 15 take away 5 is 10.',
        'You have taken 5 of the 7, so 2 more to take.',
        '10 take away 2 is 8.',
      ],
      answer: '8 pesewas.',
    },
  ],

  traps: [
    {
      mistake: 'Counting the starting number as one of the steps.',
      why: 'For 6 and 3, a child who says "six, seven, eight" has only counted '
        + 'two. Start the count on the next number after six.',
    },
    {
      mistake: 'Starting from one every single time.',
      why: 'It is not wrong, but it is slow and it is where mistakes creep in. '
        + 'Start from the bigger number and count on.',
    },
    {
      mistake: 'Taking away the wrong way round, like 7 take away 15.',
      why: 'You cannot take more than you have. Read the question again and '
        + 'find which number is the amount you started with.',
    },
  ],

  extension:
    'The same filling up to ten works for bigger numbers later. 28 and 5 is '
    + 'done by taking 2 from the 5 to make 30, then adding the 3 that is left '
    + 'to get 33. A child who learns the habit now keeps using it for years.',

  figure: {
    alt: 'Eight counters and five counters, with two of the five moved across '
      + 'to fill the first group up to ten, leaving three, showing eight plus '
      + 'five is ten plus three',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="40" y="44" font-size="16" fill="currentColor">8 and 5</text>'
      /* frame of ten: eight filled, two empty */
      + '<g transform="translate(40,70)">'
      + '<rect x="0" y="0" width="300" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M150 0v120" stroke="currentColor" stroke-width="2"/>'
      + '<circle cx="30" cy="34" r="18" fill="currentColor"/><circle cx="90" cy="34" r="18" fill="currentColor"/>'
      + '<circle cx="150" cy="34" r="18" fill="currentColor" transform="translate(-30,0)"/>'
      + '<circle cx="210" cy="34" r="18" fill="currentColor"/><circle cx="270" cy="34" r="18" fill="currentColor"/>'
      + '<circle cx="30" cy="88" r="18" fill="currentColor"/><circle cx="90" cy="88" r="18" fill="currentColor"/>'
      + '<circle cx="150" cy="88" r="18" fill="currentColor" transform="translate(-30,0)"/>'
      + '<circle cx="210" cy="88" r="18" fill="none" stroke="#0f8a4d" stroke-width="3" stroke-dasharray="5 5"/>'
      + '<circle cx="270" cy="88" r="18" fill="none" stroke="#0f8a4d" stroke-width="3" stroke-dasharray="5 5"/>'
      + '</g>'
      + '<text x="190" y="218" text-anchor="middle" font-size="15" fill="#0f8a4d">8 fills up to 10</text>'
      /* the five, two of them moving */
      + '<g transform="translate(400,70)">'
      + '<circle cx="30" cy="34" r="18" fill="none" stroke="#0f8a4d" stroke-width="3"/>'
      + '<circle cx="90" cy="34" r="18" fill="none" stroke="#0f8a4d" stroke-width="3"/>'
      + '<circle cx="30" cy="88" r="18" fill="currentColor"/>'
      + '<circle cx="90" cy="88" r="18" fill="currentColor"/>'
      + '<circle cx="150" cy="88" r="18" fill="currentColor"/>'
      + '</g>'
      + '<text x="460" y="60" font-size="15" fill="#0f8a4d">these 2 move</text>'
      + '<text x="520" y="218" text-anchor="middle" font-size="15" fill="currentColor">3 are left</text>'
      + '<path d="M392 104 C 360 104, 350 104, 332 130" stroke="#0f8a4d" stroke-width="2.5" fill="none"/>'
      + '<path d="M332 130 l 10 -8 l 1 11 z" fill="#0f8a4d"/>'
      + '<text x="320" y="300" text-anchor="middle" font-size="26" font-weight="700" fill="currentColor">10 and 3 is 13</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'a20-1',
      ask: 'What is 7 and 2?',
      kind: 'numeric',
      answer: '9',
      accept: ['nine'],
      teach: 'Start at seven and count on two: eight, nine. Do not count the '
        + 'seven itself as one of the two steps.',
      level: 1,
    },
    {
      id: 'a20-2',
      ask: 'What is 9 and 4?',
      kind: 'numeric',
      answer: '13',
      accept: ['thirteen'],
      teach: '9 needs 1 more to make ten. Take that 1 from the 4 and 3 is '
        + 'left. Ten and 3 is thirteen.',
      level: 2,
    },
    {
      id: 'a20-3',
      ask: 'You have 12 mangoes and give away 4. How many are left?',
      kind: 'numeric',
      answer: '8',
      accept: ['eight'],
      teach: 'Go down to ten first: 12 take away 2 is 10. You have taken 2 of '
        + 'the 4, so take 2 more. 10 take away 2 is 8.',
      level: 3,
    },
  ],
})

/* ── naming shapes ────────────────────────────────────────────────────────── */

teach({
  topicId: 'name-2d-3d',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Shapes have names, and the name comes from what you can count on them. A '
    + 'flat shape with three sides is a triangle. With four equal sides it is '
    + 'a square. Solid shapes are the ones you can hold: a ball is a sphere, a '
    + 'tin is a cylinder, a box is a cuboid.',

  mechanism:
    'You do not remember shapes by how they look. You name them by counting. '
    + 'Count the sides and the corners of a flat shape, or the faces of a '
    + 'solid one, and the name follows. That is why a long thin triangle and a '
    + 'wide flat triangle are both triangles, even though they do not look '
    + 'alike: both have three sides.',

  recap:
    'A side is a straight edge you can run your finger along. A corner is '
    + 'where two sides meet and your finger has to turn.',

  method: [
    'Is it flat, or can you hold it? Flat shapes first.',
    'Count the sides. Three is a triangle. Four is a square or a rectangle.',
    'If all four sides are the same length it is a square. If two are long and '
      + 'two are short it is a rectangle.',
    'No sides at all and no corners means a circle.',
    'For solid shapes, find the flat faces. A box has six. A tin has two flat '
      + 'ends and one curved around. A ball has none.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Your exercise book is a flat shape. What is it?',
      steps: [
        'Count the sides. Four.',
        'Are they all the same length? No. Two are long, two are short.',
      ],
      answer: 'A rectangle.',
    },
    {
      level: 2,
      ask: 'How many corners does a triangle have?',
      steps: [
        'A triangle has three sides.',
        'Run your finger round. You turn once at the end of each side.',
        'So there are as many corners as sides.',
      ],
      answer: 'Three corners.',
    },
    {
      level: 3,
      ask: 'A tin of milk and a football. Say what each one is and how they '
        + 'differ.',
      steps: [
        'The tin has two flat circle ends and a curved part round the middle. '
          + 'That is a cylinder.',
        'The football has no flat part anywhere. That is a sphere.',
        'Both roll, but the tin only rolls one way, because of its flat ends.',
      ],
      answer: 'A cylinder and a sphere.',
    },
  ],

  traps: [
    {
      mistake: 'Calling every four sided shape a square.',
      why: 'A square needs all four sides the same length. A door and a book '
        + 'are rectangles, not squares.',
    },
    {
      mistake: 'Saying a triangle turned upside down is not a triangle.',
      why: 'Turning a shape does not change how many sides it has. Count, do '
        + 'not look.',
    },
    {
      mistake: 'Mixing up a circle and a sphere.',
      why: 'A circle is flat, like a drawn ring. A sphere is solid, like a '
        + 'ball you can hold.',
    },
  ],

  extension:
    'Shapes with five and six sides have names too, the pentagon and the '
    + 'hexagon, and the counting rule is the same one. Look at the pattern on '
    + 'a football and you will find hexagons on it.',

  figure: {
    alt: 'A triangle, a square, a rectangle and a circle, each labelled with '
      + 'how many sides and corners it has',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<g fill="none" stroke="currentColor" stroke-width="3">'
      + '<path d="M80 150 L140 40 L200 150 Z"/>'
      + '<rect x="250" y="50" width="100" height="100"/>'
      + '<rect x="395" y="70" width="130" height="80"/>'
      + '<circle cx="570" cy="100" r="50"/>'
      + '</g>'
      /* corner dots on the triangle and square, so corners are countable */
      + '<g fill="#0f8a4d">'
      + '<circle cx="80" cy="150" r="6"/><circle cx="140" cy="40" r="6"/><circle cx="200" cy="150" r="6"/>'
      + '<circle cx="250" cy="50" r="6"/><circle cx="350" cy="50" r="6"/>'
      + '<circle cx="250" cy="150" r="6"/><circle cx="350" cy="150" r="6"/>'
      + '</g>'
      + '<text x="140" y="190" text-anchor="middle" font-size="16" fill="currentColor">triangle</text>'
      + '<text x="140" y="214" text-anchor="middle" font-size="14" fill="#0f8a4d">3 sides, 3 corners</text>'
      + '<text x="300" y="190" text-anchor="middle" font-size="16" fill="currentColor">square</text>'
      + '<text x="300" y="214" text-anchor="middle" font-size="14" fill="#0f8a4d">4 equal sides</text>'
      + '<text x="460" y="190" text-anchor="middle" font-size="16" fill="currentColor">rectangle</text>'
      + '<text x="460" y="214" text-anchor="middle" font-size="14" fill="#0f8a4d">2 long, 2 short</text>'
      + '<text x="570" y="190" text-anchor="middle" font-size="16" fill="currentColor">circle</text>'
      + '<text x="570" y="214" text-anchor="middle" font-size="14" fill="#0f8a4d">no sides</text>'
      /* solids */
      + '<g fill="none" stroke="currentColor" stroke-width="3">'
      + '<circle cx="130" cy="310" r="46"/>'
      + '<ellipse cx="320" cy="272" rx="46" ry="16"/>'
      + '<path d="M274 272v76M366 272v76"/>'
      + '<ellipse cx="320" cy="348" rx="46" ry="16"/>'
      + '<path d="M470 280h90v68h-90z"/>'
      + '<path d="M470 280l24-20h90l-24 20M560 280l24-20v68l-24 20"/>'
      + '</g>'
      + '<text x="130" y="382" text-anchor="middle" font-size="16" fill="currentColor">sphere</text>'
      + '<text x="320" y="382" text-anchor="middle" font-size="16" fill="currentColor">cylinder</text>'
      + '<text x="515" y="382" text-anchor="middle" font-size="16" fill="currentColor">cuboid</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'shape-1',
      ask: 'How many sides does a triangle have?',
      kind: 'numeric',
      answer: '3',
      accept: ['three'],
      teach: 'Three. That is what the name means, and it is the only thing you '
        + 'need to check: count the straight edges.',
      level: 1,
    },
    {
      id: 'shape-2',
      ask: 'A shape has four sides and they are all the same length. What is it?',
      kind: 'choice',
      options: ['A rectangle', 'A square', 'A triangle', 'A circle'],
      answer: 'A square',
      teach: 'Four sides makes it a square or a rectangle. All four the same '
        + 'length makes it a square. A rectangle has two long and two short.',
      level: 2,
    },
    {
      id: 'shape-3',
      ask: 'Which one has no flat face at all?',
      kind: 'choice',
      options: ['A tin', 'A box', 'A ball'],
      answer: 'A ball',
      teach: 'A ball is a sphere and is curved everywhere, so it rolls in any '
        + 'direction. A tin has two flat ends and a box has six flat faces.',
      level: 2,
    },
  ],
})
