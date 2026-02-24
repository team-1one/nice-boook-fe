import type { LinkOptions } from '@tanstack/react-router';

export const TABLES = {
  booksFlat: 'books_flat',
  categories: 'categories',
} as const;

export type AppPath = LinkOptions['to'];
