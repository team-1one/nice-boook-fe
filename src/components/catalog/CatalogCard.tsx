import type { Book } from '@/lib/schemas/book.schema';

export type Props = {
  book: Book;
};

export const CatalogCard = ({ book }: Props) => {
  return (
    <div className="w-[272px] h-[506px] border bg-gray-100">
      <h3>{book.name}</h3> <br />
      <p>{book.author}</p><br /><br />
      <p>Price {book.price_regular}</p>
    </div>
  );
};
