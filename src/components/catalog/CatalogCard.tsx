import type React from 'react';
import type { BaseBook } from '@/types/book';

export type Props = {
  book: BaseBook;
}

export const CatalogCard: React.FC<Props> = ({ book }: Props) => {

  return (
    <div className="w-[272px] h-[506px] border bg-gray-100">
      <h3>{book.name}</h3> <br />
      <p>{book.author}</p><br /><br />
      <p>Price {book.priceRegular}</p>
    </div>
  );
};
