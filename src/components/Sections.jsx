import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS, SERVICES, PHONE, TEL, wa, CITY } from '../data.js'
import Icon from './Icon.jsx'

// Adds .is-drawn once the element enters the viewport; line art draws itself from there.
export function useDrawn() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!('IntersectionObserver' in window)) return el.classList.add('is-drawn')
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('is-drawn'); io.disconnect() }
    }, { rootMargin: '0px 0px -15% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

const ART = {
  web: 'M8 10h144v80H8zM8 24h144M16 17h2M22 17h2M28 17h2M8 24v66M40 24v66M50 34h36M50 44h92M50 54h92M50 64h60M50 80l18-10 16 6 22-14 20 8 16-10M16 34h16M16 42h16M16 50h16',
  mobile: 'M60 4h40a6 6 0 0 1 6 6v80a6 6 0 0 1-6 6H60a6 6 0 0 1-6-6V10a6 6 0 0 1 6-6zM72 10h16M62 22h36v24H62zM62 54h36M62 62h36M62 70h24M74 88h12',
  site: 'M10 6h140v88H10zM10 18h140M20 12h20M112 12h30M20 28h78M20 36h60M20 44h36v6H20zM20 60h38v26H20zM62 60h38v26H62zM104 60h38v26h-38z',
  auto: 'M8 34v32M12 34v32M18 34v32M21 34v32M27 34v32M31 34v32M36 34v32M44 50h22M60 44l6 6-6 6M72 30h40v40H72zM80 40h24M80 48h24M80 56h14M118 50h14M126 44l6 6-6 6M140 38l6 6 10-12M140 62l6 6 10-12',
}

export function Services() {
  const ref = useDrawn()
  return (
    <section id="services" className="sec sec-services" ref={ref} aria-labelledby="services-h">
      <div className="sec-head">
        <h2 id="services-h">If it runs on a screen, we build it.</h2>
        <p>Every project starts the way ours did: a blank sheet and a real problem. No templates, no resold software. We write it, we ship it, we support it.</p>
      </div>
      <ul className="svc">
        {SERVICES.map((s, i) => (
          <li key={s.name} style={{ '--i': i }}>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
            <svg className="svc-art draw" viewBox="0 0 160 100" aria-hidden="true"><path d={ART[s.art]} pathLength="1" /></svg>
          </li>
        ))}
      </ul>
      <div className="svc-foot">
        <p>Have something else in mind? That’s usually the interesting part.</p>
        <a className="btn btn-ink" href={wa('Hi Draveta, I have a project in mind.')} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> Describe it on WhatsApp</a>
      </div>
    </section>
  )
}

export function Chain({ current, compact = false }) {
  const ref = useDrawn()
  return (
    <ol className={`chain ${compact ? 'chain-compact' : ''}`} ref={ref}>
      {PRODUCTS.map((p, i) => (
        <li key={p.slug} className={`${i % 2 ? 'dn' : 'up'} ${current === p.slug ? 'is-here' : ''}`} style={{ '--i': i }}>
          <Link to={`/products/${p.slug}`} aria-current={current === p.slug ? 'page' : undefined}>
            <span className="chain-body">
              <b className="chain-name">{p.name}</b>
              {!compact && <span className="chain-line">{p.line}</span>}
              {!compact && <span className="chain-go">See it live <Icon name="arrow" size={16} /></span>}
            </span>
            <span className="chain-stage mono">{p.stage}</span>
          </Link>
        </li>
      ))}
    </ol>
  )
}

export function Products() {
  return (
    <section id="products" className="sec sec-chain" aria-labelledby="products-h">
      <div className="sec-head">
        <h2 id="products-h">Six products. One industry, end to end.</h2>
        <p>Before we built for anyone else, we built for the trade around us. From buying the log to loading the container, every step has a Draveta product, and all six are live.</p>
      </div>
      <Chain />
      <p className="chain-coda">Same team, same standard, for whatever you need built next.</p>
    </section>
  )
}

const SPEC = [
  ['Drawn by', 'Draveta Technologies', 'w2'],
  ['Location', CITY, ''],
  ['Experience', '15 years combined', 'big'],
  ['Support', '24/7', 'big'],
  ['Grade', 'Enterprise', 'big'],
  ['Engineering', 'Developed by software engineers with deep industrial experience', 'w2'],
  ['Security', 'Military-standard security protocols and compliance frameworks', ''],
  ['Partners', 'Naman Dhariwal · Rishi Jain', 'w2'],
  ['Sheet', '1 of 1', ''],
]
export function TitleBlock() {
  const ref = useDrawn()
  return (
    <section className="sec sec-spec" ref={ref} aria-labelledby="spec-h">
      <div className="sec-head">
        <h2 id="spec-h">Signed off by engineers who know the floor.</h2>
        <p>Every drawing carries a title block: who made it, where, and to what standard. Here is ours.</p>
      </div>
      <dl className="tblock">
        {SPEC.map(([k, v, c]) => (
          <div key={k} className={c}>
            <dt className="mono">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

const NEEDS = [...PRODUCTS.map((p) => p.name), 'A custom web app', 'A mobile app', 'A website', 'Automation or integration', 'Not sure yet']

export function DemoForm({ preset = '' }) {
  const [f, setF] = useState({ name: '', company: '', need: preset || 'Not sure yet', note: '' })
  const [err, setErr] = useState('')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    if (!f.name.trim()) return setErr('Add your name so we know who to call back.')
    setErr('')
    const text = [`Hi Draveta, I'd like a demo.`, `Name: ${f.name.trim()}`, f.company.trim() && `Company: ${f.company.trim()}`, `Interested in: ${f.need}`, f.note.trim() && `Details: ${f.note.trim()}`].filter(Boolean).join('\n')
    window.open(wa(text), '_blank', 'noopener')
  }
  return (
    <form className="form" onSubmit={submit} noValidate>
      <label>
        <span>Your name</span>
        <input value={f.name} onChange={set('name')} autoComplete="name" aria-invalid={!!err} aria-describedby={err ? 'form-err' : undefined} />
      </label>
      <label>
        <span>Company <em>optional</em></span>
        <input value={f.company} onChange={set('company')} autoComplete="organization" />
      </label>
      <label className="form-wide">
        <span>What do you need?</span>
        <select value={f.need} onChange={set('need')}>{NEEDS.map((n) => <option key={n}>{n}</option>)}</select>
      </label>
      <label className="form-wide">
        <span>Tell us a little <em>optional</em></span>
        <textarea rows="3" value={f.note} onChange={set('note')} placeholder="What should it do? Who will use it?" />
      </label>
      {err && <p id="form-err" className="form-err" role="alert">{err}</p>}
      <button className="btn btn-ultra form-wide" type="submit"><Icon name="whatsapp" /> Send on WhatsApp</button>
      <p className="form-note form-wide">Opens WhatsApp with your message ready to send to {PHONE}.</p>
    </form>
  )
}

export function Close({ preset, title = 'Tell us what to build.' }) {
  return (
    <section className="sec sec-close" aria-labelledby="close-h">
      <div className="close-copy">
        <h2 id="close-h">{title}</h2>
        <p>A call is the fastest way. Or send the details and we’ll set up a demo.</p>
        <a className="close-phone" href={TEL}>{PHONE}</a>
        <p className="close-meta mono"><span><Icon name="pin" size={16} /> {CITY}</span><span><Icon name="clock" size={16} /> Support 24/7</span></p>
      </div>
      <DemoForm preset={preset} />
    </section>
  )
}
