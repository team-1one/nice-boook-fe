import type { Book } from '@/lib/schemas/book.schema';
import { CatalogCard } from './CatalogCard';

export type Props = {
  books: Book[];
};

export const CatalogGrid = ({ books }: Props) => {
  return (
    <div>
      {!books.length ?
        <p>No books found</p>
      : <div className="grid grid-cols-1 justify-center justify-items-center gap-y-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-4">
          {books.map((book) => (
            <CatalogCard
              key={book.slug}
              book={book}
            />
          ))}
        </div>
      }
    </div>
  );
};
