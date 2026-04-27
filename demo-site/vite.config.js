import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        electrical: './electrical.html',
        ce: './ce.html'
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5174,
    strictPort: false
  },
  preview: {
    host: '0.0.0.0',
    port: 4174,
    strictPort: false
  }
})