import type React from 'react';
import { SortOption } from './typeOfSortOption';

export type Props = {
  value: string;
  onChange: (value: string) => void;
}

export const SortBySelect: React.FC<Props> = ({ value, onChange }: Props) => {

  return (
    <form action="" className='w-44 border relative opacity-100'>
      <label htmlFor="sort-by" className="w-full h-full font-manrope font-medium text-[12px]">
        Sort by
      </label>
      <select
        className='w-[176px] h-[40px] font-manrope font-medium text-[14px] radius-4'
        value={value}
        onChange={event => onChange(event.target.value)}
      >
        <option value={SortOption.Base}>Select a sort option</option>
        <option value={SortOption.Newest}>Newest</option>
        <option value={SortOption.Oldest}>Oldest</option>
        <option value={SortOption.Cheaper}>Cheaper</option>
        <option value={SortOption.Expensive}>Expensive</option>
        <option value={SortOption.NameAsc}>Name (A-Z)</option>
        <option value={SortOption.NameDesc}>Name (Z-A)</option>
      </select>
    </form>
  );
};
