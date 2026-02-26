import { getBooks } from '@/api/supabase';
import Favorites from '@/components/templates/Favorites/Favorites';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/favorites')({
  component: RouteComponent,
  loader: async () => await getBooks('new'),
});

function RouteComponent() {
  return <Favorites />;
}
