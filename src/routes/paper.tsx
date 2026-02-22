import { PaperPage } from '@/components/catalog/PaperPage';
import type { SortOption } from '@/components/catalog/typeOfSortOption';
import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/paper')({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      sort: (search.sort as SortOption) || undefined,
      perPage: (search.perPage as string) || '16',
      page: (search.page as string) || '1',
    };
  },
  component: PaperPage,
});