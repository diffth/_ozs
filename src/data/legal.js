// ─────────────────────────────────────────────
//  푸터에 링크된 법적 고지 문서.
//
//  { ko: '…', en: '…' } 형식은 site.js 와 같습니다.
//  문서마다 path 가 곧 라우트 주소이며, 새 문서를 추가하면
//  scripts/build-static.mjs 가 이 목록을 읽어 정적 HTML 도 함께 만듭니다.
//
//  섹션의 body 는 문단, items 는 글머리표 목록입니다.
//  내용을 바꾸면 effective(시행일)도 함께 고쳐 주세요.
// ─────────────────────────────────────────────
import { site } from './site.js'

const b = site.business

export const legalDocs = [
  {
    key: 'privacy',
    path: '/privacy',
    title: { ko: '개인정보처리방침', en: 'Privacy Policy' },
    effective: '2026-09-17',
    intro: {
      ko: `${b.company.ko}(이하 "회사")는 「개인정보 보호법」 등 관련 법령을 지키며, 이용자의 개인정보를 소중히 다룹니다. 이 방침은 ${site.url} 에서 어떤 정보를 왜 받고 어떻게 관리하는지 알려드립니다.`,
      en: `${b.company.en} ("we") follows the Personal Information Protection Act of Korea and related laws. This policy explains what information ${site.url} collects, why, and how it is handled.`,
    },
    sections: [
      {
        heading: { ko: '수집하는 개인정보 항목', en: 'Information we collect' },
        body: [
          {
            ko: '회원가입 없이 이용할 수 있는 사이트이며, 문의를 보낼 때에만 아래 정보를 받습니다.',
            en: 'The site requires no sign-up. We only receive the following when you send an inquiry.',
          },
        ],
        items: [
          { ko: '필수: 이름 또는 회사명, 회신받을 이메일, 문의 종류, 문의 내용', en: 'Required: name or company, reply-to email, inquiry type, message' },
          { ko: '자동 수집: 접속 IP, 브라우저 종류, 접속 일시 (호스팅 서버 로그)', en: 'Collected automatically: IP address, browser type, access time (hosting server logs)' },
        ],
      },
      {
        heading: { ko: '개인정보의 수집 및 이용 목적', en: 'Why we use it' },
        items: [
          { ko: '문의 내용 확인과 회신', en: 'Reading and replying to your inquiry' },
          { ko: '개발 의뢰·제휴 상담 및 계약 검토', en: 'Discussing development requests, partnerships, and contracts' },
          { ko: '사이트 보안 유지와 비정상 접근 차단', en: 'Keeping the site secure and blocking abusive traffic' },
        ],
      },
      {
        heading: { ko: '개인정보의 보유 및 이용 기간', en: 'How long we keep it' },
        body: [
          {
            ko: '문의 처리가 끝나면 1년 이내에 파기합니다. 다만 계약으로 이어진 경우 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관련 법령이 정한 기간(계약·대금결제 기록 5년 등) 동안 보관합니다.',
            en: 'Inquiry data is deleted within one year after the inquiry is closed. If it leads to a contract, records are kept for the period required by law (e.g. five years for contract and payment records).',
          },
        ],
      },
      {
        heading: { ko: '개인정보의 파기 절차 및 방법', en: 'How we delete it' },
        body: [
          {
            ko: '보유 기간이 끝나거나 목적을 달성한 정보는 지체 없이 파기합니다. 전자 파일은 복구할 수 없는 방법으로 삭제하고, 출력물은 분쇄합니다.',
            en: 'Information is deleted without delay once its retention period ends. Electronic files are erased so they cannot be recovered, and printouts are shredded.',
          },
        ],
      },
      {
        heading: { ko: '개인정보의 제3자 제공', en: 'Sharing with third parties' },
        body: [
          {
            ko: '회사는 이용자의 동의가 있거나 법령에 따라 요구되는 경우를 제외하고 개인정보를 외부에 제공하지 않습니다.',
            en: 'We do not share personal information with anyone unless you consent or the law requires it.',
          },
        ],
      },
      {
        heading: { ko: '처리 위탁 및 외부 서비스 이용', en: 'Service providers' },
        body: [
          {
            ko: '사이트 운영을 위해 아래 국외 서비스를 이용하며, 이 과정에서 정보가 해당 사업자의 서버를 거칠 수 있습니다.',
            en: 'We use the following overseas services to run the site, so information may pass through their servers.',
          },
        ],
        items: [
          { ko: 'Cloudflare, Inc. (미국) — 웹사이트 호스팅, 보안, 접속 로그 처리', en: 'Cloudflare, Inc. (USA) — hosting, security, access logs' },
          { ko: 'Web3Forms — 문의 폼 내용을 회사 이메일로 전달', en: 'Web3Forms — forwarding inquiry form submissions to our email' },
        ],
      },
      {
        heading: { ko: '이용자의 권리와 행사 방법', en: 'Your rights' },
        body: [
          {
            ko: `이용자는 언제든지 자신의 개인정보 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다. ${site.email} 로 요청하시면 지체 없이 조치합니다.`,
            en: `You may ask to view, correct, delete, or stop the processing of your personal information at any time. Email ${site.email} and we will act without delay.`,
          },
        ],
      },
      {
        heading: { ko: '쿠키 등 자동 수집 장치', en: 'Cookies and local storage' },
        body: [
          {
            ko: '회사는 쿠키나 방문 분석 도구를 사용하지 않습니다. 선택한 표시 언어(한국어/English)만 이용자의 브라우저 저장소(localStorage)에 남기며, 이 값은 서버로 전송되지 않습니다. 브라우저 설정에서 언제든 지울 수 있습니다.',
            en: 'We do not use cookies or analytics tools. Only your chosen display language (Korean/English) is saved in your browser’s localStorage; it is never sent to our server and can be cleared in your browser settings.',
          },
        ],
      },
      {
        heading: { ko: '개인정보의 안전성 확보 조치', en: 'Security measures' },
        items: [
          { ko: '모든 통신을 HTTPS로 암호화', en: 'All traffic is encrypted over HTTPS' },
          { ko: '개인정보에 접근할 수 있는 사람을 대표자로 한정', en: 'Access to personal information is limited to the owner' },
          { ko: '관리 계정의 2단계 인증 사용', en: 'Two-factor authentication on admin accounts' },
        ],
      },
      {
        heading: { ko: '개인정보 보호책임자', en: 'Privacy officer' },
        items: [
          { ko: `성명: ${b.ceo.ko} (대표)`, en: `Name: ${b.ceo.en} (CEO)` },
          { ko: `이메일: ${site.email}`, en: `Email: ${site.email}` },
          { ko: `전화: ${b.tel}`, en: `Tel: ${b.tel}` },
        ],
      },
      {
        heading: { ko: '권익침해 구제 방법', en: 'Getting help' },
        body: [
          {
            ko: '개인정보 침해에 대한 상담이나 신고는 아래 기관에 문의하실 수 있습니다.',
            en: 'For advice or to report a privacy violation, you can contact the following Korean agencies.',
          },
        ],
        items: [
          { ko: '개인정보분쟁조정위원회: 1833-6972 (www.kopico.go.kr)', en: 'Personal Information Dispute Mediation Committee: 1833-6972 (www.kopico.go.kr)' },
          { ko: '개인정보침해신고센터: 118 (privacy.kisa.or.kr)', en: 'Personal Information Infringement Report Center: 118 (privacy.kisa.or.kr)' },
          { ko: '대검찰청 사이버수사과: 1301 (www.spo.go.kr)', en: 'Supreme Prosecutors’ Office Cyber Investigation: 1301 (www.spo.go.kr)' },
          { ko: '경찰청 사이버수사국: 182 (ecrm.police.go.kr)', en: 'Korean National Police Cyber Bureau: 182 (ecrm.police.go.kr)' },
        ],
      },
    ],
  },

  {
    key: 'terms',
    path: '/terms',
    title: { ko: '이용약관', en: 'Terms of Use' },
    effective: '2026-09-17',
    intro: {
      ko: `이 약관은 ${b.company.ko}(이하 "회사")가 운영하는 ${site.url} 의 이용 조건을 정합니다. 사이트를 이용하면 이 약관에 동의한 것으로 봅니다.`,
      en: `These terms govern the use of ${site.url}, operated by ${b.company.en} ("we"). By using the site you agree to these terms.`,
    },
    sections: [
      {
        heading: { ko: '제1조 (목적)', en: 'Article 1 (Purpose)' },
        body: [
          {
            ko: '이 약관은 회사가 제공하는 웹사이트와 문의 서비스를 이용하는 데 필요한 회사와 이용자의 권리, 의무 및 책임 사항을 정하는 것을 목적으로 합니다.',
            en: 'These terms set out the rights, duties, and responsibilities of the company and users regarding the website and inquiry service.',
          },
        ],
      },
      {
        heading: { ko: '제2조 (정의)', en: 'Article 2 (Definitions)' },
        items: [
          { ko: '"사이트"란 회사가 운영하는 ' + site.url + ' 및 그 하위 페이지를 말합니다.', en: '"Site" means ' + site.url + ' and all of its pages.' },
          { ko: '"이용자"란 사이트에 접속해 이 약관에 따라 사이트를 이용하는 모든 사람을 말합니다.', en: '"User" means anyone who visits and uses the site under these terms.' },
          { ko: '"문의"란 이용자가 문의 폼이나 이메일로 개발 의뢰, 제휴 등을 요청하는 것을 말합니다.', en: '"Inquiry" means a request for development work, partnership, etc. sent through the contact form or by email.' },
        ],
      },
      {
        heading: { ko: '제3조 (약관의 게시와 개정)', en: 'Article 3 (Posting and changes)' },
        body: [
          {
            ko: '회사는 이 약관을 사이트 하단에 게시합니다. 관련 법령을 어기지 않는 범위에서 약관을 개정할 수 있으며, 개정 시 시행일 7일 전부터 사이트에 공지합니다.',
            en: 'These terms are linked in the site footer. We may revise them within the limits of the law and will post notice on the site at least 7 days before the change takes effect.',
          },
        ],
      },
      {
        heading: { ko: '제4조 (서비스의 제공)', en: 'Article 4 (Services)' },
        body: [
          {
            ko: '회사는 스튜디오 소개, 제작 사례 안내, 문의 접수 서비스를 회원가입 없이 제공합니다. 설비 점검이나 장애 등 불가피한 사유가 있으면 서비스를 일시 중단할 수 있습니다.',
            en: 'We provide studio information, a portfolio of work, and an inquiry service without sign-up. The service may be paused temporarily for maintenance, outages, or other unavoidable reasons.',
          },
        ],
      },
      {
        heading: { ko: '제5조 (이용자의 의무)', en: 'Article 5 (User obligations)' },
        body: [{ ko: '이용자는 다음 행위를 해서는 안 됩니다.', en: 'Users must not:' }],
        items: [
          { ko: '타인의 정보를 도용하거나 거짓 내용으로 문의하는 행위', en: 'Use someone else’s identity or send false inquiries' },
          { ko: '광고성 정보나 스팸을 반복해서 보내는 행위', en: 'Repeatedly send advertising or spam' },
          { ko: '사이트의 정상적인 운영을 방해하거나 보안을 침해하는 행위', en: 'Disrupt the site or attempt to breach its security' },
          { ko: '회사나 제3자의 저작권 등 권리를 침해하는 행위', en: 'Infringe the copyright or other rights of the company or third parties' },
        ],
      },
      {
        heading: { ko: '제6조 (개발 의뢰와 계약)', en: 'Article 6 (Project requests and contracts)' },
        body: [
          {
            ko: '문의를 보내는 것만으로 계약이 성립하지 않습니다. 작업 범위, 일정, 비용은 상호 협의 후 별도의 계약서로 정하며, 회사는 사정에 따라 의뢰를 정중히 거절할 수 있습니다.',
            en: 'Sending an inquiry does not create a contract. Scope, schedule, and fees are agreed separately in a written contract, and we may decline a request.',
          },
        ],
      },
      {
        heading: { ko: '제7조 (저작권)', en: 'Article 7 (Copyright)' },
        body: [
          {
            ko: '사이트에 게시된 글, 이미지, 디자인, 코드 등의 저작권은 회사 또는 각 권리자에게 있습니다. 회사의 사전 동의 없이 복제, 배포, 전송, 2차 가공할 수 없습니다.',
            en: 'Copyright in the text, images, design, and code on the site belongs to the company or the respective owners. They may not be copied, distributed, transmitted, or adapted without our prior consent.',
          },
        ],
      },
      {
        heading: { ko: '제8조 (외부 링크)', en: 'Article 8 (External links)' },
        body: [
          {
            ko: '사이트에는 제작 사례 등 외부 사이트로 이동하는 링크가 있을 수 있습니다. 외부 사이트의 내용과 개인정보 처리에 대해서는 회사가 책임지지 않습니다.',
            en: 'The site may link to external sites such as client projects. We are not responsible for their content or privacy practices.',
          },
        ],
      },
      {
        heading: { ko: '제9조 (면책)', en: 'Article 9 (Disclaimer)' },
        body: [
          {
            ko: '회사는 천재지변, 통신 장애 등 회사가 통제할 수 없는 사유로 발생한 손해에 대해 책임지지 않습니다. 사이트의 정보는 일반적인 안내이며, 이를 근거로 한 이용자의 판단에 대해서는 책임지지 않습니다.',
            en: 'We are not liable for damage caused by events beyond our control, such as natural disasters or network failures. Information on the site is general in nature, and we are not responsible for decisions made based on it.',
          },
        ],
      },
      {
        heading: { ko: '제10조 (준거법 및 관할)', en: 'Article 10 (Governing law)' },
        body: [
          {
            ko: '이 약관은 대한민국 법률에 따르며, 분쟁이 생기면 민사소송법에 따른 관할 법원에서 해결합니다.',
            en: 'These terms are governed by the laws of the Republic of Korea, and disputes are resolved in the competent court under the Civil Procedure Act.',
          },
        ],
      },
      {
        heading: { ko: '부칙', en: 'Addendum' },
        body: [{ ko: '이 약관은 2026년 9월 17일부터 시행합니다.', en: 'These terms take effect on September 17, 2026.' }],
      },
    ],
  },

  {
    key: 'emailRefusal',
    path: '/email-refusal',
    title: { ko: '이메일무단수집거부', en: 'No Email Harvesting' },
    effective: '2026-09-17',
    intro: {
      ko: '본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부합니다. 이를 위반하면 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」에 따라 형사처벌을 받을 수 있습니다.',
      en: 'We refuse the unauthorized collection of email addresses published on this website using harvesting programs or other technical means. Violations may be criminally punished under the Act on Promotion of Information and Communications Network Utilization and Information Protection.',
    },
    sections: [
      {
        heading: {
          ko: '정보통신망법 제50조의2 (전자우편주소의 무단 수집행위 등 금지)',
          en: 'Article 50-2 of the Network Act (Prohibition of unauthorized collection of email addresses)',
        },
        items: [
          {
            ko: '① 누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전 동의 없이 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램이나 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니 된다.',
            en: '(1) No one may collect email addresses from a website, without the prior consent of its operator or administrator, using a program or other technical device that automatically collects email addresses.',
          },
          {
            ko: '② 누구든지 제1항을 위반하여 수집된 전자우편주소를 판매·유통하여서는 아니 된다.',
            en: '(2) No one may sell or distribute email addresses collected in violation of paragraph (1).',
          },
          {
            ko: '③ 누구든지 제1항과 제2항에 따라 수집·판매 및 유통이 금지된 전자우편주소임을 알면서 이를 정보 전송에 이용하여서는 아니 된다.',
            en: '(3) No one may knowingly use email addresses whose collection, sale, or distribution is prohibited under paragraphs (1) and (2) to send information.',
          },
        ],
      },
      {
        heading: { ko: '문의', en: 'Contact' },
        body: [
          {
            ko: `이메일 주소 사용이나 광고성 정보 수신과 관련한 문의는 ${site.email} 또는 ${b.tel} 로 연락해 주세요.`,
            en: `For questions about the use of email addresses or unsolicited messages, contact ${site.email} or ${b.tel}.`,
          },
        ],
      },
    ],
  },
]
