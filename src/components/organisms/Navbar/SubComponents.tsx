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
import { Link } from '@tanstack/react-router';

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
  to,
  className,
  activeProps,
  children,
}: {
  to: string;
  className?: string;
  activeProps?: Record<string, unknown>;
  children: React.ReactNode;
}) => (
  <NavigationMenuItem className="uppercase font-bold">
    <NavigationMenuLink asChild>
      <Link
        to={to}
        className={cn(underlinedClasses, className)}
        activeProps={activeProps}
      >
        {children}
        <Underline>{children}</Underline>
      </Link>
    </NavigationMenuLink>
  </NavigationMenuItem>
);

export const TextNavItem = ({ to, label }: { to: string; label: string }) => (
  <UnderlineNavItem
    to={to}
    activeProps={{ className: cn(activeLinkClasses) }}
  >
    <span>{label}</span>
  </UnderlineNavItem>
);

export const IconButton = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <UnderlineNavItem
    to={to}
    className={cn(
      'border-l flex justify-center items-center aspect-square',
      navBarHeight,
    )}
    activeProps={{ className: activeLinkClasses }}
  >
    {children}
  </UnderlineNavItem>
);
