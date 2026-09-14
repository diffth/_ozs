import Seo from '../components/Seo.jsx'
import { site } from '../data/site.js'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageProvider.jsx'

const CARD_COLORS = ['pop-card--yellow', 'pop-card--pink', 'pop-card--teal']

export default function About() {
  const { t, tr, raw } = useLang()
  const cards = raw('about.cards')

  return (
    <>
      <Seo
        title="About"
        description={`${site.name} ${t('seo.aboutDesc')} — ${tr(site.tagline)}`}
        path="/about"
      />

      {/* Hero Header */}
      <section className="hero-pop" style={{ padding: '4rem 0 5rem' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="badge-pop" style={{ marginBottom: '1rem' }}>
            {t('about.badge')}
          </span>
          <h1 className="hero-pop__title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: '0 auto 1.5rem' }}>
            {t('about.titleLead')} <span>{t('about.titleHighlight')}</span>
          </h1>
          <p className="hero-pop__desc" style={{ margin: '0 auto', maxWidth: '54ch' }}>
            {t('about.desc')}
          </p>
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
          <div className="pop-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))' }}>
            {cards.map((c, i) => (
              <div key={c.tag} className={`pop-card ${CARD_COLORS[i % CARD_COLORS.length]}`}>
                <div>
                  <span className="pop-card__tag">{c.tag}</span>
                  <h2 className="pop-card__title">{tr(c.title)}</h2>
                  <p className="pop-card__desc">
                    {c.bodyAfterName ? (
                      <>
                        <strong>{tr(site.business.ceo)}</strong>
                        {tr(c.bodyAfterName)}
                      </>
                    ) : (
                      tr(c.body)
                    )}
                  </p>
                  {c.cta && (
                    <div style={{ marginTop: '1.5rem' }}>
                      <Link to="/contact" className="btn-pop btn-pop--white" style={{ padding: '0.5rem 1.25rem' }}>
                        {tr(c.cta)}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
