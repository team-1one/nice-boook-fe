import { useState, useEffect, useCallback, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import type { BookData } from '@/types/book';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string,
);

export const useBookData = (
  filename: 'audiobook.json' | 'kindle.json' | 'paperback.json',
) => {
  const [data, setData] = useState<BookData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMountedRef = useRef(false);

  const fetchBook = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const { data: blob, error } = await supabase.storage
        .from('books')
        .download(filename);

      if (error) throw new Error(error.message);
      if (!blob) throw new Error('No book data');

      const text = await blob.text();
      const bookData = JSON.parse(text) as BookData[]; //? consider using guard func instead

      if (isMountedRef.current) setData(bookData);
    } catch (err: unknown) {
      if (!isMountedRef.current) return;
      setError(err instanceof Error ? err.message : 'Failed to load book');
      setData(null);
    } finally {
      if (isMountedRef.current) setLoading(false);
    }
  }, [filename]);

  useEffect(() => {
    isMountedRef.current = true;
    fetchBook();
    return () => {
      isMountedRef.current = false;
    };
  }, [fetchBook]);

  return { data, loading, error, refetch: fetchBook };
};
