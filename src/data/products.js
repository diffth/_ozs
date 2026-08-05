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
    slug: 'lumen-drift',
    index: '03',
    name: 'Lumen Drift',
    kind: 'Game',
    year: '2026',
    status: 'in-development', // released | in-development | archived
    summary: {
      ko: '빛을 밀어내며 길을 만드는 2D 퍼즐 플랫포머.',
      en: 'A 2D puzzle platformer where you push light around to carve out a path.',
    },
    description: {
      ko: '플레이어는 빛을 직접 밟을 수 없습니다. 대신 광원을 밀고 당겨 그림자를 만들고, 그 그림자 위를 걸어 다음 방으로 넘어갑니다. 40개 방, 한 번의 플레이에 약 3시간.',
      en: 'You cannot step on light. Instead you push and pull the light sources to cast shadows, then walk across those shadows into the next room. 40 rooms, roughly three hours per playthrough.',
    },
    thumb: '/img/lumen-drift.svg',
    cover: '/img/lumen-drift.svg',
    shots: ['/img/lumen-drift.svg', '/img/lumen-drift.svg'],
    spec: [
      {
        label: { ko: '플랫폼', en: 'Platform' },
        value: 'PC (Windows, macOS)',
      },
      { label: { ko: '엔진', en: 'Engine' }, value: 'Unity 6' },
      {
        label: { ko: '출시', en: 'Release' },
        value: { ko: '2026 예정', en: 'Planned for 2026' },
      },
      {
        label: { ko: '가격', en: 'Price' },
        value: { ko: '미정', en: 'TBD' },
      },
    ],
    stores: [
      {
        label: { ko: 'Steam 위시리스트', en: 'Wishlist on Steam' },
        href: 'https://store.steampowered.com/',
      },
    ],
    presskit: true,
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
