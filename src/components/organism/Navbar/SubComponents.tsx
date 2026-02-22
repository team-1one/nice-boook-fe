import {
  activeLinkClasses,
  navBarHeight,
  underlineClasses,
  underlinedClasses,
} from './constants';
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Link, type LinkOptions } from '@tanstack/react-router';

// Reusable underline component
const Underline = ({ children }: { children: React.ReactNode }) => (
  <div
    className={underlineClasses}
    aria-hidden
  >
    <span className="invisible">{children}</span>
  </div>
);

const UnderlineNavItem = ({
  link,
  className,
  activeProps,
  children,
}: {
  link: LinkOptions;
  className?: string;
  activeProps?: Record<string, unknown>;
  children: React.ReactNode;
}) => (
  <NavigationMenuItem className="font-bold uppercase">
    <NavigationMenuLink asChild>
      <Link
        {...link}
        className={cn(underlinedClasses, className)}
        activeProps={activeProps}
      >
        {children}
        <Underline>{children}</Underline>
      </Link>
    </NavigationMenuLink>
  </NavigationMenuItem>
);

export const TextNavItem = ({
  link,
  label,
}: {
  link: LinkOptions;
  label: string;
}) => (
  <UnderlineNavItem
    link={link}
    activeProps={{ className: cn(activeLinkClasses) }}
  >
    <span>{label}</span>
  </UnderlineNavItem>
);

export const IconButton = ({
  link,
  children,
}: {
  link: LinkOptions;
  children: React.ReactNode;
}) => (
  <UnderlineNavItem
    link={link}
    className={cn(
      'flex aspect-square items-center justify-center border-l',
      navBarHeight,
    )}
    activeProps={{ className: activeLinkClasses }}
  >
    {children}
  </UnderlineNavItem>
);
