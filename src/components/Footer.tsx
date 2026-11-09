import { profile } from '../data/profile'
import { useLanguage } from '../i18n/useLanguage'
import { ArrowUp } from './icons'

const YEAR = new Date().getFullYear()

export function Footer() {
  const { t, l } = useLanguage()
  return (
    <footer className="bg-ink text-enamel">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          <span className="plaque mr-3 text-yellow">{profile.shortName}</span>© <span suppressHydrationWarning>{YEAR}</span>{' '}
          {l(profile.name)} · {t.footer.built}
        </p>
        <a href="#top" className="inline-flex items-center gap-2 text-enamel transition-colors hover:text-yellow">
          {t.footer.top}
          <ArrowUp width={14} height={14} />
        </a>
      </div>
    </footer>
  )
}
