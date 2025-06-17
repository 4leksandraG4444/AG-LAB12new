import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/AG-laboratorium10/',
  plugins: [
    tailwindcss(),
  ],
})
