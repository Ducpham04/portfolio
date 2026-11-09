import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from './context'

const STORAGE_KEY = 'theme'

function readInitialTheme(): Theme {
  // index.html applies the class before first paint — trust it.
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

/**
 * The `dark` class on <html> is the source of truth, so markup never depends
 * on the theme (keeps prerendered HTML hydration-safe).
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readInitialTheme)

  const toggleTheme = useCallback(() => {
    const next: Theme = document.documentElement.classList.contains('dark') ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next === 'dark')
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
    setTheme(next)
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
