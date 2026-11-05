import { m, type HTMLMotionProps } from 'framer-motion'

type RevealProps = {
  delay?: number
  /** Distance in px the element travels upward while fading in */
  y?: number
} & (({ as?: 'div' } & HTMLMotionProps<'div'>) | ({ as: 'li' } & HTMLMotionProps<'li'>))

const transition = (delay: number) => ({ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay })
const viewport = { once: true, margin: '0px 0px -10% 0px' }

/** Fades & lifts its children in once they scroll into view. */
export function Reveal({ delay = 0, y = 24, ...props }: RevealProps) {
  const anim = {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: transition(delay),
  }
  if (props.as === 'li') {
    const { as: _as, ...rest } = props
    return <m.li {...anim} {...rest} />
  }
  const { as: _as, ...rest } = props
  return <m.div {...anim} {...rest} />
}
