import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // This was missing
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/Portfolio/", 
  plugins: [
    react(),
    tailwindcss()
  ],
})
