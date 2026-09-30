# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Vite + React + plain CSS, deployed on Vercel. Same family as the incumbent site (a React/Vite build on Vercel), no heavy framework needed for a marketing site. Multi-page via client-side routing.

## Users

- Furniture and handicraft export factories in Jodhpur / Rajasthan: owners and production managers who run orders, job work, and container loading.
- Timber traders, depots, and sawmills: people who estimate, buy, and sell timber (T-Cal, T-Connect).
- Indian manufacturers more broadly, with the wood/furniture industry as the home market.
- Investors and partners judging Draveta as a company.

Visitors are SME owners who buy on trust and by phone. Many arrive on a mid-range Android phone.

## Product Purpose

Draveta Technologies is a Jodhpur software company that builds technology from scratch: its own industrial products for the timber and furniture-export trade, and custom software for clients. The website exists to say, loudly, that Draveta can build anything in tech from scratch, to prove it with the nine products it already ships, the Oswal Handicrafts ERP and its client websites, and to get the visitor to call, WhatsApp, or ask for a demo.

## Positioning

A builder, not a reseller: Draveta writes its software from the first line. The proof is a live product suite that covers a whole industry chain, from estimating a log (T-Cal), through job sheets and orders (T-Job Sheet, T-Workflow), to labelling and scanning the export container (Sticker Maker, Sticker Scanner), plus a trade marketplace (T-Connect). The same team builds custom work for any business.

## Services

Custom work Draveta offers (confirmed; list nothing else):

- Custom web apps: business software, dashboards, internal tools, ERPs.
- Mobile apps: Android / iOS.
- Websites.
- Automation and integrations: barcode/label systems, integrations, workflows.

## Operating Context

The products cover the wood supply chain end to end:

- **T-Cal**: precision timber calculator for estimation, optimisation, and procurement across the wood supply chain.
- **T-Job Sheet**: digital job sheets; track production tasks, assign work to teams, monitor completion.
- **T-Workflow**: end-to-end order and production workflow; track orders, assign suppliers and job managers, generate PO/JO documents.
- **T-Connect**: marketplace connecting timber sellers and buyers; trade, price discovery, networking.
- **Sticker Maker**: printable barcodes, custom container labels, exportable shipping manifests.
- **Sticker Scanner**: scan container barcodes on mobile to verify loaded warehouse inventory against expected manifests.

All six timber products are marked "Live". They have no public URLs or screenshots; product cards and pages explain and route to contact.

Hotels (confirmed 2026-09-30; facts from the private repos `Draveta-Hotel-PMS` and `HConcierge`):

- **Draveta PMS**: end-to-end hotel management (reservations, front desk, housekeeping, maintenance, billing, F&B, stores, people, banquets, CRM) for one property or a group. Built for India first: GST on what a room actually sold for, CGST/SGST vs IGST by place of supply, HSN/SAC per line, gapless invoice series per financial year, Form C for foreign nationals. Core idea: "the software notices, so the staff do not have to" (e.g. check-out automatically puts the clean on the housekeeping board). A live demo exists; credentials are given on request, so the site does not link it.
- **HConcierge**: in-room guest requests. The guest scans the room's QR card (no app, no login) to order room service, ask for towels, book a massage or wake-up call, read the wifi password, or message the front desk. Requests are routed to the right team, timed against a target and escalated if forgotten. It is the PMS's guest-facing module.

Everyday (confirmed 2026-09-30; from the private repo `duedo`):

- **DueDo** (formerly PRO-SYS): multi-user personal reminders for bills, birthdays and renewals, delivered by push notification, email, or both. Single-person or family accounts, with shared, assignable family lists. Installable as a web app.

Build timeline (confirmed by the user 2026-09-30; the homepage shows products in this order and these groups):

1. Timber & export: T-Cal → T-Job Sheet → T-Connect → T-Workflow → Sticker Maker & Scanner
2. Business software: Hardware Maintain Software (hardware store ERP: inventory, purchase history, material issue slips, store logs; repo `HARDWARE`) → Full-fledged ERP (Oswal Handicrafts)
3. Everyday: DueDo
4. Hospitality: HConcierge → Cafe Management Application (no details known; name only) → Hotel PMS
5. Now building (in progress, "big projects", confirmed 2026-09-30): **TIB = Tally Invoice Bridge** (repo `tally-invoice-bridge`: upload a bill, review what it will post to Tally debit by debit, post in one click; OCR and AI run on the user's own computer, no invoice leaves it) and **AC = Assurance Console** (repo `assurance-console`: offline GST, bank and party reconciliation, plus an export register tracking shipping bill, BL, GSTR-1, payments and eBRC per invoice). Shown as "In progress"; no pages, no benchmark figures published.

Client websites (confirmed 2026-09-30): Vardhman Impex (vardhman-impex.com), Wearo, Mayur Exports, Gen-C Media. Mention the names only; **only vardhman-impex.com may be previewed** (screenshot at `public/work/vardhman-impex.jpg`).

Built for clients:

- **Oswal Handicrafts ERP**: a modular ERP for Oswal Handicrafts, a furniture and hardware exporter in Jodhpur (from the private repo `oswal`). Three modules are live: Product Management (products, multi-method costing with CFT/SQFT/SQMT/RFT/WEIGHT/QTY, images), Operations (proformas, orders, production board, accounting) and Manforce (workers, muster roll, wages, advances, statutory dues). Finished Product & Sales (container planning) is planned. Open: the client has not yet confirmed that Oswal can be named publicly.

## Capabilities and Constraints

- Site scope: home, one page per product (9, grouped as Timber & export, Hospitality and Everyday; the homepage timeline adds Business software and Now building, which have no pages), the Oswal Handicrafts ERP case page (/work/oswal-erp), about, contact.
- Primary action: call / WhatsApp +91 98290 11726. Secondary: "Book a demo" form that composes a WhatsApp message to that number (no backend). Opening a live app is not possible (no URLs).
- Location: Jodhpur, Rajasthan (city only, no street address).
- English only.
- Must stay fast and light on a mid-range Android phone on 4G.

## Brand Commitments

- Name: Draveta Technologies. Everything else, including the logo, is open to refinement.
- The site must read as a technology company that says out loud "we can build anything in tech, from scratch" (client's words). Rooted in industry, but tech-first, not a logistics or heritage brand.
- The hero must get an "OMG" reaction; nothing less.
- Existing logo: an interlocking four-loop knot mark with teardrop counters around a central ring; wordmark "DRAVETA" in heavy geometric caps over widely tracked "TECHNOLOGIES". Source files in `D:\DO NOT DELETE VERY IMPORTANT XXX\DESKTOP\Draveta\assets` (read-only; copy, never modify), including vector `print_transparent.svg`.
- Must not feel startup/SaaS-y (no purple gradients, glassy cards, "AI-powered" tone) and must not feel flashy or slow.

## Evidence on Hand

- Claims the client wants kept as-is: "15 years combined experience", "Enterprise grade", "24/7 support", "Military-standard security protocols and compliance frameworks", "Developed by software engineers with great industrial experience".
- People: Naman Dhariwal, Partner; Rishi Jain, Partner (names and roles only, no photos).
- Phone: +91 98290 11726 (the only number to publish).
- No client logos, testimonials, usage numbers, screenshots, or pricing. Do not invent any.

## Product Principles

1. Speak the shop floor's language: timber, job work, PO/JO, containers, manifests. Not software jargon.
2. Show how the products connect across the chain, not a grid of unrelated cards.
3. Make contacting a person effortless; a call or WhatsApp is the sale.
4. Earn trust through specifics and restraint, not hype.
5. Respect the visitor's phone and data: fast first, then impressive.
