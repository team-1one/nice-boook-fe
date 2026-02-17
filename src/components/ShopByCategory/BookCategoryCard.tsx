import { capitalize } from '@/lib/utils';
import { Link } from '@tanstack/react-router';

export type Props = {
  type: string;
  imageUrl: string;
  count: number;
};

export const BookCategoryCard = ({ type, imageUrl, count }: Props) => {
  return (
    <div className="flex-auto hover:shadow-lg transition-shadow duration-300">
      <Link to={`/`}>
        <img
          src={imageUrl}
          alt={type}
          className="m-0 w-full h-72.25 object-cover rounded-[8.13px] mb-6.25"
        />
        <h3 className="font-sans font-semibold text-[20px] text-color-gray-primary leading-[100%] tracking-normal">
          {capitalize(type)}
        </h3>
        <p className="font-sans font-medium text-[14px] text-color-gray-secondary leading-5.25 tracking-normal text-muted-foreground mt-0.75">
          {count.toLocaleString('en-US')} books
        </p>
      </Link>
    </div>
  );
};
