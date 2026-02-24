import { BookBreadcrumbs } from '../molecule/BookBreadcrumbs';
import type { BreadcrumbLinkItem } from '../lib/types';

type BookHeaderProps = {
  title: string;
  author: string;
  breadcrumbs: BreadcrumbLinkItem[];
};

export function BookHeader({ title, author, breadcrumbs }: BookHeaderProps) {
  return (
    <header className="w-full">
      <BookBreadcrumbs
        title={title}
        items={breadcrumbs}
      />

      <h1 className="mb-2 text-4xl leading-tight font-bold wrap-break-word md:text-5xl">
        {title}
      </h1>
      <p className="text-gray-secondary text-lg">{author}</p>
    </header>
  );
}
