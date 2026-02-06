// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/a11y',
    '@nuxt/hints',
    '@nuxt/scripts',
    '@nuxt/test-utils',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})