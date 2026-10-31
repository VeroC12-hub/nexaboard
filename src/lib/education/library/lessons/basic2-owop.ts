/**
 * Stored lessons for Basic 2 Our World Our People.
 *
 * Basic 1 asked the child who they are. Basic 2 widens one ring at a time:
 * the household, then the community around it, then the rules that let a lot
 * of people share one place. That order is the subject, and it is why these
 * three are written to be read in it.
 *
 * ── One thing these lessons deliberately avoid ──────────────────────────────
 *
 * No household is described as the normal one. A child may live with one
 * parent, with grandparents, with an aunt, or in a house of twelve people, and
 * a lesson that quietly assumes otherwise teaches that child that their home
 * is wrong. So the lessons talk about what each person contributes, which is
 * true of every household there is.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── roles in the family ──────────────────────────────────────────────────── */

teach({
  topicId: 'family-roles',
  source: 'WRITTEN',
  approved: true,

  idea:
    'A household runs on jobs, and the jobs are shared out. Somebody earns, '
    + 'somebody cooks, somebody fetches water, somebody sweeps, somebody looks '
    + 'after the small ones. Households are not all made of the same people, '
    + 'but every household has these jobs in it, and everybody old enough does '
    + 'some of them.',

  mechanism:
    'The jobs are shared because no one person could do them all in a day. '
    + 'That is the reason, and it is worth knowing, because it explains why a '
    + 'job left undone is felt by everybody and not only by the person who '
    + 'usually does it. If nobody fetches water, nobody washes and nobody '
    + 'cooks either. The jobs hold each other up.',

  recap:
    'You belong to a group of people who live together and look after each '
    + 'other. That is your household, and you are one of its members.',

  method: [
    'Name the people in your household.',
    'For each one, say one job they do that others depend on.',
    'Say your own jobs. Everybody old enough has some.',
    'Ask what would happen if one of those jobs was not done for a week.',
    'That answer is why the job matters.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Name one job you do in your household.',
      steps: [
        'Think about what you are asked to do most days.',
        'Say it as a job, not as a complaint.',
      ],
      answer: 'Something like sweeping the room, fetching water, or minding a '
        + 'younger child.',
    },
    {
      level: 2,
      ask: 'Why does it matter if nobody fetches water for a day?',
      steps: [
        'Water is used for cooking, washing and drinking.',
        'So the cooking and the washing both stop.',
        'The job was not only about water.',
      ],
      answer: 'Because other jobs depend on it. One job undone stops several '
        + 'others.',
    },
    {
      level: 3,
      ask: 'A child lives with her grandmother and an uncle. Is that a family?',
      steps: [
        'Ask whether they live together and look after each other.',
        'Ask whether the jobs of the household are shared among them.',
        'Both are true.',
      ],
      answer: 'Yes. A family is the people who live together and look after '
        + 'each other, and they are not all made of the same people.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking only grown ups contribute.',
      why: 'A child who minds a younger one or sweeps the room is doing a real '
        + 'job the household would otherwise have to find somebody else for.',
    },
    {
      mistake: 'Believing every family has a mother, a father and children.',
      why: 'Many do not, and they are no less families. What makes a family is '
        + 'living together and looking after each other.',
    },
    {
      mistake: 'Treating earning money as the only job that counts.',
      why: 'Money buys food. Somebody still has to cook it, and somebody has '
        + 'to fetch the water it is cooked in. All of it is work.',
    },
  ],

  extension:
    'A community shares out jobs in the same way a household does, only with '
    + 'strangers rather than relatives. The teacher, the nurse, the farmer and '
    + 'the driver each do one job that the rest of us depend on, and that is '
    + 'the next thing to look at.',

  questions: [
    {
      id: 'fr-1',
      ask: 'Which of these is a real job in a household?',
      kind: 'choice',
      options: [
        'Minding a younger brother or sister',
        'Watching television',
        'Waiting to be called for food',
      ],
      answer: 'Minding a younger brother or sister',
      teach: 'It is work somebody has to do, and a child doing it frees a '
        + 'grown up for something else. That is what makes it a job.',
      level: 1,
    },
    {
      id: 'fr-2',
      ask: 'Why does one job left undone affect the whole household?',
      kind: 'choice',
      options: [
        'Because people get angry',
        'Because other jobs depend on it',
        'Because it is against the rules',
      ],
      answer: 'Because other jobs depend on it',
      teach: 'No water means no cooking and no washing. The jobs hold each '
        + 'other up, which is why the loss is felt by everybody.',
      level: 2,
    },
    {
      id: 'fr-3',
      ask: 'A boy lives with his aunt and two cousins. Is that a family?',
      kind: 'choice',
      options: ['Yes', 'No', 'Only if his parents visit'],
      answer: 'Yes',
      teach: 'They live together and look after each other, and the household '
        + 'jobs are shared among them. That is what a family is.',
      level: 2,
    },
  ],
})

/* ── my community ─────────────────────────────────────────────────────────── */

teach({
  topicId: 'my-community-owop',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Your community is the place you live and the people in it: the houses, '
    + 'the road, the school, the market, the clinic, the church or the mosque, '
    + 'and everybody who uses them. You can draw it. A drawing of a place seen '
    + 'from above is a map.',

  mechanism:
    'A map is useful because it shows where things are in relation to each '
    + 'other, which a list of names cannot. "School, market, clinic" tells you '
    + 'nothing about which way to walk. A map does, and that is its whole '
    + 'point: it keeps the directions and the distances, and throws away '
    + 'everything else about how the places look.',

  recap:
    'You know your own house and the way to school. Those are the first two '
    + 'things on your map, and everything else can be placed from them.',

  method: [
    'Start with your own house. Put it on the paper first.',
    'Draw the road that passes it.',
    'Add the places you walk to, on the side of the road they are really on.',
    'Keep the far things farther from your house than the near things.',
    'Label each one.',
    'Give somebody the map and ask them to find the school. If they can, it '
      + 'works.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Name three places in your community that are not houses.',
      steps: [
        'Think about where you go that is not home.',
        'Choose the ones everybody uses.',
      ],
      answer: 'Places such as the school, the market and the clinic.',
    },
    {
      level: 2,
      ask: 'Why is a map more useful than a list of the places?',
      steps: [
        'A list gives the names.',
        'It does not tell you which way to walk or how far.',
        'A map keeps where things are compared to each other.',
      ],
      answer: 'Because it shows where the places are in relation to each '
        + 'other, which is what you need in order to get to them.',
    },
    {
      level: 3,
      ask: 'Your map shows the clinic on the wrong side of the road. Does it '
        + 'matter?',
      steps: [
        'A map is for finding things.',
        'Somebody following it will cross the road at the wrong place and look '
          + 'at the wrong buildings.',
        'A neat map that misleads is worse than a rough one that does not.',
      ],
      answer: 'Yes. The whole use of a map is that the positions are right, so '
        + 'a wrong position is a real mistake and not a small one.',
    },
  ],

  traps: [
    {
      mistake: 'Drawing the buildings as you see them from the front.',
      why: 'A map looks down from above, so a house is a shape on the ground '
        + 'rather than a wall with a door.',
    },
    {
      mistake: 'Putting everything the same distance apart to make it tidy.',
      why: 'Then the map lies about how far you have to walk. Keep near things '
        + 'near.',
    },
    {
      mistake: 'Thinking a community is only the buildings.',
      why: 'It is the people too. A market with no traders is a shed.',
    },
  ],

  extension:
    'Real maps add a few things to make them easier to share: a mark showing '
    + 'which way is north, and a note saying how much ground one step on the '
    + 'paper stands for. Both exist so that somebody who has never been there '
    + 'can still use your map.',

  figure: {
    alt: 'A simple map of a community drawn from above, with a road through '
      + 'the middle and the school, market, clinic and houses placed on their '
      + 'correct sides of it',
    svg: '<svg viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* road */
      + '<path d="M20 200h600" stroke="currentColor" stroke-width="26" opacity="0.18" fill="none"/>'
      + '<path d="M20 200h600" stroke="currentColor" stroke-width="2" '
      + 'stroke-dasharray="14 12" fill="none"/>'
      + '<text x="34" y="236" font-size="14" fill="currentColor" opacity="0.7">the main road</text>'
      /* buildings above the road */
      + '<g fill="none" stroke="currentColor" stroke-width="3">'
      + '<rect x="80" y="104" width="84" height="56" rx="4"/>'
      + '<rect x="250" y="84" width="104" height="76" rx="4"/>'
      + '<rect x="470" y="110" width="76" height="50" rx="4"/>'
      /* below the road */
      + '<rect x="140" y="242" width="70" height="48" rx="4"/>'
      + '<rect x="240" y="242" width="70" height="48" rx="4"/>'
      + '<rect x="420" y="240" width="96" height="60" rx="4"/>'
      + '</g>'
      + '<g font-size="15" fill="#0f8a4d" text-anchor="middle">'
      + '<text x="122" y="96">school</text>'
      + '<text x="302" y="76">market</text>'
      + '<text x="508" y="102">clinic</text>'
      + '<text x="175" y="312">my house</text>'
      + '<text x="275" y="312">house</text>'
      + '<text x="468" y="320">place of worship</text>'
      + '</g>'
      + '<circle cx="175" cy="266" r="7" fill="#0f8a4d"/>'
      + '<text x="320" y="360" text-anchor="middle" font-size="17" fill="currentColor">'
      + 'Seen from above. Near things near, far things far.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'mc-1',
      ask: 'Which of these is part of your community?',
      kind: 'choice',
      options: ['The market', 'A town in another region', 'A picture in a book'],
      answer: 'The market',
      teach: 'Your community is the place you live and the people who use it. '
        + 'The market is somewhere you and your neighbours actually go.',
      level: 1,
    },
    {
      id: 'mc-2',
      ask: 'What does a map show that a list of place names cannot?',
      kind: 'choice',
      options: [
        'The names spelled correctly',
        'Where the places are compared to each other',
        'How old the buildings are',
      ],
      answer: 'Where the places are compared to each other',
      teach: 'A list cannot tell you which way to walk. Keeping the directions '
        + 'and distances is the whole job of a map.',
      level: 2,
    },
    {
      id: 'mc-3',
      ask: 'On a map, how should a house be drawn?',
      kind: 'choice',
      options: [
        'As a wall with a door and windows',
        'As a shape on the ground, seen from above',
        'As big as the school, so it is fair',
      ],
      answer: 'As a shape on the ground, seen from above',
      teach: 'A map looks straight down. Drawing the front of the house is a '
        + 'picture, not a map, and it cannot be placed correctly on a road.',
      level: 3,
    },
  ],
})

/* ── rules and why they exist ─────────────────────────────────────────────── */

teach({
  topicId: 'school-and-rules',
  source: 'WRITTEN',
  approved: true,

  idea:
    'A rule says what to do, or what not to do, in a place where many people '
    + 'are together. Walk, do not run in the corridor. Put up your hand before '
    + 'you speak. Every rule exists because somebody got hurt, or because '
    + 'nothing could get done, before there was one.',

  mechanism:
    'That is the part worth holding on to. A rule is not a decision somebody '
    + 'made to be strict. It is an answer to a problem, and the way to '
    + 'understand any rule is to ask what goes wrong without it. Thirty '
    + 'children all speaking at once means nobody is heard, including the one '
    + 'who was speaking first. The rule about hands is what gives that child a '
    + 'turn.',

  recap:
    'Many people share your school: your class, the other classes, the '
    + 'teachers. What one person does there affects the others.',

  method: [
    'Say the rule in your own words.',
    'Ask what would happen if nobody followed it, for one whole day.',
    'Name who would be worst affected.',
    'That is what the rule is protecting.',
    'If you cannot find anybody it protects, ask a teacher what it is for. '
      + 'Some rules have reasons you have not been told yet.',
  ],

  worked: [
    {
      level: 1,
      ask: 'The rule is: do not run in the corridor. Why?',
      steps: [
        'Imagine everybody running in a narrow corridor at once.',
        'People coming the other way cannot get out of the way.',
      ],
      answer: 'Because people would knock into each other and get hurt, '
        + 'especially the smaller children.',
    },
    {
      level: 2,
      ask: 'Why must you put your hand up before speaking in class?',
      steps: [
        'If everybody speaks when they like, several speak at once.',
        'Then nobody can be heard, not even the first one who started.',
        'The hand gives the teacher a way to give turns.',
      ],
      answer: 'So that one person speaks at a time and everybody gets a turn, '
        + 'including the quiet ones.',
    },
    {
      level: 3,
      ask: 'A rule says nobody leaves the compound at break. A child says it '
        + 'is unfair. What is the honest answer?',
      steps: [
        'Ask what goes wrong without it. A child could walk onto the road, and '
          + 'nobody would know they had gone.',
        'So the rule protects every child, including that one.',
        'It does cost something: you cannot go where you want at break. A rule '
          + 'can be both fair and inconvenient.',
      ],
      answer: 'It protects children from the road and means somebody always '
        + 'knows where you are. It is still inconvenient, and both of those '
        + 'are true at once.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a rule exists because adults enjoy giving orders.',
      why: 'Nearly every rule follows something that went wrong. Ask what, and '
        + 'the rule usually makes sense.',
    },
    {
      mistake: 'Deciding a rule that costs you something must be unfair.',
      why: 'Rules often cost the person they protect. The corridor rule slows '
        + 'you down and keeps you unhurt.',
    },
    {
      mistake: 'Following a rule without ever knowing what it is for.',
      why: 'Then you cannot apply it in a case nobody wrote down. Knowing the '
        + 'reason tells you what to do in the situations the rule missed.',
    },
  ],

  extension:
    'A town has rules too, and they are called laws. They are made the same '
    + 'way and for the same reason, by people a community chooses, and they '
    + 'can be changed when a reason stops being a good one.',

  questions: [
    {
      id: 'sr-1',
      ask: 'Why is there a rule against running in the corridor?',
      kind: 'choice',
      options: [
        'Because teachers do not like noise',
        'Because people would knock into each other and get hurt',
        'Because running is wrong',
      ],
      answer: 'Because people would knock into each other and get hurt',
      teach: 'Ask what goes wrong without the rule. In a narrow corridor with '
        + 'people coming both ways, the answer is collisions.',
      level: 1,
    },
    {
      id: 'sr-2',
      ask: 'Who does the hand up rule help most?',
      kind: 'choice',
      options: [
        'The loudest child',
        'The quiet child who would never be heard',
        'Nobody, it only slows the lesson',
      ],
      answer: 'The quiet child who would never be heard',
      teach: 'Without it the loudest voices win every time. Giving turns is '
        + 'what makes room for somebody who will not shout.',
      level: 2,
    },
    {
      id: 'sr-3',
      ask: 'What is the best way to understand a rule you think is unfair?',
      kind: 'choice',
      options: [
        'Ask what would go wrong if nobody followed it',
        'Break it once and see',
        'Assume it is for the teachers',
      ],
      answer: 'Ask what would go wrong if nobody followed it',
      teach: 'That question finds the problem the rule was answering. You may '
        + 'still find it costs you something, and both can be true.',
      level: 3,
    },
  ],
})
