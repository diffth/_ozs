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

export function normalizeLang(value) {
  if (typeof value !== 'string') return null
  const short = value.toLowerCase().slice(0, 2)
  return LANGS.includes(short) ? short : null
}

/** 저장된 선택 → 브라우저 언어 → 기본값 순서로 결정합니다. */
export function detectLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG
  const saved = normalizeLang(window.localStorage?.getItem(STORAGE_KEY))
  if (saved) return saved
  const nav = normalizeLang(window.navigator?.language)
  return nav ?? DEFAULT_LANG
}
