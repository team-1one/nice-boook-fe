import type { Book } from '@/lib/schemas/book.schema';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoriteBooksState {
  favorites: Record<string, Book>;
  isFavorite: (bookSlug: string) => boolean;
  toggleFavorite: (book: Book) => void;
}

export const useFavoriteBooksStore = create<FavoriteBooksState>()(
  persist(
    (set, get) => ({
      favorites: {},
      isFavorite(bookSlug: string) {
        return bookSlug in get().favorites;
      },
      toggleFavorite(book: Book) {
        const { [book.slug]: tryExistingFavorite, ...other } = get().favorites;

        set({
          favorites:
            tryExistingFavorite ?
              { ...other }
            : { ...get().favorites, [book.slug]: book },
        });
      },
    }),
    {
      name: 'favorite-books',
      partialize: ({ favorites }) => ({ favorites }),
    },
  ),
);
