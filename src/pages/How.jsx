import { Check } from 'lucide-react'
import { useOutletContext } from 'react-router-dom'

function PageHeader({ title, subtitle }) {
  return (
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-300">
          {subtitle}
        </p>
      )}
    </div>
  )
}

function NumberCard({ n, title, desc, emoji }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-emerald-500 text-white flex items-center justify-center font-semibold">
          {n}
        </div>
        <div className="text-xl font-semibold text-white flex items-center gap-2">
          <span className="text-lg" aria-hidden>{emoji}</span>
          {title}
        </div>
      </div>
      <p className="text-slate-300 leading-relaxed">{desc}</p>
    </div>
  )
}

function WayCard({ emoji, title, points }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur p-6">
      <div className="flex items-center gap-2 text-white text-lg font-semibold mb-3">
        <span className="text-xl" aria-hidden>{emoji}</span>
        <span>{title}</span>
      </div>
      <ul className="space-y-2">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2 text-slate-300">
            <Check className="mt-[2px] h-5 w-5 text-emerald-400 shrink-0" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function How() {
  const { lang } = useOutletContext()
  const isEN = lang === 'en'

  const copy = {
    title: isEN ? 'How it works' : 'Как это работает',
    subtitle: isEN ? 'Get started with Oriion in minutes' : 'Запустите Oriion за несколько минут',
    steps: [
      {
        title: isEN ? 'connect your pages' : 'подключите ваши страницы',
        desc: isEN
          ? 'Link your Facebook and Instagram business pages to oriiion'
          : 'Подключите бизнес-страницы Facebook и Instagram к Oriion',
        emoji: '🔗',
      },
      {
        title: isEN ? 'tell us about your business' : 'расскажите о бизнесе',
        desc: isEN
          ? 'Share basic details so oriiion can create relevant content'
          : 'Добавьте основные данные, чтобы Oriion генерировал релевантный контент',
        emoji: '📝',
      },
      {
        title: isEN ? 'start getting content' : 'начните получать контент',
        desc: isEN
          ? 'receive weekly post suggestions or chat for instant content'
          : 'получайте еженедельные предложения постов или чат для мгновенного контента',
        emoji: '🚀',
      },
    ],
    over2: isEN ? 'three ways to use oriiion' : 'три способа использовать Oriion',
    subtitle2: isEN
      ? 'choose the method that works best for you'
      : 'выберите подходящий вам способ',
    ways: [
      {
        emoji: '📅',
        title: isEN ? 'weekly recommendations' : 'еженедельные рекомендации',
        points: isEN
          ? [
              'Get 3 ready-to-post content suggestions delivered weekly',
              'tailored to your business type',
              'seasonal and trending topics',
              'ready-to-publish format',
            ]
          : [
              '3 готовых идеи постов каждую неделю',
              'с учётом специфики вашего бизнеса',
              'сезонные и трендовые темы',
              'в формате, готовом к публикации',
            ],
      },
      {
        emoji: '🖼️',
        title: isEN ? 'upload & create' : 'загрузите фото и создайте',
        points: isEN
          ? [
              'upload any business photo and get instant captions',
              'understands your image',
              'combines with business data',
              'generates engaging captions',
            ]
          : [
              'загрузите фото — получите подписи мгновенно',
              'понимает изображение',
              'комбинирует с данными бизнеса',
              'генерирует вовлекающие подписи',
            ],
      },
      {
        emoji: '💬',
        title: isEN ? '24/7 chat assistant' : 'чат‑ассистент 24/7',
        points: isEN
          ? [
              'message oriiion anytime for instant content creation',
              'available on Messenger',
              'instant response time',
              'unlimited messaging',
            ]
          : [
              'пишите Oriion в любое время для мгновенного контента',
              'доступно в Messenger',
              'мгновенные ответы',
              'безлимитная переписка',
            ],
      },
    ],
  }

  const videoId = 'mO_1rmAdxJk'
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-24 w-[720px] h-[720px] rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="absolute top-1/2 -right-32 w-[720px] h-[720px] rounded-full bg-emerald-500/10 blur-3xl" />
        </div>
        <section className="relative pt-24 pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <PageHeader title={copy.title} subtitle={copy.subtitle} />

            {/* Video */}
            <div className="mt-10 w-full flex justify-center">
              <div className="w-full max-w-3xl rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] shadow-sm">
                <div className="relative w-full pb-[56.25%]">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={embedUrl}
                    title="Oriion demo video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* 3-step process */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {copy.steps.map((s, i) => (
                <NumberCard key={i} n={i + 1} title={s.title} desc={s.desc} emoji={s.emoji} />
              ))}
            </div>
          </div>
        </section>

        {/* Triple hands image above gradient, natural colors */}
        <section className="relative py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-center">
            <img
              src="https://oriiion.ai/img/oriiion-iphone-triple-hands.png"
              alt="Oriion iPhone in hands"
              className="w-full max-w-5xl select-none"
              style={{ mixBlendMode: 'normal', filter: 'saturate(1) contrast(1) brightness(1)' }}
            />
          </div>
        </section>

        {/* Three ways */}
        <section className="relative pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <p className="text-sm font-medium tracking-wide uppercase text-fuchsia-400/90">{copy.over2}</p>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-fuchsia-400 via-emerald-300 to-indigo-400 bg-clip-text text-transparent">
                {copy.subtitle2}
              </h2>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {copy.ways.map((w, i) => (
                <WayCard key={i} emoji={w.emoji} title={w.title} points={w.points} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
