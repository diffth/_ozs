import { useParams, Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import NotFound from './NotFound.jsx'
import { getProduct, statusLabel } from '../data/products.js'

export default function Work() {
  const { slug } = useParams()
  const p = getProduct(slug)

  if (!p) return <NotFound />

  return (
    <>
      <Seo
        title={p.name}
        description={p.summary}
        path={`/works/${p.slug}`}
        image={p.cover}
      />

      <div className="wrap">
        <Link className="back" to="/#works">
          ← Works
        </Link>
      </div>

      <header className="prod__head">
        <div className="wrap">
          <p className="prod__kind">
            {p.kind} · {statusLabel[p.status]} · {p.year}
          </p>
          <h1 className="prod__name">{p.name}</h1>
          <p className="prod__summary">{p.summary}</p>
        </div>
      </header>

      <div className="wrap">
        <div className="prod__cover">
          <img src={p.cover} alt={`${p.name} 대표 이미지`} />
        </div>

        <div className="prod__grid">
          <div>
            <p className="prod__desc">{p.description}</p>
            <div className="stores">
              {p.stores.map((s) => (
                <a
                  key={s.label}
                  className="btn"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              ))}
              {p.presskit && (
                <a className="btn btn--ghost" href={`/presskit/${p.slug}.zip`}>
                  프레스킷 받기
                </a>
              )}
            </div>
          </div>

          <div>
            <p className="eyebrow">Spec</p>
            <dl className="spec">
              {p.spec.map(([k, v]) => (
                <div className="spec__row" key={k}>
                  <dt className="spec__k">{k}</dt>
                  <dd className="spec__v">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {p.shots?.length > 0 && (
          <div className="shots">
            {p.shots.map((s, i) => (
              <img key={i} src={s} alt={`${p.name} 스크린샷 ${i + 1}`} loading="lazy" />
            ))}
          </div>
        )}
      </div>

      <section className="cta" style={{ marginTop: 'clamp(3rem, 8vw, 5rem)' }}>
        <div className="wrap">
          <h2 className="cta__title">{p.name}에 대해 더 궁금하다면</h2>
          <p className="cta__body">
            취재, 리뷰, 제휴 문의를 받고 있습니다.
          </p>
          <Link className="btn" to="/contact">
            문의 보내기
          </Link>
        </div>
      </section>
    </>
  )
}
