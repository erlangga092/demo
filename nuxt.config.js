const config = require('./.contentful.json');

import {
	build,
	modules,
	head
} from './config'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: config.CTF_ENVIRONMENT
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head,
	/*
	 ** Global CSS
	 */
	loading: {
		color: 'var(--text-normal)'
	},
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
		'~/plugins/component.client',
		'~/plugins/components',
		'~/plugins/vue-lazyload'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  /*
  ** Nuxt.js modules
  */
	modules,
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build
}
