import { Link, NavLink } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Header() {
  return (
    <header className="hdr">
      <div className="wrap hdr__in">
        <Link to="/" className="hdr__mark" aria-label={`${site.name} 홈`}>
          {site.name}
        </Link>
        <nav className="hdr__nav" aria-label="주요 메뉴">
          <Link to="/#works">Works</Link>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
