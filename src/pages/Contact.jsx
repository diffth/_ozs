import Seo from '../components/Seo.jsx'
import { useLang } from '../i18n/LanguageProvider.jsx'

const FORM_ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = 'YOUR-ACCESS-KEY-HERE'

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

export default function Contact() {
  const { lang, t, tr, raw } = useLang()
  const topics = raw('contact.topics')

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
        <div className="wrap" style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '28px',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              boxShadow: '0 20px 45px rgba(0,0,0,0.08)',
              width: '100%',
              maxWidth: '38rem',
              border: '4px solid var(--pop-pink-bg)'
            }}
          >
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
    </>
  )
}
