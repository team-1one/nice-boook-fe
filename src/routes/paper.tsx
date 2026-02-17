import { CatalogGrid } from '@/components/catalog/CatalogGrid';
import { ItemsOnPage } from '@/components/catalog/formItemsOnPage';
import { SortBySelect } from '@/components/catalog/formSortBySelect';
import { useBookData } from '@/hooks/useBooks';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/paper')({
  component: RouteComponent,
});

export function RouteComponent() {
  const {data: books} = useBookData('paperback.json');

  // const [sortOption, setSortOption] = useState<SortOption>(SortOption.Newest);

  return (
    <main className="my-16 mx-38">
      <section>
        <h1>Paper books</h1>
        <p>Book counter: {books?.length ?? 0}</p>

        <article>
          <div className="flex gap-4 mt-10 mb-6">
            <SortBySelect />
            <ItemsOnPage />
          </div>
        </article>
      </section>
        <CatalogGrid books={books ?? []} />
      <section>
        
      </section>

    </main>
  );
}
