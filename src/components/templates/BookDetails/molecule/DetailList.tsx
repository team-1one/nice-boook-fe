import { Separator } from '@/components/ui/separator';
import type { DetailItem } from '../lib/types';

interface DetailListProps {
  items: DetailItem[];
  className?: string;
}

export function DetailList({ items, className }: DetailListProps) {
  return (
    <div className={className}>
      {items.map(({ label, value }) => (
        <div key={label}>
          <div className="flex justify-between py-1 capitalize">
            <span>{label}</span>
            <span>{value}</span>
          </div>
          <Separator />
        </div>
      ))}
    </div>
  );
}
