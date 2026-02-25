import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (nextPage: number) => void;
}

export function CatalogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) {
    return null;
  }

  const handlePageClick = (page: number) => {
    if (page === currentPage) return;
    onPageChange(page);
  };

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={(event) => {
              event.preventDefault();
              if (!canGoPrevious) return;
              handlePageClick(currentPage - 1);
            }}
            aria-disabled={!canGoPrevious}
            className={cn(!canGoPrevious && 'pointer-events-none opacity-50')}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                isActive={pageNumber === currentPage}
                onClick={(event) => {
                  event.preventDefault();
                  handlePageClick(pageNumber);
                }}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            onClick={(event) => {
              event.preventDefault();
              if (!canGoNext) return;
              handlePageClick(currentPage + 1);
            }}
            aria-disabled={!canGoNext}
            className={cn(!canGoNext && 'pointer-events-none opacity-50')}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
