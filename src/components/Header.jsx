import { Link, NavLink } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Header() {
  return (
    <header className="hdr">
      <div className="wrap hdr__in">
        <Link to="/" className="hdr__mark" aria-label={`${site.name} 홈`}>
          {site.name} <span className="hdr__mark-sun" title="Energetic Studio"></span>
        </Link>
        <nav className="hdr__nav" aria-label="주요 메뉴">
          <NavLink to="/">Home</NavLink>
          <Link to="/#works">Works</Link>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <Link to="/contact" className="btn-pop" style={{ padding: '0.45rem 1.25rem', fontSize: '0.9rem' }}>
            Get Started 🚀
          </Link>
        </nav>
      </div>
    </header>
  )
}
