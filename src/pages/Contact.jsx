import { PHONE, TEL, wa, CITY } from '../data.js'
import { DemoForm } from '../components/Sections.jsx'
import Icon from '../components/Icon.jsx'
import { useTitle } from '../title.js'

export default function Contact() {
  useTitle('Contact · Draveta Technologies')
  return (
    <section className="ph ph-contact">
      <div className="ph-copy">
        <h1 className="ph-h1 ink-in">Let’s build it.</h1>
        <p className="ph-lede">Call or WhatsApp for a demo of any product, or to talk through something new. Support runs 24/7.</p>
        <a className="close-phone" href={TEL}>{PHONE}</a>
        <div className="hero-cta">
          <a className="btn btn-ultra" href={TEL}><Icon name="phone" /> Call now</a>
          <a className="btn btn-line" href={wa('Hi Draveta, I want to build something.')} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> WhatsApp</a>
        </div>
        <p className="close-meta mono"><span><Icon name="pin" size={16} /> {CITY}</span></p>
      </div>
      <div className="ph-sheet ph-form">
        <h2>Book a demo</h2>
        <DemoForm />
      </div>
    </section>
  )
}
