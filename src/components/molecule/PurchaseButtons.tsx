import { useCartStore } from '@/components/cart/cart.store';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import phrases from '@/constants/phrases';
import type { Book } from '@/lib/schemas/book.schema';
import { cn, withPreventDefault } from '@/lib/utils';
import { Heart } from 'lucide-react';

interface Props {
  book: Book;
}

const PurchaseButtons = ({ book }: Props) => {
  const addItem = useCartStore((state) => state.addItem);
  const items = useCartStore((state) => state.items);
  const isInCart = items.some((item) => item.slug === book.slug);

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
  );
};

export default PurchaseButtons;
