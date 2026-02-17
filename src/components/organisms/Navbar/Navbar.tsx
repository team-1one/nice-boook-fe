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

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { getRouteApi, Link } from '@tanstack/react-router';

import { Heart, Search, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const categories = [...getRouteApi('__root__').useLoaderData()].sort((a, b) =>
    a.localeCompare(b),
  );

  return (
    <NavigationMenu
      viewport={false}
      className={cn('ps-3 justify-start gap-6 max-w-full', navBarHeight)}
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

      <NavigationMenuList className="gap-4">
        {navLinks.map(({ to, label }) => (
          <TextNavItem
            key={to}
            to={to}
            label={label}
          />
        ))}
      </NavigationMenuList>

      {/* HACK: kludge to flex elements correctly */}
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
          <NavigationMenuContent className="h-96">
            <ScrollArea className="h-full">
              <ul>
                {categories.map((category) => (
                  <li key={category}>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/category/$category"
                        params={{ category }}
                      >
                        {category}
                      </Link>
                    </NavigationMenuLink>
                    <Separator />
                  </li>
                ))}
              </ul>
            </ScrollArea>
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
