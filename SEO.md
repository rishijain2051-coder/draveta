# SEO

Source of truth for titles, descriptions, keywords and structured data: `src/seo.js`. This file explains it.

## How pages reach search engines

`npm run build` renders every route to static HTML (`prerender.mjs`), so crawlers and link previews get real content, a unique `<title>`, meta description, canonical URL, Open Graph tags and JSON-LD without running JavaScript. React then hydrates that HTML in the browser.

The build also writes `sitemap.xml`, `robots.txt`, `llms.txt` (a plain summary for AI search) and a real `404.html`, served with a 404 status via `vercel.json` (`cleanUrls`, no catch-all rewrite).

**Domain:** canonicals and the sitemap use `SITE` in `src/seo.js` (currently `https://draveta.vercel.app`). If the site moves to `draveta.com`, change that one line and redeploy.

## Keyword map

One primary intent per page, so pages don't compete with each other.

| Page | Primary keyword | Supporting |
|---|---|---|
| `/` | software company in Jodhpur | custom software development Jodhpur, web / mobile app development Jodhpur, ERP software Jodhpur, website development Jodhpur |
| `/products/t-cal` | timber calculator | CFT calculator, timber CFT calculator, wood volume calculator, timber estimation software |
| `/products/t-job-sheet` | job sheet software | digital job sheet, production tracking software, furniture production software, job card software |
| `/products/t-connect` | timber marketplace | buy / sell timber online India, wood trading platform, timber price discovery |
| `/products/t-workflow` | order management software for manufacturers | production workflow software, purchase order software, job order software, PO JO software |
| `/products/sticker-maker` | barcode label software | carton label maker, export carton labels, shipping manifest software, container label generator |
| `/products/sticker-scanner` | container loading app | barcode scanner app for inventory, manifest verification, warehouse loading scanner |
| `/products/duedo` | bill reminder app | birthday reminder app, renewal reminder, family reminder app |
| `/products/hconcierge` | hotel guest request app | QR code room service, digital concierge for hotels, in-room ordering system |
| `/products/draveta-pms` | hotel PMS India | hotel management software, hotel software with GST, property management system for hotels |
| `/work/oswal-erp` | furniture export ERP | ERP for furniture manufacturers, handicraft ERP Jodhpur, furniture costing software |
| `/about` | Draveta Technologies | software company Jodhpur, partner names |
| `/contact` | contact Draveta Technologies | software demo |

Keywords are not verified against search-volume data (no keyword tool is connected). With Search Console running for a few weeks, check which queries actually bring impressions and adjust titles in `src/seo.js`.

`<meta name="keywords">` is emitted from the same map. Google ignores it; the titles, descriptions, headings and copy carry the keywords that count.

## Structured data

- Every page: `Organization` (name, logo, phone, Jodhpur address, partners).
- Home: `WebSite`.
- Product pages: `SoftwareApplication` + `BreadcrumbList`. No prices or ratings, because none are published.
- Oswal ERP case: `BreadcrumbList`.

Validate after deploy at <https://search.google.com/test/rich-results>.

## To do off-site (needs the owner's accounts)

1. **Google Search Console:** verify the domain, submit `/sitemap.xml`, watch Coverage and Performance.
2. **Bing Webmaster Tools:** import from Search Console.
3. **Google Business Profile** for "Draveta Technologies, Jodhpur": this drives "software company near me / in Jodhpur" map results. Use the same name and phone (+91 98290 11726) as the site.
4. **Links:** ask client sites (Vardhman Impex, Mayur Exports, Gen-C Media, Wearo) for a "Website by Draveta Technologies" footer credit linking here.
