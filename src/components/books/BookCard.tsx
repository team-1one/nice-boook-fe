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
import { useState } from 'react';
import type { Book } from '@/lib/schemas/book.schema';

interface BookCardState {
  isInCart: boolean;
  isWishlisted: boolean;
}

interface BookCardProps {
  cardProps?: ComponentProps<typeof Card>;
  product: Book;
}

// TODO: Implement currency conversion and localization for price display
// TODO: Remove hardcoded colors, sizes etc. from classnames

export const BookCard = ({ cardProps, product }: BookCardProps) => {
  // TODO: use global state management for cart and wishlist status instead of local state in component
  const [{ isInCart, isWishlisted }, setState] = useState<BookCardState>({
    isInCart: false,
    isWishlisted: false,
  });

  const toggleStatus = (statusKey: keyof BookCardState) => {
    setState((prev) => ({ ...prev, [statusKey]: !prev[statusKey] }));
  };

  const cartButtonLabel = isInCart ? phrases.addedToCart : phrases.addToCart;

  return (
    // FIXME: Fix hardcoded path type assertion
    <Link to={`/books/${product.slug}` as '/paper'}>
      <Card {...cardProps}>
        <BookImage book={product} />

        <CardHeader className="gap-1">
          <h5 className="truncate font-medium">{product.name}</h5>
          <span className="truncate text-sm text-[#89939A]">
            {product.author}
          </span>
        </CardHeader>

        <CardContent>
          <div className="mb-2 flex items-center gap-2">
            <h3 className="font-semibold">{`₴${product.price_regular ?? product.price_regular}`}</h3>
            {product.price_discount && (
              <h4 className="text-muted-foreground text-sm line-through">{`₴${product.price_regular}`}</h4>
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
                onClick={withPreventDefault(() => toggleStatus('isInCart'))}
              >
                {cartButtonLabel}
              </Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button
                variant="outline"
                size="icon-xl"
                onClick={withPreventDefault(() => toggleStatus('isWishlisted'))}
              >
                <Heart
                  fill={isWishlisted ? 'red' : 'none'}
                  strokeWidth={isWishlisted ? 0 : 2}
                />
              </Button>
            </ButtonGroup>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Link>
  );
};
