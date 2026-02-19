import { cn } from '@/lib/utils';

// TODO: keep path type safe
export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/type/paper', label: 'Paper' },
  { to: '/type/kindle', label: 'Kindle' },
  { to: '/type/audiobook', label: 'Audiobook' },
] as const;

export const navBarHeight = 'h-16';
export const underlinedClasses = cn(
  navBarHeight,
  'relative justify-center items-center group/item px-5',
);
export const underlineClasses =
  'pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-foreground opacity-0 transition-opacity duration-200 group-hover/item:opacity-100';

export const activeLinkClasses = '[&>div]:opacity-100';
