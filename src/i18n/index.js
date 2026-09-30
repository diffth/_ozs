// ─────────────────────────────────────────────
//  언어 유틸. React 에 의존하지 않으므로
//  scripts/build-static.mjs 에서도 그대로 씁니다.
// ─────────────────────────────────────────────
import { dict } from './dict.js'

export const LANGS = ['ko', 'en']
export const DEFAULT_LANG = 'ko'
export const STORAGE_KEY = 'ozs:lang'

export const LANG_LABEL = { ko: '한국어', en: 'English' }
export const LANG_SHORT = { ko: 'KO', en: 'EN' }
export const OG_LOCALE = { ko: 'ko_KR', en: 'en_US' }

/** { ko, en } 객체를 현재 언어의 문자열로 풉니다. 평범한 문자열은 그대로 통과. */
export function tr(value, lang = DEFAULT_LANG) {
  if (value == null) return ''
  if (typeof value !== 'object') return String(value)
  return value[lang] ?? value[DEFAULT_LANG] ?? ''
}

/** 'home.heroDesc' 처럼 점으로 이어진 경로의 원본 노드를 꺼냅니다. */
export function raw(path) {
  return path.split('.').reduce((node, key) => (node == null ? node : node[key]), dict)
}

/** 사전에서 문구 하나를 현재 언어로 꺼냅니다. */
export function translate(path, lang = DEFAULT_LANG) {
  const node = raw(path)
  return node === undefined ? path : tr(node, lang)
}

// ── 언어별 주소 ────────────────────────────────
// 한국어는 접두사 없이(/about), 영어는 /en 을 붙입니다(/en/about).
// 언어를 주소로 나눠야 검색엔진이 영문판을 따로 색인하고 hreflang 으로 짝지을 수 있습니다.
export const LANG_PREFIX = { ko: '', en: '/en' }

/** 주소가 어느 언어판인지. /en 또는 /en/… 이면 영어, 그 밖은 기본 언어. */
export function langFromPath(pathname = '/') {
  return pathname === '/en' || pathname.startsWith('/en/') || pathname.startsWith('/en#') ? 'en' : DEFAULT_LANG
}

/** 언어 접두사를 뗀 기준 주소. /en/about → /about, /en → / */
export function stripLang(pathname = '/') {
  if (langFromPath(pathname) === DEFAULT_LANG) return pathname
  const rest = pathname.slice(LANG_PREFIX.en.length)
  return rest === '' || rest.startsWith('#') ? `/${rest}` : rest
}

/** 기준 주소(/about, /#works)를 해당 언어판 주소로. 홈은 /en 처럼 끝 슬래시 없이 씁니다. */
export function localizePath(path, lang) {
  const prefix = LANG_PREFIX[lang] ?? ''
  if (!prefix) return path
  if (path === '/') return prefix
  if (path.startsWith('/#')) return prefix + path.slice(1)
  return prefix + path
}

export function normalizeLang(value) {
  if (typeof value !== 'string') return null
  const short = value.toLowerCase().slice(0, 2)
  return LANGS.includes(short) ? short : null
}

/** 방문자가 언어 토글로 직접 고른 언어. 고른 적이 없으면 null.
 *  브라우저 언어로 자동 이동하지 않는 이유: 구글은 언어 기반 자동 리다이렉트를 권하지 않고,
 *  영어권 크롤러가 한국어판을 못 보게 될 수 있습니다. */
export function savedLang() {
  if (typeof window === 'undefined') return null
  try {
    return normalizeLang(window.localStorage?.getItem(STORAGE_KEY))
  } catch {
    return null
  }
}
