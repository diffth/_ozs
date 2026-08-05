import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <>
      <Seo title="404" description="요청한 페이지를 찾을 수 없습니다." path="/404" />
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">404</p>
          <h1 className="sec__title">이 주소에는 아무것도 없습니다</h1>
          <p style={{ color: 'var(--dim)', margin: '1rem 0 2rem', maxWidth: '40ch' }}>
            주소가 바뀌었거나, 아직 만들지 않은 페이지입니다.
          </p>
          <Link className="btn" to="/">홈으로</Link>
        </div>
      </section>
    </>
  )
}
