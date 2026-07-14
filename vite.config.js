import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Сайт живёт по адресу scrodinger-code.github.io/PersonalCard/,
  // без base ассеты искались бы в корне домена и не нашлись.
  base: '/PersonalCard/',
  plugins: [react()],
})
