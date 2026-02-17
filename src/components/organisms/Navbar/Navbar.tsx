import { navBarHeight, navLinks } from './constants';
import { IconButton, TextNavItem } from './SubComponents';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import { Separator } from '@/components/ui/separator';
import { Link } from '@tanstack/react-router';
import { Heart, Search, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <NavigationMenu
      viewport={false}
      className={cn('ps-3 w-full justify-start gap-6 max-w-full', navBarHeight)}
    >
      <NavigationMenuList>
        <NavigationMenuItem className="h-full">
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

      <NavigationMenuList className="gap-6">
        {navLinks.map(({ to, label, exact }) => (
          <TextNavItem
            key={to}
            to={to}
            label={label}
            exact={exact}
          />
        ))}
      </NavigationMenuList>

      {/* kludge for flexing elements */}
      <div className="flex-1" />

      <NavigationMenuList className={navBarHeight}>
        <NavigationMenuItem>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <Search />
            </InputGroupAddon>
            <InputGroupInput
              type="search"
              placeholder="Find a book or author"
            />
          </InputGroup>
        </NavigationMenuItem>

        <NavigationMenuItem className="border rounded-md">
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/paper">Paper books</Link>
                </NavigationMenuLink>
                <Separator />
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/kindle">Kindle books</Link>
                </NavigationMenuLink>
                <Separator />
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/audiobook">Audiobooks</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <div className="flex ms-4">
          <IconButton to="/favorites">
            <Heart />
          </IconButton>
          <IconButton to="/cart">
            <ShoppingBag />
          </IconButton>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
