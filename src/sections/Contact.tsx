import { AnimatePresence, m } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { ExternalLink } from '../components/ExternalLink'
import { ArrowUpRight, Check, Copy, Fiverr, Github, Linkedin } from '../components/icons'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/useLanguage'

type Status = 'idle' | 'sending' | 'success' | 'error'

const socialIcon = { GitHub: Github, LinkedIn: Linkedin, Fiverr } as const

const fieldClass =
  'w-full rounded-[3px] border-[3px] border-ink bg-white px-4 py-3 text-base text-ink placeholder:text-enamel-soft transition-colors focus:border-blue'

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
      const body = encodeURIComponent(
        `${data.get('message') ?? ''}\n\n— ${data.get('name') ?? ''} <${data.get('email') ?? ''}>`,
      )
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
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto max-w-7xl px-3 pt-12 pb-20 sm:px-6 md:pt-16 md:pb-28"
    >
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <Reveal className="sign bg-red px-5 pt-9 pb-8 text-enamel sm:px-12 sm:pt-12 sm:pb-12 lg:col-span-7">
          <h2 id="contact-title" className="letter text-[clamp(3.25rem,11vw,8rem)]">
            {t.contact.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-pretty text-enamel">{t.contact.sub}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="letter text-[clamp(1.6rem,4.6vw,3rem)] break-all normal-case underline-offset-[0.15em] hover:underline"
            >
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="btn btn-white !px-3 !py-2.5 !text-xs"
              aria-label={copied ? t.contact.copied : t.contact.copy}
            >
              {copied ? <Check width={16} height={16} /> : <Copy width={16} height={16} />}
              <span aria-hidden>{copied ? t.contact.copied : t.contact.copy}</span>
            </button>
          </div>

          <div className="mt-10">
            <p className="plaque text-sm text-enamel">{t.contact.or}</p>
            <ul className="mt-4 space-y-3">
              {profile.socials.map((s) => {
                const Icon = socialIcon[s.label]
                return (
                  <li key={s.label}>
                    <ExternalLink
                      href={s.href}
                      className="group flex items-center justify-between rounded-[3px] border-[3px] border-ink bg-ink/25 px-4 py-3.5 transition-colors hover:bg-enamel hover:text-ink"
                    >
                      <span className="flex items-center gap-3">
                        <Icon width={20} height={20} />
                        <span className="plaque text-base">{s.label}</span>
                        <span className="text-sm opacity-85">{s.handle}</span>
                      </span>
                      <ArrowUpRight
                        width={18}
                        height={18}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </ExternalLink>
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="sign self-start bg-enamel px-5 py-8 text-ink sm:px-10 lg:col-span-5">
          <form onSubmit={handleSubmit} className="space-y-5">
            <h3 className="plaque text-lg text-blue">{t.contact.formTitle}</h3>
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
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-red group disabled:cursor-wait disabled:opacity-60"
              >
                {status === 'sending' ? t.contact.sending : t.contact.send}
                <ArrowUpRight
                  width={18}
                  height={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
              {!useFormspree && <p className="text-sm text-pretty text-enamel-soft">{t.contact.mailtoNote}</p>}
            </div>
            <div aria-live="polite" className="min-h-6 text-sm font-medium">
              <AnimatePresence>
                {(status === 'success' || status === 'error') && (
                  <m.p
                    initial={{ y: 6 }}
                    animate={{ y: 0 }}
                    exit={{ opacity: 0 }}
                    className={status === 'success' ? 'text-green' : 'text-red-deep'}
                  >
                    {status === 'success' ? t.contact.success : t.contact.error}
                  </m.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
