import { m } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/skills'
import { useLanguage } from '../i18n/useLanguage'

export function Skills() {
  const { t, l } = useLanguage()
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-paper-2/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="skills" eyebrow={t.skills.eyebrow} heading={t.skills.heading} sub={t.skills.sub} />

        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={(i % 2) * 0.08} className="group bg-paper p-7 sm:p-10">
              <div className="flex items-baseline justify-between">
                <h3 className="display text-3xl sm:text-4xl">{l(group.title)}</h3>
                <span className="font-mono text-xs text-ink-soft">0{i + 1}</span>
              </div>
              <p className="mt-3 text-ink-soft">{l(group.blurb)}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <m.li
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + j * 0.04, duration: 0.4 }}
                    className="rounded-full border border-line px-3.5 py-1.5 text-sm transition-colors duration-200 hover:border-accent hover:text-accent-ink"
                  >
                    {item}
                  </m.li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
