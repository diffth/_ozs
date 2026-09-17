import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { legalDocs } from '../data/legal.js'
import { useLang } from '../i18n/LanguageProvider.jsx'

export default function Legal({ docKey }) {
  const { t, tr } = useLang()
  const doc = legalDocs.find((d) => d.key === docKey)
  const title = tr(doc.title)

  return (
    <>
      <Seo title={title} description={tr(doc.intro)} path={doc.path} />

      <section className="hero-pop" style={{ padding: '4rem 0 5rem' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="badge-pop" style={{ marginBottom: '1rem' }}>
            {t('legal.badge')}
          </span>
          <h1 className="hero-pop__title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', margin: '0 auto' }}>
            {title}
          </h1>
        </div>
      </section>

      {/* Wave Divider */}
      {/* 민트 띠의 위·아래 물결을 반주기 어긋나게 두어, 히어로 그라데이션과
          크림 배경 사이에서 두 물결이 엇갈려 보이게 합니다.
          윗물결 위쪽은 비워 두어야 히어로 그라데이션이 그대로 이어집니다. */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="#48ecd0"
            d="M0,37 C183,59.7 367,59.7 550,37 C733,14.3 917,14.3 1100,37 C1283,59.7 1467,59.7 1650,37 L1650,120 L-1100,120 Z"
          ></path>
          <path
            fill="#fffbf5"
            d="M-825,83 C-642,105.7 -458,105.7 -275,83 C-92,60.3 92,60.3 275,83 C458,105.7 642,105.7 825,83 C1008,60.3 1192,60.3 1375,83 C1558,105.7 1742,105.7 1925,83 L1925,120 L-1100,120 Z"
          ></path>
        </svg>
      </div>

      <section className="sec-pop">
        <div className="wrap">
          <article className="legal">
            <p className="legal__intro">{tr(doc.intro)}</p>

            {doc.sections.map((s, i) => (
              <section key={i} className="legal__sec">
                <h2 className="legal__heading">{tr(s.heading)}</h2>
                {s.body?.map((p, j) => (
                  <p key={j}>{tr(p)}</p>
                ))}
                {s.items && (
                  <ul className="legal__list">
                    {s.items.map((item, j) => (
                      <li key={j}>{tr(item)}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <p className="legal__date">
              {t('legal.effective')}: {doc.effective}
            </p>

            <nav className="legal__nav" aria-label={t('legal.navAria')}>
              {legalDocs
                .filter((d) => d.key !== doc.key)
                .map((d) => (
                  <Link key={d.key} to={d.path}>
                    {tr(d.title)}
                  </Link>
                ))}
            </nav>
          </article>
        </div>
      </section>
    </>
  )
}
