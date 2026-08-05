import { useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { products, statusLabel } from '../data/products.js'

/**
 * 출시 순서대로 쌓이는 장부(ledger). 행에 커서를 올리면
 * 커서를 따라다니는 미리보기가 뜹니다. (데스크톱 전용)
 */
export default function WorksLedger() {
  const peek = useRef(null)
  const [hovered, setHovered] = useState(null)

  const move = useCallback((e) => {
    const el = peek.current
    if (!el) return
    el.style.translate = `${e.clientX}px ${e.clientY}px`
  }, [])

  return (
    <>
      <div className="pop-ledger" onMouseMove={move}>
        {products.map((p) => (
          <Link
            key={p.slug}
            to={`/works/${p.slug}`}
            className="pop-ledger__row"
            onMouseEnter={() => setHovered(p)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(null)}
          >
            <span className="pop-ledger__idx">#{p.index}</span>

            <span>
              <div className="pop-ledger__name">{p.name}</div>
              <div style={{ fontSize: '0.9rem', color: '#636e72', marginTop: '0.2rem' }}>{p.summary}</div>
            </span>

            <span className="pop-ledger__kind">
              <span className="pop-ledger__tag">
                {p.kind} · {statusLabel[p.status]}
              </span>
            </span>

            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--pop-pink)' }}>{p.year}</span>
          </Link>
        ))}
      </div>

      <div className="peek" ref={peek} data-on={hovered ? 'true' : 'false'} aria-hidden="true">
        {hovered && <img src={hovered.thumb} alt="" />}
      </div>
    </>
  )
}
