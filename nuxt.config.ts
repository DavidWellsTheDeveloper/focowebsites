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
    description:
      'Custom websites for businesses that value design, performance, and a developer who actually answers the phone.',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s · FoCo Websites',
      title:
        'FoCo Websites — Custom Websites & Web Development in Northern Colorado',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#0F766E' },
        {
          name: 'description',
          content:
            'Custom websites for businesses that value design, performance, and a developer who actually answers the phone.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'FoCo Websites' },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Inter:wght@400;500;600;700&display=swap',
        },
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
        defaultTheme: 'light',
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
      recaptchaSiteKey: '',
    },
  },

  nitro: {
    prerender: {
      crawlLinks: false,
      routes: [
        '/',
        '/services',
        '/services/custom-website-design',
        '/services/website-redesign',
        '/services/development-support',
        '/services/maintenance-care-plans',
        '/work',
        '/work/andrews-accounting',
        '/work/pantry-to-store',
        '/work/project-three',
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
    { path: '~/components/features', pathPrefix: false },
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