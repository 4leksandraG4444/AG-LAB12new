import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/AG-LAB12new/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: [
        '@supabase/supabase-js',
        'date-fns'
      ],
    }
  },
  optimizeDeps: {
    include: [
      '@supabase/supabase-js',
      'date-fns'
    ]
  }
})
