import { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Flag({ code, className = '' }) {
  // Simple emoji flags for reliability
  const map = { en: '🇺🇸', ru: '🇷🇺' }
  return <span className={className} aria-hidden>{map[code] || '🏳️'}</span>
}

function BrandSmall() {
  // Clickable brand "Oriiion" (smaller, tight letters) with bouncing dots above each i
  return (
    <Link to="/" className="relative flex items-end gap-0.5 select-none group">
      <span className="text-lg font-semibold tracking-[-0.02em] text-slate-900 dark:text-white leading-none">Or</span>
      {Array.from({ length: 3 }).map((_, i) => (
        <span key={i} className="relative inline-block leading-none">
          <span className={`absolute -top-2 left-1/2 -translate-x-1/2 h-[0.35em] w-[0.35em] rounded-full bg-gradient-to-r from-fuchsia-500 via-emerald-400 to-indigo-500 animate-dot [animation-delay:${i*200}ms]`} />
          <span className="text-lg font-semibold tracking-[-0.02em] text-slate-900 dark:text-white leading-none">i</span>
        </span>
      ))}
      <span className="text-lg font-semibold tracking-[-0.02em] text-slate-900 dark:text-white leading-none">on</span>
    </Link>
  )
}

export default function Navbar({ lang, setLang, t }) {
  const isRU = useMemo(() => lang === 'ru', [lang])
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <div className="pt-6 sm:pt-8 relative z-30">
      <header className="mx-auto max-w-7xl px-3 sm:px-6">
        <div className="rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur border border-white/30 dark:border-white/10 shadow-xl shadow-fuchsia-500/5 px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandSmall />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className={`text-sm transition-colors ${pathname === '/' ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}>{isRU ? 'Главная' : 'Home'}</Link>
            <Link to="/how" className={`text-sm transition-colors ${pathname === '/how' ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}>{t.nav.how}</Link>
            <a href="/#why" className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{isRU ? 'Почему Oriion' : 'Why Oriion'}</a>
            <a href="/#pricing" className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{isRU ? 'Цены' : 'Pricing'}</a>
            <a href="/#support" className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{isRU ? 'Поддержка' : 'Support'}</a>
          </nav>

          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 dark:bg-white/5 border border-white/40 dark:border-white/10 px-3 py-1.5 text-sm text-slate-700 dark:text-white hover:bg-white/80 transition-colors"
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
              <ul className="absolute right-0 mt-2 w-44 rounded-xl overflow-hidden border border-white/40 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 backdrop-blur shadow-lg z-50" role="listbox">
                <li>
                  <button onClick={() => { setLang('en'); setOpen(false) }} className="w-full flex items-center gap-2 px-3 py-2 text-left text-sm hover:bg-slate-100/70 dark:hover:bg-white/10 text-slate-900 dark:text-white">
                    <Flag code="en" />
                    English
                  </button>
                </li>
                <li>
                  <button onClick={() => { setLang('ru'); setOpen(false) }} className="w-full flex items-center gap-2 px-3 py-2 text-left text-sm hover:bg-slate-100/70 dark:hover:bg-white/10 text-slate-900 dark:text-white">
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
