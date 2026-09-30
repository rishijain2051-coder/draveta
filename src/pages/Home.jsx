import Hero from '../components/Hero.jsx'
import { Services, Products, Work, Websites, TitleBlock, Faq, Close } from '../components/Sections.jsx'
import { HOME_FAQ } from '../data.js'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Work />
      <Websites />
      <TitleBlock />
      <Faq items={HOME_FAQ} />
      <Close />
    </>
  )
}
