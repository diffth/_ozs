import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 개발 서버는 public 아래 폴더 주소(/lectures/01/)에 index.html 을 찾아 주지 않고
// 사이트 앱으로 넘겨 버립니다. 배포 환경처럼 폴더의 index.html 을 내주도록 맞춥니다.
function publicDirIndex() {
  return {
    name: 'public-dir-index',
    configureServer(server) {
      // Windows 에서는 설정값이 슬래시(/)로 와서 path.join 결과와 비교하려면 정규화가 필요합니다.
      const publicDir = path.resolve(server.config.publicDir)
      server.middlewares.use((req, res, next) => {
        const [pathname, query = ''] = req.url.split('?')
        if (pathname === '/' || path.extname(pathname)) return next()
        let file
        try {
          file = path.join(publicDir, decodeURIComponent(pathname), 'index.html')
        } catch {
          return next()
        }
        if (!file.startsWith(publicDir) || !fs.existsSync(file)) return next()
        // 끝 슬래시가 없으면 슬라이드 안의 상대 경로가 어긋나므로 붙여서 다시 보냅니다.
        if (!pathname.endsWith('/')) {
          res.statusCode = 301
          res.setHeader('Location', `${pathname}/${query ? `?${query}` : ''}`)
          return res.end()
        }
        req.url = `${pathname}index.html${query ? `?${query}` : ''}`
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), publicDirIndex()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
