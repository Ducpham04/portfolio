import { m, type HTMLMotionProps } from 'framer-motion'

type RevealProps = {
  delay?: number
  /** Distance in px the element drops while settling */
  y?: number
} & (({ as?: 'div' } & HTMLMotionProps<'div'>) | ({ as: 'li' } & HTMLMotionProps<'li'>))

const transition = (delay: number) => ({ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay })
const viewport = { once: true, margin: '0px 0px -10% 0px' }

/**
 * Signs settle onto the wall once as they scroll into view. Content is visible
 * from the start (no opacity fade), so nothing depends on JavaScript to appear.
 */
export function Reveal({ delay = 0, y = 18, ...props }: RevealProps) {
  const anim = {
    initial: { y, rotate: -0.6 },
    whileInView: { y: 0, rotate: 0 },
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
