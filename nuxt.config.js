module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:1111'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kanit:200,200i,300,300i' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'vuetify', 'vue-lazyload']
  },
  plugins: ['~plugins/vuetify.js', '~plugins/vue-lazyload.js'],
  css: [
    { src: '~assets/css/main.css', lang: 'styl' },
    { src: '~assets/style/app.styl', lang: 'styl' }
  ]
}
