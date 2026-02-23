import { createFileRoute, useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/category/$category')({
  component: RouteComponent,
});

function RouteComponent() {
  const { category } = useParams({ from: Route.id });
  return <div>Hello {category}</div>;
}
