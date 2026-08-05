import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import WorksLedger from '../components/WorksLedger.jsx'
import { capabilities } from '../data/site.js'
import { useLang } from '../i18n/LanguageProvider.jsx'

const CARD_COLORS = ['pop-card--yellow', 'pop-card--pink', 'pop-card--teal']

export default function Home() {
  const { t, tr, raw } = useLang()
  const featured = raw('home.featured')

  return (
    <>
      <Seo path="/" />

      {/* ── 1. Pop Hero Section ──────────────────────── */}
      <section className="hero-pop">
        <div className="wrap hero-pop__content">
          <div>
            <span className="badge-pop" style={{ marginBottom: '1.25rem' }}>
              {t('home.heroBadge')}
            </span>
            <h1 className="hero-pop__title">
              WE BREW <span>CREATIVE</span> ENERGY!
            </h1>
            <p className="hero-pop__desc">
              {t('home.heroDesc')}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link className="btn-pop" to="/contact">
                {t('home.heroCtaPrimary')}
              </Link>
              <a className="btn-pop btn-pop--white" href="#works">
                {t('home.heroCtaSecondary')}
              </a>
            </div>
          </div>

          <div className="hero-pop__img-wrap">
            <div className="hero-pop__img-frame">
              <img
                src="/img/pop_hero_drink.png"
                alt={t('home.heroImgAlt')}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Wave Divider ─────────────────────────── */}
      <div className="wave-divider" style={{ background: '#fffbf5' }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="#48ecd0"
            fillOpacity="1"
            d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,21.3C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* ── 2. Order Now / Catalog Cards Section ───────── */}
      <section className="sec-pop" id="featured">
        <div className="wrap">
          <div className="sec-pop__head">
            <span className="badge-pop" style={{ background: 'var(--pop-pink-bg)', color: 'var(--pop-pink)' }}>
              FEATURED PROJECTS
            </span>
            <h2 className="sec-pop__title">EXPLORE OUR WORKS! ⚡</h2>
            {/* Squiggle wave decoration line */}
            <svg className="squiggle-line" viewBox="0 0 100 20" fill="none">
              <path
                d="M5 10 Q 25 0, 45 10 T 85 10 T 125 10"
                stroke="var(--pop-orange)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <p className="sec-pop__subtitle">
              {t('home.featuredSubtitle')}
            </p>
          </div>

          <div className="pop-grid">
            {featured.map((f, i) => (
              <div key={f.slug} className={`pop-card ${CARD_COLORS[i % CARD_COLORS.length]}`}>
                <div>
                  <span className="pop-card__tag">{f.tag}</span>
                  <h3 className="pop-card__title">{f.name}</h3>
                  <p className="pop-card__desc">{tr(f.desc)}</p>
                </div>
                <div className="pop-card__footer">
                  <span className="pop-card__price">{f.date}</span>
                  <Link
                    to={`/works/${f.slug}`}
                    className={i === 2 ? 'btn-pop btn-pop--teal' : 'btn-pop btn-pop--white'}
                    style={
                      i === 2
                        ? { padding: '0.5rem 1.25rem', fontSize: '0.9rem', background: '#ffffff', color: 'var(--pop-teal)' }
                        : { padding: '0.5rem 1.25rem', fontSize: '0.9rem' }
                    }
                  >
                    {t('common.detail')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Mint Energy Banner Section ───────────────── */}
      <section className="mint-sec">
        <div className="wrap mint-sec__wrap">
          <div>
            <span className="badge-pop" style={{ background: '#ffffff', color: '#004d40', marginBottom: '1.25rem' }}>
              READY TO LAUNCH
            </span>
            <h2 className="mint-sec__title">NEED SOME ENERGY ON YOUR PROJECT?</h2>
            <p className="mint-sec__desc">
              {t('home.mintDesc')}
            </p>
            <Link className="btn-pop" to="/contact" style={{ background: 'linear-gradient(135deg, #ff9f43, #ff5252)' }}>
              {t('home.mintCta')}
            </Link>
          </div>

          <div style={{ textCenter: 'center' }}>
            <img
              src="/img/pop_product_packages.png"
              alt={t('home.mintImgAlt')}
              style={{ borderRadius: '24px', boxShadow: '0 16px 36px rgba(0,0,0,0.12)', border: '4px solid #ffffff' }}
            />
          </div>
        </div>
      </section>

      {/* ── 4. Works Ledger Section ────────────────────── */}
      <section className="sec-pop" id="works" style={{ background: '#fffbf5' }}>
        <div className="wrap">
          <div className="sec-pop__head">
            <span className="badge-pop" style={{ background: 'var(--pop-pink-bg)', color: 'var(--pop-pink)' }}>
              FULL ARCHIVE
            </span>
            <h2 className="sec-pop__title">ALL SHIPPED PROJECTS 📜</h2>
            <p className="sec-pop__subtitle">
              {t('home.worksSubtitle')}
            </p>
          </div>

          <WorksLedger />
        </div>
      </section>

      {/* ── 5. What I Build Capabilities Grid ────────── */}
      <section className="sec-pop" style={{ background: '#ffffff' }}>
        <div className="wrap">
          <div className="sec-pop__head">
            <span className="badge-pop">WHAT I BUILD</span>
            <h2 className="sec-pop__title">STUDIO CAPABILITIES 💡</h2>
          </div>

          <div className="pop-grid">
            {capabilities.map((c, i) => (
              <div key={c.key} className={`pop-card ${CARD_COLORS[i % CARD_COLORS.length]}`}>
                <div>
                  <span className="pop-card__tag">Core Skill #{i + 1}</span>
                  <h3 className="pop-card__title">{tr(c.title)}</h3>
                  <p className="pop-card__desc">{tr(c.body)}</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
                  {c.stack.map((s) => (
                    <span key={s} style={{ fontSize: '0.8rem', padding: '0.25rem 0.6rem', borderRadius: '12px', background: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>
                      #{s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
