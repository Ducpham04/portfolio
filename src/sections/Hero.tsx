import { m } from 'framer-motion'
import { ArrowUpRight, Download } from '../components/icons'
import { profile } from '../data/profile'
import { useLocalTime } from '../hooks/useLocalTime'
import { useLanguage } from '../i18n/useLanguage'

const ease = [0.16, 1, 0.3, 1] as const

/**
 * The shopfront: a red name board, a yellow "now taking" strip bolted under it,
 * and a white plaque carrying the contact line and the two working actions.
 */
export function Hero() {
  const { t } = useLanguage()
  const time = useLocalTime()

  return (
    <section id="top" aria-labelledby="hero-title" className="px-3 pt-20 pb-6 sm:px-6 md:pt-24 md:pb-8">
      <div className="mx-auto max-w-7xl">
        {/* Name board — visible on first paint; only a short settle on hydration */}
        <m.div
          initial={{ rotate: -1.2, y: -10 }}
          animate={{ rotate: 0, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 9, mass: 0.8 }}
          style={{ transformOrigin: '50% 0%' }}
          className="sign bg-red px-5 pt-10 pb-8 text-enamel sm:px-12 sm:pt-14 md:px-16"
        >
          <h1 id="hero-title" className="letter text-[clamp(4.25rem,17.5vw,12.5rem)] leading-[0.94]">
            Phạm Văn Đức
          </h1>
          <p className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-base font-medium text-enamel sm:text-lg">
            <span>{t.hero.role}</span>
            <span className="text-enamel">· {t.hero.based}</span>
          </p>
        </m.div>

        {/* "Now taking" strip */}
        <div className="sign -mt-[3px] flex flex-wrap items-baseline gap-x-5 gap-y-1 bg-yellow px-5 py-5 text-ink [--shade:var(--red)] sm:px-12 md:px-16">
          <span className="plaque text-lg sm:text-xl">{t.hero.taking}:</span>
          <span className="letter text-[clamp(2rem,6vw,4.25rem)]">{t.hero.takingList}</span>
        </div>

        {/* Contact plaque */}
        <div className="mt-6 grid gap-6 md:grid-cols-12 md:gap-8">
          <m.div
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="sign flex flex-col gap-6 bg-enamel px-5 py-7 text-ink sm:px-9 md:col-span-7"
          >
            <p className="text-lg leading-relaxed text-pretty">{t.hero.intro}</p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-red group">
                {t.hero.ctaPrimary}
                <ArrowUpRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href={profile.cvUrl} download className="btn btn-yellow">
                <Download width={18} height={18} />
                {t.hero.ctaCv}
              </a>
            </div>
          </m.div>

          <m.div
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="sign flex flex-col justify-between gap-6 bg-blue px-5 py-7 text-enamel sm:px-9 md:col-span-5"
          >
            <a href={`mailto:${profile.email}`} className="group block">
              <span className="plaque text-sm text-yellow">{t.hero.contactLabel}:</span>
              <span className="letter mt-2 block text-[clamp(1.6rem,4.2vw,2.6rem)] break-all normal-case group-hover:underline">
                {profile.email}
              </span>
            </a>
            <dl className="grid grid-cols-2 gap-4 border-t-2 border-enamel/25 pt-5 text-sm">
              <div>
                <dt className="text-enamel">{t.hero.available}</dt>
                <dd className="mt-1 flex items-center gap-2 font-medium">
                  <span aria-hidden className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow opacity-70" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-yellow" />
                  </span>
                  {t.hero.availableWhat}
                </dd>
              </div>
              <div>
                <dt className="text-enamel">{t.hero.localTime}</dt>
                <dd className="mt-1 font-medium">
                  <time suppressHydrationWarning>{time}</time> GMT+7
                </dd>
              </div>
            </dl>
          </m.div>
        </div>
      </div>
    </section>
  )
}
