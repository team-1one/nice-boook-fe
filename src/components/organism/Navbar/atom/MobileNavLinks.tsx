import UnderlinedLink from '@/components/organism/Navbar/molecule/UnderlinedLink';
import { navLinks } from '../constants';
import { useTranslation } from 'react-i18next';

type MobileNavLinksProps = {
  onNavigate?: () => void;
};

const MobileNavLinks = ({ onNavigate }: MobileNavLinksProps) => {
  const { t } = useTranslation('nav');

  return (
    <nav
      aria-label="Mobile navigation links"
      className="flex flex-col items-center gap-4"
    >
      {navLinks.map(({ label, link }) => (
        <UnderlinedLink
          key={`${label}-${link.to}`}
          link={link}
          onClick={onNavigate}
          className="text-muted-foreground hover:text-foreground active:text-foreground px-2 py-1 text-xl font-semibold uppercase transition-colors"
          activeClassName="text-foreground"
        >
          <span>{t(`links.${label}`)}</span>
        </UnderlinedLink>
      ))}
    </nav>
  );
};

export default MobileNavLinks;
