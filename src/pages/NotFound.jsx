import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="ph ph-404">
      <div className="ph-copy">
        <h1 className="ph-h1 ink-in">Nothing drawn here yet.</h1>
        <p className="ph-lede">This page doesn’t exist. If you were looking for something we haven’t built, tell us about it.</p>
        <div className="hero-cta">
          <Link className="btn btn-ultra" to="/">Back to the start</Link>
          <Link className="btn btn-line" to="/contact">Contact</Link>
        </div>
      </div>
    </section>
  )
}
