import { useMemo } from 'react'

export default function Navbar({ lang, setLang, t }) {
  const isRU = useMemo(() => lang === 'ru', [lang])

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 dark:bg-slate-900/70 border-b border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 shadow-lg shadow-indigo-500/30" />
          <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Oriion</span>
        </div>

        <nav className="flex items-center gap-6">
          <a href="#how" className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.how}</a>
          <a href="#benefits" className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.benefits}</a>
          <a href="#signup" className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.signup}</a>

          <div className="h-5 w-px bg-slate-300/60 dark:bg-white/20" />

          <div className="flex items-center text-sm rounded-xl p-1 bg-slate-200/70 dark:bg-white/10 border border-white/40 dark:border-white/10">
            <button
              onClick={() => setLang('ru')}
              className={`px-2.5 py-1 rounded-lg transition-all ${isRU ? 'bg-white dark:bg-white/20 text-slate-900 dark:text-white shadow' : 'text-slate-600 dark:text-slate-300'}`}
              aria-pressed={isRU}
            >
              RU
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-lg transition-all ${!isRU ? 'bg-white dark:bg-white/20 text-slate-900 dark:text-white shadow' : 'text-slate-600 dark:text-slate-300'}`}
              aria-pressed={!isRU}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
