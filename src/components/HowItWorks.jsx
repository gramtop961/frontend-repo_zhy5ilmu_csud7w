export default function HowItWorks({ t }) {
  const steps = t.how.steps
  return (
    <section id="how" className="relative py-16 sm:py-24 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white mb-8">{t.how.title}</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 p-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 text-white flex items-center justify-center font-semibold mb-4">
                {i + 1}
              </div>
              <p className="text-slate-700 dark:text-slate-300">{s}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a href="#" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200/50 dark:border-indigo-900/50">
            {t.how.watch}
          </a>
          <p className="text-sm text-slate-600 dark:text-slate-400 break-all">
            {t.how.video}: https://www.youtube.com/watch?v=mO_1rmAdxJk
          </p>
        </div>
      </div>
    </section>
  )
}
