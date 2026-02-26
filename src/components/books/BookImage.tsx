import { ebookFrame, ebookFrameViewportClass } from '@/constants/ui/books';
import type { Book } from '@/lib/schemas/book.schema';
import { cn } from '@/lib/utils';
import { Headphones } from 'lucide-react';

interface BookImageProps {
  book: Book;
}

const objectFitClass = {
  cover: 'object-cover',
  contain: 'object-contain',
} as const;

const Img = ({
  src,
  alt,
  objectFit,
}: {
  src: string;
  alt: string;
  objectFit: keyof typeof objectFitClass;
}) => (
  <img
    src={src}
    alt={alt}
    className={cn('h-full w-full', objectFitClass[objectFit])}
  />
);

// TODO: We can create some badge atom for this kind of divs
const AudioBookBadge = () => (
  <div className="absolute top-1 right-4 z-10 flex size-10 items-center justify-center rounded-full bg-green-500 p-1">
    <Headphones
      color="#fff"
      size={18}
    />
  </div>
);

const BookImage = ({ book }: BookImageProps) => {
  const isAudioBook = book.type === 'audiobook';
  const isEbook = isAudioBook || book.type === 'kindle';

  const imgProps = { src: book.images[0], alt: book.name };

  return (
    <div className="relative shrink-0 overflow-hidden">
      <div className="relative aspect-square w-full bg-gray-50">
        {isEbook ?
          <>
            <div className={cn(ebookFrameViewportClass, 'z-0 origin-center')}>
              <Img
                {...imgProps}
                objectFit="cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 z-10">
              <Img
                src={ebookFrame}
                alt="Ebook Frame"
                objectFit="contain"
              />
            </div>
          </>
        : <div className="flex h-full w-full items-center justify-center">
            <Img
              {...imgProps}
              objectFit="contain"
            />
          </div>
        }
      </div>

      {isAudioBook && <AudioBookBadge />}
    </div>
  );
};

export default BookImage;
