import { Reveal } from '../components/Reveal'
import { skillGroups } from '../data/skills'
import { useLanguage } from '../i18n/useLanguage'

/**
 * A "CHUYÊN:" board, the way a workshop sign lists its trades:
 * one painted row per group, the items run together with dots.
 */
export function Skills() {
  const { t, l } = useLanguage()
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-7xl px-3 py-12 sm:px-6 md:py-16">
      <Reveal className="sign bg-green px-5 pt-9 pb-8 text-enamel sm:px-12 sm:pt-12 sm:pb-10">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <h2 id="skills-title" className="letter text-[clamp(3rem,9vw,6.5rem)]">
            {t.skills.heading}:
          </h2>
          <p className="max-w-sm pb-2 text-pretty text-enamel">{t.skills.sub}</p>
        </div>

        <ul className="mt-8 border-t-2 border-enamel/30">
          {skillGroups.map((group) => (
            <li key={group.id} className="grid grid-cols-1 gap-2 border-b-2 border-enamel/30 py-5 md:grid-cols-12 md:items-baseline md:gap-8">
              <h3 className="plaque text-xl text-yellow md:col-span-3">{l(group.title)}</h3>
              <div className="min-w-0 md:col-span-9">
                <p className="letter-flat text-[clamp(1.6rem,3.4vw,2.4rem)] leading-tight">
                  {group.items.map((item, i) => (
                    <span key={item}>
                      <span className="whitespace-nowrap">
                        {item}
                        {i < group.items.length - 1 && (
                          <span aria-hidden className="ml-2 text-yellow">
                            ·
                          </span>
                        )}
                      </span>
                      {i < group.items.length - 1 && <span className="sr-only">,</span>}{' '}
                    </span>
                  ))}
                </p>
                <p className="mt-2 text-sm text-enamel">{l(group.blurb)}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
