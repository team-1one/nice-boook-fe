import i18n, { type Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const modules = import.meta.glob('./locales/**/*.json', { eager: true });

const resources = Object.entries(modules).reduce<Resource>(
  (acc, [path, module]) => {
    const match = /\.\/locales\/(\w+)\/(\w+)\.json$/.exec(path);
    if (match) {
      const [, lang, ns] = match;
      if (!acc[lang]) acc[lang] = {};
      acc[lang][ns] = (module as { default: Resource }).default;
    }
    return acc;
  },
  {},
);

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS: 'book',
    fallbackLng: 'en',
    returnNull: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
