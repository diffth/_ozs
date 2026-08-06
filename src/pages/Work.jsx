import { useParams, Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import NotFound from './NotFound.jsx'
import { getProduct, statusLabel } from '../data/products.js'
import { useLang } from '../i18n/LanguageProvider.jsx'

export default function Work() {
  const { slug } = useParams()
  const { t, tr } = useLang()
  const p = getProduct(slug)

  if (!p) return <NotFound />

  return (
    <>
      <Seo
        title={p.name}
        description={tr(p.summary)}
        path={`/works/${p.slug}`}
        image={p.cover}
      />

      <section className="hero-pop" style={{ padding: '3.5rem 0 4.5rem' }}>
        <div className="wrap">
          <Link to="/#works" className="btn-pop btn-pop--white" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            {t('work.back')}
          </Link>
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <span className="badge-pop">{p.kind}</span>
            <span className="badge-pop" style={{ background: 'var(--pop-yellow)', color: '#4a3400' }}>
              {tr(statusLabel[p.status])} · {p.year}
            </span>
          </div>
          <h1 className="hero-pop__title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1rem' }}>
            {p.name}
          </h1>
          <p className="hero-pop__desc" style={{ maxWidth: '56ch' }}>
            {tr(p.summary)}
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

      <div className="wrap" style={{ padding: '3rem var(--gutter)' }}>
        <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 45px rgba(0,0,0,0.1)', border: '4px solid #ffffff', marginBottom: '3rem' }}>
          <img src={p.cover} alt={`${p.name} ${t('work.coverAlt')}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>

        <div className="pop-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))' }}>
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '2rem', boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--pop-pink)', marginTop: 0 }}>Project Overview</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--pop-text-dark)' }}>{tr(p.description)}</p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              {p.stores.map((s) => (
                <a key={s.href} className="btn-pop" href={s.href} target="_blank" rel="noreferrer" style={{ padding: '0.6rem 1.4rem' }}>
                  {tr(s.label)} ↗
                </a>
              ))}
            </div>
          </div>

          <div style={{ background: 'var(--pop-pink-bg)', borderRadius: '24px', padding: '2rem', border: '3px solid var(--pop-pink-soft)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--pop-pink)', marginTop: 0 }}>Technical Spec</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {p.spec.map((row) => (
                <div key={tr(row.label)} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem 1rem', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px dashed rgba(255,101,132,0.3)' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: '#4a5568' }}>{tr(row.label)}</span>
                  <span style={{ fontWeight: 600, color: 'var(--pop-pink-bright)' }}>{tr(row.value)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {p.shots?.length > 0 && (
          <div style={{ marginTop: '4rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--pop-pink)', textAlign: 'center', marginBottom: '2rem' }}>
              SCREENSHOTS 📸
            </h2>
            <div className="pop-grid">
              {p.shots.map((s, i) => (
                <img
                  key={i}
                  src={s}
                  alt={`${p.name} ${t('work.shotAlt')} ${i + 1}`}
                  loading="lazy"
                  style={{ borderRadius: '20px', border: '3px solid #ffffff', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <section className="mint-sec" style={{ marginTop: '4rem' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 className="mint-sec__title" style={{ margin: '0 auto 1rem' }}>
            {t('work.outroTitle').replace('{name}', p.name)}
          </h2>
          <p className="mint-sec__desc" style={{ margin: '0 auto 2rem' }}>
            {t('work.outroDesc')}
          </p>
          <Link className="btn-pop" to="/contact" style={{ background: 'linear-gradient(135deg, #ff9f43, #ff5252)' }}>
            {t('common.inquire')}
          </Link>
        </div>
      </section>
    </>
  )
}
