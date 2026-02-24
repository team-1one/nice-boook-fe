import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { BookCard } from '@/components/books/BookCard';
import type { Book } from '@/lib/schemas/book.schema';

interface BookSliderProps {
  books: Book[];
  title?: string;
}

export const BookSlider = ({ books, title }: BookSliderProps) => {
  return (
    <section className="mx-auto w-full max-w-270 py-8">
      <Carousel opts={{ align: 'start', loop: false }}>
        <div className="mb-6 flex items-center justify-between">
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
              className="basis-1/2 pl-4 sm:basis-1/3 lg:basis-1/4"
            >
              <BookCard book={book} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
