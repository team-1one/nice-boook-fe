import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/kindle')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello /kindle!</div>;
}
