import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface Props {
  id: string
  eyebrow: string
  heading: string
  sub?: string
  aside?: ReactNode
}

export function SectionHeading({ id, eyebrow, heading, sub, aside }: Props) {
  return (
    <div className="mb-12 grid gap-6 border-t border-line pt-6 md:mb-16 md:grid-cols-12 md:gap-8">
      <Reveal className="md:col-span-3">
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal className="md:col-span-9" delay={0.05}>
        <h2 id={`${id}-title`} className="display text-4xl text-balance sm:text-5xl md:text-6xl">
          {heading}
        </h2>
        {sub && <p className="mt-5 max-w-2xl text-lg text-pretty text-ink-soft">{sub}</p>}
        {aside}
      </Reveal>
    </div>
  )
}
