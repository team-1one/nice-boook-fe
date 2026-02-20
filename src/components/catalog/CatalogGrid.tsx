import type { BaseBook } from '@/types/book';
import { CatalogCard } from './CatalogCard';

export type Props = {
  books: BaseBook[];
}

export const CatalogGrid = ({ books }: Props) => {

  return (
    <div>
      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          sm:gap-x-4
          gap-y-6
          sm:gap-y-10
          justify-center
          justify-items-center
        ">
          {books.map((book) => (
            <CatalogCard key={book.slug} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};
