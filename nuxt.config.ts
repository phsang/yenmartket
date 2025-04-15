// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-15',
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt 3 Yenmarket',
      meta: [
        { name: 'description', content: 'A high-performance Nuxt 3 yenmarket with SSR and optimized for SEO' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' }
      ]
    }
  },
  css: [
    '~/assets/css/main.css'
  ],
  modules: [],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8000'
    }
  },
  experimental: {
    payloadExtraction: true
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['feather-icon'].includes(tag)
    }
  },
  vite: {
    optimizeDeps: {
      include: ['vue', 'vue-router']
    },
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === 'production'
        }
      }
    }
  },
  build: {
    transpile: []
  }
})
