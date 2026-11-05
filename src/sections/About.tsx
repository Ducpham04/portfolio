import { Reveal } from '../components/Reveal'
import { SignHeading } from '../components/SignHeading'
import { about } from '../data/profile'
import { useLanguage } from '../i18n/useLanguage'

export function About() {
  const { t, l } = useLanguage()
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-7xl px-4 py-20 sm:px-8 md:py-28">
      <SignHeading id="about" heading={t.about.heading} tone="blue" />

      <div className="grid gap-10 md:grid-cols-12 md:gap-10">
        <div className="space-y-6 text-lg leading-relaxed text-pretty md:col-span-7">
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? 'text-xl text-on-wall' : 'text-on-wall-soft'}>
              {l(p)}
            </p>
          ))}
        </div>

        <Reveal className="sign self-start bg-enamel px-6 py-7 text-ink sm:px-8 md:col-span-5">
          <h3 className="plaque text-lg text-red">{t.about.timeline}</h3>
          <ol className="mt-5 divide-y-2 divide-dotted divide-ink/25">
            {about.timeline.map((item, i) => (
              <li key={i} className="py-4 first:pt-0 last:pb-0">
                <p className="letter-flat text-2xl">{l(item.title)}</p>
                <p className="mt-1 text-sm font-medium text-blue">
                  {l(item.place)} · <span className="tabular-nums">{l(item.period)}</span>
                </p>
                <p className="mt-1.5 text-sm text-pretty text-enamel-soft">{l(item.detail)}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
