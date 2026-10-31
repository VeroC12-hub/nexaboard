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
    'To describe a family: '
    + 'J’ai deux frères et une soeur, meaning I have two brothers and a '
    + 'sister. '
    + 'Mon père est agriculteur. Ma mère est enseignante. '
    + 'Mon is used before a masculine noun, ma before a feminine one, '
    + 'and mes before any plural. '
    + 'To describe a person: '
    + 'Elle est grande et mince. Il est petit. Elle est gentille. '
    + 'To describe a place: '
    + 'Il y a means there is or there are, '
    + 'as in Il y a trois salles de classe. '
    + 'J’habite à Kumasi means I live in Kumasi. '
    + 'Ma maison est près de l’école means my house is near the school.',

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

  idea:
    'An adjective agrees with the noun it describes. '
    + 'The basic rule adds -e for feminine, '
    + '-s for masculine plural, '
    + 'and -es for feminine plural: '
    + 'un garçon intelligent, une fille intelligente, '
    + 'des garçons intelligents, des filles intelligentes. '
    + 'An adjective already ending in -e does not add another: '
    + 'mince stays mince. '
    + 'Some are irregular: '
    + 'beau becomes belle, vieux becomes vieille, '
    + 'blanc becomes blanche, gentil becomes gentille. '
    + 'Most adjectives follow the noun. '
    + 'A small group goes before it, '
    + 'including grand, petit, bon, mauvais, beau, joli, jeune, vieux, '
    + 'nouveau and long.',

  mechanism:
    'Agreement is simple and it depends completely on something from last '
    + 'year, '
    + 'which is why learners who skipped gender cannot do this topic at '
    + 'all. '
    + 'To add -e for a feminine noun you have to know the noun is '
    + 'feminine, '
    + 'and that fact lives with the noun, '
    + 'which is why nouns are learned as la table and not as table. '
    + 'If the gender was never learned, '
    + 'the adjective rule is useless however well you know it. '
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
    'You learned in JHS 1 that every French noun is masculine or feminine, '
    + 'and that the article shows which. '
    + 'This is where that knowledge is spent: '
    + 'the adjective has to match.',

  method: [
    'Find the noun.',
    'Recall its gender from the article you learned it with.',
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
        'So you must know whether the noun is feminine.',
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
    + 'A question starting with Qui asks who, '
    + 'Que or Quoi asks what, '
    + 'Où asks where, '
    + 'Quand asks when, '
    + 'Pourquoi asks why, '
    + 'Combien asks how many, '
    + 'and Comment asks how. '
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
