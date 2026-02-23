import { BooksPage } from '@/components/catalog/BooksPage';
import { validateBookSearch } from '@/types/search';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/audiobook')({
  validateSearch: validateBookSearch,
  component: AudioRoute,
});

export function AudioRoute() {
  return (
    <BooksPage dataFile="audiobook.json" title="Audio books" />
  );
}
