import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import WorksLedger from '../components/WorksLedger.jsx'
import { site, capabilities } from '../data/site.js'
import { products } from '../data/products.js'

export default function Home() {
  return (
    <>
      <Seo path="/" />

      <section className="hero">
        <div className="wrap">
          <h1 className="hero__mark">
            {site.name}
            <span className="hero__dot" aria-hidden="true" />
          </h1>

          <p className="hero__line">{site.tagline}</p>
          <p className="hero__sub">{site.description}</p>

          <div className="hero__meta">
            <span>{site.location}</span>
            <span>Est. {site.founded}</span>
            <span>Solo studio</span>
            <span>{products.length} works shipped</span>
          </div>
        </div>
      </section>

      <section className="sec" id="works">
        <div className="wrap">
          <div className="sec__head">
            <h2 className="sec__title">Works</h2>
            <span className="sec__count">
              {String(products.length).padStart(2, '0')} entries
            </span>
          </div>
          <WorksLedger />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">What I build</p>
          <div className="caps">
            {capabilities.map((c) => (
              <div className="cap" key={c.key}>
                <h3 className="cap__title">{c.title}</h3>
                <p className="cap__body">{c.body}</p>
                <ul className="cap__stack">
                  {c.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <h2 className="cta__title">함께 만들 것이 있다면</h2>
          <p className="cta__body">
            제품 제휴, 퍼블리싱, 개발 의뢰 모두 같은 주소로 받습니다. 보통
            영업일 기준 2일 안에 답장합니다.
          </p>
          <Link className="btn" to="/contact">
            문의 보내기
          </Link>
        </div>
      </section>
    </>
  )
}
