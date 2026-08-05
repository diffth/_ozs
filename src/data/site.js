// ─────────────────────────────────────────────
//  회사 정보. 실제 값으로 교체하세요.
//
//  { ko: '…', en: '…' } 로 적힌 항목은 화면에 노출되는 문구라
//  선택한 언어에 따라 바뀝니다. (src/i18n/index.js 의 tr() 참고)
// ─────────────────────────────────────────────
export const site = {
  name: 'ozs',
  url: 'https://ozs.co.kr',
  tagline: {
    ko: '혼자 기획하고, 혼자 만들고, 혼자 배포합니다.',
    en: 'Planned alone, built alone, shipped alone.',
  },
  description: {
    ko: '웹사이트, 웹서비스, 게임을 직접 기획하고 만드는 1인 개발 스튜디오입니다.',
    en: 'A solo development studio that plans and builds websites, web services, and games.',
  },
  founded: '2025',
  location: { ko: '대한민국 인천', en: 'Incheon, KR' },
  email: 'contact@ozs.co.kr',

  // 사이트 하단 표기 의무 항목
  business: {
    company: { ko: '오즈에스', en: 'OZS' },
    ceo: { ko: '오세헌', en: 'Seheon Oh' },
    regNumber: '000-00-00000',
    address: {
      ko: '인천광역시 ○○구 ○○로 000',
      en: '000, ○○-ro, ○○-gu, Incheon, Republic of Korea',
    },
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
    title: { ko: '웹사이트', en: 'Websites' },
    body: {
      ko: '브랜드 사이트, 랜딩 페이지, 프레스킷. 디자인부터 배포와 도메인 연결까지 한 사람이 이어서 처리합니다.',
      en: 'Brand sites, landing pages, press kits. One person carries it from design through deployment and domain setup.',
    },
    stack: ['React', 'Vite', 'Cloudflare'],
  },
  {
    key: 'service',
    title: { ko: '웹서비스', en: 'Web Services' },
    body: {
      ko: '로그인, 결제, 대시보드가 붙는 실제 운영 제품. 작게 출시하고 쓰면서 고치는 방식으로 만듭니다.',
      en: 'Real products in production, with auth, payments, and dashboards. Ship small, then fix it while using it.',
    },
    stack: ['TypeScript', 'Node', 'Postgres'],
  },
  {
    key: 'game',
    title: { ko: '게임', en: 'Games' },
    body: {
      ko: '작은 규모의 인디 게임. 프로토타입에서 스토어 출시, 업데이트 운영까지 직접 맡습니다.',
      en: 'Small indie games — prototype, store release, and ongoing updates, all handled in-house.',
    },
    stack: ['Unity', 'Godot', 'WebGL'],
  },
]
