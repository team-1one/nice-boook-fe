import { getRouteApi } from '@tanstack/react-router';
import { BookCategoryCard } from './BookCategoryCard';

export const BookCategories = () => {
  const { bookTypeCounts } = getRouteApi('/').useLoaderData();

  return (
    <section className="mx-38 flex h-107.25 flex-col gap-5.75 p-0">
      <h2 className="font-sans text-[32px] leading-10.25 font-bold tracking-[-0.01em]">
        Shop by Category
      </h2>
      <div className="flex flex-row gap-3.75">
        {bookTypeCounts.map(({ name, count, imgUrl }) => (
          <BookCategoryCard
            key={name}
            type={name}
            imageUrl={imgUrl}
            count={count}
          />
        ))}
      </div>
    </section>
  );
};
