import { activeLinkClasses, underlineEffectClasses } from '../constants';
import { cn } from '@/lib/utils';
import { Link, type LinkOptions } from '@tanstack/react-router';
import type { ReactNode } from 'react';

type UnderlinedLinkProps = {
  link: LinkOptions;
  className?: string;
  activeClassName?: string;
  ariaLabel?: string;
  onClick?: () => void;
  children: ReactNode;
};

interface UnderlineProps {
  children: ReactNode;
}

const Underline = ({ children }: UnderlineProps) => (
  <div
    className={underlineEffectClasses}
    data-nav-underline
    aria-hidden
  >
    <span className="invisible">{children}</span>
  </div>
);

const UnderlinedLink = ({
  link,
  className,
  activeClassName,
  ariaLabel,
  onClick,
  children,
}: UnderlinedLinkProps) => (
  <Link
    {...link}
    aria-label={ariaLabel}
    onClick={onClick}
    className={cn('group/item relative', className)}
    activeProps={{ className: cn(activeLinkClasses, activeClassName) }}
  >
    {children}
    <Underline>{children}</Underline>
  </Link>
);

export default UnderlinedLink;
