import Hero from '../components/Hero.jsx'
import { Services, Products, Work, TitleBlock, Close } from '../components/Sections.jsx'
import { useTitle } from '../title.js'

export default function Home() {
  useTitle('Draveta Technologies · Software, built from scratch')
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Work />
      <TitleBlock />
      <Close />
    </>
  )
}
