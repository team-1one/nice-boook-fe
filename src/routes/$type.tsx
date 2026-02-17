import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$type')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello /$type/!</div>;
}
