export const CATALOG_LIMITS = {
  DEFAULT_PER_PAGE: 16,
  DEFAULT_PAGE: 1,
  PER_PAGE_OPTIONS: [16, 32, 64, 100],
} as const;

export const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'cheaper', label: 'Cheaper' },
  { value: 'expensive', label: 'Expensive' },
  { value: 'name-asc', label: 'Name (A-Z)' },
  { value: 'name-desc', label: 'Name (Z-A)' },
] as const;

export const getCatalogTitle = (ctgKey: string) => {
  switch (ctgKey) {
    case 'audiobook':
      return 'Audiobooks';
    case 'kindle':
      return 'Kindle books';
    case 'paperback':
      return 'Paper books';
    default:
      return ctgKey;
  }
};
