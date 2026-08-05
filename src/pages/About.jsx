import Seo from '../components/Seo.jsx'
import { site } from '../data/site.js'

export default function About() {
  return (
    <>
      <Seo title="About" description={`${site.name} 소개 — ${site.tagline}`} path="/about" />

      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">About</p>
          <h1 className="sec__title">{site.tagline}</h1>

          <div className="prose" style={{ marginTop: '2.5rem' }}>
            <p>
              {site.name}는 {site.location}에 있는 1인 개발 스튜디오입니다.
              웹사이트, 웹서비스, 게임을 만듭니다. 기획, 디자인, 개발, 배포,
              운영을 <strong>한 사람이 이어서</strong> 합니다.
            </p>

            <h2>왜 혼자인가</h2>
            <p>
              작은 제품에서는 인수인계 비용이 개발 비용보다 큽니다. 기획자가
              적은 문서, 디자이너가 넘긴 시안, 개발자가 읽은 해석 사이에서
              원래 의도가 조금씩 깎여 나갑니다. 혼자 만들면 그 손실이 없습니다.
              대신 규모를 욕심내지 않습니다.
            </p>

            <h2>일하는 방식</h2>
            <p>
              먼저 가장 작은 형태로 만들어 실제로 써 봅니다. 쓰다 보면 처음
              계획서에 적힌 기능 중 절반은 필요 없다는 게 드러납니다. 남은
              절반에 시간을 몰아 씁니다.
            </p>
            <p>
              진행 중에는 매주 한 번, 작동하는 화면을 보여드립니다. 문서 대신
              돌아가는 것으로 이야기하는 편이 서로 빠릅니다.
            </p>

            <h2>대표</h2>
            <p>
              <strong>{site.business.ceo}</strong> — 기획부터 배포까지.
              연락은 <a href={`mailto:${site.email}`} style={{ color: 'var(--frost)' }}>{site.email}</a> 으로 주세요.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
