import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App.jsx'

export { ROUTES, SITE, UPDATED, headTags, llmsTxt, pageMeta } from './seo.js'

export const render = (url) => renderToString(<StaticRouter location={url}><App /></StaticRouter>)
