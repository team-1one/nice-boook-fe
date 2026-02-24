import type { SortSearchKey } from '@/types/search';
import { Field, FieldLabel } from '../ui/field';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Typography } from '../ui/Typography';
import { SORT_OPTIONS } from './constants/catalog';

export type Props = {
  value?: SortSearchKey;
  onChange: (value: SortSearchKey) => void;
};

export const SortBySelect = ({ value, onChange }: Props) => {
  return (
    <div className="relative w-44 opacity-100">
      <Field className="flex flex-col gap-0.75">
        <FieldLabel htmlFor="sort-by">
          <Typography
            variant="small"
            color="secondary"
          >
            Sort by
          </Typography>
        </FieldLabel>

        <Select
          value={value}
          onValueChange={(nextValue) => onChange(nextValue as SortSearchKey)}
        >
          <SelectTrigger id="sort-by">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {SORT_OPTIONS.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </div>
  );
};
