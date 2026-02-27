import { fetchBookSearchResults } from '@/api/supabase';
import { useQuery } from '@tanstack/react-query';

const NO_REFETCH_TIME = 1000 * 60 * 5; // 5 minutes

export function useBookSearch(query: string) {
  const trimmed = query.trim();

  return useQuery({
    queryKey: ['search-books', trimmed],
    queryFn: async () => await fetchBookSearchResults(trimmed),
    enabled: trimmed.length >= 2,
    staleTime: NO_REFETCH_TIME,
  });
}
