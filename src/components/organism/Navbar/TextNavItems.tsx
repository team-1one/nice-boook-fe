import { navLinks } from './constants';
import TextNavItem from './molecule/TextNavItem';

const TextNavItems = () => (
  <>
    {navLinks.map(({ label, link }) => (
      <TextNavItem
        key={`${label}-${link.to}`}
        label={label}
        link={link}
      />
    ))}
  </>
);

export default TextNavItems;
