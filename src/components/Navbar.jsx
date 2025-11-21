import { useMemo, useState } from 'react'

function Flag({ code, className = '' }) {
  // Simple emoji flags for reliability
  const map = { en: '🇺🇸', ru: '🇷🇺' }
  return <span className={className} aria-hidden>{map[code] || '🏳️'}</span>
}

function Brand() {
  // "oriiion" with bouncing dots above each i like waves
  return (
    <div className="relative flex items-end gap-1 select-none">
      <span className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white lowercase">or</span>
      <span className="relative inline-block">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-fuchsia-500 animate-dot [animation-delay:0ms]" />
        <span className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white lowercase">i</span>
      </span>
      <span className="relative inline-block">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-emerald-500 animate-dot [animation-delay:200ms]" />
        <span className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white lowercase">i</span>
      </span>
      <span className="relative inline-block">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-indigo-500 animate-dot [animation-delay:400ms]" />
        <span className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white lowercase">i</span>
      </span>
      <span className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white lowercase">on</span>
    </div>
  )
}

export default function Navbar({ lang, setLang, t }) {
  const isRU = useMemo(() => lang === 'ru', [lang])
  const [open, setOpen] = useState(false)

  return (
    <div className="pt-6 sm:pt-8">
      <header className="mx-auto max-w-6xl px-3 sm:px-6">
        <div className="rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur border border-white/30 dark:border-white/10 shadow-xl shadow-fuchsia-500/5 px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Brand />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#how" className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.how}</a>
            <a href="#benefits" className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.benefits}</a>
            <a href="#signup" className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.signup}</a>
          </nav>

          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 dark:bg-white/10 border border-white/40 dark:border-white/10 px-3 py-1.5 text-sm text-slate-700 dark:text-white hover:bg-white/80 transition-colors"
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              <Flag code={isRU ? 'ru' : 'en'} />
              <span className="hidden sm:inline">{isRU ? 'Русский' : 'English'}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {open && (
              <ul className="absolute right-0 mt-2 w-40 rounded-xl overflow-hidden border border-white/40 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 backdrop-blur shadow-lg" role="listbox">
                <li>
                  <button onClick={() => { setLang('en'); setOpen(false) }} className="w-full flex items-center gap-2 px-3 py-2 text-left text-sm hover:bg-slate-100/70 dark:hover:bg-white/10">
                    <Flag code="en" />
                    English
                  </button>
                </li>
                <li>
                  <button onClick={() => { setLang('ru'); setOpen(false) }} className="w-full flex items-center gap-2 px-3 py-2 text-left text-sm hover:bg-slate-100/70 dark:hover:bg-white/10">
                    <Flag code="ru" />
                    Русский
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
    </div>
  )
}
