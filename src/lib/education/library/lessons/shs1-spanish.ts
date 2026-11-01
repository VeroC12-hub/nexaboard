/**
 * Stored lessons for SHS 1 Spanish.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── The one advantage Spanish gives a learner ─────────────────────────────
 *
 * Spanish spelling is almost perfectly regular. A learner who knows the
 * five vowel sounds and a short list of consonant rules can read any Spanish
 * word aloud correctly, including one they have never seen, and can spell
 * any word they have heard. Nothing in French or English works that way. So
 * pronunciation comes first in this file, and the later lessons lean on it,
 * because a learner who can read aloud confidently will learn vocabulary
 * several times faster.
 *
 * ── Where Ghanaian learners actually lose marks ───────────────────────────
 *
 * Two places. The first is ser and estar, because English has one verb for
 * to be and Spanish has two, and the choice is not a matter of taste. The
 * second is agreement, because a Ghanaian learner who also studies French
 * will carry French habits across, and the two languages agree in similar
 * but not identical ways. Each lesson names the interference where it
 * occurs.
 *
 * ── Spanish forms in full ─────────────────────────────────────────────────
 *
 * Every form is written with its accents, because an accent in Spanish
 * changes either the stress or the word, and sometimes both. Everything
 * around the Spanish is in plain English, so a learner with nobody to
 * speak to can still work from the page.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── pronunciation and spelling ─────────────────────────────────────────── */

teach({
  topicId: 'pronunciation-es',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Spanish has five vowel sounds, one for each vowel letter, '
      + 'and they do not change. '
      + 'The letter h is silent. '
      + 'J sounds like a strong h, '
      + 'and g before e or i sounds the same. '
      + 'Ll sounds like y, and ñ like ny in canyon. '
      + 'Stress falls on the next to last syllable '
      + 'for words ending in a vowel, n or s, '
      + 'and on the last syllable otherwise. '
      + 'A written accent marks any exception.',
    method: [
      'Give each vowel its one sound, every time.',
      'Ignore h completely.',
      'Check g and c, which change before e and i.',
      'Count syllables from the end to place the stress.',
      'If there is a written accent, stress that syllable.',
    ],
  },

  idea:
    'Spanish spelling is close to regular, '
    + 'so a written word tells you how to say it '
    + 'and a spoken word tells you how to write it. '
    + 'There are five vowel sounds, one per letter, '
    + 'and each is short and clear: '
    + 'a as in father, e as in bed, i as in machine, '
    + 'o as in or, u as in rule. '
    + 'They never change with position '
    + 'and there is no silent vowel. '
    + 'The consonants to watch are few. '
    + 'H is always silent: hola begins with the o sound. '
    + 'J is a strong h sound, as in Juan. '
    + 'G is hard before a, o and u, '
    + 'and sounds like j before e and i, '
    + 'so gato is hard and gente is not. '
    + 'C is hard before a, o and u, '
    + 'and like s before e and i in Latin American Spanish, '
    + 'so casa is hard and cena is not. '
    + 'Qu sounds like k, and the u is silent: que. '
    + 'Ll sounds like y: llamo. '
    + 'Ñ sounds like the ny in canyon: año. '
    + 'R between vowels is a single tap, '
    + 'and rr, or r at the start of a word, is rolled. '
    + 'V sounds close to b. '
    + 'Z sounds like s in Latin American Spanish. '
    + 'Stress follows two rules. '
    + 'A word ending in a vowel, n or s '
    + 'is stressed on the next to last syllable. '
    + 'Any other word is stressed on the last syllable. '
    + 'A written accent overrides both rules '
    + 'and marks the stressed syllable.',

  mechanism:
    'The reason to spend a whole topic on pronunciation '
    + 'is that Spanish pays it back immediately, '
    + 'and English and French do not. '
    + 'In English the letters ough '
    + 'are said five different ways. '
    + 'In Spanish there is one sound for each vowel letter, '
    + 'so a learner who has mastered five sounds '
    + 'can read aloud a word they have never seen '
    + 'and will be right. '
    + 'The same works backwards: '
    + 'a word heard clearly can be spelt. '
    + 'So the investment is small and the return is the whole language, '
    + 'and that is worth saying to a learner '
    + 'who thinks pronunciation is the least examinable topic. '
    + 'It is examined, in dictation and in oral work, '
    + 'and it also decides how fast everything else is learned. '
    + 'Now the specific interference a Ghanaian learner faces, '
    + 'because that is where the errors come from. '
    + 'The first is English vowels. '
    + 'An English speaker reads the e in Spanish me '
    + 'as the English ee, '
    + 'and the a in casa as the a of cat. '
    + 'Both are wrong, and both persist for years '
    + 'unless named early. '
    + 'The five Spanish vowels are pure and short, '
    + 'and the nearest Ghanaian comparison is useful here: '
    + 'the vowels of Akan, Ewe and Ga '
    + 'are far closer to the Spanish ones than English vowels are, '
    + 'so a learner who pronounces Spanish vowels '
    + 'as they would in their own Ghanaian language '
    + 'will usually be right. '
    + 'That is a genuine advantage and it should be used. '
    + 'The second is the silent h, '
    + 'which is the first thing a learner gets wrong. '
    + 'Hola is said as though written ola. '
    + 'Hablar begins with the a sound. '
    + 'And because h is silent, '
    + 'the j carries the h sound instead, '
    + 'so Juan sounds roughly like Hwan '
    + 'and jugar begins with the sound English spells h. '
    + 'Those two facts together, '
    + 'h silent and j pronounced h, '
    + 'remove most of the beginner errors in reading aloud. '
    + 'The third is the g and c shift, '
    + 'which is a real rule rather than an exception list. '
    + 'Both letters soften before e and i '
    + 'and stay hard before a, o and u. '
    + 'So gato is hard and gente soft; '
    + 'casa is hard and cena soft. '
    + 'The pattern is the same in both letters, '
    + 'which makes it one rule and not two. '
    + 'And it explains spellings that otherwise look odd: '
    + 'to keep a hard g before e, '
    + 'Spanish writes gu, as in guerra, '
    + 'and to keep a hard c before e it writes qu, as in queso. '
    + 'So the spelling is protecting the sound, '
    + 'which is the opposite of English, '
    + 'where the sound bends to the spelling. '
    + 'Fourth, stress and the written accent, '
    + 'which carry marks directly. '
    + 'The two rules cover most words, '
    + 'and the accent is written only when a word breaks them. '
    + 'Hablo follows the rule, ending in a vowel '
    + 'and stressed on the next to last syllable, '
    + 'so no accent is needed. '
    + 'Habló breaks it, being stressed on the last syllable, '
    + 'so the accent is written. '
    + 'And those two words are different words: '
    + 'hablo is I speak and habló is he spoke. '
    + 'So the accent is not decoration '
    + 'and omitting it writes a different word. '
    + 'The same is true of a small set of pairs: '
    + 'si means if and sí means yes; '
    + 'el means the and él means he; '
    + 'que means that and qué means what. '
    + 'What has to be written down is the accent. '
    + 'Every time. '
    + 'In a written examination an unaccented habló '
    + 'is marked as the present tense, '
    + 'and a candidate who knew the past tense perfectly '
    + 'has written the wrong answer.',

  recap:
    'You can read English aloud, '
    + 'where the same letters have many sounds. '
    + 'This gives a language where they have one each, '
    + 'and shows how much that is worth.',

  method: [
    'Say each vowel with its single Spanish sound.',
    'Use the vowels of your Ghanaian language as a guide, not English.',
    'Pass over h without a sound.',
    'Give j the sound English writes as h.',
    'Check g and c: hard before a, o, u and soft before e, i.',
    'Say ll as y and ñ as ny.',
    'Count syllables from the end to place the stress.',
    'If a written accent appears, stress that syllable.',
    'Write every accent, since it can change the word.',
  ],

  worked: [
    {
      level: 2,
      ask: 'How is hola pronounced, and why?',
      steps: [
        'h is silent.',
        'o and a each have one sound.',
        'The word ends in a vowel, so stress the next to last syllable.',
      ],
      answer: 'It sounds as though written ola, '
        + 'with the stress on the first syllable, '
        + 'because h is always silent in Spanish '
        + 'and a word ending in a vowel '
        + 'is stressed on the next to last syllable.',
    },
    {
      level: 3,
      ask: 'Why are gato and gente pronounced with different g sounds?',
      steps: [
        'g is hard before a, o and u.',
        'g is soft, like j, before e and i.',
      ],
      answer: 'Because g is hard before a, o and u, '
        + 'as in gato, '
        + 'and softens to the sound of j before e and i, '
        + 'as in gente. '
        + 'C behaves in exactly the same way, '
        + 'hard in casa and soft in cena, '
        + 'so it is one rule covering two letters.',
    },
    {
      level: 4,
      ask: 'Where is the stress in these words, and why: '
        + 'hablo, hablar, hablan, habló?',
      steps: [
        'hablo ends in a vowel: next to last syllable.',
        'hablar ends in r: last syllable.',
        'hablan ends in n: next to last syllable.',
        'habló has a written accent, which overrides the rules.',
      ],
      answer: 'Hablo is stressed on ha, '
        + 'because it ends in a vowel. '
        + 'Hablar is stressed on blar, '
        + 'because it ends in a consonant other than n or s. '
        + 'Hablan is stressed on ha, because it ends in n. '
        + 'Habló is stressed on bló, '
        + 'because the written accent overrides both rules. '
        + 'Note that hablo and habló are different words: '
        + 'I speak and he spoke.',
    },
    {
      level: 5,
      ask: 'Why is the accent not optional? '
        + 'Give three pairs of words that differ only by it.',
      steps: [
        'The accent marks stress, and stress can distinguish words.',
      ],
      answer: 'Because it can change the word entirely. '
        + 'Hablo means I speak and habló means he spoke, '
        + 'so the accent changes the tense and the person. '
        + 'Si means if and sí means yes. '
        + 'El means the and él means he. '
        + 'Que means that and qué means what. '
        + 'In a written examination '
        + 'an unaccented habló is read as the present tense, '
        + 'so a candidate who knew the past perfectly '
        + 'has still written the wrong answer.',
    },
  ],

  traps: [
    {
      mistake: 'Giving Spanish vowels their English values.',
      why: 'Each Spanish vowel has one short pure sound. '
        + 'The vowels of Akan, Ewe and Ga are a far better guide '
        + 'than English ones.',
    },
    {
      mistake: 'Pronouncing the h in hola or hablar.',
      why: 'H is always silent. '
        + 'It is j that carries the sound English writes as h.',
    },
    {
      mistake: 'Treating the g and c changes as exceptions to learn.',
      why: 'Both soften before e and i and stay hard before a, o and u. '
        + 'One rule, two letters.',
    },
    {
      mistake: 'Leaving off a written accent.',
      why: 'It can change the word: '
        + 'hablo and habló are different tenses and different persons.',
    },
  ],

  extension:
    'The regularity of Spanish spelling is not an accident. '
    + 'It is maintained deliberately by the language academies, '
    + 'which have revised the spelling '
    + 'when it drifted from the sound. '
    + 'English has no such body, '
    + 'which is why its spelling still records '
    + 'how words were said six hundred years ago, '
    + 'as in the gh of night. '
    + 'There is a practical lesson for a learner. '
    + 'In Spanish, listening and reading reinforce each other, '
    + 'so hearing a word teaches its spelling. '
    + 'In English they do not, '
    + 'which is why English spelling must be learned word by word. '
    + 'A learner who understands that '
    + 'will use dictation as a study method in Spanish, '
    + 'where it works.',

  questions: [
    {
      id: 'esp-1',
      ask: 'How many vowel sounds does Spanish have?',
      kind: 'numeric',
      options: [],
      answer: '5',
      teach: 'One for each vowel letter, and they do not change.',
      level: 2,
    },
    {
      id: 'esp-2',
      ask: 'The letter h in Spanish is:',
      kind: 'choice',
      options: ['silent', 'pronounced as in English', 'pronounced as k'],
      answer: 'silent',
      teach: 'Hola begins with the o sound. '
        + 'The h sound is carried by j.',
      level: 2,
    },
    {
      id: 'esp-3',
      ask: 'In which word is the g soft, like j?',
      kind: 'choice',
      options: ['gente', 'gato', 'gusto'],
      answer: 'gente',
      teach: 'G softens before e and i, '
        + 'and stays hard before a, o and u.',
      level: 3,
    },
    {
      id: 'esp-4',
      ask: 'A word ending in n is stressed on which syllable?',
      kind: 'choice',
      options: [
        'the next to last',
        'the last',
        'the first',
      ],
      answer: 'the next to last',
      teach: 'Words ending in a vowel, n or s follow that rule. '
        + 'Others are stressed on the last syllable.',
      level: 4,
    },
    {
      id: 'esp-5',
      ask: 'Habló differs from hablo in that it means:',
      kind: 'choice',
      options: ['he spoke', 'I speak', 'they speak'],
      answer: 'he spoke',
      teach: 'The accent changes both the tense and the person, '
        + 'which is why it is never optional.',
      level: 5,
    },
  ],
})

/* ── greetings and introductions ────────────────────────────────────────── */

teach({
  topicId: 'greetings-es',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Hola is hello at any hour. '
      + 'Buenos días is used in the morning, '
      + 'buenas tardes in the afternoon, '
      + 'buenas noches in the evening. '
      + 'Me llamo introduces your name, '
      + 'and ¿cómo te llamas? asks for somebody else. '
      + 'Tú is for somebody you know, '
      + 'usted for somebody you must be polite to, '
      + 'and that choice changes the verb.',
    method: [
      'Match the greeting to the time of day.',
      'Decide between tú and usted before speaking.',
      'Use the verb form that matches the pronoun chosen.',
      'Ask and answer in the same register.',
      'Write the opening and the closing question mark.',
    ],
  },

  idea:
    'Spanish greetings follow the clock. '
    + 'Hola serves at any time and is informal. '
    + 'Buenos días is used until about midday, '
    + 'buenas tardes from midday until dark, '
    + 'and buenas noches after dark, '
    + 'both as a greeting and as a goodnight. '
    + 'For leaving, adiós is goodbye, '
    + 'hasta luego is see you later, '
    + 'hasta mañana is see you tomorrow. '
    + 'To introduce yourself: me llamo Kofi, '
    + 'which is literally I call myself Kofi, '
    + 'or soy Kofi. '
    + 'To ask: ¿cómo te llamas? to somebody you know, '
    + 'and ¿cómo se llama usted? to somebody you must be polite to. '
    + 'Mucho gusto means pleased to meet you. '
    + 'To ask how somebody is: '
    + '¿cómo estás? informally, '
    + '¿cómo está usted? politely. '
    + 'Answers include estoy bien, muy bien, '
    + 'así así for so so, and estoy mal. '
    + 'Other useful questions are '
    + '¿de dónde eres? for where are you from, '
    + 'answered soy de Ghana, '
    + '¿cuántos años tienes? for how old are you, '
    + 'answered tengo dieciséis años, '
    + 'and ¿dónde vives? for where do you live. '
    + 'Por favor is please, gracias thank you, '
    + 'de nada you are welcome, '
    + 'and perdón or lo siento for excuse me and I am sorry. '
    + 'A Spanish question is written '
    + 'with an upside down question mark at the start '
    + 'as well as an ordinary one at the end.',

  mechanism:
    'The decision that matters in every Spanish conversation, '
    + 'and that candidates make carelessly, '
    + 'is tú or usted. '
    + 'It is not a politeness flourish. '
    + 'It changes the verb form, '
    + 'so getting it wrong produces an error in every sentence '
    + 'rather than one lapse of manners. '
    + 'Compare the pairs. '
    + '¿Cómo te llamas? and ¿cómo se llama usted? '
    + '¿Cómo estás? and ¿cómo está usted? '
    + '¿De dónde eres? and ¿de dónde es usted? '
    + 'In each case the informal uses the second person '
    + 'and the polite uses the third person, '
    + 'which is the point to hold: '
    + 'usted takes the same verb form as él and ella. '
    + 'Once that is clear the whole system follows '
    + 'from one piece of knowledge '
    + 'rather than from two sets of forms. '
    + 'And it explains why the pronoun is often written out '
    + 'with usted and dropped with tú: '
    + 'está on its own could be he, she or you politely, '
    + 'so usted is added to remove the doubt. '
    + 'When to use which is a real question in a Ghanaian classroom, '
    + 'where the habits of respect are strong '
    + 'and where a learner may reasonably default to politeness. '
    + 'The rule is: '
    + 'tú for a classmate, a friend, a child, a relative of your own '
    + 'age; '
    + 'usted for a teacher, an older stranger, a customer, '
    + 'an official, anybody addressed as sir or madam. '
    + 'In an oral examination the examiner is a stranger and senior, '
    + 'so usted is the safe choice '
    + 'unless the examiner uses tú first. '
    + 'That is a practical rule and it is worth stating plainly. '
    + 'The second thing to get right is me llamo, '
    + 'which candidates mangle because of its literal meaning. '
    + 'Llamarse is a reflexive verb: '
    + 'me llamo is I call myself, '
    + 'te llamas is you call yourself, '
    + 'se llama is he, she or you politely calls themself. '
    + 'So the pronoun changes with the person, '
    + 'and mi llamo, which copies the English my, is wrong. '
    + 'The pattern me, te, se is worth learning now, '
    + 'because every reflexive verb later uses it. '
    + 'Third, the time divisions, '
    + 'which do not match English habits. '
    + 'Buenas tardes covers the whole afternoon and early evening, '
    + 'until it is dark, '
    + 'which in Ghana is around six, '
    + 'and buenas noches then takes over. '
    + 'Note also that días is masculine despite its a, '
    + 'so it is buenos días with an o, '
    + 'while tardes and noches are feminine, '
    + 'giving buenas with an a. '
    + 'Writing buenas días is a common error '
    + 'and it is an agreement error rather than a vocabulary one. '
    + 'Fourth, the inverted question mark. '
    + 'Spanish opens a question with ¿ and closes it with ?, '
    + 'and the same applies to exclamations with ¡ and !. '
    + 'The reason is practical: '
    + 'Spanish word order often does not change in a question, '
    + 'so without the opening mark '
    + 'a reader would not know a sentence was a question '
    + 'until the end. '
    + 'Omitting the opening mark in a written paper '
    + 'loses marks, and it is the easiest mark in the subject to keep. '
    + 'Fifth, the age idiom, '
    + 'which is a favourite of examiners. '
    + 'Spanish does not say I am sixteen years. '
    + 'It says tengo dieciséis años, I have sixteen years. '
    + 'So the verb is tener and not ser, '
    + 'and soy dieciséis is a clear error. '
    + 'Spanish uses tener in several such expressions, '
    + 'including tengo hambre for I am hungry '
    + 'and tengo sed for I am thirsty. '
    + 'What has to be written down, in any dialogue question, '
    + 'is a consistent register. '
    + 'If the question is asked with tú, answer with tú. '
    + 'Mixing the two inside one exchange '
    + 'is marked as an error even when both forms are correct Spanish.',

  recap:
    'You can greet somebody in English and in your own language, '
    + 'and you know that some people are addressed with more respect. '
    + 'Spanish marks that difference in the verb, '
    + 'and this lesson shows how.',

  method: [
    'Look at the time of day and choose the greeting.',
    'Check the gender: buenos días, buenas tardes, buenas noches.',
    'Decide tú or usted before you begin.',
    'Remember that usted takes the same verb form as él.',
    'Use me, te, se with llamarse according to the person.',
    'Use tener, not ser, for age.',
    'Open every written question with the inverted mark.',
    'Answer in the same register as the question.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Greet somebody at nine in the morning, '
        + 'and again at four in the afternoon.',
      steps: [
        'Before midday is días.',
        'After midday until dark is tardes.',
      ],
      answer: 'Buenos días at nine in the morning. '
        + 'Buenas tardes at four in the afternoon. '
        + 'Note buenos with an o for días, '
        + 'which is masculine despite ending in a, '
        + 'and buenas with an a for tardes, which is feminine.',
    },
    {
      level: 3,
      ask: 'Introduce yourself as Ama, say you are from Ghana, '
        + 'and say you are sixteen.',
      steps: [
        'Me llamo for the name.',
        'Soy de for origin.',
        'Tener for age.',
      ],
      answer: 'Me llamo Ama. Soy de Ghana. Tengo dieciséis años. '
        + 'Age uses tener, not ser, '
        + 'so soy dieciséis would be wrong. '
        + 'Spanish says I have sixteen years.',
    },
    {
      level: 4,
      ask: 'Ask a classmate and then a teacher '
        + 'what their name is and how they are. '
        + 'Explain the difference.',
      steps: [
        'Classmate takes tú forms.',
        'Teacher takes usted forms.',
        'Usted takes the same verb form as él.',
      ],
      answer: 'To a classmate: ¿cómo te llamas? ¿cómo estás? '
        + 'To a teacher: ¿cómo se llama usted? ¿cómo está usted? '
        + 'The polite form uses the third person verb, '
        + 'the same form as él and ella, '
        + 'which is why usted is usually written out: '
        + 'está alone could mean he, she or you politely. '
        + 'In an oral examination '
        + 'the examiner is a senior stranger, '
        + 'so usted is the safe choice.',
    },
    {
      level: 5,
      ask: 'Correct and explain: '
        + 'Buenas días. Mi llamo Kwesi. Soy dieciséis años. '
        + 'Como estas usted?',
      steps: [
        'días is masculine, so buenos.',
        'llamarse is reflexive: me llamo.',
        'Age takes tener.',
        'Mixing estás with usted is inconsistent, and marks are needed.',
      ],
      answer: 'Buenos días. Me llamo Kwesi. Tengo dieciséis años. '
        + '¿Cómo está usted? '
        + 'Días is masculine despite its ending, so buenos. '
        + 'Llamarse is reflexive, '
        + 'and the pronoun changes with the person: me llamo. '
        + 'Age uses tener: tengo dieciséis años. '
        + 'And estás is the tú form, '
        + 'so it cannot be used with usted; '
        + 'the polite form is está. '
        + 'The opening inverted question mark and the accent on cómo '
        + 'are both required in writing.',
    },
  ],

  traps: [
    {
      mistake: 'Writing buenas días.',
      why: 'Días is masculine despite ending in a, so buenos días. '
        + 'Tardes and noches are feminine.',
    },
    {
      mistake: 'Writing mi llamo for my name is.',
      why: 'Llamarse is reflexive. '
        + 'Me llamo is I call myself, and the pronoun changes with the '
        + 'person.',
    },
    {
      mistake: 'Using ser for age.',
      why: 'Spanish says tengo dieciséis años, I have sixteen years. '
        + 'Tener is also used for hunger and thirst.',
    },
    {
      mistake: 'Mixing tú and usted in one exchange.',
      why: 'The register must be consistent. '
        + 'Usted takes the same verb form as él, so estás cannot follow '
        + 'it.',
    },
  ],

  extension:
    'Latin America and Spain differ in the plural you. '
    + 'Knowing it saves confusion in listening. '
    + 'Spain uses vosotros for a group spoken to informally. '
    + 'It uses ustedes for a group spoken to politely. '
    + 'Most of Latin America uses ustedes for both, '
    + 'and vosotros has gone from ordinary speech there. '
    + 'Several countries use vos in place of tú, '
    + 'with verb forms of its own. '
    + 'Argentina and Uruguay are among them. '
    + 'None of this makes one variety more correct. '
    + 'Produce one pattern consistently, '
    + 'usually the Latin American one. '
    + 'Learn to recognise the rest, '
    + 'because the speakers a Ghanaian meets '
    + 'come from many countries.',

  questions: [
    {
      id: 'gre-1',
      ask: 'Which greeting is used in the morning?',
      kind: 'choice',
      options: ['buenos días', 'buenas tardes', 'buenas noches'],
      answer: 'buenos días',
      teach: 'Tardes runs from midday to dark, and noches after dark.',
      level: 2,
    },
    {
      id: 'gre-2',
      ask: 'My name is Ama in Spanish is:',
      kind: 'choice',
      options: ['me llamo Ama', 'mi llamo Ama', 'yo nombre Ama'],
      answer: 'me llamo Ama',
      teach: 'Llamarse is reflexive: literally I call myself.',
      level: 3,
    },
    {
      id: 'gre-3',
      ask: 'I am sixteen years old in Spanish uses which verb?',
      kind: 'choice',
      options: ['tener', 'ser', 'estar'],
      answer: 'tener',
      teach: 'Tengo dieciséis años, literally I have sixteen years.',
      level: 4,
    },
    {
      id: 'gre-4',
      ask: 'Usted takes the same verb form as:',
      kind: 'choice',
      options: ['él', 'tú', 'yo'],
      answer: 'él',
      teach: 'That is why usted is written out: '
        + 'está alone could be he, she or you politely.',
      level: 5,
    },
    {
      id: 'gre-5',
      ask: 'A written Spanish question must begin with:',
      kind: 'choice',
      options: [
        'an inverted question mark',
        'a capital letter only',
        'a question word',
      ],
      answer: 'an inverted question mark',
      teach: 'Spanish word order often does not change in a question, '
        + 'so the opening mark tells the reader at once.',
      level: 3,
    },
  ],
})

/* ── gender, number and articles ────────────────────────────────────────── */

teach({
  topicId: 'gender-articles-es',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Spanish nouns are masculine or feminine. '
      + 'Most ending in o are masculine and most ending in a are '
      + 'feminine, '
      + 'which makes Spanish gender far more predictable than French. '
      + 'The articles are el, la, los, las, un, una, unos, unas. '
      + 'Adjectives agree with the noun, '
      + 'and most of them follow it.',
    method: [
      'Look at the last letter of the noun.',
      'o usually means masculine, a usually feminine.',
      'Choose the matching article.',
      'Make every adjective agree in gender and number.',
      'Place the adjective after the noun.',
    ],
  },

  idea:
    'Every Spanish noun is masculine or feminine. '
    + 'The ending is a good guide. '
    + 'Nouns ending in o are usually masculine: '
    + 'el libro, el chico, el dinero. '
    + 'Nouns ending in a are usually feminine: '
    + 'la casa, la chica, la mesa. '
    + 'Nouns ending in ción, sión, dad and tad are feminine: '
    + 'la nación, la ciudad. '
    + 'The main exceptions are worth learning as a short list: '
    + 'el día, el mapa, el problema, el programa and el sistema '
    + 'are masculine though they end in a, '
    + 'and la mano is feminine though it ends in o. '
    + 'The definite articles are el for masculine singular, '
    + 'la for feminine singular, '
    + 'los for masculine plural and las for feminine plural. '
    + 'The indefinite articles are un, una, unos and unas. '
    + 'Plurals add s after a vowel and es after a consonant: '
    + 'libro becomes libros, ciudad becomes ciudades. '
    + 'A noun ending in z changes it to c: '
    + 'lápiz becomes lápices. '
    + 'Adjectives agree with their noun. '
    + 'An adjective ending in o has four forms: '
    + 'alto, alta, altos, altas. '
    + 'An adjective ending in e or a consonant '
    + 'has one singular form for both genders: '
    + 'grande, grandes; '
    + 'fácil, fáciles. '
    + 'Most adjectives come after the noun: '
    + 'un libro rojo, una casa grande. '
    + 'A few come before, including bueno, malo and mucho, '
    + 'and bueno shortens to buen before a masculine singular noun.',

  mechanism:
    'A Ghanaian learner taking both French and Spanish '
    + 'will carry French habits into Spanish, '
    + 'and most of them will work, '
    + 'which makes the few that do not especially dangerous. '
    + 'So it is worth naming them. '
    + 'The first and best difference is that Spanish gender '
    + 'is largely readable from the word. '
    + 'In French there is no reliable guide, '
    + 'and la table has to be memorised. '
    + 'In Spanish the ending tells you '
    + 'in the great majority of cases: '
    + 'o masculine, a feminine. '
    + 'So the memorisation burden is much lighter, '
    + 'and the right strategy is different: '
    + 'learn the rule and the short exception list, '
    + 'rather than learning every noun with its article. '
    + 'The exceptions are few enough to list in one line: '
    + 'el día, el mapa, el problema, el programa, el sistema, la mano. '
    + 'Most of the ones ending in ma came into Spanish from Greek, '
    + 'which is why they behave as a group '
    + 'rather than as random exceptions. '
    + 'The second difference is adjective position. '
    + 'French has a short list of adjectives that precede the noun, '
    + 'and candidates learn it carefully. '
    + 'In Spanish the default is still after the noun, '
    + 'and the preceding list is shorter still. '
    + 'So a learner who writes un rojo libro '
    + 'is applying an English habit, not a French one, '
    + 'and the Spanish is un libro rojo. '
    + 'The third is the plural. '
    + 'French marks the plural in writing and rarely in speech, '
    + 'so les livres sounds like le livre. '
    + 'In Spanish the plural s is pronounced, '
    + 'and so is the article: '
    + 'los libros is clearly different from el libro when heard. '
    + 'That matters because it means a Spanish learner '
    + 'can hear agreement errors, '
    + 'and should read work aloud to catch them. '
    + 'Now the errors that cost marks within Spanish itself. '
    + 'The first is the four form adjective. '
    + 'An adjective ending in o has four endings, '
    + 'and candidates write only two. '
    + 'Las casas altas needs the a and the s: '
    + 'both the gender and the number must show. '
    + 'The habit to build is to write the noun first, '
    + 'then copy its gender and number onto the adjective, '
    + 'and that mechanical step prevents most of the errors. '
    + 'The second is the adjective that does not change for gender. '
    + 'Grande, fácil, inteligente and interesante '
    + 'have one singular form for both genders, '
    + 'so un chico inteligente and una chica inteligente '
    + 'are both correct as written. '
    + 'Candidates add an a to make it feminine, '
    + 'producing inteligenta, which does not exist. '
    + 'The test is the last letter: '
    + 'only adjectives ending in o have a separate feminine. '
    + 'The third is the plural of a word ending in a consonant. '
    + 'Add es, not s. '
    + 'Ciudad becomes ciudades, '
    + 'papel becomes papeles, '
    + 'profesor becomes profesores. '
    + 'And a z becomes c before the es: '
    + 'lápiz becomes lápices, vez becomes veces. '
    + 'The reason is the spelling rule from the pronunciation lesson: '
    + 'z does not normally appear before e in Spanish, '
    + 'so the letter changes while the sound does not. '
    + 'That connection is worth making, '
    + 'because it shows the spelling system is consistent '
    + 'rather than full of special cases. '
    + 'Fourth, bueno before a masculine singular noun '
    + 'drops its final o: '
    + 'un buen libro, not un bueno libro, '
    + 'while una buena casa keeps the a. '
    + 'The same happens to grande, which becomes gran '
    + 'before any singular noun '
    + 'and then means great rather than large: '
    + 'un gran hombre is a great man '
    + 'and un hombre grande is a big man. '
    + 'What has to be written down is the agreement, shown. '
    + 'In a composition the marks are given for correct endings, '
    + 'and the fastest way to secure them '
    + 'is to read the work aloud at the end, '
    + 'since in Spanish, unlike French, '
    + 'an agreement error can be heard.',

  recap:
    'You know that French nouns have gender '
    + 'and that adjectives change to match. '
    + 'Spanish works the same way '
    + 'and tells you the gender from the word itself, '
    + 'which makes it much easier.',

  method: [
    'Read the last letter of the noun.',
    'o is usually masculine and a usually feminine.',
    'Check the short exception list: el día, el mapa, el problema, '
      + 'el programa, el sistema, la mano.',
    'Choose el, la, los or las to match.',
    'Form the plural with s after a vowel and es after a consonant.',
    'Change a final z to c before es.',
    'Copy the gender and number of the noun onto each adjective.',
    'Remember that adjectives in e or a consonant do not change for '
      + 'gender.',
    'Place the adjective after the noun unless it is bueno, malo or '
      + 'mucho.',
    'Read the work aloud, since Spanish agreement can be heard.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Give the definite article for each: '
        + 'libro, casa, ciudad, mapa.',
      steps: [
        'o is masculine, a is feminine.',
        'ciudad ends in dad, so feminine.',
        'mapa is on the exception list.',
      ],
      answer: 'El libro, la casa, la ciudad, el mapa. '
        + 'Mapa ends in a and is masculine, '
        + 'which is why it belongs on the short exception list '
        + 'with día, problema, programa and sistema.',
    },
    {
      level: 3,
      ask: 'Make plural: el libro rojo, la casa alta, '
        + 'la ciudad grande, el lápiz.',
      steps: [
        'Add s after a vowel and es after a consonant.',
        'z becomes c before es.',
        'The article and adjective pluralise too.',
      ],
      answer: 'Los libros rojos, las casas altas, '
        + 'las ciudades grandes, los lápices. '
        + 'Grande does not change for gender '
        + 'but does take s for the plural. '
        + 'Lápiz becomes lápices, '
        + 'because z does not normally stand before e in Spanish.',
    },
    {
      level: 4,
      ask: 'Correct and explain: una chica inteligenta, '
        + 'and un rojo libro.',
      steps: [
        'Only adjectives ending in o have a separate feminine.',
        'Inteligente ends in e, so it does not change.',
        'Spanish adjectives of colour follow the noun.',
      ],
      answer: 'Una chica inteligente and un libro rojo. '
        + 'Inteligente ends in e, '
        + 'so it has one singular form for both genders, '
        + 'and inteligenta does not exist. '
        + 'Only adjectives ending in o have four forms. '
        + 'And Spanish adjectives, including all colours, '
        + 'come after the noun, '
        + 'so un rojo libro copies the English order.',
    },
    {
      level: 5,
      ask: 'Explain the difference between '
        + 'un gran hombre and un hombre grande, '
        + 'and between un buen libro and un libro bueno.',
      steps: [
        'Grande shortens to gran before a singular noun.',
        'In that position it means great rather than large.',
        'Bueno shortens to buen before a masculine singular noun.',
      ],
      answer: 'Un gran hombre means a great man, '
        + 'and un hombre grande means a big or tall man, '
        + 'so position changes the meaning '
        + 'and grande shortens to gran when it precedes. '
        + 'Bueno shortens to buen before a masculine singular noun, '
        + 'so un buen libro is correct and un bueno libro is not, '
        + 'while una buena casa keeps its a '
        + 'because the shortening applies only to the masculine '
        + 'singular. '
        + 'Un libro bueno is possible and places slightly more weight '
        + 'on the adjective.',
    },
  ],

  traps: [
    {
      mistake: 'Writing inteligenta for a feminine noun.',
      why: 'Only adjectives ending in o have a separate feminine. '
        + 'Inteligente serves both genders.',
    },
    {
      mistake: 'Adding only s to a noun ending in a consonant.',
      why: 'Add es. '
        + 'Ciudad becomes ciudades and papel becomes papeles.',
    },
    {
      mistake: 'Writing lápizes.',
      why: 'A final z becomes c before es: lápices. '
        + 'Z does not normally stand before e in Spanish.',
    },
    {
      mistake: 'Placing an adjective before the noun.',
      why: 'Spanish adjectives follow the noun, '
        + 'with a short list of exceptions such as bueno and mucho.',
    },
  ],

  extension:
    'A few nouns change meaning with gender, '
    + 'and they catch out even strong candidates. '
    + 'El puerto is a port and la puerta is a door. '
    + 'El libro is a book and la libra is a pound. '
    + 'And a small set keeps the same spelling: '
    + 'el policía is a policeman '
    + 'while la policía is the police force. '
    + 'These are few enough to be curiosities '
    + 'rather than a serious burden, '
    + 'and they make a useful point: '
    + 'gender in Spanish is part of the word '
    + 'in the same way a letter is, '
    + 'so changing it can change the word entirely '
    + 'rather than merely making it ungrammatical.',

  questions: [
    {
      id: 'gea-1',
      ask: 'Which article goes with mapa?',
      kind: 'choice',
      options: ['el', 'la', 'los'],
      answer: 'el',
      teach: 'Mapa ends in a and is masculine. '
        + 'It is on the short exception list with día and problema.',
      level: 3,
    },
    {
      id: 'gea-2',
      ask: 'The plural of la ciudad is:',
      kind: 'choice',
      options: ['las ciudades', 'las ciudads', 'los ciudades'],
      answer: 'las ciudades',
      teach: 'Add es after a consonant, '
        + 'and the article pluralises too.',
      level: 3,
    },
    {
      id: 'gea-3',
      ask: 'The feminine of inteligente is:',
      kind: 'choice',
      options: ['inteligente', 'inteligenta', 'inteligento'],
      answer: 'inteligente',
      teach: 'Only adjectives ending in o have a separate feminine form.',
      level: 4,
    },
    {
      id: 'gea-4',
      ask: 'The plural of el lápiz is:',
      kind: 'choice',
      options: ['los lápices', 'los lápizes', 'los lápiz'],
      answer: 'los lápices',
      teach: 'A final z becomes c before es, '
        + 'because z does not normally stand before e.',
      level: 4,
    },
    {
      id: 'gea-5',
      ask: 'A great man in Spanish is:',
      kind: 'choice',
      options: ['un gran hombre', 'un hombre grande', 'un grande hombre'],
      answer: 'un gran hombre',
      teach: 'Before a singular noun grande shortens to gran '
        + 'and means great. '
        + 'After the noun it means big.',
      level: 5,
    },
  ],
})

/* ── the present tense ──────────────────────────────────────────────────── */

teach({
  topicId: 'present-es',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Spanish verbs end in ar, er or ir. '
      + 'Remove those two letters and add the endings for that group. '
      + 'The subject pronoun is usually left out, '
      + 'because the ending already shows who is acting. '
      + 'The common irregulars are ser, estar, ir, tener and hacer, '
      + 'and a group of verbs changes its stem vowel '
      + 'in every person except nosotros.',
    method: [
      'Read the last two letters of the infinitive.',
      'Remove them to get the stem.',
      'Add the ending for that group and that person.',
      'Leave out the subject pronoun unless it is needed for clarity.',
      'For a stem changing verb, change the vowel except for nosotros.',
    ],
  },

  idea:
    'A Spanish verb is listed as an infinitive '
    + 'ending in ar, er or ir. '
    + 'For hablar the stem is habl '
    + 'and the endings are o, as, a, amos, áis, an: '
    + 'hablo, hablas, habla, hablamos, habláis, hablan. '
    + 'For comer the stem is com '
    + 'and the endings are o, es, e, emos, éis, en. '
    + 'For vivir the stem is viv '
    + 'and the endings are o, es, e, imos, ís, en, '
    + 'so the er and ir groups differ only in the nosotros '
    + 'and vosotros forms. '
    + 'The subject pronouns are yo, tú, él or ella or usted, '
    + 'nosotros, vosotros, and ellos or ellas or ustedes. '
    + 'They are usually omitted, '
    + 'because the ending identifies the person, '
    + 'and they are used for emphasis or to remove ambiguity. '
    + 'Several common verbs are irregular. '
    + 'Ser: soy, eres, es, somos, sois, son. '
    + 'Estar: estoy, estás, está, estamos, estáis, están. '
    + 'Ir: voy, vas, va, vamos, vais, van. '
    + 'Tener: tengo, tienes, tiene, tenemos, tenéis, tienen. '
    + 'Hacer: hago, haces, hace, hacemos, hacéis, hacen. '
    + 'A large group changes the stem vowel '
    + 'in all persons except nosotros and vosotros. '
    + 'In querer the e becomes ie: quiero, quieres, quiere, '
    + 'queremos, queréis, quieren. '
    + 'In poder the o becomes ue: puedo, puedes, puede, '
    + 'podemos, podéis, pueden. '
    + 'In pedir the e becomes i: pido, pides, pide, '
    + 'pedimos, pedís, piden. '
    + 'Spanish has one present tense '
    + 'covering both I eat and I am eating.',

  mechanism:
    'The feature of Spanish that surprises an English speaker most '
    + 'is that the subject pronoun is normally left out. '
    + 'Hablo means I speak, with no yo. '
    + 'Hablamos means we speak, with no nosotros. '
    + 'The reason is that the endings are all different, '
    + 'so the ending already says who is acting '
    + 'and the pronoun would add nothing. '
    + 'English cannot do this, '
    + 'because speak is the same for I, you, we and they, '
    + 'so English needs the pronoun to carry the information. '
    + 'Seeing that makes the Spanish habit sensible '
    + 'rather than strange, '
    + 'and it also tells a learner when to put the pronoun in: '
    + 'when the ending is genuinely ambiguous, '
    + 'as with the third person, '
    + 'where habla could be he, she or you politely; '
    + 'and when there is a contrast to mark, '
    + 'as in yo hablo inglés pero ella habla francés. '
    + 'Writing every pronoun is not an error '
    + 'and it reads as unnatural Spanish, '
    + 'and in an oral examination it is noticed. '
    + 'The second point is the stem changing verbs, '
    + 'which look like chaos and follow one rule. '
    + 'The vowel changes where the stress falls on it, '
    + 'and it does not change where the stress moves to the ending. '
    + 'In quiero the stress is on the quie, so the e has changed. '
    + 'In queremos the stress is on the re, so the e has not. '
    + 'The same holds for poder: '
    + 'puedo with the stress on pue, '
    + 'podemos with the stress on de. '
    + 'So the nosotros and vosotros forms are the odd ones out '
    + 'in every stem changing verb, '
    + 'and they are the only forms that keep the original vowel. '
    + 'A learner who has that rule '
    + 'does not need to memorise four sets of forms, '
    + 'and can predict the behaviour of a new verb '
    + 'once told that it is a stem changer. '
    + 'The shape is sometimes called a boot, '
    + 'because the forms that change '
    + 'occupy the outside of the conjugation table. '
    + 'Third, the errors that cost marks. '
    + 'The commonest is writing the er endings on an ir verb '
    + 'in the nosotros form. '
    + 'Comemos is right and vivemos is wrong; '
    + 'it is vivimos. '
    + 'The er and ir groups differ in exactly two forms, '
    + 'so those two are the ones to check, '
    + 'and the rest can be treated as a single pattern. '
    + 'The second is tener, '
    + 'which is both irregular in the yo form '
    + 'and a stem changer in the others: '
    + 'tengo, then tienes and tiene, '
    + 'then tenemos without the change. '
    + 'Writing teno or tieno misses one of the two irregularities. '
    + 'Tener is worth learning whole because of how often it appears, '
    + 'including in tengo que for I have to '
    + 'and in the age and hunger expressions. '
    + 'The third is the continuous. '
    + 'Spanish does have a continuous form, '
    + 'estoy hablando, '
    + 'and a learner who has met it '
    + 'will overuse it for every English am doing. '
    + 'The plain present covers it in most cases, '
    + 'and the continuous is for an action happening at this moment '
    + 'that is being stressed as such. '
    + 'So what are you doing is ¿qué haces?, '
    + 'and ¿qué estás haciendo? '
    + 'is for right at this instant. '
    + 'Overusing the continuous is a Ghanaian learner pattern '
    + 'because English uses it so freely, '
    + 'and it is marked as unidiomatic rather than wrong. '
    + 'What has to be written down is the ending that matches '
    + 'the person intended, '
    + 'and in a gap filling question that ending is the whole mark. '
    + 'A right stem with a wrong ending is a wrong answer, '
    + 'not a near miss.',

  recap:
    'You can read Spanish aloud and know that nouns have gender. '
    + 'This gives the verb system: '
    + 'three groups, one procedure, '
    + 'and a short list of verbs that must be learned whole.',

  method: [
    'Read the last two letters of the infinitive.',
    'Remove them to leave the stem.',
    'Choose the endings for ar, er or ir.',
    'Remember that er and ir differ only for nosotros and vosotros.',
    'Add the ending for the person intended.',
    'Leave out the subject pronoun unless it is needed.',
    'For a stem changer, change the vowel in every form '
      + 'except nosotros and vosotros.',
    'For ser, estar, ir, tener and hacer, recall the whole verb.',
    'Use the plain present unless the moment itself is being stressed.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Conjugate vivir in the present tense.',
      steps: [
        'vivir ends in ir.',
        'Stem is viv.',
        'Endings are o, es, e, imos, ís, en.',
      ],
      answer: 'Vivo, vives, vive, vivimos, vivís, viven. '
        + 'Note vivimos and not vivemos: '
        + 'the er and ir groups differ in exactly the nosotros '
        + 'and vosotros forms.',
    },
    {
      level: 4,
      ask: 'Why is it quiero but queremos?',
      steps: [
        'querer is a stem changing verb: e becomes ie.',
        'The change happens where the stress falls on the stem.',
        'In queremos the stress falls on the ending.',
      ],
      answer: 'Querer changes its stem e to ie, '
        + 'but only where the stress falls on the stem. '
        + 'In quiero the stress is on quie, so the change happens. '
        + 'In queremos the stress has moved to the re of the ending, '
        + 'so the stem keeps its original e. '
        + 'The nosotros and vosotros forms '
        + 'are therefore the only ones without the change, '
        + 'in every stem changing verb.',
    },
    {
      level: 4,
      ask: 'Translate: I speak English but she speaks French. '
        + 'Explain the pronouns.',
      steps: [
        'The endings already identify the persons.',
        'But a contrast is being drawn.',
        'So the pronouns are included for emphasis.',
      ],
      answer: 'Yo hablo inglés pero ella habla francés. '
        + 'The pronouns are normally omitted, '
        + 'because the ending identifies the person. '
        + 'Here they are included because a contrast is being drawn '
        + 'between the two speakers, '
        + 'which is exactly what the pronouns are for. '
        + 'Ella also removes a real ambiguity, '
        + 'since habla alone could be he, she or you politely.',
    },
    {
      level: 5,
      ask: 'Give the full present of tener '
        + 'and name its two irregularities.',
      steps: [
        'The yo form is irregular: tengo.',
        'The stem changes e to ie in the boot forms.',
        'Nosotros and vosotros keep the original e.',
      ],
      answer: 'Tengo, tienes, tiene, tenemos, tenéis, tienen. '
        + 'There are two irregularities. '
        + 'The yo form adds a g, giving tengo rather than teno. '
        + 'And the stem e becomes ie '
        + 'in the forms where the stress falls on the stem, '
        + 'giving tienes, tiene and tienen, '
        + 'while tenemos and tenéis keep the e '
        + 'because the stress has moved to the ending. '
        + 'Tener is worth learning whole, '
        + 'since it appears in tengo que for I have to, '
        + 'tengo años for age and tengo hambre for hunger.',
    },
  ],

  traps: [
    {
      mistake: 'Writing vivemos for we live.',
      why: 'Ir verbs take imos. '
        + 'The er and ir groups differ only in the nosotros '
        + 'and vosotros forms.',
    },
    {
      mistake: 'Changing the stem in the nosotros form.',
      why: 'The change happens only where the stress falls on the stem. '
        + 'Queremos and podemos keep the original vowel.',
    },
    {
      mistake: 'Writing every subject pronoun.',
      why: 'The ending already identifies the person. '
        + 'Pronouns are for emphasis, contrast, or genuine ambiguity.',
    },
    {
      mistake: 'Using estoy hablando for every English am speaking.',
      why: 'The plain present covers most cases. '
        + 'The continuous is for stressing the present moment itself.',
    },
  ],

  extension:
    'The habit of dropping the subject pronoun '
    + 'has a consequence worth knowing. '
    + 'Because the ending carries the person, '
    + 'Spanish word order is freer than English. '
    + 'Llegó mi hermano and mi hermano llegó '
    + 'both mean my brother arrived, '
    + 'and the first puts a little more weight on the arrival. '
    + 'English cannot move its subject like that '
    + 'without changing the meaning or sounding wrong, '
    + 'because English depends on position '
    + 'to show which noun is the subject. '
    + 'So an inflected language buys flexibility in order '
    + 'at the price of more endings to learn, '
    + 'and a learner who notices the trade '
    + 'will read Spanish word order as information '
    + 'rather than as a difficulty.',

  questions: [
    {
      id: 'pes-1',
      ask: 'The nosotros form of vivir is:',
      kind: 'choice',
      options: ['vivimos', 'vivemos', 'vivamos'],
      answer: 'vivimos',
      teach: 'Ir verbs take imos. '
        + 'Only nosotros and vosotros separate the er and ir groups.',
      level: 3,
    },
    {
      id: 'pes-2',
      ask: 'Which form of querer keeps the original stem vowel?',
      kind: 'choice',
      options: ['queremos', 'quiero', 'quieren'],
      answer: 'queremos',
      teach: 'The stress has moved to the ending, '
        + 'so the stem does not change.',
      level: 4,
    },
    {
      id: 'pes-3',
      ask: 'Why is the subject pronoun usually left out in Spanish?',
      kind: 'choice',
      options: [
        'the ending already shows who is acting',
        'pronouns do not exist',
        'it is considered impolite',
      ],
      answer: 'the ending already shows who is acting',
      teach: 'English needs the pronoun because its endings are mostly '
        + 'the same.',
      level: 4,
    },
    {
      id: 'pes-4',
      ask: 'The yo form of tener is:',
      kind: 'choice',
      options: ['tengo', 'teno', 'tieno'],
      answer: 'tengo',
      teach: 'Tener is irregular in the yo form and a stem changer in '
        + 'the others.',
      level: 3,
    },
    {
      id: 'pes-5',
      ask: 'What are you doing, as a general question, is:',
      kind: 'choice',
      options: ['¿qué haces?', '¿qué estás haciendo?', '¿qué hacer?'],
      answer: '¿qué haces?',
      teach: 'The plain present covers it. '
        + 'The continuous is for stressing this very moment.',
      level: 5,
    },
  ],
})

/* ── ser and estar ──────────────────────────────────────────────────────── */

teach({
  topicId: 'ser-estar',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Spanish has two verbs for to be. '
      + 'Ser is for what something is: '
      + 'identity, origin, occupation, '
      + 'a lasting characteristic, the time. '
      + 'Estar is for how or where something is: '
      + 'location, a current state, a mood, '
      + 'and the continuous tense. '
      + 'With some adjectives both are possible '
      + 'and they change the meaning.',
    method: [
      'Ask whether the sentence says what it is or how it is.',
      'What it is takes ser.',
      'How or where it is takes estar.',
      'Location of a thing or person always takes estar.',
      'If both are possible, say which meaning each gives.',
    ],
  },

  idea:
    'English has one verb to be '
    + 'where Spanish has two, and they are not interchangeable. '
    + 'Ser is used for identity: soy Kofi. '
    + 'For origin: soy de Ghana. '
    + 'For occupation: es profesora. '
    + 'For nationality and religion: es ghanés. '
    + 'For a lasting characteristic: '
    + 'la casa es grande, el libro es rojo. '
    + 'For relationships: es mi hermano. '
    + 'For telling the time and giving dates: son las tres. '
    + 'And for what something is made of: es de madera. '
    + 'Estar is used for location: '
    + 'estoy en Accra, el libro está en la mesa. '
    + 'For a temporary state or condition: '
    + 'estoy cansado, la sopa está caliente. '
    + 'For mood and health: está triste, está enfermo. '
    + 'For the result of a change: la puerta está abierta. '
    + 'And with a present participle to make the continuous: '
    + 'estoy hablando. '
    + 'Some adjectives work with both verbs '
    + 'and mean different things: '
    + 'ser aburrido is to be boring '
    + 'while estar aburrido is to be bored; '
    + 'ser listo is to be clever '
    + 'while estar listo is to be ready; '
    + 'ser verde is to be green in colour '
    + 'while estar verde is to be unripe.',

  mechanism:
    'The advice most learners are given, '
    + 'that ser is permanent and estar is temporary, '
    + 'is nearly right and it fails in exactly the cases '
    + 'the examination uses. '
    + 'Consider two sentences. '
    + 'Mi padre está muerto, my father is dead, '
    + 'which is permanent and uses estar. '
    + 'Son las tres, it is three o clock, '
    + 'which is as temporary as anything could be '
    + 'and uses ser. '
    + 'So the permanent and temporary rule '
    + 'cannot be the real rule, '
    + 'and a candidate who relies on it will be caught. '
    + 'The better question is: '
    + 'is the sentence saying what the thing is, '
    + 'or saying how or where it is? '
    + 'What it is takes ser. '
    + 'How or where it is takes estar. '
    + 'Run the two problem cases through it. '
    + 'My father is dead describes his condition, '
    + 'how he is, so estar. '
    + 'It is three o clock identifies the time, '
    + 'what the hour is, so ser. '
    + 'That question handles both, '
    + 'and it handles nearly every case in the syllabus. '
    + 'There is one group that has to be learned '
    + 'and not derived: location. '
    + 'Where a person or thing is '
    + 'always takes estar, '
    + 'even if it never moves. '
    + 'Accra está en Ghana. '
    + 'Accra is not going anywhere, '
    + 'and the sentence still uses estar, '
    + 'because location is location. '
    + 'The exception is an event rather than a thing: '
    + 'la fiesta es en mi casa, '
    + 'the party is at my house, '
    + 'because that is saying what the party is '
    + 'rather than where an object sits. '
    + 'That distinction is examined and is worth knowing. '
    + 'Now the adjectives that take both, '
    + 'which is where the top marks are. '
    + 'The pattern is consistent once seen. '
    + 'With ser the adjective describes the thing itself. '
    + 'With estar it describes the state the thing is in. '
    + 'So a teacher who is boring, ser aburrido, '
    + 'is a boring teacher, '
    + 'and a student who is bored, estar aburrido, '
    + 'is in a state of boredom. '
    + 'A clever person, ser listo, has that quality, '
    + 'and a person who is ready, estar listo, '
    + 'is in that condition at the moment. '
    + 'A green mango, estar verde, is not ripe; '
    + 'a green car, ser verde, is painted green. '
    + 'The last pair is a useful one in Ghana, '
    + 'because the mango example is immediately clear '
    + 'and makes the rule memorable. '
    + 'There is a further pair worth knowing: '
    + 'ser bueno is to be good as a person '
    + 'and estar bueno is to be in good health '
    + 'or to taste good, depending on the subject. '
    + 'Here is where marks go. '
    + 'The first loss is using ser for location, '
    + 'which is the commonest error of all. '
    + 'Estoy en la escuela, not soy en la escuela. '
    + 'The second is using estar for occupation. '
    + 'Soy estudiante, not estoy estudiante, '
    + 'because being a student is what you are '
    + 'and not a state you are in. '
    + 'A candidate who applies the permanent rule here '
    + 'will reason that being a student is temporary '
    + 'and will choose wrongly, '
    + 'which is exactly why the what it is question is better. '
    + 'The third is the continuous, '
    + 'which always uses estar: '
    + 'estoy comiendo, never soy comiendo. '
    + 'The fourth is forgetting that both verbs are irregular '
    + 'and must be known cold: '
    + 'soy, eres, es, somos, sois, son '
    + 'against estoy, estás, está, estamos, estáis, están. '
    + 'And note the accents on estar: '
    + 'estás and está carry them '
    + 'because the stress falls on the last syllable, '
    + 'which the general rule would not predict. '
    + 'What has to be written down, '
    + 'in a question that asks you to justify a choice, '
    + 'is the category: '
    + 'estar because it is a location, '
    + 'ser because it is an occupation, '
    + 'estar because it is a current state. '
    + 'The category is the mark.',

  recap:
    'You can conjugate ser and estar in the present. '
    + 'This says which of them to use, '
    + 'and why the usual permanent and temporary rule '
    + 'is not reliable.',

  method: [
    'Read the sentence and ask what it is doing.',
    'If it says what the thing is, use ser.',
    'If it says how or where the thing is, use estar.',
    'For the location of a person or object, always use estar.',
    'For the location of an event, use ser.',
    'For the continuous tense, always use estar.',
    'If the adjective allows both, say what each version means.',
    'When justifying, name the category rather than saying permanent or '
      + 'temporary.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Choose ser or estar and say why: '
        + 'I am from Ghana; I am in Accra; I am a student; I am tired.',
      steps: [
        'Origin, location, occupation, state.',
      ],
      answer: 'Soy de Ghana, because it gives origin. '
        + 'Estoy en Accra, because it gives location. '
        + 'Soy estudiante, because it gives occupation, '
        + 'which is what I am. '
        + 'Estoy cansado, because it gives a current state.',
    },
    {
      level: 4,
      ask: 'Why is it Accra está en Ghana, '
        + 'when Accra will never move?',
      steps: [
        'The permanent rule predicts ser, and ser is wrong.',
        'Location always takes estar.',
        'The better question is whether the sentence says what or where.',
      ],
      answer: 'Because location always takes estar, '
        + 'however fixed the thing is. '
        + 'The sentence says where Accra is, not what Accra is, '
        + 'so estar is used. '
        + 'This is one of the cases that shows '
        + 'the permanent and temporary rule is unreliable, '
        + 'since nothing is more permanent than the position of a city. '
        + 'An event is different: '
        + 'la fiesta es en mi casa uses ser, '
        + 'because that states what the party is rather than '
        + 'where an object sits.',
    },
    {
      level: 4,
      ask: 'Explain the difference between '
        + 'el mango es verde and el mango está verde.',
      steps: [
        'With ser the adjective describes the thing itself.',
        'With estar it describes the state it is in.',
      ],
      answer: 'El mango es verde means the mango is green in colour, '
        + 'as a variety that is green when ripe. '
        + 'El mango está verde means the mango is unripe, '
        + 'which is a state it is in and will grow out of. '
        + 'The pattern is general: '
        + 'with ser the adjective describes what the thing is, '
        + 'and with estar it describes the condition it is in. '
        + 'The same holds for ser aburrido, to be boring, '
        + 'and estar aburrido, to be bored.',
    },
    {
      level: 5,
      ask: 'Explain why mi padre está muerto uses estar '
        + 'and son las tres uses ser, '
        + 'and what this shows about the usual rule.',
      steps: [
        'Death is permanent and uses estar.',
        'The time is momentary and uses ser.',
        'So permanence cannot be the rule.',
        'The what or how question handles both.',
      ],
      answer: 'Mi padre está muerto describes his condition, '
        + 'which is how he is, so estar is used, '
        + 'even though the condition is permanent. '
        + 'Son las tres identifies what the hour is, '
        + 'so ser is used, '
        + 'even though it will be true for only one hour. '
        + 'Together these show '
        + 'that the permanent and temporary rule is not the real rule. '
        + 'The reliable question is whether the sentence says '
        + 'what something is, which takes ser, '
        + 'or how and where it is, which takes estar. '
        + 'That question answers both cases correctly '
        + 'and nearly every other case in the syllabus.',
    },
  ],

  traps: [
    {
      mistake: 'Using ser for location.',
      why: 'Location always takes estar: estoy en la escuela. '
        + 'Only the location of an event takes ser.',
    },
    {
      mistake: 'Using estar for occupation.',
      why: 'Soy estudiante. '
        + 'Occupation is what you are, '
        + 'and the permanent rule misleads here.',
    },
    {
      mistake: 'Relying on the permanent and temporary rule.',
      why: 'Está muerto is permanent and son las tres is momentary. '
        + 'Ask instead whether the sentence says what or how.',
    },
    {
      mistake: 'Writing soy hablando for the continuous.',
      why: 'The continuous always uses estar: estoy hablando.',
    },
  ],

  extension:
    'The two verbs come from different Latin verbs, '
    + 'and knowing which explains a great deal. '
    + 'Ser descends from the Latin verb for being, '
    + 'the verb of essence. '
    + 'Estar descends from stare, meaning to stand, '
    + 'which is also the ancestor of the English stand and state. '
    + 'So estar carries from its origin '
    + 'the sense of standing somewhere or being in some condition, '
    + 'which is exactly its modern use. '
    + 'The English word state is the clue a learner can keep: '
    + 'estar is for a state, and the words are relatives. '
    + 'Italian and Portuguese kept the same pair, '
    + 'while French merged them into être, '
    + 'which is why a learner of French '
    + 'has nothing to transfer here.',

  questions: [
    {
      id: 'se-1',
      ask: 'I am in Accra in Spanish is:',
      kind: 'choice',
      options: ['estoy en Accra', 'soy en Accra', 'estoy de Accra'],
      answer: 'estoy en Accra',
      teach: 'Location always takes estar.',
      level: 3,
    },
    {
      id: 'se-2',
      ask: 'I am a student in Spanish is:',
      kind: 'choice',
      options: ['soy estudiante', 'estoy estudiante', 'estoy de '
        + 'estudiante'],
      answer: 'soy estudiante',
      teach: 'Occupation is what you are, so ser, '
        + 'even though being a student is temporary.',
      level: 4,
    },
    {
      id: 'se-3',
      ask: 'El mango está verde means the mango is:',
      kind: 'choice',
      options: ['unripe', 'green in colour', 'rotten'],
      answer: 'unripe',
      teach: 'With estar the adjective gives a state. '
        + 'Es verde would give the colour.',
      level: 4,
    },
    {
      id: 'se-4',
      ask: 'Which verb is used for the continuous tense?',
      kind: 'choice',
      options: ['estar', 'ser', 'tener'],
      answer: 'estar',
      teach: 'Estoy hablando. '
        + 'Soy hablando is never correct.',
      level: 3,
    },
    {
      id: 'se-5',
      ask: 'Why is the permanent and temporary rule unreliable?',
      kind: 'choice',
      options: [
        'está muerto is permanent and son las tres is momentary',
        'both verbs mean the same thing',
        'ser is never used for states',
      ],
      answer: 'está muerto is permanent and son las tres is momentary',
      teach: 'Ask instead whether the sentence says what something is '
        + 'or how and where it is.',
      level: 5,
    },
  ],
})

/* ── the Spanish speaking world ─────────────────────────────────────────── */

teach({
  topicId: 'hispanic-world',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Spanish is an official language in about twenty countries '
      + 'and is spoken by several hundred million people. '
      + 'Most of them are in Latin America, not Spain. '
      + 'In Africa it is official in Equatorial Guinea. '
      + 'For a Ghanaian it matters for trade, '
      + 'for work with international bodies, '
      + 'and because Spanish and Portuguese speakers '
      + 'can understand each other to a useful degree.',
    method: [
      'Name the country and its capital.',
      'Place it: Europe, Central America, South America, Africa.',
      'Say why Spanish is official there.',
      'Give a practical reason for a Ghanaian to learn it.',
      'Note that Latin American Spanish has far more speakers.',
    ],
  },

  idea:
    'Spanish is official in about twenty countries. '
    + 'In Europe that country is España, with Madrid. '
    + 'In North and Central America the list is longer. '
    + 'México has Mexico City. '
    + 'Then come Guatemala, Honduras, El Salvador, '
    + 'Nicaragua, Costa Rica, Panamá and Cuba. '
    + 'The República Dominicana belongs there too, '
    + 'and so does Puerto Rico. '
    + 'In South America, Colombia has Bogotá. '
    + 'Venezuela has Caracas. '
    + 'Perú has Lima. '
    + 'Chile has Santiago. '
    + 'Argentina has Buenos Aires. '
    + 'Bolivia, Ecuador, Paraguay and Uruguay follow. '
    + 'Brasil is the large exception. '
    + 'Its language is Portuguese. '
    + 'In Africa, Spanish is official in Equatorial Guinea. '
    + 'That country lies on the Gulf of Guinea, '
    + 'and it was a Spanish colony. '
    + 'The United States has very many Spanish speakers, '
    + 'though Spanish is not its official language. '
    + 'Why is Spanish official in the Americas? '
    + 'Spain colonised the region from the late fifteenth century. '
    + 'At independence the language was kept '
    + 'for administration and education. '
    + 'Indigenous languages are still widely spoken. '
    + 'Quechua and Aymara are used in the Andes. '
    + 'Guaraní is used in Paraguay, where it is also official. '
    + 'Spanish is one of the six official languages '
    + 'of the United Nations.',

  mechanism:
    'The fact that reorganises this topic '
    + 'is that Spanish is mainly an American language. '
    + 'Spain has about forty seven million people. '
    + 'Mexico alone has more than twice that, '
    + 'and the Spanish speaking countries of the Americas together '
    + 'hold the great majority of all Spanish speakers. '
    + 'So a learner who thinks of Spanish as the language of Spain '
    + 'has the proportions upside down, '
    + 'and it matters practically: '
    + 'the Spanish worth learning to speak is the Latin American '
    + 'variety, '
    + 'because that is what most speakers use '
    + 'and what a Ghanaian is most likely to encounter. '
    + 'That is also why these lessons give '
    + 'the Latin American pronunciation of c and z as s, '
    + 'and use ustedes rather than vosotros. '
    + 'Now the practical case, which the examination asks for directly. '
    + 'A question will say why a Ghanaian should learn Spanish, '
    + 'and a general answer about culture scores little. '
    + 'Four specific reasons. '
    + 'The first is trade. '
    + 'Ghana exports cocoa, gold and oil, '
    + 'and Latin American countries are both markets and competitors, '
    + 'particularly in cocoa, where Ecuador is a significant producer. '
    + 'Negotiation, shipping documents and contracts '
    + 'in that direction are in Spanish. '
    + 'The second is international employment. '
    + 'Spanish is one of the six official languages of the United '
    + 'Nations, '
    + 'and of many other international bodies, '
    + 'so interpreters, translators and officials with Spanish '
    + 'are needed, '
    + 'and the competition from Ghanaian candidates is small. '
    + 'The third is Equatorial Guinea, '
    + 'which is worth naming because candidates forget it. '
    + 'It is on the Gulf of Guinea, '
    + 'closer to Accra than most of Europe is, '
    + 'it is an oil producer, '
    + 'and its official languages include Spanish. '
    + 'So there is a Spanish speaking country in Africa, '
    + 'and in Ghana own region. '
    + 'The fourth is the one most learners do not know. '
    + 'Spanish and Portuguese are close enough '
    + 'that a speaker of one can follow a good deal of the other, '
    + 'particularly in writing. '
    + 'Portuguese is the language of Brazil, '
    + 'and in Africa of Angola, Mozambique, '
    + 'Guinea Bissau and Cape Verde, '
    + 'the last two in West Africa. '
    + 'So learning Spanish gives partial access '
    + 'to a second large language group '
    + 'including two of Ghana regional neighbours. '
    + 'That is a strong answer and it is rarely given. '
    + 'Here is where marks are lost. '
    + 'The first is naming Brazil as Spanish speaking. '
    + 'It is Portuguese speaking, '
    + 'and it is the largest country in South America, '
    + 'so the error is visible. '
    + 'The second is treating the indigenous languages as extinct. '
    + 'Quechua has several million speakers, '
    + 'Guaraní is official in Paraguay alongside Spanish, '
    + 'and in parts of Bolivia and Peru '
    + 'Spanish is a second language for much of the population, '
    + 'exactly as English is in Ghana. '
    + 'Saying so shows a candidate understands '
    + 'what an official language is. '
    + 'The third is the capitals, '
    + 'which are simply learned: '
    + 'Madrid, Mexico City, Bogotá, Lima, Santiago, '
    + 'Buenos Aires, Caracas, Havana, '
    + 'and Malabo for Equatorial Guinea. '
    + 'The fourth is forgetting that Spanish '
    + 'is written with its accents. '
    + 'México, Perú, Panamá and Bogotá carry them, '
    + 'and in a Spanish paper they are expected. '
    + 'What has to be written down, '
    + 'in the question about why Spanish is worth learning, '
    + 'is a specific consequence rather than a general sentiment. '
    + 'Not that Spanish is widely spoken, '
    + 'but that Spanish is the language of Equatorial Guinea '
    + 'on the Gulf of Guinea, '
    + 'and of most of Latin America, '
    + 'and that it is one of six official United Nations languages. '
    + 'Each specific fact is a mark.',

  recap:
    'You know Spanish is spoken in Spain '
    + 'and perhaps that it is spoken in South America. '
    + 'This gives the countries, '
    + 'corrects the proportions, '
    + 'and says what a Ghanaian gains from the language.',

  method: [
    'Name the country with its accents, and its capital.',
    'Place it in Europe, the Americas or Africa.',
    'Note that most Spanish speakers are in the Americas.',
    'Say that Spanish is official because of Spanish colonisation.',
    'Add that indigenous languages are still widely spoken.',
    'Give a specific practical reason for a Ghanaian: '
      + 'trade, international bodies, Equatorial Guinea, or Portuguese.',
    'Do not place Brazil among the Spanish speaking countries.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Name four Spanish speaking countries '
        + 'with their capitals, '
        + 'one of them in Africa.',
      steps: [
        'One in Europe, two in the Americas, one in Africa.',
      ],
      answer: 'España with Madrid; '
        + 'México with Mexico City; '
        + 'Perú with Lima; '
        + 'and Equatorial Guinea with Malabo, '
        + 'which lies on the Gulf of Guinea '
        + 'and has Spanish among its official languages.',
    },
    {
      level: 3,
      ask: 'Which large South American country does not have Spanish '
        + 'as its official language, and what does it use?',
      steps: [
        'The largest country in South America is the exception.',
      ],
      answer: 'Brasil, which uses Portuguese. '
        + 'It is the largest country in South America, '
        + 'so including it among the Spanish speaking states '
        + 'is a visible error.',
    },
    {
      level: 4,
      ask: 'Give three specific reasons why Spanish '
        + 'is worth a Ghanaian learning.',
      steps: [
        'Each reason needs a concrete consequence.',
      ],
      answer: 'Trade: Latin American countries are markets '
        + 'and competitors for Ghanaian exports, '
        + 'particularly cocoa, where Ecuador is a significant producer, '
        + 'and that business is conducted in Spanish. '
        + 'International employment: Spanish is one of the six official '
        + 'languages of the United Nations '
        + 'and of many other bodies, '
        + 'so translators and officials with Spanish are in demand '
        + 'and few Ghanaian candidates offer it. '
        + 'Regional access: Equatorial Guinea, '
        + 'an oil producer on the Gulf of Guinea, '
        + 'has Spanish among its official languages, '
        + 'so there is a Spanish speaking country in Ghana own region.',
    },
    {
      level: 5,
      ask: 'Explain how learning Spanish gives partial access '
        + 'to Portuguese, '
        + 'and why that matters in West Africa.',
      steps: [
        'Spanish and Portuguese are closely related.',
        'A speaker of one can follow much of the other, especially in '
          + 'writing.',
        'Portuguese is spoken in Guinea Bissau and Cape Verde.',
      ],
      answer: 'Spanish and Portuguese descend from Latin '
        + 'and remain close enough '
        + 'that a speaker of one can follow a good deal of the other, '
        + 'particularly in writing, '
        + 'where the shared vocabulary is clearest. '
        + 'Portuguese is the language of Brazil '
        + 'and, in Africa, of Angola, Mozambique, '
        + 'Guinea Bissau and Cape Verde. '
        + 'The last two are in West Africa '
        + 'and are fellow members of ECOWAS with Ghana. '
        + 'So Spanish opens partial access '
        + 'to a second large language group '
        + 'that includes two of Ghana regional neighbours, '
        + 'which is a practical argument rarely given '
        + 'and worth making.',
    },
  ],

  traps: [
    {
      mistake: 'Listing Brazil as Spanish speaking.',
      why: 'Brazil uses Portuguese, '
        + 'and it is the largest country in South America.',
    },
    {
      mistake: 'Thinking of Spanish as mainly the language of Spain.',
      why: 'Mexico alone has more than twice the population of Spain, '
        + 'and most Spanish speakers are in the Americas.',
    },
    {
      mistake: 'Treating indigenous American languages as extinct.',
      why: 'Quechua has millions of speakers '
        + 'and Guaraní is official in Paraguay. '
        + 'Spanish is an official language there, '
        + 'as English is in Ghana.',
    },
    {
      mistake: 'Answering why learn Spanish with a general sentiment.',
      why: 'Each specific fact is a mark: '
        + 'Equatorial Guinea, the United Nations, cocoa competitors, '
        + 'access to Portuguese.',
    },
  ],

  extension:
    'Spanish varies between regions. '
    + 'The differences are small and worth knowing. '
    + 'In Spain the c before e or i, and the z, '
    + 'are said with a th sound, '
    + 'so cinco begins like the English think. '
    + 'In Latin America both are said as s. '
    + 'Vocabulary differs too. '
    + 'A car is coche in Spain '
    + 'and carro or auto in much of the Americas. '
    + 'A bus may be autobús, guagua, camión or colectivo, '
    + 'depending where you are. '
    + 'None of this stops people understanding each other. '
    + 'So speak one variety consistently, '
    + 'usually the Latin American one, '
    + 'and learn to recognise the rest. '
    + 'That is already how a Ghanaian handles English '
    + 'from a Nigerian, a Briton and an American.',

  questions: [
    {
      id: 'his-1',
      ask: 'Spanish is an official language of which African country?',
      kind: 'choice',
      options: ['Equatorial Guinea', 'Angola', 'Morocco'],
      answer: 'Equatorial Guinea',
      teach: 'It lies on the Gulf of Guinea and was a Spanish colony. '
        + 'Angola uses Portuguese.',
      level: 3,
    },
    {
      id: 'his-2',
      ask: 'Which South American country uses Portuguese?',
      kind: 'choice',
      options: ['Brasil', 'Perú', 'Colombia'],
      answer: 'Brasil',
      teach: 'It is the largest country in South America, '
        + 'so the error is visible.',
      level: 2,
    },
    {
      id: 'his-3',
      ask: 'Most Spanish speakers live in:',
      kind: 'choice',
      options: ['the Americas', 'Spain', 'Africa'],
      answer: 'the Americas',
      teach: 'Mexico alone has more than twice the population of Spain.',
      level: 4,
    },
    {
      id: 'his-4',
      ask: 'The capital of Perú is:',
      kind: 'choice',
      options: ['Lima', 'Bogotá', 'Santiago'],
      answer: 'Lima',
      teach: 'Bogotá is in Colombia and Santiago in Chile.',
      level: 3,
    },
    {
      id: 'his-5',
      ask: 'Learning Spanish gives partial access to Portuguese, '
        + 'which matters in West Africa because of:',
      kind: 'choice',
      options: [
        'Guinea Bissau and Cape Verde',
        'Senegal and Mali',
        'Nigeria and Cameroon',
      ],
      answer: 'Guinea Bissau and Cape Verde',
      teach: 'Both are Portuguese speaking ECOWAS members, '
        + 'and the two languages are close enough to help.',
      level: 5,
    },
  ],
})
