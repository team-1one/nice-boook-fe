
import { Field, FieldLabel } from '../ui/field';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Typography } from '../ui/Typography';
import { SORT_OPTIONS } from './constants/catalog';
import type { SortOption } from './typeOfSortOption';

export type Props = {
  value?: SortOption;
  onChange: (value: SortOption) => void;
}

export const SortBySelect = ({ value, onChange }: Props) => {

  return (
    <div className='w-44 relative opacity-100'>
      <Field className="flex flex-col gap-[3px]">
        <FieldLabel htmlFor="sort-by">
          <Typography variant="small" color="secondary">
            Sort by
          </Typography>
        </FieldLabel>

        <Select defaultValue={value || ""} onValueChange={onChange}>
          <SelectTrigger id="sort-by">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {SORT_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
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
