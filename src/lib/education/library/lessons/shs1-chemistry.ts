/**
 * Stored lessons for SHS 1 Elective Chemistry.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── How this differs from the General Science treatment ───────────────────
 *
 * General Science asks what the atom is made of and how two elements join.
 * Chemistry asks for the evidence and the numbers. Atomic structure here
 * carries the experiments that forced the nuclear model and the sub-shell
 * notation that the simple 2, 8, 8 rule stands in for. Periodicity is not
 * the layout of the table but the trends across it, each explained by the
 * same two competing causes. Bonding adds the shape of the molecule, which
 * the General Science version does not attempt. And the mole arrives, which
 * is the idea that turns chemistry from description into calculation.
 *
 * ── The thread ────────────────────────────────────────────────────────────
 *
 * All four topics rest on one thing: where the electrons are. The evidence
 * for the nuclear atom tells us the electrons are outside and almost all the
 * space is empty. Periodicity is the outer electrons felt through a
 * changing nuclear pull. Bonding is what those outer electrons do when two
 * atoms meet, and the shape follows from the pairs repelling. The mole is
 * the bridge from that picture to a balance that weighs in grams.
 *
 * ── What has to be written down ───────────────────────────────────────────
 *
 * Chemistry marking schemes pay for named reasons. Nuclear charge,
 * shielding, atomic radius, lone pair repulsion: these are the words the
 * marks hang on, and a correct answer phrased without them scores less than
 * a partial answer that uses them. Each lesson says which words those are.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── atomic structure ────────────────────────────────────────────────────── */

teach({
  topicId: 'atomic-structure-chem',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An atom is a tiny dense nucleus of protons and neutrons '
      + 'with electrons in shells around it. '
      + 'The gold foil experiment showed this: '
      + 'most alpha particles passed straight through, '
      + 'so most of the atom is empty space, '
      + 'and a very few bounced back, '
      + 'so the positive charge is concentrated. '
      + 'Electrons fill sub-shells in the order 1s, 2s, 2p, 3s, 3p, 4s, 3d.',
    method: [
      'Protons equal the atomic number.',
      'Neutrons equal the mass number minus the atomic number.',
      'Fill the sub-shells in order of energy, '
        + 'with 2 in an s and 6 in a p.',
      'Remember that 4s fills before 3d.',
      'For an ion, add or remove electrons from the outermost sub-shell.',
    ],
  },

  idea:
    'An atom has a nucleus containing protons and neutrons, '
    + 'with electrons occupying shells around it. '
    + 'A proton has a charge of plus one and a relative mass of one. '
    + 'A neutron has no charge and a relative mass of one. '
    + 'An electron has a charge of minus one '
    + 'and a mass of about one over 1840 of a proton. '
    + 'The atomic number is the number of protons, '
    + 'and the mass number is protons plus neutrons. '
    + 'Isotopes are atoms of one element with different neutron numbers. '
    + 'The relative atomic mass is the weighted mean of the isotope masses, '
    + 'measured against carbon 12. '
    + 'The evidence for this model came from scattering experiments. '
    + 'When alpha particles were fired at thin gold foil, '
    + 'most went straight through, '
    + 'showing that the atom is mostly empty space. '
    + 'A small number were deflected through large angles, '
    + 'and a very few came almost straight back, '
    + 'showing that the positive charge and nearly all the mass '
    + 'sit in a very small nucleus. '
    + 'Within a shell, electrons occupy sub-shells. '
    + 'An s sub-shell holds 2 electrons and a p sub-shell holds 6, '
    + 'and a d sub-shell holds 10. '
    + 'They fill in order of increasing energy: '
    + '1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p. '
    + 'So the configuration of calcium, with 20 electrons, '
    + 'is 1s2 2s2 2p6 3s2 3p6 4s2.',

  mechanism:
    'The scattering experiment is worth following closely, '
    + 'because the examination asks what each observation shows '
    + 'and not what the apparatus looked like. '
    + 'Three observations, three conclusions, and they pair up exactly. '
    + 'Most alpha particles passed through undeflected. '
    + 'An alpha particle is positive and heavy, '
    + 'so if the atom were a solid lump of positive matter '
    + 'nothing could pass. '
    + 'Therefore the atom is mostly empty space. '
    + 'Some were deflected through small angles. '
    + 'Therefore there is a positive charge in there '
    + 'repelling them as they pass. '
    + 'A very few, about one in eight thousand, bounced almost straight '
    + 'back. '
    + 'A heavy fast particle only reverses '
    + 'if it meets something much heavier and strongly charged. '
    + 'Therefore the positive charge and almost all the mass '
    + 'are concentrated in a tiny volume, the nucleus. '
    + 'Learn it as three pairs. '
    + 'A question asking what the deflection of a few particles shows '
    + 'is not answered by saying the atom has a nucleus; '
    + 'it is answered by saying the positive charge is concentrated, '
    + 'because a concentrated charge is what produces a large deflection. '
    + 'Now the sub-shells, where the real errors live. '
    + 'The first is the 4s and 3d order. '
    + 'The 4s sub-shell is lower in energy than 3d, '
    + 'so it fills first, '
    + 'even though its shell number is larger. '
    + 'Potassium with 19 electrons ends 4s1, not 3d1. '
    + 'This is why the transition metals begin at scandium and not earlier, '
    + 'and it is examined almost every year. '
    + 'The second is removing electrons to make an ion. '
    + 'Electrons are removed from the outermost occupied sub-shell, '
    + 'which for a transition metal is 4s and not 3d, '
    + 'even though 3d filled later. '
    + 'So iron, 1s2 2s2 2p6 3s2 3p6 3d6 4s2, '
    + 'loses the two 4s electrons to become the iron two ion, '
    + 'ending 3d6. '
    + 'Writing 3d4 4s2 is the standard wrong answer. '
    + 'The third is the relative atomic mass of an element with isotopes. '
    + 'Chlorine is 75 per cent chlorine 35 and 25 per cent chlorine 37. '
    + 'The relative atomic mass is 0.75 times 35 plus 0.25 times 37, '
    + 'which is 35.5. '
    + 'Taking the plain average of 35 and 37 gives 36, '
    + 'which is wrong because the two are not equally abundant. '
    + 'The word weighted is doing the work, and the working must show it. '
    + 'What has to be written down is the configuration in full, '
    + 'sub-shell by sub-shell, with the electron counts as superscripts, '
    + 'and for an ion a line saying which sub-shell the electrons came from. '
    + 'For the scattering experiment, '
    + 'pair each observation with its conclusion on the same line. '
    + 'The experiment itself needs a radioactive source '
    + 'and no school will have one. '
    + 'Nothing examinable is lost: '
    + 'the observations are given in the question '
    + 'and the marks are for the inferences, which are reasoning.',

  recap:
    'You have met the atom as protons, neutrons and electrons, '
    + 'with electrons in shells of 2, 8 and 8. '
    + 'This gives the evidence for that picture '
    + 'and divides each shell into sub-shells.',

  method: [
    'Write the atomic number and the mass number.',
    'Protons equal the atomic number; electrons equal it for a neutral '
      + 'atom.',
    'Neutrons equal the mass number minus the atomic number.',
    'Fill sub-shells in the order 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p.',
    'Put 2 in each s, 6 in each p, 10 in each d.',
    'For a positive ion, remove electrons from the outermost sub-shell '
      + 'first.',
    'For relative atomic mass, multiply each isotope mass by its '
      + 'abundance and add.',
    'For a scattering question, pair each observation with its conclusion.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Write the electron configuration of sulphur, atomic number 16.',
      steps: [
        'Fill 1s with 2, leaving 14.',
        'Fill 2s with 2, leaving 12.',
        'Fill 2p with 6, leaving 6.',
        'Fill 3s with 2, leaving 4.',
        'Put the last 4 in 3p.',
      ],
      answer: '1s2 2s2 2p6 3s2 3p4. '
        + 'Six electrons in the third shell, so sulphur is in group 6.',
    },
    {
      level: 4,
      ask: 'Chlorine exists as 75 per cent chlorine 35 and 25 per cent '
        + 'chlorine 37. '
        + 'Find its relative atomic mass.',
      steps: [
        'Multiply each mass by its fraction.',
        '0.75 times 35 equals 26.25.',
        '0.25 times 37 equals 9.25.',
        'Add.',
      ],
      answer: '35.5. '
        + 'The plain average of 35 and 37 is 36, '
        + 'which is wrong because the isotopes are not equally abundant.',
    },
    {
      level: 4,
      ask: 'Write the configuration of potassium, atomic number 19, '
        + 'and explain why the last electron does not enter the 3d '
        + 'sub-shell.',
      steps: [
        'Fill to 3p6, which uses 18 electrons.',
        'The next sub-shell by energy is 4s, not 3d.',
        'So the nineteenth electron enters 4s.',
      ],
      answer: '1s2 2s2 2p6 3s2 3p6 4s1. '
        + 'The 4s sub-shell is lower in energy than 3d, '
        + 'so it fills first even though its shell number is higher. '
        + 'That is why the d block begins at scandium.',
    },
    {
      level: 5,
      ask: 'State the three main observations of the alpha scattering '
        + 'experiment '
        + 'and the conclusion drawn from each.',
      steps: [
        'Most particles passed through undeflected.',
        'Some were deflected through small angles.',
        'A very few returned along their path.',
        'Pair each with what it rules out.',
      ],
      answer: 'Most alpha particles passed straight through, '
        + 'so the atom is mostly empty space. '
        + 'Some were deflected through small angles, '
        + 'so there is a positive charge inside repelling them. '
        + 'A very few, about one in eight thousand, were turned back, '
        + 'so the positive charge and almost all the mass '
        + 'are concentrated in a very small nucleus. '
        + 'Each conclusion follows from its own observation, '
        + 'and the marks are awarded in those pairs.',
    },
  ],

  traps: [
    {
      mistake: 'Filling 3d before 4s.',
      why: '4s is lower in energy. '
        + 'Potassium ends 4s1, which is why the transition metals '
        + 'start at scandium.',
    },
    {
      mistake: 'Removing 3d electrons before 4s when forming an ion.',
      why: 'Electrons leave the outermost sub-shell. '
        + 'Iron two is 3d6, not 3d4 4s2.',
    },
    {
      mistake: 'Taking the plain average of two isotope masses.',
      why: 'It is a weighted mean. '
        + 'Multiply each mass by its abundance before adding.',
    },
    {
      mistake: 'Answering a scattering question with the atom has a '
        + 'nucleus.',
      why: 'Each observation has its own conclusion. '
        + 'A large deflection shows the charge is concentrated.',
    },
  ],

  extension:
    'An emission spectrum is the direct evidence for shells. '
    + 'Heat a gas and it gives out light at a few sharp wavelengths, '
    + 'not a continuous band. '
    + 'Each line is an electron falling from one fixed energy level to '
    + 'another, '
    + 'and the energy of the photon is the difference between the two '
    + 'levels. '
    + 'If the electron could have any energy there would be no lines. '
    + 'So the lines prove the levels are fixed, '
    + 'and the pattern of lines is unique to each element, '
    + 'which is how an astronomer can say what a star is made of '
    + 'without going there.',

  questions: [
    {
      id: 'atch-1',
      ask: 'The electron configuration of oxygen, atomic number 8, is:',
      kind: 'choice',
      options: ['1s2 2s2 2p4', '1s2 2s4 2p2', '1s2 2s2 2p6'],
      answer: '1s2 2s2 2p4',
      teach: '2 plus 2 plus 4 is 8. '
        + 'An s sub-shell holds only 2, and 2p6 would be 10 electrons.',
      level: 3,
    },
    {
      id: 'atch-2',
      ask: 'Which sub-shell fills before 3d?',
      kind: 'choice',
      options: ['4s', '4p', '3p only'],
      answer: '4s',
      teach: '4s is lower in energy than 3d, '
        + 'so it fills first despite the higher shell number.',
      level: 4,
    },
    {
      id: 'atch-3',
      ask: 'An element is 80 per cent mass 10 and 20 per cent mass 11. '
        + 'Its relative atomic mass is:',
      kind: 'numeric',
      options: [],
      answer: '10.2',
      teach: '0.8 times 10 plus 0.2 times 11, '
        + 'which is 8 plus 2.2.',
      level: 4,
    },
    {
      id: 'atch-4',
      ask: 'That most alpha particles passed through the foil undeflected '
        + 'shows that:',
      kind: 'choice',
      options: [
        'the atom is mostly empty space',
        'the nucleus is positive',
        'electrons have little mass',
      ],
      answer: 'the atom is mostly empty space',
      teach: 'The concentrated positive charge is shown by the few that '
        + 'bounced back, '
        + 'not by the many that passed through.',
      level: 5,
    },
    {
      id: 'atch-5',
      ask: 'How many neutrons are in an atom of mass number 56 '
        + 'and atomic number 26?',
      kind: 'numeric',
      options: [],
      answer: '30',
      teach: '56 minus 26. '
        + 'That atom is iron.',
      level: 3,
    },
  ],
})

/* ── periodicity ─────────────────────────────────────────────────────────── */

teach({
  topicId: 'periodicity-chem',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Across a period the nuclear charge rises '
      + 'while the electrons stay in the same shell. '
      + 'So the pull on the outer electrons grows: '
      + 'atomic radius falls, '
      + 'and ionisation energy and electronegativity rise. '
      + 'Down a group another shell is added, '
      + 'so the radius grows and the pull weakens, '
      + 'and both those quantities fall.',
    method: [
      'Ask whether you are moving across a period or down a group.',
      'Across: more protons, same shell, so a stronger pull.',
      'Down: another shell and more shielding, so a weaker pull.',
      'State the trend, then the cause, naming nuclear charge or '
        + 'shielding.',
      'Explain any exception by the sub-shell it involves.',
    ],
  },

  idea:
    'Periodicity is the pattern that repeats '
    + 'as the elements are taken in order of atomic number. '
    + 'Three properties matter here. '
    + 'The atomic radius is the distance from the nucleus '
    + 'to the outer electron. '
    + 'The first ionisation energy is the energy needed '
    + 'to take one electron from a neutral gaseous atom. '
    + 'Electronegativity is how strongly an atom in a bond '
    + 'pulls the shared electrons to itself. '
    + 'Now go across a period, from left to right. '
    + 'The number of protons rises. '
    + 'The outer electrons stay in the same shell. '
    + 'So the pull on them grows. '
    + 'The radius falls. '
    + 'Ionisation energy rises, '
    + 'because the electron is held more tightly. '
    + 'Electronegativity rises too, for the same reason. '
    + 'Now go down a group. '
    + 'Each element has one more shell. '
    + 'The outer electrons sit further out. '
    + 'Inner electrons shield them from the nucleus. '
    + 'So the radius grows, '
    + 'and both ionisation energy and electronegativity fall. '
    + 'Metallic character falls across a period '
    + 'and grows down a group. '
    + 'That is because a metal is an element '
    + 'that gives electrons up readily.',

  mechanism:
    'Every trend in this topic comes from one tug of war, '
    + 'so it is worth stating once and then applied everywhere. '
    + 'Two things decide how tightly an outer electron is held. '
    + 'One is the nuclear charge, which pulls it in. '
    + 'The other is the distance and the shielding by inner electrons, '
    + 'which weaken that pull. '
    + 'Across a period only the first changes: '
    + 'a proton is added each time, and the electron goes into the same '
    + 'shell, '
    + 'so the pull wins and everything tightens. '
    + 'Down a group the second changes: '
    + 'a whole new shell appears, with its own inner electrons shielding, '
    + 'so distance wins and everything loosens. '
    + 'That is the entire topic, and it is one sentence per direction. '
    + 'Do not memorise six trends; derive them from the tug of war. '
    + 'Here is how marks are actually lost. '
    + 'The first is stating a trend with no cause. '
    + 'Atomic radius decreases across a period earns one mark out of three. '
    + 'The marks are for: the radius decreases, '
    + 'because the nuclear charge increases, '
    + 'while the electrons remain in the same shell with similar shielding. '
    + 'Three clauses, three marks, '
    + 'and the words nuclear charge and shielding are the ones being looked '
    + 'for. '
    + 'The second is ionic radius against atomic radius. '
    + 'A positive ion is always smaller than its atom, '
    + 'because the whole outer shell has usually been removed. '
    + 'A negative ion is always larger than its atom, '
    + 'because the added electrons increase the repulsion between electrons '
    + 'while the nuclear charge has not changed. '
    + 'Learners apply the across a period rule to ions '
    + 'and get the comparison backwards. '
    + 'The third is the definition of ionisation energy, '
    + 'which carries marks of its own and must be exact. '
    + 'It is the energy to remove one mole of electrons '
    + 'from one mole of gaseous atoms, '
    + 'and the word gaseous is not optional, '
    + 'because removing an electron from a solid '
    + 'would also involve breaking the solid apart. '
    + 'The fourth is the exceptions, which are examined at this level. '
    + 'Across period 2 the ionisation energy rises overall, '
    + 'but it dips from beryllium to boron '
    + 'and again from nitrogen to oxygen. '
    + 'The first dip is because the boron electron is in a 2p sub-shell, '
    + 'which is higher in energy than the 2s it follows, '
    + 'so it is easier to remove. '
    + 'The second is because the oxygen atom must put two electrons '
    + 'into one 2p orbital, '
    + 'and those two repel each other, '
    + 'so one of them is easier to pull away. '
    + 'An answer that says there is an exception without naming '
    + 'the sub-shell or the pairing scores nothing. '
    + 'What has to be written down is always the pair: '
    + 'the trend, then because, then the cause named. '
    + 'A good habit is to write the direction first in words, '
    + 'across period 3 from left to right, '
    + 'so that there is no doubt which way the trend was meant. '
    + 'None of this needs apparatus. '
    + 'The data is given in the question as a table or a graph, '
    + 'and the marks are for explaining it.',

  recap:
    'You can place an element from its electron arrangement '
    + 'and read its group and period. '
    + 'This asks what changes as you move along a row or down a column, '
    + 'and why.',

  method: [
    'Write down which direction you are moving: across a period or down a '
      + 'group.',
    'Across: note that protons increase and the shell stays the same.',
    'Down: note that a shell is added and shielding increases.',
    'State the trend in the property asked for.',
    'Give the cause, using the words nuclear charge, shielding or '
      + 'distance.',
    'For an ion, decide whether electrons were lost or gained first.',
    'For an exception, name the sub-shell or the electron pairing '
      + 'involved.',
  ],

  worked: [
    {
      level: 3,
      ask: 'State and explain the trend in atomic radius '
        + 'across period 3 from sodium to chlorine.',
      steps: [
        'Protons increase from 11 to 17.',
        'The outer electrons stay in the third shell.',
        'Shielding by inner electrons hardly changes.',
        'So the pull on the outer electrons grows.',
      ],
      answer: 'The atomic radius decreases. '
        + 'This is because the nuclear charge increases across the period '
        + 'while the outer electrons remain in the same shell '
        + 'with similar shielding, '
        + 'so they are pulled in more strongly.',
    },
    {
      level: 4,
      ask: 'Explain why the first ionisation energy of sodium '
        + 'is lower than that of lithium.',
      steps: [
        'Both are group 1 with one outer electron.',
        'Sodium has three shells and lithium two.',
        'The sodium outer electron is further from the nucleus.',
        'It is also shielded by more inner electrons.',
      ],
      answer: 'Sodium has a lower first ionisation energy '
        + 'because its outer electron is in a shell further from the '
        + 'nucleus '
        + 'and is shielded by more inner electrons, '
        + 'so the nuclear attraction on it is weaker '
        + 'and less energy is needed to remove it.',
    },
    {
      level: 4,
      ask: 'Compare the size of a sodium atom with a sodium ion, '
        + 'and a chlorine atom with a chloride ion.',
      steps: [
        'Sodium loses its single 3s electron.',
        'That removes the whole third shell.',
        'Chlorine gains an electron into the third shell.',
        'More electrons repel more, with the same nuclear charge.',
      ],
      answer: 'The sodium ion is much smaller than the sodium atom, '
        + 'because the whole outer shell has been removed. '
        + 'The chloride ion is larger than the chlorine atom, '
        + 'because the added electron increases the repulsion '
        + 'between the electrons '
        + 'while the nuclear charge is unchanged.',
    },
    {
      level: 5,
      ask: 'The first ionisation energies across period 2 rise overall '
        + 'but dip from beryllium to boron and from nitrogen to oxygen. '
        + 'Explain both dips.',
      steps: [
        'Beryllium ends 2s2; boron ends 2p1.',
        'A 2p sub-shell is higher in energy than 2s.',
        'Nitrogen has three 2p electrons, one in each orbital.',
        'Oxygen must pair two electrons in one 2p orbital.',
        'Two electrons in one orbital repel each other.',
      ],
      answer: 'From beryllium to boron the electron removed '
        + 'comes from the 2p sub-shell rather than 2s. '
        + '2p is higher in energy, so less energy is needed, '
        + 'and the value dips. '
        + 'From nitrogen to oxygen the oxygen atom has two electrons '
        + 'paired in one 2p orbital, '
        + 'and the repulsion between that pair '
        + 'makes one of them easier to remove. '
        + 'Naming the sub-shell and the pairing is what earns the marks.',
    },
  ],

  traps: [
    {
      mistake: 'Stating a trend without its cause.',
      why: 'Most of the marks are for the reason. '
        + 'Use the words nuclear charge, shielding and distance.',
    },
    {
      mistake: 'Saying a negative ion is smaller than its atom.',
      why: 'Adding electrons increases repulsion with no extra protons, '
        + 'so a negative ion is always larger.',
    },
    {
      mistake: 'Defining ionisation energy without the word gaseous.',
      why: 'Removing an electron from a solid would also involve '
        + 'breaking the solid apart, so the definition specifies gaseous '
        + 'atoms.',
    },
    {
      mistake: 'Calling the period 2 dips simply exceptions.',
      why: 'Each has a named cause: '
        + 'the 2p sub-shell for the first, '
        + 'and paired electrons in one orbital for the second.',
    },
  ],

  extension:
    'Electronegativity difference predicts the kind of bond. '
    + 'A large difference, as between sodium and chlorine, '
    + 'means the electrons go over entirely and the bond is ionic. '
    + 'No difference, as between two chlorine atoms, '
    + 'means the sharing is even and the bond is purely covalent. '
    + 'A small difference, as between hydrogen and oxygen, '
    + 'means the electrons are shared but pulled to one side, '
    + 'making a polar covalent bond. '
    + 'That polarity is why water dissolves salt, '
    + 'why water has a high boiling point for its size, '
    + 'and in the end why there is liquid water on the Earth at all.',

  questions: [
    {
      id: 'per-1',
      ask: 'Across a period from left to right, the atomic radius:',
      kind: 'choice',
      options: ['decreases', 'increases', 'stays the same'],
      answer: 'decreases',
      teach: 'More protons pull the same shell in closer. '
        + 'The shell number does not change across a period.',
      level: 3,
    },
    {
      id: 'per-2',
      ask: 'Down a group, the first ionisation energy:',
      kind: 'choice',
      options: ['decreases', 'increases', 'stays the same'],
      answer: 'decreases',
      teach: 'The outer electron is further out and better shielded, '
        + 'so it is easier to remove.',
      level: 3,
    },
    {
      id: 'per-3',
      ask: 'A sodium ion compared with a sodium atom is:',
      kind: 'choice',
      options: ['smaller', 'larger', 'the same size'],
      answer: 'smaller',
      teach: 'The whole outer shell was removed when it lost its 3s '
        + 'electron.',
      level: 4,
    },
    {
      id: 'per-4',
      ask: 'Which word must appear in a definition of first ionisation '
        + 'energy?',
      kind: 'choice',
      options: ['gaseous', 'liquid', 'crystalline'],
      answer: 'gaseous',
      teach: 'The atoms must be gaseous, '
        + 'or the energy would also include separating them from each '
        + 'other.',
      level: 5,
    },
    {
      id: 'per-5',
      ask: 'The dip in ionisation energy from nitrogen to oxygen is caused '
        + 'by:',
      kind: 'choice',
      options: [
        'repulsion between two electrons paired in one 2p orbital',
        'oxygen having more shells',
        'oxygen being a gas',
      ],
      answer: 'repulsion between two electrons paired in one 2p orbital',
      teach: 'Nitrogen has one electron in each 2p orbital; '
        + 'oxygen must pair two, and they repel.',
      level: 5,
    },
  ],
})

/* ── chemical bonding and shapes ─────────────────────────────────────────── */

teach({
  topicId: 'bonding-chem',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An ionic bond is the attraction between oppositely charged ions '
      + 'after electrons have transferred. '
      + 'A covalent bond is a shared pair of electrons. '
      + 'A metallic bond is positive ions in a sea of delocalised '
      + 'electrons. '
      + 'The shape of a molecule is set by electron pairs repelling '
      + 'as far apart as they can, '
      + 'and a lone pair repels more strongly than a bonding pair.',
    method: [
      'Decide the bond type from the elements: '
        + 'metal with non-metal is ionic, two non-metals covalent, '
        + 'metal with metal metallic.',
      'Count the electron pairs around the central atom.',
      'Place them as far apart as possible to get the basic shape.',
      'Reduce the angle for each lone pair present.',
      'Explain a physical property by the structure, not by the formula.',
    ],
  },

  idea:
    'An ionic bond forms when a metal transfers electrons to a non-metal. '
    + 'The resulting positive and negative ions attract '
    + 'and pack into a giant lattice, '
    + 'as in sodium chloride. '
    + 'A covalent bond is a pair of electrons shared between two atoms, '
    + 'each contributing one. '
    + 'A dative or coordinate bond is a shared pair '
    + 'in which both electrons came from the same atom. '
    + 'A metallic bond is a lattice of positive ions '
    + 'held together by electrons that are free to move through the whole '
    + 'structure. '
    + 'Covalent substances may be simple molecules, such as water or '
    + 'methane, '
    + 'held to each other by weak intermolecular forces, '
    + 'or giant covalent structures, such as diamond and graphite, '
    + 'in which every atom is bonded to its neighbours throughout. '
    + 'The shape of a simple molecule is predicted '
    + 'by counting the electron pairs around the central atom '
    + 'and placing them as far apart as possible. '
    + 'Two pairs give a linear shape at 180 degrees. '
    + 'Three give trigonal planar at 120 degrees. '
    + 'Four give tetrahedral at 109.5 degrees. '
    + 'A lone pair, which is a pair not used in bonding, '
    + 'repels more strongly than a bonding pair, '
    + 'so each lone pair squeezes the bond angles by about 2.5 degrees. '
    + 'So ammonia, with three bonds and one lone pair, '
    + 'is pyramidal at about 107 degrees, '
    + 'and water, with two bonds and two lone pairs, '
    + 'is bent at about 104.5 degrees.',

  mechanism:
    'The idea behind every shape is that electron pairs repel, '
    + 'so they take the arrangement that puts them furthest apart. '
    + 'That is all. '
    + 'Four pairs cannot sit at 90 degrees in a plane '
    + 'because moving into three dimensions gets them further apart, '
    + 'and 109.5 degrees is the angle that does it. '
    + 'The only refinement is that a lone pair is held by one nucleus '
    + 'while a bonding pair is shared between two, '
    + 'so the lone pair sits closer to the central atom '
    + 'and takes up more room. '
    + 'It therefore pushes the bonding pairs together. '
    + 'Count the lone pairs, subtract about 2.5 degrees each, '
    + 'and the answer is right: '
    + 'methane 109.5, ammonia 107, water 104.5. '
    + 'The marks are for the reason, '
    + 'so the sentence to write is that a lone pair repels '
    + 'more strongly than a bonding pair. '
    + 'Here is where answers lose marks. '
    + 'The first is calling ammonia tetrahedral. '
    + 'It has four electron pairs, so the pairs are arranged '
    + 'approximately tetrahedrally, '
    + 'but the shape of the molecule is described by its atoms, '
    + 'and there are only four atoms, '
    + 'so the shape is trigonal pyramidal. '
    + 'The distinction is exactly what is being tested. '
    + 'Water, likewise, is bent or V shaped, not tetrahedral. '
    + 'The second is explaining a property from the formula '
    + 'instead of from the structure. '
    + 'Why does sodium chloride have a high melting point? '
    + 'Not because it is ionic, which is restating the question, '
    + 'but because a giant lattice of ions '
    + 'has strong attractions in every direction, '
    + 'and a great deal of energy is needed to break them all. '
    + 'Why does carbon dioxide have a low one, '
    + 'although its covalent bonds are strong? '
    + 'Because melting it does not break the covalent bonds at all. '
    + 'It only separates one molecule from the next, '
    + 'and the forces between molecules are weak. '
    + 'This is the most important sentence in the whole topic, '
    + 'and the commonest error is to compare a covalent bond '
    + 'with an ionic bond when the question is about melting. '
    + 'The third is graphite and diamond. '
    + 'Both are pure carbon. '
    + 'Diamond has every atom bonded to four others in a rigid lattice, '
    + 'so it is hard and does not conduct. '
    + 'Graphite has every atom bonded to three others in flat layers, '
    + 'with weak forces between the layers, '
    + 'so the layers slide and it is soft and slippery, '
    + 'and the fourth electron of each atom is delocalised, '
    + 'so graphite conducts. '
    + 'Any answer must name the layers and the delocalised electron. '
    + 'The fourth is metallic conduction. '
    + 'A metal conducts because its electrons are delocalised '
    + 'and free to move. '
    + 'An ionic solid does not conduct, '
    + 'because its ions are fixed in the lattice, '
    + 'but molten or dissolved it does, '
    + 'because the ions are then free. '
    + 'The word free is doing the work in all three cases, '
    + 'and whether the charge carrier is an electron or an ion '
    + 'is the detail the mark is for. '
    + 'What has to be written down is the structure first '
    + 'and the property second, '
    + 'joined by so or therefore. '
    + 'For a shape, three lines: '
    + 'the number of bonding pairs and lone pairs, '
    + 'the arrangement, '
    + 'and the name of the shape with its angle.',

  recap:
    'You know that a metal and a non-metal transfer electrons '
    + 'and that two non-metals share them. '
    + 'This adds the metallic bond, the shape of a molecule, '
    + 'and the link from structure to physical properties.',

  method: [
    'Identify the elements as metal or non-metal.',
    'Metal with non-metal is ionic; '
      + 'non-metal with non-metal is covalent; '
      + 'metal with metal is metallic.',
    'For a molecule, count the electron pairs around the central atom.',
    'Separate bonding pairs from lone pairs.',
    'Arrange the pairs as far apart as possible.',
    'Name the shape from the positions of the atoms, not the pairs.',
    'Reduce the angle by about 2.5 degrees for each lone pair.',
    'For a property, name the structure and the force being broken.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Describe the bonding in magnesium chloride '
        + 'and give the formula. '
        + 'Magnesium is 12 and chlorine 17.',
      steps: [
        'Magnesium ends 3s2, so it loses two electrons.',
        'Chlorine ends 3p5, so each gains one.',
        'Two chlorines are needed to take two electrons.',
      ],
      answer: 'Magnesium transfers two electrons, one to each chlorine '
        + 'atom. '
        + 'The ions formed attract, so the bonding is ionic, '
        + 'and the formula is MgCl2.',
    },
    {
      level: 4,
      ask: 'Predict and explain the shapes and bond angles '
        + 'of methane, ammonia and water.',
      steps: [
        'Methane: four bonding pairs, no lone pairs.',
        'Ammonia: three bonding pairs, one lone pair.',
        'Water: two bonding pairs, two lone pairs.',
        'Each lone pair repels more and squeezes the angle.',
      ],
      answer: 'Methane is tetrahedral at 109.5 degrees, '
        + 'with four bonding pairs and no lone pairs. '
        + 'Ammonia is trigonal pyramidal at about 107 degrees, '
        + 'because its one lone pair repels more strongly '
        + 'than a bonding pair and closes the angle. '
        + 'Water is bent at about 104.5 degrees, '
        + 'because two lone pairs close it further. '
        + 'Calling ammonia or water tetrahedral describes the pairs, '
        + 'not the molecule.',
    },
    {
      level: 4,
      ask: 'Carbon dioxide has strong covalent bonds '
        + 'yet sublimes below room temperature, '
        + 'while sodium chloride melts at 801 degrees Celsius. '
        + 'Explain.',
      steps: [
        'Melting carbon dioxide separates molecules from one another.',
        'It does not break any covalent bond.',
        'The forces between molecules are weak.',
        'Melting sodium chloride must overcome ionic attractions '
          + 'throughout the lattice.',
      ],
      answer: 'Melting carbon dioxide does not break its covalent bonds. '
        + 'It only has to overcome the weak forces '
        + 'holding one molecule to the next, '
        + 'so very little energy is needed. '
        + 'Sodium chloride is a giant lattice, '
        + 'so melting it must overcome strong attractions '
        + 'between ions in every direction, '
        + 'which needs much more energy.',
    },
    {
      level: 5,
      ask: 'Diamond and graphite are both pure carbon. '
        + 'Explain why diamond is hard and does not conduct, '
        + 'while graphite is soft and does conduct.',
      steps: [
        'In diamond each carbon bonds to four others in a rigid lattice.',
        'All four outer electrons are used in bonds.',
        'In graphite each carbon bonds to three others in flat layers.',
        'The fourth electron is delocalised between the layers.',
        'The layers are held to each other only weakly.',
      ],
      answer: 'In diamond every carbon is covalently bonded to four others '
        + 'in a rigid three dimensional lattice, '
        + 'so it is very hard, '
        + 'and all four outer electrons are in bonds, '
        + 'so none is free to carry charge. '
        + 'In graphite each carbon bonds to only three others, '
        + 'forming flat layers held together by weak forces, '
        + 'so the layers slide over each other and it feels slippery. '
        + 'The fourth electron of each atom is delocalised, '
        + 'so it is free to move along the layers and graphite conducts.',
    },
  ],

  traps: [
    {
      mistake: 'Calling ammonia tetrahedral.',
      why: 'The four electron pairs are arranged tetrahedrally, '
        + 'but the molecule has four atoms, '
        + 'so its shape is trigonal pyramidal.',
    },
    {
      mistake: 'Comparing a covalent bond with an ionic bond '
        + 'to explain melting points.',
      why: 'Melting a simple molecular solid breaks no covalent bonds, '
        + 'only the weak forces between molecules.',
    },
    {
      mistake: 'Saying an ionic solid conducts electricity.',
      why: 'Its ions are fixed in the lattice. '
        + 'Molten or in solution it conducts, because the ions are then '
        + 'free.',
    },
    {
      mistake: 'Explaining graphite without naming the delocalised '
        + 'electron.',
      why: 'The layers explain the softness; '
        + 'the fourth, delocalised electron explains the conduction. '
        + 'Both are needed.',
    },
  ],

  extension:
    'Hydrogen bonding is the strongest of the forces between molecules '
    + 'and it explains several oddities at once. '
    + 'Water should be a gas at room temperature '
    + 'judging by the size of its molecule, '
    + 'and it is not, '
    + 'because each molecule is held to its neighbours '
    + 'by hydrogen bonds to the lone pairs on oxygen. '
    + 'The same bonding makes ice less dense than water, '
    + 'since the open lattice of ice holds the molecules apart, '
    + 'which is why ice floats and why a lake freezes from the top. '
    + 'It also holds the two strands of DNA together, '
    + 'weakly enough to be unzipped and copied.',

  questions: [
    {
      id: 'bond-1',
      ask: 'A bond between two non-metal atoms is:',
      kind: 'choice',
      options: ['covalent', 'ionic', 'metallic'],
      answer: 'covalent',
      teach: 'Neither will give electrons up easily, so they share.',
      level: 2,
    },
    {
      id: 'bond-2',
      ask: 'The bond angle in methane is about:',
      kind: 'numeric',
      options: [],
      answer: '109.5',
      teach: 'Four bonding pairs and no lone pairs give a regular '
        + 'tetrahedron.',
      level: 3,
    },
    {
      id: 'bond-3',
      ask: 'Water has a smaller bond angle than ammonia because it has:',
      kind: 'choice',
      options: [
        'two lone pairs instead of one',
        'smaller atoms',
        'stronger bonds',
      ],
      answer: 'two lone pairs instead of one',
      teach: 'A lone pair repels more strongly than a bonding pair, '
        + 'so each one closes the angle further.',
      level: 4,
    },
    {
      id: 'bond-4',
      ask: 'Carbon dioxide has a low sublimation point because melting it:',
      kind: 'choice',
      options: [
        'breaks only weak forces between molecules',
        'breaks its covalent bonds',
        'breaks an ionic lattice',
      ],
      answer: 'breaks only weak forces between molecules',
      teach: 'The covalent bonds inside each molecule stay intact. '
        + 'Only the molecules are separated from one another.',
      level: 5,
    },
    {
      id: 'bond-5',
      ask: 'Graphite conducts electricity because:',
      kind: 'choice',
      options: [
        'each carbon has one delocalised electron',
        'its layers are far apart',
        'it contains ions',
      ],
      answer: 'each carbon has one delocalised electron',
      teach: 'Each carbon bonds to three others, '
        + 'leaving the fourth electron free to move along the layers.',
      level: 5,
    },
  ],
})

/* ── the mole concept ────────────────────────────────────────────────────── */

teach({
  topicId: 'mole-chem',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A mole is 6.02 times 10 to the power 23 particles, '
      + 'which is the Avogadro constant. '
      + 'The mass of one mole in grams is the molar mass, '
      + 'and it is the relative formula mass read as grams. '
      + 'Moles equal mass divided by molar mass. '
      + 'One mole of any gas occupies 22.4 litres at s.t.p. '
      + 'An empirical formula is the simplest whole number ratio of atoms.',
    method: [
      'Work out the molar mass from the formula and the atomic masses.',
      'Moles equal mass over molar mass.',
      'Particles equal moles times the Avogadro constant.',
      'For a gas at s.t.p., volume equals moles times 22.4 litres.',
      'For an empirical formula, divide each mass by its atomic mass, '
        + 'then divide through by the smallest result.',
    ],
  },

  idea:
    'A mole is an amount of substance containing as many particles '
    + 'as there are atoms in 12 g of carbon 12, '
    + 'which is 6.02 times 10 to the power 23. '
    + 'That number is the Avogadro constant. '
    + 'The molar mass of a substance is the mass of one mole, '
    + 'in grams per mole, '
    + 'and it is numerically the same as the relative atomic '
    + 'or relative formula mass. '
    + 'So one mole of carbon is 12 g, '
    + 'and one mole of water is 18 g, '
    + 'because 2 times 1 plus 16 is 18. '
    + 'The number of moles equals the mass divided by the molar mass. '
    + 'The number of particles equals the number of moles '
    + 'times the Avogadro constant. '
    + 'For a gas, one mole occupies 22.4 litres '
    + 'at standard temperature and pressure, '
    + 'which is 0 degrees Celsius and one atmosphere, '
    + 'and about 24 litres at room temperature. '
    + 'For a solution, the number of moles equals '
    + 'the concentration in moles per litre times the volume in litres. '
    + 'An empirical formula is the simplest whole number ratio '
    + 'of the atoms in a compound. '
    + 'A molecular formula gives the actual number in one molecule, '
    + 'and it is always a whole number multiple of the empirical formula.',

  mechanism:
    'The mole is a counting unit, and that is the whole idea. '
    + 'A chemist needs to count atoms, '
    + 'because a reaction joins them in whole number ratios, '
    + 'but atoms cannot be counted, only weighed. '
    + 'So the mole is chosen to make the bridge trivial: '
    + 'take the relative mass off the periodic table, '
    + 'read it as grams, and you have one mole. '
    + 'This is the same thinking as buying eggs by the crate. '
    + 'Nobody counts 30 eggs; they weigh or carry a crate, '
    + 'and the crate is defined so that it contains 30. '
    + 'Hold that and the formulas stop being things to memorise. '
    + 'Moles equal mass over molar mass '
    + 'is just how many crates are in this pile. '
    + 'Here is where the marks go. '
    + 'The first loss is the molar mass of a compound with brackets. '
    + 'For calcium hydroxide, Ca OH twice, '
    + 'the mass is 40 plus 2 times open bracket 16 plus 1 close bracket, '
    + 'which is 40 plus 34, so 74. '
    + 'Taking it as 40 plus 16 plus 1, which is 57, '
    + 'is the standard error, '
    + 'and it comes from ignoring the bracket. '
    + 'Write the multiplication out term by term before adding. '
    + 'The second is the unit of concentration. '
    + 'Moles equal concentration times volume '
    + 'only when the volume is in litres. '
    + 'A titration gives 25 cm cubed, which is 0.025 litres, '
    + 'and substituting 25 gives an answer a thousand times too large. '
    + 'Divide by 1000 on its own line, every time, '
    + 'and the error cannot happen. '
    + 'The third is the empirical formula, '
    + 'where the method is reliable and the arithmetic is not. '
    + 'Divide each element mass or percentage by its atomic mass '
    + 'to get a ratio of moles, '
    + 'then divide all the results by the smallest one. '
    + 'If a result comes out as 1.5, multiply everything by 2 '
    + 'rather than rounding to 2, '
    + 'because 1.5 means the ratio is 2 to 3 and rounding destroys the '
    + 'compound. '
    + 'This is the single place where learners turn a correct calculation '
    + 'into a wrong formula. '
    + 'Only round when a value is within about 0.1 of a whole number. '
    + 'The fourth is the molar volume of a gas. '
    + 'It is 22.4 litres per mole at s.t.p., '
    + 'and it applies to any gas, '
    + 'because equal volumes of gases at the same temperature and pressure '
    + 'contain equal numbers of molecules. '
    + 'So a question giving a volume of a gas is giving you moles directly, '
    + 'and the identity of the gas does not matter at that step. '
    + 'What has to be written down is the molar mass calculation in full, '
    + 'then the formula used, then the substitution, then the answer with '
    + 'its unit, '
    + 'and moles given to three significant figures unless told otherwise. '
    + 'A marking scheme for a mole calculation typically gives one mark '
    + 'for the molar mass, '
    + 'one for the correct substitution, '
    + 'and one for the answer. '
    + 'A learner who writes only the answer, and slips, scores none of '
    + 'them.',

  recap:
    'You know relative atomic masses and can read a chemical formula. '
    + 'This gives the unit that turns a mass on a balance '
    + 'into a number of particles.',

  method: [
    'Write the formula of the substance.',
    'Add the atomic masses, multiplying out any brackets term by term, '
      + 'to get the molar mass.',
    'Moles equal mass in grams over molar mass.',
    'For particles, multiply the moles by 6.02 times 10 to the power 23.',
    'For a gas at s.t.p., multiply the moles by 22.4 litres.',
    'For a solution, convert the volume to litres first, '
      + 'then multiply by the concentration.',
    'For an empirical formula, divide each mass by its atomic mass.',
    'Divide all the results by the smallest.',
    'Multiply through to clear a half, rather than rounding it.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How many moles are in 36 g of water? '
        + 'H is 1 and O is 16.',
      steps: [
        'Molar mass of water: 2 times 1 plus 16, which is 18.',
        'Moles equal mass over molar mass.',
        '36 over 18.',
      ],
      answer: '2 moles. '
        + 'That is 2 times 6.02 times 10 to the power 23 molecules, '
        + 'which is 1.204 times 10 to the power 24.',
    },
    {
      level: 4,
      ask: 'Find the molar mass of calcium hydroxide, Ca OH twice. '
        + 'Ca is 40, O is 16, H is 1.',
      steps: [
        'One calcium: 40.',
        'The bracket OH has mass 16 plus 1, which is 17.',
        'There are two brackets: 2 times 17, which is 34.',
        'Add.',
      ],
      answer: '74 g per mole. '
        + 'Ignoring the bracket and adding 40 plus 16 plus 1 '
        + 'would give 57, which is the usual error.',
    },
    {
      level: 4,
      ask: 'What volume does 0.25 moles of carbon dioxide occupy at s.t.p., '
        + 'and how many moles are in 25 cm cubed '
        + 'of a 0.1 mole per litre solution?',
      steps: [
        'At s.t.p. one mole occupies 22.4 litres.',
        '0.25 times 22.4.',
        'Convert 25 cm cubed to litres: 25 over 1000, which is 0.025.',
        'Moles equal concentration times volume: 0.1 times 0.025.',
      ],
      answer: '5.6 litres of gas. '
        + 'And 0.0025 moles in the solution. '
        + 'Using 25 instead of 0.025 would give 2.5 moles, '
        + 'a thousand times too large.',
    },
    {
      level: 5,
      ask: 'A compound contains 2.4 g of carbon, 0.4 g of hydrogen '
        + 'and 3.2 g of oxygen. '
        + 'Find its empirical formula. '
        + 'C is 12, H is 1, O is 16.',
      steps: [
        'Moles of C: 2.4 over 12, which is 0.2.',
        'Moles of H: 0.4 over 1, which is 0.4.',
        'Moles of O: 3.2 over 16, which is 0.2.',
        'Divide all by the smallest, 0.2.',
        'C gives 1, H gives 2, O gives 1.',
      ],
      answer: 'The empirical formula is CH2O. '
        + 'If a ratio had come out as 1.5, '
        + 'the right move would be to multiply every value by 2, '
        + 'not to round it up, '
        + 'because 1.5 means a ratio of 2 to 3.',
    },
  ],

  traps: [
    {
      mistake: 'Ignoring a bracket when finding a molar mass.',
      why: 'In Ca OH twice the whole bracket is doubled. '
        + 'The mass is 74, not 57.',
    },
    {
      mistake: 'Using a volume in cubic centimetres with a concentration '
        + 'in moles per litre.',
      why: 'Divide by 1000 first. '
        + '25 cm cubed is 0.025 litres, and the error is a factor of a '
        + 'thousand.',
    },
    {
      mistake: 'Rounding a mole ratio of 1.5 up to 2.',
      why: '1.5 means a ratio of 2 to 3. '
        + 'Multiply everything by 2 instead.',
    },
    {
      mistake: 'Thinking the molar volume depends on which gas it is.',
      why: 'Equal volumes of gases at the same temperature and pressure '
        + 'hold equal numbers of molecules, '
        + 'so 22.4 litres per mole applies to all of them.',
    },
  ],

  extension:
    'Once the mole is in place a balanced equation becomes a recipe '
    + 'in units you can weigh. '
    + 'The equation for burning methane says one mole of methane '
    + 'needs two moles of oxygen, '
    + 'so 16 g of methane needs 64 g of oxygen, '
    + 'and nothing in that step required counting a single molecule. '
    + 'This is how a fertiliser plant decides how much ammonia to make '
    + 'from a given tonnage of nitrogen, '
    + 'and how a pharmacist works out a dose. '
    + 'Stoichiometry, which follows next, is nothing more '
    + 'than the mole applied to a balanced equation.',

  questions: [
    {
      id: 'mole-1',
      ask: 'How many moles are in 44 g of carbon dioxide? '
        + 'C is 12 and O is 16.',
      kind: 'numeric',
      options: [],
      answer: '1',
      teach: 'The molar mass is 12 plus 32, which is 44, '
        + 'so 44 g is one mole.',
      level: 3,
    },
    {
      id: 'mole-2',
      ask: 'The molar mass of Ca OH twice, with Ca 40, O 16 and H 1, is:',
      kind: 'numeric',
      options: [],
      answer: '74',
      teach: '40 plus 2 times 17. '
        + 'The bracket is doubled, so both the O and the H are counted '
        + 'twice.',
      level: 4,
    },
    {
      id: 'mole-3',
      ask: 'The volume of 2 moles of any gas at s.t.p., in litres, is:',
      kind: 'numeric',
      options: [],
      answer: '44.8',
      teach: '2 times 22.4. '
        + 'It is the same for every gas, whatever its molar mass.',
      level: 4,
    },
    {
      id: 'mole-4',
      ask: 'In a titration, 25 cm cubed of solution is how many litres?',
      kind: 'numeric',
      options: [],
      answer: '0.025',
      teach: 'Divide by 1000. '
        + 'The concentration formula needs litres, not cubic centimetres.',
      level: 3,
    },
    {
      id: 'mole-5',
      ask: 'A mole ratio works out as 1 to 1.5. '
        + 'What should you do?',
      kind: 'choice',
      options: [
        'Multiply both by 2',
        'Round 1.5 up to 2',
        'Round 1.5 down to 1',
      ],
      answer: 'Multiply both by 2',
      teach: '1.5 means a ratio of 2 to 3. '
        + 'Rounding changes the compound into a different one.',
      level: 5,
    },
  ],
})
