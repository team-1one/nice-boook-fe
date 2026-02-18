import type { SortOption } from './typeOfSortOption';

export type Props = {
  value?: SortOption;
  onChange: (value: SortOption) => void;
}

export const SortBySelect = ({ value, onChange }: Props) => {

  return (
    <div className='w-44 border relative opacity-100'>
      <label htmlFor="sort-by" className="w-full h-full font-manrope font-medium text-[12px]">
        Sort by
      </label>
      <select
        className='w-[176px] h-[40px] font-manrope font-medium text-[14px] radius-4'
        id='sort-by'
        value={value || ""}
        onChange={event => onChange(event.target.value as SortOption)}
      >
        <option value="">Sorting not applied</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="cheaper">Cheaper</option>
        <option value="expensive">Expensive</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
      </select>
    </div>
  );
};
