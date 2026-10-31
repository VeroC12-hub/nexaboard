/**
 * Stored lessons for Basic 3 Mathematics.
 *
 * ── What changes from Basic 2 ───────────────────────────────────────────────
 *
 * A Basic 3 learner is eight or nine and `readingLevel` has most of them as
 * readers rather than early readers, so these can be read by the child rather
 * than only to them. The sentences are still short, but a step may now depend
 * on two things at once, which is what carrying and borrowing require.
 *
 * ── Why the drawings are built differently here ─────────────────────────────
 *
 * The Basic 1 and Basic 2 figures use a 640 wide canvas with 15px labels. On a
 * 360px phone that column is about 306px, so those labels land at about 7px,
 * which no child can read. These use a 480 canvas with labels at 20px and
 * numbers at 30px or more, which comes out near 13 to 19px on the same phone.
 * Same picture, legible. The older figures still need the same treatment.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── numbers to 1000 ──────────────────────────────────────────────────────── */

teach({
  topicId: 'numbers-to-1000',
  source: 'WRITTEN',
  approved: true,

  idea:
    'After ninety nine the tens run out, so we start counting hundreds. Ten '
    + 'tens make one hundred. A three digit number has hundreds, tens and ones: '
    + '342 is three hundreds, four tens and two ones.',

  mechanism:
    'Nothing new is invented here. '
    + 'The old rule just keeps going. '
    + 'Each place to the left is worth ten of the place beside it. '
    + 'Ones, then tens, then hundreds. '
    + 'So you never learn a new rule for bigger numbers. '
    + 'And the same trick keeps working for comparing them. '
    + 'The leftmost place decides. '
    + 'One hundred beats any number of tens and ones below it.',

  recap:
    'In a two digit number the left digit counts tens and the right counts '
    + 'ones. 42 is four tens and two ones. Everything here is that, with one '
    + 'more place added on the left.',

  method: [
    'Count the digits. Three digits means hundreds, tens and ones.',
    'Name each place from the right: ones, tens, hundreds.',
    'Read it as hundreds first, then the tens and ones together.',
    '342 is "three hundred and forty two".',
    'To compare two numbers, look at the hundreds first.',
    'Only if the hundreds match do you look at the tens, then the ones.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What is 5 hundreds, 0 tens and 7 ones?',
      steps: [
        'Five hundreds is 500.',
        'No tens, so a nought goes in the tens place.',
        'Seven ones at the end.',
      ],
      answer: '507. The nought holds the tens place open.',
    },
    {
      level: 2,
      ask: 'Which is bigger, 480 or 408?',
      steps: [
        'Both have 4 hundreds, so the hundreds do not decide it.',
        'Now the tens. 480 has 8 tens, 408 has none.',
      ],
      answer: '480 is bigger.',
    },
    {
      level: 3,
      ask: 'Put these in order, smallest first: 99, 601, 160, 106.',
      steps: [
        '99 has no hundreds at all, so it is smallest.',
        'Of the rest, 106 and 160 have 1 hundred and 601 has 6.',
        'Between 106 and 160, compare the tens: 0 against 6.',
      ],
      answer: '99, 106, 160, 601.',
    },
  ],

  traps: [
    {
      mistake: 'Writing three hundred and five as 3005.',
      why: 'You are writing what you hear instead of filling the places. '
        + 'Three hundreds, no tens, five ones, so 305.',
    },
    {
      mistake: 'Thinking 99 is bigger than 106 because it starts with a 9.',
      why: 'Count the digits first. 106 has a hundreds digit and 99 has none, '
        + 'so 106 wins before you compare anything else.',
    },
    {
      mistake: 'Treating the nought as nothing and leaving it out.',
      why: 'The nought is doing a job: it holds a place open so the other '
        + 'digits stay where they belong. Remove it from 507 and you have 57.',
    },
  ],

  extension:
    'Ten hundreds make one thousand. '
    + 'The places keep going the same way after that. '
    + 'Thousands. Ten thousands. On and on. '
    + 'The rule never changes. '
    + 'So once you can read this, you can read a number of any size.',

  figure: {
    alt: 'The number 342 split into three hundred squares, four tens rods and '
      + 'two single units, with each place labelled and its value written '
      + 'underneath',
    svg: '<svg viewBox="0 0 480 330" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* hundreds: three 10x10 squares */
      + '<g fill="none" stroke="currentColor" stroke-width="2">'
      + '<rect x="20" y="30" width="46" height="46"/><rect x="70" y="30" width="46" height="46"/>'
      + '<rect x="45" y="82" width="46" height="46"/>'
      + '</g>'
      + '<g stroke="currentColor" stroke-width="0.8" opacity="0.45">'
      + '<path d="M29 30v46M38 30v46M47 30v46M56 30v46M20 39h46M20 48h46M20 57h46M20 66h46"/>'
      + '<path d="M79 30v46M88 30v46M97 30v46M106 30v46M70 39h46M70 48h46M70 57h46M70 66h46"/>'
      + '<path d="M54 82v46M63 82v46M72 82v46M81 82v46M45 91h46M45 100h46M45 109h46M45 118h46"/>'
      + '</g>'
      /* tens: four rods */
      + '<g fill="none" stroke="currentColor" stroke-width="2">'
      + '<rect x="190" y="30" width="16" height="98"/><rect x="212" y="30" width="16" height="98"/>'
      + '<rect x="234" y="30" width="16" height="98"/><rect x="256" y="30" width="16" height="98"/>'
      + '</g>'
      + '<g stroke="currentColor" stroke-width="0.8" opacity="0.45">'
      + '<path d="M190 40h82M190 50h82M190 60h82M190 70h82M190 80h82M190 90h82M190 100h82M190 110h82M190 120h82"/>'
      + '</g>'
      /* ones */
      + '<g fill="none" stroke="currentColor" stroke-width="2">'
      + '<rect x="350" y="30" width="16" height="16"/><rect x="350" y="52" width="16" height="16"/>'
      + '</g>'
      + '<g font-size="20" fill="#0f8a4d" text-anchor="middle">'
      + '<text x="68" y="158">3 hundreds</text>'
      + '<text x="231" y="158">4 tens</text>'
      + '<text x="358" y="158">2 ones</text>'
      + '</g>'
      + '<g font-size="22" fill="currentColor" text-anchor="middle">'
      + '<text x="68" y="186">300</text><text x="231" y="186">40</text><text x="358" y="186">2</text>'
      + '</g>'
      + '<text x="240" y="258" text-anchor="middle" font-size="54" font-weight="700" '
      + 'fill="currentColor">342</text>'
      + '<text x="240" y="300" text-anchor="middle" font-size="20" fill="#0f8a4d">'
      + 'Each place is ten of the one beside it.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'n1000-1',
      ask: 'How many hundreds are in 736?',
      kind: 'numeric',
      answer: '7',
      accept: ['seven'],
      teach: 'The leftmost digit of a three digit number counts the hundreds, '
        + 'and that is the 7.',
      level: 1,
    },
    {
      id: 'n1000-2',
      ask: 'Write four hundreds, no tens and six ones as a number.',
      kind: 'numeric',
      answer: '406',
      accept: ['four hundred and six'],
      teach: 'The nought holds the tens place open so the 6 stays in the ones. '
        + 'Leave it out and you have written 46 instead.',
      level: 2,
    },
    {
      id: 'n1000-3',
      ask: 'Which is bigger, 309 or 390?',
      kind: 'choice',
      options: ['309', '390'],
      answer: '390',
      teach: 'The hundreds are equal, so look at the tens: 9 tens beats none. '
        + 'The 9 in 309 is only nine ones.',
      level: 2,
    },
  ],
})

/* ── adding with carrying ─────────────────────────────────────────────────── */

teach({
  topicId: 'add-with-carrying',
  source: 'WRITTEN',
  approved: true,

  idea:
    'When the ones column adds up to ten or more, you cannot write a two digit '
    + 'answer in one column. So you exchange ten ones for one ten and move it '
    + 'across to the tens column. That small digit you write above the tens is '
    + 'the ten you carried.',

  mechanism:
    'Carrying is not a rule about digits. It is a swap. '
    + 'Ten ones and one ten are the same amount. '
    + 'So you trade one for the other. '
    + 'You still have just as much as before. '
    + 'All that changed is which column holds it. '
    + 'That is why the answer stays right. '
    + 'Know this and you can check your own work.',

  recap:
    'Each column has a name: ones on the right, then tens, then hundreds. A '
    + 'column can only hold a single digit, nought to nine.',

  method: [
    'Write the numbers one under the other, ones under ones.',
    'Add the ones column first.',
    'If it comes to less than ten, write it and move on.',
    'If it comes to ten or more, write the ones digit and carry the ten.',
    'Write the carried 1 above the tens column so you cannot forget it.',
    'Add the tens, including the one you carried. Then the hundreds.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What is 23 + 14?',
      steps: [
        'Ones: 3 and 4 is 7. Under ten, so nothing to carry.',
        'Tens: 2 and 1 is 3.',
      ],
      answer: '37.',
    },
    {
      level: 2,
      ask: 'What is 28 + 15?',
      steps: [
        'Ones: 8 and 5 is 13.',
        '13 is ten and three. Write the 3, carry the ten.',
        'Tens: 2 and 1 and the carried 1 is 4.',
      ],
      answer: '43.',
    },
    {
      level: 3,
      ask: 'What is 176 + 58?',
      steps: [
        'Ones: 6 and 8 is 14. Write 4, carry one ten.',
        'Tens: 7 and 5 and the carried 1 is 13 tens.',
        '13 tens is one hundred and 3 tens. Write 3, carry one hundred.',
        'Hundreds: 1 and the carried 1 is 2.',
      ],
      answer: '234.',
    },
  ],

  traps: [
    {
      mistake: 'Writing the whole 13 under the ones column.',
      why: 'A column holds one digit. The ten has to move to the column that '
        + 'counts tens, which is what carrying is.',
    },
    {
      mistake: 'Forgetting to add the carried digit.',
      why: 'It is the commonest mistake in the whole topic. Write it above the '
        + 'column before you add, not after, so it is part of the sum.',
    },
    {
      mistake: 'Lining the numbers up on the left.',
      why: 'Columns are matched from the right. 176 and 58 must sit with the 6 '
        + 'above the 8, or you are adding tens to hundreds.',
    },
  ],

  extension:
    'The same swap works in every column. '
    + 'Hundreds into thousands too. '
    + 'And borrowing is this swap run backwards. '
    + 'See carrying as trading ten for one. '
    + 'Then borrowing is trading one back for ten.',

  figure: {
    alt: 'The sum 28 plus 15 set out in columns, with the ones making thirteen, '
      + 'the three written below and the carried ten shown moving into the '
      + 'tens column',
    svg: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-monospace, SFMono-Regular, monospace">'
      + '<g font-family="ui-sans-serif, system-ui, sans-serif" font-size="20" '
      + 'fill="#0f8a4d" text-anchor="middle">'
      + '<text x="214" y="30">tens</text><text x="282" y="30">ones</text>'
      + '</g>'
      + '<path d="M180 40v230M248 40v230" stroke="currentColor" stroke-width="1" opacity="0.25"/>'
      + '<text x="214" y="86" text-anchor="middle" font-size="26" font-weight="700" '
      + 'fill="#0f8a4d">1</text>'
      + '<g font-size="40" fill="currentColor" text-anchor="middle">'
      + '<text x="214" y="140">2</text><text x="282" y="140">8</text>'
      + '<text x="214" y="192">1</text><text x="282" y="192">5</text>'
      + '</g>'
      + '<text x="150" y="192" font-size="40" fill="currentColor">+</text>'
      + '<path d="M130 208h190" stroke="currentColor" stroke-width="3"/>'
      + '<g font-size="40" font-weight="700" fill="currentColor" text-anchor="middle">'
      + '<text x="214" y="256">4</text><text x="282" y="256">3</text>'
      + '</g>'
      + '<g font-family="ui-sans-serif, system-ui, sans-serif" font-size="20" fill="#0f8a4d">'
      + '<text x="330" y="140">8 + 5 = 13</text>'
      + '<text x="330" y="168">write the 3</text>'
      + '<text x="330" y="196">carry the ten</text>'
      + '</g>'
      + '<path d="M300 150 C 270 120, 240 110, 222 98" stroke="#0f8a4d" '
      + 'stroke-width="2.5" fill="none"/>'
      + '<path d="M222 98 l 13 4 l -5 10 z" fill="#0f8a4d"/>'
      + '<text x="240" y="302" text-anchor="middle" font-size="20" fill="currentColor">'
      + 'Ten ones traded for one ten. Same amount.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'carry-1',
      ask: 'What is 34 + 25?',
      kind: 'numeric',
      answer: '59',
      accept: ['fifty nine', 'fifty-nine'],
      teach: 'Ones: 4 and 5 is 9, under ten so nothing carries. Tens: 3 and 2 '
        + 'is 5.',
      level: 1,
    },
    {
      id: 'carry-2',
      ask: 'In 47 + 36, what do you write in the ones column of the answer?',
      kind: 'numeric',
      answer: '3',
      accept: ['three'],
      teach: '7 and 6 is 13. The column holds one digit, so the 3 stays and '
        + 'the ten is carried across to the tens.',
      level: 2,
    },
    {
      id: 'carry-3',
      ask: 'What is 158 + 67?',
      kind: 'numeric',
      answer: '225',
      accept: ['two hundred and twenty five'],
      teach: 'Ones: 8 and 7 is 15, write 5 carry one ten. Tens: 5 and 6 and 1 '
        + 'is 12 tens, write 2 carry one hundred. Hundreds: 1 and 1 is 2.',
      level: 3,
    },
  ],
})

/* ── subtracting with borrowing ───────────────────────────────────────────── */

teach({
  topicId: 'subtract-with-borrowing',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Sometimes the digit on top is smaller than the one below it, so you cannot '
    + 'take it away as it stands. You go next door to the tens, take one ten, '
    + 'and change it into ten ones. Now the top number has enough.',

  mechanism:
    'The word borrowing is a poor name. Nothing is given back. '
    + 'What really happens is a swap. '
    + 'One ten turns into ten ones. '
    + 'Same amount, just in smaller pieces. '
    + 'It is like changing one cedi for ten ten pesewa coins. '
    + 'The top line never changes. '
    + 'That is why the answer is still right. '
    + 'And it is why the tens digit drops by one. '
    + 'You spent that ten.',

  recap:
    'Carrying trades ten ones for one ten when a column overflows. This is the '
    + 'same trade in the other direction, done when a column runs short.',

  method: [
    'Write the numbers one under the other, ones under ones.',
    'Start at the ones column.',
    'Ask: is the top digit big enough?',
    'If yes, subtract and move on.',
    'If no, cross out the tens digit, make it one less, and put that ten in '
      + 'front of the ones digit.',
    'Now subtract the ones, then the tens.',
    'Check by adding your answer to the number you took away.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What is 48 take away 23?',
      steps: [
        'Ones: 8 take away 3 is 5. Big enough, no exchange.',
        'Tens: 4 take away 2 is 2.',
      ],
      answer: '25.',
    },
    {
      level: 2,
      ask: 'What is 52 take away 27?',
      steps: [
        'Ones: 2 is smaller than 7, so exchange.',
        'Take one ten from the 5, leaving 4. The 2 becomes 12.',
        'Ones: 12 take away 7 is 5.',
        'Tens: 4 take away 2 is 2.',
      ],
      answer: '25. Check: 25 and 27 is 52.',
    },
    {
      level: 3,
      ask: 'What is 304 take away 128?',
      steps: [
        'Ones: 4 is smaller than 8, so exchange. But the tens digit is 0.',
        'Go to the hundreds. Take one hundred, so 3 becomes 2 and the tens '
          + 'become 10.',
        'Now take one of those tens for the ones: tens become 9, ones become 14.',
        'Ones: 14 take away 8 is 6. Tens: 9 take away 2 is 7. Hundreds: 2 take '
          + 'away 1 is 1.',
      ],
      answer: '176. Check: 176 and 128 is 304.',
    },
  ],

  traps: [
    {
      mistake: 'Taking the smaller digit from the bigger one in each column '
        + 'regardless of which is on top.',
      why: 'For 52 take away 27, writing 7 take away 2 in the ones gives 35, '
        + 'which is wrong. The order matters. Exchange instead.',
    },
    {
      mistake: 'Exchanging but forgetting to reduce the tens digit.',
      why: 'You spent that ten. If the tens digit stays the same you have '
        + 'quietly added ten to the top number.',
    },
    {
      mistake: 'Getting stuck when the next column is a nought.',
      why: 'A nought has nothing to lend, so go one further along and exchange '
        + 'twice. The nought becomes a 9 on the way through.',
    },
  ],

  extension:
    'Checking by adding is not a school trick. '
    + 'It is how traders check change all day. '
    + 'Add your answer to what you took away. '
    + 'Do you get back what you started with? '
    + 'If not, the sum is wrong. '
    + 'And you found it yourself. Nobody had to tell you.',

  figure: {
    alt: 'The subtraction 52 take away 27 in columns, showing the 5 tens '
      + 'crossed out and replaced by 4, and the 2 ones becoming 12',
    svg: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<g font-size="20" fill="#0f8a4d" text-anchor="middle">'
      + '<text x="196" y="30">tens</text><text x="272" y="30">ones</text>'
      + '</g>'
      + '<path d="M160 40v230M236 40v230" stroke="currentColor" stroke-width="1" opacity="0.25"/>'
      /* crossed out 5 -> 4, and 2 -> 12 */
      + '<text x="196" y="140" text-anchor="middle" font-size="40" fill="currentColor" '
      + 'opacity="0.35">5</text>'
      + '<path d="M180 150 L212 114" stroke="#b4342a" stroke-width="3"/>'
      + '<text x="168" y="100" text-anchor="middle" font-size="26" font-weight="700" '
      + 'fill="#0f8a4d">4</text>'
      + '<text x="272" y="140" text-anchor="middle" font-size="40" fill="currentColor" '
      + 'opacity="0.35">2</text>'
      + '<path d="M258 150 L288 114" stroke="#b4342a" stroke-width="3"/>'
      + '<text x="286" y="100" text-anchor="middle" font-size="26" font-weight="700" '
      + 'fill="#0f8a4d">12</text>'
      + '<g font-size="40" fill="currentColor" text-anchor="middle">'
      + '<text x="196" y="192">2</text><text x="272" y="192">7</text>'
      + '</g>'
      + '<text x="130" y="192" font-size="40" fill="currentColor">&#8722;</text>'
      + '<path d="M112 208h186" stroke="currentColor" stroke-width="3"/>'
      + '<g font-size="40" font-weight="700" fill="currentColor" text-anchor="middle">'
      + '<text x="196" y="256">2</text><text x="272" y="256">5</text>'
      + '</g>'
      + '<g font-size="20" fill="#0f8a4d">'
      + '<text x="320" y="110">one ten moves</text>'
      + '<text x="320" y="138">across and</text>'
      + '<text x="320" y="166">becomes ten ones</text>'
      + '</g>'
      + '<text x="240" y="302" text-anchor="middle" font-size="20" fill="currentColor">'
      + 'The top line is still 52. Only the pieces changed.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'borrow-1',
      ask: 'What is 76 take away 34?',
      kind: 'numeric',
      answer: '42',
      accept: ['forty two', 'forty-two'],
      teach: 'Ones: 6 take away 4 is 2, no exchange needed. Tens: 7 take away '
        + '3 is 4.',
      level: 1,
    },
    {
      id: 'borrow-2',
      ask: 'In 63 take away 28, what does the 3 become after you exchange?',
      kind: 'numeric',
      answer: '13',
      accept: ['thirteen'],
      teach: 'One ten comes across and becomes ten ones, so 3 becomes 13. The '
        + '6 tens drop to 5, because that ten was spent.',
      level: 2,
    },
    {
      id: 'borrow-3',
      ask: 'What is 200 take away 145?',
      kind: 'numeric',
      answer: '55',
      accept: ['fifty five', 'fifty-five'],
      teach: 'The tens are a nought, so exchange twice: the hundreds drop to 1, '
        + 'the tens become 9 and the ones become 10. Then 10 take 5 is 5, 9 '
        + 'take 4 is 5, 1 take 1 is 0. Check: 55 and 145 is 200.',
      level: 3,
    },
  ],
})

/* ── multiplication facts ─────────────────────────────────────────────────── */

teach({
  topicId: 'times-tables',
  source: 'WRITTEN',
  approved: true,

  idea:
    'A times table is a set of answers you know without working them out. Six '
    + 'sevens is forty two, and you say it the way you say your own age. '
    + 'Knowing them is not about being clever, it is about not having to count.',

  mechanism:
    'This is worth the work, and not just to be fast. '
    + 'Bigger sums use these facts as single steps. '
    + 'Long multiplying. Dividing. Fractions. Areas. '
    + 'Say you must count up to find six sevens. '
    + 'Every time you do, you lose your place in the big sum. '
    + 'So the hard part is never really the hard part. '
    + 'It is the small sums underneath. '
    + 'Know the facts and your mind is free for the real question.',

  recap:
    'Four groups of three means three counted four times, and it is twelve. '
    + 'A times table is that written out for one group size at a time.',

  method: [
    'Learn one table at a time, not all of them at once.',
    'Say it out loud, in order, until the order carries you.',
    'Then practise out of order, because that is how questions come.',
    'Use what you know to reach what you do not. For six eights, do five '
      + 'eights which is forty, then add one more eight.',
    'Remember that turning it round gives the same answer, so each fact you '
      + 'learn is really two.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What is 5 times 4?',
      steps: [
        'Count in fives four times: five, ten, fifteen, twenty.',
      ],
      answer: '20.',
    },
    {
      level: 2,
      ask: 'You know 5 times 8 is 40. What is 6 times 8?',
      steps: [
        'Six eights is one more eight than five eights.',
        '40 and 8.',
      ],
      answer: '48. Build from the fact you already have.',
    },
    {
      level: 3,
      ask: 'Why does knowing 7 times 9 also tell you 9 times 7?',
      steps: [
        'Draw 7 rows of 9 dots.',
        'Turn the paper a quarter turn. The same dots are now 9 rows of 7.',
        'Nothing was added or removed.',
      ],
      answer: 'Both are 63, because turning the arrangement does not change '
        + 'how many dots there are.',
    },
  ],

  traps: [
    {
      mistake: 'Counting up from the start every time.',
      why: 'It gives the right answer and costs you the problem you were '
        + 'actually solving. These are meant to be recalled, not worked out.',
    },
    {
      mistake: 'Learning the table only in order.',
      why: 'Then you can only find eight sixes by reciting from one six. '
        + 'Practise them jumbled.',
    },
    {
      mistake: 'Thinking the ten table and the nine table are unrelated.',
      why: 'Nine of something is ten of it less one of it. Nine sevens is '
        + 'seventy take away seven, which is sixty three.',
    },
  ],

  extension:
    'Look down the answers of any table. '
    + 'You will find a pattern. '
    + 'The five table ends in five or nought. '
    + 'In the nine table the two digits add up to nine. '
    + 'These are not tricks. '
    + 'They come from how the places work. '
    + 'And they make the facts easier to hold on to.',

  questions: [
    {
      id: 'tt3-1',
      ask: 'What is 3 times 6?',
      kind: 'numeric',
      answer: '18',
      accept: ['eighteen'],
      teach: 'Three sixes. Count in sixes: six, twelve, eighteen. It is the '
        + 'same as six threes.',
      level: 1,
    },
    {
      id: 'tt3-2',
      ask: 'You know 10 times 7 is 70. What is 9 times 7?',
      kind: 'numeric',
      answer: '63',
      accept: ['sixty three', 'sixty-three'],
      teach: 'Nine sevens is one seven less than ten sevens. 70 take away 7 is '
        + '63. Building from a fact you have beats counting up.',
      level: 2,
    },
    {
      id: 'tt3-3',
      ask: 'If 8 times 4 is 32, what is 4 times 8?',
      kind: 'numeric',
      answer: '32',
      accept: ['thirty two', 'thirty-two'],
      teach: 'The same, because turning the rows into columns does not change '
        + 'how many there are. Every fact you learn gives you a second free.',
      level: 2,
    },
  ],
})

/* ── what a fraction is ───────────────────────────────────────────────────── */

teach({
  topicId: 'what-a-fraction-is',
  source: 'WRITTEN',
  approved: true,

  idea:
    'A fraction counts parts of a whole. '
    + 'Take three quarters. It is a 3 above a 4. '
    + 'The bottom number says how many equal parts the whole was cut into. '
    + 'The top number says how many of them you have.',

  mechanism:
    'People misread the bottom number. '
    + 'It is the key to everything else. '
    + 'It is not an amount. It is a size. '
    + 'It tells you how big each piece is. '
    + 'It does that by saying how many fit in the whole. '
    + 'So a bigger bottom number means a smaller piece. '
    + 'One eighth is less than one quarter. '
    + 'Cut a thing into eight and the pieces are small. '
    + 'Cut it into four and they are bigger. '
    + 'Almost everything confusing about fractions comes back to this.',

  recap:
    'Half means two equal parts and a quarter means four equal parts. The parts '
    + 'must be equal or the word is wrong.',

  method: [
    'Look at the bottom number. That is how many equal parts the whole has.',
    'Check the parts really are equal.',
    'Look at the top number. That is how many you are talking about.',
    'Say it out loud: three of the four parts.',
    'To compare two fractions with the same bottom number, the bigger top wins.',
    'To compare two with the same top number, the smaller bottom wins, because '
      + 'fewer parts means bigger pieces.',
  ],

  worked: [
    {
      level: 1,
      ask: 'A cake is cut into 4 equal pieces and you take 1. What fraction do '
        + 'you have?',
      steps: [
        'Four equal parts, so 4 is the bottom number.',
        'You have one of them, so 1 is on top.',
      ],
      answer: 'One quarter.',
    },
    {
      level: 2,
      ask: 'Which is bigger, one third or one fifth?',
      steps: [
        'Both are one piece, so compare the piece sizes.',
        'A third means the whole was cut into 3. A fifth means into 5.',
        'Cutting into more pieces makes each piece smaller.',
      ],
      answer: 'One third is bigger.',
    },
    {
      level: 3,
      ask: 'A tank is cut into 8 equal marks and the water reaches the 6th. '
        + 'Write that as a fraction, and say it another way.',
      steps: [
        'Eight equal parts, so 8 is the bottom. Six are filled, so 6 on top.',
        'Six of the eight is the same as three of the four, because each pair '
          + 'of eighths makes a quarter.',
      ],
      answer: 'Six eighths, which is the same amount as three quarters.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a bigger bottom number means a bigger fraction.',
      why: 'It means more pieces, so each one is smaller. One tenth is tiny '
        + 'next to one half.',
    },
    {
      mistake: 'Calling unequal pieces fractions.',
      why: 'Cutting a cake into four pieces where one is huge does not give '
        + 'quarters. The bottom number only means something if the parts match.',
    },
    {
      mistake: 'Reading the fraction as two separate numbers.',
      why: 'Three quarters is one amount, not a 3 and a 4. The two digits work '
        + 'together: how many pieces, out of how many in the whole.',
    },
  ],

  extension:
    'Two fractions can look different and be the same amount. '
    + 'Six eighths and three quarters are the same. '
    + 'The pieces were just cut a different way. '
    + 'We call those equivalent fractions. '
    + 'That is what you will do with them next.',

  figure: {
    alt: 'Three bars of the same length, one cut into halves with one part '
      + 'shaded, one into quarters with one shaded and one into eighths with '
      + 'one shaded, showing the pieces getting smaller',
    svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<g fill="none" stroke="currentColor" stroke-width="2.5">'
      + '<rect x="30" y="40" width="320" height="48"/>'
      + '<rect x="30" y="118" width="320" height="48"/>'
      + '<rect x="30" y="196" width="320" height="48"/>'
      + '</g>'
      + '<rect x="30" y="40" width="160" height="48" fill="#0f8a4d" opacity="0.25"/>'
      + '<rect x="30" y="118" width="80" height="48" fill="#0f8a4d" opacity="0.25"/>'
      + '<rect x="30" y="196" width="40" height="48" fill="#0f8a4d" opacity="0.25"/>'
      + '<g stroke="currentColor" stroke-width="2">'
      + '<path d="M190 40v48"/>'
      + '<path d="M110 118v48M190 118v48M270 118v48"/>'
      + '<path d="M70 196v48M110 196v48M150 196v48M190 196v48M230 196v48M270 196v48M310 196v48"/>'
      + '</g>'
      + '<g font-size="22" fill="currentColor">'
      + '<text x="364" y="72">one half</text>'
      + '<text x="364" y="150">one quarter</text>'
      + '<text x="364" y="228">one eighth</text>'
      + '</g>'
      + '<text x="240" y="284" text-anchor="middle" font-size="21" fill="#0f8a4d">'
      + 'More pieces means each piece is smaller.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'frac-1',
      ask: 'In three quarters, what does the bottom number 4 tell you?',
      kind: 'choice',
      options: [
        'How many pieces you have',
        'How many equal parts the whole was cut into',
        'How big the cake is',
      ],
      answer: 'How many equal parts the whole was cut into',
      teach: 'The bottom counts the parts in the whole, which is what sets the '
        + 'size of each piece. The top counts how many of them you have.',
      level: 1,
    },
    {
      id: 'frac-2',
      ask: 'Which is bigger, one quarter or one eighth?',
      kind: 'choice',
      options: ['One quarter', 'One eighth', 'They are equal'],
      answer: 'One quarter',
      teach: 'Cutting the same whole into eight gives smaller pieces than '
        + 'cutting it into four, so a quarter is the bigger piece.',
      level: 2,
    },
    {
      id: 'frac-3',
      ask: 'A pizza is cut into 6 equal slices and 5 are eaten. What fraction '
        + 'is left? Give the top number.',
      kind: 'numeric',
      answer: '1',
      accept: ['one', '1/6', 'one sixth'],
      teach: 'Six equal parts means 6 on the bottom. Five eaten leaves one, so '
        + '1 on top: one sixth.',
      level: 2,
    },
  ],
})

/* ── lines of symmetry ────────────────────────────────────────────────────── */

teach({
  topicId: 'symmetry',
  source: 'WRITTEN',
  approved: true,

  idea:
    'A shape has a line of symmetry if you can fold it along that line and the '
    + 'two halves land exactly on each other. A square has four such lines. A '
    + 'circle has more than you could count. Many shapes have none at all.',

  mechanism:
    'The fold is the test. And it is stricter than it looks. '
    + 'Two halves of the same size are not enough. '
    + 'Every point must land on its partner. '
    + 'Take the diagonal of a rectangle. '
    + 'It makes two triangles of equal size. '
    + 'But fold along it and the corners do not meet. '
    + 'So it fails. '
    + 'Cannot fold the paper? Then picture a mirror on the line. '
    + 'What you see in the mirror must match the hidden half.',

  recap:
    'You name shapes by counting sides and corners. '
    + 'This is different. '
    + 'This is about how a shape is balanced.',

  method: [
    'Draw or imagine a line across the shape.',
    'Fold along it, really or in your head.',
    'Ask: does every edge land on an edge, and every corner on a corner?',
    'If yes, that is a line of symmetry. If any part sticks out, it is not.',
    'Try the obvious lines first: down the middle, across the middle, then the '
      + 'diagonals.',
    'To complete a symmetrical drawing, measure how far each point is from the '
      + 'line and put its partner the same distance on the other side.',
  ],

  worked: [
    {
      level: 1,
      ask: 'How many lines of symmetry does a square have?',
      steps: [
        'Down the middle: the halves match.',
        'Across the middle: they match.',
        'Both diagonals: they match too.',
      ],
      answer: 'Four.',
    },
    {
      level: 2,
      ask: 'A rectangle that is not a square. Is its diagonal a line of '
        + 'symmetry?',
      steps: [
        'The diagonal makes two triangles of the same size.',
        'But fold along it and the long side lands on the short side.',
        'The corners do not meet.',
      ],
      answer: 'No. A rectangle has two lines of symmetry, through the middles '
        + 'of its sides, and neither diagonal counts.',
    },
    {
      level: 3,
      ask: 'Which letters of the alphabet, written as capitals, have a line of '
        + 'symmetry down the middle?',
      steps: [
        'Try folding each one down a vertical line.',
        'A, H, I, M, O, T, U, V, W, X and Y match.',
        'B, C, D, E and K match only when folded across, not down.',
      ],
      answer: 'A, H, I, M, O, T, U, V, W, X and Y, among others.',
    },
  ],

  traps: [
    {
      mistake: 'Accepting any line that cuts the shape into two equal areas.',
      why: 'Equal size is not the test. The halves must land on each other '
        + 'exactly, which is a stronger demand.',
    },
    {
      mistake: 'Assuming the diagonal of every four sided shape works.',
      why: 'It works for a square and fails for a rectangle. Fold it and look '
        + 'at the corners.',
    },
    {
      mistake: 'Stopping after finding one line.',
      why: 'Shapes often have several. Try vertical, horizontal and both '
        + 'diagonals before you answer.',
    },
  ],

  extension:
    'Start looking and you will find symmetry everywhere. '
    + 'In kente patterns. In adinkra symbols. '
    + 'In a butterfly. In the face of the person beside you. '
    + 'Most are not perfect. '
    + 'Finding where it breaks is as good as finding where it holds.',

  figure: {
    alt: 'A square with its four lines of symmetry drawn in, beside a '
      + 'rectangle showing its two lines and its diagonal marked as not a line '
      + 'of symmetry',
    svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<rect x="40" y="40" width="140" height="140" fill="none" '
      + 'stroke="currentColor" stroke-width="3"/>'
      + '<g stroke="#0f8a4d" stroke-width="2" stroke-dasharray="7 5">'
      + '<path d="M110 40v140M40 110h140M40 40l140 140M180 40L40 180"/>'
      + '</g>'
      + '<text x="110" y="212" text-anchor="middle" font-size="22" '
      + 'font-weight="700" fill="currentColor">square</text>'
      + '<text x="110" y="240" text-anchor="middle" font-size="20" fill="#0f8a4d">'
      + '4 lines</text>'
      + '<rect x="270" y="60" width="170" height="100" fill="none" '
      + 'stroke="currentColor" stroke-width="3"/>'
      + '<g stroke="#0f8a4d" stroke-width="2" stroke-dasharray="7 5">'
      + '<path d="M355 60v100M270 110h170"/>'
      + '</g>'
      + '<path d="M270 60l170 100" stroke="#b4342a" stroke-width="2" stroke-dasharray="3 4"/>'
      + '<text x="355" y="212" text-anchor="middle" font-size="22" '
      + 'font-weight="700" fill="currentColor">rectangle</text>'
      + '<text x="355" y="240" text-anchor="middle" font-size="20" fill="#0f8a4d">'
      + '2 lines, not the diagonal</text>'
      + '<text x="240" y="282" text-anchor="middle" font-size="20" fill="currentColor">'
      + 'Fold it. Every corner must land on a corner.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'sym-1',
      ask: 'How many lines of symmetry does a square have?',
      kind: 'numeric',
      answer: '4',
      accept: ['four'],
      teach: 'Down the middle, across the middle, and both diagonals. Four in '
        + 'all.',
      level: 1,
    },
    {
      id: 'sym-2',
      ask: 'Is the diagonal of a rectangle a line of symmetry?',
      kind: 'choice',
      options: ['Yes', 'No'],
      answer: 'No',
      teach: 'It makes two equal triangles, but folding along it puts the long '
        + 'side onto the short side and the corners miss. Equal size is not '
        + 'the test.',
      level: 2,
    },
    {
      id: 'sym-3',
      ask: 'How many lines of symmetry does the capital letter H have?',
      kind: 'numeric',
      answer: '2',
      accept: ['two'],
      teach: 'Fold it down the middle and it matches. Fold it across the '
        + 'middle and it matches too. So two.',
      level: 3,
    },
  ],
})

/* ── length, mass and capacity ────────────────────────────────────────────── */

teach({
  topicId: 'length-mass-capacity',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Length is how long a thing is. '
    + 'We measure it in metres and centimetres. '
    + 'Mass is how heavy it is. '
    + 'We measure it in kilograms and grams. '
    + 'Capacity is how much a container holds. '
    + 'We measure it in litres and millilitres. '
    + 'Each one has a big unit and a small unit.',

  mechanism:
    'Picking the unit is the real skill. '
    + 'The rule is simple. '
    + 'Pick the unit that gives a number you can hold in your head. '
    + 'The classroom is 8 metres. Not 800 centimetres. '
    + 'A baby is 3 kilograms. Not 3000 grams. '
    + 'Both are true. But you can picture one of them. '
    + 'You pick the unit for the person reading it. '
    + 'Not for the thing you measured.',

  recap:
    'You know numbers to 1000 and what each place is worth. '
    + 'Changing units is just times or divide by 100 or 1000. '
    + 'The digits slide along the places.',

  method: [
    'Decide what you are measuring: how long, how heavy, or how much it holds.',
    'Pick the unit that gives a sensible number, not a huge one.',
    'Use metres for a room, centimetres for a pencil.',
    'Use kilograms for a bag of rice, grams for a sachet of salt.',
    'Use litres for a bucket, millilitres for a spoon of medicine.',
    'Line the zero of the ruler up with the end of the object, not the edge of '
      + 'the ruler.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Would you measure your exercise book in metres or centimetres?',
      steps: [
        'A book is shorter than your arm.',
        'In metres it would be a small fraction. In centimetres it is about 25.',
      ],
      answer: 'Centimetres.',
    },
    {
      level: 2,
      ask: 'A bottle holds 2 litres. How many millilitres is that?',
      steps: [
        'One litre is 1000 millilitres.',
        'Two litres is two lots of 1000.',
      ],
      answer: '2000 millilitres.',
    },
    {
      level: 3,
      ask: 'A bag of rice is 5 kg. You use 750 g. How much is left, in grams '
        + 'and then in kilograms?',
      steps: [
        'Put both in the same unit first. 5 kg is 5000 g.',
        '5000 take away 750 is 4250 g.',
        '4250 g is 4 kg and 250 g.',
      ],
      answer: '4250 g, which is 4 kg 250 g.',
    },
  ],

  traps: [
    {
      mistake: 'Subtracting without putting both amounts in the same unit.',
      why: '5 kg take away 750 g is not 4250 of anything until you have turned '
        + 'the kilograms into grams. Match the units first, always.',
    },
    {
      mistake: 'Starting the ruler at its edge instead of at the zero mark.',
      why: 'Most rulers have a little space before the zero. Everything you '
        + 'measure will be slightly too long.',
    },
    {
      mistake: 'Mixing up mass and capacity because both use a bottle.',
      why: 'Capacity is how much the bottle holds. Mass is how heavy the whole '
        + 'thing is. A big light bottle and a small heavy one are both possible.',
    },
  ],

  extension:
    'One litre of water weighs about one kilogram. '
    + 'That is handy. '
    + 'A trader can lift a tin and judge both at once. '
    + 'It is not magic. It is how the units were chosen. '
    + 'And it only works for water. '
    + 'Oil is lighter. Honey is heavier.',

  figure: {
    alt: 'A table of the three kinds of measurement, the big and small unit '
      + 'for each, how many small make one big, and an everyday example',
    svg: '<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<g stroke="currentColor" stroke-width="1" opacity="0.35">'
      + '<path d="M20 30h440M20 76h440M20 140h440M20 204h440M20 268h440"/>'
      + '<path d="M20 30v238M140 30v238M250 30v238M350 30v238M460 30v238"/>'
      + '</g>'
      + '<g font-size="20" font-weight="700" fill="#0f8a4d">'
      + '<text x="32" y="60">What</text><text x="152" y="60">Big</text>'
      + '<text x="262" y="60">Small</text><text x="362" y="60">Example</text>'
      + '</g>'
      + '<g font-size="20" fill="currentColor">'
      + '<text x="32" y="112">Length</text><text x="152" y="112">metre</text>'
      + '<text x="262" y="112">cm</text><text x="362" y="112">a room</text>'
      + '<text x="32" y="176">Mass</text><text x="152" y="176">kilogram</text>'
      + '<text x="262" y="176">gram</text><text x="362" y="176">rice</text>'
      + '<text x="32" y="240">Capacity</text><text x="152" y="240">litre</text>'
      + '<text x="262" y="240">ml</text><text x="362" y="240">a bucket</text>'
      + '</g>'
      + '<g font-size="17" fill="#0f8a4d">'
      + '<text x="262" y="134">100 in a metre</text>'
      + '<text x="262" y="198">1000 in a kg</text>'
      + '<text x="262" y="262">1000 in a litre</text>'
      + '</g>'
      + '</svg>',
  },

  questions: [
    {
      id: 'meas-1',
      ask: 'Which unit would you use for the length of a pencil?',
      kind: 'choice',
      options: ['Metres', 'Centimetres', 'Kilograms'],
      answer: 'Centimetres',
      teach: 'Centimetres give a number you can picture, about 15. Kilograms '
        + 'measure heaviness, not length.',
      level: 1,
    },
    {
      id: 'meas-2',
      ask: 'How many grams are in 3 kilograms?',
      kind: 'numeric',
      answer: '3000',
      accept: ['three thousand'],
      teach: 'One kilogram is 1000 grams, so three of them is 3000.',
      level: 2,
    },
    {
      id: 'meas-3',
      ask: 'A jug holds 1 litre. You pour out 250 ml. How many millilitres are '
        + 'left?',
      kind: 'numeric',
      answer: '750',
      accept: ['seven hundred and fifty'],
      teach: 'Match the units first: 1 litre is 1000 ml. Then 1000 take away '
        + '250 is 750.',
      level: 3,
    },
  ],
})

/* ── telling the time ─────────────────────────────────────────────────────── */

teach({
  topicId: 'time-primary',
  source: 'WRITTEN',
  approved: true,

  idea:
    'A clock has two hands doing two different jobs. The short hand points at '
    + 'the hour. The long hand counts the minutes past that hour, and it moves '
    + 'all the way round once every hour. Reading a clock is reading the short '
    + 'hand first, then the long one.',

  mechanism:
    'The numbers on the face mean two different things depending on which hand '
    + 'is pointing at them, and this is where nearly all the confusion comes '
    + 'from. For the short hand, the 3 means three o clock. For the long hand, '
    + 'the 3 means fifteen minutes, because there are five minutes between each '
    + 'pair of numbers. One face, two scales. Once you know that, you count the '
    + 'long hand in fives and the clock stops being a puzzle.',

  recap:
    'Count in fives. Five, ten, fifteen, twenty. '
    + 'That is all the long hand needs. '
    + 'Each number it passes is five minutes.',

  method: [
    'Find the short hand. Which number has it passed? That is the hour.',
    'If it is between two numbers, take the smaller one.',
    'Find the long hand. Count round from the 12 in fives.',
    'Add any single minutes past the last number.',
    'Say the hour, then the minutes: twenty past three.',
    'Half past means the long hand is on the 6, thirty minutes round.',
  ],

  worked: [
    {
      level: 1,
      ask: 'The short hand is on the 2 and the long hand is on the 12. What '
        + 'time is it?',
      steps: [
        'The short hand gives the hour: two.',
        'The long hand on 12 means no minutes have passed.',
      ],
      answer: 'Two o clock.',
    },
    {
      level: 2,
      ask: 'The short hand is just past the 4 and the long hand is on the 3. '
        + 'What time is it?',
      steps: [
        'Short hand past the 4, so the hour is four.',
        'Long hand on the 3: count in fives, five, ten, fifteen.',
      ],
      answer: 'Quarter past four, which is 4:15.',
    },
    {
      level: 3,
      ask: 'You start a chore at quarter past two and finish at ten to three. '
        + 'How long did it take?',
      steps: [
        'Quarter past two is 2:15. Ten to three is 2:50.',
        'From 2:15 to 2:50 is the minutes between 15 and 50.',
        '50 take away 15 is 35.',
      ],
      answer: '35 minutes.',
    },
  ],

  traps: [
    {
      mistake: 'Reading the long hand as the hour because it is bigger.',
      why: 'Long does not mean important. The short hand is the hour hand. '
        + 'Always read it first.',
    },
    {
      mistake: 'Saying the long hand on 3 means three minutes.',
      why: 'Each number is five minutes apart, so the 3 means fifteen. Count '
        + 'in fives, not in ones.',
    },
    {
      mistake: 'Rounding the hour up when the short hand is nearly at the next '
        + 'number.',
      why: 'At five to four the short hand is almost on the 4, but it is still '
        + 'three o clock something. Take the number it has passed.',
    },
  ],

  extension:
    'You can say the same time two ways. '
    + '2:50 is also ten to three. Both are right. '
    + 'A digital clock only counts forwards. '
    + 'That makes it easier to read. '
    + 'But it never shows you how long is left until the hour.',

  figure: {
    alt: 'A clock face showing quarter past four, with the short hand just '
      + 'past the four and the long hand on the three, and the minute counts '
      + 'in fives written outside the numbers',
    svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<circle cx="150" cy="150" r="118" fill="none" stroke="currentColor" stroke-width="3"/>'
      + '<g font-size="22" fill="currentColor" text-anchor="middle">'
      + '<text x="150" y="60">12</text><text x="240" y="158">3</text>'
      + '<text x="150" y="252">6</text><text x="62" y="158">9</text>'
      + '</g>'
      + '<g font-size="16" fill="#0f8a4d" text-anchor="middle">'
      + '<text x="150" y="34">0</text><text x="276" y="156">15</text>'
      + '<text x="150" y="286">30</text><text x="26" y="156">45</text>'
      + '</g>'
      /* hour hand just past 4, minute hand on 3 */
      + '<path d="M150 150 L196 196" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>'
      + '<path d="M150 150 L228 150" stroke="#0f8a4d" stroke-width="5" stroke-linecap="round"/>'
      + '<circle cx="150" cy="150" r="7" fill="currentColor"/>'
      + '<g font-size="21" fill="currentColor">'
      + '<text x="300" y="104">short hand:</text>'
      + '<text x="300" y="132">past the 4</text>'
      + '<text x="300" y="186">long hand on 3:</text>'
      + '<text x="300" y="214">5, 10, 15</text>'
      + '</g>'
      + '<text x="300" y="258" font-size="26" font-weight="700" fill="#0f8a4d">4:15</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'time-1',
      ask: 'Which hand tells you the hour?',
      kind: 'choice',
      options: ['The long one', 'The short one'],
      answer: 'The short one',
      teach: 'The short hand is the hour hand. The long one counts minutes, '
        + 'even though it is bigger.',
      level: 1,
    },
    {
      id: 'time-2',
      ask: 'The long hand is on the 6. How many minutes past the hour is it?',
      kind: 'numeric',
      answer: '30',
      accept: ['thirty', 'half past'],
      teach: 'Count in fives to the 6: five, ten, fifteen, twenty, twenty five, '
        + 'thirty. That is half past.',
      level: 2,
    },
    {
      id: 'time-3',
      ask: 'How many minutes from 3:20 to 3:45?',
      kind: 'numeric',
      answer: '25',
      accept: ['twenty five', 'twenty-five'],
      teach: 'Both are in the same hour, so take the minutes: 45 take away 20 '
        + 'is 25.',
      level: 3,
    },
  ],
})
