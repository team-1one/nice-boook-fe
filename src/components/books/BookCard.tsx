import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { ButtonGroup } from '@/components/ui/button-group';
import { Headphones, Heart, Van } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { BookData } from '@/types/book';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';

interface BookCardProps {
  cardProps?: ComponentProps<typeof Card>;
  product: BookData;
}

const handleButtonsClick = (
  e: React.MouseEvent<HTMLButtonElement>,
  cb: () => void,
) => {
  e.preventDefault();
  cb();
};

// It's temporally constant until we switch to using i18next
const ProductPhrases = {
  inStock: 'In Stock',
  addToCart: 'Add to cart',
  addedToCart: 'Added',
} as const;

const ebookFrame =
  'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/audiobook/2.webp';

// TODO: Implement currency conversion and localization for price display
// TODO: Remove hardcoded colors, sizes etc. from classnames

export const BookCard = ({ cardProps, product }: BookCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // TODO: Here we need some more clear way to understand if we need icon
  const isEbook = product.type === 'kindle';
  const isAudioBook = product.type === 'audiobook';

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  const toggleWishlist = () => {
    setIsWishlisted((prev) => !prev);
  };

  const wishlistButtonLabel =
    isWishlisted ? ProductPhrases.addedToCart : ProductPhrases.addToCart;

  return (
    // FIXME: Fix hardcoded path type assertion
    <Link to={`/books/${product.slug}` as '/paper'}>
      <Card {...cardProps}>
        <div className="relative overflow-hidden shrink-0">
          <div className="w-full aspect-square relative bg-gray-50">
            {isEbook ?
              <>
                <div className="absolute inset-[9%] inset-x-[14%] flex items-center justify-center overflow-hidden">
                  <img
                    src={'https://placehold.co/320x320'}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <img
                    src={ebookFrame}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </>
            : <div className="flex items-center justify-center w-full h-full">
                <img
                  src={'https://placehold.co/320x320'}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            }
          </div>

          {isAudioBook && (
            <div className="absolute top-1 right-4 bg-green-500 rounded-full p-1 size-10 flex items-center justify-center">
              <Headphones
                color="#fff"
                size={18}
              />
            </div>
          )}
        </div>

        <CardHeader className="gap-1">
          <h5 className="font-medium">{product.name}</h5>
          <span className="text-sm text-[#89939A]">{product.author}</span>
        </CardHeader>

        <CardContent>
          <div>
            <div className="gap-2 mb-2 flex items-center">
              <h3 className="font-semibold">{`₴${product.priceDiscount ?? product.priceRegular}`}</h3>
              {product.priceDiscount && (
                <h4 className="line-through text-sm text-muted-foreground">{`₴${product.priceRegular}`}</h4>
              )}
            </div>

            <div className="flex items-center gap-1">
              <Van color="#27AE60" />
              <span className="text-sm text-[#27AE60] font-bold">
                {ProductPhrases.inStock}
              </span>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <ButtonGroup className="w-full">
            <ButtonGroup className="flex-1">
              <Button
                variant={isWishlisted ? 'outline' : 'default'}
                size={'xl'}
                className={cn('w-full transition-all duration-300', {
                  'text-[#27AE60] hover:text-[#27AE60]/80': isWishlisted,
                })}
                onClick={(e) => handleButtonsClick(e, toggleWishlist)}
              >
                {wishlistButtonLabel}
              </Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button
                variant={'outline'}
                size={'icon-xl'}
                onClick={(e) => handleButtonsClick(e, toggleLike)}
              >
                <Heart
                  fill={isLiked ? 'red' : 'none'}
                  strokeWidth={isLiked ? 0 : 2}
                />
              </Button>
            </ButtonGroup>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Link>
  );
};
