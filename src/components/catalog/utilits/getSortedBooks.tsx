import type { SortOption } from "../typeOfSortOption";
import type { Book } from "@/lib/schemas/book.schema";

const getActualPrice = (book: Book): number => {
  return book.price_discount != null
    ? book.price_discount
    : book.price_regular;
};

export const getSortedBooks = (
  books: Book[] | null,
  sortOption: SortOption
): Book[] => {
  if (!books) return [];

  const sorted = [...books];

  switch (sortOption) {
    case "newest":
      return sorted.sort(
        (a, b) =>
          Number(b.publication_year) - Number(a.publication_year)
      );

    case "oldest":
      return sorted.sort(
        (a, b) =>
          Number(a.publication_year) - Number(b.publication_year)
      );

    case "name-asc":
      return sorted.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

    case "name-desc":
      return sorted.sort((a, b) =>
        b.name.localeCompare(a.name)
      );

    case "cheaper":
      return sorted.sort(
        (a, b) =>
          getActualPrice(a) - getActualPrice(b)
      );

    case "expensive":
      return sorted.sort(
        (a, b) =>
          getActualPrice(b) - getActualPrice(a)
      );

    default:
      return sorted;
  }
};