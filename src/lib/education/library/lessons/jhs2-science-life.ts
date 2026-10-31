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
    + 'so it has bright petals, scent, nectar, and sticky pollen that '
    + 'clings to a body. '
    + 'A wind pollinated flower attracts nothing, '
    + 'so it wastes nothing on petals or scent, '
    + 'and instead has anthers hanging outside in the air, '
    + 'a feathery stigma to catch what drifts past, '
    + 'and enormous amounts of light dry pollen, '
    + 'because wind has very poor aim. '
    + 'Given one feature you can work out the other five.',

  recap:
    'You know a flower makes seeds and that bees visit flowers. '
    + 'This names the parts and separates the two events: '
    + 'pollen arriving, and nuclei joining.',

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

  idea:
    'In the male system the testes make sperm and the hormone testosterone. '
    + 'Sperm travel along the sperm duct, '
    + 'mix with fluid from glands to make semen, '
    + 'and leave through the urethra in the penis. '
    + 'In the female system the two ovaries hold eggs from birth '
    + 'and release one about every 28 days. '
    + 'The egg travels down an oviduct to the uterus, '
    + 'whose lining has thickened to receive it. '
    + 'The cervix is the neck of the uterus, opening into the vagina. '
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
    'You know that living things reproduce '
    + 'and you have met the changes of puberty in personal health lessons. '
    + 'This gives the organs, their jobs, and the order of the cycle.',

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

  idea:
    'Food enters the mouth, where teeth cut and grind it '
    + 'and saliva adds amylase, which begins breaking starch into sugar. '
    + 'It is swallowed down the oesophagus, '
    + 'pushed along by muscle waves called peristalsis. '
    + 'In the stomach, acid kills bacteria and protease begins on protein. '
    + 'In the small intestine, bile from the liver breaks fat into '
    + 'droplets, '
    + 'and enzymes finish the job: '
    + 'amylase on starch, protease on protein, lipase on fat. '
    + 'The products are absorbed through the wall of the small intestine '
    + 'into the blood. '
    + 'The large intestine takes back water, '
    + 'and what remains leaves as faeces.',

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
    'You know food is chewed, swallowed and digested, '
    + 'and that the body takes what it needs. '
    + 'This follows the route and names what breaks down where, and why.',

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

  idea:
    'The heart has four chambers: '
    + 'two atria above, which receive blood, '
    + 'and two ventricles below, which pump it out. '
    + 'The right side receives blood from the body and sends it to the '
    + 'lungs. '
    + 'The left side receives it from the lungs and sends it round the '
    + 'body. '
    + 'Arteries carry blood away from the heart and have thick muscular '
    + 'walls. '
    + 'Veins carry it back, have thinner walls, and contain valves. '
    + 'Capillaries are one cell thick, '
    + 'which is where exchange with the tissues happens. '
    + 'Blood leaving the lungs carries oxygen and glucose to the cells; '
    + 'blood returning carries carbon dioxide and waste away.',

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
    'You know the heart pumps blood and that blood carries oxygen. '
    + 'This gives the route, the four chambers, '
    + 'and why the three kinds of vessel are built differently.',

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
    + 'So the alveoli are made to satisfy exactly those conditions: '
    + 'there are millions of them, giving a huge surface area, '
    + 'their walls are one cell thick, giving a tiny distance, '
    + 'they are moist, because gases must dissolve to cross, '
    + 'and each is wrapped in capillaries carrying blood away, '
    + 'which keeps the concentration difference large by removing the '
    + 'oxygen as fast as it arrives. '
    + 'Four features, one explanation.',

  recap:
    'You know you breathe in oxygen and out carbon dioxide. '
    + 'This explains how the air is moved, '
    + 'how the gases cross into the blood, '
    + 'and why breathing is not the same thing as respiration.',

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
    + 'so you know the result came from what you removed '
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
    'You know plants need sunlight and water, '
    + 'and that they make their own food. '
    + 'This gives the equation '
    + 'and shows how to prove that each requirement is really needed.',

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

  idea:
    'A communicable disease is caused by an organism '
    + 'and can be passed on. '
    + 'Malaria is caused by a parasite carried by the anopheles mosquito. '
    + 'Cholera and typhoid come from water or food contaminated with '
    + 'faeces. '
    + 'Tuberculosis spreads in droplets breathed out. '
    + 'HIV passes through blood, unprotected sex, '
    + 'and from mother to child. '
    + 'A non-communicable disease cannot be caught from anybody: '
    + 'diabetes, high blood pressure, sickle cell disease, '
    + 'asthma and many cancers. '
    + 'Their causes include inheritance, diet, smoking, '
    + 'lack of exercise and age.',

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
    'You have learned about keeping clean and sleeping under a net. '
    + 'This explains why each of those works, '
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

  idea:
    'Crop production runs in order. '
    + 'Choose the site. '
    + 'Clear and prepare the land. '
    + 'Choose good seed. '
    + 'Plant at the right time, at the right spacing. '
    + 'Weed. '
    + 'Add manure or fertiliser. '
    + 'Control pests and disease. '
    + 'Harvest at the right stage, and store it well. '
    + 'Keeping animals has the same shape. '
    + 'They need housing, clean water, '
    + 'and feed that suits the animal and its stage. '
    + 'They need routine health care, breeding, and written records. '
    + 'Both aim at a good yield from healthy plants and animals. '
    + 'And both lose more to neglect than to any one disaster.',

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
    'You have grown a plant in a school garden '
    + 'and know that crops need water and weeding. '
    + 'This puts the operations in order and gives the reason for each.',

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
