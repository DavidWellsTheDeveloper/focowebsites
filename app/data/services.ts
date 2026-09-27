export interface Service {
  title: string
  blurb: string
  to: string
  icon: string
}

export const services: Service[] = [
  {
    title: 'Custom website design',
    blurb: 'A site designed from scratch around your business, your customers, and your goals.',
    to: '/services/custom-website-design',
    icon: 'mdi-pencil-ruler',
  },
  {
    title: 'Website redesign',
    blurb: 'Modernize what you already have — same brand, far better results.',
    to: '/services/website-redesign',
    icon: 'mdi-brush-variant',
  },
  {
    title: 'Development support',
    blurb: 'A dependable developer on call when your site needs fixing or extending.',
    to: '/services/development-support',
    icon: 'mdi-lifebuoy',
  },
  {
    title: 'Maintenance & care plans',
    blurb: 'Updates, security, and peace of mind — so your site never quietly rots.',
    to: '/services/maintenance-care-plans',
    icon: 'mdi-shield-check',
  },
]