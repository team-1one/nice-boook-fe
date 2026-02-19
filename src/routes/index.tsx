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
  return (
    <div className="p-2">
      <BookCategories />
      <Button asChild>
        <Link
          to="/$bookSlug"
          params={{ bookSlug: 'chip-war-en-paperback' }}
        >
          <BugPlay />
        </Link>
      </Button>
    </div>
  );
}
