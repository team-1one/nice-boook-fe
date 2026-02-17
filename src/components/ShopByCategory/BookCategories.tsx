import type React from 'react';
import { BookCategoryCard } from './BookCategoryCard';
import { useBookCategories } from './useBookCategories';

export const BookCategories: React.FC = () => {
  const { categories } = useBookCategories();

  return (
    <section className="p-0 flex flex-col mx-38 gap-5.75 h-107.25">
      <h2 className="font-sans font-bold text-[32px] leading-10.25 tracking-[-0.01em]">
        Shop by category
      </h2>
      <div className="flex flex-row gap-3.75">
        {categories.map((category) => (
          <BookCategoryCard
            key={category.title}
            type={category.title}
            imageUrl={category.imageUrl}
            count={category.bookCount}
          />
        ))}
      </div>
    </section>
  );
};
