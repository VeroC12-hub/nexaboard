/**
 * Stored lessons for Basic 1 Religious and Moral Education.
 *
 * ── The register these are written in ───────────────────────────────────────
 *
 * Ghana's RME covers Christianity, Islam and Ghanaian traditional religion
 * together, and these lessons describe what each faith teaches and attribute
 * it: "Christians believe", "in Islam", "in Ghanaian traditional religion".
 * Nothing here asserts any faith's claims as fact, and nothing ranks them. A
 * child in the class belongs to one of them, and so does the child beside her.
 *
 * The moral topics (honesty, respect, work, forgiveness) are taught from what
 * the faiths say about them AND from reasons a child can test themselves, so a
 * learner of any faith or none can follow the whole lesson.
 *
 * Written to be spoken to a six or seven year old. See `basic1-maths.ts`.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── accounts of creation ─────────────────────────────────────────────────── */

teach({
  topicId: 'creation-accounts',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Every faith has an account of how the world began. Christians read in the '
    + 'Bible that God made the world in six days and rested on the seventh. In '
    + 'Islam, Muslims read in the Qur’an that Allah created the heavens and '
    + 'the earth and everything in them. In Ghanaian traditional religion, '
    + 'Onyame is the creator of all things, and the stories are told by elders '
    + 'rather than read from a book.',

  mechanism:
    'These accounts are not all the same, and they are not meant to be. Each '
    + 'one belongs to a community and is told in that community’s own way: '
    + 'some written down and read aloud, some passed from elder to child by '
    + 'speaking. What they share is the answer to the same question, which is '
    + 'why they can be learned side by side.',

  recap:
    'You already know things about where you come from: your family, your '
    + 'town. A creation account answers a much older version of that question, '
    + 'about where everything comes from.',

  method: [
    'Say whose account it is first: Christian, Muslim, or traditional.',
    'Say who the account names as creator.',
    'Say where the account is kept: a book, or the telling of elders.',
    'Never say one is the right one. Say whose it is.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Where do Christians read their account of creation?',
      steps: [
        'Christians read from the Bible.',
        'The account of creation is at its beginning.',
      ],
      answer: 'In the Bible.',
    },
    {
      level: 2,
      ask: 'How is the traditional account passed on, if not in a book?',
      steps: [
        'It is told, not written.',
        'Elders tell it to children, who tell it to theirs.',
      ],
      answer: 'By being told from elders to children.',
    },
    {
      level: 3,
      ask: 'Two children give different accounts of creation. Is one of them '
        + 'wrong?',
      steps: [
        'Each is giving the account of their own faith correctly.',
        'The question was not which faith is right.',
        'So both have answered their question correctly.',
      ],
      answer: 'No. Each told their own faith’s account, and each told it '
        + 'properly.',
    },
  ],

  traps: [
    {
      mistake: 'Mixing the accounts together into one.',
      why: 'Each belongs to a faith. Say whose account you are giving before '
        + 'you give it.',
    },
    {
      mistake: 'Saying another child’s account is wrong.',
      why: 'The lesson asks what each faith teaches, not which is true. '
        + 'Reporting another faith’s account accurately is the skill.',
    },
    {
      mistake: 'Thinking a told story is less careful than a written one.',
      why: 'Spoken accounts are learned exactly and passed on deliberately. '
        + 'Being unwritten is not being casual.',
    },
  ],

  extension:
    'Nearly every people on earth has a creation account, far beyond the three '
    + 'practised in Ghana. Asking why that question is asked everywhere is a '
    + 'bigger question than any single answer to it.',

  questions: [
    {
      id: 'cre-1',
      ask: 'Which book do Muslims read?',
      kind: 'choice',
      options: ['The Bible', 'The Qur’an', 'Neither'],
      answer: 'The Qur’an',
      teach: 'Muslims read the Qur’an. Christians read the Bible. Both '
        + 'contain an account of creation.',
      level: 1,
    },
    {
      id: 'cre-2',
      ask: 'In Ghanaian traditional religion, who is named as the creator?',
      kind: 'choice',
      options: ['Onyame', 'Nobody', 'The elders'],
      answer: 'Onyame',
      teach: 'Onyame is the creator in Ghanaian traditional religion, and the '
        + 'account is passed on by the telling of elders.',
      level: 2,
    },
    {
      id: 'cre-3',
      ask: 'If two children give different creation accounts, what should you '
        + 'say?',
      kind: 'choice',
      options: [
        'One of them is wrong',
        'Each gave their own faith’s account',
        'Neither should answer',
      ],
      answer: 'Each gave their own faith’s account',
      teach: 'The question is what each faith teaches. Both children answered '
        + 'it correctly for their own faith.',
      level: 3,
    },
  ],
})

/* ── caring for what was created ──────────────────────────────────────────── */

teach({
  topicId: 'caring-for-creation',
  source: 'WRITTEN',
  approved: true,

  idea:
    'All three faiths practised in Ghana teach that the world is not ours to '
    + 'spoil. Christians and Muslims both teach that people were given the '
    + 'earth to look after and will answer for how they treated it. In '
    + 'Ghanaian traditional religion certain rivers, groves and days are '
    + 'treated as sacred, and harming them is a serious wrong.',

  mechanism:
    'The reason is the same in each case even though the words differ: the '
    + 'world was given, not earned, so it is held in trust rather than owned. '
    + 'Something held in trust is one you must hand on in good condition. That '
    + 'is why all three treat spoiling the land as a wrong against somebody, '
    + 'not merely as waste.',

  recap:
    'You know that borrowing something means returning it as you found it. '
    + 'This is the same idea, about something much bigger.',

  method: [
    'Name one thing in the world near you: a tree, a stream, an animal.',
    'Ask what would spoil it.',
    'Ask who would be harmed if it were spoiled.',
    'Say what your own faith teaches about looking after it.',
    'Then do the small thing you can actually do.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Give one way a child can care for the environment.',
      steps: [
        'Think of something small and real.',
        'Not dropping rubbish is one.',
      ],
      answer: 'Put your rubbish in a bin rather than on the ground.',
    },
    {
      level: 2,
      ask: 'Why is throwing rubbish into a gutter worse than it looks?',
      steps: [
        'The gutter carries water away when it rains.',
        'Blocked, the water has nowhere to go.',
        'It floods houses, and dirty standing water makes people ill.',
      ],
      answer: 'It blocks the gutter, which floods homes and breeds disease.',
    },
    {
      level: 3,
      ask: 'In traditional religion some groves may not be cut. What does that '
        + 'do, apart from honouring a belief?',
      steps: [
        'The trees in it are left standing.',
        'Standing trees hold the soil and shade the stream.',
        'So the rule protects the place as well as honouring it.',
      ],
      answer: 'It keeps the forest and the water it shelters intact.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking one person’s rubbish is too small to matter.',
      why: 'Every blocked gutter is made of single pieces. Yours is one of '
        + 'them.',
    },
    {
      mistake: 'Saying caring for the earth is somebody else’s job.',
      why: 'All three faiths put the duty on each person, not only on chiefs '
        + 'or government.',
    },
    {
      mistake: 'Treating sacred groves as only superstition.',
      why: 'Whatever you believe about them, the rule keeps the trees and the '
        + 'stream. Respect it.',
    },
  ],

  extension:
    'Many old Ghanaian rules, a day on which no one farms, a stretch of river '
    + 'no one fishes, give the land and the fish time to recover. Modern '
    + 'science calls that a closed season, and it was being practised here '
    + 'long before it had that name.',

  questions: [
    {
      id: 'cfc-1',
      ask: 'What happens when a gutter is blocked with rubbish?',
      kind: 'choice',
      options: ['Nothing', 'Water floods homes', 'It smells nicer'],
      answer: 'Water floods homes',
      teach: 'The gutter carries rain away. Blocked, the water backs up into '
        + 'houses, and standing dirty water makes people ill.',
      level: 2,
    },
    {
      id: 'cfc-2',
      ask: 'Whose job is it to look after the environment?',
      kind: 'choice',
      options: ['The government only', 'Everybody', 'Chiefs only'],
      answer: 'Everybody',
      teach: 'All three faiths practised in Ghana put the duty on each person, '
        + 'not only on leaders.',
      level: 1,
    },
    {
      id: 'cfc-3',
      ask: 'Not cutting a sacred grove also does what?',
      kind: 'choice',
      options: [
        'Keeps the trees and the stream',
        'Nothing practical',
        'Makes the soil poorer',
      ],
      answer: 'Keeps the trees and the stream',
      teach: 'Standing trees hold the soil and shade the water, so the rule '
        + 'protects the place as well as honouring a belief.',
      level: 3,
    },
  ],
})

/* ── how people worship ───────────────────────────────────────────────────── */

teach({
  topicId: 'how-we-worship',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Worship is how people show honour to God. Christians gather in a church, '
    + 'mostly on Sunday, to pray, sing and hear the Bible read. Muslims pray '
    + 'five times a day, facing Mecca, and gather at the mosque on Friday. In '
    + 'Ghanaian traditional religion, worship includes prayer, libation poured '
    + 'by an elder, and offerings, often at a shrine or a family gathering.',

  mechanism:
    'Although what is done differs, the shape is alike: a time set aside, a '
    + 'place set aside, words said, and something given up, whether that is '
    + 'money, food or simply the time itself. Setting a time and place apart '
    + 'is what makes it worship rather than a passing thought, and that is why '
    + 'every faith has both.',

  recap:
    'You greet people differently depending on who they are. Worship is also a '
    + 'way of showing honour, with its own words and its own manners.',

  method: [
    'Say which faith you are describing.',
    'Say when: the day, or the times of day.',
    'Say where: church, mosque, shrine, or home.',
    'Say what is done: prayer, singing, reading, libation, offering.',
    'Describe another faith’s worship as carefully as your own.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Where do Muslims gather for Friday prayer?',
      steps: [
        'Muslims pray at the mosque.',
        'Friday is the day of the gathered prayer.',
      ],
      answer: 'At the mosque.',
    },
    {
      level: 2,
      ask: 'How often do Muslims pray each day?',
      steps: [
        'Prayer is at set times through the day.',
        'There are five of them.',
      ],
      answer: 'Five times.',
    },
    {
      level: 3,
      ask: 'Name one thing all three faiths do when they worship.',
      steps: [
        'Christians pray. Muslims pray. Traditional worship includes prayer '
          + 'too.',
        'All three also set aside a particular time and place.',
      ],
      answer: 'All three pray, and all three set a time and place apart for it.',
    },
  ],

  traps: [
    {
      mistake: 'Describing your own faith carefully and another carelessly.',
      why: 'A child of that faith is sitting beside you. Get theirs as right '
        + 'as you get yours.',
    },
    {
      mistake: 'Saying traditional worship has no prayer.',
      why: 'It does. Libation is itself a prayer, spoken while pouring.',
    },
    {
      mistake: 'Thinking worship only happens in a building.',
      why: 'Muslims pray wherever they are when the time comes, and '
        + 'traditional worship often happens at home or at a family gathering.',
    },
  ],

  extension:
    'Many Ghanaian families include more than one faith, and they manage it by '
    + 'honouring each other’s times: nobody is called away during Friday '
    + 'prayer or Sunday service. That is a practical kind of respect worth '
    + 'noticing.',

  figure: {
    alt: 'Worship in Christianity, Islam and Ghanaian traditional religion '
      + 'compared by when it happens, where, and what is done',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<g fill="none" stroke="currentColor" stroke-width="2">'
      + '<path d="M40 70h570M40 70v270"/><path d="M40 160h570M40 250h570"/>'
      + '<path d="M230 70v270M420 70v270"/>'
      + '</g>'
      + '<g font-size="15" font-weight="700" fill="#0f8a4d" text-anchor="middle">'
      + '<text x="135" y="100">Christianity</text>'
      + '<text x="325" y="100">Islam</text>'
      + '<text x="515" y="100">Traditional</text>'
      + '</g>'
      + '<g font-size="15" fill="currentColor" text-anchor="middle">'
      + '<text x="135" y="134">Sunday</text>'
      + '<text x="325" y="128">five times a day,</text><text x="325" y="148">Friday gathering</text>'
      + '<text x="515" y="128">festival days and</text><text x="515" y="148">family occasions</text>'
      + '<text x="135" y="212">church</text>'
      + '<text x="325" y="212">mosque, or wherever</text>'
      + '<text x="515" y="206">shrine, or</text><text x="515" y="226">at home</text>'
      + '<text x="135" y="296">pray, sing,</text><text x="135" y="316">read the Bible</text>'
      + '<text x="325" y="296">pray facing</text><text x="325" y="316">Mecca</text>'
      + '<text x="515" y="296">pray, pour</text><text x="515" y="316">libation, offer</text>'
      + '</g>'
      + '<g font-size="14" fill="currentColor" text-anchor="end">'
      + '<text x="34" y="134">when</text><text x="34" y="212">where</text><text x="34" y="306">what</text>'
      + '</g>'
      + '<text x="320" y="378" text-anchor="middle" font-size="15" fill="#0f8a4d">All three: a time set apart, a place set apart, and prayer.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'wor-1',
      ask: 'On which day do Christians mostly gather to worship?',
      kind: 'choice',
      options: ['Friday', 'Sunday', 'Monday'],
      answer: 'Sunday',
      teach: 'Christians mostly gather on Sunday. Muslims gather for prayer '
        + 'on Friday.',
      level: 1,
    },
    {
      id: 'wor-2',
      ask: 'What is libation?',
      kind: 'choice',
      options: [
        'A prayer said while pouring a drink',
        'A kind of song',
        'A building',
      ],
      answer: 'A prayer said while pouring a drink',
      teach: 'In Ghanaian traditional religion an elder pours while praying. '
        + 'It is prayer, not only pouring.',
      level: 2,
    },
    {
      id: 'wor-3',
      ask: 'What do all three faiths set apart for worship?',
      kind: 'choice',
      options: ['A time and a place', 'A book', 'A building'],
      answer: 'A time and a place',
      teach: 'Not all have a book, and not all need a building, but every one '
        + 'sets a time and a place apart. That is what makes it worship.',
      level: 3,
    },
  ],
})

/* ── religious festivals ──────────────────────────────────────────────────── */

teach({
  topicId: 'religious-festivals',
  source: 'WRITTEN',
  approved: true,

  idea:
    'A festival is a day a community keeps every year to remember something '
    + 'important. Christians keep Christmas, remembering the birth of Jesus, '
    + 'and Easter, remembering his death and rising. Muslims keep Eid al-Fitr '
    + 'at the end of the fasting month of Ramadan, and Eid al-Adha, which '
    + 'remembers Ibrahim’s willingness to obey Allah. In Ghana there are '
    + 'also traditional festivals such as Homowo and Odwira, which remember a '
    + 'people’s history and give thanks for the harvest.',

  mechanism:
    'A festival works by repeating. Keeping the same day every year is how a '
    + 'community makes sure the next generation is told the same thing, '
    + 'without anyone having to remember to teach it. The food, the clothes '
    + 'and the gathering are not extras; they are what makes the day '
    + 'memorable enough to do its job.',

  recap:
    'You know that families gather for particular days. A festival is that, '
    + 'for a whole community, and always on the same day each year.',

  method: [
    'Name the festival and whose it is.',
    'Say what it remembers.',
    'Say when it happens in the year.',
    'Say what people do on it: the food, the clothes, the gathering.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What does Christmas remember?',
      steps: [
        'It is a Christian festival.',
        'It remembers the birth of Jesus.',
      ],
      answer: 'The birth of Jesus.',
    },
    {
      level: 2,
      ask: 'Eid al-Fitr comes at the end of what?',
      steps: [
        'Muslims fast for a month called Ramadan.',
        'Eid al-Fitr marks its end.',
      ],
      answer: 'The month of fasting, Ramadan.',
    },
    {
      level: 3,
      ask: 'Homowo means "hooting at hunger". What does the name tell you '
        + 'about the festival?',
      steps: [
        'The name is about hunger being over.',
        'So it remembers a time of famine that was survived.',
        'And it gives thanks for the harvest that ended it.',
      ],
      answer: 'That it remembers surviving famine and gives thanks for food.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a festival is only a holiday.',
      why: 'The day exists to remember something. Say what it remembers, not '
        + 'only that there is no school.',
    },
    {
      mistake: 'Mixing up Eid al-Fitr and Eid al-Adha.',
      why: 'Eid al-Fitr ends the fasting month. Eid al-Adha remembers '
        + 'Ibrahim’s obedience.',
    },
    {
      mistake: 'Calling traditional festivals the same as religious ones of '
        + 'other faiths.',
      why: 'Homowo and Odwira belong to particular peoples and particular '
        + 'histories. Name whose festival it is.',
    },
  ],

  extension:
    'Many Ghanaian festivals fall at harvest, because that is when there is '
    + 'food enough to feed a gathering and reason enough to give thanks. The '
    + 'farming year and the festival year are tied together.',

  questions: [
    {
      id: 'fes-1',
      ask: 'Eid al-Fitr marks the end of which month?',
      kind: 'choice',
      options: ['Ramadan', 'December', 'Odwira'],
      answer: 'Ramadan',
      teach: 'Ramadan is the month of fasting, and Eid al-Fitr is the '
        + 'celebration at its end.',
      level: 1,
    },
    {
      id: 'fes-2',
      ask: 'What does Easter remember?',
      kind: 'choice',
      options: [
        'The birth of Jesus',
        'The death and rising of Jesus',
        'The harvest',
      ],
      answer: 'The death and rising of Jesus',
      teach: 'Christmas remembers his birth. Easter remembers his death and '
        + 'rising.',
      level: 2,
    },
    {
      id: 'fes-3',
      ask: 'Homowo gives thanks for what?',
      kind: 'choice',
      options: ['Rain', 'The harvest', 'A battle'],
      answer: 'The harvest',
      teach: 'Its name means hooting at hunger. It remembers surviving famine '
        + 'and gives thanks for the food that ended it.',
      level: 2,
    },
  ],
})

/* ── founders and leaders ─────────────────────────────────────────────────── */

teach({
  topicId: 'religious-leaders',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Christians follow the teaching of Jesus Christ, who taught people to love '
    + 'God and to love their neighbour as themselves. Muslims follow the '
    + 'teaching brought by the Prophet Muhammad, peace be upon him, who taught '
    + 'that there is one God and that mercy and charity are owed to others. '
    + 'Ghanaian traditional religion has no single founder; it has been passed '
    + 'down through elders, priests and families.',

  mechanism:
    'Having a founder and not having one changes how a faith is carried. A '
    + 'faith with a founder keeps his words and returns to them. A faith '
    + 'without one keeps its teaching in the practices and sayings of a '
    + 'community, which is why elders hold the authority there: they are where '
    + 'the teaching is stored.',

  recap:
    'You know that each faith keeps its account of creation differently, some '
    + 'in a book and some by telling. The same difference shows up again here.',

  method: [
    'Name the faith.',
    'Name its founder, if it has one.',
    'Give one thing that founder taught, in plain words.',
    'For traditional religion, say that it is passed down through elders '
      + 'rather than founded by one person.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Who do Christians follow?',
      steps: [
        'Christians follow Jesus Christ.',
      ],
      answer: 'Jesus Christ.',
    },
    {
      level: 2,
      ask: 'Give one thing Jesus taught.',
      steps: [
        'Think of a teaching about how to treat people.',
        'He taught people to love their neighbour as themselves.',
      ],
      answer: 'To love your neighbour as yourself.',
    },
    {
      level: 3,
      ask: 'Why does Ghanaian traditional religion give elders such authority?',
      steps: [
        'It has no founder whose words were written down.',
        'The teaching lives in what the community practises and says.',
        'Elders are the ones who hold and pass on that teaching.',
      ],
      answer: 'Because the teaching is kept in the community, and elders are '
        + 'where it is held.',
    },
  ],

  traps: [
    {
      mistake: 'Saying traditional religion has a founder.',
      why: 'It does not. It has been passed down rather than started by one '
        + 'person.',
    },
    {
      mistake: 'Naming a founder but not a teaching.',
      why: 'The name alone says little. Give one thing he taught, in words a '
        + 'person could act on.',
    },
    {
      mistake: 'Speaking of another faith’s founder without the respect '
        + 'that faith gives him.',
      why: 'Muslims say "peace be upon him" after the Prophet’s name. '
        + 'Using a community’s own courtesy is part of describing it '
        + 'honestly.',
    },
  ],

  extension:
    'All three teach something very close on how to treat other people: do to '
    + 'others what you would want done to you. Finding that agreement does not '
    + 'make the faiths the same, but it is worth noticing where they meet.',

  questions: [
    {
      id: 'lead-1',
      ask: 'Who brought the teaching Muslims follow?',
      kind: 'choice',
      options: ['Jesus Christ', 'The Prophet Muhammad', 'Onyame'],
      answer: 'The Prophet Muhammad',
      teach: 'Muslims follow the teaching brought by the Prophet Muhammad, '
        + 'peace be upon him.',
      level: 1,
    },
    {
      id: 'lead-2',
      ask: 'Does Ghanaian traditional religion have one founder?',
      kind: 'choice',
      options: ['Yes', 'No, it is passed down'],
      answer: 'No, it is passed down',
      teach: 'It has no single founder. Its teaching is carried by elders, '
        + 'priests and families.',
      level: 2,
    },
    {
      id: 'lead-3',
      ask: 'Which teaching do all three share in some form?',
      kind: 'choice',
      options: [
        'Treat others as you want to be treated',
        'Fast for a month',
        'Gather on Sunday',
      ],
      answer: 'Treat others as you want to be treated',
      teach: 'All three teach something very close to this, even though they '
        + 'differ in much else.',
      level: 3,
    },
  ],
})

/* ── honesty ──────────────────────────────────────────────────────────────── */

teach({
  topicId: 'honesty-and-truth',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Being honest means saying what is true and giving back what is not yours, '
    + 'even when nobody would know. All three faiths teach it, and it is also '
    + 'something you can see the sense of yourself: a person known to tell the '
    + 'truth is believed, and a person caught lying is not believed even when '
    + 'they are telling the truth.',

  mechanism:
    'That last part is the whole reason, and it is worth understanding rather '
    + 'than being told. Being believed is something you build slowly and lose '
    + 'quickly. One lie that is found out does not only cost you that day, it '
    + 'costs you every day afterwards when you needed somebody to believe you. '
    + 'That is why honesty is worth more than what a lie would have gained.',

  recap:
    'You know what it feels like not to be believed when you were telling the '
    + 'truth. That feeling is what dishonesty costs, and it lasts.',

  method: [
    'Say what actually happened, even the part that makes you look bad.',
    'If something is not yours, give it back or hand it to an adult.',
    'If you broke something, say so before you are asked.',
    'If you have already lied, say so now. It only grows.',
  ],

  worked: [
    {
      level: 1,
      ask: 'You find fifty pesewas on the classroom floor. What do you do?',
      steps: [
        'It is not yours.',
        'Somebody lost it and may be looking for it.',
      ],
      answer: 'Give it to the teacher, or to whoever lost it.',
    },
    {
      level: 2,
      ask: 'You broke a cup and nobody saw. Why say so?',
      steps: [
        'It will be found out, and then you will be the one who broke it and '
          + 'hid it.',
        'Saying so now is only the broken cup.',
      ],
      answer: 'Because hiding it adds a second wrong to the first.',
    },
    {
      level: 3,
      ask: 'Telling the truth will get you punished. Is it still right?',
      steps: [
        'Yes, and this is the case that actually tests you.',
        'The punishment is for the thing you did, and it ends.',
        'Being known as somebody who lies does not end.',
      ],
      answer: 'Yes. The punishment passes. Not being believed does not.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking it is not a lie if nobody finds out.',
      why: 'You know. And the next lie is easier, which is how it grows.',
    },
    {
      mistake: 'Keeping something found because nobody claimed it yet.',
      why: 'Not claimed is not the same as not owned. Hand it in.',
    },
    {
      mistake: 'Telling part of the truth and leaving out the part that looks '
        + 'bad.',
      why: 'That is still meant to mislead, so it is still a lie.',
    },
  ],

  extension:
    'Courts, markets and friendships all run on people being believed. That is '
    + 'why giving false witness is treated so seriously in every faith and in '
    + 'the law: it damages something everybody depends on, not only the person '
    + 'lied about.',

  questions: [
    {
      id: 'hon-1',
      ask: 'You find money that is not yours. What should you do?',
      kind: 'choice',
      options: ['Keep it', 'Give it to a teacher', 'Hide it'],
      answer: 'Give it to a teacher',
      teach: 'Somebody lost it and may be looking for it. Not yet claimed is '
        + 'not the same as not owned.',
      level: 1,
    },
    {
      id: 'hon-2',
      ask: 'What does a lie that is found out cost you afterwards?',
      kind: 'choice',
      options: [
        'Nothing',
        'Being believed when you tell the truth',
        'Only that day',
      ],
      answer: 'Being believed when you tell the truth',
      teach: 'That is the real cost, and it lasts long after the punishment '
        + 'for whatever you were hiding.',
      level: 2,
    },
    {
      id: 'hon-3',
      ask: 'Is leaving out the part that makes you look bad still a lie?',
      kind: 'choice',
      options: ['Yes', 'No, you said nothing untrue'],
      answer: 'Yes',
      teach: 'It is meant to make somebody believe something untrue, which is '
        + 'what a lie is, whatever words were used.',
      level: 3,
    },
  ],
})

/* ── respect for others ───────────────────────────────────────────────────── */

teach({
  topicId: 'respect-and-obedience',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Respect is treating a person as somebody who matters. You show it to '
    + 'elders by greeting properly, listening, and doing what you are asked '
    + 'without arguing. You show it to children your own age by taking turns '
    + 'and not mocking them. You show it to people who are not like you by '
    + 'treating them exactly as carefully as you treat your own.',

  mechanism:
    'Respect is not the same as fear, and that difference matters. If you are '
    + 'only polite when somebody is watching, that is fear, and it stops the '
    + 'moment they look away. Respect is the way you behave when nobody is '
    + 'checking, and it is the only kind that is worth anything to the person '
    + 'receiving it.',

  recap:
    'You know greetings change for elders and for friends. That is respect '
    + 'already, in the one place you have practised it most.',

  method: [
    'Greet first, properly for who they are.',
    'Listen without interrupting, even if you disagree.',
    'Do what an elder asks, then ask why afterwards if you need to.',
    'Take turns with children your own age.',
    'Treat somebody from another faith or tribe exactly as you treat your own.',
  ],

  worked: [
    {
      level: 1,
      ask: 'An elder asks you to fetch water while you are playing. What do you '
        + 'do?',
      steps: [
        'Stop playing.',
        'Answer, and go.',
      ],
      answer: 'Go, and do it without complaining.',
    },
    {
      level: 2,
      ask: 'A new child in class speaks a different language at home. How do '
        + 'you treat him?',
      steps: [
        'He matters as much as anybody else in the class.',
        'Mocking the way he speaks says the opposite.',
      ],
      answer: 'Exactly as you treat everybody else. Include him.',
    },
    {
      level: 3,
      ask: 'An older child tells you to do something you know is wrong. Is '
        + 'obeying respect?',
      steps: [
        'Respect is for the person, not for every instruction they give.',
        'Doing a wrong thing harms somebody, which is the opposite of respect.',
        'Refuse politely, and tell a trusted adult.',
      ],
      answer: 'No. Say no politely and tell an adult you trust.',
    },
  ],

  traps: [
    {
      mistake: 'Being polite only while being watched.',
      why: 'That is fear, not respect, and it stops the moment nobody is '
        + 'looking.',
    },
    {
      mistake: 'Thinking respect means never disagreeing.',
      why: 'You may disagree. Do it after listening, and without rudeness.',
    },
    {
      mistake: 'Obeying an instruction to do something wrong.',
      why: 'Respect is owed to the person, not to every instruction. Refuse '
        + 'politely and tell an adult.',
    },
  ],

  extension:
    'Ghana has many languages, faiths and peoples living side by side, and '
    + 'that works because of ordinary daily respect far more than because of '
    + 'any law. Each person keeping it is what holds it up.',

  questions: [
    {
      id: 'res-1',
      ask: 'What is the first thing you do when you meet an elder?',
      kind: 'choice',
      options: ['Greet them', 'Wait', 'Ask for something'],
      answer: 'Greet them',
      teach: 'Greeting properly for who they are is the plainest way respect '
        + 'is shown in Ghana.',
      level: 1,
    },
    {
      id: 'res-2',
      ask: 'Being polite only when somebody is watching is...',
      kind: 'choice',
      options: ['Respect', 'Fear'],
      answer: 'Fear',
      teach: 'Respect is how you behave when nobody is checking. That is the '
        + 'only kind worth anything to the person receiving it.',
      level: 2,
    },
    {
      id: 'res-3',
      ask: 'An older child tells you to steal. What should you do?',
      kind: 'choice',
      options: [
        'Obey, because they are older',
        'Refuse politely and tell an adult',
        'Pretend not to hear',
      ],
      answer: 'Refuse politely and tell an adult',
      teach: 'Respect is owed to the person, not to every instruction. Doing '
        + 'the wrong thing harms somebody, which respect never asks for.',
      level: 3,
    },
  ],
})

/* ── work and its rewards ─────────────────────────────────────────────────── */

teach({
  topicId: 'hard-work',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Work is how things get made and how people are fed. All three faiths '
    + 'practised in Ghana speak well of honest work and badly of taking what '
    + 'you did not earn. At your age your work is your schoolwork and the jobs '
    + 'you are given at home, and doing them properly is the same habit as any '
    + 'other work.',

  mechanism:
    'The reward for work is usually not immediate, which is exactly what makes '
    + 'it hard. A farmer plants and waits months. You practise reading today '
    + 'and read easily next year. Because the reward is late, the only thing '
    + 'that gets you through is the habit of finishing what you started. The '
    + 'habit is the real skill, more than any single task.',

  recap:
    'You have finished something difficult before and felt the difference '
    + 'afterwards. That is the pattern this is about.',

  method: [
    'Start the task rather than thinking about it.',
    'Do it properly the first time, so it does not come back.',
    'Finish it before you go to play.',
    'If it is big, break it into parts and do one.',
    'Take care of the tools and the materials you were given.',
  ],

  worked: [
    {
      level: 1,
      ask: 'You were asked to sweep and you want to play. What comes first?',
      steps: [
        'The job was given to you.',
        'Playing after is better than playing with it hanging over you.',
      ],
      answer: 'Sweep first, then play.',
    },
    {
      level: 2,
      ask: 'A farmer plants maize and sees nothing for weeks. Why keep weeding?',
      steps: [
        'The reward comes at harvest, not now.',
        'Weeds take the water and the food from the maize while you wait.',
        'Stopping in the middle loses everything already put in.',
      ],
      answer: 'Because the reward is at the end, and stopping wastes all the '
        + 'work already done.',
    },
    {
      level: 3,
      ask: 'Why do all three faiths speak against taking what you did not earn?',
      steps: [
        'Somebody worked for that thing.',
        'Taking it takes their work, not only the object.',
        'And if everyone did it, nobody would work at all.',
      ],
      answer: 'Because it takes another person’s work, and it destroys the '
        + 'reason to work.',
    },
  ],

  traps: [
    {
      mistake: 'Doing a job badly so it is over quickly.',
      why: 'It comes back, and you do it twice. Doing it properly once is '
        + 'less work.',
    },
    {
      mistake: 'Waiting to feel like starting.',
      why: 'The feeling usually arrives after you start, not before.',
    },
    {
      mistake: 'Giving up because nothing has changed yet.',
      why: 'Most work pays late. Stopping in the middle loses everything '
        + 'already put in.',
    },
  ],

  extension:
    'Every trade you can see around you, the weaver, the mason, the seamstress, '
    + 'is somebody who practised one thing for years. Watching how long they '
    + 'took to become good at it tells you more about work than any saying '
    + 'about it.',

  questions: [
    {
      id: 'hw-1',
      ask: 'You were asked to sweep. When should you play?',
      kind: 'choice',
      options: ['Before sweeping', 'After sweeping', 'Instead of sweeping'],
      answer: 'After sweeping',
      teach: 'Finish what you were given first. Playing afterwards is better '
        + 'than playing with the job still waiting.',
      level: 1,
    },
    {
      id: 'hw-2',
      ask: 'Why is it hard to keep working when nothing has changed yet?',
      kind: 'choice',
      options: [
        'Because the reward comes later',
        'Because work is boring',
        'Because nobody is watching',
      ],
      answer: 'Because the reward comes later',
      teach: 'Most work pays late, like a farmer waiting for harvest. The '
        + 'habit of finishing is what carries you across the gap.',
      level: 2,
    },
    {
      id: 'hw-3',
      ask: 'Doing a job badly to finish quickly means...',
      kind: 'choice',
      options: ['You saved time', 'You will do it again', 'Nothing'],
      answer: 'You will do it again',
      teach: 'It comes back. Doing it properly once is less work than doing it '
        + 'badly twice.',
      level: 2,
    },
  ],
})

/* ── forgiveness and living together ──────────────────────────────────────── */

teach({
  topicId: 'forgiveness',
  source: 'WRITTEN',
  approved: true,

  idea:
    'People who live together quarrel, and the question is what happens next. '
    + 'Forgiving somebody means letting go of paying them back. All three '
    + 'faiths teach it, and in Ghana a quarrel is often settled with an elder '
    + 'sitting both sides down to hear each of them.',

  mechanism:
    'Paying back feels like justice, but it rarely ends there: the other '
    + 'person then has something to pay back too, and the quarrel keeps going '
    + 'long after what started it is forgotten. Forgiving is the only move '
    + 'that actually stops it, which is why it is treated as strength rather '
    + 'than as weakness.',

  recap:
    'You know how to speak respectfully even when you disagree. Settling a '
    + 'quarrel needs exactly that, from both sides.',

  method: [
    'Cool down before you speak. Nothing is settled while you are shouting.',
    'Say what the other person did, without insulting them.',
    'Listen to their side all the way through.',
    'If you were wrong, say sorry plainly and without excuses.',
    'If it will not settle between you, ask an elder or a teacher to sit you '
      + 'both down.',
  ],

  worked: [
    {
      level: 1,
      ask: 'You pushed a friend and he fell. What do you say?',
      steps: [
        'You were wrong.',
        'Say so plainly.',
      ],
      answer: 'Sorry, with no excuse added after it.',
    },
    {
      level: 2,
      ask: 'A friend broke your pencil. Why not break hers?',
      steps: [
        'Then she has something to pay back.',
        'And the quarrel keeps going, with two broken pencils.',
        'Nothing has been fixed.',
      ],
      answer: 'Because paying back keeps it going, and now you have both lost '
        + 'something.',
    },
    {
      level: 3,
      ask: 'Two children cannot settle a quarrel themselves. What is the '
        + 'Ghanaian way?',
      steps: [
        'An elder or teacher sits them both down.',
        'Each one speaks and each one is heard.',
        'Then it is settled, and both agree to leave it there.',
      ],
      answer: 'Somebody older hears both sides and settles it, and both let it '
        + 'go.',
    },
  ],

  traps: [
    {
      mistake: 'Saying sorry with "but" after it.',
      why: 'Everything before the "but" is cancelled by what follows it. Say '
        + 'sorry and stop.',
    },
    {
      mistake: 'Paying back to make it fair.',
      why: 'Now the other person has something to pay back too, and it never '
        + 'ends.',
    },
    {
      mistake: 'Agreeing to settle it and then telling everyone about it '
        + 'afterwards.',
      why: 'Settled means finished. Carrying it on in talk is carrying on the '
        + 'quarrel.',
    },
  ],

  extension:
    'Settling a dispute by having both sides heard by a respected person is '
    + 'how chiefs have resolved matters in Ghana for centuries, and it is '
    + 'still used beside the courts today. The reason it lasts is that both '
    + 'sides leave having been listened to.',

  questions: [
    {
      id: 'for-1',
      ask: 'What should you do first when you are angry?',
      kind: 'choice',
      options: ['Cool down', 'Shout', 'Pay them back'],
      answer: 'Cool down',
      teach: 'Nothing gets settled while anybody is shouting. Cooling down '
        + 'first is what makes the rest possible.',
      level: 1,
    },
    {
      id: 'for-2',
      ask: 'Why not break her pencil because she broke yours?',
      kind: 'choice',
      options: [
        'Then she owes you nothing',
        'It keeps the quarrel going',
        'Pencils are expensive',
      ],
      answer: 'It keeps the quarrel going',
      teach: 'Paying back gives the other person something to pay back, and '
        + 'now two things are broken and nothing is fixed.',
      level: 2,
    },
    {
      id: 'for-3',
      ask: 'What is wrong with saying "sorry, but you started it"?',
      kind: 'choice',
      options: [
        'Nothing',
        'The "but" cancels the sorry',
        'It is too short',
      ],
      answer: 'The "but" cancels the sorry',
      teach: 'Everything before the "but" is undone by what comes after it. '
        + 'Say sorry and stop there.',
      level: 3,
    },
  ],
})
