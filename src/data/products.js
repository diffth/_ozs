// ─────────────────────────────────────────────
//  제품 추가는 이 배열에만 항목을 넣으면 됩니다.
//  slug 가 곧 URL 이 됩니다. → /works/{slug}
//  아래 3건은 형식을 보여주기 위한 샘플입니다.
//
//  { ko: '…', en: '…' } 로 적힌 항목은 선택한 언어에 따라 바뀝니다.
//  한 가지 언어만 적어야 한다면 그냥 문자열로 두어도 됩니다.
// ─────────────────────────────────────────────
export const products = [
  {
    slug: 'zoomin',
    index: '03',
    name: 'zoomin',
    kind: 'Web Service',
    year: '2026',
    status: 'released',
    summary: {
      ko: '셀카를 여권·증명사진 규격으로 바꿔 주는 AI 변환기.',
      en: 'An AI converter that turns a selfie into a passport or ID photo that meets the official spec.',
    },
    description: {
      ko: '평범한 인물 사진을 올리면 Gemini 가 배경을 지우고 얼굴 위치와 여백까지 규격에 맞춰 잘라 줍니다. 여권, 주민등록증, 운전면허증 등 용도별 규격을 미리 담아 두어 어디에 쓸지만 고르면 몇 초 만에 끝납니다. 한국어, 영어, 일본어를 지원합니다.',
      en: 'Upload an ordinary photo of a person and Gemini strips the background, then crops the face position and margins to the required spec. Passport, national ID, driver’s licence and more are preloaded, so you only pick what it is for and it finishes in seconds. Available in Korean, English and Japanese.',
    },
    thumb: '/img/zoomin.jpg',
    cover: '/img/zoomin.jpg',
    shots: [],
    spec: [
      {
        label: { ko: '플랫폼', en: 'Platform' },
        value: { ko: '웹', en: 'Web' },
      },
      {
        label: { ko: '스택', en: 'Stack' },
        value: 'React, Tailwind CSS, Gemini API, Cloudflare Pages',
      },
      { label: { ko: '공개', en: 'Launched' }, value: '2026.07' },
      {
        label: { ko: '역할', en: 'Role' },
        value: { ko: '기획, 디자인, 개발', en: 'Planning, design, development' },
      },
    ],
    stores: [
      {
        label: { ko: '바로 사용하기', en: 'Open the app' },
        href: 'https://zoomin-61h.pages.dev/ko',
      },
    ],
    presskit: false,
  },
  {
    slug: 'aura-fashion',
    index: '02',
    name: 'AURA FASHION',
    kind: 'Web Service',
    year: '2026',
    status: 'released',
    summary: {
      ko: 'AI 가 체형과 무드를 읽어 옷을 골라 주는 퍼스널 스타일링 서비스.',
      en: 'A personal styling service where AI reads your silhouette and mood, then picks the clothes.',
    },
    description: {
      ko: '키와 몸무게, 전신 사진을 받아 실루엣을 분석하고 체형에 맞는 옷과 사이즈만 추려 쇼핑몰까지 연결합니다. 가상 옷장과 트렌드 피드를 함께 두어 한 번의 분석이 계속 쌓이도록 만들었습니다. 업로드한 사진은 분석 직후 지웁니다.',
      en: 'It takes your height, weight, and a full-body photo, analyses the silhouette, narrows the results down to clothes and sizes that actually fit, and hands you off to the shop. A virtual wardrobe and a trend feed sit alongside it, so one analysis keeps compounding. Uploaded photos are deleted as soon as the analysis is done.',
    },
    thumb: '/img/aura-fashion.jpg',
    cover: '/img/aura-fashion.jpg',
    shots: [],
    spec: [
      {
        label: { ko: '플랫폼', en: 'Platform' },
        value: { ko: '웹', en: 'Web' },
      },
      {
        label: { ko: '스택', en: 'Stack' },
        value: 'React, Tailwind CSS, Supabase, Cloudflare Pages',
      },
      { label: { ko: '공개', en: 'Launched' }, value: '2026.07' },
      {
        label: { ko: '역할', en: 'Role' },
        value: { ko: '기획, 디자인, 개발', en: 'Planning, design, development' },
      },
    ],
    stores: [
      {
        label: { ko: '바로 사용하기', en: 'Open the app' },
        href: 'https://05-aipersonalstylist.pages.dev/',
      },
    ],
    presskit: false,
  },
  {
    slug: 'lawful',
    index: '01',
    name: '오세영 변호사 웹사이트',
    kind: 'Website',
    year: '2026',
    status: 'released',
    summary: {
      ko: '형사 사건을 다루는 법무법인의 브랜드 사이트.',
      en: 'A brand site for a criminal defence law firm.',
    },
    description: {
      ko: '상담이 급한 사람이 변호사의 경력과 전문 분야를 한 화면에서 확인하고 바로 연락까지 이어지도록 동선을 짧게 잡았습니다. 프레임워크 없이 정적 페이지로 만들어 첫 화면이 빠르게 뜨고, 유지비도 거의 들지 않습니다.',
      en: 'Someone who needs a lawyer in a hurry can see the record and the specialities on one screen and reach out from there — the path is kept short. Built as static pages with no framework, so the first screen arrives fast and running costs stay near zero.',
    },
    thumb: '/img/lawful.jpg',
    cover: '/img/lawful.jpg',
    shots: [],
    spec: [
      {
        label: { ko: '플랫폼', en: 'Platform' },
        value: { ko: '웹', en: 'Web' },
      },
      {
        label: { ko: '스택', en: 'Stack' },
        value: 'HTML, CSS, JavaScript, Cloudflare',
      },
      { label: { ko: '공개', en: 'Launched' }, value: '2026.08' },
      {
        label: { ko: '역할', en: 'Role' },
        value: { ko: '기획, 디자인, 개발', en: 'Planning, design, development' },
      },
    ],
    stores: [
      {
        label: { ko: '사이트 보기', en: 'Visit the site' },
        href: 'https://www.lawful.co.kr',
      },
    ],
    presskit: false,
  },
]

export const statusLabel = {
  released: { ko: '출시됨', en: 'Released' },
  'in-development': { ko: '개발 중', en: 'In development' },
  archived: { ko: '보관', en: 'Archived' },
}

export const getProduct = (slug) => products.find((p) => p.slug === slug)
