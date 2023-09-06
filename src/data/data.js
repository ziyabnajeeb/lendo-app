import { FaEnvelope, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

export const footerLinks = [
  {
    title: 'The Company',
    links: [
      { title: 'About Lendo', href: 'about' },
      { title: 'Our Thoughts', href: '#' },
      { title: 'Careers', href: '#' },
      { title: 'News', href: '#' },
      { title: 'Contacts', href: 'contact' }
    ]
  },

  {
    title: 'For Business',
    links: [
      { title: 'Get Funded', href: '#' },
      { title: 'Purchase Order', href: '#' },
      { title: 'Lendo Scoring', href: '#' }
    ]
  },
  {
    title: 'Invest',
    links: [
      { title: 'Invest', href: '#' },
      { title: 'Auto Invest', href: '#' },
      { title: 'Invoice Financing', href: '#' },
      { title: "Shari'ah compliance", href: '#' }
    ]
  },
  {
    title: 'Get In Touch',
    links: [
      { icon: FaTwitter, title: 'Twitter', href: '#' },
      { icon: FaLinkedinIn, title: 'LinkedIn', href: '#' },
      { icon: FaEnvelope, title: 'Email Us', href: '#' }
    ]
  }
];
