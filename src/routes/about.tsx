import TestComponent from '@/components/TestComponent';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <div className="p-2 hover:bg-accent">
      Hello from About!
      <TestComponent />
    </div>
  );
}
