
import { Field, FieldLabel } from '../ui/field';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Typography } from '../ui/Typography';
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
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="cheaper">Cheaper</SelectItem>
              <SelectItem value="expensive">Expensive</SelectItem>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </div>
  );
};
