import { createFileRoute, useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/bookType/$bookType')({
  component: RouteComponent,
});

function RouteComponent() {
  const { bookType } = useParams({ from: Route.id });

  return <div>Hello /bookType/{bookType}!</div>;
}
