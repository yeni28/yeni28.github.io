import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [react(),],

  build: {
    outDir: 'dist', // 빌드 결과물이 생성될 디렉토리 설정
    assetsDir: '', // 정적 파일이 위치할 서브 디렉토리 설정 (기본값은 빈 문자열)
    sourcemap: true, // 빌드된 파일에 소스맵 생성 여부
    // 추가적인 빌드 설정...
  },
})
