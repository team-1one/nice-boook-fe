import { cn } from '@/lib/utils';

export const navLinks = [
  { to: '/', label: 'Home', exact: true },
  { to: '/paper', label: 'Paper', exact: false },
  { to: '/kindle', label: 'Kindle', exact: false },
  { to: '/audiobook', label: 'Audiobook', exact: false },
] as const;

export const navBarHeight = 'h-16';
export const underlinedClasses = cn(
  navBarHeight,
  'relative flex flex-col justify-center items-center px-0 group/item',
);
export const underlineClasses =
  'pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-foreground opacity-0 transition-opacity duration-200 group-hover/item:opacity-100';

export const activeLinkClasses = '[&>div]:opacity-100 text-primary';
