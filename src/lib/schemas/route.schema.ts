import { CATALOG_LIMITS } from '@/components/catalog/constants/catalog';
import { SORT_SEARCH_KEYS } from '@/types/search';
import { z } from 'zod';

export const catalogSearchSchema = z.object({
  page: z
    .int()
    .min(CATALOG_LIMITS.DEFAULT_PAGE)
    .default(CATALOG_LIMITS.DEFAULT_PAGE),
  pageSize: z.int().default(CATALOG_LIMITS.DEFAULT_PER_PAGE),
  sortBy: z.enum(SORT_SEARCH_KEYS).default('newest'),
  order: z.literal('asc').or(z.literal('desc')).default('desc'),
});

export type CatalogSearch = z.infer<typeof catalogSearchSchema>;
