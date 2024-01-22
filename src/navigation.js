import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Tours',
      links: [
        {
          text: 'Castle Tour',
          href: 'dunluce-castle-tour',
        },
        {
          text: 'Belfast City Tour',
          href: 'belfast-city-tour',
        }
      ]
    },
    {
      text: 'About Me',
      href: 'about-me',
    },
    {
      text: 'Gallery',
      href: '/gallery',
    },
  ],
  actions: [{ text: 'Book Now', href: '/book-now', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [{ text: 'Pricing', href: '#' }],
    },
    {
      title: 'Support',
      links: [{ text: 'Complaints', href: '/about-me#contact-me' }],
    },
    {
      title: 'Company',
      links: [{ text: 'About', href: '/about-me' }],
    },
    {
      title: 'Creator',
      links: [{ text: 'Denartha', href: '#' }],
    },
  ],
  secondaryLinks: [{ text: 'Privacy Policy', href: getPermalink('/privacy') }],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
};

