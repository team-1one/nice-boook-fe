import { BannerSlider } from '@/components/organisms/BannerSlider/BannerSlider';
import { BookCategories } from '@/components/ShopByCategory/BookCategories';
import { createFileRoute, getRouteApi } from '@tanstack/react-router';
import { fetchBookCount, getBanners, getBooks } from '@/api/supabase';
import { BookSlider } from '@/components/organisms/Books/BookSlider';
import { BookTypeSchema } from '@/lib/schemas/book.schema';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation('nav');

  return (
    <div className="px-4">
      <BannerSlider items={banners} />
      <BookSlider
        books={newBooks}
        title={t('newBooks')}
      />
      <div>
        <BookCategories />
      </div>
      <BookSlider
        books={mightLikeBooks}
        title={t('mightLike')}
      />
    </div>
  );
}
