import { useLocation } from 'react-router-dom'
import KakaoIcon from './KakaoIcon.jsx'
import { site } from '../data/site.js'
import { useLang } from '../i18n/LanguageProvider.jsx'
import { stripLang } from '../i18n/index.js'

// 모든 페이지 오른쪽 아래에 떠 있는 카카오톡 상담 버튼.
// Contact 페이지에는 같은 버튼이 본문에 크게 있으니 겹치지 않게 숨깁니다.
export default function KakaoFab() {
  const { t } = useLang()
  const { pathname } = useLocation()

  if (stripLang(pathname) === '/contact') return null

  return (
    <a className="kakao-fab" href={site.kakao} target="_blank" rel="noopener noreferrer" aria-label={t('common.kakaoFab')}>
      <KakaoIcon size={28} />
      <span className="kakao-fab__label">{t('common.kakaoFab')}</span>
    </a>
  )
}
