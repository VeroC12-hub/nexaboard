/**
 * Stored lessons for JHS 2 Religious and Moral Education, and Ghanaian
 * Language.
 *
 * Written at about grade 7, with a `brief` form on every topic.
 *
 * ── RME: the same discipline as JHS 1 ─────────────────────────────────────
 *
 * Each of the three faiths is reported as its own followers state it, in its
 * own terms, and nothing here settles which is correct. Where they agree,
 * that is said plainly, because the agreement is itself a finding.
 *
 * `moral-choice` is the one that cannot be written as a list. A dilemma is
 * by definition a case where two things you believe point opposite ways, so
 * a lesson that gives the answer has removed the dilemma and taught nothing.
 * It teaches a procedure instead, and the worked examples carry real
 * conflicts with the cost of each choice stated.
 *
 * ── GHL: the language the school teaches, whichever it is ─────────────────
 *
 * Same rule as before. These four topics are the oral literature ones, which
 * are the most language-specific in the syllabus, so the lessons teach what
 * an appellation, a dirge, a proverb and a folktale DO, and how to work on
 * the ones from your own language, rather than asserting the content of any
 * single tradition.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── stewardship of the environment ───────────────────────────────────── */

teach({
  topicId: 'stewardship-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'All three faiths teach that the earth was given to people to look '
      + 'after and does not belong to them. '
      + 'So damaging it is a wrong against the giver, '
      + 'and not only a bad decision. '
      + 'A steward answers for what was entrusted to him.',
    method: [
      'State the teaching, with the faith it comes from.',
      'Draw the duty from the teaching, not from your own opinion.',
      'Apply it to a named local problem.',
    ],
  },

  why:
    'The Densu supplies water to part of Accra. '
    + 'Along its banks people wash, dump refuse and dig sand, and '
    + 'each one of them, taken alone, is doing almost no harm. '
    + 'Nobody owns the river, so nobody is answerable when it '
    + 'runs brown. '
    + 'If a thing belongs to no one in particular, who is '
    + 'supposed to look after it?',

  idea:
    'A steward is somebody left in charge of what belongs to another, '
    + 'and who must answer for it. '
    + 'All three of the faiths studied in Ghana make the human being a steward of '
    + 'the earth, each in its own words, '
    + 'and each therefore gives a duty to care for it. '
    + 'The important part is what follows from that. '
    + 'If the earth was never yours, destroying it is a wrong done to '
    + 'somebody, and not merely a loss.',

  mechanism:
    'The argument matters more than the examples, '
    + 'because the argument is what an examination asks you to make. '
    + 'It runs in three steps and it is the same in all three faiths. '
    + 'First, the earth was given; it is not ours by making. '
    + 'Second, what is given in trust has to be answered for. '
    + 'Third, therefore damaging it is a wrong against the one who gave it '
    + 'and against those it was given for. '
    + 'That third step is what makes a religious argument different from a '
    + 'practical one. '
    + 'A practical argument says galamsey is foolish because the water '
    + 'will run out. '
    + 'A stewardship argument says it is wrong even where it is profitable, '
    + 'because the river was not the miner’s to spend. '
    + 'Those are different claims, and the second one survives the case '
    + 'where somebody gains. '
    + 'The traditional institutions are worth taking seriously here '
    + 'rather than mentioning politely. '
    + 'A sacred grove is a piece of forest nobody may cut, '
    + 'and in practice the oldest trees and the last of some species stand '
    + 'in them. '
    + 'A closed day on a river stops fishing one day a week, '
    + 'which lets the fish recover. '
    + 'Whatever one believes about the reasons given, '
    + 'those rules did the work that conservation laws now try to do, '
    + 'and they were obeyed without inspectors, '
    + 'which is more than most laws manage.',

  recap:
    'A steward is somebody left in charge of what belongs to '
    + 'another, and who must answer for how it was kept. '
    + 'Leave your uncle in charge of your shop for a month and he '
    + 'is a steward of it: he may use it, but he has to hand it '
    + 'back and account for what he did. '
    + 'All three major faiths in Ghana put the human being in '
    + 'that position towards the earth. '
    + 'Christianity and Islam both have God making the human '
    + 'being a keeper of creation, and Akan traditional teaching '
    + 'holds the land to belong to the ancestors and the unborn '
    + 'as much as to the living. '
    + 'So in each of them the earth is something a person answers '
    + 'for, and this lesson is about what follows from that.',

  method: [
    'State the teaching and name the faith it comes from.',
    'Use that faith’s own terms.',
    'Make the argument in three steps: given, held in trust, answerable.',
    'Name a real local problem.',
    'Say what the teaching requires of a believer in that case.',
    'Mention one traditional institution and what it protected.',
    'Describe each faith fairly. Do not rank them.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is a steward?',
      steps: [
        'Somebody in charge of something that is not theirs.',
      ],
      answer: 'A person left in charge of what belongs to another, '
        + 'and who must answer for it.',
    },
    {
      level: 4,
      ask: 'Give one teaching from each faith that supports caring for the '
        + 'environment.',
      steps: [
        'Take each in turn, in its own words.',
      ],
      answer: 'Christianity: people were placed in the world to tend it. '
        + 'Islam: the human being is God’s trustee and waste is forbidden. '
        + 'African Traditional Religion: land and rivers are held in trust '
        + 'from the ancestors for those yet unborn.',
    },
    {
      level: 5,
      ask: 'How does a religious argument against galamsey differ '
        + 'from a practical one?',
      steps: [
        'A practical argument says the damage will cost us later.',
        'That argument weakens if somebody profits and moves away.',
        'A stewardship argument says the river was never his to spend.',
        'So it holds even where the damage pays.',
      ],
      answer: 'A practical argument says it will cost us in the end, '
        + 'which fails against somebody who profits and leaves. '
        + 'A stewardship argument says the river was never his to spend, '
        + 'so it holds even when the damage is profitable.',
    },
  ],

  traps: [
    {
      mistake: 'Giving your own opinion instead of a teaching.',
      why: 'The question asks what the faith teaches. '
        + 'Name the teaching and where it comes from.',
    },
    {
      mistake: 'Treating traditional practices as superstition in '
        + 'passing.',
      why: 'Describe them as their practitioners do. '
        + 'Sacred groves and closed days protected real things.',
    },
    {
      mistake: 'Collapsing the argument into "God says do not litter".',
      why: 'The argument has three steps, '
        + 'and the marks are in the reasoning from given to answerable.',
    },
    {
      mistake: 'Answering with no local example.',
      why: 'The question nearly always asks for application. '
        + 'Name a river, a forest or a town.',
    },
  ],

  extension:
    'The same three step argument supports duties to animals '
    + 'and to future generations, '
    + 'neither of whom can complain for themselves. '
    + 'That is the practical use of a stewardship ethic: '
    + 'it speaks for what cannot speak.',

  figure: {
    alt: 'The stewardship argument drawn as three numbered steps down the '
      + 'left: the earth was given and is not ours by making, what is held '
      + 'in trust must be answered for, and so damaging it wrongs the one '
      + 'who gave it. On the right the same case is stated two ways. In '
      + 'red, galamsey is foolish because the water will run out, which '
      + 'fails wherever somebody gains. In green, galamsey is wrong '
      + 'because the river was never the miner’s to spend.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="26" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">the argument, in three steps</text>'
      + '<circle cx="26" cy="77" r="12"/>'
      + '<text x="26" y="83" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">1</text>'
      + '<rect x="48" y="46" width="292" height="62" rx="6"/>'
      + '<text x="60" y="74" font-size="16" fill="currentColor" stroke="none">the earth was given,</text>'
      + '<text x="60" y="94" font-size="16" fill="currentColor" stroke="none">it is not ours by making</text>'
      + '<line x1="194" y1="108" x2="194" y2="120"/>'
      + '<path d="M 186 118 L 194 132 L 202 118 Z" fill="currentColor" stroke="none"/>'
      + '<circle cx="26" cy="157" r="12"/>'
      + '<text x="26" y="163" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">2</text>'
      + '<rect x="48" y="134" width="292" height="62" rx="6"/>'
      + '<text x="60" y="162" font-size="16" fill="currentColor" stroke="none">what is held in trust</text>'
      + '<text x="60" y="182" font-size="16" fill="currentColor" stroke="none">must be answered for</text>'
      + '<line x1="194" y1="196" x2="194" y2="208"/>'
      + '<path d="M 186 206 L 194 220 L 202 206 Z" fill="currentColor" stroke="none"/>'
      + '<circle cx="26" cy="245" r="12" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="26" y="251" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">3</text>'
      + '<rect x="48" y="222" width="292" height="62" rx="6" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="60" y="250" font-size="16" fill="#0f8a4d" stroke="none">so damaging it wrongs</text>'
      + '<text x="60" y="270" font-size="16" fill="#0f8a4d" stroke="none">the one who gave it</text>'
      + '<text x="492" y="64" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the same case, two claims</text>'
      + '<rect x="360" y="78" width="265" height="84" rx="6" stroke="#c8433a" stroke-width="3"/>'
      + '<text x="492" y="104" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">galamsey is foolish,</text>'
      + '<text x="492" y="124" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">the water will run out</text>'
      + '<text x="492" y="146" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">this fails wherever somebody gains</text>'
      + '<rect x="360" y="184" width="265" height="84" rx="6" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="492" y="210" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">galamsey is wrong,</text>'
      + '<text x="492" y="230" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">the river was never</text>'
      + '<text x="492" y="250" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">the miner’s to spend</text>'
      + '<text x="320" y="330" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">the second claim survives the case where somebody profits,</text>'
      + '<text x="320" y="354" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">and that is what makes it a religious argument</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What each faith teaches about who the earth belongs to',
      columns: ['Faith', 'What it teaches about the earth', 'Its own words'],
      rows: [
        [
          'Christianity',
          'God placed people in the world to tend it, '
            + 'and the earth is the Lord’s',
          'Tending what belongs to God',
        ],
        [
          'Islam',
          'The human being is God’s trustee on earth, waste is forbidden, '
            + 'and the one who plants a tree is rewarded',
          'Trustee, and the reward for planting',
        ],
        [
          'African Traditional Religion',
          'Land, rivers and groves are held in trust from the ancestors '
            + 'and for those not yet born',
          'Sacred groves, and closed days on a river',
        ],
      ],
      note: 'Three different sets of words for one claim: '
        + 'the earth is held, not owned. '
        + 'Name the faith and use its own words when you write.',
    },
  ],

  questions: [
    {
      id: 'stw-1',
      ask: 'In Islam, the human being on earth is described as God’s:',
      kind: 'choice',
      options: ['trustee', 'owner', 'guest'],
      answer: 'trustee',
      teach: 'A trustee holds something for another and must account for '
        + 'it.',
      level: 3,
    },
    {
      id: 'stw-2',
      ask: 'What did a sacred grove protect in practice?',
      kind: 'choice',
      options: [
        'Forest and species nobody was allowed to cut',
        'The village water tank',
        'Farmland from grazing',
      ],
      answer: 'Forest and species nobody was allowed to cut',
      teach: 'Some of the oldest trees in Ghana stand in them.',
      level: 4,
    },
    {
      id: 'stw-3',
      ask: 'Why is a stewardship argument stronger than a practical one '
        + 'against environmental damage?',
      kind: 'choice',
      options: [
        'It still holds when the damage is profitable',
        'It is easier to remember',
        'It is written in law',
      ],
      answer: 'It still holds when the damage is profitable',
      teach: 'A practical argument fails against somebody who gains and '
        + 'leaves.',
      level: 5,
    },
  ],
})

/* ── the nature of God ───────────────────────────────────────────────── */

teach({
  topicId: 'attributes-god',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'All three faiths affirm one supreme God who is the creator, '
      + 'all powerful, all knowing, present everywhere, '
      + 'merciful and just. '
      + 'The names differ and much of the description agrees. '
      + 'Each faith also holds things the others do not.',
    method: [
      'List the attributes each faith affirms, in its own words.',
      'State the agreement plainly.',
      'State the differences without ranking them.',
    ],
  },

  why:
    'A Christian in Kumasi calls God Onyame. '
    + 'A Muslim two streets away calls God Allah. '
    + 'An elder pouring libation calls on Onyankopɔn, and all '
    + 'three are certain they are addressing the one who made the '
    + 'world. '
    + 'Are they speaking about the same God, and how would '
    + 'anybody settle that?',

  idea:
    'All three of the faiths studied in Ghana affirm one supreme God, '
    + 'the creator of everything that exists, '
    + 'more powerful and more knowing than any creature, '
    + 'merciful, and the final judge. '
    + 'That much they share, and it is more than learners expect. '
    + 'What differs is the name used for God, '
    + 'and what each faith holds about God beyond the shared part. '
    + 'Both halves belong in an answer: '
    + 'the agreement is a real finding, '
    + 'and a comparison that hides the differences is not a comparison.',

  mechanism:
    'The honest way to compare teachings about God '
    + 'is to separate what is shared from what is particular, '
    + 'and to do both without deciding between them. '
    + 'The shared part is larger than learners expect. '
    + 'All three say God is one, that God made everything, '
    + 'that God is more powerful and more knowing than any creature, '
    + 'and that God is merciful and will judge. '
    + 'That agreement is a real finding and is worth stating as one. '
    + 'The particular parts are equally real '
    + 'and a comparison that hides them is not a comparison. '
    + 'What each faith holds beyond the shared part '
    + 'is a genuine difference between the faiths, '
    + 'not a misunderstanding to be smoothed over, '
    + 'and an examination answer that reports those accurately '
    + 'is better than one that pretends everybody agrees. '
    + 'There is one more thing worth noticing about attributes. '
    + 'Each one is held because of something it explains, '
    + 'and asking what an attribute explains '
    + 'is the quickest way to see why a faith insists on it. '
    + 'So an attribute is not a compliment. '
    + 'It is a claim, and each claim does work in the faith that holds it.',

  recap:
    'An attribute is something true of a thing by its nature '
    + 'rather than by accident. '
    + 'Call a knife sharp and you have named an attribute, '
    + 'because sharpness is what a knife is for; say it is on the '
    + 'table and you have not. '
    + 'When people speak about God they make statements of the '
    + 'first kind: that God made everything, knows everything and '
    + 'can do anything. '
    + 'Statements like those are called the attributes of God. '
    + 'This lesson sets side by side what each of the three major '
    + 'faiths in Ghana says about them.',

  method: [
    'Name the faith and the name it uses for God.',
    'List the attributes it affirms.',
    'Use that faith’s own terms.',
    'State what all three agree on.',
    'State what each holds that the others do not.',
    'For each attribute, say what it explains.',
    'Describe. Do not decide which is correct.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give three attributes of God that all three faiths affirm.',
      steps: [
        'Look for what appears in all three lists.',
      ],
      answer: 'Creator, all powerful and merciful. '
        + 'All knowing and supreme also appear in all three.',
    },
    {
      level: 4,
      ask: 'What does "omnipresent" mean, and why is it affirmed?',
      steps: [
        'Present everywhere.',
        'Ask what it explains.',
      ],
      answer: 'Present everywhere at once. '
        + 'It is affirmed because God is not limited to one place, '
        + 'so prayer anywhere reaches God.',
    },
    {
      level: 5,
      ask: 'Name one real difference between the faiths on the nature of '
        + 'God, and report it fairly.',
      steps: [
        'Christianity holds the Trinity.',
        'Islam affirms that God has no partner and rejects it.',
        'Report both as each states it, without judging.',
      ],
      answer: 'Christianity teaches one God in three persons, '
        + 'Father, Son and Holy Spirit. '
        + 'Islam affirms that God is one with no partner and no equal, '
        + 'and rejects that teaching. '
        + 'Both are stated here as each faith states it.',
    },
  ],

  traps: [
    {
      mistake: 'Writing only the agreement.',
      why: 'The differences are real. '
        + 'A comparison needs both halves.',
    },
    {
      mistake: 'Deciding which account of God is right.',
      why: 'The question asks what each affirms. '
        + 'Ranking answers nothing that was asked.',
    },
    {
      mistake: 'Saying traditional religion has many gods instead of one.',
      why: 'It affirms one Supreme Being, '
        + 'approached through lesser spirits. '
        + 'State it as its practitioners do.',
    },
    {
      mistake: 'Listing attributes as compliments.',
      why: 'Each one is a claim that explains something. '
        + 'Say what it explains.',
    },
  ],

  tables: [
    {
      caption: 'What each faith affirms about God, '
        + 'and what each one holds that the others do not',
      columns: [
        'Faith',
        'Name used for God',
        'Attributes it affirms',
        'What it holds that the others do not',
      ],
      rows: [
        [
          'Christianity',
          'God',
          'Creator of all things, eternal, all powerful, all knowing, '
            + 'everywhere at once, holy, just, merciful and loving',
          'God known as Father, Son and Holy Spirit: '
            + 'one God in three persons',
        ],
        [
          'Islam',
          'Allah',
          'Creator and sustainer, all powerful, all knowing, '
            + 'most often named the Compassionate and the Merciful',
          'God has no partner and no equal, '
            + 'so one God in three persons is rejected',
        ],
        [
          'African Traditional Religion',
          'Onyame, Mawu, Nyonmo, and other names in other languages',
          'Creator of all things, the final judge, '
            + 'and too great to be approached lightly',
          'The Supreme Being is reached through lesser spirits '
            + 'and the ancestors',
        ],
      ],
      note: 'The third column overlaps almost completely, '
        + 'and the last one does not overlap at all. '
        + 'Give both when a question asks you to compare.',
    },
    {
      caption: 'What each attribute of God is there to explain',
      columns: ['Attribute', 'What holding it explains'],
      rows: [
        ['Creator', 'Why anything exists at all'],
        ['All powerful', 'Why what God promises can be done'],
        ['Just', 'Why wrong matters, and is not simply unfortunate'],
        ['Merciful', 'Why wrong is not the last word about a person'],
      ],
      note: 'An attribute is a claim, not praise, '
        + 'and each claim does work in the faith that holds it.',
    },
  ],

  extension:
    'Every faith also faces the question of why a good and powerful God '
    + 'allows suffering, '
    + 'and each answers it differently. '
    + 'The question is only forced because of the attributes affirmed, '
    + 'which shows how much work an attribute does.',

  questions: [
    {
      id: 'att-1',
      ask: 'What does omnipotent mean?',
      kind: 'choice',
      options: ['All powerful', 'All knowing', 'Everywhere at once'],
      answer: 'All powerful',
      teach: 'All knowing is omniscient and everywhere is omnipresent.',
      level: 3,
    },
    {
      id: 'att-2',
      ask: 'Which is affirmed by all three faiths?',
      kind: 'choice',
      options: [
        'God is the creator of all things',
        'God is three persons',
        'God is reached through ancestors',
      ],
      answer: 'God is the creator of all things',
      teach: 'The other two are particular to one tradition.',
      level: 4,
    },
    {
      id: 'att-3',
      ask: 'How should a comparison question be answered?',
      kind: 'choice',
      options: [
        'State the agreement and the differences, without ranking',
        'State only what they share',
        'Say which faith is correct',
      ],
      answer: 'State the agreement and the differences, without ranking',
      teach: 'Hiding the differences is not a comparison.',
      level: 5,
    },
  ],
})

/* ── rites of passage ────────────────────────────────────────────────── */

teach({
  topicId: 'rites-passage',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A rite of passage marks a person moving from one stage of life to '
      + 'another: '
      + 'naming, puberty, marriage, death. '
      + 'Its purpose is to make the change public, '
      + 'so that the community treats the person differently from that day '
      + 'on.',
    method: [
      'Describe what is done, by whom, and when.',
      'Say what status the person holds afterwards.',
      'Explain the rite by what it announces, not by its objects.',
    ],
  },

  why:
    'A girl in a Krobo town turns sixteen and her family holds '
    + 'dipo for her. '
    + 'It costs money, it takes days, and nothing about her body '
    + 'changes on the day. '
    + 'The same week a boy in Accra turns sixteen and nothing at '
    + 'all is held. '
    + 'Both are adults in the eyes of the law now, so what is the '
    + 'ceremony actually doing?',

  notation:
    'The rites have names and a question will use them. '
    + 'An outdooring, or naming ceremony, '
    + 'marks a baby being brought out and given a name. '
    + 'A puberty rite marks a child becoming an adult. '
    + 'A funeral rite marks a death. '
    + 'The word for what a person is treated as afterwards '
    + 'is their status, '
    + 'so a rite changes a status and not a body. '
    + 'Describing the objects used and stopping there '
    + 'is the commonest way to lose a mark, '
    + 'because the question asks what the rite announces.',

  idea:
    'A rite of passage marks a person moving from one stage of life to '
    + 'another, and it does the marking in public. '
    + 'Four stages are marked in Ghana: '
    + 'birth, reaching adulthood, marriage and death. '
    + 'Every tradition taught here marks all four, '
    + 'in its own form and with its own name for the rite. '
    + 'The forms differ a great deal. '
    + 'What the rites are for does not differ at all.',

  mechanism:
    'A rite of passage looks like a ceremony with objects and dances, '
    + 'and it is doing a job that nothing else can do. '
    + 'A change in a person’s status is not a private fact. '
    + 'It only works if everybody else knows about it and acts on it. '
    + 'A girl who has privately decided she is an adult '
    + 'is still treated as a child by the whole village, '
    + 'so nothing has changed. '
    + 'The rite is how the change becomes public and binding. '
    + 'After it, the community owes her different treatment, '
    + 'and she owes them different behaviour, '
    + 'and both sides know it on the same day. '
    + 'That is why these events are public, witnessed, and often '
    + 'expensive: '
    + 'the cost and the audience are what make the announcement '
    + 'impossible to ignore. '
    + 'Each rite also does three things at once, '
    + 'which is a useful way to describe one in an answer. '
    + 'It separates the person from the old stage, '
    + 'often by seclusion or by a change of dress. '
    + 'It instructs them in what the new stage requires. '
    + 'And it presents them to the community in the new status. '
    + 'Naming, puberty, marriage and funeral rites all have those three '
    + 'parts, '
    + 'and so do baptism and confirmation, '
    + 'which is why the comparison between traditional and religious rites '
    + 'is worth making rather than just noting.',

  recap:
    'Culture is the whole way of life a group of people share. '
    + 'It is the language they speak, the food they cook, how '
    + 'they greet, what they wear to a funeral and what they hold '
    + 'to be right. '
    + 'Nobody is born with any of it. '
    + 'A child picks it up by being in the family and the '
    + 'community, watching what is done and being corrected when '
    + 'it is done wrong. '
    + 'So culture is handed on person to person, year after year, '
    + 'and most of that handing on happens quietly. '
    + 'This lesson is about the moments when it is done openly, '
    + 'in front of everybody.',

  method: [
    'Name the rite and the stage it marks.',
    'Say who performs it and when.',
    'Describe what is done, in the tradition’s own terms.',
    'Identify the three parts: separation, instruction, presentation.',
    'State the status the person holds afterwards.',
    'Say what the community now owes them and they owe it.',
    'Compare with the equivalent Christian or Islamic rite if asked.',
    'Describe each tradition fairly.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What does a naming ceremony do?',
      steps: [
        'A name is given publicly.',
      ],
      answer: 'It gives the child a name '
        + 'and brings them publicly into the family and community.',
    },
    {
      level: 4,
      ask: 'Name the three parts of a puberty rite.',
      steps: [
        'The person is taken out of the old stage.',
        'They are taught what the new one requires.',
        'They are shown to the community in the new status.',
      ],
      answer: 'Separation, often by seclusion; '
        + 'instruction in what womanhood requires; '
        + 'and public presentation.',
    },
    {
      level: 5,
      ask: 'Why must a rite of passage be public?',
      steps: [
        'A status is how other people treat you.',
        'A private change does not alter their treatment.',
        'So the community has to know and accept it on the same day.',
      ],
      answer: 'Because a status exists in how other people treat you. '
        + 'A change nobody witnessed changes nothing, '
        + 'so the rite makes it public and binding for both sides at once.',
    },
  ],

  traps: [
    {
      mistake: 'Describing a rite as a list of items used.',
      why: 'The marks are for what it does and what it announces.',
    },
    {
      mistake: 'Saying rites of passage belong only to traditional '
        + 'religion.',
      why: 'Baptism, confirmation, nikah and janazah are rites of passage '
        + 'too.',
    },
    {
      mistake: 'Treating a rite as entertainment.',
      why: 'It changes a person’s standing, '
        + 'and what the community owes them changes with it.',
    },
    {
      mistake: 'Confusing the stage with the rite.',
      why: 'Puberty is a stage of life. '
        + 'A puberty rite is the ceremony that marks it.',
    },
  ],

  figure: {
    alt: 'A rite of passage drawn as a line from left to right. It starts '
      + 'at a box reading the old status, passes through three numbered '
      + 'stages, separation from the old stage, instruction in what the '
      + 'new stage requires, and presentation to the community, and ends '
      + 'at a green box reading the new status. Below the line a row of '
      + 'small figures stands for the community watching, with a note '
      + 'that the watching is what makes the change binding.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="26" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">what every rite of passage does</text>'
      + '<rect x="10" y="96" width="96" height="70" rx="6"/>'
      + '<text x="58" y="124" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">the old</text>'
      + '<text x="58" y="144" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">status</text>'
      + '<line x1="106" y1="131" x2="128" y2="131"/>'
      + '<path d="M 126 123 L 142 131 L 126 139 Z" fill="currentColor" stroke="none"/>'
      + '<rect x="144" y="96" width="120" height="70" rx="6"/>'
      + '<circle cx="204" cy="78" r="12"/>'
      + '<text x="204" y="84" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">1</text>'
      + '<text x="204" y="124" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">separation</text>'
      + '<text x="204" y="144" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">seclusion, new dress</text>'
      + '<line x1="264" y1="131" x2="282" y2="131"/>'
      + '<path d="M 280 123 L 296 131 L 280 139 Z" fill="currentColor" stroke="none"/>'
      + '<rect x="298" y="96" width="120" height="70" rx="6"/>'
      + '<circle cx="358" cy="78" r="12"/>'
      + '<text x="358" y="84" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">2</text>'
      + '<text x="358" y="124" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">instruction</text>'
      + '<text x="358" y="144" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">what is now required</text>'
      + '<line x1="418" y1="131" x2="436" y2="131"/>'
      + '<path d="M 434 123 L 450 131 L 434 139 Z" fill="currentColor" stroke="none"/>'
      + '<rect x="452" y="96" width="120" height="70" rx="6" stroke="#0f8a4d" stroke-width="3"/>'
      + '<circle cx="512" cy="78" r="12" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="512" y="84" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">3</text>'
      + '<text x="512" y="118" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">presentation</text>'
      + '<text x="512" y="138" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">shown in the new</text>'
      + '<text x="512" y="156" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">status</text>'
      + '<line x1="572" y1="131" x2="588" y2="131" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 586 123 L 602 131 L 586 139 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="616" y="124" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">the</text>'
      + '<text x="616" y="142" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">new</text>'
      + '<text x="616" y="160" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">status</text>'
      + '<circle cx="176" cy="254" r="11"/><line x1="176" y1="265" x2="176" y2="300"/>'
      + '<circle cx="248" cy="254" r="11"/><line x1="248" y1="265" x2="248" y2="300"/>'
      + '<circle cx="320" cy="254" r="11"/><line x1="320" y1="265" x2="320" y2="300"/>'
      + '<circle cx="392" cy="254" r="11"/><line x1="392" y1="265" x2="392" y2="300"/>'
      + '<circle cx="464" cy="254" r="11"/><line x1="464" y1="265" x2="464" y2="300"/>'
      + '<line x1="320" y1="230" x2="320" y2="200"/>'
      + '<path d="M 312 202 L 320 188 L 328 202 Z" fill="currentColor" stroke="none"/>'
      + '<text x="320" y="334" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">and the whole community watches</text>'
      + '<text x="320" y="368" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">which is what makes the change binding on both sides</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The four rites of passage, '
        + 'and what each one leaves the person as',
      columns: [
        'The rite',
        'When it happens',
        'What is done',
        'What the person is afterwards',
      ],
      rows: [
        [
          'Naming',
          'In the first days or weeks of life',
          'The name is given publicly, by an elder or at a religious '
            + 'ceremony',
          'A member of the family and the community, by name',
        ],
        [
          'Puberty rites, such as the Krobo dipo and the Akan bragoro',
          'At a girl reaching womanhood',
          'Instruction, a time apart, and a public presentation',
          'An adult woman, treated as one from that day',
        ],
        [
          'Marriage',
          'When two people, and two families, have agreed',
          'Customary rites, often with a religious ceremony and a legal '
            + 'registration as well',
          'Married, with duties to a husband or wife and to two families',
        ],
        [
          'Funeral rites',
          'At death',
          'Public mourning and burial, in the tradition’s own form',
          'Placed among the ancestors, with duties owed by those left '
            + 'behind',
        ],
      ],
      note: 'Christianity and Islam mark the same four stages in their own '
        + 'forms: baptism or christening and later confirmation; '
        + 'and the aqiqah with naming on the seventh day, the nikah, '
        + 'and the janazah prayer.',
    },
  ],

  extension:
    'Some rites have changed or faded, '
    + 'and schooling is part of the reason: '
    + 'a girl in school cannot be secluded for weeks. '
    + 'Several communities have shortened the rite rather than lose it, '
    + 'which is cultural change happening in the open.',

  questions: [
    {
      id: 'rit-1',
      ask: 'Which stage does a funeral rite mark?',
      kind: 'choice',
      options: ['Death', 'Marriage', 'Puberty'],
      answer: 'Death',
      teach: 'In much of Ghana it also settles standing among the '
        + 'ancestors.',
      level: 3,
    },
    {
      id: 'rit-2',
      ask: 'What are the three parts of a rite of passage?',
      kind: 'choice',
      options: [
        'Separation, instruction, presentation',
        'Prayer, feasting, dancing',
        'Gifts, speeches, photographs',
      ],
      answer: 'Separation, instruction, presentation',
      teach: 'The same three appear in baptism and confirmation.',
      level: 4,
    },
    {
      id: 'rit-3',
      ask: 'Why does a rite of passage need witnesses?',
      kind: 'choice',
      options: [
        'A status is how others treat you, so they must know',
        'To share the cost',
        'To record the date',
      ],
      answer: 'A status is how others treat you, so they must know',
      teach: 'A private change of status changes nothing.',
      level: 5,
    },
  ],
})

/* ── religious leaders and their teachings ──────────────────────────── */

teach({
  topicId: 'founders-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Describe a leader’s life in order: '
      + 'birth and background, call, main teaching, opposition faced, '
      + 'and what followers still do because of it. '
      + 'The last part is the one that carries marks, '
      + 'because a teaching nobody acts on is only history.',
    method: [
      'Give the life in order, with dates or periods where known.',
      'State one teaching in the leader’s own terms.',
      'Name something believers do today because of it.',
    ],
  },

  why:
    'Two pupils answer a question '
    + 'about the founder of a religion. '
    + 'The first gives the year he was born, '
    + 'the year he died, and the town he came from. '
    + 'The second gives one thing he taught, '
    + 'and then names something '
    + 'believers in Ghana still do every year because of it. '
    + 'The second answer scores higher, '
    + 'on a question that asked about a life. '
    + 'Dates are facts about a man who is dead. '
    + 'So what is the question looking for '
    + 'that a date cannot give it?',

  notation:
    'Names and titles are used in a set way here, '
    + 'and a question expects it. '
    + 'In Islam he is called the Prophet Muhammad, '
    + 'and many Muslims add "peace be upon him" after the name. '
    + 'In Christianity, Christ is a title and not a surname. '
    + 'It means the anointed one, '
    + 'so Jesus Christ is a name and a title together. '
    + 'African Traditional Religion is written out in full '
    + 'the first time, and shortened to ATR after that. '
    + 'Giving African Traditional Religion a founder '
    + 'is the commonest way to lose a mark, '
    + 'because no one person started it.',

  idea:
    'A religious leader is answered as a life, and in order: '
    + 'where they came from, how the mission began, what they taught, '
    + 'who opposed it, '
    + 'and what followers still do because of it. '
    + 'Five parts, and the same five fit any leader in any tradition. '
    + 'The two founders the syllabus names are Jesus Christ and the '
    + 'Prophet Muhammad. '
    + 'Ghana has also had its own leaders and reformers '
    + 'in each of these traditions, '
    + 'and their lives answer to the same five parts.',

  mechanism:
    'A question about a founder is almost never answered by the dates. '
    + 'It asks for a teaching and what is done about it, '
    + 'and the second half is where learners stop too early. '
    + 'So the structure to write is five parts: '
    + 'background, call, teaching, opposition, and consequence today. '
    + 'The opposition part is worth including even when not asked, '
    + 'because it tells you what the teaching actually challenged. '
    + 'A teaching nobody objected to was not demanding anything. '
    + 'Jesus was opposed partly because he kept company with people the '
    + 'respectable avoided, '
    + 'which tells you his teaching about neighbours was not a sentiment. '
    + 'Muhammad faced persecution in Makkah '
    + 'partly because the oneness of God threatened an economy built '
    + 'around many shrines, '
    + 'which tells you the teaching had a cost attached from the start. '
    + 'In both cases the opposition explains the teaching. '
    + 'The consequence today is the part that makes the answer live. '
    + 'Charity is not an idea in Islam '
    + 'and forgiveness is not an idea in Christianity. '
    + 'In both, the teaching has a named practice attached to it, '
    + 'done on a schedule, by people who can be counted. '
    + 'Naming that practice is what shows you understood the teaching '
    + 'rather than memorised a biography.',

  recap:
    'A teaching and a teacher are two different things. '
    + 'A teaching is what is held to be true: '
    + 'that there is one God, that the poor must be fed. '
    + 'A teacher is the person it came through, '
    + 'who lived in a place, at a time, '
    + 'and was argued with while he lived. '
    + 'Christianity came through Jesus, '
    + 'Islam through Muhammad, '
    + 'and African Traditional Religion '
    + 'came through no single person at all, '
    + 'which is itself worth knowing. '
    + 'This lesson is about the people, '
    + 'and about what their lives left behind them.',

  method: [
    'Name the leader and the faith.',
    'Give the background: place, time, family, work.',
    'Describe the call or beginning of the mission.',
    'State one or two central teachings.',
    'Say who opposed it and why.',
    'Say what believers do today because of that teaching.',
    'Use the tradition’s own terms.',
    'Report fairly, whichever faith you belong to.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Where was the Prophet Muhammad born, and where did he '
        + 'migrate to?',
      steps: [
        'Give both places.',
      ],
      answer: 'He was born in Makkah and migrated to Madinah.',
    },
    {
      level: 4,
      ask: 'Give one teaching of Jesus and one thing Christians do because '
        + 'of it.',
      steps: [
        'State the teaching.',
        'Name an action, not an attitude.',
      ],
      answer: 'He taught love of neighbour, including of enemies, '
        + 'and forgiveness. '
        + 'Christians say the prayer asking forgiveness as they forgive '
        + 'others, '
        + 'and work at reconciliation between families and neighbours.',
    },
    {
      level: 5,
      ask: 'Why is it worth knowing who opposed a founder?',
      steps: [
        'Opposition shows what the teaching threatened.',
        'A teaching nobody objected to demanded nothing.',
        'So the opposition explains the teaching’s content.',
      ],
      answer: 'Because the opposition shows what the teaching actually '
        + 'demanded. '
        + 'A message nobody resisted was not asking for any change.',
    },
  ],

  traps: [
    {
      mistake: 'Writing a biography and no teaching.',
      why: 'The question asks for a teaching still acted on. '
        + 'Dates alone earn little.',
    },
    {
      mistake: 'Naming an attitude instead of an action.',
      why: '"Be charitable" is an attitude. '
        + 'Zakat and Ramadan are actions.',
    },
    {
      mistake: 'Saying African Traditional Religion has a founder.',
      why: 'It has no single founder. '
        + 'Its teaching is carried by priests, elders and custom.',
    },
    {
      mistake: 'Describing another faith in your own faith’s terms.',
      why: 'Each has its own vocabulary, '
        + 'and using the wrong one misreports it.',
    },
  ],

  figure: {
    alt: 'Five numbered stations on a line running left to right, giving '
      + 'the order of an answer about a religious leader: background, '
      + 'call, teaching, opposition, and what followers do today. The last '
      + 'two stations are drawn in green under a bracket labelled as the '
      + 'part that carries the marks, with a note that a teaching nobody '
      + 'objected to was demanding nothing and a teaching nobody acts on '
      + 'is only history.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="28" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">one life, in five parts, in this order</text>'
      + '<line x1="40" y1="150" x2="600" y2="150"/>'
      + '<path d="M 598 142 L 614 150 L 598 158 Z" fill="currentColor" stroke="none"/>'
      + '<circle cx="66" cy="150" r="16"/>'
      + '<text x="66" y="156" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">1</text>'
      + '<text x="66" y="112" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">background</text>'
      + '<text x="66" y="192" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">place, time,</text>'
      + '<text x="66" y="208" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">family, work</text>'
      + '<circle cx="186" cy="150" r="16"/>'
      + '<text x="186" y="156" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">2</text>'
      + '<text x="186" y="112" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">call</text>'
      + '<text x="186" y="192" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">how the mission</text>'
      + '<text x="186" y="208" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">began</text>'
      + '<circle cx="306" cy="150" r="16"/>'
      + '<text x="306" y="156" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">3</text>'
      + '<text x="306" y="112" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">teaching</text>'
      + '<text x="306" y="192" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">in the leader’s</text>'
      + '<text x="306" y="208" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">own terms</text>'
      + '<circle cx="426" cy="150" r="16" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="426" y="156" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">4</text>'
      + '<text x="426" y="112" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">opposition</text>'
      + '<text x="426" y="192" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">who objected,</text>'
      + '<text x="426" y="208" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">and why</text>'
      + '<circle cx="546" cy="150" r="16" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="546" y="156" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">5</text>'
      + '<text x="546" y="112" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">today</text>'
      + '<text x="546" y="192" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">what followers</text>'
      + '<text x="546" y="208" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">still do</text>'
      + '<path d="M 400 236 V 248 H 572 V 236" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="486" y="276" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">the part that carries the marks</text>'
      + '<text x="320" y="330" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">a teaching nobody objected to was demanding nothing,</text>'
      + '<text x="320" y="356" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">and a teaching nobody acts on is only history</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The two founders the syllabus names, '
        + 'each life set out in the five parts an answer needs',
      columns: [
        'The part of the answer',
        'Jesus Christ',
        'The Prophet Muhammad',
      ],
      rows: [
        [
          'Background',
          'Born in Bethlehem, grew up in Nazareth',
          'Born in Makkah about the year 570, and worked as a trader',
        ],
        [
          'Call',
          'Baptised by John, then taught for about three years in Galilee '
            + 'and Judea, and chose twelve disciples',
          'Received the first revelation at about the age of forty',
        ],
        [
          'Main teaching',
          'Love of God, and of neighbour, even of enemies',
          'That God is one, and prayer, charity and justice',
        ],
        [
          'Opposition faced',
          'Religious and political leaders opposed him and he was '
            + 'crucified; Christians hold that he rose again',
          'Persecution in Makkah, which led to the move to Madinah, '
            + 'and a later return to Makkah',
        ],
        [
          'What followers still do',
          'Forgiveness is asked in the prayer repeated daily, '
            + 'and acted on in reconciliation between families',
          'Zakat, a fixed share given each year, '
            + 'and fasting through the month of Ramadan',
        ],
      ],
      note: 'African Traditional Religion is not in this table because it '
        + 'has no single founder. For it the question becomes who carries '
        + 'the teaching: priests, elders and chiefs, '
        + 'through proverbs, taboos and custom.',
    },
  ],

  extension:
    'Every tradition also has later figures '
    + 'who applied a teaching to their own time, '
    + 'and in Ghana there are reformers, '
    + 'teachers and chiefs within each faith worth knowing by name. '
    + 'The pattern of their lives is usually the same five parts.',

  questions: [
    {
      id: 'fnd-1',
      ask: 'At about what age did Muhammad receive the first revelation?',
      kind: 'choice',
      options: ['Forty', 'Twenty', 'Sixty'],
      answer: 'Forty',
      teach: 'He had worked as a trader in Makkah before that.',
      level: 3,
    },
    {
      id: 'fnd-2',
      ask: 'Which is an action rather than an attitude?',
      kind: 'choice',
      options: [
        'Giving zakat annually',
        'Being generous',
        'Caring about the poor',
      ],
      answer: 'Giving zakat annually',
      teach: 'An action is what a question about teachings still acted on '
        + 'wants.',
      level: 4,
    },
    {
      id: 'fnd-3',
      ask: 'African Traditional Religion is carried by:',
      kind: 'choice',
      options: [
        'priests, elders and custom, with no single founder',
        'one founder and twelve disciples',
        'a single written scripture',
      ],
      answer: 'priests, elders and custom, with no single founder',
      teach: 'Its teaching passes through proverbs, taboos and practice.',
      level: 5,
    },
  ],
})

/* ── making a moral decision ───────────────────────────────────────── */

teach({
  topicId: 'moral-choice',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A dilemma is a case where two things you believe point opposite '
      + 'ways, '
      + 'so there is no option with no cost. '
      + 'Work it through: the facts, who is affected, '
      + 'what each choice costs, what your teaching requires, '
      + 'then decide and own the cost.',
    method: [
      'Separate the facts from what you are assuming.',
      'List who is affected and how.',
      'Name the cost of each option, including the one you choose.',
    ],
  },

  why:
    'During an end of term test your closest friend copies from the boy '
    + 'beside her. '
    + 'Afterwards the teacher asks the class, by name, '
    + 'whether anybody saw anything. '
    + 'You hold that you must not lie. '
    + 'You also hold that you must not betray a friend. '
    + 'Here, keeping one of those breaks the other, '
    + 'and there is no third answer that keeps both. '
    + 'So which one do you keep, and how would you decide it?',

  idea:
    'A moral decision is a choice about what is right to do. '
    + 'It becomes a dilemma when two duties conflict, '
    + 'so that keeping one means breaking the other. '
    + 'A method helps. '
    + 'Establish the facts, and separate them from what you are assuming. '
    + 'Name everybody affected and how. '
    + 'Set out the options, with the cost of each. '
    + 'Ask what your faith or your community’s teaching requires. '
    + 'Ask what you would say if the person harmed were you. '
    + 'Ask whether you could say publicly what you are about to do. '
    + 'Then decide, '
    + 'and accept the cost of the option you chose, '
    + 'because there was no option without one.',

  mechanism:
    'A lesson cannot give you the answers to dilemmas, '
    + 'and it should say so. '
    + 'If a case had an obvious answer it would not be a dilemma, '
    + 'it would be a temptation, '
    + 'and those are a different problem: '
    + 'with a temptation the right thing is clear '
    + 'and you simply do not want to do it. '
    + 'A real dilemma is where two things you genuinely believe collide. '
    + 'You believe you should be loyal to a friend '
    + 'and you believe you should not let somebody be hurt, '
    + 'and your friend is about to hurt somebody. '
    + 'No amount of thinking makes both available. '
    + 'What a method can do is stop the three ways people avoid deciding, '
    + 'none of which feels like avoidance from the inside. '
    + 'That is the reason it is written down rather than remembered: '
    + 'a bias you cannot feel is one you have to check for on purpose. '
    + 'And there is one test that catches most self deception: '
    + 'could you say out loud, to everybody affected, what you are doing '
    + 'and why? '
    + 'An answer that only works while somebody does not know '
    + 'is usually the wrong one.',

  recap:
    'Every faith studied in Ghana sets out rules for how to treat people. '
    + 'Christianity says do to others what you would want done to you. '
    + 'Islam makes honesty in trade and care for the poor into duties. '
    + 'Traditional Akan teaching holds that a person is a person through '
    + 'other people, so harming a neighbour damages you as well. '
    + 'Each of those is a rule about right conduct, '
    + 'and most of the time only one of them is in play at once. '
    + 'This lesson is about the cases where two are in play '
    + 'and they point different ways.',

  method: [
    'State the problem in one sentence.',
    'List what you actually know.',
    'List separately what you are assuming.',
    'Name everybody affected and how.',
    'Set out the options.',
    'For each, name the cost, to you and to others.',
    'Ask what your teaching requires.',
    'Ask whether you could say publicly what you plan to do.',
    'Decide, and state the cost you are accepting.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is the difference between a temptation and a dilemma?',
      steps: [
        'In one the right thing is clear.',
        'In the other two rights conflict.',
      ],
      answer: 'With a temptation the right thing is clear and you do not '
        + 'want to do it. '
        + 'In a dilemma two things you believe point opposite ways.',
    },
    {
      level: 4,
      ask: 'You find money in the school yard. '
        + 'Work through the decision.',
      steps: [
        'Facts: the money is not yours, and somebody has lost it.',
        'Assumption: that nobody will claim it. That is not a fact.',
        'Affected: the owner, who may have needed it, and you.',
        'Options: keep it, or hand it in.',
        'Public test: could you say out loud that you kept it?',
      ],
      answer: 'Hand it in. '
        + 'Keeping it depends on the owner not knowing, '
        + 'which is exactly the sign of the wrong choice.',
    },
    {
      level: 5,
      ask: 'Your closest friend is copying in an examination '
        + 'and asks you to say nothing. Work it through.',
      steps: [
        'Facts: he is copying. Assumption: that nobody else is harmed.',
        'Affected: every pupil marked against him, '
          + 'the school, him, and you.',
        'Option one: say nothing. Cost: others lose places he did not '
          + 'earn, and he learns it works.',
        'Option two: tell. Cost: your friendship, probably.',
        'Public test: could you tell the whole class you helped hide it?',
      ],
      answer: 'There is no free option. '
        + 'Saying nothing costs the other candidates '
        + 'and teaches your friend that it works. '
        + 'Telling costs the friendship. '
        + 'The public test points one way, '
        + 'and whichever you choose you should name what it cost.',
    },
  ],

  traps: [
    {
      mistake: 'Treating an assumption as a fact.',
      why: '"Nobody will miss it" is an assumption. '
        + 'Separating the two sometimes ends the dilemma.',
    },
    {
      mistake: 'Counting only the people in front of you.',
      why: 'The person who would be harmed is often absent, '
        + 'which is a bias you cannot feel. List everybody.',
    },
    {
      mistake: 'Pretending the right choice is free.',
      why: 'It usually costs something. '
        + 'Naming the cost is part of deciding.',
    },
    {
      mistake: 'Choosing what only works while somebody does not know.',
      why: 'That is the clearest sign of the wrong answer.',
    },
  ],

  figure: {
    alt: 'A dilemma drawn as a fork. At the top, a box reading your friend '
      + 'is about to hurt somebody. Two arrows lead down from it to two '
      + 'options: stay loyal and say nothing, and tell a teacher. Under '
      + 'each option is a red box giving its cost: somebody is hurt, and '
      + 'you lose the friendship. A note at the bottom says there is no '
      + 'third branch with nothing under it.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="26" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">a dilemma has no free branch</text>'
      + '<rect x="170" y="48" width="300" height="52" rx="6"/>'
      + '<text x="320" y="80" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">your friend is about to hurt somebody</text>'
      + '<path d="M 260 100 L 172 141"/>'
      + '<path d="M 166 145 L 178 132 L 184 145 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 380 100 L 468 141"/>'
      + '<path d="M 474 145 L 462 132 L 456 145 Z" fill="currentColor" stroke="none"/>'
      + '<rect x="24" y="152" width="256" height="66" rx="6"/>'
      + '<text x="152" y="180" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">stay loyal,</text>'
      + '<text x="152" y="202" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">say nothing</text>'
      + '<rect x="360" y="152" width="256" height="66" rx="6"/>'
      + '<text x="488" y="180" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">tell a teacher</text>'
      + '<line x1="152" y1="218" x2="152" y2="238"/>'
      + '<path d="M 144 236 L 152 250 L 160 236 Z" fill="#c8433a" stroke="none"/>'
      + '<line x1="488" y1="218" x2="488" y2="238"/>'
      + '<path d="M 480 236 L 488 250 L 496 236 Z" fill="#c8433a" stroke="none"/>'
      + '<rect x="24" y="252" width="256" height="66" rx="6" stroke="#c8433a" stroke-width="3"/>'
      + '<text x="152" y="280" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">the cost: somebody</text>'
      + '<text x="152" y="302" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">is hurt</text>'
      + '<rect x="360" y="252" width="256" height="66" rx="6" stroke="#c8433a" stroke-width="3"/>'
      + '<text x="488" y="280" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">the cost: you lose</text>'
      + '<text x="488" y="302" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">the friendship</text>'
      + '<text x="320" y="354" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">there is no third branch with nothing under it,</text>'
      + '<text x="320" y="378" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so choose, and say which cost you are taking</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The three ways people avoid deciding, '
        + 'and what stops each one',
      columns: [
        'The way out people take',
        'What it looks like',
        'What stops it',
      ],
      rows: [
        [
          'Letting an assumption do a fact’s work',
          'Saying he probably did not mean it, '
            + 'and then treating that as known',
          'Write what you know and what you are assuming '
            + 'in two separate lists',
        ],
        [
          'Counting only the people in front of you',
          'The friend is standing there; '
            + 'the person who would be hurt is not',
          'List everybody affected, present or not',
        ],
        [
          'Pretending the option you chose is free',
          'Telling a teacher, and not admitting that it costs the '
            + 'friendship',
          'Name the cost of the option you chose, out loud',
        ],
      ],
      note: 'Separating a fact from an assumption sometimes dissolves the '
        + 'dilemma altogether, which is why it is the first row and not '
        + 'the last.',
    },
  ],

  extension:
    'Adults face the same structure with more at stake: '
    + 'a nurse asked to falsify a record, '
    + 'an engineer told to pass work that is not safe. '
    + 'The method does not change, '
    + 'and the people who manage it are the ones who decided '
    + 'what they would and would not do before they were asked.',

  questions: [
    {
      id: 'mor-1',
      ask: 'What makes a situation a dilemma?',
      kind: 'choice',
      options: [
        'Two things you believe point opposite ways',
        'You do not want to do the right thing',
        'Nobody is watching',
      ],
      answer: 'Two things you believe point opposite ways',
      teach: 'If the answer were obvious it would be a temptation instead.',
      level: 3,
    },
    {
      id: 'mor-2',
      ask: 'Why list everybody affected?',
      kind: 'choice',
      options: [
        'The person who would be harmed is often not present',
        'To make the answer longer',
        'To find somebody to blame',
      ],
      answer: 'The person who would be harmed is often not present',
      teach: 'Being absent makes them easy to leave out of the arithmetic.',
      level: 4,
    },
    {
      id: 'mor-3',
      ask: 'Which test catches most self deception?',
      kind: 'choice',
      options: [
        'Could you say publicly what you are doing and why',
        'Would it be easier',
        'Would your friend agree',
      ],
      answer: 'Could you say publicly what you are doing and why',
      teach: 'A choice that only works while somebody does not know '
        + 'is usually the wrong one.',
      level: 5,
    },
  ],
})

/* ── appellations and oral poetry ────────────────────────────────────── */

teach({
  topicId: 'appellations',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An appellation is a praise name, '
      + 'built from images that make a claim about the one named: '
      + 'an animal, a tree, a weapon, an ancestor. '
      + 'A dirge is sung at a funeral and does the opposite work, '
      + 'naming loss. '
      + 'In both, the image is the argument.',
    method: [
      'Recite it as it is spoken, with its rhythm.',
      'Take each image and say what quality it claims.',
      'Say who it is addressed to and on what occasion.',
    ],
  },

  why:
    'The Asantehene is announced at a durbar, and the linguist '
    + 'does not give his name and title. '
    + 'He calls out instead that this is the one whose coming '
    + 'makes the ground tremble, and the crowd answers. '
    + 'Everybody standing there already knows exactly who the man '
    + 'is. '
    + 'So what is the linguist adding by calling him something '
    + 'that is not his name?',

  notation:
    'Three kinds of saying come up here '
    + 'and they are not the same. '
    + 'An appellation is a praise name, '
    + 'said to somebody who is present. '
    + 'A dirge is sung at a funeral, '
    + 'about somebody who is not. '
    + 'A libation is a prayer said while a drink is poured. '
    + 'Inside an appellation, '
    + 'each separate picture is called an image, '
    + 'and what the image says about the person is its claim. '
    + 'Write the line first, '
    + 'then what it pictures, '
    + 'then what it claims. '
    + 'Giving the picture and stopping there '
    + 'is the commonest way to lose a mark.',

  idea:
    'An appellation is a praise name or string of praise names, '
    + 'used for a chief, an ancestor, a family or a person. '
    + 'It is built out of images, '
    + 'and every image in it is making a claim about the one named. '
    + 'It is recited at durbars, festivals and formal gatherings, '
    + 'often by a linguist or a drummer, '
    + 'and the talking drums can sound it without words. '
    + 'A dirge is a funeral song, '
    + 'and it uses the same images to say the opposite. '
    + 'Both are oral poetry: '
    + 'learned by ear, performed, '
    + 'and varying slightly with the reciter and the occasion.',

  mechanism:
    'An appellation is usually treated as decoration before a speech, '
    + 'and it is doing something specific: it is an argument in images. '
    + 'When a chief is called the one whose roots hold the hill, '
    + 'the image is not a compliment about trees. '
    + 'It claims that the stool he occupies holds the land together, '
    + 'and that removing him would move the soil. '
    + 'So the way to answer a question about an appellation '
    + 'is to take each image and name the claim inside it. '
    + 'Explain the images and you have explained the poem. '
    + 'A dirge works by the same method with the images reversed, '
    + 'and that is why they are worth teaching together. '
    + 'The same image system is being used to say the opposite thing, '
    + 'which tells you the images are a shared language '
    + 'rather than one poet’s invention. '
    + 'The last thing to understand is that these are oral forms, '
    + 'so there is no single correct text. '
    + 'A reciter adds, shortens and adjusts for the occasion, '
    + 'and that is not corruption of the poem. '
    + 'It is how the form works, '
    + 'and it is why two elders can recite the same appellation '
    + 'differently and both be right.',

  recap:
    'Addressing a gathering formally means using set words in a '
    + 'set order, not everyday speech. '
    + 'You greet the chief first, then the elders, then the '
    + 'gathering, and only after that say why you stood up. '
    + 'A proverb carries weight in such a setting for a '
    + 'particular reason: it is old, so you did not invent it to '
    + 'win this argument, and the people hearing it already agree '
    + 'with it. '
    + 'Both of those work by reaching for words that are not your '
    + 'own. '
    + 'An appellation is that same principle packed into a name, '
    + 'and this lesson is about how one is built.',

  method: [
    'Learn it by ear, with its rhythm, not from the page alone.',
    'Say who it praises or mourns.',
    'Say on what occasion it is performed, and by whom.',
    'Take each image in turn.',
    'Name the quality or claim that image carries.',
    'Note any ancestor named and what the naming claims.',
    'For a dirge, show how the images state loss.',
    'Explain in the language, and in English if asked.',
    'Expect variation between reciters, and say so.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is an appellation?',
      steps: [
        'It is a name, not a sentence.',
      ],
      answer: 'A praise name, or string of praise names, '
        + 'used for a chief, an ancestor, a family or a person.',
    },
    {
      level: 4,
      ask: 'An appellation calls a chief "the great tree". '
        + 'What is being claimed?',
      steps: [
        'Ask what the image is known for.',
        'A great tree is old, stands through storms, and shelters.',
      ],
      answer: 'That he is enduring, '
        + 'that he has stood through difficulties, '
        + 'and that others shelter under him.',
    },
    {
      level: 5,
      ask: 'Two elders recite the same appellation differently. '
        + 'Is one of them wrong?',
      steps: [
        'These are oral forms, learned by ear.',
        'A reciter adjusts for the occasion and the audience.',
        'There is no single fixed written text to measure against.',
      ],
      answer: 'Not necessarily. '
        + 'Oral poetry varies with the reciter and the occasion, '
        + 'and both can be correct, '
        + 'because there is no single fixed text.',
    },
  ],

  traps: [
    {
      mistake: 'Translating an image literally and stopping.',
      why: '"He is a lion" is not the answer. '
        + 'Say what the image claims.',
    },
    {
      mistake: 'Treating an appellation as flattery.',
      why: 'It makes claims about descent, right and duty, '
        + 'and claims can be disputed.',
    },
    {
      mistake: 'Expecting one fixed correct version.',
      why: 'It is oral. Variation is part of the form.',
    },
    {
      mistake: 'Reciting it without its rhythm.',
      why: 'The rhythm is part of the poem, '
        + 'and the drums can sound it without any words at all.',
    },
  ],

  tables: [
    {
      caption: 'The images an appellation is built from, '
        + 'the claim in each one, and what a dirge does with it',
      columns: [
        'Image',
        'The claim it makes in praise',
        'What a dirge does with the same image',
      ],
      rows: [
        [
          'A great tree',
          'Endurance, and roots that hold the land together',
          'The tree has fallen',
        ],
        [
          'A river',
          'Depth, and water that does not run out',
          'The river has dried',
        ],
        [
          'The house',
          'A household standing, with people in it',
          'The house is empty',
        ],
        [
          'An animal',
          'The quality that animal is known for, '
            + 'such as strength or cunning',
          'The animal is not heard any more',
        ],
        [
          'A weapon',
          'Readiness, and sometimes a warning',
          'The weapon has been set down',
        ],
        [
          'The name of an ancestor',
          'The right to the position, held by descent',
          'The name is called and nobody answers',
        ],
      ],
      note: 'The last column shows the method and not a fixed text. '
        + 'A dirge turns round whatever image praise used, '
        + 'and a reciter chooses the images for the occasion.',
    },
  ],

  extension:
    'Drum poetry carries appellations in rhythm alone, '
    + 'and people who know the tradition can hear which chief is being '
    + 'announced. '
    + 'It is the clearest proof that the images form a shared language '
    + 'rather than individual decoration.',

  questions: [
    {
      id: 'app-1',
      ask: 'Where is an appellation usually performed?',
      kind: 'choice',
      options: [
        'At a durbar or formal gathering',
        'In a classroom',
        'At a market',
      ],
      answer: 'At a durbar or formal gathering',
      teach: 'Often by a linguist or a drummer.',
      level: 3,
    },
    {
      id: 'app-2',
      ask: 'How should an image in an appellation be explained?',
      kind: 'choice',
      options: [
        'By naming the quality or claim it carries',
        'By translating it word for word',
        'By describing the animal',
      ],
      answer: 'By naming the quality or claim it carries',
      teach: 'The image is an argument, not a decoration.',
      level: 4,
    },
    {
      id: 'app-3',
      ask: 'How do the images of a dirge relate to those of an '
        + 'appellation?',
      kind: 'choice',
      options: [
        'They use the same image system to state loss',
        'They are entirely different images',
        'They use no images',
      ],
      answer: 'They use the same image system to state loss',
      teach: 'In praise the tree stands; in mourning it has fallen.',
      level: 5,
    },
  ],
})

/* ── proverbs and idioms ───────────────────────────────────────────── */

teach({
  topicId: 'proverbs-jhs-ghl',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A proverb states a general truth in a fixed form, '
      + 'and it is used to apply that truth to a case in front of you. '
      + 'So explaining one needs three things: '
      + 'what it says literally, what it means, '
      + 'and when it would be used.',
    method: [
      'Give the literal picture first.',
      'Then the general meaning.',
      'Then a situation where you would say it.',
    ],
  },

  why:
    'Two brothers are quarrelling over a plot of land at a family meeting. '
    + 'The elder listens, then says one sentence: '
    + 'the rain does not fall on one roof alone. '
    + 'The quarrel stops. '
    + 'Nobody has produced a document or a new fact. '
    + 'How did one short sentence do that, '
    + 'when an hour of arguing could not? '
    + 'And a harder one. '
    + 'An examination asks you to explain that proverb. '
    + 'You can say what the words mean, '
    + 'but you cannot yet say what it did in that room, '
    + 'and that second part is where most of the marks are.',

  notation:
    'One proverb gets asked about in three ways, '
    + 'and the words for them are worth having. '
    + 'The literal meaning is the picture: '
    + 'an actual rain, an actual roof. '
    + 'The figurative meaning is the general truth '
    + 'the picture stands for. '
    + 'The occasion is the moment '
    + 'at which you would say it. '
    + 'A proverb has a fixed form, '
    + 'which means its words do not change, '
    + 'so quote it exactly and do not tidy it up. '
    + 'Changing the words of a proverb '
    + 'is the commonest way to lose a mark, '
    + 'because the fixed form is what makes it a proverb '
    + 'rather than an opinion.',

  idea:
    'A proverb is a short fixed saying carrying a general truth. '
    + 'An idiom is an expression whose meaning is not the sum of its words. '
    + 'In Ghanaian languages a proverb is used in argument and in counsel, '
    + 'and using one well is a mark of good speech. '
    + 'Explaining a proverb properly needs three parts: '
    + 'the literal picture, '
    + 'the general meaning, '
    + 'and the occasion on which it would be said. '
    + 'Translating a proverb into English often loses the rhythm '
    + 'and sometimes the image, '
    + 'so the meaning is given rather than the words.',

  mechanism:
    'A proverb is not a decoration and it is not merely wisdom. '
    + 'It is a move in an argument, '
    + 'and that is why the occasion is part of its meaning. '
    + 'When an elder answers a young man’s complaint with a proverb, '
    + 'the proverb does three things at once, '
    + 'and the third of them is why a proverb settles arguments that '
    + 'reasoning would not. '
    + 'This is also why an answer that gives only the meaning is '
    + 'incomplete. '
    + '"Haste is bad" is not an explanation of a proverb about haste. '
    + 'You have to say when it would be used, '
    + 'because the same proverb used in the wrong place '
    + 'is not a wise saying, it is a mistake, '
    + 'and in some gatherings an insult. '
    + 'Translating is the other skill, and it has a rule: '
    + 'give the meaning, not the words. '
    + 'A proverb is compressed, with rhythm and often rhyme, '
    + 'so a word for word English version is usually both wrong and flat. '
    + 'Say what the picture is, then what it means, '
    + 'and if the image does not exist in English, say so. '
    + 'That is honest translation, and it earns more than a literal one.',

  recap:
    'A proverb is a short saying whose words never change. '
    + 'Here is one: the rain does not fall on one roof alone. '
    + 'Nobody says it to tell you about rain. '
    + 'It is said to a man who thinks his trouble is his alone, '
    + 'and it means that other people are carrying the same thing. '
    + 'Notice two things about it. '
    + 'The words are fixed, so you may not improve them. '
    + 'And they carry weight because older people have used them '
    + 'in the same way for a long time. '
    + 'This lesson is about explaining a proverb '
    + 'and about using one in the right place.',

  method: [
    'Say the proverb in the language, with its rhythm.',
    'Give the literal picture.',
    'Give the general meaning.',
    'Describe an occasion on which you would say it.',
    'If asked for English, give the meaning rather than the words.',
    'Say when the image does not exist in English.',
    'For an idiom, give the meaning only; the words say nothing.',
    'Do not use a proverb you cannot explain.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What three things does a full explanation of a proverb need?',
      steps: [
        'Picture, meaning, occasion.',
      ],
      answer: 'The literal picture, the general meaning, '
        + 'and the situation where it would be used.',
    },
    {
      level: 4,
      ask: 'Why is a word for word English translation of a proverb '
        + 'usually poor?',
      steps: [
        'A proverb is compressed, with rhythm and often rhyme.',
        'The image may not exist in English.',
        'So the literal words come out flat or wrong.',
      ],
      answer: 'Because the rhythm and the image do not carry over. '
        + 'Give the meaning instead, '
        + 'and say when the image has no English equivalent.',
    },
    {
      level: 5,
      ask: 'Why does a proverb settle an argument when a plain statement '
        + 'might not?',
      steps: [
        'It states a general rule.',
        'It places this case under that rule.',
        'And it carries the authority of everybody who said it before.',
        'So disagreeing means disagreeing with the ancestors.',
      ],
      answer: 'Because it borrows the authority of all who have said it, '
        + 'so the point is no longer the speaker’s opinion '
        + 'but an old rule being applied to this case.',
    },
  ],

  traps: [
    {
      mistake: 'Giving the meaning with no occasion.',
      why: 'The occasion is part of the meaning. '
        + 'The same proverb in the wrong place is an error.',
    },
    {
      mistake: 'Translating an idiom word for word.',
      why: 'An idiom means something its words do not say.',
    },
    {
      mistake: 'Using a proverb to sound impressive.',
      why: 'Used wrongly it marks you out, and not well. '
        + 'Use only what you can explain.',
    },
    {
      mistake: 'Treating a proverb as merely a nice saying.',
      why: 'It is a move in an argument, '
        + 'which is why elders answer with one.',
    },
  ],

  figure: {
    alt: 'Three numbered boxes in a column giving the parts of a full '
      + 'explanation of a proverb: the literal picture, which is what the '
      + 'words show; the general meaning, which is the rule it states; '
      + 'and the occasion, which is when you would say it. Beside the '
      + 'middle box a red box shows an answer that gives only the middle '
      + 'part, such as saying that haste is bad, and notes that this is '
      + 'not an explanation.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="28" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">a full explanation of a proverb has three parts</text>'
      + '<rect x="20" y="58" width="320" height="66" rx="6"/>'
      + '<circle cx="46" cy="91" r="13"/>'
      + '<text x="46" y="97" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">1</text>'
      + '<text x="72" y="86" font-size="16" fill="currentColor" stroke="none">the literal picture</text>'
      + '<text x="72" y="108" font-size="14" fill="currentColor" stroke="none">what the words show</text>'
      + '<rect x="20" y="136" width="320" height="66" rx="6"/>'
      + '<circle cx="46" cy="169" r="13"/>'
      + '<text x="46" y="175" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">2</text>'
      + '<text x="72" y="164" font-size="16" fill="currentColor" stroke="none">the general meaning</text>'
      + '<text x="72" y="186" font-size="14" fill="currentColor" stroke="none">the rule it states</text>'
      + '<rect x="20" y="214" width="320" height="66" rx="6" stroke="#0f8a4d" stroke-width="3"/>'
      + '<circle cx="46" cy="247" r="13" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="46" y="253" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">3</text>'
      + '<text x="72" y="242" font-size="16" fill="#0f8a4d" stroke="none">the occasion</text>'
      + '<text x="72" y="264" font-size="14" fill="#0f8a4d" stroke="none">when you would say it</text>'
      + '<line x1="340" y1="169" x2="352" y2="169" stroke="#c8433a" stroke-width="3"/>'
      + '<path d="M 350 161 L 366 169 L 350 177 Z" fill="#c8433a" stroke="none"/>'
      + '<rect x="368" y="136" width="250" height="98" rx="6" stroke="#c8433a" stroke-width="3" stroke-dasharray="7 5"/>'
      + '<text x="493" y="166" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">only the middle box,</text>'
      + '<text x="493" y="190" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">so: haste is bad.</text>'
      + '<text x="493" y="216" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">that is not an explanation</text>'
      + '<text x="320" y="330" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">all three parts, or the explanation is not finished,</text>'
      + '<text x="320" y="358" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">and the third is the one learners leave out</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The three things a proverb does at once '
        + 'when an elder uses one',
      columns: ['What it does', 'Why that matters'],
      rows: [
        [
          'States a general rule',
          'The rule is not the speaker’s own opinion, '
            + 'so it cannot be argued with as one',
        ],
        [
          'Places the case in front of you under that rule',
          'The particular quarrel is settled by something already agreed',
        ],
        [
          'Borrows the authority of everybody who said it before',
          'Disagreeing means disagreeing with the ancestors, '
            + 'and not with the speaker',
        ],
      ],
      note: 'This is why the occasion is part of the meaning. '
        + 'The same proverb in the wrong place is not a wise saying but a '
        + 'mistake, and in some gatherings an insult.',
    },
  ],

  extension:
    'Some proverbs contradict each other, '
    + 'and that is not a flaw in the tradition. '
    + 'It means the skill is choosing which applies, '
    + 'which is exactly the judgement an elder is respected for.',

  questions: [
    {
      id: 'prv-1',
      ask: 'What is an idiom?',
      kind: 'choice',
      options: [
        'An expression whose meaning is not the sum of its words',
        'A short story with a lesson',
        'A praise name',
      ],
      answer: 'An expression whose meaning is not the sum of its words',
      teach: 'So it is explained by its meaning, never word by word.',
      level: 3,
    },
    {
      id: 'prv-2',
      ask: 'What should an English version of a proverb give?',
      kind: 'choice',
      options: [
        'The meaning',
        'The exact words',
        'The rhythm',
      ],
      answer: 'The meaning',
      teach: 'Say also when the image does not exist in English.',
      level: 4,
    },
    {
      id: 'prv-3',
      ask: 'What is a proverb doing when an elder answers with one?',
      kind: 'choice',
      options: [
        'Placing your case under an old rule, with its authority',
        'Changing the subject',
        'Showing off knowledge',
      ],
      answer: 'Placing your case under an old rule, with its authority',
      teach: 'Which is why it is harder to argue with than an opinion.',
      level: 5,
    },
  ],
})

/* ── folktales, riddles and songs ─────────────────────────────────── */

teach({
  topicId: 'folk-literature-ghl',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A folktale teaches through what happens to its characters, '
      + 'so the lesson is in the consequence, not in a sentence at the end. '
      + 'Its devices are repetition, song, the trickster, '
      + 'talking animals and a formal opening and closing. '
      + 'Riddles train quick thinking; songs carry the story and the '
      + 'audience.',
    method: [
      'Tell the plot in order, then say what happened to whom.',
      'Take the lesson from the consequence.',
      'Name the devices and say what each does for the telling.',
    ],
  },

  why:
    'A grandmother tells a tale in which Ananse tricks everybody, '
    + 'wins the food, eats all of it, '
    + 'and ends the night stuck up on the roof '
    + 'with nobody willing to help him down. '
    + 'She never says "so do not be greedy". '
    + 'The children do not need telling, '
    + 'because they saw what happened to him. '
    + 'A pupil writing about that tale '
    + 'puts "the lesson is that greed is bad" at the end '
    + 'and loses marks for it. '
    + 'So where in a folktale does the lesson actually sit?',

  notation:
    'The kinds of oral literature have names, '
    + 'and a question asks for one of them by name. '
    + 'A folktale is a story told aloud '
    + 'and passed on by telling. '
    + 'A riddle is a question with a hidden answer, '
    + 'asked to be guessed. '
    + 'A dirge is sung at a funeral. '
    + 'The set words a teller uses to begin and end a tale '
    + 'are the opening and closing formulas. '
    + 'When the teller sings a line '
    + 'and the listeners sing one back, '
    + 'that is call and response. '
    + 'Naming a device without saying '
    + 'what it does for the telling '
    + 'is the commonest way to lose a mark.',

  idea:
    'A folktale is a story passed on by telling. '
    + 'It teaches through what happens to its characters, '
    + 'and not through a sentence at the end. '
    + 'The devices of the telling are not ornament. '
    + 'The formulas, the repetition, the song, the talking animals '
    + 'and the trickster each do a job. '
    + 'Each one solves a problem that comes up '
    + 'when a story is told aloud with no book. '
    + 'A riddle is a different thing. '
    + 'It is a question with a hidden answer, '
    + 'asked to sharpen thinking and to pass time.',

  mechanism:
    'The reason a folktale teaches better than a rule '
    + 'is that it makes you watch the consequence instead of being told '
    + 'it. '
    + 'A rule says greed brings trouble, and a child agrees and forgets. '
    + 'A tale shows Ananse getting everything he schemed for '
    + 'and losing it in the last scene for exactly the reason he schemed, '
    + 'and the child remembers it for life. '
    + 'So when a question asks for the lesson of a tale, '
    + 'the answer is found in the ending, '
    + 'and specifically in the link between what a character did '
    + 'and what happened to him. '
    + 'A lesson that does not come from that link has been imported from '
    + 'outside the story. '
    + 'The devices are not ornament either. '
    + 'Each one solves a problem that only arises '
    + 'when a story is told aloud with no book, '
    + 'and the one worth understanding first is the pair of formulas. '
    + 'They mark off the world of the story, '
    + 'so that nothing said inside it is taken as a statement about real '
    + 'people, '
    + 'which is what makes the criticism sayable at all. '
    + 'Seen that way, the devices are a technology for oral teaching '
    + 'rather than a style of telling.',

  recap:
    'A story told aloud and a story in a book '
    + 'are not the same thing. '
    + 'A book waits for you, '
    + 'and you can turn back a page. '
    + 'A teller gets one go. '
    + 'Nobody can turn back, '
    + 'and the listeners are in the room, '
    + 'awake or losing interest. '
    + 'So a teller repeats a line so that nobody is lost, '
    + 'puts in a song so that everybody joins, '
    + 'and uses animals everybody already knows '
    + 'so that nothing needs describing. '
    + 'None of that is decoration, '
    + 'and this lesson is what each part of the telling is for.',

  method: [
    'Give the opening formula as it is said in your language.',
    'Tell the plot in order.',
    'Say what each character did and what happened to them.',
    'Draw the lesson from that link.',
    'Name the devices: repetition, song, trickster, talking animals.',
    'Say what each device does for an audience with no book.',
    'Give the closing formula.',
    'For a riddle, give the answer and explain the hidden link.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Why do folktales often use animals as characters?',
      steps: [
        'A tale about people could offend somebody present.',
      ],
      answer: 'Because animals let the tale criticise human behaviour '
        + 'without insulting anybody listening.',
    },
    {
      level: 4,
      ask: 'What is repetition in threes for?',
      steps: [
        'The tale is told aloud with nothing written.',
        'Both teller and listener need help.',
      ],
      answer: 'It gives the listener a pattern to follow '
        + 'and gives the teller time to think while speaking.',
    },
    {
      level: 5,
      ask: 'Where is the lesson of a folktale found, and where is it not?',
      steps: [
        'The tale shows actions and their consequences.',
        'So the lesson is the link between the two.',
        'Anything not arising from that link came from outside the story.',
      ],
      answer: 'In the link between what a character did and what happened '
        + 'to him. '
        + 'A lesson that does not come from that link '
        + 'has been imported from outside the tale.',
    },
  ],

  traps: [
    {
      mistake: 'Retelling the tale and calling that the analysis.',
      why: 'The question asks what it teaches and how. '
        + 'The plot is evidence, not the answer.',
    },
    {
      mistake: 'Stating a lesson the story does not actually show.',
      why: 'Take it from the consequence the character met.',
    },
    {
      mistake: 'Naming devices without saying what they do.',
      why: 'Each one solves a problem of telling a story with no book.',
    },
    {
      mistake: 'Leaving out the opening and closing formulas.',
      why: 'They mark off the world of the story, '
        + 'which is what lets the tale say what it says.',
    },
  ],

  figure: {
    alt: 'Two boxes side by side. The left one reads what the character '
      + 'did, with Ananse scheming for everything under it. The right one '
      + 'reads what happened to him, with him losing it all for exactly '
      + 'that reason. A thick green arrow joins them, labelled as the link '
      + 'the lesson lives in. Below, a red dashed box reading greed brings '
      + 'trouble, stated as a rule, has a crossed out arrow pointing up at '
      + 'the link, to show that a rule brought in from outside the story '
      + 'is not the tale’s lesson.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="28" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">where the lesson of a tale is</text>'
      + '<rect x="24" y="92" width="216" height="84" rx="6"/>'
      + '<text x="132" y="120" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">what the character did</text>'
      + '<text x="132" y="142" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Ananse schemes for</text>'
      + '<text x="132" y="162" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">everything he wants</text>'
      + '<line x1="240" y1="134" x2="378" y2="134" stroke="#0f8a4d" stroke-width="5"/>'
      + '<path d="M 376 124 L 396 134 L 376 144 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="318" y="78" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">the lesson is in this link</text>'
      + '<rect x="400" y="92" width="216" height="84" rx="6"/>'
      + '<text x="508" y="120" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">what happened to him</text>'
      + '<text x="508" y="142" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">he loses it all, for</text>'
      + '<text x="508" y="162" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">exactly the same reason</text>'
      + '<rect x="192" y="262" width="256" height="72" rx="6" stroke="#c8433a" stroke-width="3" stroke-dasharray="7 5"/>'
      + '<text x="320" y="292" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">greed brings trouble,</text>'
      + '<text x="320" y="314" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">stated as a rule</text>'
      + '<line x1="320" y1="258" x2="320" y2="206" stroke="#c8433a" stroke-width="3" stroke-dasharray="6 5"/>'
      + '<path d="M 312 208 L 320 192 L 328 208 Z" fill="#c8433a" stroke="none"/>'
      + '<line x1="306" y1="218" x2="334" y2="246" stroke="#c8433a" stroke-width="3"/>'
      + '<line x1="334" y1="218" x2="306" y2="246" stroke="#c8433a" stroke-width="3"/>'
      + '<text x="320" y="368" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">a rule from outside the story is not the tale’s lesson</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each device of a folktale, '
        + 'and the problem of telling aloud that it solves',
      columns: ['Device', 'What it is', 'The problem it solves'],
      rows: [
        [
          'A set opening and closing formula',
          'Fixed words that begin and end every telling',
          'Marks off the world of the story, so nothing said inside it is '
            + 'taken as a statement about real people',
        ],
        [
          'Repetition in threes',
          'The same action or phrase coming round three times',
          'Gives the listener a pattern, '
            + 'and gives the teller time to think',
        ],
        [
          'A song the audience joins',
          'A sung part at the turning points of the tale',
          'Keeps children awake, and makes them part of the performance',
        ],
        [
          'Animals with speech and human character',
          'A spider or a tortoise behaving as a person would',
          'Lets the tale criticise human behaviour '
            + 'without insulting anybody listening',
        ],
        [
          'The trickster, such as Ananse the spider',
          'A clever character who wins, and is then punished for it',
          'Admires the cleverness and refuses to let it go unpaid for',
        ],
      ],
      note: 'The third column is the one worth learning. '
        + 'A device named without the problem it solves is a list, '
        + 'and a list earns little.',
    },
  ],

  extension:
    'The trickster appears in many traditions, '
    + 'and in each one he both wins and is punished. '
    + 'That double ending is the interesting part: '
    + 'the tale admires the cleverness '
    + 'and refuses to let it go unpaid for.',

  questions: [
    {
      id: 'flk-1',
      ask: 'Who is the trickster figure in Akan folktales?',
      kind: 'choice',
      options: ['Ananse the spider', 'The tortoise', 'The hunter'],
      answer: 'Ananse the spider',
      teach: 'He wins by cleverness and is often punished for it.',
      level: 3,
    },
    {
      id: 'flk-2',
      ask: 'What does a song inside a folktale do?',
      kind: 'choice',
      options: [
        'Lets the audience join and marks turning points',
        'Fills time at the end',
        'Replaces the plot',
      ],
      answer: 'Lets the audience join and marks turning points',
      teach: 'It keeps listeners part of the performance.',
      level: 4,
    },
    {
      id: 'flk-3',
      ask: 'Where should the lesson of a tale be taken from?',
      kind: 'choice',
      options: [
        'What happened to the characters because of what they did',
        'A sentence at the end',
        'The teller’s opinion',
      ],
      answer: 'What happened to the characters because of what they did',
      teach: 'That link is the whole method of a folktale.',
      level: 5,
    },
  ],
})

/* ── composition in the language ─────────────────────────────────── */

teach({
  topicId: 'composition-ghl-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A narrative tells what happened, '
      + 'a letter addresses one reader, '
      + 'and an argument persuades. '
      + 'All three are planned first and written in your language '
      + 'without translating in your head. '
      + 'Tone marks and special letters are part of the spelling.',
    method: [
      'Plan in the language, not in English.',
      'Keep one tense through a narrative.',
      'Write every tone mark, and read the piece aloud at the end.',
    ],
  },

  why:
    'You can tell a story out loud in your own language for ten '
    + 'minutes and hold a room. '
    + 'Asked to write that same story down for marks, you find '
    + 'yourself thinking it in English first and then turning it '
    + 'over. '
    + 'What comes out is stiff, and some of it is not how anybody '
    + 'actually speaks. '
    + 'Why is writing the language harder than speaking it, and '
    + 'what has to be learned on its own?',

  notation:
    'Ghanaian languages are written with the ordinary letters '
    + 'plus a few more, and the two commonest are ɛ and ɔ. '
    + 'The letter ɛ is called open e and sounds like the e in '
    + 'bed, while ɔ is called open o and sounds like the o in '
    + 'hot. '
    + 'They are separate letters of the alphabet and not '
    + 'decorations, and a tone mark written above a vowel does '
    + 'similar work, telling apart two words that are otherwise '
    + 'spelt the same. '
    + 'Writing plain e and o where ɛ and ɔ belong is the '
    + 'commonest way to lose a mark, because it can turn one word '
    + 'into another one.',

  idea:
    'Three forms are set: a narrative, a letter, and an argument. '
    + 'Read the question first and decide which one it is asking for, '
    + 'because each has parts it must have and is marked for having them. '
    + 'Everything else is the same in all three. '
    + 'The tense is kept consistent, '
    + 'the sentence order is the language’s own and not English order, '
    + 'and every tone mark and special letter is written.',

  mechanism:
    'The fault that costs most marks in composition '
    + 'is the one from the comprehension lesson, '
    + 'and it is worse here because you are producing rather than '
    + 'answering. '
    + 'A learner plans the essay in English, '
    + 'then writes it out in the language sentence by sentence. '
    + 'Everything is spelt correctly '
    + 'and the whole thing reads like a translation, '
    + 'because it is one. '
    + 'The sentence order follows English, '
    + 'the proverbs are absent because they did not occur to her in '
    + 'English, '
    + 'and the result scores below what her command of the language should '
    + 'give. '
    + 'So plan in the language. '
    + 'Write your points as phrases in the language, not in English, '
    + 'even if that is slower at first, '
    + 'and the sentences that come out will be the language’s own. '
    + 'The second thing worth knowing is that an argument in a Ghanaian '
    + 'language '
    + 'has resources an English essay does not. '
    + 'A proverb placed at the end of a paragraph '
    + 'does the work of three sentences of explanation, '
    + 'because it brings an old authority to the point. '
    + 'Using one well is marked well, '
    + 'and it is only available to somebody composing in the language. '
    + 'Finally, read the finished piece aloud. '
    + 'Tone errors are heard before they are seen, '
    + 'and so are sentences that have come out in an English shape.',

  recap:
    'An essay is planned before it is written. '
    + 'You decide the points, put them in order, then write one '
    + 'paragraph for each, with a paragraph holding one point. '
    + 'Keeping a tense consistent means a story begun in the past '
    + 'stays in the past all the way down, so you never slip from '
    + 'he went into he goes. '
    + 'Those habits hold in any language at all. '
    + 'This lesson does the same work in your own language, which '
    + 'has its own word order, its own letters and resources that '
    + 'English does not have.',

  method: [
    'Read the question and decide which of the three forms it asks for.',
    'Plan in the language: write your points as phrases in it.',
    'Decide the ending before writing a narrative.',
    'Write one idea per paragraph.',
    'Keep one tense throughout a narrative.',
    'For a letter, use the greeting, closing and respect level of the '
      + 'language.',
    'For an argument, give reasons with examples and answer one '
      + 'objection.',
    'Place a proverb where it carries a point.',
    'Write every tone mark and special letter.',
    'Read it aloud and correct what sounds wrong.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What should you decide before writing a narrative?',
      steps: [
        'A story needs somewhere to arrive.',
      ],
      answer: 'The ending: what will have changed by the last paragraph.',
    },
    {
      level: 4,
      ask: 'Why plan in the language instead of in English?',
      steps: [
        'A plan in English produces English sentence shapes.',
        'It also hides the resources the language has.',
      ],
      answer: 'Because a plan made in English comes out as a translation, '
        + 'with English sentence order and no proverbs, '
        + 'which scores below your real command of the language.',
    },
    {
      level: 5,
      ask: 'A learner’s composition is correctly spelt '
        + 'and still reads like a translation. '
        + 'What is the cause, and the cure?',
      steps: [
        'She composed each sentence in English first.',
        'Then replaced the words with ones from her language.',
        'So the order and the idiom are English.',
        'The cure is to plan and compose in the language itself.',
      ],
      answer: 'She is composing in English and converting. '
        + 'The cure is to plan in the language, '
        + 'write the points as phrases in it, '
        + 'and read the finished work aloud.',
    },
  ],

  traps: [
    {
      mistake: 'Planning in English.',
      why: 'The essay then comes out with English sentence shapes, '
        + 'however correct the words are.',
    },
    {
      mistake: 'Changing tense partway through a narrative.',
      why: 'Decide the time first and keep it to the end.',
    },
    {
      mistake: 'Leaving out tone marks because the words are readable.',
      why: 'They are part of the spelling. '
        + 'Without them the word may be another word.',
    },
    {
      mistake: 'Using an English letter layout.',
      why: 'The greeting, closing and level of respect '
        + 'are the ones your language uses.',
    },
    {
      mistake: 'Forcing in a proverb that does not fit.',
      why: 'A misused proverb loses more than a missing one.',
    },
  ],

  figure: {
    alt: 'Five boxes stacked in a column giving the shape of an '
      + 'argumentative composition: your position in one sentence, a '
      + 'reason with an example, another reason with an example, the main '
      + 'objection answered, and the position stated again. A green '
      + 'bracket beside the two reason boxes says that a proverb at the '
      + 'end of one of them does the work of three sentences, and that it '
      + 'is only available to somebody who planned in the language.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="28" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">the shape of an argument</text>'
      + '<rect x="20" y="48" width="320" height="50" rx="6"/>'
      + '<text x="34" y="79" font-size="16" fill="currentColor" stroke="none">your position, in one sentence</text>'
      + '<rect x="20" y="108" width="320" height="50" rx="6"/>'
      + '<text x="34" y="139" font-size="16" fill="currentColor" stroke="none">a reason, with an example</text>'
      + '<rect x="20" y="168" width="320" height="50" rx="6"/>'
      + '<text x="34" y="199" font-size="16" fill="currentColor" stroke="none">another reason, with an example</text>'
      + '<rect x="20" y="228" width="320" height="50" rx="6"/>'
      + '<text x="34" y="259" font-size="16" fill="currentColor" stroke="none">the main objection, answered</text>'
      + '<rect x="20" y="288" width="320" height="50" rx="6"/>'
      + '<text x="34" y="319" font-size="16" fill="currentColor" stroke="none">the position again</text>'
      + '<path d="M 354 108 H 366 V 218 H 354" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="378" y="128" font-size="15" fill="#0f8a4d" stroke="none">a proverb at the end of</text>'
      + '<text x="378" y="148" font-size="15" fill="#0f8a4d" stroke="none">one of these does the</text>'
      + '<text x="378" y="168" font-size="15" fill="#0f8a4d" stroke="none">work of three sentences</text>'
      + '<text x="378" y="196" font-size="14" fill="#0f8a4d" stroke="none">and it only comes to you</text>'
      + '<text x="378" y="214" font-size="14" fill="#0f8a4d" stroke="none">if you planned in the language</text>'
      + '<text x="320" y="378" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">plan the five boxes in your language, not in English</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The three forms of composition, '
        + 'and the parts each one is marked for having',
      columns: ['Form', 'What it is for', 'The parts it must have'],
      rows: [
        [
          'Narrative',
          'Telling what happened',
          'A plan, paragraphs, one tense throughout, '
            + 'and an ending that says what changed',
        ],
        [
          'Letter',
          'Addressing one reader',
          'The layout, greeting and closing your language uses, '
            + 'at the level of respect that reader is owed',
        ],
        [
          'Argument',
          'Persuading somebody of a position',
          'The position, reasons with examples, '
            + 'an answer to the main objection, '
            + 'and the position stated again at the close',
        ],
      ],
      note: 'A piece missing a part of its own form loses marks '
        + 'however well it is written, '
        + 'so decide the form before you plan.',
    },
  ],

  extension:
    'A speech written in the language brings in the formal address order: '
    + 'greeting, the elders named in rank, purpose, '
    + 'then the argument. '
    + 'Writing one is the composition and the formal speaking topic '
    + 'done together.',

  questions: [
    {
      id: 'cmp-1',
      ask: 'In which language should you plan a composition in your '
        + 'language?',
      kind: 'choice',
      options: ['The language itself', 'English', 'Either'],
      answer: 'The language itself',
      teach: 'A plan in English comes out as a translation.',
      level: 3,
    },
    {
      id: 'cmp-2',
      ask: 'What does an argumentative composition need besides reasons?',
      kind: 'choice',
      options: [
        'An answer to the main objection',
        'More paragraphs',
        'A longer introduction',
      ],
      answer: 'An answer to the main objection',
      teach: 'Leaving the strongest objection unanswered reads as having '
        + 'no answer.',
      level: 4,
    },
    {
      id: 'cmp-3',
      ask: 'What is the quickest final check on a composition?',
      kind: 'choice',
      options: [
        'Read it aloud',
        'Count the words',
        'Check the first line',
      ],
      answer: 'Read it aloud',
      teach: 'Tone errors and English sentence shapes are both heard '
        + 'before they are seen.',
      level: 5,
    },
  ],
})
