/**
 * Stored lessons for SHS 2 Physics: waves, sound, reflection and refraction,
 * electrostatics and current electricity.
 *
 * Written at about grade 10, which is inside the SHS expectation of 10 to 12.
 *
 * ── What these five have in common ───────────────────────────────────────
 *
 * Every one of them is about something that travels while the stuff it
 * travels through stays where it is. A wave carries energy across a rope
 * without carrying the rope. Sound crosses a room without moving the air
 * across the room. Light crosses a lens. A field reaches out from a charge
 * into empty space. A current carries energy down a cable while the copper
 * stays bolted to the pole. So the examinable habit in all five is the
 * same: name the thing that is being carried, name the thing that stays,
 * and do not confuse their speeds.
 *
 * ── Apparatus a school may not own ───────────────────────────────────────
 *
 * The resonance tube, the optical bench and the multi-loop circuit board
 * are written so the examinable calculation can be done with a pencil and a
 * ruler. Where the real apparatus is genuinely needed, the lesson says so
 * instead of pretending a cupboard full of equipment is standing there.
 *
 * ── Notation ─────────────────────────────────────────────────────────────
 *
 * Mathematics is LaTeX between dollar signs. Captions, `alt` text and table
 * cells stay in words, since those are read aloud.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── wave motion ────────────────────────────────────────────────────────── */

teach({
  topicId: 'wave-basics-physics',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A wave carries energy from place to place without carrying matter '
      + 'with it. '
      + 'Its speed, frequency and wavelength are tied together by '
      + '$v = f\\lambda$. '
      + 'Interference, diffraction and polarisation are the three '
      + 'behaviours that prove a thing is a wave at all.',
    method: [
      'Write down which two of $v$, $f$ and $\\lambda$ you were given.',
      'Convert every length to metres and every frequency to hertz.',
      'Use $v = f\\lambda$, then check the unit of the answer.',
    ],
  },

  why:
    'Stand behind the wall of a compound in Kumasi while a drumming group '
    + 'plays on the far side. '
    + 'You cannot see the drummers, but you hear them perfectly well. '
    + 'The sound has come round the wall. '
    + 'Now hold a torch on the far side of the same wall. '
    + 'None of its light comes round at all. '
    + 'Both sound and light are waves, and both met the same wall. '
    + 'So why does one bend round the corner and the other does not?',

  notation:
    'The Greek letter lambda, written $\\lambda$, is said "LAM-da" and '
    + 'stands for wavelength. '
    + 'It is a length, so it is measured in metres. '
    + 'Frequency $f$ is measured in hertz, written Hz with a small h and a '
    + 'capital H when abbreviated, and one hertz means one complete wave '
    + 'per second. '
    + 'Period $T$ is the time for one complete wave, in seconds, and '
    + '$T = \\frac{1}{f}$. '
    + 'Amplitude is the greatest distance a particle moves from its rest '
    + 'position, and it is a distance, not a whole wave height. '
    + 'The single commonest unit error in this topic is leaving a frequency '
    + 'in kilohertz when the wavelength is in metres.',

  idea:
    'A wave is a travelling disturbance that carries energy and momentum '
    + 'from one place to another without carrying the material with it. '
    + 'In a transverse wave the particles move at right angles to the '
    + 'direction the wave travels, as on a rope or in light. '
    + 'In a longitudinal wave they move along the same line as the travel, '
    + 'as in sound, making compressions and rarefactions. '
    + 'One complete wave occupies a distance $\\lambda$ and takes a time '
    + '$T$, so the speed is '
    + '$$v = \\frac{\\lambda}{T} = f\\lambda.$$ '
    + 'Three behaviours identify a wave. '
    + 'Interference: where two waves of the same frequency meet, the '
    + 'displacements add, so a path difference of $n\\lambda$ gives a loud '
    + 'or bright result and a path difference of '
    + '$(n + \\tfrac{1}{2})\\lambda$ gives a quiet or dark one. '
    + 'Diffraction: a wave spreads after passing an obstacle or a gap, and '
    + 'the spreading is large only when the gap is about the same size as '
    + '$\\lambda$. '
    + 'Polarisation: a transverse wave can be restricted to one plane of '
    + 'vibration, and a longitudinal wave cannot, which is how we know '
    + 'light is transverse and sound is not.',

  tables: [
    {
      caption: 'The quantities of a wave, what each one means, and its unit',
      columns: ['Quantity', 'What it is', 'Unit'],
      rows: [
        ['Wavelength', 'Length of one complete wave', 'Metre'],
        ['Frequency', 'Complete waves passing a point each second', 'Hertz'],
        ['Period', 'Time for one complete wave to pass', 'Second'],
        ['Amplitude', 'Greatest distance a particle leaves its rest place', 'Metre'],
        ['Speed', 'Distance the wave pattern travels each second', 'Metre per second'],
      ],
      note: 'Only the last one belongs to the wave as a whole. '
        + 'Amplitude belongs to the particles, and mixing the two is where '
        + 'the marks go.',
    },
    {
      caption: 'The two kinds of wave compared on four points',
      columns: ['Point', 'Transverse', 'Longitudinal'],
      rows: [
        ['Particle motion', 'Across the travel', 'Along the travel'],
        ['Shape it makes', 'Crests and troughs', 'Compressions and rarefactions'],
        ['Can be polarised', 'Yes', 'No'],
        ['Travels through a vacuum', 'Light does, a rope wave does not', 'Never'],
        ['Example', 'Light, water ripples, a rope', 'Sound, a pressure pulse in oil'],
      ],
      note: 'The polarisation row is the one examiners use, because it is '
        + 'the only property that tells the two apart by experiment.',
    },
  ],

  figure: {
    alt: 'Two drawings above one another. The upper one is a smooth wave on '
      + 'a horizontal dashed rest line, with the distance from one crest to '
      + 'the next marked as wavelength, the height from the rest line to a '
      + 'crest marked as amplitude, a crest labelled and a trough '
      + 'labelled, and an arrow on the right showing the direction the wave '
      + 'travels while a small arrow on a particle points up and down '
      + 'across that direction. The lower drawing is a row of dots along a '
      + 'line, bunched close together in two places labelled compression '
      + 'and spread out in two places labelled rarefaction, with an arrow '
      + 'showing the wave travelling along the same line as the particles '
      + 'move.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="40" y1="110" x2="520" y2="110" stroke-dasharray="4 4" '
      + 'stroke-opacity="0.5"/>'
      + '<path d="M40 110 Q100 30 160 110 Q220 190 280 110 Q340 30 400 110 '
      + 'Q460 190 520 110" stroke="#1d4ed8"/>'
      + '<line x1="160" y1="40" x2="400" y2="40" stroke="#b4531a"/>'
      + '<line x1="160" y1="110" x2="160" y2="40" stroke="#b4531a" '
      + 'stroke-dasharray="3 3"/>'
      + '<line x1="400" y1="110" x2="400" y2="40" stroke="#b4531a" '
      + 'stroke-dasharray="3 3"/>'
      + '<text x="280" y="32" font-size="15" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">wavelength</text>'
      + '<line x1="60" y1="110" x2="60" y2="62" stroke="#0f8a4d"/>'
      + '<text x="70" y="86" font-size="14" fill="#0f8a4d" '
      + 'stroke="none">amplitude</text>'
      + '<text x="100" y="26" font-size="14" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">crest</text>'
      + '<text x="220" y="210" font-size="14" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">trough</text>'
      + '<line x1="540" y1="110" x2="596" y2="110"/>'
      + '<path d="M588 104 L598 110 L588 116"/>'
      + '<text x="568" y="98" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">wave goes</text>'
      + '<line x1="470" y1="150" x2="470" y2="186"/>'
      + '<path d="M464 180 L470 190 L476 180"/>'
      + '<text x="470" y="206" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">particle goes</text>'
      + '<text x="40" y="262" font-size="14" fill="currentColor" '
      + 'stroke="none">longitudinal:</text>'
      + '<circle cx="150" cy="300" r="4" fill="currentColor" stroke="none"/>'
      + '<circle cx="162" cy="300" r="4" fill="currentColor" stroke="none"/>'
      + '<circle cx="174" cy="300" r="4" fill="currentColor" stroke="none"/>'
      + '<circle cx="186" cy="300" r="4" fill="currentColor" stroke="none"/>'
      + '<circle cx="222" cy="300" r="4" fill="currentColor" stroke="none"/>'
      + '<circle cx="258" cy="300" r="4" fill="currentColor" stroke="none"/>'
      + '<circle cx="294" cy="300" r="4" fill="currentColor" stroke="none"/>'
      + '<circle cx="330" cy="300" r="4" fill="currentColor" stroke="none"/>'
      + '<circle cx="342" cy="300" r="4" fill="currentColor" stroke="none"/>'
      + '<circle cx="354" cy="300" r="4" fill="currentColor" stroke="none"/>'
      + '<circle cx="366" cy="300" r="4" fill="currentColor" stroke="none"/>'
      + '<circle cx="402" cy="300" r="4" fill="currentColor" stroke="none"/>'
      + '<circle cx="438" cy="300" r="4" fill="currentColor" stroke="none"/>'
      + '<circle cx="474" cy="300" r="4" fill="currentColor" stroke="none"/>'
      + '<text x="168" y="282" font-size="13" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">compression</text>'
      + '<text x="348" y="282" font-size="13" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">compression</text>'
      + '<text x="258" y="330" font-size="13" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">rarefaction</text>'
      + '<text x="438" y="330" font-size="13" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">rarefaction</text>'
      + '<line x1="150" y1="360" x2="470" y2="360"/>'
      + '<path d="M462 354 L472 360 L462 366"/>'
      + '<text x="310" y="382" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'particles move along this same line</text>'
      + '</svg>',
  },

  mechanism:
    'The wave equation is not a formula to be memorised. It is a '
    + 'sentence about counting. In one second, $f$ complete waves '
    + 'pass you, and each one is $\\lambda$ long, so $f\\lambda$ '
    + 'metres of wave go by every second, and that is what speed '
    + 'means. Rebuilding it that way also tells you which quantity is '
    + 'fixed by what. The speed is set by the material: sound goes at '
    + 'about 340 metres per second in air whatever note you play. The '
    + 'frequency is set by the source: the drummer decides it, not '
    + 'the air.\n\n'
    + 'So the wavelength is the one that has to adjust, and that is '
    + 'why the same note has a shorter wavelength in water than in '
    + 'air. Learners who do not see this write that a loud sound '
    + 'travels faster, which confuses amplitude with speed. Loudness '
    + 'is amplitude, pitch is frequency, and neither of them changes '
    + 'the speed in a given medium. Now the question the lesson '
    + 'opened with. Diffraction is large when the gap or the obstacle '
    + 'is about the size of one wavelength. A drum beat of 170 Hz has '
    + 'a wavelength of about 2 m, which is the size of a doorway, so '
    + 'it spreads round the wall easily. Green light has a wavelength '
    + 'of about 500 nanometres, which is some four million times '
    + 'smaller than the doorway, so it goes straight through and '
    + 'casts a sharp shadow. Nothing different is happening to the '
    + 'two waves. The wall is simply a different size compared with '
    + 'each one. In the examination this answer needs the comparison '
    + 'stated, not just the word diffraction: say that the wavelength '
    + 'of sound is comparable with the width of the opening and the '
    + 'wavelength of light is not.\n\n'
    + 'The second place marks are lost is interference without a path '
    + 'difference. A question asks why two loudspeakers give loud and '
    + 'quiet patches across a hall, and the answer has to say that at '
    + 'a loud place the two paths differ by a whole number of '
    + 'wavelengths, so the waves arrive in step and the displacements '
    + 'add. Write the condition, $n\\lambda$ for loud and $(n + '
    + '\\tfrac{1}{2})\\lambda$ for quiet, because the condition is '
    + 'the mark. The third is polarisation, which is short but exact. '
    + 'Only a transverse wave has a plane of vibration to restrict, '
    + 'so sound can never be polarised. That single experiment is the '
    + 'evidence that light is transverse, and a question asking for '
    + 'evidence wants that experiment named.',

  recap:
    'Drop a stone in a bucket of water and rings spread out from the spot. '
    + 'A leaf floating on the surface bobs up and down as each ring passes, '
    + 'but it does not travel out to the edge with them. '
    + 'That is the whole of what a wave is. '
    + 'Something travels, and it is not the water. '
    + 'What travels is the up and down movement, and the energy that drives '
    + 'it. '
    + 'The water only takes its turn to move and then goes back. '
    + 'Hold a rope at one end and shake it and you see the same thing: the '
    + 'hump runs along the rope while the rope stays in your hand. '
    + 'This lesson gives that picture its measurements and its equation.',

  method: [
    'Decide whether the wave is transverse or longitudinal, and say how you know.',
    'List the quantities you were given, with their units.',
    'Convert kilohertz to hertz and centimetres to metres before anything else.',
    'Use $v = f\\lambda$, or $T = \\frac{1}{f}$ if the period is wanted.',
    'For interference, find the path difference and compare it with $\\lambda$.',
    'For diffraction, compare the gap width with $\\lambda$ in words.',
    'Check the unit of the answer, because it catches most slips.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A wave on a rope has a frequency of 5 Hz and a wavelength of '
        + '0.4 m. Find its speed and its period.',
      steps: [
        { math: 'v = f\\lambda = 5 \\times 0.4', why: 'Five waves pass each second and each is 0.4 m long.' },
        { math: 'v = 2\\ \\text{m s}^{-1}' },
        { math: 'T = \\frac{1}{f} = \\frac{1}{5} = 0.2\\ \\text{s}' },
      ],
      answer: '$2$ m per second, with a period of $0.2$ s.',
    },
    {
      level: 4,
      ask: 'Radio Ghana broadcasts on 95.7 MHz. Radio waves travel at '
        + '$3 \\times 10^{8}$ m per second. Find the wavelength.',
      steps: [
        { math: 'f = 95.7 \\times 10^{6}\\ \\text{Hz}', why: 'Mega means a million. Convert before substituting.' },
        { math: '\\lambda = \\frac{v}{f} = \\frac{3 \\times 10^{8}}{95.7 \\times 10^{6}}' },
        { math: '\\lambda = 3.13\\ \\text{m}' },
      ],
      answer: 'About $3.1$ m. '
        + 'That is why an FM aerial is about a metre long and not a '
        + 'kilometre long.',
    },
    {
      level: 5,
      ask: 'Two loudspeakers 3 m apart play the same 500 Hz note. '
        + 'A listener stands where the paths from the two speakers differ by '
        + '1.02 m. Take the speed of sound as 340 m per second. '
        + 'Is the sound loud or quiet there?',
      steps: [
        { math: '\\lambda = \\frac{v}{f} = \\frac{340}{500} = 0.68\\ \\text{m}' },
        { math: '\\frac{1.02}{0.68} = 1.5', why: 'Express the path difference as a number of wavelengths. That number decides everything.' },
        'A difference of one and a half wavelengths is the quiet condition, '
        + '$(n + \\tfrac{1}{2})\\lambda$ with $n = 1$.',
      ],
      answer: 'Quiet. '
        + 'The waves arrive exactly out of step, so the displacements '
        + 'cancel. '
        + 'Say the path difference is $1.5\\lambda$, because that is the '
        + 'statement that carries the mark.',
    },
    {
      level: 6,
      ask: 'A note of 170 Hz and green light of wavelength '
        + '$5.0 \\times 10^{-7}$ m both reach a doorway 1 m wide. '
        + 'Take the speed of sound as 340 m per second. '
        + 'Show by calculation which one diffracts noticeably.',
      steps: [
        { math: '\\lambda_{\\text{sound}} = \\frac{340}{170} = 2\\ \\text{m}' },
        { math: '\\frac{\\lambda_{\\text{sound}}}{1\\ \\text{m}} = 2', why: 'The wavelength is twice the gap, so the gap is a small obstacle to this wave.' },
        { math: '\\frac{5.0 \\times 10^{-7}}{1} = 5 \\times 10^{-7}', why: 'The wavelength of light is two million times smaller than the gap.' },
      ],
      answer: 'The sound diffracts and spreads round the doorway; the light '
        + 'does not and casts a sharp shadow. '
        + 'The reason to write down is that noticeable diffraction needs a '
        + 'gap comparable with the wavelength.',
    },
  ],

  traps: [
    {
      mistake: 'Saying a louder sound travels faster.',
      why: 'Loudness is amplitude. '
        + 'Speed is fixed by the medium, so the same air carries a shout '
        + 'and a whisper at the same 340 metres per second.',
    },
    {
      mistake: 'Measuring wavelength from a crest to the next trough.',
      why: 'That is half a wave. '
        + 'A wavelength is crest to crest, or trough to trough.',
    },
    {
      mistake: 'Leaving a frequency in kilohertz or megahertz.',
      why: 'The equation needs hertz with metres. '
        + 'Convert first, as a separate line, so the examiner sees it.',
    },
    {
      mistake: 'Answering a diffraction question with only the word diffraction.',
      why: 'The mark is for comparing the wavelength with the size of the '
        + 'gap. '
        + 'Name both sizes.',
    },
    {
      mistake: 'Saying sound can be polarised.',
      why: 'Sound is longitudinal, so there is no plane of vibration to '
        + 'restrict. '
        + 'Only transverse waves polarise.',
    },
  ],

  extension:
    'Radio waves can be metres long. '
    + 'Gamma rays are smaller than an atom. '
    + 'Yet the two are the same kind of wave. '
    + 'Both are transverse, and both travel at $3 \\times 10^{8}$ m '
    + 'per second in empty space. '
    + 'Since the speed is fixed, the frequency and the wavelength say '
    + 'the same thing twice. '
    + 'Give one and you have given the other. '
    + 'That is why a doctor speaks of the wavelength of an X ray, and '
    + 'a radio engineer of the frequency of a transmitter, about '
    + 'waves that differ only in scale.',

  questions: [
    {
      id: 'wv-1',
      ask: 'A wave carries:',
      kind: 'choice',
      options: [
        'Energy, without carrying the material with it',
        'Both energy and the material it passes through',
        'Material only',
      ],
      answer: 'Energy, without carrying the material with it',
      teach: 'The leaf on the water bobs and stays. '
        + 'That sentence is worth a mark on its own in a definition '
        + 'question.',
      level: 3,
    },
    {
      id: 'wv-2',
      ask: 'A wave has frequency 20 Hz and wavelength 1.5 m. '
        + 'Find its speed in metres per second.',
      kind: 'numeric',
      options: [],
      answer: '30',
      teach: 'Use $v = f\\lambda$: twenty waves a second, each 1.5 m long, '
        + 'so 30 m of wave passes each second.',
      level: 4,
    },
    {
      id: 'wv-3',
      ask: 'Sound bends round a wall but light does not, because:',
      kind: 'choice',
      options: [
        'The wavelength of sound is close to the size of the wall',
        'Sound is louder than light',
        'Sound is a longitudinal wave',
      ],
      answer: 'The wavelength of sound is close to the size of the wall',
      teach: 'Diffraction depends on wavelength against the size of the '
        + 'obstacle. '
        + 'Being longitudinal has nothing to do with it.',
      level: 5,
    },
    {
      id: 'wv-4',
      ask: 'Two paths from two speakers differ by exactly two wavelengths. '
        + 'The listener hears:',
      kind: 'choice',
      options: [
        'A loud sound, because the waves arrive in step',
        'Nothing at all',
        'A quiet sound, because the waves cancel',
      ],
      answer: 'A loud sound, because the waves arrive in step',
      teach: 'A whole number of wavelengths is the constructive condition, '
        + '$n\\lambda$. '
        + 'Half wavelengths are the quiet ones.',
      level: 5,
    },
  ],
})

/* ── sound ──────────────────────────────────────────────────────────────── */

teach({
  topicId: 'sound-physics',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Sound is a longitudinal wave and needs a material to travel in. '
      + 'A pipe or a string sounds its note because the wave reflected '
      + 'from the far end fits exactly over the one going out, making a '
      + 'standing wave. '
      + 'So the note is decided by the length, and by where the nodes are '
      + 'forced to sit.',
    method: [
      'Draw the pipe or the string and mark a node at every fixed or closed end.',
      'Fit the simplest standing wave that obeys those ends, and read $\\lambda$ off the length.',
      'Put that $\\lambda$ into $v = f\\lambda$.',
    ],
  },

  why:
    'A boy at a stall blows across the mouth of an empty Fanta bottle and '
    + 'gets a low hoot. '
    + 'He drinks half of a second bottle and blows that one, and the note '
    + 'is higher. '
    + 'He has changed nothing about his mouth and nothing about the air '
    + 'outside. '
    + 'He has only changed the length of air left inside the bottle. '
    + 'How does the length of a column of air decide a note, and could you '
    + 'work out the note before blowing?',

  notation:
    'A node is a point in a standing wave where there is no movement at '
    + 'all. '
    + 'An antinode is a point where the movement is greatest. '
    + 'The fundamental is the lowest note a pipe or string will sound, and '
    + 'it is also called the first harmonic. '
    + 'The symbol $L$ is the length of the pipe or the string, in metres. '
    + 'For a string, $T$ is the tension in newtons, and the Greek letter '
    + 'mu, written $\\mu$ and said "mew", is the mass of one metre of the '
    + 'string, in kilograms per metre. '
    + 'Take care: $T$ means tension here and period in the last lesson, so '
    + 'say which one you mean when you write it.',

  idea:
    'Sound is a longitudinal wave of compressions and rarefactions, so it '
    + 'needs a medium and cannot cross a vacuum. '
    + 'Its speed in air is about 340 metres per second, rising with '
    + 'temperature and quite unaffected by pressure or by loudness. '
    + 'When a wave meets the end of a pipe or a string it reflects, and the '
    + 'returning wave lies over the outgoing one. '
    + 'If the length is right the two lock into a standing wave with fixed '
    + 'nodes and antinodes, and that is resonance. '
    + 'A closed end forces a node, an open end allows an antinode, and a '
    + 'fixed end of a string forces a node. '
    + 'So for a pipe closed at one end the shortest fit is a quarter of a '
    + 'wave, giving '
    + '$$L = \\frac{\\lambda}{4}, \\qquad f_1 = \\frac{v}{4L},$$ '
    + 'and it sounds only the odd harmonics. '
    + 'For a pipe open at both ends the shortest fit is half a wave, '
    + '$L = \\frac{\\lambda}{2}$ and $f_1 = \\frac{v}{2L}$, and all '
    + 'harmonics are present. '
    + 'For a stretched string fixed at both ends, '
    + '$$f_1 = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}.$$ '
    + 'Pitch is frequency, loudness is amplitude, and quality is the mixture '
    + 'of harmonics, which is why a flute and a trumpet on the same note '
    + 'still sound different.',

  tables: [
    {
      caption: 'What each kind of pipe sounds, and which harmonics it gives',
      columns: ['Pipe', 'Node and antinode', 'Lowest note', 'Harmonics present'],
      rows: [
        ['Closed one end', 'Node at closed end, antinode at open end',
          'Speed divided by four times the length', 'Odd only: first, third, fifth'],
        ['Open both ends', 'Antinode at each end, node in the middle',
          'Speed divided by twice the length', 'All: first, second, third'],
        ['String fixed both ends', 'Node at each end, antinode in the middle',
          'Depends on tension and thickness too', 'All: first, second, third'],
      ],
      note: 'A closed pipe sounds one octave below an open pipe of the same '
        + 'length, because it only fits a quarter of a wave where the open '
        + 'one fits a half.',
    },
    {
      caption: 'What changes the speed of sound in air and what does not',
      columns: ['Change', 'Effect on the speed', 'Why'],
      rows: [
        ['Hotter air', 'Faster', 'Molecules already move faster, so they pass the push on sooner'],
        ['Louder sound', 'No change', 'Loudness is amplitude, not speed'],
        ['Higher note', 'No change', 'The medium sets the speed, so the wavelength adjusts instead'],
        ['Humid air', 'Slightly faster', 'Water vapour is lighter than the air it replaces'],
        ['Higher pressure alone', 'No change', 'Density rises with it and the two effects cancel'],
      ],
      note: 'Three of the five rows are no change, and those are the rows '
        + 'examiners ask about.',
    },
  ],

  figure: {
    alt: 'Three standing wave drawings side by side. The first is a pipe '
      + 'closed at the bottom and open at the top, holding a quarter of a '
      + 'wave, with a node marked at the closed bottom and an antinode at '
      + 'the open top, and the length labelled as a quarter of a '
      + 'wavelength. The second is a pipe open at both ends holding half a '
      + 'wave, with antinodes at both ends and a node marked in the middle, '
      + 'and the length labelled as half a wavelength. The third is a '
      + 'string held between two fixed pegs with a single hump between '
      + 'them, nodes at both pegs and an antinode in the middle, and the '
      + 'length labelled as half a wavelength.',
    svg: '<svg viewBox="0 0 660 330" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="60" y1="60" x2="60" y2="240"/>'
      + '<line x1="120" y1="60" x2="120" y2="240"/>'
      + '<line x1="60" y1="240" x2="120" y2="240" stroke-width="4"/>'
      + '<path d="M90 240 Q60 150 90 60" stroke="#1d4ed8"/>'
      + '<path d="M90 240 Q120 150 90 60" stroke="#1d4ed8"/>'
      + '<circle cx="90" cy="240" r="4" fill="currentColor" stroke="none"/>'
      + '<text x="90" y="268" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">node</text>'
      + '<text x="90" y="48" font-size="12" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">antinode</text>'
      + '<text x="90" y="296" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">closed pipe</text>'
      + '<text x="90" y="314" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">length is a quarter wave</text>'
      + '<line x1="280" y1="60" x2="280" y2="240"/>'
      + '<line x1="340" y1="60" x2="340" y2="240"/>'
      + '<path d="M310 60 Q268 150 310 240" stroke="#1d4ed8"/>'
      + '<path d="M310 60 Q352 150 310 240" stroke="#1d4ed8"/>'
      + '<circle cx="310" cy="150" r="4" fill="currentColor" stroke="none"/>'
      + '<text x="356" y="155" font-size="12" fill="currentColor" '
      + 'stroke="none">node</text>'
      + '<text x="310" y="48" font-size="12" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">antinode</text>'
      + '<text x="310" y="262" font-size="12" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">antinode</text>'
      + '<text x="310" y="296" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">open pipe</text>'
      + '<text x="310" y="314" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">length is a half wave</text>'
      + '<line x1="470" y1="100" x2="470" y2="200" stroke-width="4"/>'
      + '<line x1="620" y1="100" x2="620" y2="200" stroke-width="4"/>'
      + '<path d="M470 150 Q545 90 620 150" stroke="#1d4ed8"/>'
      + '<path d="M470 150 Q545 210 620 150" stroke="#1d4ed8"/>'
      + '<circle cx="470" cy="150" r="4" fill="currentColor" stroke="none"/>'
      + '<circle cx="620" cy="150" r="4" fill="currentColor" stroke="none"/>'
      + '<text x="470" y="226" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">node</text>'
      + '<text x="620" y="226" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">node</text>'
      + '<text x="545" y="80" font-size="12" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">antinode</text>'
      + '<text x="545" y="296" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">string on two pegs</text>'
      + '<text x="545" y="314" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">length is a half wave</text>'
      + '</svg>',
  },

  mechanism:
    'Everything in this topic comes from one rule about ends, and '
    + 'the rule is physical rather than mathematical. Air at a closed '
    + 'end cannot move, because there is a solid there, so that point '
    + 'must be a node. Air at an open end is free to move as much as '
    + 'it likes, so that point is an antinode. A string tied to a peg '
    + 'cannot move at the peg, so that is a node. Once you have '
    + 'marked the ends, only certain wavelengths will fit between '
    + 'them, and those are the only notes the pipe or string can '
    + 'sound.\n\n'
    + 'That is why resonance is selective: you are not choosing the '
    + 'note, the length is. Work the bottle through. A bottle is a '
    + 'pipe closed at the bottom, so the shortest standing wave that '
    + 'fits is a quarter of a wavelength, $L = \\frac{\\lambda}{4}$, '
    + 'which rearranges to $\\lambda = 4L$. With $v = f\\lambda$ this '
    + 'gives $f = \\frac{v}{4L}$. Read what that says: a shorter air '
    + 'column means a bigger $f$, which means a higher note. Drinking '
    + 'half the bottle shortened the air column, so the note rose, '
    + 'exactly as the boy heard.\n\n'
    + 'Three places lose marks. The first is using $\\frac{v}{2L}$ '
    + 'for a bottle, a test tube or a resonance tube standing in '
    + 'water, because those are all closed at the bottom. Draw the '
    + 'node before choosing the formula and the mistake cannot '
    + 'happen. The second is the resonance tube experiment itself. '
    + 'The first length at which the tube sounds is a quarter '
    + 'wavelength, and the second is three quarters, so the '
    + 'difference between the two lengths is half a wavelength. '
    + 'Taking that difference is the right way to do the experiment, '
    + 'because the antinode actually sits a little above the open '
    + 'end, and subtracting one length from the other cancels that '
    + 'end correction instead of having to measure it. Say that in '
    + 'the examination, because the examiner is looking for the words '
    + 'end correction.\n\n'
    + 'The third is the echo method for the speed of sound. The sound '
    + 'goes to the wall and comes back, so the distance is $2d$ and '
    + 'not $d$, and forgetting the two halves the answer. The '
    + 'sentence to write is that the sound travelled twice the '
    + 'distance to the wall. A note on apparatus. A resonance tube '
    + 'and a set of tuning forks are the proper way to see all of '
    + 'this, and many schools do not own them. Every calculation '
    + 'above can be done from a drawing, and a bottle with water in '
    + 'it will show the effect of length well enough to be '
    + 'convincing.\n\n'
    + 'What a bottle cannot give you is a measured value for the '
    + 'speed of sound, because you do not know the frequency you are '
    + 'blowing. For that you need a fork of known frequency, or two '
    + 'people, a wall and a stopwatch.',

  recap:
    'A note is high or low depending on how fast the thing making it '
    + 'shakes. '
    + 'Pluck a thin guitar string and it shakes quickly and sounds high. '
    + 'Pluck the thick one and it shakes slowly and sounds low. '
    + 'The number of shakes each second is called the frequency, and that '
    + 'is what we hear as pitch. '
    + 'How hard you pluck changes how loud it is, not how high. '
    + 'Sound also has to have something to travel in. '
    + 'There is air between the string and your ear, and the string pushes '
    + 'that air, which pushes the next air, and so on to your eardrum. '
    + 'This lesson explains why a particular length of string or of air '
    + 'gives one particular note and not another.',

  method: [
    'Draw the pipe or the string.',
    'Mark a node at every closed or fixed end and an antinode at every open end.',
    'Sketch the simplest wave that obeys those marks.',
    'Read the length as a fraction of a wavelength, then write $\\lambda$ in terms of $L$.',
    'Substitute into $v = f\\lambda$.',
    'For a string under tension, use $f_1 = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}$.',
    'For an echo, remember the sound covered twice the distance.',
    'State the unit, and check that a shorter length gave a higher note.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A tube closed at one end is 20 cm long. '
        + 'Take the speed of sound as 340 m per second. '
        + 'Find the frequency of its fundamental note.',
      steps: [
        { math: 'L = 0.20\\ \\text{m}', why: 'Convert to metres first.' },
        { math: '\\lambda = 4L = 0.80\\ \\text{m}', why: 'A closed pipe holds a quarter wave, so the wave is four times the length.' },
        { math: 'f = \\frac{v}{\\lambda} = \\frac{340}{0.80}' },
        { math: 'f = 425\\ \\text{Hz}' },
      ],
      answer: '$425$ Hz.',
    },
    {
      level: 4,
      ask: 'A boy claps once and hears the echo from a wall 85 m away after '
        + '0.5 s. Find the speed of sound.',
      steps: [
        { math: 'd_{\\text{total}} = 2 \\times 85 = 170\\ \\text{m}', why: 'The sound went to the wall and came back.' },
        { math: 'v = \\frac{170}{0.5}' },
        { math: 'v = 340\\ \\text{m s}^{-1}' },
      ],
      answer: '$340$ m per second. '
        + 'Leaving out the factor of two would have given $170$, which is '
        + 'the commonest wrong answer in this topic.',
    },
    {
      level: 5,
      ask: 'In a resonance tube experiment with a 512 Hz fork, the first '
        + 'resonance is at 16.0 cm and the second at 49.0 cm. '
        + 'Find the speed of sound.',
      steps: [
        { math: 'L_2 - L_1 = 49.0 - 16.0 = 33.0\\ \\text{cm}', why: 'The first length is a quarter wave and the second is three quarters, so the gap is a half wave.' },
        { math: '\\tfrac{1}{2}\\lambda = 0.330\\ \\text{m}' },
        { math: '\\lambda = 0.660\\ \\text{m}', why: 'Using the difference cancels the end correction, so this value needs no adjusting.' },
        { math: 'v = f\\lambda = 512 \\times 0.660' },
        { math: 'v = 338\\ \\text{m s}^{-1}' },
      ],
      answer: 'About $338$ m per second. '
        + 'Write the sentence about the end correction: it is a mark.',
    },
    {
      level: 6,
      ask: 'A string 0.60 m long has a mass per unit length of '
        + '$1.0 \\times 10^{-3}$ kg per metre and is tightened to 60 N. '
        + 'Find its fundamental frequency, and say what happens to the note '
        + 'if the tension is raised to 240 N.',
      steps: [
        { math: 'f_1 = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}' },
        { math: '\\sqrt{\\frac{60}{1.0 \\times 10^{-3}}} = \\sqrt{60\\,000} = 245' },
        { math: 'f_1 = \\frac{245}{2 \\times 0.60} = 204\\ \\text{Hz}' },
        { math: '240 = 4 \\times 60', why: 'Frequency goes as the square root of tension, so four times the tension is twice the frequency.' },
        { math: 'f_1 = 408\\ \\text{Hz}' },
      ],
      answer: 'About $204$ Hz, rising to about $408$ Hz, one octave higher. '
        + 'This is exactly what a drummer does when he tightens the pegs on '
        + 'an atumpan to bring it up to pitch.',
    },
  ],

  traps: [
    {
      mistake: 'Treating a bottle or a resonance tube as an open pipe.',
      why: 'The water or the base closes the bottom, which forces a node '
        + 'there. '
        + 'Draw the ends before picking a formula.',
    },
    {
      mistake: 'Forgetting that an echo travels there and back.',
      why: 'The distance in the calculation is twice the distance to the '
        + 'wall, so leaving out the two halves the speed.',
    },
    {
      mistake: 'Saying a louder clap gives a quicker echo.',
      why: 'Amplitude does not change speed. '
        + 'The echo returns at the same moment however hard you clap.',
    },
    {
      mistake: 'Using one resonance length instead of the difference of two.',
      why: 'The antinode sits slightly above the open end. '
        + 'The difference cancels that end correction; a single length does '
        + 'not.',
    },
  ],

  extension:
    'Quality, or timbre, is the part of this topic that the formulae do not '
    + 'reach. '
    + 'Pluck a string and you do not get the fundamental alone, you get a '
    + 'mixture of harmonics whose strengths depend on where you plucked '
    + 'and what the instrument is made of. '
    + 'That mixture is why a seperewa and a guitar playing the same note '
    + 'are still recognisable as different instruments, and why a closed '
    + 'pipe, which sounds only odd harmonics, has the hollow tone it does.',

  questions: [
    {
      id: 'so-1',
      ask: 'Sound cannot travel through a vacuum because:',
      kind: 'choice',
      options: [
        'It is a longitudinal wave and needs particles to pass the push on',
        'A vacuum is too cold',
        'It would travel too fast',
      ],
      answer: 'It is a longitudinal wave and needs particles to pass the push on',
      teach: 'Compressions need something to compress. '
        + 'Light, being an electromagnetic wave, needs nothing and so '
        + 'crosses space freely.',
      level: 3,
    },
    {
      id: 'so-2',
      ask: 'A pipe closed at one end is 10 cm long. Taking the speed of '
        + 'sound as 340 m per second, find its fundamental frequency in '
        + 'hertz.',
      kind: 'numeric',
      options: [],
      answer: '850',
      teach: '$\\lambda = 4L = 0.4$ m, so $f = \\frac{340}{0.4} = 850$ Hz.',
      level: 5,
    },
    {
      id: 'so-3',
      ask: 'Water is poured into a bottle you are blowing across. The note:',
      kind: 'choice',
      options: [
        'Rises, because the air column is shorter',
        'Falls, because there is more water',
        'Stays the same',
      ],
      answer: 'Rises, because the air column is shorter',
      teach: '$f = \\frac{v}{4L}$, so a smaller $L$ gives a bigger $f$.',
      level: 4,
    },
    {
      id: 'so-4',
      ask: 'In a resonance tube experiment, the difference between the '
        + 'first and second resonance lengths is:',
      kind: 'choice',
      options: [
        'Half a wavelength',
        'A quarter of a wavelength',
        'A whole wavelength',
      ],
      answer: 'Half a wavelength',
      teach: 'A quarter wave to three quarters is a difference of a half. '
        + 'Using the difference also cancels the end correction.',
      level: 6,
    },
  ],
})

/* ── reflection and refraction ──────────────────────────────────────────── */

teach({
  topicId: 'reflection-refraction-physics',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Light bounces off a mirror with the angle of reflection equal to '
      + 'the angle of incidence. '
      + 'It bends on entering a new medium because its speed changes, and '
      + '$n = \\frac{\\sin i}{\\sin r}$. '
      + 'Mirrors and lenses both obey '
      + '$\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}$, '
      + 'with the real is positive sign convention.',
    method: [
      'Draw the ray, the surface, and the normal at the point where they meet.',
      'Measure every angle from the normal, never from the surface.',
      'For an image, put $u$, $v$ and $f$ in with their signs, then solve.',
    ],
  },

  why:
    'A fisherman at Elmina pushes his pole into the water and the pole '
    + 'looks bent at the surface, though he knows it is straight. '
    + 'He also knows, from years of work, that the fish he is aiming at is '
    + 'not quite where he sees it, and that he must aim a little low. '
    + 'The pole is straight and the fish is real. '
    + 'So what is happening at the surface of the water that moves them '
    + 'both?',

  notation:
    'The normal is the line drawn at right angles to the surface at the '
    + 'point where the ray strikes it. '
    + 'Every angle in this topic is measured from the normal, and an angle '
    + 'measured from the surface is simply wrong, not merely a different '
    + 'convention. '
    + 'The letter $u$ is the object distance, $v$ is the image distance, '
    + 'and $f$ is the focal length, all in the same unit. '
    + 'The letter $n$ is the refractive index, which is a ratio and so has '
    + 'no unit. '
    + 'Magnification $m$ is also a ratio with no unit. '
    + 'In the real is positive convention, distances to real objects, real '
    + 'images and concave mirrors or converging lenses are positive, and '
    + 'distances to virtual images, convex mirrors and diverging lenses are '
    + 'negative.',

  idea:
    'The laws of reflection say the incident ray, the reflected ray and '
    + 'the normal lie in one plane, and the angle of incidence equals the '
    + 'angle of reflection. '
    + 'Refraction happens because light travels at different speeds in '
    + 'different materials. '
    + 'Snell’s law gives '
    + '$$n = \\frac{\\sin i}{\\sin r} = \\frac{c}{v_{\\text{medium}}} '
    + '= \\frac{\\text{real depth}}{\\text{apparent depth}}.$$ '
    + 'Going into a denser medium the ray bends towards the normal; coming '
    + 'out it bends away. '
    + 'Coming out of a dense medium there is an angle of incidence beyond '
    + 'which no light escapes at all, the critical angle $C$, where '
    + '$\\sin C = \\frac{1}{n}$, and past it every ray is totally '
    + 'internally reflected. '
    + 'Curved mirrors and thin lenses both obey '
    + '$$\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}, \\qquad '
    + 'm = \\frac{v}{u} = \\frac{\\text{image height}}'
    + '{\\text{object height}}.$$ '
    + 'A concave mirror and a converging lens can make a real image, which '
    + 'can be caught on a screen. '
    + 'A plane mirror, a convex mirror and a diverging lens make only '
    + 'virtual images, which cannot.',

  tables: [
    {
      caption: 'What a concave mirror does with an object at each distance',
      columns: ['Object position', 'Image position', 'Image kind', 'Size'],
      rows: [
        ['Beyond the centre of curvature', 'Between focus and centre', 'Real and inverted', 'Smaller'],
        ['At the centre of curvature', 'At the centre of curvature', 'Real and inverted', 'Same size'],
        ['Between centre and focus', 'Beyond the centre', 'Real and inverted', 'Larger'],
        ['At the focus', 'No image forms', 'Rays leave parallel', 'None'],
        ['Nearer than the focus', 'Behind the mirror', 'Virtual and upright', 'Larger'],
      ],
      note: 'The last row is the shaving mirror and the dentist mirror. '
        + 'Everything above it can be caught on a screen; that row cannot.',
    },
    {
      caption: 'Refractive index and critical angle for four materials',
      columns: ['Material', 'Refractive index', 'Critical angle', 'Speed of light inside'],
      rows: [
        ['Water', '1.33', 'About 49 degrees', 'About 226 thousand km per second'],
        ['Ordinary glass', '1.50', 'About 42 degrees', 'About 200 thousand km per second'],
        ['Dense glass', '1.65', 'About 37 degrees', 'About 182 thousand km per second'],
        ['Diamond', '2.42', 'About 24 degrees', 'About 124 thousand km per second'],
      ],
      note: 'The denser the material, the slower the light and the smaller '
        + 'the critical angle. '
        + 'Diamond sparkles because almost every ray inside it is trapped '
        + 'and bounced about.',
    },
  ],

  figure: {
    alt: 'Two drawings. On the left, a ray in air strikes a flat water '
      + 'surface, with a dashed normal drawn at right angles to the surface '
      + 'at the point of entry. The angle between the incoming ray and the '
      + 'normal is labelled angle of incidence, and the ray inside the '
      + 'water is drawn closer to the normal with its angle labelled angle '
      + 'of refraction, and a note says the ray bends towards the normal '
      + 'on entering the denser medium. On the right, three rays leave a '
      + 'point inside glass and head up to the surface: the first at a '
      + 'small angle escapes into the air, the second strikes at exactly '
      + 'the critical angle and runs along the surface, and the third at a '
      + 'larger angle is reflected back down inside the glass and labelled '
      + 'total internal reflection.',
    svg: '<svg viewBox="0 0 660 340" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="30" y1="150" x2="300" y2="150"/>'
      + '<rect x="30" y="150" width="270" height="120" fill="#1d4ed8" '
      + 'fill-opacity="0.10" stroke="none"/>'
      + '<line x1="165" y1="60" x2="165" y2="260" stroke-dasharray="4 4" '
      + 'stroke-opacity="0.6"/>'
      + '<line x1="70" y1="54" x2="165" y2="150" stroke="#b4531a"/>'
      + '<path d="M152 134 L165 150 L149 147" stroke="#b4531a"/>'
      + '<line x1="165" y1="150" x2="215" y2="252" stroke="#b4531a"/>'
      + '<text x="178" y="104" font-size="12" fill="currentColor" '
      + 'stroke="none">angle i</text>'
      + '<text x="178" y="206" font-size="12" fill="currentColor" '
      + 'stroke="none">angle r</text>'
      + '<text x="36" y="142" font-size="12" fill="currentColor" '
      + 'stroke="none">air</text>'
      + '<text x="36" y="170" font-size="12" fill="currentColor" '
      + 'stroke="none">water</text>'
      + '<text x="165" y="296" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'bends towards the normal going in</text>'
      + '<text x="165" y="314" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'angles are measured from the dashed normal</text>'
      + '<line x1="360" y1="150" x2="640" y2="150"/>'
      + '<rect x="360" y="150" width="280" height="120" fill="#1d4ed8" '
      + 'fill-opacity="0.10" stroke="none"/>'
      + '<circle cx="430" cy="250" r="4" fill="#b4531a" stroke="none"/>'
      + '<line x1="430" y1="250" x2="450" y2="150" stroke="#b4531a"/>'
      + '<line x1="450" y1="150" x2="492" y2="68" stroke="#b4531a"/>'
      + '<text x="500" y="64" font-size="12" fill="currentColor" '
      + 'stroke="none">escapes</text>'
      + '<line x1="430" y1="250" x2="530" y2="150" stroke="#0f8a4d"/>'
      + '<line x1="530" y1="150" x2="610" y2="150" stroke="#0f8a4d"/>'
      + '<text x="548" y="138" font-size="12" fill="#0f8a4d" '
      + 'stroke="none">at the critical angle</text>'
      + '<line x1="430" y1="250" x2="570" y2="180" stroke="#7c3aed"/>'
      + '<line x1="570" y1="180" x2="620" y2="262" stroke="#7c3aed"/>'
      + '<text x="430" y="300" font-size="12" fill="#7c3aed" '
      + 'stroke="none">past it, all reflected back inside</text>'
      + '<line x1="530" y1="90" x2="530" y2="210" stroke-dasharray="4 4" '
      + 'stroke-opacity="0.6"/>'
      + '<text x="614" y="142" font-size="12" text-anchor="end" '
      + 'fill="currentColor" stroke="none">air</text>'
      + '</svg>',
  },

  mechanism:
    'Refraction has one cause and everything else follows from it. '
    + 'Light travels more slowly in water or glass than in air, and '
    + 'when a wavefront reaches the surface at an angle, one edge of '
    + 'it is slowed before the other, so the whole front swings '
    + 'round. That is the same thing that happens to a car driving '
    + 'off tarmac onto sand at an angle: the wheel that reaches the '
    + 'sand first slows first, and the car pulls to that side. Hold '
    + 'on to that cause and the direction of bending never needs '
    + 'remembering. Into a slower medium, the ray bends towards the '
    + 'normal. Out into a faster one, away from the normal.\n\n'
    + 'Now the fisherman. Rays leaving the fish bend away from the '
    + 'normal as they come out of the water, so they reach his eye '
    + 'travelling at a steeper angle than they left. His eye, which '
    + 'cannot know they were bent, works backwards along those '
    + 'steeper lines and places the fish higher and nearer the '
    + 'surface than it really is. That shift is what $n = '
    + '\\frac{\\text{real depth}}{\\text{apparent depth}}$ measures, '
    + 'and it is why he aims low. His pole looks bent for the same '
    + 'reason, applied to the part under water only.\n\n'
    + 'Four places lose marks. The first is measuring an angle from '
    + 'the surface instead of from the normal. This is not a small '
    + 'error: it turns an angle of 30 degrees into 60 degrees and '
    + 'every later line is wrong. Draw the normal as a dashed line '
    + 'before anything else, every single time. The second is the '
    + 'sign convention in $\\frac{1}{f} = \\frac{1}{u} + '
    + '\\frac{1}{v}$. Write the convention down at the top of the '
    + 'answer, in words, and then put each number in with its sign. A '
    + 'virtual image comes out with a negative $v$, and that negative '
    + 'sign is the answer to the part asking what kind of image it '
    + 'is, so it carries a mark of its own.\n\n'
    + 'The third is forgetting that the formula gives a reciprocal. '
    + 'Having worked out $\\frac{1}{v} = 0.05$, the answer is $20$ cm '
    + 'and not $0.05$ cm, and the number of candidates who stop one '
    + 'step early is large. The fourth is the critical angle. Total '
    + 'internal reflection can only happen going from the denser '
    + 'medium to the less dense one, never the other way, and it '
    + 'needs the angle of incidence to be greater than $C$. Both '
    + 'conditions have to be stated, because an answer giving only '
    + 'one of them is an answer that has not understood it.\n\n'
    + 'This is the physics behind the fibre optic cable that carries '
    + 'internet traffic along the coast: light put in at one end '
    + 'strikes the wall of the fibre well past the critical angle, so '
    + 'it cannot leak out and simply bounces along the whole length. '
    + 'A note on apparatus. The proper tools here are an optical '
    + 'bench, a ray box and a glass block, and plenty of schools have '
    + 'none of them. Every ray diagram and every calculation on this '
    + 'page can be done with a sharp pencil, a ruler and a '
    + 'protractor, and a coin in a cup of water will show apparent '
    + 'depth convincingly.\n\n'
    + 'What paper cannot give is a measured refractive index. For '
    + 'that you need the block and the pins, and the lesson says so '
    + 'rather than pretending otherwise.',

  recap:
    'Light travels in straight lines. '
    + 'That is why you get a sharp shadow, and why you cannot see round a '
    + 'corner. '
    + 'Two things can change its direction. '
    + 'A shiny surface bounces it back, which is reflection, and that is '
    + 'how you see yourself in a mirror. '
    + 'A clear material that light can pass into, like water or glass, '
    + 'makes it change direction as it goes in, which is refraction. '
    + 'You have seen both: your face in a window, and a straw that looks '
    + 'broken in a glass of water. '
    + 'An image is where the light appears to come from. '
    + 'If you can catch it on a screen it is real; if you can only see it '
    + 'by looking into the mirror or lens, it is virtual.',

  method: [
    'Draw the surface, the ray, and a dashed normal at the point of contact.',
    'Mark every angle from the normal and label them $i$ and $r$.',
    'For refraction, use $n = \\frac{\\sin i}{\\sin r}$ with the ray going into the denser medium.',
    'For a critical angle, use $\\sin C = \\frac{1}{n}$ and state both conditions.',
    'For a mirror or lens, write the sign convention down in words first.',
    'Substitute into $\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}$ with signs.',
    'Take the reciprocal at the end, and say what the sign of $v$ means.',
    'Find the magnification as $\\frac{v}{u}$ and describe the image in words.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A ray strikes a glass surface at 30 degrees to the normal and '
        + 'refracts at 19.5 degrees. Find the refractive index of the glass.',
      steps: [
        { math: 'n = \\frac{\\sin i}{\\sin r} = \\frac{\\sin 30^\\circ}{\\sin 19.5^\\circ}' },
        { math: 'n = \\frac{0.500}{0.334}' },
        { math: 'n = 1.50', why: 'A ratio, so there is no unit to write.' },
      ],
      answer: '$n = 1.50$, which is ordinary window glass.',
    },
    {
      level: 4,
      ask: 'A coin lies at the bottom of a bucket of water 48 cm deep. '
        + 'Taking $n = 1.33$ for water, how deep does the coin appear?',
      steps: [
        { math: 'n = \\frac{\\text{real depth}}{\\text{apparent depth}}' },
        { math: '1.33 = \\frac{48}{d}' },
        { math: 'd = \\frac{48}{1.33} = 36\\ \\text{cm}', why: 'The apparent depth is always the smaller one, which is the check to make.' },
      ],
      answer: 'About $36$ cm. '
        + 'The bucket looks three quarters as deep as it is, which is why '
        + 'people misjudge the depth of water.',
    },
    {
      level: 5,
      ask: 'An object is placed 30 cm from a concave mirror of focal length '
        + '20 cm. Find the image distance and the magnification, and '
        + 'describe the image.',
      steps: [
        'Real is positive, so $f = +20$ cm and $u = +30$ cm for a concave '
        + 'mirror and a real object. State this.',
        { math: '\\frac{1}{20} = \\frac{1}{30} + \\frac{1}{v}' },
        { math: '\\frac{1}{v} = \\frac{1}{20} - \\frac{1}{30} = \\frac{3 - 2}{60} = \\frac{1}{60}' },
        { math: 'v = +60\\ \\text{cm}', why: 'Positive, so the image is real and in front of the mirror.' },
        { math: 'm = \\frac{v}{u} = \\frac{60}{30} = 2' },
      ],
      answer: 'The image is $60$ cm in front of the mirror, real, inverted '
        + 'and twice the size. '
        + 'The object sat between the focus and the centre of curvature, '
        + 'and the table says exactly that.',
    },
    {
      level: 6,
      ask: 'The critical angle for a glass fibre is 42 degrees. '
        + 'Find the refractive index of the glass and the speed of light '
        + 'inside it. Take $c = 3.0 \\times 10^{8}$ m per second.',
      steps: [
        { math: '\\sin C = \\frac{1}{n}' },
        { math: 'n = \\frac{1}{\\sin 42^\\circ} = \\frac{1}{0.669}' },
        { math: 'n = 1.49' },
        { math: 'n = \\frac{c}{v}, \\quad v = \\frac{3.0 \\times 10^{8}}{1.49}' },
        { math: 'v = 2.0 \\times 10^{8}\\ \\text{m s}^{-1}' },
      ],
      answer: '$n = 1.49$ and the light travels at about '
        + '$2.0 \\times 10^{8}$ m per second inside. '
        + 'Light entering the fibre at a shallow angle meets the wall well '
        + 'past 42 degrees, so it is trapped and carried along.',
    },
  ],

  traps: [
    {
      mistake: 'Measuring the angle from the surface instead of the normal.',
      why: 'The two differ by ninety degrees, so every later line is '
        + 'wrong. '
        + 'Draw the dashed normal before the ray.',
    },
    {
      mistake: 'Stopping at $\\frac{1}{v}$ and calling it the answer.',
      why: 'The formula gives the reciprocal. '
        + 'Invert it, and sanity check the size against the focal length.',
    },
    {
      mistake: 'Putting a positive $v$ for a virtual image.',
      why: 'In the real is positive convention a virtual image has a '
        + 'negative $v$, and that sign is what identifies it.',
    },
    {
      mistake: 'Saying total internal reflection happens going into glass.',
      why: 'It only happens going from the denser to the less dense '
        + 'medium, and only past the critical angle. '
        + 'Both conditions must be written.',
    },
  ],

  extension:
    'A rainbow is both of these at once. '
    + 'Sunlight refracts entering a raindrop, reflects off the inside of '
    + 'the back of the drop, and refracts again coming out. '
    + 'Because the refractive index of water is slightly different for each '
    + 'colour, each colour leaves at a slightly different angle, and the '
    + 'eye sees them spread into a bow. '
    + 'The same slight difference is why a glass prism splits white light, '
    + 'and it is called dispersion.',

  questions: [
    {
      id: 'rr-1',
      ask: 'Angles in reflection and refraction are always measured from:',
      kind: 'choice',
      options: [
        'The normal to the surface',
        'The surface itself',
        'The horizontal',
      ],
      answer: 'The normal to the surface',
      teach: 'Draw the normal as a dashed line first and this mistake '
        + 'cannot be made.',
      level: 3,
    },
    {
      id: 'rr-2',
      ask: 'An object is 15 cm from a converging lens of focal length 10 cm. '
        + 'Find the image distance in centimetres.',
      kind: 'numeric',
      options: [],
      answer: '30',
      teach: '$\\frac{1}{v} = \\frac{1}{10} - \\frac{1}{15} '
        + '= \\frac{1}{30}$, so $v = 30$ cm, real and inverted.',
      level: 5,
    },
    {
      id: 'rr-3',
      ask: 'A pole in water looks bent because:',
      kind: 'choice',
      options: [
        'Light from the part under water bends as it leaves the surface',
        'Water pushes the pole sideways',
        'The water magnifies the pole',
      ],
      answer: 'Light from the part under water bends as it leaves the surface',
      teach: 'The eye traces the bent rays back in a straight line and so '
        + 'places that part of the pole in the wrong position.',
      level: 4,
    },
    {
      id: 'rr-4',
      ask: 'Light is totally internally reflected when it travels:',
      kind: 'choice',
      options: [
        'From a denser to a less dense medium, past the critical angle',
        'From a less dense to a denser medium, past the critical angle',
        'Along the normal at any angle',
      ],
      answer: 'From a denser to a less dense medium, past the critical angle',
      teach: 'Both conditions are needed. '
        + 'This is what keeps light inside a fibre optic cable.',
      level: 6,
    },
  ],
})

/* ── electrostatics ─────────────────────────────────────────────────────── */

teach({
  topicId: 'electrostatics-physics',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Two charges push or pull each other with a force that falls off as '
      + 'the square of the distance, '
      + '$F = \\frac{kq_1q_2}{r^{2}}$. '
      + 'A charge fills the space around it with a field, '
      + '$E = \\frac{F}{q}$, and a capacitor is a pair of conductors that '
      + 'stores charge, $C = \\frac{Q}{V}$.',
    method: [
      'Convert every charge to coulombs and every distance to metres.',
      'Use magnitudes in $F = \\frac{kq_1q_2}{r^{2}}$, then decide push or pull from the signs.',
      'For a field at a point, add the field of each charge as a vector.',
    ],
  },

  why:
    'In the dry harmattan weeks a girl pulls a nylon dress over her head '
    + 'and hears it crackle, and strands of her hair stand up and follow '
    + 'her comb. '
    + 'Nothing is burning and nothing is connected to the mains. '
    + 'In the same season a tall mast on a hill is deliberately fitted with '
    + 'a spike and a thick wire into the ground, and nobody can say it is '
    + 'for carrying current, because the wire goes nowhere. '
    + 'What is the hair following, and what is the spike for?',

  notation:
    'Charge $Q$ or $q$ is measured in coulombs, written C. '
    + 'One coulomb is an enormous charge, so questions use microcoulombs, '
    + 'written $\\mu$C and meaning a millionth of a coulomb, or nanocoulombs, '
    + 'nC, meaning a thousand millionth. '
    + 'The constant $k$ is about $9 \\times 10^{9}$ in newton metre squared '
    + 'per coulomb squared. '
    + 'Field strength $E$ is in newtons per coulomb, and it is a vector, so '
    + 'it has a direction. '
    + 'Potential $V$ is in volts and is a scalar, so potentials are added '
    + 'as plain numbers. '
    + 'Capacitance $C$ is in farads, written F, and a farad is so large '
    + 'that real capacitors are marked in microfarads. '
    + 'Note that $C$ is doing two jobs in this topic, coulomb as a unit and '
    + 'capacitance as a quantity, so write the unit after a number and the '
    + 'quantity before an equals sign.',

  idea:
    'There are two kinds of charge, positive and negative. '
    + 'Like charges repel and unlike attract, and charge is never created '
    + 'or destroyed, only moved. '
    + 'Coulomb’s law gives the force between two point charges as '
    + '$$F = \\frac{kq_1q_2}{r^{2}},$$ '
    + 'an inverse square law like gravitation, but vastly stronger and able '
    + 'to push as well as pull. '
    + 'A charge sets up an electric field in the space around it, and the '
    + 'field strength at a point is the force per unit positive charge '
    + 'placed there, '
    + '$E = \\frac{F}{q} = \\frac{kQ}{r^{2}}$. '
    + 'Field lines run out of positive charge and into negative, never '
    + 'cross, and are closest together where the field is strongest. '
    + 'Between two parallel plates the field is uniform and '
    + '$E = \\frac{V}{d}$. '
    + 'Potential at a point is the work done per unit charge in bringing a '
    + 'charge there from far away, $V = \\frac{kQ}{r}$. '
    + 'A capacitor stores charge, with '
    + '$$C = \\frac{Q}{V}, \\qquad W = \\tfrac{1}{2}CV^{2}.$$ '
    + 'In parallel, capacitances add, $C = C_1 + C_2$. '
    + 'In series the reciprocals add, '
    + '$\\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2}$, '
    + 'which is the opposite way round from resistors.',

  tables: [
    {
      caption: 'How electric force compares with gravitational force',
      columns: ['Point', 'Electric force', 'Gravitational force'],
      rows: [
        ['Falls off as', 'The square of the distance', 'The square of the distance'],
        ['Depends on', 'Charge', 'Mass'],
        ['Can it push apart', 'Yes, between like charges', 'Never, only pulls'],
        ['Shielded by a metal box', 'Yes, completely', 'No, not at all'],
        ['Relative strength', 'Enormously the stronger', 'Very much the weaker'],
      ],
      note: 'The same inverse square shape is why the two laws look alike. '
        + 'The two rows that differ are the ones worth remembering.',
    },
    {
      caption: 'How capacitors combine, and how that differs from resistors',
      columns: ['Arrangement', 'Capacitors', 'Resistors'],
      rows: [
        ['In series', 'Reciprocals add, total is smaller than the smallest',
          'Values add, total is larger'],
        ['In parallel', 'Values add, total is larger',
          'Reciprocals add, total is smaller than the smallest'],
        ['Same across each', 'Charge is the same in series', 'Current is the same in series'],
      ],
      note: 'The two rows are swapped between the columns, and that swap is '
        + 'the single commonest confusion in the whole of electricity.',
    },
  ],

  figure: {
    alt: 'Three field line drawings in a row. The first shows a single '
      + 'positive charge marked with a plus, with eight straight lines '
      + 'drawn radiating outwards and arrowheads pointing away from the '
      + 'charge, labelled field lines point away from positive. The second '
      + 'shows a positive charge on the left and a negative charge on the '
      + 'right with curved lines running from the plus to the minus, '
      + 'arrowheads pointing towards the negative charge. The third shows '
      + 'two horizontal parallel plates, the upper one marked positive and '
      + 'the lower one marked negative, with evenly spaced straight '
      + 'vertical lines between them pointing downwards, the gap labelled '
      + 'as distance d and a note saying the field between the plates is '
      + 'uniform and equals the voltage divided by the gap.',
    svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<circle cx="100" cy="130" r="14" stroke="#b4531a"/>'
      + '<text x="100" y="136" font-size="15" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">+</text>'
      + '<line x1="100" y1="112" x2="100" y2="60" stroke="#b4531a"/>'
      + '<path d="M94 68 L100 56 L106 68" stroke="#b4531a"/>'
      + '<line x1="100" y1="148" x2="100" y2="200" stroke="#b4531a"/>'
      + '<path d="M94 192 L100 204 L106 192" stroke="#b4531a"/>'
      + '<line x1="82" y1="130" x2="30" y2="130" stroke="#b4531a"/>'
      + '<path d="M38 124 L26 130 L38 136" stroke="#b4531a"/>'
      + '<line x1="118" y1="130" x2="170" y2="130" stroke="#b4531a"/>'
      + '<path d="M162 124 L174 130 L162 136" stroke="#b4531a"/>'
      + '<line x1="112" y1="118" x2="150" y2="80" stroke="#b4531a"/>'
      + '<line x1="88" y1="142" x2="50" y2="180" stroke="#b4531a"/>'
      + '<line x1="112" y1="142" x2="150" y2="180" stroke="#b4531a"/>'
      + '<line x1="88" y1="118" x2="50" y2="80" stroke="#b4531a"/>'
      + '<text x="100" y="240" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">lines leave a positive</text>'
      + '<circle cx="268" cy="130" r="13" stroke="#b4531a"/>'
      + '<text x="268" y="136" font-size="15" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">+</text>'
      + '<circle cx="408" cy="130" r="13" stroke="#1d4ed8"/>'
      + '<text x="408" y="137" font-size="17" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">-</text>'
      + '<path d="M281 130 L395 130" stroke="#7c3aed"/>'
      + '<path d="M385 124 L397 130 L385 136" stroke="#7c3aed"/>'
      + '<path d="M278 120 Q338 60 398 120" stroke="#7c3aed"/>'
      + '<path d="M388 112 L400 120 L386 124" stroke="#7c3aed"/>'
      + '<path d="M278 140 Q338 200 398 140" stroke="#7c3aed"/>'
      + '<path d="M386 136 L400 140 L388 148" stroke="#7c3aed"/>'
      + '<text x="338" y="240" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">and enter a negative</text>'
      + '<line x1="500" y1="70" x2="660" y2="70" stroke-width="4" '
      + 'stroke="#b4531a"/>'
      + '<line x1="500" y1="190" x2="660" y2="190" stroke-width="4" '
      + 'stroke="#1d4ed8"/>'
      + '<text x="494" y="64" font-size="14" text-anchor="end" '
      + 'fill="#b4531a" stroke="none">+</text>'
      + '<text x="494" y="196" font-size="16" text-anchor="end" '
      + 'fill="#1d4ed8" stroke="none">-</text>'
      + '<line x1="520" y1="74" x2="520" y2="186" stroke="#7c3aed"/>'
      + '<path d="M514 178 L520 190 L526 178" stroke="#7c3aed"/>'
      + '<line x1="560" y1="74" x2="560" y2="186" stroke="#7c3aed"/>'
      + '<path d="M554 178 L560 190 L566 178" stroke="#7c3aed"/>'
      + '<line x1="600" y1="74" x2="600" y2="186" stroke="#7c3aed"/>'
      + '<path d="M594 178 L600 190 L606 178" stroke="#7c3aed"/>'
      + '<line x1="640" y1="74" x2="640" y2="186" stroke="#7c3aed"/>'
      + '<path d="M634 178 L640 190 L646 178" stroke="#7c3aed"/>'
      + '<text x="668" y="134" font-size="12" text-anchor="end" '
      + 'fill="currentColor" stroke="none">gap d</text>'
      + '<text x="580" y="240" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">even spacing means</text>'
      + '<text x="580" y="258" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a uniform field</text>'
      + '<text x="580" y="276" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">voltage divided by the gap</text>'
      + '</svg>',
  },

  mechanism:
    'The inverse square in Coulomb’s law is the part to understand '
    + 'rather than to copy, because every numerical surprise in this '
    + 'topic comes out of it. Double the separation and the force '
    + 'does not halve, it falls to a quarter. Treble it and the force '
    + 'falls to a ninth. So a question that triples a distance and '
    + 'asks what happens to the force wants the words one ninth, and '
    + 'the quickest safe way to get there is to write the ratio '
    + '$\\frac{F_2}{F_1} = \\left(\\frac{r_1}{r_2}\\right)^{2}$ '
    + 'rather than to compute both forces. Doing it as a ratio also '
    + 'means $k$ and the charges cancel, which removes most of the '
    + 'chances to slip.\n\n'
    + 'Why an inverse square at all? Because the field lines leaving '
    + 'a charge spread over the surface of a sphere, and the area of '
    + 'that sphere grows as $r^{2}$, so the same number of lines are '
    + 'shared over four times the area when the radius doubles. That '
    + 'is also why the field line picture is worth drawing: the '
    + 'crowding of the lines is the strength of the field, not a '
    + 'decoration. Now the hair and the spike. Pulling the dress off '
    + 'rubs electrons from one surface onto the other, so the hair is '
    + 'left charged all over with the same sign, and like charges '
    + 'repel, so each strand pushes its neighbours away and they '
    + 'stand apart. The comb works by induction: a charged comb held '
    + 'near an uncharged strand pulls the opposite charge in the '
    + 'strand towards it and pushes the like charge away, and since '
    + 'the attracted charge is now nearer, the pull beats the push '
    + 'and the strand follows. That is the full explanation of why a '
    + 'charged body attracts an uncharged one, and an answer that '
    + 'stops at the word attraction has not given it.\n\n'
    + 'The spike on the mast is the other half. Charge on a conductor '
    + 'sits on the outside surface and crowds onto the sharpest part, '
    + 'because the curve is tightest there, so the field at a point '
    + 'is enormous. That huge field tears the nearby air into ions, '
    + 'which carry charge quietly away before the difference can '
    + 'build up to a strike. So the lightning conductor is doing two '
    + 'jobs: discharging the air slowly, and giving any strike that '
    + 'does come a safe thick path to earth instead of through the '
    + 'building.\n\n'
    + 'Three places lose marks. The first is unit conversion: a '
    + 'charge given in microcoulombs is $10^{-6}$ coulombs, and a '
    + 'distance in centimetres is $10^{-2}$ metres, and because the '
    + 'distance is squared a slip there is a factor of ten thousand. '
    + 'Convert on a separate line before substituting. The second is '
    + 'putting signed charges into Coulomb’s law and then puzzling '
    + 'over a negative force. Use the magnitudes to get the size, '
    + 'then say in words whether it is attraction or repulsion by '
    + 'looking at the signs. The third is treating potential as a '
    + 'vector. Field is a vector and has to be added with direction; '
    + 'potential is a scalar and is added as ordinary numbers, signs '
    + 'included.\n\n'
    + 'Two equal and opposite charges can give zero potential at a '
    + 'point where the field is not zero at all, and examiners like '
    + 'that case precisely because it separates the two ideas.',

  recap:
    'Rub a plastic pen on your hair and it will pick up small bits of '
    + 'paper. '
    + 'Rubbing moved something from your hair onto the pen. '
    + 'That something is electric charge, and it comes in two kinds, which '
    + 'we call positive and negative. '
    + 'Two of the same kind push each other away. '
    + 'Two of different kinds pull each other together. '
    + 'In a metal, charge can move about freely, so a metal is a conductor. '
    + 'In plastic or dry wood it cannot, so those are insulators, and that '
    + 'is why the charge stays on the pen long enough to be useful. '
    + 'This lesson puts a number on the push and the pull, and explains '
    + 'what fills the space between two charges.',

  method: [
    'Write every charge in coulombs and every distance in metres, on their own line.',
    'For a force, use the magnitudes in $F = \\frac{kq_1q_2}{r^{2}}$.',
    'Say in words whether it is attraction or repulsion, from the signs.',
    'For a change of distance, use the ratio $\\left(\\frac{r_1}{r_2}\\right)^{2}$ instead of two full calculations.',
    'For a field, find $E = \\frac{kQ}{r^{2}}$ from each charge and add as vectors.',
    'For a potential, find $V = \\frac{kQ}{r}$ from each charge and add as numbers with signs.',
    'For plates, use $E = \\frac{V}{d}$ with $d$ in metres.',
    'For capacitors, decide series or parallel, then use the right combining rule.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Two charges of $+3\\ \\mu$C and $-4\\ \\mu$C are 0.2 m apart. '
        + 'Find the force between them. Take $k = 9 \\times 10^{9}$.',
      steps: [
        { math: 'q_1 = 3 \\times 10^{-6}\\ \\text{C}, \\quad q_2 = 4 \\times 10^{-6}\\ \\text{C}', why: 'Magnitudes in coulombs. The signs are used afterwards, in words.' },
        { math: 'F = \\frac{9 \\times 10^{9} \\times 3 \\times 10^{-6} \\times 4 \\times 10^{-6}}{0.2^{2}}' },
        { math: 'F = \\frac{0.108}{0.04} = 2.7\\ \\text{N}' },
      ],
      answer: '$2.7$ N, and it is an attraction because the charges are '
        + 'unlike.',
    },
    {
      level: 4,
      ask: 'The force between two charges is 36 N. '
        + 'They are moved until they are three times as far apart. '
        + 'Find the new force.',
      steps: [
        { math: '\\frac{F_2}{F_1} = \\left(\\frac{r_1}{r_2}\\right)^{2}', why: 'A ratio, so $k$ and both charges cancel and there is nothing to look up.' },
        { math: '\\frac{F_2}{36} = \\left(\\frac{1}{3}\\right)^{2} = \\frac{1}{9}' },
        { math: 'F_2 = 4\\ \\text{N}' },
      ],
      answer: '$4$ N. '
        + 'Three times the distance gives a ninth of the force, not a '
        + 'third.',
    },
    {
      level: 5,
      ask: 'A capacitor of $4\\ \\mu$F is charged to 200 V. '
        + 'Find the charge stored and the energy stored.',
      steps: [
        { math: 'Q = CV = 4 \\times 10^{-6} \\times 200' },
        { math: 'Q = 8 \\times 10^{-4}\\ \\text{C}' },
        { math: 'W = \\tfrac{1}{2}CV^{2} = \\tfrac{1}{2} \\times 4 \\times 10^{-6} \\times 200^{2}' },
        { math: 'W = 0.08\\ \\text{J}', why: 'Square the voltage before multiplying, not after.' },
      ],
      answer: '$8 \\times 10^{-4}$ C of charge holding $0.08$ J of energy. '
        + 'That is the energy a camera flash dumps into the bulb in a '
        + 'thousandth of a second.',
    },
    {
      level: 6,
      ask: 'Capacitors of $2\\ \\mu$F and $3\\ \\mu$F are joined in series '
        + 'across 100 V. Find the combined capacitance and the charge on '
        + 'each.',
      steps: [
        { math: '\\frac{1}{C} = \\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}', why: 'In series the reciprocals add, the opposite of resistors in series.' },
        { math: 'C = 1.2\\ \\mu\\text{F}', why: 'Smaller than either one, which is the check that the rule was used the right way round.' },
        { math: 'Q = CV = 1.2 \\times 10^{-6} \\times 100' },
        { math: 'Q = 1.2 \\times 10^{-4}\\ \\text{C}' },
        'In series the same charge sits on each capacitor, so each carries '
        + '$1.2 \\times 10^{-4}$ C, and the voltages across them differ '
        + 'instead.',
      ],
      answer: '$1.2\\ \\mu$F combined, with '
        + '$1.2 \\times 10^{-4}$ C on each. '
        + 'The $2\\ \\mu$F one takes $60$ V and the $3\\ \\mu$F one takes '
        + '$40$ V, and those add to the $100$ V supplied.',
    },
  ],

  traps: [
    {
      mistake: 'Leaving charges in microcoulombs or distances in centimetres.',
      why: 'The distance is squared, so a centimetre slip is a factor of '
        + 'ten thousand. '
        + 'Convert on its own line.',
    },
    {
      mistake: 'Halving the force when the distance is doubled.',
      why: 'It is an inverse square law, so doubling the distance gives a '
        + 'quarter of the force.',
    },
    {
      mistake: 'Adding capacitances in series the way resistances are added.',
      why: 'Capacitors in series add reciprocals, so the total is smaller '
        + 'than the smallest. '
        + 'Check the size of your answer against that.',
    },
    {
      mistake: 'Adding potentials as though they had direction.',
      why: 'Potential is a scalar. '
        + 'Add the values with their signs. '
        + 'Field is the vector, and that one needs directions.',
    },
    {
      mistake: 'Saying a charged comb attracts paper because paper is negative.',
      why: 'The paper is uncharged. '
        + 'The comb induces opposite charge on the near face, and because '
        + 'it is nearer, the attraction beats the repulsion.',
    },
  ],

  extension:
    'A thundercloud is a capacitor. '
    + 'The cloud is one plate and the ground is the other, and the '
    + 'air between them is the insulator. '
    + 'Charge builds until the field in that gap is strong enough to '
    + 'tear the air apart and make it conduct. '
    + 'The strike is just the capacitor discharging. '
    + 'It takes about three million volts per metre to break air '
    + 'down. '
    + 'From a cloud base a kilometre up, that is a potential '
    + 'difference of around a thousand million volts. '
    + 'No conductor could survive it, which is why a lightning '
    + 'conductor works by bleeding the charge away first.',

  questions: [
    {
      id: 'es-1',
      ask: 'Charge on a solid metal conductor sits:',
      kind: 'choice',
      options: [
        'On the outside surface, crowding onto sharp points',
        'Evenly through the whole volume',
        'At the centre',
      ],
      answer: 'On the outside surface, crowding onto sharp points',
      teach: 'Like charges repel, so they get as far apart as they can, '
        + 'which is the outside. '
        + 'The crowding at a point is why a lightning conductor is pointed.',
      level: 4,
    },
    {
      id: 'es-2',
      ask: 'The force between two charges is 100 N. If the distance is '
        + 'doubled, find the new force in newtons.',
      kind: 'numeric',
      options: [],
      answer: '25',
      teach: 'Inverse square: twice the distance gives a quarter of the '
        + 'force.',
      level: 4,
    },
    {
      id: 'es-3',
      ask: 'Two capacitors of $6\\ \\mu$F each are joined in parallel. '
        + 'The combined capacitance in microfarads is:',
      kind: 'numeric',
      options: [],
      answer: '12',
      teach: 'In parallel, capacitances add. '
        + 'In series they would have given $3\\ \\mu$F.',
      level: 5,
    },
    {
      id: 'es-4',
      ask: 'A charged rod attracts a small piece of dry paper because:',
      kind: 'choice',
      options: [
        'It induces opposite charge on the near face of the paper',
        'The paper was already charged',
        'The paper is very light',
      ],
      answer: 'It induces opposite charge on the near face of the paper',
      teach: 'The induced opposite charge is closer than the induced like '
        + 'charge, so by the inverse square the attraction wins.',
      level: 5,
    },
  ],
})

/* ── current electricity ────────────────────────────────────────────────── */

teach({
  topicId: 'dc-circuits-physics',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Current is charge per second and Ohm’s law gives $V = IR$. '
      + 'In a circuit with more than one loop, two rules settle '
      + 'everything: the current into a junction equals the current out, '
      + 'and round any closed loop the voltages supplied equal the voltages '
      + 'used.',
    method: [
      'Draw the circuit and mark a current with an arrow in every branch.',
      'Apply the junction rule so that one unknown is removed.',
      'Write a loop equation for each loop and solve the pair together.',
    ],
  },

  why:
    'A trader in Techiman runs three deep freezers from one socket through '
    + 'an extension board. '
    + 'With one freezer on, the bulb overhead is bright. '
    + 'When all three start, the bulb dims noticeably and the extension '
    + 'board gets warm, and the voltmeter on her wall reads lower than it '
    + 'did. '
    + 'The mains supply has not changed and no wire is broken. '
    + 'So why does taking more current make the voltage she actually '
    + 'receives fall?',

  notation:
    'Current $I$ is in amperes, written A, and one ampere is one coulomb '
    + 'per second. '
    + 'Potential difference $V$ is in volts, and a volt is one joule per '
    + 'coulomb, so a voltage is energy handed to each coulomb that passes. '
    + 'Resistance $R$ is in ohms, written with the Greek capital omega, '
    + '$\\Omega$. '
    + 'Electromotive force, almost always written emf, is the energy a cell '
    + 'gives each coulomb, in volts, and it is given the symbol $E$ or the '
    + 'Greek letter epsilon. '
    + 'Internal resistance $r$ is the resistance of the cell itself. '
    + 'Terminal potential difference is what the cell actually delivers to '
    + 'the outside circuit, and it is smaller than the emf whenever current '
    + 'flows. '
    + 'The two are only equal when no current flows at all.',

  idea:
    'Current is the rate of flow of charge, $I = \\frac{Q}{t}$. '
    + 'For a metallic conductor at constant temperature, Ohm’s law states '
    + 'that the current is directly proportional to the potential '
    + 'difference across it, so '
    + '$$V = IR.$$ '
    + 'Resistance depends on the material and the shape, '
    + '$R = \\frac{\\rho L}{A}$, so a long thin wire resists more than a '
    + 'short thick one of the same metal. '
    + 'In series the current is the same everywhere and resistances add, '
    + '$R = R_1 + R_2$. '
    + 'In parallel the voltage across each branch is the same and the '
    + 'reciprocals add, '
    + '$\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$. '
    + 'A real cell has internal resistance, so '
    + '$$E = I(R + r), \\qquad V_{\\text{terminal}} = E - Ir.$$ '
    + 'Kirchhoff’s first rule says the total current into a junction equals '
    + 'the total current out of it, because charge is conserved. '
    + 'The second rule says that round any closed loop the sum of the emfs '
    + 'equals the sum of the $IR$ drops, because energy is conserved. '
    + 'Power in a component is '
    + '$P = VI = I^{2}R = \\frac{V^{2}}{R}$.',

  tables: [
    {
      caption: 'What stays the same and what shares out, in series and in parallel',
      columns: ['Point', 'In series', 'In parallel'],
      rows: [
        ['Current', 'Same through every component', 'Shares out between the branches'],
        ['Voltage', 'Shares out between the components', 'Same across every branch'],
        ['Total resistance', 'Add the values', 'Add the reciprocals'],
        ['Size of the total', 'Bigger than the biggest', 'Smaller than the smallest'],
        ['If one lamp fails', 'All go out', 'The others stay on'],
      ],
      note: 'House wiring is parallel, which is the last row in practice: '
        + 'one blown bulb does not darken the house.',
    },
    {
      caption: 'The three ways to write electrical power, and when each is easiest',
      columns: ['Form', 'Use it when you know', 'Typical question'],
      rows: [
        ['Voltage times current', 'Both the voltage and the current', 'Rating of an appliance'],
        ['Current squared times resistance', 'The current and the resistance', 'Heat lost in a cable'],
        ['Voltage squared over resistance', 'The voltage and the resistance', 'Power of a heater on the mains'],
      ],
      note: 'They are the same equation with Ohm’s law substituted in, so '
        + 'choosing the one that matches your given values saves a step and '
        + 'a mistake.',
    },
  ],

  figure: {
    alt: 'A circuit with two loops drawn as rectangles sharing a middle '
      + 'arm. A cell of emf E with internal resistance r sits in the left '
      + 'arm, a resistor R one in the top of the left loop, a resistor R '
      + 'three in the shared middle arm, and a resistor R two in the top of '
      + 'the right loop. An arrow labelled I one shows current leaving the '
      + 'cell along the left loop, an arrow labelled I two shows current in '
      + 'the right loop, and an arrow labelled I three shows current down '
      + 'the shared middle arm. The junction where the three arrows meet is '
      + 'ringed and labelled, with a note saying the current into this '
      + 'junction equals the current out, so I one equals I two plus I '
      + 'three.',
    svg: '<svg viewBox="0 0 660 340" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="80" y1="70" x2="330" y2="70"/>'
      + '<line x1="330" y1="70" x2="580" y2="70"/>'
      + '<line x1="80" y1="70" x2="80" y2="260"/>'
      + '<line x1="580" y1="70" x2="580" y2="260"/>'
      + '<line x1="80" y1="260" x2="330" y2="260"/>'
      + '<line x1="330" y1="260" x2="580" y2="260"/>'
      + '<line x1="330" y1="70" x2="330" y2="260"/>'
      + '<rect x="170" y="56" width="60" height="28" fill="none"/>'
      + '<text x="200" y="46" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">R one</text>'
      + '<rect x="420" y="56" width="60" height="28" fill="none"/>'
      + '<text x="450" y="46" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">R two</text>'
      + '<rect x="316" y="140" width="28" height="60" fill="none"/>'
      + '<text x="360" y="176" font-size="13" fill="currentColor" '
      + 'stroke="none">R three</text>'
      + '<line x1="66" y1="150" x2="94" y2="150" stroke-width="4"/>'
      + '<line x1="72" y1="172" x2="88" y2="172" stroke-width="2"/>'
      + '<text x="16" y="146" font-size="13" fill="currentColor" '
      + 'stroke="none">emf E</text>'
      + '<text x="16" y="192" font-size="13" fill="currentColor" '
      + 'stroke="none">and r</text>'
      + '<path d="M110 70 L150 70" stroke="#b4531a" stroke-width="3"/>'
      + '<path d="M142 64 L154 70 L142 76" stroke="#b4531a" '
      + 'stroke-width="3"/>'
      + '<text x="130" y="58" font-size="13" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">I one</text>'
      + '<path d="M370 70 L410 70" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M402 64 L414 70 L402 76" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<text x="390" y="58" font-size="13" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">I two</text>'
      + '<path d="M330 96 L330 132" stroke="#7c3aed" stroke-width="3"/>'
      + '<path d="M324 124 L330 136 L336 124" stroke="#7c3aed" '
      + 'stroke-width="3"/>'
      + '<text x="296" y="118" font-size="13" text-anchor="end" '
      + 'fill="#7c3aed" stroke="none">I three</text>'
      + '<circle cx="330" cy="70" r="10" stroke="#b4531a"/>'
      + '<text x="330" y="304" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'at the ringed junction, what goes in comes out</text>'
      + '<text x="330" y="324" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'so I one equals I two plus I three</text>'
      + '</svg>',
  },

  mechanism:
    'Both of Kirchhoff’s rules are conservation laws wearing '
    + 'circuit clothes, and seeing that is what makes them usable '
    + 'instead of memorised. The junction rule is conservation of '
    + 'charge: charge does not pile up at a solder joint, so whatever '
    + 'flows in must flow out. The loop rule is conservation of '
    + 'energy: a coulomb that goes right round a loop and comes back '
    + 'to where it started must have given up all the energy it was '
    + 'handed, so the emfs it gained equal the $IR$ drops it paid. '
    + 'That is why the loop rule is written as sum of emfs equals sum '
    + 'of $IR$. Use the two in this order and a two loop problem '
    + 'becomes bookkeeping. First mark a current in every branch with '
    + 'an arrow, guessing the direction freely, because a wrong guess '
    + 'only makes that current come out negative and the size is '
    + 'still right.\n\n'
    + 'Then use the junction rule straight away so that three unknown '
    + 'currents become two, for instance $I_1 = I_2 + I_3$. Then '
    + 'write one loop equation per loop, going round in a fixed '
    + 'direction and counting an emf as positive when you pass '
    + 'through the cell from minus to plus and an $IR$ as positive '
    + 'when you travel along the arrow. Two equations, two unknowns, '
    + 'and the algebra is ordinary simultaneous equations. Now the '
    + 'trader and her dimming bulb. Her cable and the supply behind '
    + 'it have resistance of their own, which plays exactly the part '
    + 'of internal resistance. The voltage she actually gets is $V = '
    + 'E - Ir$, so the more current her freezers draw, the more of '
    + 'the emf is spent inside the supply and the cable, and the less '
    + 'is left for her bulb. The warm extension board is where that '
    + 'missing energy went, since the power wasted there is $I^{2}r$ '
    + 'and it rises as the square of the current.\n\n'
    + 'This is not a fault, it is what $E = I(R + r)$ says, and a '
    + 'candidate who writes that equation has answered the question. '
    + 'It is also why a car headlamp dims when the starter turns: the '
    + 'starter pulls a couple of hundred amperes through the '
    + 'battery’s own small internal resistance. Three places lose '
    + 'marks. The first is adding resistances in parallel. Two $6\\ '
    + '\\Omega$ resistors in parallel give $3\\ \\Omega$, not $12\\ '
    + '\\Omega$, and the check that catches it every time is that a '
    + 'parallel total must be smaller than the smallest branch. If '
    + 'your answer is bigger, you used the series rule.\n\n'
    + 'The second is confusing emf with terminal voltage. A question '
    + 'that gives you a cell marked 12 V and a reading of 11.4 V on a '
    + 'voltmeter is giving you both, and the difference, $0.6$ V, is '
    + '$Ir$. The third is sign slips in the loop equation, which come '
    + 'from changing direction halfway round. Pick clockwise, stay '
    + 'clockwise, and write the direction down. A note on apparatus. '
    + 'A circuit board with four resistors, a cell and two meters is '
    + 'cheap enough that many schools do have it, and the experiment '
    + 'is worth doing because an ammeter reading negative is the most '
    + 'convincing possible demonstration that a guessed direction is '
    + 'allowed.\n\n'
    + 'Where there is no board, every calculation here can be done '
    + 'from a drawn circuit, and the one thing paper cannot give is '
    + 'the measurement of internal resistance from a graph of $V$ '
    + 'against $I$, whose gradient is $-r$.',

  recap:
    'A cell pushes charge round a circuit, and the moving charge is the '
    + 'current. '
    + 'Think of the cell as a pump and the wires as pipes. '
    + 'The pump gives each bit of water energy, and the taps and narrow '
    + 'pipes along the way use that energy up. '
    + 'A resistor is a narrow pipe: it makes the flow harder. '
    + 'Voltage is the energy given to each unit of charge, and current is '
    + 'how much charge passes each second. '
    + 'The three quantities are tied together by $V = IR$, which you met at '
    + 'JHS. '
    + 'What is new here is what happens when there is more than one path '
    + 'for the current to take, and what happens inside the cell itself.',

  method: [
    'Draw the circuit clearly, with every component labelled.',
    'Mark a current arrow in every branch, guessing directions freely.',
    'Write the junction rule at a junction to reduce the number of unknowns.',
    'Choose one direction, clockwise say, and keep it for every loop.',
    'Write sum of emfs equals sum of $IR$ for each loop.',
    'Solve the simultaneous equations, and read a negative current as a wrong guess of direction only.',
    'For internal resistance, use $E = I(R + r)$ and quote the equation.',
    'Find power with whichever of $VI$, $I^{2}R$ or $\\frac{V^{2}}{R}$ matches what you know.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Resistors of $4\\ \\Omega$ and $12\\ \\Omega$ are joined in '
        + 'parallel across a 6 V supply. '
        + 'Find the total resistance and the current drawn.',
      steps: [
        { math: '\\frac{1}{R} = \\frac{1}{4} + \\frac{1}{12} = \\frac{3 + 1}{12} = \\frac{4}{12}' },
        { math: 'R = 3\\ \\Omega', why: 'Smaller than the smaller branch, which is the check that the rule was used correctly.' },
        { math: 'I = \\frac{V}{R} = \\frac{6}{3} = 2\\ \\text{A}' },
      ],
      answer: '$3\\ \\Omega$ and $2$ A.',
    },
    {
      level: 4,
      ask: 'A cell of emf 1.5 V and internal resistance $0.5\\ \\Omega$ is '
        + 'joined to a $2.5\\ \\Omega$ lamp. '
        + 'Find the current and the terminal potential difference.',
      steps: [
        { math: 'E = I(R + r)' },
        { math: '1.5 = I(2.5 + 0.5)' },
        { math: 'I = \\frac{1.5}{3.0} = 0.5\\ \\text{A}' },
        { math: 'V = E - Ir = 1.5 - (0.5 \\times 0.5)' },
        { math: 'V = 1.25\\ \\text{V}', why: 'The lamp gets 1.25 V, not 1.5 V. The missing 0.25 V heats the cell.' },
      ],
      answer: '$0.5$ A, with $1.25$ V across the lamp. '
        + 'A voltmeter on the cell with the lamp disconnected would read the '
        + 'full $1.5$ V, because then no current flows.',
    },
    {
      level: 5,
      ask: 'A 2 kW electric kettle runs on 240 V mains. '
        + 'Find the current it draws, its resistance, and the energy it '
        + 'uses in 4 minutes.',
      steps: [
        { math: 'I = \\frac{P}{V} = \\frac{2000}{240} = 8.33\\ \\text{A}' },
        { math: 'R = \\frac{V^{2}}{P} = \\frac{240^{2}}{2000}', why: 'This form is chosen because the voltage and the power are what we were given.' },
        { math: 'R = 28.8\\ \\Omega' },
        { math: 'W = Pt = 2000 \\times 240', why: 'Four minutes is 240 seconds. A joule is a watt second.' },
        { math: 'W = 4.8 \\times 10^{5}\\ \\text{J}' },
      ],
      answer: '$8.33$ A through $28.8\\ \\Omega$, using $480$ kJ. '
        + 'That is why a kettle needs a 13 A fuse and a lamp does not.',
    },
    {
      level: 6,
      ask: 'A 12 V cell of negligible internal resistance drives a circuit '
        + 'in which a $2\\ \\Omega$ resistor is in series with a parallel '
        + 'pair of $6\\ \\Omega$ and $3\\ \\Omega$. '
        + 'Find the current from the cell and the current in the '
        + '$6\\ \\Omega$ resistor.',
      steps: [
        { math: '\\frac{1}{R_p} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6}', why: 'Deal with the parallel pair first and replace it with one resistor.' },
        { math: 'R_p = 2\\ \\Omega' },
        { math: 'R_{\\text{total}} = 2 + 2 = 4\\ \\Omega' },
        { math: 'I = \\frac{12}{4} = 3\\ \\text{A}', why: 'This is the current from the cell and through the series resistor.' },
        { math: 'V_p = IR_p = 3 \\times 2 = 6\\ \\text{V}', why: 'The same 6 V sits across both parallel branches.' },
        { math: 'I_6 = \\frac{6}{6} = 1\\ \\text{A}' },
      ],
      answer: '$3$ A from the cell, of which $1$ A goes through the '
        + '$6\\ \\Omega$ and $2$ A through the $3\\ \\Omega$. '
        + 'They add back to $3$ A, and that addition is the check on the '
        + 'whole answer.',
    },
  ],

  traps: [
    {
      mistake: 'Adding resistances in parallel instead of their reciprocals.',
      why: 'A parallel total is always smaller than the smallest branch. '
        + 'If your answer is bigger, you used the series rule.',
    },
    {
      mistake: 'Taking the terminal voltage to equal the emf.',
      why: 'They are equal only when no current flows. '
        + 'Otherwise $V = E - Ir$, and the difference is the clue the '
        + 'question is giving you.',
    },
    {
      mistake: 'Changing direction halfway round a loop.',
      why: 'The signs then contradict each other. '
        + 'Choose clockwise, write that down, and keep it.',
    },
    {
      mistake: 'Throwing away a negative current as an error.',
      why: 'It only means the arrow was drawn the wrong way. '
        + 'The size is correct, so state the size and the true direction.',
    },
  ],

  extension:
    'The reason electricity is sent across the country at 161 kilovolts '
    + 'rather than at 240 volts is $I^{2}R$. '
    + 'For a given power, raising the voltage lowers the current in the '
    + 'same proportion, and the heat wasted in the line falls as the square '
    + 'of that current. '
    + 'Ten times the voltage means a tenth of the current and a hundredth '
    + 'of the loss, which is the whole argument for transmission lines and '
    + 'for the transformers at each end of them.',

  questions: [
    {
      id: 'dc-1',
      ask: 'Two $6\\ \\Omega$ resistors in parallel have a combined '
        + 'resistance in ohms of:',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: 'Reciprocals add, so the total is half of one of them. '
        + 'A parallel total is always below the smallest branch.',
      level: 3,
    },
    {
      id: 'dc-2',
      ask: 'A cell of emf 1.5 V and internal resistance $0.5\\ \\Omega$ '
        + 'drives 0.6 A. The terminal potential difference in volts is:',
      kind: 'numeric',
      options: [],
      answer: '1.2',
      teach: '$V = E - Ir = 1.5 - 0.3 = 1.2$ V. '
        + 'The lost $0.3$ V heats the cell.',
      level: 5,
    },
    {
      id: 'dc-3',
      ask: 'Kirchhoff’s junction rule is a statement of the conservation of:',
      kind: 'choice',
      options: ['Charge', 'Energy', 'Momentum'],
      answer: 'Charge',
      teach: 'Charge does not pile up at a joint. '
        + 'The loop rule is the one about energy.',
      level: 4,
    },
    {
      id: 'dc-4',
      ask: 'A bulb dims when a large motor on the same circuit starts, '
        + 'because:',
      kind: 'choice',
      options: [
        'The extra current increases the $Ir$ drop inside the supply',
        'The mains voltage at the power station falls',
        'The bulb filament has cooled',
      ],
      answer: 'The extra current increases the $Ir$ drop inside the supply',
      teach: '$V = E - Ir$. '
        + 'More current means more of the emf is spent inside the supply '
        + 'and the cable.',
      level: 6,
    },
  ],
})
