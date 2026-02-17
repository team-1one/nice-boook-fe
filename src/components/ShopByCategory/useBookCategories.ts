import { useBookData } from '../../hooks/useBooks';

export type Category = {
  title: string;
  slug: string;
  imageUrl: string;
  bookCount: number;
};

export const useBookCategories = () => {
  const { data: paperbackBooks } = useBookData('paperback.json');
  const { data: audiobookBooks } = useBookData('audiobook.json');
  const { data: kindleBooks } = useBookData('kindle.json');

  const bookCounts = {
    paperbook: paperbackBooks?.length ?? 0,
    audiobook: audiobookBooks?.length ?? 0,
    kindle: kindleBooks?.length ?? 0,
  };

  const categories: Category[] = [
    {
      title: 'Paper books',
      slug: 'paperbooks',
      imageUrl:
        'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/category/paper_books.svg',
      bookCount: bookCounts.paperbook,
    },
    {
      title: 'Audiobooks',
      slug: 'audiobooks',
      imageUrl:
        'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/category/audiobooks.svg',
      bookCount: bookCounts.audiobook,
    },
    {
      title: 'Kindle books',
      slug: 'kindlebooks',
      imageUrl:
        'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/category/kindle_books.svg',
      bookCount: bookCounts.kindle,
    },
  ];

  return { categories };
};