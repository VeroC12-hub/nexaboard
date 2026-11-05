/**
 * Stored lessons for Basic 6 Mathematics and English.
 *
 * Written at about grade 6, with a `brief` form on every topic. This is the
 * last primary year, so several of these topics are the first sight of
 * something that becomes a whole JHS subject: letters standing for numbers
 * is algebra, and the mean is the beginning of statistics.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── percentages ──────────────────────────────────────────────────────────── */

teach({
  topicId: 'percentages-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Per cent means out of a hundred. '
      + '50% is half, 25% is a quarter, 10% is a tenth. '
      + 'To find 10%, divide by 10.',
    method: [
      'Find 10% by dividing by 10.',
      'Build other percentages from that: 20% is double, 5% is half.',
      '50% is half the amount, 25% is half of that.',
    ],
  },

  why:
    'A shirt in the market is marked 80 cedis. '
    + 'The trader says she will take 25% off it for you. '
    + 'Your friend says the shop down the road is taking 20 cedis '
    + 'off the same shirt. '
    + 'Both of those sound like good offers, so which one leaves '
    + 'more money in your pocket?',

  notation:
    'The % sign is said percent, so 25% is said twenty-five '
    + 'percent. '
    + 'It means out of every hundred, so 25% is 25 out of 100. '
    + 'The sign is written after the number and never before it. '
    + '25 is the commonest way to lose a mark, because 25% of 80 '
    + 'is 20 while 25 times 80 is 2,000.',

  idea:
    'Per cent means out of a hundred. '
    + '50% means 50 out of every 100, which is a half. '
    + '25% is a quarter, 10% is a tenth. '
    + 'A percentage is just another way of writing a fraction, '
    + 'with the bottom number always 100.',

  mechanism:
    'Percentages exist because comparing fractions with different bottoms '
    + 'is hard. '
    + 'Is 17 out of 25 better than 33 out of 50? '
    + 'You cannot see it. '
    + 'Turn both into percentages, 68% and 66%, and you can. '
    + 'Fixing the bottom number at 100 for everything '
    + 'is what makes percentages comparable at a glance, '
    + 'and that is the whole reason they are used for marks, prices and '
    + 'interest.',

  recap:
    'A fraction is a number of parts out of a whole. '
    + 'Cut an orange into 4 equal parts, take 1, and you have '
    + 'taken one quarter, written 1 over 4. '
    + 'The same amount can be written in more than one way. '
    + 'Half can be written as 1 over 2, it can be written as 0.5, '
    + 'and it is also 50%. '
    + 'All three mean the same share of the same thing, and this '
    + 'lesson is about the third of those ways.',

  method: [
    'Decide which easy percentage you can build this one from.',
    'Work out that easy one first.',
    'Then double it, halve it, or add two of them together.',
    'For 35%, find 25% and 10% and add them.',
    'Check the answer looks sensible before you write it down.',
  ],

  worked: [
    {
      level: 4,
      ask: 'What is 10% of 250?',
      steps: [
        '10% means divide by 10.',
      ],
      answer: '25.',
    },
    {
      level: 5,
      ask: 'A shirt costs 80 cedis with 25% off. What do you pay?',
      steps: [
        '25% is a quarter. A quarter of 80 is 20.',
        'That is the discount.',
        '80 take away 20.',
      ],
      answer: '60 cedis.',
    },
    {
      level: 6,
      ask: 'Which is the better mark, 17 out of 25 or 33 out of 50?',
      steps: [
        '17 out of 25: multiply both by 4 to get out of 100, giving 68%.',
        '33 out of 50: multiply both by 2, giving 66%.',
      ],
      answer: '17 out of 25, at 68% against 66%. '
        + 'You could not see that before converting.',
    },
  ],

  traps: [
    {
      mistake: 'Giving the discount as the answer.',
      why: 'The question asked what you pay. '
        + 'Take the discount off the price.',
    },
    {
      mistake: 'Thinking 50% off twice is 100% off.',
      why: 'The second 50% comes off the reduced price. '
        + 'Two halvings leave a quarter, not nothing.',
    },
    {
      mistake: 'Comparing percentages of different amounts.',
      why: '10% of 1,000 is far more than 50% of 100. '
        + 'A percentage is meaningless without knowing of what.',
    },
  ],

  extension:
    'Interest on a loan is a percentage applied again and again, '
    + 'each time to the new total. '
    + 'That is why a debt can grow far faster than people expect, '
    + 'and why understanding this one idea properly is worth real money '
    + 'later.',

  figure: {
    alt: 'Two marks converted so that both are out of a hundred. '
      + '17 over 25 has an arrow labelled times 4 leading to 68 over 100, '
      + 'which is 68 per cent and is marked as the better mark. '
      + '33 over 50 has an arrow labelled times 2 leading to 66 over 100, '
      + 'which is 66 per cent. A note underneath says that out of 25 '
      + 'against out of 50 tells you nothing at a glance.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Make both bottom numbers 100</text>'
      + '<text x="90" y="106" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">17</text>'
      + '<line x1="62" y1="118" x2="118" y2="118"/>'
      + '<text x="90" y="152" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">25</text>'
      + '<text x="188" y="104" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">times 4</text>'
      + '<line x1="146" y1="118" x2="228" y2="118"/>'
      + '<polygon points="238,118 224,111 224,125" fill="currentColor" stroke="none"/>'
      + '<text x="286" y="106" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">68</text>'
      + '<line x1="248" y1="118" x2="324" y2="118"/>'
      + '<text x="286" y="152" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">100</text>'
      + '<text x="360" y="128" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">is</text>'
      + '<text x="432" y="130" font-size="28" text-anchor="middle" fill="#0f8a4d" stroke="none">68%</text>'
      + '<text x="548" y="130" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">the better mark</text>'
      + '<text x="90" y="236" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">33</text>'
      + '<line x1="62" y1="248" x2="118" y2="248"/>'
      + '<text x="90" y="282" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">50</text>'
      + '<text x="188" y="234" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">times 2</text>'
      + '<line x1="146" y1="248" x2="228" y2="248"/>'
      + '<polygon points="238,248 224,241 224,255" fill="currentColor" stroke="none"/>'
      + '<text x="286" y="236" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">66</text>'
      + '<line x1="248" y1="248" x2="324" y2="248"/>'
      + '<text x="286" y="282" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">100</text>'
      + '<text x="360" y="258" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">is</text>'
      + '<text x="432" y="260" font-size="28" text-anchor="middle" fill="currentColor" stroke="none">66%</text>'
      + '<text x="320" y="342" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Out of 25 against out of 50 tells you nothing</text>'
      + '<text x="320" y="368" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">at a glance. Out of 100 against out of 100 does.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Percentages you can work out in your head, and what each one '
      + 'does to 240 cedis',
    columns: ['Percentage', 'What to do', '240 cedis becomes'],
    rows: [
      ['50%', 'Halve it', '120 cedis'],
      ['25%', 'Halve it twice', '60 cedis'],
      ['10%', 'Divide by 10', '24 cedis'],
      ['20%', 'Find 10%, then double it', '48 cedis'],
      ['5%', 'Find 10%, then halve it', '12 cedis'],
      ['1%', 'Divide by 100', '2 cedis 40 pesewas'],
    ],
    note: 'Any awkward percentage is built from these. 35% is the 25% row '
      + 'and the 10% row added together, so 60 and 24 is 84 cedis.',
  }],
  questions: [
    {
      id: 'pc-1',
      ask: 'What is 10% of 250?',
      kind: 'numeric',
      answer: '25',
      accept: ['twenty five', 'twenty-five'],
      teach: '10% means divide by 10. '
        + 'Everything else can be built from this one.',
      level: 4,
    },
    {
      id: 'pc-2',
      ask: 'A shirt costs 80 cedis with 25% off. What do you pay?',
      kind: 'numeric',
      answer: '60',
      accept: ['sixty'],
      teach: 'A quarter of 80 is 20, and that is the discount. '
        + '80 take away 20 is 60. Do not stop at the 20.',
      level: 5,
    },
    {
      id: 'pc-3',
      ask: 'Is 50% always more than 10%?',
      kind: 'choice',
      options: ['No, it depends what of', 'Yes'],
      answer: 'No, it depends what of',
      teach: '10% of 1,000 is 100, and 50% of 100 is 50. '
        + 'A percentage means nothing without the amount.',
      level: 6,
    },
    {
      id: 'pc-4',
      ask: 'What does per cent mean?',
      kind: 'choice',
      options: ['Out of ten', 'Out of a hundred', 'Out of a thousand'],
      answer: 'Out of a hundred',
      teach: 'Cent is the hundred in per cent. 25% means 25 out of every '
        + '100, so the bottom number is always 100, never 10.',
      level: 2,
    },
    {
      id: 'pc-5',
      ask: 'What is 50% of 36 cedis?',
      kind: 'numeric',
      answer: '18',
      accept: ['eighteen', '18 cedis'],
      teach: '50% is half, so halve the amount. Half of 36 is 18. '
        + 'Dividing by 50 is the mistake: 50% means halve, not divide '
        + 'by 50.',
      level: 2,
    },
    {
      id: 'pc-6',
      ask: '25% is the same as which fraction?',
      kind: 'choice',
      options: ['One half', 'One tenth', 'One quarter', '25 over 10'],
      answer: 'One quarter',
      teach: '25% is 25 out of 100, and four lots of 25 make 100. So 25% '
        + 'is one part in four, which is a quarter.',
      level: 3,
    },
    {
      id: 'pc-7',
      ask: 'What is 20% of 60 cedis?',
      kind: 'numeric',
      answer: '12',
      accept: ['twelve', '12 cedis'],
      teach: 'Find 10% first by dividing by 10, which gives 6. 20% is '
        + 'double that, so 12. Do not stop at 6.',
      level: 3,
    },
    {
      id: 'pc-8',
      ask: 'What is 5% of 80 cedis?',
      kind: 'numeric',
      answer: '4',
      accept: ['four', '4 cedis'],
      teach: 'Find 10% first: 80 divided by 10 is 8. 5% is half of 10%, '
        + 'so half of 8 is 4.',
      level: 4,
    },
    {
      id: 'pc-9',
      ask: 'Ama scores 45 out of 50 in a test. What is that as a '
        + 'percentage?',
      kind: 'numeric',
      answer: '90',
      accept: ['90%', 'ninety', '90 percent'],
      teach: 'Make the bottom number 100. 50 times 2 is 100, so do the '
        + 'same to the top: 45 times 2 is 90. That is 90 out of 100, '
        + 'or 90%.',
      level: 4,
    },
    {
      id: 'pc-10',
      ask: 'A shirt costs 80 cedis. One trader takes 25% off. Another '
        + 'takes 20 cedis off. Which leaves more money in your '
        + 'pocket?',
      kind: 'choice',
      options: ['25% off', '20 cedis off', 'They save exactly the same'],
      answer: 'They save exactly the same',
      teach: '25% sounds bigger than 20, but 25% of 80 is a quarter of '
        + '80, which is 20 cedis. Work out the percentage in cedis '
        + 'before you compare.',
      level: 4,
    },
  ],
})

/* ── ratio and proportion ─────────────────────────────────────────────────── */

teach({
  topicId: 'ratio-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A ratio says how a thing is split between parts. '
      + '3:2 means five shares, three to one side and two to the other. '
      + 'It is deliberately not an equal split.',
    method: [
      'Add the numbers in the ratio to get the total shares.',
      'Divide the amount by that total to find one share.',
      'Multiply one share by each part of the ratio.',
    ],
  },

  why:
    'Two boys sell oranges together. '
    + 'One put in 30 cedis to buy the oranges and the other put '
    + 'in 20. '
    + 'At the end of the day they have 100 cedis. '
    + 'Splitting it 50 and 50 does not feel right to the first '
    + 'boy, so how much should each of them take?',

  notation:
    'A ratio is written with a colon, so 3:2 is said three to '
    + 'two. '
    + 'The order matters: 3:2 means the first share gets 3 parts '
    + 'and the second gets 2, while 2:3 is the other way round. '
    + 'A ratio carries no units, because it only says how many '
    + 'parts each one gets. '
    + 'Forgetting to add the parts up is the commonest way to '
    + 'lose a mark, because 3:2 means 5 parts altogether and not '
    + '3.',

  idea:
    'A ratio describes how something is divided between two or more parts. '
    + 'Sharing 50 cedis in the ratio 3:2 means five shares in total: '
    + 'three for one person and two for the other, '
    + 'so 30 cedis and 20 cedis.',

  mechanism:
    'The step everybody misses is adding the parts together first. '
    + '3:2 does not mean three of something and two of something. '
    + 'It means the amount is cut into five, '
    + 'and then grouped three and two. '
    + 'Once you find the value of one share, everything follows. '
    + 'And it is worth being clear that a ratio is not a fair split '
    + 'and is not trying to be: '
    + 'it is used exactly when two people should not get the same, '
    + 'because one put in more, or worked longer, or owns more of it.',

  recap:
    'Dividing an amount into equal parts means sharing it so '
    + 'that every part is the same size. '
    + 'Share 50 cedis among 5 people equally and each gets 10 '
    + 'cedis, because 50 divided by 5 is 10. '
    + 'Multiplying then lets you give somebody more than one '
    + 'part, so three parts of 10 cedis is 30 cedis. '
    + 'This lesson does those two things one after the other. '
    + 'That is how an amount gets shared unequally but still by a '
    + 'fixed rule.',

  method: [
    'Add the numbers in the ratio. That is the number of shares.',
    'Divide the total amount by the number of shares.',
    'That gives the value of one share.',
    'Multiply one share by each number in the ratio.',
    'Check: your answers should add back to the original amount.',
  ],

  worked: [
    {
      level: 5,
      ask: 'Share 50 cedis in the ratio 3:2.',
      steps: [
        '3 and 2 is 5 shares.',
        '50 divided by 5 is 10 per share.',
        'Three shares is 30, two shares is 20.',
      ],
      answer: '30 cedis and 20 cedis. Check: 30 and 20 is 50.',
    },
    {
      level: 6,
      ask: 'Share 60 oranges in the ratio 1:2:3.',
      steps: [
        '1 and 2 and 3 is 6 shares.',
        '60 divided by 6 is 10 per share.',
        'So 10, 20 and 30.',
      ],
      answer: '10, 20 and 30 oranges. Check: they add to 60.',
    },
    {
      level: 6,
      ask: 'Why is a ratio not a fair split?',
      steps: [
        'A fair split gives everybody the same.',
        'A ratio deliberately gives different amounts.',
        'It is used when people should not get the same.',
      ],
      answer: 'Because it is meant to be unequal: '
        + 'it reflects who contributed what, not who is present.',
    },
  ],

  traps: [
    {
      mistake: 'Dividing by the first number in the ratio.',
      why: 'Divide by the total of all the numbers. '
        + 'For 3:2 that is 5, not 3.',
    },
    {
      mistake: 'Thinking 3:2 means three and two of something.',
      why: 'It means the amount is cut into five parts, '
        + 'then grouped three and two.',
    },
    {
      mistake: 'Not checking the parts add back.',
      why: 'Your answers must total the original amount. '
        + 'It catches almost every error in one step.',
    },
  ],

  extension:
    'Recipes, maps and mixing cement all use ratios. '
    + 'A cement mix of 1:2:4 keeps working whether you are mixing a bucket '
    + 'or a lorry load, '
    + 'because what matters is the relationship between the parts '
    + 'rather than the amounts.',

  figure: {
    alt: 'Fifty cedis drawn as five equal boxes of ten cedis each in a '
      + 'row. A bracket under the first three boxes is labelled three '
      + 'shares, 30 cedis, and a bracket under the last two is labelled '
      + 'two shares, 20 cedis. A warning underneath says do not divide by '
      + '3, divide by 3 and 2 together, and a check says 30 and 20 add '
      + 'back to 50.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">50 cedis in the ratio 3 to 2</text>'
      + '<text x="320" y="62" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">first cut it into 5 equal shares</text>'
      + '<rect x="46" y="78" width="100" height="70"/>'
      + '<text x="96" y="122" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">10</text>'
      + '<rect x="158" y="78" width="100" height="70"/>'
      + '<text x="208" y="122" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">10</text>'
      + '<rect x="270" y="78" width="100" height="70"/>'
      + '<text x="320" y="122" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">10</text>'
      + '<rect x="382" y="78" width="100" height="70"/>'
      + '<text x="432" y="122" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">10</text>'
      + '<rect x="494" y="78" width="100" height="70"/>'
      + '<text x="544" y="122" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">10</text>'
      + '<polyline points="46,166 46,178 370,178 370,166" stroke="#0f8a4d"/>'
      + '<line x1="208" y1="178" x2="208" y2="190" stroke="#0f8a4d"/>'
      + '<text x="208" y="214" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">3 shares is 30 cedis</text>'
      + '<polyline points="382,166 382,178 594,178 594,166" stroke="#0f8a4d"/>'
      + '<line x1="488" y1="178" x2="488" y2="190" stroke="#0f8a4d"/>'
      + '<text x="488" y="214" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">2 shares is 20 cedis</text>'
      + '<text x="320" y="286" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">Do not divide by 3.</text>'
      + '<text x="320" y="314" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">Divide by 3 and 2 together, which is 5.</text>'
      + '<text x="320" y="366" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Check: 30 and 20 add back to 50.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'The same 60 oranges shared in four different ratios',
    columns: ['Ratio', 'Shares in total', 'One share', 'Each person gets'],
    rows: [
      ['1 to 1', '2', '30 oranges', '30 and 30'],
      ['3 to 2', '5', '12 oranges', '36 and 24'],
      ['5 to 1', '6', '10 oranges', '50 and 10'],
      ['1 to 2 to 3', '6', '10 oranges', '10, 20 and 30'],
    ],
    note: 'The total number of shares changes every time, so one share '
      + 'changes with it. That is why you add the parts before you divide.',
  }],
  questions: [
    {
      id: 'rt-1',
      ask: 'Sharing in the ratio 3:2, how many shares are there in total?',
      kind: 'numeric',
      answer: '5',
      accept: ['five'],
      teach: 'Add the parts: 3 and 2 is 5. '
        + 'That is the step most people skip.',
      level: 5,
    },
    {
      id: 'rt-2',
      ask: 'Share 50 cedis in the ratio 3:2. What is the larger amount?',
      kind: 'numeric',
      answer: '30',
      accept: ['thirty'],
      teach: '50 divided by 5 shares is 10 each. '
        + 'Three shares is 30.',
      level: 5,
    },
    {
      id: 'rt-3',
      ask: 'Is a ratio meant to be a fair split?',
      kind: 'choice',
      options: ['No', 'Yes'],
      answer: 'No',
      teach: 'It is used precisely when people should not get the same, '
        + 'because of what each put in.',
      level: 6,
    },
    {
      id: 'rt-4',
      ask: 'Kofi and Ama share sweets in the ratio 2:3. Who gets more?',
      kind: 'choice',
      options: ['Kofi', 'Ama', 'They get the same'],
      answer: 'Ama',
      teach: 'The order matters. The first name gets the first number, '
        + 'so Kofi gets 2 parts and Ama gets 3 parts. 3 parts is '
        + 'more.',
      level: 2,
    },
    {
      id: 'rt-5',
      ask: 'Share 20 cedis in the ratio 3:1. What is the larger '
        + 'amount?',
      kind: 'numeric',
      answer: '15',
      accept: ['fifteen', '15 cedis'],
      teach: 'Add the parts first: 3 and 1 is 4 shares. 20 divided by 4 '
        + 'is 5 a share. Three shares is 15. Dividing 20 by 3 is the '
        + 'mistake.',
      level: 3,
    },
    {
      id: 'rt-6',
      ask: 'Share 60 oranges in the ratio 3:2. How many oranges is one '
        + 'share?',
      kind: 'numeric',
      answer: '12',
      accept: ['twelve', '12 oranges'],
      teach: '3 and 2 is 5 shares altogether. 60 divided by 5 is 12. One '
        + 'share is 12, so the two people get 36 and 24.',
      level: 3,
    },
    {
      id: 'rt-7',
      ask: 'Share 60 oranges in the ratio 5:1. How many does the '
        + 'smaller share get?',
      kind: 'numeric',
      answer: '10',
      accept: ['ten', '10 oranges'],
      teach: '5 and 1 is 6 shares. 60 divided by 6 is 10 a share. The '
        + 'smaller part is 1 share, so 10 oranges. The other gets 50.',
      level: 3,
    },
    {
      id: 'rt-8',
      ask: 'Two boys put in 30 cedis and 20 cedis, so they share 100 '
        + 'cedis in the ratio 3:2. How much does the boy who put in '
        + '20 cedis get?',
      kind: 'numeric',
      answer: '40',
      accept: ['forty', '40 cedis'],
      teach: '3 and 2 is 5 shares. 100 divided by 5 is 20 a share. He '
        + 'has 2 shares, so 40 cedis. The other boy gets 60, and 60 '
        + 'and 40 is 100.',
      level: 4,
    },
    {
      id: 'rt-9',
      ask: 'Yaw shares 50 cedis in the ratio 3:2 and writes 30 cedis '
        + 'and 25 cedis. How can he tell straight away that it is '
        + 'wrong?',
      kind: 'choice',
      options: [
        '30 is too big for a ratio',
        'The two parts do not add back to 50',
        'A ratio cannot be used for cedis',
      ],
      answer: 'The two parts do not add back to 50',
      teach: '30 and 25 is 55, not 50. The parts of a share must always '
        + 'add back to the amount you started with. 50 divided by 5 '
        + 'is 10, so it is 30 and 20.',
      level: 4,
    },
    {
      id: 'rt-10',
      ask: 'Share 36 cedis in the ratio 1:2:3. What is the largest '
        + 'amount?',
      kind: 'numeric',
      answer: '18',
      accept: ['eighteen', '18 cedis'],
      teach: 'Add all three parts: 1 and 2 and 3 is 6 shares. 36 divided '
        + 'by 6 is 6 a share. The largest part is 3 shares, so 18. '
        + 'Check: 6, 12 and 18 add to 36.',
      level: 5,
    },
  ],
})

/* ── letters standing for numbers ─────────────────────────────────────────── */

teach({
  topicId: 'letters-for-numbers',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A letter can stand for a number you do not know yet. '
      + 'A rule written with a letter works for every case at once.',
    method: [
      'Write the rule in words first.',
      'Replace the unknown amount with a letter.',
      'To find the letter, undo what was done to it.',
    ],
  },

  why:
    'A pen costs the same in every shop in your town, but '
    + 'nobody will tell you the price. '
    + 'What you do know is that three pens cost 6 cedis. '
    + 'Tomorrow the price goes up and you will have to work the '
    + 'whole thing out again from the start. '
    + 'Is there a way to write the rule down once, so that it '
    + 'still works after the price changes?',

  notation:
    'A letter standing for a number is usually a small letter, '
    + 'such as p for the price of a pen. '
    + 'A number written next to a letter means multiply, so 3p '
    + 'means 3 times p. '
    + 'The multiplication sign is left out on purpose, because it '
    + 'looks too much like the letter x. '
    + 'Writing 3p when you mean p plus 3 is the commonest way to '
    + 'lose a mark.',

  idea:
    'A letter can stand for a number. '
    + 'If a pen costs p cedis, then three pens cost 3p. '
    + 'Writing it this way gives you a rule that works '
    + 'whatever the pen actually costs.',

  mechanism:
    'This is the step from arithmetic to algebra, '
    + 'and it is worth seeing what is gained. '
    + 'Arithmetic answers one question: three pens at 2 cedis cost 6. '
    + 'Algebra answers all of them at once: three pens cost 3p. '
    + 'You have written down the relationship rather than one instance of '
    + 'it. '
    + 'Finding the value of the letter takes one move: '
    + 'undo what was done to it, '
    + 'which is exactly the missing number method with a letter in the box.',

  recap:
    'A missing number is found by undoing what was done to it. '
    + 'If a box plus 4 is 10, then the box is 10 take away 4, '
    + 'which is 6. '
    + 'If 3 times a box is 12, then the box is 12 divided by 3, '
    + 'which is 4. '
    + 'Undoing means doing the opposite of whatever was done. '
    + 'This lesson changes nothing about that except the shape on '
    + 'the page, because the box becomes a letter.',

  method: [
    'Say the rule in words first.',
    'Choose a letter for the amount you do not know.',
    'Write the rule using the letter. 3 times p is written 3p.',
    'To find the letter, undo each operation in turn.',
    'Whatever you do to one side, do to the other.',
    'Put your answer back in and check the sentence is true.',
  ],

  worked: [
    {
      level: 5,
      ask: 'A pen costs p cedis. Write the cost of 4 pens.',
      steps: [
        'Four lots of p.',
        'We write that without the times sign.',
      ],
      answer: '4p.',
    },
    {
      level: 6,
      ask: 'If 3p equals 12, what is p?',
      steps: [
        'p was multiplied by 3.',
        'The opposite is dividing by 3.',
        '12 divided by 3.',
      ],
      answer: 'p is 4. Check: 3 times 4 is 12.',
    },
    {
      level: 6,
      ask: 'If 2n plus 5 equals 17, what is n?',
      steps: [
        'Two things were done: multiplied by 2, then 5 added.',
        'Undo in reverse order. First take away 5: 17 take 5 is 12.',
        'Now divide by 2.',
      ],
      answer: 'n is 6. Check: 2 times 6 is 12, and 12 and 5 is 17.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking the letter has a fixed meaning.',
      why: 'p is whatever this question says it is. '
        + 'It is not always 16 because of some rule about the alphabet.',
    },
    {
      mistake: 'Undoing in the wrong order.',
      why: 'For 2n plus 5, the 5 was added last, so take it away first. '
        + 'Undo in reverse.',
    },
    {
      mistake: 'Writing 3p as 3 and p.',
      why: '3p means 3 times p. '
        + 'The missing sign is multiplication, not addition.',
    },
  ],

  extension:
    'Once you can write a rule with letters, '
    + 'you can write rules about rules: '
    + 'the area of any rectangle is length times width, written A equals lw. '
    + 'One line that covers every rectangle that has ever existed.',

  figure: {
    alt: 'Two boxes with an arrow between them. The left box, headed '
      + 'arithmetic, lists three separate sums: three pens at 2 cedis is '
      + '6, at 3 cedis is 9, at 5 cedis is 15, and so on for ever. The '
      + 'right box, headed algebra, holds the single line 3p, with a note '
      + 'that a pen costs p cedis and that this covers every price at '
      + 'once. Underneath, a note that 3p means 3 times p, with a warning '
      + 'that it does not mean 3 and p.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">One line instead of endless sums</text>'
      + '<rect x="20" y="48" width="252" height="176"/>'
      + '<text x="146" y="76" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">arithmetic</text>'
      + '<text x="146" y="112" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">3 pens at 2 cedis is 6</text>'
      + '<text x="146" y="140" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">3 pens at 3 cedis is 9</text>'
      + '<text x="146" y="168" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">3 pens at 5 cedis is 15</text>'
      + '<text x="146" y="200" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">and so on, for ever</text>'
      + '<line x1="284" y1="136" x2="344" y2="136"/>'
      + '<polygon points="354,136 340,129 340,143" fill="currentColor" stroke="none"/>'
      + '<rect x="366" y="48" width="252" height="176" stroke="#0f8a4d"/>'
      + '<text x="492" y="76" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">algebra</text>'
      + '<text x="492" y="136" font-size="40" text-anchor="middle" fill="currentColor" stroke="none">3p</text>'
      + '<text x="492" y="172" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">a pen costs p cedis</text>'
      + '<text x="492" y="200" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">covers every price at once</text>'
      + '<text x="320" y="278" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">3p means 3 times p. The times sign is left out.</text>'
      + '<text x="320" y="316" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">It does not mean 3 and p.</text>'
      + '<text x="320" y="364" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">To find p, undo what was done to it.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Finding the letter by undoing what was done to it',
    columns: [
      'The sentence',
      'What was done to the letter',
      'Undo it by',
      'The letter is',
    ],
    rows: [
      ['p plus 7 is 12', '7 was added', 'Taking away 7', 'p is 5'],
      ['p take away 4 is 9', '4 was taken away', 'Adding 4', 'p is 13'],
      ['3p is 12', 'Multiplied by 3', 'Dividing by 3', 'p is 4'],
      ['p divided by 2 is 8', 'Divided by 2', 'Multiplying by 2', 'p is 16'],
      [
        '2n plus 5 is 17',
        'Times 2, then 5 added',
        'Take away 5, then divide by 2',
        'n is 6',
      ],
    ],
    note: 'Every row is checked by putting the answer back in. 3 times 4 '
      + 'is 12, so p is 4 is right.',
  }],
  questions: [
    {
      id: 'lf-1',
      ask: 'A pen costs p cedis. How do you write the cost of 4 pens?',
      kind: 'choice',
      options: ['4p', '4 + p', 'p4'],
      answer: '4p',
      teach: 'Four lots of p. The times sign is left out by convention.',
      level: 5,
    },
    {
      id: 'lf-2',
      ask: 'If 3p equals 12, what is p?',
      kind: 'numeric',
      answer: '4',
      accept: ['four'],
      teach: 'Undo the multiplying by dividing: 12 divided by 3.',
      level: 6,
    },
    {
      id: 'lf-3',
      ask: 'If 2n plus 5 equals 17, what is n?',
      kind: 'numeric',
      answer: '6',
      accept: ['six'],
      teach: 'Undo in reverse: take away the 5 first, then divide by 2.',
      level: 6,
    },
    {
      id: 'lf-4',
      ask: 'What does 5n mean?',
      kind: 'choice',
      options: ['5 plus n', 'n take away 5', '5 times n'],
      answer: '5 times n',
      teach: 'A number written next to a letter means multiply. The '
        + 'times sign is left out, so 5n is 5 lots of n, not 5 and n.',
      level: 2,
    },
    {
      id: 'lf-5',
      ask: 'If p plus 7 is 12, what is p?',
      kind: 'numeric',
      answer: '5',
      accept: ['five', 'p = 5'],
      teach: '7 was added to p, so undo it by taking 7 away. 12 take '
        + 'away 7 is 5. Check: 5 and 7 is 12.',
      level: 2,
    },
    {
      id: 'lf-6',
      ask: 'A bag of oranges costs b cedis. How do you write the cost '
        + 'of 6 bags?',
      kind: 'choice',
      options: ['6 + b', '6b', 'b take away 6'],
      answer: '6b',
      teach: 'Six bags is six lots of b, which is 6 times b. A number '
        + 'next to a letter means multiply, so it is written 6b.',
      level: 3,
    },
    {
      id: 'lf-7',
      ask: 'If p divided by 2 is 8, what is p?',
      kind: 'numeric',
      answer: '16',
      accept: ['sixteen', 'p = 16'],
      teach: 'p was divided by 2, so undo it by multiplying by 2. 8 '
        + 'times 2 is 16. Dividing 8 by 2 again would give 4, which '
        + 'is the wrong way round.',
      level: 3,
    },
    {
      id: 'lf-8',
      ask: 'A pen costs p cedis, so 4 pens cost 4p cedis. If p is 3, '
        + 'how much do 4 pens cost?',
      kind: 'numeric',
      answer: '12',
      accept: ['twelve', '12 cedis'],
      teach: '4p means 4 times p. Put 3 in place of p: 4 times 3 is 12. '
        + 'It is not 43 and it is not 4 and 3.',
      level: 4,
    },
    {
      id: 'lf-9',
      ask: 'To find n in 2n plus 5 equals 17, what do you do first?',
      kind: 'choice',
      options: ['Divide 17 by 2', 'Take away 5', 'Add 5'],
      answer: 'Take away 5',
      teach: 'The 5 was added last, so it comes off first. Undo in '
        + 'reverse order: take away 5 to get 12, then divide by 2 to '
        + 'get 6.',
      level: 4,
    },
    {
      id: 'lf-10',
      ask: 'If 4m plus 3 equals 23, what is m?',
      kind: 'numeric',
      answer: '5',
      accept: ['five', 'm = 5'],
      teach: 'Undo in reverse. Take away the 3 first: 23 take away 3 is '
        + '20. Then undo the times 4: 20 divided by 4 is 5. Check: 4 '
        + 'times 5 is 20, and 20 and 3 is 23.',
      level: 5,
    },
  ],
})

/* ── volume ───────────────────────────────────────────────────────────────── */

teach({
  topicId: 'volume-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Volume is how much space something takes up. '
      + 'For a box it is length times width times height. '
      + 'It is measured in cubic units.',
    method: [
      'Measure length, width and height.',
      'Multiply all three.',
      'Write the unit as cubic: cubic centimetres.',
    ],
  },

  why:
    'A water tank for a school is a box 2 metres long, 1 metre '
    + 'wide and 1 metre deep. '
    + 'The headmaster has to tell the water company how much it '
    + 'holds before they come to fill it. '
    + 'Measuring the three sides was easy and he has done it. '
    + 'How do three measurements turn into one amount of water?',

  notation:
    'Volume is written in cubic units, as cm with a small '
    + 'raised 3, and that is said cubic centimetres. '
    + 'Area uses a small raised 2 instead, and is said square '
    + 'centimetres. '
    + 'The small raised number tells you how many measurements '
    + 'were multiplied together: 2 for a flat shape and 3 for a '
    + 'solid. '
    + 'Giving a volume in square centimetres is the commonest way '
    + 'to lose a mark, even when the number itself is right.',

  idea:
    'Volume is the amount of space something takes up. '
    + 'For a box, multiply length by width by height. '
    + 'A box 4 cm by 3 cm by 2 cm has a volume of 24 cubic centimetres.',

  mechanism:
    'Think of filling the box with little cubes one centimetre each way. '
    + 'The bottom layer is 4 by 3, which is 12 cubes. '
    + 'The box is 2 cubes high, so there are two such layers: 24 cubes. '
    + 'That is why you multiply three numbers, '
    + 'and why the unit is cubic: you are counting cubes.',

  recap:
    'The area of a rectangle is found by multiplying its two '
    + 'sides. '
    + 'A rectangle 4 cm by 3 cm has an area of 12 square '
    + 'centimetres, because 12 squares of 1 cm each fit inside '
    + 'it. '
    + 'The unit is square because what you counted was squares. '
    + 'This lesson counts the same way, but in one more '
    + 'direction. '
    + 'What gets counted is no longer a flat square but a cube.',

  method: [
    'Measure the length, the width and the height.',
    'Make sure all three are in the same unit.',
    'Multiply all three together.',
    'Write the unit as cubic centimetres or cubic metres.',
    'For liquid, remember 1,000 cubic centimetres is one litre.',
  ],

  worked: [
    {
      level: 5,
      ask: 'A box is 4 cm by 3 cm by 2 cm. What is its volume?',
      steps: [
        'Multiply 4 by 3, which is 12.',
        'Multiply by 2.',
      ],
      answer: '24 cubic centimetres.',
    },
    {
      level: 6,
      ask: 'Why is the unit cubic rather than square?',
      steps: [
        'Area counts squares covering a surface, two measurements.',
        'Volume counts cubes filling a space, three measurements.',
      ],
      answer: 'Because you are counting cubes, and that takes three '
        + 'measurements rather than two.',
    },
    {
      level: 6,
      ask: 'A tank is 50 cm by 40 cm by 50 cm. How many litres does it hold?',
      steps: [
        '50 times 40 is 2,000. Times 50 is 100,000 cubic centimetres.',
        '1,000 cubic centimetres is one litre.',
        '100,000 divided by 1,000.',
      ],
      answer: '100 litres.',
    },
  ],

  traps: [
    {
      mistake: 'Multiplying only two of the three measurements.',
      why: 'That gives you an area, not a volume. '
        + 'Three measurements, three numbers multiplied.',
    },
    {
      mistake: 'Mixing units.',
      why: 'Metres times centimetres times metres gives nothing meaningful. '
        + 'Convert everything first.',
    },
    {
      mistake: 'Writing the unit as square.',
      why: 'The unit tells the reader what you measured. '
        + 'Volume is cubic.',
    },
  ],

  extension:
    'A litre was defined as the volume of a cube 10 cm each way, '
    + 'which is 1,000 cubic centimetres. '
    + 'That is why the kitchen and the mathematics classroom agree, '
    + 'and it is a definition rather than a coincidence.',

  figure: {
    alt: 'A box 4 cm by 3 cm by 2 cm shown twice. Looking down on it, a '
      + 'grid 4 squares by 3 squares is labelled 4 by 3 is 12 cubes in one '
      + 'layer. Looking at it from the side, a grid 4 squares by 2 squares '
      + 'is labelled 2 layers high. Underneath, 12 cubes in a layer and 2 '
      + 'layers is 24 cubes, which is 24 cubic centimetres, and a note '
      + 'that three measurements are why the unit is cubic.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Counting the cubes that fill the box</text>'
      + '<text x="120" y="64" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">looking down on it</text>'
      + '<rect x="40" y="78" width="160" height="120"/>'
      + '<line x1="80" y1="78" x2="80" y2="198" stroke-width="2"/>'
      + '<line x1="120" y1="78" x2="120" y2="198" stroke-width="2"/>'
      + '<line x1="160" y1="78" x2="160" y2="198" stroke-width="2"/>'
      + '<line x1="40" y1="118" x2="200" y2="118" stroke-width="2"/>'
      + '<line x1="40" y1="158" x2="200" y2="158" stroke-width="2"/>'
      + '<text x="120" y="226" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">4 by 3 is 12 cubes</text>'
      + '<text x="120" y="250" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">in one layer</text>'
      + '<text x="470" y="64" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">looking at it from the side</text>'
      + '<rect x="390" y="78" width="160" height="80"/>'
      + '<line x1="430" y1="78" x2="430" y2="158" stroke-width="2"/>'
      + '<line x1="470" y1="78" x2="470" y2="158" stroke-width="2"/>'
      + '<line x1="510" y1="78" x2="510" y2="158" stroke-width="2"/>'
      + '<line x1="390" y1="118" x2="550" y2="118" stroke-width="2"/>'
      + '<text x="470" y="226" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">2 layers high</text>'
      + '<text x="320" y="302" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">12 cubes in a layer, and 2 layers, is 24 cubes.</text>'
      + '<text x="320" y="340" font-size="22" text-anchor="middle" fill="#0f8a4d" stroke="none">24 cubic centimetres</text>'
      + '<text x="320" y="376" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Three measurements, so the unit is cubic.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Length, area and volume: how many measurements each needs '
      + 'and what each unit means',
    columns: [
      'You are finding',
      'Measurements needed',
      'What you are counting',
      'Unit',
    ],
    rows: [
      ['Length of a side', '1', 'Centimetres end to end', 'Centimetres'],
      [
        'Area of a surface',
        '2',
        'Squares covering it',
        'Square centimetres',
      ],
      ['Volume of a space', '3', 'Cubes filling it', 'Cubic centimetres'],
    ],
    note: 'One more direction each time, so one more measurement and one '
      + 'more word on the unit. The unit is how a reader knows which of '
      + 'the three you found.',
  }],
  questions: [
    {
      id: 'vl-1',
      ask: 'A box is 4 cm by 3 cm by 2 cm. What is its volume in cubic '
        + 'centimetres?',
      kind: 'numeric',
      answer: '24',
      accept: ['twenty four', 'twenty-four'],
      teach: 'Multiply all three: 4 times 3 is 12, times 2 is 24.',
      level: 5,
    },
    {
      id: 'vl-2',
      ask: 'How many cubic centimetres are in one litre?',
      kind: 'numeric',
      answer: '1000',
      accept: ['1,000', 'one thousand'],
      teach: 'A litre is a cube 10 cm each way, '
        + 'and 10 times 10 times 10 is 1,000.',
      level: 6,
    },
    {
      id: 'vl-3',
      ask: 'Why is volume measured in cubic units?',
      kind: 'choice',
      options: [
        'You are counting cubes filling a space',
        'The shape is always a cube',
        'It sounds more exact',
      ],
      answer: 'You are counting cubes filling a space',
      teach: 'Area counts squares on a surface, volume counts cubes in a '
        + 'space. Two measurements against three.',
      level: 6,
    },
    {
      id: 'vl-4',
      ask: 'What is volume?',
      kind: 'choice',
      options: [
        'The distance round a shape',
        'The amount of space something takes up',
        'The flat top of a shape',
      ],
      answer: 'The amount of space something takes up',
      teach: 'Distance round a shape is a length, and a flat surface is '
        + 'an area. Volume is the space a solid fills, so it needs '
        + 'three measurements.',
      level: 2,
    },
    {
      id: 'vl-5',
      ask: 'What is a cubic centimetre?',
      kind: 'choice',
      options: [
        'A square 1 cm on each side',
        'A line 1 cm long',
        'A cube 1 cm long, 1 cm wide and 1 cm high',
      ],
      answer: 'A cube 1 cm long, 1 cm wide and 1 cm high',
      teach: 'A square is flat, so it measures area. A cubic centimetre '
        + 'is a small cube 1 cm each way, and volume counts how many '
        + 'of them fill a box.',
      level: 2,
    },
    {
      id: 'vl-6',
      ask: 'A box is 5 cm long, 2 cm wide and 3 cm high. What is its '
        + 'volume in cubic centimetres?',
      kind: 'numeric',
      answer: '30',
      accept: ['thirty', '30 cm3', '30 cubic centimetres'],
      teach: 'Multiply all three: 5 times 2 is 10, and 10 times 3 is 30. '
        + 'Adding them gives 10, which is not a volume.',
      level: 3,
    },
    {
      id: 'vl-7',
      ask: 'The school water tank is 2 m long, 1 m wide and 1 m deep. '
        + 'What is its volume in cubic metres?',
      kind: 'numeric',
      answer: '2',
      accept: ['two', '2 m3', '2 cubic metres'],
      teach: 'Length times width times height: 2 times 1 is 2, and 2 '
        + 'times 1 is still 2. So the tank holds 2 cubic metres.',
      level: 3,
    },
    {
      id: 'vl-8',
      ask: 'For a box 4 cm by 3 cm by 2 cm, Kofi works out 4 times 3 '
        + 'and writes 12. What has he found?',
      kind: 'choice',
      options: [
        'The volume of the box',
        'The cubes in the bottom layer only',
        'The height of the box',
      ],
      answer: 'The cubes in the bottom layer only',
      teach: 'Two measurements give one flat layer of 12 cubes. The box '
        + 'is 2 layers high, so multiply by 2 as well: 24 cubic '
        + 'centimetres.',
      level: 4,
    },
    {
      id: 'vl-9',
      ask: 'A cube is 3 cm long, 3 cm wide and 3 cm high. What is its '
        + 'volume in cubic centimetres?',
      kind: 'numeric',
      answer: '27',
      accept: ['twenty seven', 'twenty-seven', '27 cm3'],
      teach: 'Multiply all three: 3 times 3 is 9, and 9 times 3 is 27. '
        + 'Stopping at 9 gives only the bottom layer, not the whole '
        + 'cube.',
      level: 4,
    },
    {
      id: 'vl-10',
      ask: 'A box is 10 cm by 10 cm by 20 cm. How many litres does it '
        + 'hold?',
      kind: 'numeric',
      answer: '2',
      accept: ['two', '2 litres'],
      teach: '10 times 10 is 100, and 100 times 20 is 2,000 cubic '
        + 'centimetres. Every 1,000 cubic centimetres is one litre, '
        + 'so 2,000 is 2 litres.',
      level: 5,
    },
  ],
})

/* ── the mean ─────────────────────────────────────────────────────────────── */

teach({
  topicId: 'average-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The mean is the total shared out equally. '
      + 'Add the numbers and divide by how many there are. '
      + 'It can be misleading when one value is extreme.',
    method: [
      'Add all the values.',
      'Divide by how many values there are.',
      'Look at the actual numbers before trusting it.',
    ],
  },

  why:
    'A teacher says the average score in the class test was 50. '
    + 'Your friend hears that and says it means half the class '
    + 'got 50. '
    + 'But one learner scored 100 and eight scored 44, and the '
    + 'average still comes out near 50. '
    + 'So what does an average actually tell you, and what does '
    + 'it hide?',

  notation:
    'The ordinary average is properly called the mean, and the '
    + 'two words mean the same thing here. '
    + 'It is worked out as the total divided by how many numbers '
    + 'there are. '
    + 'So the mean of 4, 5 and 6 is 15 divided by 3, which is 5. '
    + 'Dividing by the wrong count is the commonest way to lose a '
    + 'mark, so count the numbers again before you divide.',

  idea:
    'The mean is what everybody would have '
    + 'if the total were shared out equally. '
    + 'Add all the numbers and divide by how many there are. '
    + 'For 4, 6 and 8, the total is 18 and there are three, so the mean is 6.',

  mechanism:
    'The mean is useful because it turns many numbers into one, '
    + 'and dangerous for exactly the same reason. '
    + 'One extreme value drags it away from everybody. '
    + 'So the mean describes the group well when the values are close '
    + 'together '
    + 'and badly when one is far out. '
    + 'Always look at the actual numbers before you trust the average of '
    + 'them.',

  recap:
    'Adding a list of numbers means putting them all together '
    + 'into one total. '
    + 'Add 4, 6 and 8 and the total is 18. '
    + 'Dividing shares a total out equally, so 18 divided by 3 is '
    + '6 and three people would get 6 each. '
    + 'That is all the arithmetic this lesson needs. '
    + 'The hard part is not the working but deciding what the '
    + 'answer tells you.',

  method: [
    'Add all the values to get the total.',
    'Count how many values there are.',
    'Divide the total by the count.',
    'Now look at the original numbers.',
    'Is any one of them far from the rest?',
    'If so, say so. The mean alone would mislead.',
  ],

  worked: [
    {
      level: 5,
      ask: 'Find the mean of 4, 6 and 8.',
      steps: [
        'Add them: 18.',
        'There are three values.',
        '18 divided by 3.',
      ],
      answer: '6.',
    },
    {
      level: 6,
      ask: 'Four children have 2, 3, 3 and 40 sweets. '
        + 'What is the mean, and is it useful?',
      steps: [
        'Total is 48, divided by 4 is 12.',
        'But no child has anywhere near 12.',
        'The 40 has pulled the mean away from everybody.',
      ],
      answer: '12, and it describes nobody. '
        + 'One extreme value has made the mean misleading.',
    },
    {
      level: 6,
      ask: 'When is the mean a good description of a group?',
      steps: [
        'It works when the values cluster together.',
        'It fails when one is far from the rest.',
      ],
      answer: 'When the values are close to each other. '
        + 'Then the mean is near all of them.',
    },
  ],

  traps: [
    {
      mistake: 'Dividing by the wrong count.',
      why: 'Divide by how many values there are, not by the largest one '
        + 'or by ten.',
    },
    {
      mistake: 'Trusting the mean without looking at the numbers.',
      why: 'One extreme value can put the mean where nobody is. '
        + 'Always glance at the list.',
    },
    {
      mistake: 'Thinking the mean must be one of the values.',
      why: 'The mean of 4 and 7 is 5.5, which is neither. '
        + 'It describes the group, not a member of it.',
    },
  ],

  extension:
    'When one value is extreme, the middle value is often more honest. '
    + 'For 2, 3, 3 and 40, the middle is 3, '
    + 'which describes that group far better than 12 does. '
    + 'That is why reports about incomes usually give both.',

  figure: {
    alt: 'Four bars showing how many sweets four children have: 2, 3, 3 '
      + 'and 40. The first three bars are very short and the fourth is '
      + 'very tall. A broken line across the picture marks the mean at 12. '
      + 'It passes well above the three short bars and far below the tall '
      + 'one, and a note says not one child has 12.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Four children, and the mean of their sweets</text>'
      + '<rect x="70" y="278" width="70" height="12"/>'
      + '<rect x="190" y="272" width="70" height="18"/>'
      + '<rect x="310" y="272" width="70" height="18"/>'
      + '<rect x="430" y="50" width="70" height="240" stroke="#c8433a"/>'
      + '<line x1="40" y1="290" x2="600" y2="290"/>'
      + '<line x1="40" y1="218" x2="600" y2="218" stroke="#c8433a" stroke-dasharray="9 7"/>'
      + '<text x="596" y="208" font-size="15" text-anchor="end" fill="#c8433a" stroke="none">the mean, 12</text>'
      + '<text x="105" y="314" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">2</text>'
      + '<text x="225" y="314" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">3</text>'
      + '<text x="345" y="314" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">3</text>'
      + '<text x="465" y="314" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">40</text>'
      + '<text x="320" y="340" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">sweets each child has</text>'
      + '<text x="320" y="376" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">Not one child has 12.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Two groups with the same mean, one described well by it and '
      + 'one described badly',
    columns: [
      'The numbers',
      'Total',
      'Mean',
      'Does the mean describe them?',
    ],
    rows: [
      ['11, 12, 12, 13', '48', '12', 'Yes, all four are near 12'],
      ['2, 3, 3, 40', '48', '12', 'No, not one of them is near 12'],
    ],
    note: 'Four numbers each time, adding to 48, so the mean is 12 both '
      + 'times. Two completely different groups. That is why you look at '
      + 'the numbers and not only at the mean.',
  }],
  questions: [
    {
      id: 'av-1',
      ask: 'What is the mean of 4, 6 and 8?',
      kind: 'numeric',
      answer: '6',
      accept: ['six'],
      teach: 'Add to 18, then divide by the three values.',
      level: 5,
    },
    {
      id: 'av-2',
      ask: 'Four children have 2, 3, 3 and 40 sweets. What is the mean?',
      kind: 'numeric',
      answer: '12',
      accept: ['twelve'],
      teach: '48 divided by 4 is 12, '
        + 'and notice that no child has anything like 12.',
      level: 6,
    },
    {
      id: 'av-3',
      ask: 'When is a mean misleading?',
      kind: 'choice',
      options: [
        'When one value is far from the rest',
        'When there are too many values',
        'When the numbers are large',
      ],
      answer: 'When one value is far from the rest',
      teach: 'One extreme value drags the mean away from everybody, '
        + 'so it ends up describing nobody.',
      level: 6,
    },
    {
      id: 'av-4',
      ask: 'What is the first step in finding the mean?',
      kind: 'choice',
      options: [
        'Pick the middle number',
        'Divide by the largest number',
        'Add all the values',
      ],
      answer: 'Add all the values',
      teach: 'The mean is the total shared out equally, so you need the '
        + 'total first. Then divide it by how many values there are.',
      level: 2,
    },
    {
      id: 'av-5',
      ask: 'Abena scores 7, 8 and 9 in three tests. What is her mean '
        + 'score?',
      kind: 'numeric',
      answer: '8',
      accept: ['eight'],
      teach: '7 and 8 and 9 is 24. There are three scores, so 24 divided '
        + 'by 3 is 8.',
      level: 2,
    },
    {
      id: 'av-6',
      ask: 'What is the mean of 2, 4, 6 and 8?',
      kind: 'numeric',
      answer: '5',
      accept: ['five'],
      teach: 'The total is 20. There are four numbers, so divide by 4, '
        + 'not by 2 or by 8. 20 divided by 4 is 5.',
      level: 3,
    },
    {
      id: 'av-7',
      ask: 'Kwame sells 10, 20, 30 and 40 oranges on four days. What '
        + 'is the mean number he sells in a day?',
      kind: 'numeric',
      answer: '25',
      accept: ['twenty five', 'twenty-five', '25 oranges'],
      teach: '10 and 20 and 30 and 40 is 100. There are four days, so '
        + '100 divided by 4 is 25. The mean does not have to be one '
        + 'of the numbers.',
      level: 3,
    },
    {
      id: 'av-8',
      ask: 'What is the mean of 4 and 7?',
      kind: 'numeric',
      answer: '5.5',
      accept: ['5 1/2', 'five and a half', '5.50'],
      teach: '4 and 7 is 11, and there are two numbers. 11 divided by 2 '
        + 'is 5.5. It is neither 4 nor 7, and that is allowed.',
      level: 4,
    },
    {
      id: 'av-9',
      ask: 'Two groups both have a mean of 12. Which group does the '
        + 'mean describe well?',
      kind: 'choice',
      options: ['2, 3, 3 and 40', '11, 12, 12 and 13', 'Both of them equally'],
      answer: '11, 12, 12 and 13',
      teach: 'Both groups add to 48 over four numbers. In 11, 12, 12 and '
        + '13 every value is near 12. In 2, 3, 3 and 40 nobody is '
        + 'near 12.',
      level: 4,
    },
    {
      id: 'av-10',
      ask: 'Five children have 1, 1, 2, 2 and 44 cedis. The mean is 10 '
        + 'cedis. What does that tell you about the group?',
      kind: 'choice',
      options: [
        'Most of them have about 10 cedis',
        'Very little, because one child has far more than the rest',
        'Every child has 10 cedis',
      ],
      answer: 'Very little, because one child has far more than the rest',
      teach: 'The 44 drags the mean up. Four of the five children have 2 '
        + 'cedis or less. Always look at the numbers before trusting '
        + 'the mean.',
      level: 5,
    },
  ],
})

/* ── chance ───────────────────────────────────────────────────────────────── */

teach({
  topicId: 'chance-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Some things are certain, some impossible, '
      + 'and most are somewhere between: likely or unlikely. '
      + 'A past result does not change the next one.',
    method: [
      'Ask whether it must happen, cannot happen, or might.',
      'If it might, ask how many ways it can and cannot.',
      'Remember the coin has no memory.',
    ],
  },

  why:
    'There are 10 sachets of water in a bowl and 3 of them are '
    + 'warm. '
    + 'You put your hand in without looking and take one. '
    + 'Saying you will probably get a cold one does not tell '
    + 'anybody how sure you are. '
    + 'How do you say how likely the warm one is, using a number?',

  notation:
    'Chance is written as a fraction, so 3 out of 10 is written '
    + '3 over 10. '
    + 'The bottom number is the total number of things that could '
    + 'happen. '
    + 'The top number is how many of them count as the one you '
    + 'are asking about. '
    + 'A chance of 0 means it cannot happen and a chance of 1 '
    + 'means it is certain, so every chance sits between 0 and 1. '
    + 'A top number bigger than the bottom one is the commonest '
    + 'way to lose a mark, because it would mean more than '
    + 'certain.',

  idea:
    'Some things are certain, some are impossible, '
    + 'and most sit between. '
    + 'We call those likely or unlikely. '
    + 'Chance is about describing where something sits, '
    + 'and then counting the ways it could happen.',

  mechanism:
    'The idea worth fixing now is that the past does not change the future '
    + 'in a game of chance. '
    + 'A coin that has landed heads five times running '
    + 'is just as likely to give heads next time. '
    + 'The coin has no memory and no sense of fairness. '
    + 'People feel strongly that tails is now "due", '
    + 'and that feeling has cost a great many people a great deal of money. '
    + 'Each toss is a fresh event with the same two outcomes.',

  recap:
    'A fraction describes part of a whole. '
    + 'Cut a loaf into 8 equal pieces, take 3, and you have 3 out '
    + 'of 8, written 3 over 8. '
    + 'The bottom number says how many equal parts there are '
    + 'altogether, and the top says how many of them you mean. '
    + 'This lesson uses exactly that. '
    + 'The bottom number becomes how many things could happen, '
    + 'and the top becomes how many of them are the one you want.',

  method: [
    'Ask: must it happen? Then it is certain.',
    'Ask: can it happen at all? If not, it is impossible.',
    'Otherwise, count the ways it can happen.',
    'Count all the possible outcomes.',
    'More ways to happen than not means likely.',
    'Remember each try is separate from the last.',
  ],

  worked: [
    {
      level: 5,
      ask: 'A bag has 9 red balls and 1 blue. '
        + 'Is drawing red likely or unlikely?',
      steps: [
        'Nine ways out of ten give red.',
      ],
      answer: 'Likely.',
    },
    {
      level: 6,
      ask: 'A coin has landed heads five times. '
        + 'Is tails more likely next time?',
      steps: [
        'The coin has two sides and no memory.',
        'The next toss is a fresh event.',
      ],
      answer: 'No. It is still an even chance.',
    },
    {
      level: 6,
      ask: 'Is it certain that it will rain in Accra next year?',
      steps: [
        'Certain means it must happen with no possibility otherwise.',
        'Rain is extremely likely, and not logically guaranteed.',
      ],
      answer: 'Not certain, though very likely indeed. '
        + 'Certain is a stronger word than people usually mean.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a run of one result makes the other one due.',
      why: 'The coin has no memory. '
        + 'This belief has cost people a great deal of money.',
    },
    {
      mistake: 'Using certain for something merely very likely.',
      why: 'Certain means it cannot be otherwise. '
        + 'Most things we are sure about are not certain.',
    },
    {
      mistake: 'Judging chance by how much you want it.',
      why: 'Wanting a result does not alter how many ways it can happen.',
    },
  ],

  extension:
    'Chance can be written as a fraction: '
    + 'one head out of two outcomes is a half. '
    + 'Writing it that way lets you compare chances precisely '
    + 'rather than arguing about whether something is likely, '
    + 'and that is where the JHS work begins.',

  figure: {
    alt: 'Five coins in a row have all landed heads. An arrow leads from '
      + 'them to the next toss, drawn as one larger coin split down the '
      + 'middle with heads on one side and tails on the other. A note says '
      + 'it is still one chance in two, exactly as before, and a warning '
      + 'says tails is not due because the coin does not know.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">A coin has no memory</text>'
      + '<circle cx="70" cy="96" r="28"/>'
      + '<text x="70" y="104" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">H</text>'
      + '<circle cx="140" cy="96" r="28"/>'
      + '<text x="140" y="104" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">H</text>'
      + '<circle cx="210" cy="96" r="28"/>'
      + '<text x="210" y="104" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">H</text>'
      + '<circle cx="280" cy="96" r="28"/>'
      + '<text x="280" y="104" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">H</text>'
      + '<circle cx="350" cy="96" r="28"/>'
      + '<text x="350" y="104" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">H</text>'
      + '<text x="210" y="158" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">five tosses already done</text>'
      + '<line x1="390" y1="96" x2="438" y2="96"/>'
      + '<polygon points="448,96 434,89 434,103" fill="currentColor" stroke="none"/>'
      + '<circle cx="528" cy="96" r="46" stroke="#0f8a4d"/>'
      + '<line x1="528" y1="50" x2="528" y2="142" stroke="#0f8a4d"/>'
      + '<text x="506" y="104" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">H</text>'
      + '<text x="550" y="104" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">T</text>'
      + '<text x="528" y="170" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">the next toss</text>'
      + '<text x="320" y="238" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">Still one chance in two, exactly as before.</text>'
      + '<text x="320" y="294" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">Tails is not due. The coin does not know</text>'
      + '<text x="320" y="320" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">what it did last time.</text>'
      + '<text x="320" y="368" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">Each toss is a fresh event with the same two outcomes.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Where different events sit between impossible and certain',
    columns: ['Event', 'Where it sits', 'Ways it can happen'],
    rows: [
      ['A goat lays an egg', 'Impossible', 'None at all'],
      [
        'Drawing blue from 9 red and 1 blue',
        'Unlikely',
        '1 way out of 10',
      ],
      ['A coin landing heads', 'An even chance', '1 way out of 2'],
      [
        'Drawing red from 9 red and 1 blue',
        'Likely',
        '9 ways out of 10',
      ],
      ['The sun rising tomorrow', 'Certain', 'There is no other way'],
    ],
    note: 'The last column is the useful one. Likely and unlikely are '
      + 'feelings until you have counted the ways.',
  }],
  questions: [
    {
      id: 'ch-1',
      ask: 'A bag has 9 red and 1 blue ball. Drawing red is:',
      kind: 'choice',
      options: ['Likely', 'Unlikely', 'Impossible'],
      answer: 'Likely',
      teach: 'Nine of the ten possible draws give red.',
      level: 5,
    },
    {
      id: 'ch-2',
      ask: 'A coin lands heads five times. Is tails now more likely?',
      kind: 'choice',
      options: ['No', 'Yes'],
      answer: 'No',
      teach: 'The coin has no memory. '
        + 'Every toss is a fresh even chance.',
      level: 6,
    },
    {
      id: 'ch-3',
      ask: 'What does certain mean?',
      kind: 'choice',
      options: [
        'It cannot be otherwise',
        'It is very likely',
        'It usually happens',
      ],
      answer: 'It cannot be otherwise',
      teach: 'It is a stronger word than people usually mean. '
        + 'Most things we are sure of are merely very likely.',
      level: 6,
    },
    {
      id: 'ch-4',
      ask: 'A goat lays an egg. That is:',
      kind: 'choice',
      options: ['Unlikely', 'Impossible', 'Certain'],
      answer: 'Impossible',
      teach: 'A goat cannot lay an egg in any way at all. No ways for it '
        + 'to happen means impossible, not just unlikely.',
      level: 2,
    },
    {
      id: 'ch-5',
      ask: 'A bag has 9 red balls and 1 blue. Drawing blue is:',
      kind: 'choice',
      options: ['Impossible', 'Likely', 'Unlikely'],
      answer: 'Unlikely',
      teach: 'There is one blue ball, so it can happen and is not '
        + 'impossible. But only 1 of the 10 draws gives blue, so it '
        + 'is unlikely.',
      level: 2,
    },
    {
      id: 'ch-6',
      ask: 'A bag holds only red balls. Drawing a red ball is:',
      kind: 'choice',
      options: ['Certain', 'Likely', 'An even chance'],
      answer: 'Certain',
      teach: 'Every ball in the bag is red, so there is no other way it '
        + 'can go. Something that must happen is certain.',
      level: 3,
    },
    {
      id: 'ch-7',
      ask: 'A coin landing heads is:',
      kind: 'choice',
      options: ['Certain', 'An even chance', 'Unlikely'],
      answer: 'An even chance',
      teach: 'A coin has two sides and one of them is heads. That is 1 '
        + 'way out of 2, which is an even chance.',
      level: 3,
    },
    {
      id: 'ch-8',
      ask: 'Yaw says: I really want a blue ball, so blue is likely. '
        + 'What is wrong with that?',
      kind: 'choice',
      options: [
        'Wanting a result does not change how many ways it can happen',
        'Nothing, he is right',
        'Blue balls are always impossible',
      ],
      answer: 'Wanting a result does not change how many ways it can happen',
      teach: 'Chance comes from counting the ways, not from how much you '
        + 'want something. 1 blue in 10 balls is unlikely whatever '
        + 'Yaw hopes.',
      level: 4,
    },
    {
      id: 'ch-9',
      ask: 'There are 10 sachets of water in a bowl and 3 are warm. '
        + 'What is the chance of taking a warm one?',
      kind: 'choice',
      options: ['7 over 10', '10 over 3', '3 over 10'],
      answer: '3 over 10',
      teach: 'The bottom number is everything that could happen: 10 '
        + 'sachets. The top is the ones you are asking about: 3 warm. '
        + 'So 3 over 10.',
      level: 4,
    },
    {
      id: 'ch-10',
      ask: 'Which of these could never be a chance?',
      kind: 'choice',
      options: ['1 over 2', '0', '5 over 4', '1'],
      answer: '5 over 4',
      teach: 'Every chance sits between 0, impossible, and 1, certain. 5 '
        + 'over 4 has a top bigger than the bottom, which would mean '
        + 'more than certain.',
      level: 5,
    },
  ],
})

/* ── taking part in a discussion ──────────────────────────────────────────── */

teach({
  topicId: 'discussion',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Give your view with a reason. '
      + 'Listen to the other person properly before answering. '
      + 'Disagree with the point, not with the person.',
    method: [
      'State your view and give one reason.',
      'Listen to the reply all the way through.',
      'Answer their reason, not their character.',
    ],
  },

  why:
    'In class two of you disagree about whether learners should '
    + 'wear uniform. '
    + 'You both have things to say, and you both say them loudly '
    + 'at the same time. '
    + 'Twenty minutes later nobody has changed their mind and '
    + 'nothing is settled. '
    + 'What makes the difference between an argument and a '
    + 'discussion?',

  idea:
    'In a discussion people give their views and respond to each other. '
    + 'A view without a reason is just a preference. '
    + 'The useful part is always the reason.',

  mechanism:
    'There is one habit that separates a discussion from an argument, '
    + 'and it is this: respond to what the other person actually said. '
    + 'Most arguments go wrong because each side answers a version of the '
    + 'other that is easier to beat. '
    + 'The test is whether you could state their view well enough '
    + 'that they would agree you had got it right. '
    + 'If you can, you are discussing. '
    + 'If you cannot, you are arguing with somebody who is not in the room.',

  recap:
    'A short talk is a few points, each with a reason behind '
    + 'it. '
    + 'Say that school should start later, then give the reason: '
    + 'many learners walk an hour to get there. '
    + 'The point is what you think, and the reason is why anybody '
    + 'else should agree. '
    + 'A discussion is built out of points and reasons in the '
    + 'same way. '
    + 'The difference is that other people are speaking too, and '
    + 'what they say may change what you were going to say next.',

  method: [
    'State your view in one sentence, and give one reason for it.',
    'Then stop and listen all the way through.',
    'Before replying, say their point back in your own words.',
    'Check with them that you got it right.',
    'Answer the reason they gave, not the one you wish they had given.',
    'Disagree with what was said, never with the person who said it.',
  ],

  worked: [
    {
      level: 5,
      ask: 'What should always come with your view?',
      steps: [
        'A view alone cannot be discussed.',
      ],
      answer: 'A reason.',
    },
    {
      level: 6,
      ask: 'How do you check you understood somebody before replying?',
      steps: [
        'Say their point back in your own words.',
        'Ask whether you got it right.',
      ],
      answer: 'Restate their point and see if they agree that is what they '
        + 'meant.',
    },
    {
      level: 6,
      ask: 'Somebody makes a point you cannot answer. What should you do?',
      steps: [
        'Pretending otherwise is obvious to everybody.',
        'Saying so is what makes a discussion worth having.',
      ],
      answer: 'Say it is a good point. '
        + 'You can still disagree overall, and you have kept your credit.',
    },
  ],

  traps: [
    {
      mistake: 'Answering a weaker version of what was said.',
      why: 'It feels like winning and convinces nobody who was listening.',
    },
    {
      mistake: 'Attacking the person instead of the point.',
      why: 'It ends the discussion and tells everybody you had no answer.',
    },
    {
      mistake: 'Planning your reply instead of listening.',
      why: 'You will answer what you expected rather than what was said.',
    },
  ],

  extension:
    'The strongest thing you can do in a discussion '
    + 'is state the other side’s case better than they did '
    + 'and then explain why you still disagree. '
    + 'Nobody can accuse you of misunderstanding, '
    + 'and everybody listening knows you have actually thought about it.',

  figure: {
    alt: 'Two panels, each holding the same three remarks. In the panel '
      + 'headed a discussion, A says school should start later, B replies '
      + 'that A is saying pupils would be more awake, and A agrees that is '
      + 'the point. In the panel headed an argument, A says the same '
      + 'thing, B replies that A wants pupils to do no work at all, and A '
      + 'says that is not what was said. Underneath, the test: say their '
      + 'point back, and if they agree you got it right, you are '
      + 'discussing.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">The test for a discussion</text>'
      + '<rect x="20" y="44" width="290" height="248" stroke="#0f8a4d"/>'
      + '<text x="165" y="72" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">a discussion</text>'
      + '<rect x="36" y="88" width="258" height="44" rx="8"/>'
      + '<text x="165" y="116" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">A: school should start later</text>'
      + '<rect x="36" y="146" width="258" height="62" rx="8"/>'
      + '<text x="165" y="170" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">B: you are saying pupils</text>'
      + '<text x="165" y="192" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">would be more awake</text>'
      + '<rect x="36" y="222" width="258" height="44" rx="8" stroke="#0f8a4d"/>'
      + '<text x="165" y="250" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">A: yes, that is my point</text>'
      + '<rect x="330" y="44" width="290" height="248" stroke="#c8433a"/>'
      + '<text x="475" y="72" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">an argument</text>'
      + '<rect x="346" y="88" width="258" height="44" rx="8"/>'
      + '<text x="475" y="116" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">A: school should start later</text>'
      + '<rect x="346" y="146" width="258" height="62" rx="8"/>'
      + '<text x="475" y="170" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">B: so you want pupils to</text>'
      + '<text x="475" y="192" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">do no work at all</text>'
      + '<rect x="346" y="222" width="258" height="44" rx="8" stroke="#c8433a"/>'
      + '<text x="475" y="250" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">A: that is not what I said</text>'
      + '<text x="320" y="334" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Say their point back to them. If they agree you</text>'
      + '<text x="320" y="360" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">got it right, you are having a discussion.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'The same six moments in a discussion and in an argument',
    columns: ['The moment', 'In a discussion', 'In an argument'],
    rows: [
      ['Who is speaking', 'One at a time', 'Both at once'],
      ['While they speak', 'You listen to the end', 'You plan your reply'],
      [
        'What you answer',
        'The reason they gave',
        'A version easier to beat',
      ],
      ['What you disagree with', 'The point', 'The person'],
      ['When they are right', 'You say so', 'You change the subject'],
      ['At the end', 'Both of you know more', 'Nobody has moved'],
    ],
    note: 'Every entry in the middle column is harder in the moment and '
      + 'worth more afterwards.',
  }],
  questions: [
    {
      id: 'ds-1',
      ask: 'What must go with your view in a discussion?',
      kind: 'choice',
      options: ['A reason', 'A loud voice', 'An example from a book'],
      answer: 'A reason',
      teach: 'A view with no reason cannot be discussed, only repeated.',
      level: 5,
    },
    {
      id: 'ds-2',
      ask: 'How can you tell you understood somebody?',
      kind: 'choice',
      options: [
        'You can state their point so they agree you got it right',
        'You disagree with it',
        'You remember their words',
      ],
      answer: 'You can state their point so they agree you got it right',
      teach: 'That is the test. '
        + 'If you cannot, you are arguing with somebody who is not there.',
      level: 6,
    },
    {
      id: 'ds-3',
      ask: 'Somebody makes a point you cannot answer. What is best?',
      kind: 'choice',
      options: [
        'Say it is a good point',
        'Change the subject',
        'Say they are wrong anyway',
      ],
      answer: 'Say it is a good point',
      teach: 'Everybody listening already noticed. '
        + 'Admitting it keeps your credit and you can still disagree overall.',
      level: 6,
    },
    {
      id: 'ds-4',
      ask: 'Which of these is a view with a reason?',
      kind: 'choice',
      options: [
        'School should start later',
        'I just think school should start later',
        'School should start later because many learners walk an hour to get there',
      ],
      answer: 'School should start later because many learners walk an hour to get there',
      teach: 'The first two only give a view. The reason is the part '
        + 'that starts with because, and it is what others can '
        + 'discuss.',
      level: 2,
    },
    {
      id: 'ds-5',
      ask: 'While the other person is speaking, what should you do?',
      kind: 'choice',
      options: [
        'Plan your reply',
        'Listen all the way to the end',
        'Speak at the same time',
      ],
      answer: 'Listen all the way to the end',
      teach: 'If you plan your reply while they speak, you answer what '
        + 'you expected them to say instead of what they said.',
      level: 2,
    },
    {
      id: 'ds-6',
      ask: 'A view with no reason behind it is:',
      kind: 'choice',
      options: ['Just a preference', 'A strong argument', 'A fact'],
      answer: 'Just a preference',
      teach: 'Without a reason nobody can weigh it or answer it. The '
        + 'reason is the useful part of any view.',
      level: 3,
    },
    {
      id: 'ds-7',
      ask: 'Before you reply to somebody, what should you do first?',
      kind: 'choice',
      options: [
        'Tell them they are wrong',
        'Give three new reasons',
        'Say their point back in your own words',
      ],
      answer: 'Say their point back in your own words',
      teach: 'Saying their point back and checking it is right shows you '
        + 'understood. Then you answer what they really said.',
      level: 3,
    },
    {
      id: 'ds-8',
      ask: 'Kofi says uniform saves families money. Akosua answers: '
        + 'you are just lazy. What has gone wrong?',
      kind: 'choice',
      options: [
        'She gave a good reason',
        'She attacked the person, not the point',
        'She listened well',
      ],
      answer: 'She attacked the person, not the point',
      teach: 'Kofi gave a reason about money, and Akosua said nothing '
        + 'about money. Answer the reason. Attacking the person ends '
        + 'the discussion.',
      level: 3,
    },
    {
      id: 'ds-9',
      ask: 'Ama says school should start later so learners are more '
        + 'awake. Kwame answers: so you want us to do no work at all. '
        + 'What has Kwame done?',
      kind: 'choice',
      options: [
        'Answered a weaker version of what she said',
        'Said her point back fairly',
        'Agreed with her',
      ],
      answer: 'Answered a weaker version of what she said',
      teach: 'Ama never said no work. Kwame beat a view she does not '
        + 'hold. Ask whether Ama would agree you got her point right.',
      level: 4,
    },
    {
      id: 'ds-10',
      ask: 'What is the strongest thing you can do in a discussion?',
      kind: 'choice',
      options: [
        'Speak louder than the others',
        'Refuse to answer hard points',
        'State their side well, then explain why you still disagree',
      ],
      answer: 'State their side well, then explain why you still disagree',
      teach: 'Nobody can say you misunderstood, and everybody can see '
        + 'you thought about it. Loudness wins nothing.',
      level: 5,
    },
  ],
})

/* ── summarising ──────────────────────────────────────────────────────────── */

teach({
  topicId: 'summarise-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A summary says the same thing in far fewer words. '
      + 'Keep what the passage was about. '
      + 'Cut examples, repetition and detail.',
    method: [
      'Read it all, then find the main idea of each paragraph.',
      'Write those in your own words.',
      'Cut examples and repetition, keep the point.',
    ],
  },

  why:
    'Your teacher gives you a full page about how cocoa is '
    + 'grown and asks you to tell the class about it in four '
    + 'sentences. '
    + 'Everything on the page looks worth keeping. '
    + 'Copy out the first four sentences and you miss nearly all '
    + 'of it. '
    + 'How do you decide what to drop?',

  idea:
    'A summary says what a passage said, in far fewer words. '
    + 'It keeps what mattered and drops the rest: '
    + 'examples, repetition, description and detail.',

  mechanism:
    'Deciding what to cut is the whole skill, '
    + 'and there is a test for it. '
    + 'Remove something and ask whether the passage still means the same. '
    + 'If it does, it was detail. '
    + 'An example usually illustrates a point that is stated elsewhere, '
    + 'so the example goes and the point stays. '
    + 'The other rule is to use your own words, '
    + 'because copying sentences is the fastest way to end up with a '
    + 'summary that is half the original and summarises nothing.',

  recap:
    'The main idea of a passage is what the whole thing is '
    + 'mostly about. '
    + 'Each paragraph has a main idea too, and it usually sits in '
    + 'the first or the last sentence. '
    + 'If a paragraph describes a market, with the noise, the '
    + 'traders and the smell, the main idea is the market and the '
    + 'rest are details. '
    + 'So a passage of four paragraphs has four main ideas inside '
    + 'it. '
    + 'This lesson puts those main ideas together in order, and '
    + 'that is what a summary is.',

  method: [
    'Read the whole passage first.',
    'Find the main idea of each paragraph and note it in a few words.',
    'Put your notes aside and write from them, not from the passage.',
    'Go through what you wrote and cut whatever the meaning survives '
      + 'without.',
    'Read your summary. Does somebody who has not read the original '
      + 'understand what it said?',
  ],

  worked: [
    {
      level: 5,
      ask: 'What should always be cut from a summary?',
      steps: [
        'Examples illustrate a point stated elsewhere.',
        'Repetition adds nothing.',
      ],
      answer: 'Examples and repetition.',
    },
    {
      level: 6,
      ask: 'Why write from notes rather than from the passage?',
      steps: [
        'With the passage in front of you, you copy its sentences.',
        'Copied sentences are long and are not yours.',
      ],
      answer: 'Because looking at the original makes you copy it '
        + 'instead of summarising it.',
    },
    {
      level: 6,
      ask: 'How can you tell if something can be cut?',
      steps: [
        'Take it out.',
        'Ask whether the meaning changed.',
      ],
      answer: 'Remove it and see whether the passage still says the same '
        + 'thing. If it does, it was detail.',
    },
  ],

  traps: [
    {
      mistake: 'Copying whole sentences from the passage.',
      why: 'That is shortening, not summarising, '
        + 'and it is usually obvious.',
    },
    {
      mistake: 'Keeping the examples and cutting the point.',
      why: 'Examples are memorable, which is why they get kept. '
        + 'The point is what the passage was for.',
    },
    {
      mistake: 'Adding your own opinion.',
      why: 'A summary reports what was said. '
        + 'What you think about it is a different piece of writing.',
    },
  ],

  extension:
    'Being able to summarise is how you check you understood something. '
    + 'If you cannot say a chapter in four sentences, '
    + 'you probably read it without following it, '
    + 'and that is worth knowing before an examination rather than during '
    + 'one.',

  figure: {
    alt: 'Three panels with arrows between them. The first, headed the '
      + 'passage, is eight lines of writing. The second, headed cross out '
      + 'what the meaning survives without, is the same eight lines with '
      + 'four of them marked in the margin. The third, headed the summary, '
      + 'is the four lines that are left. Underneath, the test: take '
      + 'something out and ask whether the passage still means the same, '
      + 'and if it does, it was detail.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">A summary keeps the point and drops the rest</text>'
      + '<rect x="20" y="48" width="170" height="202"/>'
      + '<text x="105" y="74" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">the passage</text>'
      + '<line x1="36" y1="100" x2="174" y2="100" stroke-width="2"/>'
      + '<line x1="36" y1="122" x2="174" y2="122" stroke-width="2"/>'
      + '<line x1="36" y1="144" x2="174" y2="144" stroke-width="2"/>'
      + '<line x1="36" y1="166" x2="174" y2="166" stroke-width="2"/>'
      + '<line x1="36" y1="188" x2="174" y2="188" stroke-width="2"/>'
      + '<line x1="36" y1="210" x2="174" y2="210" stroke-width="2"/>'
      + '<line x1="36" y1="232" x2="120" y2="232" stroke-width="2"/>'
      + '<line x1="200" y1="150" x2="232" y2="150"/>'
      + '<polygon points="242,150 228,143 228,157" fill="currentColor" stroke="none"/>'
      + '<rect x="252" y="48" width="170" height="202"/>'
      + '<text x="337" y="74" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">cross out the detail</text>'
      + '<line x1="282" y1="100" x2="406" y2="100" stroke-width="2"/>'
      + '<line x1="282" y1="122" x2="406" y2="122" stroke-width="2"/>'
      + '<line x1="282" y1="144" x2="406" y2="144" stroke-width="2"/>'
      + '<line x1="282" y1="166" x2="406" y2="166" stroke-width="2"/>'
      + '<line x1="282" y1="188" x2="406" y2="188" stroke-width="2"/>'
      + '<line x1="282" y1="210" x2="406" y2="210" stroke-width="2"/>'
      + '<line x1="282" y1="232" x2="356" y2="232" stroke-width="2"/>'
      + '<line x1="262" y1="117" x2="274" y2="127" stroke="#c8433a" stroke-width="2"/>'
      + '<line x1="274" y1="117" x2="262" y2="127" stroke="#c8433a" stroke-width="2"/>'
      + '<line x1="262" y1="139" x2="274" y2="149" stroke="#c8433a" stroke-width="2"/>'
      + '<line x1="274" y1="139" x2="262" y2="149" stroke="#c8433a" stroke-width="2"/>'
      + '<line x1="262" y1="183" x2="274" y2="193" stroke="#c8433a" stroke-width="2"/>'
      + '<line x1="274" y1="183" x2="262" y2="193" stroke="#c8433a" stroke-width="2"/>'
      + '<line x1="262" y1="227" x2="274" y2="237" stroke="#c8433a" stroke-width="2"/>'
      + '<line x1="274" y1="227" x2="262" y2="237" stroke="#c8433a" stroke-width="2"/>'
      + '<line x1="432" y1="150" x2="464" y2="150"/>'
      + '<polygon points="474,150 460,143 460,157" fill="currentColor" stroke="none"/>'
      + '<rect x="484" y="48" width="136" height="202" stroke="#0f8a4d"/>'
      + '<text x="552" y="74" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">the summary</text>'
      + '<line x1="498" y1="100" x2="606" y2="100" stroke="#0f8a4d" stroke-width="2"/>'
      + '<line x1="498" y1="122" x2="606" y2="122" stroke="#0f8a4d" stroke-width="2"/>'
      + '<line x1="498" y1="144" x2="606" y2="144" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="320" y="296" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Take something out. Does the passage still</text>'
      + '<text x="320" y="322" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">mean the same?</text>'
      + '<text x="320" y="364" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">If it does, it was detail.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'What stays in a summary and what goes',
    columns: ['Part of the passage', 'Keep or cut', 'Why'],
    rows: [
      [
        'The main idea of a paragraph',
        'Keep',
        'It is what the passage said',
      ],
      [
        'An example of that idea',
        'Cut',
        'The idea it shows is stated elsewhere',
      ],
      ['Anything said twice', 'Cut', 'The second time adds nothing'],
      [
        'How a thing looked',
        'Cut',
        'The meaning survives without it',
      ],
      [
        'A number the argument rests on',
        'Keep',
        'Remove it and the point collapses',
      ],
      [
        'A quotation that proves a point',
        'Cut',
        'Say what it proved, in your own words',
      ],
    ],
    note: 'The test for every row is the same. Take it out and see '
      + 'whether the meaning changed.',
  }],
  questions: [
    {
      id: 'sm-1',
      ask: 'What should be cut from a summary?',
      kind: 'choice',
      options: [
        'Examples and repetition',
        'The main ideas',
        'Anything difficult',
      ],
      answer: 'Examples and repetition',
      teach: 'An example illustrates a point stated elsewhere. '
        + 'Keep the point, cut the illustration.',
      level: 5,
    },
    {
      id: 'sm-2',
      ask: 'Why write a summary from notes rather than the original?',
      kind: 'choice',
      options: [
        'Looking at the original makes you copy it',
        'Notes are shorter',
        'It is faster',
      ],
      answer: 'Looking at the original makes you copy it',
      teach: 'Copied sentences produce a shortened passage, not a summary.',
      level: 6,
    },
    {
      id: 'sm-3',
      ask: 'Should a summary include your opinion?',
      kind: 'choice',
      options: ['No', 'Yes'],
      answer: 'No',
      teach: 'A summary reports what was said. '
        + 'Your view on it is a different piece of writing.',
      level: 6,
    },
    {
      id: 'sm-4',
      ask: 'What is a summary?',
      kind: 'choice',
      options: [
        'A copy of the first few sentences',
        'The same passage said in far fewer words',
        'Your opinion of the passage',
      ],
      answer: 'The same passage said in far fewer words',
      teach: 'Copying the first sentences misses most of the passage, '
        + 'and opinion is a different piece of writing. A summary '
        + 'keeps the meaning in fewer words.',
      level: 2,
    },
    {
      id: 'sm-5',
      ask: 'What should you do first when summarising?',
      kind: 'choice',
      options: [
        'Read the whole passage',
        'Start writing straight away',
        'Copy the first four sentences',
      ],
      answer: 'Read the whole passage',
      teach: 'You cannot tell what mattered until you have read all of '
        + 'it. Then find the main idea of each paragraph.',
      level: 2,
    },
    {
      id: 'sm-6',
      ask: 'Where does the main idea of a paragraph usually sit?',
      kind: 'choice',
      options: [
        'In the middle sentence',
        'In the first or the last sentence',
        'In the longest word',
      ],
      answer: 'In the first or the last sentence',
      teach: 'Writers usually state the point at the start of a '
        + 'paragraph or sum it up at the end. The middle is mostly '
        + 'detail.',
      level: 3,
    },
    {
      id: 'sm-7',
      ask: 'A passage has four paragraphs. How many main ideas should '
        + 'your notes have?',
      kind: 'numeric',
      answer: '4',
      accept: ['four'],
      teach: 'Each paragraph has one main idea, so four paragraphs give '
        + 'four main ideas. Put them together in order and you have '
        + 'the summary.',
      level: 3,
    },
    {
      id: 'sm-8',
      ask: 'How can you tell whether a sentence can be cut?',
      kind: 'choice',
      options: [
        'Cut anything long',
        'Cut anything difficult',
        'Take it out and see whether the meaning changed',
      ],
      answer: 'Take it out and see whether the meaning changed',
      teach: 'Long or difficult does not mean unimportant. If the '
        + 'passage still means the same without it, it was detail.',
      level: 3,
    },
    {
      id: 'sm-9',
      ask: 'A paragraph says: Cocoa needs shade to grow well. For '
        + 'example, farmers plant it under taller trees. What belongs '
        + 'in the summary?',
      kind: 'choice',
      options: [
        'Cocoa needs shade to grow well',
        'Farmers plant it under taller trees',
        'Both sentences, word for word',
      ],
      answer: 'Cocoa needs shade to grow well',
      teach: 'The second sentence is an example of the first. Keep the '
        + 'point and cut the example, because the point is what the '
        + 'paragraph was for.',
      level: 4,
    },
    {
      id: 'sm-10',
      ask: 'A passage gives a number that its whole point rests on. '
        + 'What do you do with it?',
      kind: 'choice',
      options: [
        'Keep it, because the point falls apart without it',
        'Cut it, because numbers are detail',
        'Cut it, because numbers are hard to read',
      ],
      answer: 'Keep it, because the point falls apart without it',
      teach: 'Use the test: take it out and see if the meaning changed. '
        + 'Here it does, so the number stays.',
      level: 4,
    },
  ],
})

/* ── describing and explaining in writing ─────────────────────────────────── */

teach({
  topicId: 'describe-and-explain',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A description helps somebody picture a thing. '
      + 'An explanation helps somebody do or understand a thing. '
      + 'They are different jobs and need different writing.',
    method: [
      'Describing: go in an order, and name what is distinctive.',
      'Explaining: steps in order, one action each, nothing assumed.',
      'Test it on somebody who does not already know.',
    ],
  },

  why:
    'A friend has to find your house for the first time. '
    + 'You write to him: it is a nice house near the junction. '
    + 'He walks past it twice and then phones you. '
    + 'The same week your small brother asks how to boil rice. '
    + 'You write: just cook it until it is soft. '
    + 'He burns it. '
    + 'Both pieces of writing failed. '
    + 'But they failed for two different reasons, '
    + 'and right now you cannot say what either reason was. '
    + 'Being able to say it is what this topic gives you.',

  idea:
    'Describing and explaining are different jobs. '
    + 'A description lets the reader picture something. '
    + 'An explanation lets them do it or understand why it works. '
    + 'Writing that mixes the two usually does neither well.',

  mechanism:
    'They fail in different ways, which is the useful thing to know. '
    + 'A reader cannot assemble a picture from details arriving at random, '
    + 'so a description needs an order: top to bottom, or near to far, '
    + 'and then keep to it. '
    + 'An explanation is different. '
    + 'The reader stops dead at the first gap and cannot go on, '
    + 'so nothing may be left out. '
    + 'Which is why the person who wrote it is the worst person to test '
    + 'it: '
    + 'the task is already in your head, '
    + 'so you fill the gap without noticing it is there.',

  recap:
    'A description is writing that puts a thing in front of the reader. '
    + 'Here is one: a blue door with a brass handle, '
    + 'and one panel split near the bottom. '
    + 'Somebody who has never seen that door could now pick it out '
    + 'from ten others. '
    + 'Instructions are a different kind of writing. '
    + 'They are the steps of a job, set down in the order you do them. '
    + 'Here are some: wash the maize, grind it, then add water. '
    + 'Nobody pictures anything from that, but anybody can follow it. '
    + 'This lesson is about telling which of the two a task is asking for.',

  method: [
    'Decide which job you are doing before you write.',
    'Describing: choose an order and keep to it.',
    'Describing: name what makes this one different from similar things.',
    'Explaining: one action per step, in order.',
    'Explaining: assume nothing. List what is needed first.',
    'Test it on somebody who does not already know the thing.',
    'Watch where they stop. That is where your writing failed.',
  ],

  worked: [
    {
      level: 5,
      ask: 'Is "how to make kenkey" a description or an explanation?',
      steps: [
        'It tells somebody how to do something.',
      ],
      answer: 'An explanation.',
    },
    {
      level: 6,
      ask: 'How do you test a description?',
      steps: [
        'A description is for picturing.',
        'So ask somebody to picture it.',
      ],
      answer: 'Ask somebody to draw it from your words, and see what they '
        + 'draw.',
    },
    {
      level: 6,
      ask: 'Your explanation works for you but confuses everybody else. Why?',
      steps: [
        'The task is already in your head, so you fill in gaps '
          + 'without noticing.',
        'Your reader cannot.',
      ],
      answer: 'You assumed something. '
        + 'Watch somebody follow it and the gap appears exactly where they '
        + 'stop.',
    },
  ],

  traps: [
    {
      mistake: 'Describing details in no particular order.',
      why: 'The reader cannot build a picture from random pieces. '
        + 'Pick an order and keep it.',
    },
    {
      mistake: 'Assuming knowledge in an explanation.',
      why: 'The reader stops at the gap. '
        + 'Only somebody who does not know the task will find it for you.',
    },
    {
      mistake: 'Mixing the two in one paragraph.',
      why: 'They pull against each other. '
        + 'Describe, then explain, in separate paragraphs.',
    },
  ],

  extension:
    'Almost all technical writing is these two skills, '
    + 'and so is most of a science examination answer. '
    + 'Knowing which of the two you have been asked for '
    + 'is worth more marks than writing either one beautifully.',

  figure: {
    alt: 'Two panels. The left panel, headed describing, so the reader can '
      + 'picture it, holds three boxes in order: top, a red roof; middle, '
      + 'two windows; bottom, a blue door. A note says that with no order '
      + 'there is no picture. The right panel, headed explaining, so the '
      + 'reader can do it, holds step one, wash the maize, then a broken '
      + 'box where a step was never written, then step three, leave it to '
      + 'ferment. A note says the reader stops at the gap.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Two jobs, and how each one fails</text>'
      + '<rect x="20" y="44" width="290" height="246"/>'
      + '<text x="165" y="72" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">describing</text>'
      + '<text x="165" y="96" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">so the reader can picture it</text>'
      + '<rect x="46" y="112" width="238" height="36"/>'
      + '<text x="165" y="136" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">1. top: a red roof</text>'
      + '<rect x="46" y="158" width="238" height="36"/>'
      + '<text x="165" y="182" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">2. middle: two windows</text>'
      + '<rect x="46" y="204" width="238" height="36"/>'
      + '<text x="165" y="228" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">3. bottom: a blue door</text>'
      + '<text x="165" y="268" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">With no order, no picture.</text>'
      + '<rect x="330" y="44" width="290" height="246"/>'
      + '<text x="475" y="72" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">explaining</text>'
      + '<text x="475" y="96" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">so the reader can do it</text>'
      + '<rect x="356" y="112" width="238" height="36"/>'
      + '<text x="475" y="136" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">1. wash the maize</text>'
      + '<rect x="356" y="158" width="238" height="36" stroke="#c8433a" stroke-dasharray="7 6"/>'
      + '<text x="475" y="182" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">2. the step nobody wrote</text>'
      + '<rect x="356" y="204" width="238" height="36"/>'
      + '<text x="475" y="228" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">3. leave it to ferment</text>'
      + '<text x="475" y="268" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">The reader stops at the gap.</text>'
      + '<text x="320" y="334" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Test a description by asking somebody to draw it.</text>'
      + '<text x="320" y="364" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Test an explanation by asking somebody to follow it.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'A description and an explanation, compared',
    columns: [
      'The question',
      'A description',
      'An explanation',
    ],
    rows: [
      ['What is its job?', 'The reader pictures it', 'The reader can do it'],
      [
        'What must it have?',
        'An order you keep to',
        'Every step, nothing assumed',
      ],
      [
        'How does it fail?',
        'Details arrive at random',
        'A gap the reader stops at',
      ],
      [
        'How do you test it?',
        'Ask somebody to draw it',
        'Ask somebody to follow it',
      ],
      [
        'What does the exam call it?',
        'Describe what happens',
        'Explain why it happens',
      ],
    ],
  }],
  questions: [
    {
      id: 'de-1',
      ask: '"How to make kenkey" is:',
      kind: 'choice',
      options: ['An explanation', 'A description'],
      answer: 'An explanation',
      teach: 'It tells somebody how to do something, '
        + 'so it needs ordered, complete steps.',
      level: 5,
    },
    {
      id: 'de-2',
      ask: 'How do you test a description?',
      kind: 'choice',
      options: [
        'Ask somebody to draw it from your words',
        'Count the adjectives',
        'Read it aloud',
      ],
      answer: 'Ask somebody to draw it from your words',
      teach: 'A description is for picturing, so test whether they can '
        + 'picture it.',
      level: 6,
    },
    {
      id: 'de-3',
      ask: 'Why does your explanation confuse other people but not you?',
      kind: 'choice',
      options: [
        'You fill in gaps without noticing because you know the task',
        'They are not reading carefully',
        'It is too short',
      ],
      answer: 'You fill in gaps without noticing because you know the task',
      teach: 'That is why you test it on somebody who does not know it. '
        + 'They stop exactly at the gap.',
      level: 6,
    },
    {
      id: 'de-4',
      ask: 'Which of these is a description?',
      kind: 'choice',
      options: [
        'Wash the maize, grind it, then add water',
        'A blue door with a brass handle',
        'First switch on the light',
      ],
      answer: 'A blue door with a brass handle',
      teach: 'A description lets the reader picture a thing. Wash, grind '
        + 'and switch on are steps to do, so those are instructions.',
      level: 2,
    },
    {
      id: 'de-5',
      ask: 'Each step in a set of instructions should have:',
      kind: 'choice',
      options: [
        'One action',
        'As many actions as fit',
        'A description of the room',
      ],
      answer: 'One action',
      teach: 'Several actions in one step are easy to miss. One action '
        + 'per step, in order, lets the reader do them one at a time.',
      level: 2,
    },
    {
      id: 'de-6',
      ask: 'What must a good description have?',
      kind: 'choice',
      options: [
        'Numbered steps',
        'An order you keep to, like top to bottom',
        'A list of things needed',
      ],
      answer: 'An order you keep to, like top to bottom',
      teach: 'Numbered steps and lists of things needed belong to '
        + 'instructions. A reader cannot build a picture from details '
        + 'that arrive at random.',
      level: 3,
    },
    {
      id: 'de-7',
      ask: 'How do you test a set of instructions?',
      kind: 'choice',
      options: [
        'Read them again yourself',
        'Ask somebody who does not know the task to follow them',
        'Make them longer',
      ],
      answer: 'Ask somebody who does not know the task to follow them',
      teach: 'The task is already in your head, so you fill the gaps without '
        + 'noticing. Somebody new stops exactly where a step is '
        + 'missing.',
      level: 3,
    },
    {
      id: 'de-8',
      ask: 'A question says: explain why it happens. What kind of '
        + 'writing does it want?',
      kind: 'choice',
      options: ['A description', 'A summary', 'An explanation'],
      answer: 'An explanation',
      teach: 'Explain asks you to help the reader understand why. '
        + 'Describe asks what it looks like or what happens. Read the '
        + 'question word first.',
      level: 3,
    },
    {
      id: 'de-9',
      ask: 'You write to a friend: it is a nice house near the '
        + 'junction. He walks past it twice. What was wrong with the '
        + 'description?',
      kind: 'choice',
      options: [
        'It named nothing that makes this house different',
        'It was too long',
        'It had too many steps',
      ],
      answer: 'It named nothing that makes this house different',
      teach: 'Nice could be any house. Name what is different about this '
        + 'one, such as a blue door or a mango tree in front.',
      level: 4,
    },
    {
      id: 'de-10',
      ask: 'Your brother is told: just cook the rice until it is soft. '
        + 'He burns it. Why did the instructions fail?',
      kind: 'choice',
      options: [
        'They described the rice too much',
        'Steps were left out, so he did not know what to do',
        'They were in a strange order',
      ],
      answer: 'Steps were left out, so he did not know what to do',
      teach: 'The writer knew how much water and how long, and left it '
        + 'out. In an explanation nothing may be assumed: list what '
        + 'is needed and every step.',
      level: 4,
    },
  ],
})
