/**
 * Stored lessons for Basic 2 Ghanaian Language.
 *
 * ── Why this lesson names letters but not one language ─────────────────────
 *
 * Which Ghanaian language a child learns depends on where their school is, and
 * the app does not know. So the lesson teaches what is true across the written
 * languages of Ghana: the extra letters, one sound to a letter, and that the
 * pitch of the voice can change a word. The particular letters a child meets
 * are named as examples with the language they come from, so nothing here is
 * asserted of a language it is not true of, and the teacher fills in which set
 * is theirs.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── the sounds and letters of the language ───────────────────────────────── */

teach({
  topicId: 'sounds-ghl',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Your language is written with the same letters as English and a few more '
    + 'besides, because it has sounds English does not have. Two of those '
    + 'extra letters turn up in many Ghanaian languages: ɛ, which is the sound '
    + 'in the English word "bed", and ɔ, which is the sound in "pot". They are '
    + 'letters in their own right, not a decorated e and o.',

  mechanism:
    'Here is the part that makes your language easier to read than English. In '
    + 'these spellings, one letter means one sound, every time. English writes '
    + 'the same letter "a" for the sound in "cat", in "car" and in "cake", so '
    + 'an English reader has to guess and check. Your language does not ask you '
    + 'to guess. If you know the sound each letter makes, you can read a word '
    + 'you have never seen before and say it correctly. That is exactly why the '
    + 'extra letters exist: without ɛ, the word would have to be spelled with '
    + 'an e and you would be back to guessing which e it was.',

  recap:
    'Blending is running sounds together into a word. You take the sound of '
    + 'each letter in turn and do not stop between them. It works the same way '
    + 'here, with a few more sounds to know.',

  method: [
    'Learn the extra letters of your own language first, by their sound.',
    'Say each sound on its own until it is steady.',
    'Then blend: say the sounds of the word in order, without stopping.',
    'Watch for pairs of letters that make one sound together. In Akan, ky, gy '
      + 'and ny each work as one.',
    'Listen to how the word is said. In many Ghanaian languages the pitch of '
      + 'your voice changes which word it is, and the letters do not show that.',
    'Say the word to somebody who speaks the language and let them correct you.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What sound does the letter ɛ make?',
      steps: [
        'It is not an e with a mark on it. It is its own letter.',
        'It says the sound in the English word "bed".',
      ],
      answer: 'The vowel sound in "bed".',
    },
    {
      level: 2,
      ask: 'Why does your language need a letter ɔ as well as the letter o?',
      steps: [
        'They are two different sounds, as in "pot" and in "go".',
        'If both were written o, you could not tell which sound was meant.',
        'A separate letter for each sound means no guessing.',
      ],
      answer: 'Because they are two sounds, and this spelling gives one letter '
        + 'to each sound so that any word can be read correctly on sight.',
    },
    {
      level: 3,
      ask: 'In Ewe the letters ɖ, ƒ and ŋ are used. What does that tell you '
        + 'about the sounds of Ewe?',
      steps: [
        'A language only adds a letter when it has a sound to spell.',
        'So Ewe has sounds that neither English nor some of its neighbours '
          + 'have.',
        'Each new letter is a new sound to learn and then to blend like the '
          + 'rest.',
      ],
      answer: 'That Ewe has those three sounds and needed letters for them. '
        + 'Each one is learned by its sound and then blended as usual.',
    },
  ],

  traps: [
    {
      mistake: 'Reading ɛ as an ordinary e and ɔ as an ordinary o.',
      why: 'They are different letters for different sounds, and swapping them '
        + 'can give you another word entirely. Learn the sound, not the shape '
        + 'it resembles.',
    },
    {
      mistake: 'Sounding out ky, gy or ny one letter at a time.',
      why: 'In Akan those two letters make a single sound together. Split them '
        + 'and the word comes out wrong.',
    },
    {
      mistake: 'Expecting the spelling to tell you the pitch.',
      why: 'The letters show the sounds and not the tune. Two words can be '
        + 'spelled the same and mean different things depending on the pitch, '
        + 'so you have to hear them said.',
    },
  ],

  extension:
    'The extra letters are not a Ghanaian oddity. They come from a set agreed '
    + 'for writing down sounds in any language in the world, which is why the '
    + 'same ɛ turns up in books about languages from other continents '
    + 'altogether.',

  figure: {
    alt: 'A table of letters used in Ghanaian languages that English does not '
      + 'have, with the sound each one makes and languages that use it',
    svg: '<svg viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="30" y="34" font-size="17" font-weight="700" fill="currentColor">'
      + 'Letters English does not have</text>'
      + '<g stroke="currentColor" stroke-width="1" opacity="0.35">'
      + '<path d="M30 50h580M30 96h580M30 148h580M30 200h580M30 252h580M30 304h580M30 350h580"/>'
      + '<path d="M30 50v300M130 50v300M330 50v300M610 50v300"/>'
      + '</g>'
      + '<g font-size="15" font-weight="700" fill="#0f8a4d">'
      + '<text x="44" y="80">Letter</text><text x="144" y="80">Sounds like</text>'
      + '<text x="344" y="80">Used in</text>'
      + '</g>'
      + '<g font-size="26" fill="currentColor">'
      + '<text x="52" y="132">ɛ</text><text x="52" y="184">ɔ</text>'
      + '<text x="52" y="236">ŋ</text><text x="52" y="288">ɖ</text>'
      + '<text x="52" y="338">ƒ</text>'
      + '</g>'
      + '<g font-size="15" fill="currentColor">'
      + '<text x="144" y="130">the e in "bed"</text>'
      + '<text x="144" y="182">the o in "pot"</text>'
      + '<text x="144" y="234">the ng in "song"</text>'
      + '<text x="144" y="286">a d said further back</text>'
      + '<text x="144" y="336">an f blown through the lips</text>'
      + '<text x="344" y="130">Akan, Ewe, Ga, Dagbani</text>'
      + '<text x="344" y="182">Akan, Ewe, Ga, Dagbani</text>'
      + '<text x="344" y="234">Ewe, Ga, Dagbani</text>'
      + '<text x="344" y="286">Ewe</text>'
      + '<text x="344" y="336">Ewe</text>'
      + '</g>'
      + '</svg>',
  },

  questions: [
    {
      id: 'sg-1',
      ask: 'Is ɛ an e with a mark on it, or a letter of its own?',
      kind: 'choice',
      options: ['A letter of its own', 'An e with a mark on it'],
      answer: 'A letter of its own',
      teach: 'It has its own sound, the one in "bed". Treating it as an e '
        + 'makes you read a different word.',
      level: 1,
    },
    {
      id: 'sg-2',
      ask: 'Why can you read a new word in your language without guessing?',
      kind: 'choice',
      options: [
        'Because the words are shorter',
        'Because one letter means one sound every time',
        'Because you already know every word',
      ],
      answer: 'Because one letter means one sound every time',
      teach: 'English writes one letter for several sounds, so a reader has to '
        + 'guess and check. These spellings give each sound its own letter, so '
        + 'the word says itself.',
      level: 2,
    },
    {
      id: 'sg-3',
      ask: 'Two words are spelled exactly the same but mean different things. '
        + 'What might be different about them?',
      kind: 'choice',
      options: [
        'The pitch of the voice when you say them',
        'Nothing, one of them is wrong',
        'The number of letters',
      ],
      answer: 'The pitch of the voice when you say them',
      teach: 'In many Ghanaian languages pitch carries meaning, and the '
        + 'letters do not show it. That is why these words have to be heard '
        + 'said and not only read.',
      level: 3,
    },
  ],
})
