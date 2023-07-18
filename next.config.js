/** @type {import('next').NextConfig} */


const debug = process.env.NODE_ENV !== 'production';
const repository = 'http://yeni28.github.io';
const nextConfig = {
  
  reactStrictMode: true,
  assetPrefix: !debug ? `${repository}` : '', // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
  future: {
    webpack5: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // CSS 파일을 처리하기 위해 PostCSS 플러그인을 설정합니다.
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                'tailwindcss',
                'autoprefixer',
              ],
            },
          },
        },
      ],
    });
};

module.exports = nextConfig;
