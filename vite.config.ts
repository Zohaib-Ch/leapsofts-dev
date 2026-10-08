import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    reactRouter(),
    tailwindcss(),
  ],
  define: {
    'process.env': {},
  },
  optimizeDeps: {
    include: ['styled-components', 'sanity', '@sanity/vision'],
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  build: {
    chunkSizeWarningLimit: 1500,
  },
})
