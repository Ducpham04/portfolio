import { m } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Download } from '../components/icons'
import { profile } from '../data/profile'
import { skillGroups } from '../data/skills'
import { useLocalTime } from '../hooks/useLocalTime'
import { useLanguage } from '../i18n/useLanguage'

const ease = [0.16, 1, 0.3, 1] as const

/** Each line slides up from behind a mask. Opacity stays 1 so LCP isn't delayed. */
function MaskLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <m.span
        className="block"
        initial={{ y: '40%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease, delay }}
      >
        {children}
      </m.span>
    </span>
  )
}

export function Hero() {
  const { t } = useLanguage()
  const time = useLocalTime()
  const tech = skillGroups.flatMap((g) => g.items)

  return (
    <section id="top" aria-labelledby="hero-title" className="relative flex min-h-[100svh] flex-col overflow-x-clip pt-24">
      {/* Decorative accent orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent opacity-[0.12] blur-3xl dark:opacity-[0.16]"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-ink-soft">
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.hero.available}
          </span>
          <span>
            {t.hero.based} · <time suppressHydrationWarning>{time}</time> GMT+7
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-12">
          <p className="eyebrow mb-4">{t.hero.greeting}</p>
          <h1 id="hero-title" className="display text-[clamp(3.6rem,14vw,11.5rem)] font-[420]">
            <MaskLine delay={0.05}>Phạm Văn</MaskLine>
            <MaskLine delay={0.15}>
              <span className="italic text-accent">Đức</span>
              <span className="ml-4 inline-block sm:ml-6 align-middle font-sans text-[clamp(0.85rem,1.6vw,1.1rem)] leading-tight font-medium tracking-normal not-italic">
                <span className="block">{t.hero.title}</span>
                <span className="block text-ink-soft">{t.hero.titleSub}</span>
              </span>
            </MaskLine>
          </h1>

          <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end">
            <m.p
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.35 }}
              className="max-w-xl text-lg text-pretty text-ink-soft sm:text-xl md:col-span-7"
            >
              {t.hero.intro}
            </m.p>
            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.45 }}
              className="flex flex-wrap gap-3 md:col-span-5 md:justify-end"
            >
              <a href="#contact" className="btn btn-primary group">
                {t.hero.ctaPrimary}
                <ArrowUpRight
                  width={18}
                  height={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a href={profile.cvUrl} download className="btn btn-ghost">
                <Download width={18} height={18} />
                {t.hero.ctaCv}
              </a>
            </m.div>
          </div>
        </div>

        <a
          href="#about"
          className="mb-6 hidden items-center gap-2 self-start font-mono text-xs text-ink-soft transition-colors hover:text-ink md:inline-flex"
        >
          <ArrowDown width={14} height={14} className="animate-bounce" />
          {t.hero.scroll}
        </a>
      </div>

      {/* Tech marquee */}
      <div className="marquee-wrap overflow-hidden border-y border-line bg-paper-2/60 py-4" aria-hidden>
        <div className="marquee flex w-max whitespace-nowrap">
          {[...tech, ...tech].map((item, i) => (
            <span key={i} className="flex items-center gap-10 pr-10 font-mono text-sm text-ink-soft">
              {item}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
