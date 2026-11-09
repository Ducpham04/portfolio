import type { AnchorHTMLAttributes } from 'react'
import { useLanguage } from '../i18n/useLanguage'

/** Anchor that opens in a new tab safely and announces it to screen readers. */
export function ExternalLink({ children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { t } = useLanguage()
  return (
    <a target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
      <span className="sr-only"> {t.a11y.newTab}</span>
    </a>
  )
}
