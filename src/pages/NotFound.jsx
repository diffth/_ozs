import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { useLang } from '../i18n/LanguageProvider.jsx'

export default function NotFound() {
  const { t } = useLang()

  return (
    <>
      <Seo title="404" description={t('seo.notFound')} path="/404" noindex />

      <section className="hero-pop" style={{ padding: '4rem 0 5rem' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="badge-pop" style={{ marginBottom: '1rem' }}>
            {t('notFound.badge')}
          </span>
          <h1 className="hero-pop__title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: '0 auto 1.5rem' }}>
            {t('notFound.titleLead')} <span>{t('notFound.titleHighlight')}</span>
          </h1>
          <p className="hero-pop__desc" style={{ margin: '0 auto 2rem', maxWidth: '44ch' }}>
            {t('notFound.body')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link className="btn-pop btn-pop--white" to="/">
              {t('notFound.home')}
            </Link>
            <Link className="btn-pop" to="/#works">
              {t('notFound.works')}
            </Link>
          </div>
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
    </>
  )
}
