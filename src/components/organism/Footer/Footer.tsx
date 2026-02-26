import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import BrandLogoLink from '@/components/atom/BrandLogoLink';
import { BackToTop, FooterNavItem, FooterNavLink } from './SubComponents';
import { footerLinks, footerHeight } from '@/constants';
import { cn } from '@/lib/utils';

const Footer = () => (
  <footer className="w-full border-t mt-8">
    {/* Desktop */}
    <NavigationMenu
      viewport={false}
      className={cn(
        'hidden w-full max-w-full items-center justify-between ps-4 sm:flex',
        footerHeight,
      )}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="h-full p-0"
          >
            <BrandLogoLink className="h-full px-2" />
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList className="gap-x-16">
        {footerLinks.map((link) => (
          <FooterNavItem
            key={link.label}
            {...link}
          />
        ))}
      </NavigationMenuList>

      <NavigationMenuList className="pe-4">
        <NavigationMenuItem>
          <BackToTop />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    {/* Mobile */}
    <div className="flex flex-col gap-y-4 px-4 py-6 sm:hidden">
      <BrandLogoLink className="py-2" />

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
