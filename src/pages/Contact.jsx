import Seo from '../components/Seo.jsx'
import { site } from '../data/site.js'

// Web3Forms 또는 Formspree 의 엔드포인트로 교체하세요.
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

      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1 className="sec__title">무엇을 만들까요</h1>
          <p style={{ maxWidth: '44ch', color: 'var(--dim)', marginTop: '1rem' }}>
            제품 제휴, 퍼블리싱, 개발 의뢰 모두 환영합니다. 보통 영업일 기준
            2일 안에 답장합니다. 급하시면 {site.email} 로 바로 메일 주세요.
          </p>

          <form
            action={FORM_ENDPOINT}
            method="POST"
            style={{ maxWidth: '34rem', marginTop: '3rem' }}
          >
            <input type="hidden" name="access_key" value={ACCESS_KEY} />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" />

            <label className="field">
              <span className="field__label">이름 / 회사</span>
              <input type="text" name="name" required />
            </label>

            <label className="field">
              <span className="field__label">회신받을 이메일</span>
              <input type="email" name="email" required />
            </label>

            <label className="field">
              <span className="field__label">문의 종류</span>
              <select name="topic">
                <option>제품 제휴 · 퍼블리싱</option>
                <option>웹사이트 제작</option>
                <option>웹서비스 개발</option>
                <option>게임 관련</option>
                <option>취재 · 리뷰</option>
                <option>그 외</option>
              </select>
            </label>

            <label className="field">
              <span className="field__label">예산 범위 (선택)</span>
              <select name="budget">
                <option>미정</option>
                <option>500만원 미만</option>
                <option>500 – 1,500만원</option>
                <option>1,500 – 3,000만원</option>
                <option>3,000만원 이상</option>
              </select>
            </label>

            <label className="field">
              <span className="field__label">내용</span>
              <textarea
                name="message"
                required
                placeholder="만들고 싶은 것, 원하는 일정, 참고할 만한 사례를 적어주세요."
              />
            </label>

            <label className="consent">
              <input type="checkbox" name="consent" required />
              <span>
                문의 처리를 위해 이름과 이메일 주소를 수집하는 데 동의합니다.
                수집한 정보는 답변 후 1년간 보관하고 파기합니다.
              </span>
            </label>

            <button type="submit" className="btn">
              문의 보내기
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
