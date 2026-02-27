import type { Book } from '@/lib/schemas/book.schema';
import { BookCard } from '@/components/books/BookCard';
import { useTranslation } from 'react-i18next';

export type Props = {
  books: Book[];
};

export const CatalogGrid = ({ books }: Props) => {
  const { t } = useTranslation('catalog');

  return (
    <div>
      {!books.length ?
        <p>{t('noBooksFound')}</p>
      : <div className="grid grid-cols-1 justify-center justify-items-center gap-y-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-4">
          {books.map((book) => (
            <BookCard
              key={book.slug}
              book={book}
            />
          ))}
        </div>
      }
    </div>
  );
};
