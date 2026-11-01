/**
 * Stored lessons for JHS 3 Social Studies and Computing.
 *
 * Written at about grade 8, with a `brief` form on every topic.
 *
 * ── Social Studies: the four topics are one question ──────────────────────
 *
 * Democracy, conflict, development and population all ask what makes a
 * country work, and all four are written to refuse the answer learners are
 * usually given, which is a list. Development is not a list of things rich
 * countries have. Conflict is not caused by people being tribal. Migration
 * is not caused by young people wanting city life. In each case there is a
 * mechanism, and a lesson that gives the list instead of the mechanism
 * leaves a learner unable to say anything about a case they have not met.
 *
 * ── Computing: still no machine assumed ──────────────────────────────────
 *
 * `debug-jhs` is the one topic in the subject that cannot be faked, since
 * debugging is a habit rather than a fact, so it is taught as a procedure
 * that works on paper: find the last line you are certain about.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── democracy and elections ───────────────────────────────────────────── */

teach({
  topicId: 'democracy-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'In a democracy the people choose who governs, '
      + 'through regular free elections, '
      + 'and can remove them. '
      + 'A peaceful transfer of power matters '
      + 'because it is what makes losing survivable, '
      + 'and so makes losing acceptable.',
    method: [
      'Describe the process: register, campaign, vote, count, declare.',
      'Name what keeps an election honest.',
      'Explain the peaceful transfer by what the loser is agreeing to.',
    ],
  },

  idea:
    'Democracy means government by the people. '
    + 'In practice the people elect representatives. '
    + 'In Ghana, citizens of eighteen and over register to vote. '
    + 'Parties and candidates campaign. '
    + 'Voting is by secret ballot on a set day. '
    + 'The ballots are counted at the polling station, '
    + 'in front of the parties’ agents. '
    + 'Then the Electoral Commission declares the result. '
    + 'Several things keep an election honest. '
    + 'An independent commission. '
    + 'A secret ballot. '
    + 'Agents and observers watching the count. '
    + 'A published register. '
    + 'And courts that will hear a dispute. '
    + 'One more thing matters most of all. '
    + 'The losing side accepts the result, '
    + 'and power changes hands without violence.',

  mechanism:
    'The part of this topic that is worth real thought '
    + 'is why a peaceful transfer of power matters so much, '
    + 'because the usual answer, that violence is bad, '
    + 'is true and explains nothing. '
    + 'Look at it from the losing side. '
    + 'A party that has just lost an election '
    + 'is being asked to hand over the police, the army, the treasury '
    + 'and the power to prosecute, '
    + 'to the people it has spent a year calling unfit to govern. '
    + 'It will only do that if it believes two things: '
    + 'that it will not be destroyed in the meantime, '
    + 'and that it can win next time. '
    + 'So a peaceful transfer depends on losing being survivable. '
    + 'That is why the things around an election matter as much as the '
    + 'vote: '
    + 'courts that will hear your case, '
    + 'a press that will still print what you say, '
    + 'a fixed date when you can try again. '
    + 'Take those away and the loser has no reason to accept anything, '
    + 'and then every election becomes a fight for survival. '
    + 'This also explains why the secret ballot is not a convenience. '
    + 'If your vote can be known, '
    + 'it can be bought, and it can be punished, '
    + 'so the secrecy is what makes the vote yours. '
    + 'And it explains why an independent commission is insisted on: '
    + 'a government that counts its own votes '
    + 'is being asked to referee a match it is playing in.',

  recap:
    'You know the three arms of government and how each checks the others. '
    + 'This is how the people doing those jobs are chosen, '
    + 'and how they are made to leave.',

  method: [
    'Define democracy as government chosen by the people.',
    'Describe the stages: registration, campaign, voting, counting, '
      + 'declaration.',
    'Name the safeguards: independent commission, secret ballot, agents, '
      + 'courts.',
    'Say what each safeguard prevents.',
    'Explain the peaceful transfer from the loser’s point of view.',
    'Name one duty of a citizen at an election.',
    'Give one real Ghanaian example where power changed hands peacefully.',
  ],

  worked: [
    {
      level: 3,
      ask: 'At what age may a Ghanaian register to vote?',
      steps: [
        'The constitutional age of majority.',
      ],
      answer: 'Eighteen.',
    },
    {
      level: 4,
      ask: 'Why must a ballot be secret?',
      steps: [
        'If a vote can be known it can be rewarded or punished.',
        'Then the vote belongs to whoever is watching.',
      ],
      answer: 'Because a vote that can be known can be bought or punished. '
        + 'Secrecy is what makes the choice the voter’s own.',
    },
    {
      level: 5,
      ask: 'Why does a losing party hand over power peacefully?',
      steps: [
        'It is handing the state to people it called unfit.',
        'It will do so only if it believes it will survive.',
        'And if it believes it can win next time.',
        'Courts, a free press and a fixed next election provide both.',
      ],
      answer: 'Because losing is survivable: '
        + 'courts will hear its complaints, '
        + 'it can still speak, '
        + 'and there is a fixed date to try again. '
        + 'Remove those and the loser has no reason to accept the result.',
    },
  ],

  traps: [
    {
      mistake: 'Saying democracy is just voting.',
      why: 'Voting without courts, a free press or a fixed next election '
        + 'leaves the loser no reason to accept anything.',
    },
    {
      mistake: 'Explaining the peaceful transfer only by saying violence '
        + 'is bad.',
      why: 'True and empty. '
        + 'Explain what the loser is agreeing to and why they can.',
    },
    {
      mistake: 'Treating the Electoral Commission as part of the '
        + 'government.',
      why: 'It is independent, '
        + 'because a government counting its own votes is refereeing its '
        + 'own match.',
    },
    {
      mistake: 'Listing rights at an election and no duties.',
      why: 'Registering, voting peacefully and accepting the result '
        + 'are duties that come with the right.',
    },
  ],

  extension:
    'Not every election is democratic. '
    + 'Some allow only one party. '
    + 'In some, the result may not be disputed. '
    + 'Those have the form of an election without the substance. '
    + 'So look at the safeguards, not only at the vote.',

  questions: [
    {
      id: 'dem-1',
      ask: 'Who declares the result of a Ghanaian election?',
      kind: 'choice',
      options: [
        'The Electoral Commission',
        'The President',
        'Parliament',
      ],
      answer: 'The Electoral Commission',
      teach: 'It is independent, so that nobody counts their own votes.',
      level: 3,
    },
    {
      id: 'dem-2',
      ask: 'What does a secret ballot prevent?',
      kind: 'choice',
      options: [
        'A vote being bought or punished',
        'Miscounting',
        'Long queues',
      ],
      answer: 'A vote being bought or punished',
      teach: 'Secrecy is what makes the vote the voter’s own.',
      level: 4,
    },
    {
      id: 'dem-3',
      ask: 'What makes a peaceful transfer of power possible?',
      kind: 'choice',
      options: [
        'Losing is survivable, and there is a next time',
        'The loser is always gracious',
        'The army insists on it',
      ],
      answer: 'Losing is survivable, and there is a next time',
      teach: 'Courts, a free press and a fixed election date provide both.',
      level: 5,
    },
  ],
})

/* ── conflict and nation building ─────────────────────────────────────── */

teach({
  topicId: 'conflict-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Conflict in Ghana has usually been about something concrete: '
      + 'land, chieftaincy succession, boundaries, or resources. '
      + 'Identity is how sides are organised, not usually why the dispute '
      + 'began. '
      + 'Resolution works when it settles the thing in dispute.',
    method: [
      'Name what is actually being disputed.',
      'Say how the sides were organised.',
      'Judge a resolution by whether it settled the dispute itself.',
    ],
  },

  idea:
    'Conflict is a serious disagreement between groups. '
    + 'In Ghana the common causes are few and concrete. '
    + 'Disputes over land and boundaries. '
    + 'Contested chieftaincy succession. '
    + 'Competition over water, grazing and mining land. '
    + 'And grievances about unequal development. '
    + 'Conflicts have been resolved in several ways. '
    + 'Elders and other chiefs mediate. '
    + 'Committees of inquiry are set up. '
    + 'The courts and the House of Chiefs decide cases. '
    + 'Peace councils bring sides together. '
    + 'Sometimes a curfew holds the peace while talks happen. '
    + 'Nation building means building a sense of one country. '
    + 'It includes a shared language of instruction, '
    + 'national service, '
    + 'schools and sport that mix people, '
    + 'and a constitution that applies to everybody equally.',

  mechanism:
    'The explanation offered for conflict in Ghana is usually tribalism, '
    + 'and it is almost always wrong as a cause, '
    + 'though right as a description of the sides. '
    + 'Look at a particular case '
    + 'and there is nearly always something concrete in dispute: '
    + 'who is the rightful successor to a stool, '
    + 'where a boundary runs, '
    + 'who may farm or graze a piece of land, '
    + 'who gets the royalties from what is under it. '
    + 'Those are real disagreements with real stakes, '
    + 'and two groups that happen to be on opposite sides of them '
    + 'will organise along whatever lines they already have, '
    + 'which is usually family, town or ethnic group. '
    + 'So identity is the shape the conflict takes, not its cause. '
    + 'That distinction has a practical consequence, '
    + 'which is why it is worth the trouble. '
    + 'If the cause is tribalism, '
    + 'the remedy is for people to feel differently, '
    + 'and nobody knows how to arrange that. '
    + 'If the cause is a disputed succession, '
    + 'the remedy is a settled answer about the succession, '
    + 'which somebody can actually produce. '
    + 'This is why the resolutions that have held in Ghana '
    + 'are the ones that settled the thing itself: '
    + 'a determination of the rightful line, '
    + 'a surveyed and accepted boundary, '
    + 'an agreement about use and compensation. '
    + 'And it is why a curfew is not a resolution. '
    + 'It stops the fighting, which is worth doing, '
    + 'and the dispute is exactly where it was when the curfew lifts.',

  recap:
    'You know what culture is '
    + 'and that Ghana has many peoples, languages and systems of descent. '
    + 'This looks at what happens when groups come into dispute, '
    + 'and at what has actually settled such disputes.',

  method: [
    'Name the conflict and where it happened.',
    'State what was actually being disputed.',
    'Say how the sides were organised.',
    'Name the effects: lives, property, schooling, trade, movement.',
    'Name the methods used to resolve it.',
    'Judge each by whether it settled the dispute itself.',
    'Name one nation building measure and what it is meant to do.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name two common causes of conflict in Ghana.',
      steps: [
        'Think what is concretely disputed.',
      ],
      answer: 'Disputed land or boundaries, '
        + 'and contested chieftaincy succession.',
    },
    {
      level: 4,
      ask: 'Why is a curfew not a resolution?',
      steps: [
        'It stops people meeting and fighting.',
        'It does not answer who owns the land or who should rule.',
        'So the dispute is still there when it lifts.',
      ],
      answer: 'Because it stops the fighting without settling the dispute. '
        + 'When it lifts, the disagreement is exactly where it was.',
    },
    {
      level: 5,
      ask: 'Why is it more useful to say a conflict was about a disputed '
        + 'succession than to say it was tribal?',
      steps: [
        'Tribalism as a cause suggests the remedy is for people to feel '
          + 'differently.',
        'Nobody can arrange that.',
        'A disputed succession has an answer somebody can determine.',
        'So naming the real dispute names the remedy.',
      ],
      answer: 'Because naming the real dispute names something that can be '
        + 'settled. '
        + 'Calling it tribal suggests the remedy is a change of feeling, '
        + 'which nobody knows how to produce.',
    },
  ],

  traps: [
    {
      mistake: 'Giving tribalism as the cause of a conflict.',
      why: 'It usually describes how the sides formed, '
        + 'not what they are arguing about.',
    },
    {
      mistake: 'Treating a curfew or an arrest as a resolution.',
      why: 'Those stop the fighting. '
        + 'The dispute is unchanged.',
    },
    {
      mistake: 'Listing effects and no causes.',
      why: 'The question usually asks for both, '
        + 'and the causes are where the marks are.',
    },
    {
      mistake: 'Naming nation building measures without saying what they '
        + 'do.',
      why: 'National service mixes people who would never otherwise meet. '
        + 'That is the point of it.',
    },
  ],

  extension:
    'Prevention is cheaper than resolution, and less discussed. '
    + 'A clear and recorded land title. '
    + 'An accepted procedure for succession. '
    + 'A published rule for sharing royalties. '
    + 'Each of those removes a dispute before it has sides.',

  questions: [
    {
      id: 'cfl-1',
      ask: 'Which body hears chieftaincy disputes?',
      kind: 'choice',
      options: [
        'The House of Chiefs',
        'The Electoral Commission',
        'Parliament',
      ],
      answer: 'The House of Chiefs',
      teach: 'The courts may also be involved.',
      level: 3,
    },
    {
      id: 'cfl-2',
      ask: 'In a conflict, ethnic identity usually explains:',
      kind: 'choice',
      options: [
        'how the sides were organised',
        'why the dispute began',
        'how it was resolved',
      ],
      answer: 'how the sides were organised',
      teach: 'The cause is usually something concrete: land, succession, '
        + 'resources.',
      level: 4,
    },
    {
      id: 'cfl-3',
      ask: 'What makes a resolution last?',
      kind: 'choice',
      options: [
        'It settles the thing actually in dispute',
        'It is announced by the government',
        'It includes a curfew',
      ],
      answer: 'It settles the thing actually in dispute',
      teach: 'A determined succession or an accepted boundary holds. '
        + 'A curfew does not.',
      level: 5,
    },
  ],
})

/* ── development and its obstacles ──────────────────────────────────── */

teach({
  topicId: 'development-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Development is a people’s capacity to meet their own needs, '
      + 'measured by health, schooling and income together. '
      + 'A country is not developed by having the things rich countries '
      + 'have. '
      + 'Ghana’s obstacles include selling resources raw, '
      + 'weak infrastructure, corruption and debt.',
    method: [
      'Define development by what people can do, not what they own.',
      'Use more than one indicator.',
      'For each obstacle, say what it prevents.',
    ],
  },

  idea:
    'Development means a people’s growing ability '
    + 'to meet their own needs and shape their own lives. '
    + 'It is measured by several indicators together. '
    + 'Income per person. '
    + 'How long people live, and how many babies survive. '
    + 'Schooling and literacy. '
    + 'Access to clean water, electricity and health care. '
    + 'And how much of the work is skilled. '
    + 'Ghana’s main obstacles are these. '
    + 'Resources are exported raw rather than processed. '
    + 'Roads are poor and power is unreliable. '
    + 'There is corruption. '
    + 'Debt has to be serviced. '
    + 'A few export crops and minerals carry the economy, '
    + 'and their prices move. '
    + 'And trained people leave for other countries.',

  mechanism:
    'The temptation is to define development as a list of things '
    + 'that rich countries have, '
    + 'and that definition is useless because it reverses cause and '
    + 'effect. '
    + 'Tall buildings and fast cars are consequences of development, '
    + 'not causes of it, '
    + 'and a country that borrowed to build the buildings '
    + 'has the appearance and the debt. '
    + 'The better definition is about capacity: '
    + 'can the people here feed themselves, '
    + 'treat their illnesses, '
    + 'educate their children, '
    + 'and make things rather than only dig things up. '
    + 'That is why the indicators are about people: '
    + 'how long they live, '
    + 'how many of their babies survive, '
    + 'how many can read, '
    + 'and whether the water is safe. '
    + 'It is also why no single number is enough. '
    + 'Income per person can rise while most people get nothing, '
    + 'if the rise came from one mine owned elsewhere, '
    + 'which is exactly why the human indicators are reported alongside '
    + 'it. '
    + 'The obstacles then become answerable rather than a list. '
    + 'Each one blocks a specific capacity. '
    + 'Selling cocoa as beans means the factories, '
    + 'and the wages they would pay, are somewhere else. '
    + 'Unreliable power means a workshop cannot promise a delivery date, '
    + 'so it cannot win the contract that would let it grow. '
    + 'Corruption means a road costs twice what it should, '
    + 'so half the roads are not built. '
    + 'And debt service means money that could build a clinic '
    + 'is already committed. '
    + 'Naming what an obstacle prevents '
    + 'is what turns the list into an explanation.',

  recap:
    'You know Ghana’s resources and that selling them raw '
    + 'leaves the added value elsewhere. '
    + 'This asks the larger question: '
    + 'what would it mean for the country to be developed?',

  method: [
    'Define development as capacity, not possessions.',
    'Give several indicators, including human ones.',
    'Say why one indicator alone is not enough.',
    'Name an obstacle.',
    'Say what capacity that obstacle blocks.',
    'Name a measure that would address it.',
    'Say who would have to act.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name three indicators of development.',
      steps: [
        'Prefer ones about people.',
      ],
      answer: 'Life expectancy, literacy and income per person. '
        + 'Access to clean water also counts.',
    },
    {
      level: 4,
      ask: 'Why is income per person alone a poor measure?',
      steps: [
        'It is an average.',
        'A single large export can raise it.',
        'Most people may see none of it.',
      ],
      answer: 'Because it is an average and can rise from one large '
        + 'enterprise '
        + 'while most people are no better off. '
        + 'The human indicators show whether anybody gained.',
    },
    {
      level: 5,
      ask: 'How does unreliable electricity block development, '
        + 'beyond the inconvenience?',
      steps: [
        'A workshop cannot be sure of finishing on a date.',
        'So it cannot promise delivery.',
        'So it cannot take the contract that would let it grow.',
        'So it stays small and employs nobody new.',
      ],
      answer: 'Because a business that cannot promise a delivery date '
        + 'cannot win the contracts that would let it grow, '
        + 'so it stays small and creates no new jobs.',
    },
  ],

  traps: [
    {
      mistake: 'Defining development as having what rich countries have.',
      why: 'Those are consequences. '
        + 'A country can borrow the appearance and keep the debt.',
    },
    {
      mistake: 'Using income per person as the only measure.',
      why: 'It is an average and hides who gained.',
    },
    {
      mistake: 'Listing obstacles without saying what each prevents.',
      why: 'The marks are in the mechanism.',
    },
    {
      mistake: 'Treating development as something a government does alone.',
      why: 'It needs skills, enterprise and institutions, '
        + 'which are built by many people over years.',
    },
  ],

  extension:
    'Sustainable development means meeting the needs of today '
    + 'without destroying the ability of future generations '
    + 'to meet theirs. '
    + 'It is the stewardship argument from RME, '
    + 'put in the language of economics.',

  questions: [
    {
      id: 'dev-1',
      ask: 'Development is best defined as:',
      kind: 'choice',
      options: [
        'a people’s growing capacity to meet their own needs',
        'the number of tall buildings',
        'the amount of money in the country',
      ],
      answer: 'a people’s growing capacity to meet their own needs',
      teach: 'Buildings are a consequence, not a cause.',
      level: 3,
    },
    {
      id: 'dev-2',
      ask: 'Which is a human indicator of development?',
      kind: 'choice',
      options: ['Infant mortality', 'Export tonnage', 'Road length'],
      answer: 'Infant mortality',
      teach: 'It shows whether people are actually better off.',
      level: 4,
    },
    {
      id: 'dev-3',
      ask: 'Why does selling cocoa as raw beans hold development back?',
      kind: 'choice',
      options: [
        'The processing jobs and wages are somewhere else',
        'Beans are heavy to transport',
        'Cocoa prices are fixed',
      ],
      answer: 'The processing jobs and wages are somewhere else',
      teach: 'The added value goes to whoever does the processing.',
      level: 5,
    },
  ],
})

/* ── population and migration ─────────────────────────────────────── */

teach({
  topicId: 'population-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A population grows when births exceed deaths, '
      + 'and changes locally when people move. '
      + 'People move for a reason: '
      + 'something pushes them from where they are '
      + 'and something pulls them to where they go. '
      + 'Name both for any migration.',
    method: [
      'For growth, compare births, deaths and migration.',
      'For movement, name the push and the pull separately.',
      'Judge a response by whether it changes the push or the pull.',
    ],
  },

  idea:
    'A population grows when the birth rate exceeds the death rate, '
    + 'and the growth of a particular place also depends on migration. '
    + 'Ghana’s population is young, '
    + 'because birth rates have been high '
    + 'and infant deaths have fallen. '
    + 'Migration within Ghana is mainly from the north to the south '
    + 'and from rural areas to the cities. '
    + 'The push factors are '
    + 'one short farming season, '
    + 'poor soils in places, '
    + 'few paid jobs, '
    + 'and fewer schools and clinics. '
    + 'The pull factors are '
    + 'paid work, markets, schooling, health care, '
    + 'and relatives already there. '
    + 'The effects are crowded cities, pressure on housing, water and '
    + 'sanitation, '
    + 'and villages left with the very young and the old.',

  mechanism:
    'Migration is often explained by saying young people want city life, '
    + 'and that is a description of the result rather than a cause. '
    + 'The useful account is a pair: '
    + 'something pushed and something pulled, '
    + 'and a migration needs both. '
    + 'A bad harvest alone does not send somebody to Accra '
    + 'unless there is something in Accra. '
    + 'Work in Accra alone does not move anybody '
    + 'who is doing well where they are. '
    + 'So any answer about migration has to name the two separately, '
    + 'and it immediately becomes clearer what would change it. '
    + 'The push from the north has a specific and familiar source: '
    + 'one rainy season instead of two, '
    + 'which means one planting season and a long dry one, '
    + 'which means months with no farm work. '
    + 'That is the climate lesson from JHS 1 '
    + 'showing up as a population pattern, '
    + 'and it is why irrigation in the north '
    + 'is a migration policy as well as an agricultural one. '
    + 'The young population has consequences worth stating. '
    + 'A country where many people are children '
    + 'needs schools and clinics now '
    + 'and jobs in ten years, '
    + 'and the second one is harder than the first. '
    + 'It is also an opportunity, '
    + 'because a large working age population can produce a great deal, '
    + 'but only if it has skills and work, '
    + 'which is why the population and development topics belong together.',

  recap:
    'You know why the north has one rainy season and the south two, '
    + 'and what that means for farming. '
    + 'This follows the consequence into where people live.',

  method: [
    'For growth, state the birth rate against the death rate.',
    'Add migration for a particular place.',
    'For a movement, name the push factors.',
    'Name the pull factors separately.',
    'Say why both are needed.',
    'Give the effects on the place people leave.',
    'Give the effects on the place they arrive.',
    'Judge a response by whether it weakens a push or a pull.',
  ],

  worked: [
    {
      level: 3,
      ask: 'When does a population grow?',
      steps: [
        'Compare the two rates.',
      ],
      answer: 'When the birth rate is higher than the death rate, '
        + 'and for a particular place, when more people arrive than leave.',
    },
    {
      level: 4,
      ask: 'Give one push and one pull factor '
        + 'for movement from the north to Accra.',
      steps: [
        'A push is something about where they are.',
        'A pull is something about where they go.',
      ],
      answer: 'Push: one short farming season, '
        + 'so months with no farm work. '
        + 'Pull: paid work and markets in the city.',
    },
    {
      level: 5,
      ask: 'Why would irrigation in the north reduce migration to the '
        + 'south?',
      steps: [
        'The push is a single farming season and a long idle dry season.',
        'Irrigation allows a second crop in the dry season.',
        'That is work and income at home.',
        'So the push weakens.',
      ],
      answer: 'Because it allows a dry season crop, '
        + 'which gives work and income during the months that now have '
        + 'none. '
        + 'It weakens the push rather than fighting the pull.',
    },
  ],

  traps: [
    {
      mistake: 'Explaining migration by saying people want city life.',
      why: 'That describes the result. '
        + 'Name the push and the pull.',
    },
    {
      mistake: 'Giving only push factors or only pull factors.',
      why: 'A migration needs both. '
        + 'Either alone moves nobody.',
    },
    {
      mistake: 'Treating a young population as only a burden.',
      why: 'It is also a large future workforce, '
        + 'if it gets skills and work.',
    },
    {
      mistake: 'Proposing to stop migration by discouraging it.',
      why: 'The reasons are still there. '
        + 'A response has to change the push or the pull.',
    },
  ],

  extension:
    'Migration abroad is analysed the same way, '
    + 'by naming a push and a pull. '
    + 'It adds two effects at once. '
    + 'Money is sent home, which supports families and schooling. '
    + 'And trained people are lost, '
    + 'which the country feels as a cost.',

  questions: [
    {
      id: 'pop-1',
      ask: 'A pull factor is something about:',
      kind: 'choice',
      options: [
        'the place people are moving to',
        'the place people are leaving',
        'the journey itself',
      ],
      answer: 'the place people are moving to',
      teach: 'A push factor is about the place they leave.',
      level: 3,
    },
    {
      id: 'pop-2',
      ask: 'What is the main push factor in northern Ghana?',
      kind: 'choice',
      options: [
        'One short rainy season, so months with no farm work',
        'Too much rain',
        'No land available',
      ],
      answer: 'One short rainy season, so months with no farm work',
      teach: 'The rain belt passes over the far north only once a year.',
      level: 4,
    },
    {
      id: 'pop-3',
      ask: 'Why must an answer about migration name both a push and a '
        + 'pull?',
      kind: 'choice',
      options: [
        'Either one alone moves nobody',
        'To make the answer longer',
        'Because the examiner asks for two things',
      ],
      answer: 'Either one alone moves nobody',
      teach: 'A bad harvest with nowhere to go, '
        + 'or work somewhere with no reason to leave, '
        + 'produces no migration.',
      level: 5,
    },
  ],
})

/* ── introduction to databases ──────────────────────────────────── */

teach({
  topicId: 'database-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A database stores data in a table. '
      + 'A record is one row, about one thing. '
      + 'A field is one column, the same kind of fact for every record. '
      + 'A query asks the table a question '
      + 'and gets back only the records that match.',
    method: [
      'Decide what one record stands for before anything else.',
      'Make each field hold one kind of fact.',
      'To query, state the condition and which fields you want back.',
    ],
  },

  idea:
    'A database is an organised store of data. '
    + 'In a table, each row is a record, '
    + 'holding everything about one thing: one pupil, one book, one sale. '
    + 'Each column is a field, '
    + 'holding the same kind of fact for every record: '
    + 'name, class, date of birth. '
    + 'A field has a data type: text, number, date, yes or no. '
    + 'A primary key is a field whose value is different for every record, '
    + 'so it identifies one record exactly. '
    + 'A query selects the records meeting a condition, '
    + 'and may sort them. '
    + 'A report presents the result for people to read.',

  mechanism:
    'The design question comes before everything '
    + 'and learners skip it: '
    + 'what does one record stand for? '
    + 'Answer that and the fields follow, '
    + 'and get it wrong and nothing else can be fixed. '
    + 'If one record is one pupil, '
    + 'then name, class and date of birth are fields, '
    + 'and there is exactly one row per pupil. '
    + 'If one record is one examination mark, '
    + 'then the pupil and the subject are fields '
    + 'and a pupil appears in many rows. '
    + 'Both are correct designs for different questions, '
    + 'and mixing them produces a table '
    + 'where nobody can tell what a row means. '
    + 'The second rule is one fact per field, '
    + 'and it is the one that saves the most trouble later. '
    + 'Putting "Kofi Mensah, Form 2B" in one field looks tidy '
    + 'and makes it impossible to list Form 2B, '
    + 'or to sort by surname, '
    + 'because the machine sees one piece of text. '
    + 'Split it and both become one query. '
    + 'A primary key matters for the same practical reason. '
    + 'Two pupils can share a name, '
    + 'so a name cannot identify a record, '
    + 'and a database with no reliable key '
    + 'eventually updates the wrong person. '
    + 'And a query is worth seeing as the whole point of the exercise: '
    + 'data stored in a table can be asked questions, '
    + 'and data stored in a paragraph cannot.',

  recap:
    'You have used a spreadsheet, '
    + 'with rows, columns and formulas. '
    + 'A database stores the same shape of data '
    + 'and is built to be asked questions about it.',

  method: [
    'Decide what one record stands for.',
    'List the fields: one kind of fact each.',
    'Give each field a data type.',
    'Choose a primary key that cannot repeat.',
    'Enter the data consistently.',
    'To query, write the condition.',
    'Say which fields you want back.',
    'Sort the result if the question asks for an order.',
  ],

  worked: [
    {
      level: 3,
      ask: 'In a table of pupils, what is a record and what is a field?',
      steps: [
        'A row and a column.',
      ],
      answer: 'A record is one row, holding everything about one pupil. '
        + 'A field is one column, such as class, for every pupil.',
    },
    {
      level: 4,
      ask: 'Why should name and class be separate fields?',
      steps: [
        'One field holds one kind of fact.',
        'Combined, the machine sees one piece of text.',
        'So it cannot select by class or sort by name.',
      ],
      answer: 'Because a query can only use a field as a whole. '
        + 'Combined, you cannot list one class or sort by name.',
    },
    {
      level: 5,
      ask: 'Why is a pupil’s name a poor primary key?',
      steps: [
        'A key must identify exactly one record.',
        'Two pupils can have the same name.',
        'So a name cannot pick out one record reliably.',
      ],
      answer: 'Because two pupils can share a name, '
        + 'so it does not identify one record. '
        + 'An index number does.',
    },
  ],

  traps: [
    {
      mistake: 'Starting to enter data before deciding what a record is.',
      why: 'Everything else depends on it, '
        + 'and it cannot be fixed afterwards.',
    },
    {
      mistake: 'Putting two facts in one field.',
      why: 'A query uses a whole field, '
        + 'so combined data cannot be selected or sorted.',
    },
    {
      mistake: 'Using a name as a primary key.',
      why: 'Names repeat. A key must not.',
    },
    {
      mistake: 'Entering the same thing inconsistently.',
      why: '"Form 2B" and "2B" are different values to the machine, '
        + 'so a query will miss half the records.',
    },
  ],

  extension:
    'Two tables can be linked by a shared field, '
    + 'which is how a pupils table and a marks table work together '
    + 'without repeating every pupil’s details on every mark. '
    + 'That is the whole reason databases exist rather than one big '
    + 'spreadsheet.',

  questions: [
    {
      id: 'dba-1',
      ask: 'A record in a table is:',
      kind: 'choice',
      options: ['One row', 'One column', 'One table'],
      answer: 'One row',
      teach: 'A field is a column.',
      level: 3,
    },
    {
      id: 'dba-2',
      ask: 'A primary key must be:',
      kind: 'choice',
      options: [
        'different for every record',
        'the first field',
        'a text field',
      ],
      answer: 'different for every record',
      teach: 'Otherwise it cannot identify one record.',
      level: 4,
    },
    {
      id: 'dba-3',
      ask: 'Why must each field hold only one kind of fact?',
      kind: 'choice',
      options: [
        'A query can only use a whole field',
        'To save space',
        'To keep the table narrow',
      ],
      answer: 'A query can only use a whole field',
      teach: 'Name and class combined cannot be selected or sorted '
        + 'separately.',
      level: 5,
    },
  ],
})

/* ── health and ethics in computing ───────────────────────────── */

teach({
  topicId: 'health-computing',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Long use causes eye strain, back and wrist pain, '
      + 'and the cure for all three is position and breaks. '
      + 'Copying somebody’s work and calling it yours is plagiarism, '
      + 'whether it came from a book or a screen. '
      + 'Credit the source and the copying becomes honest.',
    method: [
      'For each health risk, name the cause and the remedy.',
      'For ethics, ask whose work it is and whether you said so.',
      'Credit the source rather than hiding the use.',
    ],
  },

  idea:
    'Long periods at a screen cause eye strain. '
    + 'They also cause pain in the back, the neck and the wrists, '
    + 'and tiredness. '
    + 'The remedies are simple. '
    + 'Put the screen at eye level. '
    + 'Use a chair that supports your back. '
    + 'Keep your wrists straight while typing. '
    + 'Have good light with no glare. '
    + 'And take regular breaks away from the screen. '
    + 'Plagiarism is presenting somebody else’s work as your own. '
    + 'Copyright protects what people have written, drawn, '
    + 'recorded or programmed. '
    + 'There are other duties too. '
    + 'Do not use an account that is not yours. '
    + 'Do not share somebody’s private information. '
    + 'Do not pass on something you have not checked. '
    + 'And never use a device to harass anybody.',

  mechanism:
    'The health part is easy to list and easy to ignore, '
    + 'and there is one idea that makes it stick: '
    + 'the damage comes from not moving, '
    + 'rather than from the computer. '
    + 'A muscle held in one position '
    + 'aches whether you are typing or praying, '
    + 'and eyes focused at one distance for an hour '
    + 'ache whether the thing is a screen or a book. '
    + 'So the remedy is movement and change of distance, '
    + 'which is why a short break every half hour '
    + 'does more than any adjustment of the furniture. '
    + 'Position matters because it decides how badly the stillness costs '
    + 'you, '
    + 'not because the position itself is the harm. '
    + 'The ethics part needs a clearer line than learners are usually '
    + 'given, '
    + 'because "do not copy" is both too strict and too vague. '
    + 'Everybody uses other people’s work; '
    + 'that is what reading is for, '
    + 'and a world where you could not would have no scholarship in it. '
    + 'The wrong is in the claim, not the use. '
    + 'Taking a paragraph and presenting it as your own thinking '
    + 'is a lie about who did the work, '
    + 'and the same paragraph quoted with its source named '
    + 'is ordinary honest work. '
    + 'So the test is one question: '
    + 'have you said where it came from? '
    + 'That test also covers the cases learners find confusing. '
    + 'Using a picture from the internet in a project is fine with a '
    + 'credit. '
    + 'Submitting a friend’s assignment with your name on it is not, '
    + 'whatever the friend agreed to, '
    + 'because the claim being made is to the teacher and not to the '
    + 'friend.',

  recap:
    'You know how to recognise a scam and protect an account. '
    + 'This is the other half of digital citizenship: '
    + 'looking after yourself at the machine, '
    + 'and being honest about other people’s work.',

  method: [
    'Name the health risk.',
    'Name its cause: usually stillness or a fixed focus.',
    'Give the remedy: position, light, and breaks.',
    'For an ethical question, ask whose work it is.',
    'Ask whether the use is being claimed as your own.',
    'Name the source where you have used one.',
    'For a privacy question, ask whether the person agreed.',
    'Check anything before passing it on.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give one cause of eye strain at a computer and one remedy.',
      steps: [
        'Eyes held at one distance tire.',
      ],
      answer: 'Looking at one distance for too long. '
        + 'Take regular breaks and look at something far away.',
    },
    {
      level: 4,
      ask: 'Is using a picture from the internet in a project wrong?',
      steps: [
        'Using other people’s work is normal.',
        'The question is whether you claim it as yours.',
      ],
      answer: 'Not if you name where it came from. '
        + 'The wrong is in presenting it as your own.',
    },
    {
      level: 5,
      ask: 'A friend gives you permission to submit his assignment '
        + 'with your name on it. Why is this still wrong?',
      steps: [
        'The claim is being made to the teacher, not to the friend.',
        'The teacher is being told you did the work.',
        'The friend cannot give permission for that claim.',
      ],
      answer: 'Because the claim is to the teacher, '
        + 'who is being told that you did the work. '
        + 'Your friend cannot give permission for a statement made to '
        + 'somebody else.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking the computer itself causes the aches.',
      why: 'Stillness and a fixed focus cause them. '
        + 'Movement and breaks are the remedy.',
    },
    {
      mistake: 'Believing all copying is plagiarism.',
      why: 'Using other people’s work is normal. '
        + 'The wrong is claiming it as your own.',
    },
    {
      mistake: 'Treating a friend’s permission as settling the matter.',
      why: 'The false claim is made to the teacher.',
    },
    {
      mistake: 'Passing on something alarming without checking it.',
      why: 'Spreading it is an act of your own, '
        + 'and you are answerable for it.',
    },
  ],

  extension:
    'Software has a licence that says what you may do with it, '
    + 'and free and open source licences '
    + 'allow copying and changing on conditions, '
    + 'usually including giving credit. '
    + 'They are a formal version of exactly the same rule.',

  questions: [
    {
      id: 'eth-1',
      ask: 'What is the best remedy for aches from long computer use?',
      kind: 'choice',
      options: [
        'Regular breaks and movement',
        'A brighter screen',
        'Typing faster',
      ],
      answer: 'Regular breaks and movement',
      teach: 'The damage comes from stillness, not from the machine.',
      level: 3,
    },
    {
      id: 'eth-2',
      ask: 'Plagiarism is:',
      kind: 'choice',
      options: [
        'presenting somebody else’s work as your own',
        'using any source',
        'quoting a book',
      ],
      answer: 'presenting somebody else’s work as your own',
      teach: 'Naming the source makes the same use honest.',
      level: 4,
    },
    {
      id: 'eth-3',
      ask: 'What is the test of whether using a source is honest?',
      kind: 'choice',
      options: [
        'Whether you said where it came from',
        'Whether it was free',
        'Whether anybody noticed',
      ],
      answer: 'Whether you said where it came from',
      teach: 'The wrong is in the claim, not in the use.',
      level: 5,
    },
  ],
})

/* ── finding and fixing errors ────────────────────────────────── */

teach({
  topicId: 'debug-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A bug is a program doing something other than what you meant. '
      + 'To find one, find the last line you are CERTAIN is right, '
      + 'then check the next. '
      + 'Trace with a column per variable, '
      + 'and change one thing at a time.',
    method: [
      'Make the error happen on purpose, the same way every time.',
      'Find the last point where everything was still correct.',
      'Check the next step, and change one thing at a time.',
    ],
  },

  idea:
    'An error may stop a program running at all, '
    + 'because something is written wrongly, '
    + 'or it may run and give the wrong answer, '
    + 'which is a logic error and is harder to find. '
    + 'To find one, '
    + 'first make it happen reliably with the same input. '
    + 'Then trace the program by hand, '
    + 'with a column for each variable and one for output, '
    + 'until you find the first point where a value is not what you '
    + 'expected. '
    + 'The error is at or just before that point. '
    + 'Printing the value of a variable partway through '
    + 'is the simplest way to see inside a running program. '
    + 'Change one thing at a time, and test after each change.',

  mechanism:
    'Beginners debug by reading the whole program hoping to spot the '
    + 'fault, '
    + 'or by changing several things and running it again, '
    + 'and both can take an afternoon on a one line error. '
    + 'There is a method that takes minutes, '
    + 'and it is the one every working programmer uses. '
    + 'Find the last point at which you are CERTAIN everything is correct. '
    + 'Not where you think the bug is: '
    + 'where you know things are still right. '
    + 'Then look at what happens next. '
    + 'The fault is between the last correct point and the first wrong '
    + 'one, '
    + 'and each check you make halves the remaining distance. '
    + 'This works because you are gathering evidence '
    + 'rather than guessing, '
    + 'and it works even on a program you did not write. '
    + 'The second rule is to change one thing at a time. '
    + 'Change three and the program works, '
    + 'and you do not know which change fixed it '
    + 'or whether another is now broken. '
    + 'Change one and you learn something either way. '
    + 'The third rule is about where to look, '
    + 'and it goes against instinct: '
    + 'suspect the line you are most confident about. '
    + 'Nobody looks hard at a line they are sure of, '
    + 'which is exactly why the error survived everything else. '
    + 'And a last point of comfort: '
    + 'a bug is always a difference between what the machine was told '
    + 'and what you meant. '
    + 'The computer did precisely what you wrote, '
    + 'so the fault is findable, and it is in the text, '
    + 'not in the machine’s mood.',

  recap:
    'You can trace a program line by line '
    + 'with a column for each variable. '
    + 'Debugging is that skill aimed at a program that is already wrong.',

  method: [
    'Write down exactly what you expected and what happened.',
    'Make the error happen again with the same input.',
    'Read the error message if there is one, and the line it names.',
    'Trace by hand with a column per variable.',
    'Find the last point where every value was correct.',
    'Check the next step.',
    'Print a variable there if you cannot see the answer.',
    'Change one thing.',
    'Test again before changing anything else.',
    'Suspect the line you are most sure of.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is the difference between a program that will not run '
        + 'and one that gives a wrong answer?',
      steps: [
        'One is written wrongly, one is reasoned wrongly.',
      ],
      answer: 'The first has an error in how it is written. '
        + 'The second has a logic error, '
        + 'which is harder to find because nothing complains.',
    },
    {
      level: 4,
      ask: 'A program adds a list and gives a total that is too small by '
        + 'the last number. Where should you look?',
      steps: [
        'Everything is right except the last item.',
        'So the loop stopped one too early.',
        'Check the loop condition and the range.',
      ],
      answer: 'At the loop condition. '
        + 'It is almost certainly stopping one step too soon.',
    },
    {
      level: 5,
      ask: 'Why should you suspect the line you are most confident about?',
      steps: [
        'You check the lines you doubt.',
        'So an error in a doubted line would have been found.',
        'The error survived, so it is somewhere you did not look.',
      ],
      answer: 'Because you have already checked everything you doubted. '
        + 'An error that survived is in a line nobody examined, '
        + 'which is the line you were sure of.',
    },
  ],

  traps: [
    {
      mistake: 'Changing several things and running it again.',
      why: 'If it works you have learned nothing, '
        + 'and you may have broken something else.',
    },
    {
      mistake: 'Reading the whole program hoping to see the fault.',
      why: 'Find the last point you are certain about instead, '
        + 'and work forward.',
    },
    {
      mistake: 'Ignoring the error message.',
      why: 'It usually names the line, '
        + 'and even when it is unclear it narrows the search.',
    },
    {
      mistake: 'Blaming the computer.',
      why: 'It did exactly what the text said. '
        + 'The difference is between the text and your intention.',
    },
  ],

  extension:
    'Write a program in small pieces and test each one. '
    + 'That prevents most debugging altogether. '
    + 'When something breaks, '
    + 'you already know it is in the piece you just added.',

  questions: [
    {
      id: 'dbg-1',
      ask: 'What is the first step in finding a bug?',
      kind: 'choice',
      options: [
        'Make the error happen reliably',
        'Rewrite the program',
        'Change the variable names',
      ],
      answer: 'Make the error happen reliably',
      teach: 'You cannot test a fix for a fault you cannot reproduce.',
      level: 3,
    },
    {
      id: 'dbg-2',
      ask: 'How many things should you change at a time?',
      kind: 'choice',
      options: ['One', 'Two', 'As many as you suspect'],
      answer: 'One',
      teach: 'Otherwise you do not know what fixed it.',
      level: 4,
    },
    {
      id: 'dbg-3',
      ask: 'Where does the search for a bug start?',
      kind: 'choice',
      options: [
        'At the last point you are certain is correct',
        'At the first line',
        'At the line you think is wrong',
      ],
      answer: 'At the last point you are certain is correct',
      teach: 'The fault lies between there and the first wrong value.',
      level: 5,
    },
  ],
})

/* ── making a simple web page ─────────────────────────────── */

teach({
  topicId: 'web-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An HTML page is text with tags marking what each part IS: '
      + 'a heading, a paragraph, a link, an image. '
      + 'Most tags open and close. '
      + 'A browser reads the tags and decides how to show each part.',
    method: [
      'Write the content first, then mark what each part is.',
      'Close every tag you open, in the reverse order.',
      'Use a heading tag because it is a heading, not to make text big.',
    ],
  },

  idea:
    'An HTML page is plain text with tags in angle brackets. '
    + 'The page is wrapped in html, with a head and a body. '
    + 'The head holds the title, which appears on the browser tab. '
    + 'The body holds what is shown. '
    + 'h1 to h6 mark headings, '
    + 'p marks a paragraph, '
    + 'ul and li make a list, '
    + 'a with an href makes a link, '
    + 'and img with a src and an alt shows an image. '
    + 'Most tags open and close, '
    + 'and img does not, because it has no content inside it. '
    + 'The file is saved with an html extension and opened in a browser.',

  mechanism:
    'HTML is a language for saying what something IS, '
    + 'not what it should look like, '
    + 'and that is the same idea as a style in the word processing lesson. '
    + 'Marking a line as h1 does not mean make this big and bold. '
    + 'It means this is the main heading of the page, '
    + 'and the browser then decides to draw it large, '
    + 'a search engine treats it as the subject, '
    + 'and a screen reader announces it as a heading '
    + 'to somebody who cannot see the page. '
    + 'Using h1 just to make text big, '
    + 'or using bold where a heading belongs, '
    + 'throws all of that away '
    + 'and looks identical on your own screen. '
    + 'This is why the alt text on an image matters '
    + 'and why it is the thing learners always leave empty. '
    + 'The alt says what the picture shows, '
    + 'which is what a blind reader hears '
    + 'and what appears when the image fails to load, '
    + 'and a page full of images with no alt text '
    + 'is unusable to one reader and meaningless to another. '
    + 'The practical rules follow from the structure. '
    + 'Tags nest, so they must close in the reverse of the order they '
    + 'opened, '
    + 'and a forgotten closing tag '
    + 'usually makes everything after it look wrong '
    + 'rather than producing an error, '
    + 'which is exactly the kind of bug the debugging lesson describes: '
    + 'find the last part of the page that was still correct.',

  recap:
    'You know what a browser does: '
    + 'it asks a server for a page and draws what comes back. '
    + 'This is what the page it receives is made of.',

  method: [
    'Write the content as plain text first.',
    'Decide what each part is: heading, paragraph, list, link, image.',
    'Wrap the whole thing in html, with head and body.',
    'Put a title in the head.',
    'Mark the main heading with h1 and the rest with h2 downwards.',
    'Mark every paragraph with p.',
    'Give every link an href and every image a src and an alt.',
    'Close every tag, in the reverse order to opening.',
    'Save with an html extension and open it in a browser.',
    'If something looks wrong, find the last part that was still right.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which tag marks a paragraph?',
      steps: [
        'One letter.',
      ],
      answer: 'p, opened and closed.',
    },
    {
      level: 4,
      ask: 'Why should an image always have alt text?',
      steps: [
        'Some readers cannot see the image.',
        'Some images fail to load.',
      ],
      answer: 'Because it is what a blind reader hears '
        + 'and what is shown when the image does not load.',
    },
    {
      level: 5,
      ask: 'Why is using h1 to make text big a mistake, '
        + 'if it looks right?',
      steps: [
        'A tag says what something is, not how it looks.',
        'h1 tells a search engine this is the page’s subject.',
        'It tells a screen reader to announce a heading.',
        'Using it for size makes all of that wrong while looking fine.',
      ],
      answer: 'Because h1 declares the main heading of the page, '
        + 'and search engines and screen readers rely on that. '
        + 'Using it for size misinforms both while looking correct to you.',
    },
  ],

  traps: [
    {
      mistake: 'Forgetting a closing tag.',
      why: 'Everything after it usually looks wrong, '
        + 'without any error message.',
    },
    {
      mistake: 'Closing tags in the wrong order.',
      why: 'Tags nest, so they close in the reverse of the opening order.',
    },
    {
      mistake: 'Leaving alt text empty.',
      why: 'The page then means nothing to a reader who cannot see it.',
    },
    {
      mistake: 'Choosing a tag for how it looks.',
      why: 'A tag says what the thing is. '
        + 'Appearance is the browser’s decision.',
    },
  ],

  extension:
    'CSS is the language for appearance, '
    + 'kept separate from HTML on purpose. '
    + 'One stylesheet can change the look of a hundred pages at once, '
    + 'which is only possible because the HTML said what things ARE.',

  questions: [
    {
      id: 'web-1',
      ask: 'Where does the page title go?',
      kind: 'choice',
      options: ['In the head', 'In the body', 'In the first paragraph'],
      answer: 'In the head',
      teach: 'It appears on the browser tab rather than on the page.',
      level: 3,
    },
    {
      id: 'web-2',
      ask: 'Which tag makes a link?',
      kind: 'choice',
      options: ['a, with an href', 'link', 'p, with a src'],
      answer: 'a, with an href',
      teach: 'The href says where the link goes.',
      level: 4,
    },
    {
      id: 'web-3',
      ask: 'What does an HTML tag say about its content?',
      kind: 'choice',
      options: [
        'What it is',
        'What colour it should be',
        'How big it should be',
      ],
      answer: 'What it is',
      teach: 'Appearance is the browser’s decision, or the stylesheet’s.',
      level: 5,
    },
  ],
})
