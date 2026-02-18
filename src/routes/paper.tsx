import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/paper')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello /paper!</div>;
}
