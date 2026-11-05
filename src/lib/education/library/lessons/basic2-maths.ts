/**
 * Stored lessons for Basic 2 Mathematics.
 *
 * ── How these differ from Basic 1 ───────────────────────────────────────────
 *
 * A Basic 2 learner is seven or eight. `readingLevel` still calls most of them
 * early readers rather than readers, so the lines stay short and spoken, but
 * they can now hold two steps in their head at once, which is why `method`
 * here is allowed to have a step that depends on the one before it. Basic 1
 * could not.
 *
 * The counting is still in mangoes, bottle tops and pesewas, because a child
 * who has never held a hundred of anything cannot check an answer about a
 * hundred of anything.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line. Nothing here asserts an indicator code or a mark allocation,
 * which is the line `capability.ts` draws.
 */

import { teach } from '../../taught-registry'

/* ── tens and ones ────────────────────────────────────────────────────────── */

teach({
  topicId: 'tens-and-ones',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The left digit counts tens. The right digit counts ones. So 42 '
      + 'is four tens and two ones. That is why 42 is not 24.',
    method: [
      'Right digit is the ones.',
      'Left digit is the tens.',
      'Say the tens as a ten word, then the ones.',
    ],
  },

  why:
    'Your mother sends you out to buy eggs. '
    + 'She tells you the price is twenty four pesewas. '
    + 'The woman at the stall writes 42 on a scrap of paper. '
    + 'You look at the two numbers. '
    + 'Twenty four is 24. '
    + 'The paper says 42. '
    + 'Both of them are made from a 2 and a 4. '
    + 'Are they the same amount or not? '
    + 'If they are not, which one is bigger, and by how much? '
    + 'The digits cannot tell you, because the digits are the same two. '
    + 'This lesson is how you tell.',

  notation:
    'A digit is one of the ten number signs: '
    + '0, 1, 2, 3, 4, 5, 6, 7, 8 and 9. '
    + '42 is written with two digits. '
    + 'The spot a digit sits in is called its place. '
    + 'The place on the right is the ones place. '
    + 'The place beside it, on the left, is the tens place. '
    + 'So a digit has a place, and the place is part of what it means. '
    + '42 is said "forty two". '
    + 'It is not said "four two". '
    + 'Saying "four two" is the commonest mistake, '
    + 'because it hides the tens.',

  idea:
    'Every two digit number is made of tens and ones. 42 is four tens and two '
    + 'ones. The digit on the left counts the tens. The digit on the right '
    + 'counts the ones. That is the whole of it, and it is why 42 and 24 are '
    + 'not the same number.',

  mechanism:
    'Look at 42. Now look at 24. '
    + 'Both have a 4 in them. '
    + 'But the two 4s are not worth the same. '
    + 'In 42 the 4 sits in the tens place. '
    + 'So it means four bundles of ten. That is forty. '
    + 'In 24 the 4 has moved to the ones place. '
    + 'Now it means four loose ones. Just four. '
    + 'The 4 did not change at all. Its seat changed. '
    + 'And the seat is what gives it its size.',

  recap:
    'Ten ones make one ten. '
    + 'Count out ten bottle tops. Tie them together. '
    + 'Now you hold one bundle, not ten loose ones. '
    + 'You still have the same amount. '
    + 'Only the way you hold them changed.',

  method: [
    'Look at the right hand digit. That is the ones.',
    'Look at the left hand digit. That is the tens.',
    'Say the tens out loud as a ten word: 4 becomes forty, 7 becomes seventy.',
    'Then say the ones after it. Forty, then two, is forty two.',
    'To check, build it. Count out that many bundles and that many loose ones.',
  ],

  worked: [
    {
      level: 1,
      ask: 'How many tens and how many ones are in 36?',
      steps: [
        'The left digit is 3. That is three tens.',
        'The right digit is 6. That is six ones.',
      ],
      answer: 'Three tens and six ones.',
    },
    {
      level: 2,
      ask: 'Why is 42 not the same as 24?',
      steps: [
        'In 42 the 4 sits in the tens place, so it is forty.',
        'In 24 the 4 sits in the ones place, so it is only four.',
        'Forty two is four bundles and two loose. Twenty four is two bundles '
          + 'and four loose.',
      ],
      answer: 'They use the same digits but in different places, so the 4 is '
        + 'worth forty in one and four in the other.',
    },
    {
      level: 3,
      ask: 'I have 5 tens and 13 ones. What number is that?',
      steps: [
        '13 ones is more than ten, so ten of them can be tied into a bundle.',
        'That leaves 3 loose ones and gives one more ten.',
        'Now I have 6 tens and 3 ones.',
      ],
      answer: '63.',
    },
  ],

  traps: [
    {
      mistake: 'Reading 42 as "four two".',
      why: 'The 4 is not four. It sits in the tens place, so it is forty. Say '
        + 'the ten word first, then the ones.',
    },
    {
      mistake: 'Writing forty two as 402.',
      why: 'The nought in forty is already shown by the 4 sitting in the tens '
        + 'place. You do not write it again. Forty two is 42.',
    },
    {
      mistake: 'Saying 24 is bigger than 42 because it has a 2 and a 4 as well.',
      why: 'The digits being the same does not make the numbers the same. '
        + 'Count the bundles first. Four bundles beats two bundles.',
    },
  ],

  extension:
    'The places keep going the same way. '
    + 'Tie ten bundles together and you have one hundred. '
    + 'So 342 is three hundreds, four tens and two ones. '
    + 'The rule never changes. '
    + 'Each place to the left is worth ten of the one beside it.',

  figure: {
    alt: 'The number 42 shown as four bundles of ten and two single sticks, '
      + 'beside the number 24 shown as two bundles and four single sticks, so '
      + 'the two can be compared',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="20" y="34" font-size="22" font-weight="700" fill="currentColor">42</text>'
      + '<g stroke="currentColor" stroke-width="3" fill="none">'
      + '<g transform="translate(70,20)">'
      + '<path d="M0 0v70M9 0v70M18 0v70M27 0v70M36 0v70M45 0v70M54 0v70M63 0v70M72 0v70M81 0v70"/>'
      + '<rect x="-6" y="24" width="94" height="22" rx="5" stroke="#0f8a4d"/></g>'
      + '<g transform="translate(180,20)">'
      + '<path d="M0 0v70M9 0v70M18 0v70M27 0v70M36 0v70M45 0v70M54 0v70M63 0v70M72 0v70M81 0v70"/>'
      + '<rect x="-6" y="24" width="94" height="22" rx="5" stroke="#0f8a4d"/></g>'
      + '<g transform="translate(290,20)">'
      + '<path d="M0 0v70M9 0v70M18 0v70M27 0v70M36 0v70M45 0v70M54 0v70M63 0v70M72 0v70M81 0v70"/>'
      + '<rect x="-6" y="24" width="94" height="22" rx="5" stroke="#0f8a4d"/></g>'
      + '<g transform="translate(400,20)">'
      + '<path d="M0 0v70M9 0v70M18 0v70M27 0v70M36 0v70M45 0v70M54 0v70M63 0v70M72 0v70M81 0v70"/>'
      + '<rect x="-6" y="24" width="94" height="22" rx="5" stroke="#0f8a4d"/></g>'
      + '<g transform="translate(530,20)"><path d="M0 0v70M22 0v70"/></g>'
      + '</g>'
      + '<text x="250" y="116" text-anchor="middle" font-size="15" fill="#0f8a4d">4 tens = 40</text>'
      + '<text x="552" y="116" text-anchor="middle" font-size="15" fill="currentColor">2 ones</text>'
      + '<path d="M20 146h600" stroke="currentColor" stroke-width="1" opacity="0.3"/>'
      + '<text x="20" y="200" font-size="22" font-weight="700" fill="currentColor">24</text>'
      + '<g stroke="currentColor" stroke-width="3" fill="none">'
      + '<g transform="translate(70,186)">'
      + '<path d="M0 0v70M9 0v70M18 0v70M27 0v70M36 0v70M45 0v70M54 0v70M63 0v70M72 0v70M81 0v70"/>'
      + '<rect x="-6" y="24" width="94" height="22" rx="5" stroke="#0f8a4d"/></g>'
      + '<g transform="translate(180,186)">'
      + '<path d="M0 0v70M9 0v70M18 0v70M27 0v70M36 0v70M45 0v70M54 0v70M63 0v70M72 0v70M81 0v70"/>'
      + '<rect x="-6" y="24" width="94" height="22" rx="5" stroke="#0f8a4d"/></g>'
      + '<g transform="translate(320,186)"><path d="M0 0v70M22 0v70M44 0v70M66 0v70"/></g>'
      + '</g>'
      + '<text x="140" y="282" text-anchor="middle" font-size="15" fill="#0f8a4d">2 tens = 20</text>'
      + '<text x="353" y="282" text-anchor="middle" font-size="15" fill="currentColor">4 ones</text>'
      + '<text x="320" y="352" text-anchor="middle" font-size="19" fill="currentColor">The same two digits.</text>'
      + '<text x="320" y="384" text-anchor="middle" font-size="19" font-weight="700" fill="#0f8a4d">Not the same number.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 't1-1',
      ask: 'How many tens are in 58?',
      kind: 'numeric',
      answer: '5',
      accept: ['five'],
      teach: 'The left hand digit counts the tens, and that is the 5. The 8 on '
        + 'the right counts the loose ones.',
      level: 1,
    },
    {
      id: 't1-2',
      ask: 'Which number is three tens and seven ones?',
      kind: 'choice',
      options: ['73', '37', '307'],
      answer: '37',
      teach: 'Three tens is thirty, so the 3 goes in the tens place on the '
        + 'left and the 7 goes beside it. 73 would be seven tens and three ones.',
      level: 2,
    },
    {
      id: 't1-3',
      ask: 'I have 2 tens and 15 ones. What number do I have?',
      kind: 'numeric',
      answer: '35',
      accept: ['thirty five', 'thirty-five'],
      teach: 'Ten of the 15 ones can be tied into a bundle, which gives you a '
        + 'third ten and leaves 5 loose. Three tens and five ones is 35.',
      level: 3,
    },
    {
      id: 't1-4',
      ask: 'How many ones are in 73?',
      kind: 'numeric',
      answer: '3',
      accept: ['three'],
      teach: 'The ones are the digit on the right. In 73 that is the 3. The 7 '
        + 'on the left counts tens, not ones.',
      level: 1,
    },
    {
      id: 't1-5',
      ask: 'In 64, what is the 6 worth?',
      kind: 'choice',
      options: ['6', '64', '60'],
      answer: '60',
      teach: 'The 6 sits in the tens place, on the left. So it means six '
        + 'bundles of ten. That is sixty, not six.',
      level: 2,
    },
    {
      id: 't1-6',
      ask: 'Which is more, 42 or 24?',
      kind: 'choice',
      options: ['24', '42', 'They are the same'],
      answer: '42',
      teach: 'They use the same digits, but look at the tens. 42 has four tens. '
        + '24 has only two tens. Four tens is more.',
      level: 2,
    },
    {
      id: 't1-7',
      ask: 'How do you say 42 out loud?',
      kind: 'choice',
      options: ['Four two', 'Forty two', 'Twenty four'],
      answer: 'Forty two',
      teach: 'Saying "four two" hides the tens. Say the tens as a ten word '
        + 'first. 4 tens is forty. Then the ones. Forty two.',
      level: 2,
    },
    {
      id: 't1-8',
      ask: 'Kofi writes forty two. Which one is right?',
      kind: 'choice',
      options: ['402', '24', '42'],
      answer: '42',
      teach: 'Forty is four tens, so a 4 goes in the tens place. Two is the '
        + 'ones, so a 2 goes beside it. No 0 is needed in between. That makes 42.',
      level: 3,
    },
    {
      id: 't1-9',
      ask: 'Ama has 3 tens and 12 ones. What number does she have?',
      kind: 'numeric',
      answer: '42',
      accept: ['forty two', 'forty-two'],
      teach: 'Tie ten of the 12 ones into a bundle. Now there are 4 tens and '
        + '2 ones left. Four tens and two ones is 42, not 312.',
      level: 3,
    },
  ],
})

/* ── groups of the same size ──────────────────────────────────────────────── */

teach({
  topicId: 'groups-of',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Equal groups can be counted together. Four bowls of three is '
      + 'four threes, which is twelve. The groups must all match.',
    method: [
      'Count the groups.',
      'Count how many in one group. Check the others match.',
      'Say it: so many groups of so many.',
    ],
  },

  why:
    'Your mother sends you to count the eggs. '
    + 'They are in six trays and every tray has ten eggs. '
    + 'You start counting them one at a time. '
    + 'One, two, three, and somebody calls you, '
    + 'and now you have to start again. '
    + 'There must be a faster way than touching every egg. '
    + 'There is, and it only works because every tray holds the same number. '
    + 'This lesson is that faster way.',

  notation:
    'Four groups of three is written 4 x 3. '
    + 'It is said "four times three". '
    + 'The x sign means "groups of". '
    + 'The answer, twelve, is written after an equals sign: 4 x 3 = 12. '
    + 'Do not read the x as the letter x. '
    + 'In a sum it always means times. '
    + 'The commonest mistake is to write 4 x 3 '
    + 'when there are three bowls with four in each, '
    + 'which is 3 x 4. '
    + 'The number of groups comes first.',

  idea:
    'When every group has the same number in it, you do not have to count them '
    + 'all one by one. Four bowls with three mangoes in each is four groups of '
    + 'three. We write that as 4 times 3, and it is twelve. Multiplying is '
    + 'counting equal groups quickly.',

  mechanism:
    'Multiplying only works when the groups match. '
    + 'That is the one rule. '
    + 'Put three mangoes in each of four bowls. '
    + 'Three, three, three, three. '
    + 'Now you can say four threes. '
    + 'But put three in one bowl, two in the next, then five, then three. '
    + 'Now you cannot. '
    + 'You must add them one by one. '
    + 'So do not ask how many bowls first. '
    + 'Ask if the bowls match.',

  recap:
    'Adding the same number again and again is what this replaces. 3 and 3 and '
    + '3 and 3 is twelve. Four threes is the same twelve, written shorter.',

  method: [
    'Count how many groups there are.',
    'Count how many are in one group. Check another group has the same.',
    'Say it out loud: so many groups of so many.',
    'If you do not know the answer, add the group size again and again.',
    'Draw it if you are stuck. Rows of dots show the groups at once.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Three bowls. Two mangoes in each. How many mangoes?',
      steps: [
        'Three groups of two.',
        'Two, four, six.',
      ],
      answer: '6 mangoes.',
    },
    {
      level: 2,
      ask: 'You have 5 bags with 4 oranges in each. How many oranges?',
      steps: [
        'Five groups of four.',
        'Count in fours: four, eight, twelve, sixteen, twenty.',
      ],
      answer: '20 oranges.',
    },
    {
      level: 3,
      ask: 'You have 12 bottle tops and want to share them into groups of 3. '
        + 'How many groups?',
      steps: [
        'This time the group size is given and the number of groups '
          + 'is what is wanted.',
        'Count in threes until you reach twelve: three, six, nine, twelve.',
        'You said four numbers, so there are four groups.',
      ],
      answer: '4 groups.',
    },
  ],

  traps: [
    {
      mistake: 'Multiplying when the groups are not equal.',
      why: 'If one bowl has three and another has five, there is no "groups '
        + 'of" to speak of. Add them instead.',
    },
    {
      mistake: 'Counting the groups instead of the things in them.',
      why: 'Four bowls of three is twelve mangoes, not four. The answer is '
        + 'always in the thing being grouped.',
    },
    {
      mistake: 'Thinking 4 groups of 3 is a different amount from 3 groups of 4.',
      why: 'Both are twelve. Draw four rows of three dots, then turn the paper '
        + 'sideways, and you are looking at three rows of four.',
    },
  ],

  extension:
    '4 groups of 3 gives the same answer as 3 groups of 4. '
    + 'So every fact you learn gives you a second one free. '
    + 'Know four threes and three fours comes to you free. '
    + 'That is half the work gone.',

  figure: {
    alt: 'Four rows of three dots, counted as four groups of three making '
      + 'twelve, then the same dots turned to show three rows of four',
    svg: '<svg viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="30" y="32" font-size="17" fill="currentColor">4 groups of 3</text>'
      + '<g fill="currentColor">'
      + '<circle cx="60" cy="70" r="13"/><circle cx="110" cy="70" r="13"/><circle cx="160" cy="70" r="13"/>'
      + '<circle cx="60" cy="120" r="13"/><circle cx="110" cy="120" r="13"/><circle cx="160" cy="120" r="13"/>'
      + '<circle cx="60" cy="170" r="13"/><circle cx="110" cy="170" r="13"/><circle cx="160" cy="170" r="13"/>'
      + '<circle cx="60" cy="220" r="13"/><circle cx="110" cy="220" r="13"/><circle cx="160" cy="220" r="13"/>'
      + '</g>'
      + '<g fill="none" stroke="#0f8a4d" stroke-width="2.5">'
      + '<rect x="36" y="48" width="148" height="44" rx="10"/>'
      + '<rect x="36" y="98" width="148" height="44" rx="10"/>'
      + '<rect x="36" y="148" width="148" height="44" rx="10"/>'
      + '<rect x="36" y="198" width="148" height="44" rx="10"/>'
      + '</g>'
      + '<text x="110" y="276" text-anchor="middle" font-size="16" fill="#0f8a4d">3 + 3 + 3 + 3</text>'
      + '<text x="110" y="312" text-anchor="middle" font-size="26" font-weight="700" fill="currentColor">12</text>'
      + '<text x="400" y="32" font-size="17" fill="currentColor">the same dots, turned</text>'
      + '<g fill="currentColor">'
      + '<circle cx="370" cy="80" r="13"/><circle cx="420" cy="80" r="13"/><circle cx="470" cy="80" r="13"/><circle cx="520" cy="80" r="13"/>'
      + '<circle cx="370" cy="130" r="13"/><circle cx="420" cy="130" r="13"/><circle cx="470" cy="130" r="13"/><circle cx="520" cy="130" r="13"/>'
      + '<circle cx="370" cy="180" r="13"/><circle cx="420" cy="180" r="13"/><circle cx="470" cy="180" r="13"/><circle cx="520" cy="180" r="13"/>'
      + '</g>'
      + '<g fill="none" stroke="#0f8a4d" stroke-width="2.5">'
      + '<rect x="346" y="58" width="198" height="44" rx="10"/>'
      + '<rect x="346" y="108" width="198" height="44" rx="10"/>'
      + '<rect x="346" y="158" width="198" height="44" rx="10"/>'
      + '</g>'
      + '<text x="445" y="276" text-anchor="middle" font-size="16" fill="#0f8a4d">3 groups of 4</text>'
      + '<text x="445" y="312" text-anchor="middle" font-size="26" font-weight="700" fill="currentColor">12</text>'
      + '<text x="320" y="356" text-anchor="middle" font-size="16" fill="currentColor">Nothing was added or taken away.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'go-1',
      ask: 'Two plates with 5 buns on each. How many buns?',
      kind: 'numeric',
      answer: '10',
      accept: ['ten'],
      teach: 'Two groups of five. Count in fives: five, ten. The answer is in '
        + 'buns, not in plates.',
      level: 1,
    },
    {
      id: 'go-2',
      ask: 'Which one can you NOT work out by multiplying?',
      kind: 'choice',
      options: [
        '4 bowls with 3 mangoes in each',
        '3 bowls with 2, 5 and 4 mangoes',
        '5 bags with 2 oranges in each',
      ],
      answer: '3 bowls with 2, 5 and 4 mangoes',
      teach: 'Multiplying needs every group to be the same size. Those three '
        + 'bowls are all different, so they have to be added: 2 and 5 and 4.',
      level: 2,
    },
    {
      id: 'go-3',
      ask: 'You share 15 bottle tops into groups of 5. How many groups?',
      kind: 'numeric',
      answer: '3',
      accept: ['three'],
      teach: 'Count in fives until you reach fifteen: five, ten, fifteen. That '
        + 'is three counts, so three groups.',
      level: 3,
    },
    {
      id: 'go-4',
      ask: 'Three bags. Two oranges in each bag. How many oranges?',
      kind: 'numeric',
      answer: '6',
      accept: ['six', '6 oranges'],
      teach: 'Three groups of two. Add the group size again and again: two, '
        + 'four, six. Counting only the bags gives 3, which is the wrong thing.',
      level: 1,
    },
    {
      id: 'go-5',
      ask: 'How do you write four groups of three?',
      kind: 'choice',
      options: ['3 x 4', '4 + 3', '4 x 3'],
      answer: '4 x 3',
      teach: 'The number of groups comes first. Four groups, so 4 first. Then '
        + 'x for "groups of". Then 3. A plus sign would add them, not group them.',
      level: 2,
    },
    {
      id: 'go-6',
      ask: 'Three bowls. Four mangoes in each bowl. Which sum shows this?',
      kind: 'choice',
      options: ['3 x 4', '4 x 3', '3 + 4'],
      answer: '3 x 4',
      teach: 'Count the groups first. There are 3 bowls, so 3 comes first. '
        + 'Each bowl holds 4. So it is 3 x 4.',
      level: 2,
    },
    {
      id: 'go-7',
      ask: 'Which adding sum is the same as 3 x 5?',
      kind: 'choice',
      options: ['3 + 5', '5 + 5 + 5', '3 + 3 + 3'],
      answer: '5 + 5 + 5',
      teach: '3 x 5 means three groups of five. So write the five three '
        + 'times. 3 + 5 only adds the two numbers once.',
      level: 2,
    },
    {
      id: 'go-8',
      ask: 'A drawing shows 2 rows of dots. Each row has 6 dots. Which sum '
        + 'does it show?',
      kind: 'choice',
      options: ['2 + 6', '2 x 6', '6 x 6'],
      answer: '2 x 6',
      teach: 'Each row is a group. There are 2 rows, so 2 groups. Each has 6. '
        + 'That is 2 x 6, which is 12.',
      level: 3,
    },
    {
      id: 'go-9',
      ask: 'Is 4 groups of 3 the same amount as 3 groups of 4?',
      kind: 'choice',
      options: ['Yes, both are 12', 'No, 4 groups of 3 is more', 'No, 3 groups of 4 is more'],
      answer: 'Yes, both are 12',
      teach: 'Count them. Three, six, nine, twelve. Four, eight, twelve. Both '
        + 'make 12. The groups look different but the total is the same.',
      level: 3,
    },
  ],
})

/* ── halves and quarters ──────────────────────────────────────────────────── */

teach({
  topicId: 'halves-quarters',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Half means two equal parts. A quarter means four equal parts. '
      + 'The parts must be the same size.',
    method: [
      'Count how many you are sharing between.',
      'Share one at a time until nothing is left.',
      'Check that all the parts match.',
    ],
  },

  why:
    'You and your sister have one orange between you. '
    + 'You cut it in two. '
    + 'One piece is big and one piece is small. '
    + 'You give her the small one. '
    + 'She says that is not half. '
    + 'You say you cut it into two, so each piece is a half. '
    + 'Who is right? '
    + 'You both agree it is in two pieces. '
    + 'So what is she asking for that you did not give her? '
    + 'This lesson is that word, and what it really asks for.',

  notation:
    'Half is written as the word half. '
    + 'You will also see it written as a small 1 above a small 2, '
    + 'with a line between them. '
    + 'The 2 underneath says the orange was cut into two. '
    + 'A quarter is said "KWOR-ter". '
    + 'It is written as a 1 above a 4, '
    + 'because the thing was cut into four. '
    + 'The number underneath is the one doing the work. '
    + 'Two halves make one whole thing. '
    + 'Four quarters make one whole thing too. '
    + 'The commonest mistake is to call any two pieces halves. '
    + 'Halves have to match.',

  idea:
    'Half means split into two parts that are the same. A quarter means split '
    + 'into four parts that are the same. Half of a ten pesewa coin shared '
    + 'between two people is five pesewas each. Half of an orange is one of '
    + 'two equal pieces.',

  mechanism:
    'The parts must be equal. If they are not, the word is wrong. '
    + 'Break an orange into a big piece and a small piece. '
    + 'You have two pieces. '
    + 'But you do not have two halves. '
    + 'So counting the pieces is not enough. '
    + 'You must check that they match.',

  recap:
    'Sharing fairly means everyone gets the same. '
    + 'Did one person get more? '
    + 'Then it was not fair. And they are not halves.',

  method: [
    'Count how many people or parts you are sharing between. Two, or four.',
    'Share one to each, round and round, until there is nothing left.',
    'Count what one person ended up with. That is the half, or the quarter.',
    'Check: do all the parts look the same size?',
    'For a shape, fold it. If the two sides lie exactly on each other, you '
      + 'have halved it.',
  ],

  worked: [
    {
      level: 1,
      ask: 'You and your friend share 8 mangoes equally. How many each?',
      steps: [
        'Two people, so you are finding half.',
        'One for you, one for her, and keep going.',
        'You each end up with four.',
      ],
      answer: '4 mangoes each. Half of 8 is 4.',
    },
    {
      level: 2,
      ask: 'Four children share 12 bottle tops equally. How many each?',
      steps: [
        'Four people, so you are finding a quarter.',
        'Share one at a time round the four of them.',
        'Each round uses four tops, and 12 tops is three rounds.',
      ],
      answer: '3 each. A quarter of 12 is 3.',
    },
    {
      level: 3,
      ask: 'Half of a cake is left. You cut that piece in two for two '
        + 'children. What part of the whole cake does each child get?',
      steps: [
        'You started with half the cake.',
        'Cutting a half in two gives two pieces from one half.',
        'Four of those pieces would make the whole cake.',
      ],
      answer: 'A quarter each.',
    },
  ],

  traps: [
    {
      mistake: 'Calling any two pieces halves.',
      why: 'Two pieces are only halves if they are the same size. Hold them '
        + 'side by side and look.',
    },
    {
      mistake: 'Thinking a quarter is bigger than a half because four is '
        + 'bigger than two.',
      why: 'The more people you share with, the less each one gets. Sharing '
        + 'between four gives smaller pieces than sharing between two.',
    },
    {
      mistake: 'Halving the number of pieces instead of the amount.',
      why: 'Half of 8 mangoes is 4 mangoes. If you cut each mango in two you '
        + 'have 16 pieces, but you still have all 8 mangoes.',
    },
  ],

  extension:
    'You can write a half as 1 out of 2 parts. '
    + 'You can write a quarter as 1 out of 4. '
    + 'Write it that way and the same idea covers thirds. '
    + 'And fifths. And any other sharing. '
    + 'That is where fractions begin.',

  figure: {
    alt: 'A circle split into two equal halves, a circle split into four equal '
      + 'quarters, and a circle split into two pieces of different sizes '
      + 'marked as not halves',
    svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<g fill="none" stroke="currentColor" stroke-width="3">'
      + '<circle cx="120" cy="120" r="76"/><path d="M120 44v152"/>'
      + '<circle cx="320" cy="120" r="76"/><path d="M320 44v152M244 120h152"/>'
      + '<circle cx="520" cy="120" r="76"/><path d="M478 48 C 496 120, 496 120, 478 192"/>'
      + '</g>'
      + '<path d="M44 120 A 76 76 0 0 1 120 44 L120 196 A 76 76 0 0 1 44 120" '
      + 'fill="#0f8a4d" opacity="0.18"/>'
      + '<path d="M244 120 A 76 76 0 0 1 320 44 L320 120 Z" fill="#0f8a4d" opacity="0.18"/>'
      + '<text x="120" y="232" text-anchor="middle" font-size="19" font-weight="700" fill="currentColor">halves</text>'
      + '<text x="120" y="258" text-anchor="middle" font-size="15" fill="#0f8a4d">2 equal parts</text>'
      + '<text x="320" y="232" text-anchor="middle" font-size="19" font-weight="700" fill="currentColor">quarters</text>'
      + '<text x="320" y="258" text-anchor="middle" font-size="15" fill="#0f8a4d">4 equal parts</text>'
      + '<text x="520" y="232" text-anchor="middle" font-size="19" font-weight="700" fill="currentColor">not halves</text>'
      + '<text x="520" y="258" text-anchor="middle" font-size="15" fill="currentColor">2 parts, but not equal</text>'
      + '<text x="320" y="312" text-anchor="middle" font-size="17" fill="currentColor">'
      + 'Count the parts, then check they match.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'hq-1',
      ask: 'What is half of 6?',
      kind: 'numeric',
      answer: '3',
      accept: ['three'],
      teach: 'Share 6 between two, one at a time. Each one gets three, and '
        + 'three and three is six, which checks it.',
      level: 1,
    },
    {
      id: 'hq-2',
      ask: 'What is a quarter of 8?',
      kind: 'numeric',
      answer: '2',
      accept: ['two'],
      teach: 'A quarter means sharing between four. Give one at a time to four '
        + 'children and 8 runs out after two rounds, so two each.',
      level: 2,
    },
    {
      id: 'hq-3',
      ask: 'Which is more, half of a cake or a quarter of the same cake?',
      kind: 'choice',
      options: ['Half', 'A quarter', 'They are the same'],
      answer: 'Half',
      teach: 'The more people share it, the smaller each piece. A half is one '
        + 'of two pieces, a quarter is one of four, so the half is bigger.',
      level: 2,
    },
    {
      id: 'hq-4',
      ask: 'Ama and Kofi share 10 pesewas equally. How many pesewas each?',
      kind: 'numeric',
      answer: '5',
      accept: ['five', '5 pesewas'],
      teach: 'Half means two equal parts. Share one to each, round and round. '
        + 'Each ends up with 5. Half of 10 is 5.',
      level: 1,
    },
    {
      id: 'hq-5',
      ask: 'An orange breaks into a big piece and a small piece. Are they halves?',
      kind: 'choice',
      options: ['Yes, there are two pieces', 'No, the pieces are not equal', 'Yes, it is one orange'],
      answer: 'No, the pieces are not equal',
      teach: 'Two pieces is not enough. Halves must be the same size. A big '
        + 'piece and a small piece are not halves.',
      level: 1,
    },
    {
      id: 'hq-6',
      ask: 'How many quarters make one whole orange?',
      kind: 'numeric',
      answer: '4',
      accept: ['four'],
      teach: 'A quarter is one of four equal parts. Put all four parts back '
        + 'together and you have the whole thing again.',
      level: 2,
    },
    {
      id: 'hq-7',
      ask: 'Four children share 16 bottle tops equally. How many each?',
      kind: 'numeric',
      answer: '4',
      accept: ['four', '4 bottle tops'],
      teach: 'Share one to each of the four, round and round, until none are '
        + 'left. Each child gets 4. A quarter of 16 is 4.',
      level: 2,
    },
    {
      id: 'hq-8',
      ask: 'You fold a paper square. The two sides lie exactly on each other. '
        + 'What have you made?',
      kind: 'choice',
      options: ['Two quarters', 'Two halves', 'Four halves'],
      answer: 'Two halves',
      teach: 'One fold makes two parts. They lie exactly on each other, so they '
        + 'are equal. Two equal parts are halves.',
      level: 2,
    },
    {
      id: 'hq-9',
      ask: 'What is a quarter of 20?',
      kind: 'numeric',
      answer: '5',
      accept: ['five'],
      teach: 'A quarter means share between four. Twenty shared into four '
        + 'equal parts gives 5 in each. Halving gives 10, which is a half, not a '
        + 'quarter.',
      level: 3,
    },
  ],
})

/* ── continuing a pattern ─────────────────────────────────────────────────── */

teach({
  topicId: 'continue-pattern',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A pattern repeats the same change each step. Look at the gap '
      + 'between two items to find the rule.',
    method: [
      'Compare the first two items. What changed?',
      'Check the next gap is the same.',
      'Do that change once more.',
    ],
  },

  why:
    'Your teacher is drawing beads on the board for a necklace. '
    + 'Red, blue, red, blue, red, blue. '
    + 'Then she stops and goes to answer the door. '
    + 'She left the next bead for you to draw. '
    + 'Which colour do you pick? '
    + 'Nobody told you the rule. '
    + 'The rule is hiding in the beads she already drew. '
    + 'This lesson is how to find it.',

  idea:
    'A pattern is something that repeats in the same way each time. Red, blue, '
    + 'red, blue tells you the next one is red. 2, 4, 6, 8 tells you the next '
    + 'one is 10. To carry on a pattern you first find what it does each step, '
    + 'then do that again.',

  mechanism:
    'The rule lives between the items. Not inside them. '
    + 'Take 3, 6, 9. '
    + 'Stare at the 9 on its own and you learn nothing. '
    + 'Now look at the gaps. Three to six. Six to nine. '
    + 'There is the rule. Add three. '
    + 'So with any pattern, do one thing first. '
    + 'Compare the neighbours.',

  recap:
    'Counting on means adding the same amount again. Counting on in twos from '
    + 'two gives two, four, six, eight. You are adding two every time.',

  method: [
    'Look at the first two items and say what changed.',
    'Check the same thing changed between the next two.',
    'If it did, that is the rule. Say it in words, out loud.',
    'Do the rule once more to get the next item.',
    'Say the rule back and check it works all the way from the start.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What comes next? Circle, square, circle, square, ...',
      steps: [
        'Circle then square, then circle then square.',
        'The rule is: it takes turns.',
        'The last one was a square, so the next is a circle.',
      ],
      answer: 'A circle.',
    },
    {
      level: 2,
      ask: 'What comes next? 5, 10, 15, 20, ...',
      steps: [
        'From 5 to 10 is five more.',
        'From 10 to 15 is five more as well, so the rule is add five.',
        '20 and five more.',
      ],
      answer: '25. The rule is add five.',
    },
    {
      level: 3,
      ask: 'What comes next? 20, 18, 16, 14, ...',
      steps: [
        'From 20 to 18 the number went down, not up.',
        'It went down by two, and down by two again from 18 to 16.',
        'So the rule is take away two. 14 take away 2.',
      ],
      answer: '12. The rule is take away two.',
    },
  ],

  traps: [
    {
      mistake: 'Guessing the next item from only one gap.',
      why: 'One gap can be a coincidence. Check a second gap matches before '
        + 'you trust the rule.',
    },
    {
      mistake: 'Saying the rule as "it goes up" without saying by how much.',
      why: '"It goes up" does not tell you the next number. "Add five" does. A '
        + 'rule has to be exact enough to use.',
    },
    {
      mistake: 'Always expecting the numbers to grow.',
      why: 'A pattern can go down, or take turns. Look at the first two items '
        + 'before deciding which way it goes.',
    },
  ],

  extension:
    'Some patterns change by a new amount each step. '
    + 'Look at 1, 2, 4, 8. '
    + 'You double it. You do not add. '
    + 'The method is still the same. '
    + 'You still compare the neighbours. '
    + 'You just find something different when you do.',

  figure: {
    alt: 'The pattern 3, 6, 9, 12 with arrows between the numbers each marked '
      + 'plus three, and a blank box at the end for the next number',
    svg: '<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<g font-size="34" font-weight="700" fill="currentColor" text-anchor="middle">'
      + '<text x="70" y="110">3</text><text x="200" y="110">6</text>'
      + '<text x="330" y="110">9</text><text x="460" y="110">12</text>'
      + '</g>'
      + '<rect x="560" y="72" width="56" height="52" rx="8" fill="none" '
      + 'stroke="#0f8a4d" stroke-width="3" stroke-dasharray="6 5"/>'
      + '<text x="588" y="110" text-anchor="middle" font-size="30" fill="#0f8a4d">?</text>'
      + '<g stroke="#0f8a4d" stroke-width="2.5" fill="none">'
      + '<path d="M96 76 C 120 48, 150 48, 176 76"/><path d="M176 76 l 2 -13 l 10 8 z" fill="#0f8a4d"/>'
      + '<path d="M226 76 C 250 48, 280 48, 306 76"/><path d="M306 76 l 2 -13 l 10 8 z" fill="#0f8a4d"/>'
      + '<path d="M356 76 C 380 48, 410 48, 436 76"/><path d="M436 76 l 2 -13 l 10 8 z" fill="#0f8a4d"/>'
      + '<path d="M486 76 C 512 48, 544 48, 572 76"/><path d="M572 76 l 2 -13 l 10 8 z" fill="#0f8a4d"/>'
      + '</g>'
      + '<g font-size="15" fill="#0f8a4d" text-anchor="middle">'
      + '<text x="136" y="38">add 3</text><text x="266" y="38">add 3</text>'
      + '<text x="396" y="38">add 3</text><text x="528" y="38">add 3</text>'
      + '</g>'
      + '<text x="320" y="186" text-anchor="middle" font-size="18" fill="currentColor">'
      + 'The rule is in the gaps, not in the numbers.</text>'
      + '<text x="320" y="238" text-anchor="middle" font-size="17" fill="currentColor">'
      + 'Check two gaps before you trust it.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'cp-1',
      ask: 'What comes next? 2, 4, 6, 8, ...',
      kind: 'numeric',
      answer: '10',
      accept: ['ten'],
      teach: 'Each gap is two, so the rule is add two. 8 and 2 more is 10.',
      level: 1,
    },
    {
      id: 'cp-2',
      ask: 'What is the rule for 4, 8, 12, 16?',
      kind: 'choice',
      options: ['Add 2', 'Add 4', 'Double it'],
      answer: 'Add 4',
      teach: 'Compare neighbours: 4 to 8 is four more, and 8 to 12 is four '
        + 'more. Doubling would have given 4, 8, 16, 32.',
      level: 2,
    },
    {
      id: 'cp-3',
      ask: 'What comes next? 30, 27, 24, ...',
      kind: 'numeric',
      answer: '21',
      accept: ['twenty one', 'twenty-one'],
      teach: 'This one goes down. Each gap is three less, so take three from '
        + '24.',
      level: 3,
    },
    {
      id: 'cp-4',
      ask: 'What comes next? Red, blue, red, blue, ...',
      kind: 'choice',
      options: ['Blue', 'Red', 'Green'],
      answer: 'Red',
      teach: 'Each step swaps colour. After blue comes red every time. So red '
        + 'comes next.',
      level: 1,
    },
    {
      id: 'cp-5',
      ask: 'What comes next? 10, 20, 30, 40, ...',
      kind: 'numeric',
      answer: '50',
      accept: ['fifty'],
      teach: 'Look at the gaps. 10 to 20, 20 to 30. Each gap is add ten. Add '
        + 'ten to 40 and you get 50.',
      level: 2,
    },
    {
      id: 'cp-6',
      ask: 'What is the rule for 20, 18, 16, 14?',
      kind: 'choice',
      options: ['Add 2', 'Take away 2', 'Take away 4'],
      answer: 'Take away 2',
      teach: 'The numbers get smaller, so it is not adding. 20 to 18 is two '
        + 'less. 18 to 16 is two less. The rule is take away 2.',
      level: 2,
    },
    {
      id: 'cp-7',
      ask: 'Which number is missing? 7, 9, __, 13',
      kind: 'numeric',
      answer: '11',
      accept: ['eleven'],
      teach: 'Compare neighbours you can see. 7 to 9 is add two. So add two to '
        + '9 to fill the gap. That is 11, and 11 add two is 13, so it checks.',
      level: 2,
    },
    {
      id: 'cp-8',
      ask: 'Yaw says the rule for 3, 6, 9 is "it goes up". What is missing '
        + 'from his rule?',
      kind: 'choice',
      options: ['The first number', 'How much it goes up by', 'Nothing is missing'],
      answer: 'How much it goes up by',
      teach: '"It goes up" fits many patterns. A rule must say by how much. '
        + 'Here each gap is three, so the rule is add 3.',
      level: 3,
    },
    {
      id: 'cp-9',
      ask: 'What comes next? Triangle, circle, circle, triangle, circle, circle, ...',
      kind: 'choice',
      options: ['Circle', 'Square', 'Triangle'],
      answer: 'Triangle',
      teach: 'Find the part that repeats: triangle, circle, circle. It has just '
        + 'ended, so it starts again with a triangle.',
      level: 3,
    },
  ],
})

/* ── tally charts and tables ──────────────────────────────────────────────── */

teach({
  topicId: 'tally-and-table',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A tally is one stroke per answer. Every fifth stroke lies across '
      + 'the other four. Count the fives, then write the number down.',
    method: [
      'Write the choices down the page.',
      'One stroke per person. Cross the fifth.',
      'Count in fives, then add the leftovers.',
    ],
  },

  why:
    'Your teacher wants to know which fruit the class likes best. '
    + 'She asks every child, one at a time. '
    + 'Mango. Pawpaw. Mango. Orange. Mango. Pawpaw. '
    + 'There are forty children and she is only on number six. '
    + 'Now hold all forty answers in your head. '
    + 'Tell her how many said mango. '
    + 'You cannot. '
    + 'Nobody can. '
    + 'So how do you count a thing while it is still happening? '
    + 'This lesson is how.',

  notation:
    'A tally mark is one straight stroke. '
    + 'One stroke means one answer. '
    + 'The fifth stroke is not drawn standing up like the others. '
    + 'It is laid across the four before it, like a gate. '
    + 'That gate of five is read as five, not as one. '
    + 'So three gates and two loose strokes reads as seventeen. '
    + 'The commonest mistake is to draw the fifth stroke standing up. '
    + 'Then there are no gates, '
    + 'and the whole row has to be counted one stroke at a time.',

  idea:
    'A tally is a mark you make for each answer. '
    + 'You make it as you hear it. Then you need not remember. '
    + 'One stroke for each one. '
    + 'Every fifth stroke lies across the four before it. '
    + 'At the end, count the fives. Then add the leftovers. '
    + 'Write that number in a table.',

  mechanism:
    'Why group the marks in fives? '
    + 'Think about a long row of single strokes. '
    + 'Counting those is just as hard as counting the children was. '
    + 'You would be no better off. '
    + 'Group them in fives and it is easy. '
    + 'Five, ten, fifteen, then the few left over. '
    + 'So the tally is for collecting. '
    + 'The table is for reading. '
    + 'Two jobs. That is why you need both.',

  recap:
    'Counting in fives: five, ten, fifteen, twenty. With that, you can '
    + 'read any tally without counting a single stroke on its own.',

  method: [
    'Write down the choices first, one under the other.',
    'Ask each person once, and make one stroke beside their answer.',
    'On the fifth stroke, lay it across the four before it.',
    'When everybody has answered, count each row in fives and add the rest.',
    'Write the number beside each row. That is your table.',
    'Check: add up all the numbers. It should equal how many people you asked.',
  ],

  worked: [
    {
      level: 1,
      ask: 'A row of tally marks reads as one bundle of five and two more. How '
        + 'many is that?',
      steps: [
        'The bundle is five.',
        'Then count on the two: six, seven.',
      ],
      answer: '7.',
    },
    {
      level: 2,
      ask: 'You ask your class their favourite fruit. Mango gets two bundles '
        + 'and three more, orange gets one bundle and one more. How many '
        + 'chose each?',
      steps: [
        'Mango: two bundles is ten, then three more.',
        'Orange: one bundle is five, then one more.',
      ],
      answer: 'Mango 13, orange 6.',
    },
    {
      level: 3,
      ask: 'You asked 20 children. Your table says mango 13 and orange 6. Is '
        + 'something wrong?',
      steps: [
        'Add the numbers in the table: 13 and 6 is 19.',
        'You asked 20 children, so one answer is missing.',
        'Either somebody was not marked, or a stroke was left out.',
      ],
      answer: 'Yes. The table only accounts for 19 of the 20, so one is '
        + 'missing.',
    },
  ],

  traps: [
    {
      mistake: 'Making the fifth stroke upright like the others.',
      why: 'Then there is nothing to count in fives and you are back to '
        + 'counting one by one. Lay the fifth one across.',
    },
    {
      mistake: 'Asking the same person twice.',
      why: 'The total will be bigger than your class and the chart will be '
        + 'wrong. Go along the rows once, in order.',
    },
    {
      mistake: 'Counting the strokes but not writing the number down.',
      why: 'The tally is hard to read at a glance. The number in the table is '
        + 'what anybody else can use.',
    },
  ],

  extension:
    'Once your numbers are in a table, you can draw them. '
    + 'A bar chart is one way. '
    + 'Then the tallest bar answers the question at a glance. '
    + 'Nobody has to count anything. '
    + 'That is the next step, and it is built from your table.',

  figure: {
    alt: 'A tally chart for favourite fruit with mango, orange and banana '
      + 'rows, every fifth stroke laid across the four before it, and the '
      + 'counted number written beside each row',
    svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="40" y="38" font-size="18" font-weight="700" fill="currentColor">Favourite fruit</text>'
      + '<g stroke="currentColor" stroke-width="1" opacity="0.35">'
      + '<path d="M40 54h540M40 124h540M40 194h540M40 264h540"/>'
      + '<path d="M40 54v210M170 54v210M470 54v210M580 54v210"/>'
      + '</g>'
      + '<g font-size="17" fill="currentColor">'
      + '<text x="56" y="96">Mango</text><text x="56" y="166">Orange</text><text x="56" y="236">Banana</text>'
      + '</g>'
      /* mango: two bundles of five and three */
      + '<g stroke="currentColor" stroke-width="3" fill="none">'
      + '<g transform="translate(190,70)">'
      + '<path d="M0 0v40M14 0v40M28 0v40M42 0v40"/><path d="M-6 40 L50 0" stroke="#0f8a4d"/></g>'
      + '<g transform="translate(270,70)">'
      + '<path d="M0 0v40M14 0v40M28 0v40M42 0v40"/><path d="M-6 40 L50 0" stroke="#0f8a4d"/></g>'
      + '<g transform="translate(350,70)"><path d="M0 0v40M14 0v40M28 0v40"/></g>'
      /* orange: one bundle and one */
      + '<g transform="translate(190,140)">'
      + '<path d="M0 0v40M14 0v40M28 0v40M42 0v40"/><path d="M-6 40 L50 0" stroke="#0f8a4d"/></g>'
      + '<g transform="translate(270,140)"><path d="M0 0v40"/></g>'
      /* banana: four */
      + '<g transform="translate(190,210)"><path d="M0 0v40M14 0v40M28 0v40M42 0v40"/></g>'
      + '</g>'
      + '<g font-size="24" font-weight="700" fill="currentColor" text-anchor="middle">'
      + '<text x="525" y="98">13</text><text x="525" y="168">6</text><text x="525" y="238">4</text>'
      + '</g>'
      + '<text x="310" y="300" text-anchor="middle" font-size="16" fill="#0f8a4d">'
      + 'Every fifth stroke lies across the four before it.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'tt-1',
      ask: 'A tally row has one bundle of five and three single strokes. What '
        + 'number goes in the table?',
      kind: 'numeric',
      answer: '8',
      accept: ['eight'],
      teach: 'Count the bundle as five, then count on the singles: six, seven, '
        + 'eight.',
      level: 1,
    },
    {
      id: 'tt-2',
      ask: 'Why is every fifth stroke drawn across the other four?',
      kind: 'choice',
      options: [
        'To make it look neat',
        'So you can count in fives instead of one by one',
        'Because five is the biggest number allowed',
      ],
      answer: 'So you can count in fives instead of one by one',
      teach: 'A long row of single strokes is as hard to count as the children '
        + 'were. Grouping in fives is what makes the tally quicker than '
        + 'remembering.',
      level: 2,
    },
    {
      id: 'tt-3',
      ask: 'You asked 15 children. Your table shows 9 and 5. How many answers '
        + 'are missing?',
      kind: 'numeric',
      answer: '1',
      accept: ['one'],
      teach: 'Add the table: 9 and 5 is 14. You asked 15, so one answer was '
        + 'never marked. Adding the table up is how you catch this.',
      level: 3,
    },
    {
      id: 'tt-4',
      ask: 'One gate of tally marks has four strokes and one across them. '
        + 'How many does it show?',
      kind: 'numeric',
      answer: '5',
      accept: ['five'],
      teach: 'The stroke across is the fifth one. So the whole gate is read as '
        + 'five, not as one.',
      level: 1,
    },
    {
      id: 'tt-5',
      ask: 'A tally row has two gates of five and one single stroke. What '
        + 'number is that?',
      kind: 'numeric',
      answer: '11',
      accept: ['eleven'],
      teach: 'Count the gates in fives: five, ten. Then add the single stroke. '
        + 'Ten and one is 11.',
      level: 2,
    },
    {
      id: 'tt-6',
      ask: 'You hear the fifth answer for mango. How do you draw that stroke?',
      kind: 'choice',
      options: ['Standing up like the others', 'Across the four before it', 'Under the row'],
      answer: 'Across the four before it',
      teach: 'If the fifth stroke stands up, there are no gates. Then you must '
        + 'count every stroke one by one. Lay it across the four to make a gate.',
      level: 2,
    },
    {
      id: 'tt-7',
      ask: 'Why do you write a table after you make the tally?',
      kind: 'choice',
      options: [
        'So the numbers are easy to read',
        'So the tally gets longer',
        'So you can ask the same child again',
      ],
      answer: 'So the numbers are easy to read',
      teach: 'The tally is for collecting answers as you hear them. The table '
        + 'is for reading. Two jobs, so you need both.',
      level: 2,
    },
    {
      id: 'tt-8',
      ask: 'A tally row has three gates of five and two loose strokes. What '
        + 'number goes in the table?',
      kind: 'numeric',
      answer: '17',
      accept: ['seventeen'],
      teach: 'Count the gates in fives: five, ten, fifteen. Then add the two '
        + 'loose strokes. Fifteen and two is 17.',
      level: 3,
    },
    {
      id: 'tt-9',
      ask: 'Abena asked Kwame twice and made two strokes for him. What goes wrong?',
      kind: 'choice',
      options: [
        'Nothing goes wrong',
        'The tally loses a stroke',
        'One child is counted twice',
      ],
      answer: 'One child is counted twice',
      teach: 'Each person should give one stroke. Asking twice adds an extra '
        + 'answer. Then the total is more than the number of children asked.',
      level: 3,
    },
  ],
})
