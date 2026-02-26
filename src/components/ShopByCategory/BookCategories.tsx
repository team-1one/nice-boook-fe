import { getRouteApi } from '@tanstack/react-router';
import { BookCategoryCard } from './BookCategoryCard';

export const BookCategories = () => {
  const { bookTypeCounts } = getRouteApi('/').useLoaderData();

  return (
    <section className="mx-auto flex max-w-270 justify-center p-0">
      <div className="flex flex-col gap-4">
        <h2 className="font-sans text-3xl leading-10.25 font-bold tracking-[-0.01em]">
          Shop by Category
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
