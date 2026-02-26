import { fetchBookBySlug, fetchBooksByEdition, getBooks } from '@/api/supabase';
import BookDetails from '@/components/templates/BookDetails';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$bookSlug')({
  component: RouteComponent,
  loader: async ({ params: { bookSlug } }) => {
    const [book, randBooks] = await Promise.all([
      fetchBookBySlug(bookSlug),
      getBooks('random', 16),
    ]);

    const editions =
      book.lang_available.length > 1 ?
        await fetchBooksByEdition(book.namespace_id, book.type)
      : [];

    return { book, editions, mightLikeBooks: randBooks };
  },
});

function RouteComponent() {
  return <BookDetails />;
}
