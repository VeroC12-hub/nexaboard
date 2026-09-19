import { Frame, LABEL, LEAD } from './Teaching'

/**
 * Instructional diagrams for the transport, division and nutrition lessons.
 *
 * Drawn rather than imported, for the same reasons as the cell diagrams: they
 * scale to any screen, they use the brand palette, they weigh nothing, and each
 * carries a description that teaches the same point to a learner using a screen
 * reader. Every one of them is doing explanatory work; none is decoration.
 */

/** Particles spreading down a concentration gradient. */
export function Diffusion() {
  return (
    <Frame title="Diffusion down a concentration gradient"
      desc="Particles crowded on the left of a container spread out until they are evenly distributed.">
      <rect x="20" y="40" width="170" height="150" rx="8" fill="#f6fbf3" stroke="var(--line)" strokeWidth="2" />
      <rect x="230" y="40" width="170" height="150" rx="8" fill="#f6fbf3" stroke="var(--line)" strokeWidth="2" />
      {[[45, 70], [62, 95], [40, 120], [70, 140], [52, 165], [85, 70], [95, 110], [78, 175], [105, 150], [60, 55]]
        .map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5" fill="var(--brand)" />)}
      {[[250, 70], [290, 95], [330, 60], [370, 120], [262, 150], [310, 175], [350, 160], [380, 80], [300, 120], [240, 110]]
        .map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5" fill="var(--brand)" />)}
      <text x="105" y="212" textAnchor="middle" style={LABEL}>At the start</text>
      <text x="315" y="212" textAnchor="middle" style={LABEL}>After diffusion</text>
      <line x1="196" y1="115" x2="220" y2="115" stroke="var(--ink-2)" strokeWidth="2" />
      <polygon points="228,115 218,110 218,120" fill="var(--ink-2)" />
      <text x="210" y="240" textAnchor="middle" style={{ ...LABEL, fill: 'var(--muted)' }}>
        net movement runs from high to low concentration
      </text>
    </Frame>
  )
}

/** Water crossing a partially permeable membrane. */
export function Osmosis() {
  return (
    <Frame title="Osmosis across a partially permeable membrane"
      desc="A membrane separates a dilute solution from a concentrated one. Small water molecules pass through towards the concentrated side, while larger solute particles cannot.">
      <rect x="30" y="45" width="150" height="150" rx="8" fill="#eef8fd" stroke="var(--line)" strokeWidth="2" />
      <rect x="240" y="45" width="150" height="150" rx="8" fill="#dceef8" stroke="var(--line)" strokeWidth="2" />
      <line x1="210" y1="40" x2="210" y2="200" stroke="var(--ink-2)" strokeWidth="3" strokeDasharray="7 5" />
      <text x="210" y="32" textAnchor="middle" style={LABEL}>membrane</text>
      {[[60, 75], [100, 110], [75, 150], [140, 90], [120, 170], [160, 130]]
        .map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4" fill="#4a90b8" />)}
      {[[270, 75], [330, 110], [300, 160], [360, 90]]
        .map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4" fill="#4a90b8" />)}
      {[[280, 130], [340, 150], [310, 70], [370, 175]]
        .map(([x, y], i) => <circle key={i} cx={x} cy={y} r="9" fill="var(--brand)" opacity=".6" />)}
      <line x1="176" y1="120" x2="236" y2="120" stroke="#4a90b8" strokeWidth="2.5" />
      <polygon points="244,120 233,114 233,126" fill="#4a90b8" />
      <text x="105" y="216" textAnchor="middle" style={LABEL}>dilute</text>
      <text x="315" y="216" textAnchor="middle" style={LABEL}>concentrated</text>
      <text x="210" y="242" textAnchor="middle" style={{ ...LABEL, fill: 'var(--muted)' }}>
        water passes through; larger dissolved particles do not
      </text>
    </Frame>
  )
}

/** Passive movement compared with movement that costs energy. */
export function Transport() {
  return (
    <Frame title="Passive movement compared with active transport"
      desc="Diffusion and osmosis move substances down a gradient with no energy. Active transport moves them up the gradient using energy from respiration.">
      <polygon points="30,180 200,180 200,90" fill="#eef7e8" stroke="var(--line)" strokeWidth="1.5" />
      <line x1="185" y1="105" x2="58" y2="170" stroke="var(--brand)" strokeWidth="2.5" />
      <polygon points="48,176 62,166 66,177" fill="var(--brand)" />
      <text x="118" y="126" textAnchor="middle" style={{ ...LABEL, fill: 'var(--brand-700)' }}>passive</text>
      <text x="118" y="144" textAnchor="middle" style={{ ...LABEL, fill: 'var(--brand-700)' }}>no energy</text>
      <text x="115" y="205" textAnchor="middle" style={LABEL}>down the gradient</text>

      <polygon points="220,180 390,180 390,90" fill="#fdf3e7" stroke="var(--line)" strokeWidth="1.5" />
      <line x1="245" y1="172" x2="372" y2="107" stroke="var(--warn)" strokeWidth="2.5" />
      <polygon points="382,101 368,111 364,100" fill="var(--warn)" />
      <text x="305" y="126" textAnchor="middle" style={{ ...LABEL, fill: 'var(--warn)' }}>active</text>
      <text x="305" y="144" textAnchor="middle" style={{ ...LABEL, fill: 'var(--warn)' }}>needs energy</text>
      <text x="305" y="205" textAnchor="middle" style={LABEL}>up the gradient</text>

      <text x="210" y="240" textAnchor="middle" style={{ ...LABEL, fill: 'var(--muted)' }}>
        the energy for active transport comes from respiration
      </text>
    </Frame>
  )
}

/** Mitosis and meiosis compared by outcome. */
export function Division() {
  return (
    <Frame title="Mitosis compared with meiosis"
      desc="Mitosis produces two identical cells keeping the full chromosome number. Meiosis produces four genetically varied cells with half the chromosome number.">
      <text x="60" y="34" textAnchor="middle" style={{ ...LABEL, fill: 'var(--brand-700)' }}>MITOSIS</text>
      <circle cx="60" cy="74" r="22" fill="#eaf7e3" stroke="var(--brand)" strokeWidth="2" />
      <text x="60" y="78" textAnchor="middle" style={LABEL}>2n</text>
      <line x1="86" y1="74" x2="122" y2="74" stroke="var(--faint)" strokeWidth="1.5" />
      <circle cx="152" cy="50" r="18" fill="#eaf7e3" stroke="var(--brand)" strokeWidth="2" />
      <circle cx="152" cy="100" r="18" fill="#eaf7e3" stroke="var(--brand)" strokeWidth="2" />
      <text x="152" y="54" textAnchor="middle" style={LABEL}>2n</text>
      <text x="152" y="104" textAnchor="middle" style={LABEL}>2n</text>
      <text x="152" y="130" textAnchor="middle" style={{ ...LABEL, fill: 'var(--muted)' }}>two identical</text>

      <text x="60" y="158" textAnchor="middle" style={{ ...LABEL, fill: 'var(--warn)' }}>MEIOSIS</text>
      <circle cx="60" cy="194" r="22" fill="#fdf3e7" stroke="var(--warn)" strokeWidth="2" />
      <text x="60" y="198" textAnchor="middle" style={LABEL}>2n</text>
      <line x1="86" y1="194" x2="122" y2="194" stroke="var(--faint)" strokeWidth="1.5" />
      {[167, 185, 203, 221].map((y, i) => (
        <g key={i}>
          <circle cx="152" cy={y} r="11" fill="#fdf3e7" stroke="var(--warn)" strokeWidth="1.8" />
          <text x="152" y={y + 4} textAnchor="middle" style={{ ...LABEL, fontSize: 9 }}>n</text>
        </g>
      ))}
      <text x="152" y="248" textAnchor="middle" style={{ ...LABEL, fill: 'var(--muted)' }}>four varied</text>

      <text x="300" y="110" textAnchor="middle" style={{ ...LABEL, fill: 'var(--ink-2)' }}>2n = full chromosome number</text>
      <text x="300" y="134" textAnchor="middle" style={{ ...LABEL, fill: 'var(--ink-2)' }}>n = half the number</text>
    </Frame>
  )
}

/** Inputs and outputs of photosynthesis. */
export function Photosynthesis() {
  return (
    <Frame title="Photosynthesis: what goes in and what comes out"
      desc="Carbon dioxide and water enter a leaf. Using light energy trapped by chlorophyll, the leaf produces glucose and releases oxygen.">
      <path d="M196 26 L188 54 M210 24 L210 54 M224 26 L232 54"
            stroke="var(--warn)" strokeWidth="2.5" strokeLinecap="round" />
      <text x="210" y="18" textAnchor="middle" style={{ ...LABEL, fill: 'var(--warn)' }}>light energy</text>

      <ellipse cx="210" cy="128" rx="86" ry="56" fill="#dff3d2" stroke="var(--brand-700)" strokeWidth="2.5" />
      <text x="210" y="124" textAnchor="middle" style={{ ...LABEL, fill: 'var(--brand-700)' }}>chlorophyll</text>
      <text x="210" y="144" textAnchor="middle" style={{ ...LABEL, fill: 'var(--brand-700)' }}>in the leaf</text>

      <text x="14" y="74" style={LABEL}>carbon dioxide</text>
      <line x1="98" y1="80" x2="134" y2="102" {...LEAD} />
      <text x="44" y="190" style={LABEL}>water</text>
      <line x1="88" y1="182" x2="132" y2="156" {...LEAD} />
      <text x="326" y="74" style={LABEL}>glucose</text>
      <line x1="288" y1="102" x2="324" y2="80" {...LEAD} />
      <text x="326" y="190" style={LABEL}>oxygen</text>
      <line x1="288" y1="156" x2="324" y2="182" {...LEAD} />

      <text x="210" y="238" textAnchor="middle" style={{ ...LABEL, fill: 'var(--muted)' }}>
        carbon dioxide + water gives glucose + oxygen
      </text>
    </Frame>
  )
}

/** A leaf in section, each feature labelled with the job it does. */
export function Leaf() {
  return (
    <Frame title="A leaf in section"
      desc="A cross-section of a leaf: a waxy upper layer, palisade cells packed with chloroplasts near the top, air spaces and a vein below, and stomata on the lower surface.">
      <rect x="34" y="58" width="300" height="14" fill="#f0f7ea" stroke="var(--line)" strokeWidth="1.5" />
      <rect x="34" y="72" width="300" height="46" fill="#cfeab8" stroke="var(--brand-700)" strokeWidth="1.5" />
      {[46, 78, 110, 142, 174, 206, 238, 270, 302].map((x, i) => (
        <ellipse key={i} cx={x + 8} cy={95} rx="6" ry="16" fill="#5ab82e" opacity=".75" />
      ))}
      <rect x="34" y="118" width="300" height="52" fill="#e8f5de" stroke="var(--brand)" strokeWidth="1.5" />
      {[[70, 144], [120, 136], [250, 150], [300, 138]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="9" fill="#fff" opacity=".85" />
      ))}
      <ellipse cx="185" cy="144" rx="26" ry="15" fill="#cfeaf7" stroke="#4a90b8" strokeWidth="1.5" />
      <rect x="34" y="170" width="300" height="13" fill="#f0f7ea" stroke="var(--line)" strokeWidth="1.5" />
      {[100, 185, 270].map((x, i) => (
        <path key={i} d={'M' + (x - 10) + ' 183 q10 12 20 0'} fill="none"
              stroke="var(--brand-700)" strokeWidth="2.5" />
      ))}
      <text x="342" y="68" style={LABEL}>waxy layer</text>
      <text x="342" y="98" style={LABEL}>palisade cells</text>
      <text x="342" y="144" style={LABEL}>air spaces</text>
      <text x="342" y="182" style={LABEL}>stomata</text>
      <line x1="211" y1="144" x2="250" y2="208" {...LEAD} />
      <text x="212" y="224" style={LABEL}>vein</text>
      <text x="184" y="248" textAnchor="middle" style={{ ...LABEL, fill: 'var(--muted)' }}>
        each feature serves light, gas exchange or transport
      </text>
    </Frame>
  )
}


/** Particle arrangement in the three states, for junior high. */
export function States() {
  const grid = (ox: number, oy: number, cols: number, rows: number, gap: number, jitter: number) => {
    const out: React.JSX.Element[] = []
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const jx = jitter ? (((r * 7 + c * 13) % 5) - 2) * jitter : 0
      const jy = jitter ? (((r * 11 + c * 5) % 5) - 2) * jitter : 0
      out.push(<circle key={r + "-" + c} cx={ox + c * gap + jx} cy={oy + r * gap + jy} r="6"
                       fill="var(--brand)" opacity=".85" />)
    }
    return out
  }
  return (
    <Frame title="Particles in a solid, a liquid and a gas"
      desc="In a solid the particles are packed in a fixed pattern. In a liquid they are still close but irregular. In a gas they are far apart.">
      <rect x="16" y="46" width="118" height="118" rx="8" fill="#f6fbf3" stroke="var(--line)" strokeWidth="2" />
      {grid(34, 64, 5, 5, 22, 0)}
      <text x="75" y="186" textAnchor="middle" style={LABEL}>Solid</text>
      <text x="75" y="204" textAnchor="middle" style={{ ...LABEL, fill: 'var(--muted)' }}>fixed pattern</text>

      <rect x="151" y="46" width="118" height="118" rx="8" fill="#f6fbf3" stroke="var(--line)" strokeWidth="2" />
      {grid(170, 66, 5, 5, 22, 3)}
      <text x="210" y="186" textAnchor="middle" style={LABEL}>Liquid</text>
      <text x="210" y="204" textAnchor="middle" style={{ ...LABEL, fill: 'var(--muted)' }}>close but sliding</text>

      <rect x="286" y="46" width="118" height="118" rx="8" fill="#f6fbf3" stroke="var(--line)" strokeWidth="2" />
      {[[310,70],[370,62],[340,104],[300,132],[386,124],[352,150],[318,168],[392,168]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="6" fill="var(--brand)" opacity=".85" />))}
      <text x="345" y="186" textAnchor="middle" style={LABEL}>Gas</text>
      <text x="345" y="204" textAnchor="middle" style={{ ...LABEL, fill: 'var(--muted)' }}>far apart</text>

      <text x="210" y="238" textAnchor="middle" style={{ ...LABEL, fill: 'var(--muted)' }}>
        the particles are the same; only their arrangement differs
      </text>
    </Frame>
  )
}

/** The four changes of state, and which way heat moves them. */
export function Changes() {
  const box = (x: number, label: string) => (
    <g>
      <rect x={x} y="86" width="96" height="52" rx="9" fill="#eaf7e3" stroke="var(--brand)" strokeWidth="2" />
      <text x={x + 48} y="117" textAnchor="middle" style={{ ...LABEL, fontSize: 12 }}>{label}</text>
    </g>
  )
  return (
    <Frame title="Changes of state"
      desc="Heating turns a solid into a liquid by melting and a liquid into a gas by boiling. Cooling reverses these as condensing and freezing.">
      {box(22, 'Solid')}{box(162, 'Liquid')}{box(302, 'Gas')}
      <line x1="120" y1="102" x2="156" y2="102" stroke="var(--warn)" strokeWidth="2.5" />
      <polygon points="162,102 151,97 151,107" fill="var(--warn)" />
      <text x="140" y="90" textAnchor="middle" style={{ ...LABEL, fill: 'var(--warn)', fontSize: 10 }}>melting</text>
      <line x1="260" y1="102" x2="296" y2="102" stroke="var(--warn)" strokeWidth="2.5" />
      <polygon points="302,102 291,97 291,107" fill="var(--warn)" />
      <text x="280" y="90" textAnchor="middle" style={{ ...LABEL, fill: 'var(--warn)', fontSize: 10 }}>boiling</text>
      <line x1="296" y1="126" x2="262" y2="126" stroke="#4a90b8" strokeWidth="2.5" />
      <polygon points="256,126 267,121 267,131" fill="#4a90b8" />
      <text x="280" y="150" textAnchor="middle" style={{ ...LABEL, fill: '#4a90b8', fontSize: 10 }}>condensing</text>
      <line x1="156" y1="126" x2="122" y2="126" stroke="#4a90b8" strokeWidth="2.5" />
      <polygon points="116,126 127,121 127,131" fill="#4a90b8" />
      <text x="140" y="150" textAnchor="middle" style={{ ...LABEL, fill: '#4a90b8', fontSize: 10 }}>freezing</text>
      <text x="210" y="196" textAnchor="middle" style={{ ...LABEL, fill: 'var(--warn)' }}>heating adds energy</text>
      <text x="210" y="216" textAnchor="middle" style={{ ...LABEL, fill: '#4a90b8' }}>cooling removes energy</text>
    </Frame>
  )
}

/** Looked up by the name a lesson step stores in its payload. */
export const EXTRA: Record<string, () => React.JSX.Element> = {
  diffusion: Diffusion,
  osmosis: Osmosis,
  transport: Transport,
  division: Division,
  photosynthesis: Photosynthesis,
  leaf: Leaf,
  states: States,
  changes: Changes,
}
