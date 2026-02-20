import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { BackToTop, FooterNavItem, FooterNavLink } from './SubComponents';
import { footerLinks, footerHeight } from '@/constants';
import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

const Footer = () => (
  <footer className="w-full border-t">
    {/* Desktop */}
    <NavigationMenu
      viewport={false}
      className={cn(
        'hidden sm:flex ps-4 w-full justify-start gap-6 max-w-full',
        footerHeight,
      )}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/">
              <img
                src="/logo.svg"
                alt="logo"
              />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* kludge for flexing elements */}
      <div className="flex-1" />

      <NavigationMenuList className="gap-x-16">
        {footerLinks.map((link) => (
          <FooterNavItem
            key={link.label}
            {...link}
          />
        ))}
      </NavigationMenuList>

      {/* kludge for flexing elements */}
      <div className="flex-1" />

      <NavigationMenuList className="pe-4">
        <NavigationMenuItem>
          <BackToTop />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    {/* Mobile */}
    <div className="flex sm:hidden flex-col gap-y-4 px-4 py-6">
      <Link to="/">
        <img
          src="/logo.svg"
          alt="logo"
          className="py-2"
        />
      </Link>

      <nav className="flex flex-col gap-y-3">
        {footerLinks.map((link) => (
          <FooterNavLink
            key={link.label}
            {...link}
          />
        ))}
      </nav>

      <div className="flex justify-center">
        <BackToTop />
      </div>
    </div>
  </footer>
);

export default Footer;
