import { BooksPage } from '@/components/catalog/BooksPage';
import { validateBookSearch } from '@/types/search';
import { createFileRoute } from '@tanstack/react-router';
import { supabase } from '@/api/supabase';

export const Route = createFileRoute('/audiobook')({
  validateSearch: validateBookSearch,

  loader: async () => {
    const { data, error } = await supabase
      .from('books')
      .select('*')
      .eq('type', 'audiobook');

    if (error) throw new Error(error.message);

    return data ?? [];
  },

  component: RouteComponent,
});

function RouteComponent() {
  const books = Route.useLoaderData();

  return (
    <BooksPage
      books={books}
      title="Audiobooks"
    />
  );
}