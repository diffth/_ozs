import { useCallback, useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageProvider.jsx'

const INTERVAL = 4500

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

// 카드 줄을 가로로 넘기는 슬라이더입니다. 한 화면에 몇 장이 보일지는 CSS 가 정하고,
// 여기서는 카드 한 장 폭만큼씩 스크롤을 옮기기만 합니다.
export default function CardSlider({ label, children }) {
  const { t } = useLang()
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  // 화면 폭에 따라 끝까지 넘기는 데 필요한 칸 수가 달라집니다.
  const [maxIndex, setMaxIndex] = useState(0)
  const [paused, setPaused] = useState(prefersReducedMotion)
  const [holding, setHolding] = useState(false)

  const getStep = useCallback(() => {
    const track = trackRef.current
    const [first, second] = track?.children ?? []
    if (!first) return 0
    return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const measure = () => {
      const step = getStep()
      if (!step) return
      setMaxIndex(Math.max(0, Math.round((track.scrollWidth - track.clientWidth) / step)))
      setIndex(Math.round(track.scrollLeft / step))
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(track)
    // 손으로 밀어 넘긴 경우에도 점 표시가 따라가도록 스크롤 위치에서 현재 칸을 다시 읽습니다.
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measure)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      ro.disconnect()
      cancelAnimationFrame(frame)
      track.removeEventListener('scroll', onScroll)
    }
  }, [getStep])

  const goTo = useCallback(
    (i) => {
      const track = trackRef.current
      if (!track) return
      track.scrollTo({ left: i * getStep(), behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    },
    [getStep],
  )

  useEffect(() => {
    if (paused || holding || maxIndex === 0) return
    const id = window.setTimeout(() => goTo(index >= maxIndex ? 0 : index + 1), INTERVAL)
    return () => window.clearTimeout(id)
  }, [index, maxIndex, paused, holding, goTo])

  return (
    <div
      className="card-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHolding(true)}
      onMouseLeave={() => setHolding(false)}
      onTouchStart={() => setHolding(true)}
      onTouchEnd={() => setHolding(false)}
      onFocus={() => setHolding(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setHolding(false)
      }}
    >
      <div className="card-slider__track" ref={trackRef}>
        {children}
      </div>

      {/* 카드가 한 화면에 다 들어가면 넘길 게 없으니 조작 버튼도 숨깁니다. */}
      {maxIndex > 0 && (
        <div className="card-slider__controls">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              className="card-slider__dot"
              aria-label={`${i + 1} / ${maxIndex + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => goTo(i)}
            />
          ))}
          <button
            type="button"
            className="card-slider__toggle"
            aria-label={paused ? t('home.sliderPlay') : t('home.sliderPause')}
            onClick={() => setPaused((p) => !p)}
          >
            {paused ? '▶' : '❚❚'}
          </button>
        </div>
      )}
    </div>
  )
}
