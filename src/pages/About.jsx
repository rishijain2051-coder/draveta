import { TitleBlock, Close } from '../components/Sections.jsx'
import { Mark } from '../components/Knot.jsx'

export default function About() {
  return (
    <>
      <section className="ph ph-about">
        <div className="ph-copy">
          <h1 className="ph-h1 ink-in">We build from the first line.</h1>
          <p className="ph-lede">
            Draveta Technologies is a software company in Jodhpur. We started with the trade around us, timber and
            furniture export, and wrote six products for it, from the timber calculator to the container scanner.
            Then hardware store software and a full ERP for Oswal Handicrafts, a reminder app for families, and for
            hotels a guest concierge, a cafe management app and a full PMS. Along the way, websites for Vardhman Impex,
            Wearo, Mayur Exports and Gen-C Media. Right now we are building two big ones: Tally Invoice Bridge, which
            turns a bill into a checked Tally entry, and Assurance Console, for GST, bank and export reconciliation.
            The same team builds for businesses of every kind.
          </p>
        </div>
        <Mark className="about-mark" />
      </section>

      <section className="sec sec-people" aria-labelledby="people-h">
        <div className="sec-head">
          <h2 id="people-h">The people who pick up the phone.</h2>
          <p>When you call Draveta, you talk to the people who build it.</p>
        </div>
        <ul className="people">
          <li><b>Rishi Jain</b><span className="mono">Partner</span></li>
          <li><b>Naman Dhariwal</b><span className="mono">Partner</span></li>
        </ul>
      </section>

      <TitleBlock />
      <Close />
    </>
  )
}
