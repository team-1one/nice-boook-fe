import { BookTypeSchema } from '@/lib/schemas/book.schema';
import { cn } from '@/lib/utils';
import { linkOptions } from '@tanstack/react-router';

export const navBarHeight = 'h-16';
export const underlinedClasses = cn(
  navBarHeight,
  'relative justify-center items-center group/item px-5',
);
export const underlineClasses =
  'pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-foreground opacity-0 transition-opacity duration-200 group-hover/item:opacity-100';

export const activeLinkClasses = '[&>div]:opacity-100';

const bookTypeLinks = BookTypeSchema.options.map((bookType) => ({
  label: bookType,
  link: linkOptions({
    to: '/bookType/$bookType',
    params: { bookType },
  }),
}));

export const navLinks = [
  { label: 'Home', link: linkOptions({ to: '/' }) },
  ...bookTypeLinks,
] as const;
