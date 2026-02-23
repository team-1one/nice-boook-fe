import { useEffect, useMemo } from 'react';
import { useNavigate, useSearch } from '@tanstack/react-router';

import { useBookData } from '@/hooks/useBooks';
import { getSortedBooks } from '@/components/catalog/utilits/getSortedBooks';

import { CatalogGrid } from '@/components/catalog/CatalogGrid';
import { ItemsOnPage } from '@/components/catalog/formItemsOnPage';
import { SortBySelect } from '@/components/catalog/formSortBySelect';
import { Pagination } from '@/components/catalog/Pagination';
import { Typography } from '@/components/ui/Typography';
import type { SortOption } from './typeOfSortOption';

type BookDataFile =
  | "paperback.json"
  | "kindle.json"
  | "audiobook.json";

type Props = {
  dataFile: BookDataFile;
  title: string;
};

export function BooksPage({ dataFile, title }: Props) {
  const { data: books } = useBookData(dataFile);

  const search = useSearch({ strict: false }); 
  const navigator = useNavigate();

  const sort = search.sort as SortOption | undefined;
  const perPage = (search.perPage as string) || '16';
  const page = (search.page as string) || '1';

  const perPageNum = +perPage;
  const currentPage = +page;

  const sortedBooks = useMemo(() => {
    if (!books) return [];
    return sort ? getSortedBooks(books, sort) : books;
  }, [books, sort]);

  const paginatedBooks = useMemo(() => {
    const start = (currentPage - 1) * perPageNum;
    return sortedBooks.slice(start, start + perPageNum);
  }, [sortedBooks, currentPage, perPageNum]);

  const totalPages = Math.ceil(sortedBooks.length / perPageNum);

  const handleSortChange = (newValue: SortOption) => { 
  navigator({
    to: '.',
    search: {
    ...search,
    sort: newValue === '' ? undefined : newValue,
    page: '1',
  }});
 };

  const handleItemsPerPageChange = (newValue: string) => { 
    navigator({ 
      to: '.',
      search: { 
      ...search,
        perPage: newValue,
        page: '1',
      }});
  };
  
  const handleNextPage = () => { 
    if (currentPage >= totalPages) return; 
    const nextPage = currentPage + 1; 
    navigator({ 
      to: '.',
      search: {
        ...search,
        page: nextPage.toString(),
      }
    }); 
  } 
    
  const handlePreviousPage = () => { 
    if (currentPage <= 1) return; 
    const nextPage = currentPage - 1; 
    navigator({ 
      to: '.',
      search: {
        ...search,
        page: nextPage.toString(),
      }
    }); 
  } 
        
  const handlePageClick = (newPage: number) => { 
    navigator({ 
      to: '.',
      search: {
        ...search,
        page: newPage.toString(),
      }
    });
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
