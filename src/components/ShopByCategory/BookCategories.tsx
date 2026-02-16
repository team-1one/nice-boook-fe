import type React from "react";
import { BookCategoryCard } from "./BookCategoryCard";

const categories = [
  { title: 'Paper books', imageUrl: 'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/category/paper_books.svg', bookCount: 12 },
  { title: 'Audiobooks', imageUrl: 'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/category/audiobooks.svg', bookCount: 8 },
  { title: 'Kindle books', imageUrl: 'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/category/kindle_books.svg', bookCount: 5 },
];

export const BookCategories: React.FC = () => {
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