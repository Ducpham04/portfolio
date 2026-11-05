import { ExternalLink } from '../components/ExternalLink'
import { ArrowUpRight, Check } from '../components/icons'
import { Reveal } from '../components/Reveal'
import { services } from '../data/services'
import { useLanguage } from '../i18n/useLanguage'

/** A shop's price board: service, dotted leader, starting price, and the order button on each line. */
export function Services() {
  const { t, l } = useLanguage()
  return (
    <section id="services" aria-labelledby="services-title" className="mx-auto max-w-7xl px-3 py-12 sm:px-6 md:py-16">
      <Reveal className="sign bg-yellow px-5 pt-9 pb-6 text-ink [--shade:var(--red)] sm:px-12 sm:pt-12">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <h2 id="services-title" className="letter text-[clamp(3rem,9vw,6.5rem)] text-red [--shade:var(--ink)]">
            {t.services.heading}
          </h2>
          <p className="max-w-sm pb-2 text-pretty">{t.services.sub}</p>
        </div>

        <ul className="mt-8 border-t-[3px] border-ink">
          {services.map((s) => (
            <li key={s.id} className="border-b-[3px] border-ink py-6 last:border-b-0">
              <div className="flex items-end gap-3">
                <h3 className="letter-flat text-[clamp(1.75rem,4.4vw,3.25rem)]">{l(s.title)}</h3>
                <span aria-hidden className="leader hidden sm:block" />
                <p className="ml-auto shrink-0 text-right">
                  <span className="block text-xs font-medium tracking-wide uppercase">{t.services.from}</span>
                  <span className="letter-flat text-[clamp(2rem,4.4vw,3.25rem)] text-red-deep tabular-nums">{s.price}</span>
                </p>
              </div>
              <div className="mt-3 grid gap-4 md:grid-cols-12 md:items-start md:gap-8">
                <p className="text-pretty md:col-span-6">{l(s.description)}</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium md:col-span-4">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-1.5">
                      <Check width={15} height={15} className="shrink-0 text-red-deep" />
                      {l(f)}
                    </li>
                  ))}
                </ul>
                <div className="md:col-span-2 md:text-right">
                  <ExternalLink href={s.fiverrUrl} className="btn btn-red !px-3.5 !py-2.5 !text-xs">
                    {t.services.cta}
                    <ArrowUpRight width={15} height={15} />
                    <span className="sr-only">: {l(s.title)}</span>
                  </ExternalLink>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
