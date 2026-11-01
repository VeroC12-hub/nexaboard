/**
 * Stored lessons for SHS 1 Ghanaian Language.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── Written for whichever language the school teaches ─────────────────────
 *
 * Ghana has eleven languages approved for study, and a school teaches the
 * one of its area: Akan in its Asante Twi, Akuapem Twi and Fante forms,
 * Ewe, Ga, Dangme, Dagbani, Dagaare, Gonja, Kasem, Nzema and Gurene. So
 * these lessons are written to apply to any of them. The structure of each
 * topic is general, the method is general, and the examples name a
 * particular language whenever a concrete form is needed, marked as such.
 * A learner should substitute the forms of their own language into the same
 * procedure, and the lesson says where to do that.
 *
 * ── What changes at SHS ───────────────────────────────────────────────────
 *
 * At JHS a learner writes and speaks the language. At SHS they are asked to
 * describe it: to say that a tone distinguishes two words, to name the
 * affix and its job, to explain what an image in an appellation claims. The
 * subject becomes linguistics taught in the language, and candidates who
 * speak the language perfectly lose marks for being unable to describe
 * what they are doing. So every lesson here gives the vocabulary of
 * description as well as the forms.
 *
 * ── Tone marks and special letters ────────────────────────────────────────
 *
 * The special letters of the Ghanaian orthographies, and the tone marks
 * where a language writes them, are part of the spelling and not optional.
 * The orthography lesson treats that as its central point, because it is
 * the largest avoidable loss of marks in the paper.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── sounds and tone ───────────────────────────────────────────────────── */

teach({
  topicId: 'phonology-ghl',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The Ghanaian languages have more vowels than English writes, '
      + 'which is why the orthographies add letters. '
      + 'Most of them are tone languages: '
      + 'the pitch on a syllable is part of the word, '
      + 'so two words spelt the same way '
      + 'can differ only in tone and mean different things. '
      + 'Several also nasalise vowels, '
      + 'and that too distinguishes words.',
    method: [
      'List the vowels your language has, including the special '
        + 'letters.',
      'Say whether each has a nasal partner.',
      'Find a pair of words that differ only in tone.',
      'Mark the tone on each syllable: high, low, or mid.',
      'Say what each member of the pair means.',
    ],
  },

  idea:
    'The sound system of a language is its phonology. '
    + 'The Ghanaian languages have vowel systems '
    + 'larger than the five letters of the Latin alphabet, '
    + 'which is why their orthographies add letters: '
    + 'the open e and the open o, '
    + 'written with their own characters in Akan, Ewe, Ga and others. '
    + 'Akan has nine or ten vowels depending on the dialect; '
    + 'Ewe has seven oral vowels and five nasal ones; '
    + 'Ga and Dangme likewise distinguish more vowels than English '
    + 'spells. '
    + 'Many of these languages also nasalise vowels, '
    + 'so a vowel said through the nose '
    + 'is a different sound from the same vowel said through the mouth, '
    + 'and the difference can distinguish words. '
    + 'Most Ghanaian languages are tone languages. '
    + 'The pitch at which a syllable is said '
    + 'is part of the word, not an expression of feeling. '
    + 'Akan and Ewe distinguish a high tone from a low tone, '
    + 'and some analyses add a mid tone. '
    + 'Tone has two jobs. '
    + 'Lexical tone distinguishes words: '
    + 'two words with the same consonants and vowels '
    + 'differ only in pitch and mean different things. '
    + 'Grammatical tone marks a difference of grammar, '
    + 'such as between one tense and another, '
    + 'with no change in the consonants or vowels at all. '
    + 'Consonant systems also contain sounds English does not write, '
    + 'including the ky and gy of Akan, '
    + 'the kp and gb of Ewe and Ga, '
    + 'and the ny of several languages, '
    + 'each of which is one sound rather than two.',

  mechanism:
    'The single fact a candidate must be able to demonstrate '
    + 'is that tone is part of the word, '
    + 'and the way to demonstrate it is a minimal pair. '
    + 'A minimal pair is two words '
    + 'identical in every sound except one feature, '
    + 'which here is the pitch. '
    + 'Every Ghanaian language has them, '
    + 'and a learner should have two or three ready '
    + 'from their own language, with meanings, '
    + 'because the examination asks for exactly that: '
    + 'show how tone distinguishes words. '
    + 'An answer that says tone is important earns nothing. '
    + 'An answer that gives two words, '
    + 'marks the tone on each, '
    + 'and states the two meanings, earns the marks. '
    + 'So the practical task in this topic '
    + 'is to collect pairs from your own language and learn them. '
    + 'A learner who speaks the language already knows the pairs; '
    + 'what they lack is the habit of writing them down '
    + 'with the tone marked, which is what is being assessed. '
    + 'The second point is grammatical tone, '
    + 'which candidates find harder '
    + 'because they use it without noticing. '
    + 'In several Ghanaian languages '
    + 'the difference between a completed action and a habitual one, '
    + 'or between a statement and a question, '
    + 'can be carried by tone alone, '
    + 'with every consonant and vowel unchanged. '
    + 'A speaker produces this correctly without thought. '
    + 'Asked to describe it, they cannot, '
    + 'because nothing in the written form shows it. '
    + 'So the point to grasp is that tone is doing grammar, '
    + 'not only distinguishing vocabulary, '
    + 'and a question that gives two identically spelled sentences '
    + 'and asks how they differ '
    + 'is asking about grammatical tone. '
    + 'Third, why the orthographies need extra letters. '
    + 'The reason is simply that the languages have more vowels '
    + 'than the Latin alphabet has vowel letters. '
    + 'English manages with five letters '
    + 'by spelling the rest inconsistently, '
    + 'which is why English spelling is so hard. '
    + 'The Ghanaian orthographies took the other route '
    + 'and added letters, '
    + 'so that each sound has its own symbol '
    + 'and the spelling stays regular. '
    + 'That is a better design, '
    + 'and it means the special letters are not decoration: '
    + 'they are the only way to write the sound. '
    + 'Substituting e for the open e '
    + 'is not a minor spelling slip, '
    + 'it writes a different vowel, '
    + 'and often a different word. '
    + 'Fourth, nasalisation, '
    + 'which is examined and is often omitted from answers. '
    + 'A nasal vowel is produced with air passing through the nose. '
    + 'In Ewe, Akan and others this distinguishes words, '
    + 'and the orthography marks it, '
    + 'usually with a following n or with a mark on the vowel '
    + 'depending on the language. '
    + 'A learner should know how their own language writes it. '
    + 'Fifth, the consonant clusters that are single sounds. '
    + 'Kp and gb in Ewe and Ga '
    + 'are each made with a single closure, '
    + 'not a k followed by a p, '
    + 'and ky and gy in Akan likewise. '
    + 'A candidate who describes kp as two consonants '
    + 'has described the spelling rather than the sound, '
    + 'and in a phonology question that is the error being tested. '
    + 'What has to be written down '
    + 'is always a form with its tone marked '
    + 'and its meaning stated. '
    + 'No apparatus is needed for any of this: '
    + 'the data is the learner own speech, '
    + 'and the work is describing it accurately.',

  recap:
    'You speak the language and can hear when a word is said wrongly. '
    + 'This asks you to describe why: '
    + 'which sounds the language has, '
    + 'and how pitch changes a word.',

  method: [
    'List the vowels of your language, with the special letters.',
    'Note which vowels have nasal partners and how they are written.',
    'Note the consonants that are one sound written with two letters.',
    'State that the language is a tone language.',
    'Give a minimal pair that differs only in tone.',
    'Mark high and low on each syllable.',
    'State the meaning of each member of the pair.',
    'For grammatical tone, give two sentences spelled alike '
      + 'and say how their meanings differ.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Why do the Ghanaian orthographies '
        + 'use letters the English alphabet does not have?',
      steps: [
        'The languages have more vowels than five.',
        'Each sound needs its own symbol if spelling is to stay regular.',
      ],
      answer: 'Because the languages have more vowel sounds '
        + 'than the Latin alphabet has vowel letters. '
        + 'Akan has nine or ten vowels '
        + 'and Ewe has seven oral vowels and five nasal ones. '
        + 'English copes with five letters '
        + 'by spelling the remaining sounds inconsistently, '
        + 'which is why its spelling is difficult. '
        + 'The Ghanaian orthographies added letters instead, '
        + 'so each sound has one symbol '
        + 'and the spelling stays regular. '
        + 'The special letters are therefore the only way '
        + 'to write those sounds, not optional variants.',
    },
    {
      level: 4,
      ask: 'How would you show, in an examination, '
        + 'that your language is a tone language?',
      steps: [
        'A general statement earns nothing.',
        'Give a minimal pair.',
        'Mark the tone and give both meanings.',
      ],
      answer: 'By giving a minimal pair: '
        + 'two words with the same consonants and vowels '
        + 'that differ only in pitch, '
        + 'with the tone marked on each syllable '
        + 'and the meaning of each word stated. '
        + 'Every Ghanaian language has such pairs, '
        + 'and a learner should have two or three ready '
        + 'from their own language. '
        + 'Saying only that tone is important earns nothing, '
        + 'because the question asks for a demonstration.',
    },
    {
      level: 4,
      ask: 'What is grammatical tone, '
        + 'and why do speakers find it hard to describe?',
      steps: [
        'Tone can carry a difference of grammar.',
        'The consonants and vowels do not change.',
        'So nothing in the spelling shows it.',
      ],
      answer: 'Grammatical tone is tone carrying a difference of '
        + 'grammar, '
        + 'such as between a completed and a habitual action, '
        + 'or between a statement and a question, '
        + 'with no change at all in the consonants or vowels. '
        + 'Speakers produce it correctly without thinking, '
        + 'and find it hard to describe '
        + 'because nothing in the written form marks it, '
        + 'so there is nothing on the page to point at. '
        + 'A question that gives two identically spelled sentences '
        + 'and asks how they differ '
        + 'is asking about grammatical tone.',
    },
    {
      level: 5,
      ask: 'Why is it wrong to describe the kp of Ewe '
        + 'as a k followed by a p?',
      steps: [
        'It is made with one closure, not two.',
        'So it is a single consonant.',
        'The two letters are a spelling convention.',
      ],
      answer: 'Because kp is one sound, not two. '
        + 'It is produced with a single closure '
        + 'made at two places in the mouth at the same moment, '
        + 'and released once. '
        + 'A k followed by a p would have two releases. '
        + 'The two letters are a spelling convention, '
        + 'adopted because the Latin alphabet has no single symbol '
        + 'for the sound. '
        + 'The same applies to gb, '
        + 'and to ky and gy in Akan. '
        + 'A candidate who counts them as two consonants '
        + 'has described the spelling rather than the sound, '
        + 'which is exactly the error a phonology question tests.',
    },
  ],

  traps: [
    {
      mistake: 'Answering a tone question with a general statement.',
      why: 'The question asks for a demonstration. '
        + 'Give a minimal pair, mark the tone, and give both meanings.',
    },
    {
      mistake: 'Substituting e for the open e, or o for the open o.',
      why: 'They are different vowels. '
        + 'The special letter is the only way to write the sound.',
    },
    {
      mistake: 'Forgetting nasalisation.',
      why: 'A nasal vowel is a different sound from its oral partner, '
        + 'and the difference distinguishes words.',
    },
    {
      mistake: 'Counting kp, gb, ky or gy as two consonants.',
      why: 'Each is a single sound written with two letters, '
        + 'because the alphabet has no one symbol for it.',
    },
  ],

  extension:
    'Tone can be written or left to the reader, '
    + 'and the Ghanaian orthographies differ on this. '
    + 'Some mark tone only where a word would otherwise be ambiguous; '
    + 'others mark it fully in teaching material '
    + 'and sparingly in ordinary writing. '
    + 'The trade is the same one Arabic makes with its vowels. '
    + 'Writing every tone is slower '
    + 'and makes the text unambiguous for a learner. '
    + 'Leaving it out is faster '
    + 'and asks the reader to supply it from the sentence, '
    + 'which a fluent speaker does without effort. '
    + 'So a learner should expect teaching texts to be fully marked '
    + 'and newspapers not to be, '
    + 'and should know which convention their own examination uses.',

  questions: [
    {
      id: 'ph-1',
      ask: 'A tone language is one in which:',
      kind: 'choice',
      options: [
        'pitch is part of the word',
        'pitch shows the speaker mood',
        'all syllables are said at one pitch',
      ],
      answer: 'pitch is part of the word',
      teach: 'Two words with the same consonants and vowels '
        + 'can differ only in pitch and mean different things.',
      level: 3,
    },
    {
      id: 'ph-2',
      ask: 'To show that tone distinguishes words you should give:',
      kind: 'choice',
      options: [
        'a minimal pair with tones marked and meanings stated',
        'a general statement that tone matters',
        'a list of all the vowels',
      ],
      answer: 'a minimal pair with tones marked and meanings stated',
      teach: 'The question asks for a demonstration, not an assertion.',
      level: 4,
    },
    {
      id: 'ph-3',
      ask: 'The Ghanaian orthographies add letters because the '
        + 'languages:',
      kind: 'choice',
      options: [
        'have more vowel sounds than the Latin alphabet has vowel '
          + 'letters',
        'are written from right to left',
        'have no consonants',
      ],
      answer: 'have more vowel sounds than the Latin alphabet has vowel '
        + 'letters',
      teach: 'English instead spells extra sounds inconsistently, '
        + 'which is why its spelling is hard.',
      level: 4,
    },
    {
      id: 'ph-4',
      ask: 'The kp of Ewe is:',
      kind: 'choice',
      options: [
        'one sound written with two letters',
        'a k followed by a p',
        'a nasal vowel',
      ],
      answer: 'one sound written with two letters',
      teach: 'It has a single release. '
        + 'The two letters are a convention of the alphabet.',
      level: 5,
    },
    {
      id: 'ph-5',
      ask: 'Grammatical tone is tone that:',
      kind: 'choice',
      options: [
        'marks a difference of grammar with no change of consonants or '
          + 'vowels',
        'distinguishes two items of vocabulary',
        'shows emphasis',
      ],
      answer: 'marks a difference of grammar with no change of '
        + 'consonants or vowels',
      teach: 'Distinguishing vocabulary is lexical tone. '
        + 'Grammatical tone can separate two tenses.',
      level: 5,
    },
  ],
})

/* ── word formation ────────────────────────────────────────────────────── */

teach({
  topicId: 'morphology-ghl',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A word is built from a root and affixes. '
      + 'A prefix goes before the root and a suffix after it. '
      + 'Ghanaian languages form nouns from verbs with affixes, '
      + 'mark the plural with a prefix or a suffix depending on the '
      + 'language, '
      + 'and build compounds by joining two roots. '
      + 'Reduplication, saying a root twice, '
      + 'has jobs of its own.',
    method: [
      'Find the root: the part that carries the meaning.',
      'Identify what has been added, and whether before or after.',
      'Name the affix and state its job.',
      'For a compound, name the two roots and the meaning of the whole.',
      'For reduplication, say what the doubling adds.',
    ],
  },

  idea:
    'Morphology is the study of how words are built. '
    + 'A root is the part that carries the core meaning. '
    + 'An affix is added to it: '
    + 'a prefix before the root, a suffix after it. '
    + 'Ghanaian languages use affixes for several jobs. '
    + 'They form a noun from a verb, '
    + 'so a verb meaning to teach yields a noun meaning a teacher '
    + 'and another meaning teaching. '
    + 'They mark number: '
    + 'Akan marks many plurals with a prefix, '
    + 'as the nouns of the class taking a before the root, '
    + 'while Ewe marks the plural with a following word, '
    + 'and Dagbani uses suffixes. '
    + 'They form an agent noun, '
    + 'the one who does the action, '
    + 'often with an affix meaning person. '
    + 'And they form abstract nouns from adjectives and verbs. '
    + 'Compounding joins two roots into one word, '
    + 'and the meaning of the compound '
    + 'is usually narrower than the sum of its parts. '
    + 'Reduplication repeats a root, in whole or in part, '
    + 'and in Ghanaian languages it commonly marks '
    + 'repetition of an action, '
    + 'intensity or degree, '
    + 'or a plural or distributive sense. '
    + 'Borrowing takes a word from another language '
    + 'and reshapes it to the sound system of the borrower, '
    + 'which is why borrowed English words in Ghanaian languages '
    + 'change their vowels and their syllable shape.',

  mechanism:
    'The skill this topic tests is segmentation: '
    + 'cutting a word into its parts '
    + 'and saying what each part does. '
    + 'A speaker of the language uses the words correctly '
    + 'and has never had to divide one, '
    + 'so the examination is asking for something new '
    + 'rather than something already known. '
    + 'The procedure is mechanical and should be learned as such. '
    + 'First find the root, '
    + 'by thinking of other words that share a meaning: '
    + 'if a noun meaning teacher '
    + 'and a noun meaning teaching '
    + 'and a verb meaning to teach '
    + 'all contain the same stretch of sound, '
    + 'that stretch is the root. '
    + 'Second, note what differs between them: '
    + 'those are the affixes. '
    + 'Third, state each affix job: '
    + 'this one makes an agent noun, '
    + 'that one makes an abstract noun. '
    + 'Three steps, and the answer writes itself. '
    + 'A learner who works from a family of related words '
    + 'rather than from one word in isolation '
    + 'will find the root reliably, '
    + 'and that is the single most useful habit in the topic. '
    + 'The second point is that the affix has to be named with its job '
    + 'and not merely pointed at. '
    + 'The marks go to the function. '
    + 'Saying that a prefix has been added earns one mark; '
    + 'saying that the prefix marks the plural '
    + 'earns the second; '
    + 'giving another word where the same prefix does the same thing '
    + 'earns the third. '
    + 'So an answer should always have three parts: '
    + 'the segmentation, the function, and a second example. '
    + 'Third, compounds, '
    + 'where the examinable point is that the meaning narrows. '
    + 'Join a root meaning water and a root meaning pot '
    + 'and you get a word for a particular vessel, '
    + 'not for any pot that happens to contain water. '
    + 'That narrowing is what makes a compound a word '
    + 'rather than a phrase, '
    + 'and it is the test for whether something is a compound at all. '
    + 'A learner should be able to give an example from their language '
    + 'and say what the whole means '
    + 'and how that differs from the two parts together. '
    + 'Fourth, reduplication, '
    + 'which candidates recognise and cannot explain. '
    + 'The doubling is not emphasis in general. '
    + 'It has specific jobs, and which job depends on the language '
    + 'and on the word class. '
    + 'With a verb it commonly marks repeated or continuous action. '
    + 'With an adjective it commonly marks degree, '
    + 'either intensifying or weakening. '
    + 'With a noun it may mark a distributive sense, '
    + 'one each or several separately. '
    + 'A learner should give an example '
    + 'and name which of these the doubling is doing, '
    + 'because that is the mark. '
    + 'Fifth, borrowing, '
    + 'which is examined and is often answered carelessly. '
    + 'A borrowed word is reshaped by the borrowing language. '
    + 'English words taken into Akan or Ewe '
    + 'acquire the vowel system of the borrower, '
    + 'lose consonant clusters the language does not permit, '
    + 'and often gain a final vowel, '
    + 'because many Ghanaian languages prefer syllables '
    + 'that end in a vowel. '
    + 'So the changes are not corruptions. '
    + 'They are the word being fitted to a different sound system, '
    + 'and describing them that way '
    + 'is the difference between a linguistic answer '
    + 'and a complaint about bad pronunciation. '
    + 'What has to be written down is the division, '
    + 'marked with a hyphen or a vertical line, '
    + 'the name of each part, '
    + 'and its job. '
    + 'A word quoted whole with a translation '
    + 'answers a vocabulary question, not a morphology one.',

  recap:
    'You use the words of your language correctly '
    + 'without dividing them. '
    + 'This asks you to cut a word into its parts '
    + 'and say what each part contributes.',

  method: [
    'Collect two or three related words that share a meaning.',
    'Find the stretch of sound they all contain: that is the root.',
    'Note what differs between them: those are the affixes.',
    'Say whether each affix is a prefix or a suffix.',
    'State the job of each affix.',
    'Give a second word where the same affix does the same job.',
    'For a compound, name the two roots and say how the meaning '
      + 'narrows.',
    'For reduplication, say which job the doubling is doing.',
    'For a borrowing, describe how the sound shape was changed.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How do you find the root of a word?',
      steps: [
        'Work from a family of related words, not from one word alone.',
      ],
      answer: 'By comparing two or three related words. '
        + 'If a verb meaning to teach, '
        + 'a noun meaning a teacher '
        + 'and a noun meaning teaching '
        + 'all contain the same stretch of sound, '
        + 'that stretch is the root, '
        + 'and what differs between them is the affixes. '
        + 'Working from one word alone '
        + 'gives no way to tell the root from the affix.',
    },
    {
      level: 4,
      ask: 'What three parts should an answer about an affix contain?',
      steps: [
        'The marks go to the function, not the identification.',
      ],
      answer: 'The segmentation, showing where the word divides; '
        + 'the function of the affix, '
        + 'such as that it marks the plural '
        + 'or forms an agent noun; '
        + 'and a second word in which the same affix does the same job, '
        + 'which shows the analysis is general '
        + 'and not a guess about one word. '
        + 'Pointing out that something has been added, with no function, '
        + 'earns one mark of three.',
    },
    {
      level: 4,
      ask: 'What makes a compound a word rather than a phrase?',
      steps: [
        'The meaning of the whole narrows.',
        'A phrase keeps the sum of its parts.',
      ],
      answer: 'That its meaning narrows. '
        + 'A root meaning water joined to a root meaning pot '
        + 'gives a word for one particular kind of vessel, '
        + 'not for any pot that happens to hold water. '
        + 'A phrase would keep the sum of its parts. '
        + 'So the narrowing of meaning '
        + 'is the test for whether a joining has produced a compound, '
        + 'and an answer should give the two roots, '
        + 'the meaning of the whole, '
        + 'and say how it differs from the parts together.',
    },
    {
      level: 5,
      ask: 'An English word borrowed into a Ghanaian language '
        + 'changes its vowels and gains a final vowel. '
        + 'Explain why, in linguistic terms.',
      steps: [
        'A borrowing is reshaped by the borrowing language.',
        'Its vowel system differs.',
        'Its permitted syllable shapes differ.',
      ],
      answer: 'Because a borrowed word is fitted '
        + 'to the sound system of the language that borrows it. '
        + 'The vowels change to vowels that language has. '
        + 'Consonant clusters the language does not permit '
        + 'are broken up or dropped. '
        + 'And a final vowel is often added, '
        + 'because many Ghanaian languages prefer syllables '
        + 'ending in a vowel '
        + 'and avoid a word ending in a consonant. '
        + 'These are not corruptions of the English word. '
        + 'They are regular adaptations, '
        + 'and the same changes happen to any word '
        + 'entering the language from outside, '
        + 'which is why they can be predicted.',
    },
  ],

  traps: [
    {
      mistake: 'Trying to find the root in a single word.',
      why: 'Compare a family of related words. '
        + 'What they share is the root and what differs is the affixes.',
    },
    {
      mistake: 'Naming an affix without its job.',
      why: 'The marks go to the function. '
        + 'Say that the prefix marks the plural, '
        + 'and give a second example.',
    },
    {
      mistake: 'Treating reduplication as general emphasis.',
      why: 'It has specific jobs: '
        + 'repeated action with a verb, degree with an adjective, '
        + 'a distributive sense with a noun.',
    },
    {
      mistake: 'Calling a borrowed word a corrupted English word.',
      why: 'It has been fitted to a different vowel system '
        + 'and to different permitted syllable shapes. '
        + 'The changes are regular.',
    },
  ],

  extension:
    'Noun classes are the deepest fact about word formation '
    + 'in many African languages. '
    + 'Some Ghanaian languages show them more clearly than others. '
    + 'A noun class is a set of nouns that take the same prefixes. '
    + 'They also require the same agreement elsewhere in the sentence. '
    + 'In the Bantu languages further south '
    + 'the system is elaborate, '
    + 'with more than a dozen classes. '
    + 'In Ghana the Gur languages keep a system of noun classes '
    + 'marked by suffixes. '
    + 'Dagbani and Gurene are among them. '
    + 'Akan and Ewe have simpler systems. '
    + 'So compare two Ghanaian languages '
    + 'and you may find something interesting. '
    + 'What looks like a plural prefix in one '
    + 'is a class marker in the other. '
    + 'That difference is a real fact '
    + 'about the family each language belongs to.',

  questions: [
    {
      id: 'mo-1',
      ask: 'An affix placed before the root is a:',
      kind: 'choice',
      options: ['prefix', 'suffix', 'root'],
      answer: 'prefix',
      teach: 'A suffix goes after the root.',
      level: 2,
    },
    {
      id: 'mo-2',
      ask: 'The reliable way to find a root is to:',
      kind: 'choice',
      options: [
        'compare several related words',
        'look at the first syllable',
        'remove the last letter',
      ],
      answer: 'compare several related words',
      teach: 'What they share is the root; what differs is the affixes.',
      level: 4,
    },
    {
      id: 'mo-3',
      ask: 'A compound differs from a phrase in that its meaning:',
      kind: 'choice',
      options: [
        'narrows',
        'stays the sum of its parts',
        'becomes plural',
      ],
      answer: 'narrows',
      teach: 'That narrowing is the test for whether a compound has '
        + 'formed.',
      level: 4,
    },
    {
      id: 'mo-4',
      ask: 'Reduplication of a verb most commonly marks:',
      kind: 'choice',
      options: [
        'repeated or continuous action',
        'the past tense',
        'the plural of the subject',
      ],
      answer: 'repeated or continuous action',
      teach: 'With an adjective it marks degree, '
        + 'and with a noun often a distributive sense.',
      level: 4,
    },
    {
      id: 'mo-5',
      ask: 'A borrowed English word gains a final vowel because the '
        + 'language:',
      kind: 'choice',
      options: [
        'prefers syllables ending in a vowel',
        'has no consonants',
        'writes from right to left',
      ],
      answer: 'prefers syllables ending in a vowel',
      teach: 'The word is being fitted to a different sound system, '
        + 'and the changes are regular.',
      level: 5,
    },
  ],
})

/* ── spelling and orthography ──────────────────────────────────────────── */

teach({
  topicId: 'orthography-ghl',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An orthography is the agreed way of writing a language. '
      + 'The Ghanaian orthographies add letters for sounds '
      + 'the Latin alphabet does not cover, '
      + 'and some mark tone. '
      + 'Those letters and marks are part of the spelling. '
      + 'Writing e for the open e, '
      + 'or leaving a tone mark off, '
      + 'is a spelling error and is marked as one.',
    method: [
      'Learn the full set of letters your language uses.',
      'Write the special letters, never their nearest English letter.',
      'Write the tone marks your orthography requires.',
      'Keep word division as the orthography sets it.',
      'Read the work aloud at the end to catch the omissions.',
    ],
  },

  idea:
    'An orthography is the set of agreed conventions '
    + 'for writing a language: '
    + 'which letters are used, '
    + 'how words are divided, '
    + 'and how tone and nasalisation are shown. '
    + 'The Ghanaian orthographies use the Latin alphabet '
    + 'with letters added. '
    + 'The open e and the open o '
    + 'each have their own character '
    + 'in Akan, Ewe, Ga, Dangme and others. '
    + 'Ewe adds further letters, '
    + 'including the ones for its f and v sounds made with the lips '
    + 'and the character for its d sound made with the tongue curled. '
    + 'Nasalisation is shown differently by different languages, '
    + 'in some by a following n '
    + 'and in others by a mark over the vowel. '
    + 'Tone is marked in some orthographies and in some contexts, '
    + 'usually with an acute mark for high and a grave for low, '
    + 'and a learner must know what their own examination requires. '
    + 'Word division is set by the orthography '
    + 'and is not a matter of judgement: '
    + 'a sequence written as one word in Akan '
    + 'may be written as two in Ewe '
    + 'even where the structures are similar. '
    + 'Punctuation largely follows English practice, '
    + 'with the full stop, comma, question mark and quotation marks '
    + 'used as in English. '
    + 'Capital letters are used for names and at the start of a '
    + 'sentence. '
    + 'The current orthographies were standardised '
    + 'by committees working with the Bureau of Ghana Languages '
    + 'and the universities, '
    + 'which is why they are consistent across published material.',

  mechanism:
    'This is the topic where the most marks are lost '
    + 'for the least reason, '
    + 'and the reason is worth naming exactly. '
    + 'A candidate writes a composition in the language, '
    + 'in good idiom, with the right proverbs, '
    + 'and substitutes English letters for the special ones throughout. '
    + 'Every occurrence is a spelling error. '
    + 'A page may contain thirty of them, '
    + 'and the mark for accuracy is gone '
    + 'while the content mark is intact, '
    + 'so the script reads as careless when it is not. '
    + 'The cause is almost always practical: '
    + 'the learner practises on a phone or a keyboard '
    + 'that does not have the characters, '
    + 'types the nearest English letter, '
    + 'and the habit transfers to paper '
    + 'where there was never any obstacle. '
    + 'So the single most useful instruction in this lesson '
    + 'is to write the special letters by hand from the start. '
    + 'A pen has every character the orthography needs. '
    + 'Second, why substitution is a real error '
    + 'and not a technicality. '
    + 'The open e and the ordinary e are different vowels. '
    + 'Words differ by them. '
    + 'So writing one for the other '
    + 'does not produce a badly spelled word; '
    + 'it produces a different word, or none. '
    + 'The same is true of the Ewe letters '
    + 'for the lip made f and v: '
    + 'they are different sounds from the ordinary f and v, '
    + 'and the language distinguishes words by them. '
    + 'An examiner marking an orthography question '
    + 'is checking whether the learner knows '
    + 'that these are letters of the alphabet '
    + 'rather than decorated versions of English ones. '
    + 'Third, tone marking, '
    + 'where the error is in both directions. '
    + 'Some candidates omit tone marks entirely '
    + 'where the paper requires them. '
    + 'Others mark every syllable '
    + 'where the convention marks only ambiguity. '
    + 'Both lose marks. '
    + 'The remedy is to know the convention of your own orthography '
    + 'and of your own examination, '
    + 'and that is a question to put to the teacher '
    + 'at the start of the year rather than to guess in the hall. '
    + 'Fourth, word division, '
    + 'which candidates treat as a matter of taste and is not. '
    + 'Whether a pronoun and a verb are written together or apart, '
    + 'and whether a compound is written as one word, '
    + 'is settled by the orthography, '
    + 'and the standard references give the answer. '
    + 'Dividing by ear produces inconsistency within one script, '
    + 'which an examiner notices, '
    + 'and consistency is itself part of the mark. '
    + 'So if you are unsure, '
    + 'choose one practice and keep it through the whole piece, '
    + 'which at least preserves consistency. '
    + 'Fifth, the point about standardisation '
    + 'that gives the topic its reason. '
    + 'These orthographies were not inherited; '
    + 'they were designed, '
    + 'by committees of speakers and linguists '
    + 'working through the Bureau of Ghana Languages '
    + 'and the universities, '
    + 'and revised as problems appeared. '
    + 'That is why a book printed in Accra '
    + 'and one printed in Kumasi '
    + 'spell the same word the same way. '
    + 'Before standardisation, missionary and colonial writers '
    + 'each used their own system, '
    + 'and the same word appears in several spellings '
    + 'in the nineteenth century material, '
    + 'which is a genuine difficulty for historians '
    + 'reading those sources. '
    + 'So the orthography is an achievement with a purpose, '
    + 'and a question asking why a standard orthography matters '
    + 'is answered by that: '
    + 'it makes printing, teaching and examining possible at all. '
    + 'What has to be written down is every letter and every mark '
    + 'the orthography requires. '
    + 'The practical habit that secures it '
    + 'is to read the finished work aloud slowly, '
    + 'because a missing special letter '
    + 'produces a word you cannot say, '
    + 'and reading aloud finds it.',

  recap:
    'You can write your language and be understood. '
    + 'This asks you to write it to the agreed standard, '
    + 'with every letter and mark the orthography requires.',

  method: [
    'Learn the complete alphabet of your language.',
    'Write each special letter by hand from the start.',
    'Never substitute the nearest English letter.',
    'Show nasalisation the way your orthography shows it.',
    'Mark tone according to your orthography convention.',
    'Follow the orthography on word division.',
    'If unsure about division, be consistent through the whole piece.',
    'Read the finished work aloud to find missing letters.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Why is writing e in place of the open e a spelling error '
        + 'rather than a technicality?',
      steps: [
        'They are different vowels.',
        'Words differ by them.',
      ],
      answer: 'Because they are two different vowels, '
        + 'and the language distinguishes words by the difference. '
        + 'Substituting one for the other '
        + 'does not produce a badly spelled version of the word. '
        + 'It produces a different word, or no word at all. '
        + 'The special letters are letters of the alphabet, '
        + 'not decorated versions of English ones.',
    },
    {
      level: 4,
      ask: 'A candidate writes a good composition '
        + 'and uses English letters throughout '
        + 'in place of the special ones. '
        + 'What happens, and why did it happen?',
      steps: [
        'Every occurrence is a spelling error.',
        'The accuracy mark is lost while content is intact.',
        'The usual cause is practising on a keyboard without the '
          + 'characters.',
      ],
      answer: 'Every substitution is a spelling error, '
        + 'so a page may contain thirty of them '
        + 'and the whole accuracy mark is lost, '
        + 'even though the content mark is intact. '
        + 'The script then reads as careless when it is not. '
        + 'The usual cause is practical: '
        + 'the learner has practised on a phone or keyboard '
        + 'that lacks the characters, '
        + 'has typed the nearest English letter, '
        + 'and has carried the habit onto paper, '
        + 'where a pen has every character needed. '
        + 'The remedy is to write the special letters by hand '
        + 'from the beginning.',
    },
    {
      level: 4,
      ask: 'What should a learner do if unsure '
        + 'whether a particular sequence is written as one word or two?',
      steps: [
        'The orthography settles it, so consult the reference.',
        'Failing that, choose and keep one practice.',
      ],
      answer: 'Consult the standard orthography for the language, '
        + 'since word division is settled by the orthography '
        + 'and not by judgement. '
        + 'Where that is not possible in the moment, '
        + 'choose one practice and keep it through the whole piece, '
        + 'because consistency is itself part of the mark '
        + 'and dividing by ear produces inconsistency '
        + 'within a single script, which an examiner notices.',
    },
    {
      level: 5,
      ask: 'Why does a standard orthography matter? '
        + 'Give a historical example of what happens without one.',
      steps: [
        'It allows printing, teaching and examining.',
        'Before standardisation each writer used his own system.',
        'The same word appears in several spellings in old sources.',
      ],
      answer: 'Because without an agreed standard '
        + 'the same word is spelled differently by different writers, '
        + 'so books cannot be shared between schools, '
        + 'dictionaries cannot be compiled, '
        + 'and an examination cannot mark spelling at all. '
        + 'Before standardisation '
        + 'missionary and colonial writers each used their own system, '
        + 'and the same word appears in several spellings '
        + 'in nineteenth century material, '
        + 'which is a real difficulty for historians reading it. '
        + 'The present orthographies were designed by committees '
        + 'of speakers and linguists '
        + 'working through the Bureau of Ghana Languages '
        + 'and the universities, '
        + 'which is why a book printed in Accra '
        + 'and one printed in Kumasi '
        + 'now spell the same word the same way.',
    },
  ],

  traps: [
    {
      mistake: 'Substituting an English letter for a special one.',
      why: 'They are different sounds and the language distinguishes '
        + 'words by them. '
        + 'Every substitution is a spelling error.',
    },
    {
      mistake: 'Carrying keyboard habits onto paper.',
      why: 'A pen has every character the orthography needs. '
        + 'Write the special letters by hand from the start.',
    },
    {
      mistake: 'Marking tone on every syllable where the convention '
        + 'does not.',
      why: 'Over marking and under marking both lose marks. '
        + 'Know the convention your examination uses.',
    },
    {
      mistake: 'Dividing words by ear.',
      why: 'Word division is set by the orthography. '
        + 'If unsure, at least be consistent through the whole piece.',
    },
  ],

  extension:
    'Keyboards are the practical obstacle today, '
    + 'and the problem can be solved. '
    + 'Most phones and computers let you add a keyboard layout. '
    + 'Layouts exist for the Ghanaian languages. '
    + 'They put the special letters where they can be typed directly. '
    + 'Unicode gives a number to every character, '
    + 'and it has included the Ghanaian letters for years. '
    + 'So the characters exist. '
    + 'The only difficulty is reaching them. '
    + 'Install the right layout '
    + 'and the cause of the commonest spelling error is gone. '
    + 'You can then practise typing as well as writing '
    + 'without picking up the habit of substitution.',

  questions: [
    {
      id: 'or-1',
      ask: 'An orthography is:',
      kind: 'choice',
      options: [
        'the agreed way of writing a language',
        'the sound system of a language',
        'a list of proverbs',
      ],
      answer: 'the agreed way of writing a language',
      teach: 'It covers the letters, the word division, '
        + 'and the marking of tone and nasalisation.',
      level: 3,
    },
    {
      id: 'or-2',
      ask: 'Writing e for the open e is:',
      kind: 'choice',
      options: [
        'a spelling error, because they are different vowels',
        'acceptable if the keyboard lacks the letter',
        'a matter of personal style',
      ],
      answer: 'a spelling error, because they are different vowels',
      teach: 'Words differ by the distinction, '
        + 'so the substitution writes a different word.',
      level: 4,
    },
    {
      id: 'or-3',
      ask: 'The usual cause of substituting English letters is:',
      kind: 'choice',
      options: [
        'practising on a keyboard that lacks the characters',
        'not knowing the language',
        'writing too quickly',
      ],
      answer: 'practising on a keyboard that lacks the characters',
      teach: 'The habit then transfers to paper, '
        + 'where a pen has every character needed.',
      level: 4,
    },
    {
      id: 'or-4',
      ask: 'Word division in a Ghanaian language is settled by:',
      kind: 'choice',
      options: ['the orthography', 'the writer ear', 'English practice'],
      answer: 'the orthography',
      teach: 'Dividing by ear produces inconsistency, '
        + 'and consistency is itself part of the mark.',
      level: 4,
    },
    {
      id: 'or-5',
      ask: 'A standard orthography makes possible:',
      kind: 'choice',
      options: [
        'shared books, dictionaries and marked examinations',
        'a larger vocabulary',
        'more tone distinctions',
      ],
      answer: 'shared books, dictionaries and marked examinations',
      teach: 'Before standardisation the same word '
        + 'appeared in several spellings, '
        + 'which still troubles historians reading old sources.',
      level: 5,
    },
  ],
})

/* ── proverbs and idioms ───────────────────────────────────────────────── */

teach({
  topicId: 'proverbs-shs-ghl',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A proverb is a short saying carrying a general truth '
      + 'in a concrete image. '
      + 'Using it well requires three things: '
      + 'the literal meaning, '
      + 'the general meaning, '
      + 'and the occasion on which it applies. '
      + 'An idiom is a fixed expression '
      + 'whose meaning cannot be worked out from its words. '
      + 'A proverb used on the wrong occasion is an error, '
      + 'however correctly it is quoted.',
    method: [
      'Give the proverb exactly as the language has it.',
      'State the literal picture.',
      'State the general truth it carries.',
      'Name the occasion on which it is properly used.',
      'Show it applying to the case in front of you.',
    ],
  },

  idea:
    'A proverb is a short traditional saying '
    + 'that carries a general truth '
    + 'through a concrete image, '
    + 'usually drawn from farming, hunting, the household, '
    + 'the animal world or the chief court. '
    + 'In the Ghanaian languages proverbs are not ornament. '
    + 'They are a recognised way of arguing, '
    + 'and a speaker who can place one accurately '
    + 'is heard as having authority. '
    + 'Analysing a proverb has three layers. '
    + 'The literal layer is the picture it paints. '
    + 'The general layer is the truth that picture carries. '
    + 'And the occasion is the kind of situation '
    + 'in which the proverb is properly used, '
    + 'which is narrower than the general meaning. '
    + 'An idiom is a fixed expression '
    + 'whose meaning cannot be derived from its words, '
    + 'so it must be learned whole, '
    + 'and translating it word by word into English '
    + 'produces nonsense. '
    + 'A metaphor in ordinary speech '
    + 'differs from a proverb in that it is invented for the moment, '
    + 'while a proverb is inherited and recognised. '
    + 'Proverbs are also carried in other forms: '
    + 'in drum and horn texts, '
    + 'in the names of stools, '
    + 'and in adinkra symbols, '
    + 'each of which stands for a saying.',

  mechanism:
    'The error that separates a weak answer from a strong one '
    + 'is explaining a proverb '
    + 'without naming the occasion it belongs to. '
    + 'A candidate gives the literal picture, '
    + 'gives a general moral, '
    + 'and stops, '
    + 'and the answer is incomplete '
    + 'because a proverb is a tool for a situation. '
    + 'Consider a proverb about one person finger '
    + 'not being able to lift a thing. '
    + 'The literal picture is clear. '
    + 'The general truth is that cooperation is needed. '
    + 'But the occasion is narrower: '
    + 'the proverb is used to urge somebody '
    + 'who is attempting a task alone to accept help, '
    + 'or to justify asking for it. '
    + 'It would not be used to praise a group that has succeeded, '
    + 'though cooperation is its subject, '
    + 'because that is a different occasion. '
    + 'A candidate who writes the occasion '
    + 'has shown they know how the proverb is used '
    + 'and not merely what it means, '
    + 'and the occasion is a separate mark. '
    + 'The second point is the hardest one '
    + 'and the most rewarding. '
    + 'A proverb is an argument, and arguments can be met. '
    + 'In Ghanaian languages there are proverb pairs '
    + 'that point in opposite directions, '
    + 'and a skilled speaker answers one with another. '
    + 'One proverb urges patience; another warns '
    + 'that the person who waits too long finds the thing gone. '
    + 'Neither is false. '
    + 'They fit different occasions, '
    + 'and the skill is knowing which occasion you are in. '
    + 'So proverbs do not function as rules '
    + 'that can be applied mechanically. '
    + 'They function as moves in an argument, '
    + 'and a learner who understands that '
    + 'can answer the examination question '
    + 'about using a proverb in argument, '
    + 'which is otherwise answered badly. '
    + 'Third, the translation trap, '
    + 'which matters because the paper sometimes asks for an English '
    + 'gloss. '
    + 'A proverb translated word for word into English '
    + 'usually loses the point, '
    + 'because the image belongs to a setting '
    + 'an English reader does not share '
    + 'and because the rhythm and any play on words disappear. '
    + 'So a translation should have two parts: '
    + 'the literal rendering, '
    + 'and then the English proverb or expression '
    + 'that occupies the same place in use. '
    + 'Giving only the literal rendering '
    + 'is an incomplete answer, '
    + 'and giving only an English equivalent '
    + 'hides whether the candidate understood the original image. '
    + 'Fourth, idioms, '
    + 'which candidates confuse with proverbs. '
    + 'The test is whether the expression makes a claim. '
    + 'A proverb asserts something general and can be agreed with '
    + 'or disputed. '
    + 'An idiom merely means something, '
    + 'as an English speaker who says somebody has cold feet '
    + 'is not asserting a truth about feet or about courage in general. '
    + 'So in an answer, keep them apart: '
    + 'a proverb is quoted to support a point, '
    + 'and an idiom is simply a way of saying a thing. '
    + 'Fifth, the forms proverbs are carried in, '
    + 'which is examined in some papers and is often unknown. '
    + 'A drum text may quote a proverb '
    + 'that everyone present recognises from the rhythm alone. '
    + 'An adinkra symbol stands for a saying, '
    + 'so a cloth can carry an argument '
    + 'that a knowledgeable person reads. '
    + 'A stool name may be a proverb. '
    + 'Mentioning one of these in an answer '
    + 'shows a candidate understands '
    + 'that the proverb is a form of public speech '
    + 'with several media, '
    + 'and that is a strong closing point. '
    + 'What has to be written down, '
    + 'for every proverb in an answer, '
    + 'is the three layers and then the application: '
    + 'the picture, the truth, the occasion, '
    + 'and how it fits the case being discussed.',

  recap:
    'You have heard proverbs used and know some by heart. '
    + 'This asks you to take one apart: '
    + 'what it pictures, what it claims, '
    + 'and when it may properly be said.',

  method: [
    'Quote the proverb exactly as the language has it.',
    'Give the literal picture.',
    'Give the general truth it carries.',
    'Name the occasion on which it is properly used.',
    'Apply it to the case you are discussing.',
    'For a translation, give the literal rendering '
      + 'and then an English expression used in the same place.',
    'Keep proverbs and idioms apart: '
      + 'a proverb makes a claim, an idiom only means something.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What three things must an explanation of a proverb contain?',
      steps: [
        'The picture, the truth, and the situation.',
      ],
      answer: 'The literal meaning, which is the picture it paints; '
        + 'the general meaning, which is the truth that picture carries; '
        + 'and the occasion, '
        + 'which is the kind of situation '
        + 'in which the proverb is properly used. '
        + 'An answer that gives the first two and stops '
        + 'has explained what the proverb means '
        + 'without showing that it knows how it is used.',
    },
    {
      level: 4,
      ask: 'Why is the occasion narrower than the general meaning? '
        + 'Illustrate.',
      steps: [
        'A general truth could apply in many situations.',
        'A proverb is used in particular ones.',
      ],
      answer: 'Because a proverb is a tool for a situation '
        + 'rather than a statement of a principle. '
        + 'Take a proverb saying that one finger cannot lift a thing. '
        + 'Its general meaning is that cooperation is necessary. '
        + 'Its occasion is narrower: '
        + 'it is used to urge somebody attempting a task alone '
        + 'to accept help, or to justify asking for it. '
        + 'It would not be used to praise a group that had succeeded, '
        + 'even though cooperation is its subject, '
        + 'because that is a different occasion. '
        + 'The occasion carries a separate mark.',
    },
    {
      level: 4,
      ask: 'How should a proverb be translated into English?',
      steps: [
        'Word for word loses the point.',
        'An equivalent alone hides whether the image was understood.',
        'So give both.',
      ],
      answer: 'In two parts. '
        + 'First the literal rendering, '
        + 'which shows that the image has been understood. '
        + 'Then an English proverb or expression '
        + 'that occupies the same place in use, '
        + 'which shows the function has been understood. '
        + 'A word for word translation alone '
        + 'usually loses the point, '
        + 'because the image belongs to a setting '
        + 'the English reader does not share '
        + 'and because the rhythm and any play on words disappear. '
        + 'An English equivalent alone '
        + 'hides whether the original was understood at all.',
    },
    {
      level: 5,
      ask: 'Two proverbs of the same language point in opposite '
        + 'directions, '
        + 'one urging patience and one warning against delay. '
        + 'Is one of them wrong? '
        + 'Explain what this shows about proverbs.',
      steps: [
        'Neither is false.',
        'They belong to different occasions.',
        'So a proverb is a move in an argument, not a rule.',
      ],
      answer: 'Neither is wrong. '
        + 'They belong to different occasions, '
        + 'and the skill lies in knowing which occasion you are in. '
        + 'A proverb is not a rule to be applied mechanically. '
        + 'It is a move in an argument, '
        + 'and a move can be answered by another move, '
        + 'which is exactly what a skilled speaker does '
        + 'when he replies to one proverb with its opposite. '
        + 'This is why the examination asks '
        + 'about using a proverb in argument '
        + 'rather than about reciting proverbs: '
        + 'the ability being tested '
        + 'is judgement about the situation, '
        + 'not memory.',
    },
  ],

  traps: [
    {
      mistake: 'Explaining a proverb without naming its occasion.',
      why: 'A proverb is a tool for a situation. '
        + 'The occasion carries a separate mark.',
    },
    {
      mistake: 'Treating a proverb as a rule that always applies.',
      why: 'Proverbs come in opposing pairs. '
        + 'The skill is judging which occasion you are in.',
    },
    {
      mistake: 'Translating a proverb word for word only.',
      why: 'Give the literal rendering and then an English expression '
        + 'used in the same place. '
        + 'Either alone is incomplete.',
    },
    {
      mistake: 'Treating an idiom as a proverb.',
      why: 'A proverb makes a general claim that can be disputed. '
        + 'An idiom only means something.',
    },
  ],

  extension:
    'Adinkra symbols carry proverbs, '
    + 'and that makes cloth a medium of argument. '
    + 'Each symbol stands for a saying, '
    + 'so a person who wears a particular cloth to a funeral '
    + 'or to a court is making a statement '
    + 'that those present can read. '
    + 'The same is true of a drum text: '
    + 'the rhythm quotes a proverb '
    + 'and the listeners recognise it without words. '
    + 'What this shows is that in Ghanaian public speech '
    + 'a proverb is not confined to speech. '
    + 'It can be worn, drummed, or carried in the name of a stool, '
    + 'and in each form it does the same work: '
    + 'it makes a claim indirectly, '
    + 'which allows something to be said '
    + 'that could not be said plainly '
    + 'without giving offence.',

  questions: [
    {
      id: 'pv-1',
      ask: 'A full explanation of a proverb includes the literal '
        + 'meaning, '
        + 'the general meaning and:',
      kind: 'choice',
      options: [
        'the occasion on which it is used',
        'the name of the person who first said it',
        'its English translation only',
      ],
      answer: 'the occasion on which it is used',
      teach: 'A proverb is a tool for a situation, '
        + 'and the occasion is a separate mark.',
      level: 3,
    },
    {
      id: 'pv-2',
      ask: 'An idiom differs from a proverb in that an idiom:',
      kind: 'choice',
      options: [
        'does not make a general claim',
        'is always shorter',
        'cannot be translated',
      ],
      answer: 'does not make a general claim',
      teach: 'A proverb asserts something that can be agreed with '
        + 'or disputed. '
        + 'An idiom only means something.',
      level: 4,
    },
    {
      id: 'pv-3',
      ask: 'Two proverbs pointing in opposite directions show that a '
        + 'proverb is:',
      kind: 'choice',
      options: [
        'a move in an argument rather than a rule',
        'unreliable',
        'badly remembered',
      ],
      answer: 'a move in an argument rather than a rule',
      teach: 'Each fits a different occasion, '
        + 'and the skill is judging which occasion you are in.',
      level: 5,
    },
    {
      id: 'pv-4',
      ask: 'A translation of a proverb should give the literal rendering '
        + 'and:',
      kind: 'choice',
      options: [
        'an English expression used in the same place',
        'nothing further',
        'the history of the saying',
      ],
      answer: 'an English expression used in the same place',
      teach: 'The literal shows the image was understood; '
        + 'the equivalent shows the function was.',
      level: 4,
    },
    {
      id: 'pv-5',
      ask: 'An adinkra symbol stands for:',
      kind: 'choice',
      options: ['a saying', 'a letter', 'a family name'],
      answer: 'a saying',
      teach: 'So cloth can carry an argument '
        + 'that a knowledgeable person reads.',
      level: 4,
    },
  ],
})

/* ── appellations and praise poetry ────────────────────────────────────── */

teach({
  topicId: 'appellation-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An appellation is a praise name or a string of praise names '
      + 'addressed to a person, a stool or a deity. '
      + 'Each image inside it makes a claim: '
      + 'about descent, about an achievement, '
      + 'about a quality, or about a relation to others. '
      + 'Performing one is part of public occasion. '
      + 'Explaining one means unpacking each image '
      + 'into the claim it carries.',
    method: [
      'Say who or what the appellation addresses.',
      'Take each image in turn.',
      'Say what the image pictures.',
      'Say what it claims about the person addressed.',
      'Say on what occasion the appellation is performed.',
    ],
  },

  idea:
    'An appellation is a praise name, '
    + 'or a string of them, '
    + 'addressed to a person, a stool, a clan or a deity. '
    + 'In Akan the form is called abodin or mmrane, '
    + 'and comparable forms exist in Ewe, Ga, Dagbani and elsewhere. '
    + 'Appellations are performed at durbars and festivals, '
    + 'at funerals, '
    + 'when a chief enters or is addressed, '
    + 'and by drummers and horn blowers '
    + 'whose instruments speak the text. '
    + 'Praise poetry is the wider form '
    + 'in which appellations are embedded: '
    + 'a longer composition reciting the deeds '
    + 'of a lineage or a ruler. '
    + 'The images used are drawn from a recognised stock. '
    + 'An animal of strength or courage. '
    + 'A natural force that cannot be resisted. '
    + 'A tree that shelters. '
    + 'A relation of descent, naming an ancestor. '
    + 'And reference to a known deed, '
    + 'such as a battle or a founding. '
    + 'Each image is a claim '
    + 'rather than a decoration, '
    + 'and the claims are of particular kinds: '
    + 'legitimacy of descent, '
    + 'capacity to protect, '
    + 'power over rivals, '
    + 'and generosity. '
    + 'An appellation is addressed, not described: '
    + 'it speaks to the person '
    + 'and is performed in their presence or at their shrine.',

  mechanism:
    'The examination asks for the claim inside each image, '
    + 'and that phrasing is the whole instruction. '
    + 'An appellation is not a list of compliments. '
    + 'It is a set of assertions about the person addressed, '
    + 'and each image carries one. '
    + 'So the method is to take the images one at a time '
    + 'and convert each into a plain statement. '
    + 'Work it through on the kinds of image. '
    + 'An image of a large animal that other animals avoid '
    + 'is not saying the chief resembles that animal. '
    + 'It is claiming that he cannot be challenged, '
    + 'which is a claim about his standing '
    + 'relative to other chiefs. '
    + 'An image of a great tree '
    + 'claims that he shelters those who come to him, '
    + 'which is a claim about obligation and protection '
    + 'rather than about size. '
    + 'An image naming an ancestor '
    + 'claims legitimacy of descent, '
    + 'which is the most important claim of all '
    + 'in a system where the right to a stool comes from a lineage. '
    + 'An image of a flood or a storm '
    + 'claims that opposition is pointless. '
    + 'And an image of an inexhaustible supply '
    + 'claims generosity, '
    + 'which in a chief is an obligation and not merely a virtue. '
    + 'A candidate who can do this conversion '
    + 'for four or five images '
    + 'has answered the question completely. '
    + 'The second point is that the claims have a function '
    + 'beyond praise, '
    + 'and saying so lifts an answer into the top band. '
    + 'An appellation performed at a durbar, '
    + 'in front of other chiefs and the public, '
    + 'is stating publicly '
    + 'what this stool holds and from whom it descends. '
    + 'That is political work. '
    + 'The audience includes people '
    + 'who might contest the descent or the standing, '
    + 'and the performance asserts it before them. '
    + 'So an appellation belongs with the oral traditions '
    + 'of the history syllabus: '
    + 'it records and it justifies at the same time, '
    + 'and a learner who notices that '
    + 'is connecting two subjects correctly. '
    + 'Third, who performs and why that matters. '
    + 'An appellation is usually not spoken by the chief '
    + 'about himself. '
    + 'It is performed by a linguist, a drummer, a horn blower, '
    + 'or by singers, '
    + 'which means the claim is made by somebody else '
    + 'and so counts as recognition '
    + 'rather than as boasting. '
    + 'That is a point of real substance: '
    + 'the same words said by the chief himself '
    + 'would be improper, '
    + 'and the institution of the performer '
    + 'is what makes the praise sayable. '
    + 'Fourth, the drum and horn texts, '
    + 'which candidates often do not know carry words at all. '
    + 'A talking drum reproduces the tone pattern of speech, '
    + 'and because the Ghanaian languages are tone languages '
    + 'a listener who knows the text '
    + 'can recover the words from the drumming. '
    + 'So an appellation can be performed without a voice. '
    + 'The tone lesson in this file '
    + 'is what makes that possible, '
    + 'and the connection is worth stating: '
    + 'drum language works because the language is a tone language. '
    + 'Fifth, the practical part. '
    + 'The syllabus asks a learner to perform an appellation. '
    + 'That means from memory, aloud, '
    + 'with the right delivery, '
    + 'which is loud, measured and addressed outward, '
    + 'and not read quietly from a page. '
    + 'The appellation to prepare '
    + 'is the one of the learner own area or clan, '
    + 'learned from somebody who performs it, '
    + 'because that is both easier to learn '
    + 'and more defensible when the meaning is questioned. '
    + 'What has to be written down, in the written paper, '
    + 'is the image and then the claim, '
    + 'one pair per line. '
    + 'A translation of the appellation '
    + 'without the claims '
    + 'answers a comprehension question, '
    + 'not the question asked.',

  recap:
    'You have heard a chief addressed at a durbar '
    + 'and know that praise names are used. '
    + 'This asks what each praise name actually asserts, '
    + 'and why the assertion is made in public.',

  method: [
    'Name who or what the appellation addresses.',
    'List the images it uses.',
    'For each image, say what it pictures.',
    'Then say what it claims about the person addressed.',
    'Sort the claims: descent, protection, power, generosity.',
    'Name the occasion of performance.',
    'Name who performs it, and say why it is not the chief himself.',
    'To perform, learn it from somebody who performs it, '
      + 'and deliver it aloud and outward.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is an appellation, '
        + 'and on what occasions is one performed?',
      steps: [
        'A praise name addressed to somebody.',
        'Performed at public occasions.',
      ],
      answer: 'An appellation is a praise name, '
        + 'or a string of praise names, '
        + 'addressed to a person, a stool, a clan or a deity. '
        + 'In Akan it is called abodin or mmrane, '
        + 'and similar forms exist in Ewe, Ga and Dagbani. '
        + 'It is performed at durbars and festivals, '
        + 'at funerals, '
        + 'when a chief enters or is addressed, '
        + 'and by drummers and horn blowers '
        + 'whose instruments speak the text.',
    },
    {
      level: 4,
      ask: 'An appellation compares a chief to a great tree. '
        + 'What is the claim?',
      steps: [
        'The image is not about size.',
        'A tree shelters those who come to it.',
        'So the claim is about protection and obligation.',
      ],
      answer: 'That he shelters those who come to him. '
        + 'The image is not a comparison of size '
        + 'but a claim about protection, '
        + 'and in a chief protection is an obligation '
        + 'and not merely a quality, '
        + 'so the appellation is also reminding him of a duty '
        + 'while praising him for it. '
        + 'The method is to convert each image into a plain statement '
        + 'about the person addressed.',
    },
    {
      level: 4,
      ask: 'Why is an appellation performed by a linguist or a drummer '
        + 'rather than by the chief himself?',
      steps: [
        'Self praise would be improper.',
        'Performance by another makes it recognition.',
      ],
      answer: 'Because the same words said by the chief about himself '
        + 'would be boasting and improper. '
        + 'Performed by a linguist, a drummer, a horn blower or singers, '
        + 'the claim is made by somebody else, '
        + 'so it counts as recognition rather than self assertion. '
        + 'The institution of the performer '
        + 'is therefore what makes the praise sayable at all, '
        + 'which is a point of substance '
        + 'and not merely a matter of custom.',
    },
    {
      level: 5,
      ask: 'How can an appellation be performed on a drum, '
        + 'with no words spoken?',
      steps: [
        'The language is a tone language.',
        'A talking drum reproduces the tone pattern.',
        'A listener who knows the text recovers the words.',
      ],
      answer: 'Because the language is a tone language. '
        + 'A talking drum can reproduce the pattern of high and low '
        + 'pitch, '
        + 'and the rhythm, of a spoken text. '
        + 'Since in a tone language '
        + 'the pitch is part of the word, '
        + 'the drumming carries much of the information '
        + 'that the voice would carry, '
        + 'and a listener who knows the text '
        + 'can recover the words from it. '
        + 'So drum language is possible '
        + 'precisely because the language uses tone lexically, '
        + 'which connects this topic '
        + 'directly to the phonology of the language.',
    },
  ],

  traps: [
    {
      mistake: 'Translating an appellation without stating the claims.',
      why: 'The question asks for the claim inside each image. '
        + 'Give the image and then the plain statement it makes.',
    },
    {
      mistake: 'Treating the images as decoration.',
      why: 'Each asserts something: '
        + 'descent, protection, power over rivals, or generosity.',
    },
    {
      mistake: 'Supposing the chief performs his own appellation.',
      why: 'It is performed by a linguist, drummer or singer, '
        + 'which makes it recognition rather than boasting.',
    },
    {
      mistake: 'Reading an appellation quietly from a page in a '
        + 'performance test.',
      why: 'It is addressed outward, loud and measured, '
        + 'and performed from memory.',
    },
  ],

  extension:
    'Praise poetry is among the oldest recorded African literature. '
    + 'It also has a political history. '
    + 'An appellation asserts descent and standing. '
    + 'So the text changes when the claims change. '
    + 'A stool that absorbs another '
    + 'takes on images referring to the absorbed one. '
    + 'A disputed succession '
    + 'can produce rival appellations for one stool. '
    + 'The text is therefore evidence. '
    + 'Historians read it as they read any oral tradition, '
    + 'asking who performs it and what it secures. '
    + 'This is why collecting appellations is urgent work. '
    + 'A performer who dies without an apprentice '
    + 'takes the text with him, '
    + 'and a record of a lineage kept for centuries '
    + 'is lost in one generation.',

  questions: [
    {
      id: 'ap-1',
      ask: 'In Akan, an appellation is called:',
      kind: 'choice',
      options: ['abodin or mmrane', 'ebe', 'anansesem'],
      answer: 'abodin or mmrane',
      teach: 'Ebe is a proverb and anansesem a folktale.',
      level: 3,
    },
    {
      id: 'ap-2',
      ask: 'Each image in an appellation carries:',
      kind: 'choice',
      options: [
        'a claim about the person addressed',
        'a rhyme',
        'a historical date',
      ],
      answer: 'a claim about the person addressed',
      teach: 'Descent, protection, power over rivals or generosity. '
        + 'Convert each image into a plain statement.',
      level: 4,
    },
    {
      id: 'ap-3',
      ask: 'An appellation is performed by a linguist or drummer because:',
      kind: 'choice',
      options: [
        'the same words from the chief would be boasting',
        'the chief cannot remember them',
        'only they know the language',
      ],
      answer: 'the same words from the chief would be boasting',
      teach: 'Performance by another makes the claim recognition '
        + 'rather than self assertion.',
      level: 4,
    },
    {
      id: 'ap-4',
      ask: 'Drum language is possible because the language is:',
      kind: 'choice',
      options: [
        'a tone language',
        'written in the Latin alphabet',
        'spoken slowly',
      ],
      answer: 'a tone language',
      teach: 'The drum reproduces the pitch pattern, '
        + 'and in a tone language the pitch is part of the word.',
      level: 5,
    },
    {
      id: 'ap-5',
      ask: 'An image naming an ancestor claims:',
      kind: 'choice',
      options: [
        'legitimacy of descent',
        'generosity',
        'military strength',
      ],
      answer: 'legitimacy of descent',
      teach: 'It is the most important claim of all '
        + 'where the right to a stool comes from a lineage.',
      level: 4,
    },
  ],
})
