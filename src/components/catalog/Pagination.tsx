import { Button } from "../ui/button";

type Props = {
  totalPages: number;
  currentPage: number;
  onPageClick?: (newPage: number) => void;
  onNextPage?: () => void;
  onPreviousPage?: () => void;
}

export const Pagination = ({ totalPages, onPageClick, onNextPage, onPreviousPage, currentPage }: Props) => {
  return (
    <div className="flex justify-center gap-4">
      <Button
        variant="paginarrow"
        size="icon-sm"
        disabled={currentPage === 1}
        onClick={onPreviousPage}
      >
        {"<"}
      </Button>
      <div className="flex items-center gap-2">
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          const isActive = currentPage === pageNumber;

          return (
            <Button
              key={index}
              variant={isActive ? "activ" : "pagination"}
              size="icon-sm"
              disabled={isActive}
              onClick={() => onPageClick?.(pageNumber)}
            >
              {pageNumber}
            </Button>
          );
        })}
      </div>
      <Button
        variant="paginarrow"
        size="icon-sm"
        disabled={currentPage === totalPages}
        onClick={onNextPage}
      >
        {'>'}        
      </Button>
    </div>
  )
}