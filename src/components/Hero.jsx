import { useEffect, useRef, useState } from 'react'

const words = ['Маркетинг', 'Instagram', 'Facebook']

export default function Hero({ t }) {
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
        // pause when word is finished, then start deleting
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
  }, [index, subIndex, reverse])

  // caret blink
  useEffect(() => {
    const blinkInt = setInterval(() => setBlink((v) => !v), 500)
    return () => clearInterval(blinkInt)
  }, [])

  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      {/* Replace Spline with static preview image that lifts on hover */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <img
          src="https://oriiion.ai/img/oriiion-chat-interface-square.png"
          alt="Oriion UI"
          className="transition-transform duration-500 ease-out drop-shadow-2xl pointer-events-auto rounded-3xl border border-white/20"
          style={{ width: 'min(900px, 92vw)' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-18px) scale(1.03)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Oval functional panel */}
          <div className="inline-flex items-center gap-3 rounded-full border border-pink-300/40 bg-white/80 backdrop-blur-md px-4 py-2 text-xs text-slate-800 shadow-[0_8px_30px_rgba(236,72,153,0.15)]">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-rose-400 to-emerald-400 animate-pulse" />
            Панель управления
          </div>

          {/* Animated headline */}
          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-fuchsia-500 via-emerald-400 to-indigo-500 bg-clip-text text-transparent">
              {words[index].slice(0, subIndex)}
            </span>
            <span className={`ml-1 inline-block w-[2px] h-[1em] align-[-0.1em] bg-slate-900 ${blink ? 'opacity-80' : 'opacity-0'}`} />
          </h1>
          <p className="mt-2 text-2xl sm:text-3xl font-medium text-slate-900">
            на автопилоте
          </p>

          {/* Primary CTA to signup */}
          <div className="mt-7 flex gap-3">
            <a href="#signup" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-fuchsia-500 to-indigo-500 text-white px-7 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all">
              Начать
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
