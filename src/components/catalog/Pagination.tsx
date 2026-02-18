type Props = {
  totalPages: number;
  currentPage: number;
  onPageClick?: (newPage: number) => void;
  onNextPage?: () => void;
  onPreviousPage?: () => void;
}

export const Pagination = ({ totalPages, onPageClick, onNextPage, onPreviousPage, currentPage }: Props) => {
  return (
    <div>
      <button 
        disabled={currentPage === 1} 
        onClick={onPreviousPage}
      >
        {'<'}        
      </button>
      <div>
        {[...Array(totalPages)].map((_, index) => (
          <button 
            key={index}
            disabled={currentPage === index + 1}
            onClick={() => onPageClick?.(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage === totalPages}
        onClick={onNextPage}
      >
        {'>'}        
      </button>
    </div>
  )
}