import { useEffect, useRef, useState, useMemo } from 'react'

const wordsRU = ['Маркетинг', 'Instagram', 'Facebook']
const wordsEN = ['Marketing', 'Instagram', 'Facebook']

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
    <section className="relative pt-20 sm:pt-24 pb-10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline centered */}
        <h1 className="mt-1 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight mx-auto max-w-3xl">
          <span className="bg-gradient-to-r from-fuchsia-500 via-emerald-400 to-indigo-500 bg-clip-text text-transparent">
            {words[index].slice(0, subIndex)}
          </span>
          <span className={`ml-1 inline-block w-[2px] h-[1em] align-[-0.1em] bg-slate-900 ${blink ? 'opacity-80' : 'opacity-0'}`} />
        </h1>

        {/* Subheadline with same accent color as title words */}
        <p className="mt-3 text-2xl sm:text-3xl font-medium">
          <span className="bg-gradient-to-r from-fuchsia-500 via-emerald-400 to-indigo-500 bg-clip-text text-transparent">
            {autopilot}
          </span>
        </p>

        {/* Primary CTA */}
        <div className="mt-7 flex gap-3 justify-center">
          <a href="#signup" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-fuchsia-500 to-indigo-500 text-white px-7 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all">
            {lang === 'en' ? 'Get started' : 'Начать'}
          </a>
        </div>

        {/* Centered full image below text (no border line), behind menus */}
        <div className="relative mt-10 z-10 flex justify-center">
          <img
            src="https://oriiion.ai/img/oriiion-chat-interface-square.png"
            alt="Oriiion UI"
            className="select-none rounded-3xl shadow-2xl pointer-events-none"
            style={{ width: 'min(860px, 92vw)' }}
          />
        </div>
      </div>
    </section>
  )
}
