import { useEffect, useRef, useState } from 'react'
import Knot from './Knot.jsx'
import Icon from './Icon.jsx'
import { TCal, Scanner, JobSheet } from './Demos.jsx'
import { PHONE, TEL, wa } from '../data.js'

// A drafted frame: outline and dimension lines draw with --s, then the UI inside renders.
function Frame({ name, w, h, f0, r0, className, children }) {
  return (
    <div className={`frame ${className}`} style={{ '--w': `${w}px`, '--h': `${h}px`, '--f0': f0, '--r0': r0 }}>
      <svg className="frame-lines" viewBox={`-30 -30 ${w + 60} ${h + 60}`} aria-hidden="true">
        <rect x="0" y="0" width={w} height={h} pathLength="1" />
        <path className="frame-dim" d={`M0 -8V-22M${w} -8V-22M0 -16H${w}M-8 0H-22M-8 ${h}H-22M-16 0V${h}`} pathLength="1" />
      </svg>
      <span className="frame-tag"><b>{name}</b> {w} × {h}</span>
      <div className="frame-body">{children}</div>
    </div>
  )
}

export default function Hero() {
  const hero = useRef(null)
  const area = useRef(null)
  const cluster = useRef(null)
  const [live, setLive] = useState(false)

  useEffect(() => {
    const el = hero.current
    const set = (k, v) => el.style.setProperty(k, v)
    const small = matchMedia('(max-width: 819px)')

    const fit = () => {
      const a = area.current.getBoundingClientRect()
      const [W, H] = small.matches ? [470, 560] : [760, 800]
      set('--fit', Math.min(a.width / W, a.height / H, 1.15).toFixed(3))
    }
    fit()
    addEventListener('resize', fit)

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      set('--a', 1); set('--s', 1); setLive(true)
      return () => removeEventListener('resize', fit)
    }

    // Phase A: the mark is constructed and inked, starting as the loader's sheet splits.
    let rafA = 0
    const build = () => {
      const t0 = performance.now(), D = 2900
      rafA = requestAnimationFrame(function tick(now) {
        const t = Math.min(1, (now - t0) / D)
        set('--a', (1 - (1 - t) ** 2.4).toFixed(4))
        if (t < 1) rafA = requestAnimationFrame(tick)
      })
    }
    if (document.documentElement.dataset.loaded) build()
    else addEventListener('drv:loaded', build, { once: true })

    // Phase B: scrolling the pinned stage drafts, renders and switches on the products.
    let rafB = 0, wasLive = false
    const update = () => {
      rafB = 0
      const run = el.offsetHeight - innerHeight
      const s = run > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / run)) : 1
      set('--s', s.toFixed(4))
      const isLive = s > 0.8
      if (isLive !== wasLive) {
        wasLive = isLive
        setLive(isLive)
        cluster.current.inert = !isLive
      }
    }
    const onScroll = () => { if (!rafB) rafB = requestAnimationFrame(update) }
    cluster.current.inert = true
    update()
    addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(rafA); cancelAnimationFrame(rafB)
      removeEventListener('drv:loaded', build)
      removeEventListener('scroll', onScroll); removeEventListener('resize', fit)
    }
  }, [])

  return (
    <section className="hero" ref={hero} aria-labelledby="hero-title">
      <div className="hero-stage">
        <div className="hero-copy">
          <h1 id="hero-title" className="hero-h1"><span>Anything.</span> <span>From scratch.</span></h1>
          <p className="hero-sub">
            Draveta Technologies writes software from the first line: web apps, mobile apps, websites and automation.
            <span className="lg"> Our proof is six live products we built for Jodhpur’s timber and export trade.</span>
          </p>
          <div className="hero-cta">
            <a className="btn btn-ultra" href={TEL}><Icon name="phone" /> <span className="lg">Call {PHONE}</span><span className="sm">Call now</span></a>
            <a className="btn btn-line" href={wa('Hi Draveta, I want to build something.')} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> WhatsApp</a>
          </div>
        </div>

        <div className="hero-draft" ref={area}>
          <div className="knot-wrap"><Knot /></div>
          <div className="cluster" ref={cluster}>
            <Frame className="f-tcal" name="T-Cal" w={300} h={330} f0={0.1} r0={0.4}><TCal /></Frame>
            <Frame className="f-jobs" name="T-Job Sheet" w={440} h={250} f0={0.2} r0={0.52}><JobSheet /></Frame>
            <Frame className="f-phone" name="Sticker Scanner" w={250} h={540} f0={0.15} r0={0.46}><Scanner live={live} /></Frame>
          </div>
        </div>

        <div className="hero-hint" aria-hidden="true">
          <svg viewBox="0 0 12 64"><path d="M6 0V60M1 54l5 8 5-8" /></svg>
          <span>Scroll to build</span>
        </div>
        <p className="hero-note">Illustrative demos with sample data</p>
      </div>
    </section>
  )
}
