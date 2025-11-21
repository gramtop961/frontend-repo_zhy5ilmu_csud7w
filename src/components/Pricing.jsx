import { useState } from 'react'
import { Check } from 'lucide-react'

export default function Pricing() {
  const [period, setPeriod] = useState('monthly') // 'monthly' | 'yearly'

  const price = period === 'monthly' ? 200 : 2000 // example yearly discount implicit
  const suffix = period === 'monthly' ? '/mo' : '/yr'

  return (
    <section id="pricing" className="scroll-mt-24 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-medium tracking-wide uppercase text-fuchsia-600">Pricing</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">Choose your plan</h2>
          <p className="mt-2 text-slate-600">Simple pricing that scales with you.</p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={`text-sm ${period==='monthly'?'text-slate-900':'text-slate-500'}`}>Monthly</span>
          <button
            aria-label="Toggle billing period"
            onClick={() => setPeriod(period === 'monthly' ? 'yearly' : 'monthly')}
            className="relative inline-flex h-7 w-14 rounded-full bg-slate-200 transition-colors"
          >
            <span className={`absolute top-0.5 ${period==='monthly'?'left-0.5':'left-7'} h-6 w-6 rounded-full bg-white shadow transition-all`} />
          </button>
          <span className={`text-sm ${period==='yearly'?'text-slate-900':'text-slate-500'}`}>Yearly</span>
        </div>

        <div className="mt-10 grid place-items-center">
          <div className="relative w-full max-w-2xl rounded-3xl border border-slate-200 bg-white/70 backdrop-blur shadow-xl p-6 sm:p-8">
            <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-3 py-1 text-xs font-semibold text-white shadow">{period==='monthly'?'MONTHLY':'YEARLY'}</span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">Oriion Pro</h3>
                <p className="text-slate-600">Everything you need to run social on autopilot</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold tracking-tight">${price}<span className="text-lg font-semibold text-slate-600">{suffix}</span></div>
              </div>
            </div>

            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-slate-700">
              {[ 
                'Personalized content generation',
                '12 automated posts',
                '12 post generation through chat',
                'Personal marketing assistant 24/7',
                'FB and IG support',
                'Upload own photos',
                'Chat support',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a href="/signin" className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-fuchsia-500 to-indigo-500 px-6 py-3 text-white font-semibold shadow hover:shadow-md transition">Get started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
