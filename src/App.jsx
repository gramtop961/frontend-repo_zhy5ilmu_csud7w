import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Signup from './components/Signup'
import Footer from './components/Footer'

const translations = {
  ru: {
    nav: { how: 'Как работает', benefits: 'Преимущества', signup: 'Регистрация' },
    hero: {
      badge: 'ИИ-ассистент для бизнеса',
      title: 'ИИ-чатбот, который отвечает за вас 24/7',
      subtitle: 'Обрабатывает запросы, консультирует, продаёт и принимает обращения без менеджера.',
      cta: 'Создать бота бесплатно',
      secondary: 'Узнать, как это работает',
    },
    how: {
      title: 'Как работает Oriion',
      steps: [
        'Пользователь подключает сайт или соцсети',
        'Загружает информацию о бизнесе',
        'Oriion обучается и начинает общаться с клиентами',
      ],
      watch: 'Смотреть видео о работе Oriion',
      video: 'Видео',
    },
    benefits: {
      title: 'Преимущества',
      items: ['Работает 24/7', 'Не ошибается', 'Улучшает конверсию', 'Обрабатывает вопросы мгновенно'],
    },
    signup: {
      title: 'Начните бесплатно',
      subtitle: 'Создайте аккаунт за минуту и попробуйте Oriion на своём бизнесе.',
      point1: 'Без привязки карты',
      point2: 'Отмена в любой момент',
      point3: 'Готовые интеграции',
      email: 'Email',
      password: 'Пароль',
      cta: 'Создать аккаунт',
      success: 'Спасибо! Мы отправили письмо для подтверждения регистрации.'
    },
    footer: { contacts: 'Контакты', privacy: 'Политика конфиденциальности' },
  },
  en: {
    nav: { how: 'How it works', benefits: 'Benefits', signup: 'Sign up' },
    hero: {
      badge: 'AI assistant for business',
      title: 'An AI chatbot that answers for you 24/7',
      subtitle: 'Handles requests, consults, sells and accepts inquiries without a manager.',
      cta: 'Create a bot for free',
      secondary: 'See how it works',
    },
    how: {
      title: 'How Oriion works',
      steps: [
        'Connect your website or social networks',
        'Upload your business knowledge',
        'Oriion learns and starts chatting with customers',
      ],
      watch: 'Watch how Oriion works',
      video: 'Video',
    },
    benefits: {
      title: 'Benefits',
      items: ['Works 24/7', "Doesn't make mistakes", 'Improves conversion', 'Answers instantly'],
    },
    signup: {
      title: 'Get started free',
      subtitle: 'Create an account in a minute and try Oriion on your business.',
      point1: 'No credit card required',
      point2: 'Cancel anytime',
      point3: 'Ready-made integrations',
      email: 'Email',
      password: 'Password',
      cta: 'Create account',
      success: 'Thanks! We sent a confirmation email.'
    },
    footer: { contacts: 'Contacts', privacy: 'Privacy Policy' },
  },
}

function App() {
  const [lang, setLang] = useState('ru')
  const t = useMemo(() => translations[lang], [lang])

  return (
    <div className="min-h-screen relative">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <HowItWorks t={t} />
        <Benefits t={t} />
        <Signup t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}

export default App
