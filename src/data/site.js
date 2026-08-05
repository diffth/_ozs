// ─────────────────────────────────────────────
//  회사 정보. 실제 값으로 교체하세요.
// ─────────────────────────────────────────────
export const site = {
  name: 'ozs',
  url: 'https://ozs.co.kr',
  tagline: '혼자 기획하고, 혼자 만들고, 혼자 배포합니다.',
  description:
    '웹사이트, 웹서비스, 게임을 직접 기획하고 만드는 1인 개발 스튜디오입니다.',
  founded: '2025',
  location: 'Incheon, KR',
  email: 'contact@ozs.co.kr',

  // 사이트 하단 표기 의무 항목
  business: {
    company: '오즈에스',
    ceo: '오세헌',
    regNumber: '000-00-00000',
    address: '인천광역시 ○○구 ○○로 000',
    tel: '000-0000-0000',
  },

  links: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'X', href: 'https://x.com/' },
  ],
}

export const nav = [
  { label: 'Works', to: '/#works' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

// 홈의 Capabilities 섹션
export const capabilities = [
  {
    key: 'web',
    title: '웹사이트',
    body: '브랜드 사이트, 랜딩 페이지, 프레스킷. 디자인부터 배포와 도메인 연결까지 한 사람이 이어서 처리합니다.',
    stack: ['React', 'Vite', 'Cloudflare'],
  },
  {
    key: 'service',
    title: '웹서비스',
    body: '로그인, 결제, 대시보드가 붙는 실제 운영 제품. 작게 출시하고 쓰면서 고치는 방식으로 만듭니다.',
    stack: ['TypeScript', 'Node', 'Postgres'],
  },
  {
    key: 'game',
    title: '게임',
    body: '작은 규모의 인디 게임. 프로토타입에서 스토어 출시, 업데이트 운영까지 직접 맡습니다.',
    stack: ['Unity', 'Godot', 'WebGL'],
  },
]
