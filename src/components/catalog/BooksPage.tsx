import { useEffect } from 'react';

import { CatalogGrid } from '@/components/catalog/CatalogGrid';
import { sortSearchProps, type SortSearchKey } from '@/types/search';
import { getCatalogTitle } from './constants/catalog';
import type { CatalogSearch } from '@/lib/schemas/route.schema';
import { BookTypeSchema } from '@/lib/schemas/book.schema';
import type { Book } from '@/lib/schemas/book.schema';
import { CatalogHeader } from '@/components/catalog/organisms/CatalogHeader';
import { CatalogPagination } from '@/components/catalog/organisms/CatalogPagination';
import { useTranslation } from 'react-i18next';

interface Props {
  catalogKey: string;
  search: CatalogSearch;
  navigate: (options: {
    search: (prev: CatalogSearch) => CatalogSearch;
  }) => void;
  books: Book[];
  total: number;
}

export function BooksPage({
  catalogKey,
  search,
  navigate,
  books,
  total,
}: Props) {
  const { t } = useTranslation('catalog');

  const parsedBookType = BookTypeSchema.safeParse(catalogKey);
  const title = parsedBookType.success
    ? t(getCatalogTitle(parsedBookType.data))
    : catalogKey;
  const totalPages = Math.max(1, Math.ceil(total / search.pageSize));
  const currentPage = Math.min(Math.max(search.page, 1), totalPages);
  const sort: SortSearchKey = search.sortBy;
  const perPage = String(search.pageSize);

  const scrollToTop = () => {
    if (typeof window === 'undefined') {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (search.page === currentPage) {
      return;
    }

    navigate({
      search: (prev) => ({
        ...prev,
        page: currentPage,
      }),
    });

    scrollToTop();
  }, [currentPage, navigate, search.page]);

  const handlePageChange = (nextPage: number) => {
    if (nextPage === currentPage) {
      return;
    }

    navigate({
      search: (prev) => ({
        ...prev,
        page: Math.min(Math.max(nextPage, 1), totalPages),
      }),
    });

    scrollToTop();
  };

  const handleSortChange = (nextSort: SortSearchKey) => {
    if (nextSort === search.sortBy) {
      return;
    }

    navigate({
      search: (prev) => ({
        ...prev,
        sortBy: nextSort,
        order: sortSearchProps[nextSort].order,
        page: 1,
      }),
    });

    scrollToTop();
  };

  const handleItemsPerPageChange = (value: string) => {
    const pageSize = Number(value);
    if (
      !Number.isInteger(pageSize) ||
      pageSize <= 0 ||
      pageSize === search.pageSize
    ) {
      return;
    }

    navigate({
      search: (prev) => ({
        ...prev,
        pageSize,
        page: 1,
      }),
    });

    scrollToTop();
  };

  return (
    <main className="mx-auto mt-8 mb-8 max-w-360 px-4 sm:mt-16 sm:mb-14 sm:px-6 lg:mb-16 lg:px-8 xl:mb-38 xl:px-38">
      <CatalogHeader
        title={title}
        total={total}
        sort={sort}
        perPage={perPage}
        onSortChange={handleSortChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />

      <section className="mb-6 sm:mb-14 lg:mb-16">
        <CatalogGrid books={books} />
      </section>

      <section>
        <CatalogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}
