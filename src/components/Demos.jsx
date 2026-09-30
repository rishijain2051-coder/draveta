import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'

// Illustrative demos with sample data. They show the idea of each product, not its exact UI.

const num = (s) => (Number.isFinite(parseFloat(s)) && parseFloat(s) >= 0 ? parseFloat(s) : 0)
const fmt = (n, d = 2) => n.toLocaleString('en-IN', { minimumFractionDigits: d, maximumFractionDigits: d })

/* ── T-Cal: sawn timber volume in CFT = L(ft) × W(in) × T(in) ÷ 144 × pieces ── */
export function TCal() {
  const [v, setV] = useState({ l: '8', w: '6', t: '2', n: '40' })
  const cft = (num(v.l) * num(v.w) * num(v.t) / 144) * num(v.n)
  const field = (k, label, unit) => (
    <label className="ui-field">
      <span>{label}</span>
      <span className="ui-input">
        <input inputMode="decimal" value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value.replace(/[^\d.]/g, '') })} aria-label={`${label} in ${unit}`} />
        <em>{unit}</em>
      </span>
    </label>
  )
  return (
    <div className="ui ui-tcal">
      <header className="ui-bar"><b>T-Cal</b><span>Sawn timber</span></header>
      <div className="ui-grid2">
        {field('l', 'Length', 'ft')}
        {field('w', 'Width', 'in')}
        {field('t', 'Thickness', 'in')}
        {field('n', 'Pieces', 'pcs')}
      </div>
      <output className="ui-result" aria-live="polite">
        <span>Volume</span>
        <strong>{fmt(cft)}</strong>
        <em>CFT</em>
      </output>
      <p className="ui-formula">{v.l || 0} × {v.w || 0} × {v.t || 0} ÷ 144 × {v.n || 0}</p>
    </div>
  )
}

/* ── Sticker Scanner: phone checking cartons against the manifest ── */
const MANIFEST = [
  ['CTN-001', 'Sheesham side table'],
  ['CTN-002', 'Sheesham side table'],
  ['CTN-003', 'Mango wood stool'],
  ['CTN-004', 'Acacia bench'],
  ['CTN-005', 'Mango wood stool'],
  ['CTN-006', 'Sheesham bookshelf'],
]
export function Scanner({ live = true }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!live || n >= 4) return
    const id = setTimeout(() => setN((x) => x + 1), n === 0 ? 500 : 850)
    return () => clearTimeout(id)
  }, [live, n])
  const done = n >= MANIFEST.length
  return (
    <div className="ui ui-phone">
      <div className="ui-status"><span>10:42</span><span className="ui-notch" /><span>4G</span></div>
      <header className="ui-bar"><b>Sticker Scanner</b></header>
      <div className="ui-cont">
        <span>Container</span>
        <strong>DRVU 204518 2</strong>
      </div>
      <div className={`ui-view ${live && !done ? 'is-scanning' : ''}`}>
        <Icon name="scan" size={28} />
        <span>{n ? MANIFEST[n - 1][0] : 'Point at a barcode'}</span>
      </div>
      <ul className="ui-list">
        {MANIFEST.map(([code, item], i) => (
          <li key={code} className={i < n ? 'is-ok' : ''}>
            <span className="ui-mark">{i < n && <Icon name="check" size={14} />}</span>
            <span><b>{code}</b>{item}</span>
          </li>
        ))}
      </ul>
      <footer className={`ui-count ${done ? 'is-done' : ''}`}>
        <span>{done ? 'Manifest matched' : `${MANIFEST.length - n} pending`}</span>
        <strong>{n} / {MANIFEST.length}</strong>
      </footer>
      <button type="button" className="ui-btn" onClick={() => setN(done ? 0 : n + 1)}>
        {done ? 'Start next container' : 'Scan next carton'}
      </button>
    </div>
  )
}

/* ── T-Job Sheet: tap a status to move the job along ── */
const STATES = ['Pending', 'In progress', 'Done']
export function JobSheet() {
  const [rows, setRows] = useState([
    ['JS-1041', 'Dining chair × 120', 'Team A', 'Cutting', 2],
    ['JS-1042', 'Side table × 80', 'Team B', 'Carving', 1],
    ['JS-1043', 'Bookshelf × 40', 'Team C', 'Polishing', 1],
    ['JS-1044', 'Stool × 200', 'Team A', 'Packing', 0],
  ])
  const cycle = (i) => setRows(rows.map((r, j) => (j === i ? [...r.slice(0, 4), (r[4] + 1) % 3] : r)))
  const done = rows.filter((r) => r[4] === 2).length
  return (
    <div className="ui ui-jobs">
      <header className="ui-bar"><b>T-Job Sheet</b><span>{done} of {rows.length} done today</span></header>
      <table>
        <thead><tr><th>Job</th><th>Item</th><th>Team</th><th>Stage</th><th>Status</th></tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r[0]}>
              <td className="mono">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td>
              <td><button type="button" className={`ui-chip s${r[4]}`} onClick={() => cycle(i)} aria-label={`${r[0]} status ${STATES[r[4]]}, change`}>{STATES[r[4]]}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ── T-Workflow: one order, assigned and documented ── */
export function Workflow() {
  const [s, setS] = useState({ sup: false, jm: false, po: false, jo: false })
  const steps = [
    ['sup', 'Assign supplier', 'Supplier A · timber'],
    ['jm', 'Assign job manager', 'Job manager · Team B'],
    ['po', 'Generate PO', 'PO-2291-01'],
    ['jo', 'Generate JO', 'JO-2291-01'],
  ]
  const next = steps.find(([k]) => !s[k])
  return (
    <div className="ui ui-flow">
      <header className="ui-bar"><b>T-Workflow</b><span>ORD-2291 · 480 pcs</span></header>
      <ol className="ui-steps">
        {steps.map(([k, label, doc]) => (
          <li key={k} className={s[k] ? 'is-ok' : next?.[0] === k ? 'is-next' : ''}>
            <span className="ui-mark">{s[k] && <Icon name="check" size={14} />}</span>
            <span>{label}</span>
            <em className="mono">{s[k] ? doc : '—'}</em>
          </li>
        ))}
      </ol>
      <button type="button" className="ui-btn" onClick={() => setS(next ? { ...s, [next[0]]: true } : { sup: false, jm: false, po: false, jo: false })}>
        {next ? next[1] : 'Start a new order'}
      </button>
    </div>
  )
}

/* ── Sticker Maker: a real, scannable Code 39 label ── */
const C39 = {
  0: 'nnnwwnwnn', 1: 'wnnwnnnnw', 2: 'nnwwnnnnw', 3: 'wnwwnnnnn', 4: 'nnnwwnnnw', 5: 'wnnwwnnnn', 6: 'nnwwwnnnn', 7: 'nnnwnnwnw', 8: 'wnnwnnwnn', 9: 'nnwwnnwnn',
  D: 'nnnnwwnnw', R: 'wnnnnnwwn', V: 'nwwnnnnnw', '-': 'nwnnnnwnw', '*': 'nwnnwnwnn',
}
function Barcode({ value }) {
  let x = 0
  const bars = []
  for (const ch of `*${value}*`) {
    ;[...C39[ch]].forEach((w, i) => {
      const width = w === 'w' ? 3 : 1
      if (i % 2 === 0) bars.push(<rect key={bars.length} x={x} width={width} height="40" />)
      x += width
    })
    x += 1
  }
  return <svg className="ui-barcode" viewBox={`-10 0 ${x + 19} 40`} preserveAspectRatio="none" role="img" aria-label={`Barcode ${value}`}>{bars}</svg>
}
export function Label() {
  const [c, setC] = useState(12)
  const code = `DRV-2291-${String(c).padStart(3, '0')}`
  return (
    <div className="ui ui-label">
      <header className="ui-bar"><b>Sticker Maker</b><span>Carton label</span></header>
      <div className="ui-sticker">
        <div className="ui-sticker-top"><b>SHEESHAM SIDE TABLE</b><span>MADE IN INDIA</span></div>
        <dl>
          <div><dt>PO</dt><dd>2291</dd></div>
          <div><dt>Carton</dt><dd>{String(c).padStart(3, '0')} / 048</dd></div>
          <div><dt>G.W.</dt><dd>18.4 kg</dd></div>
          <div><dt>N.W.</dt><dd>16.0 kg</dd></div>
        </dl>
        <Barcode value={code} />
        <p className="mono">{code}</p>
      </div>
      <div className="ui-stepper">
        <button type="button" onClick={() => setC(Math.max(1, c - 1))} aria-label="Previous carton"><Icon name="minus" size={16} /></button>
        <span>Carton {c}</span>
        <button type="button" onClick={() => setC(Math.min(48, c + 1))} aria-label="Next carton"><Icon name="plus" size={16} /></button>
      </div>
    </div>
  )
}

/* ── T-Connect: sellers and buyers ── */
const LISTINGS = {
  sell: [['Sheesham logs', '120 CFT', 'Jodhpur', 3], ['Mango wood planks', '300 CFT', 'Bikaner', 5], ['Acacia sawn', '85 CFT', 'Jodhpur', 2]],
  buy: [['Wanted: Sheesham 2" planks', '200 CFT', 'Jodhpur', 4], ['Wanted: Mango wood logs', '150 CFT', 'Pali', 1]],
}
export function Connect() {
  const [tab, setTab] = useState('sell')
  const [sent, setSent] = useState({})
  return (
    <div className="ui ui-connect">
      <header className="ui-bar"><b>T-Connect</b><span>Timber market</span></header>
      <div className="ui-tabs" role="tablist">
        {[['sell', 'For sale'], ['buy', 'Wanted']].map(([k, l]) => (
          <button key={k} type="button" role="tab" aria-selected={tab === k} onClick={() => setTab(k)}>{l}</button>
        ))}
      </div>
      <ul className="ui-market">
        {LISTINGS[tab].map(([item, qty, city, offers]) => {
          const k = tab + item
          return (
            <li key={k}>
              <div><b>{item}</b><span>{qty} · {city}</span></div>
              <button type="button" className={`ui-chip ${sent[k] ? 's2' : 's0'}`} onClick={() => setSent({ ...sent, [k]: !sent[k] })}>
                {sent[k] ? 'Enquiry sent' : `${offers} offers · Enquire`}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/* ── Draveta PMS: check a guest out and the clean appears on its own ── */
const DEPARTURES = [['204', 'Mehta · 2 nights', true], ['311', 'Khan · 1 night', false], ['108', 'Rao · 3 nights', true]]
export function PMS() {
  const [out, setOut] = useState([])
  const cleans = []
  const load = { 'HK-1': 2, 'HK-2': 1 }
  for (const room of out) {
    const who = Object.keys(load).sort((a, b) => load[a] - load[b])[0]
    load[who] += 2
    cleans.push([room, who, DEPARTURES.find((d) => d[0] === room)[2]])
  }
  return (
    <div className="ui ui-pms">
      <header className="ui-bar"><b>Draveta PMS</b><span>Today · Front desk</span></header>
      <p className="ui-sub">Departures</p>
      <ul className="ui-market">
        {DEPARTURES.map(([room, guest]) => (
          <li key={room}>
            <div><b>Room {room}</b><span>{guest}</span></div>
            {out.includes(room)
              ? <span className="ui-chip s2">Checked out</span>
              : <button type="button" className="ui-chip s1" onClick={() => setOut([...out, room])}>Check out</button>}
          </li>
        ))}
      </ul>
      <p className="ui-sub">Housekeeping board {cleans.length > 0 && <em>Nobody typed these</em>}</p>
      <ul className="ui-market ui-board" aria-live="polite">
        {cleans.length === 0 && <li className="ui-empty">No cleans yet. Check a guest out.</li>}
        {cleans.map(([room, who, urgent]) => (
          <li key={room} className="ui-new">
            <div><b>Clean · Room {room}</b><span>2 credits · {who}, lightest load</span></div>
            {urgent ? <span className="ui-flag">Arrival today</span> : <span className="ui-chip s0">Normal</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ── HConcierge: the guest's room page, opened from the QR on the desk ── */
const ASKS = [['Towels', 'Housekeeping', 10], ['Room service', 'Kitchen', 30], ['Wake-up call', 'Front desk', 5], ['Laundry pickup', 'Laundry', 20]]
export function Concierge() {
  const [reqs, setReqs] = useState([])
  useEffect(() => {
    const open = reqs.find((r) => !r.ok)
    if (!open) return
    const id = setTimeout(() => setReqs((rs) => rs.map((r) => (r.id === open.id ? { ...r, ok: true } : r))), 1400)
    return () => clearTimeout(id)
  }, [reqs])
  return (
    <div className="ui ui-phone ui-hc">
      <div className="ui-status"><span>21:08</span><span className="ui-notch" /><span>Wi-Fi</span></div>
      <header className="ui-bar"><b>Room 305</b><span>Guest page</span></header>
      <div className="ui-tabs" aria-hidden="true">
        {['Home', 'Dining', 'Services', 'Hotel'].map((t, i) => <span key={t} className={i === 0 ? 'is-on' : ''}>{t}</span>)}
      </div>
      <p className="ui-sub">Quick asks</p>
      <div className="ui-asks">
        {ASKS.map(([label, team, mins]) => (
          <button key={label} type="button" onClick={() => setReqs([{ label, team, mins, ok: false, id: Date.now() }, ...reqs].slice(0, 4))}>{label}</button>
        ))}
      </div>
      <p className="ui-sub">Your requests</p>
      <ul className="ui-list" aria-live="polite">
        {reqs.length === 0 && <li className="ui-empty">Tap a quick ask. It goes straight to the right team.</li>}
        {reqs.map((r) => (
          <li key={r.id} className={r.ok ? 'is-ok' : ''}>
            <span className="ui-mark">{r.ok && <Icon name="check" size={14} />}</span>
            <span><b>{r.team} · target {r.mins} min</b>{r.label} · {r.ok ? 'Accepted' : 'Sent'}</span>
          </li>
        ))}
      </ul>
      <button type="button" className="ui-btn">Message the front desk</button>
    </div>
  )
}

/* ── DueDo: reminders for one person or the whole family ── */
export function DueDo() {
  const [items, setItems] = useState([
    ['Electricity bill', '2 Oct', 'Mine', 'Push', false],
    ['Maa’s birthday', '5 Oct', 'Family', 'Push + email', false],
    ['Car insurance renewal', '18 Oct', 'Mine', 'Email', false],
  ])
  const [text, setText] = useState('')
  const add = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    setItems([[text.trim(), 'Tomorrow', 'Mine', 'Push', false], ...items])
    setText('')
  }
  return (
    <div className="ui ui-duedo">
      <header className="ui-bar"><b>DueDo</b><span>{items.filter((i) => !i[4]).length} coming up</span></header>
      <form className="ui-add" onSubmit={add}>
        <span className="ui-input"><input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a reminder" aria-label="New reminder" /></span>
        <button type="submit" className="ui-chip s2" aria-label="Add reminder"><Icon name="plus" size={14} /></button>
      </form>
      <ul className="ui-steps">
        {items.map(([t, when, list, via, done], i) => (
          <li key={t + i} className={done ? 'is-ok' : ''}>
            <button type="button" className="ui-mark" onClick={() => setItems(items.map((x, j) => (j === i ? [...x.slice(0, 4), !x[4]] : x)))} aria-label={`${done ? 'Undo' : 'Mark done'}: ${t}`}>{done && <Icon name="check" size={14} />}</button>
            <span className={done ? 'ui-done' : ''}>{t}<small>{list} · {via}</small></span>
            <em className="mono">{when}</em>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ── Oswal Handicrafts ERP: the costing engine. Change the size, the costing follows ── */
const money = (n) => `₹${n.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`
export function Costing() {
  const [d, setD] = useState({ l: '30', w: '18', t: '1.5' })
  const L = num(d.l), W = num(d.w), T = num(d.t)
  const lines = [
    ['Sheesham top', 'CFT', `${L}×${W}×${T} in ÷ 1728`, (L * W * T) / 1728, 2200, 'cft'],
    ['Iron frame', 'WEIGHT', '6 kg × (1 + 5% wastage)', 6 * 1.05, 95, 'kg'],
    ['Lacquer, both faces', 'SQFT', `${L}×${W} in ÷ 144 × 2`, ((L * W) / 144) * 2, 18, 'sqft'],
    ['Hardware kit', 'QTY', '1 set', 1, 60, 'set'],
  ]
  const total = lines.reduce((a, l) => a + l[3] * l[4], 0)
  const f = (k, label) => (
    <label className="ui-field">
      <span>{label}</span>
      <span className="ui-input"><input inputMode="decimal" value={d[k]} onChange={(e) => setD({ ...d, [k]: e.target.value.replace(/[^\d.]/g, '') })} aria-label={`${label} in inches`} /><em>in</em></span>
    </label>
  )
  return (
    <div className="ui ui-cost">
      <header className="ui-bar"><b>Oswal ERP</b><span>Costing sheet · Side table</span></header>
      <div className="ui-grid3">{f('l', 'Length')}{f('w', 'Width')}{f('t', 'Top')}</div>
      <table>
        <thead><tr><th>Line</th><th>Method</th><th>Measure</th><th>Cost</th></tr></thead>
        <tbody>
          {lines.map(([name, m, how, q, rate, unit]) => (
            <tr key={name}>
              <td>{name}<small className="mono">{how}</small></td>
              <td className="mono">{m}</td>
              <td className="mono">{fmt(q, 2)} {unit}<small>@ {money(rate)}</small></td>
              <td className="mono">{money(q * rate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <output className="ui-result" aria-live="polite"><span>Ex-factory cost</span><strong>{money(total)}</strong><em>per piece</em></output>
    </div>
  )
}

export const DEMOS = {
  't-cal': TCal, 'sticker-scanner': Scanner, 't-job-sheet': JobSheet, 't-workflow': Workflow, 'sticker-maker': Label, 't-connect': Connect,
  'draveta-pms': PMS, hconcierge: Concierge, duedo: DueDo,
}
