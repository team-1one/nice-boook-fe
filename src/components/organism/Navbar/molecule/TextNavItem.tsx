import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { navBarHeight } from '../constants';
import { cn } from '@/lib/utils';
import { type LinkOptions } from '@tanstack/react-router';
import UnderlinedLink from './UnderlinedLink';
import type { ReactNode } from 'react';

const underlinedItemClasses = cn(
  navBarHeight,
  'text-muted-foreground hover:text-foreground  inline-flex items-center justify-center px-3 font-bold uppercase transition-colors lg:px-5',
);

type UnderlineNavItemProps = {
  link: LinkOptions;
  className?: string;
  activeClassName?: string;
  children: ReactNode;
};

const UnderlineNavItem = ({
  link,
  className,
  activeClassName,
  children,
}: UnderlineNavItemProps) => (
  <NavigationMenuLink asChild>
    <UnderlinedLink
      link={link}
      className={cn(underlinedItemClasses, className)}
      activeClassName={activeClassName}
    >
      {children}
    </UnderlinedLink>
  </NavigationMenuLink>
);

interface TextNavItemProps {
  link: LinkOptions;
  label: string;
}

const TextNavItem = ({ link, label }: TextNavItemProps) => (
  <UnderlineNavItem
    link={link}
    activeClassName="!text-foreground"
  >
    <span>{label}</span>
  </UnderlineNavItem>
);

export default TextNavItem;
