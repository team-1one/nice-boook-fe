import { CatalogGrid } from '@/components/catalog/CatalogGrid';
import { BackButton } from '@/components/molecule/BackButton';
import { Typography } from '@/components/ui/Typography';
import { useFavoriteBooksStore } from '@/stores/favorites.store';
import { useTranslation } from 'react-i18next';

const Favorites = () => {
  const { t } = useTranslation('favorites');

  const favorites = useFavoriteBooksStore((state) => state.favorites);
  const totalFavorites = Object.keys(favorites).length;

  return (
    <main className="mx-auto mt-8 mb-8 flex max-w-360 flex-col px-4 sm:mt-16 sm:mb-14 sm:px-6 lg:mb-16 lg:px-8 xl:mb-38 xl:px-38">
      <BackButton />
      <div className="mb-6">
        <Typography
          variant="h1"
          className="mb-0.5"
        >
          {t('title')}
        </Typography>
        <Typography
          variant="body"
          color="secondary"
        >
          {t('items', { count: totalFavorites })}
        </Typography>
      </div>
      <CatalogGrid books={Object.values(favorites)} />
    </main>
  );
};

export default Favorites;
