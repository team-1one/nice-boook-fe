import { BooksPage } from '@/components/catalog/BooksPage';
import { validateBookSearch } from '@/types/search';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/kindle')({
  validateSearch: validateBookSearch,
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <BooksPage dataFile="kindle.json" title="Kindle books" />
  );
}
