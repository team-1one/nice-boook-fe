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
import { Link, rootRouteId, useLoaderData } from '@tanstack/react-router';

import { Heart, Search, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const sortedCategories = useLoaderData({ from: rootRouteId }).sort(
    (prev, next) => prev.localeCompare(next),
  );

  return (
    <NavigationMenu
      viewport={false}
      className={cn('max-w-full justify-start gap-6 ps-3', navBarHeight)}
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
        {navLinks.map(({ label, link }) => (
          <TextNavItem
            key={`${label}-${link.to}`}
            label={label}
            link={link}
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

        <NavigationMenuItem className="rounded-md border">
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent className="h-96">
            <ScrollArea className="h-full">
              <ul>
                {sortedCategories.map((category) => (
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

        <div className="ms-4 flex">
          <IconButton link={{ to: '/favorites' }}>
            <Heart />
          </IconButton>
          <IconButton link={{ to: '/cart' }}>
            <ShoppingBag />
          </IconButton>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
