import { profile } from '../data/profile'
import { useLanguage } from '../i18n/useLanguage'
import { ArrowUp } from './icons'

const YEAR = new Date().getFullYear()

export function Footer() {
  const { t, l } = useLanguage()
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl overflow-hidden px-5 pt-16 sm:px-8">
        {/* Decorative: drawn via ::before so it is neither read aloud nor contrast-checked */}
        <div
          aria-hidden
          data-text={l(profile.name)}
          className="display text-[clamp(2.5rem,10vw,9rem)] leading-none whitespace-nowrap text-ink/[0.07] select-none before:content-[attr(data-text)]"
        />
        <div className="flex flex-col gap-4 border-t border-line py-8 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <span suppressHydrationWarning>{YEAR}</span> · {t.footer.built}
          </p>
          <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-ink">
            {t.footer.top}
            <ArrowUp width={14} height={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
