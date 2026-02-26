import { getRouteApi } from '@tanstack/react-router';
import { BookCategoryCard } from './BookCategoryCard';
import { Typography } from '../ui/Typography';

export const BookCategories = () => {
  const { bookTypeCounts } = getRouteApi('/').useLoaderData();

  return (
    <section className="mx-auto flex max-w-270 justify-center p-0">
      <div className="flex flex-col gap-4">
        <Typography variant="h2" className="mb-6">
          Shop by Category
        </Typography>
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
