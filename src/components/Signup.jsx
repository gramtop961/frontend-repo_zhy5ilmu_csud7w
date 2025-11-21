import { useState } from 'react'

export default function Signup({ t }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="signup" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/30 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white mb-3">{t.signup.title}</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">{t.signup.subtitle}</p>
            <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
              <li>• {t.signup.point1}</li>
              <li>• {t.signup.point2}</li>
              <li>• {t.signup.point3}</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 p-6 backdrop-blur">
            {submitted ? (
              <div className="text-emerald-600 dark:text-emerald-400 font-medium">
                {t.signup.success}
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-slate-700 dark:text-slate-300 mb-1">{t.signup.email}</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-300/70 dark:border-white/10 bg-white/70 dark:bg-slate-950/40 px-4 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-700 dark:text-slate-300 mb-1">{t.signup.password}</label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl border border-slate-300/70 dark:border-white/10 bg-white/70 dark:bg-slate-950/40 px-4 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 transition-shadow w-full">
                  {t.signup.cta}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
