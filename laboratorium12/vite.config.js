import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/AG-LAB12/',
  plugins: [
    tailwindcss(),
  ],
})
