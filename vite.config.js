import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['assets/icon-180.png', 'assets/logoX.png'],
      manifest: {
        name: 'FactoR[i]zando',
        short_name: 'Factorizando',
        description: 'Plataforma de preparación para EXANI-I y EXANI-II (UNAM)',
        theme_color: '#0e0f11',
        background_color: '#0e0f11',
        display: 'standalone',
        scope: '/factorizando/',
        start_url: '/factorizando/',
        orientation: 'portrait-primary',
        icons: [
          {
            src: 'assets/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,png,svg,woff2}'],
        navigateFallback: '/factorizando/index.html',
        navigateFallbackDenylist: [/^\/factorizando\/guias\//],
        runtimeCaching: [
          {
            // No cachear llamadas a Supabase — deben ser siempre frescas
            urlPattern: /^https:\/\/.*\.supabase\.co\/.*/i,
            handler: 'NetworkOnly',
          },
          {
            // KaTeX CDN — cachear con tiempo
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'cdn-cache',
              expiration: { maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
  base: '/factorizando/',
})
