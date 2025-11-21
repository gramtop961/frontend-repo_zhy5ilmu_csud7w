export default function Benefits({ t }) {
  const items = t.benefits.items
  return (
    <section id="benefits" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white mb-10">{t.benefits.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((b, i) => (
            <div key={i} className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 p-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-400 mb-4" />
              <p className="text-slate-800 dark:text-slate-200 font-medium">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
