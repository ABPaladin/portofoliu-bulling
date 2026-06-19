import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Absolute base for deployment on a real domain root (Vercel + custom domain).
  // Assets are served from /assets/... which is required for client-side
  // routing (BrowserRouter) to keep working on deep links.
  base: '/',
})
