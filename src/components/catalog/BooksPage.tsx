import { useEffect, useMemo } from 'react';
import { useSearch } from '@tanstack/react-router';
import { getSortedBooks } from '@/components/catalog/utilits/getSortedBooks';

import { CatalogGrid } from '@/components/catalog/CatalogGrid';
import { ItemsOnPage } from '@/components/catalog/formItemsOnPage';
import { SortBySelect } from '@/components/catalog/formSortBySelect';
import { Pagination } from '@/components/catalog/Pagination';
import { Typography } from '@/components/ui/Typography';
import type { SortOption } from './typeOfSortOption';
import { CATALOG_LIMITS } from './constants/catalog';
import { useUpdateSearch } from './hooks/useUpdateSearch';
import type { Book } from '@/lib/schemas/book.schema';

type Props = {
  books: Book[];
  title: string;
};

export function BooksPage({ books, title }: Props) {
  const updateSearch = useUpdateSearch();

  const search = useSearch({ strict: false });

  const sort = search.sort as SortOption | undefined;
  const perPage = (search.perPage as string) || CATALOG_LIMITS.DEFAULT_PER_PAGE;
  const page = (search.page as string) || CATALOG_LIMITS.DEFAULT_PAGE;

  const perPageNum = +perPage;
  const currentPage = +page;

  const sortedBooks = useMemo(() => 
    getSortedBooks(books, sort as SortOption), 
  [books, sort]);

  const paginatedBooks = useMemo(() => {
    const start = (currentPage - 1) * perPageNum;
    return sortedBooks.slice(start, start + perPageNum);
  }, [sortedBooks, currentPage, perPageNum]);

  const totalPages = Math.ceil(sortedBooks.length / perPageNum);

  const handleSortChange = (newValue: SortOption) => { 
  updateSearch({ page: CATALOG_LIMITS.DEFAULT_PAGE, sort: newValue });
 };

  const handleItemsPerPageChange = (newValue: string) => { 
    updateSearch({ page: CATALOG_LIMITS.DEFAULT_PAGE, perPage: newValue });
  };
  
  const handleNextPage = () => { 
    if (currentPage >= totalPages) return; 
    const nextPage = currentPage + 1; 
    updateSearch({ page: nextPage.toString() }) 
  } 
    
  const handlePreviousPage = () => { 
    if (currentPage <= 1) return; 
    const nextPage = currentPage - 1; 
    updateSearch({ page: nextPage.toString() }) 
  } 
        
  const handlePageClick = (newPage: number) => { 
    updateSearch({ page: newPage.toString() })
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <main className="
      mx-auto
      max-w-[1440px]

      mt-8 sm:mt-16

      px-4 sm:px-6 lg:px-8 xl:px-[152px]

      mb-8 sm:mb-14 lg:mb-16 xl:mb-[152px]
    ">
      <section className="mt-8 sm:mt-16 mb-6">
        <Typography variant="h1" className="mb-2">
          {title}
        </Typography>

        <Typography variant="body" color="secondary" className="mb-10">
          {(books?.length ?? 0).toLocaleString('en-US')} books
        </Typography>

        <div className="flex gap-4">
          <SortBySelect value={sort} onChange={handleSortChange} />
          <ItemsOnPage value={perPage} onChange={handleItemsPerPageChange} />
        </div>
      </section>

      <section className="mb-6 sm:mb-14 lg:mb-16">
        <CatalogGrid books={paginatedBooks} />
      </section>

      <section>
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
