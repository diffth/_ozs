import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { useLang } from '../i18n/LanguageProvider.jsx'

// Wrap each character so flex can space them out; CSS justify skips Hangul without spaces.
const spread = (text) => [...text].map((ch, i) => <span key={i}>{ch}</span>)

export default function Footer() {
  const { t, tr } = useLang()
  const b = site.business

  return (
    <footer className="ftr-pop">
      <div className="wrap">
        <div className="ftr-pop__in">
          <div>
            <div className="ftr-pop__brand">{tr(b.company)} ({site.name})</div>
            <p className="ftr-pop__tagline">{tr(site.tagline)}</p>
          </div>
          <nav className="ftr-pop__links" aria-label={t('common.subNavAria')}>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {site.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="ftr-pop__info">
          <dl className="ftr-pop__dl">
            <dt>{t('footer.company')}</dt>
            <dd className="ftr-pop__strong">{tr(b.company)}</dd>
            <dt className="ftr-pop__dt--spread">
              <span className="ftr-pop__chars">{spread(t('footer.ceo'))}</span>
              <span className="ftr-pop__sizer" aria-hidden="true">{t('footer.company')}</span>
            </dt>
            <dd>{tr(b.ceo)}</dd>
            <dt>{t('footer.regNumber')}</dt>
            <dd>{b.regNumber}</dd>
          </dl>
          <dl className="ftr-pop__dl">
            <dt className="ftr-pop__dt--spread">
              <span className="ftr-pop__chars">{spread(t('footer.address'))}</span>
              <span className="ftr-pop__sizer" aria-hidden="true">{t('footer.company')}</span>
            </dt>
            <dd>{tr(b.address)}</dd>
            <dt className="ftr-pop__dt--spread">
              <span className="ftr-pop__chars">{spread(t('footer.tel'))}</span>
              <span className="ftr-pop__sizer" aria-hidden="true">{t('footer.company')}</span>
            </dt>
            <dd>
              <a className="ftr-pop__accent" href={`tel:${b.tel}`}>{b.tel}</a>
            </dd>
            <dt>{t('footer.email')}</dt>
            <dd>
              <a className="ftr-pop__mail" href={`mailto:${site.email}`}>{site.email}</a>
            </dd>
          </dl>
        </div>

        <div className="ftr-pop__bottom">
          <p>© {new Date().getFullYear()} {tr(b.company)}. All Rights Reserved.</p>
          <p>{t('footer.copy')}</p>
        </div>
      </div>
    </footer>
  )
}
