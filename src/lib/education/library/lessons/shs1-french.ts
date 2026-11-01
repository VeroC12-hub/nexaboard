/**
 * Stored lessons for SHS 1 French.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── The rule these lessons follow ─────────────────────────────────────────
 *
 * Every French form is given in full, with its accents, because an accent is
 * part of the spelling and a form learned without it is learned wrong.
 * Everything around the French is in plain English, because a learner in a
 * Ghanaian school may have nobody to hear the language from and must be able
 * to work from the page alone.
 *
 * ── What changes at SHS ───────────────────────────────────────────────────
 *
 * JHS French teaches forms. SHS French asks for choices, and the choice has
 * to be justified. The examination does not ask for the imperfect of a verb;
 * it gives a passage and asks which past tense belongs in the gap, which is
 * a question about what the sentence means rather than about conjugation. So
 * the mechanism of each lesson here is a decision procedure: ask this, then
 * this, and the form follows.
 *
 * ── Ghana and its neighbours ──────────────────────────────────────────────
 *
 * Ghana is surrounded on three sides by French speaking countries, and that
 * is the practical reason this subject exists. The culture lesson treats it
 * as a fact about trade, travel and work rather than as general information,
 * because that is how the examination frames it and because it is true.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── the present tense ──────────────────────────────────────────────────── */

teach({
  topicId: 'present-revision-fr',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Regular verbs fall into three groups by their ending: '
      + 'er, ir and re. '
      + 'Take the ending off to get the stem, '
      + 'then add the endings for that group. '
      + 'The common irregulars are être, avoir, aller and faire, '
      + 'and they must be learned whole. '
      + 'French has one present tense where English has two, '
      + 'so je mange is both I eat and I am eating.',
    method: [
      'Find the infinitive and read its last two letters.',
      'Remove them to get the stem.',
      'Add the ending for that group and that person.',
      'Check the subject and the ending match.',
      'For an irregular verb, recall the whole form.',
    ],
  },

  idea:
    'A French verb is listed in the dictionary as an infinitive, '
    + 'and regular infinitives end in er, ir or re. '
    + 'For the first group, parler, '
    + 'the stem is parl and the endings are '
    + 'e, es, e, ons, ez, ent: '
    + 'je parle, tu parles, il parle, '
    + 'nous parlons, vous parlez, ils parlent. '
    + 'For the second group, finir, '
    + 'the stem is fin and the endings are '
    + 'is, is, it, issons, issez, issent. '
    + 'For the third group, vendre, '
    + 'the stem is vend and the endings are '
    + 's, s, nothing, ons, ez, ent. '
    + 'Four irregular verbs are needed constantly. '
    + 'Être: je suis, tu es, il est, '
    + 'nous sommes, vous êtes, ils sont. '
    + 'Avoir: j’ai, tu as, il a, '
    + 'nous avons, vous avez, ils ont. '
    + 'Aller: je vais, tu vas, il va, '
    + 'nous allons, vous allez, ils vont. '
    + 'Faire: je fais, tu fais, il fait, '
    + 'nous faisons, vous faites, ils font. '
    + 'Tu is used for one person you know well '
    + 'and vous for more than one person, '
    + 'or for one person addressed politely. '
    + 'The French present covers both English presents, '
    + 'so il mange means he eats and he is eating.',

  mechanism:
    'The reason to learn the three groups as a procedure '
    + 'rather than as three lists '
    + 'is that the procedure handles a verb you have never seen. '
    + 'Given travailler, which may be new, '
    + 'the last two letters are er, so it is first group, '
    + 'the stem is travaill, '
    + 'and nous travaillons follows without any further knowledge. '
    + 'So the first thing to do with any verb is read its ending, '
    + 'and that habit turns a vocabulary problem into a spelling '
    + 'problem. '
    + 'The second thing to understand is the silent ending, '
    + 'because it explains most written errors. '
    + 'Je parle, tu parles, il parle and ils parlent '
    + 'are all pronounced the same. '
    + 'The ending is heard in none of them. '
    + 'So a learner who writes from the sound '
    + 'will guess, and will be wrong one time in four. '
    + 'The endings have to be written from the subject '
    + 'rather than from the ear, '
    + 'and the discipline is: '
    + 'look at the subject pronoun, '
    + 'then choose the ending, '
    + 'then write both. '
    + 'This is the single largest source of lost marks in the paper, '
    + 'and it is entirely avoidable. '
    + 'The third point is the one English speakers get wrong by habit. '
    + 'French has no continuous present. '
    + 'There is no form corresponding to I am eating, '
    + 'so je suis manger and je suis mangeant '
    + 'are both wrong and both are written by Ghanaian candidates '
    + 'because English has that pattern. '
    + 'Je mange carries both meanings. '
    + 'If the ongoing sense must be stressed, '
    + 'French says je suis en train de manger, '
    + 'which is a fixed phrase and not a tense. '
    + 'So the rule is: one present tense, two English translations. '
    + 'Fourth, a point about the irregular verbs '
    + 'that saves a great deal of work later. '
    + 'Être and avoir are not merely four more verbs to learn. '
    + 'They are the auxiliaries of the perfect tense, '
    + 'so every past tense in the next topic '
    + 'begins with a form of avoir or être. '
    + 'Learning them now, completely, '
    + 'is learning half of the perfect tense in advance, '
    + 'and that is the reason they are drilled '
    + 'rather than merely met. '
    + 'What has to be written down in an examination answer '
    + 'is the subject and the verb together, '
    + 'and the agreement checked once before moving on. '
    + 'In a gap filling exercise the marks are for the ending, '
    + 'so a candidate who writes the right stem with the wrong ending '
    + 'has written a wrong word, not a nearly right one.',

  recap:
    'You have met the present tense of a few French verbs '
    + 'and the pronouns je, tu, il and so on. '
    + 'This gives the three regular patterns as a procedure, '
    + 'and the four irregular verbs you cannot do without.',

  method: [
    'Read the last two letters of the infinitive.',
    'er means first group, ir second, re third.',
    'Remove those letters to leave the stem.',
    'Identify the subject pronoun.',
    'Add the ending for that group and that person.',
    'Check that subject and ending agree, in writing not by ear.',
    'For être, avoir, aller or faire, recall the whole form.',
    'Translate the one French present as either English present.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Conjugate parler in the present tense.',
      steps: [
        'parler ends in er, so first group.',
        'Stem is parl.',
        'Endings: e, es, e, ons, ez, ent.',
      ],
      answer: 'Je parle, tu parles, il or elle parle, '
        + 'nous parlons, vous parlez, ils or elles parlent. '
        + 'The first three and the last are pronounced the same, '
        + 'so the endings must be written from the subject.',
    },
    {
      level: 4,
      ask: 'Give the present of travailler for nous and for ils, '
        + 'and explain how you knew without having learned the verb.',
      steps: [
        'Read the ending: er, so first group.',
        'Stem is travaill.',
        'Add ons for nous and ent for ils.',
      ],
      answer: 'Nous travaillons and ils travaillent. '
        + 'The verb ends in er, so it follows the first group pattern, '
        + 'and the stem is what remains when er is removed. '
        + 'No knowledge of this particular verb was needed, '
        + 'which is why the groups are learned as a procedure.',
    },
    {
      level: 4,
      ask: 'Translate: the children are eating. '
        + 'Explain why je suis mangeant would be wrong.',
      steps: [
        'Les enfants is the subject, so third person plural.',
        'manger is first group, stem mang, ending ent.',
        'French has no continuous present.',
      ],
      answer: 'Les enfants mangent. '
        + 'French has no continuous present, '
        + 'so there is no form corresponding to are eating. '
        + 'The one present tense covers both English presents. '
        + 'Je suis mangeant copies the English pattern '
        + 'and does not exist in French. '
        + 'To stress that the action is in progress, '
        + 'French uses the fixed phrase être en train de, '
        + 'as in ils sont en train de manger.',
    },
    {
      level: 5,
      ask: 'Complete with the correct form: '
        + 'Nous ... à l’école et nos amis ... à la maison. '
        + 'Verbs: aller, être.',
      steps: [
        'Both are irregular and must be recalled whole.',
        'aller for nous is allons.',
        'nos amis is third person plural, so être gives sont.',
      ],
      answer: 'Nous allons à l’école et nos amis sont à la maison. '
        + 'Aller and être are irregular, '
        + 'so no stem and ending procedure applies. '
        + 'Note also that nos amis, not ils, is the subject, '
        + 'and a plural noun subject takes the same ending as ils, '
        + 'which is the point candidates most often miss '
        + 'when the subject is a noun rather than a pronoun.',
    },
  ],

  traps: [
    {
      mistake: 'Writing the ending from the sound.',
      why: 'Parle, parles and parlent sound identical. '
        + 'Read the subject, then choose the ending.',
    },
    {
      mistake: 'Writing je suis mangeant for I am eating.',
      why: 'French has no continuous present. '
        + 'Je mange means both I eat and I am eating.',
    },
    {
      mistake: 'Treating a plural noun subject as singular.',
      why: 'Nos amis takes the same ending as ils. '
        + 'Candidates agree correctly with pronouns '
        + 'and forget with nouns.',
    },
    {
      mistake: 'Learning être and avoir only as ordinary verbs.',
      why: 'They are the auxiliaries of the perfect tense, '
        + 'so every past tense you write will begin with one of them.',
    },
  ],

  extension:
    'A small group of first group verbs changes its stem '
    + 'in some persons, and the change follows the stress. '
    + 'Acheter becomes j’achète, tu achètes, il achète, '
    + 'and then nous achetons without the accent. '
    + 'The accent appears exactly where the syllable is stressed, '
    + 'which is in the singular and the third person plural, '
    + 'and disappears for nous and vous. '
    + 'Préférer, appeler and jeter all behave in the same way, '
    + 'each with its own spelling change. '
    + 'So the pattern is not arbitrary: '
    + 'the spelling is tracking the pronunciation, '
    + 'and knowing that makes the forms predictable '
    + 'rather than four more things to memorise.',

  questions: [
    {
      id: 'pres-1',
      ask: 'Which group does finir belong to?',
      kind: 'choice',
      options: ['the second, in ir', 'the first, in er', 'the third, in '
        + 're'],
      answer: 'the second, in ir',
      teach: 'Read the last two letters of the infinitive. '
        + 'Its endings are is, is, it, issons, issez, issent.',
      level: 3,
    },
    {
      id: 'pres-2',
      ask: 'Nous ... français. Which form of parler fits?',
      kind: 'choice',
      options: ['parlons', 'parlez', 'parlent'],
      answer: 'parlons',
      teach: 'Nous takes ons in every group. '
        + 'Parlez goes with vous and parlent with ils.',
      level: 3,
    },
    {
      id: 'pres-3',
      ask: 'I am eating in French is:',
      kind: 'choice',
      options: ['je mange', 'je suis mangeant', 'je suis manger'],
      answer: 'je mange',
      teach: 'There is no continuous present in French. '
        + 'One present tense serves for both English forms.',
      level: 4,
    },
    {
      id: 'pres-4',
      ask: 'Les élèves ... à l’école. Which form of être fits?',
      kind: 'choice',
      options: ['sont', 'est', 'sommes'],
      answer: 'sont',
      teach: 'Les élèves is a plural noun subject, '
        + 'so it takes the same form as ils.',
      level: 4,
    },
    {
      id: 'pres-5',
      ask: 'Why must être and avoir be learned thoroughly now?',
      kind: 'choice',
      options: [
        'They are the auxiliaries of the perfect tense',
        'They are the only irregular verbs',
        'They have no plural forms',
      ],
      answer: 'They are the auxiliaries of the perfect tense',
      teach: 'Every perfect tense begins with a form of avoir or être, '
        + 'so learning them now is learning half of the next topic.',
      level: 5,
    },
  ],
})

/* ── the perfect and the imperfect ──────────────────────────────────────── */

teach({
  topicId: 'perfect-imperfect-fr',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The passé composé reports a completed action. '
      + 'It is formed with avoir or être in the present '
      + 'plus the past participle. '
      + 'The imperfect describes a situation, a habit, '
      + 'or something that was going on. '
      + 'Its endings are ais, ais, ait, ions, iez, aient. '
      + 'The choice is not about how long ago it was. '
      + 'It is about whether the action is presented as finished '
      + 'or as a background.',
    method: [
      'Ask whether the sentence reports an event or describes a '
        + 'background.',
      'An event that happened and finished takes the passé composé.',
      'A description, a habit or an interrupted action takes the '
        + 'imperfect.',
      'For the passé composé choose avoir or être, then the participle.',
      'With être, make the participle agree with the subject.',
    ],
  },

  idea:
    'French has two main past tenses for ordinary narrative. '
    + 'The passé composé reports an action as completed. '
    + 'It is formed from the present of avoir or être '
    + 'plus the past participle: '
    + 'j’ai mangé, nous avons fini, il a vendu. '
    + 'Participles are formed regularly from the three groups: '
    + 'er gives é, ir gives i, re gives u. '
    + 'A set of verbs of movement and change of state '
    + 'takes être instead of avoir, '
    + 'including aller, venir, arriver, partir, entrer, sortir, '
    + 'monter, descendre, rester, tomber, naître, mourir '
    + 'and their compounds, '
    + 'as well as all reflexive verbs. '
    + 'With être the participle agrees with the subject: '
    + 'elle est allée, ils sont allés, elles sont allées. '
    + 'The imperfect describes rather than reports. '
    + 'Its stem is the nous form of the present without ons, '
    + 'and its endings are ais, ais, ait, ions, iez, aient: '
    + 'je parlais, nous finissions, il vendait. '
    + 'Être is the one irregular stem: j’étais. '
    + 'The imperfect is used for a description or a state, '
    + 'for a repeated or habitual action, '
    + 'and for an action that was going on '
    + 'when something else happened. '
    + 'In that last case the interrupting action '
    + 'takes the passé composé.',

  mechanism:
    'The question that decides between the two tenses '
    + 'is not when the action happened. '
    + 'Candidates look for a time expression, '
    + 'decide that long ago means imperfect, '
    + 'and go wrong, '
    + 'because both tenses describe the same past. '
    + 'The real question is how the action is being presented: '
    + 'as an event, or as a background. '
    + 'Here is a pair of sentences that shows it. '
    + 'Hier j’ai mangé du riz. '
    + 'Quand j’étais petit, je mangeais du riz. '
    + 'Both are about eating rice in the past. '
    + 'The first reports one completed event: it happened, it ended. '
    + 'The second describes what used to be the case, '
    + 'with no beginning or end in view. '
    + 'So the test is a translation test in English. '
    + 'If the natural English is I ate or I have eaten, '
    + 'use the passé composé. '
    + 'If the natural English is I used to eat or I was eating, '
    + 'use the imperfect. '
    + 'That test is reliable and it can be applied in a second, '
    + 'which is what a gap filling question needs. '
    + 'The clearest case, and the one examiners favour, '
    + 'is the interrupted action, '
    + 'because it puts both tenses in one sentence. '
    + 'Je regardais la télévision quand le téléphone a sonné. '
    + 'The watching was going on, which is the background, '
    + 'so it is imperfect. '
    + 'The ringing happened at a point and finished, '
    + 'so it is passé composé. '
    + 'Swap the tenses and the sentence says '
    + 'that the phone was ringing continuously '
    + 'and that watching television interrupted it, '
    + 'which is a different and strange claim. '
    + 'So the two tenses are not interchangeable styles; '
    + 'they change the meaning. '
    + 'Now the formation errors, which are the other half of the marks. '
    + 'The first is the choice of auxiliary. '
    + 'The être verbs must be known, '
    + 'and the memory aid most schools use '
    + 'is a list of verbs of coming and going and staying. '
    + 'Writing j’ai allé is a clear error and is marked as one. '
    + 'The second is participle agreement with être, '
    + 'which candidates omit. '
    + 'Elle est allé is wrong; elle est allée is right. '
    + 'The rule is simple once stated: '
    + 'with être the participle behaves like an adjective '
    + 'and agrees with the subject in gender and number. '
    + 'With avoir it does not agree with the subject at all, '
    + 'so elle a mangé has no extra e, '
    + 'and that contrast is the examinable point. '
    + 'The third is the imperfect stem, '
    + 'which is taken from the nous form of the present and not from the '
    + 'infinitive. '
    + 'For finir the nous form is finissons, '
    + 'so the imperfect is je finissais, '
    + 'and not je finais. '
    + 'The double s surprises candidates '
    + 'who formed the stem from the infinitive, '
    + 'and the rule exists precisely to catch that. '
    + 'Taking the stem from nous also handles '
    + 'nearly every irregular verb correctly, '
    + 'since nous faisons gives je faisais '
    + 'and nous prenons gives je prenais. '
    + 'Only être breaks it. '
    + 'What has to be written down, in a question that asks why, '
    + 'is the reason for the choice: '
    + 'the imperfect because the action was in progress, '
    + 'the passé composé because the action interrupted it. '
    + 'Naming the reason earns a mark separate from the form.',

  recap:
    'You can use the present tense of regular and irregular verbs. '
    + 'This adds two past tenses, '
    + 'and the question you ask to choose between them.',

  method: [
    'Read the sentence and ask whether it reports or describes.',
    'Try the English: I ate points to the passé composé; '
      + 'I was eating or I used to eat points to the imperfect.',
    'For an interrupted action, the background is imperfect '
      + 'and the interruption is passé composé.',
    'To form the passé composé, choose avoir or être.',
    'Form the participle: é for er, i for ir, u for re.',
    'With être, agree the participle with the subject.',
    'To form the imperfect, take the nous form of the present, '
      + 'drop ons, and add ais, ais, ait, ions, iez, aient.',
    'State the reason for your choice when the question asks why.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Put into the passé composé: je mange du riz.',
      steps: [
        'manger takes avoir.',
        'Present of avoir for je is ai.',
        'Participle of manger is mangé.',
      ],
      answer: 'J’ai mangé du riz. '
        + 'Two parts: the auxiliary in the present, '
        + 'and then the participle.',
    },
    {
      level: 4,
      ask: 'Complete and justify: '
        + 'Je ... la télévision quand le téléphone ... . '
        + 'Verbs: regarder, sonner.',
      steps: [
        'The watching was going on, so it is the background.',
        'Background takes the imperfect.',
        'The ringing happened at a point and finished.',
        'A completed event takes the passé composé.',
      ],
      answer: 'Je regardais la télévision quand le téléphone a sonné. '
        + 'The watching was in progress and forms the background, '
        + 'so the imperfect is used. '
        + 'The ringing happened at one moment and was complete, '
        + 'so the passé composé is used. '
        + 'Reversing the two would mean the phone rang continuously '
        + 'and the television interrupted it.',
    },
    {
      level: 4,
      ask: 'Why is elle est allée spelt with two e at the end, '
        + 'while elle a mangé is not?',
      steps: [
        'aller takes être as its auxiliary.',
        'With être the participle agrees with the subject.',
        'Elle is feminine singular, so add e.',
        'With avoir there is no agreement with the subject.',
      ],
      answer: 'Because aller takes être, '
        + 'and with être the past participle agrees with the subject '
        + 'in gender and number, '
        + 'so a feminine singular subject adds e. '
        + 'Manger takes avoir, '
        + 'and with avoir the participle does not agree with the '
        + 'subject at all, '
        + 'so elle a mangé is correct as it stands. '
        + 'The contrast between the two auxiliaries '
        + 'is the examinable point.',
    },
    {
      level: 5,
      ask: 'Give the imperfect of finir for je, '
        + 'and explain why je finais is wrong.',
      steps: [
        'The imperfect stem comes from the nous form of the present.',
        'Nous finissons, so the stem is finiss.',
        'Add ais for je.',
      ],
      answer: 'Je finissais. '
        + 'The imperfect stem is taken from the nous form of the '
        + 'present, '
        + 'which is nous finissons, '
        + 'so the stem is finiss and not fin. '
        + 'Je finais forms the stem from the infinitive instead, '
        + 'which is exactly the error the rule exists to prevent. '
        + 'The same rule handles irregular verbs: '
        + 'nous faisons gives je faisais '
        + 'and nous prenons gives je prenais. '
        + 'Only être is irregular, giving j’étais.',
    },
  ],

  traps: [
    {
      mistake: 'Choosing the tense by how long ago the action was.',
      why: 'Both tenses describe the same past. '
        + 'The question is whether the action is an event or a '
        + 'background.',
    },
    {
      mistake: 'Writing j’ai allé.',
      why: 'Aller is one of the verbs that take être. '
        + 'The form is je suis allé or allée.',
    },
    {
      mistake: 'Leaving the participle unagreed after être.',
      why: 'With être it agrees with the subject: elle est allée. '
        + 'With avoir it does not: elle a mangé.',
    },
    {
      mistake: 'Forming the imperfect stem from the infinitive.',
      why: 'It comes from the nous form of the present. '
        + 'Nous finissons gives je finissais, not je finais.',
    },
  ],

  extension:
    'There is a third past tense, the passé simple, '
    + 'which a learner will meet in reading '
    + 'and will almost never need to write. '
    + 'It does the work of the passé composé '
    + 'in formal written narrative: '
    + 'il alla rather than il est allé. '
    + 'It belongs to novels, histories and newspapers of record, '
    + 'and it has disappeared from speech entirely. '
    + 'So the sensible approach is to recognise it '
    + 'and to go on writing the passé composé, '
    + 'which is what the examination expects. '
    + 'Knowing that it exists '
    + 'prevents the much larger error '
    + 'of reading il alla as a form of aller you have never met '
    + 'and losing the sense of a whole passage.',

  questions: [
    {
      id: 'past-1',
      ask: 'The past participle of manger is:',
      kind: 'choice',
      options: ['mangé', 'mangi', 'mangu'],
      answer: 'mangé',
      teach: 'er gives é, ir gives i, re gives u.',
      level: 3,
    },
    {
      id: 'past-2',
      ask: 'Which auxiliary does aller take in the passé composé?',
      kind: 'choice',
      options: ['être', 'avoir', 'either'],
      answer: 'être',
      teach: 'It is one of the verbs of movement that take être, '
        + 'so je suis allé, not j’ai allé.',
      level: 3,
    },
    {
      id: 'past-3',
      ask: 'In an interrupted action, the background action takes:',
      kind: 'choice',
      options: ['the imperfect', 'the passé composé', 'the present'],
      answer: 'the imperfect',
      teach: 'The background was in progress; '
        + 'the interruption happened at a point and takes the passé '
        + 'composé.',
      level: 4,
    },
    {
      id: 'past-4',
      ask: 'Elle est ... . Which is correct for aller?',
      kind: 'choice',
      options: ['allée', 'allé', 'allées'],
      answer: 'allée',
      teach: 'With être the participle agrees with the subject, '
        + 'and elle is feminine singular.',
      level: 4,
    },
    {
      id: 'past-5',
      ask: 'The imperfect stem is taken from which form?',
      kind: 'choice',
      options: [
        'the nous form of the present',
        'the infinitive',
        'the past participle',
      ],
      answer: 'the nous form of the present',
      teach: 'Nous finissons gives je finissais. '
        + 'The rule also handles most irregular verbs correctly.',
      level: 5,
    },
  ],
})

/* ── gender, number and agreement ───────────────────────────────────────── */

teach({
  topicId: 'agreement-fr',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Every French noun is masculine or feminine, '
      + 'and the gender is a fact about the word '
      + 'rather than about the thing. '
      + 'The article, the adjective '
      + 'and sometimes the participle must match the noun '
      + 'in gender and number. '
      + 'So one decision about the noun '
      + 'controls several words in the sentence. '
      + 'Learn every noun with its article.',
    method: [
      'Find the noun and settle its gender and number.',
      'Match the article to it.',
      'Match every adjective describing it.',
      'Add e for feminine and s for plural, in that order.',
      'Check participles after être.',
    ],
  },

  idea:
    'Every French noun has a gender. '
    + 'Le livre is masculine; la table is feminine. '
    + 'The gender belongs to the word, not to the object, '
    + 'so there is nothing feminine about a table. '
    + 'The definite articles are le, la and les, '
    + 'and the indefinite are un, une and des. '
    + 'Le and la become l before a vowel or a silent h, '
    + 'as in l’école. '
    + 'Adjectives agree with the noun they describe. '
    + 'The usual pattern adds e for the feminine '
    + 'and s for the plural: '
    + 'un grand garçon, une grande fille, '
    + 'de grands garçons, de grandes filles. '
    + 'An adjective already ending in e does not add another: '
    + 'un livre rouge, une table rouge. '
    + 'Some adjectives have their own feminine forms, '
    + 'including beau and belle, vieux and vieille, '
    + 'nouveau and nouvelle, blanc and blanche, '
    + 'heureux and heureuse. '
    + 'Most adjectives follow the noun, '
    + 'but a small set comes before it, '
    + 'including grand, petit, bon, mauvais, '
    + 'beau, joli, jeune, vieux, nouveau and long. '
    + 'Past participles agree with the subject after être, '
    + 'and not after avoir. '
    + 'Possessive adjectives agree with the thing possessed '
    + 'and not with the possessor, '
    + 'so son livre is his book or her book '
    + 'and sa table is his table or her table.',

  mechanism:
    'Agreement is the largest single source of lost marks '
    + 'in a French paper, '
    + 'and the reason is that one decision has many consequences. '
    + 'Choose the noun gender wrongly '
    + 'and the article is wrong, '
    + 'every adjective is wrong, '
    + 'and any participle after être is wrong too. '
    + 'One mistake, four errors on the page. '
    + 'So the whole of the practical advice in this topic '
    + 'is about the noun, '
    + 'and it is this: '
    + 'never learn a noun by itself. '
    + 'Learn la table, not table. '
    + 'Learn le livre, not livre. '
    + 'A learner who has memorised a vocabulary list without articles '
    + 'has memorised half of each word '
    + 'and will have to guess every time, '
    + 'which is a one in two chance repeated through a whole '
    + 'composition. '
    + 'There are some patterns worth knowing, '
    + 'and they are patterns and not rules. '
    + 'Nouns ending in tion, sion, té and ette '
    + 'are generally feminine: la nation, la télévision, '
    + 'la liberté, la fourchette. '
    + 'Nouns ending in ment, age, eau and isme '
    + 'are generally masculine: le gouvernement, le village, '
    + 'le bureau, le tourisme. '
    + 'Each has exceptions, '
    + 'so the pattern is for guessing when you must '
    + 'and not a substitute for learning the article. '
    + 'The second thing to get right is the order of the additions. '
    + 'A feminine plural adjective adds e and then s: '
    + 'grande becomes grandes. '
    + 'Writing grandse or grands for a feminine plural '
    + 'is a sequencing error and loses the mark. '
    + 'Add the feminine e first, then the plural s. '
    + 'Third, the adjectives that come before the noun. '
    + 'Candidates place every adjective after the noun '
    + 'because that is the general rule, '
    + 'and then write une rouge voiture '
    + 'or un garçon grand. '
    + 'The first is wrong because rouge follows, '
    + 'and the second is wrong because grand precedes. '
    + 'The short list of preceding adjectives has to be learned, '
    + 'and it is short: '
    + 'the ones about size, age, goodness and beauty. '
    + 'It is worth noticing that some adjectives change meaning '
    + 'with position, '
    + 'so un homme grand is a tall man '
    + 'and un grand homme is a great man, '
    + 'which is a difference the examination has been known to test. '
    + 'Fourth, the possessive, '
    + 'which English speakers get wrong by habit. '
    + 'In English the possessive tells you about the owner: '
    + 'his book, her book. '
    + 'In French it tells you about the thing owned. '
    + 'Son livre is used whether the owner is male or female, '
    + 'because livre is masculine. '
    + 'Sa table is used whether the owner is male or female, '
    + 'because table is feminine. '
    + 'So a candidate asked to translate her book '
    + 'who writes sa livre '
    + 'has applied the English rule and lost the mark. '
    + 'The French question is always what is owned. '
    + 'What has to be written down, in a composition, '
    + 'is a check at the end. '
    + 'Read through once looking only at nouns and their articles, '
    + 'then once looking only at adjective endings. '
    + 'Two passes over the same page catch more agreement errors '
    + 'than reading it twice for sense, '
    + 'because agreement is a pattern and not a meaning.',

  recap:
    'You know that French nouns have gender '
    + 'and that adjectives change for it. '
    + 'This makes agreement systematic, '
    + 'and shows how one choice about the noun '
    + 'controls several words.',

  method: [
    'Identify the noun.',
    'Settle its gender from the article you learned with it.',
    'Settle its number.',
    'Choose the matching article: le, la, les, un, une, des.',
    'For each adjective, add e for feminine and then s for plural.',
    'Place the adjective after the noun unless it is in the short '
      + 'preceding list.',
    'For a possessive, agree with the thing owned, not the owner.',
    'Check participles after être for subject agreement.',
    'At the end, read the page once for articles and once for adjective '
      + 'endings.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Complete with the right form of grand: '
        + 'une ... maison and des ... maisons.',
      steps: [
        'maison is feminine.',
        'Feminine singular: add e.',
        'Feminine plural: add e then s.',
      ],
      answer: 'Une grande maison and des grandes maisons. '
        + 'The e comes first and the s second. '
        + 'Grandse and grands would both be wrong.',
    },
    {
      level: 4,
      ask: 'Translate: her book and his table. '
        + 'Explain the French rule involved.',
      steps: [
        'livre is masculine, so son.',
        'table is feminine, so sa.',
        'The possessive agrees with the thing owned.',
      ],
      answer: 'Son livre and sa table. '
        + 'In French the possessive agrees with the thing owned '
        + 'and not with the owner, '
        + 'so son livre means his book or her book '
        + 'and sa table means his table or her table. '
        + 'A candidate who writes sa livre for her book '
        + 'has applied the English rule, '
        + 'where the possessive tells you about the owner.',
    },
    {
      level: 4,
      ask: 'Correct these and explain: '
        + 'une rouge voiture, and un garçon grand.',
      steps: [
        'rouge is a colour, so it follows the noun.',
        'grand is in the short list that precedes the noun.',
      ],
      answer: 'Une voiture rouge and un grand garçon. '
        + 'Most adjectives follow the noun, '
        + 'including all colours, '
        + 'so rouge belongs after voiture. '
        + 'A short set precedes the noun, '
        + 'covering size, age, goodness and beauty, '
        + 'and grand is in it. '
        + 'Note too that un homme grand is a tall man '
        + 'while un grand homme is a great man, '
        + 'so position can change the meaning.',
    },
    {
      level: 5,
      ask: 'Correct the agreement throughout: '
        + 'Les petit filles sont allé à la nouveau école '
        + 'avec leur beau cahiers.',
      steps: [
        'filles is feminine plural, so petites.',
        'aller takes être, so the participle agrees: allées.',
        'école is feminine, and nouveau has a feminine form nouvelle.',
        'cahiers is masculine plural, so beaux.',
      ],
      answer: 'Les petites filles sont allées à la nouvelle école '
        + 'avec leurs beaux cahiers. '
        + 'Petites agrees with a feminine plural noun. '
        + 'Allées agrees with the subject because aller takes être. '
        + 'Nouvelle is the feminine form, '
        + 'and école is feminine even though it begins with a vowel, '
        + 'which is why the article is l’école when alone '
        + 'and la nouvelle école when an adjective intervenes. '
        + 'Beaux is the masculine plural of beau, '
        + 'and leurs takes s because cahiers is plural.',
    },
  ],

  traps: [
    {
      mistake: 'Learning a noun without its article.',
      why: 'Gender has to be known to choose the article, '
        + 'the adjective and the participle. '
        + 'Learn la table, not table.',
    },
    {
      mistake: 'Writing grands for a feminine plural.',
      why: 'Add the feminine e first, then the plural s: grandes.',
    },
    {
      mistake: 'Placing every adjective after the noun.',
      why: 'A short set precedes it, covering size, age, goodness and '
        + 'beauty. '
        + 'Un grand garçon, not un garçon grand.',
    },
    {
      mistake: 'Writing sa livre for her book.',
      why: 'The French possessive agrees with the thing owned. '
        + 'Livre is masculine, so son livre, whoever owns it.',
    },
  ],

  extension:
    'The participle after avoir does agree in one case, '
    + 'and it is worth knowing because it looks like an exception '
    + 'and is not. '
    + 'When a direct object comes before the verb, '
    + 'the participle agrees with it: '
    + 'les lettres que j’ai écrites, '
    + 'with an e and an s because lettres is feminine plural. '
    + 'Compare j’ai écrit les lettres, where no agreement is made. '
    + 'The principle underneath is the same as with être: '
    + 'a participle agrees with something that precedes it. '
    + 'This is the finest point of French agreement, '
    + 'it is examined only at the top of the mark range, '
    + 'and it is worth attempting only '
    + 'when the ordinary agreements are already secure.',

  questions: [
    {
      id: 'agr-1',
      ask: 'The feminine plural of grand is:',
      kind: 'choice',
      options: ['grandes', 'grands', 'grandse'],
      answer: 'grandes',
      teach: 'Add the feminine e first, then the plural s.',
      level: 3,
    },
    {
      id: 'agr-2',
      ask: 'Her book in French is:',
      kind: 'choice',
      options: ['son livre', 'sa livre', 'ses livre'],
      answer: 'son livre',
      teach: 'The possessive agrees with the thing owned. '
        + 'Livre is masculine, whoever owns it.',
      level: 4,
    },
    {
      id: 'agr-3',
      ask: 'Which adjective comes before the noun?',
      kind: 'choice',
      options: ['petit', 'rouge', 'intéressant'],
      answer: 'petit',
      teach: 'Size, age, goodness and beauty precede. '
        + 'Colours and most others follow.',
      level: 4,
    },
    {
      id: 'agr-4',
      ask: 'Nouns ending in tion are generally:',
      kind: 'choice',
      options: ['feminine', 'masculine', 'either'],
      answer: 'feminine',
      teach: 'La nation, la question. '
        + 'It is a pattern for guessing, not a substitute '
        + 'for learning the article.',
      level: 3,
    },
    {
      id: 'agr-5',
      ask: 'In elle est partie, the participle takes e because:',
      kind: 'choice',
      options: [
        'partir takes être, so the participle agrees with the subject',
        'all participles take e',
        'elle is plural',
      ],
      answer: 'partir takes être, so the participle agrees with the '
        + 'subject',
      teach: 'With avoir there is no agreement with the subject. '
        + 'The contrast is the examinable point.',
      level: 5,
    },
  ],
})

/* ── negation and questions ─────────────────────────────────────────────── */

teach({
  topicId: 'negation-questions-fr',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'French negation has two parts: '
      + 'ne before the verb and pas after it. '
      + 'Other second parts give other meanings: '
      + 'jamais for never, rien for nothing, '
      + 'personne for nobody, plus for no longer. '
      + 'A question can be made three ways: '
      + 'by rising intonation, '
      + 'by putting est-ce que in front, '
      + 'or by inverting the verb and the subject.',
    method: [
      'For a negative, put ne before the verb and the second word after '
        + 'it.',
      'Before a vowel, ne becomes n.',
      'In the perfect tense, wrap the auxiliary, not the participle.',
      'For a question, choose the register: spoken, neutral, or formal.',
      'For inversion, join the verb and pronoun with a hyphen.',
    ],
  },

  idea:
    'A French negative has two parts around the verb. '
    + 'Je ne parle pas. '
    + 'Ne goes before the verb and pas after it, '
    + 'and ne becomes n before a vowel or silent h: '
    + 'je n’ai pas. '
    + 'Replacing pas with another word changes the meaning: '
    + 'ne ... jamais for never, '
    + 'ne ... rien for nothing, '
    + 'ne ... personne for nobody, '
    + 'ne ... plus for no longer, '
    + 'ne ... que for only. '
    + 'In the perfect tense the two parts go around the auxiliary, '
    + 'not the participle: '
    + 'je n’ai pas mangé. '
    + 'After a negative, du, de la and des become de: '
    + 'je mange du pain becomes je ne mange pas de pain. '
    + 'There are three ways to form a question. '
    + 'In speech, keep the word order and raise the voice: '
    + 'tu viens? '
    + 'In neutral style, put est-ce que in front: '
    + 'est-ce que tu viens? '
    + 'In formal style, invert the verb and the subject pronoun '
    + 'and join them with a hyphen: '
    + 'viens-tu? '
    + 'Question words include qui for who, '
    + 'que or quoi for what, '
    + 'où for where, quand for when, '
    + 'pourquoi for why, comment for how, '
    + 'combien for how much or how many, '
    + 'and quel, which is an adjective and agrees with its noun.',

  mechanism:
    'The thing to hold about French negation '
    + 'is that it is a pair of brackets around the verb, '
    + 'and almost every error comes from putting '
    + 'the wrong thing inside the brackets. '
    + 'In the present tense there is only the verb, '
    + 'so je ne parle pas is straightforward. '
    + 'In the perfect tense there are two words, '
    + 'the auxiliary and the participle, '
    + 'and the brackets go around the auxiliary alone. '
    + 'Je n’ai pas mangé. '
    + 'Candidates write je n’ai mangé pas, '
    + 'putting the pas after the participle, '
    + 'because in English not comes before the main verb. '
    + 'The way to avoid it is to ask which word is conjugated. '
    + 'Ai is conjugated; mangé is not. '
    + 'The brackets go around the conjugated word, always, '
    + 'and that single rule handles every compound tense. '
    + 'The second point is the change of article after a negative, '
    + 'which candidates omit and examiners mark. '
    + 'Je mange du pain. '
    + 'Je ne mange pas de pain. '
    + 'Du has become de. '
    + 'The same happens to de la and to des: '
    + 'je n’ai pas de soeur, je ne vois pas d’amis. '
    + 'The reason is that du and des contain a sense of some, '
    + 'and in a negative there is no some to speak of. '
    + 'Writing je ne mange pas du pain '
    + 'is a common and avoidable error. '
    + 'Third, the three registers of question. '
    + 'Candidates pick one and use it everywhere, '
    + 'and the examination sometimes names the register it wants. '
    + 'The three are not stylistic variations only; '
    + 'they belong to different situations. '
    + 'Rising intonation alone is spoken and informal, '
    + 'and it should not appear in a formal letter. '
    + 'Est-ce que works everywhere and is the safe choice '
    + 'when nothing is specified. '
    + 'Inversion is the formal written form, '
    + 'and it is the one that needs the hyphen. '
    + 'Writing viens tu without the hyphen loses a mark, '
    + 'because the hyphen is part of the form. '
    + 'There is a fourth point about inversion that is examined: '
    + 'inversion is used with a pronoun subject. '
    + 'With a noun subject the usual pattern is est-ce que, '
    + 'as in est-ce que ton frère vient, '
    + 'and the fully inverted ton frère vient-il '
    + 'adds a pronoun to invert with. '
    + 'So inversion and a noun subject '
    + 'do not sit together directly. '
    + 'Fourth, quel, which is the question word candidates misuse. '
    + 'It is an adjective, so it agrees: '
    + 'quel livre, quelle maison, '
    + 'quels livres, quelles maisons. '
    + 'And it means which or what in the sense of which one, '
    + 'so what is your name is comment t’appelles-tu '
    + 'or quel est ton nom, '
    + 'and never que est ton nom. '
    + 'Finally, a point of spoken French worth knowing '
    + 'and not worth writing. '
    + 'In ordinary speech the ne is very often dropped, '
    + 'so je sais pas is heard constantly. '
    + 'A learner should recognise it, '
    + 'because otherwise a dropped ne sounds like a positive sentence, '
    + 'and should never write it, '
    + 'because the written examination requires both parts. '
    + 'What has to be written down is the pair. '
    + 'If you have written ne, '
    + 'the second word must be somewhere after the conjugated verb, '
    + 'and a sentence with only one half of the pair '
    + 'is an incomplete negative.',

  recap:
    'You can say je ne sais pas '
    + 'and ask a simple question. '
    + 'This makes the pattern general, '
    + 'and gives the three ways a question can be formed.',

  method: [
    'Find the conjugated verb.',
    'Put ne before it and the second word after it.',
    'Use n before a vowel or silent h.',
    'In a compound tense, bracket the auxiliary and leave the participle '
      + 'outside.',
    'Change du, de la and des to de after the negative.',
    'For a question, decide the register.',
    'Use est-ce que when nothing is specified.',
    'For inversion, use a pronoun subject and join with a hyphen.',
    'Agree quel with its noun.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Make negative: je parle français.',
      steps: [
        'The conjugated verb is parle.',
        'Put ne before it and pas after it.',
      ],
      answer: 'Je ne parle pas français. '
        + 'The two parts bracket the verb.',
    },
    {
      level: 4,
      ask: 'Make negative: j’ai mangé du riz. '
        + 'Explain both changes.',
      steps: [
        'The conjugated word is ai, not mangé.',
        'So the brackets go around ai.',
        'Ne becomes n before a vowel.',
        'Du becomes de after a negative.',
      ],
      answer: 'Je n’ai pas mangé de riz. '
        + 'The brackets go around the conjugated word, '
        + 'which is the auxiliary ai, '
        + 'so the participle mangé stays outside them. '
        + 'Je n’ai mangé pas is the usual error, '
        + 'copied from the English order. '
        + 'Du also becomes de after a negative, '
        + 'because du carries a sense of some '
        + 'and in a negative there is none.',
    },
    {
      level: 4,
      ask: 'Ask are you coming in three ways, '
        + 'and say where each belongs.',
      steps: [
        'Intonation only, for speech.',
        'Est-ce que, for anything.',
        'Inversion with a hyphen, for formal writing.',
      ],
      answer: 'Tu viens? with a rising voice, '
        + 'which is spoken and informal. '
        + 'Est-ce que tu viens? '
        + 'which is neutral and safe anywhere. '
        + 'Viens-tu? '
        + 'which is formal written style '
        + 'and requires the hyphen, '
        + 'since the hyphen is part of the form.',
    },
    {
      level: 5,
      ask: 'Correct and explain: '
        + 'Que est votre nom? '
        + 'and Est-ce que vient ton frère?',
      steps: [
        'Que cannot be the subject of est in this sense.',
        'Quel is the adjective needed, agreeing with nom.',
        'Est-ce que keeps normal word order.',
      ],
      answer: 'Quel est votre nom? and Est-ce que ton frère vient? '
        + 'Quel is an adjective meaning which or what, '
        + 'and it agrees with nom, which is masculine singular. '
        + 'Que est votre nom is not French. '
        + 'In the second, est-ce que is followed by normal word order, '
        + 'so the subject comes before the verb: '
        + 'est-ce que ton frère vient. '
        + 'Inverting as well is doubling the question marking. '
        + 'A full inversion with a noun subject '
        + 'needs an added pronoun: ton frère vient-il?',
    },
  ],

  traps: [
    {
      mistake: 'Writing je n’ai mangé pas.',
      why: 'The brackets go around the conjugated word, '
        + 'which is the auxiliary. '
        + 'Je n’ai pas mangé.',
    },
    {
      mistake: 'Keeping du after a negative.',
      why: 'Du, de la and des become de. '
        + 'Je ne mange pas de pain.',
    },
    {
      mistake: 'Writing an inverted question without the hyphen.',
      why: 'Viens-tu needs the hyphen, '
        + 'because it is part of the written form.',
    },
    {
      mistake: 'Using que where quel is needed.',
      why: 'Quel is an adjective and agrees with its noun. '
        + 'Quel est votre nom, not que est votre nom.',
    },
  ],

  extension:
    'Negative words can also stand as the subject, '
    + 'and then the ne stays and the order changes: '
    + 'personne ne vient, rien ne marche. '
    + 'The pattern looks odd until you see what it is doing: '
    + 'the negative word has moved to the front as the subject, '
    + 'and ne remains in its place before the verb, '
    + 'so the pair is still complete. '
    + 'Two negatives can also combine: '
    + 'je ne vois plus personne means I no longer see anybody. '
    + 'In each case the ne is the constant '
    + 'and the other words move, '
    + 'which is a good reason to think of ne '
    + 'as the real marker of negation '
    + 'and pas as only the commonest of its partners.',

  questions: [
    {
      id: 'neg-1',
      ask: 'The negative of je parle is:',
      kind: 'choice',
      options: ['je ne parle pas', 'je parle pas ne', 'je no parle'],
      answer: 'je ne parle pas',
      teach: 'Ne before the verb and pas after it.',
      level: 2,
    },
    {
      id: 'neg-2',
      ask: 'The negative of j’ai mangé is:',
      kind: 'choice',
      options: ['je n’ai pas mangé', 'je n’ai mangé pas', 'j’ai ne mangé '
        + 'pas'],
      answer: 'je n’ai pas mangé',
      teach: 'The brackets go round the conjugated word, '
        + 'which is the auxiliary ai.',
      level: 4,
    },
    {
      id: 'neg-3',
      ask: 'After a negative, du becomes:',
      kind: 'choice',
      options: ['de', 'des', 'le'],
      answer: 'de',
      teach: 'Du carries a sense of some, '
        + 'and in a negative there is none. '
        + 'Je ne mange pas de pain.',
      level: 4,
    },
    {
      id: 'neg-4',
      ask: 'Which question form is safest when no register is specified?',
      kind: 'choice',
      options: [
        'est-ce que',
        'rising intonation alone',
        'inversion',
      ],
      answer: 'est-ce que',
      teach: 'It works in speech and in writing. '
        + 'Intonation alone is informal and inversion is formal.',
      level: 3,
    },
    {
      id: 'neg-5',
      ask: 'What is your name in French is:',
      kind: 'choice',
      options: [
        'quel est votre nom',
        'que est votre nom',
        'qui est votre nom',
      ],
      answer: 'quel est votre nom',
      teach: 'Quel is an adjective agreeing with nom. '
        + 'Qui asks who and que cannot stand there.',
      level: 5,
    },
  ],
})

/* ── vocabulary and false friends ───────────────────────────────────────── */

teach({
  topicId: 'false-friends-fr',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Many French words look like English words '
      + 'because both borrowed from Latin, '
      + 'and most of those are safe. '
      + 'A false friend looks English and means something else. '
      + 'Actuellement means currently, not actually. '
      + 'The defence is the sentence: '
      + 'work the meaning out from what fits, '
      + 'then check that the look alike makes sense there.',
    method: [
      'Read the whole sentence before guessing a word.',
      'Decide what part of speech the gap needs.',
      'Use the surrounding sense to narrow the meaning.',
      'If a word looks English, test the English meaning in the '
        + 'sentence.',
      'If it does not fit, suspect a false friend.',
    ],
  },

  idea:
    'Many French and English words look alike. '
    + 'English borrowed heavily from French, '
    + 'and both drew on Latin. '
    + 'Most of those resemblances hold good. '
    + 'Important, difficile, nation, famille, '
    + 'téléphone, question and histoire all mean what they look like. '
    + 'A learner can use them, and should. '
    + 'A false friend, or faux ami, is different. '
    + 'It looks like an English word and means something else. '
    + 'These are the ones most often examined. '
    + 'Actuellement means currently, not actually. '
    + 'Assister à means to attend, not to assist. '
    + 'Attendre means to wait for, not to attend. '
    + 'Blesser means to wound, not to bless. '
    + 'Demander means to ask, not to demand. '
    + 'Journée means a day, not a journey. '
    + 'Librairie means a bookshop, not a library. '
    + 'Sensible means sensitive, not sensible. '
    + 'Rester means to stay, not to rest. '
    + 'Travailler means to work, not to travel. '
    + 'And large means wide, not large. '
    + 'Guessing from context uses the rest of the sentence. '
    + 'What part of speech does the gap need? '
    + 'What is the sentence about? '
    + 'What would make sense there? '
    + 'The two methods work together. '
    + 'Use the resemblance as a first guess, '
    + 'and let the sentence confirm it or reject it.',

  mechanism:
    'The advice candidates are usually given, '
    + 'that French words which look English cannot be trusted, '
    + 'is bad advice, '
    + 'because the great majority of them can. '
    + 'Important means important. '
    + 'Difficile means difficult. '
    + 'A learner who refuses to use the resemblance '
    + 'has thrown away the single largest advantage '
    + 'an English speaker has in learning French. '
    + 'The correct method is not refusal but testing, '
    + 'and the test is the sentence. '
    + 'Work through an example. '
    + 'Suppose the sentence is: '
    + 'Actuellement, je travaille à Accra. '
    + 'Guess that actuellement means actually '
    + 'and read the sentence again: '
    + 'actually, I work in Accra. '
    + 'That is odd. '
    + 'Actually corrects something, '
    + 'and nothing is being corrected. '
    + 'The oddness is the signal. '
    + 'Try the other obvious reading, currently, '
    + 'and the sentence is natural. '
    + 'So the guess was tested and replaced, '
    + 'and the whole process took one reading. '
    + 'That is the procedure to teach: '
    + 'guess from the resemblance, '
    + 'test against the sentence, '
    + 'and distrust the guess only when the sentence resists it. '
    + 'Now the specific traps that cost marks in a Ghanaian paper. '
    + 'The first is travailler. '
    + 'It means to work, and candidates read it as to travel '
    + 'because of the shape of the word. '
    + 'The word for to travel is voyager. '
    + 'This one error can reverse the meaning of a whole passage, '
    + 'since a passage about somebody working in a town '
    + 'becomes a passage about somebody travelling, '
    + 'and every comprehension answer after it is wrong. '
    + 'It is worth memorising on its own. '
    + 'The second is librairie and bibliothèque. '
    + 'A librairie sells books; '
    + 'a bibliothèque lends them. '
    + 'The third is attendre and assister. '
    + 'Attendre is to wait for '
    + 'and takes no preposition: j’attends le bus. '
    + 'Assister à is to attend, '
    + 'and it needs the à: j’assiste à la réunion. '
    + 'Each is the English meaning of the other, '
    + 'which is what makes the pair memorable '
    + 'and makes them a favourite of examiners. '
    + 'The fourth is demander. '
    + 'It means simply to ask, '
    + 'with none of the force of the English demand, '
    + 'so il a demandé de l’argent '
    + 'is he asked for money and not he demanded money. '
    + 'The second method, guessing from context, '
    + 'deserves its own procedure, '
    + 'because candidates guess from the word alone '
    + 'and then give up. '
    + 'Three questions, in order. '
    + 'What part of speech does the gap need? '
    + 'If the word follows je, it is a verb; '
    + 'if it follows un or une, it is a noun; '
    + 'if it follows a noun, it is probably an adjective. '
    + 'That alone eliminates most wrong answers in a multiple choice. '
    + 'What is the sentence about? '
    + 'A sentence about a market narrows the field '
    + 'to buying, selling, prices and goods. '
    + 'And what would make the sentence true or sensible? '
    + 'A sentence that says il a mangé and then names a thing '
    + 'requires something edible. '
    + 'Applied together these three questions '
    + 'often fix a word a learner has never seen, '
    + 'which is exactly what the comprehension paper is testing. '
    + 'What has to be written down, in a comprehension answer, '
    + 'is an answer that makes sense in the passage. '
    + 'If your translation of a sentence is strange, '
    + 'the usual cause is a false friend '
    + 'rather than a strange original, '
    + 'and reading the sentence once more '
    + 'with that suspicion in mind '
    + 'recovers more marks than any other single habit.',

  recap:
    'You have met French words that look like English ones '
    + 'and used them. '
    + 'This says when that works, '
    + 'which words betray you, '
    + 'and how to work out a word you have never seen.',

  method: [
    'Read the whole sentence first.',
    'Decide what part of speech the gap needs.',
    'Use the topic of the sentence to narrow the meaning.',
    'Ask what would make the sentence sensible.',
    'If the word looks English, try the English meaning.',
    'Read the sentence again with that meaning in place.',
    'If the sentence becomes strange, suspect a false friend.',
    'Check your final answer makes sense in the passage.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What does travailler mean, '
        + 'and what is the word for to travel?',
      steps: [
        'The resemblance to travel is misleading.',
      ],
      answer: 'Travailler means to work. '
        + 'To travel is voyager. '
        + 'This is the most costly false friend in the paper, '
        + 'because misreading it reverses the sense of a whole passage '
        + 'and every comprehension answer after it goes wrong.',
    },
    {
      level: 4,
      ask: 'Translate: Actuellement, je travaille à Kumasi. '
        + 'Show how you tested your reading.',
      steps: [
        'Guess actuellement as actually.',
        'Read the sentence: actually, I work in Kumasi.',
        'Actually corrects something, and nothing is being corrected.',
        'Try currently, and the sentence is natural.',
      ],
      answer: 'Currently I work in Kumasi. '
        + 'The guess that actuellement means actually '
        + 'was tested against the sentence and rejected, '
        + 'because actually corrects a previous statement '
        + 'and nothing here is being corrected. '
        + 'Currently fits, and travailler means to work. '
        + 'The method is to guess from the resemblance '
        + 'and then let the sentence confirm or reject it.',
    },
    {
      level: 4,
      ask: 'Distinguish attendre from assister à, '
        + 'and librairie from bibliothèque.',
      steps: [
        'Each pair swaps the English meanings.',
      ],
      answer: 'Attendre means to wait for and takes no preposition: '
        + 'j’attends le bus. '
        + 'Assister à means to attend and needs the à: '
        + 'j’assiste à la réunion. '
        + 'Each is the English sense of the other, '
        + 'which is why examiners like the pair. '
        + 'A librairie is a bookshop, which sells books. '
        + 'A bibliothèque is a library, which lends them.',
    },
    {
      level: 5,
      ask: 'You meet an unknown word in this sentence: '
        + 'Au marché, ma mère a acheté des ... pour le repas. '
        + 'Explain how you would narrow its meaning.',
      steps: [
        'After des it is a plural noun.',
        'The setting is a market.',
        'It was bought for a meal.',
        'So it is a foodstuff, bought at a market, in the plural.',
      ],
      answer: 'The word follows des, so it is a plural noun. '
        + 'The sentence is set at a market, '
        + 'and the thing was bought for a meal, '
        + 'so it must be a foodstuff. '
        + 'That narrows it to something like tomatoes, '
        + 'onions, fish or plantains, '
        + 'and in a multiple choice question '
        + 'those three steps eliminate every option '
        + 'that is not a plural food noun. '
        + 'Part of speech, topic, and sense, '
        + 'applied in that order, '
        + 'is the procedure the comprehension paper is testing.',
    },
  ],

  traps: [
    {
      mistake: 'Refusing to trust any word that looks English.',
      why: 'Most such words are reliable, '
        + 'and refusing them throws away the biggest advantage '
        + 'an English speaker has. '
        + 'Test the guess instead.',
    },
    {
      mistake: 'Reading travailler as to travel.',
      why: 'It means to work. '
        + 'To travel is voyager, '
        + 'and this error can reverse a whole passage.',
    },
    {
      mistake: 'Confusing attendre with assister à.',
      why: 'Attendre is to wait for; assister à is to attend. '
        + 'Each is the English meaning of the other.',
    },
    {
      mistake: 'Accepting a translation that makes no sense.',
      why: 'A strange English version usually means a false friend '
        + 'rather than a strange original. '
        + 'Read it again with that suspicion.',
    },
  ],

  extension:
    'False friends exist because words drift, '
    + 'and knowing how they drifted makes them easier to hold. '
    + 'Demander and demand came from the same Latin verb '
    + 'meaning to ask. '
    + 'French kept the plain meaning '
    + 'while English hardened it into an insistent asking. '
    + 'Sensible and sensible both come from a root about feeling: '
    + 'French kept sensitive, '
    + 'while English moved to having good judgement. '
    + 'So a false friend is usually two descendants of one ancestor '
    + 'that went different ways, '
    + 'not a coincidence. '
    + 'That also explains why the French meaning is often the older '
    + 'one, '
    + 'and why an old English text '
    + 'can use a word in the French sense.',

  questions: [
    {
      id: 'ff-1',
      ask: 'Travailler means:',
      kind: 'choice',
      options: ['to work', 'to travel', 'to try'],
      answer: 'to work',
      teach: 'To travel is voyager. '
        + 'This is the costliest false friend in the paper.',
      level: 3,
    },
    {
      id: 'ff-2',
      ask: 'Actuellement means:',
      kind: 'choice',
      options: ['currently', 'actually', 'actively'],
      answer: 'currently',
      teach: 'Test the English guess against the sentence. '
        + 'Actually corrects something, and usually nothing is being '
        + 'corrected.',
      level: 4,
    },
    {
      id: 'ff-3',
      ask: 'A librairie is a:',
      kind: 'choice',
      options: ['bookshop', 'library', 'liberty'],
      answer: 'bookshop',
      teach: 'A library is a bibliothèque, which lends. '
        + 'A librairie sells.',
      level: 4,
    },
    {
      id: 'ff-4',
      ask: 'Which means to wait for?',
      kind: 'choice',
      options: ['attendre', 'assister à', 'rester'],
      answer: 'attendre',
      teach: 'Assister à is to attend and rester is to stay. '
        + 'Each pair swaps the English senses.',
      level: 4,
    },
    {
      id: 'ff-5',
      ask: 'The first question to ask about an unknown word in a gap is:',
      kind: 'choice',
      options: [
        'what part of speech the gap needs',
        'whether it looks English',
        'how long the word is',
      ],
      answer: 'what part of speech the gap needs',
      teach: 'Part of speech, then topic, then sense. '
        + 'That order eliminates most wrong options at once.',
      level: 5,
    },
  ],
})

/* ── the francophone world ──────────────────────────────────────────────── */

teach({
  topicId: 'francophone-culture',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Ghana is bordered on three sides by French speaking countries: '
      + 'Côte d’Ivoire to the west, '
      + 'Burkina Faso to the north, '
      + 'and Togo to the east. '
      + 'French is the official language of most ECOWAS members. '
      + 'So French is not a distant subject for Ghana. '
      + 'It is the language of the nearest markets, '
      + 'the nearest borders and much regional business.',
    method: [
      'Name the country, its capital and its position relative to '
        + 'Ghana.',
      'Say why French is its official language.',
      'Distinguish the official language from the languages people '
        + 'speak.',
      'Give a practical consequence for Ghana.',
      'Use the French names of the countries where you can.',
    ],
  },

  idea:
    'French is an official language in about half the countries '
    + 'of West Africa, '
    + 'and in three of Ghana four neighbours by land and sea. '
    + 'La Côte d’Ivoire lies to the west, '
    + 'with its political capital at Yamoussoukro '
    + 'and its largest city and economic centre at Abidjan. '
    + 'Le Burkina Faso lies to the north, '
    + 'with its capital at Ouagadougou. '
    + 'Le Togo lies to the east, with its capital at Lomé, '
    + 'and beyond it le Bénin, with Porto Novo and Cotonou. '
    + 'Other francophone states in the region include '
    + 'le Mali with Bamako, '
    + 'le Sénégal with Dakar, '
    + 'le Niger with Niamey, '
    + 'and la Guinée with Conakry. '
    + 'French is official in these countries '
    + 'because they were colonised by France, '
    + 'and at independence the colonial language '
    + 'was retained for administration, education and law. '
    + 'It is an official language rather than a mother tongue: '
    + 'most people speak one or more African languages at home, '
    + 'including Mooré, Dioula, Wolof, Bambara, Ewe and Fula, '
    + 'and use French in school, in government and in formal business. '
    + 'La Francophonie is the association of French speaking states. '
    + 'ECOWAS, the regional body to which Ghana belongs, '
    + 'works in English, French and Portuguese, '
    + 'and most of its member states are francophone. '
    + 'The CFA franc is the shared currency '
    + 'of most francophone West African states.',

  mechanism:
    'The reason this topic is in a Ghanaian syllabus '
    + 'is geography rather than culture in general, '
    + 'and an answer that says so is answering the question. '
    + 'Ghana has land borders with three countries '
    + 'and French is the official language of all three. '
    + 'Follow the consequences. '
    + 'A trader taking tomatoes to Lomé, '
    + 'onions coming south from Burkina Faso, '
    + 'cocoa moving across the Ivorian border, '
    + 'a lorry driver clearing customs at Aflao or Paga: '
    + 'each of those transactions is conducted in French '
    + 'at the other end. '
    + 'So French is a trade skill in Ghana '
    + 'in a way it is not in most English speaking countries, '
    + 'and that is the strongest answer '
    + 'to a question about why French matters here. '
    + 'The same holds for employment. '
    + 'ECOWAS institutions, regional banks, '
    + 'the airlines, the hotels and the aid organisations '
    + 'all need staff who can work in both languages, '
    + 'and in a region where most states are francophone '
    + 'a Ghanaian with good French is unusually employable. '
    + 'Now the distinction that candidates most often miss, '
    + 'and that earns the most marks. '
    + 'French is an official language in these countries. '
    + 'It is not, for most people, a first language. '
    + 'A market woman in Ouagadougou '
    + 'is likely to speak Mooré at home and in the market, '
    + 'and French at a bank or a government office. '
    + 'A farmer in northern Côte d’Ivoire may speak Dioula. '
    + 'So an answer that says the people of Burkina Faso speak French '
    + 'is wrong in a way that matters, '
    + 'and an answer that says French is the official language '
    + 'while most people speak African languages at home '
    + 'is both correct and worth more. '
    + 'It also explains something a traveller notices: '
    + 'that the French spoken across a border '
    + 'may be easier to follow than expected, '
    + 'because it is being spoken by people '
    + 'for whom it is also a second language. '
    + 'The third point is why the language was kept at all. '
    + 'At independence each new state faced the same problem: '
    + 'many languages inside one border, '
    + 'no one of which all the others would accept as national, '
    + 'and administration already running in the colonial language. '
    + 'Keeping French was the practical choice, '
    + 'and it is the same reason Ghana kept English. '
    + 'Stating that parallel '
    + 'shows a candidate understands the situation '
    + 'rather than reciting it, '
    + 'and it is an honest account: '
    + 'the choice had costs, '
    + 'since it privileges those who complete schooling, '
    + 'and it had a clear administrative logic. '
    + 'Fourth, the names. '
    + 'The examination expects the French forms of the countries '
    + 'and their articles: '
    + 'la Côte d’Ivoire, le Burkina Faso, le Sénégal, le Mali, '
    + 'la Guinée, le Niger, le Togo, le Bénin. '
    + 'The preposition changes with the gender: '
    + 'je vais au Togo, je vais en Côte d’Ivoire, '
    + 'au for masculine and en for feminine. '
    + 'That is a grammar point hidden inside a culture topic, '
    + 'and it is examined. '
    + 'What has to be written down is the practical consequence. '
    + 'Not that Togo is francophone, '
    + 'but that Togo is francophone, '
    + 'so a Ghanaian trader at Aflao '
    + 'needs French to negotiate a price, '
    + 'and that is the point of learning it.',

  recap:
    'You know Ghana has neighbours where French is spoken. '
    + 'This names them with their capitals, '
    + 'explains why French is official there, '
    + 'and says what follows for Ghana.',

  method: [
    'Name the country in French, with its article.',
    'Give its capital and its position relative to Ghana.',
    'Say that French is official because of French colonial rule.',
    'Add that most people speak African languages at home.',
    'Give a practical consequence for trade, work or travel.',
    'Use au for a masculine country and en for a feminine one.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Name Ghana three land neighbours in French, '
        + 'with their capitals and their positions.',
      steps: [
        'West, north, east.',
      ],
      answer: 'La Côte d’Ivoire to the west, '
        + 'with Yamoussoukro as political capital '
        + 'and Abidjan as its largest city. '
        + 'Le Burkina Faso to the north, with Ouagadougou. '
        + 'Le Togo to the east, with Lomé. '
        + 'French is the official language of all three.',
    },
    {
      level: 4,
      ask: 'Why is French the official language of Burkina Faso, '
        + 'and do most people there speak it at home?',
      steps: [
        'It was a French colony.',
        'The colonial language was retained at independence.',
        'Most people speak African languages at home.',
      ],
      answer: 'Because the territory was colonised by France, '
        + 'and at independence the colonial language was retained '
        + 'for administration, education and law. '
        + 'Most people do not speak French at home. '
        + 'They speak African languages, Mooré among them, '
        + 'and use French in school, in government offices '
        + 'and in formal business. '
        + 'So French is an official language there '
        + 'rather than a mother tongue, '
        + 'which is the same relation English has to Ghana.',
    },
    {
      level: 4,
      ask: 'Give three practical reasons why French matters to a '
        + 'Ghanaian.',
      steps: [
        'Trade across three borders.',
        'Employment in regional bodies.',
        'Travel and study.',
      ],
      answer: 'Trade: Ghana three land neighbours are francophone, '
        + 'so a trader at Aflao, Paga or Elubo '
        + 'negotiates in French at the other end. '
        + 'Employment: most ECOWAS member states are francophone, '
        + 'so regional institutions, banks, airlines and aid '
        + 'organisations '
        + 'need staff who work in both languages, '
        + 'and a Ghanaian with good French is unusually employable. '
        + 'Travel and study: the nearest large cities to much of Ghana, '
        + 'including Lomé, Ouagadougou and Abidjan, '
        + 'are French speaking.',
    },
    {
      level: 5,
      ask: 'Complete and explain: je vais ... Togo '
        + 'and je vais ... Côte d’Ivoire.',
      steps: [
        'Le Togo is masculine, so au.',
        'La Côte d’Ivoire is feminine, so en.',
      ],
      answer: 'Je vais au Togo and je vais en Côte d’Ivoire. '
        + 'The preposition depends on the gender of the country. '
        + 'Masculine countries take au, as le Togo, le Mali, le Sénégal. '
        + 'Feminine countries take en, '
        + 'as la Côte d’Ivoire, la Guinée, la France. '
        + 'This is a grammar point inside a culture topic, '
        + 'and it is examined, '
        + 'which is one reason the countries should be learned '
        + 'with their articles.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the people of Burkina Faso speak French.',
      why: 'French is the official language. '
        + 'Most people speak African languages at home '
        + 'and use French in formal settings.',
    },
    {
      mistake: 'Treating the topic as general information.',
      why: 'The examinable point is the consequence for Ghana: '
        + 'three francophone borders, trade, and regional employment.',
    },
    {
      mistake: 'Learning the countries without their articles.',
      why: 'The preposition depends on the gender: '
        + 'au Togo but en Côte d’Ivoire.',
    },
    {
      mistake: 'Naming Abidjan as the capital of Côte d’Ivoire.',
      why: 'Yamoussoukro is the political capital. '
        + 'Abidjan is the largest city and economic centre.',
    },
  ],

  extension:
    'Most francophone West African states share a currency. '
    + 'It is the CFA franc. '
    + 'A Ghanaian notices the effect directly. '
    + 'A shared currency removes the cost of changing money. '
    + 'So trade among those states is simpler '
    + 'than trade with Ghana, which uses the cedi. '
    + 'It also means their inflation and exchange rate '
    + 'are managed together. '
    + 'ECOWAS has discussed one currency for the whole region '
    + 'for decades. '
    + 'The argument cuts both ways. '
    + 'A shared currency would make regional trade cheaper. '
    + 'It would also take from each country '
    + 'the power to manage its own exchange rate. '
    + 'That is a real cost when economies differ as much as these do.',

  questions: [
    {
      id: 'fr-c1',
      ask: 'Which country lies to the north of Ghana?',
      kind: 'choice',
      options: ['le Burkina Faso', 'le Togo', 'la Côte d’Ivoire'],
      answer: 'le Burkina Faso',
      teach: 'Togo is east and Côte d’Ivoire west. '
        + 'All three are francophone.',
      level: 2,
    },
    {
      id: 'fr-c2',
      ask: 'The capital of Burkina Faso is:',
      kind: 'choice',
      options: ['Ouagadougou', 'Bamako', 'Niamey'],
      answer: 'Ouagadougou',
      teach: 'Bamako is in Mali and Niamey in Niger.',
      level: 3,
    },
    {
      id: 'fr-c3',
      ask: 'French is best described in these countries as:',
      kind: 'choice',
      options: [
        'an official language',
        'the mother tongue of most people',
        'a language used only by visitors',
      ],
      answer: 'an official language',
      teach: 'Most people speak African languages at home, '
        + 'just as in Ghana with English.',
      level: 4,
    },
    {
      id: 'fr-c4',
      ask: 'Je vais ... Côte d’Ivoire. Which preposition fits?',
      kind: 'choice',
      options: ['en', 'au', 'à'],
      answer: 'en',
      teach: 'La Côte d’Ivoire is feminine, so en. '
        + 'Masculine countries take au, as au Togo.',
      level: 5,
    },
    {
      id: 'fr-c5',
      ask: 'The political capital of Côte d’Ivoire is:',
      kind: 'choice',
      options: ['Yamoussoukro', 'Abidjan', 'Lomé'],
      answer: 'Yamoussoukro',
      teach: 'Abidjan is the largest city and economic centre, '
        + 'which is why candidates name it by mistake.',
      level: 4,
    },
  ],
})
