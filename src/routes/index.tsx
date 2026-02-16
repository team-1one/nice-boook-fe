import { BookCategories } from '@/components/ShopByCategory/BookCategories';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <BookCategories />
    </div>
  );
}
