import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      // 'prompt' y no 'autoUpdate': con autoUpdate la versión nueva tomaba el
      // control sola (skipWaiting) y cleanupOutdatedCaches borraba la precaché
      // anterior, pero la pestaña abierta seguía con el HTML viejo, que a partir
      // de ese momento apuntaba a bundles ya inexistentes → 404 y pantalla rota.
      // En modo prompt la versión nueva queda ESPERANDO: la precaché vieja sigue
      // intacta y la página solo cambia cuando el usuario acepta.
      registerType: 'prompt',
      // El registro lo hace <ActualizacionDisponible/>; sin esto se registraría
      // dos veces (aquí y desde React).
      injectRegister: null,
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
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,png,svg,woff2}'],
        // Explícito aunque sea el valor por omisión: al activarse la versión
        // nueva se purgan las precachés anteriores. En modo prompt esto solo
        // ocurre después de que el usuario acepta, no a mitad de sesión.
        cleanupOutdatedCaches: true,
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
