import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // The .NET API serves the built site from its wwwroot.
    outDir: '../server/Portfolio.Api/wwwroot',
    emptyOutDir: true,
    // public/assets holds the design kit, so Vite's own files go elsewhere.
    assetsDir: 'static',
  },
  server: {
    proxy: { '/api': 'http://localhost:5080' },
  },
})
