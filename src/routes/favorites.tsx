import { getBooks } from '@/api/supabase';
import Favorites from '@/components/templates/Favorites/Favorites';
import { createFileRoute, useLoaderData } from '@tanstack/react-router';

export const Route = createFileRoute('/favorites')({
  component: RouteComponent,
  loader: async () => await getBooks('new'),
});

function RouteComponent() {
  //TODO: temp/delete
  const newBooks = useLoaderData({ from: Route.id });
  return <Favorites favoriteBooks={newBooks} />;
}
