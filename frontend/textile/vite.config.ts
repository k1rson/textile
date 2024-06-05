/* eslint-disable prettier/prettier */

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// plugins
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    Vue(), 
    Components()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000
  }
})
