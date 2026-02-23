import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import {
  activeLinkClasses,
  navBarHeight,
  navLinks,
  underlineClasses,
  underlinedClasses,
} from './constants';
import { cn } from '@/lib/utils';
import { Link, type LinkOptions } from '@tanstack/react-router';
import { ChevronDown, Search } from 'lucide-react';

export const LogoLink = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => (
  <Link
    to="/"
    className={cn('inline-flex shrink-0 items-center', className)}
    onClick={onClick}
  >
    <img
      src="/logo.svg"
      alt="Nice Book"
      className="h-8 w-auto max-w-[min(38vw,10rem)] sm:h-9 sm:max-w-34"
    />
  </Link>
);

// Reusable underline component
const Underline = ({ children }: { children: React.ReactNode }) => (
  <div
    className={underlineClasses}
    aria-hidden
  >
    <span className="invisible">{children}</span>
  </div>
);

const UnderlineNavItem = ({
  link,
  className,
  activeProps,
  children,
}: {
  link: LinkOptions;
  className?: string;
  activeProps?: Record<string, unknown>;
  children: React.ReactNode;
}) => (
  <NavigationMenuLink
    className="text-muted-foreground hover:text-foreground font-bold uppercase transition-colors"
    asChild
  >
    <Link
      {...link}
      className={cn(underlinedClasses, className)}
      activeProps={activeProps}
    >
      {children}
      <Underline>{children}</Underline>
    </Link>
  </NavigationMenuLink>
);

export const TextNavItem = ({
  link,
  label,
}: {
  link: LinkOptions;
  label: string;
}) => (
  <UnderlineNavItem
    link={link}
    activeProps={{ className: cn('text-foreground', activeLinkClasses) }}
  >
    <span>{label}</span>
  </UnderlineNavItem>
);

export const TextNavItems = () => (
  <>
    {navLinks.map(({ label, link }) => (
      <TextNavItem
        key={`${label}-${link.to}`}
        label={label}
        link={link}
      />
    ))}
  </>
);

const actionCellClasses = cn(
  'hover:bg-accent/60 text-foreground inline-flex w-16 shrink-0 items-center justify-center border-l transition-colors',
  navBarHeight,
);

export const ActionIconLink = ({
  link,
  ariaLabel,
  className,
  children,
}: {
  link: LinkOptions;
  ariaLabel: string;
  className?: string;
  children: React.ReactNode;
}) => (
  <Link
    {...link}
    aria-label={ariaLabel}
    className={cn(actionCellClasses, className)}
  >
    {children}
  </Link>
);

export const ActionIconButton = ({
  className,
  children,
  ...props
}: React.ComponentProps<'button'>) => (
  <Button
    variant="ghost"
    size="icon"
    className={cn(actionCellClasses, 'rounded-none', className)}
    {...props}
  >
    {children}
  </Button>
);

export const SearchInputControl = ({ className }: { className?: string }) => (
  <InputGroup className={cn('h-12', className)}>
    <InputGroupAddon align="inline-start">
      <Search />
    </InputGroupAddon>
    <InputGroupInput
      type="search"
      placeholder="Find a book or author"
    />
  </InputGroup>
);

export const SearchMenuAction = ({ className }: { className?: string }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <ActionIconButton
        className={className}
        aria-label="Open search"
      >
        <Search />
      </ActionIconButton>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      align="end"
      className="w-80 p-2"
    >
      <SearchInputControl className="h-10" />
    </DropdownMenuContent>
  </DropdownMenu>
);

export const CategoriesDropdown = ({
  categories,
  onCategorySelect,
  triggerClassName,
  contentClassName,
}: {
  categories: string[];
  onCategorySelect?: () => void;
  triggerClassName?: string;
  contentClassName?: string;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="outline"
        className={cn(
          'h-12 w-full justify-between px-4 text-sm font-semibold',
          triggerClassName,
        )}
      >
        Categories
        <ChevronDown className="text-muted-foreground size-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="start"
      className={cn(
        'max-h-80 w-(--radix-dropdown-menu-trigger-width) overflow-y-auto',
        contentClassName,
      )}
    >
      {categories.map((category) => (
        <DropdownMenuItem
          key={category}
          asChild
          className="cursor-pointer capitalize"
        >
          <Link
            to="/category/$category"
            params={{ category }}
            onClick={onCategorySelect}
          >
            {category}
          </Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export const MobileNavLinks = ({ onNavigate }: { onNavigate?: () => void }) => (
  <nav className="flex flex-col items-center gap-4">
    {navLinks.map(({ label, link }) => (
      <Link
        key={`${label}-${link.to}`}
        {...link}
        onClick={onNavigate}
        className="text-muted-foreground hover:text-foreground relative px-2 py-1 text-xl font-semibold uppercase transition-colors"
        activeProps={{
          className:
            'text-foreground after:bg-foreground after:absolute after:-bottom-0.5 after:left-1/2 after:h-0.5 after:w-10 after:-translate-x-1/2',
        }}
      >
        {label}
      </Link>
    ))}
  </nav>
);
