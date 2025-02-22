import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio-backup/',
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      clientPort: 5173,
      host: '0.0.0.0'
    }
  }
})
