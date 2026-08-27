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
      // Ni `includeAssets` ni los iconos del manifest: `globPatterns` de abajo ya
      // precachea todos los png de dist/, y añadirlos por segunda vía generaba
      // entradas duplicadas de la misma URL con revisiones distintas.
      // precacheAndRoute lanzaba entonces `add-to-cache-list-conflicting-entries`,
      // la excepción se perdía como unhandled rejection dentro de la fábrica AMD
      // del sw.js, y el service worker acababa SIN manejadores de install ni de
      // fetch: instalaba al instante, no cacheaba nada y aun así tomaba el
      // control. El PWA nunca llegó a funcionar sin conexión por esto.
      includeManifestIcons: false,
      manifest: {
        name: 'FactoR[i]zando',
        short_name: 'Factorizando',
        description: 'Plataforma de preparación para EXANI-I y EXANI-II (UNAM)',
        theme_color: '#0e0f11',
        background_color: '#0e0f11',
        display: 'standalone',
        scope: '/factorizando/',
        start_url: '/factorizando/',
        // 'any' y no 'portrait-primary': con el bloqueo puesto, un PWA instalado
        // no rota NUNCA —lo impide el sistema, no la página—, así que girar el
        // teléfono dentro de una presentación no hacía nada y el diseño no tenía
        // a qué reaccionar. Era además lo que hacía que el horizontal sólo se
        // pudiera alcanzar con el `orientation.lock` del botón de pantalla
        // completa. Las presentaciones se adaptan a las dos orientaciones; el
        // sitio no tiene por qué decidir cómo se sostiene el teléfono.
        orientation: 'any',
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
        // El bundle ya va partido por ruta (ver App.jsx), así que el pedazo más
        // grande es un banco de contenido, no la app entera. El techo se deja
        // holgado sobre eso: si algún día un solo archivo lo cruza, el build
        // falla y conviene enterarse.
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
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
