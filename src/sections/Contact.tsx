import { AnimatePresence, m } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { ExternalLink } from '../components/ExternalLink'
import { ArrowUpRight, Check, Copy, Fiverr, Github, Linkedin, Mail } from '../components/icons'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/useLanguage'

type Status = 'idle' | 'sending' | 'success' | 'error'

const socialIcon = { GitHub: Github, LinkedIn: Linkedin, Fiverr } as const

const fieldClass =
  'w-full rounded-2xl border border-line bg-card px-4 py-3.5 text-base text-ink placeholder:text-ink-soft/70 transition-colors focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-accent'

export function Contact() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<Status>('idle')
  const [copied, setCopied] = useState(false)
  const useFormspree = profile.formspreeId.length > 0

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (!useFormspree) {
      const subject = encodeURIComponent(`[Portfolio] ${data.get('name') ?? ''}`)
      const body = encodeURIComponent(`${data.get('message') ?? ''}\n\n— ${data.get('name') ?? ''} <${data.get('email') ?? ''}>`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked — the mailto link still works */
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading id="contact" eyebrow={t.contact.eyebrow} heading={t.contact.heading} sub={t.contact.sub} />

      <div className="grid gap-14 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-[4/span_5]">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                {t.contact.name}
              </label>
              <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                {t.contact.email}
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={t.contact.messagePlaceholder}
                className={`${fieldClass} resize-y`}
              />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" disabled={status === 'sending'} className="btn btn-primary group disabled:opacity-60">
                {status === 'sending' ? t.contact.sending : t.contact.send}
                <ArrowUpRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              {!useFormspree && <p className="text-sm text-ink-soft">{t.contact.mailtoNote}</p>}
            </div>
            <div aria-live="polite" className="min-h-6 text-sm">
              <AnimatePresence>
                {(status === 'success' || status === 'error') && (
                  <m.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={status === 'success' ? 'text-emerald-700 dark:text-emerald-400' : 'text-accent-ink'}
                  >
                    {status === 'success' ? t.contact.success : t.contact.error}
                  </m.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-4">
          <div className="flex flex-col gap-8">
            <div>
              <p className="eyebrow mb-3">Email</p>
              <div className="flex flex-wrap items-center gap-3">
                <a href={`mailto:${profile.email}`} className="link-underline inline-flex items-center gap-2 text-lg break-all sm:text-xl">
                  <Mail width={18} height={18} className="shrink-0" />
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors hover:border-ink"
                  aria-label={copied ? t.contact.copied : t.contact.copy}
                >
                  {copied ? <Check width={16} height={16} /> : <Copy width={16} height={16} />}
                </button>
              </div>
            </div>

            <div>
              <p className="eyebrow mb-3">{t.contact.or}</p>
              <ul className="divide-y divide-line border-y border-line">
                {profile.socials.map((s) => {
                  const Icon = socialIcon[s.label]
                  return (
                    <li key={s.label}>
                      <ExternalLink href={s.href} className="group flex items-center justify-between py-4">
                        <span className="flex items-center gap-3">
                          <Icon width={18} height={18} />
                          <span className="font-medium">{s.label}</span>
                          <span className="font-mono text-xs text-ink-soft">{s.handle}</span>
                        </span>
                        <ArrowUpRight
                          width={18}
                          height={18}
                          className="text-ink-soft transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                        />
                      </ExternalLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
