import { useOutletContext } from 'react-router-dom'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Signup from '../components/Signup'

export default function Home() {
  const { t, lang } = useOutletContext()
  return (
    <>
      <Hero t={t} lang={lang} />
      <Benefits t={t} />
      <Signup t={t} />
    </>
  )
}
