import { ExternalLink } from '../components/ExternalLink'
import { ArrowUpRight, Check } from '../components/icons'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { services } from '../data/services'
import { useLanguage } from '../i18n/useLanguage'

export function Services() {
  const { t, l } = useLanguage()
  return (
    <section id="services" aria-labelledby="services-title" className="bg-ink py-24 text-paper md:py-32 [--line:color-mix(in_oklab,var(--paper)_22%,var(--ink))] [--ink-soft:color-mix(in_oklab,var(--paper)_76%,var(--ink))]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="services" eyebrow={t.services.eyebrow} heading={t.services.heading} sub={t.services.sub} />

        <ul className="grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.id}
              delay={i * 0.08}
              className="group flex h-full flex-col rounded-3xl border border-line p-7 transition-colors duration-300 hover:border-accent sm:p-9"
            >
                <div className="flex items-center justify-between font-mono text-xs text-ink-soft">
                  <span>0{i + 1}</span>
                  <span>
                    {t.services.from} <span className="text-paper">{s.price}</span>
                  </span>
                </div>
                <h3 className="display mt-10 text-3xl sm:text-4xl">{l(s.title)}</h3>
                <p className="mt-4 text-pretty text-ink-soft">{l(s.description)}</p>
                <ul className="mt-6 mb-10 space-y-2.5 text-sm">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check width={16} height={16} className="mt-0.5 shrink-0 text-accent" />
                      {l(f)}
                    </li>
                  ))}
                </ul>
                <ExternalLink
                  href={s.fiverrUrl}
                  className="btn mt-auto self-start border border-line text-paper group-hover:border-accent group-hover:bg-accent group-hover:text-accent-contrast"
                >
                  {t.services.cta}
                  <ArrowUpRight width={16} height={16} />
                  <span className="sr-only">— {l(s.title)}</span>
                </ExternalLink>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
