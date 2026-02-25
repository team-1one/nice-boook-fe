import { navBarHeight } from '@/components/organism/Navbar/constants';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';

type BrandLogoLinkProps = {
  className?: string;
  imageClassName?: string;
  alt?: string;
  onClick?: () => void;
};

const BrandLogoLink = ({
  className,
  imageClassName,
  alt = 'Nice Book',
  onClick,
}: BrandLogoLinkProps) => (
  <Link
    to="/"
    className={cn(
      'inline-flex shrink-0 items-center justify-center',
      className,
      navBarHeight,
    )}
    onClick={onClick}
  >
    <img
      src="/logo.svg"
      alt={alt}
      className={cn('block h-8 w-auto', imageClassName)}
    />
  </Link>
);

export default BrandLogoLink;
