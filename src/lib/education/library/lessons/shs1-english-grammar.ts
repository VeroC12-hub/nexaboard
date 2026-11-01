/**
 * Stored lessons for SHS 1 English Language: structure, concord, word
 * formation and punctuation.
 *
 * Written at about grade 9 to 10, which is inside the SHS expectation of
 * 10 to 12.
 *
 * ── Why these four belong together ─────────────────────────────────────────
 *
 * They are the four places where a WASSCE script loses marks for reasons
 * that have nothing to do with having something to say. A good idea in a
 * sentence that runs on, a careful argument with the verb agreeing with the
 * wrong noun, the right meaning carried by a word in the wrong form, and a
 * clear thought made unreadable by a missing comma. None of these is a
 * matter of taste, and all of them are rule governed, which is why they can
 * be taught rather than merely corrected.
 *
 * The thread running through all four is the subject. `sentence-structure`
 * is about what a clause needs to stand alone, `concord-shs` is about
 * finding the real subject under whatever sits between it and the verb,
 * `word-formation` is about keeping a word's grammatical job straight, and
 * `punctuation-shs` is largely about marking where one clause ends and the
 * next begins. A learner who can find the subject and the main verb of any
 * sentence has most of this topic.
 *
 * The register stays plain on purpose. These lessons teach the forms a
 * WASSCE paper tests, with Ghanaian classroom and market examples, and they
 * name Ghanaian spoken habits where those habits are what the written
 * paper penalises.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── sentence structure ─────────────────────────────────────────────────── */

teach({
  topicId: 'sentence-structure-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A clause has a subject and a verb. '
      + 'A main clause can stand alone; '
      + 'a subordinate clause cannot. '
      + 'Simple is one main clause, '
      + 'compound is two joined by and, but or so, '
      + 'complex is a main clause with a subordinate one, '
      + 'and compound complex has at least two main clauses and one '
      + 'subordinate.',
    method: [
      'Find every verb, then find its subject.',
      'Decide for each clause whether it could stand alone.',
      'Count the main clauses, then the subordinate ones.',
      'Name the type from those two counts.',
    ],
  },

  idea:
    'A clause is a group of words with its own subject and its own '
    + 'verb. '
    + 'A main clause makes sense standing alone: '
    + 'the rain stopped. '
    + 'A subordinate clause does not, '
    + 'because a joining word has made it depend on something else: '
    + 'when the rain stopped. '
    + 'A phrase has no verb of its own at all: '
    + 'after the heavy rain. '
    + 'From that, the four sentence types follow by counting. '
    + 'A simple sentence has one main clause: '
    + 'the farmer sold his maize. '
    + 'A compound sentence has two or more main clauses joined by a '
    + 'coordinating conjunction, '
    + 'and, but, or, so, for, nor, yet: '
    + 'the farmer sold his maize, but the price was low. '
    + 'A complex sentence has one main clause and at least one '
    + 'subordinate clause, '
    + 'joined by a word such as because, although, when, if, who, '
    + 'which, that: '
    + 'the farmer sold his maize because the rains had failed. '
    + 'A compound complex sentence has at least two main clauses '
    + 'and at least one subordinate clause: '
    + 'the farmer sold his maize because the rains had failed, '
    + 'and he used the money for school fees.',

  mechanism:
    'Naming the type is a counting exercise, not a feeling, '
    + 'and the counting only works if the verbs are found first. '
    + 'So the method is always the same three moves: '
    + 'underline every verb, '
    + 'find the subject of each one, '
    + 'then ask of each clause whether it could be said on its own '
    + 'and be understood. '
    + 'Two things make learners miscount. '
    + 'The first is a phrase that looks like a clause. '
    + 'Having finished the work has no subject and no finite verb, '
    + 'so it is a phrase, '
    + 'and a sentence built on it is still simple. '
    + 'The second is a compound verb. '
    + 'The farmer sold his maize and bought fertiliser '
    + 'has two verbs but one subject, '
    + 'and one subject with two verbs is still one clause, '
    + 'so that sentence is simple, not compound. '
    + 'Counting verbs alone will call it compound and lose the mark. '
    + 'Beyond naming the types, the reason this topic is taught '
    + 'is that it is where the two worst sentence faults are repaired. '
    + 'A fragment is a subordinate clause or a phrase '
    + 'punctuated as though it were a sentence: '
    + 'Although he arrived early. '
    + 'That cannot stand, because although made it dependent, '
    + 'and the repair is to attach it to a main clause. '
    + 'A run on, or comma splice, is the opposite error: '
    + 'two main clauses joined with only a comma, '
    + 'he arrived early, the gate was locked. '
    + 'The repair has three options and all are correct: '
    + 'a full stop, a semicolon, '
    + 'or a comma with a conjunction, '
    + 'he arrived early, but the gate was locked. '
    + 'Last, the types are not a ladder with complex at the top. '
    + 'A short simple sentence after two long ones '
    + 'is how a good writer lands a point, '
    + 'and an essay of nothing but complex sentences is tiring to '
    + 'read. '
    + 'The examiner rewards variety used on purpose, '
    + 'not length.',

  recap:
    'You have named the subject and the predicate, '
    + 'and joined two short sentences with a conjunction. '
    + 'This gives the four sentence types, '
    + 'and the two faults they let you repair: '
    + 'the fragment and the run on.',

  method: [
    'Read the sentence aloud once.',
    'Underline every finite verb.',
    'Write the subject of each verb above it.',
    'Discard any group with no verb: it is a phrase, not a clause.',
    'Watch for one subject with two verbs: that is still one clause.',
    'Decide which clauses could stand alone.',
    'Count the main clauses, then the subordinate clauses.',
    'Name the type from the two counts.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the type: The lorry broke down near Nsawam.',
      steps: [
        'One verb, broke down. Subject, the lorry.',
        'It stands alone, so one main clause and nothing else.',
      ],
      answer: 'Simple.',
    },
    {
      level: 4,
      ask: 'Name the type: The teacher marked the scripts, '
        + 'but she did not record the marks.',
      steps: [
        'Two verbs with two different subjects.',
        'Both clauses could stand alone.',
        'They are joined by but, a coordinating conjunction.',
      ],
      answer: 'Compound.',
    },
    {
      level: 5,
      ask: 'Name the type: Because the lorry broke down, '
        + 'the traders arrived late, '
        + 'and the market had already closed.',
      steps: [
        'Because the lorry broke down cannot stand alone, '
          + 'so it is subordinate.',
        'The traders arrived late can stand alone.',
        'The market had already closed can stand alone.',
      ],
      answer: 'Compound complex: two main clauses and one subordinate '
        + 'clause.',
    },
    {
      level: 6,
      ask: 'Identify the fault and repair it: '
        + 'She studied all night, she still failed the paper. '
        + 'Although she had the right books.',
      steps: [
        'The first part joins two main clauses with only a comma, '
          + 'which is a comma splice.',
        'Repair with a conjunction, or a semicolon, or a full stop.',
        'Although she had the right books is a subordinate clause '
          + 'standing alone, which is a fragment.',
        'Attach it to the main clause it belongs with.',
      ],
      answer: 'Although she had the right books and studied all night, '
        + 'she still failed the paper. '
        + 'Equally correct: She studied all night, but she still failed '
        + 'the paper, although she had the right books.',
    },
  ],

  traps: [
    {
      mistake: 'Counting verbs instead of clauses.',
      why: 'One subject with two verbs is still one clause. '
        + 'He washed and ironed the uniform is a simple sentence.',
    },
    {
      mistake: 'Treating a phrase as a clause.',
      why: 'A phrase has no subject and finite verb of its own. '
        + 'After the rain is a phrase, not a clause.',
    },
    {
      mistake: 'Joining two main clauses with only a comma.',
      why: 'That is a comma splice. '
        + 'Use a full stop, a semicolon, or a comma with a conjunction.',
    },
    {
      mistake: 'Writing a subordinate clause as a whole sentence.',
      why: 'Because, although and when leave it dependent. '
        + 'It must be attached to a main clause.',
    },
  ],

  extension:
    'Subordinate clauses have jobs of their own, '
    + 'and naming the job is the next step: '
    + 'an adjectival clause describes a noun, '
    + 'the man who sells fish; '
    + 'an adverbial clause tells when, where, why or how, '
    + 'when the rain stopped; '
    + 'and a noun clause does the work of a noun, '
    + 'what he said surprised everyone.',

  questions: [
    {
      id: 'sen-1',
      ask: 'A clause must contain:',
      kind: 'choice',
      options: [
        'a subject and a verb',
        'a conjunction',
        'at least five words',
      ],
      answer: 'a subject and a verb',
      teach: 'A group without its own verb is a phrase.',
      level: 3,
    },
    {
      id: 'sen-2',
      ask: 'He cooked the rice and fried the fish. This sentence is:',
      kind: 'choice',
      options: [
        'simple',
        'compound',
        'complex',
      ],
      answer: 'simple',
      teach: 'One subject with two verbs is one clause, so it is still '
        + 'simple.',
      level: 5,
    },
    {
      id: 'sen-3',
      ask: 'Although the bus was full. This is:',
      kind: 'choice',
      options: [
        'a fragment',
        'a complex sentence',
        'a comma splice',
      ],
      answer: 'a fragment',
      teach: 'Although makes it subordinate, so it cannot stand alone.',
      level: 4,
    },
    {
      id: 'sen-4',
      ask: 'A compound complex sentence has:',
      kind: 'choice',
      options: [
        'at least two main clauses and one subordinate clause',
        'one main clause and two subordinate clauses',
        'three subordinate clauses',
      ],
      answer: 'at least two main clauses and one subordinate clause',
      teach: 'Count the main clauses first, then the subordinate ones.',
      level: 6,
    },
  ],
})

/* ── concord ────────────────────────────────────────────────────────────── */

teach({
  topicId: 'concord-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The verb agrees with its subject, '
      + 'not with the nearest noun. '
      + 'Find the subject by stripping out everything between it and '
      + 'the verb. '
      + 'Each, every, everybody, somebody and neither are singular. '
      + 'With either or and neither nor, '
      + 'the verb follows the nearer subject.',
    method: [
      'Find the verb, then ask who or what is doing it.',
      'Cross out any phrase sitting between the subject and the verb.',
      'Check whether the subject is singular or plural.',
      'Apply the special rules for each, every, and either or.',
    ],
  },

  idea:
    'Concord, or agreement, is the rule that a verb matches its '
    + 'subject in number. '
    + 'The boy writes. The boys write. '
    + 'The difficulty is never the rule, it is finding the subject. '
    + 'The rules that WASSCE tests are these. '
    + 'A phrase between the subject and the verb changes nothing: '
    + 'the basket of mangoes is heavy, '
    + 'because the subject is basket, not mangoes. '
    + 'Each, every, either, neither, everybody, somebody, nobody, '
    + 'anyone and none take a singular verb: '
    + 'every student has a desk. '
    + 'Two subjects joined by and are plural: '
    + 'salt and pepper are on the table. '
    + 'But a single idea takes a singular verb: '
    + 'bread and butter is his breakfast. '
    + 'With either or and neither nor, '
    + 'the verb agrees with the subject nearer to it: '
    + 'neither the teachers nor the head is available. '
    + 'A collective noun takes a singular verb when the group acts as '
    + 'one, '
    + 'the committee has decided, '
    + 'and a plural verb when its members act separately, '
    + 'the committee are arguing among themselves. '
    + 'A plural amount treated as one quantity is singular: '
    + 'twenty cedis is enough.',

  mechanism:
    'One move prevents most concord errors, '
    + 'and it is worth drilling until it is automatic: '
    + 'cover everything between the subject and the verb, '
    + 'then read what is left. '
    + 'The list of names of all the candidates was published. '
    + 'Cover of all the candidates and you are left with '
    + 'the list was published, which is plainly right. '
    + 'Uncovered, the ear hears candidates immediately before the verb '
    + 'and reaches for were. '
    + 'That is the whole mechanism of the error: '
    + 'agreement is grammatical, '
    + 'but the ear agrees with whatever it heard last. '
    + 'The words most often misjudged are the indefinite ones, '
    + 'and they are misjudged because their meaning feels plural '
    + 'while their grammar is singular. '
    + 'Everybody has arrived sounds like many people, and it is, '
    + 'but everybody is one word standing for each person taken singly, '
    + 'so the verb is has. '
    + 'Neither of the boys is here works the same way: '
    + 'the subject is neither, not boys, '
    + 'and of the boys is a phrase that can be covered. '
    + 'The either or rule is the one place where position decides, '
    + 'and that is worth stating plainly because it looks arbitrary. '
    + 'The verb follows the nearer subject, '
    + 'so neither the pupils nor the teacher was informed, '
    + 'and neither the teacher nor the pupils were informed. '
    + 'Both are correct. '
    + 'A writer who dislikes how one of them sounds '
    + 'is free to put the plural subject second. '
    + 'Last, a note on Ghanaian spoken English, '
    + 'because the written paper penalises what the street does not. '
    + 'The third person singular s is often dropped in speech: '
    + 'he come, she go. '
    + 'In an examination that is marked wrong every time. '
    + 'The reverse also happens, '
    + 'an s added to a plural verb, the boys goes, '
    + 'and that is marked wrong too. '
    + 'Reading your own work aloud will not catch either of them '
    + 'if your speech has the same habit, '
    + 'so the check has to be the grammatical one: '
    + 'find the subject, count it, then look at the verb.',

  recap:
    'You have matched singular and plural verbs to simple subjects. '
    + 'This handles the hard cases: '
    + 'a phrase in the way, '
    + 'each and every, '
    + 'collective nouns, '
    + 'and either or.',

  method: [
    'Find the verb in the clause.',
    'Ask who or what is doing it, and that is the subject.',
    'Cover everything between the subject and the verb.',
    'Read the subject and verb together on their own.',
    'If the subject is each, every, neither, or a body word, use '
      + 'singular.',
    'If two subjects are joined by and, use plural, unless they are one '
      + 'idea.',
    'For either or and neither nor, agree with the nearer subject.',
    'For a collective noun, decide whether the group acts as one.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Choose: The pupils (is, are) in the hall.',
      steps: [
        'Subject is pupils, which is plural.',
      ],
      answer: 'are.',
    },
    {
      level: 4,
      ask: 'Choose: The box of books (is, are) on the floor.',
      steps: [
        'Cover of books.',
        'What is left is the box, which is singular.',
      ],
      answer: 'is.',
    },
    {
      level: 5,
      ask: 'Choose: Neither the prefects nor the teacher '
        + '(was, were) informed.',
      steps: [
        'With neither nor, the verb follows the nearer subject.',
        'The nearer subject is the teacher, which is singular.',
      ],
      answer: 'was. '
        + 'Reversing the subjects would give: '
        + 'neither the teacher nor the prefects were informed.',
    },
    {
      level: 6,
      ask: 'Correct where needed: '
        + 'Every one of the women who sell kenkey at the station '
        + 'have raised their prices.',
      steps: [
        'The subject of the main verb is every one, which is singular.',
        'Of the women and who sell kenkey at the station are both '
          + 'coverable.',
        'So have becomes has.',
        'The verb sell is correct, because its own subject is who, '
          + 'standing for women, which is plural.',
      ],
      answer: 'Every one of the women who sell kenkey at the station '
        + 'has raised her prices. '
        + 'Their becomes her to agree with the singular subject.',
    },
  ],

  traps: [
    {
      mistake: 'Agreeing with the noun nearest the verb.',
      why: 'The basket of mangoes is heavy. '
        + 'Cover the phrase and the real subject appears.',
    },
    {
      mistake: 'Treating everybody and each as plural.',
      why: 'They stand for people taken one at a time, '
        + 'so the verb is singular: everybody has.',
    },
    {
      mistake: 'Making the verb agree with the first subject in either '
        + 'or.',
      why: 'It agrees with the nearer one. '
        + 'Put the plural subject second if the singular sounds wrong.',
    },
    {
      mistake: 'Dropping the s on a third person singular verb.',
      why: 'He come is normal in speech and wrong on paper. '
        + 'Check the subject, then the verb ending.',
    },
  ],

  extension:
    'Concord also governs the pronoun that refers back. '
    + 'Each candidate must bring his or her own pen '
    + 'keeps the singular all the way through, '
    + 'while each candidate must bring their own pen, '
    + 'now accepted in much writing, '
    + 'is still marked as a concord error in WASSCE. '
    + 'The safe repair is to make the subject plural: '
    + 'all candidates must bring their own pens.',

  questions: [
    {
      id: 'con-1',
      ask: 'Choose: The list of names (was, were) long.',
      kind: 'choice',
      options: [
        'was',
        'were',
      ],
      answer: 'was',
      teach: 'The subject is list. Cover of names.',
      level: 4,
    },
    {
      id: 'con-2',
      ask: 'Everybody in the class (has, have) a textbook.',
      kind: 'choice',
      options: [
        'has',
        'have',
      ],
      answer: 'has',
      teach: 'Everybody is singular, however many people it covers.',
      level: 4,
    },
    {
      id: 'con-3',
      ask: 'Neither the goats nor the sheep (was, were) sold. '
        + 'The verb agrees with:',
      kind: 'choice',
      options: [
        'the nearer subject, sheep',
        'the first subject, goats',
        'both subjects together',
      ],
      answer: 'the nearer subject, sheep',
      teach: 'With either or and neither nor, position decides.',
      level: 5,
    },
    {
      id: 'con-4',
      ask: 'Bread and butter (is, are) his usual breakfast.',
      kind: 'choice',
      options: [
        'is',
        'are',
      ],
      answer: 'is',
      teach: 'Two nouns naming one idea take a singular verb.',
      level: 6,
    },
  ],
})

/* ── word formation and synonyms ────────────────────────────────────────── */

teach({
  topicId: 'word-formation',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A prefix changes meaning; '
      + 'a suffix usually changes the part of speech. '
      + 'So decide what job the word must do in the sentence, '
      + 'then choose the form that does that job. '
      + 'Near synonyms are not interchangeable: '
      + 'they differ in strength, in company, and in formality.',
    method: [
      'Find the root word.',
      'Decide whether the sentence needs a noun, verb, adjective or '
        + 'adverb.',
      'Add the suffix that makes that part of speech.',
      'For a synonym, test it in the sentence and check the company it '
        + 'keeps.',
    ],
  },

  idea:
    'Most English words are built from a root with pieces added. '
    + 'A prefix goes in front and changes the meaning: '
    + 'un, in, im, dis and mis all reverse or spoil it, '
    + 'as in unhappy, incorrect, impossible, disagree, misunderstand. '
    + 'Re means again, pre means before, '
    + 'and over and under mean too much and too little. '
    + 'A suffix goes on the end and usually changes the part of speech. '
    + 'From the root decide: '
    + 'decision and decider are nouns, '
    + 'decisive is an adjective, '
    + 'decisively is an adverb. '
    + 'So the sentence decides the form. '
    + 'Common noun suffixes are tion, ment, ness, ity and ance. '
    + 'Common adjective suffixes are ful, less, ous, able, ive and al. '
    + 'Ly makes an adverb from an adjective. '
    + 'Ise, ify and en make verbs. '
    + 'A synonym is a word with a similar meaning, '
    + 'but similar is not the same: '
    + 'big, large, huge and enormous rise in strength, '
    + 'and thin, slim, slender and skinny differ in whether they '
    + 'praise or insult.',

  mechanism:
    'The question in a WASSCE paper is almost never '
    + 'what does this word mean. '
    + 'It is what form of this word fits here, '
    + 'and that is a grammar question wearing a vocabulary coat. '
    + 'So the method starts with the slot, not the word. '
    + 'His ... to leave surprised us. '
    + 'The slot follows his and is followed by to leave, '
    + 'so it must be a noun, '
    + 'and the answer is decision, '
    + 'not decided, decisive or decisively. '
    + 'Ask what part of speech the slot needs before looking at the '
    + 'options, '
    + 'and most of the options eliminate themselves. '
    + 'Two spelling traps come with the suffixes '
    + 'and both are routinely penalised. '
    + 'A silent e is usually dropped before a vowel suffix: '
    + 'decide becomes decision, '
    + 'and argue becomes arguing, '
    + 'though argument drops the e too and is worth memorising. '
    + 'And y after a consonant becomes i before a suffix: '
    + 'happy becomes happiness, '
    + 'beauty becomes beautiful. '
    + 'The negative prefixes are not interchangeable either, '
    + 'and there is a pattern behind which one a root takes: '
    + 'im goes before p, b and m, '
    + 'impossible, imbalance, immature, '
    + 'ir before r, irregular, '
    + 'il before l, illegal, '
    + 'and in elsewhere, incorrect. '
    + 'That covers most of what the paper asks. '
    + 'On synonyms, the test that actually works '
    + 'is the company a word keeps. '
    + 'Large and big are close, '
    + 'but a large family is normal English and a big family is '
    + 'informal, '
    + 'while a large man and a big man mean slightly different things. '
    + 'So do not learn synonyms as lists. '
    + 'Learn them inside a phrase, '
    + 'and when choosing one in an examination, '
    + 'read the whole sentence with the word in place '
    + 'and ask whether you have ever heard it said that way. '
    + 'Strength matters as well as meaning: '
    + 'writing that the flood was enormous when it was merely large '
    + 'is a reporting error, not a style choice.',

  recap:
    'You have used prefixes and suffixes to build words, '
    + 'and matched words to their meanings. '
    + 'This turns that into a method: '
    + 'decide the part of speech the sentence needs, '
    + 'then choose the form, '
    + 'and choose between near synonyms on strength and company.',

  method: [
    'Read the whole sentence, not the gap alone.',
    'Decide what part of speech the gap needs.',
    'Find the root of the word you are given.',
    'Add the prefix or suffix that gives that part of speech.',
    'Check the spelling rule: drop the silent e, change y to i.',
    'For a negative, match the prefix to the first letter of the root.',
    'Read the sentence back with your word in place.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give the opposite of possible, and of regular.',
      steps: [
        'Possible begins with p, so im.',
        'Regular begins with r, so ir.',
      ],
      answer: 'impossible and irregular.',
    },
    {
      level: 4,
      ask: 'Complete with the right form of happy: '
        + 'Her ... was obvious to everyone.',
      steps: [
        'After her, the slot needs a noun.',
        'The noun from happy is happiness, with y changed to i.',
      ],
      answer: 'happiness.',
    },
    {
      level: 5,
      ask: 'Complete with the right form of decide: '
        + 'He acted ... when the fire started.',
      steps: [
        'The slot describes how he acted, so it needs an adverb.',
        'The adjective is decisive, so the adverb is decisively.',
      ],
      answer: 'decisively.',
    },
    {
      level: 6,
      ask: 'Choose between the near synonyms and justify: '
        + 'The harmattan wind left the soil (dry, arid, parched).',
      steps: [
        'All three mean lacking water.',
        'Arid describes a climate or a region, not usually soil after '
          + 'one season.',
        'Parched suggests dried by heat to the point of cracking, '
          + 'which fits the harmattan.',
        'Dry is correct but weakest, and says least.',
      ],
      answer: 'Parched is the best choice. '
        + 'Arid would be right in the northern savannah is arid, '
        + 'where a whole climate is meant.',
    },
  ],

  traps: [
    {
      mistake: 'Choosing the form by meaning instead of by part of '
        + 'speech.',
      why: 'Decide what the slot needs first. '
        + 'A noun slot rules out three of four options at once.',
    },
    {
      mistake: 'Keeping the y before a suffix.',
      why: 'After a consonant, y becomes i: happiness, beautiful, '
        + 'not happyness.',
    },
    {
      mistake: 'Using in for every negative.',
      why: 'Im before p, b and m, ir before r, il before l. '
        + 'Impossible, irregular, illegal.',
    },
    {
      mistake: 'Treating synonyms as interchangeable.',
      why: 'They differ in strength and in the words they go with. '
        + 'A large family, not a big family, in formal writing.',
    },
  ],

  extension:
    'Some words change their part of speech with no change of form, '
    + 'and only the position in the sentence shows which is meant: '
    + 'the record was broken, and please record the meeting. '
    + 'In speech the stress moves, '
    + 'to the first syllable for the noun '
    + 'and the second for the verb, '
    + 'which is a pronunciation question in its own right.',

  questions: [
    {
      id: 'wrd-1',
      ask: 'The opposite of legal is:',
      kind: 'choice',
      options: [
        'illegal',
        'inlegal',
        'unlegal',
      ],
      answer: 'illegal',
      teach: 'Il goes before a root starting with l.',
      level: 3,
    },
    {
      id: 'wrd-2',
      ask: 'In He spoke with great ..., the gap needs:',
      kind: 'choice',
      options: [
        'a noun',
        'an adjective',
        'an adverb',
      ],
      answer: 'a noun',
      teach: 'After with great, a noun must follow: confidence, for '
        + 'example.',
      level: 4,
    },
    {
      id: 'wrd-3',
      ask: 'The adverb from careful is:',
      kind: 'choice',
      options: [
        'carefully',
        'carefulness',
        'caring',
      ],
      answer: 'carefully',
      teach: 'Ly makes an adverb from an adjective. '
        + 'Carefulness is a noun.',
      level: 4,
    },
    {
      id: 'wrd-4',
      ask: 'Big, large, huge and enormous differ mainly in:',
      kind: 'choice',
      options: [
        'strength and the company they keep',
        'meaning entirely',
        'spelling only',
      ],
      answer: 'strength and the company they keep',
      teach: 'Near synonyms are not interchangeable. Test the whole '
        + 'phrase.',
      level: 6,
    },
  ],
})

/* ── punctuation and mechanics ──────────────────────────────────────────── */

teach({
  topicId: 'punctuation-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Punctuation marks the structure of a sentence, '
      + 'so it is decided by grammar and not by where you would pause. '
      + 'A comma separates items and marks off an addition. '
      + 'A semicolon joins two main clauses without a conjunction. '
      + 'A colon introduces. '
      + 'An apostrophe shows possession or an omitted letter, '
      + 'never a plural.',
    method: [
      'Find the clauses first, then punctuate the joins.',
      'Use a semicolon or a full stop where there is no conjunction.',
      'Use a colon to introduce a list, an explanation or a quotation.',
      'For an apostrophe, ask whose, and put it after the owner.',
    ],
  },

  idea:
    'A full stop ends a statement. '
    + 'A comma has four main uses: '
    + 'separating items in a list, '
    + 'marking off a phrase or clause that is extra, '
    + 'coming before a conjunction that joins two main clauses, '
    + 'and following an introductory element. '
    + 'A semicolon joins two main clauses closely related in sense '
    + 'with no conjunction: '
    + 'the rains failed; the harvest was poor. '
    + 'A colon introduces what follows, '
    + 'a list, an explanation, or a quotation, '
    + 'and what comes before it must be a complete clause. '
    + 'An apostrophe shows possession, the boy’s book, '
    + 'or a missing letter in a contraction, '
    + 'and it never makes a plural. '
    + 'In direct speech the spoken words sit inside quotation marks, '
    + 'the punctuation that belongs to the speech goes inside them, '
    + 'and a reporting clause is separated by a comma: '
    + 'the teacher said, I have marked the scripts. '
    + 'Capital letters begin a sentence and every proper noun, '
    + 'Kumasi, Akosombo, Tuesday, February.',

  mechanism:
    'The idea to replace, because it is the source of most errors, '
    + 'is that a comma means a pause. '
    + 'Punctuation marks grammatical structure. '
    + 'A long subject invites a pause and takes no comma at all: '
    + 'the woman who sells tomatoes in the market near the lorry park '
    + 'arrives at dawn. '
    + 'And two main clauses with no conjunction need more than a comma '
    + 'however short they are. '
    + 'So the order of work is to find the clauses, '
    + 'then punctuate the joins. '
    + 'Three particular distinctions carry marks. '
    + 'First, the comma that marks off extra information. '
    + 'My brother, who lives in Takoradi, is a nurse '
    + 'says I have one brother, and mentions where he lives in '
    + 'passing. '
    + 'My brother who lives in Takoradi is a nurse, '
    + 'with no commas, '
    + 'says I have several brothers and identifies which one. '
    + 'The commas change the meaning, not the rhythm, '
    + 'which is why one of them cannot be dropped: '
    + 'a pair that marks off an insertion must be complete. '
    + 'Second, the semicolon against the comma. '
    + 'Two main clauses joined by a comma alone is the comma splice '
    + 'again, '
    + 'and the semicolon exists precisely for that join. '
    + 'It is also the right mark between items in a list '
    + 'when the items themselves contain commas. '
    + 'Third, the apostrophe. '
    + 'Ask whose, and place the apostrophe directly after the owner: '
    + 'the boy’s bag, one boy; '
    + 'the boys’ bags, with the apostrophe after the s, '
    + 'for several boys. '
    + 'Two cases have to be learned rather than reasoned: '
    + 'its means belonging to it and has no apostrophe, '
    + 'while it is contracts to it’s. '
    + 'And a plural never takes one, '
    + 'so a sign reading mango’s for sale is wrong, '
    + 'and that error is common enough in Ghana '
    + 'to be worth naming in class. '
    + 'Last, direct speech. '
    + 'The punctuation belonging to the words spoken stays inside the '
    + 'quotation marks. '
    + 'Where are you going? she asked '
    + 'keeps the question mark inside, '
    + 'because the speaker asked the question, not the writer.',

  recap:
    'You have used the full stop, comma, question mark '
    + 'and the apostrophe in contractions. '
    + 'This adds the semicolon and the colon, '
    + 'the commas that change meaning, '
    + 'and the punctuation of direct speech.',

  method: [
    'Read the sentence and find every clause.',
    'Decide which clauses are main and which are subordinate.',
    'Join two main clauses with a full stop, a semicolon, or a comma '
      + 'plus a conjunction.',
    'Mark off an insertion with a pair of commas, both of them.',
    'Use a colon only after a complete clause.',
    'For an apostrophe, ask whose and place it after the owner.',
    'Check that no plural has an apostrophe.',
    'In direct speech, keep the speaker’s punctuation inside the quotes.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Punctuate: we bought rice beans oil and salt',
      steps: [
        'A list, so commas between items.',
        'Capital letter at the start and a full stop at the end.',
      ],
      answer: 'We bought rice, beans, oil and salt.',
    },
    {
      level: 4,
      ask: 'Punctuate: the rains failed the harvest was poor',
      steps: [
        'Two main clauses, no conjunction.',
        'A comma alone would be a splice, so use a semicolon.',
      ],
      answer: 'The rains failed; the harvest was poor. '
        + 'A full stop, or a comma with so, would also be correct.',
    },
    {
      level: 5,
      ask: 'Explain the difference: '
        + 'My sister, who teaches in Ho, has travelled. '
        + 'My sister who teaches in Ho has travelled.',
      steps: [
        'With commas, the clause is extra information.',
        'Without commas, it identifies which sister.',
      ],
      answer: 'The first says there is one sister, '
        + 'and mentions in passing that she teaches in Ho. '
        + 'The second implies more than one sister '
        + 'and tells you which one travelled.',
    },
    {
      level: 6,
      ask: 'Correct all the errors: '
        + 'the headmaster said we will close early however the teacher’s '
        + 'disagreed its not safe she replied',
      steps: [
        'Capital letter and a reporting comma before the direct speech.',
        'Open and close the quotation marks, '
          + 'with the full stop inside.',
        'Teacher’s is a plural, so no apostrophe: teachers.',
        'However joins two main clauses, so a semicolon or a full stop '
          + 'before it.',
        'Its not safe is it is not safe, so it needs the apostrophe.',
      ],
      answer: 'The headmaster said, We will close early. '
        + 'However, the teachers disagreed. '
        + 'It is not safe, she replied. '
        + 'The apostrophe moved from a plural, where it does not belong, '
        + 'to a contraction, where it does.',
    },
  ],

  traps: [
    {
      mistake: 'Punctuating by where you would pause.',
      why: 'Punctuation marks structure. '
        + 'A long subject takes no comma, and a short splice is still a '
        + 'splice.',
    },
    {
      mistake: 'Dropping one comma of a pair.',
      why: 'An insertion needs a comma at each end, '
        + 'or the reader cannot tell where it stops.',
    },
    {
      mistake: 'Using an apostrophe to make a plural.',
      why: 'Mango s for sale is wrong. '
        + 'An apostrophe shows possession or a missing letter.',
    },
    {
      mistake: 'Writing it’s for belonging to it.',
      why: 'Its is the possessive. '
        + 'It’s is only ever it is or it has.',
    },
  ],

  extension:
    'The dash and brackets also mark off an insertion, '
    + 'and the choice between them is a matter of emphasis: '
    + 'brackets play the insertion down, '
    + 'and in formal examination writing the pair of commas is the '
    + 'safest. '
    + 'Reported speech drops the quotation marks altogether '
    + 'and shifts every word that depended on who was speaking: '
    + 'she said she was not safe.',

  questions: [
    {
      id: 'pun-1',
      ask: 'Two main clauses with no conjunction should be joined by:',
      kind: 'choice',
      options: [
        'a semicolon or a full stop',
        'a comma',
        'nothing at all',
      ],
      answer: 'a semicolon or a full stop',
      teach: 'A comma alone is a comma splice.',
      level: 4,
    },
    {
      id: 'pun-2',
      ask: 'Which is correct?',
      kind: 'choice',
      options: [
        'The dog wagged its tail.',
        'The dog wagged it’s tail.',
        'The dog wagged its’ tail.',
      ],
      answer: 'The dog wagged its tail.',
      teach: 'Its is possessive. It’s means it is.',
      level: 5,
    },
    {
      id: 'pun-3',
      ask: 'A colon may be used:',
      kind: 'choice',
      options: [
        'after a complete clause, to introduce',
        'anywhere a comma feels too weak',
        'between any two nouns',
      ],
      answer: 'after a complete clause, to introduce',
      teach: 'What comes before the colon must stand on its own.',
      level: 5,
    },
    {
      id: 'pun-4',
      ask: 'My uncle, who lives in Tamale, is a mechanic. The commas '
        + 'tell you:',
      kind: 'choice',
      options: [
        'there is only one uncle, and where he lives is extra',
        'there are several uncles, and this identifies one',
        'the writer paused there',
      ],
      answer: 'there is only one uncle, and where he lives is extra',
      teach: 'Without the commas the clause would identify which uncle. '
        + 'The commas change the meaning.',
      level: 6,
    },
  ],
})
