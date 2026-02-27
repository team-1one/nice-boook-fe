import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { FooterLink } from '@/types/links';
import { Link } from '@tanstack/react-router';
import { ChevronDown, ChevronUp, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

const linkClass =
  'uppercase text-sm font-bold text-muted-foreground hover:text-foreground transition-colors';

export const FooterNavLink = ({
  to,
  label,
  external,
  localeKey,
}: FooterLink) => {
  const { t } = useTranslation('nav');
  const text = localeKey ? t(localeKey) : label;

  return external ?
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {text}
      </a>
    : <Link
        to={to}
        className={linkClass}
      >
        {text}
      </Link>;
};

export const FooterNavItem = (link: FooterLink) => (
  <NavigationMenuItem>
    <NavigationMenuLink asChild>
      <FooterNavLink {...link} />
    </NavigationMenuLink>
  </NavigationMenuItem>
);

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'uk', label: 'Українська' },
] as const;

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('uk') ? 'uk' : 'en';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground flex cursor-pointer items-center gap-1 text-sm transition-colors">
        <Globe className="h-4 w-4" />
        <span>{currentLang.toUpperCase()}</span>
        <ChevronDown className="h-3 w-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="top"
      >
        {LANGUAGES.map(({ code, label }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => i18n.changeLanguage(code)}
            className={cn(currentLang === code && 'font-semibold')}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const BackToTop = () => {
  const { t } = useTranslation('nav');

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="text-muted-foreground hover:text-foreground flex cursor-pointer items-center gap-1 text-sm transition-colors"
    >
      <span>{t('backToTop')}</span>
      <ChevronUp className="h-4 w-4" />
    </button>
  );
};
