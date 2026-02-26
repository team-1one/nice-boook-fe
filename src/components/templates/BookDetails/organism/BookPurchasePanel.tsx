import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from '@tanstack/react-router';
import { Heart } from 'lucide-react';
import type { Book } from '@/lib/schemas/book.schema';
import { DetailList } from '../molecule/DetailList';
import { getSummaryDetails } from '../lib/helpers';
import { useTranslation } from 'react-i18next';

type BookPurchasePanelProps = {
  book: Book;
  editions: Book[];
  category: string;
};

export function BookPurchasePanel({
  book,
  editions,
  category,
}: BookPurchasePanelProps) {
  const navigate = useNavigate();
  const { t } = useTranslation('book');

  const summaryDetails = getSummaryDetails(book, t);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-gray-secondary bg mb-1 text-sm">{t('category')}</p>
        <Button
          variant="outline"
          className="px-3"
          onClick={() =>
            navigate({
              to: '/category/$category',
              params: { category },
              search: { order: 'asc', page: 1, pageSize: 10, sortBy: 'newest' },
            })
          }
        >
          {category}
        </Button>
      </div>

      <Separator />

      <div>
        <p className="text-gray-secondary mb-2 text-sm">
          {t('selectLanguage')}
        </p>
        <div className="flex gap-2">
          {editions.map(({ lang, slug }) => (
            <Button
              key={slug}
              variant={book.lang === lang ? 'default' : 'outline'}
              className="w-12 uppercase"
              onClick={() =>
                navigate({ to: '/$bookSlug', params: { bookSlug: slug } })
              }
            >
              {lang}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      <div className="flex items-baseline gap-4">
        <span className="text-3xl font-bold text-black">
          ${book.price_discount ?? book.price_regular}
        </span>
        {book.price_discount && (
          <span className="text-gray-secondary text-xl line-through">
            ${book.price_regular}
          </span>
        )}
      </div>

      <div className="flex h-10 gap-2">
        <Button className="h-full flex-1">{t('addToCart')}</Button>
        <Button
          className="aspect-square h-full"
          variant="outline"
        >
          <Heart />
        </Button>
      </div>

      <DetailList
        items={summaryDetails}
        className="flex flex-col gap-2 text-sm"
      />
    </div>
  );
}
