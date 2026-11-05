import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useLanguage } from './i18n/useLanguage'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Services } from './sections/Services'
import { Skills } from './sections/Skills'

export default function App() {
  const { t } = useLanguage()
  return (
    <div className="grain">
      <a
        href="#main"
        className="fixed top-3 left-3 z-[100] -translate-y-20 rounded-full bg-ink px-4 py-2 text-sm text-paper transition-transform focus:translate-y-0"
      >
        {t.a11y.skip}
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
