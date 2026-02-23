import type { Book } from '@/lib/schemas/book.schema';
import { DetailList } from './DetailList';
import { getSummaryDetails } from '../lib/helpers';
import { Separator } from '@/components/ui/separator';

type BookContentSectionsProps = {
  book: Book;
};

export function BookContentSections({ book }: BookContentSectionsProps) {
  const characteristics = getSummaryDetails(book, false);

  return (
    <section className="grid grid-cols-1 gap-16 pt-8 lg:grid-cols-2">
      <article className="max-w-prose">
        <h2 className="mb-2 text-3xl font-bold">About</h2>
        <Separator className="mb-6" />
        <p className="mb-4 font-semibold">{book.name}</p>
        {book.description.map((paragraph, index) => (
          <p
            key={index}
            className="leading-relaxed text-gray-800"
          >
            {paragraph}
          </p>
        ))}
      </article>

      <article className="flex flex-col gap-2 text-sm capitalize">
        <h2 className="mb-4 text-3xl font-bold">Characteristics</h2>
        <DetailList items={characteristics} />
      </article>
    </section>
  );
}
