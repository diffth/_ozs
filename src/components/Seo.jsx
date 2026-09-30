import { site } from '../data/site.js'
import { useLang } from '../i18n/LanguageProvider.jsx'
import { DEFAULT_LANG, LANGS, OG_LOCALE, localizePath } from '../i18n/index.js'

/**
 * React 19 는 컴포넌트 안의 <title>/<meta>/<link> 를 <head> 로 올려줍니다.
 * 크롤러(카카오톡, 디스코드 등)를 위한 정적 HTML 은 scripts/build-static.mjs 가 따로 만듭니다.
 */
export default function Seo({ title, description, path = '/', image, noindex = false }) {
  const { lang, t, tr } = useLang()

  const brand = tr(site.brand)
  const full = title ? `${title} — ${brand}` : `${brand} — ${t('seo.siteTitle')}`
  const desc = description || tr(site.definition)
  // path 는 언어 접두사가 없는 기준 주소(/about)입니다. 언어판마다 주소를 따로 만들어
  // canonical 은 지금 언어판을, hreflang 은 모든 언어판을 가리키게 합니다.
  const urlOf = (l) => `${site.url}${localizePath(path, l)}`
  const url = urlOf(lang)
  const img = `${site.url}${image || '/img/og-default.png'}`

  // 정적 HTML 의 같은 태그(data-seo="static")는 hydrate 전에 main.jsx 가 걷어냅니다.
  return (
    <>
      <title>{full}</title>
      <meta name="description" content={desc} />
      {/* 404 처럼 색인되면 안 되는 화면은 canonical 대신 noindex 를 답니다.
          없는 주소에 canonical 을 달면 그 주소가 정식 페이지로 읽힙니다. */}
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <>
          <link rel="canonical" href={url} />
          {LANGS.map((l) => (
            <link key={l} rel="alternate" hrefLang={l} href={urlOf(l)} />
          ))}
          <link rel="alternate" hrefLang="x-default" href={urlOf(DEFAULT_LANG)} />
        </>
      )}
      <meta property="og:title" content={full} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content={OG_LOCALE[lang]} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
