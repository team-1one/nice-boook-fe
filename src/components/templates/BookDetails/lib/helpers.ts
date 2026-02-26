import type { Book } from '@/lib/schemas/book.schema';
import type { DetailItem } from './types';
import type { TFunction } from 'i18next';

function formatNullable(value: string | number | null | undefined): string {
  if (value === null || value === undefined || value === '') return 'N/A';
  return String(value);
}

export function getSummaryDetails(
  book: Book,
  t: TFunction<['book']>,
  isBrief = true,
): DetailItem[] {
  const fromMsToHours = (ms: number) => ms / 36e5;

  const details: DetailItem[] =
    book.type === 'audiobook' ?
      [
        { label: t('details.author'), value: book.author },
        { label: t('details.narrator'), value: book.narrator },
        {
          label: t('details.listeningLength'),
          value: t('details.listeningLengthValue', {
            hours: fromMsToHours(book.listening_length).toFixed(1),
          }),
        },
        {
          label: t('details.publicationYear'),
          value: String(book.publication_year),
        },
        { label: t('details.publication'), value: book.publication },
        { label: t('details.language'), value: book.lang.toUpperCase() },
      ]
    : [
        { label: t('details.author'), value: book.author },
        {
          label: t('details.coverType'),
          value: formatNullable(book.cover_type),
        },
        {
          label: t('details.numberOfPages'),
          value: formatNullable(book.number_of_pages),
        },
        {
          label: t('details.publicationYear'),
          value: String(book.publication_year),
        },
        { label: t('details.publication'), value: book.publication },
        { label: t('details.format'), value: formatNullable(book.format) },
        { label: t('details.language'), value: book.lang.toUpperCase() },
        {
          label: t('details.illustrations'),
          value: book.illustrations ? t('details.yes') : t('details.no'),
        },
      ];

  return isBrief ? details.slice(0, 4) : details;
}
