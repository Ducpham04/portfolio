import { AnimatePresence, m } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/useLanguage'
import { useTheme } from '../theme/useTheme'
import { Close, Menu, Moon, Sun } from './icons'

const SECTIONS = ['about', 'skills', 'projects', 'services', 'contact'] as const

function LangToggle() {
  const { lang, toggleLang, t } = useLanguage()
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.a11y.toggleLang}
      className="relative flex h-10 items-center rounded-full border border-line p-1 font-mono text-xs transition-colors hover:border-ink"
    >
      {(['vi', 'en'] as const).map((code) => (
        <span
          key={code}
          aria-hidden
          className={`relative z-10 flex h-8 w-9 items-center justify-center rounded-full uppercase transition-colors ${
            lang === code ? 'text-paper' : 'text-ink-soft'
          }`}
        >
          {lang === code && (
            <m.span
              layoutId="lang-pill"
              className="absolute inset-0 -z-10 rounded-full bg-ink"
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            />
          )}
          {code}
        </span>
      ))}
    </button>
  )
}

function ThemeToggle() {
  const { toggleTheme } = useTheme()
  const { t } = useLanguage()
  // Both icons are rendered; CSS picks one, so the markup is theme-independent.
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t.a11y.toggleTheme}
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-ink"
    >
      <Moon width={18} height={18} className="transition-transform duration-500 group-hover:-rotate-12 dark:hidden" />
      <Sun width={18} height={18} className="hidden transition-transform duration-500 group-hover:rotate-45 dark:block" />
    </button>
  )
}

export function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-paper/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="display text-2xl italic" aria-label={profile.name.en}>
          {profile.shortName}
        </a>

        <nav aria-label={t.a11y.primaryNav} className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="link-underline py-1 text-ink-soft transition-colors hover:text-ink">
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          >
            {open ? <Close width={18} height={18} /> : <Menu width={18} height={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            id="mobile-menu"
            aria-label={t.a11y.primaryNav}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100dvh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-paper md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pt-8">
              {SECTIONS.map((id, i) => (
                <m.li
                  key={id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="display flex items-baseline gap-4 border-b border-line py-4 text-4xl"
                  >
                    <span className="font-mono text-xs text-ink-soft">0{i + 1}</span>
                    {t.nav[id]}
                  </a>
                </m.li>
              ))}
            </ul>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
