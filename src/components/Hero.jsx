import { useEffect, useRef, useState, useMemo } from 'react'

const wordsRU = ['Instagram', 'Facebook']
const wordsEN = ['Instagram', 'Facebook']

export default function Hero({ t, lang = 'ru' }) {
  const words = useMemo(() => (lang === 'en' ? wordsEN : wordsRU), [lang])
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)
  const [blink, setBlink] = useState(true)
  const intervalRef = useRef(null)

  // Typing effect for words
  useEffect(() => {
    const current = words[index]
    if (!reverse) {
      if (subIndex < current.length) {
        intervalRef.current = setTimeout(() => setSubIndex(subIndex + 1), 90)
      } else {
        intervalRef.current = setTimeout(() => setReverse(true), 1200)
      }
    } else {
      if (subIndex > 0) {
        intervalRef.current = setTimeout(() => setSubIndex(subIndex - 1), 50)
      } else {
        setReverse(false)
        setIndex((prev) => (prev + 1) % words.length)
      }
    }
    return () => clearTimeout(intervalRef.current)
  }, [index, subIndex, reverse, words])

  // caret blink
  useEffect(() => {
    const blinkInt = setInterval(() => setBlink((v) => !v), 500)
    return () => clearInterval(blinkInt)
  }, [])

  const autopilot = lang === 'en' ? 'on autopilot' : 'на автопилоте'

  return (
    <section className="relative pt-16 sm:pt-20 pb-10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left text, right small phones image */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-medium text-fuchsia-600">{lang==='en'?'Social media':'Социальные сети'}</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight max-w-xl">
              <span className="bg-gradient-to-r from-fuchsia-500 via-emerald-400 to-indigo-500 bg-clip-text text-transparent">
                {words[index].slice(0, subIndex)}
              </span>
              <span className={`ml-1 inline-block w-[2px] h-[1em] align-[-0.1em] bg-slate-900 ${blink ? 'opacity-80' : 'opacity-0'}`} />
            </h1>
            <p className="mt-3 text-lg text-slate-700 max-w-xl">
              {lang==='en'?'on autopilot':'на автопилоте'} — {lang==='en'?'create and publish content for':'создаём и публикуем контент для'} Instagram & Facebook
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-fuchsia-500 to-indigo-500 text-white px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all">
                {lang === 'en' ? 'Get started' : 'Начать'}
              </a>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <img
              src="https://oriiion.ai/img/oriiion-iphone-pair.png"
              alt="Oriiion on phones"
              className="select-none rounded-2xl shadow-xl pointer-events-none w-[220px] sm:w-[260px] md:w-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
