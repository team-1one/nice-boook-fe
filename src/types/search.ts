import type { SortOption } from '@/components/catalog/typeOfSortOption';

export type BookSearch = {
  sort?: SortOption;
  perPage: string;
  page: string;
};

const defaultSearch: BookSearch = {
  sort: undefined,
  perPage: '16',
  page: '1',
};

export const validateBookSearch = (search: Record<string, unknown>): BookSearch => {
  return {
    sort: (search.sort as SortOption) || defaultSearch.sort,
    perPage: (search.perPage as string) || defaultSearch.perPage,
    page: (search.page as string) || defaultSearch.page,
  };
};