import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
   base: "/Portfolio/", // This must match your repo name exactly
  plugins: [react()],
})