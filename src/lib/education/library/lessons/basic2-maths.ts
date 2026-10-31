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

  idea:
    'Every two digit number is made of tens and ones. 42 is four tens and two '
    + 'ones. The digit on the left counts the tens. The digit on the right '
    + 'counts the ones. That is the whole of it, and it is why 42 and 24 are '
    + 'not the same number.',

  mechanism:
    'A digit does not carry its own value. It gets its value from where it '
    + 'sits. The 4 in 42 means four tens, which is forty. The 4 in 24 means '
    + 'four ones, which is four. Same digit, ten times the difference, because '
    + 'each place to the left is worth ten of the place to its right. Nothing '
    + 'about the shape of the 4 tells you that. Only its seat does.',

  recap:
    'Ten ones make one ten. Count out ten bottle tops and tie them together, '
    + 'and you now have one bundle instead of ten loose ones. You have not '
    + 'changed how many you have, only how you are holding them.',

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
    'The places keep going the same way. Ten bundles tied together make one '
    + 'hundred, so 342 is three hundreds, four tens and two ones. The rule '
    + 'never changes: each place to the left is worth ten of the one beside it.',

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
  ],
})

/* ── groups of the same size ──────────────────────────────────────────────── */

teach({
  topicId: 'groups-of',
  source: 'WRITTEN',
  approved: true,

  idea:
    'When every group has the same number in it, you do not have to count them '
    + 'all one by one. Four bowls with three mangoes in each is four groups of '
    + 'three. We write that as 4 times 3, and it is twelve. Multiplying is '
    + 'counting equal groups quickly.',

  mechanism:
    'Multiplying only works when the groups are equal. That is the whole '
    + 'condition. Four bowls holding three, three, three and three can be '
    + 'counted as four threes. Four bowls holding three, two, five and three '
    + 'cannot, and have to be added one at a time. So before you multiply, the '
    + 'question to ask is not how many groups, it is whether the groups match.',

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
        'This time you know the group size and are looking for the number of '
          + 'groups.',
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
    'Because 4 groups of 3 and 3 groups of 4 give the same answer, every fact '
    + 'you learn gives you a second one free. Knowing four threes means you '
    + 'already know three fours, which is half the work gone.',

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
  ],
})

/* ── halves and quarters ──────────────────────────────────────────────────── */

teach({
  topicId: 'halves-quarters',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Half means split into two parts that are the same. A quarter means split '
    + 'into four parts that are the same. Half of a ten pesewa coin shared '
    + 'between two people is five pesewas each. Half of an orange is one of '
    + 'two equal pieces.',

  mechanism:
    'The parts have to be equal or the word is wrong. If you break an orange '
    + 'into a big piece and a small piece you have two pieces, but you do not '
    + 'have two halves. That is why cutting matters more than counting here: a '
    + 'child who counts four pieces and says quarters, without checking they '
    + 'match, has learned the word and not the idea.',

  recap:
    'Sharing fairly means everybody gets the same amount. If one person gets '
    + 'more, the sharing was not fair and the pieces are not halves.',

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
    'A half can be written as 1 out of 2 parts, and a quarter as 1 out of 4. '
    + 'Once it is written that way the same idea covers thirds, fifths and any '
    + 'other sharing, which is where fractions proper begin.',

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
  ],
})

/* ── continuing a pattern ─────────────────────────────────────────────────── */

teach({
  topicId: 'continue-pattern',
  source: 'WRITTEN',
  approved: true,

  idea:
    'A pattern is something that repeats in the same way each time. Red, blue, '
    + 'red, blue tells you the next one is red. 2, 4, 6, 8 tells you the next '
    + 'one is 10. To carry on a pattern you first find what it does each step, '
    + 'then do that again.',

  mechanism:
    'The rule lives between the items, not in them. Looking at 3, 6, 9 and '
    + 'trying to see something in the 9 itself gets you nowhere. Looking at '
    + 'the gaps, three to six, six to nine, hands you the rule at once: add '
    + 'three. That is why the first thing to do with any pattern is compare '
    + 'neighbours rather than stare at numbers.',

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
    'Some patterns change by a different amount each step, like 1, 2, 4, 8, '
    + 'where you double instead of adding. The method does not change, only '
    + 'what you find when you compare the neighbours.',

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
  ],
})

/* ── tally charts and tables ──────────────────────────────────────────────── */

teach({
  topicId: 'tally-and-table',
  source: 'WRITTEN',
  approved: true,

  idea:
    'A tally is a mark you make for each answer as you hear it, so you do not '
    + 'have to remember. One stroke for each one, and every fifth stroke laid '
    + 'across the four before it. Then you count the bundles of five and add '
    + 'the leftovers, and write that number in a table.',

  mechanism:
    'The marks are made in fives because counting a long row of single '
    + 'strokes is exactly as hard as counting the children was, which would '
    + 'leave you no better off. Grouped in fives, you count five, ten, fifteen '
    + 'and then the few left over. The tally is for collecting. The table is '
    + 'for reading. They are two jobs, which is why both exist.',

  recap:
    'Counting in fives: five, ten, fifteen, twenty. If you know that, you can '
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
    'Once the numbers are in a table they can be drawn as a bar chart, where '
    + 'the tallest bar answers the question without anybody counting anything. '
    + 'That is the next step, and the table is what it is built from.',

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
  ],
})
