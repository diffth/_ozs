import { useEffect, useRef, useState } from 'react'
import KakaoIcon from '../components/KakaoIcon.jsx'
import Seo from '../components/Seo.jsx'
import { site } from '../data/site.js'
import { useLang } from '../i18n/LanguageProvider.jsx'

const FORM_ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = 'YOUR-ACCESS-KEY-HERE'

const CHANNELS = ['kakao', 'mail']

const LABEL_STYLE = {
  display: 'block',
  fontFamily: 'var(--font-heading)',
  fontWeight: 600,
  color: 'var(--pop-text-dark)',
  marginBottom: '0.5rem',
}

const FIELD_STYLE = {
  width: '100%',
  padding: '0.9rem 1.25rem',
  borderRadius: '16px',
  border: '2px solid #e2e8f0',
  fontSize: '1rem',
  fontFamily: 'var(--font-body)',
  outline: 'none',
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export default function Contact() {
  const { lang, t, tr, raw } = useLang()
  const topics = raw('contact.topics')
  const [channel, setChannel] = useState('kakao')
  const tabRefs = useRef({})

  // /contact#mail 처럼 들어오면 해당 탭을 먼저 엽니다. SSG 셸과 어긋나지 않게 마운트 후에 읽습니다.
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (CHANNELS.includes(hash)) setChannel(hash)
  }, [])

  const select = (key) => {
    setChannel(key)
    window.history.replaceState(null, '', `#${key}`)
  }

  // 탭 목록 안에서는 방향키로 옮겨 다니는 WAI-ARIA 탭 패턴을 따릅니다.
  const onTabKey = (e) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return
    e.preventDefault()
    const i = CHANNELS.indexOf(channel)
    let next = i
    if (e.key === 'ArrowLeft') next = (i - 1 + CHANNELS.length) % CHANNELS.length
    if (e.key === 'ArrowRight') next = (i + 1) % CHANNELS.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = CHANNELS.length - 1
    select(CHANNELS[next])
    tabRefs.current[CHANNELS[next]]?.focus()
  }

  return (
    <>
      <Seo title="Contact" description={t('seo.contactDesc')} path="/contact" />

      <section className="hero-pop" style={{ padding: '4rem 0 5rem' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="badge-pop" style={{ marginBottom: '1rem' }}>
            {t('contact.badge')}
          </span>
          <h1 className="hero-pop__title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: '0 auto 1.5rem' }}>
            {t('contact.titleLead')} <span>{t('contact.titleHighlight')}</span>
          </h1>
          <p className="hero-pop__desc" style={{ margin: '0 auto', maxWidth: '52ch' }}>
            {t('contact.desc')}
          </p>
        </div>
      </section>

      {/* Wave Divider */}
      {/* 민트 띠의 위·아래 물결을 반주기 어긋나게 두어, 히어로 그라데이션과
          크림 배경 사이에서 두 물결이 엇갈려 보이게 합니다.
          윗물결 위쪽은 비워 두어야 히어로 그라데이션이 그대로 이어집니다. */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="#48ecd0"
            d="M0,37 C183,59.7 367,59.7 550,37 C733,14.3 917,14.3 1100,37 C1283,59.7 1467,59.7 1650,37 L1650,120 L-1100,120 Z"
          ></path>
          <path
            fill="#fffbf5"
            d="M-825,83 C-642,105.7 -458,105.7 -275,83 C-92,60.3 92,60.3 275,83 C458,105.7 642,105.7 825,83 C1008,60.3 1192,60.3 1375,83 C1558,105.7 1742,105.7 1925,83 L1925,120 L-1100,120 Z"
          ></path>
        </svg>
      </div>

      <section className="sec-pop">
        <div className="wrap contact">
          <div className="contact__tabs" role="tablist" aria-label={t('contact.channelsAria')} onKeyDown={onTabKey}>
            {CHANNELS.map((key) => (
              <button
                key={key}
                ref={(el) => {
                  tabRefs.current[key] = el
                }}
                id={`contact-tab-${key}`}
                type="button"
                role="tab"
                aria-selected={channel === key}
                aria-controls={`contact-panel-${key}`}
                tabIndex={channel === key ? 0 : -1}
                className={`contact__tab contact__tab--${key}`}
                onClick={() => select(key)}
              >
                <span className="contact__tab-icon">{key === 'kakao' ? <KakaoIcon /> : <MailIcon />}</span>
                <span className="contact__tab-text">
                  <span className="contact__tab-title">{t(`contact.${key}Tab`)}</span>
                  <span className="contact__tab-desc">{t(`contact.${key}TabDesc`)}</span>
                </span>
                <span className="contact__tab-tag">{t(`contact.${key}TabTag`)}</span>
              </button>
            ))}
          </div>

          <div
            id="contact-panel-kakao"
            role="tabpanel"
            aria-labelledby="contact-tab-kakao"
            hidden={channel !== 'kakao'}
            className="contact__panel contact__panel--kakao"
          >
            <div className="contact__kakao-body">
              <h2 className="contact__panel-title">{t('contact.kakaoTitle')}</h2>
              <p className="contact__panel-desc">{t('contact.kakaoDesc')}</p>
              <ul className="contact__points">
                {raw('contact.kakaoPoints').map((p) => (
                  <li key={p.en}>{tr(p)}</li>
                ))}
              </ul>
              <a className="contact__kakao-btn" href={site.kakao} target="_blank" rel="noopener noreferrer">
                <KakaoIcon />
                {t('contact.kakaoCta')}
              </a>
              <p className="contact__note">{t('contact.kakaoNote')}</p>
            </div>

            {/* 채팅 화면을 흉내 낸 장식이라 스크린리더에서는 건너뜁니다. */}
            <div className="contact__chat" aria-hidden="true">
              <div className="contact__chat-head">
                <span className="contact__chat-avatar">oz</span>
                ozs
              </div>
              <p className="contact__bubble contact__bubble--in">{t('contact.kakaoBubbleIn')}</p>
              <p className="contact__bubble contact__bubble--out">{t('contact.kakaoBubbleOut')}</p>
              <p className="contact__bubble contact__bubble--in contact__bubble--typing">
                <span />
                <span />
                <span />
              </p>
            </div>
          </div>

          <div
            id="contact-panel-mail"
            role="tabpanel"
            aria-labelledby="contact-tab-mail"
            hidden={channel !== 'mail'}
            className="contact__panel contact__panel--mail"
          >
            <h2 className="contact__panel-title">{t('contact.mailTitle')}</h2>
            <p className="contact__panel-desc">
              {t('contact.mailDirect')} <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>

            <form action={FORM_ENDPOINT} method="POST">
              <input type="hidden" name="access_key" value={ACCESS_KEY} />
              <input type="hidden" name="language" value={lang} />
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" />

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={LABEL_STYLE}>{t('contact.nameLabel')}</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t('contact.namePlaceholder')}
                  style={FIELD_STYLE}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={LABEL_STYLE}>{t('contact.emailLabel')}</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  style={FIELD_STYLE}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={LABEL_STYLE}>{t('contact.topicLabel')}</label>
                <select name="topic" style={{ ...FIELD_STYLE, background: '#ffffff' }}>
                  {topics.map((o) => (
                    <option key={o.value} value={o.value}>
                      {tr(o)}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={LABEL_STYLE}>{t('contact.messageLabel')}</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t('contact.messagePlaceholder')}
                  style={{ ...FIELD_STYLE, resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-pop" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>
                {t('contact.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 자주 묻는 질문. 답은 접혀 있어도 DOM 에 들어 있어 크롤러·AI 가 읽습니다.
          같은 목록으로 build-static.mjs 가 FAQPage 구조화 데이터를 만듭니다. */}
      <section className="sec-pop" style={{ background: '#ffffff' }}>
        <div className="wrap">
          <div className="sec-pop__head">
            <span className="badge-pop" style={{ background: 'var(--pop-pink-bg)' }}>{t('contact.faqBadge')}</span>
            <h2 className="sec-pop__title">{t('contact.faqTitle')}</h2>
          </div>

          <div className="faq">
            {raw('contact.faq').map((item, i) => (
              <details key={i} className="faq__item" open={i === 0}>
                <summary className="faq__q">
                  <h3>{tr(item.q)}</h3>
                </summary>
                <p className="faq__a">{tr(item.a)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
