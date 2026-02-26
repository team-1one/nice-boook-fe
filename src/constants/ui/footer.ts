import type { FooterLink } from '@/types/links';

export const footerLinks: FooterLink[] = [
  { label: 'Github', to: 'https://github.com', external: true },
  {
    label: 'Contacts',
    to: '/contacts',
    external: false,
    localeKey: 'links.Contacts',
  },
  {
    label: 'Rights',
    to: '/rights',
    external: false,
    localeKey: 'links.Rights',
  },
];

export const footerHeight = 'h-16';
