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
    lede: "T-Cal is a precision timber calculator built by Draveta Technologies in Jodhpur. It works out timber volume in CFT from sizes and piece counts, so traders, sawmills and furniture makers can estimate, compare and buy with numbers everyone on the deal can check.",
    faq: [["How is timber volume in CFT calculated?", "For sawn timber, cubic feet (CFT) is length in feet × width in inches × thickness in inches ÷ 144, multiplied by the number of pieces. For example, 40 pieces of 8 ft × 6 in × 2 in timber come to 26.67 CFT. T-Cal does this for every size and piece count."], ["Who is T-Cal for?", "T-Cal is built for timber traders, depots, sawmills and furniture makers who need to estimate timber volume before buying, compare sizes and quantities, and agree on numbers that everyone on the deal can check."]],
    points: [
      ['Estimation', 'Work out timber volume in CFT from sizes and piece counts, precisely and without notebook maths.'],
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
    lede: "T-Job Sheet is digital job sheet software for production floors, built by Draveta Technologies in Jodhpur. It records every production task, assigns the work to a team and shows its completion status as it happens, so paper job sheets stop getting lost.",
    faq: [["What is a job sheet in production?", "A job sheet records one production task: the job number, the item and quantity, the team doing it, the stage it has reached and its status. T-Job Sheet keeps job sheets digitally, so every task can be searched, assigned and tracked instead of living on paper."], ["Can T-Job Sheet assign work to teams?", "Yes. Each production task in T-Job Sheet is assigned to a team, and its completion status updates as the work moves, so a manager can see what is done, what is in progress and what is stuck."]],
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
    lede: "T-Connect is a timber marketplace built by Draveta Technologies in Jodhpur. It connects timber sellers and buyers in one place for trade, price discovery and business networking across the wood industry.",
    faq: [["How does T-Connect help with timber prices?", "T-Connect brings timber sellers and buyers onto one marketplace, so you can see what the market is asking before you commit to a lot. Price discovery sits alongside trade and business networking across the wood industry."], ["Who is T-Connect for?", "T-Connect is for anyone who buys or sells timber: traders, depots, sawmills and the manufacturers they supply."]],
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
    lede: "T-Workflow is order management and production workflow software built by Draveta Technologies in Jodhpur. It tracks every order end to end, assigns suppliers and job managers, and generates purchase order (PO) and job order (JO) documents.",
    faq: [["What is the difference between a PO and a JO?", "A purchase order (PO) goes to a supplier to buy materials. A job order (JO) is issued for work to be done, usually to a job manager or job worker. T-Workflow generates both from the order itself, so nothing is retyped."], ["What does T-Workflow track?", "T-Workflow tracks every order from start to finish, with the supplier and the job manager assigned to it and the PO and JO documents generated for it."]],
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
    lede: "Sticker Maker is label software for exporters, built by Draveta Technologies in Jodhpur. It generates printable barcodes and custom container labels, and exports a detailed shipping manifest for every container.",
    faq: [["What goes on an export carton label?", "An export carton label usually carries the item, the order or PO number, the carton number (for example 012 of 048), gross and net weight, a barcode, and the country of origin, such as Made in India. Sticker Maker lays out custom labels the way your buyer asks for them."], ["Can Sticker Maker export a shipping manifest?", "Yes. Sticker Maker exports a detailed shipping manifest for each container alongside the printable barcodes and labels, and Sticker Scanner can then check the loaded container against it."]],
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
    lede: "Sticker Scanner is a mobile barcode scanner for container loading, built by Draveta Technologies in Jodhpur. Staff scan each carton as it is loaded and the app checks it against the expected manifest, so nothing is missed before the container is sealed.",
    faq: [["How do you check a container load against the manifest?", "With Sticker Scanner, staff scan each carton’s barcode on a mobile phone as it is loaded. Every scan is checked against the expected manifest, so the app shows what has been loaded and what is still missing before the container is sealed."], ["Does Sticker Scanner need special hardware?", "No. Sticker Scanner runs on mobile devices, so the phone in your pocket does the scanning."]],
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
    lede: "DueDo is a reminder app for bills, birthdays and renewals, built by Draveta Technologies in Jodhpur. Reminders arrive on time by push notification, by email or both, for one person or a whole family sharing a list.",
    faq: [["How does DueDo send reminders?", "DueDo sends each reminder at its time by push notification to your phone’s lock screen, by email, or both. Each person chooses how they want to be reminded."], ["Can a family share reminders in DueDo?", "Yes. A family account adds a shared reminder list that every member can see, while each person keeps their own private list, email, PIN and devices. Family reminders can be assigned to a member."]],
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
    lede: "HConcierge is an in-room guest request system for hotels, built by Draveta Technologies in Jodhpur. Guests scan the QR card in their room to order room service, ask for towels, book a wake-up call or message the front desk, with no app to install.",
    faq: [["Do hotel guests need an app for HConcierge?", "No. Guests scan the QR card in their room and that room’s page opens in the phone’s browser. A short code from the front desk keeps it private to the current stay, and there is nothing to install."], ["What happens to a guest request in HConcierge?", "Each request goes to the team that actually handles it, such as housekeeping or the kitchen, is timed against a target, and is escalated if it is forgotten."], ["Does HConcierge work with a hotel PMS?", "HConcierge is the guest-facing module of Draveta PMS, so the itemised bill a guest reads on their phone is the same one the front desk sees."]],
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
    lede: "Draveta PMS is hotel management software built for India by Draveta Technologies in Jodhpur. It runs reservations, front desk, housekeeping, maintenance, billing with GST, F&B, stores, people, banquets and CRM for a single property or a group.",
    faq: [["How does Draveta PMS handle GST?", "Draveta PMS applies GST on what a room actually sold for, chooses CGST and SGST or IGST by place of supply, puts HSN/SAC on every line, keeps a gapless invoice series for each financial year, and handles Form C for foreign nationals."], ["Can Draveta PMS run more than one hotel?", "Yes. Draveta PMS runs a single property or a group, and each of its automatic rules can be switched off per property, because a twelve-room guest house does not need the same setup as a two-hundred-room resort."], ["What does “the software notices” mean in Draveta PMS?", "Routine follow-ups happen on their own. When a guest checks out, for example, the clean appears on the housekeeping board, marked urgent if someone arrives into that room today and assigned to whoever has the lightest load."]],
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
  { id: 'wip', name: 'Now building', note: 'Two big ones on the drawing board right now.' },
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
  wip: [
    { name: 'Tally Invoice Bridge', stage: 'In progress', line: 'Upload a bill, see exactly what it will post to Tally, debit by debit, and post it in one click. Runs on your own computer; no invoice leaves it.' },
    { name: 'Assurance Console', stage: 'In progress', line: 'GST, bank and party reconciliation that runs offline, and an export register that keeps every invoice’s papers together until the eBRC is done.' }],
}
const resolve = (i) => (typeof i === 'string' ? { ...product(i), to: `/products/${i}` } : i)
export const TIMELINE = GROUPS.map((g) => ({ ...g, items: TIMELINE_ITEMS[g.id].map(resolve) }))

// Client websites. Only Vardhman Impex may be previewed.
export const WEBSITES = ['Vardhman Impex', 'Wearo', 'Mayur Exports', 'Gen-C Media']

export const SERVICES = [
  { name: 'Web apps', desc: 'Custom business software, dashboards, internal tools and ERPs, built around the way your business already runs.', art: 'web' },
  { name: 'Mobile apps', desc: 'Android and iOS apps for the shop floor, the field and your customers.', art: 'mobile' },
  { name: 'Websites', desc: 'Company and marketing websites that load fast on any phone, on any network.', art: 'site' },
  { name: 'Automation', desc: 'Barcode and label systems, integrations and workflows that take the retyping out of your day.', art: 'auto' },
]

export const UPDATED = '2026-09-30'

export const HOME_FAQ = [
  ['What does Draveta Technologies do?', 'Draveta Technologies is a software company in Jodhpur, Rajasthan. It builds custom web apps, mobile apps, websites and automation from scratch, and makes its own products, including T-Cal, T-Job Sheet, T-Connect, T-Workflow, Sticker Maker and Scanner, DueDo, HConcierge and Draveta PMS.'],
  ['Where is Draveta Technologies based?', 'Draveta Technologies is based in Jodhpur, Rajasthan, India. It started with software for Jodhpur’s timber and furniture-export trade and now builds for businesses of every kind.'],
  ['Can Draveta build custom software for my business?', 'Yes. Draveta writes custom web apps, mobile apps, websites and automation from the first line, with no templates and no resold software. Past work includes a full ERP for Oswal Handicrafts and hardware store software. Call or WhatsApp +91 98290 11726 to describe what you need.'],
  ['How do I get a demo of a Draveta product?', 'Call or WhatsApp +91 98290 11726, or use the demo form on this site, which sends your details on WhatsApp. Demos are available for T-Cal, Draveta PMS, HConcierge and every other Draveta product.'],
  ['Does Draveta offer support?', 'Yes. Support runs 24/7, and the software engineers who build Draveta’s products are the people who support them.'],
]

export const ERP_FAQ = [
  ['How does the Oswal Handicrafts ERP calculate product cost?', 'Each cost line is a measure times a rate. The measure depends on the method: CFT is length × width × height in inches ÷ 1728 × quantity, SQFT is length × width in inches ÷ 144 × quantity, SQMT uses centimetres ÷ 10,000, RFT is length in inches ÷ 12 × quantity, WEIGHT adds wastage, and QTY is a count.'],
  ['What modules does the Oswal Handicrafts ERP have?', 'Three modules are live: Product Management (products, multi-method costing, images), Operations (proformas, orders, production board, accounting) and Manforce (workers, muster roll, wages, advances, statutory dues). Finished Product and Sales, for container planning, is planned.'],
  ['Can Draveta build an ERP like this for another company?', 'Yes. Draveta Technologies builds ERPs from scratch around the way a factory already works, from costing to production to wages. Call or WhatsApp +91 98290 11726 to talk it through.'],
]
