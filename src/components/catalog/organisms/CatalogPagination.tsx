import { useMemo } from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';

type PaginationToken = number | 'left-ellipsis' | 'right-ellipsis';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (nextPage: number) => void;
}

function buildPaginationItems(
  currentPage: number,
  totalPages: number,
): PaginationToken[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const leftSibling = Math.max(2, currentPage - 1);
  const rightSibling = Math.min(totalPages - 1, currentPage + 1);
  const items: PaginationToken[] = [1];

  if (leftSibling > 2) {
    items.push('left-ellipsis');
  }

  for (let page = leftSibling; page <= rightSibling; page += 1) {
    items.push(page);
  }

  if (rightSibling < totalPages - 1) {
    items.push('right-ellipsis');
  }

  items.push(totalPages);

  return items;
}

export function CatalogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const pages = useMemo(
    () => buildPaginationItems(currentPage, totalPages),
    [currentPage, totalPages],
  );

  if (totalPages <= 1) {
    return null;
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : undefined}
            className={cn(currentPage === 1 && 'pointer-events-none opacity-50')}
            onClick={(event) => {
              event.preventDefault();
              onPageChange(currentPage - 1);
            }}
          />
        </PaginationItem>

        {pages.map((item) => (
          <PaginationItem key={typeof item === 'number' ? item : item}>
            {typeof item === 'number' ? (
              <PaginationLink
                href="#"
                isActive={currentPage === item}
                onClick={(event) => {
                  event.preventDefault();
                  onPageChange(item);
                }}
              >
                {item}
              </PaginationLink>
            ) : (
              <PaginationEllipsis />
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            aria-disabled={currentPage === totalPages}
            tabIndex={currentPage === totalPages ? -1 : undefined}
            className={cn(
              currentPage === totalPages && 'pointer-events-none opacity-50',
            )}
            onClick={(event) => {
              event.preventDefault();
              onPageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
