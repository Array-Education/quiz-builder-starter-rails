import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
      '@types': '/src/types',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://backend:3000',
        changeOrigin: true,
      },
    },
  },
})
