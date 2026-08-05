// ─────────────────────────────────────────────
//  제품 추가는 이 배열에만 항목을 넣으면 됩니다.
//  slug 가 곧 URL 이 됩니다. → /works/{slug}
//  아래 3건은 형식을 보여주기 위한 샘플입니다.
// ─────────────────────────────────────────────
export const products = [
  {
    slug: 'lumen-drift',
    index: '03',
    name: 'Lumen Drift',
    kind: 'Game',
    year: '2026',
    status: 'in-development', // released | in-development | archived
    summary: '빛을 밀어내며 길을 만드는 2D 퍼즐 플랫포머.',
    description:
      '플레이어는 빛을 직접 밟을 수 없습니다. 대신 광원을 밀고 당겨 그림자를 만들고, 그 그림자 위를 걸어 다음 방으로 넘어갑니다. 40개 방, 한 번의 플레이에 약 3시간.',
    thumb: '/img/lumen-drift.svg',
    cover: '/img/lumen-drift.svg',
    shots: ['/img/lumen-drift.svg', '/img/lumen-drift.svg'],
    spec: [
      ['플랫폼', 'PC (Windows, macOS)'],
      ['엔진', 'Unity 6'],
      ['출시', '2026 예정'],
      ['가격', '미정'],
    ],
    stores: [
      { label: 'Steam 위시리스트', href: 'https://store.steampowered.com/' },
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
    summary: '혼자 일하는 사람을 위한 가벼운 업무 보드.',
    description:
      '팀 협업 기능을 걷어내고 1인 사용자에게 필요한 것만 남긴 보드입니다. 프로젝트, 할 일, 인보이스가 한 화면에 있습니다. 가입 없이 로컬에서 먼저 써볼 수 있습니다.',
    thumb: '/img/tideboard.svg',
    cover: '/img/tideboard.svg',
    shots: ['/img/tideboard.svg', '/img/tideboard.svg'],
    spec: [
      ['플랫폼', '웹'],
      ['스택', 'React, Node, Postgres'],
      ['출시', '2025.11'],
      ['요금', '무료 / Pro 월 4,900원'],
    ],
    stores: [{ label: '바로 사용하기', href: 'https://ozs.co.kr' }],
    presskit: false,
  },
  {
    slug: 'atelier-noct',
    index: '01',
    name: 'Atelier Noct',
    kind: 'Website',
    year: '2025',
    status: 'released',
    summary: '공예 스튜디오를 위한 브랜드 사이트.',
    description:
      '작업물 사진이 주인공이 되도록 인터페이스를 최대한 물러나게 설계했습니다. 정적 배포로 월 유지비 0원, 첫 화면 로딩 0.4초.',
    thumb: '/img/atelier-noct.svg',
    cover: '/img/atelier-noct.svg',
    shots: ['/img/atelier-noct.svg'],
    spec: [
      ['플랫폼', '웹'],
      ['스택', 'Astro, Cloudflare Pages'],
      ['공개', '2025.06'],
      ['역할', '기획, 디자인, 개발'],
    ],
    stores: [{ label: '사이트 보기', href: 'https://ozs.co.kr' }],
    presskit: false,
  },
]

export const statusLabel = {
  released: '출시됨',
  'in-development': '개발 중',
  archived: '보관',
}

export const getProduct = (slug) => products.find((p) => p.slug === slug)
