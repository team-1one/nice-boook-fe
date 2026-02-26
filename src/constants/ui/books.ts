import { cn } from '@/lib/utils';

const ebookFrame =
  'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/audiobook/2.webp';

const ebookFrameViewportClass = cn(
  'inset-y-[8%] inset-x-[17%] absolute overflow-hidden rounded-l',
);

export { ebookFrame, ebookFrameViewportClass };
