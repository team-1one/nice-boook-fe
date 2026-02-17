import { z } from 'zod';

export const categorySchema = z.object({
  id: z.int(),
  name: z.string(),
});

export const BookTypeSchema = z.enum(['audiobook', 'kindle', 'paperback']);
export const BookLangSchema = z.enum(['en', 'uk']);

export type BookFormat = z.infer<typeof BookTypeSchema>;
export type BookLang = z.infer<typeof BookLangSchema>;
