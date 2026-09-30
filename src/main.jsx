import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageProvider.jsx'
import './styles/global.css'

const app = (
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageProvider>
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
const root = document.getElementById('root')
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
