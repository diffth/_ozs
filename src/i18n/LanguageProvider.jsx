import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  DEFAULT_LANG,
  LANGS,
  STORAGE_KEY,
  detectLang,
  normalizeLang,
  raw,
  tr,
  translate,
} from './index.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLang)

  // 브라우저 언어 감지는 첫 렌더 이후에 확정합니다. (SSG 셸과의 불일치 방지)
  useEffect(() => {
    const detected = detectLang()
    if (detected !== lang) setLangState(detected)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next) => {
    const safe = normalizeLang(next) ?? DEFAULT_LANG
    setLangState(safe)
    try {
      window.localStorage.setItem(STORAGE_KEY, safe)
    } catch {
      /* 프라이빗 모드 등에서 저장이 막혀도 화면 전환은 계속됩니다. */
    }
  }, [])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      langs: LANGS,
      /** 사전 경로 → 문자열 */
      t: (path) => translate(path, lang),
      /** { ko, en } 객체 → 문자열 */
      tr: (v) => tr(v, lang),
      /** 배열·객체 등 사전 원본 노드 */
      raw,
    }),
    [lang, setLang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang() 는 <LanguageProvider> 안에서만 쓸 수 있습니다.')
  return ctx
}
