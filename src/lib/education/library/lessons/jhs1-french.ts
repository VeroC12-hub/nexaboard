/**
 * Stored lessons for JHS 1 French.
 *
 * Written at about grade 6 to 7, with a `brief` form on every topic.
 *
 * ── Why the French is kept small and the explanation plain ─────────────────
 *
 * A JHS 1 learner is meeting the language for the first time, often without
 * a speaker to hear. So each lesson holds a short, closed set of French
 * forms, and everything around them is in plain English at the learner's
 * reading level. The French the learner has to produce is listed explicitly;
 * nothing is assumed from a previous year.
 *
 * Pronunciation is described in words rather than in symbols, because a
 * learner reading this on a phone has no phonetic alphabet and may have no
 * sound. Where a description cannot be exact it says so instead of
 * pretending.
 *
 * Accents are written in full throughout, since an accent in French is part
 * of the spelling, and a lesson that drops them teaches the wrong word.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── greetings and introductions ────────────────────────────────────────── */

teach({
  topicId: 'greetings-french',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Bonjour by day, bonsoir in the evening, salut only with friends. '
      + 'Comment vous appelez-vous? asks a stranger their name. '
      + 'Je m’appelle ... answers it. '
      + 'Use vous for a stranger or an adult, tu only for a friend or a '
      + 'child.',
    method: [
      'Greet first, then ask.',
      'Decide tu or vous before you speak.',
      'Answer in a full sentence, not one word.',
    ],
  },

  idea:
    'The first lesson is a small set of fixed lines, '
    + 'and one choice that runs underneath all of them. '
    + 'French has two words where English has only you, '
    + 'so before you greet anybody you have already decided '
    + 'how close you are to them. '
    + 'Several of the lines also change ending for a boy and for a girl.',

  mechanism:
    'The thing to get right from the first lesson is tu and vous, '
    + 'because French forces a choice English does not. '
    + 'English says you to a child, a friend, a teacher and a minister. '
    + 'French has tu for one person you are familiar with, '
    + 'a friend, a child, a close relative, '
    + 'and vous for a stranger, an older person, somebody in authority, '
    + 'and for more than one person of any kind. '
    + 'So vous does two jobs: it is polite, and it is plural. '
    + 'The reason this matters more than it looks is that the choice spreads '
    + 'through the whole sentence. '
    + 'Choose vous and the question becomes Comment vous appelez-vous? '
    + 'Choose tu and it becomes Comment t’appelles-tu? '
    + 'It is not one word swapped; the verb changes with it. '
    + 'So you decide before you open your mouth, not halfway through. '
    + 'The safe rule for a learner is to use vous with anybody you have not '
    + 'been invited to call tu. '
    + 'Being too polite in French is barely noticed. '
    + 'Using tu to a stranger is.',

  recap:
    'You greet people in English and in your own language, '
    + 'and in your own language the words already change for an elder. '
    + 'French does the same thing with tu and vous, '
    + 'so the idea is familiar even though the words are new.',

  method: [
    'Decide tu or vous before speaking: '
      + 'vous for a stranger, an adult, or more than one person.',
    'Greet: bonjour by day, bonsoir in the evening.',
    'Ask the name in the form that matches your choice.',
    'Give your own name with Je m’appelle.',
    'Add your age with J’ai ... ans.',
    'Say Enchanté, or Enchantée if you are a girl.',
    'Take leave with Au revoir.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Translate: Hello, my name is Kofi.',
      steps: [
        'The greeting by day is bonjour.',
        'My name is: Je m’appelle.',
      ],
      answer: 'Bonjour, je m’appelle Kofi.',
    },
    {
      level: 4,
      ask: 'You meet your friend’s mother. '
        + 'How do you ask her name?',
      steps: [
        'She is an adult you do not know, so vous.',
        'The vous form of the question is used.',
      ],
      answer: 'Comment vous appelez-vous? '
        + 'Not Comment t’appelles-tu?, which is for a friend.',
    },
    {
      level: 5,
      ask: 'Why is it not enough to simply swap tu for vous in a sentence?',
      steps: [
        'The choice changes the verb as well as the pronoun.',
        'Comment t’appelles-tu? has appelles.',
        'Comment vous appelez-vous? has appelez.',
        'So the whole question is a different shape.',
      ],
      answer: 'Because the verb changes with the pronoun. '
        + 'You have to decide which form you are using before you build '
        + 'the sentence.',
    },
  ],

  traps: [
    {
      mistake: 'Using salut with a teacher or a stranger.',
      why: 'Salut is for friends. '
        + 'Bonjour is correct with everybody.',
    },
    {
      mistake: 'Using tu to an adult you have just met.',
      why: 'French marks the difference and English does not, '
        + 'so it is easy to forget. Use vous until invited otherwise.',
    },
    {
      mistake: 'Saying Je suis douze ans for I am twelve.',
      why: 'French has an age rather than being one. '
        + 'It is J’ai douze ans.',
    },
    {
      mistake: 'Writing Enchante without the accent.',
      why: 'The accent is part of the spelling, not decoration. '
        + 'It is enchanté, and enchantée for a girl.',
    },
  ],

  extension:
    'Once greetings are secure, the next step is asking where somebody is '
    + 'from and where they live: '
    + 'D’où venez-vous? and Où habitez-vous? '
    + 'Both are in the vous form, and both take the same decision first.',

  figure: {
    alt: 'The English word you drawn in one box at the top, said to a '
      + 'child, a friend, a teacher and a minister alike, with two arrows '
      + 'leading down to the two French words that share its work. Tu is '
      + 'for one person you are familiar with, and asks Comment '
      + 't’appelles-tu. Vous is for a stranger, an older person, somebody '
      + 'in authority, or more than one person, and asks Comment vous '
      + 'appelez-vous.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">English has one you, and French makes you choose</text>'
      + '<path d="M 250 44 H 390 V 90 H 250 Z"/>'
      + '<text x="320" y="73" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">you</text>'
      + '<text x="320" y="110" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">said to a child, a friend, a teacher, a minister</text>'
      + '<path d="M 280 120 L 180 160" stroke-width="2"/>'
      + '<path d="M 170 164 L 186 152 L 192 166 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 360 120 L 460 160" stroke-width="2"/>'
      + '<path d="M 470 164 L 448 166 L 454 152 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 24 170 H 300 V 216 H 24 Z" stroke="#0f8a4d"/>'
      + '<text x="162" y="200" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">tu</text>'
      + '<text x="162" y="238" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">one person you are familiar with:</text>'
      + '<text x="162" y="256" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">a friend, a child, a close relative</text>'
      + '<text x="162" y="288" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">Comment t’appelles-tu?</text>'
      + '<path d="M 340 170 H 616 V 216 H 340 Z" stroke="#0f8a4d"/>'
      + '<text x="478" y="200" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">vous</text>'
      + '<text x="478" y="238" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">a stranger, an older person, somebody</text>'
      + '<text x="478" y="256" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">in authority, or more than one person</text>'
      + '<text x="478" y="288" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">Comment vous appelez-vous?</text>'
      + '<text x="320" y="330" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">it is not one word swapped: the verb changes with it,</text>'
      + '<text x="320" y="352" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">so you decide before you open your mouth</text>'
      + '<text x="320" y="384" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">being too polite is barely noticed; using tu to a stranger is</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The lines to know first, and when each is used',
      columns: ['To say', 'In French', 'When'],
      rows: [
        ['Hello', 'Bonjour', 'All through the day'],
        ['Good evening', 'Bonsoir', 'In the evening'],
        ['Hi', 'Salut', 'Only with friends'],
        ['Goodbye', 'Au revoir', 'Any parting'],
        ['See you soon', 'À bientôt', 'When you expect to meet again'],
        ['My name is Ama', 'Je m’appelle Ama', 'Answering either form'],
        [
          'I am twelve years old',
          'J’ai douze ans',
          'Note that French has the age rather than being it',
        ],
        [
          'Pleased to meet you',
          'Enchanté, or enchantée if you are a girl',
          'On being introduced',
        ],
      ],
      note: 'Je suis ghanéen for a boy and je suis ghanéenne for a girl '
        + 'change the same way enchanté does.',
    },
    {
      caption: 'The same question asked with tu and with vous',
      columns: ['', 'With tu', 'With vous'],
      rows: [
        [
          'Who it is for',
          'One person you are familiar with: a friend, a child, a relative',
          'A stranger, an older person, somebody in authority, or several people',
        ],
        [
          'What is your name?',
          'Comment t’appelles-tu?',
          'Comment vous appelez-vous?',
        ],
        ['How are you?', 'Ça va?', 'Comment allez-vous?'],
      ],
      note: 'It is not one word swapped: the verb changes with it, so the '
        + 'choice is made before you open your mouth. Being too polite is '
        + 'barely noticed, and using tu to a stranger is.',
    },
  ],
  questions: [
    {
      id: 'gfr-1',
      ask: 'Which greeting is used in the evening?',
      kind: 'choice',
      options: ['Bonsoir', 'Bonjour', 'Salut'],
      answer: 'Bonsoir',
      teach: 'Bonjour is used through the day. '
        + 'Salut is informal, for friends only.',
      level: 3,
    },
    {
      id: 'gfr-2',
      ask: 'How do you say I am twelve years old?',
      kind: 'choice',
      options: ['J’ai douze ans', 'Je suis douze ans', 'Je suis douze'],
      answer: 'J’ai douze ans',
      teach: 'In French you have an age rather than being one.',
      level: 4,
    },
    {
      id: 'gfr-3',
      ask: 'When should a learner use vous?',
      kind: 'choice',
      options: [
        'With a stranger, an adult, or more than one person',
        'Only with more than one person',
        'Only with friends',
      ],
      answer: 'With a stranger, an adult, or more than one person',
      teach: 'Vous does two jobs: polite, and plural. '
        + 'Use it with anybody you have not been invited to call tu.',
      level: 5,
    },
  ],
})

/* ── gender and articles ────────────────────────────────────────────────── */

teach({
  topicId: 'gender-articles',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Every French noun is masculine or feminine. '
      + 'The articles are le for masculine, la for feminine, '
      + 'les for both in the plural, '
      + 'and un and une for a. '
      + 'Gender is not about the thing being male or female. '
      + 'It is a class the word belongs to, and you learn it with the word.',
    method: [
      'Learn every noun with its article, never alone.',
      'Match everything else in the sentence to that gender.',
      'Before a vowel, le and la both become l’.',
    ],
  },

  idea:
    'Every noun in French belongs to one of two classes, '
    + 'called masculine and feminine. '
    + 'The article in front of the noun changes with that class, '
    + 'and so does the article for a or an, '
    + 'and so does the plural. '
    + 'The gender is a fact about the word, '
    + 'and it is learned together with the word.',

  mechanism:
    'Learners waste a year trying to work out why a table is feminine, '
    + 'and there is no answer, because the question is wrong. '
    + 'French gender is not a claim about the thing. '
    + 'It is a class the word sits in, '
    + 'the way a noun in your own language may take one prefix rather than '
    + 'another. '
    + 'The proof is that the same object has different genders in different '
    + 'languages, '
    + 'so the object cannot be deciding it. '
    + 'This matters practically, and here is why. '
    + 'Gender does not stop at the article. '
    + 'It reaches the adjectives, the pronouns and some past participles, '
    + 'so one wrong gender spreads through the sentence: '
    + 'le petit livre but la petite table. '
    + 'Guessing the article therefore costs you several errors rather than '
    + 'one. '
    + 'The only method that works is to learn the article as part of the '
    + 'noun. '
    + 'Never write table in your vocabulary list. '
    + 'Write la table. '
    + 'That is one item to remember instead of two, '
    + 'and it is why a French dictionary prints the gender beside every '
    + 'noun. '
    + 'Endings give some help: '
    + 'words ending in -tion, -té and -ette are nearly always feminine, '
    + 'and -age, -ment and -eau are nearly always masculine. '
    + 'They are useful and they are not a rule, '
    + 'so they guide a guess and never replace learning the word.',

  recap:
    'English has one word for the: the boy, the girl, the books. '
    + 'French chooses between le, la and les, '
    + 'so each new noun comes with one more thing to know about it.',

  method: [
    'Write every new noun with its article: la table, not table.',
    'Use le and la for the, and les for any plural.',
    'Use un and une for a, and des for some.',
    'Before a vowel or silent h, shorten le and la to l’.',
    'Match the adjective to the gender of the noun.',
    'Use the endings as a hint only when you have to guess.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give the correct article: ___ stylo (masculine), '
        + '___ porte (feminine).',
      steps: [
        'Masculine takes le, feminine takes la.',
      ],
      answer: 'Le stylo, la porte.',
    },
    {
      level: 4,
      ask: 'Why is it l’école and not la école?',
      steps: [
        'École begins with a vowel.',
        'Before a vowel both le and la shorten.',
      ],
      answer: 'Because le and la both become l’ before a vowel or a silent '
        + 'h. École is still feminine.',
    },
    {
      level: 5,
      ask: 'A learner guesses the gender of a noun and gets it wrong. '
        + 'Why does that one mistake cost several marks?',
      steps: [
        'The article is wrong first.',
        'The adjective agrees with the noun, so it is wrong too.',
        'A pronoun standing for the noun is wrong next.',
        'One decision, several errors.',
      ],
      answer: 'Because gender reaches the article, the adjective and the '
        + 'pronoun. '
        + 'Getting it wrong once makes every agreeing word wrong as well.',
    },
  ],

  traps: [
    {
      mistake: 'Trying to work out why an object is masculine or feminine.',
      why: 'The gender belongs to the word, not the thing. '
        + 'The same object has a different gender in another language.',
    },
    {
      mistake: 'Learning a noun without its article.',
      why: 'You then have to guess the gender every time you use the word. '
        + 'Learn la table as one item.',
    },
    {
      mistake: 'Treating the ending rules as certain.',
      why: 'They guide a guess. '
        + 'There are exceptions, so they do not replace learning the word.',
    },
    {
      mistake: 'Thinking l’ means the gender has changed.',
      why: 'It is only a shortening before a vowel. '
        + 'L’école is still feminine and its adjective must agree.',
    },
  ],

  extension:
    'Adjective agreement is the next step and it follows directly: '
    + 'most adjectives add -e for feminine and -s for plural, '
    + 'so le petit livre, la petite table, les petits livres. '
    + 'Every one of those depends on knowing the gender first.',

  figure: {
    alt: 'The wrong gender guessed once, in red, carried along a row: le '
      + 'table becomes le petit table becomes il est petit, one guess and '
      + 'three errors. Beneath it the same row in green, la table, la '
      + 'petite table, elle est petite. At the bottom a vocabulary list '
      + 'with the bare word table struck through and la table written '
      + 'beside it.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">one wrong gender does not stop at the article</text>'
      + '<text x="30" y="60" font-size="14" text-anchor="start" fill="#c8433a" stroke="none">guess it wrong once</text>'
      + '<path d="M 24 74 H 160 V 114 H 24 Z" stroke="#c8433a"/>'
      + '<text x="92" y="100" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">le table</text>'
      + '<path d="M 168 94 H 192" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 202 94 L 184 85 L 184 103 Z" fill="#c8433a" stroke="none"/>'
      + '<path d="M 212 74 H 388 V 114 H 212 Z" stroke="#c8433a"/>'
      + '<text x="300" y="100" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">le petit table</text>'
      + '<path d="M 396 94 H 420" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 430 94 L 412 85 L 412 103 Z" fill="#c8433a" stroke="none"/>'
      + '<path d="M 440 74 H 616 V 114 H 440 Z" stroke="#c8433a"/>'
      + '<text x="528" y="100" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">il est petit</text>'
      + '<text x="320" y="140" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">one guess, and three errors</text>'
      + '<text x="30" y="186" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">learn it with the noun</text>'
      + '<path d="M 24 200 H 160 V 240 H 24 Z" stroke="#0f8a4d"/>'
      + '<text x="92" y="226" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">la table</text>'
      + '<path d="M 168 220 H 192" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 202 220 L 184 211 L 184 229 Z" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 212 200 H 388 V 240 H 212 Z" stroke="#0f8a4d"/>'
      + '<text x="300" y="226" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">la petite table</text>'
      + '<path d="M 396 220 H 420" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 430 220 L 412 211 L 412 229 Z" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 440 200 H 616 V 240 H 440 Z" stroke="#0f8a4d"/>'
      + '<text x="528" y="226" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">elle est petite</text>'
      + '<text x="320" y="266" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">the gender reaches the adjective and the pronoun too</text>'
      + '<path d="M 170 292 H 470 V 356 H 170 Z" stroke-width="2"/>'
      + '<text x="320" y="312" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">your vocabulary list</text>'
      + '<text x="252" y="340" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">table</text>'
      + '<path d="M 222 332 H 282" stroke="#c8433a" stroke-width="3"/>'
      + '<text x="382" y="340" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">la table</text>'
      + '<text x="320" y="384" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">the gender is a fact about the word, so never write the noun alone</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The articles, which change with the gender and with the '
        + 'number',
      columns: ['Meaning', 'Masculine', 'Feminine', 'Plural'],
      rows: [
        ['the', 'le livre', 'la table', 'les livres, les tables'],
        [
          'the, before a vowel or a silent h',
          'l’homme',
          'l’école',
          'les hommes, les écoles',
        ],
        [
          'a, an, and some in the plural',
          'un stylo',
          'une porte',
          'des stylos, des portes',
        ],
      ],
      note: 'There is no reason a table is feminine. The gender is a class '
        + 'the word sits in, not a claim about the thing, which is why '
        + 'the same object has different genders in different languages.',
    },
    {
      caption: 'One wrong gender does not stop at the article',
      columns: ['Masculine', 'Feminine', 'What the gender reached'],
      rows: [
        ['le livre', 'la table', 'The article'],
        ['le petit livre', 'la petite table', 'The adjective as well'],
        ['il est petit', 'elle est petite', 'And the pronoun'],
      ],
      note: 'So guessing the article costs you several errors rather than '
        + 'one. Write la table in your vocabulary list, and never table '
        + 'alone.',
    },
  ],
  questions: [
    {
      id: 'gen-1',
      ask: 'Which article goes before a feminine singular noun?',
      kind: 'choice',
      options: ['la', 'le', 'les'],
      answer: 'la',
      teach: 'Le is masculine, la is feminine, '
        + 'and les is plural for both.',
      level: 3,
    },
    {
      id: 'gen-2',
      ask: 'Why do we write l’homme?',
      kind: 'choice',
      options: [
        'Le shortens before a vowel or silent h',
        'Homme is feminine',
        'It is a plural',
      ],
      answer: 'Le shortens before a vowel or silent h',
      teach: 'The h in homme is silent, '
        + 'so le becomes l’. The word is still masculine.',
      level: 4,
    },
    {
      id: 'gen-3',
      ask: 'What is the best way to learn a new French noun?',
      kind: 'choice',
      options: [
        'With its article, as one item',
        'On its own, and guess the gender later',
        'With its English meaning only',
      ],
      answer: 'With its article, as one item',
      teach: 'La table is one thing to remember. '
        + 'Table alone leaves you guessing every time you use it.',
      level: 5,
    },
  ],
})

/* ── the present tense ──────────────────────────────────────────────────── */

teach({
  topicId: 'present-tense-french',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A French verb changes its ending for each person. '
      + 'Regular -er verbs take -e, -es, -e, -ons, -ez, -ent. '
      + 'Être, avoir and aller are irregular and must be learned whole, '
      + 'because they are used constantly and in other tenses too.',
    method: [
      'Take the ending off the infinitive to get the stem.',
      'Add the ending for the person you want.',
      'For être, avoir and aller, recall the whole set.',
    ],
  },

  idea:
    'A French verb in the dictionary ends in -er, -ir or -re, '
    + 'and that form is called the infinitive: parler, finir, vendre. '
    + 'To use it you remove that ending and add one for the person '
    + 'speaking. '
    + 'Regular -er verbs are the largest group, '
    + 'and their six endings are the same for every verb in it, '
    + 'so they are learned once and used on thousands of verbs. '
    + 'Three verbs are irregular, '
    + 'and they matter more than all the others together: '
    + 'être, to be; avoir, to have; and aller, to go.',

  mechanism:
    'There are two things worth understanding here, '
    + 'and together they turn a page of tables into something you can use. '
    + 'The first is what conjugation is actually for. '
    + 'The ending tells you who is doing the action, '
    + 'which is why French can drop no information even in a short sentence. '
    + 'Once you see the ending as carrying the person, '
    + 'the table stops being six separate words and becomes one stem with '
    + 'six endings, '
    + 'and the endings are the same for every regular -er verb in the '
    + 'language. '
    + 'Learn them once and you have thousands of verbs. '
    + 'The second is why être, avoir and aller are worth real effort now. '
    + 'They are not just common. '
    + 'They are the verbs other tenses are built from. '
    + 'Avoir makes the perfect: j’ai mangé, I have eaten. '
    + 'Être makes the perfect of a group of other verbs, '
    + 'and aller makes the near future: je vais manger, I am going to eat. '
    + 'So an hour spent on those three is repaid in every tense you meet '
    + 'afterwards, '
    + 'while an hour spent on a rare verb is repaid once.',

  recap:
    'English changes the verb a little for one person: '
    + 'I walk, but he walks. '
    + 'French does the same thing for every person, '
    + 'so there are six endings instead of two.',

  method: [
    'Find the infinitive and see which ending it has.',
    'For an -er verb, remove the -er to get the stem.',
    'Add the ending for the person: -e, -es, -e, -ons, -ez, -ent.',
    'Check that the ending matches the subject you wrote.',
    'For être, avoir and aller, recall the whole set from memory.',
    'Before a vowel, je becomes j’: j’ai, j’habite.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Conjugate parler for je, tu and nous.',
      steps: [
        'Remove -er from parler to get parl.',
        'Add -e, -es and -ons.',
      ],
      answer: 'Je parle, tu parles, nous parlons.',
    },
    {
      level: 4,
      ask: 'Complete: Nous ___ à l’école. (aller)',
      steps: [
        'Aller is irregular, so the stem rule does not apply.',
        'Recall the set: je vais, tu vas, il va, nous allons.',
      ],
      answer: 'Nous allons à l’école.',
    },
    {
      level: 5,
      ask: 'Why should a learner spend more time on être, avoir and aller '
        + 'than on any regular verb?',
      steps: [
        'They are used constantly on their own.',
        'Avoir and être also build the perfect tense.',
        'Aller builds the near future.',
        'So they are needed again in every tense that follows.',
      ],
      answer: 'Because other tenses are built from them: '
        + 'avoir and être for the perfect, aller for the near future. '
        + 'Learning them now is repaid in every tense afterwards.',
    },
  ],

  traps: [
    {
      mistake: 'Using the infinitive as if it were a finished verb.',
      why: 'Je parler is not a sentence. '
        + 'The infinitive has to be conjugated for the person.',
    },
    {
      mistake: 'Writing -ent and pronouncing it.',
      why: 'The -ent ending of ils parlent is written and not sounded, '
        + 'so it sounds the same as il parle. '
        + 'It still has to be written.',
    },
    {
      mistake: 'Applying the -er endings to être, avoir or aller.',
      why: 'They are irregular. '
        + 'There is no stem to add endings to; the forms must be known.',
    },
    {
      mistake: 'Writing je ai.',
      why: 'Je shortens to j’ before a vowel. It is j’ai.',
    },
  ],

  extension:
    'The near future needs nothing new: '
    + 'take aller in the present and add an infinitive. '
    + 'Je vais manger, nous allons partir. '
    + 'This is the first payment on the hour spent learning aller.',

  figure: {
    alt: 'The infinitive parler with a dashed line cutting off its -er '
      + 'ending, leaving the stem parl in a green box. Six arrows fan out '
      + 'from the stem to the six endings, -e, -es, -e, -ons, -ez and '
      + '-ent, each giving its form: je parle, tu parles, il parle, nous '
      + 'parlons, vous parlez, ils parlent.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">one stem, six endings, and the endings never change</text>'
      + '<text x="92" y="88" font-size="26" text-anchor="middle" fill="currentColor" stroke="none">parler</text>'
      + '<text x="92" y="112" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">the infinitive</text>'
      + '<path d="M 104 62 V 96" stroke="#c8433a" stroke-width="2" stroke-dasharray="5 4"/>'
      + '<text x="128" y="70" font-size="12" text-anchor="start" fill="#c8433a" stroke="none">cut off the -er</text>'
      + '<path d="M 40 136 H 144 V 178 H 40 Z" stroke="#0f8a4d"/>'
      + '<text x="92" y="164" font-size="22" text-anchor="middle" fill="#0f8a4d" stroke="none">parl</text>'
      + '<text x="92" y="196" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">the stem</text>'
      + '<path d="M 152 157 C 200 157, 210 86, 258 86" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 268 86 L 250 77 L 250 95 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="286" y="92" font-size="16" text-anchor="start" fill="#0f8a4d" stroke="none">-e</text>'
      + '<text x="360" y="92" font-size="16" text-anchor="start" fill="currentColor" stroke="none">je parle</text>'
      + '<text x="520" y="92" font-size="13" text-anchor="start" fill="currentColor" stroke="none">je</text>'
      + '<path d="M 152 157 C 200 157, 210 132, 258 132" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 268 132 L 250 123 L 250 141 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="286" y="138" font-size="16" text-anchor="start" fill="#0f8a4d" stroke="none">-es</text>'
      + '<text x="360" y="138" font-size="16" text-anchor="start" fill="currentColor" stroke="none">tu parles</text>'
      + '<text x="520" y="138" font-size="13" text-anchor="start" fill="currentColor" stroke="none">tu</text>'
      + '<path d="M 152 157 C 200 157, 210 178, 258 178" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 268 178 L 250 169 L 250 187 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="286" y="184" font-size="16" text-anchor="start" fill="#0f8a4d" stroke="none">-e</text>'
      + '<text x="360" y="184" font-size="16" text-anchor="start" fill="currentColor" stroke="none">il parle</text>'
      + '<text x="520" y="184" font-size="13" text-anchor="start" fill="currentColor" stroke="none">il, elle</text>'
      + '<path d="M 152 157 C 200 157, 210 224, 258 224" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 268 224 L 250 215 L 250 233 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="286" y="230" font-size="16" text-anchor="start" fill="#0f8a4d" stroke="none">-ons</text>'
      + '<text x="360" y="230" font-size="16" text-anchor="start" fill="currentColor" stroke="none">nous parlons</text>'
      + '<text x="520" y="230" font-size="13" text-anchor="start" fill="currentColor" stroke="none">nous</text>'
      + '<path d="M 152 157 C 200 157, 210 270, 258 270" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 268 270 L 250 261 L 250 279 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="286" y="276" font-size="16" text-anchor="start" fill="#0f8a4d" stroke="none">-ez</text>'
      + '<text x="360" y="276" font-size="16" text-anchor="start" fill="currentColor" stroke="none">vous parlez</text>'
      + '<text x="520" y="276" font-size="13" text-anchor="start" fill="currentColor" stroke="none">vous</text>'
      + '<path d="M 152 157 C 200 157, 210 316, 258 316" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 268 316 L 250 307 L 250 325 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="286" y="322" font-size="16" text-anchor="start" fill="#0f8a4d" stroke="none">-ent</text>'
      + '<text x="360" y="322" font-size="16" text-anchor="start" fill="currentColor" stroke="none">ils parlent</text>'
      + '<text x="520" y="322" font-size="13" text-anchor="start" fill="currentColor" stroke="none">ils, elles</text>'
      + '<text x="320" y="370" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the ending carries who is doing it, and these six are the</text>'
      + '<text x="320" y="392" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">same for every regular -er verb in the language</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The six endings of a regular -er verb, shown on parler',
      columns: ['Person', 'Ending', 'The form', 'In English'],
      rows: [
        ['je', '-e', 'je parle', 'I speak'],
        ['tu', '-es', 'tu parles', 'you speak, to one person you know'],
        ['il, elle', '-e', 'il parle', 'he speaks, she speaks'],
        ['nous', '-ons', 'nous parlons', 'we speak'],
        ['vous', '-ez', 'vous parlez', 'you speak, politely or to several'],
        ['ils, elles', '-ent', 'ils parlent', 'they speak'],
      ],
      note: 'The ending carries who is doing the action, which is why the '
        + 'table is not six separate words. It is one stem with six '
        + 'endings, and the endings never change.',
    },
    {
      caption: 'The three irregular verbs the other tenses are built from',
      columns: ['Person', 'être, to be', 'avoir, to have', 'aller, to go'],
      rows: [
        ['je', 'je suis', 'j’ai', 'je vais'],
        ['tu', 'tu es', 'tu as', 'tu vas'],
        ['il, elle', 'il est', 'il a', 'il va'],
        ['nous', 'nous sommes', 'nous avons', 'nous allons'],
        ['vous', 'vous êtes', 'vous avez', 'vous allez'],
        ['ils, elles', 'ils sont', 'ils ont', 'ils vont'],
      ],
      note: 'Avoir makes the perfect, j’ai mangé, I have eaten. Aller makes '
        + 'the near future, je vais manger, I am going to eat. That is '
        + 'why these three are worth real effort now.',
    },
  ],
  questions: [
    {
      id: 'prf-1',
      ask: 'What is the nous form of parler?',
      kind: 'choice',
      options: ['parlons', 'parlez', 'parlent'],
      answer: 'parlons',
      teach: 'The -er endings are -e, -es, -e, -ons, -ez, -ent. '
        + 'Nous takes -ons.',
      level: 3,
    },
    {
      id: 'prf-2',
      ask: 'Which is correct?',
      kind: 'choice',
      options: ['Nous sommes', 'Nous êtes', 'Nous est'],
      answer: 'Nous sommes',
      teach: 'Être is irregular: je suis, tu es, il est, nous sommes, '
        + 'vous êtes, ils sont.',
      level: 4,
    },
    {
      id: 'prf-3',
      ask: 'What does the ending of a French verb tell you?',
      kind: 'choice',
      options: [
        'Who is doing the action',
        'When the action happened only',
        'Whether the noun is masculine',
      ],
      answer: 'Who is doing the action',
      teach: 'That is why the ending changes for each person, '
        + 'and why the six endings are the same for every regular -er verb.',
      level: 5,
    },
  ],
})

/* ── numbers, dates, prices and time ───────────────────────────────────── */

teach({
  topicId: 'numbers-time-french',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Learn one to twenty, then the tens. '
      + 'From 21 to 69 the pattern is regular. '
      + '70 is soixante-dix, sixty ten, and 80 is quatre-vingts, '
      + 'four twenties. '
      + 'The time is Il est trois heures. '
      + 'Dates go day then month, with le in front.',
    method: [
      'Build any number from the tens plus the units.',
      'For 70 to 99, start from sixty or from four twenties.',
      'For the time, start with Il est and end with heures.',
    ],
  },

  idea:
    'The numbers up to sixteen each have their own word, '
    + 'and after that French builds them. '
    + 'The building is regular as far as sixty nine, '
    + 'and then it changes twice before a hundred. '
    + 'The time, a price and a date are each a short fixed pattern '
    + 'with a number dropped into it.',

  mechanism:
    'French numbers look harder than they are because of one stretch, '
    + 'and knowing what happened there removes most of the difficulty. '
    + 'From 21 to 69 the pattern is regular: '
    + 'the ten, then the unit, as in trente-quatre for thirty four. '
    + 'Then French stops having a word for seventy. '
    + 'Instead it counts on from sixty: '
    + 'soixante-dix is sixty ten, soixante-onze is sixty eleven, '
    + 'and so on up to soixante-dix-neuf, sixty nineteen. '
    + 'Eighty starts again from four twenties: quatre-vingts, '
    + 'then quatre-vingt-un, four twenty one, '
    + 'through quatre-vingt-dix, four twenty ten, for ninety, '
    + 'and quatre-vingt-dix-neuf, four twenty nineteen, for ninety nine. '
    + 'So there is nothing to memorise between seventy and a hundred. '
    + 'There is one thing to understand: '
    + 'from seventy you are adding to sixty, '
    + 'and from eighty you are adding to four twenties. '
    + 'The time has its own small rule worth seeing. '
    + 'Heures is always there, '
    + 'because French is saying how many hours it is '
    + 'rather than naming a clock position, '
    + 'which is why you cannot drop it as English drops o’clock.',

  recap:
    'You count and tell the time in English and in your own language. '
    + 'The French numbers are new words for the same amounts, '
    + 'and only the stretch from seventy to ninety nine is built '
    + 'differently.',

  method: [
    'Learn one to twenty as whole words.',
    'Learn the tens up to soixante.',
    'For 21 to 69, say the ten then the unit: quarante-trois.',
    'For 70 to 79, say soixante then the number from ten to nineteen.',
    'For 80 to 99, start from quatre-vingt.',
    'For the time, say Il est, the number, then heures.',
    'For a date, say le, then the day, then the month.',
    'Use le premier for the first of a month.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Write 45 in French.',
      steps: [
        'Forty is quarante.',
        'Five is cinq.',
        'The ten comes first.',
      ],
      answer: 'Quarante-cinq.',
    },
    {
      level: 4,
      ask: 'Write 75 in French, and say how it is built.',
      steps: [
        'French has no word for seventy.',
        'It counts on from sixty: soixante.',
        'Seventy five is sixty plus fifteen.',
      ],
      answer: 'Soixante-quinze, which is literally sixty fifteen.',
    },
    {
      level: 5,
      ask: 'Write 92 in French and explain the pattern.',
      steps: [
        'Eighty in French is quatre-vingts, four twenties.',
        'Ninety is quatre-vingt-dix, four twenty ten.',
        'Ninety two is that plus two.',
      ],
      answer: 'Quatre-vingt-douze, literally four twenty twelve. '
        + 'From eighty onwards the number is built on four twenties.',
    },
  ],

  traps: [
    {
      mistake: 'Looking for a single word for seventy, eighty or ninety.',
      why: 'There is none. '
        + 'Seventy counts on from sixty and eighty starts from four '
        + 'twenties.',
    },
    {
      mistake: 'Dropping heures when telling the time.',
      why: 'French is saying how many hours it is. '
        + 'Il est trois is not a time.',
    },
    {
      mistake: 'Saying le un mai for the first of May.',
      why: 'The first of the month is le premier mai. '
        + 'Every other day uses the plain number.',
    },
    {
      mistake: 'Putting the month before the day.',
      why: 'French gives the day first: le douze mai, not mai douze.',
    },
  ],

  extension:
    'Prices and shopping follow at once: '
    + 'Ça coûte combien?, C’est trop cher, Je voudrais ... '
    + 'All of it rests on the numbers, '
    + 'which is why the seventy to ninety nine stretch is worth settling '
    + 'now.',

  figure: {
    alt: 'The numbers from 1 to 100 drawn as a bar in four bands. Up to 16 '
      + 'each number has its own word; from there to 69 it is the ten and '
      + 'then the unit; from 69 to 79, in red, French counts on from '
      + 'sixty; and from 79 to 100, also in red, it starts again from four '
      + 'twenties. Two boxes below give the arithmetic: soixante-dix is '
      + 'sixty ten, 60 + 10 = 70, and quatre-vingt-dix is four twenty ten, '
      + '4 x 20 + 10 = 90.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">French numbers break twice, and both breaks are arithmetic</text>'
      + '<path d="M 40 150 H 132 V 184 H 40 Z" stroke="currentColor"/>'
      + '<text x="86" y="208" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">each has</text>'
      + '<text x="86" y="224" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">its own word</text>'
      + '<path d="M 132 150 H 435 V 184 H 132 Z" stroke="currentColor"/>'
      + '<text x="283" y="208" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">the ten, then</text>'
      + '<text x="283" y="224" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">the unit</text>'
      + '<path d="M 435 150 H 492 V 184 H 435 Z" stroke="#c8433a"/>'
      + '<text x="463" y="208" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">counting on</text>'
      + '<text x="463" y="224" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">from sixty</text>'
      + '<path d="M 492 150 H 612 V 184 H 492 Z" stroke="#c8433a"/>'
      + '<text x="552" y="208" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">four twenties,</text>'
      + '<text x="552" y="224" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">then counting on</text>'
      + '<path d="M 40 140 V 150" stroke-width="2"/>'
      + '<text x="40" y="132" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">1</text>'
      + '<path d="M 132 140 V 150" stroke-width="2"/>'
      + '<text x="132" y="132" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">16</text>'
      + '<path d="M 435 140 V 150" stroke-width="2"/>'
      + '<text x="435" y="132" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">69</text>'
      + '<path d="M 492 140 V 150" stroke-width="2"/>'
      + '<text x="492" y="132" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">79</text>'
      + '<path d="M 612 140 V 150" stroke-width="2"/>'
      + '<text x="612" y="132" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">100</text>'
      + '<text x="320" y="96" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">un, deux, trois ... and then it stops being regular</text>'
      + '<path d="M 40 262 H 310 V 330 H 40 Z" stroke="#c8433a"/>'
      + '<text x="175" y="286" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">soixante-dix</text>'
      + '<text x="175" y="308" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">sixty ten, which is 60 + 10 = 70</text>'
      + '<path d="M 342 262 H 612 V 330 H 342 Z" stroke="#c8433a"/>'
      + '<text x="477" y="286" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">quatre-vingt-dix</text>'
      + '<text x="477" y="308" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">four twenty ten, 4 x 20 + 10 = 90</text>'
      + '<text x="320" y="368" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">so there is nothing to memorise above sixty nine.</text>'
      + '<text x="320" y="390" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">There is one thing to understand, and it is addition.</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The numbers, and how each stretch of them is built',
      columns: ['From', 'In French', 'How it is built'],
      rows: [
        [
          '1 to 10',
          'un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix',
          'Each has its own word',
        ],
        [
          '11 to 16',
          'onze, douze, treize, quatorze, quinze, seize',
          'Each has its own word',
        ],
        ['17 to 19', 'dix-sept, dix-huit, dix-neuf', 'Ten, then the unit'],
        [
          '21 to 69',
          'trente-quatre is thirty four',
          'The ten, then the unit, all the way',
        ],
        [
          '70 to 79',
          'soixante-dix is seventy, soixante-onze is seventy one',
          'Counting on from sixty',
        ],
        [
          '80 to 99',
          'quatre-vingts is eighty, quatre-vingt-dix is ninety',
          'Four twenties, and then counting on',
        ],
      ],
      note: 'The tens themselves are vingt, trente, quarante, cinquante, '
        + 'soixante, soixante-dix, quatre-vingts, quatre-vingt-dix and '
        + 'cent.',
    },
    {
      caption: 'The time, a price and a date, each a fixed pattern',
      columns: ['To say', 'In French'],
      rows: [
        ['It is three o’clock', 'Il est trois heures'],
        ['It is half past three', 'Il est trois heures et demie'],
        ['It is noon, it is midnight', 'Il est midi, il est minuit'],
        ['How much does it cost?', 'Ça coûte combien?'],
        ['It costs twenty cedis', 'Ça coûte vingt cedis'],
        ['The twelfth of May', 'le douze mai, with the day before the month'],
        ['The first of May', 'le premier mai, and never le un'],
      ],
      note: 'Heures is always there, even where English leaves o’clock out.',
    },
  ],
  questions: [
    {
      id: 'num-1',
      ask: 'How do you write 30 in French?',
      kind: 'choice',
      options: ['trente', 'quarante', 'vingt'],
      answer: 'trente',
      teach: 'Vingt is 20, trente is 30, quarante is 40.',
      level: 3,
    },
    {
      id: 'num-2',
      ask: 'What does soixante-dix mean literally?',
      kind: 'choice',
      options: ['Sixty ten', 'Seventy', 'Six tens'],
      answer: 'Sixty ten',
      teach: 'French has no separate word for seventy, '
        + 'so it counts on from sixty.',
      level: 4,
    },
    {
      id: 'num-3',
      ask: 'Which is the correct way to say it is three o’clock?',
      kind: 'choice',
      options: ['Il est trois heures', 'Il est trois', 'C’est trois'],
      answer: 'Il est trois heures',
      teach: 'Heures cannot be dropped, '
        + 'because French is saying how many hours it is.',
      level: 5,
    },
  ],
})
