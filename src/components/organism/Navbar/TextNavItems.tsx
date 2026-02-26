import { useTranslation } from 'react-i18next';
import { navLinks } from './constants';
import TextNavItem from './molecule/TextNavItem';

const TextNavItems = () => {
  const { t } = useTranslation('nav');

  return (
    <>
      {navLinks.map(({ label, link }) => (
        <TextNavItem
          key={`${label}-${link.to}`}
          label={t(`links.${label}`)}
          link={link}
        />
      ))}
    </>
  );
};

export default TextNavItems;
