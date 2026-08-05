import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Footer() {
  const b = site.business
  return (
    <footer className="ftr-pop">
      <div className="wrap">
        <div className="ftr-pop__in">
          <div className="ftr-pop__brand">
            ⚡ {site.name} <span style={{ fontSize: '1rem', color: 'var(--pop-yellow)', fontWeight: 500 }}>Studio</span>
          </div>
          <nav className="ftr-pop__links" aria-label="보조 메뉴">
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
          <span>상호: {b.company}</span> | <span>대표: {b.ceo}</span> | <span>사업자등록번호: {b.regNumber}</span>
          <br />
          <span>주소: {b.address}</span> | <span>전화: {b.tel}</span> | <span>이메일: <a href={`mailto:${site.email}`} style={{ color: 'var(--pop-yellow)' }}>{site.email}</a></span>
        </div>

        <div className="ftr-pop__copy">
          © {new Date().getFullYear()} {b.company}. Built with Energy & Passion 🌟
        </div>
      </div>
    </footer>
  )
}
