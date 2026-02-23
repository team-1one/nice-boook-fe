import { getRouteApi } from '@tanstack/react-router';
import { BookCategoryCard } from './BookCategoryCard';

export const BookCategories = () => {
  const { bookTypeCounts } = getRouteApi('/').useLoaderData();

  return (
    <section className="p-0 flex flex-col mx-38 gap-5.75 h-107.25">
      <h2 className="font-sans font-bold text-[32px] leading-10.25 tracking-[-0.01em]">
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
