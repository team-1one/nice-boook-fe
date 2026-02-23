import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from '@tanstack/react-router';
import { Home } from 'lucide-react';
import { Fragment } from 'react';
import type { BreadcrumbLinkItem } from '../lib/types';

type BookBreadcrumbsProps = {
  title: string;
  items: BreadcrumbLinkItem[];
};

export function BookBreadcrumbs({ title, items }: BookBreadcrumbsProps) {
  return (
    <Breadcrumb className="pb-6">
      <BreadcrumbList className="text-gray-primary flex-nowrap text-sm font-semibold whitespace-nowrap uppercase md:text-base">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">
              <Home />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {items.map((crumb, index) => (
          <Fragment key={`${crumb.label}-${index}`}>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink asChild>
                <Link
                  to={crumb.to}
                  params={crumb.params}
                >
                  {crumb.label}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-gray-secondary hidden md:block" />
          </Fragment>
        ))}

        <BreadcrumbItem className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <BreadcrumbEllipsis />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="uppercase">
              {items.map((crumb, index) => (
                <DropdownMenuItem
                  key={`${crumb.label}-${index}`}
                  asChild
                >
                  <Link
                    to={crumb.to}
                    params={crumb.params}
                  >
                    {crumb.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="text-gray-secondary md:hidden" />

        <BreadcrumbItem className="text-gray-secondary min-w-0">
          <span className="truncate">{title}</span>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
