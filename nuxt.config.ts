// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Cities Explorer',
      meta: [
        { name: 'description', content: 'My project description' }
      ]
    }
  },
  css: ['@/assets/css/tailwind.css'],
  buildModules: ['@nuxt/postcss8'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiKey: process.env.KEY,
    },
  },
})
