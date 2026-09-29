import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import '@fontsource-variable/mona-sans/wdth.css'
import '@fontsource-variable/martian-mono'
import './styles.css'
import { Nav, Footer } from './components/Shell.jsx'
import Loader from './components/Loader.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollTo() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) { scrollTo(0, 0); return }
    const el = document.getElementById(hash.slice(1))
    const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' }))
  }, [pathname, hash])
  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollTo />
      <Loader />
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:slug" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  </StrictMode>,
)
