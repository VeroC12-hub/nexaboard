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

  why:
    'In 2000, in 2008 and in 2016 a sitting government in Ghana '
    + 'lost an election and handed over. '
    + 'Elsewhere, a government that lost the count has stayed anyway, '
    + 'and soldiers settled the matter instead. '
    + 'The ballots were counted in both cases, and in both the losing '
    + 'side knew it had lost. '
    + 'In one the loser went home and in the other he did not. '
    + 'What makes a losing president walk out of the building, and '
    + 'which parts of an election exist to produce that one result?',

  idea:
    'Democracy means government by the people. '
    + 'In practice the people elect representatives. '
    + 'In Ghana, citizens of eighteen and over register to vote. '
    + 'Parties and candidates campaign. '
    + 'Voting is by secret ballot on a set day. '
    + 'The ballots are counted at the polling station, '
    + 'in front of the parties’ agents. '
    + 'Then the Electoral Commission declares the result. '
    + 'Several things around the vote are what keep it honest, '
    + 'and each of them stops something particular. '
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
    'Government in Ghana is divided into three arms. '
    + 'The legislature, which is Parliament, makes the laws. '
    + 'The executive, which is the President and the ministers, '
    + 'carries them out. '
    + 'The judiciary, which is the courts, decides what the law means '
    + 'and whether it has been broken. '
    + 'Each arm can stop the others. '
    + 'Parliament can refuse a law the President wants, and a court '
    + 'can rule that a law Parliament passed breaks the Constitution. '
    + 'This lesson is how the people filling those jobs are chosen, '
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

  figure: {
    alt: 'The stages of an election drawn in order: register at eighteen, '
      + 'campaign, vote by secret ballot, count at the polling station '
      + 'with the parties’ agents watching, and the result declared. A '
      + 'last arrow leads back to the hardest stage, the losing side '
      + 'accepting the result and handing the country over, which happens '
      + 'only when courts, a free press and a fixed next date make losing '
      + 'survivable.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">the vote is the middle of it, not the whole of it</text>'
      + '<path d="M 20 60 H 128 V 110 H 20 Z"/>'
      + '<text x="74" y="82" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">register</text>'
      + '<text x="74" y="99" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">at eighteen</text>'
      + '<path d="M 134 85 H 158" stroke-width="2"/>'
      + '<path d="M 166 85 L 150 78 L 150 92 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 172 60 H 280 V 110 H 172 Z"/>'
      + '<text x="226" y="90" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">campaign</text>'
      + '<path d="M 286 85 H 310" stroke-width="2"/>'
      + '<path d="M 318 85 L 302 78 L 302 92 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 324 60 H 432 V 110 H 324 Z" stroke="#0f8a4d"/>'
      + '<text x="378" y="82" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">vote, by</text>'
      + '<text x="378" y="99" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">secret ballot</text>'
      + '<path d="M 438 85 H 462" stroke-width="2"/>'
      + '<path d="M 470 85 L 454 78 L 454 92 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 476 60 H 620 V 110 H 476 Z" stroke="#0f8a4d"/>'
      + '<text x="548" y="82" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">count at the station,</text>'
      + '<text x="548" y="99" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">agents watching</text>'
      + '<path d="M 548 110 V 134" stroke-width="2"/>'
      + '<path d="M 548 142 L 541 126 L 555 126 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 440 144 H 620 V 190 H 440 Z"/>'
      + '<text x="530" y="172" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">the result is declared</text>'
      + '<path d="M 436 167 H 400" stroke-width="2"/>'
      + '<path d="M 392 167 L 408 160 L 408 174 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 200 144 H 388 V 190 H 200 Z" stroke="#0f8a4d"/>'
      + '<text x="294" y="164" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">the losing side accepts it</text>'
      + '<text x="294" y="182" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">and hands the country over</text>'
      + '<text x="320" y="238" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">that last step is the hard one, and it happens</text>'
      + '<text x="320" y="262" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">only when losing is survivable</text>'
      + '<path d="M 60 286 H 580 V 384 H 60 Z" stroke-dasharray="7 6" stroke-width="2"/>'
      + '<text x="320" y="310" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">so the things around the vote carry the weight:</text>'
      + '<text x="320" y="334" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">courts that will hear your case,</text>'
      + '<text x="320" y="356" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">a press that will still print what you say,</text>'
      + '<text x="320" y="376" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">and a fixed date when you may try again</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each safeguard, and what it is there to stop',
      columns: ['Safeguard', 'What it stops', 'What happens without it'],
      rows: [
        [
          'An independent commission',
          'A government counting its own votes',
          'A team refereeing the match it is playing in',
        ],
        [
          'A secret ballot',
          'Anybody knowing how you voted',
          'Your vote can be bought, or punished',
        ],
        [
          'Agents and observers at the count',
          'Figures changed after the vote',
          'Nobody outside can check the count',
        ],
        [
          'A published register',
          'Names added or removed quietly',
          'No way to tell who was entitled to vote',
        ],
        [
          'Courts that hear disputes',
          'A grievance with nowhere to go',
          'The street is the only route left',
        ],
        [
          'A fixed date for the next one',
          'Losing being final',
          'The loser has nothing to wait for',
        ],
      ],
      note: 'Read the last column down and it is one argument: each '
        + 'safeguard is a reason the losing side can afford to accept the '
        + 'result.',
    },
  ],
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

  why:
    'Two families in one town both say the land their houses stand '
    + 'on was their grandfather’s. '
    + 'Each has people who remember it that way and neither has a '
    + 'paper. '
    + 'The matter lies quiet for twenty years. '
    + 'Then a road is built nearby and the land is worth money. '
    + 'Within a month there is burning, and two people are dead over '
    + 'a plot that neither family wanted in 1995. '
    + 'Nothing about the land changed except its price. '
    + 'What would have had to happen in 1995, and who could have made '
    + 'it happen?',

  idea:
    'Conflict is a serious disagreement between groups. '
    + 'In Ghana the common causes are few and concrete, '
    + 'and every one of them is a thing that can be settled. '
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
    'Culture is the whole way a people live: their language, their '
    + 'food, their dress, how they marry, how they bury their dead, '
    + 'and who inherits what. '
    + 'Ghana holds many such cultures. '
    + 'More than seventy languages are spoken in it, and the systems '
    + 'of descent differ. '
    + 'Among the Akan a child belongs to the mother’s family and '
    + 'inherits through her, while among the Ewe, the Ga and the '
    + 'northern peoples descent and inheritance run through the '
    + 'father. '
    + 'None of that is a problem in itself, and all of it is held '
    + 'strongly. '
    + 'This lesson looks at what happens when groups come into '
    + 'dispute, and at what has actually settled such disputes.',

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

  figure: {
    alt: 'A disputed succession to a stool drawn in red at the centre, with '
      + 'one family on the left and another on the right, each pointing at '
      + 'it. The note under them says they line up along family and town '
      + 'because those are the lines that already existed. Below, a curfew '
      + 'in red stops the fighting and leaves the dispute waiting, while a '
      + 'determination of the rightful line in green settles the thing '
      + 'itself.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">identity is the shape the conflict takes, not its cause</text>'
      + '<path d="M 220 60 H 420 V 128 H 220 Z" stroke="#c8433a"/>'
      + '<text x="320" y="86" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">the thing actually in dispute:</text>'
      + '<text x="320" y="110" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">who succeeds to the stool</text>'
      + '<circle cx="56" cy="88" r="12"/>'
      + '<path d="M 56 100 V 122"/>'
      + '<path d="M 44 110 H 68"/>'
      + '<path d="M 56 122 L 47 142"/>'
      + '<path d="M 56 122 L 65 142"/>'
      + '<circle cx="96" cy="88" r="12"/>'
      + '<path d="M 96 100 V 122"/>'
      + '<path d="M 84 110 H 108"/>'
      + '<path d="M 96 122 L 87 142"/>'
      + '<path d="M 96 122 L 105 142"/>'
      + '<circle cx="136" cy="88" r="12"/>'
      + '<path d="M 136 100 V 122"/>'
      + '<path d="M 124 110 H 148"/>'
      + '<path d="M 136 122 L 127 142"/>'
      + '<path d="M 136 122 L 145 142"/>'
      + '<text x="96" y="162" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">one family</text>'
      + '<path d="M 160 100 H 200" stroke-width="2"/>'
      + '<path d="M 210 100 L 192 92 L 192 108 Z" fill="currentColor" stroke="none"/>'
      + '<circle cx="504" cy="88" r="12"/>'
      + '<path d="M 504 100 V 122"/>'
      + '<path d="M 492 110 H 516"/>'
      + '<path d="M 504 122 L 495 142"/>'
      + '<path d="M 504 122 L 513 142"/>'
      + '<circle cx="544" cy="88" r="12"/>'
      + '<path d="M 544 100 V 122"/>'
      + '<path d="M 532 110 H 556"/>'
      + '<path d="M 544 122 L 535 142"/>'
      + '<path d="M 544 122 L 553 142"/>'
      + '<circle cx="584" cy="88" r="12"/>'
      + '<path d="M 584 100 V 122"/>'
      + '<path d="M 572 110 H 596"/>'
      + '<path d="M 584 122 L 575 142"/>'
      + '<path d="M 584 122 L 593 142"/>'
      + '<text x="544" y="162" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">the other</text>'
      + '<path d="M 480 100 H 440" stroke-width="2"/>'
      + '<path d="M 430 100 L 448 92 L 448 108 Z" fill="currentColor" stroke="none"/>'
      + '<text x="320" y="178" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">they line up along family and town because</text>'
      + '<text x="320" y="196" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">those are the lines that already existed</text>'
      + '<path d="M 20 220 H 300 V 304 H 20 Z" stroke="#c8433a"/>'
      + '<text x="160" y="246" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">a curfew</text>'
      + '<text x="160" y="270" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">stops the fighting, and the</text>'
      + '<text x="160" y="290" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">dispute waits for it to lift</text>'
      + '<path d="M 340 220 H 620 V 304 H 340 Z" stroke="#0f8a4d"/>'
      + '<text x="480" y="246" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">a determination of the line</text>'
      + '<text x="480" y="270" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">settles the thing itself, and</text>'
      + '<text x="480" y="290" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">there is nothing left to fight over</text>'
      + '<text x="320" y="348" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so ask what is actually in dispute,</text>'
      + '<text x="320" y="374" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">because that is the thing somebody can settle</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What is actually in dispute in each case, and what settles '
        + 'it',
      columns: [
        'What is in dispute',
        'How it looks from outside',
        'What has actually settled it',
      ],
      rows: [
        [
          'Who succeeds to a stool',
          'Two families at war',
          'A determination of the rightful line',
        ],
        [
          'Where a boundary runs',
          'Two towns at war',
          'A survey both sides accept',
        ],
        [
          'Who may farm or graze the land',
          'Farmers against herders',
          'An agreement on use, written down',
        ],
        [
          'Who gets what is under the land',
          'One group against another',
          'A share of the royalties settled and paid',
        ],
        [
          'Unequal development',
          'A region resenting the rest',
          'Roads, schools and clinics that arrive',
        ],
      ],
      note: 'A curfew is in none of these rows. It stops the fighting, '
        + 'which is worth doing, and leaves the dispute exactly where it '
        + 'was.',
    },
  ],
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

  why:
    'Two towns of the same size stand an hour apart. '
    + 'One has a tarred road, a clinic with a nurse, piped water, '
    + 'electricity in most houses, and almost every child finishing '
    + 'JHS. '
    + 'The other has none of those, with the same number of people '
    + 'and the same land. '
    + 'Ask anybody in either town which is better off and the answer '
    + 'comes without hesitating. '
    + 'But a form has to be filled in, and it asks for a number. '
    + 'What do you actually measure, and why is income on its own not '
    + 'enough?',

  notation:
    'Development indicators are written as rates, and the rate has '
    + 'to say what it is out of. '
    + 'Income per person is written as GDP per capita, in dollars a '
    + 'year. '
    + 'Infant mortality is written per 1,000 live births, so 33 per '
    + '1,000 means 33 babies in every thousand born. '
    + 'Literacy and school enrolment are written as percentages, so '
    + '79 percent. '
    + 'The two are not interchangeable: 33 per 1,000 is 3.'
    + '3 percent, and writing 33 percent instead overstates it '
    + 'tenfold. '
    + 'Giving a rate without saying what it is out of is the '
    + 'commonest way to lose a mark.',

  idea:
    'Development means a people’s growing ability '
    + 'to meet their own needs and shape their own lives. '
    + 'It is measured by several indicators together. '
    + 'Income per person. '
    + 'How long people live, and how many babies survive. '
    + 'Schooling and literacy. '
    + 'Access to clean water, electricity and health care. '
    + 'And how much of the work is skilled. '
    + 'Ghana’s main obstacles are few, '
    + 'and each one blocks a particular thing the country could '
    + 'otherwise do.',

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
    'Ghana’s resources are gold, bauxite, manganese, oil, timber, '
    + 'cocoa and fish. '
    + 'Most of them leave the country as they come out of the ground '
    + 'or off the tree. '
    + 'A tonne of raw cocoa beans sells for a few thousand dollars. '
    + 'Turned into chocolate in Europe it is worth several times '
    + 'that, and the difference is earned there and not here. '
    + 'The same holds for gold sold as ore and bauxite sold '
    + 'unrefined. '
    + 'So the resource is ours and the value added to it is somebody '
    + 'else’s. '
    + 'This lesson asks the larger question: what would it mean for '
    + 'the country to be developed?',

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

  figure: {
    alt: 'On the left, in red, a skyline of tall buildings labelled as '
      + 'borrowed for, leaving the look of the thing and the debt. On the '
      + 'right, in green, a ticked list of what the people here can do: '
      + 'feed themselves, treat their illnesses, teach their children, and '
      + 'make things rather than only dig things up.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">the tall buildings are a consequence, not a cause</text>'
      + '<path d="M 24 54 H 300 V 240 H 24 Z" stroke="#c8433a"/>'
      + '<path d="M 48 120 H 96 V 212 H 48 Z" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 108 86 H 156 V 212 H 108 Z" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 168 142 H 216 V 212 H 168 Z" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 228 178 H 276 V 212 H 228 Z" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 40 212 H 284" stroke="#c8433a" stroke-width="2"/>'
      + '<text x="162" y="80" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">borrowed for</text>'
      + '<text x="162" y="232" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">the look of it, and the debt</text>'
      + '<path d="M 340 54 H 616 V 240 H 340 Z" stroke="#0f8a4d"/>'
      + '<text x="478" y="80" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">what the people here can do</text>'
      + '<path d="M 362 100 L 372 112 L 392 90" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="404" y="110" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">feed themselves</text>'
      + '<path d="M 362 134 L 372 146 L 392 124" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="404" y="144" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">treat their illnesses</text>'
      + '<path d="M 362 168 L 372 180 L 392 158" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="404" y="178" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">teach their children</text>'
      + '<path d="M 362 202 L 372 214 L 392 192" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="404" y="212" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">make things, not only</text>'
      + '<text x="404" y="230" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">dig things up</text>'
      + '<text x="320" y="292" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so the indicators are about people, not buildings:</text>'
      + '<text x="320" y="318" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">how long they live, how many babies survive,</text>'
      + '<text x="320" y="344" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">how many can read, whether the water is safe</text>'
      + '<text x="320" y="380" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">income alone can rise while most people get nothing</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each obstacle, the thing it blocks, and what would move it',
      columns: ['Obstacle', 'What it blocks', 'What would change it'],
      rows: [
        [
          'Resources exported raw',
          'Making things, not only digging them up',
          'Processing here, so the wages are paid here',
        ],
        [
          'Poor roads and unreliable power',
          'Promising a customer a delivery date',
          'Supply and roads a workshop can plan around',
        ],
        [
          'Corruption',
          'Getting a road for what it actually cost',
          'Accounts that anybody may inspect',
        ],
        [
          'Debt to be serviced',
          'Spending this year’s taxes on this year',
          'Borrowing only for what will earn',
        ],
        [
          'A few crops and minerals carrying it',
          'Surviving a fall in one price',
          'More things to sell',
        ],
        [
          'Trained people leaving',
          'Treating and teaching people here',
          'Work and pay worth staying for',
        ],
      ],
      note: 'Not one of these is answered by feeling differently about it. '
        + 'Each blocks something particular, which is what makes it '
        + 'answerable.',
    },
  ],
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

  why:
    'A young man in Bolgatanga finishes JHS and goes to Accra to '
    + 'work as a labourer, as his two brothers did before him. '
    + 'He sleeps four to a room and sends money home. '
    + 'He would rather be at home, and he says so. '
    + 'His father’s land is still there and nobody is farming it. '
    + 'Nothing forced him onto the bus and he did not want to go. '
    + 'What made him go anyway, and what would have had to be true in '
    + 'Bolgatanga for him to stay?',

  notation:
    'Population rates are written per 1,000 people a year. '
    + 'A birth rate of 29 per 1,000 means 29 babies born for every '
    + 'thousand people in that year, and a death rate of 7 per 1,000 '
    + 'means 7 deaths. '
    + 'The natural increase is the birth rate less the death rate, so '
    + '29 less 7 is 22 per 1,000, which is the same thing as 2.'
    + '2 percent. '
    + 'Growth rates are usually written as that percentage instead. '
    + 'Mixing per 1,000 with percent inside one subtraction is the '
    + 'commonest way to lose a mark.',

  idea:
    'A population grows when the birth rate exceeds the death rate, '
    + 'and the growth of a particular place also depends on migration. '
    + 'Ghana’s population is young, '
    + 'because birth rates have been high '
    + 'and infant deaths have fallen. '
    + 'Migration within Ghana is mainly from the north to the south '
    + 'and from rural areas to the cities. '
    + 'Every such movement has two halves, a push and a pull, '
    + 'and it needs both of them. '
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
    'Rain does not fall the same way across Ghana. '
    + 'The south gets two rainy seasons, one from about March to July '
    + 'and a shorter one from September to November. '
    + 'The north gets one, from about May to September, and then a '
    + 'long dry spell. '
    + 'So a southern farmer can take two harvests off the same land '
    + 'in a year, and a northern farmer takes one. '
    + 'That difference decides what can be grown, and how much a '
    + 'family can earn from a season. '
    + 'This lesson follows that consequence into where people live.',

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

  figure: {
    alt: 'The same woman drawn three times. With a red push arrow behind '
      + 'her and a green pull arrow ahead of her, she goes to Accra. With '
      + 'the push alone there is nowhere to go, so she stays. With the '
      + 'pull alone she is doing well where she is, so she stays.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">a push alone moves nobody, and so does a pull alone</text>'
      + '<text x="20" y="118" font-size="15" text-anchor="start" fill="currentColor" stroke="none">a push and a pull</text>'
      + '<path d="M 170 118 H 212" stroke="#c8433a"/>'
      + '<path d="M 222 118 L 204 109 L 204 127 Z" fill="#c8433a" stroke="none"/>'
      + '<text x="196" y="102" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">push</text>'
      + '<circle cx="262" cy="96" r="13" stroke="currentColor"/>'
      + '<path d="M 262 109 V 134" stroke="currentColor"/>'
      + '<path d="M 248 120 H 276" stroke="currentColor"/>'
      + '<path d="M 262 134 L 252 154" stroke="currentColor"/>'
      + '<path d="M 262 134 L 272 154" stroke="currentColor"/>'
      + '<path d="M 304 118 H 346" stroke="#0f8a4d"/>'
      + '<path d="M 356 118 L 338 109 L 338 127 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="330" y="102" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">pull</text>'
      + '<text x="510" y="124" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">she goes to Accra</text>'
      + '<text x="20" y="228" font-size="15" text-anchor="start" fill="currentColor" stroke="none">a push only</text>'
      + '<path d="M 170 228 H 212" stroke="#c8433a"/>'
      + '<path d="M 222 228 L 204 219 L 204 237 Z" fill="#c8433a" stroke="none"/>'
      + '<text x="196" y="212" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">push</text>'
      + '<circle cx="262" cy="206" r="13" stroke="currentColor"/>'
      + '<path d="M 262 219 V 244" stroke="currentColor"/>'
      + '<path d="M 248 230 H 276" stroke="currentColor"/>'
      + '<path d="M 262 244 L 252 264" stroke="currentColor"/>'
      + '<path d="M 262 244 L 272 264" stroke="currentColor"/>'
      + '<text x="510" y="234" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">nowhere to go, so she stays</text>'
      + '<text x="20" y="338" font-size="15" text-anchor="start" fill="currentColor" stroke="none">a pull only</text>'
      + '<circle cx="262" cy="316" r="13" stroke="currentColor"/>'
      + '<path d="M 262 329 V 354" stroke="currentColor"/>'
      + '<path d="M 248 340 H 276" stroke="currentColor"/>'
      + '<path d="M 262 354 L 252 374" stroke="currentColor"/>'
      + '<path d="M 262 354 L 272 374" stroke="currentColor"/>'
      + '<path d="M 304 338 H 346" stroke="#0f8a4d"/>'
      + '<path d="M 356 338 L 338 329 L 338 347 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="330" y="322" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">pull</text>'
      + '<text x="510" y="344" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">doing well here, so she stays</text>'
      + '<text x="320" y="394" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">the north has one rainy season, so months with no farm work: that is the push</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The push and the pull, set against each other reason by '
        + 'reason',
      columns: [
        'Reason',
        'The push, where they leave',
        'The pull, where they go',
      ],
      rows: [
        [
          'Work',
          'Few paid jobs, and months with no farm work',
          'Paid work, and markets to sell in',
        ],
        [
          'Land',
          'One short farming season, and poor soils in places',
          'A living that does not wait on one rainy season',
        ],
        [
          'Schooling',
          'Fewer schools',
          'Schools, and further ones after them',
        ],
        ['Health care', 'Fewer clinics', 'Hospitals and clinics'],
        [
          'People',
          'Those who could have helped have gone already',
          'Relatives already there to arrive to',
        ],
      ],
      note: 'A migration needs a row to be true on both sides. A bad '
        + 'harvest alone moves nobody who has nowhere to go.',
    },
  ],
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

  why:
    'A school keeps its pupils’ details in an exercise book, one '
    + 'page per class, written by hand. '
    + 'The headmaster is asked how many girls in the whole school are '
    + 'over fifteen and have not paid their fees. '
    + 'Everything he needs is written down somewhere in that book. '
    + 'It takes him a day and a half and he is not sure he got it '
    + 'right. '
    + 'Nothing is missing from his records. '
    + 'Why is the answer so hard to get out, and what about the way '
    + 'it is stored makes it hard?',

  idea:
    'A database is an organised store of data, '
    + 'held as a table of rows and columns rather than as paragraphs. '
    + 'That is the whole gain: '
    + 'data in a table can be asked questions, '
    + 'and data in a paragraph cannot. '
    + 'The words for its parts are few, '
    + 'and the design question that comes before all of them '
    + 'is what one row is going to stand for.',

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
    'A spreadsheet is a grid of boxes called cells, in rows going '
    + 'across and columns going down. '
    + 'You type a number or a word into a cell. '
    + 'You can also type a formula, which is an instruction beginning '
    + 'with an equals sign that works something out from other cells, '
    + 'so one reading equals B2 plus B3 shows the total of those two. '
    + 'Change B2 and that total changes by itself. '
    + 'A database holds data in the same shape, rows and columns, and '
    + 'is built for a different purpose: to be asked questions about '
    + 'what is in it.',

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

  figure: {
    alt: 'A table of three pupils with the columns PupilNo, Surname, Other '
      + 'names, Class and Date of birth. PupilNo is marked in green as the '
      + 'primary key, and two of the pupils share the surname Mensah, '
      + 'which is why a name cannot be the key. Below, a single field '
      + 'holding Kofi Mensah, Form 2B is crossed out in red, because three '
      + 'facts in one field make it impossible to list Form 2B or to sort '
      + 'by surname.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">one row is one thing, and one field is one fact</text>'
      + '<text x="90" y="52" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">the primary key</text>'
      + '<path d="M 40 62 V 202" stroke-width="2"/>'
      + '<path d="M 140 62 V 202" stroke-width="2"/>'
      + '<path d="M 250 62 V 202" stroke-width="2"/>'
      + '<path d="M 360 62 V 202" stroke-width="2"/>'
      + '<path d="M 440 62 V 202" stroke-width="2"/>'
      + '<path d="M 600 62 V 202" stroke-width="2"/>'
      + '<path d="M 40 62 H 600" stroke-width="2"/>'
      + '<path d="M 40 96 H 600" stroke-width="2"/>'
      + '<path d="M 40 131 H 600" stroke-width="2"/>'
      + '<path d="M 40 166 H 600" stroke-width="2"/>'
      + '<path d="M 40 202 H 600" stroke-width="2"/>'
      + '<text x="90" y="85" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">PupilNo</text>'
      + '<text x="195" y="85" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">Surname</text>'
      + '<text x="305" y="85" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">Other names</text>'
      + '<text x="400" y="85" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">Class</text>'
      + '<text x="520" y="85" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">Date of birth</text>'
      + '<text x="90" y="119" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">2301</text>'
      + '<text x="195" y="119" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">Mensah</text>'
      + '<text x="305" y="119" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">Kofi</text>'
      + '<text x="400" y="119" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">2B</text>'
      + '<text x="520" y="119" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">12 April 2010</text>'
      + '<text x="90" y="154" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">2302</text>'
      + '<text x="195" y="154" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">Mensah</text>'
      + '<text x="305" y="154" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">Ama</text>'
      + '<text x="400" y="154" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">2B</text>'
      + '<text x="520" y="154" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">3 March 2010</text>'
      + '<text x="90" y="189" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">2303</text>'
      + '<text x="195" y="189" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">Owusu</text>'
      + '<text x="305" y="189" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">Yaa</text>'
      + '<text x="400" y="189" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">3A</text>'
      + '<text x="520" y="189" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">21 July 2009</text>'
      + '<text x="120" y="226" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">each row is one record:</text>'
      + '<text x="120" y="244" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">one pupil</text>'
      + '<text x="330" y="226" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">each column is one field:</text>'
      + '<text x="330" y="244" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">the same fact in every row</text>'
      + '<text x="530" y="226" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">two pupils share a surname,</text>'
      + '<text x="530" y="244" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">so a name cannot be the key</text>'
      + '<path d="M 150 274 H 450 V 312 H 150 Z" stroke="#c8433a"/>'
      + '<text x="300" y="298" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">Kofi Mensah, Form 2B</text>'
      + '<path d="M 468 278 L 496 308" stroke="#c8433a"/>'
      + '<path d="M 496 278 L 468 308" stroke="#c8433a"/>'
      + '<text x="320" y="340" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">three facts in one field looks tidy, and now nobody can list</text>'
      + '<text x="320" y="360" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">Form 2B or sort by surname: the machine sees one piece of text</text>'
      + '<text x="320" y="388" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">data in a table can be asked questions; data in a paragraph cannot</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The words for the parts of a database, in a table of pupils',
      columns: ['Word', 'What it is', 'In a table of pupils'],
      rows: [
        ['Record', 'One row: everything about one thing', 'One pupil'],
        [
          'Field',
          'One column: the same fact in every record',
          'Surname, or class',
        ],
        [
          'Data type',
          'What kind of value a field may hold',
          'Text, number, date, yes or no',
        ],
        [
          'Primary key',
          'A field whose value differs in every record',
          'The pupil number, never the name',
        ],
        [
          'Query',
          'A question picking out the records that match',
          'Every pupil in Form 2B',
        ],
        [
          'Report',
          'The result laid out for people to read',
          'A class list to pin up',
        ],
      ],
      note: 'Decide what one record stands for before any of this. One '
        + 'pupil per row and one mark per row are both correct designs, '
        + 'for different questions, and mixing them leaves a table nobody '
        + 'can read.',
    },
  ],
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

  why:
    'A student has a project due in the morning and finds a page '
    + 'online that answers it well. '
    + 'He copies three paragraphs, changes a few words, and hands it '
    + 'in. '
    + 'He gets a good mark. '
    + 'Two weeks later the teacher finds the page, and he is given '
    + 'zero. '
    + 'So is another student who never saw the page but copied from '
    + 'him. '
    + 'Neither of them took money or a password. '
    + 'What was actually taken, and from whom?',

  notation:
    'A source is named so that another person can find the exact '
    + 'thing you used. '
    + 'For a website that means the author if there is one, the title '
    + 'of the page, the name of the site, the web address, and the '
    + 'date you read it. '
    + 'For a book it is the author, the title and the year. '
    + 'Quotation marks go round any words that are not yours, with '
    + 'the source beside them. '
    + 'Changing a few words and leaving the source off is still '
    + 'plagiarism, and it is the commonest way to lose every mark on '
    + 'a piece of work.',

  idea:
    'Long periods at a screen cause eye strain. '
    + 'They also cause pain in the back, the neck and the wrists, '
    + 'and tiredness. '
    + 'The remedies are simple, and each one answers a particular ache. '
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
    'A scam online is a message that tries to get money or a '
    + 'password out of you by pretending to be somebody else. '
    + 'The signs are steady. '
    + 'It is urgent, it comes from an address that is nearly right, '
    + 'it asks for something you would never be asked for, and it '
    + 'offers something for nothing. '
    + 'Protecting an account means a password nobody could guess, '
    + 'never the same one twice, and never typed into a page you '
    + 'reached by clicking a link in a message. '
    + 'That is one half of using a computer safely and decently. '
    + 'This lesson is the other half: looking after your own body at '
    + 'the machine, and being honest about other people’s work.',

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

  figure: {
    alt: 'The same paragraph taken from the same book, shown twice. On the '
      + 'left, in red, it has no source named under it, which is a lie '
      + 'about who did the work. On the right, in green, the source is '
      + 'named under it, which is ordinary honest work.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">the wrong is in the claim, not in the use</text>'
      + '<text x="320" y="56" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">the same paragraph, taken from the same book</text>'
      + '<path d="M 24 76 H 300 V 250 H 24 Z" stroke="#c8433a"/>'
      + '<path d="M 44 104 H 280" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 44 126 H 280" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 44 148 H 280" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 44 170 H 220" stroke="#c8433a" stroke-width="2"/>'
      + '<text x="162" y="206" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">no source named</text>'
      + '<text x="162" y="232" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">a lie about who did the work</text>'
      + '<path d="M 340 76 H 616 V 250 H 340 Z" stroke="#0f8a4d"/>'
      + '<path d="M 360 104 H 596" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 360 126 H 596" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 360 148 H 596" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 360 170 H 536" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="478" y="206" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">the source named under it</text>'
      + '<text x="478" y="232" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">ordinary honest work</text>'
      + '<text x="320" y="296" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">everybody uses other people’s work:</text>'
      + '<text x="320" y="322" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">that is what reading is for</text>'
      + '<text x="320" y="356" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">what is forbidden is saying you thought of it,</text>'
      + '<text x="320" y="378" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">and naming the source is the whole difference</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What aches after a long stretch at a screen, and what '
        + 'answers it',
      columns: ['What aches', 'Why it aches', 'What answers it'],
      rows: [
        [
          'Eyes',
          'Focused at one distance, and glare on the screen',
          'Look far off now and then, and light that does not reflect',
        ],
        ['Neck', 'The head held at one angle', 'The screen at eye level'],
        [
          'Back',
          'Sitting in one shape',
          'A chair that supports it, and standing up',
        ],
        ['Wrists', 'Bent while typing', 'Keep them straight'],
        ['All of it', 'Not moving at all', 'A short break every half hour'],
      ],
      note: 'The last row is the real cause and the others are only how '
        + 'dearly it costs you. A muscle held still aches whether you are '
        + 'typing or praying.',
    },
  ],
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

  why:
    'A program is supposed to add up ten marks and give the '
    + 'average. '
    + 'It runs without complaining and prints 43.'
    + '6 every single time, whatever marks are typed in. '
    + 'Nothing is misspelled and the computer reports no error at '
    + 'all. '
    + 'The answer is simply wrong, and wrong in the same way every '
    + 'time. '
    + 'Where do you start, when the machine will not tell you which '
    + 'line is at fault?',

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
    + 'A few rules make this fast, and ignoring any of them makes it an '
    + 'afternoon.',

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
    'Tracing a program means working through it by hand, one line '
    + 'at a time, writing down what every variable holds after each '
    + 'line. '
    + 'Draw a table with a column for each variable, and one more '
    + 'column for anything the program prints. '
    + 'For a loop that adds 1 to a total three times, the total '
    + 'column reads 0, then 1, then 2, then 3, and each step is there '
    + 'to be seen. '
    + 'Tracing shows what the program actually does, which is not '
    + 'always what it was meant to do. '
    + 'This lesson aims that skill at a program already known to be '
    + 'wrong.',

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

  figure: {
    alt: 'Seven lines of a program drawn as a stack of boxes. The first '
      + 'three are green, the lines you are certain are right. The seventh '
      + 'is red, where the value is already wrong. A bracket marks the '
      + 'three lines between them as where the fault must be, and a green '
      + 'arrow points at the middle one, because printing the value there '
      + 'removes half of what is left to search.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">work in from both ends, and halve what is left</text>'
      + '<path d="M 200 50 H 440 V 86 H 200 Z" stroke="#0f8a4d"/>'
      + '<text x="320" y="73" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">line 1</text>'
      + '<path d="M 200 90 H 440 V 126 H 200 Z" stroke="#0f8a4d"/>'
      + '<text x="320" y="113" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">line 2</text>'
      + '<path d="M 200 130 H 440 V 166 H 200 Z" stroke="#0f8a4d"/>'
      + '<text x="320" y="153" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">line 3</text>'
      + '<text x="190" y="100" font-size="13" text-anchor="end" fill="#0f8a4d" stroke="none">you are certain</text>'
      + '<text x="190" y="118" font-size="13" text-anchor="end" fill="#0f8a4d" stroke="none">these are right</text>'
      + '<path d="M 200 170 H 440 V 206 H 200 Z"/>'
      + '<text x="320" y="193" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">line 4</text>'
      + '<path d="M 200 210 H 440 V 246 H 200 Z"/>'
      + '<text x="320" y="233" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">line 5</text>'
      + '<path d="M 200 250 H 440 V 286 H 200 Z"/>'
      + '<text x="320" y="273" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">line 6</text>'
      + '<path d="M 200 290 H 440 V 326 H 200 Z" stroke="#c8433a"/>'
      + '<text x="320" y="313" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">line 7</text>'
      + '<text x="190" y="306" font-size="13" text-anchor="end" fill="#c8433a" stroke="none">here the value</text>'
      + '<text x="190" y="324" font-size="13" text-anchor="end" fill="#c8433a" stroke="none">is already wrong</text>'
      + '<path d="M 452 170 H 468 V 286 H 452" stroke-width="2"/>'
      + '<text x="478" y="214" font-size="14" text-anchor="start" fill="currentColor" stroke="none">the fault is</text>'
      + '<text x="478" y="232" font-size="14" text-anchor="start" fill="currentColor" stroke="none">somewhere in</text>'
      + '<text x="478" y="250" font-size="14" text-anchor="start" fill="currentColor" stroke="none">these three</text>'
      + '<text x="120" y="196" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">print the value</text>'
      + '<text x="120" y="214" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">in the middle one</text>'
      + '<path d="M 56 236 H 190" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 198 236 L 182 229 L 182 243 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="120" y="264" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">and half of it goes</text>'
      + '<text x="320" y="366" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the machine did exactly what you wrote,</text>'
      + '<text x="320" y="388" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">so the fault is in the text and it is findable</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The rules of finding an error, and what each one saves',
      columns: ['Rule', 'Why it works', 'What ignoring it costs'],
      rows: [
        [
          'Make it happen reliably first',
          'You cannot fix what you cannot repeat',
          'Changing things at random',
        ],
        [
          'Find the last point you are certain of',
          'The fault is between there and the first wrong value',
          'Reading the whole program hoping to spot it',
        ],
        [
          'Print a value partway through',
          'It is the simplest way to see inside',
          'Guessing what the machine is holding',
        ],
        [
          'Change one thing at a time',
          'You learn something either way',
          'It works and you do not know why',
        ],
        [
          'Suspect the line you are surest of',
          'Nobody looks hard at a line they trust',
          'The error survives every pass you make',
        ],
      ],
      note: 'A bug is always a difference between what you meant and what '
        + 'you wrote. The machine did exactly what the text said, so the '
        + 'fault is in the text and it can be found.',
    },
  ],
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

  why:
    'Open a web page in a browser and it shows a heading, some '
    + 'paragraphs and a picture. '
    + 'Then use View Source on that same page. '
    + 'What appears is text full of pointed brackets, with the words '
    + 'of the page buried inside it. '
    + 'Both are the same page. '
    + 'One is what you see and the other is what was actually sent. '
    + 'What are all those brackets doing, and how does a page of '
    + 'plain text come out with a big bold heading on it?',

  notation:
    'A tag is the name of a part of the page, written between two '
    + 'pointed brackets, and it is said by its letters, so the p tag '
    + 'is said “p tag” or “paragraph tag” and h1 is said “h one”. '
    + 'Most tags come in a pair. '
    + 'The opening tag is the name on its own, and the closing tag is '
    + 'the same name with a forward slash in front of it, said “slash '
    + 'p”. '
    + 'Whatever sits between the two is the content that tag applies '
    + 'to. '
    + 'A few tags hold no content and so never close, img being the '
    + 'one here. '
    + 'Forgetting the slash on a closing tag, or not closing a tag at '
    + 'all, is what makes a page come out wrong.',

  idea:
    'An HTML page is plain text with tags in angle brackets. '
    + 'The page is wrapped in html, with a head and a body. '
    + 'The head holds information about the page '
    + 'and the body holds what is shown. '
    + 'Each tag says what a piece of the page IS, '
    + 'and there are only a few worth learning. '
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
    'A browser is the program a web page is opened in, such as '
    + 'Chrome or Firefox. '
    + 'When an address is typed in, the browser sends a request '
    + 'across the internet to a computer called a server, which holds '
    + 'the page. '
    + 'The server sends back a file. '
    + 'The browser reads that file and draws on the screen what the '
    + 'file says. '
    + 'So the browser stores none of the page and invents none of it '
    + 'either. '
    + 'This lesson is about what is inside the file that comes back.',

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

  figure: {
    alt: 'On the left, the HTML a learner writes, from the opening html tag '
      + 'down to the closing one. On the right, the page a browser draws '
      + 'from it, with green lines joining each tag to the thing it '
      + 'produced: the title to the browser tab, the h1 to the large '
      + 'heading, the p to the paragraph, and the li to the bulleted item.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">a tag says what a thing IS, and the browser decides how it looks</text>'
      + '<text x="150" y="52" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">the file you write</text>'
      + '<path d="M 20 62 H 300 V 290 H 20 Z" stroke-width="2"/>'
      + '<text x="32" y="86" font-size="12" font-family="ui-monospace, SFMono-Regular, monospace" text-anchor="start" fill="currentColor" stroke="none">&lt;html&gt;</text>'
      + '<text x="48" y="103" font-size="12" font-family="ui-monospace, SFMono-Regular, monospace" text-anchor="start" fill="currentColor" stroke="none">&lt;head&gt;</text>'
      + '<text x="64" y="120" font-size="12" font-family="ui-monospace, SFMono-Regular, monospace" text-anchor="start" fill="#0f8a4d" stroke="none">&lt;title&gt;Cocoa&lt;/title&gt;</text>'
      + '<text x="48" y="137" font-size="12" font-family="ui-monospace, SFMono-Regular, monospace" text-anchor="start" fill="currentColor" stroke="none">&lt;/head&gt;</text>'
      + '<text x="48" y="154" font-size="12" font-family="ui-monospace, SFMono-Regular, monospace" text-anchor="start" fill="currentColor" stroke="none">&lt;body&gt;</text>'
      + '<text x="64" y="171" font-size="12" font-family="ui-monospace, SFMono-Regular, monospace" text-anchor="start" fill="#0f8a4d" stroke="none">&lt;h1&gt;Cocoa&lt;/h1&gt;</text>'
      + '<text x="64" y="188" font-size="12" font-family="ui-monospace, SFMono-Regular, monospace" text-anchor="start" fill="#0f8a4d" stroke="none">&lt;p&gt;It grows in the forest.&lt;/p&gt;</text>'
      + '<text x="64" y="205" font-size="12" font-family="ui-monospace, SFMono-Regular, monospace" text-anchor="start" fill="currentColor" stroke="none">&lt;ul&gt;</text>'
      + '<text x="80" y="222" font-size="12" font-family="ui-monospace, SFMono-Regular, monospace" text-anchor="start" fill="#0f8a4d" stroke="none">&lt;li&gt;beans&lt;/li&gt;</text>'
      + '<text x="64" y="239" font-size="12" font-family="ui-monospace, SFMono-Regular, monospace" text-anchor="start" fill="currentColor" stroke="none">&lt;/ul&gt;</text>'
      + '<text x="48" y="256" font-size="12" font-family="ui-monospace, SFMono-Regular, monospace" text-anchor="start" fill="currentColor" stroke="none">&lt;/body&gt;</text>'
      + '<text x="32" y="273" font-size="12" font-family="ui-monospace, SFMono-Regular, monospace" text-anchor="start" fill="currentColor" stroke="none">&lt;/html&gt;</text>'
      + '<text x="480" y="52" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">what the browser draws</text>'
      + '<path d="M 350 62 H 620 V 290 H 350 Z" stroke-width="2"/>'
      + '<path d="M 350 90 H 620" stroke-width="2"/>'
      + '<path d="M 362 68 H 456 V 90 H 362 Z" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="409" y="84" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">Cocoa</text>'
      + '<text x="372" y="138" font-size="24" text-anchor="start" fill="#0f8a4d" stroke="none">Cocoa</text>'
      + '<text x="372" y="176" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">It grows in the forest.</text>'
      + '<circle cx="382" cy="212" r="4" fill="#0f8a4d" stroke="none"/>'
      + '<text x="398" y="217" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">beans</text>'
      + '<path d="M 304 97 H 336 V 80 H 348" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 304 182 H 320 V 130 H 348" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 304 199 H 326 V 170 H 348" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 304 233 H 332 V 210 H 348" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="320" y="330" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">h1 does not mean make this big: it means this is the main heading,</text>'
      + '<text x="320" y="352" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">so a search engine treats it as the subject</text>'
      + '<text x="320" y="374" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">and a screen reader announces it as one</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The tags worth learning, and what each one says a thing is',
      columns: ['Tag', 'What it says the thing is', 'Does it close?'],
      rows: [
        [
          'html, head, body',
          'The page, its information, and what is shown',
          'Yes',
        ],
        ['title', 'The name of the page, shown on the browser tab', 'Yes'],
        ['h1 to h6', 'A heading, h1 being the main one', 'Yes'],
        ['p', 'A paragraph', 'Yes'],
        ['ul and li', 'A list, and one item in it', 'Yes'],
        ['a, with an href', 'A link, and where it goes', 'Yes'],
        [
          'img, with a src and an alt',
          'An image, where it is, and what it shows',
          'No, it holds nothing inside it',
        ],
      ],
      note: 'The alt is the one learners leave empty. It is what a blind '
        + 'reader hears and what appears when the image fails to load, so '
        + 'a page of images without it is unusable to one reader and '
        + 'meaningless to another.',
    },
  ],
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
