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

export const IconButton = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <NavigationMenuItem>
    <NavigationMenuLink asChild>
      <Link
        to={to}
        className={cn(
          'border-l flex justify-center items-center aspect-square',
          navBarHeight,
        )}
      >
        {children}
      </Link>
    </NavigationMenuLink>
  </NavigationMenuItem>
);

export const TextNavItem = ({
  to,
  label,
  exact,
}: {
  to: string;
  label: string;
  exact?: boolean;
}) => (
  <NavigationMenuItem className="uppercase font-bold">
    <NavigationMenuLink asChild>
      <Link
        to={to}
        activeOptions={{ exact: !!exact }}
        className={underlinedClasses}
        activeProps={{ className: cn(underlinedClasses, activeLinkClasses) }}
      >
        <span>{label}</span>
        <div
          className={underlineClasses}
          aria-hidden
        >
          <span className="invisible">{label}</span>
        </div>
      </Link>
    </NavigationMenuLink>
  </NavigationMenuItem>
);
