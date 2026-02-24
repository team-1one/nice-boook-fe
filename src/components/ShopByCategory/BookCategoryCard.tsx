import type { BookType } from '@/lib/schemas/book.schema';
import { Link } from '@tanstack/react-router';

export type Props = {
  type: BookType;
  imageUrl: string;
  count: number;
};

export const BookCategoryCard = ({ type, imageUrl, count }: Props) => {
  return (
    <div className="flex-auto transition-shadow duration-300 hover:shadow-lg">
      <Link
        to={`/bookType/$bookType`}
        search={{ sortBy: 'newest', order: 'desc', page: 1, pageSize: 16 }}
        params={{ bookType: type }}
      >
        <img
          src={imageUrl}
          alt={type}
          className="m-0 mb-6.25 h-72.25 w-full rounded-[8.13px] object-cover"
        />
        <h3 className="text-color-gray-primary font-sans text-[20px] leading-[100%] font-semibold tracking-normal capitalize">
          {type}
        </h3>
        <p className="text-color-gray-secondary text-muted-foreground mt-0.75 font-sans text-[14px] leading-5.25 font-medium tracking-normal">
          {count.toLocaleString('en-US')} books
        </p>
      </Link>
    </div>
  );
};
