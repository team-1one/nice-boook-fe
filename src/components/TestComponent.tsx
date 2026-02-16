import { Button } from '@/components/ui/button';
import { AccessibilityIcon } from 'lucide-react';
import { useBookData } from '@/hooks/useBooks';

const TestComponent = () => {
  const { data, loading, error, refetch } = useBookData('kindle.json');

  if (loading) return <p>Loading…</p>;
  if (error)
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={refetch}>Retry</button>
      </div>
    );

  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>
          <AccessibilityIcon /> Click me
        </Button>
      </div>
      <section>
        {data?.map((book) => (
          <article key={book.id}>
            <h2>{book?.name}</h2>
            <p>{book?.author}</p>
          </article>
        ))}
      </section>
    </>
  );
};

export default TestComponent;
