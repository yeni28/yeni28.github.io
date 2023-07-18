import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';

export default defineConfig({
  base: "/yeni28.github.io/",
  plugins: [react(),],
})
