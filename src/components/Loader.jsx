import { useEffect, useRef, useState } from 'react'
import { MARK, WORD, WORD_BOX } from '../brand.js'

// Pen plotter: the mark is plotted in one stroke on a blueprint sheet, a crosshair
// chases the pen, then the sheet splits along the mark's own 45° diagonal.
// Hero construction starts when the split begins (event 'drv:loaded').

function Sheet({ pen }) {
  return (
    <div className="ld-sheet">
      <svg className="ld-mark" viewBox="0 0 258 258" aria-hidden="true">
        {MARK.map((p, i) => <path key={i} ref={i === 0 ? pen : undefined} transform={p.t} d={p.d} pathLength="1" />)}
      </svg>
      <svg className="ld-word" viewBox={`-4 -4 ${WORD_BOX[0] + 8} ${WORD_BOX[1] + 8}`} aria-hidden="true">
        {WORD.map((p, i) => <path key={i} transform={p.t} d={p.d} />)}
      </svg>
    </div>
  )
}

export default function Loader() {
  const [phase, setPhase] = useState('plot') // plot → filled → split → gone
  const root = useRef(null)
  const pen = useRef(null)
  const pct = useRef(null)
  const go = useRef(null)

  useEffect(() => {
    document.getElementById('boot')?.remove()
    document.documentElement.classList.add('is-loading')
    const el = root.current
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const p = pen.current
    const len = p.getTotalLength()
    const timers = []
    let raf = 0, done = false

    const finish = () => {
      if (done) return
      done = true
      cancelAnimationFrame(raf)
      el.style.setProperty('--p', 1)
      setPhase('filled')
      timers.push(setTimeout(() => {
        setPhase('split')
        document.documentElement.classList.remove('is-loading')
        document.documentElement.dataset.loaded = '1'
        dispatchEvent(new Event('drv:loaded'))
      }, reduce ? 0 : 520))
      timers.push(setTimeout(() => setPhase('gone'), reduce ? 350 : 1500))
    }
    go.current = finish

    if (reduce) { finish(); return () => timers.forEach(clearTimeout) }

    const D = 1750, t0 = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / D)
      const e = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2
      const pt = p.getPointAtLength(e * len)
      const m = p.getScreenCTM()
      const x = m.a * pt.x + m.c * pt.y + m.e
      const y = m.b * pt.x + m.d * pt.y + m.f
      el.style.setProperty('--p', e.toFixed(4))
      el.style.setProperty('--x', `${x.toFixed(1)}px`)
      el.style.setProperty('--y', `${y.toFixed(1)}px`)
      pct.current.textContent = String(Math.round(e * 100)).padStart(3, '0')
      if (t < 1) raf = requestAnimationFrame(tick)
      else finish()
    }
    raf = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(raf); timers.forEach(clearTimeout) }
  }, [])

  useEffect(() => {
    if (phase !== 'plot') return
    const skip = () => go.current?.()
    addEventListener('keydown', skip)
    return () => removeEventListener('keydown', skip)
  }, [phase])

  if (phase === 'gone') return null
  return (
    <div ref={root} className={`loader is-${phase}`} onClick={() => go.current?.()} aria-hidden="true">
      <div className="ld-half ld-a"><Sheet pen={pen} /></div>
      <div className="ld-half ld-b"><Sheet /></div>
      <div className="ld-hud">
        <span className="ld-h" /><span className="ld-v" /><span className="ld-tip" />
        <div className="ld-rule"><span /></div>
        <p className="ld-pct"><span>Plotting the mark</span><b ref={pct}>000</b><span>%</span></p>
        <p className="ld-skip">Tap to skip</p>
      </div>
    </div>
  )
}
