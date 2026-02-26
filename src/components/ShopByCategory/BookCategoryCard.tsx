import { Card, CardContent } from '@/components/ui/card';
import type { BookType } from '@/lib/schemas/book.schema';
import { CatalogSearchSchema } from '@/lib/schemas/route.schema';
import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export type Props = {
  type: BookType;
  imageUrl: string;
  count: number;
};

export const BookCategoryCard = ({ type, imageUrl, count }: Props) => {
  const { t } = useTranslation('catalog');

  return (
    <Card className="overflow-hidden border pt-0 shadow-none transition-shadow hover:border hover:shadow-lg">
      <Link
        className="block h-full"
        to={`/bookType/$bookType`}
        search={CatalogSearchSchema.parse({})}
        params={{ bookType: type }}
      >
        <img
          src={imageUrl}
          alt={type}
          className="m-0 mb-6.25 aspect-square w-full rounded-t-xl object-cover"
        />

        <CardContent>
          <h3 className="text-color-gray-primary font-sans text-lg leading-[100%] font-semibold tracking-normal capitalize">
            {t(`titles.${type}`)}
          </h3>
          <p className="text-color-gray-secondary text-muted-foreground mt-0.75 font-sans text-sm leading-5.25 font-medium tracking-normal">
            {t('totalBooks', { count })}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
};
