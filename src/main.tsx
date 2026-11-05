import './assets/fonts/fonts.css'
import './index.css'

import { createRoot, hydrateRoot } from 'react-dom/client'
import { Root } from './Root'
import { detectLang, pathLang } from './i18n/detect'

const container = document.getElementById('root')!
const lang = detectLang()

// The production build prerenders `/` (vi) and `/en/` (en) — see scripts/prerender.js.
// Hydrate when the visitor's language matches the page; otherwise render fresh.
if (container.hasChildNodes() && lang === pathLang()) {
  hydrateRoot(container, <Root lang={lang} />)
} else {
  container.textContent = ''
  createRoot(container).render(<Root lang={lang} />)
}
