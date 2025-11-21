import Spline from '@splinetool/react-spline'

export default function Hero({ t }) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white pointer-events-none dark:from-slate-950/80 dark:via-slate-950/60 dark:to-slate-950" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 px-3 py-1 text-xs text-slate-600 dark:text-slate-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {t.hero.badge}
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white leading-tight">
            {t.hero.title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-2xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#signup" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 transition-shadow">
              {t.hero.cta}
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white/80 border border-slate-200/60 dark:bg-slate-900/60 dark:border-white/10">
              {t.hero.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
