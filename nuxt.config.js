export default {
  target: 'static',

  server: {
    host: '0'
  },

  head: {
    title: 'Gabriel Ferraté',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A short description of myself.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/gf_favicon_2.png' },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        href: "https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap",
        rel: "stylesheet"
      }
    ]
  },

  css: ["@/assets/css/style.css"],

  plugins: [
    { src: '~/plugins/vue-gtag' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    jit: true
  },

  modules: [],

  build: {}
}