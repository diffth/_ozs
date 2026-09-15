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
    slug: 'tideboard',
    index: '02',
    name: 'Tideboard',
    kind: 'Web Service',
    year: '2025',
    status: 'released',
    summary: {
      ko: '혼자 일하는 사람을 위한 가벼운 업무 보드.',
      en: 'A lightweight work board for people who work alone.',
    },
    description: {
      ko: '팀 협업 기능을 걷어내고 1인 사용자에게 필요한 것만 남긴 보드입니다. 프로젝트, 할 일, 인보이스가 한 화면에 있습니다. 가입 없이 로컬에서 먼저 써볼 수 있습니다.',
      en: 'Team collaboration features stripped out, leaving only what a single user needs. Projects, tasks, and invoices live on one screen. Try it locally first — no sign-up required.',
    },
    thumb: '/img/tideboard.svg',
    cover: '/img/tideboard.svg',
    shots: ['/img/tideboard.svg', '/img/tideboard.svg'],
    spec: [
      {
        label: { ko: '플랫폼', en: 'Platform' },
        value: { ko: '웹', en: 'Web' },
      },
      { label: { ko: '스택', en: 'Stack' }, value: 'React, Node, Postgres' },
      { label: { ko: '출시', en: 'Release' }, value: '2025.11' },
      {
        label: { ko: '요금', en: 'Pricing' },
        value: {
          ko: '무료 / Pro 월 4,900원',
          en: 'Free / Pro at ₩4,900 per month',
        },
      },
    ],
    stores: [
      {
        label: { ko: '바로 사용하기', en: 'Open the app' },
        href: 'https://ozs.co.kr',
      },
    ],
    presskit: false,
  },
  {
    slug: 'atelier-noct',
    index: '01',
    name: 'Atelier Noct',
    kind: 'Website',
    year: '2025',
    status: 'released',
    summary: {
      ko: '공예 스튜디오를 위한 브랜드 사이트.',
      en: 'A brand site for a craft studio.',
    },
    description: {
      ko: '작업물 사진이 주인공이 되도록 인터페이스를 최대한 물러나게 설계했습니다. 정적 배포로 월 유지비 0원, 첫 화면 로딩 0.4초.',
      en: 'The interface steps back so the photographs of the work can lead. Static hosting keeps running costs at zero, and the first screen loads in 0.4 seconds.',
    },
    thumb: '/img/atelier-noct.svg',
    cover: '/img/atelier-noct.svg',
    shots: ['/img/atelier-noct.svg'],
    spec: [
      {
        label: { ko: '플랫폼', en: 'Platform' },
        value: { ko: '웹', en: 'Web' },
      },
      { label: { ko: '스택', en: 'Stack' }, value: 'Astro, Cloudflare Pages' },
      { label: { ko: '공개', en: 'Launched' }, value: '2025.06' },
      {
        label: { ko: '역할', en: 'Role' },
        value: { ko: '기획, 디자인, 개발', en: 'Planning, design, development' },
      },
    ],
    stores: [
      {
        label: { ko: '사이트 보기', en: 'Visit the site' },
        href: 'https://ozs.co.kr',
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
