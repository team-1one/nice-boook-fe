import type { LinkProps, RegisteredRouter } from '@tanstack/react-router';

export const TABLES = {
  booksFlat: 'books_flat',
  categories: 'categories',
  banners: 'banners',
} as const;

export type AppPath = Exclude<LinkProps<RegisteredRouter>['to'], undefined>;

export type BookFetchType = 'new' | 'random';
