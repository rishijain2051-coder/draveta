import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import { Nav, Footer } from './components/Shell.jsx'
import Loader from './components/Loader.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import Work from './pages/Work.jsx'
import { useHead } from './seo.js'

function ScrollTo() {
  const { pathname, hash } = useLocation()
  useHead(pathname)
  useEffect(() => {
    if (!hash) { scrollTo(0, 0); return }
    const el = document.getElementById(hash.slice(1))
    const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' }))
  }, [pathname, hash])
  return null
}

// Shared by the browser (main.jsx) and the build-time prerender (entry-server.jsx).
export default function App() {
  return (
    <>
      <ScrollTo />
      <Loader />
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:slug" element={<Product />} />
          <Route path="/work/oswal-erp" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
