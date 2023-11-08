// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/device'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  device: { refreshOnResize: true },
  postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
})
