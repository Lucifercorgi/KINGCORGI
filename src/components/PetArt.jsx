import { useId } from 'react'

const TONES = {
  sand: ['#f7e8d1', '#e7cca2', '#d3ae7c'],
  mist: ['#f2f5f7', '#dde4ea', '#c4cfd9'],
  gold: ['#faebc6', '#eccd8c', '#d3a95a'],
  cream: ['#fbf3e6', '#eee0c8', '#dcc7a8'],
  peach: ['#fcece2', '#f5d1b7', '#e5b092'],
}

function Eyes({ y = 158, spread = 30, r = 10 }) {
  return (
    <g>
      <ellipse cx={200 - spread} cy={y} rx={r} ry={r + 1.5} fill="#2a2018" />
      <ellipse cx={200 + spread} cy={y} rx={r} ry={r + 1.5} fill="#2a2018" />
      <circle cx={200 - spread + 3.5} cy={y - 4} r={3.4} fill="#fff" opacity=".9" />
      <circle cx={200 + spread + 3.5} cy={y - 4} r={3.4} fill="#fff" opacity=".9" />
    </g>
  )
}

function Snout({ y = 196, color = '#2f251b', tongue = false }) {
  return (
    <g>
      <path
        d={`M${200 - 13} ${y - 8} q13 -9 26 0 q-3 13 -13 14 q-10 -1 -13 -14 Z`}
        fill={color}
      />
      <path
        d={`M200 ${y + 6} v9 M200 ${y + 15} q-11 12 -22 1 M200 ${y + 15} q11 12 22 1`}
        stroke={color}
        strokeWidth="3.4"
        strokeLinecap="round"
        fill="none"
      />
      {tongue && (
        <path
          d={`M190 ${y + 26} q10 16 20 0 q2 14 -10 14 q-12 0 -10 -14 Z`}
          fill="#e8707a"
        />
      )}
    </g>
  )
}

function Corgi({ crown = false }) {
  return (
    <g>
      {crown && (
        <g>
          <path
            d="M160 96 L172 58 L186 82 L200 48 L214 82 L228 58 L240 96 Z"
            fill="url(#crownGold)"
            stroke="#a9792f"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <rect x="158" y="94" width="84" height="12" rx="5" fill="url(#crownGold)" stroke="#a9792f" strokeWidth="3" />
          <circle cx="200" cy="72" r="5" fill="#f6e6b4" />
          <circle cx="176" cy="84" r="4" fill="#f6e6b4" />
          <circle cx="224" cy="84" r="4" fill="#f6e6b4" />
        </g>
      )}
      {/* ears */}
      <path d="M136 132 L136 62 L188 104 Z" fill="#d98f4f" />
      <path d="M264 132 L264 62 L212 104 Z" fill="#d98f4f" />
      <path d="M144 122 L146 82 L172 104 Z" fill="#f4cba6" />
      <path d="M256 122 L254 82 L228 104 Z" fill="#f4cba6" />
      {/* head */}
      <ellipse cx="200" cy="176" rx="78" ry="70" fill="#e59b58" />
      {/* blaze */}
      <path
        d="M200 112 q24 26 24 56 q0 30 -24 46 q-24 -16 -24 -46 q0 -30 24 -56 Z"
        fill="#fdf4e8"
      />
      {/* cheeks */}
      <ellipse cx="152" cy="190" rx="28" ry="24" fill="#fdf4e8" />
      <ellipse cx="248" cy="190" rx="28" ry="24" fill="#fdf4e8" />
      <Eyes y={166} spread={34} r={9.5} />
      <Snout y={198} tongue />
    </g>
  )
}

function Cat({ folded = false, orange = false }) {
  const fur = orange ? '#e9a765' : '#e5b45f'
  const dark = orange ? '#cf8746' : '#cf9a3f'
  return (
    <g>
      {!folded && (
        <>
          <path d="M140 138 L142 72 L190 108 Z" fill={fur} />
          <path d="M260 138 L258 72 L210 108 Z" fill={fur} />
          <path d="M150 128 L152 92 L176 110 Z" fill="#f3b7b7" />
          <path d="M250 128 L248 92 L224 110 Z" fill="#f3b7b7" />
        </>
      )}
      {folded && (
        <>
          <path d="M138 128 L146 96 L182 112 Z" fill={dark} />
          <path d="M262 128 L254 96 L218 112 Z" fill={dark} />
        </>
      )}
      <ellipse cx="200" cy="180" rx="76" ry="68" fill={fur} />
      <path d="M200 130 q26 18 26 46 q0 30 -26 42 q-26 -12 -26 -42 q0 -28 26 -46 Z" fill="#fbefdd" opacity=".8" />
      <ellipse cx="168" cy="196" rx="24" ry="19" fill="#fbefdd" />
      <ellipse cx="232" cy="196" rx="24" ry="19" fill="#fbefdd" />
      <Eyes y={170} spread={32} r={9} />
      <path d="M192 194 h16 l-8 9 Z" fill="#d97f86" />
      <path d="M200 203 v7 M200 210 q-9 9 -17 1 M200 210 q9 9 17 1" stroke="#4a3a2c" strokeWidth="3" strokeLinecap="round" fill="none" />
      <g stroke="#6b5847" strokeWidth="2.6" strokeLinecap="round" opacity=".75">
        <path d="M172 198 L134 190" />
        <path d="M172 205 L136 208" />
        <path d="M228 198 L266 190" />
        <path d="M228 205 L264 208" />
      </g>
      <path d="M196 122 q4 -8 12 -6 M204 122 q-2 -9 -12 -6" stroke={dark} strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  )
}

function Poodle() {
  return (
    <g>
      <ellipse cx="132" cy="176" rx="30" ry="44" fill="#e4d2ba" />
      <ellipse cx="268" cy="176" rx="30" ry="44" fill="#e4d2ba" />
      <circle cx="160" cy="120" r="26" fill="#f6ecdd" />
      <circle cx="240" cy="120" r="26" fill="#f6ecdd" />
      <circle cx="200" cy="112" r="24" fill="#f6ecdd" />
      <ellipse cx="200" cy="178" rx="74" ry="66" fill="#f6ecdd" />
      <circle cx="144" cy="150" r="20" fill="#f6ecdd" />
      <circle cx="256" cy="150" r="20" fill="#f6ecdd" />
      <ellipse cx="200" cy="196" rx="40" ry="30" fill="#fdf8f0" />
      <Eyes y={168} spread={32} r={9} />
      <Snout y={200} color="#4b3d31" tongue />
    </g>
  )
}

function Golden() {
  return (
    <g>
      <ellipse cx="126" cy="182" rx="30" ry="52" fill="#d99a52" transform="rotate(-8 126 182)" />
      <ellipse cx="274" cy="182" rx="30" ry="52" fill="#d99a52" transform="rotate(8 274 182)" />
      <ellipse cx="200" cy="174" rx="80" ry="72" fill="#e8ac62" />
      <ellipse cx="200" cy="200" rx="52" ry="40" fill="#f8e7cf" />
      <path d="M200 112 q22 24 22 54 q0 26 -22 40 q-22 -14 -22 -40 q0 -30 22 -54 Z" fill="#f8e7cf" opacity=".55" />
      <Eyes y={166} spread={33} r={9.5} />
      <Snout y={200} color="#3a2b1e" tongue />
    </g>
  )
}

function Shiba() {
  return (
    <g>
      <path d="M142 136 L144 68 L192 106 Z" fill="#c8823f" />
      <path d="M258 136 L256 68 L208 106 Z" fill="#c8823f" />
      <path d="M151 126 L153 88 L177 108 Z" fill="#f0c4a0" />
      <path d="M249 126 L247 88 L223 108 Z" fill="#f0c4a0" />
      <ellipse cx="200" cy="176" rx="78" ry="68" fill="#d08f4c" />
      <ellipse cx="200" cy="198" rx="54" ry="42" fill="#fbf1e2" />
      <ellipse cx="150" cy="186" rx="26" ry="22" fill="#fbf1e2" />
      <ellipse cx="250" cy="186" rx="26" ry="22" fill="#fbf1e2" />
      <path d="M200 128 q8 10 8 22 q-8 6 -16 0 q0 -12 8 -22 Z" fill="#fbf1e2" />
      <Eyes y={166} spread={33} r={9} />
      <Snout y={198} color="#332619" tongue />
    </g>
  )
}

export default function PetArt({ art = 'corgi', tone = 'sand', className = '' }) {
  const rawId = useId()
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, '')
  const [c1, c2, c3] = TONES[tone] || TONES.sand

  const shape =
    art === 'cat' ? (
      <Cat />
    ) : art === 'cat2' ? (
      <Cat folded orange />
    ) : art === 'poodle' ? (
      <Poodle />
    ) : art === 'golden' ? (
      <Golden />
    ) : art === 'shiba' ? (
      <Shiba />
    ) : art === 'crown' ? (
      <Corgi crown />
    ) : (
      <Corgi />
    )

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={`bg${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
        <linearGradient id="crownGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6dda0" />
          <stop offset="100%" stopColor="#d9ab55" />
        </linearGradient>
        <radialGradient id={`glow${uid}`} cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#bg${uid})`} />
      <circle cx="200" cy="160" r="150" fill={`url(#glow${uid})`} />
      <circle cx="58" cy="52" r="30" fill="#ffffff" opacity="0.28" />
      <circle cx="344" cy="248" r="46" fill={c3} opacity="0.28" />
      <circle cx="330" cy="60" r="14" fill="#ffffff" opacity="0.35" />
      {shape}
    </svg>
  )
}
