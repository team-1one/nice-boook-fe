import enBook from './locales/en/book.json';
import enCart from './locales/en/cart.json';
import enCatalog from './locales/en/catalog.json';
import enContacts from './locales/en/contacts.json';
import enFavorites from './locales/en/favorites.json';
import enNav from './locales/en/nav.json';
import enRights from './locales/en/rights.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'book';
    resources: {
      book: typeof enBook;
      cart: typeof enCart;
      catalog: typeof enCatalog;
      contacts: typeof enContacts;
      favorites: typeof enFavorites;
      nav: typeof enNav;
      rights: typeof enRights;
    };
  }
}
