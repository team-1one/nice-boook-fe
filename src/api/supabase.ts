import { BOOKS } from '@/api/columns';
import { categorySchema, type BookFormat } from '@/lib/schemas/book.schema';
import {
  VITE_SUPABASE_PUBLISHABLE_KEY,
  VITE_SUPABASE_URL,
} from '@/lib/schemas/env.local';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY);

export const fetchCategories = async (): Promise<string[]> => {
  const { data, error } = await supabase.from('categories').select('name');

  if (error) throw new Error(error.message);

  const parsed = await z
    .array(categorySchema.pick({ name: true }))
    .safeParseAsync(data);

  if (!parsed.success) throw new Error(parsed.error.message);

  return parsed.data.map(({ name }) => name);
};

export const fetchBookCount = async (type?: BookFormat): Promise<number> => {
  const { count, error } = await supabase
    .from('books')
    .select('*', { count: 'exact', head: true })
    .eq(BOOKS.type, type);

  if (error) throw new Error(error.message);

  return count ?? 0;
};
