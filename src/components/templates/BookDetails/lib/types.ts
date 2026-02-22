import type { LinkOptions } from '@tanstack/react-router';

export type BreadcrumbLinkItem = {
  label: string;
  to: LinkOptions['to'];
  params: LinkOptions['params'];
};

export interface DetailItem {
  label: string;
  value: string;
}
