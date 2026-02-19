import { Field, FieldLabel } from "../ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Typography } from "../ui/Typography";

export type Props = {
  value: string;
  onChange: (value: string) => void;
}

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
              <SelectItem value="16">16</SelectItem>
              <SelectItem value="32">32</SelectItem>
              <SelectItem value="64">64</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </div>
    // <form action="" className='w-33 border'>
    //   <label htmlFor="items-on-page" className="w-full h-full font-manrope font-medium text-[12px]">
    //     Items on page
    //   </label>
    //   <select
    //     id='items-on-page'
    //     className='w-[132px] h-[40px] font-manrope font-medium text-[14px] radius-4'
    //     value={value}
    //     onChange={event => onChange(event.target.value)}
    //   >
    //     <option value='16'>16</option>
    //     <option value='32'>32</option>
    //     <option value='64'>64</option>
    //     <option value='100'>100</option>
    //   </select>
    // </form>
  );
};
