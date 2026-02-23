import { getImageUrl } from '@/api/supabase';
import { z } from 'zod';

export const categorySchema = z.object({
  id: z.int(),
  name: z.string(),
});

export const BookTypeSchema = z.enum(['audiobook', 'kindle', 'paperback']);
export const BookLangSchema = z.enum(['en', 'uk']);

export type BookType = z.infer<typeof BookTypeSchema>;
export type BookLang = z.infer<typeof BookLangSchema>;

export const BaseBookSchema = z.object({
  id: z.uuid(),
  source_id: z.string(),
  type: BookTypeSchema,
  namespace_id: z.string(),
  name: z.string(),
  slug: z.string(),
  author: z.string(),
  lang: BookLangSchema,
  lang_available: z.array(BookLangSchema),
  price_regular: z.number().nonnegative(),
  price_discount: z.number().nonnegative().nullable(),
  publication: z.string(),
  publication_year: z.int(),
  description: z.array(z.string()),
  images: z.array(z.string()).transform((paths) => paths.map(getImageUrl)),
  categories: z.array(z.string()),
});

export const AudiobookSchema = BaseBookSchema.extend({
  narrator: z.string(),
  listening_length: z.int().positive(),
});

export const ReadableBookSchema = BaseBookSchema.extend({
  number_of_pages: z.number().int().positive().nullable(),
  cover_type: z.string().nullable(),
  format: z.string().nullable(),
  illustrations: z.boolean(),
});

export const BookSchema = z.discriminatedUnion('type', [
  AudiobookSchema.extend({ type: z.literal('audiobook') }),
  ReadableBookSchema.extend({ type: z.literal('kindle') }),
  ReadableBookSchema.extend({ type: z.literal('paperback') }),
]);

export type Book = z.infer<typeof BookSchema>;
export type BookFields = keyof Book;
