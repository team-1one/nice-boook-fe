import { ItemsOnPage } from '@/components/catalog/formItemsOnPage';
import { SortBySelect } from '@/components/catalog/formSortBySelect';
import type { SortSearchKey } from '@/types/search';

interface Props {
  sort: SortSearchKey;
  perPage: string;
  onSortChange: (value: SortSearchKey) => void;
  onItemsPerPageChange: (value: string) => void;
}

export function CatalogFilters({
  sort,
  perPage,
  onSortChange,
  onItemsPerPageChange,
}: Props) {
  return (
    <div className="flex gap-4">
      <SortBySelect
        value={sort}
        onChange={onSortChange}
      />
      <ItemsOnPage
        value={perPage}
        onChange={onItemsPerPageChange}
      />
    </div>
  );
}
