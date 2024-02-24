import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/e-commerce/',
  plugins: [react()],
  resolve:{
    alias: {
      app: '/src/app/',
      public: '/public/app/',
      features: '/src/features/',
      entities: '/src/entities/',
      shared: '/src/shared/',
      pages: '/src/pages/',
      widgets: '/src/widgets/',
    }
  }
})
