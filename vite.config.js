import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "home.jsx"),
        library: resolve(__dirname, "pages/library.jsx"),
        login: resolve(__dirname, "pages/login.jsx"),
        search: resolve(__dirname, "pages/search.jsx"),
      },
    },
  },
})
