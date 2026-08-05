import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Footer() {
  const b = site.business
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__top">
          <div className="ftr__mark">{site.name}</div>
          <nav className="ftr__links" aria-label="보조 메뉴">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {site.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="ftr__biz">
          <span>상호 {b.company}</span>
          <span>대표 {b.ceo}</span>
          <span>사업자등록번호 {b.regNumber}</span>
          <br />
          <span>주소 {b.address}</span>
          <span>전화 {b.tel}</span>
          <span>
            이메일 <a href={`mailto:${site.email}`}>{site.email}</a>
          </span>
        </div>

        <div className="ftr__copy">
          © {new Date().getFullYear()} {b.company}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
