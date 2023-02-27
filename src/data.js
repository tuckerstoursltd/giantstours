import { getPermalink} from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About Me',
      href: 'about-me',
    },
    {
      text: 'Gallery',
      href: '#',
    },
  ],
  actions: [{ type: 'button', text: 'Book Now', href: 'https://calendly.com/niall-mahon1999/tour' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Team', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Community Forum', href: '#' },
        { text: 'Complaints', href: '#' }
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Careers', href: '#' }
      ],
    },
    {
      title: 'Creator',
      links: [
        { text: 'Niall Mahon', href: '#' }
      ],
    }
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
};
