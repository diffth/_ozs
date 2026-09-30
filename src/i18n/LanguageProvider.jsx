import { createContext, useCallback, useContext, useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  DEFAULT_LANG,
  LANGS,
  STORAGE_KEY,
  langFromPath,
  localizePath,
  normalizeLang,
  raw,
  savedLang,
  stripLang,
  tr,
  translate,
} from './index.js'

const LanguageContext = createContext(null)

/** 언어는 주소가 정합니다(/en/… 이면 영어). 그래서 라우터 안쪽에 있어야 합니다. */
export function LanguageProvider({ children }) {
  const { pathname, search, hash } = useLocation()
  const navigate = useNavigate()
  const lang = langFromPath(pathname)

  // 언어 토글로 직접 고른 언어가 있으면 그 언어판으로 옮깁니다. 첫 방문자는 들어온 주소 그대로 둡니다.
  // 미리 렌더링된 HTML 과 첫 화면이 같아야 하므로 마운트 후에 확인합니다.
  useEffect(() => {
    const saved = savedLang()
    if (saved && saved !== lang) {
      navigate(localizePath(stripLang(pathname), saved) + search + hash, { replace: true })
    }
    // 첫 진입에서 한 번만 봅니다. 이후 이동은 토글이 저장값을 함께 바꿉니다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback(
    (next) => {
      const safe = normalizeLang(next) ?? DEFAULT_LANG
      try {
        window.localStorage.setItem(STORAGE_KEY, safe)
      } catch {
        /* 프라이빗 모드 등에서 저장이 막혀도 화면 전환은 계속됩니다. */
      }
      if (safe !== lang) navigate(localizePath(stripLang(pathname), safe) + search + hash)
    },
    [lang, navigate, pathname, search, hash]
  )

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
      /** 기준 주소(/about)를 지금 언어판 주소로. 내부 링크는 모두 이걸 거칩니다. */
      lp: (path) => localizePath(path, lang),
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
