// Build step: render every route to static HTML with its own <head>, plus 404, sitemap, robots and llms.txt.
import fs from 'node:fs'
import { render, ROUTES, SITE, UPDATED, headTags, llmsTxt } from './dist-ssr/entry-server.js'

const tpl = fs.readFileSync('dist/index.html', 'utf8')
if (!tpl.includes('<!--head-->') || !tpl.includes('<div id="root"></div>')) throw new Error('index.html is missing its <!--head--> or root placeholder')

const font = fs.readdirSync('dist/assets').find((f) => /^mona-sans-latin-wdth-normal-.*\.woff2$/.test(f))
const preload = font ? `\n    <link rel="preload" href="/assets/${font}" as="font" type="font/woff2" crossorigin />` : ''

const page = (url) => tpl
  .replace('<!--head-->', headTags(url) + preload)
  .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`)

// cleanUrls on Vercel serves /products/t-cal from products/t-cal.html
for (const url of ROUTES) {
  const file = url === '/' ? 'dist/index.html' : `dist${url}.html`
  fs.mkdirSync(file.slice(0, file.lastIndexOf('/')), { recursive: true })
  fs.writeFileSync(file, page(url))
}
fs.writeFileSync('dist/404.html', page('/404'))

fs.writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map((u) => `  <url><loc>${SITE}${u === '/' ? '/' : u}</loc><lastmod>${UPDATED}</lastmod></url>`).join('\n')}
</urlset>
`)
fs.writeFileSync('dist/robots.txt', `# Search engines and AI answer engines are welcome, including GPTBot, OAI-SearchBot,\n# ChatGPT-User, PerplexityBot, ClaudeBot, Claude-SearchBot, Google-Extended, Applebot-Extended and Bingbot.\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)
fs.writeFileSync('dist/llms.txt', llmsTxt())

fs.rmSync('dist-ssr', { recursive: true, force: true })
console.log(`prerendered ${ROUTES.length} pages + 404, sitemap.xml, robots.txt, llms.txt`)
