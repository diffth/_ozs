// ─────────────────────────────────────────────────────────────
//  vite build 이후에 실행됩니다.
//
//  하는 일:
//  1) 라우트마다 실제 HTML 파일을 만들고 <title>/<meta>/OG 를 라우트에 맞게 바꿔 넣습니다.
//     → 카카오톡·디스코드·X 같은 크롤러는 JS 를 실행하지 않으므로 이게 있어야
//        공유했을 때 제목과 썸네일이 제대로 뜹니다.
//  2) sitemap.xml 을 만듭니다.
// ─────────────────────────────────────────────────────────────
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { site } from '../src/data/site.js'
import { products } from '../src/data/products.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const shell = readFileSync(resolve(dist, 'index.html'), 'utf8')

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const routes = [
  { path: '/', title: `${site.name} — 1인 개발 스튜디오`, desc: site.description, img: '/img/og-default.svg', priority: '1.0' },
  { path: '/about', title: `About — ${site.name}`, desc: `${site.name} 소개. ${site.tagline}`, img: '/img/og-default.svg', priority: '0.7' },
  { path: '/contact', title: `Contact — ${site.name}`, desc: '제품 제휴, 퍼블리싱, 개발 의뢰 문의를 받습니다.', img: '/img/og-default.svg', priority: '0.7' },
  ...products.map((p) => ({
    path: `/works/${p.slug}`,
    title: `${p.name} — ${site.name}`,
    desc: p.summary,
    img: p.cover,
    priority: '0.9',
  })),
]

const head = (r) => `
    <title>${esc(r.title)}</title>
    <meta name="description" content="${esc(r.desc)}" />
    <link rel="canonical" href="${site.url}${r.path}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${esc(site.name)}" />
    <meta property="og:locale" content="ko_KR" />
    <meta property="og:title" content="${esc(r.title)}" />
    <meta property="og:description" content="${esc(r.desc)}" />
    <meta property="og:url" content="${site.url}${r.path}" />
    <meta property="og:image" content="${site.url}${r.img}" />
    <meta name="twitter:card" content="summary_large_image" />`

let written = 0
for (const r of routes) {
  const html = shell.replace(
    /<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/,
    `<!-- SEO:START -->${head(r)}\n    <!-- SEO:END -->`
  )
  const dir = r.path === '/' ? dist : resolve(dist, `.${r.path}`)
  mkdirSync(dir, { recursive: true })
  writeFileSync(resolve(dir, 'index.html'), html)
  written++
}

// Cloudflare Pages 는 404.html 을 자동으로 사용합니다.
writeFileSync(resolve(dist, '404.html'), shell)

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url>\n    <loc>${site.url}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r.priority}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>
`
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap)

console.log(`\n  static: ${written} routes + 404.html + sitemap.xml\n`)
