/**
 * Stored lessons for JHS 2 Integrated Science: life and agriculture.
 *
 * Written at about grade 7, with a `brief` form on every topic.
 *
 * ── The organ systems are written as one argument, not four ────────────────
 *
 * Digestion, circulation, respiration and photosynthesis are taught as four
 * separate systems and they are one problem solved four ways: a cell needs
 * fuel and oxygen, and the fuel and oxygen are not where the cell is. So
 * digestion makes food small enough to cross into the blood, the blood
 * carries it, breathing brings the oxygen to the blood, and respiration is
 * what the cell finally does with both. Each of these four lessons names
 * that chain, because a learner who sees it cannot mix up breathing with
 * respiration, which is the error the syllabus specifically asks about.
 *
 * ── On reproduction in humans ──────────────────────────────────────────────
 *
 * Written plainly, with the correct terms, at the level the syllabus sets:
 * the organs, puberty, the menstrual cycle, fertilisation. It states what
 * happens biologically and stops there. It does not moralise, and it does
 * not substitute vagueness for the facts, because a learner who is not told
 * plainly is left with whatever they heard elsewhere.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── reproduction in plants ─────────────────────────────────────────────── */

teach({
  topicId: 'reproduction-plants',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Pollination is pollen reaching a stigma. '
      + 'Fertilisation is the male nucleus joining the egg inside the '
      + 'ovule. '
      + 'They are two separate events and pollination comes first. '
      + 'The male parts are the stamens; the female part is the carpel.',
    method: [
      'Name the part and the job together.',
      'Keep pollination and fertilisation separate.',
      'For a flower’s features, ask whether wind or insects carry its '
        + 'pollen.',
    ],
  },

  why:
    'A mango tree in your compound flowers heavily every year '
    + 'and sets hardly any fruit. '
    + 'The tree is healthy and nothing has damaged the flowers. '
    + 'A farmer nearby with the same variety fills baskets. '
    + 'Flowering is clearly not the same thing as fruiting, so '
    + 'what has to happen in between?',

  idea:
    'A flower has male and female parts. '
    + 'The stamen is male: an anther on a filament, '
    + 'and the anther makes pollen. '
    + 'The carpel is female: a stigma on a style, '
    + 'leading down to an ovary that contains ovules. '
    + 'Pollination is the transfer of pollen from an anther to a stigma, '
    + 'by insects, wind, water or animals. '
    + 'Self pollination is within one flower or plant; '
    + 'cross pollination is between two plants of the same kind. '
    + 'Fertilisation happens afterwards: '
    + 'the pollen grows a tube down the style, '
    + 'and a male nucleus joins the egg cell in an ovule. '
    + 'The ovule then becomes a seed and the ovary becomes the fruit.',

  mechanism:
    'Pollination and fertilisation are treated as one word by most '
    + 'learners, '
    + 'and the examination separates them deliberately. '
    + 'They are two events with a gap between them. '
    + 'Pollination is transport: pollen arriving at a stigma, outside the '
    + 'plant’s tissue. '
    + 'At that moment nothing has joined and no seed exists. '
    + 'Fertilisation is the joining of nuclei, '
    + 'and it happens inside the ovule, after the pollen tube has grown '
    + 'down. '
    + 'A flower can be pollinated and still produce no seed, '
    + 'which proves they are different, '
    + 'and that happens whenever the pollen is from the wrong species. '
    + 'The features of a flower then stop being a list to memorise, '
    + 'because they are all answers to one question: '
    + 'what carries this plant’s pollen? '
    + 'An insect pollinated flower has to attract and reward an animal, '
    + 'so it spends on petals, scent and nectar. '
    + 'A wind pollinated flower attracts nothing and wastes nothing on '
    + 'any of them, and instead throws out enormous amounts of light '
    + 'dry pollen, because wind has very poor aim. '
    + 'Given one feature of either, you can work out the rest.',

  recap:
    'A flower turns into a fruit with seeds in it. '
    + 'Watch one mango flower for a few weeks and the petals '
    + 'fall, the base swells, and a small green mango is left '
    + 'where the flower stood. '
    + 'Insects move from flower to flower after nectar, and they '
    + 'carry dust from inside the flower on their bodies as they '
    + 'go. '
    + 'So something passes between flowers, and afterwards seeds '
    + 'appear. '
    + 'This lesson names the parts involved and separates two '
    + 'events that are easy to run together: the dust arriving, '
    + 'and the joining that follows it.',

  method: [
    'Name the male parts: anther and filament, making the stamen.',
    'Name the female parts: stigma, style, ovary and ovules, '
      + 'making the carpel.',
    'For pollination, say where the pollen came from and what carried it.',
    'For fertilisation, describe the pollen tube and the joining of '
      + 'nuclei.',
    'Say what the ovule and the ovary become.',
    'For a flower’s features, decide the agent first, then explain each '
      + 'feature from it.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which part of a flower makes pollen?',
      steps: [
        'Pollen is the male part.',
        'It is made at the top of the stamen.',
      ],
      answer: 'The anther.',
    },
    {
      level: 4,
      ask: 'A flower has no petals, no scent, and anthers hanging outside. '
        + 'How is it pollinated?',
      steps: [
        'Petals and scent attract animals, and it has neither.',
        'Anthers outside are exposed to moving air.',
      ],
      answer: 'By wind. '
        + 'It spends nothing on attracting insects '
        + 'because it does not need them.',
    },
    {
      level: 5,
      ask: 'A flower is pollinated but produces no seed. How is that '
        + 'possible?',
      steps: [
        'Pollination is only the arrival of pollen on a stigma.',
        'Fertilisation is a separate, later event.',
        'If the pollen is from a different species, no tube grows '
          + 'successfully.',
        'So no nuclei join and no ovule becomes a seed.',
      ],
      answer: 'Because pollination and fertilisation are different events. '
        + 'Pollen can arrive and still fail to fertilise, '
        + 'for instance if it came from another species.',
    },
  ],

  traps: [
    {
      mistake: 'Using pollination and fertilisation as the same word.',
      why: 'One is pollen arriving; the other is nuclei joining. '
        + 'The examination separates them on purpose.',
    },
    {
      mistake: 'Saying the ovule becomes the fruit.',
      why: 'The ovule becomes the seed. '
        + 'The ovary becomes the fruit around it.',
    },
    {
      mistake: 'Learning flower features as a list.',
      why: 'They all follow from what carries the pollen. '
        + 'Decide the agent and the features explain themselves.',
    },
    {
      mistake: 'Thinking self pollination is a failure.',
      why: 'It is reliable but gives less variation. '
        + 'Cross pollination gives variation at the cost of needing a '
        + 'carrier.',
    },
  ],

  extension:
    'A plant can also reproduce without seeds, '
    + 'from a runner, a tuber, a cutting or a sucker. '
    + 'That gives an exact copy of the parent, '
    + 'which is why farmers use it for a variety they want kept the same, '
    + 'such as cassava or plantain.',

  figure: {
    alt: 'A flower cut in half. The stamen is a filament carrying an '
      + 'anther, and the carpel is a stigma on a style leading down to '
      + 'an ovary holding two ovules. A line runs from the stigma down '
      + 'inside the style to an ovule, which is the pollen tube growing '
      + 'down after pollination.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">pollination is transport, fertilisation is joining</text>'
      + '<text x="40" y="72" font-size="14" text-anchor="start" fill="currentColor" stroke="none">the stamen is male: anther and filament</text>'
      + '<text x="40" y="94" font-size="14" text-anchor="start" fill="currentColor" stroke="none">the carpel is female: stigma, style and ovary</text>'
      + '<path d="M 276 296 L 150 236 L 162 196 L 288 252 Z"/>'
      + '<path d="M 364 296 L 490 236 L 478 196 L 352 252 Z"/>'
      + '<line x1="180" y1="214" x2="132" y2="196"/>'
      + '<text x="126" y="192" font-size="14" text-anchor="end" fill="currentColor" stroke="none">petal</text>'
      + '<line x1="320" y1="316" x2="320" y2="352" stroke-width="6"/>'
      + '<ellipse cx="320" cy="286" rx="48" ry="30"/>'
      + '<circle cx="306" cy="286" r="8"/>'
      + '<circle cx="334" cy="286" r="8"/>'
      + '<line x1="320" y1="256" x2="320" y2="168" stroke-width="4"/>'
      + '<ellipse cx="320" cy="156" rx="28" ry="12"/>'
      + '<line x1="348" y1="152" x2="420" y2="130"/>'
      + '<text x="426" y="126" font-size="14" text-anchor="start" fill="currentColor" stroke="none">stigma</text>'
      + '<line x1="324" y1="200" x2="420" y2="176"/>'
      + '<text x="426" y="172" font-size="14" text-anchor="start" fill="currentColor" stroke="none">style</text>'
      + '<line x1="366" y1="290" x2="440" y2="300"/>'
      + '<text x="446" y="304" font-size="14" text-anchor="start" fill="currentColor" stroke="none">ovary</text>'
      + '<line x1="332" y1="294" x2="398" y2="338"/>'
      + '<text x="404" y="344" font-size="13" text-anchor="start" fill="currentColor" stroke="none">ovule</text>'
      + '<line x1="300" y1="276" x2="258" y2="196" stroke-width="3"/>'
      + '<ellipse cx="254" cy="188" rx="16" ry="9"/>'
      + '<line x1="240" y1="184" x2="182" y2="162"/>'
      + '<text x="176" y="158" font-size="14" text-anchor="end" fill="currentColor" stroke="none">anther</text>'
      + '<line x1="284" y1="244" x2="176" y2="296"/>'
      + '<text x="170" y="302" font-size="13" text-anchor="end" fill="currentColor" stroke="none">filament</text>'
      + '<line x1="340" y1="276" x2="382" y2="196" stroke-width="3"/>'
      + '<ellipse cx="386" cy="188" rx="16" ry="9"/>'
      + '<path d="M 314 168 L 310 230 L 306 280" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="320" y="376" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">pollen reaching the stigma is pollination</text>'
      + '<text x="320" y="396" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">the tube grows down and the nuclei join: that is fertilisation</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Pollination and fertilisation, which are two events and not '
        + 'one',
      columns: ['The question', 'Pollination', 'Fertilisation'],
      rows: [
        ['What happens', 'Pollen lands on a stigma', 'Two nuclei join'],
        ['Where', 'On the stigma, outside the tissue', 'Inside an ovule'],
        ['When', 'First', 'After the pollen tube has grown down the style'],
        ['Does a seed exist yet', 'No', 'Yes, the ovule becomes one'],
      ],
      note: 'A flower can be pollinated and still make no seed, which is '
        + 'what happens when the pollen came from the wrong species, and '
        + 'it is the proof that the two are different.',
    },
    {
      caption: 'Insect pollinated and wind pollinated flowers, feature by '
        + 'feature',
      columns: ['Feature', 'Insect pollinated', 'Wind pollinated'],
      rows: [
        ['Petals', 'Large and brightly coloured', 'Small, green, or none'],
        ['Scent and nectar', 'Present, as the reward', 'Absent, nothing to attract'],
        ['Anthers', 'Inside, so a visitor brushes them', 'Hanging outside, in the air'],
        [
          'Stigma',
          'Small and sticky, inside the flower',
          'Large and feathery, outside',
        ],
        [
          'Pollen',
          'Heavy and sticky, in small amounts',
          'Light and dry, in enormous amounts',
        ],
      ],
      note: 'Every row answers the same question: what carries this pollen. '
        + 'Given one feature you can work out the other four.',
    },
  ],
  questions: [
    {
      id: 'rep-1',
      ask: 'What is pollination?',
      kind: 'choice',
      options: [
        'Pollen reaching a stigma',
        'A male nucleus joining an egg',
        'A seed forming',
      ],
      answer: 'Pollen reaching a stigma',
      teach: 'Fertilisation, the joining of nuclei, happens afterwards.',
      level: 3,
    },
    {
      id: 'rep-2',
      ask: 'A flower has bright petals and nectar. What carries its pollen?',
      kind: 'choice',
      options: ['Insects', 'Wind', 'Water'],
      answer: 'Insects',
      teach: 'Petals and nectar exist to attract and reward an animal.',
      level: 4,
    },
    {
      id: 'rep-3',
      ask: 'The ovary of a flower becomes:',
      kind: 'choice',
      options: ['the fruit', 'the seed', 'the stigma'],
      answer: 'the fruit',
      teach: 'The ovules inside it become the seeds.',
      level: 5,
    },
  ],
})

/* ── reproduction in humans ─────────────────────────────────────────────── */

teach({
  topicId: 'reproduction-humans',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The male system makes sperm in the testes. '
      + 'The female system releases an egg from an ovary each month '
      + 'and carries a pregnancy in the uterus. '
      + 'Puberty is the body becoming able to reproduce. '
      + 'A pregnancy begins when a sperm fertilises an egg in the oviduct.',
    method: [
      'Name each organ with its job, not its position.',
      'Keep the cycle in order: egg released, lining built, '
        + 'then either pregnancy or a period.',
      'Use the correct terms. They are the ones the examination uses.',
    ],
  },

  why:
    'A girl of thirteen finds she is bleeding, '
    + 'and nobody has told her this was coming. '
    + 'She thinks she is injured or ill. '
    + 'She stays away from school for three days. '
    + 'Next month it happens again, '
    + 'and she still cannot say whether it is normal, '
    + 'how long it should last, '
    + 'or why it happens at all. '
    + 'Guessing is not good enough here, '
    + 'and there is a plain biological answer. '
    + 'This topic is that answer.',

  idea:
    'The male system makes sperm and delivers it. '
    + 'The female system holds the eggs and releases one about every 28 '
    + 'days. '
    + 'It also prepares a place in the uterus for a fertilised egg to '
    + 'grow. '
    + 'Puberty is the stage when these systems mature, '
    + 'driven by hormones: '
    + 'in boys the voice deepens and body hair grows; '
    + 'in girls the breasts develop and menstruation begins; '
    + 'in both there is a growth spurt and changes in skin and mood. '
    + 'If a sperm meets the egg in the oviduct, fertilisation happens, '
    + 'and the fertilised egg implants in the uterus lining and develops. '
    + 'If no fertilisation happens, the lining is shed as a period.',

  mechanism:
    'The menstrual cycle makes sense only in order, '
    + 'and learners who memorise the dates without the order confuse it '
    + 'every time. '
    + 'Follow the purpose. '
    + 'The uterus must be ready before an egg could possibly need it, '
    + 'so the lining thickens in advance, under hormones. '
    + 'About the middle of the cycle an ovary releases an egg, '
    + 'which is ovulation, '
    + 'and the egg survives about a day in the oviduct. '
    + 'From then the body is waiting. '
    + 'If a sperm reaches the egg in that window, '
    + 'the fertilised egg travels on and implants in the prepared lining, '
    + 'and the lining is kept. '
    + 'If nothing arrives, keeping the lining costs the body for no reason, '
    + 'so it is shed, and that bleeding is the period. '
    + 'Then the cycle starts again. '
    + 'Seen that way, a period is not a failure or an illness. '
    + 'It is the body clearing a preparation that was not needed. '
    + 'Two things follow that are worth stating plainly. '
    + 'First, fertilisation happens in the oviduct and not in the uterus, '
    + 'which is why the egg is only available for a short part of the '
    + 'cycle. '
    + 'Second, the cycle varies between people and between months, '
    + 'so 28 days is an average and not a rule, '
    + 'and nothing about the biology guarantees regularity, '
    + 'especially in the first years after puberty.',

  recap:
    'Reproduction is how living things make new living things '
    + 'of their own kind. '
    + 'A maize plant makes seeds, and each seed can grow into maize. '
    + 'A hen lays an egg, and a chick comes out of it. '
    + 'In animals this takes two cells, one from a male and one from a '
    + 'female, and the two join to start the new individual. '
    + 'Puberty is the stretch of years, '
    + 'roughly from ten to sixteen, '
    + 'when a child\u2019s body changes into a body that can do this. '
    + 'The changes are driven by chemical messengers called hormones, '
    + 'which are made inside the body and carried in the blood. '
    + 'This lesson gives the organs, what each one does, '
    + 'and the order the monthly cycle runs in.',

  method: [
    'Name the male organs and what each does.',
    'Name the female organs and what each does.',
    'For puberty, separate the changes in boys, in girls, and in both.',
    'For the cycle, keep the order: lining thickens, egg released, '
      + 'then pregnancy or a period.',
    'Say where fertilisation happens: in the oviduct.',
    'Say what implantation is and where it happens.',
    'Use the proper terms throughout.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Where are sperm made, and where are eggs stored?',
      steps: [
        'Name the organ for each.',
      ],
      answer: 'Sperm are made in the testes. '
        + 'Eggs are stored in the ovaries.',
    },
    {
      level: 4,
      ask: 'Why does the lining of the uterus thicken before ovulation?',
      steps: [
        'A fertilised egg needs somewhere prepared to implant.',
        'Preparing it afterwards would be too late.',
      ],
      answer: 'So that a fertilised egg has a prepared lining to implant '
        + 'in. The preparation has to come first.',
    },
    {
      level: 5,
      ask: 'Why is a period not a sign that something has gone wrong?',
      steps: [
        'The lining was built in case an egg was fertilised.',
        'If none was, there is nothing to implant.',
        'Keeping the lining would cost the body for nothing.',
        'So it is shed and the cycle begins again.',
      ],
      answer: 'Because it is the body clearing a preparation that was not '
        + 'needed. '
        + 'No egg was fertilised, so the thickened lining is shed and the '
        + 'cycle restarts.',
    },
  ],

  traps: [
    {
      mistake: 'Saying fertilisation happens in the uterus.',
      why: 'It happens in the oviduct. '
        + 'The fertilised egg then travels to the uterus to implant.',
    },
    {
      mistake: 'Treating 28 days as a fixed law.',
      why: 'It is an average. '
        + 'Cycles vary between people and between months.',
    },
    {
      mistake: 'Mixing up the urethra and the vagina in the female system.',
      why: 'They are separate openings with separate jobs.',
    },
    {
      mistake: 'Using vague words instead of the correct terms.',
      why: 'The examination uses oviduct, uterus, cervix and ovulation, '
        + 'and so should your answer.',
    },
  ],

  extension:
    'A pregnancy is supported by the placenta, '
    + 'where the mother’s blood and the baby’s blood come close without '
    + 'mixing, '
    + 'so food and oxygen pass one way and waste passes the other. '
    + 'It is the circulatory system solving the same supply problem again.',

  figure: {
    alt: 'The menstrual cycle drawn as a bar of 28 days. Days 1 to 5 are '
      + 'the lining being shed, days 6 to 13 are the lining thickening '
      + 'again, about day 14 an ovary releases an egg, and the rest of '
      + 'the cycle is the body waiting to find out whether the lining '
      + 'is needed.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">the cycle in order, and every step has a purpose</text>'
      + '<path d="M 60 140 H 580 V 190 H 60 Z"/>'
      + '<line x1="153" y1="140" x2="153" y2="190"/>'
      + '<line x1="302" y1="140" x2="302" y2="190"/>'
      + '<line x1="321" y1="140" x2="321" y2="190"/>'
      + '<text x="106" y="170" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">shed</text>'
      + '<text x="228" y="170" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">thickening</text>'
      + '<text x="450" y="170" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">waiting</text>'
      + '<line x1="311" y1="138" x2="311" y2="114"/>'
      + '<text x="311" y="104" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">ovulation, about day 14</text>'
      + '<text x="60" y="212" font-size="13" text-anchor="start" fill="currentColor" stroke="none">day 1</text>'
      + '<text x="153" y="212" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">day 5</text>'
      + '<text x="302" y="212" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">day 14</text>'
      + '<text x="580" y="212" font-size="13" text-anchor="end" fill="currentColor" stroke="none">day 28</text>'
      + '<text x="320" y="262" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">if a fertilised egg implants, the lining is kept</text>'
      + '<text x="320" y="290" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">if nothing arrives, the lining is shed, and that is the period</text>'
      + '<text x="320" y="330" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so a period is the body clearing a preparation it did not need</text>'
      + '<text x="320" y="364" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">fertilisation happens in the oviduct, never in the uterus</text>'
      + '<text x="320" y="390" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">and 28 days is an average, not a rule</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The menstrual cycle in order, and what the body is doing at '
        + 'each stage',
      columns: ['Days', 'What happens', 'Why it happens then'],
      rows: [
        [
          '1 to 5',
          'The lining is shed, which is the period',
          'The preparation was not needed',
        ],
        [
          '6 to 13',
          'The lining thickens again',
          'It must be ready before an egg could need it',
        ],
        [
          'About 14',
          'An ovary releases an egg, which is ovulation',
          'The egg then survives about a day in the oviduct',
        ],
        [
          '15 to 28',
          'The body waits',
          'The lining is kept if an egg implants, and shed if none does',
        ],
      ],
      note: '28 days is an average and not a rule. The cycle varies between '
        + 'people and between months, and most of all in the first years '
        + 'after puberty.',
    },
    {
      caption: 'The parts of the two systems, and what each one does',
      columns: ['Part', 'System', 'What it does'],
      rows: [
        ['Testes', 'Male', 'Make sperm, and the hormone testosterone'],
        [
          'Sperm duct',
          'Male',
          'Carries sperm, which mixes with gland fluid to make semen',
        ],
        ['Urethra', 'Male', 'Carries the semen out through the penis'],
        [
          'Ovaries',
          'Female',
          'Hold the eggs from birth, and release about one a month',
        ],
        [
          'Oviduct',
          'Female',
          'Carries the egg to the uterus, and is where fertilisation happens',
        ],
        ['Uterus', 'Female', 'Where a fertilised egg implants and develops'],
        ['Cervix', 'Female', 'The neck of the uterus, opening into the vagina'],
      ],
      note: 'The oviduct row is the one most often got wrong. Fertilisation '
        + 'happens there and not in the uterus.',
    },
  ],
  questions: [
    {
      id: 'rph-1',
      ask: 'Which organ carries a developing baby?',
      kind: 'choice',
      options: ['The uterus', 'The ovary', 'The oviduct'],
      answer: 'The uterus',
      teach: 'The ovary releases the egg and the oviduct carries it.',
      level: 3,
    },
    {
      id: 'rph-2',
      ask: 'Where does fertilisation normally happen?',
      kind: 'choice',
      options: ['In the oviduct', 'In the uterus', 'In the ovary'],
      answer: 'In the oviduct',
      teach: 'The fertilised egg then travels on to implant in the uterus.',
      level: 4,
    },
    {
      id: 'rph-3',
      ask: 'What is shed during a period?',
      kind: 'choice',
      options: [
        'The thickened lining of the uterus',
        'The ovaries',
        'An unfertilised ovary',
      ],
      answer: 'The thickened lining of the uterus',
      teach: 'It was prepared in case of a pregnancy, '
        + 'and is cleared when there is none.',
      level: 5,
    },
  ],
})

/* ── the digestive system ──────────────────────────────────────────────── */

teach({
  topicId: 'digestive-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Digestion makes food small enough to pass into the blood. '
      + 'Amylase breaks starch to sugar, '
      + 'protease breaks protein to amino acids, '
      + 'lipase breaks fats to fatty acids and glycerol. '
      + 'Absorption happens in the small intestine '
      + 'and water is taken back in the large one.',
    method: [
      'Follow the food in order and name what happens at each place.',
      'Pair each enzyme with the food it breaks and what it becomes.',
      'Explain every structure by the surface area it provides.',
    ],
  },

  why:
    'You eat a ball of kenkey, and an hour later you are no '
    + 'longer hungry and you have energy to walk. '
    + 'The kenkey is not sitting in your arms or your legs, and '
    + 'nothing of the sort passed into them whole. '
    + 'Somewhere between your mouth and your muscles it stopped '
    + 'being kenkey. '
    + 'Where does that happen, and what does the body do to it on '
    + 'the way?',

  idea:
    'Digestion is one long tube, and the food is worked on differently '
    + 'at each stage of it. '
    + 'The products are absorbed through the wall of the small '
    + 'intestine into the blood, and what is left leaves at the end.',

  mechanism:
    'The whole system exists to solve one problem, '
    + 'and naming it makes every part of the lesson obvious. '
    + 'A cell in your foot needs fuel. '
    + 'The fuel is a piece of yam in your mouth. '
    + 'The only route from one to the other is the blood, '
    + 'and the blood runs inside vessels with walls. '
    + 'So the food has to become small enough to cross a wall. '
    + 'That is what digestion is for: not destroying the food, '
    + 'but reducing it to molecules that can pass through. '
    + 'Starch cannot cross; the sugar it is broken into can. '
    + 'Protein cannot cross; amino acids can. '
    + 'Every enzyme in the system is doing that one job on a different '
    + 'food. '
    + 'Then the structures explain themselves by surface area. '
    + 'Crossing a wall takes time, '
    + 'so the more wall there is, the more gets across. '
    + 'The small intestine is about six metres long, '
    + 'folded, and lined with millions of finger like villi, '
    + 'each of which has an even smaller fringe on it. '
    + 'The result is a surface the size of a room packed into your abdomen. '
    + 'Teeth and bile do the same thing earlier: '
    + 'chewing and emulsifying make the pieces smaller, '
    + 'which multiplies the surface the enzymes can work on. '
    + 'So the answer to almost any "why is it like that" question in this '
    + 'topic is: to increase the surface area.',

  recap:
    'Food that goes into your mouth is not the same food by the '
    + 'time it is of any use to you. '
    + 'You chew it, which breaks it into smaller pieces, and then '
    + 'you swallow it. '
    + 'Inside, it is broken down much further, into pieces small '
    + 'enough to pass into the blood, and that breaking down is '
    + 'called digestion. '
    + 'The useful parts are taken into the body and the rest '
    + 'leaves at the other end. '
    + 'This lesson follows the route from one end to the other, '
    + 'naming what breaks down where and why it has to happen '
    + 'there.',

  method: [
    'List the organs in order: mouth, oesophagus, stomach, small '
      + 'intestine, large intestine.',
    'At each one, say what is added and what happens.',
    'Pair each enzyme with its food and its products.',
    'Say where absorption happens, and into what.',
    'Say what the large intestine takes back.',
    'Explain any structural feature by surface area.',
    'Do not confuse the liver and the pancreas: '
      + 'bile from the liver, enzymes from the pancreas.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which enzyme acts on starch, and what does it produce?',
      steps: [
        'Starch is a carbohydrate.',
        'The enzyme for starch is amylase.',
      ],
      answer: 'Amylase, producing sugar.',
    },
    {
      level: 4,
      ask: 'Why is the small intestine so long and lined with villi?',
      steps: [
        'Absorption happens by crossing its wall.',
        'More wall means more absorption.',
        'Length, folding and villi all add wall area.',
      ],
      answer: 'To increase the surface area for absorption, '
        + 'so that far more food can cross into the blood.',
    },
    {
      level: 5,
      ask: 'Why must starch be digested at all, '
        + 'when the body could simply absorb it?',
      steps: [
        'Food must pass through the wall of the intestine to reach the '
          + 'blood.',
        'A starch molecule is far too large to cross.',
        'Sugar molecules are small enough.',
        'So breaking starch into sugar is what makes absorption possible.',
      ],
      answer: 'Because a starch molecule is too large to pass through the '
        + 'intestine wall. '
        + 'Digestion reduces it to sugar, which can cross into the blood.',
    },
  ],

  traps: [
    {
      mistake: 'Saying bile digests fat.',
      why: 'Bile breaks fat into droplets, which is physical. '
        + 'Lipase does the digesting.',
    },
    {
      mistake: 'Putting absorption in the large intestine.',
      why: 'Food is absorbed in the small intestine. '
        + 'The large intestine takes back water.',
    },
    {
      mistake: 'Naming an enzyme without naming its products.',
      why: 'The mark is for the pair: '
        + 'protease breaks protein into amino acids.',
    },
    {
      mistake: 'Confusing the liver with the pancreas.',
      why: 'The liver makes bile. '
        + 'The pancreas makes enzymes.',
    },
  ],

  extension:
    'Enzymes work best at body temperature. '
    + 'They also need the right acidity. '
    + 'That is why protease in the stomach needs acid. '
    + 'And it is why the enzymes further on need the alkaline conditions '
    + 'bile provides. '
    + 'Outside those ranges an enzyme stops working.',

  figure: {
    alt: 'The gut drawn as five stages one under another, from the mouth '
      + 'to the large intestine, with what happens at each written '
      + 'beside it: grinding and amylase, peristalsis, acid and '
      + 'protease, bile and the three enzymes, and finally water being '
      + 'taken back.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">digestion makes food small enough to cross a wall</text>'
      + '<path d="M 50 56 H 250 V 96 H 50 Z"/>'
      + '<text x="150" y="82" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">mouth</text>'
      + '<text x="264" y="82" font-size="14" text-anchor="start" fill="currentColor" stroke="none">teeth grind it, and amylase starts on starch</text>'
      + '<line x1="150" y1="96" x2="150" y2="112"/>'
      + '<line x1="150" y1="112" x2="144.8" y2="103.4"/>'
      + '<line x1="150" y1="112" x2="155.2" y2="103.4"/>'
      + '<path d="M 50 114 H 250 V 154 H 50 Z"/>'
      + '<text x="150" y="140" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">oesophagus</text>'
      + '<text x="264" y="140" font-size="14" text-anchor="start" fill="currentColor" stroke="none">peristalsis pushes it down, and nothing is digested</text>'
      + '<line x1="150" y1="154" x2="150" y2="170"/>'
      + '<line x1="150" y1="170" x2="144.8" y2="161.4"/>'
      + '<line x1="150" y1="170" x2="155.2" y2="161.4"/>'
      + '<path d="M 50 172 H 250 V 212 H 50 Z"/>'
      + '<text x="150" y="198" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">stomach</text>'
      + '<text x="264" y="198" font-size="14" text-anchor="start" fill="currentColor" stroke="none">acid kills bacteria, and protease starts on protein</text>'
      + '<line x1="150" y1="212" x2="150" y2="228"/>'
      + '<line x1="150" y1="228" x2="144.8" y2="219.4"/>'
      + '<line x1="150" y1="228" x2="155.2" y2="219.4"/>'
      + '<path d="M 50 230 H 250 V 270 H 50 Z"/>'
      + '<text x="150" y="256" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">small intestine</text>'
      + '<text x="264" y="256" font-size="14" text-anchor="start" fill="currentColor" stroke="none">bile, then three enzymes finish the job</text>'
      + '<line x1="150" y1="270" x2="150" y2="286"/>'
      + '<line x1="150" y1="286" x2="144.8" y2="277.4"/>'
      + '<line x1="150" y1="286" x2="155.2" y2="277.4"/>'
      + '<path d="M 50 288 H 250 V 328 H 50 Z"/>'
      + '<text x="150" y="314" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">large intestine</text>'
      + '<text x="264" y="314" font-size="14" text-anchor="start" fill="currentColor" stroke="none">water is taken back, and the rest leaves</text>'
      + '<text x="320" y="354" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">the small intestine is six metres, folded, and lined with villi</text>'
      + '<text x="320" y="384" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">because crossing a wall takes time, so more wall means more across</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What acts on the food at each stage, and what it does',
      columns: ['Where', 'What acts there', 'What it does'],
      rows: [
        [
          'Mouth',
          'Teeth, and amylase in saliva',
          'Cutting and grinding, and starch begins to become sugar',
        ],
        [
          'Oesophagus',
          'Muscle waves called peristalsis',
          'Pushes the food down. Nothing is digested here',
        ],
        [
          'Stomach',
          'Acid, and protease',
          'The acid kills bacteria, and protein begins to break down',
        ],
        [
          'Small intestine',
          'Bile, then amylase, protease and lipase',
          'Bile breaks fat into droplets, and the enzymes finish all three',
        ],
        [
          'Small intestine wall',
          'Millions of villi',
          'The products pass through into the blood',
        ],
        [
          'Large intestine',
          'Nothing new',
          'Water is taken back, and what remains leaves as faeces',
        ],
      ],
      note: 'Almost any question in this topic that starts with why is it '
        + 'like that has the same answer: to increase the surface area.',
    },
    {
      caption: 'Each food, the enzyme that acts on it, and what it becomes',
      columns: ['Food', 'The enzyme', 'What it becomes'],
      rows: [
        ['Starch', 'Amylase', 'Sugar'],
        ['Protein', 'Protease', 'Amino acids'],
        ['Fat', 'Lipase', 'Fatty acids and glycerol'],
      ],
      note: 'Nothing in the first column can cross a blood vessel wall, and '
        + 'everything in the last column can. That is the whole purpose '
        + 'of digestion.',
    },
  ],
  questions: [
    {
      id: 'dig-1',
      ask: 'Where does most absorption of digested food happen?',
      kind: 'choice',
      options: [
        'The small intestine',
        'The stomach',
        'The large intestine',
      ],
      answer: 'The small intestine',
      teach: 'Its length and villi give it an enormous surface area.',
      level: 3,
    },
    {
      id: 'dig-2',
      ask: 'Protease breaks protein into:',
      kind: 'choice',
      options: ['amino acids', 'sugars', 'fatty acids'],
      answer: 'amino acids',
      teach: 'Amylase gives sugar, lipase gives fatty acids and glycerol.',
      level: 4,
    },
    {
      id: 'dig-3',
      ask: 'Why does food have to be digested before it can be used?',
      kind: 'choice',
      options: [
        'The molecules must be small enough to cross into the blood',
        'The body cannot taste large molecules',
        'Digestion adds energy to the food',
      ],
      answer: 'The molecules must be small enough to cross into the blood',
      teach: 'The blood is the only route to the cells, '
        + 'and it runs inside walls.',
      level: 5,
    },
  ],
})

/* ── the circulatory system ───────────────────────────────────────────── */

teach({
  topicId: 'circulatory-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Blood carries oxygen and food to the cells '
      + 'and carbon dioxide and waste away. '
      + 'Arteries carry blood away from the heart, veins back towards it. '
      + 'The blood goes through the heart twice in one circuit: '
      + 'once to the lungs, once to the body.',
    method: [
      'Trace the blood in order and say what it is carrying.',
      'Arteries away, veins towards. Remember it by the A.',
      'For any vessel, ask whether it has just come from the lungs.',
    ],
  },

  why:
    'Cut your finger and bright red blood comes out in a slow '
    + 'ooze. '
    + 'Cut deeper in the wrong place and it comes out darker, in '
    + 'spurts that match your pulse. '
    + 'It is the same blood, pushed by the same heart. '
    + 'So why does it leave the body in two such different ways?',

  idea:
    'The heart has four chambers, two above that receive blood and two '
    + 'below that pump it out, and three kinds of vessel carry it. '
    + 'Blood leaving the lungs carries oxygen and glucose to the cells, '
    + 'and blood returning carries carbon dioxide and waste away.',

  mechanism:
    'The double circulation is the part worth understanding, '
    + 'because it explains the shape of the heart. '
    + 'Blood has two journeys to make: a short one to the lungs for oxygen, '
    + 'and a long one round the whole body to deliver it. '
    + 'Those two journeys need very different pressures. '
    + 'The lungs are close and delicate, '
    + 'so blood must arrive gently or the capillaries burst. '
    + 'The body is far away, including your feet, '
    + 'so blood must leave hard enough to get there and come back. '
    + 'One pump cannot do both, '
    + 'so the heart is two pumps side by side: '
    + 'a weaker right side for the lungs '
    + 'and a stronger left side for the body. '
    + 'That is why the left ventricle has the thickest muscle wall of all '
    + 'four chambers, '
    + 'and it is a question examiners like. '
    + 'The vessels then follow from the same logic. '
    + 'An artery leaves the pump, so it meets high pressure in surges, '
    + 'and needs thick elastic muscular walls. '
    + 'A vein is far from the pump, where the pressure has fallen, '
    + 'so its walls can be thin, '
    + 'but blood could slide backwards, '
    + 'which is why veins have valves and arteries do not. '
    + 'And a capillary has the opposite job from both: '
    + 'not to carry blood somewhere but to let things through, '
    + 'so it is one cell thick, '
    + 'and thin walls are its whole purpose rather than a weakness.',

  recap:
    'The heart is a muscle in your chest that squeezes and '
    + 'relaxes about seventy times a minute, and each squeeze '
    + 'pushes blood out into tubes that run all over the body. '
    + 'Blood carries oxygen, which it picks up in the lungs, and '
    + 'it carries food from the gut. '
    + 'Press two fingers on your wrist and the beat you feel is '
    + 'that push arriving there. '
    + 'So the blood is going round, and the heart is what drives '
    + 'it. '
    + 'This lesson gives the route it takes, the four chambers it '
    + 'passes through, and why the three kinds of tube are built '
    + 'differently.',

  method: [
    'Start at the right atrium with blood returning from the body.',
    'Follow it: right ventricle, lungs, left atrium, left ventricle, body.',
    'At each stage, say what the blood is carrying.',
    'Name the vessel and whether it leads away from or towards the heart.',
    'Explain a vessel’s structure by the pressure it meets.',
    'Remember arteries away, by the A.',
    'For exchange, say it happens in capillaries, one cell thick.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which vessels carry blood away from the heart?',
      steps: [
        'Away from the heart is the definition.',
        'Both words start with A.',
      ],
      answer: 'Arteries.',
    },
    {
      level: 4,
      ask: 'Why do veins have valves when arteries do not?',
      steps: [
        'Arteries are near the pump, where pressure is high.',
        'Veins are far from it, where pressure is low.',
        'At low pressure blood could slide backwards.',
      ],
      answer: 'Because the pressure in veins is low, '
        + 'so blood could flow backwards. '
        + 'The valves stop it. '
        + 'Arterial pressure is too high for that to happen.',
    },
    {
      level: 5,
      ask: 'Why is the wall of the left ventricle thicker than the right?',
      steps: [
        'The right ventricle pumps only to the lungs, which are close.',
        'Too much pressure would damage the lung capillaries.',
        'The left ventricle pumps to the whole body, including the feet.',
        'That needs much more force, so it needs more muscle.',
      ],
      answer: 'Because the left ventricle must pump blood all round the '
        + 'body, while the right only pumps it to the nearby lungs, '
        + 'which would be damaged by high pressure.',
    },
  ],

  traps: [
    {
      mistake: 'Saying arteries always carry oxygenated blood.',
      why: 'The pulmonary artery carries deoxygenated blood to the lungs. '
        + 'Artery means away from the heart, not oxygen rich.',
    },
    {
      mistake: 'Thinking blood passes through the heart once per circuit.',
      why: 'It passes through twice: '
        + 'once on the way to the lungs and once on the way to the body.',
    },
    {
      mistake: 'Calling the thin capillary wall a weakness.',
      why: 'Thinness is its function. '
        + 'Exchange has to happen through it.',
    },
    {
      mistake: 'Mixing up the atria and the ventricles.',
      why: 'Atria receive, ventricles pump out.',
    },
  ],

  extension:
    'Red blood cells have no nucleus, '
    + 'which leaves more room for haemoglobin to carry oxygen, '
    + 'and they are flexible enough to bend through a capillary. '
    + 'Every feature is a trade made for one job.',

  figure: {
    alt: 'The heart drawn as four chambers, with a short loop on the '
      + 'left of the drawing carrying blood from the right ventricle to '
      + 'the lungs and back to the left atrium, and a long loop on the '
      + 'right carrying it from the left ventricle round the body and '
      + 'back to the right atrium. The wall of the left ventricle is '
      + 'drawn thickest of the four.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">two journeys, so the heart is two pumps side by side</text>'
      + '<ellipse cx="320" cy="70" rx="70" ry="34"/>'
      + '<text x="320" y="76" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">lungs</text>'
      + '<path d="M 250 150 H 390 V 290 H 250 Z"/>'
      + '<line x1="320" y1="150" x2="320" y2="290"/>'
      + '<line x1="250" y1="200" x2="390" y2="200"/>'
      + '<text x="285" y="172" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">right</text>'
      + '<text x="285" y="188" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">atrium</text>'
      + '<text x="355" y="172" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">left</text>'
      + '<text x="355" y="188" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">atrium</text>'
      + '<text x="285" y="240" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">right</text>'
      + '<text x="285" y="256" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">ventricle</text>'
      + '<text x="355" y="240" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">left</text>'
      + '<text x="355" y="256" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">ventricle</text>'
      + '<path d="M 320 200 H 390 V 290 H 320 Z" stroke-width="9"/>'
      + '<text x="400" y="284" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">the thickest wall</text>'
      + '<line x1="250" y1="250" x2="180" y2="250"/>'
      + '<line x1="180" y1="250" x2="180" y2="70"/>'
      + '<line x1="180" y1="70" x2="246" y2="70"/>'
      + '<line x1="246" y1="70" x2="237.4" y2="75.2"/>'
      + '<line x1="246" y1="70" x2="237.4" y2="64.8"/>'
      + '<line x1="390" y1="70" x2="460" y2="70"/>'
      + '<line x1="460" y1="70" x2="460" y2="175"/>'
      + '<line x1="460" y1="175" x2="394" y2="175"/>'
      + '<line x1="394" y1="175" x2="402.6" y2="169.8"/>'
      + '<line x1="394" y1="175" x2="402.6" y2="180.2"/>'
      + '<line x1="390" y1="250" x2="520" y2="250"/>'
      + '<line x1="520" y1="250" x2="520" y2="368"/>'
      + '<line x1="520" y1="368" x2="404" y2="368"/>'
      + '<line x1="404" y1="368" x2="412.6" y2="362.8"/>'
      + '<line x1="404" y1="368" x2="412.6" y2="373.2"/>'
      + '<line x1="240" y1="368" x2="120" y2="368"/>'
      + '<line x1="120" y1="368" x2="120" y2="175"/>'
      + '<line x1="120" y1="175" x2="246" y2="175"/>'
      + '<line x1="246" y1="175" x2="237.4" y2="180.2"/>'
      + '<line x1="246" y1="175" x2="237.4" y2="169.8"/>'
      + '<text x="172" y="150" font-size="13" text-anchor="end" fill="currentColor" stroke="none">the short journey</text>'
      + '<text x="528" y="150" font-size="13" text-anchor="start" fill="currentColor" stroke="none">the long journey</text>'
      + '<ellipse cx="320" cy="368" rx="80" ry="26"/>'
      + '<text x="320" y="374" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the body</text>'
      + '<text x="246" y="320" font-size="13" text-anchor="end" fill="currentColor" stroke="none">the weaker pump</text>'
      + '<text x="394" y="320" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">the stronger pump</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The three kinds of vessel, and why each is built as it is',
      columns: ['Vessel', 'Which way', 'Its walls', 'Valves', 'Why'],
      rows: [
        [
          'Artery',
          'Away from the heart',
          'Thick, muscular and elastic',
          'No',
          'It meets high pressure, arriving in surges',
        ],
        [
          'Vein',
          'Back to the heart',
          'Thin',
          'Yes',
          'Pressure has fallen, so blood could slide backwards',
        ],
        [
          'Capillary',
          'Through the tissues',
          'One cell thick',
          'No',
          'Its job is to let things through, not to carry them',
        ],
      ],
      note: 'A thin wall is a capillary’s whole purpose rather than a '
        + 'weakness, because exchange with the tissues happens there.',
    },
    {
      caption: 'The four chambers, and the two journeys they serve',
      columns: ['Chamber', 'Receives from', 'Sends to'],
      rows: [
        ['Right atrium', 'The body', 'The right ventricle'],
        ['Right ventricle', 'The right atrium', 'The lungs'],
        ['Left atrium', 'The lungs', 'The left ventricle'],
        ['Left ventricle', 'The left atrium', 'The whole body'],
      ],
      note: 'The left ventricle has the thickest muscle wall of the four, '
        + 'because its journey is the long one and must reach your feet.',
    },
  ],
  questions: [
    {
      id: 'crc-1',
      ask: 'Which chambers pump blood out of the heart?',
      kind: 'choice',
      options: ['The ventricles', 'The atria', 'The valves'],
      answer: 'The ventricles',
      teach: 'The atria receive blood; the ventricles pump it out.',
      level: 3,
    },
    {
      id: 'crc-2',
      ask: 'Where does exchange with the tissues happen?',
      kind: 'choice',
      options: ['In the capillaries', 'In the arteries', 'In the veins'],
      answer: 'In the capillaries',
      teach: 'They are one cell thick, which is what lets things through.',
      level: 4,
    },
    {
      id: 'crc-3',
      ask: 'Why does the heart have two sides?',
      kind: 'choice',
      options: [
        'The lungs and the body need very different pressures',
        'To carry twice as much blood',
        'To separate food from oxygen',
      ],
      answer: 'The lungs and the body need very different pressures',
      teach: 'One pump cannot be both gentle enough for the lungs '
        + 'and strong enough for the feet.',
      level: 5,
    },
  ],
})

/* ── the respiratory system ───────────────────────────────────────────── */

teach({
  topicId: 'respiratory-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Breathing is moving air in and out. '
      + 'Respiration is what cells do with oxygen to release energy. '
      + 'They are not the same word. '
      + 'Gas exchange happens in the alveoli, '
      + 'which are thin, moist and surrounded by capillaries.',
    method: [
      'Say whether the question is about breathing or about respiration.',
      'For breathing, describe the diaphragm and the ribs.',
      'For exchange, explain by diffusion down a concentration '
        + 'difference.',
    ],
  },

  why:
    'Hold your breath and after a minute you cannot hold it any '
    + 'longer, although nothing hurts. '
    + 'Nobody can simply decide to stop breathing. '
    + 'A runner at the end of a race goes on breathing hard for '
    + 'several minutes, long after the running has stopped. '
    + 'What does the body need so urgently, and what is it still '
    + 'paying back after the race?',

  idea:
    'Air enters through the nose, down the trachea, '
    + 'which divides into two bronchi, '
    + 'then into smaller bronchioles, '
    + 'ending in millions of tiny air sacs called alveoli. '
    + 'Breathing in: the diaphragm flattens and the ribs rise, '
    + 'so the chest volume increases, the pressure inside falls, '
    + 'and air flows in. '
    + 'Breathing out reverses it. '
    + 'In the alveoli, oxygen passes into the blood '
    + 'and carbon dioxide passes out, both by diffusion. '
    + 'Respiration is different: '
    + 'it is the reaction inside every cell '
    + 'in which glucose and oxygen release energy, '
    + 'producing carbon dioxide and water.',

  mechanism:
    'Breathing and respiration are the confusion this topic exists to fix, '
    + 'and the syllabus asks about it directly. '
    + 'Breathing is mechanical. '
    + 'Muscles move, the chest changes volume, air flows. '
    + 'It happens in the chest and you can watch it. '
    + 'Respiration is chemical. '
    + 'It happens inside every cell in your body, '
    + 'all the time, including in your toes, '
    + 'and it is where the energy actually comes from. '
    + 'Breathing exists to supply respiration. '
    + 'A person on a machine can be breathing while their cells respire; '
    + 'a cell in a jar can respire with nothing breathing at all. '
    + 'Once that is clear, the structure of the lung explains itself '
    + 'through diffusion. '
    + 'Diffusion moves a substance from where there is more of it to where '
    + 'there is less, '
    + 'and it is fast only over short distances and across large areas. '
    + 'So the alveoli are built to satisfy exactly those conditions, '
    + 'and every feature of one is there for that single reason. '
    + 'Four features, one explanation.',

  recap:
    'The air going into your nose holds more oxygen than the '
    + 'air coming out, and the air coming out holds more carbon '
    + 'dioxide. '
    + 'You can show it: breathe out through a straw into '
    + 'limewater and the limewater turns milky, which is the test '
    + 'for carbon dioxide. '
    + 'So something is taking oxygen out of the air and putting '
    + 'carbon dioxide in. '
    + 'That exchange happens inside your chest, every few '
    + 'seconds, without you deciding any of it. '
    + 'This lesson explains how the air is moved, how the gases '
    + 'cross into the blood, and why breathing is not the same '
    + 'thing as respiration.',

  method: [
    'Decide whether the question is about breathing or respiration.',
    'For breathing in: diaphragm flattens, ribs rise, volume up, pressure '
      + 'down, air in.',
    'For breathing out: the reverse.',
    'For exchange, name the alveoli.',
    'Give the four features: many, thin, moist, well supplied with blood.',
    'Explain each by diffusion.',
    'For respiration, give the word equation with glucose and oxygen.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What happens to the diaphragm when you breathe in?',
      steps: [
        'Breathing in needs more space in the chest.',
        'The diaphragm moves down to make it.',
      ],
      answer: 'It contracts and flattens, increasing the chest volume.',
    },
    {
      level: 4,
      ask: 'Give three features of an alveolus that help gas exchange, '
        + 'and say why each helps.',
      steps: [
        'Diffusion needs area, short distance and a concentration '
          + 'difference.',
        'Match each feature to one of those.',
      ],
      answer: 'There are millions of them, giving a large surface area. '
        + 'Their walls are one cell thick, so the distance is tiny. '
        + 'They are surrounded by capillaries, '
        + 'which carry oxygen away and keep the difference large.',
    },
    {
      level: 5,
      ask: 'What is the difference between breathing and respiration?',
      steps: [
        'Breathing is muscles moving air: mechanical, in the chest.',
        'Respiration is a reaction releasing energy: chemical, in cells.',
        'Breathing supplies the oxygen that respiration uses.',
      ],
      answer: 'Breathing is the mechanical movement of air into and out of '
        + 'the lungs. '
        + 'Respiration is the chemical release of energy from glucose '
        + 'inside every cell. '
        + 'Breathing exists to supply respiration.',
    },
  ],

  traps: [
    {
      mistake: 'Using respiration to mean breathing.',
      why: 'Respiration happens in every cell, not in the lungs. '
        + 'The syllabus asks about this difference on purpose.',
    },
    {
      mistake: 'Saying the lungs pull air in.',
      why: 'The lungs have no muscle of their own. '
        + 'The diaphragm and ribs change the volume, and air follows the '
        + 'pressure.',
    },
    {
      mistake: 'Listing alveolar features without the reason for each.',
      why: 'The mark is for linking the feature to diffusion.',
    },
    {
      mistake: 'Thinking exhaled air is pure carbon dioxide.',
      why: 'It still contains most of its oxygen. '
        + 'Only some is taken, which is why rescue breathing works.',
    },
  ],

  extension:
    'Sometimes muscles cannot get oxygen fast enough. '
    + 'They then respire without it, which is called anaerobic '
    + 'respiration. '
    + 'It releases less energy and makes lactic acid. '
    + 'That is why hard exercise leaves you aching and panting afterwards. '
    + 'You are repaying the oxygen you went without.',

  figure: {
    alt: 'A lung with the trachea dividing into two bronchi, and the '
      + 'diaphragm drawn in two positions, domed and flattened. Beside '
      + 'it one alveolus, drawn large, wrapped in a capillary, with a '
      + 'note that there are millions of them, each one cell thick and '
      + 'moist.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">breathing moves air, respiration releases energy</text>'
      + '<line x1="180" y1="68" x2="180" y2="150" stroke-width="6"/>'
      + '<text x="196" y="96" font-size="13" text-anchor="start" fill="currentColor" stroke="none">trachea</text>'
      + '<line x1="180" y1="150" x2="130" y2="196" stroke-width="5"/>'
      + '<line x1="180" y1="150" x2="230" y2="196" stroke-width="5"/>'
      + '<line x1="104" y1="186" x2="150" y2="180"/>'
      + '<text x="98" y="190" font-size="13" text-anchor="end" fill="currentColor" stroke="none">bronchus</text>'
      + '<ellipse cx="118" cy="242" rx="52" ry="68"/>'
      + '<ellipse cx="242" cy="242" rx="52" ry="68"/>'
      + '<text x="300" y="300" font-size="13" text-anchor="start" fill="currentColor" stroke="none">lungs</text>'
      + '<path d="M 70 334 Q 180 310 290 334" stroke-width="4"/>'
      + '<path d="M 70 342 Q 180 340 290 342" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="180" y="368" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">the diaphragm flattens, and air flows in</text>'
      + '<circle cx="470" cy="154" r="52"/>'
      + '<text x="470" y="160" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">alveolus</text>'
      + '<path d="M 404 200 Q 470 246 536 200" stroke="#0f8a4d" stroke-width="5"/>'
      + '<text x="470" y="248" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">capillary</text>'
      + '<text x="470" y="272" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">millions of them, one cell thick and moist</text>'
      + '<text x="470" y="294" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">and each one wrapped in capillaries</text>'
      + '<text x="320" y="394" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">breathing happens in the chest; respiration happens in every cell</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Breathing and respiration, which are not the same word',
      columns: ['The question', 'Breathing', 'Respiration'],
      rows: [
        [
          'What kind of thing is it',
          'Mechanical: muscles and moving air',
          'Chemical: a reaction',
        ],
        [
          'Where does it happen',
          'In the chest',
          'Inside every cell, all the time, including your toes',
        ],
        [
          'What does it need',
          'Muscles, and a change in chest volume',
          'Glucose and oxygen',
        ],
        [
          'What does it produce',
          'Nothing. It only moves air',
          'Energy, and carbon dioxide and water',
        ],
        ['Can you watch it', 'Yes', 'No'],
      ],
      note: 'Breathing exists to supply respiration. A person on a machine '
        + 'can be breathing while their cells respire, and a cell in a '
        + 'jar can respire with nothing breathing at all.',
    },
    {
      caption: 'The four features of an alveolus, and what each one buys',
      columns: ['Feature', 'What it gives you'],
      rows: [
        ['There are millions of them', 'An enormous surface area'],
        ['The walls are one cell thick', 'A very short distance to cross'],
        ['The lining is moist', 'Gases dissolve, and only a dissolved gas can cross'],
        [
          'Each is wrapped in capillaries',
          'Oxygen is carried off as fast as it arrives, so the difference stays large',
        ],
      ],
      note: 'Diffusion is fast only over short distances, across large '
        + 'areas, and where the difference is big. Four features, one '
        + 'explanation.',
    },
  ],
  questions: [
    {
      id: 'rsp-1',
      ask: 'Where does gas exchange happen?',
      kind: 'choice',
      options: ['In the alveoli', 'In the trachea', 'In the bronchi'],
      answer: 'In the alveoli',
      teach: 'They are the tiny air sacs at the end of the airways.',
      level: 3,
    },
    {
      id: 'rsp-2',
      ask: 'Respiration takes place:',
      kind: 'choice',
      options: [
        'in every cell of the body',
        'in the lungs only',
        'in the blood',
      ],
      answer: 'in every cell of the body',
      teach: 'It is the chemical release of energy, not the movement of '
        + 'air.',
      level: 4,
    },
    {
      id: 'rsp-3',
      ask: 'Why are alveolar walls one cell thick?',
      kind: 'choice',
      options: [
        'Diffusion is fast only over a short distance',
        'To save space in the chest',
        'To keep bacteria out',
      ],
      answer: 'Diffusion is fast only over a short distance',
      teach: 'Thinness is the function, not a weakness.',
      level: 5,
    },
  ],
})

/* ── photosynthesis ───────────────────────────────────────────────────── */

teach({
  topicId: 'photosynthesis-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Carbon dioxide plus water, using light energy and chlorophyll, '
      + 'gives glucose plus oxygen. '
      + 'It needs light, carbon dioxide, water and chlorophyll. '
      + 'To test one factor, take it away and keep everything else the '
      + 'same.',
    method: [
      'Write the word equation first.',
      'To test a factor, remove only that one.',
      'Always include a control that has everything.',
    ],
  },

  why:
    'A cassava stem is cut and pushed into the ground. '
    + 'Nothing is added to it. '
    + 'Six months later there are tubers under it '
    + 'heavy enough to feed a family, '
    + 'plus a stem and a head of leaves. '
    + 'All that mass had to come from somewhere. '
    + 'The farmer gave it nothing but soil and water, '
    + 'and water does not turn into cassava. '
    + 'So where did the food come from? '
    + 'This topic is the answer, '
    + 'and the answer is stranger than the soil.',

  notation:
    'The reaction is written as an equation with an arrow, not an equals '
    + 'sign. '
    + 'In words: carbon dioxide plus water, '
    + 'in the presence of light and chlorophyll, '
    + 'gives glucose plus oxygen. '
    + 'In symbols: '
    + '6CO2 + 6H2O gives C6H12O6 + 6O2. '
    + 'The arrow means "turns into" and only points one way. '
    + 'The small numbers after a letter count the atoms, '
    + 'so H2O is two hydrogens and one oxygen. '
    + 'The big numbers in front count whole molecules, '
    + 'so 6H2O is six waters. '
    + 'Light and chlorophyll are written above the arrow, '
    + 'because they are needed but are not used up. '
    + 'The commonest way to lose a mark is to leave the 6s out, '
    + 'because then the two sides no longer have the same atoms.',

  idea:
    'Photosynthesis is how a plant makes its own food. '
    + 'Carbon dioxide and water, '
    + 'using energy from light absorbed by chlorophyll, '
    + 'produce glucose and oxygen. '
    + 'It happens mainly in the leaves, in the chloroplasts. '
    + 'The carbon dioxide enters through small holes called stomata, '
    + 'the water comes up from the roots, '
    + 'and the glucose is used for energy or stored as starch. '
    + 'The oxygen is released. '
    + 'Four things are needed: light, carbon dioxide, water and '
    + 'chlorophyll. '
    + 'Remove any one and photosynthesis stops.',

  mechanism:
    'The part of this topic that earns marks is the experiment, '
    + 'and the whole of experimental design sits in one idea: '
    + 'change one thing only. '
    + 'Suppose you want to show that light is needed. '
    + 'Take two similar plants, '
    + 'put one in the dark and one in the light, '
    + 'and keep everything else identical: '
    + 'same water, same temperature, same soil, same size of plant. '
    + 'After some days, test both leaves for starch with iodine. '
    + 'The one in the light has starch and the one in the dark does not. '
    + 'Now you can say light was needed, '
    + 'because light was the only difference between them. '
    + 'If you had also watered one more, you could say nothing at all, '
    + 'because either difference could have caused the result. '
    + 'That is what a control is for: '
    + 'the plant that has everything, '
    + 'so the result can only have come from what you removed '
    + 'and not from the way you treated them. '
    + 'A particular trick is worth knowing. '
    + 'To test for carbon dioxide you cannot simply remove air, '
    + 'so you seal the plant in a bag with soda lime, '
    + 'which absorbs carbon dioxide and leaves the rest of the air alone. '
    + 'To test chlorophyll you do not need two plants at all: '
    + 'use one variegated leaf, '
    + 'which has green and white parts in the same leaf under the same '
    + 'conditions, '
    + 'and only the green parts turn blue black with iodine. '
    + 'That is the neatest controlled experiment in the syllabus, '
    + 'because the leaf is its own control.',

  recap:
    'Animals get food by eating. '
    + 'A plant cannot do that, so it builds its own food inside itself. '
    + 'Three things go into it from outside. '
    + 'Water comes up from the soil through the roots. '
    + 'Carbon dioxide, a gas, comes in from the air. '
    + 'Light comes from the sun. '
    + 'Put a potted plant in a dark room for two weeks '
    + 'and it goes pale and dies, even if you water it, '
    + 'which shows the light is not optional. '
    + 'The green colouring in a leaf is a substance called chlorophyll, '
    + 'and it is what catches the light. '
    + 'This lesson gives the equation for all of that '
    + 'and shows how each of those requirements is proved necessary.',

  method: [
    'Write the word equation.',
    'Name the site: chloroplasts in the leaf.',
    'Say how each raw material arrives.',
    'For an experiment, name the one factor you are testing.',
    'Keep every other condition the same for both plants.',
    'Set up a control with everything present.',
    'Destarch the plant first by leaving it in the dark.',
    'Test for starch with iodine: blue black means starch.',
    'State the conclusion, naming the one factor that differed.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give the word equation for photosynthesis.',
      steps: [
        'Raw materials first, then products.',
        'Light and chlorophyll are needed but are not raw materials.',
      ],
      answer: 'Carbon dioxide + water, using light energy and chlorophyll, '
        + 'gives glucose + oxygen.',
    },
    {
      level: 4,
      ask: 'Why must a plant be left in the dark before a starch '
        + 'experiment?',
      steps: [
        'A leaf may already contain starch from before.',
        'That starch would show up whatever you do next.',
        'Darkness uses the stored starch up.',
      ],
      answer: 'To destarch it. '
        + 'Otherwise starch already stored would give a positive result '
        + 'regardless of the experiment.',
    },
    {
      level: 5,
      ask: 'Design a test to show chlorophyll is needed, '
        + 'using one leaf only.',
      steps: [
        'A variegated leaf has green and white areas.',
        'Both areas get the same light, water and air.',
        'So chlorophyll is the only difference between them.',
        'Destarch, leave in light, then test with iodine.',
      ],
      answer: 'Use a variegated leaf. '
        + 'Destarch the plant, leave it in light, '
        + 'then test the leaf with iodine. '
        + 'Only the green parts turn blue black, '
        + 'and since every other condition was identical, '
        + 'chlorophyll must be needed.',
    },
  ],

  traps: [
    {
      mistake: 'Changing two things at once in an experiment.',
      why: 'Then no conclusion is possible, '
        + 'because either change could have caused the result.',
    },
    {
      mistake: 'Leaving out the control.',
      why: 'Without a plant that has everything, '
        + 'you cannot show the result came from what you removed.',
    },
    {
      mistake: 'Forgetting to destarch the plant.',
      why: 'Stored starch gives a positive test whatever the experiment '
        + 'did.',
    },
    {
      mistake: 'Calling light a raw material.',
      why: 'Light is the energy source. '
        + 'The raw materials are carbon dioxide and water.',
    },
  ],

  extension:
    'Respiration is almost the reverse of this equation, '
    + 'and plants do both. '
    + 'In daylight photosynthesis outruns respiration, '
    + 'so the plant releases oxygen overall. '
    + 'At night only respiration happens, '
    + 'so a plant takes oxygen in like any other living thing.',

  figure: {
    alt: 'A leaf taking in light, carbon dioxide through the stomata and '
      + 'water from the roots, making glucose and giving out oxygen. '
      + 'Beside it a variegated leaf after an iodine test, where only '
      + 'the green parts have turned blue black, so the one leaf is its '
      + 'own control.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">four things needed, and one change at a time</text>'
      + '<path d="M 70 198 Q 170 120 272 198 Q 170 276 70 198 Z"/>'
      + '<line x1="70" y1="198" x2="272" y2="198"/>'
      + '<line x1="52" y1="110" x2="120" y2="162" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="120" y1="162" x2="110.1" y2="160.9" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="120" y1="162" x2="116.3" y2="152.7" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="46" y="102" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">light</text>'
      + '<line x1="196" y1="282" x2="196" y2="240"/>'
      + '<line x1="196" y1="240" x2="201.2" y2="248.6"/>'
      + '<line x1="196" y1="240" x2="190.8" y2="248.6"/>'
      + '<text x="210" y="306" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">carbon dioxide, through the stomata</text>'
      + '<line x1="46" y1="254" x2="94" y2="222"/>'
      + '<line x1="94" y1="222" x2="89.7" y2="231.0"/>'
      + '<line x1="94" y1="222" x2="84.0" y2="222.5"/>'
      + '<text x="36" y="276" font-size="13" text-anchor="start" fill="currentColor" stroke="none">water, from the roots</text>'
      + '<line x1="224" y1="158" x2="272" y2="118" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="272" y1="118" x2="268.7" y2="127.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="272" y1="118" x2="262.1" y2="119.5" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="278" y="110" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">oxygen out</text>'
      + '<text x="176" y="174" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">glucose made here</text>'
      + '<text x="470" y="72" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">one variegated leaf, after iodine</text>'
      + '<path d="M 370 170 Q 470 104 570 170 Q 470 236 370 170 Z" stroke="#0f8a4d"/>'
      + '<ellipse cx="470" cy="170" rx="46" ry="26"/>'
      + '<text x="470" y="176" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">white part</text>'
      + '<text x="470" y="130" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">green part</text>'
      + '<text x="470" y="266" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">only the green parts turn blue black</text>'
      + '<text x="470" y="288" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">so the leaf is its own control</text>'
      + '<text x="320" y="348" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">change one thing only, and keep everything else the same</text>'
      + '<text x="320" y="380" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">water one of them more as well and the result tells you nothing</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'How to show that each of the four is needed, one change at a '
        + 'time',
      columns: [
        'What is needed',
        'How to take it away',
        'The control',
        'What the test shows',
      ],
      rows: [
        [
          'Light',
          'Put one plant in the dark',
          'An identical plant left in the light',
          'Only the lit plant has starch',
        ],
        [
          'Carbon dioxide',
          'Seal the plant in a bag with soda lime',
          'An identical plant sealed without it',
          'Only the plant with air has starch',
        ],
        [
          'Water',
          'Stop watering one plant',
          'An identical plant watered as usual',
          'Only the watered plant has starch',
        ],
        [
          'Chlorophyll',
          'Use a leaf with white parts in it',
          'The green parts of that same leaf',
          'Only the green parts turn blue black',
        ],
      ],
      note: 'The last row needs no second plant at all, because both parts '
        + 'of the leaf are under the same conditions. It is the neatest '
        + 'controlled experiment in the syllabus.',
    },
  ],
  questions: [
    {
      id: 'pho-1',
      ask: 'What are the products of photosynthesis?',
      kind: 'choice',
      options: [
        'Glucose and oxygen',
        'Carbon dioxide and water',
        'Starch and light',
      ],
      answer: 'Glucose and oxygen',
      teach: 'Carbon dioxide and water are the raw materials.',
      level: 3,
    },
    {
      id: 'pho-2',
      ask: 'What is a control in this experiment for?',
      kind: 'choice',
      options: [
        'To show the result came from the factor you removed',
        'To make the experiment larger',
        'To replace a failed plant',
      ],
      answer: 'To show the result came from the factor you removed',
      teach: 'The control has everything, '
        + 'so any difference must be due to what was taken away.',
      level: 4,
    },
    {
      id: 'pho-3',
      ask: 'Why is a variegated leaf useful for testing chlorophyll?',
      kind: 'choice',
      options: [
        'Its green and white parts share every other condition',
        'It has more chlorophyll',
        'It stores no starch',
      ],
      answer: 'Its green and white parts share every other condition',
      teach: 'The leaf is its own control, '
        + 'so chlorophyll is the only variable.',
      level: 5,
    },
  ],
})

/* ── communicable and non-communicable disease ───────────────────────── */

teach({
  topicId: 'disease-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A communicable disease can pass from one person to another. '
      + 'A non-communicable one cannot. '
      + 'For a communicable disease, prevention breaks the route it '
      + 'travels. '
      + 'For a non-communicable one, prevention changes the risk factor.',
    method: [
      'Name the cause: organism, or something else.',
      'For a communicable disease, name the route.',
      'Then give the prevention that blocks that exact route.',
    ],
  },

  why:
    'Two children in one house fall ill in the same week. '
    + 'One has malaria and the other has cholera. '
    + 'The mother boils the drinking water '
    + 'and the cholera does not come back. '
    + 'She boils it all month '
    + 'and the malaria comes back anyway. '
    + 'Boiling water is good practice '
    + 'and it stopped only one of the two. '
    + 'Why did the same measure work for one disease '
    + 'and not the other?',

  notation:
    'Communicable is said "com-MUNE-ik-able". '
    + 'It means able to be passed from one person to another. '
    + 'Non-communicable has non in front of it '
    + 'and means it cannot be passed on. '
    + 'Write each word out in full in an answer. '
    + 'The commonest way to lose a mark is shortening them, '
    + 'because a marker then cannot tell which of the two you meant.',

  idea:
    'A communicable disease is caused by an organism '
    + 'and can be passed on. '
    + 'Every one of them travels by a particular route. '
    + 'A non-communicable disease cannot be caught from anybody. '
    + 'What brings it on is a set of risks '
    + 'rather than a single cause.',

  mechanism:
    'Prevention is the part worth getting right, '
    + 'and it is not a list of good habits. '
    + 'For a communicable disease, '
    + 'the organism has to travel from one person to another by a route, '
    + 'and the prevention is whatever blocks that route. '
    + 'So you cannot answer a prevention question properly '
    + 'until you have named the route. '
    + 'Malaria travels in a mosquito, '
    + 'so everything that works is aimed at mosquitoes: '
    + 'a treated net between you and them, '
    + 'clearing standing water so they cannot breed, '
    + 'screening windows. '
    + 'Boiling water does nothing for malaria, '
    + 'because water is not the route. '
    + 'Cholera travels in water, '
    + 'so boiling water, proper latrines and washing hands work, '
    + 'and a mosquito net does nothing. '
    + 'The same prevention is useless against the wrong route, '
    + 'which is why naming the route is the whole answer. '
    + 'Non-communicable disease works differently, '
    + 'and the honest word is risk rather than cause. '
    + 'Smoking does not give everybody cancer '
    + 'and some non smokers get it, '
    + 'so what smoking changes is the chance. '
    + 'Prevention therefore means reducing the risk factors you can '
    + 'control, '
    + 'and some, such as inherited sickle cell, cannot be changed at all, '
    + 'so there management replaces prevention.',

  recap:
    'Some diseases are caused by living things '
    + 'far too small to see. '
    + 'They are called organisms. '
    + 'They include bacteria, viruses, '
    + 'and the parasite that causes malaria. '
    + 'One of them gets inside a person, multiplies, '
    + 'and the person falls ill. '
    + 'Sleeping under a treated net works '
    + 'because it keeps the mosquito off your skin while you sleep. '
    + 'Washing hands with soap works '
    + 'because it lifts organisms off before they reach the mouth. '
    + 'This lesson explains why each of those works, '
    + 'by naming the route a disease travels.',

  method: [
    'State whether the disease can pass from person to person.',
    'Name the cause: which organism, or which risk factor.',
    'For a communicable disease, name the exact route.',
    'Give prevention that blocks that route.',
    'Check your prevention matches your route.',
    'For a non-communicable disease, name the risk factors.',
    'Say which can be changed and which cannot.',
    'For an inherited condition, describe management, not prevention.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Is diabetes communicable? Why?',
      steps: [
        'Ask whether it can pass from one person to another.',
        'It is not caused by an organism.',
      ],
      answer: 'No. '
        + 'It cannot be passed on, so it is non-communicable.',
    },
    {
      level: 4,
      ask: 'Give two preventions for cholera and say why each works.',
      steps: [
        'Cholera travels in water and food contaminated by faeces.',
        'So block that route.',
      ],
      answer: 'Boil or treat drinking water, '
        + 'because the bacterium travels in water. '
        + 'Use proper latrines and wash hands, '
        + 'because that stops faeces reaching food and water.',
    },
    {
      level: 5,
      ask: 'Why would boiling water not reduce malaria?',
      steps: [
        'Prevention must block the route the organism travels.',
        'Malaria travels in the anopheles mosquito.',
        'Water is not the route, although mosquitoes breed in it.',
        'Boiling drinking water does nothing to the mosquito.',
      ],
      answer: 'Because malaria is carried by mosquitoes, not by drinking '
        + 'water. '
        + 'Removing standing water helps, '
        + 'since that is where they breed, '
        + 'but boiling water for drinking blocks nothing.',
    },
  ],

  traps: [
    {
      mistake: 'Giving general hygiene as the prevention for everything.',
      why: 'Prevention must match the route. '
        + 'Hand washing does not prevent malaria.',
    },
    {
      mistake: 'Saying mosquitoes cause malaria.',
      why: 'A parasite causes it. '
        + 'The mosquito is the carrier.',
    },
    {
      mistake: 'Calling a risk factor a cause.',
      why: 'Smoking raises the chance of cancer. '
        + 'It does not give it to everybody, and non smokers get it too.',
    },
    {
      mistake: 'Offering prevention for an inherited condition.',
      why: 'Sickle cell disease is inherited. '
        + 'What exists is management, not prevention.',
    },
  ],

  extension:
    'A vaccine works by showing the immune system a harmless form of an '
    + 'organism, '
    + 'so the body is ready before it ever meets the real one. '
    + 'When enough people in a place are vaccinated, '
    + 'the route itself becomes hard to find, '
    + 'which protects people who are not.',

  figure: {
    alt: 'An ill person on the left and a well person on the right, with '
      + 'an arrow between them marked as the route the organism '
      + 'travels. A thick green bar stands across the route, marked as '
      + 'the block that fits that route, and the arrow stops at it.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">name the route, then block that route</text>'
      + '<circle cx="110" cy="128" r="22"/>'
      + '<line x1="110" y1="150" x2="110" y2="208"/>'
      + '<line x1="86" y1="174" x2="134" y2="174"/>'
      + '<line x1="110" y1="208" x2="92" y2="246"/>'
      + '<line x1="110" y1="208" x2="128" y2="246"/>'
      + '<circle cx="530" cy="128" r="22" stroke="#0f8a4d"/>'
      + '<line x1="530" y1="150" x2="530" y2="208" stroke="#0f8a4d"/>'
      + '<line x1="506" y1="174" x2="554" y2="174" stroke="#0f8a4d"/>'
      + '<line x1="530" y1="208" x2="512" y2="246" stroke="#0f8a4d"/>'
      + '<line x1="530" y1="208" x2="548" y2="246" stroke="#0f8a4d"/>'
      + '<line x1="146" y1="190" x2="300" y2="190"/>'
      + '<line x1="300" y1="190" x2="291.4" y2="195.2"/>'
      + '<line x1="300" y1="190" x2="291.4" y2="184.8"/>'
      + '<text x="224" y="170" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">the route</text>'
      + '<line x1="320" y1="136" x2="320" y2="244" stroke="#0f8a4d" stroke-width="10"/>'
      + '<text x="320" y="118" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">the block that fits that route</text>'
      + '<text x="110" y="282" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">an ill person</text>'
      + '<text x="530" y="282" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">stays well</text>'
      + '<text x="320" y="324" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">malaria travels in a mosquito, so a treated net blocks it</text>'
      + '<text x="320" y="350" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">cholera travels in water, so boiling the water blocks it</text>'
      + '<text x="320" y="384" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">and each of those is useless against the other route</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each communicable disease, the route it travels, and what '
        + 'blocks that route',
      columns: [
        'Disease',
        'How it travels',
        'What blocks it',
        'What is useless against it',
      ],
      rows: [
        [
          'Malaria',
          'Inside an anopheles mosquito',
          'A treated net, clearing standing water, screened windows',
          'Boiling the water',
        ],
        [
          'Cholera and typhoid',
          'In water or food with faeces in it',
          'Boiling water, proper latrines, washing hands',
          'A mosquito net',
        ],
        [
          'Tuberculosis',
          'In droplets breathed out',
          'Covering a cough, airy rooms, treating the ill',
          'Boiling the water',
        ],
        [
          'HIV',
          'In blood, in unprotected sex, and mother to child',
          'Protected sex, screened blood, treatment during pregnancy',
          'A mosquito net',
        ],
      ],
      note: 'The last column is the point. A prevention aimed at the wrong '
        + 'route does nothing at all, which is why naming the route is '
        + 'most of the answer.',
    },
    {
      caption: 'Communicable and non-communicable disease, side by side',
      columns: ['The question', 'Communicable', 'Non-communicable'],
      rows: [
        [
          'What brings it on',
          'An organism',
          'Inheritance, diet, smoking, lack of exercise, age',
        ],
        ['Can you catch it', 'Yes, along a route', 'No, from nobody'],
        [
          'Examples',
          'Malaria, cholera, typhoid, tuberculosis, HIV',
          'Diabetes, high blood pressure, sickle cell, asthma, many cancers',
        ],
        ['The honest word', 'Cause', 'Risk, because it changes the chance'],
        [
          'What to do about it',
          'Block the route',
          'Reduce the risks you can control, and manage the rest',
        ],
      ],
      note: 'Smoking does not give everybody cancer and some who never '
        + 'smoked get it, which is why risk is the honest word. Some '
        + 'risks, such as inherited sickle cell, cannot be changed at '
        + 'all, and there management replaces prevention.',
    },
  ],
  questions: [
    {
      id: 'dis-1',
      ask: 'Which of these is communicable?',
      kind: 'choice',
      options: ['Tuberculosis', 'Diabetes', 'Asthma'],
      answer: 'Tuberculosis',
      teach: 'It is caused by a bacterium and spreads in droplets.',
      level: 3,
    },
    {
      id: 'dis-2',
      ask: 'What actually causes malaria?',
      kind: 'choice',
      options: [
        'A parasite carried by a mosquito',
        'The mosquito itself',
        'Dirty water',
      ],
      answer: 'A parasite carried by a mosquito',
      teach: 'The mosquito is the carrier, not the cause.',
      level: 4,
    },
    {
      id: 'dis-3',
      ask: 'What must a prevention measure match?',
      kind: 'choice',
      options: [
        'The route the disease travels',
        'The season',
        'The age of the patient',
      ],
      answer: 'The route the disease travels',
      teach: 'A net blocks mosquitoes. '
        + 'Boiling blocks water. '
        + 'Neither blocks the other.',
      level: 5,
    },
  ],
})

/* ── crop and animal production ───────────────────────────────────────── */

teach({
  topicId: 'crop-animal-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Growing a crop is a sequence: '
      + 'prepare the land, plant good seed at the right spacing, '
      + 'weed, feed, control pests, harvest, store. '
      + 'Keeping livestock is the same shape: '
      + 'housing, feed, water, health, breeding, records. '
      + 'Both are managed to protect a yield, not to rescue it.',
    method: [
      'Give the operations in order with a reason for each.',
      'Explain spacing, weeding and feeding as competition for the same '
        + 'resources.',
      'Prefer prevention to treatment and say why.',
    ],
  },

  why:
    'Two farmers plant maize on the same day '
    + 'on neighbouring plots. '
    + 'One sows in rows, a hand span apart, '
    + 'and weeds at three weeks. '
    + 'The other scatters his seed by hand '
    + 'and weeds when the weeds are knee high. '
    + 'Both get the same rain and the same sun. '
    + 'The first gets twice the harvest. '
    + 'Nothing was put on the first plot '
    + 'that was not put on the second. '
    + 'So what were those two decisions actually doing?',

  notation:
    'The jobs of growing a crop are called operations, '
    + 'and a question asks for them in order. '
    + 'Land preparation comes first, '
    + 'then sowing, then weeding, '
    + 'then harvesting, then storage. '
    + 'Spacing is the distance '
    + 'between one plant and the next. '
    + 'Yield is how much comes off a piece of land, '
    + 'and it is given per area, '
    + 'such as per hectare. '
    + 'A pest eats the crop '
    + 'and a disease makes it sick, '
    + 'and the two words are not interchangeable. '
    + 'Giving the operations out of order '
    + 'is the commonest way to lose a mark, '
    + 'because each one is only possible '
    + 'after the one before it.',

  idea:
    'Crop production runs in a fixed order, from choosing the site to '
    + 'storing what you harvested, and keeping animals has the same '
    + 'shape. '
    + 'Both aim at a good yield from healthy plants and animals, '
    + 'and both lose more to neglect than to any one disaster.',

  mechanism:
    'Most of good practice is one idea in different clothes: '
    + 'everything in a field is competing for the same few things, '
    + 'and the farmer decides who gets them. '
    + 'Light, water and nutrients are limited. '
    + 'A weed takes all three and gives nothing back, '
    + 'which is the whole reason weeding matters '
    + 'and why weeding early matters more than weeding later, '
    + 'since a weed removed before it has grown has taken almost nothing. '
    + 'Spacing is the same idea applied to your own crop. '
    + 'Plant too close and your plants compete with each other, '
    + 'so a thousand poor plants yield less than six hundred good ones. '
    + 'Plant too far apart and you waste land and leave room for weeds. '
    + 'There is a right spacing for each crop, and it is not a guess. '
    + 'Fertiliser and manure are the other side: '
    + 'instead of reducing the competitors you increase the supply, '
    + 'and manure also improves the soil’s ability to hold water, '
    + 'which fertiliser alone does not. '
    + 'With animals, the equivalent idea is that prevention is cheaper than '
    + 'cure, '
    + 'and not only in money. '
    + 'A vaccinated herd does not get the disease. '
    + 'A treated herd already lost weight, milk and growth before anybody '
    + 'noticed, '
    + 'and some of that is never recovered. '
    + 'This is why records matter more than they look: '
    + 'they are how you notice a problem in week one instead of week four.',

  recap:
    'A plant needs four things '
    + 'and it cannot go and look for any of them. '
    + 'It needs water, light, air, '
    + 'and food from the soil. '
    + 'All four have to arrive '
    + 'where the plant is standing, '
    + 'or they do not arrive at all. '
    + 'Now put two maize plants '
    + 'right next to each other. '
    + 'They are reaching into the same soil '
    + 'for the same food, '
    + 'and standing in each other’s light. '
    + 'Both of them grow smaller '
    + 'than one plant on its own would have. '
    + 'Every job in this lesson, '
    + 'from spacing to weeding, '
    + 'is about that one competition.',

  method: [
    'For a crop, list the operations in order from site to storage.',
    'Give one reason for each operation.',
    'State the spacing and why it matters both ways.',
    'Weed early, and say why early is better.',
    'Say whether you would use manure, fertiliser or both, and why.',
    'For livestock, cover housing, feed, water, health, breeding and '
      + 'records.',
    'Choose prevention over treatment and justify it.',
    'Name the harvest stage and the storage condition.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Why must a crop be weeded?',
      steps: [
        'Weeds grow in the same soil.',
        'They need the same light, water and nutrients.',
      ],
      answer: 'Because weeds compete with the crop for light, water and '
        + 'nutrients, and give nothing in return.',
    },
    {
      level: 4,
      ask: 'A farmer plants maize much closer than recommended '
        + 'to get more plants. '
        + 'What happens to the yield?',
      steps: [
        'The plants now compete with each other.',
        'Each gets less light, water and nutrients.',
        'Each produces a smaller cob, or none.',
      ],
      answer: 'It usually falls. '
        + 'A thousand weak plants yield less than six hundred strong ones, '
        + 'because they compete with one another.',
    },
    {
      level: 5,
      ask: 'Why is vaccinating livestock better than treating them when '
        + 'they fall ill?',
      steps: [
        'Treatment begins after the disease has taken hold.',
        'By then the animal has already lost weight, milk or growth.',
        'Some of that loss is never recovered.',
        'A vaccinated animal does not have the disease at all.',
      ],
      answer: 'Because treatment starts after the loss has begun. '
        + 'A sick animal has already lost growth, milk or weight, '
        + 'and some of that never comes back, '
        + 'while a vaccinated animal avoids the disease entirely.',
    },
  ],

  traps: [
    {
      mistake: 'Listing operations without reasons.',
      why: 'Marks are given for why, '
        + 'because the why is what transfers to a crop you have not grown.',
    },
    {
      mistake: 'Thinking closer planting always means more yield.',
      why: 'Past the right spacing the plants compete with each other '
        + 'and every one of them does worse.',
    },
    {
      mistake: 'Treating manure and fertiliser as the same thing.',
      why: 'Both add nutrients. '
        + 'Only manure improves the soil structure and its water holding.',
    },
    {
      mistake: 'Leaving weeding until the weeds are visible from the path.',
      why: 'By then they have already taken water and nutrients '
        + 'that the crop will not get back.',
    },
  ],

  extension:
    'Crop rotation grows different crops on the same land in turn. '
    + 'It works because different crops take different nutrients '
    + 'and suffer from different pests, '
    + 'so the pest of one year finds nothing to eat in the next.',

  figure: {
    alt: 'Three plots of the same size. The first is packed with a '
      + 'thousand small plants competing with each other, the second '
      + 'holds six hundred well spaced plants and yields more, and the '
      + 'third has only four plants with weeds marked in the gaps '
      + 'between them.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">everything in a field competes for the same few things</text>'
      + '<path d="M 40 80 H 200 V 230 H 40 Z"/>'
      + '<path d="M 240 80 H 400 V 230 H 240 Z"/>'
      + '<path d="M 440 80 H 600 V 230 H 440 Z"/>'
      + '<circle cx="62" cy="100" r="7" stroke="#c8433a"/>'
      + '<circle cx="92" cy="100" r="7" stroke="#c8433a"/>'
      + '<circle cx="122" cy="100" r="7" stroke="#c8433a"/>'
      + '<circle cx="152" cy="100" r="7" stroke="#c8433a"/>'
      + '<circle cx="182" cy="100" r="7" stroke="#c8433a"/>'
      + '<circle cx="62" cy="125" r="7" stroke="#c8433a"/>'
      + '<circle cx="92" cy="125" r="7" stroke="#c8433a"/>'
      + '<circle cx="122" cy="125" r="7" stroke="#c8433a"/>'
      + '<circle cx="152" cy="125" r="7" stroke="#c8433a"/>'
      + '<circle cx="182" cy="125" r="7" stroke="#c8433a"/>'
      + '<circle cx="62" cy="150" r="7" stroke="#c8433a"/>'
      + '<circle cx="92" cy="150" r="7" stroke="#c8433a"/>'
      + '<circle cx="122" cy="150" r="7" stroke="#c8433a"/>'
      + '<circle cx="152" cy="150" r="7" stroke="#c8433a"/>'
      + '<circle cx="182" cy="150" r="7" stroke="#c8433a"/>'
      + '<circle cx="62" cy="175" r="7" stroke="#c8433a"/>'
      + '<circle cx="92" cy="175" r="7" stroke="#c8433a"/>'
      + '<circle cx="122" cy="175" r="7" stroke="#c8433a"/>'
      + '<circle cx="152" cy="175" r="7" stroke="#c8433a"/>'
      + '<circle cx="182" cy="175" r="7" stroke="#c8433a"/>'
      + '<circle cx="62" cy="200" r="7" stroke="#c8433a"/>'
      + '<circle cx="92" cy="200" r="7" stroke="#c8433a"/>'
      + '<circle cx="122" cy="200" r="7" stroke="#c8433a"/>'
      + '<circle cx="152" cy="200" r="7" stroke="#c8433a"/>'
      + '<circle cx="182" cy="200" r="7" stroke="#c8433a"/>'
      + '<circle cx="282" cy="116" r="17" stroke="#0f8a4d"/>'
      + '<circle cx="320" cy="116" r="17" stroke="#0f8a4d"/>'
      + '<circle cx="358" cy="116" r="17" stroke="#0f8a4d"/>'
      + '<circle cx="282" cy="155" r="17" stroke="#0f8a4d"/>'
      + '<circle cx="320" cy="155" r="17" stroke="#0f8a4d"/>'
      + '<circle cx="358" cy="155" r="17" stroke="#0f8a4d"/>'
      + '<circle cx="282" cy="194" r="17" stroke="#0f8a4d"/>'
      + '<circle cx="320" cy="194" r="17" stroke="#0f8a4d"/>'
      + '<circle cx="358" cy="194" r="17" stroke="#0f8a4d"/>'
      + '<circle cx="486" cy="126" r="17" stroke="#0f8a4d"/>'
      + '<circle cx="554" cy="126" r="17" stroke="#0f8a4d"/>'
      + '<circle cx="486" cy="184" r="17" stroke="#0f8a4d"/>'
      + '<circle cx="554" cy="184" r="17" stroke="#0f8a4d"/>'
      + '<line x1="513" y1="105" x2="527" y2="119" stroke="#c8433a"/>'
      + '<line x1="527" y1="105" x2="513" y2="119" stroke="#c8433a"/>'
      + '<line x1="513" y1="153" x2="527" y2="167" stroke="#c8433a"/>'
      + '<line x1="527" y1="153" x2="513" y2="167" stroke="#c8433a"/>'
      + '<line x1="453" y1="153" x2="467" y2="167" stroke="#c8433a"/>'
      + '<line x1="467" y1="153" x2="453" y2="167" stroke="#c8433a"/>'
      + '<line x1="573" y1="153" x2="587" y2="167" stroke="#c8433a"/>'
      + '<line x1="587" y1="153" x2="573" y2="167" stroke="#c8433a"/>'
      + '<line x1="513" y1="201" x2="527" y2="215" stroke="#c8433a"/>'
      + '<line x1="527" y1="201" x2="513" y2="215" stroke="#c8433a"/>'
      + '<text x="120" y="256" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">too close</text>'
      + '<text x="120" y="280" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">a thousand poor plants</text>'
      + '<text x="120" y="302" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">competing with each other</text>'
      + '<text x="320" y="256" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">the right spacing</text>'
      + '<text x="320" y="280" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">six hundred good plants</text>'
      + '<text x="320" y="302" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">and a larger yield</text>'
      + '<text x="520" y="256" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">too far apart</text>'
      + '<text x="520" y="280" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">wasted land</text>'
      + '<text x="520" y="302" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">and room for weeds</text>'
      + '<text x="320" y="350" font-size="18" text-anchor="middle" fill="#c8433a" stroke="none">a weed takes light, water and nutrients, and gives nothing back</text>'
      + '<text x="320" y="382" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so weed early: one removed small has taken almost nothing</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The order of crop production, and what each step is for',
      columns: ['The step', 'What it is for'],
      rows: [
        [
          'Choose the site',
          'Soil, water and access decide the yield before anything is planted',
        ],
        [
          'Clear and prepare the land',
          'Takes out the competition that is already standing there',
        ],
        ['Choose good seed', 'A poor seed cannot be put right later'],
        [
          'Plant at the right time and spacing',
          'Each plant needs its own share of light, water and nutrients',
        ],
        [
          'Weed, and weed early',
          'A weed takes all three of those and gives nothing back',
        ],
        [
          'Add manure or fertiliser',
          'Raises the supply instead of lowering the competition',
        ],
        ['Control pests and disease', 'Prevention costs less than cure'],
        [
          'Harvest at the right stage, and store well',
          'More is lost to neglect here than to any one disaster',
        ],
      ],
      note: 'Manure also improves the ability of the soil to hold water, '
        + 'which fertiliser alone does not.',
    },
    {
      caption: 'Keeping animals, which has the same shape',
      columns: ['What they need', 'Why'],
      rows: [
        ['Housing', 'Shelter, and somewhere you can see them every day'],
        ['Clean water', 'A thirsty animal stops eating before it stops drinking'],
        [
          'Feed that suits the animal and its stage',
          'A growing animal and a milking one do not want the same feed',
        ],
        ['Routine health care', 'A vaccinated herd does not get the disease at all'],
        ['Breeding', 'The next generation is chosen, not left to chance'],
        [
          'Written records',
          'They are how you notice a problem in week one instead of week four',
        ],
      ],
      note: 'A treated herd has already lost weight, milk and growth before '
        + 'anybody noticed, and some of that is never recovered. That is '
        + 'why prevention is cheaper than cure, and not only in money.',
    },
  ],
  questions: [
    {
      id: 'agr-1',
      ask: 'Why does a farmer weed?',
      kind: 'choice',
      options: [
        'Weeds compete for light, water and nutrients',
        'Weeds look untidy',
        'Weeds are poisonous',
      ],
      answer: 'Weeds compete for light, water and nutrients',
      teach: 'And they give nothing back, '
        + 'which is why early weeding matters most.',
      level: 3,
    },
    {
      id: 'agr-2',
      ask: 'What does manure do that fertiliser alone does not?',
      kind: 'choice',
      options: [
        'Improves the soil structure and water holding',
        'Adds nutrients',
        'Kills pests',
      ],
      answer: 'Improves the soil structure and water holding',
      teach: 'Both add nutrients. Only manure improves the soil itself.',
      level: 4,
    },
    {
      id: 'agr-3',
      ask: 'Why is prevention preferred to treatment in livestock keeping?',
      kind: 'choice',
      options: [
        'By the time an animal is treated it has already lost production',
        'Treatment never works',
        'Vaccines are always free',
      ],
      answer: 'By the time an animal is treated it has already lost '
        + 'production',
      teach: 'Some of that growth, milk or weight is never recovered.',
      level: 5,
    },
  ],
})
