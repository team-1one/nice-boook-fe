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
import { DeveloperSchema, type Developer } from '@/lib/schemas/contact.schema';
import { BannerSchema } from '@/lib/schemas/banner.schema';
import { TABLES, type BookFetchType } from '@/lib/types';
import { createClient } from '@supabase/supabase-js';
import type { BannerData } from '@/types/banner';
import type { Database } from '@/types/supabase';
import { z } from 'zod';

const supabase = createClient<Database>(
  VITE_SUPABASE_URL,
  VITE_SUPABASE_PUBLISHABLE_KEY,
);

/**
 * Separates internal diagnostic details from a safe, generic user-facing message.
 * Use `message` for logging/monitoring; use `userMessage` for UI display.
 */
export class AppError extends Error {
  readonly userMessage: string;

  constructor(context: string, userMessage: string, cause?: Error) {
    super(`[${context}] ${cause?.message ?? userMessage}`);
    this.name = 'AppError';
    this.userMessage = userMessage;
    this.cause = cause;
  }
}

export function getImageUrl(path: string) {
  return supabase.storage.from('books').getPublicUrl(path).data.publicUrl;
}

export const fetchCategories = async (): Promise<string[]> => {
  const { data, error } = await supabase.from(TABLES.categories).select('name');

  if (error) {
    throw new AppError(
      'fetchCategories',
      'Failed to load categories. Please try again.',
      error,
    );
  }

  const parsed = await z
    .array(categorySchema.pick({ name: true }))
    .safeParseAsync(data);

  if (!parsed.success) {
    throw new AppError(
      'fetchCategories.parse',
      'Failed to load categories. Please try again.',
      new Error(parsed.error.message),
    );
  }

  return parsed.data.map(({ name }) => name);
};

export const fetchBookCount = async (type: BookType): Promise<number> => {
  const colName: BookFields = 'type';
  const { count, error } = await supabase
    .from(TABLES.booksFlat)
    .select('*', { count: 'exact', head: true })
    .eq(colName, type);

  if (error) {
    throw new AppError(
      `fetchBookCount(${type})`,
      'Failed to load book count. Please try again.',
      error,
    );
  }

  return count ?? 0;
};

export const fetchBookBySlug = async (id: string): Promise<Book> => {
  const colName: BookFields = 'slug';
  const { data, error } = await supabase
    .from(TABLES.booksFlat)
    .select('*')
    .eq(colName, id)
    .single();

  if (error) {
    throw new AppError(
      'fetchBookBySlug',
      'Failed to load book. Please try again.',
      error,
    );
  }

  const parsed = BookSchema.safeParse(data);

  if (!parsed.success) {
    throw new AppError(
      'fetchBookBySlug.parse',
      'Failed to load book. Please try again.',
      new Error(parsed.error.message),
    );
  }

  return parsed.data;
};

export const fetchBooksByEdition = async (
  namespaceId: string,
  bookType: BookType,
): Promise<Book[]> => {
  const idColumn: BookFields = 'namespace_id';
  const typeColumn: BookFields = 'type';

  const { data, error } = await supabase
    .from(TABLES.booksFlat)
    .select('*')
    .eq(idColumn, namespaceId)
    .eq(typeColumn, bookType);

  if (error) {
    throw new AppError(
      'fetchBooksByEdition',
      'Failed to load book editions. Please try again.',
      error,
    );
  }

  const parsed = z.array(BookSchema).safeParse(data);

  if (!parsed.success) {
    throw new AppError(
      'fetchBooksByEdition.parse',
      'Failed to load book editions. Please try again.',
      new Error(parsed.error.message),
    );
  }

  return parsed.data;
};

/**
 * Fetches banners from the database, validates them against the BannerSchema, and returns an array of BannerData.
 * @returns {Promise<BannerData[]>} An array of validated banner data.
 */
export const getBanners = async (): Promise<BannerData[]> => {
  const { data, error } = await supabase.from(TABLES.banners).select('*');

  if (error) {
    throw new AppError(
      'getBanners',
      'Failed to load banners. Please try again.',
      error,
    );
  }

  const parsed = z.array(BannerSchema).safeParse(data);

  if (!parsed.success) {
    throw new AppError(
      'getBanners.parse',
      'Failed to load banners. Please try again.',
      new Error(parsed.error.message),
    );
  }

  return parsed.data;
};

const parseBooks = (data: unknown, context: string): Book[] => {
  const parsed = z.array(BookSchema).safeParse(data);

  if (!parsed.success) {
    throw new AppError(
      context,
      'Failed to load books. Please try again.',
      new Error(parsed.error.message),
    );
  }

  return parsed.data;
};

const bookFetchers: Record<BookFetchType, (limit: number) => Promise<Book[]>> =
  {
    new: async (limit) => {
      const { data, error } = await supabase
        .from(TABLES.booksFlat)
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) {
        throw new AppError(
          'bookFetchers.new',
          'Failed to load new books. Please try again.',
          error,
        );
      }

      return parseBooks(data, 'bookFetchers.new.parse');
    },

    random: async (limit) => {
      const { data, error } = await supabase.rpc('get_random_books', {
        limit_count: limit,
      });

      if (error) {
        throw new AppError(
          'bookFetchers.random',
          'Failed to load book suggestions. Please try again.',
          error,
        );
      }

      return parseBooks(data, 'bookFetchers.random.parse');
    },
  };

/**
 * Fetches books based on the specified type ('new' or 'random') and limit.
 * @param type The type of books to fetch ('new' for latest books, 'random' for random selection).
 * @param limit The maximum number of books to fetch (default is 8).
 * @returns {Promise<Book[]>} An array of books matching the specified criteria.
 */
export const getBooks = (type: BookFetchType, limit = 8): Promise<Book[]> => {
  return bookFetchers[type](limit);
};

type FetchBookBaseArgs = {
  sortBy: BookFields;
  sortOrder: 'asc' | 'desc';
  page: number;
  pageSize: number;
};

// Discriminated union ensures `value` is narrowed to `BookType` when filtering by 'type'
type FetchBookArgs =
  | (FetchBookBaseArgs & { filterOption: 'categories'; value: string })
  | (FetchBookBaseArgs & { filterOption: 'type'; value: BookType });

export const fetchBooks = async ({
  filterOption,
  value,
  sortBy,
  sortOrder,
  page,
  pageSize,
}: FetchBookArgs) => {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const getBaseQuery = () =>
    supabase.from(TABLES.booksFlat).select('*', { count: 'exact' });

  const scenario = {
    categories: () =>
      getBaseQuery()
        .contains('categories', [value])
        .order(sortBy, { ascending: sortOrder === 'asc' })
        .range(from, to),

    type: () =>
      getBaseQuery()
        // Narrowing lost after destructuring a discriminated union — assertion is safe
        .eq('type', value as BookType)
        .order(sortBy, { ascending: sortOrder === 'asc' })
        .range(from, to),
  };

  const { data, count, error } = await scenario[filterOption]();

  if (error) {
    throw new AppError(
      `fetchBooks(${filterOption}=${value})`,
      'Failed to load books. Please try again.',
      error,
    );
  }

  const parsed = await z.array(BookSchema).safeParseAsync(data);

  if (!parsed.success) {
    throw new AppError(
      `fetchBooks.parse(${filterOption}=${value})`,
      'Failed to process book data. Please try again.',
      new Error(parsed.error.message),
    );
  }

  return { data: parsed.data, total: count ?? 0 };
};

export const fetchContacts = async (): Promise<Developer[]> => {
  const { data, error } = await supabase.from(TABLES.contacts).select('*');

  if (error) {
    throw new AppError(
      'fetchContacts',
      'Failed to load contacts. Please try again.',
      error,
    );
  }

  const parsed = z.array(DeveloperSchema).safeParse(data);

  if (!parsed.success) {
    throw new AppError(
      'fetchContacts.parse',
      'Failed to load contacts. Please try again.',
      new Error(parsed.error.message),
    );
  }

  return parsed.data;
};

export const fetchBookSearchResults = async (
  query: string,
): Promise<Book[]> => {
  const { data, error } = await supabase
    .from(TABLES.booksFlat)
    .select('*')
    .or(`name.ilike.%${query}%,author.ilike.%${query}%`)
    .limit(10);

  if (error) {
    throw new AppError(
      'fetchBookSearchResults',
      'Failed to search books. Please try again.',
      error,
    );
  }

  const {
    data: parsedData,
    success,
    error: parsedErr,
  } = await z.array(BookSchema).safeParseAsync(data);

  if (!success) {
    throw new AppError(
      'fetchBookSearchResults.parse',
      'Failed to process book data. Please try again.',
      new Error(parsedErr.message),
    );
  }

  return parsedData;
};
