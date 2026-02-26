import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { ButtonGroup } from '@/components/ui/button-group';
import { cn, withPreventDefault } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import type { ComponentProps } from 'react';
import phrases from '@/constants/phrases';
import { Heart, Van } from 'lucide-react';
import BookImage from './BookImage';
import type { Book } from '@/lib/schemas/book.schema';
import { useCartStore } from '@/components/cart/cart.store'


interface BookCardProps {
  cardProps?: ComponentProps<typeof Card>;
  book: Book;
}

// TODO: Implement currency conversion and localization for price display
// TODO: Remove hardcoded colors, sizes etc. from classnames

export const BookCard = ({ cardProps, book }: BookCardProps) => {
  const addItem = useCartStore((state) => state.addItem)
  const items = useCartStore((state) => state.items)

  const isInCart = items.some((item) => item.slug === book.slug)

  const cartButtonLabel = isInCart ? phrases.addedToCart : phrases.addToCart;

  const handleAddToCart = () => {
  addItem({
    slug: book.slug,
    name: book.name,
    author: book.author,
    price: book.price_discount ?? book.price_regular,
    image: book.images[0],
  });
};

  return (
    <Link
      to="/$bookSlug"
      params={{ bookSlug: book.slug }}
    >
      <Card {...cardProps}>
        <BookImage book={book} />

        <CardHeader className="gap-1">
          <h5 className="truncate font-medium">{book.name}</h5>
          <span className="truncate text-sm text-[#89939A]">{book.author}</span>
        </CardHeader>

        <CardContent>
          <div className="mb-2 flex items-center gap-2">
            <h3 className="font-semibold">{`₴${book.price_discount ?? book.price_regular}`}</h3>
            {book.price_discount && (
              <h4 className="text-muted-foreground text-sm line-through">{`₴${book.price_regular}`}</h4>
            )}
          </div>

          <div className="flex items-center gap-1">
            <Van color="#27AE60" />
            <span className="text-sm font-bold text-[#27AE60]">
              {phrases.inStock}
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <ButtonGroup className="w-full">
            <ButtonGroup className="flex-1">
              <Button
                variant={isInCart ? 'outline' : 'default'}
                size="xl"
                className={cn('w-full transition-all', {
                  'text-[#27AE60] hover:text-[#27AE60]/80': isInCart,
                })}
                onClick={withPreventDefault(handleAddToCart)}
              >
                {cartButtonLabel}
              </Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button
                variant="outline"
                size="icon-xl"
                // onClick={withPreventDefault(() => toggleStatus('isWishlisted'))}
              >
                <Heart
                  // fill={isWishlisted ? 'red' : 'none'}
                  // strokeWidth={isWishlisted ? 0 : 2}
                />
              </Button>
            </ButtonGroup>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Link>
  );
};
