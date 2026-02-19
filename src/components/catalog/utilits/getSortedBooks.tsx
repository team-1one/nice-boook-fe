import type { BookData } from "@/types/book";
import type { SortOption } from "../typeOfSortOption";

  export const getSortedBooks = (books: BookData[] | null, sortOption: SortOption): BookData[] => {
    if (!books) return [];
    if (!sortOption) return books;

    const sorted = [...books];

    const getActualPrice = (book: BookData) =>
      book.priceDiscount ?? book.priceRegular;
    
    switch (sortOption) {
      case "newest":
        return sorted.sort((a, b) => Number(b.publicationYear) - Number(a.publicationYear));
      case "oldest":
        return sorted.sort((a, b) => Number(a.publicationYear) - Number(b.publicationYear));
      case "name-asc":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case "cheaper":
        return sorted.sort((a, b) => getActualPrice(a) - getActualPrice(b));
      case "expensive":
        return sorted.sort((a, b) => getActualPrice(b) - getActualPrice(a));
      default:
        return books;
    }
  };