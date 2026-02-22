import { Field, FieldLabel } from "../ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Typography } from "../ui/Typography";

export type Props = {
  value: string;
  onChange: (value: string) => void;
}

const ITEMS_PER_PAGE = [16, 32, 64, 100];

export const ItemsOnPage = ({ value, onChange }: Props) => {

  return (
    <div className='w-33 relative opacity-100'>
      <Field className="flex flex-col gap-[3px]">
        <FieldLabel htmlFor="items-on-page">
          <Typography variant="small" color="secondary">
            Items on page
          </Typography>
        </FieldLabel>

        <Select defaultValue={value} onValueChange={onChange}>
          <SelectTrigger id="items-on-page">
            <SelectValue placeholder="Items on page" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {ITEMS_PER_PAGE.map((item) => (
                <SelectItem key={item} value={item.toString()}>{item}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </div>
  );
};
