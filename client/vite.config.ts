import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Two builds: the default one goes into the .NET API's wwwroot (served at /), and the GitHub Pages
// workflow sets PAGES_BASE=/portfolio/ and PAGES_OUT=dist.
export default defineConfig({
  plugins: [react()],
  base: process.env.PAGES_BASE ?? '/',
  build: {
    outDir: process.env.PAGES_OUT ?? '../server/Portfolio.Api/wwwroot',
    emptyOutDir: true,
    // public/assets holds the design kit, so Vite's own files go elsewhere.
    assetsDir: 'static',
  },
  server: {
    proxy: { '/api': 'http://localhost:5080' },
  },
})
