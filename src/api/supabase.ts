import {
  categorySchema,
  type BookType,
  type BookFields,
  type Book,
  BookSchema,
} from '@/lib/schemas/book.schema';
import {
  VITE_SUPABASE_PUBLISHABLE_KEY,
  VITE_SUPABASE_URL,
} from '@/lib/schemas/env.local';
import { TABLES } from '@/lib/types';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

export const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY);
supabase.storage.from('books');

export function getImageUrl(path: string) {
  return supabase.storage.from('books').getPublicUrl(path).data.publicUrl;
}

export const fetchCategories = async (): Promise<string[]> => {
  const { data, error } = await supabase.from(TABLES.categories).select('name');

  if (error) throw new Error(error.message);

  const parsed = await z
    .array(categorySchema.pick({ name: true }))
    .safeParseAsync(data);

  if (!parsed.success) throw new Error(parsed.error.message);

  return parsed.data.map(({ name }) => name);
};

export const fetchBookCount = async (type: BookType): Promise<number> => {
  const colName: BookFields = 'type';
  const { count, error } = await supabase
    .from(TABLES.booksFlat)
    .select('*', { count: 'exact', head: true })
    .eq(colName, type);

  if (error) throw new Error(error.message);

  return count ?? 0;
};

export const fetchBookBySlug = async (id: string): Promise<Book> => {
  const colName: BookFields = 'slug';
  const { data, error } = await supabase
    .from(TABLES.booksFlat)
    .select('*')
    .eq(colName, id)
    .single();

  if (error) throw new Error(error.message);

  const parsed = BookSchema.safeParse(data);

  if (!parsed.success) throw new Error(parsed.error.message);

  return parsed.data;
};

export const fetchBooksByEdition = async (
  id: string,
  bookType: BookType,
): Promise<Book[]> => {
  const idColumn: BookFields = 'namespace_id';
  const typeColumn: BookFields = 'type';

  const { data, error } = await supabase
    .from(TABLES.booksFlat)
    .select('*')
    .eq(idColumn, id)
    .eq(typeColumn, bookType);

  if (error) throw new Error(error.message);

  const parsed = z.array(BookSchema).safeParse(data);

  if (!parsed.success) throw new Error(parsed.error.message);
  console.log(data);
  return parsed.data;
};
