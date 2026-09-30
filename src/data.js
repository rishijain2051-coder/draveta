export const PHONE = '+91 98290 11726'
export const TEL = 'tel:+919829011726'
export const wa = (text) => `https://wa.me/919829011726${text ? `?text=${encodeURIComponent(text)}` : ''}`
export const CITY = 'Jodhpur, Rajasthan'

// Listed in the order we built them.
export const PRODUCTS = [
  {
    slug: 't-cal',
    group: 'timber',
    name: 'T-Cal',
    stage: 'Estimate',
    line: 'Precision timber calculator for estimating, optimising and buying.',
    desc: 'Precision Timber Calculator for streamlined estimation, optimization, and procurement across the wood supply chain.',
    points: [
      ['Estimation', 'Work out volumes from sizes and piece counts precisely, without notebook maths.'],
      ['Optimisation', 'Compare sizes and quantities before you commit, so every lot is used well.'],
      ['Procurement', 'Buy timber with numbers everyone on the deal can check.'],
    ],
  },
  {
    slug: 't-job-sheet',
    group: 'timber',
    name: 'T-Job Sheet',
    stage: 'Produce',
    line: 'Digital job sheets for every task on the production floor.',
    desc: 'Digital job sheet management system for tracking production tasks, assigning work to teams, and monitoring completion status.',
    points: [
      ['Production tasks', 'Paper job sheets become digital ones you can search and never lose.'],
      ['Team assignment', 'Hand work to the right team and see who has what.'],
      ['Completion status', 'Know what is done, what is moving and what is stuck, as it happens.'],
    ],
  },
  {
    slug: 't-connect',
    group: 'timber',
    name: 'T-Connect',
    stage: 'Trade',
    line: 'The marketplace where timber sellers and buyers meet.',
    desc: 'A marketplace connecting timber sellers and buyers, enabling seamless trade, price discovery, and business networking across the industry.',
    points: [
      ['Trade', 'Sellers list timber, buyers find it, and the deal moves without the phone tag.'],
      ['Price discovery', 'See what the market is asking before you commit to a lot.'],
      ['Networking', 'Reach traders, depots and mills across the industry, not just the ones you already know.'],
    ],
  },
  {
    slug: 't-workflow',
    group: 'timber',
    name: 'T-Workflow',
    stage: 'Order',
    line: 'Order and production workflow, from order to PO and JO.',
    desc: 'End-to-end order management and production workflow system for tracking orders, assigning suppliers and job managers, and generating PO/JO documents.',
    points: [
      ['Order tracking', 'Every order and its status in one place, end to end.'],
      ['Assignment', 'Put the right supplier and job manager on each order.'],
      ['PO / JO documents', 'Generate purchase orders and job orders without retyping a thing.'],
    ],
  },
  {
    slug: 'sticker-maker',
    group: 'timber',
    name: 'Sticker Maker',
    stage: 'Label',
    line: 'Barcodes, container labels and shipping manifests, ready to print.',
    desc: 'Generate printable barcodes, custom container labels, and export detailed shipping manifests.',
    points: [
      ['Barcodes', 'Printable barcodes for every carton and piece.'],
      ['Container labels', 'Custom labels laid out the way your buyer wants them.'],
      ['Shipping manifests', 'Export a detailed manifest for every container.'],
    ],
  },
  {
    slug: 'sticker-scanner',
    group: 'timber',
    name: 'Sticker Scanner',
    stage: 'Load',
    line: 'Scan every carton on a phone and check the container against its manifest.',
    desc: 'Scan container barcodes on mobile devices to verify loaded warehouse inventory against expected manifests.',
    points: [
      ['Mobile scanning', 'Scan container barcodes with the phone already in your pocket.'],
      ['Manifest check', 'Verify loaded inventory against the expected manifest, carton by carton.'],
      ['Nothing left behind', 'See what is missing before the container is sealed, not after it sails.'],
    ],
  },
  {
    slug: 'duedo',
    group: 'everyday',
    name: 'DueDo',
    stage: 'Reminders',
    line: 'Bills, birthdays, renewals. Just missed it? Never again.',
    desc: 'A multi-user personal reminder app. Reminders are time-based and reach you on your lock screen by push notification, by email, or both, whichever each person chooses.',
    points: [
      ['On time, every time', 'Time-based reminders by push to the lock screen, by email, or both.'],
      ['For one, or the family', 'Keep a private list, or join a family with a shared list every member can see and assign.'],
      ['Installs like an app', 'A web app you can add to your home screen, with no app store in the way.'],
    ],
  },
  {
    slug: 'hconcierge',
    group: 'hotel',
    name: 'HConcierge',
    stage: 'Guest requests',
    line: 'Guests scan the QR in their room and ask for anything. No app, no login.',
    desc: 'In-room guest requests for hotels, built to take the phone out of the loop between a hotel room and reception. Room service, towels, a massage, a wake-up call, the wifi password, or a message to the front desk.',
    points: [
      ['Scan and ask', 'The QR card on the desk opens that room’s page. No app to install, nothing to type.'],
      ['Routed and timed', 'Every request goes to the team that actually does it, is timed against a target, and escalates if it is forgotten.'],
      ['Part of the PMS', 'HConcierge is the guest-facing module of Draveta PMS, so the bill a guest reads on their phone is the same one the front desk sees.'],
    ],
  },
  {
    slug: 'draveta-pms',
    group: 'hotel',
    name: 'Draveta PMS',
    stage: 'Run the hotel',
    line: 'End-to-end hotel management, from reservation to night audit.',
    desc: 'Reservations, front desk, housekeeping, maintenance, billing, F&B, stores, people, banquets and CRM, for a single property or a group. Built for India first, with GST worked out on what a room actually sold for.',
    points: [
      ['The software notices', 'A guest checks out and the clean is already on the housekeeping board, marked urgent if someone arrives into that room today. Nobody typed it.'],
      ['GST done properly', 'CGST and SGST or IGST by place of supply, HSN/SAC on every line, a gapless invoice series per financial year, and Form C for foreign nationals.'],
      ['One hotel or a group', 'Every automatic rule can be switched off per property, because a twelve-room guest house is not a two-hundred-room resort.'],
    ],
  },
]

export const product = (slug) => PRODUCTS.find((p) => p.slug === slug)

export const GROUPS = [
  { id: 'timber', name: 'Timber & export', note: 'Where we started: the trade around us, from the log to the container.' },
  { id: 'business', name: 'Business software', note: 'Whole systems for stores and factories.' },
  { id: 'everyday', name: 'Everyday', note: 'Software for the things every family forgets.' },
  { id: 'hotel', name: 'Hospitality', note: 'From one guest request to running the whole hotel.' },
]
export const inGroup = (id) => PRODUCTS.filter((p) => p.group === id)

// The homepage timeline: everything we built, in the order we built it.
// Items with a slug resolve to their product page; the rest are named without a page.
const TIMELINE_ITEMS = {
  timber: ['t-cal', 't-job-sheet', 't-connect', 't-workflow',
    { name: 'Sticker Maker & Scanner', to: '/products/sticker-maker', stage: 'Label & load', line: 'Barcodes and labels for every carton, then a phone scan that checks the container.' }],
  business: [
    { name: 'Hardware Maintain Software', stage: 'Stores', line: 'Hardware inventory, purchase history, material issue slips and store logs.' },
    { name: 'Full-fledged ERP', to: '/work/oswal-erp', go: 'Read the case', stage: 'ERP', line: 'Costing, operations and workforce, built for Oswal Handicrafts.' }],
  everyday: ['duedo'],
  hotel: ['hconcierge', { name: 'Cafe Management', stage: 'Cafe', line: 'A management application for cafes.' }, 'draveta-pms'],
}
const resolve = (i) => {
  if (typeof i !== 'string') return i
  const p = product(i)
  return { slug: p.slug, name: p.name, stage: p.stage, line: p.line, to: `/products/${p.slug}` }
}
export const TIMELINE = GROUPS.map((g) => ({ ...g, items: TIMELINE_ITEMS[g.id].map(resolve) }))

// Client websites. Only Vardhman Impex may be previewed.
export const WEBSITES = ['Vardhman Impex', 'Wearo', 'Mayur Exports', 'Gen-C Media']

export const SERVICES = [
  { name: 'Web apps', desc: 'Business software, dashboards, internal tools and ERPs, built around the way your business already runs.', art: 'web' },
  { name: 'Mobile apps', desc: 'Android and iOS apps for the shop floor, the field and your customers.', art: 'mobile' },
  { name: 'Websites', desc: 'Company and marketing websites that load fast on any phone, on any network.', art: 'site' },
  { name: 'Automation', desc: 'Barcode and label systems, integrations and workflows that take the retyping out of your day.', art: 'auto' },
]
