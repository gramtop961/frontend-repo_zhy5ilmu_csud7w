import { useOutletContext } from 'react-router-dom'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Signup from '../components/Signup'
import Pricing from '../components/Pricing'

export default function Home() {
  const { t, lang } = useOutletContext()
  return (
    <>
      <Hero t={t} lang={lang} />
      <section id="why" className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-semibold mb-2">{lang==='ru'?'Почему Oriion':'Why Oriion'}</h2>
          <p className="text-slate-600">{lang==='ru'?'Одно место для генерации и публикации контента.':'One place to generate and publish social content.'}</p>
        </div>
      </section>
      <Benefits t={t} />
      <Pricing />
      <Signup t={t} />
      <section id="support" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-semibold mb-2">{lang==='ru'?'Поддержка':'Support'}</h2>
          <p className="text-slate-600">{lang==='ru'?'Мы всегда рядом: чат‑поддержка и база знаний.':'We are here to help: live chat and knowledge base.'}</p>
        </div>
      </section>
    </>
  )
}
