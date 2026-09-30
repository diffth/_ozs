import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageProvider.jsx'

// scripts/build-static.mjs 가 라우트마다 호출해 <div id="root"> 안에 넣을 본문 HTML 을 만듭니다.
// JS 를 실행하지 않는 크롤러(네이버 등)도 본문을 읽을 수 있게 하려는 것입니다.
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StaticRouter>
  )
}
