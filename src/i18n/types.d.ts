import enBook from './locales/en/book.json';
import enCatalog from './locales/en/catalog.json';
import enCart from './locales/en/cart.json';
import enNav from './locales/en/nav.json';
import enRights from './locales/en/rights.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'book';
    resources: {
      book: typeof enBook;
      catalog: typeof enCatalog;
      cart: typeof enCart;
      nav: typeof enNav;
      rights: typeof enRights;
    };
  }
}
