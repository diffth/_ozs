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
      <div className="wave-divider" style={{ background: '#fffbf5' }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="#48ecd0"
            fillOpacity="1"
            d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,21.3C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
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
