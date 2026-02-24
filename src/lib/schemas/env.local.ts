import { z } from 'zod';

const envSchema = z.object({
  VITE_SUPABASE_URL: z.url(),
  VITE_SUPABASE_PUBLISHABLE_KEY: z.string(),
});

export const { VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY } =
  envSchema.parse(import.meta.env);
