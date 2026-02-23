import { ebookFrame } from '@/constants/ui/books';
import type { BookData } from '@/types/book';
import { Headphones } from 'lucide-react';

interface BookImageProps {
  book: BookData;
}

// This component is used only here 'cause it's only required here
// So there is no need to extract it to a separate file
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
    className={`w-full h-full ${objectFitClass[objectFit]}`}
  />
);

// TODO: We can create some badge atom for this kind of divs
const AudioBookBadge = () => (
  <div className="absolute top-1 right-4 bg-green-500 rounded-full p-1 size-10 flex items-center justify-center">
    <Headphones
      color="#fff"
      size={18}
    />
  </div>
);

const BookImage = ({ book }: BookImageProps) => {
  const isEbook = book.type === 'kindle' || book.type === 'audiobook';
  const isAudioBook = book.type === 'audiobook';

  // FIXME: Remove these consts, they must be in props
  const bookImageUrl = 'https://placehold.co/320x320';
  const imgProps = { src: bookImageUrl, alt: book.name };

  return (
    <div className="relative overflow-hidden shrink-0">
      <div className="w-full aspect-square relative bg-gray-50">
        {isEbook ?
          <>
            <div className="absolute inset-[9%] inset-x-[14%] flex items-center justify-center overflow-hidden">
              <Img
                {...imgProps}
                objectFit="cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Img
                src={ebookFrame}
                alt="Ebook Frame"
                objectFit="contain"
              />
            </div>
          </>
        : <div className="flex items-center justify-center w-full h-full">
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
