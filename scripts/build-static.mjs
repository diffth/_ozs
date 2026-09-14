// ─────────────────────────────────────────────────────────────
//  vite build 이후에 실행됩니다.
//
//  하는 일:
//  1) 라우트마다 실제 HTML 파일을 만들고 <title>/<meta>/OG 를 라우트에 맞게 바꿔 넣습니다.
//     → 카카오톡·디스코드·X 같은 크롤러는 JS 를 실행하지 않으므로 이게 있어야
//        공유했을 때 제목과 썸네일이 제대로 뜹니다.
//  2) 구조화 데이터(JSON-LD)를 같은 자리에 넣습니다.
//     → 크롤러가 읽는 HTML 에 이미 들어 있으므로 Seo 컴포넌트에서는 내보내지
//        않습니다. 양쪽에서 내보내면 문서에 같은 블록이 두 번 들어갑니다.
//  3) sitemap.xml 과 404.html 을 만듭니다.
// ─────────────────────────────────────────────────────────────
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { site } from '../src/data/site.js'
import { products } from '../src/data/products.js'
import { DEFAULT_LANG, OG_LOCALE, tr, translate } from '../src/i18n/index.js'

// 크롤러가 보는 정적 HTML 은 기본 언어(한국어) 기준으로 만듭니다.
// 방문자가 실제로 보는 화면은 브라우저에서 선택한 언어로 다시 그려집니다.
const L = DEFAULT_LANG
const s = (v) => tr(v, L)
const d = (path) => translate(path, L)

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const shell = readFileSync(resolve(dist, 'index.html'), 'utf8')

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// ── 구조화 데이터 ────────────────────────────────
// JSON 값 안의 '<' 를 \u003c 로 바꿔, 값에 </script> 가 들어가도
// 태그가 먼저 닫히지 않게 합니다. 92 는 역슬래시의 문자 코드입니다.
const BACKSLASH = String.fromCharCode(92)

const jsonLd = (nodes) => {
  const body = JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }, null, 2)
    .replaceAll('<', BACKSLASH + 'u003c')
  return `
    <script type="application/ld+json">${body}</script>`
}

const b = site.business

const organization = {
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: s(b.company),
  alternateName: site.name,
  url: site.url,
  description: s(site.description),
  email: site.email,
  telephone: b.tel,
  foundingDate: site.founded,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KR',
    streetAddress: s(b.address),
  },
  sameAs: site.links.map((l) => l.href),
}

const website = {
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: s(site.description),
  inLanguage: 'ko-KR',
  publisher: { '@id': `${site.url}/#organization` },
}

// 작품 상세는 "홈 > 작품명" 두 단계로 둡니다. Works 는 홈 안의 구역이라
// 독립한 페이지가 아니어서 이동 경로에 넣지 않습니다.
const breadcrumb = (p) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: `${site.url}/` },
    { '@type': 'ListItem', position: 2, name: p.name, item: `${site.url}/works/${p.slug}` },
  ],
})

const routes = [
  { path: '/', title: `${site.name} — ${d('seo.siteTitle')}`, desc: s(site.description), img: '/img/og-default.svg', priority: '1.0', ld: [organization, website] },
  { path: '/about', title: `About — ${site.name}`, desc: `${site.name} ${d('seo.aboutDesc')}. ${s(site.tagline)}`, img: '/img/og-default.svg', priority: '0.7', ld: [organization] },
  { path: '/contact', title: `Contact — ${site.name}`, desc: d('seo.contactDesc'), img: '/img/og-default.svg', priority: '0.7', ld: [organization] },
  ...products.map((p) => ({
    path: `/works/${p.slug}`,
    title: `${p.name} — ${site.name}`,
    desc: s(p.summary),
    img: p.cover,
    priority: '0.9',
    ld: [organization, breadcrumb(p)],
  })),
]

const head = (r) => `
    <title>${esc(r.title)}</title>
    <meta name="description" content="${esc(r.desc)}" />
    <link rel="canonical" href="${site.url}${r.path}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${esc(site.name)}" />
    <meta property="og:locale" content="${OG_LOCALE[L]}" />
    <meta property="og:locale:alternate" content="${OG_LOCALE[L === 'ko' ? 'en' : 'ko']}" />
    <meta property="og:title" content="${esc(r.title)}" />
    <meta property="og:description" content="${esc(r.desc)}" />
    <meta property="og:url" content="${site.url}${r.path}" />
    <meta property="og:image" content="${site.url}${r.img}" />
    <meta name="twitter:card" content="summary_large_image" />${jsonLd(r.ld)}`

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
