#!/usr/bin/env sh

# 빌드
npm run build

# 빌드 결과물을 서브 디렉토리로 이동
mv dist $yeni28.github.io

# GitHub Pages에 배포
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main