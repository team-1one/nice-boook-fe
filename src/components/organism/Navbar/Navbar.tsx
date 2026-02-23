import { navBarHeight } from './constants';
import {
  ActionIconButton,
  ActionIconLink,
  CategoriesDropdown,
  LogoLink,
  MobileNavLinks,
  SearchInputControl,
  SearchMenuAction,
  TextNavItems,
} from './SubComponents';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Link, rootRouteId, useLoaderData } from '@tanstack/react-router';

import { Heart, Menu, ShoppingBag, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { CATALOG_LIMITS } from '@/components/catalog/constants/catalog';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sortedCategories = useLoaderData({ from: rootRouteId }).sort(
    (prev, next) => prev.localeCompare(next),
  );
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-background/80 sticky top-0 z-50 mb-3 w-full border-b backdrop-blur-md">
      <div className={cn('flex items-stretch sm:hidden', navBarHeight)}>
        <div className="flex flex-1 items-center px-5">
          <LogoLink />
        </div>

        <Sheet
          open={isMobileMenuOpen}
          onOpenChange={setIsMobileMenuOpen}
        >
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="h-full w-16 rounded-none border-l"
              aria-label="Open navigation menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            showCloseButton={false}
            className="w-full max-w-full gap-0 p-0 sm:max-w-full"
          >
            <div className="flex h-full flex-col">
              <div
                className={cn(
                  'flex items-center justify-between border-b',
                  navBarHeight,
                )}
              >
                <SheetClose asChild>
                  <LogoLink
                    className="px-4"
                    onClick={closeMobileMenu}
                  />
                </SheetClose>

                <SheetClose asChild>
                  <ActionIconButton
                    className="w-14 border-l-0"
                    aria-label="Close navigation menu"
                    onClick={closeMobileMenu}
                  >
                    <X />
                  </ActionIconButton>
                </SheetClose>
              </div>

              <ScrollArea className="flex-1">
                <div className="flex min-h-full flex-col px-4 py-8">
                  <MobileNavLinks onNavigate={closeMobileMenu} />

                  <div className="mt-8 space-y-3">
                    <SearchInputControl />
                    <CategoriesDropdown
                      categories={sortedCategories}
                      onCategorySelect={closeMobileMenu}
                    />
                  </div>
                </div>
              </ScrollArea>

              <div className="grid grid-cols-2 border-t">
                <Link
                  to="/favorites"
                  aria-label="Favorites"
                  onClick={closeMobileMenu}
                  className={cn(
                    'hover:bg-accent/60 flex items-center justify-center transition-colors',
                    navBarHeight,
                  )}
                >
                  <Heart />
                </Link>
                <Link
                  to="/cart"
                  aria-label="Cart"
                  onClick={closeMobileMenu}
                  className={cn(
                    'hover:bg-accent/60 flex items-center justify-center border-l transition-colors',
                    navBarHeight,
                  )}
                >
                  <ShoppingBag />
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <NavigationMenu
        viewport={false}
        className={cn(
          'hidden w-full max-w-full justify-start sm:flex [&>div]:w-full',
          navBarHeight,
        )}
      >
        <NavigationMenuList className="w-full min-w-0 gap-0">
          <NavigationMenuItem className="shrink-0">
            <NavigationMenuLink asChild>
              <LogoLink className="px-4 lg:px-5" />
            </NavigationMenuLink>
          </NavigationMenuItem>

          <TextNavItems />

          <NavigationMenuItem className="ml-auto hidden min-w-0 flex-1 items-center px-3 2xl:flex">
            <SearchInputControl className="max-w-md" />
          </NavigationMenuItem>

          <NavigationMenuItem className="hidden px-3 2xl:block">
            <CategoriesDropdown
              categories={sortedCategories}
              triggerClassName="min-w-56"
            />
          </NavigationMenuItem>

          <NavigationMenuItem className="2xl:hidden">
            <SearchMenuAction />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <ActionIconLink
              link={{ to: '/favorites' }}
              ariaLabel="Favorites"
            >
              <Heart />
            </ActionIconLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <ActionIconLink
              link={{ to: '/cart' }}
              ariaLabel="Cart"
            >
              <ShoppingBag />
            </ActionIconLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
