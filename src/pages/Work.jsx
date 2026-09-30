import { Work as WorkSection, Faq, Close } from '../components/Sections.jsx'
import { ERP_FAQ } from '../data.js'

export default function Work() {
  return (
    <>
      <WorkSection page />
      <Faq items={ERP_FAQ} title="Questions about the ERP" />
      <Close title="Want an ERP built around your factory?" preset="A custom web app" />
    </>
  )
}
