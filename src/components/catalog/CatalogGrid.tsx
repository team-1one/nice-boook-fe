import type React from 'react';
import type { BaseBook } from '@/types/book';
import { CatalogCard } from './CatalogCard';

export type Props = {
  books: BaseBook[];
}

export const CatalogGrid: React.FC<Props> = ({ books }: Props) => {

  return (
    <div>
      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        <div className="grid grid-cols-4 gap-x-4 gap-y-10 justify-center">
          {books.map((book) => (
            <CatalogCard key={book.slug} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};
