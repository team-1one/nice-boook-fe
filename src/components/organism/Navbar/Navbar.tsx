import { navbarIconItems, navBarHeight } from './constants';
import {
  CategoriesDropdown,
  LogoLink,
  SearchInputControl,
  TextNavItems,
  IconLink,
  SearchbarMenu,
} from './atom';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { rootRouteId, useLoaderData } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import BurgerMenu from '@/components/organism/Navbar/BurgerMenu';

const Navbar = () => {
  const sortedCategories = [...useLoaderData({ from: rootRouteId })].sort(
    (prev, next) => prev.localeCompare(next),
  );

  return (
    <header className="bg-background/80 sticky top-0 z-50 mb-3 w-full border-b backdrop-blur-md">
      <div className={cn('flex items-stretch sm:hidden', navBarHeight)}>
        <div className="flex flex-1 items-center px-5">
          <LogoLink />
        </div>
        <BurgerMenu sortedCategories={sortedCategories} />
      </div>

      <NavigationMenu
        viewport={false}
        className={cn(
          'hidden w-full max-w-full justify-start sm:flex [&>div]:w-full',
          navBarHeight,
        )}
      >
        <NavigationMenuList className="w-full min-w-0 justify-between gap-0">
          <NavigationMenuItem className="shrink-0">
            <NavigationMenuLink
              asChild
              className="p-0"
            >
              <LogoLink className="hidden h-full px-4 sm:inline-flex sm:pr-2 lg:px-6" />
            </NavigationMenuLink>
          </NavigationMenuItem>

          <TextNavItems />

          <NavigationMenuItem className="ml-auto hidden min-w-0 flex-1 items-center px-3 lg:flex lg:justify-end-safe">
            <SearchInputControl className="max-w-md" />
          </NavigationMenuItem>

          <NavigationMenuItem className="hidden pr-4 lg:block">
            <CategoriesDropdown categories={sortedCategories} />
          </NavigationMenuItem>

          <NavigationMenuItem className="md:ml-auto lg:ml-0">
            <SearchbarMenu className="lg:hidden" />
          </NavigationMenuItem>

          {navbarIconItems.map(({ to, ariaLabel, Icon }) => (
            <NavigationMenuItem key={to}>
              <IconLink
                link={{ to }}
                ariaLabel={ariaLabel}
              >
                <Icon />
              </IconLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
