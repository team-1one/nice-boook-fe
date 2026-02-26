import { getRouteApi } from '@tanstack/react-router';
import { BookCategoryCard } from './BookCategoryCard';
import { useTranslation } from 'react-i18next';

export const BookCategories = () => {
  const { t } = useTranslation('catalog');

  const { bookTypeCounts } = getRouteApi('/').useLoaderData();

  return (
    <section className="mx-auto flex max-w-270 justify-center p-0">
      <div className="flex flex-col gap-4">
        <h2 className="font-sans text-3xl leading-10.25 font-bold tracking-[-0.01em]">
          {t('shopByCategory')}
        </h2>
        <div className="flex flex-col gap-3.75 sm:flex-row">
          {bookTypeCounts.map(({ name, count, imgUrl }) => (
            <BookCategoryCard
              key={name}
              type={name}
              imageUrl={imgUrl}
              count={count}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
