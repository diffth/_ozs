import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../data/site.js'
import { useLang } from '../i18n/LanguageProvider.jsx'
import LangSwitch from './LangSwitch.jsx'

export default function Header() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const close = () => setOpen(false)

  // 다른 페이지(또는 같은 페이지의 앵커)로 이동하면 모바일 메뉴를 닫습니다.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  // 메뉴가 열려 있는 동안에는 Esc 로 닫을 수 있게, 창을 넓히면 저절로 닫히게.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className="hdr" data-open={open ? 'true' : 'false'}>
      <div className="wrap hdr__in">
        <Link to="/" className="hdr__mark" aria-label={`${site.name} ${t('common.homeAria')}`} onClick={close}>
          {site.name} <span className="hdr__mark-sun" title="Energetic Studio"></span>
        </Link>

        <button
          type="button"
          className="hdr__toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={t(open ? 'common.menuClose' : 'common.menuOpen')}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="hdr__toggle-bars" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>

        <nav id="site-nav" className="hdr__nav" aria-label={t('common.mainNavAria')}>

          <Link to="/#works" onClick={close}>Works</Link>
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
          <LangSwitch />
          <Link to="/contact" className="btn-pop hdr__cta" onClick={close}>
            Get Started 🚀
          </Link>
        </nav>
      </div>

      <div className="hdr__backdrop" onClick={close} aria-hidden="true" />
    </header>
  )
}
