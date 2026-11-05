import { createContext } from 'react'
import type { Lang, Localized } from './types'
import type { Dictionary } from './dictionary'

export interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  /** UI strings for the active language */
  t: Dictionary
  /** Pick the active language from a `{ vi, en }` object */
  l: (value: Localized) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
