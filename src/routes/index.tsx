import { BannerSlider } from '@/components/organisms/BannerSlider/BannerSlider';
import { BookCategories } from '@/components/ShopByCategory/BookCategories';
import { createFileRoute, getRouteApi } from '@tanstack/react-router';
import { fetchBookCount, getBanners, getBooks } from '@/api/supabase';
import { BookSlider } from '@/components/organisms/Books/BookSlider';
import { BookTypeSchema } from '@/lib/schemas/book.schema';
import phrases from '@/constants/phrases';

export const Route = createFileRoute('/')({
  component: Index,
  loader: async () => {
    const [kindle, paperback, audiobook, banners, newBooks, randomBooks] =
      await Promise.all([
        fetchBookCount('kindle'),
        fetchBookCount('paperback'),
        fetchBookCount('audiobook'),
        getBanners(),
        getBooks('new'),
        getBooks('random', 16),
      ]);
    return {
      // TODO: extract to separate file
      bookTypeCounts: [
        {
          name: BookTypeSchema.enum.audiobook,
          count: audiobook,
          imgUrl:
            'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/category/audiobooks.svg',
        },
        {
          name: BookTypeSchema.enum.kindle,
          count: kindle,
          imgUrl:
            'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/category/kindle_books.svg',
        },
        {
          name: BookTypeSchema.enum.paperback,
          count: paperback,
          imgUrl:
            'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/category/paper_books.svg',
        },
      ],
      // New books for home page
      newBooks,
      // Random books for "You might like" section
      mightLikeBooks: randomBooks,
      // Banners for home page
      banners,
    };
  },
});

function Index() {
  const { newBooks, banners, mightLikeBooks } =
    getRouteApi('/').useLoaderData();

  return (
    <div className="flex flex-col">
      <BannerSlider items={banners} />
      <BookSlider
        books={newBooks}
        title={phrases.newBooks}
      />
      <BookCategories />
      <BookSlider
        books={mightLikeBooks}
        title={phrases.mightLike}
      />
    </div>
  );
}
