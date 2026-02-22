import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from '@tanstack/react-router';
import { Heart } from 'lucide-react';
import type { Book } from '@/lib/schemas/book.schema';
import { DetailList } from '../molecule/DetailList';
import { getSummaryDetails } from '../lib/helpers';

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
  const summaryDetails = getSummaryDetails(book);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-gray-secondary mb-1 text-sm">Category</p>
        <Button
          variant="outline"
          className="px-3"
          onClick={() =>
            navigate({ to: '/category/$category', params: { category } })
          }
        >
          {category}
        </Button>
      </div>

      <Separator />

      <div>
        <p className="text-gray-secondary mb-2 text-sm">Select language</p>
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
        <Button className="h-full flex-1">Add to cart</Button>
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
