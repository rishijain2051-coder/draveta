export const PHONE = '+91 98290 11726'
export const TEL = 'tel:+919829011726'
export const wa = (text) => `https://wa.me/919829011726${text ? `?text=${encodeURIComponent(text)}` : ''}`
export const CITY = 'Jodhpur, Rajasthan'

// Ordered along the chain: buying timber → loading the container.
export const PRODUCTS = [
  {
    slug: 't-connect',
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
    slug: 't-cal',
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
    slug: 't-workflow',
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
    slug: 't-job-sheet',
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
    slug: 'sticker-maker',
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
]

export const product = (slug) => PRODUCTS.find((p) => p.slug === slug)

export const SERVICES = [
  { name: 'Web apps', desc: 'Business software, dashboards, internal tools and ERPs, built around the way your business already runs.', art: 'web' },
  { name: 'Mobile apps', desc: 'Android and iOS apps for the shop floor, the field and your customers.', art: 'mobile' },
  { name: 'Websites', desc: 'Company and marketing websites that load fast on any phone, on any network.', art: 'site' },
  { name: 'Automation', desc: 'Barcode and label systems, integrations and workflows that take the retyping out of your day.', art: 'auto' },
]
