import type { DetailItem } from '../lib/types';
import { Table, TableCell, TableRow } from '@/components/ui/table';

interface DetailListProps {
  items: DetailItem[];
}

export function DetailList({ items }: DetailListProps) {
  return (
    <Table>
      {items.map(({ label, value }) => (
        <TableRow key={`${label}:${value}`}>
          <TableCell className="text-left">{label}</TableCell>
          <TableCell className="text-right">{value}</TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
