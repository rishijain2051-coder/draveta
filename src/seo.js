import { useEffect } from 'react'
import { PRODUCTS, product, SERVICES, TIMELINE, WEBSITES, PHONE, CITY } from './data.js'

// Canonical origin. Switch to https://draveta.com (one line) once that domain serves this site.
export const SITE = 'https://draveta.vercel.app'
const BRAND = 'Draveta Technologies'
const ORG_ID = `${SITE}/#org`

// Keyword map: one primary search intent per page, so pages do not compete with each other.
const PAGES = {
  '/': {
    title: 'Draveta Technologies · Custom Software Company in Jodhpur',
    description: 'Software company in Jodhpur building custom web apps, mobile apps, websites, ERPs and automation from scratch. Makers of T-Cal, Draveta PMS and HConcierge.',
    keywords: ['software company in Jodhpur', 'custom software development Jodhpur', 'web app development Jodhpur', 'mobile app development Jodhpur', 'ERP software Jodhpur', 'website development Jodhpur'],
  },
  '/about': {
    title: 'About Draveta Technologies · Software Company, Jodhpur',
    description: 'Draveta Technologies is a Jodhpur software company led by partners Naman Dhariwal and Rishi Jain. Timber, ERP, hotel and everyday software, built from scratch.',
    keywords: ['Draveta Technologies', 'software company Jodhpur', 'Naman Dhariwal', 'Rishi Jain', 'software developers Rajasthan'],
  },
  '/contact': {
    title: 'Contact Draveta Technologies · Book a Software Demo',
    description: `Call or WhatsApp ${PHONE} to book a demo of T-Cal, Draveta PMS, HConcierge or any Draveta product, or to talk through custom software. ${CITY}.`,
    keywords: ['contact Draveta Technologies', 'software demo', 'software company Jodhpur contact'],
  },
  '/work/oswal-erp': {
    title: 'Furniture Export ERP for Oswal Handicrafts · Draveta',
    description: 'A modular ERP built from scratch for Oswal Handicrafts, Jodhpur: product costing in CFT, SQFT and weight, proformas, orders, production board, wages and dues.',
    keywords: ['furniture export ERP', 'ERP for furniture manufacturers', 'handicraft ERP Jodhpur', 'furniture costing software', 'CFT costing'],
  },
}

const PRODUCT_SEO = {
  't-cal': {
    title: 'T-Cal · Timber CFT Calculator for Estimation | Draveta',
    description: 'T-Cal is a precision timber calculator: work out timber volume in CFT from sizes and piece counts, compare options, and buy with numbers everyone can check.',
    keywords: ['timber calculator', 'CFT calculator', 'timber CFT calculator', 'wood volume calculator', 'timber estimation software'],
    category: 'BusinessApplication',
  },
  't-job-sheet': {
    title: 'T-Job Sheet · Digital Job Sheets for Production | Draveta',
    description: 'T-Job Sheet replaces paper job sheets on the production floor: track production tasks, assign work to teams and see completion status as it happens.',
    keywords: ['job sheet software', 'digital job sheet', 'production tracking software', 'furniture production software', 'job card software'],
    category: 'BusinessApplication',
  },
  't-connect': {
    title: 'T-Connect · Timber Marketplace for Sellers and Buyers',
    description: 'T-Connect is a timber marketplace connecting sellers and buyers: list timber, find stock, discover prices and build your network across the wood industry.',
    keywords: ['timber marketplace', 'buy timber online India', 'sell timber online', 'wood trading platform', 'timber price discovery'],
    category: 'BusinessApplication',
  },
  't-workflow': {
    title: 'T-Workflow · Order Management and PO/JO Software | Draveta',
    description: 'T-Workflow tracks every order end to end, assigns suppliers and job managers, and generates purchase order (PO) and job order (JO) documents without retyping.',
    keywords: ['order management software for manufacturers', 'production workflow software', 'purchase order software', 'job order software', 'PO JO software'],
    category: 'BusinessApplication',
  },
  'sticker-maker': {
    title: 'Sticker Maker · Barcode and Carton Label Software | Draveta',
    description: 'Sticker Maker generates printable barcodes, custom container and carton labels, and detailed shipping manifests for export orders.',
    keywords: ['barcode label software', 'carton label maker', 'export carton labels', 'shipping manifest software', 'container label generator'],
    category: 'BusinessApplication',
  },
  'sticker-scanner': {
    title: 'Sticker Scanner · Container Loading Barcode Scanner | Draveta',
    description: 'Sticker Scanner turns a phone into a barcode scanner that checks every carton loaded into a container against the expected manifest before it is sealed.',
    keywords: ['container loading app', 'barcode scanner app for inventory', 'manifest verification', 'warehouse loading scanner', 'carton scanning app'],
    category: 'BusinessApplication',
  },
  duedo: {
    title: 'DueDo · Reminder App for Bills, Birthdays and Renewals',
    description: 'DueDo is a reminder app for bills, birthdays and renewals, by push notification or email, with private lists or shared family lists. Just missed it? Never again.',
    keywords: ['bill reminder app', 'birthday reminder app', 'renewal reminder', 'family reminder app', 'due date reminder'],
    category: 'LifestyleApplication',
  },
  hconcierge: {
    title: 'HConcierge · QR In-Room Guest Requests for Hotels',
    description: 'HConcierge lets hotel guests scan the QR in their room to order room service, ask for towels or book a wake-up call. No app, no login. Routed, timed, escalated.',
    keywords: ['hotel guest request app', 'QR code room service', 'digital concierge for hotels', 'in-room ordering system', 'hotel housekeeping requests'],
    category: 'BusinessApplication',
  },
  'draveta-pms': {
    title: 'Draveta PMS · Hotel Management Software for India, with GST',
    description: 'Draveta PMS is end-to-end hotel management software for India: reservations, front desk, housekeeping, billing with GST, F&B, stores, banquets and CRM.',
    keywords: ['hotel PMS India', 'hotel management software', 'hotel software with GST', 'property management system for hotels', 'hotel billing software'],
    category: 'BusinessApplication',
  },
}

const NOT_FOUND = { title: `Page not found · ${BRAND}`, description: 'This page does not exist.', keywords: [], noindex: true }

export const ROUTES = ['/', ...PRODUCTS.map((p) => `/products/${p.slug}`), '/work/oswal-erp', '/about', '/contact']

const clean = (path) => (path.length > 1 ? path.replace(/\/+$/, '') : path)

export function pageMeta(rawPath) {
  const path = clean(rawPath)
  const slug = path.startsWith('/products/') && path.slice('/products/'.length)
  const meta = PAGES[path] || (slug && product(slug) && PRODUCT_SEO[slug]) || NOT_FOUND
  return { ...meta, url: meta === NOT_FOUND ? null : `${SITE}${path === '/' ? '/' : path}` }
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
}

const crumbs = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item })),
})

export function jsonLd(rawPath) {
  const path = clean(rawPath)
  const m = pageMeta(path)
  const graph = [org]
  if (path === '/') graph.push({ '@type': 'WebSite', '@id': `${SITE}/#site`, name: BRAND, url: `${SITE}/`, publisher: { '@id': ORG_ID } })
  const slug = path.startsWith('/products/') && path.slice('/products/'.length)
  if (slug && product(slug)) {
    const p = product(slug)
    graph.push({
      '@type': 'SoftwareApplication',
      name: p.name,
      description: p.desc,
      applicationCategory: PRODUCT_SEO[slug].category,
      operatingSystem: 'Web browser',
      url: m.url,
      publisher: { '@id': ORG_ID },
    })
    graph.push(crumbs([['Home', `${SITE}/`], [p.name, m.url]]))
  }
  if (path === '/work/oswal-erp') graph.push(crumbs([['Home', `${SITE}/`], ['Oswal Handicrafts ERP', m.url]]))
  return { '@context': 'https://schema.org', '@graph': graph }
}

/* ── <head> for a route, used by the prerender step ── */
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
export function headTags(rawPath) {
  const m = pageMeta(rawPath)
  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    m.keywords.length ? `<meta name="keywords" content="${esc(m.keywords.join(', '))}" />` : '',
    m.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${m.url}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    m.url ? `<meta property="og:url" content="${m.url}" />` : '',
    `<meta property="og:image" content="${SITE}/og.jpg" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:image:alt" content="${BRAND}: Anything. From scratch." />`,
    `<meta name="twitter:image" content="${SITE}/og.jpg" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    m.noindex ? '' : `<script type="application/ld+json">${JSON.stringify(jsonLd(rawPath)).replace(/</g, '\\u003c')}</script>`,
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
    '## Built, in order',
    ...TIMELINE.flatMap((g) => [`### ${g.name}`, ...g.items.map((i) => `- ${i.to ? `[${i.name}](${SITE}${i.to})` : i.name}: ${i.line}`)]),
    '',
    '## Client websites',
    ...WEBSITES.map((w) => `- ${w}`),
    '',
    '## Pages',
    `- [About](${SITE}/about)`,
    `- [Contact](${SITE}/contact)`,
  ]
  return lines.join('\n') + '\n'
}
