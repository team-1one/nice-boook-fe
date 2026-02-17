import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/audiobook')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello /audiobook!</div>;
}
