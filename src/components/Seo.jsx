import { site } from '../data/site.js'
import { useLang } from '../i18n/LanguageProvider.jsx'
import { OG_LOCALE } from '../i18n/index.js'

/**
 * React 19 는 컴포넌트 안의 <title>/<meta>/<link> 를 <head> 로 올려줍니다.
 * 크롤러(카카오톡, 디스코드 등)를 위한 정적 HTML 은 scripts/build-static.mjs 가 따로 만듭니다.
 */
export default function Seo({ title, description, path = '/', image }) {
  const { lang, t, tr } = useLang()

  const full = title ? `${title} — ${site.name}` : `${site.name} — ${t('seo.siteTitle')}`
  const desc = description || tr(site.description)
  const url = `${site.url}${path}`
  const img = `${site.url}${image || '/img/og-default.svg'}`

  return (
    <>
      <title>{full}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content={OG_LOCALE[lang]} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
