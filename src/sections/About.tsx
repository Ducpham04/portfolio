import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { about } from '../data/profile'
import { useLanguage } from '../i18n/useLanguage'

export function About() {
  const { t, l } = useLanguage()
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading id="about" eyebrow={t.about.eyebrow} heading={t.about.heading} />

      <div className="grid gap-14 md:grid-cols-12 md:gap-8">
        <div className="space-y-6 text-lg leading-relaxed text-pretty text-ink-soft md:col-[4/span_6]">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className={i === 0 ? 'text-ink first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-accent' : ''}>
                {l(p)}
              </p>
            </Reveal>
          ))}

          <Reveal>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-8">
              {about.stats.map((s) => (
                <div key={s.key}>
                  <dt className="sr-only">{t.about.stats[s.key]}</dt>
                  <dd>
                    <span className="display block text-4xl text-ink sm:text-5xl">{s.value}</span>
                    <span aria-hidden className="mt-2 block text-sm leading-snug">
                      {t.about.stats[s.key]}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <ol className="md:col-span-3">
          {about.timeline.map((item, i) => (
            <Reveal as="li" key={i} delay={i * 0.08} className="relative border-l border-line pb-10 pl-6 last:pb-0">
                <span aria-hidden className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full border-2 border-paper bg-accent" />
                <p className="font-mono text-xs text-ink-soft">{item.period}</p>
                <h3 className="mt-2 font-medium">{l(item.title)}</h3>
                <p className="text-sm text-accent-ink">{l(item.place)}</p>
                <p className="mt-2 text-sm text-ink-soft">{l(item.detail)}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
