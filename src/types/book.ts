export type BookFormat = 'paperback' | 'audiobook' | 'kindle';

export interface BaseBook {
  id: string;
  type: BookFormat;
  namespaceId: string;
  name: string;
  slug: string;
  priceRegular: number;
  priceDiscount: number | null;
  images: string[];
  langAvailable: ('en' | 'uk')[];
  lang: 'en' | 'uk';
  author: string;
  publicationYear: number;
  publication: string;
  category: string[];
  description: string[];
}

export interface PaperbackBook extends BaseBook {
  type: 'paperback';
  coverType: 'paperback';
  format: string;
  illustrations: boolean;
  numberOfPages: number;
}

export interface DigitalBook extends BaseBook {
  type: 'audiobook' | 'kindle';
  format: string;
  illustrations: boolean;
  numberOfPages: number;
}

export interface AudioBook extends BaseBook {
  narrator: string;
  listeningLength: number;
}

export type BookData = PaperbackBook | DigitalBook | AudioBook;
