import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageProvider.jsx'
import { langFromPath } from './i18n/index.js'
import './styles/global.css'

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// 정적 HTML 에 미리 박아 둔 태그(data-seo="static")는 JS 를 실행하지 않는 크롤러용입니다.
// 앱은 Seo 컴포넌트로 같은 태그를 다시 내보내므로, 그대로 두면 canonical·title·description 이
// 두 개씩 남습니다. hydrate 가 시작되면 React 가 이 태그를 자기 것으로 넘겨받으므로
// 반드시 그 전에 걷어냅니다. og:type, og:site_name, og:locale:alternate, JSON-LD 는
// Seo 가 내보내지 않으므로 표식이 없고, 따라서 그대로 남습니다.
document.querySelectorAll('[data-seo="static"]').forEach((el) => el.remove())

// 빌드된 페이지는 본문이 미리 렌더링되어 있으므로 이어받고(hydrate),
// 개발 서버처럼 비어 있으면 새로 그립니다.
// 미리 렌더링한 언어와 지금 주소의 언어가 다르면(예: /en/없는주소 에 한국어 404.html 이
// 내려온 경우) 이어받을 수 없으니 비우고 새로 그립니다.
const root = document.getElementById('root')
const prerendered = root.dataset.prerender
if (root.hasChildNodes() && langFromPath(prerendered) === langFromPath(window.location.pathname)) {
  hydrateRoot(root, app)
} else {
  root.replaceChildren()
  createRoot(root).render(app)
}
