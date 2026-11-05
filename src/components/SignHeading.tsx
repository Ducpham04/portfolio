import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Tone = 'red' | 'yellow' | 'blue' | 'green' | 'white'

const tones: Record<Tone, string> = {
  red: 'bg-red text-enamel',
  yellow: 'bg-yellow text-ink [--shade:var(--red)]',
  blue: 'bg-blue text-enamel',
  green: 'bg-green text-enamel',
  white: 'bg-enamel text-ink [--shade:var(--yellow)]',
}

interface Props {
  id: string
  heading: string
  sub?: string
  tone: Tone
  children?: ReactNode
}

/** A section's name, painted on its own sign board, with the supporting line set on the wall below. */
export function SignHeading({ id, heading, sub, tone, children }: Props) {
  return (
    <div className="mb-10 md:mb-14">
      <Reveal className={`sign inline-block max-w-full px-7 pt-6 pb-5 sm:px-10 ${tones[tone]}`}>
        <h2 id={`${id}-title`} className="letter text-[clamp(2.75rem,8vw,6rem)] text-balance">
          {heading}
        </h2>
      </Reveal>
      {sub && <p className="mt-5 max-w-2xl text-lg text-pretty text-on-wall-soft">{sub}</p>}
      {children}
    </div>
  )
}
