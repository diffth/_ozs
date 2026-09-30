import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import KakaoFab from './components/KakaoFab.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Legal from './pages/Legal.jsx'
import NotFound from './pages/NotFound.jsx'
import { useLang } from './i18n/LanguageProvider.jsx'
import { LANGS, localizePath } from './i18n/index.js'
import { legalDocs } from './data/legal.js'

export default function App() {
  const { t } = useLang()

  return (
    <>
      <a className="skip" href="#main">{t('common.skip')}</a>
      <ScrollToTop />
      <Header />
      <main id="main">
        {/* 같은 화면을 한국어(접두사 없음)와 영어(/en) 주소에 한 벌씩 답니다.
            화면 언어는 LanguageProvider 가 주소를 보고 정합니다. */}
        <Routes>
          {LANGS.map((lang) => {
            const p = (path) => localizePath(path, lang)
            return (
              <Fragment key={lang}>
                <Route path={p('/')} element={<Home />} />
                <Route path={p('/works/:slug')} element={<Work />} />
                <Route path={p('/about')} element={<About />} />
                <Route path={p('/contact')} element={<Contact />} />
                {legalDocs.map((d) => (
                  <Route key={d.key} path={p(d.path)} element={<Legal docKey={d.key} />} />
                ))}
              </Fragment>
            )
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <KakaoFab />
    </>
  )
}
