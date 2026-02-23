import { useNavigate } from '@tanstack/react-router';

export function useUpdateSearch() {
  const navigate = useNavigate();

  const updateSearch = (newParams: Record<string, string | undefined>) => {
    navigate({
      to: '.',
      search: (prev) => ({
        ...prev,
        ...newParams,
      }),
    });
  };

  return updateSearch;
}