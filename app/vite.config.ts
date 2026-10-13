/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // GitHub Pages serves the repo under /mc-sync-stage/
  base: '/mc-sync-stage/',
  // The talk files live one level up, in /talks
  server: { fs: { allow: ['..'] } },
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      pwaAssets: { image: 'public/icon.svg', preset: 'minimal-2023' },
      manifest: {
        name: 'Sync Stage MC Assistant',
        short_name: 'Sync MC',
        description: 'Session list and cue reminders for the Sync Stage MCs',
        theme_color: '#141414',
        background_color: '#141414',
        display: 'standalone',
        orientation: 'portrait',
      },
      // Precache the icons too: the notification icon must load without venue Wi-Fi
      workbox: { globPatterns: ['**/*.{js,css,html,png,svg,ico}'] },
      devOptions: { enabled: true },
    }),
  ],
})
