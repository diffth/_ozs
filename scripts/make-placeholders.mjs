// 실제 스크린샷이 준비되기 전까지 쓰는 임시 이미지 생성기.
// 실제 이미지로 교체한 뒤에는 이 스크립트를 지워도 됩니다.
import { writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const out = resolve(root, 'public/img')
mkdirSync(out, { recursive: true })

const card = (title, kind) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0D1524"/>
      <stop offset="1" stop-color="#070A12"/>
    </linearGradient>
    <radialGradient id="l" cx="12%" cy="0%" r="80%">
      <stop offset="0" stop-color="#8FC0F0" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#8FC0F0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#g)"/>
  <rect width="1200" height="675" fill="url(#l)"/>
  <line x1="80" y1="470" x2="1120" y2="470" stroke="#1A2439" stroke-width="1"/>
  <text x="80" y="440" font-family="Georgia,'Times New Roman',serif" font-size="76"
        fill="#EDF1F8">${title}</text>
  <text x="80" y="516" font-family="ui-monospace,monospace" font-size="20"
        letter-spacing="6" fill="#66738C">${kind.toUpperCase()}</text>
</svg>`

const files = {
  'lumen-drift.svg': ['Lumen Drift', 'Game'],
  'tideboard.svg': ['Tideboard', 'Web Service'],
  'atelier-noct.svg': ['Atelier Noct', 'Website'],
  'og-default.svg': ['ozs', 'Solo studio'],
}

for (const [name, [title, kind]] of Object.entries(files)) {
  writeFileSync(resolve(out, name), card(title, kind))
  console.log('  →', name)
}
