import { createFileRoute } from '@tanstack/react-router';
import { BooksPage } from '@/components/catalog/BooksPage';
import { validateBookSearch } from '@/types/search';

export const Route = createFileRoute('/paper')({
  validateSearch: validateBookSearch,
  component: PaperRoute,
});

function PaperRoute() {
  return (
    <BooksPage dataFile="paperback.json" title="Paper books" />
  );
}
