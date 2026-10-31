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

  idea:
    'Environmental degradation means the land, water or air is being '
    + 'damaged faster than it can recover. '
    + 'Galamsey, which is small scale mining without a licence, '
    + 'strips topsoil, leaves open pits, '
    + 'and puts mercury and silt into rivers such as the Pra, '
    + 'the Ankobra and the Birim. '
    + 'Deforestation removes the trees whose roots hold the soil '
    + 'and whose shade keeps it moist. '
    + 'Other forms are sand winning, overgrazing, bush burning, '
    + 'and dumping waste into gutters and lagoons. '
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
    'You have learned that trees hold the soil '
    + 'and that rubbish in gutters causes flooding. '
    + 'This asks the harder question: '
    + 'why does it keep happening when everybody knows?',

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

  idea:
    'Ghana’s constitution of 1992 is the supreme law, '
    + 'and any law or act that conflicts with it is void. '
    + 'It sets up three arms of government. '
    + 'The legislature, which is Parliament, makes the laws '
    + 'and approves taxes and spending. '
    + 'The executive, which is the President, ministers and the civil '
    + 'service, '
    + 'carries the laws out and runs the country day to day. '
    + 'The judiciary, which is the courts headed by the Supreme Court, '
    + 'interprets the law, settles disputes, '
    + 'and can declare an act unconstitutional. '
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
    + 'Separation breaks the chain. '
    + 'Parliament makes the law, '
    + 'but the courts can strike it down if it breaks the constitution. '
    + 'The President carries it out, '
    + 'but Parliament controls the money and must approve the ministers. '
    + 'The courts interpret it, '
    + 'but the judges did not write the law they are interpreting. '
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
    'You know Ghana has a President, a Parliament and courts. '
    + 'This says what each one is for '
    + 'and why the country does not put all three jobs in one place.',

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

  idea:
    'The constitution guarantees fundamental human rights: '
    + 'life, personal liberty, dignity, '
    + 'freedom of speech, assembly and religion, '
    + 'equality before the law, education, '
    + 'and protection from discrimination. '
    + 'Children have further rights: '
    + 'to a name, to education, to health care, '
    + 'and to protection from work that harms them. '
    + 'Each right carries a responsibility. '
    + 'The right to free speech carries the duty not to defame or incite. '
    + 'The right to education carries the duty to attend and to let others '
    + 'learn. '
    + 'The right to vote carries the duty to be peaceful about the result. '
    + 'And the right to public services carries the duty to pay tax.',

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
    'You know you have a right to education and to be treated fairly. '
    + 'This names the main rights '
    + 'and shows why each comes with something you owe.',

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

  idea:
    'Production is making goods or providing services to satisfy wants. '
    + 'It needs four factors. '
    + 'Land means everything nature provides: '
    + 'the ground, water, minerals, forests. '
    + 'Labour is human effort, of hand and of mind. '
    + 'Capital is anything made by people in order to produce something '
    + 'else: '
    + 'tools, a machine, a building, a delivery van. '
    + 'The entrepreneur brings the other three together, '
    + 'decides what to produce, and carries the risk of being wrong. '
    + 'Each factor earns a reward: '
    + 'rent for land, wages for labour, interest for capital, '
    + 'and profit for the entrepreneur.',

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
    'You know that making something needs materials, work and tools. '
    + 'This names the four factors properly '
    + 'and gives the reward each one earns.',

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

  idea:
    'Money is anything generally accepted in exchange for goods and '
    + 'services. '
    + 'It works as a medium of exchange, a measure of value, '
    + 'a store of value, and a standard for future payment. '
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
    'You have used money and perhaps kept some in a box at home. '
    + 'This explains what a bank does with it, '
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

  idea:
    'Adolescence is the stage between childhood and adulthood. '
    + 'The body changes first. '
    + 'Hormones bring growth and body hair, '
    + 'a deeper voice in boys, '
    + 'and breast development and periods in girls. '
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
    'You have learned the physical changes of puberty in science. '
    + 'This adds the emotional and social changes, '
    + 'and looks at the decisions that come with them.',

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
