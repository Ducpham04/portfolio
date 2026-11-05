import { LazyMotion, MotionConfig } from 'framer-motion'
import { StrictMode } from 'react'
import App from './App'
import { LanguageProvider } from './i18n/LanguageProvider'
import type { Lang } from './i18n/types'
import { ThemeProvider } from './theme/ThemeProvider'

const loadMotionFeatures = () => import('./motionFeatures').then((mod) => mod.default)

export function Root({ lang }: { lang: Lang }) {
  return (
    <StrictMode>
      <ThemeProvider>
        <LanguageProvider initialLang={lang}>
          <LazyMotion features={loadMotionFeatures} strict>
            <MotionConfig reducedMotion="user">
              <App />
            </MotionConfig>
          </LazyMotion>
        </LanguageProvider>
      </ThemeProvider>
    </StrictMode>
  )
}
