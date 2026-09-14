import { useEffect } from 'react'
import { site } from '../data/site.js'
import { useLang } from '../i18n/LanguageProvider.jsx'
import { OG_LOCALE } from '../i18n/index.js'

/**
 * React 19 는 컴포넌트 안의 <title>/<meta>/<link> 를 <head> 로 올려줍니다.
 * 크롤러(카카오톡, 디스코드 등)를 위한 정적 HTML 은 scripts/build-static.mjs 가 따로 만듭니다.
 */
export default function Seo({ title, description, path = '/', image, noindex = false }) {
  const { lang, t, tr } = useLang()

  const full = title ? `${title} — ${site.name}` : `${site.name} — ${t('seo.siteTitle')}`
  const desc = description || tr(site.description)
  const url = `${site.url}${path}`
  const img = `${site.url}${image || '/img/og-default.svg'}`

  // 정적 HTML 에 미리 박아 둔 태그(data-seo="static")는 JS 를 실행하지 않는
  // 크롤러용입니다. 앱이 뜨면 이 컴포넌트가 같은 태그를 다시 내보내므로,
  // 그대로 두면 canonical·title·description 이 두 개씩 남습니다.
  // React 가 자기 태그를 head 에 올린 뒤(=커밋 후) 한 번만 걷어냅니다.
  // og:type, og:site_name, og:locale:alternate, JSON-LD 는 이 컴포넌트가
  // 내보내지 않으므로 표식이 없고, 따라서 그대로 남습니다.
  useEffect(() => {
    document.querySelectorAll('[data-seo="static"]').forEach((el) => el.remove())
  }, [])

  return (
    <>
      <title>{full}</title>
      <meta name="description" content={desc} />
      {/* 404 처럼 색인되면 안 되는 화면은 canonical 대신 noindex 를 답니다.
          없는 주소에 canonical 을 달면 그 주소가 정식 페이지로 읽힙니다. */}
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <link rel="canonical" href={url} />
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
