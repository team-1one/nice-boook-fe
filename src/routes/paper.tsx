import { createFileRoute , useNavigate } from '@tanstack/react-router';

import type { SortOption } from '@/components/catalog/typeOfSortOption';

import { useBookData } from '@/hooks/useBooks';
import { useMemo } from 'react';

import { CatalogGrid } from '@/components/catalog/CatalogGrid';
import { ItemsOnPage } from '@/components/catalog/formItemsOnPage';
import { SortBySelect } from '@/components/catalog/formSortBySelect';
import { getSortedBooks } from '@/components/catalog/utilits/getSortedBooks';
import { Pagination } from '@/components/catalog/Pagination';

type BookSearch = {
  sort?: SortOption;
  perPage: string;
  page: string;
};

export const Route = createFileRoute('/paper')({
  validateSearch: (search: Record<string, unknown>): BookSearch => {
    return {
      sort: (search.sort as SortOption) || undefined,
      perPage: (search.perPage as string) || '16',
      page: (search.page as string) || '1',
    };
  },
  component: RouteComponent,
});

export function RouteComponent() {
  const {data: books} = useBookData('paperback.json');

  const { sort, perPage, page } = Route.useSearch();
  const navigator = useNavigate({ from: Route.fullPath });

  const perPageNum = +perPage || 16;
  const currentPage = +page || 1;
  
  const handleSortChange = (newValue: SortOption) => {
    navigator({
    search: (prev) => ({
      ...prev,
      sort: newValue === '' ? undefined : newValue,
    }),
  });
  };

  const handleItemsPerPageChange = (newValue: string) => {
    navigator({
    search: (prev) => ({
      ...prev,
      perPage: newValue,
    }),
  });
  };

  const handleNextPage = () => {
    if (currentPage >= totalPages) return;

    const nextPage = currentPage + 1;
    navigator({
    search: (prev) => ({
      ...prev,
      page: nextPage.toString(),
    }),
  });
  }

  const handlePreviousPage = () => {
    if (currentPage <= 1) return;

    const nextPage = currentPage - 1;
    navigator({
    search: (prev) => ({
      ...prev,
      page: nextPage.toString(),
    }),
  });
  }

  const handlePageClick = (newPage: number) => {
  navigator({
    search: (prev) => ({
      ...prev,
      page: newPage.toString(),
    }),
  });
};

  const sortedBooks = useMemo(() => {
    if (!books) return [];
    return sort ? getSortedBooks(books, sort) : books;
  }, [books, sort]);

  const paginatedBooks = useMemo(() => {
  const start = (currentPage - 1) * perPageNum;
  return sortedBooks.slice(start, start + perPageNum);
}, [sortedBooks, currentPage, perPageNum]);

const totalPages = Math.ceil(sortedBooks.length / perPageNum);

  return (
    <main className="my-16 mx-38">
      <section>
        <h1>Paper books</h1>
        <p>Book counter: {books?.length ?? 0}</p>

        <article>
          <div className="flex gap-4 mt-10 mb-6">
            <SortBySelect value={sort} onChange={handleSortChange} />
            <ItemsOnPage value={perPage} onChange={handleItemsPerPageChange}/>
          </div>
        </article>
      </section>
        
      <section>
        <CatalogGrid books={paginatedBooks} />
      </section>

      <section className="mt-10">
        <Pagination 
          totalPages={totalPages}
          currentPage={currentPage}
          onPageClick={handlePageClick}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      </section>
    </main>
  );
}
