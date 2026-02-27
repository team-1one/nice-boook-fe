import type { LinkProps, RegisteredRouter } from '@tanstack/react-router';
import type { ParseKeys } from 'i18next';

type AppPath = Exclude<LinkProps<RegisteredRouter>['to'], undefined>;
type I18nKey = ParseKeys<'nav'>;

export type FooterLink =
  | { to: AppPath; label: string; external: false; localeKey: I18nKey }
  | { to: string; label: string; external: true; localeKey?: I18nKey };
