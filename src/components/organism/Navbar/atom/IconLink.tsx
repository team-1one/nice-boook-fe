import { type ReactNode } from 'react';
import { actionCellClasses } from '@/components/organism/Navbar/constants';
import UnderlinedLink from '@/components/organism/Navbar/molecule/UnderlinedLink';
import { cn } from '@/lib/utils';
import { type LinkOptions } from '@tanstack/react-router';

interface IconLinkProps {
  link: LinkOptions;
  ariaLabel: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

const IconLink = ({
  link,
  ariaLabel,
  className,
  onClick,
  children,
}: IconLinkProps) => (
  <UnderlinedLink
    link={link}
    onClick={onClick}
    ariaLabel={ariaLabel}
    className={cn(actionCellClasses, className)}
    activeClassName="text-foreground"
  >
    {children}
  </UnderlinedLink>
);

export default IconLink;
