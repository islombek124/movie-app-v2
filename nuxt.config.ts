/* eslint-disable node/prefer-global/process */
import { appDescription } from './constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    'nuxt-module-eslint-config',
    'nuxt-swiper',
    '@nuxt/image',
    'nuxt-icon',
  ],

  runtimeConfig: {
    API_URL: 'https://api.themoviedb.org/3',
    API_LANG: process.env.API_LANG || 'en-US',
    API_KEY: process.env.API_KEY || '',
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/global.css',
  ],

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: true
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  devtools: {
    enabled: false,
  },

  features: {
    inlineStyles: false,
  },

  eslintConfig: {
    setup: false,
  },
})
