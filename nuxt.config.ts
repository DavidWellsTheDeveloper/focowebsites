// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    '@mdi/font/css/materialdesignicons.css',
    '~/assets/styles/globals.css',
  ],

  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'https://focowebsites.com',
    name: 'FoCo Websites',
    trailingSlash: true,
    description:
      'Affordable small business web design in Fort Collins and Northern Colorado. Custom websites from $1,500, built by a local developer who answers the phone.',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s · FoCo Websites',
      title:
        'Small Business Web Design in Fort Collins, CO',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#0F766E' },
        {
          name: 'description',
          content:
            'Affordable small business web design in Fort Collins and Northern Colorado. Custom websites from $1,500, built by a local developer who answers the phone.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'FoCo Websites' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:image', content: 'https://focowebsites.com/images/og-default.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'FoCo Websites: affordable small business web design in Fort Collins, Colorado' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://focowebsites.com/images/og-default.png' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Inter:wght@400;500;600;700&display=swap',
        },
      ],
      script: [
        { src: 'https://web3forms.com/client/script.js', async: true, defer: true },
      ],
    },
  },

  vuetify: {
    moduleOptions: {
      ssrClientHints: {
        prefersColorScheme: true,
        prefersColorSchemeOptions: { cookie: { name: 'foco-scheme' } },
      },
    },
    vuetifyOptions: {
      icons: { defaultSet: 'mdi' },
      defaults: {
        VBtn: { variant: 'flat', rounded: 'lg', textTransform: 'none' },
        VCard: { rounded: 'lg', flat: false },
        VTextField: { variant: 'outlined' },
        VSelect: { variant: 'outlined' },
        VTextarea: { variant: 'outlined' },
      },
      theme: {
        defaultTheme: 'dark',
        themes: {
          light: {
            dark: false,
            colors: {
              primary: '#0F766E',
              secondary: '#14B8A6',
              accent: '#B45309',
              aqua: '#99F6E4',
              surface: '#FFFFFF',
              background: '#FAFAF9',
            },
          },
          dark: {
            dark: true,
            colors: {
              primary: '#2DD4BF',
              secondary: '#14B8A6',
              accent: '#FB923C',
              aqua: '#5EEAD4',
              surface: '#0B3B35',
              background: '#051F1C',
            },
          },
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      web3formsAccessKey: '',
    },
  },

  nitro: {
    prerender: {
      crawlLinks: false,
      routes: [
        '/',
        '/services',
        '/services/custom-website-design',
        '/services/small-business-websites',
        '/services/website-redesign',
        '/services/development-support',
        '/services/maintenance-care-plans',
        '/work',
        '/work/andrews-accounting',
        '/work/pantry-to-store',
        '/work/davidwellsthedeveloper',
        '/work/sisterhood-hockey',
        '/process',
        '/pricing',
        '/about',
        '/faq',
        '/start-a-project',
      ],
    },
  },

  components: [
    { path: '~/components/ui', pathPrefix: false },
    { path: '~/components/layout', pathPrefix: false },
  ],

  vite: {
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
      },
    },
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },
})