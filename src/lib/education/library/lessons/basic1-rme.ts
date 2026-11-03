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

  why:
    'At night you look up. '
    + 'You see the moon. You see many stars. '
    + 'You ask your grandmother who put them there. '
    + 'She tells you a story. '
    + 'Your friend asks at her house and hears a different story. '
    + 'Which story do you learn in school?',

  idea:
    'Every faith tells how the world began. '
    + 'Christians are taught that God made the world in six days, '
    + 'and rested on the seventh. '
    + 'Muslims are taught that Allah made the heavens and the earth '
    + 'and all that is in them. '
    + 'In Ghanaian traditional religion, Onyame made all things.',

  mechanism:
    'These stories are not the same. '
    + 'They were never meant to be. '
    + 'Each one belongs to its own people. '
    + 'Each is told that people’s own way. '
    + 'But they all answer one question. The same question. '
    + 'That is why you can learn them side by side.',

  recap:
    'In Ghana some people are Christians. '
    + 'Some people are Muslims. '
    + 'Some follow the religion of their grandfathers. '
    + 'They pray in different places. '
    + 'A story that tells where something came from is called an account. '
    + 'Today you hear the account each of them gives '
    + 'of how the world began.',

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
    'Almost every people on earth tells a creation story. '
    + 'Not just the ones here in Ghana. All of them. '
    + 'So people everywhere ask the same question. '
    + 'Why does everyone ask it? That is a big question on its own.',

  figure: {
    alt: 'Three pictures in a row: a book marked the Bible, a book marked '
      + 'the Qur’an, and an elder standing with a child. Arrows run '
      + 'down from all three into one box that reads how the world began, '
      + 'with a note that all three answer this.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">Where the account is kept</text>'
      + '<rect x="60" y="62" width="120" height="90"/>'
      + '<line x1="120" y1="62" x2="120" y2="152"/>'
      + '<text x="120" y="182" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">the Bible</text>'
      + '<rect x="260" y="62" width="120" height="90"/>'
      + '<line x1="320" y1="62" x2="320" y2="152"/>'
      + '<text x="320" y="182" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">the Qur’an</text>'
      + '<circle cx="490" cy="84" r="22"/>'
      + '<line x1="490" y1="106" x2="490" y2="152"/>'
      + '<circle cx="550" cy="106" r="15"/>'
      + '<line x1="550" y1="121" x2="550" y2="152"/>'
      + '<line x1="462" y1="152" x2="578" y2="152"/>'
      + '<text x="520" y="182" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">an elder telling</text>'
      + '<line x1="120" y1="196" x2="214" y2="234"/>'
      + '<polygon points="224,238 208,230 212,244" fill="currentColor" stroke="none"/>'
      + '<line x1="320" y1="196" x2="320" y2="234"/>'
      + '<polygon points="320,244 312,230 328,230" fill="currentColor" stroke="none"/>'
      + '<line x1="520" y1="196" x2="426" y2="234"/>'
      + '<polygon points="416,238 432,230 428,244" fill="currentColor" stroke="none"/>'
      + '<rect x="100" y="252" width="440" height="100" stroke="#0f8a4d"/>'
      + '<text x="320" y="296" font-size="21" text-anchor="middle" fill="#0f8a4d" stroke="none">how the world began</text>'
      + '<text x="320" y="330" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">all three answer this</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Where each faith keeps its account of creation',
    columns: ['Faith', 'Who it names as creator', 'How the account is kept'],
    rows: [
      ['Christianity', 'God', 'Written in the Bible, read aloud'],
      ['Islam', 'Allah', 'Written in the Qur’an, read aloud'],
      [
        'Ghanaian traditional religion',
        'Onyame',
        'Spoken by elders to children',
      ],
    ],
  }],

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
    'All three faiths here teach the same thing. '
    + 'The world is not ours to spoil. '
    + 'Christians and Muslims teach that the earth was given to us. '
    + 'We are to look after it. '
    + 'And one day we will answer for how we treated it. '
    + 'In Ghanaian traditional religion some rivers are sacred. '
    + 'So are some groves, and some days. '
    + 'To harm them is a serious wrong.',

  mechanism:
    'The words differ. The reason is the same. '
    + 'The world was given to us. We did not earn it. '
    + 'So we hold it in trust. We do not own it. '
    + 'When you hold a thing in trust, you must hand it on in good shape. '
    + 'That is why all three see spoiling the land as a wrong. '
    + 'A wrong against someone, not just waste.',

  recap:
    'Borrow a thing and you give it back as you found it. '
    + 'You already know that rule. '
    + 'This is the same rule, about something much bigger.',

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
    'Ghana has old rules worth looking at. '
    + 'A day when no one farms. '
    + 'A stretch of river where no one fishes. '
    + 'They give the land and the fish time to recover. '
    + 'Science has a name for this now. A closed season. '
    + 'People here were doing it long before it had a name.',

  figure: {
    alt: 'Two pictures of a house beside a gutter. In the first the '
      + 'gutter is clear and an arrow shows the rain running away along '
      + 'it. In the second the gutter is blocked with rubbish, and an '
      + 'arrow shows the water turning back and going into the house. '
      + 'Underneath, a note that every blocked gutter is made of single '
      + 'pieces of rubbish, and that yours is one of them.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">One piece of rubbish, and the gutter</text>'
      + '<rect x="20" y="52" width="290" height="208" stroke="#0f8a4d"/>'
      + '<text x="165" y="80" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">a clear gutter</text>'
      + '<polygon points="44,124 74,100 104,124" fill="none"/>'
      + '<rect x="44" y="124" width="60" height="56"/>'
      + '<line x1="44" y1="192" x2="286" y2="192"/>'
      + '<line x1="44" y1="220" x2="286" y2="220"/>'
      + '<line x1="130" y1="206" x2="252" y2="206" stroke="#0f8a4d"/>'
      + '<polygon points="262,206 246,198 246,214" fill="#0f8a4d" stroke="none"/>'
      + '<text x="165" y="248" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">the rain runs away</text>'
      + '<rect x="330" y="52" width="290" height="208" stroke="#c8433a"/>'
      + '<text x="475" y="80" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">a blocked gutter</text>'
      + '<polygon points="354,124 384,100 414,124" fill="none"/>'
      + '<rect x="354" y="124" width="60" height="56"/>'
      + '<line x1="354" y1="192" x2="596" y2="192"/>'
      + '<line x1="354" y1="220" x2="596" y2="220"/>'
      + '<circle cx="510" cy="206" r="10" stroke="#c8433a"/>'
      + '<circle cx="534" cy="206" r="10" stroke="#c8433a"/>'
      + '<circle cx="556" cy="204" r="8" stroke="#c8433a"/>'
      + '<polyline points="490,206 400,206 400,176" stroke="#c8433a"/>'
      + '<polygon points="400,166 392,182 408,182" fill="#c8433a" stroke="none"/>'
      + '<text x="475" y="248" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">the water goes into the house</text>'
      + '<text x="320" y="304" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Every blocked gutter is made of</text>'
      + '<text x="320" y="332" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">single pieces of rubbish.</text>'
      + '<text x="320" y="374" font-size="19" text-anchor="middle" fill="#0f8a4d" stroke="none">Yours is one of them.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Things near you, what spoils them, and who is harmed',
    columns: ['The thing', 'What spoils it', 'Who is harmed'],
    rows: [
      ['A gutter', 'Rubbish thrown in', 'The homes it floods'],
      ['A stream', 'Washing and soap in it', 'Everybody who drinks it'],
      ['A tree', 'Cutting it down', 'Everybody who sat in the shade'],
      ['Good soil', 'Burning the grass off it', 'The farmer next year'],
    ],
    note: 'The person harmed is often somebody you will never meet. That '
      + 'is what makes it a wrong, and not only waste.',
  }],

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
    'Worship is how people show honour to God. '
    + 'Christians meet in a church, mostly on Sunday. '
    + 'They pray, they sing, and they hear the Bible read. '
    + 'Muslims pray five times a day, facing Mecca. '
    + 'On Friday they meet at the mosque. '
    + 'In Ghanaian traditional religion there is prayer too. '
    + 'An elder pours libation. People bring offerings. '
    + 'It happens at a shrine, or when the family gathers.',

  mechanism:
    'What people do is different. But the shape is the same. '
    + 'A time is set apart. A place is set apart. '
    + 'Words are said. And something is given up. '
    + 'It may be money. It may be food. '
    + 'It may just be the time itself. '
    + 'Setting a time and a place apart is what makes it worship. '
    + 'Without that it is only a passing thought. '
    + 'That is why every faith has both.',

  recap:
    'You greet a friend one way. You greet an elder another way. '
    + 'Worship is a way of showing honour too. '
    + 'It has its own words. It has its own manners.',

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
    'Many families in Ghana hold more than one faith. '
    + 'They make it work in a simple way. They guard each other’s times. '
    + 'Nobody calls you away during Friday prayer. '
    + 'Nobody calls you away during Sunday service. '
    + 'That is respect you can see.',

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
    'A festival is a special day. It comes once every year. '
    + 'It helps people remember something big. '
    + 'Christians, Muslims and the peoples of Ghana '
    + 'each keep their own festivals.',

  mechanism:
    'A festival works because it comes back. '
    + 'Same day. Every year. So nobody forgets. '
    + 'Children see it, year after year. That is how they learn it. '
    + 'Nobody has to sit them down and teach it. '
    + 'The food and the clothes are not extra. '
    + 'They are what makes the day stick in your head.',

  recap:
    'Your family comes together on special days. '
    + 'A festival is the same thing. But it is a whole town. '
    + 'And it is the same day every year.',

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
    'Many festivals in Ghana come at harvest time. '
    + 'There is a good reason. That is when there is food to share. '
    + 'And a good crop is a thing to thank God for. '
    + 'The farming year and the festival year move together.',

  figure: {
    alt: 'Three boxes in a row standing for this year, next year and the '
      + 'year after. Each box has a dot marked at the same place along it, '
      + 'and each dot is labelled Homowo. Arrows run from one box to the '
      + 'next. Underneath, a note that you see it again and again, and '
      + 'that this is how you learn it without anybody teaching you.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="34" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">The same day, every year</text>'
      + '<rect x="30" y="92" width="180" height="70"/>'
      + '<text x="120" y="120" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">this year</text>'
      + '<circle cx="165" cy="144" r="10" fill="#0f8a4d" stroke="#0f8a4d"/>'
      + '<text x="165" y="190" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">Homowo</text>'
      + '<line x1="214" y1="127" x2="222" y2="127"/>'
      + '<polygon points="232,127 218,120 218,134" fill="currentColor" stroke="none"/>'
      + '<rect x="230" y="92" width="180" height="70"/>'
      + '<text x="320" y="120" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">next year</text>'
      + '<circle cx="365" cy="144" r="10" fill="#0f8a4d" stroke="#0f8a4d"/>'
      + '<text x="365" y="190" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">Homowo</text>'
      + '<line x1="414" y1="127" x2="422" y2="127"/>'
      + '<polygon points="432,127 418,120 418,134" fill="currentColor" stroke="none"/>'
      + '<rect x="430" y="92" width="180" height="70"/>'
      + '<text x="520" y="120" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the year after</text>'
      + '<circle cx="565" cy="144" r="10" fill="#0f8a4d" stroke="#0f8a4d"/>'
      + '<text x="565" y="190" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">Homowo</text>'
      + '<text x="320" y="258" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">You see it again and again.</text>'
      + '<text x="320" y="306" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">That is how you learn it,</text>'
      + '<text x="320" y="336" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">without anybody teaching you.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Festivals kept in Ghana, and what each one remembers',
    columns: ['Festival', 'Whose it is', 'What it remembers'],
    rows: [
      ['Christmas', 'Christians', 'The birth of Jesus'],
      ['Easter', 'Christians', 'His death and his rising'],
      ['Eid al-Fitr', 'Muslims', 'The end of the fasting month'],
      ['Eid al-Adha', 'Muslims', 'How Ibrahim obeyed Allah'],
      ['Homowo', 'The Ga people', 'Living through a hungry time'],
      ['Odwira', 'The Akan people', 'Thanks for the harvest'],
    ],
  }],

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
    'Christians follow the teaching of Jesus Christ. '
    + 'Muslims follow the teaching brought by the Prophet Muhammad, '
    + 'peace be upon him. '
    + 'Ghanaian traditional religion has no one founder. '
    + 'It has been passed down by elders, priests and families.',

  mechanism:
    'Some faiths have a founder. Some do not. '
    + 'That changes how the faith is carried. '
    + 'A faith with a founder keeps his words. '
    + 'People go back to those words again and again. '
    + 'A faith without one keeps its teaching another way. '
    + 'It lives in what people do and what they say. '
    + 'That is why elders matter so much there. '
    + 'The teaching is stored in them.',

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

  figure: {
    alt: 'Two panels. In the first, headed a faith with a founder, a '
      + 'person stands beside a book, and an arrow runs from the person to '
      + 'the book, which is labelled his words, written. In the second, '
      + 'headed a faith with no founder, three people stand in a line '
      + 'labelled elder, parent and child, with arrows passing along from '
      + 'one to the next. Underneath, a note that both ways carry the '
      + 'teaching and only store it in different places.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">Two ways a teaching is carried</text>'
      + '<rect x="20" y="54" width="290" height="212"/>'
      + '<text x="165" y="84" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">a faith with a founder</text>'
      + '<circle cx="80" cy="132" r="24"/>'
      + '<line x1="80" y1="156" x2="80" y2="198"/>'
      + '<line x1="112" y1="152" x2="152" y2="152"/>'
      + '<polygon points="162,152 148,145 148,159" fill="currentColor" stroke="none"/>'
      + '<rect x="172" y="120" width="100" height="64"/>'
      + '<line x1="222" y1="120" x2="222" y2="184"/>'
      + '<text x="222" y="212" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">his words, written</text>'
      + '<text x="165" y="246" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">people go back to the words</text>'
      + '<rect x="330" y="54" width="290" height="212"/>'
      + '<text x="475" y="84" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">a faith with no founder</text>'
      + '<circle cx="390" cy="130" r="24"/>'
      + '<circle cx="475" cy="134" r="20"/>'
      + '<circle cx="556" cy="138" r="16"/>'
      + '<line x1="418" y1="131" x2="446" y2="133"/>'
      + '<polygon points="456,133 442,126 441,140" fill="currentColor" stroke="none"/>'
      + '<line x1="498" y1="135" x2="528" y2="137"/>'
      + '<polygon points="538,137 524,130 523,144" fill="currentColor" stroke="none"/>'
      + '<text x="390" y="184" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">elder</text>'
      + '<text x="475" y="184" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">parent</text>'
      + '<text x="556" y="184" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">child</text>'
      + '<text x="475" y="246" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">the teaching lives in people</text>'
      + '<text x="320" y="316" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Both ways carry the teaching.</text>'
      + '<text x="320" y="356" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">They store it in different places.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Who each faith follows, and one thing that is taught',
    columns: ['Faith', 'Who it follows', 'One thing taught'],
    rows: [
      [
        'Christianity',
        'Jesus Christ',
        'Love your neighbour as you love yourself',
      ],
      [
        'Islam',
        'The Prophet Muhammad, peace be upon him',
        'There is one God, and mercy is owed to others',
      ],
      [
        'Ghanaian traditional religion',
        'No one founder',
        'Passed on by elders, priests and families',
      ],
    ],
  }],

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
    'Being honest means two things. '
    + 'You say what is true. And you give back what is not yours. '
    + 'You do it even when nobody would ever know. '
    + 'All three faiths teach this. '
    + 'And you can see why on your own. '
    + 'People believe a person who tells the truth. '
    + 'Once you are caught in a lie, they stop believing you. '
    + 'Even when you are telling the truth.',

  mechanism:
    'That last part is the whole reason. '
    + 'Being believed takes a long time to build, and one day to lose. '
    + 'So a lie does not just cost you the day you told it. '
    + 'It costs you every day after, when you need someone to believe '
    + 'you.',

  recap:
    'You told the truth once and nobody believed you. '
    + 'Remember how that felt. '
    + 'That feeling is what lying costs. And it lasts a long time.',

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

  figure: {
    alt: 'A line showing how much people believe you, rising slowly step '
      + 'by step across many days, then dropping straight to the bottom at '
      + 'one lie, then rising slowly again from there. The slow climb is '
      + 'labelled built slowly, day by day, the drop is labelled one lie, '
      + 'lost in a day, and the second climb is labelled and slow all over '
      + 'again. Underneath, a note that a lie never wins you as much as it '
      + 'takes away.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">Being believed</text>'
      + '<text x="60" y="58" font-size="14" text-anchor="start" fill="currentColor" stroke="none">how much people believe you</text>'
      + '<line x1="60" y1="70" x2="60" y2="300"/>'
      + '<line x1="60" y1="300" x2="600" y2="300"/>'
      + '<polyline points="60,292 110,262 160,228 210,192 260,152 300,112" stroke="#0f8a4d"/>'
      + '<text x="92" y="112" font-size="15" text-anchor="start" fill="#0f8a4d" stroke="none">built slowly,</text>'
      + '<text x="92" y="136" font-size="15" text-anchor="start" fill="#0f8a4d" stroke="none">day by day</text>'
      + '<line x1="300" y1="112" x2="300" y2="292" stroke="#c8433a"/>'
      + '<polygon points="300,296 292,280 308,280" fill="#c8433a" stroke="none"/>'
      + '<text x="314" y="196" font-size="15" text-anchor="start" fill="#c8433a" stroke="none">one lie,</text>'
      + '<text x="314" y="220" font-size="15" text-anchor="start" fill="#c8433a" stroke="none">lost in a day</text>'
      + '<polyline points="300,292 360,282 420,268 480,252 540,238 600,222"/>'
      + '<text x="470" y="186" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">and slow all over again</text>'
      + '<text x="320" y="348" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">A lie never wins you as much</text>'
      + '<text x="320" y="378" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">as it takes away.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'What each choice costs today, and what it costs afterwards',
    columns: ['What you did', 'What it costs today', 'What it costs after'],
    rows: [
      ['Broke a cup and said so', 'You are told off once', 'Nothing, it is over'],
      ['Broke a cup and hid it', 'Nothing today', 'Being the one who hid it'],
      ['Told the truth and were punished', 'The punishment', 'Nothing, it ends'],
      ['Told a lie and were caught', 'Nothing today', 'Nobody believes you'],
    ],
    note: 'Look down the last column. That is the one that lasts.',
  }],

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
    'Respect means you treat a person as someone who matters. '
    + 'It looks a little different with an elder '
    + 'and with a child your own age. '
    + 'With somebody who is not like you, it does not change at all.',

  mechanism:
    'Respect is not the same as fear. That matters. '
    + 'Are you only polite when someone is watching? '
    + 'Then it is fear, not respect. '
    + 'It stops the moment they look away. '
    + 'Respect is how you act when nobody is checking. '
    + 'That is the only kind worth having.',

  recap:
    'You greet an elder one way. You greet a friend another way. '
    + 'That is respect already. '
    + 'You have practised it more than you think.',

  method: [
    'Greet first, properly for who they are.',
    'Listen without interrupting, even if you disagree.',
    'Do what an elder asks, then ask why afterwards if you need to.',
    'If what you are asked is wrong, say no politely and tell an adult.',
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
    'Ghana has many languages. Many faiths. Many peoples. '
    + 'They live side by side. '
    + 'What makes that work is not a law. '
    + 'It is plain daily respect. '
    + 'Each person keeping it is what holds it up.',

  figure: {
    alt: 'Two panels. In the panel headed respect, the answer is polite '
      + 'both when somebody is watching and when nobody is watching. In '
      + 'the panel headed fear, the answer is polite when somebody is '
      + 'watching and not polite when nobody is watching. Underneath, a '
      + 'note to watch what you do when nobody is checking, because that '
      + 'is the real answer.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">Respect, or fear?</text>'
      + '<rect x="20" y="56" width="290" height="204" stroke="#0f8a4d"/>'
      + '<text x="165" y="86" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">respect</text>'
      + '<text x="165" y="124" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">somebody watching:</text>'
      + '<text x="165" y="154" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">polite</text>'
      + '<text x="165" y="196" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">nobody watching:</text>'
      + '<text x="165" y="226" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">polite</text>'
      + '<rect x="330" y="56" width="290" height="204" stroke="#c8433a"/>'
      + '<text x="475" y="86" font-size="18" text-anchor="middle" fill="#c8433a" stroke="none">fear</text>'
      + '<text x="475" y="124" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">somebody watching:</text>'
      + '<text x="475" y="154" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">polite</text>'
      + '<text x="475" y="196" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">nobody watching:</text>'
      + '<text x="475" y="226" font-size="20" text-anchor="middle" fill="#c8433a" stroke="none">not polite</text>'
      + '<text x="320" y="308" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Watch what you do when</text>'
      + '<text x="320" y="336" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">nobody is checking.</text>'
      + '<text x="320" y="378" font-size="19" text-anchor="middle" fill="#0f8a4d" stroke="none">That is the real answer.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'What respect looks like with different people',
    columns: ['Who you are with', 'What you do', 'What you never do'],
    rows: [
      ['An elder', 'Greet them, and listen', 'Argue back at once'],
      ['A child your own age', 'Take turns', 'Mock them'],
      [
        'A new child from elsewhere',
        'The same as everybody else',
        'Treat them as less',
      ],
      [
        'Somebody of another faith',
        'The same as your own',
        'Leave them outside',
      ],
    ],
    note: 'The middle column changes with who you are with. It never '
      + 'changes because of where somebody is from.',
  }],

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
    'Work is how things get made. It is how people are fed. '
    + 'All three faiths here speak well of honest work. '
    + 'They speak badly of taking what you did not earn. '
    + 'Your work right now is your schoolwork. '
    + 'And the jobs you are given at home. '
    + 'Doing those properly builds the very same habit.',

  mechanism:
    'Work does not pay you back straight away. '
    + 'That is what makes it hard. '
    + 'A farmer plants, then waits months. '
    + 'You practise reading today and read well next year. '
    + 'The reward comes late. So what carries you through? '
    + 'One habit. Finishing what you started. '
    + 'That habit is the real skill. More than any one task.',

  recap:
    'You have finished something hard before. '
    + 'You felt different after. That is what this is about.',

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
      why: 'The job is still there tomorrow, and now you do it twice.',
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
    'Look at the weaver. The mason. The seamstress. '
    + 'Each one practised a single thing for years. '
    + 'Ask how long it took them to get good. '
    + 'Their answer teaches you more about work than any saying.',

  figure: {
    alt: 'Two long lines, one for a farmer and one for you. On the '
      + 'farmer’s line, plant is marked at the near end and harvest at '
      + 'the far end, with the whole gap between them labelled nothing to '
      + 'see yet. On your line, practise reading today is at the near end '
      + 'and read well next year at the far end, with the same gap between '
      + 'them. Underneath, a note that one habit carries you across, which '
      + 'is finishing what you started.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">The reward comes late</text>'
      + '<text x="320" y="64" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">a farmer</text>'
      + '<text x="330" y="96" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">nothing to see yet</text>'
      + '<line x1="60" y1="112" x2="600" y2="112"/>'
      + '<line x1="60" y1="100" x2="60" y2="124"/>'
      + '<line x1="600" y1="100" x2="600" y2="124"/>'
      + '<text x="60" y="146" font-size="15" text-anchor="start" fill="currentColor" stroke="none">plant</text>'
      + '<text x="600" y="146" font-size="15" text-anchor="end" fill="#0f8a4d" stroke="none">harvest</text>'
      + '<text x="320" y="200" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">you</text>'
      + '<text x="330" y="232" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">nothing to see yet</text>'
      + '<line x1="60" y1="248" x2="600" y2="248"/>'
      + '<line x1="60" y1="236" x2="60" y2="260"/>'
      + '<line x1="600" y1="236" x2="600" y2="260"/>'
      + '<text x="60" y="282" font-size="15" text-anchor="start" fill="currentColor" stroke="none">practise reading today</text>'
      + '<text x="600" y="282" font-size="15" text-anchor="end" fill="#0f8a4d" stroke="none">read well next year</text>'
      + '<text x="320" y="338" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">One habit carries you across:</text>'
      + '<text x="320" y="374" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">finishing what you started.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Two ways to do a job, and what happens after',
    columns: ['The job', 'Done quickly and badly', 'Done properly once'],
    rows: [
      ['Sweeping the room', 'You sweep it again tomorrow', 'It is finished'],
      ['Washing a pot', 'Somebody hands it back', 'It is put away'],
      ['Your homework', 'The teacher sets it again', 'You have learned it'],
      ['Weeding the farm', 'The weeds take the maize', 'The maize grows'],
    ],
    note: 'The last column is less work in the end, every single time.',
  }],

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
    'People who live together will quarrel. That is normal. '
    + 'The real question is what happens next. '
    + 'Forgiving means you let go of paying them back. '
    + 'All three faiths teach it. '
    + 'In Ghana an elder often settles a quarrel. '
    + 'They sit both sides down and hear each one.',

  mechanism:
    'Paying back feels fair. But look at what happens next. '
    + 'Now the other person has something to pay back too, '
    + 'and the quarrel runs on and on. '
    + 'In the end nobody even remembers how it started. '
    + 'Forgiving is the only move that stops it. '
    + 'That is why it takes strength, not weakness.',

  recap:
    'You can speak with respect even when you do not agree. '
    + 'Settling a quarrel needs exactly that. From both sides.',

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
    'Two people quarrel. A chief sits and hears them both. '
    + 'Chiefs in Ghana have settled matters this way for hundreds of years. '
    + 'It is still used today, beside the courts. '
    + 'Why does it last? Because both sides get to speak. '
    + 'Both sides are heard. That is what makes it hold.',

  figure: {
    alt: 'On the left, a loop with you hit back written at the top and '
      + 'they hit back at the bottom, with arrows carrying it round, '
      + 'labelled round and round. On the right, you forgive with a '
      + 'straight arrow running down into a solid bar, labelled it stops. '
      + 'Underneath, a note that in the end nobody even remembers how it '
      + 'started, and that this is why forgiving takes strength.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">Paying back never ends</text>'
      + '<ellipse cx="170" cy="162" rx="110" ry="80" stroke="#c8433a"/>'
      + '<text x="170" y="108" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">you hit back</text>'
      + '<text x="170" y="226" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">they hit back</text>'
      + '<polygon points="60,146 52,162 68,162" fill="#c8433a" stroke="none"/>'
      + '<polygon points="280,178 272,162 288,162" fill="#c8433a" stroke="none"/>'
      + '<text x="170" y="274" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">round and round</text>'
      + '<text x="470" y="108" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">you forgive</text>'
      + '<line x1="470" y1="126" x2="470" y2="198" stroke="#0f8a4d"/>'
      + '<polygon points="470,212 462,194 478,194" fill="#0f8a4d" stroke="none"/>'
      + '<line x1="408" y1="222" x2="532" y2="222" stroke="#0f8a4d" stroke-width="7"/>'
      + '<text x="470" y="262" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">it stops</text>'
      + '<text x="320" y="318" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">In the end nobody even remembers</text>'
      + '<text x="320" y="346" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">how it started.</text>'
      + '<text x="320" y="384" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">That is why forgiving takes strength.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'What you do next after a quarrel, and where it ends',
    columns: [
      'What you do next',
      'What they can do next',
      'Where it ends',
    ],
    rows: [
      ['Pay them back', 'Pay you back', 'It does not end'],
      ['Say nothing and keep it', 'Nothing, and wait', 'It waits for later'],
      [
        'Say sorry, with a but after it',
        'Argue with the but',
        'Back where you started',
      ],
      ['Say sorry, and stop there', 'Accept it', 'It is finished'],
      [
        'Ask an elder to hear you both',
        'Speak, and be heard',
        'Settled, and both let go',
      ],
    ],
    note: 'Two of these five finish it. The other three keep it alive.',
  }],

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
