import { useNavigate } from '@tanstack/react-router';

export function useUpdateSearch() {
  const navigate = useNavigate();

  const updateSearch = (newParams: Record<string, string | undefined>) => {
    navigate({
      to: '.',
      search: (prev) => {
        const next = { ...prev, ...newParams } as Record<string, string | undefined>;
        
        Object.keys(next).forEach((key) => {
          if (next[key] === '' || next[key] === undefined) {
            delete next[key];
          }
        });
        
        return next;
      },
    });
  };

  return updateSearch;
}