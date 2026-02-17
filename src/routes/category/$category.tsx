import { createFileRoute, useParams } from '@tanstack/react-router';
import { z } from 'zod';

export const Route = createFileRoute('/category/$category')({
  params: z.object({ category: z.string() }),
  component: RouteComponent,
});

function RouteComponent() {
  const { category } = useParams({ from: Route.id });
  return <div>Hello {category}</div>;
}
