import { useEffect } from 'react'
import { PRODUCTS, product, SERVICES, TIMELINE, WEBSITES, HOME_FAQ, ERP_FAQ, UPDATED, PHONE, CITY } from './data.js'

export { UPDATED }

// Canonical origin. Switch to https://draveta.com (one line) once that domain serves this site.
export const SITE = 'https://draveta.vercel.app'
const BRAND = 'Draveta Technologies'
const ORG_ID = `${SITE}/#org`

// One primary search intent per page (the keyword map is in SEO.md), so pages do not compete with each other.
const PAGES = {
  '/': {
    title: 'Draveta Technologies · Custom Software Company in Jodhpur',
    description: 'Software company in Jodhpur building custom web apps, mobile apps, websites, ERPs and automation from scratch. Makers of T-Cal, Draveta PMS and HConcierge.',
  },
  '/about': {
    title: 'About Draveta Technologies · Software Company, Jodhpur',
    description: 'Draveta Technologies is a Jodhpur software company led by partners Naman Dhariwal and Rishi Jain. Timber, ERP, hotel and everyday software, built from scratch.',
  },
  '/contact': {
    title: 'Contact Draveta Technologies · Book a Software Demo',
    description: `Call or WhatsApp ${PHONE} to book a demo of T-Cal, Draveta PMS, HConcierge or any Draveta product, or to talk through custom software. ${CITY}.`,
  },
  '/work/oswal-erp': {
    title: 'Furniture Export ERP for Oswal Handicrafts · Draveta',
    description: 'A modular ERP built from scratch for Oswal Handicrafts, Jodhpur: product costing in CFT, SQFT and weight, proformas, orders, production board, wages and dues.',
  },
}

const PRODUCT_SEO = {
  't-cal': {
    title: 'T-Cal · Timber CFT Calculator for Estimation | Draveta',
    description: 'T-Cal is a precision timber calculator: work out timber volume in CFT from sizes and piece counts, compare options, and buy with numbers everyone can check.',
  },
  't-job-sheet': {
    title: 'T-Job Sheet · Digital Job Sheets for Production | Draveta',
    description: 'T-Job Sheet replaces paper job sheets on the production floor: track production tasks, assign work to teams and see completion status as it happens.',
  },
  't-connect': {
    title: 'T-Connect · Timber Marketplace for Sellers and Buyers',
    description: 'T-Connect is a timber marketplace connecting sellers and buyers: list timber, find stock, discover prices and build your network across the wood industry.',
  },
  't-workflow': {
    title: 'T-Workflow · Order Management and PO/JO Software | Draveta',
    description: 'T-Workflow tracks every order end to end, assigns suppliers and job managers, and generates purchase order (PO) and job order (JO) documents without retyping.',
  },
  'sticker-maker': {
    title: 'Sticker Maker · Barcode and Carton Label Software | Draveta',
    description: 'Sticker Maker generates printable barcodes, custom container and carton labels, and detailed shipping manifests for export orders.',
  },
  'sticker-scanner': {
    title: 'Sticker Scanner · Container Loading Barcode Scanner | Draveta',
    description: 'Sticker Scanner turns a phone into a barcode scanner that checks every carton loaded into a container against the expected manifest before it is sealed.',
  },
  duedo: {
    title: 'DueDo · Reminder App for Bills, Birthdays and Renewals',
    description: 'DueDo is a reminder app for bills, birthdays and renewals, by push notification or email, with private lists or shared family lists. Just missed it? Never again.',
    category: 'LifestyleApplication',
  },
  hconcierge: {
    title: 'HConcierge · QR In-Room Guest Requests for Hotels',
    description: 'HConcierge lets hotel guests scan the QR in their room to order room service, ask for towels or book a wake-up call. No app, no login. Routed, timed, escalated.',
  },
  'draveta-pms': {
    title: 'Draveta PMS · Hotel Management Software for India, with GST',
    description: 'Draveta PMS is end-to-end hotel management software for India: reservations, front desk, housekeeping, billing with GST, F&B, stores, banquets and CRM.',
  },
}

const NOT_FOUND = { title: `Page not found · ${BRAND}`, description: 'This page does not exist.', noindex: true }

export const ROUTES = ['/', ...PRODUCTS.map((p) => `/products/${p.slug}`), '/work/oswal-erp', '/about', '/contact']

// Paths never end in a slash because vercel.json redirects them (trailingSlash: false).
// Strip trailing slashes here if the site moves to a host that does not.
const productAt = (path) => path.startsWith('/products/') && product(path.slice('/products/'.length))

function pageMeta(path) {
  const p = productAt(path)
  const meta = PAGES[path] || (p && PRODUCT_SEO[p.slug]) || NOT_FOUND
  return { ...meta, url: meta === NOT_FOUND ? null : `${SITE}${path}` }
}

/* ── Structured data ── */
const org = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: BRAND,
  url: `${SITE}/`,
  logo: `${SITE}/brand/icononly_transparent.png`,
  telephone: '+91-98290-11726',
  address: { '@type': 'PostalAddress', addressLocality: 'Jodhpur', addressRegion: 'Rajasthan', addressCountry: 'IN' },
  areaServed: { '@type': 'Country', name: 'India' },
  member: [
    { '@type': 'Person', name: 'Naman Dhariwal', jobTitle: 'Partner' },
    { '@type': 'Person', name: 'Rishi Jain', jobTitle: 'Partner' },
  ],
  knowsAbout: ['Custom software development', ...SERVICES.map((s) => s.name), 'ERP software', 'Hotel management software', 'Timber industry software'],
  makesOffer: SERVICES.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: `Custom ${s.name.toLowerCase()} development`, description: s.desc, provider: { '@id': ORG_ID }, areaServed: { '@type': 'Country', name: 'India' } },
  })),
}

// FAQ schema is built from the same arrays the page renders, so the markup always matches the visible answers.
const faqPage = (items) => ({
  '@type': 'FAQPage',
  mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
})
const webPage = (m) => ({ '@type': 'WebPage', '@id': `${m.url}#page`, url: m.url, name: m.title, inLanguage: 'en-IN', dateModified: UPDATED, isPartOf: { '@id': `${SITE}/#site` }, publisher: { '@id': ORG_ID } })

const crumbs = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item })),
})

function jsonLd(path) {
  const m = pageMeta(path)
  const graph = [org, webPage(m)]
  if (path === '/') graph.push({ '@type': 'WebSite', '@id': `${SITE}/#site`, name: BRAND, url: `${SITE}/`, inLanguage: 'en-IN', publisher: { '@id': ORG_ID } }, faqPage(HOME_FAQ))
  const p = productAt(path)
  if (p) {
    graph.push({
      '@type': 'SoftwareApplication',
      name: p.name,
      description: p.lede,
      applicationCategory: PRODUCT_SEO[p.slug].category ?? 'BusinessApplication',
      operatingSystem: 'Web browser',
      url: m.url,
      dateModified: UPDATED,
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
    })
    graph.push(faqPage(p.faq), crumbs([['Home', `${SITE}/`], [p.name, m.url]]))
  }
  if (path === '/work/oswal-erp') graph.push(faqPage(ERP_FAQ), crumbs([['Home', `${SITE}/`], ['Oswal Handicrafts ERP', m.url]]))
  return { '@context': 'https://schema.org', '@graph': graph }
}

/* ── <head> for a route, used by the prerender step ── */
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
export function headTags(path) {
  const m = pageMeta(path)
  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    m.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${m.url}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    m.url ? `<meta property="og:url" content="${m.url}" />` : '',
    `<meta property="og:image" content="${SITE}/og.jpg" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:image:alt" content="${BRAND}: Anything. From scratch." />`,
    m.noindex ? '' : `<script type="application/ld+json">${JSON.stringify(jsonLd(path)).replace(/</g, '\\u003c')}</script>`,
  ].filter(Boolean).join('\n    ')
}

/* ── Keep the head right during client-side navigation ── */
function setTag(selector, create, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) { el = create(); document.head.appendChild(el) }
  el.setAttribute(attr, value)
}
export function useHead(path) {
  useEffect(() => {
    const m = pageMeta(path)
    document.title = m.title
    setTag('meta[name="description"]', () => Object.assign(document.createElement('meta'), { name: 'description' }), 'content', m.description)
    if (m.url) setTag('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', m.url)
  }, [path])
}

/* ── Plain-text summary for AI search (llms.txt) ── */
export function llmsTxt() {
  const lines = [
    `# ${BRAND}`,
    '',
    `> Software company in ${CITY}, India. Builds custom web apps, mobile apps, websites, ERPs and automation from scratch. Phone and WhatsApp: ${PHONE}.`,
    '',
    `Last updated: ${UPDATED}`,
    '',
    '## Key facts',
    `- Location: ${CITY}, India`,
    `- Contact: ${PHONE} (call or WhatsApp). Support runs 24/7.`,
    '- Partners: Naman Dhariwal, Rishi Jain',
    '- Experience: 15 years combined',
    `- Services: ${SERVICES.map((s) => `${s.name} (${s.desc.replace(/\.$/, '')})`).join('; ')}`,
    '',
    '## Built, in order',
    ...TIMELINE.flatMap((g) => [`### ${g.name}`, ...g.items.map((i) => `- ${i.to ? `[${i.name}](${SITE}${i.to})` : i.name}: ${i.line}`)]),
    '',
    '## Client websites',
    ...WEBSITES.map((w) => `- ${w}`),
    '',
    '## Questions people ask',
    ...[...HOME_FAQ, ...PRODUCTS.flatMap((p) => p.faq), ...ERP_FAQ].flatMap(([q, a]) => [`### ${q}`, a, '']),
    '## Pages',
    `- [About](${SITE}/about)`,
    `- [Contact](${SITE}/contact)`,
    `- [Oswal Handicrafts ERP case](${SITE}/work/oswal-erp)`,
  ]
  return lines.join('\n') + '\n'
}
