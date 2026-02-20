interface BaseLink {
  to: string;
  label: string;
}

export interface FooterLink extends BaseLink {
  external: boolean;
}
