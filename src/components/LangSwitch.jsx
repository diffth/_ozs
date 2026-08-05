import { useLang } from '../i18n/LanguageProvider.jsx'
import { LANG_LABEL, LANG_SHORT } from '../i18n/index.js'

/** 헤더에 들어가는 KO / EN 전환 스위치. */
export default function LangSwitch() {
  const { lang, setLang, langs, t } = useLang()

  return (
    <div className="lang-switch" role="group" aria-label={t('common.langSwitchAria')}>
      {langs.map((code) => (
        <button
          key={code}
          type="button"
          className="lang-switch__btn"
          aria-pressed={lang === code}
          lang={code}
          title={LANG_LABEL[code]}
          onClick={() => setLang(code)}
        >
          {LANG_SHORT[code]}
        </button>
      ))}
    </div>
  )
}
