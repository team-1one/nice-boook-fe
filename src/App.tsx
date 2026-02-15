import { useBookData } from '@/hooks/useBooks';

function App() {
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
    <section>
      {data?.map((book) => (
        <article key={book.id}>
          <h2>{book?.name}</h2>
          <p>{book?.author}</p>
        </article>
      ))}
    </section>
  );
}

export default App;
