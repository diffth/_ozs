import Seo from '../components/Seo.jsx'
import { site } from '../data/site.js'

const FORM_ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = 'YOUR-ACCESS-KEY-HERE'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="제품 제휴, 퍼블리싱, 개발 의뢰 문의를 받습니다."
        path="/contact"
      />

      <section className="hero-pop" style={{ padding: '4rem 0 5rem' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="badge-pop" style={{ marginBottom: '1rem' }}>
            LET'S TALK 💌
          </span>
          <h1 className="hero-pop__title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: '0 auto 1.5rem' }}>
            무엇을 함께 <span>만들어볼까요?</span>
          </h1>
          <p className="hero-pop__desc" style={{ margin: '0 auto', maxWidth: '52ch' }}>
            제품 제휴, 퍼블리싱, 웹서비스 및 게임 개발 의뢰 모두 환영합니다. 보통 영업일 기준 2일 안에 답변드립니다.
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
        <div className="wrap" style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '28px',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              boxShadow: '0 20px 45px rgba(0,0,0,0.08)',
              width: '100%',
              maxWidth: '38rem',
              border: '4px solid var(--pop-pink-bg)'
            }}
          >
            <form action={FORM_ENDPOINT} method="POST">
              <input type="hidden" name="access_key" value={ACCESS_KEY} />
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" />

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--pop-text-dark)', marginBottom: '0.5rem' }}>
                  이름 / 회사명
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="성함이나 회사명을 입력해 주세요"
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.25rem',
                    borderRadius: '16px',
                    border: '2px solid #e2e8f0',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--pop-text-dark)', marginBottom: '0.5rem' }}>
                  회신받을 이메일
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.25rem',
                    borderRadius: '16px',
                    border: '2px solid #e2e8f0',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--pop-text-dark)', marginBottom: '0.5rem' }}>
                  문의 종류
                </label>
                <select
                  name="topic"
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.25rem',
                    borderRadius: '16px',
                    border: '2px solid #e2e8f0',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    background: '#ffffff'
                  }}
                >
                  <option>제품 제휴 · 퍼블리싱</option>
                  <option>웹사이트 제작</option>
                  <option>웹서비스 개발</option>
                  <option>게임 관련</option>
                  <option>취재 · 리뷰</option>
                  <option>그 외</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--pop-text-dark)', marginBottom: '0.5rem' }}>
                  내용
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="만들고 싶은 프로젝트, 일정, 예산이나 희망 사항을 자유롭게 적어주세요."
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.25rem',
                    borderRadius: '16px',
                    border: '2px solid #e2e8f0',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button type="submit" className="btn-pop" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>
                🚀 메시지 전송하기
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
