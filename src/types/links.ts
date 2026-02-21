import type { LinkProps, RegisteredRouter } from '@tanstack/react-router';

type AppPath = Exclude<LinkProps<RegisteredRouter>['to'], undefined>;

export type FooterLink =
  | { to: AppPath; label: string; external: false }
  | { to: string; label: string; external: true };
