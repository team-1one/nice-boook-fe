import { getImageUrl } from '@/api/supabase';
import { z } from 'zod';

const baseLinkedinUrl = 'https://www.linkedin.com/in/';
const baseGithubUrl = 'https://github.com/';

export const DeveloperSchema = z.object({
  id: z.number(),
  name: z.string(),
  surname: z.string(),
  role: z.string(),
  contributions: z.array(z.string()),
  linkedin: z
    .string()
    .nullable()
    .transform((url) => (url ? `${baseLinkedinUrl}${url}` : null)),
  github: z
    .string()
    .nullable()
    .transform((url) => (url ? `${baseGithubUrl}${url}` : null)),
  tagline: z.string().nullable(),
  avatar_url: z
    .string()
    .nullable()
    .transform((url) => (url ? getImageUrl(url) : null)),
  created_at: z.string(),
});

export type Developer = z.infer<typeof DeveloperSchema>;
