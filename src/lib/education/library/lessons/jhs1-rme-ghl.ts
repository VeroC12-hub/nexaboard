/**
 * Stored lessons for JHS 1 Religious and Moral Education, and Ghanaian
 * Language.
 *
 * Written at about grade 6 to 7, with a `brief` form on every topic.
 *
 * ── RME: three faiths, described and not ranked ────────────────────────────
 *
 * The syllabus asks a learner to compare what Christianity, Islam and
 * African Traditional Religion teach. A lesson can only do that honestly by
 * reporting each as its own followers state it, in its own words, and never
 * settling which is correct. So these two topics describe and compare, they
 * do not adjudicate, and where the three agree that is said plainly, because
 * the agreement is itself one of the findings.
 *
 * A learner of any of the three, or of none, must be able to read these and
 * find their own tradition stated fairly.
 *
 * ── GHL: the language the school teaches, whichever it is ──────────────────
 *
 * Which Ghanaian language a child learns depends on where their school is,
 * and the app does not know. Same approach as the Basic lessons: teach what
 * holds across the written languages of Ghana, and name any particular form
 * as an example together with the language it comes from, so nothing is
 * asserted of a language it is not true of.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── teachings on creation ──────────────────────────────────────────────── */

teach({
  topicId: 'creation-teachings',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'All three faiths teach that the world was made by God on purpose, '
      + 'and that people are given it to look after. '
      + 'They differ in the account: '
      + 'Christianity uses the six days of Genesis, '
      + 'Islam teaches creation by God’s command in six periods, '
      + 'and African Traditional Religion teaches a Supreme Being who '
      + 'created and then set the world in order.',
    method: [
      'State what the three agree on first.',
      'Then give each account in its own words.',
      'Finish with the duty each draws from it.',
    ],
  },

  why:
    'Behind your school a stream has been filling up with rubbish '
    + 'and the water has turned brown. '
    + 'At a durbar a pastor, an imam and the queen mother '
    + 'are each asked to speak about it. '
    + 'All three say the dumping must stop. '
    + 'All three begin their reason with how the world was made. '
    + 'But the three creation accounts are told as different stories. '
    + 'So why do three different accounts '
    + 'end in the same instruction about one stream?',

  idea:
    'The three faiths of Ghana all hold that the world did not come '
    + 'about by itself. '
    + 'It was made, by God, on purpose, '
    + 'and human beings are placed in it as caretakers rather than owners. '
    + 'That much the three share, '
    + 'and it is the part a comparison question is usually after. '
    + 'What differs is the telling: '
    + 'the name used for God, the shape the account takes, '
    + 'and the duty each one draws out of it.',

  mechanism:
    'The useful question is not which account came first or which is right. '
    + 'It is what each account is for. '
    + 'Look at what all three draw from it, '
    + 'because that is where they meet. '
    + 'If the world was made on purpose, it is not an accident, '
    + 'so it is not yours to waste. '
    + 'If people were given it to keep, '
    + 'then cutting a forest down to the last tree or poisoning a river is '
    + 'a wrong done to the one who gave it, '
    + 'and not merely a poor decision. '
    + 'All three say this, in their own words, and that agreement is a '
    + 'finding worth stating. '
    + 'So when a question asks you to compare, '
    + 'give the agreement, then the accounts, then the duty, '
    + 'and do not use the comparison to rank them.',

  recap:
    'Three faiths are followed across Ghana: '
    + 'Christianity, Islam and African Traditional Religion. '
    + 'Each one has an account of how the world began. '
    + 'Christians read in Genesis that God made the world in six days '
    + 'and rested on the seventh. '
    + 'Muslims hold that Allah created the heavens and the earth '
    + 'by His command, in six periods. '
    + 'In Akan tradition Onyame made all things '
    + 'and then set them in order. '
    + 'This lesson puts the three side by side '
    + 'and asks what each one says about how people should treat '
    + 'the world.',

  method: [
    'Say what the three agree on: '
      + 'the world was made by God, on purpose, and entrusted to people.',
    'Give the Christian account from Genesis: six days, then rest.',
    'Give the Islamic account: creation by God’s command, in six periods.',
    'Give the traditional account: a Supreme Being who created and ordered '
      + 'all things.',
    'Use each faith’s own words for God where you can.',
    'Finish with the duty each draws: care for what was given.',
    'Describe. Do not rank one above another.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which book holds the Christian account of creation?',
      steps: [
        'It is the first book of the Bible.',
      ],
      answer: 'Genesis.',
    },
    {
      level: 4,
      ask: 'Give one thing all three faiths agree on about creation.',
      steps: [
        'Set the three accounts side by side.',
        'Look for what each one asserts.',
      ],
      answer: 'That the world was made by God on purpose, '
        + 'and that human beings are to care for it rather than own it. '
        + 'Any of those three points is acceptable.',
    },
    {
      level: 5,
      ask: 'How does a teaching about creation lead to a duty about the '
        + 'environment?',
      steps: [
        'If the world was made on purpose, it is not an accident.',
        'If people were given it to keep, they are answerable for it.',
        'So damage to it is a wrong done to the one who gave it.',
      ],
      answer: 'Because all three teach that the world was given to people '
        + 'to look after. '
        + 'Destroying a forest or poisoning a river is then a wrong against '
        + 'the giver, not only a bad choice.',
    },
  ],

  traps: [
    {
      mistake: 'Answering a comparison question by saying which faith is '
        + 'right.',
      why: 'The question asks what each teaches. '
        + 'Ranking them answers a question nobody asked and earns nothing.',
    },
    {
      mistake: 'Saying African Traditional Religion has no creator.',
      why: 'It teaches a Supreme Being who created all things. '
        + 'The lesser spirits and ancestors stand under him, not instead of '
        + 'him.',
    },
    {
      mistake: 'Giving only the agreement, or only the differences.',
      why: 'A comparison needs both. '
        + 'State what is shared, then what differs.',
    },
  ],

  extension:
    'Each faith also teaches about the purpose of the human being, '
    + 'and the three answers follow from the three accounts: '
    + 'made in God’s image, appointed as trustee, '
    + 'and placed in a created order with duties to the living and the '
    + 'dead.',

  tables: [
    {
      caption: 'How the three faiths taught in Ghana tell the creation of '
        + 'the world',
      columns: [
        'Faith',
        'Name used for God',
        'How the account runs',
        'Duty it draws',
      ],
      rows: [
        [
          'Christianity',
          'God',
          'Genesis: creation over six days, rest on the seventh, '
            + 'and the human being made in God’s own image',
          'Care for the earth, as one made in the image of the one who '
            + 'made it',
        ],
        [
          'Islam',
          'Allah',
          'Creation of the heavens and the earth in six periods by God’s '
            + 'command: he says be, and it is',
          'Act as God’s trustee on earth',
        ],
        [
          'African Traditional Religion',
          'Onyame, Mawu, Nyonmo, and other names in other languages',
          'A Supreme Being created all that exists and set it in order, '
            + 'with lesser spirits and the ancestors under him',
          'Keep the order that was set, towards the living and the dead',
        ],
      ],
      note: 'The first three columns differ in every row. '
        + 'The last one does not, and that is the whole result of the '
        + 'comparison.',
    },
  ],

  questions: [
    {
      id: 'cre-1',
      ask: 'In the Christian account, how many days does creation take?',
      kind: 'choice',
      options: ['Six, with rest on the seventh', 'Seven', 'Three'],
      answer: 'Six, with rest on the seventh',
      teach: 'Genesis gives six days of creation and rest on the seventh.',
      level: 3,
    },
    {
      id: 'cre-2',
      ask: 'What do all three faiths teach about the place of people in '
        + 'creation?',
      kind: 'choice',
      options: [
        'They are to care for what was given to them',
        'They own the earth outright',
        'They have no part in it',
      ],
      answer: 'They are to care for what was given to them',
      teach: 'All three make the human being a caretaker, not an owner. '
        + 'The duty to the environment follows from that.',
      level: 4,
    },
    {
      id: 'cre-3',
      ask: 'A question asks you to compare the three teachings. '
        + 'You should:',
      kind: 'choice',
      options: [
        'State what they share, then how the accounts differ',
        'Say which one is correct',
        'Give only your own faith',
      ],
      answer: 'State what they share, then how the accounts differ',
      teach: 'A comparison describes. '
        + 'It does not settle which account is true.',
      level: 5,
    },
  ],
})

/* ── forms of worship ───────────────────────────────────────────────────── */

teach({
  topicId: 'worship-forms-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Worship is how people turn towards God. '
      + 'Christians gather for prayer, scripture, singing and sacraments. '
      + 'Muslims pray five times daily, face Makkah, '
      + 'and gather on Friday. '
      + 'Traditional worship uses prayer, libation, offerings and '
      + 'festivals. '
      + 'All three ask for sincerity, cleanliness and right conduct '
      + 'afterwards.',
    method: [
      'Describe what is done: when, where, and with what.',
      'Then say what it asks of the worshipper.',
      'Use each faith’s own terms.',
    ],
  },

  why:
    'On a Friday afternoon in Tamale the shops close '
    + 'and men walk to the mosque. '
    + 'On Sunday morning in Kumasi a church fills up '
    + 'and the singing reaches the street. '
    + 'Before a chief speaks at a durbar, '
    + 'an elder pours a drink on the ground and says a few words. '
    + 'All three of those are worship. '
    + 'No two of them look anything alike. '
    + 'So what makes them the same kind of act?',

  idea:
    'Worship is how people turn towards God, '
    + 'and each of the three faiths in Ghana has its own forms for it: '
    + 'when it happens, where, what is done, and who leads. '
    + 'Those are what you learn, '
    + 'and you learn each as its own followers state it. '
    + 'What does not differ is what is asked of the worshipper. '
    + 'All three ask the person to come sincerely and clean, '
    + 'and all three teach that worship is judged by how the worshipper '
    + 'then lives.',

  mechanism:
    'Describing worship is easy to do badly, '
    + 'because the parts you can see are the parts that differ. '
    + 'One faith washes before prayer, another is baptised once, '
    + 'another pours a drink on the ground. '
    + 'Listed like that, the three look unrelated. '
    + 'Look instead at what each form is doing, and the pattern appears. '
    + 'There are four jobs, and all three faiths do all four: '
    + 'a preparation that marks the worshipper as ready, '
    + 'an address to God in words, '
    + 'a giving, '
    + 'and a gathering at a set time, '
    + 'which is what makes worship a community and not a private habit. '
    + 'And all three insist on the same final test, in their own words: '
    + 'that worship which leaves the worshipper unchanged is not accepted. '
    + 'The prophets said it, the Qur’an says it, '
    + 'and the elder who pours libation asks for a clean heart before he '
    + 'asks for anything else. '
    + 'So when you compare, compare the jobs the forms do, '
    + 'not only the objects used.',

  recap:
    'Worship means turning towards God on purpose, '
    + 'in a way the faith has set out. '
    + 'It is not the same thing as believing. '
    + 'A Muslim praying at dawn facing Makkah is worshipping. '
    + 'So is a Christian congregation singing on Sunday morning. '
    + 'So is an elder pouring a libation before a meeting opens. '
    + 'Three faiths are followed in Ghana: '
    + 'Christianity, Islam and African Traditional Religion. '
    + 'This lesson sets out the form each one uses, '
    + 'and what each asks of the person worshipping.',

  method: [
    'Name the faith.',
    'Say when worship happens and where.',
    'Say what is done, in that faith’s own terms.',
    'Name the person who leads it, if one does.',
    'Say what preparation is asked of the worshipper.',
    'Finish with what the worship requires afterwards, in conduct.',
    'Describe each faithfully. Do not rank them.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How many times a day do Muslims perform the obligatory prayer?',
      steps: [
        'The daily prayers are at set times.',
        'Count them.',
      ],
      answer: 'Five times.',
    },
    {
      level: 4,
      ask: 'Name one act of preparation in each of the three faiths.',
      steps: [
        'Preparation is what marks the worshipper as ready.',
        'Take each faith in turn.',
      ],
      answer: 'Islam: washing, the ablution, before prayer. '
        + 'Christianity: prayer or confession before the service. '
        + 'Traditional: the state of purity required of the one who pours '
        + 'libation.',
    },
    {
      level: 5,
      ask: 'Why do all three faiths say that worship must change how a '
        + 'person lives?',
      steps: [
        'Worship in each is an address to God, not a performance for '
          + 'people.',
        'Each teaches that God sees the heart and not only the act.',
        'So an act done while living wrongly is not sincere.',
        'And insincere worship is not accepted in any of the three.',
      ],
      answer: 'Because all three teach that God sees the heart, '
        + 'so worship that leaves the worshipper’s conduct unchanged is not '
        + 'sincere, and is therefore not accepted.',
    },
  ],

  traps: [
    {
      mistake: 'Calling libation the worship of idols.',
      why: 'Libation is prayer with a poured drink, '
        + 'addressed to the Supreme Being and to the ancestors. '
        + 'Describe it as its practitioners describe it.',
    },
    {
      mistake: 'Listing objects instead of describing worship.',
      why: 'Marks go to what is done and what it asks of the worshipper. '
        + 'A list of items says neither.',
    },
    {
      mistake: 'Using one faith’s words for another faith’s practice.',
      why: 'Each has its own terms. '
        + 'Salat, holy communion and libation are not versions of one '
        + 'another.',
    },
  ],

  extension:
    'Each faith also has worship for particular moments of a life: '
    + 'naming, marriage, and death. '
    + 'These are worth comparing the same way, '
    + 'by asking what the rite does rather than what it uses.',

  tables: [
    {
      caption: 'What is done in each form of worship, and who leads it',
      columns: ['Faith', 'When and where', 'What is done', 'Who leads'],
      rows: [
        [
          'Christianity',
          'As a congregation in church, usually on Sunday',
          'Prayer, scripture read and preached, singing, an offering, '
            + 'and sacraments such as baptism and holy communion',
          'A pastor, priest or minister',
        ],
        [
          'Islam',
          'Five set times each day, facing Makkah, '
            + 'and together at the mosque on Friday',
          'Salat after washing, with fasting in Ramadan, '
            + 'giving to the poor, and the pilgrimage',
          'An imam, for the congregation',
        ],
        [
          'African Traditional Religion',
          'At a shrine or in the home, '
            + 'and at festivals fixed in the year',
          'Prayer to the Supreme Being, libation poured with words, '
            + 'offerings and sacrifices, drumming and dancing',
          'A priest, or an elder of the family',
        ],
      ],
      note: 'Every entry is put as that faith’s own followers put it. '
        + 'Nothing here ranks one form above another.',
    },
    {
      caption: 'The four jobs a form of worship does, '
        + 'and how each faith does them',
      columns: [
        'The job the form does',
        'Christianity',
        'Islam',
        'African Traditional Religion',
      ],
      rows: [
        [
          'Preparation, marking the worshipper ready',
          'Prayer or confession before the service',
          'The ablution, washing before prayer',
          'The purity required of the one who pours libation',
        ],
        [
          'An address to God in words',
          'Prayer, and scripture read aloud',
          'The words of salat, facing Makkah',
          'Prayer, and the words spoken over the libation',
        ],
        [
          'A giving',
          'The offering',
          'Zakat, given to the poor',
          'An offering or a sacrifice',
        ],
        [
          'A gathering at a set time',
          'Sunday worship',
          'Friday prayer at the mosque',
          'The festivals of the year',
        ],
      ],
      note: 'Read this one along a row, not down a column. '
        + 'What is used differs. The job being done does not.',
    },
  ],

  questions: [
    {
      id: 'wor-1',
      ask: 'Which direction do Muslims face in prayer?',
      kind: 'choice',
      options: ['Towards Makkah', 'Towards the east', 'Towards the mosque'],
      answer: 'Towards Makkah',
      teach: 'The direction of prayer is towards the Kaaba at Makkah, '
        + 'wherever in the world the worshipper is.',
      level: 3,
    },
    {
      id: 'wor-2',
      ask: 'What is libation?',
      kind: 'choice',
      options: [
        'Prayer offered with a drink poured out',
        'A festival dance',
        'A kind of offering box',
      ],
      answer: 'Prayer offered with a drink poured out',
      teach: 'The words matter as much as the drink. '
        + 'It is addressed to the Supreme Being and the ancestors.',
      level: 4,
    },
    {
      id: 'wor-3',
      ask: 'What do all three faiths say about worship and conduct?',
      kind: 'choice',
      options: [
        'Worship that leaves conduct unchanged is not accepted',
        'Conduct matters only on the day of worship',
        'They have nothing to do with each other',
      ],
      answer: 'Worship that leaves conduct unchanged is not accepted',
      teach: 'Each teaches that God sees the heart, '
        + 'so sincerity is tested by how the worshipper then lives.',
      level: 5,
    },
  ],
})

/* ── formal speaking in the language ────────────────────────────────────── */

teach({
  topicId: 'formal-ghl',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Addressing a gathering in your language has an order: '
      + 'greet, name the elders present in rank, state why you are '
      + 'speaking, speak, thank them, sit. '
      + 'Respect is carried by the plural form of address and by proverbs, '
      + 'not by loudness.',
    method: [
      'Find out who is present and in what order before you stand.',
      'Greet, then name them from the highest.',
      'Use the respectful plural form throughout.',
    ],
  },

  why:
    'An uncle has died and the family is gathering to plan the funeral. '
    + 'You are seventeen. '
    + 'The oldest people in the room are the chief’s elders. '
    + 'The family has picked you to stand up and tell the gathering '
    + 'how much money has been collected so far. '
    + 'The amount is on a paper in your hand. '
    + 'Every word you need exists in your own language. '
    + 'Then you stand, and you do not know what to say first. '
    + 'Who do you name? '
    + 'What do you call them? '
    + 'Say the amount straight out and you have insulted every elder there, '
    + 'even though not one word was untrue. '
    + 'Nobody will tell you that you did it, '
    + 'and nobody will tell you how it should have gone. '
    + 'This lesson is that order, written down.',

  notation:
    'A senior person is addressed by a title and not by a bare name. '
    + 'In Akan the title for a chief or an elder is Nana. '
    + 'In Ga it is Nii for a man and Naa for a woman. '
    + 'In Ewe it is Togbe. '
    + 'The title comes first, then the name: Nana Kwaku, Nii Teiko. '
    + 'The person who speaks on a chief’s behalf has a name too. '
    + 'In Akan he is the ɔkyeame, said "aw-CHA-may", '
    + 'and in English he is called the linguist. '
    + 'Most Ghanaian languages also use the word for more than one person '
    + 'when addressing one senior person. '
    + 'In Twi that word is mo, where a child is told wo. '
    + 'Using wo to an elder is the commonest mistake, '
    + 'and it is heard by everybody in the room at once.',

  idea:
    'Speaking to a gathering in a Ghanaian language follows a form. '
    + 'You greet first. '
    + 'You then acknowledge those present in order of seniority, '
    + 'the chief or the eldest first, then the elders, then everybody else. '
    + 'You say why you are standing. '
    + 'You speak. '
    + 'You thank them for listening, and you sit. '
    + 'Respect is shown in the grammar: '
    + 'most Ghanaian languages use a plural pronoun for one senior '
    + 'person. '
    + 'It is shown in the words chosen, '
    + 'in proverbs, which carry weight precisely because they are old, '
    + 'and in the voice, which is kept level. '
    + 'In some settings a linguist or an appointed speaker relays what is '
    + 'said, '
    + 'and you address him in the proper way rather than speaking straight '
    + 'past him.',

  mechanism:
    'The order of a formal address is not courtesy added to a speech. '
    + 'It is the speech establishing that it has the right to be made. '
    + 'In a gathering of elders nobody speaks because they want to. '
    + 'They speak because the gathering permits it, '
    + 'and the opening is where that permission is acknowledged. '
    + 'This is why skipping the greeting or naming the elders out of rank '
    + 'offends more than a mistake in the middle would. '
    + 'The content was not wrong. '
    + 'The claim to speak was not made properly. '
    + 'The grammar works the same way. '
    + 'Using the plural form for one senior person is not a quirk of the '
    + 'language. '
    + 'It says that the person addressed stands for more than themselves: '
    + 'a family, a stool, a line of ancestors. '
    + 'The singular form, used to the same person, '
    + 'says they are only an individual, '
    + 'and that is the offence, even when every other word is correct. '
    + 'And this is why proverbs belong in formal speech. '
    + 'A proverb is not decoration. '
    + 'It says that the point being made is older than the speaker, '
    + 'which is the strongest claim a young person can make in that room.',

  recap:
    'Ghanaian languages change their words to suit who is being spoken to. '
    + 'The clearest case is the word for you. '
    + 'Twi says wo to one child. '
    + 'It says mo to one elder. '
    + 'And mo is also the word for more than one person. '
    + 'So an elder is addressed as though they were many people, '
    + 'and that is what respect looks like inside the grammar. '
    + 'A gathering has an order too. '
    + 'The chief or the eldest comes first, then the other elders, '
    + 'then everybody else, down to the youngest. '
    + 'That order decides who is greeted first. '
    + 'A formal address is built out of those two facts: '
    + 'the plural for respect, and the order of seniority.',

  method: [
    'Ask beforehand who will be present and in what order of seniority.',
    'Stand when invited, not before.',
    'Greet the gathering in the proper greeting of the time of day.',
    'Name those present from the most senior down.',
    'State in one sentence why you are speaking.',
    'Use the respectful plural form of address throughout.',
    'Keep your voice level and your words few.',
    'Use a proverb where it carries the point, not to decorate.',
    'Thank them for listening, and sit.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is the first thing you do when you stand to address a '
        + 'gathering?',
      steps: [
        'Nothing is said before the gathering is greeted.',
      ],
      answer: 'Greet the gathering, using the greeting proper to the time '
        + 'of day.',
    },
    {
      level: 4,
      ask: 'Why do many Ghanaian languages use a plural pronoun for one '
        + 'elder?',
      steps: [
        'The plural form is not about number here.',
        'An elder stands for a family, a stool, a line of ancestors.',
        'The plural says so.',
      ],
      answer: 'Because the elder stands for more than themselves, '
        + 'and the plural form says that. '
        + 'The singular would reduce them to one individual.',
    },
    {
      level: 5,
      ask: 'A learner gives accurate information to a gathering of elders '
        + 'but is corrected before she finishes. '
        + 'Her facts were right. What was wrong?',
      steps: [
        'A formal address opens by acknowledging permission to speak.',
        'She may not have greeted, or may have named the elders out of '
          + 'rank.',
        'Or she used the singular form to a senior person.',
        'Any of those unmakes the claim to speak, whatever the content.',
      ],
      answer: 'Most likely the opening: '
        + 'no greeting, the elders named out of order, '
        + 'or the singular form used to a senior person. '
        + 'The form is how the right to speak is claimed, '
        + 'so a fault there outweighs correct content.',
    },
  ],

  traps: [
    {
      mistake: 'Starting straight into the message.',
      why: 'The opening is where the right to speak is acknowledged. '
        + 'Without it the speech is an interruption.',
    },
    {
      mistake: 'Using the singular form of address to one elder.',
      why: 'Most Ghanaian languages mark respect with the plural. '
        + 'The singular says the person is only themselves.',
    },
    {
      mistake: 'Mixing English words in because they come first to mind.',
      why: 'A formal address is judged partly on the language itself. '
        + 'Prepare the words you will need beforehand.',
    },
    {
      mistake: 'Speaking loudly to seem confident.',
      why: 'Weight comes from the order, the forms of respect and the '
        + 'proverbs. A raised voice reads as disrespect.',
    },
  ],

  extension:
    'A durbar or a funeral has its own additional order, '
    + 'and in some gatherings nothing may be said to the chief directly: '
    + 'it passes through the linguist. '
    + 'Learn who speaks for whom in your own area before you attend.',

  figure: {
    alt: 'Six numbered boxes in a column, giving the order of a formal '
      + 'address: greet the gathering, name those present with the most '
      + 'senior first, say why you are standing, speak with a level voice, '
      + 'thank them for listening, and sit down. An arrow down the side '
      + 'shows that the order is fixed, and a bracket marks the first '
      + 'three boxes as the opening, where the right to speak is claimed.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="26" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">the order of a formal address</text>'
      + '<line x1="100" y1="48" x2="100" y2="348"/>'
      + '<path d="M 92 346 L 100 364 L 108 346 Z" fill="currentColor" stroke="none"/>'
      + '<text x="86" y="192" font-size="15" text-anchor="end" fill="currentColor" stroke="none">in this</text>'
      + '<text x="86" y="210" font-size="15" text-anchor="end" fill="currentColor" stroke="none">order</text>'
      + '<circle cx="124" cy="65" r="13"/>'
      + '<text x="124" y="71" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">1</text>'
      + '<rect x="145" y="44" width="330" height="42" rx="6"/>'
      + '<text x="157" y="71" font-size="16" fill="currentColor" stroke="none">greet the gathering</text>'
      + '<circle cx="124" cy="121" r="13"/>'
      + '<text x="124" y="127" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">2</text>'
      + '<rect x="145" y="100" width="330" height="42" rx="6"/>'
      + '<text x="157" y="127" font-size="16" fill="currentColor" stroke="none">name those present, most senior first</text>'
      + '<circle cx="124" cy="177" r="13"/>'
      + '<text x="124" y="183" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">3</text>'
      + '<rect x="145" y="156" width="330" height="42" rx="6"/>'
      + '<text x="157" y="183" font-size="16" fill="currentColor" stroke="none">say why you are standing</text>'
      + '<circle cx="124" cy="233" r="13"/>'
      + '<text x="124" y="239" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">4</text>'
      + '<rect x="145" y="212" width="330" height="42" rx="6"/>'
      + '<text x="157" y="239" font-size="16" fill="currentColor" stroke="none">speak, voice level, words few</text>'
      + '<circle cx="124" cy="289" r="13"/>'
      + '<text x="124" y="295" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">5</text>'
      + '<rect x="145" y="268" width="330" height="42" rx="6"/>'
      + '<text x="157" y="295" font-size="16" fill="currentColor" stroke="none">thank them for listening</text>'
      + '<circle cx="124" cy="345" r="13"/>'
      + '<text x="124" y="351" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">6</text>'
      + '<rect x="145" y="324" width="330" height="42" rx="6"/>'
      + '<text x="157" y="351" font-size="16" fill="currentColor" stroke="none">sit down</text>'
      + '<path d="M 492 44 H 504 V 198 H 492" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="512" y="106" font-size="15" fill="#0f8a4d" stroke="none">the opening, where</text>'
      + '<text x="512" y="124" font-size="15" fill="#0f8a4d" stroke="none">the right to speak</text>'
      + '<text x="512" y="142" font-size="15" fill="#0f8a4d" stroke="none">is claimed</text>'
      + '<text x="320" y="390" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">a fault here outweighs correct content later on</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The form of address that marks respect to one elder, '
        + 'in four Ghanaian languages',
      columns: [
        'Language',
        'To one person of your own age',
        'To one elder',
        'To more than one person',
      ],
      rows: [
        ['Akan', 'wo', 'mo', 'mo'],
        ['Ewe', 'wò', 'mi', 'mi'],
        ['Ga', 'bo', 'nyɛ', 'nyɛ'],
        ['Dagbani', 'a', 'ya', 'ya'],
      ],
      note: 'The last two columns are the same in every row, '
        + 'and that is the point: the plural form is used for one elder '
        + 'because the elder stands for more than themselves. '
        + 'Ask your teacher for the forms of your own language if it is '
        + 'not here, and for the tone marks it writes.',
    },
  ],

  questions: [
    {
      id: 'fgh-1',
      ask: 'In a formal address, who is acknowledged first?',
      kind: 'choice',
      options: [
        'The most senior person present',
        'Your own family',
        'The youngest present',
      ],
      answer: 'The most senior person present',
      teach: 'Those present are named in order of seniority, '
        + 'from the highest down.',
      level: 3,
    },
    {
      id: 'fgh-2',
      ask: 'How is respect mainly carried in speech to an elder?',
      kind: 'choice',
      options: [
        'By the plural form of address and chosen words',
        'By speaking loudly',
        'By speaking quickly',
      ],
      answer: 'By the plural form of address and chosen words',
      teach: 'The plural says the elder stands for more than themselves. '
        + 'Volume says nothing.',
      level: 4,
    },
    {
      id: 'fgh-3',
      ask: 'Why does a proverb carry weight in a formal address?',
      kind: 'choice',
      options: [
        'It shows the point is older than the speaker',
        'It makes the speech longer',
        'It proves you know the language',
      ],
      answer: 'It shows the point is older than the speaker',
      teach: 'That is the strongest claim a young speaker can make in a '
        + 'gathering of elders.',
      level: 5,
    },
  ],
})

/* ── comprehension in the language ──────────────────────────────────────── */

teach({
  topicId: 'read-comprehend-ghl',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Read the whole passage once before looking at the questions. '
      + 'Answer in the language of the passage, in full sentences. '
      + 'Do not translate into English in your head and back again.',
    method: [
      'Read it through once without stopping.',
      'Read the questions, then read again for the answers.',
      'Answer in the language, using your own words.',
    ],
  },

  why:
    'The exam paper puts a passage in front of you in your own language. '
    + 'Under it is a question, in the same language: '
    + 'what did the farmer do when the rain stopped? '
    + 'You read the passage and you understand every line of it. '
    + 'What the farmer did is sitting there in the third line. '
    + 'You write it down. '
    + 'You get two marks out of five. '
    + 'Nothing you wrote was untrue. '
    + 'So where did the other three marks go? '
    + 'They went on things the question never said out loud. '
    + 'Which language you answered in. '
    + 'Whether the words were your own or copied off the page. '
    + 'Whether you wrote the special letters and the marks over them. '
    + 'This lesson is those three things.',

  notation:
    'Ghanaian languages are written with letters English does not have. '
    + 'Twi and Ewe both use ɛ, said like the e in bed, '
    + 'and ɔ, said like the o in pot. '
    + 'Ewe also uses ƒ, ɖ and ŋ. '
    + 'Each one is a letter in its own right. '
    + 'ɛ is not an e with something added to it, '
    + 'and it has its own place in the alphabet. '
    + 'Some of these languages also write a small stroke above a vowel '
    + 'to show the pitch of the voice. '
    + 'That stroke is called a tone mark. '
    + 'It is not decoration either. '
    + 'It separates two words that are spelled with the same letters. '
    + 'Leaving out ɛ, ɔ or a tone mark is a spelling mistake, '
    + 'and it is the commonest way to lose a mark in an answer '
    + 'that was otherwise right.',

  idea:
    'A comprehension passage in your language is answered in that '
    + 'language. '
    + 'Read the whole passage once first, '
    + 'then read the questions, '
    + 'then read again looking for each answer. '
    + 'Answer in complete sentences, in the language, in your own words. '
    + 'The questions are not all of one kind, '
    + 'and what counts as an answer depends on which kind you are '
    + 'looking at.',

  mechanism:
    'The thing that costs marks here is not vocabulary. '
    + 'It is translating. '
    + 'A learner reads a line in Ewe or Dagbani, '
    + 'turns it into English in her head to understand it, '
    + 'works out the answer in English, '
    + 'and then turns that answer back into the language to write it down. '
    + 'Two translations happen, and each one loses something. '
    + 'The answer comes out in a shape the language does not use, '
    + 'and the marker can see exactly what happened. '
    + 'So read for the meaning directly, '
    + 'and when a word is unfamiliar, use the same trick you use in '
    + 'English: '
    + 'cover it, read the sentence, and ask what would fit. '
    + 'The passage teaches you the word. '
    + 'The other thing worth knowing is that tone and spelling carry '
    + 'meaning in these languages. '
    + 'Two words may differ only in a mark or in the pitch, '
    + 'so a missing mark can turn your answer into a different word. '
    + 'Writing the marks is part of answering, not neatness.',

  recap:
    'A comprehension is a passage to read, '
    + 'with questions underneath about what the passage said. '
    + 'Every answer is already in the passage. '
    + 'Nothing is asked that the passage has not told you, '
    + 'so you are not being tested on what you knew before you started. '
    + 'Take the question: what did the farmer plant? '
    + 'If line three of the passage says he planted maize, '
    + 'then maize is the answer. '
    + 'It came off line three, not off your own farm. '
    + 'That is what comprehension is, in any language at all. '
    + 'What this lesson adds is what changes '
    + 'when the passage and the answers are both in your own language.',

  method: [
    'Read the whole passage once without stopping.',
    'Read every question before searching for anything.',
    'Read the passage again, looking for one answer at a time.',
    'For an unfamiliar word, cover it and ask what fits the sentence.',
    'Answer in complete sentences, in the language of the passage.',
    'Use your own words. Do not copy a whole line.',
    'Write all tone marks and special letters.',
    'Give the meaning of a proverb, not the proverb again.',
    'Read your answers once to check the grammar.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What do you do before looking at the questions?',
      steps: [
        'The questions make sense only once the passage has been read.',
      ],
      answer: 'Read the whole passage once through.',
    },
    {
      level: 4,
      ask: 'A question asks what a proverb in the passage means. '
        + 'What is wrong with writing the proverb out again?',
      steps: [
        'The question asks for the meaning.',
        'Repeating it shows only that you can copy.',
        'The meaning must be given in plain words.',
      ],
      answer: 'It shows nothing. '
        + 'Give what the proverb means in plain language, '
        + 'and relate it to the passage.',
    },
    {
      level: 5,
      ask: 'A learner understands the passage well '
        + 'but her written answers read strangely and lose marks. Why?',
      steps: [
        'She read the passage and translated it into English to '
          + 'understand.',
        'She worked out the answer in English.',
        'She then translated the answer back into the language.',
        'The result follows English shapes, not her language’s.',
      ],
      answer: 'She is translating twice, into English and back. '
        + 'The answers come out in English sentence shapes. '
        + 'Read and answer in the language directly.',
    },
  ],

  traps: [
    {
      mistake: 'Translating into English to understand, then back again.',
      why: 'Each translation loses something, '
        + 'and the answer comes out in a shape the language does not use.',
    },
    {
      mistake: 'Leaving out tone marks and special letters.',
      why: 'They are part of the word. '
        + 'Without them your answer may be a different word.',
    },
    {
      mistake: 'Copying a whole line from the passage.',
      why: 'Copying shows you found the line, not that you understood it.',
    },
    {
      mistake: 'Answering in English because it is quicker.',
      why: 'The paper is in the language and is marked in it. '
        + 'An English answer earns nothing.',
    },
  ],

  extension:
    'Summary writing is this skill with a limit on words. '
    + 'You decide which sentences carry the passage '
    + 'and rewrite them in your own, '
    + 'which cannot be done at all while you are translating in your head.',

  figure: {
    alt: 'Two routes from a comprehension passage to a written answer. '
      + 'The upper route, drawn in green, goes straight from the passage '
      + 'to reading for the meaning in the language, and then to the '
      + 'answer in that language. The lower route, drawn in red, turns the '
      + 'passage into English, works the answer out in English, and turns '
      + 'that answer back again, so two translations happen and the answer '
      + 'comes out in a shape the language does not use.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="26" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">two routes from the passage to the answer</text>'
      + '<rect x="14" y="150" width="120" height="74" rx="6"/>'
      + '<text x="74" y="178" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">the passage,</text>'
      + '<text x="74" y="196" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">in your</text>'
      + '<text x="74" y="214" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">language</text>'
      + '<path d="M 136 168 L 182 116" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 170 112 L 188 110 L 180 126 Z" fill="#0f8a4d" stroke="none"/>'
      + '<rect x="192" y="84" width="186" height="56" rx="6" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="285" y="108" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">read for the meaning</text>'
      + '<text x="285" y="128" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">in the language</text>'
      + '<line x1="378" y1="112" x2="412" y2="112" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 410 104 L 426 112 L 410 120 Z" fill="#0f8a4d" stroke="none"/>'
      + '<rect x="428" y="84" width="196" height="56" rx="6" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="526" y="108" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">the answer, in</text>'
      + '<text x="526" y="128" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">the same language</text>'
      + '<text x="405" y="62" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">one step, and nothing is lost</text>'
      + '<path d="M 136 206 L 170 250" stroke="#c8433a" stroke-width="3"/>'
      + '<path d="M 158 248 L 176 256 L 162 266 Z" fill="#c8433a" stroke="none"/>'
      + '<rect x="178" y="248" width="128" height="56" rx="6" stroke="#c8433a" stroke-width="3"/>'
      + '<text x="242" y="272" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">turn it into</text>'
      + '<text x="242" y="292" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">English</text>'
      + '<line x1="306" y1="276" x2="330" y2="276" stroke="#c8433a" stroke-width="3"/>'
      + '<path d="M 328 268 L 344 276 L 328 284 Z" fill="#c8433a" stroke="none"/>'
      + '<rect x="346" y="248" width="142" height="56" rx="6" stroke="#c8433a" stroke-width="3"/>'
      + '<text x="417" y="272" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">work the answer</text>'
      + '<text x="417" y="292" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">out in English</text>'
      + '<line x1="488" y1="276" x2="508" y2="276" stroke="#c8433a" stroke-width="3"/>'
      + '<path d="M 506 268 L 522 276 L 506 284 Z" fill="#c8433a" stroke="none"/>'
      + '<rect x="524" y="248" width="102" height="56" rx="6" stroke="#c8433a" stroke-width="3"/>'
      + '<text x="575" y="272" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">turn it</text>'
      + '<text x="575" y="292" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">back again</text>'
      + '<text x="400" y="334" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">two translations, and each one loses something</text>'
      + '<text x="400" y="358" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">so the answer comes out in a shape nobody says</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The four kinds of comprehension question, '
        + 'and where the answer to each one comes from',
      columns: [
        'Kind of question',
        'Where the answer comes from',
        'What to write',
      ],
      rows: [
        [
          'A fact asked for directly',
          'A line of the passage you can point at',
          'The fact, in a full sentence of your own words',
        ],
        [
          'Something the passage does not say outright',
          'Worked out from what the passage does say',
          'The conclusion, with the part of the passage it rests on',
        ],
        [
          'The meaning of a proverb or an idiom',
          'What you know of the language',
          'The meaning in plain words, tied back to the passage',
        ],
        [
          'The meaning of one unfamiliar word',
          'The sentence around it',
          'A word or phrase that would fit in its place',
        ],
      ],
      note: 'All four are answered in the language of the passage, '
        + 'with every tone mark and special letter written. '
        + 'None of the four is answered by copying a whole line.',
    },
  ],

  questions: [
    {
      id: 'cgh-1',
      ask: 'In what language should the answers be written?',
      kind: 'choice',
      options: [
        'The language of the passage',
        'English',
        'Either one',
      ],
      answer: 'The language of the passage',
      teach: 'The paper is set and marked in the language.',
      level: 3,
    },
    {
      id: 'cgh-2',
      ask: 'Why must tone marks be written?',
      kind: 'choice',
      options: [
        'Without them the word may be a different word',
        'They make the writing neat',
        'They show where to pause',
      ],
      answer: 'Without them the word may be a different word',
      teach: 'In many Ghanaian languages two words differ only by tone, '
        + 'so the mark is part of the spelling.',
      level: 4,
    },
    {
      id: 'cgh-3',
      ask: 'What is the main cause of strange sounding answers?',
      kind: 'choice',
      options: [
        'Translating into English and back again',
        'Writing too fast',
        'Reading the passage twice',
      ],
      answer: 'Translating into English and back again',
      teach: 'Read for the meaning directly in the language, '
        + 'and answer in it.',
      level: 5,
    },
  ],
})

/* ── grammar of the language ────────────────────────────────────────────── */

teach({
  topicId: 'grammar-rules-ghl',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Tense in most Ghanaian languages is marked on the verb by a prefix '
      + 'or a particle, not by changing the word as English does. '
      + 'Tone can change meaning, so the marks are part of the spelling. '
      + 'The usual sentence order is subject, verb, object.',
    method: [
      'Find the verb, then the mark that carries the tense.',
      'Write every tone mark and special letter.',
      'Keep the order of the language, not the order of English.',
    ],
  },

  why:
    'You are writing a letter in your language '
    + 'to your grandmother in the village. '
    + 'You want to tell her one thing: I will come at Christmas. '
    + 'In English the word will does the whole job. '
    + 'It is what tells her the coming has not happened yet. '
    + 'So you look for the word for will in your own language. '
    + 'There is no such word to find. '
    + 'Then how does the sentence tell her you have not come yet? '
    + 'Something else in it is carrying the time. '
    + 'Until you have found that something, '
    + 'you cannot write the sentence and be sure it says next month '
    + 'rather than last month. '
    + 'That is the difference between a mark and no mark, '
    + 'and this lesson is where that something sits.',

  notation:
    'A piece stuck on the front of a verb is called a prefix. '
    + 'A small separate word that stands beside the verb is called '
    + 'a particle. '
    + 'The difference is written down as a space. '
    + 'A prefix joins the verb with no space, a particle keeps its own. '
    + 'The small stroke written above a vowel '
    + 'to show the pitch of the voice is called a tone mark. '
    + 'These languages also use letters English has not got: '
    + 'ɛ, said like the e in bed, and ɔ, said like the o in pot. '
    + 'Ewe adds ƒ, ɖ and ŋ. '
    + 'Each is a full letter, not a decorated e or o. '
    + 'So there are three ways to lose a mark here, and all three are small: '
    + 'the right word with the wrong space, a missing tone mark, '
    + 'and a special letter written as its plain English neighbour.',

  idea:
    'Three things decide whether a sentence in your language is correct: '
    + 'what carries the tense, '
    + 'whether the tone marks are written, '
    + 'and where each word sits. '
    + 'They do not all work the way they work in English, '
    + 'which is why a learner who writes by translating loses marks '
    + 'even when every word used is a real word of the language. '
    + 'Check the three, in that order, on your own sentence, '
    + 'before you hand it in.',

  mechanism:
    'The single most useful thing to understand is that your language does '
    + 'not do tense the way English does, '
    + 'and that learners lose marks by assuming it must. '
    + 'In most Ghanaian languages the verb stays where it is '
    + 'and something is added, or the tone shifts. '
    + 'So the question to ask of a sentence is not what shape the verb has '
    + 'taken, '
    + 'but what is sitting beside it. '
    + 'Find the verb, then find the mark that carries the time, '
    + 'and the tense is settled. '
    + 'Tone works on the same principle: '
    + 'the information is not in the letters alone. '
    + 'This is why leaving tone marks out is a spelling error rather than '
    + 'untidiness, '
    + 'and it is why reading your own sentence aloud catches more mistakes '
    + 'than reading it silently. '
    + 'The order of words matters for one more reason. '
    + 'Writing an English sentence with your language’s words produces '
    + 'something a speaker can decode but would never say, '
    + 'and that is visible to a marker in the first line.',

  recap:
    'A verb is the word in a sentence that says what happens: '
    + 'go, eat, buy. '
    + 'Every sentence with a verb in it also says when, '
    + 'and that part is called the tense. '
    + 'English marks the tense by changing the verb itself. '
    + 'Go becomes went for the past. '
    + 'Buy becomes bought. '
    + 'Sometimes English adds a separate word instead, '
    + 'as in will go for the future. '
    + 'So English has two ways of saying when, '
    + 'and the one it reaches for first changes the verb. '
    + 'Ghanaian languages lean almost entirely on the other way. '
    + 'That is where this lesson starts.',

  method: [
    'Find the verb in the sentence.',
    'Find what marks the tense beside it: a prefix, a particle or a tone.',
    'Check that one time is kept through the whole passage.',
    'Write every tone mark and every special letter.',
    'Keep the order of your language: subject, verb, object.',
    'Place words that describe a noun where your language places them.',
    'Read the sentence aloud. Tone errors are heard before they are seen.',
  ],

  worked: [
    {
      level: 3,
      ask: 'In most Ghanaian languages, what shows the tense of a verb?',
      steps: [
        'The verb itself usually does not change.',
        'Something is added to it or its tone shifts.',
      ],
      answer: 'A prefix, a particle, or a change of tone on the verb.',
    },
    {
      level: 4,
      ask: 'Why is a missing tone mark a spelling mistake and not untidy '
        + 'writing?',
      steps: [
        'Tone can distinguish two different words.',
        'The letters alone do not separate them.',
        'So the mark is carrying part of the word.',
      ],
      answer: 'Because the mark is part of the word. '
        + 'Without it the word written may be a different word altogether.',
    },
    {
      level: 5,
      ask: 'A learner writes sentences that a speaker understands '
        + 'but would never say. What is she doing?',
      steps: [
        'She is composing the sentence in English first.',
        'Then she replaces each English word with one from her language.',
        'The words are right and the order is English.',
        'So it decodes but is not the language.',
      ],
      answer: 'She is writing English sentences with the language’s words. '
        + 'The order and the way the verb is marked have to come from the '
        + 'language itself.',
    },
  ],

  traps: [
    {
      mistake: 'Looking for a changed verb to find the tense.',
      why: 'The verb usually does not change. '
        + 'Look for what is beside it.',
    },
    {
      mistake: 'Leaving tone marks off because the word is still readable.',
      why: 'Readable to you. '
        + 'To the marker it is either a different word or a misspelling.',
    },
    {
      mistake: 'Putting describing words before the noun as in English.',
      why: 'Most Ghanaian languages place them after. '
        + 'Follow your language.',
    },
    {
      mistake: 'Changing tense in the middle of a story.',
      why: 'The same error as in English. '
        + 'Decide the time first and keep it.',
    },
  ],

  extension:
    'Serial verbs come next in several of these languages: '
    + 'two or three verbs in a row, each carrying part of one action, '
    + 'where English would need a preposition or a whole clause. '
    + 'It is one of the places the language is simply not translatable word '
    + 'for word.',

  figure: {
    alt: 'Two rows of boxes, each row making one sentence. The upper row, '
      + 'for English, reads subject, verb, object, with a note that '
      + 'English changes the verb itself, so go becomes went. The lower '
      + 'row, for most Ghanaian languages, reads subject, then a tense '
      + 'mark drawn in green, then verb, then object, with a note that the '
      + 'mark is a prefix, a particle or a tone, and that the verb beside '
      + 'it does not change.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="26" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">the tense is not in the same place</text>'
      + '<text x="20" y="58" font-size="17" fill="currentColor" stroke="none">English</text>'
      + '<rect x="20" y="68" width="130" height="52" rx="6"/>'
      + '<text x="85" y="100" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">subject</text>'
      + '<rect x="158" y="68" width="160" height="52" rx="6"/>'
      + '<text x="238" y="100" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">verb</text>'
      + '<rect x="326" y="68" width="130" height="52" rx="6"/>'
      + '<text x="391" y="100" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">object</text>'
      + '<line x1="238" y1="120" x2="238" y2="140"/>'
      + '<path d="M 230 138 L 238 152 L 246 138 Z" fill="currentColor" stroke="none"/>'
      + '<text x="238" y="172" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">this word itself changes: go becomes went</text>'
      + '<text x="20" y="212" font-size="17" fill="currentColor" stroke="none">most Ghanaian languages</text>'
      + '<rect x="20" y="222" width="120" height="52" rx="6"/>'
      + '<text x="80" y="254" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">subject</text>'
      + '<rect x="148" y="222" width="130" height="52" rx="6" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="213" y="254" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">tense mark</text>'
      + '<rect x="286" y="222" width="120" height="52" rx="6"/>'
      + '<text x="346" y="254" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">verb</text>'
      + '<rect x="414" y="222" width="120" height="52" rx="6"/>'
      + '<text x="474" y="254" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">object</text>'
      + '<line x1="213" y1="274" x2="213" y2="294" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 205 292 L 213 306 L 221 292 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="213" y="326" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">a prefix, a particle or a tone</text>'
      + '<text x="213" y="346" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">and the verb beside it does not change</text>'
      + '<text x="320" y="388" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so do not look for a changed verb, look beside it</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The three things that decide whether a sentence is '
        + 'correct, and how each one differs from English',
      columns: [
        'What to check',
        'How English does it',
        'How most Ghanaian languages do it',
        'What a mistake costs',
      ],
      rows: [
        [
          'Tense and aspect',
          'The verb itself changes: go, going, went, gone',
          'The verb stays, and a prefix, a particle or a change of tone '
            + 'carries the time',
          'You look for a changed verb, find none, and lose the tense',
        ],
        [
          'Tone',
          'Pitch never decides which word it is',
          'Pitch can separate two words spelt with the same letters, '
            + 'so the marks are part of the spelling',
          'A missing mark writes a different word, '
            + 'and is marked as a spelling error',
        ],
        [
          'Order of subject, verb and object',
          'Subject, verb, object',
          'Subject, verb, object, the same',
          'Little: this is the one place the two agree',
        ],
        [
          'Where a word that describes a noun sits',
          'Before the noun: a red cloth',
          'After the noun, in most of these languages',
          'A phrase no speaker would say, such as the describing word '
            + 'put in front',
        ],
      ],
      note: 'Read each row across before you write. '
        + 'Three of the four differ from English, '
        + 'and those three are where the marks are lost.',
    },
  ],

  questions: [
    {
      id: 'ggh-1',
      ask: 'What is the usual word order?',
      kind: 'choice',
      options: [
        'Subject, verb, object',
        'Verb, subject, object',
        'Object, verb, subject',
      ],
      answer: 'Subject, verb, object',
      teach: 'Words that describe a noun then sit where your language '
        + 'places them, often after it.',
      level: 3,
    },
    {
      id: 'ggh-2',
      ask: 'How is tense usually shown?',
      kind: 'choice',
      options: [
        'By a prefix, particle or tone on the verb',
        'By changing the verb into a different word',
        'By the position of the subject',
      ],
      answer: 'By a prefix, particle or tone on the verb',
      teach: 'English changes the verb itself. '
        + 'Most Ghanaian languages add something to it instead.',
      level: 4,
    },
    {
      id: 'ggh-3',
      ask: 'What is the quickest way to catch a tone error in your own '
        + 'writing?',
      kind: 'choice',
      options: [
        'Read the sentence aloud',
        'Count the words',
        'Check the first letter of each word',
      ],
      answer: 'Read the sentence aloud',
      teach: 'Tone is heard before it is seen, '
        + 'because the information is not in the letters alone.',
      level: 5,
    },
  ],
})
