import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import WorksLedger from '../components/WorksLedger.jsx'
import { site, capabilities } from '../data/site.js'
import { products } from '../data/products.js'

export default function Home() {
  return (
    <>
      <Seo path="/" />

      {/* ── 1. Pop Hero Section ──────────────────────── */}
      <section className="hero-pop">
        <div className="wrap hero-pop__content">
          <div>
            <span className="badge-pop" style={{ marginBottom: '1.25rem' }}>
              🌟 1인 개발 스튜디오 ozs
            </span>
            <h1 className="hero-pop__title">
              WE BREW <span>CREATIVE</span> ENERGY!
            </h1>
            <p className="hero-pop__desc">
              트렌디한 웹사이트, 감각적인 웹서비스, 몰입감 넘치는 게임까지! 
              상상을 생동감 있는 디지털 경험으로 직접 기획하고 구현합니다.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link className="btn-pop" to="/contact">
                프로젝트 의뢰하기 🚀
              </Link>
              <a className="btn-pop btn-pop--white" href="#works">
                작품 구경하기 ✨
              </a>
            </div>
          </div>

          <div className="hero-pop__img-wrap">
            <div className="hero-pop__img-frame">
              <img 
                src="/img/pop_hero_drink.png" 
                alt="ozs Pop Energy Drink & Coffee Mockup" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Wave Divider ─────────────────────────── */}
      <div className="wave-divider" style={{ background: '#fffbf5' }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="#48ecd0"
            fillOpacity="1"
            d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,21.3C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* ── 2. Order Now / Catalog Cards Section ───────── */}
      <section className="sec-pop" id="featured">
        <div className="wrap">
          <div className="sec-pop__head">
            <span className="badge-pop" style={{ background: 'var(--pop-pink-bg)', color: 'var(--pop-pink)' }}>
              FEATURED PROJECTS
            </span>
            <h2 className="sec-pop__title">EXPLORE OUR WORKS! ⚡</h2>
            {/* Squiggle wave decoration line */}
            <svg className="squiggle-line" viewBox="0 0 100 20" fill="none">
              <path
                d="M5 10 Q 25 0, 45 10 T 85 10 T 125 10"
                stroke="var(--pop-orange)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <p className="sec-pop__subtitle">
              직접 개발하고 출품한 비비드하고 독창적인 웹서비스 및 라인업을 만나보세요.
            </p>
          </div>

          <div className="pop-grid">
            {/* Yellow Card */}
            <div className="pop-card pop-card--yellow">
              <div>
                <span className="pop-card__tag">Interactive Game</span>
                <h3 className="pop-card__title">Atelier Noct</h3>
                <p className="pop-card__desc">
                  몽환적인 그래픽과 감성적인 픽셀 아트 사운드가 돋보이는 모바일 힐링 퍼즐 게임입니다.
                </p>
              </div>
              <div className="pop-card__footer">
                <span className="pop-card__price">2026.04</span>
                <Link to="/works/atelier-noct" className="btn-pop btn-pop--white" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
                  자세히 보기 →
                </Link>
              </div>
            </div>

            {/* Soft Pink Card */}
            <div className="pop-card pop-card--pink">
              <div>
                <span className="pop-card__tag">3D Web App</span>
                <h3 className="pop-card__title">Lumen Drift</h3>
                <p className="pop-card__desc">
                  브라우저 상에서 매끄럽게 구동되는 인터랙티브 3D 비주얼라이저 및 디자인 툴킷입니다.
                </p>
              </div>
              <div className="pop-card__footer">
                <span className="pop-card__price">2025.11</span>
                <Link to="/works/lumen-drift" className="btn-pop btn-pop--white" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
                  자세히 보기 →
                </Link>
              </div>
            </div>

            {/* Deep Teal Card */}
            <div className="pop-card pop-card--teal">
              <div>
                <span className="pop-card__tag">SaaS Dashboard</span>
                <h3 className="pop-card__title">Tideboard</h3>
                <p className="pop-card__desc">
                  1인 창작자와 소규모 팀을 위한 직관적이고 깔끔한 워크플로우 분석 플랫폼입니다.
                </p>
              </div>
              <div className="pop-card__footer">
                <span className="pop-card__price">2025.06</span>
                <Link to="/works/tideboard" className="btn-pop btn-pop--teal" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem', background: '#ffffff', color: 'var(--pop-teal)' }}>
                  자세히 보기 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Mint Energy Banner Section ───────────────── */}
      <section className="mint-sec">
        <div className="wrap mint-sec__wrap">
          <div>
            <span className="badge-pop" style={{ background: '#ffffff', color: '#004d40', marginBottom: '1.25rem' }}>
              READY TO LAUNCH
            </span>
            <h2 className="mint-sec__title">NEED SOME ENERGY ON YOUR PROJECT?</h2>
            <p className="mint-sec__desc">
              기획부터 UI/UX 디자인, 풀스택 개발까지! 
              망설이지 말고 당신의 아디이어에 통통 튀는 활력을 불어넣어 보세요.
            </p>
            <Link className="btn-pop" to="/contact" style={{ background: 'linear-gradient(135deg, #ff9f43, #ff5252)' }}>
              지금 문의하기 💌
            </Link>
          </div>

          <div style={{ textCenter: 'center' }}>
            <img 
              src="/img/pop_product_packages.png" 
              alt="ozs Brand Package Mockup" 
              style={{ borderRadius: '24px', boxShadow: '0 16px 36px rgba(0,0,0,0.12)', border: '4px solid #ffffff' }}
            />
          </div>
        </div>
      </section>

      {/* ── 4. Works Ledger Section ────────────────────── */}
      <section className="sec-pop" id="works" style={{ background: '#fffbf5' }}>
        <div className="wrap">
          <div className="sec-pop__head">
            <span className="badge-pop" style={{ background: 'var(--pop-pink-bg)', color: 'var(--pop-pink)' }}>
              FULL ARCHIVE
            </span>
            <h2 className="sec-pop__title">ALL SHIPPED PROJECTS 📜</h2>
            <p className="sec-pop__subtitle">
              ozs 스튜디오가 하나씩 완성하고 출시한 전체 프로젝트 아카이브입니다.
            </p>
          </div>

          <WorksLedger />
        </div>
      </section>

      {/* ── 5. What I Build Capabilities Grid ────────── */}
      <section className="sec-pop" style={{ background: '#ffffff' }}>
        <div className="wrap">
          <div className="sec-pop__head">
            <span className="badge-pop">WHAT I BUILD</span>
            <h2 className="sec-pop__title">STUDIO CAPABILITIES 💡</h2>
          </div>

          <div className="pop-grid">
            {capabilities.map((c, i) => {
              const bgColors = ['pop-card--yellow', 'pop-card--pink', 'pop-card--teal']
              return (
                <div key={c.key} className={`pop-card ${bgColors[i % bgColors.length]}`}>
                  <div>
                    <span className="pop-card__tag">Core Skill #{i + 1}</span>
                    <h3 className="pop-card__title">{c.title}</h3>
                    <p className="pop-card__desc">{c.body}</p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
                    {c.stack.map((s) => (
                      <span key={s} style={{ fontSize: '0.8rem', padding: '0.25rem 0.6rem', borderRadius: '12px', background: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>
                        #{s}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
