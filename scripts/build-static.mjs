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
//  4) 본문을 미리 렌더링해 <div id="root"> 안에 넣습니다. (dist-ssr/entry-server.js)
//     → JS 를 실행하지 않는 크롤러(네이버 등)도 본문을 읽고, 브라우저는 이를 이어받습니다(hydrate).
//  5) 위 작업을 언어마다 한 번씩 합니다. 한국어는 /about, 영어는 /en/about 이며,
//     서로를 hreflang 으로 가리켜 검색엔진이 두 언어판을 짝지어 색인하게 합니다.
//
//  파일은 /about/index.html 이 아니라 /about.html 로 씁니다. Cloudflare Pages 는
//  폴더형이면 /about 을 /about/ 로 308 리다이렉트해서, canonical·sitemap 에 적은
//  주소(/about)와 실제 주소가 어긋납니다. .html 파일이면 /about 으로 바로 응답합니다.
// ─────────────────────────────────────────────────────────────
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { site, capabilities } from '../src/data/site.js'
import { products } from '../src/data/products.js'
import { legalDocs } from '../src/data/legal.js'
import { DEFAULT_LANG, LANG_PREFIX, LANGS, OG_LOCALE, localizePath, raw, tr, translate } from '../src/i18n/index.js'
import { render } from '../dist-ssr/entry-server.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const shell = readFileSync(resolve(dist, 'index.html'), 'utf8')

/** 기준 주소(/about)의 언어판 절대 URL */
const urlOf = (path, L) => `${site.url}${localizePath(path, L)}`

// Seo 컴포넌트의 <title>/<meta>/<link> 는 renderToString 결과 맨 앞에 붙어 나옵니다.
// head 에는 이미 같은 태그가 있으므로 본문에서는 걷어냅니다. 브라우저에서는 앱이 다시 내보냅니다.
// data-prerender 는 main.jsx 가 "이 HTML 이 어느 주소로 그려졌는지" 보고 hydrate 여부를 정하는 데 씁니다.
const HOISTED = /^(?:<title>[^<]*<\/title>|<(?:meta|link)\b[^>]*\/?>)+/
const withBody = (html, url) =>
  html.replace(
    '<div id="root"></div>',
    () => `<div id="root" data-prerender="${url}">${render(url).replace(HOISTED, '')}</div>`
  )

/** 셸의 SEO 블록을 갈아 끼우고 <html lang> 을 언어에 맞춥니다. */
const page = (L, headHtml, url) =>
  withBody(
    shell
      .replace(/<html lang="[^"]*">/, `<html lang="${L}">`)
      .replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/, () => `<!-- SEO:START -->${headHtml}\n    <!-- SEO:END -->`),
    url
  )

/** 언어판 주소를 dist 안의 파일 경로로. / → index.html, /en → en.html, /en/about → en/about.html */
const fileOf = (localized) => (localized === '/' ? resolve(dist, 'index.html') : resolve(dist, `.${localized}.html`))

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// ── 구조화 데이터 ────────────────────────────────
// JSON 값 안의 '<' 를 < 로 바꿔, 값에 </script> 가 들어가도
// 태그가 먼저 닫히지 않게 합니다. 92 는 역슬래시의 문자 코드입니다.
const BACKSLASH = String.fromCharCode(92)

const jsonLd = (nodes) => {
  const body = JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }, null, 2)
    .replaceAll('<', BACKSLASH + 'u003c')
  return `
    <script type="application/ld+json">${body}</script>`
}

const b = site.business
const ORG = { '@id': `${site.url}/#organization` }

// 작품 유형별 구조화 데이터 타입. 공개 시점은 spec 의 '공개' 값(예: 2026.09 (알파))에서 연·월만 뽑습니다.
const PRODUCT_TYPE = { Game: 'VideoGame', 'Web Service': 'WebApplication', Website: 'WebSite' }

const INLANG = { ko: 'ko-KR', en: 'en' }
const HOME_LABEL = { ko: '홈', en: 'Home' }
const SERVICES_LABEL = { ko: '서비스', en: 'services' }

/** 한 언어판에 필요한 문구·구조화 데이터·라우트를 모두 만듭니다. */
function build(L) {
  const s = (v) => tr(v, L)
  const d = (path) => translate(path, L)
  const brand = s(site.brand)
  const specValue = (p, en) => {
    const row = p.spec.find((r) => tr(r.label, 'en') === en)
    return row ? s(row.value) : undefined
  }

  // 조직 정보는 AI·검색엔진이 "오즈스가 누구인가"를 답할 때 쓰는 근거입니다.
  // 화면이나 site.js 에 적힌 사실만 넣고, 추측한 값은 넣지 않습니다.
  const organization = {
    '@type': 'Organization',
    ...ORG,
    name: s(b.company),
    alternateName: site.name,
    url: site.url,
    logo: { '@type': 'ImageObject', url: `${site.url}/img/logo.png`, width: 512, height: 512 },
    description: s(site.definition),
    email: site.email,
    telephone: b.tel,
    foundingDate: site.founded,
    // 1인 스튜디오
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 1 },
    founder: { '@type': 'Person', name: s(b.ceo) },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KR',
      addressRegion: s(b.region),
      addressLocality: s(b.locality),
      streetAddress: s(b.address),
    },
    areaServed: { '@type': 'Country', name: 'KR' },
    knowsAbout: capabilities.map((c) => s(c.title)),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${brand} ${SERVICES_LABEL[L]}`,
      itemListElement: capabilities.map((c) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s(c.title), description: s(c.body), provider: ORG },
      })),
    },
    sameAs: site.profiles,
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${urlOf('/', L)}#website`,
    url: urlOf('/', L),
    name: s(b.company),
    alternateName: site.name,
    description: s(site.definition),
    inLanguage: INLANG[L],
    publisher: ORG,
  }

  // 작품 상세는 "홈 > 작품명" 두 단계로 둡니다. Works 는 홈 안의 구역이라
  // 독립한 페이지가 아니어서 이동 경로에 넣지 않습니다.
  const breadcrumb = (p) => ({
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: HOME_LABEL[L], item: urlOf('/', L) },
      { '@type': 'ListItem', position: 2, name: p.name, item: urlOf(`/works/${p.slug}`, L) },
    ],
  })

  const creativeWork = (p) => {
    const type = PRODUCT_TYPE[p.kind] ?? 'CreativeWork'
    const launched = specValue(p, 'Launched')?.match(/(\d{4})\.(\d{2})/)
    const pageUrl = urlOf(`/works/${p.slug}`, L)
    const node = {
      '@type': type,
      '@id': `${pageUrl}#work`,
      name: p.name,
      description: s(p.description),
      image: `${site.url}${p.cover}`,
      url: p.stores[0]?.href ?? pageUrl,
      mainEntityOfPage: pageUrl,
      creator: ORG,
      ...(launched && { datePublished: `${launched[1]}-${launched[2]}` }),
    }
    if (type === 'VideoGame') {
      Object.assign(node, { gamePlatform: specValue(p, 'Platform'), applicationCategory: 'Game', operatingSystem: specValue(p, 'Platform') })
    }
    if (type === 'WebApplication') {
      Object.assign(node, { operatingSystem: 'Web', browserRequirements: 'Requires a modern web browser' })
    }
    return node
  }

  // Contact 페이지 하단 FAQ 와 같은 목록. 구글은 FAQ 리치 결과를 일반 사이트에 거의 보여주지
  // 않지만, 질문과 답이 짝지어 있어 AI 가 답변을 인용하기 좋습니다.
  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${urlOf('/contact', L)}#faq`,
    mainEntity: raw('contact.faq').map((item) => ({
      '@type': 'Question',
      name: s(item.q),
      acceptedAnswer: { '@type': 'Answer', text: s(item.a) },
    })),
  }

  const routes = [
    { path: '/', title: `${brand} — ${d('seo.siteTitle')}`, desc: s(site.definition), img: '/img/og-default.png', priority: '1.0', ld: [organization, website] },
    { path: '/about', title: `About — ${brand}`, desc: d('seo.aboutDesc'), img: '/img/og-default.png', priority: '0.7', ld: [organization] },
    { path: '/contact', title: `Contact — ${brand}`, desc: d('seo.contactDesc'), img: '/img/og-default.png', priority: '0.7', ld: [organization, faqPage] },
    ...products.map((p) => ({
      path: `/works/${p.slug}`,
      title: `${p.name} — ${brand}`,
      desc: s(p.summary),
      img: p.cover,
      priority: '0.9',
      ld: [organization, creativeWork(p), breadcrumb(p)],
    })),
    ...legalDocs.map((doc) => ({
      path: doc.path,
      title: `${s(doc.title)} — ${brand}`,
      desc: s(doc.intro),
      img: '/img/og-default.png',
      priority: '0.3',
      ld: [organization],
    })),
  ]

  const other = L === 'ko' ? 'en' : 'ko'

  // 모든 언어판을 서로 가리키는 hreflang. x-default 는 기본 언어(한국어)판입니다.
  const alternates = (path) =>
    [...LANGS.map((l) => [l, urlOf(path, l)]), ['x-default', urlOf(path, DEFAULT_LANG)]]
      .map(([hl, href]) => `\n    <link rel="alternate" hreflang="${hl}" data-seo="static" href="${href}" />`)
      .join('')

  const head = (r) => `
    <title data-seo="static">${esc(r.title)}</title>
    <meta name="description" data-seo="static" content="${esc(r.desc)}" />
    <link rel="canonical" data-seo="static" href="${urlOf(r.path, L)}" />${alternates(r.path)}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${esc(brand)}" />
    <meta property="og:locale" data-seo="static" content="${OG_LOCALE[L]}" />
    <meta property="og:locale:alternate" content="${OG_LOCALE[other]}" />
    <meta property="og:title" data-seo="static" content="${esc(r.title)}" />
    <meta property="og:description" data-seo="static" content="${esc(r.desc)}" />
    <meta property="og:url" data-seo="static" content="${urlOf(r.path, L)}" />
    <meta property="og:image" data-seo="static" content="${site.url}${r.img}" />
    <meta name="twitter:card" data-seo="static" content="summary_large_image" />${jsonLd(r.ld)}`

  // Cloudflare Pages 는 404.html 을 자동으로 사용합니다.
  // 여기에 홈의 SEO 블록이 그대로 남아 있으면 없는 주소가 홈의 제목과
  // canonical 을 달고 색인될 수 있습니다. 전용 head 로 갈아 끼우고
  // noindex 를 달아 색인 대상에서 빼둡니다. canonical 은 넣지 않습니다.
  const notFoundHead = `
    <title data-seo="static">404 — ${esc(brand)}</title>
    <meta name="description" data-seo="static" content="${esc(d('seo.notFound'))}" />
    <meta name="robots" data-seo="static" content="noindex, follow" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${esc(brand)}" />
    <meta property="og:locale" data-seo="static" content="${OG_LOCALE[L]}" />
    <meta property="og:title" data-seo="static" content="404 — ${esc(brand)}" />
    <meta property="og:description" data-seo="static" content="${esc(d('seo.notFound'))}" />`

  return { s, d, brand, routes, head, notFoundHead, specValue }
}

const byLang = Object.fromEntries(LANGS.map((L) => [L, build(L)]))

let written = 0
for (const L of LANGS) {
  const { routes, head, notFoundHead } = byLang[L]
  for (const r of routes) {
    const localized = localizePath(r.path, L)
    const file = fileOf(localized)
    mkdirSync(dirname(file), { recursive: true })
    writeFileSync(file, page(L, head(r), localized))
    written++
  }

  // 없는 주소마다 이 파일이 쓰이므로 NotFound 화면을 미리 렌더링해 둡니다.
  // Pages 는 가장 가까운 상위 폴더의 404.html 을 쓰므로 /en/… 에는 en/404.html 이 나갑니다.
  const notFoundFile = resolve(dist, `.${LANG_PREFIX[L]}/404.html`)
  mkdirSync(dirname(notFoundFile), { recursive: true })
  writeFileSync(notFoundFile, page(L, notFoundHead, localizePath('/404', L)))
}

// lastmod 는 넣지 않습니다. 빌드한 날짜를 넣으면 모든 페이지가 매번 "오늘 수정됨"으로
// 찍혀, 검색엔진이 이 값을 믿지 않게 됩니다. 페이지별 실제 수정일을 관리하게 되면 그때 넣습니다.
// 각 URL 에 모든 언어판을 xhtml:link 로 달아, sitemap 만으로도 언어판 짝이 전달되게 합니다.
const sitemapAlternates = (path) =>
  [...LANGS.map((l) => [l, urlOf(path, l)]), ['x-default', urlOf(path, DEFAULT_LANG)]]
    .map(([hl, href]) => `\n    <xhtml:link rel="alternate" hreflang="${hl}" href="${href}" />`)
    .join('')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGS.flatMap((L) =>
  byLang[L].routes.map(
    (r) =>
      `  <url>\n    <loc>${urlOf(r.path, L)}</loc>${sitemapAlternates(r.path)}\n    <priority>${r.priority}</priority>\n  </url>`
  )
).join('\n')}
</urlset>
`
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap)

// ── llms.txt ─────────────────────────────────
// AI 가 사이트를 요약할 때 읽도록 핵심 사실을 마크다운으로 모아 둔 파일(llmstxt.org 제안 형식).
// 효과가 공인된 표준은 아니지만, site.js·products.js 에서 자동으로 만들어 내용이 어긋날 일이 없습니다.
{
  const { s, d, brand, specValue } = byLang[DEFAULT_LANG]
  const llms = `# ${brand}

> ${s(site.definition)}

> ${tr(site.definition, 'en')}

- 상호: ${s(b.company)} (${site.name})
- 대표: ${s(b.ceo)}
- 설립: ${site.founded}년
- 운영 형태: ${d('about.glanceTeam')}
- 위치: ${s(b.address)}
- 이메일: ${site.email}
- 카카오톡 상담: ${site.kakao}

## 서비스

${capabilities.map((c) => `- **${s(c.title)}**: ${s(c.body)} (${c.stack.join(', ')})`).join('\n')}

## 작품

${products
  .map((p) => `- [${p.name}](${urlOf(`/works/${p.slug}`, 'ko')}): ${p.kind}, ${specValue(p, 'Launched') ?? p.year}. ${s(p.summary)}`)
  .join('\n')}

## 자주 묻는 질문

${raw('contact.faq')
  .map((item) => `### ${s(item.q)}\n\n${s(item.a)}`)
  .join('\n\n')}

## 페이지

- [소개](${urlOf('/about', 'ko')})
- [문의](${urlOf('/contact', 'ko')})
- [English site](${urlOf('/', 'en')})
`
  writeFileSync(resolve(dist, 'llms.txt'), llms)
}

console.log(`\n  static: ${written} routes (${LANGS.join(', ')}) + 404.html + sitemap.xml + llms.txt\n`)
