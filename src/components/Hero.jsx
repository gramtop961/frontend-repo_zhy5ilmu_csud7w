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
    <section className="relative overflow-hidden pt-20 sm:pt-24 pb-10">
      {/* Static preview image, smaller, floats on the right, lifts on hover */}
      <div className="absolute inset-y-0 right-0 flex items-center justify-center pointer-events-none pr-2 sm:pr-6">
        <img
          src="https://oriiion.ai/img/oriiion-chat-interface-square.png"
          alt="oriiion UI"
          className="transition-transform duration-500 ease-out drop-shadow-2xl pointer-events-auto rounded-3xl border border-white/20"
          style={{ width: 'min(520px, 44vw)' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-16px) scale(1.03)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Oval floating top panel (detached) */}
          <div className="inline-flex items-center gap-3 rounded-full border border-fuchsia-400/30 bg-white/80 backdrop-blur-md px-5 py-2.5 text-xs text-slate-800 shadow-[0_8px_30px_rgba(236,72,153,0.15)] translate-y-[-26px]">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-rose-400 to-emerald-400 animate-pulse" />
            <span className="sr-only">panel</span>
          </div>

          {/* Headline left-aligned */}
          <h1 className="mt-1 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight max-w-xl">
            <span className="bg-gradient-to-r from-fuchsia-500 via-emerald-400 to-indigo-500 bg-clip-text text-transparent">
              {words[index].slice(0, subIndex)}
            </span>
            <span className={`ml-1 inline-block w-[2px] h-[1em] align-[-0.1em] bg-slate-900 ${blink ? 'opacity-80' : 'opacity-0'}`} />
          </h1>
          <p className="mt-3 text-2xl sm:text-3xl font-medium text-slate-900">{autopilot}</p>

          {/* Primary CTA to signup */}
          <div className="mt-7 flex gap-3">
            <a href="#signup" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-fuchsia-500 to-indigo-500 text-white px-7 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all">
              {lang === 'en' ? 'Get started' : 'Начать'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
