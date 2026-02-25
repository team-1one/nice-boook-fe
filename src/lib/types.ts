import type { LinkOptions } from '@tanstack/react-router';

export const TABLES = {
  booksFlat: 'books_flat',
  categories: 'categories',
  banners: 'banners',
} as const;

export type AppPath = LinkOptions['to'];
export type BookFetchType = 'new' | 'random';
