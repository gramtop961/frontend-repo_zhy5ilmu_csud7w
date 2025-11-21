import { useState } from 'react'

function LangFlag({ lang, onToggle }) {
  return (
    <button onClick={onToggle} className="absolute right-4 top-4 text-2xl" aria-label="toggle language">
      {lang === 'ru' ? '🇷🇺' : '🇺🇸'}
    </button>
  )
}

function FloatingBG() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-fuchsia-400/25 blur-3xl animate-pulse" />
      <div className="absolute top-10 -right-40 w-[700px] h-[700px] rounded-full bg-indigo-400/25 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-1/3 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-emerald-400/20 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
    </div>
  )
}

function BrandSticker() {
  return (
    <div className="inline-flex items-end gap-0.5 select-none">
      <span className="text-lg font-semibold tracking-[-0.02em] text-slate-900">Or</span>
      {Array.from({ length: 3 }).map((_, i) => (
        <span key={i} className="relative inline-block leading-none">
          <span className={`absolute -top-2 left-1/2 -translate-x-1/2 h-[0.35em] w-[0.35em] rounded-full bg-gradient-to-r from-fuchsia-500 via-emerald-400 to-indigo-500 animate-dot [animation-delay:${i*200}ms]`} />
          <span className="text-lg font-semibold tracking-[-0.02em] text-slate-900 leading-none">i</span>
        </span>
      ))}
      <span className="text-lg font-semibold tracking-[-0.02em] text-slate-900 leading-none">on</span>
    </div>
  )
}

function Input({ type = 'text', placeholder, value, onChange, right }) {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/40 bg-white/80 backdrop-blur px-4 py-3 pr-10 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
      />
      {right}
    </div>
  )
}

function AuthCard({ mode = 'signin' }) {
  const [lang, setLang] = useState('en')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [show, setShow] = useState(false)
  const [pwd2, setPwd2] = useState('')

  const isSignup = mode === 'signup'

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <FloatingBG />
      <LangFlag lang={lang} onToggle={() => setLang(lang==='ru'?'en':'ru')} />
      <div className="w-full max-w-md">
        <div className="rounded-3xl bg-white/70 backdrop-blur border border-white/50 shadow-2xl p-6 sm:p-8 text-center">
          <div className="mb-4">
            <BrandSticker />
          </div>
          <h1 className="text-2xl font-semibold">{lang==='ru'?'С возвращением!':'Welcome back'}</h1>
          <p className="mt-1 text-sm text-slate-600">{lang==='ru'?'Введите данные для входа':'Enter your credentials to sign in'}</p>

          <div className="mt-6 space-y-3 text-left">
            <Input placeholder={lang==='ru'?'Ваш email':'Enter your e‑mail'} value={email} onChange={setEmail} />
            <Input
              type={show? 'text':'password'}
              placeholder={lang==='ru'?'Ваш пароль':'Enter your password'}
              value={pwd}
              onChange={setPwd}
              right={(
                <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600">
                  {show ? '🙈' : '👁️'}
                </button>
              )}
            />
            {isSignup && (
              <Input
                type={show? 'text':'password'}
                placeholder={lang==='ru'?'Подтвердите пароль':'Confirm password'}
                value={pwd2}
                onChange={setPwd2}
              />
            )}
            {!isSignup && (
              <div className="text-right">
                <a href="#" className="text-sm text-fuchsia-600 hover:underline">{lang==='ru'?'Забыли пароль?':'Forgot password?'}</a>
              </div>
            )}
            <button className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-fuchsia-500 to-indigo-500 px-6 py-3 text-white font-semibold shadow hover:shadow-md transition">
              {isSignup ? (lang==='ru'?'Зарегистрироваться':'Sign up') : (lang==='ru'?'Войти':'Sign in')}
            </button>
            <p className="text-center text-sm text-slate-600">
              {isSignup ? (lang==='ru'?'Уже есть аккаунт?':'Already have an account?') : (lang==='ru'?'Нет аккаунта?':'Don\'t have an account?')}
              {' '}
              <a href={isSignup? '/signin':'/signup'} className="text-fuchsia-600 hover:underline">
                {isSignup ? (lang==='ru'?'Войти':'Sign in') : (lang==='ru'?'Зарегистрироваться':'Sign up')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SignIn() { return <AuthCard mode="signin" /> }
export function SignUp() { return <AuthCard mode="signup" /> }
