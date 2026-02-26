import { BookContentSections } from '@/components/templates/BookDetails/molecule/BookContentSections';
import { BookHeader } from '@/components/templates/BookDetails/organism/BookHeader';
import { BookImageGallery } from '@/components/templates/BookDetails/organism/BookImageGallery';
import { BookPurchasePanel } from '@/components/templates/BookDetails/organism/BookPurchasePanel';
import type { BreadcrumbLinkItem } from '@/components/templates/BookDetails/lib/types';
import { pickRandom } from '@/lib/utils';
import { Route as BookRoute } from '@/routes/$bookSlug';
import { useLoaderData } from '@tanstack/react-router';
import { useState } from 'react';
import { BookSlider } from '@/components/organisms/Books/BookSlider';
import { useTranslation } from 'react-i18next';

const BookDetails = () => {
  const { t } = useTranslation('nav');

  const { book, editions, mightLikeBooks } = useLoaderData({
    from: BookRoute.id,
  });
  const [randomCategory] = useState(pickRandom(book.categories));

  const breadcrumbs: BreadcrumbLinkItem[] = [
    {
      label: book.type,
      to: '/bookType/$bookType',
      params: { bookType: book.type },
    },
    {
      label: randomCategory,
      to: '/category/$category',
      params: { category: randomCategory },
    },
  ];

  return (
    <article className="mx-auto flex w-full max-w-full flex-col gap-16 overflow-x-hidden px-4 py-6 md:px-6 lg:px-8">
      <BookHeader
        title={book.name}
        author={book.author}
        breadcrumbs={breadcrumbs}
      />

      <main className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <BookImageGallery
          images={book.images}
          title={book.name}
        />

        <BookPurchasePanel
          book={book}
          editions={editions}
          category={randomCategory}
        />
      </main>

      <BookContentSections book={book} />

      <BookSlider
        books={mightLikeBooks}
        title={t('mightLike')}
      />
    </article>
  );
};

export default BookDetails;
