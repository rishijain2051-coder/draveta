import { Link, useParams } from 'react-router-dom'
import { PRODUCTS, GROUPS, inGroup, product, TEL, PHONE, wa } from '../data.js'
import { DEMOS } from '../components/Demos.jsx'
import { Chain, Close, useDrawn } from '../components/Sections.jsx'
import Icon from '../components/Icon.jsx'
import NotFound from './NotFound.jsx'

export default function Product() {
  const { slug } = useParams()
  const p = product(slug)
  return p ? <ProductPage key={p.slug} p={p} /> : <NotFound />
}

function ProductPage({ p }) {
  const ref = useDrawn()
  const Demo = DEMOS[p.slug]
  const i = PRODUCTS.indexOf(p)
  const prev = PRODUCTS[i - 1], next = PRODUCTS[i + 1]
  const line = inGroup(p.group)
  return (
    <>
      <section className="ph">
        <div className="ph-copy">
          <h1 className="ph-h1 ink-in">{p.name}</h1>
          <p className="ph-lede">{p.desc}</p>
          <p className="ph-live mono"><span className="dot" /> Live · {GROUPS.find((g) => g.id === p.group).name} · <Link to={{ pathname: '/', hash: '#products' }}>All products</Link></p>
          <div className="hero-cta">
            <a className="btn btn-ultra" href={wa(`Hi Draveta, I'd like a demo of ${p.name}.`)} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> Book a {p.name} demo</a>
            <a className="btn btn-line" href={TEL}><Icon name="phone" /> {PHONE}</a>
          </div>
        </div>
        <figure className="ph-demo">
          <div className="ph-sheet"><Demo /></div>
          <figcaption className="mono">Illustrative demo with sample data. Try it.</figcaption>
        </figure>
      </section>

      <section className="sec sec-points" ref={ref} aria-labelledby="pts-h">
        <h2 id="pts-h" className="sr">What {p.name} does</h2>
        <ul className="pts">
          {p.points.map(([h, t], j) => (
            <li key={h} style={{ '--i': j }}>
              <svg className="draw" viewBox="0 0 40 40" aria-hidden="true"><path d="M4 20H36M20 4V36M8 8L32 32" pathLength="1" /></svg>
              <h3>{h}</h3>
              <p>{t}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="sec sec-fit" aria-labelledby="fit-h">
        {line.length > 1 && (
          <>
            <div className="sec-head">
              <h2 id="fit-h">Where {p.name} fits</h2>
              <p>{p.group === 'hotel' ? 'Draveta PMS runs the property and HConcierge is its guest-facing module. Take one, or run both on the same software.' : 'Each product covers one step of the chain. Use one, or run the whole line on the same software.'}</p>
            </div>
            <Chain items={line} current={p.slug} compact />
          </>
        )}
        {line.length === 1 && <h2 id="fit-h" className="sr">More from Draveta</h2>}
        <nav className="fit-nav" aria-label="Other products">
          {prev ? <Link to={`/products/${prev.slug}`}><span className="mono">Before · {prev.stage}</span><b>{prev.name}</b></Link> : <span />}
          {next && <Link to={`/products/${next.slug}`} className="is-next"><span className="mono">Next · {next.stage}</span><b>{next.name} <Icon name="arrow" /></b></Link>}
        </nav>
      </section>

      <Close preset={p.name} title={`Want ${p.name} running at your place?`} />
    </>
  )
}
