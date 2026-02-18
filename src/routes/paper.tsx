import { createFileRoute , useNavigate } from '@tanstack/react-router';

import type { SortOption } from '@/components/catalog/typeOfSortOption';

import { useBookData } from '@/hooks/useBooks';
import { useMemo } from 'react';

import { CatalogGrid } from '@/components/catalog/CatalogGrid';
import { ItemsOnPage } from '@/components/catalog/formItemsOnPage';
import { SortBySelect } from '@/components/catalog/formSortBySelect';
import { getSortedBooks } from '@/components/catalog/utilits/getSortedBooks';

type BookSearch = {
  sort?: SortOption;
};

export const Route = createFileRoute('/paper')({
  validateSearch: (search: Record<string, unknown>): BookSearch => {
    return {
      sort: (search.sort as SortOption) || undefined,
    };
  },
  component: RouteComponent,
});

export function RouteComponent() {
  const {data: books} = useBookData('paperback.json');

  const { sort } = Route.useSearch();
  const navigator = useNavigate({ from: Route.fullPath });

  const handleSortChange = (newValue: SortOption) => {
    navigator({
    search: (prev) => ({
      ...prev,
      sort: newValue === '' ? undefined : newValue,
    }),
  });
  };

  const sortedBooks = useMemo(() => {
    if (!books) return [];
    return sort ? getSortedBooks(books, sort) : books;
  }, [books, sort]);

  return (
    <main className="my-16 mx-38">
      <section>
        <h1>Paper books</h1>
        <p>Book counter: {books?.length ?? 0}</p>

        <article>
          <div className="flex gap-4 mt-10 mb-6">
            <SortBySelect value={sort} onChange={handleSortChange} />
            <ItemsOnPage />
          </div>
        </article>
      </section>
        <CatalogGrid books={sortedBooks} />
      <section>
        
      </section>

    </main>
  );
}
