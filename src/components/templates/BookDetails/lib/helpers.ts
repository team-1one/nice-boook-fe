import type { Book } from '@/lib/schemas/book.schema';
import type { DetailItem } from './types';

function formatNullable(value: string | number | null | undefined): string {
  if (value === null || value === undefined || value === '') return 'N/A';
  return String(value);
}

export function getSummaryDetails(book: Book, isBrief = true): DetailItem[] {
  const details: DetailItem[] =
    book.type === 'audiobook' ?
      [
        { label: 'Author', value: book.author },
        { label: 'Narrator', value: book.narrator },
        {
          label: 'Listening Length',
          value: `${book.listening_length / 36e5} hours`,
        },
        { label: 'Year of Publication', value: String(book.publication_year) },
        { label: 'Publication', value: book.publication },
        { label: 'Language', value: book.lang.toUpperCase() },
      ]
    : [
        { label: 'Author', value: book.author },
        { label: 'Cover Type', value: formatNullable(book.cover_type) },
        {
          label: 'Number of Pages',
          value: formatNullable(book.number_of_pages),
        },
        { label: 'Year of Publication', value: String(book.publication_year) },
        { label: 'Publication', value: book.publication },
        { label: 'Format', value: formatNullable(book.format) },
        { label: 'Language', value: book.lang.toUpperCase() },
        { label: 'Illustrations', value: book.illustrations ? 'Yes' : 'No' },
      ];

  return isBrief ? details.slice(0, 4) : details;
}
