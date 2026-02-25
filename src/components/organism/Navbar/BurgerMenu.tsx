import {
  CategoriesDropdown,
  IconButton,
  IconLink,
  LogoLink,
  MobileNavLinks,
  SearchInputControl,
} from '@/components/organism/Navbar/atom';
import {
  navbarActionItems,
  navBarHeight,
} from '@/components/organism/Navbar/constants';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface Props {
  sortedCategories: string[];
}
const BurgerMenu = ({ sortedCategories }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
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
          <Menu
            strokeWidth={2}
            className="stroke-foreground size-6"
          />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full max-w-full gap-0 p-0 sm:max-w-full"
      >
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        <SheetDescription className="sr-only">
          Mobile navigation menu
        </SheetDescription>
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
              <IconButton
                className="w-14 border-l-0"
                aria-label="Close navigation menu"
                onClick={closeMobileMenu}
              >
                <X
                  className="stroke-foreground size-6"
                  strokeWidth={2.5}
                />
              </IconButton>
            </SheetClose>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-8">
            <MobileNavLinks onNavigate={closeMobileMenu} />

            <div className="mt-8 space-y-3">
              <SearchInputControl />
              <CategoriesDropdown
                categories={sortedCategories}
                onClick={closeMobileMenu}
              />
            </div>
          </div>

          <div className="grid shrink-0 grid-cols-2 border-t">
            {navbarActionItems.map(({ to, ariaLabel, Icon }) => (
              <IconLink
                key={to}
                link={{ to }}
                ariaLabel={ariaLabel}
                onClick={closeMobileMenu}
                className={cn('w-full')}
              >
                <Icon />
              </IconLink>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BurgerMenu;
