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
    slug: 'where-monsters-live',
    index: '08',
    name: 'Where Monsters Live',
    kind: 'Game',
    year: '2026',
    status: 'in-development',
    summary: {
      ko: '방바닥 아래 숲에서 괴물 친구들의 마음을 달래며 내 마음을 알아 가는 이야기 모험.',
      en: 'A story adventure where a boy soothes the hearts of monster friends in a forest beneath his bedroom floor — and finds the same feelings in himself.',
    },
    description: {
      ko: '“아무도 내 마음을 몰라!” 하고 외친 날 밤, 소년은 방바닥 틈 아래로 이어진 숲에 들어섭니다. 그 숲에서는 말하지 못한 마음이 괴물들의 몸과 숲의 날씨로 드러납니다. 대화의 정답을 고르는 대신 괴물과 함께 놀고, 기다리고, 무언가를 만들며 마음을 나누는 게임으로 지금 개발하고 있습니다.',
      en: 'The night he shouts “Nobody understands me!”, a boy slips through a crack in his bedroom floor into a forest where unspoken feelings show up as the bodies of monsters and the weather itself. Instead of picking the right line of dialogue, you share feelings by playing, waiting and making things together with the monsters. Currently in development.',
    },
    thumb: '/img/where-monsters-live.jpg',
    cover: '/img/where-monsters-live.jpg',
    shots: [],
    spec: [
      {
        label: { ko: '장르', en: 'Genre' },
        value: { ko: '이야기 모험', en: 'Story adventure' },
      },
      {
        label: { ko: '게임엔진', en: 'Game engine' },
        value: 'Unreal Engine',
      },
      {
        label: { ko: '역할', en: 'Role' },
        value: { ko: '기획, 디자인, 개발', en: 'Planning, design, development' },
      },
    ],
    stores: [],
    presskit: false,
  },
  {
    slug: 'unsheathed',
    index: '07',
    name: 'Unsheathed',
    kind: 'Game',
    year: '2026',
    status: 'in-development',
    summary: {
      ko: '시간 밖의 결투장에서 서로 다른 시대의 검객이 맞붙는 3D 검술 대전.',
      en: 'A 3D sword duel where swordsmen from different eras meet in an arena outside of time.',
    },
    description: {
      ko: '칼에 베여 죽기 직전의 순간, 검객들은 시간 밖의 결투장으로 불려 옵니다. 이기면 그 죽음을 되돌려 준다는 조건 아래 카타나를 쥔 사무라이와 레이피어를 든 유럽 검객이 마주 섭니다. 체력바 없이 거리와 타이밍을 읽어 몇 번의 정확한 일격으로 승부가 갈리는 게임으로 지금 개발하고 있습니다.',
      en: 'At the instant before a fatal blade lands, swordsmen are pulled into a duelling ground outside of time — win, and your death is undone. A samurai with a katana faces a European swordsman with a rapier. There are no health bars: you read distance and timing, and a few precise strikes decide the bout. Currently in development.',
    },
    thumb: '/img/unsheathed.jpg',
    cover: '/img/unsheathed.jpg',
    shots: [],
    spec: [
      {
        label: { ko: '장르', en: 'Genre' },
        value: { ko: '검술 대전', en: 'Sword duelling' },
      },
      {
        label: { ko: '게임엔진', en: 'Game engine' },
        value: 'Unreal Engine',
      },
      {
        label: { ko: '역할', en: 'Role' },
        value: { ko: '기획, 디자인, 개발', en: 'Planning, design, development' },
      },
    ],
    stores: [],
    presskit: false,
  },
  {
    slug: 'divided-kingdoms',
    index: '06',
    name: 'The Divided Kingdoms',
    kind: 'Game',
    year: '2026',
    status: 'in-development',
    summary: {
      ko: '사이버펑크 정비공이 중세 판타지 세계의 분열된 네 왕국을 가로지르는 팀 액션 RPG.',
      en: 'A team action RPG in which a cyberpunk mechanic crosses four divided kingdoms in a medieval fantasy world.',
    },
    description: {
      ko: '사이버펑크 도시의 정비공 게일이 할머니의 유품에 이끌려 중세 판타지 세계에 떨어집니다. 오염된 고향의 코어 AI 를 고칠 열쇠를 잃어버린 게일은, 그 열쇠를 차지하려는 네 왕국을 가로지르며 저마다 무언가가 빠진 동료들과 함께 열쇠를 쫓습니다. 지금 개발하고 있습니다.',
      en: 'Gale, a mechanic from a cyberpunk city, is drawn by an heirloom from Gale’s grandmother into a medieval fantasy world. Having lost the key that could fix the corrupted core AI back home, Gale chases it across four kingdoms that each want it for themselves, joined by companions who are each missing something. Currently in development.',
    },
    thumb: '/img/divided-kingdoms.jpg',
    cover: '/img/divided-kingdoms.jpg',
    shots: [],
    spec: [
      {
        label: { ko: '장르', en: 'Genre' },
        value: { ko: '팀 액션 RPG', en: 'Team action RPG' },
      },
      {
        label: { ko: '게임엔진', en: 'Game engine' },
        value: 'Unreal Engine',
      },
      {
        label: { ko: '역할', en: 'Role' },
        value: { ko: '기획, 디자인, 개발', en: 'Planning, design, development' },
      },
    ],
    stores: [],
    presskit: false,
  },
  {
    slug: 'naias',
    index: '05',
    name: 'NAIAS',
    kind: 'Game',
    year: '2026',
    status: 'demo',
    summary: {
      ko: '축제가 열린 강변 마을에서 물총 하나로 벌이는 카툰풍 물싸움 대회.',
      en: 'A cartoon water-gun tournament set in a festival-bound riverside village.',
    },
    description: {
      ko: '휴가차 찾은 강변 마을 아쿠나에서 축제 첫날 폰이라는 소녀에게 물벼락을 맞고, 그날 밤부터 싸구려 장난감 물총 속 물의 정령이 말을 걸어옵니다. 상대를 먼저 세 번 적시면 라운드를 가져가고, 물통이 바닥나기 전에 물드럼에서 채워야 합니다. 지금은 첫 챕터인 아쿠나 마을 편을 데모로 itch.io 에 공개해 두었습니다.',
      en: 'On holiday in the riverside village of Aquna, you get ambushed with water by a girl named Fon on the first day of the festival — and by nightfall, a water spirit is talking to you from inside your cheap toy water gun. First to three splashes takes the round, and you refill at the water drums before your tank runs dry. The first chapter, the Aquna Village slice, is out as a demo on itch.io.',
    },
    thumb: '/img/naias.jpg',
    cover: '/img/naias.jpg',
    shots: [],
    spec: [
      {
        label: { ko: '플랫폼', en: 'Platform' },
        value: 'Windows',
      },
      {
        label: { ko: '게임엔진', en: 'Game engine' },
        value: 'Unreal Engine',
      },
      { label: { ko: '공개', en: 'Launched' }, value: { ko: '2026.10 (데모)', en: '2026.10 (demo)' } },
      {
        label: { ko: '역할', en: 'Role' },
        value: { ko: '기획, 디자인, 개발', en: 'Planning, design, development' },
      },
    ],
    stores: [
      {
        label: { ko: 'itch.io 에서 보기', en: 'View on itch.io' },
        href: 'https://diffth.itch.io/naias',
      },
    ],
    presskit: false,
  },
  {
    slug: 'wind-courier',
    index: '04',
    name: 'Wind Courier',
    kind: 'Game',
    year: '2026',
    status: 'demo',
    summary: {
      ko: '1920년대 유럽 시골을 닮은 수채화 세계를 나는 우편 비행 어드벤처.',
      en: 'A peaceful flying adventure through a watercolour world inspired by 1920s rural Europe.',
    },
    description: {
      ko: '젊은 우편 비행사 리브가 되어 노란 복엽기를 몰고 외딴 마을 사이로 편지를 나릅니다. 바람의 흐름을 읽으며 항로를 잡고, 배달을 이어 가는 동안 마을 사람들의 이야기를 하나씩 알게 됩니다. 지금은 플레이할 수 있는 데모를 itch.io 에 공개해 두었습니다.',
      en: 'You play Liv, a young courier flying a yellow biplane to carry mail between remote villages. You read the wind to plot your route, and each delivery uncovers a little more of the villagers’ stories. A playable demo is out on itch.io.',
    },
    thumb: '/img/wind-courier.jpg',
    cover: '/img/wind-courier.jpg',
    shots: [],
    spec: [
      {
        label: { ko: '플랫폼', en: 'Platform' },
        value: 'Windows',
      },
      {
        label: { ko: '게임엔진', en: 'Game engine' },
        value: 'Unreal Engine',
      },
      { label: { ko: '공개', en: 'Launched' }, value: { ko: '2026.09 (데모)', en: '2026.09 (demo)' } },
      {
        label: { ko: '역할', en: 'Role' },
        value: { ko: '기획, 디자인, 개발', en: 'Planning, design, development' },
      },
    ],
    stores: [
      {
        label: { ko: 'itch.io 에서 보기', en: 'View on itch.io' },
        href: 'https://diffth.itch.io/wind-courier',
      },
    ],
    presskit: false,
  },
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
  released: { ko: '출시', en: 'Released' },
  'in-development': { ko: '개발 중', en: 'In development' },
  demo: { ko: '데모 공개중', en: 'Demo live' },
  archived: { ko: '보관', en: 'Archived' },
}

export const getProduct = (slug) => products.find((p) => p.slug === slug)
