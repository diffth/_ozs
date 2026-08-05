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
      <div className="wave-divider" style={{ background: '#fffbf5' }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="#48ecd0"
            fillOpacity="1"
            d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,21.3C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <section className="sec-pop">
        <div className="wrap">
          <div className="pop-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
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
