import { CatalogGrid } from '@/components/catalog/CatalogGrid';
import { Typography } from '@/components/ui/Typography';
import type { Book } from '@/lib/schemas/book.schema';

interface FavoritesProps {
  favoriteCount?: number;
  favoriteBooks?: Book[];
}

const Favorites = ({
  favoriteCount = 0,
  favoriteBooks = [],
}: FavoritesProps) => {
  return (
    <div className="mx-auto mt-8 mb-8 flex max-w-360 flex-col px-4 sm:mt-16 sm:mb-14 sm:px-6 lg:mb-16 lg:px-8 xl:mb-38 xl:px-38">
      <div className="mb-6">
        <Typography
          variant="h1"
          className="mb-0.5"
        >
          Favorites
        </Typography>
        <Typography
          variant="body"
          color="secondary"
        >
          {favoriteCount} items
        </Typography>
      </div>
      <CatalogGrid books={favoriteBooks} />
    </div>
  );
};

export default Favorites;
