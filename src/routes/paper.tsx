import { createFileRoute } from '@tanstack/react-router';
import { BooksPage } from '@/components/catalog/BooksPage';
import { validateBookSearch } from '@/types/search';
import { supabase } from '@/api/supabase';


export const Route = createFileRoute('/paper')({
  validateSearch: validateBookSearch,

  loader: async () => {
    const { data, error } = await supabase
      .from('books')
      .select('*')
      .eq('type', 'paperback');

    if (error) {
      throw new Error(error.message);
    }

    return data ?? [];
  },

  component: PaperRoute,
});

function PaperRoute() {
  const books = Route.useLoaderData();

  return (
    <BooksPage
      books={books}
      title="Paper books"
    />
  );
}