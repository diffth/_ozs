import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { useLang } from '../i18n/LanguageProvider.jsx'

export default function NotFound() {
  const { t } = useLang()

  return (
    <>
      <Seo title="404" description={t('seo.notFound')} path="/404" />

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
      <div className="wave-divider" style={{ background: '#fffbf5' }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="#48ecd0"
            fillOpacity="1"
            d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,21.3C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  )
}
