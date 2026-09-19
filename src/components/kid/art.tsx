/**
 * The drawings, written rather than loaded.
 *
 * ── Why these are SVG in a file and not pictures ────────────────────────────
 *
 * The reference designs lean on 3D character renders. Those would have to come
 * from a paid pack with a licence to read, an artist, or an image model. The
 * last is the one to avoid hardest, because issue 15 is BLOCKING and nothing
 * in this platform reviews a generated picture before a child sees it.
 *
 * So these are drawn in code. What that buys is worth more than the gloss:
 * nothing to download on a Ghanaian phone on mobile data, no licence anybody
 * has to check before shipping to a school, and a shape that is exactly what
 * it was written to be. Everything is behind this one module, so swapping in
 * supplied files later is one file rather than forty.
 *
 * Being straight about the ceiling: code drawn art gets you competent, not
 * loved. The first pass of these was flat geometry with a face on it, and next
 * to the references it read as placeholder work. This pass adds what actually
 * makes a drawing feel like an object rather than a diagram: one light source
 * for the whole set, volume from radial shading, a specular highlight, a soft
 * shadow on the ground, and silhouettes that still read at 40px. That is most
 * of the gap. The rest of it wants an illustrator.
 *
 * ── One art language, and why that mattered more than it sounds ─────────────
 *
 * The first version mixed drawn SVG with platform emoji in the same forty
 * pixels of screen: a drawn star beside a speaker, a flame and a waving hand,
 * none of them drawn here. Emoji are somebody else's illustrations, they
 * differ on every device, and the seam between the two was the most visible
 * thing on the page. Everything the chrome needs is now drawn here.
 *
 * ── A cast, not a mascot ────────────────────────────────────────────────────
 *
 * There used to be one star. One character on an otherwise white page is not a
 * world, and a four year old reads the difference. There are now six, they
 * have faces, and they turn up in different places, so the app has inhabitants
 * rather than a logo.
 *
 * ── Faces ───────────────────────────────────────────────────────────────────
 *
 * None of them is a child. No skin tone, no hair, no clothing: a star, a
 * mango, a goat, a bird, a drum, a sun. A platform for Ghanaian children that
 * draws one specific child excludes every child who does not look like the
 * drawing, and choosing a tone is not a decision code should make on a
 * school's behalf.
 */

/**
 * The light, and it never moves.
 *
 * Top left, on every character, every tile and every badge. One light source
 * is the difference between a set and a pile: the moment two drawings are lit
 * from different corners they stop belonging to each other, which was true of
 * the first pass.
 */
const LIGHT = { x: '34%', y: '28%' }

/** Shared so every drawing sits on the same grid and scales the same way. */
function Frame({ size, label, children, view = '0 0 100 100' }: {
  size: number
  label?: string
  view?: string
  children: React.ReactNode
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={view}
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false">
      {children}
    </svg>
  )
}

/**
 * The ground under a character.
 *
 * A plain ellipse, not a blur filter. An SVG blur is a real cost on a cheap
 * Android, and at the sizes anything here is drawn at it reads the same.
 */
function Shadow({ cy = 91, rx = 25 }: { cy?: number, rx?: number }) {
  return <ellipse cx="50" cy={cy} rx={rx} ry={rx * 0.17} fill="#14243a" opacity="0.1" />
}

/** The highlight that makes a shape read as round rather than as filled. */
function Gloss({ cx = 36, cy = 32, rx = 12, ry = 8, tilt = -28 }: {
  cx?: number, cy?: number, rx?: number, ry?: number, tilt?: number
}) {
  return (
    <ellipse
      cx={cx} cy={cy} rx={rx} ry={ry}
      transform={`rotate(${tilt} ${cx} ${cy})`}
      fill="#fff" opacity="0.4" />
  )
}

/* ── the face everybody shares ────────────────────────────────────────────── */

export type Mood = 'wave' | 'happy' | 'rest'

/**
 * Two eyes and a mouth, on whatever shape is passed in.
 *
 * Shared so the whole cast blinks and smiles the same way. A set of characters
 * with slightly different faces reads as a set of clip art; one face on
 * several bodies reads as a family.
 */
function Face({ mood, cx = 50, cy = 48, s = 1, ink = '#4a3a06' }: {
  mood: Mood
  cx?: number
  cy?: number
  s?: number
  ink?: string
}) {
  const dx = 9.5 * s
  return (
    <g>
      {mood === 'rest' ? (
        <>
          <path d={`M${cx - dx - 5 * s} ${cy} q${5 * s} ${5.5 * s} ${10 * s} 0`}
            fill="none" stroke={ink} strokeWidth={3.4 * s} strokeLinecap="round" />
          <path d={`M${cx + dx - 5 * s} ${cy} q${5 * s} ${5.5 * s} ${10 * s} 0`}
            fill="none" stroke={ink} strokeWidth={3.4 * s} strokeLinecap="round" />
        </>
      ) : (
        <>
          {/* Taller than round, which is most of what makes an eye read as an
              eye rather than as a dot. */}
          <ellipse cx={cx - dx} cy={cy} rx={4 * s} ry={4.8 * s} fill={ink} />
          <ellipse cx={cx + dx} cy={cy} rx={4 * s} ry={4.8 * s} fill={ink} />
          {/* The catch light. Two dots, and the face reads as alive rather
              than as a diagram. */}
          <circle cx={cx - dx + 1.5 * s} cy={cy - 1.8 * s} r={1.5 * s} fill="#fff" />
          <circle cx={cx + dx + 1.5 * s} cy={cy - 1.8 * s} r={1.5 * s} fill="#fff" />
        </>
      )}

      {/* An open mouth when pleased. A smile drawn as a stroke is a curve; a
          filled one is a face laughing, and that is worth the four extra
          points it costs. */}
      {mood === 'happy' ? (
        <path
          d={`M${cx - 11 * s} ${cy + 8 * s} q${11 * s} ${13 * s} ${22 * s} 0 q${-11 * s} ${4 * s} ${-22 * s} 0 Z`}
          fill={ink} />
      ) : (
        <path
          d={mood === 'rest'
            ? `M${cx - 6 * s} ${cy + 10 * s} q${6 * s} ${4.5 * s} ${12 * s} 0`
            : `M${cx - 9 * s} ${cy + 9 * s} q${9 * s} ${8.5 * s} ${18 * s} 0`}
          fill="none" stroke={ink} strokeWidth={3.4 * s} strokeLinecap="round" />
      )}

      {mood !== 'rest' && (
        <>
          <ellipse cx={cx - 19 * s} cy={cy + 7 * s} rx={4.8 * s} ry={3.2 * s}
            fill="#e0715c" opacity="0.42" />
          <ellipse cx={cx + 19 * s} cy={cy + 7 * s} rx={4.8 * s} ry={3.2 * s}
            fill="#e0715c" opacity="0.42" />
        </>
      )}
    </g>
  )
}

/* ── the cast ─────────────────────────────────────────────────────────────── */

export type Friend = 'star' | 'mango' | 'goat' | 'bird' | 'drum' | 'sun'

export function Pal({ who, size = 92, mood = 'wave' }: {
  who: Friend
  size?: number
  mood?: Mood
}) {
  const label = mood === 'rest' ? 'A sleeping friend' : 'A smiling friend'
  /* Named per character, so two different friends on one screen cannot end up
     sharing a gradient. */
  const g = `pal-${who}`

  if (who === 'mango') {
    return (
      <Frame size={size} label={label}>
        <defs>
          <radialGradient id={g} cx={LIGHT.x} cy={LIGHT.y} r="78%">
            <stop offset="0%" stopColor="#ffe08a" />
            <stop offset="52%" stopColor="#f5a623" />
            <stop offset="100%" stopColor="#c2481f" />
          </radialGradient>
        </defs>
        <Shadow />
        <path d="M50 88 C24 88 12 68 16 48 C20 28 36 13 54 13 C74 13 88 30 86 50 C84 72 72 88 50 88 Z"
          fill={`url(#${g})`} stroke="rgba(110,50,0,0.2)" strokeWidth="1.6" />
        <path d="M57 13 q11 -11 19 -6 q-4 10 -15 12 Z" fill="#0a6d3c" />
        <path d="M57 13 q11 -11 19 -6 q-9 1 -14 7 Z" fill="#2aa866" />
        <Gloss cx={33} cy={34} rx={11} ry={7} />
        <Face mood={mood} cy={52} ink="#6b3406" />
      </Frame>
    )
  }

  if (who === 'goat') {
    return (
      <Frame size={size} label={label}>
        <defs>
          <radialGradient id={g} cx={LIGHT.x} cy={LIGHT.y} r="76%">
            <stop offset="0%" stopColor="#fdf6e8" />
            <stop offset="58%" stopColor="#e6d2b4" />
            <stop offset="100%" stopColor="#b1936a" />
          </radialGradient>
        </defs>
        <Shadow cy={92} />

        {/* Horns that curve back, drawn first so the head overlaps them. The
            old pair were two straight flicks off a circle, and the whole thing
            read as a blob with a nose. */}
        <path d="M33 26 q-11 -9 -9 -18 q9 1 13 12" fill="#a68a63"
          stroke="rgba(60,40,10,0.28)" strokeWidth="1.6" />
        <path d="M67 26 q11 -9 9 -18 q-9 1 -13 12" fill="#a68a63"
          stroke="rgba(60,40,10,0.28)" strokeWidth="1.6" />

        {/* Ears out to the sides, which is what makes a goat a goat at 40px. */}
        <ellipse cx="19" cy="46" rx="9" ry="6" transform="rotate(-24 19 46)"
          fill="#c9ab80" stroke="rgba(60,40,10,0.24)" strokeWidth="1.6" />
        <ellipse cx="81" cy="46" rx="9" ry="6" transform="rotate(24 81 46)"
          fill="#c9ab80" stroke="rgba(60,40,10,0.24)" strokeWidth="1.6" />

        {/* A head that tapers to a muzzle, rather than a circle with a dot. */}
        <path d="M50 20 C66 20 78 32 78 48 C78 62 70 72 62 78 Q50 85 38 78 C30 72 22 62 22 48 C22 32 34 20 50 20 Z"
          fill={`url(#${g})`} stroke="rgba(60,40,10,0.26)" strokeWidth="1.8" />
        <ellipse cx="50" cy="72" rx="12" ry="9" fill="#cbb289"
          stroke="rgba(60,40,10,0.2)" strokeWidth="1.4" />
        <ellipse cx="45.5" cy="70" rx="1.9" ry="2.4" fill="#6b5a3e" />
        <ellipse cx="54.5" cy="70" rx="1.9" ry="2.4" fill="#6b5a3e" />

        {/* The beard, which is the one detail that makes people smile at a
            goat, and the first version left it out. */}
        <path d="M50 81 q-3 8 1 12 q4 -5 3 -12 Z" fill="#cbb289" />
        <Gloss cx={36} cy={36} rx={9} ry={6} />
        <Face mood={mood} cy={48} s={0.82} ink="#5c4a2a" />
      </Frame>
    )
  }

  if (who === 'bird') {
    return (
      <Frame size={size} label={label}>
        <defs>
          <radialGradient id={g} cx={LIGHT.x} cy={LIGHT.y} r="76%">
            <stop offset="0%" stopColor="#a8d4ff" />
            <stop offset="55%" stopColor="#2d7ff9" />
            <stop offset="100%" stopColor="#14459c" />
          </radialGradient>
        </defs>
        <Shadow cy={92} rx={23} />
        {/* A tail, so it is a bird and not a blue ball with a beak. */}
        <path d="M78 66 q16 4 20 16 q-16 2 -24 -8 Z" fill="#1f5fc0" />
        <ellipse cx="48" cy="54" rx="31" ry="29" fill={`url(#${g})`}
          stroke="rgba(8,40,90,0.24)" strokeWidth="1.8" />
        {/* A folded wing, with two feather lines. */}
        <path d="M30 56 q-13 8 -3 19 q10 3 15 -9 Z" fill="#1f5fc0" />
        <path d="M32 62 q6 4 10 2 M31 68 q6 3 10 1" stroke="rgba(255,255,255,0.4)"
          strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* A beak with a fold in it, not a flat triangle. */}
        <path d="M76 50 l16 6 l-16 7 Z" fill="#f2b517" />
        <path d="M76 56 l16 0" stroke="#c98f0c" strokeWidth="1.6" />
        <Gloss cx={34} cy={38} rx={10} ry={6.5} />
        <Face mood={mood} cx={47} cy={49} s={0.82} ink="#0b2d52" />
      </Frame>
    )
  }

  if (who === 'drum') {
    return (
      <Frame size={size} label={label}>
        <defs>
          {/* Linear, not radial: a drum is a cylinder, and lighting it like a
              sphere is how the first one came out looking like a plant pot. */}
          <linearGradient id={g} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c87a42" />
            <stop offset="34%" stopColor="#a35a2c" />
            <stop offset="100%" stopColor="#6d3411" />
          </linearGradient>
        </defs>
        <Shadow cy={92} rx={22} />
        <path d="M26 30 h48 l-7 52 q-17 8 -34 0 Z" fill={`url(#${g})`}
          stroke="rgba(50,20,0,0.28)" strokeWidth="1.8" />
        <ellipse cx="50" cy="30" rx="24" ry="8.5" fill="#fffcf2"
          stroke="rgba(50,20,0,0.28)" strokeWidth="1.8" />
        <ellipse cx="44" cy="28" rx="9" ry="3" fill="#fff" opacity="0.7" />
        {/* Tension ropes, which is what a djembe actually has. */}
        <path d="M30 42 l40 0 M31 52 l38 0" stroke="rgba(255,248,230,0.35)"
          strokeWidth="2.6" strokeLinecap="round" />
        <path d="M34 34 l-3 46 M66 34 l3 46" stroke="rgba(255,248,230,0.22)" strokeWidth="2" />
        <Face mood={mood} cy={60} s={0.74} ink="#3d1c02" />
      </Frame>
    )
  }

  if (who === 'sun') {
    return (
      <Frame size={size} label={label}>
        <defs>
          <radialGradient id={g} cx={LIGHT.x} cy={LIGHT.y} r="74%">
            <stop offset="0%" stopColor="#fff6cf" />
            <stop offset="58%" stopColor="#ffd166" />
            <stop offset="100%" stopColor="#e8a410" />
          </radialGradient>
        </defs>
        {/* Rays of two lengths, alternating. Twelve identical spokes is a cog;
            uneven ones read as light. */}
        <g stroke="#f2b517" strokeWidth="6" strokeLinecap="round">
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i * Math.PI) / 6
            const out = i % 2 ? 40 : 46
            return (
              <line
                key={i}
                x1={50 + Math.cos(a) * 32} y1={50 + Math.sin(a) * 32}
                x2={50 + Math.cos(a) * out} y2={50 + Math.sin(a) * out} />
            )
          })}
        </g>
        <circle cx="50" cy="50" r="29" fill={`url(#${g})`}
          stroke="rgba(120,80,0,0.2)" strokeWidth="1.8" />
        <Gloss cx={38} cy={38} rx={9} ry={6} />
        <Face mood={mood} cy={50} s={0.88} />
      </Frame>
    )
  }

  /* The star, and the one the app opens with. */
  return (
    <Frame size={size} label={label}>
      <defs>
        <radialGradient id={g} cx={LIGHT.x} cy={LIGHT.y} r="74%">
          <stop offset="0%" stopColor="#fff6cf" />
          <stop offset="54%" stopColor="#f5c026" />
          <stop offset="100%" stopColor="#d98b06" />
        </radialGradient>
      </defs>
      <Shadow rx={24} />
      {/* Rounded points rather than sharp ones: a spiky star reads as a
          warning badge, and this has to read as friendly. */}
      <path
        d="M50 8 C53 8 55 10 56 13 L62 32 L82 34 C89 35 91 42 86 46 L71 59 L76 79
           C78 86 72 90 66 87 L50 78 L34 87 C28 90 22 86 24 79 L29 59 L14 46
           C9 42 11 35 18 34 L38 32 L44 13 C45 10 47 8 50 8 Z"
        fill={`url(#${g})`} stroke="rgba(120,80,0,0.18)" strokeWidth="1.8" strokeLinejoin="round" />
      <Gloss cx={37} cy={31} rx={10} ry={6} />
      {/* One arm raised when waving. A character that waves is greeting you;
          one that does not is a logo. */}
      {mood === 'wave' && (
        <path d="M74 44 q10 -6 14 -15" stroke="#d98b06" strokeWidth="6"
          strokeLinecap="round" fill="none" />
      )}
      <Face mood={mood} cy={49} s={0.94} />
    </Frame>
  )
}

/** Kept for the screens that were written against the old name. */
export function Mascot({ size = 92, mood = 'wave' }: { size?: number, mood?: Mood }) {
  return <Pal who="star" size={size} mood={mood} />
}

/* ── the one celebration ──────────────────────────────────────────────────── */

/**
 * Marks that fall once, when a badge is earned, and then stop.
 *
 * There is deliberately nothing else like this in the platform. An interface
 * where every card fades and slides in has spent its attention budget before
 * the child has earned anything, so all of it is saved for the one moment that
 * is actually an event.
 *
 * Positions come from the index rather than from `Math.random`, so the same
 * celebration is the same shape twice and cannot come out lopsided. The CSS
 * turns the whole thing off under `prefers-reduced-motion`.
 */
export function Sparkles({ n = 18 }: { n?: number }) {
  return (
    <svg className="kid-sparkles" viewBox="0 0 100 120" preserveAspectRatio="none"
      aria-hidden focusable="false">
      {Array.from({ length: n }, (_, i) => {
        const x = (i * 37) % 100
        const delay = ((i * 13) % 10) / 12
        const w = 2 + (i % 3)
        const hue = ['#f2b517', '#0f8a4d', '#2d7ff9', '#d6402e'][i % 4]
        return (
          <rect
            key={i}
            className="kid-spark"
            x={x} y="-8" width={w} height={w * 1.7} rx={w * 0.3}
            fill={hue}
            style={{ animationDelay: `${delay}s` }} />
        )
      })}
    </svg>
  )
}

/* ── the scene behind the page ────────────────────────────────────────────── */

/**
 * Sky, hills, clouds and a few stars, behind everything.
 *
 * The first version was flat lilac with white cards on it, and for this age
 * that is a form rather than a place. This is the same vocabulary the game
 * engine draws its scenes from, so the home screen and the games look like one
 * world instead of two products.
 *
 * Drawn once at the top of the page and fixed, so scrolling does not drag it
 * and it costs nothing to repaint.
 */
export function Sky({ tone = 'day' }: { tone?: 'day' | 'dusk' }) {
  const top = tone === 'dusk' ? '#ffe2bd' : '#e7edff'
  const mid = tone === 'dusk' ? '#ffd6c4' : '#f4efff'
  return (
    <svg className="kid-sky" viewBox="0 0 390 300" preserveAspectRatio="none"
      aria-hidden focusable="false">
      <defs>
        <linearGradient id="kid-sky-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={top} />
          <stop offset="100%" stopColor={mid} />
        </linearGradient>
        {/* The fade is the whole trick.

            The first version ended in a hard band of hills, and because the
            cards sit over it the green edge cut straight through a white
            card: it read as a rendering fault rather than as a horizon.
            Everything below the halfway point now dissolves into the page. */}
        <linearGradient id="kid-sky-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--nx-paper)" stopOpacity="0" />
          <stop offset="62%" stopColor="var(--nx-paper)" stopOpacity="0.72" />
          <stop offset="100%" stopColor="var(--nx-paper)" stopOpacity="1" />
        </linearGradient>
      </defs>

      <rect width="390" height="300" fill="url(#kid-sky-g)" />

      {/* Clouds, kept to the upper corners so none of them sits behind the
          greeting, where one looked like a smudge on the text. */}
      <g fill="#ffffff" opacity="0.66">
        <g>
          <circle cx="36" cy="26" r="17" />
          <circle cx="58" cy="20" r="22" />
          <circle cx="80" cy="28" r="15" />
          <rect x="30" y="26" width="56" height="17" rx="8.5" />
        </g>
        <g opacity="0.75">
          <circle cx="322" cy="52" r="14" />
          <circle cx="340" cy="46" r="18" />
          <circle cx="358" cy="53" r="12" />
          <rect x="318" y="51" width="46" height="14" rx="7" />
        </g>
      </g>

      {/* Stars, placed by index rather than at random so they do not twinkle
          about between renders. */}
      <g fill="#ffffff" opacity="0.8">
        {Array.from({ length: 8 }, (_, i) => {
          const x = ((i * 137) % 100) / 100 * 370 + 10
          const y = ((i * 71) % 100) / 100 * 96 + 10
          const r = 1.5 + (i % 3) * 0.7
          return <circle key={i} cx={x} cy={y} r={r} />
        })}
      </g>

      {/* Hills low down, then the fade over the top of them, so the horizon is
          suggested rather than drawn as a line across the cards. */}
      <path d="M0 214 q70 -42 150 -8 q74 34 140 -6 q56 -30 100 -2 V300 H0 Z"
        fill="#cfe3c4" opacity="0.7" />
      <path d="M0 246 q88 -30 176 2 q86 30 214 -10 V300 H0 Z"
        fill="#b6d8a8" opacity="0.75" />
      <rect y="120" width="390" height="180" fill="url(#kid-sky-fade)" />
    </svg>
  )
}

/* ── subject tiles ────────────────────────────────────────────────────────── */

export type TileArt =
  | 'stories' | 'numbers' | 'science' | 'arts' | 'world' | 'words'
  /* Added after nine JHS subjects were drawn and five of them came out as the
     same book: Computing, Career Technology, Religious and Moral Education,
     Ghanaian Language and French all fell through to the fallback. Three
     identical icons in one list is worse than no icon, because it tells the
     reader the drawings mean nothing. */
  | 'tech' | 'talk' | 'craft'

/**
 * A subject, as a little scene rather than a symbol.
 *
 * Which is the whole job: the label under a tile is unreadable to the learner
 * it is drawn for, so the drawing has to carry the meaning alone. They are
 * told apart by silhouette first and colour second, so they still work for a
 * colour blind child and in a screenshot printed in grey.
 */
export function Tile({ art, size = 46 }: { art: TileArt, size?: number }) {
  /* A top light wash and a bottom shade, reused by whichever tile is made of
     solid blocks. It is the same light as the cast. */
  const shade = (
    <linearGradient id="tile-shade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#fff" stopOpacity="0.34" />
      <stop offset="100%" stopColor="#000" stopOpacity="0.14" />
    </linearGradient>
  )

  switch (art) {
    case 'numbers':
      return (
        <Frame size={size} label="Numbers">
          <defs>{shade}</defs>
          {/* Counting blocks, stacked, with the numerals on them. A child who
              cannot read still sees three things of increasing height. */}
          <rect x="13" y="54" width="23" height="32" rx="6" fill="#d6402e" />
          <rect x="38" y="40" width="23" height="46" rx="6" fill="#f2b517" />
          <rect x="63" y="24" width="23" height="62" rx="6" fill="#2d7ff9" />
          <rect x="13" y="54" width="23" height="32" rx="6" fill="url(#tile-shade)" />
          <rect x="38" y="40" width="23" height="46" rx="6" fill="url(#tile-shade)" />
          <rect x="63" y="24" width="23" height="62" rx="6" fill="url(#tile-shade)" />
          <text x="24.5" y="76" textAnchor="middle" fontSize="15" fontWeight="800" fill="#fff">1</text>
          <text x="49.5" y="70" textAnchor="middle" fontSize="15" fontWeight="800" fill="#fff">2</text>
          <text x="74.5" y="62" textAnchor="middle" fontSize="15" fontWeight="800" fill="#fff">3</text>
        </Frame>
      )

    case 'stories':
      return (
        <Frame size={size} label="Stories">
          {/* Two page colours, the left one darker, so the book has a spine
              and a light source rather than being one flat shape. */}
          <path d="M50 28 C40 20 24 20 14 24 L14 78 C24 74 40 74 50 82 Z"
            fill="#0a6d3c" stroke="rgba(0,0,0,0.14)" strokeWidth="1.6" />
          <path d="M50 28 C60 20 76 20 86 24 L86 78 C76 74 60 74 50 82 Z"
            fill="#0f8a4d" stroke="rgba(0,0,0,0.14)" strokeWidth="1.6" />
          <path d="M22 36 h20 M22 46 h20 M58 36 h20 M58 46 h20"
            stroke="rgba(255,255,255,0.85)" strokeWidth="3" strokeLinecap="round" />
          {/* A bookmark, so it reads as a story rather than a manual. */}
          <path d="M66 20 h10 v22 l-5 -5 l-5 5 Z" fill="#d6402e" />
        </Frame>
      )

    case 'science':
      return (
        <Frame size={size} label="Science">
          <path d="M42 18 h16 v20 l18 32 a8 8 0 0 1 -7 12 H31 a8 8 0 0 1 -7 -12 l18 -32 Z"
            fill="#e3edff" stroke="#2d7ff9" strokeWidth="3.4" strokeLinejoin="round" />
          <path d="M33 60 h34 l7 10 a8 8 0 0 1 -7 12 H33 a8 8 0 0 1 -7 -12 Z" fill="#2d7ff9" />
          <circle cx="44" cy="72" r="3.4" fill="#fff" opacity="0.9" />
          <circle cx="56" cy="77" r="2.4" fill="#fff" opacity="0.9" />
          <rect x="39" y="14" width="22" height="7" rx="3.5" fill="#0f8a4d" />
          {/* Two bubbles escaping, which is the thing a child recognises. */}
          <circle cx="62" cy="26" r="4" fill="none" stroke="#2d7ff9" strokeWidth="2.4" />
          <circle cx="70" cy="18" r="2.4" fill="none" stroke="#2d7ff9" strokeWidth="2" />
        </Frame>
      )

    case 'arts':
      return (
        <Frame size={size} label="Arts">
          <path d="M50 16 a34 34 0 1 0 0 68 c6 0 8 -4 8 -8 s-4 -8 2 -10 h10 a14 14 0 0 0 14 -14
                   A34 34 0 0 0 50 16 Z"
            fill="#fdf3da" stroke="#d99413" strokeWidth="3" />
          {/* Four different paints. The first version used green twice, which
              is the one thing a palette cannot do. */}
          <circle cx="36" cy="34" r="5.5" fill="#d6402e" />
          <circle cx="26" cy="50" r="5.5" fill="#2d7ff9" />
          <circle cx="34" cy="66" r="5.5" fill="#0f8a4d" />
          <circle cx="54" cy="30" r="5.5" fill="#8a4fd0" />
          {/* A brush, loaded. */}
          <path d="M74 74 l14 -14 l6 6 l-14 14 Z" fill="#a35a2c" />
          <path d="M70 78 l6 6 l-9 3 Z" fill="#d6402e" />
        </Frame>
      )

    case 'world':
      return (
        <Frame size={size} label="Our world">
          <defs>
            <radialGradient id="tile-world" cx={LIGHT.x} cy={LIGHT.y} r="76%">
              <stop offset="0%" stopColor="#7fb6ff" />
              <stop offset="60%" stopColor="#2d7ff9" />
              <stop offset="100%" stopColor="#14459c" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="48" r="31" fill="url(#tile-world)" />
          <path d="M40 40 q11 -7 19 2 q-7 11 -19 6 Z" fill="#0f8a4d" />
          <path d="M57 62 q9 -5 15 2 q-7 9 -15 4 Z" fill="#0f8a4d" />
          <path d="M24 54 q8 -4 12 2 q-5 7 -12 3 Z" fill="#0f8a4d" />
          <path d="M26 38 q14 -8 26 0 t22 -2" stroke="rgba(255,255,255,0.5)"
            strokeWidth="2.6" fill="none" strokeLinecap="round" />
          <Gloss cx={38} cy={34} rx={9} ry={6} />
          {/* Two hands under it: our world, not a globe in a cabinet. */}
          <path d="M20 84 q11 -12 22 -7 M80 84 q-11 -12 -22 -7"
            stroke="#c87a42" strokeWidth="6.5" strokeLinecap="round" fill="none" />
        </Frame>
      )

    case 'tech':
      return (
        <Frame size={size} label="Computing">
          {/* A screen with a cursor on it. Not a chip or a binary pattern:
              those describe the inside of a computer to somebody who has only
              ever been shown the outside. */}
          <rect x="12" y="20" width="76" height="50" rx="8" fill="#14243a" />
          <rect x="18" y="26" width="64" height="38" rx="4" fill="#2d7ff9" />
          <rect x="26" y="34" width="26" height="5" rx="2.5" fill="#fff" opacity="0.9" />
          <rect x="26" y="44" width="38" height="5" rx="2.5" fill="#fff" opacity="0.6" />
          <rect x="26" y="54" width="8" height="5" rx="2.5" fill="#f2b517" />
          <rect x="36" y="74" width="28" height="6" rx="3" fill="#14243a" />
          <rect x="26" y="80" width="48" height="6" rx="3" fill="#14243a" />
        </Frame>
      )

    case 'talk':
      return (
        <Frame size={size} label="Language">
          {/* Two bubbles, overlapping. One bubble with letters in it is the
              Words tile; two talking to each other is a language. */}
          <path d="M12 22 h48 a10 10 0 0 1 10 10 v20 a10 10 0 0 1 -10 10 H34 l-14 12 v-12 h-8
                   a10 10 0 0 1 -10 -10 V32 a10 10 0 0 1 10 -10 Z" fill="#0a6d3c" />
          <path d="M46 42 h42 a9 9 0 0 1 9 9 v18 a9 9 0 0 1 -9 9 H62 l12 10 -22 -10
                   a9 9 0 0 1 -7 -9 V51 a9 9 0 0 1 1 -9 Z" fill="#f2b517" />
          <g fill="#fff">
            <circle cx="26" cy="42" r="4" />
            <circle cx="38" cy="42" r="4" />
            <circle cx="50" cy="42" r="4" />
          </g>
          <g fill="#14243a">
            <circle cx="66" cy="60" r="3.4" />
            <circle cx="77" cy="60" r="3.4" />
            <circle cx="88" cy="60" r="3.4" />
          </g>
        </Frame>
      )

    case 'craft':
      return (
        <Frame size={size} label="Career technology">
          <defs>{shade}</defs>
          {/* A hammer, one object, big.

              The first attempt was a spanner and a screwdriver crossed, and at
              40px in a list the two of them collapsed into a grey smudge. One
              tool with a strong silhouette beats two that are individually
              correct and jointly illegible. */}
          {/* The handle, on the diagonal so it fills the frame. */}
          <rect x="30" y="52" width="46" height="12" rx="6"
            transform="rotate(38 53 58)" fill="#a35a2c" />
          <rect x="30" y="52" width="46" height="12" rx="6"
            transform="rotate(38 53 58)" fill="url(#tile-shade)" />
          {/* The head. */}
          <path d="M22 18 h34 a5 5 0 0 1 5 5 v13 a5 5 0 0 1 -5 5 H22 l-8 -6 v-11 Z"
            transform="rotate(38 38 32)" fill="#46536b" />
          <path d="M22 18 h34 a5 5 0 0 1 5 5 v13 a5 5 0 0 1 -5 5 H22 l-8 -6 v-11 Z"
            transform="rotate(38 38 32)" fill="url(#tile-shade)" />
          {/* One nail under it, so the hammer is doing something. */}
          <rect x="62" y="74" width="20" height="5" rx="2.5"
            transform="rotate(-14 72 76)" fill="#8792a6" />
        </Frame>
      )

    default:
      return (
        <Frame size={size} label="Words">
          <defs>{shade}</defs>
          <rect x="12" y="20" width="76" height="50" rx="14" fill="#0f8a4d" />
          <rect x="12" y="20" width="76" height="50" rx="14" fill="url(#tile-shade)" opacity="0.55" />
          <path d="M32 70 l-4 16 l18 -16 Z" fill="#0f8a4d" />
          <text x="50" y="54" textAnchor="middle" fontSize="27" fontWeight="800" fill="#fff">Aa</text>
        </Frame>
      )
  }
}

/* ── badges ───────────────────────────────────────────────────────────────── */

export type BadgeArtName =
  'steps' | 'numbers' | 'science' | 'story' | 'flame' | 'star' | 'crown'

/**
 * A badge, in two states.
 *
 * Unearned ones are drawn in outline rather than greyed out and blurred. A
 * child should be able to see what is coming: a locked shape they cannot make
 * out is not an incentive, it is a shut door.
 *
 * Each one had to be redrawn once. The first set put a squiggle on First
 * Steps, a teardrop on Four Days and a mountain range on Champion, and none of
 * them read as the thing it was named after.
 */
export function BadgeArt({ art, earned = true, size = 58 }: {
  art: BadgeArtName
  earned?: boolean
  size?: number
}) {
  const skin = {
    steps: '#2d7ff9',
    numbers: '#f2b517',
    science: '#0f8a4d',
    story: '#d6528a',
    flame: '#d6402e',
    /* Was green, the same as Science, so two different badges were the same
       badge in a row of seven. */
    star: '#8a4fd0',
    crown: '#d99413',
  }[art]

  const plate = earned ? skin : 'var(--nx-cream, #fffcf2)'
  /* Was lilac, left over from the tier's old palette, on a badge sitting on
     cream paper. */
  const edge = earned ? 'rgba(0,0,0,0.14)' : '#ddd6c6'
  const mark = earned ? '#ffffff' : '#a79f8e'
  const g = `badge-${art}`

  return (
    <Frame size={size} label={art}>
      {/* A rosette rather than a plain disc, so an earned badge looks awarded
          rather than merely coloured in. */}
      {earned && (
        <>
          <defs>
            <radialGradient id={g} cx={LIGHT.x} cy={LIGHT.y} r="74%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#000" stopOpacity="0.16" />
            </radialGradient>
          </defs>
          <g fill={skin} opacity="0.4">
            {Array.from({ length: 12 }, (_, i) => {
              const a = (i * Math.PI) / 6
              return (
                <circle key={i} cx={50 + Math.cos(a) * 40} cy={50 + Math.sin(a) * 40} r="7.5" />
              )
            })}
          </g>
        </>
      )}

      <circle cx="50" cy="50" r="37" fill={plate} stroke={edge}
        strokeWidth={earned ? 3 : 3.2}
        strokeDasharray={earned ? undefined : '8 6'} />
      {earned && <circle cx="50" cy="50" r="37" fill={`url(#${g})`} />}

      {art === 'steps' && (
        /* Two footprints, which is what "first steps" is. Tilted, because a
           pair of upright ovals is a pair of ovals. */
        <g fill={mark}>
          <ellipse cx="41" cy="45" rx="7" ry="10" transform="rotate(-12 41 45)" />
          <circle cx="37.5" cy="34" r="3" />
          <circle cx="43.5" cy="33" r="2.6" />
          <ellipse cx="59" cy="60" rx="7" ry="10" transform="rotate(-12 59 60)" />
          <circle cx="55.5" cy="49" r="3" />
          <circle cx="61.5" cy="48" r="2.6" />
        </g>
      )}

      {art === 'numbers' && (
        <text x="50" y="62" textAnchor="middle" fontSize="30" fontWeight="800" fill={mark}>
          123
        </text>
      )}

      {art === 'science' && (
        <>
          <path d="M43 30 h14 v15 l11 20 a6 6 0 0 1 -5 9 H37 a6 6 0 0 1 -5 -9 l11 -20 Z"
            fill="none" stroke={mark} strokeWidth="4.2" strokeLinejoin="round" />
          <circle cx="50" cy="62" r="3" fill={mark} />
        </>
      )}

      {art === 'story' && (
        /* An open book with a spine, so it is not a folded card. */
        <>
          <path d="M50 34 C43 29 33 29 28 31 v34 c5 -2 15 -2 22 3 Z"
            fill="none" stroke={mark} strokeWidth="4" strokeLinejoin="round" />
          <path d="M50 34 C57 29 67 29 72 31 v34 c-5 -2 -15 -2 -22 3 Z"
            fill="none" stroke={mark} strokeWidth="4" strokeLinejoin="round" />
          <path d="M50 34 v34" stroke={mark} strokeWidth="3" />
        </>
      )}

      {art === 'flame' && (
        /* Leaning, tapered, asymmetric. A flame that is rounded on top and
           symmetrical is a water drop, which is what the last two attempts
           looked like in a badge called Four Days. */
        <path d="M54 24 c-1 9 4 13 8 18 c7 9 6 21 -3 27 c-9 6 -22 3 -26 -6
                 c-4 -9 1 -15 5 -20 c1 5 5 6 6 1 c1 -8 5 -15 10 -20 Z"
          fill={earned ? mark : 'none'} stroke={mark} strokeWidth="3.4"
          strokeLinejoin="round" />
      )}

      {art === 'star' && (
        <path d="M50 27 L57 43 L74 45 L61 56 L65 73 L50 64 L35 73 L39 56 L26 45 L43 43 Z"
          fill={earned ? mark : 'none'} stroke={mark} strokeWidth="3.4" strokeLinejoin="round" />
      )}

      {art === 'crown' && (
        /* Points with jewels, and a band underneath, so it is a crown rather
           than a row of hills. */
        <>
          <path d="M30 62 L34 40 L42 52 L50 34 L58 52 L66 40 L70 62 Z"
            fill={earned ? mark : 'none'} stroke={mark} strokeWidth="3.6" strokeLinejoin="round" />
          <rect x="30" y="63" width="40" height="7" rx="3.5"
            fill={earned ? mark : 'none'} stroke={mark} strokeWidth="3" />
          <circle cx="34" cy="38" r="2.6" fill={mark} />
          <circle cx="50" cy="32" r="3" fill={mark} />
          <circle cx="66" cy="38" r="2.6" fill={mark} />
        </>
      )}
    </Frame>
  )
}

/* ── the chrome, drawn ────────────────────────────────────────────────────── */

/**
 * Every mark the interface needs, so nothing is a platform emoji.
 *
 * Emoji were the seam in the first version: a speaker and a flame beside a
 * drawn star, in the same forty pixels, each rendering differently on every
 * device. These are one weight on one grid.
 */
export type Mark =
  | 'speak' | 'mute' | 'flame' | 'star' | 'dice' | 'think'
  | 'back' | 'next' | 'play' | 'grown' | 'tick'
  /* The older tiers' chrome. These were text glyphs, and a chevron at 22px
     rendered as a small malformed mark that read as a typo rather than a
     control. Nothing in the interface is a character from a font any more. */
  | 'menu' | 'grid' | 'list' | 'clock' | 'power'

export function Icon({ mark, size = 22 }: { mark: Mark, size?: number }) {
  const line = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (mark) {
    case 'speak':
      return (
        <Frame size={size}>
          <path d="M20 40 h14 L52 22 v56 L34 60 H20 Z" fill="currentColor" />
          <path d="M66 36 q10 14 0 28 M78 26 q18 24 0 48" {...line} />
        </Frame>
      )
    case 'mute':
      return (
        <Frame size={size}>
          <path d="M20 40 h14 L52 22 v56 L34 60 H20 Z" fill="currentColor" />
          <path d="M66 38 l24 24 M90 38 l-24 24" {...line} />
        </Frame>
      )
    case 'flame':
      return (
        <Frame size={size}>
          {/* The same silhouette as the badge, so the counter in the header
              and the badge in Rewards are recognisably one thing. */}
          <path d="M57 8 c-2 16 6 23 13 32 c11 15 9 36 -6 45 c-15 9 -36 4 -43 -11
                   c-6 -15 2 -26 8 -34 c2 9 9 10 10 2 c2 -14 8 -26 18 -34 Z"
            fill="#f5843c" />
          <path d="M54 44 c-1 8 3 11 6 15 c5 7 4 17 -3 21 c-7 4 -16 2 -19 -5
                   c-3 -7 1 -12 4 -16 c1 4 4 5 4 1 c1 -6 4 -12 8 -16 Z"
            fill="#ffd98a" />
        </Frame>
      )
    case 'star':
      return (
        <Frame size={size}>
          <path d="M50 10 L61 38 L91 41 L68 60 L75 90 L50 74 L25 90 L32 60 L9 41 L39 38 Z"
            fill="currentColor" />
        </Frame>
      )
    case 'dice':
      return (
        <Frame size={size}>
          <rect x="16" y="16" width="68" height="68" rx="16" fill="currentColor" />
          <g fill="#fff">
            <circle cx="36" cy="36" r="6" />
            <circle cx="64" cy="36" r="6" />
            <circle cx="50" cy="50" r="6" />
            <circle cx="36" cy="64" r="6" />
            <circle cx="64" cy="64" r="6" />
          </g>
        </Frame>
      )
    case 'think':
      return (
        <Frame size={size}>
          <path d="M22 26 h56 a10 10 0 0 1 10 10 v26 a10 10 0 0 1 -10 10 H44 L28 84 V72
                   h-6 a10 10 0 0 1 -10 -10 V36 a10 10 0 0 1 10 -10 Z" fill="currentColor" />
          <text x="50" y="62" textAnchor="middle" fontSize="34" fontWeight="800" fill="#fff">?</text>
        </Frame>
      )
    case 'back':
      return (
        <Frame size={size}>
          <path d="M62 22 L34 50 L62 78" {...line} />
        </Frame>
      )
    case 'next':
      return (
        <Frame size={size}>
          <path d="M38 22 L66 50 L38 78" {...line} />
        </Frame>
      )
    case 'play':
      return (
        <Frame size={size}>
          <path d="M34 22 L76 50 L34 78 Z" fill="currentColor" />
        </Frame>
      )
    case 'grown':
      return (
        <Frame size={size}>
          {/* Two figures, one tall and one short: the grown up's door.

              Filled, not stroked. The first version drew the shoulders as two
              thick arcs, and at 21px the arcs merged with the heads into one
              wavy mark that read as a scribble rather than as two people. */}
          <circle cx="36" cy="28" r="14" fill="currentColor" />
          <path d="M14 86 a22 22 0 0 1 44 0 Z" fill="currentColor" />
          <circle cx="72" cy="44" r="10" fill="currentColor" />
          <path d="M56 86 a16 16 0 0 1 32 0 Z" fill="currentColor" />
        </Frame>
      )
    case 'menu':
      return (
        <Frame size={size}>
          <path d="M20 32 h60 M20 50 h60 M20 68 h60" {...line} />
        </Frame>
      )
    case 'grid':
      return (
        <Frame size={size}>
          <rect x="16" y="16" width="30" height="30" rx="6" fill="currentColor" />
          <rect x="54" y="16" width="30" height="30" rx="6" fill="currentColor" />
          <rect x="16" y="54" width="30" height="30" rx="6" fill="currentColor" />
          <rect x="54" y="54" width="30" height="30" rx="6" fill="currentColor" />
        </Frame>
      )
    case 'list':
      return (
        <Frame size={size}>
          <circle cx="24" cy="28" r="6" fill="currentColor" />
          <circle cx="24" cy="50" r="6" fill="currentColor" />
          <circle cx="24" cy="72" r="6" fill="currentColor" />
          <path d="M42 28 h40 M42 50 h40 M42 72 h40" {...line} strokeWidth="7" />
        </Frame>
      )
    case 'clock':
      return (
        <Frame size={size}>
          <circle cx="50" cy="50" r="33" fill="none" stroke="currentColor" strokeWidth="8" />
          <path d="M50 30 v22 l16 10" {...line} />
        </Frame>
      )
    case 'power':
      return (
        <Frame size={size}>
          <path d="M50 16 v30" {...line} />
          <path d="M28 32 a30 30 0 1 0 44 0" {...line} />
        </Frame>
      )
    default:
      return (
        <Frame size={size}>
          <path d="M22 54 L42 74 L80 30" {...line} strokeWidth="10" />
        </Frame>
      )
  }
}

/** The tab bar marks. One weight, one grid, so the row reads as a set. */
export function TabIcon({ tab, on }: { tab: 'home' | 'play', on: boolean }) {
  const c = on ? 'currentColor' : 'none'
  const s = 'currentColor'
  return (
    <Frame size={26}>
      {tab === 'home' ? (
        <path d="M18 48 L50 20 L82 48 V82 a4 4 0 0 1 -4 4 H22 a4 4 0 0 1 -4 -4 Z"
          fill={c} stroke={s} strokeWidth="7" strokeLinejoin="round" />
      ) : (
        <>
          <rect x="10" y="32" width="80" height="42" rx="20" fill={c} stroke={s} strokeWidth="7" />
          <path d="M30 53 h14 M37 46 v14" stroke={on ? '#fff' : s} strokeWidth="6" strokeLinecap="round" />
          <circle cx="68" cy="53" r="5.5" fill={on ? '#fff' : s} />
        </>
      )}
    </Frame>
  )
}
