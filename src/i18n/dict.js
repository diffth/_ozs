// ─────────────────────────────────────────────
//  화면에 그대로 노출되는 문구 모음 (한국어 / 영어)
//
//  · 잎(leaf) 값은 { ko, en } 형태입니다.
//  · 이미 영문인 라벨(Home, Works, Get Started …)은
//    디자인을 유지하기 위해 두 언어에서 동일하게 둡니다.
//  · 제품·회사 정보 문구는 data/site.js, data/products.js 에 있습니다.
// ─────────────────────────────────────────────

export const dict = {
  common: {
    skip: { ko: '본문 바로가기', en: 'Skip to content' },
    homeAria: { ko: '홈', en: 'Home' },
    mainNavAria: { ko: '주요 메뉴', en: 'Main menu' },
    subNavAria: { ko: '보조 메뉴', en: 'Secondary menu' },
    langSwitchAria: { ko: '언어 선택', en: 'Select language' },
    menuOpen: { ko: '메뉴 열기', en: 'Open menu' },
    menuClose: { ko: '메뉴 닫기', en: 'Close menu' },
    detail: { ko: '자세히 보기 →', en: 'View details →' },
    // 버튼(.btn-pop)에는 text-transform: capitalize 가 걸려 있어
    // 영문 문구는 낱말마다 대문자로 보입니다. 관사가 홀로 남지 않도록 골랐습니다.
    inquire: { ko: '문의 보내기 💌', en: 'Send Your Inquiry 💌' },
  },

  seo: {
    siteTitle: { ko: '1인 개발 스튜디오', en: 'Solo Development Studio' },
    notFound: {
      ko: '요청한 페이지를 찾을 수 없습니다.',
      en: 'The page you requested could not be found.',
    },
    aboutDesc: { ko: '소개', en: 'About' },
    contactDesc: {
      ko: '제품 제휴, 퍼블리싱, 개발 의뢰 문의를 받습니다.',
      en: 'Open for partnerships, publishing, and development inquiries.',
    },
  },

  home: {
    heroBadge: {
      ko: '🌟 1인 개발 스튜디오 ozs',
      en: '🌟 ozs — a solo development studio',
    },
    heroDesc: {
      ko: '트렌디한 웹사이트, 감각적인 웹서비스, 몰입감 넘치는 게임까지! 상상을 생동감 있는 디지털 경험으로 직접 기획하고 구현합니다.',
      en: 'Trendy websites, sharp web services, immersive games — I plan and build every idea into a vivid digital experience myself.',
    },
    heroCtaPrimary: { ko: '프로젝트 의뢰하기 🚀', en: 'Start Your Project 🚀' },
    heroCtaSecondary: { ko: '작품 구경하기 ✨', en: 'See Our Works ✨' },
    heroImgAlt: {
      ko: 'ozs 팝 에너지 드링크 & 커피 목업',
      en: 'ozs Pop Energy Drink & Coffee Mockup',
    },

    featuredSubtitle: {
      ko: '직접 개발하고 출품한 비비드하고 독창적인 웹서비스 및 라인업을 만나보세요.',
      en: 'Meet the vivid, one-of-a-kind services and products built and shipped in-house.',
    },
    featured: [
      {
        slug: 'atelier-noct',
        tag: 'Interactive Game',
        name: 'Atelier Noct',
        date: '2026.04',
        desc: {
          ko: '몽환적인 그래픽과 감성적인 픽셀 아트 사운드가 돋보이는 모바일 힐링 퍼즐 게임입니다.',
          en: 'A calming mobile puzzle game with dreamlike visuals and a warm pixel-art soundtrack.',
        },
      },
      {
        slug: 'lumen-drift',
        tag: '3D Web App',
        name: 'Lumen Drift',
        date: '2025.11',
        desc: {
          ko: '브라우저 상에서 매끄럽게 구동되는 인터랙티브 3D 비주얼라이저 및 디자인 툴킷입니다.',
          en: 'An interactive 3D visualizer and design toolkit that runs smoothly right in the browser.',
        },
      },
      {
        slug: 'tideboard',
        tag: 'SaaS Dashboard',
        name: 'Tideboard',
        date: '2025.06',
        desc: {
          ko: '1인 창작자와 소규모 팀을 위한 직관적이고 깔끔한 워크플로우 분석 플랫폼입니다.',
          en: 'A clean, intuitive workflow analytics platform for solo creators and small teams.',
        },
      },
    ],

    mintDesc: {
      ko: '기획부터 UI/UX 디자인, 풀스택 개발까지! 망설이지 말고 당신의 아디이어에 통통 튀는 활력을 불어넣어 보세요.',
      en: 'From planning to UI/UX design to full-stack development — give your idea the energy it deserves.',
    },
    mintCta: { ko: '지금 문의하기 💌', en: 'Contact Me Now 💌' },
    mintImgAlt: {
      ko: 'ozs 브랜드 패키지 목업',
      en: 'ozs Brand Package Mockup',
    },

    worksSubtitle: {
      ko: 'ozs 스튜디오가 하나씩 완성하고 출시한 전체 프로젝트 아카이브입니다.',
      en: 'The complete archive of every project ozs has finished and shipped, one at a time.',
    },
  },

  about: {
    badge: { ko: 'ABOUT OZS STUDIO 🌟', en: 'ABOUT OZS STUDIO 🌟' },
    titleLead: { ko: '1인 스튜디오의', en: 'A solo studio with' },
    titleHighlight: { ko: '특별한 에너지', en: 'special energy' },
    desc: {
      ko: '기획부터 디자인, 풀스택 개발 및 배포까지! 한 사람의 밀도 높은 직관과 에너지로 최고의 디지털 제품을 만들어냅니다.',
      en: 'Planning, design, full-stack development, deployment — one person’s focused intuition and energy, poured into every digital product.',
    },
    cards: [
      {
        tag: 'PHILOSOPHY',
        title: { ko: '왜 1인 개발인가? 💡', en: 'Why solo development? 💡' },
        body: {
          ko: '소규모 제품에선 전달과 인수인계 비용이 개발보다 큰 법입니다. 기획, 시안, 코드 사이의 손실 없이 원래의 명확한 의도를 끝까지 유지합니다.',
          en: 'On small products, handoff costs more than the build itself. Nothing is lost between the brief, the mockup, and the code — the original intent survives to the end.',
        },
      },
      {
        tag: 'WORKFLOW',
        title: { ko: '빠르고 똑똑한 일 방식 ⚡', en: 'A fast, sharp way of working ⚡' },
        body: {
          ko: '가장 빠르게 작동하는 코어 핵심 프로토타입을 만들어 실제로 직접 경험해 봅니다. 검증된 진짜 중요한 핵심 기능에 모든 화력을 쏟아붓습니다.',
          en: 'Build the smallest working prototype first, then actually live with it. Once the core proves itself, every bit of effort goes there.',
        },
      },
      {
        tag: 'CREATOR',
        title: { ko: '대표 겸 개발자 👤', en: 'Founder & developer 👤' },
        bodyAfterName: {
          ko: ' — 아이디어 구상부터 최종 상용 서비스 배포까지 직접 손수 완성해 나갑니다.',
          en: ' — building everything by hand, from the first idea to the production release.',
        },
        cta: { ko: '의뢰 보내기 💌', en: 'Send Your Request 💌' },
      },
    ],
  },

  contact: {
    badge: { ko: "LET'S TALK 💌", en: "LET'S TALK 💌" },
    titleLead: { ko: '무엇을 함께', en: 'What should we' },
    titleHighlight: { ko: '만들어볼까요?', en: 'build together?' },
    desc: {
      ko: '제품 제휴, 퍼블리싱, 웹서비스 및 게임 개발 의뢰 모두 환영합니다. 보통 영업일 기준 2일 안에 답변드립니다.',
      en: 'Partnerships, publishing, web service and game development requests are all welcome. I usually reply within two business days.',
    },
    nameLabel: { ko: '이름 / 회사명', en: 'Name / Company' },
    namePlaceholder: {
      ko: '성함이나 회사명을 입력해 주세요',
      en: 'Enter your name or company',
    },
    emailLabel: { ko: '회신받을 이메일', en: 'Reply-to email' },
    topicLabel: { ko: '문의 종류', en: 'Inquiry type' },
    topics: [
      { value: '제품 제휴 · 퍼블리싱', ko: '제품 제휴 · 퍼블리싱', en: 'Partnership · Publishing' },
      { value: '웹사이트 제작', ko: '웹사이트 제작', en: 'Website build' },
      { value: '웹서비스 개발', ko: '웹서비스 개발', en: 'Web service development' },
      { value: '게임 관련', ko: '게임 관련', en: 'Games' },
      { value: '취재 · 리뷰', ko: '취재 · 리뷰', en: 'Press · Review' },
      { value: '그 외', ko: '그 외', en: 'Something else' },
    ],
    messageLabel: { ko: '내용', en: 'Message' },
    messagePlaceholder: {
      ko: '만들고 싶은 프로젝트, 일정, 예산이나 희망 사항을 자유롭게 적어주세요.',
      en: 'Tell me about the project, timeline, budget, or anything else you have in mind.',
    },
    submit: { ko: '🚀 메시지 전송하기', en: '🚀 Send message' },
  },

  work: {
    back: { ko: '← Back to Works', en: '← Back to Works' },
    coverAlt: { ko: '대표 이미지', en: 'cover image' },
    shotAlt: { ko: '스크린샷', en: 'screenshot' },
    // {name} 자리에 제품 이름이 들어갑니다.
    outroTitle: {
      ko: '{name} 프로젝트가 마음에 드시나요?',
      en: 'Does {name} look like your kind of project?',
    },
    outroDesc: {
      ko: '비슷한 형태의 서비스 구축, 제휴, 협업 문의는 언제나 환영합니다.',
      en: 'Inquiries about similar builds, partnerships, or collaborations are always welcome.',
    },
  },

  notFound: {
    badge: { ko: 'ERROR 404 🧭', en: 'ERROR 404 🧭' },
    titleLead: { ko: '이 주소에는', en: 'There is nothing at' },
    titleHighlight: { ko: '아무것도 없습니다', en: 'this address' },
    body: {
      ko: '주소가 바뀌었거나, 아직 만들지 않은 페이지입니다.',
      en: 'The address may have changed, or the page does not exist yet.',
    },
    home: { ko: '홈으로 돌아가기 🏠', en: 'Back To Home 🏠' },
    works: { ko: '작품 보러가기 ✨', en: 'See Our Works ✨' },
  },

  footer: {
    company: { ko: '상호', en: 'Company' },
    ceo: { ko: '대표', en: 'CEO' },
    regNumber: { ko: '사업자등록번호', en: 'Business reg. no.' },
    address: { ko: '주소', en: 'Address' },
    tel: { ko: '전화', en: 'Tel' },
    email: { ko: '이메일', en: 'Email' },
    copy: {
      ko: 'Built with Energy & Passion 🌟',
      en: 'Built with Energy & Passion 🌟',
    },
  },
}
