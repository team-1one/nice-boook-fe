import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { useState } from 'react';

type BookImageGalleryProps = {
  images: string[];
  title: string;
};

const MAIN_IMG_RATIO = 1.5;

export function BookImageGallery({ images, title }: BookImageGalleryProps) {
  const [selectedImageId, setSelectedImageId] = useState(0);
  const selectedImage = images[selectedImageId] ?? images[0];

  return (
    <div className="flex flex-col gap-4 md:flex-row-reverse">
      <AspectRatio
        ratio={MAIN_IMG_RATIO}
        className="flex-1 rounded-lg border bg-white p-2 shadow-sm"
      >
        <img
          src={selectedImage}
          alt={title}
          className="h-full w-full rounded object-contain object-center"
        />
      </AspectRatio>

      <ScrollArea className="w-full overflow-x-auto md:h-auto md:max-h-130 md:w-28 md:overflow-y-auto">
        <div className="flex w-max gap-3 md:w-full md:flex-col">
          {images.map((img, index) => (
            <button
              key={img}
              type="button"
              onClick={() => setSelectedImageId(index)}
              className={cn(
                'h-20 w-16 shrink-0 overflow-hidden rounded-md border-2',
                selectedImage === img ? 'border-black' : (
                  'border-transparent hover:border-gray-300'
                ),
              )}
            >
              <img
                src={img}
                alt={`${title} preview ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
        <ScrollBar
          orientation="horizontal"
          className="md:hidden"
        />
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
}
