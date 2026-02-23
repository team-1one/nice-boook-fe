import type { FooterLink } from '@/types/links';

export const footerLinks: FooterLink[] = [
  { label: 'Github', to: 'https://github.com', external: true },
  { label: 'Contacts', to: '/contacts', external: false },
  { label: 'Rights', to: '/rights', external: false },
];

export const footerHeight = 'h-16';
