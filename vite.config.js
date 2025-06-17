import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/knowledge-hub/", // essential forr Github Pages
  plugins: [react()],
})
