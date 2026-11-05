import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LanguageContext } from './context'
import { LANG_PATH, LANG_STORAGE_KEY } from './detect'
import { dictionary } from './dictionary'
import type { Lang, Localized } from './types'

export function LanguageProvider({ initialLang, children }: { initialLang: Lang; children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = dictionary[lang].meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', dictionary[lang].meta.description)
    // Keep the URL in sync so the current language is shareable (/ ↔ /en/).
    const path = LANG_PATH[lang]
    if (window.location.pathname !== path) {
      window.history.replaceState(null, '', path + window.location.search + window.location.hash)
    }
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(LANG_STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang(lang === 'vi' ? 'en' : 'vi'),
      t: dictionary[lang],
      l: (v: Localized) => v[lang],
    }),
    [lang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
