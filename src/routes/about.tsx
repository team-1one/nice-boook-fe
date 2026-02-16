import TestComponent from '@/components/TestComponent';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      Hello from About!
      <div className="w-32 h-32 bg-blue-500 hover:bg-green-500 rounded-lg shadow-lg">
        Tailwind works!
      </div>
      <TestComponent />
    </div>
  );
}
