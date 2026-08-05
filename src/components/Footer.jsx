import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { useLang } from '../i18n/LanguageProvider.jsx'

export default function Footer() {
  const { t, tr } = useLang()
  const b = site.business

  return (
    <footer className="ftr-pop">
      <div className="wrap">
        <div className="ftr-pop__in">
          <div className="ftr-pop__brand">
            ⚡ {site.name} <span style={{ fontSize: '1rem', color: 'var(--pop-yellow)', fontWeight: 500 }}>Studio</span>
          </div>
          <nav className="ftr-pop__links" aria-label={t('common.subNavAria')}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {site.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(224, 247, 250, 0.75)', lineHeight: 1.8 }}>
          <span>{t('footer.company')}: {tr(b.company)}</span> | <span>{t('footer.ceo')}: {tr(b.ceo)}</span> | <span>{t('footer.regNumber')}: {b.regNumber}</span>
          <br />
          <span>{t('footer.address')}: {tr(b.address)}</span> | <span>{t('footer.tel')}: {b.tel}</span> | <span>{t('footer.email')}: <a href={`mailto:${site.email}`} style={{ color: 'var(--pop-yellow)' }}>{site.email}</a></span>
        </div>

        <div className="ftr-pop__copy">
          © {new Date().getFullYear()} {tr(b.company)}. {t('footer.copy')}
        </div>
      </div>
    </footer>
  )
}
