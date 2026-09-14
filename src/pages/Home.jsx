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
              {t('home.heroTitleLead')} <span>{t('home.heroTitleHighlight')}</span> {t('home.heroTitleTrail')}
            </h1>
            <p className="hero-pop__desc">
              {t('home.heroDesc')}
            </p>
            <div className="hero-pop__cta" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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

      {/* ── 2. Order Now / Catalog Cards Section ───────── */}
      <section className="sec-pop" id="featured">
        <div className="wrap">
          <div className="sec-pop__head">
            <span className="badge-pop" style={{ background: 'var(--pop-pink-bg)', color: 'var(--pop-pink)' }}>
              FEATURED PROJECTS
            </span>
            <h2 className="sec-pop__title">{t('home.featuredTitle')}</h2>
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
                  <span className="pop-card__tag">{tr(f.tag)}</span>
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
      {/* 민트 섹션의 위·아래 경계도 히어로와 같은 파형으로 잡습니다.
          아래쪽 물결은 1/4 주기 어긋나게 두어 두 변이 엇갈려 보입니다. */}
      <div className="mint-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="var(--pop-mint-bright)"
            d="M0,60 C183,86.7 367,86.7 550,60 C733,33.3 917,33.3 1100,60 C1283,86.7 1467,86.7 1650,60 L1650,120 L-1100,120 Z"
          ></path>
        </svg>
      </div>

      <section className="mint-sec" id="launch">
        <div className="wrap mint-sec__wrap">
          <div>
            <span className="badge-pop" style={{ background: '#ffffff', color: '#004d40', marginBottom: '1.25rem' }}>
              READY TO LAUNCH
            </span>
            <h2 className="mint-sec__title">{t('home.mintTitle')}</h2>
            <p className="mint-sec__desc">
              {t('home.mintDesc')}
            </p>
            <Link className="btn-pop" to="/contact" style={{ background: 'linear-gradient(135deg, #ff9f43, #ff5252)' }}>
              {t('home.mintCta')}
            </Link>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src="/img/pop_product_packages.png"
              alt={t('home.mintImgAlt')}
              style={{ width: '100%', height: 'auto', borderRadius: '24px', boxShadow: '0 16px 36px rgba(0,0,0,0.12)', border: '4px solid #ffffff' }}
            />
          </div>
        </div>
      </section>

      <div className="mint-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="var(--pop-mint-bright)"
            d="M-825,60 C-642,86.7 -458,86.7 -275,60 C-92,33.3 92,33.3 275,60 C458,86.7 642,86.7 825,60 C1008,33.3 1192,33.3 1375,60 C1558,86.7 1742,86.7 1925,60 L1925,0 L-1100,0 Z"
          ></path>
        </svg>
      </div>

      {/* ── 4. Works Ledger Section ────────────────────── */}
      <section className="sec-pop" id="works" style={{ background: '#fffbf5' }}>
        <div className="wrap">
          <div className="sec-pop__head">
            <span className="badge-pop" style={{ background: 'var(--pop-pink-bg)', color: 'var(--pop-pink)' }}>
              FULL ARCHIVE
            </span>
            <h2 className="sec-pop__title">{t('home.worksTitle')}</h2>
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
            <h2 className="sec-pop__title">{t('home.capabilitiesTitle')}</h2>
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
