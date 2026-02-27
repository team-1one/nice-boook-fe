import type { BookType } from '@/lib/schemas/book.schema';

export const CATALOG_LIMITS = {
  DEFAULT_PER_PAGE: 16,
  DEFAULT_PAGE: 1,
  PER_PAGE_OPTIONS: [16, 32, 64, 100],
} as const;

export const SORT_OPTIONS = [
  { value: 'newest', key: 'newest' },
  { value: 'oldest', key: 'oldest' },
  { value: 'cheaper', key: 'priceAsc' },
  { value: 'expensive', key: 'priceDesc' },
  { value: 'name-asc', key: 'titleAsc' },
  { value: 'name-desc', key: 'titleDesc' },
] as const;

type CatalogTitleKey =
  | 'titles.audiobook'
  | 'titles.kindle'
  | 'titles.paperback';

export const getCatalogTitle = (ctgKey: BookType): CatalogTitleKey => {
  switch (ctgKey) {
    case 'audiobook':
      return 'titles.audiobook';
    case 'kindle':
      return 'titles.kindle';
    case 'paperback':
      return 'titles.paperback';
  }
};
