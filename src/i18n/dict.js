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
    kakaoFab: { ko: '카카오톡 상담', en: 'Chat on KakaoTalk' },
    detail: { ko: '자세히 보기 →', en: 'View details →' },
    // 버튼(.btn-pop)에는 text-transform: capitalize 가 걸려 있어
    // 영문 문구는 낱말마다 대문자로 보입니다. 관사가 홀로 남지 않도록 골랐습니다.
    inquire: { ko: '문의 보내기 💌', en: 'Send Your Inquiry 💌' },
  },

  seo: {
    // 홈 제목의 뒷부분. 실제로 검색하는 말(웹사이트·웹서비스·게임)을 넣습니다.
    siteTitle: {
      ko: '웹사이트·웹서비스·게임을 만드는 AI 크리에이티브 스튜디오',
      en: 'AI Creative Studio for Websites, Web Services & Games',
    },
    notFound: {
      ko: '요청한 페이지를 찾을 수 없습니다.',
      en: 'The page you requested could not be found.',
    },
    aboutDesc: {
      ko: '오즈스(ozs)는 경기도 부천의 1인 AI 크리에이티브 스튜디오입니다. 대표 오세헌이 웹사이트·웹서비스·게임의 기획, 디자인, 개발, 배포를 직접 맡습니다.',
      en: 'ozs is a one-person AI creative studio in Bucheon, South Korea. Founder Oh Seheon plans, designs, builds, and ships websites, web services, and games.',
    },
    contactDesc: {
      ko: '제품 제휴, 퍼블리싱, 개발 의뢰 문의를 받습니다.',
      en: 'Open for partnerships, publishing, and development inquiries.',
    },
  },

  home: {
    heroBadge: {
      ko: '🌟 AI Creative Studio',
      en: '🌟 AI Creative Studio',
    },
    // 히어로 제목은 About 과 같이 lead / highlight / trail 로 나눠
    // 가운데 낱말만 노란색(.hero-pop__title span)으로 강조합니다.
    heroTitleLead: { ko: '상상을 채우는', en: 'WE BREW' },
    heroTitleHighlight: { ko: '크리에이티브', en: 'CREATIVE' },
    heroTitleTrail: { ko: '에너지!', en: 'ENERGY!' },
    heroDesc: {
      ko: '트렌디한 웹사이트, 감각적인 웹서비스, 몰입감 넘치는 게임까지! 상상을 생동감 있는 디지털 경험으로 직접 기획하고 구현합니다.',
      en: 'Trendy websites, sharp web services, immersive games — I plan and build every idea into a vivid digital experience myself.',
    },
    heroCtaPrimary: { ko: '프로젝트 의뢰하기 🚀', en: 'Start Your Project 🚀' },
    heroCtaSecondary: { ko: '작품 구경하기 ✨', en: 'See Our Works ✨' },
    heroSticker: { ko: '✈️ 알파테스트중', en: '✈️ ALPHA TEST' },
    sliderAria: { ko: '출시 준비 중인 게임', en: 'Upcoming games' },
    sliderPause: { ko: '자동 넘김 멈추기', en: 'Pause slideshow' },
    sliderPlay: { ko: '자동 넘김 다시 시작', en: 'Play slideshow' },
    heroImgAlt: {
      ko: 'Wind Courier — 노란 복엽기를 탄 우편 비행사가 강과 언덕 마을 위를 나는 일러스트',
      en: 'Wind Courier — a courier pilot flying a yellow biplane over a river and hilltop villages',
    },

    featuredTitle: { ko: 'EXPLORE OUR WORKS! ⚡', en: 'EXPLORE OUR WORKS! ⚡' },
    featuredSubtitle: {
      ko: '직접 개발하고 출품한 비비드하고 독창적인 웹서비스 및 라인업을 만나보세요.',
      en: 'Meet the vivid, one-of-a-kind services and products built and shipped in-house.',
    },
    featuredAria: { ko: '대표 작품', en: 'Featured projects' },
    featured: [
      {
        slug: 'wind-courier',
        tag: { ko: '3D 비행 어드벤처 게임', en: '3D Flying Adventure' },
        name: 'Wind Courier',
        date: '2026.09',
        desc: {
          ko: '노란 복엽기를 몰고 1920년대 유럽 시골을 닮은 수채화 세계의 마을들 사이로 편지를 나르는 우편 비행 어드벤처입니다. 지금 알파 테스트 중입니다.',
          en: 'Fly a yellow biplane and carry mail between villages in a watercolour world inspired by 1920s rural Europe. Now in alpha testing.',
        },
      },
      {
        slug: 'lawful',
        tag: { ko: '법률 브랜드 사이트', en: 'Law Firm Website' },
        name: '오세영 변호사',
        date: '2026.08',
        desc: {
          ko: '상담이 급한 사람이 변호사의 경력과 전문 분야를 한 화면에서 확인하고 바로 연락할 수 있는 형사 전문 법무법인 사이트입니다.',
          en: 'A criminal defence law firm site where someone who needs help right away can see the record, the specialities, and a way to get in touch on one screen.',
        },
      },
      {
        slug: 'zoomin',
        tag: { ko: 'AI 사진 변환기', en: 'AI Photo Tool' },
        name: 'zoomin',
        date: '2026.07',
        desc: {
          ko: '셀카를 올리면 Gemini 가 배경을 지우고 여권·증명사진 규격에 맞춰 잘라 주는 AI 변환기입니다.',
          en: 'Upload a selfie and Gemini strips the background, then crops it to passport and ID photo specs.',
        },
      },
      {
        slug: 'aura-fashion',
        tag: { ko: 'AI 스타일링 서비스', en: 'AI Styling Service' },
        name: 'AURA FASHION',
        date: '2026.07',
        desc: {
          ko: '체형과 무드를 읽어 나에게 맞는 옷과 사이즈만 골라 주는 AI 퍼스널 스타일링 서비스입니다.',
          en: 'An AI personal styling service that reads your shape and mood, then narrows it down to the clothes and sizes that fit you.',
        },
      },
    ],

    mintTitle: {
      ko: '프로젝트에 에너지가 필요하신가요?',
      en: 'NEED SOME ENERGY ON YOUR PROJECT?',
    },
    mintDesc: {
      ko: '기획부터 UI/UX 디자인, 풀스택 개발까지! 망설이지 말고 당신의 아디이어에 통통 튀는 활력을 불어넣어 보세요.',
      en: 'From planning to UI/UX design to full-stack development — give your idea the energy it deserves.',
    },
    mintCta: { ko: '지금 문의하기 💌', en: 'Contact Me Now 💌' },
    mintSticker: { ko: '💦 출시 준비중', en: '💦 COMING SOON' },
    mintImgAlt: {
      ko: 'NAIAS World Splash Tour — 카오산 로드에서 물총을 든 여행자 셋이 물싸움을 벌이는 일러스트',
      en: 'NAIAS World Splash Tour — three travellers in a water-gun fight on Khao San Road',
    },

    worksTitle: { ko: 'ALL SHIPPED PROJECTS 📜', en: 'ALL SHIPPED PROJECTS 📜' },
    worksSubtitle: {
      ko: 'ozs 스튜디오가 하나씩 완성하고 출시한 전체 프로젝트 아카이브입니다.',
      en: 'The complete archive of every project ozs has finished and shipped, one at a time.',
    },
    capabilitiesTitle: { ko: '스튜디오가 할 수 있는 일 💡', en: 'STUDIO CAPABILITIES 💡' },
  },

  about: {
    badge: { ko: 'ABOUT OZS STUDIO 🌟', en: 'ABOUT OZS STUDIO 🌟' },
    titleLead: { ko: 'AI Creative Studio의', en: 'An AI Creative Studio with' },
    titleHighlight: { ko: '특별한 에너지', en: 'special energy' },
    desc: {
      ko: '기획부터 디자인, 풀스택 개발 및 배포까지! AI 와 함께하는 밀도 높은 직관과 에너지로 최고의 디지털 제품을 만들어냅니다.',
      en: 'Planning, design, full-stack development, deployment — focused intuition and energy, amplified by AI and poured into every digital product.',
    },
    cards: [
      {
        tag: 'PHILOSOPHY',
        title: { ko: '왜 AI Creative Studio인가? 💡', en: 'Why an AI Creative Studio? 💡' },
        body: {
          ko: '소규모 제품에선 전달과 인수인계 비용이 개발보다 큰 법입니다. AI 를 손발처럼 부리며 기획, 시안, 코드를 한 흐름으로 이어, 원래의 명확한 의도를 끝까지 유지합니다.',
          en: 'On small products, handoff costs more than the build itself. With AI as an extra pair of hands, the brief, the mockup, and the code run as one flow — the original intent survives to the end.',
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

    // ── 한눈에 보기: 검색엔진·AI 가 그대로 인용할 수 있게 사실만 적습니다 ──
    glanceBadge: { ko: 'AT A GLANCE 📋', en: 'AT A GLANCE 📋' },
    glanceTitle: { ko: '오즈스 한눈에 보기', en: 'ozs at a glance' },
    glanceLabels: {
      company: { ko: '상호', en: 'Company' },
      founder: { ko: '대표', en: 'Founder' },
      founded: { ko: '설립', en: 'Founded' },
      location: { ko: '위치', en: 'Location' },
      team: { ko: '운영 형태', en: 'Team' },
      services: { ko: '하는 일', en: 'Services' },
      works: { ko: '공개한 작품', en: 'Shipped work' },
      contact: { ko: '상담', en: 'Contact' },
    },
    glanceTeam: {
      ko: '1인 스튜디오 — 대표가 기획, 디자인, 개발, 배포를 모두 맡습니다.',
      en: 'One-person studio — the founder handles planning, design, development, and deployment.',
    },
    glanceServices: {
      ko: '웹사이트 제작, 웹서비스 개발, 인디 게임 개발',
      en: 'Website builds, web service development, indie game development',
    },
    glanceContact: {
      ko: '카카오톡 채널, 이메일 · 전국·해외 원격 진행',
      en: 'KakaoTalk channel, email · remote, nationwide and overseas',
    },
    // {n} 자리에 작품 수가 들어갑니다.
    glanceWorksCount: { ko: '{n}개', en: '{n} projects' },

    processBadge: { ko: 'HOW WE WORK 🛠️', en: 'HOW WE WORK 🛠️' },
    processTitle: { ko: '작업은 이렇게 진행됩니다', en: 'How a project runs' },
    process: [
      {
        title: { ko: '상담', en: 'Talk' },
        body: {
          ko: '카카오톡이나 메일로 만들고 싶은 것을 알려 주세요. 보통 영업일 기준 2일 안에 답변드립니다.',
          en: 'Tell us what you want to build via KakaoTalk or email. Replies usually come within two business days.',
        },
      },
      {
        title: { ko: '기획 · 견적', en: 'Plan & quote' },
        body: {
          ko: '필요한 기능과 범위를 정리하고, 그에 맞춰 견적과 예상 일정을 안내합니다.',
          en: 'We pin down the features and scope, then send a quote and an estimated timeline.',
        },
      },
      {
        title: { ko: '디자인 시안', en: 'Design' },
        body: {
          ko: '화면 시안을 먼저 보여드리고 확인을 받은 뒤 개발로 넘어갑니다.',
          en: 'You see the screen designs first; development starts once you sign off.',
        },
      },
      {
        title: { ko: '개발 · 배포', en: 'Build & ship' },
        body: {
          ko: '가장 작게 동작하는 버전부터 만들어 확인하고, 완성되면 실제 도메인에 배포합니다.',
          en: 'The smallest working version comes first; once complete, it goes live on your real domain.',
        },
      },
      {
        title: { ko: '운영 · 유지보수', en: 'Run & maintain' },
        body: {
          ko: '출시 후의 수정, 기능 추가, 운영 지원은 범위와 기간을 별도로 협의해 이어 갑니다.',
          en: 'Post-launch fixes, new features, and operations support continue under a separately agreed scope.',
        },
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
    channelsAria: { ko: '문의 방법', en: 'How to reach us' },
    kakaoTab: { ko: '카카오톡 상담', en: 'KakaoTalk Chat' },
    kakaoTabDesc: {
      ko: '가볍게 묻고 바로 대화해요',
      en: 'Quick questions, real-time chat',
    },
    kakaoTabTag: { ko: '빠른 상담', en: 'FAST' },
    mailTab: { ko: '메일 신청', en: 'Email Request' },
    mailTabDesc: {
      ko: '자세한 의뢰를 차근차근 남겨요',
      en: 'Leave a detailed project brief',
    },
    mailTabTag: { ko: '상세 의뢰', en: 'DETAILED' },
    kakaoTitle: { ko: '카카오톡으로 편하게 물어보세요 💬', en: 'Just ask us on KakaoTalk 💬' },
    kakaoDesc: {
      ko: '견적이 궁금하거나 아이디어만 있어도 괜찮아요. 채널을 추가하고 메시지를 보내면 바로 이어서 대화할 수 있습니다.',
      en: 'Curious about pricing, or just have an idea? Add the channel and send a message — we pick it up from there.',
    },
    kakaoPoints: [
      { ko: '간단한 견적 · 일정 문의', en: 'Quick quotes and timelines' },
      { ko: '참고 이미지 · 링크 바로 공유', en: 'Share reference images and links' },
      { ko: '대화 기록이 채팅방에 그대로 남아요', en: 'The whole thread stays in your chat' },
    ],
    kakaoCta: { ko: '카카오톡으로 상담하기', en: 'Chat on KakaoTalk' },
    kakaoNote: {
      ko: '카카오톡 앱 또는 웹에서 ozs 채널 채팅방이 열립니다.',
      en: 'Opens the ozs channel chat in the KakaoTalk app or web.',
    },
    kakaoBubbleIn: { ko: '안녕하세요! 무엇을 도와드릴까요? 🙌', en: 'Hi there! How can we help? 🙌' },
    kakaoBubbleOut: { ko: '게임 랜딩 페이지 견적이 궁금해요', en: 'How much for a game landing page?' },
    mailTitle: { ko: '메일로 자세히 알려주세요 ✉️', en: 'Tell us everything by email ✉️' },
    mailDirect: {
      ko: '양식 대신 직접 메일을 보내셔도 됩니다:',
      en: 'Prefer your own mail app? Write to',
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
    sending: { ko: '보내는 중…', en: 'Sending…' },
    sent: {
      ko: '✅ 메시지를 보냈습니다. 보통 영업일 기준 2일 안에 적어 주신 이메일로 답장드립니다.',
      en: '✅ Message sent. You will usually get a reply at your email within two business days.',
    },
    failed: {
      ko: '전송에 실패했습니다. 잠시 후 다시 시도하시거나 이 주소로 직접 메일을 보내 주세요:',
      en: 'Sending failed. Please try again shortly, or email us directly at',
    },
    // 문의가 도착했을 때 받은편지함에 보이는 제목
    mailSubject: { ko: '[오즈스] 새 문의가 도착했습니다', en: '[ozs] New inquiry from the website' },

    // ── 자주 묻는 질문. /contact 의 FAQPage 구조화 데이터도 이 목록으로 만듭니다 ──
    faqBadge: { ko: 'FAQ 🙋', en: 'FAQ 🙋' },
    faqTitle: { ko: '자주 묻는 질문', en: 'Frequently asked questions' },
    faq: [
      {
        q: { ko: '오즈스는 어떤 곳인가요?', en: 'What is ozs?' },
        a: {
          ko: '오즈스(ozs)는 경기도 부천에 있는 1인 AI 크리에이티브 스튜디오입니다. 대표 오세헌이 웹사이트, 웹서비스, 게임의 기획부터 디자인, 개발, 배포까지 직접 맡습니다.',
          en: 'ozs is a one-person AI creative studio in Bucheon, South Korea. Founder Oh Seheon handles planning, design, development, and deployment of websites, web services, and games.',
        },
      },
      {
        q: { ko: '어떤 일을 맡길 수 있나요?', en: 'What can I hire ozs for?' },
        a: {
          ko: '웹사이트(브랜드 사이트, 랜딩 페이지, 프레스킷), 웹서비스(로그인·결제·대시보드가 있는 운영 제품), 게임(소규모 인디 게임의 프로토타입부터 스토어 출시와 업데이트까지)을 맡습니다.',
          en: 'Websites (brand sites, landing pages, press kits), web services (production products with auth, payments, and dashboards), and games (small indie games, from prototype to store release and updates).',
        },
      },
      {
        q: { ko: '제작 비용은 얼마인가요?', en: 'How much does it cost?' },
        a: {
          ko: '필요한 기능, 범위, 일정에 따라 달라서 정해진 가격표는 없습니다. 카카오톡이나 메일로 만들고 싶은 내용을 알려 주시면 상담 후 견적을 드립니다.',
          en: 'There is no fixed price list — it depends on features, scope, and timeline. Tell us what you want to build via KakaoTalk or email and we will send a quote after a short consultation.',
        },
      },
      {
        q: { ko: '기간은 얼마나 걸리나요?', en: 'How long does a project take?' },
        a: {
          ko: '프로젝트 규모에 따라 다릅니다. 상담 후 견적과 함께 예상 일정을 안내합니다.',
          en: 'It depends on the size of the project. You get an estimated timeline together with the quote.',
        },
      },
      {
        q: { ko: '어떻게 의뢰하나요?', en: 'How do I get started?' },
        a: {
          ko: '간단한 질문은 카카오톡 채널로, 자세한 의뢰는 문의 페이지의 메일 양식으로 보내 주세요. 보통 영업일 기준 2일 안에 답변드립니다.',
          en: 'Send quick questions through the KakaoTalk channel, and detailed requests through the email form on this page. Replies usually come within two business days.',
        },
      },
      {
        q: { ko: '출시 후 유지보수도 해 주나요?', en: 'Do you offer maintenance after launch?' },
        a: {
          ko: '네. 출시 이후의 수정, 기능 추가, 운영 지원은 범위와 기간을 별도로 협의해 진행합니다.',
          en: 'Yes. Post-launch fixes, new features, and operations support are provided under a separately agreed scope and period.',
        },
      },
      {
        q: { ko: '부천이 아닌 지역이나 해외에서도 의뢰할 수 있나요?', en: 'Can I work with ozs from outside Bucheon or Korea?' },
        a: {
          ko: '네. 상담과 진행을 카카오톡, 메일, 화상 회의로 원격으로 하기 때문에 지역 제한 없이 전국과 해외 의뢰를 받습니다.',
          en: 'Yes. Consultation and project work happen remotely over KakaoTalk, email, and video calls, so clients anywhere in Korea or abroad are welcome.',
        },
      },
      {
        q: { ko: '어떤 기술로 만드나요?', en: 'What technology do you use?' },
        a: {
          ko: '웹은 React, Vite, TypeScript, Node, Postgres와 Cloudflare를, 게임은 Unity, Unreal Engine, HTML5를 씁니다. 기획, 시안, 코드 작성 전반에 AI를 함께 활용합니다.',
          en: 'For the web: React, Vite, TypeScript, Node, Postgres, and Cloudflare. For games: Unity, Unreal Engine, and HTML5. AI is used throughout planning, design, and coding.',
        },
      },
    ],
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

  legal: {
    badge: { ko: 'POLICY 📄', en: 'POLICY 📄' },
    effective: { ko: '시행일', en: 'Effective date' },
    navAria: { ko: '다른 정책 문서', en: 'Other policies' },
  },

  footer: {
    company: { ko: '회사명', en: 'Company' },
    ceo: { ko: '대표', en: 'CEO' },
    regNumber: { ko: '사업자등록번호', en: 'Business reg. no.' },
    address: { ko: '주소', en: 'Address' },
    tel: { ko: '전화', en: 'Tel' },
    email: { ko: '이메일', en: 'Email' },
    copy: {
      ko: '본 사이트의 모든 콘텐츠는 무단 전재 및 배포를 금합니다.',
      en: 'All content on this site may not be reproduced or distributed without permission.',
    },
  },
}
