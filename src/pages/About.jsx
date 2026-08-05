import Seo from '../components/Seo.jsx'
import { site } from '../data/site.js'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <Seo title="About" description={`${site.name} 소개 — ${site.tagline}`} path="/about" />

      {/* Hero Header */}
      <section className="hero-pop" style={{ padding: '4rem 0 5rem' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="badge-pop" style={{ marginBottom: '1rem' }}>
            ABOUT OZS STUDIO 🌟
          </span>
          <h1 className="hero-pop__title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: '0 auto 1.5rem' }}>
            1인 스튜디오의 <span>특별한 에너지</span>
          </h1>
          <p className="hero-pop__desc" style={{ margin: '0 auto', maxWidth: '54ch' }}>
            기획부터 디자인, 풀스택 개발 및 배포까지! 한 사람의 밀도 높은 직관과 에너지로 최고의 디지털 제품을 만들어냅니다.
          </p>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider" style={{ background: '#fffbf5' }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="#48ecd0"
            fillOpacity="1"
            d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,21.3C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <section className="sec-pop">
        <div className="wrap">
          <div className="pop-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div className="pop-card pop-card--yellow">
              <div>
                <span className="pop-card__tag">PHILOSOPHY</span>
                <h2 className="pop-card__title">왜 1인 개발인가? 💡</h2>
                <p className="pop-card__desc">
                  소규모 제품에선 전달과 인수인계 비용이 개발보다 큰 법입니다. 기획, 시안, 코드 사이의 손실 없이 원래의 명확한 의도를 끝까지 유지합니다.
                </p>
              </div>
            </div>

            <div className="pop-card pop-card--pink">
              <div>
                <span className="pop-card__tag">WORKFLOW</span>
                <h2 className="pop-card__title">빠르고 똑똑한 일 방식 ⚡</h2>
                <p className="pop-card__desc">
                  가장 빠르게 작동하는 코어 핵심 프로토타입을 만들어 실제로 직접 경험해 봅니다. 검증된 진짜 중요한 핵심 기능에 모든 화력을 쏟아붓습니다.
                </p>
              </div>
            </div>

            <div className="pop-card pop-card--teal">
              <div>
                <span className="pop-card__tag">CREATOR</span>
                <h2 className="pop-card__title">대표 겸 개발자 👤</h2>
                <p className="pop-card__desc">
                  <strong>{site.business.ceo}</strong> — 아이디어 구상부터 최종 상용 서비스 배포까지 직접 손수 완성해 나갑니다.
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <Link to="/contact" className="btn-pop btn-pop--white" style={{ padding: '0.5rem 1.25rem' }}>
                    의뢰 보내기 💌
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
