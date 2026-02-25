import BrandLogoLink from '@/components/atom/BrandLogoLink';

type LogoLinkProps = {
  className?: string;
  onClick?: () => void;
};

const LogoLink = ({ className, onClick }: LogoLinkProps) => (
  <BrandLogoLink
    className={className}
    imageClassName="sm:max-w-34"
    onClick={onClick}
  />
);

export default LogoLink;
