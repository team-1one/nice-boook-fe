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

const Navbar = () => {
  return (
    <NavigationMenu
      viewport={false}
      className="h-16 ps-3 w-full justify-start gap-6 max-w-full"
    >
      <NavigationMenuList>
        <NavigationMenuItem className="h-full">
          <NavigationMenuLink
            asChild
            className="h-16"
          >
            <Link
              to="/"
              className="h-full"
            >
              <img
                src="/public/logo.svg"
                alt="logo"
                className="h-10 w-auto"
              />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList className="gap-6">
        {[
          { to: '/', label: 'Home', exact: true },
          { to: '/paper', label: 'Paper' },
          { to: '/kindle', label: 'Kindle' },
          { to: '/audiobook', label: 'Audiobook' },
        ].map(({ to, label, exact }) => (
          <NavigationMenuItem
            key={to}
            className="uppercase font-bold"
          >
            <NavigationMenuLink asChild>
              <Link
                to={to}
                activeOptions={{ exact: !!exact }}
                className="h-16 flex flex-col justify-center items-center group/item relative"
                activeProps={{
                  className:
                    'h-16 flex flex-col justify-center items-center group/item relative [&>div]:opacity-100',
                }}
              >
                <span>{label}</span>
                <div
                  className="absolute bottom-0 h-0.5 bg-foreground opacity-0 group-hover/item:opacity-100"
                  aria-hidden
                  style={{
                    width: 'fit-content',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  <span className="invisible">{label}</span>
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <div className="flex-1" />
      <NavigationMenuList className="h-16 ">
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
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/favorites"
                className="border-l w-16 h-16 flex justify-center items-center"
              >
                <Heart />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/cart"
                className="border-l w-16 h-16 flex justify-center items-center"
              >
                <ShoppingBag />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
