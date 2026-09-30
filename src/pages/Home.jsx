import Hero from '../components/Hero.jsx'
import { Services, Products, Work, Websites, TitleBlock, Close } from '../components/Sections.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Work />
      <Websites />
      <TitleBlock />
      <Close />
    </>
  )
}
