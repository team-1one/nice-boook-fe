import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { BookCard } from '@/components/books/BookCard';
import type { Book } from '@/lib/schemas/book.schema';
import { cn } from '@/lib/utils';
import { Typography } from '@/components/ui/Typography';

interface BookSliderProps {
  books: Book[];
  title?: string;
}

export const BookSlider = ({ books, title }: BookSliderProps) => {
  return (
    <section className="mx-auto w-full max-w-270 overflow-x-visible p-0">
      <Carousel opts={{ align: 'start', loop: false }}>
        <div
          className={cn(
            'mb-6 flex items-center',
            title ? 'justify-between' : 'justify-end',
          )}
        >
          {title && <Typography variant="h2" className="mb-6">{title}</Typography>}
          <div className="flex items-center gap-2">
            <CarouselPrevious className="static translate-x-0 translate-y-0" />
            <CarouselNext className="static translate-x-0 translate-y-0" />
          </div>
        </div>

        <CarouselContent className="-ml-4">
          {books.map((book) => (
            <CarouselItem
              key={book.id}
              className="basis-3xs pl-4 sm:basis-1/3 lg:basis-1/4"
            >
              <BookCard book={book} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
