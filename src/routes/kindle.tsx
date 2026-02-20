import { CatalogGrid } from '@/components/catalog/CatalogGrid';
import { ItemsOnPage } from '@/components/catalog/formItemsOnPage';
import { SortBySelect } from '@/components/catalog/formSortBySelect';
import { Pagination } from '@/components/catalog/Pagination';
import type { SortOption } from '@/components/catalog/typeOfSortOption';
import { getSortedBooks } from '@/components/catalog/utilits/getSortedBooks';
import { Typography } from '@/components/ui/Typography';
import { useBookData } from '@/hooks/useBooks';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect, useMemo } from 'react';

type BookSearch = {
  sort?: SortOption;
  perPage: string;
  page: string;
};

export const Route = createFileRoute('/kindle')({
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
  const {data: books} = useBookData('kindle.json');

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
  window.scrollTo({ top: 0, behavior: 'smooth' });
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

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
      <section className='mb-6'>
        <Typography variant="h1" color="primary" className="mb-2">
          Paper books
        </Typography>
        <Typography variant="body" color="secondary" className="mb-10">
          {(books?.length ?? 0).toLocaleString('en-US')} books
        </Typography>

        <article>
          <div className="flex gap-4 mt-10 mb-6">
            <SortBySelect value={sort} onChange={handleSortChange} />
            <ItemsOnPage value={perPage} onChange={handleItemsPerPageChange}/>
          </div>
        </article>
      </section>
        
      <section className="mb-10">
        <CatalogGrid books={paginatedBooks} />
      </section>

      <section className="mb-16">
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
