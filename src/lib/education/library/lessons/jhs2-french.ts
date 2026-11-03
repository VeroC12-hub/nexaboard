/**
 * Stored lessons for JHS 2 French.
 *
 * Written at about grade 7, with a `brief` form on every topic.
 *
 * ── Same rule as JHS 1 ────────────────────────────────────────────────────
 *
 * A short closed set of French forms, with everything around them in plain
 * English, because a learner may have nobody to hear the language from.
 * Accents are written in full, since an accent is part of the spelling.
 *
 * `adjectives-french` depends entirely on `gender-articles` from JHS 1, and
 * says so, because agreement is impossible to apply if the gender of the
 * noun was never learned with the noun.
 *
 * `read-french` is the one that could be faked by a learner who guesses from
 * words that look English, so the lesson names that trap and the false
 * friends it leads to.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── describing people and places ─────────────────────────────────────── */

teach({
  topicId: 'describe-french',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'To describe, you need the verbs être and avoir, '
      + 'a few adjectives, and the possessives mon, ma, mes. '
      + 'J’ai un frère. Ma soeur est grande. '
      + 'Il y a means there is or there are, '
      + 'and it is how you describe a place.',
    method: [
      'Use avoir for what somebody has and être for what they are like.',
      'Use il y a for what a place contains.',
      'Make every adjective agree with its noun.',
    ],
  },

  idea:
    'Almost all description in French runs through two verbs, '
    + 'être for what somebody is and avoir for what they have, '
    + 'and most of this topic is choosing between them. '
    + 'Mon, ma and mes, meaning my, change with the noun '
    + 'in the same way the article does. '
    + 'Il y a means there is or there are, '
    + 'and J’habite à Kumasi means I live in Kumasi.',

  mechanism:
    'Two verbs carry almost all description in French, '
    + 'and keeping them apart solves most of the topic. '
    + 'Être is for what somebody or something IS: '
    + 'tall, kind, a teacher, in Kumasi. '
    + 'Avoir is for what they HAVE: '
    + 'two brothers, twelve years, a bicycle. '
    + 'English blurs this, because English says "I am twelve" '
    + 'where French says "I have twelve years". '
    + 'So before every sentence, ask which of the two you need, '
    + 'and that single question removes the commonest error in the topic. '
    + 'The second thing worth understanding is il y a. '
    + 'It does not change for singular or plural: '
    + 'il y a une salle and il y a trois salles are both correct, '
    + 'which makes it the easiest and most useful phrase in the whole year, '
    + 'because any description of a place can be built from it. '
    + 'And the possessives follow the gender rule from JHS 1 '
    + 'rather than the owner. '
    + 'Mon frère is my brother and ma soeur is my sister, '
    + 'and that m changes because of the gender of the NOUN, '
    + 'not because of who is speaking. '
    + 'This catches every learner once, '
    + 'because in English my never changes at all.',

  recap:
    'You can greet, introduce yourself and give your age, '
    + 'and you know that French nouns have gender. '
    + 'This uses both to describe your family, your school and your town.',

  method: [
    'Decide whether the sentence is about being or having.',
    'Use être for qualities and avoir for possessions.',
    'Choose mon, ma or mes from the gender of the noun.',
    'For a place, start with il y a.',
    'Make each adjective agree with its noun.',
    'Use J’habite à for where you live.',
    'Keep the sentences short and correct rather than long and guessed.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Say in French: I have two brothers.',
      steps: [
        'Having, so avoir.',
        'J’ai for I have.',
      ],
      answer: 'J’ai deux frères.',
    },
    {
      level: 4,
      ask: 'Which is correct, mon soeur or ma soeur? Why?',
      steps: [
        'Soeur is a feminine noun.',
        'The possessive agrees with the noun, not the owner.',
      ],
      answer: 'Ma soeur. '
        + 'The possessive follows the gender of the noun.',
    },
    {
      level: 5,
      ask: 'Why is "Je suis douze ans" wrong, '
        + 'and what does the mistake show?',
      steps: [
        'Age in French is something you have.',
        'So the verb must be avoir.',
        'The learner used être because English says I am twelve.',
      ],
      answer: 'It should be J’ai douze ans. '
        + 'The error comes from translating English directly, '
        + 'because French has an age rather than being one.',
    },
  ],

  traps: [
    {
      mistake: 'Using être for age.',
      why: 'French has an age: J’ai douze ans.',
    },
    {
      mistake: 'Choosing mon or ma from the owner.',
      why: 'It agrees with the noun. '
        + 'Ma soeur whoever is speaking.',
    },
    {
      mistake: 'Changing il y a for a plural.',
      why: 'It stays the same: il y a trois salles.',
    },
    {
      mistake: 'Leaving adjectives unagreed.',
      why: 'Grande for a feminine noun, grand for a masculine one.',
    },
  ],

  extension:
    'The negative needs two words round the verb: '
    + 'Je n’ai pas de frère, meaning I have no brother. '
    + 'Notice that un becomes de after a negative, '
    + 'which is a rule with no English equivalent at all.',

  figure: {
    alt: 'What you want to say drawn in a box at the top, with two arrows '
      + 'leading down. One goes to être, to be, for what somebody is: elle '
      + 'est grande, ma mère est enseignante. The other goes to avoir, to '
      + 'have, for what they have: j’ai deux frères, j’ai douze ans. A '
      + 'dashed red note warns that English blurs the two, saying I am '
      + 'twelve where French says I have twelve years.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">ask first: is it what they are, or what they have?</text>'
      + '<path d="M 230 42 H 410 V 84 H 230 Z"/>'
      + '<text x="320" y="69" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">what you want to say</text>'
      + '<path d="M 270 84 L 180 124" stroke-width="2"/>'
      + '<path d="M 170 128 L 186 116 L 192 130 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 370 84 L 460 124" stroke-width="2"/>'
      + '<path d="M 470 128 L 448 130 L 454 116 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 24 134 H 300 V 176 H 24 Z" stroke="#0f8a4d"/>'
      + '<text x="162" y="161" font-size="19" text-anchor="middle" fill="#0f8a4d" stroke="none">être, to be</text>'
      + '<text x="162" y="196" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">for what somebody IS:</text>'
      + '<text x="162" y="216" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Elle est grande.</text>'
      + '<text x="162" y="236" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Ma mère est enseignante.</text>'
      + '<path d="M 340 134 H 616 V 176 H 340 Z" stroke="#0f8a4d"/>'
      + '<text x="478" y="161" font-size="19" text-anchor="middle" fill="#0f8a4d" stroke="none">avoir, to have</text>'
      + '<text x="478" y="196" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">for what somebody HAS:</text>'
      + '<text x="478" y="216" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">J’ai deux frères.</text>'
      + '<text x="478" y="236" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">J’ai douze ans.</text>'
      + '<path d="M 90 258 H 550 V 310 H 90 Z" stroke="#c8433a" stroke-dasharray="7 6" stroke-width="2"/>'
      + '<text x="320" y="280" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">English blurs the two: it says I AM twelve</text>'
      + '<text x="320" y="300" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">where French says I HAVE twelve years</text>'
      + '<text x="320" y="340" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">and il y a, there is or there are, never changes for number:</text>'
      + '<text x="320" y="364" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">il y a une salle and il y a trois salles are both correct,</text>'
      + '<text x="320" y="386" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">which makes it the most useful phrase of the year</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Which of the two verbs each sentence needs',
      columns: ['In English', 'In French', 'Which verb, and why'],
      rows: [
        [
          'She is tall and slim',
          'Elle est grande et mince',
          'être: it is what she is',
        ],
        [
          'My mother is a teacher',
          'Ma mère est enseignante',
          'être: it is what she is',
        ],
        [
          'I have two brothers and a sister',
          'J’ai deux frères et une soeur',
          'avoir: it is what I have',
        ],
        [
          'I am twelve years old',
          'J’ai douze ans',
          'avoir: in French you have the years',
        ],
      ],
      note: 'Asking which of the two you need, before every sentence, '
        + 'removes the commonest error in the topic.',
    },
    {
      caption: 'My changes with the noun, exactly as the article does',
      columns: ['Before', 'The form', 'Example'],
      rows: [
        ['A masculine noun', 'mon', 'mon père'],
        ['A feminine noun', 'ma', 'ma mère'],
        ['Any plural', 'mes', 'mes frères, mes soeurs'],
      ],
      note: 'Il y a is the exception that makes life easy: it does not '
        + 'change for number at all, so il y a une salle and il y a trois '
        + 'salles are both correct.',
    },
  ],
  questions: [
    {
      id: 'dsc-1',
      ask: 'How do you say "there are three classrooms"?',
      kind: 'choice',
      options: [
        'Il y a trois salles de classe',
        'Ils sont trois salles de classe',
        'Il a trois salles de classe',
      ],
      answer: 'Il y a trois salles de classe',
      teach: 'Il y a does not change for the plural.',
      level: 3,
    },
    {
      id: 'dsc-2',
      ask: 'Which verb is used for what somebody is like?',
      kind: 'choice',
      options: ['être', 'avoir', 'aller'],
      answer: 'être',
      teach: 'Avoir is for what they have.',
      level: 4,
    },
    {
      id: 'dsc-3',
      ask: 'Mon or ma agrees with:',
      kind: 'choice',
      options: [
        'the gender of the noun',
        'the gender of the owner',
        'the number of owners',
      ],
      answer: 'the gender of the noun',
      teach: 'Ma soeur and mon frère, whoever is speaking.',
      level: 5,
    },
  ],
})

/* ── adjective agreement ─────────────────────────────────────────────── */

teach({
  topicId: 'adjectives-french',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A French adjective changes to match its noun: '
      + 'add -e for feminine, -s for plural, -es for both. '
      + 'Most adjectives come AFTER the noun, '
      + 'and a short list of common ones comes before it. '
      + 'Agreement is impossible without knowing the noun’s gender.',
    method: [
      'Find the noun and its gender first.',
      'Add -e, -s or -es as needed.',
      'Place it after the noun unless it is one of the common exceptions.',
    ],
  },

  why:
    'You are at Aflao, on the Togo border, '
    + 'buying from a trader who speaks French. '
    + 'You want to say "a small bag" and then "a small house". '
    + 'In English the word small does not change between the two. '
    + 'In French you must write petit for one of them and petite for the '
    + 'other, and nothing in the English sentence tells you which. '
    + 'What decides it is the noun. '
    + 'This topic is how you work out which form to write.',

  notation:
    'A dictionary gives one form of the adjective: petit. '
    + 'That form is called the masculine singular, '
    + 'and it is the one you start from. '
    + 'The letters added to it are called the ending, '
    + 'so petite is petit plus the ending -e. '
    + 'Out loud, the t in petit is silent and the t in petite is heard, '
    + 'so the ending changes the sound as well as the spelling. '
    + 'The commonest way to lose a mark is to add the ending for gender '
    + 'and forget the one for number, '
    + 'writing petite filles instead of petites filles.',

  idea:
    'An adjective agrees with the noun it describes, '
    + 'in gender and in number, '
    + 'so you have to know the gender of the noun before you can do '
    + 'anything at all. '
    + 'A few adjectives make their feminine irregularly. '
    + 'Most adjectives follow the noun, and a small group goes before it.',

  mechanism:
    'Agreement is simple and it depends completely on one fact about the '
    + 'noun: whether it is masculine or feminine. '
    + 'A learner who does not have that fact cannot do this topic at '
    + 'all. '
    + 'To add -e for a feminine noun you have to know the noun is '
    + 'feminine, '
    + 'and that fact lives with the noun, '
    + 'which is why nouns are learned as la table and not as table. '
    + 'If the gender was never learned, '
    + 'the adjective rule is useless however well it is memorised. '
    + 'So the first step of every agreement question is the noun. '
    + 'The position rule is the other half, '
    + 'and it is worth knowing that French and English differ here on '
    + 'purpose. '
    + 'English puts every adjective before: the red car. '
    + 'French puts most after: une voiture rouge. '
    + 'The small group that comes before '
    + 'is the group of very common, short, everyday adjectives, '
    + 'and they are worth learning as a list '
    + 'because they are the ones you will use most. '
    + 'There is one more thing that surprises people. '
    + 'A few adjectives change meaning with position. '
    + 'Un grand homme before the noun is a great man, '
    + 'and un homme grand after it is a tall man. '
    + 'So position is not only habit; '
    + 'it can carry meaning, '
    + 'which is a good reason to place adjectives deliberately '
    + 'rather than by feel.',

  recap:
    'Every French noun is either masculine or feminine. '
    + 'The word for "the" in front of it shows which one: '
    + 'le for masculine, la for feminine. '
    + 'So le livre, the book, is masculine, '
    + 'and la table, the table, is feminine. '
    + 'Nothing about a table is female. '
    + 'The gender is a fact about the word, '
    + 'so it is learned together with the word. '
    + 'That gender is the thing an adjective has to match.',

  method: [
    'Find the noun.',
    'Take its gender from the article in front of it: le is masculine, '
      + 'la is feminine.',
    'Decide singular or plural.',
    'Add nothing for masculine singular.',
    'Add -e for feminine, -s for plural, -es for feminine plural.',
    'Add nothing extra if the adjective already ends in -e.',
    'Check whether the adjective is irregular.',
    'Place it after the noun, unless it is in the short list that goes '
      + 'before.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Complete: une maison ___ (petit).',
      steps: [
        'Maison is feminine singular.',
        'Add -e.',
        'Petit is in the group that goes before the noun.',
      ],
      answer: 'Une petite maison.',
    },
    {
      level: 4,
      ask: 'Complete: des filles ___ (intelligent).',
      steps: [
        'Filles is feminine plural.',
        'Add -es.',
        'Intelligent follows the noun.',
      ],
      answer: 'Des filles intelligentes.',
    },
    {
      level: 5,
      ask: 'Why can a learner who never learned noun genders '
        + 'not apply this rule?',
      steps: [
        'The rule says add -e for a feminine noun.',
        'So the gender of the noun has to be found first.',
        'That fact belongs to the noun and is learned with it.',
        'Without it the rule cannot be applied at all.',
      ],
      answer: 'Because the rule depends on the gender of the noun, '
        + 'which is a fact about the word that has to be learned with it. '
        + 'Knowing the rule is useless without it.',
    },
  ],

  traps: [
    {
      mistake: 'Adding -e to an adjective that already ends in -e.',
      why: 'Mince stays mince in the feminine.',
    },
    {
      mistake: 'Putting every adjective before the noun as in English.',
      why: 'Most follow the noun in French. '
        + 'Only a short common list goes before.',
    },
    {
      mistake: 'Treating beau and vieux as regular.',
      why: 'They become belle and vieille, '
        + 'and they are common enough to learn whole.',
    },
    {
      mistake: 'Agreeing the adjective with the speaker.',
      why: 'It agrees with the noun it describes.',
    },
  ],

  extension:
    'An adjective describing two nouns of different gender '
    + 'takes the masculine plural, '
    + 'so un garçon et une fille intelligents. '
    + 'It is worth knowing because it looks like an error and is not.',

  figure: {
    alt: 'The rule, add -e if the noun is feminine, leading down to the '
      + 'question of which this noun is. Two answers follow: in red, you '
      + 'learned table, so the rule has nothing to work on; in green, you '
      + 'learned la table, so la petite table comes straight away. '
      + 'Beneath, most adjectives go after the noun, as in une fille '
      + 'intelligente, and a small group goes before it, as in une belle '
      + 'fille.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">the adjective rule needs a fact that lives with the noun</text>'
      + '<path d="M 180 42 H 460 V 84 H 180 Z" stroke="#0f8a4d"/>'
      + '<text x="320" y="69" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">add -e if the noun is feminine</text>'
      + '<path d="M 320 84 V 104" stroke-width="2"/>'
      + '<path d="M 320 114 L 312 96 L 328 96 Z" fill="currentColor" stroke="none"/>'
      + '<path d="M 200 118 H 440 V 158 H 200 Z"/>'
      + '<text x="320" y="144" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">but which is this noun?</text>'
      + '<path d="M 260 158 L 170 196" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 160 200 L 176 188 L 182 202 Z" fill="#c8433a" stroke="none"/>'
      + '<path d="M 380 158 L 470 196" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 480 200 L 458 202 L 464 188 Z" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 24 206 H 300 V 272 H 24 Z" stroke="#c8433a"/>'
      + '<text x="162" y="232" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">you learned table</text>'
      + '<text x="162" y="256" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">the rule has nothing to work on</text>'
      + '<path d="M 340 206 H 616 V 272 H 340 Z" stroke="#0f8a4d"/>'
      + '<text x="478" y="232" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">you learned la table</text>'
      + '<text x="478" y="256" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">la petite table, straight away</text>'
      + '<path d="M 24 296 H 616" stroke-dasharray="7 6" stroke-width="1.5"/>'
      + '<text x="162" y="326" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">most go after the noun</text>'
      + '<text x="162" y="350" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">une fille intelligente</text>'
      + '<text x="478" y="326" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">a small group goes before it</text>'
      + '<text x="478" y="350" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">une belle fille</text>'
      + '<text x="320" y="384" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">the group that goes before: grand, petit, bon, mauvais, beau, joli, jeune, vieux, nouveau, long</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What an adjective adds, according to its noun',
      columns: ['The noun is', 'What is added', 'Example'],
      rows: [
        ['Masculine singular', 'Nothing', 'un garçon intelligent'],
        ['Feminine singular', '-e', 'une fille intelligente'],
        ['Masculine plural', '-s', 'des garçons intelligents'],
        ['Feminine plural', '-es', 'des filles intelligentes'],
        [
          'Any of these, if the adjective already ends in -e',
          'No second -e',
          'un garçon mince, une fille mince',
        ],
      ],
      note: 'This rule depends completely on last year’s work. If the '
        + 'gender was never learned with the noun, the rule is useless '
        + 'however well you know it.',
    },
    {
      caption: 'The feminine form of each adjective, and where it stands',
      columns: ['Adjective', 'Feminine form', 'Where it goes'],
      rows: [
        ['intelligent', 'intelligente', 'After the noun, like most'],
        ['mince', 'mince', 'After the noun'],
        ['blanc', 'blanche', 'After the noun'],
        ['gentil', 'gentille', 'After the noun'],
        ['beau', 'belle', 'Before the noun'],
        ['vieux', 'vieille', 'Before the noun'],
        ['grand, petit, bon', 'grande, petite, bonne', 'Before the noun'],
      ],
      note: 'The small group that goes before the noun is grand, petit, '
        + 'bon, mauvais, beau, joli, jeune, vieux, nouveau and long.',
    },
  ],
  questions: [
    {
      id: 'adj-1',
      ask: 'What is added to an adjective for a feminine singular noun?',
      kind: 'choice',
      options: ['-e', '-s', '-es'],
      answer: '-e',
      teach: 'And nothing if it already ends in -e.',
      level: 3,
    },
    {
      id: 'adj-2',
      ask: 'Where do most French adjectives go?',
      kind: 'choice',
      options: [
        'After the noun',
        'Before the noun',
        'At the end of the sentence',
      ],
      answer: 'After the noun',
      teach: 'A short list of common ones goes before it.',
      level: 4,
    },
    {
      id: 'adj-3',
      ask: 'What must you know before you can make an adjective agree?',
      kind: 'choice',
      options: [
        'The gender and number of the noun',
        'The verb of the sentence',
        'Whether the speaker is male or female',
      ],
      answer: 'The gender and number of the noun',
      teach: 'Which is why nouns are learned with their articles.',
      level: 5,
    },
  ],
})

/* ── reading comprehension ─────────────────────────────────────────── */

teach({
  topicId: 'read-french',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Read the whole French text once before the questions. '
      + 'Find the verb in each sentence, because it carries the meaning. '
      + 'Answer in French, using words from the text. '
      + 'Beware false friends: a word that looks English may mean something '
      + 'else.',
    method: [
      'Read it through once without stopping at unknown words.',
      'Find the verb of each sentence first.',
      'Answer in French, building from the words of the question.',
    ],
  },

  idea:
    'A reading passage in French is answered in French. '
    + 'Read the whole text once without stopping at words you do not '
    + 'know. '
    + 'Then read the questions, '
    + 'then read again looking for each answer. '
    + 'Each question word tells you what kind of thing the answer is, '
    + 'so it narrows what you are hunting for before you start. '
    + 'Answer in a complete sentence, '
    + 'and you can build most of the answer from the words of the question '
    + 'itself.',

  mechanism:
    'There is one technique that makes an unfamiliar French sentence '
    + 'readable, '
    + 'and it is to find the verb first. '
    + 'The verb tells you what is happening, '
    + 'and once you have it the nouns around it fall into place, '
    + 'even if you do not know all of them. '
    + '"Le pêcheur répare son filet" is readable the moment you recognise '
    + 'répare, '
    + 'because somebody is repairing something, '
    + 'and the sentence has only two other words to place. '
    + 'Hunting for every unknown word first does the opposite: '
    + 'you collect meanings with no structure to hang them on. '
    + 'The second technique is to build the answer from the question. '
    + 'If the question is "Où habite Ama?", '
    + 'the answer begins "Ama habite à ...", '
    + 'and you have written a correct French sentence '
    + 'without composing anything. '
    + 'This is not a trick; '
    + 'it is why the examiner phrases questions in full sentences. '
    + 'The thing to be careful about is the false friend. '
    + 'Some French words look like English words and mean something else. '
    + 'Librairie is a bookshop, not a library. '
    + 'Assister à means to attend, not to assist. '
    + 'Actuellement means currently, not actually. '
    + 'Sensible means sensitive. '
    + 'A learner guessing from appearance will get these wrong with '
    + 'confidence, '
    + 'which is worse than not knowing, '
    + 'so a guess should always be checked against the rest of the '
    + 'sentence.',

  recap:
    'You answer comprehension questions in English and in your own '
    + 'language, '
    + 'and you know to look for the answer in the text. '
    + 'This does the same in French, '
    + 'with the answers written in French too.',

  method: [
    'Read the whole passage once, without stopping.',
    'Read all the questions.',
    'For each sentence you need, find the verb first.',
    'Work out the rest around the verb.',
    'Note the question word: Qui, Où, Quand, Pourquoi, Combien, Comment.',
    'Build your answer from the words of the question.',
    'Answer in a complete French sentence.',
    'Do not guess a word only from its appearance.',
    'Check that your answer is in the tense the question used.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What does the question word Où ask for?',
      steps: [
        'Match each question word to what it asks.',
      ],
      answer: 'Where.',
    },
    {
      level: 4,
      ask: 'The question is "Où habite Kofi?" '
        + 'The text says "Kofi habite à Tamale". '
        + 'Write the answer.',
      steps: [
        'Build from the question.',
        'Replace the question word with the information.',
      ],
      answer: 'Kofi habite à Tamale.',
    },
    {
      level: 5,
      ask: 'A learner reads "Je vais à la librairie" '
        + 'and answers that the person went to a library. '
        + 'What went wrong?',
      steps: [
        'Librairie looks like library.',
        'It actually means bookshop.',
        'The learner guessed from appearance.',
      ],
      answer: 'Librairie means bookshop, not library. '
        + 'It is a false friend, '
        + 'and guessing from the English look of a word '
        + 'produces a confident wrong answer.',
    },
  ],

  traps: [
    {
      mistake: 'Stopping at the first unknown word.',
      why: 'Read on. '
        + 'The sentence usually makes the word clear.',
    },
    {
      mistake: 'Guessing a word from its English appearance.',
      why: 'False friends: librairie is a bookshop, '
        + 'actuellement means currently.',
    },
    {
      mistake: 'Answering in English.',
      why: 'The paper is in French and marked in French.',
    },
    {
      mistake: 'Answering with one word.',
      why: 'A complete sentence is asked for, '
        + 'and the question gives you most of it.',
    },
  ],

  extension:
    'Reading short texts often does more than learning long word lists. '
    + 'A sentence teaches you the word and the words it goes with. '
    + 'A list teaches the word alone. '
    + 'And a word alone is exactly how a false friend catches you.',

  figure: {
    alt: 'The sentence Le pêcheur répare son filet, with répare ringed in '
      + 'green as the verb, leading down to somebody is repairing '
      + 'something, and from there to the two words left to place: who, le '
      + 'pêcheur, and what, son filet. Beside it in red, hunting every '
      + 'unknown word first collects meanings with nothing to hang them '
      + 'on.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">find the verb, and the rest of the sentence falls into place</text>'
      + '<text x="70" y="94" font-size="22" text-anchor="start" fill="currentColor" stroke="none">Le pêcheur</text>'
      + '<text x="212" y="94" font-size="22" text-anchor="start" fill="#0f8a4d" stroke="none">répare</text>'
      + '<path d="M 204 70 H 304 V 104 H 204 Z" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="316" y="94" font-size="22" text-anchor="start" fill="currentColor" stroke="none">son filet.</text>'
      + '<path d="M 254 108 V 136" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 254 146 L 246 128 L 262 128 Z" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 120 150 H 390 V 190 H 120 Z" stroke="#0f8a4d"/>'
      + '<text x="255" y="175" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">somebody is repairing something</text>'
      + '<path d="M 160 190 L 120 220" stroke-width="2"/>'
      + '<path d="M 112 226 L 124 210 L 134 224 Z" fill="currentColor" stroke="none"/>'
      + '<text x="110" y="250" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">who? le pêcheur</text>'
      + '<path d="M 350 190 L 390 220" stroke-width="2"/>'
      + '<path d="M 398 226 L 376 224 L 386 210 Z" fill="currentColor" stroke="none"/>'
      + '<text x="400" y="250" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">what? son filet</text>'
      + '<text x="255" y="282" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">and only two words were left to place</text>'
      + '<path d="M 440 60 H 620 V 268 H 440 Z" stroke="#c8433a" stroke-dasharray="7 6" stroke-width="2"/>'
      + '<text x="530" y="88" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">hunting every word</text>'
      + '<text x="530" y="106" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">first does the opposite</text>'
      + '<text x="530" y="142" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">pêcheur ... ?</text>'
      + '<text x="530" y="166" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">filet ... ?</text>'
      + '<text x="530" y="190" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">son ... ?</text>'
      + '<text x="530" y="226" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">meanings collected,</text>'
      + '<text x="530" y="244" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">with nothing to hang</text>'
      + '<text x="530" y="262" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">them on</text>'
      + '<path d="M 24 314 H 616" stroke-dasharray="7 6" stroke-width="1.5"/>'
      + '<text x="320" y="344" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">and read in three passes: the whole text once without stopping,</text>'
      + '<text x="320" y="366" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">then the questions, then again looking for each answer</text>'
      + '<text x="320" y="390" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">most of your answer can be built from the words of the question itself</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each question word, and the kind of answer it is asking for',
      columns: ['Question word', 'It asks', 'So the answer is'],
      rows: [
        ['Qui', 'who', 'A person'],
        ['Que, or Quoi', 'what', 'A thing, or an action'],
        ['Où', 'where', 'A place'],
        ['Quand', 'when', 'A time'],
        ['Pourquoi', 'why', 'A reason, usually beginning parce que'],
        ['Combien', 'how many, or how much', 'A number'],
        ['Comment', 'how', 'A way of doing something'],
      ],
      note: 'Most of the answer can be built from the words of the question '
        + 'itself, which is why answering in a complete sentence is '
        + 'easier than it looks.',
    },
  ],
  questions: [
    {
      id: 'rfr-1',
      ask: 'Which question word asks "how many"?',
      kind: 'choice',
      options: ['Combien', 'Comment', 'Quand'],
      answer: 'Combien',
      teach: 'Comment asks how, and Quand asks when.',
      level: 3,
    },
    {
      id: 'rfr-2',
      ask: 'What should you look for first in a difficult sentence?',
      kind: 'choice',
      options: [
        'The verb',
        'The longest word',
        'The last word',
      ],
      answer: 'The verb',
      teach: 'It tells you what is happening, '
        + 'and the rest falls into place around it.',
      level: 4,
    },
    {
      id: 'rfr-3',
      ask: 'What does librairie mean?',
      kind: 'choice',
      options: ['A bookshop', 'A library', 'A librarian'],
      answer: 'A bookshop',
      teach: 'It is a false friend. '
        + 'A library is une bibliothèque.',
      level: 5,
    },
  ],
})
