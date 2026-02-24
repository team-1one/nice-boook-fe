import { fetchBooks } from '@/api/supabase';
import { BooksPage } from '@/components/catalog/BooksPage';
import { BookTypeSchema } from '@/lib/schemas/book.schema';
import { catalogSearchSchema } from '@/lib/schemas/route.schema';
import { sortSearchProps } from '@/types/search';
import {
  createFileRoute,
  useLoaderData,
  useNavigate,
  useParams,
  useSearch,
} from '@tanstack/react-router';

export const Route = createFileRoute('/bookType/$bookType')({
  component: RouteComponent,
  validateSearch: catalogSearchSchema.parse,
  loaderDeps: ({ search }) => ({
    page: search.page,
    pageSize: search.pageSize,
    sortBy: search.sortBy,
    sortOrder: search.order,
  }),
  loader: async ({ params: { bookType }, deps }) => {
    const { sort, order } = sortSearchProps[deps.sortBy];

    const { data: books, total } = await fetchBooks({
      filterOption: 'type',
      value: BookTypeSchema.parse(bookType),
      sortBy: sort,
      sortOrder: order,
      page: deps.page,
      pageSize: deps.pageSize,
    });

    return { books, total };
  },
});

function RouteComponent() {
  const { bookType } = useParams({ from: Route.id });
  const search = useSearch({ from: Route.id });
  const navigate = useNavigate({ from: Route.id });
  const { books, total } = useLoaderData({ from: Route.id });

  return (
    <BooksPage
      catalogKey={bookType}
      navigate={navigate}
      books={books}
      total={total}
      search={search}
    />
  );
}
