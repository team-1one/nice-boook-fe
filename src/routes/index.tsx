import { BannerSlider } from '@/components/organisms/BannerSlider/BannerSlider';
import { BookSlider } from '@/components/organisms/Books/BookSlider';
import phrases from '@/constants/phrases';
import { useBookData } from '@/hooks/useBooks';
import type { BannerData } from '@/types/banner';
import { createFileRoute } from '@tanstack/react-router';
import { fetchBookCount } from '@/api/supabase';
import { BookCategories } from '@/components/ShopByCategory/BookCategories';
import { Button } from '@/components/ui/button';
import { BookTypeSchema } from '@/lib/schemas/book.schema';
import { createFileRoute, Link } from '@tanstack/react-router';
import { BugPlay } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Index,
  loader: async () => {
    const [kindle, paperback, audiobook] = await Promise.all([
      fetchBookCount('kindle'),
      fetchBookCount('paperback'),
      fetchBookCount('audiobook'),
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
    };
  },
});

function Index() {
  const { data: books, loading, error } = useBookData('paperback.json');

  if (loading) return <div className="flex justify-center p-8">Loading...</div>;
  if (error)
    return (
      <div className="flex justify-center p-8 text-destructive">{error}</div>
    );
  if (!books) return null;

  const slicedBooks = books.slice(0, 8);

  return (
    <>
      <BannerSlider items={banners} />
      <BookSlider
        books={slicedBooks}
        title={phrases.newBooks}
      />
      <div className="p-2">
        <BookCategories />
        {/* // TODO: replace; just a representation */}
        <Button asChild>
          <Link
            to="/$bookSlug"
            params={{ bookSlug: 'dont-make-me-think-uk-paperback' }}
          >
            <BugPlay />
          </Link>
        </Button>
      </div>
      <BookSlider
        books={slicedBooks}
        title={phrases.mightLike}
      />
    </>
  );
}

// Temporarily hardcoded data till database usage is implemented.
const BASE_BANNER_URL =
  'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/banner';

const banners: BannerData[] = [
  {
    id: '1',
    images: {
      desktop: `${BASE_BANNER_URL}/desktopBanner1.webp`,
      tablet: `${BASE_BANNER_URL}/tabletBanner1.webp`,
      mobile: `${BASE_BANNER_URL}/mobileBanner1.webp`,
    },
    linkUrl: '/books/dont-make-me-think-en-paperback',
  },
  {
    id: '2',
    images: {
      desktop: `${BASE_BANNER_URL}/desktopBanner2.webp`,
      tablet: `${BASE_BANNER_URL}/tabletBanner2.webp`,
      mobile: `${BASE_BANNER_URL}/mobileBanner2.webp`,
    },
    linkUrl: '/books/dont-make-me-think-en-paperback',
  },
  {
    id: '3',
    images: {
      desktop: `${BASE_BANNER_URL}/desktopBanner3.webp`,
      tablet: `${BASE_BANNER_URL}/tabletBanner3.webp`,
      mobile: `${BASE_BANNER_URL}/mobileBanner3.webp`,
    },
    linkUrl: '/books/dont-make-me-think-en-paperback',
  },
];
