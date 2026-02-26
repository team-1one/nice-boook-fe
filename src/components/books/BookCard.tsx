import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import PurchaseButtons from '@/components/molecule/PurchaseButtons';
import type { Book } from '@/lib/schemas/book.schema';
import { useTranslation } from 'react-i18next';
import { Link } from '@tanstack/react-router';
import type { ComponentProps } from 'react';
import phrases from '@/constants/phrases';
import { Van } from 'lucide-react';
import BookImage from './BookImage';

interface BookCardProps {
  cardProps?: ComponentProps<typeof Card>;
  book: Book;
}

// TODO: Implement currency conversion and localization for price display
// TODO: Remove hardcoded colors, sizes etc. from classnames

export const BookCard = ({ cardProps, book }: BookCardProps) => {
  const { t } = useTranslation('book');

  return (
    <Link
      to="/$bookSlug"
      params={{ bookSlug: book.slug }}
      className="block w-full"
    >
      <Card
        className="hover:border-border w-full border-2 border-transparent shadow-none transition-shadow hover:shadow-xl"
        {...cardProps}
      >
        <BookImage book={book} />

        <CardHeader className="gap-1">
          <h5 className="truncate font-medium">{book.name}</h5>
          <span className="text-gray-secondary truncate text-sm">
            {book.author}
          </span>
        </CardHeader>

        <CardContent>
          <div className="mb-2 flex items-center gap-2">
            <h3 className="font-semibold">{`₴${book.price_discount ?? book.price_regular}`}</h3>
            {book.price_discount && (
              <h4 className="text-muted-foreground text-sm line-through">
                ₴ {book.price_regular}`
              </h4>
            )}
          </div>

          <div className="flex items-center gap-1">
            <Van color="#27AE60" />
            <span className="text-sm font-bold text-[#27AE60]">
              {t('inStock')}
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <PurchaseButtons book={book} />
        </CardFooter>
      </Card>
    </Link>
  );
};
