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

  idea:
    'A steward is somebody left in charge of what belongs to another, '
    + 'and who must answer for it. '
    + 'Christianity teaches that God placed people in the world to tend it, '
    + 'and that the earth is the Lord’s. '
    + 'Islam teaches that the human being is God’s trustee on earth, '
    + 'that waste is forbidden, '
    + 'and that the one who plants a tree is rewarded. '
    + 'African Traditional Religion treats land, rivers and groves as held '
    + 'in trust '
    + 'from the ancestors and for those not yet born, '
    + 'with sacred groves and closed days protecting particular places and '
    + 'times. '
    + 'All three therefore give a duty to care for the environment, '
    + 'and all three treat destroying it as a wrong done to somebody, '
    + 'not merely as a loss.',

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
    'You compared what the three faiths teach about creation, '
    + 'and found that all of them make people caretakers. '
    + 'This takes that duty and applies it.',

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

  idea:
    'Christianity affirms one God, the creator of all things. '
    + 'God is eternal, all powerful, all knowing, and everywhere at once. '
    + 'God is holy, just, merciful and loving. '
    + 'God is known as Father, Son and Holy Spirit. '
    + 'Islam affirms one God, Allah, with no partner and no equal. '
    + 'God is the creator and the sustainer, '
    + 'all powerful and all knowing. '
    + 'God is most often named as the Compassionate and the Merciful. '
    + 'African Traditional Religion affirms a Supreme Being, '
    + 'called Onyame, Mawu, Nyonmo and other names. '
    + 'He created all things and is the final judge. '
    + 'He is too great to be approached lightly, '
    + 'and is reached through lesser spirits and the ancestors. '
    + 'So all three affirm one creator. '
    + 'And all three call God supreme, powerful, knowing and merciful.',

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
    + 'Christianity holds the doctrine of the Trinity, '
    + 'one God in three persons, '
    + 'which Islam explicitly rejects '
    + 'in affirming that God has no partner. '
    + 'Traditional religion approaches the Supreme Being through '
    + 'intermediaries, '
    + 'which the other two do differently or not at all. '
    + 'Those are genuine differences between the faiths, '
    + 'not misunderstandings to be smoothed over, '
    + 'and an examination answer that reports them accurately '
    + 'is better than one that pretends everybody agrees. '
    + 'There is one more thing worth noticing about attributes. '
    + 'Each one is held because of something it explains. '
    + 'God is called creator to explain why anything exists. '
    + 'God is called just to explain why wrong matters. '
    + 'God is called merciful to explain why wrong is not the last word. '
    + 'So an attribute is not a compliment. '
    + 'It is a claim, and each claim does work in the faith that holds it.',

  recap:
    'You compared the three creation accounts '
    + 'and the forms of worship in each faith. '
    + 'This compares what each one says about God.',

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

  idea:
    'A naming ceremony brings a child into the family and community. '
    + 'It usually happens in the first days or weeks. '
    + 'The name is given publicly, by an elder or at a religious '
    + 'ceremony. '
    + 'Puberty rites mark a girl reaching womanhood. '
    + 'The Krobo dipo and the Akan bragoro are two of them. '
    + 'They involve instruction, time apart, and a public presentation. '
    + 'Marriage joins two people, and in Ghana it joins two families. '
    + 'There are customary rites, '
    + 'and often a religious ceremony and a legal registration as well. '
    + 'Funeral rites mark death. '
    + 'In much of Ghana they also settle the person’s standing among the '
    + 'ancestors, '
    + 'and what those left behind now owe. '
    + 'Christianity and Islam have their own rites for the same stages. '
    + 'Christians have baptism or christening, and confirmation. '
    + 'Muslims have the aqiqah and naming on the seventh day, '
    + 'the nikah, and the janazah prayer.',

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
    'You know what culture is '
    + 'and that it is passed on by the family and the community. '
    + 'Rites of passage are the moments where that passing on is done '
    + 'publicly.',

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

  idea:
    'Jesus Christ was born in Bethlehem and grew up in Nazareth. '
    + 'He was baptised by John. '
    + 'He taught for about three years in Galilee and Judea, '
    + 'and chose twelve disciples. '
    + 'He taught love of God and of neighbour, even of enemies. '
    + 'Religious and political leaders opposed him, '
    + 'and he was crucified. '
    + 'Christians hold that he rose again. '
    + 'The Prophet Muhammad was born in Makkah about the year 570. '
    + 'He worked as a trader. '
    + 'He received the first revelation at about forty. '
    + 'He taught that God is one, '
    + 'and he taught prayer, charity and justice. '
    + 'He faced persecution and moved to Madinah, '
    + 'and later returned to Makkah. '
    + 'African Traditional Religion has no single founder. '
    + 'Its teaching is carried by priests, elders and chiefs, '
    + 'through proverbs, taboos and custom. '
    + 'Ghana has also had its own leaders and reformers '
    + 'in each of these traditions.',

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
    + 'Charity is not an idea in Islam, it is zakat, '
    + 'a fixed share given annually, '
    + 'and fasting in Ramadan is a month that visibly reorganises a city. '
    + 'Forgiveness is not an idea in Christianity, '
    + 'it is said in the prayer Christians repeat daily '
    + 'and acted on in reconciliation between families. '
    + 'Writing that is what shows you understood the teaching '
    + 'rather than memorised a biography.',

  recap:
    'You have compared what the three faiths teach about creation, '
    + 'worship and God. '
    + 'This looks at the people the teachings came through.',

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
      'Separate what you know from what you assume.',
      'List who is affected and how.',
      'Name the cost of each option, including the one you choose.',
    ],
  },

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
    + 'with a temptation you already know what is right and do not want to '
    + 'do it. '
    + 'A real dilemma is where two things you genuinely believe collide. '
    + 'You believe you should be loyal to a friend '
    + 'and you believe you should not let somebody be hurt, '
    + 'and your friend is about to hurt somebody. '
    + 'No amount of thinking makes both available. '
    + 'What a method can do is stop the three ways people avoid deciding. '
    + 'The first is confusing a fact with an assumption: '
    + '"he probably did not mean it" is an assumption doing the work of a '
    + 'fact, '
    + 'and separating the two sometimes dissolves the dilemma entirely. '
    + 'The second is counting only the people in front of you. '
    + 'The friend is present and the person who would be hurt is not, '
    + 'so listing everybody affected corrects a bias you cannot feel. '
    + 'The third is pretending the chosen option is free. '
    + 'Telling a teacher does cost your friendship. '
    + 'Saying so is not weakness; '
    + 'it is the difference between a decision and a story you tell '
    + 'yourself. '
    + 'And there is one test that catches most self deception: '
    + 'could you say out loud, to everybody affected, what you are doing '
    + 'and why? '
    + 'An answer that only works while somebody does not know '
    + 'is usually the wrong one.',

  recap:
    'You have learned what each faith teaches about right conduct. '
    + 'This is about the cases where those teachings are hard to apply '
    + 'because two of them point different ways.',

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
        'In one you know what is right.',
        'In the other two rights conflict.',
      ],
      answer: 'With a temptation you know what is right and do not want to '
        + 'do it. '
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

  idea:
    'An appellation is a praise name or string of praise names, '
    + 'used for a chief, an ancestor, a family or a person. '
    + 'It is built from images: '
    + 'an animal for strength or cunning, '
    + 'a great tree for endurance, '
    + 'a river for depth, '
    + 'a weapon for readiness, '
    + 'and the names of ancestors for descent. '
    + 'It is recited at durbars, festivals and formal gatherings, '
    + 'often by a linguist or a drummer, '
    + 'and the talking drums can sound it without words. '
    + 'A dirge is a funeral song, '
    + 'and its images do the reverse work: '
    + 'the tree has fallen, the river has dried, the house is empty. '
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
    + 'An animal image claims a quality that animal is known for. '
    + 'An ancestor’s name claims the right to the position by descent. '
    + 'A weapon claims readiness, and sometimes a warning. '
    + 'Explain the image and you have explained the poem. '
    + 'A dirge works by the same method with the images reversed, '
    + 'and that is why they are worth teaching together. '
    + 'In praise the tree stands; in mourning the tree has fallen. '
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
    'You can address a gathering formally '
    + 'and you know that proverbs carry weight because they are old. '
    + 'An appellation is that principle condensed into names and images.',

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
    + 'the proverb does three things at once. '
    + 'It states a general rule, '
    + 'it places the young man’s case under that rule, '
    + 'and it borrows the authority of everybody who ever said it before. '
    + 'The last part is why a proverb settles things that an argument '
    + 'would not: '
    + 'disagreeing with it means disagreeing with the ancestors, '
    + 'not with the speaker. '
    + 'This is why an answer that gives only the meaning is incomplete. '
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
    'You have used proverbs in formal speech, '
    + 'and you know they carry weight because they are old. '
    + 'This is about explaining them, and using them in the right place.',

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

  idea:
    'A folktale is a story passed on by telling. '
    + 'It opens and closes with a set formula, '
    + 'often has a song the audience joins, '
    + 'uses repetition in threes, '
    + 'and gives animals speech and human character. '
    + 'The trickster figure, such as Ananse the spider, '
    + 'wins by cleverness and is sometimes punished for it. '
    + 'The lesson comes out of what happens to the characters. '
    + 'A riddle is a question with a hidden answer, '
    + 'asked to sharpen thinking and to pass time. '
    + 'Songs within a tale mark the turning points '
    + 'and keep the audience part of the performance.',

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
    + 'The devices are not ornament either; '
    + 'each one solves a problem of telling a story aloud with no book. '
    + 'Repetition in threes gives the listener a pattern '
    + 'and gives the teller time to think. '
    + 'The song lets the audience join, '
    + 'which keeps children awake and makes them part of the performance. '
    + 'Animals as characters let a tale criticise human behaviour safely, '
    + 'because nobody present need be insulted by what the tortoise did. '
    + 'And the opening and closing formulas mark off the world of the '
    + 'story, '
    + 'so that nothing said inside it is taken as a statement about real '
    + 'people, '
    + 'which is what makes the criticism sayable at all. '
    + 'Seen that way, the devices are a technology for oral teaching.',

  recap:
    'You have heard folktales told at home '
    + 'and can say what happens in one. '
    + 'This asks what the tale is doing, '
    + 'and what each part of the telling is for.',

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

  idea:
    'A narrative composition tells a story: '
    + 'a plan, paragraphs, and an ending that says what changed. '
    + 'A letter has the layout of a letter in your language, '
    + 'with the greeting and closing that language uses, '
    + 'and the level of respect the reader is owed. '
    + 'An argumentative composition states a position, '
    + 'gives reasons with examples, '
    + 'answers the main objection, '
    + 'and closes by restating the position. '
    + 'In all three, '
    + 'the tense is kept consistent, '
    + 'the sentence order is the language’s own, '
    + 'and all tone marks and special letters are written.',

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
    'You can plan an essay, write paragraphs, '
    + 'and keep a tense consistent, from your English lessons. '
    + 'This does the same work in your own language, '
    + 'which has its own order, its own letters and its own resources.',

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
