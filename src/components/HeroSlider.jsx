import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageProvider.jsx'

const INTERVAL = 5500

// 출시 준비 중인 게임을 히어로 액자 안에서 번갈아 보여줍니다.
// 첫 장면이 가장 많이 보이므로 앞에 둘수록 더 알리고 싶은 작품입니다.
const SLIDES = [
  {
    key: 'wind-courier',
    name: 'Wind Courier',
    webp: '/img/wind-courier.webp',
    jpg: '/img/wind-courier.jpg',
    alt: 'home.heroImgAlt',
    sticker: 'home.heroSticker',
    tone: 'yellow',
    href: 'https://diffth.itch.io/wind-courier',
  },
  {
    key: 'naias',
    name: 'NAIAS',
    webp: '/img/naias.webp',
    jpg: '/img/naias.jpg',
    alt: 'home.mintImgAlt',
    sticker: 'home.mintSticker',
    tone: 'blue',
  },
]

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

export default function HeroSlider() {
  const { t } = useLang()
  const [active, setActive] = useState(0)
  // 모션 최소화를 원하는 사용자에게는 처음부터 멈춘 상태로 보여줍니다.
  // 미리 렌더링된 HTML 과 첫 화면을 맞추려고 초기값은 false 로 두고 마운트 후에 읽습니다.
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (prefersReducedMotion()) setPaused(true)
  }, [])
  // 마우스를 올려 두거나 키보드 초점이 안에 있을 때는 잠시 멈춥니다.
  const [holding, setHolding] = useState(false)

  // 장면이 바뀔 때마다 타이머를 새로 걸어, 점을 눌러 넘겨도 곧바로 다음 장면으로 튀지 않게 합니다.
  useEffect(() => {
    if (paused || holding) return
    const id = window.setTimeout(() => setActive((i) => (i + 1) % SLIDES.length), INTERVAL)
    return () => window.clearTimeout(id)
  }, [active, paused, holding])

  const current = SLIDES[active]

  return (
    <div
      className="hero-pop__img-float hero-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label={t('home.sliderAria')}
      onMouseEnter={() => setHolding(true)}
      onMouseLeave={() => setHolding(false)}
      onFocus={() => setHolding(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setHolding(false)
      }}
    >
      {/* 스티커가 아래 점 버튼이 아니라 액자 모서리에 붙도록 둘을 한 칸에 묶습니다. */}
      <div className="hero-slider__stage">
        <div className="hero-pop__img-frame hero-slider__frame">
          {SLIDES.map((s, i) => {
            const isActive = i === active
            // 링크가 있는 작품만 액자 전체를 눌러 게임 페이지로 갈 수 있게 합니다.
            const Slide = s.href ? 'a' : 'div'
            const linkProps = s.href
              ? {
                  href: s.href,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  // 겹쳐 숨어 있는 장면의 링크는 Tab 순서에서 뺍니다.
                  tabIndex: isActive ? undefined : -1,
                }
              : {}
            return (
              <Slide
                key={s.key}
                className="hero-slider__slide"
                data-active={isActive ? 'true' : 'false'}
                aria-hidden={isActive ? undefined : 'true'}
                {...linkProps}
              >
                <picture>
                  <source srcSet={s.webp} type="image/webp" />
                  <img
                    src={s.jpg}
                    alt={t(s.alt)}
                    width="1672"
                    height="941"
                    fetchPriority={i === 0 ? 'high' : undefined}
                    loading={i === 0 ? undefined : 'lazy'}
                  />
                </picture>
              </Slide>
            )
          })}
        </div>

        {/* key 를 바꿔 장면이 넘어갈 때마다 스티커가 다시 튀어나오게 합니다. */}
        <span key={current.key} className={`hero-pop__sticker hero-pop__sticker--${current.tone}`}>
          {t(current.sticker)}
        </span>
      </div>

      <div className="hero-slider__controls">
        {SLIDES.map((s, i) => (
          <button
            key={s.key}
            type="button"
            className="hero-slider__dot"
            aria-label={s.name}
            aria-current={i === active ? 'true' : undefined}
            onClick={() => setActive(i)}
          />
        ))}
        <button
          type="button"
          className="hero-slider__toggle"
          aria-label={paused ? t('home.sliderPlay') : t('home.sliderPause')}
          onClick={() => setPaused((p) => !p)}
        >
          {paused ? '▶' : '❚❚'}
        </button>
      </div>
    </div>
  )
}
