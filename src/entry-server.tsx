import { renderToString } from 'react-dom/server'
import { Root } from './Root'
import { dictionary } from './i18n/dictionary'
import type { Lang } from './i18n/types'

export { LANG_PATH } from './i18n/detect'

/** Used at build time by scripts/prerender.js to produce static HTML per language. */
export function render(lang: Lang) {
  return {
    html: renderToString(<Root lang={lang} />),
    title: dictionary[lang].meta.title,
    description: dictionary[lang].meta.description,
  }
}
