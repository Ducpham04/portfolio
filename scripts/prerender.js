// Prerenders one static HTML file per language so the first paint doesn't wait
// for JavaScript (big win for FCP/LCP) and crawlers see real content.
//   dist/index.html     → Vietnamese (default)
//   dist/en/index.html  → English
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = `${root}dist`
const { render, LANG_PATH } = await import(pathToFileURL(`${root}dist-ssr/entry-server.js`).href)

const template = await readFile(`${dist}/index.html`, 'utf8')
const marker = '<div id="root"></div>'
if (!template.includes(marker)) throw new Error('prerender: #root placeholder not found in dist/index.html')

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const SITE = template.match(/<link rel="canonical" href="([^"]+)\/"/)?.[1] ?? ''

for (const lang of ['vi', 'en']) {
  const { html, title, description } = render(lang)
  const url = `${SITE}${LANG_PATH[lang]}`
  const page = template
    .replace(marker, `<div id="root">${html}</div>`)
    .replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(title)}</title>`)
    .replace(/(<meta name="description"\s+content=")[^"]*"/, `$1${escapeAttr(description)}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${escapeAttr(title)}"`)
    .replace(/(<meta property="og:description"\s+content=")[^"]*"/, `$1${escapeAttr(description)}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(
      /<meta property="og:locale" content="[^"]*" \/>\s*<meta property="og:locale:alternate" content="[^"]*" \/>/,
      lang === 'vi'
        ? '<meta property="og:locale" content="vi_VN" />\n    <meta property="og:locale:alternate" content="en_US" />'
        : '<meta property="og:locale" content="en_US" />\n    <meta property="og:locale:alternate" content="vi_VN" />',
    )

  const outDir = lang === 'vi' ? dist : `${dist}/en`
  await mkdir(outDir, { recursive: true })
  await writeFile(`${outDir}/index.html`, page)
  console.log(`✓ prerendered ${LANG_PATH[lang]} (${lang})`)
}

await rm(`${root}dist-ssr`, { recursive: true, force: true })
