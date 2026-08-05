import { Link, NavLink } from 'react-router-dom'
import { site } from '../data/site.js'
import { useLang } from '../i18n/LanguageProvider.jsx'
import LangSwitch from './LangSwitch.jsx'

export default function Header() {
  const { t } = useLang()

  return (
    <header className="hdr">
      <div className="wrap hdr__in">
        <Link to="/" className="hdr__mark" aria-label={`${site.name} ${t('common.homeAria')}`}>
          {site.name} <span className="hdr__mark-sun" title="Energetic Studio"></span>
        </Link>
        <nav className="hdr__nav" aria-label={t('common.mainNavAria')}>
          <NavLink to="/">Home</NavLink>
          <Link to="/#works">Works</Link>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <LangSwitch />
          <Link to="/contact" className="btn-pop" style={{ padding: '0.45rem 1.25rem', fontSize: '0.9rem' }}>
            Get Started 🚀
          </Link>
        </nav>
      </div>
    </header>
  )
}
