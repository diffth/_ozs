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
      <div className="ledger" onMouseMove={move}>
        {products.map((p) => (
          <Link
            key={p.slug}
            to={`/works/${p.slug}`}
            className="ledger__row"
            onMouseEnter={() => setHovered(p)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(null)}
          >
            <span className="ledger__idx">{p.index}</span>

            <span>
              <span className="ledger__name">{p.name}</span>
              <span className="ledger__summary">{p.summary}</span>
            </span>

            <span className="ledger__kind">
              <span className={`ledger__tag ledger__tag--${p.status}`}>
                {p.kind} · {statusLabel[p.status]}
              </span>
            </span>

            <span className="ledger__year">{p.year}</span>
          </Link>
        ))}
      </div>

      <div className="peek" ref={peek} data-on={hovered ? 'true' : 'false'} aria-hidden="true">
        {hovered && <img src={hovered.thumb} alt="" />}
      </div>
    </>
  )
}
