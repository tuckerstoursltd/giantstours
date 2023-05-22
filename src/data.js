import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About Me',
      href: 'about-me',
    },
    {
      text: 'Gallery',
      href: 'gallery',
    },
  ],
  actions: [{ type: 'button', text: 'Book Now', href: 'https://calendly.com/tuckerstoursbelfastltd/tours' }],
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
      links: [{ text: 'Niall Mahon', href: '#' }],
    },
  ],
  secondaryLinks: [{ text: 'Privacy Policy', href: getPermalink('/privacy') }],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
};
