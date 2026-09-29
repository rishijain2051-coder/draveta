import { MARK } from '../brand.js'

// Real construction geometry of the Draveta mark (258-unit square):
// four loops of R 67.46 on a 123.1 pitch, a Ø 71.4 centre ring, everything on 45°.
const A = 67.4, B = 190.5, R = 67.46, r = 35.7, rh = 19.6, M = 129
const circle = (cx, cy, rad) => `M${cx + rad} ${cy}A${rad} ${rad} 0 1 1 ${cx - rad} ${cy}A${rad} ${rad} 0 1 1 ${cx + rad} ${cy}`
const t = (s0, du) => ({ '--s0': s0, '--du': du })

const Line = ({ d, s0, du, c = '' }) => <path className={`cl ${c}`} d={d} pathLength="1" style={t(s0, du)} />

export function Mark({ className = '', ...rest }) {
  return (
    <svg className={className} viewBox="0 0 258 258" aria-hidden="true" {...rest}>
      {MARK.map((p, i) => <path key={i} transform={p.t} d={p.d} />)}
    </svg>
  )
}

export default function Knot() {
  const loops = [[A, A], [B, A], [A, B], [B, B]]
  return (
    <svg className="knot" viewBox="0 0 258 258" aria-hidden="true">
      <g className="cons">
        {/* datums run off the sheet */}
        <Line c="datum" d={`M-3000 ${M}H3000`} s0={0} du={0.24} />
        <Line c="datum" d={`M${M} -3000V3000`} s0={0.03} du={0.24} />
        {/* bounding tangents */}
        <Line d="M-40 0H298" s0={0.1} du={0.16} />
        <Line d="M-40 258H298" s0={0.12} du={0.16} />
        <Line d="M0 -40V298" s0={0.14} du={0.16} />
        <Line d="M258 -40V298" s0={0.16} du={0.16} />
        {/* loop centre lines */}
        <Line c="thin" d={`M-20 ${A}H278M-20 ${B}H278`} s0={0.16} du={0.16} />
        <Line c="thin" d={`M${A} -20V278M${B} -20V278`} s0={0.18} du={0.16} />
        {/* compass: the four loops */}
        {loops.map(([x, y], i) => <Line key={i} d={circle(x, y, R)} s0={0.2 + i * 0.04} du={0.2} />)}
        {/* 45° diagonals */}
        <Line c="datum" d="M-400 -400L658 658" s0={0.32} du={0.2} />
        <Line c="datum" d="M658 -400L-400 658" s0={0.35} du={0.2} />
        {/* teardrop and centre rings */}
        {loops.map(([x, y], i) => <Line key={`r${i}`} c="thin" d={circle(x, y, r)} s0={0.4 + i * 0.02} du={0.14} />)}
        <Line d={circle(M, M, r)} s0={0.44} du={0.14} />
        <Line c="thin" d={circle(M, M, rh)} s0={0.47} du={0.12} />
        {/* dimensions */}
        <g className="dim">
          <Line d={`M${B + 47.7} ${A - 47.7}L292 -34H336`} s0={0.5} du={0.1} />
          <text x="340" y="-30" style={t(0.56, 0.08)}>R 67.5</text>
          <Line d="M0 272V330M258 272V330M0 320H258" s0={0.52} du={0.12} />
          <Line c="tick" d="M-6 326L6 314M252 326L264 314" s0={0.6} du={0.05} />
          <text x="129" y="312" textAnchor="middle" style={t(0.6, 0.08)}>258.0</text>
          <Line d={`M272 ${A}H330M272 ${B}H330M320 ${A}V${B}`} s0={0.54} du={0.12} />
          <Line c="tick" d={`M314 ${A + 6}L326 ${A - 6}M314 ${B + 6}L326 ${B - 6}`} s0={0.62} du={0.05} />
          <text x="312" y={M} textAnchor="middle" transform={`rotate(-90 312 ${M})`} style={t(0.62, 0.08)}>123.1</text>
          <Line d="M298 258A40 40 0 0 1 286.3 286.3" s0={0.58} du={0.08} />
          <text x="304" y="290" style={t(0.64, 0.08)}>45°</text>
        </g>
      </g>
      <g className="ink">
        {MARK.map((p, i) => <path key={i} className="ink-line" transform={p.t} d={p.d} pathLength="1" />)}
      </g>
    </svg>
  )
}
