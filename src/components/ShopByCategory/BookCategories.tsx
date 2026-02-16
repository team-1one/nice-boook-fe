import type React from "react";
import { BookCategoryCard } from "./BookCategoryCard";
import { useBookCategories } from "./useBookCategories";

export const BookCategories: React.FC = () => {
  const { categories } = useBookCategories();

  return (
  <section className="flex justify-between">
      {categories.map((category) => (
        <BookCategoryCard
          key={category.title}
          type={category.title}
          imageUrl={category.imageUrl}
          count={category.bookCount}
        />
      ))}
      </section>
)}