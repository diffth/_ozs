# ozs.co.kr

1인 개발 스튜디오 홈페이지. React 19 + Vite 6 + React Router 7, Cloudflare Pages 배포.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ 생성 (vite build + 정적 HTML/사이트맵 생성)
npm run preview  # 빌드 결과 확인
```

---

## 1. 가장 먼저 바꿀 것

| 파일 | 내용 |
|---|---|
| `src/data/site.js` | 상호, 대표자명, **사업자등록번호**, 주소, 전화, 이메일, 소셜 링크 |
| `src/data/products.js` | 샘플 제품 3건 → 실제 제품으로 교체 |
| `src/pages/Contact.jsx` | `ACCESS_KEY` 를 Web3Forms 키로 교체 |
| `src/pages/About.jsx` | 소개 문구 |
| `public/img/` | 임시 SVG → 실제 스크린샷 |

사업자 정보는 푸터에 자동으로 들어갑니다. 현재 `000-00-00000` 같은 자리표시자가 들어 있으니 **공개 전에 반드시 실제 값으로 바꾸세요.**

---

## 2. 제품 추가하는 법

`src/data/products.js` 배열 맨 앞에 항목 하나를 추가하면 끝입니다. 라우트, 홈 목록, 사이트맵, OG 태그가 전부 따라옵니다.

```js
{
  slug: 'my-game',            // → /works/my-game
  index: '04',                // 출시 순번
  name: 'My Game',
  kind: 'Game',               // Game | Web Service | Website
  year: '2026',
  status: 'released',         // released | in-development | archived
  summary: '한 줄 소개.',
  description: '3~5줄 설명.',
  thumb: '/img/my-game.svg',  // 목록 hover 미리보기
  cover: '/img/my-game.jpg',  // 상세 상단 + OG 이미지
  shots: ['/img/my-game-1.jpg'],
  spec: [['플랫폼', 'PC'], ['엔진', 'Unity 6']],
  stores: [{ label: 'Steam', href: 'https://...' }],
  presskit: true,             // true 면 /presskit/my-game.zip 버튼 노출
}
```

프레스킷 zip 은 `public/presskit/{slug}.zip` 에 직접 넣으면 됩니다.

---

## 3. 구조

```
src/
├── data/
│   ├── site.js         ← 회사 정보, 메뉴, 역량 소개
│   └── products.js     ← 제품 목록 (여기만 고치면 사이트 전체 반영)
├── components/
│   ├── Header.jsx  Footer.jsx  ScrollToTop.jsx
│   ├── Seo.jsx         ← React 19 네이티브 메타 태그
│   └── WorksLedger.jsx ← 홈의 제품 목록 (커서 따라오는 미리보기)
├── pages/
│   ├── Home.jsx  Work.jsx  About.jsx  Contact.jsx  NotFound.jsx
└── styles/global.css   ← 디자인 토큰 전부 :root 에 있음
scripts/
├── build-static.mjs      ← 빌드 후 라우트별 HTML + sitemap.xml 생성
└── make-placeholders.mjs ← 임시 이미지 생성 (실제 이미지 넣으면 삭제 가능)
public/
├── _redirects  _headers  robots.txt  favicon.svg
```

---

## 4. SPA인데 SEO는 괜찮은가

`npm run build` 는 `dist/works/lumen-drift/index.html` 처럼 **라우트마다 실제 HTML 파일**을 만들고, 그 안의 `<title>` 과 OG 태그를 해당 페이지 것으로 바꿔 넣습니다.

- 구글 — JS 를 실행하므로 본문까지 정상 색인
- 카카오톡 / 디스코드 / X — JS 를 실행하지 않지만, 필요한 건 메타 태그뿐이라 썸네일·제목이 정상 출력
- 네이버 — 메타 태그 기반이라 문제없음

⚠️ `og:image` 는 지금 SVG 라 **카카오톡·X 에서 썸네일이 뜨지 않습니다.** 실제 운영 전에 **1200×630 PNG 또는 JPG** 로 교체하세요.

본문 HTML까지 정적으로 필요해지면 (예: 개발 블로그 시작) `vite-react-ssg` 를 얹으면 됩니다. 코드 구조는 그대로 두고 진입점만 바꾸면 됩니다.

---

## 5. Cloudflare Pages 배포

**1) GitHub 저장소에 올리기**

```bash
git init && git add . && git commit -m "init"
git remote add origin https://github.com/{계정}/ozs.git
git push -u origin main
```

**2) Cloudflare Pages 연결**

Cloudflare 대시보드 → Workers & Pages → Create → Pages → Connect to Git

| 항목 | 값 |
|---|---|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 환경변수 `NODE_VERSION` = `22` |

**3) 도메인 연결**

1. 도메인 등록기관(가비아 등)에서 네임서버를 Cloudflare 것으로 변경
2. Pages 프로젝트 → Custom domains → `ozs.co.kr` 과 `www.ozs.co.kr` 추가
3. SSL 은 자동 발급 (수 분 소요)

**4) 메일**

Cloudflare → Email → Email Routing 에서 `contact@ozs.co.kr` → 개인 메일 주소로 포워딩. 무료입니다.

이후 `git push` 할 때마다 자동 배포됩니다.

---

## 6. 공개 전 체크리스트

- [ ] `site.js` 의 사업자 정보를 실제 값으로 교체
- [ ] OG 이미지를 1200×630 PNG/JPG 로 교체
- [ ] Contact 폼 `ACCESS_KEY` 연결 후 실제로 메일이 오는지 테스트
- [ ] 개인정보처리방침 페이지 추가 (문의 폼으로 개인정보를 받으므로 필요)
- [ ] Google Search Console + 네이버 서치어드바이저에 `sitemap.xml` 제출
- [ ] 모바일에서 한 번 열어보기

법적 표기 사항은 상황에 따라 다르므로, 공개 전에 관할 기관이나 전문가에게 확인하시는 걸 권합니다.

---

## 7. 디자인 노트

색과 타입은 `src/styles/global.css` 의 `:root` 한 곳에 모여 있습니다.

- **색** — 깊은 네이비(`--ink #070A12`) 바탕에 차가운 은빛 텍스트(`--silver`), 강조는 옅은 하늘색(`--frost #8FC0F0`). 화면 왼쪽 위에서 들어오는 광원 하나가 유일한 장식입니다.
- **글꼴** — 라틴 표제는 Bodoni Moda(가는 획과 굵은 획의 대비가 은세공 같은 인상), 한글 본문은 Pretendard, 라벨과 수치는 JetBrains Mono. 표제·본문·데이터 세 역할을 글꼴로 구분합니다.
- **시그니처** — 홈의 제품 목록은 카드 그리드가 아니라 **장부(ledger)** 형태입니다. 출시 순번이 매겨진 행이 아래로 쌓이고, 행에 커서를 올리면 미리보기가 커서를 따라옵니다. 제품이 하나씩 늘어날수록 목록 자체가 기록이 됩니다.

색을 바꾸고 싶으면 `--ink`, `--navy`, `--frost` 세 값만 조정하면 전체 톤이 함께 움직입니다.
