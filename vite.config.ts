import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'
import { Target } from 'lucide-react'
import { channel } from 'diagnostics_channel'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
  ],
  server:{
    proxy:{
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin:true,
        secure:false,
      }
    }
  },
  build: {
    rollupOptions: {
      input: {
        user: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin.html'),
      },
    },
  },
})
