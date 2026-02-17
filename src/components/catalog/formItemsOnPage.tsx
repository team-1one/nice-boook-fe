import type React from 'react';

export type Props = {
  value: string;
  onChange: (value: string) => void;
}

export const ItemsOnPage: React.FC<Props> = ({ value, onChange }: Props) => {

  return (
    <form action="" className='w-33 border'>
      <label htmlFor="items-on-page" className="w-full h-full font-manrope font-medium text-[12px]">
        Items on page
      </label>
      <select
        className='w-[132px] h-[40px] font-manrope font-medium text-[14px] radius-4'
        value={value}
        onChange={event => onChange(event.target.value)}
      >
        <option value='16'>16</option>
        <option value='32'>32</option>
        <option value='64'>64</option>
        <option value='100'>100</option>
      </select>
    </form>
  );
};
