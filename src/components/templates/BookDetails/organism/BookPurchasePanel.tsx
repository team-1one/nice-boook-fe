import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from '@tanstack/react-router';
import type { Book } from '@/lib/schemas/book.schema';
import { DetailList } from '../molecule/DetailList';
import { getSummaryDetails } from '../lib/helpers';
import { useTranslation } from 'react-i18next';
import PurchaseButtons from '@/components/molecule/PurchaseButtons';

type BookPurchasePanelProps = {
  book: Book;
  editions: Book[];
  categories: string[];
};

export function BookPurchasePanel({
  book,
  editions,
  categories,
}: BookPurchasePanelProps) {
  const navigate = useNavigate();
  const { t } = useTranslation('book');

  const summaryDetails = getSummaryDetails(book, t);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-gray-secondary bg mb-5 text-sm">{t('category')}</p>
        {categories.map((ctg, i) => (
          <Button
            key={ctg + i}
            variant="outline"
            className="me-1.5 mb-3 px-3"
            onClick={() =>
              navigate({
                to: '/category/$category',
                params: { category: ctg },
                search: {
                  order: 'asc',
                  page: 1,
                  pageSize: 10,
                  sortBy: 'newest',
                },
              })
            }
          >
            {ctg}
          </Button>
        ))}
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
        <span className="text-gray-primary text-3xl font-bold">
          &#x20b4;{book.price_discount ?? book.price_regular}
        </span>
        {book.price_discount && (
          <span className="text-gray-secondary text-xl line-through">
            &#x20b4;{book.price_regular}
          </span>
        )}
      </div>

      <PurchaseButtons book={book} />

      <DetailList items={summaryDetails} />
    </div>
  );
}
