/**
 * Stored lessons for JHS 2 Social Studies.
 *
 * Written at about grade 7, with a `brief` form on every topic.
 *
 * ── Three of these are about incentives, so they say so ───────────────────
 *
 * Galamsey, rights and duties, and saving all look like separate topics and
 * all turn on the same question: what makes it worth somebody's while to do
 * the thing. A lesson that says galamsey happens because people are
 * careless teaches nothing, because the miner is not careless, he is paid.
 * So `env-degradation` names the incentive and then asks what would have to
 * change for the choice to be different, which is the only form of answer
 * that survives contact with a real village.
 *
 * `constitution-jhs` is written around the checks rather than the lists,
 * since the three arms are easy to name and the point of separating them is
 * what examinations actually ask.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── environmental degradation ──────────────────────────────────────────── */

teach({
  topicId: 'env-degradation',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Degradation is land, water or air being damaged '
      + 'faster than it recovers. '
      + 'Galamsey poisons rivers with mercury and leaves pits. '
      + 'Deforestation removes the cover that holds soil and rain. '
      + 'Both happen because somebody is paid to do them.',
    method: [
      'Name the problem and where it happens.',
      'Give the cause as an incentive, not as carelessness.',
      'Give effects on land, water, health and livelihood.',
    ],
  },

  why:
    'Galamsey in the Western Region pays a young man about 100 '
    + 'cedis a day, which is far more than farming pays him. '
    + 'The same work turns the Ankobra brown and shuts the water '
    + 'treatment plant downstream. '
    + 'Everybody in the town knows both of those facts at the '
    + 'same time. '
    + 'So why does it carry on, and what would actually stop it?',

  idea:
    'Environmental degradation means the land, water or air is being '
    + 'damaged faster than it can recover. '
    + 'Ghana has it in several forms at once, '
    + 'and the best known is galamsey, '
    + 'which is small scale mining without a licence. '
    + 'The effects reach further than the site: '
    + 'poisoned drinking water, '
    + 'treatment plants shut down, '
    + 'farmland lost, '
    + 'fish gone, '
    + 'and illness that appears years later.',

  mechanism:
    'Degradation is usually explained by saying people do not care, '
    + 'and that explanation fails the first time you meet somebody doing '
    + 'it. '
    + 'A galamsey worker knows the river is being poisoned. '
    + 'He is there because the work pays today '
    + 'and the damage arrives later and lands on other people. '
    + 'The farmer who burns the bush knows it harms the soil, '
    + 'and he does it because clearing by hand takes three weeks he does '
    + 'not have. '
    + 'So the honest form of the explanation is an incentive: '
    + 'the gain is immediate and personal, '
    + 'and the cost is delayed and shared. '
    + 'That is the shape of nearly every environmental problem, '
    + 'and it tells you what a solution must look like. '
    + 'A rule alone will not do it, '
    + 'because the gain is still there and the rule has to be enforced in '
    + 'a bush at night. '
    + 'Something must change the arithmetic: '
    + 'an alternative that pays, '
    + 'licensed mining with a bond for restoring the land, '
    + 'enforcement near enough to be likely rather than possible, '
    + 'and a community that gains from the forest standing. '
    + 'This is also why the effects are worth listing carefully in an '
    + 'answer. '
    + 'Each one is a cost somebody else pays: '
    + 'the town downstream, the farmer whose land floods, '
    + 'the child who drinks the water, '
    + 'and the next generation, who were not consulted.',

  recap:
    'Tree roots hold soil in place. '
    + 'Clear the trees off a slope and the first heavy rain '
    + 'carries the topsoil down into the river, which is why a '
    + 'cleared hillside turns bare and gullied within a few '
    + 'seasons. '
    + 'Rubbish thrown into a gutter does similar damage by '
    + 'another route: it blocks the gutter, so water that should '
    + 'run away stands in the road and floods the houses beside '
    + 'it. '
    + 'In both cases the place is being damaged faster than it '
    + 'can repair itself. '
    + 'This lesson asks the harder question: why it keeps '
    + 'happening when nobody is in any doubt about the cause.',

  method: [
    'Name the problem and the places it affects.',
    'Say who does it and what they gain.',
    'Say who bears the cost and when.',
    'List the effects: soil, water, air, health, livelihood.',
    'Give measures that change the incentive, not only rules.',
    'Say who must act: individual, community, government.',
    'Finish with one thing a pupil could actually do.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name two effects of galamsey on a river.',
      steps: [
        'Think about what enters the water.',
      ],
      answer: 'Mercury poisons it, and silt makes it muddy, '
        + 'so it can no longer be treated for drinking or support fish.',
    },
    {
      level: 4,
      ask: 'Why does deforestation lead to flooding?',
      steps: [
        'Tree roots hold the soil and slow water down.',
        'Leaves and litter let rain soak in.',
        'Bare ground sheds water instead.',
      ],
      answer: 'Because without trees the rain runs off bare soil instead '
        + 'of soaking in, '
        + 'carrying soil with it and arriving in rivers all at once.',
    },
    {
      level: 5,
      ask: 'Everybody in a village knows galamsey is poisoning their river, '
        + 'and it continues. Explain why, and what would change it.',
      steps: [
        'The money is earned today by the person doing it.',
        'The poisoning is slow and falls on everybody, including people '
          + 'downstream.',
        'So for that person the arithmetic favours continuing.',
        'A rule does not change the arithmetic; an alternative income '
          + 'does.',
      ],
      answer: 'Because the gain is immediate and personal '
        + 'while the cost is delayed and shared. '
        + 'What changes it is work that pays as well, '
        + 'licensing with a bond for restoring the land, '
        + 'and enforcement likely enough to be counted on.',
    },
  ],

  traps: [
    {
      mistake: 'Explaining degradation by saying people are careless.',
      why: 'They are usually well informed and paid. '
        + 'Name the incentive instead.',
    },
    {
      mistake: 'Listing effects without saying who bears them.',
      why: 'The point of the topic is that the cost falls on people who '
        + 'did not choose it.',
    },
    {
      mistake: 'Offering "government should ban it" as the whole answer.',
      why: 'Much of it is already illegal. '
        + 'A measure must change what is worth doing.',
    },
    {
      mistake: 'Treating mercury as only a water problem.',
      why: 'It passes into fish and into people, '
        + 'and it causes harm years later.',
    },
  ],

  extension:
    'Reclamation means restoring land after mining. '
    + 'The pits are filled, the topsoil replaced, and trees replanted. '
    + 'It is expensive. '
    + 'So a licensed operation must put money down in advance, '
    + 'and the cost cannot be walked away from.',

  figure: {
    alt: 'A river drawn across the page. Above its left end is a galamsey '
      + 'pit, marked in red, with an arrow of mercury and silt running '
      + 'down into the water. The river is clean upstream of the pit and '
      + 'red all the way downstream, where three marks along it show the '
      + 'water plant having to shut, the fish gone and the farm flooded, '
      + 'and a child drinking the water and falling ill later.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">the gain stops at the pit, the cost goes downstream</text>'
      + '<text x="95" y="66" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">the gain</text>'
      + '<text x="95" y="84" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">stops here</text>'
      + '<path d="M 40 100 H 150 V 160 H 40 Z" stroke="#c8433a"/>'
      + '<text x="95" y="124" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">galamsey</text>'
      + '<text x="95" y="146" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">pit</text>'
      + '<path d="M 95 160 V 230" stroke="#c8433a"/>'
      + '<path d="M 95 240 L 86 222 L 104 222 Z" fill="#c8433a" stroke="none"/>'
      + '<text x="112" y="188" font-size="14" text-anchor="start" fill="#c8433a" stroke="none">mercury</text>'
      + '<text x="112" y="206" font-size="14" text-anchor="start" fill="#c8433a" stroke="none">and silt</text>'
      + '<path d="M 20 250 H 95" stroke-width="9"/>'
      + '<text x="52" y="234" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">clean</text>'
      + '<path d="M 95 250 H 618" stroke="#c8433a" stroke-width="9"/>'
      + '<text x="356" y="234" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">the Pra, the Ankobra, the Birim</text>'
      + '<path d="M 190 256 V 280" stroke-width="2"/>'
      + '<text x="190" y="300" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">the water plant</text>'
      + '<text x="190" y="318" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">must shut</text>'
      + '<path d="M 370 256 V 280" stroke-width="2"/>'
      + '<text x="370" y="300" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">the fish are gone</text>'
      + '<text x="370" y="318" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">and the farm floods</text>'
      + '<path d="M 545 256 V 280" stroke-width="2"/>'
      + '<text x="545" y="300" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">a child drinks it</text>'
      + '<text x="545" y="318" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">and falls ill later</text>'
      + '<text x="320" y="362" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">nobody downstream was asked, and nobody downstream was paid</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Who gains from each kind of damage, and who pays for it',
      columns: [
        'Form',
        'What it does',
        'Who gains, and when',
        'Who pays, and when',
      ],
      rows: [
        [
          'Galamsey',
          'Mercury and silt in the Pra, Ankobra and Birim',
          'The miner, today',
          'Towns downstream, for years',
        ],
        [
          'Deforestation',
          'Removes the roots that hold the soil',
          'Whoever sells the timber or clears the land',
          'Farmers whose soil washes away',
        ],
        [
          'Bush burning',
          'Clears land fast, and burns the soil life with it',
          'The farmer, who saves three weeks',
          'The same farm, in later seasons',
        ],
        [
          'Sand winning',
          'Takes the sand from land and riverbed',
          'The seller and the builder',
          'The town that floods afterwards',
        ],
        [
          'Overgrazing',
          'Eats the cover down to bare ground',
          'The herd owner, this season',
          'Everybody, once the land turns to dust',
        ],
        [
          'Dumping in gutters',
          'Blocks the drains and kills the lagoon',
          'Whoever did not pay for collection',
          'The town, at the next heavy rain',
        ],
      ],
      note: 'The third column is always sooner, and narrower, than the '
        + 'fourth. That is the whole problem, and it is why a rule on its '
        + 'own does not fix it.',
    },
  ],
  questions: [
    {
      id: 'env-1',
      ask: 'What does galamsey put into rivers?',
      kind: 'choice',
      options: [
        'Mercury and silt',
        'Fertiliser',
        'Salt',
      ],
      answer: 'Mercury and silt',
      teach: 'Both make the water unusable, for drinking and for fish.',
      level: 3,
    },
    {
      id: 'env-2',
      ask: 'Why does bare land flood more easily than forested land?',
      kind: 'choice',
      options: [
        'Rain runs off instead of soaking in',
        'Bare land attracts more rain',
        'Soil cannot hold any water',
      ],
      answer: 'Rain runs off instead of soaking in',
      teach: 'Roots and leaf litter slow the water and let it sink.',
      level: 4,
    },
    {
      id: 'env-3',
      ask: 'What makes environmental damage keep happening?',
      kind: 'choice',
      options: [
        'The gain is immediate and personal, the cost delayed and shared',
        'Nobody knows it is harmful',
        'There are no laws against it',
      ],
      answer: 'The gain is immediate and personal, the cost delayed and '
        + 'shared',
      teach: 'Which is why a solution has to change the arithmetic '
        + 'and not only the rules.',
      level: 5,
    },
  ],
})

/* ── the constitution and the arms of government ───────────────────────── */

teach({
  topicId: 'constitution-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The constitution is the highest law and everything else must agree '
      + 'with it. '
      + 'The legislature makes laws, '
      + 'the executive carries them out, '
      + 'and the judiciary interprets them and settles disputes. '
      + 'They are separated so that each can check the others.',
    method: [
      'Name the arm and its job in one line.',
      'Then name what checks it, and how.',
      'Trace any question through: who made it, who does it, who rules on '
        + 'it.',
    ],
  },

  why:
    'In 2012 an election was decided by a few hundred thousand '
    + 'votes, and the losing side went to court. '
    + 'The judges heard the case for months and then said the '
    + 'winner had won. '
    + 'The man who lost was not jailed, and the man who won did '
    + 'not arrest him. '
    + 'Nothing physically forced either of them to behave that '
    + 'way, so what turned a possible fight into a settled rule?',

  idea:
    'Ghana’s constitution of 1992 is the supreme law, '
    + 'and any law or act that conflicts with it is void. '
    + 'It sets up three arms of government, '
    + 'each with its own work and its own limits. '
    + 'The constitution also guarantees fundamental human rights '
    + 'and sets up independent bodies such as the Electoral Commission '
    + 'and the Commission on Human Rights and Administrative Justice.',

  mechanism:
    'Naming the three arms is the easy part. '
    + 'The question worth answering is why they are separated at all, '
    + 'and the answer is that each one is dangerous alone. '
    + 'Suppose one body made the laws, enforced them, and judged them. '
    + 'It could pass a law to arrest its critics, '
    + 'arrest them, '
    + 'and rule that the arrest was lawful. '
    + 'Nothing in that chain could be challenged, '
    + 'because the same hands hold every link. '
    + 'Separation breaks the chain, '
    + 'because no one arm can carry that sequence through by itself: '
    + 'whoever makes a law is not the one who rules on it, '
    + 'and whoever carries it out does not control the money. '
    + 'So each arm needs the others to finish anything, '
    + 'and that is the whole design. '
    + 'This is also why the constitution is supreme rather than just '
    + 'important. '
    + 'If Parliament could change it with an ordinary vote, '
    + 'the limits on Parliament would be set by Parliament, '
    + 'which is no limit at all. '
    + 'Making it harder to amend than to pass a law '
    + 'is what makes it a check rather than a statement of intent.',

  recap:
    'Three different bodies each do part of the governing of '
    + 'Ghana. '
    + 'Parliament is a house of elected members in Accra, and its '
    + 'work is making laws. '
    + 'The President, with the ministers, runs the country day to '
    + 'day and carries those laws out. '
    + 'The courts are judges who decide what a law means and '
    + 'whether somebody has broken it. '
    + 'This lesson says what each of the three is for, and why '
    + 'the country deliberately keeps the three jobs in three '
    + 'separate pairs of hands.',

  method: [
    'State that the constitution is the supreme law.',
    'Name the legislature and its job.',
    'Name the executive and its job.',
    'Name the judiciary and its job.',
    'For each, name what checks it and how.',
    'Use the separation to explain, not just to list.',
    'Mention one independent body and what it protects.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which arm of government makes the laws?',
      steps: [
        'Making law is the legislative function.',
      ],
      answer: 'The legislature, which in Ghana is Parliament.',
    },
    {
      level: 4,
      ask: 'Give one way Parliament checks the executive.',
      steps: [
        'The executive needs money and people to act.',
        'Parliament approves both.',
      ],
      answer: 'Parliament approves the budget and taxes, '
        + 'and must approve ministerial appointments, '
        + 'so the executive cannot spend or staff itself alone.',
    },
    {
      level: 5,
      ask: 'Why would it be dangerous for one body to make, enforce and '
        + 'judge the law?',
      steps: [
        'It could pass a law against its critics.',
        'It could enforce that law itself.',
        'It could then rule that its own action was lawful.',
        'No step could be challenged, because the same hands hold all '
          + 'three.',
      ],
      answer: 'Because it could pass a law, act on it, '
        + 'and then judge its own action lawful, '
        + 'with nobody able to challenge any step. '
        + 'Separation means each arm needs the others to finish anything.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the President makes the laws.',
      why: 'Parliament makes them. '
        + 'The President carries them out and may assent or refuse.',
    },
    {
      mistake: 'Listing the arms without the checks.',
      why: 'The checks are what the question is for. '
        + 'The lists are in every textbook.',
    },
    {
      mistake: 'Thinking the constitution is just a long law.',
      why: 'It is supreme and harder to amend, '
        + 'which is what makes it a limit on government.',
    },
    {
      mistake: 'Confusing the judiciary with the police.',
      why: 'The police are part of the executive. '
        + 'The courts are separate from them.',
    },
  ],

  extension:
    'Local government carries the same idea downwards: '
    + 'district assemblies make by-laws and run local services, '
    + 'so that decisions are made nearer the people affected. '
    + 'It is called decentralisation.',

  figure: {
    alt: 'Parliament, the President and the courts drawn as three boxes in '
      + 'a triangle, all of them under the 1992 constitution. An arrow '
      + 'from the courts up to Parliament is labelled that the courts can '
      + 'strike down an unlawful law, and an arrow from Parliament down to '
      + 'the President is labelled that Parliament approves his money and '
      + 'his ministers.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">why the three jobs are not in one pair of hands</text>'
      + '<text x="320" y="54" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">all three sit under the 1992 constitution</text>'
      + '<path d="M 230 72 H 410 V 132 H 230 Z"/>'
      + '<text x="320" y="96" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Parliament</text>'
      + '<text x="320" y="118" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">makes the laws</text>'
      + '<path d="M 24 250 H 204 V 310 H 24 Z"/>'
      + '<text x="114" y="274" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the President</text>'
      + '<text x="114" y="296" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">carries them out</text>'
      + '<path d="M 436 250 H 616 V 310 H 436 Z"/>'
      + '<text x="526" y="274" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the courts</text>'
      + '<text x="526" y="296" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">interpret them</text>'
      + '<path d="M 472 250 L 384 142"/>'
      + '<path d="M 378 134 L 396 139 L 384 150 Z" fill="currentColor" stroke="none"/>'
      + '<text x="502" y="196" font-size="13" text-anchor="start" fill="currentColor" stroke="none">can strike down</text>'
      + '<text x="502" y="214" font-size="13" text-anchor="start" fill="currentColor" stroke="none">an unlawful law</text>'
      + '<path d="M 268 140 L 168 242"/>'
      + '<path d="M 162 250 L 166 232 L 179 243 Z" fill="currentColor" stroke="none"/>'
      + '<text x="24" y="186" font-size="13" text-anchor="start" fill="currentColor" stroke="none">approves his</text>'
      + '<text x="24" y="204" font-size="13" text-anchor="start" fill="currentColor" stroke="none">money and his</text>'
      + '<text x="24" y="222" font-size="13" text-anchor="start" fill="currentColor" stroke="none">ministers</text>'
      + '<text x="320" y="356" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">the same hands never make a law, enforce it and judge it</text>'
      + '<text x="320" y="382" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">so each one needs the other two to finish anything</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What each arm of government does, and what holds it in '
        + 'check',
      columns: ['Arm', 'Who it is', 'What it does', 'What checks it'],
      rows: [
        [
          'Legislature',
          'Parliament',
          'Makes laws, approves taxes and spending',
          'The courts can strike its laws down',
        ],
        [
          'Executive',
          'The President, ministers, the civil service',
          'Carries the laws out and runs the country',
          'Parliament holds the money and approves the ministers',
        ],
        [
          'Judiciary',
          'The courts, headed by the Supreme Court',
          'Interprets the law and settles disputes',
          'It did not write the law it is interpreting',
        ],
      ],
      note: 'The constitution is harder to amend than an ordinary law is to '
        + 'pass. That is what makes it a check rather than a statement of '
        + 'intent.',
    },
  ],
  questions: [
    {
      id: 'cst-1',
      ask: 'Which arm interprets the law?',
      kind: 'choice',
      options: ['The judiciary', 'The legislature', 'The executive'],
      answer: 'The judiciary',
      teach: 'It also settles disputes and can declare an act '
        + 'unconstitutional.',
      level: 3,
    },
    {
      id: 'cst-2',
      ask: 'What makes the constitution supreme?',
      kind: 'choice',
      options: [
        'Any law that conflicts with it is void',
        'It is the longest law',
        'It was written first',
      ],
      answer: 'Any law that conflicts with it is void',
      teach: 'And it is harder to amend than an ordinary law, '
        + 'which is what makes the limit real.',
      level: 4,
    },
    {
      id: 'cst-3',
      ask: 'Why are the three arms separated?',
      kind: 'choice',
      options: [
        'So each can check the others',
        'To employ more people',
        'Because the work is too much for one',
      ],
      answer: 'So each can check the others',
      teach: 'One body holding all three could act against anybody '
        + 'and rule itself lawful.',
      level: 5,
    },
  ],
})

/* ── rights and responsibilities ───────────────────────────────────────── */

teach({
  topicId: 'rights-duties',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A right is something you are entitled to. '
      + 'Every right has a matching duty, '
      + 'because your right only exists if other people respect it. '
      + 'So the duty attached to your right to speak '
      + 'is to let others speak too.',
    method: [
      'State the right in the constitution’s terms.',
      'Name the duty that must be kept for everybody to have it.',
      'Give one example of the right being claimed without the duty.',
    ],
  },

  why:
    'A pupil talks loudly all through a lesson. '
    + 'Asked to stop, he says he has freedom of speech, '
    + 'and he is right that the constitution gives him that. '
    + 'The thirty pupils around him have a right to education, '
    + 'and the constitution gives them that too. '
    + 'Both claims are real. '
    + 'They cannot both be satisfied in that room. '
    + 'So how is a case like this decided?',

  idea:
    'The constitution guarantees fundamental human rights. '
    + 'They include life, personal liberty and dignity. '
    + 'They include freedom of speech, assembly and religion. '
    + 'They include equality before the law, education, '
    + 'and protection from discrimination. '
    + 'Children have further rights. '
    + 'They have a right to a name, to education, to health care, '
    + 'and to protection from work that harms them. '
    + 'Each right carries a responsibility. '
    + 'A right is only real while other people keep to it.',

  mechanism:
    'Rights and duties are taught as two lists, '
    + 'and they are one thing seen from two sides. '
    + 'A right is a claim on other people’s behaviour. '
    + 'Your right to speak means nothing unless others let you, '
    + 'and your right to property means nothing unless others refrain from '
    + 'taking it. '
    + 'So every right you hold is somebody else’s duty, '
    + 'which means the duties you owe are the price of everybody else’s '
    + 'rights, '
    + 'including your own. '
    + 'This is why a person demanding a right while ignoring the duty '
    + 'is not being selfish in a vague way. '
    + 'They are asking for a system they are not maintaining. '
    + 'The clearest case is the one learners meet daily. '
    + 'A pupil who talks through a lesson is claiming freedom of '
    + 'expression, '
    + 'and is taking away thirty other pupils’ right to education. '
    + 'Both are real rights, '
    + 'and when two rights collide the question is which one is damaged '
    + 'more, '
    + 'and whether there is another time and place for the other. '
    + 'There is somewhere else to talk and nowhere else to have that '
    + 'lesson, '
    + 'so the answer is not difficult. '
    + 'That is also how courts reason about rights that conflict, '
    + 'which is worth knowing, '
    + 'because examination questions are often about exactly such a clash.',

  recap:
    'A right is something you may claim '
    + 'and nobody may take from you. '
    + 'In Ghana those claims are written down in one document, '
    + 'the constitution, adopted in 1992. '
    + 'Every law and every official has to obey it. '
    + 'Chapter Five of it lists the rights a person holds here. '
    + 'Because it is written, a right is not a favour '
    + 'somebody grants you. '
    + 'It is something a court can be asked to enforce. '
    + 'This lesson names the main rights '
    + 'and shows why each one comes with something you owe.',

  method: [
    'Name the right.',
    'Say where it comes from: the constitution.',
    'Name the duty that keeps it real for everybody.',
    'Give an example of the right claimed without the duty.',
    'If two rights clash, ask which is damaged more '
      + 'and whether the other has another time and place.',
    'Say who protects the right: the courts, or a commission.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What duty goes with the right to education?',
      steps: [
        'Education happens in a shared place.',
      ],
      answer: 'To attend, to work, and to let others learn.',
    },
    {
      level: 4,
      ask: 'Why does the right to free speech not include defaming '
        + 'somebody?',
      steps: [
        'Defamation damages another person’s dignity and name.',
        'Dignity is itself a protected right.',
        'So the claim would destroy a right of equal standing.',
      ],
      answer: 'Because the other person’s right to dignity and a good name '
        + 'is protected too. '
        + 'A freedom cannot include destroying somebody else’s right.',
    },
    {
      level: 5,
      ask: 'A pupil says talking in class is his freedom of expression. '
        + 'Answer him.',
      steps: [
        'Both expression and education are real rights.',
        'His talking removes thirty pupils’ lesson.',
        'He can talk at break; they cannot have that lesson again.',
        'So one right has another time and place and the other does not.',
      ],
      answer: 'Both are real rights, '
        + 'but his talking takes away thirty other pupils’ right to learn. '
        + 'He can speak at another time; '
        + 'they cannot have that lesson again.',
    },
  ],

  traps: [
    {
      mistake: 'Learning rights and duties as two unconnected lists.',
      why: 'Every right you hold is somebody else’s duty. '
        + 'They are one thing from two sides.',
    },
    {
      mistake: 'Treating a right as unlimited.',
      why: 'A right stops where it destroys somebody else’s. '
        + 'That is how courts reason about it.',
    },
    {
      mistake: 'Naming a duty with no right attached.',
      why: 'The question asks for the pair. '
        + 'A duty on its own is only a rule.',
    },
    {
      mistake: 'Forgetting that paying tax is a duty attached to a right.',
      why: 'Public schools, clinics and roads are paid for from tax.',
    },
  ],

  extension:
    'The Commission on Human Rights and Administrative Justice '
    + 'exists so that a person can complain about the state '
    + 'without needing to afford a court case. '
    + 'A right with no affordable way to claim it is incomplete.',

  figure: {
    alt: 'One pupil, drawn in red, is talking and claiming free speech. The '
      + 'rest of the class, drawn in green, are claiming their right to '
      + 'learn. The two claims meet in the middle of the picture and '
      + 'cross, because both are real rights and there is only one room.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">two real rights, and only one room</text>'
      + '<circle cx="110" cy="128" r="20" stroke="#c8433a"/>'
      + '<path d="M 110 148 V 179" stroke="#c8433a"/>'
      + '<path d="M 85 163 H 135" stroke="#c8433a"/>'
      + '<path d="M 110 179 L 93 199" stroke="#c8433a"/>'
      + '<path d="M 110 179 L 127 199" stroke="#c8433a"/>'
      + '<path d="M 136 120 L 154 112" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 138 130 L 158 130" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 136 140 L 154 148" stroke="#c8433a" stroke-width="2"/>'
      + '<text x="110" y="286" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">one pupil talking,</text>'
      + '<text x="110" y="306" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">claiming free speech</text>'
      + '<circle cx="430" cy="118" r="11" stroke="#0f8a4d"/>'
      + '<path d="M 430 129 V 146" stroke="#0f8a4d"/>'
      + '<path d="M 417 137 H 443" stroke="#0f8a4d"/>'
      + '<path d="M 430 146 L 421 157" stroke="#0f8a4d"/>'
      + '<path d="M 430 146 L 439 157" stroke="#0f8a4d"/>'
      + '<circle cx="478" cy="118" r="11" stroke="#0f8a4d"/>'
      + '<path d="M 478 129 V 146" stroke="#0f8a4d"/>'
      + '<path d="M 465 137 H 491" stroke="#0f8a4d"/>'
      + '<path d="M 478 146 L 469 157" stroke="#0f8a4d"/>'
      + '<path d="M 478 146 L 487 157" stroke="#0f8a4d"/>'
      + '<circle cx="526" cy="118" r="11" stroke="#0f8a4d"/>'
      + '<path d="M 526 129 V 146" stroke="#0f8a4d"/>'
      + '<path d="M 513 137 H 539" stroke="#0f8a4d"/>'
      + '<path d="M 526 146 L 517 157" stroke="#0f8a4d"/>'
      + '<path d="M 526 146 L 535 157" stroke="#0f8a4d"/>'
      + '<circle cx="574" cy="118" r="11" stroke="#0f8a4d"/>'
      + '<path d="M 574 129 V 146" stroke="#0f8a4d"/>'
      + '<path d="M 561 137 H 587" stroke="#0f8a4d"/>'
      + '<path d="M 574 146 L 565 157" stroke="#0f8a4d"/>'
      + '<path d="M 574 146 L 583 157" stroke="#0f8a4d"/>'
      + '<circle cx="430" cy="186" r="11" stroke="#0f8a4d"/>'
      + '<path d="M 430 197 V 214" stroke="#0f8a4d"/>'
      + '<path d="M 417 205 H 443" stroke="#0f8a4d"/>'
      + '<path d="M 430 214 L 421 225" stroke="#0f8a4d"/>'
      + '<path d="M 430 214 L 439 225" stroke="#0f8a4d"/>'
      + '<circle cx="478" cy="186" r="11" stroke="#0f8a4d"/>'
      + '<path d="M 478 197 V 214" stroke="#0f8a4d"/>'
      + '<path d="M 465 205 H 491" stroke="#0f8a4d"/>'
      + '<path d="M 478 214 L 469 225" stroke="#0f8a4d"/>'
      + '<path d="M 478 214 L 487 225" stroke="#0f8a4d"/>'
      + '<circle cx="526" cy="186" r="11" stroke="#0f8a4d"/>'
      + '<path d="M 526 197 V 214" stroke="#0f8a4d"/>'
      + '<path d="M 513 205 H 539" stroke="#0f8a4d"/>'
      + '<path d="M 526 214 L 517 225" stroke="#0f8a4d"/>'
      + '<path d="M 526 214 L 535 225" stroke="#0f8a4d"/>'
      + '<circle cx="574" cy="186" r="11" stroke="#0f8a4d"/>'
      + '<path d="M 574 197 V 214" stroke="#0f8a4d"/>'
      + '<path d="M 561 205 H 587" stroke="#0f8a4d"/>'
      + '<path d="M 574 214 L 565 225" stroke="#0f8a4d"/>'
      + '<path d="M 574 214 L 583 225" stroke="#0f8a4d"/>'
      + '<text x="502" y="286" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">the rest of the class,</text>'
      + '<text x="502" y="306" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">claiming their right to learn</text>'
      + '<path d="M 184 196 H 258" stroke="#c8433a"/>'
      + '<path d="M 266 196 L 248 186 L 248 206 Z" fill="#c8433a" stroke="none"/>'
      + '<text x="216" y="180" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">to speak</text>'
      + '<path d="M 396 196 H 322" stroke="#0f8a4d"/>'
      + '<path d="M 314 196 L 332 186 L 332 206 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="364" y="180" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">to learn</text>'
      + '<path d="M 280 186 L 300 206"/>'
      + '<path d="M 300 186 L 280 206"/>'
      + '<text x="320" y="348" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">there is somewhere else to talk,</text>'
      + '<text x="320" y="374" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">and nowhere else to have that lesson</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each right, the duty that comes with it, and what happens '
        + 'when the duty is dropped',
      columns: [
        'Right',
        'The duty that comes with it',
        'When the duty is dropped',
      ],
      rows: [
        [
          'Free speech',
          'Not to defame or incite',
          'A rumour that ruins somebody',
        ],
        [
          'Education',
          'To attend, and to let others learn',
          'One pupil talking through the lesson',
        ],
        [
          'To vote',
          'To stay peaceful about the result',
          'Violence when the count goes the other way',
        ],
        ['Public services', 'To pay tax', 'A clinic with no medicine in it'],
        [
          'Property',
          'Not to take what is another person’s',
          'Theft, and nobody able to keep anything',
        ],
        ['Life and liberty', 'Not to harm or detain anybody', 'Mob justice'],
      ],
      note: 'Read any row across and it is one thing, not two: the duty in '
        + 'the middle column is what makes the right in the first column '
        + 'real.',
    },
  ],
  questions: [
    {
      id: 'rgt-1',
      ask: 'Which document guarantees fundamental human rights in Ghana?',
      kind: 'choice',
      options: [
        'The 1992 Constitution',
        'An Act of Parliament',
        'A district by-law',
      ],
      answer: 'The 1992 Constitution',
      teach: 'It is the supreme law, so other laws must agree with it.',
      level: 3,
    },
    {
      id: 'rgt-2',
      ask: 'Why does every right have a duty attached?',
      kind: 'choice',
      options: [
        'A right only exists if others respect it',
        'The law likes balance',
        'Duties came first',
      ],
      answer: 'A right only exists if others respect it',
      teach: 'Your right is somebody else’s duty, and theirs is yours.',
      level: 4,
    },
    {
      id: 'rgt-3',
      ask: 'When two rights conflict, what does a court ask?',
      kind: 'choice',
      options: [
        'Which is damaged more, and whether the other has another time and '
          + 'place',
        'Which is older',
        'Which belongs to more people',
      ],
      answer: 'Which is damaged more, and whether the other has another '
        + 'time and place',
      teach: 'This is exactly the reasoning in the talking in class case.',
      level: 5,
    },
  ],
})

/* ── production and its factors ────────────────────────────────────────── */

teach({
  topicId: 'production-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Production needs four factors: '
      + 'land, labour, capital and the entrepreneur. '
      + 'Land is what nature gives, labour is human effort, '
      + 'capital is what was made in order to make something else, '
      + 'and the entrepreneur organises the other three and takes the risk. '
      + 'Remove any one and nothing is produced.',
    method: [
      'Name all four factors for the business in question.',
      'Decide capital by asking whether the thing is used to make '
        + 'something else.',
      'Name the entrepreneur as the one carrying the risk.',
    ],
  },

  why:
    'A woman bakes bread at Madina and sells it. '
    + 'The flour cost her money, the girl who kneads is paid a '
    + 'wage, and the oven was rented from somebody. '
    + 'After every one of those is paid there is money left over, '
    + 'and it is hers to keep. '
    + 'Nobody paid her a wage at all, so what is that last amount '
    + 'for?',

  idea:
    'Production is making goods or providing services to satisfy wants. '
    + 'It needs four factors, and each of them earns its own reward. '
    + 'Three of the four are paid whatever happens. '
    + 'The fourth, the entrepreneur, brings the other three together, '
    + 'decides what to produce, and carries the risk of being wrong.',

  mechanism:
    'Two things in this topic are consistently got wrong, '
    + 'and both have a test that settles them. '
    + 'First, capital is not money. '
    + 'Capital is a produced thing used to produce something else, '
    + 'so the test is: is this being used to make another thing? '
    + 'A seamstress’s sewing machine is capital, '
    + 'because she uses it to produce dresses. '
    + 'The same machine in somebody’s sitting room for their own clothes '
    + 'is not capital, it is a consumer good. '
    + 'Money is how capital is bought, '
    + 'and calling the money itself capital hides the distinction '
    + 'that makes the factor useful. '
    + 'Second, the entrepreneur is defined by risk, not by ownership or '
    + 'position. '
    + 'The entrepreneur is whoever loses if nobody buys. '
    + 'A manager on a salary is labour, however senior, '
    + 'because the salary is paid whatever happens. '
    + 'The woman who borrowed to buy the oven, '
    + 'bakes the bread, and finds the market quiet, '
    + 'is the entrepreneur, '
    + 'and this is why her reward is profit rather than a wage: '
    + 'profit is what is left after everybody else has been paid, '
    + 'which may be nothing. '
    + 'Once you look for who bears the loss, '
    + 'the fourth factor stops being vague.',

  recap:
    'Making anything takes three different kinds of input. '
    + 'To bake bread you need materials, which are the flour, the '
    + 'sugar and the water. '
    + 'You need work, which is somebody kneading and watching the '
    + 'oven. '
    + 'And you need tools, which are the oven, the pans and the '
    + 'room they stand in. '
    + 'Take away any one of the three and no bread comes out. '
    + 'This lesson names those inputs with the words an examiner '
    + 'uses, adds a fourth that is easy to miss, and gives the '
    + 'reward each one earns.',

  method: [
    'State what is being produced.',
    'Name the land: what natural resource is used.',
    'Name the labour: who works, and at what.',
    'Name the capital: ask what was made in order to make this.',
    'Name the entrepreneur: ask who loses if nobody buys.',
    'Give the reward for each factor.',
    'Say what happens if one factor is missing.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What reward does labour earn?',
      steps: [
        'Match each factor to its reward.',
      ],
      answer: 'Wages or salary.',
    },
    {
      level: 4,
      ask: 'A woman bakes and sells bread. '
        + 'Name the four factors in her business.',
      steps: [
        'Land: the natural resources used.',
        'Labour: the work done.',
        'Capital: made things used to produce bread.',
        'Entrepreneur: who carries the risk.',
      ],
      answer: 'Land: the site and the water and firewood. '
        + 'Labour: her own work and anybody she pays. '
        + 'Capital: the oven, the pans and the shop. '
        + 'Entrepreneur: herself, '
        + 'because she loses if the bread is not sold.',
    },
    {
      level: 5,
      ask: 'Is a sewing machine always capital? Explain.',
      steps: [
        'Capital is a produced thing used to produce something else.',
        'A seamstress uses hers to make dresses to sell.',
        'A family using one for their own clothes produces nothing for '
          + 'sale.',
      ],
      answer: 'No. '
        + 'It is capital when it is used to produce something else, '
        + 'as in a seamstress’s shop. '
        + 'Used at home for the family’s own clothes '
        + 'it is a consumer good.',
    },
  ],

  traps: [
    {
      mistake: 'Calling money capital.',
      why: 'Money buys capital. '
        + 'Capital is the produced thing used to produce something else.',
    },
    {
      mistake: 'Calling a senior manager the entrepreneur.',
      why: 'A salary is paid whatever happens. '
        + 'The entrepreneur is whoever bears the loss.',
    },
    {
      mistake: 'Listing the factors without applying them to the business '
        + 'asked about.',
      why: 'The question nearly always says "in a named local business". '
        + 'The marks are in the application.',
    },
    {
      mistake: 'Treating profit as the same kind of reward as a wage.',
      why: 'A wage is agreed in advance. '
        + 'Profit is what is left over, and may be nothing.',
    },
  ],

  extension:
    'Division of labour means splitting a job into parts '
    + 'so each worker repeats one. '
    + 'It raises output per worker, '
    + 'and its costs are boredom '
    + 'and a worker who can do only one part of the job.',

  figure: {
    alt: 'Four boxes on the left, land, labour, capital and the '
      + 'entrepreneur, with arrows running from all four into a box marked '
      + 'the bakery, and an arrow out of it to bread that is sold or not '
      + 'sold. A line runs back from the bread to the entrepreneur, '
      + 'because rent, wages and interest are paid first and profit is '
      + 'whatever is left.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">four factors in, bread out, and each factor paid</text>'
      + '<path d="M 16 54 H 166 V 98 H 16 Z"/>'
      + '<text x="91" y="76" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">land</text>'
      + '<text x="91" y="92" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">the plot it stands on</text>'
      + '<path d="M 16 110 H 166 V 154 H 16 Z"/>'
      + '<text x="91" y="132" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">labour</text>'
      + '<text x="91" y="148" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">the baker</text>'
      + '<path d="M 16 166 H 166 V 210 H 16 Z"/>'
      + '<text x="91" y="188" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">capital</text>'
      + '<text x="91" y="204" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">the oven and the van</text>'
      + '<path d="M 16 222 H 166 V 266 H 16 Z" stroke="#0f8a4d"/>'
      + '<text x="91" y="244" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">the entrepreneur</text>'
      + '<text x="91" y="260" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">she borrowed for it</text>'
      + '<path d="M 172 76 L 234 136"/>'
      + '<path d="M 172 132 L 234 152"/>'
      + '<path d="M 172 188 L 234 168"/>'
      + '<path d="M 172 244 L 234 184" stroke="#0f8a4d"/>'
      + '<path d="M 242 160 L 224 150 L 224 170 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 258 120 H 398 V 200 H 258 Z"/>'
      + '<text x="328" y="155" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">the bakery</text>'
      + '<text x="328" y="178" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">brings them together</text>'
      + '<path d="M 404 160 H 448"/>'
      + '<path d="M 456 160 L 438 150 L 438 170 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 470 128 H 620 V 192 H 470 Z" stroke="#0f8a4d"/>'
      + '<text x="545" y="155" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">bread, sold</text>'
      + '<text x="545" y="178" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">or not sold</text>'
      + '<path d="M 545 192 V 300 H 100 V 276"/>'
      + '<path d="M 91 266 L 82 284 L 100 284 Z" fill="currentColor" stroke="none"/>'
      + '<text x="320" y="330" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">rent, wages and interest are paid first</text>'
      + '<text x="320" y="358" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">profit is whatever is left, and it may be nothing</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The four factors, what each earns, and what each one is in '
        + 'a village bakery',
      columns: ['Factor', 'What it is', 'Its reward', 'In a bakery'],
      rows: [
        [
          'Land',
          'Whatever nature gives: ground, water, minerals, forest',
          'Rent',
          'The plot the bakery stands on',
        ],
        [
          'Labour',
          'Human effort, of hand and of mind',
          'Wages',
          'The baker, and whoever sells',
        ],
        [
          'Capital',
          'A made thing used to produce something else',
          'Interest',
          'The oven, the bowls, the van',
        ],
        [
          'Entrepreneur',
          'Whoever decides what to produce and loses if nobody buys',
          'Profit',
          'The woman who borrowed for the oven',
        ],
      ],
      note: 'Profit is the only reward that is not agreed in advance, '
        + 'because it is what is left once the other three are paid, and '
        + 'it may be nothing.',
    },
  ],
  questions: [
    {
      id: 'pro-1',
      ask: 'Which is NOT a factor of production?',
      kind: 'choice',
      options: ['Money', 'Land', 'Labour'],
      answer: 'Money',
      teach: 'Money buys capital. Capital is the produced thing itself.',
      level: 3,
    },
    {
      id: 'pro-2',
      ask: 'What reward does the entrepreneur earn?',
      kind: 'choice',
      options: ['Profit', 'Wages', 'Rent'],
      answer: 'Profit',
      teach: 'Profit is what remains after everybody else is paid, '
        + 'which may be nothing.',
      level: 4,
    },
    {
      id: 'pro-3',
      ask: 'How do you identify the entrepreneur?',
      kind: 'choice',
      options: [
        'Ask who loses if nobody buys',
        'Ask who is most senior',
        'Ask who owns the building',
      ],
      answer: 'Ask who loses if nobody buys',
      teach: 'The entrepreneur is defined by bearing the risk.',
      level: 5,
    },
  ],
})

/* ── money, saving and banking ─────────────────────────────────────────── */

teach({
  topicId: 'money-banking-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Money works because everybody accepts it. '
      + 'A bank takes deposits, keeps them safe, and lends them out. '
      + 'Interest earned grows savings; interest charged is the cost of a '
      + 'loan. '
      + 'Saving matters because income and need do not arrive at the same '
      + 'time.',
    method: [
      'Say what job money is doing in the question.',
      'For a bank, say where the money it lends came from.',
      'For interest, say who pays and who receives.',
    ],
  },

  why:
    'You keep 200 cedis in a box under your bed for a year, and '
    + 'at the end of the year you still have 200 cedis. '
    + 'Your uncle puts his 200 in a bank for the same year and '
    + 'takes out 215. '
    + 'The bank did not print the extra 15, and nobody made them '
    + 'a gift of it. '
    + 'So where did those 15 cedis come from?',

  idea:
    'Money is anything generally accepted in exchange for goods and '
    + 'services. '
    + 'It does four separate jobs, '
    + 'and a question usually turns on which of them is being done. '
    + 'A commercial bank accepts deposits, keeps money safe, '
    + 'transfers it, and lends it. '
    + 'The Bank of Ghana is the central bank: '
    + 'it issues the currency and supervises the other banks. '
    + 'Interest is the charge for using somebody else’s money: '
    + 'a saver receives it, a borrower pays it. '
    + 'Saving means setting income aside now for a need later, '
    + 'and people also save through susu collectors and credit unions.',

  mechanism:
    'Two ideas make this topic make sense, '
    + 'and both are usually skipped. '
    + 'The first is what a bank actually does, '
    + 'because learners picture a vault with their money in it. '
    + 'The bank lends most of it out. '
    + 'The money you deposit is the money somebody else borrows, '
    + 'and the interest the borrower pays is where the interest you receive '
    + 'comes from, '
    + 'with the difference kept by the bank. '
    + 'That is the whole business, '
    + 'and it explains two things immediately: '
    + 'why borrowing always costs more than saving earns, '
    + 'and why a bank cannot give everybody their money back on the same '
    + 'day, '
    + 'which is why confidence matters so much in banking. '
    + 'The second idea is why saving matters at all, '
    + 'and the honest reason is timing rather than virtue. '
    + 'A farmer earns at harvest and eats all year. '
    + 'A trader earns daily and pays school fees in January. '
    + 'Income and need do not arrive together, '
    + 'so saving is how you move money from a month that has some '
    + 'to a month that needs some. '
    + 'Put that way, saving is not a sacrifice, it is transport. '
    + 'And it explains why saving a small amount regularly works better '
    + 'than waiting to save a large amount once, '
    + 'because the small amount is available and the large one never is.',

  recap:
    'Money is anything people will generally accept in exchange '
    + 'for goods. '
    + 'A cedi note is only paper, and it works because the trader '
    + 'is confident the next person will take it from her too. '
    + 'Before notes, goods were exchanged directly: a farmer with '
    + 'yams had to find a man with a goat who wanted yams, and if '
    + 'he did not want them there was no trade. '
    + 'Keeping cash in a box at home keeps it safe and does '
    + 'nothing else with it. '
    + 'This lesson is about what a bank does with money instead, '
    + 'and where interest comes from.',

  method: [
    'Identify which function of money the question is about.',
    'For a bank, list its services: safekeeping, transfer, lending.',
    'Say where the money a bank lends came from: other people’s deposits.',
    'For interest, name who pays and who receives.',
    'Explain saving by timing: income now, need later.',
    'Compare saving at a bank with susu and at home, and give one '
      + 'advantage of each.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give two services a commercial bank offers.',
      steps: [
        'Think what people go to a bank to do.',
      ],
      answer: 'Keeping money safe and lending it. '
        + 'Transferring money also counts.',
    },
    {
      level: 4,
      ask: 'Where does the money a bank lends come from?',
      steps: [
        'A bank does not print money.',
        'It holds what depositors brought in.',
      ],
      answer: 'From the deposits of its other customers.',
    },
    {
      level: 5,
      ask: 'Why does a bank charge borrowers more interest than it pays '
        + 'savers?',
      steps: [
        'The interest paid to savers comes from borrowers.',
        'The bank has costs: staff, buildings, bad loans.',
        'The difference between the two rates covers those and leaves a '
          + 'profit.',
      ],
      answer: 'Because the interest it pays savers comes out of what '
        + 'borrowers pay, '
        + 'and the difference covers the bank’s costs and its profit.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking the bank keeps your notes in a box for you.',
      why: 'It lends most of them out. '
        + 'That is where your interest comes from.',
    },
    {
      mistake: 'Confusing the central bank with a commercial bank.',
      why: 'The Bank of Ghana issues currency and supervises. '
        + 'It is not where a household saves.',
    },
    {
      mistake: 'Explaining saving as being good rather than as timing.',
      why: 'Income and need arrive at different times. '
        + 'Saving moves money between them.',
    },
    {
      mistake: 'Saying money has value because it is paper.',
      why: 'It has value because it is generally accepted. '
        + 'That is the whole of it.',
    },
  ],

  extension:
    'Inflation is prices rising over time, '
    + 'which means money stored under a mattress loses value even though '
    + 'the number on it does not change. '
    + 'This is the strongest argument for saving where interest is paid.',

  figure: {
    alt: 'The saver, the bank and the borrower drawn as three boxes in a '
      + 'row. A deposit goes from the saver into the bank and the bank '
      + 'lends it on to the borrower, while interest comes back from the '
      + 'borrower to the bank and a smaller amount of interest from the '
      + 'bank to the saver, the bank keeping the difference.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">the money you deposit is the money somebody else borrows</text>'
      + '<path d="M 30 135 H 170 V 215 H 30 Z"/>'
      + '<text x="100" y="182" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">the saver</text>'
      + '<path d="M 250 135 H 390 V 215 H 250 Z"/>'
      + '<text x="320" y="170" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">the bank</text>'
      + '<text x="320" y="196" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">keeps the difference</text>'
      + '<path d="M 470 135 H 610 V 215 H 470 Z"/>'
      + '<text x="540" y="182" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">the borrower</text>'
      + '<path d="M 176 160 H 230"/>'
      + '<path d="M 240 160 L 222 150 L 222 170 Z" fill="currentColor" stroke="none"/>'
      + '<text x="210" y="146" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">deposit</text>'
      + '<path d="M 244 192 H 190"/>'
      + '<path d="M 180 192 L 198 182 L 198 202 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="210" y="232" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">interest</text>'
      + '<path d="M 396 160 H 450"/>'
      + '<path d="M 460 160 L 442 150 L 442 170 Z" fill="currentColor" stroke="none"/>'
      + '<text x="430" y="146" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">lends it</text>'
      + '<path d="M 464 192 H 410"/>'
      + '<path d="M 400 192 L 418 182 L 418 202 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="430" y="232" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">more interest</text>'
      + '<text x="320" y="300" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so borrowing always costs more than saving earns,</text>'
      + '<text x="320" y="328" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">and the bank cannot pay everybody back on one day,</text>'
      + '<text x="320" y="356" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">which is why confidence matters so much</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The four jobs money does',
      columns: ['Job', 'What it means', 'An example'],
      rows: [
        [
          'Medium of exchange',
          'It is accepted for anything, so you need not swap goods',
          'Buying kenkey with cedis',
        ],
        [
          'Measure of value',
          'It lets two different things be compared',
          'A goat priced against a bag of maize',
        ],
        [
          'Store of value',
          'It keeps its worth, so you can hold it for later',
          'Saving this month for fees in January',
        ],
        [
          'Standard for future payment',
          'A debt can be fixed now and settled later',
          'Agreeing a loan to be repaid after harvest',
        ],
      ],
      note: 'Money holds its value only while people trust it, which is why '
        + 'the first row is the one the other three rest on.',
    },
  ],
  questions: [
    {
      id: 'mon-1',
      ask: 'Why does money work?',
      kind: 'choice',
      options: [
        'Everybody accepts it in exchange',
        'It is printed on special paper',
        'It is made of metal',
      ],
      answer: 'Everybody accepts it in exchange',
      teach: 'General acceptance is what makes anything money.',
      level: 3,
    },
    {
      id: 'mon-2',
      ask: 'Who receives interest, and who pays it?',
      kind: 'choice',
      options: [
        'Savers receive it; borrowers pay it',
        'Borrowers receive it; savers pay it',
        'Both pay it to the bank',
      ],
      answer: 'Savers receive it; borrowers pay it',
      teach: 'And the bank keeps the difference between the two rates.',
      level: 4,
    },
    {
      id: 'mon-3',
      ask: 'Why do income and saving go together?',
      kind: 'choice',
      options: [
        'Income and need arrive at different times',
        'Saving increases income',
        'Banks require it',
      ],
      answer: 'Income and need arrive at different times',
      teach: 'Saving moves money from a month that has some '
        + 'to a month that needs some.',
      level: 5,
    },
  ],
})

/* ── adolescent development and chastity ──────────────────────────────── */

teach({
  topicId: 'adolescent-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Adolescence brings physical, emotional and social change at once. '
      + 'The body matures before judgement and circumstances catch up, '
      + 'and that gap is why the decisions of these years carry further '
      + 'than they feel like they should. '
      + 'Chastity means choosing not to have sex now, '
      + 'and it is a decision that has to be made before the moment.',
    method: [
      'Separate the physical, emotional and social changes.',
      'Name the consequence of a decision in terms of what it closes off.',
      'Decide in advance, not in the moment.',
    ],
  },

  why:
    'A boy of fourteen who was easy to live with last year now '
    + 'answers his mother sharply and shuts his door. '
    + 'He cannot say why, and neither can she. '
    + 'He has not decided to be difficult and nothing bad has '
    + 'happened to him. '
    + 'So what has changed, and is there anything to be done '
    + 'about it?',

  idea:
    'Adolescence is the stage between childhood and adulthood. '
    + 'The body changes first, driven by hormones, '
    + 'and it runs to a different timetable in boys and in girls. '
    + 'Feelings change too. '
    + 'They become stronger and turn faster. '
    + 'You notice yourself more. '
    + 'And what friends think starts to matter more than what adults '
    + 'think. '
    + 'More is also expected of you: '
    + 'responsibility at home, choices about school and work, '
    + 'and relationships with the opposite sex. '
    + 'Chastity means not having sex. '
    + 'For an adolescent it avoids pregnancy. '
    + 'It avoids infections passed on by sex, including HIV. '
    + 'It avoids schooling being cut short. '
    + 'And it is the only method with no failure rate at all.',

  mechanism:
    'There is one fact about adolescence that explains most of its '
    + 'difficulty, '
    + 'and it is not a moral one. '
    + 'The body becomes capable of reproduction years before anything else '
    + 'is ready: '
    + 'before the judgement that comes from experience, '
    + 'before schooling is finished, '
    + 'before there is any income. '
    + 'In an earlier world the gap was shorter, '
    + 'because people married and worked much younger. '
    + 'Now it is a decade, '
    + 'and a decade of being physically able and otherwise unprepared '
    + 'is the real condition an adolescent is living in. '
    + 'That gap is why a decision here reaches so far. '
    + 'A pregnancy at fourteen does not merely change a year. '
    + 'It commonly ends schooling, '
    + 'and the end of schooling decides work, income and choices for the '
    + 'next forty years, '
    + 'and it lands hardest on the girl, '
    + 'whatever anybody says about fairness. '
    + 'So the useful way to think about a decision at this age '
    + 'is in terms of what it closes off rather than what it costs. '
    + 'The second thing worth knowing is practical. '
    + 'Decisions of this kind are not actually made in the moment they '
    + 'appear to be made. '
    + 'They are made in advance, or they are made by circumstances. '
    + 'A person who has decided beforehand '
    + 'does not have to work it out while being persuaded, '
    + 'and avoiding the situation entirely is easier than winning the '
    + 'argument inside it. '
    + 'That is not timidity. It is how anybody keeps a decision they meant.',

  recap:
    'Between about ten and nineteen the body changes a great '
    + 'deal. '
    + 'Hormones are chemical messengers made inside the body, and '
    + 'at this stage they are released in much larger amounts. '
    + 'They make a boy grow taller quickly and his voice deepen, '
    + 'and they bring a girl her first period and change the '
    + 'shape of her body. '
    + 'The changes do not arrive at the same age in everybody, '
    + 'and being early or late is normal. '
    + 'This lesson takes those bodily changes as the starting '
    + 'point, then adds the changes in feeling and in how a '
    + 'person stands with other people.',

  method: [
    'Separate the three kinds of change: physical, emotional, social.',
    'Give examples of each.',
    'Name one new responsibility that comes with the stage.',
    'For a decision question, say what the choice closes off.',
    'Say that the decision is made in advance, not in the moment.',
    'Name who an adolescent can ask: parent, teacher, nurse, counsellor.',
    'Be accurate. Abstinence has no failure rate; '
      + 'nothing else can be said to have none.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name one emotional change of adolescence.',
      steps: [
        'Emotional means to do with feelings, not the body.',
      ],
      answer: 'Feelings become stronger and change more quickly. '
        + 'Caring more about what friends think also counts.',
    },
    {
      level: 4,
      ask: 'Why does the opinion of friends matter more at this stage?',
      steps: [
        'An adolescent is moving from the family towards independence.',
        'The group they are joining is their own age.',
        'So its approval becomes the measure of belonging.',
      ],
      answer: 'Because an adolescent is moving away from depending on the '
        + 'family and towards their own group, '
        + 'so that group’s approval becomes what belonging feels like.',
    },
    {
      level: 5,
      ask: 'Why is a decision about sex at fourteen harder to undo '
        + 'than most decisions at that age?',
      steps: [
        'The body is capable years before schooling, income and judgement '
          + 'are ready.',
        'A pregnancy commonly ends schooling.',
        'The end of schooling decides work and income for decades.',
        'And the consequence falls unequally on the girl.',
      ],
      answer: 'Because the body is ready long before anything else is. '
        + 'A pregnancy at that age commonly ends schooling, '
        + 'which then decides work and income for decades, '
        + 'and it falls hardest on the girl.',
    },
  ],

  traps: [
    {
      mistake: 'Treating adolescence as only physical change.',
      why: 'The emotional and social changes are what the questions are '
        + 'usually about.',
    },
    {
      mistake: 'Thinking a decision of this kind is made in the moment.',
      why: 'It is made in advance, or circumstances make it. '
        + 'Deciding beforehand is the whole method.',
    },
    {
      mistake: 'Dismissing peer influence as weakness.',
      why: 'It is a normal part of the stage. '
        + 'Knowing that is what lets you notice it working on you.',
    },
    {
      mistake: 'Believing you have nobody to ask.',
      why: 'A parent, a teacher, a nurse or a counsellor can be asked, '
        + 'and a nurse is bound to keep it private.',
    },
  ],

  extension:
    'Assertiveness is the skill underneath all of this: '
    + 'saying what you have decided, '
    + 'plainly, without apologising and without arguing. '
    + 'It is learned by practising the sentence before you need it.',

  figure: {
    alt: 'Two bars drawn against the same stretch of time. The upper bar, '
      + 'starting early, is the body being able to reproduce. The lower '
      + 'bar, in green and starting much later, is everything else being '
      + 'ready: schooling finished, work, income and judgement. A red '
      + 'arrow between the two starting points marks a gap of about ten '
      + 'years in which a person is able and not yet prepared.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">the body is ready long before anything else is</text>'
      + '<text x="76" y="128" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">childhood</text>'
      + '<path d="M 130 100 H 606 V 148 H 130 Z"/>'
      + '<text x="368" y="130" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the body is able to reproduce</text>'
      + '<line x1="130" y1="100" x2="130" y2="290" stroke-dasharray="6 6" stroke-width="2"/>'
      + '<path d="M 430 170 H 606 V 218 H 430 Z" stroke="#0f8a4d"/>'
      + '<text x="518" y="200" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">everything else is ready</text>'
      + '<line x1="430" y1="170" x2="430" y2="290" stroke="#0f8a4d" stroke-dasharray="6 6" stroke-width="2"/>'
      + '<text x="518" y="240" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">schooling finished, work,</text>'
      + '<text x="518" y="258" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">income, judgement</text>'
      + '<path d="M 142 262 H 418" stroke="#c8433a"/>'
      + '<path d="M 132 262 L 150 252 L 150 272 Z" fill="#c8433a" stroke="none"/>'
      + '<path d="M 428 262 L 410 252 L 410 272 Z" fill="#c8433a" stroke="none"/>'
      + '<text x="280" y="246" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">about ten years</text>'
      + '<text x="280" y="290" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">able, and not yet prepared</text>'
      + '<text x="320" y="344" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">a decision made inside the gap can decide</text>'
      + '<text x="320" y="370" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">the next forty years, and it lands hardest on the girl</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The physical changes of adolescence, and when each one '
        + 'appears',
      columns: ['Change', 'In boys', 'In girls'],
      rows: [
        [
          'Growth spurt',
          'Yes, and usually later',
          'Yes, and usually earlier',
        ],
        ['Body hair', 'Yes', 'Yes'],
        ['Voice', 'Deepens noticeably', 'Changes very little'],
        ['Breasts', 'No', 'Develop'],
        ['Periods', 'No', 'Begin'],
        ['Able to reproduce', 'Yes, from puberty', 'Yes, from puberty'],
      ],
      note: 'The emotional and social changes arrive at the same time as '
        + 'these, which is why the stage feels like several things '
        + 'happening at once.',
    },
  ],
  questions: [
    {
      id: 'ado-1',
      ask: 'Which of these is a social change of adolescence?',
      kind: 'choice',
      options: [
        'More responsibility is expected of you',
        'The voice deepens',
        'Growth becomes faster',
      ],
      answer: 'More responsibility is expected of you',
      teach: 'The other two are physical changes.',
      level: 3,
    },
    {
      id: 'ado-2',
      ask: 'What makes adolescence a difficult stage?',
      kind: 'choice',
      options: [
        'The body matures years before circumstances and judgement do',
        'Schoolwork becomes harder',
        'Friends become unkind',
      ],
      answer: 'The body matures years before circumstances and judgement do',
      teach: 'That gap is why decisions in these years reach so far.',
      level: 4,
    },
    {
      id: 'ado-3',
      ask: 'When is a decision about sex actually made?',
      kind: 'choice',
      options: [
        'In advance, before the situation arises',
        'At the moment it is suggested',
        'After it has happened',
      ],
      answer: 'In advance, before the situation arises',
      teach: 'A decision not made beforehand is made by circumstances.',
      level: 5,
    },
  ],
})
