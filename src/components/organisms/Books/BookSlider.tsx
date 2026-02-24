import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { BookCard } from '@/components/books/BookCard';
import type { BookData } from '@/types/book';

interface BookSliderProps {
  books: BookData[];
  title?: string;
}

export const BookSlider = ({ books, title }: BookSliderProps) => {
  return (
    <section className="w-full max-w-270 mx-auto py-8">
      <Carousel opts={{ align: 'start', loop: false }}>
        <div className="flex items-center justify-between mb-6">
          {title && <h2 className="text-2xl font-bold">{title}</h2>}
          <div className="flex items-center gap-2">
            <CarouselPrevious className="static translate-x-0 translate-y-0" />
            <CarouselNext className="static translate-x-0 translate-y-0" />
          </div>
        </div>

        <CarouselContent className="-ml-4">
          {books.map((book) => (
            <CarouselItem
              key={book.id}
              className="pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/4"
            >
              <BookCard product={book} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
