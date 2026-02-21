import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import type { FooterLink } from '@/types/links';
import { Link } from '@tanstack/react-router';
import { ChevronUp } from 'lucide-react';

const linkClass =
  'uppercase text-sm font-bold text-muted-foreground hover:text-foreground transition-colors';

export const FooterNavLink = ({ to, label, external }: FooterLink) =>
  external ?
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      {label}
    </a>
  : <Link
      to={to}
      className={linkClass}
    >
      {label}
    </Link>;

export const FooterNavItem = (link: FooterLink) => (
  <NavigationMenuItem>
    <NavigationMenuLink asChild>
      <FooterNavLink {...link} />
    </NavigationMenuLink>
  </NavigationMenuItem>
);

export const BackToTop = () => (
  <button
    type="button"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="flex cursor-pointer items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
  >
    <span>Back to top</span>
    <ChevronUp className="h-4 w-4" />
  </button>
);
