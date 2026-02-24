import { CatalogFilters } from '@/components/catalog/molecules/CatalogFilters';
import { Typography } from '@/components/ui/Typography';
import type { SortSearchKey } from '@/types/search';

interface Props {
  title: string;
  total: number;
  sort: SortSearchKey;
  perPage: string;
  onSortChange: (value: SortSearchKey) => void;
  onItemsPerPageChange: (value: string) => void;
}

export function CatalogHeader({
  title,
  total,
  sort,
  perPage,
  onSortChange,
  onItemsPerPageChange,
}: Props) {
  return (
    <section className="mt-8 mb-6 sm:mt-16">
      <Typography
        variant="h1"
        className="mb-2"
      >
        {title}
      </Typography>

      <Typography
        variant="body"
        color="secondary"
        className="mb-10"
      >
        {total} books
      </Typography>

      <CatalogFilters
        sort={sort}
        perPage={perPage}
        onSortChange={onSortChange}
        onItemsPerPageChange={onItemsPerPageChange}
      />
    </section>
  );
}
