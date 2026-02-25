import { BookTypeSchema } from '@/lib/schemas/book.schema';
import { CatalogSearchSchema } from '@/lib/schemas/route.schema';
import { cn } from '@/lib/utils';
import { linkOptions, type LinkOptions } from '@tanstack/react-router';
import { Heart, ShoppingBag } from 'lucide-react';

interface NavIconItems {
  to: LinkOptions['to'];
  ariaLabel: string;
  Icon: typeof Heart;
}

export const navBarHeight = 'h-16';
export const underlineEffectClasses =
  'pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-foreground opacity-0 transition-opacity duration-200 group-hover/item:opacity-100 group-active/item:opacity-100';

export const actionCellClasses = cn(
  'hover:bg-accent/60 text-foreground inline-flex w-16 shrink-0 items-center justify-center border-l transition-colors',
  navBarHeight,
);

export const activeLinkClasses = '[&_[data-nav-underline]]:opacity-100';

const bookTypeLinks = BookTypeSchema.options.map((bookType) => ({
  label: bookType,
  link: linkOptions({
    to: '/bookType/$bookType',
    params: { bookType },
    search: CatalogSearchSchema.parse({}),
  }),
}));

export const navLinks = [
  { label: 'Home', link: linkOptions({ to: '/' }) },
  ...bookTypeLinks,
] as const;

export const navbarIconItems: NavIconItems[] = [
  {
    to: '/favorites',
    ariaLabel: 'Favorites',
    Icon: Heart,
  },
  {
    to: '/cart',
    ariaLabel: 'Cart',
    Icon: ShoppingBag,
  },
] as const;
