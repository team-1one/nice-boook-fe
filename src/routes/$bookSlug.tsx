import BookDetails from '@/components/templates/BookDetails';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$bookSlug')({
  component: RouteComponent,
});

function RouteComponent() {
  return <BookDetails />;
}
