import type { BookFields } from '@/lib/schemas/book.schema';

export const SORT_SEARCH_KEYS = [
  'newest',
  'oldest',
  'cheaper',
  'expensive',
  'name-asc',
  'name-desc',
] as const;

export type SortSearchKey = (typeof SORT_SEARCH_KEYS)[number];

export const sortSearchProps: Record<
  SortSearchKey,
  { sort: BookFields; order: 'asc' | 'desc' }
> = {
  'newest': { sort: 'publication_year', order: 'desc' },
  'oldest': { sort: 'publication_year', order: 'asc' },
  'cheaper': { sort: 'effective_price', order: 'asc' },
  'expensive': { sort: 'effective_price', order: 'desc' },
  'name-asc': { sort: 'name', order: 'asc' },
  'name-desc': { sort: 'name', order: 'desc' },
} as const;
