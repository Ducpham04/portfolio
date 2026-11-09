import type { Lang } from './types'

export const LANG_STORAGE_KEY = 'lang'
export const DEFAULT_LANG: Lang = 'vi'

/** Base path for each language. Both are prerendered at build time. */
export const LANG_PATH: Record<Lang, string> = { vi: '/', en: '/en/' }

/** Language implied by the current URL (`/en/…` → en, anything else → vi). */
export function pathLang(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG
  return /^\/en(\/|$)/.test(window.location.pathname) ? 'en' : 'vi'
}

/** Saved choice wins; otherwise the URL decides. Safe to call on the server. */
export function detectLang(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY)
    if (saved === 'vi' || saved === 'en') return saved
  } catch {
    /* storage unavailable (private mode) — fall through */
  }
  return pathLang()
}
