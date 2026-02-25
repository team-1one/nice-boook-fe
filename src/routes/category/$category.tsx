import { fetchBooks } from '@/api/supabase';
import { BooksPage } from '@/components/catalog/BooksPage';
import { CatalogSearchSchema } from '@/lib/schemas/route.schema';
import { sortSearchProps } from '@/types/search';
import {
  createFileRoute,
  useLoaderData,
  useNavigate,
  useParams,
  useSearch,
} from '@tanstack/react-router';

export const Route = createFileRoute('/category/$category')({
  component: RouteComponent,
  validateSearch: CatalogSearchSchema.parse,
  loaderDeps: ({ search }) => ({
    page: search.page,
    pageSize: search.pageSize,
    sortBy: search.sortBy,
    sortOrder: search.order,
  }),
  loader: async ({ params: { category }, deps }) => {
    const { sort, order } = sortSearchProps[deps.sortBy];

    const { data: books, total } = await fetchBooks({
      filterOption: 'categories',
      value: category,
      sortBy: sort,
      sortOrder: order,
      page: deps.page,
      pageSize: deps.pageSize,
    });

    return { books, total };
  },
});

function RouteComponent() {
  const { category } = useParams({ from: Route.id });
  const search = useSearch({ from: Route.id });
  const navigate = useNavigate({ from: Route.id });
  const { books, total } = useLoaderData({ from: Route.id });

  return (
    <BooksPage
      catalogKey={category}
      navigate={navigate}
      books={books}
      total={total}
      search={search}
    />
  );
}
