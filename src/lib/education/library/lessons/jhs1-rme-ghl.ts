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

  idea:
    'All three faiths taught in Ghana hold that the world did not come '
    + 'about by itself. '
    + 'It was made, by God, on purpose, '
    + 'and human beings are placed in it as caretakers rather than owners. '
    + 'The accounts differ. '
    + 'Christianity reads the book of Genesis, '
    + 'where God creates over six days and rests on the seventh, '
    + 'and makes human beings in his own image. '
    + 'Islam teaches that God, Allah, created the heavens and the earth in '
    + 'six periods by his command, '
    + 'and appointed the human being as his trustee on earth. '
    + 'African Traditional Religion teaches a Supreme Being, '
    + 'called Onyame, Mawu, Nyonmo and other names in different languages, '
    + 'who created all that exists and set it in order, '
    + 'with lesser spirits and the ancestors having their place under him.',

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
    + 'Where they differ is in the telling. '
    + 'Genesis is ordered as days and ends in rest. '
    + 'The Qur’an stresses that creation came by command: '
    + 'God says be, and it is. '
    + 'The traditional accounts often explain how things came to be as they '
    + 'now are, '
    + 'including why the Supreme Being is approached through lesser spirits '
    + 'and the ancestors. '
    + 'So when a question asks you to compare, '
    + 'give the agreement, then the accounts, then the duty, '
    + 'and do not use the comparison to rank them.',

  recap:
    'You have learned the creation story of your own faith. '
    + 'This places it beside the other two taught in Ghana, '
    + 'and asks what all three say about how we should treat the world.',

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

  idea:
    'Worship is how people turn towards God. '
    + 'Each faith has its own forms. '
    + 'Christians gather as a congregation, usually on Sunday. '
    + 'They pray, read and preach scripture, sing, and give an offering. '
    + 'They also have sacraments, such as baptism and holy communion. '
    + 'Islamic worship rests on the five daily prayers. '
    + 'Each is at a set time, facing Makkah, after washing. '
    + 'On Friday Muslims pray together at the mosque. '
    + 'They also fast in Ramadan, give to the poor, '
    + 'and make the pilgrimage. '
    + 'In African Traditional Religion people pray to the Supreme Being. '
    + 'Libation is poured with words. '
    + 'Offerings and sacrifices are made. '
    + 'There is drumming and dancing. '
    + 'Festivals come at fixed times of the year. '
    + 'A priest or an elder of the family often leads. '
    + 'All three ask the worshipper to come sincerely and clean. '
    + 'And all three teach that worship is judged by how the worshipper '
    + 'then lives.',

  mechanism:
    'Describing worship is easy to do badly, '
    + 'because the parts you can see are the parts that differ. '
    + 'One faith washes before prayer, another is baptised once, '
    + 'another pours a drink on the ground. '
    + 'Listed like that, the three look unrelated. '
    + 'Look instead at what each form is doing, and the pattern appears. '
    + 'Each has a preparation, '
    + 'something that marks the worshipper as ready: '
    + 'the washing before salat, '
    + 'confession or quiet before a service, '
    + 'the state required of the one who pours libation. '
    + 'Each has an address to God in words. '
    + 'Each has a giving: the offering, the zakat, the sacrifice. '
    + 'Each has a gathering at a set time, '
    + 'which is what makes it a community and not a private habit. '
    + 'And all three insist on the same final test, in their own words: '
    + 'that worship which leaves the worshipper unchanged is not accepted. '
    + 'The prophets said it, the Qur’an says it, '
    + 'and the elder who pours libation asks for a clean heart before he '
    + 'asks for anything else. '
    + 'So when you compare, compare the jobs the forms do, '
    + 'not only the objects used.',

  recap:
    'You know how your own family worships. '
    + 'This describes the three forms taught in Ghana '
    + 'and asks what each one requires of the person worshipping.',

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

  idea:
    'Speaking to a gathering in a Ghanaian language follows a form. '
    + 'You greet first. '
    + 'You then acknowledge those present in order of seniority, '
    + 'the chief or the eldest first, then the elders, then everybody else. '
    + 'You say why you are standing. '
    + 'You speak. '
    + 'You thank them for listening, and you sit. '
    + 'Respect is shown in the grammar: '
    + 'most Ghanaian languages use a plural pronoun for one senior person, '
    + 'as Akan uses mo and Ewe uses mi for one elder. '
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
    'You greet elders at home and you know the words change for them. '
    + 'This gathers those habits into the full form '
    + 'for standing and speaking before a gathering.',

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

  idea:
    'A comprehension passage in your language is answered in that '
    + 'language. '
    + 'Read the whole passage once first, '
    + 'then read the questions, '
    + 'then read again looking for each answer. '
    + 'Some answers are in the passage and you can point at them. '
    + 'Others must be worked out from what the passage says. '
    + 'Answer in complete sentences, in the language, in your own words. '
    + 'Where the passage uses a proverb or an idiom, '
    + 'give its meaning rather than repeating it.',

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
    'You answer comprehension questions in English already. '
    + 'The method is the same. '
    + 'What changes is that the reading and the answering both stay in your '
    + 'language.',

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
        'The questions make sense only once you know the passage.',
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

  idea:
    'Three things decide whether a sentence in your language is correct. '
    + 'First, tense and aspect. '
    + 'Most Ghanaian languages mark them on the verb with a prefix, '
    + 'a particle or a change of tone, '
    + 'rather than by changing the verb itself as English does with go and '
    + 'went. '
    + 'Second, tone. '
    + 'Pitch can distinguish two words that are otherwise spelt the same, '
    + 'so where your language writes tone marks they belong in every word '
    + 'that needs one. '
    + 'Third, order. '
    + 'The usual order is subject, then verb, then object, '
    + 'and the words that modify a noun sit where that language puts them, '
    + 'which is often after the noun rather than before it as in English.',

  mechanism:
    'The single most useful thing to understand is that your language does '
    + 'not do tense the way English does, '
    + 'and that learners lose marks by assuming it must. '
    + 'In English the verb itself changes: go, going, went, gone. '
    + 'In most Ghanaian languages the verb stays and something is added, '
    + 'or the tone shifts. '
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
    'You speak the language and know when a sentence sounds wrong. '
    + 'This names the three things that make it wrong, '
    + 'so you can correct your own writing instead of guessing.',

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
