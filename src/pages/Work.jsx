import { Work as WorkSection, Close } from '../components/Sections.jsx'
import { useTitle } from '../title.js'

export default function Work() {
  useTitle('Oswal Handicrafts ERP · Draveta Technologies')
  return (
    <>
      <WorkSection page />
      <Close title="Want an ERP built around your factory?" preset="A custom web app" />
    </>
  )
}
