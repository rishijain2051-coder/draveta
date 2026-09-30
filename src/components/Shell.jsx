import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { MARK, WORD, WORD_BOX } from '../brand.js'
import { PRODUCTS, GROUPS, inGroup, PHONE, TEL, wa, CITY } from '../data.js'
import Icon from './Icon.jsx'

export function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <svg className="logo-mark" viewBox="0 0 258 258" aria-hidden="true">{MARK.map((p, i) => <path key={i} transform={p.t} d={p.d} />)}</svg>
      <svg className="logo-word" viewBox={`-4 -4 ${WORD_BOX[0] + 8} ${WORD_BOX[1] + 8}`} aria-hidden="true">{WORD.map((p, i) => <path key={i} transform={p.t} d={p.d} />)}</svg>
    </span>
  )
}

const to = (hash) => ({ pathname: '/', hash })
const PAGE_GROUPS = GROUPS.filter((g) => inGroup(g.id).length)

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const loc = useLocation()

  useEffect(() => setOpen(false), [loc])
  useEffect(() => {
    const on = () => setScrolled(scrollY > 8)
    on()
    addEventListener('scroll', on, { passive: true })
    return () => removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open)
    if (!open) return
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    addEventListener('keydown', esc)
    return () => removeEventListener('keydown', esc)
  }, [open])

  return (
    <header className={`nav ${scrolled || open ? 'is-solid' : ''}`}>
      <Link to="/" className="nav-home" aria-label="Draveta Technologies, home"><Logo /></Link>
      <nav className="nav-links" aria-label="Main">
        <div className="nav-drop">
          <Link to={to('#products')}>Products</Link>
          <div className="nav-panel">
            {PAGE_GROUPS.map((g) => (
              <div key={g.id} className="nav-col">
                <p className="mono">{g.name}</p>
                {inGroup(g.id).map((p) => <Link key={p.slug} to={`/products/${p.slug}`}>{p.name}</Link>)}
              </div>
            ))}
          </div>
        </div>
        <NavLink to="/work/oswal-erp">Work</NavLink>
        <Link to={to('#services')}>Services</Link>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <a className="btn btn-ultra btn-sm nav-call" href={TEL}><Icon name="phone" size={18} /><span>{PHONE}</span></a>
      <button type="button" className="nav-menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
        <Icon name={open ? 'close' : 'menu'} size={24} /><span className="sr">{open ? 'Close menu' : 'Open menu'}</span>
      </button>

      <div id="menu" className="menu" hidden={!open}>
        <ul className="menu-main">
          <li><Link to={to('#products')}>Products</Link></li>
          <li><Link to="/work/oswal-erp">Work</Link></li>
          <li><Link to={to('#services')}>Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="menu-products">
          {PAGE_GROUPS.map((g) => (
            <div key={g.id}>
              <p className="mono">{g.name}</p>
              <ul>{inGroup(g.id).map((p) => <li key={p.slug}><Link to={`/products/${p.slug}`}>{p.name}</Link></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="menu-cta">
          <a className="btn btn-ultra" href={TEL}><Icon name="phone" /> Call now</a>
          <a className="btn btn-line" href={wa('Hi Draveta, I want to build something.')} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> WhatsApp</a>
        </div>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="foot-top">
        <Logo className="logo-lg" />
        <p className="foot-line">Software, built from the first line. In {CITY}.</p>
      </div>
      <div className="foot-cols">
        <div>
          <p className="foot-h mono">Products</p>
          <ul>{PRODUCTS.map((p) => <li key={p.slug}><Link to={`/products/${p.slug}`}>{p.name}</Link></li>)}</ul>
        </div>
        <div>
          <p className="foot-h mono">Company</p>
          <ul>
            <li><Link to="/work/oswal-erp">Oswal Handicrafts ERP</Link></li>
            <li><Link to={to('#services')}>Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="foot-h mono">Talk to us</p>
          <ul>
            <li><a href={TEL}>{PHONE}</a></li>
            <li><a href={wa()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li>{CITY}</li>
            <li>Support 24/7</li>
          </ul>
        </div>
      </div>
      <p className="foot-legal mono" suppressHydrationWarning>© {new Date().getFullYear()} Draveta Technologies. All rights reserved.</p>
    </footer>
  )
}
